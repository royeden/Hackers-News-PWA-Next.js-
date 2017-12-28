
          window.__NEXT_REGISTER_PAGE('/reference', function() {
            var comp = module.exports =
webpackJsonp([8],[
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(0);
var ctx = __webpack_require__(8);
var hide = __webpack_require__(9);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(41)('wks');
var uid = __webpack_require__(26);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(61);
var toPrimitive = __webpack_require__(38);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(39);
var defined = __webpack_require__(36);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(36);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(85);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = __webpack_require__(127);
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(90)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(37)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(63);
var enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(11);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(8);
var call = __webpack_require__(73);
var isArrayIter = __webpack_require__(74);
var anObject = __webpack_require__(7);
var toLength = __webpack_require__(30);
var getIterFn = __webpack_require__(54);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(92);
var enumBugKeys = __webpack_require__(42);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(50)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(72).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
var global = __webpack_require__(3);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(13);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 28 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(23);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(31);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var $export = __webpack_require__(1);
var redefine = __webpack_require__(62);
var hide = __webpack_require__(9);
var has = __webpack_require__(11);
var Iterators = __webpack_require__(13);
var $iterCreate = __webpack_require__(91);
var setToStringTag = __webpack_require__(21);
var getPrototypeOf = __webpack_require__(64);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(23);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41)('keys');
var uid = __webpack_require__(26);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(55);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(26)('meta');
var isObject = __webpack_require__(5);
var has = __webpack_require__(11);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(29);
var wksExt = __webpack_require__(46);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(120);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(124);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(55);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {



/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(9);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(32);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(111);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(113);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(33);
  var warning = __webpack_require__(34);
  var ReactPropTypesSecret = __webpack_require__(69);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(128)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(50)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(93)(false);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(11);
var toObject = __webpack_require__(14);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(23);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(63);
var hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(28);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(38);
var has = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(61);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(169), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(13);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(1);
var core = __webpack_require__(0);
var fails = __webpack_require__(10);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGetInitialProps = undefined;

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__(76);

var _assign2 = _interopRequireDefault(_assign);

var loadGetInitialProps = exports.loadGetInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(Component, ctx) {
    var props, compName, message;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (Component.getInitialProps) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', {});

          case 2:
            _context.next = 4;
            return Component.getInitialProps(ctx);

          case 4:
            props = _context.sent;

            if (!(!props && (!ctx.res || !ctx.res.finished))) {
              _context.next = 9;
              break;
            }

            compName = getDisplayName(Component);
            message = '"' + compName + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
            throw new Error(message);

          case 9:
            return _context.abrupt('return', props);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function loadGetInitialProps(_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.warn = warn;
exports.execOnce = execOnce;
exports.deprecated = deprecated;
exports.printAndExit = printAndExit;
exports.getDisplayName = getDisplayName;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function warn(message) {
  if (true) {
    console.error(message);
  }
}

function execOnce(fn) {
  var _this = this;

  var used = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!used) {
      used = true;
      fn.apply(_this, args);
    }
  };
}

function deprecated(fn, message) {
  if (false) return fn;

  var warned = false;
  var newFn = function newFn() {
    if (!warned) {
      warned = true;
      console.error(message);
    }

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fn.apply(this, args);
  };

  // copy all properties
  (0, _assign2.default)(newFn, fn);

  return newFn;
}

function printAndExit(message) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (code === 0) {
    console.log(message);
  } else {
    console.error(message);
  }

  process.exit(code);
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;

  return protocol + '//' + hostname + (port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;

  var origin = getLocationOrigin();
  return href.substring(origin.length);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(24);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var core = __webpack_require__(0);
var dP = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(175), __esModule: true };

/***/ }),
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(155);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(162), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(99);
exports.encode = exports.stringify = __webpack_require__(100);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(167);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var defined = __webpack_require__(36);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(25);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(21);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(20);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(30);
var toAbsoluteIndex = __webpack_require__(94);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(97);
var step = __webpack_require__(65);
var Iterators = __webpack_require__(13);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(37)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = exports.createRouter = exports.withRouter = undefined;

var _slicedToArray2 = __webpack_require__(102);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty = __webpack_require__(85);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _withRouter = __webpack_require__(231);

Object.defineProperty(exports, 'withRouter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withRouter).default;
  }
});
exports._notifyBuildIdMismatch = _notifyBuildIdMismatch;
exports._rewriteUrlForNextExport = _rewriteUrlForNextExport;
exports.makePublicRouterInstance = makePublicRouterInstance;

var _router = __webpack_require__(233);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SingletonRouter = {
  router: null, // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();
    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
};

// Create public properties and methods of the router in the SingletonRouter
/* global window */
var propertyFields = ['components', 'pathname', 'route', 'query', 'asPath'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError'];

propertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty2.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});

coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});

routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    SingletonRouter.router.events.on(event, function () {
      var eventField = 'on' + event.charAt(0).toUpperCase() + event.substring(1);
      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error('Error when running the Router event: ' + eventField);
          console.error(err.message + '\n' + err.stack);
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
}

// Export the SingletonRouter and this is the public API.
exports.default = SingletonRouter;

// Reexport the withRoute HOC

// INTERNAL APIS
// -------------
// (do not use following exports inside the app)

// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
var createRouter = exports.createRouter = function createRouter() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = new (Function.prototype.bind.apply(_router2.default, [null].concat(args)))();
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];

  return SingletonRouter.router;
};

// Export the actual Router class, which is usually used inside the server
var Router = exports.Router = _router2.default;

function _notifyBuildIdMismatch(nextRoute) {
  if (SingletonRouter.onAppUpdated) {
    SingletonRouter.onAppUpdated(nextRoute);
  } else {
    console.warn('An app update detected. Loading the SSR version of "' + nextRoute + '"');
    window.location.href = nextRoute;
  }
}

function _rewriteUrlForNextExport(url) {
  var _url$split = url.split('#'),
      _url$split2 = (0, _slicedToArray3.default)(_url$split, 2),
      hash = _url$split2[1];

  url = url.replace(/#.*/, '');

  var _url$split3 = url.split('?'),
      _url$split4 = (0, _slicedToArray3.default)(_url$split3, 2),
      path = _url$split4[0],
      qs = _url$split4[1];

  path = path.replace(/\/$/, '');

  var newPath = path;
  // Append a trailing slash if this path does not have an extension
  if (!/\.[^/]+\/?$/.test(path)) {
    newPath = path + '/';
  }

  if (qs) {
    newPath = newPath + '?' + qs;
  }

  if (hash) {
    newPath = newPath + '#' + hash;
  }

  return newPath;
}

function makePublicRouterInstance(router) {
  var instance = {};

  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty2.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });

  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });

  return instance;
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(164);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(83);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(76);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(1);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(108) });


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(20);
var gOPS = __webpack_require__(43);
var pIE = __webpack_require__(28);
var toObject = __webpack_require__(14);
var IObject = __webpack_require__(39);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(10)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(14);
var $getPrototypeOf = __webpack_require__(64);

__webpack_require__(75)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
__webpack_require__(27);
module.exports = __webpack_require__(46).f('iterator');


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);
__webpack_require__(51);
__webpack_require__(118);
__webpack_require__(119);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(1);
var redefine = __webpack_require__(62);
var META = __webpack_require__(47).KEY;
var $fails = __webpack_require__(10);
var shared = __webpack_require__(41);
var setToStringTag = __webpack_require__(21);
var uid = __webpack_require__(26);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(46);
var wksDefine = __webpack_require__(48);
var enumKeys = __webpack_require__(116);
var isArray = __webpack_require__(66);
var anObject = __webpack_require__(7);
var isObject = __webpack_require__(5);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(38);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(25);
var gOPNExt = __webpack_require__(117);
var $GOPD = __webpack_require__(68);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(20);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(67).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(28).f = $propertyIsEnumerable;
  __webpack_require__(43).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(29)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(20);
var gOPS = __webpack_require__(43);
var pIE = __webpack_require__(28);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(67).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('asyncIterator');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('observable');


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(121), __esModule: true };

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(1);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(123).set });


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(5);
var anObject = __webpack_require__(7);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(8)(Function.call, __webpack_require__(68).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(25) });


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.2.0
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(56);
var emptyObject = __webpack_require__(86);
var invariant = __webpack_require__(33);
var warning = __webpack_require__(34);
var emptyFunction = __webpack_require__(31);
var checkPropTypes = __webpack_require__(57);

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.2.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    var componentName = constructor && (constructor.displayName || constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function PureComponent(props, context, updater) {
  // Duplicated from Component.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

function AsyncComponent(props, context, updater) {
  // Duplicated from Component.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

var asyncComponentPrototype = AsyncComponent.prototype = new ComponentDummy();
asyncComponentPrototype.constructor = AsyncComponent;
// Avoid an extra prototype jump for these methods.
_assign(asyncComponentPrototype, Component.prototype);
asyncComponentPrototype.unstable_isAsyncReactComponent = true;
asyncComponentPrototype.render = function () {
  return this.props.children;
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_CALL_TYPE:
          case REACT_RETURN_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum());
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'string') {
    return type;
  }
  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

{
  var currentlyValidatingElement = null;

  var propTypesMisspellWarningShown = false;

  var getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (element.type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  var getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };

  var VALID_FRAGMENT_PROPS = new Map([['children', true], ['key', true]]);
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(fragment.props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (!VALID_FRAGMENT_PROPS.has(key)) {
        warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = typeof type === 'string' || typeof type === 'function' || typeof type === 'symbol' || typeof type === 'number';
  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (typeof type === 'symbol' && type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  // Legacy hook TODO: Warn if this is accessed
  validatedFactory.type = type;

  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  Component: Component,
  PureComponent: PureComponent,
  unstable_AsyncComponent: AsyncComponent,

  Fragment: REACT_FRAGMENT_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3['default'] ? React$3['default'] : React$3;

module.exports = react;
  })();
}


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(31);
var invariant = __webpack_require__(33);
var warning = __webpack_require__(34);
var assign = __webpack_require__(56);

var ReactPropTypesSecret = __webpack_require__(69);
var checkPropTypes = __webpack_require__(57);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 129 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(7);
var aFunction = __webpack_require__(24);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(8);
var invoke = __webpack_require__(171);
var html = __webpack_require__(72);
var cel = __webpack_require__(50);
var global = __webpack_require__(3);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(23)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var isObject = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(78);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(4).f;
var create = __webpack_require__(25);
var redefineAll = __webpack_require__(53);
var ctx = __webpack_require__(8);
var anInstance = __webpack_require__(52);
var forOf = __webpack_require__(22);
var $iterDefine = __webpack_require__(37);
var step = __webpack_require__(65);
var setSpecies = __webpack_require__(79);
var DESCRIPTORS = __webpack_require__(6);
var fastKey = __webpack_require__(47).fastKey;
var validate = __webpack_require__(71);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var $export = __webpack_require__(1);
var meta = __webpack_require__(47);
var fails = __webpack_require__(10);
var hide = __webpack_require__(9);
var redefineAll = __webpack_require__(53);
var forOf = __webpack_require__(22);
var anInstance = __webpack_require__(52);
var isObject = __webpack_require__(5);
var setToStringTag = __webpack_require__(21);
var dP = __webpack_require__(4).f;
var each = __webpack_require__(136)(0);
var DESCRIPTORS = __webpack_require__(6);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(8);
var IObject = __webpack_require__(39);
var toObject = __webpack_require__(14);
var toLength = __webpack_require__(30);
var asc = __webpack_require__(137);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(138);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var isArray = __webpack_require__(66);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(32);
var from = __webpack_require__(140);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(22);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(1);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(1);
var aFunction = __webpack_require__(24);
var ctx = __webpack_require__(8);
var forOf = __webpack_require__(22);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
__webpack_require__(157);
module.exports = __webpack_require__(0).Array.from;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(8);
var $export = __webpack_require__(1);
var toObject = __webpack_require__(14);
var call = __webpack_require__(73);
var isArrayIter = __webpack_require__(74);
var toLength = __webpack_require__(30);
var createProperty = __webpack_require__(158);
var getIterFn = __webpack_require__(54);

$export($export.S + $export.F * !__webpack_require__(95)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(4);
var createDesc = __webpack_require__(19);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(161);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(14);
var $keys = __webpack_require__(20);

__webpack_require__(75)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(18);
module.exports = __webpack_require__(163);


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var get = __webpack_require__(54);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(165), __esModule: true };

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(18);
module.exports = __webpack_require__(166);


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(32);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(0).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(168);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 168 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
__webpack_require__(18);
__webpack_require__(27);
__webpack_require__(170);
__webpack_require__(173);
__webpack_require__(174);
module.exports = __webpack_require__(0).Promise;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var global = __webpack_require__(3);
var ctx = __webpack_require__(8);
var classof = __webpack_require__(32);
var $export = __webpack_require__(1);
var isObject = __webpack_require__(5);
var aFunction = __webpack_require__(24);
var anInstance = __webpack_require__(52);
var forOf = __webpack_require__(22);
var speciesConstructor = __webpack_require__(130);
var task = __webpack_require__(131).set;
var microtask = __webpack_require__(172)();
var newPromiseCapabilityModule = __webpack_require__(78);
var perform = __webpack_require__(132);
var promiseResolve = __webpack_require__(133);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(53)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(21)($Promise, PROMISE);
__webpack_require__(79)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(95)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 171 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(131).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(23)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(1);
var core = __webpack_require__(0);
var global = __webpack_require__(3);
var speciesConstructor = __webpack_require__(130);
var promiseResolve = __webpack_require__(133);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(1);
var newPromiseCapability = __webpack_require__(78);
var perform = __webpack_require__(132);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
__webpack_require__(18);
__webpack_require__(27);
__webpack_require__(176);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(179);
module.exports = __webpack_require__(0).Set;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(134);
var validate = __webpack_require__(71);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(135)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(1);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(139)('Set') });


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(141)('Set');


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(142)('Set');


/***/ }),
/* 180 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__(80);

var _set2 = _interopRequireDefault(_set);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = function () {
  function EventEmitter() {
    (0, _classCallCheck3.default)(this, EventEmitter);
    this.listeners = {};
  }

  (0, _createClass3.default)(EventEmitter, [{
    key: "on",
    value: function on(event, cb) {
      if (!this.listeners[event]) {
        this.listeners[event] = new _set2.default();
      }

      if (this.listeners[event].has(cb)) {
        throw new Error("The listener already exising in event: " + event);
      }

      this.listeners[event].add(cb);
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }

      if (!this.listeners[event]) return;
      this.listeners[event].forEach(function (cb) {
        return cb.apply(undefined, data);
      });
    }
  }, {
    key: "off",
    value: function off(event, cb) {
      this.listeners[event].delete(cb);
    }
  }]);
  return EventEmitter;
}();

exports.default = EventEmitter;

/***/ }),
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__(80);

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.defaultHead = defaultHead;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sideEffect = __webpack_require__(190);

var _sideEffect2 = _interopRequireDefault(_sideEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Head = function (_React$Component) {
  (0, _inherits3.default)(Head, _React$Component);

  function Head() {
    (0, _classCallCheck3.default)(this, Head);
    return (0, _possibleConstructorReturn3.default)(this, (Head.__proto__ || (0, _getPrototypeOf2.default)(Head)).apply(this, arguments));
  }

  (0, _createClass3.default)(Head, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Head;
}(_react2.default.Component);

Head.contextTypes = {
  headManager: _propTypes2.default.object
};
function defaultHead() {
  return [_react2.default.createElement('meta', { charSet: 'utf-8', className: 'next-head' })];
}

function reduceComponents(components) {
  var _components$map$map$r;

  return (_components$map$map$r = components.map(function (c) {
    return c.props.children;
  }).map(function (children) {
    return _react2.default.Children.toArray(children);
  }).reduce(function (a, b) {
    return a.concat(b);
  }, []).reverse()).concat.apply(_components$map$map$r, (0, _toConsumableArray3.default)(defaultHead())).filter(function (c) {
    return !!c;
  }).filter(unique()).reverse().map(function (c) {
    var className = (c.className ? c.className + ' ' : '') + 'next-head';
    return _react2.default.cloneElement(c, { className: className });
  });
}

function mapOnServer(head) {
  return head;
}

function onStateChange(head) {
  if (this.context && this.context.headManager) {
    this.context.headManager.updateHead(head);
  }
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp', 'property'];

// returns a function for filtering head child elements
// which shouldn't be duplicated, like <title/>.

function unique() {
  var tags = new _set2.default();
  var metaTypes = new _set2.default();
  var metaCategories = {};

  return function (h) {
    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;
      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _set2.default();
            if (categories.has(category)) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }
        break;
    }
    return true;
  };
}

exports.default = (0, _sideEffect2.default)(reduceComponents, onStateChange, mapOnServer)(Head);

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = __webpack_require__(80);

var _set2 = _interopRequireDefault(_set);

exports.default = withSideEffect;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withSideEffect(reduceComponentsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reduceComponentsToState !== 'function') {
    throw new Error('Expected reduceComponentsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = new _set2.default();
    var state = void 0;

    function emitChange(component) {
      state = reduceComponentsToState([].concat((0, _toConsumableArray3.default)(mountedInstances)));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient.call(component, state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      (0, _inherits3.default)(SideEffect, _Component);

      function SideEffect() {
        (0, _classCallCheck3.default)(this, SideEffect);
        return (0, _possibleConstructorReturn3.default)(this, (SideEffect.__proto__ || (0, _getPrototypeOf2.default)(SideEffect)).apply(this, arguments));
      }

      (0, _createClass3.default)(SideEffect, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          mountedInstances.delete(this);
          emitChange(this);
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            WrappedComponent,
            null,
            this.props.children
          );
        }
      }], [{
        key: 'peek',
        value: function peek() {
          return state;
        }

        // Expose canUseDOM so tests can monkeypatch it

        // Try to use displayName of wrapped component

      }, {
        key: 'rewind',
        value: function rewind() {
          if (SideEffect.canUseDOM) {
            throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
          }

          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);
      return SideEffect;
    }(_react.Component);

    SideEffect.displayName = 'SideEffect(' + (0, _utils.getDisplayName)(WrappedComponent) + ')';
    SideEffect.contextTypes = WrappedComponent.contextTypes;
    SideEffect.canUseDOM = typeof window !== 'undefined';


    return SideEffect;
  };
}

/***/ }),
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEquals;
function shallowEquals(a, b) {
  for (var i in a) {
    if (b[i] !== a[i]) return false;
  }

  for (var _i in b) {
    if (b[_i] !== a[_i]) return false;
  }

  return true;
}

/***/ }),
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = withRouter;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(232);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _utils = __webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withRouter(ComposedComponent) {
  var displayName = (0, _utils.getDisplayName)(ComposedComponent);

  var WithRouteWrapper = function (_Component) {
    (0, _inherits3.default)(WithRouteWrapper, _Component);

    function WithRouteWrapper() {
      (0, _classCallCheck3.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn3.default)(this, (WithRouteWrapper.__proto__ || (0, _getPrototypeOf2.default)(WithRouteWrapper)).apply(this, arguments));
    }

    (0, _createClass3.default)(WithRouteWrapper, [{
      key: 'render',
      value: function render() {
        var props = (0, _extends3.default)({
          router: this.context.router
        }, this.props);

        return _react2.default.createElement(ComposedComponent, props);
      }
    }]);
    return WithRouteWrapper;
  }(_react.Component);

  WithRouteWrapper.contextTypes = {
    router: _propTypes2.default.object
  };
  WithRouteWrapper.displayName = 'withRoute(' + displayName + ')';


  return (0, _hoistNonReactStatics2.default)(WithRouteWrapper, ComposedComponent);
}

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(102);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __webpack_require__(55);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _set = __webpack_require__(80);

var _set2 = _interopRequireDefault(_set);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _url2 = __webpack_require__(234);

var _EventEmitter = __webpack_require__(181);

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _shallowEquals = __webpack_require__(195);

var _shallowEquals2 = _interopRequireDefault(_shallowEquals);

var _pQueue = __webpack_require__(237);

var _pQueue2 = _interopRequireDefault(_pQueue);

var _utils = __webpack_require__(77);

var _ = __webpack_require__(101);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global __NEXT_DATA__ */

var Router = function () {
  function Router(pathname, query, as) {
    var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        pageLoader = _ref.pageLoader,
        Component = _ref.Component,
        ErrorComponent = _ref.ErrorComponent,
        err = _ref.err;

    (0, _classCallCheck3.default)(this, Router);

    // represents the current component key
    this.route = toRoute(pathname);

    // set up the component cache (by route keys)
    this.components = {};
    // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (Component !== ErrorComponent) {
      this.components[this.route] = { Component: Component, err: err };
    }

    // Handling Router Events
    this.events = new _EventEmitter2.default();

    this.pageLoader = pageLoader;
    this.prefetchQueue = new _pQueue2.default({ concurrency: 2 });
    this.ErrorComponent = ErrorComponent;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.subscriptions = new _set2.default();
    this.componentLoadCancel = null;
    this.onPopState = this.onPopState.bind(this);

    if (typeof window !== 'undefined') {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', (0, _url2.format)({ pathname: pathname, query: query }), (0, _utils.getURL)());

      window.addEventListener('popstate', this.onPopState);
    }
  }

  (0, _createClass3.default)(Router, [{
    key: 'onPopState',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var pathname, query, _e$state, url, as, options;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e.state) {
                  _context.next = 4;
                  break;
                }

                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                pathname = this.pathname, query = this.query;

                this.changeState('replaceState', (0, _url2.format)({ pathname: pathname, query: query }), (0, _utils.getURL)());
                return _context.abrupt('return');

              case 4:
                _e$state = e.state, url = _e$state.url, as = _e$state.as, options = _e$state.options;

                this.replace(url, as, options);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onPopState(_x2) {
        return _ref2.apply(this, arguments);
      }

      return onPopState;
    }()
  }, {
    key: 'update',
    value: function update(route, Component) {
      var data = this.components[route];
      if (!data) {
        throw new Error('Cannot update unavailable route: ' + route);
      }

      var newData = (0, _extends3.default)({}, data, { Component: Component });
      this.components[route] = newData;

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: 'reload',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(route) {
        var pathname, query, url, routeInfo, error;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                delete this.components[route];
                this.pageLoader.clearCache(route);

                if (!(route !== this.route)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt('return');

              case 4:
                pathname = this.pathname, query = this.query;
                url = window.location.href;


                this.events.emit('routeChangeStart', url);
                _context2.next = 9;
                return this.getRouteInfo(route, pathname, query, url);

              case 9:
                routeInfo = _context2.sent;
                error = routeInfo.error;

                if (!(error && error.cancelled)) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt('return');

              case 13:

                this.notify(routeInfo);

                if (!error) {
                  _context2.next = 17;
                  break;
                }

                this.events.emit('routeChangeError', error, url);
                throw error;

              case 17:

                this.events.emit('routeChangeComplete', url);

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function reload(_x3) {
        return _ref3.apply(this, arguments);
      }

      return reload;
    }()
  }, {
    key: 'back',
    value: function back() {
      window.history.back();
    }
  }, {
    key: 'push',
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.change('pushState', url, as, options);
    }
  }, {
    key: 'replace',
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.change('replaceState', url, as, options);
    }
  }, {
    key: 'change',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(method, _url, _as, options) {
        var url, as, _parse, pathname, query, route, _options$shallow, shallow, routeInfo, _routeInfo, error, hash;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // If url and as provided as an object representation,
                // we'll format them into the string version here.
                url = (typeof _url === 'undefined' ? 'undefined' : (0, _typeof3.default)(_url)) === 'object' ? (0, _url2.format)(_url) : _url;
                as = (typeof _as === 'undefined' ? 'undefined' : (0, _typeof3.default)(_as)) === 'object' ? (0, _url2.format)(_as) : _as;

                // Add the ending slash to the paths. So, we can serve the
                // "<page>/index.html" directly for the SSR page.

                if (__NEXT_DATA__.nextExport) {
                  as = (0, _._rewriteUrlForNextExport)(as);
                }

                this.abortComponentLoad(as);
                _parse = (0, _url2.parse)(url, true), pathname = _parse.pathname, query = _parse.query;

                // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.

                if (!this.onlyAHashChange(as)) {
                  _context3.next = 9;
                  break;
                }

                this.changeState(method, url, as);
                this.scrollToHash(as);
                return _context3.abrupt('return');

              case 9:

                // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitalProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                if (!this.urlIsNew(pathname, query)) {
                  method = 'replaceState';
                }

                route = toRoute(pathname);
                _options$shallow = options.shallow, shallow = _options$shallow === undefined ? false : _options$shallow;
                routeInfo = null;


                this.events.emit('routeChangeStart', as);

                // If shallow === false and other conditions met, we reuse the
                // existing routeInfo for this route.
                // Because of this, getInitialProps would not run.

                if (!(shallow && this.isShallowRoutingPossible(route))) {
                  _context3.next = 18;
                  break;
                }

                routeInfo = this.components[route];
                _context3.next = 21;
                break;

              case 18:
                _context3.next = 20;
                return this.getRouteInfo(route, pathname, query, as);

              case 20:
                routeInfo = _context3.sent;

              case 21:
                _routeInfo = routeInfo, error = _routeInfo.error;

                if (!(error && error.cancelled)) {
                  _context3.next = 24;
                  break;
                }

                return _context3.abrupt('return', false);

              case 24:

                this.events.emit('beforeHistoryChange', as);
                this.changeState(method, url, as, options);
                hash = window.location.hash.substring(1);


                this.set(route, pathname, query, as, (0, _extends3.default)({}, routeInfo, { hash: hash }));

                if (!error) {
                  _context3.next = 31;
                  break;
                }

                this.events.emit('routeChangeError', error, as);
                throw error;

              case 31:

                this.events.emit('routeChangeComplete', as);
                return _context3.abrupt('return', true);

              case 33:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function change(_x8, _x9, _x10, _x11) {
        return _ref4.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: 'changeState',
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        window.history[method]({ url: url, as: as, options: options }, null, as);
      }
    }
  }, {
    key: 'getRouteInfo',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(route, pathname, query, as) {
        var routeInfo, _routeInfo2, Component, ctx, _Component, _ctx;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                routeInfo = null;
                _context4.prev = 1;

                routeInfo = this.components[route];

                if (routeInfo) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 6;
                return this.fetchComponent(route, as);

              case 6:
                _context4.t0 = _context4.sent;
                routeInfo = {
                  Component: _context4.t0
                };

              case 8:
                _routeInfo2 = routeInfo, Component = _routeInfo2.Component;
                ctx = { pathname: pathname, query: query, asPath: as };
                _context4.next = 12;
                return this.getInitialProps(Component, ctx);

              case 12:
                routeInfo.props = _context4.sent;


                this.components[route] = routeInfo;
                _context4.next = 32;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t1 = _context4['catch'](1);

                if (!_context4.t1.cancelled) {
                  _context4.next = 20;
                  break;
                }

                return _context4.abrupt('return', { error: _context4.t1 });

              case 20:
                if (!_context4.t1.buildIdMismatched) {
                  _context4.next = 24;
                  break;
                }

                // Now we need to reload the page or do the action asked by the user
                (0, _._notifyBuildIdMismatch)(as);
                // We also need to cancel this current route change.
                // We do it like this.
                _context4.t1.cancelled = true;
                return _context4.abrupt('return', { error: _context4.t1 });

              case 24:

                if (_context4.t1.statusCode === 404) {
                  // Indicate main error display logic to
                  // ignore rendering this error as a runtime error.
                  _context4.t1.ignore = true;
                }

                _Component = this.ErrorComponent;

                routeInfo = { Component: _Component, err: _context4.t1 };
                _ctx = { err: _context4.t1, pathname: pathname, query: query };
                _context4.next = 30;
                return this.getInitialProps(_Component, _ctx);

              case 30:
                routeInfo.props = _context4.sent;


                routeInfo.error = _context4.t1;

              case 32:
                return _context4.abrupt('return', routeInfo);

              case 33:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 16]]);
      }));

      function getRouteInfo(_x13, _x14, _x15, _x16) {
        return _ref5.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: 'set',
    value: function set(route, pathname, query, as, data) {
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
  }, {
    key: 'onlyAHashChange',
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _asPath$split = this.asPath.split('#'),
          _asPath$split2 = (0, _slicedToArray3.default)(_asPath$split, 2),
          oldUrlNoHash = _asPath$split2[0],
          oldHash = _asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = (0, _slicedToArray3.default)(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1];

      // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      }

      // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.
      return oldHash !== newHash;
    }
  }, {
    key: 'scrollToHash',
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = (0, _slicedToArray3.default)(_as$split3, 2),
          hash = _as$split4[1];

      var el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView();
      }
    }
  }, {
    key: 'urlIsNew',
    value: function urlIsNew(pathname, query) {
      return this.pathname !== pathname || !(0, _shallowEquals2.default)(query, this.query);
    }
  }, {
    key: 'isShallowRoutingPossible',
    value: function isShallowRoutingPossible(route) {
      return (
        // If there's cached routeInfo for the route.
        Boolean(this.components[route]) &&
        // If the route is already rendered on the screen.
        this.route === route
      );
    }
  }, {
    key: 'prefetch',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(url) {
        var _this = this;

        var _parse2, pathname, route;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (false) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return');

              case 2:
                _parse2 = (0, _url2.parse)(url), pathname = _parse2.pathname;
                route = toRoute(pathname);
                return _context5.abrupt('return', this.prefetchQueue.add(function () {
                  return _this.fetchRoute(route);
                }));

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function prefetch(_x17) {
        return _ref6.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: 'fetchComponent',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(route, as) {
        var cancelled, cancel, Component, error;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                cancelled = false;

                cancel = this.componentLoadCancel = function () {
                  cancelled = true;
                };

                _context6.prev = 2;
                _context6.next = 5;
                return this.fetchRoute(route);

              case 5:
                Component = _context6.sent;

                if (!cancelled) {
                  _context6.next = 10;
                  break;
                }

                error = new Error('Abort fetching component for route: "' + route + '"');

                error.cancelled = true;
                throw error;

              case 10:

                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                return _context6.abrupt('return', Component);

              case 14:
                _context6.prev = 14;
                _context6.t0 = _context6['catch'](2);

                // There's an error in loading the route.
                // Usually this happens when there's a failure in the webpack build
                // So in that case, we need to load the page with full SSR
                // That'll clean the invalid exising client side information.
                // (Like cached routes)
                window.location.href = as;
                throw _context6.t0;

              case 18:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 14]]);
      }));

      function fetchComponent(_x18, _x19) {
        return _ref7.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: 'getInitialProps',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(Component, ctx) {
        var cancelled, cancel, props, err;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                cancelled = false;

                cancel = function cancel() {
                  cancelled = true;
                };

                this.componentLoadCancel = cancel;

                _context7.next = 5;
                return (0, _utils.loadGetInitialProps)(Component, ctx);

              case 5:
                props = _context7.sent;


                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                if (!cancelled) {
                  _context7.next = 11;
                  break;
                }

                err = new Error('Loading initial props cancelled');

                err.cancelled = true;
                throw err;

              case 11:
                return _context7.abrupt('return', props);

              case 12:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getInitialProps(_x20, _x21) {
        return _ref8.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: 'fetchRoute',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(route) {
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.pageLoader.loadPage(route);

              case 2:
                return _context8.abrupt('return', _context8.sent);

              case 3:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function fetchRoute(_x22) {
        return _ref9.apply(this, arguments);
      }

      return fetchRoute;
    }()
  }, {
    key: 'abortComponentLoad',
    value: function abortComponentLoad(as) {
      if (this.componentLoadCancel) {
        this.events.emit('routeChangeError', new Error('Route Cancelled'), as);
        this.componentLoadCancel();
        this.componentLoadCancel = null;
      }
    }
  }, {
    key: 'notify',
    value: function notify(data) {
      this.subscriptions.forEach(function (fn) {
        return fn(data);
      });
    }
  }, {
    key: 'subscribe',
    value: function subscribe(fn) {
      var _this2 = this;

      this.subscriptions.add(fn);
      return function () {
        return _this2.subscriptions.delete(fn);
      };
    }
  }]);
  return Router;
}();

exports.default = Router;


function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(235);
var util = __webpack_require__(236);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(84);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(98)(module), __webpack_require__(180)))

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(76);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// based on https://github.com/sindresorhus/p-queue (MIT)
// modified for browser support

var Queue = function () {
  function Queue() {
    (0, _classCallCheck3.default)(this, Queue);

    this._queue = [];
  }

  (0, _createClass3.default)(Queue, [{
    key: 'enqueue',
    value: function enqueue(run) {
      this._queue.push(run);
    }
  }, {
    key: 'dequeue',
    value: function dequeue() {
      return this._queue.shift();
    }
  }, {
    key: 'size',
    get: function get() {
      return this._queue.length;
    }
  }]);
  return Queue;
}();

var PQueue = function () {
  function PQueue(opts) {
    (0, _classCallCheck3.default)(this, PQueue);

    opts = (0, _assign2.default)({
      concurrency: Infinity,
      queueClass: Queue
    }, opts);

    if (opts.concurrency < 1) {
      throw new TypeError('Expected `concurrency` to be a number from 1 and up');
    }

    this.queue = new opts.queueClass(); // eslint-disable-line new-cap
    this._pendingCount = 0;
    this._concurrency = opts.concurrency;
    this._resolveEmpty = function () {};
  }

  (0, _createClass3.default)(PQueue, [{
    key: '_next',
    value: function _next() {
      this._pendingCount--;

      if (this.queue.size > 0) {
        this.queue.dequeue()();
      } else {
        this._resolveEmpty();
      }
    }
  }, {
    key: 'add',
    value: function add(fn, opts) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        var run = function run() {
          _this._pendingCount++;

          fn().then(function (val) {
            resolve(val);
            _this._next();
          }, function (err) {
            reject(err);
            _this._next();
          });
        };

        if (_this._pendingCount < _this._concurrency) {
          run();
        } else {
          _this.queue.enqueue(run, opts);
        }
      });
    }
  }, {
    key: 'onEmpty',
    value: function onEmpty() {
      var _this2 = this;

      return new _promise2.default(function (resolve) {
        var existingResolve = _this2._resolveEmpty;
        _this2._resolveEmpty = function () {
          existingResolve();
          resolve();
        };
      });
    }
  }, {
    key: 'size',
    get: function get() {
      return this.queue.size;
    }
  }, {
    key: 'pending',
    get: function get() {
      return this._pendingCount;
    }
  }]);
  return PQueue;
}();

exports.default = PQueue;

/***/ }),
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(382);

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__(102);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__(17);

var _stylesheetRegistry = __webpack_require__(388);

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(383), __esModule: true };

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
__webpack_require__(18);
__webpack_require__(27);
__webpack_require__(384);
__webpack_require__(385);
__webpack_require__(386);
__webpack_require__(387);
module.exports = __webpack_require__(0).Map;


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(134);
var validate = __webpack_require__(71);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(135)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(1);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(139)('Map') });


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(141)('Map');


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(142)('Map');


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(159);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__(389);

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__(390);

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });
    this._sheet.inject();
    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129)))

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(381)


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = {
  colors: {
    standard: "#ff7b00",
    hot: "#b02f27",
    med: "#0d8e73",
    cold: "#2050a0",
    darker: "#ff6900",
    lighter_night: "#af59ff",
    standard_night: "#10005f",
    darker_night: "#00005f",
    hot_night: "#ff4f2f",
    med_night: "#1da495",
    cold_night: "#1ecbdd"
  },

  transitions: {
    slowest: "2.5s",
    slow: "2s",
    standard: "1.5s",
    fast: "1s",
    fastest: "0.3s"
  }
};

exports.default = styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpYy9zdHlsZXMuanMiXSwibmFtZXMiOlsic3R5bGVzIiwiY29sb3JzIiwic3RhbmRhcmQiLCJob3QiLCJtZWQiLCJjb2xkIiwiZGFya2VyIiwibGlnaHRlcl9uaWdodCIsInN0YW5kYXJkX25pZ2h0IiwiZGFya2VyX25pZ2h0IiwiaG90X25pZ2h0IiwibWVkX25pZ2h0IiwiY29sZF9uaWdodCIsInRyYW5zaXRpb25zIiwic2xvd2VzdCIsInNsb3ciLCJmYXN0IiwiZmFzdGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNOztjQUNJLEFBQ0ksQUFDVjtTQUZNLEFBRUQsQUFDTDtTQUhNLEFBR0QsQUFDTDtVQUpNLEFBSUEsQUFDTjtZQUxNLEFBS0UsQUFDUjttQkFOTSxBQU1TLEFBQ2Y7b0JBUE0sQUFPVSxBQUNoQjtrQkFSTSxBQVFRLEFBQ2Q7ZUFUTSxBQVNLLEFBQ1g7ZUFWTSxBQVVLLEFBQ1g7Z0JBWlcsQUFDTCxBQVdNLEFBR2Q7QUFkUSxBQUNOOzs7YUFhVyxBQUNGLEFBQ1Q7VUFGVyxBQUVMLEFBQ047Y0FIVyxBQUdELEFBQ1Y7VUFKVyxBQUlMLEFBQ047YUFwQkosQUFBZSxBQWVBLEFBS0YsQUFJYjtBQVRlLEFBQ1g7QUFoQlcsQUFDYjs7a0JBdUJGLEFBQWUiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/roy-eden/Programming/Projects/Mine/next-pwa/static/styles.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/roy-eden/Programming/Projects/Mine/next-pwa/static/styles.js"); } } })();

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(55);

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__(409);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _url = __webpack_require__(234);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypesExact = __webpack_require__(411);

var _propTypesExact2 = _interopRequireDefault(_propTypesExact);

var _router = __webpack_require__(101);

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global __NEXT_DATA__ */

var Link = function (_Component) {
  (0, _inherits3.default)(Link, _Component);

  function Link(props) {
    var _ref;

    (0, _classCallCheck3.default)(this, Link);

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this, props].concat(rest)));

    _this.linkClicked = _this.linkClicked.bind(_this);
    _this.formatUrls(props);
    return _this;
  }

  (0, _createClass3.default)(Link, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: 'linkClicked',
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;


      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;

      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;

      e.preventDefault();

      //  avoid scroll for urls with anchor refs
      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      }

      // replace state instead of push if prop is present
      var replace = this.props.replace;

      var changeMethod = replace ? 'replace' : 'push';

      // straight up redirect
      _router2.default[changeMethod](href, as, { shallow: shallow }).then(function (success) {
        if (!success) return;
        if (scroll) window.scrollTo(0, 0);
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: 'prefetch',
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return;

      // Prefetch the JSON page if asked (only in the client)
      var pathname = window.location.pathname;

      var href = (0, _url.resolve)(pathname, this.href);
      _router2.default.prefetch(href);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify2.default)(this.props.href) !== (0, _stringify2.default)(prevProps.href)) {
        this.prefetch();
      }
    }

    // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: 'formatUrls',
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof3.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof3.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var href = this.href,
          as = this.as;
      // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react2.default.createElement(
          'a',
          null,
          children
        );
      }

      // This will return the first child, if multiple are provided it will throw an error
      var child = _react.Children.only(children);
      var props = {
        onClick: this.linkClicked

        // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user
      };if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      }

      // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.
      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react2.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = (0, _propTypesExact2.default)({
  href: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  prefetch: _propTypes2.default.bool,
  replace: _propTypes2.default.bool,
  shallow: _propTypes2.default.bool,
  passHref: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, function (props, propName) {
    var value = props[propName];

    if (typeof value === 'string') {
      warnLink('Warning: You\'re using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>');
    }

    return null;
  }]).isRequired
});
exports.default = Link;


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__(413);
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(394);
var foreach = __webpack_require__(414);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(394);
var bind = __webpack_require__(397);
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(416)();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(415);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(396);

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(392);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Switch.js";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "changeMode",
    value: function changeMode() {
      this.props.changeMode();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var mode = this.props.mode;
      return _react2.default.createElement("div", {
        className: _style2.default.dynamic([["672842883", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]) + " " + "switch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement("p", {
        className: _style2.default.dynamic([["672842883", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Mode: ", _react2.default.createElement("span", {
        className: _style2.default.dynamic([["672842883", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]) + " " + "mode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, mode ? "night" : "day", "-time.")), _react2.default.createElement("button", {
        onClick: function onClick() {
          return _this2.changeMode();
        }, className: _style2.default.dynamic([["672842883", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]) + " " + "changer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: "672842883",
        css: ".switch.__jsx-style-dynamic-selector{position:absolute;left:180px;padding-left:6px;margin-left:40px;font-weight:600;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:5px;display:" + (this.props.menu ? "none" : "flex") + ";-webkit-transition:border " + _styles2.default.transitions.slowest + ";transition:border " + _styles2.default.transitions.slowest + ";border:2px solid " + (mode ? "#fff" : "#000") + ";}.mode.__jsx-style-dynamic-selector{padding-left:2px;padding-right:2px;padding-bottom:1px;color:#fff;height:100%;-webkit-transition:" + _styles2.default.transitions.standard + ";transition:" + _styles2.default.transitions.standard + ";background-color:" + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ";}.changer.__jsx-style-dynamic-selector{font-weight:600;height:12px;width:12px;border-radius:100%;border:none;margin-right:4px;-webkit-transition:background " + _styles2.default.transitions.fast + ";transition:background " + _styles2.default.transitions.fast + ";margin-left:" + (mode ? "5px" : "19px") + ";background-color:" + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ";}.changer.__jsx-style-dynamic-selector:hover{cursor:pointer;background-color:" + (mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night) + ";}.changer.__jsx-style-dynamic-selector:focus{outline:none;}@media screen and (max-Width:780px){.switch.__jsx-style-dynamic-selector{font-size:0.8rem;left:-36px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vU3dpdGNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCb0IsQUFHK0IsQUFjRCxBQVVELEFBWUQsQUFLRixBQUtNLGFBSnJCLEVBSkQsQ0FiZSxDQVZNLEFBZ0NMLENBOUNGLFVBeUJBLEFBc0JYLENBOUNpQixNQWNFLElBV0EsT0F4QkYsUUFjTixJQVdDLEdBVWQsRUFsQ2tCLEVBY0osS0FXSyxPQVRqQixFQWZtQixRQXlCZ0MsOEVBVkwsT0FkeEIsc0JBQ0osR0F3QnVCLGNBVjNDLENBYnVDLDBCQXdCUyxXQXZCQyxtQ0F3QmpELG1FQXZCZ0QsOENBQ2hEIiwiZmlsZSI6Im5hdmlnYXRpb24vU3dpdGNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0YXRpYy9zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY2hhbmdlTW9kZSgpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZU1vZGUoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLnByb3BzLm1vZGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgPHA+TW9kZTogPHNwYW4gY2xhc3NOYW1lPVwibW9kZVwiPnsgbW9kZSA/IFwibmlnaHRcIiA6IFwiZGF5XCIgfS10aW1lLjwvc3Bhbj48L3A+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImNoYW5nZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLmNoYW5nZU1vZGUoKSB9PlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnN3aXRjaCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAxODBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiAkeyB0aGlzLnByb3BzLm1lbnUgPyBcIm5vbmVcIiA6IFwiZmxleFwiIH07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgJHsgc3R5bGVzLnRyYW5zaXRpb25zLnNsb3dlc3QgfTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7IG1vZGUgPyBcIiNmZmZcIiA6IFwiIzAwMFwiIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vZGUge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkeyBzdHlsZXMudHJhbnNpdGlvbnMuc3RhbmRhcmQgfVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuc3RhbmRhcmRfbmlnaHQgOiBzdHlsZXMuY29sb3JzLnN0YW5kYXJkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNoYW5nZXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAkeyBzdHlsZXMudHJhbnNpdGlvbnMuZmFzdCB9O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6ICR7IG1vZGUgPyBcIjVweFwiIDogXCIxOXB4XCIgfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IG1vZGUgPyBzdHlsZXMuY29sb3JzLnN0YW5kYXJkX25pZ2h0IDogc3R5bGVzLmNvbG9ycy5zdGFuZGFyZCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jaGFuZ2VyOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IG1vZGUgP1xuICAgICAgICAgICAgc3R5bGVzLmNvbG9ycy5zdGFuZGFyZCA6IHN0eWxlcy5jb2xvcnMuc3RhbmRhcmRfbmlnaHQgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jaGFuZ2VyOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1XaWR0aDogNzgwcHgpIHtcbiAgICAgICAgICAgIC5zd2l0Y2gge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgbGVmdDogLTM2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=navigation/Switch.js */",
        dynamic: [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vU3dpdGNoLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInByb3BzIiwiY2hhbmdlTW9kZSIsIm1vZGUiLCJtZW51IiwidHJhbnNpdGlvbnMiLCJzbG93ZXN0Iiwic3RhbmRhcmQiLCJjb2xvcnMiLCJzdGFuZGFyZF9uaWdodCIsImZhc3QiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBR0osQUFDWDtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7NkJBRVE7bUJBQ1A7O1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7NkJBQ0UsY0FBQTsyREFrQmtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixTQWxCcEMsQUFrQjZDLFFBQ2pCLGlCQUFBLEFBQU8sWUFuQm5DLEFBbUIrQyxTQUNwQixPQUFBLEFBQU8sU0FwQmxDLEFBb0IyQyxRQVN0QixpQkFBQSxBQUFPLFlBN0I1QixBQTZCd0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFBaUIsaUJBQUEsQUFBTyxPQTlCeEUsQUE4QitFLFVBVS9DLGlCQUFBLEFBQU8sWUF4Q3ZDLEFBd0NtRCxNQUM3QixPQUFBLEFBQU8sUUF6QzdCLEFBeUNxQyxRQUNWLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQUFpQixpQkFBQSxBQUFPLE9BMUN4RSxBQTBDK0UsVUFLcEQsT0FDckIsaUJBQUEsQUFBTyxPQURjLEFBQ1AsV0FBVyxpQkFBQSxBQUFPLE9BaER0QyxBQWdENkMsMkJBaEQ3QyxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7MkRBaUJnQixLQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsU0FqQmxDLEFBaUIyQyxRQUNqQixpQkFBQSxBQUFPLFlBbEJqQyxBQWtCNkMsU0FDcEIsT0FBQSxBQUFPLFNBbkJoQyxBQW1CeUMsUUFTdEIsaUJBQUEsQUFBTyxZQTVCMUIsQUE0QnNDLFVBQ2IsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsaUJBQWlCLGlCQUFBLEFBQU8sT0E3QnRFLEFBNkI2RSxVQVUvQyxpQkFBQSxBQUFPLFlBdkNyQyxBQXVDaUQsTUFDN0IsT0FBQSxBQUFPLFFBeEMzQixBQXdDbUMsUUFDVixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFBaUIsaUJBQUEsQUFBTyxPQXpDdEUsQUF5QzZFLFVBS3BELE9BQ3JCLGlCQUFBLEFBQU8sT0FEYyxBQUNQLFdBQVcsaUJBQUEsQUFBTyxPQS9DcEMsQUErQzJDOztvQkEvQzNDO3NCQUFBO0FBQUE7QUFBQSxTQUFTLDBCQUFBLGNBQUE7MkRBaUJPLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixTQWpCekIsQUFpQmtDLFFBQ2pCLGlCQUFBLEFBQU8sWUFsQnhCLEFBa0JvQyxTQUNwQixPQUFBLEFBQU8sU0FuQnZCLEFBbUJnQyxRQVN0QixpQkFBQSxBQUFPLFlBNUJqQixBQTRCNkIsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFBaUIsaUJBQUEsQUFBTyxPQTdCN0QsQUE2Qm9FLFVBVS9DLGlCQUFBLEFBQU8sWUF2QzVCLEFBdUN3QyxNQUM3QixPQUFBLEFBQU8sUUF4Q2xCLEFBd0MwQixRQUNWLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQUFpQixpQkFBQSxBQUFPLE9BekM3RCxBQXlDb0UsVUFLcEQsT0FDckIsaUJBQUEsQUFBTyxPQURjLEFBQ1AsV0FBVyxpQkFBQSxBQUFPLE9BL0MzQixBQStDa0MsMkJBL0NsQyxBQUFnQjs7b0JBQWhCO3NCQUFBLEFBQXlCO0FBQXpCO0FBQUEsZ0JBQXlCLEFBQU8sVUFBaEMsQUFBMEMsT0FEckQsQUFDRSxBQUFTLEFBRVQ7aUJBRVksbUJBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFGdkIsOERBZWdCLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixTQWZsQyxBQWUyQyxRQUNqQixpQkFBQSxBQUFPLFlBaEJqQyxBQWdCNkMsU0FDcEIsT0FBQSxBQUFPLFNBakJoQyxBQWlCeUMsUUFTdEIsaUJBQUEsQUFBTyxZQTFCMUIsQUEwQnNDLFVBQ2IsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsaUJBQWlCLGlCQUFBLEFBQU8sT0EzQnRFLEFBMkI2RSxVQVUvQyxpQkFBQSxBQUFPLFlBckNyQyxBQXFDaUQsTUFDN0IsT0FBQSxBQUFPLFFBdEMzQixBQXNDbUMsUUFDVixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFBaUIsaUJBQUEsQUFBTyxPQXZDdEUsQUF1QzZFLFVBS3BELE9BQ3JCLGlCQUFBLEFBQU8sT0FEYyxBQUNQLFdBQVcsaUJBQUEsQUFBTyxPQTdDcEMsQUE2QzJDLDJCQTdDM0MsQUFDWTs7b0JBRFo7c0JBSEYsQUFHRTtBQUFBO0FBRUU7aUJBTEo7b1JBa0JrQixLQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsU0FsQnBDLEFBa0I2QywwQ0FDakIsaUJBQUEsQUFBTyxZQW5CbkMsQUFtQitDLGtDQUFuQixpQkFBQSxBQUFPLFlBbkJuQyxBQW1CK0Msa0NBQ3BCLE9BQUEsQUFBTyxTQXBCbEMsQUFvQjJDLG9KQVN0QixpQkFBQSxBQUFPLFlBN0I1QixBQTZCd0MsNEJBQW5CLGlCQUFBLEFBQU8sWUE3QjVCLEFBNkJ3QyxtQ0FDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFBaUIsaUJBQUEsQUFBTyxPQTlCeEUsQUE4QitFLDhLQVUvQyxpQkFBQSxBQUFPLFlBeEN2QyxBQXdDbUQsbUNBQW5CLGlCQUFBLEFBQU8sWUF4Q3ZDLEFBd0NtRCwwQkFDN0IsT0FBQSxBQUFPLFFBekM3QixBQXlDcUMsa0NBQ1YsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsaUJBQWlCLGlCQUFBLEFBQU8sT0ExQ3hFLEFBMEMrRSxnR0FLcEQsT0FDckIsaUJBQUEsQUFBTyxPQURjLEFBQ1AsV0FBVyxpQkFBQSxBQUFPLE9BaER0QyxBQWdENkMsa0JBaEQ3QztrQkFrQmtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixTQWxCcEMsQUFrQjZDLFFBQ2pCLGlCQUFBLEFBQU8sWUFuQm5DLEFBbUIrQyxTQUNwQixPQUFBLEFBQU8sU0FwQmxDLEFBb0IyQyxRQVN0QixpQkFBQSxBQUFPLFlBN0I1QixBQTZCd0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFBaUIsaUJBQUEsQUFBTyxPQTlCeEUsQUE4QitFLFVBVS9DLGlCQUFBLEFBQU8sWUF4Q3ZDLEFBd0NtRCxNQUM3QixPQUFBLEFBQU8sUUF6QzdCLEFBeUNxQyxRQUNWLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQUFpQixpQkFBQSxBQUFPLE9BMUN4RSxBQTBDK0UsVUFLcEQsT0FDckIsaUJBQUEsQUFBTyxPQURjLEFBQ1AsV0FBVyxpQkFBQSxBQUFPLE9BakR4QyxBQUNFLEFBZ0Q2QyxBQWdCaEQ7QUFoRUc7Ozs7O0VBUnVCLGdCQUFNLEEiLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Switch.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Switch.js"); } } })();

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(393);

var _link2 = _interopRequireDefault(_link);

var _styles = __webpack_require__(392);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/NavButtons.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.handleClick();
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.props.toggleMenu();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mode = this.props.mode;
      var active = this.props.active;
      var menu = this.props.menu;
      var time = mode ? "night" : "day";
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + 'nav-buttons',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('button', {
        onClick: function onClick() {
          return _this2.toggleMenu();
        },
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + 'menu',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('hr', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + 'menu-line',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('hr', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + 'menu-line',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('hr', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + 'menu-line',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      })), active === "home" ? _react2.default.createElement('button', {
        onClick: function onClick() {
          return _this2.handleClick();
        },
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + ('page ' + (active === "home" ? "active" : "link")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Latest News') : _react2.default.createElement(_link2.default, {
        as: '/' + time,
        href: {
          pathname: '/',
          query: {
            mode: time
          }
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('button', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + 'page link',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Latest News')), _react2.default.createElement(_link2.default, {
        as: '/about/' + time,
        href: {
          pathname: '/about',
          query: {
            mode: time
          }
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('button', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + ('page ' + (active === "about" ? "active" : "link")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'About')), _react2.default.createElement(_link2.default, {
        as: '/reference/' + time,
        href: {
          pathname: '/reference', query: {
            mode: mode ? "night" : "day"
          }
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('button', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + ('page ' + (active === "reference" ? "active" : "link")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'References')), _react2.default.createElement(_style2.default, {
        styleId: '1203046951',
        css: '.nav-buttons.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:100%;width:100%;background-color:' + (mode ? _styles2.default.colors.darker_night : "#fff") + ';}.page.__jsx-style-dynamic-selector{margin-left:15px;font-weight:600;border-radius:10px;padding:10px;width:100px;font-size:0.75rem;cursor:pointer;display:' + (menu ? "none" : "inline") + ';-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';}.link.__jsx-style-dynamic-selector{border:none;background-color:#fff;-webkit-transition:' + _styles2.default.transitions.fastest + ';transition:' + _styles2.default.transitions.fastest + ';color:' + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ';}.link.__jsx-style-dynamic-selector:hover,.active.__jsx-style-dynamic-selector{color:#fff;border:2px solid #fff;background-color:' + (mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker) + ';}.active.__jsx-style-dynamic-selector:focus,.link.__jsx-style-dynamic-selector:focus,.menu.__jsx-style-dynamic-selector:focus{outline:none;}.menu.__jsx-style-dynamic-selector{margin-top:-2px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:45px;width:45px;border:none;cursor:pointer;display:' + (menu ? "flex" : "none") + ';-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';background-color:' + (mode ? _styles2.default.colors.darker_night : "#fff") + ';}.menu.__jsx-style-dynamic-selector:hover{margin-top:0px;-webkit-transition:' + _styles2.default.transitions.fastest + ';transition:' + _styles2.default.transitions.fastest + ';box-shadow:-3px 0px ' + (mode ? "#ccc" : "#ddd") + ';}.menu-line.__jsx-style-dynamic-selector{width:27px;height:3px;margin-top:3px;margin-bottom:3px;border-radius:7px;border:none;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';background-color:' + (mode ? "#fff" : _styles2.default.colors.standard) + ';}@media screen and (max-Width:800px){.page.__jsx-style-dynamic-selector{padding:8px;width:90px;font-size:0.7rem;}.nav-buttons.__jsx-style-dynamic-selector{margin-top:1px;margin-bottom:1px;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';background-color:' + (mode ? _styles2.default.colors.darker_night : "#fff") + ';}.menu.__jsx-style-dynamic-selector{margin-top:0px;}.menu.__jsx-style-dynamic-selector:hover{box-shadow:none;-webkit-transition:' + _styles2.default.transitions.fastest + ';transition:' + _styles2.default.transitions.fastest + ';}}@media screen and (max-Width:472px){.page.__jsx-style-dynamic-selector{padding:6px;width:80px;margin-left:5px;font-size:0.65rem;}}@media screen and (max-Width:450px){.nav-buttons.__jsx-style-dynamic-selector{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.page.__jsx-style-dynamic-selector{margin-top:2px;margin-bottom:2px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTmF2QnV0dG9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RW9CLEFBRzBCLEFBU0ksQUFZTCxBQU9ELEFBTUUsQUFJRyxBQWNELEFBTUosQUFZRyxBQU1HLEFBT0EsQUFJQyxBQU9KLEFBU1MsQUFLTixXQS9FSyxBQThCWCxDQXJDVyxBQWlEVCxBQXdCQSxDQTVEZixFQWtCMEMsQUF3QnBCLEFBT3BCLEFBeUJvQixDQXRFRSxBQWlEcUIsQ0E5RTNCLEtBa0RELENBWUksQUF3QkQsVUFyRkMsQUFtQjJCLEFBZ0RILEFBZ0MzQyxDQXZGd0MsR0FzQ3RCLEVBb0NFLENBeEJwQixZQTdEYSxHQWtESyxFQW9DbEIsUUFyRlksUUFrREEsQ0E5RE8sR0FhRCxFQWlCcEIsTUFpQzJDLFNBeEJ0QixDQXpCSixNQXlGUyxFQWxEMEIsR0FtQ2xELElBekVxQyxZQVFGLENBdURjLHdCQTlEVCxNQXNDMUMsSUE5QkEsVUF2QjJCLEdBOEV6QixLQWYrQyxJQXdDL0MsUUFoRXVCLG1DQXlCekIsYUFoREEsNkJBZmMsWUFDRCxVQXNDQyxDQXJDa0MsV0FzQ25DLFdBQ0MsWUFDRyxZQXZDakIsR0F3Q3VDLHFDQUNHLHdGQUNNLDhDQUNoRCIsImZpbGUiOiJuYXZpZ2F0aW9uL05hdkJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcm95LWVkZW4vUHJvZ3JhbW1pbmcvUHJvamVjdHMvTWluZS9uZXh0LXB3YSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3RhdGljL3N0eWxlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZUNsaWNrKClcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy5wcm9wcy50b2dnbGVNZW51KClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5wcm9wcy5tb2RlXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5wcm9wcy5hY3RpdmVcbiAgICBjb25zdCBtZW51ID0gdGhpcy5wcm9wcy5tZW51XG4gICAgY29uc3QgdGltZSA9IG1vZGUgPyBcIm5pZ2h0XCIgOiBcImRheVwiXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnVcIlxuICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLnRvZ2dsZU1lbnUoKSB9XG4gICAgICAgID5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWVudS1saW5lXCIgLz5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWVudS1saW5lXCIgLz5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWVudS1saW5lXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHsgYWN0aXZlID09PSBcImhvbWVcIiA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9eyBgcGFnZSAke2FjdGl2ZSA9PT0gXCJob21lXCIgPyBcImFjdGl2ZVwiIDogXCJsaW5rXCJ9YCB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMYXRlc3QgTmV3c1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApOihcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgYXM9eyBgLyR7dGltZX1gIH1cbiAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvJyxcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgbW9kZTogdGltZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYWdlIGxpbmtcIj5MYXRlc3QgTmV3czwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSB9XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgYXM9eyBgL2Fib3V0LyR7dGltZX1gfVxuICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL2Fib3V0JyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIG1vZGU6IHRpbWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBgcGFnZSAke2FjdGl2ZSA9PT0gXCJhYm91dFwiID8gXCJhY3RpdmVcIiA6IFwibGlua1wifWAgfSA+XG4gICAgICAgICAgICBBYm91dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgYXM9eyBgL3JlZmVyZW5jZS8ke3RpbWV9YH1cbiAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcmVmZXJlbmNlJywgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBtb2RlOiBtb2RlID8gXCJuaWdodFwiIDogXCJkYXlcIixcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBgcGFnZSAke2FjdGl2ZSA9PT0gXCJyZWZlcmVuY2VcIj8gXCJhY3RpdmVcIiA6IFwibGlua1wifWAgfSA+XG4gICAgICAgICAgICBSZWZlcmVuY2VzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5uYXYtYnV0dG9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IG1vZGUgPyBzdHlsZXMuY29sb3JzLmRhcmtlcl9uaWdodCA6IFwiI2ZmZlwiIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiAkeyBtZW51ID8gXCJub25lXCIgOiBcImlubGluZVwifTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zdGFuZGFyZCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkeyBzdHlsZXMudHJhbnNpdGlvbnMuZmFzdGVzdCB9O1xuICAgICAgICAgICAgY29sb3I6ICR7IG1vZGUgP1xuICAgICAgICAgICAgc3R5bGVzLmNvbG9ycy5zdGFuZGFyZF9uaWdodCA6IHN0eWxlcy5jb2xvcnMuc3RhbmRhcmQgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGluazpob3ZlciwgLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBtb2RlID9cbiAgICAgICAgICAgIHN0eWxlcy5jb2xvcnMuZGFya2VyX25pZ2h0IDogc3R5bGVzLmNvbG9ycy5kYXJrZXIgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWN0aXZlOmZvY3VzLCAubGluazpmb2N1cywgLm1lbnU6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogJHsgbWVudSA/IFwiZmxleFwiIDogXCJub25lXCJ9O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHsgc3R5bGVzLnRyYW5zaXRpb25zLnN0YW5kYXJkIH07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBtb2RlID8gc3R5bGVzLmNvbG9ycy5kYXJrZXJfbmlnaHQgOiBcIiNmZmZcIiB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51OmhvdmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR7IHN0eWxlcy50cmFuc2l0aW9ucy5mYXN0ZXN0IH07XG4gICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IDBweCAkeyBtb2RlID8gXCIjY2NjXCIgOiBcIiNkZGRcIiB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWxpbmUge1xuICAgICAgICAgICAgd2lkdGg6IDI3cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zdGFuZGFyZCB9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IFwiI2ZmZlwiIDogc3R5bGVzLmNvbG9ycy5zdGFuZGFyZCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtV2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAucGFnZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2LWJ1dHRvbnN7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkeyBzdHlsZXMudHJhbnNpdGlvbnMuc3RhbmRhcmQgfTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuZGFya2VyX25pZ2h0IDogXCIjZmZmXCIgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51OmhvdmVyIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJHsgc3R5bGVzLnRyYW5zaXRpb25zLmZhc3Rlc3QgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LVdpZHRoOiA0NzJweCkge1xuICAgICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1XaWR0aDogNDUwcHgpIHtcbiAgICAgICAgICAgIC5uYXYtYnV0dG9ucyB7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=navigation/NavButtons.js */',
        dynamic: [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTmF2QnV0dG9ucy5qcyJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwicHJvcHMiLCJoYW5kbGVDbGljayIsInRvZ2dsZU1lbnUiLCJtb2RlIiwiYWN0aXZlIiwibWVudSIsInRpbWUiLCJjb2xvcnMiLCJkYXJrZXJfbmlnaHQiLCJ0cmFuc2l0aW9ucyIsInN0YW5kYXJkIiwiZmFzdGVzdCIsInN0YW5kYXJkX25pZ2h0IiwiZGFya2VyIiwicGF0aG5hbWUiLCJxdWVyeSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR0gsQUFDWjtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7aUNBRVksQUFDWDtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7NkJBRVE7bUJBQ1A7O1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7VUFBTSxTQUFTLEtBQUEsQUFBSyxNQUFwQixBQUEwQixBQUMxQjtVQUFNLE9BQU8sS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCO1VBQU0sT0FBTyxPQUFBLEFBQU8sVUFBcEIsQUFBOEIsQUFDOUI7NkJBQ0UsY0FBQTs0REE0RDJCLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGVBNURoRCxBQTREK0QsUUFXN0MsT0FBQSxBQUFPLFNBdkV6QixBQXVFa0MsVUFDYixpQkFBQSxBQUFPLFlBeEU1QixBQXdFd0MsVUFNbkIsaUJBQUEsQUFBTyxZQTlFNUIsQUE4RXdDLFNBQ3hCLE9BQ1YsaUJBQUEsQUFBTyxPQURHLEFBQ0ksaUJBQWlCLGlCQUFBLEFBQU8sT0FoRjVDLEFBZ0ZtRCxVQU14QixPQUNyQixpQkFBQSxBQUFPLE9BRGMsQUFDUCxlQUFlLGlCQUFBLEFBQU8sT0F2RjFDLEFBdUZpRCxRQWdCL0IsT0FBQSxBQUFPLFNB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QUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixlQTVEaEQsQUE0RCtELFFBVzdDLE9BQUEsQUFBTyxTQXZFekIsQUF1RWtDLFVBQ2IsaUJBQUEsQUFBTyxZQXhFNUIsQUF3RXdDLFVBTW5CLGlCQUFBLEFBQU8sWUE5RTVCLEFBOEV3QyxTQUN4QixPQUNWLGlCQUFBLEFBQU8sT0FERyxBQUNJLGlCQUFpQixpQkFBQSxBQUFPLE9BaEY1QyxBQWdGbUQsVUFNeEIsT0FDckIsaUJBQUEsQUFBTyxPQURjLEFBQ1AsZUFBZSxpQkFBQSxBQUFPLE9BdkYxQyxBQXVGaUQsUUFnQi9CLE9BQUEsQUFBTyxTQXZHekIsQUF1R2tDLFFBQ2IsaUJBQUEsQUFBTyxZQXhHNUIsQUF3R3dDLFVBQ2IsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsZUF6R2hELEFBeUcrRCxRQUsxQyxpQkFBQSxBQUFPLFlBOUc1QixBQThHd0MsU0FDVixPQUFBLEFBQU8sU0EvR3JDLEFBK0c4QyxRQVV6QixpQkFBQSxBQUFPLFlBekg1QixBQXlId0MsVUFDYixPQUFBLEFBQU8sU0FBUyxpQkFBQSxBQUFPLE9BMUhsRCxBQTBIeUQsVUFhbEMsaUJBQUEsQUFBTyxZQXZJOUIsQUF1STBDLFVBQ2IsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsZUF4SWxELEFBd0lpRSxRQVMxQyxpQkFBQSxBQUFPLFlBbEpoQyxBQUNFLEFBaUowQyxBQTRCN0M7QUE3S0c7Ozs7O0VBZnVCLGdCQUFNLEEiLCJmaWxlIjoiTmF2QnV0dG9ucy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yb3ktZWRlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9NaW5lL25leHQtcHdhIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/NavButtons.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/NavButtons.js"); } } })();

/***/ }),
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(406);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(420);

var _Footer2 = _interopRequireDefault(_Footer);

var _Title = __webpack_require__(421);

var _Title2 = _interopRequireDefault(_Title);

var _Menu = __webpack_require__(422);

var _Menu2 = _interopRequireDefault(_Menu);

var _styles = __webpack_require__(392);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Layout.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this.state = {
      needMenu: false,
      menu: false
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener("resize", function () {
        return _this2.needMenu();
      });
      this.setState({ needMenu: window.outerWidth <= 800 });
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      var status = !this.state.menu;
      this.setState({ menu: status });
    }
  }, {
    key: 'changeMode',
    value: function changeMode() {
      this.props.changeMode();
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.onClick();
    }
  }, {
    key: 'needMenu',
    value: function needMenu() {
      var need = window.outerWidth <= 800;
      this.state.menu && !need ? this.toggleMenu() : "";
      this.setState({ needMenu: need });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var menu = this.state.needMenu;
      var mode = this.props.mode;
      var name = this.props.name;
      var title = this.props.title;
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['2304402342', [_styles2.default.transitions.standard, this.props.mode ? _styles2.default.colors.darker_night : "#fff"]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_Header2.default, {
        title: title,
        name: name,
        mode: mode,
        handleClick: function handleClick() {
          return _this3.handleClick();
        },
        changeMode: function changeMode() {
          return _this3.changeMode();
        },
        toggleMenu: function toggleMenu() {
          return _this3.toggleMenu();
        },
        menu: menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(_Menu2.default, {
        active: name,
        on: this.state.menu,
        menu: !menu,
        mode: mode,
        handleClick: function handleClick() {
          return _this3.handleClick();
        },
        changeMode: function changeMode() {
          return _this3.changeMode();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_Title2.default, {
        mode: mode,
        title: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), this.props.children, _react2.default.createElement(_Footer2.default, { mode: this.props.mode, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2304402342',
        css: '*{padding:0;margin:0;box-sizing:border-box;font-family:\'Montserrat\',sans-serif;}body{-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';background-color:' + (this.props.mode ? _styles2.default.colors.darker_night : "#fff") + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFMEIsQUFHc0IsQUFROEIsVUFQL0IsU0FDYSxzQkFDZSxvQ0FDdkMsV0FLZ0QsOENBQ2hEIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vbmF2aWdhdGlvbi9NZW51J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdGF0aWMvc3R5bGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuZWVkTWVudTogZmFsc2UsXG4gICAgICBtZW51OiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB0aGlzLm5lZWRNZW51KCkpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bmVlZE1lbnU6IHdpbmRvdy5vdXRlcldpZHRoIDw9IDgwMH0pXG4gIH1cblxuICB0b2dnbGVNZW51KCkge1xuICAgIGNvbnN0IHN0YXR1cyA9ICF0aGlzLnN0YXRlLm1lbnVcbiAgICB0aGlzLnNldFN0YXRlKHttZW51OiBzdGF0dXN9KVxuICB9XG5cbiAgY2hhbmdlTW9kZSgpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZU1vZGUoKVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKClcbiAgfVxuXG4gIG5lZWRNZW51KCkge1xuICAgIGNvbnN0IG5lZWQgPSB3aW5kb3cub3V0ZXJXaWR0aCA8PSA4MDBcbiAgICB0aGlzLnN0YXRlLm1lbnUgJiYgIW5lZWQgPyB0aGlzLnRvZ2dsZU1lbnUoKSA6IFwiXCJcbiAgICB0aGlzLnNldFN0YXRlKHtuZWVkTWVudTogbmVlZH0pXG4gIH1cblxuIHJlbmRlcigpIHtcbiAgIGNvbnN0IG1lbnUgPSB0aGlzLnN0YXRlLm5lZWRNZW51XG4gICBjb25zdCBtb2RlID0gdGhpcy5wcm9wcy5tb2RlXG4gICBjb25zdCBuYW1lID0gdGhpcy5wcm9wcy5uYW1lXG4gICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGVcbiAgIHJldHVybiAoXG4gICAgIDxkaXY+XG4gICAgICAgPEhlYWRlclxuICAgICAgICAgdGl0bGU9eyB0aXRsZSB9XG4gICAgICAgICBuYW1lPXsgbmFtZSB9XG4gICAgICAgICBtb2RlPXsgbW9kZSB9XG4gICAgICAgICBoYW5kbGVDbGljaz17ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSB9XG4gICAgICAgICBjaGFuZ2VNb2RlPXsgKCkgPT4gdGhpcy5jaGFuZ2VNb2RlKCkgfVxuICAgICAgICAgdG9nZ2xlTWVudT17ICgpID0+IHRoaXMudG9nZ2xlTWVudSgpIH1cbiAgICAgICAgIG1lbnU9eyBtZW51IH1cbiAgICAgICAvPlxuICAgICAgIDxNZW51XG4gICAgICAgICBhY3RpdmU9eyBuYW1lIH1cbiAgICAgICAgIG9uPXsgdGhpcy5zdGF0ZS5tZW51IH1cbiAgICAgICAgIG1lbnU9eyAhbWVudSB9XG4gICAgICAgICBtb2RlPXsgbW9kZSB9XG4gICAgICAgICBoYW5kbGVDbGljaz17ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSB9XG4gICAgICAgICBjaGFuZ2VNb2RlPXsgKCkgPT4gdGhpcy5jaGFuZ2VNb2RlKCkgfVxuICAgICAgIC8+XG4gICAgICAgPFRpdGxlXG4gICAgICAgICBtb2RlPXsgbW9kZSB9XG4gICAgICAgICB0aXRsZT17IHRpdGxlIH1cbiAgICAgICAvPlxuICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgPEZvb3RlciBtb2RlPXsgdGhpcy5wcm9wcy5tb2RlIH0gLz5cblxuICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAqIHtcbiAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgfVxuXG5cbiAgICAgICAgIGJvZHkge1xuICAgICAgICAgICB0cmFuc2l0aW9uOiAkeyBzdHlsZXMudHJhbnNpdGlvbnMuc3RhbmRhcmQgfTtcbiAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgdGhpcy5wcm9wcy5tb2RlID8gc3R5bGVzLmNvbG9ycy5kYXJrZXJfbmlnaHQgOiBcIiNmZmZcIn07XG4gICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgPC9kaXY+XG4gICApXG4gfVxufVxuIl19 */\n/*@ sourceURL=components/Layout.js */',
        dynamic: [_styles2.default.transitions.standard, this.props.mode ? _styles2.default.colors.darker_night : "#fff"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsIlRpdGxlIiwiTWVudSIsInN0eWxlcyIsInN0YXRlIiwibmVlZE1lbnUiLCJtZW51Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwib3V0ZXJXaWR0aCIsInN0YXR1cyIsInByb3BzIiwiY2hhbmdlTW9kZSIsIm9uQ2xpY2siLCJuZWVkIiwidG9nZ2xlTWVudSIsIm1vZGUiLCJuYW1lIiwidGl0bGUiLCJ0cmFuc2l0aW9ucyIsInN0YW5kYXJkIiwiY29sb3JzIiwiZGFya2VyX25pZ2h0IiwiaGFuZGxlQ2xpY2siLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7Ozs7Ozs7OztrQ0FHakI7O29CQUFjO3dDQUFBOztnSUFHWjs7VUFBQSxBQUFLO2dCQUFRLEFBQ0QsQUFDVjtZQUxVLEFBR1osQUFBYSxBQUVMO0FBRkssQUFDWDtXQUdIOzs7Ozt3Q0FFbUI7bUJBQ2xCOzthQUFBLEFBQU8saUJBQVAsQUFBd0IsVUFBVSxZQUFBO2VBQU0sT0FBTixBQUFNLEFBQUs7QUFBN0MsQUFDQTtXQUFBLEFBQUssU0FBUyxFQUFDLFVBQVUsT0FBQSxBQUFPLGNBQWhDLEFBQWMsQUFBZ0MsQUFDL0M7Ozs7aUNBRVksQUFDWDtVQUFNLFNBQVMsQ0FBQyxLQUFBLEFBQUssTUFBckIsQUFBMkIsQUFDM0I7V0FBQSxBQUFLLFNBQVMsRUFBQyxNQUFmLEFBQWMsQUFBTyxBQUN0Qjs7OztpQ0FFWSxBQUNYO1dBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjs7OztrQ0FFYSxBQUNaO1dBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjs7OzsrQkFFVSxBQUNUO1VBQU0sT0FBTyxPQUFBLEFBQU8sY0FBcEIsQUFBa0MsQUFDbEM7V0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLENBQW5CLEFBQW9CLE9BQU8sS0FBM0IsQUFBMkIsQUFBSyxlQUFoQyxBQUErQyxBQUMvQztXQUFBLEFBQUssU0FBUyxFQUFDLFVBQWYsQUFBYyxBQUFXLEFBQzFCOzs7OzZCQUVPO21CQUNQOztVQUFNLE9BQU8sS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCO1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7VUFBTSxPQUFPLEtBQUEsQUFBSyxNQUFsQixBQUF3QixBQUN4QjtVQUFNLFFBQVEsS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3pCOzZCQUNFLGNBQUE7NERBbUNxQixpQkFBQSxBQUFPLFlBbkM1QixBQW1Dd0MsVUFDYixLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8saUJBQUEsQUFBTyxPQUF6QixBQUFnQyxlQXBDM0QsQUFvQzBFOztvQkFwQzFFO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQztlQUFELEFBQ1UsQUFDUjtjQUZGLEFBRVMsQUFDUDtjQUhGLEFBR1MsQUFDUDtxQkFBYyx1QkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUozQixBQUtFO29CQUFhLHNCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBTDFCLEFBTUU7b0JBQWEsc0JBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFOMUIsQUFPRTtjQVBGLEFBT1M7O29CQVBUO3NCQURGLEFBQ0UsQUFTQTtBQVRBO0FBQ0UsMEJBUUYsQUFBQztnQkFBRCxBQUNXLEFBQ1Q7WUFBSyxLQUFBLEFBQUssTUFGWixBQUVrQixBQUNoQjtjQUFPLENBSFQsQUFHVSxBQUNSO2NBSkYsQUFJUyxBQUNQO3FCQUFjLHVCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBTDNCLEFBTUU7b0JBQWEsc0JBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFOMUI7O29CQUFBO3NCQVZGLEFBVUUsQUFRQTtBQVJBO0FBQ0UsMEJBT0YsQUFBQztjQUFELEFBQ1MsQUFDUDtlQUZGLEFBRVU7O29CQUZWO3NCQWxCRixBQWtCRSxBQUlFO0FBSkY7QUFDRSxlQUdBLEFBQUssTUF0QlQsQUFzQmUsQUFDYiwwQkFBQSxBQUFDLGtDQUFPLE1BQU8sS0FBQSxBQUFLLE1BQXBCLEFBQTBCO29CQUExQjtzQkF2QkYsQUF1QkU7QUFBQTs7aUJBdkJGOzRIQW1DcUIsaUJBQUEsQUFBTyxZQW5DNUIsQUFtQ3dDLDRCQUFuQixpQkFBQSxBQUFPLFlBbkM1QixBQW1Dd0MsbUNBQ2IsS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFPLGlCQUFBLEFBQU8sT0FBekIsQUFBZ0MsZUFwQzNELEFBb0MwRSxVQXBDMUU7a0JBbUNxQixpQkFBQSxBQUFPLFlBbkM1QixBQW1Dd0MsVUFDYixLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8saUJBQUEsQUFBTyxPQUF6QixBQUFnQyxlQXJDN0QsQUFDRSxBQW9DMEUsQUFLN0U7QUF6Q0c7Ozs7O0VBeEN3QixnQkFBTSxBIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yb3ktZWRlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9NaW5lL25leHQtcHdhIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Layout.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Layout.js"); } } })();

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

var _Nav = __webpack_require__(407);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Header.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.handleClick();
    }
  }, {
    key: 'changeMode',
    value: function changeMode() {
      this.props.changeMode();
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.props.toggleMenu();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, this.props.title), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('link', {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/static/favicon.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), _react2.default.createElement(_Nav2.default, {
        active: this.props.name,
        handleClick: function handleClick() {
          return _this2.handleClick();
        },
        changeMode: function changeMode() {
          return _this2.changeMode();
        },
        toggleMenu: function toggleMenu() {
          return _this2.toggleMenu();
        },
        mode: this.props.mode,
        menu: this.props.menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXYiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiY2hhbmdlTW9kZSIsInRvZ2dsZU1lbnUiLCJ0aXRsZSIsIm5hbWUiLCJtb2RlIiwibWVudSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHQSxBQUNaO1dBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjs7OztpQ0FFWSxBQUNYO1dBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjs7OztpQ0FFWSxBQUNYO1dBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjs7Ozs2QkFFTzttQkFDTjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFTO0FBQVQ7QUFBQSxjQUFTLEFBQUssTUFEaEIsQUFDRSxBQUFvQixBQUNwQixnREFBTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBRkYsQUFFRSxBQUNBO0FBREE7O2FBQ0EsQUFDTSxBQUNKO2NBRkYsQUFFTyxBQUNMO2NBSEYsQUFHTzs7b0JBSFA7c0JBSEYsQUFHRSxBQUtBO0FBTEE7QUFDRSxrREFJSSxNQUFOLEFBQVcsc0RBQXFELEtBQWhFLEFBQW9FO29CQUFwRTtzQkFUSixBQUNFLEFBUUUsQUFFRjtBQUZFOzJCQUVGLEFBQUM7Z0JBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ3BCO3FCQUFjLHVCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBRjNCLEFBR0U7b0JBQWEsc0JBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFIMUIsQUFJRTtvQkFBYSxzQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUoxQixBQUtFO2NBQU8sS0FBQSxBQUFLLE1BTGQsQUFLb0IsQUFDbEI7Y0FBTyxLQUFBLEFBQUssTUFOZCxBQU1vQjs7b0JBTnBCO3NCQVpKLEFBQ0UsQUFXRSxBQVVMO0FBVks7QUFDRTs7Ozs7RUEzQm1CLGdCQUFNLEEiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Header.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Header.js"); } } })();

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Logo = __webpack_require__(408);

var _Logo2 = _interopRequireDefault(_Logo);

var _Switch = __webpack_require__(399);

var _Switch2 = _interopRequireDefault(_Switch);

var _NavButtons = __webpack_require__(400);

var _NavButtons2 = _interopRequireDefault(_NavButtons);

var _styles = __webpack_require__(392);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Nav.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.handleClick();
    }
  }, {
    key: 'changeMode',
    value: function changeMode() {
      this.props.changeMode();
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.props.toggleMenu();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var active = this.props.active;
      var mode = this.props.mode;
      return _react2.default.createElement('nav', {
        className: _style2.default.dynamic([['732083918', [mode ? "#ccc" : "#ddd", _styles2.default.transitions.slow]]]) + ' ' + 'navbar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_Logo2.default, {
        handleClick: active === "home" ? function () {
          return _this2.handleClick();
        } : "",
        mode: mode,
        active: active,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement(_Switch2.default, {
        changeMode: function changeMode() {
          return _this2.changeMode();
        },
        mode: mode,
        menu: this.props.menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_NavButtons2.default, {
        mode: mode,
        active: active,
        handleClick: active === "home" ? function () {
          return _this2.handleClick();
        } : "",
        toggleMenu: function toggleMenu() {
          return _this2.toggleMenu();
        },
        menu: this.props.menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '732083918',
        css: '.navbar.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:48px;border-bottom:3px solid ' + (mode ? "#ccc" : "#ddd") + ';-webkit-transition:' + _styles2.default.transitions.slow + ';transition:' + _styles2.default.transitions.slow + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0IsQUFHMEIsMEVBQ00sNkZBQ1AsWUFDeUMscURBQ2Isd0ZBQzFDIiwiZmlsZSI6Im5hdmlnYXRpb24vTmF2LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4vU3dpdGNoJ1xuaW1wb3J0IEJ1dHRvbnMgZnJvbSAnLi9OYXZCdXR0b25zJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdGF0aWMvc3R5bGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xpY2soKVxuICB9XG5cbiAgY2hhbmdlTW9kZSgpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZU1vZGUoKVxuICB9XG5cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLnByb3BzLnRvZ2dsZU1lbnUoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMucHJvcHMuYWN0aXZlXG4gICAgY29uc3QgbW9kZSA9IHRoaXMucHJvcHMubW9kZVxuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICA8TG9nb1xuICAgICAgICAgIGhhbmRsZUNsaWNrPXsgYWN0aXZlID09PSBcImhvbWVcIiA/ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSA6IFwiXCIgfVxuICAgICAgICAgIG1vZGU9eyBtb2RlIH1cbiAgICAgICAgICBhY3RpdmU9eyBhY3RpdmUgfVxuICAgICAgICAvPlxuICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgY2hhbmdlTW9kZT17ICgpID0+IHRoaXMuY2hhbmdlTW9kZSgpIH1cbiAgICAgICAgICBtb2RlPXsgbW9kZSB9XG4gICAgICAgICAgbWVudT17IHRoaXMucHJvcHMubWVudSB9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25zXG4gICAgICAgICAgbW9kZT17IG1vZGUgfVxuICAgICAgICAgIGFjdGl2ZT17IGFjdGl2ZSB9XG4gICAgICAgICAgaGFuZGxlQ2xpY2s9eyBhY3RpdmUgPT09IFwiaG9tZVwiID8gKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpIDogXCJcIiB9XG4gICAgICAgICAgdG9nZ2xlTWVudT17ICgpID0+IHRoaXMudG9nZ2xlTWVudSgpIH1cbiAgICAgICAgICBtZW51PXsgdGhpcy5wcm9wcy5tZW51IH1cbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5uYXZiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHsgbW9kZSA/IFwiI2NjY1wiIDogXCIjZGRkXCIgfTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zbG93IH07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L25hdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=navigation/Nav.js */',
        dynamic: [mode ? "#ccc" : "#ddd", _styles2.default.transitions.slow]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTmF2LmpzIl0sIm5hbWVzIjpbIkxvZ28iLCJTd2l0Y2giLCJCdXR0b25zIiwic3R5bGVzIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImNoYW5nZU1vZGUiLCJ0b2dnbGVNZW51IiwiYWN0aXZlIiwibW9kZSIsInRyYW5zaXRpb25zIiwic2xvdyIsIm1lbnUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR0gsQUFDWjtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7aUNBRVksQUFDWDtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7aUNBRVksQUFDWDtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7NkJBRVE7bUJBQ1A7O1VBQU0sU0FBUyxLQUFBLEFBQUssTUFBcEIsQUFBMEIsQUFDMUI7VUFBTSxPQUFPLEtBQUEsQUFBSyxNQUFsQixBQUF3QixBQUN4Qjs2QkFDRSxjQUFBOzJEQXVCa0MsT0FBQSxBQUFPLFNBdkJ6QyxBQXVCa0QsUUFDN0IsaUJBQUEsQUFBTyxZQXhCNUIsQUF3QndDLGlCQXhCeEMsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDO2dDQUNlLEFBQVcsU0FBUyxZQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBQS9CLFNBQUEsR0FEaEIsQUFDK0QsQUFDN0Q7Y0FGRixBQUVTLEFBQ1A7Z0JBSEYsQUFHVzs7b0JBSFg7c0JBREYsQUFDRSxBQUtBO0FBTEE7QUFDRSwwQkFJRixBQUFDO29CQUNjLHNCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBRDFCLEFBRUU7Y0FGRixBQUVTLEFBQ1A7Y0FBTyxLQUFBLEFBQUssTUFIZCxBQUdvQjs7b0JBSHBCO3NCQU5GLEFBTUUsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsQUFBQztjQUFELEFBQ1MsQUFDUDtnQkFGRixBQUVXLEFBQ1Q7Z0NBQWMsQUFBVyxTQUFTLFlBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFBL0IsU0FBQSxHQUhoQixBQUcrRCxBQUM3RDtvQkFBYSxzQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUoxQixBQUtFO2NBQU8sS0FBQSxBQUFLLE1BTGQsQUFLb0I7O29CQUxwQjtzQkFYRixBQVdFO0FBQUE7QUFDRTtpQkFaSjttUUF1QmtDLE9BQUEsQUFBTyxTQXZCekMsQUF1QmtELG1DQUM3QixpQkFBQSxBQUFPLFlBeEI1QixBQXdCd0Msd0JBQW5CLGlCQUFBLEFBQU8sWUF4QjVCLEFBd0J3QyxPQXhCeEM7a0JBdUJrQyxPQUFBLEFBQU8sU0F2QnpDLEFBdUJrRCxRQUM3QixpQkFBQSxBQUFPLFlBekI5QixBQUNFLEFBd0J3QyxBQUszQztBQTdCRzs7Ozs7RUFqQnVCLGdCQUFNLEEiLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Nav.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Nav.js"); } } })();

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(393);

var _link2 = _interopRequireDefault(_link);

var _styles = __webpack_require__(392);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Logo.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.handleClick();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mode = this.props.mode;
      var active = this.props.active;
      var time = mode ? "night" : "day";
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, active === "home" ? _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.handleClick();
        }, className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('img', {
        src: '/static/' + (mode ? "logo_dark.jpeg" : "logo.jpeg"),
        alt: 'logo',
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'logo-img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Hacker News')) : _react2.default.createElement(_link2.default, {
        as: '/' + time,
        href: {
          pathname: '/',
          query: {
            mode: time
          }
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('div', {
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('img', {
        src: '/static/' + (mode ? "logo_dark.jpeg" : "logo.jpeg"),
        alt: 'logo',
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'logo-img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Hacker News'))), _react2.default.createElement(_style2.default, {
        styleId: '2933924457',
        css: '.container.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';background-color:' + (mode ? _styles2.default.colors.standard_night : "#fff") + ';}.title.__jsx-style-dynamic-selector{margin-left:5px;}.logo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:210px;color:' + (mode ? "#fff" : "#000") + ';}.logo-img.__jsx-style-dynamic-selector{height:45px;width:45px;}.logo-img.__jsx-style-dynamic-selector:hover{box-shadow:2px 1px ' + (mode ? "#ccc" : "#ddd") + ';}@media screen and (max-Width:780px){.logo-img.__jsx-style-dynamic-selector:hover{box-shadow:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q29CLEFBR3dCLEFBUUssQUFJSCxBQVFELEFBS29DLEFBSzlCLFdBN0JMLENBb0JGLElBWmIsQUFzQkUsT0FURix5QkFJQSwwQkFicUIsV0FYQSxrRkFZSixXQVh5QixJQVk1QixZQUN1QixtQ0FDckMscUNBYmdELDhDQUNoRCIsImZpbGUiOiJuYXZpZ2F0aW9uL0xvZ28uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcm95LWVkZW4vUHJvZ3JhbW1pbmcvUHJvamVjdHMvTWluZS9uZXh0LXB3YSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3RhdGljL3N0eWxlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZUNsaWNrKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5wcm9wcy5tb2RlXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5wcm9wcy5hY3RpdmVcbiAgICBjb25zdCB0aW1lID0gbW9kZSA/IFwibmlnaHRcIiA6IFwiZGF5XCJcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgeyBhY3RpdmUgPT09IFwiaG9tZVwiID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCkgfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nby1pbWdcIlxuICAgICAgICAgICAgICBzcmM9eyBgL3N0YXRpYy8ke21vZGUgPyBcImxvZ29fZGFyay5qcGVnXCIgOiBcImxvZ28uanBlZ1wifWAgfVxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5IYWNrZXIgTmV3czwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGFzPXsgYC8ke3RpbWV9YCB9XG4gICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnLycsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIG1vZGU6IHRpbWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvLWltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXsgYC9zdGF0aWMvJHttb2RlID8gXCJsb2dvX2RhcmsuanBlZ1wiIDogXCJsb2dvLmpwZWdcIn1gIH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+SGFja2VyIE5ld3M8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zdGFuZGFyZCB9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuc3RhbmRhcmRfbmlnaHQgOiBcIiNmZmZcIiB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICR7IG1vZGUgPyBcIiNmZmZcIiA6IFwiIzAwMFwiIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvZ28taW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvLWltZzpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4ICR7IG1vZGUgPyBcIiNjY2NcIiA6IFwiI2RkZFwiIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1XaWR0aDogNzgwcHgpIHtcbiAgICAgICAgICAgIC5sb2dvLWltZzpob3ZlciB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=navigation/Logo.js */',
        dynamic: [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTG9nby5qcyJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIm1vZGUiLCJhY3RpdmUiLCJ0aW1lIiwidHJhbnNpdGlvbnMiLCJzdGFuZGFyZCIsImNvbG9ycyIsInN0YW5kYXJkX25pZ2h0IiwicGF0aG5hbWUiLCJxdWVyeSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR0gsQUFDWjtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7NkJBRVE7bUJBQ1A7O1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7VUFBTSxTQUFTLEtBQUEsQUFBSyxNQUFwQixBQUEwQixBQUMxQjtVQUFNLE9BQU8sT0FBQSxBQUFPLFVBQXBCLEFBQThCLEFBQzlCOzZCQUNFLGNBQUE7NERBb0NxQixpQkFBQSxBQUFPLFlBcEM1QixBQW9Dd0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFyQ2hELEFBcUNpRSxRQVlqRCxPQUFBLEFBQU8sU0FqRHZCLEFBaURnQyxRQVNILE9BQUEsQUFBTyxTQTFEcEMsQUEwRDZDLG1CQTFEN0MsQUFBZTs7b0JBQWY7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxhQUNJLEFBQVcseUJBQ1gsY0FBQSxTQUFzQixTQUFVLG1CQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBQTNDLCtEQWtDaUIsaUJBQUEsQUFBTyxZQWxDeEIsQUFrQ29DLFVBQ2IsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsaUJBbkM1QyxBQW1DNkQsUUFZakQsT0FBQSxBQUFPLFNBL0NuQixBQStDNEIsUUFTSCxPQUFBLEFBQU8sU0F4RGhDLEFBd0R5QyxtQkF4RHpDLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtPQUFBOzJCQUdxQixPQUFBLEFBQU8sbUJBRjFCLEFBRUUsQUFBMkMsQUFDM0M7YUFIRixBQUdNOzREQThCUyxpQkFBQSxBQUFPLFlBakN0QixBQWlDa0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFsQzFDLEFBa0MyRCxRQVlqRCxPQUFBLEFBQU8sU0E5Q2pCLEFBOEMwQixRQVNILE9BQUEsQUFBTyxTQXZEOUIsQUF1RHVDLG1CQXZEdkMsQUFDWTs7b0JBRFo7c0JBREYsQUFDRSxBQUtBO0FBTEE7QUFFRSwwQkFHRixjQUFBOzREQTRCZSxpQkFBQSxBQUFPLFlBNUJ0QixBQTRCa0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkE3QjFDLEFBNkIyRCxRQVlqRCxPQUFBLEFBQU8sU0F6Q2pCLEFBeUMwQixRQVNILE9BQUEsQUFBTyxTQWxEOUIsQUFrRHVDLG1CQWxEdkMsQUFBYzs7b0JBQWQ7c0JBQUE7QUFBQTtBQUFBLFNBUEYsQUFDQSxBQU1FLGtDQUdGLEFBQUM7a0JBQUQsQUFDVyxBQUNUOztvQkFDRSxBQUNZLEFBQ1Y7O2tCQUxOLEFBR0ksQUFFUyxBQUNDO0FBREQsQUFDTDtBQUhKLEFBQ0U7b0JBSk47c0JBQUEsQUFVRTtBQVZGO0FBQ0UsT0FERixrQkFVRSxjQUFBOzREQWVlLGlCQUFBLEFBQU8sWUFmdEIsQUFla0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFoQjFDLEFBZ0IyRCxRQVlqRCxPQUFBLEFBQU8sU0E1QmpCLEFBNEIwQixRQVNILE9BQUEsQUFBTyxTQXJDOUIsQUFxQ3VDLG1CQXJDdkMsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUE7MkJBR3FCLE9BQUEsQUFBTyxtQkFGMUIsQUFFRSxBQUEyQyxBQUMzQzthQUhGLEFBR007NERBV08saUJBQUEsQUFBTyxZQWRwQixBQWNnQyxVQUNiLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQWZ4QyxBQWV5RCxRQVlqRCxPQUFBLEFBQU8sU0EzQmYsQUEyQndCLFFBU0gsT0FBQSxBQUFPLFNBcEM1QixBQW9DcUMsbUJBcENyQyxBQUNZOztvQkFEWjtzQkFERixBQUNFLEFBS0E7QUFMQTtBQUVFLDBCQUdGLGNBQUE7NERBU2EsaUJBQUEsQUFBTyxZQVRwQixBQVNnQyxVQUNiLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQVZ4QyxBQVV5RCxRQVlqRCxPQUFBLEFBQU8sU0F0QmYsQUFzQndCLFFBU0gsT0FBQSxBQUFPLFNBL0I1QixBQStCcUMsbUJBL0JyQyxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0EzQlIsQUFXSSxBQVVFLEFBTUU7aUJBM0JSOytQQW9DcUIsaUJBQUEsQUFBTyxZQXBDNUIsQUFvQ3dDLDRCQUFuQixpQkFBQSxBQUFPLFlBcEM1QixBQW9Dd0MsbUNBQ2IsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsaUJBckNoRCxBQXFDaUUsa1RBWWpELE9BQUEsQUFBTyxTQWpEdkIsQUFpRGdDLGlKQVNILE9BQUEsQUFBTyxTQTFEcEMsQUEwRDZDLFVBMUQ3QztrQkFvQ3FCLGlCQUFBLEFBQU8sWUFwQzVCLEFBb0N3QyxVQUNiLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQXJDaEQsQUFxQ2lFLFFBWWpELE9BQUEsQUFBTyxTQWpEdkIsQUFpRGdDLFFBU0gsT0FBQSxBQUFPLFNBM0R0QyxBQUNFLEFBMEQ2QyxBQVloRDtBQXRFRzs7Ozs7RUFWdUIsZ0JBQU0sQSIsImZpbGUiOiJMb2dvLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Logo.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Logo.js"); } } })();

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(410), __esModule: true };

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(412);

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(418);

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(419);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(395);

var implementation = __webpack_require__(396);
var getPolyfill = __webpack_require__(398);
var shim = __webpack_require__(417);

var polyfill = getPolyfill();

defineProperties(polyfill, {
	implementation: implementation,
	getPolyfill: getPolyfill,
	shim: shim
});

module.exports = polyfill;


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 414 */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(394);

module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; }
	if (keys(obj).length !== 0) { return false; }
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(395);
var getPolyfill = __webpack_require__(398);

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(397);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 419 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(393);

var _link2 = _interopRequireDefault(_link);

var _styles = __webpack_require__(392);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Footer.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var mode = this.props.mode;
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]) + ' ' + 'footer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('span', {
        className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]) + ' ' + 'slogan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, 'Would you like to follow me?'), _react2.default.createElement(_link2.default, { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('img', { src: '/static/contact.svg', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }))), _react2.default.createElement(_link2.default, { href: 'https://github.com/RoyEde', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('img', { src: '/static/github.svg', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }))), _react2.default.createElement(_link2.default, { href: 'https://twitter.com/RoyEde', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('img', { src: '/static/twitter.svg', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }))), _react2.default.createElement(_link2.default, { href: 'https://www.facebook.com/RoyEdenProgram/', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('img', { src: '/static/facebook.svg', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }))), _react2.default.createElement(_style2.default, {
        styleId: '1246979785',
        css: '.footer.__jsx-style-dynamic-selector{padding-top:16px;padding-bottom:16px;padding-right:2.5%;padding-left:2.5%;width:100%;border-top:2px solid #ddd;height:54px;position:fixed;bottom:0;-webkit-transition:color ' + _styles2.default.transitions.standard + ',background-color ' + _styles2.default.transitions.standard + ';transition:color ' + _styles2.default.transitions.standard + ',background-color ' + _styles2.default.transitions.standard + ';background-color:' + (mode ? _styles2.default.colors.standard_night : "#fff") + ';}.footer.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{float:right;margin-left:10px;height:20px;width:20px;}.footer.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector:hover{margin-top:1px;}.footer.__jsx-style-dynamic-selector>.slogan.__jsx-style-dynamic-selector{font-weight:600;color:' + (mode ? "#fff" : _styles2.default.colors.standard) + ';}@media screen and (max-Width:355px){.footer.__jsx-style-dynamic-selector{font-size:0.85rem;}.footer.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{margin-left:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCb0IsQUFHOEIsQUFjTCxBQU9HLEFBSUMsQUFNSSxBQUlGLFlBcEJELEdBT25CLENBSXFDLEFBVW5DLENBbkNvQixDQStCcEIsV0FoQlksUUFkTyxJQWVSLFVBVWIsQ0FUQSxJQWZvQixrQkFDUCxXQUNlLDBCQUNkLFlBQ0csZUFDTixTQUNvRixnTUFDL0MsOENBQ2hEIiwiZmlsZSI6ImNvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0YXRpYy9zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLnByb3BzLm1vZGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xvZ2FuXCI+V291bGQgeW91IGxpa2UgdG8gZm9sbG93IG1lPzwvc3Bhbj5cbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PGltZyBzcmM9XCIvc3RhdGljL2NvbnRhY3Quc3ZnXCIgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Sb3lFZGVcIj5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PGltZyBzcmM9XCIvc3RhdGljL2dpdGh1Yi5zdmdcIiAvPjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9Sb3lFZGVcIj5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PGltZyBzcmM9XCIvc3RhdGljL3R3aXR0ZXIuc3ZnXCIgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9Sb3lFZGVuUHJvZ3JhbS9cIj5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PGltZyBzcmM9XCIvc3RhdGljL2ZhY2Vib29rLnN2Z1wiIC8+PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyLjUlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjUlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zdGFuZGFyZCB9LCBiYWNrZ3JvdW5kLWNvbG9yICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zdGFuZGFyZCB9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuc3RhbmRhcmRfbmlnaHQgOiBcIiNmZmZcIiB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb290ZXIgPiBhID4gaW1nIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvb3RlciA+IGEgPiBpbWc6aG92ZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb290ZXIgPiAuc2xvZ2FuIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogJHsgbW9kZSA/IFwiI2ZmZlwiIDogc3R5bGVzLmNvbG9ycy5zdGFuZGFyZCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtV2lkdGg6IDM1NXB4KSB7XG4gICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9vdGVyID4gYSA+IGltZyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Footer.js */',
        dynamic: [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJtb2RlIiwicHJvcHMiLCJ0cmFuc2l0aW9ucyIsInN0YW5kYXJkIiwiY29sb3JzIiwic3RhbmRhcmRfbmlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdSLEFBQ1A7VUFBTSxPQUFPLEtBQUEsQUFBSyxNQUFsQixBQUF3QixBQUN4Qjs2QkFDRSxjQUFBOzREQXlCMkIsaUJBQUEsQUFBTyxZQXpCbEMsQUF5QjhDLFVBQWdDLGlCQUFBLEFBQU8sWUF6QnJGLEFBeUJpRyxVQUN0RSxPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkExQmhELEFBMEJpRSxRQWdCakQsT0FBQSxBQUFPLFNBQVMsaUJBQUEsQUFBTyxPQTFDdkMsQUEwQzhDLHFCQTFDOUMsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzREQXdCeUIsaUJBQUEsQUFBTyxZQXhCaEMsQUF3QjRDLFVBQWdDLGlCQUFBLEFBQU8sWUF4Qm5GLEFBd0IrRixVQUN0RSxPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkF6QjlDLEFBeUIrRCxRQWdCakQsT0FBQSxBQUFPLFNBQVMsaUJBQUEsQUFBTyxPQXpDckMsQUF5QzRDLHFCQXpDNUMsQUFBZ0I7O29CQUFoQjtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsaURBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxRQUFILEFBQVUsVUFBUyxLQUFuQixBQUF1QiwyRUFzQkEsaUJBQUEsQUFBTyxZQXRCOUIsQUFzQjBDLFVBQWdDLGlCQUFBLEFBQU8sWUF0QmpGLEFBc0I2RixVQUN0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MkIsaUJBQUEsQUFBTyxZQXpCbEMsQUF5QjhDLGtDQUFnQyxpQkFBQSxBQUFPLFlBekJyRixBQXlCaUcsa0NBQXRFLGlCQUFBLEFBQU8sWUF6QmxDLEFBeUI4QyxrQ0FBZ0MsaUJBQUEsQUFBTyxZQXpCckYsQUF5QmlHLG1DQUN0RSxPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkExQmhELEFBMEJpRSx1WUFnQmpELE9BQUEsQUFBTyxTQUFTLGlCQUFBLEFBQU8sT0ExQ3ZDLEFBMEM4QyxZQTFDOUM7a0JBeUIyQixpQkFBQSxBQUFPLFlBekJsQyxBQXlCOEMsVUFBZ0MsaUJBQUEsQUFBTyxZQXpCckYsQUF5QmlHLFVBQ3RFLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQTFCaEQsQUEwQmlFLFFBZ0JqRCxPQUFBLEFBQU8sU0FBUyxpQkFBQSxBQUFPLE9BM0N6QyxBQUNFLEFBMEM4QyxBQWdCakQ7QUExREc7Ozs7O0VBSnVCLGdCQUFNLEEiLCJmaWxlIjoiRm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Footer.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Footer.js"); } } })();

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(392);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Title.js";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      var mode = this.props.mode;
      return _react2.default.createElement("div", {
        className: _style2.default.dynamic([["4013905777", [mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000"]]]) + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement("h1", {
        className: _style2.default.dynamic([["4013905777", [mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000"]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, this.props.title), _react2.default.createElement(_style2.default, {
        styleId: "4013905777",
        css: ".title.__jsx-style-dynamic-selector{border-bottom:2px solid " + (mode ? "#ccc" : "#ddd") + ";-webkit-transition:" + _styles2.default.transitions.standard + ";transition:" + _styles2.default.transitions.standard + ";background-color:" + (mode ? _styles2.default.colors.standard_night : "#fff") + ";color:" + (mode ? "#fff" : "#000") + ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUW9CLEFBR2tFLHFEQUNiLHdGQUNNLDhDQUVqRCxtQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL1RpdGxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0YXRpYy9zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLnByb3BzLm1vZGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICA8aDE+eyB0aGlzLnByb3BzLnRpdGxlIH08L2gxPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkeyBtb2RlID8gXCIjY2NjXCIgOiBcIiNkZGRcIiB9O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHsgc3R5bGVzLnRyYW5zaXRpb25zLnN0YW5kYXJkIH07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBtb2RlID8gc3R5bGVzLmNvbG9ycy5zdGFuZGFyZF9uaWdodCA6IFwiI2ZmZlwiIH07XG4gICAgICAgICAgICBjb2xvcjogJHsgbW9kZSA/IFwiI2ZmZlwiIDogXCIjMDAwXCIgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Title.js */",
        dynamic: [mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGl0bGUuanMiXSwibmFtZXMiOlsic3R5bGVzIiwibW9kZSIsInByb3BzIiwidHJhbnNpdGlvbnMiLCJzdGFuZGFyZCIsImNvbG9ycyIsInN0YW5kYXJkX25pZ2h0IiwidGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR1IsQUFDUDtVQUFNLE9BQU8sS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCOzZCQUNFLGNBQUE7NERBSWtDLE9BQUEsQUFBTyxTQUp6QyxBQUlrRCxRQUM3QixpQkFBQSxBQUFPLFlBTDVCLEFBS3dDLFVBQ2IsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsaUJBTmhELEFBTWlFLFFBQ2pELE9BQUEsQUFBTyxTQVB2QixBQU9nQyxtQkFQaEMsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzREQUdnQyxPQUFBLEFBQU8sU0FIdkMsQUFHZ0QsUUFDN0IsaUJBQUEsQUFBTyxZQUoxQixBQUlzQyxVQUNiLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQUw5QyxBQUsrRCxRQUNqRCxPQUFBLEFBQU8sU0FOckIsQUFNOEI7O29CQU45QjtzQkFBQSxBQUFNO0FBQU47QUFBQSxjQUFNLEFBQUssTUFEYixBQUNFLEFBQWlCO2lCQURuQjsrRUFJa0MsT0FBQSxBQUFPLFNBSnpDLEFBSWtELG1DQUM3QixpQkFBQSxBQUFPLFlBTDVCLEFBS3dDLDRCQUFuQixpQkFBQSxBQUFPLFlBTDVCLEFBS3dDLG1DQUNiLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQU5oRCxBQU1pRSx1QkFDakQsT0FBQSxBQUFPLFNBUHZCLEFBT2dDLFVBUGhDO2tCQUlrQyxPQUFBLEFBQU8sU0FKekMsQUFJa0QsUUFDN0IsaUJBQUEsQUFBTyxZQUw1QixBQUt3QyxVQUNiLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQU5oRCxBQU1pRSxRQUNqRCxPQUFBLEFBQU8sU0FSekIsQUFDRSxBQU9nQyxBQUtuQztBQVpHOzs7OztFQUp1QixnQkFBTSxBIiwiZmlsZSI6IlRpdGxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Title.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Title.js"); } } })();

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _NavButtons = __webpack_require__(400);

var _NavButtons2 = _interopRequireDefault(_NavButtons);

var _Switch = __webpack_require__(399);

var _Switch2 = _interopRequireDefault(_Switch);

var _styles = __webpack_require__(392);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Menu.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.handleClick();
    }
  }, {
    key: 'changeMode',
    value: function changeMode() {
      this.props.changeMode();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var menu = this.props.menu;
      var mode = this.props.mode;
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['427530306', [_styles2.default.transitions.fast, this.props.on ? "1" : "0", menu ? "none" : "flex", mode ? "#ccc" : "#ddd", this.props.on ? "flex" : "none"]]]) + ' ' + 'menu',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_Switch2.default, {
        menu: menu,
        mode: mode,
        changeMode: function changeMode() {
          return _this2.changeMode();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement(_NavButtons2.default, {
        menu: menu,
        mode: mode,
        handleClick: function handleClick() {
          return _this2.handleClick();
        },
        active: this.props.active,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '427530306',
        css: '.menu.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition:' + _styles2.default.transitions.fast + ';transition:' + _styles2.default.transitions.fast + ';opacity:' + (this.props.on ? "1" : "0") + ';display:' + (menu ? "none" : "flex") + ';border-bottom:2px solid ' + (mode ? "#ccc" : "#ddd") + ';}@media screen and (max-Width:400px){.menu.__jsx-style-dynamic-selector{opacity:1;display:' + (this.props.on ? "flex" : "none") + ';}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Qm9CLEFBR2dDLEFBV1AsVUFDMkIscUNBQ3ZDLDhDQVp1QixtR0FDViwwRUFDMkIsd0ZBQ0gscUNBQ0EscUNBQ2dCLHFEQUN2RCIsImZpbGUiOiJuYXZpZ2F0aW9uL01lbnUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcm95LWVkZW4vUHJvZ3JhbW1pbmcvUHJvamVjdHMvTWluZS9uZXh0LXB3YSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCdXR0b25zIGZyb20gJy4vTmF2QnV0dG9ucydcbmltcG9ydCBTd2l0Y2ggZnJvbSAnLi9Td2l0Y2gnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0YXRpYy9zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbGljaygpXG4gIH1cblxuICBjaGFuZ2VNb2RlKCkge1xuICAgIHRoaXMucHJvcHMuY2hhbmdlTW9kZSgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbWVudSA9IHRoaXMucHJvcHMubWVudVxuICAgIGNvbnN0IG1vZGUgPSB0aGlzLnByb3BzLm1vZGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICBtZW51PXsgbWVudSB9XG4gICAgICAgICAgbW9kZT17IG1vZGUgfVxuICAgICAgICAgIGNoYW5nZU1vZGU9eyAoKSA9PiB0aGlzLmNoYW5nZU1vZGUoKSB9XG4gICAgICAgIC8+XG4gICAgICAgIDxOYXZCdXR0b25zXG4gICAgICAgICAgbWVudT17IG1lbnUgfVxuICAgICAgICAgIG1vZGU9eyBtb2RlIH1cbiAgICAgICAgICBoYW5kbGVDbGljaz17ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSB9XG4gICAgICAgICAgYWN0aXZlPXsgdGhpcy5wcm9wcy5hY3RpdmUgfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR7IHN0eWxlcy50cmFuc2l0aW9ucy5mYXN0IH07XG4gICAgICAgICAgICBvcGFjaXR5OiAkeyB0aGlzLnByb3BzLm9uID8gXCIxXCIgOiBcIjBcIiB9O1xuICAgICAgICAgICAgZGlzcGxheTogJHsgbWVudSA/IFwibm9uZVwiIDogXCJmbGV4XCIgfTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkeyBtb2RlID8gXCIjY2NjXCIgOiBcIiNkZGRcIiB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtV2lkdGg6IDQwMHB4KSB7XG4gICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICR7IHRoaXMucHJvcHMub24gPyBcImZsZXhcIiA6IFwibm9uZVwiIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=navigation/Menu.js */',
        dynamic: [_styles2.default.transitions.fast, this.props.on ? "1" : "0", menu ? "none" : "flex", mode ? "#ccc" : "#ddd", this.props.on ? "flex" : "none"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTWVudS5qcyJdLCJuYW1lcyI6WyJOYXZCdXR0b25zIiwiU3dpdGNoIiwic3R5bGVzIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImNoYW5nZU1vZGUiLCJtZW51IiwibW9kZSIsInRyYW5zaXRpb25zIiwiZmFzdCIsIm9uIiwiYWN0aXZlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdILEFBQ1o7V0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNaOzs7O2lDQUVZLEFBQ1g7V0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNaOzs7OzZCQUVRO21CQUNQOztVQUFNLE9BQU8sS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCO1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7NkJBQ0UsY0FBQTsyREFpQnFCLGlCQUFBLEFBQU8sWUFqQjVCLEFBaUJ3QyxNQUN0QixLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsTUFsQmxDLEFBa0J3QyxLQUN0QixPQUFBLEFBQU8sU0FuQnpCLEFBbUJrQyxRQUNBLE9BQUEsQUFBTyxTQXBCekMsQUFvQmtELFFBTTlCLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixTQTFCcEMsQUEwQjZDLG1CQTFCN0MsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDO2NBQUQsQUFDUyxBQUNQO2NBRkYsQUFFUyxBQUNQO29CQUFhLHNCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBSDFCOztvQkFBQTtzQkFERixBQUNFLEFBS0E7QUFMQTtBQUNFLDBCQUlGLEFBQUM7Y0FBRCxBQUNTLEFBQ1A7Y0FGRixBQUVTLEFBQ1A7cUJBQWMsdUJBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFIM0IsQUFJRTtnQkFBUyxLQUFBLEFBQUssTUFKaEIsQUFJc0I7O29CQUp0QjtzQkFORixBQU1FO0FBQUE7QUFDRTtpQkFQSjtrVkFpQnFCLGlCQUFBLEFBQU8sWUFqQjVCLEFBaUJ3Qyx3QkFBbkIsaUJBQUEsQUFBTyxZQWpCNUIsQUFpQndDLHNCQUN0QixLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsTUFsQmxDLEFBa0J3QyxzQkFDdEIsT0FBQSxBQUFPLFNBbkJ6QixBQW1Ca0MseUNBQ0EsT0FBQSxBQUFPLFNBcEJ6QyxBQW9Ca0QsMkdBTTlCLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixTQTFCcEMsQUEwQjZDLFVBMUI3QztrQkFpQnFCLGlCQUFBLEFBQU8sWUFqQjVCLEFBaUJ3QyxNQUN0QixLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsTUFsQmxDLEFBa0J3QyxLQUN0QixPQUFBLEFBQU8sU0FuQnpCLEFBbUJrQyxRQUNBLE9BQUEsQUFBTyxTQXBCekMsQUFvQmtELFFBTTlCLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixTQTNCdEMsQUFDRSxBQTBCNkMsQUFNaEQ7QUFoQ0c7Ozs7O0VBYnVCLGdCQUFNLEEiLCJmaWxlIjoiTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yb3ktZWRlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9NaW5lL25leHQtcHdhIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Menu.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Menu.js"); } } })();

/***/ }),
/* 423 */,
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(393);

var _link2 = _interopRequireDefault(_link);

var _styles = __webpack_require__(392);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Story.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var info = this.props.info;
      var filter = this.props.filter;
      var type = info.points > 100 ? info.points >= 500 ? "hot" : "med" : "cold";
      var mode = this.props.mode;
      var active = filter[0] ? "story" : filter[1] && type === "cold" ? "story" : filter[2] && type === "med" ? "story" : filter[3] && type === "hot" ? "story" : "inactive";
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]) + ' ' + (active + ' ' + type),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('h4', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('a', {
        href: info.url,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]) + ' ' + ('link ' + type),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, info.title)), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]) + ' ' + 'data',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('span', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Uploaded by: ", _react2.default.createElement('a', {
        target: info.user ? "_blank" : "",
        rel: 'noopener noreferrer',
        href: info.user ? 'https://news.ycombinator.com/user?id=' + info.user : "#",
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]) + ' ' + ('link ' + type),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, info.user ? info.user : "User")), _react2.default.createElement('span', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'Points: ' + info.points), _react2.default.createElement('span', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Comments: ", _react2.default.createElement(_link2.default, { as: '/post/' + (mode ? "night" : "day") + '/' + info.id,
        href: info.user ? {
          pathname: '/post',
          query: {
            mode: mode ? "night" : "day",
            id: info.id
          }
        } : {
          pathname: '/reference',
          query: {
            mode: mode ? "night" : "day"
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]) + ' ' + ('link ' + type),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, info.comments_count))), _react2.default.createElement('span', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "From: ", _react2.default.createElement(_link2.default, {
        href: 'http://' + info.domain,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('a', {
        target: '_blank',
        rel: 'noopener noreferrer',
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]) + ' ' + ('link ' + type),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, info.domain)), '.'), _react2.default.createElement('span', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Posted ' + info.time_ago + '.')), _react2.default.createElement(_style2.default, {
        styleId: '4257732515',
        css: '.story.__jsx-style-dynamic-selector{margin-top:1px;margin-bottom:1px;font-weight:600;padding-left:10px;padding-top:3px;padding-bottom:3px;-webkit-transition:color ' + _styles2.default.transitions.standard + ';transition:color ' + _styles2.default.transitions.standard + ';background-color:' + _styles2.default.transitions.slowest + ';border:2px solid ' + (mode ? "#eee" : "#ddd") + ';background-color:' + (mode ? "#000" : "#fff") + ';}.link.__jsx-style-dynamic-selector{-webkit-transition:color ' + _styles2.default.transitions.standard + ';transition:color ' + _styles2.default.transitions.standard + ';}.inactive.__jsx-style-dynamic-selector{display:none;}h4.__jsx-style-dynamic-selector{margin-top:6px;}.data.__jsx-style-dynamic-selector{margin-bottom:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.data.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{margin-right:1%;}.hot.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot) + ';}.med.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.med_night : _styles2.default.colors.med) + ';}.cold.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold) + ';}@media screen and (max-Width:900px){.story.__jsx-style-dynamic-selector{font-size:0.95rem;}.data.__jsx-style-dynamic-selector{display:block;}.data.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{display:block;}}@media screen and (max-Width:500px){.story.__jsx-style-dynamic-selector{font-size:0.8rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVvQixBQUc0QixBQWErQixBQUlqQyxBQUlFLEFBSUcsQUFLRixBQUltQixBQUlBLEFBSUEsQUFLZixBQUlKLEFBSUEsQUFNRyxhQTNDckIsQ0FrQ0UsQUFJQSxDQXZEa0IsQUFxQnBCLENBU0EsQ0ErQkUsQ0FwQ2EsQUFzQmIsZUE5Q2dCLEVBaUNsQixBQUlBLEFBSUEsY0F4Q29CLGtCQUNGLGdCQUNHLFNBc0JyQixRQWJBLEVBUmdELG9HQUNELDhDQUNDLDhDQUNBLDhDQUNoRCIsImZpbGUiOiJjb21wb25lbnRzL1N0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0YXRpYy9zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGluZm8gPSB0aGlzLnByb3BzLmluZm9cbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLnByb3BzLmZpbHRlclxuICAgIGNvbnN0IHR5cGUgPSAoaW5mby5wb2ludHMgPiAxMDAgPyAoaW5mby5wb2ludHMgPj0gNTAwID8gXCJob3RcIiA6IFwibWVkXCIpIDogXCJjb2xkXCIpXG4gICAgY29uc3QgbW9kZSA9IHRoaXMucHJvcHMubW9kZVxuICAgIGNvbnN0IGFjdGl2ZSA9IGZpbHRlclswXSA/IFwic3RvcnlcIiAgOlxuICAgIGZpbHRlclsxXSAmJiB0eXBlID09PSBcImNvbGRcIiA/IFwic3RvcnlcIiA6XG4gICAgZmlsdGVyWzJdICYmIHR5cGUgPT09IFwibWVkXCIgPyBcInN0b3J5XCIgOlxuICAgIGZpbHRlclszXSAmJiB0eXBlID09PSBcImhvdFwiID8gXCJzdG9yeVwiIDogXCJpbmFjdGl2ZVwiXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYCR7YWN0aXZlfSAke3R5cGV9YCB9ID5cbiAgICAgICAgPGg0PjxhXG4gICAgICAgICAgaHJlZj17IGluZm8udXJsIH1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT17IGBsaW5rICR7dHlwZX1gIH0+eyBpbmZvLnRpdGxlIH1cbiAgICAgICAgPC9hPjwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YVwiPlxuICAgICAgICAgIDxzcGFuPntcIlVwbG9hZGVkIGJ5OiBcIn1cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBsaW5rICR7dHlwZX1gIH1cbiAgICAgICAgICAgICAgdGFyZ2V0PXsgaW5mby51c2VyID8gXCJfYmxhbmtcIiA6IFwiXCIgfVxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgaHJlZj17IGluZm8udXNlciA/IGBodHRwczovL25ld3MueWNvbWJpbmF0b3IuY29tL3VzZXI/aWQ9JHtpbmZvLnVzZXJ9YCA6IFwiI1wiIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyBpbmZvLnVzZXIgPyBpbmZvLnVzZXIgOiBcIlVzZXJcIiB9XG4gICAgICAgICAgICA8L2E+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge2BQb2ludHM6ICR7aW5mby5wb2ludHN9YCB9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntcIkNvbW1lbnRzOiBcIn1cbiAgICAgICAgICAgIDxMaW5rIGFzPSB7YC9wb3N0LyR7bW9kZSA/IFwibmlnaHRcIiA6IFwiZGF5XCJ9LyR7aW5mby5pZH1gfVxuICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICBpbmZvLnVzZXIgP1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBtb2RlID8gXCJuaWdodFwiIDogXCJkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICBpZDogaW5mby5pZCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcmVmZXJlbmNlJyxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IG1vZGUgPyBcIm5pZ2h0XCIgOiBcImRheVwiLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyBgbGluayAke3R5cGV9YCB9PnsgaW5mby5jb21tZW50c19jb3VudCB9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtcIkZyb206IFwifVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17IGBodHRwOi8vJHtpbmZvLmRvbWFpbn1gIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBsaW5rICR7dHlwZX1gIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgaW5mby5kb21haW4gfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAuXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge2BQb3N0ZWQgJHtpbmZvLnRpbWVfYWdvfS5gfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuc3Rvcnkge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgJHsgc3R5bGVzLnRyYW5zaXRpb25zLnN0YW5kYXJkIH07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zbG93ZXN0IH07XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkeyBtb2RlID8gXCIjZWVlXCIgOiBcIiNkZGRcIiB9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IFwiIzAwMFwiIDogXCIjZmZmXCIgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAkeyBzdHlsZXMudHJhbnNpdGlvbnMuc3RhbmRhcmQgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5hY3RpdmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRhdGEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGF0YSA+IHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaG90IHtcbiAgICAgICAgICAgIGNvbG9yOiAkeyBtb2RlID8gc3R5bGVzLmNvbG9ycy5ob3RfbmlnaHQgOiBzdHlsZXMuY29sb3JzLmhvdCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWQge1xuICAgICAgICAgICAgY29sb3I6ICR7IG1vZGUgPyBzdHlsZXMuY29sb3JzLm1lZF9uaWdodCA6IHN0eWxlcy5jb2xvcnMubWVkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbGQge1xuICAgICAgICAgICAgY29sb3I6ICR7IG1vZGUgPyBzdHlsZXMuY29sb3JzLmNvbGRfbmlnaHQgOiBzdHlsZXMuY29sb3JzLmNvbGQgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LVdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgLnN0b3J5IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGF0YSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGF0YSA+IHNwYW4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LVdpZHRoOiA1MDBweCkge1xuICAgICAgICAgICAgLnN0b3J5IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Story.js */',
        dynamic: [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RvcnkuanMiXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsImluZm8iLCJwcm9wcyIsImZpbHRlciIsInR5cGUiLCJwb2ludHMiLCJtb2RlIiwiYWN0aXZlIiwidHJhbnNpdGlvbnMiLCJzdGFuZGFyZCIsInNsb3dlc3QiLCJjb2xvcnMiLCJob3RfbmlnaHQiLCJob3QiLCJtZWRfbmlnaHQiLCJtZWQiLCJjb2xkX25pZ2h0IiwiY29sZCIsInVybCIsInRpdGxlIiwidXNlciIsImlkIiwicGF0aG5hbWUiLCJxdWVyeSIsImNvbW1lbnRzX2NvdW50IiwiZG9tYWluIiwidGltZV9hZ28iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdSLEFBQ1A7VUFBTSxPQUFPLEtBQUEsQUFBSyxNQUFsQixBQUF3QixBQUN4QjtVQUFNLFNBQVMsS0FBQSxBQUFLLE1BQXBCLEFBQTBCLEFBQzFCO1VBQU0sT0FBUSxLQUFBLEFBQUssU0FBTCxBQUFjLE1BQU8sS0FBQSxBQUFLLFVBQUwsQUFBZSxNQUFmLEFBQXFCLFFBQTFDLEFBQWtELFFBQWhFLEFBQXlFLEFBQ3pFO1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7VUFBTSxTQUFTLE9BQUEsQUFBTyxLQUFQLEFBQVksVUFDM0IsT0FBQSxBQUFPLE1BQU0sU0FBYixBQUFzQixTQUF0QixBQUErQixVQUMvQixPQUFBLEFBQU8sTUFBTSxTQUFiLEFBQXNCLFFBQXRCLEFBQThCLFVBQzlCLE9BQUEsQUFBTyxNQUFNLFNBQWIsQUFBc0IsUUFBdEIsQUFBOEIsVUFIOUIsQUFHd0MsQUFDeEM7NkJBQ0UsY0FBQTs0REFxRTJCLGlCQUFBLEFBQU8sWUFyRWxDLEFBcUU4QyxVQUNwQixpQkFBQSxBQUFPLFlBdEVqQyxBQXNFNkMs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QXpESjtxTEFxRTJCLGlCQUFBLEFBQU8sWUFyRWxDLEFBcUU4QyxrQ0FBbkIsaUJBQUEsQUFBTyxZQXJFbEMsQUFxRThDLGtDQUNwQixpQkFBQSxBQUFPLFlBdEVqQyxBQXNFNkMsa0NBQ2xCLE9BQUEsQUFBTyxTQXZFbEMsQUF1RTJDLGtDQUNoQixPQUFBLEFBQU8sU0F4RWxDLEFBd0UyQyw2RUFJaEIsaUJBQUEsQUFBTyxZQTVFbEMsQUE0RThDLGtDQUFuQixpQkFBQSxBQUFPLFlBNUVsQyxBQTRFOEMsc1hBcUI5QixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixZQUFZLGlCQUFBLEFBQU8sT0FqR3hELEFBaUcrRCx1REFJL0MsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsWUFBWSxpQkFBQSxBQUFPLE9Bckd4RCxBQXFHK0Qsd0RBSS9DLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGFBQWEsaUJBQUEsQUFBTyxPQXpHekQsQUF5R2dFLFFBekdoRTtrQkFxRTJCLGlCQUFBLEFBQU8sWUFyRWxDLEFBcUU4QyxVQUNwQixpQkFBQSxBQUFPLFlBdEVqQyxBQXNFNkMsU0FDbEIsT0FBQSxBQUFPLFNBdkVsQyxBQXVFMkMsUUFDaEIsT0FBQSxBQUFPLFNBeEVsQyxBQXdFMkMsUUFJaEIsaUJBQUEsQUFBTyxZQTVFbEMsQUE0RThDLFVBcUI5QixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixZQUFZLGlCQUFBLEFBQU8sT0FqR3hELEFBaUcrRCxLQUkvQyxPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixZQUFZLGlCQUFBLEFBQU8sT0FyR3hELEFBcUcrRCxLQUkvQyxPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixhQUFhLGlCQUFBLEFBQU8sT0ExRzNELEFBQ0UsQUF5R2dFLEFBeUJuRTtBQWxJRzs7Ozs7RUFYdUIsZ0JBQU0sQSIsImZpbGUiOiJTdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yb3ktZWRlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9NaW5lL25leHQtcHdhIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Story.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Story.js"); } } })();

/***/ }),
/* 425 */,
/* 426 */,
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(428);


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(405);

var _Layout2 = _interopRequireDefault(_Layout);

var _Story = __webpack_require__(424);

var _Story2 = _interopRequireDefault(_Story);

var _styles = __webpack_require__(392);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/pages/reference.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this.state = {
      title: "Story Title",
      url: "#",
      user: false,
      points: 0,
      comments_count: 0,
      domain: "google.com",
      time_ago: "7 days ago",
      id: "",
      mode: false
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var mode = this.props.url.query.mode === "night";
      this.setState({
        points: Math.floor(Math.random() * 550),
        comments_count: Math.floor(Math.random() * 1000),
        mode: mode
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(n) {
      this.setState({ points: Math.floor(Math.random() * (n[0] - n[1] + 1)) + n[1] });
    }
  }, {
    key: 'changeMode',
    value: function changeMode() {
      var newMode = !this.state.mode;
      this.setState({ mode: newMode });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mode = this.state.mode;
      return _react2.default.createElement(_Layout2.default, {
        title: 'References',
        name: 'reference',
        mode: this.state.mode,
        changeMode: function changeMode() {
          return _this2.changeMode();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('div', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'references',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('h1', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'mode',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Reference chart:'), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'model',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'mode',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Story Model:'), _react2.default.createElement(_Story2.default, {
        info: this.state,
        filter: [1, 0, 0, 0],
        mode: this.state.mode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'model',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'mode',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Points (Try it out, modifies the story\'s points):'), _react2.default.createElement('ul', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'list',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('li', {
        onClick: function onClick() {
          return _this2.handleClick([0, 100]);
        }, className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'color cold',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Cold (< 100 points)'), _react2.default.createElement('li', {
        onClick: function onClick() {
          return _this2.handleClick([100, 500]);
        }, className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'color med',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Medium (\u2265 100 & < 500 points)'), _react2.default.createElement('li', {
        onClick: function onClick() {
          return _this2.handleClick([500, Math.floor((Math.random() + 1) * 500)]);
        }, className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'color hot',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Hot (\u2265 500 points) ')))), _react2.default.createElement(_style2.default, {
        styleId: '1045582859',
        css: '.references.__jsx-style-dynamic-selector{margin:12px;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';border:2px solid ' + (mode ? "#fff" : "#000") + ';}.model.__jsx-style-dynamic-selector{margin:5px;border:2px solid #bbb;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';}.list.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style-type:none;}.mode.__jsx-style-dynamic-selector{-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';color:' + (mode ? "#fff" : "#000") + ';}.color.__jsx-style-dynamic-selector{width:auto;padding:2px;font-weight:600;text-align:center;margin-right:5px;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';}.color.__jsx-style-dynamic-selector:hover{cursor:pointer;color:#fff;-webkit-transition:' + _styles2.default.transitions.fastest + ';transition:' + _styles2.default.transitions.fastest + ';}.cold.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold) + ';}.med.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.med_night : _styles2.default.colors.med) + ';}.hot.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot) + ';}.cold.__jsx-style-dynamic-selector:hover{background-color:' + (mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold) + ';}.med.__jsx-style-dynamic-selector:hover{background-color:' + (mode ? _styles2.default.colors.med_night : _styles2.default.colors.med) + ';}.hot.__jsx-style-dynamic-selector:hover{background-color:' + (mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot) + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZmVyZW5jZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RW9CLEFBR3lCLEFBTUQsQUFNRSxBQUsyQixBQUs3QixBQVNJLEFBTW9CLEFBSUEsQUFJQSxBQUlZLEFBSUEsQUFJQSxXQWxEekIsQUFnQlYsQ0F0QjRCLEdBK0I3QixRQVJLLEdBU3dCLE9BekJBLEVBOEIxQyxBQUlBLEFBSUEsSUFyQm9CLFFBeUJwQixBQUlBLEFBSUEsVUFoQ21CLGlCQWJJLEFBY21CLGNBVEwsT0FKckMsS0FaZ0QsY0FnQ2hELE9BekJBLEVBVUEsdUJBaEJBLGdCQXlCQSIsImZpbGUiOiJwYWdlcy9yZWZlcmVuY2UuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcm95LWVkZW4vUHJvZ3JhbW1pbmcvUHJvamVjdHMvTWluZS9uZXh0LXB3YSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgU3RvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9TdG9yeSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3RhdGljL3N0eWxlcydcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IFwiU3RvcnkgVGl0bGVcIixcbiAgICAgIHVybDogXCIjXCIsXG4gICAgICB1c2VyOiBmYWxzZSxcbiAgICAgIHBvaW50czogMCxcbiAgICAgIGNvbW1lbnRzX2NvdW50OiAwLFxuICAgICAgZG9tYWluOiBcImdvb2dsZS5jb21cIixcbiAgICAgIHRpbWVfYWdvOiBcIjcgZGF5cyBhZ29cIixcbiAgICAgIGlkOiBcIlwiLFxuICAgICAgbW9kZTogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLnByb3BzLnVybC5xdWVyeS5tb2RlID09PSBcIm5pZ2h0XCJcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBvaW50czogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTUwKSxcbiAgICAgIGNvbW1lbnRzX2NvdW50OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcbiAgICAgIG1vZGU6IG1vZGVcbiAgICAgfSlcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKG4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcG9pbnRzOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoblswXSAtIG5bMV0gKyAxKSkgKyBuWzFdIH0pXG4gIH1cblxuICBjaGFuZ2VNb2RlKCkge1xuICAgIGNvbnN0IG5ld01vZGUgPSAhdGhpcy5zdGF0ZS5tb2RlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGU6IG5ld01vZGUgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5zdGF0ZS5tb2RlXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXRcbiAgICAgICAgdGl0bGU9XCJSZWZlcmVuY2VzXCJcbiAgICAgICAgbmFtZT1cInJlZmVyZW5jZVwiXG4gICAgICAgIG1vZGU9eyB0aGlzLnN0YXRlLm1vZGUgfVxuICAgICAgICBjaGFuZ2VNb2RlPXsgKCkgPT4gdGhpcy5jaGFuZ2VNb2RlKCkgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZmVyZW5jZXNcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibW9kZVwiPlJlZmVyZW5jZSBjaGFydDo8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWxcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb2RlXCI+U3RvcnkgTW9kZWw6PC9oMj5cbiAgICAgICAgICAgIDxTdG9yeVxuICAgICAgICAgICAgICBpbmZvPXsgdGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgIGZpbHRlcj17IFsxLCAwLCAwLCAwXSB9XG4gICAgICAgICAgICAgIG1vZGU9eyB0aGlzLnN0YXRlLm1vZGUgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kZVwiPlBvaW50cyAoVHJ5IGl0IG91dCwgbW9kaWZpZXMgdGhlIHN0b3J5J3MgcG9pbnRzKTo8L2gyPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sb3IgY29sZFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soWzAsIDEwMF0pIH0+Q29sZCAoJmx0OyAxMDAgcG9pbnRzKTwvbGk+XG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yIG1lZFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soWzEwMCwgNTAwXSkgfT5NZWRpdW0gKCZnZTsgMTAwICYgJmx0OyA1MDAgcG9pbnRzKTwvbGk+XG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yIGhvdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soWzUwMCwgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSArIDEpICogNTAwKV0pIH0+SG90ICgmZ2U7IDUwMCBwb2ludHMpIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5yZWZlcmVuY2VzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTJweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zdGFuZGFyZCB9O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHsgbW9kZSA/IFwiI2ZmZlwiIDogXCIjMDAwXCIgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kZWwge1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYmJiO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHsgc3R5bGVzLnRyYW5zaXRpb25zLnN0YW5kYXJkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkeyBzdHlsZXMudHJhbnNpdGlvbnMuc3RhbmRhcmQgfTtcbiAgICAgICAgICAgIGNvbG9yOiAkeyBtb2RlID8gXCIjZmZmXCIgOiBcIiMwMDBcIn07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbG9yIHtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHsgc3R5bGVzLnRyYW5zaXRpb25zLnN0YW5kYXJkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbG9yOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHsgc3R5bGVzLnRyYW5zaXRpb25zLmZhc3Rlc3QgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29sZCB7XG4gICAgICAgICAgICBjb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuY29sZF9uaWdodCA6IHN0eWxlcy5jb2xvcnMuY29sZCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWQge1xuICAgICAgICAgICAgY29sb3I6ICR7IG1vZGUgPyBzdHlsZXMuY29sb3JzLm1lZF9uaWdodCA6IHN0eWxlcy5jb2xvcnMubWVkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhvdCB7XG4gICAgICAgICAgICBjb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuaG90X25pZ2h0IDogc3R5bGVzLmNvbG9ycy5ob3QgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29sZDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBtb2RlID8gc3R5bGVzLmNvbG9ycy5jb2xkX25pZ2h0IDogc3R5bGVzLmNvbG9ycy5jb2xkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lZDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBtb2RlID8gc3R5bGVzLmNvbG9ycy5tZWRfbmlnaHQgOiBzdHlsZXMuY29sb3JzLm1lZCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ob3Q6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuaG90X25pZ2h0IDogc3R5bGVzLmNvbG9ycy5ob3QgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+KVxuICAgICAgfVxufVxuIl19 */\n/*@ sourceURL=pages/reference.js?entry */',
        dynamic: [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZmVyZW5jZS5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJTdG9yeSIsInN0eWxlcyIsInN0YXRlIiwidGl0bGUiLCJ1cmwiLCJ1c2VyIiwicG9pbnRzIiwiY29tbWVudHNfY291bnQiLCJkb21haW4iLCJ0aW1lX2FnbyIsImlkIiwibW9kZSIsInByb3BzIiwicXVlcnkiLCJzZXRTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm4iLCJuZXdNb2RlIiwiY2hhbmdlTW9kZSIsInRyYW5zaXRpb25zIiwic3RhbmRhcmQiLCJmYXN0ZXN0IiwiY29sb3JzIiwiY29sZF9uaWdodCIsImNvbGQiLCJtZWRfbmlnaHQiLCJtZWQiLCJob3RfbmlnaHQiLCJob3QiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7Ozs7Ozs7a0NBSWpCOztvQkFBYzt3Q0FBQTs7Z0lBRVo7O1VBQUEsQUFBSzthQUFRLEFBQ0osQUFDUDtXQUZXLEFBRU4sQUFDTDtZQUhXLEFBR0wsQUFDTjtjQUpXLEFBSUgsQUFDUjtzQkFMVyxBQUtLLEFBQ2hCO2NBTlcsQUFNSCxBQUNSO2dCQVBXLEFBT0QsQUFDVjtVQVJXLEFBUVAsQUFDSjtZQVhVLEFBRVosQUFBYSxBQVNMO0FBVEssQUFDWDtXQVVIOzs7Ozt5Q0FFb0IsQUFDbkI7VUFBTSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQWYsQUFBcUIsU0FBbEMsQUFBMkMsQUFDM0M7V0FBQSxBQUFLO2dCQUNLLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQURaLEFBQ0osQUFBMkIsQUFDbkM7d0JBQWdCLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQUZwQixBQUVJLEFBQTJCLEFBQzNDO2NBSEYsQUFBYyxB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RUFJL0MsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsWUFBWSxpQkFBQSxBQUFPLE9BMUZuRSxBQTBGMEUsT0ExRjFFO2tCQWtDcUIsaUJBQUEsQUFBTyxZQWxDNUIsQUFrQ3dDLFVBQ2IsT0FBQSxBQUFPLFNBbkNsQyxBQW1DMkMsUUFNdEIsaUJBQUEsQUFBTyxZQXpDNUIsQUF5Q3dDLFVBU25CLGlCQUFBLEFBQU8sWUFsRDVCLEFBa0R3QyxVQUN4QixPQUFBLEFBQU8sU0FuRHZCLEFBbURnQyxRQVNYLGlCQUFBLEFBQU8sWUE1RDVCLEFBNER3QyxVQU1uQixpQkFBQSxBQUFPLFlBbEU1QixBQWtFd0MsU0FJeEIsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsYUFBYSxpQkFBQSxBQUFPLE9BdEV6RCxBQXNFZ0UsTUFJaEQsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsWUFBWSxpQkFBQSxBQUFPLE9BMUV4RCxBQTBFK0QsS0FJL0MsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsWUFBWSxpQkFBQSxBQUFPLE9BOUV4RCxBQThFK0QsS0FJcEMsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsYUFBYSxpQkFBQSxBQUFPLE9BbEZwRSxBQWtGMkUsTUFJaEQsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsWUFBWSxpQkFBQSxBQUFPLE9BdEZuRSxBQXNGMEUsS0FJL0MsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsWUFBWSxpQkFBQSxBQUFPLE9BM0ZyRSxBQUNFLEFBMEYwRSxBQUl6RTtBQTlGRDs7Ozs7RUFyQ3VCLGdCQUFNLEEiLCJmaWxlIjoicmVmZXJlbmNlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/roy-eden/Programming/Projects/Mine/next-pwa/pages/reference.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/roy-eden/Programming/Projects/Mine/next-pwa/pages/reference.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/reference")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })
],[427]);
            return { page: comp.default }
          })
        