import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import hooks from "eslint-plugin-react-hooks";

export default defineConfig([
  { files: ["src/**/*.{ts,tsx}", "next.config.ts"], extends: [js.configs.recommended, ...tseslint.configs.recommended, hooks.configs.flat.recommended] },
  globalIgnores([".next/**", "next-env.d.ts", "docs/preview/**"]),
]);
