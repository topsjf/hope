import{a3 as a,Z as o,_ as t,a1 as e,a2 as n,$ as p,a4 as c,a5 as i,q as l}from"./framework-838e190a.js";const r={},u=e("p",null,"If you are a programmer, you may want your users to be able to copy the code you show in the text with one click.",-1),d=e("code",null,"vuepress-theme-hope",-1),h={href:"https://vuepress-theme-hope.github.io/v2/copy-code/",target:"_blank",rel:"noopener noreferrer"},m=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Info"),e("p",null,[e("code",null,"vuepress-theme-hope"),n(" passes "),e("code",null,"plugins.copyCode"),n(" in theme options as plugin options to "),e("code",null,"vuepress-plugin-copy-code2"),n(".")])],-1),k=i(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>After enabling, this plugin will automatically add a copy button to the bottom right corner of each code block.</p><p>By default, the button is only displayed on desktop mode. To display this button on mobile devices, set <code>plugins.copyCode.showInMobile</code> to <code>true</code> in theme options.</p><p>After user press the copy button, a success hint will display on the screen. The default hint duration is <code>2000</code> ms, to change the duration, please set <code>plugins.copyCode.duration</code> in theme options. To disable the hint, set duration to <code>0</code>.</p><h2 id="effect" tabindex="-1"><a class="header-anchor" href="#effect" aria-hidden="true">#</a> Effect</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">copyCode</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(y,b){const s=l("ExternalLinkIcon");return o(),t("div",null,[u,e("p",null,[n("For this, "),d,n(" use "),e("a",h,[n("vuepress-plugin-copy-code2"),p(s)]),n(" to provide a copy button on code blocks.")]),m,c(" more "),k])}const _=a(r,[["render",v],["__file","copy-code.html.vue"]]);export{_ as default};
