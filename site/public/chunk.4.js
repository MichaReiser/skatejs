webpackJsonp([4],{168:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,c,f,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n      ","\n      <x-layout title=\"Default renderer\">\n        <p>\n          The default renderer is what's provided by the base\n          <code>withRenderer()</code> mixin if you don't provide a custom\n          <code>renderer()</code> method.\n        </p>\n        <p>\n          This renderer will simply set the <code>innerHTML</code> of the\n          <code>renderRoot</code>, which defaults to the <code>shadowRoot</code>\n          of the custom element you're writing. If no shadow root is created, one\n          will be created for you.\n        </p>\n        <x-runnable\n          code=\"",'"\n          html="','"></x-runnable>\n      </x-layout>\n    '],["\n      ","\n      <x-layout title=\"Default renderer\">\n        <p>\n          The default renderer is what's provided by the base\n          <code>withRenderer()</code> mixin if you don't provide a custom\n          <code>renderer()</code> method.\n        </p>\n        <p>\n          This renderer will simply set the <code>innerHTML</code> of the\n          <code>renderRoot</code>, which defaults to the <code>shadowRoot</code>\n          of the custom element you're writing. If no shadow root is created, one\n          will be created for you.\n        </p>\n        <x-runnable\n          code=\"",'"\n          html="','"></x-runnable>\n      </x-layout>\n    ']);n(30),n(25),n(34);var d=n(8),p=n(22);n(169);var h=n(170),y=o(h),b=n(171),w=o(b),m=(0,d.define)((f=c=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return this.$(s,this.$style,y.default,w.default)}}]),t}(p.Component),c.is="x-pages-renderers-default",a=f))||a;t.default=m},169:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(8),c=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(e){return"Hello, "+e.name+"!"}}],[{key:"props",get:function(){return{name:a.props.string}}}]),t}((0,a.withComponent)());customElements.define("with-default",c)},170:function(e,t){e.exports="import { props, withComponent } from 'skatejs';\n\nclass WithDefault extends withComponent() {\n  static get props() {\n    return {\n      name: props.string\n    };\n  }\n  render({ name }) {\n    return `Hello, ${name}!`;\n  }\n}\n\ncustomElements.define('with-default', WithDefault);\n"},171:function(e,t){e.exports='<with-default name="World"></with-default>\n'}});