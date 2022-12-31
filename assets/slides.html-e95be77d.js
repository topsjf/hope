import{a3 as t,Z as s,_ as o,a4 as d,a1 as e,a2 as n,$ as r,a5 as i,q as l}from"./framework-838e190a.js";const c="/hope/assets/slides-light-77be1ca0.png",h="/hope/assets/slides-dark-9d1f282d.png",p={},m=e("p",null,[e("code",null,"vuepress-theme-hope"),n(" 允许你添加幻灯片页面。")],-1),_=e("p",null,[n("你需要在相应的页面的 frontmatter 中，设置 "),e("code",null,"layout: Slide"),n(" 来开启幻灯片风格。")],-1),u=e("h2",{id:"演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),n(" 演示")],-1),g={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/guide/presentation/demo.html",target:"_blank",rel:"noopener noreferrer"},f=i('<p><img src="'+c+'" alt="幻灯片页截图" data-mode="lightmode-only" loading="lazy"><img src="'+h+`" alt="幻灯片页截图" data-mode="darkmode-only" loading="lazy"></p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><div class="hint-container warning"><p class="hint-container-title">启用功能</p><p>你应该在主题选项中通过设置 <code>plugins.mdEnhance.presentation</code> 在 <code>vuepress-plugin-md-enhance</code> 中启用幻灯片功能，否则幻灯片无法被正确渲染。</p></div><div class="hint-container warning"><p class="hint-container-title">不含多个幻灯片</p><p>该页面只能拥有一个幻灯片语法。多个幻灯片可能会引发渲染问题。</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>@slidestart [your theme]

// your slides

@slideend
</code></pre></div></div>`,4);function v(k,x){const a=l("ExternalLinkIcon");return s(),o("div",null,[m,_,d(" more "),u,e("p",null,[e("a",g,[n("这里是一个展示了所有幻灯片功能的案例"),r(a)]),n(".")]),f])}const b=t(p,[["render",v],["__file","slides.html.vue"]]);export{b as default};