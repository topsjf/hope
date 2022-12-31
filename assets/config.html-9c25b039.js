import{a3 as u,Z as h,_ as g,a4 as _,$ as t,a0 as n,a1 as e,a2 as s,a5 as a,q as i}from"./framework-838e190a.js";const f="/hope/assets/vscode-hint-light-829d10ed.png",m="/hope/assets/vscode-hint-dark-c5d6cf83.png",k="/hope/assets/vscode-error-light-3c214af5.png",v="/hope/assets/vscode-error-dark-4177ebab.png",y="/hope/assets/vscode-autocomplete-light-3523f41e.png",V="/hope/assets/vscode-autocomplete-dark-ff24938c.png",b={},x=e("p",null,"В этом руководстве вы узнаете, как настроить проект VuePress.",-1),P=a('<h2 id="конфигурация-vuepress" tabindex="-1"><a class="header-anchor" href="#конфигурация-vuepress" aria-hidden="true">#</a> Конфигурация VuePress</h2><p>Без файлов конфигурации проект VuePress по умолчанию может иметь только ограниченную функциональность, поэтому для лучшей настройки вашего веб-сайта VuePress предоставляет файлы конфигурации.</p><p>VuePress использует папку <code>.vuepress</code> в папке проекта для хранения конфигурации, и все файлы, связанные с VuePress, будут размещены здесь.</p><p>Для сайта VuePress необходимым файлом конфигурации является <code>.vuepress/config.ts</code> (или <code>.vuepress/config.js</code>).</p><div class="hint-container tip"><p class="hint-container-title">Использовать файл конфигурации TS</p><p>Мы рекомендуем вам использовать конфигурационные файлы TypeScript для лучшей подсказки типов, автозаполнения и проверки ошибок.</p><p>Если вы не знакомы с TypeScript, вы также можете использовать файл конфигурации JavaScript, но лучше использовать редактор, такой как VSCode, который полностью поддерживает функции TS/JS, чтобы не потерять функции проверки типов, автодополнения и подсказок параметров, упомянутые ниже.</p></div><h2 id="фаил-конфигурации" tabindex="-1"><a class="header-anchor" href="#фаил-конфигурации" aria-hidden="true">#</a> Файл конфигурации</h2><p>Вам нужно настроить объект конфигурации в файле конфигурации <code>.vuepress/config.ts</code> (или <code>.vuepress/config.js</code>) и экспортировать его.</p><p>Чтобы получить правильные подсказки, рекомендуется импортировать <code>defineUserConfig</code> из <code>vuepress</code> и обернуть объект конфигурации:</p>',8),S=e("div",{class:"language-typescript","data-ext":"ts"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),e("span",{class:"token keyword"},"import"),s(),e("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),e("span",{class:"token punctuation"},"}"),s(),e("span",{class:"token keyword"},"from"),s(),e("span",{class:"token string"},'"vuepress"'),e("span",{class:"token punctuation"},";"),s(`

`),e("span",{class:"token keyword"},"export"),s(),e("span",{class:"token keyword"},"default"),s(),e("span",{class:"token function"},"defineUserConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),s(`
   `),e("span",{class:"token comment"},"// put your config here"),s(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),s(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("div",{class:"highlight-line"}," ")])],-1),C=e("div",{class:"language-javascript","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),e("span",{class:"token keyword"},"import"),s(),e("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),e("span",{class:"token punctuation"},"}"),s(),e("span",{class:"token keyword"},"from"),s(),e("span",{class:"token string"},'"vuepress"'),e("span",{class:"token punctuation"},";"),s(`

`),e("span",{class:"token keyword"},"export"),s(),e("span",{class:"token keyword"},"default"),s(),e("span",{class:"token function"},"defineUserConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),s(`
   `),e("span",{class:"token comment"},"// put your config here"),s(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),s(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("div",{class:"highlight-line"}," ")])],-1),T=a('<h2 id="область-конфигурации" tabindex="-1"><a class="header-anchor" href="#область-конфигурации" aria-hidden="true">#</a> Область конфигурации</h2><h3 id="конфигурация-саита" tabindex="-1"><a class="header-anchor" href="#конфигурация-саита" aria-hidden="true">#</a> Конфигурация сайта</h3><p>Элементы конфигурации в конфигурации сайта напрямую считываются VuePress, не имеют ничего общего с темой и могут действовать во всех темах.</p><p>Мы знаем, что каждый сайт должен иметь свои свойства <code>lang</code>, <code>title</code> и<code>description</code>, поэтому VuePress имеет встроенную поддержку для установки этих свойств.</p>',4),w={class:"hint-container info"},N=e("p",{class:"hint-container-title"},"Конфигурация сайта",-1),j={href:"https://v2.vuepress.vuejs.org/en/reference/config.html",target:"_blank",rel:"noopener noreferrer"},z=e("h3",{id:"конфиг-темы",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#конфиг-темы","aria-hidden":"true"},"#"),s(" Конфиг темы")],-1),L=e("p",null,[s("Конфигурация темы — это объект, который вы передаете функции "),e("code",null,"hopeTheme"),s(", который будет обрабатываться VuePress Theme Hope.")],-1),U=a('<div class="hint-container tip"><p class="hint-container-title">Подсказки и проверки</p><p>Если вы используете редактор, поддерживающий функции языка TS/JS (например, VSCode), вы можете легко получить подсказки и проверки параметров.</p><ul><li><p>Вы можете навести курсор на опцию, чтобы получить подсказки:</p><p><img src="'+f+'" alt="подсказка варианта" data-mode="lightmode-only" loading="lazy"><img src="'+m+'" alt="подсказка варианта" data-mode="darkmode-only" loading="lazy"></p></li><li><p>Если вы введете неправильное имя опции или неверное значение, вы получите сообщение об ошибке:</p><p><img src="'+k+'" alt="Сообщение об ошибке" data-mode="lightmode-only" loading="lazy"><img src="'+v+'" alt="Сообщение об ошибке" data-mode="darkmode-only" loading="lazy"></p></li><li><p>Вы можете получить автодополнение при вводе:</p><p><img src="'+y+'" alt="Автозаполнение" data-mode="lightmode-only" loading="lazy"><img src="'+V+'" alt="Автозаполнение" data-mode="darkmode-only" loading="lazy"></p></li></ul></div><h3 id="еще" tabindex="-1"><a class="header-anchor" href="#еще" aria-hidden="true">#</a> Еще</h3>',2),A={class:"hint-container info"},E=e("p",{class:"hint-container-title"},"Конфигурация плагина",-1),J=e("code",null,"plugins.PLUGIN_NAME",-1),B={class:"hint-container info"},H=a('<p class="hint-container-title">Конфигурация стиля</p><p>Тема VuePress Hope использует папку <code>.vuepress/styles</code> для хранения конфигурации стиля, как и другие темы.</p><p>В этой папке вы можете:</p><ul><li>Создайте <code>index.scss</code>, чтобы внедрить дополнительные стили CSS</li><li>Создайте <code>config.scss</code> для настройки стиля конфигурации</li><li>Создайте <code>palette.scss</code>, чтобы установить цвет и макет</li></ul>',4),I={class:"hint-container info"},M=e("p",{class:"hint-container-title"},"Конфиг страницы",-1);function F(R,q){const c=i("CodeTabs"),l=i("ExternalLinkIcon"),o=i("RouterLink");return h(),g("div",null,[x,_(" more "),P,t(c,{id:"33",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:r,value:d,isActive:p})=>[S]),tab1:n(({title:r,value:d,isActive:p})=>[C]),_:1}),T,e("div",w,[N,e("p",null,[s("Вы можете перейти к "),e("a",j,[s("VuePress2 → Справочник → Конфигурация"),t(l)]),s(", чтобы просмотреть всю конфигурацию VuePress.")])]),z,L,e("p",null,[s("Вы можете найти все настройки темы в "),t(o,{to:"/ru/config/"},{default:n(()=>[s("Конфиг → Конфиг темы")]),_:1}),s(".")]),U,e("div",A,[E,e("p",null,[s("VuePress Theme Hope объединяет некоторые плагины, вы можете передать параметры плагина через "),J,s(" в настройках темы, смотрите "),t(o,{to:"/ru/config/plugins/"},{default:n(()=>[s("Конфиг → Плагин темы")]),_:1}),s(" для получения дополнительной информации.")]),e("p",null,[s("Если вы хотите использовать дополнительные плагины, импортируйте плагин самостоятельно и передайте параметры плагина, подробности смотрите в "),t(o,{to:"/ru/cookbook/vuepress/plugin.html"},{default:n(()=>[s("VuePress → плагины")]),_:1}),s(".")])]),e("div",B,[H,e("p",null,[s("Подробнее смотрите "),t(o,{to:"/ru/config/style.html"},{default:n(()=>[s("Конфиг → Стиль")]),_:1}),s(".")])]),e("div",I,[M,e("p",null,[s("VuePress поддерживает настройку области действия конкретной страницы через YAML Frontmatter в файлах Markdown. Подробнее смотрите "),t(o,{to:"/ru/cookbook/tutorial/content.html#frontmatter"},{default:n(()=>[s("Контент проекта → Frontmatter")]),_:1}),s(" в предыдущей главе.")])])])}const Y=u(b,[["render",F],["__file","config.html.vue"]]);export{Y as default};
