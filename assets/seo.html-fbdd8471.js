const e=JSON.parse('{"key":"v-21a45b83","path":"/ru/guide/advanced/seo.html","title":"СЕО","lang":"ru-RU","frontmatter":{"title":"СЕО","icon":"config","category":["Продвинутые"],"tag":["Продвинутые","СЕО","SEO"],"description":"vuepress-theme-hope обеспечивает улучшения SEO с помощью встроенного [vuepress-plugin-seo2][seo2]. Чтобы плагин работал лучше, вам может потребоваться проверить конфигурацию страницы и настроить их правильно. Инфо vuepress-theme-hope передает plugins.seo в параметрах темы в качестве параметров плагина vuepress-plugin-seo2. Плагин сделает ваш сайт полностью поддерживающим Open Content Protocol OGP и JSON-LD 1.1 для улучшения SEO сайта. Если вам не нужен этот плагин, установите для plugins.seo значение false в настройках темы.","head":[["meta",{"property":"og:url","content":"https://topsjf.github.io/hope/ru/guide/advanced/seo.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"СЕО"}],["meta",{"property":"og:description","content":"vuepress-theme-hope обеспечивает улучшения SEO с помощью встроенного [vuepress-plugin-seo2][seo2]. Чтобы плагин работал лучше, вам может потребоваться проверить конфигурацию страницы и настроить их правильно. Инфо vuepress-theme-hope передает plugins.seo в параметрах темы в качестве параметров плагина vuepress-plugin-seo2. Плагин сделает ваш сайт полностью поддерживающим Open Content Protocol OGP и JSON-LD 1.1 для улучшения SEO сайта. Если вам не нужен этот плагин, установите для plugins.seo значение false в настройках темы."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-01T02:38:33.000Z"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Продвинутые"}],["meta",{"property":"article:tag","content":"СЕО"}],["meta",{"property":"article:tag","content":"SEO"}],["meta",{"property":"article:modified_time","content":"2022-08-01T02:38:33.000Z"}],["link",{"rel":"canonical","href":"https://vuepress-theme-hope.github.io/v2/ru/guide/advanced/seo.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://topsjf.github.io/hope/guide/advanced/seo.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://topsjf.github.io/hope/zh/guide/advanced/seo.html"}]]},"headers":[{"level":2,"title":"Из коробки","slug":"из-коробки","link":"#из-коробки","children":[{"level":3,"title":"Генерация OGP по умолчанию","slug":"генерация-ogp-по-умолчанию","link":"#генерация-ogp-по-умолчанию","children":[]},{"level":3,"title":"Генерация JSON-LD по умолчанию","slug":"генерация-json-ld-по-умолчанию","link":"#генерация-json-ld-по-умолчанию","children":[]}]},{"level":2,"title":"Установка тегов напрямую","slug":"установка-тегов-напрямую","link":"#установка-тегов-напрямую","children":[]},{"level":2,"title":"Настроить генерацию","slug":"настроить-генерацию","link":"#настроить-генерацию","children":[{"level":3,"title":"Тип страницы","slug":"тип-страницы","link":"#тип-страницы","children":[]},{"level":3,"title":"OGP","slug":"ogp","link":"#ogp","children":[]},{"level":3,"title":"JSON-LD","slug":"json-ld","link":"#json-ld","children":[]}]},{"level":2,"title":"Каноническая ссылка","slug":"каноническая-ссылка","link":"#каноническая-ссылка","children":[{"level":3,"title":"Настроить теги головы","slug":"настроить-теги-головы","link":"#настроить-теги-головы","children":[]}]},{"level":2,"title":"RDFa 1.1","slug":"rdfa-1-1","link":"#rdfa-1-1","children":[]},{"level":2,"title":"Введение в СЕО","slug":"введение-в-сео","link":"#введение-в-сео","children":[]},{"level":2,"title":"Соответствующие документы","slug":"соответствующие-документы","link":"#соответствующие-документы","children":[]},{"level":2,"title":"Связанные инструменты","slug":"связанные-инструменты","link":"#связанные-инструменты","children":[]}],"git":{"createdTime":1659321513000,"updatedTime":1659321513000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":3.89,"words":1167},"filePathRelative":"ru/guide/advanced/seo.md","localizedDate":"1 августа 2022 г.","excerpt":"<p><code>vuepress-theme-hope</code> обеспечивает улучшения SEO с помощью встроенного [<code>vuepress-plugin-seo2</code>][seo2].</p>\\n<p>Чтобы плагин работал лучше, вам может потребоваться проверить <a href=\\"/hope/ru/config/frontmatter/info.html\\" target=\\"blank\\">конфигурацию страницы</a> и настроить их правильно.</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Инфо</p>\\n<p><code>vuepress-theme-hope</code> передает <code>plugins.seo</code> в параметрах темы в качестве параметров плагина <code>vuepress-plugin-seo2</code>.</p>\\n</div>\\n<p>Плагин сделает ваш сайт полностью поддерживающим <a href=\\"https://ogp.me/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Open Content Protocol OGP</a> и <a href=\\"https://www.w3.org/TR/json-ld-api/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JSON-LD 1.1</a> для улучшения SEO сайта.</p>\\n<p>Если вам не нужен этот плагин, установите для <code>plugins.seo</code> значение <code>false</code> в настройках темы.</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
