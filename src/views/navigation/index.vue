<template>
  <div class="navigation-affix">
    <el-affix>
      <el-image class="navigation_icon" :src="url" :fit="fit"/>
      <el-anchor :offset="70" direction="horizontal">
        <el-anchor-link :href="`#${locale['basic-usage']}`">
          {{ locale['Basic Usage'] }}
        </el-anchor-link>
        <el-anchor-link :href="`#${locale['horizontal-mode']}`">
          {{ locale['Horizontal Mode'] }}
        </el-anchor-link>
        <el-anchor-link :href="`#${locale['scroll-container']}`">
          {{ locale['Scroll Container'] }}
        </el-anchor-link>
      </el-anchor>

    </el-affix>
  </div>
</template>

<script setup>
import {ref} from "vue";
import logo from '@/assets/logo.png';

const url = ref(logo);
const fit = ref('fill');
</script>

<style scoped lang="scss">
.navigation-affix {
  width: 100%;
  height: 50px;
  display: flex;

  .navigation_icon {
    height: 50px;

    :deep(el-image__inner) {
      height: 50px;
    }
  }
}

</style>