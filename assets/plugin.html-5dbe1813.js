import{a3 as r,Z as c,_ as l,a1 as s,a2 as n,$ as e,a0 as i,a5 as o,q as t}from"./framework-838e190a.js";const u={},h=s("h2",{id:"介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),k={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html",target:"_blank",rel:"noopener noreferrer"},d=s("h2",{id:"社区插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#社区插件","aria-hidden":"true"},"#"),n(" 社区插件")],-1),g={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},f={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#plugins",target:"_blank",rel:"noopener noreferrer"},v={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/google-analytics.html",target:"_blank",rel:"noopener noreferrer"},m=o(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> googleAnalyticsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-google-analytics&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;G-XXXXXXXXXX&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,1),y={class:"hint-container tip"},w=s("p",{class:"hint-container-title"},"提示",-1),j=s("p",null,"大部分插件只能使用一次，如果同一个插件被多次使用，那么只有最后一次会生效。",-1),x={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/container.html",target:"_blank",rel:"noopener noreferrer"},b=s("h2",{id:"本地插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#本地插件","aria-hidden":"true"},"#"),n(" 本地插件")],-1),B=s("p",null,"如果你想要使用自己的插件，但是又不想发布它，你可以创建一个本地插件。",-1),E={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#%E6%8F%92%E4%BB%B6-api",target:"_blank",rel:"noopener noreferrer"},X=o(`<p>但是如果你在配置文件中要做的事情太多了，你可以考虑将它们提取到单独的插件中，然后在你的配置文件中使用它们:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> myPlugin <span class="token keyword">from</span> <span class="token string">&quot;./path/to/my-plugin.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">myPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,2),q={href:"https://v2.vuepress.vuejs.org/zh/advanced/plugin.html",target:"_blank",rel:"noopener noreferrer"};function P(z,A){const a=t("ExternalLinkIcon"),p=t("RouterLink");return c(),l("div",null,[h,s("p",null,[n("借助于 "),s("a",k,[n("插件 API"),e(a)]),n(" ， VuePress 插件可以为你提供各种不同的功能。")]),d,s("p",null,[n("社区用户创建了很多插件，并将它们发布到了 "),s("a",g,[n("NPM"),e(a)]),n(" 上。 VuePress 团队也在 "),s("a",_,[n("@vuepress"),e(a)]),n(" Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。")]),s("p",null,[n("一般而言，你需要将插件放入到 "),s("a",f,[n("plugins"),e(a)]),n(" 配置项中来使用它。举例来说，你可以使用 "),s("a",v,[n("@vuepress/plugin-google-analytics"),e(a)]),n(" 来使用 Google Analytics :")]),m,s("div",y,[w,j,s("p",null,[n("然而，部分插件是可以被多次使用的 (例如 "),s("a",x,[n("@vuepress/plugin-container"),e(a)]),n(")，你应该查看插件本身的文档来获取详细指引。")])]),b,B,s("p",null,[n("推荐你直接将 "),e(p,{to:"/zh/cookbook/vuepress/config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:i(()=>[n("配置文件")]),_:1}),n(" 作为插件使用，因为 "),s("a",E,[n("几乎所有的插件 API 都可以在配置文件中使用"),e(a)]),n("，这在绝大多数场景下都更为方便。")]),X,s("p",null,[n("前往 "),s("a",q,[n("深入 > 开发插件"),e(a)]),n(" 学习如何开发你自己的插件。")])])}const N=r(u,[["render",P],["__file","plugin.html.vue"]]);export{N as default};
