const shell = require("shelljs");

const path = require("path");

const src = path.resolve(__dirname, "../dist/*");
const dest = path.resolve(__dirname, "../../../docs");

shell.rm("-rf", dest);
shell.mkdir("-p", dest);
shell.cp("-R", src, dest);
shell.cp(path.resolve(__dirname, "./404.html"), dest);

shell.sed(
  "-i",
  "<script",
  `<script>${
    shell.cat(path.resolve(__dirname, "./spa-redirect.js")).stdout
  }</script>
   <script`,
  path.resolve(__dirname, "../../../docs/index.html")
);
shell.sed(
  "-i",
  "/assets/",
  `./assets/`,
  path.resolve(__dirname, "../../../docs/index.html")
);
