import{a3 as d,Z as s,_ as c,a1 as e,a2 as a,$ as t,a0 as l,a5 as i,q as r}from"./framework-838e190a.js";const h={},u=i('<p>You can configure page layout by setting the following frontmatter options.</p><h2 id="pageinfo" tabindex="-1"><a class="header-anchor" href="#pageinfo" aria-hidden="true">#</a> pageInfo</h2><ul><li>Type: <code>PageInfo[] | false</code></li><li>Default value: value in theme options</li></ul><table><thead><tr><th>Item</th><th>Corresponding Content</th><th>Page frontmatter Value</th></tr></thead><tbody><tr><td><code>&quot;Author&quot;</code></td><td>Author</td><td><code>author</code></td></tr><tr><td><code>&quot;Date&quot;</code></td><td>Writing Date</td><td><code>date</code></td></tr><tr><td><code>&quot;Category&quot;</code></td><td>Category</td><td><code>category</code></td></tr><tr><td><code>&quot;Tag&quot;</code></td><td>Tags</td><td><code>tag</code></td></tr><tr><td><code>&quot;ReadingTime&quot;</code></td><td>Expect reading time</td><td>N/A (automatically generated)</td></tr><tr><td><code>&quot;Word&quot;</code></td><td>Word count</td><td>N/A (automatically generated)</td></tr><tr><td><code>&quot;PageView&quot;</code></td><td>Visit Number</td><td><code>pageview</code> (only available with Waline)</td></tr></tbody></table><p>Set whether to show page details on the current page</p><h2 id="pageview" tabindex="-1"><a class="header-anchor" href="#pageview" aria-hidden="true">#</a> pageview</h2><ul><li>Type: <code>boolean</code></li><li>Default value: value in theme options</li></ul><p>Whether display page views.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The pageviews feature requires you to have a valid Waline Comment Service config.</p></div><h2 id="breadcrumb" tabindex="-1"><a class="header-anchor" href="#breadcrumb" aria-hidden="true">#</a> breadcrumb</h2><ul><li>Type: <code>boolean</code></li><li>Default value: value in theme options</li></ul><p>Whether path navigation is enabled on the current page.</p><h2 id="breadcrumbicon" tabindex="-1"><a class="header-anchor" href="#breadcrumbicon" aria-hidden="true">#</a> breadcrumbIcon</h2><ul><li>Type: <code>boolean</code></li><li>Default value: value in theme options</li></ul><p>Whether path navigation icon is enabled on the current page.</p><h2 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h2><ul><li>Type: <code>boolean</code></li></ul><p>The navbar configuration of the page, filling in <code>false</code> will disable the navbar</p><h2 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> sidebar</h2><ul><li>Type: <code>&quot;heading&quot; | false</code></li></ul><p>Page sidebar configuration options. Supports <code>&quot;heading&quot;</code> or <code>false</code>.</p><h2 id="headerdepth" tabindex="-1"><a class="header-anchor" href="#headerdepth" aria-hidden="true">#</a> headerDepth</h2><ul><li>Type: <code>number</code></li><li>Default: <code>2</code></li></ul><p>The page’s sidebar heading rendering depth.</p><h2 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> index</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether index current page in sidebar.</p><h2 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h2><ul><li>Type: <code>number</code></li></ul><p>Page order in sidebar.</p><ul><li>By filling in a positive number, the page will appear in the front, while the smaller number comes to the front.</li><li>By filling in a negative number, the page will appear in the end, while the greater number comes to the front. (e.g. -1 is after -2)</li></ul><h2 id="dir" tabindex="-1"><a class="header-anchor" href="#dir" aria-hidden="true">#</a> dir</h2>',32),p=e("h3",{id:"dir-text",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dir-text","aria-hidden":"true"},"#"),a(" dir.text")],-1),b=e("li",null,[a("Type: "),e("code",null,"string")],-1),f={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"Group title.",-1),m=e("h3",{id:"dir-icon",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dir-icon","aria-hidden":"true"},"#"),a(" dir.icon")],-1),y=e("li",null,[a("Type: "),e("code",null,"string")],-1),k={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},v=i('<p>Group icon.</p><h3 id="dir-collapsible" tabindex="-1"><a class="header-anchor" href="#dir-collapsible" aria-hidden="true">#</a> dir.collapsible</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether group is collapsible</p><h3 id="dir-link" tabindex="-1"><a class="header-anchor" href="#dir-link" aria-hidden="true">#</a> dir.link</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether Dir is clickable.</p>',7),_={class:"hint-container note"},x=e("p",{class:"hint-container-title"},"Note",-1),T=e("code",null,"true",-1),D={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},w=i(`<h3 id="dir-index" tabindex="-1"><a class="header-anchor" href="#dir-index" aria-hidden="true">#</a> dir.index</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether index current dir</p><h2 id="dir-order" tabindex="-1"><a class="header-anchor" href="#dir-order" aria-hidden="true">#</a> dir.order</h2><ul><li>Type: <code>number</code></li></ul><p>Group order in sidebar.</p><ul><li>By filling in a positive number, the page will appear in the front, while the smaller number comes to the front.</li><li>By filling in a negative number, the page will appear in the end, while the greater number comes to the front. (e.g. -1 is after -2)</li></ul><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h2><ul><li>Type: <code>boolean</code></li><li>Default value: value in theme options</li></ul><p>Whether to enable comments on the current page.</p><h2 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated" aria-hidden="true">#</a> lastUpdated</h2><ul><li>Type: <code>boolean</code></li><li>Default value: value in theme options</li></ul><p>Whether display lastUpdated time.</p><h2 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h2><ul><li>Type: <code>boolean</code></li><li>Default value: value in theme options</li></ul><p>Whether to show edit link.</p><h2 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> contributors</h2><ul><li>Type: <code>boolean</code></li><li>Default value: value in theme options</li></ul><p>Whether to show contributors.</p><h2 id="prev" tabindex="-1"><a class="header-anchor" href="#prev" aria-hidden="true">#</a> prev</h2><ul><li><p>Type: <code>AutoLinkOptions | string | false</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><p>Previous article link.</p><h2 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> next</h2><ul><li><p>Type: <code>AutoLinkOptions |string | false</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><p>Next article link.</p><h2 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h2><ul><li>Type: <code>boolean | string | HTMLString</code></li><li>Default value: the value configured globally</li></ul><p>Footer content.</p><ul><li>Set it to an empty string if you want an empty content</li><li>Set it to <code>false</code> to disable the footer</li><li>Set it to <code>true</code> to display the default footer</li></ul>`,29),q=e("h2",{id:"copyright",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#copyright","aria-hidden":"true"},"#"),a(" copyright")],-1),W=e("ul",null,[e("li",null,[a("Type: "),e("code",null,"string | false")]),e("li",null,"Default value: value in theme options")],-1),E=e("p",null,"Copyright information",-1),A=i('<h2 id="backtotop" tabindex="-1"><a class="header-anchor" href="#backtotop" aria-hidden="true">#</a> backToTop</h2><ul><li>Type: <code>boolean</code></li><li>Default value: true</li></ul><p>Whether display the back to top button.</p><h2 id="toc-heading" tabindex="-1"><a class="header-anchor" href="#toc-heading" aria-hidden="true">#</a> toc</h2><ul><li>Type: <code>boolean</code></li><li>Default value: value in theme options</li></ul><p>Whether display toc in desktop mode.</p><h2 id="containerclass" tabindex="-1"><a class="header-anchor" href="#containerclass" aria-hidden="true">#</a> containerClass</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Extra container class.</p><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h2><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;Layout&quot;</code></li></ul><p>Page custom layout name.</p>',12);function S(L,N){const o=r("RouterLink"),n=r("ExternalLinkIcon");return s(),c("div",null,[u,e("p",null,[a("Sidebar group information used for "),t(o,{to:"/guide/layout/sidebar.html#auto-sidebar"},{default:l(()=>[a("structure sidebar")]),_:1}),a(".")]),p,e("ul",null,[b,e("li",null,[a("Default: title of "),e("a",f,[a("README.md"),t(n)])])]),g,m,e("ul",null,[y,e("li",null,[a("Default: icon of "),e("a",k,[a("README.md"),t(n)])])]),v,e("div",_,[x,e("p",null,[a("Setting to "),T,a(" means setting group link to link of "),e("a",D,[a("README.md"),t(n)]),a(".")])]),w,e("p",null,[a("For more details, please see "),t(o,{to:"/guide/layout/footer.html"},{default:l(()=>[a("Page → Footer Support")]),_:1}),a(".")]),q,W,E,e("p",null,[a("For more details, please see "),t(o,{to:"/guide/layout/footer.html"},{default:l(()=>[a("Page → Footer Support")]),_:1}),a(".")]),A])}const C=d(h,[["render",S],["__file","layout.html.vue"]]);export{C as default};