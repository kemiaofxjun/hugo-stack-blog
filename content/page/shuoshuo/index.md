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
    customClass: "my-artitalk",
    color1: "linear-gradient(45deg,rgba(109,208,242,0.75) 15%,rgba(245,154,190,0.75) 85%)",
    color2: "linear-gradient(45deg,rgba(109,208,242,0.75) 15%,rgba(245,154,190,0.75) 85%)",
    color3: "linear-gradient(45deg,rgba(109,208,242,0.75) 15%,rgba(245,154,190,0.75) 85%)",
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
