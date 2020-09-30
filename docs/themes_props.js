import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "_layout.tsx",
        "link": "docs/layout.html"
    },
    'next': {
        "text": "Plugins",
        "link": "docs/plugins.html"
    },
    'sidebar': [
        {
            "text": "Introduction",
            "link": "docs/introduction.html",
            "pagePath": "docs/introduction.md"
        },
        {
            "text": "Usage",
            "link": "docs/usage.html",
            "pagePath": "docs/usage.md"
        },
        {
            "text": "Config",
            "link": "docs/config.html",
            "pagePath": "docs/config.md"
        },
        {
            "text": "Content",
            "link": "docs/content.html",
            "pagePath": "docs/content.md"
        },
        {
            "text": "_layout.tsx",
            "link": "docs/layout.html",
            "pagePath": "docs/layout.md"
        },
        {
            "text": "Themes",
            "link": "docs/themes.html",
            "pagePath": "docs/themes.md"
        },
        {
            "text": "Plugins",
            "link": "docs/plugins.html",
            "pagePath": "docs/plugins.md"
        },
        {
            "text": "Deployment",
            "link": "docs/deployment.html",
            "pagePath": "docs/deployment.md"
        },
        {
            "text": "Demos",
            "link": "docs/demos.html",
            "pagePath": "docs/demos.md"
        },
        {
            "text": "Limitations",
            "link": "docs/limitations.html",
            "pagePath": "docs/limitations.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['en'] },
    'pagePath': "docs/themes.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/themes.html",
    'title': "Themes",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Themes</h1>\n<p>This chapter will introduce how to use themes and how to develop them.</p>\n<p>If you want to see a list of all themes and their supported features, please visit <a href="/themes/">theme list</a>.</p>\n<h2 id="how-to-use">How to use<a class="anchor" href="#how-to-use">§</a></h2>\n<h3 id="official-theme">Official theme<a class="anchor" href="#official-theme">§</a></h3>\n<p>Pagic has official themes default/docs/blog, which can be used by configuring <code>theme</code> in <code>pagic.config.ts</code>. The <code>default</code> theme will be used by default:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  theme<span class="token operator">:</span> <span class="token string">\'default\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="third-party-theme">Third party theme<a class="anchor" href="#third-party-theme">§</a></h3>\n<p>When using a third-party theme, the value of <code>theme</code> should be a complete URL:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  theme<span class="token operator">:</span> <span class="token string">\'<a class="token url-link" href="https://raw.githubusercontent.com/xcatliu/pagic_theme_custom/master/mod.ts">https://raw.githubusercontent.com/xcatliu/pagic_theme_custom/master/mod.ts</a>\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="theme-supported-plugins">Theme supported plugins<a class="anchor" href="#theme-supported-plugins">§</a></h3>\n<p>The theme determines how the page is displayed, and the plugin determines the features supported by the page.</p>\n<p>After selecting the theme, we can add plugins to extend the features of the webpage, but only if the theme supports this plugin.</p>\n<p>Take the <code>sidebar</code> plugin as an example. The <code>sidebar</code> plugin will display a configured sidebar on the left side of the page, but not all themes support this plugin. For example, the <code>default</code> theme is a very basic theme. It supports the most basic functions, so the <code>sidebar</code> plugin is not supported. However, both the <code>docs</code> theme and the <code>blog</code> theme support the <code>sidebar</code> plugin.</p>\n<p>Generally, you can view the list of plugins supported by the theme\'s documentation.</p>\n<h3 id="theme-configuration">Theme configuration<a class="anchor" href="#theme-configuration">§</a></h3>\n<p>Theme-related options can be configured in <code>pagic.config.ts</code>, common options include <code>title</code>, <code>description</code>, <code>head</code>, etc. For their meaning and usage, please refer to the <a href="./config.html#page-content">Config</a> chapter.</p>\n<h4 id="website-configuration-theme-configuration-plugin-configuration">Website configuration? Theme configuration? Plugin configuration?<a class="anchor" href="#website-configuration-theme-configuration-plugin-configuration">§</a></h4>\n<p>You may have discovered that unlike some other static site generators that have different config files (or config items) for websites, themes and plugins, Pagic only has one config file <code>pagic.config.ts</code>.</p>\n<p>You may have some doubts: Isn\'t this confusing? Will the configuration between the theme and the plugin conflict?</p>\n<p>But in fact, Pagic’s design is justified:</p>\n<h5 id="1-a-configuration-item-may-need-to-be-read-by-the-theme-and-plugin-at-the-same-time">1. A configuration item may need to be read by the theme and plugin at the same time<a class="anchor" href="#1-a-configuration-item-may-need-to-be-read-by-the-theme-and-plugin-at-the-same-time">§</a></h5>\n<p>Take <code>sidebar</code> as an example, if we configure this <code>sidebar</code> in <code>pagic.config.ts</code>:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  sidebar<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'/docs/\'</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">\'docs/introduction.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/usage.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/config.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/content.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/layout.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/themes.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/plugins.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/deployment.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/demos.md\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'docs/limitations.md\'</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>Then:</p>\n<ul>\n<li>The <code>sidebar</code> plugin needs to parse it and convert it to <code>React.ReactElement</code></li>\n<li><code>docs</code> theme needs to support rendering <code>sidebar</code>, and provide functions such as folding, SPA jump, etc.</li>\n</ul>\n<p>It can be seen that it is inappropriate to attribute the configuration of <code>sidebar</code> to the configuration of the theme, and it is also inappropriate to attribute the configuration of the plugin. There needs to be one place to manage this configuration.</p>\n<h5 id="2-there-may-be-dependencies-between-plugins-and-plugins">2. There may be dependencies between plugins and plugins<a class="anchor" href="#2-there-may-be-dependencies-between-plugins-and-plugins">§</a></h5>\n<p>Take the <code>prev_next</code> plugin as an example, it supports automatic insertion of links to the previous page and the next page at the bottom of the page. But it needs to rely on the configuration of <code>sidebar</code> to know what the link to the previous page is.</p>\n<p>Therefore, the <code>prev_next</code> plugin needs to be able to read the configuration of the <code>sidebar</code>, so it is more appropriate to put the configuration in the <code>pagic.config.ts</code>.</p>\n<h5 id="3-this-can-reduce-the-users-understanding-cost">3. This can reduce the user\'s understanding cost<a class="anchor" href="#3-this-can-reduce-the-users-understanding-cost">§</a></h5>\n<p>Users don\'t need to think about whether a configuration belongs to a theme or a plugin. It can be configured in <code>pagic.config.ts</code>.</p>\n<h5 id="but-how-to-ensure-that-the-configuration-between-various-third-party-themes-and-plugins-will-not-conflict">But how to ensure that the configuration between various third-party themes and plugins will not conflict?<a class="anchor" href="#but-how-to-ensure-that-the-configuration-between-various-third-party-themes-and-plugins-will-not-conflict">§</a></h5>\n<p>First of all, the configuration items of the plugin are generally the same as the plugin name (for example, the <code>sidebar</code> plugin provides the <code>sidebar</code> configuration item), which ensures that there is generally no conflict between different plugins.</p>\n<p>Second, we organize some common configuration items into documents. Developers of third-party themes and plugins should refer to <a href="./config.html">this document</a> as much as possible to avoid conflicts.</p>\n<p>Finally, this design actually constrains the developers of third-party themes and plug-ins, so that everyone needs to design configuration items according to the same standard, which means that Pagic\'s third-party themes and plugins have higher quality and compatibility.</p>\n<h2 id="how-to-develop-a-theme">How to develop a theme<a class="anchor" href="#how-to-develop-a-theme">§</a></h2>\n<p>Congratulations, you are about to become a developer of Pagic theme!</p>\n<p>As long as you understand the operating mechanism of Pagic theme, you can easily develop a Pagic theme.</p>\n<h3 id="theme-operating-mechanism">Theme operating mechanism<a class="anchor" href="#theme-operating-mechanism">§</a></h3>\n<p>The operating mechanism of Pagic theme is easy to understand, and can even be explained clearly in one sentence:</p>\n<blockquote>\n<p>When Pagic builds, it will first &quot;copy&quot; all the files in the theme to the user\'s project directory, and then run the <code>pagic build</code> script.</p>\n</blockquote>\n<p>For example, if a theme contains the following files:</p>\n<pre class="language-autoit"><code class="language-autoit">pagic_theme_custom<span class="token operator">/</span>\n<span class="highlighted-line">|── assets</span><span class="highlighted-line">|   └── index<span class="token punctuation">.</span>css</span><span class="highlighted-line">└── _layout<span class="token punctuation">.</span>tsx</span></code></pre><p>The directory structure of the user\'s project is as follows:</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>tsx\n</code></pre>\n<p>Then when the user uses this theme, the directory structure of the user\'s project will &quot;become like this&quot;:</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n<span class="highlighted-line">|── assets</span><span class="highlighted-line">|   └── index<span class="token punctuation">.</span>css</span><span class="highlighted-line">|── _layout<span class="token punctuation">.</span>tsx</span>|── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>tsx\n</code></pre><p>At this time, when executing <code>pagic build</code>, <code>assets/index.css</code> will be copied to <code>dist/assets/index.css</code>, and <code>README.md</code> will be rendered with <code>_layout.tsx</code> as a template, and generate <code>dist/index.html</code>:</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # Output directory\n|   |── assets\n<span class="highlighted-line">|   |   └── index<span class="token punctuation">.</span>css</span>|   └── index<span class="token punctuation">.</span>html\n|── assets\n<span class="highlighted-line">|   └── index<span class="token punctuation">.</span>css</span>|── _layout<span class="token punctuation">.</span>tsx\n|── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>tsx\n</code></pre><p>When Pagic builds, each page file (<code>md/tsx</code>) will follow the rules described in the <a href="./layout.html">_layout.tsx</a> chapter to find its corresponding template file.</p>\n<p>A typical application is to write a sub-template in a theme, and then require the directory structure of the project using this theme to conform to this convention.</p>\n<p>For example, the theme can create a <code>blog/_layout.tsx</code> file:</p>\n<pre class="language-autoit"><code class="language-autoit">pagic_theme_custom<span class="token operator">/</span>\n|── assets\n|   └── index<span class="token punctuation">.</span>css\n<span class="highlighted-line">|── blog</span><span class="highlighted-line">|   └── _layout<span class="token punctuation">.</span>tsx</span>└── _layout<span class="token punctuation">.</span>tsx\n</code></pre><p>In this way, the pages under the user\'s <code>blog</code> directory will be rendered with <code>blog/_layout.tsx</code> as a template:</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n<span class="highlighted-line">|── blog</span><span class="highlighted-line">|   └── hello<span class="token punctuation">.</span>md # This page will be rendered <span class="token keyword">with</span> blog<span class="token operator">/</span>_layout<span class="token punctuation">.</span>tsx <span class="token keyword">in</span> the theme as a template</span>|── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n└── README<span class="token punctuation">.</span>tsx\n</code></pre><p>It should be noted that the files in the theme will not be &quot;copied&quot; to the user\'s project directory. We can regard this &quot;copy&quot; as a virtual execution.</p>\n<p>In addition, if there is a file path in the user\'s project that is the same as that in the theme, the file in the user\'s project shall prevail, that is, the file that allows the user to overwrite the theme.</p>\n<h3 id="entry-file">Entry file<a class="anchor" href="#entry-file">§</a></h3>\n<p>As mentioned before, when using a third-party theme, the value of <code>theme</code> should be an entry file URL:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  theme<span class="token operator">:</span> <span class="token string">\'<a class="token url-link" href="https://raw.githubusercontent.com/xcatliu/pagic_theme_custom/master/mod.ts">https://raw.githubusercontent.com/xcatliu/pagic_theme_custom/master/mod.ts</a>\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>A typical <code>mod.ts</code> entry file is listed below:</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  files<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">\'assets/index.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'assets/prism_tomorrow.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'assets/reset.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'assets/variables.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'_layout.tsx\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'favicon.ico\'</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>This entry file contains the following information:</p>\n<h4 id="files"><code>files</code><a class="anchor" href="#files">§</a></h4>\n<p><code>files</code> lists all the files of the theme, they will be &quot;copied&quot; to the user\'s project directory.</p>\n<p>Why is it designed like this? Why can\'t it traverse all the files in the theme directory automatically?</p>\n<p>Because Pagic needs to support an URL to configure the theme, and only one URL cannot traverse to which files are in the path. Just imagine how you can traverse <code>https://raw.githubusercontent.com/xcatliu/pagic_theme_custom/master</code>?</p>\n<p>To sum up, although it is a bit troublesome, it is necessary to list all the files of the subject.</p>\n<h3 id="props"><code>props</code><a class="anchor" href="#props">§</a></h3>\n<p>The core file in the theme is <code>_layout.tsx</code>, and the most important thing to write <code>_layout.tsx</code> is to use its <code>props</code>.</p>\n<p>The previous chapter has introduced <code>props</code>, if you need to know all the <code>props</code>, you can directly view <a href="./layout.html#props">_layout.tsx props</a>.</p>\n<h3 id="reference-official-theme">Reference official theme<a class="anchor" href="#reference-official-theme">§</a></h3>\n<p>The best reference for developing a theme is the official theme. You can directly <a href="https://github.com/xcatliu/pagic/tree/master/src/themes">view the source code of the official theme</a>.</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "/i18n.js", type: "module" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#how-to-use">How to use</a><ol><li><a href="#official-theme">Official theme</a></li><li><a href="#third-party-theme">Third party theme</a></li><li><a href="#theme-supported-plugins">Theme supported plugins</a></li><li><a href="#theme-configuration">Theme configuration</a><ol></ol></li></ol></li><li><a href="#how-to-develop-a-theme">How to develop a theme</a><ol><li><a href="#theme-operating-mechanism">Theme operating mechanism</a></li><li><a href="#entry-file">Entry file</a><ol></ol></li><li><a href="#props">props</a></li><li><a href="#reference-official-theme">Reference official theme</a></li></ol></li></ol></nav>'
        } }),
    'language': {
        "code": "en",
        "name": "English",
        "path": ""
    }
};
