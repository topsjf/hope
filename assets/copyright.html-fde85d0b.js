import{a3 as c,Z as a,_ as n,a1 as e,a2 as o,$ as r,a4 as d,a5 as i,q as s}from"./framework-838e190a.js";const l={},h=e("p",null,"Иногда вы можете не хотеть, чтобы некоторые из ваших статей копировались другими, или вы хотите, чтобы другие автоматически генерировали часть информации об авторских правах в буфер обмена при копировании.",-1),p=e("code",null,"vuepress-theme-hope",-1),u={href:"https://vuepress-theme-hope.github.io/v2/copyright/zh/",target:"_blank",rel:"noopener noreferrer"},g=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Инфо"),e("p",null,[e("code",null,"vuepress-theme-hope"),o(" передает "),e("code",null,"plugins.copyright"),o(" в параметрах темы в качестве параметров плагина для "),e("code",null,"vuepress-plugin-copyright2"),o(".")])],-1),_=i('<h2 id="включение-плагина" tabindex="-1"><a class="header-anchor" href="#включение-плагина" aria-hidden="true">#</a> Включение плагина</h2><p>Поскольку половина пользователей использует эту тему для создания документов, а сайтам документов обычно не нужно добавлять информацию об авторских правах, этот плагин по умолчанию не включен.</p><div class="hint-container info"><p class="hint-container-title">Инфо</p><p>Чтобы включить этот плагин, вам нужно установить для <code>plugins.copyright</code> в настройках темы значение <code>true</code> или объект.</p><p>Установка в <code>true</code> эквивалентна установке <code>{ global: true }</code>.</p></div><ul><li>Когда опция <code>global</code> плагина не равна <code>true</code>, плагин отключен глобально, и вам нужно включить его вручную, установив <code>copy: true</code> в frontmatter.</li><li>Установка <code>global: true</code> делает его включенным глобально и позволяет установить <code>copy: false</code> во frontmatter страницы, чтобы отключить его.</li></ul><p>Чтобы не беспокоить посетителей, информация об авторских правах будет добавлена только в том случае, если длина контента, скопированного пользователем, не менее <code>100</code>. Если вы хотите изменить это значение триггера, установите <code>triggerWords</code>, и этот параметр поддерживает переопределение через <code>copy.triggerWord</code> в странице frontmatter.</p><h2 id="отключить-копирование-и-выделение" tabindex="-1"><a class="header-anchor" href="#отключить-копирование-и-выделение" aria-hidden="true">#</a> Отключить копирование и выделение</h2><ul><li>Если вы не хотите, чтобы пользователи копировали весь ваш сайт или конкретный текст страницы, вы можете отключить копирование в настройках плагина или во внешнем виде страницы, установив frontmatter <code>disableCopy</code>, последнее имеет более высокий приоритет.</li><li>Если вы не хотите, чтобы пользователи выбирали весь ваш сайт или конкретный текст страницы, вы можете отключить выбор в настройках плагина или во внешнем виде страницы, установив <code>disableSelection</code>, последний имеет более высокий приоритет.</li></ul><h2 id="информация-об-авторских-правах" tabindex="-1"><a class="header-anchor" href="#информация-об-авторских-правах" aria-hidden="true">#</a> Информация об авторских правах</h2><p>Вы можете установить информацию об авторе и лицензии через <code>author</code> и <code>license</code> в настройках плагина. Если на вашем сайте разные авторы и лицензии на разных страницах, вы можете передать функцию <code>(page: Page) =&gt; string</code>, которая принимает объект текущей страницы в качестве параметра и возвращает соответствующую информацию.</p><h2 id="демо" tabindex="-1"><a class="header-anchor" href="#демо" aria-hidden="true">#</a> Демо</h2><p>Пожалуйста, скопируйте этот текст и вставьте его в любое место, чтобы увидеть эффект. Пожалуйста, скопируйте этот текст и вставьте его в любое место, чтобы увидеть эффект. Пожалуйста, скопируйте этот текст и вставьте его в любое место, чтобы увидеть эффект. Пожалуйста, скопируйте этот текст и вставьте его в любое место, чтобы увидеть эффект. Пожалуйста, скопируйте этот текст и вставьте его в любое место, чтобы увидеть эффект. Пожалуйста, скопируйте этот текст и вставьте его в любое место, чтобы увидеть эффект. Пожалуйста, скопируйте этот текст и вставьте его в любое место, чтобы увидеть эффект. Пожалуйста, скопируйте этот текст и вставьте его в любое место, чтобы увидеть эффект. Пожалуйста, скопируйте этот текст и вставьте его в любое место, чтобы увидеть эффект. Пожалуйста, скопируйте этот текст и вставьте его в любое место, чтобы увидеть эффект.</p><h2 id="еще" tabindex="-1"><a class="header-anchor" href="#еще" aria-hidden="true">#</a> Еще</h2>',12),f={href:"https://vuepress-theme-hope.github.io/v2/copyright/zh/",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const t=s("ExternalLinkIcon");return a(),n("div",null,[h,e("p",null,[p,o(" использует "),e("a",u,[o("vuepress-plugin-copyright2"),r(t)]),o(" для предоставления связанных функций.")]),g,d(" more "),_,e("p",null,[o("Для получения документации по плагину посетите "),e("a",f,[o("документации vuepress-plugin-copyright2"),r(t)]),o(".")])])}const x=c(l,[["render",m],["__file","copyright.html.vue"]]);export{x as default};
