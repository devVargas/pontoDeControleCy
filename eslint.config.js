import globals from "globals";
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import cypress from "eslint-plugin-cypress";

export default [
  js.configs.recommended,
  
  // Configurações globais
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022, 
        sourceType: "module", 
      },
      globals: {
        Cypress: "readonly",
        cy: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        context: "readonly",
        expect: "readonly",
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      indent: ["error", 2], 
      "linebreak-style": ["error", "unix"], 
      quotes: ["error", "double"], 
      semi: ["error", "always"], 
      "no-trailing-spaces": "off", 
      "eol-last": "off", 
    },
  },
  
  // Configurações para TypeScript
  {
    files: ["**/*.ts",], 
    languageOptions: {
      parser: tsParser, 
    },
    plugins: {
      "@typescript-eslint": ts, 
      cypress, 
    },
    rules: {
      "no-unused-vars": "off",
      // "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn", 
      "cypress/no-assigning-return-values": "error", 
      // "cypress/no-unnecessary-waiting": "error", // O ESlint vai reclamar de comandos com wait
      "cypress/assertion-before-screenshot": "warn",
    },
  },

];