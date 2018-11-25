import { browser, Config } from "protractor";

const protractorConfig: Config = {
  capabilities: ["chrome"],
  framework: "custom",
};

export default protractorConfig;
