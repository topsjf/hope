import{a3 as a,Z as d,_ as r,a4 as u,a1 as e,a2 as t,$ as o,a0 as i,a5 as c,q as s}from"./framework-838e190a.js";const h={},_=e("p",null,"Следующие параметры управляют внешним видом темы. В большинстве случаев на них не нужно обращать внимание, они предусмотрены лишь для небольшого количества пользователей с потребностями.",-1),p=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"Примечание"),e("p",null,"Эти параметры действительны только при установке непосредственно под параметрами темы, установка их на каждом языке не влияет.")],-1),D={id:"iconassets",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#iconassets","aria-hidden":"true"},"#",-1),B=e("li",null,[t("Тип: "),e("code",null,'"iconfont" | "fontawesome" | `//${string}` | `http://${string}` | `https://${string}` ')],-1),m=e("li",null,"Обязательный: Нет",-1),g=e("p",null,[t("Поддерживается ссылка на ресурс иконки шрифта, ключевые слова "),e("code",null,"'iconfont'"),t(" и "),e("code",null,"'fontawesome'"),t(".")],-1),b={id:"darkmode",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#darkmode","aria-hidden":"true"},"#",-1),w=e("li",null,[t("Тип: "),e("code",null,'"switch" | "toggle" | "auto" | "enable" | "disable"')],-1),k=e("li",null,[t("По умолчанию: "),e("code",null,'"switch"')],-1),q=c('<p>Варианты поддержки темного режима:</p><ul><li><code>&quot;switch&quot;</code>: переключение между темным, светлым и авто</li><li><code>&quot;toggle&quot;</code>: переключение между светлым и темным режимами</li><li><code>&quot;auto&quot;</code>: автоматически решать, применять ли темный режим на основе цветовой схемы пользовательского устройства или текущего времени</li><li><code>&quot;enable&quot;</code>: только темный режим</li><li><code>&quot;disable&quot;</code>: отключить темный режим</li></ul><div class="hint-container note"><p class="hint-container-title">Заметка</p><p>Если вам не нужна эта функция, установите <code>darkmode: &quot;disable&quot;</code>, чтобы отключить ее.</p></div>',3),v={id:"themecolor",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#themecolor","aria-hidden":"true"},"#",-1),y=e("li",null,[t("Тип: "),e("code",null,"Record<string, string> | false")],-1),C=e("li",null,[t("По умолчанию: "),e("code",null,"false")],-1),F=e("p",null,"Конфигурация цвета темы.",-1),E={id:"fullscreen",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#fullscreen","aria-hidden":"true"},"#",-1),V=e("li",null,[t("Тип: "),e("code",null,"boolean")],-1),$=e("li",null,[t("По умолчанию: "),e("code",null,"false")],-1),R=e("p",null,"Показывать ли кнопку «полноэкранный режим».",-1),T={id:"backtotop",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#backtotop","aria-hidden":"true"},"#",-1),P=e("li",null,[t("Тип: "),e("code",null,"boolean | number")],-1),S=e("li",null,[t("По умолчанию: "),e("code",null,"true")],-1),Z=e("p",null,"Показывать ли кнопку «Вернуться к началу».",-1),j=e("p",null,[t("Расстояние срабатывания по умолчанию составляет 300 пикселей, которое можно изменить, указав число. Заполнение "),e("code",null,"false"),t(" отключает кнопку «Наверх».")],-1),z={id:"mobilebreakpoint",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#mobilebreakpoint","aria-hidden":"true"},"#",-1),H=c('<ul><li>Тип: <code>number</code></li><li>По умолчанию: <code>719</code></li></ul><p>Ширина окна при переключении мобильного представления и представления рабочего стола в пикселях</p><div class="hint-container warning"><p class="hint-container-title">Примечание</p><p>Вы должны оставить для этой опции то же значение, что и для <code>$tablet</code> в <code>.vuepress/config.scss</code></p></div>',3),I={id:"pure",tabindex:"-1"},J=e("a",{class:"header-anchor",href:"#pure","aria-hidden":"true"},"#",-1),K=e("li",null,[t("Тип: "),e("code",null,"boolean")],-1),M=e("li",null,[t("По умолчанию: "),e("code",null,"false")],-1),O=e("p",null,"Включить ли чистый режим.",-1),Q=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Совет"),e("p",null,"Включение этого отключит некоторые причудливые стили."),e("p",null,"Полезно, когда вы хотите предоставить «Сайт с чистой документацией».")],-1),U={id:"iconprefix",tabindex:"-1"},W=e("a",{class:"header-anchor",href:"#iconprefix","aria-hidden":"true"},"#",-1),X=e("li",null,[t("Тип: "),e("code",null,"string")],-1),Y=e("li",null,"По умолчанию: Выводится из iconAssets",-1),ee=e("p",null,"Префикс значка FontClass， обычно он может быть автоматически установлен темой.",-1);function te(oe,ne){const n=s("Badge"),l=s("RouterLink");return d(),r("div",null,[_,u(" more "),p,e("h2",D,[f,t(" iconAssets "),o(n,{text:"Только root",type:"warning"})]),e("ul",null,[B,m,e("li",null,[t("Детали: "),o(l,{to:"/ru/guide/interface/icon.html"},{default:i(()=>[t("Интерфейс → Иконка")]),_:1})])]),g,e("h2",b,[x,t(" darkmode "),o(n,{text:"Включено по умолчанию"}),t(),o(n,{text:"Только root",type:"warning"})]),e("ul",null,[w,k,e("li",null,[t("Детали: "),o(l,{to:"/ru/guide/interface/darkmode.html"},{default:i(()=>[t("Интерфейс → Темный режим")]),_:1})])]),q,e("h2",v,[A,t(" themeColor "),o(n,{text:"Только root",type:"warning"})]),e("ul",null,[y,C,e("li",null,[t("Детали: "),o(l,{to:"/ru/guide/interface/theme-color.html"},{default:i(()=>[t("Интерфейс → Цвет темы")]),_:1})])]),F,e("h2",E,[N,t(" fullscreen "),o(n,{text:"Только root",type:"warning"})]),e("ul",null,[V,$,e("li",null,[t("Детали: "),o(l,{to:"/ru/guide/interface/others.html#%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0"},{default:i(()=>[t("Интерфейс → Кнопка «Полноэкранный режим»")]),_:1})])]),R,e("h2",T,[L,t(" backToTop "),o(n,{text:"Только root",type:"warning"})]),e("ul",null,[P,S,e("li",null,[t("Детали: "),o(l,{to:"/ru/guide/interface/others.html#%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0-%C2%AB%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%D1%81%D1%8F-%D0%BA-%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%83%C2%BB"},{default:i(()=>[t("Интерфейс → Кнопка «Наверх»")]),_:1})])]),Z,j,e("h2",z,[G,t(" mobileBreakPoint "),o(n,{text:"Только root",type:"warning"})]),H,e("h2",I,[J,t(" pure "),o(n,{text:"Только root",type:"warning"})]),e("ul",null,[K,M,e("li",null,[t("Детали: "),o(l,{to:"/ru/guide/interface/pure.html"},{default:i(()=>[t("Интерфейс → Чистый режим")]),_:1})])]),O,Q,e("h2",U,[W,t(" iconPrefix "),o(n,{text:"Только root",type:"warning"})]),e("ul",null,[X,Y,e("li",null,[t("Детали: "),o(l,{to:"/ru/guide/interface/icon.html"},{default:i(()=>[t("Интерфейс → Иконка")]),_:1})])]),ee])}const ie=a(h,[["render",te],["__file","appearance.html.vue"]]);export{ie as default};
