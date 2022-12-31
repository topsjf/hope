import{_ as a,W as l,X as d,$ as e,a0 as t,Y as o,Z as i,a1 as s,E as r}from"./framework-eb069dea.js";const c={},h=s('<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>The <code>vuepress-plugin-feed2</code> plugin can generate feed files in the following three formats for you:</p><ul><li>Atom 1.0</li><li>JSON 1.1</li><li>RSS 2.0</li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Atom and JSON are provided to improve more feed software adaptation.</p><p>Please use RSS if possible.</p></div><p>Please set <code>atom</code>, <code>json</code> or <code>rss</code> to <code>true</code> in the plugin options according to the format you want to generate.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Of course you can enable them all. This is not a choose 1 from 3 situation.</p></div><p>Considering that rare people stick to feed now, this plugin provides a minimal configuration to adjust the automatic generation of detailed feed files. Also it allows you to freely define the output content of the feed.</p><p>To correctly generate the link address, you need to set <code>hostname</code> (deployment domain name) in the plugin options,</p><h2 id="channel-settings" tabindex="-1"><a class="header-anchor" href="#channel-settings" aria-hidden="true">#</a> Channel settings</h2><p>You can customize the feed channel information by setting the <code>channel</code> option.</p><p>We recommend the following settings:</p><ul><li>Convert the date of creating the feed to ISOString and write it into <code>channel.pubDate</code></li><li>The update period of the content set in <code>channel.ttl</code> (unit: minutes)</li><li>Set copyright information via <code>channel.copyright</code></li><li>Set the channel author via <code>channel.author</code>.</li></ul><div class="hint-container tip"><p class="hint-container-title">Default channel settings</p><ul><li><p>The title and description of the channel is the name and description of the site by default</p></li><li><p>The link of the channel and the last update time will be automatically generated by the plugin.</p></li></ul></div>',13),u=e("h2",{id:"generation-control",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#generation-control","aria-hidden":"true"},"#"),t(" Generation Control")],-1),f=e("h3",{id:"default-generation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#default-generation","aria-hidden":"true"},"#"),t(" Default Generation")],-1),p=e("p",null,"By default, all articles are added to the feed stream.",-1),g=e("h3",{id:"customize-feed-item",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#customize-feed-item","aria-hidden":"true"},"#"),t(" Customize Feed Item")],-1),m=e("p",null,[t("You can control how feed item is generated in specific article by configuring the "),e("code",null,"feed"),t(" option in frontmatter.")],-1),_=e("h3",{id:"customize-feed-generation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#customize-feed-generation","aria-hidden":"true"},"#"),t(" Customize Feed Generation")],-1),v=e("p",null,[t("You can take full control of feed items generation by configuring the "),e("code",null,"getter"),t(" in the plugin options.")],-1),y=e("h3",{id:"i18n-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i18n-config","aria-hidden":"true"},"#"),t(" I18n Config")],-1),b=e("p",null,"The plugin generates separate feeds for each language.",-1),C=e("p",null,[t("You can provide different settings for different languages via "),e("code",null,"locales"),t(" in the plugin options.")],-1);function S(x,w){const n=r("RouterLink");return l(),d("div",null,[h,e("p",null,[t("For detailed options and their default values, see "),o(n,{to:"/config/channel.html"},{default:i(()=>[t("Configuration → Channel Settings")]),_:1})]),u,f,p,e("p",null,[t("For the content read by default, see "),o(n,{to:"/config/item.html"},{default:i(()=>[t("Configuration → Item Control")]),_:1})]),g,m,e("p",null,[t("For detailed options and their default values, see "),o(n,{to:"/config/item.html"},{default:i(()=>[t("Configuration → Project Settings")]),_:1}),t(".")]),_,v,e("p",null,[t("For detailed options and their default values, see "),o(n,{to:"/config/getter.html"},{default:i(()=>[t("Configuration → Feed Getter")]),_:1}),t(".")]),y,b,C])}const k=a(c,[["render",S],["__file","guide.html.vue"]]);export{k as default};
