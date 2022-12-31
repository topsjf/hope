import{_ as e,W as o,X as t,a1 as i}from"./framework-eb069dea.js";const d={},a=i('<p>Name changed from <code>@mr-hope/vuepress-feed</code> to <code>vuepress-plugin-feed2</code>. ⚠</p><h2 id="output-option-changes" tabindex="-1"><a class="header-anchor" href="#output-option-changes" aria-hidden="true">#</a> Output Option changes</h2><ul><li><p>Move all output options from <code>output</code> option to plugin option root and rename them.</p><ul><li><p><code>output.atom.enable</code> renamed to <code>atom</code></p></li><li><p><code>output.json.enable</code> renamed to <code>json</code></p></li><li><p><code>output.rss.enable</code> renamed to <code>rss</code></p></li><li><p><code>output.atom.path</code> renamed to <code>atomOutputFilename</code></p></li><li><p><code>output.json.path</code> renamed to <code>jsonOutputFilename</code></p></li><li><p><code>output.rss.path</code> renamed to <code>rssOutputFilename</code></p></li></ul></li><li><p>Now the plugin no longer generates the three formats by default, you need to manually enable it to output format you need.</p><ul><li><code>atom</code>, <code>json</code> and <code>rss</code> is <code>false</code> by default</li></ul></li></ul><h2 id="new-features" tabindex="-1"><a class="header-anchor" href="#new-features" aria-hidden="true">#</a> New Features</h2><ul><li><p>Supports removing custom components and elements through <code>customElements</code> options <img src="https://img.shields.io/badge/-new-brightgreen" alt="NEW"></p></li><li><p>Customize feed generation via <code>getter</code> option <img src="https://img.shields.io/badge/-new-brightgreen" alt="NEW"></p></li><li><p>Multi-category support <img src="https://img.shields.io/badge/-new-brightgreen" alt="New"></p></li><li><p>Prettier log output <img src="https://img.shields.io/badge/-improved-blue" alt="improved"></p></li></ul>',5),n=[a];function l(c,p){return o(),t("div",null,n)}const r=e(d,[["render",l],["__file","migration.html.vue"]]);export{r as default};