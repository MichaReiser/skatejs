import apiChain from '../api/chain';
import apiEvent from '../api/event';
import apiObserve from '../api/observe';
import apiProperty from '../api/property';
import assignSafe from '../util/assign-safe';
import data from '../util/data';
import protos from '../util/protos';
import registry from '../polyfill/registry';
import walkTree from '../util/walk-tree';

var elProto = window.Element.prototype;
var oldSetAttribute = elProto.setAttribute;
var oldRemoveAttribute = elProto.removeAttribute;

function patchAttributeMethods (elem) {
  elem.setAttribute = function (name, newValue) {
    var oldValue = this.getAttribute(name);
    oldSetAttribute.call(elem, name, newValue);
    elem.attributeChangedCallback(name, oldValue, String(newValue));
  };

  elem.removeAttribute = function (name) {
    var oldValue = this.getAttribute(name);
    oldRemoveAttribute.call(elem, name);
    elem.attributeChangedCallback(name, oldValue, null);
  };
}

function triggerAttributesCreated (elem) {
  var attrs = elem.attributes;
  var attrsLength = attrs.length;
  for (let a = 0; a < attrsLength; a++) {
    let attr = attrs[a];
    elem.attributeChangedCallback(attr.name, null, attr.value);
  }
}

function markAsResolved (elem, resolvedAttribute, unresolvedAttribute) {
  elem.removeAttribute(unresolvedAttribute);
  elem.setAttribute(resolvedAttribute, '');
}

function callCreatedOnDescendants (elem, id) {
  return function () {
    walkTree(elem.childNodes, function (child) {
      registry.find(child).forEach(Ctor => Ctor.prototype.createdCallback.call(child));
    }, function (child) {
      return !data(child, id).created;
    });
  };
}

function fnOrApi (fn, api) {
  return typeof fn === 'function' ? fn : api(fn);
}

function applyPrototype (proto) {
  var prototypes = protos(proto);
  return function () {
    prototypes.forEach(proto => {
      if (!proto.isPrototypeOf(this)) {
        assignSafe(this, proto);
      }
    });
  };
}

export default function (opts) {
  var created = apiChain(opts.created);
  var events = fnOrApi(opts.events, apiEvent);
  var observers = fnOrApi(opts.observers, apiObserve);
  var properties = fnOrApi(opts.properties, apiProperty);
  var prototype = applyPrototype(opts.prototype);
  var template = apiChain(opts.template);

  /* jshint expr: true */
  return function () {
    var info = data(this, opts.id);
    var isNative = this.createdCallback;

    if (info.created) {
      return;
    }

    info.created = true;
    isNative || prototype.call(this);
    isNative || patchAttributeMethods(this);
    template.call(this);
    observers.call(this);
    properties.call(this);
    events.call(this);
    created.call(this);
    isNative || callCreatedOnDescendants(this, opts.id);
    triggerAttributesCreated(this);
    markAsResolved(this, opts.resolvedAttribute, opts.unresolvedAttribute);
  };
}