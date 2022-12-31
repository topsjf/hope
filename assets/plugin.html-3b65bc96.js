import{a3 as r,Z as c,_ as l,a1 as s,a2 as n,$ as e,a0 as u,a5 as o,q as t}from"./framework-838e190a.js";const i={},k={href:"https://v2.vuepress.vuejs.org/reference/plugin-api.html",target:"_blank",rel:"noopener noreferrer"},d=s("h2",{id:"плагин-сообщества",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#плагин-сообщества","aria-hidden":"true"},"#"),n(" Плагин сообщества")],-1),g={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},_={href:"https://v2.vuepress.vuejs.org/reference/config.html#plugins",target:"_blank",rel:"noopener noreferrer"},f={href:"https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html",target:"_blank",rel:"noopener noreferrer"},v=o(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> googleAnalyticsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-google-analytics&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;G-XXXXXXXXXX&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,1),m={class:"hint-container tip"},y=s("p",{class:"hint-container-title"},"Совет",-1),w=s("p",null,"Большинство плагинов можно использовать только один раз. Если один и тот же плагин используется несколько раз, вступит в силу только последний из них.",-1),D={href:"https://v2.vuepress.vuejs.org/reference/plugin/container.html",target:"_blank",rel:"noopener noreferrer"},j=s("h2",{id:"локальныи-плагин",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#локальныи-плагин","aria-hidden":"true"},"#"),n(" Локальный плагин")],-1),B=s("p",null,"Чтобы использовать свой собственный плагин, но не хотите его публиковать, вы можете создать локальный плагин.",-1),x={href:"https://v2.vuepress.vuejs.org/reference/config.html#plugin-api",target:"_blank",rel:"noopener noreferrer"},b=o(`<p>Но если в вашем конфигурационном файле слишком много вещей, вы можете выделить их в отдельные плагины и использовать в своем конфигурационном файле:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> myPlugin <span class="token keyword">from</span> <span class="token string">&quot;./path/to/my-plugin.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">myPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,2),P={href:"https://v2.vuepress.vuejs.org/advanced/plugin.html",target:"_blank",rel:"noopener noreferrer"};function X(q,A){const a=t("ExternalLinkIcon"),p=t("RouterLink");return c(),l("div",null,[s("p",null,[n("С помощью "),s("a",k,[n("Plugin API"),e(a)]),n(", плагин VuePress может предоставить вам различные функции.")]),d,s("p",null,[n("Пользователи сообщества создали множество плагинов и опубликовали их в "),s("a",g,[n("NPM"),e(a)]),n(". Команда VuePress также поддерживает некоторые официальные плагины в рамках "),s("a",h,[n("@vuepress"),e(a)]),n(". Вы должны проверить собственную документацию плагина для подробного руководства.")]),s("p",null,[n("Как правило, вам необходимо включить плагин в параметр "),s("a",_,[n("плагинов"),e(a)]),n(", чтобы использовать его. Например, используйте "),s("a",f,[n("@vuepress/plugin-google-analytics"),e(a)]),n(" для интеграции Google Analytics:")]),v,s("div",m,[y,w,s("p",null,[n("Однако некоторые подключаемые модули можно использовать несколько раз (например, "),s("a",D,[n("@vuepress/plugin-container"),e(a)]),n("), и вам следует ознакомиться с документацией по сам плагин для подробного руководства.")])]),j,B,s("p",null,[n("Рекомендуется использовать "),e(p,{to:"/ru/cookbook/vuepress/config.html#%D1%84%D0%B0%D0%B9%D0%BB-%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D0%B8"},{default:u(()=>[n("Файл конфигурации")]),_:1}),n(" непосредственно в качестве подключаемого модуля, поскольку "),s("a",x,[n("доступны почти все API подключаемых модулей"),e(a)]),n(", что в большинстве случаев было бы удобнее.")]),b,s("p",null,[n("Вы можете обратиться к "),s("a",P,[n("Продвинутый > Написание плагина"),e(a)]),n(", чтобы узнать, как написать свой собственный плагин.")])])}const N=r(i,[["render",X],["__file","plugin.html.vue"]]);export{N as default};
