---
title: "微语"
layout: "single"
type: "shuoshuo"
slug: "shuoshuo"  # 使用单栏布局
menu:
    main:
        weight: -80
        params: 
            icon: brand-hipchat
---

<div id="artitalk_main"></div>

<script src="https://unpkg.com/artitalk"></script>
<script>
  new Artitalk({
    appId: "20In9roWavNrTMj76UmVEALE-MdYXbMMI",
    appKey: "Y8DPaodZp5fsFEFLMTwj2QEk",
    serverURL: "https://artitalk.314926.xyz",
    pageSize: 15, //每页评论数量
    shuoPla: '留下你的评论', //评论框里显示，可以不填
    motion: 1, //加载动画的开关 0（关闭），1（开启）
    atComment: 1, //评论功能的开关 0（关闭），1（开启）
    bgImg: '', //评论框里的背景，可以不填
    color1: '#ffffff', //自定义颜色，有几种方式
    color2: '#ffffff',
    color3: '#3b9a9c',
  });
</script>
<style>
  .my-artitalk ::part(input),
  .my-artitalk ::part(text),
  .my-artitalk ::part(comment),
  .my-artitalk ::part(input-btn),
  .my-artitalk ::part(loadmore-btn) {
    color: #333 !important; /* 字体颜色设置在这里 */
    font-weight: 500;
  }

  @media (prefers-color-scheme: dark) {
    .my-artitalk ::part(input),
    .my-artitalk ::part(text),
    .my-artitalk ::part(comment),
    .my-artitalk ::part(input-btn),
    .my-artitalk ::part(loadmore-btn) {
      color: #f0f0f0 !important; /* 深色模式下字体颜色 */
    }
  }
</style>
