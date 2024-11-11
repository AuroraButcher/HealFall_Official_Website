<template>
  <Navigation />
  <div id="basic-usage" class="content">
    basic-usage
  </div>
  <div id="scroll-to-anchor" class="content">
    scroll-to-anchor
  </div>
  <div id="static-anchor" class="content">
    static-anchor
  </div>
  <div id="custom-icon" class="content">
    custom-icon
  </div>
  <div id="custom-style" class="content">
    custom-style
  </div>
</template>

<script setup>
import Navigation from '@/views/navigation/index.vue';
</script>

<style scoped lang="scss">
.content {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: 1px solid red;
  margin: 0;
  padding: 0;
}
</style>
