<template>
  <div class="navigation-affix">
    <el-affix>
      <el-anchor direction="horizontal" :offset="50" type="underline">
        <el-image class="navigation_icon" :src="url" :fit="fit"/>
        <el-anchor-link href="#basic-usage">
          Basic usage
        </el-anchor-link>
        <el-anchor-link href="#scroll-to-anchor">
          Scroll to anchor
        </el-anchor-link>
        <el-anchor-link href="#static-anchor">
          Static anchor
        </el-anchor-link>
        <el-anchor-link href="#custom-icon">
          Custom icon
        </el-anchor-link>
        <el-anchor-link href="#custom-style">
          Custom style
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

  .navigation_icon {
    height: 50px;
  }
  .el-anchor__item {
    margin-top: 10px;
  }
}
</style>
