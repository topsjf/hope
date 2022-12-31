import{_ as u,W as g,X as k,$ as n,a0 as a,Y as e,a1 as h,Z as c,a2 as t,g as o}from"./framework-5e8076a0.js";const v={},b=n("p",null,"让你的 VuePress 站点中的 Markdown 文件支持流程图。",-1),m={href:"https://github.com/adrai/flowchart.js",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),a(" 配置")],-1),f=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  plugins`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// 启用流程图"),a(`
      flowchart`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// 启用流程图"),a(`
      `),n("span",{class:"token literal-property property"},"flowchart"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=t(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- ↓ :preset 是可选的 --&gt;</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow:preset</span>
<span class="token code-block language-flow">
&lt;!-- 放置你的流程图代码 --&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div><p>目前可用的预设:</p><ul><li><code>vue</code> (默认)</li><li><code>ant</code></li><li><code>pie</code></li></ul><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2>`,5),V=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow</span>
<span class="token code-block language-flow">st=&gt;start: 开始|past:&gt;http://www.google.com[blank]
e=&gt;end: 结束|future:&gt;http://www.google.com
op1=&gt;operation: 操作1|past
op2=&gt;operation: 操作2|current
sub1=&gt;subroutine: 子程序|invalid
cond=&gt;condition: 是/否?|approved:&gt;http://www.google.com
c2=&gt;condition: 判断2|rejected
io=&gt;inputoutput: 进行反思...|future

st-&gt;op1(right)-&gt;cond
cond(yes, right)-&gt;c2
cond(no)-&gt;sub1(left)-&gt;op1
c2(yes)-&gt;io-&gt;e
c2(no)-&gt;op2-&gt;e</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="流程图介绍" tabindex="-1"><a class="header-anchor" href="#流程图介绍" aria-hidden="true">#</a> 流程图介绍</h2><h3 id="节点类型" tabindex="-1"><a class="header-anchor" href="#节点类型" aria-hidden="true">#</a> 节点类型</h3><p>定义了结点形状</p><h4 id="开始-结束" tabindex="-1"><a class="header-anchor" href="#开始-结束" aria-hidden="true">#</a> 开始 &amp; 结束</h4><p>被用于流程开始的第一个节点。 默认文字为 <code>Start</code>.</p><ul><li><code>[Variable]-&gt;start: [Text]</code></li></ul><p>被用于流程结束的最后一个节点。 默认文字为 <code>End</code>.</p><ul><li><code>[Variable]-&gt;end: [Text]</code></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow</span>
<span class="token code-block language-flow">st=&gt;start: 开始
e=&gt;end: 结束

st-&gt;e</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div>`,10),y=t('<h4 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h4><ul><li><code>[Variable]-&gt;operation: [Text]</code></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">flow</span>\n<span class="token code-block language-flow">process=&gt;operation: 操作\ne=&gt;end: 结束\n\nprocess-&gt;e</span>\n<span class="token punctuation">```</span></span>\n</code></pre></div>',3),L=t('<h4 id="输入输出" tabindex="-1"><a class="header-anchor" href="#输入输出" aria-hidden="true">#</a> 输入输出</h4><ul><li><code>[Variable]-&gt;inputoutput: [Text]</code></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">flow</span>\n<span class="token code-block language-flow">process=&gt;inputoutput: 输入输出\ne=&gt;end: 结束\n\nprocess-&gt;e</span>\n<span class="token punctuation">```</span></span>\n</code></pre></div>',3),C=t('<h4 id="子程序" tabindex="-1"><a class="header-anchor" href="#子程序" aria-hidden="true">#</a> 子程序</h4><ul><li><code>[Variable]-&gt;subroutine: [Text]</code></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">flow</span>\n<span class="token code-block language-flow">process=&gt;subroutine: 子程序\ne=&gt;end: 结束\n\nprocess-&gt;e</span>\n<span class="token punctuation">```</span></span>\n</code></pre></div>',3),U=t(`<h4 id="条件" tabindex="-1"><a class="header-anchor" href="#条件" aria-hidden="true">#</a> 条件</h4><ul><li><p><code>[Variable]-&gt;condition: [Text]</code></p></li><li><p><code>[Variable]([yesText])-&gt;[Position]</code></p></li><li><p><code>[Variable]([noText])-&gt;[Position]</code></p></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow</span>
<span class="token code-block language-flow">cond=&gt;condition: 是否执行操作?
process=&gt;operation: 操作
e=&gt;end: 结束

cond(yes)-&gt;process-&gt;e
cond(no)-&gt;e</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div>`,3),_=t(`<h4 id="平行" tabindex="-1"><a class="header-anchor" href="#平行" aria-hidden="true">#</a> 平行</h4><p>定义同时开始的多个程序。</p><ul><li><code>[Variable]-&gt;parallel: [Text]</code></li><li><code>[Variable](path1, direction)-&gt;[Position]</code></li><li><code>[Variable](path1, direction)-&gt;[Position]</code></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow</span>
<span class="token code-block language-flow">para=&gt;parallel: 平行任务
process=&gt;operation: 操作
e=&gt;end: 结束

para(path1, bottom)-&gt;process-&gt;e
para(path2)-&gt;e</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div>`,4),N=t(`<h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h3><p>连接方式在流程图中节点定义后描述，使用 <code>-&gt;</code> 指定一个节点之间的链接，例如 <code>nodeVar1-&gt;nodeVar2-&gt;nodeVar3</code></p><p>流程可以被分开:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>nodeVar1-&gt;nodeVar2
nodeVar2-&gt;nodeVar3
</code></pre></div><p>连接格式定义如下:</p><p><code>&lt;node variable name&gt;[(&lt;specification1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;[[(&lt;specification1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;]</code></p><p>在 <code>[]</code> 中的项是可选的。</p><h3 id="方向" tabindex="-1"><a class="header-anchor" href="#方向" aria-hidden="true">#</a> 方向</h3><p>以下方向可用，并定义了连接将从节点离开的方向。如果指定符不止一个，则总是最后一个。所有节点都有默认方向，这使其成为可选规范。<code>&lt;direction&gt;</code> 的可选值为:</p><ul><li><code>left</code></li><li><code>right</code></li><li><code>top</code></li><li><code>bottom</code></li></ul><h3 id="节点特定说明符" tabindex="-1"><a class="header-anchor" href="#节点特定说明符" aria-hidden="true">#</a> 节点特定说明符</h3><p>每个节点变量都有可选的说明符，例如方向，有些变量有特殊的说明符，具体取决于下面定义的节点类型。在 <code>()</code> 中的变量名后添加说明符，并用<code>,</code> 分隔，例如 <code>nodeVar (spec1，spec2)</code>。</p><ul><li><p><strong>start</strong><strong>operation</strong><strong>inputoutput</strong><strong>subroutine</strong></p><p>可选方向</p><p><code>startVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>operationVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>inputoutputVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>subroutineVar(&lt;direction&gt;)-&gt;nextNode</code></p></li><li><p><strong>condition</strong></p><p>必需指定 <code>yes</code> or <code>no</code></p><p>可选方向</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>conditionalVar(yes, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode1
conditionalVar(no, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode2
</code></pre></div></li><li><p><strong>parallel</strong></p><p>必需指定路径方向 <code>path1</code>, <code>path2</code>, 或 <code>path3</code></p><p>可选方向</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>parallelVar(path1, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode1
parallelVar(path2, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode2
parallelVar(path3, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode3
</code></pre></div></li></ul><h3 id="网址" tabindex="-1"><a class="header-anchor" href="#网址" aria-hidden="true">#</a> 网址</h3><p>可以使用 <code>:&gt;</code> 运算符将外部链接添加到节点。</p><p><code>[blank]</code> 指定打开新的页面</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>st=&gt;start: Start:&gt;http://www.google.com[blank]
e=&gt;end: End:&gt;http://www.yahoo.com
</code></pre></div><h3 id="建议" tabindex="-1"><a class="header-anchor" href="#建议" aria-hidden="true">#</a> 建议</h3><p>文本中可能不应该使用的符号: <code>=&gt;</code>、<code>-&gt;</code>、 <code>:&gt;</code>、<code>|</code>、<code>@&gt;</code> 和 <code>:$</code></p><p>如果要在流程图中强调特定路径，则可以另外定义它，如下所示:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>st@&gt;op1({&quot;stroke&quot;:&quot;Red&quot;})@&gt;cond({&quot;stroke&quot;:&quot;Red&quot;,&quot;stroke-width&quot;:6,&quot;arrow-end&quot;:&quot;classic-wide-long&quot;})@&gt;c2({&quot;stroke&quot;:&quot;Red&quot;})@&gt;op2({&quot;stroke&quot;:&quot;Red&quot;})@&gt;e({&quot;stroke&quot;:&quot;Red&quot;})
</code></pre></div>`,21);function T(M,S){const l=o("ExternalLinkIcon"),d=o("CodeTabs"),s=o("FlowChart");return g(),k("div",null,[b,n("p",null,[a("本插件利用了 "),n("a",m,[a("flowchart.js"),e(l)]),a(" 来支持这一功能。")]),h(" more "),w,e(d,{id:"10",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:c(({title:i,value:p,isActive:r})=>[f]),tab1:c(({title:i,value:p,isActive:r})=>[x]),_:1}),q,e(s,{id:"flowchart-45",code:"eJx1UE1Lw0AQve+vyLGCSUiOgaw/RDykyTRdjbvLZtIg5NCjUEsLBRG0iCDqpXj3A/+MSfsznMQiHtrLwJuZN++9yTHkOUYGA6v+GNfPk0pHOQZ8iKgD1y3L0kmVSjNwYnV+3M8ieXbCIOQgk8Bavy+a5X01KLAwsIfDlPZCrjSYCIWSgdUspt+fd16nQ0N/x9Cv4sIYkMjyok9sqkYVKCSQy9V8/TKp32aVkKMoEwmLlUxC3laxPXLz6tbzp6Mq0tqoEST7rMUk/o9XXz421yu/MnAKMULChAq5kLpAEqcaWJuv283DVT2bNuOl4zjb5IzlaFMKr2dEOsQDuzva+epdQH5o/bX936ZUBNpovQwG7YC4ZKZdJiCUzaGF3Rp9qIU/mOynsw==",preset:"vue"}),e(s,{id:"flowchart-46",code:"eJx1UE1Lw0AQve+vyLGCSUiOgaw/RDykyTRdjbvLZtIg5NCjUEsLBRG0iCDqpXj3A/+MSfsznMQiHtrLwJuZN++9yTHkOUYGA6v+GNfPk0pHOQZ8iKgD1y3L0kmVSjNwYnV+3M8ieXbCIOQgk8Bavy+a5X01KLAwsIfDlPZCrjSYCIWSgdUspt+fd16nQ0N/x9Cv4sIYkMjyok9sqkYVKCSQy9V8/TKp32aVkKMoEwmLlUxC3laxPXLz6tbzp6Mq0tqoEST7rMUk/o9XXz421yu/MnAKMULChAq5kLpAEqcaWJuv283DVT2bNuOl4zjb5IzlaFMKr2dEOsQDuzva+epdQH5o/bX936ZUBNpovQwG7YC4ZKZdJiCUzaGF3Rp9qIU/mOynsw==",preset:"ant"}),e(s,{id:"flowchart-47",code:"eJx1UE1Lw0AQve+vyLGCSUiOgaw/RDykyTRdjbvLZtIg5NCjUEsLBRG0iCDqpXj3A/+MSfsznMQiHtrLwJuZN++9yTHkOUYGA6v+GNfPk0pHOQZ8iKgD1y3L0kmVSjNwYnV+3M8ieXbCIOQgk8Bavy+a5X01KLAwsIfDlPZCrjSYCIWSgdUspt+fd16nQ0N/x9Cv4sIYkMjyok9sqkYVKCSQy9V8/TKp32aVkKMoEwmLlUxC3laxPXLz6tbzp6Mq0tqoEST7rMUk/o9XXz421yu/MnAKMULChAq5kLpAEqcaWJuv283DVT2bNuOl4zjb5IzlaFMKr2dEOsQDuzva+epdQH5o/bX936ZUBNpovQwG7YC4ZKZdJiCUzaGF3Rp9qIU/mOynsw==",preset:"pie"}),V,e(s,{id:"flowchart-82",code:"eJwrLrG1Ky5JLCqxUni6p+Hp8m6uVFu71LwUK4Xnuyc/mzufi6u4RNculQsAZJUQyg==",preset:"vue"}),y,e(s,{id:"flowchart-94",code:"eJwrKMpPTi0utrXLL0gtSizJzM+zUng2uffJ3jlcqbZ2qXkpVgrPd09+Nnc+FxdUqa5dKhcAfbsWqA==",preset:"vue"}),L,e(s,{id:"flowchart-106",code:"eJwrKMpPTi0utrXLzCsoLckvLQGSVgov9k1+2roURLbv4kq1tUvNS7FSeL578rO587m4oFp07VK5AI5GHBw=",preset:"vue"}),C,e(s,{id:"flowchart-118",code:"eJwrKMpPTi0utrUrLk0qyi8tycxLtVJ4unbC8xXdT3f1c6Xa2qXmpVgpPN89+dnc+VxcUOW6dqlcAP5nGU4=",preset:"vue"}),U,e(s,{id:"flowchart-140",code:"eJxLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE",preset:"vue"}),_,e(s,{id:"flowchart-165",code:"eJwrSCxKtLUDkTk5qTlWCk93bn6xsOfJ7t1PuxZyFRTlJ6cWF9va5RekFiWWZObnWSk8m9z7ZO8crlRbu9S8FCuF57snP5s7n4sLZIJGQWJJhqGOQlJ+SUl+rqauHVS/rl0qQt4IKJ7KBQB5mDEV",preset:"vue"}),N])}const Q=u(v,[["render",T],["__file","flowchart.html.vue"]]);export{Q as default};