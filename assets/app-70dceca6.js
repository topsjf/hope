import{_ as __vitePreload,w as withBase,u as usePageLang,a as usePageFrontmatter,d as defineClientConfig,b as useRouteLocale,r as routeLocaleSymbol,c as usePageData,e as useSiteData,f as useSiteLocaleData,C as ClientOnly,g as Content,h as usePageHeadTitle,i as usePageLayout,s as siteData,p as pageData,j as resolvers,k as pagesComponents,l as layoutsSymbol,m as pageFrontmatterSymbol,n as pageHeadTitleSymbol,o as pageHeadSymbol,q as pageLangSymbol,t as pageLayoutSymbol,v as siteLocaleDataSymbol,x as usePageHead,y as updateHeadSymbol}from"./chunk-E44UNXTX-0634d18b.js";import{O as Ot$1,_ as _t$1,M as Mt$1,c as ct$1,S as St$1,k as kt$1,L as Lt,l as lt$1,J as Jt$1,q as qt$1,G as Gt$1,e as et,H as Ht$1,w as wt$1,U as Ut$1}from"./index-063d1cff.js";import{u as useEventListener,a as useScriptTag,b as useDebounceFn,c as useStyleTag,d as useStorage,e as useFullscreen,f as useThrottleFn,o as onClickOutside}from"./index-6b8eae58.js";import{d as defineComponent,c as computed,h as h$5,r as ref,o as onMounted,a as onBeforeMount,i as isLinkHttp,b as isRef,w as watch,u as unref,e as ensureEndingSlash,T as Transition,f as useRouter,g as onBeforeUnmount,j as useRoute,R as RouterLink,k as watchEffect,n as nextTick,l as defineAsyncComponent,p as provide,m as inject,q as resolveComponent,t as toRef,s as isLinkMailto,v as isLinkTel,x as isString,y as isLinkExternal,z as removeEndingSlash,A as isArray,B as isPlainObject,C as TransitionGroup,D as removeLeadingSlash,E as useLink,F as resolveRoutePathFromUrl,G as createSSRApp,H as RouterView,I as createRouter,S as START_LOCATION_NORMALIZED,J as createWebHistory}from"./framework-838e190a.js";import{r as resolveThemeLocaleData,t as themeLocaleDataSymbol,u as useThemeData,a as useThemeData$1,b as useThemeLocaleData,c as usePure}from"./themeData-74339b63.js";import{A as AppearanceSwitch}from"./AppearanceSwitch-129ac4e5.js";import{T as ThemeColorPicker}from"./ThemeColorPicker-06b96480.js";import{T as ToggleFullScreenButton}from"./ToggleFullScreenButton-0bf56e0f.js";import{O as OutlookIcon}from"./outlookIcon-3695469a.js";import{u as useDarkMode,i as injectDarkMode,s as setupDarkMode}from"./darkmode-acad7ca5.js";const hopeInject="",clientConfig0={},fontIcon="";var s$2=defineComponent({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(Ge){const Ye=computed(()=>{const Xe={};return Ge.color&&(Xe.color=Ge.color),Ge.size&&(Xe["font-size"]=Number.isNaN(Number(Ge.size))?Ge.size:`${Ge.size}px`),Object.keys(Xe).length?Xe:null});return()=>Ge.icon?h$5("span",{class:["font-icon icon",`iconfont icon-${Ge.icon}`],style:Ye.value}):null}});const plyr="",audioPlayer="",a$4=Ge=>isLinkHttp(Ge)?Ge:withBase(Ge);var f$4=defineComponent({name:"AudioPlayer",props:{options:{type:Object,default:()=>({})},src:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:""},poster:{type:String,default:""},loop:Boolean},setup(Ge){let Ye=null;const Xe=ref(),at=computed(()=>({hideYouTubeDOMError:!0,...Ge.options}));return onMounted(()=>{__vitePreload(()=>import("./plyr.min-4a928d69.js"),[]).then(({default:ut})=>{Xe.value&&(Ye=new ut(Xe.value,at.value))})}),onBeforeMount(()=>{try{Ye==null||Ye.destroy()}catch(ut){at.value.hideYouTubeDOMError&&ut.message==="The YouTube player is not attached to the DOM."||console.error(ut)}}),()=>Ge.src?[h$5("div",{class:"audio-wrapper"},[h$5("a",{class:"audio-print",href:a$4(Ge.src)},Ge.title||"An audio"),Ge.poster?h$5("img",{class:"audio-poster",src:a$4(Ge.poster)}):null,h$5("div",{class:"audio-info"},[Ge.title?h$5("div",{class:"audio-title"},Ge.title):null,h$5("audio",{ref:Xe,crossorigin:"anonymous",preload:"metadata",controls:"",...Ge.loop?{loop:""}:{}},h$5("source",{src:a$4(Ge.src),type:Ge.type}))])])]:null}});const badge="",t$2=({type:Ge="info",text:Ye="",vertical:Xe="top",color:at},{slots:ut})=>{var ht;return h$5("span",{class:["badge",Ge,{diy:at}],style:{verticalAlign:Xe,...at?{backgroundColor:at}:{}}},Ye||((ht=ut.default)==null?void 0:ht.call(ut)))};t$2.displayName="Badge";const biliBili="",y$6=Ge=>typeof Ge=="string"?Ge:`${Ge}px`,B$2=(Ge,Ye=0)=>{const Xe=ref(),at=computed(()=>y$6(unref(Ge.width)||"100%")),ut=ref("auto"),ht=To=>{if(typeof To=="string"){const[$o,xo]=To.split(":"),zo=Number($o)/Number(xo);if(!Number.isNaN(zo))return zo}return typeof To=="number"?To:16/9},Bo=To=>{const $o=unref(Ge.height),xo=ht(unref(Ge.ratio));return $o?y$6($o):`${Number(To)/xo+unref(Ye)}px`},Ao=()=>{Xe.value&&(ut.value=Bo(Xe.value.clientWidth))};return onMounted(()=>{Ao(),isRef(Ye)&&watch(Ye,()=>Ao()),useEventListener("orientationchange",()=>Ao()),useEventListener("resize",()=>Ao())}),{el:Xe,width:at,height:ut}};var S$6=defineComponent({name:"BiliBili",props:{bvid:{type:String,required:!0},title:{type:String,default:"A BiliBili video"},page:{type:[String,Number],default:1},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},time:{type:[String,Number],default:0},lowQuality:Boolean,noDanmaku:Boolean},setup(Ge){const Ye=ref(!1),Xe=computed(()=>Ye.value?0:68),at=()=>{Ye.value=Ot$1(navigator.userAgent)||ut.value.clientWidth<640},{el:ut,width:ht,height:Bo}=B$2(Ge,Xe),Ao=computed(()=>`https://player.bilibili.com/player.html?bvid=${Ge.bvid}&t=${Ge.time}&high_quality=${Ge.lowQuality?0:1}&page=${Ge.page}&danmaku=${Ge.noDanmaku?0:1}`);return onMounted(()=>{at(),useEventListener("orientationchange",()=>at()),useEventListener("resize",()=>at())}),()=>[h$5("div",{class:"bili-desc"},h$5("a",{class:"sr-only",href:Ao.value},Ge.title)),h$5("iframe",{ref:ut,src:`https://player.bilibili.com/player.html?bvid=${Ge.bvid}&t=${Ge.time}&high_quality=${Ge.lowQuality?0:1}&page=${Ge.page}&danmaku=${Ge.noDanmaku?0:1}`,title:Ge.title,class:"bili-iframe",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture",style:{width:ht.value,height:Bo.value}})]}});const codePen="";var i$4=defineComponent({name:"CodePen",props:{link:{type:String,default:""},user:{type:String,default:""},slugHash:{type:String,default:""},title:{type:String,default:""},height:{type:[String,Number],default:380},theme:{type:String,default:"default"},defaultTab:{type:Array,default:()=>["result"]},status:{type:String,default:"preview"}},setup(Ge){const Ye=()=>{const ut=/(?:^(?:https?:)?\/\/codepen.io\/|^\/|^)(.*?)\/(?:pen|embed)\/(.*?)\/?$/.exec(Ge.link);return{user:ut==null?void 0:ut[1],slugHash:ut==null?void 0:ut[2]}},Xe=computed(()=>Ye().user||Ge.user),at=computed(()=>Ye().slugHash||Ge.slugHash);return useScriptTag("https://static.codepen.io/assets/embed/ei.js"),onMounted(()=>{if(Ge.status!=="clicktorun"){const ut=setInterval(()=>{window.__CPEmbed&&(window.__CPEmbed(`.codepen-${at.value}`),clearInterval(ut))},500)}}),()=>h$5("div",{class:["codepen-wrapper",`codepen-${at.value}`],"data-height":Ge.height,"data-theme-id":Ge.theme,"data-user":Xe.value,"data-slug-hash":at.value,"data-default-tab":Ge.defaultTab.join(","),"data-pen-title":Ge.title,"data-preview":Ge.status==="preview",user:Ge.user},[Ge.status==="clicktorun"?h$5("button",{class:"codepen-button",onClick:()=>{window.__CPEmbed(`.codepen-${at.value}`)}},"Run Code"):null,h$5("span",["See the Pen ",h$5("a",{href:Ge.link},[Ge.title])," by ",h$5("a",{href:`https://codepen.io/${Xe.value}`},[Xe.value])," on ",h$5("a",{href:"https://codepen.io"},["CodePen"]),"."])])}});const pdf="",y$5=Ge=>typeof Ge=="string"?Ge:`${Ge}px`,x$2=(Ge,Ye=0)=>{const Xe=ref(),at=computed(()=>y$5(unref(Ge.width)||"100%")),ut=ref("auto"),ht=To=>{if(typeof To=="string"){const[$o,xo]=To.split(":"),zo=Number($o)/Number(xo);if(!Number.isNaN(zo))return zo}return typeof To=="number"?To:16/9},Bo=To=>{const $o=unref(Ge.height),xo=ht(unref(Ge.ratio));return $o?y$5($o):`${Number(To)/xo+unref(Ye)}px`},Ao=()=>{Xe.value&&(ut.value=Bo(Xe.value.clientWidth))};return onMounted(()=>{Ao(),isRef(Ye)&&watch(Ye,()=>Ao()),useEventListener("orientationchange",()=>Ao()),useEventListener("resize",()=>Ao())}),{el:Xe,width:at,height:ut}},R$2=Ge=>isLinkHttp(Ge)?Ge:withBase(Ge),c$2=Ge=>{console.error("[PDF]: "+Ge)},E$4=Ge=>{for(;Ge.firstChild;)Ge.removeChild(Ge.firstChild)},M$3=Ge=>Ge==="string"?document.querySelector(Ge):Ge instanceof HTMLElement?Ge:document.body,U$1=Ge=>{let Ye="";return Ge&&(Ye+=Object.entries(Ge).map(([Xe,at])=>Xe==="noToolbar"?`toolbar=${at?0:1}`:`${encodeURIComponent(Xe)}=${encodeURIComponent(at)}`).join("&"),Ye&&(Ye="#"+Ye,Ye=Ye.slice(0,Ye.length-1))),Ye},P$5=(Ge,Ye,Xe,at,ut)=>{E$4(Ye);let ht=Xe;Ge==="pdfjs"&&(ht=`${`${ensureEndingSlash(withBase(null))}web/viewer.html`}?file=${encodeURIComponent(Xe)}${U$1(at)}`);const Bo=Ge==="pdfjs"||Ge==="iframe"?"iframe":"embed",Ao=document.createElement(Bo);return Ao.className="pdf-viewer",Ao.type="application/pdf",Ao.title=ut,Ao.src=ht,Ao instanceof HTMLIFrameElement&&(Ao.allow="fullscreen"),Ye.classList.add("pdf-viewer-container"),Ye.appendChild(Ao),Ye.getElementsByTagName(Bo)[0]},j$1=(Ge,Ye=null,{title:Xe,options:at={}})=>{var ut;if(typeof window>"u"||window.navigator===void 0||window.navigator.userAgent===void 0||window.navigator.mimeTypes===void 0)return null;const ht=window.navigator,Bo=window.navigator.userAgent,Ao=window.Promise!==void 0,To=ht.platform!==void 0&&ht.platform==="MacIntel"&&ht.maxTouchPoints!==void 0&&ht.maxTouchPoints>1||Ot$1(Bo),$o=!To&&_t$1(Bo),xo=!To&&/irefox/.test(Bo)&&Bo.split("rv:").length>1?parseInt(Bo.split("rv:")[1].split(".")[0],10)>18:!1,zo=!To&&(Ao||xo);if(typeof Ge!="string")return c$2("URL is not valid"),null;const Lo=M$3(Ye);if(!Lo)return c$2("Target element cannot be determined"),null;const Mo=Xe||((ut=/\/([^/]+).pdf/.exec(Ge))==null?void 0:ut[1])||"PDF Viewer";return zo||!To?P$5($o?"iframe":"embed",Lo,Ge,at,Mo):(Lo.innerHTML="<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]' target='_blank'>Download PDF</a></p>".replace(/\[url\]/g,Ge),c$2("This browser does not support embedded PDFs"),null)};var k$7=defineComponent({name:"PDF",props:{url:{type:String,required:!0},title:{type:String,default:""},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},page:{type:[String,Number],default:1},noToolbar:Boolean,zoom:{type:[String,Number],default:100}},setup(Ge){const{el:Ye,width:Xe,height:at}=x$2(Ge);return onMounted(()=>{j$1(R$2(Ge.url),Ye.value,{title:Ge.title,options:{page:Ge.page,noToolbar:Ge.noToolbar,zoom:Ge.zoom}})}),()=>h$5("div",{class:"pdf-preview",ref:Ye,style:{width:Xe.value,height:at.value}})}});const stackBlitz="",f$3=Ge=>typeof Ge=="string"?Ge:`${Ge}px`,y$4=(Ge,Ye=0)=>{const Xe=ref(),at=computed(()=>f$3(unref(Ge.width)||"100%")),ut=ref("auto"),ht=To=>{if(typeof To=="string"){const[$o,xo]=To.split(":"),zo=Number($o)/Number(xo);if(!Number.isNaN(zo))return zo}return typeof To=="number"?To:16/9},Bo=To=>{const $o=unref(Ge.height),xo=ht(unref(Ge.ratio));return $o?f$3($o):`${Number(To)/xo+unref(Ye)}px`},Ao=()=>{Xe.value&&(ut.value=Bo(Xe.value.clientWidth))};return onMounted(()=>{Ao(),isRef(Ye)&&watch(Ye,()=>Ao()),useEventListener("orientationchange",()=>Ao()),useEventListener("resize",()=>Ao())}),{el:Xe,width:at,height:ut}};var S$5=defineComponent({name:"StackBlitz",props:{id:{type:String,required:!0},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},file:{type:String,default:""},initialPath:{type:String,default:""},embed:Boolean,load:Boolean,view:{type:String,default:"preview"},hideExplorer:Boolean,hideNavigation:Boolean,hideDevtools:Boolean},setup(Ge){const{el:Ye,width:Xe,height:at}=y$4(Ge);return()=>h$5("iframe",{ref:Ye,class:"stack-blitz-iframe",src:`https://stackblitz.com/edit/${Ge.id}?embed=${Ge.embed?1:0}${Ge.file?`&file=${Ge.file}`:""}${Ge.initialPath?`&initialpath=${encodeURI(Ge.initialPath)}`:""}&ctl=${Ge.load?0:1}&view=${Ge.view}${Ge.hideExplorer?"&hideExplorer=1":""}${Ge.hideNavigation?"&hideNavigation=1":""}${Ge.hideDevtools?"&hidedevtools=1":""}`,allow:"clipboard-write",style:{width:Xe.value,height:at.value}})}});const videoPlayer="",o$3=Ge=>isLinkHttp(Ge)?Ge:withBase(Ge);var m$2=defineComponent({name:"VideoPlayer",props:{options:{type:Object,default:()=>({})},src:{type:String,required:!0},title:{type:String,default:"A video"},type:{type:String,default:""},tracks:{type:Array,default:()=>[]},poster:{type:String,default:""},width:{type:[String,Number],default:"100%"},loop:Boolean},setup(Ge){let Ye=null;const Xe=ref(),at=computed(()=>({hideYouTubeDOMError:!0,...Ge.options}));return onMounted(()=>{__vitePreload(()=>import("./plyr.min-4a928d69.js"),[]).then(({default:ut})=>{Xe.value&&(Ye=new ut(Xe.value,at.value))})}),onBeforeMount(()=>{try{Ye==null||Ye.destroy()}catch(ut){at.value.hideYouTubeDOMError&&ut.message==="The YouTube player is not attached to the DOM."||console.error(ut)}}),()=>Ge.src?h$5("div",{class:"video-wrapper",style:{width:Ge.width}},[h$5("a",{class:"sr-only",href:o$3(Ge.src)},Ge.title),h$5("video",{ref:Xe,title:Ge.title,crossorigin:"anonymous",poster:o$3(Ge.poster),preload:"metadata",controls:"",...Ge.loop?{loop:""}:{}},[...Ge.tracks.map(ut=>h$5("track",{...ut,src:o$3(ut.src)})),h$5("source",{src:o$3(Ge.src),type:Ge.type})])]):null}});const youtube="",b$1=Ge=>typeof Ge=="string"?Ge:`${Ge}px`,L$3=(Ge,Ye=0)=>{const Xe=ref(),at=computed(()=>b$1(unref(Ge.width)||"100%")),ut=ref("auto"),ht=To=>{if(typeof To=="string"){const[$o,xo]=To.split(":"),zo=Number($o)/Number(xo);if(!Number.isNaN(zo))return zo}return typeof To=="number"?To:16/9},Bo=To=>{const $o=unref(Ge.height),xo=ht(unref(Ge.ratio));return $o?b$1($o):`${Number(To)/xo+unref(Ye)}px`},Ao=()=>{Xe.value&&(ut.value=Bo(Xe.value.clientWidth))};return onMounted(()=>{Ao(),isRef(Ye)&&watch(Ye,()=>Ao()),useEventListener("orientationchange",()=>Ao()),useEventListener("resize",()=>Ao())}),{el:Xe,width:at,height:ut}};var $$1=defineComponent({name:"YouTube",props:{id:{type:String,default:""},title:{type:String,default:"A YouTube video"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},autoplay:Boolean,loop:Boolean,showCc:Boolean,showAnnotations:Boolean,start:{type:[String,Number],default:void 0},end:{type:[String,Number],default:void 0},defaultCcLang:{type:String,default:""},uiLang:{type:String,default:""},listType:{type:String,default:""},list:{type:String,default:""},playlist:{type:String,default:""},disableControls:Boolean,disableFullscreen:Boolean,disableKeyboard:Boolean},setup(Ge){const Ye=usePageLang(),{el:Xe,width:at,height:ut}=L$3(Ge),ht=computed(()=>Ge.id?`${Ge.id}?`:Ge.listType==="playlist"&&Ge.list?`?listType=playlist&list=${Ge.list.startsWith("PL")?Ge.list:`PL${Ge.list}`}&`:null),Bo=computed(()=>{const To=new URLSearchParams;return Ge.autoplay&&To.set("autoplay","1"),Ge.loop&&To.set("loop","1"),Ge.showCc&&To.set("cc_load_policy","1"),Ge.showAnnotations&&To.set("iv_load_policy","3"),Ge.start&&To.set("start",Ge.start.toString()),Ge.end&&To.set("end",Ge.end.toString()),To.set("hl",Ge.uiLang||Ye.value),To.set("cc_lang_pref",Ge.defaultCcLang||Ye.value),To.set("color","white"),Ge.disableControls&&To.set("controls","0"),Ge.disableFullscreen&&To.set("fs","0"),Ge.disableKeyboard&&To.set("disablekb","1"),Ge.playlist&&To.set("playlist",Ge.playlist),To.toString()}),Ao=computed(()=>ht.value?`https://www.youtube.com/embed/${ht.value}${Bo.value}`:null);return()=>Ao.value?[h$5("div",{class:"youtube-desc"},h$5("a",{class:"sr-only",href:Ao.value},Ge.title)),h$5("iframe",{ref:Xe,src:Ao.value,title:Ge.title,class:"youtube-iframe",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture",style:{width:at.value,height:ut.value}})]:null}});const backToTop="",a$3=()=>h$5(ct$1,{name:"back-to-top"},()=>[h$5("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),h$5("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);a$3.displayName="BackToTopIcon";var h$4=defineComponent({name:"BackToTop",props:{threshold:{type:Number,default:300}},setup(Ge){const Ye=usePageFrontmatter(),Xe=Mt$1({"/zh/":{backToTop:"返回顶部"},"/ru/":{backToTop:"Вернуться к началу"},"/":{backToTop:"Back to top"}}),at=ref(0),ut=computed(()=>Ye.value.backToTop!==!1&&at.value>Ge.threshold),ht=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return onMounted(()=>{at.value=ht()}),useEventListener("scroll",useDebounceFn(()=>{at.value=ht()},100)),()=>h$5(Transition,{name:"fade"},()=>ut.value?h$5("button",{class:"back-to-top","aria-label":Xe.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"}),at.value=0}},h$5(a$3)):null)}});const srOnly="",clientConfig1=defineClientConfig({enhance:({app:Ge})=>{St$1("FontIcon")||Ge.component("FontIcon",s$2),St$1("AudioPlayer")||Ge.component("AudioPlayer",f$4),St$1("Badge")||Ge.component("Badge",t$2),St$1("BiliBili")||Ge.component("BiliBili",S$6),St$1("CodePen")||Ge.component("CodePen",i$4),St$1("PDF")||Ge.component("PDF",k$7),St$1("StackBlitz")||Ge.component("StackBlitz",S$5),St$1("VideoPlayer")||Ge.component("VideoPlayer",m$2),St$1("YouTube")||Ge.component("YouTube",$$1)},setup:()=>{useStyleTag('@import url("//at.alicdn.com/t/c/font_2410206_s76eeqysx0t.css");',{id:"icon-assets"})},rootComponents:[()=>h$5(h$4,{threshold:300})]});function r$3(Ge,Ye,Xe){var at,ut,ht;Ye===void 0&&(Ye=50),Xe===void 0&&(Xe={});var Bo=(at=Xe.isImmediate)!=null&&at,Ao=(ut=Xe.callback)!=null&&ut,To=Xe.maxWait,$o=Date.now(),xo=[];function zo(){if(To!==void 0){var Mo=Date.now()-$o;if(Mo+Ye>=To)return To-Mo}return Ye}var Lo=function(){var Mo=[].slice.call(arguments),Ro=this;return new Promise(function(Fo,Zo){var No=Bo&&ht===void 0;if(ht!==void 0&&clearTimeout(ht),ht=setTimeout(function(){if(ht=void 0,$o=Date.now(),!Bo){var Ho=Ge.apply(Ro,Mo);Ao&&Ao(Ho),xo.forEach(function(Vo){return(0,Vo.resolve)(Ho)}),xo=[]}},zo()),No){var qo=Ge.apply(Ro,Mo);return Ao&&Ao(qo),Fo(qo)}xo.push({resolve:Fo,reject:Zo})})};return Lo.cancel=function(Mo){ht!==void 0&&clearTimeout(ht),xo.forEach(function(Ro){return(0,Ro.reject)(Mo)}),xo=[]},Lo}const useActiveHeaderLinks=({headerLinkSelector:Ge,headerAnchorSelector:Ye,delay:Xe,offset:at=5})=>{const ut=useRouter(),Bo=r$3(()=>{var Fo,Zo;const Ao=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(Ao-0)<at){updateHash(ut,"");return}const $o=window.innerHeight+Ao,xo=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),zo=Math.abs(xo-$o)<at,Lo=Array.from(document.querySelectorAll(Ge)),Ro=Array.from(document.querySelectorAll(Ye)).filter(No=>Lo.some(qo=>qo.hash===No.hash));for(let No=0;No<Ro.length;No++){const qo=Ro[No],Ho=Ro[No+1],Vo=Ao>=(((Fo=qo.parentElement)==null?void 0:Fo.offsetTop)??0)-at,Wo=!Ho||Ao<(((Zo=Ho.parentElement)==null?void 0:Zo.offsetTop)??0)-at;if(!(Vo&&Wo))continue;const Uo=decodeURIComponent(ut.currentRoute.value.hash),Jo=decodeURIComponent(qo.hash);if(Uo===Jo)return;if(zo){for(let Qo=No+1;Qo<Ro.length;Qo++)if(Uo===decodeURIComponent(Ro[Qo].hash))return}updateHash(ut,Jo);return}},Xe);onMounted(()=>{window.addEventListener("scroll",Bo)}),onBeforeUnmount(()=>{window.removeEventListener("scroll",Bo)})},updateHash=async(Ge,Ye)=>{const{scrollBehavior:Xe}=Ge.options;Ge.options.scrollBehavior=void 0,await Ge.replace({query:Ge.currentRoute.value.query,hash:Ye,force:!0}).finally(()=>Ge.options.scrollBehavior=Xe)},headerLinkSelector=".sidebar-link, .toc-link",headerAnchorSelector=".header-anchor",delay=200,offset=5,clientConfig2=defineClientConfig({setup(){useActiveHeaderLinks({headerLinkSelector,headerAnchorSelector,delay,offset})}}),catalog="";var f$2=defineComponent({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(Ge){const Ye=computed(()=>{const Xe={};return Ge.color&&(Xe.color=Ge.color),Ge.size&&(Xe["font-size"]=Number.isNaN(Number(Ge.size))?Ge.size:`${Ge.size}px`),Object.keys(Xe).length?Xe:null});return()=>Ge.icon?h$5("span",{class:["font-icon icon",`iconfont icon-${Ge.icon}`],style:Ye.value}):null}}),z$2=defineComponent({name:"Catalog",props:{level:{type:Number,default:3},hideIcon:Boolean,titleGetter:{type:Function,default:Ge=>Ge.title},iconGetter:{type:Function,default:Ge=>Ge.icon},orderGetter:{type:Function,default:Ge=>Ge.order||0},shouldIndex:{type:Function,default:Ge=>Ge.index!==!1}},setup(Ge){const Ye=useRoute(),Xe=useRouter(),at=computed(()=>Ye.path.endsWith("/")),ut=()=>{const Bo=Xe.getRoutes(),Ao=[];return Bo.filter(({meta:To,path:$o})=>($o.endsWith(".html")&&!$o.endsWith("/index.html")||$o.endsWith("/"))&&$o!=="/404.html"&&$o!==Ye.path&&$o.startsWith(Ye.path)&&Ge.shouldIndex(To)).map(({path:To,meta:$o})=>{const xo=To.substring(Ye.path.length).split("/").length;return{title:Ge.titleGetter($o),icon:Ge.iconGetter($o),base:To.replace(/\/[^/]+\/?$/,"/"),order:Ge.orderGetter($o),level:To.endsWith("/")?xo-1:xo,path:To}}).filter(({title:To,level:$o})=>$o<=Ge.level||!To).sort((To,$o)=>To.level-$o.level||(To.path.endsWith("/index.html")?-1:$o.path.endsWith("/index.html")?1:To.order===null?$o.order===null?To.title.localeCompare($o.title):$o.order:$o.order===null?To.order:To.order>0?$o.order>0?To.order-$o.order:-1:$o.order<0?To.order-$o.order:1)).forEach(To=>{var $o;const{base:xo,level:zo}=To;switch(zo){case 1:Ao.push(To);break;case 2:{const Lo=Ao.find(Mo=>Mo.path===xo);Lo&&(Lo.children??(Lo.children=[])).push(To);break}default:{const Lo=Ao.find(Mo=>Mo.path===xo.replace(/\/[^/]+\/$/,"/"));if(Lo){const Mo=($o=Lo.children)==null?void 0:$o.find(Ro=>Ro.path===xo);Mo&&(Mo.children??(Mo.children=[])).push(To)}}}}),Ao},ht=computed(()=>ut());return()=>at.value?h$5("div",{class:"catalog-wrapper"},[h$5("h2",{class:"main-title"},"Catalog"),...ht.value.map(({children:Bo=[],icon:Ao,path:To,title:$o},xo)=>[h$5("h3",{id:$o,class:["child-title",{"has-children":Bo.length}]},[h$5("a",{href:`#${$o}`,class:"header-anchor"},"#"),h$5(RouterLink,{class:"catalog-title",to:To},()=>[!Ge.hideIcon&&Ao?h$5(f$2,{icon:Ao}):null,`${xo+1}. ${$o||"Unknown"}`])]),Bo.length?h$5("ul",{class:"child-catalog-wrapper"},Bo.map(({children:zo=[],icon:Lo,path:Mo,title:Ro},Fo)=>h$5("li",{class:"catalog-item"},[h$5("div",{class:["sub-title",{"has-children":zo.length}]},[h$5("a",{href:`#${Ro}`,class:"header-anchor"},"#"),h$5(RouterLink,{class:"catalog-title",to:Mo},()=>[!Ge.hideIcon&&Lo?h$5(f$2,{icon:Lo}):null,`${xo+1}.${Fo+1} ${Ro||"Unknown"}`])]),zo.length?h$5("div",{class:"sub-catalog-wrapper"},zo.map(({icon:Zo,path:No,title:qo},Ho)=>h$5(RouterLink,{class:"sub-catalog-item",to:No},()=>[!Ge.hideIcon&&Zo?h$5(f$2,{icon:Zo}):null,`${xo+1}.${Fo+1}.${Ho+1} ${qo||"Unknown"}`]))):null]))):null])]):null}}),n$2=defineClientConfig({enhance:({app:Ge})=>{St$1("AutoCatalog",Ge)||Ge.component("AutoCatalog",z$2)}});const vars$1="",externalLinkIcon="",svg=h$5("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[h$5("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),h$5("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),ExternalLinkIcon=defineComponent({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(Ge){const Ye=useRouteLocale(),Xe=computed(()=>Ge.locales[Ye.value]??{openInNewWindow:"open in new window"});return()=>h$5("span",[svg,h$5("span",{class:"external-link-icon-sr-only"},Xe.value.openInNewWindow)])}}),locales={},clientConfig4=defineClientConfig({enhance({app:Ge}){Ge.component("ExternalLinkIcon",h$5(ExternalLinkIcon,{locales}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const nprogress$1={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:Ge=>{const Ye=nprogress$1.isStarted();Ge=clamp(Ge,nprogress$1.settings.minimum,1),nprogress$1.status=Ge===1?null:Ge;const Xe=nprogress$1.render(!Ye),at=Xe.querySelector(nprogress$1.settings.barSelector),ut=nprogress$1.settings.speed,ht=nprogress$1.settings.easing;return Xe.offsetWidth,queue(Bo=>{css(at,{transform:"translate3d("+toBarPerc(Ge)+"%,0,0)",transition:"all "+ut+"ms "+ht}),Ge===1?(css(Xe,{transition:"none",opacity:"1"}),Xe.offsetWidth,setTimeout(function(){css(Xe,{transition:"all "+ut+"ms linear",opacity:"0"}),setTimeout(function(){nprogress$1.remove(),Bo()},ut)},ut)):setTimeout(()=>Bo(),ut)}),nprogress$1},isStarted:()=>typeof nprogress$1.status=="number",start:()=>{nprogress$1.status||nprogress$1.set(0);const Ge=()=>{setTimeout(()=>{nprogress$1.status&&(nprogress$1.trickle(),Ge())},nprogress$1.settings.trickleSpeed)};return nprogress$1.settings.trickle&&Ge(),nprogress$1},done:Ge=>!Ge&&!nprogress$1.status?nprogress$1:nprogress$1.inc(.3+.5*Math.random()).set(1),inc:Ge=>{let Ye=nprogress$1.status;return Ye?(typeof Ge!="number"&&(Ge=(1-Ye)*clamp(Math.random()*Ye,.1,.95)),Ye=clamp(Ye+Ge,0,.994),nprogress$1.set(Ye)):nprogress$1.start()},trickle:()=>nprogress$1.inc(Math.random()*nprogress$1.settings.trickleRate),render:Ge=>{if(nprogress$1.isRendered())return document.getElementById("nprogress");addClass(document.documentElement,"nprogress-busy");const Ye=document.createElement("div");Ye.id="nprogress",Ye.innerHTML=nprogress$1.settings.template;const Xe=Ye.querySelector(nprogress$1.settings.barSelector),at=Ge?"-100":toBarPerc(nprogress$1.status||0),ut=document.querySelector(nprogress$1.settings.parent);return css(Xe,{transition:"all 0 linear",transform:"translate3d("+at+"%,0,0)"}),ut!==document.body&&addClass(ut,"nprogress-custom-parent"),ut==null||ut.appendChild(Ye),Ye},remove:()=>{removeClass(document.documentElement,"nprogress-busy"),removeClass(document.querySelector(nprogress$1.settings.parent),"nprogress-custom-parent");const Ge=document.getElementById("nprogress");Ge&&removeElement(Ge)},isRendered:()=>!!document.getElementById("nprogress")},clamp=(Ge,Ye,Xe)=>Ge<Ye?Ye:Ge>Xe?Xe:Ge,toBarPerc=Ge=>(-1+Ge)*100,queue=function(){const Ge=[];function Ye(){const Xe=Ge.shift();Xe&&Xe(Ye)}return function(Xe){Ge.push(Xe),Ge.length===1&&Ye()}}(),css=function(){const Ge=["Webkit","O","Moz","ms"],Ye={};function Xe(Bo){return Bo.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(Ao,To){return To.toUpperCase()})}function at(Bo){const Ao=document.body.style;if(Bo in Ao)return Bo;let To=Ge.length;const $o=Bo.charAt(0).toUpperCase()+Bo.slice(1);let xo;for(;To--;)if(xo=Ge[To]+$o,xo in Ao)return xo;return Bo}function ut(Bo){return Bo=Xe(Bo),Ye[Bo]||(Ye[Bo]=at(Bo))}function ht(Bo,Ao,To){Ao=ut(Ao),Bo.style[Ao]=To}return function(Bo,Ao){for(const To in Ao){const $o=Ao[To];$o!==void 0&&Object.prototype.hasOwnProperty.call(Ao,To)&&ht(Bo,To,$o)}}}(),hasClass=(Ge,Ye)=>(typeof Ge=="string"?Ge:classList(Ge)).indexOf(" "+Ye+" ")>=0,addClass=(Ge,Ye)=>{const Xe=classList(Ge),at=Xe+Ye;hasClass(Xe,Ye)||(Ge.className=at.substring(1))},removeClass=(Ge,Ye)=>{const Xe=classList(Ge);if(!hasClass(Ge,Ye))return;const at=Xe.replace(" "+Ye+" "," ");Ge.className=at.substring(1,at.length-1)},classList=Ge=>(" "+(Ge.className||"")+" ").replace(/\s+/gi," "),removeElement=Ge=>{Ge&&Ge.parentNode&&Ge.parentNode.removeChild(Ge)},vars="",nprogress="",useNprogress=()=>{onMounted(()=>{const Ge=useRouter(),Ye=new Set;Ye.add(Ge.currentRoute.value.path),Ge.beforeEach(Xe=>{Ye.has(Xe.path)||nprogress$1.start()}),Ge.afterEach(Xe=>{Ye.add(Xe.path),nprogress$1.done()})})},clientConfig5=defineClientConfig({setup(){useNprogress()}}),clientConfig6=defineClientConfig({enhance({app:Ge}){const Ye=useThemeData(),Xe=Ge._context.provides[routeLocaleSymbol],at=computed(()=>resolveThemeLocaleData(Ye.value,Xe.value));Ge.provide(themeLocaleDataSymbol,at),Object.defineProperties(Ge.config.globalProperties,{$theme:{get(){return Ye.value}},$themeLocale:{get(){return at.value}}})}}),giscus="",e$2={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/dark.css",repo:"vuepress-theme-hope/giscus-discussions",repoId:"R_kgDOG_Pt2A",category:"Announcements",categoryId:"DIC_kwDOG_Pt2M4COD69"},k$6=Boolean(e$2.categoryId),i$3=["de","gsw","en","es","fr","id","it","ja","ko","pl","ro","ru","tr","vi","zh-CN","zh-TW"];var P$4=defineComponent({name:"GiscusComment",props:{darkmode:Boolean},setup(Ge){const Ye=usePageFrontmatter(),Xe=useRoute(),at=ref(!1),ut=computed(()=>{const Ao=usePageLang().value;if(i$3.includes(Ao))return Ao;const To=Ao.split("-")[0];return i$3.includes(To)?To:"en"}),ht=computed(()=>{if(!k$6)return!1;const Ao=e$2.comment!==!1,To=Ye.value.comment;return Boolean(To)||Ao!==!1&&To!==!1}),Bo=computed(()=>({repo:e$2.repo,repoId:e$2.repoId,category:e$2.category,categoryId:e$2.categoryId,lang:ut.value,theme:Ge.darkmode?e$2.darkTheme:e$2.lightTheme,mapping:e$2.mapping||"pathname",term:withBase(Xe.path),inputPosition:e$2.inputPosition||"top",reactionsEnabled:e$2.reactionsEnabled!==!1?"1":"0",strict:e$2.strict!==!1?"1":"0",loading:e$2.lazyLoading!==!1?"lazy":"eager",emitMetadata:"0"}));return onMounted(async()=>{await __vitePreload(()=>import("./giscus-cb5b3b13.js"),[]),at.value=!0}),()=>h$5("div",{class:["giscus-wrapper",{"input-top":e$2.inputPosition!=="bottom"}],style:{display:ht.value?"block":"none"}},at.value?h$5("giscus-widget",Bo.value):h$5("div",{style:"text-align:center"},"Loading..."))}});const l$3={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/dark.css",repo:"vuepress-theme-hope/giscus-discussions",repoId:"R_kgDOG_Pt2A",category:"Announcements",categoryId:"DIC_kwDOG_Pt2M4COD69"}.comment!==!1;var s$1=defineClientConfig({enhance:({app:Ge})=>{const Ye=defineComponent({name:"CommentService",props:{darkmode:Boolean},setup(Xe){const at=usePageFrontmatter(),ut=computed(()=>at.value.comment||l$3&&at.value.comment!==!1);return()=>h$5(P$4,{darkmode:Xe.darkmode,style:{display:ut.value?"block":"none"}})}});Ge.component("CommentService",Ye)}});const message="",balloon="",button="",O$3=800,A$3=2e3,L$2={"/zh/":{copy:"复制代码",copied:"已复制",hint:"复制成功"},"/ru/":{copy:"Скопировать код",copied:"Скопировано",hint:"Скопировано успешно"},"/":{copy:"Copy code",copied:"Copied",hint:"Copied successfully"}},d$3='.theme-hope-content div[class*="language-"] pre',g$3=!1,S$4=async Ge=>{try{return navigator.clipboard.writeText(Ge)}catch{const Ye=document.createElement("textarea"),Xe=document.activeElement;Ye.value=Ge,Ye.setAttribute("readonly",""),Ye.style.contain="strict",Ye.style.position="absolute",Ye.style.left="-9999px",Ye.style.fontSize="12pt";const at=document.getSelection(),ut=at?at.rangeCount>0&&at.getRangeAt(0):null;document.body.appendChild(Ye),Ye.select(),Ye.selectionStart=0,Ye.selectionEnd=Ge.length,document.execCommand("copy"),document.body.removeChild(Ye),ut&&(at.removeAllRanges(),at.addRange(ut)),Xe&&Xe.focus()}},_$4='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg>',y$3=()=>navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(navigator.userAgent):!1,p$3=new Map,w$4=()=>{const Ge=useRoute(),Ye=Mt$1(L$2);let Xe;const at=Bo=>{if(!Bo.hasAttribute("copy-code-registered")){const Ao=document.createElement("button");Ao.classList.add("copy-code-button"),Ao.innerHTML='<div class="copy-icon" />',Ao.setAttribute("aria-label",Ye.value.copy),Ao.setAttribute("data-copied",Ye.value.copied),Ao.setAttribute("data-balloon-pos","left"),Bo.parentElement&&Bo.parentElement.insertBefore(Ao,Bo),Bo.setAttribute("copy-code-registered","")}},ut=()=>{setTimeout(()=>{document.querySelectorAll(d$3).forEach(at)},O$3)},ht=(Bo,Ao,To)=>{let{innerText:$o=""}=Ao;/language-(shellscript|shell|bash|sh|zsh)/.test(Bo.classList.toString())&&($o=$o.replace(/^ *(\$|>) /gm,"")),S$4($o).then(()=>{To.classList.add("copied"),clearTimeout(p$3.get(To));const xo=setTimeout(()=>{To.classList.remove("copied"),To.blur(),p$3.delete(To)},2e3);p$3.set(To,xo),Xe.pop(`${_$4}<span>${Ye.value.hint} 🎉</span>`,A$3)})};onMounted(()=>{Xe=new kt$1,(!y$3()||g$3)&&ut(),window.addEventListener("click",Bo=>{const Ao=Bo.target;if(Ao.matches('div[class*="language-"] > button.copy')){const To=Ao.parentElement,$o=Ao.nextElementSibling;$o&&ht(To,$o,Ao)}else if(Ao.matches('div[class*="language-"] div.copy-icon')){const To=Ao.parentElement,$o=To.parentElement,xo=To.nextElementSibling;xo&&ht($o,xo,To)}}),watch(()=>Ge.path,()=>{(!y$3()||g$3)&&ut()})})};var P$3=defineClientConfig({setup:()=>{w$4()}});const E$3=()=>{const Ge=usePageFrontmatter(),Ye=Mt$1({"/zh/":{author:"著作权归:author所有",license:"基于:license协议",link:"原文链接：:link"},"/ru/":{author:"Авторские права :author",license:"Лицензия :license",link:":link"},"/":{author:"Copyright by :author",license:"License under :license",link:":link"}}),Xe=usePageData();useRoute();const at=computed(()=>Boolean(Ge.value.copy)||Ge.value.copy!==!1&&!0),ut=computed(()=>{const To=Ge.value.copy;return at.value&&typeof To=="object"&&"disableCopy"in To?To.disableCopy:!1}),ht=computed(()=>{const To=Ge.value.copy;return at.value&&typeof To=="object"&&"disableSelection"in To?To.disableSelection:!1}),Bo=()=>{const{author:To="",license:$o=""}=Xe.value.copyright,{author:xo,license:zo,link:Lo}=Ye.value;return[To?xo.replace(":author",To):"",$o?zo.replace(":license",$o):"",Lo.replace(":link",window.location.href)].filter(Mo=>Mo).join(`
`)},Ao=To=>{const $o=getSelection();if($o){const xo=$o.getRangeAt(0);if(at.value){if(ut.value){To.preventDefault();return}if(xo.toString().length>=100){To.preventDefault();const zo=Bo(),Lo=document.createElement("div");Lo.appendChild($o.getRangeAt(0).cloneContents()),To.clipboardData&&(To.clipboardData.setData("text/html",`${Lo.innerHTML}<hr><div class="copyright">${zo.replace(/\\n/g,"<br>")}</div>`),To.clipboardData.setData("text/plain",`${$o.getRangeAt(0).cloneContents().textContent||""}
------
${zo}`))}}}};onMounted(()=>{const To=document.querySelector("#app");useEventListener(To,"copy",Ao),watchEffect(()=>{To.style.userSelect=ht.value?"none":"auto"})})};var A$2=defineClientConfig({setup:()=>{E$3()}});const chart="",LoadingIcon$1=()=>h$5(ct$1,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(Ge=>h$5("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$5("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:Ge}),h$5("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:Ge})]))),parseChartConfig=(config,type)=>{if(type==="json")return JSON.parse(config);const exports={},module={exports};return eval(config),module.exports};var ChartJS=defineComponent({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(Ge){const Ye=ref(),Xe=ref(),at=ref(!0);return onMounted(()=>{Promise.all([__vitePreload(()=>import("./auto-bcb4bc66.js"),[]),new Promise(ut=>setTimeout(ut,800))]).then(([{default:ut}])=>{ut.defaults.maintainAspectRatio=!1;const ht=parseChartConfig(Lt(Ge.config),Ge.type),Bo=Xe.value.getContext("2d");new ut(Bo,ht),at.value=!1})}),()=>[Ge.title?h$5("div",{class:"chart-title"},decodeURIComponent(Ge.title)):null,at.value?h$5("div",{class:"chart-loading-wrapper"},h$5(LoadingIcon$1)):null,h$5("div",{ref:Ye,class:"chart-wrapper",id:Ge.id,style:{display:at.value?"none":"block"}},h$5("canvas",{ref:Xe,height:400}))]}});const codeTabs="",o$2=useStorage("VUEPRESS_CODE_TAB_STORE",{});var S$3=defineComponent({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(Ge,{slots:Ye}){const Xe=ref(Ge.active),at=ref([]),ut=()=>{if(Ge.tabId){const{title:$o,id:xo=$o}=Ge.data[Xe.value];o$2.value[Ge.tabId]=xo}},ht=($o=Xe.value)=>{Xe.value=$o<at.value.length-1?$o+1:0,at.value[Xe.value].focus()},Bo=($o=Xe.value)=>{Xe.value=$o>0?$o-1:at.value.length-1,at.value[Xe.value].focus()},Ao=($o,xo)=>{if($o.key===" "||$o.key==="Enter"?($o.preventDefault(),Xe.value=xo):$o.key==="ArrowRight"?($o.preventDefault(),ht()):$o.key==="ArrowLeft"&&($o.preventDefault(),Bo()),Ge.tabId){const{title:zo,id:Lo=zo}=Ge.data[Xe.value];o$2.value[Ge.tabId]=Lo}},To=()=>{if(Ge.tabId){const $o=Ge.data.findIndex(({title:xo,id:zo=xo})=>o$2.value[Ge.tabId]===zo);if($o!==-1)return $o}return Ge.active};return onMounted(()=>{Xe.value=To(),watch(()=>o$2.value[Ge.tabId],($o,xo)=>{if(Ge.tabId&&$o!==xo){const zo=Ge.data.findIndex(({title:Lo,id:Mo=Lo})=>Mo===$o);zo!==-1&&(Xe.value=zo)}})}),()=>Ge.data.length?h$5("div",{class:"code-tabs"},[h$5("div",{class:"code-tabs-nav",role:"tablist"},Ge.data.map(({title:$o},xo)=>{const zo=xo===Xe.value;return h$5("button",{ref:Lo=>{Lo&&(at.value[xo]=Lo)},class:["code-tabs-nav-tab",{active:zo}],role:"tab","aria-controls":`codetab-${Ge.id}-${xo}`,"aria-selected":zo,onClick:()=>{Xe.value=xo,ut()},onKeydown:Lo=>Ao(Lo,xo)},$o)})),Ge.data.map(({title:$o,id:xo=$o},zo)=>{var Lo;const Mo=zo===Xe.value;return h$5("div",{class:["code-tab",{active:Mo}],id:`codetab-${Ge.id}-${zo}`,role:"tabpanel","aria-expanded":Mo},(Lo=Ye[`tab${zo}`])==null?void 0:Lo.call(Ye,{title:$o,value:xo,isActive:Mo}))})]):null}});const index$2="",codeDemo="",M$2=()=>h$5(ct$1,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(Ge=>h$5("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$5("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:Ge}),h$5("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:Ge})]))),O$2='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',N$1='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="228.516" height="200"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',L$1={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},C$3={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},A$1=(Ge,Ye,Xe)=>{const at=document.createElement(Ge);return Ye&&Object.keys(Ye).forEach(ut=>{if(ut.indexOf("data"))at[ut]=Ye[ut];else{const ht=ut.replace("data","");at.dataset[ht]=Ye[ut]}}),Xe&&Xe.forEach(ut=>{at.appendChild(ut)}),at},w$3=Ge=>({...L$1,...Ge,jsLib:Array.from(new Set([...L$1.jsLib||[],...Ge.jsLib||[]])),cssLib:Array.from(new Set([...L$1.cssLib||[],...Ge.cssLib||[]]))}),v$2=(Ge,Ye)=>{if(Ge[Ye]!==void 0)return Ge[Ye];const Xe=new Promise(at=>{var ut;const ht=document.createElement("script");ht.src=Ye,(ut=document.querySelector("body"))==null||ut.appendChild(ht),ht.onload=()=>{at()}});return Ge[Ye]=Xe,Xe},k$5=(Ge,Ye)=>{if(Ye.css&&Array.from(Ge.childNodes).every(Xe=>Xe.nodeName!=="STYLE")){const Xe=A$1("style",{innerHTML:Ye.css});Ge.appendChild(Xe)}},D$1=(Ge,Ye,Xe)=>{const at=Xe.getScript();if(at&&Array.from(Ye.childNodes).every(ut=>ut.nodeName!=="SCRIPT")){const ut=document.createElement("script");ut.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${Ge} .code-demo-container').shadowRoot;
${at}}`)),Ye.appendChild(ut)}},R$1=Ge=>{const Ye=Object.keys(Ge),Xe={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(at=>{const ut=Ye.filter(ht=>C$3[at].types.includes(ht));if(ut.length){const ht=ut[0];Xe[at]=[Ge[ht].replace(/^\n|\n$/g,""),C$3[at].map[ht]||ht]}}),Xe.isLegal=(!Xe.html.length||Xe.html[1]==="none")&&(!Xe.js.length||Xe.js[1]==="none")&&(!Xe.css.length||Xe.css[1]==="none"),Xe},x$1=Ge=>Ge.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),_$3=Ge=>`<div id="app">
${x$1(Ge)}
</div>`,B$1=Ge=>`${Ge.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,V$1=Ge=>Ge.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),q$1=Ge=>`(function(exports){var module={};module.exports=exports;${Ge};return module.exports.__esModule?module.exports.default:module.exports;})({})`,z$1=(Ge,Ye)=>{const Xe=w$3(Ye),at=Ge.js[0]||"";return{...Xe,html:x$1(Ge.html[0]||""),js:at,css:Ge.css[0]||"",isLegal:Ge.isLegal,getScript:()=>{var ut;return Xe.useBabel?((ut=window.Babel.transform(at,{presets:["es2015"]}))==null?void 0:ut.code)||"":at}}},P$2=(Ge,Ye)=>{const Xe=w$3(Ye),at=Ge.html[0]||"",ut=/<template>([\s\S]+)<\/template>/u.exec(at),ht=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(at),Bo=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(at),Ao=ut?ut[1].replace(/^\n|\n$/g,""):"",[To="",$o=""]=ht?[ht[4].replace(/^\n|\n$/g,""),ht[3]]:[],[xo="",zo=""]=Bo?[Bo[4].replace(/^\n|\n$/g,""),Bo[3]]:[],Lo=$o===""&&(zo===""||zo==="css");return{...Xe,html:_$3(Ao),js:V$1(To),css:xo,isLegal:Lo,jsLib:[Xe.vue,...Xe.jsLib],getScript:()=>{var Mo,Ro;const Fo=Ye.useBabel?((Ro=(Mo=window.Babel)==null?void 0:Mo.transform(To,{presets:["es2015"]}))==null?void 0:Ro.code)||"":To.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${q$1(Fo)};appOptions.template=\`${Ao.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},H$2=(Ge,Ye)=>{const Xe=w$3(Ye);return{...Xe,html:_$3(""),js:B$1(Ge.js[0]||""),css:Ge.css[0]||(Ge.js[0]?Ge.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:Ge.isLegal,jsLib:[Xe.react,Xe.reactDOM,...Xe.jsLib],jsx:!0,getScript:()=>{var at,ut;const ht=((ut=(at=window.Babel)==null?void 0:at.transform(Ge.js[0]||"",{presets:["es2015","react"]}))==null?void 0:ut.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${q$1(ht)}))`}}},h$3={},I$2=Ge=>Promise.all([v$2(h$3,Ge.babel),v$2(h$3,Ge.react),v$2(h$3,Ge.reactDOM)]),J$1=Ge=>{const Ye=[v$2(h$3,Ge.vue)];return Ge.useBabel&&Ye.push(v$2(h$3,Ge.babel)),Promise.all(Ye)},Q$1=Ge=>Ge.useBabel?v$2(h$3,Ge.babel):Promise.resolve();var F$2=defineComponent({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},setup(Ge,{slots:Ye}){const Xe=ref(!1),at=ref(),ut=ref(),ht=ref("0"),Bo=ref(!1),Ao=computed(()=>JSON.parse(Ge.config?Lt(Ge.config):"{}")),To=computed(()=>{const Mo=JSON.parse(Lt(Ge.code));return R$1(Mo)}),$o=computed(()=>Ge.type==="react"?H$2(To.value,Ao.value):Ge.type==="vue"?P$2(To.value,Ao.value):z$1(To.value,Ao.value)),xo=computed(()=>$o.value.isLegal),zo=(Mo=!1)=>{const Ro=at.value.attachShadow({mode:"open"}),Fo=document.createElement("div");Fo.classList.add("code-demo-app"),Ro.appendChild(Fo),xo.value?(Mo&&(Fo.innerHTML=$o.value.html),k$5(Ro,$o.value),D$1(Ge.id,Ro,$o.value),ht.value="0"):ht.value="auto",Bo.value=!0},Lo=()=>{switch(Ge.type){case"react":return I$2($o.value).then(()=>zo());case"vue":return J$1($o.value).then(()=>zo());default:return Q$1($o.value).then(()=>zo(!0))}};return onMounted(()=>{setTimeout(()=>{Lo()},800)}),()=>{var Mo;return h$5("div",{class:"code-demo-wrapper",id:Ge.id},[Bo.value?null:h$5("div",{class:"loading"},h$5(M$2)),h$5("div",{class:"code-demo-header"},[$o.value.isLegal?h$5("button",{class:["toggle-button",Xe.value?"down":"right"],onClick:()=>{ht.value=Xe.value?"0":`${ut.value.clientHeight+13.8}px`,Xe.value=!Xe.value}}):null,Ge.title?h$5("span",{class:"title"},decodeURIComponent(Ge.title)):null,$o.value.isLegal&&$o.value.jsfiddle!==!1?h$5("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[h$5("input",{type:"hidden",name:"html",value:$o.value.html}),h$5("input",{type:"hidden",name:"js",value:$o.value.js}),h$5("input",{type:"hidden",name:"css",value:$o.value.css}),h$5("input",{type:"hidden",name:"wrap",value:"1"}),h$5("input",{type:"hidden",name:"panel_js",value:"3"}),h$5("input",{type:"hidden",name:"resources",value:[...$o.value.cssLib,...$o.value.jsLib].join(",")}),h$5("button",{type:"submit",class:"jsfiddle-button",innerHTML:N$1,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!$o.value.isLegal||$o.value.codepen!==!1?h$5("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[h$5("input",{type:"hidden",name:"data",value:JSON.stringify({html:$o.value.html,js:$o.value.js,css:$o.value.css,js_external:$o.value.jsLib.join(";"),css_external:$o.value.cssLib.join(";"),layout:$o.value.codepenLayout,html_pre_processor:To.value?To.value.html[1]:"none",js_pre_processor:To.value?To.value.js[1]:$o.value.jsx?"babel":"none",css_pre_processor:To.value?To.value.css[1]:"none",editors:$o.value.codepenEditors})}),h$5("button",{type:"submit",innerHTML:O$2,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),h$5("div",{ref:at,class:"code-demo-container",style:{display:xo.value&&Bo.value?"block":"none"}}),h$5("div",{class:"code-demo-code-wrapper",style:{height:ht.value}},h$5("div",{ref:ut,class:"code-demo-codes"},(Mo=Ye.default)==null?void 0:Mo.call(Ye)))])}}});const echarts="",LoadingIcon=()=>h$5(ct$1,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(Ge=>h$5("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$5("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:Ge}),h$5("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:Ge})]))),parseEChartsConfig=(config,type)=>{if(type==="js"){const exports={},module={exports};return eval(config),module.exports}return JSON.parse(config)};var ECharts=defineComponent({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(Ge){const Ye=ref();let Xe;const at=ref(!0);return onMounted(()=>{Promise.all([__vitePreload(()=>import("./index-63dde3cb.js"),[]),new Promise(ut=>setTimeout(ut,800))]).then(([ut])=>{const ht=parseEChartsConfig(Lt(Ge.config),Ge.type);Xe=ut.init(Ye.value),Xe.showLoading(),Xe.setOption(ht),Xe.hideLoading(),at.value=!1}),useEventListener("resize",useDebounceFn(()=>Xe==null?void 0:Xe.resize(),100))}),onBeforeUnmount(()=>{Xe==null||Xe.dispose()}),()=>[Ge.title?h$5("div",{class:"echarts-title"},decodeURIComponent(Ge.title)):null,at.value?h$5("div",{class:"echarts-loading-wrapper"},h$5(LoadingIcon)):null,h$5("div",{ref:Ye,class:"echarts-wrapper",id:Ge.id})]}});const figure="",flowchart="",y$2=()=>h$5(ct$1,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(Ge=>h$5("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$5("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:Ge}),h$5("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:Ge})])));var a$2={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},F$1={...a$2,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},C$2={...a$2,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"}}},g$2={...a$2,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}},p$2={ant:F$1,vue:g$2,pie:C$2},k$4=defineComponent({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(Ge){let Ye;const Xe=ref(),at=ref(!0),ut=ref(1),ht=computed(()=>p$2[Ge.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${Ge.preset}`),p$2.vue)),Bo=Ao=>Ao<419?.8:Ao>1280?1:.9;return onMounted(()=>{Promise.all([__vitePreload(()=>import("./flowchart.parse-0007e96c.js").then(Ao=>Ao.f),[]),new Promise(Ao=>setTimeout(Ao,800))]).then(([{default:Ao}])=>{Ye=Ao(Lt(Ge.code)),ut.value=Bo(window.innerWidth),at.value=!1,Ye.drawSVG(Ge.id,{...ht.value,scale:ut.value}),useEventListener("resize",useDebounceFn(()=>{const To=Bo(window.innerWidth);ut.value!==To&&(ut.value=To,Ye.drawSVG(Ge.id,{...ht.value,scale:To}))},100))})}),()=>[at.value?h$5("div",{class:"flowchart-loading-wrapper"},h$5(y$2)):null,h$5("div",{ref:Xe,class:["flowchart-wrapper",Ge.preset],id:Ge.id,style:{display:at.value?"none":"block"}})]}});const footnote="",imageMark="",mermaid="",M$1=()=>h$5(ct$1,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(Ge=>h$5("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$5("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:Ge}),h$5("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:Ge})]))),k$3=Ge=>({dark:Ge,background:Ge?"#1e1e1e":"#fff",primaryColor:Ge?"#389d70":"#4abf8a",primaryBorderColor:Ge?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:Ge?"#fff":"#000",secondaryTextColor:Ge?"#ddd":"#333",tertiaryColor:Ge?"#282828":"#efeef4",tertiaryBorderColor:Ge?"#bbb":"#242424",tertiaryTextColor:Ge?"#ddd":"#333",noteBkgColor:Ge?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:Ge?"#f6d365":"#333",lineColor:Ge?"#d3d3d3":"#333",textColor:Ge?"#fff":"#242424",mainBkg:Ge?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:Ge?"#389d70":"#4abf8a",nodeTextColor:Ge?"#fff":"#242424",signalTextColor:Ge?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:Ge?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var w$2=defineComponent({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(Ge){const Ye=ref(""),Xe=ref(),at=ref(!1);let ut=null;return onMounted(()=>{const ht=document.querySelector("html"),Bo=Lt(Ge.code),Ao=()=>ht.classList.contains("dark")||ht.getAttribute("data-theme")==="dark";at.value=Ao(),Promise.all([__vitePreload(()=>import("./mermaid.esm.min-bc08675d.js"),[]),__vitePreload(()=>import("./mermaid-mindmap.esm.min-b605fa16.js"),["assets/mermaid-mindmap.esm.min-b605fa16.js","assets/chunk-E44UNXTX-0634d18b.js","assets/framework-838e190a.js"]),new Promise(To=>setTimeout(To,800))]).then(async([{default:To},{default:$o}])=>{try{await To.registerExternalDiagrams([$o])}catch{}const xo=async()=>{const zo=document.createElement("div");zo.style.position="relative",zo.style.top="-9999px";const Lo=Mo=>{Ye.value=Mo,document.body.removeChild(zo)};To.initialize({theme:"base",themeVariables:k$3(at.value),flowchart:{useMaxWidth:!1},sequence:{useMaxWidth:!1},journey:{useMaxWidth:!1},gantt:{useMaxWidth:!1},er:{useMaxWidth:!1},pie:{useMaxWidth:!1},startOnLoad:!1}),Ye.value="",document.body.appendChild(zo),await nextTick(),await To.renderAsync(Ge.id,Bo,Lo,zo)};await xo(),ut=new MutationObserver(()=>{at.value=Ao()}),ut.observe(ht,{attributeFilter:["class","data-theme"],attributes:!0}),watch(at,xo)})}),onBeforeUnmount(()=>{ut==null||ut.disconnect()}),()=>h$5("div",{ref:Xe,class:["mermaid-wrapper",{loading:!Ye.value}]},Ye.value?h$5("div",{class:"content",innerHTML:Ye.value}):h$5(M$1))}});const o$1=()=>__vitePreload(()=>import("./highlight.esm-a794bb63.js"),[]),t$1=()=>__vitePreload(()=>import("./markdown.esm-d92a2fc9.js"),[]),e$1=()=>__vitePreload(()=>import("./math.esm-70a288c8.js"),[]),r$2=()=>__vitePreload(()=>import("./notes.esm-224f94d9.js"),[]),a$1=()=>__vitePreload(()=>import("./reveal.esm-e5069ce0.js"),[]),i$2=()=>__vitePreload(()=>import("./search.esm-2c3fba7d.js"),[]),c$1=()=>__vitePreload(()=>import("./zoom.esm-b83b91d0.js"),[]),useReveal=()=>[a$1(),t$1(),o$1(),e$1(),i$2(),r$2(),c$1()],index$1="",leagueGothic="",sourceSansPro="",k$2=()=>h$5(ct$1,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(Ge=>h$5("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$5("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:Ge}),h$5("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:Ge})])));var S$2=defineComponent({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(Ge){const Ye=usePageFrontmatter(),Xe=ref(""),at=ref(!1),ut=ref(),ht=ref();let Bo;return onMounted(()=>{if(ht.value){Xe.value=Lt(Ge.code),ht.value.setAttribute("id",Ge.id),ht.value.setAttribute("data-theme",Ge.theme);const Ao=[new Promise(To=>setTimeout(To,800)),...useReveal()];Promise.all(Ao).then(([,To,...$o])=>{Bo=new To.default(ht.value,{plugins:$o.map(xo=>xo.default)}),Bo.initialize({backgroundTransition:"slide",hash:Ye.value.layout==="Slide",mouseWheel:Ye.value.layout==="Slide",transition:"slide",slideNumber:!0,...Ye.value.reveal||{},embedded:Ye.value.layout!=="Slide"}).then(()=>{at.value=!1,Bo.configure({backgroundTransition:"slide"})})})}}),onBeforeUnmount(()=>{Bo==null||Bo.destroy()}),()=>h$5("div",{ref:ut,class:{"md-enhance-presentation":!0,loading:at.value}},[at.value?h$5(k$2):null,h$5("div",{ref:ht,class:["reveal","reveal-viewport"]},h$5("div",{class:"slides",style:{display:at.value?"none":"block"},innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${Xe.value}<\/script></section>`}))])}});const playground="",n$1='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';var r$1=defineComponent({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(Ge){return()=>[h$5("div",{class:"playground-wrapper"},[h$5("div",{class:"title-wrapper"},[Ge.title?h$5("div",{class:"title"},decodeURIComponent(Ge.title)):null,h$5("div",{class:"actions"},[h$5("a",{class:"action",href:decodeURIComponent(Ge.link),target:"_blank",innerHTML:n$1})])]),h$5("div",{class:"preview-container"},h$5("iframe",{class:"iframe-preview",src:decodeURIComponent(Ge.link)}))])]}});const tabs="",v$1=useStorage("VUEPRESS_TAB_STORE",{});var S$1=defineComponent({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(Ge,{slots:Ye}){const Xe=ref(Ge.active),at=ref([]),ut=()=>{if(Ge.tabId){const{title:$o,id:xo=$o}=Ge.data[Xe.value];v$1.value[Ge.tabId]=xo}},ht=($o=Xe.value)=>{Xe.value=$o<at.value.length-1?$o+1:0,at.value[Xe.value].focus()},Bo=($o=Xe.value)=>{Xe.value=$o>0?$o-1:at.value.length-1,at.value[Xe.value].focus()},Ao=($o,xo)=>{$o.key===" "||$o.key==="Enter"?($o.preventDefault(),Xe.value=xo):$o.key==="ArrowRight"?($o.preventDefault(),ht()):$o.key==="ArrowLeft"&&($o.preventDefault(),Bo()),ut()},To=()=>{if(Ge.tabId){const $o=Ge.data.findIndex(({title:xo,id:zo=xo})=>v$1.value[Ge.tabId]===zo);if($o!==-1)return $o}return Ge.active};return onMounted(()=>{Xe.value=To(),watch(()=>v$1.value[Ge.tabId],($o,xo)=>{if(Ge.tabId&&$o!==xo){const zo=Ge.data.findIndex(({title:Lo,id:Mo=Lo})=>Mo===$o);zo!==-1&&(Xe.value=zo)}})}),()=>Ge.data.length?h$5("div",{class:"tab-list"},[h$5("div",{class:"tab-list-nav",role:"tablist"},Ge.data.map(({title:$o},xo)=>{const zo=xo===Xe.value;return h$5("button",{ref:Lo=>{Lo&&(at.value[xo]=Lo)},class:["tab-list-nav-item",{active:zo}],role:"tab","aria-controls":`tab-${Ge.id}-${xo}`,"aria-selected":zo,onClick:()=>{Xe.value=xo,ut()},onKeydown:Lo=>Ao(Lo,xo)},$o)})),Ge.data.map(({title:$o,id:xo=$o},zo)=>{var Lo;const Mo=zo===Xe.value;return h$5("div",{class:["tab-item",{active:Mo}],id:`tab-${Ge.id}-${zo}`,role:"tabpanel","aria-expanded":Mo},(Lo=Ye[`tab${zo}`])==null?void 0:Lo.call(Ye,{title:$o,value:xo,isActive:Mo}))})]):null}});const tasklist="",mathjax="",clientConfig10=defineClientConfig({enhance:({app:Ge})=>{Ge.component("ChartJS",ChartJS),Ge.component("CodeTabs",S$3),Ge.component("CodeDemo",F$2),Ge.component("ECharts",ECharts),Ge.component("FlowChart",k$4),Ge.component("Mermaid",w$2),Ge.component("Presentation",S$2),Ge.component("Playground",r$1),Ge.component("Tabs",S$1),Ge.component("VuePlayground",defineAsyncComponent(()=>__vitePreload(()=>import("./VuePlayground-86080f7e.js"),["assets/VuePlayground-86080f7e.js","assets/chunk-E44UNXTX-0634d18b.js","assets/framework-838e190a.js","assets/index-063d1cff.js"])))}}),photoswipe="",_$2=".theme-hope-content :not(a) > img",E$2={"/zh/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"},"/ru/":{closeTitle:"Закрыть",downloadTitle:"Загрузить изображение",fullscreenTitle:"Переключиться на полный экран",zoomTitle:"Увеличить/Уменьшить",arrowPrevTitle:"Предыдущая (Стрелка влево)",arrowNextTitle:"Следующая (Стрелка вправо)"},"/":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to full screen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"}},P$1=800,O$1={},d$2=Ge=>({src:Ge.src,width:Ge.naturalWidth,height:Ge.naturalHeight,alt:Ge.alt}),H$1=Ge=>{const Ye=typeof Ge=="string"?Array.from(document.querySelectorAll(Ge)):Ge.map(Xe=>Array.from(document.querySelectorAll(Xe))).flat();return Promise.all(Ye.map(Xe=>new Promise((at,ut)=>{Xe.complete?at(d$2(Xe)):(Xe.onload=()=>at(d$2(Xe)),Xe.onerror=ht=>ut(ht))}))).then(Xe=>({elements:Ye,infos:Xe}))},I$1=()=>{const{isSupported:Ge,toggle:Ye}=useFullscreen(),Xe=Mt$1(E$2),at=useRoute(),ut=()=>{Promise.all([__vitePreload(()=>import("./photoswipe.esm-a9093b7c.js"),[]),new Promise(ht=>setTimeout(ht,P$1)).then(()=>H$1(_$2))]).then(([ht,Bo])=>{Bo.elements.forEach((Ao,To)=>{const $o=()=>{const xo=new ht.default({dataSource:Bo.infos,...Xe.value,...O$1,index:To});xo.on("uiRegister",()=>{Ge&&xo.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{Ye()}}),xo.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(zo,Lo)=>{zo.setAttribute("download",""),zo.setAttribute("target","_blank"),zo.setAttribute("rel","noopener"),Lo.on("change",()=>{zo.href=Lo.currSlide.data.src})}})}),xo.init()};Ao.style.cursor="zoom-in",Ao.addEventListener("click",$o),Ao.addEventListener("keypress",({key:xo})=>{xo==="Enter"&&$o()})})})};onMounted(()=>{ut(),watch(()=>at.path,()=>ut())})};var y$1=defineClientConfig({setup:()=>{I$1()}});function i$1(Ge){return{all:Ge=Ge||new Map,on:function(Ye,Xe){var at=Ge.get(Ye);at?at.push(Xe):Ge.set(Ye,[Xe])},off:function(Ye,Xe){var at=Ge.get(Ye);at&&(Xe?at.splice(at.indexOf(Xe)>>>0,1):Ge.set(Ye,[]))},emit:function(Ye,Xe){var at=Ge.get(Ye);at&&at.slice().map(function(ut){ut(Xe)}),(at=Ge.get("*"))&&at.slice().map(function(ut){ut(Ye,Xe)})}}}const l$2=Symbol.for("PWAEvent"),g$1=async Ge=>{const{register:Ye}=await __vitePreload(()=>import("./index-70769223.js"),[]);Ye(withBase("service-worker.js"),{ready(Xe){console.log("[PWA]: Service worker is active"),Ge.emit("ready",Xe)},registered(Xe){console.log("[PWA]: Service worker has been registered."),Ge.emit("registered",Xe)},cached(Xe){console.log("[PWA]: Content has been cached for offline usage"),Ge.emit("cached",Xe)},async updatefound(Xe){await navigator.serviceWorker.getRegistration()&&(console.log("[PWA]: New content is downloading."),Ge.emit("updatefound",Xe))},updated(Xe){console.log("[PWA]: New content is available, please refresh.");const at="service-worker-version",ut=Number(localStorage.getItem(at)||0);localStorage.setItem(at,(ut+1).toString()),localStorage.removeItem("manifest"),Ge.emit("updated",Xe)},offline(){console.log("[PWA]: No internet connection found. App is running in offline mode."),Ge.emit("offline")},error(Xe){console.log("[PWA]: Error during service worker registration:",Xe),Ge.emit("error",Xe)}})},m$1=()=>{const Ge=i$1();provide(l$2,Ge),onMounted(async()=>{var Ye;let Xe=!1;(Ye=navigator.serviceWorker)!=null&&Ye.controller&&navigator.serviceWorker.addEventListener("controllerchange",()=>{Xe||(Xe=!0,window.location.reload())}),await g$1(Ge)})},popup="",p$1=()=>h$5(ct$1,{name:"update"},()=>h$5("path",{d:"M949.949 146.25v255.826c0 21.981-13.989 35.97-35.97 35.97H658.154c-13.988 0-25.983-7.992-33.973-21.981-5.997-13.989-4-27.977 7.991-39.97l79.942-77.946c-55.954-51.973-121.918-77.955-199.863-77.955-37.975 0-75.95 8.002-113.924 21.99-37.975 15.985-67.948 37.976-91.934 63.957-25.982 23.987-47.973 53.96-63.957 91.934-29.983 73.955-29.983 153.895 0 227.85 15.984 37.976 37.975 67.947 63.957 91.934 23.986 25.982 53.959 47.973 91.934 63.956 37.974 13.989 75.95 21.991 113.924 21.991 45.967 0 87.942-9.998 127.913-29.982 41.976-17.99 75.951-45.967 101.931-83.943 7.993-4 11.994-5.995 13.989-5.995 5.997 0 9.998 1.994 13.988 5.995l77.958 77.946c3.989 4 5.986 7.993 5.986 11.994 0 1.994-1.996 5.995-3.99 11.994-43.973 51.962-93.941 91.934-151.9 117.914-53.958 25.983-115.92 39.972-185.874 39.972-61.961 0-119.921-11.984-169.89-33.973-57.96-25.985-105.923-57.963-139.896-93.943-35.98-33.972-67.958-81.936-93.94-139.897-45.967-101.93-45.967-237.846 0-339.777 25.982-57.96 57.96-105.923 93.94-139.896 33.973-35.98 81.936-67.958 139.896-93.94 49.968-21.99 107.928-33.974 169.89-33.974 55.963 0 109.923 9.988 161.885 29.973 53.97 21.99 101.933 51.963 139.908 89.938l73.954-73.944c9.987-9.998 23.987-13.988 39.971-8.002 13.988 8.002 21.98 19.995 21.98 33.984z"}));p$1.displayName="UpdateIcon";const w$1=Symbol.for("PWAEvent"),h$2=()=>{const Ge=inject(w$1);if(!Ge)throw new Error("usePWAEvent() is called without provider.");return Ge},W$1={"/zh/":{install:"安装",iOSInstall:"点击分享按钮然后点击“添加到主屏幕”",cancel:"取消",close:"关闭",prevImage:"上一张图片",nextImage:"下一张图片",desc:"详情",feature:"主要特色",explain:"该应用可以安装在你的 PC 或移动设备上。这将使该 Web 应用程序外观和行为与其他应用程序相同。它将在出现在应用程序列表中，并可以固定到主屏幕，开始菜单或任务栏。此 Web 应用程序还将能够与其他应用程序和你的操作系统安全地进行交互。",hint:"发现新内容可用",update:"新内容已就绪"},"/ru/":{install:"Установить",iOSInstall:"Нажмите кнопку «Поделиться», а затем «Добавить на главный экран»",cancel:"Отменить",close:"Закрыть",prevImage:"Предыдущее изображение",nextImage:"Следующее изображение",desc:"Описание",feature:"Основные функции",explain:"Это приложение может быть установлено на вашем компьютере или мобильном устройстве.  Это позволит веб-приложению выглядеть и вести себя как любое другое установленное приложение.  Вы найдете его в списках приложений и сможете закрепить его на домашнем экране, в меню пуск или на панели задач.  Установленное веб-приложение также сможет безопасно взаимодействовать с другими приложениями и операционной системой. ",hint:"Найден новый контент",update:"Доступен новый контент."},"/":{install:"Install",iOSInstall:"Tap the share button and then 'Add to Home Screen'",cancel:"Cancel",close:"Close",prevImage:"Previous Image",nextImage:"Next Image",desc:"Description",feature:"Key Features",explain:"This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",hint:"New content found.",update:"New content is available."}};var E$1=defineComponent({name:"SWHintPopup",setup(Ge,{slots:Ye}){const Xe=Mt$1(W$1),at=ref(!1),ut=()=>{at.value&&(window.location.reload(!0),at.value=!1)};return onMounted(()=>{const ht=h$2();ht.on("updatefound",()=>{navigator.serviceWorker.getRegistration().then(Bo=>{Bo&&Bo.active&&(at.value=!0)})}),ht.on("updated",()=>{at.value=!1})}),()=>h$5(Transition,{name:"popup"},()=>{var ht;return((ht=Ye.default)==null?void 0:ht.call(Ye,{enabled:at.value,uninstall:ut}))||(at.value?h$5("button",{class:"sw-hint-popup",tabindex:0,onClick:()=>ut()},[Xe.value.hint,h$5("span",{class:"icon-wrapper"},h$5(p$1))]):null)})}});const clientConfig12=defineClientConfig({setup:()=>{m$1()},rootComponents:[E$1]}),useAutoLink=(Ge,Ye=!1)=>{const Xe=useRouter(),{fullPath:at,meta:ut,name:ht}=lt$1(Xe,encodeURI(Ge));return{text:!Ye&&ut.s?ut.s:ut.title||Ge,link:ht==="404"?Ge:at,...ut.i?{icon:ut.i}:{}}},useMobile=()=>{const Ge=useThemeData$1(),Ye=ref(!1),Xe=()=>{Ye.value=window.innerWidth<(Ge.value.mobileBreakPoint||719)};return onMounted(()=>{Xe(),useEventListener("resize",Xe,!1),useEventListener("orientationchange",Xe,!1)}),Ye},useNavigate=()=>{const Ge=useRouter(),Ye=useRoute();return Xe=>{if(Xe)if(Xe.startsWith("/"))Ye.path!==Xe&&Ge.push(Xe);else if(Xe.startsWith("http://")||Xe.startsWith("https://")||Xe.startsWith("mailto:"))window&&window.open(Xe);else{const at=Ye.path.slice(0,Ye.path.lastIndexOf("/"));Ge.push(`${at}/${encodeURI(Xe)}`)}}},usePageAuthor=()=>{const Ge=useThemeLocaleData(),Ye=usePageFrontmatter();return computed(()=>{const{author:Xe}=Ye.value;return Xe?Jt$1(Xe):Xe===!1?[]:Jt$1(Ge.value.author,!1)})},usePageCategory=()=>{const Ge=usePageFrontmatter();return computed(()=>qt$1(Ge.value.category).map(Ye=>{var Xe,at;return{name:Ye,path:((at=(Xe=inject(Symbol.for("categoryMap")))==null?void 0:Xe.value.map[Ye])==null?void 0:at.path)||""}}))},usePageTag=()=>{const Ge=usePageFrontmatter();return computed(()=>Gt$1(Ge.value.tag).map(Ye=>{var Xe,at;return{name:Ye,path:((at=(Xe=inject(Symbol.for("tagMap")))==null?void 0:Xe.value.map[Ye])==null?void 0:at.path)||""}}))},usePageDate=()=>{const Ge=usePageFrontmatter(),Ye=usePageData();return computed(()=>{const{date:Xe}=Ge.value;if(Xe)return et(Xe);const{createdTime:at}=Ye.value.git||{};return at?et(new Date(at)):null})},usePageInfo=()=>{const Ge=useThemeLocaleData(),Ye=usePageData(),Xe=usePageFrontmatter(),at=usePageAuthor(),ut=usePageCategory(),ht=usePageTag(),Bo=usePageDate(),Ao=computed(()=>({author:at.value,category:ut.value,date:Bo.value,localizedDate:Ye.value.localizedDate,tag:ht.value,isOriginal:Xe.value.isOriginal||!1,readingTime:Ye.value.readingTime||null,pageview:"pageview"in Xe.value?Xe.value.pageview:!0})),To=computed(()=>"pageInfo"in Xe.value?Xe.value.pageInfo:"pageInfo"in Ge.value?Ge.value.pageInfo:null);return{info:Ao,items:To}};let promise=null,promiseResolve=null;const scrollPromise={wait:()=>promise,pending:()=>{promise=new Promise(Ge=>promiseResolve=Ge)},resolve:()=>{promiseResolve==null||promiseResolve(),promise=null,promiseResolve=null}},useScrollPromise=()=>scrollPromise,footer="",PageFooter=defineComponent({name:"PageFooter",setup(){const Ge=usePageFrontmatter(),Ye=useThemeLocaleData(),Xe=usePageAuthor(),at=computed(()=>{const{copyright:Bo,footer:Ao}=Ge.value;return Ao!==!1&&Boolean(Bo||Ao||Ye.value.displayFooter)}),ut=computed(()=>{const{footer:Bo}=Ge.value;return Bo===!1?!1:typeof Bo=="string"?Bo:Ye.value.footer||""}),ht=computed(()=>"copyright"in Ge.value?Ge.value.copyright:"copyright"in Ye.value?Ye.value.copyright:Xe.value.length?`Copyright © ${new Date().getFullYear()} ${Xe.value[0].name}`:!1);return()=>at.value?h$5("footer",{class:"footer-wrapper"},[h$5("div",{class:"footer",innerHTML:ut.value}),ht.value?h$5("div",{class:"copyright",innerHTML:ht.value}):null]):null}}),I18nIcon=()=>h$5(ct$1,{name:"i18n"},()=>[h$5("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);I18nIcon.displayName="I18nIcon";const GitHubIcon=()=>h$5(ct$1,{name:"github"},()=>h$5("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));GitHubIcon.displayName="GitHubIcon";const GitlabIcon=()=>h$5(ct$1,{name:"gitlab"},()=>h$5("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));GitlabIcon.displayName="GitlabIcon";const GiteeIcon=()=>h$5(ct$1,{name:"gitee"},()=>h$5("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));GiteeIcon.displayName="GiteeIcon";const BitbucketIcon=()=>h$5(ct$1,{name:"bitbucket"},()=>h$5("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));BitbucketIcon.displayName="BitbucketIcon";const SourceIcon=()=>h$5(ct$1,{name:"source"},()=>h$5("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));SourceIcon.displayName="SourceIcon";const Icon=Ge=>{const{icon:Ye=""}=Ge;return isLinkHttp(Ye)?h$5("img",{class:"icon",src:Ye}):Ye.startsWith("/")?h$5("img",{class:"icon",src:withBase(Ye)}):h$5(resolveComponent("FontIcon"),Ge)};Icon.displayName="Icon";const AutoLink=defineComponent({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:{focusout:()=>!0},setup(Ge,{attrs:Ye,emit:Xe,slots:at}){const ut=useRoute(),ht=useSiteData(),Bo=toRef(Ge,"config"),Ao=computed(()=>isLinkHttp(Bo.value.link)),To=computed(()=>isLinkMailto(Bo.value.link)||isLinkTel(Bo.value.link)),$o=computed(()=>To.value?void 0:Bo.value.target||(Ao.value?"_blank":void 0)),xo=computed(()=>$o.value==="_blank"),zo=computed(()=>!Ao.value&&!To.value&&!xo.value),Lo=computed(()=>To.value?void 0:Bo.value.rel||(xo.value?"noopener noreferrer":void 0)),Mo=computed(()=>Bo.value.ariaLabel||Bo.value.text),Ro=computed(()=>{if(Ge.exact)return!1;const Zo=Object.keys(ht.value.locales);return Zo.length?Zo.every(No=>No!==Bo.value.link):Bo.value.link!=="/"}),Fo=computed(()=>zo.value?Bo.value.activeMatch?new RegExp(Bo.value.activeMatch).test(ut.path):Ro.value?ut.path.startsWith(Bo.value.link):ut.path===Bo.value.link:!1);return()=>{var Ho,Vo,Wo;const{text:Zo,icon:No,link:qo}=Bo.value;return zo.value?h$5(RouterLink,{to:qo,"aria-label":Mo.value,...Ye,class:["nav-link",{active:Fo.value},Ye.class],onFocusout:()=>Xe("focusout")},()=>{var Go,Uo,Jo;return((Go=at.default)==null?void 0:Go.call(at))||[((Uo=at.before)==null?void 0:Uo.call(at))||h$5(Icon,{icon:No}),Zo,(Jo=at.after)==null?void 0:Jo.call(at)]}):h$5("a",{href:qo,rel:Lo.value,target:$o.value,"aria-label":Mo.value,...Ye,class:["nav-link",Ye.class],onFocusout:()=>Xe("focusout")},((Ho=at.default)==null?void 0:Ho.call(at))||[((Vo=at.before)==null?void 0:Vo.call(at))||h$5(Icon,{icon:No}),Zo,Ge.noExternalLinkIcon?null:h$5(ExternalLinkIcon),(Wo=at.after)==null?void 0:Wo.call(at)])}}}),dropdownLink="",DropdownLink=defineComponent({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},setup(Ge,{slots:Ye}){const Xe=useRoute(),at=toRef(Ge,"config"),ut=computed(()=>at.value.ariaLabel||at.value.text),ht=ref(!1);watch(()=>Xe.path,()=>{ht.value=!1});const Bo=Ao=>{Ao.detail===0&&(ht.value=!ht.value)};return()=>{var Ao;return h$5("div",{class:["dropdown-wrapper",{open:ht.value}]},[h$5("button",{class:"dropdown-title",type:"button","aria-label":ut.value,onClick:Bo},[((Ao=Ye.title)==null?void 0:Ao.call(Ye))||h$5("span",{class:"title"},[h$5(Icon,{icon:at.value.icon}),Ge.config.text]),h$5("span",{class:"arrow"}),h$5("ul",{class:"nav-dropdown"},at.value.children.map((To,$o)=>{const xo=$o===at.value.children.length-1;return h$5("li",{class:"dropdown-item"},"children"in To?[h$5("h4",{class:"dropdown-subtitle"},To.link?h$5(AutoLink,{config:To,onFocusout:()=>{To.children.length===0&&xo&&(ht.value=!1)}}):h$5("span",To.text)),h$5("ul",{class:"dropdown-subitem-wrapper"},To.children.map((zo,Lo)=>h$5("li",{class:"dropdown-subitem"},h$5(AutoLink,{config:zo,onFocusout:()=>{Lo===To.children.length-1&&xo&&(ht.value=!1)}}))))]:h$5(AutoLink,{config:To,onFocusout:()=>{xo&&(ht.value=!1)}}))}))])])}}}),resolveNavbarItem=(Ge,Ye="")=>isString(Ge)?useAutoLink(`${Ye}${Ge}`):"children"in Ge?{...Ge,...Ge.link&&!isLinkExternal(Ge.link)?useAutoLink(`${Ye}${Ge.link}`):{},children:Ge.children.map(Xe=>resolveNavbarItem(Xe,`${Ye}${Ge.prefix||""}`))}:{...Ge,link:isLinkExternal(Ge.link)?Ge.link:useAutoLink(`${Ye}${Ge.link}`).link},useNavbarConfig=()=>computed(()=>(useThemeLocaleData().value.navbar||[]).map(Ge=>resolveNavbarItem(Ge))),useNavbarLanguageDropdown=()=>{const Ge=useRouter(),Ye=useRouteLocale(),Xe=useSiteLocaleData(),at=useThemeData$1(),ut=useThemeLocaleData();return computed(()=>{const ht=Object.keys(Xe.value.locales);if(ht.length<2)return null;const{path:Bo,fullPath:Ao}=Ge.currentRoute.value,{navbarLocales:To}=ut.value;return{text:"",ariaLabel:To==null?void 0:To.selectLangAriaLabel,children:ht.map(xo=>{var Zo,No,qo;const zo=((Zo=Xe.value.locales)==null?void 0:Zo[xo])??{},Lo=((No=at.value.locales)==null?void 0:No[xo])??{},Mo=zo.lang||"",Ro=((qo=Lo.navbarLocales)==null?void 0:qo.langName)??Mo;let Fo;if(Mo===Xe.value.lang)Fo=Bo;else{const Ho=Bo.replace(Ye.value,xo);Fo=Ge.getRoutes().some(Vo=>Vo.path===Ho)?Ao.replace(Bo,Ho):Lo.home??xo}return{text:Ro,link:Fo}})}})},getAncestorLinks=(Ge,Ye)=>{const Xe=Ge.path.replace(Ye,"/").split("/"),at=[];let ut=removeEndingSlash(Ye);return Xe.forEach((ht,Bo)=>{Bo!==Xe.length-1?(ut+=`${ht}/`,at.push(ut)):ht!==""&&(ut+=ht,at.push(ut))}),at},resolveRepoType=Ge=>!isLinkHttp(Ge)||/github\.com/.test(Ge)?"GitHub":/bitbucket\.org/.test(Ge)?"Bitbucket":/gitlab\.com/.test(Ge)?"GitLab":/gitee\.com/.test(Ge)?"Gitee":null,useNavbarRepo=()=>{const Ge=useThemeLocaleData(),Ye=computed(()=>Ge.value.repo||null),Xe=computed(()=>Ye.value?resolveRepoType(Ye.value):null),at=computed(()=>Ye.value&&!isLinkHttp(Ye.value)?`https://github.com/${Ye.value}`:Ye.value),ut=computed(()=>at.value?Ge.value.repoLabel??(Xe.value===null?"Source":Xe.value):null);return computed(()=>!at.value||!ut.value||Ge.value.repoDisplay===!1?null:{type:Xe.value||"Source",label:ut.value,link:at.value})},LanguageDropdown=defineComponent({name:"LanguageDropdown",setup(){const Ge=useNavbarLanguageDropdown();return()=>Ge.value?h$5("div",{class:"nav-item"},h$5(DropdownLink,{class:"i18n-dropdown",config:Ge.value},{title:()=>{var Ye;return h$5(I18nIcon,{"aria-label":(Ye=Ge.value)==null?void 0:Ye.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}})):null}}),navbarBrand="",NavbarBrand=defineComponent({name:"NavbarBrand",setup(){const Ge=useRouteLocale(),Ye=useSiteLocaleData(),Xe=useThemeLocaleData(),at=computed(()=>Xe.value.home||Ge.value),ut=computed(()=>Ye.value.title),ht=computed(()=>Xe.value.logo?withBase(Xe.value.logo):null),Bo=computed(()=>Xe.value.logoDark?withBase(Xe.value.logoDark):null);return()=>h$5(RouterLink,{to:at.value,class:"brand"},()=>[ht.value?h$5("img",{class:["logo",{light:Boolean(Bo.value)}],src:ht.value,alt:ut.value}):null,Bo.value?h$5("img",{class:["logo dark"],src:Bo.value,alt:ut.value}):null,ut.value?h$5("span",{class:["site-name",{"hide-in-pad":ht.value}]},ut.value):null])}}),navbarLinks="",NavbarLinks=defineComponent({name:"NavbarLinks",setup(){const Ge=useNavbarConfig();return()=>Ge.value.length?h$5("nav",{class:"nav-links"},[...Ge.value.map(Ye=>h$5("div",{class:"nav-item hide-in-mobile"},"children"in Ye?h$5(DropdownLink,{config:Ye}):h$5(AutoLink,{config:Ye})))]):null}});function _toConsumableArray(Ge){if(Array.isArray(Ge)){for(var Ye=0,Xe=Array(Ge.length);Ye<Ge.length;Ye++)Xe[Ye]=Ge[Ye];return Xe}else return Array.from(Ge)}var hasPassiveEvents=!1;if(typeof window<"u"){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function Ge(Ye){return locks.some(function(Xe){return!!(Xe.options.allowTouchMove&&Xe.options.allowTouchMove(Ye))})},preventDefault=function Ge(Ye){var Xe=Ye||window.event;return allowTouchMove(Xe.target)||Xe.touches.length>1?!0:(Xe.preventDefault&&Xe.preventDefault(),!1)},setOverflowHidden=function Ge(Ye){if(previousBodyPaddingRight===void 0){var Xe=!!Ye&&Ye.reserveScrollBarGap===!0,at=window.innerWidth-document.documentElement.clientWidth;Xe&&at>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=at+"px")}previousBodyOverflowSetting===void 0&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")},restoreOverflowSetting=function Ge(){previousBodyPaddingRight!==void 0&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),previousBodyOverflowSetting!==void 0&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},isTargetElementTotallyScrolled=function Ge(Ye){return Ye?Ye.scrollHeight-Ye.scrollTop<=Ye.clientHeight:!1},handleScroll=function Ge(Ye,Xe){var at=Ye.targetTouches[0].clientY-initialClientY;return allowTouchMove(Ye.target)?!1:Xe&&Xe.scrollTop===0&&at>0||isTargetElementTotallyScrolled(Xe)&&at<0?preventDefault(Ye):(Ye.stopPropagation(),!0)},disableBodyScroll=function Ge(Ye,Xe){if(!Ye){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!locks.some(function(ut){return ut.targetElement===Ye})){var at={targetElement:Ye,options:Xe||{}};locks=[].concat(_toConsumableArray(locks),[at]),isIosDevice?(Ye.ontouchstart=function(ut){ut.targetTouches.length===1&&(initialClientY=ut.targetTouches[0].clientY)},Ye.ontouchmove=function(ut){ut.targetTouches.length===1&&handleScroll(ut,Ye)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):setOverflowHidden(Xe)}},clearAllBodyScrollLocks=function Ge(){isIosDevice?(locks.forEach(function(Ye){Ye.targetElement.ontouchstart=null,Ye.targetElement.ontouchmove=null}),documentListenerAdded&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1),initialClientY=-1):restoreOverflowSetting(),locks=[]};const navScreenDropdown="",NavScreenDropdown=defineComponent({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(Ge){const Ye=useRoute(),Xe=toRef(Ge,"config"),at=computed(()=>Xe.value.ariaLabel||Xe.value.text),ut=ref(!1);watch(()=>Ye.path,()=>{ut.value=!1});const ht=(Bo,Ao)=>Ao[Ao.length-1]===Bo;return()=>[h$5("button",{class:["nav-screen-dropdown-title",{active:ut.value}],type:"button","aria-label":at.value,onClick:()=>{ut.value=!ut.value}},[h$5("span",{class:"title"},[h$5(Icon,{icon:Xe.value.icon}),Ge.config.text]),h$5("span",{class:["arrow",ut.value?"down":"right"]})]),h$5("ul",{class:["nav-screen-dropdown",{hide:!ut.value}]},Xe.value.children.map(Bo=>h$5("li",{class:"dropdown-item"},"children"in Bo?[h$5("h4",{class:"dropdown-subtitle"},Bo.link?h$5(AutoLink,{config:Bo,onFocusout:()=>{ht(Bo,Xe.value.children)&&Bo.children.length===0&&(ut.value=!1)}}):h$5("span",Bo.text)),h$5("ul",{class:"dropdown-subitem-wrapper"},Bo.children.map(Ao=>h$5("li",{class:"dropdown-subitem"},h$5(AutoLink,{config:Ao,onFocusout:()=>{ht(Ao,Bo.children)&&ht(Bo,Xe.value.children)&&(ut.value=!1)}}))))]:h$5(AutoLink,{config:Bo,onFocusout:()=>{ht(Bo,Xe.value.children)&&(ut.value=!1)}}))))]}}),navScreenLinks="",NavScreenLinks=defineComponent({name:"NavScreenLinks",setup(){const Ge=useNavbarConfig();return()=>Ge.value.length?h$5("nav",{class:"nav-screen-links"},Ge.value.map(Ye=>h$5("div",{class:"navbar-links-item"},"children"in Ye?h$5(NavScreenDropdown,{config:Ye}):h$5(AutoLink,{config:Ye})))):null}}),AppearanceMode=defineComponent({name:"AppearanceMode",setup(){const Ge=useThemeData$1(),Ye=useThemeLocaleData(),Xe=computed(()=>Ye.value.outlookLocales.darkmode),at=computed(()=>Ge.value.darkmode),ut=computed(()=>at.value==="switch"||at.value==="toggle");return()=>ut.value?h$5("div",{class:"appearance-wrapper"},[h$5("label",{class:"appearance-title",for:"appearance-switch"},Xe.value),h$5(AppearanceSwitch)]):null}}),ThemeColor=defineComponent({name:"ThemeColor",setup(){const Ge=useThemeData$1(),Ye=useThemeLocaleData(),Xe=computed(()=>Ye.value.outlookLocales.themeColor),at=computed(()=>{const{themeColor:ut}=Ge.value;return ut===!1?null:ut});return()=>at.value?h$5("div",{class:"theme-color-wrapper"},[h$5("label",{class:"theme-color-title",for:"theme-color-picker"},Xe.value),h$5(ThemeColorPicker,{themeColor:at.value})]):null}}),OutlookSettings=defineComponent({name:"OutlookSettings",setup(){const Ge=useThemeData$1(),Ye=usePure(),Xe=computed(()=>Ge.value.darkmode!=="disable"&&Ge.value.darkmode!=="enable"),at=computed(()=>!Ye.value&&Boolean(Ge.value.themeColor)),ut=computed(()=>!Ye.value&&Ge.value.fullscreen);return()=>h$5(ClientOnly,()=>[at.value?h$5(ThemeColor):null,Xe.value?h$5(AppearanceMode):null,ut.value?h$5(ToggleFullScreenButton):null])}}),navScreen="",NavScreen=defineComponent({name:"NavScreen",props:{show:Boolean},emits:{close:()=>!0},setup(Ge,{emit:Ye,slots:Xe}){const at=useRoute(),ut=useMobile(),ht=ref();return onMounted(()=>{watch(ut,Bo=>{!Bo&&Ge.show&&(clearAllBodyScrollLocks(),Ye("close"))}),watch(()=>at.path,()=>{clearAllBodyScrollLocks(),Ye("close")})}),onBeforeUnmount(()=>{clearAllBodyScrollLocks()}),()=>h$5(Transition,{name:"fade",onEnter:()=>disableBodyScroll(ht.value,{reserveScrollBarGap:!0}),onAfterLeave:()=>clearAllBodyScrollLocks()},()=>{var Bo,Ao;return Ge.show?h$5("div",{id:"nav-screen",ref:ht},h$5("div",{class:"container"},[(Bo=Xe.before)==null?void 0:Bo.call(Xe),h$5(NavScreenLinks),h$5("div",{class:"outlook-wrapper"},h$5(OutlookSettings)),(Ao=Xe.after)==null?void 0:Ao.call(Xe)])):null})}}),outlookButton="",OutlookButton=defineComponent({name:"OutlookButton",setup(){const{isSupported:Ge}=useFullscreen(),Ye=useThemeData$1(),Xe=usePure(),at=useRoute(),ut=ref(!1),ht=computed(()=>Ye.value.darkmode!=="disable"&&Ye.value.darkmode!=="enable"),Bo=computed(()=>!Xe.value&&Boolean(Ye.value.themeColor)),Ao=computed(()=>!Xe.value&&Ye.value.fullscreen&&Ge);return watch(()=>at.path,()=>{ut.value=!1}),()=>ht.value||Ao.value||Bo.value?h$5("div",{class:"nav-item hide-in-mobile"},ht.value&&!Ao.value&&!Bo.value?h$5(AppearanceSwitch):Ao.value&&!ht.value&&!Bo.value?h$5(ToggleFullScreenButton):h$5("button",{class:["outlook-button",{open:ut.value}],tabindex:"-1",ariaHidden:!0},[h$5(OutlookIcon),h$5("div",{class:"outlook-dropdown"},h$5(OutlookSettings))])):null}}),toggleNavbarButton="",ToggleNavbarButton=({active:Ge=!1},{emit:Ye})=>h$5("button",{class:["toggle-navbar-button",{"is-active":Ge}],"aria-label":"Toggle Navbar","aria-expanded":Ge,"aria-controls":"nav-screen",onClick:()=>Ye("toggle")},h$5("span",{class:"button-container"},[h$5("span",{class:"button-top"}),h$5("span",{class:"button-middle"}),h$5("span",{class:"button-bottom"})]));ToggleNavbarButton.displayName="ToggleNavbarButton";const toggleSidebarButton="",ToggleSidebarButton=(Ge,{emit:Ye})=>h$5("button",{class:"toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>Ye("toggle")},h$5("span",{class:"icon"}));ToggleSidebarButton.displayName="ToggleSidebarButton";ToggleSidebarButton.emits=["toggle"];const repoLink="",RepoLink=defineComponent({name:"RepoLink",components:{BitbucketIcon,GiteeIcon,GitHubIcon,GitlabIcon,SourceIcon},setup(){const Ge=useNavbarRepo();return()=>Ge.value?h$5("div",{class:"nav-item"},h$5("a",{class:"repo-link",href:Ge.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":Ge.value.label},h$5(resolveComponent(`${Ge.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}}),navbar="",Navbar=defineComponent({name:"NavBar",emits:{toggleSidebar:()=>!0},setup(Ge,{emit:Ye,slots:Xe}){const at=useThemeLocaleData(),ut=useMobile(),ht=ref(!1),Bo=computed(()=>{const{navbarAutoHide:To}=at.value;return To!=="none"&&(To==="always"||ut.value)}),Ao=computed(()=>at.value.navbarLayout||{left:["Brand"],center:["Links"],right:["Language","Repo","Outlook","Search"]});return()=>{var $o,xo,zo,Lo,Mo,Ro;const To={Brand:h$5(NavbarBrand),Language:h$5(LanguageDropdown),Links:h$5(NavbarLinks),Repo:h$5(RepoLink),Outlook:h$5(OutlookButton),Search:St$1("Docsearch")?h$5(resolveComponent("Docsearch")):St$1("SearchBox")?h$5(resolveComponent("SearchBox")):St$1("SearchBox")?h$5(resolveComponent("SearchBox")):null};return[h$5("header",{class:["navbar",{"auto-hide":Bo.value,"hide-icon":!at.value.navbarIcon}]},[h$5("div",{class:"navbar-left"},[h$5(ToggleSidebarButton,{onToggle:()=>{ht.value&&(ht.value=!1),Ye("toggleSidebar")}}),($o=Xe.leftStart)==null?void 0:$o.call(Xe),...Ao.value.left.map(Fo=>To[Fo]),(xo=Xe.leftEnd)==null?void 0:xo.call(Xe)]),h$5("div",{class:"navbar-center"},[(zo=Xe.centerStart)==null?void 0:zo.call(Xe),...Ao.value.center.map(Fo=>To[Fo]),(Lo=Xe.centerEnd)==null?void 0:Lo.call(Xe)]),h$5("div",{class:"navbar-right"},[(Mo=Xe.rightStart)==null?void 0:Mo.call(Xe),...Ao.value.right.map(Fo=>To[Fo]),(Ro=Xe.rightEnd)==null?void 0:Ro.call(Xe),h$5(ToggleNavbarButton,{active:ht.value,onToggle:()=>{ht.value=!ht.value}})])]),h$5(NavScreen,{show:ht.value,onClose:()=>{ht.value=!1}},{before:()=>{var Fo;return(Fo=Xe.screenTop)==null?void 0:Fo.call(Xe)},after:()=>{var Fo;return(Fo=Xe.screenBottom)==null?void 0:Fo.call(Xe)}})]}}}),isActiveSidebarItem=(Ge,Ye,Xe=!1)=>"activeMatch"in Ye?new RegExp(Ye.activeMatch).test(Ge.path):Ht$1(Ge,Ye.link)?!0:Ye.children&&!Xe?Ye.children.some(at=>isActiveSidebarItem(Ge,at)):!1,isMatchedSidebarItem=(Ge,Ye)=>Ye.type==="group"?Ye.children.some(Xe=>Xe.type==="group"?isMatchedSidebarItem(Ge,Xe):Xe.type==="page"&&isActiveSidebarItem(Ge,Xe,!0))||"prefix"in Ye&&Ht$1(Ge,Ye.prefix):!1,renderItem=(Ge,Ye)=>Ge.link?h$5(AutoLink,{...Ye,config:Ge}):h$5("p",Ye,[h$5(Icon,{icon:Ge.icon}),Ge.text]),renderChildren$1=Ge=>{const Ye=useRoute();return Ge?h$5("ul",{class:"sidebar-sub-headers"},Ge.map(Xe=>{const at=isActiveSidebarItem(Ye,Xe,!0);return h$5("li",{class:"sidebar-sub-header"},[renderItem(Xe,{class:["sidebar-link","heading",{active:at}]}),renderChildren$1(Xe.children)])})):null},sidebarData={"/zh/guide/":[{text:"快速上手",prefix:"get-started/",collapsible:!0,icon:"creative",children:["intro.md","install.md","markdown.md"]},{text:"界面",prefix:"interface/",collapsible:!0,icon:"palette",children:["darkmode.md","theme-color.md","icon.md","code-theme.md","others.md","accessibility.md","pure.md"]},{text:"Markdown 增强",prefix:"markdown/",collapsible:!0,icon:"markdown",children:["intro.md","tabs.md","chart.md","echarts.md","mermaid.md","tex.md","vue-playground.md","sup-sub.md","playground.md","code-tabs.md","demo.md","tasklist.md","image.md","include.md","attrs.md","presentation.md","mark.md","stylize.md","flowchart.md","components.md","footnote.md","container.md","align.md","others.md","external.md"]},{text:"布局",prefix:"layout/",collapsible:!0,icon:"layout",children:["navbar.md","sidebar.md","breadcrumb.md","footer.md","page.md","catalog.md","home.md","slides.md"]},{text:"功能",prefix:"feature/",collapsible:!0,icon:"discover",children:["copy-code.md","encrypt.md","photo-swipe.md","search.md","copyright.md","comment.md","page-info.md","meta.md"]},{text:"博客",prefix:"blog/",collapsible:!0,icon:"blog",children:["intro.md","blogger.md","article.md","category-and-tags.md","timeline.md","home.md","path.md"]},{text:"高级",prefix:"advanced/",collapsible:!0,icon:"advance",children:["feed.md","pwa.md","seo.md","sitemap.md"]}],"/zh/config/":["intro.md","i18n.md",{text:"主题配置",prefix:"theme/",collapsible:!0,icon:"config",children:["basic.md","feature.md","layout.md","appearance.md","i18n.md"]},{text:"插件配置",prefix:"plugins/",collapsible:!0,icon:"config",children:["intro.md","blog.md","comment.md","copyright.md","feed.md","md-enhance.md","pwa.md","others.md"]},{text:"Frontmatter 配置",prefix:"frontmatter/",collapsible:!0,icon:"config",children:["info.md","layout.md","plugins.md","home.md","blog-home.md"]},"style.md"],"/zh/cookbook/markdown/emoji/":["README.md","people.md","place.md","object.md","symbol.md","nature.md"],"/ru/guide/":[{text:"Начало работы",prefix:"get-started/",collapsible:!0,icon:"creative",children:["intro.md","install.md","markdown.md"]},{text:"Интерфейс",prefix:"interface/",collapsible:!0,icon:"palette",children:["darkmode.md","theme-color.md","icon.md","code-theme.md","others.md","accessibility.md","pure.md"]},{text:"Расширение Markdown",prefix:"markdown/",collapsible:!0,icon:"markdown",children:["intro.md","echarts.md","flowchart.md","mermaid.md","playground.md","tex.md","vue-playground.md","sup-sub.md","tabs.md","code-tabs.md","include.md","mark.md","chart.md","demo.md","image.md","components.md","attrs.md","container.md","align.md","presentation.md","footnote.md","tasklist.md","stylize.md","others.md","external.md"]},{text:"Макет",prefix:"layout/",collapsible:!0,icon:"layout",children:["README.md","navbar.md","sidebar.md","breadcrumb.md","footer.md","page.md","catalog.md","home.md","slides.md"]},{text:"Функции",prefix:"feature/",collapsible:!0,icon:"discover",children:["page-info.md","copyright.md","meta.md","search.md","photo-swipe.md","comment.md","copy-code.md","encrypt.md"]},{text:"Блог",prefix:"blog/",collapsible:!0,icon:"blog",children:["intro.md","blogger.md","article.md","category-and-tags.md","timeline.md","home.md","path.md"]},{text:"Продвинутые",prefix:"advanced/",collapsible:!0,icon:"advance",children:["pwa.md","sitemap.md","feed.md","seo.md"]}],"/ru/config/":["intro.md","i18n.md",{text:"Конфигурация темы",prefix:"theme/",collapsible:!0,icon:"config",children:["README.md","basic.md","feature.md","layout.md","appearance.md","i18n.md"]},{text:"Конфигурация плагина",prefix:"plugins/",collapsible:!0,icon:"config",children:["intro.md","blog.md","comment.md","copyright.md","feed.md","md-enhance.md","pwa.md","others.md"]},{text:"Конфиг Frontmatter",prefix:"frontmatter/",collapsible:!0,icon:"config",children:["info.md","layout.md","plugins.md","home.md","blog-home.md"]},"style.md"],"/ru/cookbook/markdown/emoji/":["README.md","people.md","object.md","nature.md","place.md","symbol.md"],"/guide/":[{text:"Get Started",prefix:"get-started/",collapsible:!0,icon:"creative",children:["intro.md","install.md","markdown.md"]},{text:"Interface",prefix:"interface/",collapsible:!0,icon:"palette",children:["darkmode.md","theme-color.md","icon.md","code-theme.md","others.md","accessibility.md","pure.md"]},{text:"Markdown Enhance",prefix:"markdown/",collapsible:!0,icon:"markdown",children:["intro.md","attrs.md","chart.md","demo.md","code-tabs.md","components.md","align.md","container.md","echarts.md","flowchart.md","footnote.md","image.md","include.md","mark.md","mermaid.md","playground.md","presentation.md","stylize.md","sup-sub.md","tabs.md","tasklist.md","tex.md","vue-playground.md","others.md","external.md"]},{text:"Layout",prefix:"layout/",collapsible:!0,icon:"layout",children:["README.md","navbar.md","sidebar.md","breadcrumb.md","footer.md","page.md","catalog.md","home.md","slides.md"]},{text:"Features",prefix:"feature/",collapsible:!0,icon:"discover",children:["copy-code.md","comment.md","copyright.md","encrypt.md","photo-swipe.md","page-info.md","meta.md","search.md"]},{text:"Blog",prefix:"blog/",collapsible:!0,icon:"blog",children:["intro.md","blogger.md","article.md","category-and-tags.md","timeline.md","home.md","path.md"]},{text:"Advanced",prefix:"advanced/",collapsible:!0,icon:"advance",children:["feed.md","pwa.md","seo.md","sitemap.md"]}],"/config/":["intro.md","i18n.md",{text:"Theme Config",prefix:"theme/",collapsible:!0,icon:"config",children:["README.md","basic.md","feature.md","layout.md","appearance.md","i18n.md"]},{text:"Plugin Config",prefix:"plugins/",collapsible:!0,icon:"config",children:["intro.md","blog.md","comment.md","copyright.md","feed.md","md-enhance.md","pwa.md","others.md"]},{text:"Frontmatter Config",prefix:"frontmatter/",collapsible:!0,icon:"config",children:["info.md","layout.md","plugins.md","home.md","blog-home.md"]},"style.md"],"/cookbook/markdown/emoji/":["README.md","nature.md","object.md","people.md","place.md","symbol.md"]},resolvePrefix=(Ge="",Ye="")=>Ye.startsWith("/")?Ye:`${ensureEndingSlash(Ge)}${Ye}`,headerToSidebarItem=(Ge,Ye)=>{const Xe=usePageData();return{type:"heading",text:Ge.title,link:`${Xe.value.path}#${Ge.slug}`,children:headersToSidebarItemChildren(Ge.children,Ye)}},headersToSidebarItemChildren=(Ge,Ye)=>Ye>0?Ge.map(Xe=>headerToSidebarItem(Xe,Ye-1)):[],resolveHeadingSidebarItems=Ge=>{const Ye=usePageData();return headersToSidebarItemChildren(Ye.value.headers,Ge)},resolveArraySidebarItems=(Ge,Ye,Xe="")=>{const at=usePageData(),ut=useRoute(),ht=(Bo,Ao=Xe)=>{var $o;const To=isString(Bo)?useAutoLink(resolvePrefix(Ao,Bo)):Bo.link?{...Bo,...isLinkExternal(Bo.link)?{}:{link:useAutoLink(resolvePrefix(Ao,Bo.link)).link}}:Bo;if("children"in To){const xo=resolvePrefix(Ao,To.prefix),zo=To.children==="structure"?sidebarData[xo]:To.children;return{type:"group",...To,prefix:xo,children:zo.map(Lo=>ht(Lo,xo))}}return{type:"page",...To,children:To.link===ut.path?headersToSidebarItemChildren((($o=at.value.headers[0])==null?void 0:$o.level)===1?at.value.headers[0].children:at.value.headers,Ye):[]}};return Ge.map(Bo=>ht(Bo))},resolveMultiSidebarItems=(Ge,Ye)=>{const Xe=useRoute(),at=Object.keys(Ge).sort((ut,ht)=>ht.length-ut.length);for(const ut of at)if(decodeURI(Xe.path).startsWith(ut)){const ht=Ge[ut];return ht?resolveArraySidebarItems(ht==="structure"?sidebarData[ut]:ht,Ye,ut):[]}return console.warn(`${Xe.path} is missing sidebar config.`),[]},resolveSidebarItems=()=>{const Ge=useRouteLocale(),Ye=usePageFrontmatter(),Xe=useThemeLocaleData(),at=Ye.value.home?!1:Ye.value.sidebar??Xe.value.sidebar??"structure",ut=Ye.value.headerDepth??Xe.value.headerDepth??2;return at===!1?[]:at==="heading"?resolveHeadingSidebarItems(ut):at==="structure"?resolveArraySidebarItems(sidebarData[Ge.value],ut,Ge.value):isArray(at)?resolveArraySidebarItems(at,ut):isPlainObject(at)?resolveMultiSidebarItems(at,ut):[]},sidebarItemsSymbol=Symbol.for("sidebarItems"),setupSidebarItems=()=>{const Ge=computed(()=>resolveSidebarItems());provide(sidebarItemsSymbol,Ge)},useSidebarItems=()=>{const Ge=inject(sidebarItemsSymbol);if(!Ge)throw new Error("useSidebarItems() is called without provider.");return Ge},sidebarChild="",SidebarChild=defineComponent({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(Ge){const Ye=useRoute();return()=>[renderItem(Ge.config,{class:["sidebar-link",`sidebar-${Ge.config.type}`,{active:isActiveSidebarItem(Ye,Ge.config,!0)}],exact:!0}),renderChildren$1(Ge.config.children)]}}),sidebarGroup="",SidebarGroup=defineComponent({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:{toggle:()=>!0},setup(Ge,{emit:Ye}){const Xe=useRoute(),at=computed(()=>isActiveSidebarItem(Xe,Ge.config)),ut=computed(()=>isActiveSidebarItem(Xe,Ge.config,!0));return()=>{const{collapsible:ht,children:Bo=[],icon:Ao,prefix:To,link:$o,text:xo}=Ge.config;return h$5("section",{class:"sidebar-group"},[h$5(ht?"button":"p",{class:["sidebar-heading",{clickable:ht||$o,exact:ut.value,active:at.value}],...ht?{onClick:()=>Ye("toggle"),onKeydown:zo=>{zo.key==="Enter"&&Ye("toggle")}}:{}},[h$5(Icon,{icon:Ao}),$o?h$5(RouterLink,{to:$o,class:"title"},()=>xo):h$5("span",{class:"title"},xo),ht?h$5("span",{class:["arrow",Ge.open?"down":"right"]}):null]),Ge.open||!ht?h$5(SidebarLinks,{key:To,config:Bo}):null])}}}),sidebarLinks="",SidebarLinks=defineComponent({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(Ge){const Ye=useRoute(),Xe=ref(-1),at=ut=>{Xe.value=ut===Xe.value?-1:ut};return watch(()=>Ye.path,()=>{const ut=Ge.config.findIndex(ht=>isMatchedSidebarItem(Ye,ht));Xe.value=ut},{immediate:!0,flush:"post"}),()=>h$5("ul",{class:"sidebar-links"},Ge.config.map((ut,ht)=>h$5("li",ut.type==="group"?h$5(SidebarGroup,{config:ut,open:ht===Xe.value,onToggle:()=>at(ht)}):h$5(SidebarChild,{config:ut}))))}}),sidebar="",Sidebar=defineComponent({name:"SideBar",setup(Ge,{slots:Ye}){const Xe=useRoute(),at=useThemeLocaleData(),ut=useSidebarItems(),ht=ref();return onMounted(()=>{watch(()=>Xe.hash,Bo=>{const Ao=document.querySelector(`.sidebar a.sidebar-link[href="${Xe.path}${Bo}"]`);if(!Ao)return;const{top:To,height:$o}=ht.value.getBoundingClientRect(),{top:xo,height:zo}=Ao.getBoundingClientRect();xo<To?Ao.scrollIntoView(!0):xo+zo>To+$o&&Ao.scrollIntoView(!1)})}),()=>{var Bo,Ao,To;return h$5("aside",{class:["sidebar",{"hide-icon":!at.value.sidebarIcon}],ref:ht},[(Bo=Ye.top)==null?void 0:Bo.call(Ye),((Ao=Ye.default)==null?void 0:Ao.call(Ye))||h$5(SidebarLinks,{config:ut.value}),(To=Ye.bottom)==null?void 0:To.call(Ye)])}}}),common="",CommonWrapper=defineComponent({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean},setup(Ge,{slots:Ye}){const Xe=useRouter(),at=usePageData(),ut=usePageFrontmatter(),ht=useThemeLocaleData(),Bo=useMobile(),Ao=ref(!1),To=computed(()=>Ge.noNavbar||ut.value.navbar===!1||ht.value.navbar===!1?!1:Boolean(at.value.title||ht.value.logo||ht.value.repo||ht.value.navbar)),$o=useSidebarItems(),xo=computed(()=>Ge.noSidebar?!1:ut.value.sidebar!==!1&&$o.value.length!==0&&!ut.value.home),zo=ref(!1),Lo=ref(!1),Mo=Go=>{zo.value=typeof Go=="boolean"?Go:!zo.value},Ro=Go=>{Lo.value=typeof Go=="boolean"?Go:!Lo.value},Fo={x:0,y:0},Zo=Go=>{Fo.x=Go.changedTouches[0].clientX,Fo.y=Go.changedTouches[0].clientY},No=Go=>{const Uo=Go.changedTouches[0].clientX-Fo.x,Jo=Go.changedTouches[0].clientY-Fo.y;Math.abs(Uo)>Math.abs(Jo)*1.5&&Math.abs(Uo)>40&&(Uo>0&&Fo.x<=80?Mo(!0):Mo(!1))},qo=computed(()=>ut.value.home?!1:ut.value.toc||ht.value.toc!==!1&&ut.value.toc!==!1),Ho=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let Vo,Wo=0;return useEventListener("scroll",useThrottleFn(()=>{const Go=Ho();Wo<Go&&Go>58?zo.value||(Ao.value=!0):Ao.value=!1,Wo=Go},300,!0)),watch(Bo,Go=>{Go||Mo(!1)}),onMounted(()=>{Vo=Xe.afterEach(()=>{Mo(!1)})}),onBeforeUnmount(()=>{Vo()}),()=>h$5("div",{class:["theme-container",{"no-navbar":!To.value,"no-sidebar":!xo.value&&!(Ye.sidebar||Ye.sidebarTop||Ye.sidebarBottom),"has-toc":qo.value,"hide-navbar":Ao.value,"sidebar-collapsed":!Bo.value&&Lo.value,"sidebar-open":Bo.value&&zo.value},ut.value.containerClass||""],onTouchStart:Zo,onTouchEnd:No},h$5(St$1("GlobalEncrypt")?resolveComponent("GlobalEncrypt"):wt$1,()=>{var Go;return[To.value?h$5(Navbar,{onToggleSidebar:()=>Mo()},{leftStart:()=>{var Uo;return(Uo=Ye.navbarLeftStart)==null?void 0:Uo.call(Ye)},leftEnd:()=>{var Uo;return(Uo=Ye.navbarLeftEnd)==null?void 0:Uo.call(Ye)},centerStart:()=>{var Uo;return(Uo=Ye.navbarCenterStart)==null?void 0:Uo.call(Ye)},centerEnd:()=>{var Uo;return(Uo=Ye.navbarCenterEnd)==null?void 0:Uo.call(Ye)},rightStart:()=>{var Uo;return(Uo=Ye.navbarRightStart)==null?void 0:Uo.call(Ye)},rightEnd:()=>{var Uo;return(Uo=Ye.navbarRightEnd)==null?void 0:Uo.call(Ye)},screenTop:()=>{var Uo;return(Uo=Ye.navScreenTop)==null?void 0:Uo.call(Ye)},screenBottom:()=>{var Uo;return(Uo=Ye.navScreenBottom)==null?void 0:Uo.call(Ye)}}):null,h$5(Transition,{name:"fade"},()=>zo.value?h$5("div",{class:"sidebar-mask",onClick:()=>Mo(!1)}):null),h$5(Transition,{name:"fade"},()=>Bo.value?null:h$5("div",{class:"toggle-sidebar-wrapper",onClick:()=>Ro()},h$5("span",{class:["arrow",Lo.value?"right":"left"]}))),h$5(Sidebar,{},{...Ye.sidebar?{default:()=>{var Uo;return(Uo=Ye.sidebar)==null?void 0:Uo.call(Ye)}}:{},top:()=>{var Uo;return(Uo=Ye.sidebarTop)==null?void 0:Uo.call(Ye)},bottom:()=>{var Uo;return(Uo=Ye.sidebarBottom)==null?void 0:Uo.call(Ye)}}),(Go=Ye.default)==null?void 0:Go.call(Ye),h$5(PageFooter)]}))}}),DropTransition=defineComponent({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},setup(Ge,{slots:Ye}){const Xe=ut=>{ut.style.transition=`transform ${Ge.duration}s ease-in-out ${Ge.delay}s, opacity ${Ge.duration}s ease-in-out ${Ge.delay}s`,ut.style.transform="translateY(-20px)",ut.style.opacity="0"},at=ut=>{ut.style.transform="translateY(0)",ut.style.opacity="1"};return()=>h$5(Ge.type==="single"?Transition:TransitionGroup,{name:"drop",appear:Ge.appear,onAppear:Xe,onAfterAppear:at,onEnter:Xe,onAfterEnter:at,onBeforeLeave:Xe},()=>{var ut;return(ut=Ye.default)==null?void 0:ut.call(Ye)})}}),HomeFeatures=defineComponent({name:"HomeFeatures",setup(){const Ge=usePageFrontmatter(),Ye=computed(()=>isArray(Ge.value.features)?Ge.value.features:[]);return()=>{var Xe;return Ye.value.length?h$5("div",{class:"features"},(Xe=Ge.value.features)==null?void 0:Xe.map(at=>{const ut=[h$5("h2",[h$5(Icon,{icon:at.icon}),h$5("span",{innerHTML:at.title})]),h$5("p",{innerHTML:at.details})];return at.link?isLinkExternal(at.link)?h$5("a",{class:"feature link",href:at.link,role:"navigation","aria-label":at.title,target:"_blank"},ut):h$5(RouterLink,{class:"feature link",to:at.link,role:"navigation","aria-label":at.title},()=>ut):h$5("div",{class:"feature"},ut)})):null}}}),MarkdownContent=({custom:Ge})=>h$5(Content,{class:["theme-hope-content",{custom:Ge}]});MarkdownContent.displayName="MarkdownContent";MarkdownContent.props={custom:Boolean};const HomeHero=defineComponent({name:"HomeHero",setup(Ge,{slots:Ye}){const Xe=usePageFrontmatter(),at=useSiteLocaleData(),ut=computed(()=>Xe.value.heroText===!1?!1:Xe.value.heroText||at.value.title||"Hello"),ht=computed(()=>Xe.value.tagline===!1?!1:Xe.value.tagline||at.value.description||"Welcome to your VuePress site"),Bo=computed(()=>Xe.value.heroImage?withBase(Xe.value.heroImage):null),Ao=computed(()=>Xe.value.heroImageDark?withBase(Xe.value.heroImageDark):null),To=computed(()=>Xe.value.heroAlt||ut.value||"hero"),$o=computed(()=>Xe.value.actions??[]);return()=>{var xo,zo;return h$5("header",{class:"hero"},[((xo=Ye.heroImage)==null?void 0:xo.call(Ye))||h$5(DropTransition,{appear:!0,type:"group"},()=>[Bo.value?h$5("img",{key:"light",class:{light:Ao.value},src:Bo.value,alt:To.value}):null,Ao.value?h$5("img",{key:"dark",class:"dark",src:Ao.value,alt:To.value}):null]),((zo=Ye.heroInfo)==null?void 0:zo.call(Ye))||h$5("div",{class:"hero-info"},[ut.value?h$5(DropTransition,{appear:!0,delay:.04},()=>h$5("h1",{id:"main-title"},ut.value)):null,ht.value?h$5(DropTransition,{appear:!0,delay:.08},()=>h$5("p",{class:"description"},ht.value)):null,$o.value.length?h$5(DropTransition,{appear:!0,delay:.12},()=>h$5("p",{class:"actions"},$o.value.map(Lo=>h$5(AutoLink,{class:["action-button",Lo.type||"default"],config:Lo,noExternalLinkIcon:!0})))):null])])}}}),hopeLogo="",HopeLogo=defineComponent({name:"HopeLogo",setup(){const Ge=ref(!1),Ye=usePageFrontmatter();return onMounted(()=>Promise.all([__vitePreload(()=>import("./three.module-2e64a78b.js"),[]).then(Xe=>Xe.default||Xe),__vitePreload(()=>import("./OrbitControls-0acc8727.js"),["assets/OrbitControls-0acc8727.js","assets/three.module-2e64a78b.js"]).then(Xe=>Xe.default||Xe),__vitePreload(()=>import("./STLLoader-024569b3.js"),["assets/STLLoader-024569b3.js","assets/three.module-2e64a78b.js"]).then(Xe=>Xe.default||Xe)]).then(([Xe,{OrbitControls:at},{STLLoader:ut}])=>{const ht={width:300,height:300},Bo=document.querySelector("canvas#hero-logo"),Ao=new Xe.Scene,To=new ut,xo=new Xe.TextureLoader().load(withBase("/assets/model/roughness.jpeg"));let zo,Lo;Promise.all([new Promise(Wo=>To.load(withBase("/assets/model/logo1.stl"),Go=>{const Uo=new Xe.MeshPhysicalMaterial({color:2640953,metalness:.45,roughness:.5,roughnessMap:xo,displacementScale:.15,emissiveIntensity:.4,reflectivity:1});zo=new Xe.Mesh(Go,Uo),zo.castShadow=!0,zo.receiveShadow=!0,zo.rotation.z=0,zo.scale.set(.3,.3,.3),Ao.add(zo),Wo()})),new Promise(Wo=>To.load(withBase("/assets/model/logo2.stl"),Go=>{const Uo=new Xe.MeshPhysicalMaterial({color:3492190,metalness:.7,roughness:.5,roughnessMap:xo,displacementScale:.15,emissiveIntensity:.4,reflectivity:1});Lo=new Xe.Mesh(Go,Uo),Lo.castShadow=!0,Lo.receiveShadow=!0,Lo.rotation.z=0,Lo.scale.set(.3,.3,.3),Ao.add(Lo),Wo()}))]).then(()=>{Ge.value=!0});const Mo=new Xe.AmbientLight(16777215,2),Ro=new Xe.DirectionalLight(16777215,3),Fo=new Xe.DirectionalLight(16777215,3);Ro.position.set(3,3,3),Fo.position.set(-3,-3,-3),Ao.add(Mo),Ao.add(Ro),Ao.add(Fo);const Zo=new Xe.PerspectiveCamera(45,ht.width/ht.height,1,2e3);Zo.position.set(0,0,20),Ao.add(Zo);const No=new at(Zo,Bo);No.enableZoom=!1,No.target.set(0,.75,0),No.enableDamping=!0,No.enablePan=!1,No.minPolarAngle=Math.PI/2,No.maxPolarAngle=Math.PI/2;const qo=new Xe.WebGLRenderer({alpha:!0,antialias:!0,canvas:Bo});qo.setClearColor(0,0),qo.shadowMap.enabled=!0,qo.shadowMap.type=Xe.PCFSoftShadowMap,qo.setSize(ht.width,ht.height),qo.setPixelRatio(Math.min(window.devicePixelRatio,2));const Ho=new Xe.Clock,Vo=()=>{const Wo=Ho.getElapsedTime();zo&&Lo&&(zo.rotation.y=.5*Wo,Lo.rotation.y=.5*Wo),No.update(),qo.render(Ao,Zo),window.requestAnimationFrame(Vo)};Vo()})),()=>[Ge.value?null:h$5("img",{src:withBase(Ye.value.heroImage),alt:"vuepress-theme-hope"}),h$5("canvas",{id:"hero-logo",style:{display:Ge.value?"block":"none",opacity:Ge.value?1:0}})]}}),HopeHero=()=>h$5(HomeHero,{},{heroImage:()=>h$5(HopeLogo)});HopeHero.displayName="HopeHero";const homePage="",HomePage=defineComponent({name:"HopePage",setup(Ge,{slots:Ye}){const Xe=usePure(),at=usePageFrontmatter();return()=>{var ut,ht,Bo;return h$5("main",{class:["home project",{pure:Xe.value}],id:"main-content","aria-labelledby":at.value.heroText===null?void 0:"main-title"},[(ut=Ye.top)==null?void 0:ut.call(Ye),h$5(HopeHero),h$5(DropTransition,{appear:!0,delay:.16},()=>h$5(HomeFeatures)),(ht=Ye.center)==null?void 0:ht.call(Ye),h$5(DropTransition,{appear:!0,delay:.24},()=>h$5(MarkdownContent,{custom:!0})),(Bo=Ye.bottom)==null?void 0:Bo.call(Ye)])}}}),breadcrumb="",BreadCrumb=defineComponent({name:"BreadCrumb",setup(){const Ge=useRouter(),Ye=useRoute(),Xe=useRouteLocale(),at=usePageFrontmatter(),ut=useThemeLocaleData(),ht=ref([]),Bo=computed(()=>(at.value.breadcrumb||at.value.breadcrumb!==!1&&ut.value.breadcrumb!==!1)&&ht.value.length>1),Ao=computed(()=>at.value.breadcrumbIcon||at.value.breadcrumbIcon!==!1&&ut.value.breadcrumbIcon!==!1),To=()=>{const $o=Ge.getRoutes(),xo=getAncestorLinks(Ye,Xe.value).map(zo=>{const Lo=$o.find(Mo=>Mo.path===zo);if(Lo){const{meta:Mo,path:Ro}=lt$1(Ge,Lo.path),Fo=Mo.s||Mo.title;if(Fo)return{title:Fo,icon:Mo.i,path:Ro}}return null}).filter(zo=>zo!==null);xo.length>1&&(ht.value=xo)};return onMounted(()=>{To(),watch(()=>Ye.path,To)}),()=>h$5("nav",{class:["breadcrumb",{disable:!Bo.value}]},Bo.value?h$5("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},ht.value.map(($o,xo)=>h$5("li",{class:{"is-active":ht.value.length-1===xo},property:"itemListElement",typeof:"ListItem"},[h$5(RouterLink,{to:$o.path,property:"item",typeof:"WebPage"},()=>[Ao.value?h$5(Icon,{icon:$o.icon}):null,h$5("span",{property:"name"},$o.title||"Unknown")]),h$5("meta",{property:"position",content:xo+1})]))):[])}}),pageNav="",resolveFromFrontmatterConfig=Ge=>Ge===!1?!1:isString(Ge)?useAutoLink(Ge,!0):isPlainObject(Ge)?Ge:null,resolveFromSidebarItems=(Ge,Ye,Xe)=>{const at=Ge.findIndex(ut=>ut.link===Ye);if(at!==-1){const ut=Ge[at+Xe];return ut!=null&&ut.link?ut:null}for(const ut of Ge)if(ut.children){const ht=resolveFromSidebarItems(ut.children,Ye,Xe);if(ht)return ht}return null},PageNav=defineComponent({name:"PageNav",setup(){const Ge=useThemeLocaleData(),Ye=usePageFrontmatter(),Xe=useSidebarItems(),at=useRoute(),ut=useNavigate(),ht=computed(()=>{const Ao=resolveFromFrontmatterConfig(Ye.value.prev);return Ao===!1?null:Ao||(Ge.value.prevLink===!1?null:resolveFromSidebarItems(Xe.value,at.path,-1))}),Bo=computed(()=>{const Ao=resolveFromFrontmatterConfig(Ye.value.next);return Ao===!1?null:Ao||(Ge.value.nextLink===!1?null:resolveFromSidebarItems(Xe.value,at.path,1))});return useEventListener("keydown",Ao=>{Ao.altKey&&(Ao.key==="ArrowRight"?Bo.value&&(ut(Bo.value.link),Ao.preventDefault()):Ao.key==="ArrowLeft"&&ht.value&&(ut(ht.value.link),Ao.preventDefault()))}),()=>ht.value||Bo.value?h$5("nav",{class:"page-nav"},[ht.value?h$5(AutoLink,{class:"prev",config:ht.value},()=>{var Ao,To;return[h$5("div",{class:"hint"},[h$5("span",{class:"arrow left"}),Ge.value.metaLocales.prev]),h$5("div",{class:"link"},[h$5(Icon,{icon:(Ao=ht.value)==null?void 0:Ao.icon}),(To=ht.value)==null?void 0:To.text])]}):null,Bo.value?h$5(AutoLink,{class:"next",config:Bo.value},()=>{var Ao,To;return[h$5("div",{class:"hint"},[Ge.value.metaLocales.next,h$5("span",{class:"arrow right"})]),h$5("div",{class:"link"},[(Ao=Bo.value)==null?void 0:Ao.text,h$5(Icon,{icon:(To=Bo.value)==null?void 0:To.icon})])]}):null]):null}}),AuthorIcon=()=>h$5(ct$1,{name:"author"},()=>h$5("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));AuthorIcon.displayName="AuthorIcon";const CalendarIcon=()=>h$5(ct$1,{name:"calendar"},()=>h$5("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));CalendarIcon.displayName="CalendarIcon";const CategoryIcon$1=()=>h$5(ct$1,{name:"category"},()=>h$5("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon$1.displayName="CategoryIcon";const EyeIcon=()=>h$5(ct$1,{name:"eye"},()=>h$5("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));EyeIcon.displayName="EyeIcon";const FireIcon=()=>h$5(ct$1,{name:"fire"},()=>h$5("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));FireIcon.displayName="FireIcon";const TagIcon$1=()=>h$5(ct$1,{name:"tag"},()=>h$5("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon$1.displayName="TagIcon";const TimerIcon=()=>h$5(ct$1,{name:"timer"},()=>h$5("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));TimerIcon.displayName="TimerIcon";const WordIcon=()=>h$5(ct$1,{name:"word"},()=>[h$5("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),h$5("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);WordIcon.displayName="WordIcon";const useMetaLocale=()=>{const Ge=useThemeLocaleData();return computed(()=>Ge.value.metaLocales)},readingTimeLocales={"/zh/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"},"/ru/":{word:"Около $word слов",less1Minute:"Меньше 1 минуты",time:"Около $time мин"},"/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"}},editLinkPatterns={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},resolveEditLink=({docsRepo:Ge,docsBranch:Ye,docsDir:Xe,filePathRelative:at,editLinkPattern:ut})=>{if(!at)return null;const ht=resolveRepoType(Ge);let Bo;return ut?Bo=ut:ht!==null&&(Bo=editLinkPatterns[ht]),Bo?Bo.replace(/:repo/,isLinkHttp(Ge)?Ge:`https://github.com/${Ge}`).replace(/:branch/,Ye).replace(/:path/,removeLeadingSlash(`${removeEndingSlash(Xe)}/${at}`)):null},useEditLink=()=>{const Ge=useThemeLocaleData(),Ye=usePageData(),Xe=usePageFrontmatter();return computed(()=>{const{repo:at,docsRepo:ut=at,docsBranch:ht="main",docsDir:Bo="",editLink:Ao,editLinkPattern:To=""}=Ge.value;if(!(Xe.value.editLink??Ao??!0)||!ut)return null;const xo=resolveEditLink({docsRepo:ut,docsBranch:ht,docsDir:Bo,editLinkPattern:To,filePathRelative:Ye.value.filePathRelative});return xo?{text:Ge.value.metaLocales.editLink,link:xo}:null})},useUpdateTime=()=>{const Ge=useSiteLocaleData(),Ye=useThemeLocaleData(),Xe=usePageData(),at=usePageFrontmatter();return computed(()=>{var Bo,Ao;return!(at.value.lastUpdated??Ye.value.lastUpdated??!0)||!((Bo=Xe.value.git)!=null&&Bo.updatedTime)?null:new Date((Ao=Xe.value.git)==null?void 0:Ao.updatedTime).toLocaleString(Ge.value.lang)})},useContributors=()=>{const Ge=useThemeLocaleData(),Ye=usePageData(),Xe=usePageFrontmatter();return computed(()=>{var ut;return Xe.value.contributors??Ge.value.contributors??!0?((ut=Ye.value.git)==null?void 0:ut.contributors)??null:null})},AuthorInfo=defineComponent({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(Ge){const Ye=useMetaLocale();return()=>Ge.author.length?h$5("span",{class:"author-info","aria-label":`${Ye.value.author}${Ge.pure?"":"🖊"}`,...Ge.pure?{}:{"data-balloon-pos":"down"}},[h$5(AuthorIcon),h$5("span",Ge.author.map(Xe=>Xe.url?h$5("a",{class:"author-item",href:Xe.url,target:"_blank",rel:"noopener noreferrer"},Xe.name):h$5("span",{class:"author-item"},Xe.name))),h$5("span",{property:"author",content:Ge.author.map(Xe=>Xe.name).join(", ")})]):null}}),category="",CategoryInfo=defineComponent({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(Ge){const Ye=useRouter(),Xe=useRoute(),at=useMetaLocale(),ut=(ht,Bo="")=>{Bo&&Xe.path!==Bo&&(ht.preventDefault(),Ye.push(Bo))};return()=>Ge.category.length?h$5("span",{class:"category-info","aria-label":`${at.value.category}${Ge.pure?"":"🌈"}`,...Ge.pure?{}:{"data-balloon-pos":"down"}},[h$5(CategoryIcon$1),...Ge.category.map(({name:ht,path:Bo})=>h$5("span",{class:["category-item",{[`category${Ut$1(ht,9)}`]:!Ge.pure,clickable:Bo}],role:Bo?"navigation":"",onClick:Ao=>ut(Ao,Bo)},ht)),h$5("meta",{property:"articleSection",content:Ge.category.map(({name:ht})=>ht).join(",")})]):null}}),DateInfo=defineComponent({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(Ge){const Ye=usePageLang(),Xe=useMetaLocale();return()=>{var at,ut;return Ge.date?h$5("span",{class:"date-info","aria-label":`${Xe.value.date}${Ge.pure?"":"📅"}`,...Ge.pure?{}:{"data-balloon-pos":"down"}},[h$5(CalendarIcon),h$5("span",h$5(ClientOnly,()=>{var ht;return Ge.localizedDate||((ht=Ge.date.value)==null?void 0:ht.toLocaleDateString(Ye.value))})),h$5("meta",{property:"datePublished",content:((ut=(at=Ge.date)==null?void 0:at.value)==null?void 0:ut.toISOString())||""})]):null}}});defineComponent({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(Ge){const Ye=useRoute(),Xe=useMetaLocale(),at=ref(0),ut=()=>{const ht=document.querySelector(".waline-pageview-count");if(ht){const Bo=ht.textContent;Bo&&!isNaN(Number(Bo))?at.value=Number(Bo):setTimeout(ut,500)}};return onMounted(()=>{setTimeout(ut,1500)}),watch(()=>Ye.path,(ht,Bo)=>{ht!==Bo&&setTimeout(ut,500)}),()=>Ge.pageview?h$5("span",{class:"visitor-info","aria-label":`${Xe.value.views}${Ge.pure?"":"🔢"}`,...Ge.pure?{}:{"data-balloon-pos":"down"}},[h$5(at.value<1e3?EyeIcon:FireIcon),h$5("span",{class:"waline-pageview-count","data-path":typeof Ge.pageview=="string"?Ge.pageview:withBase(Ye.path)},"...")]):null}});const ReadingTimeInfo=defineComponent({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(Ge){const Ye=useMetaLocale(),Xe=Mt$1(readingTimeLocales),at=computed(()=>{if(!Ge.readingTime)return null;const{minutes:ut}=Ge.readingTime;return ut<1?{text:Xe.value.less1Minute,time:"PT1M"}:{text:Xe.value.time.replace("$time",Math.round(ut).toString()),time:`PT${Math.round(ut)}M`}});return()=>at.value?h$5("span",{class:"reading-time-info","aria-label":`${Ye.value.readingTime}${Ge.pure?"":"⌛"}`,...Ge.pure?{}:{"data-balloon-pos":"down"}},[h$5(TimerIcon),h$5("span",at.value.text),h$5("meta",{property:"timeRequired",content:at.value.time})]):null}}),tag="",TagInfo=defineComponent({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(Ge){const Ye=useRouter(),Xe=useRoute(),at=useMetaLocale(),ut=(ht,Bo="")=>{Bo&&Xe.path!==Bo&&(ht.preventDefault(),Ye.push(Bo))};return()=>Ge.tag.length?h$5("span",{class:"tag-info","aria-label":`${at.value.tag}${Ge.pure?"":"🏷"}`,...Ge.pure?{}:{"data-balloon-pos":"down"}},[h$5(TagIcon$1),...Ge.tag.map(({name:ht,path:Bo})=>h$5("span",{class:["tag-item",{[`tag-item${Ut$1(ht,9)}`]:!Ge.pure,clickable:Bo}],role:Bo?"navigation":"",onClick:Ao=>ut(Ao,Bo)},ht)),h$5("meta",{property:"keywords",content:Ge.tag.map(({name:ht})=>ht).join(",")})]):null}}),OriginalInfo=defineComponent({name:"OriginalMark",inheritAttrs:!1,props:{isOriginal:Boolean},setup(Ge){const Ye=useMetaLocale();return()=>Ge.isOriginal?h$5("span",{class:"origin"},Ye.value.origin):null}}),WordInfo=defineComponent({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(Ge){const Ye=useMetaLocale(),Xe=Mt$1(readingTimeLocales),at=computed(()=>{var ht;return(ht=Ge.readingTime)==null?void 0:ht.words.toString()}),ut=computed(()=>Xe.value.word.replace("$word",at.value||""));return()=>at.value?h$5("span",{class:"words-info","aria-label":`${Ye.value.words}${Ge.pure?"":"🔠"}`,...Ge.pure?{}:{"data-balloon-pos":"down"}},[h$5(WordIcon),h$5("span",ut.value),h$5("meta",{property:"wordCount",content:at.value})]):null}}),pageInfo="",PageInfo=defineComponent({name:"PageInfo",components:{AuthorInfo,CategoryInfo,DateInfo,OriginalInfo,PageViewInfo:()=>null,ReadingTimeInfo,TagInfo,WordInfo},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","Category","Tag","ReadingTime"]},info:{type:Object,required:!0}},setup(Ge){const Ye=usePure();return()=>Ge.items?h$5("div",{class:"page-info"},Ge.items.map(Xe=>h$5(resolveComponent(`${Xe}Info`),{...Ge.info,pure:Ye.value}))):null}}),pageTitle="",PageTitle=defineComponent({name:"PageTitle",setup(){const Ge=usePageData(),Ye=usePageFrontmatter(),Xe=useThemeLocaleData(),{info:at,items:ut}=usePageInfo();return()=>h$5("div",{class:"page-title"},[h$5("h1",[Xe.value.titleIcon!==!1?h$5(Icon,{icon:Ye.value.icon}):null,Ge.value.title]),h$5(PageInfo,{info:at.value,...ut.value===null?{}:{items:ut.value}}),h$5("hr")])}}),EditIcon=()=>h$5(ct$1,{name:"edit"},()=>[h$5("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),h$5("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);EditIcon.displayName="EditIcon";const NotFoundIcon=()=>h$5("svg",{xmlns:"http://www.w3.org/2000/svg",class:"not-found-icon",viewBox:"0 0 178 130",innerHTML:'<defs><linearGradient id="b" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e9e9e9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="c" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dcdcdc"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="d" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f1f1f1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="e" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dedede"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="f" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e8e8e8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="g" x1=".213" y1="1.265" x2=".846" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f5f5f5"/></linearGradient><linearGradient id="h" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c5c5c5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="i" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#acacac"/><stop offset="1" stop-color="#f2f2f2" stop-opacity=".388"/></linearGradient><clipPath id="a"><path transform="translate(744 1111)" fill="none" d="M0 0h178v130H0z"/></clipPath></defs><g transform="translate(-744 -1111)" clip-path="url(#a)"><path d="M0 10.795 36.6 0v93.779L0 104.574z" transform="translate(772.466 1122.142)" fill="url(#b)"/><path d="M-8.492 10.642-26.361-.469v93.78l17.868 11.111z" transform="translate(780.958 1122.293)" fill="url(#c)"/><path d="M-8.5 5.55 28.106-5.3 10.228-16.437l-36.6 10.845z" transform="translate(780.963 1127.438)" fill="url(#d)"/><path d="M0 10.539 35.741 0v91.56L0 102.1z" transform="translate(870.158 1123.617)" fill="url(#d)"/><path d="M-8.913 10.38-26.361-.469v91.562l17.448 10.848z" transform="translate(879.071 1123.775)" fill="url(#e)"/><path d="m-8.918 5.032 35.741-10.59L9.366-16.437-26.375-5.848z" transform="translate(879.076 1129.175)" fill="url(#d)"/><path d="M0 9.137 30.839 0v79.381L0 88.519z" transform="translate(799.678 1151.579)" fill="url(#f)"/><path d="m-11.306 8.936-15.054-9.4v79.377l15.054 9.4z" transform="translate(810.985 1151.78)" fill="url(#c)"/><path d="M-11.313 2.087 19.526-7.05 4.464-16.437-26.375-7.3z" transform="translate(810.991 1158.63)" fill="url(#g)"/><path d="M178 53H0a51.361 51.361 0 0 1 10.453-20.952 74.532 74.532 0 0 1 19.742-16.811A103.3 103.3 0 0 1 57.089 4.058a127.515 127.515 0 0 1 63.823 0 103.3 103.3 0 0 1 26.894 11.179 74.532 74.532 0 0 1 19.741 16.811A51.363 51.363 0 0 1 178 53z" transform="translate(744 1187.549)" fill="url(#h)"/><path d="m814.529 1199.586-1.272 1.212h2.3l1.2-1.212zM816.725 1194.909l-1.272 1.212h2.3l1.263-1.212zM863.284 1199.585l-1.272 1.212h2.3l1.2-1.212zM865.519 1194.9l-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"/><path d="m799.527 1191.21 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#c6c6c6"/><path d="m798.306 1192.431 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#b2b2b2"/><path d="m-27.694-19.435 10.182 14.517h4.381l-9.931-14.352h14.876v-2.606h-19.508zm13.081 6.273h4.152v-11.8h-4.152zM6.115-25.156q-4.256 0-6.457 1.5a4.8 4.8 0 0 0-2.2 4.191v9.113a4.784 4.784 0 0 0 2.212 4.2 11.511 11.511 0 0 0 6.447 1.5q4.256 0 6.457-1.489a4.786 4.786 0 0 0 2.2-4.2v-9.113a4.784 4.784 0 0 0-2.212-4.2 11.511 11.511 0 0 0-6.447-1.502zm0 2.675a5.705 5.705 0 0 1 3.328.779 2.6 2.6 0 0 1 1.074 2.24v9.113a2.607 2.607 0 0 1-1.064 2.24 5.7 5.7 0 0 1-3.338.779 5.7 5.7 0 0 1-3.338-.779 2.607 2.607 0 0 1-1.064-2.24v-9.113A2.6 2.6 0 0 1 2.788-21.7a5.705 5.705 0 0 1 3.327-.782zm14.927 3.047L31.224-4.918h4.381l-9.931-14.351H40.55v-2.606H21.043zm13.081 6.273h4.152v-11.8h-4.151z" transform="translate(826 1226.245)" opacity=".32" fill="url(#i)"/><g fill="#e6e6e6"><path d="m858.428 1169.23-1.2 1.259h4.388l1.178-1.259zM802.944 1192.187l1.288-1.375h7.143v1.375zm8.415-9.25 1.273-1.234h4.15l-1.235 1.234zm-2.855-12.469 1.198-1.259h4.367l-1.178 1.259zM861.362 1181.678l-1.27 1.3h4.188l1.236-1.3zM865.519 1190.9l-1.27 1.3h2.3l1.162-1.3zM852.838 1190.791l-1.207 1.508h8.447v-1.508z"/></g></g>'}),pageMeta="",PageMeta=defineComponent({name:"PageMeta",setup(){const Ge=useThemeLocaleData(),Ye=useEditLink(),Xe=useUpdateTime(),at=useContributors();return()=>{const{metaLocales:ut}=Ge.value;return h$5("footer",{class:"page-meta"},[Ye.value?h$5("div",{class:"meta-item edit-link"},h$5(AutoLink,{class:"label",config:Ye.value},{before:()=>h$5(EditIcon)})):null,Xe.value?h$5("div",{class:"meta-item update-time"},[h$5("span",{class:"label"},`${ut.lastUpdated}: `),h$5(ClientOnly,()=>h$5("span",{class:"info"},Xe.value))]):null,at.value&&at.value.length?h$5("div",{class:"meta-item contributors"},[h$5("span",{class:"label"},`${ut.contributors}: `),at.value.map(({email:ht,name:Bo},Ao)=>[h$5("span",{class:"contributor",title:`email: ${ht}`},Bo),Ao!==at.value.length-1?",":""])]):null])}}}),toc="",renderHeader=({title:Ge,level:Ye,slug:Xe})=>h$5(RouterLink,{to:`#${Xe}`,class:["toc-link",`level${Ye}`]},()=>Ge),renderChildren=(Ge,Ye)=>{const Xe=useRoute();return Ge.length&&Ye>0?h$5("ul",{class:"toc-list"},Ge.map(at=>[h$5("li",{class:["toc-item",{active:Ht$1(Xe,`#${at.slug}`)}]},renderHeader(at)),renderChildren(at.children,Ye-1)])):null},TOC=defineComponent({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},setup(Ge){const Ye=useRoute(),Xe=usePageData(),at=useMetaLocale(),ut=ref(),ht=Bo=>{var Ao;(Ao=ut.value)==null||Ao.scrollTo({top:Bo,behavior:"smooth"})};return onMounted(()=>{watch(()=>Ye.hash,Bo=>{if(ut.value){const Ao=document.querySelector(`#toc a.toc-link[href$="${Bo}"]`);if(!Ao)return;const{top:To,height:$o}=ut.value.getBoundingClientRect(),{top:xo,height:zo}=Ao.getBoundingClientRect();xo<To?ht(ut.value.scrollTop+xo-To):xo+zo>To+$o&&ht(ut.value.scrollTop+xo+zo-To-$o)}})}),()=>{const Bo=Ge.items.length?renderChildren(Ge.items,Ge.headerDepth):Xe.value.headers?renderChildren(Xe.value.headers,Ge.headerDepth):null;return Bo?h$5("div",{class:"toc-place-holder"},[h$5("aside",{id:"toc"},[h$5("div",{class:"toc-header"},at.value.toc),h$5("div",{class:"toc-wrapper",ref:ut},[Bo])])]):null}}}),page$1="",NormalPage=defineComponent({name:"NormalPage",setup(Ge,{slots:Ye}){const Xe=usePageFrontmatter(),{isDarkMode:at}=useDarkMode(),ut=useThemeLocaleData(),ht=computed(()=>Xe.value.toc||Xe.value.toc!==!1&&ut.value.toc!==!1);return()=>h$5("main",{class:"page",id:"main-content"},h$5(St$1("LocalEncrypt")?resolveComponent("LocalEncrypt"):wt$1,()=>{var Bo,Ao,To,$o;return[(Bo=Ye.top)==null?void 0:Bo.call(Ye),h$5(BreadCrumb),h$5(PageTitle),ht.value?h$5(TOC,{headerDepth:Xe.value.headerDepth??ut.value.headerDepth??2}):null,(Ao=Ye.contentBefore)==null?void 0:Ao.call(Ye),h$5(MarkdownContent),(To=Ye.contentAfter)==null?void 0:To.call(Ye),h$5(PageMeta),h$5(PageNav),St$1("CommentService")?h$5(resolveComponent("CommentService"),{darkmode:at.value}):null,($o=Ye.bottom)==null?void 0:$o.call(Ye)]}))}}),fadeSlideY="",FadeSlideY=defineComponent({name:"FadeSlideY",setup(Ge,{slots:Ye}){const Xe=useScrollPromise(),at=Xe.resolve,ut=Xe.pending;return()=>h$5(Transition,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:at,onBeforeLeave:ut},()=>{var ht;return(ht=Ye.default)==null?void 0:ht.call(Ye)})}}),skipLink="",SkipLink=defineComponent({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(Ge){const Ye=useRoute(),Xe=useThemeLocaleData(),at=ref(),ut=({target:ht})=>{const Bo=document.querySelector(ht.hash);if(Bo){const Ao=()=>{Bo.removeAttribute("tabindex"),Bo.removeEventListener("blur",Ao)};Bo.setAttribute("tabindex","-1"),Bo.addEventListener("blur",Ao),Bo.focus(),window.scrollTo(0,0)}};return onMounted(()=>{watch(()=>Ye.path,()=>at.value.focus())}),()=>[h$5("span",{ref:at,tabindex:"-1"}),h$5("a",{href:`#${Ge.content}`,class:"skip-link sr-only",onClick:ut},Xe.value.routeLocales.skipToContent)]}}),Layout=defineComponent({name:"Layout",setup(){const Ge=useThemeData$1(),Ye=useThemeLocaleData(),Xe=usePageData(),at=usePageFrontmatter(),ut=useMobile(),ht=computed(()=>Ye.value.blog.sidebarDisplay||Ge.value.blog.sidebarDisplay||"mobile");return()=>[h$5(SkipLink),h$5(CommonWrapper,{},{default:()=>at.value.home?h$5(HomePage):h$5(FadeSlideY,()=>h$5(NormalPage,{key:Xe.value.path})),...ht.value!=="none"?{navScreenBottom:()=>h$5(resolveComponent("BloggerInfo"))}:{},...!ut.value&&ht.value==="always"?{sidebar:()=>h$5(resolveComponent("BloggerInfo"))}:{}})]}}),notFound="",NotFound=defineComponent({name:"NotFound",setup(){const Ge=useRouteLocale(),Ye=useThemeLocaleData(),Xe=()=>{const ut=Ye.value.routeLocales.notFoundMsg;return ut[Math.floor(Math.random()*ut.length)]},{navigate:at}=useLink({to:Ye.value.home??Ge.value});return()=>[h$5(SkipLink),h$5(CommonWrapper,{noSidebar:!0},()=>h$5("main",{class:"page not-found",id:"main-content"},[h$5(NotFoundIcon),h$5("blockquote",Xe()),h$5("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},Ye.value.routeLocales.back),h$5("button",{class:"action-button",onClick:()=>at()},Ye.value.routeLocales.home)]))]}}),index="",icons={},categoryMap={category:{"/":{path:"/category/",map:{FAQ:{path:"/category/faq/",keys:["v-12af73c7","v-7446a652","v-21c66ce1","v-6f71ffde","v-73a678e3","v-0a65e4f0"]},Demo:{path:"/category/demo/",keys:["v-2b30cdfd"]},Config:{path:"/category/config/",keys:["v-02aac488","v-503ece21","v-0f8f5f1b","v-12bbba21","v-323ca559","v-1b66e7b2","v-1c692e14","v-a0f215dc","v-02278e56","v-b9a2c4f6","v-ba934fd8","v-619fe7e7","v-828165fe","v-7c2858dc","v-5c550d34","v-9f7dcc06","v-7fbc9690","v-84536260","v-2ba3e45e","v-0b9e4ed3","v-898aa0fc","v-546c3c9a","v-efc15586","v-ae3b21d6"]},Intro:{path:"/category/intro/",keys:["v-fffb8e28"]},Migration:{path:"/category/migration/",keys:["v-3916d686","v-6f1b01e0","v-3e929722"]},Tutorial:{path:"/category/tutorial/",keys:["v-27a7ceb8","v-aa7b6e28","v-777b014c","v-7498a26b","v-fd859228","v-562208f1","v-728b73e6","v-39e9e0f8","v-c410819c"]},Customize:{path:"/category/customize/",keys:["v-27a7ceb8","v-023c0720"]},Advanced:{path:"/category/advanced/",keys:["v-028a4457","v-7c5bf166","v-7676ace1","v-16256e3a","v-c60e8480","v-344ff27d","v-4458beb6"]},Cookbook:{path:"/category/cookbook/",keys:["v-023c0720","v-aa7b6e28","v-777b014c","v-7498a26b","v-fd859228","v-562208f1","v-728b73e6","v-39e9e0f8","v-c410819c","v-0de9a97b","v-e02b6c8a","v-88fe0ca6","v-0fb99f0a","v-67fbf1d0","v-7bf1e8bd","v-29c08ec6","v-442c81b9","v-ec20f3c6","v-29a6542e","v-6a308c96","v-0b17e174","v-5ec0d116","v-baab6c46"]},Markdown:{path:"/category/markdown/",keys:["v-52a450fa","v-a076c06c","v-0fb8922b","v-deb34ddc","v-76c1b4ed","v-054f84e7","v-73800222","v-11728bd3","v-00ea58e5","v-5114c46f","v-0de9a97b","v-e02b6c8a","v-0fd87922","v-af0934b0","v-39486b4f","v-200378a8","v-c0c31cbc","v-6d23928c","v-5b070b76","v-31961ea1","v-382d6af8","v-9d28f8b8","v-03860ecb","v-0d2faa28","v-7bd025e2","v-48323ec6"]},"Get Started":{path:"/category/get-started/",keys:["v-aa7b6e28","v-777b014c","v-7498a26b","v-fd859228","v-562208f1","v-728b73e6","v-39e9e0f8","v-c410819c","v-27d5cdef","v-e310b004","v-bc745cce"]},VuePress:{path:"/category/vuepress/",keys:["v-88fe0ca6","v-0fb99f0a","v-67fbf1d0","v-7bf1e8bd","v-29c08ec6","v-442c81b9","v-ec20f3c6"]},Blog:{path:"/category/blog/",keys:["v-56866cf0","v-3e812993","v-161158f8","v-4ed199fc","v-597805ce","v-30638fe4","v-6a877377"]},Feature:{path:"/category/feature/",keys:["v-35f0e4d2","v-6939a22c","v-234eb73f","v-350d824e","v-7fa906f9","v-a16232a2","v-0fe8995c","v-fe639182"]},Interface:{path:"/category/interface/",keys:["v-4d468f64","v-44df1fcd","v-3c43819e","v-17750e3e","v-2bee1214","v-9f084448"]},Layout:{path:"/category/layout/",keys:["v-37399ab9","v-3ecb3dbd","v-2a1012a5","v-7452b3a1","v-61a26d50","v-2ac053f1","v-f552fd54","v-324f7884"]}}},"/zh/":{path:"/zh/category/",map:{FAQ:{path:"/zh/category/faq/",keys:["v-96d1e490","v-53fbd901","v-3ed5e3dc","v-37ff0540","v-744449d8","v-5e6272be"]},案例:{path:"/zh/category/%E6%A1%88%E4%BE%8B/",keys:["v-518af0ae"]},配置:{path:"/zh/category/%E9%85%8D%E7%BD%AE/",keys:["v-0aa42439","v-6d02a3d0","v-2c5334ca","v-2dc13f10","v-01f3deca","v-382abd61","v-261ee236","v-19068d03","v-7aa31906","v-2e4c9314","v-7c2919f6","v-06a8e7d4","v-f5afa29c","v-42913a8d","v-67e5db3a","v-f0375b24","v-2fd9b9e7","v-451eef81","v-26c90a4d","v-6d69c442","v-00e5c873","v-b2b8c26a","v-0f67f5ee","v-189a7444"]},介绍:{path:"/zh/category/%E4%BB%8B%E7%BB%8D/",keys:["v-47357bdb"]},迁移:{path:"/zh/category/%E8%BF%81%E7%A7%BB/",keys:["v-bb799424","v-cfac8efe","v-65c28bd1"]},教程知识:{path:"/zh/category/%E6%95%99%E7%A8%8B%E7%9F%A5%E8%AF%86/",keys:["v-9ac1025a","v-1ba5d21f","v-149cfdea","v-678d822c","v-7b9763c8","v-e91f018a","v-3f9f2a41","v-351cfea4","v-7a7a1de4","v-80393c2c","v-b2994868","v-18c68b9f","v-5950c407","v-2cd77292","v-55f36785","v-dc6afd64"]},自定义:{path:"/zh/category/%E8%87%AA%E5%AE%9A%E4%B9%89/",keys:["v-9ac1025a","v-1ba5d21f"]},高级:{path:"/zh/category/%E9%AB%98%E7%BA%A7/",keys:["v-7e412488","v-8611a588","v-185e46d2","v-f445192e","v-3ab8529e","v-79fb0b6e","v-95124dd4"]},Markdown:{path:"/zh/category/markdown/",keys:["v-aa2c748e","v-d1fd9a48","v-17eef9c3","v-75078a16","v-41f6df20","v-149cfdea","v-678d822c","v-18c68b9f","v-5950c407","v-2cd77292","v-55f36785","v-dc6afd64","v-71a3ee91","v-2fc40659","v-346d913e","v-6bb523dd","v-339be72e","v-65c1eb64","v-217f6018","v-8e42815c","v-b0351fb2","v-ede287d6","v-6c0d160c","v-5de93946","v-ced808de","v-e4455092"]},快速上手:{path:"/zh/category/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/",keys:["v-9d14c54a","v-8130b56e","v-1f60fac8","v-7c625cdb","v-5c4e2dbc","v-237b57d2","v-c8955332","v-646b2561","v-22faf3de","v-a98904a6","v-0b45698a"]},基础知识:{path:"/zh/category/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/",keys:["v-9d14c54a","v-8130b56e","v-1f60fac8","v-7c625cdb","v-5c4e2dbc","v-237b57d2","v-c8955332","v-646b2561"]},教程:{path:"/zh/category/%E6%95%99%E7%A8%8B/",keys:["v-9d14c54a","v-8130b56e","v-1f60fac8","v-7c625cdb","v-5c4e2dbc","v-237b57d2","v-c8955332","v-646b2561"]},VuePress:{path:"/zh/category/vuepress/",keys:["v-7b9763c8","v-e91f018a","v-3f9f2a41","v-351cfea4","v-7a7a1de4","v-80393c2c","v-b2994868"]},博客:{path:"/zh/category/%E5%8D%9A%E5%AE%A2/",keys:["v-1a67e279","v-65b11e42","v-3aa26c75","v-56caf9ad","v-0b181c70","v-b2c64d82","v-4b810eb4"]},功能:{path:"/zh/category/%E5%8A%9F%E8%83%BD/",keys:["v-01cb6346","v-1efb7a46","v-f5cba6a4","v-023d1488","v-3d170730","v-160c00c0","v-14cf8901","v-7bf35d2e"]},界面:{path:"/zh/category/%E7%95%8C%E9%9D%A2/",keys:["v-42dc503f","v-3c11b63c","v-900b3c62","v-c284a222","v-03914a85","v-76ef440b"]},布局:{path:"/zh/category/%E5%B8%83%E5%B1%80/",keys:["v-82fb892c","v-5b8f136c","v-cc6fd058","v-e14f8ee0","v-5d4b1b02","v-45c5d8e0","v-0c9f2207","v-569048ed"]}}},"/ru/":{path:"/ru/category/",map:{FAQ:{path:"/ru/category/faq/",keys:["v-05670a76","v-7a0e01e8","v-75e54132","v-aeaf7a66","v-f500906a","v-49735169"]},Демо:{path:"/ru/category/%D0%B4%D0%B5%D0%BC%D0%BE/",keys:["v-b8ca4cfa"]},Конфиг:{path:"/ru/category/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3/",keys:["v-62fdce4a","v-b1cce5cc","v-ea7e0cbe","v-8c7f1af2","v-77297e62","v-718a815f","v-ccad9b28","v-2eb425a0","v-d8060fd0","v-198dc4ee","v-c8e4dffa","v-48f3455b","v-7d5a6c72","v-b096e354","v-227e6898","v-5d88000d","v-aee1cef0","v-2a391520","v-e45cac56","v-def9f2ea","v-71fd94c3","v-4f59cf4a","v-661b26cf"]},Вступление:{path:"/ru/category/%D0%B2%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5/",keys:["v-28fd69b4"]},Миграция:{path:"/ru/category/%D0%BC%D0%B8%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F/",keys:["v-f288f17a","v-07c05b16","v-2dff8848"]},Config:{path:"/ru/category/config/",keys:["v-bca7c3e4"]},Руководство:{path:"/ru/category/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE/",keys:["v-d3131344","v-0fe5d426","v-89c5f8d8","v-82c0a21e","v-7817bb26","v-bfadd512","v-86daff28","v-e858db9c","v-48421cec"]},Кастомизация:{path:"/ru/category/%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F/",keys:["v-d3131344","v-7d24472a"]},Продвинутый:{path:"/ru/category/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B9/",keys:["v-4c9150dd","v-8ea6e8f2"]},"Учебник с примерами":{path:"/ru/category/%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA-%D1%81-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%B0%D0%BC%D0%B8/",keys:["v-7d24472a","v-730d34b5","v-7b36bfc1","v-0fe5d426","v-89c5f8d8","v-82c0a21e","v-7817bb26","v-bfadd512","v-86daff28","v-e858db9c","v-48421cec","v-20a484e7","v-59c0ab90","v-534867d6","v-6067ebc3","v-5327a2ba","v-e398e382","v-0831d0d7","v-0db76434","v-4e419c9c","v-42f5c168","v-c02aaf60","v-f2894c3a"]},Разметка:{path:"/ru/category/%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%82%D0%BA%D0%B0/",keys:["v-730d34b5","v-7b36bfc1"]},"Начало работы":{path:"/ru/category/%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/",keys:["v-0fe5d426","v-89c5f8d8","v-82c0a21e","v-7817bb26","v-bfadd512","v-86daff28","v-e858db9c","v-48421cec","v-1eb05229","v-0cb9f2b8","v-f38856c2"]},VuePress:{path:"/ru/category/vuepress/",keys:["v-20a484e7","v-59c0ab90","v-534867d6","v-6067ebc3","v-5327a2ba","v-e398e382","v-0831d0d7"]},Продвинутые:{path:"/ru/category/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B5/",keys:["v-0c6f7be7","v-5943b418","v-eb65b274","v-21a45b83","v-6dbfd2aa"]},Блог:{path:"/ru/category/%D0%B1%D0%BB%D0%BE%D0%B3/",keys:["v-3b6886ec","v-7bdd9ae4","v-245a18fc","v-7db1a1d3","v-e9d5aad8","v-2e226366","v-27c02b31"]},Функция:{path:"/ru/category/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F/",keys:["v-75386879","v-63bb8993","v-6349d851","v-5cda8f9a","v-c6b96096","v-764dfe0c","v-77a8bb79","v-5317e1b2"]},Интерфейс:{path:"/ru/category/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81/",keys:["v-f3ee11f2","v-845a8958","v-f36ae3b8","v-01534dc4","v-173a881a","v-5ac63b96"]},Макет:{path:"/ru/category/%D0%BC%D0%B0%D0%BA%D0%B5%D1%82/",keys:["v-85e4ef12","v-316e6b42","v-39ea11db","v-1edb250a","v-1f509baa","v-6f34c0dc","v-b7de0910"]},Layout:{path:"/ru/category/layout/",keys:["v-2117da3f"]},Markdown:{path:"/ru/category/markdown/",keys:["v-b2c1b7f8","v-17d7aebd","v-db4cb5a4","v-0cd25c9e","v-3af303f5","v-10470b75","v-3022ef89","v-3a055032","v-5cd7295c","v-0681fc4e","v-47b08174","v-50bec4ff","v-7a849898","v-2792622a","v-1b745e27","v-1533ba9c","v-c6900cac","v-61c22a5c","v-a45f26f6","v-620e2af3","v-3696be1c","v-7aef86be","v-0bdb1ec8","v-3586a7cc"]}}}},tag:{"/":{path:"/tag/",map:{Config:{path:"/tag/config/",keys:["v-323ca559","v-0fb99f0a","v-ba934fd8"]},I18N:{path:"/tag/i18n/",keys:["v-619fe7e7"]},Intro:{path:"/tag/intro/",keys:["v-0de9a97b","v-88fe0ca6","v-828165fe","v-fffb8e28","v-84536260","v-30638fe4","v-e310b004","v-31961ea1"]},"Theme Config":{path:"/tag/theme-config/",keys:["v-0f8f5f1b","v-12bbba21","v-02278e56","v-3916d686","v-7c2858dc","v-5c550d34","v-9f7dcc06","v-7fbc9690","v-84536260","v-2ba3e45e","v-0b9e4ed3","v-898aa0fc","v-546c3c9a","v-efc15586","v-ae3b21d6"]},Style:{path:"/tag/style/",keys:["v-023c0720","v-3e929722","v-7c2858dc"]},Migration:{path:"/tag/migration/",keys:["v-3916d686","v-6f1b01e0","v-3e929722"]},Frontmatter:{path:"/tag/frontmatter/",keys:["v-02aac488","v-503ece21","v-323ca559","v-1b66e7b2","v-1c692e14","v-a0f215dc","v-6f1b01e0"]},Page:{path:"/tag/page/",keys:["v-29c08ec6","v-6f1b01e0","v-2ac053f1"]},"Blog Home":{path:"/tag/blog-home/",keys:["v-02aac488"]},Home:{path:"/tag/home/",keys:["v-503ece21","v-597805ce","v-7452b3a1"]},Info:{path:"/tag/info/",keys:["v-1b66e7b2"]},Layout:{path:"/tag/layout/",keys:["v-37399ab9","v-1c692e14","v-a0f215dc","v-ae3b21d6","v-597805ce","v-3ecb3dbd","v-2a1012a5","v-7452b3a1","v-61a26d50","v-2ac053f1","v-f552fd54","v-324f7884"]},Blog:{path:"/tag/blog/",keys:["v-56866cf0","v-3e812993","v-5c550d34","v-161158f8","v-4ed199fc","v-597805ce","v-30638fe4","v-6a877377"]},"Plugin Config":{path:"/tag/plugin-config/",keys:["v-02278e56","v-5c550d34","v-9f7dcc06","v-7fbc9690","v-84536260","v-2ba3e45e","v-0b9e4ed3","v-898aa0fc"]},Comment:{path:"/tag/comment/",keys:["v-9f7dcc06","v-234eb73f"]},Copyright:{path:"/tag/copyright/",keys:["v-02278e56","v-35f0e4d2"]},Feed:{path:"/tag/feed/",keys:["v-16256e3a","v-7fbc9690"]},Markdown:{path:"/tag/markdown/",keys:["v-52a450fa","v-a076c06c","v-0fb8922b","v-deb34ddc","v-76c1b4ed","v-054f84e7","v-73800222","v-11728bd3","v-5114c46f","v-0de9a97b","v-e02b6c8a","v-7bf1e8bd","v-29a6542e","v-6a308c96","v-0b17e174","v-5ec0d116","v-baab6c46","v-0fd87922","v-2ba3e45e","v-bc745cce","v-af0934b0","v-39486b4f","v-200378a8","v-c0c31cbc","v-6d23928c","v-51682a1d","v-5b070b76","v-31961ea1","v-382d6af8","v-9d28f8b8","v-03860ecb","v-0d2faa28","v-7bd025e2","v-48323ec6"]},PWA:{path:"/tag/pwa/",keys:["v-c60e8480","v-898aa0fc"]},Appearance:{path:"/tag/appearance/",keys:["v-0f8f5f1b"]},Basic:{path:"/tag/basic/",keys:["v-b9a2c4f6"]},ThemeConfig:{path:"/tag/themeconfig/",keys:["v-b9a2c4f6"]},Feature:{path:"/tag/feature/",keys:["v-35f0e4d2","v-6939a22c","v-efc15586","v-234eb73f","v-350d824e","v-7fa906f9","v-a16232a2","v-0fe8995c","v-fe639182"]},I18n:{path:"/tag/i18n/",keys:["v-12bbba21"]},Components:{path:"/tag/components/",keys:["v-27a7ceb8","v-39486b4f"]},Customize:{path:"/tag/customize/",keys:["v-27a7ceb8","v-028a4457","v-7c5bf166","v-023c0720"]},Advanced:{path:"/tag/advanced/",keys:["v-028a4457","v-7c5bf166","v-7676ace1","v-16256e3a","v-c60e8480","v-344ff27d","v-4458beb6"]},Demo:{path:"/tag/demo/",keys:["v-e02b6c8a"]},"Project Command":{path:"/tag/project-command/",keys:["v-777b014c"]},"Project Config":{path:"/tag/project-config/",keys:["v-7498a26b"]},"Project Content":{path:"/tag/project-content/",keys:["v-fd859228"]},Template:{path:"/tag/template/",keys:["v-562208f1"]},"Project Deployment":{path:"/tag/project-deployment/",keys:["v-728b73e6"]},"Setting Environment":{path:"/tag/setting-environment/",keys:["v-39e9e0f8"]},"Project Structure":{path:"/tag/project-structure/",keys:["v-c410819c"]},VuePress:{path:"/tag/vuepress/",keys:["v-88fe0ca6","v-0fb99f0a","v-67fbf1d0","v-7bf1e8bd","v-29c08ec6","v-442c81b9","v-ec20f3c6"]},"File Structure":{path:"/tag/file-structure/",keys:["v-67fbf1d0"]},Plugin:{path:"/tag/plugin/",keys:["v-442c81b9"]},Theme:{path:"/tag/theme/",keys:["v-ec20f3c6"]},SEO:{path:"/tag/seo/",keys:["v-344ff27d"]},Sitemap:{path:"/tag/sitemap/",keys:["v-4458beb6"]},Article:{path:"/tag/article/",keys:["v-161158f8"]},Encrypt:{path:"/tag/encrypt/",keys:["v-161158f8","v-7fa906f9"]},Slide:{path:"/tag/slide/",keys:["v-161158f8"]},Star:{path:"/tag/star/",keys:["v-161158f8"]},Blogger:{path:"/tag/blogger/",keys:["v-56866cf0"]},Category:{path:"/tag/category/",keys:["v-4ed199fc"]},Tag:{path:"/tag/tag/",keys:["v-4ed199fc"]},Path:{path:"/tag/path/",keys:["v-3e812993"]},Timeline:{path:"/tag/timeline/",keys:["v-6a877377"]},"Copy Code":{path:"/tag/copy-code/",keys:["v-350d824e"]},Meta:{path:"/tag/meta/",keys:["v-a16232a2"]},"Page Info":{path:"/tag/page-info/",keys:["v-0fe8995c"]},"Image Preview":{path:"/tag/image-preview/",keys:["v-fe639182"]},Search:{path:"/tag/search/",keys:["v-6939a22c"]},"Get Started":{path:"/tag/get-started/",keys:["v-27d5cdef","v-e310b004","v-bc745cce"]},Install:{path:"/tag/install/",keys:["v-27d5cdef"]},Usage:{path:"/tag/usage/",keys:["v-27d5cdef"]},A11y:{path:"/tag/a11y/",keys:["v-44df1fcd"]},Interface:{path:"/tag/interface/",keys:["v-4d468f64","v-44df1fcd","v-3c43819e","v-17750e3e","v-2bee1214","v-9f084448"]},"Code Themes":{path:"/tag/code-themes/",keys:["v-4d468f64"]},Darkmode:{path:"/tag/darkmode/",keys:["v-3c43819e"]},Icon:{path:"/tag/icon/",keys:["v-17750e3e"]},"Theme Color":{path:"/tag/theme-color/",keys:["v-9f084448"]},Breadcrumb:{path:"/tag/breadcrumb/",keys:["v-3ecb3dbd"]},Catalog:{path:"/tag/catalog/",keys:["v-37399ab9"]},Footer:{path:"/tag/footer/",keys:["v-2a1012a5"]},Navbar:{path:"/tag/navbar/",keys:["v-61a26d50"]},Sidebar:{path:"/tag/sidebar/",keys:["v-f552fd54"]},Slides:{path:"/tag/slides/",keys:["v-324f7884","v-03860ecb"]},Align:{path:"/tag/align/",keys:["v-af0934b0"]},Attributes:{path:"/tag/attributes/",keys:["v-0fb8922b"]},Chart:{path:"/tag/chart/",keys:["v-5114c46f"]},"Code Tabs":{path:"/tag/code-tabs/",keys:["v-73800222"]},Container:{path:"/tag/container/",keys:["v-200378a8"]},"Code Demo":{path:"/tag/code-demo/",keys:["v-00ea58e5","v-c0c31cbc"]},ECharts:{path:"/tag/echarts/",keys:["v-11728bd3"]},Flowchart:{path:"/tag/flowchart/",keys:["v-51682a1d"]},Footnote:{path:"/tag/footnote/",keys:["v-5b070b76"]},Image:{path:"/tag/image/",keys:["v-deb34ddc"]},"Include Files":{path:"/tag/include-files/",keys:["v-00ea58e5"]},Markup:{path:"/tag/markup/",keys:["v-382d6af8"]},Diagram:{path:"/tag/diagram/",keys:["v-9d28f8b8"]},Playground:{path:"/tag/playground/",keys:["v-52a450fa","v-a076c06c"]},Stylize:{path:"/tag/stylize/",keys:["v-76c1b4ed"]},Superscript:{path:"/tag/superscript/",keys:["v-0d2faa28"]},Subscript:{path:"/tag/subscript/",keys:["v-0d2faa28"]},Tabs:{path:"/tag/tabs/",keys:["v-054f84e7"]},"Task List":{path:"/tag/task-list/",keys:["v-7bd025e2"]},TEX:{path:"/tag/tex/",keys:["v-48323ec6"]},Emoji:{path:"/tag/emoji/",keys:["v-29a6542e","v-6a308c96","v-0b17e174","v-5ec0d116","v-baab6c46"]}}},"/zh/":{path:"/zh/tag/",map:{配置:{path:"/zh/tag/%E9%85%8D%E7%BD%AE/",keys:["v-01f3deca","v-e91f018a","v-7c2919f6"]},多语言:{path:"/zh/tag/%E5%A4%9A%E8%AF%AD%E8%A8%80/",keys:["v-2dc13f10","v-06a8e7d4"]},介绍:{path:"/zh/tag/%E4%BB%8B%E7%BB%8D/",keys:["v-149cfdea","v-7b9763c8","v-f5afa29c","v-47357bdb","v-451eef81","v-b2c64d82","v-a98904a6","v-8e42815c"]},主题配置:{path:"/zh/tag/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE/",keys:["v-2c5334ca","v-2dc13f10","v-7aa31906","v-bb799424","v-2e4c9314","v-42913a8d","v-67e5db3a","v-f0375b24","v-2fd9b9e7","v-451eef81","v-26c90a4d","v-6d69c442","v-00e5c873","v-b2b8c26a","v-0f67f5ee","v-189a7444"]},样式:{path:"/zh/tag/%E6%A0%B7%E5%BC%8F/",keys:["v-1ba5d21f","v-65c28bd1","v-42913a8d"]},迁移:{path:"/zh/tag/%E8%BF%81%E7%A7%BB/",keys:["v-bb799424","v-cfac8efe","v-65c28bd1"]},页面:{path:"/zh/tag/%E9%A1%B5%E9%9D%A2/",keys:["v-7a7a1de4","v-cfac8efe","v-45c5d8e0"]},Frontmatter:{path:"/zh/tag/frontmatter/",keys:["v-0aa42439","v-6d02a3d0","v-01f3deca","v-382abd61","v-261ee236","v-19068d03","v-cfac8efe"]},博客主页:{path:"/zh/tag/%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A1%B5/",keys:["v-0aa42439"]},主页:{path:"/zh/tag/%E4%B8%BB%E9%A1%B5/",keys:["v-6d02a3d0","v-0b181c70","v-e14f8ee0"]},信息:{path:"/zh/tag/%E4%BF%A1%E6%81%AF/",keys:["v-382abd61"]},布局:{path:"/zh/tag/%E5%B8%83%E5%B1%80/",keys:["v-82fb892c","v-261ee236","v-19068d03","v-189a7444","v-0b181c70","v-5b8f136c","v-cc6fd058","v-e14f8ee0","v-5d4b1b02","v-45c5d8e0","v-0c9f2207","v-569048ed"]},插件配置:{path:"/zh/tag/%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE/",keys:["v-7aa31906","v-67e5db3a","v-f0375b24","v-2fd9b9e7","v-451eef81","v-26c90a4d","v-00e5c873"]},博客:{path:"/zh/tag/%E5%8D%9A%E5%AE%A2/",keys:["v-1a67e279","v-65b11e42","v-67e5db3a","v-3aa26c75","v-56caf9ad","v-0b181c70","v-b2c64d82","v-4b810eb4"]},评论:{path:"/zh/tag/%E8%AF%84%E8%AE%BA/",keys:["v-f0375b24","v-f5cba6a4"]},版权信息:{path:"/zh/tag/%E7%89%88%E6%9D%83%E4%BF%A1%E6%81%AF/",keys:["v-7aa31906","v-01cb6346"]},Feed:{path:"/zh/tag/feed/",keys:["v-f445192e","v-2fd9b9e7"]},Markdown:{path:"/zh/tag/markdown/",keys:["v-aa2c748e","v-d1fd9a48","v-17eef9c3","v-4e64ed5e","v-75078a16","v-41f6df20","v-2dd47778","v-4ee4dd54","v-4f4535c0","v-149cfdea","v-678d822c","v-351cfea4","v-18c68b9f","v-5950c407","v-2cd77292","v-55f36785","v-dc6afd64","v-71a3ee91","v-26c90a4d","v-0b45698a","v-2fc40659","v-346d913e","v-6bb523dd","v-0f5676d1","v-339be72e","v-65c1eb64","v-217f6018","v-8e42815c","v-b0351fb2","v-ede287d6","v-6c0d160c","v-5de93946","v-ced808de","v-e4455092"]},插件选项:{path:"/zh/tag/%E6%8F%92%E4%BB%B6%E9%80%89%E9%A1%B9/",keys:["v-6d69c442"]},PWA:{path:"/zh/tag/pwa/",keys:["v-3ab8529e","v-00e5c873"]},外观:{path:"/zh/tag/%E5%A4%96%E8%A7%82/",keys:["v-2c5334ca"]},基础:{path:"/zh/tag/%E5%9F%BA%E7%A1%80/",keys:["v-2e4c9314"]},功能:{path:"/zh/tag/%E5%8A%9F%E8%83%BD/",keys:["v-01cb6346","v-1efb7a46","v-0f67f5ee","v-f5cba6a4","v-023d1488","v-3d170730","v-160c00c0","v-14cf8901","v-7bf35d2e"]},自定义:{path:"/zh/tag/%E8%87%AA%E5%AE%9A%E4%B9%89/",keys:["v-9ac1025a","v-7e412488","v-8611a588","v-1ba5d21f"]},组件:{path:"/zh/tag/%E7%BB%84%E4%BB%B6/",keys:["v-9ac1025a","v-346d913e"]},高级:{path:"/zh/tag/%E9%AB%98%E7%BA%A7/",keys:["v-7e412488","v-8611a588","v-185e46d2","v-f445192e","v-3ab8529e","v-79fb0b6e","v-95124dd4"]},示例:{path:"/zh/tag/%E7%A4%BA%E4%BE%8B/",keys:["v-678d822c"]},项目命令:{path:"/zh/tag/%E9%A1%B9%E7%9B%AE%E5%91%BD%E4%BB%A4/",keys:["v-8130b56e"]},配置项目:{path:"/zh/tag/%E9%85%8D%E7%BD%AE%E9%A1%B9%E7%9B%AE/",keys:["v-1f60fac8","v-646b2561"]},项目内容:{path:"/zh/tag/%E9%A1%B9%E7%9B%AE%E5%86%85%E5%AE%B9/",keys:["v-7c625cdb"]},模板:{path:"/zh/tag/%E6%A8%A1%E6%9D%BF/",keys:["v-5c4e2dbc"]},部署项目:{path:"/zh/tag/%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE/",keys:["v-237b57d2"]},准备运行环境:{path:"/zh/tag/%E5%87%86%E5%A4%87%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83/",keys:["v-c8955332"]},VuePress:{path:"/zh/tag/vuepress/",keys:["v-7b9763c8","v-e91f018a","v-3f9f2a41","v-351cfea4","v-7a7a1de4","v-80393c2c","v-b2994868"]},文件结构:{path:"/zh/tag/%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84/",keys:["v-3f9f2a41"]},插件:{path:"/zh/tag/%E6%8F%92%E4%BB%B6/",keys:["v-80393c2c"]},主题:{path:"/zh/tag/%E4%B8%BB%E9%A2%98/",keys:["v-b2994868"]},SEO:{path:"/zh/tag/seo/",keys:["v-79fb0b6e"]},Sitemap:{path:"/zh/tag/sitemap/",keys:["v-95124dd4"]},文章:{path:"/zh/tag/%E6%96%87%E7%AB%A0/",keys:["v-3aa26c75"]},加密:{path:"/zh/tag/%E5%8A%A0%E5%AF%86/",keys:["v-3aa26c75","v-3d170730"]},幻灯片:{path:"/zh/tag/%E5%B9%BB%E7%81%AF%E7%89%87/",keys:["v-3aa26c75","v-569048ed","v-6c0d160c"]},收藏:{path:"/zh/tag/%E6%94%B6%E8%97%8F/",keys:["v-3aa26c75"]},博主信息:{path:"/zh/tag/%E5%8D%9A%E4%B8%BB%E4%BF%A1%E6%81%AF/",keys:["v-1a67e279"]},分类:{path:"/zh/tag/%E5%88%86%E7%B1%BB/",keys:["v-56caf9ad"]},标签:{path:"/zh/tag/%E6%A0%87%E7%AD%BE/",keys:["v-56caf9ad"]},路径:{path:"/zh/tag/%E8%B7%AF%E5%BE%84/",keys:["v-65b11e42"]},时间线:{path:"/zh/tag/%E6%97%B6%E9%97%B4%E7%BA%BF/",keys:["v-4b810eb4"]},代码复制:{path:"/zh/tag/%E4%BB%A3%E7%A0%81%E5%A4%8D%E5%88%B6/",keys:["v-023d1488"]},元数据:{path:"/zh/tag/%E5%85%83%E6%95%B0%E6%8D%AE/",keys:["v-160c00c0"]},页面信息:{path:"/zh/tag/%E9%A1%B5%E9%9D%A2%E4%BF%A1%E6%81%AF/",keys:["v-14cf8901"]},图片浏览:{path:"/zh/tag/%E5%9B%BE%E7%89%87%E6%B5%8F%E8%A7%88/",keys:["v-7bf35d2e"]},搜索:{path:"/zh/tag/%E6%90%9C%E7%B4%A2/",keys:["v-1efb7a46"]},快速上手:{path:"/zh/tag/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/",keys:["v-22faf3de","v-a98904a6","v-0b45698a"]},安装:{path:"/zh/tag/%E5%AE%89%E8%A3%85/",keys:["v-22faf3de"]},使用:{path:"/zh/tag/%E4%BD%BF%E7%94%A8/",keys:["v-22faf3de"]},界面:{path:"/zh/tag/%E7%95%8C%E9%9D%A2/",keys:["v-42dc503f","v-3c11b63c","v-900b3c62","v-c284a222","v-03914a85","v-76ef440b"]},无障碍:{path:"/zh/tag/%E6%97%A0%E9%9A%9C%E7%A2%8D/",keys:["v-3c11b63c"]},代码主题:{path:"/zh/tag/%E4%BB%A3%E7%A0%81%E4%B8%BB%E9%A2%98/",keys:["v-42dc503f"]},深色模式:{path:"/zh/tag/%E6%B7%B1%E8%89%B2%E6%A8%A1%E5%BC%8F/",keys:["v-900b3c62"]},图标:{path:"/zh/tag/%E5%9B%BE%E6%A0%87/",keys:["v-c284a222"]},主题色:{path:"/zh/tag/%E4%B8%BB%E9%A2%98%E8%89%B2/",keys:["v-76ef440b"]},路径导航:{path:"/zh/tag/%E8%B7%AF%E5%BE%84%E5%AF%BC%E8%88%AA/",keys:["v-5b8f136c"]},目录:{path:"/zh/tag/%E7%9B%AE%E5%BD%95/",keys:["v-82fb892c"]},页脚:{path:"/zh/tag/%E9%A1%B5%E8%84%9A/",keys:["v-cc6fd058"]},导航栏:{path:"/zh/tag/%E5%AF%BC%E8%88%AA%E6%A0%8F/",keys:["v-5d4b1b02"]},侧边栏:{path:"/zh/tag/%E4%BE%A7%E8%BE%B9%E6%A0%8F/",keys:["v-0c9f2207"]},对齐:{path:"/zh/tag/%E5%AF%B9%E9%BD%90/",keys:["v-2fc40659"]},属性:{path:"/zh/tag/%E5%B1%9E%E6%80%A7/",keys:["v-d1fd9a48"]},图表:{path:"/zh/tag/%E5%9B%BE%E8%A1%A8/",keys:["v-4f4535c0","v-ede287d6"]},代码组:{path:"/zh/tag/%E4%BB%A3%E7%A0%81%E7%BB%84/",keys:["v-41f6df20"]},容器:{path:"/zh/tag/%E5%AE%B9%E5%99%A8/",keys:["v-6bb523dd"]},代码演示:{path:"/zh/tag/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/",keys:["v-0f5676d1"]},ECharts:{path:"/zh/tag/echarts/",keys:["v-2dd47778"]},流程图:{path:"/zh/tag/%E6%B5%81%E7%A8%8B%E5%9B%BE/",keys:["v-65c1eb64"]},脚注:{path:"/zh/tag/%E8%84%9A%E6%B3%A8/",keys:["v-217f6018"]},图片:{path:"/zh/tag/%E5%9B%BE%E7%89%87/",keys:["v-17eef9c3"]},导入文件:{path:"/zh/tag/%E5%AF%BC%E5%85%A5%E6%96%87%E4%BB%B6/",keys:["v-4ee4dd54"]},标记:{path:"/zh/tag/%E6%A0%87%E8%AE%B0/",keys:["v-b0351fb2"]},交互演示:{path:"/zh/tag/%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA/",keys:["v-aa2c748e"]},样式化:{path:"/zh/tag/%E6%A0%B7%E5%BC%8F%E5%8C%96/",keys:["v-4e64ed5e"]},上下角标:{path:"/zh/tag/%E4%B8%8A%E4%B8%8B%E8%A7%92%E6%A0%87/",keys:["v-5de93946"]},选项卡:{path:"/zh/tag/%E9%80%89%E9%A1%B9%E5%8D%A1/",keys:["v-75078a16"]},任务列表:{path:"/zh/tag/%E4%BB%BB%E5%8A%A1%E5%88%97%E8%A1%A8/",keys:["v-ced808de"]},TEX:{path:"/zh/tag/tex/",keys:["v-e4455092"]},Emoji:{path:"/zh/tag/emoji/",keys:["v-18c68b9f","v-5950c407","v-2cd77292","v-55f36785","v-dc6afd64"]}}},"/ru/":{path:"/ru/tag/",map:{Конфиг:{path:"/ru/tag/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3/",keys:["v-b1cce5cc","v-718a815f","v-59c0ab90"]},I18N:{path:"/ru/tag/i18n/",keys:["v-ea7e0cbe"]},Введение:{path:"/ru/tag/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5/",keys:["v-8c7f1af2","v-b096e354","v-e9d5aad8"]},"Конфиг темы":{path:"/ru/tag/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3-%D1%82%D0%B5%D0%BC%D1%8B/",keys:["v-77297e62","v-f288f17a","v-198dc4ee","v-c8e4dffa","v-48f3455b","v-7d5a6c72","v-b096e354","v-227e6898","v-5d88000d","v-aee1cef0","v-2a391520","v-e45cac56","v-71fd94c3","v-4f59cf4a","v-661b26cf"]},Стиль:{path:"/ru/tag/%D1%81%D1%82%D0%B8%D0%BB%D1%8C/",keys:["v-77297e62","v-2dff8848","v-7d24472a"]},Вступление:{path:"/ru/tag/%D0%B2%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5/",keys:["v-28fd69b4","v-730d34b5","v-20a484e7","v-0cb9f2b8","v-1b745e27"]},Миграция:{path:"/ru/tag/%D0%BC%D0%B8%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F/",keys:["v-f288f17a","v-07c05b16","v-2dff8848"]},Frontmatter:{path:"/ru/tag/frontmatter/",keys:["v-bca7c3e4","v-62fdce4a","v-07c05b16","v-718a815f","v-ccad9b28","v-2eb425a0","v-d8060fd0"]},Страница:{path:"/ru/tag/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0/",keys:["v-07c05b16","v-5327a2ba","v-1f509baa"]},"Главная блога":{path:"/ru/tag/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-%D0%B1%D0%BB%D0%BE%D0%B3%D0%B0/",keys:["v-bca7c3e4"]},Главная:{path:"/ru/tag/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F/",keys:["v-62fdce4a","v-7db1a1d3","v-39ea11db"]},Инфо:{path:"/ru/tag/%D0%B8%D0%BD%D1%84%D0%BE/",keys:["v-ccad9b28"]},Макет:{path:"/ru/tag/%D0%BC%D0%B0%D0%BA%D0%B5%D1%82/",keys:["v-2eb425a0","v-661b26cf","v-7db1a1d3","v-85e4ef12","v-316e6b42","v-39ea11db","v-1edb250a","v-1f509baa","v-6f34c0dc","v-b7de0910"]},Плагин:{path:"/ru/tag/%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD/",keys:["v-d8060fd0","v-e398e382"]},Блог:{path:"/ru/tag/%D0%B1%D0%BB%D0%BE%D0%B3/",keys:["v-198dc4ee","v-3b6886ec","v-7bdd9ae4","v-245a18fc","v-7db1a1d3","v-e9d5aad8","v-2e226366","v-27c02b31"]},"Конфигурация плагина":{path:"/ru/tag/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0/",keys:["v-198dc4ee","v-c8e4dffa","v-48f3455b","v-7d5a6c72","v-b096e354","v-227e6898","v-5d88000d","v-aee1cef0"]},Комментарий:{path:"/ru/tag/%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B9/",keys:["v-c8e4dffa","v-75386879"]},"Авторские права":{path:"/ru/tag/%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B0/",keys:["v-48f3455b"]},Канал:{path:"/ru/tag/%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB/",keys:["v-7d5a6c72","v-5943b418"]},Поток:{path:"/ru/tag/%D0%BF%D0%BE%D1%82%D0%BE%D0%BA/",keys:["v-7d5a6c72"]},Markdown:{path:"/ru/tag/markdown/",keys:["v-17d7aebd","v-227e6898","v-f38856c2","v-db4cb5a4","v-0cd25c9e","v-3af303f5","v-10470b75","v-3022ef89","v-3a055032","v-5cd7295c","v-0681fc4e","v-47b08174","v-c92192ba","v-50bec4ff","v-7a849898","v-1b745e27","v-1533ba9c","v-c6900cac","v-61c22a5c","v-a45f26f6","v-620e2af3","v-3696be1c","v-7aef86be","v-0bdb1ec8","v-3586a7cc"]},Разметка:{path:"/ru/tag/%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%82%D0%BA%D0%B0/",keys:["v-227e6898","v-730d34b5","v-7b36bfc1","v-6067ebc3","v-0db76434","v-4e419c9c","v-42f5c168","v-c02aaf60","v-f2894c3a"]},PWA:{path:"/ru/tag/pwa/",keys:["v-aee1cef0","v-eb65b274"]},"Внешний вид":{path:"/ru/tag/%D0%B2%D0%BD%D0%B5%D1%88%D0%BD%D0%B8%D0%B9-%D0%B2%D0%B8%D0%B4/",keys:["v-e45cac56"]},Основы:{path:"/ru/tag/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B/",keys:["v-def9f2ea"]},ThemeConfig:{path:"/ru/tag/themeconfig/",keys:["v-def9f2ea"]},Функция:{path:"/ru/tag/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F/",keys:["v-71fd94c3","v-75386879","v-63bb8993","v-6349d851","v-5cda8f9a","v-c6b96096","v-764dfe0c","v-77a8bb79","v-5317e1b2"]},I18n:{path:"/ru/tag/i18n/",keys:["v-4f59cf4a"]},Мультиязычность:{path:"/ru/tag/%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%8F%D0%B7%D1%8B%D1%87%D0%BD%D0%BE%D1%81%D1%82%D1%8C/",keys:["v-4f59cf4a"]},Компоненты:{path:"/ru/tag/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B/",keys:["v-d3131344","v-3022ef89"]},Кастомизация:{path:"/ru/tag/%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F/",keys:["v-d3131344","v-4c9150dd","v-8ea6e8f2","v-7d24472a"]},Продвинутый:{path:"/ru/tag/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B9/",keys:["v-4c9150dd","v-8ea6e8f2"]},Демо:{path:"/ru/tag/%D0%B4%D0%B5%D0%BC%D0%BE/",keys:["v-7b36bfc1"]},"Команды проекта":{path:"/ru/tag/%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/",keys:["v-89c5f8d8"]},"Конфиг проекта":{path:"/ru/tag/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/",keys:["v-82c0a21e"]},"Контент проекта":{path:"/ru/tag/%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/",keys:["v-7817bb26"]},Шаблон:{path:"/ru/tag/%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD/",keys:["v-bfadd512"]},"Деплой проекта":{path:"/ru/tag/%D0%B4%D0%B5%D0%BF%D0%BB%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/",keys:["v-86daff28"]},"Настройка среды":{path:"/ru/tag/%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D1%81%D1%80%D0%B5%D0%B4%D1%8B/",keys:["v-e858db9c"]},"Структура проекта":{path:"/ru/tag/%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/",keys:["v-48421cec"]},VuePress:{path:"/ru/tag/vuepress/",keys:["v-20a484e7","v-59c0ab90","v-534867d6","v-6067ebc3","v-5327a2ba","v-e398e382","v-0831d0d7"]},"Структура файла":{path:"/ru/tag/%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0/",keys:["v-534867d6"]},Тема:{path:"/ru/tag/%D1%82%D0%B5%D0%BC%D0%B0/",keys:["v-0831d0d7"]},Продвинутые:{path:"/ru/tag/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B5/",keys:["v-0c6f7be7","v-5943b418","v-eb65b274","v-21a45b83","v-6dbfd2aa"]},СЕО:{path:"/ru/tag/%D1%81%D0%B5%D0%BE/",keys:["v-21a45b83"]},SEO:{path:"/ru/tag/seo/",keys:["v-21a45b83"]},"Карта сайта":{path:"/ru/tag/%D0%BA%D0%B0%D1%80%D1%82%D0%B0-%D1%81%D0%B0%D0%B9%D1%82%D0%B0/",keys:["v-6dbfd2aa"]},Статья:{path:"/ru/tag/%D1%81%D1%82%D0%B0%D1%82%D1%8C%D1%8F/",keys:["v-3b6886ec"]},Шифрование:{path:"/ru/tag/%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/",keys:["v-3b6886ec"]},Слайд:{path:"/ru/tag/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4/",keys:["v-3b6886ec"]},Избранное:{path:"/ru/tag/%D0%B8%D0%B7%D0%B1%D1%80%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5/",keys:["v-3b6886ec"]},Блогер:{path:"/ru/tag/%D0%B1%D0%BB%D0%BE%D0%B3%D0%B5%D1%80/",keys:["v-7bdd9ae4"]},Категория:{path:"/ru/tag/%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F/",keys:["v-245a18fc"]},Тег:{path:"/ru/tag/%D1%82%D0%B5%D0%B3/",keys:["v-245a18fc"]},Путь:{path:"/ru/tag/%D0%BF%D1%83%D1%82%D1%8C/",keys:["v-2e226366"]},Таймлайн:{path:"/ru/tag/%D1%82%D0%B0%D0%B9%D0%BC%D0%BB%D0%B0%D0%B9%D0%BD/",keys:["v-27c02b31"]},"Копирование кода":{path:"/ru/tag/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%B4%D0%B0/",keys:["v-63bb8993"]},"Информация о копирайтах":{path:"/ru/tag/%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F-%D0%BE-%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%B0%D0%B9%D1%82%D0%B0%D1%85/",keys:["v-6349d851"]},Шифровать:{path:"/ru/tag/%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C/",keys:["v-5cda8f9a"]},Мета:{path:"/ru/tag/%D0%BC%D0%B5%D1%82%D0%B0/",keys:["v-c6b96096"]},"Информация о странице":{path:"/ru/tag/%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F-%D0%BE-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B5/",keys:["v-764dfe0c"]},"Превью изображения":{path:"/ru/tag/%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/",keys:["v-77a8bb79"]},Поиск:{path:"/ru/tag/%D0%BF%D0%BE%D0%B8%D1%81%D0%BA/",keys:["v-5317e1b2"]},"Начало работы":{path:"/ru/tag/%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/",keys:["v-1eb05229","v-0cb9f2b8","v-f38856c2"]},Установка:{path:"/ru/tag/%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0/",keys:["v-1eb05229"]},Использование:{path:"/ru/tag/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/",keys:["v-1eb05229"]},A11y:{path:"/ru/tag/a11y/",keys:["v-f3ee11f2"]},Интерфейс:{path:"/ru/tag/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81/",keys:["v-f3ee11f2","v-845a8958","v-f36ae3b8","v-01534dc4","v-173a881a","v-5ac63b96"]},"Темы кода":{path:"/ru/tag/%D1%82%D0%B5%D0%BC%D1%8B-%D0%BA%D0%BE%D0%B4%D0%B0/",keys:["v-845a8958"]},"Темный режим":{path:"/ru/tag/%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC/",keys:["v-f36ae3b8"]},Иконка:{path:"/ru/tag/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0/",keys:["v-01534dc4"]},"Цвет темы":{path:"/ru/tag/%D1%86%D0%B2%D0%B5%D1%82-%D1%82%D0%B5%D0%BC%D1%8B/",keys:["v-5ac63b96"]},"Хлебные крошки":{path:"/ru/tag/%D1%85%D0%BB%D0%B5%D0%B1%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B8/",keys:["v-85e4ef12"]},Catalog:{path:"/ru/tag/catalog/",keys:["v-2117da3f"]},Layout:{path:"/ru/tag/layout/",keys:["v-2117da3f"]},Футер:{path:"/ru/tag/%D1%84%D1%83%D1%82%D0%B5%D1%80/",keys:["v-316e6b42"]},"Панель навигации":{path:"/ru/tag/%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D1%8C-%D0%BD%D0%B0%D0%B2%D0%B8%D0%B3%D0%B0%D1%86%D0%B8%D0%B8/",keys:["v-1edb250a"]},"Боковая панель":{path:"/ru/tag/%D0%B1%D0%BE%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D1%8C/",keys:["v-6f34c0dc"]},Слайды:{path:"/ru/tag/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D1%8B/",keys:["v-b7de0910","v-a45f26f6"]},Выравнивание:{path:"/ru/tag/%D0%B2%D1%8B%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/",keys:["v-db4cb5a4"]},Атрибуты:{path:"/ru/tag/%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D1%8B/",keys:["v-0cd25c9e"]},График:{path:"/ru/tag/%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA/",keys:["v-3af303f5"]},"Вкладки кода":{path:"/ru/tag/%D0%B2%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8-%D0%BA%D0%BE%D0%B4%D0%B0/",keys:["v-10470b75"]},Контейнер:{path:"/ru/tag/%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80/",keys:["v-3a055032"]},"Демонстрация кода":{path:"/ru/tag/%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%B4%D0%B0/",keys:["v-5cd7295c","v-2792622a"]},ECharts:{path:"/ru/tag/echarts/",keys:["v-0681fc4e"]},Flowchart:{path:"/ru/tag/flowchart/",keys:["v-c92192ba"]},Сноска:{path:"/ru/tag/%D1%81%D0%BD%D0%BE%D1%81%D0%BA%D0%B0/",keys:["v-50bec4ff"]},Изображение:{path:"/ru/tag/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5/",keys:["v-7a849898"]},"Включение файлов":{path:"/ru/tag/%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2/",keys:["v-2792622a"]},Выделение:{path:"/ru/tag/%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5/",keys:["v-b2c1b7f8","v-1533ba9c"]},Диаграмма:{path:"/ru/tag/%D0%B4%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0/",keys:["v-c6900cac"]},Playground:{path:"/ru/tag/playground/",keys:["v-b2c1b7f8","v-17d7aebd"]},Стилизация:{path:"/ru/tag/%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F/",keys:["v-620e2af3"]},"Верхний индекс":{path:"/ru/tag/%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B8%D0%B9-%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81/",keys:["v-3696be1c"]},"Нижний индекс":{path:"/ru/tag/%D0%BD%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9-%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81/",keys:["v-3696be1c"]},Вкладки:{path:"/ru/tag/%D0%B2%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8/",keys:["v-7aef86be"]},"Список заданий":{path:"/ru/tag/%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B9/",keys:["v-0bdb1ec8"]},TEX:{path:"/ru/tag/tex/",keys:["v-3586a7cc"]},Эмодзи:{path:"/ru/tag/%D1%8D%D0%BC%D0%BE%D0%B4%D0%B7%D0%B8/",keys:["v-0db76434","v-4e419c9c","v-42f5c168","v-c02aaf60","v-f2894c3a"]}}}}},typeMap={article:{"/":{path:"/article/",keys:["v-37399ab9","v-02aac488","v-503ece21","v-52a450fa","v-a076c06c","v-0fb8922b","v-deb34ddc","v-76c1b4ed","v-24e9d4ff","v-054f84e7","v-73800222","v-0f8f5f1b","v-11728bd3","v-00ea58e5","v-12bbba21","v-12af73c7","v-7446a652","v-21c66ce1","v-6f71ffde","v-73a678e3","v-323ca559","v-1b66e7b2","v-1c692e14","v-a0f215dc","v-02278e56","v-35f0e4d2","v-27a7ceb8","v-028a4457","v-7c5bf166","v-023c0720","v-aa7b6e28","v-777b014c","v-7498a26b","v-fd859228","v-562208f1","v-728b73e6","v-39e9e0f8","v-c410819c","v-2b30cdfd","v-5114c46f","v-0de9a97b","v-e02b6c8a","v-88fe0ca6","v-0fb99f0a","v-67fbf1d0","v-7bf1e8bd","v-29c08ec6","v-442c81b9","v-ec20f3c6","v-5572e9e4","v-29a6542e","v-6a308c96","v-0b17e174","v-5ec0d116","v-baab6c46","v-0fd87922","v-0280531f","v-4d468f64","v-6939a22c","v-7676ace1","v-16256e3a","v-c60e8480","v-344ff27d","v-4458beb6","v-acb2d44c","v-3916d686","v-6f1b01e0","v-3e929722","v-b9a2c4f6","v-56866cf0","v-3e812993","v-395f80a3","v-ce159204","v-0a65e4f0","v-ba934fd8","v-619fe7e7","v-828165fe","v-7c2858dc","v-fffb8e28","v-5c550d34","v-9f7dcc06","v-7fbc9690","v-84536260","v-2ba3e45e","v-0b9e4ed3","v-898aa0fc","v-546c3c9a","v-efc15586","v-ae3b21d6","v-58f03f61","v-161158f8","v-4ed199fc","v-597805ce","v-30638fe4","v-6a877377","v-17e51e36","v-234eb73f","v-350d824e","v-7fa906f9","v-a16232a2","v-0fe8995c","v-fe639182","v-0490495e","v-27d5cdef","v-e310b004","v-bc745cce","v-5fad87fc","v-44df1fcd","v-3c43819e","v-17750e3e","v-2bee1214","v-9f084448","v-46aee04e","v-3ecb3dbd","v-2a1012a5","v-7452b3a1","v-61a26d50","v-2ac053f1","v-f552fd54","v-324f7884","v-6ef8b1b4","v-af0934b0","v-39486b4f","v-200378a8","v-c0c31cbc","v-6d23928c","v-51682a1d","v-5b070b76","v-31961ea1","v-382d6af8","v-9d28f8b8","v-03860ecb","v-0d2faa28","v-7bd025e2","v-48323ec6"]},"/zh/":{path:"/zh/article/",keys:["v-82fb892c","v-0aa42439","v-6d02a3d0","v-643f241c","v-aa2c748e","v-d1fd9a48","v-17eef9c3","v-4e64ed5e","v-d6bc4ba4","v-75078a16","v-41f6df20","v-2c5334ca","v-2dd47778","v-4ee4dd54","v-2dc13f10","v-96d1e490","v-53fbd901","v-3ed5e3dc","v-37ff0540","v-744449d8","v-01f3deca","v-382abd61","v-261ee236","v-19068d03","v-7aa31906","v-01cb6346","v-9ac1025a","v-7e412488","v-8611a588","v-1ba5d21f","v-9d14c54a","v-8130b56e","v-1f60fac8","v-7c625cdb","v-5c4e2dbc","v-237b57d2","v-c8955332","v-646b2561","v-518af0ae","v-4f4535c0","v-149cfdea","v-678d822c","v-7b9763c8","v-e91f018a","v-3f9f2a41","v-351cfea4","v-7a7a1de4","v-80393c2c","v-b2994868","v-75aa21da","v-18c68b9f","v-5950c407","v-2cd77292","v-55f36785","v-dc6afd64","v-71a3ee91","v-ec6e1860","v-42dc503f","v-1efb7a46","v-185e46d2","v-f445192e","v-3ab8529e","v-79fb0b6e","v-95124dd4","v-4e90c949","v-bb799424","v-cfac8efe","v-65c28bd1","v-2e4c9314","v-1a67e279","v-65b11e42","v-e4abca26","v-5e6272be","v-7c2919f6","v-06a8e7d4","v-f5afa29c","v-42913a8d","v-47357bdb","v-4971cad8","v-67e5db3a","v-f0375b24","v-2fd9b9e7","v-451eef81","v-26c90a4d","v-6d69c442","v-00e5c873","v-b2b8c26a","v-0f67f5ee","v-189a7444","v-514c79d2","v-3aa26c75","v-56caf9ad","v-0b181c70","v-b2c64d82","v-4b810eb4","v-2e7b5658","v-f5cba6a4","v-023d1488","v-3d170730","v-160c00c0","v-14cf8901","v-7bf35d2e","v-046b2fc0","v-22faf3de","v-a98904a6","v-0b45698a","v-6b34e031","v-3c11b63c","v-900b3c62","v-c284a222","v-03914a85","v-76ef440b","v-2edff20a","v-5b8f136c","v-cc6fd058","v-e14f8ee0","v-5d4b1b02","v-45c5d8e0","v-0c9f2207","v-569048ed","v-10e04ba5","v-2fc40659","v-346d913e","v-6bb523dd","v-0f5676d1","v-339be72e","v-65c1eb64","v-217f6018","v-8e42815c","v-b0351fb2","v-ede287d6","v-6c0d160c","v-5de93946","v-ced808de","v-e4455092"]},"/ru/":{path:"/ru/article/",keys:["v-2117da3f","v-bca7c3e4","v-62fdce4a","v-b2c1b7f8","v-17d7aebd","v-7cc36f38","v-05670a76","v-b8ca4cfa","v-b1cce5cc","v-ea7e0cbe","v-8c7f1af2","v-77297e62","v-7a0e01e8","v-75e54132","v-aeaf7a66","v-f500906a","v-49735169","v-28fd69b4","v-3e7dfb14","v-f288f17a","v-3bbae68e","v-07c05b16","v-2dff8848","v-718a815f","v-ccad9b28","v-2eb425a0","v-d8060fd0","v-614f60ae","v-198dc4ee","v-c8e4dffa","v-48f3455b","v-7d5a6c72","v-b096e354","v-227e6898","v-5d88000d","v-aee1cef0","v-2a391520","v-e45cac56","v-def9f2ea","v-71fd94c3","v-4f59cf4a","v-661b26cf","v-d3131344","v-4c9150dd","v-8ea6e8f2","v-7d24472a","v-730d34b5","v-7b36bfc1","v-0fe5d426","v-89c5f8d8","v-82c0a21e","v-7817bb26","v-bfadd512","v-86daff28","v-e858db9c","v-48421cec","v-20a484e7","v-59c0ab90","v-534867d6","v-6067ebc3","v-5327a2ba","v-e398e382","v-0831d0d7","v-0c6f7be7","v-5943b418","v-eb65b274","v-21a45b83","v-6dbfd2aa","v-5f058167","v-3b6886ec","v-7bdd9ae4","v-245a18fc","v-7db1a1d3","v-e9d5aad8","v-2e226366","v-27c02b31","v-5048adc2","v-75386879","v-63bb8993","v-6349d851","v-5cda8f9a","v-c6b96096","v-764dfe0c","v-77a8bb79","v-5317e1b2","v-62db668b","v-1eb05229","v-0cb9f2b8","v-f38856c2","v-0d6b6488","v-f3ee11f2","v-845a8958","v-f36ae3b8","v-01534dc4","v-173a881a","v-2742dab6","v-5ac63b96","v-9b152f42","v-85e4ef12","v-316e6b42","v-39ea11db","v-1edb250a","v-1f509baa","v-6f34c0dc","v-b7de0910","v-04f180ba","v-db4cb5a4","v-0cd25c9e","v-3af303f5","v-10470b75","v-3022ef89","v-3a055032","v-5cd7295c","v-0681fc4e","v-47b08174","v-c92192ba","v-50bec4ff","v-7a849898","v-2792622a","v-1b745e27","v-1533ba9c","v-c6900cac","v-61c22a5c","v-a45f26f6","v-620e2af3","v-3696be1c","v-7aef86be","v-0bdb1ec8","v-3586a7cc","v-12aba19e","v-0db76434","v-4e419c9c","v-42f5c168","v-c02aaf60","v-f2894c3a"]}},star:{"/":{path:"/star/",keys:[]},"/zh/":{path:"/zh/star/",keys:[]},"/ru/":{path:"/ru/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-37399ab9","v-02aac488","v-503ece21","v-52a450fa","v-a076c06c","v-0fb8922b","v-deb34ddc","v-76c1b4ed","v-24e9d4ff","v-054f84e7","v-73800222","v-0f8f5f1b","v-11728bd3","v-00ea58e5","v-12bbba21","v-12af73c7","v-7446a652","v-21c66ce1","v-6f71ffde","v-73a678e3","v-323ca559","v-1b66e7b2","v-1c692e14","v-a0f215dc","v-02278e56","v-35f0e4d2","v-27a7ceb8","v-028a4457","v-7c5bf166","v-023c0720","v-aa7b6e28","v-777b014c","v-7498a26b","v-fd859228","v-562208f1","v-728b73e6","v-39e9e0f8","v-c410819c","v-2b30cdfd","v-5114c46f","v-0de9a97b","v-e02b6c8a","v-88fe0ca6","v-0fb99f0a","v-67fbf1d0","v-7bf1e8bd","v-29c08ec6","v-442c81b9","v-ec20f3c6","v-5572e9e4","v-29a6542e","v-6a308c96","v-0b17e174","v-5ec0d116","v-baab6c46","v-0fd87922","v-0280531f","v-4d468f64","v-6939a22c","v-7676ace1","v-16256e3a","v-c60e8480","v-344ff27d","v-4458beb6","v-acb2d44c","v-3916d686","v-6f1b01e0","v-3e929722","v-b9a2c4f6","v-56866cf0","v-3e812993","v-395f80a3","v-ce159204","v-0a65e4f0","v-ba934fd8","v-619fe7e7","v-828165fe","v-7c2858dc","v-fffb8e28","v-5c550d34","v-9f7dcc06","v-7fbc9690","v-84536260","v-2ba3e45e","v-0b9e4ed3","v-898aa0fc","v-546c3c9a","v-efc15586","v-ae3b21d6","v-58f03f61","v-161158f8","v-4ed199fc","v-597805ce","v-30638fe4","v-6a877377","v-17e51e36","v-234eb73f","v-350d824e","v-7fa906f9","v-a16232a2","v-0fe8995c","v-fe639182","v-0490495e","v-27d5cdef","v-e310b004","v-bc745cce","v-5fad87fc","v-44df1fcd","v-3c43819e","v-17750e3e","v-2bee1214","v-9f084448","v-46aee04e","v-3ecb3dbd","v-2a1012a5","v-7452b3a1","v-61a26d50","v-2ac053f1","v-f552fd54","v-324f7884","v-6ef8b1b4","v-af0934b0","v-39486b4f","v-200378a8","v-c0c31cbc","v-6d23928c","v-51682a1d","v-5b070b76","v-31961ea1","v-382d6af8","v-9d28f8b8","v-03860ecb","v-0d2faa28","v-7bd025e2","v-48323ec6"]},"/zh/":{path:"/zh/timeline/",keys:["v-82fb892c","v-0aa42439","v-6d02a3d0","v-643f241c","v-aa2c748e","v-d1fd9a48","v-17eef9c3","v-4e64ed5e","v-d6bc4ba4","v-75078a16","v-41f6df20","v-2c5334ca","v-2dd47778","v-4ee4dd54","v-2dc13f10","v-96d1e490","v-53fbd901","v-3ed5e3dc","v-37ff0540","v-744449d8","v-01f3deca","v-382abd61","v-261ee236","v-19068d03","v-7aa31906","v-01cb6346","v-9ac1025a","v-7e412488","v-8611a588","v-1ba5d21f","v-9d14c54a","v-8130b56e","v-1f60fac8","v-7c625cdb","v-5c4e2dbc","v-237b57d2","v-c8955332","v-646b2561","v-518af0ae","v-4f4535c0","v-149cfdea","v-678d822c","v-7b9763c8","v-e91f018a","v-3f9f2a41","v-351cfea4","v-7a7a1de4","v-80393c2c","v-b2994868","v-75aa21da","v-18c68b9f","v-5950c407","v-2cd77292","v-55f36785","v-dc6afd64","v-71a3ee91","v-ec6e1860","v-42dc503f","v-1efb7a46","v-185e46d2","v-f445192e","v-3ab8529e","v-79fb0b6e","v-95124dd4","v-4e90c949","v-bb799424","v-cfac8efe","v-65c28bd1","v-2e4c9314","v-1a67e279","v-65b11e42","v-e4abca26","v-5e6272be","v-7c2919f6","v-06a8e7d4","v-f5afa29c","v-42913a8d","v-47357bdb","v-4971cad8","v-67e5db3a","v-f0375b24","v-2fd9b9e7","v-451eef81","v-26c90a4d","v-6d69c442","v-00e5c873","v-b2b8c26a","v-0f67f5ee","v-189a7444","v-514c79d2","v-3aa26c75","v-56caf9ad","v-0b181c70","v-b2c64d82","v-4b810eb4","v-2e7b5658","v-f5cba6a4","v-023d1488","v-3d170730","v-160c00c0","v-14cf8901","v-7bf35d2e","v-046b2fc0","v-22faf3de","v-a98904a6","v-0b45698a","v-6b34e031","v-3c11b63c","v-900b3c62","v-c284a222","v-03914a85","v-76ef440b","v-2edff20a","v-5b8f136c","v-cc6fd058","v-e14f8ee0","v-5d4b1b02","v-45c5d8e0","v-0c9f2207","v-569048ed","v-10e04ba5","v-2fc40659","v-346d913e","v-6bb523dd","v-0f5676d1","v-339be72e","v-65c1eb64","v-217f6018","v-8e42815c","v-b0351fb2","v-ede287d6","v-6c0d160c","v-5de93946","v-ced808de","v-e4455092"]},"/ru/":{path:"/ru/timeline/",keys:["v-2117da3f","v-bca7c3e4","v-62fdce4a","v-b2c1b7f8","v-17d7aebd","v-7cc36f38","v-05670a76","v-b8ca4cfa","v-b1cce5cc","v-ea7e0cbe","v-8c7f1af2","v-77297e62","v-7a0e01e8","v-75e54132","v-aeaf7a66","v-f500906a","v-49735169","v-28fd69b4","v-3e7dfb14","v-f288f17a","v-3bbae68e","v-07c05b16","v-2dff8848","v-718a815f","v-ccad9b28","v-2eb425a0","v-d8060fd0","v-614f60ae","v-198dc4ee","v-c8e4dffa","v-48f3455b","v-7d5a6c72","v-b096e354","v-227e6898","v-5d88000d","v-aee1cef0","v-2a391520","v-e45cac56","v-def9f2ea","v-71fd94c3","v-4f59cf4a","v-661b26cf","v-d3131344","v-4c9150dd","v-8ea6e8f2","v-7d24472a","v-730d34b5","v-7b36bfc1","v-0fe5d426","v-89c5f8d8","v-82c0a21e","v-7817bb26","v-bfadd512","v-86daff28","v-e858db9c","v-48421cec","v-20a484e7","v-59c0ab90","v-534867d6","v-6067ebc3","v-5327a2ba","v-e398e382","v-0831d0d7","v-0c6f7be7","v-5943b418","v-eb65b274","v-21a45b83","v-6dbfd2aa","v-5f058167","v-3b6886ec","v-7bdd9ae4","v-245a18fc","v-7db1a1d3","v-e9d5aad8","v-2e226366","v-27c02b31","v-5048adc2","v-75386879","v-63bb8993","v-6349d851","v-5cda8f9a","v-c6b96096","v-764dfe0c","v-77a8bb79","v-5317e1b2","v-62db668b","v-1eb05229","v-0cb9f2b8","v-f38856c2","v-0d6b6488","v-f3ee11f2","v-845a8958","v-f36ae3b8","v-01534dc4","v-173a881a","v-2742dab6","v-5ac63b96","v-9b152f42","v-85e4ef12","v-316e6b42","v-39ea11db","v-1edb250a","v-1f509baa","v-6f34c0dc","v-b7de0910","v-04f180ba","v-db4cb5a4","v-0cd25c9e","v-3af303f5","v-10470b75","v-3022ef89","v-3a055032","v-5cd7295c","v-0681fc4e","v-47b08174","v-c92192ba","v-50bec4ff","v-7a849898","v-2792622a","v-1b745e27","v-1533ba9c","v-c6900cac","v-61c22a5c","v-a45f26f6","v-620e2af3","v-3696be1c","v-7aef86be","v-0bdb1ec8","v-3586a7cc","v-12aba19e","v-0db76434","v-4e419c9c","v-42f5c168","v-c02aaf60","v-f2894c3a"]}}},l$1=ref(categoryMap),k$1=(Ge="")=>{const Ye=useRouter(),Xe=useRoute(),at=useRouteLocale();return computed(()=>{var ut;const ht=Ge||((ut=usePageFrontmatter().value.blog)==null?void 0:ut.key)||"";if(!ht)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const Bo=Ye.getRoutes();if(!l$1.value[ht])throw new Error(`useBlogCategory: key ${ht} is invalid`);const Ao=l$1.value[ht][at.value],To={path:Ao.path,map:{}};for(const $o in Ao.map){const xo=Ao.map[$o];To.map[$o]={path:xo.path,items:[]};for(const zo of xo.keys){const Lo=Bo.find(({name:Mo})=>Mo===zo);if(Lo){const Mo=lt$1(Ye,Lo.path);To.map[$o].items.push({path:Mo.path,info:Mo.meta})}}Xe.path===xo.path&&(To.currentItems=To.map[$o].items)}return To})},_$1=ref(typeMap),C$1=(Ge="")=>{const Ye=useRouter(),Xe=useRouteLocale();return computed(()=>{var at;const ut=Ge||((at=usePageFrontmatter().value.blog)==null?void 0:at.key)||"";if(!ut)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!_$1.value[ut])throw new Error(`useBlogType: key ${Ge} is invalid`);const ht=Ye.getRoutes(),Bo=_$1.value[ut][Xe.value],Ao={path:Bo.path,items:[]};for(const To of Bo.keys){const $o=ht.find(({name:xo})=>xo===To);if($o){const xo=lt$1(Ye,$o.path);Ao.items.push({path:xo.path,info:xo.meta})}}return Ao})},categoryMapSymbol=Symbol.for("categoryMap"),useCategoryMap=()=>{const Ge=inject(categoryMapSymbol);if(!Ge)throw new Error("useCategoryMap() is called without provider.");return Ge},setupCategoryMap=()=>{const Ge=k$1("category");provide(categoryMapSymbol,Ge)},useBlogOptions=()=>{const Ge=useThemeData$1(),Ye=useThemeLocaleData();return computed(()=>({...Ge.value.blog,...Ye.value.blog}))},tagMapSymbol=Symbol.for("tagMap"),useTagMap=()=>{const Ge=inject(tagMapSymbol);if(!Ge)throw new Error("useTagMap() is called without provider.");return Ge},setupTagMap=()=>{const Ge=k$1("tag");provide(tagMapSymbol,Ge)},useArticleAuthor=Ge=>{const Ye=useThemeLocaleData();return computed(()=>{const{["a"]:Xe}=Ge.value;return Xe?Jt$1(Xe):Xe===!1?[]:Jt$1(Ye.value.author,!1)})},useArticleCategory=Ge=>{const Ye=useCategoryMap();return computed(()=>qt$1(Ge.value.c).map(Xe=>({name:Xe,path:Ye.value.map[Xe].path})))},useArticleTag=Ge=>{const Ye=useTagMap();return computed(()=>Gt$1(Ge.value.g).map(Xe=>({name:Xe,path:Ye.value.map[Xe].path})))},useArticleDate=Ge=>computed(()=>{const{["d"]:Ye}=Ge.value;return Ye?et(Ye):null}),useArticleInfo=Ge=>{const Ye=toRef(Ge,"info"),Xe=useBlogOptions(),at=useArticleAuthor(Ye),ut=useArticleCategory(Ye),ht=useArticleTag(Ye),Bo=useArticleDate(Ye),Ao=computed(()=>({author:at.value,category:ut.value,date:Bo.value,localizedDate:Ye.value.l||"",tag:ht.value,isOriginal:Ye.value.o||!1,readingTime:Ye.value.r||null,pageview:Ge.path})),To=computed(()=>Xe.value.articleInfo);return{info:Ao,items:To}},articlesSymbol=Symbol.for("articles"),useArticles=()=>{const Ge=inject(articlesSymbol);if(!Ge)throw new Error("useArticles() is called without provider.");return Ge},setupArticles=()=>{const Ge=C$1("article");provide(articlesSymbol,Ge)},starsSymbol=Symbol.for("stars"),useStars=()=>{const Ge=inject(starsSymbol);if(!Ge)throw new Error("useStars() is called without provider.");return Ge},setupStars=()=>{const Ge=C$1("star");provide(starsSymbol,Ge)},timelinesSymbol=Symbol.for("timelines"),useTimelines=()=>{const Ge=inject(timelinesSymbol);if(!Ge)throw new Error("useTimelines() is called without provider.");return Ge},setupTimelines=()=>{const Ge=C$1("timeline"),Ye=computed(()=>{const Xe=[];return Ge.value.items.forEach(({info:at,path:ut})=>{var To;const{year:ht,month:Bo,day:Ao}=((To=et(at.d))==null?void 0:To.info)||{};ht&&Bo&&Ao&&((!Xe[0]||Xe[0].year!==ht)&&Xe.unshift({year:ht,items:[]}),Xe[0].items.push({date:`${Bo}/${Ao}`,info:at,path:ut}))}),{...Ge.value,config:Xe.reverse()}});provide(timelinesSymbol,Ye)},setupBlog=()=>{setupArticles(),setupCategoryMap(),setupStars(),setupTagMap(),setupTimelines()},socialMedia="",SocialMedia=defineComponent({name:"SocialMedia",setup(){const Ge=useBlogOptions(),Ye=usePure(),Xe=computed(()=>{const at=Ge.value.medias;return at?Object.entries(at).map(([ut,ht])=>({name:ut,icon:icons[ut],url:ht})):[]});return()=>Xe.value.length?h$5("div",{class:"social-media-wrapper"},Xe.value.map(({name:at,icon:ut,url:ht})=>h$5("a",{class:"social-media",href:ht,rel:"noopener noreferrer",target:"_blank","aria-label":at,...Ye.value?{}:{"data-balloon-pos":"up"},innerHTML:ut}))):null}}),bloggerInfo="",BloggerInfo=defineComponent({name:"BloggerInfo",setup(){const Ge=useBlogOptions(),Ye=useSiteLocaleData(),Xe=useThemeLocaleData(),at=useArticles(),ut=useCategoryMap(),ht=useTagMap(),Bo=useTimelines(),Ao=useNavigate(),To=computed(()=>{var Lo;return Ge.value.name||((Lo=Jt$1(Xe.value.author)[0])==null?void 0:Lo.name)||Ye.value.title}),$o=computed(()=>Ge.value.avatar||Xe.value.logo),xo=computed(()=>Xe.value.blogLocales),zo=computed(()=>Ge.value.intro);return()=>h$5("div",{class:"blogger-info",vocab:"https://schema.org/",typeof:"Person"},[h$5("div",{class:"blogger",...zo.value?{style:{cursor:"pointer"},"aria-label":xo.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>Ao(zo.value)}:{}},[$o.value?h$5("img",{class:["blogger-avatar",{round:Ge.value.roundAvatar}],src:withBase($o.value),property:"image",alt:"Blogger Avatar"}):null,To.value?h$5("div",{class:"blogger-name",property:"name"},To.value):null,Ge.value.description?h$5("div",{class:"blogger-description",innerHTML:Ge.value.description}):null,zo.value?h$5("meta",{property:"url",content:withBase(zo.value)}):null]),h$5("div",{class:"num-wrapper"},[h$5("div",{onClick:()=>Ao(at.value.path)},[h$5("div",{class:"num"},at.value.items.length),h$5("div",xo.value.article)]),h$5("div",{onClick:()=>Ao(ut.value.path)},[h$5("div",{class:"num"},Object.keys(ut.value.map).length),h$5("div",xo.value.category)]),h$5("div",{onClick:()=>Ao(ht.value.path)},[h$5("div",{class:"num"},Object.keys(ht.value.map).length),h$5("div",xo.value.tag)]),h$5("div",{onClick:()=>Ao(Bo.value.path)},[h$5("div",{class:"num"},Bo.value.items.length),h$5("div",xo.value.timeline)])]),h$5(SocialMedia)])}}),CategoryIcon=()=>h$5(ct$1,{name:"category"},()=>h$5("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon.displayName="CategoryIcon";const TagIcon=()=>h$5(ct$1,{name:"tag"},()=>h$5("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon.displayName="TagIcon";const TimelineIcon=()=>h$5(ct$1,{name:"timeline"},()=>h$5("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));TimelineIcon.displayName="TimelineIcon";const SlideIcon=()=>h$5(ct$1,{name:"slides"},()=>h$5("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));SlideIcon.displayName="SlideIcon";const StickyIcon=()=>h$5(ct$1,{name:"sticky"},()=>[h$5("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);StickyIcon.displayName="StickyIcon";const ArticleIcon=()=>h$5(ct$1,{name:"article"},()=>h$5("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));ArticleIcon.displayName="ArticleIcon";const BookIcon=()=>h$5(ct$1,{name:"book"},()=>h$5("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));BookIcon.displayName="BookIcon";const LinkIcon=()=>h$5(ct$1,{name:"link"},()=>h$5("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));LinkIcon.displayName="LinkIcon";const ProjectIcon=()=>h$5(ct$1,{name:"project"},()=>h$5("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));ProjectIcon.displayName="ProjectIcon";const FriendIcon=()=>h$5(ct$1,{name:"friend"},()=>h$5("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));FriendIcon.displayName="FriendIcon";const SlideDownIcon=()=>h$5(ct$1,{name:"slide-down"},()=>h$5("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));SlideDownIcon.displayName="SlideDownIcon";const emptyIcon="",EmptyIcon=()=>h$5("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});EmptyIcon.displayName="EmptyIcon";const LockIcon=()=>h$5(ct$1,{name:"lock"},()=>h$5("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));LockIcon.displayName="LockIcon";const articleItem="",ArticleItem=defineComponent({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},setup(Ge){const Ye=toRef(Ge,"info"),{info:Xe,items:at}=useArticleInfo(Ge);return()=>h$5("div",{class:"article-item"},h$5("article",{class:"article",vocab:"https://schema.org/",typeof:"Article"},[Ye.value.u?h$5(StickyIcon):null,h$5(RouterLink,{to:Ge.path},()=>[h$5("header",{class:"title"},[Ye.value.n?h$5(LockIcon):null,Ye.value.y==="s"?h$5(SlideIcon):null,h$5("span",{property:"headline"},Ye.value.title),Ye.value.v?h$5("meta",{property:"image",content:withBase(Ye.value.v)}):null])]),Ye.value.e?h$5("div",{class:"article-excerpt",innerHTML:Ye.value.e}):null,h$5("hr",{class:"hr"}),h$5(PageInfo,{info:Xe.value,...at.value?{items:at.value}:{}})]))}}),pagination="",Pagination=defineComponent({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:{updateCurrentPage:Ge=>!0},setup(Ge,{emit:Ye}){let Xe;const at=useThemeLocaleData(),ut=ref(""),ht=computed(()=>at.value.paginationLocales),Bo=computed(()=>Math.ceil(Ge.total/Ge.perPage)),Ao=computed(()=>Boolean(Bo.value)&&Bo.value!==1),To=computed(()=>Bo.value<7?!1:Ge.current>4),$o=computed(()=>Bo.value<7?!1:Ge.current<Bo.value-3),xo=computed(()=>{const{current:Mo}=Ge;let Ro=1,Fo=Bo.value;const Zo=[];Bo.value>=7&&(Mo<=4&&Mo<Bo.value-3?(Ro=1,Fo=5):Mo>4&&Mo>=Bo.value-3?(Fo=Bo.value,Ro=Bo.value-4):Bo.value>7&&(Ro=Mo-2,Fo=Mo+2));for(let No=Ro;No<=Fo;No++)Zo.push(No);return Zo}),zo=Mo=>Ye("updateCurrentPage",Mo),Lo=Mo=>{const Ro=parseInt(Mo);Ro<=Bo.value&&Ro>0?zo(Ro):Xe.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${ht.value.errorText.replace(/\$page/g,Bo.value.toString())}`)};return onMounted(()=>{Xe=new kt$1}),()=>h$5("div",{class:"pagination-wrapper"},Ao.value?h$5("div",{class:"pagination-list"},[h$5("div",{class:"page-number"},[Ge.current>1?h$5("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>zo(Ge.current-1)},ht.value.prev):null,...To.value?[h$5("div",{role:"navigation",onClick:()=>zo(1)},1),h$5("div",{class:"ellipsis"},"...")]:[],...xo.value.map(Mo=>h$5("div",{key:Mo,class:{active:Ge.current===Mo},role:"navigation",onClick:()=>zo(Mo)},Mo)),...$o.value?[h$5("div",{class:"ellipsis"},"..."),h$5("div",{role:"navigation",onClick:()=>zo(Bo.value)},Bo.value)]:[],Ge.current<Bo.value?h$5("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>zo(Ge.current+1)},ht.value.next):null]),h$5("div",{class:"navigate-wrapper"},[h$5("label",{for:"navigation-text"},`${ht.value.navigate}: `),h$5("input",{id:"navigation-text",value:ut.value,onInput:({target:Mo})=>{ut.value=Mo.value},onKeydown:Mo=>{Mo.key==="Enter"&&(Mo.preventDefault(),Lo(ut.value))}}),h$5("button",{class:"navigate",role:"navigation",title:ht.value.action,onClick:()=>Lo(ut.value)},ht.value.action)])]):[])}}),articleList="",ArticleList=defineComponent({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(Ge){const Ye=useRoute(),Xe=useRouter(),at=useBlogOptions(),ut=ref(1),ht=computed(()=>at.value.articlePerPage||10),Bo=computed(()=>Ge.items.slice((ut.value-1)*ht.value,ut.value*ht.value)),Ao=To=>{ut.value=To;const $o={...Ye.query};$o.page===To.toString()||To===1&&!$o.page||(To===1?delete $o.page:$o.page=To.toString(),Xe.push({path:Ye.path,query:$o}))};return onMounted(()=>{const{page:To}=Ye.query;Ao(To?Number(To):1),watch(ut,()=>{const $o=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,$o)},100)})}),()=>h$5("div",{id:"article-list",class:"article-wrapper"},Bo.value.length?[...Bo.value.map(({info:To,path:$o},xo)=>h$5(DropTransition,{appear:!0,delay:xo*.04},()=>h$5(ArticleItem,{key:$o,info:To,path:$o}))),h$5(Pagination,{current:ut.value,perPage:ht.value,total:Ge.items.length,onUpdateCurrentPage:Ao})]:h$5(EmptyIcon))}}),categoryList="",CategoryList=defineComponent({name:"CategoryList",setup(){const Ge=useRoute(),Ye=useCategoryMap();return()=>h$5("ul",{class:"category-list-wrapper"},Object.entries(Ye.value.map).map(([Xe,{path:at,items:ut}])=>h$5("li",{class:["category",`category${Ut$1(Xe,9)}`,{active:at===Ge.path}]},h$5(RouterLink,{to:at},()=>[Xe,h$5("span",{class:"category-num"},ut.length)]))))}}),tagList="",TagList=defineComponent({name:"TagList",setup(){const Ge=usePageFrontmatter(),Ye=useTagMap(),Xe=at=>{var ut;return at===((ut=Ge.value.blog)==null?void 0:ut.name)};return()=>h$5("ul",{class:"tag-list-wrapper"},Object.entries(Ye.value.map).map(([at,{path:ut,items:ht}])=>h$5("li",{class:["tag",`tag${Ut$1(at,9)}`,{active:Xe(at)}]},h$5(RouterLink,{to:ut},()=>[at,h$5("span",{class:"tag-num"},ht.length)]))))}}),timelineList="",TimelineList=defineComponent({name:"TimelineList",setup(){const Ge=useThemeLocaleData(),Ye=useTimelines(),Xe=useNavigate(),at=computed(()=>Ge.value.blogLocales.timeline);return()=>h$5("div",{class:"timeline-list-wrapper"},[h$5("div",{class:"timeline-list-title",onClick:()=>Xe(Ye.value.path)},[h$5(TimelineIcon),h$5("span",{class:"num"},Ye.value.items.length),at.value]),h$5("hr"),h$5("div",{class:"timeline-content"},h$5("ul",{class:"timeline-list"},Ye.value.config.map(({year:ut,items:ht},Bo)=>h$5(DropTransition,{appear:!0,delay:.08*(Bo+1)},()=>h$5("li",[h$5("h3",{class:"timeline-year"},ut),h$5("ul",{class:"timeline-year-wrapper"},ht.map(({date:Ao,info:To,path:$o})=>h$5("li",{class:"timeline-item"},[h$5("span",{class:"timeline-date"},Ao),h$5(RouterLink,{class:"timeline-title",to:$o},()=>To.title)])))])))))])}}),infoList="",InfoList=defineComponent({name:"InfoList",setup(){const Ge=useThemeLocaleData(),Ye=useArticles(),Xe=useCategoryMap(),at=computed(()=>Object.keys(Xe.value.map).length),ut=useStars(),ht=useTagMap(),Bo=computed(()=>Object.keys(ht.value.map).length),Ao=useNavigate(),To=ref("article"),$o=computed(()=>Ge.value.blogLocales),xo=[["article",ArticleIcon],["category",CategoryIcon],["tag",TagIcon],["timeline",TimelineIcon]];return()=>h$5("div",{class:"blog-info-list"},[h$5("div",{class:"blog-type-wrapper"},xo.map(([zo,Lo])=>h$5("button",{class:"blog-type-button",onClick:()=>{To.value=zo}},h$5("div",{class:["icon-wrapper",{active:To.value===zo}],"aria-label":$o.value[zo],"data-balloon-pos":"up"},h$5(Lo))))),To.value==="article"?h$5(DropTransition,()=>[h$5("div",{class:"sticky-article-wrapper"},[h$5("div",{class:"title",onClick:()=>Ao(Ye.value.path)},[h$5(ArticleIcon),h$5("span",{class:"num"},Ye.value.items.length),$o.value.article]),h$5("hr"),h$5("ul",{class:"sticky-article-list"},ut.value.items.map(({info:zo,path:Lo},Mo)=>h$5(DropTransition,{appear:!0,delay:.08*(Mo+1)},()=>h$5("li",{class:"sticky-article"},h$5(RouterLink,{to:Lo},()=>zo.title)))))])]):null,To.value==="category"?h$5(DropTransition,()=>[h$5("div",{class:"category-wrapper"},[at.value?h$5("div",{class:"title",onClick:()=>Ao(Xe.value.path)},[h$5(CategoryIcon),h$5("span",{class:"num"},at.value),$o.value.category]):null,h$5("hr"),h$5(DropTransition,{delay:.04},()=>h$5(CategoryList))])]):null,To.value==="tag"?h$5(DropTransition,()=>[h$5("div",{class:"tag-wrapper"},[Bo.value?h$5("div",{class:"title",onClick:()=>Ao(ht.value.path)},[h$5(TagIcon),h$5("span",{class:"num"},Bo.value),$o.value.tag]):null,h$5("hr"),h$5(DropTransition,{delay:.04},()=>h$5(TagList))])]):null,To.value==="timeline"?h$5(DropTransition,()=>h$5(TimelineList)):null])}}),page="",BlogWrapper=defineComponent({name:"BlogWrapper",setup(Ge,{slots:Ye}){const Xe=useMobile();return()=>[h$5(SkipLink),h$5(CommonWrapper,{noSidebar:!0},{default:()=>{var at;return(at=Ye.default)==null?void 0:at.call(Ye)},navScreenBottom:()=>h$5(BloggerInfo),...Xe.value?{sidebar:()=>h$5(InfoList)}:{}})]}}),infoPanel="",InfoPanel=()=>h$5("aside",{class:"blog-info-wrapper"},[h$5(DropTransition,()=>h$5(BloggerInfo)),h$5(DropTransition,{delay:.04},()=>h$5(InfoList))]);InfoPanel.displayName="InfoPanel";const BlogCategory=defineComponent({name:"BlogPage",components:{CategoryList,TagList},setup(){const Ge=usePageFrontmatter(),Ye=useRoute(),Xe=useCategoryMap(),at=useTagMap(),ut=computed(()=>Ge.value.blog||{}),ht=computed(()=>{const{key:Ao=""}=ut.value;return Ao==="category"?"CategoryList":Ao==="tag"?"TagList":null}),Bo=computed(()=>{const{name:Ao="",key:To=""}=ut.value;return To==="category"?Ao?Xe.value.map[Ao].items:[]:To==="tag"?Ao?at.value.map[Ao].items:[]:[]});return()=>h$5(BlogWrapper,()=>h$5("div",{class:"page blog"},h$5("div",{class:"blog-page-wrapper"},[h$5("main",{class:"blog-main",id:"main-content"},[h$5(DropTransition,()=>ht.value?h$5(resolveComponent(ht.value)):null),ut.value.name?h$5(DropTransition,{appear:!0,delay:.24},()=>h$5(ArticleList,{key:Ye.path,items:Bo.value})):null]),h$5(DropTransition,{delay:.16},()=>h$5(InfoPanel))])))}}),defaultHeroBgImagePath="/hope/assets/hero-197a9d2d.jpg",blogHero="",BlogHero=defineComponent({name:"BlogHero",setup(){const Ge=usePageHeadTitle(),Ye=usePageFrontmatter(),Xe=ref(),at=computed(()=>Ye.value.heroImage||null),ut=computed(()=>Ye.value.heroFullScreen||!1),ht=computed(()=>({...{maxHeight:"180px",margin:Ye.value.heroText===!1?"6rem auto 1.5rem":"1rem auto"},...Ye.value.heroImageStyle})),Bo=computed(()=>Ye.value.bgImage?withBase(Ye.value.bgImage):Ye.value.bgImage??defaultHeroBgImagePath),Ao=computed(()=>({...{height:"350px",textAlign:"center",overflow:"hidden"},...Ye.value.bgImageStyle}));return()=>Ye.value.hero!==!1?h$5("div",{ref:Xe,class:["blog-hero",{fullscreen:ut.value}],style:Ao.value},[Bo.value?h$5("div",{class:"mask",style:{background:`url(${Bo.value}) center/cover no-repeat`}}):null,h$5(DropTransition,{appear:!0,delay:.04},()=>at.value?h$5("img",{class:"hero-image",style:ht.value,src:withBase(at.value),alt:Ye.value.heroAlt||"hero image"}):null),h$5(DropTransition,{appear:!0,delay:.08},()=>Ye.value.heroText!==!1?h$5("h1",Ye.value.heroText||Ge.value):null),h$5(DropTransition,{appear:!0,delay:.12},()=>Ye.value.tagline?h$5("p",{class:"description",innerHTML:Ye.value.tagline}):null),ut.value?h$5("button",{class:"slide-down-button",onClick:()=>{window.scrollTo({top:Xe.value.clientHeight,behavior:"smooth"})}},[h$5(SlideDownIcon),h$5(SlideDownIcon)]):null]):null}}),projectPanel="",AVAILABLE_PROJECT_TYPES=["link","article","book","project","friend"],ProjectPanel=defineComponent({name:"ProjectPanel",components:{ArticleIcon,BookIcon,FriendIcon,LinkIcon,ProjectIcon},setup(){const Ge=usePageFrontmatter(),Ye=usePure(),Xe=useNavigate(),at=(ut="",ht="icon")=>AVAILABLE_PROJECT_TYPES.includes(ut)?h$5(resolveComponent(`${ut}-icon`)):ut.match(/^https?:\/\//)?h$5("img",{src:ut,alt:ht,class:"image"}):ut.startsWith("/")?h$5("img",{src:withBase(ut),alt:ht,class:"image"}):h$5(Icon,{icon:ut});return()=>{var ut;return(ut=Ge.value.projects)!=null&&ut.length?h$5("div",{class:"project-panel"},Ge.value.projects.map(({icon:ht,link:Bo,name:Ao,desc:To},$o)=>h$5("div",{class:["project",{[`project${$o%9}`]:!Ye.value}],onClick:()=>Xe(Bo)},[at(ht,Ao),h$5("div",{class:"name"},Ao),h$5("div",{class:"desc"},To)]))):null}}}),home="",BlogHome$1=defineComponent({name:"BlogHome",setup(){const Ge=useArticles();return()=>h$5("div",{class:"page blog"},[h$5(BlogHero),h$5("div",{class:"blog-page-wrapper"},[h$5("main",{class:"blog-home",id:"main-content"},[h$5(DropTransition,{appear:!0,delay:.16},()=>h$5(ProjectPanel)),h$5(DropTransition,{appear:!0,delay:.24},()=>h$5(ArticleList,{items:Ge.value.items}))]),h$5(DropTransition,{appear:!0,delay:.16},()=>h$5(InfoPanel))]),h$5(DropTransition,{appear:!0,delay:.28},()=>h$5(MarkdownContent))])}}),BlogHome=defineComponent({name:"BlogHome",setup(){return()=>h$5(BlogWrapper,()=>h$5(BlogHome$1))}}),articleType="",ArticleType=defineComponent({name:"ArticleType",setup(){const Ge=useRouteLocale(),Ye=useThemeLocaleData(),Xe=useRoute(),at=useArticles(),ut=useStars(),ht=computed(()=>{const Bo=Ye.value.blogLocales;return[{text:Bo.all,path:at.value.path},{text:Bo.star,path:ut.value.path},...[].map(({key:Ao,path:To})=>({text:Bo[Ao],path:To.replace(/^\//,Ge.value)}))]});return()=>h$5("ul",{class:"article-type-wrapper"},ht.value.map(Bo=>h$5("li",{class:["article-type",{active:Bo.path===Xe.path}]},h$5(RouterLink,{to:Bo.path},()=>Bo.text))))}}),BlogType=defineComponent({name:"BlogPage",setup(){const Ge=C$1(),Ye=usePageFrontmatter(),Xe=useRoute(),at=useArticles(),ut=useStars(),ht=computed(()=>{const{key:Bo="",type:Ao}=Ye.value.blog||{};return Bo==="star"?ut.value.items:Ao==="type"&&Bo?Ge.value.items:at.value.items});return()=>h$5(BlogWrapper,()=>h$5("div",{class:"page blog"},h$5("div",{class:"blog-page-wrapper"},[h$5("main",{class:"blog-main",id:"main-content"},[h$5(DropTransition,()=>h$5(ArticleType)),h$5(DropTransition,{appear:!0,delay:.24},()=>h$5(ArticleList,{key:Xe.path,items:ht.value}))]),h$5(DropTransition,{delay:.16},()=>h$5(InfoPanel))])))}}),timelineItems="",TimelineItems=defineComponent({name:"TimelineItems",setup(){const Ge=useBlogOptions(),Ye=useThemeLocaleData(),Xe=useTimelines(),at=computed(()=>Ge.value.timeline||Ye.value.blogLocales.timelineTitle),ut=computed(()=>Xe.value.config.map(({year:ht})=>({title:ht.toString(),level:2,slug:ht.toString(),children:[]})));return()=>h$5("div",{class:"timeline-wrapper"},h$5("ul",{class:"timeline-content"},[h$5(DropTransition,()=>h$5("li",{class:"motto"},at.value)),h$5(TOC,{items:ut.value}),...Xe.value.config.map(({year:ht,items:Bo},Ao)=>h$5(DropTransition,{appear:!0,delay:.08*(Ao+1),type:"group"},()=>[h$5("h3",{key:"title",id:ht,class:"timeline-year-title"},h$5("span",ht)),h$5("li",{key:"content",class:"timeline-year-list"},[h$5("ul",{class:"timeline-year-wrapper"},Bo.map(({date:To,info:$o,path:xo})=>h$5("li",{class:"timeline-item"},[h$5("span",{class:"timeline-date"},To),h$5(RouterLink,{class:"timeline-title",to:xo},()=>$o.title)])))])]))]))}}),Timeline=defineComponent({name:"Timeline",components:{ArticleType,CategoryList,TagList},setup(){return()=>h$5(BlogWrapper,()=>h$5("div",{class:"page blog"},h$5("div",{class:"blog-page-wrapper"},[h$5("main",{class:"blog-main",id:"main-content"},[h$5(DropTransition,{appear:!0,delay:.24},()=>h$5(TimelineItems))]),h$5(DropTransition,{delay:.16},()=>h$5(InfoPanel))])))}}),layout="",slidePage="",d$1=()=>h$5(ct$1,{name:"back"},()=>h$5("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),h$1=()=>h$5(ct$1,{name:"home"},()=>h$5("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}));var f$1=defineComponent({name:"SlidePage",setup(){const Ge=useRouter(),Ye=ref(!1),Xe=ref(),at=()=>{Ye.value=!Ye.value},ut=()=>{Ye.value=!1},ht=()=>{ut(),window.history.go(-1)},Bo=()=>{ut(),Ge.push("/")};return onClickOutside(Xe,ut),()=>h$5("div",{class:"presentation"},[h$5(Content),h$5("div",{ref:Xe,class:["menu",{active:Ye.value}]},[h$5("button",{class:"menu-button",onClick:()=>at()},h$5("span",{class:"icon"})),h$5("button",{class:"back-button",onClick:()=>ht()},h$5(d$1)),h$5("button",{class:"home-button",onClick:()=>Bo()},h$5(h$1))])])}});const clientConfig13=defineClientConfig({enhance:({app:Ge,router:Ye})=>{const{scrollBehavior:Xe}=Ye.options;Ye.options.scrollBehavior=async(...at)=>(await useScrollPromise().wait(),Xe(...at)),injectDarkMode(Ge),Ge.component("BloggerInfo",BloggerInfo)},setup:()=>{setupDarkMode(),setupSidebarItems(),setupBlog()},layouts:{Layout,NotFound,BlogCategory,BlogHome,BlogType,Timeline,Slide:f$1}});/*! @docsearch/js 3.3.1 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */function e(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function t(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?e(Object(Xe),!0).forEach(function(at){r(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):e(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function n(Ge){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Ye){return typeof Ye}:function(Ye){return Ye&&typeof Symbol=="function"&&Ye.constructor===Symbol&&Ye!==Symbol.prototype?"symbol":typeof Ye},n(Ge)}function r(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function o(){return o=Object.assign||function(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye];for(var at in Xe)Object.prototype.hasOwnProperty.call(Xe,at)&&(Ge[at]=Xe[at])}return Ge},o.apply(this,arguments)}function c(Ge,Ye){if(Ge==null)return{};var Xe,at,ut=function(Bo,Ao){if(Bo==null)return{};var To,$o,xo={},zo=Object.keys(Bo);for($o=0;$o<zo.length;$o++)To=zo[$o],Ao.indexOf(To)>=0||(xo[To]=Bo[To]);return xo}(Ge,Ye);if(Object.getOwnPropertySymbols){var ht=Object.getOwnPropertySymbols(Ge);for(at=0;at<ht.length;at++)Xe=ht[at],Ye.indexOf(Xe)>=0||Object.prototype.propertyIsEnumerable.call(Ge,Xe)&&(ut[Xe]=Ge[Xe])}return ut}function i(Ge,Ye){return function(Xe){if(Array.isArray(Xe))return Xe}(Ge)||function(Xe,at){var ut=Xe==null?null:typeof Symbol<"u"&&Xe[Symbol.iterator]||Xe["@@iterator"];if(ut!=null){var ht,Bo,Ao=[],To=!0,$o=!1;try{for(ut=ut.call(Xe);!(To=(ht=ut.next()).done)&&(Ao.push(ht.value),!at||Ao.length!==at);To=!0);}catch(xo){$o=!0,Bo=xo}finally{try{To||ut.return==null||ut.return()}finally{if($o)throw Bo}}return Ao}}(Ge,Ye)||u(Ge,Ye)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function a(Ge){return function(Ye){if(Array.isArray(Ye))return l(Ye)}(Ge)||function(Ye){if(typeof Symbol<"u"&&Ye[Symbol.iterator]!=null||Ye["@@iterator"]!=null)return Array.from(Ye)}(Ge)||u(Ge)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function u(Ge,Ye){if(Ge){if(typeof Ge=="string")return l(Ge,Ye);var Xe=Object.prototype.toString.call(Ge).slice(8,-1);return Xe==="Object"&&Ge.constructor&&(Xe=Ge.constructor.name),Xe==="Map"||Xe==="Set"?Array.from(Ge):Xe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Xe)?l(Ge,Ye):void 0}}function l(Ge,Ye){(Ye==null||Ye>Ge.length)&&(Ye=Ge.length);for(var Xe=0,at=new Array(Ye);Xe<Ye;Xe++)at[Xe]=Ge[Xe];return at}var s,f,p,m,d,h={},v=[],y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function _(Ge,Ye){for(var Xe in Ye)Ge[Xe]=Ye[Xe];return Ge}function b(Ge){var Ye=Ge.parentNode;Ye&&Ye.removeChild(Ge)}function g(Ge,Ye,Xe){var at,ut,ht,Bo=arguments,Ao={};for(ht in Ye)ht=="key"?at=Ye[ht]:ht=="ref"?ut=Ye[ht]:Ao[ht]=Ye[ht];if(arguments.length>3)for(Xe=[Xe],ht=3;ht<arguments.length;ht++)Xe.push(Bo[ht]);if(Xe!=null&&(Ao.children=Xe),typeof Ge=="function"&&Ge.defaultProps!=null)for(ht in Ge.defaultProps)Ao[ht]===void 0&&(Ao[ht]=Ge.defaultProps[ht]);return O(Ge,Ao,at,ut,null)}function O(Ge,Ye,Xe,at,ut){var ht={type:Ge,props:Ye,key:Xe,ref:at,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:ut??++s.__v};return s.vnode!=null&&s.vnode(ht),ht}function S(Ge){return Ge.children}function E(Ge,Ye){this.props=Ge,this.context=Ye}function w(Ge,Ye){if(Ye==null)return Ge.__?w(Ge.__,Ge.__.__k.indexOf(Ge)+1):null;for(var Xe;Ye<Ge.__k.length;Ye++)if((Xe=Ge.__k[Ye])!=null&&Xe.__e!=null)return Xe.__e;return typeof Ge.type=="function"?w(Ge):null}function j(Ge){var Ye,Xe;if((Ge=Ge.__)!=null&&Ge.__c!=null){for(Ge.__e=Ge.__c.base=null,Ye=0;Ye<Ge.__k.length;Ye++)if((Xe=Ge.__k[Ye])!=null&&Xe.__e!=null){Ge.__e=Ge.__c.base=Xe.__e;break}return j(Ge)}}function P(Ge){(!Ge.__d&&(Ge.__d=!0)&&f.push(Ge)&&!I.__r++||m!==s.debounceRendering)&&((m=s.debounceRendering)||p)(I)}function I(){for(var Ge;I.__r=f.length;)Ge=f.sort(function(Ye,Xe){return Ye.__v.__b-Xe.__v.__b}),f=[],Ge.some(function(Ye){var Xe,at,ut,ht,Bo,Ao;Ye.__d&&(Bo=(ht=(Xe=Ye).__v).__e,(Ao=Xe.__P)&&(at=[],(ut=_({},ht)).__v=ht.__v+1,L(Ao,ht,ut,Xe.__n,Ao.ownerSVGElement!==void 0,ht.__h!=null?[Bo]:null,at,Bo??w(ht),ht.__h),q(at,ht),ht.__e!=Bo&&j(ht)))})}function k(Ge,Ye,Xe,at,ut,ht,Bo,Ao,To,$o){var xo,zo,Lo,Mo,Ro,Fo,Zo,No=at&&at.__k||v,qo=No.length;for(Xe.__k=[],xo=0;xo<Ye.length;xo++)if((Mo=Xe.__k[xo]=(Mo=Ye[xo])==null||typeof Mo=="boolean"?null:typeof Mo=="string"||typeof Mo=="number"?O(null,Mo,null,null,Mo):Array.isArray(Mo)?O(S,{children:Mo},null,null,null):Mo.__b>0?O(Mo.type,Mo.props,Mo.key,null,Mo.__v):Mo)!=null){if(Mo.__=Xe,Mo.__b=Xe.__b+1,(Lo=No[xo])===null||Lo&&Mo.key==Lo.key&&Mo.type===Lo.type)No[xo]=void 0;else for(zo=0;zo<qo;zo++){if((Lo=No[zo])&&Mo.key==Lo.key&&Mo.type===Lo.type){No[zo]=void 0;break}Lo=null}L(Ge,Mo,Lo=Lo||h,ut,ht,Bo,Ao,To,$o),Ro=Mo.__e,(zo=Mo.ref)&&Lo.ref!=zo&&(Zo||(Zo=[]),Lo.ref&&Zo.push(Lo.ref,null,Mo),Zo.push(zo,Mo.__c||Ro,Mo)),Ro!=null?(Fo==null&&(Fo=Ro),typeof Mo.type=="function"&&Mo.__k!=null&&Mo.__k===Lo.__k?Mo.__d=To=D(Mo,To,Ge):To=A(Ge,Mo,Lo,No,Ro,To),$o||Xe.type!=="option"?typeof Xe.type=="function"&&(Xe.__d=To):Ge.value=""):To&&Lo.__e==To&&To.parentNode!=Ge&&(To=w(Lo))}for(Xe.__e=Fo,xo=qo;xo--;)No[xo]!=null&&(typeof Xe.type=="function"&&No[xo].__e!=null&&No[xo].__e==Xe.__d&&(Xe.__d=w(at,xo+1)),U(No[xo],No[xo]));if(Zo)for(xo=0;xo<Zo.length;xo++)H(Zo[xo],Zo[++xo],Zo[++xo])}function D(Ge,Ye,Xe){var at,ut;for(at=0;at<Ge.__k.length;at++)(ut=Ge.__k[at])&&(ut.__=Ge,Ye=typeof ut.type=="function"?D(ut,Ye,Xe):A(Xe,ut,ut,Ge.__k,ut.__e,Ye));return Ye}function C(Ge,Ye){return Ye=Ye||[],Ge==null||typeof Ge=="boolean"||(Array.isArray(Ge)?Ge.some(function(Xe){C(Xe,Ye)}):Ye.push(Ge)),Ye}function A(Ge,Ye,Xe,at,ut,ht){var Bo,Ao,To;if(Ye.__d!==void 0)Bo=Ye.__d,Ye.__d=void 0;else if(Xe==null||ut!=ht||ut.parentNode==null)e:if(ht==null||ht.parentNode!==Ge)Ge.appendChild(ut),Bo=null;else{for(Ao=ht,To=0;(Ao=Ao.nextSibling)&&To<at.length;To+=2)if(Ao==ut)break e;Ge.insertBefore(ut,ht),Bo=ht}return Bo!==void 0?Bo:ut.nextSibling}function N(Ge,Ye,Xe){Ye[0]==="-"?Ge.setProperty(Ye,Xe):Ge[Ye]=Xe==null?"":typeof Xe!="number"||y.test(Ye)?Xe:Xe+"px"}function x(Ge,Ye,Xe,at,ut){var ht;e:if(Ye==="style")if(typeof Xe=="string")Ge.style.cssText=Xe;else{if(typeof at=="string"&&(Ge.style.cssText=at=""),at)for(Ye in at)Xe&&Ye in Xe||N(Ge.style,Ye,"");if(Xe)for(Ye in Xe)at&&Xe[Ye]===at[Ye]||N(Ge.style,Ye,Xe[Ye])}else if(Ye[0]==="o"&&Ye[1]==="n")ht=Ye!==(Ye=Ye.replace(/Capture$/,"")),Ye=Ye.toLowerCase()in Ge?Ye.toLowerCase().slice(2):Ye.slice(2),Ge.l||(Ge.l={}),Ge.l[Ye+ht]=Xe,Xe?at||Ge.addEventListener(Ye,ht?R:T,ht):Ge.removeEventListener(Ye,ht?R:T,ht);else if(Ye!=="dangerouslySetInnerHTML"){if(ut)Ye=Ye.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(Ye!=="href"&&Ye!=="list"&&Ye!=="form"&&Ye!=="download"&&Ye in Ge)try{Ge[Ye]=Xe??"";break e}catch{}typeof Xe=="function"||(Xe!=null&&(Xe!==!1||Ye[0]==="a"&&Ye[1]==="r")?Ge.setAttribute(Ye,Xe):Ge.removeAttribute(Ye))}}function T(Ge){this.l[Ge.type+!1](s.event?s.event(Ge):Ge)}function R(Ge){this.l[Ge.type+!0](s.event?s.event(Ge):Ge)}function L(Ge,Ye,Xe,at,ut,ht,Bo,Ao,To){var $o,xo,zo,Lo,Mo,Ro,Fo,Zo,No,qo,Ho,Vo=Ye.type;if(Ye.constructor!==void 0)return null;Xe.__h!=null&&(To=Xe.__h,Ao=Ye.__e=Xe.__e,Ye.__h=null,ht=[Ao]),($o=s.__b)&&$o(Ye);try{e:if(typeof Vo=="function"){if(Zo=Ye.props,No=($o=Vo.contextType)&&at[$o.__c],qo=$o?No?No.props.value:$o.__:at,Xe.__c?Fo=(xo=Ye.__c=Xe.__c).__=xo.__E:("prototype"in Vo&&Vo.prototype.render?Ye.__c=xo=new Vo(Zo,qo):(Ye.__c=xo=new E(Zo,qo),xo.constructor=Vo,xo.render=F),No&&No.sub(xo),xo.props=Zo,xo.state||(xo.state={}),xo.context=qo,xo.__n=at,zo=xo.__d=!0,xo.__h=[]),xo.__s==null&&(xo.__s=xo.state),Vo.getDerivedStateFromProps!=null&&(xo.__s==xo.state&&(xo.__s=_({},xo.__s)),_(xo.__s,Vo.getDerivedStateFromProps(Zo,xo.__s))),Lo=xo.props,Mo=xo.state,zo)Vo.getDerivedStateFromProps==null&&xo.componentWillMount!=null&&xo.componentWillMount(),xo.componentDidMount!=null&&xo.__h.push(xo.componentDidMount);else{if(Vo.getDerivedStateFromProps==null&&Zo!==Lo&&xo.componentWillReceiveProps!=null&&xo.componentWillReceiveProps(Zo,qo),!xo.__e&&xo.shouldComponentUpdate!=null&&xo.shouldComponentUpdate(Zo,xo.__s,qo)===!1||Ye.__v===Xe.__v){xo.props=Zo,xo.state=xo.__s,Ye.__v!==Xe.__v&&(xo.__d=!1),xo.__v=Ye,Ye.__e=Xe.__e,Ye.__k=Xe.__k,xo.__h.length&&Bo.push(xo);break e}xo.componentWillUpdate!=null&&xo.componentWillUpdate(Zo,xo.__s,qo),xo.componentDidUpdate!=null&&xo.__h.push(function(){xo.componentDidUpdate(Lo,Mo,Ro)})}xo.context=qo,xo.props=Zo,xo.state=xo.__s,($o=s.__r)&&$o(Ye),xo.__d=!1,xo.__v=Ye,xo.__P=Ge,$o=xo.render(xo.props,xo.state,xo.context),xo.state=xo.__s,xo.getChildContext!=null&&(at=_(_({},at),xo.getChildContext())),zo||xo.getSnapshotBeforeUpdate==null||(Ro=xo.getSnapshotBeforeUpdate(Lo,Mo)),Ho=$o!=null&&$o.type===S&&$o.key==null?$o.props.children:$o,k(Ge,Array.isArray(Ho)?Ho:[Ho],Ye,Xe,at,ut,ht,Bo,Ao,To),xo.base=Ye.__e,Ye.__h=null,xo.__h.length&&Bo.push(xo),Fo&&(xo.__E=xo.__=null),xo.__e=!1}else ht==null&&Ye.__v===Xe.__v?(Ye.__k=Xe.__k,Ye.__e=Xe.__e):Ye.__e=M(Xe.__e,Ye,Xe,at,ut,ht,Bo,To);($o=s.diffed)&&$o(Ye)}catch(Wo){Ye.__v=null,(To||ht!=null)&&(Ye.__e=Ao,Ye.__h=!!To,ht[ht.indexOf(Ao)]=null),s.__e(Wo,Ye,Xe)}}function q(Ge,Ye){s.__c&&s.__c(Ye,Ge),Ge.some(function(Xe){try{Ge=Xe.__h,Xe.__h=[],Ge.some(function(at){at.call(Xe)})}catch(at){s.__e(at,Xe.__v)}})}function M(Ge,Ye,Xe,at,ut,ht,Bo,Ao){var To,$o,xo,zo,Lo=Xe.props,Mo=Ye.props,Ro=Ye.type,Fo=0;if(Ro==="svg"&&(ut=!0),ht!=null){for(;Fo<ht.length;Fo++)if((To=ht[Fo])&&(To===Ge||(Ro?To.localName==Ro:To.nodeType==3))){Ge=To,ht[Fo]=null;break}}if(Ge==null){if(Ro===null)return document.createTextNode(Mo);Ge=ut?document.createElementNS("http://www.w3.org/2000/svg",Ro):document.createElement(Ro,Mo.is&&Mo),ht=null,Ao=!1}if(Ro===null)Lo===Mo||Ao&&Ge.data===Mo||(Ge.data=Mo);else{if(ht=ht&&v.slice.call(Ge.childNodes),$o=(Lo=Xe.props||h).dangerouslySetInnerHTML,xo=Mo.dangerouslySetInnerHTML,!Ao){if(ht!=null)for(Lo={},zo=0;zo<Ge.attributes.length;zo++)Lo[Ge.attributes[zo].name]=Ge.attributes[zo].value;(xo||$o)&&(xo&&($o&&xo.__html==$o.__html||xo.__html===Ge.innerHTML)||(Ge.innerHTML=xo&&xo.__html||""))}if(function(Zo,No,qo,Ho,Vo){var Wo;for(Wo in qo)Wo==="children"||Wo==="key"||Wo in No||x(Zo,Wo,null,qo[Wo],Ho);for(Wo in No)Vo&&typeof No[Wo]!="function"||Wo==="children"||Wo==="key"||Wo==="value"||Wo==="checked"||qo[Wo]===No[Wo]||x(Zo,Wo,No[Wo],qo[Wo],Ho)}(Ge,Mo,Lo,ut,Ao),xo)Ye.__k=[];else if(Fo=Ye.props.children,k(Ge,Array.isArray(Fo)?Fo:[Fo],Ye,Xe,at,ut&&Ro!=="foreignObject",ht,Bo,Ge.firstChild,Ao),ht!=null)for(Fo=ht.length;Fo--;)ht[Fo]!=null&&b(ht[Fo]);Ao||("value"in Mo&&(Fo=Mo.value)!==void 0&&(Fo!==Ge.value||Ro==="progress"&&!Fo)&&x(Ge,"value",Fo,Lo.value,!1),"checked"in Mo&&(Fo=Mo.checked)!==void 0&&Fo!==Ge.checked&&x(Ge,"checked",Fo,Lo.checked,!1))}return Ge}function H(Ge,Ye,Xe){try{typeof Ge=="function"?Ge(Ye):Ge.current=Ye}catch(at){s.__e(at,Xe)}}function U(Ge,Ye,Xe){var at,ut,ht;if(s.unmount&&s.unmount(Ge),(at=Ge.ref)&&(at.current&&at.current!==Ge.__e||H(at,null,Ye)),Xe||typeof Ge.type=="function"||(Xe=(ut=Ge.__e)!=null),Ge.__e=Ge.__d=void 0,(at=Ge.__c)!=null){if(at.componentWillUnmount)try{at.componentWillUnmount()}catch(Bo){s.__e(Bo,Ye)}at.base=at.__P=null}if(at=Ge.__k)for(ht=0;ht<at.length;ht++)at[ht]&&U(at[ht],Ye,Xe);ut!=null&&b(ut)}function F(Ge,Ye,Xe){return this.constructor(Ge,Xe)}function B(Ge,Ye,Xe){var at,ut,ht;s.__&&s.__(Ge,Ye),ut=(at=typeof Xe=="function")?null:Xe&&Xe.__k||Ye.__k,ht=[],L(Ye,Ge=(!at&&Xe||Ye).__k=g(S,null,[Ge]),ut||h,h,Ye.ownerSVGElement!==void 0,!at&&Xe?[Xe]:ut?null:Ye.firstChild?v.slice.call(Ye.childNodes):null,ht,!at&&Xe?Xe:ut?ut.__e:Ye.firstChild,at),q(ht,Ge)}function V(Ge,Ye){B(Ge,Ye,V)}function W(Ge,Ye,Xe){var at,ut,ht,Bo=arguments,Ao=_({},Ge.props);for(ht in Ye)ht=="key"?at=Ye[ht]:ht=="ref"?ut=Ye[ht]:Ao[ht]=Ye[ht];if(arguments.length>3)for(Xe=[Xe],ht=3;ht<arguments.length;ht++)Xe.push(Bo[ht]);return Xe!=null&&(Ao.children=Xe),O(Ge.type,Ao,at||Ge.key,ut||Ge.ref,null)}s={__e:function(Ge,Ye){for(var Xe,at,ut;Ye=Ye.__;)if((Xe=Ye.__c)&&!Xe.__)try{if((at=Xe.constructor)&&at.getDerivedStateFromError!=null&&(Xe.setState(at.getDerivedStateFromError(Ge)),ut=Xe.__d),Xe.componentDidCatch!=null&&(Xe.componentDidCatch(Ge),ut=Xe.__d),ut)return Xe.__E=Xe}catch(ht){Ge=ht}throw Ge},__v:0},E.prototype.setState=function(Ge,Ye){var Xe;Xe=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=_({},this.state),typeof Ge=="function"&&(Ge=Ge(_({},Xe),this.props)),Ge&&_(Xe,Ge),Ge!=null&&this.__v&&(Ye&&this.__h.push(Ye),P(this))},E.prototype.forceUpdate=function(Ge){this.__v&&(this.__e=!0,Ge&&this.__h.push(Ge),P(this))},E.prototype.render=S,f=[],p=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,I.__r=0,d=0;var K,z,J,$=0,Q=[],Z=s.__b,Y=s.__r,G=s.diffed,X=s.__c,ee=s.unmount;function te(Ge,Ye){s.__h&&s.__h(z,Ge,$||Ye),$=0;var Xe=z.__H||(z.__H={__:[],__h:[]});return Ge>=Xe.__.length&&Xe.__.push({}),Xe.__[Ge]}function ne(Ge){return $=1,re(pe,Ge)}function re(Ge,Ye,Xe){var at=te(K++,2);return at.t=Ge,at.__c||(at.__=[Xe?Xe(Ye):pe(void 0,Ye),function(ut){var ht=at.t(at.__[0],ut);at.__[0]!==ht&&(at.__=[ht,at.__[1]],at.__c.setState({}))}],at.__c=z),at.__}function oe(Ge,Ye){var Xe=te(K++,3);!s.__s&&fe(Xe.__H,Ye)&&(Xe.__=Ge,Xe.__H=Ye,z.__H.__h.push(Xe))}function ce(Ge,Ye){var Xe=te(K++,4);!s.__s&&fe(Xe.__H,Ye)&&(Xe.__=Ge,Xe.__H=Ye,z.__h.push(Xe))}function ie(Ge,Ye){var Xe=te(K++,7);return fe(Xe.__H,Ye)&&(Xe.__=Ge(),Xe.__H=Ye,Xe.__h=Ge),Xe.__}function ae(){Q.forEach(function(Ge){if(Ge.__P)try{Ge.__H.__h.forEach(le),Ge.__H.__h.forEach(se),Ge.__H.__h=[]}catch(Ye){Ge.__H.__h=[],s.__e(Ye,Ge.__v)}}),Q=[]}s.__b=function(Ge){z=null,Z&&Z(Ge)},s.__r=function(Ge){Y&&Y(Ge),K=0;var Ye=(z=Ge.__c).__H;Ye&&(Ye.__h.forEach(le),Ye.__h.forEach(se),Ye.__h=[])},s.diffed=function(Ge){G&&G(Ge);var Ye=Ge.__c;Ye&&Ye.__H&&Ye.__H.__h.length&&(Q.push(Ye)!==1&&J===s.requestAnimationFrame||((J=s.requestAnimationFrame)||function(Xe){var at,ut=function(){clearTimeout(ht),ue&&cancelAnimationFrame(at),setTimeout(Xe)},ht=setTimeout(ut,100);ue&&(at=requestAnimationFrame(ut))})(ae)),z=void 0},s.__c=function(Ge,Ye){Ye.some(function(Xe){try{Xe.__h.forEach(le),Xe.__h=Xe.__h.filter(function(at){return!at.__||se(at)})}catch(at){Ye.some(function(ut){ut.__h&&(ut.__h=[])}),Ye=[],s.__e(at,Xe.__v)}}),X&&X(Ge,Ye)},s.unmount=function(Ge){ee&&ee(Ge);var Ye=Ge.__c;if(Ye&&Ye.__H)try{Ye.__H.__.forEach(le)}catch(Xe){s.__e(Xe,Ye.__v)}};var ue=typeof requestAnimationFrame=="function";function le(Ge){var Ye=z;typeof Ge.__c=="function"&&Ge.__c(),z=Ye}function se(Ge){var Ye=z;Ge.__c=Ge.__(),z=Ye}function fe(Ge,Ye){return!Ge||Ge.length!==Ye.length||Ye.some(function(Xe,at){return Xe!==Ge[at]})}function pe(Ge,Ye){return typeof Ye=="function"?Ye(Ge):Ye}function me(Ge,Ye){for(var Xe in Ye)Ge[Xe]=Ye[Xe];return Ge}function de(Ge,Ye){for(var Xe in Ge)if(Xe!=="__source"&&!(Xe in Ye))return!0;for(var at in Ye)if(at!=="__source"&&Ge[at]!==Ye[at])return!0;return!1}function he(Ge){this.props=Ge}(he.prototype=new E).isPureReactComponent=!0,he.prototype.shouldComponentUpdate=function(Ge,Ye){return de(this.props,Ge)||de(this.state,Ye)};var ve=s.__b;s.__b=function(Ge){Ge.type&&Ge.type.__f&&Ge.ref&&(Ge.props.ref=Ge.ref,Ge.ref=null),ve&&ve(Ge)};var ye=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911,_e=function(Ge,Ye){return Ge==null?null:C(C(Ge).map(Ye))},be={map:_e,forEach:_e,count:function(Ge){return Ge?C(Ge).length:0},only:function(Ge){var Ye=C(Ge);if(Ye.length!==1)throw"Children.only";return Ye[0]},toArray:C},ge=s.__e;function Oe(){this.__u=0,this.t=null,this.__b=null}function Se(Ge){var Ye=Ge.__.__c;return Ye&&Ye.__e&&Ye.__e(Ge)}function Ee(){this.u=null,this.o=null}s.__e=function(Ge,Ye,Xe){if(Ge.then){for(var at,ut=Ye;ut=ut.__;)if((at=ut.__c)&&at.__c)return Ye.__e==null&&(Ye.__e=Xe.__e,Ye.__k=Xe.__k),at.__c(Ge,Ye)}ge(Ge,Ye,Xe)},(Oe.prototype=new E).__c=function(Ge,Ye){var Xe=Ye.__c,at=this;at.t==null&&(at.t=[]),at.t.push(Xe);var ut=Se(at.__v),ht=!1,Bo=function(){ht||(ht=!0,Xe.componentWillUnmount=Xe.__c,ut?ut(Ao):Ao())};Xe.__c=Xe.componentWillUnmount,Xe.componentWillUnmount=function(){Bo(),Xe.__c&&Xe.__c()};var Ao=function(){if(!--at.__u){if(at.state.__e){var $o=at.state.__e;at.__v.__k[0]=function zo(Lo,Mo,Ro){return Lo&&(Lo.__v=null,Lo.__k=Lo.__k&&Lo.__k.map(function(Fo){return zo(Fo,Mo,Ro)}),Lo.__c&&Lo.__c.__P===Mo&&(Lo.__e&&Ro.insertBefore(Lo.__e,Lo.__d),Lo.__c.__e=!0,Lo.__c.__P=Ro)),Lo}($o,$o.__c.__P,$o.__c.__O)}var xo;for(at.setState({__e:at.__b=null});xo=at.t.pop();)xo.forceUpdate()}},To=Ye.__h===!0;at.__u++||To||at.setState({__e:at.__b=at.__v.__k[0]}),Ge.then(Bo,Bo)},Oe.prototype.componentWillUnmount=function(){this.t=[]},Oe.prototype.render=function(Ge,Ye){if(this.__b){if(this.__v.__k){var Xe=document.createElement("div"),at=this.__v.__k[0].__c;this.__v.__k[0]=function ht(Bo,Ao,To){return Bo&&(Bo.__c&&Bo.__c.__H&&(Bo.__c.__H.__.forEach(function($o){typeof $o.__c=="function"&&$o.__c()}),Bo.__c.__H=null),(Bo=me({},Bo)).__c!=null&&(Bo.__c.__P===To&&(Bo.__c.__P=Ao),Bo.__c=null),Bo.__k=Bo.__k&&Bo.__k.map(function($o){return ht($o,Ao,To)})),Bo}(this.__b,Xe,at.__O=at.__P)}this.__b=null}var ut=Ye.__e&&g(S,null,Ge.fallback);return ut&&(ut.__h=null),[g(S,null,Ye.__e?null:Ge.children),ut]};var we=function(Ge,Ye,Xe){if(++Xe[1]===Xe[0]&&Ge.o.delete(Ye),Ge.props.revealOrder&&(Ge.props.revealOrder[0]!=="t"||!Ge.o.size))for(Xe=Ge.u;Xe;){for(;Xe.length>3;)Xe.pop()();if(Xe[1]<Xe[0])break;Ge.u=Xe=Xe[2]}};function je(Ge){return this.getChildContext=function(){return Ge.context},Ge.children}function Pe(Ge){var Ye=this,Xe=Ge.i;Ye.componentWillUnmount=function(){B(null,Ye.l),Ye.l=null,Ye.i=null},Ye.i&&Ye.i!==Xe&&Ye.componentWillUnmount(),Ge.__v?(Ye.l||(Ye.i=Xe,Ye.l={nodeType:1,parentNode:Xe,childNodes:[],appendChild:function(at){this.childNodes.push(at),Ye.i.appendChild(at)},insertBefore:function(at,ut){this.childNodes.push(at),Ye.i.appendChild(at)},removeChild:function(at){this.childNodes.splice(this.childNodes.indexOf(at)>>>1,1),Ye.i.removeChild(at)}}),B(g(je,{context:Ye.context},Ge.__v),Ye.l)):Ye.l&&Ye.componentWillUnmount()}function Ie(Ge,Ye){return g(Pe,{__v:Ge,i:Ye})}(Ee.prototype=new E).__e=function(Ge){var Ye=this,Xe=Se(Ye.__v),at=Ye.o.get(Ge);return at[0]++,function(ut){var ht=function(){Ye.props.revealOrder?(at.push(ut),we(Ye,Ge,at)):ut()};Xe?Xe(ht):ht()}},Ee.prototype.render=function(Ge){this.u=null,this.o=new Map;var Ye=C(Ge.children);Ge.revealOrder&&Ge.revealOrder[0]==="b"&&Ye.reverse();for(var Xe=Ye.length;Xe--;)this.o.set(Ye[Xe],this.u=[1,0,this.u]);return Ge.children},Ee.prototype.componentDidUpdate=Ee.prototype.componentDidMount=function(){var Ge=this;this.o.forEach(function(Ye,Xe){we(Ge,Xe,Ye)})};var ke=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,De=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ce=function(Ge){return(typeof Symbol<"u"&&n(Symbol())=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(Ge)};function Ae(Ge,Ye,Xe){return Ye.__k==null&&(Ye.textContent=""),B(Ge,Ye),typeof Xe=="function"&&Xe(),Ge?Ge.__c:null}E.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(Ge){Object.defineProperty(E.prototype,Ge,{configurable:!0,get:function(){return this["UNSAFE_"+Ge]},set:function(Ye){Object.defineProperty(this,Ge,{configurable:!0,writable:!0,value:Ye})}})});var Ne=s.event;function xe(){}function Te(){return this.cancelBubble}function Re(){return this.defaultPrevented}s.event=function(Ge){return Ne&&(Ge=Ne(Ge)),Ge.persist=xe,Ge.isPropagationStopped=Te,Ge.isDefaultPrevented=Re,Ge.nativeEvent=Ge};var Le,qe={configurable:!0,get:function(){return this.class}},Me=s.vnode;s.vnode=function(Ge){var Ye=Ge.type,Xe=Ge.props,at=Xe;if(typeof Ye=="string"){for(var ut in at={},Xe){var ht=Xe[ut];ut==="value"&&"defaultValue"in Xe&&ht==null||(ut==="defaultValue"&&"value"in Xe&&Xe.value==null?ut="value":ut==="download"&&ht===!0?ht="":/ondoubleclick/i.test(ut)?ut="ondblclick":/^onchange(textarea|input)/i.test(ut+Ye)&&!Ce(Xe.type)?ut="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(ut)?ut=ut.toLowerCase():De.test(ut)?ut=ut.replace(/[A-Z0-9]/,"-$&").toLowerCase():ht===null&&(ht=void 0),at[ut]=ht)}Ye=="select"&&at.multiple&&Array.isArray(at.value)&&(at.value=C(Xe.children).forEach(function(Bo){Bo.props.selected=at.value.indexOf(Bo.props.value)!=-1})),Ye=="select"&&at.defaultValue!=null&&(at.value=C(Xe.children).forEach(function(Bo){Bo.props.selected=at.multiple?at.defaultValue.indexOf(Bo.props.value)!=-1:at.defaultValue==Bo.props.value})),Ge.props=at}Ye&&Xe.class!=Xe.className&&(qe.enumerable="className"in Xe,Xe.className!=null&&(at.class=Xe.className),Object.defineProperty(at,"className",qe)),Ge.$$typeof=ke,Me&&Me(Ge)};var He=s.__r;s.__r=function(Ge){He&&He(Ge),Le=Ge.__c};var Ue={ReactCurrentDispatcher:{current:{readContext:function(Ge){return Le.__n[Ge.__c].props.value}}}};(typeof performance>"u"?"undefined":n(performance))=="object"&&typeof performance.now=="function"&&performance.now.bind(performance);function Fe(Ge){return!!Ge&&Ge.$$typeof===ke}var Be={useState:ne,useReducer:re,useEffect:oe,useLayoutEffect:ce,useRef:function(Ge){return $=5,ie(function(){return{current:Ge}},[])},useImperativeHandle:function(Ge,Ye,Xe){$=6,ce(function(){typeof Ge=="function"?Ge(Ye()):Ge&&(Ge.current=Ye())},Xe==null?Xe:Xe.concat(Ge))},useMemo:ie,useCallback:function(Ge,Ye){return $=8,ie(function(){return Ge},Ye)},useContext:function(Ge){var Ye=z.context[Ge.__c],Xe=te(K++,9);return Xe.__c=Ge,Ye?(Xe.__==null&&(Xe.__=!0,Ye.sub(z)),Ye.props.value):Ge.__},useDebugValue:function(Ge,Ye){s.useDebugValue&&s.useDebugValue(Ye?Ye(Ge):Ge)},version:"16.8.0",Children:be,render:Ae,hydrate:function(Ge,Ye,Xe){return V(Ge,Ye),typeof Xe=="function"&&Xe(),Ge?Ge.__c:null},unmountComponentAtNode:function(Ge){return!!Ge.__k&&(B(null,Ge),!0)},createPortal:Ie,createElement:g,createContext:function(Ge,Ye){var Xe={__c:Ye="__cC"+d++,__:Ge,Consumer:function(at,ut){return at.children(ut)},Provider:function(at){var ut,ht;return this.getChildContext||(ut=[],(ht={})[Ye]=this,this.getChildContext=function(){return ht},this.shouldComponentUpdate=function(Bo){this.props.value!==Bo.value&&ut.some(P)},this.sub=function(Bo){ut.push(Bo);var Ao=Bo.componentWillUnmount;Bo.componentWillUnmount=function(){ut.splice(ut.indexOf(Bo),1),Ao&&Ao.call(Bo)}}),at.children}};return Xe.Provider.__=Xe.Consumer.contextType=Xe},createFactory:function(Ge){return g.bind(null,Ge)},cloneElement:function(Ge){return Fe(Ge)?W.apply(null,arguments):Ge},createRef:function(){return{current:null}},Fragment:S,isValidElement:Fe,findDOMNode:function(Ge){return Ge&&(Ge.base||Ge.nodeType===1&&Ge)||null},Component:E,PureComponent:he,memo:function(Ge,Ye){function Xe(ut){var ht=this.props.ref,Bo=ht==ut.ref;return!Bo&&ht&&(ht.call?ht(null):ht.current=null),Ye?!Ye(this.props,ut)||!Bo:de(this.props,ut)}function at(ut){return this.shouldComponentUpdate=Xe,g(Ge,ut)}return at.displayName="Memo("+(Ge.displayName||Ge.name)+")",at.prototype.isReactComponent=!0,at.__f=!0,at},forwardRef:function(Ge){function Ye(Xe,at){var ut=me({},Xe);return delete ut.ref,Ge(ut,(at=Xe.ref||at)&&(n(at)!="object"||"current"in at)?at:null)}return Ye.$$typeof=ye,Ye.render=Ye,Ye.prototype.isReactComponent=Ye.__f=!0,Ye.displayName="ForwardRef("+(Ge.displayName||Ge.name)+")",Ye},unstable_batchedUpdates:function(Ge,Ye){return Ge(Ye)},StrictMode:S,Suspense:Oe,SuspenseList:Ee,lazy:function(Ge){var Ye,Xe,at;function ut(ht){if(Ye||(Ye=Ge()).then(function(Bo){Xe=Bo.default||Bo},function(Bo){at=Bo}),at)throw at;if(!Xe)throw Ye;return g(Xe,ht)}return ut.displayName="Lazy",ut.__f=!0,ut},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ue};function Ve(){return Be.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},Be.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}function We(){return Be.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},Be.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}var Ke=["translations"];function ze(){return ze=Object.assign||function(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye];for(var at in Xe)Object.prototype.hasOwnProperty.call(Xe,at)&&(Ge[at]=Xe[at])}return Ge},ze.apply(this,arguments)}function Je(Ge,Ye){return function(Xe){if(Array.isArray(Xe))return Xe}(Ge)||function(Xe,at){var ut=Xe==null?null:typeof Symbol<"u"&&Xe[Symbol.iterator]||Xe["@@iterator"];if(ut!=null){var ht,Bo,Ao=[],To=!0,$o=!1;try{for(ut=ut.call(Xe);!(To=(ht=ut.next()).done)&&(Ao.push(ht.value),!at||Ao.length!==at);To=!0);}catch(xo){$o=!0,Bo=xo}finally{try{To||ut.return==null||ut.return()}finally{if($o)throw Bo}}return Ao}}(Ge,Ye)||function(Xe,at){if(Xe){if(typeof Xe=="string")return $e(Xe,at);var ut=Object.prototype.toString.call(Xe).slice(8,-1);if(ut==="Object"&&Xe.constructor&&(ut=Xe.constructor.name),ut==="Map"||ut==="Set")return Array.from(Xe);if(ut==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ut))return $e(Xe,at)}}(Ge,Ye)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function $e(Ge,Ye){(Ye==null||Ye>Ge.length)&&(Ye=Ge.length);for(var Xe=0,at=new Array(Ye);Xe<Ye;Xe++)at[Xe]=Ge[Xe];return at}function Qe(Ge,Ye){if(Ge==null)return{};var Xe,at,ut=function(Bo,Ao){if(Bo==null)return{};var To,$o,xo={},zo=Object.keys(Bo);for($o=0;$o<zo.length;$o++)To=zo[$o],Ao.indexOf(To)>=0||(xo[To]=Bo[To]);return xo}(Ge,Ye);if(Object.getOwnPropertySymbols){var ht=Object.getOwnPropertySymbols(Ge);for(at=0;at<ht.length;at++)Xe=ht[at],Ye.indexOf(Xe)>=0||Object.prototype.propertyIsEnumerable.call(Ge,Xe)&&(ut[Xe]=Ge[Xe])}return ut}var Ze=Be.forwardRef(function(Ge,Ye){var Xe=Ge.translations,at=Xe===void 0?{}:Xe,ut=Qe(Ge,Ke),ht=at.buttonText,Bo=ht===void 0?"Search":ht,Ao=at.buttonAriaLabel,To=Ao===void 0?"Search":Ao,$o=Je(ne(null),2),xo=$o[0],zo=$o[1];return oe(function(){typeof navigator<"u"&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?zo("⌘"):zo("Ctrl"))},[]),Be.createElement("button",ze({type:"button",className:"DocSearch DocSearch-Button","aria-label":To},ut,{ref:Ye}),Be.createElement("span",{className:"DocSearch-Button-Container"},Be.createElement(We,null),Be.createElement("span",{className:"DocSearch-Button-Placeholder"},Bo)),Be.createElement("span",{className:"DocSearch-Button-Keys"},xo!==null&&Be.createElement(Be.Fragment,null,Be.createElement("kbd",{className:"DocSearch-Button-Key"},xo==="Ctrl"?Be.createElement(Ve,null):xo),Be.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))});function tt(Ge){return Ge.reduce(function(Ye,Xe){return Ye.concat(Xe)},[])}var nt=0;function rt(Ge){return Ge.collections.length===0?0:Ge.collections.reduce(function(Ye,Xe){return Ye+Xe.items.length},0)}function ot(Ge,Ye){}var ct=function(){},it=[{segment:"autocomplete-core",version:"1.7.2"}];function lt(Ge,Ye){var Xe=Ye;return{then:function(at,ut){return lt(Ge.then(ft(at,Xe,Ge),ft(ut,Xe,Ge)),Xe)},catch:function(at){return lt(Ge.catch(ft(at,Xe,Ge)),Xe)},finally:function(at){return at&&Xe.onCancelList.push(at),lt(Ge.finally(ft(at&&function(){return Xe.onCancelList=[],at()},Xe,Ge)),Xe)},cancel:function(){Xe.isCanceled=!0;var at=Xe.onCancelList;Xe.onCancelList=[],at.forEach(function(ut){ut()})},isCanceled:function(){return Xe.isCanceled===!0}}}function st(Ge){return lt(Ge,{isCanceled:!1,onCancelList:[]})}function ft(Ge,Ye,Xe){return Ge?function(at){return Ye.isCanceled?at:Ge(at)}:Xe}function pt(Ge,Ye,Xe,at){if(!Xe)return null;if(Ge<0&&(Ye===null||at!==null&&Ye===0))return Xe+Ge;var ut=(Ye===null?-1:Ye)+Ge;return ut<=-1||ut>=Xe?at===null?null:0:ut}function mt(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function dt(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function vt(Ge,Ye){var Xe=[];return Promise.resolve(Ge(Ye)).then(function(at){return Promise.all(at.filter(function(ut){return Boolean(ut)}).map(function(ut){if(ut.sourceId,Xe.includes(ut.sourceId))throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(ut.sourceId)," is not unique."));Xe.push(ut.sourceId);var ht=function(Bo){for(var Ao=1;Ao<arguments.length;Ao++){var To=arguments[Ao]!=null?arguments[Ao]:{};Ao%2?mt(Object(To),!0).forEach(function($o){dt(Bo,$o,To[$o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Bo,Object.getOwnPropertyDescriptors(To)):mt(Object(To)).forEach(function($o){Object.defineProperty(Bo,$o,Object.getOwnPropertyDescriptor(To,$o))})}return Bo}({getItemInputValue:function(Bo){return Bo.state.query},getItemUrl:function(){},onSelect:function(Bo){(0,Bo.setIsOpen)(!1)},onActive:ct},ut);return Promise.resolve(ht)}))})}function yt(Ge){var Ye=function(ut){var ht=ut.collections.map(function(Bo){return Bo.items.length}).reduce(function(Bo,Ao,To){var $o=(Bo[To-1]||0)+Ao;return Bo.push($o),Bo},[]).reduce(function(Bo,Ao){return Ao<=ut.activeItemId?Bo+1:Bo},0);return ut.collections[ht]}(Ge);if(!Ye)return null;var Xe=Ye.items[function(ut){for(var ht=ut.state,Bo=ut.collection,Ao=!1,To=0,$o=0;Ao===!1;){var xo=ht.collections[To];if(xo===Bo){Ao=!0;break}$o+=xo.items.length,To++}return ht.activeItemId-$o}({state:Ge,collection:Ye})],at=Ye.source;return{item:Xe,itemInputValue:at.getItemInputValue({item:Xe,state:Ge}),itemUrl:at.getItemUrl({item:Xe,state:Ge}),source:at}}var _t=/((gt|sm)-|galaxy nexus)|samsung[- ]/i;function bt(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function gt(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?bt(Object(Xe),!0).forEach(function(at){Ot(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):bt(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function Ot(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function St(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function Et(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function wt(Ge,Ye,Xe){var at,ut=Ye.initialState;return{getState:function(){return ut},dispatch:function(ht,Bo){var Ao=function(To){for(var $o=1;$o<arguments.length;$o++){var xo=arguments[$o]!=null?arguments[$o]:{};$o%2?St(Object(xo),!0).forEach(function(zo){Et(To,zo,xo[zo])}):Object.getOwnPropertyDescriptors?Object.defineProperties(To,Object.getOwnPropertyDescriptors(xo)):St(Object(xo)).forEach(function(zo){Object.defineProperty(To,zo,Object.getOwnPropertyDescriptor(xo,zo))})}return To}({},ut);ut=Ge(ut,{type:ht,props:Ye,payload:Bo}),Xe({state:ut,prevState:Ao})},pendingRequests:(at=[],{add:function(ht){return at.push(ht),ht.finally(function(){at=at.filter(function(Bo){return Bo!==ht})})},cancelAll:function(){at.forEach(function(ht){return ht.cancel()})},isEmpty:function(){return at.length===0}})}}function jt(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function Pt(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?jt(Object(Xe),!0).forEach(function(at){It(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):jt(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function It(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function kt(Ge){return function(Ye){if(Array.isArray(Ye))return Dt(Ye)}(Ge)||function(Ye){if(typeof Symbol<"u"&&Ye[Symbol.iterator]!=null||Ye["@@iterator"]!=null)return Array.from(Ye)}(Ge)||function(Ye,Xe){if(Ye){if(typeof Ye=="string")return Dt(Ye,Xe);var at=Object.prototype.toString.call(Ye).slice(8,-1);if(at==="Object"&&Ye.constructor&&(at=Ye.constructor.name),at==="Map"||at==="Set")return Array.from(Ye);if(at==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(at))return Dt(Ye,Xe)}}(Ge)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Dt(Ge,Ye){(Ye==null||Ye>Ge.length)&&(Ye=Ge.length);for(var Xe=0,at=new Array(Ye);Xe<Ye;Xe++)at[Xe]=Ge[Xe];return at}function Ct(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function At(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?Ct(Object(Xe),!0).forEach(function(at){Nt(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):Ct(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function Nt(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function xt(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function Tt(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?xt(Object(Xe),!0).forEach(function(at){Rt(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):xt(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function Rt(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function qt(Ge){return function(Ye){if(Array.isArray(Ye))return Mt(Ye)}(Ge)||function(Ye){if(typeof Symbol<"u"&&Ye[Symbol.iterator]!=null||Ye["@@iterator"]!=null)return Array.from(Ye)}(Ge)||function(Ye,Xe){if(Ye){if(typeof Ye=="string")return Mt(Ye,Xe);var at=Object.prototype.toString.call(Ye).slice(8,-1);if(at==="Object"&&Ye.constructor&&(at=Ye.constructor.name),at==="Map"||at==="Set")return Array.from(Ye);if(at==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(at))return Mt(Ye,Xe)}}(Ge)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Mt(Ge,Ye){(Ye==null||Ye>Ge.length)&&(Ye=Ge.length);for(var Xe=0,at=new Array(Ye);Xe<Ye;Xe++)at[Xe]=Ge[Xe];return at}function Ht(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function Ut(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?Ht(Object(Xe),!0).forEach(function(at){Ft(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):Ht(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function Ft(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function Bt(Ge){return Boolean(Ge.execute)}function Vt(Ge,Ye){return Xe=Ge,Boolean(Xe==null?void 0:Xe.execute)?Ut(Ut({},Ge),{},{requests:Ge.queries.map(function(at){return{query:at,sourceId:Ye,transformResponse:Ge.transformResponse}})}):{items:Ge,sourceId:Ye};var Xe}function Wt(Ge){var Ye=Ge.reduce(function(Xe,at){if(!Bt(at))return Xe.push(at),Xe;var ut=at.searchClient,ht=at.execute,Bo=at.requesterId,Ao=at.requests,To=Xe.find(function(zo){return Bt(at)&&Bt(zo)&&zo.searchClient===ut&&Boolean(Bo)&&zo.requesterId===Bo});if(To){var $o;($o=To.items).push.apply($o,qt(Ao))}else{var xo={execute:ht,requesterId:Bo,items:Ao,searchClient:ut};Xe.push(xo)}return Xe},[]).map(function(Xe){if(!Bt(Xe))return Promise.resolve(Xe);var at=Xe,ut=at.execute,ht=at.items;return ut({searchClient:at.searchClient,requests:ht})});return Promise.all(Ye).then(function(Xe){return tt(Xe)})}function Kt(Ge,Ye){return Ye.map(function(Xe){var at=Ge.filter(function(Ao){return Ao.sourceId===Xe.sourceId}),ut=at.map(function(Ao){return Ao.items}),ht=at[0].transformResponse,Bo=ht?ht(function(Ao){var To=Ao.map(function($o){var xo;return gt(gt({},$o),{},{hits:(xo=$o.hits)===null||xo===void 0?void 0:xo.map(function(zo){return gt(gt({},zo),{},{__autocomplete_indexName:$o.index,__autocomplete_queryID:$o.queryID})})})});return{results:To,hits:To.map(function($o){return $o.hits}).filter(Boolean),facetHits:To.map(function($o){var xo;return(xo=$o.facetHits)===null||xo===void 0?void 0:xo.map(function(zo){return{label:zo.value,count:zo.count,_highlightResult:{label:{value:zo.highlighted}}}})}).filter(Boolean)}}(ut)):ut;return Bo.every(Boolean),'The `getItems` function from source "'.concat(Xe.sourceId,'" must return an array of items but returned ').concat(JSON.stringify(void 0),`.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`),{source:Xe,items:Bo}})}var zt=["event","nextState","props","query","refresh","store"];function Jt(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function $t(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?Jt(Object(Xe),!0).forEach(function(at){Qt(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):Jt(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function Qt(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function Zt(Ge,Ye){if(Ge==null)return{};var Xe,at,ut=function(Bo,Ao){if(Bo==null)return{};var To,$o,xo={},zo=Object.keys(Bo);for($o=0;$o<zo.length;$o++)To=zo[$o],Ao.indexOf(To)>=0||(xo[To]=Bo[To]);return xo}(Ge,Ye);if(Object.getOwnPropertySymbols){var ht=Object.getOwnPropertySymbols(Ge);for(at=0;at<ht.length;at++)Xe=ht[at],Ye.indexOf(Xe)>=0||Object.prototype.propertyIsEnumerable.call(Ge,Xe)&&(ut[Xe]=Ge[Xe])}return ut}var Yt,Gt,Xt,en=null,tn=(Yt=-1,Gt=-1,Xt=void 0,function(Ge){var Ye=++Yt;return Promise.resolve(Ge).then(function(Xe){return Xt&&Ye<Gt?Xt:(Gt=Ye,Xt=Xe,Xe)})});function nn(Ge){var Ye=Ge.event,Xe=Ge.nextState,at=Xe===void 0?{}:Xe,ut=Ge.props,ht=Ge.query,Bo=Ge.refresh,Ao=Ge.store,To=Zt(Ge,zt);en&&ut.environment.clearTimeout(en);var $o=To.setCollections,xo=To.setIsOpen,zo=To.setQuery,Lo=To.setActiveItemId,Mo=To.setStatus;if(zo(ht),Lo(ut.defaultActiveItemId),!ht&&ut.openOnFocus===!1){var Ro,Fo=Ao.getState().collections.map(function(qo){return $t($t({},qo),{},{items:[]})});Mo("idle"),$o(Fo),xo((Ro=at.isOpen)!==null&&Ro!==void 0?Ro:ut.shouldPanelOpen({state:Ao.getState()}));var Zo=st(tn(Fo).then(function(){return Promise.resolve()}));return Ao.pendingRequests.add(Zo)}Mo("loading"),en=ut.environment.setTimeout(function(){Mo("stalled")},ut.stallThreshold);var No=st(tn(ut.getSources($t({query:ht,refresh:Bo,state:Ao.getState()},To)).then(function(qo){return Promise.all(qo.map(function(Ho){return Promise.resolve(Ho.getItems($t({query:ht,refresh:Bo,state:Ao.getState()},To))).then(function(Vo){return Vt(Vo,Ho.sourceId)})})).then(Wt).then(function(Ho){return Kt(Ho,qo)}).then(function(Ho){return function(Vo){var Wo=Vo.collections,Go=Vo.props,Uo=Vo.state,Jo=Wo.reduce(function(Qo,ei){return Tt(Tt({},Qo),{},Rt({},ei.source.sourceId,Tt(Tt({},ei.source),{},{getItems:function(){return tt(ei.items)}})))},{});return tt(Go.reshape({sources:Object.values(Jo),sourcesBySourceId:Jo,state:Uo})).filter(Boolean).map(function(Qo){return{source:Qo,items:Qo.getItems()}})}({collections:Ho,props:ut,state:Ao.getState()})})}))).then(function(qo){var Ho;Mo("idle"),$o(qo);var Vo=ut.shouldPanelOpen({state:Ao.getState()});xo((Ho=at.isOpen)!==null&&Ho!==void 0?Ho:ut.openOnFocus&&!ht&&Vo||Vo);var Wo=yt(Ao.getState());if(Ao.getState().activeItemId!==null&&Wo){var Go=Wo.item,Uo=Wo.itemInputValue,Jo=Wo.itemUrl,Qo=Wo.source;Qo.onActive($t({event:Ye,item:Go,itemInputValue:Uo,itemUrl:Jo,refresh:Bo,source:Qo,state:Ao.getState()},To))}}).finally(function(){Mo("idle"),en&&ut.environment.clearTimeout(en)});return Ao.pendingRequests.add(No)}var rn=["event","props","refresh","store"];function on(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function cn(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?on(Object(Xe),!0).forEach(function(at){an(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):on(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function an(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function un(Ge,Ye){if(Ge==null)return{};var Xe,at,ut=function(Bo,Ao){if(Bo==null)return{};var To,$o,xo={},zo=Object.keys(Bo);for($o=0;$o<zo.length;$o++)To=zo[$o],Ao.indexOf(To)>=0||(xo[To]=Bo[To]);return xo}(Ge,Ye);if(Object.getOwnPropertySymbols){var ht=Object.getOwnPropertySymbols(Ge);for(at=0;at<ht.length;at++)Xe=ht[at],Ye.indexOf(Xe)>=0||Object.prototype.propertyIsEnumerable.call(Ge,Xe)&&(ut[Xe]=Ge[Xe])}return ut}var ln=["props","refresh","store"],sn=["inputElement","formElement","panelElement"],fn=["inputElement"],pn=["inputElement","maxLength"],mn=["item","source"];function dn(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function hn(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?dn(Object(Xe),!0).forEach(function(at){vn(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):dn(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function vn(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function yn(Ge,Ye){if(Ge==null)return{};var Xe,at,ut=function(Bo,Ao){if(Bo==null)return{};var To,$o,xo={},zo=Object.keys(Bo);for($o=0;$o<zo.length;$o++)To=zo[$o],Ao.indexOf(To)>=0||(xo[To]=Bo[To]);return xo}(Ge,Ye);if(Object.getOwnPropertySymbols){var ht=Object.getOwnPropertySymbols(Ge);for(at=0;at<ht.length;at++)Xe=ht[at],Ye.indexOf(Xe)>=0||Object.prototype.propertyIsEnumerable.call(Ge,Xe)&&(ut[Xe]=Ge[Xe])}return ut}function _n(Ge){var Ye=Ge.props,Xe=Ge.refresh,at=Ge.store,ut=yn(Ge,ln);return{getEnvironmentProps:function(ht){var Bo=ht.inputElement,Ao=ht.formElement,To=ht.panelElement;function $o(xo){!at.getState().isOpen&&at.pendingRequests.isEmpty()||xo.target===Bo||[Ao,To].some(function(zo){return Lo=zo,Mo=xo.target,Lo===Mo||Lo.contains(Mo);var Lo,Mo})===!1&&(at.dispatch("blur",null),Ye.debug||at.pendingRequests.cancelAll())}return hn({onTouchStart:$o,onMouseDown:$o,onTouchMove:function(xo){at.getState().isOpen!==!1&&Bo===Ye.environment.document.activeElement&&xo.target!==Bo&&Bo.blur()}},yn(ht,sn))},getRootProps:function(ht){return hn({role:"combobox","aria-expanded":at.getState().isOpen,"aria-haspopup":"listbox","aria-owns":at.getState().isOpen?"".concat(Ye.id,"-list"):void 0,"aria-labelledby":"".concat(Ye.id,"-label")},ht)},getFormProps:function(ht){return ht.inputElement,hn({action:"",noValidate:!0,role:"search",onSubmit:function(Bo){var Ao;Bo.preventDefault(),Ye.onSubmit(hn({event:Bo,refresh:Xe,state:at.getState()},ut)),at.dispatch("submit",null),(Ao=ht.inputElement)===null||Ao===void 0||Ao.blur()},onReset:function(Bo){var Ao;Bo.preventDefault(),Ye.onReset(hn({event:Bo,refresh:Xe,state:at.getState()},ut)),at.dispatch("reset",null),(Ao=ht.inputElement)===null||Ao===void 0||Ao.focus()}},yn(ht,fn))},getLabelProps:function(ht){return hn({htmlFor:"".concat(Ye.id,"-input"),id:"".concat(Ye.id,"-label")},ht)},getInputProps:function(ht){var Bo;function Ao(Fo){(Ye.openOnFocus||Boolean(at.getState().query))&&nn(hn({event:Fo,props:Ye,query:at.getState().completion||at.getState().query,refresh:Xe,store:at},ut)),at.dispatch("focus",null)}var To=ht||{},$o=(To.inputElement,To.maxLength),xo=$o===void 0?512:$o,zo=yn(To,pn),Lo=yt(at.getState()),Mo=function(Fo){return Boolean(Fo&&Fo.match(_t))}(((Bo=Ye.environment.navigator)===null||Bo===void 0?void 0:Bo.userAgent)||""),Ro=Lo!=null&&Lo.itemUrl&&!Mo?"go":"search";return hn({"aria-autocomplete":"both","aria-activedescendant":at.getState().isOpen&&at.getState().activeItemId!==null?"".concat(Ye.id,"-item-").concat(at.getState().activeItemId):void 0,"aria-controls":at.getState().isOpen?"".concat(Ye.id,"-list"):void 0,"aria-labelledby":"".concat(Ye.id,"-label"),value:at.getState().completion||at.getState().query,id:"".concat(Ye.id,"-input"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",enterKeyHint:Ro,spellCheck:"false",autoFocus:Ye.autoFocus,placeholder:Ye.placeholder,maxLength:xo,type:"search",onChange:function(Fo){nn(hn({event:Fo,props:Ye,query:Fo.currentTarget.value.slice(0,xo),refresh:Xe,store:at},ut))},onKeyDown:function(Fo){(function(Zo){var No=Zo.event,qo=Zo.props,Ho=Zo.refresh,Vo=Zo.store,Wo=un(Zo,rn);if(No.key==="ArrowUp"||No.key==="ArrowDown"){var Go=function(){var ti=qo.environment.document.getElementById("".concat(qo.id,"-item-").concat(Vo.getState().activeItemId));ti&&(ti.scrollIntoViewIfNeeded?ti.scrollIntoViewIfNeeded(!1):ti.scrollIntoView(!1))},Uo=function(){var ti=yt(Vo.getState());if(Vo.getState().activeItemId!==null&&ti){var Di=ti.item,ui=ti.itemInputValue,wi=ti.itemUrl,vi=ti.source;vi.onActive(cn({event:No,item:Di,itemInputValue:ui,itemUrl:wi,refresh:Ho,source:vi,state:Vo.getState()},Wo))}};No.preventDefault(),Vo.getState().isOpen===!1&&(qo.openOnFocus||Boolean(Vo.getState().query))?nn(cn({event:No,props:qo,query:Vo.getState().query,refresh:Ho,store:Vo},Wo)).then(function(){Vo.dispatch(No.key,{nextActiveItemId:qo.defaultActiveItemId}),Uo(),setTimeout(Go,0)}):(Vo.dispatch(No.key,{}),Uo(),Go())}else if(No.key==="Escape")No.preventDefault(),Vo.dispatch(No.key,null),Vo.pendingRequests.cancelAll();else if(No.key==="Tab")Vo.dispatch("blur",null),Vo.pendingRequests.cancelAll();else if(No.key==="Enter"){if(Vo.getState().activeItemId===null||Vo.getState().collections.every(function(ti){return ti.items.length===0}))return void(qo.debug||Vo.pendingRequests.cancelAll());No.preventDefault();var Jo=yt(Vo.getState()),Qo=Jo.item,ei=Jo.itemInputValue,ni=Jo.itemUrl,ci=Jo.source;if(No.metaKey||No.ctrlKey)ni!==void 0&&(ci.onSelect(cn({event:No,item:Qo,itemInputValue:ei,itemUrl:ni,refresh:Ho,source:ci,state:Vo.getState()},Wo)),qo.navigator.navigateNewTab({itemUrl:ni,item:Qo,state:Vo.getState()}));else if(No.shiftKey)ni!==void 0&&(ci.onSelect(cn({event:No,item:Qo,itemInputValue:ei,itemUrl:ni,refresh:Ho,source:ci,state:Vo.getState()},Wo)),qo.navigator.navigateNewWindow({itemUrl:ni,item:Qo,state:Vo.getState()}));else if(!No.altKey){if(ni!==void 0)return ci.onSelect(cn({event:No,item:Qo,itemInputValue:ei,itemUrl:ni,refresh:Ho,source:ci,state:Vo.getState()},Wo)),void qo.navigator.navigate({itemUrl:ni,item:Qo,state:Vo.getState()});nn(cn({event:No,nextState:{isOpen:!1},props:qo,query:ei,refresh:Ho,store:Vo},Wo)).then(function(){ci.onSelect(cn({event:No,item:Qo,itemInputValue:ei,itemUrl:ni,refresh:Ho,source:ci,state:Vo.getState()},Wo))})}}})(hn({event:Fo,props:Ye,refresh:Xe,store:at},ut))},onFocus:Ao,onBlur:ct,onClick:function(Fo){ht.inputElement!==Ye.environment.document.activeElement||at.getState().isOpen||Ao(Fo)}},zo)},getPanelProps:function(ht){return hn({onMouseDown:function(Bo){Bo.preventDefault()},onMouseLeave:function(){at.dispatch("mouseleave",null)}},ht)},getListProps:function(ht){return hn({role:"listbox","aria-labelledby":"".concat(Ye.id,"-label"),id:"".concat(Ye.id,"-list")},ht)},getItemProps:function(ht){var Bo=ht.item,Ao=ht.source,To=yn(ht,mn);return hn({id:"".concat(Ye.id,"-item-").concat(Bo.__autocomplete_id),role:"option","aria-selected":at.getState().activeItemId===Bo.__autocomplete_id,onMouseMove:function($o){if(Bo.__autocomplete_id!==at.getState().activeItemId){at.dispatch("mousemove",Bo.__autocomplete_id);var xo=yt(at.getState());if(at.getState().activeItemId!==null&&xo){var zo=xo.item,Lo=xo.itemInputValue,Mo=xo.itemUrl,Ro=xo.source;Ro.onActive(hn({event:$o,item:zo,itemInputValue:Lo,itemUrl:Mo,refresh:Xe,source:Ro,state:at.getState()},ut))}}},onMouseDown:function($o){$o.preventDefault()},onClick:function($o){var xo=Ao.getItemInputValue({item:Bo,state:at.getState()}),zo=Ao.getItemUrl({item:Bo,state:at.getState()});(zo?Promise.resolve():nn(hn({event:$o,nextState:{isOpen:!1},props:Ye,query:xo,refresh:Xe,store:at},ut))).then(function(){Ao.onSelect(hn({event:$o,item:Bo,itemInputValue:xo,itemUrl:zo,refresh:Xe,source:Ao,state:at.getState()},ut))})}},To)}}}function bn(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function gn(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?bn(Object(Xe),!0).forEach(function(at){On(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):bn(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function On(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function Sn(Ge){var Ye,Xe,at,ut,ht=Ge.plugins,Bo=Ge.options,Ao=(Ye=(((Xe=Bo.__autocomplete_metadata)===null||Xe===void 0?void 0:Xe.userAgents)||[])[0])===null||Ye===void 0?void 0:Ye.segment,To=Ao?On({},Ao,Object.keys(((at=Bo.__autocomplete_metadata)===null||at===void 0?void 0:at.options)||{})):{};return{plugins:ht.map(function($o){return{name:$o.name,options:Object.keys($o.__autocomplete_pluginOptions||[])}}),options:gn({"autocomplete-core":Object.keys(Bo)},To),ua:it.concat(((ut=Bo.__autocomplete_metadata)===null||ut===void 0?void 0:ut.userAgents)||[])}}function En(Ge){var Ye,Xe=Ge.state;return Xe.isOpen===!1||Xe.activeItemId===null?null:((Ye=yt(Xe))===null||Ye===void 0?void 0:Ye.itemInputValue)||null}function wn(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function jn(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?wn(Object(Xe),!0).forEach(function(at){Pn(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):wn(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function Pn(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}var In=function(Ge,Ye){switch(Ye.type){case"setActiveItemId":case"mousemove":return jn(jn({},Ge),{},{activeItemId:Ye.payload});case"setQuery":return jn(jn({},Ge),{},{query:Ye.payload,completion:null});case"setCollections":return jn(jn({},Ge),{},{collections:Ye.payload});case"setIsOpen":return jn(jn({},Ge),{},{isOpen:Ye.payload});case"setStatus":return jn(jn({},Ge),{},{status:Ye.payload});case"setContext":return jn(jn({},Ge),{},{context:jn(jn({},Ge.context),Ye.payload)});case"ArrowDown":var Xe=jn(jn({},Ge),{},{activeItemId:Ye.payload.hasOwnProperty("nextActiveItemId")?Ye.payload.nextActiveItemId:pt(1,Ge.activeItemId,rt(Ge),Ye.props.defaultActiveItemId)});return jn(jn({},Xe),{},{completion:En({state:Xe})});case"ArrowUp":var at=jn(jn({},Ge),{},{activeItemId:pt(-1,Ge.activeItemId,rt(Ge),Ye.props.defaultActiveItemId)});return jn(jn({},at),{},{completion:En({state:at})});case"Escape":return Ge.isOpen?jn(jn({},Ge),{},{activeItemId:null,isOpen:!1,completion:null}):jn(jn({},Ge),{},{activeItemId:null,query:"",status:"idle",collections:[]});case"submit":return jn(jn({},Ge),{},{activeItemId:null,isOpen:!1,status:"idle"});case"reset":return jn(jn({},Ge),{},{activeItemId:Ye.props.openOnFocus===!0?Ye.props.defaultActiveItemId:null,status:"idle",query:""});case"focus":return jn(jn({},Ge),{},{activeItemId:Ye.props.defaultActiveItemId,isOpen:(Ye.props.openOnFocus||Boolean(Ge.query))&&Ye.props.shouldPanelOpen({state:Ge})});case"blur":return Ye.props.debug?Ge:jn(jn({},Ge),{},{isOpen:!1,activeItemId:null});case"mouseleave":return jn(jn({},Ge),{},{activeItemId:Ye.props.defaultActiveItemId});default:return"The reducer action ".concat(JSON.stringify(Ye.type)," is not supported."),Ge}};function kn(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function Dn(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?kn(Object(Xe),!0).forEach(function(at){Cn(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):kn(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function Cn(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function An(Ge){var Ye=[],Xe=function(Ao,To){var $o,xo=typeof window<"u"?window:{},zo=Ao.plugins||[];return At(At({debug:!1,openOnFocus:!1,placeholder:"",autoFocus:!1,defaultActiveItemId:null,stallThreshold:300,environment:xo,shouldPanelOpen:function(Lo){return rt(Lo.state)>0},reshape:function(Lo){return Lo.sources}},Ao),{},{id:($o=Ao.id)!==null&&$o!==void 0?$o:"autocomplete-".concat(nt++),plugins:zo,initialState:At({activeItemId:null,query:"",completion:null,collections:[],isOpen:!1,status:"idle",context:{}},Ao.initialState),onStateChange:function(Lo){var Mo;(Mo=Ao.onStateChange)===null||Mo===void 0||Mo.call(Ao,Lo),zo.forEach(function(Ro){var Fo;return(Fo=Ro.onStateChange)===null||Fo===void 0?void 0:Fo.call(Ro,Lo)})},onSubmit:function(Lo){var Mo;(Mo=Ao.onSubmit)===null||Mo===void 0||Mo.call(Ao,Lo),zo.forEach(function(Ro){var Fo;return(Fo=Ro.onSubmit)===null||Fo===void 0?void 0:Fo.call(Ro,Lo)})},onReset:function(Lo){var Mo;(Mo=Ao.onReset)===null||Mo===void 0||Mo.call(Ao,Lo),zo.forEach(function(Ro){var Fo;return(Fo=Ro.onReset)===null||Fo===void 0?void 0:Fo.call(Ro,Lo)})},getSources:function(Lo){return Promise.all([].concat(kt(zo.map(function(Mo){return Mo.getSources})),[Ao.getSources]).filter(Boolean).map(function(Mo){return vt(Mo,Lo)})).then(function(Mo){return tt(Mo)}).then(function(Mo){return Mo.map(function(Ro){return At(At({},Ro),{},{onSelect:function(Fo){Ro.onSelect(Fo),To.forEach(function(Zo){var No;return(No=Zo.onSelect)===null||No===void 0?void 0:No.call(Zo,Fo)})},onActive:function(Fo){Ro.onActive(Fo),To.forEach(function(Zo){var No;return(No=Zo.onActive)===null||No===void 0?void 0:No.call(Zo,Fo)})}})})})},navigator:At({navigate:function(Lo){var Mo=Lo.itemUrl;xo.location.assign(Mo)},navigateNewTab:function(Lo){var Mo=Lo.itemUrl,Ro=xo.open(Mo,"_blank","noopener");Ro==null||Ro.focus()},navigateNewWindow:function(Lo){var Mo=Lo.itemUrl;xo.open(Mo,"_blank","noopener")}},Ao.navigator)})}(Ge,Ye),at=wt(In,Xe,function(Ao){var To=Ao.prevState,$o=Ao.state;Xe.onStateChange(Dn({prevState:To,state:$o,refresh:Bo},ut))}),ut=function(Ao){var To=Ao.store;return{setActiveItemId:function($o){To.dispatch("setActiveItemId",$o)},setQuery:function($o){To.dispatch("setQuery",$o)},setCollections:function($o){var xo=0,zo=$o.map(function(Lo){return Pt(Pt({},Lo),{},{items:tt(Lo.items).map(function(Mo){return Pt(Pt({},Mo),{},{__autocomplete_id:xo++})})})});To.dispatch("setCollections",zo)},setIsOpen:function($o){To.dispatch("setIsOpen",$o)},setStatus:function($o){To.dispatch("setStatus",$o)},setContext:function($o){To.dispatch("setContext",$o)}}}({store:at}),ht=_n(Dn({props:Xe,refresh:Bo,store:at},ut));function Bo(){return nn(Dn({event:new Event("input"),nextState:{isOpen:at.getState().isOpen},props:Xe,query:at.getState().query,refresh:Bo,store:at},ut))}return Xe.plugins.forEach(function(Ao){var To;return(To=Ao.subscribe)===null||To===void 0?void 0:To.call(Ao,Dn(Dn({},ut),{},{refresh:Bo,onSelect:function($o){Ye.push({onSelect:$o})},onActive:function($o){Ye.push({onActive:$o})}}))}),function(Ao){var To,$o,xo=Ao.metadata,zo=Ao.environment;if(!((To=zo.navigator)===null||To===void 0||($o=To.userAgent)===null||$o===void 0)&&$o.includes("Algolia Crawler")){var Lo=zo.document.createElement("meta"),Mo=zo.document.querySelector("head");Lo.name="algolia:metadata",setTimeout(function(){Lo.content=JSON.stringify(xo),Mo.appendChild(Lo)},0)}}({metadata:Sn({plugins:Xe.plugins,options:Ge}),environment:Xe.environment}),Dn(Dn({refresh:Bo},ht),ut)}function Nn(Ge){var Ye=Ge.translations,Xe=(Ye===void 0?{}:Ye).searchByText,at=Xe===void 0?"Search by":Xe;return Be.createElement("a",{href:"https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname,"&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"),target:"_blank",rel:"noopener noreferrer"},Be.createElement("span",{className:"DocSearch-Label"},at),Be.createElement("svg",{width:"77",height:"19","aria-label":"Algolia",role:"img",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2196.2 500"},Be.createElement("defs",null,Be.createElement("style",null,".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")),Be.createElement("path",{className:"cls-2",d:"M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"}),Be.createElement("rect",{className:"cls-1",x:"1845.88",y:"104.73",width:"62.58",height:"277.9",rx:"5.9",ry:"5.9"}),Be.createElement("path",{className:"cls-2",d:"M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z"}),Be.createElement("path",{className:"cls-2",d:"M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"}),Be.createElement("path",{className:"cls-2",d:"M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z"}),Be.createElement("path",{className:"cls-2",d:"M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"}),Be.createElement("path",{className:"cls-2",d:"M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"}),Be.createElement("path",{className:"cls-2",d:"M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z"}),Be.createElement("path",{className:"cls-1",d:"M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z"})))}function xn(Ge){return Be.createElement("svg",{width:"15",height:"15","aria-label":Ge.ariaLabel,role:"img"},Be.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2"},Ge.children))}function Tn(Ge){var Ye=Ge.translations,Xe=Ye===void 0?{}:Ye,at=Xe.selectText,ut=at===void 0?"to select":at,ht=Xe.selectKeyAriaLabel,Bo=ht===void 0?"Enter key":ht,Ao=Xe.navigateText,To=Ao===void 0?"to navigate":Ao,$o=Xe.navigateUpKeyAriaLabel,xo=$o===void 0?"Arrow up":$o,zo=Xe.navigateDownKeyAriaLabel,Lo=zo===void 0?"Arrow down":zo,Mo=Xe.closeText,Ro=Mo===void 0?"to close":Mo,Fo=Xe.closeKeyAriaLabel,Zo=Fo===void 0?"Escape key":Fo,No=Xe.searchByText,qo=No===void 0?"Search by":No;return Be.createElement(Be.Fragment,null,Be.createElement("div",{className:"DocSearch-Logo"},Be.createElement(Nn,{translations:{searchByText:qo}})),Be.createElement("ul",{className:"DocSearch-Commands"},Be.createElement("li",null,Be.createElement("kbd",{className:"DocSearch-Commands-Key"},Be.createElement(xn,{ariaLabel:Bo},Be.createElement("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"}))),Be.createElement("span",{className:"DocSearch-Label"},ut)),Be.createElement("li",null,Be.createElement("kbd",{className:"DocSearch-Commands-Key"},Be.createElement(xn,{ariaLabel:Lo},Be.createElement("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"}))),Be.createElement("kbd",{className:"DocSearch-Commands-Key"},Be.createElement(xn,{ariaLabel:xo},Be.createElement("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"}))),Be.createElement("span",{className:"DocSearch-Label"},To)),Be.createElement("li",null,Be.createElement("kbd",{className:"DocSearch-Commands-Key"},Be.createElement(xn,{ariaLabel:Zo},Be.createElement("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"}))),Be.createElement("span",{className:"DocSearch-Label"},Ro))))}function Rn(Ge){var Ye=Ge.hit,Xe=Ge.children;return Be.createElement("a",{href:Ye.url},Xe)}function Ln(){return Be.createElement("svg",{viewBox:"0 0 38 38",stroke:"currentColor",strokeOpacity:".5"},Be.createElement("g",{fill:"none",fillRule:"evenodd"},Be.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},Be.createElement("circle",{strokeOpacity:".3",cx:"18",cy:"18",r:"18"}),Be.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},Be.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}function qn(){return Be.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},Be.createElement("path",{d:"M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"}),Be.createElement("path",{d:"M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"})))}function Mn(){return Be.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("path",{d:"M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function Hn(){return Be.createElement("svg",{className:"DocSearch-Hit-Select-Icon",width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},Be.createElement("path",{d:"M18 3v4c0 2-2 4-4 4H2"}),Be.createElement("path",{d:"M8 17l-6-6 6-6"})))}var Un=function(){return Be.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("path",{d:"M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))};function Fn(Ge){switch(Ge.type){case"lvl1":return Be.createElement(Un,null);case"content":return Be.createElement(Vn,null);default:return Be.createElement(Bn,null)}}function Bn(){return Be.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("path",{d:"M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function Vn(){return Be.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("path",{d:"M17 5H3h14zm0 5H3h14zm0 5H3h14z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function Wn(){return Be.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},Be.createElement("path",{d:"M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function Kn(){return Be.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},Be.createElement("path",{d:"M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"}))}function zn(){return Be.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},Be.createElement("path",{d:"M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"}))}function Jn(Ge){var Ye=Ge.translations,Xe=Ye===void 0?{}:Ye,at=Xe.titleText,ut=at===void 0?"Unable to fetch results":at,ht=Xe.helpText,Bo=ht===void 0?"You might want to check your network connection.":ht;return Be.createElement("div",{className:"DocSearch-ErrorScreen"},Be.createElement("div",{className:"DocSearch-Screen-Icon"},Be.createElement(Kn,null)),Be.createElement("p",{className:"DocSearch-Title"},ut),Be.createElement("p",{className:"DocSearch-Help"},Bo))}var $n=["translations"];function Qn(Ge){return function(Ye){if(Array.isArray(Ye))return Zn(Ye)}(Ge)||function(Ye){if(typeof Symbol<"u"&&Ye[Symbol.iterator]!=null||Ye["@@iterator"]!=null)return Array.from(Ye)}(Ge)||function(Ye,Xe){if(Ye){if(typeof Ye=="string")return Zn(Ye,Xe);var at=Object.prototype.toString.call(Ye).slice(8,-1);if(at==="Object"&&Ye.constructor&&(at=Ye.constructor.name),at==="Map"||at==="Set")return Array.from(Ye);if(at==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(at))return Zn(Ye,Xe)}}(Ge)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Zn(Ge,Ye){(Ye==null||Ye>Ge.length)&&(Ye=Ge.length);for(var Xe=0,at=new Array(Ye);Xe<Ye;Xe++)at[Xe]=Ge[Xe];return at}function Yn(Ge,Ye){if(Ge==null)return{};var Xe,at,ut=function(Bo,Ao){if(Bo==null)return{};var To,$o,xo={},zo=Object.keys(Bo);for($o=0;$o<zo.length;$o++)To=zo[$o],Ao.indexOf(To)>=0||(xo[To]=Bo[To]);return xo}(Ge,Ye);if(Object.getOwnPropertySymbols){var ht=Object.getOwnPropertySymbols(Ge);for(at=0;at<ht.length;at++)Xe=ht[at],Ye.indexOf(Xe)>=0||Object.prototype.propertyIsEnumerable.call(Ge,Xe)&&(ut[Xe]=Ge[Xe])}return ut}function Gn(Ge){var Ye=Ge.translations,Xe=Ye===void 0?{}:Ye,at=Yn(Ge,$n),ut=Xe.noResultsText,ht=ut===void 0?"No results for":ut,Bo=Xe.suggestedQueryText,Ao=Bo===void 0?"Try searching for":Bo,To=Xe.reportMissingResultsText,$o=To===void 0?"Believe this query should return results?":To,xo=Xe.reportMissingResultsLinkText,zo=xo===void 0?"Let us know.":xo,Lo=at.state.context.searchSuggestions;return Be.createElement("div",{className:"DocSearch-NoResults"},Be.createElement("div",{className:"DocSearch-Screen-Icon"},Be.createElement(zn,null)),Be.createElement("p",{className:"DocSearch-Title"},ht,' "',Be.createElement("strong",null,at.state.query),'"'),Lo&&Lo.length>0&&Be.createElement("div",{className:"DocSearch-NoResults-Prefill-List"},Be.createElement("p",{className:"DocSearch-Help"},Ao,":"),Be.createElement("ul",null,Lo.slice(0,3).reduce(function(Mo,Ro){return[].concat(Qn(Mo),[Be.createElement("li",{key:Ro},Be.createElement("button",{className:"DocSearch-Prefill",key:Ro,type:"button",onClick:function(){at.setQuery(Ro.toLowerCase()+" "),at.refresh(),at.inputRef.current.focus()}},Ro))])},[]))),at.getMissingResultsUrl&&Be.createElement("p",{className:"DocSearch-Help"},"".concat($o," "),Be.createElement("a",{href:at.getMissingResultsUrl({query:at.state.query}),target:"_blank",rel:"noopener noreferrer"},zo)))}var Xn=["hit","attribute","tagName"];function er(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function tr(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?er(Object(Xe),!0).forEach(function(at){nr(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):er(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function nr(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function rr(Ge,Ye){if(Ge==null)return{};var Xe,at,ut=function(Bo,Ao){if(Bo==null)return{};var To,$o,xo={},zo=Object.keys(Bo);for($o=0;$o<zo.length;$o++)To=zo[$o],Ao.indexOf(To)>=0||(xo[To]=Bo[To]);return xo}(Ge,Ye);if(Object.getOwnPropertySymbols){var ht=Object.getOwnPropertySymbols(Ge);for(at=0;at<ht.length;at++)Xe=ht[at],Ye.indexOf(Xe)>=0||Object.prototype.propertyIsEnumerable.call(Ge,Xe)&&(ut[Xe]=Ge[Xe])}return ut}function or(Ge,Ye){return Ye.split(".").reduce(function(Xe,at){return Xe!=null&&Xe[at]?Xe[at]:null},Ge)}function cr(Ge){var Ye=Ge.hit,Xe=Ge.attribute,at=Ge.tagName;return g(at===void 0?"span":at,tr(tr({},rr(Ge,Xn)),{},{dangerouslySetInnerHTML:{__html:or(Ye,"_snippetResult.".concat(Xe,".value"))||or(Ye,Xe)}}))}function ir(Ge,Ye){return function(Xe){if(Array.isArray(Xe))return Xe}(Ge)||function(Xe,at){var ut=Xe==null?null:typeof Symbol<"u"&&Xe[Symbol.iterator]||Xe["@@iterator"];if(ut!=null){var ht,Bo,Ao=[],To=!0,$o=!1;try{for(ut=ut.call(Xe);!(To=(ht=ut.next()).done)&&(Ao.push(ht.value),!at||Ao.length!==at);To=!0);}catch(xo){$o=!0,Bo=xo}finally{try{To||ut.return==null||ut.return()}finally{if($o)throw Bo}}return Ao}}(Ge,Ye)||function(Xe,at){if(Xe){if(typeof Xe=="string")return ar(Xe,at);var ut=Object.prototype.toString.call(Xe).slice(8,-1);if(ut==="Object"&&Xe.constructor&&(ut=Xe.constructor.name),ut==="Map"||ut==="Set")return Array.from(Xe);if(ut==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ut))return ar(Xe,at)}}(Ge,Ye)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ar(Ge,Ye){(Ye==null||Ye>Ge.length)&&(Ye=Ge.length);for(var Xe=0,at=new Array(Ye);Xe<Ye;Xe++)at[Xe]=Ge[Xe];return at}function ur(){return ur=Object.assign||function(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye];for(var at in Xe)Object.prototype.hasOwnProperty.call(Xe,at)&&(Ge[at]=Xe[at])}return Ge},ur.apply(this,arguments)}function lr(Ge){return Ge.collection&&Ge.collection.items.length!==0?Be.createElement("section",{className:"DocSearch-Hits"},Be.createElement("div",{className:"DocSearch-Hit-source"},Ge.title),Be.createElement("ul",Ge.getListProps(),Ge.collection.items.map(function(Ye,Xe){return Be.createElement(sr,ur({key:[Ge.title,Ye.objectID].join(":"),item:Ye,index:Xe},Ge))}))):null}function sr(Ge){var Ye=Ge.item,Xe=Ge.index,at=Ge.renderIcon,ut=Ge.renderAction,ht=Ge.getItemProps,Bo=Ge.onItemClick,Ao=Ge.collection,To=Ge.hitComponent,$o=ir(Be.useState(!1),2),xo=$o[0],zo=$o[1],Lo=ir(Be.useState(!1),2),Mo=Lo[0],Ro=Lo[1],Fo=Be.useRef(null),Zo=To;return Be.createElement("li",ur({className:["DocSearch-Hit",Ye.__docsearch_parent&&"DocSearch-Hit--Child",xo&&"DocSearch-Hit--deleting",Mo&&"DocSearch-Hit--favoriting"].filter(Boolean).join(" "),onTransitionEnd:function(){Fo.current&&Fo.current()}},ht({item:Ye,source:Ao.source,onClick:function(){Bo(Ye)}})),Be.createElement(Zo,{hit:Ye},Be.createElement("div",{className:"DocSearch-Hit-Container"},at({item:Ye,index:Xe}),Ye.hierarchy[Ye.type]&&Ye.type==="lvl1"&&Be.createElement("div",{className:"DocSearch-Hit-content-wrapper"},Be.createElement(cr,{className:"DocSearch-Hit-title",hit:Ye,attribute:"hierarchy.lvl1"}),Ye.content&&Be.createElement(cr,{className:"DocSearch-Hit-path",hit:Ye,attribute:"content"})),Ye.hierarchy[Ye.type]&&(Ye.type==="lvl2"||Ye.type==="lvl3"||Ye.type==="lvl4"||Ye.type==="lvl5"||Ye.type==="lvl6")&&Be.createElement("div",{className:"DocSearch-Hit-content-wrapper"},Be.createElement(cr,{className:"DocSearch-Hit-title",hit:Ye,attribute:"hierarchy.".concat(Ye.type)}),Be.createElement(cr,{className:"DocSearch-Hit-path",hit:Ye,attribute:"hierarchy.lvl1"})),Ye.type==="content"&&Be.createElement("div",{className:"DocSearch-Hit-content-wrapper"},Be.createElement(cr,{className:"DocSearch-Hit-title",hit:Ye,attribute:"content"}),Be.createElement(cr,{className:"DocSearch-Hit-path",hit:Ye,attribute:"hierarchy.lvl1"})),ut({item:Ye,runDeleteTransition:function(No){zo(!0),Fo.current=No},runFavoriteTransition:function(No){Ro(!0),Fo.current=No}}))))}function fr(Ge,Ye){return Ge.reduce(function(Xe,at){var ut=Ye(at);return Xe.hasOwnProperty(ut)||(Xe[ut]=[]),Xe[ut].length<5&&Xe[ut].push(at),Xe},{})}function pr(Ge){return Ge}function mr(){}var dr=/(<mark>|<\/mark>)/g,hr=RegExp(dr.source);function vr(Ge){var Ye,Xe,at,ut,ht,Bo=Ge;if(!Bo.__docsearch_parent&&!Ge._highlightResult)return Ge.hierarchy.lvl0;var Ao=((Bo.__docsearch_parent?(Ye=Bo.__docsearch_parent)===null||Ye===void 0||(Xe=Ye._highlightResult)===null||Xe===void 0||(at=Xe.hierarchy)===null||at===void 0?void 0:at.lvl0:(ut=Ge._highlightResult)===null||ut===void 0||(ht=ut.hierarchy)===null||ht===void 0?void 0:ht.lvl0)||{}).value;return Ao&&hr.test(Ao)?Ao.replace(dr,""):Ao}function yr(){return yr=Object.assign||function(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye];for(var at in Xe)Object.prototype.hasOwnProperty.call(Xe,at)&&(Ge[at]=Xe[at])}return Ge},yr.apply(this,arguments)}function _r(Ge){return Be.createElement("div",{className:"DocSearch-Dropdown-Container"},Ge.state.collections.map(function(Ye){if(Ye.items.length===0)return null;var Xe=vr(Ye.items[0]);return Be.createElement(lr,yr({},Ge,{key:Ye.source.sourceId,title:Xe,collection:Ye,renderIcon:function(at){var ut,ht=at.item,Bo=at.index;return Be.createElement(Be.Fragment,null,ht.__docsearch_parent&&Be.createElement("svg",{className:"DocSearch-Hit-Tree",viewBox:"0 0 24 54"},Be.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},ht.__docsearch_parent!==((ut=Ye.items[Bo+1])===null||ut===void 0?void 0:ut.__docsearch_parent)?Be.createElement("path",{d:"M8 6v21M20 27H8.3"}):Be.createElement("path",{d:"M8 6v42M20 27H8.3"}))),Be.createElement("div",{className:"DocSearch-Hit-icon"},Be.createElement(Fn,{type:ht.type})))},renderAction:function(){return Be.createElement("div",{className:"DocSearch-Hit-action"},Be.createElement(Hn,null))}}))}),Ge.resultsFooterComponent&&Be.createElement("section",{className:"DocSearch-HitsFooter"},Be.createElement(Ge.resultsFooterComponent,{state:Ge.state})))}var br=["translations"];function gr(){return gr=Object.assign||function(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye];for(var at in Xe)Object.prototype.hasOwnProperty.call(Xe,at)&&(Ge[at]=Xe[at])}return Ge},gr.apply(this,arguments)}function Or(Ge,Ye){if(Ge==null)return{};var Xe,at,ut=function(Bo,Ao){if(Bo==null)return{};var To,$o,xo={},zo=Object.keys(Bo);for($o=0;$o<zo.length;$o++)To=zo[$o],Ao.indexOf(To)>=0||(xo[To]=Bo[To]);return xo}(Ge,Ye);if(Object.getOwnPropertySymbols){var ht=Object.getOwnPropertySymbols(Ge);for(at=0;at<ht.length;at++)Xe=ht[at],Ye.indexOf(Xe)>=0||Object.prototype.propertyIsEnumerable.call(Ge,Xe)&&(ut[Xe]=Ge[Xe])}return ut}function Sr(Ge){var Ye=Ge.translations,Xe=Ye===void 0?{}:Ye,at=Or(Ge,br),ut=Xe.recentSearchesTitle,ht=ut===void 0?"Recent":ut,Bo=Xe.noRecentSearchesText,Ao=Bo===void 0?"No recent searches":Bo,To=Xe.saveRecentSearchButtonTitle,$o=To===void 0?"Save this search":To,xo=Xe.removeRecentSearchButtonTitle,zo=xo===void 0?"Remove this search from history":xo,Lo=Xe.favoriteSearchesTitle,Mo=Lo===void 0?"Favorite":Lo,Ro=Xe.removeFavoriteSearchButtonTitle,Fo=Ro===void 0?"Remove this search from favorites":Ro;return at.state.status==="idle"&&at.hasCollections===!1?at.disableUserPersonalization?null:Be.createElement("div",{className:"DocSearch-StartScreen"},Be.createElement("p",{className:"DocSearch-Help"},Ao)):at.hasCollections===!1?null:Be.createElement("div",{className:"DocSearch-Dropdown-Container"},Be.createElement(lr,gr({},at,{title:ht,collection:at.state.collections[0],renderIcon:function(){return Be.createElement("div",{className:"DocSearch-Hit-icon"},Be.createElement(qn,null))},renderAction:function(Zo){var No=Zo.item,qo=Zo.runFavoriteTransition,Ho=Zo.runDeleteTransition;return Be.createElement(Be.Fragment,null,Be.createElement("div",{className:"DocSearch-Hit-action"},Be.createElement("button",{className:"DocSearch-Hit-action-button",title:$o,type:"submit",onClick:function(Vo){Vo.preventDefault(),Vo.stopPropagation(),qo(function(){at.favoriteSearches.add(No),at.recentSearches.remove(No),at.refresh()})}},Be.createElement(Wn,null))),Be.createElement("div",{className:"DocSearch-Hit-action"},Be.createElement("button",{className:"DocSearch-Hit-action-button",title:zo,type:"submit",onClick:function(Vo){Vo.preventDefault(),Vo.stopPropagation(),Ho(function(){at.recentSearches.remove(No),at.refresh()})}},Be.createElement(Mn,null))))}})),Be.createElement(lr,gr({},at,{title:Mo,collection:at.state.collections[1],renderIcon:function(){return Be.createElement("div",{className:"DocSearch-Hit-icon"},Be.createElement(Wn,null))},renderAction:function(Zo){var No=Zo.item,qo=Zo.runDeleteTransition;return Be.createElement("div",{className:"DocSearch-Hit-action"},Be.createElement("button",{className:"DocSearch-Hit-action-button",title:Fo,type:"submit",onClick:function(Ho){Ho.preventDefault(),Ho.stopPropagation(),qo(function(){at.favoriteSearches.remove(No),at.refresh()})}},Be.createElement(Mn,null)))}})))}var Er=["translations"];function wr(){return wr=Object.assign||function(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye];for(var at in Xe)Object.prototype.hasOwnProperty.call(Xe,at)&&(Ge[at]=Xe[at])}return Ge},wr.apply(this,arguments)}function jr(Ge,Ye){if(Ge==null)return{};var Xe,at,ut=function(Bo,Ao){if(Bo==null)return{};var To,$o,xo={},zo=Object.keys(Bo);for($o=0;$o<zo.length;$o++)To=zo[$o],Ao.indexOf(To)>=0||(xo[To]=Bo[To]);return xo}(Ge,Ye);if(Object.getOwnPropertySymbols){var ht=Object.getOwnPropertySymbols(Ge);for(at=0;at<ht.length;at++)Xe=ht[at],Ye.indexOf(Xe)>=0||Object.prototype.propertyIsEnumerable.call(Ge,Xe)&&(ut[Xe]=Ge[Xe])}return ut}var Pr=Be.memo(function(Ge){var Ye=Ge.translations,Xe=Ye===void 0?{}:Ye,at=jr(Ge,Er);if(at.state.status==="error")return Be.createElement(Jn,{translations:Xe==null?void 0:Xe.errorScreen});var ut=at.state.collections.some(function(ht){return ht.items.length>0});return at.state.query?ut===!1?Be.createElement(Gn,wr({},at,{translations:Xe==null?void 0:Xe.noResultsScreen})):Be.createElement(_r,at):Be.createElement(Sr,wr({},at,{hasCollections:ut,translations:Xe==null?void 0:Xe.startScreen}))},function(Ge,Ye){return Ye.state.status==="loading"||Ye.state.status==="stalled"}),Ir=["translations"];function kr(){return kr=Object.assign||function(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye];for(var at in Xe)Object.prototype.hasOwnProperty.call(Xe,at)&&(Ge[at]=Xe[at])}return Ge},kr.apply(this,arguments)}function Dr(Ge,Ye){if(Ge==null)return{};var Xe,at,ut=function(Bo,Ao){if(Bo==null)return{};var To,$o,xo={},zo=Object.keys(Bo);for($o=0;$o<zo.length;$o++)To=zo[$o],Ao.indexOf(To)>=0||(xo[To]=Bo[To]);return xo}(Ge,Ye);if(Object.getOwnPropertySymbols){var ht=Object.getOwnPropertySymbols(Ge);for(at=0;at<ht.length;at++)Xe=ht[at],Ye.indexOf(Xe)>=0||Object.prototype.propertyIsEnumerable.call(Ge,Xe)&&(ut[Xe]=Ge[Xe])}return ut}function Cr(Ge){var Ye=Ge.translations,Xe=Ye===void 0?{}:Ye,at=Dr(Ge,Ir),ut=Xe.resetButtonTitle,ht=ut===void 0?"Clear the query":ut,Bo=Xe.resetButtonAriaLabel,Ao=Bo===void 0?"Clear the query":Bo,To=Xe.cancelButtonText,$o=To===void 0?"Cancel":To,xo=Xe.cancelButtonAriaLabel,zo=xo===void 0?"Cancel":xo,Lo=at.getFormProps({inputElement:at.inputRef.current}).onReset;return Be.useEffect(function(){at.autoFocus&&at.inputRef.current&&at.inputRef.current.focus()},[at.autoFocus,at.inputRef]),Be.useEffect(function(){at.isFromSelection&&at.inputRef.current&&at.inputRef.current.select()},[at.isFromSelection,at.inputRef]),Be.createElement(Be.Fragment,null,Be.createElement("form",{className:"DocSearch-Form",onSubmit:function(Mo){Mo.preventDefault()},onReset:Lo},Be.createElement("label",kr({className:"DocSearch-MagnifierLabel"},at.getLabelProps()),Be.createElement(We,null)),Be.createElement("div",{className:"DocSearch-LoadingIndicator"},Be.createElement(Ln,null)),Be.createElement("input",kr({className:"DocSearch-Input",ref:at.inputRef},at.getInputProps({inputElement:at.inputRef.current,autoFocus:at.autoFocus,maxLength:64}))),Be.createElement("button",{type:"reset",title:ht,className:"DocSearch-Reset","aria-label":Ao,hidden:!at.state.query},Be.createElement(Mn,null))),Be.createElement("button",{className:"DocSearch-Cancel",type:"reset","aria-label":zo,onClick:at.onClose},$o))}var Ar=["_highlightResult","_snippetResult"];function Nr(Ge,Ye){if(Ge==null)return{};var Xe,at,ut=function(Bo,Ao){if(Bo==null)return{};var To,$o,xo={},zo=Object.keys(Bo);for($o=0;$o<zo.length;$o++)To=zo[$o],Ao.indexOf(To)>=0||(xo[To]=Bo[To]);return xo}(Ge,Ye);if(Object.getOwnPropertySymbols){var ht=Object.getOwnPropertySymbols(Ge);for(at=0;at<ht.length;at++)Xe=ht[at],Ye.indexOf(Xe)>=0||Object.prototype.propertyIsEnumerable.call(Ge,Xe)&&(ut[Xe]=Ge[Xe])}return ut}function xr(Ge){return function(){var Ye="__TEST_KEY__";try{return localStorage.setItem(Ye,""),localStorage.removeItem(Ye),!0}catch{return!1}}()===!1?{setItem:function(){},getItem:function(){return[]}}:{setItem:function(Ye){return window.localStorage.setItem(Ge,JSON.stringify(Ye))},getItem:function(){var Ye=window.localStorage.getItem(Ge);return Ye?JSON.parse(Ye):[]}}}function Tr(Ge){var Ye=Ge.key,Xe=Ge.limit,at=Xe===void 0?5:Xe,ut=xr(Ye),ht=ut.getItem().slice(0,at);return{add:function(Bo){var Ao=Bo,To=(Ao._highlightResult,Ao._snippetResult,Nr(Ao,Ar)),$o=ht.findIndex(function(xo){return xo.objectID===To.objectID});$o>-1&&ht.splice($o,1),ht.unshift(To),ht=ht.slice(0,at),ut.setItem(ht)},remove:function(Bo){ht=ht.filter(function(Ao){return Ao.objectID!==Bo.objectID}),ut.setItem(ht)},getAll:function(){return ht}}}var Rr=["facetName","facetQuery"];function Lr(Ge){var Ye,Xe="algoliasearch-client-js-".concat(Ge.key),at=function(){return Ye===void 0&&(Ye=Ge.localStorage||window.localStorage),Ye},ut=function(){return JSON.parse(at().getItem(Xe)||"{}")};return{get:function(ht,Bo){var Ao=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then(function(){var To=JSON.stringify(ht),$o=ut()[To];return Promise.all([$o||Bo(),$o!==void 0])}).then(function(To){var $o=i(To,2),xo=$o[0],zo=$o[1];return Promise.all([xo,zo||Ao.miss(xo)])}).then(function(To){return i(To,1)[0]})},set:function(ht,Bo){return Promise.resolve().then(function(){var Ao=ut();return Ao[JSON.stringify(ht)]=Bo,at().setItem(Xe,JSON.stringify(Ao)),Bo})},delete:function(ht){return Promise.resolve().then(function(){var Bo=ut();delete Bo[JSON.stringify(ht)],at().setItem(Xe,JSON.stringify(Bo))})},clear:function(){return Promise.resolve().then(function(){at().removeItem(Xe)})}}}function qr(Ge){var Ye=a(Ge.caches),Xe=Ye.shift();return Xe===void 0?{get:function(at,ut){var ht=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return ut().then(function(Bo){return Promise.all([Bo,ht.miss(Bo)])}).then(function(Bo){return i(Bo,1)[0]})},set:function(at,ut){return Promise.resolve(ut)},delete:function(at){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(at,ut){var ht=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return Xe.get(at,ut,ht).catch(function(){return qr({caches:Ye}).get(at,ut,ht)})},set:function(at,ut){return Xe.set(at,ut).catch(function(){return qr({caches:Ye}).set(at,ut)})},delete:function(at){return Xe.delete(at).catch(function(){return qr({caches:Ye}).delete(at)})},clear:function(){return Xe.clear().catch(function(){return qr({caches:Ye}).clear()})}}}function Mr(){var Ge=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{serializable:!0},Ye={};return{get:function(Xe,at){var ut=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},ht=JSON.stringify(Xe);if(ht in Ye)return Promise.resolve(Ge.serializable?JSON.parse(Ye[ht]):Ye[ht]);var Bo=at(),Ao=ut&&ut.miss||function(){return Promise.resolve()};return Bo.then(function(To){return Ao(To)}).then(function(){return Bo})},set:function(Xe,at){return Ye[JSON.stringify(Xe)]=Ge.serializable?JSON.stringify(at):at,Promise.resolve(at)},delete:function(Xe){return delete Ye[JSON.stringify(Xe)],Promise.resolve()},clear:function(){return Ye={},Promise.resolve()}}}function Hr(Ge){for(var Ye=Ge.length-1;Ye>0;Ye--){var Xe=Math.floor(Math.random()*(Ye+1)),at=Ge[Ye];Ge[Ye]=Ge[Xe],Ge[Xe]=at}return Ge}function Ur(Ge,Ye){return Ye&&Object.keys(Ye).forEach(function(Xe){Ge[Xe]=Ye[Xe](Ge)}),Ge}function Fr(Ge){for(var Ye=arguments.length,Xe=new Array(Ye>1?Ye-1:0),at=1;at<Ye;at++)Xe[at-1]=arguments[at];var ut=0;return Ge.replace(/%s/g,function(){return encodeURIComponent(Xe[ut++])})}var Br={WithinQueryParameters:0,WithinHeaders:1};function Vr(Ge,Ye){var Xe=Ge||{},at=Xe.data||{};return Object.keys(Xe).forEach(function(ut){["timeout","headers","queryParameters","data","cacheable"].indexOf(ut)===-1&&(at[ut]=Xe[ut])}),{data:Object.entries(at).length>0?at:void 0,timeout:Xe.timeout||Ye,headers:Xe.headers||{},queryParameters:Xe.queryParameters||{},cacheable:Xe.cacheable}}var Wr={Read:1,Write:2,Any:3},Kr=1,zr=2,Jr=3;function $r(Ge){var Ye=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Kr;return t(t({},Ge),{},{status:Ye,lastUpdate:Date.now()})}function Qr(Ge){return typeof Ge=="string"?{protocol:"https",url:Ge,accept:Wr.Any}:{protocol:Ge.protocol||"https",url:Ge.url,accept:Ge.accept||Wr.Any}}var Zr="GET",Yr="POST";function Gr(Ge,Ye){return Promise.all(Ye.map(function(Xe){return Ge.get(Xe,function(){return Promise.resolve($r(Xe))})})).then(function(Xe){var at=Xe.filter(function(Bo){return function(Ao){return Ao.status===Kr||Date.now()-Ao.lastUpdate>12e4}(Bo)}),ut=Xe.filter(function(Bo){return function(Ao){return Ao.status===Jr&&Date.now()-Ao.lastUpdate<=12e4}(Bo)}),ht=[].concat(a(at),a(ut));return{getTimeout:function(Bo,Ao){return(ut.length===0&&Bo===0?1:ut.length+3+Bo)*Ao},statelessHosts:ht.length>0?ht.map(function(Bo){return Qr(Bo)}):Ye}})}function Xr(Ge,Ye,Xe,at){var ut=[],ht=function(Lo,Mo){if(!(Lo.method===Zr||Lo.data===void 0&&Mo.data===void 0)){var Ro=Array.isArray(Lo.data)?Lo.data:t(t({},Lo.data),Mo.data);return JSON.stringify(Ro)}}(Xe,at),Bo=function(Lo,Mo){var Ro=t(t({},Lo.headers),Mo.headers),Fo={};return Object.keys(Ro).forEach(function(Zo){var No=Ro[Zo];Fo[Zo.toLowerCase()]=No}),Fo}(Ge,at),Ao=Xe.method,To=Xe.method!==Zr?{}:t(t({},Xe.data),at.data),$o=t(t(t({"x-algolia-agent":Ge.userAgent.value},Ge.queryParameters),To),at.queryParameters),xo=0,zo=function Lo(Mo,Ro){var Fo=Mo.pop();if(Fo===void 0)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:ro(ut)};var Zo={data:ht,headers:Bo,method:Ao,url:to(Fo,Xe.path,$o),connectTimeout:Ro(xo,Ge.timeouts.connect),responseTimeout:Ro(xo,at.timeout)},No=function(Ho){var Vo={request:Zo,response:Ho,host:Fo,triesLeft:Mo.length};return ut.push(Vo),Vo},qo={onSucess:function(Ho){return function(Vo){try{return JSON.parse(Vo.content)}catch(Wo){throw function(Go,Uo){return{name:"DeserializationError",message:Go,response:Uo}}(Wo.message,Vo)}}(Ho)},onRetry:function(Ho){var Vo=No(Ho);return Ho.isTimedOut&&xo++,Promise.all([Ge.logger.info("Retryable failure",oo(Vo)),Ge.hostsCache.set(Fo,$r(Fo,Ho.isTimedOut?Jr:zr))]).then(function(){return Lo(Mo,Ro)})},onFail:function(Ho){throw No(Ho),function(Vo,Wo){var Go=Vo.content,Uo=Vo.status,Jo=Go;try{Jo=JSON.parse(Go).message}catch{}return function(Qo,ei,ni){return{name:"ApiError",message:Qo,status:ei,transporterStackTrace:ni}}(Jo,Uo,Wo)}(Ho,ro(ut))}};return Ge.requester.send(Zo).then(function(Ho){return function(Vo,Wo){return function(Go){var Uo=Go.status;return Go.isTimedOut||function(Jo){var Qo=Jo.isTimedOut,ei=Jo.status;return!Qo&&~~ei==0}(Go)||~~(Uo/100)!=2&&~~(Uo/100)!=4}(Vo)?Wo.onRetry(Vo):~~(Vo.status/100)==2?Wo.onSucess(Vo):Wo.onFail(Vo)}(Ho,qo)})};return Gr(Ge.hostsCache,Ye).then(function(Lo){return zo(a(Lo.statelessHosts).reverse(),Lo.getTimeout)})}function eo(Ge){var Ye={value:"Algolia for JavaScript (".concat(Ge,")"),add:function(Xe){var at="; ".concat(Xe.segment).concat(Xe.version!==void 0?" (".concat(Xe.version,")"):"");return Ye.value.indexOf(at)===-1&&(Ye.value="".concat(Ye.value).concat(at)),Ye}};return Ye}function to(Ge,Ye,Xe){var at=no(Xe),ut="".concat(Ge.protocol,"://").concat(Ge.url,"/").concat(Ye.charAt(0)==="/"?Ye.substr(1):Ye);return at.length&&(ut+="?".concat(at)),ut}function no(Ge){return Object.keys(Ge).map(function(Ye){return Fr("%s=%s",Ye,(Xe=Ge[Ye],Object.prototype.toString.call(Xe)==="[object Object]"||Object.prototype.toString.call(Xe)==="[object Array]"?JSON.stringify(Ge[Ye]):Ge[Ye]));var Xe}).join("&")}function ro(Ge){return Ge.map(function(Ye){return oo(Ye)})}function oo(Ge){var Ye=Ge.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return t(t({},Ge),{},{request:t(t({},Ge.request),{},{headers:t(t({},Ge.request.headers),Ye)})})}var co=function(Ge){var Ye=Ge.appId,Xe=function(ht,Bo,Ao){var To={"x-algolia-api-key":Ao,"x-algolia-application-id":Bo};return{headers:function(){return ht===Br.WithinHeaders?To:{}},queryParameters:function(){return ht===Br.WithinQueryParameters?To:{}}}}(Ge.authMode!==void 0?Ge.authMode:Br.WithinHeaders,Ye,Ge.apiKey),at=function(ht){var Bo=ht.hostsCache,Ao=ht.logger,To=ht.requester,$o=ht.requestsCache,xo=ht.responsesCache,zo=ht.timeouts,Lo=ht.userAgent,Mo=ht.hosts,Ro=ht.queryParameters,Fo={hostsCache:Bo,logger:Ao,requester:To,requestsCache:$o,responsesCache:xo,timeouts:zo,userAgent:Lo,headers:ht.headers,queryParameters:Ro,hosts:Mo.map(function(Zo){return Qr(Zo)}),read:function(Zo,No){var qo=Vr(No,Fo.timeouts.read),Ho=function(){return Xr(Fo,Fo.hosts.filter(function(Wo){return(Wo.accept&Wr.Read)!=0}),Zo,qo)};if((qo.cacheable!==void 0?qo.cacheable:Zo.cacheable)!==!0)return Ho();var Vo={request:Zo,mappedRequestOptions:qo,transporter:{queryParameters:Fo.queryParameters,headers:Fo.headers}};return Fo.responsesCache.get(Vo,function(){return Fo.requestsCache.get(Vo,function(){return Fo.requestsCache.set(Vo,Ho()).then(function(Wo){return Promise.all([Fo.requestsCache.delete(Vo),Wo])},function(Wo){return Promise.all([Fo.requestsCache.delete(Vo),Promise.reject(Wo)])}).then(function(Wo){var Go=i(Wo,2);return Go[0],Go[1]})})},{miss:function(Wo){return Fo.responsesCache.set(Vo,Wo)}})},write:function(Zo,No){return Xr(Fo,Fo.hosts.filter(function(qo){return(qo.accept&Wr.Write)!=0}),Zo,Vr(No,Fo.timeouts.write))}};return Fo}(t(t({hosts:[{url:"".concat(Ye,"-dsn.algolia.net"),accept:Wr.Read},{url:"".concat(Ye,".algolia.net"),accept:Wr.Write}].concat(Hr([{url:"".concat(Ye,"-1.algolianet.com")},{url:"".concat(Ye,"-2.algolianet.com")},{url:"".concat(Ye,"-3.algolianet.com")}]))},Ge),{},{headers:t(t(t({},Xe.headers()),{"content-type":"application/x-www-form-urlencoded"}),Ge.headers),queryParameters:t(t({},Xe.queryParameters()),Ge.queryParameters)})),ut={transporter:at,appId:Ye,addAlgoliaAgent:function(ht,Bo){at.userAgent.add({segment:ht,version:Bo})},clearCache:function(){return Promise.all([at.requestsCache.clear(),at.responsesCache.clear()]).then(function(){})}};return Ur(ut,Ge.methods)},io=function(Ge){return function(Ye){var Xe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},at={transporter:Ge.transporter,appId:Ge.appId,indexName:Ye};return Ur(at,Xe.methods)}},ao=function(Ge){return function(Ye,Xe){var at=Ye.map(function(ut){return t(t({},ut),{},{params:no(ut.params||{})})});return Ge.transporter.read({method:Yr,path:"1/indexes/*/queries",data:{requests:at},cacheable:!0},Xe)}},uo=function(Ge){return function(Ye,Xe){return Promise.all(Ye.map(function(at){var ut=at.params,ht=ut.facetName,Bo=ut.facetQuery,Ao=c(ut,Rr);return io(Ge)(at.indexName,{methods:{searchForFacetValues:fo}}).searchForFacetValues(ht,Bo,t(t({},Xe),Ao))}))}},lo=function(Ge){return function(Ye,Xe,at){return Ge.transporter.read({method:Yr,path:Fr("1/answers/%s/prediction",Ge.indexName),data:{query:Ye,queryLanguages:Xe},cacheable:!0},at)}},so=function(Ge){return function(Ye,Xe){return Ge.transporter.read({method:Yr,path:Fr("1/indexes/%s/query",Ge.indexName),data:{query:Ye},cacheable:!0},Xe)}},fo=function(Ge){return function(Ye,Xe,at){return Ge.transporter.read({method:Yr,path:Fr("1/indexes/%s/facets/%s/query",Ge.indexName,Ye),data:{facetQuery:Xe},cacheable:!0},at)}},po=1,mo=2,ho=3;function vo(Ge,Ye,Xe){var at,ut={appId:Ge,apiKey:Ye,timeouts:{connect:1,read:2,write:30},requester:{send:function(ht){return new Promise(function(Bo){var Ao=new XMLHttpRequest;Ao.open(ht.method,ht.url,!0),Object.keys(ht.headers).forEach(function(zo){return Ao.setRequestHeader(zo,ht.headers[zo])});var To,$o=function(zo,Lo){return setTimeout(function(){Ao.abort(),Bo({status:0,content:Lo,isTimedOut:!0})},1e3*zo)},xo=$o(ht.connectTimeout,"Connection timeout");Ao.onreadystatechange=function(){Ao.readyState>Ao.OPENED&&To===void 0&&(clearTimeout(xo),To=$o(ht.responseTimeout,"Socket timeout"))},Ao.onerror=function(){Ao.status===0&&(clearTimeout(xo),clearTimeout(To),Bo({content:Ao.responseText||"Network request failed",status:Ao.status,isTimedOut:!1}))},Ao.onload=function(){clearTimeout(xo),clearTimeout(To),Bo({content:Ao.responseText,status:Ao.status,isTimedOut:!1})},Ao.send(ht.data)})}},logger:(at=ho,{debug:function(ht,Bo){return po>=at&&console.debug(ht,Bo),Promise.resolve()},info:function(ht,Bo){return mo>=at&&console.info(ht,Bo),Promise.resolve()},error:function(ht,Bo){return console.error(ht,Bo),Promise.resolve()}}),responsesCache:Mr(),requestsCache:Mr({serializable:!1}),hostsCache:qr({caches:[Lr({key:"".concat("4.8.5","-").concat(Ge)}),Mr()]}),userAgent:eo("4.8.5").add({segment:"Browser",version:"lite"}),authMode:Br.WithinQueryParameters};return co(t(t(t({},ut),Xe),{},{methods:{search:ao,searchForFacetValues:uo,multipleQueries:ao,multipleSearchForFacetValues:uo,initIndex:function(ht){return function(Bo){return io(ht)(Bo,{methods:{search:so,searchForFacetValues:fo,findAnswers:lo}})}}}}))}vo.version="4.8.5";var yo=["footer","searchBox"];function _o(){return _o=Object.assign||function(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye];for(var at in Xe)Object.prototype.hasOwnProperty.call(Xe,at)&&(Ge[at]=Xe[at])}return Ge},_o.apply(this,arguments)}function bo(Ge,Ye){var Xe=Object.keys(Ge);if(Object.getOwnPropertySymbols){var at=Object.getOwnPropertySymbols(Ge);Ye&&(at=at.filter(function(ut){return Object.getOwnPropertyDescriptor(Ge,ut).enumerable})),Xe.push.apply(Xe,at)}return Xe}function go(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye]!=null?arguments[Ye]:{};Ye%2?bo(Object(Xe),!0).forEach(function(at){Oo(Ge,at,Xe[at])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors(Xe)):bo(Object(Xe)).forEach(function(at){Object.defineProperty(Ge,at,Object.getOwnPropertyDescriptor(Xe,at))})}return Ge}function Oo(Ge,Ye,Xe){return Ye in Ge?Object.defineProperty(Ge,Ye,{value:Xe,enumerable:!0,configurable:!0,writable:!0}):Ge[Ye]=Xe,Ge}function So(Ge,Ye){return function(Xe){if(Array.isArray(Xe))return Xe}(Ge)||function(Xe,at){var ut=Xe==null?null:typeof Symbol<"u"&&Xe[Symbol.iterator]||Xe["@@iterator"];if(ut!=null){var ht,Bo,Ao=[],To=!0,$o=!1;try{for(ut=ut.call(Xe);!(To=(ht=ut.next()).done)&&(Ao.push(ht.value),!at||Ao.length!==at);To=!0);}catch(xo){$o=!0,Bo=xo}finally{try{To||ut.return==null||ut.return()}finally{if($o)throw Bo}}return Ao}}(Ge,Ye)||function(Xe,at){if(Xe){if(typeof Xe=="string")return Eo(Xe,at);var ut=Object.prototype.toString.call(Xe).slice(8,-1);if(ut==="Object"&&Xe.constructor&&(ut=Xe.constructor.name),ut==="Map"||ut==="Set")return Array.from(Xe);if(ut==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ut))return Eo(Xe,at)}}(Ge,Ye)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Eo(Ge,Ye){(Ye==null||Ye>Ge.length)&&(Ye=Ge.length);for(var Xe=0,at=new Array(Ye);Xe<Ye;Xe++)at[Xe]=Ge[Xe];return at}function wo(Ge,Ye){if(Ge==null)return{};var Xe,at,ut=function(Bo,Ao){if(Bo==null)return{};var To,$o,xo={},zo=Object.keys(Bo);for($o=0;$o<zo.length;$o++)To=zo[$o],Ao.indexOf(To)>=0||(xo[To]=Bo[To]);return xo}(Ge,Ye);if(Object.getOwnPropertySymbols){var ht=Object.getOwnPropertySymbols(Ge);for(at=0;at<ht.length;at++)Xe=ht[at],Ye.indexOf(Xe)>=0||Object.prototype.propertyIsEnumerable.call(Ge,Xe)&&(ut[Xe]=Ge[Xe])}return ut}function jo(Ge){var Ye=Ge.appId,Xe=Ge.apiKey,at=Ge.indexName,ut=Ge.placeholder,ht=ut===void 0?"Search docs":ut,Bo=Ge.searchParameters,Ao=Ge.onClose,To=Ao===void 0?mr:Ao,$o=Ge.transformItems,xo=$o===void 0?pr:$o,zo=Ge.hitComponent,Lo=zo===void 0?Rn:zo,Mo=Ge.resultsFooterComponent,Ro=Mo===void 0?function(){return null}:Mo,Fo=Ge.navigator,Zo=Ge.initialScrollY,No=Zo===void 0?0:Zo,qo=Ge.transformSearchClient,Ho=qo===void 0?pr:qo,Vo=Ge.disableUserPersonalization,Wo=Vo!==void 0&&Vo,Go=Ge.initialQuery,Uo=Go===void 0?"":Go,Jo=Ge.translations,Qo=Jo===void 0?{}:Jo,ei=Ge.getMissingResultsUrl,ni=Qo.footer,ci=Qo.searchBox,ti=wo(Qo,yo),Di=So(Be.useState({query:"",collections:[],completion:null,context:{},isOpen:!1,activeItemId:null,status:"idle"}),2),ui=Di[0],wi=Di[1],vi=Be.useRef(null),_i=Be.useRef(null),Ti=Be.useRef(null),Bi=Be.useRef(null),gi=Be.useRef(null),di=Be.useRef(10),$i=Be.useRef(typeof window<"u"?window.getSelection().toString().slice(0,64):"").current,pi=Be.useRef(Uo||$i).current,xi=function(Yo,Ko,oi){return Be.useMemo(function(){var ii=vo(Yo,Ko);return ii.addAlgoliaAgent("docsearch","3.3.1"),/docsearch.js \(.*\)/.test(ii.transporter.userAgent.value)===!1&&ii.addAlgoliaAgent("docsearch-react","3.3.1"),oi(ii)},[Yo,Ko,oi])}(Ye,Xe,Ho),mi=Be.useRef(Tr({key:"__DOCSEARCH_FAVORITE_SEARCHES__".concat(at),limit:10})).current,fi=Be.useRef(Tr({key:"__DOCSEARCH_RECENT_SEARCHES__".concat(at),limit:mi.getAll().length===0?7:4})).current,bi=Be.useCallback(function(Yo){if(!Wo){var Ko=Yo.type==="content"?Yo.__docsearch_parent:Yo;Ko&&mi.getAll().findIndex(function(oi){return oi.objectID===Ko.objectID})===-1&&fi.add(Ko)}},[mi,fi,Wo]),yi=Be.useMemo(function(){return An({id:"docsearch",defaultActiveItemId:0,placeholder:ht,openOnFocus:!0,initialState:{query:pi,context:{searchSuggestions:[]}},navigator:Fo,onStateChange:function(Yo){wi(Yo.state)},getSources:function(Yo){var Ko=Yo.query,oi=Yo.state,ii=Yo.setContext,si=Yo.setStatus;return Ko?xi.search([{query:Ko,indexName:at,params:go({attributesToRetrieve:["hierarchy.lvl0","hierarchy.lvl1","hierarchy.lvl2","hierarchy.lvl3","hierarchy.lvl4","hierarchy.lvl5","hierarchy.lvl6","content","type","url"],attributesToSnippet:["hierarchy.lvl1:".concat(di.current),"hierarchy.lvl2:".concat(di.current),"hierarchy.lvl3:".concat(di.current),"hierarchy.lvl4:".concat(di.current),"hierarchy.lvl5:".concat(di.current),"hierarchy.lvl6:".concat(di.current),"content:".concat(di.current)],snippetEllipsisText:"…",highlightPreTag:"<mark>",highlightPostTag:"</mark>",hitsPerPage:20},Bo)}]).catch(function(Xo){throw Xo.name==="RetryError"&&si("error"),Xo}).then(function(Xo){var ai=Xo.results[0],li=ai.hits,Pi=ai.nbHits,Ei=fr(li,function(Ai){return vr(Ai)});return oi.context.searchSuggestions.length<Object.keys(Ei).length&&ii({searchSuggestions:Object.keys(Ei)}),ii({nbHits:Pi}),Object.values(Ei).map(function(Ai,Mi){return{sourceId:"hits".concat(Mi),onSelect:function(ri){var ki=ri.item,hi=ri.event;bi(ki),hi.shiftKey||hi.ctrlKey||hi.metaKey||To()},getItemUrl:function(ri){return ri.item.url},getItems:function(){return Object.values(fr(Ai,function(ri){return ri.hierarchy.lvl1})).map(xo).map(function(ri){return ri.map(function(ki){return go(go({},ki),{},{__docsearch_parent:ki.type!=="lvl1"&&ri.find(function(hi){return hi.type==="lvl1"&&hi.hierarchy.lvl1===ki.hierarchy.lvl1})})})}).flat()}}})}):Wo?[]:[{sourceId:"recentSearches",onSelect:function(Xo){var ai=Xo.item,li=Xo.event;bi(ai),li.shiftKey||li.ctrlKey||li.metaKey||To()},getItemUrl:function(Xo){return Xo.item.url},getItems:function(){return fi.getAll()}},{sourceId:"favoriteSearches",onSelect:function(Xo){var ai=Xo.item,li=Xo.event;bi(ai),li.shiftKey||li.ctrlKey||li.metaKey||To()},getItemUrl:function(Xo){return Xo.item.url},getItems:function(){return mi.getAll()}}]}})},[at,Bo,xi,To,fi,mi,bi,pi,ht,Fo,xo,Wo]),zi=yi.getEnvironmentProps,Si=yi.getRootProps,Ci=yi.refresh;return function(Yo){var Ko=Yo.getEnvironmentProps,oi=Yo.panelElement,ii=Yo.formElement,si=Yo.inputElement;Be.useEffect(function(){if(oi&&ii&&si){var Xo=Ko({panelElement:oi,formElement:ii,inputElement:si}),ai=Xo.onTouchStart,li=Xo.onTouchMove;return window.addEventListener("touchstart",ai),window.addEventListener("touchmove",li),function(){window.removeEventListener("touchstart",ai),window.removeEventListener("touchmove",li)}}},[Ko,oi,ii,si])}({getEnvironmentProps:zi,panelElement:Bi.current,formElement:Ti.current,inputElement:gi.current}),function(Yo){var Ko=Yo.container;Be.useEffect(function(){if(Ko){var oi=Ko.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),ii=oi[0],si=oi[oi.length-1];return Ko.addEventListener("keydown",Xo),function(){Ko.removeEventListener("keydown",Xo)}}function Xo(ai){ai.key==="Tab"&&(ai.shiftKey?document.activeElement===ii&&(ai.preventDefault(),si.focus()):document.activeElement===si&&(ai.preventDefault(),ii.focus()))}},[Ko])}({container:vi.current}),Be.useEffect(function(){return document.body.classList.add("DocSearch--active"),function(){var Yo,Ko;document.body.classList.remove("DocSearch--active"),(Yo=(Ko=window).scrollTo)===null||Yo===void 0||Yo.call(Ko,0,No)}},[]),Be.useEffect(function(){window.matchMedia("(max-width: 768px)").matches&&(di.current=5)},[]),Be.useEffect(function(){Bi.current&&(Bi.current.scrollTop=0)},[ui.query]),Be.useEffect(function(){pi.length>0&&(Ci(),gi.current&&gi.current.focus())},[pi,Ci]),Be.useEffect(function(){function Yo(){if(_i.current){var Ko=.01*window.innerHeight;_i.current.style.setProperty("--docsearch-vh","".concat(Ko,"px"))}}return Yo(),window.addEventListener("resize",Yo),function(){window.removeEventListener("resize",Yo)}},[]),Be.createElement("div",_o({ref:vi},Si({"aria-expanded":!0}),{className:["DocSearch","DocSearch-Container",ui.status==="stalled"&&"DocSearch-Container--Stalled",ui.status==="error"&&"DocSearch-Container--Errored"].filter(Boolean).join(" "),role:"button",tabIndex:0,onMouseDown:function(Yo){Yo.target===Yo.currentTarget&&To()}}),Be.createElement("div",{className:"DocSearch-Modal",ref:_i},Be.createElement("header",{className:"DocSearch-SearchBar",ref:Ti},Be.createElement(Cr,_o({},yi,{state:ui,autoFocus:pi.length===0,inputRef:gi,isFromSelection:Boolean(pi)&&pi===$i,translations:ci,onClose:To}))),Be.createElement("div",{className:"DocSearch-Dropdown",ref:Bi},Be.createElement(Pr,_o({},yi,{indexName:at,state:ui,hitComponent:Lo,resultsFooterComponent:Ro,disableUserPersonalization:Wo,recentSearches:fi,favoriteSearches:mi,inputRef:gi,translations:ti,getMissingResultsUrl:ei,onItemClick:function(Yo){bi(Yo),To()}}))),Be.createElement("footer",{className:"DocSearch-Footer"},Be.createElement(Tn,{translations:ni}))))}function Po(){return Po=Object.assign||function(Ge){for(var Ye=1;Ye<arguments.length;Ye++){var Xe=arguments[Ye];for(var at in Xe)Object.prototype.hasOwnProperty.call(Xe,at)&&(Ge[at]=Xe[at])}return Ge},Po.apply(this,arguments)}function Io(Ge,Ye){return function(Xe){if(Array.isArray(Xe))return Xe}(Ge)||function(Xe,at){var ut=Xe==null?null:typeof Symbol<"u"&&Xe[Symbol.iterator]||Xe["@@iterator"];if(ut!=null){var ht,Bo,Ao=[],To=!0,$o=!1;try{for(ut=ut.call(Xe);!(To=(ht=ut.next()).done)&&(Ao.push(ht.value),!at||Ao.length!==at);To=!0);}catch(xo){$o=!0,Bo=xo}finally{try{To||ut.return==null||ut.return()}finally{if($o)throw Bo}}return Ao}}(Ge,Ye)||function(Xe,at){if(Xe){if(typeof Xe=="string")return ko(Xe,at);var ut=Object.prototype.toString.call(Xe).slice(8,-1);if(ut==="Object"&&Xe.constructor&&(ut=Xe.constructor.name),ut==="Map"||ut==="Set")return Array.from(Xe);if(ut==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ut))return ko(Xe,at)}}(Ge,Ye)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ko(Ge,Ye){(Ye==null||Ye>Ge.length)&&(Ye=Ge.length);for(var Xe=0,at=new Array(Ye);Xe<Ye;Xe++)at[Xe]=Ge[Xe];return at}function Do(Ge){var Ye,Xe,at=Be.useRef(null),ut=Io(Be.useState(!1),2),ht=ut[0],Bo=ut[1],Ao=Io(Be.useState((Ge==null?void 0:Ge.initialQuery)||void 0),2),To=Ao[0],$o=Ao[1],xo=Be.useCallback(function(){Bo(!0)},[Bo]),zo=Be.useCallback(function(){Bo(!1)},[Bo]);return function(Lo){var Mo=Lo.isOpen,Ro=Lo.onOpen,Fo=Lo.onClose,Zo=Lo.onInput,No=Lo.searchButtonRef;Be.useEffect(function(){function qo(Ho){(Ho.keyCode===27&&Mo||Ho.key.toLowerCase()==="k"&&(Ho.metaKey||Ho.ctrlKey)||!function(Vo){var Wo=Vo.target,Go=Wo.tagName;return Wo.isContentEditable||Go==="INPUT"||Go==="SELECT"||Go==="TEXTAREA"}(Ho)&&Ho.key==="/"&&!Mo)&&(Ho.preventDefault(),Mo?Fo():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||Ro()),No&&No.current===document.activeElement&&Zo&&/[a-zA-Z0-9]/.test(String.fromCharCode(Ho.keyCode))&&Zo(Ho)}return window.addEventListener("keydown",qo),function(){window.removeEventListener("keydown",qo)}},[Mo,Ro,Fo,Zo,No])}({isOpen:ht,onOpen:xo,onClose:zo,onInput:Be.useCallback(function(Lo){Bo(!0),$o(Lo.key)},[Bo,$o]),searchButtonRef:at}),Be.createElement(Be.Fragment,null,Be.createElement(Ze,{ref:at,translations:Ge==null||(Ye=Ge.translations)===null||Ye===void 0?void 0:Ye.button,onClick:xo}),ht&&Ie(Be.createElement(jo,Po({},Ge,{initialScrollY:window.scrollY,initialQuery:To,translations:Ge==null||(Xe=Ge.translations)===null||Xe===void 0?void 0:Xe.modal,onClose:zo})),document.body))}function Co(Ge){Ae(Be.createElement(Do,o({},Ge,{transformSearchClient:function(Ye){return Ye.addAlgoliaAgent("docsearch.js","3.3.1"),Ge.transformSearchClient?Ge.transformSearchClient(Ye):Ye}})),function(Ye){var Xe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:window;return typeof Ye=="string"?Xe.document.querySelector(Ye):Ye}(Ge.container,Ge.environment))}const isSpecialClick=Ge=>Ge.button===1||Ge.altKey||Ge.ctrlKey||Ge.metaKey||Ge.shiftKey,useDocsearchShim=()=>{const Ge=useRouter();return{hitComponent:({hit:Ye,children:Xe})=>({type:"a",ref:void 0,constructor:void 0,key:void 0,props:{href:Ye.url,onClick:at=>{isSpecialClick(at)||(at.preventDefault(),Ge.push(resolveRoutePathFromUrl(Ye.url,"/hope/")))},children:Xe},__v:null}),navigator:{navigate:({itemUrl:Ye})=>{Ge.push(resolveRoutePathFromUrl(Ye,"/hope/"))}},transformSearchClient:Ye=>{const Xe=r$3(Ye.search,500);return{...Ye,search:async(...at)=>Xe(...at)}}}};__vitePreload(()=>import("./style-e9220a04.js"),[]),__vitePreload(()=>import("./docsearch-1d421ddb.js"),[]);const Docsearch=defineComponent({name:"Docsearch",props:{containerId:{type:String,required:!1,default:"docsearch-container"},options:{type:Object,required:!0}},setup(Ge){const Ye=useRouteLocale(),Xe=usePageLang(),at=useDocsearchShim(),ut=computed(()=>{var Ao;return{...Ge.options,...(Ao=Ge.options.locales)==null?void 0:Ao[Ye.value]}}),ht=[],Bo=()=>{var To;const Ao=((To=ut.value.searchParameters)==null?void 0:To.facetFilters)??[];ht.splice(0,ht.length,`lang:${Xe.value}`,...isArray(Ao)?Ao:[Ao]),Co({...at,...ut.value,container:`#${Ge.containerId}`,searchParameters:{...ut.value.searchParameters,facetFilters:ht}})};return onMounted(()=>{Bo(),watch([Ye,ut],([Ao,To],[$o,xo])=>{Ao!==$o&&JSON.stringify(To)!==JSON.stringify(xo)&&Bo()}),watch(Xe,(Ao,To)=>{if(Ao!==To){const $o=ht.findIndex(xo=>xo===`lang:${To}`);$o>-1&&ht.splice($o,1,`lang:${Ao}`)}})}),()=>h$5("div",{id:Ge.containerId})}}),options={appId:"VXIEHELDL1",apiKey:"595796f71b6ba14326719682c3738c0c",indexName:"vuepress-theme-hope-theme-v2",locales:{"/zh/":{placeholder:"搜索文档",translations:{button:{buttonText:"搜索文档",buttonAriaLabel:"搜索文档"},modal:{searchBox:{resetButtonTitle:"清除查询条件",resetButtonAriaLabel:"清除查询条件",cancelButtonText:"取消",cancelButtonAriaLabel:"取消"},startScreen:{recentSearchesTitle:"搜索历史",noRecentSearchesText:"没有搜索历史",saveRecentSearchButtonTitle:"保存至搜索历史",removeRecentSearchButtonTitle:"从搜索历史中移除",favoriteSearchesTitle:"收藏",removeFavoriteSearchButtonTitle:"从收藏中移除"},errorScreen:{titleText:"无法获取结果",helpText:"你可能需要检查你的网络连接"},footer:{selectText:"选择",navigateText:"切换",closeText:"关闭",searchByText:"搜索提供者"},noResultsScreen:{noResultsText:"无法找到相关结果",suggestedQueryText:"你可以尝试查询",reportMissingResultsText:"你认为该查询应该有结果？",reportMissingResultsLinkText:"点击反馈"}}}}}},clientConfig14=defineClientConfig({enhance({app:Ge}){Ge.component("Docsearch",()=>h$5(Docsearch,{options}))}}),clientConfigs=[clientConfig0,clientConfig1,clientConfig2,n$2,clientConfig4,clientConfig5,clientConfig6,s$1,P$3,A$2,clientConfig10,y$1,clientConfig12,clientConfig13,clientConfig14],pagesRoutes=[["v-8daa1a0e","/",{y:"h",title:"Home",i:"home"},["/index.html","/README.md"]],["v-ce159204","/changelog.html",{d:"2022-02-15T14:43:07.000Z",e:`<p>This file contains all notable changes to <code>vuepress-theme-hope</code> and its plugins.</p>
`,r:{minutes:.08,words:24},y:"a",title:"Changelog",i:"time"},["/changelog","/changelog.md"]],["v-0a65e4f0","/contribution.html",{d:"2022-02-15T14:43:07.000Z",c:["FAQ"],e:`<p>We always welcome everyone to contribute! Here is a guide for you.</p>
`,r:{minutes:2.65,words:796},y:"a",title:"Contribution Guide",i:"creative"},["/contribution","/contribution.md"]],["v-2b30cdfd","/demo.html",{d:"2022-03-29T12:33:14.000Z",c:["Demo"],e:`<h2> Living Demo</h2>
<ul>
<li><a href="https://stackblitz.com/fork/vuepress-theme-hope" target="_blank" rel="noopener noreferrer">stackblitz</a></li>
</ul>
<h2> Docs</h2>
<h3> Fast Request</h3>
<ul>
<li><a href="https://dromara.org/fast-request/en/" target="_blank" rel="noopener noreferrer">Link</a></li>
<li><a href="https://github.com/dromara/fast-request" target="_blank" rel="noopener noreferrer">Source</a></li>
</ul>`,r:{minutes:.41,words:123},y:"a",title:"Demos",i:"discover"},["/demo","/demo.md"]],["v-ba934fd8","/config/",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["Config"],e:`<h2> Config Intro</h2>
<ul>
<li><a href="/hope/config/intro.html" target="blank">View Details</a></li>
</ul>
<h2> I18n Support</h2>
<ul>
<li><a href="/hope/config/i18n.html" target="blank">View Details</a></li>
</ul>
<h2> Theme Config</h2>
<ul>
<li>
<p><a href="/hope/config/theme/basic.html" target="blank">Theme Basic Config</a></p>
</li>
<li>
<p><a href="/hope/config/theme/feature.html" target="blank">Theme Feature Config</a></p>
</li>
<li>
<p><a href="/hope/config/theme/layout.html" target="blank">Theme Layout Config</a></p>
</li>
<li>
<p><a href="/hope/config/theme/appearance.html" target="blank">Theme Appearance Config</a></p>
</li>
</ul>`,r:{minutes:.32,words:97},y:"a",title:"Config",i:"config"},["/config/index.html","/config/README.md"]],["v-619fe7e7","/config/i18n.html",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["I18N"],e:`<h2> Setting Language </h2>
<p>You need to set the <code>lang</code> option for each language. Even if you are only using a single language, you must set <code>lang</code> in <code>.vuepress/config.{js,ts}</code>.</p>
<div class="hint-container tip">
<p class="hint-container-title">Why setting it?</p>
<p>To provide the correct locale text, the theme needs to know which language every directory is using.</p>
</div>`,r:{minutes:1.76,words:529},y:"a",title:"I18n",i:"config"},["/config/i18n","/config/i18n.md"]],["v-828165fe","/config/intro.html",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["Intro"],e:`<h2> Config Concepts</h2>
<p>VuePress mainly stores config and required files through the <code>.vuepress/</code> folder in the directory.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>For the file structure of VuePress, see <a href="/hope/cookbook/vuepress/file.html" target="blank">VuePress Basics → File Structure</a>.</p>
</div>`,r:{minutes:.48,words:145},y:"a",title:"Config Intro",i:"config"},["/config/intro","/config/intro.md"]],["v-7c2858dc","/config/style.html",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["Theme Config","Style"],e:`<p>You can change the theme’s styles in <code>.vuepress/styles</code> by setting variable values in the <code>config.scss</code> and <code>palette.scss</code> files.</p>
<p>Also you can add your own styles in <code>.vuepress/styles/index.scss</code>.</p>
`,r:{minutes:1.71,words:514},y:"a",title:"Style config",i:"style"},["/config/style","/config/style.md"]],["v-0b911545","/cookbook/",{y:"p",title:"Cookbook",i:"guide"},["/cookbook/index.html","/cookbook/README.md"]],["v-7446a652","/faq/",{d:"2022-04-06T17:09:45.000Z",c:["FAQ"],e:`<p>Frequency asked questions and corresponding solutions using the theme are included here.</p>
<h2> Catalog</h2>
<ul>
<li>
<p><a href="/hope/faq/troubleshooting.html" target="blank">Troubleshooting</a></p>
</li>
<li>
<p><a href="/hope/faq/common-error.html" target="blank">Common Errors</a></p>
</li>
<li>
<p><a href="/hope/faq/vite.html" target="blank">Vite Problems</a></p>
</li>
<li>
<p><a href="/hope/faq/safari.html" target="blank">Safari Problems</a></p>
</li>
</ul>`,r:{minutes:1.67,words:500},y:"a",title:"FAQ",i:"question"},["/faq/index.html","/faq/README.md"]],["v-21c66ce1","/faq/common-error.html",{d:"2022-04-06T17:09:45.000Z",c:["FAQ"],e:`<h2> <code>TypeError: Invalid value used as weak map key</code></h2>
<p>If you are facing error like this, you are probably using non-standard tags in your project.</p>
<p>There are tags like <code>&lt;center&gt;</code> or <code>&lt;font&gt;</code>, which is in HTML1.0 spec, but marked as unrecommended since HTML4.0 released in 1999, then removed in HTML5 release in 2008. So Vue is not allowing you to use them by default. You should probably remove them and use standard HTML5 tag.</p>`,r:{minutes:2.2,words:659},y:"a",title:"Common Errors",i:"warn"},["/faq/common-error","/faq/common-error.md"]],["v-12af73c7","/faq/safari.html",{d:"2022-04-07T16:26:50.000Z",c:["FAQ"],e:`<h2> Smooth Scrolling failed</h2>
<p>We use the CSS property <code>scroll-behavior: smooth</code> to provide smooth scrolling. It has a global approval rating of 93.06% <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><a class="footnote-anchor" id="footnote-ref1">
</a>`,r:{minutes:.44,words:132},y:"a",title:"Safari FAQ",i:"safari"},["/faq/safari","/faq/safari.md"]],["v-6f71ffde","/faq/troubleshooting.html",{d:"2022-04-06T17:09:45.000Z",c:["FAQ"],e:`<h2> Ensure using latest version</h2>
<p>Please make sure you are using the latest <code>vuepress</code> and <code>vuepress-theme-hope</code> V2 version, because some bugs you encountered may have been fixed in new versions.</p>
<p>You can update to the latest version by executing the following commands.</p>`,r:{minutes:1.38,words:413},y:"a",title:"Troubleshooting",i:"check"},["/faq/troubleshooting","/faq/troubleshooting.md"]],["v-73a678e3","/faq/vite.html",{d:"2022-04-06T17:09:45.000Z",c:["FAQ"],e:`<h2> Slow in a cold boot with Vite</h2>
<p>This is the expect behavior. We are adding more features, which means we have 2× to 8× lines of code comparing with <code>@vuepress/theme-default</code> according to the functions you are using. So transpiling and sending the theme and plugins code to browser is expected to increase from <code>0.8s - 2s</code> in <code>@vuepress/theme-default</code> to <code>3s - 10s</code> (range due to machine performance).</p>`,r:{minutes:2.42,words:727},y:"a",title:"Vite FAQ",i:"question"},["/faq/vite","/faq/vite.md"]],["v-fffb8e28","/guide/",{d:"2022-02-15T14:43:07.000Z",c:["Intro"],g:["Intro"],e:`<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If you met a bug while using, you can open an issue <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues" target="_blank" rel="noopener noreferrer">here</a></p>
</div>
<h2> Theme Features✨</h2>
<p>The theme largely inherits the config of <code>@vuepress/theme-default</code>, while adds a lot of functions and layout optimization on it.</p>
`,r:{minutes:2.4,words:719},y:"a",title:"Guide",i:"creative"},["/guide/index.html","/guide/README.md"]],["v-acb2d44c","/migration/",{d:"2022-02-16T16:40:54.000Z",e:`<p>This guide helps you migrate from V1 to V2.</p>
`,r:{minutes:1.03,words:309},y:"a",title:"V2 Migration",i:"change"},["/migration/index.html","/migration/README.md"]],["v-3916d686","/migration/config.html",{d:"2022-02-16T16:40:54.000Z",c:["Migration"],g:["Migration","Theme Config"],e:`
<h2> Theme Usage</h2>
<ul>
<li>rename <code>themeConfig</code> to <code>hopeTheme</code></li>
<li>rename <code>navbarConfig</code> to <code>navbar</code></li>
<li>rename <code>sidebarConfig</code> to <code>sidebar</code></li>
<li>added <code>arraySidebar</code> and <code>objectSidebar</code> helpers</li>
<li>remove <code>config</code></li>
</ul>`,r:{minutes:4.84,words:1453},y:"a",title:"Config Migration Guide",i:"config"},["/migration/config","/migration/config.md"]],["v-24e9d4ff","/migration/highlight.html",{d:"2022-05-22T04:55:08.000Z",e:`<p>We strongly recommend you to switch to V2 version, as V2 version provides the following improvements.</p>
`,r:{minutes:2.11,words:634},y:"a",title:"V2 Highlights",i:"hot"},["/migration/highlight","/migration/highlight.md"]],["v-6f1b01e0","/migration/page.html",{d:"2022-02-16T16:40:54.000Z",c:["Migration"],g:["Migration","Frontmatter","Page"],e:`<h2> Frontmatter</h2>
<h3> Obsolete</h3>
<ul>
<li>
<p>mark <code>time</code> as deprecated, use <code>date</code> instead</p>
</li>
<li>
<p>mark <code>categories</code> as deprecated, use <code>category</code> instead</p>
</li>
<li>
<p>mark <code>tags</code> as deprecated, use <code>tag</code> instead</p>
</li>
</ul>`,r:{minutes:1.12,words:335},y:"a",title:"Page Migration Guide",i:"page"},["/migration/page","/migration/page.md"]],["v-3e929722","/migration/style.html",{d:"2022-02-16T16:40:54.000Z",c:["Migration"],g:["Migration","Style"],e:`<h2> Preprocessor Changes</h2>
<p>The entire style system was migrated from Stylus to Scss, which brought the following changes:</p>
<ul>
<li><code>palette.styl</code> split into <code>config.scss</code> and <code>palette.scss</code></li>
<li><code>index.styl</code> changed to <code>index.scss</code></li>
</ul>`,r:{minutes:.61,words:184},y:"a",title:"Style Migration Guide",i:"style"},["/migration/style","/migration/style.md"]],["v-2d0ab8b3","/ru/",{y:"h",title:"Главная",i:"home"},["/ru/index.html","/ru/README.md"]],["v-7cc36f38","/ru/changelog.html",{d:"2022-08-01T02:38:33.000Z",e:`<p>Этот файл содержит все заметные изменения в <code>vuepress-theme-hope</code> и его плагинах.</p>
`,r:{minutes:.09,words:26},y:"a",title:"Список изменений",i:"time"},["/ru/changelog","/ru/changelog.md"]],["v-05670a76","/ru/contribution.html",{d:"2022-08-01T02:38:33.000Z",c:["FAQ"],e:`<p>Мы всегда рады каждому внести свой вклад! Вот руководство для вас.</p>
`,r:{minutes:2.58,words:774},y:"a",title:"Руководство по вкладу",i:"creative"},["/ru/contribution","/ru/contribution.md"]],["v-b8ca4cfa","/ru/demo.html",{d:"2022-08-01T02:38:33.000Z",c:["Демо"],e:`<h2> Живая демонстрация</h2>
<ul>
<li><a href="https://stackblitz.com/fork/vuepress-theme-hope" target="_blank" rel="noopener noreferrer">stackblitz</a></li>
</ul>
<h2> Документация</h2>
<h3> Waline</h3>
<ul>
<li><a href="https://waline.js.org/en/" target="_blank" rel="noopener noreferrer">Ссылка</a></li>
<li><a href="https://github.com/walinejs/waline" target="_blank" rel="noopener noreferrer">Исходный код</a></li>
</ul>`,r:{minutes:.32,words:96},y:"a",title:"Демоверсии",i:"discover"},["/ru/demo","/ru/demo.md"]],["v-2d0ad528","/zh/",{y:"h",title:"主页",i:"home"},["/zh/index.html","/zh/README.md"]],["v-e4abca26","/zh/changelog.html",{d:"2022-02-15T14:43:07.000Z",e:`<p>该文件包含 <code>vuepress-theme-hope</code> 及其插件的所有显着更改。</p>
`,r:{minutes:.11,words:34},y:"a",title:"变更日志",i:"time"},["/zh/changelog","/zh/changelog.md"]],["v-5e6272be","/zh/contribution.html",{d:"2022-02-15T14:43:07.000Z",c:["FAQ"],e:`<p>我们永远欢迎你对项目进行贡献! 这里是一份相关指南。</p>
`,r:{minutes:3.81,words:1144},y:"a",title:"贡献指南",i:"creative"},["/zh/contribution","/zh/contribution.md"]],["v-518af0ae","/zh/demo.html",{d:"2022-03-29T12:33:14.000Z",c:["案例"],e:`<h2> 在线案例</h2>
<ul>
<li><a href="https://stackblitz.com/fork/vuepress-theme-hope" target="_blank" rel="noopener noreferrer">stackblitz</a></li>
</ul>
<h2> 文档类</h2>
<h3> Waline</h3>
<ul>
<li><a href="https://waline.js.org" target="_blank" rel="noopener noreferrer">网站链接</a></li>
<li><a href="https://github.com/walinejs/waline" target="_blank" rel="noopener noreferrer">源码地址</a></li>
</ul>`,r:{minutes:1.76,words:527},y:"a",title:"项目案例",i:"discover"},["/zh/demo","/zh/demo.md"]],["v-323ca559","/config/frontmatter/",{d:"2022-04-06T17:09:45.000Z",c:["Config"],g:["Config","Frontmatter"],e:`<h2> Catalog</h2>
<ul>
<li>
<p><a href="/hope/config/frontmatter/info.html" target="blank">Information Frontmatter Config</a></p>
</li>
<li>
<p><a href="/hope/config/frontmatter/layout.html" target="blank">Layout Frontmatter Config</a></p>
</li>
<li>
<p><a href="/hope/config/frontmatter/plugins.html" target="blank">Plugin Frontmatter Config</a></p>
</li>
<li>
<p><a href="/hope/config/frontmatter/home.html" target="blank">Home Frontmatter Config</a></p>
</li>
<li>
<p><a href="/hope/config/frontmatter/blog-home.html" target="blank">Blog Home Frontmatter Config</a></p>
</li>
</ul>`,r:{minutes:.13,words:38},y:"a",title:"Frontmatter Config",i:"config"},["/config/frontmatter/index.html","/config/frontmatter/README.md"]],["v-02aac488","/config/frontmatter/blog-home.html",{d:"2022-11-18T05:57:18.000Z",c:["Config"],g:["Frontmatter","Blog Home"],e:`<h2> home</h2>
<ul>
<li>Type: <code>boolean</code></li>
<li>Default: <code>false</code></li>
</ul>
<p>Enable homepage style when setting to <code>true</code></p>
<h2> title</h2>
<ul>
<li>Type: <code>string</code></li>
<li>Required: No</li>
</ul>
<p>Page title, will be used in breadcrumb, seo, etc.</p>`,r:{minutes:.83,words:249},y:"a",title:"Blog Home Frontmatter Config",i:"config"},["/config/frontmatter/blog-home","/config/frontmatter/blog-home.md"]],["v-503ece21","/config/frontmatter/home.html",{d:"2022-11-18T05:57:18.000Z",c:["Config"],g:["Frontmatter","Home"],e:`<h2> home</h2>
<ul>
<li>Type: <code>boolean</code></li>
<li>Default: <code>false</code></li>
</ul>
<p>Enable homepage style when setting to <code>true</code></p>
<h2> title</h2>
<ul>
<li>Type: <code>string</code></li>
<li>Required: No</li>
</ul>
<p>Page title, will be used in breadcrumb, seo, etc.</p>`,r:{minutes:.65,words:194},y:"a",title:"Home Frontmatter Config",i:"config"},["/config/frontmatter/home","/config/frontmatter/home.md"]],["v-1b66e7b2","/config/frontmatter/info.html",{d:"2022-04-06T17:09:45.000Z",c:["Config"],g:["Frontmatter","Info"],e:`<p>You can set information for page with the following frontmatter options.</p>
<h2> title</h2>
<ul>
<li>Type: <code>string</code></li>
<li>Required: No</li>
</ul>
<p>Current page’s title. Markdown’s first h1 by default.</p>
<h2> shortTitle</h2>
<ul>
<li>Type: <code>string</code></li>
<li>Required: No</li>
</ul>`,r:{minutes:1.07,words:320},y:"a",title:"Info Frontmatter Config",i:"config"},["/config/frontmatter/info","/config/frontmatter/info.md"]],["v-1c692e14","/config/frontmatter/layout.html",{d:"2022-04-06T17:09:45.000Z",c:["Config"],g:["Frontmatter","Layout"],e:`<p>You can configure page layout by setting the following frontmatter options.</p>
<h2> pageInfo</h2>
<ul>
<li>Type: <code>PageInfo[] | false</code></li>
<li>Default value: value in theme options</li>
</ul>
<table>
<thead>
<tr>
<th>Item</th>
<th>Corresponding Content</th>
<th>Page frontmatter Value</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>"Author"</code></td>
<td>Author</td>
<td><code>author</code></td>
</tr>
<tr>
<td><code>"Date"</code></td>
<td>Writing Date</td>
<td><code>date</code></td>
</tr>
<tr>
<td><code>"Category"</code></td>
<td>Category</td>
<td><code>category</code></td>
</tr>
<tr>
<td><code>"Tag"</code></td>
<td>Tags</td>
<td><code>tag</code></td>
</tr>
<tr>
<td><code>"ReadingTime"</code></td>
<td>Expect reading time</td>
<td>N/A (automatically generated)</td>
</tr>
<tr>
<td><code>"Word"</code></td>
<td>Word count</td>
<td>N/A (automatically generated)</td>
</tr>
<tr>
<td><code>"PageView"</code></td>
<td>Visit Number</td>
<td><code>pageview</code> (only available with Waline)</td>
</tr>
</tbody>
</table>`,r:{minutes:2.01,words:603},y:"a",title:"Layout Frontmatter Config",i:"config"},["/config/frontmatter/layout","/config/frontmatter/layout.md"]],["v-a0f215dc","/config/frontmatter/plugins.html",{d:"2022-04-06T17:09:45.000Z",c:["Config"],g:["Frontmatter","Layout"],e:`<p>You can configure the following options in the frontmatter of the page to control plugin behavior.</p>
<h2> <code>copyright2</code> Plugin</h2>
<h3> copy.triggerWords</h3>
<ul>
<li>Type: <code>number</code></li>
<li>Default: <code>100</code></li>
</ul>
<p>Min words triggering copyright append</p>`,r:{minutes:.77,words:232},y:"a",title:"Plugin Frontmatter Config",i:"config"},["/config/frontmatter/plugins","/config/frontmatter/plugins.md"]],["v-395f80a3","/config/plugins/",{d:"2022-02-15T15:50:17.000Z",e:`<h2> Catalog</h2>
<ul>
<li>
<p><a href="/hope/config/plugins/intro.html" target="blank">Theme plugins Intro</a></p>
</li>
<li>
<p><a href="/hope/config/plugins/blog.html" target="blank">Blog plugin config</a></p>
</li>
<li>
<p><a href="/hope/config/plugins/copyright.html" target="blank">Copyright plugin config</a></p>
</li>
<li>
<p><a href="/hope/config/plugins/feed.html" target="blank">Feed plugin config</a></p>
</li>
<li>
<p><a href="/hope/config/plugins/md-enhance.html" target="blank">MdEnhance plugin config</a></p>
</li>
<li>
<p><a href="/hope/config/plugins/pwa.html" target="blank">PWA plugin config</a></p>
</li>
<li>
<p><a href="/hope/config/plugins/others.html" target="blank">Other plugins</a></p>
</li>
</ul>`,r:{minutes:.13,words:39},y:"a",title:"Plugin Config",i:"config"},["/config/plugins/index.html","/config/plugins/README.md"]],["v-5c550d34","/config/plugins/blog.html",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["Blog","Plugin Config","Theme Config"],e:`<h2> Intro</h2>
<p>The theme provides blog feature, and it’s <strong>not</strong> enabled by default.</p>
<p>You can enable blog feature by setting <code>plugins.blog</code> to <code>true</code> in theme options.</p>
<p>For instructions, please see <a href="/hope/guide/blog/intro.html" target="blank">Blog Intro</a>.</p>
<h2> Options</h2>
<h3> excerpt</h3>
<ul>
<li>Type: <code>boolean</code></li>
<li>Default: <code>true</code></li>
</ul>
<p>Whether generate excerpt for page.</p>
<h3> excerptSeparator</h3>
<ul>
<li>Type: <code>string</code></li>
<li>Default: \`</li>
</ul>
`,r:{minutes:1.07,words:320},y:"a",title:"Blog Plugin Config",i:"blog"},["/config/plugins/blog","/config/plugins/blog.md"]],["v-9f7dcc06","/config/plugins/comment.html",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["Comment","Plugin Config","Theme Config"],e:`<h2> Intro</h2>
<p>The theme provide comment support using <code>vuepress-plugin-comment2</code>, and it pass <code>plugin.comment</code> in theme options to the plugin.</p>
<p><code>vuepress-plugin-comment2</code> currently supports 3 comment services:</p>
<ul>
<li>Giscus</li>
<li>Twikoo</li>
<li>Waline</li>
</ul>`,r:{minutes:.29,words:86},y:"a",title:"Comment Plugin Config",i:"comment"},["/config/plugins/comment","/config/plugins/comment.md"]],["v-02278e56","/config/plugins/copyright.html",{d:"2022-04-06T17:09:45.000Z",c:["Config"],g:["Copyright","Plugin Config","Theme Config"],e:`<h2> Intro</h2>
<p>The <code>vuepress-plugin-copyright2</code> plugin can append copyright information when users copy content from your site. Also, you can disable site copy or selection with this plugin.</p>
<p>This plugin is disabled by default.</p>
<p><code>vuepress-theme-hope</code> passes <code>plugins.copyright</code> in theme options as plugin options to <code>vuepress-plugin-copyright2</code> plugin.</p>`,r:{minutes:.6,words:181},y:"a",title:"Copyright Plugin Config",i:"copyright"},["/config/plugins/copyright","/config/plugins/copyright.md"]],["v-7fbc9690","/config/plugins/feed.html",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["Feed","Plugin Config","Theme Config"],e:`<h2> Intro </h2>
<p><code>vuepress-theme-hope</code> provides feed generation support via the <code>vuepress-plugin-feed2</code> plugin.</p>
<p><code>vuepress-theme-hope</code> passes <code>plugins.feed</code> in theme options as plugin options to <code>vuepress-plugin-feed2</code> plugin.</p>
<p>The <code>vuepress-plugin-feed2</code> plugin can generate feed files in the following three formats for you:</p>`,r:{minutes:1.6,words:481},y:"a",title:"Feed Plugin Config",i:"rss"},["/config/plugins/feed","/config/plugins/feed.md"]],["v-84536260","/config/plugins/intro.html",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["Intro","Plugin Config","Theme Config"],e:`<p><code>vuepress-theme-hope</code> bundles many VuePress plugins.</p>
<ul>
<li>Some plugins are automatically enabled, you can disable them in theme options if you don’t need them.</li>
<li>Some plugins are only enabled when you provide necessary options.</li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>As a member of <a href="https://github.com/orgs/vuepress/people" target="_blank" rel="noopener noreferrer">VuePress Org</a>, Mr. Hope has developed many VuePress plugins.</p>
<p>All plugins called by <code>vuepress-theme-hope</code> are official plugins or plugins developed by Mr. Hope which hosted under the <code>vuepress-theme-hope</code> repository.</p>
<ul>
<li>For the documentation of the official plugin, see [VuePress2 official website][vuepress]</li>
<li>All plugins developed by Mr.Hope have their own documentation and can be used with other themes.</li>
</ul>
</div>
`,r:{minutes:2.12,words:635},y:"a",title:"Plugin Intro",i:"info"},["/config/plugins/intro","/config/plugins/intro.md"]],["v-2ba3e45e","/config/plugins/md-enhance.html",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["Markdown","Plugin Config","Theme Config"],e:`<h2> Introduction</h2>
<p>The <code>vuepress-plugin-md-enhance</code> plugin is enabled by default and provides Markdown enhancements.</p>
<p><code>vuepress-theme-hope</code> passes <code>plugins.mdEnhance</code> in theme options as plugin options to <code>vuepress-plugin-md-enhance</code> plugin.</p>`,r:{minutes:4.1,words:1231},y:"a",title:"MdEnhance Plugin Config",i:"markdown"},["/config/plugins/md-enhance","/config/plugins/md-enhance.md"]],["v-0b9e4ed3","/config/plugins/others.html",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["Plugin Config","Theme Config"],e:`<h2> components</h2>
<p>Controls <code>vuepress-plugin-components</code>, providing a set of components for Markdown.</p>
<p>Available component which can be used in markdown files are:</p>
<ul>
<li><code>"AudioPlayer"</code></li>
<li><code>"Badge"</code></li>
<li><code>"BiliBili"</code></li>
<li><code>"CodePen"</code></li>
<li><code>"PDF"</code></li>
<li><code>"StackBlitz"</code></li>
<li><code>"VideoPlayer"</code></li>
<li><code>"YouTube"</code></li>
</ul>`,r:{minutes:1.79,words:538},y:"a",title:"Other Plugin Config",i:"more"},["/config/plugins/others","/config/plugins/others.md"]],["v-898aa0fc","/config/plugins/pwa.html",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["PWA","Plugin Config","Theme Config"],e:`<h2> Intro</h2>
<p>The <code>vuepress-plugin-pwa2</code> plugin provides progressive web app support.</p>
<p><code>vuepress-theme-hope</code> passes <code>plugins.pwa</code> in theme options as plugin options to <code>vuepress-plugin-pwa2</code> plugin.</p>
<div class="hint-container tip">
<p class="hint-container-title">Quick Enable</p>
<p>To simply enable this feature, you can set <code>pwa: true</code>. </p>
</div>`,r:{minutes:2.51,words:754},y:"a",title:"PWA Plugin Config",i:"app"},["/config/plugins/pwa","/config/plugins/pwa.md"]],["v-546c3c9a","/config/theme/",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["Theme Config"],e:`<h2> Content</h2>
<ul>
<li>
<p><a href="/hope/config/theme/basic.html" target="blank">Theme Basic Config</a></p>
</li>
<li>
<p><a href="/hope/config/theme/feature.html" target="blank">Theme Feature Config</a></p>
</li>
<li>
<p><a href="/hope/config/theme/layout.html" target="blank">Theme Layout Config</a></p>
</li>
<li>
<p><a href="/hope/config/theme/appearance.html" target="blank">Theme Appearance Config</a></p>
</li>
<li>
<p><a href="/hope/config/theme/i18n.html" target="blank">Theme I18n Config</a></p>
</li>
</ul>`,r:{minutes:.21,words:63},y:"a",title:"Theme Config",i:"config"},["/config/theme/index.html","/config/theme/README.md"]],["v-0f8f5f1b","/config/theme/appearance.html",{d:"2022-05-19T04:54:24.000Z",c:["Config"],g:["Theme Config","Appearance"],e:`<p>The following options control the appearance of the theme. You don’t need to pay attention to them in most cases, they are only provided for a small amount of users with needs.</p>
`,r:{minutes:1.38,words:415},y:"a",title:"Theme Appearance Options",i:"config"},["/config/theme/appearance","/config/theme/appearance.md"]],["v-b9a2c4f6","/config/theme/basic.html",{d:"2022-02-16T16:40:54.000Z",c:["Config"],g:["Basic","ThemeConfig"],e:`<div class="hint-container danger">
<p class="hint-container-title">Warning</p>
<p>These options are important and require you to configure them correctly.</p>
</div>
`,r:{minutes:2.32,words:696},y:"a",title:"Theme Basic Options",i:"config"},["/config/theme/basic","/config/theme/basic.md"]],["v-efc15586","/config/theme/feature.html",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["Feature","Theme Config"],e:`<p>The following options control features provided by theme.</p>
`,r:{minutes:1.7,words:511},y:"a",title:"Theme Feature Options",i:"config"},["/config/theme/feature","/config/theme/feature.md"]],["v-12bbba21","/config/theme/i18n.html",{d:"2022-04-15T08:48:55.000Z",c:["Config"],g:["I18n","Theme Config"],e:`<p>You can add the following options to <code>locales[localePath]</code> in theme options to customize the theme's multilingual options.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Current lang code
   */</span>
  lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Outlook
   */</span>
  outlookLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Theme Color
     */</span>
    themeColor<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Theme mode
     */</span>
    darkmode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Fullscreen text
     */</span>
    fullscreen<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Blog
   */</span>
  blogLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 文章文字 */</span>
    article<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 文章列表文字 */</span>
    articleList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 分类文字 */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 标签文字 */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 时间轴文字 */</span>
    timeline<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 时间轴标题文字 */</span>
    timelineTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 全部文字 */</span>
    all<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 个人介绍 */</span>
    intro<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 搜藏文字 */</span>
    star<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 幻灯片 */</span>
    slides<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 加密 */</span>
    encrypt<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Pagination
   */</span>
  paginationLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Previous page button label text
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Next page button label text
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Navigation hint label text
     */</span>
    navigate<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Navigation button label text
     */</span>
    action<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Error text when invalid page number
     *
     * <span class="token keyword">@description</span> \`$page\` will be replaced by total page number automatically
     */</span>
    errorText<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Encrypt
   */</span>
  encryptLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Aria label for encrypt icon
     */</span>
    iconLabel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Password placeholder
     */</span>
    placeholder<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Whether remember password
     */</span>
    remember<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Password error hint
     */</span>
    errorHint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Navbar
   */</span>
  navbarLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Aria label of of the language selection dropdown
     */</span>
    selectLangAriaLabel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Language name of current locale
     */</span>
    langName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Page meta
   */</span>
  metaLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Author label text
     */</span>
    author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Writing date label text
     */</span>
    date<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Label text marked as original
     */</span>
    origin<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page views label text
     */</span>
    views<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Tag label text
     */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Category label text
     */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Expect reading time label text
     */</span>
    readingTime<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Words label Text
     */</span>
    words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Table of contents
     */</span>
    toc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Previous link
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Next link
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * last updated text
     */</span>
    lastUpdated<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Contributors text
     */</span>
    contributors<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Edit link text
     */</span>
    editLink<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  routeLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Skip to main content
     */</span>
    skipToContent<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 404 page msgs
     */</span>
    notFoundMsg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Back to homepage
     */</span>
    home<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Back to last page
     */</span>
    back<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * screen reader only message in \`&lt;ExternalLinkIcon&gt;\`
     */</span>
    openInNewWindow<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.34,words:402},y:"a",title:"Theme I18n Options",i:"config"},["/config/theme/i18n","/config/theme/i18n.md"]],["v-ae3b21d6","/config/theme/layout.html",{d:"2022-02-15T14:43:07.000Z",c:["Config"],g:["Theme Config","Layout"],e:`<p>The following options control theme layout.</p>
<!-- more  -->
<h2> Navbar Config</h2>
<p>For related guide, please see <a href="/hope/guide/layout/navbar.html" target="blank">Layout → Navbar</a>.</p>
<h3> navbar </h3>
<ul>
<li>Type: <code>NavbarConfig | false</code></li>
<li>Default: <code>false</code></li>
</ul>`,r:{minutes:2.34,words:701},y:"a",title:"Theme Layout Options",i:"config"},["/config/theme/layout","/config/theme/layout.md"]],["v-1567a4a8","/cookbook/advanced/",{y:"p",title:"Advanced",i:"advance"},["/cookbook/advanced/index.html","/cookbook/advanced/README.md"]],["v-27a7ceb8","/cookbook/advanced/component.html",{d:"2022-04-03T12:48:02.000Z",c:["Tutorial","Customize"],g:["Components","Customize"],e:`<p>This tutorial will guide you on how to use Vue components and Vue syntax in your VuePress project.</p>
`,r:{minutes:1.4,words:421},y:"a",title:"Using Components",i:"plugin"},["/cookbook/advanced/component","/cookbook/advanced/component.md"]],["v-028a4457","/cookbook/advanced/extend.html",{d:"2022-04-03T12:48:02.000Z",c:["Advanced"],g:["Advanced","Customize"],e:`<p><code>vuepress-theme-hope</code> supports extending just like <code>@vuepress/theme-default</code>.</p>
<p>You can create your own theme based on <code>vuepress-theme-hope</code> and use it locally or publish it according to your needs.</p>
<h2> Theme extending</h2>
<p>You need to create an entry file for your theme and import <code>hopeTheme</code> from <code>vuepress-theme-hope</code>.</p>`,r:{minutes:1.59,words:477},y:"a",title:"Theme Extending",i:"extend"},["/cookbook/advanced/extend","/cookbook/advanced/extend.md"]],["v-7c5bf166","/cookbook/advanced/replace.html",{d:"2022-04-03T12:48:02.000Z",c:["Advanced"],g:["Advanced","Customize"],e:`<p>The theme imports components through <code>alias</code>, so you can use it to replace any component of the theme.</p>
`,r:{minutes:4.08,words:1224},y:"a",title:"Replacing Theme Components",i:"customize"},["/cookbook/advanced/replace","/cookbook/advanced/replace.md"]],["v-023c0720","/cookbook/advanced/style.html",{d:"2022-04-03T12:48:02.000Z",c:["Cookbook","Customize"],g:["Customize","Style"],e:`<p>This article briefly describes how to customize theme styles.</p>
`,r:{minutes:1.73,words:518},y:"a",title:"Style Customization",i:"style"},["/cookbook/advanced/style","/cookbook/advanced/style.md"]],["v-0de9a97b","/cookbook/markdown/",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook","Markdown"],g:["Intro","Markdown"],e:`<p>Markdown is a markup language that can be written using a plain text editor that allows plain text content to be formatted with simple markup syntax.</p>
<p>Markdown has a series of derivative versions that extend Markdown’s functionality (such as tables, footnotes, embedded HTML, etc.). These features were not available in the original Markdown. They can convert Markdown into more formats, such as LaTeX, Docbook. . Markdown Extra, MultiMarkdown, Maruku, etc. are more famous in Markdown’s enhanced version. These derivative versions are either based on tools such as Pandoc; or based on sites such as GitHub and Wikipedia, which are syntactically compatible, but have some changes in syntax and rendering effects.</p>`,r:{minutes:1.42,words:425},y:"a",title:"Markdown Introduction",i:"markdown"},["/cookbook/markdown/index.html","/cookbook/markdown/README.md"]],["v-e02b6c8a","/cookbook/markdown/demo.html",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook","Markdown"],g:["Demo","Markdown"],e:`<!-- markdownlint-disable -->
<h1> Heading 1</h1>
<!-- markdownlint-restore -->
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Heading 1</span>
</code></pre></div><h2> Heading 2</h2>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Heading 2</span>
</code></pre></div>`,r:{minutes:1.87,words:560},y:"a",title:"Markdown DEMO",i:"markdown"},["/cookbook/markdown/demo","/cookbook/markdown/demo.md"]],["v-aa7b6e28","/cookbook/tutorial/",{d:"2022-04-01T07:55:05.000Z",c:["Cookbook","Tutorial","Get Started"],e:`<p>This is a step by step tutorial for newcomers.</p>
`,r:{minutes:.17,words:52},y:"a",title:"Step by Step Tutorial",i:"guide"},["/cookbook/tutorial/index.html","/cookbook/tutorial/README.md"]],["v-777b014c","/cookbook/tutorial/command.html",{d:"2022-04-01T07:55:05.000Z",c:["Cookbook","Tutorial","Get Started"],g:["Project Command"],e:`<p>This tutorial introduces VuePress project commands.</p>
`,r:{minutes:.84,words:251},y:"a",title:"Project Command",i:"command"},["/cookbook/tutorial/command","/cookbook/tutorial/command.md"]],["v-7498a26b","/cookbook/tutorial/config.html",{d:"2022-04-01T07:55:05.000Z",c:["Cookbook","Tutorial","Get Started"],g:["Project Config"],e:`<p>This tutorial guides you on how to configure a VuePress project.</p>
`,r:{minutes:2.33,words:699},y:"a",title:"Project Config",i:"config"},["/cookbook/tutorial/config","/cookbook/tutorial/config.md"]],["v-fd859228","/cookbook/tutorial/content.html",{d:"2022-04-01T07:55:05.000Z",c:["Cookbook","Tutorial","Get Started"],g:["Project Content"],e:`<p>This tutorial guides you on how to write content in a VuePress project.</p>
`,r:{minutes:1.44,words:432},y:"a",title:"Project Content",i:"page"},["/cookbook/tutorial/content","/cookbook/tutorial/content.md"]],["v-562208f1","/cookbook/tutorial/create.html",{d:"2022-04-01T07:55:05.000Z",c:["Cookbook","Tutorial","Get Started"],g:["Template"],e:`<p>This tutorial will guide you through creating a VuePress Theme Hope project.</p>
`,r:{minutes:.76,words:228},y:"a",title:"Create Project",i:"creative"},["/cookbook/tutorial/create","/cookbook/tutorial/create.md"]],["v-728b73e6","/cookbook/tutorial/deploy.html",{d:"2022-04-01T07:55:05.000Z",c:["Cookbook","Tutorial","Get Started"],g:["Project Deployment"],e:`<p>This tutorial guides you on how to deploy a VuePress project.</p>
`,r:{minutes:.79,words:237},y:"a",title:"Project Deployment",i:"launch"},["/cookbook/tutorial/deploy","/cookbook/tutorial/deploy.md"]],["v-39e9e0f8","/cookbook/tutorial/env.html",{d:"2022-04-01T07:55:05.000Z",c:["Cookbook","Tutorial","Get Started"],g:["Setting Environment"],e:`<p>This tutorial will guide you on how to set up a VuePress runtime environment.</p>
`,r:{minutes:1.1,words:329},y:"a",title:"Setting Environment",i:"leaf"},["/cookbook/tutorial/env","/cookbook/tutorial/env.md"]],["v-c410819c","/cookbook/tutorial/structure.html",{d:"2022-04-01T07:55:05.000Z",c:["Cookbook","Tutorial","Get Started"],g:["Project Structure"],e:`<p>This tutorial will introduce VuePress project structure.</p>
`,r:{minutes:.48,words:145},y:"a",title:"Project Structure",i:"tree"},["/cookbook/tutorial/structure","/cookbook/tutorial/structure.md"]],["v-88fe0ca6","/cookbook/vuepress/",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook","VuePress"],g:["Intro","VuePress"],e:`<p>VuePress is a markdown-centered static site generator. You can write your content (documentations, blogs, etc.) in <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noopener noreferrer">Markdown</a>, then VuePress will help you to generate a static site to host them.</p>
`,r:{minutes:.73,words:218},y:"a",title:"About VuePress",i:"vue"},["/cookbook/vuepress/index.html","/cookbook/vuepress/README.md"]],["v-0fb99f0a","/cookbook/vuepress/config.html",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook","VuePress"],g:["Config","VuePress"],e:`<h2> Config File</h2>
<p>Without any configuration, the VuePress site is pretty minimal. To customize your site, let’s first create a <code>.vuepress</code> directory inside your docs directory. This is where all VuePress-specific files will be placed. Your project structure is probably like this:</p>`,r:{minutes:1,words:300},y:"a",title:"VuePress Config",i:"config"},["/cookbook/vuepress/config","/cookbook/vuepress/config.md"]],["v-67fbf1d0","/cookbook/vuepress/file.html",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook","VuePress"],g:["File Structure","VuePress"],e:`<h2> File Structure</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── docs → Docs folder depending on you
│    │
│    ├── .vuepress (Optional) → VuePress Config
│    │     │
│    │     ├── dist (Default) → Output folder
│    │     │
│    │     │
│    │     ├── public (Optional) → Static resource dir
│    │     │
│    │     ├── styles (Optional) → Stores style related files
│    │     │
│    │     ├── config.{js,ts} (Optional) → Entry file of configuration
│    │     │
│    │     └── client.{js,ts} (Optional) → Client App file
│    │
│    ├── ... → Other docs
│    │
│    └── README.md → Project homepage
│
└── package.json → Node.js declaration file for the entire project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.22,words:67},y:"a",title:"File Structure",i:"folder"},["/cookbook/vuepress/file","/cookbook/vuepress/file.md"]],["v-7bf1e8bd","/cookbook/vuepress/markdown.html",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook","VuePress"],g:["Markdown","VuePress"],e:`<p>Here are some enhance VuePress makes on Markdown syntax.</p>
<h2> Syntax Extensions</h2>
<p>The Markdown content in VuePress will be parsed by <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a>, which supports <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">syntax extensions</a> via markdown-it plugins.</p>`,r:{minutes:6.13,words:1840},y:"a",title:"Builtin Markdown features",i:"markdown"},["/cookbook/vuepress/markdown","/cookbook/vuepress/markdown.md"]],["v-29c08ec6","/cookbook/vuepress/page.html",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook","VuePress"],g:["Page","VuePress"],e:`<p>VuePress is markdown-centered. Each Markdown file inside your project is a standalone page.</p>
<h2> Routing</h2>
<p>By default, the route path of a page is determined by the relative path of your Markdown file.</p>
<p>Assuming this is the directory structure of your Markdown files:</p>
<div class="language-text" data-ext="text"><pre class="language-text"><code>└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
</code></pre></div>`,r:{minutes:1.08,words:324},y:"a",title:"VuePress Page",i:"page"},["/cookbook/vuepress/page","/cookbook/vuepress/page.md"]],["v-442c81b9","/cookbook/vuepress/plugin.html",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook","VuePress"],g:["Plugin","VuePress"],e:`<p>With the help of <a href="https://v2.vuepress.vuejs.org/reference/plugin-api.html" target="_blank" rel="noopener noreferrer">Plugin API</a>, VuePress plugin can provide different features for you.</p>
<h2> Community Plugin</h2>
<p>Community users have created lots of plugins and published them to <a href="https://www.npmjs.com/search?q=keywords:vuepress-plugin" target="_blank" rel="noopener noreferrer">NPM</a>. VuePress team also maintains some official plugins under the <a href="https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin" target="_blank" rel="noopener noreferrer">@vuepress</a> scope. You should check the plugin’s own documentation for detailed guide.</p>`,r:{minutes:1.04,words:313},y:"a",title:"Plugins",i:"plugin"},["/cookbook/vuepress/plugin","/cookbook/vuepress/plugin.md"]],["v-ec20f3c6","/cookbook/vuepress/theme.html",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook","VuePress"],g:["Theme","VuePress"],e:`<p>VuePress theme can provide layouts, styles and many other features for you, helping you to focus on writing Markdown content.</p>
<h2> Default Theme</h2>
<p>VuePress has a default theme out of the box, which is applied to our documentation site you are currently browsing.</p>
<p>If you don’t specify the theme to use, the default theme will be used automatically.</p>`,r:{minutes:.87,words:261},y:"a",title:"Theme Config",i:"palette"},["/cookbook/vuepress/theme","/cookbook/vuepress/theme.md"]],["v-7676ace1","/guide/advanced/",{d:"2022-02-22T08:57:06.000Z",c:["Advanced"],g:["Advanced"],e:`<h2> Catalog</h2>
<ul>
<li>
<p><a href="/hope/guide/advanced/pwa.html" target="blank">PWA Support</a></p>
</li>
<li>
<p><a href="/hope/guide/advanced/feed.html" target="blank">Feed Support</a></p>
</li>
<li>
<p><a href="/hope/guide/advanced/seo.html" target="blank">SEO Enhance</a></p>
</li>
<li>
<p><a href="/hope/guide/advanced/sitemap.html" target="blank">Sitemap Generation</a></p>
</li>
</ul>`,r:{minutes:.09,words:26},y:"a",title:"Advanced",i:"advance"},["/guide/advanced/index.html","/guide/advanced/README.md"]],["v-16256e3a","/guide/advanced/feed.html",{d:"2022-02-22T08:57:06.000Z",c:["Advanced"],g:["Advanced","Feed"],e:`<p>The theme adds feed support using [<code>vuepress-plugin-feed2</code>][feed2].</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p><code>vuepress-theme-hope</code> provides <code>plugins.feed</code> in theme options to <code>vuepress-plugin-feed2</code>.</p>
</div>
`,r:{minutes:1.42,words:425},y:"a",title:"Feed Support",i:"rss"},["/guide/advanced/feed","/guide/advanced/feed.md"]],["v-c60e8480","/guide/advanced/pwa.html",{d:"2022-02-22T08:57:06.000Z",c:["Advanced"],g:["Advanced","PWA"],e:`<p>The theme provides progressive web app support <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup><a class="footnote-anchor" id="footnote-ref1"> via built-in [<code>vuepress-plugin-pwa2</code>][pwa2], and it’s disabled by default.</a></p><a class="footnote-anchor" id="footnote-ref1">
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p><code>vuepress-theme-hope</code> passes <code>plugins.pwa</code> in theme options as plugin options to <code>vuepress-plugin-pwa2</code>.</p>
<p>If you are using this plugin, we recommend you to set <code>shouldPrefetch: false</code> in your VuePress config file.</p>
</div>
<hr class="footnotes-sep">
</a><section class="footnotes"><a class="footnote-anchor" id="footnote-ref1">
</a><ol class="footnotes-list"><a class="footnote-anchor" id="footnote-ref1">
</a><li id="footnote1" class="footnote-item"><a class="footnote-anchor" id="footnote-ref1"><p><strong>PWA introduction</strong></p>
<p>PWA, full name Progressive Web app. PWA standard is stipulated by W3C.</p>
</a><p><a class="footnote-anchor" id="footnote-ref1">It allows sites to install the site as an App on supported platform through a browser that supports this feature. </a><a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
`,r:{minutes:6.9,words:2069},y:"a",title:"PWA",i:"app"},["/guide/advanced/pwa","/guide/advanced/pwa.md"]],["v-344ff27d","/guide/advanced/seo.html",{d:"2022-02-22T08:57:06.000Z",c:["Advanced"],g:["Advanced","SEO"],e:`<p><code>vuepress-theme-hope</code> provides SEO enhancements via built-in [<code>vuepress-plugin-seo2</code>][seo2].</p>
<p>To make the plugin work better, you may need to check the <a href="/hope/config/frontmatter/info.html" target="blank">page config</a> and configure them properly.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p><code>vuepress-theme-hope</code> passes <code>plugins.seo</code> in theme options as plugin options to <code>vuepress-plugin-seo2</code>.</p>
</div>
<p>The plugin will make your site fully support <a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">Open Content Protocol OGP</a> and <a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a> to enhance the SEO of the site.</p>
<p>If you don’t need this plugin, please set <code>plugins.seo</code> to <code>false</code> in theme options.</p>
`,r:{minutes:4.18,words:1254},y:"a",title:"SEO",i:"config"},["/guide/advanced/seo","/guide/advanced/seo.md"]],["v-4458beb6","/guide/advanced/sitemap.html",{d:"2022-02-22T08:57:06.000Z",c:["Advanced"],g:["Advanced","Sitemap"],e:`<p><code>vuepress-theme-hope</code> provide Sitemap generation by including <a href="https://vuepress-theme-hope.github.io/v2/sitemap/" target="_blank" rel="noopener noreferrer"><code>vuepress-plugin-sitemap2</code></a>.</p>
<p>The plugin will automatically generate the last update time of the page based on the Git timestamp of the page, and will also declare the alternative version link of the page in other languages according to the locales config.</p>`,r:{minutes:1.26,words:377},y:"a",title:"Sitemap",i:"sitemap"},["/guide/advanced/sitemap","/guide/advanced/sitemap.md"]],["v-58f03f61","/guide/blog/",{d:"2022-02-15T14:43:07.000Z",e:`<h2> Catalog</h2>
<ul>
<li>
<p><a href="/hope/guide/blog/intro.html" target="blank">Blog Intro</a></p>
</li>
<li>
<p><a href="/hope/guide/blog/home.html" target="blank">Blog Homepage</a></p>
</li>
<li>
<p><a href="/hope/guide/blog/blogger.html" target="blank">Blogger Intro</a></p>
</li>
<li>
<p><a href="/hope/guide/blog/article.html" target="blank">Article List</a></p>
</li>
<li>
<p><a href="/hope/guide/blog/category-and-tags.html" target="blank">Categories and Tags</a></p>
</li>
<li>
<p><a href="/hope/guide/blog/timeline.html" target="blank">Timeline</a></p>
</li>
<li>
<p><a href="/hope/guide/blog/path.html" target="blank">Page Path</a></p>
</li>
</ul>`,r:{minutes:.11,words:33},y:"a",title:"Blog",i:"blog"},["/guide/blog/index.html","/guide/blog/README.md"]],["v-161158f8","/guide/blog/article.html",{d:"2022-02-15T14:43:07.000Z",c:["Blog"],g:["Article","Blog","Encrypt","Slide","Star"],e:`<p>The topic provides you with a list of all articles under the path <code>/article/</code> by default.</p>
<h2> Article</h2>
<p>All articles will be added to the article list by default and rendered under the path <code>/article/</code>.</p>
<p>
</p>
<p>If you don’t want the list to contain some specific articles, just set the <code>article</code> to <code>false</code> in the frontmatter of the article, or you may customize it through <code>plugins.blog.filter</code> in theme options.</p>
<p>To sticky a specific article in the article list, just set <code>sticky</code> to <code>true</code> in the frontmatter of the article.</p>
<div class="hint-container tip">
<p class="hint-container-title">Order</p>
<p>For sticky articles, you can set <code>sticky</code> with a number to set their order. Articles with large numbers will be listed first.</p>
</div>
<h2> Excerpt</h2>
<h3> Adding Excerpt</h3>
<p>If you want to add an excerpt for an article, you can mark contents with \`</p>
`,r:{minutes:2.5,words:751},y:"a",title:"Article List",i:"article"},["/guide/blog/article","/guide/blog/article.md"]],["v-56866cf0","/guide/blog/blogger.html",{d:"2022-02-16T10:56:35.000Z",c:["Blog"],g:["Blog","Blogger"],e:`<p>Themes allow you to display basic information about the blogger.</p>
`,r:{minutes:1.37,words:411},y:"a",title:"Blogger Info",i:"blog"},["/guide/blog/blogger","/guide/blog/blogger.md"]],["v-4ed199fc","/guide/blog/category-and-tags.html",{d:"2022-02-15T14:43:07.000Z",c:["Blog"],g:["Blog","Category","Tag"],e:`<p>You can configure category and tags for articles through frontmatter to make them appear in specific categories and tags pages.</p>
`,r:{minutes:.84,words:252},y:"a",title:"Category and tags",i:"tag"},["/guide/blog/category-and-tags","/guide/blog/category-and-tags.md"]],["v-597805ce","/guide/blog/home.html",{d:"2022-02-15T14:43:07.000Z",c:["Blog"],g:["Blog","Home","Layout"],e:`<p><code>vuepress-theme-hope</code> allows you to enable a blog-style homepage.</p>
<p>You need to set <code>layout: BlogHome</code> and <code>home: true</code> in the frontmatter of homepage.</p>
`,r:{minutes:.99,words:297},y:"a",title:"Blog homepage",i:"home"},["/guide/blog/home","/guide/blog/home.md"]],["v-30638fe4","/guide/blog/intro.html",{d:"2022-02-15T14:43:07.000Z",c:["Blog"],g:["Blog","Intro"],e:`<p>The theme supports blog feature with<code>vuepress-plugin-blog2</code> by default, and it’s <strong>disabled by default</strong>.</p>
<p>If you need blog functionality, you can set <code>plugins.blog: true</code> in theme options to enable blog functionality.</p>
`,r:{minutes:1.48,words:444},y:"a",title:"Blog Intro",i:"blog"},["/guide/blog/intro","/guide/blog/intro.md"]],["v-3e812993","/guide/blog/path.html",{d:"2022-02-16T10:56:35.000Z",c:["Blog"],g:["Blog","Path"],e:`<p>You can control the path of each page in the blog through <code>plugins.blog</code> in theme options.</p>
<p>The default paths provided by the blog are as follows, if they conflict with your existing paths, and you don’t want to adjust your own paths, you can modify them.</p>
<table>
<thead>
<tr>
<th>Options</th>
<th>Description</th>
<th>Default Path</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>article</code></td>
<td>list of articles</td>
<td><code>/article/</code></td>
</tr>
<tr>
<td><code>category</code></td>
<td>Category map page</td>
<td><code>/category/</code></td>
</tr>
<tr>
<td><code>categoryItem</code></td>
<td>A list of specific categories</td>
<td><code>/category/:name/</code></td>
</tr>
<tr>
<td><code>tag</code></td>
<td>Tag map page</td>
<td><code>/tag/</code></td>
</tr>
<tr>
<td><code>tagItem</code></td>
<td>list of specific tags</td>
<td><code>/tag/:name/</code></td>
</tr>
<tr>
<td><code>star</code></td>
<td>List of starred articles</td>
<td><code>/star/</code></td>
</tr>
<tr>
<td><code>timeline</code></td>
<td>Timeline list</td>
<td><code>/timeline/</code></td>
</tr>
</tbody>
</table>`,r:{minutes:.35,words:104},y:"a",title:"Blog Page Path",i:"link"},["/guide/blog/path","/guide/blog/path.md"]],["v-6a877377","/guide/blog/timeline.html",{d:"2022-02-15T14:43:07.000Z",c:["Blog"],g:["Blog","Timeline"],e:`<p>You can access the time page through <code>/timeline/</code>. On the page, you can view all the articles in time reverse order.</p>
<figure><figcaption>Timeline Page</figcaption></figure>
<h2> Excluding Articles</h2>
<p>By default, all articles which has a writing date will be displayed in timeline. If you don’t want an article to be included, just set the <code>timeline</code> to <code>false</code> in the frontmatter of the article.</p>`,r:{minutes:.42,words:126},y:"a",title:"Timeline",i:"time"},["/guide/blog/timeline","/guide/blog/timeline.md"]],["v-17e51e36","/guide/feature/",{d:"2022-02-15T14:43:07.000Z",e:`<p><code>vuepress-theme-hope</code> introduces lots of great features. Most of the functions are separated into plugins, which means if you like them, you can use them in other VuePress themes or <code>@vuepress/theme-default</code>.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>All the plugin settings are under <code>plugins</code> field in theme options, and the option name is related with their names.</p>
</div>`,r:{minutes:.31,words:94},y:"a",title:"Features",i:"discover"},["/guide/feature/index.html","/guide/feature/README.md"]],["v-234eb73f","/guide/feature/comment.html",{d:"2022-02-15T14:43:07.000Z",c:["Feature"],g:["Comment","Feature"],e:`<p><code>vuepress-theme-hope</code> implements the comment feature with built-in [<code>vuepress-plugin-comment2</code>][comment2].</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p><code>vuepress-theme-hope</code> passes <code>plugins.comment</code> in theme options as plugin options to <code>vuepress-plugin-comment2</code>.</p>
</div>
`,r:{minutes:2.56,words:767},y:"a",title:"Comment Service",i:"comment"},["/guide/feature/comment","/guide/feature/comment.md"]],["v-350d824e","/guide/feature/copy-code.html",{d:"2022-02-15T14:43:07.000Z",c:["Feature"],g:["Copy Code","Feature"],e:`<p>If you are a programmer, you may want your users to be able to copy the code you show in the text with one click.</p>
<p>For this, <code>vuepress-theme-hope</code> use [vuepress-plugin-copy-code2][copy-code2] to provide a copy button on code blocks.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p><code>vuepress-theme-hope</code> passes <code>plugins.copyCode</code> in theme options as plugin options to <code>vuepress-plugin-copy-code2</code>.</p>
</div>
`,r:{minutes:.62,words:187},y:"a",title:"Code Copy",i:"copy"},["/guide/feature/copy-code","/guide/feature/copy-code.md"]],["v-35f0e4d2","/guide/feature/copyright.html",{d:"2022-04-05T17:43:06.000Z",c:["Feature"],g:["Copyright","Feature"],e:`<p>Sometimes, you may not want some of your articles to be copied by others, or you want others to automatically generate a piece of copyright information to the clipboard when copying.</p>
<p><code>vuepress-theme-hope</code> use [vuepress-plugin-copyright2][copyright2] to provide related features.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p><code>vuepress-theme-hope</code> passes <code>plugins.copyright</code> in theme options as plugin options to <code>vuepress-plugin-copyright2</code>.</p>
</div>
`,r:{minutes:1.7,words:510},y:"a",title:"Copyright",i:"copyright"},["/guide/feature/copyright","/guide/feature/copyright.md"]],["v-7fa906f9","/guide/feature/encrypt.html",{d:"2022-02-15T14:43:07.000Z",c:["Feature"],g:["Encrypt","Feature"],e:`<p>The theme supports encryption of specific folders or specific paths, as well as global scope encryption.</p>
<div class="hint-container danger">
<p class="hint-container-title">Warning</p>
<p>Note that because of the limitation of vuepress, the content of the article is only hidden before being decrypted, and visitors can still get the content of the article from the source code (from js).</p>
<p>Please <strong>DO NOT USE</strong> this encryption function for any sensitive and confidential articles and files, please bear the consequences of it.</p>
</div>
`,r:{minutes:1.07,words:320},y:"a",title:"Encryption",i:"lock"},["/guide/feature/encrypt","/guide/feature/encrypt.md"]],["v-a16232a2","/guide/feature/meta.html",{d:"2022-02-15T14:43:07.000Z",c:["Feature"],g:["Feature","Meta"],e:`<p>The theme displays last update time and contributors of the page via the [<code>@vuepress/plugin-git</code>][git] plugin, and provides support for an "edit this page" button.</p>
<p>The theme also provides navigation buttons for previous and next pages depending on sidebar config.</p>
`,r:{minutes:1.24,words:373},y:"a",title:"Page Meta",i:"time"},["/guide/feature/meta","/guide/feature/meta.md"]],["v-0fe8995c","/guide/feature/page-info.html",{d:"2022-02-15T14:43:07.000Z",c:["Feature"],g:["Feature","Page Info"],e:`<p><code>vuepress-theme-hope</code> can display article information for you.</p>
`,r:{minutes:1.32,words:397},y:"a",title:"Page information",i:"info"},["/guide/feature/page-info","/guide/feature/page-info.md"]],["v-fe639182","/guide/feature/photo-swipe.html",{d:"2022-02-15T14:43:07.000Z",c:["Feature"],g:["Feature","Image Preview"],e:`<p>By including [vuepress-plugin-photo-swipe][photo-swipe], vuepress-theme-hope will make the pictures in the body of the page enter the preview mode when clicked.</p>
<p>If you don’t need this feature, you can set <code>plugins.photoSwipe: false</code> in theme options to disable it.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p><code>vuepress-theme-hope</code> passes <code>plugins.photoSwipe</code> in theme options as plugin options to <code>vuepress-plugin-photo-swipe</code>.</p>
</div>
`,r:{minutes:.89,words:267},y:"a",title:"Image Preview",i:"preview"},["/guide/feature/photo-swipe","/guide/feature/photo-swipe.md"]],["v-6939a22c","/guide/feature/search.html",{d:"2022-02-26T13:47:51.000Z",c:["Feature"],g:["Feature","Search"],e:`<p>The theme adds built-in support for [<code>vuepress-plugin-search-pro</code>][search-pro], [<code>@vuepress/plugin-docsearch</code>][docsearch] and [<code>@vuepress/plugin-search</code>][search]. Just install the plugin you want and config it, you will get a search box in navbar.</p>
<p>To use search plugin, you need to apply it via <code>plugins</code> in the <a href="/hope/cookbook/vuepress/config.html" target="blank"><strong>VuePress config file</strong></a>.</p>
<div class="hint-container warning">
<p class="hint-container-title">Note</p>
<p>The theme is just adding support for the above plugins, it does not bundle them. You need to install and apply them yourself.</p>
</div>
<div class="hint-container danger">
<p class="hint-container-title">Warning</p>
<p><strong>DO NOT</strong> use <code>plugins.search</code> in theme options.</p>
<p>The theme can ONLY apply plugins it bundles, so <code>plugins</code> field in theme options ONLY accepts CERTAIN plugin name.</p>
</div>
`,r:{minutes:3.8,words:1139},y:"a",title:"Search",i:"search"},["/guide/feature/search","/guide/feature/search.md"]],["v-0490495e","/guide/get-started/",{d:"2022-02-15T14:43:07.000Z",e:`<h2> Catalog</h2>
<ul>
<li>
<p><a href="/hope/guide/get-started/intro.html" target="blank">Theme Intro</a></p>
</li>
<li>
<p><a href="/hope/guide/get-started/install.html" target="blank">Installation and Usage</a></p>
</li>
<li>
<p><a href="/hope/guide/get-started/markdown.html" target="blank">Markdown Intro</a></p>
</li>
</ul>`,r:{minutes:.07,words:21},y:"a",title:"Get Started",i:"creative"},["/guide/get-started/index.html","/guide/get-started/README.md"]],["v-27d5cdef","/guide/get-started/install.html",{d:"2022-02-15T14:43:07.000Z",c:["Get Started"],g:["Get Started","Install","Usage"],e:`<h2> Install</h2>
<p>Create a vuepress-theme-hope project in <code>[dir]</code> folder:</p>

<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p><code>[dir]</code> is a parameter here, replace it with real folder names, such as <code>docs</code>, <code>blog</code> or other name you like.</p>
</div>`,r:{minutes:.53,words:159},y:"a",title:"Install / Usage",i:"install"},["/guide/get-started/install","/guide/get-started/install.md"]],["v-e310b004","/guide/get-started/intro.html",{d:"2022-02-15T14:43:07.000Z",c:["Get Started"],g:["Get Started","Intro"],e:`<h2> Original intention</h2>
<p>The original intention of building this theme was to find that VuePress is just a pure static document generator. For example, it will not inject meta tags for SEO optimization, nor will it generate a Sitemap to help search engines index the content of the document.</p>`,r:{minutes:2.82,words:847},y:"a",title:"Theme intro",i:"info"},["/guide/get-started/intro","/guide/get-started/intro.md"]],["v-bc745cce","/guide/get-started/markdown.html",{d:"2022-02-15T14:43:07.000Z",c:["Get Started"],g:["Get Started","Markdown"],e:`<p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>
<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>
`,r:{minutes:2.78,words:833},y:"a",title:"Markdown",i:"markdown"},["/guide/get-started/markdown","/guide/get-started/markdown.md"]],["v-5fad87fc","/guide/interface/",{d:"2022-02-15T14:43:07.000Z",e:`<h2> Catalog</h2>
<ul>
<li>
<p><a href="/hope/guide/interface/darkmode.html" target="blank">Dark Mode</a></p>
</li>
<li>
<p><a href="/hope/guide/interface/theme-color.html" target="blank">Theme Color</a></p>
</li>
<li>
<p><a href="/hope/guide/interface/icon.html" target="blank">Icon support</a></p>
</li>
<li>
<p><a href="/hope/guide/interface/code-theme.html" target="blank">Code Themes</a></p>
</li>
<li>
<p><a href="/hope/guide/interface/accessibility.html" target="blank">Accessibility</a></p>
</li>
<li>
<p><a href="/hope/guide/interface/others.html" target="blank">Other features</a></p>
</li>
</ul>`,r:{minutes:.1,words:29},y:"a",title:"Interface",i:"palette"},["/guide/interface/index.html","/guide/interface/README.md"]],["v-44df1fcd","/guide/interface/accessibility.html",{d:"2022-02-15T14:43:07.000Z",c:["Interface"],g:["A11y","Interface"],e:`<p>"A11y" stands for "accessibility".</p>
<p>The theme adds full support of accessibility.</p>
<ul>
<li>
<p>All page structures of the theme are processed semantically.</p>
</li>
<li>
<p>All buttons and icons have their corresponding accessibility labels</p>
</li>
<li>
<p>All main interactive elements can be focused and interacted through the keyboard</p>
</li>
</ul>`,r:{minutes:.22,words:66},y:"a",title:"A11y",i:"support"},["/guide/interface/accessibility","/guide/interface/accessibility.md"]],["v-4d468f64","/guide/interface/code-theme.html",{d:"2022-03-02T03:44:36.000Z",c:["Interface"],g:["Interface","Code Themes"],e:`<p><code>vuepress-theme-hope</code> allows you to set code block themes for lightmode and darkmode globally.</p>
`,r:{minutes:.53,words:160},y:"a",title:"Code Themes",i:"style"},["/guide/interface/code-theme","/guide/interface/code-theme.md"]],["v-3c43819e","/guide/interface/darkmode.html",{d:"2022-02-15T14:43:07.000Z",c:["Interface"],g:["Darkmode","Interface"],e:`<p>In dark mode, the page uses a dark background to make you comfortable.</p>
`,r:{minutes:.37,words:110},y:"a",title:"Darkmode",i:"contrast"},["/guide/interface/darkmode","/guide/interface/darkmode.md"]],["v-17750e3e","/guide/interface/icon.html",{d:"2022-02-15T14:43:07.000Z",c:["Interface"],g:["Icon","Interface"],e:`<p>The entire theme adds FontClass / Picture format icon support in multiple places.</p>
<p>You can use iconfont and fontawesome to add icons to your project.</p>
<ul>
<li>For china users, iconfont is recommended</li>
<li>For overseas users, fontawesome is recommended</li>
</ul>
<p>Also, png/svg format icon is supported. You can use absolute path or pathname to add icons.</p>
`,r:{minutes:2.02,words:605},y:"a",title:"Icon support",i:"discover"},["/guide/interface/icon","/guide/interface/icon.md"]],["v-2bee1214","/guide/interface/others.html",{d:"2022-02-15T14:43:07.000Z",c:["Interface"],g:["Interface"],e:`<h2> Style Customization</h2>
<p>The theme allows you to set variables in <code>.vuepress/styles/config.scss</code> and <code>.vuepress/styles/palette.scss</code> to customize most of the colors, responsive breakpoints, page layout size and other parameters.</p>
<p>For detailed info, please see <a href="/hope/config/style.html" target="blank">Config → Style Customize</a></p>`,r:{minutes:.67,words:200},y:"a",title:"Other features",i:"others"},["/guide/interface/others","/guide/interface/others.md"]],["v-0280531f","/guide/interface/pure.html",{d:"2022-03-04T11:41:20.000Z",e:`<p>If your site is a documentation-only site and you prefer a clean style, you can enable pure mode by setting <code>pure: true</code> in theme options.</p>
<p>In this mode, we disable some fancy animations and some colors and just provide functionality.</p>
`,r:{minutes:.16,words:48},y:"a",title:"Pure Mode",i:"leaf"},["/guide/interface/pure","/guide/interface/pure.md"]],["v-9f084448","/guide/interface/theme-color.html",{d:"2022-02-15T14:43:07.000Z",c:["Interface"],g:["Interface","Theme Color"],e:`<p>The theme allows you to customize theme color and even provide a picker.</p>
`,r:{minutes:.67,words:201},y:"a",title:"Theme Color",i:"palette"},["/guide/interface/theme-color","/guide/interface/theme-color.md"]],["v-46aee04e","/guide/layout/",{d:"2022-02-15T14:43:07.000Z",e:`<h2> Catalog</h2>
<ul>
<li>
<p><a href="/hope/guide/layout/navbar.html" target="blank">Navigation Bar</a></p>
</li>
<li>
<p><a href="/hope/guide/layout/sidebar.html" target="blank">Sidebar</a></p>
</li>
<li>
<p><a href="/hope/guide/layout/breadcrumb.html" target="blank">Breadcrumb</a></p>
</li>
<li>
<p><a href="/hope/guide/layout/footer.html" target="blank">Footer</a></p>
</li>
<li>
<p><a href="/hope/guide/layout/page.html" target="blank">Page</a></p>
</li>
<li>
<p><a href="/hope/guide/layout/catalog.html" target="blank">Catalog</a></p>
</li>
<li>
<p><a href="/hope/guide/layout/home.html" target="blank">Home Page</a></p>
</li>
<li>
<p><a href="/hope/guide/layout/slides.html" target="blank">Slides</a></p>
</li>
<li>
<p>Switch animation</p>
<p>As the page switches, a gradual transition animation will be displayed. Improve document / blog texture.</p>
</li>
</ul>`,r:{minutes:.14,words:43},y:"a",title:"Layout",i:"layout"},["/guide/layout/index.html","/guide/layout/README.md"]],["v-3ecb3dbd","/guide/layout/breadcrumb.html",{d:"2022-02-15T14:43:07.000Z",c:["Layout"],g:["Breadcrumb","Layout"],e:`<p>The theme adds Breadcrumb support, you can config it using <code>breadcrumb</code> in page frontmatter and theme options </p>
<p>Without any config, a Breadcrumb that matches the theme color is displayed at the top of the page content to help the reader understand the document structure.</p>
`,r:{minutes:.81,words:244},y:"a",title:"Path Navigation",i:"navigation"},["/guide/layout/breadcrumb","/guide/layout/breadcrumb.md"]],["v-37399ab9","/guide/layout/catalog.html",{d:"2022-12-31T15:16:41.000Z",c:["Layout"],g:["Catalog","Layout"],e:`<p>VuePress Theme Hope automatically generate <code>README.md</code> with catalog for each folder by default using [<code>vuepress-plugin-catalog</code>][auto-catalog].</p>
`,r:{minutes:.32,words:96},y:"a",title:"Catalog Page",i:"tree"},["/guide/layout/catalog","/guide/layout/catalog.md"]],["v-2a1012a5","/guide/layout/footer.html",{d:"2022-02-15T14:43:07.000Z",c:["Layout"],g:["Footer","Layout"],e:`<p><code>vuepress-theme-hope</code> provides footer feature for all pages </p>
`,r:{minutes:1.01,words:304},y:"a",title:"Footer",i:"footer"},["/guide/layout/footer","/guide/layout/footer.md"]],["v-7452b3a1","/guide/layout/home.html",{d:"2022-02-15T14:43:07.000Z",c:["Layout"],g:["Home","Layout"],e:`<p><code>vuepress-theme-hope</code> improves the default home page.</p>
<p>To use it, set <code>home: true</code> in page frontmatter. Any extra content after the <code>YAML front matter</code> will be parsed as normal Markdown and rendered after the features section.</p>
<p>
</p>
`,r:{minutes:.84,words:251},y:"a",title:"Home Page",i:"home"},["/guide/layout/home","/guide/layout/home.md"]],["v-61a26d50","/guide/layout/navbar.html",{d:"2022-02-15T14:43:07.000Z",c:["Layout"],g:["Layout","Navbar"],e:`<p>The Navbar may contain your site title, <a href="#search-box">Search Box</a>, <a href="#navbar-links">Navbar Links</a>, <a href="https://v2.vuepress.vuejs.org/guide/i18n.html" target="_blank" rel="noopener noreferrer">I18n</a>, <a href="#git-repository-and-edit-links">Repository Link</a> and <a href="#outlook-popup">Outlook Popup</a>. They all depend on your configuration.</p>
`,r:{minutes:5.4,words:1621},y:"a",title:"NavBar",i:"navbar"},["/guide/layout/navbar","/guide/layout/navbar.md"]],["v-2ac053f1","/guide/layout/page.html",{d:"2022-02-15T14:43:07.000Z",c:["Layout"],g:["Page","Layout"],e:`<h2> Icon Support</h2>
<p>You can configure the <code>icon</code> field in the frontmatter of the page, and fill in the FontClass of the corresponding icon to bind the icon to the page.</p>
<p>This icon is used in navbar, sidebar, breadcrumb and page title.</p>
<details class="hint-container details"><summary>Example</summary>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">icon</span><span class="token punctuation">:</span> home</span>
<span class="token punctuation">---</span></span>
</code></pre></div></details>`,r:{minutes:1.31,words:393},y:"a",title:"Page",i:"page"},["/guide/layout/page","/guide/layout/page.md"]],["v-f552fd54","/guide/layout/sidebar.html",{d:"2022-02-15T14:43:07.000Z",c:["Layout"],g:["Layout","Sidebar"],e:`<p>The sidebar may contain a list of related documents, document titles, and blogger information in blog mode.</p>
`,r:{minutes:8.76,words:2629},y:"a",title:"Sidebar",i:"sidebar"},["/guide/layout/sidebar","/guide/layout/sidebar.md"]],["v-324f7884","/guide/layout/slides.html",{d:"2022-02-15T14:43:07.000Z",c:["Layout"],g:["Layout","Slides"],e:`<p><code>vuepress-theme-hope</code> allows you to add slides pages.</p>
<p>You need to set <code>layout: Slide</code> in the frontmatter of the corresponding page to enable the slides page.</p>
`,r:{minutes:.43,words:130},y:"a",title:"Slide",i:"slides"},["/guide/layout/slides","/guide/layout/slides.md"]],["v-6ef8b1b4","/guide/markdown/",{d:"2022-02-15T14:43:07.000Z",e:`<p>Besides Markdown syntaxes VuePress itself adds, <code>vuepress-theme-hope</code> enables more syntax in Markdown via [vuepress-plugin-md-enhance][md-enhance] plugin.</p>
`,r:{minutes:.4,words:121},y:"a",title:"Markdown Enhance",i:"markdown"},["/guide/markdown/index.html","/guide/markdown/README.md"]],["v-af0934b0","/guide/markdown/align.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Align","Markdown"],e:`<p>By injecting configuration into vuepress-plugin-container, you can use</p>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: center
Paragraph to center
:::

::: right
Right paragraph
:::
</code></pre></div><p>To customize your paragraph alignment.</p>
`,r:{minutes:.57,words:171},y:"a",title:"Custom alignment",i:"align"},["/guide/markdown/align","/guide/markdown/align.md"]],["v-0fb8922b","/guide/markdown/attrs.html",{d:"2022-06-14T16:02:38.000Z",c:["Markdown"],g:["Attributes","Markdown"],e:`<p>You can use custom syntax to add attrs for Markdown content.</p>
`,r:{minutes:1,words:299},y:"a",title:"Attrs support",i:"code"},["/guide/markdown/attrs","/guide/markdown/attrs.md"]],["v-5114c46f","/guide/markdown/chart.html",{d:"2022-03-12T13:49:43.000Z",c:["Markdown"],g:["Chart","Markdown"],e:`<p>Let the Markdown file support chart in your VuePress site.</p>
<p><code>vuepress-plugin-md-enhance</code> uses <a href="https://www.chartjs.org/docs/latest/" target="_blank" rel="noopener noreferrer">chart.js</a> to support this feature.</p>
`,r:{minutes:3.43,words:1028},y:"a",title:"Chart",i:"rank"},["/guide/markdown/chart","/guide/markdown/chart.md"]],["v-73800222","/guide/markdown/code-tabs.html",{d:"2022-05-19T15:54:35.000Z",c:["Markdown"],g:["Code Tabs","Markdown"],e:`<p>The theme provides you code tabs support.</p>
`,r:{minutes:.92,words:275},y:"a",title:"Code Tabs",i:"code"},["/guide/markdown/code-tabs","/guide/markdown/code-tabs.md"]],["v-39486b4f","/guide/markdown/components.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Components","Markdown"],e:`<p>By using <code>vuepress-plugin-components</code>, you can import and use some components in your Markdown files.</p>
<p>Available components:</p>
<ul>
<li>AudioPlayer</li>
<li>Badge</li>
<li>BiliBili</li>
<li>CodePen</li>
<li>FontIcon</li>
<li>PDF</li>
<li>StackBlitz</li>
<li>VideoPlayer</li>
<li>YouTube</li>
</ul>
<p>By default, <code>&lt;Badge /&gt;</code> and <code>&lt;FontIcon /&gt;</code> is enabled.</p>
<p>To enable components, you should set <code>plugin.components.components</code> with an array of components name.</p>
`,r:{minutes:3.03,words:908},y:"a",title:"Components",i:"plugin"},["/guide/markdown/components","/guide/markdown/components.md"]],["v-200378a8","/guide/markdown/container.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Container","Markdown"],e:`<p>The theme adds tip, note, info, warning, danger and detail container.</p>
`,r:{minutes:1.24,words:373},y:"a",title:"Custom container",i:"customize"},["/guide/markdown/container","/guide/markdown/container.md"]],["v-c0c31cbc","/guide/markdown/demo.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Code Demo","Markdown"],e:`<p>Let you insert code demos in your Markdown file.</p>
`,r:{minutes:2.9,words:871},y:"a",title:"Code Demo",i:"discover"},["/guide/markdown/demo","/guide/markdown/demo.md"]],["v-11728bd3","/guide/markdown/echarts.html",{d:"2022-05-18T12:22:02.000Z",c:["Markdown"],g:["ECharts","Markdown"],e:`<p>Let the Markdown file support chart in your VuePress site.</p>
<p><code>vuepress-plugin-md-enhance</code> uses <a href="https://echarts.apache.org/en/index.html" target="_blank" rel="noopener noreferrer">ECharts</a> to support this feature.</p>
`,r:{minutes:2.34,words:703},y:"a",title:"ECharts",i:"rank"},["/guide/markdown/echarts","/guide/markdown/echarts.md"]],["v-6d23928c","/guide/markdown/external.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown"],e:`<p>To using new syntax inside Markdown to enhance content, you can also use <code>&lt;iframe&gt;</code> or <code>&lt;img&gt;</code> to import external links to enhance your Markdown content.</p>
`,r:{minutes:1.18,words:354},y:"a",title:"External import",i:"link"},["/guide/markdown/external","/guide/markdown/external.md"]],["v-51682a1d","/guide/markdown/flowchart.html",{d:"2022-02-15T14:43:07.000Z",g:["Flowchart","Markdown"],e:`<p>Let the Markdown file support flow chart in your VuePress site</p>
`,r:{minutes:3.43,words:1029},y:"a",title:"Flowchart",i:"tree - Markdown"},["/guide/markdown/flowchart","/guide/markdown/flowchart.md"]],["v-5b070b76","/guide/markdown/footnote.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Footnote","Markdown"],e:`<p>Let the Markdown file in your VuePress site support footnotes.</p>
`,r:{minutes:.59,words:176},y:"a",title:"Footnote",i:"quote"},["/guide/markdown/footnote","/guide/markdown/footnote.md"]],["v-deb34ddc","/guide/markdown/image.html",{d:"2022-06-01T16:21:25.000Z",c:["Markdown"],g:["Markdown","Image"],e:`<p>Improve image syntax in Markdown to support color scheme and size.</p>
`,r:{minutes:1.74,words:521},y:"a",title:"Image",i:"pic"},["/guide/markdown/image","/guide/markdown/image.md"]],["v-00ea58e5","/guide/markdown/include.html",{d:"2022-05-17T16:47:04.000Z",c:["Markdown"],g:["Code Demo","Include Files"],e:`<p>Let the Markdown file in your VuePress site support including other files.</p>
`,r:{minutes:1.41,words:423},y:"a",title:"Include Files",i:"markdown"},["/guide/markdown/include","/guide/markdown/include.md"]],["v-31961ea1","/guide/markdown/intro.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Intro","Markdown"],e:`<p>Besides Markdown syntaxes VuePress itself adds, <code>vuepress-theme-hope</code> enables more syntax in Markdown via [vuepress-plugin-md-enhance][md-enhance] plugin.</p>
`,r:{minutes:.46,words:137},y:"a",title:"Enable Enhance",i:"enable"},["/guide/markdown/intro","/guide/markdown/intro.md"]],["v-382d6af8","/guide/markdown/mark.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markup","Markdown"],e:`<p>Make Markdown files in your VuePress site support markup.</p>
`,r:{minutes:.31,words:94},y:"a",title:"Markup",i:"write"},["/guide/markdown/mark","/guide/markdown/mark.md"]],["v-9d28f8b8","/guide/markdown/mermaid.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Diagram","Markdown"],e:`<p>Let the Markdown file support <a href="https://mermaid-js.github.io/mermaid/#/" target="_blank" rel="noopener noreferrer">mermaid</a> in your VuePress site.</p>
`,r:{minutes:5.92,words:1775},y:"a",title:"Mermaid",i:"diagram"},["/guide/markdown/mermaid","/guide/markdown/mermaid.md"]],["v-0fd87922","/guide/markdown/others.html",{d:"2022-03-04T12:50:06.000Z",c:["Markdown"],g:["Markdown"],e:`<h2> Link check</h2>
<p>The theme will check your Markdown links in dev mode by default.</p>
<p>You can customize this feature through <code>plugins.mdEnhance.linkCheck</code> in theme options, and you can choose from <code>'always'</code>, <code>'never'</code>, <code>'dev'</code> and <code>'build'</code>.</p>`,r:{minutes:.44,words:133},y:"a",title:"Others",i:"more"},["/guide/markdown/others","/guide/markdown/others.md"]],["v-a076c06c","/guide/markdown/playground.html",{d:"2022-08-13T04:59:36.000Z",c:["Markdown"],g:["Markdown","Playground"],e:`<p>Let the Markdown file support playground in your VuePress site.</p>
`,r:{minutes:2.98,words:895},y:"a",title:"Playground",i:"code"},["/guide/markdown/playground","/guide/markdown/playground.md"]],["v-03860ecb","/guide/markdown/presentation.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","Slides"],e:`<p>Let the Markdown file in your VuePress site support presentation.</p>
`,r:{minutes:1.28,words:385},y:"a",title:"Presentation",i:"slides"},["/guide/markdown/presentation","/guide/markdown/presentation.md"]],["v-76c1b4ed","/guide/markdown/stylize.html",{d:"2022-05-26T08:08:32.000Z",c:["Markdown"],g:["Stylize","Markdown"],e:`<p>Create inline snippet by stylize inline tokens including changing tags, adding attributes and modifying content.</p>
`,r:{minutes:1.64,words:491},y:"a",title:"Stylize",i:"style"},["/guide/markdown/stylize","/guide/markdown/stylize.md"]],["v-0d2faa28","/guide/markdown/sup-sub.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","Superscript","Subscript"],e:`<p>Let the Markdown file in your VuePress site support Subscript and Superscript.</p>
`,r:{minutes:.39,words:117},y:"a",title:"Superscript and Subscript",i:"superscript"},["/guide/markdown/sup-sub","/guide/markdown/sup-sub.md"]],["v-054f84e7","/guide/markdown/tabs.html",{d:"2022-05-21T11:43:59.000Z",c:["Markdown"],g:["Markdown","Tabs"],e:`<p>Let the Markdown file in your VuePress site support tabs.</p>
`,r:{minutes:1.54,words:461},y:"a",title:"Tabs",i:"tab"},["/guide/markdown/tabs","/guide/markdown/tabs.md"]],["v-7bd025e2","/guide/markdown/tasklist.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","Task List"],e:`<p>Let the Markdown file in your VuePress site support task list.</p>
`,r:{minutes:.39,words:117},y:"a",title:"Task list",i:"check"},["/guide/markdown/tasklist","/guide/markdown/tasklist.md"]],["v-48323ec6","/guide/markdown/tex.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","TEX"],e:`<p>Let the Markdown file in your VuePress site support the  syntax.</p>
`,r:{minutes:5.19,words:1557},y:"a",title:"TeX",i:"tex"},["/guide/markdown/tex","/guide/markdown/tex.md"]],["v-52a450fa","/guide/markdown/vue-playground.html",{d:"2022-09-12T14:26:29.000Z",c:["Markdown"],g:["Markdown","Playground"],e:`<p>Let the Markdown file support vue playground in your VuePress site.</p>
`,r:{minutes:1.37,words:412},y:"a",title:"Vue Playground",i:"code"},["/guide/markdown/vue-playground","/guide/markdown/vue-playground.md"]],["v-b1cce5cc","/ru/config/",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Конфиг"],e:`<h2> Введение в конфигурацию</h2>
<ul>
<li><a href="/hope/ru/config/intro.html" target="blank">Посмотреть детали</a></li>
</ul>
<h2> Поддержка I18n</h2>
<ul>
<li><a href="/hope/ru/config/i18n.html" target="blank">Посмотреть детали</a></li>
</ul>
<h2> Конфиг темы</h2>
<ul>
<li>
<p><a href="/hope/ru/config/theme/basic.html" target="blank">Базовая конфигурация темы</a></p>
</li>
<li>
<p><a href="/hope/ru/config/theme/feature.html" target="blank">Конфигурация функции темы</a></p>
</li>
<li>
<p><a href="/hope/ru/config/theme/layout.html" target="blank">Конфигурация макета темы</a></p>
</li>
<li>
<p><a href="/hope/ru/config/theme/appearance.html" target="blank">Настройка внешнего вида темы</a></p>
</li>
</ul>`,r:{minutes:.33,words:100},y:"a",title:"Конфиг",i:"config"},["/ru/config/index.html","/ru/config/README.md"]],["v-ea7e0cbe","/ru/config/i18n.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["I18N"],e:`<h2> Настройка языка </h2>
<p>Вам нужно установить опцию <code>lang</code> для каждого языка. Даже если вы используете только один язык, вы должны установить <code>lang</code> в <code>.vuepress/config.{js,ts}</code>.</p>
<div class="hint-container tip">
<p class="hint-container-title">Зачем его устанавливать?</p>
<p>Чтобы предоставить правильный текст локали, тема должна знать, какой язык использует каждый каталог.</p>
</div>`,r:{minutes:1.8,words:541},y:"a",title:"I18n",i:"config"},["/ru/config/i18n","/ru/config/i18n.md"]],["v-8c7f1af2","/ru/config/intro.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Введение"],e:`<h2> Концепции конфигурации</h2>
<p>VuePress в основном хранит конфигурацию и необходимые файлы в папке <code>.vuepress/</code> в каталоге.</p>
<div class="hint-container info">
<p class="hint-container-title">Инфо</p>
<p>Файловую структуру VuePress см. в разделе <a href="/hope/ru/cookbook/vuepress/file.html" target="blank">Основы VuePress → Структура файла</a>.</p>
</div>`,r:{minutes:.46,words:138},y:"a",title:"Введение в конфиг",i:"config"},["/ru/config/intro","/ru/config/intro.md"]],["v-77297e62","/ru/config/style.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Конфиг темы","Стиль"],e:`<p>Вы можете изменить стили темы в <code>.vuepress/styles</code>, установив значения переменных в файлах <code>config.scss</code> и <code>palette.scss</code>.</p>
<p>Также вы можете добавить свои собственные стили в <code>.vuepress/styles/index.scss</code>.</p>
`,r:{minutes:1.72,words:517},y:"a",title:"Конфиг стиля",i:"style"},["/ru/config/style","/ru/config/style.md"]],["v-f809be6a","/ru/cookbook/",{y:"p",title:"Учебник с примерами",i:"guide"},["/ru/cookbook/index.html","/ru/cookbook/README.md"]],["v-7a0e01e8","/ru/faq/",{d:"2022-08-01T02:38:33.000Z",c:["FAQ"],e:`<p>Сюда включены часто задаваемые вопросы и соответствующие решения с использованием темы.</p>
<h2> Каталог</h2>
<ul>
<li>
<p><a href="/hope/ru/faq/troubleshooting.html" target="blank">Исправление проблем</a></p>
</li>
<li>
<p><a href="/hope/ru/faq/common-error.html" target="blank">Распространенные ошибки</a></p>
</li>
<li>
<p><a href="/hope/ru/faq/vite.html" target="blank">Проблемы с Vite</a></p>
</li>
<li>
<p><a href="/hope/ru/faq/safari.html" target="blank">Проблемы с Safari</a></p>
</li>
</ul>`,r:{minutes:1.5,words:449},y:"a",title:"FAQ",i:"question"},["/ru/faq/index.html","/ru/faq/README.md"]],["v-75e54132","/ru/faq/common-error.html",{d:"2022-08-01T02:38:33.000Z",c:["FAQ"],e:`<h2> <code>TypeError: Invalid value used as weak map key</code></h2>
<p>Если вы столкнулись с такой ошибкой, вероятно, вы используете нестандартные теги в своем проекте.</p>
<p>Существуют такие теги, как <code>&lt;center&gt;</code> или <code>&lt;font&gt;</code>, которые есть в спецификации HTML1.0, но помечены как нерекомендуемые с тех пор, как HTML4.0 был выпущен в 1999 году, а затем удален в выпуске HTML5 в 2008 году. Так что Vue не позволяет вам использовать их по умолчанию. Вероятно, вам следует удалить их и использовать стандартный тег HTML5.</p>`,r:{minutes:2.11,words:634},y:"a",title:"Распространенные ошибки",i:"warn"},["/ru/faq/common-error","/ru/faq/common-error.md"]],["v-aeaf7a66","/ru/faq/safari.html",{d:"2022-08-01T02:38:33.000Z",c:["FAQ"],e:`<h2> Плавная прокрутка не удалась</h2>
<p>Мы используем свойство CSS <code>scroll-behavior: smooth</code>, чтобы обеспечить плавную прокрутку. Его глобальный рейтинг одобрения составляет 93.06% <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p>`,r:{minutes:.44,words:131},y:"a",title:"Safari FAQ",i:"safari"},["/ru/faq/safari","/ru/faq/safari.md"]],["v-f500906a","/ru/faq/troubleshooting.html",{d:"2022-08-01T02:38:33.000Z",c:["FAQ"],e:`<h2> Убедитесь, что используете последнюю версию</h2>
<p>Пожалуйста, убедитесь, что вы используете последнюю версию 2 <code>vuepress</code> и <code>vuepress-theme-hope</code>, потому что некоторые ошибки, с которыми вы столкнулись, могли быть исправлены в новых версиях.</p>
<p>Вы можете обновиться до последней версии, выполнив следующие команды.</p>`,r:{minutes:1.31,words:394},y:"a",title:"Исправление проблем",i:"check"},["/ru/faq/troubleshooting","/ru/faq/troubleshooting.md"]],["v-49735169","/ru/faq/vite.html",{d:"2022-08-01T02:38:33.000Z",c:["FAQ"],e:`<h2> Медленная холодная загрузка с помощью Vite</h2>
<p>Это ожидаемое поведение. Мы добавляем больше функций, что означает, что у нас есть от 2 до 8 строк кода по сравнению с <code>@vuepress/theme-default</code> в зависимости от используемых вами функций. Таким образом, ожидается, что транспиляция и отправка кода темы и плагинов в браузер увеличится с <code>0.8s - 2s</code> в <code>@vuepress/theme-default</code> до <code>3s - 10s</code> (диапазон зависит от производительности машины).</p>`,r:{minutes:2.24,words:671},y:"a",title:"Vite FAQ",i:"question"},["/ru/faq/vite","/ru/faq/vite.md"]],["v-28fd69b4","/ru/guide/",{d:"2022-08-01T02:38:33.000Z",c:["Вступление"],g:["Вступление"],e:`<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>Если вы столкнулись с ошибкой во время использования, вы можете открыть проблему <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues" target="_blank" rel="noopener noreferrer">здесь</a></p>
</div>
<h2> Возможности темы✨</h2>
<p>Тема во многом наследует конфиг <code>@vuepress/theme-default</code>, при этом добавляет в него множество функций и оптимизацию макета.</p>
`,r:{minutes:2.43,words:728},y:"a",title:"Руководство",i:"creative"},["/ru/guide/index.html","/ru/guide/README.md"]],["v-3e7dfb14","/ru/migration/",{d:"2022-08-01T02:38:33.000Z",e:`<p>Это руководство поможет вам перейти с версии 1 на версию 2.</p>
`,r:{minutes:1.07,words:320},y:"a",title:"Миграция версии 2",i:"change"},["/ru/migration/index.html","/ru/migration/README.md"]],["v-f288f17a","/ru/migration/config.html",{d:"2022-08-01T02:38:33.000Z",c:["Миграция"],g:["Миграция","Конфиг темы"],e:`
<h2> Использование темы</h2>
<ul>
<li>переименован <code>themeConfig</code> в <code>hopeTheme</code></li>
<li>переименован <code>navbarConfig</code> в <code>navbar</code></li>
<li>переименован <code>sidebarConfig</code> в <code>sidebar</code></li>
<li>добавлены помощники <code>arraySidebar</code> и <code>objectSidebar</code></li>
<li>удален <code>config</code></li>
</ul>`,r:{minutes:4.69,words:1407},y:"a",title:"Руководство по миграции конфигурации",i:"config"},["/ru/migration/config","/ru/migration/config.md"]],["v-3bbae68e","/ru/migration/highlight.html",{d:"2022-08-01T02:38:33.000Z",e:`<p>Мы настоятельно рекомендуем вам перейти на версию V2, так как версия V2 содержит следующие улучшения.</p>
`,r:{minutes:2.07,words:620},y:"a",title:"Основные моменты версии 2",i:"hot"},["/ru/migration/highlight","/ru/migration/highlight.md"]],["v-07c05b16","/ru/migration/page.html",{d:"2022-08-01T02:38:33.000Z",c:["Миграция"],g:["Миграция","Frontmatter","Страница"],e:`<h2> Frontmatter</h2>
<h3> Устаревшее</h3>
<ul>
<li>
<p>помечено <code>time</code> как устаревшее, вместо этого использовать <code>date</code></p>
</li>
<li>
<p>помечено <code>categories</code> как устаревшее, вместо этого использовать <code>category</code></p>
</li>
<li>
<p>помечено <code>tags</code> как устаревшее, вместо этого использовать <code>tag</code></p>
</li>
</ul>`,r:{minutes:1.11,words:332},y:"a",title:"Руководство по миграции страницы",i:"page"},["/ru/migration/page","/ru/migration/page.md"]],["v-2dff8848","/ru/migration/style.html",{d:"2022-08-01T02:38:33.000Z",c:["Миграция"],g:["Миграция","Стиль"],e:`<h2> Изменения препроцессора</h2>
<p>Вся система стилей была перенесена из Stylus в Scss, что принесло следующие изменения:</p>
<ul>
<li><code>palette.styl</code> разделен на <code>config.scss</code> и <code>palette.scss</code></li>
<li><code>index.styl</code> изменен на <code>index.scss</code></li>
</ul>`,r:{minutes:.61,words:184},y:"a",title:"Руководство по миграции стилей",i:"style"},["/ru/migration/style","/ru/migration/style.md"]],["v-7c2919f6","/zh/config/",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["配置"],e:`<h2> 配置介绍</h2>
<ul>
<li><a href="/hope/zh/config/intro.html" target="blank">查看详情</a></li>
</ul>
<h2> 多语言支持</h2>
<ul>
<li><a href="/hope/zh/config/i18n.html" target="blank">查看详情</a></li>
</ul>
<h2> 主题配置</h2>
<ul>
<li>
<p><a href="/hope/zh/config/theme/basic.html" target="blank">主题基本配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/theme/feature.html" target="blank">主题功能配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/theme/layout.html" target="blank">主题布局配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/theme/appearance.html" target="blank">主题外观配置</a></p>
</li>
</ul>`,r:{minutes:.5,words:151},y:"a",title:"配置",i:"config"},["/zh/config/index.html","/zh/config/README.md"]],["v-06a8e7d4","/zh/config/i18n.html",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["多语言"],e:`<h2> 设置语言 </h2>
<p>你需要为每个语言设置 <code>lang</code> 选项。即使你只在使用单个语言，你也必须在 <code>.vuepress/config.{js,ts}</code> 中设置 <code>lang</code>。</p>
<div class="hint-container tip">
<p class="hint-container-title">为什么要这样做?</p>
<p>要提供正确的语言环境文本，主题需要知道根文件夹以及每个多语言文件夹正在使用哪种语言。</p>
</div>

<h2> 多语言配置</h2>
<p><code>locales</code> 是一个对象，其键为每个语言的路径前缀，值为该语言的配置，可以包含 <code>title</code>, <code>description</code>, <code>lang</code> 等。</p>`,r:{minutes:2.49,words:746},y:"a",title:"多语言",i:"config"},["/zh/config/i18n","/zh/config/i18n.md"]],["v-f5afa29c","/zh/config/intro.html",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["介绍"],e:`<h2> 配置概念</h2>
<p>VuePress 主要通过目录下的 <code>.vuepress/</code> 文件夹存放配置和需要的文件。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>关于 VuePress 的文件结构，详见 <a href="/hope/zh/cookbook/vuepress/file.html" target="blank">VuePress 基础 → 文件结构</a>。</p>
</div>
<p>在 VuePress 中，有三种配置概念:</p>`,r:{minutes:.63,words:190},y:"a",title:"配置介绍",i:"config"},["/zh/config/intro","/zh/config/intro.md"]],["v-42913a8d","/zh/config/style.html",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["主题配置","样式"],e:`<p>你可以在 <code>.vuepress/styles</code> 中通过在 <code>config.scss</code> 和 <code>palette.scss</code> 文件中写入变量值来更改主题的样式。</p>
<p>你也可以在 <code>.vuepress/styles/index.scss</code> 中添加你自己的样式。</p>
`,r:{minutes:2.64,words:791},y:"a",title:"样式配置",i:"style"},["/zh/config/style","/zh/config/style.md"]],["v-31eb37f6","/zh/cookbook/",{y:"p",title:"基础教程",i:"guide"},["/zh/cookbook/index.html","/zh/cookbook/README.md"]],["v-53fbd901","/zh/faq/",{d:"2022-04-06T17:09:45.000Z",c:["FAQ"],e:`<p>此处包含了主题使用过程中的常见问题与相应的解决办法。</p>
<h2> 目录</h2>
<ul>
<li>
<p><a href="/hope/zh/faq/troubleshooting.html" target="blank">故障排查</a></p>
</li>
<li>
<p><a href="/hope/zh/faq/common-error.html" target="blank">常见错误</a></p>
</li>
<li>
<p><a href="/hope/zh/faq/vite.html" target="blank">Vite 相关问题</a></p>
</li>
<li>
<p><a href="/hope/zh/faq/safari.html" target="blank">Safari 相关问题</a></p>
</li>
</ul>`,r:{minutes:2.55,words:765},y:"a",title:"常见问题",i:"question"},["/zh/faq/index.html","/zh/faq/README.md"]],["v-3ed5e3dc","/zh/faq/common-error.html",{d:"2022-04-06T17:09:45.000Z",c:["FAQ"],e:`<h2> <code>TypeError: Invalid value used as weak map key</code></h2>
<p>如果你遇到这样的错误，你可能在项目中使用了非标准标签。</p>
<p>有像 <code>&lt;center&gt;</code> 或 <code>&lt;font&gt;</code> 这样的标签，它们在 HTML1.0 规范中，但自 1999 年发布的 HTML4.0 以来被标记为不推荐，然后在 2008 年的 HTML5 版本中被删除。所以 Vue 在默认设置下不允许你使用它们。 你应当移除它们并使用标准的 HTML5 标签。</p>
<p>如果要删除它们，请使用 <code>--debug</code> Flag 运行主题，你将收到警告日志，告诉你可能无法识别的标签。</p>`,r:{minutes:3.27,words:980},y:"a",title:"常见错误",i:"warn"},["/zh/faq/common-error","/zh/faq/common-error.md"]],["v-96d1e490","/zh/faq/safari.html",{d:"2022-04-07T16:26:50.000Z",c:["FAQ"],e:`<h2> 平滑滚动不生效</h2>
<p>我们使用 CSS 属性 <code>scroll-behavior: smooth</code> 来提供平滑滚动。它在全球有 93.06% 的支持率<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><a class="footnote-anchor" id="footnote-ref1">
</a><p><a class="footnote-anchor" id="footnote-ref1">目前，只有 iOS 和 iPadOS 15.4 及以上，macOS 12.3 及以上支持该属性<sup class="footnote-ref"></sup></a><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2">。</a></p>`,r:{minutes:.55,words:166},y:"a",title:"Safari 常见问题",i:"safari"},["/zh/faq/safari","/zh/faq/safari.md"]],["v-37ff0540","/zh/faq/troubleshooting.html",{d:"2022-04-06T17:09:45.000Z",c:["FAQ"],e:`<h2> 确定使用最新版本</h2>
<p>请确保你在使用最新的 <code>vuepress</code> 和 <code>vuepress-theme-hope</code> V2 版本，因为一些你遇到的 bug 可能已经在新版本中修复。</p>
<p>你可以通过执行下列命令来更新到最新版本。</p>

<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>任何以 <code>@vuepress/plugin-</code> 开头的官方插件应该和 VuePress 保持相同版本。</p>
<p>如果你使用了其他第三方插件，请确保它兼容你要升级到的 VuePress 版本。</p>
</div>`,r:{minutes:1.82,words:547},y:"a",title:"故障排查",i:"check"},["/zh/faq/troubleshooting","/zh/faq/troubleshooting.md"]],["v-744449d8","/zh/faq/vite.html",{d:"2022-04-06T17:09:45.000Z",c:["FAQ"],e:`<h2> Vite 冷启动速度慢</h2>
<p>这是预期的行为，而且请注意开发服务器冷启动慢<strong>不代表</strong>构建结果部署到线上性能不佳。</p>
<p><code>vuepress-theme-hope</code> 添加了更多功能，这意味着根据你使用的功能，与 <code>@vuepress/theme-default</code> 相比，我们代码行数约为 2 倍到 8 倍。因此，将主题和插件代码转译并发送到浏览器预计将从 <code>@vuepress/theme-default</code> 中的 <code>0.8s - 2s</code> 增加到 <code>3s - 10s</code> (范围取决于机器性能)。</p>`,r:{minutes:3.57,words:1072},y:"a",title:"Vite 常见问题",i:"light"},["/zh/faq/vite","/zh/faq/vite.md"]],["v-47357bdb","/zh/guide/",{d:"2022-02-15T14:43:07.000Z",c:["介绍"],g:["介绍"],e:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果你在使用过程中遇到了 bug，可以 <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues" target="_blank" rel="noopener noreferrer">提一个 issue</a> 或者 <a href="https://jq.qq.com/?_wv=1027&amp;k=rATJyxGK" target="_blank" rel="noopener noreferrer">加入 QQ 群</a> (群号: 1003437555) 进行反馈。</p>
</div>
<h2> 主题特点 ✨</h2>
<p>主题很大程度上继承了 VuePress 默认主题的配置，并在此基础上添加了大量功能与布局优化。</p>
`,r:{minutes:3.52,words:1057},y:"a",title:"指南",i:"creative"},["/zh/guide/index.html","/zh/guide/README.md"]],["v-4e90c949","/zh/migration/",{d:"2022-02-16T16:40:54.000Z",e:`<p>本指南帮助你从 V1 迁移至 V2。</p>
`,r:{minutes:1.45,words:434},y:"a",title:"V2 迁移指南",i:"change"},["/zh/migration/index.html","/zh/migration/README.md"]],["v-bb799424","/zh/migration/config.html",{d:"2022-02-16T16:40:54.000Z",c:["迁移"],g:["迁移","主题配置"],e:`
<h2> 主题使用</h2>
<ul>
<li>移除 <code>config</code></li>
<li><code>themeConfig</code> 重命名为 <code>hopeTheme</code></li>
<li><code>navbarConfig</code> 重命名为 <code>navbar</code></li>
<li><code>sidebarConfig</code> 重命名为 <code>sidebar</code></li>
<li>新增 <code>arraySidebar</code>, <code>objectSidebar</code></li>
</ul>`,r:{minutes:6.98,words:2093},y:"a",title:"配置迁移指南",i:"config"},["/zh/migration/config","/zh/migration/config.md"]],["v-d6bc4ba4","/zh/migration/highlight.html",{d:"2022-05-22T04:55:08.000Z",e:`<p>我们强烈建议你切换到 V2 版本，因为 V2 版本提供了以下改进。</p>
`,r:{minutes:3.22,words:967},y:"a",title:"V2 亮点",i:"hot"},["/zh/migration/highlight","/zh/migration/highlight.md"]],["v-cfac8efe","/zh/migration/page.html",{d:"2022-02-16T16:40:54.000Z",c:["迁移"],g:["迁移","页面","Frontmatter"],e:`<h2> Frontmatter</h2>
<h3> 废弃</h3>
<ul>
<li>
<p><code>time</code> 标记为废弃，请使用 <code>date</code></p>
</li>
<li>
<p><code>categories</code> 标记为废弃，请使用 <code>category</code></p>
</li>
<li>
<p><code>tags</code> 标记为废弃，请使用 <code>tag</code></p>
</li>
</ul>
<h3> 变更</h3>
<ul>
<li>
<p><code>author</code> 类型从 <code>string | undefined</code> 改为 <code>AuthorInfo[] | AuthorInfo | string[] | string | undefined</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 作者姓名
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者网站
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者 Email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此改动允许你添加多个作者，并为其设置网站。</p>
</li>
<li>
<p><code>date</code> 现在仅支持使用 <code>-</code> 标记的标准 DateString</p>
</li>
<li>
<p><code>category</code> 类型从 <code>string | undefined</code> 改为 <code>string[] | string | undefined</code></p>
<p>主题现在支持多个分类。</p>
</li>
<li>
<p><code>pageInfo</code> 类型从 <code>PageInfo[] | false</code> 改为 <code>ArticleInfo[] | false</code>。</p>
<p>可填入的值从 <code>"author"</code>, <code>"time"</code>, <code>"category"</code>, <code>"tag"</code>, <code>"reading-time"</code>, <code>"word"</code>, <code>"visitor"</code> 改为 <code>"Author"</code>, <code>"Date"</code>, <code>"Original"</code>, <code>"Category"</code>, <code>"Tag"</code>, <code>"ReadingTime"</code>, <code>"Word"</code>, <code>"PageView"</code></p>
</li>
<li>
<p><code>sidebarDepth</code> 重命名为 <code>headerDepth</code></p>
</li>
<li>
<p><code>copyrightText</code> 重命名为 <code>copyright</code></p>
</li>
<li>
<p><code>anchorDisplay</code> 重命名为 <code>toc</code></p>
</li>
<li>
<p><code>updateTime</code> 重命名为 <code>lastUpdated</code></p>
</li>
<li>
<p><code>prev</code> 和 <code>next</code> 类型由 <code>string | false</code> 改为 <code>AutoLinkOptions | string | false</code></p>
<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li>
</ul>`,r:{minutes:1.44,words:433},y:"a",title:"页面迁移指南",i:"page"},["/zh/migration/page","/zh/migration/page.md"]],["v-65c28bd1","/zh/migration/style.html",{d:"2022-02-16T16:40:54.000Z",c:["迁移"],g:["迁移","样式"],e:`<h2> 预处理器变更</h2>
<p>整个样式系统从 Stylus 迁移到 Scss，这带来了以下更改:</p>
<ul>
<li><code>palette.styl</code> 拆分为 <code>config.scss</code> 和 <code>palette.scss</code></li>
<li><code>index.styl</code> 改为 <code>index.scss</code></li>
</ul>
<h2> 样式变更</h2>
<h3> 响应式布局断点</h3>
<p>移动至 <code>config.scss</code>。</p>
<ul>
<li><code>$MQWide</code> 重命名为 <code>$pc</code></li>
<li><code>$MQNormal</code> 重命名为 <code>$laptop</code></li>
<li><code>$MQNarrow</code> 重命名为 <code>$pad</code></li>
<li><code>$MQMobile</code> 重命名为 <code>$tablet</code></li>
<li><code>$MQMobileNarrow</code> 重命名为 <code>$mobile</code></li>
</ul>`,r:{minutes:.82,words:247},y:"a",title:"样式迁移指南",i:"style"},["/zh/migration/style","/zh/migration/style.md"]],["v-5572e9e4","/cookbook/markdown/emoji/",{d:"2022-03-05T13:20:25.000Z",e:`<h2> People</h2>
<ul>
<li><a href="/hope/cookbook/markdown/emoji/people.html" target="blank">View Detail</a></li>
</ul>
<h2> Nature</h2>
<ul>
<li><a href="/hope/cookbook/markdown/emoji/nature.html" target="blank">View Detail</a></li>
</ul>
<h2> Object</h2>
<ul>
<li><a href="/hope/cookbook/markdown/emoji/object.html" target="blank">View Detail</a></li>
</ul>`,r:{minutes:.08,words:25},y:"a",title:"Emoji List",i:"emoji"},["/cookbook/markdown/emoji/index.html","/cookbook/markdown/emoji/README.md"]],["v-29a6542e","/cookbook/markdown/emoji/nature.html",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook"],g:["Markdown","Emoji"],e:`<ul>
<li>☀️ <code>:sunny:</code></li>
<li>☔ <code>:umbrella:</code></li>
<li>☁️ <code>:cloud:</code></li>
<li>❄️ <code>:snowflake:</code></li>
<li>⛄ <code>:snowman:</code></li>
<li>⚡ <code>:zap:</code></li>
<li>🌀 <code>:cyclone:</code></li>
<li>🌁 <code>:foggy:</code></li>
<li>🌊 <code>:ocean:</code></li>
<li>🐱 <code>:cat:</code></li>
<li>🐶 <code>:dog:</code></li>
<li>🐭 <code>:mouse:</code></li>
<li>🐹 <code>:hamster:</code></li>
<li>🐰 <code>:rabbit:</code></li>
<li>🐺 <code>:wolf:</code></li>
<li>🐸 <code>:frog:</code></li>
<li>🐯 <code>:tiger:</code></li>
<li>🐨 <code>:koala:</code></li>
<li>🐻 <code>:bear:</code></li>
<li>🐷 <code>:pig:</code></li>
<li>🐽 <code>:pig_nose:</code></li>
<li>🐮 <code>:cow:</code></li>
<li>🐗 <code>:boar:</code></li>
<li>🐵 <code>:monkey_face:</code></li>
<li>🐒 <code>:monkey:</code></li>
<li>🐴 <code>:horse:</code></li>
<li>🐎 <code>:racehorse:</code></li>
<li>🐫 <code>:camel:</code></li>
<li>🐑 <code>:sheep:</code></li>
<li>🐘 <code>:elephant:</code></li>
<li>🐼 <code>:panda_face:</code></li>
<li>🐍 <code>:snake:</code></li>
<li>🐦 <code>:bird:</code></li>
<li>🐤 <code>:baby_chick:</code></li>
<li>🐥 <code>:hatched_chick:</code></li>
<li>🐣 <code>:hatching_chick:</code></li>
<li>🐔 <code>:chicken:</code></li>
<li>🐧 <code>:penguin:</code></li>
<li>🐢 <code>:turtle:</code></li>
<li>🐛 <code>:bug:</code></li>
<li>🐝 <code>:honeybee:</code></li>
<li>🐜 <code>:ant:</code></li>
<li>🪲 <code>:beetle:</code></li>
<li>🐌 <code>:snail:</code></li>
<li>🐙 <code>:octopus:</code></li>
<li>🐠 <code>:tropical_fish:</code></li>
<li>🐟 <code>:fish:</code></li>
<li>🐳 <code>:whale:</code></li>
<li>🐋 <code>:whale2:</code></li>
<li>🐬 <code>:dolphin:</code></li>
<li>🐄 <code>:cow2:</code></li>
<li>🐏 <code>:ram:</code></li>
<li>🐀 <code>:rat:</code></li>
<li>🐃 <code>:water_buffalo:</code></li>
<li>🐅 <code>:tiger2:</code></li>
<li>🐇 <code>:rabbit2:</code></li>
<li>🐉 <code>:dragon:</code></li>
<li>🐐 <code>:goat:</code></li>
<li>🐓 <code>:rooster:</code></li>
<li>🐕 <code>:dog2:</code></li>
<li>🐖 <code>:pig2:</code></li>
<li>🐁 <code>:mouse2:</code></li>
<li>🐂 <code>:ox:</code></li>
<li>🐲 <code>:dragon_face:</code></li>
<li>🐡 <code>:blowfish:</code></li>
<li>🐊 <code>:crocodile:</code></li>
<li>🐪 <code>:dromedary_camel:</code></li>
<li>🐆 <code>:leopard:</code></li>
<li>🐈 <code>:cat2:</code></li>
<li>🐩 <code>:poodle:</code></li>
<li>🐾 <code>:paw_prints:</code></li>
<li>💐 <code>:bouquet:</code></li>
<li>🌸 <code>:cherry_blossom:</code></li>
<li>🌷 <code>:tulip:</code></li>
<li>🍀 <code>:four_leaf_clover:</code></li>
<li>🌹 <code>:rose:</code></li>
<li>🌻 <code>:sunflower:</code></li>
<li>🌺 <code>:hibiscus:</code></li>
<li>🍁 <code>:maple_leaf:</code></li>
<li>🍃 <code>:leaves:</code></li>
<li>🍂 <code>:fallen_leaf:</code></li>
<li>🌿 <code>:herb:</code></li>
<li>🍄 <code>:mushroom:</code></li>
<li>🌵 <code>:cactus:</code></li>
<li>🌴 <code>:palm_tree:</code></li>
<li>🌲 <code>:evergreen_tree:</code></li>
<li>🌳 <code>:deciduous_tree:</code></li>
<li>🌰 <code>:chestnut:</code></li>
<li>🌱 <code>:seedling:</code></li>
<li>🌼 <code>:blossom:</code></li>
<li>🌾 <code>:ear_of_rice:</code></li>
<li>🐚 <code>:shell:</code></li>
<li>🌐 <code>:globe_with_meridians:</code></li>
<li>🌞 <code>:sun_with_face:</code></li>
<li>🌝 <code>:full_moon_with_face:</code></li>
<li>🌚 <code>:new_moon_with_face:</code></li>
<li>🌑 <code>:new_moon:</code></li>
<li>🌒 <code>:waxing_crescent_moon:</code></li>
<li>🌓 <code>:first_quarter_moon:</code></li>
<li>🌔 <code>:waxing_gibbous_moon:</code></li>
<li>🌕 <code>:full_moon:</code></li>
<li>🌖 <code>:waning_gibbous_moon:</code></li>
<li>🌗 <code>:last_quarter_moon:</code></li>
<li>🌘 <code>:waning_crescent_moon:</code></li>
<li>🌜 <code>:last_quarter_moon_with_face:</code></li>
<li>🌛 <code>:first_quarter_moon_with_face:</code></li>
<li>🌙 <code>:crescent_moon:</code></li>
<li>🌍 <code>:earth_africa:</code></li>
<li>🌎 <code>:earth_americas:</code></li>
<li>🌏 <code>:earth_asia:</code></li>
<li>🌋 <code>:volcano:</code></li>
<li>🌌 <code>:milky_way:</code></li>
<li>⛅ <code>:partly_sunny:</code></li>
</ul>`,r:{minutes:.79,words:236},y:"a",title:"Nature Emoji",i:"emoji"},["/cookbook/markdown/emoji/nature","/cookbook/markdown/emoji/nature.md"]],["v-6a308c96","/cookbook/markdown/emoji/object.html",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook"],g:["Markdown","Emoji"],e:`<ul>
<li>🎍 <code>:bamboo:</code></li>
<li>💝 <code>:gift_heart:</code></li>
<li>🎎 <code>:dolls:</code></li>
<li>🎒 <code>:school_satchel:</code></li>
<li>🎓 <code>:mortar_board:</code></li>
<li>🎏 <code>:flags:</code></li>
<li>🎆 <code>:fireworks:</code></li>
<li>🎇 <code>:sparkler:</code></li>
<li>🎐 <code>:wind_chime:</code></li>
<li>🎑 <code>:rice_scene:</code></li>
<li>🎃 <code>:jack_o_lantern:</code></li>
<li>👻 <code>:ghost:</code></li>
<li>🎅 <code>:santa:</code></li>
<li>🎄 <code>:christmas_tree:</code></li>
<li>🎁 <code>:gift:</code></li>
<li>🔔 <code>:bell:</code></li>
<li>🔕 <code>:no_bell:</code></li>
<li>🎋 <code>:tanabata_tree:</code></li>
<li>🎉 <code>:tada:</code></li>
<li>🎊 <code>:confetti_ball:</code></li>
<li>🎈 <code>:balloon:</code></li>
<li>🔮 <code>:crystal_ball:</code></li>
<li>💿 <code>:cd:</code></li>
<li>📀 <code>:dvd:</code></li>
<li>💾 <code>:floppy_disk:</code></li>
<li>📷 <code>:camera:</code></li>
<li>📹 <code>:video_camera:</code></li>
<li>🎥 <code>:movie_camera:</code></li>
<li>💻 <code>:computer:</code></li>
<li>📺 <code>:tv:</code></li>
<li>📱 <code>:iphone:</code></li>
<li>☎️ <code>:phone:</code></li>
<li>☎️ <code>:telephone:</code></li>
<li>📞 <code>:telephone_receiver:</code></li>
<li>📟 <code>:pager:</code></li>
<li>📠 <code>:fax:</code></li>
<li>💽 <code>:minidisc:</code></li>
<li>📼 <code>:vhs:</code></li>
<li>🔉 <code>:sound:</code></li>
<li>🔈 <code>:speaker:</code></li>
<li>🔇 <code>:mute:</code></li>
<li>📢 <code>:loudspeaker:</code></li>
<li>📣 <code>:mega:</code></li>
<li>⌛ <code>:hourglass:</code></li>
<li>⏳ <code>:hourglass_flowing_sand:</code></li>
<li>⏰ <code>:alarm_clock:</code></li>
<li>⌚ <code>:watch:</code></li>
<li>📻 <code>:radio:</code></li>
<li>📡 <code>:satellite:</code></li>
<li>➿ <code>:loop:</code></li>
<li>🔍 <code>:mag:</code></li>
<li>🔎 <code>:mag_right:</code></li>
<li>🔓 <code>:unlock:</code></li>
<li>🔒 <code>:lock:</code></li>
<li>🔏 <code>:lock_with_ink_pen:</code></li>
<li>🔐 <code>:closed_lock_with_key:</code></li>
<li>🔑 <code>:key:</code></li>
<li>💡 <code>:bulb:</code></li>
<li>🔦 <code>:flashlight:</code></li>
<li>🔆 <code>:high_brightness:</code></li>
<li>🔅 <code>:low_brightness:</code></li>
<li>🔌 <code>:electric_plug:</code></li>
<li>🔋 <code>:battery:</code></li>
<li>📲 <code>:calling:</code></li>
<li>📧 <code>:email:</code></li>
<li>📫 <code>:mailbox:</code></li>
<li>📮 <code>:postbox:</code></li>
<li>🛀 <code>:bath:</code></li>
<li>🛁 <code>:bathtub:</code></li>
<li>🚿 <code>:shower:</code></li>
<li>🚽 <code>:toilet:</code></li>
<li>🔧 <code>:wrench:</code></li>
<li>🔩 <code>:nut_and_bolt:</code></li>
<li>🔨 <code>:hammer:</code></li>
<li>💺 <code>:seat:</code></li>
<li>💰 <code>:moneybag:</code></li>
<li>💴 <code>:yen:</code></li>
<li>💵 <code>:dollar:</code></li>
<li>💷 <code>:pound:</code></li>
<li>💶 <code>:euro:</code></li>
<li>💳 <code>:credit_card:</code></li>
<li>💸 <code>:money_with_wings:</code></li>
<li>📧 <code>:e-mail:</code></li>
<li>📥 <code>:inbox_tray:</code></li>
<li>📤 <code>:outbox_tray:</code></li>
<li>✉️ <code>:envelope:</code></li>
<li>📨 <code>:incoming_envelope:</code></li>
<li>📯 <code>:postal_horn:</code></li>
<li>📪 <code>:mailbox_closed:</code></li>
<li>📬 <code>:mailbox_with_mail:</code></li>
<li>📭 <code>:mailbox_with_no_mail:</code></li>
<li>📦 <code>:package:</code></li>
<li>🚪 <code>:door:</code></li>
<li>🚬 <code>:smoking:</code></li>
<li>💣 <code>:bomb:</code></li>
<li>🔫 <code>:gun:</code></li>
<li>🔪 <code>:hocho:</code></li>
<li>💊 <code>:pill:</code></li>
<li>💉 <code>:syringe:</code></li>
<li>📄 <code>:page_facing_up:</code></li>
<li>📃 <code>:page_with_curl:</code></li>
<li>📑 <code>:bookmark_tabs:</code></li>
<li>📊 <code>:bar_chart:</code></li>
<li>📈 <code>:chart_with_upwards_trend:</code></li>
<li>📉 <code>:chart_with_downwards_trend:</code></li>
<li>📜 <code>:scroll:</code></li>
<li>📋 <code>:clipboard:</code></li>
<li>📆 <code>:calendar:</code></li>
<li>📅 <code>:date:</code></li>
<li>📇 <code>:card_index:</code></li>
<li>📁 <code>:file_folder:</code></li>
<li>📂 <code>:open_file_folder:</code></li>
<li>✂️ <code>:scissors:</code></li>
<li>📌 <code>:pushpin:</code></li>
<li>📎 <code>:paperclip:</code></li>
<li>✒️ <code>:black_nib:</code></li>
<li>✏️ <code>:pencil2:</code></li>
<li>📏 <code>:straight_ruler:</code></li>
<li>📐 <code>:triangular_ruler:</code></li>
<li>📕 <code>:closed_book:</code></li>
<li>📗 <code>:green_book:</code></li>
<li>📘 <code>:blue_book:</code></li>
<li>📙 <code>:orange_book:</code></li>
<li>📓 <code>:notebook:</code></li>
<li>📔 <code>:notebook_with_decorative_cover:</code></li>
<li>📒 <code>:ledger:</code></li>
<li>📚 <code>:books:</code></li>
<li>🔖 <code>:bookmark:</code></li>
<li>📛 <code>:name_badge:</code></li>
<li>🔬 <code>:microscope:</code></li>
<li>🔭 <code>:telescope:</code></li>
<li>📰 <code>:newspaper:</code></li>
<li>🏈 <code>:football:</code></li>
<li>🏀 <code>:basketball:</code></li>
<li>⚽ <code>:soccer:</code></li>
<li>⚾ <code>:baseball:</code></li>
<li>🎾 <code>:tennis:</code></li>
<li>🎱 <code>:8ball:</code></li>
<li>🏉 <code>:rugby_football:</code></li>
<li>🎳 <code>:bowling:</code></li>
<li>⛳ <code>:golf:</code></li>
<li>🚵 <code>:mountain_bicyclist:</code></li>
<li>🚴 <code>:bicyclist:</code></li>
<li>🏇 <code>:horse_racing:</code></li>
<li>🏂 <code>:snowboarder:</code></li>
<li>🏊 <code>:swimmer:</code></li>
<li>🏄 <code>:surfer:</code></li>
<li>🎿 <code>:ski:</code></li>
<li>♠️ <code>:spades:</code></li>
<li>♥️ <code>:hearts:</code></li>
<li>♣️ <code>:clubs:</code></li>
<li>♦️ <code>:diamonds:</code></li>
<li>💎 <code>:gem:</code></li>
<li>💍 <code>:ring:</code></li>
<li>🏆 <code>:trophy:</code></li>
<li>🎼 <code>:musical_score:</code></li>
<li>🎹 <code>:musical_keyboard:</code></li>
<li>🎻 <code>:violin:</code></li>
<li>👾 <code>:space_invader:</code></li>
<li>🎮 <code>:video_game:</code></li>
<li>🃏 <code>:black_joker:</code></li>
<li>🎴 <code>:flower_playing_cards:</code></li>
<li>🎲 <code>:game_die:</code></li>
<li>🎯 <code>:dart:</code></li>
<li>🀄 <code>:mahjong:</code></li>
<li>🎬 <code>:clapper:</code></li>
<li>📝 <code>:memo:</code></li>
<li>📝 <code>:pencil:</code></li>
<li>📖 <code>:book:</code></li>
<li>🎨 <code>:art:</code></li>
<li>🎤 <code>:microphone:</code></li>
<li>🎧 <code>:headphones:</code></li>
<li>🎺 <code>:trumpet:</code></li>
<li>🎷 <code>:saxophone:</code></li>
<li>🎸 <code>:guitar:</code></li>
<li>👞 <code>:shoe:</code></li>
<li>👡 <code>:sandal:</code></li>
<li>👠 <code>:high_heel:</code></li>
<li>💄 <code>:lipstick:</code></li>
<li>👢 <code>:boot:</code></li>
<li>👕 <code>:shirt:</code></li>
<li>👕 <code>:tshirt:</code></li>
<li>👔 <code>:necktie:</code></li>
<li>👚 <code>:womans_clothes:</code></li>
<li>👗 <code>:dress:</code></li>
<li>🎽 <code>:running_shirt_with_sash:</code></li>
<li>👖 <code>:jeans:</code></li>
<li>👘 <code>:kimono:</code></li>
<li>👙 <code>:bikini:</code></li>
<li>🎀 <code>:ribbon:</code></li>
<li>🎩 <code>:tophat:</code></li>
<li>👑 <code>:crown:</code></li>
<li>👒 <code>:womans_hat:</code></li>
<li>👞 <code>:mans_shoe:</code></li>
<li>🌂 <code>:closed_umbrella:</code></li>
<li>💼 <code>:briefcase:</code></li>
<li>👜 <code>:handbag:</code></li>
<li>👝 <code>:pouch:</code></li>
<li>👛 <code>:purse:</code></li>
<li>👓 <code>:eyeglasses:</code></li>
<li>🎣 <code>:fishing_pole_and_fish:</code></li>
<li>☕ <code>:coffee:</code></li>
<li>🍵 <code>:tea:</code></li>
<li>🍶 <code>:sake:</code></li>
<li>🍼 <code>:baby_bottle:</code></li>
<li>🍺 <code>:beer:</code></li>
<li>🍻 <code>:beers:</code></li>
<li>🍸 <code>:cocktail:</code></li>
<li>🍹 <code>:tropical_drink:</code></li>
<li>🍷 <code>:wine_glass:</code></li>
<li>🍴 <code>:fork_and_knife:</code></li>
<li>🍕 <code>:pizza:</code></li>
<li>🍔 <code>:hamburger:</code></li>
<li>🍟 <code>:fries:</code></li>
<li>🍗 <code>:poultry_leg:</code></li>
<li>🍖 <code>:meat_on_bone:</code></li>
<li>🍝 <code>:spaghetti:</code></li>
<li>🍛 <code>:curry:</code></li>
<li>🍤 <code>:fried_shrimp:</code></li>
<li>🍱 <code>:bento:</code></li>
<li>🍣 <code>:sushi:</code></li>
<li>🍥 <code>:fish_cake:</code></li>
<li>🍙 <code>:rice_ball:</code></li>
<li>🍘 <code>:rice_cracker:</code></li>
<li>🍚 <code>:rice:</code></li>
<li>🍜 <code>:ramen:</code></li>
<li>🍲 <code>:stew:</code></li>
<li>🍢 <code>:oden:</code></li>
<li>🍡 <code>:dango:</code></li>
<li>🥚 <code>:egg:</code></li>
<li>🍞 <code>:bread:</code></li>
<li>🍩 <code>:doughnut:</code></li>
<li>🍮 <code>:custard:</code></li>
<li>🍦 <code>:icecream:</code></li>
<li>🍨 <code>:ice_cream:</code></li>
<li>🍧 <code>:shaved_ice:</code></li>
<li>🎂 <code>:birthday:</code></li>
<li>🍰 <code>:cake:</code></li>
<li>🍪 <code>:cookie:</code></li>
<li>🍫 <code>:chocolate_bar:</code></li>
<li>🍬 <code>:candy:</code></li>
<li>🍭 <code>:lollipop:</code></li>
<li>🍯 <code>:honey_pot:</code></li>
<li>🍎 <code>:apple:</code></li>
<li>🍏 <code>:green_apple:</code></li>
<li>🍊 <code>:tangerine:</code></li>
<li>🍋 <code>:lemon:</code></li>
<li>🍒 <code>:cherries:</code></li>
<li>🍇 <code>:grapes:</code></li>
<li>🍉 <code>:watermelon:</code></li>
<li>🍓 <code>:strawberry:</code></li>
<li>🍑 <code>:peach:</code></li>
<li>🍈 <code>:melon:</code></li>
<li>🍌 <code>:banana:</code></li>
<li>🍐 <code>:pear:</code></li>
<li>🍍 <code>:pineapple:</code></li>
<li>🍠 <code>:sweet_potato:</code></li>
<li>🍆 <code>:eggplant:</code></li>
<li>🍅 <code>:tomato:</code></li>
<li>🌽 <code>:corn:</code></li>
</ul>`,r:{minutes:1.77,words:532},y:"a",title:"Object Emoji",i:"emoji"},["/cookbook/markdown/emoji/object","/cookbook/markdown/emoji/object.md"]],["v-0b17e174","/cookbook/markdown/emoji/people.html",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook"],g:["Markdown","Emoji"],e:`<ul>
<li>😄 <code>:smile:</code></li>
<li>😆 <code>:laughing:</code></li>
<li>😊 <code>:blush:</code></li>
<li>😃 <code>:smiley:</code></li>
<li>😏 <code>:smirk:</code></li>
<li>😍 <code>:heart_eyes:</code></li>
<li>😘 <code>:kissing_heart:</code></li>
<li>😚 <code>:kissing_closed_eyes:</code></li>
<li>😳 <code>:flushed:</code></li>
<li>😌 <code>:relieved:</code></li>
<li>😆 <code>:satisfied:</code></li>
<li>😁 <code>:grin:</code></li>
<li>😉 <code>:wink:</code></li>
<li>😜 <code>:stuck_out_tongue_winking_eye:</code></li>
<li>😝 <code>:stuck_out_tongue_closed_eyes:</code></li>
<li>😀 <code>:grinning:</code></li>
<li>😗 <code>:kissing:</code></li>
<li>😙 <code>:kissing_smiling_eyes:</code></li>
<li>😛 <code>:stuck_out_tongue:</code></li>
<li>😴 <code>:sleeping:</code></li>
<li>😟 <code>:worried:</code></li>
<li>😦 <code>:frowning:</code></li>
<li>😧 <code>:anguished:</code></li>
<li>😮 <code>:open_mouth:</code></li>
<li>😬 <code>:grimacing:</code></li>
<li>😕 <code>:confused:</code></li>
<li>😯 <code>:hushed:</code></li>
<li>😑 <code>:expressionless:</code></li>
<li>😒 <code>:unamused:</code></li>
<li>😅 <code>:sweat_smile:</code></li>
<li>😓 <code>:sweat:</code></li>
<li>😥 <code>:disappointed_relieved:</code></li>
<li>😩 <code>:weary:</code></li>
<li>😔 <code>:pensive:</code></li>
<li>😞 <code>:disappointed:</code></li>
<li>😖 <code>:confounded:</code></li>
<li>😨 <code>:fearful:</code></li>
<li>😰 <code>:cold_sweat:</code></li>
<li>😣 <code>:persevere:</code></li>
<li>😢 <code>:cry:</code></li>
<li>😭 <code>:sob:</code></li>
<li>😂 <code>:joy:</code></li>
<li>😲 <code>:astonished:</code></li>
<li>😱 <code>:scream:</code></li>
<li>😫 <code>:tired_face:</code></li>
<li>😠 <code>:angry:</code></li>
<li>😡 <code>:rage:</code></li>
<li>😤 <code>:triumph:</code></li>
<li>😪 <code>:sleepy:</code></li>
<li>😋 <code>:yum:</code></li>
<li>😷 <code>:mask:</code></li>
<li>😎 <code>:sunglasses:</code></li>
<li>😵 <code>:dizzy_face:</code></li>
<li>👿 <code>:imp:</code></li>
<li>😈 <code>:smiling_imp:</code></li>
<li>😐 <code>:neutral_face:</code></li>
<li>😶 <code>:no_mouth:</code></li>
<li>😇 <code>:innocent:</code></li>
<li>👽 <code>:alien:</code></li>
<li>💛 <code>:yellow_heart:</code></li>
<li>💙 <code>:blue_heart:</code></li>
<li>💜 <code>:purple_heart:</code></li>
<li>❤️ <code>:heart:</code></li>
<li>💚 <code>:green_heart:</code></li>
<li>💔 <code>:broken_heart:</code></li>
<li>💓 <code>:heartbeat:</code></li>
<li>💗 <code>:heartpulse:</code></li>
<li>💕 <code>:two_hearts:</code></li>
<li>💞 <code>:revolving_hearts:</code></li>
<li>💘 <code>:cupid:</code></li>
<li>💖 <code>:sparkling_heart:</code></li>
<li>✨ <code>:sparkles:</code></li>
<li>⭐ <code>:star:</code></li>
<li>🌟 <code>:star2:</code></li>
<li>💫 <code>:dizzy:</code></li>
<li>💥 <code>:boom:</code></li>
<li>💥 <code>:collision:</code></li>
<li>💢 <code>:anger:</code></li>
<li>❗ <code>:exclamation:</code></li>
<li>❓ <code>:question:</code></li>
<li>❕ <code>:grey_exclamation:</code></li>
<li>❔ <code>:grey_question:</code></li>
<li>💤 <code>:zzz:</code></li>
<li>💨 <code>:dash:</code></li>
<li>💦 <code>:sweat_drops:</code></li>
<li>🎶 <code>:notes:</code></li>
<li>🎵 <code>:musical_note:</code></li>
<li>🔥 <code>:fire:</code></li>
<li>💩 <code>:hankey:</code></li>
<li>💩 <code>:poop:</code></li>
<li>💩 <code>:shit:</code></li>
<li>👍 <code>:+1:</code></li>
<li>👍 <code>:thumbsup:</code></li>
<li>👎 <code>:-1:</code></li>
<li>👎 <code>:thumbsdown:</code></li>
<li>👌 <code>:ok_hand:</code></li>
<li>👊 <code>:punch:</code></li>
<li>👊 <code>:facepunch:</code></li>
<li>✊ <code>:fist:</code></li>
<li>✌️ <code>:v:</code></li>
<li>👋 <code>:wave:</code></li>
<li>✋ <code>:hand:</code></li>
<li>✋ <code>:raised_hand:</code></li>
<li>👐 <code>:open_hands:</code></li>
<li>☝️ <code>:point_up:</code></li>
<li>👇 <code>:point_down:</code></li>
<li>👈 <code>:point_left:</code></li>
<li>👉 <code>:point_right:</code></li>
<li>🙌 <code>:raised_hands:</code></li>
<li>🙏 <code>:pray:</code></li>
<li>👆 <code>:point_up_2:</code></li>
<li>👏 <code>:clap:</code></li>
<li>💪 <code>:muscle:</code></li>
<li>🤘 <code>:metal:</code></li>
<li>🖕 <code>:fu:</code></li>
<li>🏃 <code>:runner:</code></li>
<li>🏃 <code>:running:</code></li>
<li>👫 <code>:couple:</code></li>
<li>👪 <code>:family:</code></li>
<li>👬 <code>:two_men_holding_hands:</code></li>
<li>👭 <code>:two_women_holding_hands:</code></li>
<li>💃 <code>:dancer:</code></li>
<li>👯 <code>:dancers:</code></li>
<li>🙆‍♀️ <code>:ok_woman:</code></li>
<li>🙅 <code>:no_good:</code></li>
<li>💁 <code>:information_desk_person:</code></li>
<li>🙋 <code>:raising_hand:</code></li>
<li>👰‍♀️ <code>:bride_with_veil:</code></li>
<li>:person_with_pouting_face: <code>:person_with_pouting_face:</code></li>
<li>:person_frowning: <code>:person_frowning:</code></li>
<li>🙇 <code>:bow:</code></li>
<li>💑 <code>:couple_with_heart:</code></li>
<li>💆 <code>:massage:</code></li>
<li>💇 <code>:haircut:</code></li>
<li>💅 <code>:nail_care:</code></li>
<li>👦 <code>:boy:</code></li>
<li>👧 <code>:girl:</code></li>
<li>👩 <code>:woman:</code></li>
<li>👨 <code>:man:</code></li>
<li>👶 <code>:baby:</code></li>
<li>👵 <code>:older_woman:</code></li>
<li>👴 <code>:older_man:</code></li>
<li>:person_with_blond_hair: <code>:person_with_blond_hair:</code></li>
<li>👲 <code>:man_with_gua_pi_mao:</code></li>
<li>👳‍♂️ <code>:man_with_turban:</code></li>
<li>👷 <code>:construction_worker:</code></li>
<li>👮 <code>:cop:</code></li>
<li>👼 <code>:angel:</code></li>
<li>👸 <code>:princess:</code></li>
<li>😺 <code>:smiley_cat:</code></li>
<li>😸 <code>:smile_cat:</code></li>
<li>😻 <code>:heart_eyes_cat:</code></li>
<li>😽 <code>:kissing_cat:</code></li>
<li>😼 <code>:smirk_cat:</code></li>
<li>🙀 <code>:scream_cat:</code></li>
<li>😿 <code>:crying_cat_face:</code></li>
<li>😹 <code>:joy_cat:</code></li>
<li>😾 <code>:pouting_cat:</code></li>
<li>👹 <code>:japanese_ogre:</code></li>
<li>👺 <code>:japanese_goblin:</code></li>
<li>🙈 <code>:see_no_evil:</code></li>
<li>🙉 <code>:hear_no_evil:</code></li>
<li>🙊 <code>:speak_no_evil:</code></li>
<li>💂‍♂️ <code>:guardsman:</code></li>
<li>💀 <code>:skull:</code></li>
<li>🐾 <code>:feet:</code></li>
<li>👄 <code>:lips:</code></li>
<li>💋 <code>:kiss:</code></li>
<li>💧 <code>:droplet:</code></li>
<li>👂 <code>:ear:</code></li>
<li>👀 <code>:eyes:</code></li>
<li>👃 <code>:nose:</code></li>
<li>👅 <code>:tongue:</code></li>
<li>💌 <code>:love_letter:</code></li>
<li>👤 <code>:bust_in_silhouette:</code></li>
<li>👥 <code>:busts_in_silhouette:</code></li>
<li>💬 <code>:speech_balloon:</code></li>
<li>💭 <code>:thought_balloon:</code></li>
</ul>`,r:{minutes:1.22,words:366},y:"a",title:"People Emoji",i:"emoji"},["/cookbook/markdown/emoji/people","/cookbook/markdown/emoji/people.md"]],["v-5ec0d116","/cookbook/markdown/emoji/place.html",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook"],g:["Markdown","Emoji"],e:`<ul>
<li>🏠 <code>:house:</code></li>
<li>🏡 <code>:house_with_garden:</code></li>
<li>🏫 <code>:school:</code></li>
<li>🏢 <code>:office:</code></li>
<li>🏣 <code>:post_office:</code></li>
<li>🏥 <code>:hospital:</code></li>
<li>🏦 <code>:bank:</code></li>
<li>🏪 <code>:convenience_store:</code></li>
<li>🏩 <code>:love_hotel:</code></li>
<li>🏨 <code>:hotel:</code></li>
<li>💒 <code>:wedding:</code></li>
<li>⛪ <code>:church:</code></li>
<li>🏬 <code>:department_store:</code></li>
<li>🏤 <code>:european_post_office:</code></li>
<li>🌇 <code>:city_sunrise:</code></li>
<li>🌆 <code>:city_sunset:</code></li>
<li>🏯 <code>:japanese_castle:</code></li>
<li>🏰 <code>:european_castle:</code></li>
<li>⛺ <code>:tent:</code></li>
<li>🏭 <code>:factory:</code></li>
<li>🗼 <code>:tokyo_tower:</code></li>
<li>🗾 <code>:japan:</code></li>
<li>🗻 <code>:mount_fuji:</code></li>
<li>🌄 <code>:sunrise_over_mountains:</code></li>
<li>🌅 <code>:sunrise:</code></li>
<li>🌠 <code>:stars:</code></li>
<li>🗽 <code>:statue_of_liberty:</code></li>
<li>🌉 <code>:bridge_at_night:</code></li>
<li>🎠 <code>:carousel_horse:</code></li>
<li>🌈 <code>:rainbow:</code></li>
<li>🎡 <code>:ferris_wheel:</code></li>
<li>⛲ <code>:fountain:</code></li>
<li>🎢 <code>:roller_coaster:</code></li>
<li>🚢 <code>:ship:</code></li>
<li>🚤 <code>:speedboat:</code></li>
<li>⛵ <code>:boat:</code></li>
<li>⛵ <code>:sailboat:</code></li>
<li>🚣 <code>:rowboat:</code></li>
<li>⚓ <code>:anchor:</code></li>
<li>🚀 <code>:rocket:</code></li>
<li>✈️ <code>:airplane:</code></li>
<li>🚁 <code>:helicopter:</code></li>
<li>🚂 <code>:steam_locomotive:</code></li>
<li>🚊 <code>:tram:</code></li>
<li>🚞 <code>:mountain_railway:</code></li>
<li>🚲 <code>:bike:</code></li>
<li>🚡 <code>:aerial_tramway:</code></li>
<li>🚟 <code>:suspension_railway:</code></li>
<li>🚠 <code>:mountain_cableway:</code></li>
<li>🚜 <code>:tractor:</code></li>
<li>🚙 <code>:blue_car:</code></li>
<li>🚘 <code>:oncoming_automobile:</code></li>
<li>🚗 <code>:car:</code></li>
<li>🚗 <code>:red_car:</code></li>
<li>🚕 <code>:taxi:</code></li>
<li>🚖 <code>:oncoming_taxi:</code></li>
<li>🚛 <code>:articulated_lorry:</code></li>
<li>🚌 <code>:bus:</code></li>
<li>🚍 <code>:oncoming_bus:</code></li>
<li>🚨 <code>:rotating_light:</code></li>
<li>🚓 <code>:police_car:</code></li>
<li>🚔 <code>:oncoming_police_car:</code></li>
<li>🚒 <code>:fire_engine:</code></li>
<li>🚑 <code>:ambulance:</code></li>
<li>🚐 <code>:minibus:</code></li>
<li>🚚 <code>:truck:</code></li>
<li>🚋 <code>:train:</code></li>
<li>🚉 <code>:station:</code></li>
<li>🚆 <code>:train2:</code></li>
<li>🚅 <code>:bullettrain_front:</code></li>
<li>🚄 <code>:bullettrain_side:</code></li>
<li>🚈 <code>:light_rail:</code></li>
<li>🚝 <code>:monorail:</code></li>
<li>🚃 <code>:railway_car:</code></li>
<li>🚎 <code>:trolleybus:</code></li>
<li>🎫 <code>:ticket:</code></li>
<li>⛽ <code>:fuelpump:</code></li>
<li>🚦 <code>:vertical_traffic_light:</code></li>
<li>🚥 <code>:traffic_light:</code></li>
<li>⚠️ <code>:warning:</code></li>
<li>🚧 <code>:construction:</code></li>
<li>🔰 <code>:beginner:</code></li>
<li>🏧 <code>:atm:</code></li>
<li>🎰 <code>:slot_machine:</code></li>
<li>🚏 <code>:busstop:</code></li>
<li>💈 <code>:barber:</code></li>
<li>♨️ <code>:hotsprings:</code></li>
<li>🏁 <code>:checkered_flag:</code></li>
<li>🎌 <code>:crossed_flags:</code></li>
<li>🏮 <code>:izakaya_lantern:</code></li>
<li>🗿 <code>:moyai:</code></li>
<li>🎪 <code>:circus_tent:</code></li>
<li>🎭 <code>:performing_arts:</code></li>
<li>📍 <code>:round_pushpin:</code></li>
<li>🚩 <code>:triangular_flag_on_post:</code></li>
</ul>`,r:{minutes:.67,words:200},y:"a",title:"Place Emoji",i:"emoji"},["/cookbook/markdown/emoji/place","/cookbook/markdown/emoji/place.md"]],["v-baab6c46","/cookbook/markdown/emoji/symbol.html",{d:"2022-03-05T13:20:25.000Z",c:["Cookbook"],g:["Markdown","Emoji"],e:`<ul>
<li>1️⃣ <code>:one:</code></li>
<li>2️⃣ <code>:two:</code></li>
<li>3️⃣ <code>:three:</code></li>
<li>4️⃣ <code>:four:</code></li>
<li>5️⃣ <code>:five:</code></li>
<li>6️⃣ <code>:six:</code></li>
<li>7️⃣ <code>:seven:</code></li>
<li>8️⃣ <code>:eight:</code></li>
<li>9️⃣ <code>:nine:</code></li>
<li>🔟 <code>:keycap_ten:</code></li>
<li>🔢 <code>:1234:</code></li>
<li>0️⃣ <code>:zero:</code></li>
<li>#️⃣ <code>:hash:</code></li>
<li>🔣 <code>:symbols:</code></li>
<li>◀️ <code>:arrow_backward:</code></li>
<li>⬇️ <code>:arrow_down:</code></li>
<li>▶️ <code>:arrow_forward:</code></li>
<li>⬅️ <code>:arrow_left:</code></li>
<li>🔠 <code>:capital_abcd:</code></li>
<li>🔡 <code>:abcd:</code></li>
<li>🔤 <code>:abc:</code></li>
<li>↙️ <code>:arrow_lower_left:</code></li>
<li>↘️ <code>:arrow_lower_right:</code></li>
<li>➡️ <code>:arrow_right:</code></li>
<li>⬆️ <code>:arrow_up:</code></li>
<li>↖️ <code>:arrow_upper_left:</code></li>
<li>↗️ <code>:arrow_upper_right:</code></li>
<li>⏬ <code>:arrow_double_down:</code></li>
<li>⏫ <code>:arrow_double_up:</code></li>
<li>🔽 <code>:arrow_down_small:</code></li>
<li>⤵️ <code>:arrow_heading_down:</code></li>
<li>⤴️ <code>:arrow_heading_up:</code></li>
<li>↩️ <code>:leftwards_arrow_with_hook:</code></li>
<li>↪️ <code>:arrow_right_hook:</code></li>
<li>↔️ <code>:left_right_arrow:</code></li>
<li>↕️ <code>:arrow_up_down:</code></li>
<li>🔼 <code>:arrow_up_small:</code></li>
<li>🔃 <code>:arrows_clockwise:</code></li>
<li>🔄 <code>:arrows_counterclockwise:</code></li>
<li>⏪ <code>:rewind:</code></li>
<li>⏩ <code>:fast_forward:</code></li>
<li>ℹ️ <code>:information_source:</code></li>
<li>🆗 <code>:ok:</code></li>
<li>🔀 <code>:twisted_rightwards_arrows:</code></li>
<li>🔁 <code>:repeat:</code></li>
<li>🔂 <code>:repeat_one:</code></li>
<li>🆕 <code>:new:</code></li>
<li>🔝 <code>:top:</code></li>
<li>🆙 <code>:up:</code></li>
<li>🆒 <code>:cool:</code></li>
<li>🆓 <code>:free:</code></li>
<li>🆖 <code>:ng:</code></li>
<li>🎦 <code>:cinema:</code></li>
<li>🈁 <code>:koko:</code></li>
<li>📶 <code>:signal_strength:</code></li>
<li>🈂️ <code>:sa:</code></li>
<li>🚻 <code>:restroom:</code></li>
<li>🚹 <code>:mens:</code></li>
<li>🚺 <code>:womens:</code></li>
<li>🚼 <code>:baby_symbol:</code></li>
<li>🚭 <code>:no_smoking:</code></li>
<li>🅿️ <code>:parking:</code></li>
<li>♿ <code>:wheelchair:</code></li>
<li>🚇 <code>:metro:</code></li>
<li>🛄 <code>:baggage_claim:</code></li>
<li>🉑 <code>:accept:</code></li>
<li>🚾 <code>:wc:</code></li>
<li>🚰 <code>:potable_water:</code></li>
<li>🚮 <code>:put_litter_in_its_place:</code></li>
<li>㊙️ <code>:secret:</code></li>
<li>㊗️ <code>:congratulations:</code></li>
<li>Ⓜ️ <code>:m:</code></li>
<li>🛂 <code>:passport_control:</code></li>
<li>🛅 <code>:left_luggage:</code></li>
<li>🛃 <code>:customs:</code></li>
<li>🉐 <code>:ideograph_advantage:</code></li>
<li>🆑 <code>:cl:</code></li>
<li>🆘 <code>:sos:</code></li>
<li>🆔 <code>:id:</code></li>
<li>🚫 <code>:no_entry_sign:</code></li>
<li>🔞 <code>:underage:</code></li>
<li>📵 <code>:no_mobile_phones:</code></li>
<li>🚯 <code>:do_not_litter:</code></li>
<li>🚱 <code>:non-potable_water:</code></li>
<li>🚳 <code>:no_bicycles:</code></li>
<li>🚷 <code>:no_pedestrians:</code></li>
<li>🚸 <code>:children_crossing:</code></li>
<li>⛔ <code>:no_entry:</code></li>
<li>✳️ <code>:eight_spoked_asterisk:</code></li>
<li>❇️ <code>:sparkle:</code></li>
<li>✴️ <code>:eight_pointed_black_star:</code></li>
<li>💟 <code>:heart_decoration:</code></li>
<li>🆚 <code>:vs:</code></li>
<li>📳 <code>:vibration_mode:</code></li>
<li>📴 <code>:mobile_phone_off:</code></li>
<li>💹 <code>:chart:</code></li>
<li>💱 <code>:currency_exchange:</code></li>
<li>♈ <code>:aries:</code></li>
<li>♉ <code>:taurus:</code></li>
<li>♊ <code>:gemini:</code></li>
<li>♋ <code>:cancer:</code></li>
<li>♌ <code>:leo:</code></li>
<li>♍ <code>:virgo:</code></li>
<li>♎ <code>:libra:</code></li>
<li>♏ <code>:scorpius:</code></li>
<li>♐ <code>:sagittarius:</code></li>
<li>♑ <code>:capricorn:</code></li>
<li>♒ <code>:aquarius:</code></li>
<li>♓ <code>:pisces:</code></li>
<li>⛎ <code>:ophiuchus:</code></li>
<li>🔯 <code>:six_pointed_star:</code></li>
<li>❎ <code>:negative_squared_cross_mark:</code></li>
<li>🅰️ <code>:a:</code></li>
<li>🅱️ <code>:b:</code></li>
<li>🆎 <code>:ab:</code></li>
<li>🅾️ <code>:o2:</code></li>
<li>💠 <code>:diamond_shape_with_a_dot_inside:</code></li>
<li>♻️ <code>:recycle:</code></li>
<li>🔚 <code>:end:</code></li>
<li>🔙 <code>:back:</code></li>
<li>🔛 <code>:on:</code></li>
<li>🔜 <code>:soon:</code></li>
<li>🕐 <code>:clock1:</code></li>
<li>🕜 <code>:clock130:</code></li>
<li>🕙 <code>:clock10:</code></li>
<li>🕥 <code>:clock1030:</code></li>
<li>🕚 <code>:clock11:</code></li>
<li>🕦 <code>:clock1130:</code></li>
<li>🕛 <code>:clock12:</code></li>
<li>🕧 <code>:clock1230:</code></li>
<li>🕑 <code>:clock2:</code></li>
<li>🕝 <code>:clock230:</code></li>
<li>🕒 <code>:clock3:</code></li>
<li>🕞 <code>:clock330:</code></li>
<li>🕓 <code>:clock4:</code></li>
<li>🕟 <code>:clock430:</code></li>
<li>🕔 <code>:clock5:</code></li>
<li>🕠 <code>:clock530:</code></li>
<li>🕕 <code>:clock6:</code></li>
<li>🕡 <code>:clock630:</code></li>
<li>🕖 <code>:clock7:</code></li>
<li>🕢 <code>:clock730:</code></li>
<li>🕗 <code>:clock8:</code></li>
<li>🕣 <code>:clock830:</code></li>
<li>🕘 <code>:clock9:</code></li>
<li>🕤 <code>:clock930:</code></li>
<li>💲 <code>:heavy_dollar_sign:</code></li>
<li>©️ <code>:copyright:</code></li>
<li>®️ <code>:registered:</code></li>
<li>™️ <code>:tm:</code></li>
<li>❌ <code>:x:</code></li>
<li>❗ <code>:heavy_exclamation_mark:</code></li>
<li>‼️ <code>:bangbang:</code></li>
<li>⁉️ <code>:interrobang:</code></li>
<li>⭕ <code>:o:</code></li>
<li>✖️ <code>:heavy_multiplication_x:</code></li>
<li>➕ <code>:heavy_plus_sign:</code></li>
<li>➖ <code>:heavy_minus_sign:</code></li>
<li>➗ <code>:heavy_division_sign:</code></li>
<li>💮 <code>:white_flower:</code></li>
<li>💯 <code>:100:</code></li>
<li>✔️ <code>:heavy_check_mark:</code></li>
<li>☑️ <code>:ballot_box_with_check:</code></li>
<li>🔘 <code>:radio_button:</code></li>
<li>🔗 <code>:link:</code></li>
<li>➰ <code>:curly_loop:</code></li>
<li>〰️ <code>:wavy_dash:</code></li>
<li>〽️ <code>:part_alternation_mark:</code></li>
<li>🔱 <code>:trident:</code></li>
<li>▪️ <code>:black_small_square:</code></li>
<li>▫️ <code>:white_small_square:</code></li>
<li>◾ <code>:black_medium_small_square:</code></li>
<li>◽ <code>:white_medium_small_square:</code></li>
<li>◼️ <code>:black_medium_square:</code></li>
<li>◻️ <code>:white_medium_square:</code></li>
<li>⬛ <code>:black_large_square:</code></li>
<li>⬜ <code>:white_large_square:</code></li>
<li>✅ <code>:white_check_mark:</code></li>
<li>🔲 <code>:black_square_button:</code></li>
<li>🔳 <code>:white_square_button:</code></li>
<li>⚫ <code>:black_circle:</code></li>
<li>⚪ <code>:white_circle:</code></li>
<li>🔴 <code>:red_circle:</code></li>
<li>🔵 <code>:large_blue_circle:</code></li>
<li>🔷 <code>:large_blue_diamond:</code></li>
<li>🔶 <code>:large_orange_diamond:</code></li>
<li>🔹 <code>:small_blue_diamond:</code></li>
<li>🔸 <code>:small_orange_diamond:</code></li>
<li>🔺 <code>:small_red_triangle:</code></li>
<li>🔻 <code>:small_red_triangle_down:</code></li>
</ul>`,r:{minutes:1.31,words:392},y:"a",title:"Symbol Emoji",i:"emoji"},["/cookbook/markdown/emoji/symbol","/cookbook/markdown/emoji/symbol.md"]],["v-718a815f","/ru/config/frontmatter/",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Конфиг","Frontmatter"],e:`<h2> Содержание</h2>
<ul>
<li>
<p><a href="/hope/ru/config/frontmatter/info.html" target="blank">Конфигурация информации Frontmatter</a></p>
</li>
<li>
<p><a href="/hope/ru/config/frontmatter/layout.html" target="blank">Конфигурация макета Frontmatter</a></p>
</li>
<li>
<p><a href="/hope/ru/config/frontmatter/plugins.html" target="blank">Конфигурация плагина Frontmatter</a></p>
</li>
<li>
<p><a href="/hope/ru/config/frontmatter/home.html" target="blank">Конфигурация главной страницы Frontmatter</a></p>
</li>
<li>
<p><a href="/hope/ru/config/frontmatter/blog-home.html" target="blank">Конфигурация главной страницы блога Frontmatter</a></p>
</li>
</ul>`,r:{minutes:.13,words:40},y:"a",title:"Конфиг Frontmatter",i:"config"},["/ru/config/frontmatter/index.html","/ru/config/frontmatter/README.md"]],["v-bca7c3e4","/ru/config/frontmatter/blog-home.html",{d:"2022-11-18T05:57:18.000Z",c:["Config"],g:["Frontmatter","Главная блога"],e:`<h2> home</h2>
<ul>
<li>Тип: <code>boolean</code></li>
<li>По умолчанию: <code>false</code></li>
</ul>
<p>Включить стиль домашней страницы при значении <code>true</code></p>
<h2> title</h2>
<ul>
<li>Тип: <code>string</code></li>
<li>Обязательный: Нет</li>
</ul>
<p>Название страницы будет использоваться в хлебных крошках, СЕО и т. д.</p>`,r:{minutes:.81,words:243},y:"a",title:"Конфигурация главной страницы блога Frontmatter",i:"config"},["/ru/config/frontmatter/blog-home","/ru/config/frontmatter/blog-home.md"]],["v-62fdce4a","/ru/config/frontmatter/home.html",{d:"2022-11-18T05:57:18.000Z",c:["Конфиг"],g:["Frontmatter","Главная"],e:`<h2> home</h2>
<ul>
<li>Тип: <code>boolean</code></li>
<li>По умолчанию: <code>false</code></li>
</ul>
<p>Включить стиль домашней страницы при значении <code>true</code></p>
<h2> title</h2>
<ul>
<li>Тип: <code>string</code></li>
<li>Обязательный: Нет</li>
</ul>
<p>Название страницы будет использоваться в хлебных крошках, СЕО и т. д.</p>`,r:{minutes:.64,words:191},y:"a",title:"Конфигурация главной страницы Frontmatter",i:"config"},["/ru/config/frontmatter/home","/ru/config/frontmatter/home.md"]],["v-ccad9b28","/ru/config/frontmatter/info.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Frontmatter","Инфо"],e:`<p>Вы можете установить информацию для страницы со следующими параметрами frontmatter.</p>
<h2> title</h2>
<ul>
<li>Тип: <code>string</code></li>
<li>Обязательный: Нет</li>
</ul>
<p>Название текущей страницы. Первый h1 в Markdown по умолчанию.</p>
<h2> shortTitle</h2>
<ul>
<li>Тип: <code>string</code></li>
<li>Обязательный: Нет</li>
</ul>`,r:{minutes:.96,words:288},y:"a",title:"Конфиг инфо Frontmatter",i:"config"},["/ru/config/frontmatter/info","/ru/config/frontmatter/info.md"]],["v-2eb425a0","/ru/config/frontmatter/layout.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Frontmatter","Макет"],e:`<p>Вы можете настроить макет страницы, установив следующие параметры frontmatter.</p>
<h2> pageInfo</h2>
<ul>
<li>Тип: <code>PageInfo[] | false</code></li>
<li>Значение по умолчанию: значение в параметрах темы</li>
</ul>
<table>
<thead>
<tr>
<th>Элемент</th>
<th>Соответствующий контент</th>
<th>Значение страницы frontmatter</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>"Author"</code></td>
<td>Автор</td>
<td><code>author</code></td>
</tr>
<tr>
<td><code>"Date"</code></td>
<td>Дата написания</td>
<td><code>date</code></td>
</tr>
<tr>
<td><code>"Category"</code></td>
<td>Категория</td>
<td><code>category</code></td>
</tr>
<tr>
<td><code>"Tag"</code></td>
<td>Теги</td>
<td><code>tag</code></td>
</tr>
<tr>
<td><code>"ReadingTime"</code></td>
<td>Ожидайте время чтения</td>
<td>Н/Д (сгенерировано автоматически)</td>
</tr>
<tr>
<td><code>"Word"</code></td>
<td>Количество слов</td>
<td>Н/Д (сгенерировано автоматически)</td>
</tr>
<tr>
<td><code>"PageView"</code></td>
<td>Номер визита</td>
<td><code>pageview</code> (доступно только с Waline)</td>
</tr>
</tbody>
</table>`,r:{minutes:1.37,words:410},y:"a",title:"Конфиг макета Frontmatter",i:"config"},["/ru/config/frontmatter/layout","/ru/config/frontmatter/layout.md"]],["v-d8060fd0","/ru/config/frontmatter/plugins.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Frontmatter","Плагин"],e:`<p>Вы можете настроить следующие параметры в frontmatter страницы, чтобы контролировать поведение плагина.</p>
<h2> Плагин <code>copyright2</code></h2>
<h3> copy.triggerWords</h3>
<ul>
<li>Тип: <code>number</code></li>
<li>По умолчанию: <code>100</code></li>
</ul>
<p>Минимальные слова, вызывающие добавление авторских прав.</p>`,r:{minutes:.72,words:216},y:"a",title:"Конфиг плагина Frontmatter",i:"config"},["/ru/config/frontmatter/plugins","/ru/config/frontmatter/plugins.md"]],["v-614f60ae","/ru/config/plugins/",{d:"2022-08-01T02:38:33.000Z",e:`<h2> Содержание</h2>
<ul>
<li>
<p><a href="/hope/ru/config/plugins/intro.html" target="blank">Введение в плагины темы</a></p>
</li>
<li>
<p><a href="/hope/ru/config/plugins/blog.html" target="blank">Конфигурация плагина блога</a></p>
</li>
<li>
<p><a href="/hope/ru/config/plugins/copyright.html" target="blank">Конфигурация плагина авторского права</a></p>
</li>
<li>
<p><a href="/hope/ru/config/plugins/feed.html" target="blank">Конфигурация плагина потока</a></p>
</li>
<li>
<p><a href="/hope/ru/config/plugins/md-enhance.html" target="blank">Конфигурация плагина</a></p>
</li>
<li>
<p><a href="/hope/ru/config/plugins/pwa.html" target="blank">Конфигурация плагина PWA</a></p>
</li>
<li>
<p><a href="/hope/ru/config/plugins/others.html" target="blank">Другие плагины</a></p>
</li>
</ul>`,r:{minutes:.13,words:40},y:"a",title:"Конфигурация плагина",i:"config"},["/ru/config/plugins/index.html","/ru/config/plugins/README.md"]],["v-198dc4ee","/ru/config/plugins/blog.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Блог","Конфигурация плагина","Конфиг темы"],e:`<h2> Введение</h2>
<p>Тема предоставляет функцию блога, и она <strong>не</strong> включена по умолчанию.</p>
<p>Вы можете включить функцию блога, установив для <code>plugins.blog</code> значение <code>true</code> в настройках темы.</p>
<p>Инструкции смотрите в <a href="/hope/ru/guide/blog/intro.html" target="blank">Введение в блог</a>.</p>
<h2> Опции</h2>
<h3> excerpt</h3>
<ul>
<li>Type: <code>boolean</code></li>
<li>Default: <code>true</code></li>
</ul>
<p>Whether generate excerpt for page.</p>
<h3> excerptSeparator</h3>
<ul>
<li>Type: <code>string</code></li>
<li>Default: \`</li>
</ul>
`,r:{minutes:1.07,words:322},y:"a",title:"Конфиг плагина блога",i:"blog"},["/ru/config/plugins/blog","/ru/config/plugins/blog.md"]],["v-c8e4dffa","/ru/config/plugins/comment.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Комментарий","Конфигурация плагина","Конфиг темы"],e:`<h2> Введение</h2>
<p>Тема обеспечивает поддержку комментариев с помощью <code>vuepress-plugin-comment2</code> и передает плагину <code>plugin.comment</code> в параметрах темы.</p>
<p><code>vuepress-plugin-comment2</code> в настоящее время поддерживает 3 службы комментариев:</p>
<ul>
<li>Giscus</li>
<li>Twikoo</li>
<li>Waline</li>
</ul>`,r:{minutes:.28,words:84},y:"a",title:"Конфиг плагина комментариев",i:"comment"},["/ru/config/plugins/comment","/ru/config/plugins/comment.md"]],["v-48f3455b","/ru/config/plugins/copyright.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Авторские права","Конфигурация плагина","Конфиг темы"],e:`<h2> Введение</h2>
<p>Плагин <code>vuepress-plugin-copyright2</code> может добавлять информацию об авторских правах, когда пользователи копируют контент с вашего сайта. Кроме того, вы можете отключить копирование или выбор сайта с помощью этого плагина.</p>
<p>Этот плагин по умолчанию отключен.</p>
`,r:{minutes:.65,words:195},y:"a",title:"Конфиг плагина авторского права",i:"copyright"},["/ru/config/plugins/copyright","/ru/config/plugins/copyright.md"]],["v-7d5a6c72","/ru/config/plugins/feed.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Канал","Поток","Конфигурация плагина","Конфиг темы"],e:`<h2> Введение </h2>
<p><code>vuepress-theme-hope</code> обеспечивает поддержку генерации каналов через плагин <code>vuepress-plugin-feed2</code>.</p>
<p><code>vuepress-theme-hope</code> передает <code>plugins.feed</code> в параметрах темы в качестве параметров плагина для плагина <code>vuepress-plugin-feed2</code>.</p>`,r:{minutes:1.54,words:462},y:"a",title:"Конфиг плагина потока",i:"rss"},["/ru/config/plugins/feed","/ru/config/plugins/feed.md"]],["v-b096e354","/ru/config/plugins/intro.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Введение","Конфигурация плагина","Конфиг темы"],e:`<p><code>vuepress-theme-hope</code> объединяет множество плагинов VuePress.</p>
<ul>
<li>Некоторые плагины включаются автоматически, вы можете отключить их в настройках темы, если они вам не нужны.</li>
<li>Некоторые плагины включаются только тогда, когда вы указываете необходимые параметры.</li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">Заметка</p>
<p>Как член <a href="https://github.com/orgs/vuepress/people" target="_blank" rel="noopener noreferrer">VuePress Org</a>, Mr. Hope разработал множество плагинов VuePress.</p>
<p>Все плагины, называемые <code>vuepress-theme-hope</code>, являются официальными плагинами или плагинами, разработанными г-ном Хоупом, которые размещены в репозитории <code>vuepress-theme-hope</code>.</p>
<ul>
<li>Документацию по официальному плагину см. на [официальном сайте VuePress2][vuepress]</li>
<li>Все плагины, разработанные Mr.Hope, имеют собственную документацию и могут использоваться с другими темами.</li>
</ul>
</div>
`,r:{minutes:2.08,words:624},y:"a",title:"Введение в плагины",i:"info"},["/ru/config/plugins/intro","/ru/config/plugins/intro.md"]],["v-227e6898","/ru/config/plugins/md-enhance.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Markdown","Разметка","Конфигурация плагина","Конфиг темы"],e:`<h2> Введение</h2>
<p>Плагин <code>vuepress-plugin-md-enhance</code> включен по умолчанию и предоставляет улучшения Markdown.</p>
<p><code>vuepress-theme-hope</code> передает <code>plugins.mdEnhance</code> в параметрах темы в качестве параметров плагина для плагина <code>vuepress-plugin-md-enhance</code>.</p>`,r:{minutes:4.03,words:1208},y:"a",title:"MdEnhance Plugin Config",i:"markdown"},["/ru/config/plugins/md-enhance","/ru/config/plugins/md-enhance.md"]],["v-5d88000d","/ru/config/plugins/others.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Конфигурация плагина","Конфиг темы"],e:`<h2> components</h2>
<p>Controls <code>vuepress-plugin-components</code>, providing a set of components for Markdown.</p>
<p>Available component which can be used in markdown files are:</p>
<ul>
<li><code>"Badge"</code></li>
<li><code>"BiliBili"</code></li>
<li><code>"CodePen"</code></li>
<li><code>"PDF"</code></li>
<li><code>"StackBlitz"</code></li>
<li><code>"VideoPlayer"</code></li>
<li><code>"YouTube"</code></li>
</ul>`,r:{minutes:1.74,words:523},y:"a",title:"Конфиг других плагинов",i:"more"},["/ru/config/plugins/others","/ru/config/plugins/others.md"]],["v-aee1cef0","/ru/config/plugins/pwa.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["PWA","Конфигурация плагина","Конфиг темы"],e:`<h2> Введение</h2>
<p>Плагин <code>vuepress-plugin-pwa2</code> обеспечивает прогрессивную поддержку веб-приложений.</p>
<p><code>vuepress-theme-hope</code> передает <code>plugins.pwa</code> в параметрах темы в качестве параметров плагина для плагина <code>vuepress-plugin-pwa2</code>.</p>
<div class="hint-container tip">
<p class="hint-container-title">Быстрое включение</p>
<p>Чтобы просто включить эту функцию, вы можете установить <code>pwa: true</code>. </p>
</div>`,r:{minutes:2.4,words:720},y:"a",title:"Конфиг плагина PWA",i:"app"},["/ru/config/plugins/pwa","/ru/config/plugins/pwa.md"]],["v-2a391520","/ru/config/theme/",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Конфиг темы"],e:`<h2> Содержание</h2>
<ul>
<li>
<p><a href="/hope/ru/config/theme/basic.html" target="blank">Базовая конфигурация темы</a></p>
</li>
<li>
<p><a href="/hope/ru/config/theme/feature.html" target="blank">Конфигурация функции темы</a></p>
</li>
<li>
<p><a href="/hope/ru/config/theme/layout.html" target="blank">Конфигурация макета темы</a></p>
</li>
<li>
<p><a href="/hope/ru/config/theme/appearance.html" target="blank">Настройка внешнего вида темы</a></p>
</li>
<li>
<p><a href="/hope/ru/config/theme/i18n.html" target="blank">Конфигурация мультиязыка темы</a></p>
</li>
</ul>`,r:{minutes:.21,words:64},y:"a",title:"Конфигурация темы",i:"config"},["/ru/config/theme/index.html","/ru/config/theme/README.md"]],["v-e45cac56","/ru/config/theme/appearance.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Конфиг темы","Внешний вид"],e:`<p>Следующие параметры управляют внешним видом темы. В большинстве случаев на них не нужно обращать внимание, они предусмотрены лишь для небольшого количества пользователей с потребностями.</p>
`,r:{minutes:1.35,words:406},y:"a",title:"Опции внешнего вида темы",i:"config"},["/ru/config/theme/appearance","/ru/config/theme/appearance.md"]],["v-def9f2ea","/ru/config/theme/basic.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Основы","ThemeConfig"],e:`<div class="hint-container danger">
<p class="hint-container-title">Предупреждение</p>
<p>Эти параметры важны и требуют правильной настройки.</p>
</div>
`,r:{minutes:2.31,words:693},y:"a",title:"Основные опции темы",i:"config"},["/ru/config/theme/basic","/ru/config/theme/basic.md"]],["v-71fd94c3","/ru/config/theme/feature.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Функция","Конфиг темы"],e:`<p>Следующие параметры управляют функциями, предоставляемыми темой.</p>
`,r:{minutes:1.67,words:500},y:"a",title:"Опции функции темы",i:"config"},["/ru/config/theme/feature","/ru/config/theme/feature.md"]],["v-4f59cf4a","/ru/config/theme/i18n.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["I18n","Мультиязычность","Конфиг темы"],e:`<p>Вы можете добавить следующие параметры к <code>locales[localePath]</code> в параметрах темы, чтобы настроить многоязычные параметры темы.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Current lang code
   */</span>
  lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  outlookLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Theme Color
     *
     * 主题色
     */</span>
    themeColor<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Theme mode
     *
     * 夜间模式
     */</span>
    darkmode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Fullscreen text
     *
     * 全屏文字
     */</span>
    fullscreen<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  blogLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 文章文字 */</span>
    article<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 文章列表文字 */</span>
    articleList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 分类文字 */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 标签文字 */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 时间轴文字 */</span>
    timeline<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 时间轴标题文字 */</span>
    timelineTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 全部文字 */</span>
    all<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 个人介绍 */</span>
    intro<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 搜藏文字 */</span>
    star<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 幻灯片 */</span>
    slides<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 加密 */</span>
    encrypt<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  paginationLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Previous page button label text
     *
     * 上一页文字
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Next page button label text
     *
     * 下一页文字
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Navigation hint label text
     *
     * 跳转提示文字
     */</span>
    navigate<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Navigation button label text
     *
     * 跳转按钮文字
     */</span>
    action<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Error text when invalid page number, \`$page\` will be replaced by total page number automatically
     *
     * 页码错误文字，其中 \`$page\` 会自动替换为当前的总页数
     */</span>
    errorText<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Encrypt
   */</span>
  encryptLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Encrypt title
     */</span>
    title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    placeholder<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    remember<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Password error hint
     */</span>
    errorHint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  navbarLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Navbar language selection config
     *
     * Text of the language selection dropdown
     */</span>
    selectLangText<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Navbar language selection config
     *
     * Aria label of of the language selection dropdown
     */</span>
    selectLangAriaLabel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Navbar language selection config
     *
     * Language name of current locale
     *
     * Displayed inside the language selection dropdown
     */</span>
    langName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Page locate config
   */</span>
  metaLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Author label text
     *
     * 作者文字
     */</span>
    author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Writing date label text
     *
     * 写作日期文字
     */</span>
    date<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Label text marked as original
     *
     * 标记原创的文字
     */</span>
    origin<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page views label text
     *
     * 访问量文字
     */</span>
    views<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Tag label text
     *
     * 标签文字
     */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Category label text
     *
     * 分类文字
     */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Expect reading time label text
     *
     * 期望阅读时间文字
     */</span>
    readingTime<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Words label Text
     *
     * 文章字数
     */</span>
    words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Table of contents
     *
     * 此页内容
     */</span>
    toc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page nav - previous link
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page nav - next link
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page meta - last updated config
     *
     * The text to replace the default "Last Updated"
     */</span>
    lastUpdated<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page meta - contributors config
     *
     * The text to replace the default "Contributors"
     */</span>
    contributors<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page meta - contributors config
     *
     * The text to replace the default "Edit this page"
     */</span>
    editLink<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  routeLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Skip to main content
     */</span>
    skipToContent<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 404 page msgs
     */</span>
    notFoundMsg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Back to homepage
     */</span>
    home<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Back to last page
     */</span>
    back<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * sr-only message in \`&lt;ExternalLinkIcon&gt;\`
     */</span>
    openInNewWindow<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.83,words:550},y:"a",title:"Опции мультиязычности темы",i:"config"},["/ru/config/theme/i18n","/ru/config/theme/i18n.md"]],["v-661b26cf","/ru/config/theme/layout.html",{d:"2022-08-01T02:38:33.000Z",c:["Конфиг"],g:["Конфиг темы","Макет"],e:`<p>Следующие параметры управляют макетом темы.</p>
<!-- more  -->
<h2> Конфигурация панели навигации</h2>
<p>Соответствующее руководство смотрите в разделе <a href="/hope/ru/guide/layout/navbar.html" target="blank">Макет → Панель навигации</a>.</p>
<h3> navbar </h3>
<ul>
<li>Тип: <code>NavbarConfig | false</code></li>
<li>По умолчанию: <code>false</code></li>
</ul>`,r:{minutes:2.47,words:742},y:"a",title:"Опции макета темы",i:"config"},["/ru/config/theme/layout","/ru/config/theme/layout.md"]],["v-7a8b2fe2","/ru/cookbook/advanced/",{y:"p",title:"Продвинутый",i:"advance"},["/ru/cookbook/advanced/index.html","/ru/cookbook/advanced/README.md"]],["v-d3131344","/ru/cookbook/advanced/component.html",{d:"2022-08-01T02:38:33.000Z",c:["Руководство","Кастомизация"],g:["Компоненты","Кастомизация"],e:`<p>В этом руководстве вы узнаете, как использовать компоненты Vue и синтаксис Vue в вашем проекте VuePress.</p>
`,r:{minutes:1.26,words:379},y:"a",title:"Использование компонентов",i:"plugin"},["/ru/cookbook/advanced/component","/ru/cookbook/advanced/component.md"]],["v-4c9150dd","/ru/cookbook/advanced/extend.html",{d:"2022-08-01T02:38:33.000Z",c:["Продвинутый"],g:["Продвинутый","Кастомизация"],e:`<p><code>vuepress-theme-hope</code> поддерживает расширение так же, как <code>@vuepress/theme-default</code>.</p>
<p>Вы можете создать свою собственную тему на основе <code>vuepress-theme-hope</code> и использовать ее локально или опубликовать в соответствии с вашими потребностями.</p>
<h2> Расширение темы</h2>`,r:{minutes:1.56,words:469},y:"a",title:"Расширение темы",i:"extend"},["/ru/cookbook/advanced/extend","/ru/cookbook/advanced/extend.md"]],["v-8ea6e8f2","/ru/cookbook/advanced/replace.html",{d:"2022-08-01T02:38:33.000Z",c:["Продвинутый"],g:["Продвинутый","Кастомизация"],e:`<p>Тема импортирует компоненты через псевдоним <code>alias</code>, поэтому вы можете использовать его для замены любого компонента темы.</p>
`,r:{minutes:4.21,words:1263},y:"a",title:"Замена компонентов темы",i:"customize"},["/ru/cookbook/advanced/replace","/ru/cookbook/advanced/replace.md"]],["v-7d24472a","/ru/cookbook/advanced/style.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","Кастомизация"],g:["Кастомизация","Стиль"],e:`<p>В этой статье кратко описывается, как настроить стили темы.</p>
`,r:{minutes:1.6,words:479},y:"a",title:"Настройка стиля",i:"style"},["/ru/cookbook/advanced/style","/ru/cookbook/advanced/style.md"]],["v-730d34b5","/ru/cookbook/markdown/",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","Разметка"],g:["Вступление","Разметка"],e:`<p>Markdown — это язык разметки, который можно написать с помощью обычного текстового редактора, который позволяет форматировать текстовое содержимое с помощью простого синтаксиса разметки.</p>
<p>У Markdown есть ряд производных версий, которые расширяют функциональность Markdown (такие как таблицы, сноски, встроенный HTML и т. д.). Эти функции не были доступны в оригинальной Markdown. Они могут конвертировать Markdown в другие форматы, такие как LaTeX, Docbook, Markdown Extra, MultiMarkdown, Maruku и т. д. более известны в расширенной версии Markdown. Эти производные версии либо основаны на таких инструментах, как Pandoc; или на основе таких сайтов, как GitHub и Wikipedia, которые синтаксически совместимы, но имеют некоторые изменения в синтаксисе и эффектах рендеринга.</p>`,r:{minutes:1.34,words:402},y:"a",title:"Введение в Markdown",i:"markdown"},["/ru/cookbook/markdown/index.html","/ru/cookbook/markdown/README.md"]],["v-7b36bfc1","/ru/cookbook/markdown/demo.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","Разметка"],g:["Демо","Разметка"],e:`<!-- markdownlint-disable -->
<h1> Заголовок 1</h1>
<!-- markdownlint-restore -->
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Заголовок 1</span>
</code></pre></div><h2> Заголовок 2</h2>`,r:{minutes:1.83,words:549},y:"a",title:"ДЕМО Разметки",i:"markdown"},["/ru/cookbook/markdown/demo","/ru/cookbook/markdown/demo.md"]],["v-0fe5d426","/ru/cookbook/tutorial/",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","Руководство","Начало работы"],e:`<p>Это пошаговое руководство для новичков.</p>
`,r:{minutes:.16,words:49},y:"a",title:"Пошаговое руководство",i:"guide"},["/ru/cookbook/tutorial/index.html","/ru/cookbook/tutorial/README.md"]],["v-89c5f8d8","/ru/cookbook/tutorial/command.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","Руководство","Начало работы"],g:["Команды проекта"],e:`<p>В этом руководстве представлены команды проекта VuePress.</p>
`,r:{minutes:.79,words:238},y:"a",title:"Команды проекта",i:"command"},["/ru/cookbook/tutorial/command","/ru/cookbook/tutorial/command.md"]],["v-82c0a21e","/ru/cookbook/tutorial/config.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","Руководство","Начало работы"],g:["Конфиг проекта"],e:`<p>В этом руководстве вы узнаете, как настроить проект VuePress.</p>
`,r:{minutes:1.82,words:547},y:"a",title:"Конфиг проекта",i:"config"},["/ru/cookbook/tutorial/config","/ru/cookbook/tutorial/config.md"]],["v-7817bb26","/ru/cookbook/tutorial/content.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","Руководство","Начало работы"],g:["Контент проекта"],e:`<p>В этом руководстве вы узнаете, как писать контент в проекте VuePress.</p>
`,r:{minutes:1.29,words:386},y:"a",title:"Контент проекта",i:"page"},["/ru/cookbook/tutorial/content","/ru/cookbook/tutorial/content.md"]],["v-bfadd512","/ru/cookbook/tutorial/create.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","Руководство","Начало работы"],g:["Шаблон"],e:`<p>Это руководство поможет вам создать проект VuePress Theme Hope.</p>
<h2> Выберите подходящее место для проекта</h2>
<p>Чтобы случайно не вызвать некоторые странные проблемы, которые вы не можете решить самостоятельно, старайтесь не использовать пути к файлам, содержащие символы CJK, смайлики или пробелы (например: <code>C:\\Users\\毛泽东\\Desktop\\VuePress Project\\Hope theme ❤️\\</code>).</p>`,r:{minutes:.77,words:232},y:"a",title:"Создание проекта",i:"creative"},["/ru/cookbook/tutorial/create","/ru/cookbook/tutorial/create.md"]],["v-86daff28","/ru/cookbook/tutorial/deploy.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","Руководство","Начало работы"],g:["Деплой проекта"],e:`<p>В этом руководстве вы узнаете, как развернуть проект VuePress.</p>
`,r:{minutes:.72,words:217},y:"a",title:"Деплой проекта",i:"launch"},["/ru/cookbook/tutorial/deploy","/ru/cookbook/tutorial/deploy.md"]],["v-e858db9c","/ru/cookbook/tutorial/env.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","Руководство","Начало работы"],g:["Настройка среды"],e:`<p>В этом руководстве вы узнаете, как настроить среду выполнения VuePress.</p>
<h2> Node.js</h2>
<p><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js®</a> — это среда выполнения JavaScript, построенная на <a href="https://v8.dev/" target="_blank" rel="noopener noreferrer">движке Chrome V8 JavaScript</a>.</p>`,r:{minutes:.92,words:276},y:"a",title:"Настройка среды",i:"leaf"},["/ru/cookbook/tutorial/env","/ru/cookbook/tutorial/env.md"]],["v-48421cec","/ru/cookbook/tutorial/structure.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","Руководство","Начало работы"],g:["Структура проекта"],e:`<p>В этом руководстве будет представлена структура проекта VuePress.</p>
`,r:{minutes:.48,words:144},y:"a",title:"Структура проекта",i:"tree"},["/ru/cookbook/tutorial/structure","/ru/cookbook/tutorial/structure.md"]],["v-20a484e7","/ru/cookbook/vuepress/",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","VuePress"],g:["Вступление","VuePress"],e:`<p>VuePress — это генератор статических сайтов, ориентированный на уценку. Вы можете написать свой контент (документацию, блоги и т. д.) в <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noopener noreferrer">Markdown</a>, тогда VuePress поможет вам создать статический сайт для их размещения.</p>
`,r:{minutes:.67,words:202},y:"a",title:"О VuePress",i:"vue"},["/ru/cookbook/vuepress/index.html","/ru/cookbook/vuepress/README.md"]],["v-59c0ab90","/ru/cookbook/vuepress/config.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","VuePress"],g:["Конфиг","VuePress"],e:`<h2> Файл конфигурации</h2>
<p>Без какой-либо настройки сайт VuePress довольно минимален. Чтобы настроить ваш сайт, давайте сначала создадим каталог <code>.vuepress</code> внутри вашего каталога документов. Здесь будут размещены все файлы, относящиеся к VuePress. Структура вашего проекта, вероятно, выглядит так:</p>`,r:{minutes:.95,words:285},y:"a",title:"Конфиг VuePress",i:"config"},["/ru/cookbook/vuepress/config","/ru/cookbook/vuepress/config.md"]],["v-534867d6","/ru/cookbook/vuepress/file.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","VuePress"],g:["Структура файла","VuePress"],e:`<h2> Структура файла</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── docs → Docs folder depending on you
│    │
│    ├── .vuepress (Optional) → VuePress Config
│    │     │
│    │     ├── dist (Default) → Output folder
│    │     │
│    │     │
│    │     ├── public (Optional) → Static resource dir
│    │     │
│    │     ├── styles (Optional) → Stores style related files
│    │     │
│    │     ├── config.{js,ts} (Optional) → Entry file of configuration
│    │     │
│    │     └── client.{js,ts} (Optional) → Client App file
│    │
│    ├── ... → Other docs
│    │
│    └── README.md → Project homepage
│
└── package.json → Node.js declaration file for the entire project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.23,words:69},y:"a",title:"Структура файла",i:"folder"},["/ru/cookbook/vuepress/file","/ru/cookbook/vuepress/file.md"]],["v-6067ebc3","/ru/cookbook/vuepress/markdown.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","VuePress"],g:["Разметка","VuePress"],e:`<p>Вот несколько улучшений, которые VuePress вносит в синтаксис Markdown.</p>
<h2> Расширения синтаксиса</h2>
<p>Содержимое Markdown в VuePress будет анализироваться <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a>, который поддерживает <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">расширения синтаксиса</a> через плагины markdown-it.</p>`,r:{minutes:5.77,words:1731},y:"a",title:"Встроенные функции разметки",i:"markdown"},["/ru/cookbook/vuepress/markdown","/ru/cookbook/vuepress/markdown.md"]],["v-5327a2ba","/ru/cookbook/vuepress/page.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","VuePress"],g:["Страница","VuePress"],e:`<p>VuePress ориентирован на уценку. Каждый файл Markdown внутри вашего проекта представляет собой отдельную страницу.</p>
<h2> Роутинг</h2>
<p>По умолчанию путь маршрута страницы определяется относительным путем вашего файла Markdown.</p>
<p>Предполагая, что это структура каталогов ваших файлов Markdown:</p>`,r:{minutes:.98,words:294},y:"a",title:"Страница VuePress",i:"page"},["/ru/cookbook/vuepress/page","/ru/cookbook/vuepress/page.md"]],["v-e398e382","/ru/cookbook/vuepress/plugin.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","VuePress"],g:["Плагин","VuePress"],e:`<p>С помощью <a href="https://v2.vuepress.vuejs.org/reference/plugin-api.html" target="_blank" rel="noopener noreferrer">Plugin API</a>, плагин VuePress может предоставить вам различные функции.</p>
<h2> Плагин сообщества</h2>
<p>Пользователи сообщества создали множество плагинов и опубликовали их в <a href="https://www.npmjs.com/search?q=keywords:vuepress-plugin" target="_blank" rel="noopener noreferrer">NPM</a>. Команда VuePress также поддерживает некоторые официальные плагины в рамках <a href="https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin" target="_blank" rel="noopener noreferrer">@vuepress</a>. Вы должны проверить собственную документацию плагина для подробного руководства.</p>`,r:{minutes:.96,words:288},y:"a",title:"Плагины",i:"plugin"},["/ru/cookbook/vuepress/plugin","/ru/cookbook/vuepress/plugin.md"]],["v-0831d0d7","/ru/cookbook/vuepress/theme.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами","VuePress"],g:["Тема","VuePress"],e:`<p>Тема VuePress может предоставить вам макеты, стили и многие другие функции, помогая вам сосредоточиться на написании контента Markdown.</p>
<h2> Тема по умолчанию</h2>
<p>VuePress имеет стандартную тему по умолчанию, которая применяется к нашему сайту документации, который вы сейчас просматриваете.</p>`,r:{minutes:.78,words:233},y:"a",title:"Конфигурация темы",i:"palette"},["/ru/cookbook/vuepress/theme","/ru/cookbook/vuepress/theme.md"]],["v-0c6f7be7","/ru/guide/advanced/",{d:"2022-08-01T02:38:33.000Z",c:["Продвинутые"],g:["Продвинутые"],e:`<h2> Каталог</h2>
<ul>
<li>
<p><a href="/hope/ru/guide/advanced/pwa.html" target="blank">Поддержка PWA</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/advanced/feed.html" target="blank">Поддержка каналов</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/advanced/seo.html" target="blank">СЕО улучшение</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/advanced/sitemap.html" target="blank">Генерация карты сайта</a></p>
</li>
</ul>`,r:{minutes:.09,words:27},y:"a",title:"Продвинутые",i:"advance"},["/ru/guide/advanced/index.html","/ru/guide/advanced/README.md"]],["v-5943b418","/ru/guide/advanced/feed.html",{d:"2022-08-01T02:38:33.000Z",c:["Продвинутые"],g:["Продвинутые","Канал"],e:`<p>Тема добавляет поддержку каналов с помощью [<code>vuepress-plugin-feed2</code>][feed2].</p>
<div class="hint-container info">
<p class="hint-container-title">Инфо</p>
<p><code>vuepress-theme-hope</code> предоставляет <code>plugins.feed</code> в параметрах темы для <code>vuepress-plugin-feed2</code>.</p>
</div>
`,r:{minutes:1.31,words:393},y:"a",title:"Поддержка каналов",i:"rss"},["/ru/guide/advanced/feed","/ru/guide/advanced/feed.md"]],["v-eb65b274","/ru/guide/advanced/pwa.html",{d:"2022-08-01T02:38:33.000Z",c:["Продвинутые"],g:["Продвинутые","PWA"],e:`<p>Тема обеспечивает прогрессивную поддержку веб-приложений <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup><a class="footnote-anchor" id="footnote-ref1"> через встроенный [<code>vuepress-plugin-pwa2</code>][pwa2], и по умолчанию он отключен.</a></p><a class="footnote-anchor" id="footnote-ref1">
<div class="hint-container info">
<p class="hint-container-title">Инфо</p>
<p><code>vuepress-theme-hope</code> передает <code>plugins.pwa</code> в параметрах темы в качестве параметров плагина для <code>vuepress-plugin-pwa2</code>.</p>
<p>Если вы используете этот плагин, мы рекомендуем вам установить <code>shouldPrefetch: false</code> в файле конфигурации VuePress.</p>
</div>
<hr class="footnotes-sep">
</a><section class="footnotes"><a class="footnote-anchor" id="footnote-ref1">
</a><ol class="footnotes-list"><a class="footnote-anchor" id="footnote-ref1">
</a><li id="footnote1" class="footnote-item"><a class="footnote-anchor" id="footnote-ref1"><p><strong>Введение в PWA</strong></p>
<p>PWA, полное название Progressive Web app. Стандарт PWA установлен W3C.</p>
</a><p><a class="footnote-anchor" id="footnote-ref1">Это позволяет сайтам устанавливать сайт как приложение на поддерживаемой платформе через браузер, поддерживающий эту функцию. </a><a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
`,r:{minutes:6.25,words:1875},y:"a",title:"PWA",i:"app"},["/ru/guide/advanced/pwa","/ru/guide/advanced/pwa.md"]],["v-21a45b83","/ru/guide/advanced/seo.html",{d:"2022-08-01T02:38:33.000Z",c:["Продвинутые"],g:["Продвинутые","СЕО","SEO"],e:`<p><code>vuepress-theme-hope</code> обеспечивает улучшения SEO с помощью встроенного [<code>vuepress-plugin-seo2</code>][seo2].</p>
<p>Чтобы плагин работал лучше, вам может потребоваться проверить <a href="/hope/ru/config/frontmatter/info.html" target="blank">конфигурацию страницы</a> и настроить их правильно.</p>
<div class="hint-container info">
<p class="hint-container-title">Инфо</p>
<p><code>vuepress-theme-hope</code> передает <code>plugins.seo</code> в параметрах темы в качестве параметров плагина <code>vuepress-plugin-seo2</code>.</p>
</div>
<p>Плагин сделает ваш сайт полностью поддерживающим <a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">Open Content Protocol OGP</a> и <a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a> для улучшения SEO сайта.</p>
<p>Если вам не нужен этот плагин, установите для <code>plugins.seo</code> значение <code>false</code> в настройках темы.</p>
`,r:{minutes:3.89,words:1167},y:"a",title:"СЕО",i:"config"},["/ru/guide/advanced/seo","/ru/guide/advanced/seo.md"]],["v-6dbfd2aa","/ru/guide/advanced/sitemap.html",{d:"2022-08-01T02:38:33.000Z",c:["Продвинутые"],g:["Продвинутые","Карта сайта"],e:`<p><code>vuepress-theme-hope</code> обеспечивает создание карты сайта, включая <a href="https://vuepress-theme-hope.github.io/v2/sitemap/" target="_blank" rel="noopener noreferrer"><code>vuepress-plugin-sitemap2</code></a>.</p>
<p>Плагин автоматически сгенерирует время последнего обновления страницы на основе временной метки Git страницы, а также объявит ссылку на альтернативную версию страницы на других языках в соответствии с конфигурацией локалей.</p>`,r:{minutes:1.14,words:341},y:"a",title:"Карта сайта",i:"sitemap"},["/ru/guide/advanced/sitemap","/ru/guide/advanced/sitemap.md"]],["v-5f058167","/ru/guide/blog/",{d:"2022-08-01T02:38:33.000Z",e:`<h2> Каталог</h2>
<ul>
<li>
<p><a href="/hope/ru/guide/blog/intro.html" target="blank">Введение в блог</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/blog/home.html" target="blank">Домашняя страница блога</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/blog/blogger.html" target="blank">Информация о блогере</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/blog/article.html" target="blank">Список статей</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/blog/category-and-tags.html" target="blank">Категории и Теги</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/blog/timeline.html" target="blank">Временная шкала</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/blog/path.html" target="blank">Путь к странице</a></p>
</li>
</ul>`,r:{minutes:.13,words:38},y:"a",title:"Блог",i:"blog"},["/ru/guide/blog/index.html","/ru/guide/blog/README.md"]],["v-3b6886ec","/ru/guide/blog/article.html",{d:"2022-08-01T02:38:33.000Z",c:["Блог"],g:["Статья","Блог","Шифрование","Слайд","Избранное"],e:`<p>Тема предоставляет вам список всех статей по пути <code>/article/</code> по умолчанию.</p>
<h2> Статья</h2>
<p>Все статьи будут добавлены в список статей по умолчанию и отображены по пути <code>/article/</code>.</p>
<p>
</p>
<p>Если вы не хотите, чтобы список содержал какие-то конкретные статьи, просто установите для параметра <code>article</code> значение <code>false</code> в начале статьи или вы можете настроить его с помощью <code>plugins.blog.filter</code> в параметрах темы.</p>
<p>Чтобы прикрепить конкретную статью к списку статей, просто установите для параметра <code>sticky</code> значение <code>true</code> в frontmatter статьи.</p>
<div class="hint-container tip">
<p class="hint-container-title">Порядок</p>
<p>Для липких статей вы можете установить <code>sticky</code> с числом, чтобы установить их порядок. Статьи с большими номерами будут перечислены первыми.</p>
</div>
<h2> Выдержка</h2>
<h3> Adding Excerpt</h3>
<p>If you want to add an excerpt for an article, you can mark contents with \`</p>
`,r:{minutes:2.43,words:730},y:"a",title:"Список статей",i:"article"},["/ru/guide/blog/article","/ru/guide/blog/article.md"]],["v-7bdd9ae4","/ru/guide/blog/blogger.html",{d:"2022-08-01T02:38:33.000Z",c:["Блог"],g:["Блог","Блогер"],e:`<p>Темы позволяют отображать основную информацию о блогере.</p>
`,r:{minutes:1.34,words:401},y:"a",title:"Информация о блогере",i:"blog"},["/ru/guide/blog/blogger","/ru/guide/blog/blogger.md"]],["v-245a18fc","/ru/guide/blog/category-and-tags.html",{d:"2022-08-01T02:38:33.000Z",c:["Блог"],g:["Блог","Категория","Тег"],e:`<p>Вы можете настроить категорию и теги для статей через Frontmatter, чтобы они отображались на страницах определенных категорий и тегов.</p>
`,r:{minutes:.77,words:231},y:"a",title:"Категории и Теги",i:"tag"},["/ru/guide/blog/category-and-tags","/ru/guide/blog/category-and-tags.md"]],["v-7db1a1d3","/ru/guide/blog/home.html",{d:"2022-08-01T02:38:33.000Z",c:["Блог"],g:["Блог","Главная","Макет"],e:`<p><code>vuepress-theme-hope</code> позволяет вам включить домашнюю страницу в стиле блога.</p>
<p>Вам нужно установить <code>layout: BlogHome</code> и <code>home: true</code> на главной странице frontmatter.</p>
`,r:{minutes:.95,words:285},y:"a",title:"Главная страница блога",i:"home"},["/ru/guide/blog/home","/ru/guide/blog/home.md"]],["v-e9d5aad8","/ru/guide/blog/intro.html",{d:"2022-08-01T02:38:33.000Z",c:["Блог"],g:["Блог","Введение"],e:`<p>Тема поддерживает функцию блога с <code>vuepress-plugin-blog2</code> по умолчанию, и по умолчанию она <strong>отключена</strong>.</p>
<p>Если вам нужна функциональность блога, вы можете установить <code>plugins.blog: true</code> в параметрах темы, чтобы включить функциональность блога.</p>
`,r:{minutes:1.39,words:418},y:"a",title:"Введение в блог",i:"blog"},["/ru/guide/blog/intro","/ru/guide/blog/intro.md"]],["v-2e226366","/ru/guide/blog/path.html",{d:"2022-08-01T02:38:33.000Z",c:["Блог"],g:["Блог","Путь"],e:`<p>Вы можете управлять путем каждой страницы в блоге через <code>plugins.blog</code> в настройках темы.</p>
<p>Пути по умолчанию, предоставляемые блогом, следующие: если они конфликтуют с вашими существующими путями, и вы не хотите настраивать свои собственные пути, вы можете изменить их.</p>
<table>
<thead>
<tr>
<th>Опции</th>
<th>Описание</th>
<th>Путь по умолчанию</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>article</code></td>
<td>Список статей</td>
<td><code>/article/</code></td>
</tr>
<tr>
<td><code>category</code></td>
<td>Страница карты категорий</td>
<td><code>/category/</code></td>
</tr>
<tr>
<td><code>categoryItem</code></td>
<td>Список определенных категорий</td>
<td><code>/category/:name/</code></td>
</tr>
<tr>
<td><code>tag</code></td>
<td>Страница карты тегов</td>
<td><code>/tag/</code></td>
</tr>
<tr>
<td><code>tagItem</code></td>
<td>список конкретных тегов</td>
<td><code>/tag/:name/</code></td>
</tr>
<tr>
<td><code>star</code></td>
<td>Список помеченных статей</td>
<td><code>/star/</code></td>
</tr>
<tr>
<td><code>timeline</code></td>
<td>Список временных шкал</td>
<td><code>/timeline/</code></td>
</tr>
</tbody>
</table>`,r:{minutes:.31,words:93},y:"a",title:"Путь к странице блога",i:"link"},["/ru/guide/blog/path","/ru/guide/blog/path.md"]],["v-27c02b31","/ru/guide/blog/timeline.html",{d:"2022-08-01T02:38:33.000Z",c:["Блог"],g:["Блог","Таймлайн"],e:`<p>Вы можете получить доступ к странице времени через <code>/timeline/</code>. На странице можно просмотреть все статьи в обратном по времени порядке.</p>
<figure><figcaption>Страница временной шкалы</figcaption></figure>
<h2> Исключение статей</h2>
<p>По умолчанию все статьи, у которых есть дата написания, будут отображаться на таймлайне. Если вы не хотите, чтобы статья была включена, просто установите <code>timeline</code> на <code>false</code> в начале статьи frontmatter.</p>`,r:{minutes:.39,words:118},y:"a",title:"Таймлайн",i:"time"},["/ru/guide/blog/timeline","/ru/guide/blog/timeline.md"]],["v-5048adc2","/ru/guide/feature/",{d:"2022-08-01T02:38:33.000Z",e:`<p><code>vuepress-theme-hope</code> представляет множество замечательных функций. Большинство функций разделены на плагины, что означает, что если они вам нравятся, вы можете использовать их в других темах VuePress или <code>@vuepress/theme-default</code>.</p>
<div class="hint-container info">
<p class="hint-container-title">Инфо</p>
<p>Все настройки плагина находятся в поле <code>plugins</code> в настройках темы, а название опции связано с их именами.</p>
</div>`,r:{minutes:.31,words:93},y:"a",title:"Функции",i:"discover"},["/ru/guide/feature/index.html","/ru/guide/feature/README.md"]],["v-75386879","/ru/guide/feature/comment.html",{d:"2022-08-01T02:38:33.000Z",c:["Функция"],g:["Комментарий","Функция"],e:`<p><code>vuepress-theme-hope</code> реализует функцию комментариев со встроенным [<code>vuepress-plugin-comment2</code>][comment2].</p>
<div class="hint-container info">
<p class="hint-container-title">Инфо</p>
<p><code>vuepress-theme-hope</code> передает <code>plugins.comment</code> в параметрах темы в качестве параметров плагина <code>vuepress-plugin-comment2</code>.</p>
</div>
`,r:{minutes:2.4,words:721},y:"a",title:"Сервис комментариев",i:"comment"},["/ru/guide/feature/comment","/ru/guide/feature/comment.md"]],["v-63bb8993","/ru/guide/feature/copy-code.html",{d:"2022-08-01T02:38:33.000Z",c:["Функция"],g:["Копирование кода","Функция"],e:`<p>Если вы программист, вы можете захотеть, чтобы ваши пользователи могли копировать код, который вы показываете в тексте, одним щелчком мыши.</p>
<p>Для этого <code>vuepress-theme-hope</code> используйте [vuepress-plugin-copy-code2][copy-code2], чтобы предоставить кнопку копирования на блоках кода.</p>
<div class="hint-container info">
<p class="hint-container-title">Инфо</p>
<p><code>vuepress-theme-hope</code> передает <code>plugins.copyCode</code> в параметрах темы в качестве параметров плагина для <code>vuepress-plugin-copy-code2</code>.</p>
</div>
`,r:{minutes:.58,words:175},y:"a",title:"Скопировать код",i:"copy"},["/ru/guide/feature/copy-code","/ru/guide/feature/copy-code.md"]],["v-6349d851","/ru/guide/feature/copyright.html",{d:"2022-08-01T02:38:33.000Z",c:["Функция"],g:["Информация о копирайтах","Функция"],e:`<p>Иногда вы можете не хотеть, чтобы некоторые из ваших статей копировались другими, или вы хотите, чтобы другие автоматически генерировали часть информации об авторских правах в буфер обмена при копировании.</p>
<p><code>vuepress-theme-hope</code> использует [vuepress-plugin-copyright2][copyright2] для предоставления связанных функций.</p>
<div class="hint-container info">
<p class="hint-container-title">Инфо</p>
<p><code>vuepress-theme-hope</code> передает <code>plugins.copyright</code> в параметрах темы в качестве параметров плагина для <code>vuepress-plugin-copyright2</code>.</p>
</div>
`,r:{minutes:1.63,words:488},y:"a",title:"Информация об авторских правах",i:"copyright"},["/ru/guide/feature/copyright","/ru/guide/feature/copyright.md"]],["v-5cda8f9a","/ru/guide/feature/encrypt.html",{d:"2022-08-01T02:38:33.000Z",c:["Функция"],g:["Шифровать","Функция"],e:`<p>Тема поддерживает шифрование определенных папок или определенных путей, а также глобальное шифрование.</p>
<div class="hint-container danger">
<p class="hint-container-title">Предупреждение</p>
<p>Обратите внимание, что из-за ограничения vuepress содержимое статьи скрывается только до расшифровки, и посетители все равно могут получить содержимое статьи из исходного кода (из js).</p>
<p>Пожалуйста, <strong>НЕ ИСПОЛЬЗУЙТЕ</strong> эту функцию шифрования для любых секретных и конфиденциальных статей и файлов, пожалуйста, примите на себя последствия этого.</p>
</div>
`,r:{minutes:.96,words:289},y:"a",title:"Шифрование",i:"lock"},["/ru/guide/feature/encrypt","/ru/guide/feature/encrypt.md"]],["v-c6b96096","/ru/guide/feature/meta.html",{d:"2022-08-01T02:38:33.000Z",c:["Функция"],g:["Функция","Мета"],e:`<p>Тема отображает время последнего обновления и авторов страницы с помощью плагина [<code>@vuepress/plugin-git</code>][git], а также поддерживает кнопку «редактировать эту страницу».</p>
<p>Тема также предоставляет кнопки навигации для перехода к предыдущей и следующей страницам в зависимости от конфигурации боковой панели.</p>
`,r:{minutes:1.16,words:349},y:"a",title:"Мета страницы",i:"time"},["/ru/guide/feature/meta","/ru/guide/feature/meta.md"]],["v-764dfe0c","/ru/guide/feature/page-info.html",{d:"2022-08-01T02:38:33.000Z",c:["Функция"],g:["Функция","Информация о странице"],e:`<p><code>vuepress-theme-hope</code> может отображать для вас информацию о статье.</p>
`,r:{minutes:1.2,words:360},y:"a",title:"Информация о странице",i:"info"},["/ru/guide/feature/page-info","/ru/guide/feature/page-info.md"]],["v-77a8bb79","/ru/guide/feature/photo-swipe.html",{d:"2022-08-01T02:38:33.000Z",c:["Функция"],g:["Функция","Превью изображения"],e:`<p>Включив [vuepress-plugin-photo-swipe][photo-swipe], vuepress-theme-hope заставит изображения в теле страницы переходить в режим предварительного просмотра при нажатии.</p>
<p>Если вам не нужна эта функция, вы можете установить <code>plugins.photoSwipe: false</code> в настройках темы, чтобы отключить ее.</p>
<div class="hint-container info">
<p class="hint-container-title">Инфо</p>
<p><code>vuepress-theme-hope</code> передает <code>plugins.photoSwipe</code> в параметрах темы в качестве параметров плагина для <code>vuepress-plugin-photo-swipe</code>.</p>
</div>
`,r:{minutes:.86,words:259},y:"a",title:"Превью изображения",i:"preview"},["/ru/guide/feature/photo-swipe","/ru/guide/feature/photo-swipe.md"]],["v-5317e1b2","/ru/guide/feature/search.html",{d:"2022-08-01T02:38:33.000Z",c:["Функция"],g:["Функция","Поиск"],e:`<p>В тему добавлена встроенная поддержка [<code>vuepress-plugin-search-pro</code>][search-pro], [<code>@vuepress/plugin-docsearch</code>][docsearch] и [<code>@vuepress/plugin-search</code>][search]. Просто установите нужный плагин и настройте его, и вы получите окно поиска на панели навигации.</p>
<p>Чтобы использовать поисковый плагин, вам нужно применить его через <code>plugins</code> в <a href="/hope/ru/cookbook/vuepress/config.html" target="blank"><strong>файле конфигурации VuePress</strong></a>.</p>
<div class="hint-container warning">
<p class="hint-container-title">Примечание</p>
<p>Тема просто добавляет поддержку вышеуказанных плагинов, она не объединяет их. Вам нужно установить и применить их самостоятельно.</p>
</div>
<div class="hint-container danger">
<p class="hint-container-title">Предупреждение</p>
<p><strong>НЕ</strong> используйте <code>plugins.search</code> в настройках темы.</p>
<p>Тема может применять ТОЛЬКО плагины, которые входят в ее состав, поэтому поле <code>plugins</code> в параметрах темы принимает ТОЛЬКО ОПРЕДЕЛЕННОЕ имя плагина.</p>
</div>
`,r:{minutes:3.77,words:1130},y:"a",title:"Поиск",i:"search"},["/ru/guide/feature/search","/ru/guide/feature/search.md"]],["v-62db668b","/ru/guide/get-started/",{d:"2022-08-01T02:38:33.000Z",e:`<h2> Каталог</h2>
<ul>
<li>
<p><a href="/hope/ru/guide/get-started/intro.html" target="blank">Вступление к теме</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/get-started/install.html" target="blank">Установка и использование</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/get-started/markdown.html" target="blank">Введение в Markdown</a></p>
</li>
</ul>`,r:{minutes:.08,words:23},y:"a",title:"Начало работы",i:"creative"},["/ru/guide/get-started/index.html","/ru/guide/get-started/README.md"]],["v-1eb05229","/ru/guide/get-started/install.html",{d:"2022-08-01T02:38:33.000Z",c:["Начало работы"],g:["Начало работы","Установка","Использование"],e:`<h2> Установка</h2>
<p>Создайте новый проект vuepress-theme-hope в папке <code>[dir]</code></p>

<div class="hint-container note">
<p class="hint-container-title">Заметка</p>
<p><code>[dir]</code> здесь является параметром, замените его реальными именами папок, такими как <code>docs</code>, <code>blog</code> или другим именем, которое вам нравится.</p>
</div>`,r:{minutes:.53,words:158},y:"a",title:"Установка / Использование",i:"install"},["/ru/guide/get-started/install","/ru/guide/get-started/install.md"]],["v-0cb9f2b8","/ru/guide/get-started/intro.html",{d:"2022-08-01T02:38:33.000Z",c:["Начало работы"],g:["Начало работы","Вступление"],e:`<h2> Первоначальное намерение</h2>
<p>Первоначальная цель создания этой темы заключалась в том, чтобы обнаружить, что VuePress — это просто чистый генератор статических документов. Например, он не будет внедрять метатеги для SEO-оптимизации и не будет генерировать карту сайта, чтобы помочь поисковым системам индексировать содержимое документа.</p>`,r:{minutes:2.71,words:814},y:"a",title:"Вступление к теме",i:"info"},["/ru/guide/get-started/intro","/ru/guide/get-started/intro.md"]],["v-f38856c2","/ru/guide/get-started/markdown.html",{d:"2022-08-01T02:38:33.000Z",c:["Начало работы"],g:["Начало работы","Markdown"],e:`<p>VuePress в основном генерирует страницы из файлов Markdown. Таким образом, вы можете легко использовать его для создания документации или блогов.</p>
<p>Вы должны создавать и записывать файлы Markdown, чтобы VuePress мог преобразовывать их на разные страницы в соответствии со структурой файла.</p>
`,r:{minutes:2.75,words:826},y:"a",title:"Markdown",i:"markdown"},["/ru/guide/get-started/markdown","/ru/guide/get-started/markdown.md"]],["v-0d6b6488","/ru/guide/interface/",{d:"2022-08-01T02:38:33.000Z",e:`<h2> Каталог</h2>
<ul>
<li>
<p><a href="/hope/ru/guide/interface/darkmode.html" target="blank">Темный режим</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/interface/theme-color.html" target="blank">Цвет темы</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/interface/icon.html" target="blank">Поддержка иконок</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/interface/code-theme.html" target="blank">Темы кода</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/interface/accessibility.html" target="blank">Доступность</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/interface/others.html" target="blank">Другие функции</a></p>
</li>
</ul>`,r:{minutes:.1,words:29},y:"a",title:"Интерфейс",i:"palette"},["/ru/guide/interface/index.html","/ru/guide/interface/README.md"]],["v-f3ee11f2","/ru/guide/interface/accessibility.html",{d:"2022-08-01T02:38:33.000Z",c:["Интерфейс"],g:["A11y","Интерфейс"],e:`<p>"A11y" означает «доступность».</p>
<p>Тема добавляет полную поддержку специальных возможностей.</p>
<ul>
<li>
<p>Все структуры страниц темы обработаны семантически.</p>
</li>
<li>
<p>Все кнопки и иконки имеют соответствующие метки специальных возможностей.</p>
</li>
<li>
<p>Все основные интерактивные элементы можно сфокусировать и взаимодействовать с помощью клавиатуры</p>
</li>
</ul>`,r:{minutes:.19,words:56},y:"a",title:"A11y",i:"support"},["/ru/guide/interface/accessibility","/ru/guide/interface/accessibility.md"]],["v-845a8958","/ru/guide/interface/code-theme.html",{d:"2022-08-01T02:38:33.000Z",c:["Интерфейс"],g:["Интерфейс","Темы кода"],e:`<p><code>vuepress-theme-hope</code> позволяет вам глобально устанавливать темы блока кода для светлого и темного режима.</p>
`,r:{minutes:.54,words:161},y:"a",title:"Темы кода",i:"style"},["/ru/guide/interface/code-theme","/ru/guide/interface/code-theme.md"]],["v-f36ae3b8","/ru/guide/interface/darkmode.html",{d:"2022-08-01T02:38:33.000Z",c:["Интерфейс"],g:["Темный режим","Интерфейс"],e:`<p>В темном режиме страница использует темный фон, чтобы вам было удобно.</p>
`,r:{minutes:.37,words:110},y:"a",title:"Темный режим",i:"contrast"},["/ru/guide/interface/darkmode","/ru/guide/interface/darkmode.md"]],["v-01534dc4","/ru/guide/interface/icon.html",{d:"2022-08-01T02:38:33.000Z",c:["Интерфейс"],g:["Иконка","Интерфейс"],e:`<p>Вся тема добавляет поддержку иконок формата FontClass в нескольких местах.</p>
<p>Вы можете использовать iconfont и fontawesome для добавления иконок в свой проект.</p>
<ul>
<li>Для пользователей Китая рекомендуется iconfont</li>
<li>Для зарубежных пользователей рекомендуется fontawesome</li>
</ul>
<p>Также поддерживает иконку формата png/svg. Вы можете использовать абсолютный путь или имя пути для добавления иконок.</p>
`,r:{minutes:1.88,words:563},y:"a",title:"Поддержка иконок",i:"discover"},["/ru/guide/interface/icon","/ru/guide/interface/icon.md"]],["v-173a881a","/ru/guide/interface/others.html",{d:"2022-08-01T02:38:33.000Z",c:["Интерфейс"],g:["Интерфейс"],e:`<h2> Настройка стиля</h2>
<p>Тема позволяет вам устанавливать переменные в <code>.vuepress/styles/config.scss</code> и <code>.vuepress/styles/palette.scss</code>, чтобы настроить большинство цветов, точки останова, размер макета страницы и другие параметры.</p>
<p>Для получения подробной информации смотрите <a href="/hope/ru/config/style.html" target="blank">Конфиг → Настройка стиля</a></p>`,r:{minutes:.64,words:192},y:"a",title:"Другие функции",i:"others"},["/ru/guide/interface/others","/ru/guide/interface/others.md"]],["v-2742dab6","/ru/guide/interface/pure.html",{d:"2022-08-01T02:38:33.000Z",e:`<p>Если ваш сайт предназначен только для документации и вы предпочитаете чистый стиль, вы можете включить чистый режим, установив <code>pure: true</code> в параметрах темы.</p>
<p>В этом режиме мы отключаем некоторые причудливые анимации и некоторые цвета и просто обеспечиваем функциональность.</p>
`,r:{minutes:.15,words:45},y:"a",title:"Чистый режим",i:"leaf"},["/ru/guide/interface/pure","/ru/guide/interface/pure.md"]],["v-5ac63b96","/ru/guide/interface/theme-color.html",{d:"2022-08-01T02:38:33.000Z",c:["Интерфейс"],g:["Интерфейс","Цвет темы"],e:`<p>Тема позволяет вам настроить цвет темы и даже предоставить средство выбора.</p>
`,r:{minutes:.64,words:192},y:"a",title:"Цвет темы",i:"palette"},["/ru/guide/interface/theme-color","/ru/guide/interface/theme-color.md"]],["v-9b152f42","/ru/guide/layout/",{d:"2022-08-01T02:38:33.000Z",e:`<h2> Каталог</h2>
<ul>
<li>
<p><a href="/hope/ru/guide/layout/navbar.html" target="blank">Панель навигации</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/layout/sidebar.html" target="blank">Боковая панель</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/layout/breadcrumb.html" target="blank">Хлебные крошки</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/layout/footer.html" target="blank">Футер</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/layout/page.html" target="blank">Страница</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/layout/catalog.html" target="blank">Catalog</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/layout/home.html" target="blank">Главная страница</a></p>
</li>
<li>
<p><a href="/hope/ru/guide/layout/slides.html" target="blank">Слайды</a></p>
</li>
<li>
<p>Переключить анимацию</p>
<p>При переключении страниц будет отображаться постепенная анимация перехода. Улучшить текстуру документации/блога.</p>
</li>
</ul>`,r:{minutes:.14,words:42},y:"a",title:"Макет",i:"layout"},["/ru/guide/layout/index.html","/ru/guide/layout/README.md"]],["v-85e4ef12","/ru/guide/layout/breadcrumb.html",{d:"2022-08-01T02:38:33.000Z",c:["Макет"],g:["Хлебные крошки","Макет"],e:`<p>Тема добавляет поддержку хлебных крошек, вы можете настроить ее с помощью <code>breadcrumb</code> во frontmatter страницы и в параметрах темы </p>
<p>Без какой-либо конфигурации навигационная цепочка, соответствующая цвету темы, отображается в верхней части содержимого страницы, чтобы помочь читателю понять структуру документа.</p>
`,r:{minutes:.76,words:227},y:"a",title:"Навигация по пути",i:"navigation"},["/ru/guide/layout/breadcrumb","/ru/guide/layout/breadcrumb.md"]],["v-2117da3f","/ru/guide/layout/catalog.html",{d:"2022-12-31T15:16:41.000Z",c:["Layout"],g:["Catalog","Layout"],e:`<p>VuePress Theme Hope automatically generate <code>README.md</code> with catalog for each folder by default using [<code>vuepress-plugin-catalog</code>][auto-catalog].</p>
`,r:{minutes:.32,words:96},y:"a",title:"Catalog Page",i:"tree"},["/ru/guide/layout/catalog","/ru/guide/layout/catalog.md"]],["v-316e6b42","/ru/guide/layout/footer.html",{d:"2022-08-01T02:38:33.000Z",c:["Макет"],g:["Футер","Макет"],e:`<p><code>vuepress-theme-hope</code> предоставляет функцию футера для всех страниц </p>
`,r:{minutes:.99,words:296},y:"a",title:"Футер",i:"footer"},["/ru/guide/layout/footer","/ru/guide/layout/footer.md"]],["v-39ea11db","/ru/guide/layout/home.html",{d:"2022-08-01T02:38:33.000Z",c:["Макет"],g:["Главная","Макет"],e:`<p><code>vuepress-theme-hope</code> улучшает домашнюю страницу по умолчанию.</p>
<p>Чтобы использовать его, установите <code>home: true</code> в frontmatter страницы. Любой дополнительный контент после <code>YAML front matter</code> будет проанализирован как обычный Markdown и отображен после раздела функций.</p>
<p>
</p>
`,r:{minutes:.8,words:241},y:"a",title:"Главная страница",i:"home"},["/ru/guide/layout/home","/ru/guide/layout/home.md"]],["v-1edb250a","/ru/guide/layout/navbar.html",{d:"2022-08-01T02:38:33.000Z",c:["Макет"],g:["Макет","Панель навигации"],e:`<p>Панель навигации может содержать название вашего сайта, <a href="#%D0%BE%D0%BA%D0%BD%D0%BE-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0">окно поиска</a>, <a href="#%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8-%D0%BD%D0%B0%D0%B2%D0%B8%D0%B3%D0%B0%D1%86%D0%B8%D0%B8">ссылки панели навигации</a>, <a href="https://v2.vuepress.vuejs.org/guide/i18n.html" target="_blank" rel="noopener noreferrer">I18n</a>, <a href="#%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B9-git-%D0%B8-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F">Ссылка на репозиторий</a> и <a href="#%D0%B2%D1%81%D0%BF%D0%BB%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B5%D0%B5-%D0%BE%D0%BA%D0%BD%D0%BE-outlook">Outlook Popup</a>. Все они зависят от вашей конфигурации.</p>
`,r:{minutes:5.29,words:1587},y:"a",title:"Панель навигации",i:"navbar"},["/ru/guide/layout/navbar","/ru/guide/layout/navbar.md"]],["v-1f509baa","/ru/guide/layout/page.html",{d:"2022-08-01T02:38:33.000Z",c:["Макет"],g:["Страница","Макет"],e:`<h2> Поддержка иконок</h2>
<p>Вы можете настроить поле <code>icon</code> в шапке страницы и заполнить FontClass соответствующей иконки, чтобы связать иконку со страницей.</p>
<p>Эта иконка используется в навигационной панели, боковой панели, хлебных крошках и заголовке страницы.</p>
<details class="hint-container details"><summary>Пример</summary>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">icon</span><span class="token punctuation">:</span> home</span>
<span class="token punctuation">---</span></span>
</code></pre></div></details>`,r:{minutes:1.18,words:355},y:"a",title:"Страница",i:"page"},["/ru/guide/layout/page","/ru/guide/layout/page.md"]],["v-6f34c0dc","/ru/guide/layout/sidebar.html",{d:"2022-08-01T02:38:33.000Z",c:["Макет"],g:["Макет","Боковая панель"],e:`<p>Боковая панель может содержать список связанных документов, заголовков документов и информацию о блоггерах в режиме блога.</p>
`,r:{minutes:8.5,words:2549},y:"a",title:"Боковая панель",i:"sidebar"},["/ru/guide/layout/sidebar","/ru/guide/layout/sidebar.md"]],["v-b7de0910","/ru/guide/layout/slides.html",{d:"2022-08-01T02:38:33.000Z",c:["Макет"],g:["Макет","Слайды"],e:`<p><code>vuepress-theme-hope</code> позволяет добавлять страницы со слайдами.</p>
<p>Вам нужно установить <code>layout: Slide</code> в frontmatter, чтобы активировать страницу со слайдами.</p>
`,r:{minutes:.39,words:118},y:"a",title:"Слайд",i:"slides"},["/ru/guide/layout/slides","/ru/guide/layout/slides.md"]],["v-04f180ba","/ru/guide/markdown/",{d:"2022-08-01T02:38:33.000Z",e:`<p>Помимо синтаксисов Markdown, добавленных самим VuePress, <code>vuepress-theme-hope</code> включает дополнительный синтаксис в Markdown с помощью плагина [vuepress-plugin-md-enhance][md-enhance].</p>
`,r:{minutes:.41,words:122},y:"a",title:"Расширение Markdown",i:"markdown"},["/ru/guide/markdown/index.html","/ru/guide/markdown/README.md"]],["v-db4cb5a4","/ru/guide/markdown/align.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Выравнивание","Markdown"],e:`<p>Внедрив конфигурацию в vuepress-plugin-container, вы можете использовать</p>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: center
Абзац в центре
:::

::: right
Абзац справа
:::
</code></pre></div><p>Чтобы настроить выравнивание абзаца.</p>
`,r:{minutes:.56,words:169},y:"a",title:"Пользовательское выравнивание",i:"align"},["/ru/guide/markdown/align","/ru/guide/markdown/align.md"]],["v-0cd25c9e","/ru/guide/markdown/attrs.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Атрибуты","Markdown"],e:`<p>Вы можете использовать собственный синтаксис, чтобы добавить атрибуты для разметки контента.</p>
`,r:{minutes:.99,words:297},y:"a",title:"Поддержка атрибутов",i:"code"},["/ru/guide/markdown/attrs","/ru/guide/markdown/attrs.md"]],["v-3af303f5","/ru/guide/markdown/chart.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["График","Markdown"],e:`<p>Разрешите диаграмму поддержки файлов Markdown на вашем сайте VuePress.</p>
<p><code>vuepress-plugin-md-enhance</code> использует <a href="https://www.chartjs.org/docs/latest/" target="_blank" rel="noopener noreferrer">chart.js</a> для поддержки этой функции.</p>
`,r:{minutes:3.36,words:1009},y:"a",title:"График",i:"rank"},["/ru/guide/markdown/chart","/ru/guide/markdown/chart.md"]],["v-10470b75","/ru/guide/markdown/code-tabs.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Вкладки кода","Markdown"],e:`<p>Тема предоставляет вам поддержку вкладок кода.</p>
`,r:{minutes:.91,words:274},y:"a",title:"Вкладки кода",i:"code"},["/ru/guide/markdown/code-tabs","/ru/guide/markdown/code-tabs.md"]],["v-3022ef89","/ru/guide/markdown/components.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Компоненты","Markdown"],e:`<p>Используя <code>vuepress-plugin-components</code>, вы можете импортировать и использовать некоторые компоненты в ваших файлах Markdown.</p>
<p>Доступные компоненты:</p>
<ul>
<li>AudioPlayer</li>
<li>Badge</li>
<li>BiliBili</li>
<li>CodePen</li>
<li>FontIcon</li>
<li>PDF</li>
<li>StackBlitz</li>
<li>VideoPlayer</li>
<li>YouTube</li>
</ul>
<p>По умолчанию <code>&lt;Badge /&gt;</code> и <code>&lt;FontIcon /&gt;</code> включены.</p>
<p>Чтобы включить компоненты, вы должны установить <code>plugin.components.components</code> с массивом имен компонентов.</p>
`,r:{minutes:3,words:899},y:"a",title:"Компоненты",i:"plugin"},["/ru/guide/markdown/components","/ru/guide/markdown/components.md"]],["v-3a055032","/ru/guide/markdown/container.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Контейнер","Markdown"],e:`<p>Тема добавляет подсказку, примечание, информацию, предупреждение, опасность и контейнер с подробностями.</p>
`,r:{minutes:1.26,words:378},y:"a",title:"Пользовательский контейнер",i:"customize"},["/ru/guide/markdown/container","/ru/guide/markdown/container.md"]],["v-5cd7295c","/ru/guide/markdown/demo.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Демонстрация кода","Markdown"],e:`<p>Позволяет вставлять демонстрации кода в файл Markdown.</p>
`,r:{minutes:2.84,words:853},y:"a",title:"Демонстрация кода",i:"discover"},["/ru/guide/markdown/demo","/ru/guide/markdown/demo.md"]],["v-0681fc4e","/ru/guide/markdown/echarts.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["ECharts","Markdown"],e:`<p>Разрешите диаграмму поддержки файлов Markdown на вашем сайте VuePress.</p>
<p><code>vuepress-plugin-md-enhance</code> использует <a href="https://echarts.apache.org/en/index.html" target="_blank" rel="noopener noreferrer">ECharts</a> для поддержки этой функции.</p>
`,r:{minutes:2.3,words:689},y:"a",title:"ECharts",i:"rank"},["/ru/guide/markdown/echarts","/ru/guide/markdown/echarts.md"]],["v-47b08174","/ru/guide/markdown/external.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Markdown"],e:`<p>Чтобы использовать новый синтаксис внутри Markdown для улучшения содержимого, вы также можете использовать <code>&lt;iframe&gt;</code> или <code>&lt;img&gt;</code> для импорта внешних ссылок для улучшения вашего содержимого Markdown.</p>
`,r:{minutes:1.16,words:347},y:"a",title:"Внешний импорт",i:"link"},["/ru/guide/markdown/external","/ru/guide/markdown/external.md"]],["v-c92192ba","/ru/guide/markdown/flowchart.html",{d:"2022-08-01T02:38:33.000Z",g:["Flowchart","Markdown"],e:`<p>Пусть файл Markdown поддерживает блок-схему на вашем сайте VuePress.</p>
`,r:{minutes:3.27,words:980},y:"a",title:"Flowchart",i:"tree - Markdown"},["/ru/guide/markdown/flowchart","/ru/guide/markdown/flowchart.md"]],["v-50bec4ff","/ru/guide/markdown/footnote.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Сноска","Markdown"],e:`<p>Пусть файл Markdown на вашем сайте VuePress поддерживает сноски.</p>
`,r:{minutes:.58,words:173},y:"a",title:"Сноска",i:"quote"},["/ru/guide/markdown/footnote","/ru/guide/markdown/footnote.md"]],["v-7a849898","/ru/guide/markdown/image.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Markdown","Изображение"],e:`<p>Улучшите синтаксис изображения в Markdown для поддержки цветовой схемы и размера.</p>
`,r:{minutes:1.71,words:513},y:"a",title:"Изображение",i:"pic"},["/ru/guide/markdown/image","/ru/guide/markdown/image.md"]],["v-2792622a","/ru/guide/markdown/include.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Демонстрация кода","Включение файлов"],e:`<p>Пусть файл Markdown на вашем сайте VuePress поддерживает, включая другие файлы.</p>
`,r:{minutes:1.4,words:421},y:"a",title:"Включение файлов",i:"markdown"},["/ru/guide/markdown/include","/ru/guide/markdown/include.md"]],["v-1b745e27","/ru/guide/markdown/intro.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Вступление","Markdown"],e:`<p>Помимо синтаксисов Markdown, добавленных самим VuePress, <code>vuepress-theme-hope</code> включает дополнительный синтаксис в Markdown с помощью плагина [vuepress-plugin-md-enhance][md-enhance].</p>
`,r:{minutes:.43,words:128},y:"a",title:"Включить улучшение",i:"enable"},["/ru/guide/markdown/intro","/ru/guide/markdown/intro.md"]],["v-1533ba9c","/ru/guide/markdown/mark.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Выделение","Markdown"],e:`<p>Сделайте файлы Markdown на вашем сайте VuePress поддержкой разметки.</p>
`,r:{minutes:.31,words:94},y:"a",title:"Выделение",i:"write"},["/ru/guide/markdown/mark","/ru/guide/markdown/mark.md"]],["v-c6900cac","/ru/guide/markdown/mermaid.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Диаграмма","Markdown"],e:`<p>Пусть файл Markdown поддерживает <a href="https://mermaid-js.github.io/mermaid/#/" target="_blank" rel="noopener noreferrer">mermaid</a> на вашем сайте VuePress.</p>
`,r:{minutes:5.92,words:1776},y:"a",title:"Mermaid",i:"diagram"},["/ru/guide/markdown/mermaid","/ru/guide/markdown/mermaid.md"]],["v-61c22a5c","/ru/guide/markdown/others.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Markdown"],e:`<h2> Проверка ссылки</h2>
<p>По умолчанию тема проверит ваши уценочные ссылки в режиме разработки.</p>
<p>Вы можете настроить эту функцию с помощью <code>plugins.mdEnhance.linkCheck</code> в настройках темы, и вы можете выбрать <code>'always'</code>, <code>'never'</code>, <code>'dev'</code> и <code>'build'</code>.</p>`,r:{minutes:.42,words:125},y:"a",title:"Другие",i:"more"},["/ru/guide/markdown/others","/ru/guide/markdown/others.md"]],["v-b2c1b7f8","/ru/guide/markdown/playground.html",{d:"2022-09-12T14:26:29.000Z",c:["Markdown"],g:["Выделение","Playground"],e:`<p>Пусть файл Markdown поддерживает плейграунд на вашем сайте VuePress.</p>
`,r:{minutes:2.93,words:880},y:"a",title:"Playground",i:"code"},["/ru/guide/markdown/playground","/ru/guide/markdown/playground.md"]],["v-a45f26f6","/ru/guide/markdown/presentation.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Markdown","Слайды"],e:`<p>Пусть файл Markdown на вашем сайте VuePress поддерживает презентацию.</p>
`,r:{minutes:1.27,words:380},y:"a",title:"Презентация",i:"slides"},["/ru/guide/markdown/presentation","/ru/guide/markdown/presentation.md"]],["v-620e2af3","/ru/guide/markdown/stylize.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Стилизация","Markdown"],e:`<p>Создавайте встроенный фрагмент, стилизуя встроенные токены, включая изменение тегов, добавление атрибутов и изменение содержимого.</p>
`,r:{minutes:1.57,words:471},y:"a",title:"Стилизация",i:"style"},["/ru/guide/markdown/stylize","/ru/guide/markdown/stylize.md"]],["v-3696be1c","/ru/guide/markdown/sup-sub.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Markdown","Верхний индекс","Нижний индекс"],e:`<p>Пусть файл Markdown на вашем сайте VuePress поддерживает нижний и верхний индексы.</p>
`,r:{minutes:.41,words:122},y:"a",title:"Верхний и нижний индексы",i:"superscript"},["/ru/guide/markdown/sup-sub","/ru/guide/markdown/sup-sub.md"]],["v-7aef86be","/ru/guide/markdown/tabs.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Markdown","Вкладки"],e:`<p>Пусть файл Markdown на вкладках поддержки вашего сайта VuePress.</p>
`,r:{minutes:1.52,words:455},y:"a",title:"Вкладки",i:"tab"},["/ru/guide/markdown/tabs","/ru/guide/markdown/tabs.md"]],["v-0bdb1ec8","/ru/guide/markdown/tasklist.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Markdown","Список заданий"],e:`<p>Включите файл Markdown в список задач поддержки вашего сайта VuePress.</p>
`,r:{minutes:.38,words:113},y:"a",title:"Список заданий",i:"check"},["/ru/guide/markdown/tasklist","/ru/guide/markdown/tasklist.md"]],["v-3586a7cc","/ru/guide/markdown/tex.html",{d:"2022-08-01T02:38:33.000Z",c:["Markdown"],g:["Markdown","TEX"],e:`<p>Пусть файл Markdown на вашем сайте VuePress поддерживает синтаксис .</p>
`,r:{minutes:5.08,words:1525},y:"a",title:"TeX",i:"tex"},["/ru/guide/markdown/tex","/ru/guide/markdown/tex.md"]],["v-17d7aebd","/ru/guide/markdown/vue-playground.html",{d:"2022-09-12T14:26:29.000Z",c:["Markdown"],g:["Markdown","Playground"],e:`<p>Пусть файл Markdown поддерживает playground vue на вашем сайте VuePress.</p>
`,r:{minutes:1.37,words:410},y:"a",title:"Vue Playground",i:"code"},["/ru/guide/markdown/vue-playground","/ru/guide/markdown/vue-playground.md"]],["v-01f3deca","/zh/config/frontmatter/",{d:"2022-04-06T17:09:45.000Z",c:["配置"],g:["Frontmatter","配置"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/hope/zh/config/frontmatter/info.html" target="blank">信息 Frontmatter 配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/frontmatter/layout.html" target="blank">布局 Frontmatter 配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/frontmatter/plugins.html" target="blank">插件 Frontmatter 配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/frontmatter/home.html" target="blank">主页 Frontmatter 配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/frontmatter/blog-home.html" target="blank">博客主页 Frontmatter 配置</a></p>
</li>
</ul>`,r:{minutes:.18,words:53},y:"a",title:"Frontmatter 配置",i:"config"},["/zh/config/frontmatter/index.html","/zh/config/frontmatter/README.md"]],["v-0aa42439","/zh/config/frontmatter/blog-home.html",{d:"2022-11-18T05:57:18.000Z",c:["配置"],g:["Frontmatter","博客主页"],e:`<h2> home</h2>
<ul>
<li>类型: <code>boolean</code></li>
<li>默认值: <code>false</code></li>
</ul>
<p>设置为 <code>true</code> 时启用首页样式</p>
<h2> hero</h2>
<ul>
<li>类型: <code>boolean</code></li>
<li>默认值: <code>true</code></li>
</ul>
<p>是否显示主页的图标与描述。</p>
<h2> title</h2>
<ul>
<li>类型: <code>string</code></li>
<li>必填: 否</li>
</ul>`,r:{minutes:1.24,words:373},y:"a",title:"博客主页 Frontmatter 配置",i:"config"},["/zh/config/frontmatter/blog-home","/zh/config/frontmatter/blog-home.md"]],["v-6d02a3d0","/zh/config/frontmatter/home.html",{d:"2022-11-18T05:57:18.000Z",c:["配置"],g:["Frontmatter","主页"],e:`<h2> home</h2>
<ul>
<li>类型: <code>boolean</code></li>
<li>默认值: <code>false</code></li>
</ul>
<p>设置为 <code>true</code> 时启用首页样式</p>
<h2> title</h2>
<ul>
<li>类型: <code>string</code></li>
<li>必填: 否</li>
</ul>
<p>设置页面标题，会用于路径导航、页面增强等。</p>
<h2> heroText</h2>
<ul>
<li>类型: <code>string | false</code></li>
<li>默认值: <code>"Hello"</code></li>
</ul>`,r:{minutes:.9,words:271},y:"a",title:"主页 Frontmatter 配置",i:"config"},["/zh/config/frontmatter/home","/zh/config/frontmatter/home.md"]],["v-382abd61","/zh/config/frontmatter/info.html",{d:"2022-04-06T17:09:45.000Z",c:["配置"],g:["Frontmatter","信息"],e:`<p>你可以在页面的 frontmatter 配置以下选项设置页面相关信息。</p>
<h2> title</h2>
<ul>
<li>类型: <code>string</code></li>
<li>必填: 否</li>
</ul>
<p>当前页面内容标题，默认为 Markdown 文件中的第一个 h1 标签内容。</p>
<h2> shortTitle</h2>
<ul>
<li>Type: <code>string</code></li>
<li>Required: No</li>
</ul>
<p>当前页面的短标题，会在导航栏、侧边栏和路径导航中作为首选。</p>
<h2> description</h2>`,r:{minutes:1.51,words:454},y:"a",title:"信息 Frontmatter 配置",i:"config"},["/zh/config/frontmatter/info","/zh/config/frontmatter/info.md"]],["v-261ee236","/zh/config/frontmatter/layout.html",{d:"2022-04-06T17:09:45.000Z",c:["配置"],g:["Frontmatter","布局"],e:`<p>你可以在页面的 frontmatter 配置以下选项控制页面布局。</p>
<h2> pageInfo</h2>
<ul>
<li>类型: <code>PageInfo[] | false</code></li>
<li>默认值: 主题选项中的值</li>
</ul>
<p><code>PageInfo</code> 可选的值和对应内容如下:</p>
<table>
<thead>
<tr>
<th>条目</th>
<th>对应内容</th>
<th>页面 frontmatter 值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>"Author"</code></td>
<td>作者</td>
<td><code>author</code></td>
</tr>
<tr>
<td><code>"Date"</code></td>
<td>写作日期</td>
<td><code>date</code></td>
</tr>
<tr>
<td><code>"Original"</code></td>
<td>是否原创</td>
<td><code>isOriginal</code></td>
</tr>
<tr>
<td><code>"Category"</code></td>
<td>分类</td>
<td><code>category</code></td>
</tr>
<tr>
<td><code>"Tag"</code></td>
<td>标签</td>
<td><code>tag</code></td>
</tr>
<tr>
<td><code>"ReadingTime"</code></td>
<td>预计阅读时间</td>
<td>N/A(自动生成)</td>
</tr>
<tr>
<td><code>"Word"</code></td>
<td>字数</td>
<td>N/A(自动生成)</td>
</tr>
<tr>
<td><code>"PageView"</code></td>
<td>访问量</td>
<td><code>pageview</code> (仅 Waline 可用)</td>
</tr>
</tbody>
</table>`,r:{minutes:2.83,words:848},y:"a",title:"布局 Frontmatter 配置",i:"config"},["/zh/config/frontmatter/layout","/zh/config/frontmatter/layout.md"]],["v-19068d03","/zh/config/frontmatter/plugins.html",{d:"2022-04-06T17:09:45.000Z",c:["配置"],g:["Frontmatter","布局"],e:`<p>你可以在页面的 frontmatter 配置以下选项控制插件行为。</p>
<h2> copyright2 插件</h2>
<h3> copy.triggerWords</h3>
<ul>
<li>类型: <code>number</code></li>
<li>默认值: <code>100</code></li>
</ul>
<p>触发附加版权的最小字数</p>
<h3> copy.disableCopy</h3>
<ul>
<li>类型: <code>boolean</code></li>
<li>默认值: <code>false</code></li>
</ul>
<p>禁用复制</p>`,r:{minutes:1.07,words:321},y:"a",title:"插件 Frontmatter 配置",i:"config"},["/zh/config/frontmatter/plugins","/zh/config/frontmatter/plugins.md"]],["v-4971cad8","/zh/config/plugins/",{d:"2022-02-15T14:43:07.000Z",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/hope/zh/config/plugins/intro.html" target="blank">主题插件介绍</a></p>
</li>
<li>
<p><a href="/hope/zh/config/plugins/blog.html" target="blank">博客插件配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/plugins/copyright.html" target="blank">版权信息插件配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/plugins/feed.html" target="blank">Feed 插件配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/plugins/md-enhance.html" target="blank">Markdown 增强插件配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/plugins/pwa.html" target="blank">PWA 插件配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/plugins/others.html" target="blank">其他插件</a></p>
</li>
</ul>`,r:{minutes:.21,words:63},y:"a",title:"插件配置",i:"config"},["/zh/config/plugins/index.html","/zh/config/plugins/README.md"]],["v-67e5db3a","/zh/config/plugins/blog.html",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["插件配置","主题配置","博客"],e:`<h2> 介绍</h2>
<p>主题提供博客功能，默认情况下<strong>不启用</strong>。</p>
<p>你可以在主题选项中设置 <code>plugins.blog: true</code> 来启用博客功能。</p>
<p>有关说明，请参阅<a href="/hope/zh/guide/blog/intro.html" target="blank">博客介绍</a>。</p>
<h2> 选项</h2>
<h3> excerpt</h3>
<ul>
<li>类型: <code>boolean</code></li>
<li>默认值: <code>true</code></li>
</ul>
<p>是否生成摘要。</p>
<h3> excerptSeparator</h3>
<ul>
<li>类型: <code>string</code></li>
<li>默认值: \`</li>
</ul>
`,r:{minutes:1.78,words:535},y:"a",title:"博客配置",i:"blog"},["/zh/config/plugins/blog","/zh/config/plugins/blog.md"]],["v-f0375b24","/zh/config/plugins/comment.html",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["插件配置","主题配置","评论"],e:`<h2> 介绍</h2>
<p>主题使用 <code>vuepress-plugin-comment2</code> 提供评论支持，并将主题选项中的 <code>plugin.comment</code> 作为插件选项传递。</p>
<p><code>vuepress-plugin-comment2</code> 目前支持 3 种评论服务:</p>
<ul>
<li>Giscus</li>
<li>Twikoo</li>
<li>Waline</li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>如果你不需要评论功能，请忽略此选项。</p>
</div>`,r:{minutes:.43,words:129},y:"a",title:"评论插件配置",i:"comment"},["/zh/config/plugins/comment","/zh/config/plugins/comment.md"]],["v-7aa31906","/zh/config/plugins/copyright.html",{d:"2022-04-06T17:09:45.000Z",c:["配置"],g:["插件配置","主题配置","版权信息"],e:`<h2> 介绍</h2>
<p><code>vuepress-plugin-copyright2</code> 插件默认禁用，能在用户复制站点内容时添加版权信息。此插件还可以禁用站点复制或选择。</p>
<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.copyright</code> 作为插件选项传递给 <code>vuepress-plugin-copyright2</code> 插件。</p>
<h2> 插件选项</h2>
<h3> hostname</h3>
<ul>
<li>类型: <code>string</code></li>
<li>必填: 否</li>
</ul>`,r:{minutes:.91,words:272},y:"a",title:"版权信息插件配置",i:"copyright"},["/zh/config/plugins/copyright","/zh/config/plugins/copyright.md"]],["v-2fd9b9e7","/zh/config/plugins/feed.html",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["插件配置","主题配置","Feed"],e:`<h2> 介绍 </h2>
<p><code>vuepress-theme-hope</code> 通过 <code>vuepress-plugin-feed2</code> 插件提供 Feed 生成支持。</p>
<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.feed</code> 作为插件选项传递给 <code>vuepress-plugin-feed2</code> 插件。</p>
<p><code>vuepress-plugin-feed2</code> 插件可为你生成以下三种格式的 feed 文件:</p>
<ul>
<li>Atom 1.0</li>
<li>JSON 1.1</li>
<li>RSS 2.0</li>
</ul>`,r:{minutes:2.42,words:727},y:"a",title:"Feed 插件配置",i:"rss"},["/zh/config/plugins/feed","/zh/config/plugins/feed.md"]],["v-451eef81","/zh/config/plugins/intro.html",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["插件配置","主题配置","介绍"],e:`<p><code>vuepress-theme-hope</code> 会调用很多 VuePress 插件。</p>
<ul>
<li>一些插件会自动启用，如果你不需要，可以在主题选项中将其禁用;</li>
<li>一些插件只有你在进行必要配置后才会启用。</li>
</ul>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>作为 <a href="https://github.com/orgs/vuepress/people" target="_blank" rel="noopener noreferrer">VuePress Org</a> 的成员之一，Mr.Hope 开发了很多 VuePress 插件。</p>
<p><code>vuepress-theme-hope</code> 调用的所有插件均为官方插件或托管在 <code>vuepress-theme-hope</code> 仓库下由 Mr.Hope 自己开发的插件。</p>
<ul>
<li>官方插件的文档详见 [VuePress2 官网][vuepress]</li>
<li>Mr.Hope 自己开发的插件也全部拥有自己的文档，可以搭配其他主题使用。</li>
</ul>
</div>
`,r:{minutes:2.84,words:853},y:"a",title:"插件说明",i:"info"},["/zh/config/plugins/intro","/zh/config/plugins/intro.md"]],["v-26c90a4d","/zh/config/plugins/md-enhance.html",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["插件配置","主题配置","Markdown"],e:`<h2> 介绍</h2>
<p><code>vuepress-plugin-md-enhance</code> 插件默认启用，提供 Markdown 增强功能。</p>
<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.mdEnhance</code> 作为插件选项传递给 <code>vuepress-plugin-md-enhance</code> 插件。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果你不需要这个功能，请设置为 <code>false</code>。</p>
</div>`,r:{minutes:5.85,words:1755},y:"a",title:"MdEnhance 插件配置",i:"markdown"},["/zh/config/plugins/md-enhance","/zh/config/plugins/md-enhance.md"]],["v-6d69c442","/zh/config/plugins/others.html",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["插件选项","主题配置"],e:`<h2> components</h2>
<p>控制 <code>vuepress-plugin-components</code>，为 Markdown 提供一组组件。</p>
<p>可以在 Markdown 中使用的可用组件为:</p>
<ul>
<li><code>"AudioPlayer"</code></li>
<li><code>"Badge"</code></li>
<li><code>"BiliBili"</code></li>
<li><code>"CodePen"</code></li>
<li><code>"PDF"</code></li>
<li><code>"StackBlitz"</code></li>
<li><code>"VideoPlayer"</code></li>
<li><code>"YouTube"</code></li>
</ul>`,r:{minutes:2.42,words:727},y:"a",title:"其他插件选项",i:"more"},["/zh/config/plugins/others","/zh/config/plugins/others.md"]],["v-00e5c873","/zh/config/plugins/pwa.html",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["插件配置","主题配置","PWA"],e:`<h2> 介绍</h2>
<p><code>vuepress-plugin-pwa2</code> 插件默认禁用，提供渐进式网络应用程序支持。</p>
<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.pwa</code> 作为插件选项传递给 <code>vuepress-plugin-pwa2</code> 插件。</p>
<div class="hint-container tip">
<p class="hint-container-title">快速启用</p>
<p>你可以设置 <code>pwa: true</code> 来以默认设置启用插件。</p>
</div>`,r:{minutes:3.77,words:1130},y:"a",title:"PWA 插件配置",i:"app"},["/zh/config/plugins/pwa","/zh/config/plugins/pwa.md"]],["v-b2b8c26a","/zh/config/theme/",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["主题配置"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/hope/zh/config/theme/basic.html" target="blank">主题基本配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/theme/feature.html" target="blank">主题功能配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/theme/layout.html" target="blank">主题布局配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/theme/appearance.html" target="blank">主题外观配置</a></p>
</li>
<li>
<p><a href="/hope/zh/config/theme/i18n.html" target="blank">主题多语言配置</a></p>
</li>
</ul>`,r:{minutes:.31,words:94},y:"a",title:"主题配置",i:"config"},["/zh/config/theme/index.html","/zh/config/theme/README.md"]],["v-2c5334ca","/zh/config/theme/appearance.html",{d:"2022-05-19T04:54:24.000Z",c:["配置"],g:["主题配置","外观"],e:`<p>以下选项控制主题的外观，一般情况下你无需关注他们，它们仅为有相关配置需求的少数用户提供。</p>
`,r:{minutes:1.95,words:586},y:"a",title:"主题外观选项",i:"config"},["/zh/config/theme/appearance","/zh/config/theme/appearance.md"]],["v-2e4c9314","/zh/config/theme/basic.html",{d:"2022-02-16T16:40:54.000Z",c:["配置"],g:["主题配置","基础"],e:`<div class="hint-container danger">
<p class="hint-container-title">警告</p>
<p>这些选项很重要，需要你正确配置。</p>
</div>
<h2> hostname </h2>
<ul>
<li>类型: <code>string</code></li>
<li>必填: 是</li>
</ul>
<p>当前网站部署到的域名。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>它应该包含完整协议 (如: <code>https://example.com</code>)。</p>
</div>`,r:{minutes:3.56,words:1067},y:"a",title:"主题基本选项",i:"config"},["/zh/config/theme/basic","/zh/config/theme/basic.md"]],["v-0f67f5ee","/zh/config/theme/feature.html",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["主题配置","功能"],e:`<p>以下选项控制主题功能。</p>
`,r:{minutes:2.85,words:856},y:"a",title:"主题功能选项",i:"config"},["/zh/config/theme/feature","/zh/config/theme/feature.md"]],["v-2dc13f10","/zh/config/theme/i18n.html",{d:"2022-04-15T08:48:55.000Z",c:["配置"],g:["多语言","主题配置"],e:`<p>你可以在主题配置中通过在 <code>locales[localePath]</code> 添加下列选项自定义主题的多语言选项。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 当前语言代码
   */</span>
  lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 外观
   */</span>
  outlookLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 主题色
     */</span>
    themeColor<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 夜间模式
     */</span>
    darkmode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 全屏文字
     */</span>
    fullscreen<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 博客
   */</span>
  blogLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 文章文字 */</span>
    article<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 文章列表文字 */</span>
    articleList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 分类文字 */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 标签文字 */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 时间轴文字 */</span>
    timeline<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 时间轴标题文字 */</span>
    timelineTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 全部文字 */</span>
    all<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 个人介绍 */</span>
    intro<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 搜藏文字 */</span>
    star<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 幻灯片 */</span>
    slides<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 加密 */</span>
    encrypt<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 分页
   */</span>
  paginationLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 上一页文字
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 下一页文字
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 跳转提示文字
     */</span>
    navigate<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 跳转按钮文字
     */</span>
    action<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 页码错误文字
     *
     * <span class="token keyword">@description</span> \`$page\` 会自动替换为当前的总页数
     */</span>
    errorText<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 加密
   */</span>
  encryptLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 加密图标的无障碍标签
     */</span>
    iconLabel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 密码输入框的默认占位符
     */</span>
    placeholder<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 是否记忆密码
     */</span>
    remember<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 密码错误提示
     */</span>
    errorHint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  navbarLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 语言下拉列表的无障碍标签
     */</span>
    selectLangAriaLabel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 当前语言的名称
     */</span>
    langName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 页面元信息
   */</span>
  metaLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 作者文字
     */</span>
    author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 写作日期文字
     */</span>
    date<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 标记原创的文字
     */</span>
    origin<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 访问量文字
     */</span>
    views<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 标签文字
     */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 分类文字
     */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 期望阅读时间文字
     */</span>
    readingTime<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 文章字数
     */</span>
    words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 此页内容
     */</span>
    toc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 上一页
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 下一页
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 更新时间文字
     */</span>
    lastUpdated<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 贡献者文字
     */</span>
    contributors<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 编辑此页文字
     */</span>
    editLink<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  routeLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 跳转到主要内容
     */</span>
    skipToContent<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 404 页面提示
     */</span>
    notFoundMsg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回主页
     */</span>
    home<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回上一页
     */</span>
    back<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \`&lt;ExternalLinkIcon&gt;\` 的仅供屏幕阅读器文字
     */</span>
    openInNewWindow<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.77,words:532},y:"a",title:"主题多语言选项",i:"config"},["/zh/config/theme/i18n","/zh/config/theme/i18n.md"]],["v-189a7444","/zh/config/theme/layout.html",{d:"2022-02-15T14:43:07.000Z",c:["配置"],g:["主题配置","布局"],e:`<p>以下选项控制主题布局。</p>
`,r:{minutes:3.69,words:1107},y:"a",title:"主题布局选项",i:"config"},["/zh/config/theme/layout","/zh/config/theme/layout.md"]],["v-1c1af917","/zh/cookbook/advanced/",{y:"p",title:"高级",i:"advance"},["/zh/cookbook/advanced/index.html","/zh/cookbook/advanced/README.md"]],["v-9ac1025a","/zh/cookbook/advanced/component.html",{d:"2022-04-03T12:48:02.000Z",c:["教程知识","自定义"],g:["自定义","组件"],e:`<p>本教程将指引你如何在 VuePress 项目中使用 Vue 组件与 Vue 语法。</p>
`,r:{minutes:1.97,words:591},y:"a",title:"使用组件",i:"plugin"},["/zh/cookbook/advanced/component","/zh/cookbook/advanced/component.md"]],["v-7e412488","/zh/cookbook/advanced/extend.html",{d:"2022-04-03T12:48:02.000Z",c:["高级"],g:["高级","自定义"],e:`<p><code>vuepress-theme-hope</code> 和默认主题一样，同样支持继承。</p>
<p>你可以根据自己的需求在 <code>vuepress-theme-hope</code> 的基础上二次创作自己的主题并本地使用或发布它。</p>
`,r:{minutes:2.13,words:638},y:"a",title:"主题继承",i:"extend"},["/zh/cookbook/advanced/extend","/zh/cookbook/advanced/extend.md"]],["v-8611a588","/zh/cookbook/advanced/replace.html",{d:"2022-04-03T12:48:02.000Z",c:["高级"],g:["高级","自定义"],e:`<p>主题通过 <code>alias</code> 来引入组件，所以你可以利用它来替换主题的任何一个组件。</p>
`,r:{minutes:5.34,words:1603},y:"a",title:"替换主题组件",i:"customize"},["/zh/cookbook/advanced/replace","/zh/cookbook/advanced/replace.md"]],["v-1ba5d21f","/zh/cookbook/advanced/style.html",{d:"2022-04-03T12:48:02.000Z",c:["教程知识","自定义"],g:["自定义","样式"],e:`<p>本文简要介绍定制主题样式的方式。</p>
`,r:{minutes:3.69,words:1108},y:"a",title:"如何自定义样式",i:"style"},["/zh/cookbook/advanced/style","/zh/cookbook/advanced/style.md"]],["v-149cfdea","/zh/cookbook/markdown/",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","Markdown"],g:["介绍","Markdown"],e:`<p>Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。</p>
<p>Markdown 的目标是实现「易读易写」。</p>
`,r:{minutes:19.19,words:5756},y:"a",title:"Markdown 介绍",i:"markdown"},["/zh/cookbook/markdown/index.html","/zh/cookbook/markdown/README.md"]],["v-678d822c","/zh/cookbook/markdown/demo.html",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","Markdown"],g:["示例","Markdown"],e:`<!-- markdownlint-disable -->
<h1> 一级标题</h1>
<!-- markdownlint-restore -->
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 一级标题</span>
</code></pre></div><h2> 二级标题</h2>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> 二级标题</span>
</code></pre></div>`,r:{minutes:3,words:901},y:"a",title:"Markdown 示例",i:"markdown"},["/zh/cookbook/markdown/demo","/zh/cookbook/markdown/demo.md"]],["v-9d14c54a","/zh/cookbook/tutorial/",{d:"2022-04-01T07:55:05.000Z",c:["快速上手","基础知识","教程"],e:`<p>本教程是一个针对小白手把手教程。</p>
`,r:{minutes:.27,words:82},y:"a",title:"小白教程",i:"creative"},["/zh/cookbook/tutorial/index.html","/zh/cookbook/tutorial/README.md"]],["v-8130b56e","/zh/cookbook/tutorial/command.html",{d:"2022-04-01T07:55:05.000Z",c:["快速上手","基础知识","教程"],g:["项目命令"],e:`<p>本教程介绍 VuePress 项目命令。</p>
`,r:{minutes:1.16,words:349},y:"a",title:"项目命令",i:"command"},["/zh/cookbook/tutorial/command","/zh/cookbook/tutorial/command.md"]],["v-1f60fac8","/zh/cookbook/tutorial/config.html",{d:"2022-04-01T07:55:05.000Z",c:["快速上手","基础知识","教程"],g:["配置项目"],e:`<p>本教程指引你如何配置 VuePress 项目。</p>
`,r:{minutes:3.53,words:1059},y:"a",title:"配置项目",i:"config"},["/zh/cookbook/tutorial/config","/zh/cookbook/tutorial/config.md"]],["v-7c625cdb","/zh/cookbook/tutorial/content.html",{d:"2022-04-01T07:55:05.000Z",c:["快速上手","基础知识","教程"],g:["项目内容"],e:`<p>本教程指引你如何在 VuePress 项目中控制内容生成。</p>
`,r:{minutes:2.09,words:627},y:"a",title:"项目内容",i:"page"},["/zh/cookbook/tutorial/content","/zh/cookbook/tutorial/content.md"]],["v-5c4e2dbc","/zh/cookbook/tutorial/create.html",{d:"2022-04-01T07:55:05.000Z",c:["快速上手","基础知识","教程"],g:["模板"],e:`<p>此教程将指引你创建一个 VuePress Theme Hope 项目。</p>
`,r:{minutes:1.33,words:398},y:"a",title:"创建项目",i:"add"},["/zh/cookbook/tutorial/create","/zh/cookbook/tutorial/create.md"]],["v-237b57d2","/zh/cookbook/tutorial/deploy.html",{d:"2022-04-01T07:55:05.000Z",c:["快速上手","基础知识","教程"],g:["部署项目"],e:`<p>本教程指引你如何部署 VuePress 项目。</p>
`,r:{minutes:1.36,words:408},y:"a",title:"部署项目",i:"launch"},["/zh/cookbook/tutorial/deploy","/zh/cookbook/tutorial/deploy.md"]],["v-c8955332","/zh/cookbook/tutorial/env.html",{d:"2022-04-01T07:55:05.000Z",c:["快速上手","基础知识","教程"],g:["准备运行环境"],e:`<p>本教程将指导你如何搭建 VuePress 的运行环境。</p>
`,r:{minutes:1.86,words:558},y:"a",title:"准备运行环境",i:"leaf"},["/zh/cookbook/tutorial/env","/zh/cookbook/tutorial/env.md"]],["v-646b2561","/zh/cookbook/tutorial/structure.html",{d:"2022-04-01T07:55:05.000Z",c:["快速上手","基础知识","教程"],g:["配置项目"],e:`<p>本教程将介绍 VuePress 项目结构。</p>
`,r:{minutes:.82,words:247},y:"a",title:"项目结构",i:"tree"},["/zh/cookbook/tutorial/structure","/zh/cookbook/tutorial/structure.md"]],["v-7b9763c8","/zh/cookbook/vuepress/",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","VuePress"],g:["介绍","VuePress"],e:`<p>VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 <a href="https://zh.wikipedia.org/wiki/Markdown" target="_blank" rel="noopener noreferrer">Markdown</a> 来书写内容 (如文档、博客等) ，然后 VuePress 会帮助你生成一个静态网站来展示它们。</p>
`,r:{minutes:1.02,words:305},y:"a",title:"VuePress",i:"vue"},["/zh/cookbook/vuepress/index.html","/zh/cookbook/vuepress/README.md"]],["v-e91f018a","/zh/cookbook/vuepress/config.html",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","VuePress"],g:["配置","VuePress"],e:`<h2> 配置文件</h2>
<p>如果没有任何配置，你的 VuePress 站点仅有一些最基础的功能。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 <code>.vuepress</code> 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样:</p>
<div class="language-text" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre></div>`,r:{minutes:1.48,words:445},y:"a",title:"VuePress 配置",i:"config"},["/zh/cookbook/vuepress/config","/zh/cookbook/vuepress/config.md"]],["v-3f9f2a41","/zh/cookbook/vuepress/file.html",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","VuePress"],g:["文件结构","VuePress"],e:`<h2> 文件结构</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── docs → 由你指定的文档文件夹
│    │
│    ├── .vuepress (可选的) → 用于存放全局的配置、组件、静态资源等
│    │    │
│    │    ├── dist (默认的) → 构建输出目录
│    │    │
│    │    ├── public (可选的) → 静态资源目录
│    │    │
│    │    ├── styles (可选的) → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} (可选的) → 客户端文件
│    │
│    ├── ... → 其他项目文档
│    │
│    └── README.md → 项目主页
│
└── package.json → Nodejs 配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.49,words:147},y:"a",title:"文件结构介绍",i:"folder"},["/zh/cookbook/vuepress/file","/zh/cookbook/vuepress/file.md"]],["v-351cfea4","/zh/cookbook/vuepress/markdown.html",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","VuePress"],g:["Markdown","VuePress"],e:`<h2> 语法扩展</h2>
<p>VuePress 会使用 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a> 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">语法扩展</a> 。</p>`,r:{minutes:8.67,words:2602},y:"a",title:"内置 Markdown 拓展",i:"markdown"},["/zh/cookbook/vuepress/markdown","/zh/cookbook/vuepress/markdown.md"]],["v-7a7a1de4","/zh/cookbook/vuepress/page.html",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","VuePress"],g:["页面","VuePress"],e:`<p>VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。</p>
<h2> 路由</h2>
<p>默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。</p>
<p>假设这是你的 Markdown 文件所处的目录结构:</p>
<div class="language-text" data-ext="text"><pre class="language-text"><code>└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
</code></pre></div>`,r:{minutes:1.51,words:453},y:"a",title:"VuePress 页面",i:"page"},["/zh/cookbook/vuepress/page","/zh/cookbook/vuepress/page.md"]],["v-80393c2c","/zh/cookbook/vuepress/plugin.html",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","VuePress"],g:["VuePress","插件"],e:`<h2> 介绍</h2>
<p>借助于 <a href="https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html" target="_blank" rel="noopener noreferrer">插件 API</a> ， VuePress 插件可以为你提供各种不同的功能。</p>
<h2> 社区插件</h2>
<p>社区用户创建了很多插件，并将它们发布到了 <a href="https://www.npmjs.com/search?q=keywords:vuepress-plugin" target="_blank" rel="noopener noreferrer">NPM</a> 上。 VuePress 团队也在 <a href="https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin" target="_blank" rel="noopener noreferrer">@vuepress</a> Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。</p>`,r:{minutes:1.53,words:460},y:"a",title:"插件",i:"plugin"},["/zh/cookbook/vuepress/plugin","/zh/cookbook/vuepress/plugin.md"]],["v-b2994868","/zh/cookbook/vuepress/theme.html",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","VuePress"],g:["主题","VuePress"],e:`<p>VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。</p>
<h2> 默认主题</h2>
<p>VuePress 有一个开箱即用的默认主题，正使用在你当前正在浏览的文档网站上。</p>
<p>如果你不指定要使用的主题，那么就会自动使用默认主题。</p>
<p>为了配置默认主题，你需要在你的配置文件中通过 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#theme" target="_blank" rel="noopener noreferrer">theme</a> 配置项来使用它:</p>`,r:{minutes:1.31,words:392},y:"a",title:"主题配置",i:"palette"},["/zh/cookbook/vuepress/theme","/zh/cookbook/vuepress/theme.md"]],["v-185e46d2","/zh/guide/advanced/",{d:"2022-02-22T08:57:06.000Z",c:["高级"],g:["高级"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/hope/zh/guide/advanced/pwa.html" target="blank">PWA 支持</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/advanced/feed.html" target="blank">Feed 支持</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/advanced/seo.html" target="blank">SEO 增强</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/advanced/sitemap.html" target="blank">Sitemap 生成</a></p>
</li>
</ul>`,r:{minutes:.11,words:34},y:"a",title:"高级",i:"advance"},["/zh/guide/advanced/index.html","/zh/guide/advanced/README.md"]],["v-f445192e","/zh/guide/advanced/feed.html",{d:"2022-02-22T08:57:06.000Z",c:["高级"],g:["高级","Feed"],e:`<p><code>vuepress-theme-hope</code> 通过内置 [<code>vuepress-plugin-feed2</code>][feed2] 插件来为你提供 feed 支持。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.feed</code> 选项作为插件选项提供给 <code>vuepress-plugin-feed2</code>。</p>
</div>
`,r:{minutes:2.26,words:678},y:"a",title:"Feed 支持",i:"rss"},["/zh/guide/advanced/feed","/zh/guide/advanced/feed.md"]],["v-3ab8529e","/zh/guide/advanced/pwa.html",{d:"2022-02-22T08:57:06.000Z",c:["高级"],g:["高级","PWA"],e:`<p>该主题将通过内置 [<code>vuepress-plugin-pwa2</code>][pwa2] 提供渐进式 Web 应用程序支持<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup><a class="footnote-anchor" id="footnote-ref1">，该功能默认禁用。</a></p><a class="footnote-anchor" id="footnote-ref1">
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.pwa</code> 作为插件选项提供给 <code>vuepress-plugin-pwa2</code>。</p>
<p>如果你正在使用此插件，我们推荐在你的 VuePress 配置文件中设置 <code>shouldPrefetch: false</code>。</p>
</div>
<hr class="footnotes-sep">
</a><section class="footnotes"><a class="footnote-anchor" id="footnote-ref1">
</a><ol class="footnotes-list"><a class="footnote-anchor" id="footnote-ref1">
</a><li id="footnote1" class="footnote-item"><a class="footnote-anchor" id="footnote-ref1"><p><strong>PWA 介绍</strong></p>
<p>PWA 全称 Progressive Web app，即渐进式网络应用程序，标准由 W3C 规定。</p>
</a><p><a class="footnote-anchor" id="footnote-ref1">它允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。 </a><a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
`,r:{minutes:9.92,words:2976},y:"a",title:"PWA",i:"app"},["/zh/guide/advanced/pwa","/zh/guide/advanced/pwa.md"]],["v-79fb0b6e","/zh/guide/advanced/seo.html",{d:"2022-02-22T08:57:06.000Z",c:["高级"],g:["高级","SEO"],e:`<p><code>vuepress-theme-hope</code> 通过内置 [<code>vuepress-plugin-seo2</code>][seo2] 为提供 SEO 增强功能。</p>
<p>为了使插件能够更好的工作，你可能需要查看一下 <a href="/hope/zh/config/frontmatter/info.html" target="blank">页面配置</a> 并合理的配置它们。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.seo</code> 作为插件选项提供给 <code>vuepress-plugin-seo2</code>。</p>
</div>
<p>插件会通过向网站 <code>&lt;head&gt;</code> 注入标签，让你的网站完全支持 <a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">开放内容协议 OGP</a> 和 <a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a>，以全面增强站点的搜索引擎优化性。</p>
<p>如果不需要这个插件，请设置在主题选项中设置 <code>plugins.seo: false</code>。</p>
`,r:{minutes:5.78,words:1734},y:"a",title:"SEO",i:"config"},["/zh/guide/advanced/seo","/zh/guide/advanced/seo.md"]],["v-95124dd4","/zh/guide/advanced/sitemap.html",{d:"2022-02-22T08:57:06.000Z",c:["高级"],g:["高级","Sitemap"],e:`<p><code>vuepress-theme-hope</code> 通过内置 <a href="https://vuepress-theme-hope.github.io/v2/sitemap/zh/" target="_blank" rel="noopener noreferrer">vuepress-plugin-sitemap2\`</a> 为你提供 Sitemap 生成。</p>
<p>插件会为你的网站自动生成 Sitemap，它会自动根据页面的 Git 的时间戳生成页面的最后更新时间，同时会根据站点的多语言配置声明页面的其他语言替代版本地址。</p>
<p>如果你不需要这个插件，请在主题选项中设置 <code>plugins.sitemap: false</code>。</p>`,r:{minutes:2.36,words:707},y:"a",title:"Sitemap",i:"sitemap"},["/zh/guide/advanced/sitemap","/zh/guide/advanced/sitemap.md"]],["v-514c79d2","/zh/guide/blog/",{d:"2022-02-15T14:43:07.000Z",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/hope/zh/guide/blog/intro.html" target="blank">博客功能介绍</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/blog/home.html" target="blank">博客主页</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/blog/blogger.html" target="blank">博主介绍</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/blog/article.html" target="blank">文章列表</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/blog/category-and-tags.html" target="blank">分类与标签</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/blog/timeline.html" target="blank">时间线</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/blog/path.html" target="blank">路径配置</a></p>
</li>
</ul>`,r:{minutes:.17,words:51},y:"a",title:"博客",i:"blog"},["/zh/guide/blog/index.html","/zh/guide/blog/README.md"]],["v-3aa26c75","/zh/guide/blog/article.html",{d:"2022-02-15T14:43:07.000Z",c:["博客"],g:["博客","文章","加密","幻灯片","收藏"],e:`<p>主题默认在 <code>/article/</code> 路径下为你提供了全部的文章列表。</p>
`,r:{minutes:4.26,words:1279},y:"a",title:"文章列表",i:"article"},["/zh/guide/blog/article","/zh/guide/blog/article.md"]],["v-1a67e279","/zh/guide/blog/blogger.html",{d:"2022-02-16T10:56:35.000Z",c:["博客"],g:["博客","博主信息"],e:`<p>主题允许你展示博主的基本信息。</p>
`,r:{minutes:2.26,words:677},y:"a",title:"博主信息",i:"blog"},["/zh/guide/blog/blogger","/zh/guide/blog/blogger.md"]],["v-56caf9ad","/zh/guide/blog/category-and-tags.html",{d:"2022-02-15T14:43:07.000Z",c:["博客"],g:["博客","分类","标签"],e:`<p>你可以通过 frontmatter 来为文章配置分类与标签，使它们出现在特定的分类与标签页面中。</p>
`,r:{minutes:1.21,words:364},y:"a",title:"分类与标签",i:"tag"},["/zh/guide/blog/category-and-tags","/zh/guide/blog/category-and-tags.md"]],["v-0b181c70","/zh/guide/blog/home.html",{d:"2022-02-15T14:43:07.000Z",c:["博客"],g:["博客","主页","布局"],e:`<p><code>vuepress-theme-hope</code> 允许你启用博客风格的首页。</p>
<p>你需要在相应的页面的 frontmatter 中，设置 <code>home: true</code> 和 <code>layout: BlogHome</code> 来使用博客主页。</p>
`,r:{minutes:1.37,words:412},y:"a",title:"博客首页",i:"home"},["/zh/guide/blog/home","/zh/guide/blog/home.md"]],["v-b2c64d82","/zh/guide/blog/intro.html",{d:"2022-02-15T14:43:07.000Z",c:["博客"],g:["博客","介绍"],e:`<p>主题通过引入 <code>vuepress-plugin-blog2</code> 提供了博客支持，该功能是<strong>默认禁用</strong>的。</p>
<p>如果你需要博客功能，你可以在主题选项中设置 <code>plugins.blog: true</code> 来启用博客功能。</p>
`,r:{minutes:2.24,words:671},y:"a",title:"博客功能介绍",i:"blog"},["/zh/guide/blog/intro","/zh/guide/blog/intro.md"]],["v-65b11e42","/zh/guide/blog/path.html",{d:"2022-02-16T10:56:35.000Z",c:["博客"],g:["博客","路径"],e:`<p>你可以在主题选项中通过 <code>plugins.blog</code> 控制博客中各页面路径。</p>
<p>博客提供的默认路径如下，如果它们与你的已有路径发生冲突，并且你不想调整自己的路径，你可以对它们进行修改。</p>
<table>
<thead>
<tr>
<th>配置项</th>
<th>描述</th>
<th>默认路径</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>article</code></td>
<td>文章列表</td>
<td><code>/article/</code></td>
</tr>
<tr>
<td><code>category</code></td>
<td>分类地图页</td>
<td><code>/category/</code></td>
</tr>
<tr>
<td><code>categoryItem</code></td>
<td>特定分类列表</td>
<td><code>/category/:name/</code></td>
</tr>
<tr>
<td><code>tag</code></td>
<td>标签地图页</td>
<td><code>/tag/</code></td>
</tr>
<tr>
<td><code>tagItem</code></td>
<td>特定标签列表</td>
<td><code>/tag/:name/</code></td>
</tr>
<tr>
<td><code>star</code></td>
<td>星标文章列表</td>
<td><code>/star/</code></td>
</tr>
<tr>
<td><code>timeline</code></td>
<td>时间线列表</td>
<td><code>/timeline/</code></td>
</tr>
</tbody>
</table>`,r:{minutes:.5,words:151},y:"a",title:"博客页面路径",i:"link"},["/zh/guide/blog/path","/zh/guide/blog/path.md"]],["v-4b810eb4","/zh/guide/blog/timeline.html",{d:"2022-02-15T14:43:07.000Z",c:["博客"],g:["博客","时间线"],e:`<p>你可以通过 <code>/timeline/</code> 访问时间页面，在页面中，你可以按照时间倒序查看所有的文章列表。</p>
<p>
</p>
<h2> 排除文章</h2>
<p>默认情况下所有注明了写作日期的文章都会显示时间线中。如果你不希望某篇文章被包含，只需在文章的 frontmatter 中将 <code>timeline</code> 设置为 <code>false</code>。</p>
<h2> 配置时间线顶部文字</h2>
<p>我们允许你定制时间线的顶部文字，你可以在主题选项中通过 <code>blog.timeline</code> 配置它。</p>
<h2> 侧边栏</h2>`,r:{minutes:.7,words:211},y:"a",title:"时间线",i:"time"},["/zh/guide/blog/timeline","/zh/guide/blog/timeline.md"]],["v-2e7b5658","/zh/guide/feature/",{d:"2022-02-15T14:43:07.000Z",e:`<p><code>vuepress-theme-hope</code> 引入了很多非常棒的功能。绝大部分功能都抽离成了单独组件，这意味着如果你喜欢它们，你可以在其他 VuePress 主题或默认主题中使用它们。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>所有插件设置都在主题选项的 <code>plugins</code> 下，选项名称与它们的名称相关。</p>
</div>
<h2> 目录</h2>
<ul>
<li>
<p><a href="/hope/zh/guide/feature/page-info.html" target="blank">页面信息</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/feature/comment.html" target="blank">评论功能</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/feature/copy-code.html" target="blank">一键复制</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/feature/photo-swipe.html" target="blank">图片预览</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/feature/meta.html" target="blank">页面元信息</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/feature/search.html" target="blank">搜索功能</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/feature/copyright.html" target="blank">版权信息</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/feature/encrypt.html" target="blank">文章加密</a></p>
</li>
</ul>`,r:{minutes:.48,words:143},y:"a",title:"功能",i:"discover"},["/zh/guide/feature/index.html","/zh/guide/feature/README.md"]],["v-f5cba6a4","/zh/guide/feature/comment.html",{d:"2022-02-15T14:43:07.000Z",c:["功能"],g:["功能","评论"],e:`<p>通过内置 [<code>vuepress-plugin-comment2</code>][comment2]，<code>vuepress-theme-hope</code> 实现了评论功能。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.comment</code> 作为插件选项提供给 <code>vuepress-plugin-comment2</code>。</p>
</div>
`,r:{minutes:3.53,words:1058},y:"a",title:"评论",i:"comment"},["/zh/guide/feature/comment","/zh/guide/feature/comment.md"]],["v-023d1488","/zh/guide/feature/copy-code.html",{d:"2022-02-15T14:43:07.000Z",c:["功能"],g:["功能","代码复制"],e:`<p>如果你是一个程序员，你可能希望你的用户能够一键复制你在正文中展示的代码。</p>
<p>针对这一情况，<code>vuepress-theme-hope</code> 内置了 [vuepress-plugin-copy-code2][copy-code2]，提供了一个复制按钮。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.copyCode</code> 选项作为插件选项提供给 <code>vuepress-plugin-copy-code2</code>。</p>
</div>
`,r:{minutes:.93,words:279},y:"a",title:"代码复制",i:"copy"},["/zh/guide/feature/copy-code","/zh/guide/feature/copy-code.md"]],["v-01cb6346","/zh/guide/feature/copyright.html",{d:"2022-04-05T17:43:06.000Z",c:["功能"],g:["功能","版权信息"],e:`<p>有些时候，你可能不想让你的某些文章被他人复制，或者你想让他人在复制时，自动生成一段版权信息到剪切板中。</p>
<p><code>vuepress-theme-hope</code> 为应对此场景引入了 [vuepress-plugin-copyright2][copyright2]。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.copyright</code> 作为插件选项提供给 <code>vuepress-plugin-copyright2</code>。</p>
</div>
`,r:{minutes:2.55,words:765},y:"a",title:"版权信息",i:"copyright"},["/zh/guide/feature/copyright","/zh/guide/feature/copyright.md"]],["v-3d170730","/zh/guide/feature/encrypt.html",{d:"2022-02-15T14:43:07.000Z",c:["功能"],g:["功能","加密"],e:`<p>主题支持对特定文件夹或特定的路径进行加密，也支持进行全局范围的加密。</p>
<div class="hint-container danger">
<p class="hint-container-title">警告</p>
<p>注意，受到 VuePress 的限制，在未解密前，文章内容仅仅被隐藏，访问者仍可以从源码中获取文章的内容。</p>
<p>所以请不要使用该加密功能用于任何敏感、机密的文章与档案，造成的后果请你自负。</p>
</div>
`,r:{minutes:1.58,words:473},y:"a",title:"加密",i:"lock"},["/zh/guide/feature/encrypt","/zh/guide/feature/encrypt.md"]],["v-160c00c0","/zh/guide/feature/meta.html",{d:"2022-02-15T14:43:07.000Z",c:["功能"],g:["功能","元数据"],e:`<p>主题通过 [<code>@vuepress/plugin-git</code>][git] 插件在页面底部显示页面的最后更新时间与贡献者，并提供了“编辑此页”按钮的支持。</p>
<p>主题同时根据侧边栏配置提供上一页和下一页的导航按钮。</p>
`,r:{minutes:2.05,words:614},y:"a",title:"页面元数据",i:"time"},["/zh/guide/feature/meta","/zh/guide/feature/meta.md"]],["v-14cf8901","/zh/guide/feature/page-info.html",{d:"2022-02-15T14:43:07.000Z",c:["功能"],g:["功能","页面信息"],e:`<p><code>vuepress-theme-hope</code> 实现了文章信息展示。</p>
`,r:{minutes:1.87,words:562},y:"a",title:"页面信息",i:"info"},["/zh/guide/feature/page-info","/zh/guide/feature/page-info.md"]],["v-7bf35d2e","/zh/guide/feature/photo-swipe.html",{d:"2022-02-15T14:43:07.000Z",c:["功能"],g:["功能","图片浏览"],e:`<p>通过内置 [vuepress-plugin-photo-swipe][photo-swipe], vuepress-theme-hope 会使页面正文内的图片在点击时进入浏览模式浏览。</p>
<p>如果你不需要此功能，请在主题选项中设置 <code>plugins.photoSwipe: false</code>。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.photoSwipe</code> 选项作为插件选项提供给 <code>vuepress-plugin-photo-swipe</code>。</p>
</div>
`,r:{minutes:1.2,words:359},y:"a",title:"图片预览",i:"preview"},["/zh/guide/feature/photo-swipe","/zh/guide/feature/photo-swipe.md"]],["v-1efb7a46","/zh/guide/feature/search.html",{d:"2022-02-26T13:47:51.000Z",c:["功能"],g:["功能","搜索"],e:`<p>主题对 [<code>vuepress-plugin-search-pro</code>][search-pro]、 [<code>@vuepress/plugin-docsearch</code>][docsearch] 和 [<code>@vuepress/plugin-search</code>][search] 提供了内置支持。你只需要添加并配置所需的搜索插件，就能够在导航栏获得一个搜索框。</p>
<p>如果你需要搜索插件，请通过 <a href="/hope/zh/cookbook/vuepress/config.html" target="blank"><strong>VuePress 配置文件</strong></a> 的 <code>plugins</code> 选项应用它。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>主题只是添加了上述搜索插件的支持，而并没有捆绑它们，你需要自己安装和调用。</p>
</div>
<div class="hint-container danger">
<p class="hint-container-title">警告</p>
<p><strong>请勿</strong>在主题选项中使用 <code>plugins.search</code>。</p>
<p>由于主题只能调用它捆绑的插件，因此主题选项中的 <code>plugins</code> 字段仅接受<strong>特定</strong>插件名称。</p>
</div>
`,r:{minutes:6.62,words:1985},y:"a",title:"搜索",i:"search"},["/zh/guide/feature/search","/zh/guide/feature/search.md"]],["v-046b2fc0","/zh/guide/get-started/",{d:"2022-02-15T14:43:07.000Z",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/hope/zh/guide/get-started/intro.html" target="blank">主题简介</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/get-started/install.html" target="blank">安装与使用</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/get-started/markdown.html" target="blank">Markdown 介绍</a></p>
</li>
</ul>`,r:{minutes:.1,words:29},y:"a",title:"快速上手",i:"creative"},["/zh/guide/get-started/index.html","/zh/guide/get-started/README.md"]],["v-22faf3de","/zh/guide/get-started/install.html",{d:"2022-02-15T14:43:07.000Z",c:["快速上手"],g:["快速上手","安装","使用"],e:`<h2> 安装</h2>
<p>在 <code>[dir]</code> 文件夹内新建 vuepress-theme-hope 项目:</p>

<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>这里的 <code>[dir]</code> 是一个参数，你需要使用真实的文件夹名称替换它，例如 <code>docs</code>、<code>blog</code> 或其他你喜欢的名称。</p>
</div>
<h2> 使用</h2>
<p>请在配置文件中导入并使用 <code>hopeTheme</code> 以使用 <code>vuepress-theme-hope</code>。</p>`,r:{minutes:.71,words:214},y:"a",title:"安装/使用",i:"install"},["/zh/guide/get-started/install","/zh/guide/get-started/install.md"]],["v-a98904a6","/zh/guide/get-started/intro.html",{d:"2022-02-15T14:43:07.000Z",c:["快速上手"],g:["快速上手","介绍"],e:`<h2> 主题初衷</h2>
<p>制作本主题的初衷是发现 VuePress 只是一个单纯的静态文档生成器。举个例子，它并不会注入 meta 标签做 SEO 优化，也不会生成 Sitemap 帮助搜索引擎索引文档内容。</p>
<p>虽然 VuePress 在一定程度上扩展了 Markdown 语法，它仍然缺失一些常用的功能，比如文本对齐、标记、流程图、公式、演示等。同时默认主题提供的一些功能，也比较弱或者缺失，如图片预览，深色模式等。</p>
<p>在这种情况下，<code>vuepress-theme-hope</code> 和一些系列插件就应运诞生。</p>
<p>主题不仅在默认主题的基础上<strong>大幅提高美观性</strong>，同时搭配各种插件，<strong>在各种细节与功能上为 VuePress 提供全方位的增强</strong>。</p>`,r:{minutes:4.43,words:1330},y:"a",title:"主题介绍",i:"info"},["/zh/guide/get-started/intro","/zh/guide/get-started/intro.md"]],["v-0b45698a","/zh/guide/get-started/markdown.html",{d:"2022-02-15T14:43:07.000Z",c:["快速上手"],g:["快速上手","Markdown"],e:`<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>
<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>
`,r:{minutes:3.79,words:1136},y:"a",title:"Markdown",i:"markdown"},["/zh/guide/get-started/markdown","/zh/guide/get-started/markdown.md"]],["v-6b34e031","/zh/guide/interface/",{d:"2022-02-15T14:43:07.000Z",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/hope/zh/guide/interface/darkmode.html" target="blank">深色模式</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/interface/theme-color.html" target="blank">主题色</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/interface/icon.html" target="blank">图标支持</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/interface/code-theme.html" target="blank">代码主题</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/interface/accessibility.html" target="blank">无障碍支持</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/interface/others.html" target="blank">其他功能</a></p>
</li>
</ul>`,r:{minutes:.15,words:44},y:"a",title:"界面",i:"palette"},["/zh/guide/interface/index.html","/zh/guide/interface/README.md"]],["v-3c11b63c","/zh/guide/interface/accessibility.html",{d:"2022-02-15T14:43:07.000Z",c:["界面"],g:["界面","无障碍"],e:`<p>主题完全支持无障碍功能。</p>
<ul>
<li>
<p>主题全部的页面结构都经过语义化处理。</p>
</li>
<li>
<p>所有的按钮、图标都有其相应的无障碍标签</p>
</li>
<li>
<p>所有主要可交互元素均可通过键盘进行聚焦与交互</p>
</li>
</ul>
<p>这是我们为全球视障人群做出的支持! ❤️</p>
`,r:{minutes:.34,words:102},y:"a",title:"无障碍",i:"support"},["/zh/guide/interface/accessibility","/zh/guide/interface/accessibility.md"]],["v-42dc503f","/zh/guide/interface/code-theme.html",{d:"2022-03-02T03:44:36.000Z",c:["界面"],g:["界面","代码主题"],e:`<p><code>vuepress-theme-hope</code> 允许你全局为代码块在日间模式和夜间模式下配置不同主题。</p>
`,r:{minutes:.75,words:224},y:"a",title:"代码主题",i:"style"},["/zh/guide/interface/code-theme","/zh/guide/interface/code-theme.md"]],["v-900b3c62","/zh/guide/interface/darkmode.html",{d:"2022-02-15T14:43:07.000Z",c:["界面"],g:["界面","深色模式"],e:`<p>在深色模式下，页面会使用深色背景与浅色文字，以让你更加舒适。</p>
`,r:{minutes:.63,words:190},y:"a",title:"深色模式",i:"contrast"},["/zh/guide/interface/darkmode","/zh/guide/interface/darkmode.md"]],["v-c284a222","/zh/guide/interface/icon.html",{d:"2022-02-15T14:43:07.000Z",c:["界面"],g:["界面","图标"],e:`<p>整个主题在多处都添加了 FontClass/图片 格式图标的支持。</p>
<p>目前你可以使用 iconfont 和 fontawesome 为你的项目添加图标。</p>
<ul>
<li>对于国内用户，推荐使用 iconfont</li>
<li>对于海外用户，推荐使用 fontawesome</li>
</ul>
<p>同时，png/svg 格式的图标也是支持的。你可以使用绝对路径或者路径名来添加图标。</p>
`,r:{minutes:2.85,words:856},y:"a",title:"图标支持",i:"discover"},["/zh/guide/interface/icon","/zh/guide/interface/icon.md"]],["v-03914a85","/zh/guide/interface/others.html",{d:"2022-02-15T14:43:07.000Z",c:["界面"],g:["界面"],e:`<h2> 样式定制</h2>
<p>主题允许你在 <code>.vuepress/styles/config.scss</code> 和 <code>.vuepress/styles/palette.scss</code> 中设置变量，来定制绝大部分颜色、响应式断点，页面布局尺寸等参数。</p>
<p>详细的参数详见 <a href="/hope/zh/config/style.html" target="blank">配置 → 样式自定义</a>。</p>
<h2> 全屏按钮</h2>
`,r:{minutes:.88,words:265},y:"a",title:"其他界面功能",i:"others"},["/zh/guide/interface/others","/zh/guide/interface/others.md"]],["v-ec6e1860","/zh/guide/interface/pure.html",{d:"2022-03-04T11:41:20.000Z",e:`<p>如果你的网站是一个纯文档站点，并且你更喜欢干净的样式，你可以在主题选项中设置 <code>pure: true</code> 启用纯净模式。</p>
<p>在这个模式下，我们会禁用一些花哨的动画以及一些色彩，只提供功能。</p>
`,r:{minutes:.27,words:82},y:"a",title:"纯净模式",i:"leaf"},["/zh/guide/interface/pure","/zh/guide/interface/pure.md"]],["v-76ef440b","/zh/guide/interface/theme-color.html",{d:"2022-02-15T14:43:07.000Z",c:["界面"],g:["界面","主题色"],e:`<p>主题允许你自定义主题颜色，甚至提供选择器。</p>
`,r:{minutes:.84,words:252},y:"a",title:"主题色",i:"palette"},["/zh/guide/interface/theme-color","/zh/guide/interface/theme-color.md"]],["v-2edff20a","/zh/guide/layout/",{d:"2022-02-15T14:43:07.000Z",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/hope/zh/guide/layout/navbar.html" target="blank">导航栏</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/layout/sidebar.html" target="blank">侧边栏</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/layout/breadcrumb.html" target="blank">路径导航</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/layout/footer.html" target="blank">页脚</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/layout/page.html" target="blank">页面</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/layout/catalog.html" target="blank">目录页</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/layout/home.html" target="blank">主页</a></p>
</li>
<li>
<p><a href="/hope/zh/guide/layout/slides.html" target="blank">幻灯片页面</a></p>
</li>
<li>
<p>切换动画</p>
<p>在页面切换时，将会显示一个渐入的切换动画。提升 文档 / 博客 质感。</p>
</li>
</ul>`,r:{minutes:.25,words:75},y:"a",title:"布局",i:"layout"},["/zh/guide/layout/index.html","/zh/guide/layout/README.md"]],["v-5b8f136c","/zh/guide/layout/breadcrumb.html",{d:"2022-02-15T14:43:07.000Z",c:["布局"],g:["布局","路径导航"],e:`<p><code>vuepress-theme-hope</code> 添加了开箱即用的路径导航支持，你可以通过 <code>breadcrumb</code> 字段控制它 </p>
<p>无需任何额外配置，一个和主题色相符合的路径导航会显示在页面内容最上方，帮助阅读者理解文档结构。</p>
<p>你也可以通过 <code>breadcrumbIcon</code> 字段 </p>
`,r:{minutes:1.36,words:409},y:"a",title:"路径导航",i:"navigation"},["/zh/guide/layout/breadcrumb","/zh/guide/layout/breadcrumb.md"]],["v-82fb892c","/zh/guide/layout/catalog.html",{d:"2022-12-31T15:16:41.000Z",c:["布局"],g:["目录","布局"],e:`<p>VuePress Theme Hope 默认使用 [<code>vuepress-plugin-catalog</code>][auto-catalog] 为每个文件夹自动生成带有目录的 <code>README.md</code>。</p>
`,r:{minutes:.45,words:136},y:"a",title:"目录页面",i:"tree"},["/zh/guide/layout/catalog","/zh/guide/layout/catalog.md"]],["v-cc6fd058","/zh/guide/layout/footer.html",{d:"2022-02-15T14:43:07.000Z",c:["布局"],g:["布局","页脚"],e:`<p><code>vuepress-theme-hope</code> 为所有页面提供了页脚功能 </p>
`,r:{minutes:1.63,words:489},y:"a",title:"页脚支持",i:"footer"},["/zh/guide/layout/footer","/zh/guide/layout/footer.md"]],["v-e14f8ee0","/zh/guide/layout/home.html",{d:"2022-02-15T14:43:07.000Z",c:["布局"],g:["布局","主页"],e:`<p><code>vuepress-theme-hope</code> 保留了默认主题的首页配置，在此基础上改进样式与配置。</p>
<p>如果想要使用它，请在 frontmatter 中设置 <code>home: true</code>。任何 frontmatter 之后的内容将会以普通的 Markdown 被渲染，并插入到主页渲染内容的底部。</p>
<p>
</p>
`,r:{minutes:1.3,words:389},y:"a",title:"首页",i:"home"},["/zh/guide/layout/home","/zh/guide/layout/home.md"]],["v-5d4b1b02","/zh/guide/layout/navbar.html",{d:"2022-02-15T14:43:07.000Z",c:["布局"],g:["布局","导航栏"],e:`<p>导航栏可能包含你的站点名称、<a href="#%E6%90%9C%E7%B4%A2%E6%A1%86">搜索框</a>、 <a href="#%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5">导航栏链接</a>、<a href="https://v2.vuepress.vuejs.org/zh/guide/i18n.html" target="_blank" rel="noopener noreferrer">多语言支持</a>、<a href="#git-%E4%BB%93%E5%BA%93%E5%92%8C%E7%BC%96%E8%BE%91%E9%93%BE%E6%8E%A5">仓库链接</a> 和 <a href="#%E5%A4%96%E8%A7%82%E5%BC%B9%E7%AA%97">外观弹窗</a>。它们均取决于你的配置。</p>
`,r:{minutes:7.33,words:2200},y:"a",title:"导航栏",i:"navbar"},["/zh/guide/layout/navbar","/zh/guide/layout/navbar.md"]],["v-45c5d8e0","/zh/guide/layout/page.html",{d:"2022-02-15T14:43:07.000Z",c:["布局"],g:["布局","页面"],e:`<h2> 图标支持</h2>
<p>你可以在页面的 frontmatter 中配置 <code>icon</code> 字段，填入对应图标的 FontClass 即可绑定图标到页面。</p>
<p>该图标会在导航栏，侧边栏，路径导航和标题中使用。</p>
<details class="hint-container details"><summary>例子</summary>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">icon</span><span class="token punctuation">:</span> home</span>
<span class="token punctuation">---</span></span>
</code></pre></div></details>`,r:{minutes:2,words:599},y:"a",title:"页面",i:"page"},["/zh/guide/layout/page","/zh/guide/layout/page.md"]],["v-0c9f2207","/zh/guide/layout/sidebar.html",{d:"2022-02-15T14:43:07.000Z",c:["布局"],g:["布局","侧边栏"],e:`<p>侧边栏可能会包含相关的文档列表，文档标题以及博客模式下的博主信息。</p>
`,r:{minutes:11.94,words:3582},y:"a",title:"侧边栏",i:"sidebar"},["/zh/guide/layout/sidebar","/zh/guide/layout/sidebar.md"]],["v-569048ed","/zh/guide/layout/slides.html",{d:"2022-02-15T14:43:07.000Z",c:["布局"],g:["布局","幻灯片"],e:`<p><code>vuepress-theme-hope</code> 允许你添加幻灯片页面。</p>
<p>你需要在相应的页面的 frontmatter 中，设置 <code>layout: Slide</code> 来开启幻灯片风格。</p>
`,r:{minutes:.67,words:200},y:"a",title:"幻灯片",i:"slides"},["/zh/guide/layout/slides","/zh/guide/layout/slides.md"]],["v-10e04ba5","/zh/guide/markdown/",{d:"2022-02-15T14:43:07.000Z",e:`<p>除了 VuePress 本身新增了一些 Markdown 语法外，<code>vuepress-theme-hope</code> 通过 [vuepress-plugin-md-enhance][md-enhance]，在 Markdown 中启用了更多的语法与新功能。</p>
`,r:{minutes:.64,words:193},y:"a",title:"Markdown 增强",i:"markdown"},["/zh/guide/markdown/index.html","/zh/guide/markdown/README.md"]],["v-2fc40659","/zh/guide/markdown/align.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","对齐"],e:`<p>通过对 <code>vuepress-plugin-container</code> 进行额外的配置注入，你可以使用</p>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: center
要居中的段落
:::

::: right
要居右的段落
:::
</code></pre></div><p>来对你的段落对齐进行自定义。</p>
`,r:{minutes:.75,words:226},y:"a",title:"自定义对齐",i:"align"},["/zh/guide/markdown/align","/zh/guide/markdown/align.md"]],["v-d1fd9a48","/zh/guide/markdown/attrs.html",{d:"2022-06-14T16:02:38.000Z",c:["Markdown"],g:["Markdown","属性"],e:`<p>你可以使用特殊标记为 Markdown 元素添加属性。</p>
`,r:{minutes:1.35,words:404},y:"a",title:"属性支持",i:"code"},["/zh/guide/markdown/attrs","/zh/guide/markdown/attrs.md"]],["v-4f4535c0","/zh/guide/markdown/chart.html",{d:"2022-03-12T13:49:43.000Z",g:["图表","Markdown"],e:`<p>让你 VuePress 站点中的 Markdown 文件支持图表。</p>
<p>此插件使用 <a href="https://www.chartjs.org/docs/latest/" target="_blank" rel="noopener noreferrer">chart.js</a> 提供相应功能。</p>
`,r:{minutes:4.02,words:1206},y:"a",title:"Chart",i:"rank - Markdown"},["/zh/guide/markdown/chart","/zh/guide/markdown/chart.md"]],["v-41f6df20","/zh/guide/markdown/code-tabs.html",{d:"2022-05-19T15:54:35.000Z",c:["Markdown"],g:["Markdown","代码组"],e:`<p>主题为你带来了代码块分组支持。</p>
`,r:{minutes:1.03,words:310},y:"a",title:"代码块分组",i:"code"},["/zh/guide/markdown/code-tabs","/zh/guide/markdown/code-tabs.md"]],["v-346d913e","/zh/guide/markdown/components.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","组件"],e:`<p>通过使用<code>vuepress-plugin-components</code>，你可以在你的 Markdown 文件中导入和使用一些组件。</p>
<p>可用组件:</p>
<ul>
<li>AudioPlayer</li>
<li>Badge</li>
<li>BiliBili</li>
<li>CodePen</li>
<li>FontIcon</li>
<li>PDF</li>
<li>StackBlitz</li>
<li>VideoPlayer</li>
<li>YouTube</li>
</ul>
<p>默认情况下，<code>&lt;Badge /&gt;</code> 和 <code>&lt;FontIcon /&gt;</code> 是启用的。</p>
<p>要启用组件，你应该使用组件名称数组设置 <code>plugin.components.components</code>。</p>
`,r:{minutes:3.76,words:1127},y:"a",title:"组件",i:"plugin"},["/zh/guide/markdown/components","/zh/guide/markdown/components.md"]],["v-6bb523dd","/zh/guide/markdown/container.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","容器"],e:`<p>主题可以为你添加提示、注释、信息、注意、警告和详情自定义容器的支持。</p>
`,r:{minutes:1.82,words:547},y:"a",title:"自定义容器",i:"customize"},["/zh/guide/markdown/container","/zh/guide/markdown/container.md"]],["v-0f5676d1","/zh/guide/markdown/demo.html",{d:"2022-02-15T14:43:07.000Z",g:["Markdown","代码演示"],e:`<p>让你的 VuePress 站点中的 Markdown 文件支持代码案例。</p>
`,r:{minutes:3.64,words:1092},y:"a",title:"代码演示",i:"discover - Markdown"},["/zh/guide/markdown/demo","/zh/guide/markdown/demo.md"]],["v-2dd47778","/zh/guide/markdown/echarts.html",{d:"2022-05-18T12:22:02.000Z",g:["ECharts","Markdown"],e:`<p>让你 VuePress 站点中的 Markdown 文件支持图表。</p>
<p>此插件使用 <a href="https://echarts.apache.org/zh/index.html" target="_blank" rel="noopener noreferrer">ECharts</a> 提供相应功能。</p>
`,r:{minutes:2.58,words:775},y:"a",title:"ECharts",i:"rank - Markdown"},["/zh/guide/markdown/echarts","/zh/guide/markdown/echarts.md"]],["v-339be72e","/zh/guide/markdown/external.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown"],e:`<p>除了在 Markdown 内部使用新语法来增强内容外，你也可以使用 <code>&lt;iframe&gt;</code> 或 <code>&lt;img&gt;</code> 从外部引入链接来增强你的 Markdown 内容。</p>
`,r:{minutes:1.44,words:433},y:"a",title:"外部引入",i:"link"},["/zh/guide/markdown/external","/zh/guide/markdown/external.md"]],["v-65c1eb64","/zh/guide/markdown/flowchart.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","流程图"],e:`<p>让你的 VuePress 站点中的 Markdown 文件支持流程图。</p>
<p>我们使用 <a href="https://github.com/adrai/flowchart.js" target="_blank" rel="noopener noreferrer">flowchart.js</a> 来支持这一功能。</p>
`,r:{minutes:3.86,words:1158},y:"a",title:"流程图",i:"tree"},["/zh/guide/markdown/flowchart","/zh/guide/markdown/flowchart.md"]],["v-217f6018","/zh/guide/markdown/footnote.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","脚注"],e:`<p>让你的 VuePress 站点中的 Markdown 文件支持脚注。</p>
`,r:{minutes:.89,words:267},y:"a",title:"脚注",i:"quote"},["/zh/guide/markdown/footnote","/zh/guide/markdown/footnote.md"]],["v-17eef9c3","/zh/guide/markdown/image.html",{d:"2022-06-01T16:21:25.000Z",c:["Markdown"],g:["Markdown","图片"],e:`<p>改进 Markdown 中的图像语法以支持颜色方案和大小。</p>
`,r:{minutes:2.31,words:693},y:"a",title:"图片",i:"pic"},["/zh/guide/markdown/image","/zh/guide/markdown/image.md"]],["v-4ee4dd54","/zh/guide/markdown/include.html",{d:"2022-05-17T16:47:04.000Z",g:["Markdown","导入文件"],e:`<p>让你的 VuePress 站点中的 Markdown 文件支持导入其他文件。</p>
`,r:{minutes:1.68,words:503},y:"a",title:"导入文件",i:"markdown - Markdown"},["/zh/guide/markdown/include","/zh/guide/markdown/include.md"]],["v-8e42815c","/zh/guide/markdown/intro.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","介绍"],e:`<p>除了 VuePress 本身新增了一些 Markdown 语法外，<code>vuepress-theme-hope</code> 通过 [vuepress-plugin-md-enhance][md-enhance]，在 Markdown 中启用了更多的语法与新功能。</p>
`,r:{minutes:.67,words:201},y:"a",title:"启用 Markdown 增强",i:"enable"},["/zh/guide/markdown/intro","/zh/guide/markdown/intro.md"]],["v-b0351fb2","/zh/guide/markdown/mark.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","标记"],e:`<p>让你的 VuePress 站点中的 Markdown 文件支持标记。</p>
`,r:{minutes:.4,words:120},y:"a",title:"标记",i:"write"},["/zh/guide/markdown/mark","/zh/guide/markdown/mark.md"]],["v-ede287d6","/zh/guide/markdown/mermaid.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","图表"],e:`<p>让你的 VuePress 站点中的 Markdown 文件支持 <a href="https://mermaid-js.github.io/mermaid/#/" target="_blank" rel="noopener noreferrer">mermaid</a>。</p>
`,r:{minutes:6.02,words:1806},y:"a",title:"Mermaid",i:"diagram"},["/zh/guide/markdown/mermaid","/zh/guide/markdown/mermaid.md"]],["v-71a3ee91","/zh/guide/markdown/others.html",{d:"2022-03-04T12:50:06.000Z",c:["Markdown"],g:["Markdown"],e:`<h2> 链接检查</h2>
<p>主题默认在开发模式下检查你的 Markdown 链接。</p>
<p>你可以在主题选项中通过 <code>plugins.mdEnhance.linkCheck</code> 自定义此功能，你可以选择 <code>'always'</code>、<code>'never'</code>、<code>'dev'</code> 和 <code>'build'</code>。</p>
<h2> GFM</h2>
<p>如果你的文档既在文档站点上提供又直接在 GitHub 上提供，我们在主题选项中提供了 <code>plugins.mdEnhance.gfm</code> 选项来使你的 Markdown 行为与 GitHub 保持一致。</p>`,r:{minutes:.68,words:203},y:"a",title:"其他",i:"more"},["/zh/guide/markdown/others","/zh/guide/markdown/others.md"]],["v-aa2c748e","/zh/guide/markdown/playground.html",{d:"2022-08-13T04:59:36.000Z",c:["Markdown"],g:["Markdown","交互演示"],e:`<p>让你的 VuePress 站点中的 Markdown 文件支持交互演示。</p>
`,r:{minutes:4.1,words:1229},y:"a",title:"交互演示",i:"code"},["/zh/guide/markdown/playground","/zh/guide/markdown/playground.md"]],["v-6c0d160c","/zh/guide/markdown/presentation.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","幻灯片"],e:`<p>让你的 VuePress 站点中的 Markdown 文件支持幻灯片。</p>
<p>我们使用 <a href="https://revealjs.com/" target="_blank" rel="noopener noreferrer">reveal.js</a> 来支持这一功能。</p>
`,r:{minutes:1.77,words:531},y:"a",title:"幻灯片",i:"slides"},["/zh/guide/markdown/presentation","/zh/guide/markdown/presentation.md"]],["v-4e64ed5e","/zh/guide/markdown/stylize.html",{d:"2022-05-26T08:08:32.000Z",g:["样式化","Markdown"],e:`<p>创建行内 snippet，对内联标记进行样式化，包括更改标签、添加属性和修改内容。</p>
`,r:{minutes:1.98,words:593},y:"a",title:"样式化",i:"style - Markdown"},["/zh/guide/markdown/stylize","/zh/guide/markdown/stylize.md"]],["v-5de93946","/zh/guide/markdown/sup-sub.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","上下角标"],e:`<p>让你的 VuePress 站点中的 Markdown 文件支持上下角标。</p>
`,r:{minutes:.51,words:152},y:"a",title:"上下角标",i:"superscript"},["/zh/guide/markdown/sup-sub","/zh/guide/markdown/sup-sub.md"]],["v-75078a16","/zh/guide/markdown/tabs.html",{d:"2022-05-21T11:43:59.000Z",c:["Markdown"],g:["Markdown","选项卡"],e:`<p>让你的 Markdown 文件支持供选项卡。</p>
`,r:{minutes:2.12,words:637},y:"a",title:"选项卡",i:"tab"},["/zh/guide/markdown/tabs","/zh/guide/markdown/tabs.md"]],["v-ced808de","/zh/guide/markdown/tasklist.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","任务列表"],e:`<p>让你的 VuePress 站点中的 Markdown 文件支持任务列表。</p>
`,r:{minutes:.51,words:154},y:"a",title:"任务列表",i:"check"},["/zh/guide/markdown/tasklist","/zh/guide/markdown/tasklist.md"]],["v-e4455092","/zh/guide/markdown/tex.html",{d:"2022-02-15T14:43:07.000Z",c:["Markdown"],g:["Markdown","TEX"],e:`<p>让你的 VuePress 站点中的 Markdown 文件支持  语法。</p>
`,r:{minutes:6.08,words:1823},y:"a",title:"Tex 语法",i:"tex"},["/zh/guide/markdown/tex","/zh/guide/markdown/tex.md"]],["v-643f241c","/zh/guide/markdown/vue-playground.html",{d:"2022-09-12T14:26:29.000Z",e:`<p>让你的 VuePress 站点中的 Markdown 文件支持 vue 交互演示。</p>
`,r:{minutes:1.64,words:492},y:"a",title:"Vue 交互演示",i:"code"},["/zh/guide/markdown/vue-playground","/zh/guide/markdown/vue-playground.md"]],["v-12aba19e","/ru/cookbook/markdown/emoji/",{d:"2022-08-01T02:38:33.000Z",e:`<h2> Люди</h2>
<ul>
<li><a href="/hope/ru/cookbook/markdown/emoji/people.html" target="blank">Посмотреть детали</a></li>
</ul>
<h2> Природа</h2>
<ul>
<li><a href="/hope/ru/cookbook/markdown/emoji/nature.html" target="blank">Посмотреть детали</a></li>
</ul>
<h2> Объект</h2>
<ul>
<li><a href="/hope/ru/cookbook/markdown/emoji/object.html" target="blank">Посмотреть детали</a></li>
</ul>`,r:{minutes:.08,words:25},y:"a",title:"Список эмодзи",i:"emoji"},["/ru/cookbook/markdown/emoji/index.html","/ru/cookbook/markdown/emoji/README.md"]],["v-0db76434","/ru/cookbook/markdown/emoji/nature.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами"],g:["Разметка","Эмодзи"],e:`<ul>
<li>☀️ <code>:sunny:</code></li>
<li>☔ <code>:umbrella:</code></li>
<li>☁️ <code>:cloud:</code></li>
<li>❄️ <code>:snowflake:</code></li>
<li>⛄ <code>:snowman:</code></li>
<li>⚡ <code>:zap:</code></li>
<li>🌀 <code>:cyclone:</code></li>
<li>🌁 <code>:foggy:</code></li>
<li>🌊 <code>:ocean:</code></li>
<li>🐱 <code>:cat:</code></li>
<li>🐶 <code>:dog:</code></li>
<li>🐭 <code>:mouse:</code></li>
<li>🐹 <code>:hamster:</code></li>
<li>🐰 <code>:rabbit:</code></li>
<li>🐺 <code>:wolf:</code></li>
<li>🐸 <code>:frog:</code></li>
<li>🐯 <code>:tiger:</code></li>
<li>🐨 <code>:koala:</code></li>
<li>🐻 <code>:bear:</code></li>
<li>🐷 <code>:pig:</code></li>
<li>🐽 <code>:pig_nose:</code></li>
<li>🐮 <code>:cow:</code></li>
<li>🐗 <code>:boar:</code></li>
<li>🐵 <code>:monkey_face:</code></li>
<li>🐒 <code>:monkey:</code></li>
<li>🐴 <code>:horse:</code></li>
<li>🐎 <code>:racehorse:</code></li>
<li>🐫 <code>:camel:</code></li>
<li>🐑 <code>:sheep:</code></li>
<li>🐘 <code>:elephant:</code></li>
<li>🐼 <code>:panda_face:</code></li>
<li>🐍 <code>:snake:</code></li>
<li>🐦 <code>:bird:</code></li>
<li>🐤 <code>:baby_chick:</code></li>
<li>🐥 <code>:hatched_chick:</code></li>
<li>🐣 <code>:hatching_chick:</code></li>
<li>🐔 <code>:chicken:</code></li>
<li>🐧 <code>:penguin:</code></li>
<li>🐢 <code>:turtle:</code></li>
<li>🐛 <code>:bug:</code></li>
<li>🐝 <code>:honeybee:</code></li>
<li>🐜 <code>:ant:</code></li>
<li>🪲 <code>:beetle:</code></li>
<li>🐌 <code>:snail:</code></li>
<li>🐙 <code>:octopus:</code></li>
<li>🐠 <code>:tropical_fish:</code></li>
<li>🐟 <code>:fish:</code></li>
<li>🐳 <code>:whale:</code></li>
<li>🐋 <code>:whale2:</code></li>
<li>🐬 <code>:dolphin:</code></li>
<li>🐄 <code>:cow2:</code></li>
<li>🐏 <code>:ram:</code></li>
<li>🐀 <code>:rat:</code></li>
<li>🐃 <code>:water_buffalo:</code></li>
<li>🐅 <code>:tiger2:</code></li>
<li>🐇 <code>:rabbit2:</code></li>
<li>🐉 <code>:dragon:</code></li>
<li>🐐 <code>:goat:</code></li>
<li>🐓 <code>:rooster:</code></li>
<li>🐕 <code>:dog2:</code></li>
<li>🐖 <code>:pig2:</code></li>
<li>🐁 <code>:mouse2:</code></li>
<li>🐂 <code>:ox:</code></li>
<li>🐲 <code>:dragon_face:</code></li>
<li>🐡 <code>:blowfish:</code></li>
<li>🐊 <code>:crocodile:</code></li>
<li>🐪 <code>:dromedary_camel:</code></li>
<li>🐆 <code>:leopard:</code></li>
<li>🐈 <code>:cat2:</code></li>
<li>🐩 <code>:poodle:</code></li>
<li>🐾 <code>:paw_prints:</code></li>
<li>💐 <code>:bouquet:</code></li>
<li>🌸 <code>:cherry_blossom:</code></li>
<li>🌷 <code>:tulip:</code></li>
<li>🍀 <code>:four_leaf_clover:</code></li>
<li>🌹 <code>:rose:</code></li>
<li>🌻 <code>:sunflower:</code></li>
<li>🌺 <code>:hibiscus:</code></li>
<li>🍁 <code>:maple_leaf:</code></li>
<li>🍃 <code>:leaves:</code></li>
<li>🍂 <code>:fallen_leaf:</code></li>
<li>🌿 <code>:herb:</code></li>
<li>🍄 <code>:mushroom:</code></li>
<li>🌵 <code>:cactus:</code></li>
<li>🌴 <code>:palm_tree:</code></li>
<li>🌲 <code>:evergreen_tree:</code></li>
<li>🌳 <code>:deciduous_tree:</code></li>
<li>🌰 <code>:chestnut:</code></li>
<li>🌱 <code>:seedling:</code></li>
<li>🌼 <code>:blossom:</code></li>
<li>🌾 <code>:ear_of_rice:</code></li>
<li>🐚 <code>:shell:</code></li>
<li>🌐 <code>:globe_with_meridians:</code></li>
<li>🌞 <code>:sun_with_face:</code></li>
<li>🌝 <code>:full_moon_with_face:</code></li>
<li>🌚 <code>:new_moon_with_face:</code></li>
<li>🌑 <code>:new_moon:</code></li>
<li>🌒 <code>:waxing_crescent_moon:</code></li>
<li>🌓 <code>:first_quarter_moon:</code></li>
<li>🌔 <code>:waxing_gibbous_moon:</code></li>
<li>🌕 <code>:full_moon:</code></li>
<li>🌖 <code>:waning_gibbous_moon:</code></li>
<li>🌗 <code>:last_quarter_moon:</code></li>
<li>🌘 <code>:waning_crescent_moon:</code></li>
<li>🌜 <code>:last_quarter_moon_with_face:</code></li>
<li>🌛 <code>:first_quarter_moon_with_face:</code></li>
<li>🌙 <code>:crescent_moon:</code></li>
<li>🌍 <code>:earth_africa:</code></li>
<li>🌎 <code>:earth_americas:</code></li>
<li>🌏 <code>:earth_asia:</code></li>
<li>🌋 <code>:volcano:</code></li>
<li>🌌 <code>:milky_way:</code></li>
<li>⛅ <code>:partly_sunny:</code></li>
</ul>`,r:{minutes:.79,words:238},y:"a",title:"Эмодзи природа",i:"emoji"},["/ru/cookbook/markdown/emoji/nature","/ru/cookbook/markdown/emoji/nature.md"]],["v-4e419c9c","/ru/cookbook/markdown/emoji/object.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами"],g:["Разметка","Эмодзи"],e:`<ul>
<li>🎍 <code>:bamboo:</code></li>
<li>💝 <code>:gift_heart:</code></li>
<li>🎎 <code>:dolls:</code></li>
<li>🎒 <code>:school_satchel:</code></li>
<li>🎓 <code>:mortar_board:</code></li>
<li>🎏 <code>:flags:</code></li>
<li>🎆 <code>:fireworks:</code></li>
<li>🎇 <code>:sparkler:</code></li>
<li>🎐 <code>:wind_chime:</code></li>
<li>🎑 <code>:rice_scene:</code></li>
<li>🎃 <code>:jack_o_lantern:</code></li>
<li>👻 <code>:ghost:</code></li>
<li>🎅 <code>:santa:</code></li>
<li>🎄 <code>:christmas_tree:</code></li>
<li>🎁 <code>:gift:</code></li>
<li>🔔 <code>:bell:</code></li>
<li>🔕 <code>:no_bell:</code></li>
<li>🎋 <code>:tanabata_tree:</code></li>
<li>🎉 <code>:tada:</code></li>
<li>🎊 <code>:confetti_ball:</code></li>
<li>🎈 <code>:balloon:</code></li>
<li>🔮 <code>:crystal_ball:</code></li>
<li>💿 <code>:cd:</code></li>
<li>📀 <code>:dvd:</code></li>
<li>💾 <code>:floppy_disk:</code></li>
<li>📷 <code>:camera:</code></li>
<li>📹 <code>:video_camera:</code></li>
<li>🎥 <code>:movie_camera:</code></li>
<li>💻 <code>:computer:</code></li>
<li>📺 <code>:tv:</code></li>
<li>📱 <code>:iphone:</code></li>
<li>☎️ <code>:phone:</code></li>
<li>☎️ <code>:telephone:</code></li>
<li>📞 <code>:telephone_receiver:</code></li>
<li>📟 <code>:pager:</code></li>
<li>📠 <code>:fax:</code></li>
<li>💽 <code>:minidisc:</code></li>
<li>📼 <code>:vhs:</code></li>
<li>🔉 <code>:sound:</code></li>
<li>🔈 <code>:speaker:</code></li>
<li>🔇 <code>:mute:</code></li>
<li>📢 <code>:loudspeaker:</code></li>
<li>📣 <code>:mega:</code></li>
<li>⌛ <code>:hourglass:</code></li>
<li>⏳ <code>:hourglass_flowing_sand:</code></li>
<li>⏰ <code>:alarm_clock:</code></li>
<li>⌚ <code>:watch:</code></li>
<li>📻 <code>:radio:</code></li>
<li>📡 <code>:satellite:</code></li>
<li>➿ <code>:loop:</code></li>
<li>🔍 <code>:mag:</code></li>
<li>🔎 <code>:mag_right:</code></li>
<li>🔓 <code>:unlock:</code></li>
<li>🔒 <code>:lock:</code></li>
<li>🔏 <code>:lock_with_ink_pen:</code></li>
<li>🔐 <code>:closed_lock_with_key:</code></li>
<li>🔑 <code>:key:</code></li>
<li>💡 <code>:bulb:</code></li>
<li>🔦 <code>:flashlight:</code></li>
<li>🔆 <code>:high_brightness:</code></li>
<li>🔅 <code>:low_brightness:</code></li>
<li>🔌 <code>:electric_plug:</code></li>
<li>🔋 <code>:battery:</code></li>
<li>📲 <code>:calling:</code></li>
<li>📧 <code>:email:</code></li>
<li>📫 <code>:mailbox:</code></li>
<li>📮 <code>:postbox:</code></li>
<li>🛀 <code>:bath:</code></li>
<li>🛁 <code>:bathtub:</code></li>
<li>🚿 <code>:shower:</code></li>
<li>🚽 <code>:toilet:</code></li>
<li>🔧 <code>:wrench:</code></li>
<li>🔩 <code>:nut_and_bolt:</code></li>
<li>🔨 <code>:hammer:</code></li>
<li>💺 <code>:seat:</code></li>
<li>💰 <code>:moneybag:</code></li>
<li>💴 <code>:yen:</code></li>
<li>💵 <code>:dollar:</code></li>
<li>💷 <code>:pound:</code></li>
<li>💶 <code>:euro:</code></li>
<li>💳 <code>:credit_card:</code></li>
<li>💸 <code>:money_with_wings:</code></li>
<li>📧 <code>:e-mail:</code></li>
<li>📥 <code>:inbox_tray:</code></li>
<li>📤 <code>:outbox_tray:</code></li>
<li>✉️ <code>:envelope:</code></li>
<li>📨 <code>:incoming_envelope:</code></li>
<li>📯 <code>:postal_horn:</code></li>
<li>📪 <code>:mailbox_closed:</code></li>
<li>📬 <code>:mailbox_with_mail:</code></li>
<li>📭 <code>:mailbox_with_no_mail:</code></li>
<li>📦 <code>:package:</code></li>
<li>🚪 <code>:door:</code></li>
<li>🚬 <code>:smoking:</code></li>
<li>💣 <code>:bomb:</code></li>
<li>🔫 <code>:gun:</code></li>
<li>🔪 <code>:hocho:</code></li>
<li>💊 <code>:pill:</code></li>
<li>💉 <code>:syringe:</code></li>
<li>📄 <code>:page_facing_up:</code></li>
<li>📃 <code>:page_with_curl:</code></li>
<li>📑 <code>:bookmark_tabs:</code></li>
<li>📊 <code>:bar_chart:</code></li>
<li>📈 <code>:chart_with_upwards_trend:</code></li>
<li>📉 <code>:chart_with_downwards_trend:</code></li>
<li>📜 <code>:scroll:</code></li>
<li>📋 <code>:clipboard:</code></li>
<li>📆 <code>:calendar:</code></li>
<li>📅 <code>:date:</code></li>
<li>📇 <code>:card_index:</code></li>
<li>📁 <code>:file_folder:</code></li>
<li>📂 <code>:open_file_folder:</code></li>
<li>✂️ <code>:scissors:</code></li>
<li>📌 <code>:pushpin:</code></li>
<li>📎 <code>:paperclip:</code></li>
<li>✒️ <code>:black_nib:</code></li>
<li>✏️ <code>:pencil2:</code></li>
<li>📏 <code>:straight_ruler:</code></li>
<li>📐 <code>:triangular_ruler:</code></li>
<li>📕 <code>:closed_book:</code></li>
<li>📗 <code>:green_book:</code></li>
<li>📘 <code>:blue_book:</code></li>
<li>📙 <code>:orange_book:</code></li>
<li>📓 <code>:notebook:</code></li>
<li>📔 <code>:notebook_with_decorative_cover:</code></li>
<li>📒 <code>:ledger:</code></li>
<li>📚 <code>:books:</code></li>
<li>🔖 <code>:bookmark:</code></li>
<li>📛 <code>:name_badge:</code></li>
<li>🔬 <code>:microscope:</code></li>
<li>🔭 <code>:telescope:</code></li>
<li>📰 <code>:newspaper:</code></li>
<li>🏈 <code>:football:</code></li>
<li>🏀 <code>:basketball:</code></li>
<li>⚽ <code>:soccer:</code></li>
<li>⚾ <code>:baseball:</code></li>
<li>🎾 <code>:tennis:</code></li>
<li>🎱 <code>:8ball:</code></li>
<li>🏉 <code>:rugby_football:</code></li>
<li>🎳 <code>:bowling:</code></li>
<li>⛳ <code>:golf:</code></li>
<li>🚵 <code>:mountain_bicyclist:</code></li>
<li>🚴 <code>:bicyclist:</code></li>
<li>🏇 <code>:horse_racing:</code></li>
<li>🏂 <code>:snowboarder:</code></li>
<li>🏊 <code>:swimmer:</code></li>
<li>🏄 <code>:surfer:</code></li>
<li>🎿 <code>:ski:</code></li>
<li>♠️ <code>:spades:</code></li>
<li>♥️ <code>:hearts:</code></li>
<li>♣️ <code>:clubs:</code></li>
<li>♦️ <code>:diamonds:</code></li>
<li>💎 <code>:gem:</code></li>
<li>💍 <code>:ring:</code></li>
<li>🏆 <code>:trophy:</code></li>
<li>🎼 <code>:musical_score:</code></li>
<li>🎹 <code>:musical_keyboard:</code></li>
<li>🎻 <code>:violin:</code></li>
<li>👾 <code>:space_invader:</code></li>
<li>🎮 <code>:video_game:</code></li>
<li>🃏 <code>:black_joker:</code></li>
<li>🎴 <code>:flower_playing_cards:</code></li>
<li>🎲 <code>:game_die:</code></li>
<li>🎯 <code>:dart:</code></li>
<li>🀄 <code>:mahjong:</code></li>
<li>🎬 <code>:clapper:</code></li>
<li>📝 <code>:memo:</code></li>
<li>📝 <code>:pencil:</code></li>
<li>📖 <code>:book:</code></li>
<li>🎨 <code>:art:</code></li>
<li>🎤 <code>:microphone:</code></li>
<li>🎧 <code>:headphones:</code></li>
<li>🎺 <code>:trumpet:</code></li>
<li>🎷 <code>:saxophone:</code></li>
<li>🎸 <code>:guitar:</code></li>
<li>👞 <code>:shoe:</code></li>
<li>👡 <code>:sandal:</code></li>
<li>👠 <code>:high_heel:</code></li>
<li>💄 <code>:lipstick:</code></li>
<li>👢 <code>:boot:</code></li>
<li>👕 <code>:shirt:</code></li>
<li>👕 <code>:tshirt:</code></li>
<li>👔 <code>:necktie:</code></li>
<li>👚 <code>:womans_clothes:</code></li>
<li>👗 <code>:dress:</code></li>
<li>🎽 <code>:running_shirt_with_sash:</code></li>
<li>👖 <code>:jeans:</code></li>
<li>👘 <code>:kimono:</code></li>
<li>👙 <code>:bikini:</code></li>
<li>🎀 <code>:ribbon:</code></li>
<li>🎩 <code>:tophat:</code></li>
<li>👑 <code>:crown:</code></li>
<li>👒 <code>:womans_hat:</code></li>
<li>👞 <code>:mans_shoe:</code></li>
<li>🌂 <code>:closed_umbrella:</code></li>
<li>💼 <code>:briefcase:</code></li>
<li>👜 <code>:handbag:</code></li>
<li>👝 <code>:pouch:</code></li>
<li>👛 <code>:purse:</code></li>
<li>👓 <code>:eyeglasses:</code></li>
<li>🎣 <code>:fishing_pole_and_fish:</code></li>
<li>☕ <code>:coffee:</code></li>
<li>🍵 <code>:tea:</code></li>
<li>🍶 <code>:sake:</code></li>
<li>🍼 <code>:baby_bottle:</code></li>
<li>🍺 <code>:beer:</code></li>
<li>🍻 <code>:beers:</code></li>
<li>🍸 <code>:cocktail:</code></li>
<li>🍹 <code>:tropical_drink:</code></li>
<li>🍷 <code>:wine_glass:</code></li>
<li>🍴 <code>:fork_and_knife:</code></li>
<li>🍕 <code>:pizza:</code></li>
<li>🍔 <code>:hamburger:</code></li>
<li>🍟 <code>:fries:</code></li>
<li>🍗 <code>:poultry_leg:</code></li>
<li>🍖 <code>:meat_on_bone:</code></li>
<li>🍝 <code>:spaghetti:</code></li>
<li>🍛 <code>:curry:</code></li>
<li>🍤 <code>:fried_shrimp:</code></li>
<li>🍱 <code>:bento:</code></li>
<li>🍣 <code>:sushi:</code></li>
<li>🍥 <code>:fish_cake:</code></li>
<li>🍙 <code>:rice_ball:</code></li>
<li>🍘 <code>:rice_cracker:</code></li>
<li>🍚 <code>:rice:</code></li>
<li>🍜 <code>:ramen:</code></li>
<li>🍲 <code>:stew:</code></li>
<li>🍢 <code>:oden:</code></li>
<li>🍡 <code>:dango:</code></li>
<li>🥚 <code>:egg:</code></li>
<li>🍞 <code>:bread:</code></li>
<li>🍩 <code>:doughnut:</code></li>
<li>🍮 <code>:custard:</code></li>
<li>🍦 <code>:icecream:</code></li>
<li>🍨 <code>:ice_cream:</code></li>
<li>🍧 <code>:shaved_ice:</code></li>
<li>🎂 <code>:birthday:</code></li>
<li>🍰 <code>:cake:</code></li>
<li>🍪 <code>:cookie:</code></li>
<li>🍫 <code>:chocolate_bar:</code></li>
<li>🍬 <code>:candy:</code></li>
<li>🍭 <code>:lollipop:</code></li>
<li>🍯 <code>:honey_pot:</code></li>
<li>🍎 <code>:apple:</code></li>
<li>🍏 <code>:green_apple:</code></li>
<li>🍊 <code>:tangerine:</code></li>
<li>🍋 <code>:lemon:</code></li>
<li>🍒 <code>:cherries:</code></li>
<li>🍇 <code>:grapes:</code></li>
<li>🍉 <code>:watermelon:</code></li>
<li>🍓 <code>:strawberry:</code></li>
<li>🍑 <code>:peach:</code></li>
<li>🍈 <code>:melon:</code></li>
<li>🍌 <code>:banana:</code></li>
<li>🍐 <code>:pear:</code></li>
<li>🍍 <code>:pineapple:</code></li>
<li>🍠 <code>:sweet_potato:</code></li>
<li>🍆 <code>:eggplant:</code></li>
<li>🍅 <code>:tomato:</code></li>
<li>🌽 <code>:corn:</code></li>
</ul>`,r:{minutes:1.78,words:534},y:"a",title:"Эмодзи объект",i:"emoji"},["/ru/cookbook/markdown/emoji/object","/ru/cookbook/markdown/emoji/object.md"]],["v-42f5c168","/ru/cookbook/markdown/emoji/people.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами"],g:["Разметка","Эмодзи"],e:`<ul>
<li>😄 <code>:smile:</code></li>
<li>😆 <code>:laughing:</code></li>
<li>😊 <code>:blush:</code></li>
<li>😃 <code>:smiley:</code></li>
<li>😏 <code>:smirk:</code></li>
<li>😍 <code>:heart_eyes:</code></li>
<li>😘 <code>:kissing_heart:</code></li>
<li>😚 <code>:kissing_closed_eyes:</code></li>
<li>😳 <code>:flushed:</code></li>
<li>😌 <code>:relieved:</code></li>
<li>😆 <code>:satisfied:</code></li>
<li>😁 <code>:grin:</code></li>
<li>😉 <code>:wink:</code></li>
<li>😜 <code>:stuck_out_tongue_winking_eye:</code></li>
<li>😝 <code>:stuck_out_tongue_closed_eyes:</code></li>
<li>😀 <code>:grinning:</code></li>
<li>😗 <code>:kissing:</code></li>
<li>😙 <code>:kissing_smiling_eyes:</code></li>
<li>😛 <code>:stuck_out_tongue:</code></li>
<li>😴 <code>:sleeping:</code></li>
<li>😟 <code>:worried:</code></li>
<li>😦 <code>:frowning:</code></li>
<li>😧 <code>:anguished:</code></li>
<li>😮 <code>:open_mouth:</code></li>
<li>😬 <code>:grimacing:</code></li>
<li>😕 <code>:confused:</code></li>
<li>😯 <code>:hushed:</code></li>
<li>😑 <code>:expressionless:</code></li>
<li>😒 <code>:unamused:</code></li>
<li>😅 <code>:sweat_smile:</code></li>
<li>😓 <code>:sweat:</code></li>
<li>😥 <code>:disappointed_relieved:</code></li>
<li>😩 <code>:weary:</code></li>
<li>😔 <code>:pensive:</code></li>
<li>😞 <code>:disappointed:</code></li>
<li>😖 <code>:confounded:</code></li>
<li>😨 <code>:fearful:</code></li>
<li>😰 <code>:cold_sweat:</code></li>
<li>😣 <code>:persevere:</code></li>
<li>😢 <code>:cry:</code></li>
<li>😭 <code>:sob:</code></li>
<li>😂 <code>:joy:</code></li>
<li>😲 <code>:astonished:</code></li>
<li>😱 <code>:scream:</code></li>
<li>😫 <code>:tired_face:</code></li>
<li>😠 <code>:angry:</code></li>
<li>😡 <code>:rage:</code></li>
<li>😤 <code>:triumph:</code></li>
<li>😪 <code>:sleepy:</code></li>
<li>😋 <code>:yum:</code></li>
<li>😷 <code>:mask:</code></li>
<li>😎 <code>:sunglasses:</code></li>
<li>😵 <code>:dizzy_face:</code></li>
<li>👿 <code>:imp:</code></li>
<li>😈 <code>:smiling_imp:</code></li>
<li>😐 <code>:neutral_face:</code></li>
<li>😶 <code>:no_mouth:</code></li>
<li>😇 <code>:innocent:</code></li>
<li>👽 <code>:alien:</code></li>
<li>💛 <code>:yellow_heart:</code></li>
<li>💙 <code>:blue_heart:</code></li>
<li>💜 <code>:purple_heart:</code></li>
<li>❤️ <code>:heart:</code></li>
<li>💚 <code>:green_heart:</code></li>
<li>💔 <code>:broken_heart:</code></li>
<li>💓 <code>:heartbeat:</code></li>
<li>💗 <code>:heartpulse:</code></li>
<li>💕 <code>:two_hearts:</code></li>
<li>💞 <code>:revolving_hearts:</code></li>
<li>💘 <code>:cupid:</code></li>
<li>💖 <code>:sparkling_heart:</code></li>
<li>✨ <code>:sparkles:</code></li>
<li>⭐ <code>:star:</code></li>
<li>🌟 <code>:star2:</code></li>
<li>💫 <code>:dizzy:</code></li>
<li>💥 <code>:boom:</code></li>
<li>💥 <code>:collision:</code></li>
<li>💢 <code>:anger:</code></li>
<li>❗ <code>:exclamation:</code></li>
<li>❓ <code>:question:</code></li>
<li>❕ <code>:grey_exclamation:</code></li>
<li>❔ <code>:grey_question:</code></li>
<li>💤 <code>:zzz:</code></li>
<li>💨 <code>:dash:</code></li>
<li>💦 <code>:sweat_drops:</code></li>
<li>🎶 <code>:notes:</code></li>
<li>🎵 <code>:musical_note:</code></li>
<li>🔥 <code>:fire:</code></li>
<li>💩 <code>:hankey:</code></li>
<li>💩 <code>:poop:</code></li>
<li>💩 <code>:shit:</code></li>
<li>👍 <code>:+1:</code></li>
<li>👍 <code>:thumbsup:</code></li>
<li>👎 <code>:-1:</code></li>
<li>👎 <code>:thumbsdown:</code></li>
<li>👌 <code>:ok_hand:</code></li>
<li>👊 <code>:punch:</code></li>
<li>👊 <code>:facepunch:</code></li>
<li>✊ <code>:fist:</code></li>
<li>✌️ <code>:v:</code></li>
<li>👋 <code>:wave:</code></li>
<li>✋ <code>:hand:</code></li>
<li>✋ <code>:raised_hand:</code></li>
<li>👐 <code>:open_hands:</code></li>
<li>☝️ <code>:point_up:</code></li>
<li>👇 <code>:point_down:</code></li>
<li>👈 <code>:point_left:</code></li>
<li>👉 <code>:point_right:</code></li>
<li>🙌 <code>:raised_hands:</code></li>
<li>🙏 <code>:pray:</code></li>
<li>👆 <code>:point_up_2:</code></li>
<li>👏 <code>:clap:</code></li>
<li>💪 <code>:muscle:</code></li>
<li>🤘 <code>:metal:</code></li>
<li>🖕 <code>:fu:</code></li>
<li>🏃 <code>:runner:</code></li>
<li>🏃 <code>:running:</code></li>
<li>👫 <code>:couple:</code></li>
<li>👪 <code>:family:</code></li>
<li>👬 <code>:two_men_holding_hands:</code></li>
<li>👭 <code>:two_women_holding_hands:</code></li>
<li>💃 <code>:dancer:</code></li>
<li>👯 <code>:dancers:</code></li>
<li>🙆‍♀️ <code>:ok_woman:</code></li>
<li>🙅 <code>:no_good:</code></li>
<li>💁 <code>:information_desk_person:</code></li>
<li>🙋 <code>:raising_hand:</code></li>
<li>👰‍♀️ <code>:bride_with_veil:</code></li>
<li>:person_with_pouting_face: <code>:person_with_pouting_face:</code></li>
<li>:person_frowning: <code>:person_frowning:</code></li>
<li>🙇 <code>:bow:</code></li>
<li>💑 <code>:couple_with_heart:</code></li>
<li>💆 <code>:massage:</code></li>
<li>💇 <code>:haircut:</code></li>
<li>💅 <code>:nail_care:</code></li>
<li>👦 <code>:boy:</code></li>
<li>👧 <code>:girl:</code></li>
<li>👩 <code>:woman:</code></li>
<li>👨 <code>:man:</code></li>
<li>👶 <code>:baby:</code></li>
<li>👵 <code>:older_woman:</code></li>
<li>👴 <code>:older_man:</code></li>
<li>:person_with_blond_hair: <code>:person_with_blond_hair:</code></li>
<li>👲 <code>:man_with_gua_pi_mao:</code></li>
<li>👳‍♂️ <code>:man_with_turban:</code></li>
<li>👷 <code>:construction_worker:</code></li>
<li>👮 <code>:cop:</code></li>
<li>👼 <code>:angel:</code></li>
<li>👸 <code>:princess:</code></li>
<li>😺 <code>:smiley_cat:</code></li>
<li>😸 <code>:smile_cat:</code></li>
<li>😻 <code>:heart_eyes_cat:</code></li>
<li>😽 <code>:kissing_cat:</code></li>
<li>😼 <code>:smirk_cat:</code></li>
<li>🙀 <code>:scream_cat:</code></li>
<li>😿 <code>:crying_cat_face:</code></li>
<li>😹 <code>:joy_cat:</code></li>
<li>😾 <code>:pouting_cat:</code></li>
<li>👹 <code>:japanese_ogre:</code></li>
<li>👺 <code>:japanese_goblin:</code></li>
<li>🙈 <code>:see_no_evil:</code></li>
<li>🙉 <code>:hear_no_evil:</code></li>
<li>🙊 <code>:speak_no_evil:</code></li>
<li>💂‍♂️ <code>:guardsman:</code></li>
<li>💀 <code>:skull:</code></li>
<li>🐾 <code>:feet:</code></li>
<li>👄 <code>:lips:</code></li>
<li>💋 <code>:kiss:</code></li>
<li>💧 <code>:droplet:</code></li>
<li>👂 <code>:ear:</code></li>
<li>👀 <code>:eyes:</code></li>
<li>👃 <code>:nose:</code></li>
<li>👅 <code>:tongue:</code></li>
<li>💌 <code>:love_letter:</code></li>
<li>👤 <code>:bust_in_silhouette:</code></li>
<li>👥 <code>:busts_in_silhouette:</code></li>
<li>💬 <code>:speech_balloon:</code></li>
<li>💭 <code>:thought_balloon:</code></li>
</ul>`,r:{minutes:1.23,words:368},y:"a",title:"Эмодзи люди",i:"emoji"},["/ru/cookbook/markdown/emoji/people","/ru/cookbook/markdown/emoji/people.md"]],["v-c02aaf60","/ru/cookbook/markdown/emoji/place.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами"],g:["Разметка","Эмодзи"],e:`<ul>
<li>🏠 <code>:house:</code></li>
<li>🏡 <code>:house_with_garden:</code></li>
<li>🏫 <code>:school:</code></li>
<li>🏢 <code>:office:</code></li>
<li>🏣 <code>:post_office:</code></li>
<li>🏥 <code>:hospital:</code></li>
<li>🏦 <code>:bank:</code></li>
<li>🏪 <code>:convenience_store:</code></li>
<li>🏩 <code>:love_hotel:</code></li>
<li>🏨 <code>:hotel:</code></li>
<li>💒 <code>:wedding:</code></li>
<li>⛪ <code>:church:</code></li>
<li>🏬 <code>:department_store:</code></li>
<li>🏤 <code>:european_post_office:</code></li>
<li>🌇 <code>:city_sunrise:</code></li>
<li>🌆 <code>:city_sunset:</code></li>
<li>🏯 <code>:japanese_castle:</code></li>
<li>🏰 <code>:european_castle:</code></li>
<li>⛺ <code>:tent:</code></li>
<li>🏭 <code>:factory:</code></li>
<li>🗼 <code>:tokyo_tower:</code></li>
<li>🗾 <code>:japan:</code></li>
<li>🗻 <code>:mount_fuji:</code></li>
<li>🌄 <code>:sunrise_over_mountains:</code></li>
<li>🌅 <code>:sunrise:</code></li>
<li>🌠 <code>:stars:</code></li>
<li>🗽 <code>:statue_of_liberty:</code></li>
<li>🌉 <code>:bridge_at_night:</code></li>
<li>🎠 <code>:carousel_horse:</code></li>
<li>🌈 <code>:rainbow:</code></li>
<li>🎡 <code>:ferris_wheel:</code></li>
<li>⛲ <code>:fountain:</code></li>
<li>🎢 <code>:roller_coaster:</code></li>
<li>🚢 <code>:ship:</code></li>
<li>🚤 <code>:speedboat:</code></li>
<li>⛵ <code>:boat:</code></li>
<li>⛵ <code>:sailboat:</code></li>
<li>🚣 <code>:rowboat:</code></li>
<li>⚓ <code>:anchor:</code></li>
<li>🚀 <code>:rocket:</code></li>
<li>✈️ <code>:airplane:</code></li>
<li>🚁 <code>:helicopter:</code></li>
<li>🚂 <code>:steam_locomotive:</code></li>
<li>🚊 <code>:tram:</code></li>
<li>🚞 <code>:mountain_railway:</code></li>
<li>🚲 <code>:bike:</code></li>
<li>🚡 <code>:aerial_tramway:</code></li>
<li>🚟 <code>:suspension_railway:</code></li>
<li>🚠 <code>:mountain_cableway:</code></li>
<li>🚜 <code>:tractor:</code></li>
<li>🚙 <code>:blue_car:</code></li>
<li>🚘 <code>:oncoming_automobile:</code></li>
<li>🚗 <code>:car:</code></li>
<li>🚗 <code>:red_car:</code></li>
<li>🚕 <code>:taxi:</code></li>
<li>🚖 <code>:oncoming_taxi:</code></li>
<li>🚛 <code>:articulated_lorry:</code></li>
<li>🚌 <code>:bus:</code></li>
<li>🚍 <code>:oncoming_bus:</code></li>
<li>🚨 <code>:rotating_light:</code></li>
<li>🚓 <code>:police_car:</code></li>
<li>🚔 <code>:oncoming_police_car:</code></li>
<li>🚒 <code>:fire_engine:</code></li>
<li>🚑 <code>:ambulance:</code></li>
<li>🚐 <code>:minibus:</code></li>
<li>🚚 <code>:truck:</code></li>
<li>🚋 <code>:train:</code></li>
<li>🚉 <code>:station:</code></li>
<li>🚆 <code>:train2:</code></li>
<li>🚅 <code>:bullettrain_front:</code></li>
<li>🚄 <code>:bullettrain_side:</code></li>
<li>🚈 <code>:light_rail:</code></li>
<li>🚝 <code>:monorail:</code></li>
<li>🚃 <code>:railway_car:</code></li>
<li>🚎 <code>:trolleybus:</code></li>
<li>🎫 <code>:ticket:</code></li>
<li>⛽ <code>:fuelpump:</code></li>
<li>🚦 <code>:vertical_traffic_light:</code></li>
<li>🚥 <code>:traffic_light:</code></li>
<li>⚠️ <code>:warning:</code></li>
<li>🚧 <code>:construction:</code></li>
<li>🔰 <code>:beginner:</code></li>
<li>🏧 <code>:atm:</code></li>
<li>🎰 <code>:slot_machine:</code></li>
<li>🚏 <code>:busstop:</code></li>
<li>💈 <code>:barber:</code></li>
<li>♨️ <code>:hotsprings:</code></li>
<li>🏁 <code>:checkered_flag:</code></li>
<li>🎌 <code>:crossed_flags:</code></li>
<li>🏮 <code>:izakaya_lantern:</code></li>
<li>🗿 <code>:moyai:</code></li>
<li>🎪 <code>:circus_tent:</code></li>
<li>🎭 <code>:performing_arts:</code></li>
<li>📍 <code>:round_pushpin:</code></li>
<li>🚩 <code>:triangular_flag_on_post:</code></li>
</ul>`,r:{minutes:.67,words:202},y:"a",title:"Эмодзи размещения",i:"emoji"},["/ru/cookbook/markdown/emoji/place","/ru/cookbook/markdown/emoji/place.md"]],["v-f2894c3a","/ru/cookbook/markdown/emoji/symbol.html",{d:"2022-08-01T02:38:33.000Z",c:["Учебник с примерами"],g:["Разметка","Эмодзи"],e:`<ul>
<li>1️⃣ <code>:one:</code></li>
<li>2️⃣ <code>:two:</code></li>
<li>3️⃣ <code>:three:</code></li>
<li>4️⃣ <code>:four:</code></li>
<li>5️⃣ <code>:five:</code></li>
<li>6️⃣ <code>:six:</code></li>
<li>7️⃣ <code>:seven:</code></li>
<li>8️⃣ <code>:eight:</code></li>
<li>9️⃣ <code>:nine:</code></li>
<li>🔟 <code>:keycap_ten:</code></li>
<li>🔢 <code>:1234:</code></li>
<li>0️⃣ <code>:zero:</code></li>
<li>#️⃣ <code>:hash:</code></li>
<li>🔣 <code>:symbols:</code></li>
<li>◀️ <code>:arrow_backward:</code></li>
<li>⬇️ <code>:arrow_down:</code></li>
<li>▶️ <code>:arrow_forward:</code></li>
<li>⬅️ <code>:arrow_left:</code></li>
<li>🔠 <code>:capital_abcd:</code></li>
<li>🔡 <code>:abcd:</code></li>
<li>🔤 <code>:abc:</code></li>
<li>↙️ <code>:arrow_lower_left:</code></li>
<li>↘️ <code>:arrow_lower_right:</code></li>
<li>➡️ <code>:arrow_right:</code></li>
<li>⬆️ <code>:arrow_up:</code></li>
<li>↖️ <code>:arrow_upper_left:</code></li>
<li>↗️ <code>:arrow_upper_right:</code></li>
<li>⏬ <code>:arrow_double_down:</code></li>
<li>⏫ <code>:arrow_double_up:</code></li>
<li>🔽 <code>:arrow_down_small:</code></li>
<li>⤵️ <code>:arrow_heading_down:</code></li>
<li>⤴️ <code>:arrow_heading_up:</code></li>
<li>↩️ <code>:leftwards_arrow_with_hook:</code></li>
<li>↪️ <code>:arrow_right_hook:</code></li>
<li>↔️ <code>:left_right_arrow:</code></li>
<li>↕️ <code>:arrow_up_down:</code></li>
<li>🔼 <code>:arrow_up_small:</code></li>
<li>🔃 <code>:arrows_clockwise:</code></li>
<li>🔄 <code>:arrows_counterclockwise:</code></li>
<li>⏪ <code>:rewind:</code></li>
<li>⏩ <code>:fast_forward:</code></li>
<li>ℹ️ <code>:information_source:</code></li>
<li>🆗 <code>:ok:</code></li>
<li>🔀 <code>:twisted_rightwards_arrows:</code></li>
<li>🔁 <code>:repeat:</code></li>
<li>🔂 <code>:repeat_one:</code></li>
<li>🆕 <code>:new:</code></li>
<li>🔝 <code>:top:</code></li>
<li>🆙 <code>:up:</code></li>
<li>🆒 <code>:cool:</code></li>
<li>🆓 <code>:free:</code></li>
<li>🆖 <code>:ng:</code></li>
<li>🎦 <code>:cinema:</code></li>
<li>🈁 <code>:koko:</code></li>
<li>📶 <code>:signal_strength:</code></li>
<li>🈂️ <code>:sa:</code></li>
<li>🚻 <code>:restroom:</code></li>
<li>🚹 <code>:mens:</code></li>
<li>🚺 <code>:womens:</code></li>
<li>🚼 <code>:baby_symbol:</code></li>
<li>🚭 <code>:no_smoking:</code></li>
<li>🅿️ <code>:parking:</code></li>
<li>♿ <code>:wheelchair:</code></li>
<li>🚇 <code>:metro:</code></li>
<li>🛄 <code>:baggage_claim:</code></li>
<li>🉑 <code>:accept:</code></li>
<li>🚾 <code>:wc:</code></li>
<li>🚰 <code>:potable_water:</code></li>
<li>🚮 <code>:put_litter_in_its_place:</code></li>
<li>㊙️ <code>:secret:</code></li>
<li>㊗️ <code>:congratulations:</code></li>
<li>Ⓜ️ <code>:m:</code></li>
<li>🛂 <code>:passport_control:</code></li>
<li>🛅 <code>:left_luggage:</code></li>
<li>🛃 <code>:customs:</code></li>
<li>🉐 <code>:ideograph_advantage:</code></li>
<li>🆑 <code>:cl:</code></li>
<li>🆘 <code>:sos:</code></li>
<li>🆔 <code>:id:</code></li>
<li>🚫 <code>:no_entry_sign:</code></li>
<li>🔞 <code>:underage:</code></li>
<li>📵 <code>:no_mobile_phones:</code></li>
<li>🚯 <code>:do_not_litter:</code></li>
<li>🚱 <code>:non-potable_water:</code></li>
<li>🚳 <code>:no_bicycles:</code></li>
<li>🚷 <code>:no_pedestrians:</code></li>
<li>🚸 <code>:children_crossing:</code></li>
<li>⛔ <code>:no_entry:</code></li>
<li>✳️ <code>:eight_spoked_asterisk:</code></li>
<li>❇️ <code>:sparkle:</code></li>
<li>✴️ <code>:eight_pointed_black_star:</code></li>
<li>💟 <code>:heart_decoration:</code></li>
<li>🆚 <code>:vs:</code></li>
<li>📳 <code>:vibration_mode:</code></li>
<li>📴 <code>:mobile_phone_off:</code></li>
<li>💹 <code>:chart:</code></li>
<li>💱 <code>:currency_exchange:</code></li>
<li>♈ <code>:aries:</code></li>
<li>♉ <code>:taurus:</code></li>
<li>♊ <code>:gemini:</code></li>
<li>♋ <code>:cancer:</code></li>
<li>♌ <code>:leo:</code></li>
<li>♍ <code>:virgo:</code></li>
<li>♎ <code>:libra:</code></li>
<li>♏ <code>:scorpius:</code></li>
<li>♐ <code>:sagittarius:</code></li>
<li>♑ <code>:capricorn:</code></li>
<li>♒ <code>:aquarius:</code></li>
<li>♓ <code>:pisces:</code></li>
<li>⛎ <code>:ophiuchus:</code></li>
<li>🔯 <code>:six_pointed_star:</code></li>
<li>❎ <code>:negative_squared_cross_mark:</code></li>
<li>🅰️ <code>:a:</code></li>
<li>🅱️ <code>:b:</code></li>
<li>🆎 <code>:ab:</code></li>
<li>🅾️ <code>:o2:</code></li>
<li>💠 <code>:diamond_shape_with_a_dot_inside:</code></li>
<li>♻️ <code>:recycle:</code></li>
<li>🔚 <code>:end:</code></li>
<li>🔙 <code>:back:</code></li>
<li>🔛 <code>:on:</code></li>
<li>🔜 <code>:soon:</code></li>
<li>🕐 <code>:clock1:</code></li>
<li>🕜 <code>:clock130:</code></li>
<li>🕙 <code>:clock10:</code></li>
<li>🕥 <code>:clock1030:</code></li>
<li>🕚 <code>:clock11:</code></li>
<li>🕦 <code>:clock1130:</code></li>
<li>🕛 <code>:clock12:</code></li>
<li>🕧 <code>:clock1230:</code></li>
<li>🕑 <code>:clock2:</code></li>
<li>🕝 <code>:clock230:</code></li>
<li>🕒 <code>:clock3:</code></li>
<li>🕞 <code>:clock330:</code></li>
<li>🕓 <code>:clock4:</code></li>
<li>🕟 <code>:clock430:</code></li>
<li>🕔 <code>:clock5:</code></li>
<li>🕠 <code>:clock530:</code></li>
<li>🕕 <code>:clock6:</code></li>
<li>🕡 <code>:clock630:</code></li>
<li>🕖 <code>:clock7:</code></li>
<li>🕢 <code>:clock730:</code></li>
<li>🕗 <code>:clock8:</code></li>
<li>🕣 <code>:clock830:</code></li>
<li>🕘 <code>:clock9:</code></li>
<li>🕤 <code>:clock930:</code></li>
<li>💲 <code>:heavy_dollar_sign:</code></li>
<li>©️ <code>:copyright:</code></li>
<li>®️ <code>:registered:</code></li>
<li>™️ <code>:tm:</code></li>
<li>❌ <code>:x:</code></li>
<li>❗ <code>:heavy_exclamation_mark:</code></li>
<li>‼️ <code>:bangbang:</code></li>
<li>⁉️ <code>:interrobang:</code></li>
<li>⭕ <code>:o:</code></li>
<li>✖️ <code>:heavy_multiplication_x:</code></li>
<li>➕ <code>:heavy_plus_sign:</code></li>
<li>➖ <code>:heavy_minus_sign:</code></li>
<li>➗ <code>:heavy_division_sign:</code></li>
<li>💮 <code>:white_flower:</code></li>
<li>💯 <code>:100:</code></li>
<li>✔️ <code>:heavy_check_mark:</code></li>
<li>☑️ <code>:ballot_box_with_check:</code></li>
<li>🔘 <code>:radio_button:</code></li>
<li>🔗 <code>:link:</code></li>
<li>➰ <code>:curly_loop:</code></li>
<li>〰️ <code>:wavy_dash:</code></li>
<li>〽️ <code>:part_alternation_mark:</code></li>
<li>🔱 <code>:trident:</code></li>
<li>▪️ <code>:black_small_square:</code></li>
<li>▫️ <code>:white_small_square:</code></li>
<li>◾ <code>:black_medium_small_square:</code></li>
<li>◽ <code>:white_medium_small_square:</code></li>
<li>◼️ <code>:black_medium_square:</code></li>
<li>◻️ <code>:white_medium_square:</code></li>
<li>⬛ <code>:black_large_square:</code></li>
<li>⬜ <code>:white_large_square:</code></li>
<li>✅ <code>:white_check_mark:</code></li>
<li>🔲 <code>:black_square_button:</code></li>
<li>🔳 <code>:white_square_button:</code></li>
<li>⚫ <code>:black_circle:</code></li>
<li>⚪ <code>:white_circle:</code></li>
<li>🔴 <code>:red_circle:</code></li>
<li>🔵 <code>:large_blue_circle:</code></li>
<li>🔷 <code>:large_blue_diamond:</code></li>
<li>🔶 <code>:large_orange_diamond:</code></li>
<li>🔹 <code>:small_blue_diamond:</code></li>
<li>🔸 <code>:small_orange_diamond:</code></li>
<li>🔺 <code>:small_red_triangle:</code></li>
<li>🔻 <code>:small_red_triangle_down:</code></li>
</ul>`,r:{minutes:1.31,words:394},y:"a",title:"Эмодзи символа",i:"emoji"},["/ru/cookbook/markdown/emoji/symbol","/ru/cookbook/markdown/emoji/symbol.md"]],["v-75aa21da","/zh/cookbook/markdown/emoji/",{d:"2022-03-05T13:20:25.000Z",e:`<h2> 人物</h2>
<ul>
<li><a href="/hope/zh/cookbook/markdown/emoji/people.html" target="blank">点击前往</a></li>
</ul>
<h2> 自然</h2>
<ul>
<li><a href="/hope/zh/cookbook/markdown/emoji/nature.html" target="blank">点击前往</a></li>
</ul>
<h2> 对象</h2>
<ul>
<li><a href="/hope/zh/cookbook/markdown/emoji/object.html" target="blank">点击前往</a></li>
</ul>`,r:{minutes:.14,words:41},y:"a",title:"Emoji 列表",i:"emoji"},["/zh/cookbook/markdown/emoji/index.html","/zh/cookbook/markdown/emoji/README.md"]],["v-18c68b9f","/zh/cookbook/markdown/emoji/nature.html",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>☀️ <code>:sunny:</code></li>
<li>☔ <code>:umbrella:</code></li>
<li>☁️ <code>:cloud:</code></li>
<li>❄️ <code>:snowflake:</code></li>
<li>⛄ <code>:snowman:</code></li>
<li>⚡ <code>:zap:</code></li>
<li>🌀 <code>:cyclone:</code></li>
<li>🌁 <code>:foggy:</code></li>
<li>🌊 <code>:ocean:</code></li>
<li>🐱 <code>:cat:</code></li>
<li>🐶 <code>:dog:</code></li>
<li>🐭 <code>:mouse:</code></li>
<li>🐹 <code>:hamster:</code></li>
<li>🐰 <code>:rabbit:</code></li>
<li>🐺 <code>:wolf:</code></li>
<li>🐸 <code>:frog:</code></li>
<li>🐯 <code>:tiger:</code></li>
<li>🐨 <code>:koala:</code></li>
<li>🐻 <code>:bear:</code></li>
<li>🐷 <code>:pig:</code></li>
<li>🐽 <code>:pig_nose:</code></li>
<li>🐮 <code>:cow:</code></li>
<li>🐗 <code>:boar:</code></li>
<li>🐵 <code>:monkey_face:</code></li>
<li>🐒 <code>:monkey:</code></li>
<li>🐴 <code>:horse:</code></li>
<li>🐎 <code>:racehorse:</code></li>
<li>🐫 <code>:camel:</code></li>
<li>🐑 <code>:sheep:</code></li>
<li>🐘 <code>:elephant:</code></li>
<li>🐼 <code>:panda_face:</code></li>
<li>🐍 <code>:snake:</code></li>
<li>🐦 <code>:bird:</code></li>
<li>🐤 <code>:baby_chick:</code></li>
<li>🐥 <code>:hatched_chick:</code></li>
<li>🐣 <code>:hatching_chick:</code></li>
<li>🐔 <code>:chicken:</code></li>
<li>🐧 <code>:penguin:</code></li>
<li>🐢 <code>:turtle:</code></li>
<li>🐛 <code>:bug:</code></li>
<li>🐝 <code>:honeybee:</code></li>
<li>🐜 <code>:ant:</code></li>
<li>🪲 <code>:beetle:</code></li>
<li>🐌 <code>:snail:</code></li>
<li>🐙 <code>:octopus:</code></li>
<li>🐠 <code>:tropical_fish:</code></li>
<li>🐟 <code>:fish:</code></li>
<li>🐳 <code>:whale:</code></li>
<li>🐋 <code>:whale2:</code></li>
<li>🐬 <code>:dolphin:</code></li>
<li>🐄 <code>:cow2:</code></li>
<li>🐏 <code>:ram:</code></li>
<li>🐀 <code>:rat:</code></li>
<li>🐃 <code>:water_buffalo:</code></li>
<li>🐅 <code>:tiger2:</code></li>
<li>🐇 <code>:rabbit2:</code></li>
<li>🐉 <code>:dragon:</code></li>
<li>🐐 <code>:goat:</code></li>
<li>🐓 <code>:rooster:</code></li>
<li>🐕 <code>:dog2:</code></li>
<li>🐖 <code>:pig2:</code></li>
<li>🐁 <code>:mouse2:</code></li>
<li>🐂 <code>:ox:</code></li>
<li>🐲 <code>:dragon_face:</code></li>
<li>🐡 <code>:blowfish:</code></li>
<li>🐊 <code>:crocodile:</code></li>
<li>🐪 <code>:dromedary_camel:</code></li>
<li>🐆 <code>:leopard:</code></li>
<li>🐈 <code>:cat2:</code></li>
<li>🐩 <code>:poodle:</code></li>
<li>🐾 <code>:paw_prints:</code></li>
<li>💐 <code>:bouquet:</code></li>
<li>🌸 <code>:cherry_blossom:</code></li>
<li>🌷 <code>:tulip:</code></li>
<li>🍀 <code>:four_leaf_clover:</code></li>
<li>🌹 <code>:rose:</code></li>
<li>🌻 <code>:sunflower:</code></li>
<li>🌺 <code>:hibiscus:</code></li>
<li>🍁 <code>:maple_leaf:</code></li>
<li>🍃 <code>:leaves:</code></li>
<li>🍂 <code>:fallen_leaf:</code></li>
<li>🌿 <code>:herb:</code></li>
<li>🍄 <code>:mushroom:</code></li>
<li>🌵 <code>:cactus:</code></li>
<li>🌴 <code>:palm_tree:</code></li>
<li>🌲 <code>:evergreen_tree:</code></li>
<li>🌳 <code>:deciduous_tree:</code></li>
<li>🌰 <code>:chestnut:</code></li>
<li>🌱 <code>:seedling:</code></li>
<li>🌼 <code>:blossom:</code></li>
<li>🌾 <code>:ear_of_rice:</code></li>
<li>🐚 <code>:shell:</code></li>
<li>🌐 <code>:globe_with_meridians:</code></li>
<li>🌞 <code>:sun_with_face:</code></li>
<li>🌝 <code>:full_moon_with_face:</code></li>
<li>🌚 <code>:new_moon_with_face:</code></li>
<li>🌑 <code>:new_moon:</code></li>
<li>🌒 <code>:waxing_crescent_moon:</code></li>
<li>🌓 <code>:first_quarter_moon:</code></li>
<li>🌔 <code>:waxing_gibbous_moon:</code></li>
<li>🌕 <code>:full_moon:</code></li>
<li>🌖 <code>:waning_gibbous_moon:</code></li>
<li>🌗 <code>:last_quarter_moon:</code></li>
<li>🌘 <code>:waning_crescent_moon:</code></li>
<li>🌜 <code>:last_quarter_moon_with_face:</code></li>
<li>🌛 <code>:first_quarter_moon_with_face:</code></li>
<li>🌙 <code>:crescent_moon:</code></li>
<li>🌍 <code>:earth_africa:</code></li>
<li>🌎 <code>:earth_americas:</code></li>
<li>🌏 <code>:earth_asia:</code></li>
<li>🌋 <code>:volcano:</code></li>
<li>🌌 <code>:milky_way:</code></li>
<li>⛅ <code>:partly_sunny:</code></li>
</ul>`,r:{minutes:.8,words:241},y:"a",title:"自然 Emoji",i:"emoji"},["/zh/cookbook/markdown/emoji/nature","/zh/cookbook/markdown/emoji/nature.md"]],["v-5950c407","/zh/cookbook/markdown/emoji/object.html",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>🎍 <code>:bamboo:</code></li>
<li>💝 <code>:gift_heart:</code></li>
<li>🎎 <code>:dolls:</code></li>
<li>🎒 <code>:school_satchel:</code></li>
<li>🎓 <code>:mortar_board:</code></li>
<li>🎏 <code>:flags:</code></li>
<li>🎆 <code>:fireworks:</code></li>
<li>🎇 <code>:sparkler:</code></li>
<li>🎐 <code>:wind_chime:</code></li>
<li>🎑 <code>:rice_scene:</code></li>
<li>🎃 <code>:jack_o_lantern:</code></li>
<li>👻 <code>:ghost:</code></li>
<li>🎅 <code>:santa:</code></li>
<li>🎄 <code>:christmas_tree:</code></li>
<li>🎁 <code>:gift:</code></li>
<li>🔔 <code>:bell:</code></li>
<li>🔕 <code>:no_bell:</code></li>
<li>🎋 <code>:tanabata_tree:</code></li>
<li>🎉 <code>:tada:</code></li>
<li>🎊 <code>:confetti_ball:</code></li>
<li>🎈 <code>:balloon:</code></li>
<li>🔮 <code>:crystal_ball:</code></li>
<li>💿 <code>:cd:</code></li>
<li>📀 <code>:dvd:</code></li>
<li>💾 <code>:floppy_disk:</code></li>
<li>📷 <code>:camera:</code></li>
<li>📹 <code>:video_camera:</code></li>
<li>🎥 <code>:movie_camera:</code></li>
<li>💻 <code>:computer:</code></li>
<li>📺 <code>:tv:</code></li>
<li>📱 <code>:iphone:</code></li>
<li>☎️ <code>:phone:</code></li>
<li>☎️ <code>:telephone:</code></li>
<li>📞 <code>:telephone_receiver:</code></li>
<li>📟 <code>:pager:</code></li>
<li>📠 <code>:fax:</code></li>
<li>💽 <code>:minidisc:</code></li>
<li>📼 <code>:vhs:</code></li>
<li>🔉 <code>:sound:</code></li>
<li>🔈 <code>:speaker:</code></li>
<li>🔇 <code>:mute:</code></li>
<li>📢 <code>:loudspeaker:</code></li>
<li>📣 <code>:mega:</code></li>
<li>⌛ <code>:hourglass:</code></li>
<li>⏳ <code>:hourglass_flowing_sand:</code></li>
<li>⏰ <code>:alarm_clock:</code></li>
<li>⌚ <code>:watch:</code></li>
<li>📻 <code>:radio:</code></li>
<li>📡 <code>:satellite:</code></li>
<li>➿ <code>:loop:</code></li>
<li>🔍 <code>:mag:</code></li>
<li>🔎 <code>:mag_right:</code></li>
<li>🔓 <code>:unlock:</code></li>
<li>🔒 <code>:lock:</code></li>
<li>🔏 <code>:lock_with_ink_pen:</code></li>
<li>🔐 <code>:closed_lock_with_key:</code></li>
<li>🔑 <code>:key:</code></li>
<li>💡 <code>:bulb:</code></li>
<li>🔦 <code>:flashlight:</code></li>
<li>🔆 <code>:high_brightness:</code></li>
<li>🔅 <code>:low_brightness:</code></li>
<li>🔌 <code>:electric_plug:</code></li>
<li>🔋 <code>:battery:</code></li>
<li>📲 <code>:calling:</code></li>
<li>📧 <code>:email:</code></li>
<li>📫 <code>:mailbox:</code></li>
<li>📮 <code>:postbox:</code></li>
<li>🛀 <code>:bath:</code></li>
<li>🛁 <code>:bathtub:</code></li>
<li>🚿 <code>:shower:</code></li>
<li>🚽 <code>:toilet:</code></li>
<li>🔧 <code>:wrench:</code></li>
<li>🔩 <code>:nut_and_bolt:</code></li>
<li>🔨 <code>:hammer:</code></li>
<li>💺 <code>:seat:</code></li>
<li>💰 <code>:moneybag:</code></li>
<li>💴 <code>:yen:</code></li>
<li>💵 <code>:dollar:</code></li>
<li>💷 <code>:pound:</code></li>
<li>💶 <code>:euro:</code></li>
<li>💳 <code>:credit_card:</code></li>
<li>💸 <code>:money_with_wings:</code></li>
<li>📧 <code>:e-mail:</code></li>
<li>📥 <code>:inbox_tray:</code></li>
<li>📤 <code>:outbox_tray:</code></li>
<li>✉️ <code>:envelope:</code></li>
<li>📨 <code>:incoming_envelope:</code></li>
<li>📯 <code>:postal_horn:</code></li>
<li>📪 <code>:mailbox_closed:</code></li>
<li>📬 <code>:mailbox_with_mail:</code></li>
<li>📭 <code>:mailbox_with_no_mail:</code></li>
<li>📦 <code>:package:</code></li>
<li>🚪 <code>:door:</code></li>
<li>🚬 <code>:smoking:</code></li>
<li>💣 <code>:bomb:</code></li>
<li>🔫 <code>:gun:</code></li>
<li>🔪 <code>:hocho:</code></li>
<li>💊 <code>:pill:</code></li>
<li>💉 <code>:syringe:</code></li>
<li>📄 <code>:page_facing_up:</code></li>
<li>📃 <code>:page_with_curl:</code></li>
<li>📑 <code>:bookmark_tabs:</code></li>
<li>📊 <code>:bar_chart:</code></li>
<li>📈 <code>:chart_with_upwards_trend:</code></li>
<li>📉 <code>:chart_with_downwards_trend:</code></li>
<li>📜 <code>:scroll:</code></li>
<li>📋 <code>:clipboard:</code></li>
<li>📆 <code>:calendar:</code></li>
<li>📅 <code>:date:</code></li>
<li>📇 <code>:card_index:</code></li>
<li>📁 <code>:file_folder:</code></li>
<li>📂 <code>:open_file_folder:</code></li>
<li>✂️ <code>:scissors:</code></li>
<li>📌 <code>:pushpin:</code></li>
<li>📎 <code>:paperclip:</code></li>
<li>✒️ <code>:black_nib:</code></li>
<li>✏️ <code>:pencil2:</code></li>
<li>📏 <code>:straight_ruler:</code></li>
<li>📐 <code>:triangular_ruler:</code></li>
<li>📕 <code>:closed_book:</code></li>
<li>📗 <code>:green_book:</code></li>
<li>📘 <code>:blue_book:</code></li>
<li>📙 <code>:orange_book:</code></li>
<li>📓 <code>:notebook:</code></li>
<li>📔 <code>:notebook_with_decorative_cover:</code></li>
<li>📒 <code>:ledger:</code></li>
<li>📚 <code>:books:</code></li>
<li>🔖 <code>:bookmark:</code></li>
<li>📛 <code>:name_badge:</code></li>
<li>🔬 <code>:microscope:</code></li>
<li>🔭 <code>:telescope:</code></li>
<li>📰 <code>:newspaper:</code></li>
<li>🏈 <code>:football:</code></li>
<li>🏀 <code>:basketball:</code></li>
<li>⚽ <code>:soccer:</code></li>
<li>⚾ <code>:baseball:</code></li>
<li>🎾 <code>:tennis:</code></li>
<li>🎱 <code>:8ball:</code></li>
<li>🏉 <code>:rugby_football:</code></li>
<li>🎳 <code>:bowling:</code></li>
<li>⛳ <code>:golf:</code></li>
<li>🚵 <code>:mountain_bicyclist:</code></li>
<li>🚴 <code>:bicyclist:</code></li>
<li>🏇 <code>:horse_racing:</code></li>
<li>🏂 <code>:snowboarder:</code></li>
<li>🏊 <code>:swimmer:</code></li>
<li>🏄 <code>:surfer:</code></li>
<li>🎿 <code>:ski:</code></li>
<li>♠️ <code>:spades:</code></li>
<li>♥️ <code>:hearts:</code></li>
<li>♣️ <code>:clubs:</code></li>
<li>♦️ <code>:diamonds:</code></li>
<li>💎 <code>:gem:</code></li>
<li>💍 <code>:ring:</code></li>
<li>🏆 <code>:trophy:</code></li>
<li>🎼 <code>:musical_score:</code></li>
<li>🎹 <code>:musical_keyboard:</code></li>
<li>🎻 <code>:violin:</code></li>
<li>👾 <code>:space_invader:</code></li>
<li>🎮 <code>:video_game:</code></li>
<li>🃏 <code>:black_joker:</code></li>
<li>🎴 <code>:flower_playing_cards:</code></li>
<li>🎲 <code>:game_die:</code></li>
<li>🎯 <code>:dart:</code></li>
<li>🀄 <code>:mahjong:</code></li>
<li>🎬 <code>:clapper:</code></li>
<li>📝 <code>:memo:</code></li>
<li>📝 <code>:pencil:</code></li>
<li>📖 <code>:book:</code></li>
<li>🎨 <code>:art:</code></li>
<li>🎤 <code>:microphone:</code></li>
<li>🎧 <code>:headphones:</code></li>
<li>🎺 <code>:trumpet:</code></li>
<li>🎷 <code>:saxophone:</code></li>
<li>🎸 <code>:guitar:</code></li>
<li>👞 <code>:shoe:</code></li>
<li>👡 <code>:sandal:</code></li>
<li>👠 <code>:high_heel:</code></li>
<li>💄 <code>:lipstick:</code></li>
<li>👢 <code>:boot:</code></li>
<li>👕 <code>:shirt:</code></li>
<li>👕 <code>:tshirt:</code></li>
<li>👔 <code>:necktie:</code></li>
<li>👚 <code>:womans_clothes:</code></li>
<li>👗 <code>:dress:</code></li>
<li>🎽 <code>:running_shirt_with_sash:</code></li>
<li>👖 <code>:jeans:</code></li>
<li>👘 <code>:kimono:</code></li>
<li>👙 <code>:bikini:</code></li>
<li>🎀 <code>:ribbon:</code></li>
<li>🎩 <code>:tophat:</code></li>
<li>👑 <code>:crown:</code></li>
<li>👒 <code>:womans_hat:</code></li>
<li>👞 <code>:mans_shoe:</code></li>
<li>🌂 <code>:closed_umbrella:</code></li>
<li>💼 <code>:briefcase:</code></li>
<li>👜 <code>:handbag:</code></li>
<li>👝 <code>:pouch:</code></li>
<li>👛 <code>:purse:</code></li>
<li>👓 <code>:eyeglasses:</code></li>
<li>🎣 <code>:fishing_pole_and_fish:</code></li>
<li>☕ <code>:coffee:</code></li>
<li>🍵 <code>:tea:</code></li>
<li>🍶 <code>:sake:</code></li>
<li>🍼 <code>:baby_bottle:</code></li>
<li>🍺 <code>:beer:</code></li>
<li>🍻 <code>:beers:</code></li>
<li>🍸 <code>:cocktail:</code></li>
<li>🍹 <code>:tropical_drink:</code></li>
<li>🍷 <code>:wine_glass:</code></li>
<li>🍴 <code>:fork_and_knife:</code></li>
<li>🍕 <code>:pizza:</code></li>
<li>🍔 <code>:hamburger:</code></li>
<li>🍟 <code>:fries:</code></li>
<li>🍗 <code>:poultry_leg:</code></li>
<li>🍖 <code>:meat_on_bone:</code></li>
<li>🍝 <code>:spaghetti:</code></li>
<li>🍛 <code>:curry:</code></li>
<li>🍤 <code>:fried_shrimp:</code></li>
<li>🍱 <code>:bento:</code></li>
<li>🍣 <code>:sushi:</code></li>
<li>🍥 <code>:fish_cake:</code></li>
<li>🍙 <code>:rice_ball:</code></li>
<li>🍘 <code>:rice_cracker:</code></li>
<li>🍚 <code>:rice:</code></li>
<li>🍜 <code>:ramen:</code></li>
<li>🍲 <code>:stew:</code></li>
<li>🍢 <code>:oden:</code></li>
<li>🍡 <code>:dango:</code></li>
<li>🥚 <code>:egg:</code></li>
<li>🍞 <code>:bread:</code></li>
<li>🍩 <code>:doughnut:</code></li>
<li>🍮 <code>:custard:</code></li>
<li>🍦 <code>:icecream:</code></li>
<li>🍨 <code>:ice_cream:</code></li>
<li>🍧 <code>:shaved_ice:</code></li>
<li>🎂 <code>:birthday:</code></li>
<li>🍰 <code>:cake:</code></li>
<li>🍪 <code>:cookie:</code></li>
<li>🍫 <code>:chocolate_bar:</code></li>
<li>🍬 <code>:candy:</code></li>
<li>🍭 <code>:lollipop:</code></li>
<li>🍯 <code>:honey_pot:</code></li>
<li>🍎 <code>:apple:</code></li>
<li>🍏 <code>:green_apple:</code></li>
<li>🍊 <code>:tangerine:</code></li>
<li>🍋 <code>:lemon:</code></li>
<li>🍒 <code>:cherries:</code></li>
<li>🍇 <code>:grapes:</code></li>
<li>🍉 <code>:watermelon:</code></li>
<li>🍓 <code>:strawberry:</code></li>
<li>🍑 <code>:peach:</code></li>
<li>🍈 <code>:melon:</code></li>
<li>🍌 <code>:banana:</code></li>
<li>🍐 <code>:pear:</code></li>
<li>🍍 <code>:pineapple:</code></li>
<li>🍠 <code>:sweet_potato:</code></li>
<li>🍆 <code>:eggplant:</code></li>
<li>🍅 <code>:tomato:</code></li>
<li>🌽 <code>:corn:</code></li>
</ul>`,r:{minutes:1.79,words:537},y:"a",title:"对象 Emoji",i:"emoji"},["/zh/cookbook/markdown/emoji/object","/zh/cookbook/markdown/emoji/object.md"]],["v-2cd77292","/zh/cookbook/markdown/emoji/people.html",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>😄 <code>:smile:</code></li>
<li>😆 <code>:laughing:</code></li>
<li>😊 <code>:blush:</code></li>
<li>😃 <code>:smiley:</code></li>
<li>😏 <code>:smirk:</code></li>
<li>😍 <code>:heart_eyes:</code></li>
<li>😘 <code>:kissing_heart:</code></li>
<li>😚 <code>:kissing_closed_eyes:</code></li>
<li>😳 <code>:flushed:</code></li>
<li>😌 <code>:relieved:</code></li>
<li>😆 <code>:satisfied:</code></li>
<li>😁 <code>:grin:</code></li>
<li>😉 <code>:wink:</code></li>
<li>😜 <code>:stuck_out_tongue_winking_eye:</code></li>
<li>😝 <code>:stuck_out_tongue_closed_eyes:</code></li>
<li>😀 <code>:grinning:</code></li>
<li>😗 <code>:kissing:</code></li>
<li>😙 <code>:kissing_smiling_eyes:</code></li>
<li>😛 <code>:stuck_out_tongue:</code></li>
<li>😴 <code>:sleeping:</code></li>
<li>😟 <code>:worried:</code></li>
<li>😦 <code>:frowning:</code></li>
<li>😧 <code>:anguished:</code></li>
<li>😮 <code>:open_mouth:</code></li>
<li>😬 <code>:grimacing:</code></li>
<li>😕 <code>:confused:</code></li>
<li>😯 <code>:hushed:</code></li>
<li>😑 <code>:expressionless:</code></li>
<li>😒 <code>:unamused:</code></li>
<li>😅 <code>:sweat_smile:</code></li>
<li>😓 <code>:sweat:</code></li>
<li>😥 <code>:disappointed_relieved:</code></li>
<li>😩 <code>:weary:</code></li>
<li>😔 <code>:pensive:</code></li>
<li>😞 <code>:disappointed:</code></li>
<li>😖 <code>:confounded:</code></li>
<li>😨 <code>:fearful:</code></li>
<li>😰 <code>:cold_sweat:</code></li>
<li>😣 <code>:persevere:</code></li>
<li>😢 <code>:cry:</code></li>
<li>😭 <code>:sob:</code></li>
<li>😂 <code>:joy:</code></li>
<li>😲 <code>:astonished:</code></li>
<li>😱 <code>:scream:</code></li>
<li>😫 <code>:tired_face:</code></li>
<li>😠 <code>:angry:</code></li>
<li>😡 <code>:rage:</code></li>
<li>😤 <code>:triumph:</code></li>
<li>😪 <code>:sleepy:</code></li>
<li>😋 <code>:yum:</code></li>
<li>😷 <code>:mask:</code></li>
<li>😎 <code>:sunglasses:</code></li>
<li>😵 <code>:dizzy_face:</code></li>
<li>👿 <code>:imp:</code></li>
<li>😈 <code>:smiling_imp:</code></li>
<li>😐 <code>:neutral_face:</code></li>
<li>😶 <code>:no_mouth:</code></li>
<li>😇 <code>:innocent:</code></li>
<li>👽 <code>:alien:</code></li>
<li>💛 <code>:yellow_heart:</code></li>
<li>💙 <code>:blue_heart:</code></li>
<li>💜 <code>:purple_heart:</code></li>
<li>❤️ <code>:heart:</code></li>
<li>💚 <code>:green_heart:</code></li>
<li>💔 <code>:broken_heart:</code></li>
<li>💓 <code>:heartbeat:</code></li>
<li>💗 <code>:heartpulse:</code></li>
<li>💕 <code>:two_hearts:</code></li>
<li>💞 <code>:revolving_hearts:</code></li>
<li>💘 <code>:cupid:</code></li>
<li>💖 <code>:sparkling_heart:</code></li>
<li>✨ <code>:sparkles:</code></li>
<li>⭐ <code>:star:</code></li>
<li>🌟 <code>:star2:</code></li>
<li>💫 <code>:dizzy:</code></li>
<li>💥 <code>:boom:</code></li>
<li>💥 <code>:collision:</code></li>
<li>💢 <code>:anger:</code></li>
<li>❗ <code>:exclamation:</code></li>
<li>❓ <code>:question:</code></li>
<li>❕ <code>:grey_exclamation:</code></li>
<li>❔ <code>:grey_question:</code></li>
<li>💤 <code>:zzz:</code></li>
<li>💨 <code>:dash:</code></li>
<li>💦 <code>:sweat_drops:</code></li>
<li>🎶 <code>:notes:</code></li>
<li>🎵 <code>:musical_note:</code></li>
<li>🔥 <code>:fire:</code></li>
<li>💩 <code>:hankey:</code></li>
<li>💩 <code>:poop:</code></li>
<li>💩 <code>:shit:</code></li>
<li>👍 <code>:+1:</code></li>
<li>👍 <code>:thumbsup:</code></li>
<li>👎 <code>:-1:</code></li>
<li>👎 <code>:thumbsdown:</code></li>
<li>👌 <code>:ok_hand:</code></li>
<li>👊 <code>:punch:</code></li>
<li>👊 <code>:facepunch:</code></li>
<li>✊ <code>:fist:</code></li>
<li>✌️ <code>:v:</code></li>
<li>👋 <code>:wave:</code></li>
<li>✋ <code>:hand:</code></li>
<li>✋ <code>:raised_hand:</code></li>
<li>👐 <code>:open_hands:</code></li>
<li>☝️ <code>:point_up:</code></li>
<li>👇 <code>:point_down:</code></li>
<li>👈 <code>:point_left:</code></li>
<li>👉 <code>:point_right:</code></li>
<li>🙌 <code>:raised_hands:</code></li>
<li>🙏 <code>:pray:</code></li>
<li>👆 <code>:point_up_2:</code></li>
<li>👏 <code>:clap:</code></li>
<li>💪 <code>:muscle:</code></li>
<li>🤘 <code>:metal:</code></li>
<li>🖕 <code>:fu:</code></li>
<li>🏃 <code>:runner:</code></li>
<li>🏃 <code>:running:</code></li>
<li>👫 <code>:couple:</code></li>
<li>👪 <code>:family:</code></li>
<li>👬 <code>:two_men_holding_hands:</code></li>
<li>👭 <code>:two_women_holding_hands:</code></li>
<li>💃 <code>:dancer:</code></li>
<li>👯 <code>:dancers:</code></li>
<li>🙆‍♀️ <code>:ok_woman:</code></li>
<li>🙅 <code>:no_good:</code></li>
<li>💁 <code>:information_desk_person:</code></li>
<li>🙋 <code>:raising_hand:</code></li>
<li>👰‍♀️ <code>:bride_with_veil:</code></li>
<li>:person_with_pouting_face: <code>:person_with_pouting_face:</code></li>
<li>:person_frowning: <code>:person_frowning:</code></li>
<li>🙇 <code>:bow:</code></li>
<li>💑 <code>:couple_with_heart:</code></li>
<li>💆 <code>:massage:</code></li>
<li>💇 <code>:haircut:</code></li>
<li>💅 <code>:nail_care:</code></li>
<li>👦 <code>:boy:</code></li>
<li>👧 <code>:girl:</code></li>
<li>👩 <code>:woman:</code></li>
<li>👨 <code>:man:</code></li>
<li>👶 <code>:baby:</code></li>
<li>👵 <code>:older_woman:</code></li>
<li>👴 <code>:older_man:</code></li>
<li>:person_with_blond_hair: <code>:person_with_blond_hair:</code></li>
<li>👲 <code>:man_with_gua_pi_mao:</code></li>
<li>👳‍♂️ <code>:man_with_turban:</code></li>
<li>👷 <code>:construction_worker:</code></li>
<li>👮 <code>:cop:</code></li>
<li>👼 <code>:angel:</code></li>
<li>👸 <code>:princess:</code></li>
<li>😺 <code>:smiley_cat:</code></li>
<li>😸 <code>:smile_cat:</code></li>
<li>😻 <code>:heart_eyes_cat:</code></li>
<li>😽 <code>:kissing_cat:</code></li>
<li>😼 <code>:smirk_cat:</code></li>
<li>🙀 <code>:scream_cat:</code></li>
<li>😿 <code>:crying_cat_face:</code></li>
<li>😹 <code>:joy_cat:</code></li>
<li>😾 <code>:pouting_cat:</code></li>
<li>👹 <code>:japanese_ogre:</code></li>
<li>👺 <code>:japanese_goblin:</code></li>
<li>🙈 <code>:see_no_evil:</code></li>
<li>🙉 <code>:hear_no_evil:</code></li>
<li>🙊 <code>:speak_no_evil:</code></li>
<li>💂‍♂️ <code>:guardsman:</code></li>
<li>💀 <code>:skull:</code></li>
<li>🐾 <code>:feet:</code></li>
<li>👄 <code>:lips:</code></li>
<li>💋 <code>:kiss:</code></li>
<li>💧 <code>:droplet:</code></li>
<li>👂 <code>:ear:</code></li>
<li>👀 <code>:eyes:</code></li>
<li>👃 <code>:nose:</code></li>
<li>👅 <code>:tongue:</code></li>
<li>💌 <code>:love_letter:</code></li>
<li>👤 <code>:bust_in_silhouette:</code></li>
<li>👥 <code>:busts_in_silhouette:</code></li>
<li>💬 <code>:speech_balloon:</code></li>
<li>💭 <code>:thought_balloon:</code></li>
</ul>`,r:{minutes:1.24,words:371},y:"a",title:"人物 Emoji",i:"emoji"},["/zh/cookbook/markdown/emoji/people","/zh/cookbook/markdown/emoji/people.md"]],["v-55f36785","/zh/cookbook/markdown/emoji/place.html",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>🏠 <code>:house:</code></li>
<li>🏡 <code>:house_with_garden:</code></li>
<li>🏫 <code>:school:</code></li>
<li>🏢 <code>:office:</code></li>
<li>🏣 <code>:post_office:</code></li>
<li>🏥 <code>:hospital:</code></li>
<li>🏦 <code>:bank:</code></li>
<li>🏪 <code>:convenience_store:</code></li>
<li>🏩 <code>:love_hotel:</code></li>
<li>🏨 <code>:hotel:</code></li>
<li>💒 <code>:wedding:</code></li>
<li>⛪ <code>:church:</code></li>
<li>🏬 <code>:department_store:</code></li>
<li>🏤 <code>:european_post_office:</code></li>
<li>🌇 <code>:city_sunrise:</code></li>
<li>🌆 <code>:city_sunset:</code></li>
<li>🏯 <code>:japanese_castle:</code></li>
<li>🏰 <code>:european_castle:</code></li>
<li>⛺ <code>:tent:</code></li>
<li>🏭 <code>:factory:</code></li>
<li>🗼 <code>:tokyo_tower:</code></li>
<li>🗾 <code>:japan:</code></li>
<li>🗻 <code>:mount_fuji:</code></li>
<li>🌄 <code>:sunrise_over_mountains:</code></li>
<li>🌅 <code>:sunrise:</code></li>
<li>🌠 <code>:stars:</code></li>
<li>🗽 <code>:statue_of_liberty:</code></li>
<li>🌉 <code>:bridge_at_night:</code></li>
<li>🎠 <code>:carousel_horse:</code></li>
<li>🌈 <code>:rainbow:</code></li>
<li>🎡 <code>:ferris_wheel:</code></li>
<li>⛲ <code>:fountain:</code></li>
<li>🎢 <code>:roller_coaster:</code></li>
<li>🚢 <code>:ship:</code></li>
<li>🚤 <code>:speedboat:</code></li>
<li>⛵ <code>:boat:</code></li>
<li>⛵ <code>:sailboat:</code></li>
<li>🚣 <code>:rowboat:</code></li>
<li>⚓ <code>:anchor:</code></li>
<li>🚀 <code>:rocket:</code></li>
<li>✈️ <code>:airplane:</code></li>
<li>🚁 <code>:helicopter:</code></li>
<li>🚂 <code>:steam_locomotive:</code></li>
<li>🚊 <code>:tram:</code></li>
<li>🚞 <code>:mountain_railway:</code></li>
<li>🚲 <code>:bike:</code></li>
<li>🚡 <code>:aerial_tramway:</code></li>
<li>🚟 <code>:suspension_railway:</code></li>
<li>🚠 <code>:mountain_cableway:</code></li>
<li>🚜 <code>:tractor:</code></li>
<li>🚙 <code>:blue_car:</code></li>
<li>🚘 <code>:oncoming_automobile:</code></li>
<li>🚗 <code>:car:</code></li>
<li>🚗 <code>:red_car:</code></li>
<li>🚕 <code>:taxi:</code></li>
<li>🚖 <code>:oncoming_taxi:</code></li>
<li>🚛 <code>:articulated_lorry:</code></li>
<li>🚌 <code>:bus:</code></li>
<li>🚍 <code>:oncoming_bus:</code></li>
<li>🚨 <code>:rotating_light:</code></li>
<li>🚓 <code>:police_car:</code></li>
<li>🚔 <code>:oncoming_police_car:</code></li>
<li>🚒 <code>:fire_engine:</code></li>
<li>🚑 <code>:ambulance:</code></li>
<li>🚐 <code>:minibus:</code></li>
<li>🚚 <code>:truck:</code></li>
<li>🚋 <code>:train:</code></li>
<li>🚉 <code>:station:</code></li>
<li>🚆 <code>:train2:</code></li>
<li>🚅 <code>:bullettrain_front:</code></li>
<li>🚄 <code>:bullettrain_side:</code></li>
<li>🚈 <code>:light_rail:</code></li>
<li>🚝 <code>:monorail:</code></li>
<li>🚃 <code>:railway_car:</code></li>
<li>🚎 <code>:trolleybus:</code></li>
<li>🎫 <code>:ticket:</code></li>
<li>⛽ <code>:fuelpump:</code></li>
<li>🚦 <code>:vertical_traffic_light:</code></li>
<li>🚥 <code>:traffic_light:</code></li>
<li>⚠️ <code>:warning:</code></li>
<li>🚧 <code>:construction:</code></li>
<li>🔰 <code>:beginner:</code></li>
<li>🏧 <code>:atm:</code></li>
<li>🎰 <code>:slot_machine:</code></li>
<li>🚏 <code>:busstop:</code></li>
<li>💈 <code>:barber:</code></li>
<li>♨️ <code>:hotsprings:</code></li>
<li>🏁 <code>:checkered_flag:</code></li>
<li>🎌 <code>:crossed_flags:</code></li>
<li>🏮 <code>:izakaya_lantern:</code></li>
<li>🗿 <code>:moyai:</code></li>
<li>🎪 <code>:circus_tent:</code></li>
<li>🎭 <code>:performing_arts:</code></li>
<li>📍 <code>:round_pushpin:</code></li>
<li>🚩 <code>:triangular_flag_on_post:</code></li>
</ul>`,r:{minutes:.68,words:205},y:"a",title:"地点 Emoji",i:"emoji"},["/zh/cookbook/markdown/emoji/place","/zh/cookbook/markdown/emoji/place.md"]],["v-dc6afd64","/zh/cookbook/markdown/emoji/symbol.html",{d:"2022-03-05T13:20:25.000Z",c:["教程知识","Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>1️⃣ <code>:one:</code></li>
<li>2️⃣ <code>:two:</code></li>
<li>3️⃣ <code>:three:</code></li>
<li>4️⃣ <code>:four:</code></li>
<li>5️⃣ <code>:five:</code></li>
<li>6️⃣ <code>:six:</code></li>
<li>7️⃣ <code>:seven:</code></li>
<li>8️⃣ <code>:eight:</code></li>
<li>9️⃣ <code>:nine:</code></li>
<li>🔟 <code>:keycap_ten:</code></li>
<li>🔢 <code>:1234:</code></li>
<li>0️⃣ <code>:zero:</code></li>
<li>#️⃣ <code>:hash:</code></li>
<li>🔣 <code>:symbols:</code></li>
<li>◀️ <code>:arrow_backward:</code></li>
<li>⬇️ <code>:arrow_down:</code></li>
<li>▶️ <code>:arrow_forward:</code></li>
<li>⬅️ <code>:arrow_left:</code></li>
<li>🔠 <code>:capital_abcd:</code></li>
<li>🔡 <code>:abcd:</code></li>
<li>🔤 <code>:abc:</code></li>
<li>↙️ <code>:arrow_lower_left:</code></li>
<li>↘️ <code>:arrow_lower_right:</code></li>
<li>➡️ <code>:arrow_right:</code></li>
<li>⬆️ <code>:arrow_up:</code></li>
<li>↖️ <code>:arrow_upper_left:</code></li>
<li>↗️ <code>:arrow_upper_right:</code></li>
<li>⏬ <code>:arrow_double_down:</code></li>
<li>⏫ <code>:arrow_double_up:</code></li>
<li>🔽 <code>:arrow_down_small:</code></li>
<li>⤵️ <code>:arrow_heading_down:</code></li>
<li>⤴️ <code>:arrow_heading_up:</code></li>
<li>↩️ <code>:leftwards_arrow_with_hook:</code></li>
<li>↪️ <code>:arrow_right_hook:</code></li>
<li>↔️ <code>:left_right_arrow:</code></li>
<li>↕️ <code>:arrow_up_down:</code></li>
<li>🔼 <code>:arrow_up_small:</code></li>
<li>🔃 <code>:arrows_clockwise:</code></li>
<li>🔄 <code>:arrows_counterclockwise:</code></li>
<li>⏪ <code>:rewind:</code></li>
<li>⏩ <code>:fast_forward:</code></li>
<li>ℹ️ <code>:information_source:</code></li>
<li>🆗 <code>:ok:</code></li>
<li>🔀 <code>:twisted_rightwards_arrows:</code></li>
<li>🔁 <code>:repeat:</code></li>
<li>🔂 <code>:repeat_one:</code></li>
<li>🆕 <code>:new:</code></li>
<li>🔝 <code>:top:</code></li>
<li>🆙 <code>:up:</code></li>
<li>🆒 <code>:cool:</code></li>
<li>🆓 <code>:free:</code></li>
<li>🆖 <code>:ng:</code></li>
<li>🎦 <code>:cinema:</code></li>
<li>🈁 <code>:koko:</code></li>
<li>📶 <code>:signal_strength:</code></li>
<li>🈂️ <code>:sa:</code></li>
<li>🚻 <code>:restroom:</code></li>
<li>🚹 <code>:mens:</code></li>
<li>🚺 <code>:womens:</code></li>
<li>🚼 <code>:baby_symbol:</code></li>
<li>🚭 <code>:no_smoking:</code></li>
<li>🅿️ <code>:parking:</code></li>
<li>♿ <code>:wheelchair:</code></li>
<li>🚇 <code>:metro:</code></li>
<li>🛄 <code>:baggage_claim:</code></li>
<li>🉑 <code>:accept:</code></li>
<li>🚾 <code>:wc:</code></li>
<li>🚰 <code>:potable_water:</code></li>
<li>🚮 <code>:put_litter_in_its_place:</code></li>
<li>㊙️ <code>:secret:</code></li>
<li>㊗️ <code>:congratulations:</code></li>
<li>Ⓜ️ <code>:m:</code></li>
<li>🛂 <code>:passport_control:</code></li>
<li>🛅 <code>:left_luggage:</code></li>
<li>🛃 <code>:customs:</code></li>
<li>🉐 <code>:ideograph_advantage:</code></li>
<li>🆑 <code>:cl:</code></li>
<li>🆘 <code>:sos:</code></li>
<li>🆔 <code>:id:</code></li>
<li>🚫 <code>:no_entry_sign:</code></li>
<li>🔞 <code>:underage:</code></li>
<li>📵 <code>:no_mobile_phones:</code></li>
<li>🚯 <code>:do_not_litter:</code></li>
<li>🚱 <code>:non-potable_water:</code></li>
<li>🚳 <code>:no_bicycles:</code></li>
<li>🚷 <code>:no_pedestrians:</code></li>
<li>🚸 <code>:children_crossing:</code></li>
<li>⛔ <code>:no_entry:</code></li>
<li>✳️ <code>:eight_spoked_asterisk:</code></li>
<li>❇️ <code>:sparkle:</code></li>
<li>✴️ <code>:eight_pointed_black_star:</code></li>
<li>💟 <code>:heart_decoration:</code></li>
<li>🆚 <code>:vs:</code></li>
<li>📳 <code>:vibration_mode:</code></li>
<li>📴 <code>:mobile_phone_off:</code></li>
<li>💹 <code>:chart:</code></li>
<li>💱 <code>:currency_exchange:</code></li>
<li>♈ <code>:aries:</code></li>
<li>♉ <code>:taurus:</code></li>
<li>♊ <code>:gemini:</code></li>
<li>♋ <code>:cancer:</code></li>
<li>♌ <code>:leo:</code></li>
<li>♍ <code>:virgo:</code></li>
<li>♎ <code>:libra:</code></li>
<li>♏ <code>:scorpius:</code></li>
<li>♐ <code>:sagittarius:</code></li>
<li>♑ <code>:capricorn:</code></li>
<li>♒ <code>:aquarius:</code></li>
<li>♓ <code>:pisces:</code></li>
<li>⛎ <code>:ophiuchus:</code></li>
<li>🔯 <code>:six_pointed_star:</code></li>
<li>❎ <code>:negative_squared_cross_mark:</code></li>
<li>🅰️ <code>:a:</code></li>
<li>🅱️ <code>:b:</code></li>
<li>🆎 <code>:ab:</code></li>
<li>🅾️ <code>:o2:</code></li>
<li>💠 <code>:diamond_shape_with_a_dot_inside:</code></li>
<li>♻️ <code>:recycle:</code></li>
<li>🔚 <code>:end:</code></li>
<li>🔙 <code>:back:</code></li>
<li>🔛 <code>:on:</code></li>
<li>🔜 <code>:soon:</code></li>
<li>🕐 <code>:clock1:</code></li>
<li>🕜 <code>:clock130:</code></li>
<li>🕙 <code>:clock10:</code></li>
<li>🕥 <code>:clock1030:</code></li>
<li>🕚 <code>:clock11:</code></li>
<li>🕦 <code>:clock1130:</code></li>
<li>🕛 <code>:clock12:</code></li>
<li>🕧 <code>:clock1230:</code></li>
<li>🕑 <code>:clock2:</code></li>
<li>🕝 <code>:clock230:</code></li>
<li>🕒 <code>:clock3:</code></li>
<li>🕞 <code>:clock330:</code></li>
<li>🕓 <code>:clock4:</code></li>
<li>🕟 <code>:clock430:</code></li>
<li>🕔 <code>:clock5:</code></li>
<li>🕠 <code>:clock530:</code></li>
<li>🕕 <code>:clock6:</code></li>
<li>🕡 <code>:clock630:</code></li>
<li>🕖 <code>:clock7:</code></li>
<li>🕢 <code>:clock730:</code></li>
<li>🕗 <code>:clock8:</code></li>
<li>🕣 <code>:clock830:</code></li>
<li>🕘 <code>:clock9:</code></li>
<li>🕤 <code>:clock930:</code></li>
<li>💲 <code>:heavy_dollar_sign:</code></li>
<li>©️ <code>:copyright:</code></li>
<li>®️ <code>:registered:</code></li>
<li>™️ <code>:tm:</code></li>
<li>❌ <code>:x:</code></li>
<li>❗ <code>:heavy_exclamation_mark:</code></li>
<li>‼️ <code>:bangbang:</code></li>
<li>⁉️ <code>:interrobang:</code></li>
<li>⭕ <code>:o:</code></li>
<li>✖️ <code>:heavy_multiplication_x:</code></li>
<li>➕ <code>:heavy_plus_sign:</code></li>
<li>➖ <code>:heavy_minus_sign:</code></li>
<li>➗ <code>:heavy_division_sign:</code></li>
<li>💮 <code>:white_flower:</code></li>
<li>💯 <code>:100:</code></li>
<li>✔️ <code>:heavy_check_mark:</code></li>
<li>☑️ <code>:ballot_box_with_check:</code></li>
<li>🔘 <code>:radio_button:</code></li>
<li>🔗 <code>:link:</code></li>
<li>➰ <code>:curly_loop:</code></li>
<li>〰️ <code>:wavy_dash:</code></li>
<li>〽️ <code>:part_alternation_mark:</code></li>
<li>🔱 <code>:trident:</code></li>
<li>▪️ <code>:black_small_square:</code></li>
<li>▫️ <code>:white_small_square:</code></li>
<li>◾ <code>:black_medium_small_square:</code></li>
<li>◽ <code>:white_medium_small_square:</code></li>
<li>◼️ <code>:black_medium_square:</code></li>
<li>◻️ <code>:white_medium_square:</code></li>
<li>⬛ <code>:black_large_square:</code></li>
<li>⬜ <code>:white_large_square:</code></li>
<li>✅ <code>:white_check_mark:</code></li>
<li>🔲 <code>:black_square_button:</code></li>
<li>🔳 <code>:white_square_button:</code></li>
<li>⚫ <code>:black_circle:</code></li>
<li>⚪ <code>:white_circle:</code></li>
<li>🔴 <code>:red_circle:</code></li>
<li>🔵 <code>:large_blue_circle:</code></li>
<li>🔷 <code>:large_blue_diamond:</code></li>
<li>🔶 <code>:large_orange_diamond:</code></li>
<li>🔹 <code>:small_blue_diamond:</code></li>
<li>🔸 <code>:small_orange_diamond:</code></li>
<li>🔺 <code>:small_red_triangle:</code></li>
<li>🔻 <code>:small_red_triangle_down:</code></li>
</ul>`,r:{minutes:1.32,words:397},y:"a",title:"符号 Emoji",i:"emoji"},["/zh/cookbook/markdown/emoji/symbol","/zh/cookbook/markdown/emoji/symbol.md"]],["v-3706649a","/404.html",{y:"p",title:""},["/404"]],["v-5bc93818","/category/",{y:"p",title:"Category"},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",title:"Tag"},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",title:"Articles"},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",title:"Star"},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",title:"Timeline"},["/timeline/index.html"]],["v-65ef43f1","/category/faq/",{y:"p",title:"FAQ Category"},["/category/faq/index.html"]],["v-2cb94f1f","/tag/config/",{y:"p",title:"Config Tag"},["/tag/config/index.html"]],["v-54d7ff21","/zh/article/",{y:"p",title:"文章"},["/zh/article/index.html"]],["v-2c3ee7f5","/zh/star/",{y:"p",title:"收藏"},["/zh/star/index.html"]],["v-27b02be6","/zh/timeline/",{y:"p",title:"时间轴"},["/zh/timeline/index.html"]],["v-57ded594","/category/demo/",{y:"p",title:"Demo Category"},["/category/demo/index.html"]],["v-287d0843","/tag/i18n/",{y:"p",title:"I18N Tag"},["/tag/i18n/index.html"]],["v-156d27ac","/ru/article/",{y:"p",title:"Статьи"},["/ru/article/index.html"]],["v-c632f96c","/ru/star/",{y:"p",title:"Звезда"},["/ru/star/index.html"]],["v-79c014bb","/ru/timeline/",{y:"p",title:"Таймлайн"},["/ru/timeline/index.html"]],["v-90963bd6","/category/config/",{y:"p",title:"Config Category"},["/category/config/index.html"]],["v-2aca11de","/tag/intro/",{y:"p",title:"Intro Tag"},["/tag/intro/index.html"]],["v-a5f3a54a","/category/intro/",{y:"p",title:"Intro Category"},["/category/intro/index.html"]],["v-2d49119b","/tag/theme-config/",{y:"p",title:"Theme Config Tag"},["/tag/theme-config/index.html"]],["v-6ab77f8e","/category/migration/",{y:"p",title:"Migration Category"},["/category/migration/index.html"]],["v-07fbaf28","/tag/style/",{y:"p",title:"Style Tag"},["/tag/style/index.html"]],["v-3318a379","/category/tutorial/",{y:"p",title:"Tutorial Category"},["/category/tutorial/index.html"]],["v-38b13eef","/tag/migration/",{y:"p",title:"Migration Tag"},["/tag/migration/index.html"]],["v-da521338","/category/customize/",{y:"p",title:"Customize Category"},["/category/customize/index.html"]],["v-5ed3c893","/tag/frontmatter/",{y:"p",title:"Frontmatter Tag"},["/tag/frontmatter/index.html"]],["v-c4840196","/category/advanced/",{y:"p",title:"Advanced Category"},["/category/advanced/index.html"]],["v-28f62df2","/tag/page/",{y:"p",title:"Page Tag"},["/tag/page/index.html"]],["v-49d5b9f4","/category/cookbook/",{y:"p",title:"Cookbook Category"},["/category/cookbook/index.html"]],["v-16192213","/tag/blog-home/",{y:"p",title:"Blog Home Tag"},["/tag/blog-home/index.html"]],["v-d37ff7f0","/category/markdown/",{y:"p",title:"Markdown Category"},["/category/markdown/index.html"]],["v-288be5a2","/tag/home/",{y:"p",title:"Home Tag"},["/tag/home/index.html"]],["v-3b050f06","/category/get-started/",{y:"p",title:"Get Started Category"},["/category/get-started/index.html"]],["v-28996fb3","/tag/info/",{y:"p",title:"Info Tag"},["/tag/info/index.html"]],["v-43d7543a","/category/vuepress/",{y:"p",title:"VuePress Category"},["/category/vuepress/index.html"]],["v-1ce65792","/tag/layout/",{y:"p",title:"Layout Tag"},["/tag/layout/index.html"]],["v-57c5dbb5","/category/blog/",{y:"p",title:"Blog Category"},["/category/blog/index.html"]],["v-2836033f","/tag/blog/",{y:"p",title:"Blog Tag"},["/tag/blog/index.html"]],["v-50288411","/category/feature/",{y:"p",title:"Feature Category"},["/category/feature/index.html"]],["v-7ee7933e","/tag/plugin-config/",{y:"p",title:"Plugin Config Tag"},["/tag/plugin-config/index.html"]],["v-dc6797a4","/category/interface/",{y:"p",title:"Interface Category"},["/category/interface/index.html"]],["v-691cb1fe","/tag/comment/",{y:"p",title:"Comment Tag"},["/tag/comment/index.html"]],["v-7c88672d","/category/layout/",{y:"p",title:"Layout Category"},["/category/layout/index.html"]],["v-5d09fe16","/tag/copyright/",{y:"p",title:"Copyright Tag"},["/tag/copyright/index.html"]],["v-fbb94a6e","/zh/category/",{y:"p",title:"分类"},["/zh/category/index.html"]],["v-286b0cc3","/tag/feed/",{y:"p",title:"Feed Tag"},["/tag/feed/index.html"]],["v-8fb2b3bc","/zh/category/faq/",{y:"p",title:"FAQ 分类"},["/zh/category/faq/index.html"]],["v-484552dc","/tag/markdown/",{y:"p",title:"Markdown Tag"},["/tag/markdown/index.html"]],["v-3c55739e","/zh/category/%E6%A1%88%E4%BE%8B/",{y:"p",title:"案例 分类"},["/zh/category/案例/","/zh/category/%E6%A1%88%E4%BE%8B/index.html"]],["v-b30840fa","/tag/pwa/",{y:"p",title:"PWA Tag"},["/tag/pwa/index.html"]],["v-64e13cb5","/zh/category/%E9%85%8D%E7%BD%AE/",{y:"p",title:"配置 分类"},["/zh/category/配置/","/zh/category/%E9%85%8D%E7%BD%AE/index.html"]],["v-7cddf13d","/tag/appearance/",{y:"p",title:"Appearance Tag"},["/tag/appearance/index.html"]],["v-bb00d83e","/zh/category/%E4%BB%8B%E7%BB%8D/",{y:"p",title:"介绍 分类"},["/zh/category/介绍/","/zh/category/%E4%BB%8B%E7%BB%8D/index.html"]],["v-441d7ce2","/tag/basic/",{y:"p",title:"Basic Tag"},["/tag/basic/index.html"]],["v-f1c2c49c","/zh/category/%E8%BF%81%E7%A7%BB/",{y:"p",title:"迁移 分类"},["/zh/category/迁移/","/zh/category/%E8%BF%81%E7%A7%BB/index.html"]],["v-6a5beedc","/tag/themeconfig/",{y:"p",title:"ThemeConfig Tag"},["/tag/themeconfig/index.html"]],["v-eefbac3a","/zh/category/%E6%95%99%E7%A8%8B%E7%9F%A5%E8%AF%86/",{y:"p",title:"教程知识 分类"},["/zh/category/教程知识/","/zh/category/%E6%95%99%E7%A8%8B%E7%9F%A5%E8%AF%86/index.html"]],["v-7bb1b847","/tag/feature/",{y:"p",title:"Feature Tag"},["/tag/feature/index.html"]],["v-90a250cc","/zh/category/%E8%87%AA%E5%AE%9A%E4%B9%89/",{y:"p",title:"自定义 分类"},["/zh/category/自定义/","/zh/category/%E8%87%AA%E5%AE%9A%E4%B9%89/index.html"]],["v-12aa322f","/zh/category/%E9%AB%98%E7%BA%A7/",{y:"p",title:"高级 分类"},["/zh/category/高级/","/zh/category/%E9%AB%98%E7%BA%A7/index.html"]],["v-4a3a00cb","/tag/components/",{y:"p",title:"Components Tag"},["/tag/components/index.html"]],["v-c6194f12","/zh/category/markdown/",{y:"p",title:"Markdown 分类"},["/zh/category/markdown/index.html"]],["v-00e3f51a","/tag/customize/",{y:"p",title:"Customize Tag"},["/tag/customize/index.html"]],["v-461c53b2","/zh/category/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/",{y:"p",title:"快速上手 分类"},["/zh/category/快速上手/","/zh/category/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/index.html"]],["v-39495c82","/tag/advanced/",{y:"p",title:"Advanced Tag"},["/tag/advanced/index.html"]],["v-2cb2911b","/zh/category/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/",{y:"p",title:"基础知识 分类"},["/zh/category/基础知识/","/zh/category/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/index.html"]],["v-284efd1e","/tag/demo/",{y:"p",title:"Demo Tag"},["/tag/demo/index.html"]],["v-6c3eef36","/zh/category/%E6%95%99%E7%A8%8B/",{y:"p",title:"教程 分类"},["/zh/category/教程/","/zh/category/%E6%95%99%E7%A8%8B/index.html"]],["v-7caf5674","/tag/project-command/",{y:"p",title:"Project Command Tag"},["/tag/project-command/index.html"]],["v-4a8aa8a9","/zh/category/vuepress/",{y:"p",title:"VuePress 分类"},["/zh/category/vuepress/index.html"]],["v-064a426b","/tag/project-config/",{y:"p",title:"Project Config Tag"},["/tag/project-config/index.html"]],["v-5459f616","/zh/category/%E5%8D%9A%E5%AE%A2/",{y:"p",title:"博客 分类"},["/zh/category/博客/","/zh/category/%E5%8D%9A%E5%AE%A2/index.html"]],["v-787cb550","/tag/project-content/",{y:"p",title:"Project Content Tag"},["/tag/project-content/index.html"]],["v-3ffb6dc0","/zh/category/%E5%8A%9F%E8%83%BD/",{y:"p",title:"功能 分类"},["/zh/category/功能/","/zh/category/%E5%8A%9F%E8%83%BD/index.html"]],["v-ec970f32","/tag/template/",{y:"p",title:"Template Tag"},["/tag/template/index.html"]],["v-48eaf20d","/zh/category/%E7%95%8C%E9%9D%A2/",{y:"p",title:"界面 分类"},["/zh/category/界面/","/zh/category/%E7%95%8C%E9%9D%A2/index.html"]],["v-7ac92c48","/tag/project-deployment/",{y:"p",title:"Project Deployment Tag"},["/tag/project-deployment/index.html"]],["v-d331a6bc","/zh/category/%E5%B8%83%E5%B1%80/",{y:"p",title:"布局 分类"},["/zh/category/布局/","/zh/category/%E5%B8%83%E5%B1%80/index.html"]],["v-74f6b827","/tag/setting-environment/",{y:"p",title:"Setting Environment Tag"},["/tag/setting-environment/index.html"]],["v-579978c4","/ru/category/",{y:"p",title:"Категория"},["/ru/category/index.html"]],["v-559b99c4","/tag/project-structure/",{y:"p",title:"Project Structure Tag"},["/tag/project-structure/index.html"]],["v-3bbc1c77","/ru/category/faq/",{y:"p",title:"FAQ Категория"},["/ru/category/faq/index.html"]],["v-ed16b278","/tag/vuepress/",{y:"p",title:"VuePress Tag"},["/tag/vuepress/index.html"]],["v-65310710","/ru/category/%D0%B4%D0%B5%D0%BC%D0%BE/",{y:"p",title:"Демо Категория"},["/ru/category/демо/","/ru/category/%D0%B4%D0%B5%D0%BC%D0%BE/index.html"]],["v-11856c02","/tag/file-structure/",{y:"p",title:"File Structure Tag"},["/tag/file-structure/index.html"]],["v-200522da","/ru/category/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3/",{y:"p",title:"Конфиг Категория"},["/ru/category/конфиг/","/ru/category/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3/index.html"]],["v-50a23d64","/tag/plugin/",{y:"p",title:"Plugin Tag"},["/tag/plugin/index.html"]],["v-fd8e3968","/ru/category/%D0%B2%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5/",{y:"p",title:"Вступление Категория"},["/ru/category/вступление/","/ru/category/%D0%B2%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5/index.html"]],["v-05f65958","/tag/theme/",{y:"p",title:"Theme Tag"},["/tag/theme/index.html"]],["v-4c7fc0b8","/ru/category/%D0%BC%D0%B8%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F/",{y:"p",title:"Миграция Категория"},["/ru/category/миграция/","/ru/category/%D0%BC%D0%B8%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F/index.html"]],["v-b3060a80","/tag/seo/",{y:"p",title:"SEO Tag"},["/tag/seo/index.html"]],["v-3e541862","/ru/category/config/",{y:"p",title:"Config Категория"},["/ru/category/config/index.html"]],["v-95628330","/tag/sitemap/",{y:"p",title:"Sitemap Tag"},["/tag/sitemap/index.html"]],["v-073d91d9","/ru/category/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE/",{y:"p",title:"Руководство Категория"},["/ru/category/руководство/","/ru/category/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE/index.html"]],["v-43c5a647","/tag/article/",{y:"p",title:"Article Tag"},["/tag/article/index.html"]],["v-4f1da5f4","/ru/category/%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F/",{y:"p",title:"Кастомизация Категория"},["/ru/category/кастомизация/","/ru/category/%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F/index.html"]],["v-19902290","/tag/encrypt/",{y:"p",title:"Encrypt Tag"},["/tag/encrypt/index.html"]],["v-1678462a","/ru/category/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B9/",{y:"p",title:"Продвинутый Категория"},["/ru/category/продвинутый/","/ru/category/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B9/index.html"]],["v-08ebef28","/tag/slide/",{y:"p",title:"Slide Tag"},["/tag/slide/index.html"]],["v-9c49deaa","/ru/category/%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA-%D1%81-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%B0%D0%BC%D0%B8/",{y:"p",title:"Учебник с примерами Категория"},["/ru/category/учебник-с-примерами/","/ru/category/%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA-%D1%81-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%B0%D0%BC%D0%B8/index.html"]],["v-2929028f","/tag/star/",{y:"p",title:"Star Tag"},["/tag/star/index.html"]],["v-7fc4e786","/ru/category/%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%82%D0%BA%D0%B0/",{y:"p",title:"Разметка Категория"},["/ru/category/разметка/","/ru/category/%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%82%D0%BA%D0%B0/index.html"]],["v-659ebe4b","/tag/blogger/",{y:"p",title:"Blogger Tag"},["/tag/blogger/index.html"]],["v-2384e026","/ru/category/%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/",{y:"p",title:"Начало работы Категория"},["/ru/category/начало-работы/","/ru/category/%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/index.html"]],["v-70ea9863","/tag/category/",{y:"p",title:"Category Tag"},["/tag/category/index.html"]],["v-ae0a4118","/ru/category/vuepress/",{y:"p",title:"VuePress Категория"},["/ru/category/vuepress/index.html"]],["v-b30541ba","/tag/tag/",{y:"p",title:"Tag Tag"},["/tag/tag/index.html"]],["v-167845ae","/ru/category/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B5/",{y:"p",title:"Продвинутые Категория"},["/ru/category/продвинутые/","/ru/category/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B5/index.html"]],["v-28f65f1c","/tag/path/",{y:"p",title:"Path Tag"},["/tag/path/index.html"]],["v-5e878dfe","/ru/category/%D0%B1%D0%BB%D0%BE%D0%B3/",{y:"p",title:"Блог Категория"},["/ru/category/блог/","/ru/category/%D0%B1%D0%BB%D0%BE%D0%B3/index.html"]],["v-16776980","/tag/timeline/",{y:"p",title:"Timeline Tag"},["/tag/timeline/index.html"]],["v-b6389022","/ru/category/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F/",{y:"p",title:"Функция Категория"},["/ru/category/функция/","/ru/category/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F/index.html"]],["v-320abf50","/tag/copy-code/",{y:"p",title:"Copy Code Tag"},["/tag/copy-code/index.html"]],["v-596f5205","/ru/category/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81/",{y:"p",title:"Интерфейс Категория"},["/ru/category/интерфейс/","/ru/category/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81/index.html"]],["v-28cde93c","/tag/meta/",{y:"p",title:"Meta Tag"},["/tag/meta/index.html"]],["v-234c185a","/ru/category/%D0%BC%D0%B0%D0%BA%D0%B5%D1%82/",{y:"p",title:"Макет Категория"},["/ru/category/макет/","/ru/category/%D0%BC%D0%B0%D0%BA%D0%B5%D1%82/index.html"]],["v-6a643951","/tag/page-info/",{y:"p",title:"Page Info Tag"},["/tag/page-info/index.html"]],["v-b4ad0e32","/ru/category/layout/",{y:"p",title:"Layout Категория"},["/ru/category/layout/index.html"]],["v-ab34b132","/tag/image-preview/",{y:"p",title:"Image Preview Tag"},["/tag/image-preview/index.html"]],["v-0938e17c","/ru/category/markdown/",{y:"p",title:"Markdown Категория"},["/ru/category/markdown/index.html"]],["v-695ab979","/tag/search/",{y:"p",title:"Search Tag"},["/tag/search/index.html"]],["v-0145a1b3","/tag/get-started/",{y:"p",title:"Get Started Tag"},["/tag/get-started/index.html"]],["v-a3c93b7c","/tag/install/",{y:"p",title:"Install Tag"},["/tag/install/index.html"]],["v-015a7308","/tag/usage/",{y:"p",title:"Usage Tag"},["/tag/usage/index.html"]],["v-280c3349","/tag/a11y/",{y:"p",title:"A11y Tag"},["/tag/a11y/index.html"]],["v-004d9a38","/tag/interface/",{y:"p",title:"Interface Tag"},["/tag/interface/index.html"]],["v-fd16f1da","/tag/code-themes/",{y:"p",title:"Code Themes Tag"},["/tag/code-themes/index.html"]],["v-b4180ab0","/tag/darkmode/",{y:"p",title:"Darkmode Tag"},["/tag/darkmode/index.html"]],["v-28949148","/tag/icon/",{y:"p",title:"Icon Tag"},["/tag/icon/index.html"]],["v-e44f6a04","/tag/theme-color/",{y:"p",title:"Theme Color Tag"},["/tag/theme-color/index.html"]],["v-fc261d04","/tag/breadcrumb/",{y:"p",title:"Breadcrumb Tag"},["/tag/breadcrumb/index.html"]],["v-e05d10f8","/tag/catalog/",{y:"p",title:"Catalog Tag"},["/tag/catalog/index.html"]],["v-68ff3034","/tag/footer/",{y:"p",title:"Footer Tag"},["/tag/footer/index.html"]],["v-5b28d011","/tag/navbar/",{y:"p",title:"Navbar Tag"},["/tag/navbar/index.html"]],["v-cc0796be","/tag/sidebar/",{y:"p",title:"Sidebar Tag"},["/tag/sidebar/index.html"]],["v-75b70d7f","/tag/slides/",{y:"p",title:"Slides Tag"},["/tag/slides/index.html"]],["v-465a4cd0","/tag/align/",{y:"p",title:"Align Tag"},["/tag/align/index.html"]],["v-7285a2aa","/tag/attributes/",{y:"p",title:"Attributes Tag"},["/tag/attributes/index.html"]],["v-3ffe9842","/tag/chart/",{y:"p",title:"Chart Tag"},["/tag/chart/index.html"]],["v-314ddd42","/tag/code-tabs/",{y:"p",title:"Code Tabs Tag"},["/tag/code-tabs/index.html"]],["v-67c93c9c","/tag/container/",{y:"p",title:"Container Tag"},["/tag/container/index.html"]],["v-330cd8cc","/tag/code-demo/",{y:"p",title:"Code Demo Tag"},["/tag/code-demo/index.html"]],["v-962e227a","/tag/echarts/",{y:"p",title:"ECharts Tag"},["/tag/echarts/index.html"]],["v-dc7bf8e6","/tag/flowchart/",{y:"p",title:"Flowchart Tag"},["/tag/flowchart/index.html"]],["v-24f6e77e","/tag/footnote/",{y:"p",title:"Footnote Tag"},["/tag/footnote/index.html"]],["v-2af7dbfc","/tag/image/",{y:"p",title:"Image Tag"},["/tag/image/index.html"]],["v-0f5b01aa","/tag/include-files/",{y:"p",title:"Include Files Tag"},["/tag/include-files/index.html"]],["v-260e98f9","/tag/markup/",{y:"p",title:"Markup Tag"},["/tag/markup/index.html"]],["v-7ecf7e0a","/tag/diagram/",{y:"p",title:"Diagram Tag"},["/tag/diagram/index.html"]],["v-10e1aac6","/tag/playground/",{y:"p",title:"Playground Tag"},["/tag/playground/index.html"]],["v-041cb4dd","/tag/stylize/",{y:"p",title:"Stylize Tag"},["/tag/stylize/index.html"]],["v-9f56f392","/tag/superscript/",{y:"p",title:"Superscript Tag"},["/tag/superscript/index.html"]],["v-166cfb52","/tag/subscript/",{y:"p",title:"Subscript Tag"},["/tag/subscript/index.html"]],["v-292e7ae3","/tag/tabs/",{y:"p",title:"Tabs Tag"},["/tag/tabs/index.html"]],["v-57a5add7","/tag/task-list/",{y:"p",title:"Task List Tag"},["/tag/task-list/index.html"]],["v-b3051f94","/tag/tex/",{y:"p",title:"TEX Tag"},["/tag/tex/index.html"]],["v-3891cf12","/tag/emoji/",{y:"p",title:"Emoji Tag"},["/tag/emoji/index.html"]],["v-540234fd","/zh/tag/",{y:"p",title:"标签"},["/zh/tag/index.html"]],["v-90a0a3fe","/zh/tag/%E9%85%8D%E7%BD%AE/",{y:"p",title:"配置 标签"},["/zh/tag/配置/","/zh/tag/%E9%85%8D%E7%BD%AE/index.html"]],["v-c349ccc2","/zh/tag/%E5%A4%9A%E8%AF%AD%E8%A8%80/",{y:"p",title:"多语言 标签"},["/zh/tag/多语言/","/zh/tag/%E5%A4%9A%E8%AF%AD%E8%A8%80/index.html"]],["v-1563f5a6","/zh/tag/%E4%BB%8B%E7%BB%8D/",{y:"p",title:"介绍 标签"},["/zh/tag/介绍/","/zh/tag/%E4%BB%8B%E7%BB%8D/index.html"]],["v-d563ad10","/zh/tag/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE/",{y:"p",title:"主题配置 标签"},["/zh/tag/主题配置/","/zh/tag/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE/index.html"]],["v-7296af2c","/zh/tag/%E6%A0%B7%E5%BC%8F/",{y:"p",title:"样式 标签"},["/zh/tag/样式/","/zh/tag/%E6%A0%B7%E5%BC%8F/index.html"]],["v-4c25e204","/zh/tag/%E8%BF%81%E7%A7%BB/",{y:"p",title:"迁移 标签"},["/zh/tag/迁移/","/zh/tag/%E8%BF%81%E7%A7%BB/index.html"]],["v-a6400be2","/zh/tag/%E9%A1%B5%E9%9D%A2/",{y:"p",title:"页面 标签"},["/zh/tag/页面/","/zh/tag/%E9%A1%B5%E9%9D%A2/index.html"]],["v-0c41267c","/zh/tag/frontmatter/",{y:"p",title:"Frontmatter 标签"},["/zh/tag/frontmatter/index.html"]],["v-3ae35da3","/zh/tag/%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A1%B5/",{y:"p",title:"博客主页 标签"},["/zh/tag/博客主页/","/zh/tag/%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A1%B5/index.html"]],["v-3cb2aff4","/zh/tag/%E4%B8%BB%E9%A1%B5/",{y:"p",title:"主页 标签"},["/zh/tag/主页/","/zh/tag/%E4%B8%BB%E9%A1%B5/index.html"]],["v-64f30c90","/zh/tag/%E4%BF%A1%E6%81%AF/",{y:"p",title:"信息 标签"},["/zh/tag/信息/","/zh/tag/%E4%BF%A1%E6%81%AF/index.html"]],["v-2d94c424","/zh/tag/%E5%B8%83%E5%B1%80/",{y:"p",title:"布局 标签"},["/zh/tag/布局/","/zh/tag/%E5%B8%83%E5%B1%80/index.html"]],["v-efc212cc","/zh/tag/%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE/",{y:"p",title:"插件配置 标签"},["/zh/tag/插件配置/","/zh/tag/%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE/index.html"]],["v-28a17641","/zh/tag/%E5%8D%9A%E5%AE%A2/",{y:"p",title:"博客 标签"},["/zh/tag/博客/","/zh/tag/%E5%8D%9A%E5%AE%A2/index.html"]],["v-b1339a64","/zh/tag/%E8%AF%84%E8%AE%BA/",{y:"p",title:"评论 标签"},["/zh/tag/评论/","/zh/tag/%E8%AF%84%E8%AE%BA/index.html"]],["v-30233ec0","/zh/tag/%E7%89%88%E6%9D%83%E4%BF%A1%E6%81%AF/",{y:"p",title:"版权信息 标签"},["/zh/tag/版权信息/","/zh/tag/%E7%89%88%E6%9D%83%E4%BF%A1%E6%81%AF/index.html"]],["v-4ec52f74","/zh/tag/feed/",{y:"p",title:"Feed 标签"},["/zh/tag/feed/index.html"]],["v-2e14b8c3","/zh/tag/markdown/",{y:"p",title:"Markdown 标签"},["/zh/tag/markdown/index.html"]],["v-f40fc5e6","/zh/tag/%E6%8F%92%E4%BB%B6%E9%80%89%E9%A1%B9/",{y:"p",title:"插件选项 标签"},["/zh/tag/插件选项/","/zh/tag/%E6%8F%92%E4%BB%B6%E9%80%89%E9%A1%B9/index.html"]],["v-6dea22b2","/zh/tag/pwa/",{y:"p",title:"PWA 标签"},["/zh/tag/pwa/index.html"]],["v-04860615","/zh/tag/%E5%A4%96%E8%A7%82/",{y:"p",title:"外观 标签"},["/zh/tag/外观/","/zh/tag/%E5%A4%96%E8%A7%82/index.html"]],["v-5a1fa5ba","/zh/tag/%E5%9F%BA%E7%A1%80/",{y:"p",title:"基础 标签"},["/zh/tag/基础/","/zh/tag/%E5%9F%BA%E7%A1%80/index.html"]],["v-da6c41e8","/zh/tag/%E5%8A%9F%E8%83%BD/",{y:"p",title:"功能 标签"},["/zh/tag/功能/","/zh/tag/%E5%8A%9F%E8%83%BD/index.html"]],["v-c545c864","/zh/tag/%E8%87%AA%E5%AE%9A%E4%B9%89/",{y:"p",title:"自定义 标签"},["/zh/tag/自定义/","/zh/tag/%E8%87%AA%E5%AE%9A%E4%B9%89/index.html"]],["v-e9b31446","/zh/tag/%E7%BB%84%E4%BB%B6/",{y:"p",title:"组件 标签"},["/zh/tag/组件/","/zh/tag/%E7%BB%84%E4%BB%B6/index.html"]],["v-6578a37b","/zh/tag/%E9%AB%98%E7%BA%A7/",{y:"p",title:"高级 标签"},["/zh/tag/高级/","/zh/tag/%E9%AB%98%E7%BA%A7/index.html"]],["v-983c9e4c","/zh/tag/%E7%A4%BA%E4%BE%8B/",{y:"p",title:"示例 标签"},["/zh/tag/示例/","/zh/tag/%E7%A4%BA%E4%BE%8B/index.html"]],["v-78d8f418","/zh/tag/%E9%A1%B9%E7%9B%AE%E5%91%BD%E4%BB%A4/",{y:"p",title:"项目命令 标签"},["/zh/tag/项目命令/","/zh/tag/%E9%A1%B9%E7%9B%AE%E5%91%BD%E4%BB%A4/index.html"]],["v-311cb40f","/zh/tag/%E9%85%8D%E7%BD%AE%E9%A1%B9%E7%9B%AE/",{y:"p",title:"配置项目 标签"},["/zh/tag/配置项目/","/zh/tag/%E9%85%8D%E7%BD%AE%E9%A1%B9%E7%9B%AE/index.html"]],["v-2f5babe8","/zh/tag/%E9%A1%B9%E7%9B%AE%E5%86%85%E5%AE%B9/",{y:"p",title:"项目内容 标签"},["/zh/tag/项目内容/","/zh/tag/%E9%A1%B9%E7%9B%AE%E5%86%85%E5%AE%B9/index.html"]],["v-550af292","/zh/tag/%E6%A8%A1%E6%9D%BF/",{y:"p",title:"模板 标签"},["/zh/tag/模板/","/zh/tag/%E6%A8%A1%E6%9D%BF/index.html"]],["v-12a59350","/zh/tag/%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE/",{y:"p",title:"部署项目 标签"},["/zh/tag/部署项目/","/zh/tag/%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE/index.html"]],["v-29d9f7e6","/zh/tag/%E5%87%86%E5%A4%87%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83/",{y:"p",title:"准备运行环境 标签"},["/zh/tag/准备运行环境/","/zh/tag/%E5%87%86%E5%A4%87%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83/index.html"]],["v-48a7ee16","/zh/tag/vuepress/",{y:"p",title:"VuePress 标签"},["/zh/tag/vuepress/index.html"]],["v-57aa16ed","/zh/tag/%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84/",{y:"p",title:"文件结构 标签"},["/zh/tag/文件结构/","/zh/tag/%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84/index.html"]],["v-1d49d7ab","/zh/tag/%E6%8F%92%E4%BB%B6/",{y:"p",title:"插件 标签"},["/zh/tag/插件/","/zh/tag/%E6%8F%92%E4%BB%B6/index.html"]],["v-3cc0a609","/zh/tag/%E4%B8%BB%E9%A2%98/",{y:"p",title:"主题 标签"},["/zh/tag/主题/","/zh/tag/%E4%B8%BB%E9%A2%98/index.html"]],["v-6deb3def","/zh/tag/seo/",{y:"p",title:"SEO 标签"},["/zh/tag/seo/index.html"]],["v-6f0c5bd2","/zh/tag/sitemap/",{y:"p",title:"Sitemap 标签"},["/zh/tag/sitemap/index.html"]],["v-6ffd29e5","/zh/tag/%E6%96%87%E7%AB%A0/",{y:"p",title:"文章 标签"},["/zh/tag/文章/","/zh/tag/%E6%96%87%E7%AB%A0/index.html"]],["v-45194882","/zh/tag/%E5%8A%A0%E5%AF%86/",{y:"p",title:"加密 标签"},["/zh/tag/加密/","/zh/tag/%E5%8A%A0%E5%AF%86/index.html"]],["v-185fadbc","/zh/tag/%E5%B9%BB%E7%81%AF%E7%89%87/",{y:"p",title:"幻灯片 标签"},["/zh/tag/幻灯片/","/zh/tag/%E5%B9%BB%E7%81%AF%E7%89%87/index.html"]],["v-8426c04e","/zh/tag/%E6%94%B6%E8%97%8F/",{y:"p",title:"收藏 标签"},["/zh/tag/收藏/","/zh/tag/%E6%94%B6%E8%97%8F/index.html"]],["v-1f7d8923","/zh/tag/%E5%8D%9A%E4%B8%BB%E4%BF%A1%E6%81%AF/",{y:"p",title:"博主信息 标签"},["/zh/tag/博主信息/","/zh/tag/%E5%8D%9A%E4%B8%BB%E4%BF%A1%E6%81%AF/index.html"]],["v-15d7ddc6","/zh/tag/%E5%88%86%E7%B1%BB/",{y:"p",title:"分类 标签"},["/zh/tag/分类/","/zh/tag/%E5%88%86%E7%B1%BB/index.html"]],["v-187c10fe","/zh/tag/%E6%A0%87%E7%AD%BE/",{y:"p",title:"标签 标签"},["/zh/tag/标签/","/zh/tag/%E6%A0%87%E7%AD%BE/index.html"]],["v-4ca7598c","/zh/tag/%E8%B7%AF%E5%BE%84/",{y:"p",title:"路径 标签"},["/zh/tag/路径/","/zh/tag/%E8%B7%AF%E5%BE%84/index.html"]],["v-949bed1e","/zh/tag/%E6%97%B6%E9%97%B4%E7%BA%BF/",{y:"p",title:"时间线 标签"},["/zh/tag/时间线/","/zh/tag/%E6%97%B6%E9%97%B4%E7%BA%BF/index.html"]],["v-b920fe88","/zh/tag/%E4%BB%A3%E7%A0%81%E5%A4%8D%E5%88%B6/",{y:"p",title:"代码复制 标签"},["/zh/tag/代码复制/","/zh/tag/%E4%BB%A3%E7%A0%81%E5%A4%8D%E5%88%B6/index.html"]],["v-6c818213","/zh/tag/%E5%85%83%E6%95%B0%E6%8D%AE/",{y:"p",title:"元数据 标签"},["/zh/tag/元数据/","/zh/tag/%E5%85%83%E6%95%B0%E6%8D%AE/index.html"]],["v-4302268d","/zh/tag/%E9%A1%B5%E9%9D%A2%E4%BF%A1%E6%81%AF/",{y:"p",title:"页面信息 标签"},["/zh/tag/页面信息/","/zh/tag/%E9%A1%B5%E9%9D%A2%E4%BF%A1%E6%81%AF/index.html"]],["v-9ed3b8ca","/zh/tag/%E5%9B%BE%E7%89%87%E6%B5%8F%E8%A7%88/",{y:"p",title:"图片浏览 标签"},["/zh/tag/图片浏览/","/zh/tag/%E5%9B%BE%E7%89%87%E6%B5%8F%E8%A7%88/index.html"]],["v-28240665","/zh/tag/%E6%90%9C%E7%B4%A2/",{y:"p",title:"搜索 标签"},["/zh/tag/搜索/","/zh/tag/%E6%90%9C%E7%B4%A2/index.html"]],["v-052589fe","/zh/tag/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/",{y:"p",title:"快速上手 标签"},["/zh/tag/快速上手/","/zh/tag/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/index.html"]],["v-89f7023e","/zh/tag/%E5%AE%89%E8%A3%85/",{y:"p",title:"安装 标签"},["/zh/tag/安装/","/zh/tag/%E5%AE%89%E8%A3%85/index.html"]],["v-496c12d5","/zh/tag/%E4%BD%BF%E7%94%A8/",{y:"p",title:"使用 标签"},["/zh/tag/使用/","/zh/tag/%E4%BD%BF%E7%94%A8/index.html"]],["v-c88d394e","/zh/tag/%E7%95%8C%E9%9D%A2/",{y:"p",title:"界面 标签"},["/zh/tag/界面/","/zh/tag/%E7%95%8C%E9%9D%A2/index.html"]],["v-7f9737ee","/zh/tag/%E6%97%A0%E9%9A%9C%E7%A2%8D/",{y:"p",title:"无障碍 标签"},["/zh/tag/无障碍/","/zh/tag/%E6%97%A0%E9%9A%9C%E7%A2%8D/index.html"]],["v-05cae62e","/zh/tag/%E4%BB%A3%E7%A0%81%E4%B8%BB%E9%A2%98/",{y:"p",title:"代码主题 标签"},["/zh/tag/代码主题/","/zh/tag/%E4%BB%A3%E7%A0%81%E4%B8%BB%E9%A2%98/index.html"]],["v-e35bb030","/zh/tag/%E6%B7%B1%E8%89%B2%E6%A8%A1%E5%BC%8F/",{y:"p",title:"深色模式 标签"},["/zh/tag/深色模式/","/zh/tag/%E6%B7%B1%E8%89%B2%E6%A8%A1%E5%BC%8F/index.html"]],["v-8367f28a","/zh/tag/%E5%9B%BE%E6%A0%87/",{y:"p",title:"图标 标签"},["/zh/tag/图标/","/zh/tag/%E5%9B%BE%E6%A0%87/index.html"]],["v-7e0f638e","/zh/tag/%E4%B8%BB%E9%A2%98%E8%89%B2/",{y:"p",title:"主题色 标签"},["/zh/tag/主题色/","/zh/tag/%E4%B8%BB%E9%A2%98%E8%89%B2/index.html"]],["v-0c3b2925","/zh/tag/%E8%B7%AF%E5%BE%84%E5%AF%BC%E8%88%AA/",{y:"p",title:"路径导航 标签"},["/zh/tag/路径导航/","/zh/tag/%E8%B7%AF%E5%BE%84%E5%AF%BC%E8%88%AA/index.html"]],["v-1a48ba96","/zh/tag/%E7%9B%AE%E5%BD%95/",{y:"p",title:"目录 标签"},["/zh/tag/目录/","/zh/tag/%E7%9B%AE%E5%BD%95/index.html"]],["v-4268604a","/zh/tag/%E9%A1%B5%E8%84%9A/",{y:"p",title:"页脚 标签"},["/zh/tag/页脚/","/zh/tag/%E9%A1%B5%E8%84%9A/index.html"]],["v-04c3401e","/zh/tag/%E5%AF%BC%E8%88%AA%E6%A0%8F/",{y:"p",title:"导航栏 标签"},["/zh/tag/导航栏/","/zh/tag/%E5%AF%BC%E8%88%AA%E6%A0%8F/index.html"]],["v-27ec539c","/zh/tag/%E4%BE%A7%E8%BE%B9%E6%A0%8F/",{y:"p",title:"侧边栏 标签"},["/zh/tag/侧边栏/","/zh/tag/%E4%BE%A7%E8%BE%B9%E6%A0%8F/index.html"]],["v-5458566b","/zh/tag/%E5%AF%B9%E9%BD%90/",{y:"p",title:"对齐 标签"},["/zh/tag/对齐/","/zh/tag/%E5%AF%B9%E9%BD%90/index.html"]],["v-daa3d960","/zh/tag/%E5%B1%9E%E6%80%A7/",{y:"p",title:"属性 标签"},["/zh/tag/属性/","/zh/tag/%E5%B1%9E%E6%80%A7/index.html"]],["v-e3c6cc3c","/zh/tag/%E5%9B%BE%E8%A1%A8/",{y:"p",title:"图表 标签"},["/zh/tag/图表/","/zh/tag/%E5%9B%BE%E8%A1%A8/index.html"]],["v-20d20a98","/zh/tag/%E4%BB%A3%E7%A0%81%E7%BB%84/",{y:"p",title:"代码组 标签"},["/zh/tag/代码组/","/zh/tag/%E4%BB%A3%E7%A0%81%E7%BB%84/index.html"]],["v-7a014fa4","/zh/tag/%E5%AE%B9%E5%99%A8/",{y:"p",title:"容器 标签"},["/zh/tag/容器/","/zh/tag/%E5%AE%B9%E5%99%A8/index.html"]],["v-223fad44","/zh/tag/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/",{y:"p",title:"代码演示 标签"},["/zh/tag/代码演示/","/zh/tag/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/index.html"]],["v-6fd7fb1c","/zh/tag/echarts/",{y:"p",title:"ECharts 标签"},["/zh/tag/echarts/index.html"]],["v-0120e66b","/zh/tag/%E6%B5%81%E7%A8%8B%E5%9B%BE/",{y:"p",title:"流程图 标签"},["/zh/tag/流程图/","/zh/tag/%E6%B5%81%E7%A8%8B%E5%9B%BE/index.html"]],["v-655ad57a","/zh/tag/%E8%84%9A%E6%B3%A8/",{y:"p",title:"脚注 标签"},["/zh/tag/脚注/","/zh/tag/%E8%84%9A%E6%B3%A8/index.html"]],["v-1750698c","/zh/tag/%E5%9B%BE%E7%89%87/",{y:"p",title:"图片 标签"},["/zh/tag/图片/","/zh/tag/%E5%9B%BE%E7%89%87/index.html"]],["v-45a504a7","/zh/tag/%E5%AF%BC%E5%85%A5%E6%96%87%E4%BB%B6/",{y:"p",title:"导入文件 标签"},["/zh/tag/导入文件/","/zh/tag/%E5%AF%BC%E5%85%A5%E6%96%87%E4%BB%B6/index.html"]],["v-5bb13956","/zh/tag/%E6%A0%87%E8%AE%B0/",{y:"p",title:"标记 标签"},["/zh/tag/标记/","/zh/tag/%E6%A0%87%E8%AE%B0/index.html"]],["v-c94a3ece","/zh/tag/%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA/",{y:"p",title:"交互演示 标签"},["/zh/tag/交互演示/","/zh/tag/%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA/index.html"]],["v-3ce734eb","/zh/tag/%E6%A0%B7%E5%BC%8F%E5%8C%96/",{y:"p",title:"样式化 标签"},["/zh/tag/样式化/","/zh/tag/%E6%A0%B7%E5%BC%8F%E5%8C%96/index.html"]],["v-54c9eff4","/zh/tag/%E4%B8%8A%E4%B8%8B%E8%A7%92%E6%A0%87/",{y:"p",title:"上下角标 标签"},["/zh/tag/上下角标/","/zh/tag/%E4%B8%8A%E4%B8%8B%E8%A7%92%E6%A0%87/index.html"]],["v-7c44b591","/zh/tag/%E9%80%89%E9%A1%B9%E5%8D%A1/",{y:"p",title:"选项卡 标签"},["/zh/tag/选项卡/","/zh/tag/%E9%80%89%E9%A1%B9%E5%8D%A1/index.html"]],["v-a7b1aac4","/zh/tag/%E4%BB%BB%E5%8A%A1%E5%88%97%E8%A1%A8/",{y:"p",title:"任务列表 标签"},["/zh/tag/任务列表/","/zh/tag/%E4%BB%BB%E5%8A%A1%E5%88%97%E8%A1%A8/index.html"]],["v-6debb365","/zh/tag/tex/",{y:"p",title:"TEX 标签"},["/zh/tag/tex/index.html"]],["v-eebd6834","/zh/tag/emoji/",{y:"p",title:"Emoji 标签"},["/zh/tag/emoji/index.html"]],["v-7a0149f0","/ru/tag/",{y:"p",title:"Тэги"},["/ru/tag/index.html"]],["v-48f89169","/ru/tag/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3/",{y:"p",title:"Конфиг Тэги"},["/ru/tag/конфиг/","/ru/tag/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3/index.html"]],["v-be31d86e","/ru/tag/i18n/",{y:"p",title:"I18N Тэги"},["/ru/tag/i18n/index.html"]],["v-5ec220c4","/ru/tag/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5/",{y:"p",title:"Введение Тэги"},["/ru/tag/введение/","/ru/tag/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5/index.html"]],["v-c2314c3c","/ru/tag/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3-%D1%82%D0%B5%D0%BC%D1%8B/",{y:"p",title:"Конфиг темы Тэги"},["/ru/tag/конфиг-темы/","/ru/tag/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3-%D1%82%D0%B5%D0%BC%D1%8B/index.html"]],["v-c87c949c","/ru/tag/%D1%81%D1%82%D0%B8%D0%BB%D1%8C/",{y:"p",title:"Стиль Тэги"},["/ru/tag/стиль/","/ru/tag/%D1%81%D1%82%D0%B8%D0%BB%D1%8C/index.html"]],["v-43ce6422","/ru/tag/%D0%B2%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5/",{y:"p",title:"Вступление Тэги"},["/ru/tag/вступление/","/ru/tag/%D0%B2%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5/index.html"]],["v-5a9fb17a","/ru/tag/%D0%BC%D0%B8%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F/",{y:"p",title:"Миграция Тэги"},["/ru/tag/миграция/","/ru/tag/%D0%BC%D0%B8%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F/index.html"]],["v-f0164b66","/ru/tag/frontmatter/",{y:"p",title:"Frontmatter Тэги"},["/ru/tag/frontmatter/index.html"]],["v-7c3fc16e","/ru/tag/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0/",{y:"p",title:"Страница Тэги"},["/ru/tag/страница/","/ru/tag/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0/index.html"]],["v-341712cd","/ru/tag/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-%D0%B1%D0%BB%D0%BE%D0%B3%D0%B0/",{y:"p",title:"Главная блога Тэги"},["/ru/tag/главная-блога/","/ru/tag/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-%D0%B1%D0%BB%D0%BE%D0%B3%D0%B0/index.html"]],["v-3c081862","/ru/tag/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F/",{y:"p",title:"Главная Тэги"},["/ru/tag/главная/","/ru/tag/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F/index.html"]],["v-95c6d47e","/ru/tag/%D0%B8%D0%BD%D1%84%D0%BE/",{y:"p",title:"Инфо Тэги"},["/ru/tag/инфо/","/ru/tag/%D0%B8%D0%BD%D1%84%D0%BE/index.html"]],["v-407521ae","/ru/tag/%D0%BC%D0%B0%D0%BA%D0%B5%D1%82/",{y:"p",title:"Макет Тэги"},["/ru/tag/макет/","/ru/tag/%D0%BC%D0%B0%D0%BA%D0%B5%D1%82/index.html"]],["v-23c398f4","/ru/tag/%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD/",{y:"p",title:"Плагин Тэги"},["/ru/tag/плагин/","/ru/tag/%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD/index.html"]],["v-90a07c58","/ru/tag/%D0%B1%D0%BB%D0%BE%D0%B3/",{y:"p",title:"Блог Тэги"},["/ru/tag/блог/","/ru/tag/%D0%B1%D0%BB%D0%BE%D0%B3/index.html"]],["v-792ca4aa","/ru/tag/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0/",{y:"p",title:"Конфигурация плагина Тэги"},["/ru/tag/конфигурация-плагина/","/ru/tag/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0/index.html"]],["v-ff174532","/ru/tag/%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B9/",{y:"p",title:"Комментарий Тэги"},["/ru/tag/комментарий/","/ru/tag/%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B9/index.html"]],["v-18139678","/ru/tag/%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B0/",{y:"p",title:"Авторские права Тэги"},["/ru/tag/авторские-права/","/ru/tag/%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B0/index.html"]],["v-7a385566","/ru/tag/%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB/",{y:"p",title:"Канал Тэги"},["/ru/tag/канал/","/ru/tag/%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB/index.html"]],["v-1494797e","/ru/tag/%D0%BF%D0%BE%D1%82%D0%BE%D0%BA/",{y:"p",title:"Поток Тэги"},["/ru/tag/поток/","/ru/tag/%D0%BF%D0%BE%D1%82%D0%BE%D0%BA/index.html"]],["v-9caba1d0","/ru/tag/markdown/",{y:"p",title:"Markdown Тэги"},["/ru/tag/markdown/index.html"]],["v-40fd1e13","/ru/tag/%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%82%D0%BA%D0%B0/",{y:"p",title:"Разметка Тэги"},["/ru/tag/разметка/","/ru/tag/%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%82%D0%BA%D0%B0/index.html"]],["v-2e7f4b3d","/ru/tag/pwa/",{y:"p",title:"PWA Тэги"},["/ru/tag/pwa/index.html"]],["v-9e4f44d6","/ru/tag/%D0%B2%D0%BD%D0%B5%D1%88%D0%BD%D0%B8%D0%B9-%D0%B2%D0%B8%D0%B4/",{y:"p",title:"Внешний вид Тэги"},["/ru/tag/внешний-вид/","/ru/tag/%D0%B2%D0%BD%D0%B5%D1%88%D0%BD%D0%B8%D0%B9-%D0%B2%D0%B8%D0%B4/index.html"]],["v-19643bd4","/ru/tag/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B/",{y:"p",title:"Основы Тэги"},["/ru/tag/основы/","/ru/tag/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B/index.html"]],["v-1819cb68","/ru/tag/themeconfig/",{y:"p",title:"ThemeConfig Тэги"},["/ru/tag/themeconfig/index.html"]],["v-3c1a3b76","/ru/tag/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F/",{y:"p",title:"Функция Тэги"},["/ru/tag/функция/","/ru/tag/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F/index.html"]],["v-386d165e","/ru/tag/%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%8F%D0%B7%D1%8B%D1%87%D0%BD%D0%BE%D1%81%D1%82%D1%8C/",{y:"p",title:"Мультиязычность Тэги"},["/ru/tag/мультиязычность/","/ru/tag/%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%8F%D0%B7%D1%8B%D1%87%D0%BD%D0%BE%D1%81%D1%82%D1%8C/index.html"]],["v-30ffea7c","/ru/tag/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B/",{y:"p",title:"Компоненты Тэги"},["/ru/tag/компоненты/","/ru/tag/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B/index.html"]],["v-484e1cdc","/ru/tag/%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F/",{y:"p",title:"Кастомизация Тэги"},["/ru/tag/кастомизация/","/ru/tag/%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F/index.html"]],["v-2b634e80","/ru/tag/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B9/",{y:"p",title:"Продвинутый Тэги"},["/ru/tag/продвинутый/","/ru/tag/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B9/index.html"]],["v-268fb04e","/ru/tag/%D0%B4%D0%B5%D0%BC%D0%BE/",{y:"p",title:"Демо Тэги"},["/ru/tag/демо/","/ru/tag/%D0%B4%D0%B5%D0%BC%D0%BE/index.html"]],["v-d110167e","/ru/tag/%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/",{y:"p",title:"Команды проекта Тэги"},["/ru/tag/команды-проекта/","/ru/tag/%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/index.html"]],["v-3ae548f6","/ru/tag/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/",{y:"p",title:"Конфиг проекта Тэги"},["/ru/tag/конфиг-проекта/","/ru/tag/%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/index.html"]],["v-45471b1e","/ru/tag/%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/",{y:"p",title:"Контент проекта Тэги"},["/ru/tag/контент-проекта/","/ru/tag/%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/index.html"]],["v-7653984e","/ru/tag/%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD/",{y:"p",title:"Шаблон Тэги"},["/ru/tag/шаблон/","/ru/tag/%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD/index.html"]],["v-a830283c","/ru/tag/%D0%B4%D0%B5%D0%BF%D0%BB%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/",{y:"p",title:"Деплой проекта Тэги"},["/ru/tag/деплой-проекта/","/ru/tag/%D0%B4%D0%B5%D0%BF%D0%BB%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/index.html"]],["v-47fd0f3c","/ru/tag/%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D1%81%D1%80%D0%B5%D0%B4%D1%8B/",{y:"p",title:"Настройка среды Тэги"},["/ru/tag/настройка-среды/","/ru/tag/%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D1%81%D1%80%D0%B5%D0%B4%D1%8B/index.html"]],["v-b2969398","/ru/tag/%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/",{y:"p",title:"Структура проекта Тэги"},["/ru/tag/структура-проекта/","/ru/tag/%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0/index.html"]],["v-5f417f4a","/ru/tag/vuepress/",{y:"p",title:"VuePress Тэги"},["/ru/tag/vuepress/index.html"]],["v-59b83c65","/ru/tag/%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0/",{y:"p",title:"Структура файла Тэги"},["/ru/tag/структура-файла/","/ru/tag/%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0/index.html"]],["v-2384033c","/ru/tag/%D1%82%D0%B5%D0%BC%D0%B0/",{y:"p",title:"Тема Тэги"},["/ru/tag/тема/","/ru/tag/%D1%82%D0%B5%D0%BC%D0%B0/index.html"]],["v-2b634e04","/ru/tag/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B5/",{y:"p",title:"Продвинутые Тэги"},["/ru/tag/продвинутые/","/ru/tag/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B5/index.html"]],["v-8391f206","/ru/tag/%D1%81%D0%B5%D0%BE/",{y:"p",title:"СЕО Тэги"},["/ru/tag/сео/","/ru/tag/%D1%81%D0%B5%D0%BE/index.html"]],["v-2e80667a","/ru/tag/seo/",{y:"p",title:"SEO Тэги"},["/ru/tag/seo/index.html"]],["v-414ae11e","/ru/tag/%D0%BA%D0%B0%D1%80%D1%82%D0%B0-%D1%81%D0%B0%D0%B9%D1%82%D0%B0/",{y:"p",title:"Карта сайта Тэги"},["/ru/tag/карта-сайта/","/ru/tag/%D0%BA%D0%B0%D1%80%D1%82%D0%B0-%D1%81%D0%B0%D0%B9%D1%82%D0%B0/index.html"]],["v-6ff6f8c0","/ru/tag/%D1%81%D1%82%D0%B0%D1%82%D1%8C%D1%8F/",{y:"p",title:"Статья Тэги"},["/ru/tag/статья/","/ru/tag/%D1%81%D1%82%D0%B0%D1%82%D1%8C%D1%8F/index.html"]],["v-6867b3a8","/ru/tag/%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/",{y:"p",title:"Шифрование Тэги"},["/ru/tag/шифрование/","/ru/tag/%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/index.html"]],["v-d87f7658","/ru/tag/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4/",{y:"p",title:"Слайд Тэги"},["/ru/tag/слайд/","/ru/tag/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4/index.html"]],["v-663b0a4c","/ru/tag/%D0%B8%D0%B7%D0%B1%D1%80%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5/",{y:"p",title:"Избранное Тэги"},["/ru/tag/избранное/","/ru/tag/%D0%B8%D0%B7%D0%B1%D1%80%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5/index.html"]],["v-7f014b3c","/ru/tag/%D0%B1%D0%BB%D0%BE%D0%B3%D0%B5%D1%80/",{y:"p",title:"Блогер Тэги"},["/ru/tag/блогер/","/ru/tag/%D0%B1%D0%BB%D0%BE%D0%B3%D0%B5%D1%80/index.html"]],["v-0761da8c","/ru/tag/%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F/",{y:"p",title:"Категория Тэги"},["/ru/tag/категория/","/ru/tag/%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F/index.html"]],["v-bfd66324","/ru/tag/%D1%82%D0%B5%D0%B3/",{y:"p",title:"Тег Тэги"},["/ru/tag/тег/","/ru/tag/%D1%82%D0%B5%D0%B3/index.html"]],["v-5e9f3ad6","/ru/tag/%D0%BF%D1%83%D1%82%D1%8C/",{y:"p",title:"Путь Тэги"},["/ru/tag/путь/","/ru/tag/%D0%BF%D1%83%D1%82%D1%8C/index.html"]],["v-6cdcb7be","/ru/tag/%D1%82%D0%B0%D0%B9%D0%BC%D0%BB%D0%B0%D0%B9%D0%BD/",{y:"p",title:"Таймлайн Тэги"},["/ru/tag/таймлайн/","/ru/tag/%D1%82%D0%B0%D0%B9%D0%BC%D0%BB%D0%B0%D0%B9%D0%BD/index.html"]],["v-29dbef53","/ru/tag/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%B4%D0%B0/",{y:"p",title:"Копирование кода Тэги"},["/ru/tag/копирование-кода/","/ru/tag/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%B4%D0%B0/index.html"]],["v-0697bdd7","/ru/tag/%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F-%D0%BE-%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%B0%D0%B9%D1%82%D0%B0%D1%85/",{y:"p",title:"Информация о копирайтах Тэги"},["/ru/tag/информация-о-копирайтах/","/ru/tag/%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F-%D0%BE-%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%B0%D0%B9%D1%82%D0%B0%D1%85/index.html"]],["v-c6508270","/ru/tag/%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C/",{y:"p",title:"Шифровать Тэги"},["/ru/tag/шифровать/","/ru/tag/%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C/index.html"]],["v-c560c188","/ru/tag/%D0%BC%D0%B5%D1%82%D0%B0/",{y:"p",title:"Мета Тэги"},["/ru/tag/мета/","/ru/tag/%D0%BC%D0%B5%D1%82%D0%B0/index.html"]],["v-fa10f288","/ru/tag/%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F-%D0%BE-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B5/",{y:"p",title:"Информация о странице Тэги"},["/ru/tag/информация-о-странице/","/ru/tag/%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F-%D0%BE-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B5/index.html"]],["v-205019e8","/ru/tag/%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/",{y:"p",title:"Превью изображения Тэги"},["/ru/tag/превью-изображения/","/ru/tag/%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/index.html"]],["v-1f71a0cf","/ru/tag/%D0%BF%D0%BE%D0%B8%D1%81%D0%BA/",{y:"p",title:"Поиск Тэги"},["/ru/tag/поиск/","/ru/tag/%D0%BF%D0%BE%D0%B8%D1%81%D0%BA/index.html"]],["v-a17429e0","/ru/tag/%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/",{y:"p",title:"Начало работы Тэги"},["/ru/tag/начало-работы/","/ru/tag/%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/index.html"]],["v-09f9f7d0","/ru/tag/%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0/",{y:"p",title:"Установка Тэги"},["/ru/tag/установка/","/ru/tag/%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0/index.html"]],["v-1f01d0fa","/ru/tag/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/",{y:"p",title:"Использование Тэги"},["/ru/tag/использование/","/ru/tag/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/index.html"]],["v-bf138262","/ru/tag/a11y/",{y:"p",title:"A11y Тэги"},["/ru/tag/a11y/index.html"]],["v-1713ab5b","/ru/tag/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81/",{y:"p",title:"Интерфейс Тэги"},["/ru/tag/интерфейс/","/ru/tag/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81/index.html"]],["v-08a2acfe","/ru/tag/%D1%82%D0%B5%D0%BC%D1%8B-%D0%BA%D0%BE%D0%B4%D0%B0/",{y:"p",title:"Темы кода Тэги"},["/ru/tag/темы-кода/","/ru/tag/%D1%82%D0%B5%D0%BC%D1%8B-%D0%BA%D0%BE%D0%B4%D0%B0/index.html"]],["v-18b83a78","/ru/tag/%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC/",{y:"p",title:"Темный режим Тэги"},["/ru/tag/темный-режим/","/ru/tag/%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC/index.html"]],["v-56325268","/ru/tag/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0/",{y:"p",title:"Иконка Тэги"},["/ru/tag/иконка/","/ru/tag/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0/index.html"]],["v-593629e6","/ru/tag/%D1%86%D0%B2%D0%B5%D1%82-%D1%82%D0%B5%D0%BC%D1%8B/",{y:"p",title:"Цвет темы Тэги"},["/ru/tag/цвет-темы/","/ru/tag/%D1%86%D0%B2%D0%B5%D1%82-%D1%82%D0%B5%D0%BC%D1%8B/index.html"]],["v-4d34792d","/ru/tag/%D1%85%D0%BB%D0%B5%D0%B1%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B8/",{y:"p",title:"Хлебные крошки Тэги"},["/ru/tag/хлебные-крошки/","/ru/tag/%D1%85%D0%BB%D0%B5%D0%B1%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B8/index.html"]],["v-4c64763e","/ru/tag/catalog/",{y:"p",title:"Catalog Тэги"},["/ru/tag/catalog/index.html"]],["v-10bbd386","/ru/tag/layout/",{y:"p",title:"Layout Тэги"},["/ru/tag/layout/index.html"]],["v-75358cea","/ru/tag/%D1%84%D1%83%D1%82%D0%B5%D1%80/",{y:"p",title:"Футер Тэги"},["/ru/tag/футер/","/ru/tag/%D1%84%D1%83%D1%82%D0%B5%D1%80/index.html"]],["v-33d88ce1","/ru/tag/%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D1%8C-%D0%BD%D0%B0%D0%B2%D0%B8%D0%B3%D0%B0%D1%86%D0%B8%D0%B8/",{y:"p",title:"Панель навигации Тэги"},["/ru/tag/панель-навигации/","/ru/tag/%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D1%8C-%D0%BD%D0%B0%D0%B2%D0%B8%D0%B3%D0%B0%D1%86%D0%B8%D0%B8/index.html"]],["v-511f692c","/ru/tag/%D0%B1%D0%BE%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D1%8C/",{y:"p",title:"Боковая панель Тэги"},["/ru/tag/боковая-панель/","/ru/tag/%D0%B1%D0%BE%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D1%8C/index.html"]],["v-1ff5bb57","/ru/tag/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D1%8B/",{y:"p",title:"Слайды Тэги"},["/ru/tag/слайды/","/ru/tag/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D1%8B/index.html"]],["v-1ada4df0","/ru/tag/%D0%B2%D1%8B%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/",{y:"p",title:"Выравнивание Тэги"},["/ru/tag/выравнивание/","/ru/tag/%D0%B2%D1%8B%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/index.html"]],["v-1d96fa70","/ru/tag/%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D1%8B/",{y:"p",title:"Атрибуты Тэги"},["/ru/tag/атрибуты/","/ru/tag/%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D1%8B/index.html"]],["v-f9fc7e2e","/ru/tag/%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA/",{y:"p",title:"График Тэги"},["/ru/tag/график/","/ru/tag/%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA/index.html"]],["v-5d43a928","/ru/tag/%D0%B2%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8-%D0%BA%D0%BE%D0%B4%D0%B0/",{y:"p",title:"Вкладки кода Тэги"},["/ru/tag/вкладки-кода/","/ru/tag/%D0%B2%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8-%D0%BA%D0%BE%D0%B4%D0%B0/index.html"]],["v-54e27cc0","/ru/tag/%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80/",{y:"p",title:"Контейнер Тэги"},["/ru/tag/контейнер/","/ru/tag/%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80/index.html"]],["v-632c0909","/ru/tag/%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%B4%D0%B0/",{y:"p",title:"Демонстрация кода Тэги"},["/ru/tag/демонстрация-кода/","/ru/tag/%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%B4%D0%B0/index.html"]],["v-717bed7d","/ru/tag/echarts/",{y:"p",title:"ECharts Тэги"},["/ru/tag/echarts/index.html"]],["v-75903bc7","/ru/tag/flowchart/",{y:"p",title:"Flowchart Тэги"},["/ru/tag/flowchart/index.html"]],["v-2979b50d","/ru/tag/%D1%81%D0%BD%D0%BE%D1%81%D0%BA%D0%B0/",{y:"p",title:"Сноска Тэги"},["/ru/tag/сноска/","/ru/tag/%D1%81%D0%BD%D0%BE%D1%81%D0%BA%D0%B0/index.html"]],["v-08d789f7","/ru/tag/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5/",{y:"p",title:"Изображение Тэги"},["/ru/tag/изображение/","/ru/tag/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5/index.html"]],["v-c7f6176c","/ru/tag/%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2/",{y:"p",title:"Включение файлов Тэги"},["/ru/tag/включение-файлов/","/ru/tag/%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2/index.html"]],["v-f1c34d92","/ru/tag/%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5/",{y:"p",title:"Выделение Тэги"},["/ru/tag/выделение/","/ru/tag/%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5/index.html"]],["v-b4493ed2","/ru/tag/%D0%B4%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0/",{y:"p",title:"Диаграмма Тэги"},["/ru/tag/диаграмма/","/ru/tag/%D0%B4%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0/index.html"]],["v-b24b0c68","/ru/tag/playground/",{y:"p",title:"Playground Тэги"},["/ru/tag/playground/index.html"]],["v-5ba9245f","/ru/tag/%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F/",{y:"p",title:"Стилизация Тэги"},["/ru/tag/стилизация/","/ru/tag/%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F/index.html"]],["v-78f2c52f","/ru/tag/%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B8%D0%B9-%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81/",{y:"p",title:"Верхний индекс Тэги"},["/ru/tag/верхний-индекс/","/ru/tag/%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B8%D0%B9-%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81/index.html"]],["v-410b8411","/ru/tag/%D0%BD%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9-%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81/",{y:"p",title:"Нижний индекс Тэги"},["/ru/tag/нижний-индекс/","/ru/tag/%D0%BD%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9-%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81/index.html"]],["v-1286aff7","/ru/tag/%D0%B2%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8/",{y:"p",title:"Вкладки Тэги"},["/ru/tag/вкладки/","/ru/tag/%D0%B2%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8/index.html"]],["v-cd6f31a0","/ru/tag/%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B9/",{y:"p",title:"Список заданий Тэги"},["/ru/tag/список-заданий/","/ru/tag/%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B9/index.html"]],["v-2e80dbf0","/ru/tag/tex/",{y:"p",title:"TEX Тэги"},["/ru/tag/tex/index.html"]],["v-0beb0523","/ru/tag/%D1%8D%D0%BC%D0%BE%D0%B4%D0%B7%D0%B8/",{y:"p",title:"Эмодзи Тэги"},["/ru/tag/эмодзи/","/ru/tag/%D1%8D%D0%BC%D0%BE%D0%B4%D0%B7%D0%B8/index.html"]]];var Vuepress=defineComponent({name:"Vuepress",setup(){const Ge=usePageLayout();return()=>h$5(Ge.value)}}),createRoutes=()=>pagesRoutes.reduce((Ge,[Ye,Xe,at,ut])=>(Ge.push({name:Ye,path:Xe,component:Vuepress,meta:at},...ut.map(ht=>({path:ht,redirect:Xe}))),Ge),[{name:"404",path:"/:catchAll(.*)",component:Vuepress}]),historyCreator=createWebHistory,createVueRouter=()=>{const Ge=createRouter({history:historyCreator(removeEndingSlash("/hope/")),routes:createRoutes(),scrollBehavior:(Ye,Xe,at)=>at||(Ye.hash?{el:Ye.hash}:{top:0})});return Ge.beforeResolve(async(Ye,Xe)=>{var at;(Ye.path!==Xe.path||Xe===START_LOCATION_NORMALIZED)&&([pageData.value]=await Promise.all([resolvers.resolvePageData(Ye.name),(at=pagesComponents[Ye.name])==null?void 0:at.__asyncLoader()]))}),Ge},setupGlobalComponents=Ge=>{Ge.component("ClientOnly",ClientOnly),Ge.component("Content",Content)},setupGlobalComputed=(Ge,Ye,Xe)=>{const at=computed(()=>resolvers.resolveLayouts(Xe)),ut=computed(()=>resolvers.resolveRouteLocale(siteData.value.locales,Ye.currentRoute.value.path)),ht=computed(()=>resolvers.resolveSiteLocaleData(siteData.value,ut.value)),Bo=computed(()=>resolvers.resolvePageFrontmatter(pageData.value)),Ao=computed(()=>resolvers.resolvePageHeadTitle(pageData.value,ht.value)),To=computed(()=>resolvers.resolvePageHead(Ao.value,Bo.value,ht.value)),$o=computed(()=>resolvers.resolvePageLang(pageData.value)),xo=computed(()=>resolvers.resolvePageLayout(pageData.value,at.value));return Ge.provide(layoutsSymbol,at),Ge.provide(pageFrontmatterSymbol,Bo),Ge.provide(pageHeadTitleSymbol,Ao),Ge.provide(pageHeadSymbol,To),Ge.provide(pageLangSymbol,$o),Ge.provide(pageLayoutSymbol,xo),Ge.provide(routeLocaleSymbol,ut),Ge.provide(siteLocaleDataSymbol,ht),Object.defineProperties(Ge.config.globalProperties,{$frontmatter:{get:()=>Bo.value},$head:{get:()=>To.value},$headTitle:{get:()=>Ao.value},$lang:{get:()=>$o.value},$page:{get:()=>pageData.value},$routeLocale:{get:()=>ut.value},$site:{get:()=>siteData.value},$siteLocale:{get:()=>ht.value},$withBase:{get:()=>withBase}}),{layouts:at,pageData,pageFrontmatter:Bo,pageHead:To,pageHeadTitle:Ao,pageLang:$o,pageLayout:xo,routeLocale:ut,siteData,siteLocaleData:ht}},setupUpdateHead=()=>{const Ge=useRoute(),Ye=usePageHead(),Xe=usePageLang(),at=ref([]),ut=()=>{Ye.value.forEach(Bo=>{const Ao=queryHeadTag(Bo);Ao&&at.value.push(Ao)})},ht=()=>{document.documentElement.lang=Xe.value,at.value.forEach(Bo=>{Bo.parentNode===document.head&&document.head.removeChild(Bo)}),at.value.splice(0,at.value.length),Ye.value.forEach(Bo=>{const Ao=createHeadTag(Bo);Ao!==null&&(document.head.appendChild(Ao),at.value.push(Ao))})};provide(updateHeadSymbol,ht),onMounted(()=>{ut(),ht(),watch(()=>Ge.path,()=>ht())})},queryHeadTag=([Ge,Ye,Xe=""])=>{const at=Object.entries(Ye).map(([Ao,To])=>isString(To)?`[${Ao}=${JSON.stringify(To)}]`:To===!0?`[${Ao}]`:"").join(""),ut=`head > ${Ge}${at}`;return Array.from(document.querySelectorAll(ut)).find(Ao=>Ao.innerText===Xe)||null},createHeadTag=([Ge,Ye,Xe])=>{if(!isString(Ge))return null;const at=document.createElement(Ge);return isPlainObject(Ye)&&Object.entries(Ye).forEach(([ut,ht])=>{isString(ht)?at.setAttribute(ut,ht):ht===!0&&at.setAttribute(ut,"")}),isString(Xe)&&at.appendChild(document.createTextNode(Xe)),at},appCreator=createSSRApp,createVueApp=async()=>{var Xe;const Ge=appCreator({name:"VuepressApp",setup(){var at;setupUpdateHead();for(const ut of clientConfigs)(at=ut.setup)==null||at.call(ut);return()=>[h$5(RouterView),...clientConfigs.flatMap(({rootComponents:ut=[]})=>ut.map(ht=>h$5(ht)))]}}),Ye=createVueRouter();setupGlobalComponents(Ge),setupGlobalComputed(Ge,Ye,clientConfigs);for(const at of clientConfigs)await((Xe=at.enhance)==null?void 0:Xe.call(at,{app:Ge,router:Ye,siteData}));return Ge.use(Ye),{app:Ge,router:Ye}};createVueApp().then(({app:Ge,router:Ye})=>{Ye.isReady().then(()=>{Ge.mount("#app")})});export{createVueApp};
