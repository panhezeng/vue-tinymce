<template>
  <h1>VueTinymce example</h1>
  <button @click="data.show = !data.show">
    点击加载移除编辑器，测试初始化和销毁：：：{{ data.show ? "销毁" : "加载" }}
  </button>
  <br />
  <br />
  <button @click="switchLanguage">点击切换语言，测试更新config</button>
  <br />
  <br />
  <vue-tinymce v-if="data.show" v-model="data.content" :config="config" />
  <!--    <vue-tinymce-->
  <!--      :content.sync="data.content"-->
  <!--      :config="config"-->
  <!--      url="https://unpkg.com/tinymce@~5"-->
  <!--    />-->
  <h2>output</h2>
  <div v-html="data.content" />
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";

import VueTinymce from "@panhezeng/vue-tinymce";

export default defineComponent({
  name: "App",
  components: {
    VueTinymce,
  },
  setup() {
    const data = reactive({ content: "init content", show: true, locale: "" });
    const config = computed(() => {
      let language = {};
      if (data.locale === "en") {
        language = { language: "en_US" };
      }
      return language;
    });
    function switchLanguage() {
      if (data.locale) {
        data.locale = "";
      } else {
        data.locale = "en";
      }
    }
    return { data, config, switchLanguage };
  },
});
</script>

<style></style>
