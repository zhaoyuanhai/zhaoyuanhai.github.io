<template>
  <textarea v-model="jsonText"></textarea>
  <textarea v-model="keyValueText"></textarea>
  <button @click="jsonToKeyValue()">Json To KeyValue</button>
  <button @click="keyValueToJson()">KeyValue To Json</button>
  <div>about</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class About extends Vue {
  keyValueText: String = "sss";
  jsonText: String = "sss";

  mounted() {}

  jsonToKeyValue() {
    this.keyValueText = this.jsonText;
  }
  keyValueToJson() {
    this.jsonText = this.keyValueText;
  }
}
</script>

<style>
</style>