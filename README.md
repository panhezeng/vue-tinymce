# vue-tinymce

## 示例

[点击预览](https://panhezeng.github.io/vue-tinymce/)

组件代码目录 packages/component
示例代码目录 packages/example

## 说明

本打算将原项目个人封装的 TinyMCE Vue 组件替换为官方 TinyMCE Vue 组件，尝试后发现官方组件严重依赖 TinyMCE Cloud，否则不好用。

本组件默认配置的 toolbar 属性值，依据微信公众号后台富文本编辑器布局配置。

本组件只是简单封装，没有多余功能，默认语言中文 language: 'zh_CN'。

使用本组件的优势，相对于官方 TinyMCE Vue 组件来说：不用在项目中 import TinyMCE 的模板和插件 js，通过https://cdn.jsdelivr.net/npm/tinymce@~5实现了同步版本资源，默认中文配置，自动销毁等。

setup 和 init_instance_callback 的区别，虽然两个 API 都能获得 TinyMCE 实例，但前者是实例刚创建时的回调，后者是实例初始化完成时的回调，init_instance_callback 获得的实例才能使用 setContent 等 API。

**现在本组件基于 TinyMCE ~5 版本，TinyMCE 依赖的 js 和 css 也是 ~5 版本，依赖已锁定为 tinymce ~5，不会出现 tinymce 大版本升级造成本组件无法运行的问题。本组件也没有太复杂的东西，放心使用，如果有需求，可以 fork 修改。**

**之前基于 TinyMCE ~4 版本的版本已经不能使用，请先`npm uninstall vue-tinymce tinymce`，重新 `npm install vue-tinymce tinymce`，并且清除浏览器缓存。**

## 用法

### internal vue 方式

`npm i vue tinymce @panhezeng/vue-tinymce -S`

#### 异步

```vue
<script>
import { defineAsyncComponent } from "vue";
const VueTinymce = defineAsyncComponent(() => import("@panhezeng/vue-tinymce"));

export default {
  components: { VueTinymce },
};
</script>
```

#### 同步

```vue
<script>
import VueTinymce from "@panhezeng/vue-tinymce";
export default {
  components: { VueTinymce },
};
</script>
```

### external vue 方式

```html
<script src="https://cdn.jsdelivr.net/combine/npm/vue@~3/dist/vue.min.js,npm/tinymce@~5/tinymce.min.js,npm/@panhezeng/vue-tinymce@~3/dist/vue-tinymce.min.js"></script>

export default { components: { VueTinymce: window.VueTinymce }, };
```

## 编译

```bash
# install dependencies
npm install

# 运行插件使用示例
npm run dev:example

# 编译插件
npm run build

# 发版
npm set registry https://registry.npmjs.org/ && npm set @panhezeng:registry https://registry.npmjs.org/ && npm publish --access public && npm set registry https://registry.npm.taobao.org/ && npm set @panhezeng:registry https://registry.npm.taobao.org/

# 发版patch
npm set registry https://registry.npmjs.org/ && npm set @panhezeng:registry https://registry.npmjs.org/ && npm version patch && npm publish --access public && npm set registry https://registry.npm.taobao.org/ && npm set @panhezeng:registry https://registry.npm.taobao.org/

```

## IDE

### WebStorm

搜索 ESLint , 勾选 Automatic ESLint 和 Run eslint -- fix on save

Languages and Frameworks | JavaScript ，选择 Flow
Languages and Frameworks | TypeScript ，service 取消勾选

lerna 使用

```
lerna init
lerna create packagename
```

lerna.json

```
  "version": "independent",  // 不同模块不同版本
  "npmClient": "yarn",  // 指定 npmClent 为 yarn
  "useWorkspaces": true // 将 useWorkspaces 设置为 true
```

顶层的 package.json

```
"workspaces":[
        "packages/*"
        ]
```

```
lerna exec --scope packagename

lerna add packageaname --scope=packagebname

lerna publish
```
