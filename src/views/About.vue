<template>
  <div class="about">
    <textarea class="rage" v-model="jsonText"></textarea>
    <textarea class="rage" v-model="kvText"></textarea>
    <button @click="toFormdata">Json转FormData</button>
    <button @click="toJson">FormData转Json</button>
  </div>
</template>

<script lang="ts">
import func from "vue-editor-bridge";
export default {
  data() {
    return {
      jsonText: "aaa",
      kvText: "bbb",
    };
  },
  methods: {
    toJson() {
      this.jsonText = this.kvText;
    },
    toFormdata() {
      function analysis(jobj: Object) {
        var arrList = [];
        var kvList = Object.entries(jobj);

        kvList.forEach((element) => {
          // element.val
        });
      }

      var jsonObject = JSON.parse(this.jsonText);

      this.kvText = this.jsonText;
    },
  },
};
</script>

<style lang="less">
.rage {
  width: 50%;
  height: 300px;
}
</style>