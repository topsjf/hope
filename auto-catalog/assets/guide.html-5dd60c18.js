import{_ as n,W as s,X as a,a1 as t}from"./framework-eb069dea.js";const e={},p=t(`<p>使用 <code>vuepress-plugin-auto-catalog</code>，你可以轻松地为你的主题自动生成目录页面。</p><h2 id="排除页面" tabindex="-1"><a class="header-anchor" href="#排除页面" aria-hidden="true">#</a> 排除页面</h2><p>可能有一些情况你有一个 <code>/foo/bar.md</code>，但不想在 <code>/foo/</code> 生成目录页面，在这种情况下，你可以使用 <code>exclude</code> 选项来排除该页面。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> autoCatalogPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-auto-catalog&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">autoCatalogPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/foo/&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>exclude</code> 选项接受字符串数组或 RegExp。</p><h2 id="控制页面-frontmatter" tabindex="-1"><a class="header-anchor" href="#控制页面-frontmatter" aria-hidden="true">#</a> 控制页面 Frontmatter</h2><p>默认情况下，插件将从文件夹名称生成目录页面标题。 然而，有时你可能想要进行一些自定义，因此你可以将 <code>frontmatter</code> 选项设置为一个函数，该函数接收目录页面路径作为参数，你将返回一个包含你想要的 frontmatter 的对象。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> autoCatalogPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-auto-catalog&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">autoCatalogPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function-variable function">frontmatter</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token comment">// frontmatter you want</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(i,u){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","guide.html.vue"]]);export{d as default};
