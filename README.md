# vue-tinymce

## 示例

[点击预览](https://panhezeng.github.io/vue-tinymce/)

组件代码目录 packages/component
示例代码目录 packages/example

## 说明
```
props: {
    // 父组件通过 v-model 同步富文本编辑器内容
    modelValue: {
      type: String,
      required: true,
    },
    // 触发 v-model 同步更新的 tinymce Editor Events，其他 https://www.tiny.cloud/docs/advanced/events/
    updateEvent: {
      type: String,
      default: 'beforeaddundo undo redo keyup focusout',
    },
    // tinymce依赖文件的cdn url
    url: {
      type: String,
      default: 'https://unpkg.com/tinymce@%5E6.0.1',
    },
    // tinymce 依赖文件的cdn base url
    baseUrl: {
      type: String,
      default: 'https://unpkg.com',
    },
    // tinymce的init方法的config参数，本组件有默认设置，比如不要toolbar3，可以使用该组件时写上 :config="{toolbar2:''}"
    config: {
      type: Object as PropType<RawEditorOptions>,
      default() {
        return {};
      },
    },
  }
```

**默认 cdn 改为 unpkg 了，jsdelivr 被墙了，注意 unpkg 不支持 combine js**
**可以把tinymce相关文件都拷贝到本地 public 目录，然后把 url 改为项目 public url**
本地示例
```
public/static
public/static/tinymce
public/static/tinymce-external-plugins
public/static/tinymce-external-plugins/textindentoutdent
public/static/tinymce-external-plugins/textindentoutdent/langs
public/static/tinymce-external-plugins/textindentoutdent/plugin.min.js
public/static/tinymce-langs
public/static/tinymce-langs/zh_CN.js

props:{
  url: {
    type: String,
    default: '/static/tinymce',
  },
}

const tinymceConfig: RawEditorOptions = {
    language: 'zh_CN',
    language_url: '/static/tinymce-langs/zh_CN.js',
    external_plugins: {
      textindentoutdentzhcn:
        '/static/tinymce-external-plugins/textindentoutdent/langs/zh_CN.js',
      textindentoutdent:
        '/static/tinymce-external-plugins/textindentoutdent/plugin.min.js',
    },
  };  
```


本打算将原项目个人封装的 TinyMCE Vue 组件替换为官方 TinyMCE Vue 组件，尝试后发现官方组件严重依赖 TinyMCE Cloud，否则不好用。

本组件默认配置的 toolbar 属性值，依据微信公众号后台富文本编辑器布局配置。

本组件只是简单封装，没有多余功能，默认语言中文 language: 'zh_CN'。

使用本组件的优势，相对于官方 TinyMCE Vue 组件来说：不用在项目中 import TinyMCE 的模板和插件 js，通过https://cdn.jsdelivr.net/npm/tinymce@~6  https://unpkg.com/tinymce@%5E6.0.1 实现了同步版本资源，默认中文配置，自动销毁等。

setup 和 init_instance_callback 的区别，虽然两个 API 都能获得 TinyMCE 实例，但前者是实例刚创建时的回调，后者是实例初始化完成时的回调，init_instance_callback 获得的实例才能使用 setContent 等 API。

**现在本组件基于 TinyMCE ~6 版本，TinyMCE 依赖的 js 和 css 也是 ~6 版本，依赖已锁定为 tinymce ~6，不会出现 tinymce 大版本升级造成本组件无法运行的问题。本组件也没有太复杂的东西，放心使用，如果有需求，可以 fork 修改。**

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
<script src="https://cdn.jsdelivr.net/combine/npm/vue@~3/dist/vue.global.min.js,npm/tinymce@~5/tinymce.min.js,npm/@panhezeng/vue-tinymce@~3/dist/vue-tinymce.umd.js"></script>

export default { components: { VueTinymce: window.VueTinymce }, };
```

### 全局安装方式

```js
import { createApp } from "vue";
import App from "./App.vue";
import VueTinymce from "@panhezeng/vue-tinymce";
const app = createApp(App);
app.use(VueTinymce);
app.mount("#app");
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

```

## 发版

`lerna version`

## 环境

[构建加速](https://help.aliyun.com/document_detail/202442.html)

- 重置前端依赖环境，cd 到项目目录，删除前端依赖相关文件

  ```shell
  rm -rf node_modules package-lock.json yarn.lock pnpm-lock.yaml
  ```

- 初始化前端环境

  安装 pnpm _Mac 建议使用 `brew install pnpm`_

  ```shell
  curl -fsSL https://get.pnpm.io/install.sh | sh -
  ```

  安装 node

  ```shell
  pnpm env use --global lts && pnpm install -g pnpm npm yarn lerna npm-check-updates
  ```

  ```
  /Users/panhezeng/Library/pnpm/nodejs/16.14.2/pnpm-global/5/node_modules/yarn
  ```
