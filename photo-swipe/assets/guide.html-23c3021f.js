import{_ as p,W as c,X as l,a2 as r,$ as s,a0 as n,Y as e,Z as u,a1 as t,E as a}from"./framework-ecf98296.js";const d={},h=s("p",null,"This plugin will make the pictures in the body of the page enter the preview mode when clicked.",-1),m=t('<h2 id="browse-mode" tabindex="-1"><a class="header-anchor" href="#browse-mode" aria-hidden="true">#</a> Browse Mode</h2><p>In preview mode, you can:</p><ul><li>Swipe left and right to preview other pictures on the page in order</li><li>View the description of the picture</li><li>Zoom in and zoom out the picture</li><li>View pictures in full screen</li><li>Download pictures</li><li>Share pictures</li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><ul><li>Besides clicking &quot;×&quot; in the upper right corner to exit the preview mode, scrolling up and down more than a certain distance will also exit preview mode.</li><li>On mobile devices, or using the PC trackpad, you can use pan and zoom gestures to pan and zoom in the preview mode.</li></ul></div><h2 id="image-selection" tabindex="-1"><a class="header-anchor" href="#image-selection" aria-hidden="true">#</a> Image Selection</h2><p>By default, the plugin will select images according to the default theme&#39;s selector. If you are using a third-party theme, you can set one or more CSS selectors to the <code>selector</code> option.</p><h2 id="customize-photoswipe-options" tabindex="-1"><a class="header-anchor" href="#customize-photoswipe-options" aria-hidden="true">#</a> Customize PhotoSwipe options</h2>',7),k={href:"http://photoswipe.com/",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"photo-swipe",-1),g=s("code",null,"options",-1),b=t(`<h2 id="operation-delay" tabindex="-1"><a class="header-anchor" href="#operation-delay" aria-hidden="true">#</a> Operation Delay</h2><p>If your theme adds animations when switching pages, you may need to delay when photo-swipe re-finds page images. You can configure this delay via the <code>delay</code> option, the default value is <code>800</code> (in milliseconds).</p><h2 id="locale-customization" tabindex="-1"><a class="header-anchor" href="#locale-customization" aria-hidden="true">#</a> Locale Customization</h2><p>You can add new locale config or modify existing ones through <code>locales</code> option.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> photoSwipePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-photo-swipe&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// this is a supported language</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/xx/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// the plugin does not support this language</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;mm-NN&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">photoSwipePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      locales<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// Override share label text</span>
          share<span class="token operator">:</span> <span class="token string">&quot;Share with friends&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token string-property property">&quot;/xx/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// Complete locale config for \`mm-NN\` language here</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function f(w,y){const o=a("ExternalLinkIcon"),i=a("RouterLink");return c(),l("div",null,[h,r(" more "),m,s("p",null,[n("You can pass options to "),s("a",k,[v,e(o)]),n(" via "),g,n(".")]),b,s("p",null,[n("For specific options, see "),e(i,{to:"/config.html#locales"},{default:u(()=>[n("Config → Locale Settings")]),_:1}),n(".")])])}const x=p(d,[["render",f],["__file","guide.html.vue"]]);export{x as default};