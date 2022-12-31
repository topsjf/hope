import{_ as c,V as l,W as u,Z as s,$ as n,X as a,Y as o,a0 as p,E as i}from"./framework-e1acd37d.js";const r={},d=s("p",null,[s("code",null,"vuepress-plugin-search-pro"),n(" is a powerful client-side search plugin that can support custom indexing and full-text search.")],-1),k={class:"hint-container danger"},v=s("p",{class:"hint-container-title"},"Try not to use client-side search",-1),m={href:"https://www.algolia.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://docsearch.algolia.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},f=s("code",null,"@vuepress/plugin-docsearch",-1),b=p("<p>You should only use client search if you are <strong>using a free hosting service with sufficient traffic</strong>, <strong>not meeting DocSearch requirements</strong>, and <strong>refusing to pay for a service provider</strong>.</p><p>Using client-side search has the following disadvantages:</p><ol><li>You need to index your website during the build stage, which increases website deployment time and website bundle size.</li><li>Users need to fetch the entire index database from your server before searching, which will bring additional traffic and bandwidth pressure to your server.</li><li>The user must wait for the search index to be downloaded and parsed locally before traversing the index to search locally, which will consume unnecessary traffic for the user, and at the same time increase the client’s unnecessary calculation and power consumption.</li></ol>",3),y=p(`<h2 id="simple-usage" tabindex="-1"><a class="header-anchor" href="#simple-usage" aria-hidden="true">#</a> Simple Usage</h2><p>For small sites, where you usually need a full-text search out of the box, you can call the <code>vuepress-plugin-search-pro</code> plugin directly via <code>{ indexContent: true }</code>.</p><h2 id="custom-index-fields" tabindex="-1"><a class="header-anchor" href="#custom-index-fields" aria-hidden="true">#</a> Custom Index Fields</h2><p>Whether you are a theme developer or a user, it&#39;s a common operation to add extra data to a page through Frontmatter or the <code>extendsPage</code> lifecycle. In most cases, you may want to index these data as well, so we provide the <code>customFields</code> option.</p><p><code>customFields</code> accepts an array, each element represents a custom search index configuration item. Each configuration item contains 2 parts:</p><ul><li><code>getter</code>: The getter for this custom field. This function takes <code>page</code> object as a parameter and returns the value of the custom field as a string (single), an array of strings (multiple), <code>null</code> (the item is missing).</li><li><code>formatter</code>: a string controlling how the item is displayed in the custom search result, where <code>$content</code> is replaced with the actual value returned by <code>getter</code>. If you&#39;re using multiple languages, you can also set it as an object to set the display format for each language individually.</li></ul><p>Is it difficult to understand? Here is a simple example.</p><div class="hint-container tip"><p class="hint-container-title">Adding author to index</p><p>Assuming you add author information via <code>author</code> in Frontmatter:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">author</span><span class="token punctuation">:</span> Your name</span>
<span class="token punctuation">---</span></span>

Markdown content...
</code></pre></div><p>You can add authors to the index by setting:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      customFields<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;author&quot;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>author<span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token string">&quot;Author: $content&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Simple isn&#39;t it?</p></div><details class="hint-container details"><summary>A more complex but practical example</summary><p>Suppose you are using the <code>@vuepress/plugin-git</code> plugin and you add categories and tags to your articles in Frontmatter via <code>category</code> and <code>tag</code>.</p><p>If you also put Chinese and English under <code>/zh/</code> and <code>/</code> respectively, you need to configure as follows:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// We assume you are using the following multilingual</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      customFields<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>category<span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Category: $content&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;分类：$content&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tag<span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tag: $content&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;标签：$content&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;updateTime&quot;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>git<span class="token operator">?.</span>updateTime<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Update time: $content&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;更新时间：$content&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="search-hotkeys" tabindex="-1"><a class="header-anchor" href="#search-hotkeys" aria-hidden="true">#</a> Search Hotkeys</h2>`,10),q=s("code",null,"Ctrl + K",-1),w=s("code",null,"hotkeys",-1),_=s("h2",{id:"hot-update",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#hot-update","aria-hidden":"true"},"#"),n(" Hot Update")],-1),x=s("code",null,"hotReload: true",-1),C=p(`<h2 id="locale-customization" tabindex="-1"><a class="header-anchor" href="#locale-customization" aria-hidden="true">#</a> Locale Customization</h2><p>You can add new locale config or modify existing ones through <code>locales</code> option.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span><span class="token punctuation">;</span>

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
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      locales<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// Override placeholder</span>
          placeholder<span class="token operator">:</span> <span class="token string">&quot;Start Searching&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token string-property property">&quot;/xx/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// Complete locale config for \`mm-NN\` language here</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function P(S,U){const e=i("ExternalLinkIcon"),t=i("RouterLink");return l(),u("div",null,[d,s("div",k,[v,s("p",null,[n("You should use a service provider to provide search services for your site when possible, such as "),s("a",m,[n("Algolia"),a(e)]),n(", especially for larger sites. The advantage of this is that the service provider indexes your website, and users get results through the search API when they search. Special reminder, "),s("a",h,[n("DocSearch"),a(e)]),n(" is a free search service provided by Algolia for open source projects. If you meet the conditions, you should try to apply for this service and use "),s("a",g,[f,a(e)]),n(" plugin.")]),b]),y,s("p",null,[n("By default, the search hotkey is "),q,n(". You can customize search hotkeys via the "),w,n(" option, see "),a(t,{to:"/config.html#hotkeys"},{default:o(()=>[n("Config → Hot Keys")]),_:1}),n(".")]),_,s("p",null,[n("If you are proofreading or refining your search results, you can enable hot reloading by setting the "),x,n(" option, see "),a(t,{to:"/config.html#hotreload"},{default:o(()=>[n("Config → Hot Reload")]),_:1}),n(".")]),C,s("p",null,[n("For specific options, see "),a(t,{to:"/config.html#locales"},{default:o(()=>[n("Config → Locale Settings")]),_:1}),n(".")])])}const F=c(r,[["render",P],["__file","guide.html.vue"]]);export{F as default};
