<template>
  <nav class="blog-nav layui-header">
    <div class="blog-container">
      <!-- QQ互联登陆 -->
      <a href="javascript:;" class="blog-user">
        <i class="fa fa-qq"></i>
      </a>
      <a href="javascript:;" class="blog-user layui-hide">
        <img
          src="~@/assets/images/Absolutely.jpg"
          alt="Absolutely"
          title="Absolutely"
        />
      </a>
      <!-- 木叶村 -->
      <a class="blog-logo" href="home.html">木叶村</a>
      <!-- 导航菜单 -->
      <ul class="layui-nav" lay-filter="nav">
        <li class="layui-nav-item layui-this">
          <a href="/"><i class="fa fa-home fa-fw"></i>&nbsp;网站首页</a>
        </li>
        <li class="layui-nav-item">
          <a href="article"
            ><i class="fa fa-file-text fa-fw"></i>&nbsp;文章专栏</a
          >
        </li>
        <li class="layui-nav-item">
          <a href="resource"
            ><i class="fa fa-tags fa-fw"></i>&nbsp;资源分享</a
          >
        </li>
        <li class="layui-nav-item">
          <a href="timeline.html"
            ><i class="fa fa-hourglass-half fa-fw"></i>&nbsp;点点滴滴</a
          >
        </li>
        <li class="layui-nav-item">
          <a href="about"
            ><i class="fa fa-info fa-fw"></i>&nbsp;关于本站</a
          >
        </li>
      </ul>
      <!-- 手机和平板的导航开关 -->
      <a class="blog-navicon" href="javascript:;">
        <i class="fa fa-navicon"></i>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Navigation extends Vue {}
</script>