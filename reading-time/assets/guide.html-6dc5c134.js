import{_ as s,W as a,X as t,a2 as p,a1 as n}from"./framework-ecf98296.js";const e={},o=n(`<p>This plugin will inject expect reading time and word count statistics into the page data.</p><p>Relevant information will be injected into the <code>readingTime</code> property in the following format:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ReadingTime</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Expect reading minute */</span>
  minutes<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Words count */</span>
  words<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),c=n(`<h2 id="node-side" tabindex="-1"><a class="header-anchor" href="#node-side" aria-hidden="true">#</a> Node Side</h2><p>For any page, you can get estimated reading time and word count from <code>page.data.readingTime</code>:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime<span class="token punctuation">;</span> <span class="token comment">// { minutes: 3.2, words: 934 }</span>
</code></pre></div><p>You can access it for further processing in the <code>extendsPage</code> lifecycle:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">extendsPage</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>You can also get the reading time of each page in the <code>onInitialized</code> lifecycle:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">onInitialized</span><span class="token operator">:</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="client-side" tabindex="-1"><a class="header-anchor" href="#client-side" aria-hidden="true">#</a> Client Side</h2><p>You can get relevant data directly on the client side:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Expect reading time: {{ page.readingTime.minutes }} minute(s)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Word count: {{ page.readingTime.words }} words<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> usePageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pageData <span class="token operator">=</span> <span class="token function">usePageData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to use with different locales, we provide the multilingual variable <code>R<wbr>EADING_TIME_LOCALES</code> globally. By installing and introducing <code>vuepress-shared</code>, you can automatically provide multilingual text for all pages:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ readingTimeInfo.time }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ readingTimeInfo.word }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> usePageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useLocaleConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pageData <span class="token operator">=</span> <span class="token function">usePageData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> readingTimeLocale <span class="token operator">=</span> <span class="token function">useLocaleConfig</span><span class="token punctuation">(</span>readingTimeLocales<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// locale text</span>
<span class="token keyword">const</span> readingTimeInfo <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> minutes<span class="token punctuation">,</span> words <span class="token punctuation">}</span> <span class="token operator">=</span> pageData<span class="token punctuation">.</span>value<span class="token punctuation">.</span>readingTime<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span>
      minutes <span class="token operator">&lt;</span> <span class="token number">1</span>
        <span class="token operator">?</span> <span class="token comment">// we have a special hint for &lt; 1 min</span>
          readingTimeLocale<span class="token punctuation">.</span>value<span class="token punctuation">.</span>less1Minute
        <span class="token operator">:</span> readingTimeLocale<span class="token punctuation">.</span>value<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>
            <span class="token string">&quot;$time&quot;</span><span class="token punctuation">,</span>
            Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>minutes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">word</span><span class="token operator">:</span> readingTimeLocale<span class="token punctuation">.</span>value<span class="token punctuation">.</span>word<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;$word&quot;</span><span class="token punctuation">,</span> words<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function l(i,u){return a(),t("div",null,[o,p(" more "),c])}const r=s(e,[["render",l],["__file","guide.html.vue"]]);export{r as default};