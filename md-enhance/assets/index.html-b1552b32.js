import{_ as m,W as h,X as v,$ as e,a0 as n,Y as s,a1 as i,Z as t,a2 as c,g as o}from"./framework-5e8076a0.js";const b={},k=e("p",null,"让你的 VuePress 站点中的 Markdown 文件支持幻灯片。",-1),g={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),n(" 配置")],-1),f=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" mdEnhancePlugin "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token punctuation"},"{"),n(`
  plugins`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"["),n(`
    `),e("span",{class:"token function"},"mdEnhancePlugin"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n(`
      `),e("span",{class:"token comment"},"// 启用幻灯片"),n(`
      presentation`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),q=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.js"),n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" mdEnhancePlugin "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token literal-property property"},"plugins"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"["),n(`
    `),e("span",{class:"token function"},"mdEnhancePlugin"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n(`
      `),e("span",{class:"token comment"},"// 启用幻灯片"),n(`
      `),e("span",{class:"token literal-property property"},"presentation"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=c('<p>你也可以传入一个对象以进行更详细的配置。</p><p><code>presentation.plugins</code> 接收一个字符串数组，可以自由配置是否启用一些预设的插件。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>可接受的插件有:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul><!-- - `&quot;anything&quot;`\n- `&quot;audio&quot;`\n- `&quot;chalkboard&quot;` --></div><p>你还可以使用 <code>presentation.revealConfig</code> 来配置全局传递给 Reveal.js 的配置选项。</p>',4),w={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},j=c(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><ul><li>使用 <code>---</code> 分割幻灯片</li><li>使用 <code>--</code> 对幻灯片进行二次分割(垂直显示)</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart [theme]

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前可用的主题(请使用它们直接替换 <code>[theme]</code>):</p><ul><li><code>auto</code> (默认)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,5),E=e("h2",{id:"演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),n(" 演示")],-1),C=e("h2",{id:"选项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#选项","aria-hidden":"true"},"#"),n(" 选项")],-1),P=e("p",null,[n("你可以在 Frontmatter 设置 "),e("code",null,"reveal"),n(" 以设置特定页面的 reveal.js 选项，也可以在插件选项中设置 "),e("code",null,"presentation"),n(" 以全局设置 reveal.js。")],-1),R={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"};function N(T,z){const a=o("ExternalLinkIcon"),r=o("CodeTabs"),l=o("RouterLink");return h(),v("div",null,[k,e("p",null,[n("本插件利用了 "),e("a",g,[n("reveal.js"),s(a)]),n(" 来支持这一功能。")]),i(" more "),i("lint disable no-duplicate-headings"),_,s(r,{id:"11",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:t(({title:d,value:u,isActive:p})=>[f]),tab1:t(({title:d,value:u,isActive:p})=>[q]),_:1}),x,e("p",null,[n("Reveal.js 还提供了"),e("a",w,[n("更多的插件"),s(a)]),n("。如果你需要某个特定的插件，请在 GitHub 上提出 "),e("a",y,[n("Feature Request"),s(a)])]),j,e("p",null,[n("主题演示，请详见 "),s(l,{to:"/zh/guide/presentation/themes.html"},{default:t(()=>[n("幻灯片主题")]),_:1})]),E,e("p",null,[n("请见 "),s(l,{to:"/zh/guide/presentation/demo.html"},{default:t(()=>[n("幻灯片演示")]),_:1}),n("。")]),C,P,e("p",null,[n("更多选项，请参见"),e("a",R,[n("reveal.js config"),s(a)]),n("，更多用法，请参阅 "),e("a",V,[n("reveal.js 文档"),s(a)]),n("。")])])}const L=m(b,[["render",N],["__file","index.html.vue"]]);export{L as default};