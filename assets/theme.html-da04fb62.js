import{a3 as t,Z as o,_ as p,a1 as n,a2 as s,$ as a,a5 as r,q as l}from"./framework-838e190a.js";const c={},i=n("p",null,"Тема VuePress может предоставить вам макеты, стили и многие другие функции, помогая вам сосредоточиться на написании контента Markdown.",-1),u=n("h2",{id:"тема-по-умолчанию",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#тема-по-умолчанию","aria-hidden":"true"},"#"),s(" Тема по умолчанию")],-1),d=n("p",null,"VuePress имеет стандартную тему по умолчанию, которая применяется к нашему сайту документации, который вы сейчас просматриваете.",-1),h=n("p",null,"Если вы не укажете тему для использования, будет автоматически использоваться тема по умолчанию.",-1),k={href:"https://v2.vuepress.vuejs.org/reference/config.html#theme",target:"_blank",rel:"noopener noreferrer"},v=r(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// default theme config</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m={href:"https://v2.vuepress.vuejs.org/reference/default-theme/config.html",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"Тем не менее, вы можете подумать, что это недостаточно хорошо. Или вы хотите создать сайт другого типа, например, блог, вместо документации. Затем вы можете попробовать использовать тему сообщества или создать локальную тему.",-1),f=n("h2",{id:"тема-сообщества",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#тема-сообщества","aria-hidden":"true"},"#"),s(" Тема сообщества")],-1),b={href:"https://www.npmjs.com/search?q=keywords:vuepress-theme",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"местная-тема",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#местная-тема","aria-hidden":"true"},"#"),s(" Местная тема")],-1),y={href:"https://v2.vuepress.vuejs.org/advanced/theme.html",target:"_blank",rel:"noopener noreferrer"};function x(w,q){const e=l("ExternalLinkIcon");return o(),p("div",null,[i,u,d,h,n("p",null,[s("Чтобы настроить тему по умолчанию, вам необходимо импортировать и использовать ее в файле конфигурации с помощью параметра "),n("a",k,[s("тема"),a(e)]),s(":")]),v,n("p",null,[s("Тема по умолчанию предоставляет основные, но полезные функции для сайта документации, вы можете проверить "),n("a",m,[s("Справочник по настройке темы по умолчанию"),a(e)]),s(" для получения полного списка конфиг.")]),_,f,n("p",null,[s("Пользователи сообщества создали множество тем и опубликовали их в "),n("a",b,[s("NPM"),a(e)]),s(". Вы должны проверить собственную документацию темы для подробного руководства.")]),g,n("p",null,[s("Если вы хотите использовать свою собственную тему, но не хотите ее публиковать, вы можете создать локальную тему. Смотрите "),n("a",y,[s("Дополнительно > Написание темы"),a(e)]),s(", чтобы узнать, как написать собственную тему.")])])}const V=t(c,[["render",x],["__file","theme.html.vue"]]);export{V as default};
