import"./index-063d1cff.js";import{a as k}from"./themeData-74339b63.js";import"./chunk-E44UNXTX-0634d18b.js";import{T as h}from"./ThemeColorPicker-06b96480.js";import{d as m,c as v,Z as b,_ as g,a4 as a,a1 as s,$ as t,a0 as o,u as l,a5 as f,a2 as n,q as _,a3 as y}from"./framework-838e190a.js";const C=s("p",null,"主题允许你自定义主题颜色，甚至提供选择器。",-1),w=f(`<h2 id="设置默认主题色" tabindex="-1"><a class="header-anchor" href="#设置默认主题色" aria-hidden="true">#</a> 设置默认主题色</h2><p>你应该在 <code>.vuepress/styles/palette.scss</code> 中设置站点的默认主题颜色：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
</code></pre></div><h2 id="主题色选择器" tabindex="-1"><a class="header-anchor" href="#主题色选择器" aria-hidden="true">#</a> 主题色选择器</h2><p>你需要按照 <code>{ 颜色名1: 颜色值, 颜色名2: 颜色值, ... }</code> 的格式在主题选项中配置 <code>themeColor</code>:</p><p>第一个颜色应为上方设置的默认主题色。</p>`,6),x={class:"hint-container details"},T=s("summary",null,"例子",-1),N=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" defineUserConfig "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" hopeTheme "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-theme-hope"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token function"},"defineUserConfig"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  theme`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token function"},"hopeTheme"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    themeColor`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      blue`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"#2196f3"'),s("span",{class:"token punctuation"},","),n(`
      red`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"#f26d6d"'),s("span",{class:"token punctuation"},","),n(`
      green`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"#3eaf7c"'),s("span",{class:"token punctuation"},","),n(`
      orange`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"#fb9b5f"'),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),V=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"language-javascript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" defineUserConfig "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" hopeTheme "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-theme-hope"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token function"},"defineUserConfig"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token literal-property property"},"theme"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token function"},"hopeTheme"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token literal-property property"},"themeColor"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token literal-property property"},"blue"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"#2196f3"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token literal-property property"},"red"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"#f26d6d"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token literal-property property"},"green"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"#3eaf7c"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token literal-property property"},"orange"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"#fb9b5f"'),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),U=s("h3",{id:"尝试",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#尝试","aria-hidden":"true"},"#"),n(" 尝试")],-1),j=m({__name:"theme-color.html",setup(B){const c=k(),i=v(()=>{const{themeColor:e}=c.value;return e===!1?null:e});return(e,S)=>{const p=_("CodeTabs");return b(),g("div",null,[C,a(" more "),w,s("details",x,[T,t(p,{id:"21",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:o(({title:r,value:u,isActive:d})=>[N]),tab1:o(({title:r,value:u,isActive:d})=>[V]),_:1})]),U,a(" markdownlint-disable"),t(l(h),{themeColor:l(i)},null,8,["themeColor"]),a(" markdownlint-restore ")])}}}),J=y(j,[["__file","theme-color.html.vue"]]);export{J as default};