import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...nextCoreWebVitals,
  ...compat.extends("plugin:import/recommended"),
  ...compat.extends("plugin:playwright/recommended"),
  ...compat.extends("plugin:prettier/recommended"),
  {
    plugins: ["simple-import-sort", "no-unused-imports"],
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "no-unused-vars": "error", // Error for unused variables
      "no-unused-imports/no-unused-imports": "error", // Error for unused imports
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
    overrides: [
      {
        files: ["*.js"],
        rules: {},
      },
    ],
  },
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
  }
];

export default eslintConfig;
