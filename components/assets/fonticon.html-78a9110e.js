import{_ as e,Z as o,$ as c,a5 as l,a2 as a,a3 as n,a0 as t,a4 as p,I as i}from"./framework-3f9403fd.js";const u={},r=a("p",null,"此组件用于展示字体图标。",-1),d=a("p",null,"你可以在 Markdown 文件中使用它来添加图标。",-1),h=a("h2",{id:"demo",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),k=p(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 主页图标: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FontIcon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token list punctuation">-</span> 一个大红 Markdown 图标: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FontIcon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>markdown<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>32<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h3><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>Icon name</p><h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;inherit&#39;</code></li></ul><p>图标颜色</p><h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h3><ul><li>类型: <code>string | number</code></li><li>默认值: <code>当前字体大小</code></li></ul><p>图标大小。</p>`,11);function m(_,f){const s=i("FontIcon");return o(),c("div",null,[r,d,l(" more "),h,a("ul",null,[a("li",null,[a("p",null,[n("主页图标: "),t(s,{icon:"home"})])]),a("li",null,[a("p",null,[n("一个大红 Markdown 图标: "),t(s,{icon:"markdown",color:"red",size:"32"})])])]),k])}const q=e(u,[["render",m],["__file","fonticon.html.vue"]]);export{q as default};
