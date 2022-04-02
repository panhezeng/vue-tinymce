import "zx/globals";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.resolve(__dirname, "../dist");
const dest = path.resolve(__dirname, "../../../docs");

await $`rm -rf ${dest}`;
await $`cp -rf ${src} ${path.resolve(__dirname, "../../../")}`;
await $`mv ${path.resolve(__dirname, "../../../dist")} ${dest}`;
await $`cp ${path.resolve(__dirname, "./404.html")} ${dest}`;
const docPath = path.resolve(__dirname, "../../../docs/index.html");
let doc = fs.readFileSync(docPath, "utf8");
doc = doc.replace("<script",`<script>${
    fs.readFileSync(path.resolve(__dirname, "./spa-redirect.js"), "utf8")
}</script>
   <script`)
doc = doc.replaceAll( "/assets/",`./assets/`)
fs.outputFileSync(docPath,doc)

