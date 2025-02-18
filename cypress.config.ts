/// <reference types="cypress" />

import { defineConfig } from "cypress";
import fs from "fs";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const pathToEnv = "cypress.env.json";

      if (fs.existsSync(pathToEnv)) {
        const fileEnv = JSON.parse(fs.readFileSync(pathToEnv, "utf-8"));
        console.log("Conteúdo do cypress.env.json:", fileEnv);
        config.env = {
          ...config.env,
          ...fileEnv,
        };
      }

      on("task", {
        hideXHRLogs() {
          Cypress.on("log:added", (options) => {
            if (options.name === "xhr") {
              options.log = false;
            }
          });
          return null;
        },
      });

      return config;
    },
    baseUrl: "http://127.0.0.1:4000/",
    video: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: false,
      timeStamp: "mmddyyyy_HHMMss",
    },
  },
});