const n=JSON.parse('{"key":"v-4f59cf4a","path":"/ru/config/theme/i18n.html","title":"Опции мультиязычности темы","lang":"ru-RU","frontmatter":{"title":"Опции мультиязычности темы","icon":"config","order":6,"category":["Конфиг"],"tag":["I18n","Мультиязычность","Конфиг темы"],"description":"Вы можете добавить следующие параметры к locales[localePath] в параметрах темы, чтобы настроить многоязычные параметры темы. interface ThemeLocaleData { /** * Current lang code */ lang: string; outlookLocales: { /** * Theme Color * * 主题色 */ themeColor: string; /** * Theme mode * * 夜间模式 */ darkmode: string; /** * Fullscreen text * * 全屏文字 */ fullscreen: string; }; blogLocales: { /** 文章文字 */ article: string; /** 文章列表文字 */ articleList: string; /** 分类文字 */ category: string; /** 标签文字 */ tag: string; /** 时间轴文字 */ timeline: string; /** 时间轴标题文字 */ timelineTitle: string; /** 全部文字 */ all: string; /** 个人介绍 */ intro: string; /** 搜藏文字 */ star: string; /** 幻灯片 */ slides: string; /** 加密 */ encrypt: string; }; paginationLocales: { /** * Previous page button label text * * 上一页文字 */ prev: string; /** * Next page button label text * * 下一页文字 */ next: string; /** * Navigation hint label text * * 跳转提示文字 */ navigate: string; /** * Navigation button label text * * 跳转按钮文字 */ action: string; /** * Error text when invalid page number, `$page` will be replaced by total page number automatically * * 页码错误文字，其中 `$page` 会自动替换为当前的总页数 */ errorText: string; }; /** * Encrypt */ encryptLocales: { /** * Encrypt title */ title: string; placeholder: string; remember: string; /** * Password error hint */ errorHint: string; }; navbarLocales: { /** * Navbar language selection config * * Text of the language selection dropdown */ selectLangText: string; /** * Navbar language selection config * * Aria label of of the language selection dropdown */ selectLangAriaLabel: string; /** * Navbar language selection config * * Language name of current locale * * Displayed inside the language selection dropdown */ langName: string; }; /** * Page locate config */ metaLocales: { /** * Author label text * * 作者文字 */ author: string; /** * Writing date label text * * 写作日期文字 */ date: string; /** * Label text marked as original * * 标记原创的文字 */ origin: string; /** * Page views label text * * 访问量文字 */ views: string; /** * Tag label text * * 标签文字 */ tag: string; /** * Category label text * * 分类文字 */ category: string; /** * Expect reading time label text * * 期望阅读时间文字 */ readingTime: string; /** * Words label Text * * 文章字数 */ words: string; /** * Table of contents * * 此页内容 */ toc: string; /** * Page nav - previous link */ prev: string; /** * Page nav - next link */ next: string; /** * Page meta - last updated config * * The text to replace the default \\"Last Updated\\" */ lastUpdated: string; /** * Page meta - contributors config * * The text to replace the default \\"Contributors\\" */ contributors: string; /** * Page meta - contributors config * * The text to replace the default \\"Edit this page\\" */ editLink: string; }; routeLocales: { /** * Skip to main content */ skipToContent: string; /** * 404 page msgs */ notFoundMsg: string[]; /** * Back to homepage */ home: string; /** * Back to last page */ back: string; /** * sr-only message in `&lt;ExternalLinkIcon&gt;` */ openInNewWindow: string; }; }","head":[["meta",{"property":"og:url","content":"https://topsjf.github.io/hope/ru/config/theme/i18n.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Опции мультиязычности темы"}],["meta",{"property":"og:description","content":"Вы можете добавить следующие параметры к locales[localePath] в параметрах темы, чтобы настроить многоязычные параметры темы. interface ThemeLocaleData { /** * Current lang code */ lang: string; outlookLocales: { /** * Theme Color * * 主题色 */ themeColor: string; /** * Theme mode * * 夜间模式 */ darkmode: string; /** * Fullscreen text * * 全屏文字 */ fullscreen: string; }; blogLocales: { /** 文章文字 */ article: string; /** 文章列表文字 */ articleList: string; /** 分类文字 */ category: string; /** 标签文字 */ tag: string; /** 时间轴文字 */ timeline: string; /** 时间轴标题文字 */ timelineTitle: string; /** 全部文字 */ all: string; /** 个人介绍 */ intro: string; /** 搜藏文字 */ star: string; /** 幻灯片 */ slides: string; /** 加密 */ encrypt: string; }; paginationLocales: { /** * Previous page button label text * * 上一页文字 */ prev: string; /** * Next page button label text * * 下一页文字 */ next: string; /** * Navigation hint label text * * 跳转提示文字 */ navigate: string; /** * Navigation button label text * * 跳转按钮文字 */ action: string; /** * Error text when invalid page number, `$page` will be replaced by total page number automatically * * 页码错误文字，其中 `$page` 会自动替换为当前的总页数 */ errorText: string; }; /** * Encrypt */ encryptLocales: { /** * Encrypt title */ title: string; placeholder: string; remember: string; /** * Password error hint */ errorHint: string; }; navbarLocales: { /** * Navbar language selection config * * Text of the language selection dropdown */ selectLangText: string; /** * Navbar language selection config * * Aria label of of the language selection dropdown */ selectLangAriaLabel: string; /** * Navbar language selection config * * Language name of current locale * * Displayed inside the language selection dropdown */ langName: string; }; /** * Page locate config */ metaLocales: { /** * Author label text * * 作者文字 */ author: string; /** * Writing date label text * * 写作日期文字 */ date: string; /** * Label text marked as original * * 标记原创的文字 */ origin: string; /** * Page views label text * * 访问量文字 */ views: string; /** * Tag label text * * 标签文字 */ tag: string; /** * Category label text * * 分类文字 */ category: string; /** * Expect reading time label text * * 期望阅读时间文字 */ readingTime: string; /** * Words label Text * * 文章字数 */ words: string; /** * Table of contents * * 此页内容 */ toc: string; /** * Page nav - previous link */ prev: string; /** * Page nav - next link */ next: string; /** * Page meta - last updated config * * The text to replace the default \\"Last Updated\\" */ lastUpdated: string; /** * Page meta - contributors config * * The text to replace the default \\"Contributors\\" */ contributors: string; /** * Page meta - contributors config * * The text to replace the default \\"Edit this page\\" */ editLink: string; }; routeLocales: { /** * Skip to main content */ skipToContent: string; /** * 404 page msgs */ notFoundMsg: string[]; /** * Back to homepage */ home: string; /** * Back to last page */ back: string; /** * sr-only message in `&lt;ExternalLinkIcon&gt;` */ openInNewWindow: string; }; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-23T12:51:51.000Z"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"I18n"}],["meta",{"property":"article:tag","content":"Мультиязычность"}],["meta",{"property":"article:tag","content":"Конфиг темы"}],["meta",{"property":"article:modified_time","content":"2022-11-23T12:51:51.000Z"}],["link",{"rel":"canonical","href":"https://vuepress-theme-hope.github.io/v2/ru/config/theme/i18n.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://topsjf.github.io/hope/config/theme/i18n.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://topsjf.github.io/hope/zh/config/theme/i18n.html"}]]},"headers":[],"git":{"createdTime":1659321513000,"updatedTime":1669207911000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":6}]},"readingTime":{"minutes":1.83,"words":550},"filePathRelative":"ru/config/theme/i18n.md","localizedDate":"1 августа 2022 г.","excerpt":"<p>Вы можете добавить следующие параметры к <code>locales[localePath]</code> в параметрах темы, чтобы настроить многоязычные параметры темы.</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">ThemeLocaleData</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token doc-comment comment\\">/**\\n   * Current lang code\\n   */</span>\\n  lang<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n  outlookLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Theme Color\\n     *\\n     * 主题色\\n     */</span>\\n    themeColor<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Theme mode\\n     *\\n     * 夜间模式\\n     */</span>\\n    darkmode<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Fullscreen text\\n     *\\n     * 全屏文字\\n     */</span>\\n    fullscreen<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  blogLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/** 文章文字 */</span>\\n    article<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 文章列表文字 */</span>\\n    articleList<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 分类文字 */</span>\\n    category<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 标签文字 */</span>\\n    tag<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 时间轴文字 */</span>\\n    timeline<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 时间轴标题文字 */</span>\\n    timelineTitle<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 全部文字 */</span>\\n    all<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 个人介绍 */</span>\\n    intro<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 搜藏文字 */</span>\\n    star<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 幻灯片 */</span>\\n    slides<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token doc-comment comment\\">/** 加密 */</span>\\n    encrypt<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  paginationLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Previous page button label text\\n     *\\n     * 上一页文字\\n     */</span>\\n    prev<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Next page button label text\\n     *\\n     * 下一页文字\\n     */</span>\\n    next<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Navigation hint label text\\n     *\\n     * 跳转提示文字\\n     */</span>\\n    navigate<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Navigation button label text\\n     *\\n     * 跳转按钮文字\\n     */</span>\\n    action<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Error text when invalid page number, `$page` will be replaced by total page number automatically\\n     *\\n     * 页码错误文字，其中 `$page` 会自动替换为当前的总页数\\n     */</span>\\n    errorText<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token doc-comment comment\\">/**\\n   * Encrypt\\n   */</span>\\n  encryptLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Encrypt title\\n     */</span>\\n    title<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    placeholder<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    remember<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Password error hint\\n     */</span>\\n    errorHint<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  navbarLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Navbar language selection config\\n     *\\n     * Text of the language selection dropdown\\n     */</span>\\n    selectLangText<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Navbar language selection config\\n     *\\n     * Aria label of of the language selection dropdown\\n     */</span>\\n    selectLangAriaLabel<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Navbar language selection config\\n     *\\n     * Language name of current locale\\n     *\\n     * Displayed inside the language selection dropdown\\n     */</span>\\n    langName<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token doc-comment comment\\">/**\\n   * Page locate config\\n   */</span>\\n  metaLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Author label text\\n     *\\n     * 作者文字\\n     */</span>\\n    author<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Writing date label text\\n     *\\n     * 写作日期文字\\n     */</span>\\n    date<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Label text marked as original\\n     *\\n     * 标记原创的文字\\n     */</span>\\n    origin<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Page views label text\\n     *\\n     * 访问量文字\\n     */</span>\\n    views<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Tag label text\\n     *\\n     * 标签文字\\n     */</span>\\n    tag<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Category label text\\n     *\\n     * 分类文字\\n     */</span>\\n    category<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Expect reading time label text\\n     *\\n     * 期望阅读时间文字\\n     */</span>\\n    readingTime<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Words label Text\\n     *\\n     * 文章字数\\n     */</span>\\n    words<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Table of contents\\n     *\\n     * 此页内容\\n     */</span>\\n    toc<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Page nav - previous link\\n     */</span>\\n    prev<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Page nav - next link\\n     */</span>\\n    next<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Page meta - last updated config\\n     *\\n     * The text to replace the default \\"Last Updated\\"\\n     */</span>\\n    lastUpdated<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Page meta - contributors config\\n     *\\n     * The text to replace the default \\"Contributors\\"\\n     */</span>\\n    contributors<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Page meta - contributors config\\n     *\\n     * The text to replace the default \\"Edit this page\\"\\n     */</span>\\n    editLink<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  routeLocales<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Skip to main content\\n     */</span>\\n    skipToContent<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * 404 page msgs\\n     */</span>\\n    notFoundMsg<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Back to homepage\\n     */</span>\\n    home<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * Back to last page\\n     */</span>\\n    back<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token doc-comment comment\\">/**\\n     * sr-only message in `&lt;ExternalLinkIcon&gt;`\\n     */</span>\\n    openInNewWindow<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{n as data};
