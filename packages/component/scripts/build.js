const shell = require("shelljs");

const path = require("path");
const fs = require("fs");
const glob = require("fast-glob");
const { Project } = require("ts-morph");
const { parse, compileScript } = require("@vue/compiler-sfc");

let index = 1;

main();

async function main() {
  // 这部分内容具体可以查阅 ts-morph 的文档
  // 这里仅需要知道这是用来处理 ts 文件并生成类型声明文件即可
  const project = new Project({
    compilerOptions: {
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      jsx: "preserve",
      allowJs: true, // 如果想兼容 js 语法需要加上
      outDir: "dist", // 可以设置自定义的打包文件夹，如 'types'
    },
    tsConfigFilePath: path.resolve(__dirname, "../../../tsconfig.json"),
    skipAddingFilesFromTsConfig: true,
  });

  // 获取 lib 下的 .vue 和 .ts 文件
  const files = await glob(["src/**/*[!.d].ts", "src/**/*.vue"]);
  const sourceFiles = [];

  await Promise.all(
    files.map(async (file) => {
      // console.log(file);
      if (/\.vue$/.test(file)) {
        // 对于 vue 文件，借助 @vue/compiler-sfc 的 parse 进行解析
        const sfc = parse(String(await fs.promises.readFile(file, "utf-8")));
        // 提取出 script 中的内容
        const { script, scriptSetup } = sfc.descriptor;

        if (script || scriptSetup) {
          const compiled = compileScript(sfc.descriptor, {
            id: `${index++}`,
          });
          const content = compiled.content;
          const lang =
            /tsx?$/.test(script.lang) || /tsx?$/.test(scriptSetup.lang)
              ? ".ts"
              : ".js";
          // let content = "";
          // let lang = ".js";
          // if (script && script.content) {
          //   content += script.content;
          //
          //   if (/tsx?$/.test(script.lang)) {
          //     lang = `.${script.lang}`;
          //   }
          // }
          //
          // if (scriptSetup) {
          // const compiled = compileScript(sfc.descriptor, {
          //   id: `${index++}`,
          // });
          //
          // content += compiled.content;

          //   if (/tsx?$/.test(scriptSetup.lang)) {
          //     lang = `.${scriptSetup.lang}`;
          //   }
          // }

          // console.log(content);

          sourceFiles.push(
            // 创建一个同路径的同名 ts/js 的映射文件
            project.createSourceFile(file + lang, content)
          );
        }
      } else {
        // 如果是 ts 文件则直接添加即可
        sourceFiles.push(project.addSourceFileAtPath(file));
      }
    })
  );

  const diagnostics = project.getPreEmitDiagnostics();

  // 输出解析过程中的错误信息
  console.log(project.formatDiagnosticsWithColorAndContext(diagnostics));

  project.emitToMemory();

  // 随后将解析完的文件写道打包路径
  for (const sourceFile of sourceFiles) {
    const emitOutput = sourceFile.getEmitOutput();

    for (const outputFile of emitOutput.getOutputFiles()) {
      const filePath = outputFile.getFilePath();
      await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
      await fs.promises.writeFile(filePath, outputFile.getText(), "utf8");
    }
  }
}

shell.cp(
  "-rf",
  path.resolve(__dirname, "../../../README.md"),
  path.resolve(__dirname, "../README.md")
);
