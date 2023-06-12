import path, { resolve } from "node:path";

const isGitHubPages = true;
const folderName = path.basename(process.cwd()) + "/";
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

export default {
  appType: "mpa",
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        faqs: resolve(__dirname, "src/components/FAQs/faqs.html"),
      },
    },
  },
};
