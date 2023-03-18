<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-input-search
      v-model:value="musicName"
      placeholder="请输入歌名"
      enter-button
      style="width: auto"
      @search="confirm"
    />
  </div>
</template>
<script setup lang="ts">
import { searchSongs } from "@/api/song";
import { ref } from "vue";

const musicName = ref("");

const confirm = () => {
  searchSongs(musicName.value).then((response) => {
    console.log(response);
  });
};
</script>
