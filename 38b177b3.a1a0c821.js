(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(1),r=t(9),l=(t(0),t(169)),o={id:"graphql-tag-pluck",title:"Extracting GraphQL definitions from code files",sidebar_label:"GraphQL Tag Pluck"},i={id:"graphql-tag-pluck",title:"Extracting GraphQL definitions from code files",description:"`@graphql-toolkit/graphql-tag-pluck` will take JavaScript code as an input and will pluck all template literals provided to `graphql-tag`.",source:"@site/docs/graphql-tag-pluck.md",permalink:"/docs/graphql-tag-pluck",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql-tag-pluck.md",sidebar_label:"GraphQL Tag Pluck",sidebar:"someSidebar",previous:{title:"Loading documents",permalink:"/docs/documents-loading"},next:{title:"Optimizing operations using Relay Compiler",permalink:"/docs/relay-operation-optimizer"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Options",id:"options",children:[]}],c={rightToc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"@graphql-toolkit/graphql-tag-pluck")," will take JavaScript code as an input and will pluck all template literals provided to ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-tag"),"."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Input:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import gql from 'graphql-tag';\n\nconst fragment = gql`\n  fragment Foo on FooType {\n    id\n  }\n`;\n\nconst doc = gql`\n  query foo {\n    foo {\n      ...Foo\n    }\n  }\n\n  ${fragment}\n`;\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Output:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"fragment Foo on FooType {\n  id\n}\n\nquery foo {\n  foo {\n    ...Foo\n  }\n}\n")),Object(l.b)("p",null,"Originally created because of ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql-code-generator.com/"}),"https://graphql-code-generator.com/"),"."),Object(l.b)("h3",{id:"usage"},"Usage"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"@graphql-toolkit/graphql-tag-pluck")," is installable via NPM (or Yarn):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$ npm install @graphql-toolkit/graphql-tag-pluck\n")),Object(l.b)("p",null,"Once installed you can pluck GraphQL template literals using one of the following methods:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { gqlPluckFromCodeStringSync, gqlPluckFromCodeString } from '@graphql-toolkit/graphql-tag-pluck';\n\n// Returns promise\ngqlPluckFromCodeString(\n    filePath,  // this parameter is required to detect file type\n    fs.readFileSync(filePath, 'utf8'),\n);\n\n// Returns string\ngqlPluckFromCodeStringSync(\n    filePath,\n    fs.readFileSync(filePath, 'utf8'),\n);\n")),Object(l.b)("p",null,"Template literals leaded by magic comments will also be extracted :-)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* GraphQL */ `\n  enum MessageTypes {\n    text\n    media\n    draftjs\n  }\n`;\n")),Object(l.b)("p",null,"supported file extensions are: ",Object(l.b)("inlineCode",{parentName:"p"},".js"),", ",Object(l.b)("inlineCode",{parentName:"p"},".jsx"),", ",Object(l.b)("inlineCode",{parentName:"p"},".ts"),", ",Object(l.b)("inlineCode",{parentName:"p"},".tsx"),", ",Object(l.b)("inlineCode",{parentName:"p"},".flow"),", ",Object(l.b)("inlineCode",{parentName:"p"},".flow.js"),", ",Object(l.b)("inlineCode",{parentName:"p"},".flow.jsx"),", ",Object(l.b)("inlineCode",{parentName:"p"},".graphqls"),", ",Object(l.b)("inlineCode",{parentName:"p"},".graphql"),", ",Object(l.b)("inlineCode",{parentName:"p"},".gqls"),", ",Object(l.b)("inlineCode",{parentName:"p"},".gql"),"."),Object(l.b)("h3",{id:"options"},"Options"),Object(l.b)("p",null,"It is recommended to look at the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-toolkit/blob/master/packages/graphql-tag-pluck/src/visitor.ts"}),"source code")," for a clearer understanding of the transformation options."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"gqlMagicComment"))),Object(l.b)("p",{parentName:"li"},"The magic comment anchor to look for when parsing GraphQL strings. Defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"graphql"),", which may be translated into ",Object(l.b)("inlineCode",{parentName:"p"},"/* GraphQL */")," in code.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"globalGqlIdentifierName"))),Object(l.b)("p",{parentName:"li"},"Allows to use a global identifier instead of a module import."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// `graphql` is a global function\nexport const usersQuery = graphql`\n  {\n    users {\n      id\n      name\n    }\n  }\n`;\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"modules"))),Object(l.b)("p",{parentName:"li"},"An array of packages that are responsible for exporting the GraphQL string parser function. The following modules are supported by default:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  modules: [\n    {\n      // import gql from 'graphql-tag'\n      name: 'graphql-tag',\n    },\n    {\n      name: 'graphql-tag.macro',\n    },\n    {\n      // import { graphql } from 'gatsby'\n      name: 'gatsby',\n      identifier: 'graphql',\n    },\n    {\n      name: 'apollo-server-express',\n      identifier: 'gql',\n    },\n    {\n      name: 'apollo-server',\n      identifier: 'gql',\n    },\n    {\n      name: 'react-relay',\n      identifier: 'graphql',\n    },\n    {\n      name: 'apollo-boost',\n      identifier: 'gql',\n    },\n    {\n      name: 'apollo-server-koa',\n      identifier: 'gql',\n    },\n    {\n      name: 'apollo-server-hapi',\n      identifier: 'gql',\n    },\n    {\n      name: 'apollo-server-fastify',\n      identifier: 'gql',\n    },\n    {\n      name: ' apollo-server-lambda',\n      identifier: 'gql',\n    },\n    {\n      name: 'apollo-server-micro',\n      identifier: 'gql',\n    },\n    {\n      name: 'apollo-server-azure-functions',\n      identifier: 'gql',\n    },\n    {\n      name: 'apollo-server-cloud-functions',\n      identifier: 'gql',\n    },\n    {\n      name: 'apollo-server-cloudflare',\n      identifier: 'gql',\n    },\n  ];\n}\n")))))}b.isMDXComponent=!0},169:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},s=function(e){var n=b(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},g=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(t),g=a,u=s["".concat(o,".").concat(g)]||s[g]||m[g]||l;return t?r.a.createElement(u,i({ref:n},c,{components:t})):r.a.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);