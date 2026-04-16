// @ts-check
import { defineConfig } from "astro/config";

const site = process.env.SITE_URL ?? "https://gsheetmailer.com";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  output: "static",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
