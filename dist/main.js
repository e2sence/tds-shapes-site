/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@svgdotjs/svg.draggable.js/src/svg.draggable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.draggable.js/src/svg.draggable.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");


const getCoordsFromEvent = (ev) => {
  if (ev.changedTouches) {
    ev = ev.changedTouches[0]
  }
  return { x: ev.clientX, y: ev.clientY }
}

// Creates handler, saves it
class DragHandler {
  constructor (el) {
    el.remember('_draggable', this)
    this.el = el

    this.drag = this.drag.bind(this)
    this.startDrag = this.startDrag.bind(this)
    this.endDrag = this.endDrag.bind(this)
  }

  // Enables or disabled drag based on input
  init (enabled) {
    if (enabled) {
      this.el.on('mousedown.drag', this.startDrag)
      this.el.on('touchstart.drag', this.startDrag)
    } else {
      this.el.off('mousedown.drag')
      this.el.off('touchstart.drag')
    }
  }

  // Start dragging
  startDrag (ev) {
    const isMouse = !ev.type.indexOf('mouse')

    // Check for left button
    if (isMouse && (ev.which || ev.buttons) !== 1) {
      return
    }

    // Fire beforedrag event
    if (this.el.dispatch('beforedrag', { event: ev, handler: this }).defaultPrevented) {
      return
    }

    // Prevent browser drag behavior as soon as possible
    ev.preventDefault()

    // Prevent propagation to a parent that might also have dragging enabled
    ev.stopPropagation()

    // Make sure that start events are unbound so that one element
    // is only dragged by one input only
    this.init(false)

    this.box = this.el.bbox()
    this.lastClick = this.el.point(getCoordsFromEvent(ev))

    // We consider the drag done, when a touch is canceled, too
    const eventMove = (isMouse ? 'mousemove' : 'touchmove') + '.drag'
    const eventEnd = (isMouse ? 'mouseup' : 'touchcancel.drag touchend') + '.drag'

    // Bind drag and end events to window
    ;(0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.on)(window, eventMove, this.drag)
    ;(0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.on)(window, eventEnd, this.endDrag)

    // Fire dragstart event
    this.el.fire('dragstart', { event: ev, handler: this, box: this.box })
  }

  // While dragging
  drag (ev) {

    const { box, lastClick } = this

    const currentClick = this.el.point(getCoordsFromEvent(ev))
    const x = box.x + (currentClick.x - lastClick.x)
    const y = box.y + (currentClick.y - lastClick.y)
    const newBox = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Box(x, y, box.w, box.h)

    if (this.el.dispatch('dragmove', {
      event: ev,
      handler: this,
      box: newBox
    }).defaultPrevented) return

    this.move(x, y)
    return newBox
  }

  move (x, y) {
    // Svg elements bbox depends on their content even though they have
    // x, y, width and height - strange!
    // Thats why we handle them the same as groups
    if (this.el.type === 'svg') {
      _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G.prototype.move.call(this.el, x, y)
    } else {
      this.el.move(x, y)
    }
  }

  endDrag (ev) {
    // final drag
    const box = this.drag(ev)

    // fire dragend event
    this.el.fire('dragend', { event: ev, handler: this, box })

    // unbind events
    ;(0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.off)(window, 'mousemove.drag')
    ;(0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.off)(window, 'touchmove.drag')
    ;(0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.off)(window, 'mouseup.drag')
    ;(0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.off)(window, 'touchend.drag')

    // Rebind initial Events
    this.init(true)
  }
}

(0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.extend)(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Element, {
  draggable (enable = true) {
    const dragHandler = this.remember('_draggable') || new DragHandler(this)
    dragHandler.init(enable)
    return this
  }
})


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/dist/svg.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "Animator": () => (/* binding */ Animator),
/* harmony export */   "Array": () => (/* binding */ SVGArray),
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "ClipPath": () => (/* binding */ ClipPath),
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Controller": () => (/* binding */ Controller),
/* harmony export */   "Defs": () => (/* binding */ Defs),
/* harmony export */   "Dom": () => (/* binding */ Dom),
/* harmony export */   "Ease": () => (/* binding */ Ease),
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "Ellipse": () => (/* binding */ Ellipse),
/* harmony export */   "EventTarget": () => (/* binding */ EventTarget),
/* harmony export */   "ForeignObject": () => (/* binding */ ForeignObject),
/* harmony export */   "G": () => (/* binding */ G),
/* harmony export */   "Gradient": () => (/* binding */ Gradient),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "Marker": () => (/* binding */ Marker),
/* harmony export */   "Mask": () => (/* binding */ Mask),
/* harmony export */   "Matrix": () => (/* binding */ Matrix),
/* harmony export */   "Morphable": () => (/* binding */ Morphable),
/* harmony export */   "NonMorphable": () => (/* binding */ NonMorphable),
/* harmony export */   "Number": () => (/* binding */ SVGNumber),
/* harmony export */   "ObjectBag": () => (/* binding */ ObjectBag),
/* harmony export */   "PID": () => (/* binding */ PID),
/* harmony export */   "Path": () => (/* binding */ Path),
/* harmony export */   "PathArray": () => (/* binding */ PathArray),
/* harmony export */   "Pattern": () => (/* binding */ Pattern),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "PointArray": () => (/* binding */ PointArray),
/* harmony export */   "Polygon": () => (/* binding */ Polygon),
/* harmony export */   "Polyline": () => (/* binding */ Polyline),
/* harmony export */   "Queue": () => (/* binding */ Queue),
/* harmony export */   "Rect": () => (/* binding */ Rect),
/* harmony export */   "Runner": () => (/* binding */ Runner),
/* harmony export */   "SVG": () => (/* binding */ SVG),
/* harmony export */   "Shape": () => (/* binding */ Shape),
/* harmony export */   "Spring": () => (/* binding */ Spring),
/* harmony export */   "Stop": () => (/* binding */ Stop),
/* harmony export */   "Style": () => (/* binding */ Style),
/* harmony export */   "Svg": () => (/* binding */ Svg),
/* harmony export */   "Symbol": () => (/* binding */ _Symbol),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "TextPath": () => (/* binding */ TextPath),
/* harmony export */   "Timeline": () => (/* binding */ Timeline),
/* harmony export */   "TransformBag": () => (/* binding */ TransformBag),
/* harmony export */   "Tspan": () => (/* binding */ Tspan),
/* harmony export */   "Use": () => (/* binding */ Use),
/* harmony export */   "adopt": () => (/* binding */ adopt),
/* harmony export */   "assignNewId": () => (/* binding */ assignNewId),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "defaults": () => (/* binding */ defaults),
/* harmony export */   "dispatch": () => (/* binding */ dispatch),
/* harmony export */   "easing": () => (/* binding */ easing),
/* harmony export */   "eid": () => (/* binding */ eid),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "find": () => (/* binding */ baseFind),
/* harmony export */   "getClass": () => (/* binding */ getClass),
/* harmony export */   "invent": () => (/* binding */ invent),
/* harmony export */   "makeInstance": () => (/* binding */ makeInstance),
/* harmony export */   "makeMorphable": () => (/* binding */ makeMorphable),
/* harmony export */   "mockAdopt": () => (/* binding */ mockAdopt),
/* harmony export */   "namespaces": () => (/* binding */ namespaces),
/* harmony export */   "nodeOrNew": () => (/* binding */ nodeOrNew),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "parser": () => (/* binding */ parser),
/* harmony export */   "regex": () => (/* binding */ regex),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "registerMorphableType": () => (/* binding */ registerMorphableType),
/* harmony export */   "registerWindow": () => (/* binding */ registerWindow),
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "utils": () => (/* binding */ utils),
/* harmony export */   "wrapWithAttrCheck": () => (/* binding */ wrapWithAttrCheck)
/* harmony export */ });
/*!
* @svgdotjs/svg.js - A lightweight library for manipulating and animating SVG.
* @version 3.0.16
* https://svgdotjs.github.io/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Tue Nov 12 2019 21:57:16 GMT+0100 (GMT+01:00)
*/;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var descriptors = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var hasOwnProperty = {}.hasOwnProperty;

var has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var document$1 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$1
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f$2
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global_1, key, value);
  } catch (error) {
    global_1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store = global_1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store;

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.3.6',
  mode:  'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});
});

var functionToString = shared('native-function-to-string', Function.toString);

var WeakMap = global_1.WeakMap;

var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys = {};

var WeakMap$1 = global_1.WeakMap;
var set, get, has$1;

var enforce = function (it) {
  return has$1(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (nativeWeakMap) {
  var store$1 = new WeakMap$1();
  var wmget = store$1.get;
  var wmhas = store$1.has;
  var wmset = store$1.set;
  set = function (it, metadata) {
    wmset.call(store$1, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store$1, it) || {};
  };
  has$1 = function (it) {
    return wmhas.call(store$1, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return has(it, STATE) ? it[STATE] : {};
  };
  has$1 = function (it) {
    return has(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$1,
  enforce: enforce,
  getterFor: getterFor
};

var redefine = createCommonjsModule(function (module) {
var getInternalState = internalState.get;
var enforceInternalState = internalState.enforce;
var TEMPLATE = String(functionToString).split('toString');

shared('inspectSource', function (it) {
  return functionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global_1) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
});
});

var path = global_1;

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var indexOf = arrayIncludes.indexOf;


var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys$1);
};

var objectGetOwnPropertyNames = {
	f: f$3
};

var f$4 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f$4
};

// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

var createProperty = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

var Symbol$1 = global_1.Symbol;
var store$2 = shared('wks');

var wellKnownSymbol = function (name) {
  return store$2[name] || (store$2[name] = nativeSymbol && Symbol$1[name]
    || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
};

var userAgent = getBuiltIn('navigator', 'userAgent') || '';

var process = global_1.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var v8Version = version && +version;

var SPECIES = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return v8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var SPECIES$1 = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max$1 = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES$1];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});

var defineProperty = objectDefineProperty.f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (descriptors && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;

var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};

var objectGetOwnPropertyNamesExternal = {
	f: f$5
};

var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;

var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: nativeGetOwnPropertyNames$1
});

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
  return O;
};

var html = getBuiltIn('document', 'documentElement');

var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;

var f$6 = wellKnownSymbol;

var wrappedWellKnownSymbol = {
	f: f$6
};

var defineProperty$1 = objectDefineProperty.f;

var defineWellKnownSymbol = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
    value: wrappedWellKnownSymbol.f(NAME)
  });
};

var defineProperty$2 = objectDefineProperty.f;



var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty$2(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};

var aFunction$1 = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

// optional / simple context binding
var bindContext = function (fn, that, length) {
  aFunction$1(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var SPECIES$2 = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES$2];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = bindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6)
};

var $forEach = arrayIteration.forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE$1 = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = internalState.set;
var getInternalState = internalState.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE$1];
var $Symbol = global_1.Symbol;
var JSON$1 = global_1.JSON;
var nativeJSONStringify = JSON$1 && JSON$1.stringify;
var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var nativeDefineProperty$1 = objectDefineProperty.f;
var nativeGetOwnPropertyNames$2 = objectGetOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global_1.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = descriptors && fails(function () {
  return objectCreate(nativeDefineProperty$1({}, 'a', {
    get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty$1(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty$1;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!descriptors) symbol.description = description;
  return symbol;
};

var isSymbol = nativeSymbol && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty$1(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable$1.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames$2(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames$2(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!nativeSymbol) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
  objectDefineProperty.f = $defineProperty;
  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

  if (descriptors) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }

  wrappedWellKnownSymbol.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

_export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

_export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

_export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

_export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
_export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return objectGetOwnPropertySymbols.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
JSON$1 && _export({ target: 'JSON', stat: true, forced: !nativeSymbol || fails(function () {
  var symbol = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  return nativeJSONStringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || nativeJSONStringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || nativeJSONStringify(Object(symbol)) != '{}';
}) }, {
  stringify: function stringify(it) {
    var args = [it];
    var index = 1;
    var replacer, $replacer;
    while (arguments.length > index) args.push(arguments[index++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return nativeJSONStringify.apply(JSON$1, args);
  }
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;

var defineProperty$3 = objectDefineProperty.f;


var NativeSymbol = global_1.Symbol;

if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty$3(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  _export({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, objectCreate(null));
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var correctPrototypeGetter = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var IE_PROTO$1 = sharedKey('IE_PROTO');
var ObjectPrototype$1 = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype$1 : null;
};

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ( !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





var returnThis$1 = function () { return this; };

var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
  iterators[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var aPossiblePrototype = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis$2 = function () { return this; };

var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
      if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
        } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis$2);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ( IterablePrototype[ITERATOR$1] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
  }
  iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$1 = internalState.set;
var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$1(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
iterators.Arguments = iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var nativeAssign = Object.assign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
// should work with symbols and should have deterministic property order (V8 bug)
var objectAssign = !nativeAssign || fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
  while (argumentsLength > index) {
    var S = indexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
  assign: objectAssign
});

var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG$2] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
var objectToString = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;

var ObjectPrototype$2 = Object.prototype;

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (objectToString !== ObjectPrototype$2.toString) {
  redefine(ObjectPrototype$2, 'toString', objectToString, { unsafe: true });
}

var freezing = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});

var internalMetadata = createCommonjsModule(function (module) {
var defineProperty = objectDefineProperty.f;



var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;
});

var ITERATOR$2 = wellKnownSymbol('iterator');
var ArrayPrototype$1 = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$2] === it);
};

var ITERATOR$3 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$3]
    || it['@@iterator']
    || iterators[classof(it)];
};

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};

var iterate_1 = createCommonjsModule(function (module) {
var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bindContext(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};
});

var anInstance = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};

var ITERATOR$4 = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$4] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$4] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) objectSetPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var collection = function (CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var ADDER = IS_MAP ? 'set' : 'add';
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    internalMetadata.REQUIRED = true;
  } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  _export({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};

var redefineAll = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};

var SPECIES$3 = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES$3]) {
    defineProperty(Constructor, SPECIES$3, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var defineProperty$4 = objectDefineProperty.f;








var fastKey = internalMetadata.fastKey;


var setInternalState$2 = internalState.set;
var internalStateGetterFor = internalState.getterFor;

var collectionStrong = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState$2(that, {
        type: CONSTRUCTOR_NAME,
        index: objectCreate(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!descriptors) that.size = 0;
      if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (descriptors) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (descriptors) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (descriptors) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (descriptors) defineProperty$4(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState$2(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
var es_set = collection('Set', function (get) {
  return function Set() { return get(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$2(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$2(true)
};

var charAt = stringMultibyte.charAt;



var STRING_ITERATOR = 'String Iterator';
var setInternalState$3 = internalState.set;
var getInternalState$2 = internalState.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$3(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$2(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var ITERATOR$5 = wellKnownSymbol('iterator');
var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
var ArrayValues = es_array_iterator.values;

for (var COLLECTION_NAME in domIterables) {
  var Collection = global_1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$5] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR$5, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$5] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$3]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
    }
    if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
      }
    }
  }
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

var methods = {};
var names = [];
function registerMethods(name, m) {
  if (Array.isArray(name)) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = name[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _name = _step.value;
        registerMethods(_name, m);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return;
  }

  if (_typeof(name) === 'object') {
    for (var _name2 in name) {
      registerMethods(_name2, name[_name2]);
    }

    return;
  }

  addMethodNames(Object.getOwnPropertyNames(m));
  methods[name] = Object.assign(methods[name] || {}, m);
}
function getMethodsFor(name) {
  return methods[name] || {};
}
function getMethodNames() {
  return _toConsumableArray(new Set(names));
}
function addMethodNames(_names) {
  names.push.apply(names, _toConsumableArray(_names));
}

var $includes = arrayIncludes.includes;


// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
_export({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var regexpExec = patchedExec;

_export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
  exec: regexpExec
});

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
};

var notARegexp = function (it) {
  if (isRegexp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};

var MATCH$1 = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH$1] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
_export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

var SPECIES$4 = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$4] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  }
};

var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
var advanceStringIndex = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classofRaw(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

var max$2 = Math.max;
var min$2 = Math.min;
var floor$1 = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regexpExecAbstract(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max$2(min$2(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$3 = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod$3(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod$3(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod$3(3)
};

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var forcedStringTrimMethod = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};

var $trim = stringTrim.trim;


// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
_export({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

// Map function
function map(array, block) {
  var i;
  var il = array.length;
  var result = [];

  for (i = 0; i < il; i++) {
    result.push(block(array[i]));
  }

  return result;
} // Filter function

function filter(array, block) {
  var i;
  var il = array.length;
  var result = [];

  for (i = 0; i < il; i++) {
    if (block(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
} // Degrees to radians

function radians(d) {
  return d % 360 * Math.PI / 180;
} // Radians to degrees

function degrees(r) {
  return r * 180 / Math.PI % 360;
} // Convert dash-separated-string to camelCase

function camelCase(s) {
  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  });
} // Convert camel cased string to string seperated

function unCamelCase(s) {
  return s.replace(/([A-Z])/g, function (m, g) {
    return '-' + g.toLowerCase();
  });
} // Capitalize first letter of a string

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
} // Calculate proportional width and height values when necessary

function proportionalSize(element, width, height, box) {
  if (width == null || height == null) {
    box = box || element.bbox();

    if (width == null) {
      width = box.width / box.height * height;
    } else if (height == null) {
      height = box.height / box.width * width;
    }
  }

  return {
    width: width,
    height: height
  };
}
function getOrigin(o, element) {
  // Allow origin or around as the names
  var origin = o.origin; // o.around == null ? o.origin : o.around

  var ox, oy; // Allow the user to pass a string to rotate around a given point

  if (typeof origin === 'string' || origin == null) {
    // Get the bounding box of the element with no transformations applied
    var string = (origin || 'center').toLowerCase().trim();

    var _element$bbox = element.bbox(),
        height = _element$bbox.height,
        width = _element$bbox.width,
        x = _element$bbox.x,
        y = _element$bbox.y; // Calculate the transformed x and y coordinates


    var bx = string.includes('left') ? x : string.includes('right') ? x + width : x + width / 2;
    var by = string.includes('top') ? y : string.includes('bottom') ? y + height : y + height / 2; // Set the bounds eg : "bottom-left", "Top right", "middle" etc...

    ox = o.ox != null ? o.ox : bx;
    oy = o.oy != null ? o.oy : by;
  } else {
    ox = origin[0];
    oy = origin[1];
  } // Return the origin as it is if it wasn't a string


  return [ox, oy];
}

var utils = ({
	__proto__: null,
	map: map,
	filter: filter,
	radians: radians,
	degrees: degrees,
	camelCase: camelCase,
	unCamelCase: unCamelCase,
	capitalize: capitalize,
	proportionalSize: proportionalSize,
	getOrigin: getOrigin
});

// Default namespaces
var ns = 'http://www.w3.org/2000/svg';
var xmlns = 'http://www.w3.org/2000/xmlns/';
var xlink = 'http://www.w3.org/1999/xlink';
var svgjs = 'http://svgjs.com/svgjs';

var namespaces = ({
	__proto__: null,
	ns: ns,
	xmlns: xmlns,
	xlink: xlink,
	svgjs: svgjs
});

var globals = {
  window: typeof window === 'undefined' ? null : window,
  document: typeof document === 'undefined' ? null : document
};
function registerWindow() {
  var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  globals.window = win;
  globals.document = doc;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Base = function Base() {
  _classCallCheck(this, Base);
};

var elements = {};
var root = '___SYMBOL___ROOT___'; // Method for element creation

function create(name) {
  // create element
  return globals.document.createElementNS(ns, name);
}
function makeInstance(element) {
  if (element instanceof Base) return element;

  if (_typeof(element) === 'object') {
    return adopter(element);
  }

  if (element == null) {
    return new elements[root]();
  }

  if (typeof element === 'string' && element.charAt(0) !== '<') {
    return adopter(globals.document.querySelector(element));
  }

  var node = create('svg');
  node.innerHTML = element; // We can use firstChild here because we know,
  // that the first char is < and thus an element

  element = adopter(node.firstChild);
  return element;
}
function nodeOrNew(name, node) {
  return node instanceof globals.window.Node ? node : create(name);
} // Adopt existing svg elements

function adopt(node) {
  // check for presence of node
  if (!node) return null; // make sure a node isn't already adopted

  if (node.instance instanceof Base) return node.instance; // initialize variables

  var className = capitalize(node.nodeName || 'Dom'); // Make sure that gradients are adopted correctly

  if (className === 'LinearGradient' || className === 'RadialGradient') {
    className = 'Gradient'; // Fallback to Dom if element is not known
  } else if (!elements[className]) {
    className = 'Dom';
  }

  return new elements[className](node);
}
var adopter = adopt;
function mockAdopt() {
  var mock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : adopt;
  adopter = mock;
}
function register(element) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.name;
  var asRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  elements[name] = element;
  if (asRoot) elements[root] = element;
  addMethodNames(Object.getOwnPropertyNames(element.prototype));
  return element;
}
function getClass(name) {
  return elements[name];
} // Element id sequence

var did = 1000; // Get next named element id

function eid(name) {
  return 'Svgjs' + capitalize(name) + did++;
} // Deep new id assignment

function assignNewId(node) {
  // do the same for SVG child nodes as well
  for (var i = node.children.length - 1; i >= 0; i--) {
    assignNewId(node.children[i]);
  }

  if (node.id) {
    return adopt(node).id(eid(node.nodeName));
  }

  return adopt(node);
} // Method for extending objects

function extend(modules, methods, attrCheck) {
  var key, i;
  modules = Array.isArray(modules) ? modules : [modules];

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) {
      var method = methods[key];

      if (attrCheck) {
        method = wrapWithAttrCheck(methods[key]);
      }

      modules[i].prototype[key] = method;
    }
  }
} // export function extendWithAttrCheck (...args) {
//   extend(...args, true)
// }

function wrapWithAttrCheck(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var o = args[args.length - 1];

    if (o && o.constructor === Object && !(o instanceof Array)) {
      return fn.apply(this, args.slice(0, -1)).attr(o);
    } else {
      return fn.apply(this, args);
    }
  };
}
function invent(config) {
  // Create element initializer
  var initializer = typeof config.create === 'function' ? config.create : function (node) {
    this.constructor(node || create(config.create));
  }; // Inherit prototype

  if (config.inherit) {
    /* eslint new-cap: off */
    initializer.prototype = new config.inherit();
    initializer.prototype.constructor = initializer;
  } // Extend with methods


  if (config.extend) {
    extend(initializer, config.extend);
  } // Attach construct method to parent


  if (config.construct) {
    extend(config.parent || elements.Container, config.construct);
  }

  return initializer;
}

function siblings() {
  return this.parent().children();
} // Get the curent position siblings

function position() {
  return this.parent().index(this);
} // Get the next element (will return null if there is none)

function next() {
  return this.siblings()[this.position() + 1];
} // Get the next element (will return null if there is none)

function prev() {
  return this.siblings()[this.position() - 1];
} // Send given element one step forward

function forward() {
  var i = this.position() + 1;
  var p = this.parent(); // move node one step forward

  p.removeElement(this).add(this, i); // make sure defs node is always at the top

  if (typeof p.isRoot === 'function' && p.isRoot()) {
    p.node.appendChild(p.defs().node);
  }

  return this;
} // Send given element one step backward

function backward() {
  var i = this.position();

  if (i > 0) {
    this.parent().removeElement(this).add(this, i - 1);
  }

  return this;
} // Send given element all the way to the front

function front() {
  var p = this.parent(); // Move node forward

  p.node.appendChild(this.node); // Make sure defs node is always at the top

  if (typeof p.isRoot === 'function' && p.isRoot()) {
    p.node.appendChild(p.defs().node);
  }

  return this;
} // Send given element all the way to the back

function back() {
  if (this.position() > 0) {
    this.parent().removeElement(this).add(this, 0);
  }

  return this;
} // Inserts a given element before the targeted element

function before(element) {
  element = makeInstance(element);
  element.remove();
  var i = this.position();
  this.parent().add(element, i);
  return this;
} // Inserts a given element after the targeted element

function after(element) {
  element = makeInstance(element);
  element.remove();
  var i = this.position();
  this.parent().add(element, i + 1);
  return this;
}
function insertBefore(element) {
  element = makeInstance(element);
  element.before(this);
  return this;
}
function insertAfter(element) {
  element = makeInstance(element);
  element.after(this);
  return this;
}
registerMethods('Dom', {
  siblings: siblings,
  position: position,
  next: next,
  prev: prev,
  forward: forward,
  backward: backward,
  front: front,
  back: back,
  before: before,
  after: after,
  insertBefore: insertBefore,
  insertAfter: insertAfter
});

var $filter = arrayIteration.filter;


// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var sloppyArrayMethod = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var $indexOf = arrayIncludes.indexOf;


var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
_export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var nativeJoin = [].join;

var ES3_STRINGS = indexedObject != Object;
var SLOPPY_METHOD$1 = sloppyArrayMethod('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
_export({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD$1 }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

var SPECIES$5 = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$5]) == undefined ? defaultConstructor : aFunction$1(S);
};

var arrayPush = [].push;
var min$3 = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegexp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min$3(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);

// Parse unit value
var numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i; // Parse hex value

var hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; // Parse rgb value

var rgb = /rgb\((\d+),(\d+),(\d+)\)/; // Parse reference id

var reference = /(#[a-z0-9\-_]+)/i; // splits a transformation chain

var transforms = /\)\s*,?\s*/; // Whitespace

var whitespace$1 = /\s/g; // Test hex value

var isHex = /^#[a-f0-9]{3,6}$/i; // Test rgb value

var isRgb = /^rgb\(/; // Test css declaration

var isCss = /[^:]+:[^;]+;?/; // Test for blank string

var isBlank = /^(\s+)?$/; // Test for numeric string

var isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i; // Test for percent value

var isPercent = /^-?[\d.]+%$/; // Test for image url

var isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i; // split at whitespace and comma

var delimiter = /[\s,]+/; // The following regex are used to parse the d attribute of a path
// Matches all hyphens which are not after an exponent

var hyphen = /([^e])-/gi; // Replaces and tests for all path letters

var pathLetters = /[MLHVCSQTAZ]/gi; // yes we need this one, too

var isPathLetter = /[MLHVCSQTAZ]/i; // matches 0.154.23.45

var numbersWithDots = /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi; // matches .

var dots = /\./g;

var regex = ({
	__proto__: null,
	numberAndUnit: numberAndUnit,
	hex: hex,
	rgb: rgb,
	reference: reference,
	transforms: transforms,
	whitespace: whitespace$1,
	isHex: isHex,
	isRgb: isRgb,
	isCss: isCss,
	isBlank: isBlank,
	isNumber: isNumber,
	isPercent: isPercent,
	isImage: isImage,
	delimiter: delimiter,
	hyphen: hyphen,
	pathLetters: pathLetters,
	isPathLetter: isPathLetter,
	numbersWithDots: numbersWithDots,
	dots: dots
});

function classes() {
  var attr = this.attr('class');
  return attr == null ? [] : attr.trim().split(delimiter);
} // Return true if class exists on the node, false otherwise

function hasClass(name) {
  return this.classes().indexOf(name) !== -1;
} // Add class to the node

function addClass(name) {
  if (!this.hasClass(name)) {
    var array = this.classes();
    array.push(name);
    this.attr('class', array.join(' '));
  }

  return this;
} // Remove class from the node

function removeClass(name) {
  if (this.hasClass(name)) {
    this.attr('class', this.classes().filter(function (c) {
      return c !== name;
    }).join(' '));
  }

  return this;
} // Toggle the presence of a class on the node

function toggleClass(name) {
  return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
}
registerMethods('Dom', {
  classes: classes,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass
});

var $forEach$1 = arrayIteration.forEach;


// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
var arrayForEach = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
  forEach: arrayForEach
});

for (var COLLECTION_NAME$1 in domIterables) {
  var Collection$1 = global_1[COLLECTION_NAME$1];
  var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype$1 && CollectionPrototype$1.forEach !== arrayForEach) try {
    createNonEnumerableProperty(CollectionPrototype$1, 'forEach', arrayForEach);
  } catch (error) {
    CollectionPrototype$1.forEach = arrayForEach;
  }
}

function css(style, val) {
  var ret = {};

  if (arguments.length === 0) {
    // get full style as object
    this.node.style.cssText.split(/\s*;\s*/).filter(function (el) {
      return !!el.length;
    }).forEach(function (el) {
      var t = el.split(/\s*:\s*/);
      ret[t[0]] = t[1];
    });
    return ret;
  }

  if (arguments.length < 2) {
    // get style properties in the array
    if (Array.isArray(style)) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = style[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var name = _step.value;
          var cased = camelCase(name);
          ret[cased] = this.node.style[cased];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return ret;
    } // get style for property


    if (typeof style === 'string') {
      return this.node.style[camelCase(style)];
    } // set styles in object


    if (_typeof(style) === 'object') {
      for (var _name in style) {
        // set empty string if null/undefined/'' was given
        this.node.style[camelCase(_name)] = style[_name] == null || isBlank.test(style[_name]) ? '' : style[_name];
      }
    }
  } // set style for property


  if (arguments.length === 2) {
    this.node.style[camelCase(style)] = val == null || isBlank.test(val) ? '' : val;
  }

  return this;
} // Show element

function show() {
  return this.css('display', '');
} // Hide element

function hide() {
  return this.css('display', 'none');
} // Is element visible?

function visible() {
  return this.css('display') !== 'none';
}
registerMethods('Dom', {
  css: css,
  show: show,
  hide: hide,
  visible: visible
});

function data$1(a, v, r) {
  if (_typeof(a) === 'object') {
    for (v in a) {
      this.data(v, a[v]);
    }
  } else if (arguments.length < 2) {
    try {
      return JSON.parse(this.attr('data-' + a));
    } catch (e) {
      return this.attr('data-' + a);
    }
  } else {
    this.attr('data-' + a, v === null ? null : r === true || typeof v === 'string' || typeof v === 'number' ? v : JSON.stringify(v));
  }

  return this;
}
registerMethods('Dom', {
  data: data$1
});

function remember(k, v) {
  // remember every item in an object individually
  if (_typeof(arguments[0]) === 'object') {
    for (var key in k) {
      this.remember(key, k[key]);
    }
  } else if (arguments.length === 1) {
    // retrieve memory
    return this.memory()[k];
  } else {
    // store memory
    this.memory()[k] = v;
  }

  return this;
} // Erase a given memory

function forget() {
  if (arguments.length === 0) {
    this._memory = {};
  } else {
    for (var i = arguments.length - 1; i >= 0; i--) {
      delete this.memory()[arguments[i]];
    }
  }

  return this;
} // This triggers creation of a new hidden class which is not performant
// However, this function is not rarely used so it will not happen frequently
// Return local memory object

function memory() {
  return this._memory = this._memory || {};
}
registerMethods('Dom', {
  remember: remember,
  forget: forget,
  memory: memory
});

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$4 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction$1(callbackfn);
    var O = toObject(that);
    var self = indexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod$4(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod$4(true)
};

var $reduce = arrayReduce.left;


// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
_export({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var listenerId = 0;
var windowEvents = {};

function getEvents(instance) {
  var n = instance.getEventHolder(); // We dont want to save events in global space

  if (n === globals.window) n = windowEvents;
  if (!n.events) n.events = {};
  return n.events;
}

function getEventTarget(instance) {
  return instance.getEventTarget();
}

function clearEvents(instance) {
  var n = instance.getEventHolder();
  if (n.events) n.events = {};
} // Add event binder in the SVG namespace


function on(node, events, listener, binding, options) {
  var l = listener.bind(binding || node);
  var instance = makeInstance(node);
  var bag = getEvents(instance);
  var n = getEventTarget(instance); // events can be an array of events or a string of events

  events = Array.isArray(events) ? events : events.split(delimiter); // add id to listener

  if (!listener._svgjsListenerId) {
    listener._svgjsListenerId = ++listenerId;
  }

  events.forEach(function (event) {
    var ev = event.split('.')[0];
    var ns = event.split('.')[1] || '*'; // ensure valid object

    bag[ev] = bag[ev] || {};
    bag[ev][ns] = bag[ev][ns] || {}; // reference listener

    bag[ev][ns][listener._svgjsListenerId] = l; // add listener

    n.addEventListener(ev, l, options || false);
  });
} // Add event unbinder in the SVG namespace

function off(node, events, listener, options) {
  var instance = makeInstance(node);
  var bag = getEvents(instance);
  var n = getEventTarget(instance); // listener can be a function or a number

  if (typeof listener === 'function') {
    listener = listener._svgjsListenerId;
    if (!listener) return;
  } // events can be an array of events or a string or undefined


  events = Array.isArray(events) ? events : (events || '').split(delimiter);
  events.forEach(function (event) {
    var ev = event && event.split('.')[0];
    var ns = event && event.split('.')[1];
    var namespace, l;

    if (listener) {
      // remove listener reference
      if (bag[ev] && bag[ev][ns || '*']) {
        // removeListener
        n.removeEventListener(ev, bag[ev][ns || '*'][listener], options || false);
        delete bag[ev][ns || '*'][listener];
      }
    } else if (ev && ns) {
      // remove all listeners for a namespaced event
      if (bag[ev] && bag[ev][ns]) {
        for (l in bag[ev][ns]) {
          off(n, [ev, ns].join('.'), l);
        }

        delete bag[ev][ns];
      }
    } else if (ns) {
      // remove all listeners for a specific namespace
      for (event in bag) {
        for (namespace in bag[event]) {
          if (ns === namespace) {
            off(n, [event, ns].join('.'));
          }
        }
      }
    } else if (ev) {
      // remove all listeners for the event
      if (bag[ev]) {
        for (namespace in bag[ev]) {
          off(n, [ev, namespace].join('.'));
        }

        delete bag[ev];
      }
    } else {
      // remove all listeners on a given node
      for (event in bag) {
        off(n, event);
      }

      clearEvents(instance);
    }
  });
}
function dispatch(node, event, data) {
  var n = getEventTarget(node); // Dispatch event

  if (event instanceof globals.window.Event) {
    n.dispatchEvent(event);
  } else {
    event = new globals.window.CustomEvent(event, {
      detail: data,
      cancelable: true
    });
    n.dispatchEvent(event);
  }

  return event;
}

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = v8Version >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
_export({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var $map = arrayIteration.map;


// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}

var trim = stringTrim.trim;


var nativeParseInt = global_1.parseInt;
var hex$1 = /^[+-]?0[Xx]/;
var FORCED$1 = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
var _parseInt = FORCED$1 ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex$1.test(S) ? 16 : 10));
} : nativeParseInt;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
_export({ global: true, forced: parseInt != _parseInt }, {
  parseInt: _parseInt
});

var TO_STRING$1 = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING$1];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING$1;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING$1, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function sixDigitHex(hex) {
  return hex.length === 4 ? ['#', hex.substring(1, 2), hex.substring(1, 2), hex.substring(2, 3), hex.substring(2, 3), hex.substring(3, 4), hex.substring(3, 4)].join('') : hex;
}

function componentHex(component) {
  var integer = Math.round(component);
  var bounded = Math.max(0, Math.min(255, integer));
  var hex = bounded.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function is(object, space) {
  for (var i = space.length; i--;) {
    if (object[space[i]] == null) {
      return false;
    }
  }

  return true;
}

function getParameters(a, b) {
  var params = is(a, 'rgb') ? {
    _a: a.r,
    _b: a.g,
    _c: a.b,
    space: 'rgb'
  } : is(a, 'xyz') ? {
    _a: a.x,
    _b: a.y,
    _c: a.z,
    _d: 0,
    space: 'xyz'
  } : is(a, 'hsl') ? {
    _a: a.h,
    _b: a.s,
    _c: a.l,
    _d: 0,
    space: 'hsl'
  } : is(a, 'lab') ? {
    _a: a.l,
    _b: a.a,
    _c: a.b,
    _d: 0,
    space: 'lab'
  } : is(a, 'lch') ? {
    _a: a.l,
    _b: a.c,
    _c: a.h,
    _d: 0,
    space: 'lch'
  } : is(a, 'cmyk') ? {
    _a: a.c,
    _b: a.m,
    _c: a.y,
    _d: a.k,
    space: 'cmyk'
  } : {
    _a: 0,
    _b: 0,
    _c: 0,
    space: 'rgb'
  };
  params.space = b || params.space;
  return params;
}

function cieSpace(space) {
  if (space === 'lab' || space === 'xyz' || space === 'lch') {
    return true;
  } else {
    return false;
  }
}

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

var Color =
/*#__PURE__*/
function () {
  function Color() {
    _classCallCheck(this, Color);

    this.init.apply(this, arguments);
  }

  _createClass(Color, [{
    key: "init",
    value: function init() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var space = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'rgb';
      // This catches the case when a falsy value is passed like ''
      a = !a ? 0 : a; // Reset all values in case the init function is rerun with new color space

      if (this.space) {
        for (var component in this.space) {
          delete this[this.space[component]];
        }
      }

      if (typeof a === 'number') {
        // Allow for the case that we don't need d...
        space = typeof d === 'string' ? d : space;
        d = typeof d === 'string' ? 0 : d; // Assign the values straight to the color

        Object.assign(this, {
          _a: a,
          _b: b,
          _c: c,
          _d: d,
          space: space
        }); // If the user gave us an array, make the color from it
      } else if (a instanceof Array) {
        this.space = b || (typeof a[3] === 'string' ? a[3] : a[4]) || 'rgb';
        Object.assign(this, {
          _a: a[0],
          _b: a[1],
          _c: a[2],
          _d: a[3] || 0
        });
      } else if (a instanceof Object) {
        // Set the object up and assign its values directly
        var values = getParameters(a, b);
        Object.assign(this, values);
      } else if (typeof a === 'string') {
        if (isRgb.test(a)) {
          var noWhitespace = a.replace(whitespace$1, '');

          var _rgb$exec$slice$map = rgb.exec(noWhitespace).slice(1, 4).map(function (v) {
            return parseInt(v);
          }),
              _rgb$exec$slice$map2 = _slicedToArray(_rgb$exec$slice$map, 3),
              _a2 = _rgb$exec$slice$map2[0],
              _b2 = _rgb$exec$slice$map2[1],
              _c2 = _rgb$exec$slice$map2[2];

          Object.assign(this, {
            _a: _a2,
            _b: _b2,
            _c: _c2,
            _d: 0,
            space: 'rgb'
          });
        } else if (isHex.test(a)) {
          var hexParse = function hexParse(v) {
            return parseInt(v, 16);
          };

          var _hex$exec$map = hex.exec(sixDigitHex(a)).map(hexParse),
              _hex$exec$map2 = _slicedToArray(_hex$exec$map, 4),
              _a3 = _hex$exec$map2[1],
              _b3 = _hex$exec$map2[2],
              _c3 = _hex$exec$map2[3];

          Object.assign(this, {
            _a: _a3,
            _b: _b3,
            _c: _c3,
            _d: 0,
            space: 'rgb'
          });
        } else throw Error('Unsupported string format, can\'t construct Color');
      } // Now add the components as a convenience


      var _a = this._a,
          _b = this._b,
          _c = this._c,
          _d = this._d;
      var components = this.space === 'rgb' ? {
        r: _a,
        g: _b,
        b: _c
      } : this.space === 'xyz' ? {
        x: _a,
        y: _b,
        z: _c
      } : this.space === 'hsl' ? {
        h: _a,
        s: _b,
        l: _c
      } : this.space === 'lab' ? {
        l: _a,
        a: _b,
        b: _c
      } : this.space === 'lch' ? {
        l: _a,
        c: _b,
        h: _c
      } : this.space === 'cmyk' ? {
        c: _a,
        m: _b,
        y: _c,
        k: _d
      } : {};
      Object.assign(this, components);
    }
    /*
    Conversion Methods
    */

  }, {
    key: "rgb",
    value: function rgb() {
      if (this.space === 'rgb') {
        return this;
      } else if (cieSpace(this.space)) {
        // Convert to the xyz color space
        var x = this.x,
            y = this.y,
            z = this.z;

        if (this.space === 'lab' || this.space === 'lch') {
          // Get the values in the lab space
          var l = this.l,
              a = this.a,
              _b4 = this.b;

          if (this.space === 'lch') {
            var c = this.c,
                h = this.h;
            var dToR = Math.PI / 180;
            a = c * Math.cos(dToR * h);
            _b4 = c * Math.sin(dToR * h);
          } // Undo the nonlinear function


          var yL = (l + 16) / 116;
          var xL = a / 500 + yL;
          var zL = yL - _b4 / 200; // Get the xyz values

          var ct = 16 / 116;
          var mx = 0.008856;
          var nm = 7.787;
          x = 0.95047 * (Math.pow(xL, 3) > mx ? Math.pow(xL, 3) : (xL - ct) / nm);
          y = 1.00000 * (Math.pow(yL, 3) > mx ? Math.pow(yL, 3) : (yL - ct) / nm);
          z = 1.08883 * (Math.pow(zL, 3) > mx ? Math.pow(zL, 3) : (zL - ct) / nm);
        } // Convert xyz to unbounded rgb values


        var rU = x * 3.2406 + y * -1.5372 + z * -0.4986;
        var gU = x * -0.9689 + y * 1.8758 + z * 0.0415;
        var bU = x * 0.0557 + y * -0.2040 + z * 1.0570; // Convert the values to true rgb values

        var pow = Math.pow;
        var bd = 0.0031308;
        var r = rU > bd ? 1.055 * pow(rU, 1 / 2.4) - 0.055 : 12.92 * rU;
        var g = gU > bd ? 1.055 * pow(gU, 1 / 2.4) - 0.055 : 12.92 * gU;
        var b = bU > bd ? 1.055 * pow(bU, 1 / 2.4) - 0.055 : 12.92 * bU; // Make and return the color

        var color = new Color(255 * r, 255 * g, 255 * b);
        return color;
      } else if (this.space === 'hsl') {
        // https://bgrins.github.io/TinyColor/docs/tinycolor.html
        // Get the current hsl values
        var _h = this.h,
            s = this.s,
            _l = this.l;
        _h /= 360;
        s /= 100;
        _l /= 100; // If we are grey, then just make the color directly

        if (s === 0) {
          _l *= 255;

          var _color2 = new Color(_l, _l, _l);

          return _color2;
        } // TODO I have no idea what this does :D If you figure it out, tell me!


        var q = _l < 0.5 ? _l * (1 + s) : _l + s - _l * s;
        var p = 2 * _l - q; // Get the rgb values

        var _r = 255 * hueToRgb(p, q, _h + 1 / 3);

        var _g = 255 * hueToRgb(p, q, _h);

        var _b5 = 255 * hueToRgb(p, q, _h - 1 / 3); // Make a new color


        var _color = new Color(_r, _g, _b5);

        return _color;
      } else if (this.space === 'cmyk') {
        // https://gist.github.com/felipesabino/5066336
        // Get the normalised cmyk values
        var _c4 = this.c,
            m = this.m,
            _y = this.y,
            k = this.k; // Get the rgb values

        var _r2 = 255 * (1 - Math.min(1, _c4 * (1 - k) + k));

        var _g2 = 255 * (1 - Math.min(1, m * (1 - k) + k));

        var _b6 = 255 * (1 - Math.min(1, _y * (1 - k) + k)); // Form the color and return it


        var _color3 = new Color(_r2, _g2, _b6);

        return _color3;
      } else {
        return this;
      }
    }
  }, {
    key: "lab",
    value: function lab() {
      // Get the xyz color
      var _this$xyz = this.xyz(),
          x = _this$xyz.x,
          y = _this$xyz.y,
          z = _this$xyz.z; // Get the lab components


      var l = 116 * y - 16;
      var a = 500 * (x - y);
      var b = 200 * (y - z); // Construct and return a new color

      var color = new Color(l, a, b, 'lab');
      return color;
    }
  }, {
    key: "xyz",
    value: function xyz() {
      // Normalise the red, green and blue values
      var _this$rgb = this.rgb(),
          r255 = _this$rgb._a,
          g255 = _this$rgb._b,
          b255 = _this$rgb._c;

      var _map = [r255, g255, b255].map(function (v) {
        return v / 255;
      }),
          _map2 = _slicedToArray(_map, 3),
          r = _map2[0],
          g = _map2[1],
          b = _map2[2]; // Convert to the lab rgb space


      var rL = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      var gL = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      var bL = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92; // Convert to the xyz color space without bounding the values

      var xU = (rL * 0.4124 + gL * 0.3576 + bL * 0.1805) / 0.95047;
      var yU = (rL * 0.2126 + gL * 0.7152 + bL * 0.0722) / 1.00000;
      var zU = (rL * 0.0193 + gL * 0.1192 + bL * 0.9505) / 1.08883; // Get the proper xyz values by applying the bounding

      var x = xU > 0.008856 ? Math.pow(xU, 1 / 3) : 7.787 * xU + 16 / 116;
      var y = yU > 0.008856 ? Math.pow(yU, 1 / 3) : 7.787 * yU + 16 / 116;
      var z = zU > 0.008856 ? Math.pow(zU, 1 / 3) : 7.787 * zU + 16 / 116; // Make and return the color

      var color = new Color(x, y, z, 'xyz');
      return color;
    }
  }, {
    key: "lch",
    value: function lch() {
      // Get the lab color directly
      var _this$lab = this.lab(),
          l = _this$lab.l,
          a = _this$lab.a,
          b = _this$lab.b; // Get the chromaticity and the hue using polar coordinates


      var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      var h = 180 * Math.atan2(b, a) / Math.PI;

      if (h < 0) {
        h *= -1;
        h = 360 - h;
      } // Make a new color and return it


      var color = new Color(l, c, h, 'lch');
      return color;
    }
  }, {
    key: "hsl",
    value: function hsl() {
      // Get the rgb values
      var _this$rgb2 = this.rgb(),
          _a = _this$rgb2._a,
          _b = _this$rgb2._b,
          _c = _this$rgb2._c;

      var _map3 = [_a, _b, _c].map(function (v) {
        return v / 255;
      }),
          _map4 = _slicedToArray(_map3, 3),
          r = _map4[0],
          g = _map4[1],
          b = _map4[2]; // Find the maximum and minimum values to get the lightness


      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var l = (max + min) / 2; // If the r, g, v values are identical then we are grey

      var isGrey = max === min; // Calculate the hue and saturation

      var delta = max - min;
      var s = isGrey ? 0 : l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
      var h = isGrey ? 0 : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6 : max === g ? ((b - r) / delta + 2) / 6 : max === b ? ((r - g) / delta + 4) / 6 : 0; // Construct and return the new color

      var color = new Color(360 * h, 100 * s, 100 * l, 'hsl');
      return color;
    }
  }, {
    key: "cmyk",
    value: function cmyk() {
      // Get the rgb values for the current color
      var _this$rgb3 = this.rgb(),
          _a = _this$rgb3._a,
          _b = _this$rgb3._b,
          _c = _this$rgb3._c;

      var _map5 = [_a, _b, _c].map(function (v) {
        return v / 255;
      }),
          _map6 = _slicedToArray(_map5, 3),
          r = _map6[0],
          g = _map6[1],
          b = _map6[2]; // Get the cmyk values in an unbounded format


      var k = Math.min(1 - r, 1 - g, 1 - b);

      if (k === 1) {
        // Catch the black case
        return new Color(0, 0, 0, 1, 'cmyk');
      }

      var c = (1 - r - k) / (1 - k);
      var m = (1 - g - k) / (1 - k);
      var y = (1 - b - k) / (1 - k); // Construct the new color

      var color = new Color(c, m, y, k, 'cmyk');
      return color;
    }
    /*
    Input and Output methods
    */

  }, {
    key: "_clamped",
    value: function _clamped() {
      var _this$rgb4 = this.rgb(),
          _a = _this$rgb4._a,
          _b = _this$rgb4._b,
          _c = _this$rgb4._c;

      var max = Math.max,
          min = Math.min,
          round = Math.round;

      var format = function format(v) {
        return max(0, min(round(v), 255));
      };

      return [_a, _b, _c].map(format);
    }
  }, {
    key: "toHex",
    value: function toHex() {
      var _this$_clamped$map = this._clamped().map(componentHex),
          _this$_clamped$map2 = _slicedToArray(_this$_clamped$map, 3),
          r = _this$_clamped$map2[0],
          g = _this$_clamped$map2[1],
          b = _this$_clamped$map2[2];

      return "#".concat(r).concat(g).concat(b);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.toHex();
    }
  }, {
    key: "toRgb",
    value: function toRgb() {
      var _this$_clamped = this._clamped(),
          _this$_clamped2 = _slicedToArray(_this$_clamped, 3),
          rV = _this$_clamped2[0],
          gV = _this$_clamped2[1],
          bV = _this$_clamped2[2];

      var string = "rgb(".concat(rV, ",").concat(gV, ",").concat(bV, ")");
      return string;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var _a = this._a,
          _b = this._b,
          _c = this._c,
          _d = this._d,
          space = this.space;
      return [_a, _b, _c, _d, space];
    }
    /*
    Generating random colors
    */

  }], [{
    key: "random",
    value: function random() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vibrant';
      var t = arguments.length > 1 ? arguments[1] : undefined;
      // Get the math modules
      var random = Math.random,
          round = Math.round,
          sin = Math.sin,
          pi = Math.PI; // Run the correct generator

      if (mode === 'vibrant') {
        var l = (81 - 57) * random() + 57;
        var c = (83 - 45) * random() + 45;
        var h = 360 * random();
        var color = new Color(l, c, h, 'lch');
        return color;
      } else if (mode === 'sine') {
        t = t == null ? random() : t;
        var r = round(80 * sin(2 * pi * t / 0.5 + 0.01) + 150);
        var g = round(50 * sin(2 * pi * t / 0.5 + 4.6) + 200);
        var b = round(100 * sin(2 * pi * t / 0.5 + 2.3) + 150);

        var _color4 = new Color(r, g, b);

        return _color4;
      } else if (mode === 'pastel') {
        var _l2 = (94 - 86) * random() + 86;

        var _c5 = (26 - 9) * random() + 9;

        var _h2 = 360 * random();

        var _color5 = new Color(_l2, _c5, _h2, 'lch');

        return _color5;
      } else if (mode === 'dark') {
        var _l3 = 10 + 10 * random();

        var _c6 = (125 - 75) * random() + 86;

        var _h3 = 360 * random();

        var _color6 = new Color(_l3, _c6, _h3, 'lch');

        return _color6;
      } else if (mode === 'rgb') {
        var _r3 = 255 * random();

        var _g3 = 255 * random();

        var _b7 = 255 * random();

        var _color7 = new Color(_r3, _g3, _b7);

        return _color7;
      } else if (mode === 'lab') {
        var _l4 = 100 * random();

        var a = 256 * random() - 128;

        var _b8 = 256 * random() - 128;

        var _color8 = new Color(_l4, a, _b8, 'lab');

        return _color8;
      } else if (mode === 'grey') {
        var grey = 255 * random();

        var _color9 = new Color(grey, grey, grey);

        return _color9;
      }
    }
    /*
    Constructing colors
    */
    // Test if given value is a color string

  }, {
    key: "test",
    value: function test(color) {
      return typeof color === 'string' && (isHex.test(color) || isRgb.test(color));
    } // Test if given value is an rgb object

  }, {
    key: "isRgb",
    value: function isRgb(color) {
      return color && typeof color.r === 'number' && typeof color.g === 'number' && typeof color.b === 'number';
    } // Test if given value is a color

  }, {
    key: "isColor",
    value: function isColor(color) {
      return color && (color instanceof Color || this.isRgb(color) || this.test(color));
    }
  }]);

  return Color;
}();

var FAILS_ON_PRIMITIVES$1 = fails(function () { objectKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
  keys: function keys(it) {
    return objectKeys(toObject(it));
  }
});

// @@match logic
fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regexpExecAbstract(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var defineProperty$5 = objectDefineProperty.f;
var trim$1 = stringTrim.trim;

var NUMBER = 'Number';
var NativeNumber = global_1[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim$1(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classofRaw(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys$1 = descriptors ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys$1.length > j; j++) {
    if (has(NativeNumber, key = keys$1[j]) && !has(NumberWrapper, key)) {
      defineProperty$5(NumberWrapper, key, getOwnPropertyDescriptor$2(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global_1, NUMBER, NumberWrapper);
}

var trim$2 = stringTrim.trim;


var nativeParseFloat = global_1.parseFloat;
var FORCED$2 = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
var _parseFloat = FORCED$2 ? function parseFloat(string) {
  var trimmedString = trim$2(String(string));
  var result = nativeParseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : nativeParseFloat;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
_export({ global: true, forced: parseFloat != _parseFloat }, {
  parseFloat: _parseFloat
});

var Point =
/*#__PURE__*/
function () {
  // Initialize
  function Point() {
    _classCallCheck(this, Point);

    this.init.apply(this, arguments);
  }

  _createClass(Point, [{
    key: "init",
    value: function init(x, y) {
      var base = {
        x: 0,
        y: 0
      }; // ensure source as object

      var source = Array.isArray(x) ? {
        x: x[0],
        y: x[1]
      } : _typeof(x) === 'object' ? {
        x: x.x,
        y: x.y
      } : {
        x: x,
        y: y
      }; // merge source

      this.x = source.x == null ? base.x : source.x;
      this.y = source.y == null ? base.y : source.y;
      return this;
    } // Clone point

  }, {
    key: "clone",
    value: function clone() {
      return new Point(this);
    }
  }, {
    key: "transform",
    value: function transform(m) {
      return this.clone().transformO(m);
    } // Transform point with matrix

  }, {
    key: "transformO",
    value: function transformO(m) {
      if (!Matrix.isMatrixLike(m)) {
        m = new Matrix(m);
      }

      var x = this.x,
          y = this.y; // Perform the matrix multiplication

      this.x = m.a * x + m.c * y + m.e;
      this.y = m.b * x + m.d * y + m.f;
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y];
    }
  }]);

  return Point;
}();
function point(x, y) {
  return new Point(x, y).transform(this.screenCTM().inverse());
}

function closeEnough(a, b, threshold) {
  return Math.abs(b - a) < (threshold || 1e-6);
}

var Matrix =
/*#__PURE__*/
function () {
  function Matrix() {
    _classCallCheck(this, Matrix);

    this.init.apply(this, arguments);
  } // Initialize


  _createClass(Matrix, [{
    key: "init",
    value: function init(source) {
      var base = Matrix.fromArray([1, 0, 0, 1, 0, 0]); // ensure source as object

      source = source instanceof Element ? source.matrixify() : typeof source === 'string' ? Matrix.fromArray(source.split(delimiter).map(parseFloat)) : Array.isArray(source) ? Matrix.fromArray(source) : _typeof(source) === 'object' && Matrix.isMatrixLike(source) ? source : _typeof(source) === 'object' ? new Matrix().transform(source) : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments)) : base; // Merge the source matrix with the base matrix

      this.a = source.a != null ? source.a : base.a;
      this.b = source.b != null ? source.b : base.b;
      this.c = source.c != null ? source.c : base.c;
      this.d = source.d != null ? source.d : base.d;
      this.e = source.e != null ? source.e : base.e;
      this.f = source.f != null ? source.f : base.f;
      return this;
    } // Clones this matrix

  }, {
    key: "clone",
    value: function clone() {
      return new Matrix(this);
    } // Transform a matrix into another matrix by manipulating the space

  }, {
    key: "transform",
    value: function transform(o) {
      // Check if o is a matrix and then left multiply it directly
      if (Matrix.isMatrixLike(o)) {
        var matrix = new Matrix(o);
        return matrix.multiplyO(this);
      } // Get the proposed transformations and the current transformations


      var t = Matrix.formatTransforms(o);
      var current = this;

      var _transform = new Point(t.ox, t.oy).transform(current),
          ox = _transform.x,
          oy = _transform.y; // Construct the resulting matrix


      var transformer = new Matrix().translateO(t.rx, t.ry).lmultiplyO(current).translateO(-ox, -oy).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(ox, oy); // If we want the origin at a particular place, we force it there

      if (isFinite(t.px) || isFinite(t.py)) {
        var origin = new Point(ox, oy).transform(transformer); // TODO: Replace t.px with isFinite(t.px)

        var dx = t.px ? t.px - origin.x : 0;
        var dy = t.py ? t.py - origin.y : 0;
        transformer.translateO(dx, dy);
      } // Translate now after positioning


      transformer.translateO(t.tx, t.ty);
      return transformer;
    } // Applies a matrix defined by its affine parameters

  }, {
    key: "compose",
    value: function compose(o) {
      if (o.origin) {
        o.originX = o.origin[0];
        o.originY = o.origin[1];
      } // Get the parameters


      var ox = o.originX || 0;
      var oy = o.originY || 0;
      var sx = o.scaleX || 1;
      var sy = o.scaleY || 1;
      var lam = o.shear || 0;
      var theta = o.rotate || 0;
      var tx = o.translateX || 0;
      var ty = o.translateY || 0; // Apply the standard matrix

      var result = new Matrix().translateO(-ox, -oy).scaleO(sx, sy).shearO(lam).rotateO(theta).translateO(tx, ty).lmultiplyO(this).translateO(ox, oy);
      return result;
    } // Decomposes this matrix into its affine parameters

  }, {
    key: "decompose",
    value: function decompose() {
      var cx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var cy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      // Get the parameters from the matrix
      var a = this.a;
      var b = this.b;
      var c = this.c;
      var d = this.d;
      var e = this.e;
      var f = this.f; // Figure out if the winding direction is clockwise or counterclockwise

      var determinant = a * d - b * c;
      var ccw = determinant > 0 ? 1 : -1; // Since we only shear in x, we can use the x basis to get the x scale
      // and the rotation of the resulting matrix

      var sx = ccw * Math.sqrt(a * a + b * b);
      var thetaRad = Math.atan2(ccw * b, ccw * a);
      var theta = 180 / Math.PI * thetaRad;
      var ct = Math.cos(thetaRad);
      var st = Math.sin(thetaRad); // We can then solve the y basis vector simultaneously to get the other
      // two affine parameters directly from these parameters

      var lam = (a * c + b * d) / determinant;
      var sy = c * sx / (lam * a - b) || d * sx / (lam * b + a); // Use the translations

      var tx = e - cx + cx * ct * sx + cy * (lam * ct * sx - st * sy);
      var ty = f - cy + cx * st * sx + cy * (lam * st * sx + ct * sy); // Construct the decomposition and return it

      return {
        // Return the affine parameters
        scaleX: sx,
        scaleY: sy,
        shear: lam,
        rotate: theta,
        translateX: tx,
        translateY: ty,
        originX: cx,
        originY: cy,
        // Return the matrix parameters
        a: this.a,
        b: this.b,
        c: this.c,
        d: this.d,
        e: this.e,
        f: this.f
      };
    } // Left multiplies by the given matrix

  }, {
    key: "multiply",
    value: function multiply(matrix) {
      return this.clone().multiplyO(matrix);
    }
  }, {
    key: "multiplyO",
    value: function multiplyO(matrix) {
      // Get the matrices
      var l = this;
      var r = matrix instanceof Matrix ? matrix : new Matrix(matrix);
      return Matrix.matrixMultiply(l, r, this);
    }
  }, {
    key: "lmultiply",
    value: function lmultiply(matrix) {
      return this.clone().lmultiplyO(matrix);
    }
  }, {
    key: "lmultiplyO",
    value: function lmultiplyO(matrix) {
      var r = this;
      var l = matrix instanceof Matrix ? matrix : new Matrix(matrix);
      return Matrix.matrixMultiply(l, r, this);
    } // Inverses matrix

  }, {
    key: "inverseO",
    value: function inverseO() {
      // Get the current parameters out of the matrix
      var a = this.a;
      var b = this.b;
      var c = this.c;
      var d = this.d;
      var e = this.e;
      var f = this.f; // Invert the 2x2 matrix in the top left

      var det = a * d - b * c;
      if (!det) throw new Error('Cannot invert ' + this); // Calculate the top 2x2 matrix

      var na = d / det;
      var nb = -b / det;
      var nc = -c / det;
      var nd = a / det; // Apply the inverted matrix to the top right

      var ne = -(na * e + nc * f);
      var nf = -(nb * e + nd * f); // Construct the inverted matrix

      this.a = na;
      this.b = nb;
      this.c = nc;
      this.d = nd;
      this.e = ne;
      this.f = nf;
      return this;
    }
  }, {
    key: "inverse",
    value: function inverse() {
      return this.clone().inverseO();
    } // Translate matrix

  }, {
    key: "translate",
    value: function translate(x, y) {
      return this.clone().translateO(x, y);
    }
  }, {
    key: "translateO",
    value: function translateO(x, y) {
      this.e += x || 0;
      this.f += y || 0;
      return this;
    } // Scale matrix

  }, {
    key: "scale",
    value: function scale(x, y, cx, cy) {
      var _this$clone;

      return (_this$clone = this.clone()).scaleO.apply(_this$clone, arguments);
    }
  }, {
    key: "scaleO",
    value: function scaleO(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var cx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var cy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      // Support uniform scaling
      if (arguments.length === 3) {
        cy = cx;
        cx = y;
        y = x;
      }

      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      this.a = a * x;
      this.b = b * y;
      this.c = c * x;
      this.d = d * y;
      this.e = e * x - cx * x + cx;
      this.f = f * y - cy * y + cy;
      return this;
    } // Rotate matrix

  }, {
    key: "rotate",
    value: function rotate(r, cx, cy) {
      return this.clone().rotateO(r, cx, cy);
    }
  }, {
    key: "rotateO",
    value: function rotateO(r) {
      var cx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      // Convert degrees to radians
      r = radians(r);
      var cos = Math.cos(r);
      var sin = Math.sin(r);
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      this.a = a * cos - b * sin;
      this.b = b * cos + a * sin;
      this.c = c * cos - d * sin;
      this.d = d * cos + c * sin;
      this.e = e * cos - f * sin + cy * sin - cx * cos + cx;
      this.f = f * cos + e * sin - cx * sin - cy * cos + cy;
      return this;
    } // Flip matrix on x or y, at a given offset

  }, {
    key: "flip",
    value: function flip(axis, around) {
      return this.clone().flipO(axis, around);
    }
  }, {
    key: "flipO",
    value: function flipO(axis, around) {
      return axis === 'x' ? this.scaleO(-1, 1, around, 0) : axis === 'y' ? this.scaleO(1, -1, 0, around) : this.scaleO(-1, -1, axis, around || axis); // Define an x, y flip point
    } // Shear matrix

  }, {
    key: "shear",
    value: function shear(a, cx, cy) {
      return this.clone().shearO(a, cx, cy);
    }
  }, {
    key: "shearO",
    value: function shearO(lx) {
      var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      this.a = a + b * lx;
      this.c = c + d * lx;
      this.e = e + f * lx - cy * lx;
      return this;
    } // Skew Matrix

  }, {
    key: "skew",
    value: function skew(x, y, cx, cy) {
      var _this$clone2;

      return (_this$clone2 = this.clone()).skewO.apply(_this$clone2, arguments);
    }
  }, {
    key: "skewO",
    value: function skewO(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var cx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var cy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      // support uniformal skew
      if (arguments.length === 3) {
        cy = cx;
        cx = y;
        y = x;
      } // Convert degrees to radians


      x = radians(x);
      y = radians(y);
      var lx = Math.tan(x);
      var ly = Math.tan(y);
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      this.a = a + b * lx;
      this.b = b + a * ly;
      this.c = c + d * lx;
      this.d = d + c * ly;
      this.e = e + f * lx - cy * lx;
      this.f = f + e * ly - cx * ly;
      return this;
    } // SkewX

  }, {
    key: "skewX",
    value: function skewX(x, cx, cy) {
      return this.skew(x, 0, cx, cy);
    }
  }, {
    key: "skewXO",
    value: function skewXO(x, cx, cy) {
      return this.skewO(x, 0, cx, cy);
    } // SkewY

  }, {
    key: "skewY",
    value: function skewY(y, cx, cy) {
      return this.skew(0, y, cx, cy);
    }
  }, {
    key: "skewYO",
    value: function skewYO(y, cx, cy) {
      return this.skewO(0, y, cx, cy);
    } // Transform around a center point

  }, {
    key: "aroundO",
    value: function aroundO(cx, cy, matrix) {
      var dx = cx || 0;
      var dy = cy || 0;
      return this.translateO(-dx, -dy).lmultiplyO(matrix).translateO(dx, dy);
    }
  }, {
    key: "around",
    value: function around(cx, cy, matrix) {
      return this.clone().aroundO(cx, cy, matrix);
    } // Check if two matrices are equal

  }, {
    key: "equals",
    value: function equals(other) {
      var comp = new Matrix(other);
      return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b) && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d) && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f);
    } // Convert matrix to string

  }, {
    key: "toString",
    value: function toString() {
      return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')';
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.a, this.b, this.c, this.d, this.e, this.f];
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return {
        a: this.a,
        b: this.b,
        c: this.c,
        d: this.d,
        e: this.e,
        f: this.f
      };
    }
  }], [{
    key: "fromArray",
    value: function fromArray(a) {
      return {
        a: a[0],
        b: a[1],
        c: a[2],
        d: a[3],
        e: a[4],
        f: a[5]
      };
    }
  }, {
    key: "isMatrixLike",
    value: function isMatrixLike(o) {
      return o.a != null || o.b != null || o.c != null || o.d != null || o.e != null || o.f != null;
    }
  }, {
    key: "formatTransforms",
    value: function formatTransforms(o) {
      // Get all of the parameters required to form the matrix
      var flipBoth = o.flip === 'both' || o.flip === true;
      var flipX = o.flip && (flipBoth || o.flip === 'x') ? -1 : 1;
      var flipY = o.flip && (flipBoth || o.flip === 'y') ? -1 : 1;
      var skewX = o.skew && o.skew.length ? o.skew[0] : isFinite(o.skew) ? o.skew : isFinite(o.skewX) ? o.skewX : 0;
      var skewY = o.skew && o.skew.length ? o.skew[1] : isFinite(o.skew) ? o.skew : isFinite(o.skewY) ? o.skewY : 0;
      var scaleX = o.scale && o.scale.length ? o.scale[0] * flipX : isFinite(o.scale) ? o.scale * flipX : isFinite(o.scaleX) ? o.scaleX * flipX : flipX;
      var scaleY = o.scale && o.scale.length ? o.scale[1] * flipY : isFinite(o.scale) ? o.scale * flipY : isFinite(o.scaleY) ? o.scaleY * flipY : flipY;
      var shear = o.shear || 0;
      var theta = o.rotate || o.theta || 0;
      var origin = new Point(o.origin || o.around || o.ox || o.originX, o.oy || o.originY);
      var ox = origin.x;
      var oy = origin.y;
      var position = new Point(o.position || o.px || o.positionX, o.py || o.positionY);
      var px = position.x;
      var py = position.y;
      var translate = new Point(o.translate || o.tx || o.translateX, o.ty || o.translateY);
      var tx = translate.x;
      var ty = translate.y;
      var relative = new Point(o.relative || o.rx || o.relativeX, o.ry || o.relativeY);
      var rx = relative.x;
      var ry = relative.y; // Populate all of the values

      return {
        scaleX: scaleX,
        scaleY: scaleY,
        skewX: skewX,
        skewY: skewY,
        shear: shear,
        theta: theta,
        rx: rx,
        ry: ry,
        tx: tx,
        ty: ty,
        ox: ox,
        oy: oy,
        px: px,
        py: py
      };
    } // left matrix, right matrix, target matrix which is overwritten

  }, {
    key: "matrixMultiply",
    value: function matrixMultiply(l, r, o) {
      // Work out the product directly
      var a = l.a * r.a + l.c * r.b;
      var b = l.b * r.a + l.d * r.b;
      var c = l.a * r.c + l.c * r.d;
      var d = l.b * r.c + l.d * r.d;
      var e = l.e + l.a * r.e + l.c * r.f;
      var f = l.f + l.b * r.e + l.d * r.f; // make sure to use local variables because l/r and o could be the same

      o.a = a;
      o.b = b;
      o.c = c;
      o.d = d;
      o.e = e;
      o.f = f;
      return o;
    }
  }]);

  return Matrix;
}();
function ctm() {
  return new Matrix(this.node.getCTM());
}
function screenCTM() {
  /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
     This is needed because FF does not return the transformation matrix
     for the inner coordinate system when getScreenCTM() is called on nested svgs.
     However all other Browsers do that */
  if (typeof this.isRoot === 'function' && !this.isRoot()) {
    var rect = this.rect(1, 1);
    var m = rect.node.getScreenCTM();
    rect.remove();
    return new Matrix(m);
  }

  return new Matrix(this.node.getScreenCTM());
}
register(Matrix, 'Matrix');

function parser() {
  // Reuse cached element if possible
  if (!parser.nodes) {
    var svg = makeInstance().size(2, 0);
    svg.node.style.cssText = ['opacity: 0', 'position: absolute', 'left: -100%', 'top: -100%', 'overflow: hidden'].join(';');
    svg.attr('focusable', 'false');
    svg.attr('aria-hidden', 'true');
    var path = svg.path().node;
    parser.nodes = {
      svg: svg,
      path: path
    };
  }

  if (!parser.nodes.svg.node.parentNode) {
    var b = globals.document.body || globals.document.documentElement;
    parser.nodes.svg.addTo(b);
  }

  return parser.nodes;
}

function isNulledBox(box) {
  return !box.width && !box.height && !box.x && !box.y;
}

function domContains(node) {
  return node === globals.document || (globals.document.documentElement.contains || function (node) {
    // This is IE - it does not support contains() for top-level SVGs
    while (node.parentNode) {
      node = node.parentNode;
    }

    return node === globals.document;
  }).call(globals.document.documentElement, node);
}

var Box =
/*#__PURE__*/
function () {
  function Box() {
    _classCallCheck(this, Box);

    this.init.apply(this, arguments);
  }

  _createClass(Box, [{
    key: "init",
    value: function init(source) {
      var base = [0, 0, 0, 0];
      source = typeof source === 'string' ? source.split(delimiter).map(parseFloat) : Array.isArray(source) ? source : _typeof(source) === 'object' ? [source.left != null ? source.left : source.x, source.top != null ? source.top : source.y, source.width, source.height] : arguments.length === 4 ? [].slice.call(arguments) : base;
      this.x = source[0] || 0;
      this.y = source[1] || 0;
      this.width = this.w = source[2] || 0;
      this.height = this.h = source[3] || 0; // Add more bounding box properties

      this.x2 = this.x + this.w;
      this.y2 = this.y + this.h;
      this.cx = this.x + this.w / 2;
      this.cy = this.y + this.h / 2;
      return this;
    } // Merge rect box with another, return a new instance

  }, {
    key: "merge",
    value: function merge(box) {
      var x = Math.min(this.x, box.x);
      var y = Math.min(this.y, box.y);
      var width = Math.max(this.x + this.width, box.x + box.width) - x;
      var height = Math.max(this.y + this.height, box.y + box.height) - y;
      return new Box(x, y, width, height);
    }
  }, {
    key: "transform",
    value: function transform(m) {
      if (!(m instanceof Matrix)) {
        m = new Matrix(m);
      }

      var xMin = Infinity;
      var xMax = -Infinity;
      var yMin = Infinity;
      var yMax = -Infinity;
      var pts = [new Point(this.x, this.y), new Point(this.x2, this.y), new Point(this.x, this.y2), new Point(this.x2, this.y2)];
      pts.forEach(function (p) {
        p = p.transform(m);
        xMin = Math.min(xMin, p.x);
        xMax = Math.max(xMax, p.x);
        yMin = Math.min(yMin, p.y);
        yMax = Math.max(yMax, p.y);
      });
      return new Box(xMin, yMin, xMax - xMin, yMax - yMin);
    }
  }, {
    key: "addOffset",
    value: function addOffset() {
      // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
      this.x += globals.window.pageXOffset;
      this.y += globals.window.pageYOffset;
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y, this.width, this.height];
    }
  }, {
    key: "isNulled",
    value: function isNulled() {
      return isNulledBox(this);
    }
  }]);

  return Box;
}();

function getBox(cb, retry) {
  var box;

  try {
    box = cb(this.node);

    if (isNulledBox(box) && !domContains(this.node)) {
      throw new Error('Element not in the dom');
    }
  } catch (e) {
    box = retry(this);
  }

  return box;
}

function bbox() {
  return new Box(getBox.call(this, function (node) {
    return node.getBBox();
  }, function (el) {
    try {
      var clone = el.clone().addTo(parser().svg).show();
      var box = clone.node.getBBox();
      clone.remove();
      return box;
    } catch (e) {
      throw new Error('Getting bbox of element "' + el.node.nodeName + '" is not possible. ' + e.toString());
    }
  }));
}
function rbox(el) {
  var box = new Box(getBox.call(this, function (node) {
    return node.getBoundingClientRect();
  }, function (el) {
    throw new Error('Getting rbox of element "' + el.node.nodeName + '" is not possible');
  }));
  if (el) return box.transform(el.screenCTM().inverse());
  return box.addOffset();
}
registerMethods({
  viewbox: {
    viewbox: function viewbox(x, y, width, height) {
      // act as getter
      if (x == null) return new Box(this.attr('viewBox')); // act as setter

      return this.attr('viewBox', new Box(x, y, width, height));
    },
    zoom: function zoom(level, point) {
      var width = this.node.clientWidth;
      var height = this.node.clientHeight;
      var v = this.viewbox(); // Firefox does not support clientHeight and returns 0
      // https://bugzilla.mozilla.org/show_bug.cgi?id=874811

      if (!width && !height) {
        var style = window.getComputedStyle(this.node);
        width = parseFloat(style.getPropertyValue('width'));
        height = parseFloat(style.getPropertyValue('height'));
      }

      var zoomX = width / v.width;
      var zoomY = height / v.height;
      var zoom = Math.min(zoomX, zoomY);

      if (level == null) {
        return zoom;
      }

      var zoomAmount = zoom / level;
      if (zoomAmount === Infinity) zoomAmount = Number.MIN_VALUE;
      point = point || new Point(width / 2 / zoomX + v.x, height / 2 / zoomY + v.y);
      var box = new Box(v).transform(new Matrix({
        scale: zoomAmount,
        origin: point
      }));
      return this.viewbox(box);
    }
  }
});
register(Box, 'Box');

/* eslint no-new-func: "off" */
var subClassArray = function () {
  try {
    // try es6 subclassing
    return Function('name', 'baseClass', '_constructor', ['baseClass = baseClass || Array', 'return {', '  [name]: class extends baseClass {', '    constructor (...args) {', '      super(...args)', '      _constructor && _constructor.apply(this, args)', '    }', '  }', '}[name]'].join('\n'));
  } catch (e) {
    // Use es5 approach
    return function (name) {
      var baseClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Array;

      var _constructor = arguments.length > 2 ? arguments[2] : undefined;

      var Arr = function Arr() {
        baseClass.apply(this, arguments);
        _constructor && _constructor.apply(this, arguments);
      };

      Arr.prototype = Object.create(baseClass.prototype);
      Arr.prototype.constructor = Arr;

      Arr.prototype.map = function (fn) {
        var arr = new Arr();
        arr.push.apply(arr, Array.prototype.map.call(this, fn));
        return arr;
      };

      return Arr;
    };
  }
}();

var List = subClassArray('List', Array, function () {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // This catches the case, that native map tries to create an array with new Array(1)
  if (typeof arr === 'number') return this;
  this.length = 0;
  this.push.apply(this, _toConsumableArray(arr));
});
extend(List, {
  each: function each(fnOrMethodName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (typeof fnOrMethodName === 'function') {
      return this.map(function (el) {
        return fnOrMethodName.call(el, el);
      });
    } else {
      return this.map(function (el) {
        return el[fnOrMethodName].apply(el, args);
      });
    }
  },
  toArray: function toArray() {
    return Array.prototype.concat.apply([], this);
  }
});
var reserved = ['toArray', 'constructor', 'each'];

List.extend = function (methods) {
  methods = methods.reduce(function (obj, name) {
    // Don't overwrite own methods
    if (reserved.includes(name)) return obj; // Don't add private methods

    if (name[0] === '_') return obj; // Relay every call to each()

    obj[name] = function () {
      for (var _len2 = arguments.length, attrs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        attrs[_key2] = arguments[_key2];
      }

      return this.each.apply(this, [name].concat(attrs));
    };

    return obj;
  }, {});
  extend(List, methods);
};

function baseFind(query, parent) {
  return new List(map((parent || globals.document).querySelectorAll(query), function (node) {
    return adopt(node);
  }));
} // Scoped find method

function find(query) {
  return baseFind(query, this.node);
}
function findOne(query) {
  return adopt(this.node.querySelector(query));
}

var EventTarget =
/*#__PURE__*/
function (_Base) {
  _inherits(EventTarget, _Base);

  function EventTarget() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$events = _ref.events,
        events = _ref$events === void 0 ? {} : _ref$events;

    _classCallCheck(this, EventTarget);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventTarget).call(this));
    _this.events = events;
    return _this;
  }

  _createClass(EventTarget, [{
    key: "addEventListener",
    value: function addEventListener() {}
  }, {
    key: "dispatch",
    value: function dispatch$1(event, data) {
      return dispatch(this, event, data);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var bag = this.getEventHolder().events;
      if (!bag) return true;
      var events = bag[event.type];

      for (var i in events) {
        for (var j in events[i]) {
          events[i][j](event);
        }
      }

      return !event.defaultPrevented;
    } // Fire given event

  }, {
    key: "fire",
    value: function fire(event, data) {
      this.dispatch(event, data);
      return this;
    }
  }, {
    key: "getEventHolder",
    value: function getEventHolder() {
      return this;
    }
  }, {
    key: "getEventTarget",
    value: function getEventTarget() {
      return this;
    } // Unbind event from listener

  }, {
    key: "off",
    value: function off$1(event, listener) {
      off(this, event, listener);

      return this;
    } // Bind given event to listener

  }, {
    key: "on",
    value: function on$1(event, listener, binding, options) {
      on(this, event, listener, binding, options);

      return this;
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {}
  }]);

  return EventTarget;
}(Base);
register(EventTarget, 'EventTarget');

function noop() {} // Default animation values

var timeline = {
  duration: 400,
  ease: '>',
  delay: 0
}; // Default attribute values

var attrs = {
  // fill and stroke
  'fill-opacity': 1,
  'stroke-opacity': 1,
  'stroke-width': 0,
  'stroke-linejoin': 'miter',
  'stroke-linecap': 'butt',
  fill: '#000000',
  stroke: '#000000',
  opacity: 1,
  // position
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,
  // size
  width: 0,
  height: 0,
  // radius
  r: 0,
  rx: 0,
  ry: 0,
  // gradient
  offset: 0,
  'stop-opacity': 1,
  'stop-color': '#000000',
  // text
  'text-anchor': 'start'
};

var defaults = ({
	__proto__: null,
	noop: noop,
	timeline: timeline,
	attrs: attrs
});

var SVGArray = subClassArray('SVGArray', Array, function (arr) {
  this.init(arr);
});
extend(SVGArray, {
  init: function init(arr) {
    // This catches the case, that native map tries to create an array with new Array(1)
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push.apply(this, _toConsumableArray(this.parse(arr)));
    return this;
  },
  toArray: function toArray() {
    return Array.prototype.concat.apply([], this);
  },
  toString: function toString() {
    return this.join(' ');
  },
  // Flattens the array if needed
  valueOf: function valueOf() {
    var ret = [];
    ret.push.apply(ret, _toConsumableArray(this));
    return ret;
  },
  // Parse whitespace separated string
  parse: function parse() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    // If already is an array, no need to parse it
    if (array instanceof Array) return array;
    return array.trim().split(delimiter).map(parseFloat);
  },
  clone: function clone() {
    return new this.constructor(this);
  },
  toSet: function toSet() {
    return new Set(this);
  }
});

var SVGNumber =
/*#__PURE__*/
function () {
  // Initialize
  function SVGNumber() {
    _classCallCheck(this, SVGNumber);

    this.init.apply(this, arguments);
  }

  _createClass(SVGNumber, [{
    key: "init",
    value: function init(value, unit) {
      unit = Array.isArray(value) ? value[1] : unit;
      value = Array.isArray(value) ? value[0] : value; // initialize defaults

      this.value = 0;
      this.unit = unit || ''; // parse value

      if (typeof value === 'number') {
        // ensure a valid numeric value
        this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -3.4e+38 : +3.4e+38 : value;
      } else if (typeof value === 'string') {
        unit = value.match(numberAndUnit);

        if (unit) {
          // make value numeric
          this.value = parseFloat(unit[1]); // normalize

          if (unit[5] === '%') {
            this.value /= 100;
          } else if (unit[5] === 's') {
            this.value *= 1000;
          } // store unit


          this.unit = unit[5];
        }
      } else {
        if (value instanceof SVGNumber) {
          this.value = value.valueOf();
          this.unit = value.unit;
        }
      }

      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return (this.unit === '%' ? ~~(this.value * 1e8) / 1e6 : this.unit === 's' ? this.value / 1e3 : this.value) + this.unit;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.value, this.unit];
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    } // Add number

  }, {
    key: "plus",
    value: function plus(number) {
      number = new SVGNumber(number);
      return new SVGNumber(this + number, this.unit || number.unit);
    } // Subtract number

  }, {
    key: "minus",
    value: function minus(number) {
      number = new SVGNumber(number);
      return new SVGNumber(this - number, this.unit || number.unit);
    } // Multiply number

  }, {
    key: "times",
    value: function times(number) {
      number = new SVGNumber(number);
      return new SVGNumber(this * number, this.unit || number.unit);
    } // Divide number

  }, {
    key: "divide",
    value: function divide(number) {
      number = new SVGNumber(number);
      return new SVGNumber(this / number, this.unit || number.unit);
    }
  }, {
    key: "convert",
    value: function convert(unit) {
      return new SVGNumber(this.value, unit);
    }
  }]);

  return SVGNumber;
}();

var hooks = [];
function registerAttrHook(fn) {
  hooks.push(fn);
} // Set svg element attribute

function attr(attr, val, ns) {
  var _this = this;

  // act as full getter
  if (attr == null) {
    // get an object of attributes
    attr = {};
    val = this.node.attributes;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = val[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;
        attr[node.nodeName] = isNumber.test(node.nodeValue) ? parseFloat(node.nodeValue) : node.nodeValue;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return attr;
  } else if (attr instanceof Array) {
    // loop through array and get all values
    return attr.reduce(function (last, curr) {
      last[curr] = _this.attr(curr);
      return last;
    }, {});
  } else if (_typeof(attr) === 'object' && attr.constructor === Object) {
    // apply every attribute individually if an object is passed
    for (val in attr) {
      this.attr(val, attr[val]);
    }
  } else if (val === null) {
    // remove value
    this.node.removeAttribute(attr);
  } else if (val == null) {
    // act as a getter if the first and only argument is not an object
    val = this.node.getAttribute(attr);
    return val == null ? attrs[attr] : isNumber.test(val) ? parseFloat(val) : val;
  } else {
    // Loop through hooks and execute them to convert value
    val = hooks.reduce(function (_val, hook) {
      return hook(attr, _val, _this);
    }, val); // ensure correct numeric values (also accepts NaN and Infinity)

    if (typeof val === 'number') {
      val = new SVGNumber(val);
    } else if (Color.isColor(val)) {
      // ensure full hex color
      val = new Color(val);
    } else if (val.constructor === Array) {
      // Check for plain arrays and parse array values
      val = new SVGArray(val);
    } // if the passed attribute is leading...


    if (attr === 'leading') {
      // ... call the leading method instead
      if (this.leading) {
        this.leading(val);
      }
    } else {
      // set given attribute on node
      typeof ns === 'string' ? this.node.setAttributeNS(ns, attr, val.toString()) : this.node.setAttribute(attr, val.toString());
    } // rebuild if required


    if (this.rebuild && (attr === 'font-size' || attr === 'x')) {
      this.rebuild();
    }
  }

  return this;
}

var Dom =
/*#__PURE__*/
function (_EventTarget) {
  _inherits(Dom, _EventTarget);

  function Dom(node, attrs) {
    var _this2;

    _classCallCheck(this, Dom);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Dom).call(this, node));
    _this2.node = node;
    _this2.type = node.nodeName;

    if (attrs && node !== attrs) {
      _this2.attr(attrs);
    }

    return _this2;
  } // Add given element at a position


  _createClass(Dom, [{
    key: "add",
    value: function add(element, i) {
      element = makeInstance(element);

      if (i == null) {
        this.node.appendChild(element.node);
      } else if (element.node !== this.node.childNodes[i]) {
        this.node.insertBefore(element.node, this.node.childNodes[i]);
      }

      return this;
    } // Add element to given container and return self

  }, {
    key: "addTo",
    value: function addTo(parent) {
      return makeInstance(parent).put(this);
    } // Returns all child elements

  }, {
    key: "children",
    value: function children() {
      return new List(map(this.node.children, function (node) {
        return adopt(node);
      }));
    } // Remove all elements in this container

  }, {
    key: "clear",
    value: function clear() {
      // remove children
      while (this.node.hasChildNodes()) {
        this.node.removeChild(this.node.lastChild);
      }

      return this;
    } // Clone element

  }, {
    key: "clone",
    value: function clone() {
      // write dom data to the dom so the clone can pickup the data
      this.writeDataToDom(); // clone element and assign new id

      return assignNewId(this.node.cloneNode(true));
    } // Iterates over all children and invokes a given block

  }, {
    key: "each",
    value: function each(block, deep) {
      var children = this.children();
      var i, il;

      for (i = 0, il = children.length; i < il; i++) {
        block.apply(children[i], [i, children]);

        if (deep) {
          children[i].each(block, deep);
        }
      }

      return this;
    }
  }, {
    key: "element",
    value: function element(nodeName) {
      return this.put(new Dom(create(nodeName)));
    } // Get first child

  }, {
    key: "first",
    value: function first() {
      return adopt(this.node.firstChild);
    } // Get a element at the given index

  }, {
    key: "get",
    value: function get(i) {
      return adopt(this.node.childNodes[i]);
    }
  }, {
    key: "getEventHolder",
    value: function getEventHolder() {
      return this.node;
    }
  }, {
    key: "getEventTarget",
    value: function getEventTarget() {
      return this.node;
    } // Checks if the given element is a child

  }, {
    key: "has",
    value: function has(element) {
      return this.index(element) >= 0;
    } // Get / set id

  }, {
    key: "id",
    value: function id(_id) {
      // generate new id if no id set
      if (typeof _id === 'undefined' && !this.node.id) {
        this.node.id = eid(this.type);
      } // dont't set directly width this.node.id to make `null` work correctly


      return this.attr('id', _id);
    } // Gets index of given element

  }, {
    key: "index",
    value: function index(element) {
      return [].slice.call(this.node.childNodes).indexOf(element.node);
    } // Get the last child

  }, {
    key: "last",
    value: function last() {
      return adopt(this.node.lastChild);
    } // matches the element vs a css selector

  }, {
    key: "matches",
    value: function matches(selector) {
      var el = this.node;
      return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    } // Returns the parent element instance

  }, {
    key: "parent",
    value: function parent(type) {
      var parent = this; // check for parent

      if (!parent.node.parentNode) return null; // get parent element

      parent = adopt(parent.node.parentNode);
      if (!type) return parent; // loop trough ancestors if type is given

      while (parent) {
        if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent;
        if (!parent.node.parentNode || parent.node.parentNode.nodeName === '#document' || parent.node.parentNode.nodeName === '#document-fragment') return null; // #759, #720

        parent = adopt(parent.node.parentNode);
      }
    } // Basically does the same as `add()` but returns the added element instead

  }, {
    key: "put",
    value: function put(element, i) {
      this.add(element, i);
      return element;
    } // Add element to given container and return container

  }, {
    key: "putIn",
    value: function putIn(parent) {
      return makeInstance(parent).add(this);
    } // Remove element

  }, {
    key: "remove",
    value: function remove() {
      if (this.parent()) {
        this.parent().removeElement(this);
      }

      return this;
    } // Remove a given child

  }, {
    key: "removeElement",
    value: function removeElement(element) {
      this.node.removeChild(element.node);
      return this;
    } // Replace this with element

  }, {
    key: "replace",
    value: function replace(element) {
      element = makeInstance(element);
      this.node.parentNode.replaceChild(element.node, this.node);
      return element;
    }
  }, {
    key: "round",
    value: function round() {
      var precision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      var map = arguments.length > 1 ? arguments[1] : undefined;
      var factor = Math.pow(10, precision);
      var attrs = this.attr(); // If we have no map, build one from attrs

      if (!map) {
        map = Object.keys(attrs);
      } // Holds rounded attributes


      var newAttrs = {};
      map.forEach(function (key) {
        newAttrs[key] = Math.round(attrs[key] * factor) / factor;
      });
      this.attr(newAttrs);
      return this;
    } // Return id on string conversion

  }, {
    key: "toString",
    value: function toString() {
      return this.id();
    } // Import raw svg

  }, {
    key: "svg",
    value: function svg(svgOrFn, outerHTML) {
      var well, len, fragment;

      if (svgOrFn === false) {
        outerHTML = false;
        svgOrFn = null;
      } // act as getter if no svg string is given


      if (svgOrFn == null || typeof svgOrFn === 'function') {
        // The default for exports is, that the outerNode is included
        outerHTML = outerHTML == null ? true : outerHTML; // write svgjs data to the dom

        this.writeDataToDom();
        var current = this; // An export modifier was passed

        if (svgOrFn != null) {
          current = adopt(current.node.cloneNode(true)); // If the user wants outerHTML we need to process this node, too

          if (outerHTML) {
            var result = svgOrFn(current);
            current = result || current; // The user does not want this node? Well, then he gets nothing

            if (result === false) return '';
          } // Deep loop through all children and apply modifier


          current.each(function () {
            var result = svgOrFn(this);

            var _this = result || this; // If modifier returns false, discard node


            if (result === false) {
              this.remove(); // If modifier returns new node, use it
            } else if (result && this !== _this) {
              this.replace(_this);
            }
          }, true);
        } // Return outer or inner content


        return outerHTML ? current.node.outerHTML : current.node.innerHTML;
      } // Act as setter if we got a string
      // The default for import is, that the current node is not replaced


      outerHTML = outerHTML == null ? false : outerHTML; // Create temporary holder

      well = globals.document.createElementNS(ns, 'svg');
      fragment = globals.document.createDocumentFragment(); // Dump raw svg

      well.innerHTML = svgOrFn; // Transplant nodes into the fragment

      for (len = well.children.length; len--;) {
        fragment.appendChild(well.firstElementChild);
      }

      var parent = this.parent(); // Add the whole fragment at once

      return outerHTML ? this.replace(fragment) && parent : this.add(fragment);
    }
  }, {
    key: "words",
    value: function words(text) {
      // This is faster than removing all children and adding a new one
      this.node.textContent = text;
      return this;
    } // write svgjs data to the dom

  }, {
    key: "writeDataToDom",
    value: function writeDataToDom() {
      // dump variables recursively
      this.each(function () {
        this.writeDataToDom();
      });
      return this;
    }
  }]);

  return Dom;
}(EventTarget);
extend(Dom, {
  attr: attr,
  find: find,
  findOne: findOne
});
register(Dom, 'Dom');

var Element =
/*#__PURE__*/
function (_Dom) {
  _inherits(Element, _Dom);

  function Element(node, attrs) {
    var _this;

    _classCallCheck(this, Element);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Element).call(this, node, attrs)); // initialize data object

    _this.dom = {}; // create circular reference

    _this.node.instance = _assertThisInitialized(_this);

    if (node.hasAttribute('svgjs:data')) {
      // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
      _this.setData(JSON.parse(node.getAttribute('svgjs:data')) || {});
    }

    return _this;
  } // Move element by its center


  _createClass(Element, [{
    key: "center",
    value: function center(x, y) {
      return this.cx(x).cy(y);
    } // Move by center over x-axis

  }, {
    key: "cx",
    value: function cx(x) {
      return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
    } // Move by center over y-axis

  }, {
    key: "cy",
    value: function cy(y) {
      return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
    } // Get defs

  }, {
    key: "defs",
    value: function defs() {
      return this.root().defs();
    } // Relative move over x and y axes

  }, {
    key: "dmove",
    value: function dmove(x, y) {
      return this.dx(x).dy(y);
    } // Relative move over x axis

  }, {
    key: "dx",
    value: function dx() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.x(new SVGNumber(x).plus(this.x()));
    } // Relative move over y axis

  }, {
    key: "dy",
    value: function dy() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.y(new SVGNumber(y).plus(this.y()));
    } // Get parent document

  }, {
    key: "root",
    value: function root$1() {
      var p = this.parent(getClass(root));
      return p && p.root();
    }
  }, {
    key: "getEventHolder",
    value: function getEventHolder() {
      return this;
    } // Set height of element

  }, {
    key: "height",
    value: function height(_height) {
      return this.attr('height', _height);
    } // Checks whether the given point inside the bounding box of the element

  }, {
    key: "inside",
    value: function inside(x, y) {
      var box = this.bbox();
      return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
    } // Move element to given x and y values

  }, {
    key: "move",
    value: function move(x, y) {
      return this.x(x).y(y);
    } // return array of all ancestors of given type up to the root svg

  }, {
    key: "parents",
    value: function parents() {
      var until = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : globals.document;
      until = makeInstance(until);
      var parents = new List();
      var parent = this;

      while ((parent = parent.parent()) && parent.node !== until.node && parent.node !== globals.document) {
        parents.push(parent);
      }

      return parents;
    } // Get referenced element form attribute value

  }, {
    key: "reference",
    value: function reference$1(attr) {
      attr = this.attr(attr);
      if (!attr) return null;
      var m = attr.match(reference);
      return m ? makeInstance(m[1]) : null;
    } // set given data to the elements data property

  }, {
    key: "setData",
    value: function setData(o) {
      this.dom = o;
      return this;
    } // Set element size to given width and height

  }, {
    key: "size",
    value: function size(width, height) {
      var p = proportionalSize(this, width, height);
      return this.width(new SVGNumber(p.width)).height(new SVGNumber(p.height));
    } // Set width of element

  }, {
    key: "width",
    value: function width(_width) {
      return this.attr('width', _width);
    } // write svgjs data to the dom

  }, {
    key: "writeDataToDom",
    value: function writeDataToDom() {
      // remove previously set data
      this.node.removeAttribute('svgjs:data');

      if (Object.keys(this.dom).length) {
        this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)); // see #428
      }

      return _get(_getPrototypeOf(Element.prototype), "writeDataToDom", this).call(this);
    } // Move over x-axis

  }, {
    key: "x",
    value: function x(_x) {
      return this.attr('x', _x);
    } // Move over y-axis

  }, {
    key: "y",
    value: function y(_y) {
      return this.attr('y', _y);
    }
  }]);

  return Element;
}(Dom);
extend(Element, {
  bbox: bbox,
  rbox: rbox,
  point: point,
  ctm: ctm,
  screenCTM: screenCTM
});
register(Element, 'Element');

var sugar = {
  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
  fill: ['color', 'opacity', 'rule'],
  prefix: function prefix(t, a) {
    return a === 'color' ? t : t + '-' + a;
  }
} // Add sugar for fill and stroke
;
['fill', 'stroke'].forEach(function (m) {
  var extension = {};
  var i;

  extension[m] = function (o) {
    if (typeof o === 'undefined') {
      return this.attr(m);
    }

    if (typeof o === 'string' || o instanceof Color || Color.isRgb(o) || o instanceof Element) {
      this.attr(m, o);
    } else {
      // set all attributes from sugar.fill and sugar.stroke list
      for (i = sugar[m].length - 1; i >= 0; i--) {
        if (o[sugar[m][i]] != null) {
          this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]]);
        }
      }
    }

    return this;
  };

  registerMethods(['Element', 'Runner'], extension);
});
registerMethods(['Element', 'Runner'], {
  // Let the user set the matrix directly
  matrix: function matrix(mat, b, c, d, e, f) {
    // Act as a getter
    if (mat == null) {
      return new Matrix(this);
    } // Act as a setter, the user can pass a matrix or a set of numbers


    return this.attr('transform', new Matrix(mat, b, c, d, e, f));
  },
  // Map rotation to transform
  rotate: function rotate(angle, cx, cy) {
    return this.transform({
      rotate: angle,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map skew to transform
  skew: function skew(x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      skew: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      skew: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  shear: function shear(lam, cx, cy) {
    return this.transform({
      shear: lam,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map scale to transform
  scale: function scale(x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      scale: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      scale: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  // Map translate to transform
  translate: function translate(x, y) {
    return this.transform({
      translate: [x, y]
    }, true);
  },
  // Map relative translations to transform
  relative: function relative(x, y) {
    return this.transform({
      relative: [x, y]
    }, true);
  },
  // Map flip to transform
  flip: function flip(direction, around) {
    var directionString = typeof direction === 'string' ? direction : isFinite(direction) ? 'both' : 'both';
    var origin = direction === 'both' && isFinite(around) ? [around, around] : direction === 'x' ? [around, 0] : direction === 'y' ? [0, around] : isFinite(direction) ? [direction, direction] : [0, 0];
    return this.transform({
      flip: directionString,
      origin: origin
    }, true);
  },
  // Opacity
  opacity: function opacity(value) {
    return this.attr('opacity', value);
  }
});
registerMethods('radius', {
  // Add x and y radius
  radius: function radius(x, y) {
    var type = (this._element || this).type;
    return type === 'radialGradient' || type === 'radialGradient' ? this.attr('r', new SVGNumber(x)) : this.rx(x).ry(y == null ? x : y);
  }
});
registerMethods('Path', {
  // Get path length
  length: function length() {
    return this.node.getTotalLength();
  },
  // Get point at length
  pointAt: function pointAt(length) {
    return new Point(this.node.getPointAtLength(length));
  }
});
registerMethods(['Element', 'Runner'], {
  // Set font
  font: function font(a, v) {
    if (_typeof(a) === 'object') {
      for (v in a) {
        this.font(v, a[v]);
      }

      return this;
    }

    return a === 'leading' ? this.leading(v) : a === 'anchor' ? this.attr('text-anchor', v) : a === 'size' || a === 'family' || a === 'weight' || a === 'stretch' || a === 'variant' || a === 'style' ? this.attr('font-' + a, v) : this.attr(a, v);
  }
});
registerMethods('Text', {
  ax: function ax(x) {
    return this.attr('x', x);
  },
  ay: function ay(y) {
    return this.attr('y', y);
  },
  amove: function amove(x, y) {
    return this.ax(x).ay(y);
  }
}); // Add events to elements

var methods$1 = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].reduce(function (last, event) {
  // add event to Element
  var fn = function fn(f) {
    if (f === null) {
      off(this, event);
    } else {
      on(this, event, f);
    }

    return this;
  };

  last[event] = fn;
  return last;
}, {});
registerMethods('Element', methods$1);

var nativeReverse = [].reverse;
var test$1 = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
_export({ target: 'Array', proto: true, forced: String(test$1) === String(test$1.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
  defineProperties: objectDefineProperties
});

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
  defineProperty: objectDefineProperty.f
});

var nativeGetOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;


var FAILS_ON_PRIMITIVES$2 = fails(function () { nativeGetOwnPropertyDescriptor$2(1); });
var FORCED$3 = !descriptors || FAILS_ON_PRIMITIVES$2;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
_export({ target: 'Object', stat: true, forced: FORCED$3, sham: !descriptors }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor$2(toIndexedObject(it), key);
  }
});

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
_export({ target: 'Object', stat: true, sham: !descriptors }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function untransform() {
  return this.attr('transform', null);
} // merge the whole transformation chain into one matrix and returns it

function matrixify() {
  var matrix = (this.attr('transform') || ''). // split transformations
  split(transforms).slice(0, -1).map(function (str) {
    // generate key => value pairs
    var kv = str.trim().split('(');
    return [kv[0], kv[1].split(delimiter).map(function (str) {
      return parseFloat(str);
    })];
  }).reverse() // merge every transformation into one matrix
  .reduce(function (matrix, transform) {
    if (transform[0] === 'matrix') {
      return matrix.lmultiply(Matrix.fromArray(transform[1]));
    }

    return matrix[transform[0]].apply(matrix, transform[1]);
  }, new Matrix());
  return matrix;
} // add an element to another parent without changing the visual representation on the screen

function toParent(parent) {
  if (this === parent) return this;
  var ctm = this.screenCTM();
  var pCtm = parent.screenCTM().inverse();
  this.addTo(parent).untransform().transform(pCtm.multiply(ctm));
  return this;
} // same as above with parent equals root-svg

function toRoot() {
  return this.toParent(this.root());
} // Add transformations

function transform(o, relative) {
  // Act as a getter if no object was passed
  if (o == null || typeof o === 'string') {
    var decomposed = new Matrix(this).decompose();
    return o == null ? decomposed : decomposed[o];
  }

  if (!Matrix.isMatrixLike(o)) {
    // Set the origin according to the defined transform
    o = _objectSpread({}, o, {
      origin: getOrigin(o, this)
    });
  } // The user can pass a boolean, an Element or an Matrix or nothing


  var cleanRelative = relative === true ? this : relative || false;
  var result = new Matrix(cleanRelative).transform(o);
  return this.attr('transform', result);
}
registerMethods('Element', {
  untransform: untransform,
  matrixify: matrixify,
  toParent: toParent,
  toRoot: toRoot,
  transform: transform
});

function rx(rx) {
  return this.attr('rx', rx);
} // Radius y value

function ry(ry) {
  return this.attr('ry', ry);
} // Move over x-axis

function x(x) {
  return x == null ? this.cx() - this.rx() : this.cx(x + this.rx());
} // Move over y-axis

function y(y) {
  return y == null ? this.cy() - this.ry() : this.cy(y + this.ry());
} // Move by center over x-axis

function cx(x) {
  return x == null ? this.attr('cx') : this.attr('cx', x);
} // Move by center over y-axis

function cy(y) {
  return y == null ? this.attr('cy') : this.attr('cy', y);
} // Set width of element

function width(width) {
  return width == null ? this.rx() * 2 : this.rx(new SVGNumber(width).divide(2));
} // Set height of element

function height(height) {
  return height == null ? this.ry() * 2 : this.ry(new SVGNumber(height).divide(2));
}

var circled = ({
	__proto__: null,
	rx: rx,
	ry: ry,
	x: x,
	y: y,
	cx: cx,
	cy: cy,
	width: width,
	height: height
});

var Shape =
/*#__PURE__*/
function (_Element) {
  _inherits(Shape, _Element);

  function Shape() {
    _classCallCheck(this, Shape);

    return _possibleConstructorReturn(this, _getPrototypeOf(Shape).apply(this, arguments));
  }

  return Shape;
}(Element);
register(Shape, 'Shape');

var Circle =
/*#__PURE__*/
function (_Shape) {
  _inherits(Circle, _Shape);

  function Circle(node) {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Circle).call(this, nodeOrNew('circle', node), node));
  }

  _createClass(Circle, [{
    key: "radius",
    value: function radius(r) {
      return this.attr('r', r);
    } // Radius x value

  }, {
    key: "rx",
    value: function rx(_rx) {
      return this.attr('r', _rx);
    } // Alias radius x value

  }, {
    key: "ry",
    value: function ry(_ry) {
      return this.rx(_ry);
    }
  }, {
    key: "size",
    value: function size(_size) {
      return this.radius(new SVGNumber(_size).divide(2));
    }
  }]);

  return Circle;
}(Shape);
extend(Circle, {
  x: x,
  y: y,
  cx: cx,
  cy: cy,
  width: width,
  height: height
});
registerMethods({
  Container: {
    // Create circle element
    circle: wrapWithAttrCheck(function (size) {
      return this.put(new Circle()).size(size).move(0, 0);
    })
  }
});
register(Circle, 'Circle');

var Container =
/*#__PURE__*/
function (_Element) {
  _inherits(Container, _Element);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "flatten",
    value: function flatten(parent) {
      this.each(function () {
        if (this instanceof Container) return this.flatten(parent).ungroup(parent);
        return this.toParent(parent);
      }); // we need this so that the root does not get removed

      this.node.firstElementChild || this.remove();
      return this;
    }
  }, {
    key: "ungroup",
    value: function ungroup(parent) {
      parent = parent || this.parent();
      this.each(function () {
        return this.toParent(parent);
      });
      this.remove();
      return this;
    }
  }]);

  return Container;
}(Element);
register(Container, 'Container');

var Defs =
/*#__PURE__*/
function (_Container) {
  _inherits(Defs, _Container);

  function Defs(node) {
    _classCallCheck(this, Defs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Defs).call(this, nodeOrNew('defs', node), node));
  }

  _createClass(Defs, [{
    key: "flatten",
    value: function flatten() {
      return this;
    }
  }, {
    key: "ungroup",
    value: function ungroup() {
      return this;
    }
  }]);

  return Defs;
}(Container);
register(Defs, 'Defs');

var Ellipse =
/*#__PURE__*/
function (_Shape) {
  _inherits(Ellipse, _Shape);

  function Ellipse(node) {
    _classCallCheck(this, Ellipse);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ellipse).call(this, nodeOrNew('ellipse', node), node));
  }

  _createClass(Ellipse, [{
    key: "size",
    value: function size(width, height) {
      var p = proportionalSize(this, width, height);
      return this.rx(new SVGNumber(p.width).divide(2)).ry(new SVGNumber(p.height).divide(2));
    }
  }]);

  return Ellipse;
}(Shape);
extend(Ellipse, circled);
registerMethods('Container', {
  // Create an ellipse
  ellipse: wrapWithAttrCheck(function () {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
    return this.put(new Ellipse()).size(width, height).move(0, 0);
  })
});
register(Ellipse, 'Ellipse');

var Stop =
/*#__PURE__*/
function (_Element) {
  _inherits(Stop, _Element);

  function Stop(node) {
    _classCallCheck(this, Stop);

    return _possibleConstructorReturn(this, _getPrototypeOf(Stop).call(this, nodeOrNew('stop', node), node));
  } // add color stops


  _createClass(Stop, [{
    key: "update",
    value: function update(o) {
      if (typeof o === 'number' || o instanceof SVGNumber) {
        o = {
          offset: arguments[0],
          color: arguments[1],
          opacity: arguments[2]
        };
      } // set attributes


      if (o.opacity != null) this.attr('stop-opacity', o.opacity);
      if (o.color != null) this.attr('stop-color', o.color);
      if (o.offset != null) this.attr('offset', new SVGNumber(o.offset));
      return this;
    }
  }]);

  return Stop;
}(Element);
register(Stop, 'Stop');

function from(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    fx: new SVGNumber(x),
    fy: new SVGNumber(y)
  }) : this.attr({
    x1: new SVGNumber(x),
    y1: new SVGNumber(y)
  });
}
function to(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    cx: new SVGNumber(x),
    cy: new SVGNumber(y)
  }) : this.attr({
    x2: new SVGNumber(x),
    y2: new SVGNumber(y)
  });
}

var gradiented = ({
	__proto__: null,
	from: from,
	to: to
});

var Gradient =
/*#__PURE__*/
function (_Container) {
  _inherits(Gradient, _Container);

  function Gradient(type, attrs) {
    _classCallCheck(this, Gradient);

    return _possibleConstructorReturn(this, _getPrototypeOf(Gradient).call(this, nodeOrNew(type + 'Gradient', typeof type === 'string' ? null : type), attrs));
  } // Add a color stop


  _createClass(Gradient, [{
    key: "stop",
    value: function stop(offset, color, opacity) {
      return this.put(new Stop()).update(offset, color, opacity);
    } // Update gradient

  }, {
    key: "update",
    value: function update(block) {
      // remove all stops
      this.clear(); // invoke passed block

      if (typeof block === 'function') {
        block.call(this, this);
      }

      return this;
    } // Return the fill id

  }, {
    key: "url",
    value: function url() {
      return 'url(#' + this.id() + ')';
    } // Alias string convertion to fill

  }, {
    key: "toString",
    value: function toString() {
      return this.url();
    } // custom attr to handle transform

  }, {
    key: "attr",
    value: function attr(a, b, c) {
      if (a === 'transform') a = 'gradientTransform';
      return _get(_getPrototypeOf(Gradient.prototype), "attr", this).call(this, a, b, c);
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg [fill*="' + this.id() + '"]');
    }
  }, {
    key: "bbox",
    value: function bbox() {
      return new Box();
    }
  }]);

  return Gradient;
}(Container);
extend(Gradient, gradiented);
registerMethods({
  Container: {
    // Create gradient element in defs
    gradient: wrapWithAttrCheck(function (type, block) {
      return this.defs().gradient(type, block);
    })
  },
  // define gradient
  Defs: {
    gradient: wrapWithAttrCheck(function (type, block) {
      return this.put(new Gradient(type)).update(block);
    })
  }
});
register(Gradient, 'Gradient');

var Pattern =
/*#__PURE__*/
function (_Container) {
  _inherits(Pattern, _Container);

  // Initialize node
  function Pattern(node) {
    _classCallCheck(this, Pattern);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pattern).call(this, nodeOrNew('pattern', node), node));
  } // Return the fill id


  _createClass(Pattern, [{
    key: "url",
    value: function url() {
      return 'url(#' + this.id() + ')';
    } // Update pattern by rebuilding

  }, {
    key: "update",
    value: function update(block) {
      // remove content
      this.clear(); // invoke passed block

      if (typeof block === 'function') {
        block.call(this, this);
      }

      return this;
    } // Alias string convertion to fill

  }, {
    key: "toString",
    value: function toString() {
      return this.url();
    } // custom attr to handle transform

  }, {
    key: "attr",
    value: function attr(a, b, c) {
      if (a === 'transform') a = 'patternTransform';
      return _get(_getPrototypeOf(Pattern.prototype), "attr", this).call(this, a, b, c);
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg [fill*="' + this.id() + '"]');
    }
  }, {
    key: "bbox",
    value: function bbox() {
      return new Box();
    }
  }]);

  return Pattern;
}(Container);
registerMethods({
  Container: {
    // Create pattern element in defs
    pattern: function pattern() {
      var _this$defs;

      return (_this$defs = this.defs()).pattern.apply(_this$defs, arguments);
    }
  },
  Defs: {
    pattern: wrapWithAttrCheck(function (width, height, block) {
      return this.put(new Pattern()).update(block).attr({
        x: 0,
        y: 0,
        width: width,
        height: height,
        patternUnits: 'userSpaceOnUse'
      });
    })
  }
});
register(Pattern, 'Pattern');

var Image =
/*#__PURE__*/
function (_Shape) {
  _inherits(Image, _Shape);

  function Image(node) {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this, nodeOrNew('image', node), node));
  } // (re)load image


  _createClass(Image, [{
    key: "load",
    value: function load(url, callback) {
      if (!url) return this;
      var img = new globals.window.Image();
      on(img, 'load', function (e) {
        var p = this.parent(Pattern); // ensure image size

        if (this.width() === 0 && this.height() === 0) {
          this.size(img.width, img.height);
        }

        if (p instanceof Pattern) {
          // ensure pattern size if not set
          if (p.width() === 0 && p.height() === 0) {
            p.size(this.width(), this.height());
          }
        }

        if (typeof callback === 'function') {
          callback.call(this, e);
        }
      }, this);
      on(img, 'load error', function () {
        // dont forget to unbind memory leaking events
        off(img);
      });
      return this.attr('href', img.src = url, xlink);
    }
  }]);

  return Image;
}(Shape);
registerAttrHook(function (attr, val, _this) {
  // convert image fill and stroke to patterns
  if (attr === 'fill' || attr === 'stroke') {
    if (isImage.test(val)) {
      val = _this.root().defs().image(val);
    }
  }

  if (val instanceof Image) {
    val = _this.root().defs().pattern(0, 0, function (pattern) {
      pattern.add(val);
    });
  }

  return val;
});
registerMethods({
  Container: {
    // create image element, load image and set its size
    image: wrapWithAttrCheck(function (source, callback) {
      return this.put(new Image()).size(0, 0).load(source, callback);
    })
  }
});
register(Image, 'Image');

var PointArray = subClassArray('PointArray', SVGArray);
extend(PointArray, {
  // Convert array to string
  toString: function toString() {
    // convert to a poly point string
    for (var i = 0, il = this.length, array = []; i < il; i++) {
      array.push(this[i].join(','));
    }

    return array.join(' ');
  },
  // Convert array to line object
  toLine: function toLine() {
    return {
      x1: this[0][0],
      y1: this[0][1],
      x2: this[1][0],
      y2: this[1][1]
    };
  },
  // Get morphed array at given position
  at: function at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this; // generate morphed point string

    for (var i = 0, il = this.length, array = []; i < il; i++) {
      array.push([this[i][0] + (this.destination[i][0] - this[i][0]) * pos, this[i][1] + (this.destination[i][1] - this[i][1]) * pos]);
    }

    return new PointArray(array);
  },
  // Parse point string and flat array
  parse: function parse() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[0, 0]];
    var points = []; // if it is an array

    if (array instanceof Array) {
      // and it is not flat, there is no need to parse it
      if (array[0] instanceof Array) {
        return array;
      }
    } else {
      // Else, it is considered as a string
      // parse points
      array = array.trim().split(delimiter).map(parseFloat);
    } // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.


    if (array.length % 2 !== 0) array.pop(); // wrap points in two-tuples

    for (var i = 0, len = array.length; i < len; i = i + 2) {
      points.push([array[i], array[i + 1]]);
    }

    return points;
  },
  // transform points with matrix (similar to Point.transform)
  transform: function transform(m) {
    var points = [];

    for (var i = 0; i < this.length; i++) {
      var point = this[i]; // Perform the matrix multiplication

      points.push([m.a * point[0] + m.c * point[1] + m.e, m.b * point[0] + m.d * point[1] + m.f]);
    } // Return the required point


    return new PointArray(points);
  },
  // Move point string
  move: function move(x, y) {
    var box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y; // move every point

    if (!isNaN(x) && !isNaN(y)) {
      for (var i = this.length - 1; i >= 0; i--) {
        this[i] = [this[i][0] + x, this[i][1] + y];
      }
    }

    return this;
  },
  // Resize poly string
  size: function size(width, height) {
    var i;
    var box = this.bbox(); // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      if (box.width) this[i][0] = (this[i][0] - box.x) * width / box.width + box.x;
      if (box.height) this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
    }

    return this;
  },
  // Get bounding box of points
  bbox: function bbox() {
    var maxX = -Infinity;
    var maxY = -Infinity;
    var minX = Infinity;
    var minY = Infinity;
    this.forEach(function (el) {
      maxX = Math.max(el[0], maxX);
      maxY = Math.max(el[1], maxY);
      minX = Math.min(el[0], minX);
      minY = Math.min(el[1], minY);
    });
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
});

var MorphArray = PointArray; // Move by left top corner over x-axis

function x$1(x) {
  return x == null ? this.bbox().x : this.move(x, this.bbox().y);
} // Move by left top corner over y-axis

function y$1(y) {
  return y == null ? this.bbox().y : this.move(this.bbox().x, y);
} // Set width of element

function width$1(width) {
  var b = this.bbox();
  return width == null ? b.width : this.size(width, b.height);
} // Set height of element

function height$1(height) {
  var b = this.bbox();
  return height == null ? b.height : this.size(b.width, height);
}

var pointed = ({
	__proto__: null,
	MorphArray: MorphArray,
	x: x$1,
	y: y$1,
	width: width$1,
	height: height$1
});

var Line =
/*#__PURE__*/
function (_Shape) {
  _inherits(Line, _Shape);

  // Initialize node
  function Line(node) {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _getPrototypeOf(Line).call(this, nodeOrNew('line', node), node));
  } // Get array


  _createClass(Line, [{
    key: "array",
    value: function array() {
      return new PointArray([[this.attr('x1'), this.attr('y1')], [this.attr('x2'), this.attr('y2')]]);
    } // Overwrite native plot() method

  }, {
    key: "plot",
    value: function plot(x1, y1, x2, y2) {
      if (x1 == null) {
        return this.array();
      } else if (typeof y1 !== 'undefined') {
        x1 = {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2
        };
      } else {
        x1 = new PointArray(x1).toLine();
      }

      return this.attr(x1);
    } // Move by left top corner

  }, {
    key: "move",
    value: function move(x, y) {
      return this.attr(this.array().move(x, y).toLine());
    } // Set element size to given width and height

  }, {
    key: "size",
    value: function size(width, height) {
      var p = proportionalSize(this, width, height);
      return this.attr(this.array().size(p.width, p.height).toLine());
    }
  }]);

  return Line;
}(Shape);
extend(Line, pointed);
registerMethods({
  Container: {
    // Create a line element
    line: wrapWithAttrCheck(function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // make sure plot is called as a setter
      // x1 is not necessarily a number, it can also be an array, a string and a PointArray
      return Line.prototype.plot.apply(this.put(new Line()), args[0] != null ? args : [0, 0, 0, 0]);
    })
  }
});
register(Line, 'Line');

var Marker =
/*#__PURE__*/
function (_Container) {
  _inherits(Marker, _Container);

  // Initialize node
  function Marker(node) {
    _classCallCheck(this, Marker);

    return _possibleConstructorReturn(this, _getPrototypeOf(Marker).call(this, nodeOrNew('marker', node), node));
  } // Set width of element


  _createClass(Marker, [{
    key: "width",
    value: function width(_width) {
      return this.attr('markerWidth', _width);
    } // Set height of element

  }, {
    key: "height",
    value: function height(_height) {
      return this.attr('markerHeight', _height);
    } // Set marker refX and refY

  }, {
    key: "ref",
    value: function ref(x, y) {
      return this.attr('refX', x).attr('refY', y);
    } // Update marker

  }, {
    key: "update",
    value: function update(block) {
      // remove all content
      this.clear(); // invoke passed block

      if (typeof block === 'function') {
        block.call(this, this);
      }

      return this;
    } // Return the fill id

  }, {
    key: "toString",
    value: function toString() {
      return 'url(#' + this.id() + ')';
    }
  }]);

  return Marker;
}(Container);
registerMethods({
  Container: {
    marker: function marker() {
      var _this$defs;

      // Create marker element in defs
      return (_this$defs = this.defs()).marker.apply(_this$defs, arguments);
    }
  },
  Defs: {
    // Create marker
    marker: wrapWithAttrCheck(function (width, height, block) {
      // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
      return this.put(new Marker()).size(width, height).ref(width / 2, height / 2).viewbox(0, 0, width, height).attr('orient', 'auto').update(block);
    })
  },
  marker: {
    // Create and attach markers
    marker: function marker(_marker, width, height, block) {
      var attr = ['marker']; // Build attribute name

      if (_marker !== 'all') attr.push(_marker);
      attr = attr.join('-'); // Set marker attribute

      _marker = arguments[1] instanceof Marker ? arguments[1] : this.defs().marker(width, height, block);
      return this.attr(attr, _marker);
    }
  }
});
register(Marker, 'Marker');

var nativeSort = [].sort;
var test$2 = [1, 2, 3];

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test$2.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test$2.sort(null);
});
// Old WebKit
var SLOPPY_METHOD$2 = sloppyArrayMethod('sort');

var FORCED$4 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD$2;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
_export({ target: 'Array', proto: true, forced: FORCED$4 }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction$1(comparefn));
  }
});

/***
Base Class
==========
The base stepper class that will be
***/

function makeSetterGetter(k, f) {
  return function (v) {
    if (v == null) return this[v];
    this[k] = v;
    if (f) f.call(this);
    return this;
  };
}

var easing = {
  '-': function _(pos) {
    return pos;
  },
  '<>': function _(pos) {
    return -Math.cos(pos * Math.PI) / 2 + 0.5;
  },
  '>': function _(pos) {
    return Math.sin(pos * Math.PI / 2);
  },
  '<': function _(pos) {
    return -Math.cos(pos * Math.PI / 2) + 1;
  },
  bezier: function bezier(x1, y1, x2, y2) {
    // see https://www.w3.org/TR/css-easing-1/#cubic-bezier-algo
    return function (t) {
      if (t < 0) {
        if (x1 > 0) {
          return y1 / x1 * t;
        } else if (x2 > 0) {
          return y2 / x2 * t;
        } else {
          return 0;
        }
      } else if (t > 1) {
        if (x2 < 1) {
          return (1 - y2) / (1 - x2) * t + (y2 - x2) / (1 - x2);
        } else if (x1 < 1) {
          return (1 - y1) / (1 - x1) * t + (y1 - x1) / (1 - x1);
        } else {
          return 1;
        }
      } else {
        return 3 * t * Math.pow(1 - t, 2) * y1 + 3 * Math.pow(t, 2) * (1 - t) * y2 + Math.pow(t, 3);
      }
    };
  },
  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
  steps: function steps(_steps) {
    var stepPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'end';
    // deal with "jump-" prefix
    stepPosition = stepPosition.split('-').reverse()[0];
    var jumps = _steps;

    if (stepPosition === 'none') {
      --jumps;
    } else if (stepPosition === 'both') {
      ++jumps;
    } // The beforeFlag is essentially useless


    return function (t) {
      var beforeFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Step is called currentStep in referenced url
      var step = Math.floor(t * _steps);
      var jumping = t * step % 1 === 0;

      if (stepPosition === 'start' || stepPosition === 'both') {
        ++step;
      }

      if (beforeFlag && jumping) {
        --step;
      }

      if (t >= 0 && step < 0) {
        step = 0;
      }

      if (t <= 1 && step > jumps) {
        step = jumps;
      }

      return step / jumps;
    };
  }
};
var Stepper =
/*#__PURE__*/
function () {
  function Stepper() {
    _classCallCheck(this, Stepper);
  }

  _createClass(Stepper, [{
    key: "done",
    value: function done() {
      return false;
    }
  }]);

  return Stepper;
}();
/***
Easing Functions
================
***/

var Ease =
/*#__PURE__*/
function (_Stepper) {
  _inherits(Ease, _Stepper);

  function Ease(fn) {
    var _this;

    _classCallCheck(this, Ease);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ease).call(this));
    _this.ease = easing[fn || timeline.ease] || fn;
    return _this;
  }

  _createClass(Ease, [{
    key: "step",
    value: function step(from, to, pos) {
      if (typeof from !== 'number') {
        return pos < 1 ? from : to;
      }

      return from + (to - from) * this.ease(pos);
    }
  }]);

  return Ease;
}(Stepper);
/***
Controller Types
================
***/

var Controller =
/*#__PURE__*/
function (_Stepper2) {
  _inherits(Controller, _Stepper2);

  function Controller(fn) {
    var _this2;

    _classCallCheck(this, Controller);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Controller).call(this));
    _this2.stepper = fn;
    return _this2;
  }

  _createClass(Controller, [{
    key: "step",
    value: function step(current, target, dt, c) {
      return this.stepper(current, target, dt, c);
    }
  }, {
    key: "done",
    value: function done(c) {
      return c.done;
    }
  }]);

  return Controller;
}(Stepper);

function recalculate() {
  // Apply the default parameters
  var duration = (this._duration || 500) / 1000;
  var overshoot = this._overshoot || 0; // Calculate the PID natural response

  var eps = 1e-10;
  var pi = Math.PI;
  var os = Math.log(overshoot / 100 + eps);
  var zeta = -os / Math.sqrt(pi * pi + os * os);
  var wn = 3.9 / (zeta * duration); // Calculate the Spring values

  this.d = 2 * zeta * wn;
  this.k = wn * wn;
}

var Spring =
/*#__PURE__*/
function (_Controller) {
  _inherits(Spring, _Controller);

  function Spring(duration, overshoot) {
    var _this3;

    _classCallCheck(this, Spring);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Spring).call(this));

    _this3.duration(duration || 500).overshoot(overshoot || 0);

    return _this3;
  }

  _createClass(Spring, [{
    key: "step",
    value: function step(current, target, dt, c) {
      if (typeof current === 'string') return current;
      c.done = dt === Infinity;
      if (dt === Infinity) return target;
      if (dt === 0) return current;
      if (dt > 100) dt = 16;
      dt /= 1000; // Get the previous velocity

      var velocity = c.velocity || 0; // Apply the control to get the new position and store it

      var acceleration = -this.d * velocity - this.k * (current - target);
      var newPosition = current + velocity * dt + acceleration * dt * dt / 2; // Store the velocity

      c.velocity = velocity + acceleration * dt; // Figure out if we have converged, and if so, pass the value

      c.done = Math.abs(target - newPosition) + Math.abs(velocity) < 0.002;
      return c.done ? target : newPosition;
    }
  }]);

  return Spring;
}(Controller);
extend(Spring, {
  duration: makeSetterGetter('_duration', recalculate),
  overshoot: makeSetterGetter('_overshoot', recalculate)
});
var PID =
/*#__PURE__*/
function (_Controller2) {
  _inherits(PID, _Controller2);

  function PID(p, i, d, windup) {
    var _this4;

    _classCallCheck(this, PID);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PID).call(this));
    p = p == null ? 0.1 : p;
    i = i == null ? 0.01 : i;
    d = d == null ? 0 : d;
    windup = windup == null ? 1000 : windup;

    _this4.p(p).i(i).d(d).windup(windup);

    return _this4;
  }

  _createClass(PID, [{
    key: "step",
    value: function step(current, target, dt, c) {
      if (typeof current === 'string') return current;
      c.done = dt === Infinity;
      if (dt === Infinity) return target;
      if (dt === 0) return current;
      var p = target - current;
      var i = (c.integral || 0) + p * dt;
      var d = (p - (c.error || 0)) / dt;
      var windup = this.windup; // antiwindup

      if (windup !== false) {
        i = Math.max(-windup, Math.min(i, windup));
      }

      c.error = p;
      c.integral = i;
      c.done = Math.abs(p) < 0.001;
      return c.done ? target : current + (this.P * p + this.I * i + this.D * d);
    }
  }]);

  return PID;
}(Controller);
extend(PID, {
  windup: makeSetterGetter('windup'),
  p: makeSetterGetter('P'),
  i: makeSetterGetter('I'),
  d: makeSetterGetter('D')
});

var PathArray = subClassArray('PathArray', SVGArray);
function pathRegReplace(a, b, c, d) {
  return c + d.replace(dots, ' .');
}

function arrayToString(a) {
  for (var i = 0, il = a.length, s = ''; i < il; i++) {
    s += a[i][0];

    if (a[i][1] != null) {
      s += a[i][1];

      if (a[i][2] != null) {
        s += ' ';
        s += a[i][2];

        if (a[i][3] != null) {
          s += ' ';
          s += a[i][3];
          s += ' ';
          s += a[i][4];

          if (a[i][5] != null) {
            s += ' ';
            s += a[i][5];
            s += ' ';
            s += a[i][6];

            if (a[i][7] != null) {
              s += ' ';
              s += a[i][7];
            }
          }
        }
      }
    }
  }

  return s + ' ';
}

var pathHandlers = {
  M: function M(c, p, p0) {
    p.x = p0.x = c[0];
    p.y = p0.y = c[1];
    return ['M', p.x, p.y];
  },
  L: function L(c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['L', c[0], c[1]];
  },
  H: function H(c, p) {
    p.x = c[0];
    return ['H', c[0]];
  },
  V: function V(c, p) {
    p.y = c[0];
    return ['V', c[0]];
  },
  C: function C(c, p) {
    p.x = c[4];
    p.y = c[5];
    return ['C', c[0], c[1], c[2], c[3], c[4], c[5]];
  },
  S: function S(c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['S', c[0], c[1], c[2], c[3]];
  },
  Q: function Q(c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['Q', c[0], c[1], c[2], c[3]];
  },
  T: function T(c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['T', c[0], c[1]];
  },
  Z: function Z(c, p, p0) {
    p.x = p0.x;
    p.y = p0.y;
    return ['Z'];
  },
  A: function A(c, p) {
    p.x = c[5];
    p.y = c[6];
    return ['A', c[0], c[1], c[2], c[3], c[4], c[5], c[6]];
  }
};
var mlhvqtcsaz = 'mlhvqtcsaz'.split('');

for (var i = 0, il = mlhvqtcsaz.length; i < il; ++i) {
  pathHandlers[mlhvqtcsaz[i]] = function (i) {
    return function (c, p, p0) {
      if (i === 'H') c[0] = c[0] + p.x;else if (i === 'V') c[0] = c[0] + p.y;else if (i === 'A') {
        c[5] = c[5] + p.x;
        c[6] = c[6] + p.y;
      } else {
        for (var j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j % 2 ? p.y : p.x);
        }
      }
      return pathHandlers[i](c, p, p0);
    };
  }(mlhvqtcsaz[i].toUpperCase());
}

extend(PathArray, {
  // Convert array to string
  toString: function toString() {
    return arrayToString(this);
  },
  // Move path string
  move: function move(x, y) {
    // get bounding box of current situation
    var box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y;

    if (!isNaN(x) && !isNaN(y)) {
      // move every point
      for (var l, i = this.length - 1; i >= 0; i--) {
        l = this[i][0];

        if (l === 'M' || l === 'L' || l === 'T') {
          this[i][1] += x;
          this[i][2] += y;
        } else if (l === 'H') {
          this[i][1] += x;
        } else if (l === 'V') {
          this[i][1] += y;
        } else if (l === 'C' || l === 'S' || l === 'Q') {
          this[i][1] += x;
          this[i][2] += y;
          this[i][3] += x;
          this[i][4] += y;

          if (l === 'C') {
            this[i][5] += x;
            this[i][6] += y;
          }
        } else if (l === 'A') {
          this[i][6] += x;
          this[i][7] += y;
        }
      }
    }

    return this;
  },
  // Resize path string
  size: function size(width, height) {
    // get bounding box of current situation
    var box = this.bbox();
    var i, l; // If the box width or height is 0 then we ignore
    // transformations on the respective axis

    box.width = box.width === 0 ? 1 : box.width;
    box.height = box.height === 0 ? 1 : box.height; // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      l = this[i][0];

      if (l === 'M' || l === 'L' || l === 'T') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
      } else if (l === 'H') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
      } else if (l === 'V') {
        this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
      } else if (l === 'C' || l === 'S' || l === 'Q') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
        this[i][3] = (this[i][3] - box.x) * width / box.width + box.x;
        this[i][4] = (this[i][4] - box.y) * height / box.height + box.y;

        if (l === 'C') {
          this[i][5] = (this[i][5] - box.x) * width / box.width + box.x;
          this[i][6] = (this[i][6] - box.y) * height / box.height + box.y;
        }
      } else if (l === 'A') {
        // resize radii
        this[i][1] = this[i][1] * width / box.width;
        this[i][2] = this[i][2] * height / box.height; // move position values

        this[i][6] = (this[i][6] - box.x) * width / box.width + box.x;
        this[i][7] = (this[i][7] - box.y) * height / box.height + box.y;
      }
    }

    return this;
  },
  // Test if the passed path array use the same path data commands as this path array
  equalCommands: function equalCommands(pathArray) {
    var i, il, equalCommands;
    pathArray = new PathArray(pathArray);
    equalCommands = this.length === pathArray.length;

    for (i = 0, il = this.length; equalCommands && i < il; i++) {
      equalCommands = this[i][0] === pathArray[i][0];
    }

    return equalCommands;
  },
  // Make path array morphable
  morph: function morph(pathArray) {
    pathArray = new PathArray(pathArray);

    if (this.equalCommands(pathArray)) {
      this.destination = pathArray;
    } else {
      this.destination = null;
    }

    return this;
  },
  // Get morphed path array at given position
  at: function at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this;
    var sourceArray = this;
    var destinationArray = this.destination.value;
    var array = [];
    var pathArray = new PathArray();
    var i, il, j, jl; // Animate has specified in the SVG spec
    // See: https://www.w3.org/TR/SVG11/paths.html#PathElement

    for (i = 0, il = sourceArray.length; i < il; i++) {
      array[i] = [sourceArray[i][0]];

      for (j = 1, jl = sourceArray[i].length; j < jl; j++) {
        array[i][j] = sourceArray[i][j] + (destinationArray[i][j] - sourceArray[i][j]) * pos;
      } // For the two flags of the elliptical arc command, the SVG spec say:
      // Flags and booleans are interpolated as fractions between zero and one, with any non-zero value considered to be a value of one/true
      // Elliptical arc command as an array followed by corresponding indexes:
      // ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
      //   0    1   2        3                 4             5      6  7


      if (array[i][0] === 'A') {
        array[i][4] = +(array[i][4] !== 0);
        array[i][5] = +(array[i][5] !== 0);
      }
    } // Directly modify the value of a path array, this is done this way for performance


    pathArray.value = array;
    return pathArray;
  },
  // Absolutize and parse path to array
  parse: function parse() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [['M', 0, 0]];
    // if it's already a patharray, no need to parse it
    if (array instanceof PathArray) return array; // prepare for parsing

    var s;
    var paramCnt = {
      M: 2,
      L: 2,
      H: 1,
      V: 1,
      C: 6,
      S: 4,
      Q: 4,
      T: 2,
      A: 7,
      Z: 0
    };

    if (typeof array === 'string') {
      array = array.replace(numbersWithDots, pathRegReplace) // convert 45.123.123 to 45.123 .123
      .replace(pathLetters, ' $& ') // put some room between letters and numbers
      .replace(hyphen, '$1 -') // add space before hyphen
      .trim() // trim
      .split(delimiter); // split into array
    } else {
      array = array.reduce(function (prev, curr) {
        return [].concat.call(prev, curr);
      }, []);
    } // array now is an array containing all parts of a path e.g. ['M', '0', '0', 'L', '30', '30' ...]


    var result = [];
    var p = new Point();
    var p0 = new Point();
    var index = 0;
    var len = array.length;

    do {
      // Test if we have a path letter
      if (isPathLetter.test(array[index])) {
        s = array[index];
        ++index; // If last letter was a move command and we got no new, it defaults to [L]ine
      } else if (s === 'M') {
        s = 'L';
      } else if (s === 'm') {
        s = 'l';
      }

      result.push(pathHandlers[s].call(null, array.slice(index, index = index + paramCnt[s.toUpperCase()]).map(parseFloat), p, p0));
    } while (len > index);

    return result;
  },
  // Get bounding box of path
  bbox: function bbox() {
    parser().path.setAttribute('d', this.toString());
    return parser.nodes.path.getBBox();
  }
});

var Morphable =
/*#__PURE__*/
function () {
  function Morphable(stepper) {
    _classCallCheck(this, Morphable);

    this._stepper = stepper || new Ease('-');
    this._from = null;
    this._to = null;
    this._type = null;
    this._context = null;
    this._morphObj = null;
  }

  _createClass(Morphable, [{
    key: "from",
    value: function from(val) {
      if (val == null) {
        return this._from;
      }

      this._from = this._set(val);
      return this;
    }
  }, {
    key: "to",
    value: function to(val) {
      if (val == null) {
        return this._to;
      }

      this._to = this._set(val);
      return this;
    }
  }, {
    key: "type",
    value: function type(_type) {
      // getter
      if (_type == null) {
        return this._type;
      } // setter


      this._type = _type;
      return this;
    }
  }, {
    key: "_set",
    value: function _set(value) {
      if (!this._type) {
        var type = _typeof(value);

        if (type === 'number') {
          this.type(SVGNumber);
        } else if (type === 'string') {
          if (Color.isColor(value)) {
            this.type(Color);
          } else if (delimiter.test(value)) {
            this.type(pathLetters.test(value) ? PathArray : SVGArray);
          } else if (numberAndUnit.test(value)) {
            this.type(SVGNumber);
          } else {
            this.type(NonMorphable);
          }
        } else if (morphableTypes.indexOf(value.constructor) > -1) {
          this.type(value.constructor);
        } else if (Array.isArray(value)) {
          this.type(SVGArray);
        } else if (type === 'object') {
          this.type(ObjectBag);
        } else {
          this.type(NonMorphable);
        }
      }

      var result = new this._type(value);

      if (this._type === Color) {
        result = this._to ? result[this._to[4]]() : this._from ? result[this._from[4]]() : result;
      }

      result = result.toArray();
      this._morphObj = this._morphObj || new this._type();
      this._context = this._context || Array.apply(null, Array(result.length)).map(Object).map(function (o) {
        o.done = true;
        return o;
      });
      return result;
    }
  }, {
    key: "stepper",
    value: function stepper(_stepper) {
      if (_stepper == null) return this._stepper;
      this._stepper = _stepper;
      return this;
    }
  }, {
    key: "done",
    value: function done() {
      var complete = this._context.map(this._stepper.done).reduce(function (last, curr) {
        return last && curr;
      }, true);

      return complete;
    }
  }, {
    key: "at",
    value: function at(pos) {
      var _this = this;

      return this._morphObj.fromArray(this._from.map(function (i, index) {
        return _this._stepper.step(i, _this._to[index], pos, _this._context[index], _this._context);
      }));
    }
  }]);

  return Morphable;
}();
var NonMorphable =
/*#__PURE__*/
function () {
  function NonMorphable() {
    _classCallCheck(this, NonMorphable);

    this.init.apply(this, arguments);
  }

  _createClass(NonMorphable, [{
    key: "init",
    value: function init(val) {
      val = Array.isArray(val) ? val[0] : val;
      this.value = val;
      return this;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.value];
    }
  }]);

  return NonMorphable;
}();
var TransformBag =
/*#__PURE__*/
function () {
  function TransformBag() {
    _classCallCheck(this, TransformBag);

    this.init.apply(this, arguments);
  }

  _createClass(TransformBag, [{
    key: "init",
    value: function init(obj) {
      if (Array.isArray(obj)) {
        obj = {
          scaleX: obj[0],
          scaleY: obj[1],
          shear: obj[2],
          rotate: obj[3],
          translateX: obj[4],
          translateY: obj[5],
          originX: obj[6],
          originY: obj[7]
        };
      }

      Object.assign(this, TransformBag.defaults, obj);
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var v = this;
      return [v.scaleX, v.scaleY, v.shear, v.rotate, v.translateX, v.translateY, v.originX, v.originY];
    }
  }]);

  return TransformBag;
}();
TransformBag.defaults = {
  scaleX: 1,
  scaleY: 1,
  shear: 0,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  originX: 0,
  originY: 0
};
var ObjectBag =
/*#__PURE__*/
function () {
  function ObjectBag() {
    _classCallCheck(this, ObjectBag);

    this.init.apply(this, arguments);
  }

  _createClass(ObjectBag, [{
    key: "init",
    value: function init(objOrArr) {
      this.values = [];

      if (Array.isArray(objOrArr)) {
        this.values = objOrArr;
        return;
      }

      objOrArr = objOrArr || {};
      var entries = [];

      for (var i in objOrArr) {
        entries.push([i, objOrArr[i]]);
      }

      entries.sort(function (a, b) {
        return a[0] - b[0];
      });
      this.values = entries.reduce(function (last, curr) {
        return last.concat(curr);
      }, []);
      return this;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      var obj = {};
      var arr = this.values;

      for (var i = 0, len = arr.length; i < len; i += 2) {
        obj[arr[i]] = arr[i + 1];
      }

      return obj;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return this.values;
    }
  }]);

  return ObjectBag;
}();
var morphableTypes = [NonMorphable, TransformBag, ObjectBag];
function registerMorphableType() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  morphableTypes.push.apply(morphableTypes, _toConsumableArray([].concat(type)));
}
function makeMorphable() {
  extend(morphableTypes, {
    to: function to(val) {
      return new Morphable().type(this.constructor).from(this.valueOf()).to(val);
    },
    fromArray: function fromArray(arr) {
      this.init(arr);
      return this;
    }
  });
}

var Path =
/*#__PURE__*/
function (_Shape) {
  _inherits(Path, _Shape);

  // Initialize node
  function Path(node) {
    _classCallCheck(this, Path);

    return _possibleConstructorReturn(this, _getPrototypeOf(Path).call(this, nodeOrNew('path', node), node));
  } // Get array


  _createClass(Path, [{
    key: "array",
    value: function array() {
      return this._array || (this._array = new PathArray(this.attr('d')));
    } // Plot new path

  }, {
    key: "plot",
    value: function plot(d) {
      return d == null ? this.array() : this.clear().attr('d', typeof d === 'string' ? d : this._array = new PathArray(d));
    } // Clear array cache

  }, {
    key: "clear",
    value: function clear() {
      delete this._array;
      return this;
    } // Move by left top corner

  }, {
    key: "move",
    value: function move(x, y) {
      return this.attr('d', this.array().move(x, y));
    } // Move by left top corner over x-axis

  }, {
    key: "x",
    value: function x(_x) {
      return _x == null ? this.bbox().x : this.move(_x, this.bbox().y);
    } // Move by left top corner over y-axis

  }, {
    key: "y",
    value: function y(_y) {
      return _y == null ? this.bbox().y : this.move(this.bbox().x, _y);
    } // Set element size to given width and height

  }, {
    key: "size",
    value: function size(width, height) {
      var p = proportionalSize(this, width, height);
      return this.attr('d', this.array().size(p.width, p.height));
    } // Set width of element

  }, {
    key: "width",
    value: function width(_width) {
      return _width == null ? this.bbox().width : this.size(_width, this.bbox().height);
    } // Set height of element

  }, {
    key: "height",
    value: function height(_height) {
      return _height == null ? this.bbox().height : this.size(this.bbox().width, _height);
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg textpath [href*="' + this.id() + '"]');
    }
  }]);

  return Path;
}(Shape); // Define morphable array
Path.prototype.MorphArray = PathArray; // Add parent method

registerMethods({
  Container: {
    // Create a wrapped path element
    path: wrapWithAttrCheck(function (d) {
      // make sure plot is called as a setter
      return this.put(new Path()).plot(d || new PathArray());
    })
  }
});
register(Path, 'Path');

function array() {
  return this._array || (this._array = new PointArray(this.attr('points')));
} // Plot new path

function plot(p) {
  return p == null ? this.array() : this.clear().attr('points', typeof p === 'string' ? p : this._array = new PointArray(p));
} // Clear array cache

function clear() {
  delete this._array;
  return this;
} // Move by left top corner

function move(x, y) {
  return this.attr('points', this.array().move(x, y));
} // Set element size to given width and height

function size(width, height) {
  var p = proportionalSize(this, width, height);
  return this.attr('points', this.array().size(p.width, p.height));
}

var poly = ({
	__proto__: null,
	array: array,
	plot: plot,
	clear: clear,
	move: move,
	size: size
});

var Polygon =
/*#__PURE__*/
function (_Shape) {
  _inherits(Polygon, _Shape);

  // Initialize node
  function Polygon(node) {
    _classCallCheck(this, Polygon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Polygon).call(this, nodeOrNew('polygon', node), node));
  }

  return Polygon;
}(Shape);
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polygon: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polygon()).plot(p || new PointArray());
    })
  }
});
extend(Polygon, pointed);
extend(Polygon, poly);
register(Polygon, 'Polygon');

var Polyline =
/*#__PURE__*/
function (_Shape) {
  _inherits(Polyline, _Shape);

  // Initialize node
  function Polyline(node) {
    _classCallCheck(this, Polyline);

    return _possibleConstructorReturn(this, _getPrototypeOf(Polyline).call(this, nodeOrNew('polyline', node), node));
  }

  return Polyline;
}(Shape);
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polyline: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polyline()).plot(p || new PointArray());
    })
  }
});
extend(Polyline, pointed);
extend(Polyline, poly);
register(Polyline, 'Polyline');

var Rect =
/*#__PURE__*/
function (_Shape) {
  _inherits(Rect, _Shape);

  // Initialize node
  function Rect(node) {
    _classCallCheck(this, Rect);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rect).call(this, nodeOrNew('rect', node), node));
  }

  return Rect;
}(Shape);
extend(Rect, {
  rx: rx,
  ry: ry
});
registerMethods({
  Container: {
    // Create a rect element
    rect: wrapWithAttrCheck(function (width, height) {
      return this.put(new Rect()).size(width, height);
    })
  }
});
register(Rect, 'Rect');

var max$3 = Math.max;
var min$4 = Math.min;
var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('splice') }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min$4(max$3(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});

var Queue =
/*#__PURE__*/
function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this._first = null;
    this._last = null;
  }

  _createClass(Queue, [{
    key: "push",
    value: function push(value) {
      // An item stores an id and the provided value
      var item = value.next ? value : {
        value: value,
        next: null,
        prev: null
      }; // Deal with the queue being empty or populated

      if (this._last) {
        item.prev = this._last;
        this._last.next = item;
        this._last = item;
      } else {
        this._last = item;
        this._first = item;
      } // Return the current item


      return item;
    }
  }, {
    key: "shift",
    value: function shift() {
      // Check if we have a value
      var remove = this._first;
      if (!remove) return null; // If we do, remove it and relink things

      this._first = remove.next;
      if (this._first) this._first.prev = null;
      this._last = this._first ? this._last : null;
      return remove.value;
    } // Shows us the first item in the list

  }, {
    key: "first",
    value: function first() {
      return this._first && this._first.value;
    } // Shows us the last item in the list

  }, {
    key: "last",
    value: function last() {
      return this._last && this._last.value;
    } // Removes the item that was returned from the push

  }, {
    key: "remove",
    value: function remove(item) {
      // Relink the previous item
      if (item.prev) item.prev.next = item.next;
      if (item.next) item.next.prev = item.prev;
      if (item === this._last) this._last = item.prev;
      if (item === this._first) this._first = item.next; // Invalidate item

      item.prev = null;
      item.next = null;
    }
  }]);

  return Queue;
}();

var Animator = {
  nextDraw: null,
  frames: new Queue(),
  timeouts: new Queue(),
  immediates: new Queue(),
  timer: function timer() {
    return globals.window.performance || globals.window.Date;
  },
  transforms: [],
  frame: function frame(fn) {
    // Store the node
    var node = Animator.frames.push({
      run: fn
    }); // Request an animation frame if we don't have one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    } // Return the node so we can remove it easily


    return node;
  },
  timeout: function timeout(fn, delay) {
    delay = delay || 0; // Work out when the event should fire

    var time = Animator.timer().now() + delay; // Add the timeout to the end of the queue

    var node = Animator.timeouts.push({
      run: fn,
      time: time
    }); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },
  immediate: function immediate(fn) {
    // Add the immediate fn to the end of the queue
    var node = Animator.immediates.push(fn); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },
  cancelFrame: function cancelFrame(node) {
    node != null && Animator.frames.remove(node);
  },
  clearTimeout: function clearTimeout(node) {
    node != null && Animator.timeouts.remove(node);
  },
  cancelImmediate: function cancelImmediate(node) {
    node != null && Animator.immediates.remove(node);
  },
  _draw: function _draw(now) {
    // Run all the timeouts we can run, if they are not ready yet, add them
    // to the end of the queue immediately! (bad timeouts!!! [sarcasm])
    var nextTimeout = null;
    var lastTimeout = Animator.timeouts.last();

    while (nextTimeout = Animator.timeouts.shift()) {
      // Run the timeout if its time, or push it to the end
      if (now >= nextTimeout.time) {
        nextTimeout.run();
      } else {
        Animator.timeouts.push(nextTimeout);
      } // If we hit the last item, we should stop shifting out more items


      if (nextTimeout === lastTimeout) break;
    } // Run all of the animation frames


    var nextFrame = null;
    var lastFrame = Animator.frames.last();

    while (nextFrame !== lastFrame && (nextFrame = Animator.frames.shift())) {
      nextFrame.run(now);
    }

    var nextImmediate = null;

    while (nextImmediate = Animator.immediates.shift()) {
      nextImmediate();
    } // If we have remaining timeouts or frames, draw until we don't anymore


    Animator.nextDraw = Animator.timeouts.first() || Animator.frames.first() ? globals.window.requestAnimationFrame(Animator._draw) : null;
  }
};

var makeSchedule = function makeSchedule(runnerInfo) {
  var start = runnerInfo.start;
  var duration = runnerInfo.runner.duration();
  var end = start + duration;
  return {
    start: start,
    duration: duration,
    end: end,
    runner: runnerInfo.runner
  };
};

var defaultSource = function defaultSource() {
  var w = globals.window;
  return (w.performance || w.Date).now();
};

var Timeline =
/*#__PURE__*/
function (_EventTarget) {
  _inherits(Timeline, _EventTarget);

  // Construct a new timeline on the given element
  function Timeline() {
    var _this;

    var timeSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSource;

    _classCallCheck(this, Timeline);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Timeline).call(this));
    _this._timeSource = timeSource; // Store the timing variables

    _this._startTime = 0;
    _this._speed = 1.0; // Determines how long a runner is hold in memory. Can be a dt or true/false

    _this._persist = 0; // Keep track of the running animations and their starting parameters

    _this._nextFrame = null;
    _this._paused = true;
    _this._runners = [];
    _this._runnerIds = [];
    _this._lastRunnerId = -1;
    _this._time = 0;
    _this._lastSourceTime = 0;
    _this._lastStepTime = 0; // Make sure that step is always called in class context

    _this._step = _this._stepFn.bind(_assertThisInitialized(_this), false);
    _this._stepImmediate = _this._stepFn.bind(_assertThisInitialized(_this), true);
    return _this;
  } // schedules a runner on the timeline


  _createClass(Timeline, [{
    key: "schedule",
    value: function schedule(runner, delay, when) {
      if (runner == null) {
        return this._runners.map(makeSchedule);
      } // The start time for the next animation can either be given explicitly,
      // derived from the current timeline time or it can be relative to the
      // last start time to chain animations direclty


      var absoluteStartTime = 0;
      var endTime = this.getEndTime();
      delay = delay || 0; // Work out when to start the animation

      if (when == null || when === 'last' || when === 'after') {
        // Take the last time and increment
        absoluteStartTime = endTime;
      } else if (when === 'absolute' || when === 'start') {
        absoluteStartTime = delay;
        delay = 0;
      } else if (when === 'now') {
        absoluteStartTime = this._time;
      } else if (when === 'relative') {
        var _runnerInfo = this._runners[runner.id];

        if (_runnerInfo) {
          absoluteStartTime = _runnerInfo.start + delay;
          delay = 0;
        }
      } else {
        throw new Error('Invalid value for the "when" parameter');
      } // Manage runner


      runner.unschedule();
      runner.timeline(this);
      var persist = runner.persist();
      var runnerInfo = {
        persist: persist === null ? this._persist : persist,
        start: absoluteStartTime + delay,
        runner: runner
      };
      this._lastRunnerId = runner.id;

      this._runners.push(runnerInfo);

      this._runners.sort(function (a, b) {
        return a.start - b.start;
      });

      this._runnerIds = this._runners.map(function (info) {
        return info.runner.id;
      });

      this.updateTime()._continue();

      return this;
    } // Remove the runner from this timeline

  }, {
    key: "unschedule",
    value: function unschedule(runner) {
      var index = this._runnerIds.indexOf(runner.id);

      if (index < 0) return this;

      this._runners.splice(index, 1);

      this._runnerIds.splice(index, 1);

      runner.timeline(null);
      return this;
    } // Calculates the end of the timeline

  }, {
    key: "getEndTime",
    value: function getEndTime() {
      var lastRunnerInfo = this._runners[this._runnerIds.indexOf(this._lastRunnerId)];

      var lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0;
      var lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : 0;
      return lastStartTime + lastDuration;
    }
  }, {
    key: "getEndTimeOfTimeline",
    value: function getEndTimeOfTimeline() {
      var lastEndTime = 0;

      for (var i = 0; i < this._runners.length; i++) {
        var runnerInfo = this._runners[i];
        var duration = runnerInfo ? runnerInfo.runner.duration() : 0;
        var startTime = runnerInfo ? runnerInfo.start : 0;
        var endTime = startTime + duration;

        if (endTime > lastEndTime) {
          lastEndTime = endTime;
        }
      }

      return lastEndTime;
    } // Makes sure, that after pausing the time doesn't jump

  }, {
    key: "updateTime",
    value: function updateTime() {
      if (!this.active()) {
        this._lastSourceTime = this._timeSource();
      }

      return this;
    }
  }, {
    key: "play",
    value: function play() {
      // Now make sure we are not paused and continue the animation
      this._paused = false;
      return this.updateTime()._continue();
    }
  }, {
    key: "pause",
    value: function pause() {
      this._paused = true;
      return this._continue();
    }
  }, {
    key: "stop",
    value: function stop() {
      // Go to start and pause
      this.time(0);
      return this.pause();
    }
  }, {
    key: "finish",
    value: function finish() {
      // Go to end and pause
      this.time(this.getEndTimeOfTimeline() + 1);
      return this.pause();
    }
  }, {
    key: "speed",
    value: function speed(_speed) {
      if (_speed == null) return this._speed;
      this._speed = _speed;
      return this;
    }
  }, {
    key: "reverse",
    value: function reverse(yes) {
      var currentSpeed = this.speed();
      if (yes == null) return this.speed(-currentSpeed);
      var positive = Math.abs(currentSpeed);
      return this.speed(yes ? positive : -positive);
    }
  }, {
    key: "seek",
    value: function seek(dt) {
      return this.time(this._time + dt);
    }
  }, {
    key: "time",
    value: function time(_time) {
      if (_time == null) return this._time;
      this._time = _time;
      return this._continue(true);
    }
  }, {
    key: "persist",
    value: function persist(dtOrForever) {
      if (dtOrForever == null) return this._persist;
      this._persist = dtOrForever;
      return this;
    }
  }, {
    key: "source",
    value: function source(fn) {
      if (fn == null) return this._timeSource;
      this._timeSource = fn;
      return this;
    }
  }, {
    key: "_stepFn",
    value: function _stepFn() {
      var immediateStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // Get the time delta from the last time and update the time
      var time = this._timeSource();

      var dtSource = time - this._lastSourceTime;
      if (immediateStep) dtSource = 0;
      var dtTime = this._speed * dtSource + (this._time - this._lastStepTime);
      this._lastSourceTime = time; // Only update the time if we use the timeSource.
      // Otherwise use the current time

      if (!immediateStep) {
        // Update the time
        this._time += dtTime;
        this._time = this._time < 0 ? 0 : this._time;
      }

      this._lastStepTime = this._time;
      this.fire('time', this._time); // This is for the case that the timeline was seeked so that the time
      // is now before the startTime of the runner. Thats why we need to set
      // the runner to position 0
      // FIXME:
      // However, reseting in insertion order leads to bugs. Considering the case,
      // where 2 runners change the same attriute but in different times,
      // reseting both of them will lead to the case where the later defined
      // runner always wins the reset even if the other runner started earlier
      // and therefore should win the attribute battle
      // this can be solved by reseting them backwards

      for (var k = this._runners.length; k--;) {
        // Get and run the current runner and ignore it if its inactive
        var runnerInfo = this._runners[k];
        var runner = runnerInfo.runner; // Make sure that we give the actual difference
        // between runner start time and now

        var dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet
        // and try to reset it

        if (dtToStart <= 0) {
          runner.reset();
        }
      } // Run all of the runners directly


      var runnersLeft = false;

      for (var i = 0, len = this._runners.length; i < len; i++) {
        // Get and run the current runner and ignore it if its inactive
        var _runnerInfo2 = this._runners[i];
        var _runner = _runnerInfo2.runner;
        var dt = dtTime; // Make sure that we give the actual difference
        // between runner start time and now

        var _dtToStart = this._time - _runnerInfo2.start; // Dont run runner if not started yet


        if (_dtToStart <= 0) {
          runnersLeft = true;
          continue;
        } else if (_dtToStart < dt) {
          // Adjust dt to make sure that animation is on point
          dt = _dtToStart;
        }

        if (!_runner.active()) continue; // If this runner is still going, signal that we need another animation
        // frame, otherwise, remove the completed runner

        var finished = _runner.step(dt).done;

        if (!finished) {
          runnersLeft = true; // continue
        } else if (_runnerInfo2.persist !== true) {
          // runner is finished. And runner might get removed
          var endTime = _runner.duration() - _runner.time() + this._time;

          if (endTime + _runnerInfo2.persist < this._time) {
            // Delete runner and correct index
            _runner.unschedule();

            --i;
            --len;
          }
        }
      } // Basically: we continue when there are runners right from us in time
      // when -->, and when runners are left from us when <--


      if (runnersLeft && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0) {
        this._continue();
      } else {
        this.pause();
        this.fire('finished');
      }

      return this;
    } // Checks if we are running and continues the animation

  }, {
    key: "_continue",
    value: function _continue() {
      var immediateStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      Animator.cancelFrame(this._nextFrame);
      this._nextFrame = null;
      if (immediateStep) return this._stepImmediate();
      if (this._paused) return this;
      this._nextFrame = Animator.frame(this._step);
      return this;
    }
  }, {
    key: "active",
    value: function active() {
      return !!this._nextFrame;
    }
  }]);

  return Timeline;
}(EventTarget);
registerMethods({
  Element: {
    timeline: function timeline(_timeline) {
      if (_timeline == null) {
        this._timeline = this._timeline || new Timeline();
        return this._timeline;
      } else {
        this._timeline = _timeline;
        return this;
      }
    }
  }
});

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Runner =
/*#__PURE__*/
function (_EventTarget) {
  _inherits(Runner, _EventTarget);

  function Runner(options) {
    var _this;

    _classCallCheck(this, Runner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Runner).call(this)); // Store a unique id on the runner, so that we can identify it later

    _this.id = Runner.id++; // Ensure a default value

    options = options == null ? timeline.duration : options; // Ensure that we get a controller

    options = typeof options === 'function' ? new Controller(options) : options; // Declare all of the variables

    _this._element = null;
    _this._timeline = null;
    _this.done = false;
    _this._queue = []; // Work out the stepper and the duration

    _this._duration = typeof options === 'number' && options;
    _this._isDeclarative = options instanceof Controller;
    _this._stepper = _this._isDeclarative ? options : new Ease(); // We copy the current values from the timeline because they can change

    _this._history = {}; // Store the state of the runner

    _this.enabled = true;
    _this._time = 0;
    _this._lastTime = 0; // At creation, the runner is in reseted state

    _this._reseted = true; // Save transforms applied to this runner

    _this.transforms = new Matrix();
    _this.transformId = 1; // Looping variables

    _this._haveReversed = false;
    _this._reverse = false;
    _this._loopsDone = 0;
    _this._swing = false;
    _this._wait = 0;
    _this._times = 1;
    _this._frameId = null; // Stores how long a runner is stored after beeing done

    _this._persist = _this._isDeclarative ? true : null;
    return _this;
  }
  /*
  Runner Definitions
  ==================
  These methods help us define the runtime behaviour of the Runner or they
  help us make new runners from the current runner
  */


  _createClass(Runner, [{
    key: "element",
    value: function element(_element) {
      if (_element == null) return this._element;
      this._element = _element;

      _element._prepareRunner();

      return this;
    }
  }, {
    key: "timeline",
    value: function timeline(_timeline) {
      // check explicitly for undefined so we can set the timeline to null
      if (typeof _timeline === 'undefined') return this._timeline;
      this._timeline = _timeline;
      return this;
    }
  }, {
    key: "animate",
    value: function animate(duration, delay, when) {
      var o = Runner.sanitise(duration, delay, when);
      var runner = new Runner(o.duration);
      if (this._timeline) runner.timeline(this._timeline);
      if (this._element) runner.element(this._element);
      return runner.loop(o).schedule(o.delay, o.when);
    }
  }, {
    key: "schedule",
    value: function schedule(timeline, delay, when) {
      // The user doesn't need to pass a timeline if we already have one
      if (!(timeline instanceof Timeline)) {
        when = delay;
        delay = timeline;
        timeline = this.timeline();
      } // If there is no timeline, yell at the user...


      if (!timeline) {
        throw Error('Runner cannot be scheduled without timeline');
      } // Schedule the runner on the timeline provided


      timeline.schedule(this, delay, when);
      return this;
    }
  }, {
    key: "unschedule",
    value: function unschedule() {
      var timeline = this.timeline();
      timeline && timeline.unschedule(this);
      return this;
    }
  }, {
    key: "loop",
    value: function loop(times, swing, wait) {
      // Deal with the user passing in an object
      if (_typeof(times) === 'object') {
        swing = times.swing;
        wait = times.wait;
        times = times.times;
      } // Sanitise the values and store them


      this._times = times || Infinity;
      this._swing = swing || false;
      this._wait = wait || 0; // Allow true to be passed

      if (this._times === true) {
        this._times = Infinity;
      }

      return this;
    }
  }, {
    key: "delay",
    value: function delay(_delay) {
      return this.animate(0, _delay);
    }
    /*
    Basic Functionality
    ===================
    These methods allow us to attach basic functions to the runner directly
    */

  }, {
    key: "queue",
    value: function queue(initFn, runFn, retargetFn, isTransform) {
      this._queue.push({
        initialiser: initFn || noop,
        runner: runFn || noop,
        retarget: retargetFn,
        isTransform: isTransform,
        initialised: false,
        finished: false
      });

      var timeline = this.timeline();
      timeline && this.timeline()._continue();
      return this;
    }
  }, {
    key: "during",
    value: function during(fn) {
      return this.queue(null, fn);
    }
  }, {
    key: "after",
    value: function after(fn) {
      return this.on('finished', fn);
    }
    /*
    Runner animation methods
    ========================
    Control how the animation plays
    */

  }, {
    key: "time",
    value: function time(_time) {
      if (_time == null) {
        return this._time;
      }

      var dt = _time - this._time;
      this.step(dt);
      return this;
    }
  }, {
    key: "duration",
    value: function duration() {
      return this._times * (this._wait + this._duration) - this._wait;
    }
  }, {
    key: "loops",
    value: function loops(p) {
      var loopDuration = this._duration + this._wait;

      if (p == null) {
        var loopsDone = Math.floor(this._time / loopDuration);
        var relativeTime = this._time - loopsDone * loopDuration;
        var position = relativeTime / this._duration;
        return Math.min(loopsDone + position, this._times);
      }

      var whole = Math.floor(p);
      var partial = p % 1;
      var time = loopDuration * whole + this._duration * partial;
      return this.time(time);
    }
  }, {
    key: "persist",
    value: function persist(dtOrForever) {
      if (dtOrForever == null) return this._persist;
      this._persist = dtOrForever;
      return this;
    }
  }, {
    key: "position",
    value: function position(p) {
      // Get all of the variables we need
      var x = this._time;
      var d = this._duration;
      var w = this._wait;
      var t = this._times;
      var s = this._swing;
      var r = this._reverse;
      var position;

      if (p == null) {
        /*
        This function converts a time to a position in the range [0, 1]
        The full explanation can be found in this desmos demonstration
          https://www.desmos.com/calculator/u4fbavgche
        The logic is slightly simplified here because we can use booleans
        */
        // Figure out the value without thinking about the start or end time
        var f = function f(x) {
          var swinging = s * Math.floor(x % (2 * (w + d)) / (w + d));
          var backwards = swinging && !r || !swinging && r;
          var uncliped = Math.pow(-1, backwards) * (x % (w + d)) / d + backwards;
          var clipped = Math.max(Math.min(uncliped, 1), 0);
          return clipped;
        }; // Figure out the value by incorporating the start time


        var endTime = t * (w + d) - w;
        position = x <= 0 ? Math.round(f(1e-5)) : x < endTime ? f(x) : Math.round(f(endTime - 1e-5));
        return position;
      } // Work out the loops done and add the position to the loops done


      var loopsDone = Math.floor(this.loops());
      var swingForward = s && loopsDone % 2 === 0;
      var forwards = swingForward && !r || r && swingForward;
      position = loopsDone + (forwards ? p : 1 - p);
      return this.loops(position);
    }
  }, {
    key: "progress",
    value: function progress(p) {
      if (p == null) {
        return Math.min(1, this._time / this.duration());
      }

      return this.time(p * this.duration());
    }
  }, {
    key: "step",
    value: function step(dt) {
      // If we are inactive, this stepper just gets skipped
      if (!this.enabled) return this; // Update the time and get the new position

      dt = dt == null ? 16 : dt;
      this._time += dt;
      var position = this.position(); // Figure out if we need to run the stepper in this frame

      var running = this._lastPosition !== position && this._time >= 0;
      this._lastPosition = position; // Figure out if we just started

      var duration = this.duration();
      var justStarted = this._lastTime <= 0 && this._time > 0;
      var justFinished = this._lastTime < duration && this._time >= duration;
      this._lastTime = this._time;

      if (justStarted) {
        this.fire('start', this);
      } // Work out if the runner is finished set the done flag here so animations
      // know, that they are running in the last step (this is good for
      // transformations which can be merged)


      var declarative = this._isDeclarative;
      this.done = !declarative && !justFinished && this._time >= duration; // Runner is running. So its not in reseted state anymore

      this._reseted = false; // Call initialise and the run function

      if (running || declarative) {
        this._initialise(running); // clear the transforms on this runner so they dont get added again and again


        this.transforms = new Matrix();

        var converged = this._run(declarative ? dt : position);

        this.fire('step', this);
      } // correct the done flag here
      // declaritive animations itself know when they converged


      this.done = this.done || converged && declarative;

      if (justFinished) {
        this.fire('finished', this);
      }

      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this._reseted) return this;
      this.time(0);
      this._reseted = true;
      return this;
    }
  }, {
    key: "finish",
    value: function finish() {
      return this.step(Infinity);
    }
  }, {
    key: "reverse",
    value: function reverse(_reverse) {
      this._reverse = _reverse == null ? !this._reverse : _reverse;
      return this;
    }
  }, {
    key: "ease",
    value: function ease(fn) {
      this._stepper = new Ease(fn);
      return this;
    }
  }, {
    key: "active",
    value: function active(enabled) {
      if (enabled == null) return this.enabled;
      this.enabled = enabled;
      return this;
    }
    /*
    Private Methods
    ===============
    Methods that shouldn't be used externally
    */
    // Save a morpher to the morpher list so that we can retarget it later

  }, {
    key: "_rememberMorpher",
    value: function _rememberMorpher(method, morpher) {
      this._history[method] = {
        morpher: morpher,
        caller: this._queue[this._queue.length - 1]
      }; // We have to resume the timeline in case a controller
      // is already done without beeing ever run
      // This can happen when e.g. this is done:
      //    anim = el.animate(new SVG.Spring)
      // and later
      //    anim.move(...)

      if (this._isDeclarative) {
        var timeline = this.timeline();
        timeline && timeline.play();
      }
    } // Try to set the target for a morpher if the morpher exists, otherwise
    // do nothing and return false

  }, {
    key: "_tryRetarget",
    value: function _tryRetarget(method, target, extra) {
      if (this._history[method]) {
        // if the last method wasnt even initialised, throw it away
        if (!this._history[method].caller.initialised) {
          var index = this._queue.indexOf(this._history[method].caller);

          this._queue.splice(index, 1);

          return false;
        } // for the case of transformations, we use the special retarget function
        // which has access to the outer scope


        if (this._history[method].caller.retarget) {
          this._history[method].caller.retarget(target, extra); // for everything else a simple morpher change is sufficient

        } else {
          this._history[method].morpher.to(target);
        }

        this._history[method].caller.finished = false;
        var timeline = this.timeline();
        timeline && timeline.play();
        return true;
      }

      return false;
    } // Run each initialise function in the runner if required

  }, {
    key: "_initialise",
    value: function _initialise(running) {
      // If we aren't running, we shouldn't initialise when not declarative
      if (!running && !this._isDeclarative) return; // Loop through all of the initialisers

      for (var i = 0, len = this._queue.length; i < len; ++i) {
        // Get the current initialiser
        var current = this._queue[i]; // Determine whether we need to initialise

        var needsIt = this._isDeclarative || !current.initialised && running;
        running = !current.finished; // Call the initialiser if we need to

        if (needsIt && running) {
          current.initialiser.call(this);
          current.initialised = true;
        }
      }
    } // Run each run function for the position or dt given

  }, {
    key: "_run",
    value: function _run(positionOrDt) {
      // Run all of the _queue directly
      var allfinished = true;

      for (var i = 0, len = this._queue.length; i < len; ++i) {
        // Get the current function to run
        var current = this._queue[i]; // Run the function if its not finished, we keep track of the finished
        // flag for the sake of declarative _queue

        var converged = current.runner.call(this, positionOrDt);
        current.finished = current.finished || converged === true;
        allfinished = allfinished && current.finished;
      } // We report when all of the constructors are finished


      return allfinished;
    }
  }, {
    key: "addTransform",
    value: function addTransform(transform, index) {
      this.transforms.lmultiplyO(transform);
      return this;
    }
  }, {
    key: "clearTransform",
    value: function clearTransform() {
      this.transforms = new Matrix();
      return this;
    } // TODO: Keep track of all transformations so that deletion is faster

  }, {
    key: "clearTransformsFromQueue",
    value: function clearTransformsFromQueue() {
      if (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) {
        this._queue = this._queue.filter(function (item) {
          return !item.isTransform;
        });
      }
    }
  }], [{
    key: "sanitise",
    value: function sanitise(duration, delay, when) {
      // Initialise the default parameters
      var times = 1;
      var swing = false;
      var wait = 0;
      duration = duration || timeline.duration;
      delay = delay || timeline.delay;
      when = when || 'last'; // If we have an object, unpack the values

      if (_typeof(duration) === 'object' && !(duration instanceof Stepper)) {
        delay = duration.delay || delay;
        when = duration.when || when;
        swing = duration.swing || swing;
        times = duration.times || times;
        wait = duration.wait || wait;
        duration = duration.duration || timeline.duration;
      }

      return {
        duration: duration,
        delay: delay,
        swing: swing,
        times: times,
        wait: wait,
        when: when
      };
    }
  }]);

  return Runner;
}(EventTarget);
Runner.id = 0;

var FakeRunner =
/*#__PURE__*/
function () {
  function FakeRunner() {
    var transforms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Matrix();
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    var done = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, FakeRunner);

    this.transforms = transforms;
    this.id = id;
    this.done = done;
  }

  _createClass(FakeRunner, [{
    key: "clearTransformsFromQueue",
    value: function clearTransformsFromQueue() {}
  }]);

  return FakeRunner;
}();

extend([Runner, FakeRunner], {
  mergeWith: function mergeWith(runner) {
    return new FakeRunner(runner.transforms.lmultiply(this.transforms), runner.id);
  }
}); // FakeRunner.emptyRunner = new FakeRunner()

var lmultiply = function lmultiply(last, curr) {
  return last.lmultiplyO(curr);
};

var getRunnerTransform = function getRunnerTransform(runner) {
  return runner.transforms;
};

function mergeTransforms() {
  // Find the matrix to apply to the element and apply it
  var runners = this._transformationRunners.runners;
  var netTransform = runners.map(getRunnerTransform).reduce(lmultiply, new Matrix());
  this.transform(netTransform);

  this._transformationRunners.merge();

  if (this._transformationRunners.length() === 1) {
    this._frameId = null;
  }
}

var RunnerArray =
/*#__PURE__*/
function () {
  function RunnerArray() {
    _classCallCheck(this, RunnerArray);

    this.runners = [];
    this.ids = [];
  }

  _createClass(RunnerArray, [{
    key: "add",
    value: function add(runner) {
      if (this.runners.includes(runner)) return;
      var id = runner.id + 1;
      this.runners.push(runner);
      this.ids.push(id);
      return this;
    }
  }, {
    key: "getByID",
    value: function getByID(id) {
      return this.runners[this.ids.indexOf(id + 1)];
    }
  }, {
    key: "remove",
    value: function remove(id) {
      var index = this.ids.indexOf(id + 1);
      this.ids.splice(index, 1);
      this.runners.splice(index, 1);
      return this;
    }
  }, {
    key: "merge",
    value: function merge() {
      var _this2 = this;

      var lastRunner = null;
      this.runners.forEach(function (runner, i) {
        var condition = lastRunner && runner.done && lastRunner.done // don't merge runner when persisted on timeline
        && (!runner._timeline || !runner._timeline._runnerIds.includes(runner.id)) && (!lastRunner._timeline || !lastRunner._timeline._runnerIds.includes(lastRunner.id));

        if (condition) {
          // the +1 happens in the function
          _this2.remove(runner.id);

          _this2.edit(lastRunner.id, runner.mergeWith(lastRunner));
        }

        lastRunner = runner;
      });
      return this;
    }
  }, {
    key: "edit",
    value: function edit(id, newRunner) {
      var index = this.ids.indexOf(id + 1);
      this.ids.splice(index, 1, id + 1);
      this.runners.splice(index, 1, newRunner);
      return this;
    }
  }, {
    key: "length",
    value: function length() {
      return this.ids.length;
    }
  }, {
    key: "clearBefore",
    value: function clearBefore(id) {
      var deleteCnt = this.ids.indexOf(id + 1) || 1;
      this.ids.splice(0, deleteCnt, 0);
      this.runners.splice(0, deleteCnt, new FakeRunner()).forEach(function (r) {
        return r.clearTransformsFromQueue();
      });
      return this;
    }
  }]);

  return RunnerArray;
}();

registerMethods({
  Element: {
    animate: function animate(duration, delay, when) {
      var o = Runner.sanitise(duration, delay, when);
      var timeline = this.timeline();
      return new Runner(o.duration).loop(o).element(this).timeline(timeline.play()).schedule(o.delay, o.when);
    },
    delay: function delay(by, when) {
      return this.animate(0, by, when);
    },
    // this function searches for all runners on the element and deletes the ones
    // which run before the current one. This is because absolute transformations
    // overwfrite anything anyway so there is no need to waste time computing
    // other runners
    _clearTransformRunnersBefore: function _clearTransformRunnersBefore(currentRunner) {
      this._transformationRunners.clearBefore(currentRunner.id);
    },
    _currentTransform: function _currentTransform(current) {
      return this._transformationRunners.runners // we need the equal sign here to make sure, that also transformations
      // on the same runner which execute before the current transformation are
      // taken into account
      .filter(function (runner) {
        return runner.id <= current.id;
      }).map(getRunnerTransform).reduce(lmultiply, new Matrix());
    },
    _addRunner: function _addRunner(runner) {
      this._transformationRunners.add(runner); // Make sure that the runner merge is executed at the very end of
      // all Animator functions. Thats why we use immediate here to execute
      // the merge right after all frames are run


      Animator.cancelImmediate(this._frameId);
      this._frameId = Animator.immediate(mergeTransforms.bind(this));
    },
    _prepareRunner: function _prepareRunner() {
      if (this._frameId == null) {
        this._transformationRunners = new RunnerArray().add(new FakeRunner(new Matrix(this)));
      }
    }
  }
});
extend(Runner, {
  attr: function attr(a, v) {
    return this.styleAttr('attr', a, v);
  },
  // Add animatable styles
  css: function css(s, v) {
    return this.styleAttr('css', s, v);
  },
  styleAttr: function styleAttr(type, name, val) {
    // apply attributes individually
    if (_typeof(name) === 'object') {
      for (var key in name) {
        this.styleAttr(type, key, name[key]);
      }

      return this;
    }

    var morpher = new Morphable(this._stepper).to(val);
    this.queue(function () {
      morpher = morpher.from(this.element()[type](name));
    }, function (pos) {
      this.element()[type](name, morpher.at(pos));
      return morpher.done();
    });
    return this;
  },
  zoom: function zoom(level, point) {
    if (this._tryRetarget('zoom', to, point)) return this;
    var morpher = new Morphable(this._stepper).to(new SVGNumber(level));
    this.queue(function () {
      morpher = morpher.from(this.element().zoom());
    }, function (pos) {
      this.element().zoom(morpher.at(pos), point);
      return morpher.done();
    }, function (newLevel, newPoint) {
      point = newPoint;
      morpher.to(newLevel);
    });

    this._rememberMorpher('zoom', morpher);

    return this;
  },

  /**
   ** absolute transformations
   **/
  //
  // M v -----|-----(D M v = F v)------|----->  T v
  //
  // 1. define the final state (T) and decompose it (once)
  //    t = [tx, ty, the, lam, sy, sx]
  // 2. on every frame: pull the current state of all previous transforms
  //    (M - m can change)
  //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
  // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
  //   - Note F(0) = M
  //   - Note F(1) = T
  // 4. Now you get the delta matrix as a result: D = F * inv(M)
  transform: function transform(transforms, relative, affine) {
    // If we have a declarative function, we should retarget it if possible
    relative = transforms.relative || relative;

    if (this._isDeclarative && !relative && this._tryRetarget('transform', transforms)) {
      return this;
    } // Parse the parameters


    var isMatrix = Matrix.isMatrixLike(transforms);
    affine = transforms.affine != null ? transforms.affine : affine != null ? affine : !isMatrix; // Create a morepher and set its type

    var morpher = new Morphable(this._stepper).type(affine ? TransformBag : Matrix);
    var origin;
    var element;
    var current;
    var currentAngle;
    var startTransform;

    function setup() {
      // make sure element and origin is defined
      element = element || this.element();
      origin = origin || getOrigin(transforms, element);
      startTransform = new Matrix(relative ? undefined : element); // add the runner to the element so it can merge transformations

      element._addRunner(this); // Deactivate all transforms that have run so far if we are absolute


      if (!relative) {
        element._clearTransformRunnersBefore(this);
      }
    }

    function run(pos) {
      // clear all other transforms before this in case something is saved
      // on this runner. We are absolute. We dont need these!
      if (!relative) this.clearTransform();

      var _transform = new Point(origin).transform(element._currentTransform(this)),
          x = _transform.x,
          y = _transform.y;

      var target = new Matrix(_objectSpread$1({}, transforms, {
        origin: [x, y]
      }));
      var start = this._isDeclarative && current ? current : startTransform;

      if (affine) {
        target = target.decompose(x, y);
        start = start.decompose(x, y); // Get the current and target angle as it was set

        var rTarget = target.rotate;
        var rCurrent = start.rotate; // Figure out the shortest path to rotate directly

        var possibilities = [rTarget - 360, rTarget, rTarget + 360];
        var distances = possibilities.map(function (a) {
          return Math.abs(a - rCurrent);
        });
        var shortest = Math.min.apply(Math, _toConsumableArray(distances));
        var index = distances.indexOf(shortest);
        target.rotate = possibilities[index];
      }

      if (relative) {
        // we have to be careful here not to overwrite the rotation
        // with the rotate method of Matrix
        if (!isMatrix) {
          target.rotate = transforms.rotate || 0;
        }

        if (this._isDeclarative && currentAngle) {
          start.rotate = currentAngle;
        }
      }

      morpher.from(start);
      morpher.to(target);
      var affineParameters = morpher.at(pos);
      currentAngle = affineParameters.rotate;
      current = new Matrix(affineParameters);
      this.addTransform(current);

      element._addRunner(this);

      return morpher.done();
    }

    function retarget(newTransforms) {
      // only get a new origin if it changed since the last call
      if ((newTransforms.origin || 'center').toString() !== (transforms.origin || 'center').toString()) {
        origin = getOrigin(transforms, element);
      } // overwrite the old transformations with the new ones


      transforms = _objectSpread$1({}, newTransforms, {
        origin: origin
      });
    }

    this.queue(setup, run, retarget, true);
    this._isDeclarative && this._rememberMorpher('transform', morpher);
    return this;
  },
  // Animatable x-axis
  x: function x(_x, relative) {
    return this._queueNumber('x', _x);
  },
  // Animatable y-axis
  y: function y(_y) {
    return this._queueNumber('y', _y);
  },
  dx: function dx() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return this._queueNumberDelta('x', x);
  },
  dy: function dy() {
    var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return this._queueNumberDelta('y', y);
  },
  dmove: function dmove(x, y) {
    return this.dx(x).dy(y);
  },
  _queueNumberDelta: function _queueNumberDelta(method, to) {
    to = new SVGNumber(to); // Try to change the target if we have this method already registerd

    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    var morpher = new Morphable(this._stepper).to(to);
    var from = null;
    this.queue(function () {
      from = this.element()[method]();
      morpher.from(from);
      morpher.to(from + to);
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }, function (newTo) {
      morpher.to(from + new SVGNumber(newTo));
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },
  _queueObject: function _queueObject(method, to) {
    // Try to change the target if we have this method already registerd
    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    var morpher = new Morphable(this._stepper).to(to);
    this.queue(function () {
      morpher.from(this.element()[method]());
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },
  _queueNumber: function _queueNumber(method, value) {
    return this._queueObject(method, new SVGNumber(value));
  },
  // Animatable center x-axis
  cx: function cx(x) {
    return this._queueNumber('cx', x);
  },
  // Animatable center y-axis
  cy: function cy(y) {
    return this._queueNumber('cy', y);
  },
  // Add animatable move
  move: function move(x, y) {
    return this.x(x).y(y);
  },
  // Add animatable center
  center: function center(x, y) {
    return this.cx(x).cy(y);
  },
  // Add animatable size
  size: function size(width, height) {
    // animate bbox based size for all other elements
    var box;

    if (!width || !height) {
      box = this._element.bbox();
    }

    if (!width) {
      width = box.width / box.height * height;
    }

    if (!height) {
      height = box.height / box.width * width;
    }

    return this.width(width).height(height);
  },
  // Add animatable width
  width: function width(_width) {
    return this._queueNumber('width', _width);
  },
  // Add animatable height
  height: function height(_height) {
    return this._queueNumber('height', _height);
  },
  // Add animatable plot
  plot: function plot(a, b, c, d) {
    // Lines can be plotted with 4 arguments
    if (arguments.length === 4) {
      return this.plot([a, b, c, d]);
    }

    if (this._tryRetarget('plot', a)) return this;
    var morpher = new Morphable(this._stepper).type(this._element.MorphArray).to(a);
    this.queue(function () {
      morpher.from(this._element.array());
    }, function (pos) {
      this._element.plot(morpher.at(pos));

      return morpher.done();
    });

    this._rememberMorpher('plot', morpher);

    return this;
  },
  // Add leading method
  leading: function leading(value) {
    return this._queueNumber('leading', value);
  },
  // Add animatable viewbox
  viewbox: function viewbox(x, y, width, height) {
    return this._queueObject('viewbox', new Box(x, y, width, height));
  },
  update: function update(o) {
    if (_typeof(o) !== 'object') {
      return this.update({
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      });
    }

    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', o.offset);
    return this;
  }
});
extend(Runner, {
  rx: rx,
  ry: ry,
  from: from,
  to: to
});
register(Runner, 'Runner');

var Svg =
/*#__PURE__*/
function (_Container) {
  _inherits(Svg, _Container);

  function Svg(node) {
    var _this;

    _classCallCheck(this, Svg);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Svg).call(this, nodeOrNew('svg', node), node));

    _this.namespace();

    return _this;
  }

  _createClass(Svg, [{
    key: "isRoot",
    value: function isRoot() {
      return !this.node.parentNode || !(this.node.parentNode instanceof globals.window.SVGElement) || this.node.parentNode.nodeName === '#document';
    } // Check if this is a root svg
    // If not, call docs from this element

  }, {
    key: "root",
    value: function root() {
      if (this.isRoot()) return this;
      return _get(_getPrototypeOf(Svg.prototype), "root", this).call(this);
    } // Add namespaces

  }, {
    key: "namespace",
    value: function namespace() {
      if (!this.isRoot()) return this.root().namespace();
      return this.attr({
        xmlns: ns,
        version: '1.1'
      }).attr('xmlns:xlink', xlink, xmlns).attr('xmlns:svgjs', svgjs, xmlns);
    } // Creates and returns defs element

  }, {
    key: "defs",
    value: function defs() {
      if (!this.isRoot()) return this.root().defs();
      return adopt(this.node.querySelector('defs')) || this.put(new Defs());
    } // custom parent method

  }, {
    key: "parent",
    value: function parent(type) {
      if (this.isRoot()) {
        return this.node.parentNode.nodeName === '#document' ? null : adopt(this.node.parentNode);
      }

      return _get(_getPrototypeOf(Svg.prototype), "parent", this).call(this, type);
    }
  }, {
    key: "clear",
    value: function clear() {
      // remove children
      while (this.node.hasChildNodes()) {
        this.node.removeChild(this.node.lastChild);
      } // remove defs reference


      delete this._defs;
      return this;
    }
  }]);

  return Svg;
}(Container);
registerMethods({
  Container: {
    // Create nested svg document
    nested: wrapWithAttrCheck(function () {
      return this.put(new Svg());
    })
  }
});
register(Svg, 'Svg', true);

var _Symbol =
/*#__PURE__*/
function (_Container) {
  _inherits(_Symbol, _Container);

  // Initialize node
  function _Symbol(node) {
    _classCallCheck(this, _Symbol);

    return _possibleConstructorReturn(this, _getPrototypeOf(_Symbol).call(this, nodeOrNew('symbol', node), node));
  }

  return _Symbol;
}(Container);
registerMethods({
  Container: {
    symbol: wrapWithAttrCheck(function () {
      return this.put(new _Symbol());
    })
  }
});
register(_Symbol, 'Symbol');

function plain(text) {
  // clear if build mode is disabled
  if (this._build === false) {
    this.clear();
  } // create text node


  this.node.appendChild(globals.document.createTextNode(text));
  return this;
} // Get length of text element

function length() {
  return this.node.getComputedTextLength();
}

var textable = ({
	__proto__: null,
	plain: plain,
	length: length
});

var Text =
/*#__PURE__*/
function (_Shape) {
  _inherits(Text, _Shape);

  // Initialize node
  function Text(node) {
    var _this;

    _classCallCheck(this, Text);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, nodeOrNew('text', node), node));
    _this.dom.leading = new SVGNumber(1.3); // store leading value for rebuilding

    _this._rebuild = true; // enable automatic updating of dy values

    _this._build = false; // disable build mode for adding multiple lines

    return _this;
  } // Move over x-axis
  // Text is moved its bounding box
  // text-anchor does NOT matter


  _createClass(Text, [{
    key: "x",
    value: function x(_x) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();

      if (_x == null) {
        return box.x;
      }

      return this.attr('x', this.attr('x') + _x - box.x);
    } // Move over y-axis

  }, {
    key: "y",
    value: function y(_y) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();

      if (_y == null) {
        return box.y;
      }

      return this.attr('y', this.attr('y') + _y - box.y);
    }
  }, {
    key: "move",
    value: function move(x, y) {
      var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
      return this.x(x, box).y(y, box);
    } // Move center over x-axis

  }, {
    key: "cx",
    value: function cx(x) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();

      if (x == null) {
        return box.cx;
      }

      return this.attr('x', this.attr('x') + x - box.cx);
    } // Move center over y-axis

  }, {
    key: "cy",
    value: function cy(y) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();

      if (y == null) {
        return box.cy;
      }

      return this.attr('y', this.attr('y') + y - box.cy);
    }
  }, {
    key: "center",
    value: function center(x, y) {
      var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
      return this.cx(x, box).cy(y, box);
    } // Set the text content

  }, {
    key: "text",
    value: function text(_text) {
      // act as getter
      if (_text === undefined) {
        var children = this.node.childNodes;
        var firstLine = 0;
        _text = '';

        for (var i = 0, len = children.length; i < len; ++i) {
          // skip textPaths - they are no lines
          if (children[i].nodeName === 'textPath') {
            if (i === 0) firstLine = 1;
            continue;
          } // add newline if its not the first child and newLined is set to true


          if (i !== firstLine && children[i].nodeType !== 3 && adopt(children[i]).dom.newLined === true) {
            _text += '\n';
          } // add content of this node


          _text += children[i].textContent;
        }

        return _text;
      } // remove existing content


      this.clear().build(true);

      if (typeof _text === 'function') {
        // call block
        _text.call(this, this);
      } else {
        // store text and make sure text is not blank
        _text = _text.split('\n'); // build new lines

        for (var j = 0, jl = _text.length; j < jl; j++) {
          this.tspan(_text[j]).newLine();
        }
      } // disable build mode and rebuild lines


      return this.build(false).rebuild();
    } // Set / get leading

  }, {
    key: "leading",
    value: function leading(value) {
      // act as getter
      if (value == null) {
        return this.dom.leading;
      } // act as setter


      this.dom.leading = new SVGNumber(value);
      return this.rebuild();
    } // Rebuild appearance type

  }, {
    key: "rebuild",
    value: function rebuild(_rebuild) {
      // store new rebuild flag if given
      if (typeof _rebuild === 'boolean') {
        this._rebuild = _rebuild;
      } // define position of all lines


      if (this._rebuild) {
        var self = this;
        var blankLineOffset = 0;
        var leading = this.dom.leading;
        this.each(function () {
          var fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
          var dy = leading * new SVGNumber(fontSize);

          if (this.dom.newLined) {
            this.attr('x', self.attr('x'));

            if (this.text() === '\n') {
              blankLineOffset += dy;
            } else {
              this.attr('dy', dy + blankLineOffset);
              blankLineOffset = 0;
            }
          }
        });
        this.fire('rebuild');
      }

      return this;
    } // Enable / disable build mode

  }, {
    key: "build",
    value: function build(_build) {
      this._build = !!_build;
      return this;
    } // overwrite method from parent to set data properly

  }, {
    key: "setData",
    value: function setData(o) {
      this.dom = o;
      this.dom.leading = new SVGNumber(o.leading || 1.3);
      return this;
    }
  }]);

  return Text;
}(Shape);
extend(Text, textable);
registerMethods({
  Container: {
    // Create text element
    text: wrapWithAttrCheck(function (text) {
      return this.put(new Text()).text(text);
    }),
    // Create plain text element
    plain: wrapWithAttrCheck(function (text) {
      return this.put(new Text()).plain(text);
    })
  }
});
register(Text, 'Text');

var Tspan =
/*#__PURE__*/
function (_Text) {
  _inherits(Tspan, _Text);

  // Initialize node
  function Tspan(node) {
    _classCallCheck(this, Tspan);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tspan).call(this, nodeOrNew('tspan', node), node));
  } // Set text content


  _createClass(Tspan, [{
    key: "text",
    value: function text(_text) {
      if (_text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '');
      typeof _text === 'function' ? _text.call(this, this) : this.plain(_text);
      return this;
    } // Shortcut dx

  }, {
    key: "dx",
    value: function dx(_dx) {
      return this.attr('dx', _dx);
    } // Shortcut dy

  }, {
    key: "dy",
    value: function dy(_dy) {
      return this.attr('dy', _dy);
    }
  }, {
    key: "x",
    value: function x(_x) {
      return this.attr('x', _x);
    }
  }, {
    key: "y",
    value: function y(_y) {
      return this.attr('x', _y);
    }
  }, {
    key: "move",
    value: function move(x, y) {
      return this.x(x).y(y);
    } // Create new line

  }, {
    key: "newLine",
    value: function newLine() {
      // fetch text parent
      var t = this.parent(Text); // mark new line

      this.dom.newLined = true;
      var fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
      var dy = t.dom.leading * new SVGNumber(fontSize); // apply new position

      return this.dy(dy).attr('x', t.x());
    }
  }]);

  return Tspan;
}(Text);
extend(Tspan, textable);
registerMethods({
  Tspan: {
    tspan: wrapWithAttrCheck(function (text) {
      var tspan = new Tspan(); // clear if build mode is disabled

      if (!this._build) {
        this.clear();
      } // add new tspan


      this.node.appendChild(tspan.node);
      return tspan.text(text);
    })
  }
});
register(Tspan, 'Tspan');

var ClipPath =
/*#__PURE__*/
function (_Container) {
  _inherits(ClipPath, _Container);

  function ClipPath(node) {
    _classCallCheck(this, ClipPath);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClipPath).call(this, nodeOrNew('clipPath', node), node));
  } // Unclip all clipped elements and remove itself


  _createClass(ClipPath, [{
    key: "remove",
    value: function remove() {
      // unclip all targets
      this.targets().forEach(function (el) {
        el.unclip();
      }); // remove clipPath from parent

      return _get(_getPrototypeOf(ClipPath.prototype), "remove", this).call(this);
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg [clip-path*="' + this.id() + '"]');
    }
  }]);

  return ClipPath;
}(Container);
registerMethods({
  Container: {
    // Create clipping element
    clip: wrapWithAttrCheck(function () {
      return this.defs().put(new ClipPath());
    })
  },
  Element: {
    // Distribute clipPath to svg element
    clipWith: function clipWith(element) {
      // use given clip or create a new one
      var clipper = element instanceof ClipPath ? element : this.parent().clip().add(element); // apply mask

      return this.attr('clip-path', 'url("#' + clipper.id() + '")');
    },
    // Unclip element
    unclip: function unclip() {
      return this.attr('clip-path', null);
    },
    clipper: function clipper() {
      return this.reference('clip-path');
    }
  }
});
register(ClipPath, 'ClipPath');

var ForeignObject =
/*#__PURE__*/
function (_Element) {
  _inherits(ForeignObject, _Element);

  function ForeignObject(node) {
    _classCallCheck(this, ForeignObject);

    return _possibleConstructorReturn(this, _getPrototypeOf(ForeignObject).call(this, nodeOrNew('foreignObject', node), node));
  }

  return ForeignObject;
}(Element);
registerMethods({
  Container: {
    foreignObject: wrapWithAttrCheck(function (width, height) {
      return this.put(new ForeignObject()).size(width, height);
    })
  }
});
register(ForeignObject, 'ForeignObject');

var G =
/*#__PURE__*/
function (_Container) {
  _inherits(G, _Container);

  function G(node) {
    _classCallCheck(this, G);

    return _possibleConstructorReturn(this, _getPrototypeOf(G).call(this, nodeOrNew('g', node), node));
  }

  _createClass(G, [{
    key: "x",
    value: function x(_x) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
      if (_x == null) return box.x;
      return this.move(_x, box.y, box);
    }
  }, {
    key: "y",
    value: function y(_y) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
      if (_y == null) return box.y;
      return this.move(box.x, _y, box);
    }
  }, {
    key: "move",
    value: function move() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
      var dx = x - box.x;
      var dy = y - box.y;
      return this.dmove(dx, dy);
    }
  }, {
    key: "dx",
    value: function dx(_dx) {
      return this.dmove(_dx, 0);
    }
  }, {
    key: "dy",
    value: function dy(_dy) {
      return this.dmove(0, _dy);
    }
  }, {
    key: "dmove",
    value: function dmove(dx, dy) {
      this.children().forEach(function (child, i) {
        // Get the childs bbox
        var bbox = child.bbox(); // Get childs matrix

        var m = new Matrix(child); // Translate childs matrix by amount and
        // transform it back into parents space

        var matrix = m.translate(dx, dy).transform(m.inverse()); // Calculate new x and y from old box

        var p = new Point(bbox.x, bbox.y).transform(matrix); // Move element

        child.move(p.x, p.y);
      });
      return this;
    }
  }, {
    key: "width",
    value: function width(_width) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
      if (_width == null) return box.width;
      return this.size(_width, box.height, box);
    }
  }, {
    key: "height",
    value: function height(_height) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
      if (_height == null) return box.height;
      return this.size(box.width, _height, box);
    }
  }, {
    key: "size",
    value: function size(width, height) {
      var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
      var p = proportionalSize(this, width, height, box);
      var scaleX = p.width / box.width;
      var scaleY = p.height / box.height;
      this.children().forEach(function (child, i) {
        var o = new Point(box).transform(new Matrix(child).inverse());
        child.scale(scaleX, scaleY, o.x, o.y);
      });
      return this;
    }
  }]);

  return G;
}(Container);
registerMethods({
  Container: {
    // Create a group element
    group: wrapWithAttrCheck(function () {
      return this.put(new G());
    })
  }
});
register(G, 'G');

var A =
/*#__PURE__*/
function (_Container) {
  _inherits(A, _Container);

  function A(node) {
    _classCallCheck(this, A);

    return _possibleConstructorReturn(this, _getPrototypeOf(A).call(this, nodeOrNew('a', node), node));
  } // Link url


  _createClass(A, [{
    key: "to",
    value: function to(url) {
      return this.attr('href', url, xlink);
    } // Link target attribute

  }, {
    key: "target",
    value: function target(_target) {
      return this.attr('target', _target);
    }
  }]);

  return A;
}(Container);
registerMethods({
  Container: {
    // Create a hyperlink element
    link: wrapWithAttrCheck(function (url) {
      return this.put(new A()).to(url);
    })
  },
  Element: {
    // Create a hyperlink element
    linkTo: function linkTo(url) {
      var link = new A();

      if (typeof url === 'function') {
        url.call(link, link);
      } else {
        link.to(url);
      }

      return this.parent().put(link).put(this);
    }
  }
});
register(A, 'A');

var Mask =
/*#__PURE__*/
function (_Container) {
  _inherits(Mask, _Container);

  // Initialize node
  function Mask(node) {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, _getPrototypeOf(Mask).call(this, nodeOrNew('mask', node), node));
  } // Unmask all masked elements and remove itself


  _createClass(Mask, [{
    key: "remove",
    value: function remove() {
      // unmask all targets
      this.targets().forEach(function (el) {
        el.unmask();
      }); // remove mask from parent

      return _get(_getPrototypeOf(Mask.prototype), "remove", this).call(this);
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg [mask*="' + this.id() + '"]');
    }
  }]);

  return Mask;
}(Container);
registerMethods({
  Container: {
    mask: wrapWithAttrCheck(function () {
      return this.defs().put(new Mask());
    })
  },
  Element: {
    // Distribute mask to svg element
    maskWith: function maskWith(element) {
      // use given mask or create a new one
      var masker = element instanceof Mask ? element : this.parent().mask().add(element); // apply mask

      return this.attr('mask', 'url("#' + masker.id() + '")');
    },
    // Unmask element
    unmask: function unmask() {
      return this.attr('mask', null);
    },
    masker: function masker() {
      return this.reference('mask');
    }
  }
});
register(Mask, 'Mask');

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cssRule(selector, rule) {
  if (!selector) return '';
  if (!rule) return selector;
  var ret = selector + '{';

  for (var i in rule) {
    ret += unCamelCase(i) + ':' + rule[i] + ';';
  }

  ret += '}';
  return ret;
}

var Style =
/*#__PURE__*/
function (_Element) {
  _inherits(Style, _Element);

  function Style(node) {
    _classCallCheck(this, Style);

    return _possibleConstructorReturn(this, _getPrototypeOf(Style).call(this, nodeOrNew('style', node), node));
  }

  _createClass(Style, [{
    key: "addText",
    value: function addText() {
      var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.node.textContent += w;
      return this;
    }
  }, {
    key: "font",
    value: function font(name, src) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.rule('@font-face', _objectSpread$2({
        fontFamily: name,
        src: src
      }, params));
    }
  }, {
    key: "rule",
    value: function rule(selector, obj) {
      return this.addText(cssRule(selector, obj));
    }
  }]);

  return Style;
}(Element);
registerMethods('Dom', {
  style: wrapWithAttrCheck(function (selector, obj) {
    return this.put(new Style()).rule(selector, obj);
  }),
  fontface: wrapWithAttrCheck(function (name, src, params) {
    return this.put(new Style()).font(name, src, params);
  })
});
register(Style, 'Style');

var TextPath =
/*#__PURE__*/
function (_Text) {
  _inherits(TextPath, _Text);

  // Initialize node
  function TextPath(node) {
    _classCallCheck(this, TextPath);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextPath).call(this, nodeOrNew('textPath', node), node));
  } // return the array of the path track element


  _createClass(TextPath, [{
    key: "array",
    value: function array() {
      var track = this.track();
      return track ? track.array() : null;
    } // Plot path if any

  }, {
    key: "plot",
    value: function plot(d) {
      var track = this.track();
      var pathArray = null;

      if (track) {
        pathArray = track.plot(d);
      }

      return d == null ? pathArray : this;
    } // Get the path element

  }, {
    key: "track",
    value: function track() {
      return this.reference('href');
    }
  }]);

  return TextPath;
}(Text);
registerMethods({
  Container: {
    textPath: wrapWithAttrCheck(function (text, path) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = this.text(text);
      }

      return text.path(path);
    })
  },
  Text: {
    // Create path for text to run on
    path: wrapWithAttrCheck(function (track) {
      var importNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var textPath = new TextPath(); // if track is a path, reuse it

      if (!(track instanceof Path)) {
        // create path element
        track = this.defs().path(track);
      } // link textPath to path and add content


      textPath.attr('href', '#' + track, xlink); // Transplant all nodes from text to textPath

      var node;

      if (importNodes) {
        while (node = this.node.firstChild) {
          textPath.node.appendChild(node);
        }
      } // add textPath element as child node and return textPath


      return this.put(textPath);
    }),
    // Get the textPath children
    textPath: function textPath() {
      return this.findOne('textPath');
    }
  },
  Path: {
    // creates a textPath from this path
    text: wrapWithAttrCheck(function (text) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = new Text().addTo(this.parent()).text(text);
      } // Create textPath from text and path and return


      return text.path(this);
    }),
    targets: function targets() {
      return baseFind('svg [href*="' + this.id() + '"]');
    }
  }
});
TextPath.prototype.MorphArray = PathArray;
register(TextPath, 'TextPath');

var Use =
/*#__PURE__*/
function (_Shape) {
  _inherits(Use, _Shape);

  function Use(node) {
    _classCallCheck(this, Use);

    return _possibleConstructorReturn(this, _getPrototypeOf(Use).call(this, nodeOrNew('use', node), node));
  } // Use element as a reference


  _createClass(Use, [{
    key: "element",
    value: function element(_element, file) {
      // Set lined element
      return this.attr('href', (file || '') + '#' + _element, xlink);
    }
  }]);

  return Use;
}(Shape);
registerMethods({
  Container: {
    // Create a use element
    use: wrapWithAttrCheck(function (element, file) {
      return this.put(new Use()).element(element, file);
    })
  }
});
register(Use, 'Use');

/* Optional Modules */
var SVG = makeInstance;
extend([Svg, _Symbol, Image, Pattern, Marker], getMethodsFor('viewbox'));
extend([Line, Polyline, Polygon, Path], getMethodsFor('marker'));
extend(Text, getMethodsFor('Text'));
extend(Path, getMethodsFor('Path'));
extend(Defs, getMethodsFor('Defs'));
extend([Text, Tspan], getMethodsFor('Tspan'));
extend([Rect, Ellipse, Circle, Gradient], getMethodsFor('radius'));
extend(EventTarget, getMethodsFor('EventTarget'));
extend(Dom, getMethodsFor('Dom'));
extend(Element, getMethodsFor('Element'));
extend(Shape, getMethodsFor('Shape')); // extend(Element, getConstructor('Memory'))

extend(Container, getMethodsFor('Container'));
extend(Runner, getMethodsFor('Runner'));
List.extend(getMethodNames());
registerMorphableType([SVGNumber, Color, Box, Matrix, SVGArray, PointArray, PathArray]);
makeMorphable();


//# sourceMappingURL=svg.esm.js.map


/***/ }),

/***/ "../tds-shapes/src/background.ts":
/*!***************************************!*\
  !*** ../tds-shapes/src/background.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "background": () => (/* binding */ background)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");


/**
 * create <rect>
 * @param attr Type - OutlineStyle
 * @returns Rect object, <rect> node
 */
const createRect = (attr) => {
    var _a, _b;
    let outline = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect();
    outline
        .width(attr.width)
        .height(attr.height)
        .fill(attr.fill)
        .stroke(attr.stroke)
        .radius(attr.radius)
        .attr({
        x: (_a = attr.position) === null || _a === void 0 ? void 0 : _a.x,
        y: (_b = attr.position) === null || _b === void 0 ? void 0 : _b.y,
    });
    return outline;
};
/**
 * background
 */
class background extends _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect {
    constructor(attr) {
        super();
        Object.assign(this, createRect(attr));
        this.id((0,_common__WEBPACK_IMPORTED_MODULE_1__.Create_ID)()).addClass('tds-background');
    }
}


/***/ }),

/***/ "../tds-shapes/src/combobox.ts":
/*!*************************************!*\
  !*** ../tds-shapes/src/combobox.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combobox": () => (/* binding */ combobox)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "../tds-shapes/src/list.ts");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ "../tds-shapes/src/title.ts");




class combobox extends _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G {
    constructor(attr) {
        super();
        this.pdy = 0;
        this.id((0,_common__WEBPACK_IMPORTED_MODULE_1__.Create_ID)()).addClass('tds-combobox');
        !attr.position && (attr.position = { x: 0, y: 0 });
        // set title
        attr.title &&
            ((attr.title.position.x += attr.position.x),
                (attr.title.position.y += attr.position.y),
                (this.title = new _title__WEBPACK_IMPORTED_MODULE_3__.title(attr.title)));
        // set initial state
        this.state = 'openend';
        !attr.position && (attr.position = { x: 0, y: 0 });
        !attr.listAttr.position &&
            (attr.listAttr.position = { x: 0, y: 0 });
        // create list
        attr.listAttr.position.x += attr.position.x;
        attr.listAttr.position.y += attr.position.y;
        this.list = new _list__WEBPACK_IMPORTED_MODULE_2__.list(Object.assign({}, attr.listAttr));
        // set selection
        // let r = attr.selection <= 0 && 0
        this.curntSelection = this.list.items[attr.selection];
        // add list to instance
        this.add(this.list);
        // set visual state
        this.initialSet();
        // add title
        this.add(this.title);
        //? move it
        attr.autohide &&
            this.on('mouseleave', () => {
                this.state == 'openend' && this.switchState();
            });
        attr.autoshow &&
            this.on('mouseenter', () => {
                this.state == 'closed' && this.switchState();
            });
        this.list.items.forEach((el) => {
            el.on('mousedown', () => {
                this.curntSelection = el;
                this.switchState();
            });
            // for avoid stroke overlapping
            el.on('mouseenter', () => {
                this.curntSelection.front();
            });
        });
    }
    initialSet() {
        var _a;
        // move selection to top of 'combobox'
        this.curntSelection.addTo(this).front();
        // set position for 'background' 'title' and 'suppitem'
        // position of the first item
        let cs = this.curntSelection;
        let dy = cs.background.bbox().y - this.list.items[0].background.bbox().y;
        // move
        cs.background.dmove(0, -dy);
        cs.title.dmove(0, -dy);
        (_a = cs.suppItem) === null || _a === void 0 ? void 0 : _a.dmove(0, -dy);
        cs.foreground.dmove(0, -dy);
        // hide list
        this.list.hide();
        // change state
        this.state = 'closed';
        // remember dy
        this.pdy = dy;
    }
    switchState() {
        // change instance state
        if (this.state == 'closed') {
            this.state = 'openend';
        }
        else {
            this.state = 'closed';
        }
        this.checkState();
    }
    checkState() {
        // do smth for 'close' or 'open'
        if (this.state == 'closed') {
            this.hideList();
        }
        else {
            this.showList();
        }
    }
    hideList() {
        // move selection to top
        this.curntSelection.addTo(this).front();
        // store position
        let tp = this.list.items[0].background.bbox();
        let dy = this.curntSelection.background.bbox().y - tp.y;
        this.pdy = dy;
        // uprise selection
        this.curntSelection.move(tp.x, tp.y);
        // hide list
        this.list.hide();
        // reset condition for hiden items
        this.list.items.forEach((el) => {
            el.condition = 'normal';
            el.applyBehavior();
        });
        this.dispatch('tds-combobox-hidelist', this);
        this.dispatch('tds-combobox-itemselected', this);
    }
    showList() {
        // show list
        this.list.show();
        // return selection to list
        this.curntSelection.addTo(this.list).front();
        // highlight current selection
        this.curntSelection.condition = 'highlight';
        this.curntSelection.applyBehavior();
        // move selection to its initial position
        this.curntSelection.dmove(0, this.pdy);
        this.dispatch('tds-combobox-showlist', this);
    }
}


/***/ }),

/***/ "../tds-shapes/src/common.ts":
/*!***********************************!*\
  !*** ../tds-shapes/src/common.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRID_STEP": () => (/* binding */ GRID_STEP),
/* harmony export */   "iconPath": () => (/* binding */ iconPath),
/* harmony export */   "Create_ID": () => (/* binding */ Create_ID),
/* harmony export */   "StyleSizeNumber": () => (/* binding */ StyleSizeNumber),
/* harmony export */   "vTo01": () => (/* binding */ vTo01),
/* harmony export */   "rndX": () => (/* binding */ rndX),
/* harmony export */   "objectMerge": () => (/* binding */ objectMerge),
/* harmony export */   "getRandomColor": () => (/* binding */ getRandomColor),
/* harmony export */   "isPointInCircle": () => (/* binding */ isPointInCircle),
/* harmony export */   "distP": () => (/* binding */ distP),
/* harmony export */   "createTempLine": () => (/* binding */ createTempLine),
/* harmony export */   "createPinPoint": () => (/* binding */ createPinPoint),
/* harmony export */   "shrinkString": () => (/* binding */ shrinkString),
/* harmony export */   "pointInRect": () => (/* binding */ pointInRect),
/* harmony export */   "pointInRectBox": () => (/* binding */ pointInRectBox),
/* harmony export */   "shapeStackAtPoint": () => (/* binding */ shapeStackAtPoint),
/* harmony export */   "ListAttrGroupDefault": () => (/* binding */ ListAttrGroupDefault),
/* harmony export */   "ListAttrDefault": () => (/* binding */ ListAttrDefault)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");


const GRID_STEP = 9;
const iconPath = {
    rightChevron: 'M6.8 6C6.8 5.8 6.7 5.7 6.6 5.5L1.1 0.2C1 0.1 0.8 0 0.6 0 0.3 0 0 0.3 0 0.6 0 0.8 0.1 1 0.2 1.1L5.2 6 0.2 10.9C0.1 11 0 11.2 0 11.4 0 11.7 0.3 12 0.6 12 0.8 12 1 11.9 1.1 11.8L6.6 6.5C6.7 6.3 6.8 6.2 6.8 6Z',
    dstack: 'M6.3 12C6.5 12 6.7 11.8 6.8 11.7L3.7 6.2C3.6 6.1 3.6 6.1 3.6 6 3.6 5.9 3.6 5.9 3.7 5.8L6.8 0.3C6.7 0.2 6.5 0 6.3 0 6.1 0 5.9 0.1 5.8 0.3L2.8 5.4C2.7 5.6 2.6 5.8 2.6 6 2.6 6.2 2.7 6.4 2.8 6.6L5.8 11.7C5.9 11.9 6.1 12 6.3 12ZM9.2 12C9.6 12 9.8 11.8 10 11.3L12.7 6.7C12.9 6.5 13 6.2 13 6 13 5.8 12.9 5.5 12.7 5.3L10 0.7C9.8 0.2 9.6 0 9.2 0 8.9 0 8.7 0.2 8.4 0.7L5.8 5.3C5.6 5.5 5.5 5.8 5.5 6 5.5 6.2 5.6 6.5 5.8 6.7L8.4 11.3C8.7 11.8 8.9 12 9.2 12ZM3.4 0.9C3.6 0.9 3.8 0.7 3.8 0.5 3.8 0.3 3.6 0.1 3.4 0.1 3.2 0.1 3 0.3 3 0.5 3 0.7 3.2 0.9 3.4 0.9ZM2.8 2C3 2 3.2 1.8 3.2 1.6 3.2 1.4 3 1.2 2.8 1.2 2.6 1.2 2.4 1.4 2.4 1.6 2.4 1.8 2.6 2 2.8 2ZM2.2 3.1C2.4 3.1 2.6 2.9 2.6 2.7 2.6 2.5 2.4 2.3 2.2 2.3 2 2.3 1.8 2.5 1.8 2.7 1.8 2.9 2 3.1 2.2 3.1ZM1.6 4.1C1.8 4.1 2 4 2 3.8 2 3.5 1.8 3.4 1.6 3.4 1.4 3.4 1.2 3.5 1.2 3.8 1.2 4 1.4 4.1 1.6 4.1ZM1 5.2C1.2 5.2 1.4 5.1 1.4 4.9 1.4 4.6 1.2 4.5 1 4.5 0.8 4.5 0.6 4.6 0.6 4.9 0.6 5.1 0.8 5.2 1 5.2ZM0.4 6.3C0.6 6.3 0.8 6.2 0.8 5.9 0.8 5.7 0.6 5.6 0.4 5.6 0.2 5.6 0 5.7 0 5.9 0 6.2 0.2 6.3 0.4 6.3ZM1 7.4C1.2 7.4 1.4 7.2 1.4 7 1.4 6.8 1.2 6.6 1 6.6 0.8 6.6 0.6 6.8 0.6 7 0.6 7.2 0.8 7.4 1 7.4ZM1.6 8.5C1.8 8.5 2 8.3 2 8.1 2 7.9 1.8 7.7 1.6 7.7 1.4 7.7 1.2 7.9 1.2 8.1 1.2 8.3 1.4 8.5 1.6 8.5ZM2.2 9.6C2.4 9.6 2.6 9.4 2.6 9.2 2.6 9 2.4 8.8 2.2 8.8 2 8.8 1.8 9 1.8 9.2 1.8 9.4 2 9.6 2.2 9.6ZM2.8 10.7C3 10.7 3.2 10.5 3.2 10.3 3.2 10.1 3 9.9 2.8 9.9 2.6 9.9 2.4 10.1 2.4 10.3 2.4 10.5 2.6 10.7 2.8 10.7ZM3.4 11.8C3.6 11.8 3.8 11.6 3.8 11.4 3.8 11.2 3.6 11 3.4 11 3.2 11 3 11.2 3 11.4 3 11.6 3.2 11.8 3.4 11.8Z',
    cross: 'M0 6.9C0 8 0.5 8.5 1.5 8.5H3.5V10.5C3.5 11.5 4 12 5.1 12H6.9C8 12 8.5 11.5 8.5 10.5V8.5H10.5C11.5 8.5 12 8 12 6.9V5.1C12 4 11.5 3.5 10.5 3.5H8.5V1.5C8.5 0.5 8 0 6.9 0H5.1C4 0 3.5 0.5 3.5 1.5V3.5H1.5C0.5 3.5 0 4 0 5.1V6.9ZM0.9 6.9V5.1C0.9 4.7 1.1 4.4 1.6 4.4H4.4V1.6C4.4 1.1 4.7 0.9 5.1 0.9H6.9C7.3 0.9 7.6 1.1 7.6 1.6V4.4H10.4C10.9 4.4 11.1 4.7 11.1 5.1V6.9C11.1 7.3 10.9 7.6 10.4 7.6H7.6V10.4C7.6 10.9 7.3 11.1 6.9 11.1H5.1C4.7 11.1 4.4 10.9 4.4 10.4V7.6H1.6C1.1 7.6 0.9 7.3 0.9 6.9Z',
};
/** simple ID string for object identification
 * @returns string like 'T40fbb0e49f748c'
 */
function Create_ID() {
    return `T${(~~((Math.random() * (1 - 0.5) + 0.5) * 1e8)).toString(16)}${(~~((Math.random() * (1 - 0.5) + 0.5) * 1e8)).toString(16)}`;
}
/**
 * translate 'xxs ... xxl' to number
 * @param i string from StyleSize type
 * @param base StyleSize
 * @returns number
 */
const StyleSizeNumber = (i, base = 1) => {
    switch (i) {
        case 'xxs':
            return base;
        case 'xs':
            return base + 0.2;
        case 's':
            return base + 0.4;
        case 'm':
            return base + 1;
        case 'l':
            return base + 1.2;
        case 'xl':
            return base + 1.4;
        case 'xxl':
            return base + 1.6;
        default:
            break;
    }
};
/**
 *  scale value to 0 - 1 row, if value < min or > max, result can be less 0 or gretter then 1
 *
 * @param v input value
 * @param vMin input value min
 * @param vMax input value max
 * @param d number of digits in 'return', if '0' => round up to integer
 */
const vTo01 = (v, vMin, vMax, d) => {
    return !(d || d === 0)
        ? (v - vMin) / (vMax - vMin)
        : Number(((v - vMin) / (vMax - vMin)).toFixed(d));
};
/**
 * rounding x to the nearest integer, taking into account the multiplier
 *
 * @param n value to be rounded
 * @param x the value to which the result should be a multiple
 */
const rndX = (n, x) => {
    return Math.round(n / x) * x;
};
/**
 * fill source with target
 * @param s source
 * @param t target
 */
const objectMerge = (s, t) => {
    Object.keys(s).forEach((prop) => {
        if (typeof s[prop] == 'object' || undefined) {
            !t[prop] ? (t[prop] = s[prop]) : objectMerge(s[prop], t[prop]);
        }
        else {
            !t[prop] ? (t[prop] = s[prop]) : 0;
        }
    });
};
/** random hex color */
const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
/**
 * checks if coordinates are in a circle
 *
 * @param x x coordinate
 * @param y y coordinate
 * @param x1 circle x coordinate
 * @param y1 circle y coordinate
 * @param r circle radius
 */
const isPointInCircle = (x, y, x1, y1, r) => {
    let distance = (x - x1) * (x - x1) + (y - y1) * (y - y1);
    r *= r;
    return distance < r;
};
/**
 * distance from point to point (circle center...etc)
 *
 * @param x x coordinate
 * @param y y coordinate
 * @param x1 circle x coordinate
 * @param y1 circle y coordinate
 */
const distP = (x, y, x1, y1) => {
    return Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y));
};
/** controled, 'auto erase' line from point to point */
const createTempLine = (root, x, y, x1, y1, id, la) => {
    root.children().map((el) => {
        el.hasClass('tds-templine' + id) && el.remove();
    });
    !la && (la = { color: 'red', width: 1, dasharray: '5 2 5' });
    let _l = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Line()
        .plot([
        [x, y],
        [x1, y1],
    ])
        .stroke({
        color: la.color,
        width: la.width,
        dasharray: la.dasharray,
    })
        .addClass('tds-templine' + id);
    root.add(_l);
    return _l;
};
const createPinPoint = (root, x, y, r, id, la, fd) => {
    root.children().map((el) => {
        el.hasClass('tds-pinpoint' + id) && el.remove();
    });
    !la && (la = { color: 'red', width: 1 });
    !fd && (fd = { color: 'transparent' });
    root.add(new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Circle()
        .radius(r)
        .stroke(Object.assign({}, la))
        .fill(Object.assign({}, fd))
        .cx(x)
        .cy(y)
        .addClass('tds-pinpoint' + id));
};
/**
 * truncates the string to the specified number of characters
 * @param s the string to trim
 * @param n number of characters, including the number of characters in the specified ending 'es'
 * @param es characters set at the end of a line
 */
function shrinkString(s, n, es) {
    return s.length - n > 0 ? s.substr(0, n - es.length) + es : s;
}
/**
 * check if point is inside rectangle
 * Set boolean b to true if if the point with coordinates (x,y)
 * is inside the rectangle with coordinates (x1,y1,x2,y2) , or to false otherwise.
 * @param rect rectangle (x1,y1,x2,y2): number`s
 * @param point point (x: number,y: number)
 */
const pointInRect = (rect, point) => point.x > rect.x1 &&
    point.x < rect.x2 &&
    point.y > rect.y1 &&
    point.y < rect.y2;
// the same but rect is specified as Box
const pointInRectBox = (rect, point) => point.x > rect.x &&
    point.x < rect.x2 &&
    point.y > rect.y &&
    point.y < rect.y2;
/**
 * get element stack at point
 * @param f field to seach
 * @param p point
 * @param element element to ignore
 */
const shapeStackAtPoint = (f, p, element) => {
    let r;
    r = f.children().filter((el) => el != element);
    r = r.filter((el) => el.hasClass('tds-container'));
    r = r.filter((el) => {
        const { x, y, x2, y2 } = el.bbox();
        return pointInRect({ x1: x, y1: y, x2: x2, y2: y2 }, { x: p.x, y: p.y });
    });
    return r;
};
/**
 * list group config example
 */
const ListAttrGroupDefault = {
    //
    body: {
        width: 206,
        height: 200,
        fill: { color: '#EEEEEE' },
        stroke: { color: '#D2D2D2', width: 1 },
        radius: 10,
        position: { x: 300, y: 300 },
    },
    autoHeight: true,
    indents: [5, 8, 5, 8],
    subItemIndents: {
        item: 0,
        separator: 5,
        itemIcon: 20,
        itemShortcut: 20,
    },
    //
    itemWidth: 190,
    itemsStyle: {
        title: {
            value: '',
            font: 'Menlo',
            fontWeight: 'normal',
            size: 12,
            fill: { color: 'black' },
            position: { x: 0, y: 0 },
        },
        backgroundRule: ['indent'],
        background: {
            width: 50,
            height: 20,
            fill: { color: '#EEEEEE' },
            stroke: { color: '#EEEEEE' },
            radius: 4,
            position: { x: 0, y: 0 },
        },
        indents: [8, 2, 8, 2],
        position: { x: 0, y: 0 },
    },
    // prettier-ignore
    itemsBehavior: [{
            itemPart: 'background', behavior: [
            //    { condition: 'normal', attr: { fill: { color: 'red' }, stroke: { color: 'blue', width: 2 } } },
            //    { condition: 'mouseenter', attr: {fill: {color: 'grey'}, stroke: { color: 'black', width: 2}}}
            ]
        }, {
            itemPart: 'shotrcut', behavior: [
            //    {condition: 'mouseenter', attr: {fill: { color : 'red'}}},
            //    {},   
            ]
        }],
    // prettier-ignore
    itemsInstances: [
        { kind: 'general', str: 'File', state: 'active', condition: 'normal' },
        { kind: 'general', str: 'Edit', state: 'active', condition: 'normal' },
        { kind: 'general', str: 'View', state: 'active', condition: 'normal' },
        { kind: 'general', str: 'Terminal', state: 'active', condition: 'normal' },
        { kind: 'general', str: 'Wait a minutes...', state: 'active', condition: 'normal' },
    ],
    // prettier-ignore
    separatorsInstances: [
        { order: 2, value: { start: { x: 25, y: 0 }, length: 160, stroke: { color: '#D2D2D2' } } },
    ],
};
/**
 * list config example
 */
const ListAttrDefault = {
    //
    body: {
        width: 206,
        height: 200,
        fill: { color: '#EEEEEE' },
        stroke: { color: '#D2D2D2', width: 1 },
        radius: 10,
        position: { x: 300, y: 300 },
    },
    autoHeight: true,
    indents: [5, 8, 5, 8],
    subItemIndents: {
        item: 0,
        separator: 5,
        itemIcon: 20,
        itemShortcut: 20,
    },
    position: { x: 0, y: 0 },
    //
    itemWidth: 190,
    itemsStyle: {
        title: {
            value: '',
            font: 'Menlo',
            fontWeight: 'normal',
            size: 12,
            fill: { color: 'black' },
            position: { x: 0, y: 0 },
        },
        backgroundRule: ['indent'],
        background: {
            width: 50,
            height: 20,
            fill: { color: '#EEEEEE' },
            stroke: { color: '#EEEEEE' },
            radius: 4,
            position: { x: 0, y: 0 },
        },
        indents: [8, 2, 8, 2],
        position: { x: 0, y: 0 },
    },
    // prettier-ignore
    itemsBehavior: [{
            itemPart: 'background', behavior: [
            //    { condition: 'normal', attr: { fill: { color: 'red' }, stroke: { color: 'blue', width: 2 } } },
            //    { condition: 'mouseenter', attr: {fill: {color: 'grey'}, stroke: { color: 'black', width: 2}}}
            ]
        }, {
            itemPart: 'shotrcut', behavior: [
            //    {condition: 'mouseenter', attr: {fill: { color : 'red'}}},
            //    {},   
            ]
        }],
    // prettier-ignore
    itemsInstances: [
        { kind: 'general', str: 'File', state: 'active', condition: 'normal' },
        { kind: 'general', str: 'Edit', state: 'active', condition: 'normal' },
        { kind: 'shortcut', str: 'Window', state: 'active', condition: 'normal', shortcut: { value: 'cmd + X', font: 'Menlo', fontWeight: 'normal', size: 12, position: { x: 0, y: 0 }, fill: { color: 'green' } } },
        { kind: 'general', str: 'View', state: 'active', condition: 'normal' },
        { kind: 'icon', str: 'Magic cross', state: 'active', condition: 'normal', icon: { d: iconPath.cross, fill: { color: 'black' }, stroke: { color: 'black' } } },
        { kind: 'general', str: 'Terminal', state: 'active', condition: 'normal' },
        { kind: 'general', str: 'Wait a minutes...', state: 'active', condition: 'normal' },
        { kind: 'group', str: 'Wonder group', state: 'active', condition: 'normal', icon: { d: iconPath.rightChevron, fill: { color: 'black' }, stroke: { color: 'black' } }, list: ListAttrGroupDefault },
    ],
    // prettier-ignore
    separatorsInstances: [
        { order: 2, value: { start: { x: 25, y: 0 }, length: 160, stroke: { color: '#D2D2D2' } } },
        { order: 4, value: { start: { x: 25, y: 0 }, length: 160, stroke: { color: '#D2D2D2' } } },
        { order: 7, value: { start: { x: 25, y: 0 }, length: 160, stroke: { color: '#D2D2D2' } } },
    ],
};


/***/ }),

/***/ "../tds-shapes/src/label.ts":
/*!**********************************!*\
  !*** ../tds-shapes/src/label.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "label": () => (/* binding */ label)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title */ "../tds-shapes/src/title.ts");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background */ "../tds-shapes/src/background.ts");




class label extends _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G {
    // widthFactor: number
    constructor(attr) {
        var _a, _b;
        super();
        this.title = undefined;
        this.background = undefined;
        this.rules = [];
        this.id((0,_common__WEBPACK_IMPORTED_MODULE_1__.Create_ID)()).addClass('tds-label');
        (_a = attr.backgroundRule) !== null && _a !== void 0 ? _a : (attr.backgroundRule = ['none']);
        this.rules.push(...attr.backgroundRule);
        (_b = attr.indents) !== null && _b !== void 0 ? _b : (attr.indents = [0, 0, 0, 0]);
        this.indents = attr.indents;
        if (attr.title instanceof _title__WEBPACK_IMPORTED_MODULE_2__.title) {
            this.title = attr.title;
        }
        else {
            this.title = new _title__WEBPACK_IMPORTED_MODULE_2__.title(attr.title);
        }
        if (attr.background && !this.rules.includes('none')) {
            if (attr.background instanceof _background__WEBPACK_IMPORTED_MODULE_3__.background) {
                this.background = attr.background;
            }
            else {
                this.background = new _background__WEBPACK_IMPORTED_MODULE_3__.background(attr.background);
            }
        }
        applyRules(this.title, this.background, this.rules, this.indents);
        this.background && this.add(this.background);
        this.add(this.title);
        attr.position &&
            this.move(attr.position.x, attr.position.y);
    }
    // value operations
    /** get value from title */
    get value() {
        return this.title.value;
    }
    /** set title value and apply rules */
    set value(v) {
        this.title.value = v;
        this.applyRules(this.rules, this.indents);
    }
    /**
     * alling 'background' position to 'title' by rules
     * the rules are applied in the order of definition
     * @param r new rules
     * @param i new indents
     */
    applyRules(r, i = [0, 0, 0, 0]) {
        // store rules and indents
        this.rules = [];
        this.rules.push(...r);
        this.indents = i;
        applyRules(this.title, this.background, this.rules, this.indents
        // this.widthFactor
        );
    }
}
/**
 * alling 'background' position to 'title' by rules
 * the rules are applied in the order of definition
 * @param t title
 * @param b background
 * @param r array of rules from TitleToBackgroundRules
 * @param i indents array [0,0,0,0] by default
 * @param wf width factor
 */
const applyRules = (t, b, r, i //| { sp: Position; tp: Position }
// wf?: number
) => {
    r.forEach((rule) => {
        switch (rule) {
            case 'centered':
                // set background to title
                b.cx(t.cx());
                b.cy(t.cy());
                break;
            case 'indent':
                // change background size accordind
                // title size and indents
                let tb = t.bbox();
                b.width(tb.width + i[0] + i[2]);
                b.height(tb.height + i[1] + i[3]);
                b.x(tb.x - i[0]);
                b.y(tb.y - i[1]);
                break;
            default:
                break;
        }
        // check factor
    });
};


/***/ }),

/***/ "../tds-shapes/src/list.ts":
/*!*********************************!*\
  !*** ../tds-shapes/src/list.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");
/* harmony import */ var _listItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listItem */ "../tds-shapes/src/listItem.ts");
/* harmony import */ var _listItemGrouped__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listItemGrouped */ "../tds-shapes/src/listItemGrouped.ts");
/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./separator */ "../tds-shapes/src/separator.ts");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title */ "../tds-shapes/src/title.ts");







class list extends _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G {
    constructor(attr = _common__WEBPACK_IMPORTED_MODULE_1__.ListAttrDefault) {
        super();
        this.items = []; //| separator | label> = []
        this.separators = [];
        this.id((0,_common__WEBPACK_IMPORTED_MODULE_1__.Create_ID)()).addClass('tds-list');
        // create titile
        if (attr.titleStyle) {
            this.title = new _title__WEBPACK_IMPORTED_MODULE_5__.title(attr.titleStyle);
            this.add(this.title);
        }
        !attr.position && (attr.position = { x: 0, y: 0 });
        // create body rectangle
        this.body = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
            .width(attr.body.width)
            .height(attr.body.height)
            .fill(Object.assign({}, attr.body.fill))
            .stroke(Object.assign({}, attr.body.stroke))
            .radius(attr.body.radius)
            .x(attr.position.x)
            .y(attr.position.y);
        this.add(this.body);
        // create items
        let summHeight = 0;
        attr.itemsInstances.forEach((ii, num) => {
            var _a;
            // add top indent to fist item
            num == 0 && (summHeight += attr.indents[1]);
            // check separator
            let isSep = (_a = attr.separatorsInstances) === null || _a === void 0 ? void 0 : _a.find((el) => el.order == num);
            if (isSep) {
                isSep.value.start.y =
                    summHeight +
                        attr.subItemIndents.separator +
                        attr.position.y;
                isSep.value.start.x += attr.position.x;
                let cs = new _separator__WEBPACK_IMPORTED_MODULE_4__.separator(isSep.value);
                this.separators.push(cs);
                this.add(cs);
                summHeight += attr.subItemIndents.separator * 2;
            }
            let el;
            // get item style
            let is = attr.itemsStyle;
            // set string
            is.title.value = ii.str;
            // set position
            is.position.y = summHeight + attr.position.y;
            is.position.x = attr.indents[0] + attr.position.x;
            if (ii.kind == 'general') {
                el = new _listItem__WEBPACK_IMPORTED_MODULE_2__.listItem({
                    label: is,
                    kind: 'general',
                    width: attr.itemWidth,
                    behavior: attr.itemsBehavior,
                    condition: ii.condition,
                    state: ii.state,
                });
            }
            if (ii.kind == 'shortcut') {
                el = new _listItem__WEBPACK_IMPORTED_MODULE_2__.listItem({
                    label: is,
                    kind: 'shortcut',
                    width: attr.itemWidth,
                    suppIndent: attr.subItemIndents.itemShortcut,
                    shortcut: ii.shortcut,
                    behavior: attr.itemsBehavior,
                    condition: ii.condition,
                    state: ii.state,
                });
            }
            if (ii.kind == 'icon') {
                el = new _listItem__WEBPACK_IMPORTED_MODULE_2__.listItem({
                    label: is,
                    kind: 'icon',
                    width: attr.itemWidth,
                    suppIndent: attr.subItemIndents.itemIcon,
                    icon: ii.icon,
                    behavior: attr.itemsBehavior,
                    condition: ii.condition,
                    state: ii.state,
                });
            }
            if (ii.kind == 'group') {
                let lia = {
                    label: is,
                    kind: 'icon',
                    width: attr.itemWidth,
                    suppIndent: attr.subItemIndents.itemIcon,
                    icon: ii.icon,
                    behavior: attr.itemsBehavior,
                    condition: ii.condition,
                    state: ii.state,
                };
                let la = ii.list;
                el = new _listItemGrouped__WEBPACK_IMPORTED_MODULE_3__.listItemGrouped(lia, la);
            }
            // store payload
            el.remember('ml', ii.payload);
            // adds element to list items collection
            this.items.push(el);
            // increase overal items height
            summHeight +=
                el.title.bbox().height +
                    el.indents[1] +
                    el.indents[3] +
                    attr.subItemIndents.item;
        });
        this.items.forEach((i) => {
            i.on('mousedown', () => {
                this.dispatch('tds-list-mousedown', i);
            });
            this.add(i);
        });
        // set auto height
        attr.autoHeight &&
            this.body.height(attr.indents[3] + summHeight);
    }
}


/***/ }),

/***/ "../tds-shapes/src/listItem.ts":
/*!*************************************!*\
  !*** ../tds-shapes/src/listItem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDefaultBehavior": () => (/* binding */ ItemDefaultBehavior),
/* harmony export */   "listItem": () => (/* binding */ listItem)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label */ "../tds-shapes/src/label.ts");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ "../tds-shapes/src/title.ts");




// prettier-ignore
const ItemDefaultBehavior = [
    // background
    { itemPart: 'background',
        behavior: [
            { condition: 'normal', attr: { fill: { color: '#EEEEEE' }, stroke: { color: 'transparent', width: 1 }, }, },
            { condition: 'mouseenter', attr: { fill: { color: '#00AAFF' }, stroke: { color: '#00AAFF', width: 1 }, }, },
            { condition: 'highlight', attr: { fill: { color: '#00AAFF' }, stroke: { color: '#00AAFF', width: 1 }, }, },
            { condition: 'onclick', attr: { fill: { color: '#999999' }, stroke: { color: '#999999', width: 1 }, }, },
            { condition: 'inactive', attr: { fill: { color: '#EEEEEE' }, stroke: { color: '#transparent', width: 1 }, }, },
        ], },
    // label
    { itemPart: 'title',
        behavior: [
            { condition: 'normal', attr: { fill: { color: 'black' } }, },
            { condition: 'mouseenter', attr: { fill: { color: 'white' } }, },
            { condition: 'inactive', attr: { fill: { color: '#999999' } }, },
        ],
    },
    // foreground
    { itemPart: 'foreground',
        behavior: [
            { condition: 'normal', attr: { fill: { color: 'transparent' }, stroke: { color: 'transparent' }, }, },
            { condition: 'mouseenter', attr: { fill: { color: 'transparent' }, stroke: { color: 'transparent' }, }, },
        ], },
    // shortcut
    { itemPart: 'shotrcut',
        behavior: [
            { condition: 'normal', attr: { fill: { color: '#999999' }, }, },
            { condition: 'mouseenter', attr: { fill: { color: '#FFFFFF' }, }, },
        ], },
    // icon
    { itemPart: 'icon',
        behavior: [
            { condition: 'normal', attr: { fill: { color: 'black' }, stroke: { color: 'black' }, }, },
            { condition: 'mouseenter', attr: { fill: { color: 'white' }, stroke: { color: 'white' }, }, },
        ], },
];
class listItem extends _label__WEBPACK_IMPORTED_MODULE_2__.label {
    /**
     * caution position of instance defined by 'position' in label ... position
     */
    constructor(attr) {
        var _a, _b;
        super(attr.label);
        /** condition reflecting effect */
        this.condition = 'normal';
        this.state = 'active';
        /** Path | title indent from right side */
        this.suppIndent = 15;
        this.id((0,_common__WEBPACK_IMPORTED_MODULE_1__.Create_ID)()).addClass('tds-listItem');
        this.kind = attr.kind;
        // check type and adds icon or shortcut to core
        if (this.kind == 'icon') {
            this.suppItem = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Path(Object.assign({}, attr.icon));
        }
        else if (this.kind == 'shortcut') {
            // console.log(attr.shortcut)
            this.suppItem = new _title__WEBPACK_IMPORTED_MODULE_3__.title(Object.assign({}, attr.shortcut));
        }
        attr.suppIndent && (this.suppIndent = attr.suppIndent);
        // set overal background width
        if (this.kind != 'general') {
            //prettier-ignore
            this.suppItem.move(attr.label.position.x +
                attr.width - ((_a = this.suppItem) === null || _a === void 0 ? void 0 : _a.bbox().width) - this.suppIndent, this.bbox().cy - ((_b = this.suppItem) === null || _b === void 0 ? void 0 : _b.bbox().height) / 2);
        }
        this.background.width(attr.width);
        // foreground
        this.foreground = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
            .width(this.background.width())
            .height(this.background.height())
            // .fill({ color: 'red', opacity: 0.2 })
            .fill({ color: 'transparent' })
            .move(this.background.x(), this.background.y());
        // set state and condition
        this.condition = attr.condition
            ? attr.condition
            : 'normal';
        this.state = attr.state ? attr.state : 'inactive';
        // finally set how it will look )
        attr.behavior
            ? (this.behavior = attr.behavior)
            : (this.behavior = ItemDefaultBehavior);
        this.applyBehavior();
        // adds supp item and foreground
        this.suppItem && this.add(this.suppItem);
        this.add(this.foreground);
        // handle mouseenter / mouseleave and mousedown
        this.foreground.on('mouseenter', () => {
            this.condition != 'highlight' &&
                this.state != 'inactive'
                ? (this.condition = 'mouseenter')
                : 0;
            this.front();
            this.applyBehavior();
        });
        this.foreground.on('mouseleave', () => {
            this.condition != 'highlight' &&
                this.state != 'inactive'
                ? (this.condition = 'normal')
                : 0;
            this.applyBehavior();
        });
        this.foreground.on('mousedown', () => {
            this.condition != 'highlight' &&
                this.state != 'inactive'
                ? (this.condition = 'onclick')
                : 0;
            this.applyBehavior();
        });
        this.foreground.on('mouseup', () => {
            this.condition != 'highlight' &&
                this.state != 'inactive'
                ? (this.condition = 'mouseenter')
                : 0;
            this.front();
            this.applyBehavior();
        });
    }
    moveTo(x, y) {
        this.move(x, y);
    }
    /**
     * change the appearance of the element depending on the external influence
     * @param c current condition
     */
    applyBehavior(c) {
        !c && (c = this.condition);
        getB(this, this.background, c, 'background');
        getB(this, this.title, c, 'title');
        if (this.suppItem instanceof _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Path) {
            getB(this, this.suppItem, c, 'icon');
        }
        if (this.suppItem instanceof _title__WEBPACK_IMPORTED_MODULE_3__.title) {
            getB(this, this.suppItem, c, 'shotrcut');
        }
    }
}
//! wtf (...
const getB = (i, rop, c, pt) => {
    let dbc;
    let bf = i.behavior.find((el) => el.itemPart == pt);
    if (bf) {
        dbc = bf.behavior.find((el) => el.condition == c);
        !dbc &&
            (dbc = ItemDefaultBehavior.find((el) => el.itemPart == pt).behavior.find((el) => el.condition == c));
    }
    if (!bf) {
        dbc = ItemDefaultBehavior.find((el) => el.itemPart == pt).behavior.find((el) => el.condition == c);
    }
    dbc &&
        (rop.fill(Object.assign({}, dbc.attr.fill)),
            rop.stroke(Object.assign({}, dbc.attr.stroke)));
};


/***/ }),

/***/ "../tds-shapes/src/listItemGrouped.ts":
/*!********************************************!*\
  !*** ../tds-shapes/src/listItemGrouped.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listItemGrouped": () => (/* binding */ listItemGrouped)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "../tds-shapes/src/list.ts");
/* harmony import */ var _listItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listItem */ "../tds-shapes/src/listItem.ts");


class listItemGrouped extends _listItem__WEBPACK_IMPORTED_MODULE_1__.listItem {
    constructor(itemAttr, listAttr) {
        super(itemAttr);
        //! list initialization moved outside setTimeout
        this.list = new _list__WEBPACK_IMPORTED_MODULE_0__.list(listAttr).hide();
        this.add(this.list);
        setTimeout(() => { }, 0);
        this.on('mouseenter', () => {
            this.condition = 'highlight';
            let x = this.x() + this.width();
            let y = this.y();
            this.list.show();
            this.list.move(x, y - 5);
        });
        this.on('mouseleave', () => {
            this.condition = 'normal';
            this.applyBehavior();
            this.list.hide();
        });
    }
}


/***/ }),

/***/ "../tds-shapes/src/mitem.ts":
/*!**********************************!*\
  !*** ../tds-shapes/src/mitem.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mitemCreator": () => (/* binding */ mitemCreator),
/* harmony export */   "mitem": () => (/* binding */ mitem)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label */ "../tds-shapes/src/label.ts");
/* harmony import */ var _mitemjail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mitemjail */ "../tds-shapes/src/mitemjail.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _friends;



const mitemLabelAtr = {
    title: {
        value: '',
        font: 'Menlo',
        fontWeight: 'normal',
        size: 12,
        fill: { color: 'black' },
    },
    background: {
        width: 5,
        height: 5,
        radius: 4,
        fill: { color: '#FFFFFF' },
        stroke: { color: '#999999', width: 1 },
    },
    backgroundRule: ['indent', 'centered'],
    indents: [4, 2, 4, 2],
    position: { x: 0, y: 0 },
};
const mitemHighliteStyle = {
    fill: { color: '#FFFFFF' },
    stroke: { color: '#000000', width: 1 },
};
const mitemSelectStyle = {
    fill: { color: '#D0D0D0' },
    stroke: { color: '#000000', width: 1 },
};
const MITEM_FRIENDS_ZONE = 100;
const mitemCreator = (v, p) => {
    return new mitem({
        title: {
            value: v,
            font: 'Menlo',
            fontWeight: 'normal',
            size: 12,
            fill: { color: '#000000' },
        },
        background: {
            width: 5,
            height: 36,
            radius: 4,
            fill: { color: '#FFFFFF' },
            stroke: { color: '#999999', width: 1 },
        },
        backgroundRule: ['centered', 'indent'],
        indents: [4, 2, 2, 2],
        position: { x: p.x, y: p.y },
    }, 
    // widthFactor
    9, 
    // highlightStyle
    {
        fill: { color: '#FFFFFF' },
        stroke: { color: '#000000', width: 1 },
    }, 
    // selectStyle
    {
        fill: { color: '#D0D0D0' },
        stroke: { color: '#000000', width: 1 },
    });
};
/** base item for tds-core
 *  'label' that can
 *  - snap to grid or other item
 *  - be 'selected'
 */
class mitem extends _label__WEBPACK_IMPORTED_MODULE_1__.label {
    constructor(attr, wFactor = _common__WEBPACK_IMPORTED_MODULE_0__.GRID_STEP / 2, highlightStyle = mitemHighliteStyle, selectStyle = mitemSelectStyle) {
        super(attr);
        this.snaped = false;
        this.selected = false;
        _friends.set(this, []);
        this.id((0,_common__WEBPACK_IMPORTED_MODULE_0__.Create_ID)()).addClass('tds-mitem');
        // set styles
        this.highlightStyle = highlightStyle;
        this.selectStyle = selectStyle;
        this.normalStateStyle = {
            fill: Object.assign({}, attr.background.fill),
            stroke: Object.assign({}, attr.background.stroke),
        };
        // correct width according to widthFactor
        this.widthFactor = wFactor;
        this.correctWidth();
        // set initial position to grid
        const bb = this.background.bbox();
        let bbx = bb.x % this.widthFactor;
        let bby = bb.y % this.widthFactor;
        if (bbx != 0 || bby != 0) {
            this.move(bb.x - bbx, bb.y - bby);
        }
        // hightlight item on mouse over
        this.on('mouseenter', () => {
            !this.selected && this.setHighLightStyle();
            // this.front()
        });
        // 'select' on mouse down
        this.on('mousedown', () => {
            this.selectHandler();
        });
        // restore normal state on 'mouseleave'
        this.on('mouseleave', () => {
            !this.selected && this.setNormalStyle();
        });
        this.on('dragstart', (ev) => {
            // this.parents()[0].type
            if (this.parent() != this.root())
                this.toRoot();
            console.log(this.parents()[0].type);
            // fill friends
            __classPrivateFieldSet(this, _friends, this.friendsMitems());
        });
        this.on('dragmove', (ev) => {
            this.dragMoveHandler(ev);
        });
        /** set to grid on drop */
        this.on('dragend', (ev) => {
            this.checkLandingPosition(ev);
            this.dragEndHandler();
        });
    }
    /** try to find 'mitemjail' */
    checkLandingPosition(ev) {
        let cb = this.bbox();
        console.log(cb);
        // get stack of elements at item center
        const r = (0,_common__WEBPACK_IMPORTED_MODULE_0__.shapeStackAtPoint)(this.root(), { x: cb.cx, y: cb.cy }, this);
        // if we have 'tds-container'
        let rl = r.length;
        if (rl != 0) {
            let landingElement = r[rl - 1];
            if (landingElement instanceof _mitemjail__WEBPACK_IMPORTED_MODULE_2__.mitemjail) {
                // check body
                if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.pointInRectBox)(landingElement.body.bbox(), {
                    x: cb.cx,
                    y: cb.cy,
                })) {
                    r[rl - 1].add(this);
                }
            }
        }
    }
    selectHandler() {
        !this.selected
            ? ((this.selected = true),
                this.select(true),
                this.fire('tds-mitem-directSelect', this))
            : // dont switch state
                0;
    }
    /** friends mitens on field and in the containers */
    friendsMitems() {
        // 'mitems' directly on field
        let fi = this.parent()
            .children()
            .filter((el) => el.hasClass('tds-mitem') && el != this);
        // mitems inside 'tds-container'
        let ja = [];
        this.parent()
            .children()
            .filter((el) => el.hasClass('tds-container'))
            .forEach((el) => {
            if (el instanceof _mitemjail__WEBPACK_IMPORTED_MODULE_2__.mitemjail) {
                el.items.forEach((el) => {
                    if (el instanceof mitem) {
                        ja.push(el);
                    }
                });
            }
        });
        // adds hiden by 'tds-container' mitems
        fi.push(...ja);
        return fi;
    }
    /**
     * set snap if one item to close to another
     * @param ff flag for free not snaped item
     */
    snapHandler() {
        let cb = this.bbox();
        let ff = 0;
        let instgiag = (0,_common__WEBPACK_IMPORTED_MODULE_0__.distP)(cb.x, cb.y, cb.x2, cb.y2);
        let trgI = [];
        for (let i = 0; i < __classPrivateFieldGet(this, _friends).length; i++) {
            let ib = __classPrivateFieldGet(this, _friends)[i].bbox();
            let idiag = (0,_common__WEBPACK_IMPORTED_MODULE_0__.distP)(ib.x, ib.y, ib.x2, ib.y2);
            if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.isPointInCircle)(ib.cx, ib.cy, cb.cx, cb.cy, (idiag + instgiag) * 0.75)) {
                let dist = (0,_common__WEBPACK_IMPORTED_MODULE_0__.distP)(ib.cx, ib.cy, cb.cx, cb.cy);
                if (__classPrivateFieldGet(this, _friends)[i] instanceof mitem)
                    trgI.push([__classPrivateFieldGet(this, _friends)[i], dist]);
            }
        }
        let srtT = trgI.sort((a, b) => a[1] - b[1]);
        for (let i = 0; i < srtT.length; i++) {
            let ti = srtT[i][0];
            if (ti instanceof mitem) {
                for (let tii = 0; tii < ti.anchors.length; tii++) {
                    for (let ia = 0; ia < this.anchors.length; ia++) {
                        let adist = (0,_common__WEBPACK_IMPORTED_MODULE_0__.distP)(ti.anchors[tii][0], ti.anchors[tii][1], this.anchors[ia][0], this.anchors[ia][1]);
                        if (adist < this.widthFactor * 2) {
                            this.snaped = true;
                            this.front();
                            ff = 1;
                        }
                    }
                    if (ff == 1)
                        break;
                }
                if (ff == 1)
                    break;
            }
        }
        if (ff == 0) {
            this.snaped = false;
        }
    }
    dragMoveHandler(ev) {
        // handle snap
        this.snapHandler();
        const { box } = ev.detail;
        ev.preventDefault();
        if (this.snaped) {
            this.move(box.x - (box.x % this.widthFactor), box.y - (box.y % this.widthFactor));
        }
        else {
            this.move(box.x, box.y);
        }
    }
    /** handle grid snapping on end of drag */
    dragEndHandler() {
        const box = this.background.bbox();
        this.move(box.x - (box.x % this.widthFactor), box.y - (box.y % this.widthFactor));
        this.snaped = false;
    }
    /** proxy move */
    move(x, y) {
        super.move(x, y);
        return this;
    }
    /** set styles */
    setHighLightStyle() {
        this.background.fill(Object.assign({}, this.highlightStyle.fill));
        this.background.stroke(Object.assign({}, this.highlightStyle.stroke));
    }
    setSelectStyle() {
        this.background.fill(Object.assign({}, this.selectStyle.fill));
        this.background.stroke(Object.assign({}, this.selectStyle.stroke));
    }
    setNormalStyle() {
        this.background.fill(Object.assign({}, this.normalStateStyle.fill));
        this.background.stroke(Object.assign({}, this.normalStateStyle.stroke));
    }
    /** switch selection
     * state - if defined, sets directly to 'true' or 'false'
     * in other case just 'switch'
     */
    select(state) {
        state != undefined
            ? state
                ? // set select
                    ((this.selected = true), this.setSelectStyle())
                : // remove select
                    ((this.selected = false), this.setNormalStyle())
            : // switch
                this.selected
                    ? ((this.selected = false), this.setNormalStyle())
                    : ((this.selected = true), this.setSelectStyle());
    }
    /**  correct width according to widthFactor */
    correctWidth() {
        let curWidth = this.background.width();
        this.background.width(curWidth - (curWidth % this.widthFactor) + this.widthFactor);
    }
    /** get string value from item */
    get titleString() {
        return this.value;
    }
    /** set string value to item */
    set titleString(v) {
        this.value = v;
        // correct width according to width factor
        this.correctWidth();
    }
    /** stick points */
    get anchors() {
        let bb = this.background.bbox();
        return [
            [bb.x, bb.y + bb.height / 2],
            [bb.x, bb.y],
            [bb.x + bb.width / 2, bb.y],
            [bb.x2, bb.y],
            [bb.x2, bb.y + bb.height / 2],
            [bb.x2, bb.y2],
            [bb.x + bb.width / 2, bb.y2],
            [bb.x, bb.y2],
        ];
    }
}
_friends = new WeakMap();


/***/ }),

/***/ "../tds-shapes/src/mitemjail.ts":
/*!**************************************!*\
  !*** ../tds-shapes/src/mitemjail.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mitemjailHeaderDefStyle": () => (/* binding */ mitemjailHeaderDefStyle),
/* harmony export */   "mitemjailRowDefStyle": () => (/* binding */ mitemjailRowDefStyle),
/* harmony export */   "mitemjailBodyDefStyle": () => (/* binding */ mitemjailBodyDefStyle),
/* harmony export */   "nitemjailPinDefStyle": () => (/* binding */ nitemjailPinDefStyle),
/* harmony export */   "mitemjailAttrDef": () => (/* binding */ mitemjailAttrDef),
/* harmony export */   "mitemjail": () => (/* binding */ mitemjail)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "../tds-shapes/src/background.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");
/* harmony import */ var _mitem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mitem */ "../tds-shapes/src/mitem.ts");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textarea */ "../tds-shapes/src/textarea.ts");





/** default body style for mitemjail header */
const mitemjailHeaderDefStyle = () => {
    return {
        width: 288,
        height: 36,
        fill: { color: '#EEEEEE' },
        stroke: { color: '#D2D2D2', width: 1 },
        radius: 6,
        position: { x: 0, y: 0 },
    };
};
/** default style for single row in  */
const mitemjailRowDefStyle = () => {
    return {
        value: '\u2800',
        font: 'Menlo',
        fontWeight: 'normal',
        size: 12,
        position: { x: 8, y: 4 },
        fill: { color: 'black' },
    };
};
/** default style for mitemjail body */
const mitemjailBodyDefStyle = () => {
    return {
        width: 324,
        height: 144,
        radius: 4,
        fill: { color: '#EEEEEE' },
        stroke: { color: '#D2D2D2', width: 1, dasharray: '5 5' },
        position: { x: 0, y: 36 },
    };
};
/** default style for mitemjail pin */
const nitemjailPinDefStyle = () => {
    return {
        radius: 9,
        fill: { color: '#FFFFFF' },
        stroke: { color: '#999999', width: 1 },
    };
};
const mitemjailAttrDef = (s, p) => {
    let _p = nitemjailPinDefStyle();
    return {
        header: {
            body: mitemjailHeaderDefStyle(),
            rowsTitleStyle: mitemjailRowDefStyle(),
            data: s,
            position: { x: 0, y: 0 },
            maxRows: 2,
            disallowDirect: true,
        },
        body: mitemjailBodyDefStyle(),
        pin: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Circle()
            .radius(_p.radius)
            .fill(_p.fill)
            .stroke(_p.stroke),
        position: p,
        minSize: { width: 307, height: 44 },
    };
};
class mitemjail extends _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G {
    constructor(attr) {
        super();
        this.collapsed = false;
        this.addClass('tds-container').id((0,_common__WEBPACK_IMPORTED_MODULE_2__.Create_ID)());
        attr.body.position.x += attr.position.x;
        attr.body.position.y += attr.position.y;
        attr.header.position.x += attr.position.x;
        attr.header.position.y += attr.position.y;
        this.minSize = attr.minSize;
        this.body = new _background__WEBPACK_IMPORTED_MODULE_1__.background(attr.body);
        this.header = new _textarea__WEBPACK_IMPORTED_MODULE_4__.textarea(attr.header);
        this.add(this.body);
        this.add(this.header);
        this.pin = attr.pin.draggable();
        let _bb = this.body.bbox();
        this.pin.cx(_bb.x2);
        this.pin.cy(_bb.y2);
        this.add(this.pin);
        this.pin.on('dragmove', (ev) => {
            this.pinMoveHandler(ev);
        });
        this.header.on('dblclick', () => {
            if (!this.collapsed) {
                this.items.forEach((el) => {
                    el.hide();
                });
                this.collapsed = true;
            }
            else {
                this.items.forEach((el) => {
                    el.show();
                });
                this.collapsed = false;
            }
        });
        this.dragendHandler();
        this.on('dragend', () => {
            // snap to grid on drag end
            this.dragendHandler();
        });
    }
    // snap to grid on drag end
    dragendHandler() {
        const box = this.bbox();
        this.move(box.x - (box.x % (_common__WEBPACK_IMPORTED_MODULE_2__.GRID_STEP / 2)), box.y - (box.y % (_common__WEBPACK_IMPORTED_MODULE_2__.GRID_STEP / 2)));
    }
    /** child elements */
    get items() {
        return this.children().filter((el) => el instanceof _mitem__WEBPACK_IMPORTED_MODULE_3__.mitem);
    }
    /** proxy parent 'add' */
    add(el, i) {
        super.add(el, i);
        //// adds only mitem instances
        //highlight adding mitems
        if (el instanceof _mitem__WEBPACK_IMPORTED_MODULE_3__.mitem) {
            console.log('mitem adds )');
        }
        return this;
    }
    /**
     * support for marker movement that changes the working area
     */
    pinMoveHandler(ev) {
        // min values for width, height
        const { width, height } = this.minSize;
        // resizeShape instance and its box
        const { box, handler } = ev.detail;
        let { cx, cy, x, y } = box;
        // disable default behavior
        ev.preventDefault();
        // check body size set it to min if it less then 'unionMinSize'
        // current width, height
        let _w = this.pin.cx() - this.body.x();
        let _h = this.pin.cy() - this.body.y();
        // set it to min
        this.body.width(_w <= width ? width : _w);
        this.body.height(_h < height ? height : _h);
        // callc min x, y of resizeShape
        let minX = this.body.x() + width - (cx - x);
        let minY = this.body.y() + height - (cy - y);
        // set resizeShape x, y to min
        x < minX ? (x = minX) : 0;
        y < minY ? (y = minY) : 0;
        // move resizeShape to callculated position
        handler.move(x, y);
    }
}


/***/ }),

/***/ "../tds-shapes/src/separator.ts":
/*!**************************************!*\
  !*** ../tds-shapes/src/separator.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "separator": () => (/* binding */ separator)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");


/**
 * just a Line for separate stencil items logical groups
 * typicaly horizontal
 */
class separator extends _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Line {
    constructor(attr) {
        super();
        this.id((0,_common__WEBPACK_IMPORTED_MODULE_1__.Create_ID)()).addClass('tds-separator');
        // set appearance
        this.stroke(attr.stroke);
        attr.end
            ? // draw a non-horizontal line in this case the length does not matter
                this.plot(attr.start.x, attr.start.y, attr.end.x, attr.end.y)
            : // ordinary horizontal line
                this.plot(attr.start.x, attr.start.y, attr.start.x + attr.length, attr.start.y);
    }
}


/***/ }),

/***/ "../tds-shapes/src/slider.ts":
/*!***********************************!*\
  !*** ../tds-shapes/src/slider.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slider": () => (/* binding */ slider)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _svgdotjs_svg_draggable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @svgdotjs/svg.draggable.js */ "./node_modules/@svgdotjs/svg.draggable.js/src/svg.draggable.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label */ "../tds-shapes/src/label.ts");
/* harmony import */ var _textbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textbox */ "../tds-shapes/src/textbox.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _orientation, _sliderType;






const tickKindOrder = [
    'main',
    'half',
    'subhalf',
];
class slider extends _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G {
    constructor(attr) {
        super();
        _orientation.set(this, void 0);
        _sliderType.set(this, void 0);
        this.ticksGroup = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G();
        // ticks storage
        attr.ticks && (this.ticks = attr.ticks);
        this.ticksGroup
            .id((0,_common__WEBPACK_IMPORTED_MODULE_2__.Create_ID)())
            .addClass('tds-ticksgroup');
        this.add(this.ticksGroup);
        this.id((0,_common__WEBPACK_IMPORTED_MODULE_2__.Create_ID)()).addClass('tds-slider');
        // apply properties from attr
        this.payload = Object.assign({}, attr.payload);
        this.ruller = attr.ruller;
        this.filler = attr.filler;
        this.valueBox = attr.valueBox;
        this.title = attr.title;
        this.pin = attr.pin;
        __classPrivateFieldSet(this, _orientation, attr.orientation);
        __classPrivateFieldSet(this, _sliderType, attr.sliderType
        // add items to field
        );
        // add items to field
        this.add(this.title)
            .add(this.ruller)
            .add(this.filler)
            .add(this.pin)
            .add(this.valueBox);
        if (this.sliderType == 'twostate')
            this.valueBox.remove();
        // set pin to value
        this.value = this.payload.value;
        // handle two state slider
        if (this.sliderType == 'twostate') {
            this.pin.on('beforedrag', (ev) => {
                ev.preventDefault();
            });
            this.pin.on('click', (ev) => {
                twoStateHandler(this, ev);
            });
            this.pin.on('touchstart', (ev) => {
                twoStateHandler(this, ev);
            });
            function twoStateHandler(sl, ev) {
                ev.preventDefault();
                if (sl.sliderType == 'twostate') {
                    let v = sl.payload.value;
                    if (v == 0) {
                        sl.value = 1;
                    }
                    else {
                        sl.value = 0;
                    }
                }
                return true;
            }
        }
        // set constrainted pin move
        // on move update values in 'value box' and 'payload' storage
        this.pin.on('dragmove', (ev) => {
            const ruller = this.ruller.bbox();
            const { box } = ev.detail;
            ev.preventDefault();
            this.dragHandler(box, ruller);
            return true;
        });
        // hide input on beafore drag
        this.on('beforedrag', () => {
            this.valueBox.reset();
        });
        /** handle manual changing in value box */
        this.valueBox.on('tds-textbox-changingEnd', () => {
            Number(this.valueBox.value) != this.payload.value &&
                (this.value = Number(this.valueBox.value));
        });
        // handle operational manual change input
        // define this.valueBox.input.node.onchange = () => {}
        this.valueBox.on('tds-textbox-changingStart', () => {
            let el = this.valueBox.getInput();
            this.valueBox.input.node.onchange = () => {
                Number(el.value) != this.payload.value &&
                    (this.value = Number(el.value));
            };
        });
        setTimeout(() => {
            this.tickHandler();
        }, 0);
    }
    //?--------------------------------------------------- drag handler
    /**
     * hadle drag with horizontal or vertical restriction
     * @param el_bb pin bbox
     * @param rl_bb ruller bbox
     */
    dragHandler(el_bb, rl_bb) {
        let or = this.orientation;
        let p = this.payload;
        // get new coordinate
        let cxy = or == 'horizontal' ? el_bb.cx : el_bb.cy;
        // get approx value
        let r = this.getRawValue(cxy, rl_bb, or, p);
        // reduce value to step base
        r = this.getInLineValue(r, p);
        // get coordinate for reduced value
        let c = this.getCoordinate(r, rl_bb, or, p);
        // set coordinate to pin
        this.setPinToCoordinate(c, rl_bb, or);
        // update payload
        this.setPayloadValue(r);
        // update value box
        this.setValueBoxValue(r);
    }
    /**
     * return payload.value
     */
    get value() {
        return Number(this.payload.value);
    }
    /**
     * general value setting
     */
    set value(v) {
        let p = this.payload;
        let ruller = this.ruller.bbox();
        let or = this.orientation;
        let rv = this.getInLineValue(v, p);
        let c = this.getCoordinate(rv, ruller, or, p);
        this.setPinToCoordinate(c, ruller, or);
        this.setPayloadValue(rv);
        this.setValueBoxValue(rv);
    }
    /** readonly direction */
    get orientation() {
        return __classPrivateFieldGet(this, _orientation);
    }
    /** read only type */
    get sliderType() {
        return __classPrivateFieldGet(this, _sliderType);
    }
    //?--------------------------------------------------- private voids
    /**
     * getting the estimated value of the slider
     * at a certain coordinate
     * @param c coordinate
     * @param rb the limit in which slider is located
     * @param or Slider orientation
     * @param p Slider payload
     * @returns estimated value 'number'
     */
    getRawValue(c, rb, or, p) {
        let k = 0;
        if (or == 'vertical') {
            k = (0,_common__WEBPACK_IMPORTED_MODULE_2__.vTo01)(c, rb.y2, rb.y);
        }
        else if (or == 'horizontal') {
            k = (0,_common__WEBPACK_IMPORTED_MODULE_2__.vTo01)(c, rb.x, rb.x2);
        }
        return Number(p.min + k * (p.max - p.min));
    }
    //?--------------------------------------------------- CAUTION .xls
    /**
     * returns the reduced value with the base from the step
     * @param v the value to be given
     * @param p payload containing constraints
     * @returns 'number' - the value reduced to the series
     */
    getInLineValue(v, p) {
        v = Math.round((v - p.min) / p.step) * p.step + p.min;
        if (v < p.min)
            return (v = p.min);
        if (v > p.max)
            return (v = p.max);
        return v;
    }
    /**
     * get the coordinate of the value in certain constraints
     * @param v estimated value
     * @param rb restriction in which estimate occur
     * @param or 'restriction' orientation - (slider - it mean)
     * @param p payload containing constraints
     */
    getCoordinate(v, rb, or, p) {
        let k = (0,_common__WEBPACK_IMPORTED_MODULE_2__.vTo01)(v, p.min, p.max);
        let result;
        if (or == 'vertical') {
            result = rb.y2 - k * rb.height;
            if (result < rb.y)
                return rb.y;
            if (result > rb.y2)
                return rb.y2;
        }
        else if (or == 'horizontal') {
            result = rb.x + k * rb.width;
            if (result > rb.x2)
                return rb.x2;
            if (result < rb.x)
                return rb.x;
        }
        return result;
    }
    /**
     * set filler
     * @param rb filler restriction
     * @param or filler orientation
     */
    setFiller(rb, or) {
        if (or == 'vertical') {
            this.filler.move(this.pin.cx() - rb.width / 2, this.pin.cy());
            this.filler.height(rb.y2 - this.pin.cy());
        }
        else if (or === 'horizontal') {
            this.filler.width(this.pin.cx() - rb.x);
        }
    }
    /**
     * set pin center to coordinate
     * @param c coordinate
     * @param rb restriction box
     * @param or restriction box orientation
     * @param f optional, if set (default - true) also set filler
     */
    setPinToCoordinate(c, rb, or, f = true) {
        if (or == 'horizontal') {
            this.pin.cx(c);
            this.pin.cy(rb.cy);
        }
        else if (or === 'vertical') {
            this.pin.cy(c);
            this.pin.cx(rb.cx);
        }
        f && this.setFiller(rb, or);
    }
    setPayloadValue(v) {
        if (v != this.payload.value) {
            this.payload.value = v;
            this.dispatch('tds-slider-valueChanged', this);
        }
    }
    setValueBoxValue(v) {
        this.valueBox.value = v.toFixed(this.payload.precision);
    }
    /**
     * adds tick layout to slider
     */
    tickHandler() {
        const t = this.ticks;
        const rb = this.ruller.bbox();
        const p = this.payload;
        const or = this.orientation;
        let res = {
            main: [],
            half: [],
            subhalf: [],
        };
        // create default tick line
        const tline = (tk, sd = 'down', size = 'xxs', sb = 1, color = { color: '#999999', width: 1 }) => {
            let llk = 0;
            switch (tk) {
                case 'main':
                    llk = 2.5;
                    break;
                case 'half':
                    llk = 2;
                    break;
                case 'subhalf':
                    llk = 1.5;
                    break;
                default:
                    break;
            }
            llk *= (0,_common__WEBPACK_IMPORTED_MODULE_2__.StyleSizeNumber)(size, sb);
            let ml = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Line();
            // set len
            or == 'horizontal'
                ? sd == 'down' || sd == 'up'
                    ? ml.plot([
                        [0, 0],
                        [0, rb.height * llk],
                    ])
                    : ml.plot([
                        [0, 0],
                        [0, rb.height * llk * 2],
                    ])
                : sd == 'down' || sd == 'up'
                    ? ml.plot([
                        [0, 0],
                        [rb.width * llk, 0],
                    ])
                    : ml.plot([
                        [0, 0],
                        [rb.width * llk * 2, 0],
                    ]);
            ml.stroke(Object.assign({}, color));
            return ml;
        };
        // coordinates
        tickKindOrder.forEach((el) => {
            if (t) {
                if (t[el]) {
                    let count = Math.floor((p.max - p.min) / t[el].step);
                    // distance between ticks
                    let len = or == 'horizontal'
                        ? rb.width / count
                        : rb.height / count;
                    for (let i = 0; i < count + 1; i++) {
                        let r = or == 'horizontal'
                            ? rb.x + len * i
                            : rb.y2 - len * i;
                        switch (el) {
                            case 'main':
                                res.main.push(r);
                                break;
                            case 'half':
                                !res.main.includes(r) && res.half.push(r);
                                break;
                            case 'subhalf':
                                !res.main.includes(r) &&
                                    !res.half.includes(r) &&
                                    res.subhalf.push(r);
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
            // draw ticks
            res[el].forEach((cel) => {
                let sd = this.ticks[el].side;
                let noUseLine = tline(el, sd, t[el].size, t[el].sizeBase, t[el].stroke);
                if (or == 'horizontal') {
                    let horCor = cel - noUseLine.bbox().w / 2;
                    sd == 'down' &&
                        noUseLine.move(horCor, rb.y2 - rb.height / 2);
                    sd == 'up' &&
                        noUseLine.move(horCor, rb.y - noUseLine.bbox().h + rb.height / 2);
                    if (sd == 'both') {
                        noUseLine.move(horCor, rb.y2 - noUseLine.bbox().h / 2 - rb.height / 2);
                    }
                }
                if (or == 'vertical') {
                    let verCor = cel - noUseLine.bbox().h / 2;
                    sd == 'down' &&
                        noUseLine.move(rb.x2 - rb.width / 2, verCor);
                    sd == 'up' &&
                        noUseLine.move(rb.x - noUseLine.bbox().w + rb.width / 2, verCor);
                    sd == 'both' &&
                        noUseLine.move(rb.x2 - noUseLine.bbox().w / 2 - rb.width / 2, verCor);
                }
                this.ticksGroup.add(noUseLine);
            });
        });
    }
    // demo one
    static demo(draw) {
        const pz = () => {
            return { x: 0, y: 0 };
        };
        const slruller = () => {
            return new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                .width(120)
                .height(10)
                .fill({ color: '#F5F5F5' })
                .radius(4)
                .stroke({ color: '#D2D2D2' });
        };
        const slfiller = () => {
            return new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                .height(10)
                .fill({ color: '#00A1F1' })
                .radius(4)
                .stroke({ color: 'black', width: 2 });
        };
        const slcirc = () => {
            return new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Circle()
                .radius(10)
                .fill({ color: '#FFBB00' })
                .stroke({ color: 'black', width: 1 });
        };
        const payload = () => {
            return {
                min: 20,
                max: 130,
                value: 100,
                precision: 0,
                step: 1,
            };
        };
        const ntitle = () => {
            return {
                value: '0',
                fill: { color: 'black' },
                font: 'Menlo',
                size: 12,
                position: { x: 0, y: 0 },
                fontWeight: 'normal',
            };
        };
        const background = () => {
            return {
                width: 180,
                height: 120,
                fill: { color: '#F5F5F5' },
                stroke: { color: '#D2D2D2' },
                radius: 5,
                position: { x: 0, y: 0 },
            };
        };
        const title = () => {
            return {
                value: 'tds-slider, %:',
                fill: { color: 'black' },
                font: 'Menlo',
                size: 12,
                position: { x: 0, y: 0 },
                fontWeight: 'normal',
            };
        };
        const llb1 = () => {
            let llb = new _label__WEBPACK_IMPORTED_MODULE_3__.label({
                title: title(),
                backgroundRule: ['none'],
                background: background(),
                indents: [10, 10, 10, 10],
                position: pz(),
            });
            return llb;
        };
        const ntt = () => {
            return new _textbox__WEBPACK_IMPORTED_MODULE_4__.textbox({
                label: {
                    title: ntitle(),
                    position: { x: 0, y: 0 },
                    background: background(),
                    backgroundRule: ['indent'],
                    indents: [5, 3, 5, 3],
                },
                inputType: 'number',
            });
        };
        let nonCirclePin = new slider({
            title: llb1(),
            payload: {
                min: 25,
                max: 750,
                step: 1,
                precision: 0,
                value: 400,
            },
            ruller: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                .width(240)
                .height(10)
                .radius(5)
                .fill({ color: '#E6E6E6' })
                .stroke({ color: '#D2D2D2', width: 1 }),
            filler: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                .height(10)
                .fill({ color: '#4D7D78' })
                .radius(5)
                .stroke({ color: 'black', width: 2 }),
            pin: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Path({
                d: 'M10.0558 5.93845C10.0558 4.001 12.535 3.19545 13.6738 4.76288L16.0345 8.01208C16.5438 8.71305 17.4465 9.00637 18.2706 8.73862L22.0902 7.49754C23.9328 6.89883 25.4651 9.00779 24.3263 10.5752L21.9656 13.8244C21.4563 14.5254 21.4563 15.4746 21.9656 16.1756L24.3263 19.4247C25.4651 20.9922 23.9328 23.1011 22.0902 22.5024L18.2705 21.2614C17.4465 20.9936 16.5438 21.2869 16.0345 21.9879L13.6738 25.2371C12.535 26.8045 10.0558 25.999 10.0558 24.0615L10.0558 20.0453C10.0558 19.1788 9.49785 18.4109 8.6738 18.1432L4.85414 16.9021C3.01152 16.3034 3.01152 13.6966 4.85414 13.0979L8.67381 11.8568C9.49785 11.589 10.0558 10.8211 10.0558 9.95468L10.0558 5.93845Z',
            })
                .width(32)
                .height(32)
                .fill({ color: '#E63946' })
                .stroke({ color: 'black', width: 2 })
                .draggable(),
            valueBox: ntt(),
            orientation: 'horizontal',
            sliderType: 'general',
            ticks: {
                main: {
                    step: 200,
                    side: 'both',
                    stroke: { color: 'green', dasharray: '5 5' },
                },
                half: undefined,
                subhalf: undefined,
            },
        }).draggable();
        nonCirclePin.valueBox.remove();
        nonCirclePin.title.remove();
        nonCirclePin.title.move(0, -20);
        draw.add(nonCirclePin);
        let sl = new slider({
            payload: payload(),
            ruller: slruller(),
            filler: slfiller(),
            pin: slcirc().draggable(),
            valueBox: ntt(),
            title: llb1(),
            orientation: 'horizontal',
            sliderType: 'general',
        }).draggable();
        sl.valueBox.move(135, -5);
        sl.title.move(0, -20);
        sl.move(0, 0);
        draw.add(sl);
        // let mt = new Line()
        //   .line([
        //     [0, 0],
        //     [0, owner.ruller.height() * 1.5],
        //   ])
        //   .stroke({ color: '#999999', width: 1 })
        //   .id('mainTick')
        let mt = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Line()
            .plot([
            [0, 0],
            [0, 30],
        ])
            .stroke({
            color: '#F25F5C',
            width: 5,
        });
        sl.title.value = `Hello, I'm slider :)`;
        //?-------------------------------------------------ticks
        let vmtick = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
            .width(5)
            .height(25)
            .radius(2)
            .fill({ color: '#3F8EFC' })
            .stroke({ color: 'black', width: 1 });
        let slt = new slider({
            payload: {
                min: 0,
                max: 100,
                value: 74,
                precision: 0,
                step: 10,
            },
            ruller: slruller(),
            filler: slfiller(),
            pin: slcirc().draggable(),
            valueBox: ntt(),
            title: llb1(),
            orientation: 'horizontal',
            sliderType: 'general',
            ticks: {
                main: {
                    step: 60,
                    side: 'both',
                    size: 'xxs',
                    sizeBase: 1,
                    stroke: {
                        color: 'red',
                        opacity: 0.5,
                        dasharray: '2 2',
                    },
                },
                half: {
                    step: 50,
                    side: 'both',
                    size: 'l',
                    sizeBase: 0.5,
                    stroke: {
                        color: 'green',
                        width: 2,
                        opacity: 1,
                        dasharray: '2 2',
                    },
                },
                subhalf: {
                    step: 5,
                    side: 'down',
                },
            },
        }).draggable();
        slt.pin.fill({ opacity: 0.5 });
        slt.valueBox.move(135, -5);
        slt.title.move(35, -30);
        draw.add(slt);
        slt.title.value = `and I !`;
        let dl = new slider({
            payload: {
                min: 0,
                max: 64,
                value: 32,
                precision: 0,
                step: 8,
            },
            ruller: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                .width(10)
                .height(120)
                .fill({ color: '#F5F5F5' })
                .stroke({ color: '#D2D2D2', width: 1 })
                .radius(4),
            filler: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                .width(10)
                .fill({ color: '#F65314' })
                .stroke({ color: 'black', width: 2 })
                .radius(4),
            pin: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Circle()
                .radius(10)
                .fill({ color: '#FFBB00', opacity: 0.5 })
                .stroke({ color: 'black', width: 1 })
                .draggable(),
            valueBox: ntt(),
            title: llb1(),
            orientation: 'vertical',
            ticks: {
                main: {
                    step: 32,
                    side: 'up',
                    size: 'xxl',
                    sizeBase: 2,
                    stroke: {
                        color: 'black',
                        opacity: 0.2,
                        dasharray: '5 5',
                    },
                },
                half: {
                    step: 24,
                    side: 'up',
                    size: 'xxl',
                    sizeBase: 3,
                    stroke: {
                        color: 'black',
                        opacity: 0.2,
                        dasharray: '5 5',
                    },
                },
                subhalf: {
                    step: 4,
                    side: 'both',
                    stroke: { color: 'transparent' },
                },
            },
        }).draggable();
        dl.valueBox.move(-10, 135);
        dl.title.value = `... and We, 4-8 inside `;
        dl.title.move(-40, -25);
        draw.add(dl);
        const hmtick = () => {
            return new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                .width(25)
                .height(5)
                .radius(2)
                .fill({ color: '#3F8EFC' })
                .stroke({ color: 'black', width: 1 });
        };
        let dl1 = new slider({
            payload: {
                min: 0,
                max: 64,
                value: 32,
                precision: 0,
                step: 4,
            },
            ruller: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                .width(10)
                .height(120)
                .fill({ color: '#F5F5F5' })
                .stroke({
                color: '#D2D2D2',
                width: 1,
            })
                .radius(4),
            filler: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                .width(10)
                .fill({ color: '#F65314' })
                .stroke({ color: 'black', width: 2 })
                .radius(4),
            pin: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Circle()
                .radius(10)
                .fill({ color: '#FFBB00', opacity: 0.5 })
                .stroke({ color: 'black', width: 1 })
                .draggable(),
            valueBox: ntt(),
            title: llb1(),
            orientation: 'vertical',
            ticks: {
                main: {
                    step: 32,
                    side: 'down',
                    stroke: { color: 'transparent' },
                },
                half: {
                    step: 24,
                    side: 'down',
                    stroke: { color: 'transparent' },
                },
                subhalf: { step: 4, side: 'both' },
                // half: undefined,
                // main: undefined,
                // subhalf: undefined,
            },
        }).draggable();
        dl1.valueBox.move(-10, 135);
        dl1.title.value = `\u2800`;
        dl1.title.move(-40, -25);
        draw.add(dl1);
        let sw = new slider({
            payload: {
                min: 0,
                max: 1,
                step: 1,
                precision: 0,
                value: 1,
            },
            ruller: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                .width(25)
                .height(10)
                .fill({ color: '#F25F5C' })
                .stroke({ color: 'black', width: 1 })
                .radius(4),
            filler: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                .height(10)
                .fill({ color: '#7CBB00' })
                .stroke({ color: 'black', width: 2 })
                .radius(4),
            pin: new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                .width(20)
                .height(20)
                .radius(5)
                .fill({ color: '#FFBB00' })
                .stroke({ color: 'black', width: 1 })
                .draggable(),
            valueBox: ntt(),
            title: llb1(),
            orientation: 'horizontal',
            sliderType: 'twostate',
        }).draggable();
        sw.title.value = 'me too !!... state )';
        sw.title.move(-10, -25);
        draw.add(sw);
        return {
            horizontal: sl,
            vertical: [dl, dl1],
            htwostate: sw,
            tickHor: slt,
            nonCirclePin: nonCirclePin,
        };
    }
}
_orientation = new WeakMap(), _sliderType = new WeakMap();


/***/ }),

/***/ "../tds-shapes/src/style.ts":
/*!**********************************!*\
  !*** ../tds-shapes/src/style.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleClasses": () => (/* binding */ StyleClasses),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label */ "../tds-shapes/src/label.ts");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ "../tds-shapes/src/title.ts");




const StyleClasses = [
    'tds-stylegroup',
    'tds-stylecross',
    'tds-styleoutline',
    'tds-borderline',
    'tds-styleindent',
];
const style = (el, draggable) => {
    return {
        add: () => {
            let sg;
            if (!el.parent().hasClass('tds-stylegroup')) {
                sg = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G().addClass('tds-stylegroup');
                let elp = el.parents();
                elp[0].add(sg);
                el.addTo(sg);
            }
            else {
                let elpa = el.parents();
                let lpg = elpa[0];
                lpg instanceof _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G ? (sg = lpg) : 0;
            }
            if (draggable)
                sg.draggable();
            return {
                cross: (s, size, label) => {
                    sg.children()
                        .filter((el) => el.hasClass('tds-stylecross'))
                        .map((el) => el.remove());
                    let k = (0,_common__WEBPACK_IMPORTED_MODULE_1__.StyleSizeNumber)(size);
                    let k1 = el.bbox().width / el.bbox().height;
                    let hll = k * el.bbox().width;
                    let vll = k * el.bbox().height;
                    let hl = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Line()
                        .addClass('tds-stylecross')
                        .plot([
                        [0, 0],
                        [hll, 0],
                    ])
                        .stroke(Object.assign({}, s))
                        .cx(el.cx())
                        .cy(el.cy());
                    let vl = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Line()
                        .addClass('tds-stylecross')
                        .plot([
                        [0, 0],
                        [0, vll],
                    ])
                        .stroke(Object.assign({}, s))
                        .cx(el.cx())
                        .cy(el.cy());
                    if (label) {
                        let st = new _title__WEBPACK_IMPORTED_MODULE_3__.title({
                            value: label,
                            fontWeight: 'normal',
                            font: 'Menlo',
                            size: 8,
                            fill: { color: 'black' },
                            position: {
                                x: vl.bbox().x2 + 5,
                                y: vl.bbox().y2 - 5,
                            },
                        }).addClass('tds-stylecross');
                        sg.add(st);
                    }
                    sg.add(hl).add(vl);
                },
                outline: (f, s, label) => {
                    sg.children()
                        .filter((el) => el.hasClass('tds-styleoutline'))
                        .map((el) => el.remove());
                    let elb = el.bbox();
                    let or = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
                        .addClass('tds-styleoutline')
                        .width(elb.width)
                        .height(elb.height)
                        .fill(Object.assign({}, f))
                        .stroke(Object.assign({}, s))
                        .cx(el.cx())
                        .cy(el.cy());
                    if (label) {
                        let st = new _title__WEBPACK_IMPORTED_MODULE_3__.title({
                            value: label,
                            fontWeight: 'normal',
                            font: 'Menlo',
                            size: 8,
                            fill: { color: 'black' },
                            position: {
                                x: el.bbox().x2,
                                y: el.bbox().y2,
                            },
                        }).addClass('tds-styleoutline');
                        sg.add(st);
                    }
                    sg.add(or);
                },
                borderLines: (sides, s, size, label) => {
                    sg.children()
                        .filter((el) => el.hasClass('tds-borderline'))
                        .map((el) => el.remove());
                    const fll = () => {
                        let fl = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Line()
                            .stroke(Object.assign({}, s))
                            .addClass('tds-borderline');
                        return fl;
                    };
                    let elb = el.bbox();
                    let k = (0,_common__WEBPACK_IMPORTED_MODULE_1__.StyleSizeNumber)(size);
                    let hll = elb.width * k * 1.5;
                    let vll = elb.height * k * 2;
                    let l;
                    sides.forEach((m, i) => {
                        if (m) {
                            l = fll();
                            // top -- bottom
                            if (i % 2) {
                                if (i == 1) {
                                    // top
                                    l.plot([
                                        [0, 0],
                                        [hll, 0],
                                    ]);
                                    l.cx(elb.x + elb.width / 2);
                                    l.cy(elb.y);
                                }
                                else {
                                    // bottom
                                    l.plot([
                                        [0, 0],
                                        [hll, 0],
                                    ]);
                                    l.cx(elb.x + elb.width / 2);
                                    l.cy(elb.y + elb.height);
                                }
                            }
                            else {
                                // left
                                if (i == 0) {
                                    l.plot([
                                        [0, 0],
                                        [0, vll],
                                    ]);
                                    l.cx(elb.x);
                                    l.cy(elb.y + elb.height / 2);
                                }
                                else {
                                    // right
                                    l.plot([
                                        [0, 0],
                                        [0, vll],
                                    ]);
                                    l.cx(elb.x2);
                                    l.cy(elb.y2 - elb.height / 2);
                                }
                            }
                            sg.add(l);
                        }
                    });
                    if (label) {
                        let lel = el
                            .parent()
                            .children()
                            .filter((el) => el.hasClass('tds-borderline'))[0];
                        let st = new _title__WEBPACK_IMPORTED_MODULE_3__.title({
                            value: label,
                            fontWeight: 'normal',
                            font: 'Menlo',
                            size: 8,
                            fill: { color: 'black' },
                            position: {
                                x: lel.bbox().x2 + 5,
                                y: lel.bbox().y2 - 5,
                            },
                        }).addClass('tds-borderline');
                        sg.add(st);
                    }
                },
                indent: (t, s, label) => {
                    sg.children()
                        .filter((el) => el.hasClass('tds-styleindent'))
                        .map((el) => el.remove());
                    const fll = () => {
                        let fl = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Line()
                            .stroke(Object.assign({}, s))
                            .addClass('tds-styleindent');
                        return fl;
                    };
                    let elb = el.bbox();
                    let tlb = t.bbox();
                    // left
                    let lll = elb.x - tlb.x;
                    if (lll > 0) {
                        let yx = elb.y + elb.height * 0.2;
                        let l = fll().plot([
                            [elb.x, yx],
                            [tlb.x, yx],
                        ]);
                        sg.add(l);
                    }
                    // top
                    let tll = elb.y - tlb.y;
                    if (tll > 0) {
                        let yx = elb.x + elb.width * 0.2;
                        let l = fll().plot([
                            [yx, elb.y],
                            [yx, tlb.y],
                        ]);
                        sg.add(l);
                    }
                    // right
                    let rll = elb.x2 - tlb.x2;
                    if (rll < 0) {
                        let yx = elb.y2 - elb.height * 0.2;
                        let l = fll().plot([
                            [elb.x2, yx],
                            [tlb.x2, yx],
                        ]);
                        sg.add(l);
                    }
                    // bottom
                    let bll = elb.y2 - tlb.y2;
                    if (bll < 0) {
                        let yx = elb.x2 - elb.width * 0.2;
                        let l = fll().plot([
                            [yx, elb.y2],
                            [yx, tlb.y2],
                        ]);
                        sg.add(l);
                    }
                    if (label) {
                        let ttx = sg
                            .children()
                            .filter((el) => el.hasClass('tds-styleindent'))[0]
                            .bbox();
                        let st = new _title__WEBPACK_IMPORTED_MODULE_3__.title({
                            value: label,
                            fontWeight: 'normal',
                            font: 'Menlo',
                            size: 8,
                            fill: { color: 'black' },
                            position: {
                                x: ttx.x + 5,
                                y: ttx.y + 5,
                            },
                        }).addClass('tds-styleindent');
                        sg.add(st);
                    }
                },
            };
        },
        clear: (el) => { },
        demo: (draw) => {
            const title = () => {
                return {
                    value: 'Äqbc..,!jŠ',
                    fill: { color: 'black' },
                    font: 'Menlo',
                    size: 22,
                    position: { x: 200, y: -70 },
                    fontWeight: 'normal',
                };
            };
            const outline = () => {
                return {
                    width: 230,
                    height: 80,
                    fill: { color: '#F5F5F5' },
                    stroke: { color: '#D2D2D2' },
                    radius: 15,
                    position: { x: 0, y: 0 },
                };
            };
            const pz = () => {
                return { x: 0, y: 0 };
            };
            let l = new _label__WEBPACK_IMPORTED_MODULE_2__.label({
                title: title(),
                // 'none',
                backgroundRule: ['direct'],
                // 'indent',
                // 'centered',
                // 'margins',
                background: outline(),
                indents: [0, 0, 0, 0],
                position: {
                    x: 200,
                    y: 200,
                },
            }).draggable();
            draw.add(l);
            style(l.background, true).add().cross({
                color: '#3F8EFC',
                width: 2,
                opacity: 0.7,
                dasharray: '5 5',
            }, 'l', `outline center`);
            style(l.title).add().cross({
                color: '#3F8EFC',
                width: 1,
                opacity: 1,
                dasharray: '5 5',
            }, 'l', 'label center');
            style(l.background)
                .add()
                .outline({ color: '#F25F5C', opacity: 0.2 }, { color: 'black', opacity: 0.5 }, 'outline bbox');
            style(l.title)
                .add()
                .outline({ color: '#F25F5C', opacity: 0.2 }, { color: 'black', opacity: 0.5 }, 'label bbox');
            style(l.background).add().borderLines([1, 1, 0, 0], {
                color: 'red',
                width: 3,
                opacity: 0.2,
            }, 'xs', 'border line');
            style(l.title).add().indent(l.background, {
                color: 'black',
                width: 1,
                opacity: 0.5,
                dasharray: '2 2',
            }, 'indent');
            let rt = draw
                .rect(140, 100)
                .fill({ color: '#00A1F1', opacity: 1 })
                .stroke({ color: '#000000', width: 1 })
                .move(220, 100)
                .radius(20);
            style(rt, true)
                .add()
                .cross({ color: 'black', width: 1, dasharray: '5 5' }, 'm', 'rect cross');
            style(rt)
                .add()
                .borderLines([0, 0, 1, 1], { color: '#F65314', opacity: 0.4, width: 2 }, 'xxs', 'rect side');
            style(rt).add().indent(l.title, {
                color: 'black',
                width: 1,
                dasharray: '2 2',
                opacity: 0.5,
            }, 'rect to title indent');
            let rt1 = draw
                .rect(20, 20)
                .fill({ color: '#EA3E23', opacity: 1 })
                .stroke({ color: '#000000', width: 2 })
                .move(390, 320)
                .radius(5);
            style(rt1)
                .add()
                .cross({ color: 'black', width: 1, dasharray: '2 2' }, 'm');
            style(rt1, true).add().indent(draw, {
                color: 'black',
                width: 1,
                dasharray: '2 2',
            }, 'red point indent');
        },
    };
};


/***/ }),

/***/ "../tds-shapes/src/textarea.ts":
/*!*************************************!*\
  !*** ../tds-shapes/src/textarea.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textareaDefStyle": () => (/* binding */ textareaDefStyle),
/* harmony export */   "extendsTittleDefStyle": () => (/* binding */ extendsTittleDefStyle),
/* harmony export */   "extendsHeaderDefStyle": () => (/* binding */ extendsHeaderDefStyle),
/* harmony export */   "textarea": () => (/* binding */ textarea)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title */ "../tds-shapes/src/title.ts");



/** default body style for textarea */
const textareaDefStyle = {
    width: 236,
    height: 80,
    fill: { color: '#D2D2D2' },
    stroke: { color: '#999999', width: 1 },
    radius: 6,
    position: { x: 0, y: 0 },
};
/** default style for single row */
const extendsTittleDefStyle = {
    value: '\u2800',
    font: 'Menlo',
    fontWeight: 'normal',
    size: 12,
    position: { x: 10, y: 10 },
    fill: { color: 'black' },
};
/** default style for header row */
const extendsHeaderDefStyle = {
    value: 'textArea:',
    font: 'Menlo',
    fontWeight: 'normal',
    size: 12,
    position: { x: 0, y: -15 },
    fill: { color: 'black' },
};
/**
 * smth like this: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
 */
class textarea extends _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G {
    /**
     * create textarea  instance
     * @param attr - BackgroundStyle, TitleStyle, data - directly the string to be displayed
     */
    constructor(attr) {
        super();
        /** collection of titles when data in SVG mode */
        this.rows = [];
        /** max allowed row lenght */
        this.rowLen = 0;
        /** max number of rows allowed */
        this.maxRows = 0;
        /** dom element id */
        this.inputID = (0,_common__WEBPACK_IMPORTED_MODULE_1__.Create_ID)();
        if (attr.position) {
            attr.body.position.x += attr.position.x;
            attr.body.position.y += attr.position.y;
        }
        // body
        this.body = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect()
            .width(attr.body.width)
            .height(attr.body.height)
            .fill(Object.assign({}, attr.body.fill))
            .stroke(Object.assign({}, attr.body.stroke))
            .radius(attr.body.radius)
            .x(attr.body.position.x)
            .y(attr.body.position.y);
        this.add(this.body);
        // adds title if available
        if (attr.headerTitleStyle) {
            // correct position according to 'body'
            attr.headerTitleStyle.position.x += attr.body.position.x;
            attr.headerTitleStyle.position.y += attr.body.position.y;
            this.title = new _title__WEBPACK_IMPORTED_MODULE_2__.title(attr.headerTitleStyle);
            this.add(this.title);
        }
        // calc single sing lenght and overal no wrap string
        attr.rowLen
            ? (this.rowLen = attr.rowLen)
            : (this.rowLen = this.setRowLen(attr.body.width, attr.rowsTitleStyle));
        // calc single row height and overal rows count
        attr.maxRows
            ? (this.maxRows = attr.maxRows)
            : (this.maxRows = this.setMaxRows(attr.body.height, attr.rowsTitleStyle, 0.7));
        // adds rows to body
        this.fillRows(attr.data, this.rowLen, attr.rowsTitleStyle);
        // hide input before drag
        this.on('beforedrag', () => {
            this.reset();
        });
        // handle click - start edit
        this.on('click', () => {
            //dblclick
            if (!attr.disallowDirect)
                this.changeHandler();
        });
    }
    /**
     * adds to canvas <foreignObject> with <textarea>
     * @param ta textarea instance
     */
    changeHandler() {
        // id for foreing element
        let frid = (0,_common__WEBPACK_IMPORTED_MODULE_1__.Create_ID)();
        // create foreign object
        this.input = this.root()
            .element('foreignObject')
            .attr({
            width: this.body.width() + 20,
            height: this.body.height() + 20,
            x: this.body.bbox().x + 3,
            y: this.body.bbox().y + 3,
            id: frid,
        });
        let _v = this.value;
        if (_v == '\u2800') {
            _v = '';
        }
        // DOM string of input
        let inputHTML = `<textarea id="${this.inputID}" 
                                  class="txtinput"
                                  style="resize:none;width:90%;height:90%;font-family:Menlo;font-size:"12">${_v}</textarea>`;
        // show input with new data
        this.input.node.innerHTML = inputHTML;
        this.setInputVisibility(true);
        // handle loose focus
        this.input.node.addEventListener('blur', () => {
            this.setInputVisibility(false);
            this.input.node.remove();
        }, true);
        // handle keyboard
        this.input.node.addEventListener('keydown', (ev) => {
            if (ev.key == 'Enter') {
                // if (!ev.shiftKey) {
                this.clearRows();
                let _v = this.getInput().value;
                // console.log(ta.getInput().innerHTML)
                _v == '' && (_v = '\u2800');
                this.fillRows(_v, this.rowLen, extendsTittleDefStyle);
                this.dispatch('tds-textarea-valuechanged', this);
                this.setInputVisibility(false);
            }
            //   }
            if (ev.key == 'Escape') {
                this.setInputVisibility(false);
            }
        }, true);
    }
    /** calculating line length depending on body width */
    setRowLen(bw, ta, f = 0.97) {
        return Math.floor((bw / new _title__WEBPACK_IMPORTED_MODULE_2__.title(ta).bbox().width) * f);
    }
    /** calculating maxRows depending on body height */
    setMaxRows(bh, ta, f = 0.97) {
        return Math.floor((bh / new _title__WEBPACK_IMPORTED_MODULE_2__.title(ta).bbox().height) * f);
    }
    /**
     * translate string to rows
     * @param data string for translate to rows
     * @param len max row lenght
     * @param style single row style
     */
    fillRows(data, len, style) {
        // store data localy
        this.value = data;
        // separate string to rows
        let rd = wordwrap(data, len);
        // check not more number then 'maxRow'
        let endFlag = 0;
        // iterate rows and adds labels to area
        rd.forEach((el, i) => {
            // if not last element
            if (endFlag == 0) {
                if (i < this.maxRows) {
                    // create instance for row
                    let _t = new _title__WEBPACK_IMPORTED_MODULE_2__.title(style);
                    _t.value = el;
                    // heck first
                    if (i == 0) {
                        this.rows.push(_t);
                        _t.y(this.body.y() + style.position.y);
                    }
                    else {
                        let ph = this.rows[i - 1].bbox();
                        _t.y(ph.y + ph.height);
                        this.rows.push(_t);
                    }
                    // add class property for ability remove
                    _t.addClass('tds-textarearow');
                    _t.x(this.body.x() + style.position.x);
                    this.add(_t);
                }
                else {
                    // if you have reached the maximum possible number of rows
                    let ss = this.rows[i - 1].value;
                    this.rows[i - 1].value = ss.slice(0, -3) + '...';
                    endFlag = 1;
                }
            }
        });
    }
    /**
     * realy clear rows
     */
    clearRows() {
        this.children()
            .filter((el) => el.hasClass('tds-textarearow'))
            .forEach((el) => el.remove());
        this.rows = []; //.slice(0, this.rows.length - 1)
    }
    /**
     * split rows to string
     * @returns resulted string
     */
    collectString() {
        let r = '';
        let rl = this.rows.length;
        this.rows.forEach((el, i) => {
            if (i < rl - 1)
                r += el.value + ' ';
            if (i == rl - 1)
                r += el.value;
        });
        return r.replace(/\s{2,}/g, ' ');
    }
    /** hide input */
    reset() {
        this.setInputVisibility(false);
    }
    /** get input as HTMLInputElement */
    getInput() {
        return document.getElementById(this.inputID);
    }
    /** hide/ show input field */
    setInputVisibility(isVisible) {
        var _a, _b;
        let el = this.getInput();
        if (isVisible) {
            this.body.hide();
            this.input.node.setAttribute('style', 'display: inline-block;');
            el.focus();
            el.selectionEnd = el.selectionStart = this.value.length;
        }
        else {
            this.body.show();
            if (this.input)
                (_b = (_a = this.input) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.setAttribute('style', 'display: none;');
        }
    }
}
/** word wrap */
function wordwrap(str, width) {
    let strn = str
        .replace(new RegExp(`(?:\\S(?:.{0,${width}}\\S)?(?:\\s+|-|$)|(?:\\S{${width}}))`, 'g'), (s) => `${s}\n`)
        .slice(0, -1);
    return strn.split('\n');
}


/***/ }),

/***/ "../tds-shapes/src/textbox.ts":
/*!************************************!*\
  !*** ../tds-shapes/src/textbox.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textbox": () => (/* binding */ textbox)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label */ "../tds-shapes/src/label.ts");


/**
 * the label that has abbilyty to change title value with direct input
 */
class textbox extends _label__WEBPACK_IMPORTED_MODULE_1__.label {
    constructor(attr) {
        super(attr.label);
        this.inputID = (0,_common__WEBPACK_IMPORTED_MODULE_0__.Create_ID)();
        this.id((0,_common__WEBPACK_IMPORTED_MODULE_0__.Create_ID)()).addClass('tds-textbox');
        this.inputType = attr.inputType;
        this.on('click', () => {
            changeHandler(this);
        });
        let tf = 0;
        this.on('touchstart', (ev) => {
            // changeHandler(this)
            tf = 1;
            setTimeout(() => {
                tf == 1 && changeHandler(this);
            }, 1000);
            console.log('touchstart');
        });
        this.on('touchend', (ev) => {
            // changeHandler(this)
            tf = 0;
            console.log('touchend');
        });
        this.on('touchcancel', (ev) => {
            // changeHandler(this)
            console.log('touchcancel');
        });
        this.on('touchmove', (ev) => {
            // changeHandler(this)
            tf = 0;
            console.log('touchmove');
        });
        function changeHandler(tb) {
            // id for foreing element
            let frid = (0,_common__WEBPACK_IMPORTED_MODULE_0__.Create_ID)();
            // create foreign object
            tb.input = tb
                .root()
                .element('foreignObject')
                .attr({
                width: tb.width() + 20,
                height: tb.height() + 20,
                x: tb.title.bbox().x - 3,
                y: tb.title.bbox().y - 3,
                id: frid,
            });
            // value to transfer to input
            tb.dispatch('tds-textbox-beforechange', tb);
            let _v = tb.title.value;
            if (_v == '\u2800') {
                _v = '';
            }
            // DOM string of input
            let inputHTML = `<input id="${tb.inputID}" 
                                class="txtinput"
                                value="${_v}" 
                                type="${tb.inputType}"
                                size="1" 
                                style="width:100%;">
                        </input>`;
            // show input with new data
            tb.input.node.innerHTML = inputHTML;
            tb.setInputVisibility(true);
            tb.dispatch('tds-textbox-changingStart', tb);
            // handle loose focus
            tb.input.node.addEventListener('blur', () => {
                tb.setInputVisibility(false);
                tb.input.node.remove();
                tb.dispatch('tds-textbox-changingEnd', tb);
            }, true);
            // handle keyboard
            tb.input.node.addEventListener('keydown', (ev) => {
                if (ev.key == 'Enter') {
                    let _v = tb.getInput().value;
                    _v !== ''
                        ? (tb.value = _v)
                        : tb.inputType == 'text'
                            ? (tb.value = '\u2800')
                            : (tb.value = Number(0).toString());
                    tb.setInputVisibility(false);
                }
                if (ev.key == 'Escape') {
                    tb.setInputVisibility(false);
                    tb.dispatch('tds-textbox-changingCancel', tb);
                }
            }, true);
        }
    }
    reset() {
        this.setInputVisibility(false);
    }
    /** get input as HTMLInputElement */
    getInput() {
        return document.getElementById(this.inputID);
    }
    /** hide/ show input field */
    setInputVisibility(isVisible) {
        var _a, _b;
        let el = this.getInput();
        if (isVisible) {
            this.hide();
            this.input.node.setAttribute('style', 'display: inline-block;');
            // set focus and move cursor to end
            el.focus();
            // if input type is 'text'
            this.inputType == 'text'
                ? (el.selectionEnd = el.selectionStart = this.value.length)
                : 0;
        }
        else {
            this.show();
            if (this.input)
                (_b = (_a = this.input) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.setAttribute('style', 'display: none;');
        }
    }
}


/***/ }),

/***/ "../tds-shapes/src/title.ts":
/*!**********************************!*\
  !*** ../tds-shapes/src/title.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../tds-shapes/src/common.ts");


/**
 * create <text> node
 * @param attr Type - TitleStyle
 * @returns Text object, <text> node
 */
const createText = (attr) => {
    var _a, _b;
    let title = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Text();
    // direct set value to node
    title.node.innerHTML = attr.value;
    title.attr({
        'font-family': attr.font,
        'font-size': attr.size,
        'font-weight': attr.fontWeight,
    });
    let ts = title.bbox();
    title.attr({
        fill: attr.fill.color,
        'fill-opacity': attr.fill.opacity,
        x: (_a = attr.position) === null || _a === void 0 ? void 0 : _a.x,
        y: ((_b = attr.position) === null || _b === void 0 ? void 0 : _b.y) + ts.height - ts.y2,
    });
    return title;
};
/**
 * text
 */
class title extends _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Text {
    constructor(attr) {
        super();
        Object.assign(this, createText(attr));
        this.id((0,_common__WEBPACK_IMPORTED_MODULE_1__.Create_ID)()).addClass('tds-title');
    }
    // value operations
    /** get string from node */
    get value() {
        return this.node.innerHTML;
    }
    /** set string to node */
    set value(v) {
        this.node.innerHTML = v;
    }
    /**
     * coordinates depending on the font height
     */
    get topleft() {
        let bb = this.bbox();
        return { x: this.x(), y: this.y() + bb.height - bb.y2 };
    }
}


/***/ }),

/***/ "../tds-shapes/tds-shapes-entry.ts":
/*!*****************************************!*\
  !*** ../tds-shapes/tds-shapes-entry.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Create_ID": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.Create_ID),
/* harmony export */   "GRID_STEP": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.GRID_STEP),
/* harmony export */   "ListAttrDefault": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.ListAttrDefault),
/* harmony export */   "ListAttrGroupDefault": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.ListAttrGroupDefault),
/* harmony export */   "StyleSizeNumber": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.StyleSizeNumber),
/* harmony export */   "createPinPoint": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.createPinPoint),
/* harmony export */   "createTempLine": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.createTempLine),
/* harmony export */   "distP": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.distP),
/* harmony export */   "getRandomColor": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.getRandomColor),
/* harmony export */   "iconPath": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.iconPath),
/* harmony export */   "isPointInCircle": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.isPointInCircle),
/* harmony export */   "objectMerge": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.objectMerge),
/* harmony export */   "pointInRect": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.pointInRect),
/* harmony export */   "pointInRectBox": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.pointInRectBox),
/* harmony export */   "rndX": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.rndX),
/* harmony export */   "shapeStackAtPoint": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.shapeStackAtPoint),
/* harmony export */   "shrinkString": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.shrinkString),
/* harmony export */   "vTo01": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.vTo01),
/* harmony export */   "StyleClasses": () => (/* reexport safe */ _src_style__WEBPACK_IMPORTED_MODULE_1__.StyleClasses),
/* harmony export */   "style": () => (/* reexport safe */ _src_style__WEBPACK_IMPORTED_MODULE_1__.style),
/* harmony export */   "title": () => (/* reexport safe */ _src_title__WEBPACK_IMPORTED_MODULE_2__.title),
/* harmony export */   "background": () => (/* reexport safe */ _src_background__WEBPACK_IMPORTED_MODULE_3__.background),
/* harmony export */   "label": () => (/* reexport safe */ _src_label__WEBPACK_IMPORTED_MODULE_4__.label),
/* harmony export */   "textbox": () => (/* reexport safe */ _src_textbox__WEBPACK_IMPORTED_MODULE_5__.textbox),
/* harmony export */   "slider": () => (/* reexport safe */ _src_slider__WEBPACK_IMPORTED_MODULE_6__.slider),
/* harmony export */   "separator": () => (/* reexport safe */ _src_separator__WEBPACK_IMPORTED_MODULE_7__.separator),
/* harmony export */   "ItemDefaultBehavior": () => (/* reexport safe */ _src_listItem__WEBPACK_IMPORTED_MODULE_8__.ItemDefaultBehavior),
/* harmony export */   "listItem": () => (/* reexport safe */ _src_listItem__WEBPACK_IMPORTED_MODULE_8__.listItem),
/* harmony export */   "listItemGrouped": () => (/* reexport safe */ _src_listItemGrouped__WEBPACK_IMPORTED_MODULE_9__.listItemGrouped),
/* harmony export */   "list": () => (/* reexport safe */ _src_list__WEBPACK_IMPORTED_MODULE_10__.list),
/* harmony export */   "combobox": () => (/* reexport safe */ _src_combobox__WEBPACK_IMPORTED_MODULE_11__.combobox),
/* harmony export */   "mitem": () => (/* reexport safe */ _src_mitem__WEBPACK_IMPORTED_MODULE_12__.mitem),
/* harmony export */   "mitemCreator": () => (/* reexport safe */ _src_mitem__WEBPACK_IMPORTED_MODULE_12__.mitemCreator),
/* harmony export */   "extendsHeaderDefStyle": () => (/* reexport safe */ _src_textarea__WEBPACK_IMPORTED_MODULE_13__.extendsHeaderDefStyle),
/* harmony export */   "extendsTittleDefStyle": () => (/* reexport safe */ _src_textarea__WEBPACK_IMPORTED_MODULE_13__.extendsTittleDefStyle),
/* harmony export */   "textarea": () => (/* reexport safe */ _src_textarea__WEBPACK_IMPORTED_MODULE_13__.textarea),
/* harmony export */   "textareaDefStyle": () => (/* reexport safe */ _src_textarea__WEBPACK_IMPORTED_MODULE_13__.textareaDefStyle),
/* harmony export */   "mitemjail": () => (/* reexport safe */ _src_mitemjail__WEBPACK_IMPORTED_MODULE_14__.mitemjail),
/* harmony export */   "mitemjailAttrDef": () => (/* reexport safe */ _src_mitemjail__WEBPACK_IMPORTED_MODULE_14__.mitemjailAttrDef),
/* harmony export */   "mitemjailBodyDefStyle": () => (/* reexport safe */ _src_mitemjail__WEBPACK_IMPORTED_MODULE_14__.mitemjailBodyDefStyle),
/* harmony export */   "mitemjailHeaderDefStyle": () => (/* reexport safe */ _src_mitemjail__WEBPACK_IMPORTED_MODULE_14__.mitemjailHeaderDefStyle),
/* harmony export */   "mitemjailRowDefStyle": () => (/* reexport safe */ _src_mitemjail__WEBPACK_IMPORTED_MODULE_14__.mitemjailRowDefStyle),
/* harmony export */   "nitemjailPinDefStyle": () => (/* reexport safe */ _src_mitemjail__WEBPACK_IMPORTED_MODULE_14__.nitemjailPinDefStyle)
/* harmony export */ });
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "../tds-shapes/src/common.ts");
/* harmony import */ var _src_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/style */ "../tds-shapes/src/style.ts");
/* harmony import */ var _src_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/title */ "../tds-shapes/src/title.ts");
/* harmony import */ var _src_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/background */ "../tds-shapes/src/background.ts");
/* harmony import */ var _src_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/label */ "../tds-shapes/src/label.ts");
/* harmony import */ var _src_textbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/textbox */ "../tds-shapes/src/textbox.ts");
/* harmony import */ var _src_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/slider */ "../tds-shapes/src/slider.ts");
/* harmony import */ var _src_separator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/separator */ "../tds-shapes/src/separator.ts");
/* harmony import */ var _src_listItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/listItem */ "../tds-shapes/src/listItem.ts");
/* harmony import */ var _src_listItemGrouped__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/listItemGrouped */ "../tds-shapes/src/listItemGrouped.ts");
/* harmony import */ var _src_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/list */ "../tds-shapes/src/list.ts");
/* harmony import */ var _src_combobox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/combobox */ "../tds-shapes/src/combobox.ts");
/* harmony import */ var _src_mitem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/mitem */ "../tds-shapes/src/mitem.ts");
/* harmony import */ var _src_textarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/textarea */ "../tds-shapes/src/textarea.ts");
/* harmony import */ var _src_mitemjail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/mitemjail */ "../tds-shapes/src/mitemjail.ts");

















/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _svgdotjs_svg_draggable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @svgdotjs/svg.draggable.js */ "./node_modules/@svgdotjs/svg.draggable.js/src/svg.draggable.js");
/* harmony import */ var _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tds-shapes/tds-shapes-entry */ "../tds-shapes/tds-shapes-entry.ts");
/* harmony import */ var _tds_shapes_src_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tds-shapes/src/common */ "../tds-shapes/src/common.ts");
/* harmony import */ var _tds_shapes_src_mitemjail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tds-shapes/src/mitemjail */ "../tds-shapes/src/mitemjail.ts");







const startMS = performance.now();
var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().size(1300, 1300).addTo('body');
//#region  DATA
/**
 * creating a label attributes
 * @param s text on label
 * @param p position
 * @returns LabelAttr instance
 */
const la = (s, p = { x: 0, y: 0 }) => {
    return {
        title: {
            value: typeof s == 'number' ? s.toString() : s,
            font: 'Menlo',
            fontWeight: 'normal',
            size: 12,
            fill: { color: 'black' },
            position: { x: 0, y: 0 },
        },
        background: {
            width: 5,
            height: 5,
            fill: { color: '#EEEEEE' },
            stroke: { color: '#D2D2D2', width: 1 },
            radius: 5,
            position: { x: 0, y: 0 },
        },
        backgroundRule: ['indent'],
        indents: [5, 3, 5, 3],
        position: { x: p.x, y: p.y },
    };
};
/**
 * creating a label with the specified properties
 * @param s text on label
 * @param p position
 * @returns label instance
 */
const lm = (s, p) => {
    return new _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.label(la(s, p)).draggable();
};
draw.add(lm('whĄt a beautiful day', { x: 40, y: 50 }));
draw.add(lm('wĤat a beautiful tree st͜ump', { x: 40, y: 70 }));
draw.add(lm('How beAutiful I Äm', { x: 40, y: 90 }));
draw.add(lm('and my s̬ong', { x: 40, y: 110 }));
draw.add(lm(21111977, { x: 40, y: 150 }));
draw.add(lm(27111981, { x: 40, y: 170 }));
draw.add(lm('08112006', { x: 40, y: 190 }));
/** text boxes */
let tb1 = new _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.textbox({
    label: la('hello', { x: 190, y: 120 }),
    inputType: 'text',
}).draggable();
draw.add(tb1);
let tb2 = new _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.textbox({
    label: la('1984', { x: 190, y: 140 }),
    inputType: 'number',
}).draggable();
draw.add(tb2);
let tb3 = new _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.textbox({
    label: la('1984 long data element', { x: 190, y: 160 }),
    inputType: 'text',
}).draggable();
draw.add(tb3);
/** slider demo item */
let slidersGroup = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G().addClass('draggable');
let sliderDemo = _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.slider.demo(draw);
slidersGroup
    .rect(400, 400)
    .radius(20)
    .fill({ color: '#EEEEEE' })
    .stroke({ color: '#D2D2D2', width: 1 });
let hs = sliderDemo.horizontal.draggable(false);
slidersGroup
    .move(90, 90)
    .draggable()
    .add(hs.move(200, 130))
    .add(sliderDemo.vertical[0].move(180, 176))
    .add(sliderDemo.vertical[1].move(120, 176))
    .add(sliderDemo.htwostate.move(280, 220))
    .add(sliderDemo.tickHor.move(280, 270))
    .add(sliderDemo.nonCirclePin.move(200, 400));
sliderDemo.htwostate.draggable(false);
sliderDemo.htwostate.on('tds-slider-valueChanged', (ev) => {
    console.log(ev.detail.payload.value);
});
draw.add(slidersGroup);
slidersGroup.move(100, 250);
// list
let ls = new _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.list(_tds_shapes_src_common__WEBPACK_IMPORTED_MODULE_3__.ListAttrDefault).draggable();
let b = [
    {
        itemPart: 'icon',
        behavior: [
            {
                condition: 'normal',
                attr: {
                    fill: { color: 'transparent' },
                    stroke: { color: 'red', width: 0.5 },
                },
            },
            {
                condition: 'onclick',
                attr: { fill: { color: 'red' }, stroke: { color: 'red' } },
            },
        ],
    },
];
let fi = ls.items[4];
fi.behavior = b;
fi.applyBehavior();
draw.add(ls);
ls.move(350, 50);
// combobox
let cbt = {
    value: 'Your choice:',
    font: 'Menlo',
    fontWeight: 'normal',
    size: 12,
    fill: { color: 'black' },
    position: { x: -90, y: 10 },
};
let cb = new _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.combobox({
    listAttr: _tds_shapes_src_common__WEBPACK_IMPORTED_MODULE_3__.ListAttrGroupDefault,
    selection: 3,
    title: cbt,
}); // .draggable()
draw.add(cb);
cb.move(650, 50);
let lia = {
    label: {
        title: {
            value: 'I`am grouped item',
            fontWeight: 'normal',
            font: 'Menlo',
            size: 12,
            fill: { color: 'black' },
            position: { x: 0, y: 0 },
        },
        background: {
            width: 10,
            height: 10,
            fill: { color: '#EEEEEE' },
            stroke: { color: '#EEEEEE' },
            radius: 5,
            position: { x: 0, y: 0 },
        },
        indents: [8, 2, 8, 2],
        position: { x: 0, y: 0 },
        backgroundRule: ['indent'],
    },
    kind: 'icon',
    width: 220,
    suppIndent: 15,
    icon: {
        d: _tds_shapes_src_common__WEBPACK_IMPORTED_MODULE_3__.iconPath.rightChevron,
        fill: { color: 'black' },
        stroke: { color: 'black' },
    },
};
let gi = new _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.listItemGrouped(lia, _tds_shapes_src_common__WEBPACK_IMPORTED_MODULE_3__.ListAttrGroupDefault).draggable();
gi.move(650, 100);
draw.add(gi);
//#endregion
// prettier-ignore
let mit = _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.mitemCreator('Reach by hand', { x: 600, y: 200 }).draggable();
draw.add(mit);
draw.add(_tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.mitemCreator('Move tool', { x: 600, y: 218 }).draggable());
draw.add(_tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.mitemCreator('Machine time', { x: 600, y: 236 }).draggable());
draw.add(_tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.mitemCreator('Установить', { x: 600, y: 254 }).draggable());
draw.add(_tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.mitemCreator('Перевести взгляд', { x: 600, y: 272 })
    .draggable());
draw.add(_tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.mitemCreator('Сесть', { x: 600, y: 290 }).draggable());
draw.add(_tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.mitemCreator('Наклониться', { x: 600, y: 308 }).draggable());
draw.add(_tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.mitemCreator('long element for acc...', { x: 600, y: 326 })
    .draggable());
draw.on('tds-mitem-directSelect', (ev) => {
    draw.children().map((el) => {
        el instanceof _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.mitem && el.id() != ev.detail.id() && el.select();
    });
});
const ftext = 'Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке соответствующий условий активизации.';
let tt = new _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.textarea({
    position: { x: 320, y: 700 },
    body: _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.textareaDefStyle,
    rowsTitleStyle: _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.extendsTittleDefStyle,
    headerTitleStyle: _tds_shapes_tds_shapes_entry__WEBPACK_IMPORTED_MODULE_2__.extendsHeaderDefStyle,
    data: ftext,
}).draggable();
draw.add(tt);
let mj = new _tds_shapes_src_mitemjail__WEBPACK_IMPORTED_MODULE_4__.mitemjail((0,_tds_shapes_src_mitemjail__WEBPACK_IMPORTED_MODULE_4__.mitemjailAttrDef)(ftext, { x: 580, y: 400 })).draggable();
draw.add(mj);
let mj1 = new _tds_shapes_src_mitemjail__WEBPACK_IMPORTED_MODULE_4__.mitemjail((0,_tds_shapes_src_mitemjail__WEBPACK_IMPORTED_MODULE_4__.mitemjailAttrDef)(ftext, { x: 600, y: 700 })).draggable();
draw.add(mj1);
console.log(performance.now() - startMS);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map