import { sparky, fusebox, pluginLink } from "fuse-box";
import * as path from "path";
import { pluginTypeChecker } from "fuse-box-typechecker";

class Context {
  isProduction;
  runServer;
  getServerConfig() {
    return fusebox({
      output: "dist/server/$name-$hash",
      target: "server",
      entry: "src/server.tsx",
      dependencies: { include: ["tslib"] },
      cache: {
        enabled: false,
        root: ".cache/server",
      },
      logging: { level: "succinct" },
      codeSplitting: { scriptRoot: path.resolve(__dirname, "./dist/server") },
      //under plugins
      plugins: [
        pluginTypeChecker({
          tsConfig: "./tsconfig.server.json", // optional, uses fusebox tsconfig if else
          name: "server", // optional, uses "no-name" if missing
        }),
      ],
    });
  }
  getBrowserConfig() {
    return fusebox({
      output: "dist/browser/$name-$hash",
      target: "browser",
      entry: "src/browser.tsx",
      logging: { level: "verbose" },
      dependencies: { include: ["tslib"] },
      webIndex: {
        publicPath: "/public",
        template: "www/index.html",
      },
      tsConfig: "./tsconfig.json",
      link: { useDefault: true },
      cache: {
        enabled: false,
        root: ".cache/browser",
      },
      watch: {
        chokidar: { usePolling: true },
      },
      devServer: {
        httpServer: false,
        hmrServer: { port: 7878 },
      },
      plugins: [
        pluginTypeChecker({
          name: "browser", // optional, uses "no-name" if missing
        }),
      ],
    });
  }
}
const { task, exec, rm } = sparky<Context>(Context);

task("default", async ctx => {
  await rm("./dist");
  const browser = ctx.getBrowserConfig();
  await browser.runDev();

  const server = ctx.getServerConfig();
  await server.runDev(handler => {
    handler.onChange(props => props.result);
  });
});

task("preview", async ctx => {
  ctx.isProduction = true;
  await rm("./dist");
  const browser = ctx.getBrowserConfig();
  await browser.runProd({ uglify: true, manifest: true });

  const server = ctx.getServerConfig();
  const response = await server.runProd({ uglify: false, manifest: true });
  response.bundles.forEach(value => console.log(value));
});
task("dist", async ctx => {
  ctx.runServer = false;
  ctx.isProduction = true;
  const fuse = ctx.getBrowserConfig();
  await fuse.runProd({ uglify: true, manifest: true });
});
