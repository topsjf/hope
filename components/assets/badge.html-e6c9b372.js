import{_ as o,Z as l,$ as i,a5 as p,a2 as a,a3 as n,a0 as e,a4 as s,I as c}from"./framework-3f9403fd.js";const u={},r=a("p",null,"A badge which allows you to customize it’s color.",-1),d=a("p",null,"You can use it in Markdown to add some status for titles or links.",-1),h=a("h2",{id:"demo",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),g=s(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>Badge Test <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Building<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MrHope<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grey<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h3><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>Text of the badge</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><ul><li>Type: <code>&quot;tip&quot; | &quot;warning&quot; | &quot;danger&quot; | &quot;info&quot; | &quot;note&quot;</code></li><li>Default: <code>&quot;info&quot;</code></li></ul><p>Badge types:</p>`,8),k=s('<h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Badge color, please fill in CSS color strings</p><h3 id="vertical" tabindex="-1"><a class="header-anchor" href="#vertical" aria-hidden="true">#</a> vertical</h3><ul><li>Type: <code>&quot;top&quot; | &quot;middle&quot;</code></li><li>Default: <code>&quot;top&quot;</code></li></ul><p>Vertical position of the badge</p>',6);function q(m,x){const t=c("Badge");return l(),i("div",null,[r,d,p(" more "),h,a("p",null,[n("Badge Test "),e(t,{text:"Building",type:"warning"}),n(),e(t,{text:"MrHope",color:"grey"})]),g,a("ul",null,[a("li",null,[e(t,{text:"tip",type:"tip",vertical:"middle"})]),a("li",null,[e(t,{text:"warning",type:"warning",vertical:"middle"})]),a("li",null,[e(t,{text:"danger",type:"danger",vertical:"middle"})]),a("li",null,[e(t,{text:"info",type:"info",vertical:"middle"})]),a("li",null,[e(t,{text:"note",type:"note",vertical:"middle"})])]),k])}const f=o(u,[["render",q],["__file","badge.html.vue"]]);export{f as default};
