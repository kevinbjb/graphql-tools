(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[1152],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3845:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var o=n(9603),r=n(120),a=(n(7378),n(5318)),l={id:"documents-loading",title:"Loading GraphQL operation documents from different sources",sidebar_label:"Documents loading"},i={unversionedId:"documents-loading",id:"documents-loading",isDocsHomePage:!1,title:"Loading GraphQL operation documents from different sources",description:"Similar to schema loading - but meant to use for GraphQL documents (query/mutation/subscription/fragment).",source:"@site/docs/documents-loading.md",sourceDirName:".",slug:"/documents-loading",permalink:"/docs/documents-loading",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/documents-loading.md",version:"current",sidebar_label:"Documents loading",frontMatter:{id:"documents-loading",title:"Loading GraphQL operation documents from different sources",sidebar_label:"Documents loading"},sidebar:"someSidebar",previous:{title:"Loading GraphQL Schemas from different sources",permalink:"/docs/schema-loading"},next:{title:"Extracting GraphQL definitions from code files",permalink:"/docs/graphql-tag-pluck"}},c=[{value:"Usage",id:"usage",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Similar to schema loading - but meant to use for GraphQL documents (query/mutation/subscription/fragment)."),(0,a.kt)("p",null,"Any input provided as a source will be recognized by utils automatically."),(0,a.kt)("p",null,"It also extracts usages of ",(0,a.kt)("inlineCode",{parentName:"p"},"gql")," from code files using ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql-tag-pluck"},(0,a.kt)("inlineCode",{parentName:"a"},"@graphql-tools/graphql-tag-pluck")),"."),(0,a.kt)("p",null,"For notes on typescript, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/loaders"},"loaders")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const { loadDocuments } = require('@graphql-tools/load');\nconst { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');\nconst { CodeFileLoader } = require('@graphql-tools/code-file-loader');\n\nconst document1 = loadDocuments('query { f }'); // load from string\n\nconst document2 = loadDocuments('./users.query.graphql', {  // load from a single file\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n\nconst document3 = loadDocuments('./src/**/*.graphql', { // load from multiple files using glob\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n\nconst document4 = loadDocuments('./src/my-component.ts', {  // load from code file\n    loaders: [\n        new CodeFileLoader()\n    ]\n});\n\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"loadDocuments")," returns an array of document sources. Each source object has the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface DocumentSource {\n  document: DocumentNode; // Object representation of GraphQL Content\n  rawSDL: string; // SDL in text\n  location: string; // Way to access to that source\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"loadDocuments")," takes in additional configuration via the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," object (the second argument). There are some defaults to be aware of - to learn more, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/load/#loaddocuments"},"the full API documentation"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can learn more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/loaders"},"loaders")," to load documents from different sources.")))}u.isMDXComponent=!0}}]);