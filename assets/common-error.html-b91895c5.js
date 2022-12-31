import{a3 as h,Z as p,_,a1 as e,a2 as a,$ as i,a0 as t,a5 as d,q as l}from"./framework-838e190a.js";const g={},f=d('<h2 id="typeerror-invalid-value-used-as-weak-map-key" tabindex="-1"><a class="header-anchor" href="#typeerror-invalid-value-used-as-weak-map-key" aria-hidden="true">#</a> <code>TypeError: Invalid value used as weak map key</code></h2><p>Если вы столкнулись с такой ошибкой, вероятно, вы используете нестандартные теги в своем проекте.</p><p>Существуют такие теги, как <code>&lt;center&gt;</code> или <code>&lt;font&gt;</code>, которые есть в спецификации HTML1.0, но помечены как нерекомендуемые с тех пор, как HTML4.0 был выпущен в 1999 году, а затем удален в выпуске HTML5 в 2008 году. Так что Vue не позволяет вам использовать их по умолчанию. Вероятно, вам следует удалить их и использовать стандартный тег HTML5.</p><p>Чтобы удалить их, запустите тему с флагом <code>--debug</code>, и вы получите журналы предупреждений, сообщающие вам о тегах, которые, вероятно, не распознаются.</p>',4),x={href:"https://v2.vuepress.vuejs.org/guide/markdown.html#non-standard-html-tags",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"hydration-completed-but-contains-mismatches",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hydration-completed-but-contains-mismatches","aria-hidden":"true"},"#"),a(),e("code",null,"Hydration completed but contains mismatches.")],-1),m=e("p",null,"Эта ошибка указывает на несоответствие SSR, и это не должно быть проблемой с темой.",-1),v={href:"https://dash.cloudflare.com",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"YOUR_DOMAIN",-1),y=e("code",null,"JavaScript",-1),w=e("code",null,"HTML",-1),D=e("code",null,"Auto Minify",-1),B=d('<div class="hint-container warning"><p class="hint-container-title">Примечание</p><p>Auto Minify в CloudFlare неправильно обрабатывает пробелы HTML и разрывы строк, что может привести к тому, что Vue вызовет несоответствие SSR во время инициализации.</p></div><p>Также вы можете проверить это:</p><ul><li><p>Если вы столкнулись с этой проблемой только на определенных страницах, проверьте, есть ли на странице дополнительные компоненты, которые вы добавили.</p><p>Если это так, эти компоненты, вероятно, будут иметь разные результаты рендеринга между SSR и клиентом. Вы можете попытаться сделать их поведение согласованным или обернуть свои компоненты компонентом <code>&lt;ClientOnly /&gt;</code>, предоставляемым <code>@vuepress/client</code>.</p></li><li><p>Если у вас есть эта проблема на всех страницах, выполните предыдущий шаг, чтобы проверить компоненты, которые вы добавили в макет, или глобальные компоненты.</p></li></ul><h2 id="xxx-isn-t-assign-with-a-lang-and-will-return-en-us-instead" tabindex="-1"><a class="header-anchor" href="#xxx-isn-t-assign-with-a-lang-and-will-return-en-us-instead" aria-hidden="true">#</a> <code>xxx isn’t assign with a lang, and will return &#39;en-US&#39; instead.</code></h2><p>Если вы видите, что <code>xxx isn’t assign with a lang, and will return &#39;en-US&#39; instead.</code> во время запуска процесса разработки проверьте, установили ли вы язык для каждого языка.</p>',5),L=d('<h2 id="xxx-is-missing-sidebar-config" tabindex="-1"><a class="header-anchor" href="#xxx-is-missing-sidebar-config" aria-hidden="true">#</a> <code>xxx is missing sidebar config.</code></h2><p>Using object format sidebar config means you want to set different sidebar based on routes.</p><ul><li>If you want to avoid this warning, you need to add sidebar config for rootLocale path, since all pages will fallback to that.</li><li>If you want to disable sidebar in current route, set <code>sidebar: false</code> in frontmatter.</li><li>If you want to disable sidebar in current folder, add <code>currentFolderRoute: false</code> in sidebar config.</li><li>If you want to tell theme that you only want sidebar in routes you set, add <code>rootLocalePath: false</code> in sidebar config to tell theme sidebar config is disabled by default.</li></ul><h2 id="usexxx-is-called-without-provider" tabindex="-1"><a class="header-anchor" href="#usexxx-is-called-without-provider" aria-hidden="true">#</a> <code>useXXX() is called without provider</code></h2><p>Такие ошибки обычно возникают из-за неправильного включения в проект нескольких версий <code>@vue/xxx</code>, <code>@vuepress/xxx</code>, <code>vue</code> или <code>vue-router</code>.</p><p>Убедитесь, что вы используете последние версии <code>vuepress</code> и <code>vuepress-theme-hope</code>:</p>',6),A=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),a(),e("span",{class:"token function"},"add"),a(` vuepress@next vuepress-theme-hope@next
`)])])],-1),S=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),a(),e("span",{class:"token function"},"add"),a(` vuepress@next vuepress-theme-hope@next
`)])])],-1),T=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),a(` i vuepress@next vuepress-theme-hope@next
`)])])],-1),M=e("p",null,"Кроме того, обновите зависимости, чтобы ваш проект содержал только одну версию соответствующего пакета:",-1),I=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),a(" i "),e("span",{class:"token operator"},"&&"),a(),e("span",{class:"token function"},"pnpm"),a(` up
`)])])],-1),C=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),a(),e("span",{class:"token operator"},"&&"),a(),e("span",{class:"token function"},"yarn"),a(` upgrade
`)])])],-1),H=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),a(" i "),e("span",{class:"token operator"},"&&"),a(),e("span",{class:"token function"},"npm"),a(` update
`)])])],-1),R=e("h2",{id:"некоторые-настроики-страницы-недеиствительны",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#некоторые-настроики-страницы-недеиствительны","aria-hidden":"true"},"#"),a(" Некоторые настройки страницы недействительны")],-1),E=e("p",null,[a("Вы можете сначала просмотреть документацию, чтобы узнать, "),e("strong",null,"не поддерживает ли параметр конфигурацию страницы"),a(".")],-1),V=e("p",null,[e("strong",null,"Поддержка конфигурации страницы"),a(" означает, что тема позволяет конфигурации страницы переопределять глобальную конфигурацию с тем же именем (та же функция), но не все функции соответствуют этому параметру.")],-1),N=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Совет"),e("p",null,"Вы должны знать, что некоторые функции не будут загружены на этапе подготовки, когда глобальная настройка отключена, поэтому их нельзя включить локально.")],-1);function F(U,O){const c=l("ExternalLinkIcon"),u=l("RouterLink"),r=l("CodeTabs");return p(),_("div",null,[f,e("p",null,[a("Чтобы использовать их в любом случае, проверьте "),e("a",x,[a("здесь"),i(c)]),a(", чтобы найти обходной путь.")]),b,m,e("p",null,[a("Сначала проверьте, используете ли вы сервисы, связанные с CloudFlare, и если да, обязательно отключите статическое сжатие ресурсов. Посетите "),e("a",v,[a("dash.cloudflare.com"),i(c)]),a(", перейдите в раздел Веб-сайты → "),k,a(" → Скорость → Оптимизация, отключите "),y,a(" и "),w,a(" в параметрах "),D,a(".")]),B,e("p",null,[a("Даже если у вас только один язык, вам все равно нужно "),i(u,{to:"/ru/config/i18n.html#%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B8%D0%BA%D0%B0-%D1%8F%D0%B7%D1%8B%D0%BA%D0%B0"},{default:t(()=>[a("установить язык")]),_:1}),a(".")]),L,i(r,{id:"93",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:t(({title:n,value:s,isActive:o})=>[A]),tab1:t(({title:n,value:s,isActive:o})=>[S]),tab2:t(({title:n,value:s,isActive:o})=>[T]),_:1}),M,i(r,{id:"107",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:t(({title:n,value:s,isActive:o})=>[I]),tab1:t(({title:n,value:s,isActive:o})=>[C]),tab2:t(({title:n,value:s,isActive:o})=>[H]),_:1}),R,E,V,N])}const j=h(g,[["render",F],["__file","common-error.html.vue"]]);export{j as default};
