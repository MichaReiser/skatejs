webpackJsonp([24],{137:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s,a,l,h=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),d=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <x-layout title="Getting started">\n        <x-marked\n          src="','"\n        ></x-marked>\n      </x-layout>\n    '],['\n      <x-layout title="Getting started">\n        <x-marked\n          src="','"\n        ></x-marked>\n      </x-layout>\n    ']);t(25),t(28);var u=t(8),p=t(22),m=(0,u.define)((l=a=function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),h(n,[{key:"render",value:function(){return this.$(d,"\n            At its core, Skate is about creating\n            [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/). Skate\n            provides a series of\n            [mixin functions](/mixins)\n            that enable you to control what your component can do.\n\n            For instance, Skate's main mixin, `withComponent`, is just a composition of all\n            of Skate's other mixin behaviours:\n\n            * `withChildren` -- the generated element will react to changes to its child\n              elements.\n            * `withContext` -- the element will inherit context from components up the tree,\n              like in React.\n            * `withLifecycle` -- the element can use added sugar on top of the built-in\n              lifecycle callbacks.\n            * `withRenderer` -- the element can generate its own DOM and output it to a\n              `renderRoot` (a `ShadowRoot` node by default).\n            * `withUpdate` -- the generated element will react to changes on their props or\n              HTML attributes.\n\n            Calling `withComponent()` gives you a Custom Element class constructor, which\n            you can then extend to define your own elements.\n\n            Every mixin accepts an optional `Element` constructor as its only parameter,\n            which allows you to extend virtually any element type in HTML!\n\n            ### Rendering an element\n\n            As an example, let's create a simple greeting component...\n\n            ```html\n            <x-hello>Bob</x-hello>\n            ```\n\n            ...such that when this element is rendered, the end-user will see `Hello, Bob!`.\n\n            We can define a Skate component that renders the contents of our Custom Element:\n\n            ```js\n            import { withComponent } from 'skatejs';\n\n            const Component = withComponent();\n\n            class GreetingComponent extends Component {\n              render() {\n                return 'Hello, <slot></slot>!';\n              }\n            }\n\n            customElements.define('x-hello', GreetingComponent);\n            ```\n\n            > It's worth noting that while `withRenderer()` provides a very basic renderer that\n            sets `innerHTML` using the return value of `render()`, it's not intended for complex\n            usage. If you need events / props / efficient updates, you should use something\n            like `@skatejs/renderer-preact`.\n\n            When this element is rendered, the DOM will look something like the following:\n\n            ```html\n            <x-hello>\n              #shadow-root\n                Hello, <slot></slot>!\n              Bob\n            </x-hello>\n            ```\n\n            This is the utility that web components provide when using Custom Elements and\n            the Shadow DOM.\n\n            Skate also allows **turning off Shadow DOM** if you don't wanna use it for\n            various particular reasons. You can turn it off via `get renderRoot()` override:\n\n            > NOTE: by turning off Shadow DOM you cannot use <slot/> content projection\n            > anymore by default, further tweaks needs to be applied\n\n            ```js\n            import { withComponent, props } from 'skatejs';\n\n            // define base class without Shadow DOM\n            const NoShadowComponent = class extends withComponent() {\n              // you need to return where you want to render your content, in our case we wanna render directly to our custom element children\n              get renderRoot() {\n                return this;\n              }\n            };\n\n            // use custom NoShadowComponent as a base class\n            class GreetingComponent extends NoShadowComponent {\n              static get props() {\n                return {\n                  name: props.string\n                };\n              }\n              render({ name }) {\n                return `Hello, "+name+"!`;\n              }\n            }\n\n            customElements.define('x-hello', GreetingComponent);\n            ```\n\n            Now when you write:\n\n            ```html\n            <x-hello name=\"Bob\"></x-hello>\n            ```\n\n            When this element is rendered, the DOM will look something like the following:\n\n            ```html\n            <x-hello>\n              Hello, Bob!\n            </x-hello>\n            ```\n\n            ### Watching element properties and attributes\n\n            We can create a Skate component that watches for HTML attribute changes on\n            itself:\n\n            ```js\n            import { props, withComponent } from 'skatejs';\n\n            const Component = withComponent();\n\n            class GreetingComponent extends Component {\n              static get props() {\n                return {\n                  name: props.string\n                };\n              }\n              render({ name }) {\n                return `Hello, "+name+"!`;\n              }\n            }\n\n            customElements.define('x-hello', GreetingComponent);\n            ```\n\n            The resulting HTML when the element is rendered would look like this:\n\n            ```html\n            <x-hello name=\"Bob\">\n              #shadow-root\n                Hello, Bob!\n            </x-hello>\n            ```\n\n            Now, whenever the `name` property or attribute on the greeting component\n            changes, the component will re-render.\n\n            ### Making your own mixins\n\n            In the previous examples, each component implements `render` method which\n            returns a string. This is default \"renderer\" behaviour provided by Skate. You\n            can define custom renderer as well by re-defining `renderer` all the time for\n            every component or rather we can write a mixin and take advantage of prototype\n            inheritance:\n\n            > NOTE: the `with` prefix is not mandatory, just a common practice for naming\n            > HOCs and Mixins\n\n            ```js\n            import { props, withComponent } from 'skatejs';\n\n            const withDangerouslyNaiveRenderer = (Base = HTMLElement) => {\n              return class extends Base {\n                renderer(renderRoot, render) {\n                  renderRoot.innerHtml = '';\n                  renderRoot.appendChild(render());\n                }\n              };\n            };\n\n            const Component = withComponent(withDangerouslyNaiveRenderer());\n\n            class GreetingComponent extends Component {\n              static get props() {\n                return {\n                  name: props.string\n                };\n              }\n              render({ name }) {\n                const el = document.createElement('span');\n                el.innerHTML = `Hello, "+name+"!`;\n                return el;\n              }\n            }\n\n            customElements.define('x-hello', GreetingComponent);\n            ```\n\n            ### Rendering using other front-end libraries\n\n            Skate provides default renderer by setting return string of `render` method to\n            your component root ( ShadowRoot by default ) via `innerHTML`. Besides that it\n            allows you to hook to the renderer ( by defining custom renderer ), which gives\n            you options to support just about every modern component-based front-end library\n            &mdash; React, Preact, Vue... just provide a `render` to stamp out your\n            component's HTML, a `renderer` to update the DOM with your HTML, and then it's\n            all the same to Skate!\n\n            The Skate team have provided a few renderers for popular front-end libraries.\n            See the section on [renderers](/renderers) for more info.\n\n            #### Using Skate with Preact\n\n            Instead of writing our own `renderer`, we could use a library like\n            [Preact](https://preactjs.com/) to do the work for us. Skate provides a\n            ready-made renderer for Preact; here's how we would update our previous greeting\n            component to use it:\n\n            ```js\n            /** @jsx h */\n\n            import { props, withComponent } from 'skatejs';\n            import withRenderer from '@skatejs/renderer-preact';\n            import { h } from 'preact';\n\n            const Component = withComponent(withRenderer());\n\n            customElements.define(\n              'x-hello',\n              class extends Component {\n                static get props() {\n                  return {\n                    name: props.string\n                  };\n                }\n                render({ name }) {\n                  return <span>Hello, {name}!</span>;\n                }\n              }\n            );\n            ```\n\n            Now that the greeting component is rendered via Preact, when it renders, it only\n            changes the part of the DOM that requires updating.\n          ")}}]),n}(p.Component),a.is="x-pages-guides-getting-started",s=l))||s;n.default=m}});