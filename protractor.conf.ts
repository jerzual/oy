import { browser, Config } from "protractor";

export let config: Config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",

  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: "http://127.0.0.1:8080",
  capabilities: ["chrome"],
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  specs: ["./e2e/features/*.feature"],
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "json:./reports/json/cucumber_report.json",
    require: ["./e2e/step-defs/*.ts"],
    strict: true,
    tags: "@TypeScriptScenario or @CucumberScenario or @ProtractorScenario",
  },
};
