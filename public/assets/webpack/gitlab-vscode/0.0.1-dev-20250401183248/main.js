"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../node_modules/lodash/lodash.js
  var require_lodash = __commonJS({
    "../../node_modules/lodash/lodash.js"(exports, module) {
      (function() {
        var undefined2;
        var VERSION = "4.17.21";
        var LARGE_ARRAY_SIZE = 200;
        var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_MEMOIZE_SIZE = 500;
        var PLACEHOLDER = "__lodash_placeholder__";
        var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
        var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
        var HOT_COUNT = 800, HOT_SPAN = 16;
        var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
        var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
        var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var wrapFlags = [
          ["ary", WRAP_ARY_FLAG],
          ["bind", WRAP_BIND_FLAG],
          ["bindKey", WRAP_BIND_KEY_FLAG],
          ["curry", WRAP_CURRY_FLAG],
          ["curryRight", WRAP_CURRY_RIGHT_FLAG],
          ["flip", WRAP_FLIP_FLAG],
          ["partial", WRAP_PARTIAL_FLAG],
          ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
          ["rearg", WRAP_REARG_FLAG]
        ];
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
        var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
        var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
        var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
        var reTrimStart = /^\s+/;
        var reWhitespace = /\s/;
        var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
        var reEscapeChar = /\\(\\)?/g;
        var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
        var reFlags = /\w*$/;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var reIsOctal = /^0o[0-7]+$/i;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
        var reNoMatch = /($^)/;
        var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
        var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
        var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
        var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reApos = RegExp(rsApos, "g");
        var reComboMark = RegExp(rsCombo, "g");
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reUnicodeWord = RegExp([
          rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
          rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
          rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
          rsUpper + "+" + rsOptContrUpper,
          rsOrdUpper,
          rsOrdLower,
          rsDigits,
          rsEmoji
        ].join("|"), "g");
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var contextProps = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout"
        ];
        var templateCounter = -1;
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
        var deburredLetters = {
          "\xC0": "A",
          "\xC1": "A",
          "\xC2": "A",
          "\xC3": "A",
          "\xC4": "A",
          "\xC5": "A",
          "\xE0": "a",
          "\xE1": "a",
          "\xE2": "a",
          "\xE3": "a",
          "\xE4": "a",
          "\xE5": "a",
          "\xC7": "C",
          "\xE7": "c",
          "\xD0": "D",
          "\xF0": "d",
          "\xC8": "E",
          "\xC9": "E",
          "\xCA": "E",
          "\xCB": "E",
          "\xE8": "e",
          "\xE9": "e",
          "\xEA": "e",
          "\xEB": "e",
          "\xCC": "I",
          "\xCD": "I",
          "\xCE": "I",
          "\xCF": "I",
          "\xEC": "i",
          "\xED": "i",
          "\xEE": "i",
          "\xEF": "i",
          "\xD1": "N",
          "\xF1": "n",
          "\xD2": "O",
          "\xD3": "O",
          "\xD4": "O",
          "\xD5": "O",
          "\xD6": "O",
          "\xD8": "O",
          "\xF2": "o",
          "\xF3": "o",
          "\xF4": "o",
          "\xF5": "o",
          "\xF6": "o",
          "\xF8": "o",
          "\xD9": "U",
          "\xDA": "U",
          "\xDB": "U",
          "\xDC": "U",
          "\xF9": "u",
          "\xFA": "u",
          "\xFB": "u",
          "\xFC": "u",
          "\xDD": "Y",
          "\xFD": "y",
          "\xFF": "y",
          "\xC6": "Ae",
          "\xE6": "ae",
          "\xDE": "Th",
          "\xFE": "th",
          "\xDF": "ss",
          "\u0100": "A",
          "\u0102": "A",
          "\u0104": "A",
          "\u0101": "a",
          "\u0103": "a",
          "\u0105": "a",
          "\u0106": "C",
          "\u0108": "C",
          "\u010A": "C",
          "\u010C": "C",
          "\u0107": "c",
          "\u0109": "c",
          "\u010B": "c",
          "\u010D": "c",
          "\u010E": "D",
          "\u0110": "D",
          "\u010F": "d",
          "\u0111": "d",
          "\u0112": "E",
          "\u0114": "E",
          "\u0116": "E",
          "\u0118": "E",
          "\u011A": "E",
          "\u0113": "e",
          "\u0115": "e",
          "\u0117": "e",
          "\u0119": "e",
          "\u011B": "e",
          "\u011C": "G",
          "\u011E": "G",
          "\u0120": "G",
          "\u0122": "G",
          "\u011D": "g",
          "\u011F": "g",
          "\u0121": "g",
          "\u0123": "g",
          "\u0124": "H",
          "\u0126": "H",
          "\u0125": "h",
          "\u0127": "h",
          "\u0128": "I",
          "\u012A": "I",
          "\u012C": "I",
          "\u012E": "I",
          "\u0130": "I",
          "\u0129": "i",
          "\u012B": "i",
          "\u012D": "i",
          "\u012F": "i",
          "\u0131": "i",
          "\u0134": "J",
          "\u0135": "j",
          "\u0136": "K",
          "\u0137": "k",
          "\u0138": "k",
          "\u0139": "L",
          "\u013B": "L",
          "\u013D": "L",
          "\u013F": "L",
          "\u0141": "L",
          "\u013A": "l",
          "\u013C": "l",
          "\u013E": "l",
          "\u0140": "l",
          "\u0142": "l",
          "\u0143": "N",
          "\u0145": "N",
          "\u0147": "N",
          "\u014A": "N",
          "\u0144": "n",
          "\u0146": "n",
          "\u0148": "n",
          "\u014B": "n",
          "\u014C": "O",
          "\u014E": "O",
          "\u0150": "O",
          "\u014D": "o",
          "\u014F": "o",
          "\u0151": "o",
          "\u0154": "R",
          "\u0156": "R",
          "\u0158": "R",
          "\u0155": "r",
          "\u0157": "r",
          "\u0159": "r",
          "\u015A": "S",
          "\u015C": "S",
          "\u015E": "S",
          "\u0160": "S",
          "\u015B": "s",
          "\u015D": "s",
          "\u015F": "s",
          "\u0161": "s",
          "\u0162": "T",
          "\u0164": "T",
          "\u0166": "T",
          "\u0163": "t",
          "\u0165": "t",
          "\u0167": "t",
          "\u0168": "U",
          "\u016A": "U",
          "\u016C": "U",
          "\u016E": "U",
          "\u0170": "U",
          "\u0172": "U",
          "\u0169": "u",
          "\u016B": "u",
          "\u016D": "u",
          "\u016F": "u",
          "\u0171": "u",
          "\u0173": "u",
          "\u0174": "W",
          "\u0175": "w",
          "\u0176": "Y",
          "\u0177": "y",
          "\u0178": "Y",
          "\u0179": "Z",
          "\u017B": "Z",
          "\u017D": "Z",
          "\u017A": "z",
          "\u017C": "z",
          "\u017E": "z",
          "\u0132": "IJ",
          "\u0133": "ij",
          "\u0152": "Oe",
          "\u0153": "oe",
          "\u0149": "'n",
          "\u017F": "s"
        };
        var htmlEscapes = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        };
        var htmlUnescapes = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        };
        var stringEscapes = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var freeParseFloat = parseFloat, freeParseInt = parseInt;
        var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e) {
          }
        }();
        var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        function arrayAggregator(array, setter, iteratee, accumulator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
          }
          return accumulator;
        }
        function arrayEach(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEachRight(array, iteratee) {
          var length = array == null ? 0 : array.length;
          while (length--) {
            if (iteratee(array[length], length, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEvery(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (!predicate(array[index], index, array)) {
              return false;
            }
          }
          return true;
        }
        function arrayFilter(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function arrayIncludes(array, value) {
          var length = array == null ? 0 : array.length;
          return !!length && baseIndexOf(array, value, 0) > -1;
        }
        function arrayIncludesWith(array, value, comparator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (comparator(value, array[index])) {
              return true;
            }
          }
          return false;
        }
        function arrayMap(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length, result = Array(length);
          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }
        function arrayPush(array, values) {
          var index = -1, length = values.length, offset = array.length;
          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1, length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }
        function arrayReduceRight(array, iteratee, accumulator, initAccum) {
          var length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[--length];
          }
          while (length--) {
            accumulator = iteratee(accumulator, array[length], length, array);
          }
          return accumulator;
        }
        function arraySome(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        var asciiSize = baseProperty("length");
        function asciiToArray(string) {
          return string.split("");
        }
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }
        function baseFindKey(collection, predicate, eachFunc) {
          var result;
          eachFunc(collection, function(value, key, collection2) {
            if (predicate(value, key, collection2)) {
              result = key;
              return false;
            }
          });
          return result;
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
              return index;
            }
          }
          return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
          return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        function baseIndexOfWith(array, value, fromIndex, comparator) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (comparator(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function baseIsNaN(value) {
          return value !== value;
        }
        function baseMean(array, iteratee) {
          var length = array == null ? 0 : array.length;
          return length ? baseSum(array, iteratee) / length : NAN;
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined2 : object[key];
          };
        }
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined2 : object[key];
          };
        }
        function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index, collection2) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
          });
          return accumulator;
        }
        function baseSortBy(array, comparer) {
          var length = array.length;
          array.sort(comparer);
          while (length--) {
            array[length] = array[length].value;
          }
          return array;
        }
        function baseSum(array, iteratee) {
          var result, index = -1, length = array.length;
          while (++index < length) {
            var current = iteratee(array[index]);
            if (current !== undefined2) {
              result = result === undefined2 ? current : result + current;
            }
          }
          return result;
        }
        function baseTimes(n, iteratee) {
          var index = -1, result = Array(n);
          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }
        function baseToPairs(object, props) {
          return arrayMap(props, function(key) {
            return [key, object[key]];
          });
        }
        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }
        function baseValues(object, props) {
          return arrayMap(props, function(key) {
            return object[key];
          });
        }
        function cacheHas(cache, key) {
          return cache.has(key);
        }
        function charsStartIndex(strSymbols, chrSymbols) {
          var index = -1, length = strSymbols.length;
          while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function charsEndIndex(strSymbols, chrSymbols) {
          var index = strSymbols.length;
          while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function countHolders(array, placeholder) {
          var length = array.length, result = 0;
          while (length--) {
            if (array[length] === placeholder) {
              ++result;
            }
          }
          return result;
        }
        var deburrLetter = basePropertyOf(deburredLetters);
        var escapeHtmlChar = basePropertyOf(htmlEscapes);
        function escapeStringChar(chr) {
          return "\\" + stringEscapes[chr];
        }
        function getValue(object, key) {
          return object == null ? undefined2 : object[key];
        }
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }
        function iteratorToArray(iterator) {
          var data, result = [];
          while (!(data = iterator.next()).done) {
            result.push(data.value);
          }
          return result;
        }
        function mapToArray(map) {
          var index = -1, result = Array(map.size);
          map.forEach(function(value, key) {
            result[++index] = [key, value];
          });
          return result;
        }
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }
        function replaceHolders(array, placeholder) {
          var index = -1, length = array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
              array[index] = PLACEHOLDER;
              result[resIndex++] = index;
            }
          }
          return result;
        }
        function setToArray(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }
        function setToPairs(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = [value, value];
          });
          return result;
        }
        function strictIndexOf(array, value, fromIndex) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        function strictLastIndexOf(array, value, fromIndex) {
          var index = fromIndex + 1;
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return index;
        }
        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }
        function stringToArray(string) {
          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        }
        function trimmedEndIndex(string) {
          var index = string.length;
          while (index-- && reWhitespace.test(string.charAt(index))) {
          }
          return index;
        }
        var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
        function unicodeSize(string) {
          var result = reUnicode.lastIndex = 0;
          while (reUnicode.test(string)) {
            ++result;
          }
          return result;
        }
        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }
        var runInContext = function runInContext2(context) {
          context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
          var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
          var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
          var coreJsData = context["__core-js_shared__"];
          var funcToString = funcProto.toString;
          var hasOwnProperty = objectProto.hasOwnProperty;
          var idCounter = 0;
          var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
          }();
          var nativeObjectToString = objectProto.toString;
          var objectCtorString = funcToString.call(Object2);
          var oldDash = root._;
          var reIsNative = RegExp2(
            "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
          );
          var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
          var defineProperty = function() {
            try {
              var func = getNative(Object2, "defineProperty");
              func({}, "", {});
              return func;
            } catch (e) {
            }
          }();
          var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
          var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
          var DataView2 = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
          var metaMap = WeakMap2 && new WeakMap2();
          var realNames = {};
          var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
          var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
          function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
              if (value instanceof LodashWrapper) {
                return value;
              }
              if (hasOwnProperty.call(value, "__wrapped__")) {
                return wrapperClone(value);
              }
            }
            return new LodashWrapper(value);
          }
          var baseCreate = function() {
            function object() {
            }
            return function(proto) {
              if (!isObject(proto)) {
                return {};
              }
              if (objectCreate) {
                return objectCreate(proto);
              }
              object.prototype = proto;
              var result2 = new object();
              object.prototype = undefined2;
              return result2;
            };
          }();
          function baseLodash() {
          }
          function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined2;
          }
          lodash.templateSettings = {
            "escape": reEscape,
            "evaluate": reEvaluate,
            "interpolate": reInterpolate,
            "variable": "",
            "imports": {
              "_": lodash
            }
          };
          lodash.prototype = baseLodash.prototype;
          lodash.prototype.constructor = lodash;
          LodashWrapper.prototype = baseCreate(baseLodash.prototype);
          LodashWrapper.prototype.constructor = LodashWrapper;
          function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
          }
          function lazyClone() {
            var result2 = new LazyWrapper(this.__wrapped__);
            result2.__actions__ = copyArray(this.__actions__);
            result2.__dir__ = this.__dir__;
            result2.__filtered__ = this.__filtered__;
            result2.__iteratees__ = copyArray(this.__iteratees__);
            result2.__takeCount__ = this.__takeCount__;
            result2.__views__ = copyArray(this.__views__);
            return result2;
          }
          function lazyReverse() {
            if (this.__filtered__) {
              var result2 = new LazyWrapper(this);
              result2.__dir__ = -1;
              result2.__filtered__ = true;
            } else {
              result2 = this.clone();
              result2.__dir__ *= -1;
            }
            return result2;
          }
          function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start2 = view.start, end = view.end, length = end - start2, index = isRight ? end : start2 - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) {
              return baseWrapperValue(array, this.__actions__);
            }
            var result2 = [];
            outer:
              while (length-- && resIndex < takeCount) {
                index += dir;
                var iterIndex = -1, value = array[index];
                while (++iterIndex < iterLength) {
                  var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                  if (type == LAZY_MAP_FLAG) {
                    value = computed;
                  } else if (!computed) {
                    if (type == LAZY_FILTER_FLAG) {
                      continue outer;
                    } else {
                      break outer;
                    }
                  }
                }
                result2[resIndex++] = value;
              }
            return result2;
          }
          LazyWrapper.prototype = baseCreate(baseLodash.prototype);
          LazyWrapper.prototype.constructor = LazyWrapper;
          function Hash2(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          function hashDelete(key) {
            var result2 = this.has(key) && delete this.__data__[key];
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result2 = data[key];
              return result2 === HASH_UNDEFINED ? undefined2 : result2;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined2;
          }
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
          }
          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
            return this;
          }
          Hash2.prototype.clear = hashClear;
          Hash2.prototype["delete"] = hashDelete;
          Hash2.prototype.get = hashGet;
          Hash2.prototype.has = hashHas;
          Hash2.prototype.set = hashSet;
          function ListCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }
            --this.size;
            return true;
          }
          function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined2 : data[index][1];
          }
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype["delete"] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          function MapCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              "hash": new Hash2(),
              "map": new (Map2 || ListCache)(),
              "string": new Hash2()
            };
          }
          function mapCacheDelete(key) {
            var result2 = getMapData(this, key)["delete"](key);
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          function mapCacheSet(key, value) {
            var data = getMapData(this, key), size2 = data.size;
            data.set(key, value);
            this.size += data.size == size2 ? 0 : 1;
            return this;
          }
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype["delete"] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          function SetCache(values2) {
            var index = -1, length = values2 == null ? 0 : values2.length;
            this.__data__ = new MapCache();
            while (++index < length) {
              this.add(values2[index]);
            }
          }
          function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
          }
          function setCacheHas(value) {
            return this.__data__.has(value);
          }
          SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
          SetCache.prototype.has = setCacheHas;
          function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
          }
          function stackClear() {
            this.__data__ = new ListCache();
            this.size = 0;
          }
          function stackDelete(key) {
            var data = this.__data__, result2 = data["delete"](key);
            this.size = data.size;
            return result2;
          }
          function stackGet(key) {
            return this.__data__.get(key);
          }
          function stackHas(key) {
            return this.__data__.has(key);
          }
          function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
              var pairs = data.__data__;
              if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
              }
              data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
          }
          Stack.prototype.clear = stackClear;
          Stack.prototype["delete"] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;
          function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
            for (var key in value) {
              if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined2;
          }
          function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
          }
          function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
          }
          function assignMergeValue(object, key, value) {
            if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }
          function baseAggregator(collection, setter, iteratee2, accumulator) {
            baseEach(collection, function(value, key, collection2) {
              setter(accumulator, value, iteratee2(value), collection2);
            });
            return accumulator;
          }
          function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
          }
          function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
          }
          function baseAssignValue(object, key, value) {
            if (key == "__proto__" && defineProperty) {
              defineProperty(object, key, {
                "configurable": true,
                "enumerable": true,
                "value": value,
                "writable": true
              });
            } else {
              object[key] = value;
            }
          }
          function baseAt(object, paths) {
            var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
            while (++index < length) {
              result2[index] = skip ? undefined2 : get(object, paths[index]);
            }
            return result2;
          }
          function baseClamp(number, lower, upper) {
            if (number === number) {
              if (upper !== undefined2) {
                number = number <= upper ? number : upper;
              }
              if (lower !== undefined2) {
                number = number >= lower ? number : lower;
              }
            }
            return number;
          }
          function baseClone(value, bitmask, customizer, key, object, stack) {
            var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) {
              result2 = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result2 !== undefined2) {
              return result2;
            }
            if (!isObject(value)) {
              return value;
            }
            var isArr = isArray(value);
            if (isArr) {
              result2 = initCloneArray(value);
              if (!isDeep) {
                return copyArray(value, result2);
              }
            } else {
              var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
              if (isBuffer(value)) {
                return cloneBuffer(value, isDeep);
              }
              if (tag == objectTag || tag == argsTag || isFunc && !object) {
                result2 = isFlat || isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                  return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
                }
              } else {
                if (!cloneableTags[tag]) {
                  return object ? value : {};
                }
                result2 = initCloneByTag(value, tag, isDeep);
              }
            }
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) {
              return stacked;
            }
            stack.set(value, result2);
            if (isSet(value)) {
              value.forEach(function(subValue) {
                result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
              });
            } else if (isMap(value)) {
              value.forEach(function(subValue, key2) {
                result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
              });
            }
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined2 : keysFunc(value);
            arrayEach(props || value, function(subValue, key2) {
              if (props) {
                key2 = subValue;
                subValue = value[key2];
              }
              assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
            return result2;
          }
          function baseConforms(source) {
            var props = keys(source);
            return function(object) {
              return baseConformsTo(object, source, props);
            };
          }
          function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (length--) {
              var key = props[length], predicate = source[key], value = object[key];
              if (value === undefined2 && !(key in object) || !predicate(value)) {
                return false;
              }
            }
            return true;
          }
          function baseDelay(func, wait, args) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return setTimeout2(function() {
              func.apply(undefined2, args);
            }, wait);
          }
          function baseDifference(array, values2, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
            if (!length) {
              return result2;
            }
            if (iteratee2) {
              values2 = arrayMap(values2, baseUnary(iteratee2));
            }
            if (comparator) {
              includes2 = arrayIncludesWith;
              isCommon = false;
            } else if (values2.length >= LARGE_ARRAY_SIZE) {
              includes2 = cacheHas;
              isCommon = false;
              values2 = new SetCache(values2);
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var valuesIndex = valuesLength;
                  while (valuesIndex--) {
                    if (values2[valuesIndex] === computed) {
                      continue outer;
                    }
                  }
                  result2.push(value);
                } else if (!includes2(values2, computed, comparator)) {
                  result2.push(value);
                }
              }
            return result2;
          }
          var baseEach = createBaseEach(baseForOwn);
          var baseEachRight = createBaseEach(baseForOwnRight, true);
          function baseEvery(collection, predicate) {
            var result2 = true;
            baseEach(collection, function(value, index, collection2) {
              result2 = !!predicate(value, index, collection2);
              return result2;
            });
            return result2;
          }
          function baseExtremum(array, iteratee2, comparator) {
            var index = -1, length = array.length;
            while (++index < length) {
              var value = array[index], current = iteratee2(value);
              if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
                var computed = current, result2 = value;
              }
            }
            return result2;
          }
          function baseFill(array, value, start2, end) {
            var length = array.length;
            start2 = toInteger(start2);
            if (start2 < 0) {
              start2 = -start2 > length ? 0 : length + start2;
            }
            end = end === undefined2 || end > length ? length : toInteger(end);
            if (end < 0) {
              end += length;
            }
            end = start2 > end ? 0 : toLength(end);
            while (start2 < end) {
              array[start2++] = value;
            }
            return array;
          }
          function baseFilter(collection, predicate) {
            var result2 = [];
            baseEach(collection, function(value, index, collection2) {
              if (predicate(value, index, collection2)) {
                result2.push(value);
              }
            });
            return result2;
          }
          function baseFlatten(array, depth, predicate, isStrict, result2) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result2 || (result2 = []);
            while (++index < length) {
              var value = array[index];
              if (depth > 0 && predicate(value)) {
                if (depth > 1) {
                  baseFlatten(value, depth - 1, predicate, isStrict, result2);
                } else {
                  arrayPush(result2, value);
                }
              } else if (!isStrict) {
                result2[result2.length] = value;
              }
            }
            return result2;
          }
          var baseFor = createBaseFor();
          var baseForRight = createBaseFor(true);
          function baseForOwn(object, iteratee2) {
            return object && baseFor(object, iteratee2, keys);
          }
          function baseForOwnRight(object, iteratee2) {
            return object && baseForRight(object, iteratee2, keys);
          }
          function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
              return isFunction(object[key]);
            });
          }
          function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (object != null && index < length) {
              object = object[toKey(path[index++])];
            }
            return index && index == length ? object : undefined2;
          }
          function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result2 = keysFunc(object);
            return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
          }
          function baseGetTag(value) {
            if (value == null) {
              return value === undefined2 ? undefinedTag : nullTag;
            }
            return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
          }
          function baseGt(value, other) {
            return value > other;
          }
          function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
          }
          function baseHasIn(object, key) {
            return object != null && key in Object2(object);
          }
          function baseInRange(number, start2, end) {
            return number >= nativeMin(start2, end) && number < nativeMax(start2, end);
          }
          function baseIntersection(arrays, iteratee2, comparator) {
            var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
            while (othIndex--) {
              var array = arrays[othIndex];
              if (othIndex && iteratee2) {
                array = arrayMap(array, baseUnary(iteratee2));
              }
              maxLength = nativeMin(array.length, maxLength);
              caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer:
              while (++index < length && result2.length < maxLength) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                  othIndex = othLength;
                  while (--othIndex) {
                    var cache = caches[othIndex];
                    if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                      continue outer;
                    }
                  }
                  if (seen) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseInverter(object, setter, iteratee2, accumulator) {
            baseForOwn(object, function(value, key, object2) {
              setter(accumulator, iteratee2(value), key, object2);
            });
            return accumulator;
          }
          function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined2 : apply(func, object, args);
          }
          function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
          }
          function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
          }
          function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
          }
          function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) {
              return true;
            }
            if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
              return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
          }
          function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
              if (!isBuffer(other)) {
                return false;
              }
              objIsArr = true;
              objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
              stack || (stack = new Stack());
              return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
              var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                stack || (stack = new Stack());
                return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
              }
            }
            if (!isSameTag) {
              return false;
            }
            stack || (stack = new Stack());
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
          }
          function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
          }
          function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (index--) {
              var data = matchData[index];
              if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                return false;
              }
            }
            while (++index < length) {
              data = matchData[index];
              var key = data[0], objValue = object[key], srcValue = data[1];
              if (noCustomizer && data[2]) {
                if (objValue === undefined2 && !(key in object)) {
                  return false;
                }
              } else {
                var stack = new Stack();
                if (customizer) {
                  var result2 = customizer(objValue, srcValue, key, object, source, stack);
                }
                if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                  return false;
                }
              }
            }
            return true;
          }
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
          }
          function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
          }
          function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
          }
          function baseIteratee(value) {
            if (typeof value == "function") {
              return value;
            }
            if (value == null) {
              return identity;
            }
            if (typeof value == "object") {
              return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property(value);
          }
          function baseKeys(object) {
            if (!isPrototype(object)) {
              return nativeKeys(object);
            }
            var result2 = [];
            for (var key in Object2(object)) {
              if (hasOwnProperty.call(object, key) && key != "constructor") {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseKeysIn(object) {
            if (!isObject(object)) {
              return nativeKeysIn(object);
            }
            var isProto = isPrototype(object), result2 = [];
            for (var key in object) {
              if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseLt(value, other) {
            return value < other;
          }
          function baseMap(collection, iteratee2) {
            var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value, key, collection2) {
              result2[++index] = iteratee2(value, key, collection2);
            });
            return result2;
          }
          function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
              return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function(object) {
              return object === source || baseIsMatch(object, source, matchData);
            };
          }
          function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
              return matchesStrictComparable(toKey(path), srcValue);
            }
            return function(object) {
              var objValue = get(object, path);
              return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
          }
          function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
              return;
            }
            baseFor(source, function(srcValue, key) {
              stack || (stack = new Stack());
              if (isObject(srcValue)) {
                baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
              } else {
                var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
                if (newValue === undefined2) {
                  newValue = srcValue;
                }
                assignMergeValue(object, key, newValue);
              }
            }, keysIn);
          }
          function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
              assignMergeValue(object, key, stacked);
              return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
            var isCommon = newValue === undefined2;
            if (isCommon) {
              var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
              newValue = srcValue;
              if (isArr || isBuff || isTyped) {
                if (isArray(objValue)) {
                  newValue = objValue;
                } else if (isArrayLikeObject(objValue)) {
                  newValue = copyArray(objValue);
                } else if (isBuff) {
                  isCommon = false;
                  newValue = cloneBuffer(srcValue, true);
                } else if (isTyped) {
                  isCommon = false;
                  newValue = cloneTypedArray(srcValue, true);
                } else {
                  newValue = [];
                }
              } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                newValue = objValue;
                if (isArguments(objValue)) {
                  newValue = toPlainObject(objValue);
                } else if (!isObject(objValue) || isFunction(objValue)) {
                  newValue = initCloneObject(srcValue);
                }
              } else {
                isCommon = false;
              }
            }
            if (isCommon) {
              stack.set(srcValue, newValue);
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
              stack["delete"](srcValue);
            }
            assignMergeValue(object, key, newValue);
          }
          function baseNth(array, n) {
            var length = array.length;
            if (!length) {
              return;
            }
            n += n < 0 ? length : 0;
            return isIndex(n, length) ? array[n] : undefined2;
          }
          function baseOrderBy(collection, iteratees, orders) {
            if (iteratees.length) {
              iteratees = arrayMap(iteratees, function(iteratee2) {
                if (isArray(iteratee2)) {
                  return function(value) {
                    return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                  };
                }
                return iteratee2;
              });
            } else {
              iteratees = [identity];
            }
            var index = -1;
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            var result2 = baseMap(collection, function(value, key, collection2) {
              var criteria = arrayMap(iteratees, function(iteratee2) {
                return iteratee2(value);
              });
              return { "criteria": criteria, "index": ++index, "value": value };
            });
            return baseSortBy(result2, function(object, other) {
              return compareMultiple(object, other, orders);
            });
          }
          function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
              return hasIn(object, path);
            });
          }
          function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result2 = {};
            while (++index < length) {
              var path = paths[index], value = baseGet(object, path);
              if (predicate(value, path)) {
                baseSet(result2, castPath(path, object), value);
              }
            }
            return result2;
          }
          function basePropertyDeep(path) {
            return function(object) {
              return baseGet(object, path);
            };
          }
          function basePullAll(array, values2, iteratee2, comparator) {
            var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
            if (array === values2) {
              values2 = copyArray(values2);
            }
            if (iteratee2) {
              seen = arrayMap(array, baseUnary(iteratee2));
            }
            while (++index < length) {
              var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
              while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
                if (seen !== array) {
                  splice.call(seen, fromIndex, 1);
                }
                splice.call(array, fromIndex, 1);
              }
            }
            return array;
          }
          function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while (length--) {
              var index = indexes[length];
              if (length == lastIndex || index !== previous) {
                var previous = index;
                if (isIndex(index)) {
                  splice.call(array, index, 1);
                } else {
                  baseUnset(array, index);
                }
              }
            }
            return array;
          }
          function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
          }
          function baseRange(start2, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start2) / (step || 1)), 0), result2 = Array2(length);
            while (length--) {
              result2[fromRight ? length : ++index] = start2;
              start2 += step;
            }
            return result2;
          }
          function baseRepeat(string, n) {
            var result2 = "";
            if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
              return result2;
            }
            do {
              if (n % 2) {
                result2 += string;
              }
              n = nativeFloor(n / 2);
              if (n) {
                string += string;
              }
            } while (n);
            return result2;
          }
          function baseRest(func, start2) {
            return setToString(overRest(func, start2, identity), func + "");
          }
          function baseSample(collection) {
            return arraySample(values(collection));
          }
          function baseSampleSize(collection, n) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length));
          }
          function baseSet(object, path, value, customizer) {
            if (!isObject(object)) {
              return object;
            }
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index < length) {
              var key = toKey(path[index]), newValue = value;
              if (key === "__proto__" || key === "constructor" || key === "prototype") {
                return object;
              }
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined2;
                if (newValue === undefined2) {
                  newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
                }
              }
              assignValue(nested, key, newValue);
              nested = nested[key];
            }
            return object;
          }
          var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func, data);
            return func;
          };
          var baseSetToString = !defineProperty ? identity : function(func, string) {
            return defineProperty(func, "toString", {
              "configurable": true,
              "enumerable": false,
              "value": constant(string),
              "writable": true
            });
          };
          function baseShuffle(collection) {
            return shuffleSelf(values(collection));
          }
          function baseSlice(array, start2, end) {
            var index = -1, length = array.length;
            if (start2 < 0) {
              start2 = -start2 > length ? 0 : length + start2;
            }
            end = end > length ? length : end;
            if (end < 0) {
              end += length;
            }
            length = start2 > end ? 0 : end - start2 >>> 0;
            start2 >>>= 0;
            var result2 = Array2(length);
            while (++index < length) {
              result2[index] = array[index + start2];
            }
            return result2;
          }
          function baseSome(collection, predicate) {
            var result2;
            baseEach(collection, function(value, index, collection2) {
              result2 = predicate(value, index, collection2);
              return !result2;
            });
            return !!result2;
          }
          function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
              while (low < high) {
                var mid = low + high >>> 1, computed = array[mid];
                if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                  low = mid + 1;
                } else {
                  high = mid;
                }
              }
              return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
          }
          function baseSortedIndexBy(array, value, iteratee2, retHighest) {
            var low = 0, high = array == null ? 0 : array.length;
            if (high === 0) {
              return 0;
            }
            value = iteratee2(value);
            var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
            while (low < high) {
              var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
              if (valIsNaN) {
                var setLow = retHighest || othIsReflexive;
              } else if (valIsUndefined) {
                setLow = othIsReflexive && (retHighest || othIsDefined);
              } else if (valIsNull) {
                setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
              } else if (valIsSymbol) {
                setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
              } else if (othIsNull || othIsSymbol) {
                setLow = false;
              } else {
                setLow = retHighest ? computed <= value : computed < value;
              }
              if (setLow) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
          }
          function baseSortedUniq(array, iteratee2) {
            var index = -1, length = array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              if (!index || !eq(computed, seen)) {
                var seen = computed;
                result2[resIndex++] = value === 0 ? 0 : value;
              }
            }
            return result2;
          }
          function baseToNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            return +value;
          }
          function baseToString(value) {
            if (typeof value == "string") {
              return value;
            }
            if (isArray(value)) {
              return arrayMap(value, baseToString) + "";
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : "";
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function baseUniq(array, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
            if (comparator) {
              isCommon = false;
              includes2 = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
              var set2 = iteratee2 ? null : createSet(array);
              if (set2) {
                return setToArray(set2);
              }
              isCommon = false;
              includes2 = cacheHas;
              seen = new SetCache();
            } else {
              seen = iteratee2 ? [] : result2;
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var seenIndex = seen.length;
                  while (seenIndex--) {
                    if (seen[seenIndex] === computed) {
                      continue outer;
                    }
                  }
                  if (iteratee2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                } else if (!includes2(seen, computed, comparator)) {
                  if (seen !== result2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return object == null || delete object[toKey(last(path))];
          }
          function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
          }
          function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
            }
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
          }
          function baseWrapperValue(value, actions) {
            var result2 = value;
            if (result2 instanceof LazyWrapper) {
              result2 = result2.value();
            }
            return arrayReduce(actions, function(result3, action) {
              return action.func.apply(action.thisArg, arrayPush([result3], action.args));
            }, result2);
          }
          function baseXor(arrays, iteratee2, comparator) {
            var length = arrays.length;
            if (length < 2) {
              return length ? baseUniq(arrays[0]) : [];
            }
            var index = -1, result2 = Array2(length);
            while (++index < length) {
              var array = arrays[index], othIndex = -1;
              while (++othIndex < length) {
                if (othIndex != index) {
                  result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
                }
              }
            }
            return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
          }
          function baseZipObject(props, values2, assignFunc) {
            var index = -1, length = props.length, valsLength = values2.length, result2 = {};
            while (++index < length) {
              var value = index < valsLength ? values2[index] : undefined2;
              assignFunc(result2, props[index], value);
            }
            return result2;
          }
          function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
          }
          function castFunction(value) {
            return typeof value == "function" ? value : identity;
          }
          function castPath(value, object) {
            if (isArray(value)) {
              return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString(value));
          }
          var castRest = baseRest;
          function castSlice(array, start2, end) {
            var length = array.length;
            end = end === undefined2 ? length : end;
            return !start2 && end >= length ? array : baseSlice(array, start2, end);
          }
          var clearTimeout2 = ctxClearTimeout || function(id) {
            return root.clearTimeout(id);
          };
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result2);
            return result2;
          }
          function cloneArrayBuffer(arrayBuffer) {
            var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
            return result2;
          }
          function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
          }
          function cloneRegExp(regexp) {
            var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result2.lastIndex = regexp.lastIndex;
            return result2;
          }
          function cloneSymbol(symbol) {
            return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
          }
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
          }
          function compareAscending(value, other) {
            if (value !== other) {
              var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
              var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
              if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
                return 1;
              }
              if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
                return -1;
              }
            }
            return 0;
          }
          function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index < length) {
              var result2 = compareAscending(objCriteria[index], othCriteria[index]);
              if (result2) {
                if (index >= ordersLength) {
                  return result2;
                }
                var order = orders[index];
                return result2 * (order == "desc" ? -1 : 1);
              }
            }
            return object.index - other.index;
          }
          function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) {
              result2[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[holders[argsIndex]] = args[argsIndex];
              }
            }
            while (rangeLength--) {
              result2[leftIndex++] = args[argsIndex++];
            }
            return result2;
          }
          function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) {
              result2[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
              result2[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[offset + holders[holdersIndex]] = args[argsIndex++];
              }
            }
            return result2;
          }
          function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array2(length));
            while (++index < length) {
              array[index] = source[index];
            }
            return array;
          }
          function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
              var key = props[index];
              var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
              if (newValue === undefined2) {
                newValue = source[key];
              }
              if (isNew) {
                baseAssignValue(object, key, newValue);
              } else {
                assignValue(object, key, newValue);
              }
            }
            return object;
          }
          function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
          }
          function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
          }
          function createAggregator(setter, initializer) {
            return function(collection, iteratee2) {
              var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
              return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
            };
          }
          function createAssigner(assigner) {
            return baseRest(function(object, sources) {
              var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
              customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined2 : customizer;
                length = 1;
              }
              object = Object2(object);
              while (++index < length) {
                var source = sources[index];
                if (source) {
                  assigner(object, source, index, customizer);
                }
              }
              return object;
            });
          }
          function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee2) {
              if (collection == null) {
                return collection;
              }
              if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee2);
              }
              var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
              while (fromRight ? index-- : ++index < length) {
                if (iteratee2(iterable[index], index, iterable) === false) {
                  break;
                }
              }
              return collection;
            };
          }
          function createBaseFor(fromRight) {
            return function(object, iteratee2, keysFunc) {
              var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee2(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }
          function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
          }
          function createCaseFirst(methodName) {
            return function(string) {
              string = toString(string);
              var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
              var chr = strSymbols ? strSymbols[0] : string.charAt(0);
              var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
              return chr[methodName]() + trailing;
            };
          }
          function createCompounder(callback) {
            return function(string) {
              return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
            };
          }
          function createCtor(Ctor) {
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return new Ctor();
                case 1:
                  return new Ctor(args[0]);
                case 2:
                  return new Ctor(args[0], args[1]);
                case 3:
                  return new Ctor(args[0], args[1], args[2]);
                case 4:
                  return new Ctor(args[0], args[1], args[2], args[3]);
                case 5:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                case 6:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                case 7:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
              }
              var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
              return isObject(result2) ? result2 : thisBinding;
            };
          }
          function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
              while (index--) {
                args[index] = arguments[index];
              }
              var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
              length -= holders.length;
              if (length < arity) {
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  undefined2,
                  args,
                  holders,
                  undefined2,
                  undefined2,
                  arity - length
                );
              }
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return apply(fn, this, args);
            }
            return wrapper;
          }
          function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
              var iterable = Object2(collection);
              if (!isArrayLike(collection)) {
                var iteratee2 = getIteratee(predicate, 3);
                collection = keys(collection);
                predicate = function(key) {
                  return iteratee2(iterable[key], key, iterable);
                };
              }
              var index = findIndexFunc(collection, predicate, fromIndex);
              return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
            };
          }
          function createFlow(fromRight) {
            return flatRest(function(funcs) {
              var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
              if (fromRight) {
                funcs.reverse();
              }
              while (index--) {
                var func = funcs[index];
                if (typeof func != "function") {
                  throw new TypeError2(FUNC_ERROR_TEXT);
                }
                if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                  var wrapper = new LodashWrapper([], true);
                }
              }
              index = wrapper ? index : length;
              while (++index < length) {
                func = funcs[index];
                var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
                if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                  wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                } else {
                  wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                }
              }
              return function() {
                var args = arguments, value = args[0];
                if (wrapper && args.length == 1 && isArray(value)) {
                  return wrapper.plant(value).value();
                }
                var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
                while (++index2 < length) {
                  result2 = funcs[index2].call(this, result2);
                }
                return result2;
              };
            });
          }
          function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length;
              while (index--) {
                args[index] = arguments[index];
              }
              if (isCurried) {
                var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
              }
              if (partials) {
                args = composeArgs(args, partials, holders, isCurried);
              }
              if (partialsRight) {
                args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
              }
              length -= holdersCount;
              if (isCurried && length < arity) {
                var newHolders = replaceHolders(args, placeholder);
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  thisArg,
                  args,
                  newHolders,
                  argPos,
                  ary2,
                  arity - length
                );
              }
              var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
              length = args.length;
              if (argPos) {
                args = reorder(args, argPos);
              } else if (isFlip && length > 1) {
                args.reverse();
              }
              if (isAry && ary2 < length) {
                args.length = ary2;
              }
              if (this && this !== root && this instanceof wrapper) {
                fn = Ctor || createCtor(fn);
              }
              return fn.apply(thisBinding, args);
            }
            return wrapper;
          }
          function createInverter(setter, toIteratee) {
            return function(object, iteratee2) {
              return baseInverter(object, setter, toIteratee(iteratee2), {});
            };
          }
          function createMathOperation(operator, defaultValue) {
            return function(value, other) {
              var result2;
              if (value === undefined2 && other === undefined2) {
                return defaultValue;
              }
              if (value !== undefined2) {
                result2 = value;
              }
              if (other !== undefined2) {
                if (result2 === undefined2) {
                  return other;
                }
                if (typeof value == "string" || typeof other == "string") {
                  value = baseToString(value);
                  other = baseToString(other);
                } else {
                  value = baseToNumber(value);
                  other = baseToNumber(other);
                }
                result2 = operator(value, other);
              }
              return result2;
            };
          }
          function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
              iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
              return baseRest(function(args) {
                var thisArg = this;
                return arrayFunc(iteratees, function(iteratee2) {
                  return apply(iteratee2, thisArg, args);
                });
              });
            });
          }
          function createPadding(length, chars) {
            chars = chars === undefined2 ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) {
              return charsLength ? baseRepeat(chars, length) : chars;
            }
            var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
          }
          function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              while (++leftIndex < leftLength) {
                args[leftIndex] = partials[leftIndex];
              }
              while (argsLength--) {
                args[leftIndex++] = arguments[++argsIndex];
              }
              return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
          }
          function createRange(fromRight) {
            return function(start2, end, step) {
              if (step && typeof step != "number" && isIterateeCall(start2, end, step)) {
                end = step = undefined2;
              }
              start2 = toFinite(start2);
              if (end === undefined2) {
                end = start2;
                start2 = 0;
              } else {
                end = toFinite(end);
              }
              step = step === undefined2 ? start2 < end ? 1 : -1 : toFinite(step);
              return baseRange(start2, end, step, fromRight);
            };
          }
          function createRelationalOperation(operator) {
            return function(value, other) {
              if (!(typeof value == "string" && typeof other == "string")) {
                value = toNumber(value);
                other = toNumber(other);
              }
              return operator(value, other);
            };
          }
          function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
              bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            }
            var newData = [
              func,
              bitmask,
              thisArg,
              newPartials,
              newHolders,
              newPartialsRight,
              newHoldersRight,
              argPos,
              ary2,
              arity
            ];
            var result2 = wrapFunc.apply(undefined2, newData);
            if (isLaziable(func)) {
              setData(result2, newData);
            }
            result2.placeholder = placeholder;
            return setWrapToString(result2, func, bitmask);
          }
          function createRound(methodName) {
            var func = Math2[methodName];
            return function(number, precision) {
              number = toNumber(number);
              precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
              if (precision && nativeIsFinite(number)) {
                var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                pair = (toString(value) + "e").split("e");
                return +(pair[0] + "e" + (+pair[1] - precision));
              }
              return func(number);
            };
          }
          var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
            return new Set2(values2);
          };
          function createToPairs(keysFunc) {
            return function(object) {
              var tag = getTag(object);
              if (tag == mapTag) {
                return mapToArray(object);
              }
              if (tag == setTag) {
                return setToPairs(object);
              }
              return baseToPairs(object, keysFunc(object));
            };
          }
          function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
              bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
              partials = holders = undefined2;
            }
            ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
            arity = arity === undefined2 ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
              var partialsRight = partials, holdersRight = holders;
              partials = holders = undefined2;
            }
            var data = isBindKey ? undefined2 : getData(func);
            var newData = [
              func,
              bitmask,
              thisArg,
              partials,
              holders,
              partialsRight,
              holdersRight,
              argPos,
              ary2,
              arity
            ];
            if (data) {
              mergeData(newData, data);
            }
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
              bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            }
            if (!bitmask || bitmask == WRAP_BIND_FLAG) {
              var result2 = createBind(func, bitmask, thisArg);
            } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
              result2 = createCurry(func, bitmask, arity);
            } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
              result2 = createPartial(func, bitmask, thisArg, partials);
            } else {
              result2 = createHybrid.apply(undefined2, newData);
            }
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result2, newData), func, bitmask);
          }
          function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              return srcValue;
            }
            return objValue;
          }
          function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
              stack.set(srcValue, objValue);
              baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
              stack["delete"](srcValue);
            }
            return objValue;
          }
          function customOmitClone(value) {
            return isPlainObject(value) ? undefined2 : value;
          }
          function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
              return false;
            }
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) {
              return arrStacked == other && othStacked == array;
            }
            var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
              var arrValue = array[index], othValue = other[index];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
              }
              if (compared !== undefined2) {
                if (compared) {
                  continue;
                }
                result2 = false;
                break;
              }
              if (seen) {
                if (!arraySome(other, function(othValue2, othIndex) {
                  if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                  }
                })) {
                  result2 = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                result2 = false;
                break;
              }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result2;
          }
          function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
              case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                  return false;
                }
                object = object.buffer;
                other = other.buffer;
              case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                  return false;
                }
                return true;
              case boolTag:
              case dateTag:
              case numberTag:
                return eq(+object, +other);
              case errorTag:
                return object.name == other.name && object.message == other.message;
              case regexpTag:
              case stringTag:
                return object == other + "";
              case mapTag:
                var convert = mapToArray;
              case setTag:
                var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                convert || (convert = setToArray);
                if (object.size != other.size && !isPartial) {
                  return false;
                }
                var stacked = stack.get(object);
                if (stacked) {
                  return stacked == other;
                }
                bitmask |= COMPARE_UNORDERED_FLAG;
                stack.set(object, other);
                var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                stack["delete"](object);
                return result2;
              case symbolTag:
                if (symbolValueOf) {
                  return symbolValueOf.call(object) == symbolValueOf.call(other);
                }
            }
            return false;
          }
          function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) {
              return false;
            }
            var index = objLength;
            while (index--) {
              var key = objProps[index];
              if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                return false;
              }
            }
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) {
              return objStacked == other && othStacked == object;
            }
            var result2 = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
              key = objProps[index];
              var objValue = object[key], othValue = other[key];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
              }
              if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                result2 = false;
                break;
              }
              skipCtor || (skipCtor = key == "constructor");
            }
            if (result2 && !skipCtor) {
              var objCtor = object.constructor, othCtor = other.constructor;
              if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
                result2 = false;
              }
            }
            stack["delete"](object);
            stack["delete"](other);
            return result2;
          }
          function flatRest(func) {
            return setToString(overRest(func, undefined2, flatten), func + "");
          }
          function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
          }
          function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
          }
          var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func);
          };
          function getFuncName(func) {
            var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
            while (length--) {
              var data = array[length], otherFunc = data.func;
              if (otherFunc == null || otherFunc == func) {
                return data.name;
              }
            }
            return result2;
          }
          function getHolder(func) {
            var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
            return object.placeholder;
          }
          function getIteratee() {
            var result2 = lodash.iteratee || iteratee;
            result2 = result2 === iteratee ? baseIteratee : result2;
            return arguments.length ? result2(arguments[0], arguments[1]) : result2;
          }
          function getMapData(map2, key) {
            var data = map2.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
          }
          function getMatchData(object) {
            var result2 = keys(object), length = result2.length;
            while (length--) {
              var key = result2[length], value = object[key];
              result2[length] = [key, value, isStrictComparable(value)];
            }
            return result2;
          }
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined2;
          }
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
              value[symToStringTag] = undefined2;
              var unmasked = true;
            } catch (e) {
            }
            var result2 = nativeObjectToString.call(value);
            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }
            return result2;
          }
          var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
            if (object == null) {
              return [];
            }
            object = Object2(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
              return propertyIsEnumerable.call(object, symbol);
            });
          };
          var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
            var result2 = [];
            while (object) {
              arrayPush(result2, getSymbols(object));
              object = getPrototype(object);
            }
            return result2;
          };
          var getTag = baseGetTag;
          if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
            getTag = function(value) {
              var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
              if (ctorString) {
                switch (ctorString) {
                  case dataViewCtorString:
                    return dataViewTag;
                  case mapCtorString:
                    return mapTag;
                  case promiseCtorString:
                    return promiseTag;
                  case setCtorString:
                    return setTag;
                  case weakMapCtorString:
                    return weakMapTag;
                }
              }
              return result2;
            };
          }
          function getView(start2, end, transforms) {
            var index = -1, length = transforms.length;
            while (++index < length) {
              var data = transforms[index], size2 = data.size;
              switch (data.type) {
                case "drop":
                  start2 += size2;
                  break;
                case "dropRight":
                  end -= size2;
                  break;
                case "take":
                  end = nativeMin(end, start2 + size2);
                  break;
                case "takeRight":
                  start2 = nativeMax(start2, end - size2);
                  break;
              }
            }
            return { "start": start2, "end": end };
          }
          function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
          }
          function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result2 = false;
            while (++index < length) {
              var key = toKey(path[index]);
              if (!(result2 = object != null && hasFunc(object, key))) {
                break;
              }
              object = object[key];
            }
            if (result2 || ++index != length) {
              return result2;
            }
            length = object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
          }
          function initCloneArray(array) {
            var length = array.length, result2 = new array.constructor(length);
            if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
              result2.index = array.index;
              result2.input = array.input;
            }
            return result2;
          }
          function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
          }
          function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
              case arrayBufferTag:
                return cloneArrayBuffer(object);
              case boolTag:
              case dateTag:
                return new Ctor(+object);
              case dataViewTag:
                return cloneDataView(object, isDeep);
              case float32Tag:
              case float64Tag:
              case int8Tag:
              case int16Tag:
              case int32Tag:
              case uint8Tag:
              case uint8ClampedTag:
              case uint16Tag:
              case uint32Tag:
                return cloneTypedArray(object, isDeep);
              case mapTag:
                return new Ctor();
              case numberTag:
              case stringTag:
                return new Ctor(object);
              case regexpTag:
                return cloneRegExp(object);
              case setTag:
                return new Ctor();
              case symbolTag:
                return cloneSymbol(object);
            }
          }
          function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) {
              return source;
            }
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
          }
          function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
          }
          function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
          }
          function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
              return false;
            }
            var type = typeof index;
            if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
              return eq(object[index], value);
            }
            return false;
          }
          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }
            var type = typeof value;
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
          }
          function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
          }
          function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash[funcName];
            if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
              return false;
            }
            if (func === other) {
              return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
          }
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          var isMaskable = coreJsData ? isFunction : stubFalse;
          function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto;
          }
          function isStrictComparable(value) {
            return value === value && !isObject(value);
          }
          function matchesStrictComparable(key, srcValue) {
            return function(object) {
              if (object == null) {
                return false;
              }
              return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
            };
          }
          function memoizeCapped(func) {
            var result2 = memoize(func, function(key) {
              if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
              }
              return key;
            });
            var cache = result2.cache;
            return result2;
          }
          function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) {
              return data;
            }
            if (srcBitmask & WRAP_BIND_FLAG) {
              data[2] = source[2];
              newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
              var partials = data[3];
              data[3] = partials ? composeArgs(partials, value, source[4]) : value;
              data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            value = source[5];
            if (value) {
              partials = data[5];
              data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
              data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            value = source[7];
            if (value) {
              data[7] = value;
            }
            if (srcBitmask & WRAP_ARY_FLAG) {
              data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            if (data[9] == null) {
              data[9] = source[9];
            }
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
          }
          function nativeKeysIn(object) {
            var result2 = [];
            if (object != null) {
              for (var key in Object2(object)) {
                result2.push(key);
              }
            }
            return result2;
          }
          function objectToString(value) {
            return nativeObjectToString.call(value);
          }
          function overRest(func, start2, transform2) {
            start2 = nativeMax(start2 === undefined2 ? func.length - 1 : start2, 0);
            return function() {
              var args = arguments, index = -1, length = nativeMax(args.length - start2, 0), array = Array2(length);
              while (++index < length) {
                array[index] = args[start2 + index];
              }
              index = -1;
              var otherArgs = Array2(start2 + 1);
              while (++index < start2) {
                otherArgs[index] = args[index];
              }
              otherArgs[start2] = transform2(array);
              return apply(func, this, otherArgs);
            };
          }
          function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
          }
          function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
              var index = indexes[length];
              array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
            }
            return array;
          }
          function safeGet(object, key) {
            if (key === "constructor" && typeof object[key] === "function") {
              return;
            }
            if (key == "__proto__") {
              return;
            }
            return object[key];
          }
          var setData = shortOut(baseSetData);
          var setTimeout2 = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait);
          };
          var setToString = shortOut(baseSetToString);
          function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
          }
          function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
              var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
              lastCalled = stamp;
              if (remaining > 0) {
                if (++count >= HOT_COUNT) {
                  return arguments[0];
                }
              } else {
                count = 0;
              }
              return func.apply(undefined2, arguments);
            };
          }
          function shuffleSelf(array, size2) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size2 = size2 === undefined2 ? length : size2;
            while (++index < size2) {
              var rand = baseRandom(index, lastIndex), value = array[rand];
              array[rand] = array[index];
              array[index] = value;
            }
            array.length = size2;
            return array;
          }
          var stringToPath = memoizeCapped(function(string) {
            var result2 = [];
            if (string.charCodeAt(0) === 46) {
              result2.push("");
            }
            string.replace(rePropName, function(match, number, quote, subString) {
              result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result2;
          });
          function toKey(value) {
            if (typeof value == "string" || isSymbol(value)) {
              return value;
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {
              }
              try {
                return func + "";
              } catch (e) {
              }
            }
            return "";
          }
          function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
              var value = "_." + pair[0];
              if (bitmask & pair[1] && !arrayIncludes(details, value)) {
                details.push(value);
              }
            });
            return details.sort();
          }
          function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) {
              return wrapper.clone();
            }
            var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result2.__actions__ = copyArray(wrapper.__actions__);
            result2.__index__ = wrapper.__index__;
            result2.__values__ = wrapper.__values__;
            return result2;
          }
          function chunk(array, size2, guard) {
            if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
              size2 = 1;
            } else {
              size2 = nativeMax(toInteger(size2), 0);
            }
            var length = array == null ? 0 : array.length;
            if (!length || size2 < 1) {
              return [];
            }
            var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
            while (index < length) {
              result2[resIndex++] = baseSlice(array, index, index += size2);
            }
            return result2;
          }
          function compact(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index];
              if (value) {
                result2[resIndex++] = value;
              }
            }
            return result2;
          }
          function concat() {
            var length = arguments.length;
            if (!length) {
              return [];
            }
            var args = Array2(length - 1), array = arguments[0], index = length;
            while (index--) {
              args[index - 1] = arguments[index];
            }
            return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
          }
          var difference = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
          });
          var differenceBy = baseRest(function(array, values2) {
            var iteratee2 = last(values2);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
          });
          var differenceWith = baseRest(function(array, values2) {
            var comparator = last(values2);
            if (isArrayLikeObject(comparator)) {
              comparator = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
          });
          function drop(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function dropRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
          }
          function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
          }
          function fill(array, value, start2, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (start2 && typeof start2 != "number" && isIterateeCall(array, value, start2)) {
              start2 = 0;
              end = length;
            }
            return baseFill(array, value, start2, end);
          }
          function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index);
          }
          function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length - 1;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
          }
          function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
          }
          function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
          }
          function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
          }
          function fromPairs(pairs) {
            var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
            while (++index < length) {
              var pair = pairs[index];
              result2[pair[0]] = pair[1];
            }
            return result2;
          }
          function head(array) {
            return array && array.length ? array[0] : undefined2;
          }
          function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseIndexOf(array, value, index);
          }
          function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
          }
          var intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
          });
          var intersectionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee2 === last(mapped)) {
              iteratee2 = undefined2;
            } else {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
          });
          var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            if (comparator) {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
          });
          function join(array, separator) {
            return array == null ? "" : nativeJoin.call(array, separator);
          }
          function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined2;
          }
          function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
          }
          function nth(array, n) {
            return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
          }
          var pull = baseRest(pullAll);
          function pullAll(array, values2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
          }
          function pullAllBy(array, values2, iteratee2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
          }
          function pullAllWith(array, values2, comparator) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
          }
          var pullAt = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
              return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result2;
          });
          function remove2(array, predicate) {
            var result2 = [];
            if (!(array && array.length)) {
              return result2;
            }
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
              var value = array[index];
              if (predicate(value, index, array)) {
                result2.push(value);
                indexes.push(index);
              }
            }
            basePullAt(array, indexes);
            return result2;
          }
          function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
          }
          function slice(array, start2, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (end && typeof end != "number" && isIterateeCall(array, start2, end)) {
              start2 = 0;
              end = length;
            } else {
              start2 = start2 == null ? 0 : toInteger(start2);
              end = end === undefined2 ? length : toInteger(end);
            }
            return baseSlice(array, start2, end);
          }
          function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
          }
          function sortedIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
          }
          function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value);
              if (index < length && eq(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
          }
          function sortedLastIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
          }
          function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value, true) - 1;
              if (eq(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
          }
          function sortedUniqBy(array, iteratee2) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
          }
          function take(array, n, guard) {
            if (!(array && array.length)) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function takeRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
          }
          function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
          }
          var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
          });
          var unionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
          });
          var unionWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
          });
          function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
          }
          function uniqBy(array, iteratee2) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function uniqWith(array, comparator) {
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return array && array.length ? baseUniq(array, undefined2, comparator) : [];
          }
          function unzip(array) {
            if (!(array && array.length)) {
              return [];
            }
            var length = 0;
            array = arrayFilter(array, function(group) {
              if (isArrayLikeObject(group)) {
                length = nativeMax(group.length, length);
                return true;
              }
            });
            return baseTimes(length, function(index) {
              return arrayMap(array, baseProperty(index));
            });
          }
          function unzipWith(array, iteratee2) {
            if (!(array && array.length)) {
              return [];
            }
            var result2 = unzip(array);
            if (iteratee2 == null) {
              return result2;
            }
            return arrayMap(result2, function(group) {
              return apply(iteratee2, undefined2, group);
            });
          }
          var without = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
          });
          var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
          });
          var xorBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
          });
          var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
          });
          var zip = baseRest(unzip);
          function zipObject(props, values2) {
            return baseZipObject(props || [], values2 || [], assignValue);
          }
          function zipObjectDeep(props, values2) {
            return baseZipObject(props || [], values2 || [], baseSet);
          }
          var zipWith = baseRest(function(arrays) {
            var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
            iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
            return unzipWith(arrays, iteratee2);
          });
          function chain(value) {
            var result2 = lodash(value);
            result2.__chain__ = true;
            return result2;
          }
          function tap(value, interceptor) {
            interceptor(value);
            return value;
          }
          function thru(value, interceptor) {
            return interceptor(value);
          }
          var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start2 = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
              return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start2)) {
              return this.thru(interceptor);
            }
            value = value.slice(start2, +start2 + (length ? 1 : 0));
            value.__actions__.push({
              "func": thru,
              "args": [interceptor],
              "thisArg": undefined2
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
              if (length && !array.length) {
                array.push(undefined2);
              }
              return array;
            });
          });
          function wrapperChain() {
            return chain(this);
          }
          function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
          }
          function wrapperNext() {
            if (this.__values__ === undefined2) {
              this.__values__ = toArray(this.value());
            }
            var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
            return { "done": done, "value": value };
          }
          function wrapperToIterator() {
            return this;
          }
          function wrapperPlant(value) {
            var result2, parent2 = this;
            while (parent2 instanceof baseLodash) {
              var clone2 = wrapperClone(parent2);
              clone2.__index__ = 0;
              clone2.__values__ = undefined2;
              if (result2) {
                previous.__wrapped__ = clone2;
              } else {
                result2 = clone2;
              }
              var previous = clone2;
              parent2 = parent2.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result2;
          }
          function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
              var wrapped = value;
              if (this.__actions__.length) {
                wrapped = new LazyWrapper(this);
              }
              wrapped = wrapped.reverse();
              wrapped.__actions__.push({
                "func": thru,
                "args": [reverse],
                "thisArg": undefined2
              });
              return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
          }
          function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
          }
          var countBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              ++result2[key];
            } else {
              baseAssignValue(result2, key, 1);
            }
          });
          function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
          }
          var find = createFind(findIndex);
          var findLast = createFind(findLastIndex);
          function flatMap(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), 1);
          }
          function flatMapDeep(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), INFINITY);
          }
          function flatMapDepth(collection, iteratee2, depth) {
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee2), depth);
          }
          function forEach(collection, iteratee2) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function forEachRight(collection, iteratee2) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee2, 3));
          }
          var groupBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              result2[key].push(value);
            } else {
              baseAssignValue(result2, key, [value]);
            }
          });
          function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
              fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
          }
          var invokeMap = baseRest(function(collection, path, args) {
            var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value) {
              result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result2;
          });
          var keyBy = createAggregator(function(result2, value, key) {
            baseAssignValue(result2, key, value);
          });
          function map(collection, iteratee2) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) {
              return [];
            }
            if (!isArray(iteratees)) {
              iteratees = iteratees == null ? [] : [iteratees];
            }
            orders = guard ? undefined2 : orders;
            if (!isArray(orders)) {
              orders = orders == null ? [] : [orders];
            }
            return baseOrderBy(collection, iteratees, orders);
          }
          var partition = createAggregator(function(result2, value, key) {
            result2[key ? 0 : 1].push(value);
          }, function() {
            return [[], []];
          });
          function reduce(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
          }
          function reduceRight(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
          }
          function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
          }
          function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
          }
          function sampleSize(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
              n = 1;
            } else {
              n = toInteger(n);
            }
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n);
          }
          function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
          }
          function size(collection) {
            if (collection == null) {
              return 0;
            }
            if (isArrayLike(collection)) {
              return isString(collection) ? stringSize(collection) : collection.length;
            }
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) {
              return collection.size;
            }
            return baseKeys(collection).length;
          }
          function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          var sortBy = baseRest(function(collection, iteratees) {
            if (collection == null) {
              return [];
            }
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
              iteratees = [];
            } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
              iteratees = [iteratees[0]];
            }
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
          });
          var now = ctxNow || function() {
            return root.Date.now();
          };
          function after(n, func) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function() {
              if (--n < 1) {
                return func.apply(this, arguments);
              }
            };
          }
          function ary(func, n, guard) {
            n = guard ? undefined2 : n;
            n = func && n == null ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
          }
          function before(n, func) {
            var result2;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function() {
              if (--n > 0) {
                result2 = func.apply(this, arguments);
              }
              if (n <= 1) {
                func = undefined2;
              }
              return result2;
            };
          }
          var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bind));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
          });
          var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bindKey));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
          });
          function curry(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curry.placeholder;
            return result2;
          }
          function curryRight(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curryRight.placeholder;
            return result2;
          }
          function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
              var args = lastArgs, thisArg = lastThis;
              lastArgs = lastThis = undefined2;
              lastInvokeTime = time;
              result2 = func.apply(thisArg, args);
              return result2;
            }
            function leadingEdge(time) {
              lastInvokeTime = time;
              timerId = setTimeout2(timerExpired, wait);
              return leading ? invokeFunc(time) : result2;
            }
            function remainingWait(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
              return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
              return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
              var time = now();
              if (shouldInvoke(time)) {
                return trailingEdge(time);
              }
              timerId = setTimeout2(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
              timerId = undefined2;
              if (trailing && lastArgs) {
                return invokeFunc(time);
              }
              lastArgs = lastThis = undefined2;
              return result2;
            }
            function cancel() {
              if (timerId !== undefined2) {
                clearTimeout2(timerId);
              }
              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined2;
            }
            function flush() {
              return timerId === undefined2 ? result2 : trailingEdge(now());
            }
            function debounced() {
              var time = now(), isInvoking = shouldInvoke(time);
              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time;
              if (isInvoking) {
                if (timerId === undefined2) {
                  return leadingEdge(lastCallTime);
                }
                if (maxing) {
                  clearTimeout2(timerId);
                  timerId = setTimeout2(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }
              if (timerId === undefined2) {
                timerId = setTimeout2(timerExpired, wait);
              }
              return result2;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }
          var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
          });
          var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
          });
          function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
          }
          function memoize(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var memoized = function() {
              var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
              if (cache.has(key)) {
                return cache.get(key);
              }
              var result2 = func.apply(this, args);
              memoized.cache = cache.set(key, result2) || cache;
              return result2;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          }
          memoize.Cache = MapCache;
          function negate(predicate) {
            if (typeof predicate != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return !predicate.call(this);
                case 1:
                  return !predicate.call(this, args[0]);
                case 2:
                  return !predicate.call(this, args[0], args[1]);
                case 3:
                  return !predicate.call(this, args[0], args[1], args[2]);
              }
              return !predicate.apply(this, args);
            };
          }
          function once(func) {
            return before(2, func);
          }
          var overArgs = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
              var index = -1, length = nativeMin(args.length, funcsLength);
              while (++index < length) {
                args[index] = transforms[index].call(this, args[index]);
              }
              return apply(func, this, args);
            });
          });
          var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
          });
          var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
          });
          var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
          });
          function rest(func, start2) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start2 = start2 === undefined2 ? start2 : toInteger(start2);
            return baseRest(func, start2);
          }
          function spread(func, start2) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start2 = start2 == null ? 0 : nativeMax(toInteger(start2), 0);
            return baseRest(function(args) {
              var array = args[start2], otherArgs = castSlice(args, 0, start2);
              if (array) {
                arrayPush(otherArgs, array);
              }
              return apply(func, this, otherArgs);
            });
          }
          function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (isObject(options)) {
              leading = "leading" in options ? !!options.leading : leading;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
              "leading": leading,
              "maxWait": wait,
              "trailing": trailing
            });
          }
          function unary(func) {
            return ary(func, 1);
          }
          function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
          }
          function castArray() {
            if (!arguments.length) {
              return [];
            }
            var value = arguments[0];
            return isArray(value) ? value : [value];
          }
          function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
          }
          function cloneWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
          }
          function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
          }
          function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
          }
          function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source));
          }
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }
          var gt = createRelationalOperation(baseGt);
          var gte = createRelationalOperation(function(value, other) {
            return value >= other;
          });
          var isArguments = baseIsArguments(function() {
            return arguments;
          }()) ? baseIsArguments : function(value) {
            return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
          };
          var isArray = Array2.isArray;
          var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
          function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
          }
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }
          function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
          }
          var isBuffer = nativeIsBuffer || stubFalse;
          var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
          function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
          }
          function isEmpty(value) {
            if (value == null) {
              return true;
            }
            if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
              return !value.length;
            }
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) {
              return !value.size;
            }
            if (isPrototype(value)) {
              return !baseKeys(value).length;
            }
            for (var key in value) {
              if (hasOwnProperty.call(value, key)) {
                return false;
              }
            }
            return true;
          }
          function isEqual(value, other) {
            return baseIsEqual(value, other);
          }
          function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            var result2 = customizer ? customizer(value, other) : undefined2;
            return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
          }
          function isError(value) {
            if (!isObjectLike(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
          }
          function isFinite(value) {
            return typeof value == "number" && nativeIsFinite(value);
          }
          function isFunction(value) {
            if (!isObject(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
          }
          function isInteger(value) {
            return typeof value == "number" && value == toInteger(value);
          }
          function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }
          function isObject(value) {
            var type = typeof value;
            return value != null && (type == "object" || type == "function");
          }
          function isObjectLike(value) {
            return value != null && typeof value == "object";
          }
          var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
          function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
          }
          function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseIsMatch(object, source, getMatchData(source), customizer);
          }
          function isNaN2(value) {
            return isNumber(value) && value != +value;
          }
          function isNative(value) {
            if (isMaskable(value)) {
              throw new Error2(CORE_ERROR_TEXT);
            }
            return baseIsNative(value);
          }
          function isNull(value) {
            return value === null;
          }
          function isNil(value) {
            return value == null;
          }
          function isNumber(value) {
            return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
          }
          function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
              return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }
          var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
          function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
          }
          var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
          function isString(value) {
            return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
          }
          function isSymbol(value) {
            return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
          }
          var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
          function isUndefined(value) {
            return value === undefined2;
          }
          function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
          }
          function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
          }
          var lt = createRelationalOperation(baseLt);
          var lte = createRelationalOperation(function(value, other) {
            return value <= other;
          });
          function toArray(value) {
            if (!value) {
              return [];
            }
            if (isArrayLike(value)) {
              return isString(value) ? stringToArray(value) : copyArray(value);
            }
            if (symIterator && value[symIterator]) {
              return iteratorToArray(value[symIterator]());
            }
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value);
          }
          function toFinite(value) {
            if (!value) {
              return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
              var sign = value < 0 ? -1 : 1;
              return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
          }
          function toInteger(value) {
            var result2 = toFinite(value), remainder = result2 % 1;
            return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
          }
          function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
          }
          function toNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            if (isObject(value)) {
              var other = typeof value.valueOf == "function" ? value.valueOf() : value;
              value = isObject(other) ? other + "" : other;
            }
            if (typeof value != "string") {
              return value === 0 ? value : +value;
            }
            value = baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
          }
          function toPlainObject(value) {
            return copyObject(value, keysIn(value));
          }
          function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
          }
          function toString(value) {
            return value == null ? "" : baseToString(value);
          }
          var assign = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
              copyObject(source, keys(source), object);
              return;
            }
            for (var key in source) {
              if (hasOwnProperty.call(source, key)) {
                assignValue(object, key, source[key]);
              }
            }
          });
          var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object);
          });
          var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
          });
          var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
          });
          var at = flatRest(baseAt);
          function create(prototype, properties) {
            var result2 = baseCreate(prototype);
            return properties == null ? result2 : baseAssign(result2, properties);
          }
          var defaults = baseRest(function(object, sources) {
            object = Object2(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              length = 1;
            }
            while (++index < length) {
              var source = sources[index];
              var props = keysIn(source);
              var propsIndex = -1;
              var propsLength = props.length;
              while (++propsIndex < propsLength) {
                var key = props[propsIndex];
                var value = object[key];
                if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                  object[key] = source[key];
                }
              }
            }
            return object;
          });
          var defaultsDeep = baseRest(function(args) {
            args.push(undefined2, customDefaultsMerge);
            return apply(mergeWith, undefined2, args);
          });
          function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
          }
          function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
          }
          function forIn(object, iteratee2) {
            return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forInRight(object, iteratee2) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forOwn(object, iteratee2) {
            return object && baseForOwn(object, getIteratee(iteratee2, 3));
          }
          function forOwnRight(object, iteratee2) {
            return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
          }
          function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object));
          }
          function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
          }
          function get(object, path, defaultValue) {
            var result2 = object == null ? undefined2 : baseGet(object, path);
            return result2 === undefined2 ? defaultValue : result2;
          }
          function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
          }
          function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
          }
          var invert = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            result2[value] = key;
          }, constant(identity));
          var invertBy = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            if (hasOwnProperty.call(result2, value)) {
              result2[value].push(key);
            } else {
              result2[value] = [key];
            }
          }, getIteratee);
          var invoke = baseRest(baseInvoke);
          function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
          }
          function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
          }
          function mapKeys(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, iteratee2(value, key, object2), value);
            });
            return result2;
          }
          function mapValues(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, key, iteratee2(value, key, object2));
            });
            return result2;
          }
          var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
          });
          var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
          });
          var omit2 = flatRest(function(object, paths) {
            var result2 = {};
            if (object == null) {
              return result2;
            }
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
              path = castPath(path, object);
              isDeep || (isDeep = path.length > 1);
              return path;
            });
            copyObject(object, getAllKeysIn(object), result2);
            if (isDeep) {
              result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            }
            var length = paths.length;
            while (length--) {
              baseUnset(result2, paths[length]);
            }
            return result2;
          });
          function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
          }
          var pick = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths);
          });
          function pickBy(object, predicate) {
            if (object == null) {
              return {};
            }
            var props = arrayMap(getAllKeysIn(object), function(prop) {
              return [prop];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path) {
              return predicate(value, path[0]);
            });
          }
          function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            if (!length) {
              length = 1;
              object = undefined2;
            }
            while (++index < length) {
              var value = object == null ? undefined2 : object[toKey(path[index])];
              if (value === undefined2) {
                index = length;
                value = defaultValue;
              }
              object = isFunction(value) ? value.call(object) : value;
            }
            return object;
          }
          function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
          }
          function setWith(object, path, value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseSet(object, path, value, customizer);
          }
          var toPairs = createToPairs(keys);
          var toPairsIn = createToPairs(keysIn);
          function transform(object, iteratee2, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee2 = getIteratee(iteratee2, 4);
            if (accumulator == null) {
              var Ctor = object && object.constructor;
              if (isArrLike) {
                accumulator = isArr ? new Ctor() : [];
              } else if (isObject(object)) {
                accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
              } else {
                accumulator = {};
              }
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
              return iteratee2(accumulator, value, index, object2);
            });
            return accumulator;
          }
          function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
          }
          function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
          }
          function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
          }
          function values(object) {
            return object == null ? [] : baseValues(object, keys(object));
          }
          function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
          }
          function clamp(number, lower, upper) {
            if (upper === undefined2) {
              upper = lower;
              lower = undefined2;
            }
            if (upper !== undefined2) {
              upper = toNumber(upper);
              upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined2) {
              lower = toNumber(lower);
              lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
          }
          function inRange(number, start2, end) {
            start2 = toFinite(start2);
            if (end === undefined2) {
              end = start2;
              start2 = 0;
            } else {
              end = toFinite(end);
            }
            number = toNumber(number);
            return baseInRange(number, start2, end);
          }
          function random(lower, upper, floating) {
            if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
              upper = floating = undefined2;
            }
            if (floating === undefined2) {
              if (typeof upper == "boolean") {
                floating = upper;
                upper = undefined2;
              } else if (typeof lower == "boolean") {
                floating = lower;
                lower = undefined2;
              }
            }
            if (lower === undefined2 && upper === undefined2) {
              lower = 0;
              upper = 1;
            } else {
              lower = toFinite(lower);
              if (upper === undefined2) {
                upper = lower;
                lower = 0;
              } else {
                upper = toFinite(upper);
              }
            }
            if (lower > upper) {
              var temp = lower;
              lower = upper;
              upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
              var rand = nativeRandom();
              return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
            }
            return baseRandom(lower, upper);
          }
          var camelCase = createCompounder(function(result2, word, index) {
            word = word.toLowerCase();
            return result2 + (index ? capitalize(word) : word);
          });
          function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
          }
          function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
          }
          function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
          }
          function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
          }
          function escapeRegExp(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
          }
          var kebabCase2 = createCompounder(function(result2, word, index) {
            return result2 + (index ? "-" : "") + word.toLowerCase();
          });
          var lowerCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toLowerCase();
          });
          var lowerFirst = createCaseFirst("toLowerCase");
          function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) {
              return string;
            }
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
          }
          function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
          }
          function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
          }
          function parseInt2(string, radix, guard) {
            if (guard || radix == null) {
              radix = 0;
            } else if (radix) {
              radix = +radix;
            }
            return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
          }
          function repeat(string, n, guard) {
            if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
              n = 1;
            } else {
              n = toInteger(n);
            }
            return baseRepeat(toString(string), n);
          }
          function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
          }
          var snakeCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "_" : "") + word.toLowerCase();
          });
          function split(string, separator, limit) {
            if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
              separator = limit = undefined2;
            }
            limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) {
              return [];
            }
            string = toString(string);
            if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
              separator = baseToString(separator);
              if (!separator && hasUnicode(string)) {
                return castSlice(stringToArray(string), 0, limit);
              }
            }
            return string.split(separator, limit);
          }
          var startCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + upperFirst(word);
          });
          function startsWith(string, target, position) {
            string = toString(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
          }
          function template(string, options, guard) {
            var settings = lodash.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) {
              options = undefined2;
            }
            string = toString(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            var reDelimiters = RegExp2(
              (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
              "g"
            );
            var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
              interpolateValue || (interpolateValue = esTemplateValue);
              source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
              if (escapeValue) {
                isEscaping = true;
                source += "' +\n__e(" + escapeValue + ") +\n'";
              }
              if (evaluateValue) {
                isEvaluating = true;
                source += "';\n" + evaluateValue + ";\n__p += '";
              }
              if (interpolateValue) {
                source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
              }
              index = offset + match.length;
              return match;
            });
            source += "';\n";
            var variable = hasOwnProperty.call(options, "variable") && options.variable;
            if (!variable) {
              source = "with (obj) {\n" + source + "\n}\n";
            } else if (reForbiddenIdentifierChars.test(variable)) {
              throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
            }
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result2 = attempt(function() {
              return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
            });
            result2.source = source;
            if (isError(result2)) {
              throw result2;
            }
            return result2;
          }
          function toLower(value) {
            return toString(value).toLowerCase();
          }
          function toUpper(value) {
            return toString(value).toUpperCase();
          }
          function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return baseTrim(string);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start2 = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start2, end).join("");
          }
          function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return string.slice(0, trimmedEndIndex(string) + 1);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("");
          }
          function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return string.replace(reTrimStart, "");
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), start2 = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start2).join("");
          }
          function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
              var separator = "separator" in options ? options.separator : separator;
              length = "length" in options ? toInteger(options.length) : length;
              omission = "omission" in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
              var strSymbols = stringToArray(string);
              strLength = strSymbols.length;
            }
            if (length >= strLength) {
              return string;
            }
            var end = length - stringSize(omission);
            if (end < 1) {
              return omission;
            }
            var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
            if (separator === undefined2) {
              return result2 + omission;
            }
            if (strSymbols) {
              end += result2.length - end;
            }
            if (isRegExp(separator)) {
              if (string.slice(end).search(separator)) {
                var match, substring = result2;
                if (!separator.global) {
                  separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
                }
                separator.lastIndex = 0;
                while (match = separator.exec(substring)) {
                  var newEnd = match.index;
                }
                result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
              }
            } else if (string.indexOf(baseToString(separator), end) != end) {
              var index = result2.lastIndexOf(separator);
              if (index > -1) {
                result2 = result2.slice(0, index);
              }
            }
            return result2 + omission;
          }
          function unescape(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
          }
          var upperCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toUpperCase();
          });
          var upperFirst = createCaseFirst("toUpperCase");
          function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined2 : pattern;
            if (pattern === undefined2) {
              return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            }
            return string.match(pattern) || [];
          }
          var attempt = baseRest(function(func, args) {
            try {
              return apply(func, undefined2, args);
            } catch (e) {
              return isError(e) ? e : new Error2(e);
            }
          });
          var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
              key = toKey(key);
              baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
          });
          function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function(pair) {
              if (typeof pair[1] != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              return [toIteratee(pair[0]), pair[1]];
            });
            return baseRest(function(args) {
              var index = -1;
              while (++index < length) {
                var pair = pairs[index];
                if (apply(pair[0], this, args)) {
                  return apply(pair[1], this, args);
                }
              }
            });
          }
          function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
          }
          function constant(value) {
            return function() {
              return value;
            };
          }
          function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
          }
          var flow = createFlow();
          var flowRight = createFlow(true);
          function identity(value) {
            return value;
          }
          function iteratee(func) {
            return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
          }
          function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
          }
          function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
          }
          var method = baseRest(function(path, args) {
            return function(object) {
              return baseInvoke(object, path, args);
            };
          });
          var methodOf = baseRest(function(object, args) {
            return function(path) {
              return baseInvoke(object, path, args);
            };
          });
          function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
              options = source;
              source = object;
              object = this;
              methodNames = baseFunctions(source, keys(source));
            }
            var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
            arrayEach(methodNames, function(methodName) {
              var func = source[methodName];
              object[methodName] = func;
              if (isFunc) {
                object.prototype[methodName] = function() {
                  var chainAll = this.__chain__;
                  if (chain2 || chainAll) {
                    var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                    actions.push({ "func": func, "args": arguments, "thisArg": object });
                    result2.__chain__ = chainAll;
                    return result2;
                  }
                  return func.apply(object, arrayPush([this.value()], arguments));
                };
              }
            });
            return object;
          }
          function noConflict() {
            if (root._ === this) {
              root._ = oldDash;
            }
            return this;
          }
          function noop() {
          }
          function nthArg(n) {
            n = toInteger(n);
            return baseRest(function(args) {
              return baseNth(args, n);
            });
          }
          var over = createOver(arrayMap);
          var overEvery = createOver(arrayEvery);
          var overSome = createOver(arraySome);
          function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
          }
          function propertyOf(object) {
            return function(path) {
              return object == null ? undefined2 : baseGet(object, path);
            };
          }
          var range = createRange();
          var rangeRight = createRange(true);
          function stubArray() {
            return [];
          }
          function stubFalse() {
            return false;
          }
          function stubObject() {
            return {};
          }
          function stubString() {
            return "";
          }
          function stubTrue() {
            return true;
          }
          function times(n, iteratee2) {
            n = toInteger(n);
            if (n < 1 || n > MAX_SAFE_INTEGER) {
              return [];
            }
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee2 = getIteratee(iteratee2);
            n -= MAX_ARRAY_LENGTH;
            var result2 = baseTimes(length, iteratee2);
            while (++index < n) {
              iteratee2(index);
            }
            return result2;
          }
          function toPath(value) {
            if (isArray(value)) {
              return arrayMap(value, toKey);
            }
            return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
          }
          function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
          }
          var add = createMathOperation(function(augend, addend) {
            return augend + addend;
          }, 0);
          var ceil = createRound("ceil");
          var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
          }, 1);
          var floor = createRound("floor");
          function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
          }
          function maxBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
          }
          function mean(array) {
            return baseMean(array, identity);
          }
          function meanBy(array, iteratee2) {
            return baseMean(array, getIteratee(iteratee2, 2));
          }
          function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
          }
          function minBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
          }
          var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
          }, 1);
          var round = createRound("round");
          var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
          }, 0);
          function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
          }
          function sumBy(array, iteratee2) {
            return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
          }
          lodash.after = after;
          lodash.ary = ary;
          lodash.assign = assign;
          lodash.assignIn = assignIn;
          lodash.assignInWith = assignInWith;
          lodash.assignWith = assignWith;
          lodash.at = at;
          lodash.before = before;
          lodash.bind = bind;
          lodash.bindAll = bindAll;
          lodash.bindKey = bindKey;
          lodash.castArray = castArray;
          lodash.chain = chain;
          lodash.chunk = chunk;
          lodash.compact = compact;
          lodash.concat = concat;
          lodash.cond = cond;
          lodash.conforms = conforms;
          lodash.constant = constant;
          lodash.countBy = countBy;
          lodash.create = create;
          lodash.curry = curry;
          lodash.curryRight = curryRight;
          lodash.debounce = debounce;
          lodash.defaults = defaults;
          lodash.defaultsDeep = defaultsDeep;
          lodash.defer = defer;
          lodash.delay = delay;
          lodash.difference = difference;
          lodash.differenceBy = differenceBy;
          lodash.differenceWith = differenceWith;
          lodash.drop = drop;
          lodash.dropRight = dropRight;
          lodash.dropRightWhile = dropRightWhile;
          lodash.dropWhile = dropWhile;
          lodash.fill = fill;
          lodash.filter = filter;
          lodash.flatMap = flatMap;
          lodash.flatMapDeep = flatMapDeep;
          lodash.flatMapDepth = flatMapDepth;
          lodash.flatten = flatten;
          lodash.flattenDeep = flattenDeep;
          lodash.flattenDepth = flattenDepth;
          lodash.flip = flip;
          lodash.flow = flow;
          lodash.flowRight = flowRight;
          lodash.fromPairs = fromPairs;
          lodash.functions = functions;
          lodash.functionsIn = functionsIn;
          lodash.groupBy = groupBy;
          lodash.initial = initial;
          lodash.intersection = intersection;
          lodash.intersectionBy = intersectionBy;
          lodash.intersectionWith = intersectionWith;
          lodash.invert = invert;
          lodash.invertBy = invertBy;
          lodash.invokeMap = invokeMap;
          lodash.iteratee = iteratee;
          lodash.keyBy = keyBy;
          lodash.keys = keys;
          lodash.keysIn = keysIn;
          lodash.map = map;
          lodash.mapKeys = mapKeys;
          lodash.mapValues = mapValues;
          lodash.matches = matches;
          lodash.matchesProperty = matchesProperty;
          lodash.memoize = memoize;
          lodash.merge = merge;
          lodash.mergeWith = mergeWith;
          lodash.method = method;
          lodash.methodOf = methodOf;
          lodash.mixin = mixin;
          lodash.negate = negate;
          lodash.nthArg = nthArg;
          lodash.omit = omit2;
          lodash.omitBy = omitBy;
          lodash.once = once;
          lodash.orderBy = orderBy;
          lodash.over = over;
          lodash.overArgs = overArgs;
          lodash.overEvery = overEvery;
          lodash.overSome = overSome;
          lodash.partial = partial;
          lodash.partialRight = partialRight;
          lodash.partition = partition;
          lodash.pick = pick;
          lodash.pickBy = pickBy;
          lodash.property = property;
          lodash.propertyOf = propertyOf;
          lodash.pull = pull;
          lodash.pullAll = pullAll;
          lodash.pullAllBy = pullAllBy;
          lodash.pullAllWith = pullAllWith;
          lodash.pullAt = pullAt;
          lodash.range = range;
          lodash.rangeRight = rangeRight;
          lodash.rearg = rearg;
          lodash.reject = reject;
          lodash.remove = remove2;
          lodash.rest = rest;
          lodash.reverse = reverse;
          lodash.sampleSize = sampleSize;
          lodash.set = set;
          lodash.setWith = setWith;
          lodash.shuffle = shuffle;
          lodash.slice = slice;
          lodash.sortBy = sortBy;
          lodash.sortedUniq = sortedUniq;
          lodash.sortedUniqBy = sortedUniqBy;
          lodash.split = split;
          lodash.spread = spread;
          lodash.tail = tail;
          lodash.take = take;
          lodash.takeRight = takeRight;
          lodash.takeRightWhile = takeRightWhile;
          lodash.takeWhile = takeWhile;
          lodash.tap = tap;
          lodash.throttle = throttle;
          lodash.thru = thru;
          lodash.toArray = toArray;
          lodash.toPairs = toPairs;
          lodash.toPairsIn = toPairsIn;
          lodash.toPath = toPath;
          lodash.toPlainObject = toPlainObject;
          lodash.transform = transform;
          lodash.unary = unary;
          lodash.union = union;
          lodash.unionBy = unionBy;
          lodash.unionWith = unionWith;
          lodash.uniq = uniq;
          lodash.uniqBy = uniqBy;
          lodash.uniqWith = uniqWith;
          lodash.unset = unset;
          lodash.unzip = unzip;
          lodash.unzipWith = unzipWith;
          lodash.update = update;
          lodash.updateWith = updateWith;
          lodash.values = values;
          lodash.valuesIn = valuesIn;
          lodash.without = without;
          lodash.words = words;
          lodash.wrap = wrap;
          lodash.xor = xor;
          lodash.xorBy = xorBy;
          lodash.xorWith = xorWith;
          lodash.zip = zip;
          lodash.zipObject = zipObject;
          lodash.zipObjectDeep = zipObjectDeep;
          lodash.zipWith = zipWith;
          lodash.entries = toPairs;
          lodash.entriesIn = toPairsIn;
          lodash.extend = assignIn;
          lodash.extendWith = assignInWith;
          mixin(lodash, lodash);
          lodash.add = add;
          lodash.attempt = attempt;
          lodash.camelCase = camelCase;
          lodash.capitalize = capitalize;
          lodash.ceil = ceil;
          lodash.clamp = clamp;
          lodash.clone = clone;
          lodash.cloneDeep = cloneDeep;
          lodash.cloneDeepWith = cloneDeepWith;
          lodash.cloneWith = cloneWith;
          lodash.conformsTo = conformsTo;
          lodash.deburr = deburr;
          lodash.defaultTo = defaultTo;
          lodash.divide = divide;
          lodash.endsWith = endsWith;
          lodash.eq = eq;
          lodash.escape = escape;
          lodash.escapeRegExp = escapeRegExp;
          lodash.every = every;
          lodash.find = find;
          lodash.findIndex = findIndex;
          lodash.findKey = findKey;
          lodash.findLast = findLast;
          lodash.findLastIndex = findLastIndex;
          lodash.findLastKey = findLastKey;
          lodash.floor = floor;
          lodash.forEach = forEach;
          lodash.forEachRight = forEachRight;
          lodash.forIn = forIn;
          lodash.forInRight = forInRight;
          lodash.forOwn = forOwn;
          lodash.forOwnRight = forOwnRight;
          lodash.get = get;
          lodash.gt = gt;
          lodash.gte = gte;
          lodash.has = has;
          lodash.hasIn = hasIn;
          lodash.head = head;
          lodash.identity = identity;
          lodash.includes = includes;
          lodash.indexOf = indexOf;
          lodash.inRange = inRange;
          lodash.invoke = invoke;
          lodash.isArguments = isArguments;
          lodash.isArray = isArray;
          lodash.isArrayBuffer = isArrayBuffer;
          lodash.isArrayLike = isArrayLike;
          lodash.isArrayLikeObject = isArrayLikeObject;
          lodash.isBoolean = isBoolean;
          lodash.isBuffer = isBuffer;
          lodash.isDate = isDate;
          lodash.isElement = isElement;
          lodash.isEmpty = isEmpty;
          lodash.isEqual = isEqual;
          lodash.isEqualWith = isEqualWith;
          lodash.isError = isError;
          lodash.isFinite = isFinite;
          lodash.isFunction = isFunction;
          lodash.isInteger = isInteger;
          lodash.isLength = isLength;
          lodash.isMap = isMap;
          lodash.isMatch = isMatch;
          lodash.isMatchWith = isMatchWith;
          lodash.isNaN = isNaN2;
          lodash.isNative = isNative;
          lodash.isNil = isNil;
          lodash.isNull = isNull;
          lodash.isNumber = isNumber;
          lodash.isObject = isObject;
          lodash.isObjectLike = isObjectLike;
          lodash.isPlainObject = isPlainObject;
          lodash.isRegExp = isRegExp;
          lodash.isSafeInteger = isSafeInteger;
          lodash.isSet = isSet;
          lodash.isString = isString;
          lodash.isSymbol = isSymbol;
          lodash.isTypedArray = isTypedArray;
          lodash.isUndefined = isUndefined;
          lodash.isWeakMap = isWeakMap;
          lodash.isWeakSet = isWeakSet;
          lodash.join = join;
          lodash.kebabCase = kebabCase2;
          lodash.last = last;
          lodash.lastIndexOf = lastIndexOf;
          lodash.lowerCase = lowerCase;
          lodash.lowerFirst = lowerFirst;
          lodash.lt = lt;
          lodash.lte = lte;
          lodash.max = max;
          lodash.maxBy = maxBy;
          lodash.mean = mean;
          lodash.meanBy = meanBy;
          lodash.min = min;
          lodash.minBy = minBy;
          lodash.stubArray = stubArray;
          lodash.stubFalse = stubFalse;
          lodash.stubObject = stubObject;
          lodash.stubString = stubString;
          lodash.stubTrue = stubTrue;
          lodash.multiply = multiply;
          lodash.nth = nth;
          lodash.noConflict = noConflict;
          lodash.noop = noop;
          lodash.now = now;
          lodash.pad = pad;
          lodash.padEnd = padEnd;
          lodash.padStart = padStart;
          lodash.parseInt = parseInt2;
          lodash.random = random;
          lodash.reduce = reduce;
          lodash.reduceRight = reduceRight;
          lodash.repeat = repeat;
          lodash.replace = replace;
          lodash.result = result;
          lodash.round = round;
          lodash.runInContext = runInContext2;
          lodash.sample = sample;
          lodash.size = size;
          lodash.snakeCase = snakeCase;
          lodash.some = some;
          lodash.sortedIndex = sortedIndex;
          lodash.sortedIndexBy = sortedIndexBy;
          lodash.sortedIndexOf = sortedIndexOf;
          lodash.sortedLastIndex = sortedLastIndex;
          lodash.sortedLastIndexBy = sortedLastIndexBy;
          lodash.sortedLastIndexOf = sortedLastIndexOf;
          lodash.startCase = startCase;
          lodash.startsWith = startsWith;
          lodash.subtract = subtract;
          lodash.sum = sum;
          lodash.sumBy = sumBy;
          lodash.template = template;
          lodash.times = times;
          lodash.toFinite = toFinite;
          lodash.toInteger = toInteger;
          lodash.toLength = toLength;
          lodash.toLower = toLower;
          lodash.toNumber = toNumber;
          lodash.toSafeInteger = toSafeInteger;
          lodash.toString = toString;
          lodash.toUpper = toUpper;
          lodash.trim = trim;
          lodash.trimEnd = trimEnd;
          lodash.trimStart = trimStart;
          lodash.truncate = truncate;
          lodash.unescape = unescape;
          lodash.uniqueId = uniqueId;
          lodash.upperCase = upperCase;
          lodash.upperFirst = upperFirst;
          lodash.each = forEach;
          lodash.eachRight = forEachRight;
          lodash.first = head;
          mixin(lodash, function() {
            var source = {};
            baseForOwn(lodash, function(func, methodName) {
              if (!hasOwnProperty.call(lodash.prototype, methodName)) {
                source[methodName] = func;
              }
            });
            return source;
          }(), { "chain": false });
          lodash.VERSION = VERSION;
          arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
            lodash[methodName].placeholder = lodash;
          });
          arrayEach(["drop", "take"], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n) {
              n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
              var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
              if (result2.__filtered__) {
                result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
              } else {
                result2.__views__.push({
                  "size": nativeMin(n, MAX_ARRAY_LENGTH),
                  "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
                });
              }
              return result2;
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n) {
              return this.reverse()[methodName](n).reverse();
            };
          });
          arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee2) {
              var result2 = this.clone();
              result2.__iteratees__.push({
                "iteratee": getIteratee(iteratee2, 3),
                "type": type
              });
              result2.__filtered__ = result2.__filtered__ || isFilter;
              return result2;
            };
          });
          arrayEach(["head", "last"], function(methodName, index) {
            var takeName = "take" + (index ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
              return this[takeName](1).value()[0];
            };
          });
          arrayEach(["initial", "tail"], function(methodName, index) {
            var dropName = "drop" + (index ? "" : "Right");
            LazyWrapper.prototype[methodName] = function() {
              return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
          });
          LazyWrapper.prototype.compact = function() {
            return this.filter(identity);
          };
          LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head();
          };
          LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate);
          };
          LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
            if (typeof path == "function") {
              return new LazyWrapper(this);
            }
            return this.map(function(value) {
              return baseInvoke(value, path, args);
            });
          });
          LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate(getIteratee(predicate)));
          };
          LazyWrapper.prototype.slice = function(start2, end) {
            start2 = toInteger(start2);
            var result2 = this;
            if (result2.__filtered__ && (start2 > 0 || end < 0)) {
              return new LazyWrapper(result2);
            }
            if (start2 < 0) {
              result2 = result2.takeRight(-start2);
            } else if (start2) {
              result2 = result2.drop(start2);
            }
            if (end !== undefined2) {
              end = toInteger(end);
              result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start2);
            }
            return result2;
          };
          LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
          };
          LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
          };
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) {
              return;
            }
            lodash.prototype[methodName] = function() {
              var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
              var interceptor = function(value2) {
                var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
                return isTaker && chainAll ? result3[0] : result3;
              };
              if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
                isLazy = useLazy = false;
              }
              var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
              if (!retUnwrapped && useLazy) {
                value = onlyLazy ? value : new LazyWrapper(this);
                var result2 = func.apply(value, args);
                result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
                return new LodashWrapper(result2, chainAll);
              }
              if (isUnwrapped && onlyLazy) {
                return func.apply(this, args);
              }
              result2 = this.thru(interceptor);
              return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
            };
          });
          arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function() {
              var args = arguments;
              if (retUnwrapped && !this.__chain__) {
                var value = this.value();
                return func.apply(isArray(value) ? value : [], args);
              }
              return this[chainName](function(value2) {
                return func.apply(isArray(value2) ? value2 : [], args);
              });
            };
          });
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
              var key = lodashFunc.name + "";
              if (!hasOwnProperty.call(realNames, key)) {
                realNames[key] = [];
              }
              realNames[key].push({ "name": methodName, "func": lodashFunc });
            }
          });
          realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
            "name": "wrapper",
            "func": undefined2
          }];
          LazyWrapper.prototype.clone = lazyClone;
          LazyWrapper.prototype.reverse = lazyReverse;
          LazyWrapper.prototype.value = lazyValue;
          lodash.prototype.at = wrapperAt;
          lodash.prototype.chain = wrapperChain;
          lodash.prototype.commit = wrapperCommit;
          lodash.prototype.next = wrapperNext;
          lodash.prototype.plant = wrapperPlant;
          lodash.prototype.reverse = wrapperReverse;
          lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
          lodash.prototype.first = lodash.prototype.head;
          if (symIterator) {
            lodash.prototype[symIterator] = wrapperToIterator;
          }
          return lodash;
        };
        var _ = runInContext();
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
          root._ = _;
          define(function() {
            return _;
          });
        } else if (freeModule) {
          (freeModule.exports = _)._ = _;
          freeExports._ = _;
        } else {
          root._ = _;
        }
      }).call(exports);
    }
  });

  // ../../node_modules/cross-fetch/dist/browser-ponyfill.js
  var require_browser_ponyfill = __commonJS({
    "../../node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
      var global2 = typeof self !== "undefined" ? self : exports;
      var __self__ = function() {
        function F() {
          this.fetch = false;
          this.DOMException = global2.DOMException;
        }
        F.prototype = global2;
        return new F();
      }();
      (function(self2) {
        var irrelevant = function(exports2) {
          var support = {
            searchParams: "URLSearchParams" in self2,
            iterable: "Symbol" in self2 && "iterator" in Symbol,
            blob: "FileReader" in self2 && "Blob" in self2 && function() {
              try {
                new Blob();
                return true;
              } catch (e) {
                return false;
              }
            }(),
            formData: "FormData" in self2,
            arrayBuffer: "ArrayBuffer" in self2
          };
          function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
          }
          if (support.arrayBuffer) {
            var viewClasses = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]"
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
              return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
          }
          function normalizeName(name) {
            if (typeof name !== "string") {
              name = String(name);
            }
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
              throw new TypeError("Invalid character in header field name");
            }
            return name.toLowerCase();
          }
          function normalizeValue(value) {
            if (typeof value !== "string") {
              value = String(value);
            }
            return value;
          }
          function iteratorFor(items) {
            var iterator = {
              next: function() {
                var value = items.shift();
                return { done: value === void 0, value };
              }
            };
            if (support.iterable) {
              iterator[Symbol.iterator] = function() {
                return iterator;
              };
            }
            return iterator;
          }
          function Headers2(headers) {
            this.map = {};
            if (headers instanceof Headers2) {
              headers.forEach(function(value, name) {
                this.append(name, value);
              }, this);
            } else if (Array.isArray(headers)) {
              headers.forEach(function(header) {
                this.append(header[0], header[1]);
              }, this);
            } else if (headers) {
              Object.getOwnPropertyNames(headers).forEach(function(name) {
                this.append(name, headers[name]);
              }, this);
            }
          }
          Headers2.prototype.append = function(name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + ", " + value : value;
          };
          Headers2.prototype["delete"] = function(name) {
            delete this.map[normalizeName(name)];
          };
          Headers2.prototype.get = function(name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
          };
          Headers2.prototype.has = function(name) {
            return this.map.hasOwnProperty(normalizeName(name));
          };
          Headers2.prototype.set = function(name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
          };
          Headers2.prototype.forEach = function(callback, thisArg) {
            for (var name in this.map) {
              if (this.map.hasOwnProperty(name)) {
                callback.call(thisArg, this.map[name], name, this);
              }
            }
          };
          Headers2.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name) {
              items.push(name);
            });
            return iteratorFor(items);
          };
          Headers2.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
              items.push(value);
            });
            return iteratorFor(items);
          };
          Headers2.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name) {
              items.push([name, value]);
            });
            return iteratorFor(items);
          };
          if (support.iterable) {
            Headers2.prototype[Symbol.iterator] = Headers2.prototype.entries;
          }
          function consumed(body) {
            if (body.bodyUsed) {
              return Promise.reject(new TypeError("Already read"));
            }
            body.bodyUsed = true;
          }
          function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
              reader.onload = function() {
                resolve(reader.result);
              };
              reader.onerror = function() {
                reject(reader.error);
              };
            });
          }
          function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
          }
          function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
          }
          function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for (var i = 0; i < view.length; i++) {
              chars[i] = String.fromCharCode(view[i]);
            }
            return chars.join("");
          }
          function bufferClone(buf) {
            if (buf.slice) {
              return buf.slice(0);
            } else {
              var view = new Uint8Array(buf.byteLength);
              view.set(new Uint8Array(buf));
              return view.buffer;
            }
          }
          function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
              this._bodyInit = body;
              if (!body) {
                this._bodyText = "";
              } else if (typeof body === "string") {
                this._bodyText = body;
              } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body;
              } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body;
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this._bodyText = body.toString();
              } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
              } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                this._bodyArrayBuffer = bufferClone(body);
              } else {
                this._bodyText = body = Object.prototype.toString.call(body);
              }
              if (!this.headers.get("content-type")) {
                if (typeof body === "string") {
                  this.headers.set("content-type", "text/plain;charset=UTF-8");
                } else if (this._bodyBlob && this._bodyBlob.type) {
                  this.headers.set("content-type", this._bodyBlob.type);
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                  this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
              }
            };
            if (support.blob) {
              this.blob = function() {
                var rejected = consumed(this);
                if (rejected) {
                  return rejected;
                }
                if (this._bodyBlob) {
                  return Promise.resolve(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                } else if (this._bodyFormData) {
                  throw new Error("could not read FormData body as blob");
                } else {
                  return Promise.resolve(new Blob([this._bodyText]));
                }
              };
              this.arrayBuffer = function() {
                if (this._bodyArrayBuffer) {
                  return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                } else {
                  return this.blob().then(readBlobAsArrayBuffer);
                }
              };
            }
            this.text = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as text");
              } else {
                return Promise.resolve(this._bodyText);
              }
            };
            if (support.formData) {
              this.formData = function() {
                return this.text().then(decode);
              };
            }
            this.json = function() {
              return this.text().then(JSON.parse);
            };
            return this;
          }
          var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
          }
          function Request(input, options) {
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
              if (input.bodyUsed) {
                throw new TypeError("Already read");
              }
              this.url = input.url;
              this.credentials = input.credentials;
              if (!options.headers) {
                this.headers = new Headers2(input.headers);
              }
              this.method = input.method;
              this.mode = input.mode;
              this.signal = input.signal;
              if (!body && input._bodyInit != null) {
                body = input._bodyInit;
                input.bodyUsed = true;
              }
            } else {
              this.url = String(input);
            }
            this.credentials = options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) {
              this.headers = new Headers2(options.headers);
            }
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) {
              throw new TypeError("Body not allowed for GET or HEAD requests");
            }
            this._initBody(body);
          }
          Request.prototype.clone = function() {
            return new Request(this, { body: this._bodyInit });
          };
          function decode(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
              if (bytes) {
                var split = bytes.split("=");
                var name = split.shift().replace(/\+/g, " ");
                var value = split.join("=").replace(/\+/g, " ");
                form.append(decodeURIComponent(name), decodeURIComponent(value));
              }
            });
            return form;
          }
          function parseHeaders(rawHeaders) {
            var headers = new Headers2();
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
              var parts = line.split(":");
              var key = parts.shift().trim();
              if (key) {
                var value = parts.join(":").trim();
                headers.append(key, value);
              }
            });
            return headers;
          }
          Body.call(Request.prototype);
          function Response(bodyInit, options) {
            if (!options) {
              options = {};
            }
            this.type = "default";
            this.status = options.status === void 0 ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in options ? options.statusText : "OK";
            this.headers = new Headers2(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
          }
          Body.call(Response.prototype);
          Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers2(this.headers),
              url: this.url
            });
          };
          Response.error = function() {
            var response = new Response(null, { status: 0, statusText: "" });
            response.type = "error";
            return response;
          };
          var redirectStatuses = [301, 302, 303, 307, 308];
          Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) {
              throw new RangeError("Invalid status code");
            }
            return new Response(null, { status, headers: { location: url } });
          };
          exports2.DOMException = self2.DOMException;
          try {
            new exports2.DOMException();
          } catch (err) {
            exports2.DOMException = function(message, name) {
              this.message = message;
              this.name = name;
              var error = Error(message);
              this.stack = error.stack;
            };
            exports2.DOMException.prototype = Object.create(Error.prototype);
            exports2.DOMException.prototype.constructor = exports2.DOMException;
          }
          function fetch2(input, init) {
            return new Promise(function(resolve, reject) {
              var request = new Request(input, init);
              if (request.signal && request.signal.aborted) {
                return reject(new exports2.DOMException("Aborted", "AbortError"));
              }
              var xhr = new XMLHttpRequest();
              function abortXhr() {
                xhr.abort();
              }
              xhr.onload = function() {
                var options = {
                  status: xhr.status,
                  statusText: xhr.statusText,
                  headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                };
                options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                var body = "response" in xhr ? xhr.response : xhr.responseText;
                resolve(new Response(body, options));
              };
              xhr.onerror = function() {
                reject(new TypeError("Network request failed"));
              };
              xhr.ontimeout = function() {
                reject(new TypeError("Network request failed"));
              };
              xhr.onabort = function() {
                reject(new exports2.DOMException("Aborted", "AbortError"));
              };
              xhr.open(request.method, request.url, true);
              if (request.credentials === "include") {
                xhr.withCredentials = true;
              } else if (request.credentials === "omit") {
                xhr.withCredentials = false;
              }
              if ("responseType" in xhr && support.blob) {
                xhr.responseType = "blob";
              }
              request.headers.forEach(function(value, name) {
                xhr.setRequestHeader(name, value);
              });
              if (request.signal) {
                request.signal.addEventListener("abort", abortXhr);
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    request.signal.removeEventListener("abort", abortXhr);
                  }
                };
              }
              xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
            });
          }
          fetch2.polyfill = true;
          if (!self2.fetch) {
            self2.fetch = fetch2;
            self2.Headers = Headers2;
            self2.Request = Request;
            self2.Response = Response;
          }
          exports2.Headers = Headers2;
          exports2.Request = Request;
          exports2.Response = Response;
          exports2.fetch = fetch2;
          Object.defineProperty(exports2, "__esModule", { value: true });
          return exports2;
        }({});
      })(__self__);
      __self__.fetch.ponyfill = true;
      delete __self__.fetch.polyfill;
      var ctx = __self__;
      exports = ctx.fetch;
      exports.default = ctx.fetch;
      exports.fetch = ctx.fetch;
      exports.Headers = ctx.Headers;
      exports.Request = ctx.Request;
      exports.Response = ctx.Response;
      module.exports = exports;
    }
  });

  // ../../node_modules/extract-files/public/ReactNativeFile.js
  var require_ReactNativeFile = __commonJS({
    "../../node_modules/extract-files/public/ReactNativeFile.js"(exports, module) {
      "use strict";
      module.exports = function ReactNativeFile(_ref) {
        var uri = _ref.uri, name = _ref.name, type = _ref.type;
        this.uri = uri;
        this.name = name;
        this.type = type;
      };
    }
  });

  // ../../node_modules/extract-files/public/isExtractableFile.js
  var require_isExtractableFile = __commonJS({
    "../../node_modules/extract-files/public/isExtractableFile.js"(exports, module) {
      "use strict";
      var ReactNativeFile = require_ReactNativeFile();
      module.exports = function isExtractableFile(value) {
        return typeof File !== "undefined" && value instanceof File || typeof Blob !== "undefined" && value instanceof Blob || value instanceof ReactNativeFile;
      };
    }
  });

  // ../../node_modules/extract-files/public/extractFiles.js
  var require_extractFiles = __commonJS({
    "../../node_modules/extract-files/public/extractFiles.js"(exports, module) {
      "use strict";
      var defaultIsExtractableFile = require_isExtractableFile();
      module.exports = function extractFiles(value, path, isExtractableFile) {
        if (path === void 0) {
          path = "";
        }
        if (isExtractableFile === void 0) {
          isExtractableFile = defaultIsExtractableFile;
        }
        var clone;
        var files = /* @__PURE__ */ new Map();
        function addFile(paths, file) {
          var storedPaths = files.get(file);
          if (storedPaths)
            storedPaths.push.apply(storedPaths, paths);
          else
            files.set(file, paths);
        }
        if (isExtractableFile(value)) {
          clone = null;
          addFile([path], value);
        } else {
          var prefix = path ? path + "." : "";
          if (typeof FileList !== "undefined" && value instanceof FileList)
            clone = Array.prototype.map.call(value, function(file, i2) {
              addFile(["" + prefix + i2], file);
              return null;
            });
          else if (Array.isArray(value))
            clone = value.map(function(child, i2) {
              var result2 = extractFiles(child, "" + prefix + i2, isExtractableFile);
              result2.files.forEach(addFile);
              return result2.clone;
            });
          else if (value && value.constructor === Object) {
            clone = {};
            for (var i in value) {
              var result = extractFiles(value[i], "" + prefix + i, isExtractableFile);
              result.files.forEach(addFile);
              clone[i] = result.clone;
            }
          } else
            clone = value;
        }
        return {
          clone,
          files
        };
      };
    }
  });

  // ../../node_modules/extract-files/public/index.js
  var require_public = __commonJS({
    "../../node_modules/extract-files/public/index.js"(exports) {
      "use strict";
      exports.ReactNativeFile = require_ReactNativeFile();
      exports.extractFiles = require_extractFiles();
      exports.isExtractableFile = require_isExtractableFile();
    }
  });

  // ../../node_modules/graphql-request/node_modules/form-data/lib/browser.js
  var require_browser = __commonJS({
    "../../node_modules/graphql-request/node_modules/form-data/lib/browser.js"(exports, module) {
      module.exports = typeof self == "object" ? self.FormData : window.FormData;
    }
  });

  // ../../node_modules/graphql-request/dist/defaultJsonSerializer.js
  var require_defaultJsonSerializer = __commonJS({
    "../../node_modules/graphql-request/dist/defaultJsonSerializer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.defaultJsonSerializer = void 0;
      exports.defaultJsonSerializer = {
        parse: JSON.parse,
        stringify: JSON.stringify
      };
    }
  });

  // ../../node_modules/graphql-request/dist/createRequestBody.js
  var require_createRequestBody = __commonJS({
    "../../node_modules/graphql-request/dist/createRequestBody.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var extract_files_1 = require_public();
      var form_data_1 = __importDefault(require_browser());
      var defaultJsonSerializer_1 = require_defaultJsonSerializer();
      var isExtractableFileEnhanced = function(value) {
        return (0, extract_files_1.isExtractableFile)(value) || value !== null && typeof value === "object" && typeof value.pipe === "function";
      };
      function createRequestBody(query, variables, operationName, jsonSerializer) {
        if (jsonSerializer === void 0) {
          jsonSerializer = defaultJsonSerializer_1.defaultJsonSerializer;
        }
        var _a = (0, extract_files_1.extractFiles)({ query, variables, operationName }, "", isExtractableFileEnhanced), clone = _a.clone, files = _a.files;
        if (files.size === 0) {
          if (!Array.isArray(query)) {
            return jsonSerializer.stringify(clone);
          }
          if (typeof variables !== "undefined" && !Array.isArray(variables)) {
            throw new Error("Cannot create request body with given variable type, array expected");
          }
          var payload = query.reduce(function(accu, currentQuery, index) {
            accu.push({ query: currentQuery, variables: variables ? variables[index] : void 0 });
            return accu;
          }, []);
          return jsonSerializer.stringify(payload);
        }
        var Form = typeof FormData === "undefined" ? form_data_1.default : FormData;
        var form = new Form();
        form.append("operations", jsonSerializer.stringify(clone));
        var map = {};
        var i = 0;
        files.forEach(function(paths) {
          map[++i] = paths;
        });
        form.append("map", jsonSerializer.stringify(map));
        i = 0;
        files.forEach(function(paths, file) {
          form.append("".concat(++i), file);
        });
        return form;
      }
      exports.default = createRequestBody;
    }
  });

  // ../../node_modules/graphql-request/dist/parseArgs.js
  var require_parseArgs = __commonJS({
    "../../node_modules/graphql-request/dist/parseArgs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseBatchRequestsExtendedArgs = exports.parseRawRequestExtendedArgs = exports.parseRequestExtendedArgs = exports.parseBatchRequestArgs = exports.parseRawRequestArgs = exports.parseRequestArgs = void 0;
      function parseRequestArgs(documentOrOptions, variables, requestHeaders) {
        return documentOrOptions.document ? documentOrOptions : {
          document: documentOrOptions,
          variables,
          requestHeaders,
          signal: void 0
        };
      }
      exports.parseRequestArgs = parseRequestArgs;
      function parseRawRequestArgs(queryOrOptions, variables, requestHeaders) {
        return queryOrOptions.query ? queryOrOptions : {
          query: queryOrOptions,
          variables,
          requestHeaders,
          signal: void 0
        };
      }
      exports.parseRawRequestArgs = parseRawRequestArgs;
      function parseBatchRequestArgs(documentsOrOptions, requestHeaders) {
        return documentsOrOptions.documents ? documentsOrOptions : {
          documents: documentsOrOptions,
          requestHeaders,
          signal: void 0
        };
      }
      exports.parseBatchRequestArgs = parseBatchRequestArgs;
      function parseRequestExtendedArgs(urlOrOptions, document2) {
        var variablesAndRequestHeaders = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          variablesAndRequestHeaders[_i - 2] = arguments[_i];
        }
        var variables = variablesAndRequestHeaders[0], requestHeaders = variablesAndRequestHeaders[1];
        return urlOrOptions.document ? urlOrOptions : {
          url: urlOrOptions,
          document: document2,
          variables,
          requestHeaders,
          signal: void 0
        };
      }
      exports.parseRequestExtendedArgs = parseRequestExtendedArgs;
      function parseRawRequestExtendedArgs(urlOrOptions, query) {
        var variablesAndRequestHeaders = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          variablesAndRequestHeaders[_i - 2] = arguments[_i];
        }
        var variables = variablesAndRequestHeaders[0], requestHeaders = variablesAndRequestHeaders[1];
        return urlOrOptions.query ? urlOrOptions : {
          url: urlOrOptions,
          query,
          variables,
          requestHeaders,
          signal: void 0
        };
      }
      exports.parseRawRequestExtendedArgs = parseRawRequestExtendedArgs;
      function parseBatchRequestsExtendedArgs(urlOrOptions, documents, requestHeaders) {
        return urlOrOptions.documents ? urlOrOptions : {
          url: urlOrOptions,
          documents,
          requestHeaders,
          signal: void 0
        };
      }
      exports.parseBatchRequestsExtendedArgs = parseBatchRequestsExtendedArgs;
    }
  });

  // ../../node_modules/graphql-request/dist/types.js
  var require_types = __commonJS({
    "../../node_modules/graphql-request/dist/types.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ClientError = void 0;
      var ClientError = function(_super) {
        __extends(ClientError2, _super);
        function ClientError2(response, request) {
          var _this = this;
          var message = "".concat(ClientError2.extractMessage(response), ": ").concat(JSON.stringify({
            response,
            request
          }));
          _this = _super.call(this, message) || this;
          Object.setPrototypeOf(_this, ClientError2.prototype);
          _this.response = response;
          _this.request = request;
          if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(_this, ClientError2);
          }
          return _this;
        }
        ClientError2.extractMessage = function(response) {
          try {
            return response.errors[0].message;
          } catch (e) {
            return "GraphQL Error (Code: ".concat(response.status, ")");
          }
        };
        return ClientError2;
      }(Error);
      exports.ClientError = ClientError;
    }
  });

  // ../../node_modules/graphql/version.js
  var require_version = __commonJS({
    "../../node_modules/graphql/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.versionInfo = exports.version = void 0;
      var version = "16.6.0";
      exports.version = version;
      var versionInfo = Object.freeze({
        major: 16,
        minor: 6,
        patch: 0,
        preReleaseTag: null
      });
      exports.versionInfo = versionInfo;
    }
  });

  // ../../node_modules/graphql/jsutils/devAssert.js
  var require_devAssert = __commonJS({
    "../../node_modules/graphql/jsutils/devAssert.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.devAssert = devAssert;
      function devAssert(condition, message) {
        const booleanCondition = Boolean(condition);
        if (!booleanCondition) {
          throw new Error(message);
        }
      }
    }
  });

  // ../../node_modules/graphql/jsutils/isPromise.js
  var require_isPromise = __commonJS({
    "../../node_modules/graphql/jsutils/isPromise.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isPromise = isPromise;
      function isPromise(value) {
        return typeof (value === null || value === void 0 ? void 0 : value.then) === "function";
      }
    }
  });

  // ../../node_modules/graphql/jsutils/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "../../node_modules/graphql/jsutils/isObjectLike.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isObjectLike = isObjectLike;
      function isObjectLike(value) {
        return typeof value == "object" && value !== null;
      }
    }
  });

  // ../../node_modules/graphql/jsutils/invariant.js
  var require_invariant = __commonJS({
    "../../node_modules/graphql/jsutils/invariant.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.invariant = invariant;
      function invariant(condition, message) {
        const booleanCondition = Boolean(condition);
        if (!booleanCondition) {
          throw new Error(
            message != null ? message : "Unexpected invariant triggered."
          );
        }
      }
    }
  });

  // ../../node_modules/graphql/language/location.js
  var require_location = __commonJS({
    "../../node_modules/graphql/language/location.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getLocation = getLocation;
      var _invariant = require_invariant();
      var LineRegExp = /\r\n|[\n\r]/g;
      function getLocation(source, position) {
        let lastLineStart = 0;
        let line = 1;
        for (const match of source.body.matchAll(LineRegExp)) {
          typeof match.index === "number" || (0, _invariant.invariant)(false);
          if (match.index >= position) {
            break;
          }
          lastLineStart = match.index + match[0].length;
          line += 1;
        }
        return {
          line,
          column: position + 1 - lastLineStart
        };
      }
    }
  });

  // ../../node_modules/graphql/language/printLocation.js
  var require_printLocation = __commonJS({
    "../../node_modules/graphql/language/printLocation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.printLocation = printLocation;
      exports.printSourceLocation = printSourceLocation;
      var _location = require_location();
      function printLocation(location) {
        return printSourceLocation(
          location.source,
          (0, _location.getLocation)(location.source, location.start)
        );
      }
      function printSourceLocation(source, sourceLocation) {
        const firstLineColumnOffset = source.locationOffset.column - 1;
        const body = "".padStart(firstLineColumnOffset) + source.body;
        const lineIndex = sourceLocation.line - 1;
        const lineOffset = source.locationOffset.line - 1;
        const lineNum = sourceLocation.line + lineOffset;
        const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
        const columnNum = sourceLocation.column + columnOffset;
        const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
        const lines = body.split(/\r\n|[\n\r]/g);
        const locationLine = lines[lineIndex];
        if (locationLine.length > 120) {
          const subLineIndex = Math.floor(columnNum / 80);
          const subLineColumnNum = columnNum % 80;
          const subLines = [];
          for (let i = 0; i < locationLine.length; i += 80) {
            subLines.push(locationLine.slice(i, i + 80));
          }
          return locationStr + printPrefixedLines([
            [`${lineNum} |`, subLines[0]],
            ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
            ["|", "^".padStart(subLineColumnNum)],
            ["|", subLines[subLineIndex + 1]]
          ]);
        }
        return locationStr + printPrefixedLines([
          [`${lineNum - 1} |`, lines[lineIndex - 1]],
          [`${lineNum} |`, locationLine],
          ["|", "^".padStart(columnNum)],
          [`${lineNum + 1} |`, lines[lineIndex + 1]]
        ]);
      }
      function printPrefixedLines(lines) {
        const existingLines = lines.filter(([_, line]) => line !== void 0);
        const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
        return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
      }
    }
  });

  // ../../node_modules/graphql/error/GraphQLError.js
  var require_GraphQLError = __commonJS({
    "../../node_modules/graphql/error/GraphQLError.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GraphQLError = void 0;
      exports.formatError = formatError;
      exports.printError = printError;
      var _isObjectLike = require_isObjectLike();
      var _location = require_location();
      var _printLocation = require_printLocation();
      function toNormalizedOptions(args) {
        const firstArg = args[0];
        if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
          return {
            nodes: firstArg,
            source: args[1],
            positions: args[2],
            path: args[3],
            originalError: args[4],
            extensions: args[5]
          };
        }
        return firstArg;
      }
      var GraphQLError = class extends Error {
        constructor(message, ...rawArgs) {
          var _this$nodes, _nodeLocations$, _ref;
          const { nodes, source, positions, path, originalError, extensions } = toNormalizedOptions(rawArgs);
          super(message);
          this.name = "GraphQLError";
          this.path = path !== null && path !== void 0 ? path : void 0;
          this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
          this.nodes = undefinedIfEmpty(
            Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0
          );
          const nodeLocations = undefinedIfEmpty(
            (_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null)
          );
          this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
          this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
          this.locations = positions && source ? positions.map((pos) => (0, _location.getLocation)(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map(
            (loc) => (0, _location.getLocation)(loc.source, loc.start)
          );
          const originalExtensions = (0, _isObjectLike.isObjectLike)(
            originalError === null || originalError === void 0 ? void 0 : originalError.extensions
          ) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
          this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
          Object.defineProperties(this, {
            message: {
              writable: true,
              enumerable: true
            },
            name: {
              enumerable: false
            },
            nodes: {
              enumerable: false
            },
            source: {
              enumerable: false
            },
            positions: {
              enumerable: false
            },
            originalError: {
              enumerable: false
            }
          });
          if (originalError !== null && originalError !== void 0 && originalError.stack) {
            Object.defineProperty(this, "stack", {
              value: originalError.stack,
              writable: true,
              configurable: true
            });
          } else if (Error.captureStackTrace) {
            Error.captureStackTrace(this, GraphQLError);
          } else {
            Object.defineProperty(this, "stack", {
              value: Error().stack,
              writable: true,
              configurable: true
            });
          }
        }
        get [Symbol.toStringTag]() {
          return "GraphQLError";
        }
        toString() {
          let output = this.message;
          if (this.nodes) {
            for (const node of this.nodes) {
              if (node.loc) {
                output += "\n\n" + (0, _printLocation.printLocation)(node.loc);
              }
            }
          } else if (this.source && this.locations) {
            for (const location of this.locations) {
              output += "\n\n" + (0, _printLocation.printSourceLocation)(this.source, location);
            }
          }
          return output;
        }
        toJSON() {
          const formattedError = {
            message: this.message
          };
          if (this.locations != null) {
            formattedError.locations = this.locations;
          }
          if (this.path != null) {
            formattedError.path = this.path;
          }
          if (this.extensions != null && Object.keys(this.extensions).length > 0) {
            formattedError.extensions = this.extensions;
          }
          return formattedError;
        }
      };
      exports.GraphQLError = GraphQLError;
      function undefinedIfEmpty(array) {
        return array === void 0 || array.length === 0 ? void 0 : array;
      }
      function printError(error) {
        return error.toString();
      }
      function formatError(error) {
        return error.toJSON();
      }
    }
  });

  // ../../node_modules/graphql/error/syntaxError.js
  var require_syntaxError = __commonJS({
    "../../node_modules/graphql/error/syntaxError.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.syntaxError = syntaxError;
      var _GraphQLError = require_GraphQLError();
      function syntaxError(source, position, description) {
        return new _GraphQLError.GraphQLError(`Syntax Error: ${description}`, {
          source,
          positions: [position]
        });
      }
    }
  });

  // ../../node_modules/graphql/language/ast.js
  var require_ast = __commonJS({
    "../../node_modules/graphql/language/ast.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Token = exports.QueryDocumentKeys = exports.OperationTypeNode = exports.Location = void 0;
      exports.isNode = isNode;
      var Location = class {
        constructor(startToken, endToken, source) {
          this.start = startToken.start;
          this.end = endToken.end;
          this.startToken = startToken;
          this.endToken = endToken;
          this.source = source;
        }
        get [Symbol.toStringTag]() {
          return "Location";
        }
        toJSON() {
          return {
            start: this.start,
            end: this.end
          };
        }
      };
      exports.Location = Location;
      var Token = class {
        constructor(kind, start2, end, line, column, value) {
          this.kind = kind;
          this.start = start2;
          this.end = end;
          this.line = line;
          this.column = column;
          this.value = value;
          this.prev = null;
          this.next = null;
        }
        get [Symbol.toStringTag]() {
          return "Token";
        }
        toJSON() {
          return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
          };
        }
      };
      exports.Token = Token;
      var QueryDocumentKeys = {
        Name: [],
        Document: ["definitions"],
        OperationDefinition: [
          "name",
          "variableDefinitions",
          "directives",
          "selectionSet"
        ],
        VariableDefinition: ["variable", "type", "defaultValue", "directives"],
        Variable: ["name"],
        SelectionSet: ["selections"],
        Field: ["alias", "name", "arguments", "directives", "selectionSet"],
        Argument: ["name", "value"],
        FragmentSpread: ["name", "directives"],
        InlineFragment: ["typeCondition", "directives", "selectionSet"],
        FragmentDefinition: [
          "name",
          "variableDefinitions",
          "typeCondition",
          "directives",
          "selectionSet"
        ],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: ["values"],
        ObjectValue: ["fields"],
        ObjectField: ["name", "value"],
        Directive: ["name", "arguments"],
        NamedType: ["name"],
        ListType: ["type"],
        NonNullType: ["type"],
        SchemaDefinition: ["description", "directives", "operationTypes"],
        OperationTypeDefinition: ["type"],
        ScalarTypeDefinition: ["description", "name", "directives"],
        ObjectTypeDefinition: [
          "description",
          "name",
          "interfaces",
          "directives",
          "fields"
        ],
        FieldDefinition: ["description", "name", "arguments", "type", "directives"],
        InputValueDefinition: [
          "description",
          "name",
          "type",
          "defaultValue",
          "directives"
        ],
        InterfaceTypeDefinition: [
          "description",
          "name",
          "interfaces",
          "directives",
          "fields"
        ],
        UnionTypeDefinition: ["description", "name", "directives", "types"],
        EnumTypeDefinition: ["description", "name", "directives", "values"],
        EnumValueDefinition: ["description", "name", "directives"],
        InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
        DirectiveDefinition: ["description", "name", "arguments", "locations"],
        SchemaExtension: ["directives", "operationTypes"],
        ScalarTypeExtension: ["name", "directives"],
        ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
        InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
        UnionTypeExtension: ["name", "directives", "types"],
        EnumTypeExtension: ["name", "directives", "values"],
        InputObjectTypeExtension: ["name", "directives", "fields"]
      };
      exports.QueryDocumentKeys = QueryDocumentKeys;
      var kindValues = new Set(Object.keys(QueryDocumentKeys));
      function isNode(maybeNode) {
        const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
        return typeof maybeKind === "string" && kindValues.has(maybeKind);
      }
      var OperationTypeNode;
      exports.OperationTypeNode = OperationTypeNode;
      (function(OperationTypeNode2) {
        OperationTypeNode2["QUERY"] = "query";
        OperationTypeNode2["MUTATION"] = "mutation";
        OperationTypeNode2["SUBSCRIPTION"] = "subscription";
      })(OperationTypeNode || (exports.OperationTypeNode = OperationTypeNode = {}));
    }
  });

  // ../../node_modules/graphql/language/directiveLocation.js
  var require_directiveLocation = __commonJS({
    "../../node_modules/graphql/language/directiveLocation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DirectiveLocation = void 0;
      var DirectiveLocation;
      exports.DirectiveLocation = DirectiveLocation;
      (function(DirectiveLocation2) {
        DirectiveLocation2["QUERY"] = "QUERY";
        DirectiveLocation2["MUTATION"] = "MUTATION";
        DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
        DirectiveLocation2["FIELD"] = "FIELD";
        DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
        DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
        DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
        DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
        DirectiveLocation2["SCHEMA"] = "SCHEMA";
        DirectiveLocation2["SCALAR"] = "SCALAR";
        DirectiveLocation2["OBJECT"] = "OBJECT";
        DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
        DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
        DirectiveLocation2["INTERFACE"] = "INTERFACE";
        DirectiveLocation2["UNION"] = "UNION";
        DirectiveLocation2["ENUM"] = "ENUM";
        DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
        DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
        DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
      })(DirectiveLocation || (exports.DirectiveLocation = DirectiveLocation = {}));
    }
  });

  // ../../node_modules/graphql/language/kinds.js
  var require_kinds = __commonJS({
    "../../node_modules/graphql/language/kinds.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Kind = void 0;
      var Kind;
      exports.Kind = Kind;
      (function(Kind2) {
        Kind2["NAME"] = "Name";
        Kind2["DOCUMENT"] = "Document";
        Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
        Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
        Kind2["SELECTION_SET"] = "SelectionSet";
        Kind2["FIELD"] = "Field";
        Kind2["ARGUMENT"] = "Argument";
        Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
        Kind2["INLINE_FRAGMENT"] = "InlineFragment";
        Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
        Kind2["VARIABLE"] = "Variable";
        Kind2["INT"] = "IntValue";
        Kind2["FLOAT"] = "FloatValue";
        Kind2["STRING"] = "StringValue";
        Kind2["BOOLEAN"] = "BooleanValue";
        Kind2["NULL"] = "NullValue";
        Kind2["ENUM"] = "EnumValue";
        Kind2["LIST"] = "ListValue";
        Kind2["OBJECT"] = "ObjectValue";
        Kind2["OBJECT_FIELD"] = "ObjectField";
        Kind2["DIRECTIVE"] = "Directive";
        Kind2["NAMED_TYPE"] = "NamedType";
        Kind2["LIST_TYPE"] = "ListType";
        Kind2["NON_NULL_TYPE"] = "NonNullType";
        Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
        Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
        Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
        Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
        Kind2["FIELD_DEFINITION"] = "FieldDefinition";
        Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
        Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
        Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
        Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
        Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
        Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
        Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
        Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
        Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
        Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
        Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
        Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
        Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
        Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
      })(Kind || (exports.Kind = Kind = {}));
    }
  });

  // ../../node_modules/graphql/language/characterClasses.js
  var require_characterClasses = __commonJS({
    "../../node_modules/graphql/language/characterClasses.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isDigit = isDigit;
      exports.isLetter = isLetter;
      exports.isNameContinue = isNameContinue;
      exports.isNameStart = isNameStart;
      exports.isWhiteSpace = isWhiteSpace;
      function isWhiteSpace(code) {
        return code === 9 || code === 32;
      }
      function isDigit(code) {
        return code >= 48 && code <= 57;
      }
      function isLetter(code) {
        return code >= 97 && code <= 122 || code >= 65 && code <= 90;
      }
      function isNameStart(code) {
        return isLetter(code) || code === 95;
      }
      function isNameContinue(code) {
        return isLetter(code) || isDigit(code) || code === 95;
      }
    }
  });

  // ../../node_modules/graphql/language/blockString.js
  var require_blockString = __commonJS({
    "../../node_modules/graphql/language/blockString.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.dedentBlockStringLines = dedentBlockStringLines;
      exports.isPrintableAsBlockString = isPrintableAsBlockString;
      exports.printBlockString = printBlockString;
      var _characterClasses = require_characterClasses();
      function dedentBlockStringLines(lines) {
        var _firstNonEmptyLine2;
        let commonIndent = Number.MAX_SAFE_INTEGER;
        let firstNonEmptyLine = null;
        let lastNonEmptyLine = -1;
        for (let i = 0; i < lines.length; ++i) {
          var _firstNonEmptyLine;
          const line = lines[i];
          const indent = leadingWhitespace(line);
          if (indent === line.length) {
            continue;
          }
          firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
          lastNonEmptyLine = i;
          if (i !== 0 && indent < commonIndent) {
            commonIndent = indent;
          }
        }
        return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice(
          (_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0,
          lastNonEmptyLine + 1
        );
      }
      function leadingWhitespace(str) {
        let i = 0;
        while (i < str.length && (0, _characterClasses.isWhiteSpace)(str.charCodeAt(i))) {
          ++i;
        }
        return i;
      }
      function isPrintableAsBlockString(value) {
        if (value === "") {
          return true;
        }
        let isEmptyLine = true;
        let hasIndent = false;
        let hasCommonIndent = true;
        let seenNonEmptyLine = false;
        for (let i = 0; i < value.length; ++i) {
          switch (value.codePointAt(i)) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 11:
            case 12:
            case 14:
            case 15:
              return false;
            case 13:
              return false;
            case 10:
              if (isEmptyLine && !seenNonEmptyLine) {
                return false;
              }
              seenNonEmptyLine = true;
              isEmptyLine = true;
              hasIndent = false;
              break;
            case 9:
            case 32:
              hasIndent || (hasIndent = isEmptyLine);
              break;
            default:
              hasCommonIndent && (hasCommonIndent = hasIndent);
              isEmptyLine = false;
          }
        }
        if (isEmptyLine) {
          return false;
        }
        if (hasCommonIndent && seenNonEmptyLine) {
          return false;
        }
        return true;
      }
      function printBlockString(value, options) {
        const escapedValue = value.replace(/"""/g, '\\"""');
        const lines = escapedValue.split(/\r\n|[\n\r]/g);
        const isSingleLine = lines.length === 1;
        const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every(
          (line) => line.length === 0 || (0, _characterClasses.isWhiteSpace)(line.charCodeAt(0))
        );
        const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
        const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
        const hasTrailingSlash = value.endsWith("\\");
        const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
        const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
        let result = "";
        const skipLeadingNewLine = isSingleLine && (0, _characterClasses.isWhiteSpace)(value.charCodeAt(0));
        if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
          result += "\n";
        }
        result += escapedValue;
        if (printAsMultipleLines || forceTrailingNewline) {
          result += "\n";
        }
        return '"""' + result + '"""';
      }
    }
  });

  // ../../node_modules/graphql/language/tokenKind.js
  var require_tokenKind = __commonJS({
    "../../node_modules/graphql/language/tokenKind.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TokenKind = void 0;
      var TokenKind;
      exports.TokenKind = TokenKind;
      (function(TokenKind2) {
        TokenKind2["SOF"] = "<SOF>";
        TokenKind2["EOF"] = "<EOF>";
        TokenKind2["BANG"] = "!";
        TokenKind2["DOLLAR"] = "$";
        TokenKind2["AMP"] = "&";
        TokenKind2["PAREN_L"] = "(";
        TokenKind2["PAREN_R"] = ")";
        TokenKind2["SPREAD"] = "...";
        TokenKind2["COLON"] = ":";
        TokenKind2["EQUALS"] = "=";
        TokenKind2["AT"] = "@";
        TokenKind2["BRACKET_L"] = "[";
        TokenKind2["BRACKET_R"] = "]";
        TokenKind2["BRACE_L"] = "{";
        TokenKind2["PIPE"] = "|";
        TokenKind2["BRACE_R"] = "}";
        TokenKind2["NAME"] = "Name";
        TokenKind2["INT"] = "Int";
        TokenKind2["FLOAT"] = "Float";
        TokenKind2["STRING"] = "String";
        TokenKind2["BLOCK_STRING"] = "BlockString";
        TokenKind2["COMMENT"] = "Comment";
      })(TokenKind || (exports.TokenKind = TokenKind = {}));
    }
  });

  // ../../node_modules/graphql/language/lexer.js
  var require_lexer = __commonJS({
    "../../node_modules/graphql/language/lexer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Lexer = void 0;
      exports.isPunctuatorTokenKind = isPunctuatorTokenKind;
      var _syntaxError = require_syntaxError();
      var _ast = require_ast();
      var _blockString = require_blockString();
      var _characterClasses = require_characterClasses();
      var _tokenKind = require_tokenKind();
      var Lexer = class {
        constructor(source) {
          const startOfFileToken = new _ast.Token(
            _tokenKind.TokenKind.SOF,
            0,
            0,
            0,
            0
          );
          this.source = source;
          this.lastToken = startOfFileToken;
          this.token = startOfFileToken;
          this.line = 1;
          this.lineStart = 0;
        }
        get [Symbol.toStringTag]() {
          return "Lexer";
        }
        advance() {
          this.lastToken = this.token;
          const token = this.token = this.lookahead();
          return token;
        }
        lookahead() {
          let token = this.token;
          if (token.kind !== _tokenKind.TokenKind.EOF) {
            do {
              if (token.next) {
                token = token.next;
              } else {
                const nextToken = readNextToken(this, token.end);
                token.next = nextToken;
                nextToken.prev = token;
                token = nextToken;
              }
            } while (token.kind === _tokenKind.TokenKind.COMMENT);
          }
          return token;
        }
      };
      exports.Lexer = Lexer;
      function isPunctuatorTokenKind(kind) {
        return kind === _tokenKind.TokenKind.BANG || kind === _tokenKind.TokenKind.DOLLAR || kind === _tokenKind.TokenKind.AMP || kind === _tokenKind.TokenKind.PAREN_L || kind === _tokenKind.TokenKind.PAREN_R || kind === _tokenKind.TokenKind.SPREAD || kind === _tokenKind.TokenKind.COLON || kind === _tokenKind.TokenKind.EQUALS || kind === _tokenKind.TokenKind.AT || kind === _tokenKind.TokenKind.BRACKET_L || kind === _tokenKind.TokenKind.BRACKET_R || kind === _tokenKind.TokenKind.BRACE_L || kind === _tokenKind.TokenKind.PIPE || kind === _tokenKind.TokenKind.BRACE_R;
      }
      function isUnicodeScalarValue(code) {
        return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
      }
      function isSupplementaryCodePoint(body, location) {
        return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
      }
      function isLeadingSurrogate(code) {
        return code >= 55296 && code <= 56319;
      }
      function isTrailingSurrogate(code) {
        return code >= 56320 && code <= 57343;
      }
      function printCodePointAt(lexer, location) {
        const code = lexer.source.body.codePointAt(location);
        if (code === void 0) {
          return _tokenKind.TokenKind.EOF;
        } else if (code >= 32 && code <= 126) {
          const char = String.fromCodePoint(code);
          return char === '"' ? `'"'` : `"${char}"`;
        }
        return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
      }
      function createToken(lexer, kind, start2, end, value) {
        const line = lexer.line;
        const col = 1 + start2 - lexer.lineStart;
        return new _ast.Token(kind, start2, end, line, col, value);
      }
      function readNextToken(lexer, start2) {
        const body = lexer.source.body;
        const bodyLength = body.length;
        let position = start2;
        while (position < bodyLength) {
          const code = body.charCodeAt(position);
          switch (code) {
            case 65279:
            case 9:
            case 32:
            case 44:
              ++position;
              continue;
            case 10:
              ++position;
              ++lexer.line;
              lexer.lineStart = position;
              continue;
            case 13:
              if (body.charCodeAt(position + 1) === 10) {
                position += 2;
              } else {
                ++position;
              }
              ++lexer.line;
              lexer.lineStart = position;
              continue;
            case 35:
              return readComment(lexer, position);
            case 33:
              return createToken(
                lexer,
                _tokenKind.TokenKind.BANG,
                position,
                position + 1
              );
            case 36:
              return createToken(
                lexer,
                _tokenKind.TokenKind.DOLLAR,
                position,
                position + 1
              );
            case 38:
              return createToken(
                lexer,
                _tokenKind.TokenKind.AMP,
                position,
                position + 1
              );
            case 40:
              return createToken(
                lexer,
                _tokenKind.TokenKind.PAREN_L,
                position,
                position + 1
              );
            case 41:
              return createToken(
                lexer,
                _tokenKind.TokenKind.PAREN_R,
                position,
                position + 1
              );
            case 46:
              if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) {
                return createToken(
                  lexer,
                  _tokenKind.TokenKind.SPREAD,
                  position,
                  position + 3
                );
              }
              break;
            case 58:
              return createToken(
                lexer,
                _tokenKind.TokenKind.COLON,
                position,
                position + 1
              );
            case 61:
              return createToken(
                lexer,
                _tokenKind.TokenKind.EQUALS,
                position,
                position + 1
              );
            case 64:
              return createToken(
                lexer,
                _tokenKind.TokenKind.AT,
                position,
                position + 1
              );
            case 91:
              return createToken(
                lexer,
                _tokenKind.TokenKind.BRACKET_L,
                position,
                position + 1
              );
            case 93:
              return createToken(
                lexer,
                _tokenKind.TokenKind.BRACKET_R,
                position,
                position + 1
              );
            case 123:
              return createToken(
                lexer,
                _tokenKind.TokenKind.BRACE_L,
                position,
                position + 1
              );
            case 124:
              return createToken(
                lexer,
                _tokenKind.TokenKind.PIPE,
                position,
                position + 1
              );
            case 125:
              return createToken(
                lexer,
                _tokenKind.TokenKind.BRACE_R,
                position,
                position + 1
              );
            case 34:
              if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
                return readBlockString(lexer, position);
              }
              return readString(lexer, position);
          }
          if ((0, _characterClasses.isDigit)(code) || code === 45) {
            return readNumber(lexer, position, code);
          }
          if ((0, _characterClasses.isNameStart)(code)) {
            return readName(lexer, position);
          }
          throw (0, _syntaxError.syntaxError)(
            lexer.source,
            position,
            code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`
          );
        }
        return createToken(lexer, _tokenKind.TokenKind.EOF, bodyLength, bodyLength);
      }
      function readComment(lexer, start2) {
        const body = lexer.source.body;
        const bodyLength = body.length;
        let position = start2 + 1;
        while (position < bodyLength) {
          const code = body.charCodeAt(position);
          if (code === 10 || code === 13) {
            break;
          }
          if (isUnicodeScalarValue(code)) {
            ++position;
          } else if (isSupplementaryCodePoint(body, position)) {
            position += 2;
          } else {
            break;
          }
        }
        return createToken(
          lexer,
          _tokenKind.TokenKind.COMMENT,
          start2,
          position,
          body.slice(start2 + 1, position)
        );
      }
      function readNumber(lexer, start2, firstCode) {
        const body = lexer.source.body;
        let position = start2;
        let code = firstCode;
        let isFloat = false;
        if (code === 45) {
          code = body.charCodeAt(++position);
        }
        if (code === 48) {
          code = body.charCodeAt(++position);
          if ((0, _characterClasses.isDigit)(code)) {
            throw (0, _syntaxError.syntaxError)(
              lexer.source,
              position,
              `Invalid number, unexpected digit after 0: ${printCodePointAt(
                lexer,
                position
              )}.`
            );
          }
        } else {
          position = readDigits(lexer, position, code);
          code = body.charCodeAt(position);
        }
        if (code === 46) {
          isFloat = true;
          code = body.charCodeAt(++position);
          position = readDigits(lexer, position, code);
          code = body.charCodeAt(position);
        }
        if (code === 69 || code === 101) {
          isFloat = true;
          code = body.charCodeAt(++position);
          if (code === 43 || code === 45) {
            code = body.charCodeAt(++position);
          }
          position = readDigits(lexer, position, code);
          code = body.charCodeAt(position);
        }
        if (code === 46 || (0, _characterClasses.isNameStart)(code)) {
          throw (0, _syntaxError.syntaxError)(
            lexer.source,
            position,
            `Invalid number, expected digit but got: ${printCodePointAt(
              lexer,
              position
            )}.`
          );
        }
        return createToken(
          lexer,
          isFloat ? _tokenKind.TokenKind.FLOAT : _tokenKind.TokenKind.INT,
          start2,
          position,
          body.slice(start2, position)
        );
      }
      function readDigits(lexer, start2, firstCode) {
        if (!(0, _characterClasses.isDigit)(firstCode)) {
          throw (0, _syntaxError.syntaxError)(
            lexer.source,
            start2,
            `Invalid number, expected digit but got: ${printCodePointAt(
              lexer,
              start2
            )}.`
          );
        }
        const body = lexer.source.body;
        let position = start2 + 1;
        while ((0, _characterClasses.isDigit)(body.charCodeAt(position))) {
          ++position;
        }
        return position;
      }
      function readString(lexer, start2) {
        const body = lexer.source.body;
        const bodyLength = body.length;
        let position = start2 + 1;
        let chunkStart = position;
        let value = "";
        while (position < bodyLength) {
          const code = body.charCodeAt(position);
          if (code === 34) {
            value += body.slice(chunkStart, position);
            return createToken(
              lexer,
              _tokenKind.TokenKind.STRING,
              start2,
              position + 1,
              value
            );
          }
          if (code === 92) {
            value += body.slice(chunkStart, position);
            const escape = body.charCodeAt(position + 1) === 117 ? body.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
            value += escape.value;
            position += escape.size;
            chunkStart = position;
            continue;
          }
          if (code === 10 || code === 13) {
            break;
          }
          if (isUnicodeScalarValue(code)) {
            ++position;
          } else if (isSupplementaryCodePoint(body, position)) {
            position += 2;
          } else {
            throw (0, _syntaxError.syntaxError)(
              lexer.source,
              position,
              `Invalid character within String: ${printCodePointAt(
                lexer,
                position
              )}.`
            );
          }
        }
        throw (0, _syntaxError.syntaxError)(
          lexer.source,
          position,
          "Unterminated string."
        );
      }
      function readEscapedUnicodeVariableWidth(lexer, position) {
        const body = lexer.source.body;
        let point = 0;
        let size = 3;
        while (size < 12) {
          const code = body.charCodeAt(position + size++);
          if (code === 125) {
            if (size < 5 || !isUnicodeScalarValue(point)) {
              break;
            }
            return {
              value: String.fromCodePoint(point),
              size
            };
          }
          point = point << 4 | readHexDigit(code);
          if (point < 0) {
            break;
          }
        }
        throw (0, _syntaxError.syntaxError)(
          lexer.source,
          position,
          `Invalid Unicode escape sequence: "${body.slice(
            position,
            position + size
          )}".`
        );
      }
      function readEscapedUnicodeFixedWidth(lexer, position) {
        const body = lexer.source.body;
        const code = read16BitHexCode(body, position + 2);
        if (isUnicodeScalarValue(code)) {
          return {
            value: String.fromCodePoint(code),
            size: 6
          };
        }
        if (isLeadingSurrogate(code)) {
          if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
            const trailingCode = read16BitHexCode(body, position + 8);
            if (isTrailingSurrogate(trailingCode)) {
              return {
                value: String.fromCodePoint(code, trailingCode),
                size: 12
              };
            }
          }
        }
        throw (0, _syntaxError.syntaxError)(
          lexer.source,
          position,
          `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`
        );
      }
      function read16BitHexCode(body, position) {
        return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
      }
      function readHexDigit(code) {
        return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
      }
      function readEscapedCharacter(lexer, position) {
        const body = lexer.source.body;
        const code = body.charCodeAt(position + 1);
        switch (code) {
          case 34:
            return {
              value: '"',
              size: 2
            };
          case 92:
            return {
              value: "\\",
              size: 2
            };
          case 47:
            return {
              value: "/",
              size: 2
            };
          case 98:
            return {
              value: "\b",
              size: 2
            };
          case 102:
            return {
              value: "\f",
              size: 2
            };
          case 110:
            return {
              value: "\n",
              size: 2
            };
          case 114:
            return {
              value: "\r",
              size: 2
            };
          case 116:
            return {
              value: "	",
              size: 2
            };
        }
        throw (0, _syntaxError.syntaxError)(
          lexer.source,
          position,
          `Invalid character escape sequence: "${body.slice(
            position,
            position + 2
          )}".`
        );
      }
      function readBlockString(lexer, start2) {
        const body = lexer.source.body;
        const bodyLength = body.length;
        let lineStart = lexer.lineStart;
        let position = start2 + 3;
        let chunkStart = position;
        let currentLine = "";
        const blockLines = [];
        while (position < bodyLength) {
          const code = body.charCodeAt(position);
          if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            const token = createToken(
              lexer,
              _tokenKind.TokenKind.BLOCK_STRING,
              start2,
              position + 3,
              (0, _blockString.dedentBlockStringLines)(blockLines).join("\n")
            );
            lexer.line += blockLines.length - 1;
            lexer.lineStart = lineStart;
            return token;
          }
          if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
            currentLine += body.slice(chunkStart, position);
            chunkStart = position + 1;
            position += 4;
            continue;
          }
          if (code === 10 || code === 13) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            if (code === 13 && body.charCodeAt(position + 1) === 10) {
              position += 2;
            } else {
              ++position;
            }
            currentLine = "";
            chunkStart = position;
            lineStart = position;
            continue;
          }
          if (isUnicodeScalarValue(code)) {
            ++position;
          } else if (isSupplementaryCodePoint(body, position)) {
            position += 2;
          } else {
            throw (0, _syntaxError.syntaxError)(
              lexer.source,
              position,
              `Invalid character within String: ${printCodePointAt(
                lexer,
                position
              )}.`
            );
          }
        }
        throw (0, _syntaxError.syntaxError)(
          lexer.source,
          position,
          "Unterminated string."
        );
      }
      function readName(lexer, start2) {
        const body = lexer.source.body;
        const bodyLength = body.length;
        let position = start2 + 1;
        while (position < bodyLength) {
          const code = body.charCodeAt(position);
          if ((0, _characterClasses.isNameContinue)(code)) {
            ++position;
          } else {
            break;
          }
        }
        return createToken(
          lexer,
          _tokenKind.TokenKind.NAME,
          start2,
          position,
          body.slice(start2, position)
        );
      }
    }
  });

  // ../../node_modules/graphql/jsutils/inspect.js
  var require_inspect = __commonJS({
    "../../node_modules/graphql/jsutils/inspect.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.inspect = inspect;
      var MAX_ARRAY_LENGTH = 10;
      var MAX_RECURSIVE_DEPTH = 2;
      function inspect(value) {
        return formatValue(value, []);
      }
      function formatValue(value, seenValues) {
        switch (typeof value) {
          case "string":
            return JSON.stringify(value);
          case "function":
            return value.name ? `[function ${value.name}]` : "[function]";
          case "object":
            return formatObjectValue(value, seenValues);
          default:
            return String(value);
        }
      }
      function formatObjectValue(value, previouslySeenValues) {
        if (value === null) {
          return "null";
        }
        if (previouslySeenValues.includes(value)) {
          return "[Circular]";
        }
        const seenValues = [...previouslySeenValues, value];
        if (isJSONable(value)) {
          const jsonValue = value.toJSON();
          if (jsonValue !== value) {
            return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
          }
        } else if (Array.isArray(value)) {
          return formatArray(value, seenValues);
        }
        return formatObject(value, seenValues);
      }
      function isJSONable(value) {
        return typeof value.toJSON === "function";
      }
      function formatObject(object, seenValues) {
        const entries = Object.entries(object);
        if (entries.length === 0) {
          return "{}";
        }
        if (seenValues.length > MAX_RECURSIVE_DEPTH) {
          return "[" + getObjectTag(object) + "]";
        }
        const properties = entries.map(
          ([key, value]) => key + ": " + formatValue(value, seenValues)
        );
        return "{ " + properties.join(", ") + " }";
      }
      function formatArray(array, seenValues) {
        if (array.length === 0) {
          return "[]";
        }
        if (seenValues.length > MAX_RECURSIVE_DEPTH) {
          return "[Array]";
        }
        const len = Math.min(MAX_ARRAY_LENGTH, array.length);
        const remaining = array.length - len;
        const items = [];
        for (let i = 0; i < len; ++i) {
          items.push(formatValue(array[i], seenValues));
        }
        if (remaining === 1) {
          items.push("... 1 more item");
        } else if (remaining > 1) {
          items.push(`... ${remaining} more items`);
        }
        return "[" + items.join(", ") + "]";
      }
      function getObjectTag(object) {
        const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
        if (tag === "Object" && typeof object.constructor === "function") {
          const name = object.constructor.name;
          if (typeof name === "string" && name !== "") {
            return name;
          }
        }
        return tag;
      }
    }
  });

  // ../../node_modules/graphql/jsutils/instanceOf.js
  var require_instanceOf = __commonJS({
    "../../node_modules/graphql/jsutils/instanceOf.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.instanceOf = void 0;
      var _inspect = require_inspect();
      var instanceOf = false ? function instanceOf2(value, constructor) {
        return value instanceof constructor;
      } : function instanceOf2(value, constructor) {
        if (value instanceof constructor) {
          return true;
        }
        if (typeof value === "object" && value !== null) {
          var _value$constructor;
          const className = constructor.prototype[Symbol.toStringTag];
          const valueClassName = Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
          if (className === valueClassName) {
            const stringifiedValue = (0, _inspect.inspect)(value);
            throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
          }
        }
        return false;
      };
      exports.instanceOf = instanceOf;
    }
  });

  // ../../node_modules/graphql/language/source.js
  var require_source = __commonJS({
    "../../node_modules/graphql/language/source.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Source = void 0;
      exports.isSource = isSource;
      var _devAssert = require_devAssert();
      var _inspect = require_inspect();
      var _instanceOf = require_instanceOf();
      var Source = class {
        constructor(body, name = "GraphQL request", locationOffset = {
          line: 1,
          column: 1
        }) {
          typeof body === "string" || (0, _devAssert.devAssert)(
            false,
            `Body must be a string. Received: ${(0, _inspect.inspect)(body)}.`
          );
          this.body = body;
          this.name = name;
          this.locationOffset = locationOffset;
          this.locationOffset.line > 0 || (0, _devAssert.devAssert)(
            false,
            "line in locationOffset is 1-indexed and must be positive."
          );
          this.locationOffset.column > 0 || (0, _devAssert.devAssert)(
            false,
            "column in locationOffset is 1-indexed and must be positive."
          );
        }
        get [Symbol.toStringTag]() {
          return "Source";
        }
      };
      exports.Source = Source;
      function isSource(source) {
        return (0, _instanceOf.instanceOf)(source, Source);
      }
    }
  });

  // ../../node_modules/graphql/language/parser.js
  var require_parser = __commonJS({
    "../../node_modules/graphql/language/parser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Parser = void 0;
      exports.parse = parse;
      exports.parseConstValue = parseConstValue;
      exports.parseType = parseType;
      exports.parseValue = parseValue;
      var _syntaxError = require_syntaxError();
      var _ast = require_ast();
      var _directiveLocation = require_directiveLocation();
      var _kinds = require_kinds();
      var _lexer = require_lexer();
      var _source = require_source();
      var _tokenKind = require_tokenKind();
      function parse(source, options) {
        const parser = new Parser(source, options);
        return parser.parseDocument();
      }
      function parseValue(source, options) {
        const parser = new Parser(source, options);
        parser.expectToken(_tokenKind.TokenKind.SOF);
        const value = parser.parseValueLiteral(false);
        parser.expectToken(_tokenKind.TokenKind.EOF);
        return value;
      }
      function parseConstValue(source, options) {
        const parser = new Parser(source, options);
        parser.expectToken(_tokenKind.TokenKind.SOF);
        const value = parser.parseConstValueLiteral();
        parser.expectToken(_tokenKind.TokenKind.EOF);
        return value;
      }
      function parseType(source, options) {
        const parser = new Parser(source, options);
        parser.expectToken(_tokenKind.TokenKind.SOF);
        const type = parser.parseTypeReference();
        parser.expectToken(_tokenKind.TokenKind.EOF);
        return type;
      }
      var Parser = class {
        constructor(source, options = {}) {
          const sourceObj = (0, _source.isSource)(source) ? source : new _source.Source(source);
          this._lexer = new _lexer.Lexer(sourceObj);
          this._options = options;
          this._tokenCounter = 0;
        }
        parseName() {
          const token = this.expectToken(_tokenKind.TokenKind.NAME);
          return this.node(token, {
            kind: _kinds.Kind.NAME,
            value: token.value
          });
        }
        parseDocument() {
          return this.node(this._lexer.token, {
            kind: _kinds.Kind.DOCUMENT,
            definitions: this.many(
              _tokenKind.TokenKind.SOF,
              this.parseDefinition,
              _tokenKind.TokenKind.EOF
            )
          });
        }
        parseDefinition() {
          if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
            return this.parseOperationDefinition();
          }
          const hasDescription = this.peekDescription();
          const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
          if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
            switch (keywordToken.value) {
              case "schema":
                return this.parseSchemaDefinition();
              case "scalar":
                return this.parseScalarTypeDefinition();
              case "type":
                return this.parseObjectTypeDefinition();
              case "interface":
                return this.parseInterfaceTypeDefinition();
              case "union":
                return this.parseUnionTypeDefinition();
              case "enum":
                return this.parseEnumTypeDefinition();
              case "input":
                return this.parseInputObjectTypeDefinition();
              case "directive":
                return this.parseDirectiveDefinition();
            }
            if (hasDescription) {
              throw (0, _syntaxError.syntaxError)(
                this._lexer.source,
                this._lexer.token.start,
                "Unexpected description, descriptions are supported only on type definitions."
              );
            }
            switch (keywordToken.value) {
              case "query":
              case "mutation":
              case "subscription":
                return this.parseOperationDefinition();
              case "fragment":
                return this.parseFragmentDefinition();
              case "extend":
                return this.parseTypeSystemExtension();
            }
          }
          throw this.unexpected(keywordToken);
        }
        parseOperationDefinition() {
          const start2 = this._lexer.token;
          if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
            return this.node(start2, {
              kind: _kinds.Kind.OPERATION_DEFINITION,
              operation: _ast.OperationTypeNode.QUERY,
              name: void 0,
              variableDefinitions: [],
              directives: [],
              selectionSet: this.parseSelectionSet()
            });
          }
          const operation = this.parseOperationType();
          let name;
          if (this.peek(_tokenKind.TokenKind.NAME)) {
            name = this.parseName();
          }
          return this.node(start2, {
            kind: _kinds.Kind.OPERATION_DEFINITION,
            operation,
            name,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
          });
        }
        parseOperationType() {
          const operationToken = this.expectToken(_tokenKind.TokenKind.NAME);
          switch (operationToken.value) {
            case "query":
              return _ast.OperationTypeNode.QUERY;
            case "mutation":
              return _ast.OperationTypeNode.MUTATION;
            case "subscription":
              return _ast.OperationTypeNode.SUBSCRIPTION;
          }
          throw this.unexpected(operationToken);
        }
        parseVariableDefinitions() {
          return this.optionalMany(
            _tokenKind.TokenKind.PAREN_L,
            this.parseVariableDefinition,
            _tokenKind.TokenKind.PAREN_R
          );
        }
        parseVariableDefinition() {
          return this.node(this._lexer.token, {
            kind: _kinds.Kind.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
            directives: this.parseConstDirectives()
          });
        }
        parseVariable() {
          const start2 = this._lexer.token;
          this.expectToken(_tokenKind.TokenKind.DOLLAR);
          return this.node(start2, {
            kind: _kinds.Kind.VARIABLE,
            name: this.parseName()
          });
        }
        parseSelectionSet() {
          return this.node(this._lexer.token, {
            kind: _kinds.Kind.SELECTION_SET,
            selections: this.many(
              _tokenKind.TokenKind.BRACE_L,
              this.parseSelection,
              _tokenKind.TokenKind.BRACE_R
            )
          });
        }
        parseSelection() {
          return this.peek(_tokenKind.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
        }
        parseField() {
          const start2 = this._lexer.token;
          const nameOrAlias = this.parseName();
          let alias;
          let name;
          if (this.expectOptionalToken(_tokenKind.TokenKind.COLON)) {
            alias = nameOrAlias;
            name = this.parseName();
          } else {
            name = nameOrAlias;
          }
          return this.node(start2, {
            kind: _kinds.Kind.FIELD,
            alias,
            name,
            arguments: this.parseArguments(false),
            directives: this.parseDirectives(false),
            selectionSet: this.peek(_tokenKind.TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
          });
        }
        parseArguments(isConst) {
          const item = isConst ? this.parseConstArgument : this.parseArgument;
          return this.optionalMany(
            _tokenKind.TokenKind.PAREN_L,
            item,
            _tokenKind.TokenKind.PAREN_R
          );
        }
        parseArgument(isConst = false) {
          const start2 = this._lexer.token;
          const name = this.parseName();
          this.expectToken(_tokenKind.TokenKind.COLON);
          return this.node(start2, {
            kind: _kinds.Kind.ARGUMENT,
            name,
            value: this.parseValueLiteral(isConst)
          });
        }
        parseConstArgument() {
          return this.parseArgument(true);
        }
        parseFragment() {
          const start2 = this._lexer.token;
          this.expectToken(_tokenKind.TokenKind.SPREAD);
          const hasTypeCondition = this.expectOptionalKeyword("on");
          if (!hasTypeCondition && this.peek(_tokenKind.TokenKind.NAME)) {
            return this.node(start2, {
              kind: _kinds.Kind.FRAGMENT_SPREAD,
              name: this.parseFragmentName(),
              directives: this.parseDirectives(false)
            });
          }
          return this.node(start2, {
            kind: _kinds.Kind.INLINE_FRAGMENT,
            typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
          });
        }
        parseFragmentDefinition() {
          const start2 = this._lexer.token;
          this.expectKeyword("fragment");
          if (this._options.allowLegacyFragmentVariables === true) {
            return this.node(start2, {
              kind: _kinds.Kind.FRAGMENT_DEFINITION,
              name: this.parseFragmentName(),
              variableDefinitions: this.parseVariableDefinitions(),
              typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
              directives: this.parseDirectives(false),
              selectionSet: this.parseSelectionSet()
            });
          }
          return this.node(start2, {
            kind: _kinds.Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
          });
        }
        parseFragmentName() {
          if (this._lexer.token.value === "on") {
            throw this.unexpected();
          }
          return this.parseName();
        }
        parseValueLiteral(isConst) {
          const token = this._lexer.token;
          switch (token.kind) {
            case _tokenKind.TokenKind.BRACKET_L:
              return this.parseList(isConst);
            case _tokenKind.TokenKind.BRACE_L:
              return this.parseObject(isConst);
            case _tokenKind.TokenKind.INT:
              this.advanceLexer();
              return this.node(token, {
                kind: _kinds.Kind.INT,
                value: token.value
              });
            case _tokenKind.TokenKind.FLOAT:
              this.advanceLexer();
              return this.node(token, {
                kind: _kinds.Kind.FLOAT,
                value: token.value
              });
            case _tokenKind.TokenKind.STRING:
            case _tokenKind.TokenKind.BLOCK_STRING:
              return this.parseStringLiteral();
            case _tokenKind.TokenKind.NAME:
              this.advanceLexer();
              switch (token.value) {
                case "true":
                  return this.node(token, {
                    kind: _kinds.Kind.BOOLEAN,
                    value: true
                  });
                case "false":
                  return this.node(token, {
                    kind: _kinds.Kind.BOOLEAN,
                    value: false
                  });
                case "null":
                  return this.node(token, {
                    kind: _kinds.Kind.NULL
                  });
                default:
                  return this.node(token, {
                    kind: _kinds.Kind.ENUM,
                    value: token.value
                  });
              }
            case _tokenKind.TokenKind.DOLLAR:
              if (isConst) {
                this.expectToken(_tokenKind.TokenKind.DOLLAR);
                if (this._lexer.token.kind === _tokenKind.TokenKind.NAME) {
                  const varName = this._lexer.token.value;
                  throw (0, _syntaxError.syntaxError)(
                    this._lexer.source,
                    token.start,
                    `Unexpected variable "$${varName}" in constant value.`
                  );
                } else {
                  throw this.unexpected(token);
                }
              }
              return this.parseVariable();
            default:
              throw this.unexpected();
          }
        }
        parseConstValueLiteral() {
          return this.parseValueLiteral(true);
        }
        parseStringLiteral() {
          const token = this._lexer.token;
          this.advanceLexer();
          return this.node(token, {
            kind: _kinds.Kind.STRING,
            value: token.value,
            block: token.kind === _tokenKind.TokenKind.BLOCK_STRING
          });
        }
        parseList(isConst) {
          const item = () => this.parseValueLiteral(isConst);
          return this.node(this._lexer.token, {
            kind: _kinds.Kind.LIST,
            values: this.any(
              _tokenKind.TokenKind.BRACKET_L,
              item,
              _tokenKind.TokenKind.BRACKET_R
            )
          });
        }
        parseObject(isConst) {
          const item = () => this.parseObjectField(isConst);
          return this.node(this._lexer.token, {
            kind: _kinds.Kind.OBJECT,
            fields: this.any(
              _tokenKind.TokenKind.BRACE_L,
              item,
              _tokenKind.TokenKind.BRACE_R
            )
          });
        }
        parseObjectField(isConst) {
          const start2 = this._lexer.token;
          const name = this.parseName();
          this.expectToken(_tokenKind.TokenKind.COLON);
          return this.node(start2, {
            kind: _kinds.Kind.OBJECT_FIELD,
            name,
            value: this.parseValueLiteral(isConst)
          });
        }
        parseDirectives(isConst) {
          const directives = [];
          while (this.peek(_tokenKind.TokenKind.AT)) {
            directives.push(this.parseDirective(isConst));
          }
          return directives;
        }
        parseConstDirectives() {
          return this.parseDirectives(true);
        }
        parseDirective(isConst) {
          const start2 = this._lexer.token;
          this.expectToken(_tokenKind.TokenKind.AT);
          return this.node(start2, {
            kind: _kinds.Kind.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(isConst)
          });
        }
        parseTypeReference() {
          const start2 = this._lexer.token;
          let type;
          if (this.expectOptionalToken(_tokenKind.TokenKind.BRACKET_L)) {
            const innerType = this.parseTypeReference();
            this.expectToken(_tokenKind.TokenKind.BRACKET_R);
            type = this.node(start2, {
              kind: _kinds.Kind.LIST_TYPE,
              type: innerType
            });
          } else {
            type = this.parseNamedType();
          }
          if (this.expectOptionalToken(_tokenKind.TokenKind.BANG)) {
            return this.node(start2, {
              kind: _kinds.Kind.NON_NULL_TYPE,
              type
            });
          }
          return type;
        }
        parseNamedType() {
          return this.node(this._lexer.token, {
            kind: _kinds.Kind.NAMED_TYPE,
            name: this.parseName()
          });
        }
        peekDescription() {
          return this.peek(_tokenKind.TokenKind.STRING) || this.peek(_tokenKind.TokenKind.BLOCK_STRING);
        }
        parseDescription() {
          if (this.peekDescription()) {
            return this.parseStringLiteral();
          }
        }
        parseSchemaDefinition() {
          const start2 = this._lexer.token;
          const description = this.parseDescription();
          this.expectKeyword("schema");
          const directives = this.parseConstDirectives();
          const operationTypes = this.many(
            _tokenKind.TokenKind.BRACE_L,
            this.parseOperationTypeDefinition,
            _tokenKind.TokenKind.BRACE_R
          );
          return this.node(start2, {
            kind: _kinds.Kind.SCHEMA_DEFINITION,
            description,
            directives,
            operationTypes
          });
        }
        parseOperationTypeDefinition() {
          const start2 = this._lexer.token;
          const operation = this.parseOperationType();
          this.expectToken(_tokenKind.TokenKind.COLON);
          const type = this.parseNamedType();
          return this.node(start2, {
            kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
            operation,
            type
          });
        }
        parseScalarTypeDefinition() {
          const start2 = this._lexer.token;
          const description = this.parseDescription();
          this.expectKeyword("scalar");
          const name = this.parseName();
          const directives = this.parseConstDirectives();
          return this.node(start2, {
            kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
            description,
            name,
            directives
          });
        }
        parseObjectTypeDefinition() {
          const start2 = this._lexer.token;
          const description = this.parseDescription();
          this.expectKeyword("type");
          const name = this.parseName();
          const interfaces = this.parseImplementsInterfaces();
          const directives = this.parseConstDirectives();
          const fields = this.parseFieldsDefinition();
          return this.node(start2, {
            kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
          });
        }
        parseImplementsInterfaces() {
          return this.expectOptionalKeyword("implements") ? this.delimitedMany(_tokenKind.TokenKind.AMP, this.parseNamedType) : [];
        }
        parseFieldsDefinition() {
          return this.optionalMany(
            _tokenKind.TokenKind.BRACE_L,
            this.parseFieldDefinition,
            _tokenKind.TokenKind.BRACE_R
          );
        }
        parseFieldDefinition() {
          const start2 = this._lexer.token;
          const description = this.parseDescription();
          const name = this.parseName();
          const args = this.parseArgumentDefs();
          this.expectToken(_tokenKind.TokenKind.COLON);
          const type = this.parseTypeReference();
          const directives = this.parseConstDirectives();
          return this.node(start2, {
            kind: _kinds.Kind.FIELD_DEFINITION,
            description,
            name,
            arguments: args,
            type,
            directives
          });
        }
        parseArgumentDefs() {
          return this.optionalMany(
            _tokenKind.TokenKind.PAREN_L,
            this.parseInputValueDef,
            _tokenKind.TokenKind.PAREN_R
          );
        }
        parseInputValueDef() {
          const start2 = this._lexer.token;
          const description = this.parseDescription();
          const name = this.parseName();
          this.expectToken(_tokenKind.TokenKind.COLON);
          const type = this.parseTypeReference();
          let defaultValue;
          if (this.expectOptionalToken(_tokenKind.TokenKind.EQUALS)) {
            defaultValue = this.parseConstValueLiteral();
          }
          const directives = this.parseConstDirectives();
          return this.node(start2, {
            kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
            description,
            name,
            type,
            defaultValue,
            directives
          });
        }
        parseInterfaceTypeDefinition() {
          const start2 = this._lexer.token;
          const description = this.parseDescription();
          this.expectKeyword("interface");
          const name = this.parseName();
          const interfaces = this.parseImplementsInterfaces();
          const directives = this.parseConstDirectives();
          const fields = this.parseFieldsDefinition();
          return this.node(start2, {
            kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
          });
        }
        parseUnionTypeDefinition() {
          const start2 = this._lexer.token;
          const description = this.parseDescription();
          this.expectKeyword("union");
          const name = this.parseName();
          const directives = this.parseConstDirectives();
          const types = this.parseUnionMemberTypes();
          return this.node(start2, {
            kind: _kinds.Kind.UNION_TYPE_DEFINITION,
            description,
            name,
            directives,
            types
          });
        }
        parseUnionMemberTypes() {
          return this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.delimitedMany(_tokenKind.TokenKind.PIPE, this.parseNamedType) : [];
        }
        parseEnumTypeDefinition() {
          const start2 = this._lexer.token;
          const description = this.parseDescription();
          this.expectKeyword("enum");
          const name = this.parseName();
          const directives = this.parseConstDirectives();
          const values = this.parseEnumValuesDefinition();
          return this.node(start2, {
            kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
            description,
            name,
            directives,
            values
          });
        }
        parseEnumValuesDefinition() {
          return this.optionalMany(
            _tokenKind.TokenKind.BRACE_L,
            this.parseEnumValueDefinition,
            _tokenKind.TokenKind.BRACE_R
          );
        }
        parseEnumValueDefinition() {
          const start2 = this._lexer.token;
          const description = this.parseDescription();
          const name = this.parseEnumValueName();
          const directives = this.parseConstDirectives();
          return this.node(start2, {
            kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
            description,
            name,
            directives
          });
        }
        parseEnumValueName() {
          if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
            throw (0, _syntaxError.syntaxError)(
              this._lexer.source,
              this._lexer.token.start,
              `${getTokenDesc(
                this._lexer.token
              )} is reserved and cannot be used for an enum value.`
            );
          }
          return this.parseName();
        }
        parseInputObjectTypeDefinition() {
          const start2 = this._lexer.token;
          const description = this.parseDescription();
          this.expectKeyword("input");
          const name = this.parseName();
          const directives = this.parseConstDirectives();
          const fields = this.parseInputFieldsDefinition();
          return this.node(start2, {
            kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
            description,
            name,
            directives,
            fields
          });
        }
        parseInputFieldsDefinition() {
          return this.optionalMany(
            _tokenKind.TokenKind.BRACE_L,
            this.parseInputValueDef,
            _tokenKind.TokenKind.BRACE_R
          );
        }
        parseTypeSystemExtension() {
          const keywordToken = this._lexer.lookahead();
          if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
            switch (keywordToken.value) {
              case "schema":
                return this.parseSchemaExtension();
              case "scalar":
                return this.parseScalarTypeExtension();
              case "type":
                return this.parseObjectTypeExtension();
              case "interface":
                return this.parseInterfaceTypeExtension();
              case "union":
                return this.parseUnionTypeExtension();
              case "enum":
                return this.parseEnumTypeExtension();
              case "input":
                return this.parseInputObjectTypeExtension();
            }
          }
          throw this.unexpected(keywordToken);
        }
        parseSchemaExtension() {
          const start2 = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("schema");
          const directives = this.parseConstDirectives();
          const operationTypes = this.optionalMany(
            _tokenKind.TokenKind.BRACE_L,
            this.parseOperationTypeDefinition,
            _tokenKind.TokenKind.BRACE_R
          );
          if (directives.length === 0 && operationTypes.length === 0) {
            throw this.unexpected();
          }
          return this.node(start2, {
            kind: _kinds.Kind.SCHEMA_EXTENSION,
            directives,
            operationTypes
          });
        }
        parseScalarTypeExtension() {
          const start2 = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("scalar");
          const name = this.parseName();
          const directives = this.parseConstDirectives();
          if (directives.length === 0) {
            throw this.unexpected();
          }
          return this.node(start2, {
            kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
            name,
            directives
          });
        }
        parseObjectTypeExtension() {
          const start2 = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("type");
          const name = this.parseName();
          const interfaces = this.parseImplementsInterfaces();
          const directives = this.parseConstDirectives();
          const fields = this.parseFieldsDefinition();
          if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
          }
          return this.node(start2, {
            kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
          });
        }
        parseInterfaceTypeExtension() {
          const start2 = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("interface");
          const name = this.parseName();
          const interfaces = this.parseImplementsInterfaces();
          const directives = this.parseConstDirectives();
          const fields = this.parseFieldsDefinition();
          if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
          }
          return this.node(start2, {
            kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
          });
        }
        parseUnionTypeExtension() {
          const start2 = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("union");
          const name = this.parseName();
          const directives = this.parseConstDirectives();
          const types = this.parseUnionMemberTypes();
          if (directives.length === 0 && types.length === 0) {
            throw this.unexpected();
          }
          return this.node(start2, {
            kind: _kinds.Kind.UNION_TYPE_EXTENSION,
            name,
            directives,
            types
          });
        }
        parseEnumTypeExtension() {
          const start2 = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("enum");
          const name = this.parseName();
          const directives = this.parseConstDirectives();
          const values = this.parseEnumValuesDefinition();
          if (directives.length === 0 && values.length === 0) {
            throw this.unexpected();
          }
          return this.node(start2, {
            kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
            name,
            directives,
            values
          });
        }
        parseInputObjectTypeExtension() {
          const start2 = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("input");
          const name = this.parseName();
          const directives = this.parseConstDirectives();
          const fields = this.parseInputFieldsDefinition();
          if (directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
          }
          return this.node(start2, {
            kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
            name,
            directives,
            fields
          });
        }
        parseDirectiveDefinition() {
          const start2 = this._lexer.token;
          const description = this.parseDescription();
          this.expectKeyword("directive");
          this.expectToken(_tokenKind.TokenKind.AT);
          const name = this.parseName();
          const args = this.parseArgumentDefs();
          const repeatable = this.expectOptionalKeyword("repeatable");
          this.expectKeyword("on");
          const locations = this.parseDirectiveLocations();
          return this.node(start2, {
            kind: _kinds.Kind.DIRECTIVE_DEFINITION,
            description,
            name,
            arguments: args,
            repeatable,
            locations
          });
        }
        parseDirectiveLocations() {
          return this.delimitedMany(
            _tokenKind.TokenKind.PIPE,
            this.parseDirectiveLocation
          );
        }
        parseDirectiveLocation() {
          const start2 = this._lexer.token;
          const name = this.parseName();
          if (Object.prototype.hasOwnProperty.call(
            _directiveLocation.DirectiveLocation,
            name.value
          )) {
            return name;
          }
          throw this.unexpected(start2);
        }
        node(startToken, node) {
          if (this._options.noLocation !== true) {
            node.loc = new _ast.Location(
              startToken,
              this._lexer.lastToken,
              this._lexer.source
            );
          }
          return node;
        }
        peek(kind) {
          return this._lexer.token.kind === kind;
        }
        expectToken(kind) {
          const token = this._lexer.token;
          if (token.kind === kind) {
            this.advanceLexer();
            return token;
          }
          throw (0, _syntaxError.syntaxError)(
            this._lexer.source,
            token.start,
            `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`
          );
        }
        expectOptionalToken(kind) {
          const token = this._lexer.token;
          if (token.kind === kind) {
            this.advanceLexer();
            return true;
          }
          return false;
        }
        expectKeyword(value) {
          const token = this._lexer.token;
          if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
            this.advanceLexer();
          } else {
            throw (0, _syntaxError.syntaxError)(
              this._lexer.source,
              token.start,
              `Expected "${value}", found ${getTokenDesc(token)}.`
            );
          }
        }
        expectOptionalKeyword(value) {
          const token = this._lexer.token;
          if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
            this.advanceLexer();
            return true;
          }
          return false;
        }
        unexpected(atToken) {
          const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
          return (0, _syntaxError.syntaxError)(
            this._lexer.source,
            token.start,
            `Unexpected ${getTokenDesc(token)}.`
          );
        }
        any(openKind, parseFn, closeKind) {
          this.expectToken(openKind);
          const nodes = [];
          while (!this.expectOptionalToken(closeKind)) {
            nodes.push(parseFn.call(this));
          }
          return nodes;
        }
        optionalMany(openKind, parseFn, closeKind) {
          if (this.expectOptionalToken(openKind)) {
            const nodes = [];
            do {
              nodes.push(parseFn.call(this));
            } while (!this.expectOptionalToken(closeKind));
            return nodes;
          }
          return [];
        }
        many(openKind, parseFn, closeKind) {
          this.expectToken(openKind);
          const nodes = [];
          do {
            nodes.push(parseFn.call(this));
          } while (!this.expectOptionalToken(closeKind));
          return nodes;
        }
        delimitedMany(delimiterKind, parseFn) {
          this.expectOptionalToken(delimiterKind);
          const nodes = [];
          do {
            nodes.push(parseFn.call(this));
          } while (this.expectOptionalToken(delimiterKind));
          return nodes;
        }
        advanceLexer() {
          const { maxTokens } = this._options;
          const token = this._lexer.advance();
          if (maxTokens !== void 0 && token.kind !== _tokenKind.TokenKind.EOF) {
            ++this._tokenCounter;
            if (this._tokenCounter > maxTokens) {
              throw (0, _syntaxError.syntaxError)(
                this._lexer.source,
                token.start,
                `Document contains more that ${maxTokens} tokens. Parsing aborted.`
              );
            }
          }
        }
      };
      exports.Parser = Parser;
      function getTokenDesc(token) {
        const value = token.value;
        return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
      }
      function getTokenKindDesc(kind) {
        return (0, _lexer.isPunctuatorTokenKind)(kind) ? `"${kind}"` : kind;
      }
    }
  });

  // ../../node_modules/graphql/jsutils/didYouMean.js
  var require_didYouMean = __commonJS({
    "../../node_modules/graphql/jsutils/didYouMean.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.didYouMean = didYouMean;
      var MAX_SUGGESTIONS = 5;
      function didYouMean(firstArg, secondArg) {
        const [subMessage, suggestionsArg] = secondArg ? [firstArg, secondArg] : [void 0, firstArg];
        let message = " Did you mean ";
        if (subMessage) {
          message += subMessage + " ";
        }
        const suggestions = suggestionsArg.map((x) => `"${x}"`);
        switch (suggestions.length) {
          case 0:
            return "";
          case 1:
            return message + suggestions[0] + "?";
          case 2:
            return message + suggestions[0] + " or " + suggestions[1] + "?";
        }
        const selected = suggestions.slice(0, MAX_SUGGESTIONS);
        const lastItem = selected.pop();
        return message + selected.join(", ") + ", or " + lastItem + "?";
      }
    }
  });

  // ../../node_modules/graphql/jsutils/identityFunc.js
  var require_identityFunc = __commonJS({
    "../../node_modules/graphql/jsutils/identityFunc.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.identityFunc = identityFunc;
      function identityFunc(x) {
        return x;
      }
    }
  });

  // ../../node_modules/graphql/jsutils/keyMap.js
  var require_keyMap = __commonJS({
    "../../node_modules/graphql/jsutils/keyMap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.keyMap = keyMap;
      function keyMap(list, keyFn) {
        const result = /* @__PURE__ */ Object.create(null);
        for (const item of list) {
          result[keyFn(item)] = item;
        }
        return result;
      }
    }
  });

  // ../../node_modules/graphql/jsutils/keyValMap.js
  var require_keyValMap = __commonJS({
    "../../node_modules/graphql/jsutils/keyValMap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.keyValMap = keyValMap;
      function keyValMap(list, keyFn, valFn) {
        const result = /* @__PURE__ */ Object.create(null);
        for (const item of list) {
          result[keyFn(item)] = valFn(item);
        }
        return result;
      }
    }
  });

  // ../../node_modules/graphql/jsutils/mapValue.js
  var require_mapValue = __commonJS({
    "../../node_modules/graphql/jsutils/mapValue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.mapValue = mapValue;
      function mapValue(map, fn) {
        const result = /* @__PURE__ */ Object.create(null);
        for (const key of Object.keys(map)) {
          result[key] = fn(map[key], key);
        }
        return result;
      }
    }
  });

  // ../../node_modules/graphql/jsutils/naturalCompare.js
  var require_naturalCompare = __commonJS({
    "../../node_modules/graphql/jsutils/naturalCompare.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.naturalCompare = naturalCompare;
      function naturalCompare(aStr, bStr) {
        let aIndex = 0;
        let bIndex = 0;
        while (aIndex < aStr.length && bIndex < bStr.length) {
          let aChar = aStr.charCodeAt(aIndex);
          let bChar = bStr.charCodeAt(bIndex);
          if (isDigit(aChar) && isDigit(bChar)) {
            let aNum = 0;
            do {
              ++aIndex;
              aNum = aNum * 10 + aChar - DIGIT_0;
              aChar = aStr.charCodeAt(aIndex);
            } while (isDigit(aChar) && aNum > 0);
            let bNum = 0;
            do {
              ++bIndex;
              bNum = bNum * 10 + bChar - DIGIT_0;
              bChar = bStr.charCodeAt(bIndex);
            } while (isDigit(bChar) && bNum > 0);
            if (aNum < bNum) {
              return -1;
            }
            if (aNum > bNum) {
              return 1;
            }
          } else {
            if (aChar < bChar) {
              return -1;
            }
            if (aChar > bChar) {
              return 1;
            }
            ++aIndex;
            ++bIndex;
          }
        }
        return aStr.length - bStr.length;
      }
      var DIGIT_0 = 48;
      var DIGIT_9 = 57;
      function isDigit(code) {
        return !isNaN(code) && DIGIT_0 <= code && code <= DIGIT_9;
      }
    }
  });

  // ../../node_modules/graphql/jsutils/suggestionList.js
  var require_suggestionList = __commonJS({
    "../../node_modules/graphql/jsutils/suggestionList.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.suggestionList = suggestionList;
      var _naturalCompare = require_naturalCompare();
      function suggestionList(input, options) {
        const optionsByDistance = /* @__PURE__ */ Object.create(null);
        const lexicalDistance = new LexicalDistance(input);
        const threshold = Math.floor(input.length * 0.4) + 1;
        for (const option of options) {
          const distance = lexicalDistance.measure(option, threshold);
          if (distance !== void 0) {
            optionsByDistance[option] = distance;
          }
        }
        return Object.keys(optionsByDistance).sort((a, b) => {
          const distanceDiff = optionsByDistance[a] - optionsByDistance[b];
          return distanceDiff !== 0 ? distanceDiff : (0, _naturalCompare.naturalCompare)(a, b);
        });
      }
      var LexicalDistance = class {
        constructor(input) {
          this._input = input;
          this._inputLowerCase = input.toLowerCase();
          this._inputArray = stringToArray(this._inputLowerCase);
          this._rows = [
            new Array(input.length + 1).fill(0),
            new Array(input.length + 1).fill(0),
            new Array(input.length + 1).fill(0)
          ];
        }
        measure(option, threshold) {
          if (this._input === option) {
            return 0;
          }
          const optionLowerCase = option.toLowerCase();
          if (this._inputLowerCase === optionLowerCase) {
            return 1;
          }
          let a = stringToArray(optionLowerCase);
          let b = this._inputArray;
          if (a.length < b.length) {
            const tmp = a;
            a = b;
            b = tmp;
          }
          const aLength = a.length;
          const bLength = b.length;
          if (aLength - bLength > threshold) {
            return void 0;
          }
          const rows = this._rows;
          for (let j = 0; j <= bLength; j++) {
            rows[0][j] = j;
          }
          for (let i = 1; i <= aLength; i++) {
            const upRow = rows[(i - 1) % 3];
            const currentRow = rows[i % 3];
            let smallestCell = currentRow[0] = i;
            for (let j = 1; j <= bLength; j++) {
              const cost = a[i - 1] === b[j - 1] ? 0 : 1;
              let currentCell = Math.min(
                upRow[j] + 1,
                currentRow[j - 1] + 1,
                upRow[j - 1] + cost
              );
              if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
                const doubleDiagonalCell = rows[(i - 2) % 3][j - 2];
                currentCell = Math.min(currentCell, doubleDiagonalCell + 1);
              }
              if (currentCell < smallestCell) {
                smallestCell = currentCell;
              }
              currentRow[j] = currentCell;
            }
            if (smallestCell > threshold) {
              return void 0;
            }
          }
          const distance = rows[aLength % 3][bLength];
          return distance <= threshold ? distance : void 0;
        }
      };
      function stringToArray(str) {
        const strLength = str.length;
        const array = new Array(strLength);
        for (let i = 0; i < strLength; ++i) {
          array[i] = str.charCodeAt(i);
        }
        return array;
      }
    }
  });

  // ../../node_modules/graphql/jsutils/toObjMap.js
  var require_toObjMap = __commonJS({
    "../../node_modules/graphql/jsutils/toObjMap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.toObjMap = toObjMap;
      function toObjMap(obj) {
        if (obj == null) {
          return /* @__PURE__ */ Object.create(null);
        }
        if (Object.getPrototypeOf(obj) === null) {
          return obj;
        }
        const map = /* @__PURE__ */ Object.create(null);
        for (const [key, value] of Object.entries(obj)) {
          map[key] = value;
        }
        return map;
      }
    }
  });

  // ../../node_modules/graphql/language/printString.js
  var require_printString = __commonJS({
    "../../node_modules/graphql/language/printString.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.printString = printString;
      function printString(str) {
        return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
      }
      var escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
      function escapedReplacer(str) {
        return escapeSequences[str.charCodeAt(0)];
      }
      var escapeSequences = [
        "\\u0000",
        "\\u0001",
        "\\u0002",
        "\\u0003",
        "\\u0004",
        "\\u0005",
        "\\u0006",
        "\\u0007",
        "\\b",
        "\\t",
        "\\n",
        "\\u000B",
        "\\f",
        "\\r",
        "\\u000E",
        "\\u000F",
        "\\u0010",
        "\\u0011",
        "\\u0012",
        "\\u0013",
        "\\u0014",
        "\\u0015",
        "\\u0016",
        "\\u0017",
        "\\u0018",
        "\\u0019",
        "\\u001A",
        "\\u001B",
        "\\u001C",
        "\\u001D",
        "\\u001E",
        "\\u001F",
        "",
        "",
        '\\"',
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\\\",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\u007F",
        "\\u0080",
        "\\u0081",
        "\\u0082",
        "\\u0083",
        "\\u0084",
        "\\u0085",
        "\\u0086",
        "\\u0087",
        "\\u0088",
        "\\u0089",
        "\\u008A",
        "\\u008B",
        "\\u008C",
        "\\u008D",
        "\\u008E",
        "\\u008F",
        "\\u0090",
        "\\u0091",
        "\\u0092",
        "\\u0093",
        "\\u0094",
        "\\u0095",
        "\\u0096",
        "\\u0097",
        "\\u0098",
        "\\u0099",
        "\\u009A",
        "\\u009B",
        "\\u009C",
        "\\u009D",
        "\\u009E",
        "\\u009F"
      ];
    }
  });

  // ../../node_modules/graphql/language/visitor.js
  var require_visitor = __commonJS({
    "../../node_modules/graphql/language/visitor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BREAK = void 0;
      exports.getEnterLeaveForKind = getEnterLeaveForKind;
      exports.getVisitFn = getVisitFn;
      exports.visit = visit;
      exports.visitInParallel = visitInParallel;
      var _devAssert = require_devAssert();
      var _inspect = require_inspect();
      var _ast = require_ast();
      var _kinds = require_kinds();
      var BREAK = Object.freeze({});
      exports.BREAK = BREAK;
      function visit(root, visitor, visitorKeys = _ast.QueryDocumentKeys) {
        const enterLeaveMap = /* @__PURE__ */ new Map();
        for (const kind of Object.values(_kinds.Kind)) {
          enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
        }
        let stack = void 0;
        let inArray = Array.isArray(root);
        let keys = [root];
        let index = -1;
        let edits = [];
        let node = root;
        let key = void 0;
        let parent = void 0;
        const path = [];
        const ancestors = [];
        do {
          index++;
          const isLeaving = index === keys.length;
          const isEdited = isLeaving && edits.length !== 0;
          if (isLeaving) {
            key = ancestors.length === 0 ? void 0 : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
              if (inArray) {
                node = node.slice();
                let editOffset = 0;
                for (const [editKey, editValue] of edits) {
                  const arrayKey = editKey - editOffset;
                  if (editValue === null) {
                    node.splice(arrayKey, 1);
                    editOffset++;
                  } else {
                    node[arrayKey] = editValue;
                  }
                }
              } else {
                node = Object.defineProperties(
                  {},
                  Object.getOwnPropertyDescriptors(node)
                );
                for (const [editKey, editValue] of edits) {
                  node[editKey] = editValue;
                }
              }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
          } else if (parent) {
            key = inArray ? index : keys[index];
            node = parent[key];
            if (node === null || node === void 0) {
              continue;
            }
            path.push(key);
          }
          let result;
          if (!Array.isArray(node)) {
            var _enterLeaveMap$get, _enterLeaveMap$get2;
            (0, _ast.isNode)(node) || (0, _devAssert.devAssert)(
              false,
              `Invalid AST Node: ${(0, _inspect.inspect)(node)}.`
            );
            const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
            result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
            if (result === BREAK) {
              break;
            }
            if (result === false) {
              if (!isLeaving) {
                path.pop();
                continue;
              }
            } else if (result !== void 0) {
              edits.push([key, result]);
              if (!isLeaving) {
                if ((0, _ast.isNode)(result)) {
                  node = result;
                } else {
                  path.pop();
                  continue;
                }
              }
            }
          }
          if (result === void 0 && isEdited) {
            edits.push([key, node]);
          }
          if (isLeaving) {
            path.pop();
          } else {
            var _node$kind;
            stack = {
              inArray,
              index,
              keys,
              edits,
              prev: stack
            };
            inArray = Array.isArray(node);
            keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
            index = -1;
            edits = [];
            if (parent) {
              ancestors.push(parent);
            }
            parent = node;
          }
        } while (stack !== void 0);
        if (edits.length !== 0) {
          return edits[edits.length - 1][1];
        }
        return root;
      }
      function visitInParallel(visitors) {
        const skipping = new Array(visitors.length).fill(null);
        const mergedVisitor = /* @__PURE__ */ Object.create(null);
        for (const kind of Object.values(_kinds.Kind)) {
          let hasVisitor = false;
          const enterList = new Array(visitors.length).fill(void 0);
          const leaveList = new Array(visitors.length).fill(void 0);
          for (let i = 0; i < visitors.length; ++i) {
            const { enter, leave } = getEnterLeaveForKind(visitors[i], kind);
            hasVisitor || (hasVisitor = enter != null || leave != null);
            enterList[i] = enter;
            leaveList[i] = leave;
          }
          if (!hasVisitor) {
            continue;
          }
          const mergedEnterLeave = {
            enter(...args) {
              const node = args[0];
              for (let i = 0; i < visitors.length; i++) {
                if (skipping[i] === null) {
                  var _enterList$i;
                  const result = (_enterList$i = enterList[i]) === null || _enterList$i === void 0 ? void 0 : _enterList$i.apply(visitors[i], args);
                  if (result === false) {
                    skipping[i] = node;
                  } else if (result === BREAK) {
                    skipping[i] = BREAK;
                  } else if (result !== void 0) {
                    return result;
                  }
                }
              }
            },
            leave(...args) {
              const node = args[0];
              for (let i = 0; i < visitors.length; i++) {
                if (skipping[i] === null) {
                  var _leaveList$i;
                  const result = (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0 ? void 0 : _leaveList$i.apply(visitors[i], args);
                  if (result === BREAK) {
                    skipping[i] = BREAK;
                  } else if (result !== void 0 && result !== false) {
                    return result;
                  }
                } else if (skipping[i] === node) {
                  skipping[i] = null;
                }
              }
            }
          };
          mergedVisitor[kind] = mergedEnterLeave;
        }
        return mergedVisitor;
      }
      function getEnterLeaveForKind(visitor, kind) {
        const kindVisitor = visitor[kind];
        if (typeof kindVisitor === "object") {
          return kindVisitor;
        } else if (typeof kindVisitor === "function") {
          return {
            enter: kindVisitor,
            leave: void 0
          };
        }
        return {
          enter: visitor.enter,
          leave: visitor.leave
        };
      }
      function getVisitFn(visitor, kind, isLeaving) {
        const { enter, leave } = getEnterLeaveForKind(visitor, kind);
        return isLeaving ? leave : enter;
      }
    }
  });

  // ../../node_modules/graphql/language/printer.js
  var require_printer = __commonJS({
    "../../node_modules/graphql/language/printer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.print = print;
      var _blockString = require_blockString();
      var _printString = require_printString();
      var _visitor = require_visitor();
      function print(ast) {
        return (0, _visitor.visit)(ast, printDocASTReducer);
      }
      var MAX_LINE_LENGTH = 80;
      var printDocASTReducer = {
        Name: {
          leave: (node) => node.value
        },
        Variable: {
          leave: (node) => "$" + node.name
        },
        Document: {
          leave: (node) => join(node.definitions, "\n\n")
        },
        OperationDefinition: {
          leave(node) {
            const varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
            const prefix = join(
              [
                node.operation,
                join([node.name, varDefs]),
                join(node.directives, " ")
              ],
              " "
            );
            return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
          }
        },
        VariableDefinition: {
          leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "))
        },
        SelectionSet: {
          leave: ({ selections }) => block(selections)
        },
        Field: {
          leave({ alias, name, arguments: args, directives, selectionSet }) {
            const prefix = wrap("", alias, ": ") + name;
            let argsLine = prefix + wrap("(", join(args, ", "), ")");
            if (argsLine.length > MAX_LINE_LENGTH) {
              argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
            }
            return join([argsLine, join(directives, " "), selectionSet], " ");
          }
        },
        Argument: {
          leave: ({ name, value }) => name + ": " + value
        },
        FragmentSpread: {
          leave: ({ name, directives }) => "..." + name + wrap(" ", join(directives, " "))
        },
        InlineFragment: {
          leave: ({ typeCondition, directives, selectionSet }) => join(
            [
              "...",
              wrap("on ", typeCondition),
              join(directives, " "),
              selectionSet
            ],
            " "
          )
        },
        FragmentDefinition: {
          leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => `fragment ${name}${wrap("(", join(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap("", join(directives, " "), " ")}` + selectionSet
        },
        IntValue: {
          leave: ({ value }) => value
        },
        FloatValue: {
          leave: ({ value }) => value
        },
        StringValue: {
          leave: ({ value, block: isBlockString }) => isBlockString ? (0, _blockString.printBlockString)(value) : (0, _printString.printString)(value)
        },
        BooleanValue: {
          leave: ({ value }) => value ? "true" : "false"
        },
        NullValue: {
          leave: () => "null"
        },
        EnumValue: {
          leave: ({ value }) => value
        },
        ListValue: {
          leave: ({ values }) => "[" + join(values, ", ") + "]"
        },
        ObjectValue: {
          leave: ({ fields }) => "{" + join(fields, ", ") + "}"
        },
        ObjectField: {
          leave: ({ name, value }) => name + ": " + value
        },
        Directive: {
          leave: ({ name, arguments: args }) => "@" + name + wrap("(", join(args, ", "), ")")
        },
        NamedType: {
          leave: ({ name }) => name
        },
        ListType: {
          leave: ({ type }) => "[" + type + "]"
        },
        NonNullType: {
          leave: ({ type }) => type + "!"
        },
        SchemaDefinition: {
          leave: ({ description, directives, operationTypes }) => wrap("", description, "\n") + join(["schema", join(directives, " "), block(operationTypes)], " ")
        },
        OperationTypeDefinition: {
          leave: ({ operation, type }) => operation + ": " + type
        },
        ScalarTypeDefinition: {
          leave: ({ description, name, directives }) => wrap("", description, "\n") + join(["scalar", name, join(directives, " ")], " ")
        },
        ObjectTypeDefinition: {
          leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
            [
              "type",
              name,
              wrap("implements ", join(interfaces, " & ")),
              join(directives, " "),
              block(fields)
            ],
            " "
          )
        },
        FieldDefinition: {
          leave: ({ description, name, arguments: args, type, directives }) => wrap("", description, "\n") + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "))
        },
        InputValueDefinition: {
          leave: ({ description, name, type, defaultValue, directives }) => wrap("", description, "\n") + join(
            [name + ": " + type, wrap("= ", defaultValue), join(directives, " ")],
            " "
          )
        },
        InterfaceTypeDefinition: {
          leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
            [
              "interface",
              name,
              wrap("implements ", join(interfaces, " & ")),
              join(directives, " "),
              block(fields)
            ],
            " "
          )
        },
        UnionTypeDefinition: {
          leave: ({ description, name, directives, types }) => wrap("", description, "\n") + join(
            ["union", name, join(directives, " "), wrap("= ", join(types, " | "))],
            " "
          )
        },
        EnumTypeDefinition: {
          leave: ({ description, name, directives, values }) => wrap("", description, "\n") + join(["enum", name, join(directives, " "), block(values)], " ")
        },
        EnumValueDefinition: {
          leave: ({ description, name, directives }) => wrap("", description, "\n") + join([name, join(directives, " ")], " ")
        },
        InputObjectTypeDefinition: {
          leave: ({ description, name, directives, fields }) => wrap("", description, "\n") + join(["input", name, join(directives, " "), block(fields)], " ")
        },
        DirectiveDefinition: {
          leave: ({ description, name, arguments: args, repeatable, locations }) => wrap("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
        },
        SchemaExtension: {
          leave: ({ directives, operationTypes }) => join(
            ["extend schema", join(directives, " "), block(operationTypes)],
            " "
          )
        },
        ScalarTypeExtension: {
          leave: ({ name, directives }) => join(["extend scalar", name, join(directives, " ")], " ")
        },
        ObjectTypeExtension: {
          leave: ({ name, interfaces, directives, fields }) => join(
            [
              "extend type",
              name,
              wrap("implements ", join(interfaces, " & ")),
              join(directives, " "),
              block(fields)
            ],
            " "
          )
        },
        InterfaceTypeExtension: {
          leave: ({ name, interfaces, directives, fields }) => join(
            [
              "extend interface",
              name,
              wrap("implements ", join(interfaces, " & ")),
              join(directives, " "),
              block(fields)
            ],
            " "
          )
        },
        UnionTypeExtension: {
          leave: ({ name, directives, types }) => join(
            [
              "extend union",
              name,
              join(directives, " "),
              wrap("= ", join(types, " | "))
            ],
            " "
          )
        },
        EnumTypeExtension: {
          leave: ({ name, directives, values }) => join(["extend enum", name, join(directives, " "), block(values)], " ")
        },
        InputObjectTypeExtension: {
          leave: ({ name, directives, fields }) => join(["extend input", name, join(directives, " "), block(fields)], " ")
        }
      };
      function join(maybeArray, separator = "") {
        var _maybeArray$filter$jo;
        return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x) => x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
      }
      function block(array) {
        return wrap("{\n", indent(join(array, "\n")), "\n}");
      }
      function wrap(start2, maybeString, end = "") {
        return maybeString != null && maybeString !== "" ? start2 + maybeString + end : "";
      }
      function indent(str) {
        return wrap("  ", str.replace(/\n/g, "\n  "));
      }
      function hasMultilineItems(maybeArray) {
        var _maybeArray$some;
        return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
      }
    }
  });

  // ../../node_modules/graphql/utilities/valueFromASTUntyped.js
  var require_valueFromASTUntyped = __commonJS({
    "../../node_modules/graphql/utilities/valueFromASTUntyped.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.valueFromASTUntyped = valueFromASTUntyped;
      var _keyValMap = require_keyValMap();
      var _kinds = require_kinds();
      function valueFromASTUntyped(valueNode, variables) {
        switch (valueNode.kind) {
          case _kinds.Kind.NULL:
            return null;
          case _kinds.Kind.INT:
            return parseInt(valueNode.value, 10);
          case _kinds.Kind.FLOAT:
            return parseFloat(valueNode.value);
          case _kinds.Kind.STRING:
          case _kinds.Kind.ENUM:
          case _kinds.Kind.BOOLEAN:
            return valueNode.value;
          case _kinds.Kind.LIST:
            return valueNode.values.map(
              (node) => valueFromASTUntyped(node, variables)
            );
          case _kinds.Kind.OBJECT:
            return (0, _keyValMap.keyValMap)(
              valueNode.fields,
              (field) => field.name.value,
              (field) => valueFromASTUntyped(field.value, variables)
            );
          case _kinds.Kind.VARIABLE:
            return variables === null || variables === void 0 ? void 0 : variables[valueNode.name.value];
        }
      }
    }
  });

  // ../../node_modules/graphql/type/assertName.js
  var require_assertName = __commonJS({
    "../../node_modules/graphql/type/assertName.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.assertEnumValueName = assertEnumValueName;
      exports.assertName = assertName;
      var _devAssert = require_devAssert();
      var _GraphQLError = require_GraphQLError();
      var _characterClasses = require_characterClasses();
      function assertName(name) {
        name != null || (0, _devAssert.devAssert)(false, "Must provide name.");
        typeof name === "string" || (0, _devAssert.devAssert)(false, "Expected name to be a string.");
        if (name.length === 0) {
          throw new _GraphQLError.GraphQLError(
            "Expected name to be a non-empty string."
          );
        }
        for (let i = 1; i < name.length; ++i) {
          if (!(0, _characterClasses.isNameContinue)(name.charCodeAt(i))) {
            throw new _GraphQLError.GraphQLError(
              `Names must only contain [_a-zA-Z0-9] but "${name}" does not.`
            );
          }
        }
        if (!(0, _characterClasses.isNameStart)(name.charCodeAt(0))) {
          throw new _GraphQLError.GraphQLError(
            `Names must start with [_a-zA-Z] but "${name}" does not.`
          );
        }
        return name;
      }
      function assertEnumValueName(name) {
        if (name === "true" || name === "false" || name === "null") {
          throw new _GraphQLError.GraphQLError(
            `Enum values cannot be named: ${name}`
          );
        }
        return assertName(name);
      }
    }
  });

  // ../../node_modules/graphql/type/definition.js
  var require_definition = __commonJS({
    "../../node_modules/graphql/type/definition.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GraphQLUnionType = exports.GraphQLScalarType = exports.GraphQLObjectType = exports.GraphQLNonNull = exports.GraphQLList = exports.GraphQLInterfaceType = exports.GraphQLInputObjectType = exports.GraphQLEnumType = void 0;
      exports.argsToArgsConfig = argsToArgsConfig;
      exports.assertAbstractType = assertAbstractType;
      exports.assertCompositeType = assertCompositeType;
      exports.assertEnumType = assertEnumType;
      exports.assertInputObjectType = assertInputObjectType;
      exports.assertInputType = assertInputType;
      exports.assertInterfaceType = assertInterfaceType;
      exports.assertLeafType = assertLeafType;
      exports.assertListType = assertListType;
      exports.assertNamedType = assertNamedType;
      exports.assertNonNullType = assertNonNullType;
      exports.assertNullableType = assertNullableType;
      exports.assertObjectType = assertObjectType;
      exports.assertOutputType = assertOutputType;
      exports.assertScalarType = assertScalarType;
      exports.assertType = assertType;
      exports.assertUnionType = assertUnionType;
      exports.assertWrappingType = assertWrappingType;
      exports.defineArguments = defineArguments;
      exports.getNamedType = getNamedType;
      exports.getNullableType = getNullableType;
      exports.isAbstractType = isAbstractType;
      exports.isCompositeType = isCompositeType;
      exports.isEnumType = isEnumType;
      exports.isInputObjectType = isInputObjectType;
      exports.isInputType = isInputType;
      exports.isInterfaceType = isInterfaceType;
      exports.isLeafType = isLeafType;
      exports.isListType = isListType;
      exports.isNamedType = isNamedType;
      exports.isNonNullType = isNonNullType;
      exports.isNullableType = isNullableType;
      exports.isObjectType = isObjectType;
      exports.isOutputType = isOutputType;
      exports.isRequiredArgument = isRequiredArgument;
      exports.isRequiredInputField = isRequiredInputField;
      exports.isScalarType = isScalarType;
      exports.isType = isType;
      exports.isUnionType = isUnionType;
      exports.isWrappingType = isWrappingType;
      exports.resolveObjMapThunk = resolveObjMapThunk;
      exports.resolveReadonlyArrayThunk = resolveReadonlyArrayThunk;
      var _devAssert = require_devAssert();
      var _didYouMean = require_didYouMean();
      var _identityFunc = require_identityFunc();
      var _inspect = require_inspect();
      var _instanceOf = require_instanceOf();
      var _isObjectLike = require_isObjectLike();
      var _keyMap = require_keyMap();
      var _keyValMap = require_keyValMap();
      var _mapValue = require_mapValue();
      var _suggestionList = require_suggestionList();
      var _toObjMap = require_toObjMap();
      var _GraphQLError = require_GraphQLError();
      var _kinds = require_kinds();
      var _printer = require_printer();
      var _valueFromASTUntyped = require_valueFromASTUntyped();
      var _assertName = require_assertName();
      function isType(type) {
        return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
      }
      function assertType(type) {
        if (!isType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL type.`
          );
        }
        return type;
      }
      function isScalarType(type) {
        return (0, _instanceOf.instanceOf)(type, GraphQLScalarType);
      }
      function assertScalarType(type) {
        if (!isScalarType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Scalar type.`
          );
        }
        return type;
      }
      function isObjectType(type) {
        return (0, _instanceOf.instanceOf)(type, GraphQLObjectType);
      }
      function assertObjectType(type) {
        if (!isObjectType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Object type.`
          );
        }
        return type;
      }
      function isInterfaceType(type) {
        return (0, _instanceOf.instanceOf)(type, GraphQLInterfaceType);
      }
      function assertInterfaceType(type) {
        if (!isInterfaceType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Interface type.`
          );
        }
        return type;
      }
      function isUnionType(type) {
        return (0, _instanceOf.instanceOf)(type, GraphQLUnionType);
      }
      function assertUnionType(type) {
        if (!isUnionType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Union type.`
          );
        }
        return type;
      }
      function isEnumType(type) {
        return (0, _instanceOf.instanceOf)(type, GraphQLEnumType);
      }
      function assertEnumType(type) {
        if (!isEnumType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Enum type.`
          );
        }
        return type;
      }
      function isInputObjectType(type) {
        return (0, _instanceOf.instanceOf)(type, GraphQLInputObjectType);
      }
      function assertInputObjectType(type) {
        if (!isInputObjectType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(
              type
            )} to be a GraphQL Input Object type.`
          );
        }
        return type;
      }
      function isListType(type) {
        return (0, _instanceOf.instanceOf)(type, GraphQLList);
      }
      function assertListType(type) {
        if (!isListType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL List type.`
          );
        }
        return type;
      }
      function isNonNullType(type) {
        return (0, _instanceOf.instanceOf)(type, GraphQLNonNull);
      }
      function assertNonNullType(type) {
        if (!isNonNullType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Non-Null type.`
          );
        }
        return type;
      }
      function isInputType(type) {
        return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
      }
      function assertInputType(type) {
        if (!isInputType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL input type.`
          );
        }
        return type;
      }
      function isOutputType(type) {
        return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
      }
      function assertOutputType(type) {
        if (!isOutputType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL output type.`
          );
        }
        return type;
      }
      function isLeafType(type) {
        return isScalarType(type) || isEnumType(type);
      }
      function assertLeafType(type) {
        if (!isLeafType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL leaf type.`
          );
        }
        return type;
      }
      function isCompositeType(type) {
        return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
      }
      function assertCompositeType(type) {
        if (!isCompositeType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL composite type.`
          );
        }
        return type;
      }
      function isAbstractType(type) {
        return isInterfaceType(type) || isUnionType(type);
      }
      function assertAbstractType(type) {
        if (!isAbstractType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL abstract type.`
          );
        }
        return type;
      }
      var GraphQLList = class {
        constructor(ofType) {
          isType(ofType) || (0, _devAssert.devAssert)(
            false,
            `Expected ${(0, _inspect.inspect)(ofType)} to be a GraphQL type.`
          );
          this.ofType = ofType;
        }
        get [Symbol.toStringTag]() {
          return "GraphQLList";
        }
        toString() {
          return "[" + String(this.ofType) + "]";
        }
        toJSON() {
          return this.toString();
        }
      };
      exports.GraphQLList = GraphQLList;
      var GraphQLNonNull = class {
        constructor(ofType) {
          isNullableType(ofType) || (0, _devAssert.devAssert)(
            false,
            `Expected ${(0, _inspect.inspect)(
              ofType
            )} to be a GraphQL nullable type.`
          );
          this.ofType = ofType;
        }
        get [Symbol.toStringTag]() {
          return "GraphQLNonNull";
        }
        toString() {
          return String(this.ofType) + "!";
        }
        toJSON() {
          return this.toString();
        }
      };
      exports.GraphQLNonNull = GraphQLNonNull;
      function isWrappingType(type) {
        return isListType(type) || isNonNullType(type);
      }
      function assertWrappingType(type) {
        if (!isWrappingType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL wrapping type.`
          );
        }
        return type;
      }
      function isNullableType(type) {
        return isType(type) && !isNonNullType(type);
      }
      function assertNullableType(type) {
        if (!isNullableType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL nullable type.`
          );
        }
        return type;
      }
      function getNullableType(type) {
        if (type) {
          return isNonNullType(type) ? type.ofType : type;
        }
      }
      function isNamedType(type) {
        return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
      }
      function assertNamedType(type) {
        if (!isNamedType(type)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(type)} to be a GraphQL named type.`
          );
        }
        return type;
      }
      function getNamedType(type) {
        if (type) {
          let unwrappedType = type;
          while (isWrappingType(unwrappedType)) {
            unwrappedType = unwrappedType.ofType;
          }
          return unwrappedType;
        }
      }
      function resolveReadonlyArrayThunk(thunk) {
        return typeof thunk === "function" ? thunk() : thunk;
      }
      function resolveObjMapThunk(thunk) {
        return typeof thunk === "function" ? thunk() : thunk;
      }
      var GraphQLScalarType = class {
        constructor(config) {
          var _config$parseValue, _config$serialize, _config$parseLiteral, _config$extensionASTN;
          const parseValue = (_config$parseValue = config.parseValue) !== null && _config$parseValue !== void 0 ? _config$parseValue : _identityFunc.identityFunc;
          this.name = (0, _assertName.assertName)(config.name);
          this.description = config.description;
          this.specifiedByURL = config.specifiedByURL;
          this.serialize = (_config$serialize = config.serialize) !== null && _config$serialize !== void 0 ? _config$serialize : _identityFunc.identityFunc;
          this.parseValue = parseValue;
          this.parseLiteral = (_config$parseLiteral = config.parseLiteral) !== null && _config$parseLiteral !== void 0 ? _config$parseLiteral : (node, variables) => parseValue(
            (0, _valueFromASTUntyped.valueFromASTUntyped)(node, variables)
          );
          this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
          this.astNode = config.astNode;
          this.extensionASTNodes = (_config$extensionASTN = config.extensionASTNodes) !== null && _config$extensionASTN !== void 0 ? _config$extensionASTN : [];
          config.specifiedByURL == null || typeof config.specifiedByURL === "string" || (0, _devAssert.devAssert)(
            false,
            `${this.name} must provide "specifiedByURL" as a string, but got: ${(0, _inspect.inspect)(config.specifiedByURL)}.`
          );
          config.serialize == null || typeof config.serialize === "function" || (0, _devAssert.devAssert)(
            false,
            `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
          );
          if (config.parseLiteral) {
            typeof config.parseValue === "function" && typeof config.parseLiteral === "function" || (0, _devAssert.devAssert)(
              false,
              `${this.name} must provide both "parseValue" and "parseLiteral" functions.`
            );
          }
        }
        get [Symbol.toStringTag]() {
          return "GraphQLScalarType";
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            specifiedByURL: this.specifiedByURL,
            serialize: this.serialize,
            parseValue: this.parseValue,
            parseLiteral: this.parseLiteral,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
          };
        }
        toString() {
          return this.name;
        }
        toJSON() {
          return this.toString();
        }
      };
      exports.GraphQLScalarType = GraphQLScalarType;
      var GraphQLObjectType = class {
        constructor(config) {
          var _config$extensionASTN2;
          this.name = (0, _assertName.assertName)(config.name);
          this.description = config.description;
          this.isTypeOf = config.isTypeOf;
          this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
          this.astNode = config.astNode;
          this.extensionASTNodes = (_config$extensionASTN2 = config.extensionASTNodes) !== null && _config$extensionASTN2 !== void 0 ? _config$extensionASTN2 : [];
          this._fields = () => defineFieldMap(config);
          this._interfaces = () => defineInterfaces(config);
          config.isTypeOf == null || typeof config.isTypeOf === "function" || (0, _devAssert.devAssert)(
            false,
            `${this.name} must provide "isTypeOf" as a function, but got: ${(0, _inspect.inspect)(config.isTypeOf)}.`
          );
        }
        get [Symbol.toStringTag]() {
          return "GraphQLObjectType";
        }
        getFields() {
          if (typeof this._fields === "function") {
            this._fields = this._fields();
          }
          return this._fields;
        }
        getInterfaces() {
          if (typeof this._interfaces === "function") {
            this._interfaces = this._interfaces();
          }
          return this._interfaces;
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: fieldsToFieldsConfig(this.getFields()),
            isTypeOf: this.isTypeOf,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
          };
        }
        toString() {
          return this.name;
        }
        toJSON() {
          return this.toString();
        }
      };
      exports.GraphQLObjectType = GraphQLObjectType;
      function defineInterfaces(config) {
        var _config$interfaces;
        const interfaces = resolveReadonlyArrayThunk(
          (_config$interfaces = config.interfaces) !== null && _config$interfaces !== void 0 ? _config$interfaces : []
        );
        Array.isArray(interfaces) || (0, _devAssert.devAssert)(
          false,
          `${config.name} interfaces must be an Array or a function which returns an Array.`
        );
        return interfaces;
      }
      function defineFieldMap(config) {
        const fieldMap = resolveObjMapThunk(config.fields);
        isPlainObj(fieldMap) || (0, _devAssert.devAssert)(
          false,
          `${config.name} fields must be an object with field names as keys or a function which returns such an object.`
        );
        return (0, _mapValue.mapValue)(fieldMap, (fieldConfig, fieldName) => {
          var _fieldConfig$args;
          isPlainObj(fieldConfig) || (0, _devAssert.devAssert)(
            false,
            `${config.name}.${fieldName} field config must be an object.`
          );
          fieldConfig.resolve == null || typeof fieldConfig.resolve === "function" || (0, _devAssert.devAssert)(
            false,
            `${config.name}.${fieldName} field resolver must be a function if provided, but got: ${(0, _inspect.inspect)(fieldConfig.resolve)}.`
          );
          const argsConfig = (_fieldConfig$args = fieldConfig.args) !== null && _fieldConfig$args !== void 0 ? _fieldConfig$args : {};
          isPlainObj(argsConfig) || (0, _devAssert.devAssert)(
            false,
            `${config.name}.${fieldName} args must be an object with argument names as keys.`
          );
          return {
            name: (0, _assertName.assertName)(fieldName),
            description: fieldConfig.description,
            type: fieldConfig.type,
            args: defineArguments(argsConfig),
            resolve: fieldConfig.resolve,
            subscribe: fieldConfig.subscribe,
            deprecationReason: fieldConfig.deprecationReason,
            extensions: (0, _toObjMap.toObjMap)(fieldConfig.extensions),
            astNode: fieldConfig.astNode
          };
        });
      }
      function defineArguments(config) {
        return Object.entries(config).map(([argName, argConfig]) => ({
          name: (0, _assertName.assertName)(argName),
          description: argConfig.description,
          type: argConfig.type,
          defaultValue: argConfig.defaultValue,
          deprecationReason: argConfig.deprecationReason,
          extensions: (0, _toObjMap.toObjMap)(argConfig.extensions),
          astNode: argConfig.astNode
        }));
      }
      function isPlainObj(obj) {
        return (0, _isObjectLike.isObjectLike)(obj) && !Array.isArray(obj);
      }
      function fieldsToFieldsConfig(fields) {
        return (0, _mapValue.mapValue)(fields, (field) => ({
          description: field.description,
          type: field.type,
          args: argsToArgsConfig(field.args),
          resolve: field.resolve,
          subscribe: field.subscribe,
          deprecationReason: field.deprecationReason,
          extensions: field.extensions,
          astNode: field.astNode
        }));
      }
      function argsToArgsConfig(args) {
        return (0, _keyValMap.keyValMap)(
          args,
          (arg) => arg.name,
          (arg) => ({
            description: arg.description,
            type: arg.type,
            defaultValue: arg.defaultValue,
            deprecationReason: arg.deprecationReason,
            extensions: arg.extensions,
            astNode: arg.astNode
          })
        );
      }
      function isRequiredArgument(arg) {
        return isNonNullType(arg.type) && arg.defaultValue === void 0;
      }
      var GraphQLInterfaceType = class {
        constructor(config) {
          var _config$extensionASTN3;
          this.name = (0, _assertName.assertName)(config.name);
          this.description = config.description;
          this.resolveType = config.resolveType;
          this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
          this.astNode = config.astNode;
          this.extensionASTNodes = (_config$extensionASTN3 = config.extensionASTNodes) !== null && _config$extensionASTN3 !== void 0 ? _config$extensionASTN3 : [];
          this._fields = defineFieldMap.bind(void 0, config);
          this._interfaces = defineInterfaces.bind(void 0, config);
          config.resolveType == null || typeof config.resolveType === "function" || (0, _devAssert.devAssert)(
            false,
            `${this.name} must provide "resolveType" as a function, but got: ${(0, _inspect.inspect)(config.resolveType)}.`
          );
        }
        get [Symbol.toStringTag]() {
          return "GraphQLInterfaceType";
        }
        getFields() {
          if (typeof this._fields === "function") {
            this._fields = this._fields();
          }
          return this._fields;
        }
        getInterfaces() {
          if (typeof this._interfaces === "function") {
            this._interfaces = this._interfaces();
          }
          return this._interfaces;
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: fieldsToFieldsConfig(this.getFields()),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
          };
        }
        toString() {
          return this.name;
        }
        toJSON() {
          return this.toString();
        }
      };
      exports.GraphQLInterfaceType = GraphQLInterfaceType;
      var GraphQLUnionType = class {
        constructor(config) {
          var _config$extensionASTN4;
          this.name = (0, _assertName.assertName)(config.name);
          this.description = config.description;
          this.resolveType = config.resolveType;
          this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
          this.astNode = config.astNode;
          this.extensionASTNodes = (_config$extensionASTN4 = config.extensionASTNodes) !== null && _config$extensionASTN4 !== void 0 ? _config$extensionASTN4 : [];
          this._types = defineTypes.bind(void 0, config);
          config.resolveType == null || typeof config.resolveType === "function" || (0, _devAssert.devAssert)(
            false,
            `${this.name} must provide "resolveType" as a function, but got: ${(0, _inspect.inspect)(config.resolveType)}.`
          );
        }
        get [Symbol.toStringTag]() {
          return "GraphQLUnionType";
        }
        getTypes() {
          if (typeof this._types === "function") {
            this._types = this._types();
          }
          return this._types;
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            types: this.getTypes(),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
          };
        }
        toString() {
          return this.name;
        }
        toJSON() {
          return this.toString();
        }
      };
      exports.GraphQLUnionType = GraphQLUnionType;
      function defineTypes(config) {
        const types = resolveReadonlyArrayThunk(config.types);
        Array.isArray(types) || (0, _devAssert.devAssert)(
          false,
          `Must provide Array of types or a function which returns such an array for Union ${config.name}.`
        );
        return types;
      }
      var GraphQLEnumType = class {
        constructor(config) {
          var _config$extensionASTN5;
          this.name = (0, _assertName.assertName)(config.name);
          this.description = config.description;
          this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
          this.astNode = config.astNode;
          this.extensionASTNodes = (_config$extensionASTN5 = config.extensionASTNodes) !== null && _config$extensionASTN5 !== void 0 ? _config$extensionASTN5 : [];
          this._values = defineEnumValues(this.name, config.values);
          this._valueLookup = new Map(
            this._values.map((enumValue) => [enumValue.value, enumValue])
          );
          this._nameLookup = (0, _keyMap.keyMap)(this._values, (value) => value.name);
        }
        get [Symbol.toStringTag]() {
          return "GraphQLEnumType";
        }
        getValues() {
          return this._values;
        }
        getValue(name) {
          return this._nameLookup[name];
        }
        serialize(outputValue) {
          const enumValue = this._valueLookup.get(outputValue);
          if (enumValue === void 0) {
            throw new _GraphQLError.GraphQLError(
              `Enum "${this.name}" cannot represent value: ${(0, _inspect.inspect)(
                outputValue
              )}`
            );
          }
          return enumValue.name;
        }
        parseValue(inputValue) {
          if (typeof inputValue !== "string") {
            const valueStr = (0, _inspect.inspect)(inputValue);
            throw new _GraphQLError.GraphQLError(
              `Enum "${this.name}" cannot represent non-string value: ${valueStr}.` + didYouMeanEnumValue(this, valueStr)
            );
          }
          const enumValue = this.getValue(inputValue);
          if (enumValue == null) {
            throw new _GraphQLError.GraphQLError(
              `Value "${inputValue}" does not exist in "${this.name}" enum.` + didYouMeanEnumValue(this, inputValue)
            );
          }
          return enumValue.value;
        }
        parseLiteral(valueNode, _variables) {
          if (valueNode.kind !== _kinds.Kind.ENUM) {
            const valueStr = (0, _printer.print)(valueNode);
            throw new _GraphQLError.GraphQLError(
              `Enum "${this.name}" cannot represent non-enum value: ${valueStr}.` + didYouMeanEnumValue(this, valueStr),
              {
                nodes: valueNode
              }
            );
          }
          const enumValue = this.getValue(valueNode.value);
          if (enumValue == null) {
            const valueStr = (0, _printer.print)(valueNode);
            throw new _GraphQLError.GraphQLError(
              `Value "${valueStr}" does not exist in "${this.name}" enum.` + didYouMeanEnumValue(this, valueStr),
              {
                nodes: valueNode
              }
            );
          }
          return enumValue.value;
        }
        toConfig() {
          const values = (0, _keyValMap.keyValMap)(
            this.getValues(),
            (value) => value.name,
            (value) => ({
              description: value.description,
              value: value.value,
              deprecationReason: value.deprecationReason,
              extensions: value.extensions,
              astNode: value.astNode
            })
          );
          return {
            name: this.name,
            description: this.description,
            values,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
          };
        }
        toString() {
          return this.name;
        }
        toJSON() {
          return this.toString();
        }
      };
      exports.GraphQLEnumType = GraphQLEnumType;
      function didYouMeanEnumValue(enumType, unknownValueStr) {
        const allNames = enumType.getValues().map((value) => value.name);
        const suggestedValues = (0, _suggestionList.suggestionList)(
          unknownValueStr,
          allNames
        );
        return (0, _didYouMean.didYouMean)("the enum value", suggestedValues);
      }
      function defineEnumValues(typeName, valueMap) {
        isPlainObj(valueMap) || (0, _devAssert.devAssert)(
          false,
          `${typeName} values must be an object with value names as keys.`
        );
        return Object.entries(valueMap).map(([valueName, valueConfig]) => {
          isPlainObj(valueConfig) || (0, _devAssert.devAssert)(
            false,
            `${typeName}.${valueName} must refer to an object with a "value" key representing an internal value but got: ${(0, _inspect.inspect)(
              valueConfig
            )}.`
          );
          return {
            name: (0, _assertName.assertEnumValueName)(valueName),
            description: valueConfig.description,
            value: valueConfig.value !== void 0 ? valueConfig.value : valueName,
            deprecationReason: valueConfig.deprecationReason,
            extensions: (0, _toObjMap.toObjMap)(valueConfig.extensions),
            astNode: valueConfig.astNode
          };
        });
      }
      var GraphQLInputObjectType = class {
        constructor(config) {
          var _config$extensionASTN6;
          this.name = (0, _assertName.assertName)(config.name);
          this.description = config.description;
          this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
          this.astNode = config.astNode;
          this.extensionASTNodes = (_config$extensionASTN6 = config.extensionASTNodes) !== null && _config$extensionASTN6 !== void 0 ? _config$extensionASTN6 : [];
          this._fields = defineInputFieldMap.bind(void 0, config);
        }
        get [Symbol.toStringTag]() {
          return "GraphQLInputObjectType";
        }
        getFields() {
          if (typeof this._fields === "function") {
            this._fields = this._fields();
          }
          return this._fields;
        }
        toConfig() {
          const fields = (0, _mapValue.mapValue)(this.getFields(), (field) => ({
            description: field.description,
            type: field.type,
            defaultValue: field.defaultValue,
            deprecationReason: field.deprecationReason,
            extensions: field.extensions,
            astNode: field.astNode
          }));
          return {
            name: this.name,
            description: this.description,
            fields,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
          };
        }
        toString() {
          return this.name;
        }
        toJSON() {
          return this.toString();
        }
      };
      exports.GraphQLInputObjectType = GraphQLInputObjectType;
      function defineInputFieldMap(config) {
        const fieldMap = resolveObjMapThunk(config.fields);
        isPlainObj(fieldMap) || (0, _devAssert.devAssert)(
          false,
          `${config.name} fields must be an object with field names as keys or a function which returns such an object.`
        );
        return (0, _mapValue.mapValue)(fieldMap, (fieldConfig, fieldName) => {
          !("resolve" in fieldConfig) || (0, _devAssert.devAssert)(
            false,
            `${config.name}.${fieldName} field has a resolve property, but Input Types cannot define resolvers.`
          );
          return {
            name: (0, _assertName.assertName)(fieldName),
            description: fieldConfig.description,
            type: fieldConfig.type,
            defaultValue: fieldConfig.defaultValue,
            deprecationReason: fieldConfig.deprecationReason,
            extensions: (0, _toObjMap.toObjMap)(fieldConfig.extensions),
            astNode: fieldConfig.astNode
          };
        });
      }
      function isRequiredInputField(field) {
        return isNonNullType(field.type) && field.defaultValue === void 0;
      }
    }
  });

  // ../../node_modules/graphql/utilities/typeComparators.js
  var require_typeComparators = __commonJS({
    "../../node_modules/graphql/utilities/typeComparators.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.doTypesOverlap = doTypesOverlap;
      exports.isEqualType = isEqualType;
      exports.isTypeSubTypeOf = isTypeSubTypeOf;
      var _definition = require_definition();
      function isEqualType(typeA, typeB) {
        if (typeA === typeB) {
          return true;
        }
        if ((0, _definition.isNonNullType)(typeA) && (0, _definition.isNonNullType)(typeB)) {
          return isEqualType(typeA.ofType, typeB.ofType);
        }
        if ((0, _definition.isListType)(typeA) && (0, _definition.isListType)(typeB)) {
          return isEqualType(typeA.ofType, typeB.ofType);
        }
        return false;
      }
      function isTypeSubTypeOf(schema, maybeSubType, superType) {
        if (maybeSubType === superType) {
          return true;
        }
        if ((0, _definition.isNonNullType)(superType)) {
          if ((0, _definition.isNonNullType)(maybeSubType)) {
            return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
          }
          return false;
        }
        if ((0, _definition.isNonNullType)(maybeSubType)) {
          return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
        }
        if ((0, _definition.isListType)(superType)) {
          if ((0, _definition.isListType)(maybeSubType)) {
            return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
          }
          return false;
        }
        if ((0, _definition.isListType)(maybeSubType)) {
          return false;
        }
        return (0, _definition.isAbstractType)(superType) && ((0, _definition.isInterfaceType)(maybeSubType) || (0, _definition.isObjectType)(maybeSubType)) && schema.isSubType(superType, maybeSubType);
      }
      function doTypesOverlap(schema, typeA, typeB) {
        if (typeA === typeB) {
          return true;
        }
        if ((0, _definition.isAbstractType)(typeA)) {
          if ((0, _definition.isAbstractType)(typeB)) {
            return schema.getPossibleTypes(typeA).some((type) => schema.isSubType(typeB, type));
          }
          return schema.isSubType(typeA, typeB);
        }
        if ((0, _definition.isAbstractType)(typeB)) {
          return schema.isSubType(typeB, typeA);
        }
        return false;
      }
    }
  });

  // ../../node_modules/graphql/type/scalars.js
  var require_scalars = __commonJS({
    "../../node_modules/graphql/type/scalars.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GraphQLString = exports.GraphQLInt = exports.GraphQLID = exports.GraphQLFloat = exports.GraphQLBoolean = exports.GRAPHQL_MIN_INT = exports.GRAPHQL_MAX_INT = void 0;
      exports.isSpecifiedScalarType = isSpecifiedScalarType;
      exports.specifiedScalarTypes = void 0;
      var _inspect = require_inspect();
      var _isObjectLike = require_isObjectLike();
      var _GraphQLError = require_GraphQLError();
      var _kinds = require_kinds();
      var _printer = require_printer();
      var _definition = require_definition();
      var GRAPHQL_MAX_INT = 2147483647;
      exports.GRAPHQL_MAX_INT = GRAPHQL_MAX_INT;
      var GRAPHQL_MIN_INT = -2147483648;
      exports.GRAPHQL_MIN_INT = GRAPHQL_MIN_INT;
      var GraphQLInt = new _definition.GraphQLScalarType({
        name: "Int",
        description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
        serialize(outputValue) {
          const coercedValue = serializeObject(outputValue);
          if (typeof coercedValue === "boolean") {
            return coercedValue ? 1 : 0;
          }
          let num = coercedValue;
          if (typeof coercedValue === "string" && coercedValue !== "") {
            num = Number(coercedValue);
          }
          if (typeof num !== "number" || !Number.isInteger(num)) {
            throw new _GraphQLError.GraphQLError(
              `Int cannot represent non-integer value: ${(0, _inspect.inspect)(
                coercedValue
              )}`
            );
          }
          if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
            throw new _GraphQLError.GraphQLError(
              "Int cannot represent non 32-bit signed integer value: " + (0, _inspect.inspect)(coercedValue)
            );
          }
          return num;
        },
        parseValue(inputValue) {
          if (typeof inputValue !== "number" || !Number.isInteger(inputValue)) {
            throw new _GraphQLError.GraphQLError(
              `Int cannot represent non-integer value: ${(0, _inspect.inspect)(
                inputValue
              )}`
            );
          }
          if (inputValue > GRAPHQL_MAX_INT || inputValue < GRAPHQL_MIN_INT) {
            throw new _GraphQLError.GraphQLError(
              `Int cannot represent non 32-bit signed integer value: ${inputValue}`
            );
          }
          return inputValue;
        },
        parseLiteral(valueNode) {
          if (valueNode.kind !== _kinds.Kind.INT) {
            throw new _GraphQLError.GraphQLError(
              `Int cannot represent non-integer value: ${(0, _printer.print)(
                valueNode
              )}`,
              {
                nodes: valueNode
              }
            );
          }
          const num = parseInt(valueNode.value, 10);
          if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
            throw new _GraphQLError.GraphQLError(
              `Int cannot represent non 32-bit signed integer value: ${valueNode.value}`,
              {
                nodes: valueNode
              }
            );
          }
          return num;
        }
      });
      exports.GraphQLInt = GraphQLInt;
      var GraphQLFloat = new _definition.GraphQLScalarType({
        name: "Float",
        description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
        serialize(outputValue) {
          const coercedValue = serializeObject(outputValue);
          if (typeof coercedValue === "boolean") {
            return coercedValue ? 1 : 0;
          }
          let num = coercedValue;
          if (typeof coercedValue === "string" && coercedValue !== "") {
            num = Number(coercedValue);
          }
          if (typeof num !== "number" || !Number.isFinite(num)) {
            throw new _GraphQLError.GraphQLError(
              `Float cannot represent non numeric value: ${(0, _inspect.inspect)(
                coercedValue
              )}`
            );
          }
          return num;
        },
        parseValue(inputValue) {
          if (typeof inputValue !== "number" || !Number.isFinite(inputValue)) {
            throw new _GraphQLError.GraphQLError(
              `Float cannot represent non numeric value: ${(0, _inspect.inspect)(
                inputValue
              )}`
            );
          }
          return inputValue;
        },
        parseLiteral(valueNode) {
          if (valueNode.kind !== _kinds.Kind.FLOAT && valueNode.kind !== _kinds.Kind.INT) {
            throw new _GraphQLError.GraphQLError(
              `Float cannot represent non numeric value: ${(0, _printer.print)(
                valueNode
              )}`,
              valueNode
            );
          }
          return parseFloat(valueNode.value);
        }
      });
      exports.GraphQLFloat = GraphQLFloat;
      var GraphQLString = new _definition.GraphQLScalarType({
        name: "String",
        description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
        serialize(outputValue) {
          const coercedValue = serializeObject(outputValue);
          if (typeof coercedValue === "string") {
            return coercedValue;
          }
          if (typeof coercedValue === "boolean") {
            return coercedValue ? "true" : "false";
          }
          if (typeof coercedValue === "number" && Number.isFinite(coercedValue)) {
            return coercedValue.toString();
          }
          throw new _GraphQLError.GraphQLError(
            `String cannot represent value: ${(0, _inspect.inspect)(outputValue)}`
          );
        },
        parseValue(inputValue) {
          if (typeof inputValue !== "string") {
            throw new _GraphQLError.GraphQLError(
              `String cannot represent a non string value: ${(0, _inspect.inspect)(
                inputValue
              )}`
            );
          }
          return inputValue;
        },
        parseLiteral(valueNode) {
          if (valueNode.kind !== _kinds.Kind.STRING) {
            throw new _GraphQLError.GraphQLError(
              `String cannot represent a non string value: ${(0, _printer.print)(
                valueNode
              )}`,
              {
                nodes: valueNode
              }
            );
          }
          return valueNode.value;
        }
      });
      exports.GraphQLString = GraphQLString;
      var GraphQLBoolean = new _definition.GraphQLScalarType({
        name: "Boolean",
        description: "The `Boolean` scalar type represents `true` or `false`.",
        serialize(outputValue) {
          const coercedValue = serializeObject(outputValue);
          if (typeof coercedValue === "boolean") {
            return coercedValue;
          }
          if (Number.isFinite(coercedValue)) {
            return coercedValue !== 0;
          }
          throw new _GraphQLError.GraphQLError(
            `Boolean cannot represent a non boolean value: ${(0, _inspect.inspect)(
              coercedValue
            )}`
          );
        },
        parseValue(inputValue) {
          if (typeof inputValue !== "boolean") {
            throw new _GraphQLError.GraphQLError(
              `Boolean cannot represent a non boolean value: ${(0, _inspect.inspect)(
                inputValue
              )}`
            );
          }
          return inputValue;
        },
        parseLiteral(valueNode) {
          if (valueNode.kind !== _kinds.Kind.BOOLEAN) {
            throw new _GraphQLError.GraphQLError(
              `Boolean cannot represent a non boolean value: ${(0, _printer.print)(
                valueNode
              )}`,
              {
                nodes: valueNode
              }
            );
          }
          return valueNode.value;
        }
      });
      exports.GraphQLBoolean = GraphQLBoolean;
      var GraphQLID = new _definition.GraphQLScalarType({
        name: "ID",
        description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
        serialize(outputValue) {
          const coercedValue = serializeObject(outputValue);
          if (typeof coercedValue === "string") {
            return coercedValue;
          }
          if (Number.isInteger(coercedValue)) {
            return String(coercedValue);
          }
          throw new _GraphQLError.GraphQLError(
            `ID cannot represent value: ${(0, _inspect.inspect)(outputValue)}`
          );
        },
        parseValue(inputValue) {
          if (typeof inputValue === "string") {
            return inputValue;
          }
          if (typeof inputValue === "number" && Number.isInteger(inputValue)) {
            return inputValue.toString();
          }
          throw new _GraphQLError.GraphQLError(
            `ID cannot represent value: ${(0, _inspect.inspect)(inputValue)}`
          );
        },
        parseLiteral(valueNode) {
          if (valueNode.kind !== _kinds.Kind.STRING && valueNode.kind !== _kinds.Kind.INT) {
            throw new _GraphQLError.GraphQLError(
              "ID cannot represent a non-string and non-integer value: " + (0, _printer.print)(valueNode),
              {
                nodes: valueNode
              }
            );
          }
          return valueNode.value;
        }
      });
      exports.GraphQLID = GraphQLID;
      var specifiedScalarTypes = Object.freeze([
        GraphQLString,
        GraphQLInt,
        GraphQLFloat,
        GraphQLBoolean,
        GraphQLID
      ]);
      exports.specifiedScalarTypes = specifiedScalarTypes;
      function isSpecifiedScalarType(type) {
        return specifiedScalarTypes.some(({ name }) => type.name === name);
      }
      function serializeObject(outputValue) {
        if ((0, _isObjectLike.isObjectLike)(outputValue)) {
          if (typeof outputValue.valueOf === "function") {
            const valueOfResult = outputValue.valueOf();
            if (!(0, _isObjectLike.isObjectLike)(valueOfResult)) {
              return valueOfResult;
            }
          }
          if (typeof outputValue.toJSON === "function") {
            return outputValue.toJSON();
          }
        }
        return outputValue;
      }
    }
  });

  // ../../node_modules/graphql/type/directives.js
  var require_directives = __commonJS({
    "../../node_modules/graphql/type/directives.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GraphQLSpecifiedByDirective = exports.GraphQLSkipDirective = exports.GraphQLIncludeDirective = exports.GraphQLDirective = exports.GraphQLDeprecatedDirective = exports.DEFAULT_DEPRECATION_REASON = void 0;
      exports.assertDirective = assertDirective;
      exports.isDirective = isDirective;
      exports.isSpecifiedDirective = isSpecifiedDirective;
      exports.specifiedDirectives = void 0;
      var _devAssert = require_devAssert();
      var _inspect = require_inspect();
      var _instanceOf = require_instanceOf();
      var _isObjectLike = require_isObjectLike();
      var _toObjMap = require_toObjMap();
      var _directiveLocation = require_directiveLocation();
      var _assertName = require_assertName();
      var _definition = require_definition();
      var _scalars = require_scalars();
      function isDirective(directive) {
        return (0, _instanceOf.instanceOf)(directive, GraphQLDirective);
      }
      function assertDirective(directive) {
        if (!isDirective(directive)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(directive)} to be a GraphQL directive.`
          );
        }
        return directive;
      }
      var GraphQLDirective = class {
        constructor(config) {
          var _config$isRepeatable, _config$args;
          this.name = (0, _assertName.assertName)(config.name);
          this.description = config.description;
          this.locations = config.locations;
          this.isRepeatable = (_config$isRepeatable = config.isRepeatable) !== null && _config$isRepeatable !== void 0 ? _config$isRepeatable : false;
          this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
          this.astNode = config.astNode;
          Array.isArray(config.locations) || (0, _devAssert.devAssert)(
            false,
            `@${config.name} locations must be an Array.`
          );
          const args = (_config$args = config.args) !== null && _config$args !== void 0 ? _config$args : {};
          (0, _isObjectLike.isObjectLike)(args) && !Array.isArray(args) || (0, _devAssert.devAssert)(
            false,
            `@${config.name} args must be an object with argument names as keys.`
          );
          this.args = (0, _definition.defineArguments)(args);
        }
        get [Symbol.toStringTag]() {
          return "GraphQLDirective";
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            locations: this.locations,
            args: (0, _definition.argsToArgsConfig)(this.args),
            isRepeatable: this.isRepeatable,
            extensions: this.extensions,
            astNode: this.astNode
          };
        }
        toString() {
          return "@" + this.name;
        }
        toJSON() {
          return this.toString();
        }
      };
      exports.GraphQLDirective = GraphQLDirective;
      var GraphQLIncludeDirective = new GraphQLDirective({
        name: "include",
        description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
        locations: [
          _directiveLocation.DirectiveLocation.FIELD,
          _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
          _directiveLocation.DirectiveLocation.INLINE_FRAGMENT
        ],
        args: {
          if: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
            description: "Included when true."
          }
        }
      });
      exports.GraphQLIncludeDirective = GraphQLIncludeDirective;
      var GraphQLSkipDirective = new GraphQLDirective({
        name: "skip",
        description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
        locations: [
          _directiveLocation.DirectiveLocation.FIELD,
          _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
          _directiveLocation.DirectiveLocation.INLINE_FRAGMENT
        ],
        args: {
          if: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
            description: "Skipped when true."
          }
        }
      });
      exports.GraphQLSkipDirective = GraphQLSkipDirective;
      var DEFAULT_DEPRECATION_REASON = "No longer supported";
      exports.DEFAULT_DEPRECATION_REASON = DEFAULT_DEPRECATION_REASON;
      var GraphQLDeprecatedDirective = new GraphQLDirective({
        name: "deprecated",
        description: "Marks an element of a GraphQL schema as no longer supported.",
        locations: [
          _directiveLocation.DirectiveLocation.FIELD_DEFINITION,
          _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION,
          _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION,
          _directiveLocation.DirectiveLocation.ENUM_VALUE
        ],
        args: {
          reason: {
            type: _scalars.GraphQLString,
            description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
            defaultValue: DEFAULT_DEPRECATION_REASON
          }
        }
      });
      exports.GraphQLDeprecatedDirective = GraphQLDeprecatedDirective;
      var GraphQLSpecifiedByDirective = new GraphQLDirective({
        name: "specifiedBy",
        description: "Exposes a URL that specifies the behavior of this scalar.",
        locations: [_directiveLocation.DirectiveLocation.SCALAR],
        args: {
          url: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
            description: "The URL that specifies the behavior of this scalar."
          }
        }
      });
      exports.GraphQLSpecifiedByDirective = GraphQLSpecifiedByDirective;
      var specifiedDirectives = Object.freeze([
        GraphQLIncludeDirective,
        GraphQLSkipDirective,
        GraphQLDeprecatedDirective,
        GraphQLSpecifiedByDirective
      ]);
      exports.specifiedDirectives = specifiedDirectives;
      function isSpecifiedDirective(directive) {
        return specifiedDirectives.some(({ name }) => name === directive.name);
      }
    }
  });

  // ../../node_modules/graphql/jsutils/isIterableObject.js
  var require_isIterableObject = __commonJS({
    "../../node_modules/graphql/jsutils/isIterableObject.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isIterableObject = isIterableObject;
      function isIterableObject(maybeIterable) {
        return typeof maybeIterable === "object" && typeof (maybeIterable === null || maybeIterable === void 0 ? void 0 : maybeIterable[Symbol.iterator]) === "function";
      }
    }
  });

  // ../../node_modules/graphql/utilities/astFromValue.js
  var require_astFromValue = __commonJS({
    "../../node_modules/graphql/utilities/astFromValue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.astFromValue = astFromValue;
      var _inspect = require_inspect();
      var _invariant = require_invariant();
      var _isIterableObject = require_isIterableObject();
      var _isObjectLike = require_isObjectLike();
      var _kinds = require_kinds();
      var _definition = require_definition();
      var _scalars = require_scalars();
      function astFromValue(value, type) {
        if ((0, _definition.isNonNullType)(type)) {
          const astValue = astFromValue(value, type.ofType);
          if ((astValue === null || astValue === void 0 ? void 0 : astValue.kind) === _kinds.Kind.NULL) {
            return null;
          }
          return astValue;
        }
        if (value === null) {
          return {
            kind: _kinds.Kind.NULL
          };
        }
        if (value === void 0) {
          return null;
        }
        if ((0, _definition.isListType)(type)) {
          const itemType = type.ofType;
          if ((0, _isIterableObject.isIterableObject)(value)) {
            const valuesNodes = [];
            for (const item of value) {
              const itemNode = astFromValue(item, itemType);
              if (itemNode != null) {
                valuesNodes.push(itemNode);
              }
            }
            return {
              kind: _kinds.Kind.LIST,
              values: valuesNodes
            };
          }
          return astFromValue(value, itemType);
        }
        if ((0, _definition.isInputObjectType)(type)) {
          if (!(0, _isObjectLike.isObjectLike)(value)) {
            return null;
          }
          const fieldNodes = [];
          for (const field of Object.values(type.getFields())) {
            const fieldValue = astFromValue(value[field.name], field.type);
            if (fieldValue) {
              fieldNodes.push({
                kind: _kinds.Kind.OBJECT_FIELD,
                name: {
                  kind: _kinds.Kind.NAME,
                  value: field.name
                },
                value: fieldValue
              });
            }
          }
          return {
            kind: _kinds.Kind.OBJECT,
            fields: fieldNodes
          };
        }
        if ((0, _definition.isLeafType)(type)) {
          const serialized = type.serialize(value);
          if (serialized == null) {
            return null;
          }
          if (typeof serialized === "boolean") {
            return {
              kind: _kinds.Kind.BOOLEAN,
              value: serialized
            };
          }
          if (typeof serialized === "number" && Number.isFinite(serialized)) {
            const stringNum = String(serialized);
            return integerStringRegExp.test(stringNum) ? {
              kind: _kinds.Kind.INT,
              value: stringNum
            } : {
              kind: _kinds.Kind.FLOAT,
              value: stringNum
            };
          }
          if (typeof serialized === "string") {
            if ((0, _definition.isEnumType)(type)) {
              return {
                kind: _kinds.Kind.ENUM,
                value: serialized
              };
            }
            if (type === _scalars.GraphQLID && integerStringRegExp.test(serialized)) {
              return {
                kind: _kinds.Kind.INT,
                value: serialized
              };
            }
            return {
              kind: _kinds.Kind.STRING,
              value: serialized
            };
          }
          throw new TypeError(
            `Cannot convert value to AST: ${(0, _inspect.inspect)(serialized)}.`
          );
        }
        (0, _invariant.invariant)(
          false,
          "Unexpected input type: " + (0, _inspect.inspect)(type)
        );
      }
      var integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;
    }
  });

  // ../../node_modules/graphql/type/introspection.js
  var require_introspection = __commonJS({
    "../../node_modules/graphql/type/introspection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.introspectionTypes = exports.__TypeKind = exports.__Type = exports.__Schema = exports.__InputValue = exports.__Field = exports.__EnumValue = exports.__DirectiveLocation = exports.__Directive = exports.TypeNameMetaFieldDef = exports.TypeMetaFieldDef = exports.TypeKind = exports.SchemaMetaFieldDef = void 0;
      exports.isIntrospectionType = isIntrospectionType;
      var _inspect = require_inspect();
      var _invariant = require_invariant();
      var _directiveLocation = require_directiveLocation();
      var _printer = require_printer();
      var _astFromValue = require_astFromValue();
      var _definition = require_definition();
      var _scalars = require_scalars();
      var __Schema = new _definition.GraphQLObjectType({
        name: "__Schema",
        description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
        fields: () => ({
          description: {
            type: _scalars.GraphQLString,
            resolve: (schema) => schema.description
          },
          types: {
            description: "A list of all types supported by this server.",
            type: new _definition.GraphQLNonNull(
              new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type))
            ),
            resolve(schema) {
              return Object.values(schema.getTypeMap());
            }
          },
          queryType: {
            description: "The type that query operations will be rooted at.",
            type: new _definition.GraphQLNonNull(__Type),
            resolve: (schema) => schema.getQueryType()
          },
          mutationType: {
            description: "If this server supports mutation, the type that mutation operations will be rooted at.",
            type: __Type,
            resolve: (schema) => schema.getMutationType()
          },
          subscriptionType: {
            description: "If this server support subscription, the type that subscription operations will be rooted at.",
            type: __Type,
            resolve: (schema) => schema.getSubscriptionType()
          },
          directives: {
            description: "A list of all directives supported by this server.",
            type: new _definition.GraphQLNonNull(
              new _definition.GraphQLList(
                new _definition.GraphQLNonNull(__Directive)
              )
            ),
            resolve: (schema) => schema.getDirectives()
          }
        })
      });
      exports.__Schema = __Schema;
      var __Directive = new _definition.GraphQLObjectType({
        name: "__Directive",
        description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
        fields: () => ({
          name: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
            resolve: (directive) => directive.name
          },
          description: {
            type: _scalars.GraphQLString,
            resolve: (directive) => directive.description
          },
          isRepeatable: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
            resolve: (directive) => directive.isRepeatable
          },
          locations: {
            type: new _definition.GraphQLNonNull(
              new _definition.GraphQLList(
                new _definition.GraphQLNonNull(__DirectiveLocation)
              )
            ),
            resolve: (directive) => directive.locations
          },
          args: {
            type: new _definition.GraphQLNonNull(
              new _definition.GraphQLList(
                new _definition.GraphQLNonNull(__InputValue)
              )
            ),
            args: {
              includeDeprecated: {
                type: _scalars.GraphQLBoolean,
                defaultValue: false
              }
            },
            resolve(field, { includeDeprecated }) {
              return includeDeprecated ? field.args : field.args.filter((arg) => arg.deprecationReason == null);
            }
          }
        })
      });
      exports.__Directive = __Directive;
      var __DirectiveLocation = new _definition.GraphQLEnumType({
        name: "__DirectiveLocation",
        description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
        values: {
          QUERY: {
            value: _directiveLocation.DirectiveLocation.QUERY,
            description: "Location adjacent to a query operation."
          },
          MUTATION: {
            value: _directiveLocation.DirectiveLocation.MUTATION,
            description: "Location adjacent to a mutation operation."
          },
          SUBSCRIPTION: {
            value: _directiveLocation.DirectiveLocation.SUBSCRIPTION,
            description: "Location adjacent to a subscription operation."
          },
          FIELD: {
            value: _directiveLocation.DirectiveLocation.FIELD,
            description: "Location adjacent to a field."
          },
          FRAGMENT_DEFINITION: {
            value: _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION,
            description: "Location adjacent to a fragment definition."
          },
          FRAGMENT_SPREAD: {
            value: _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
            description: "Location adjacent to a fragment spread."
          },
          INLINE_FRAGMENT: {
            value: _directiveLocation.DirectiveLocation.INLINE_FRAGMENT,
            description: "Location adjacent to an inline fragment."
          },
          VARIABLE_DEFINITION: {
            value: _directiveLocation.DirectiveLocation.VARIABLE_DEFINITION,
            description: "Location adjacent to a variable definition."
          },
          SCHEMA: {
            value: _directiveLocation.DirectiveLocation.SCHEMA,
            description: "Location adjacent to a schema definition."
          },
          SCALAR: {
            value: _directiveLocation.DirectiveLocation.SCALAR,
            description: "Location adjacent to a scalar definition."
          },
          OBJECT: {
            value: _directiveLocation.DirectiveLocation.OBJECT,
            description: "Location adjacent to an object type definition."
          },
          FIELD_DEFINITION: {
            value: _directiveLocation.DirectiveLocation.FIELD_DEFINITION,
            description: "Location adjacent to a field definition."
          },
          ARGUMENT_DEFINITION: {
            value: _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION,
            description: "Location adjacent to an argument definition."
          },
          INTERFACE: {
            value: _directiveLocation.DirectiveLocation.INTERFACE,
            description: "Location adjacent to an interface definition."
          },
          UNION: {
            value: _directiveLocation.DirectiveLocation.UNION,
            description: "Location adjacent to a union definition."
          },
          ENUM: {
            value: _directiveLocation.DirectiveLocation.ENUM,
            description: "Location adjacent to an enum definition."
          },
          ENUM_VALUE: {
            value: _directiveLocation.DirectiveLocation.ENUM_VALUE,
            description: "Location adjacent to an enum value definition."
          },
          INPUT_OBJECT: {
            value: _directiveLocation.DirectiveLocation.INPUT_OBJECT,
            description: "Location adjacent to an input object type definition."
          },
          INPUT_FIELD_DEFINITION: {
            value: _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION,
            description: "Location adjacent to an input object field definition."
          }
        }
      });
      exports.__DirectiveLocation = __DirectiveLocation;
      var __Type = new _definition.GraphQLObjectType({
        name: "__Type",
        description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
        fields: () => ({
          kind: {
            type: new _definition.GraphQLNonNull(__TypeKind),
            resolve(type) {
              if ((0, _definition.isScalarType)(type)) {
                return TypeKind.SCALAR;
              }
              if ((0, _definition.isObjectType)(type)) {
                return TypeKind.OBJECT;
              }
              if ((0, _definition.isInterfaceType)(type)) {
                return TypeKind.INTERFACE;
              }
              if ((0, _definition.isUnionType)(type)) {
                return TypeKind.UNION;
              }
              if ((0, _definition.isEnumType)(type)) {
                return TypeKind.ENUM;
              }
              if ((0, _definition.isInputObjectType)(type)) {
                return TypeKind.INPUT_OBJECT;
              }
              if ((0, _definition.isListType)(type)) {
                return TypeKind.LIST;
              }
              if ((0, _definition.isNonNullType)(type)) {
                return TypeKind.NON_NULL;
              }
              (0, _invariant.invariant)(
                false,
                `Unexpected type: "${(0, _inspect.inspect)(type)}".`
              );
            }
          },
          name: {
            type: _scalars.GraphQLString,
            resolve: (type) => "name" in type ? type.name : void 0
          },
          description: {
            type: _scalars.GraphQLString,
            resolve: (type) => "description" in type ? type.description : void 0
          },
          specifiedByURL: {
            type: _scalars.GraphQLString,
            resolve: (obj) => "specifiedByURL" in obj ? obj.specifiedByURL : void 0
          },
          fields: {
            type: new _definition.GraphQLList(
              new _definition.GraphQLNonNull(__Field)
            ),
            args: {
              includeDeprecated: {
                type: _scalars.GraphQLBoolean,
                defaultValue: false
              }
            },
            resolve(type, { includeDeprecated }) {
              if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
                const fields = Object.values(type.getFields());
                return includeDeprecated ? fields : fields.filter((field) => field.deprecationReason == null);
              }
            }
          },
          interfaces: {
            type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
            resolve(type) {
              if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
                return type.getInterfaces();
              }
            }
          },
          possibleTypes: {
            type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
            resolve(type, _args, _context, { schema }) {
              if ((0, _definition.isAbstractType)(type)) {
                return schema.getPossibleTypes(type);
              }
            }
          },
          enumValues: {
            type: new _definition.GraphQLList(
              new _definition.GraphQLNonNull(__EnumValue)
            ),
            args: {
              includeDeprecated: {
                type: _scalars.GraphQLBoolean,
                defaultValue: false
              }
            },
            resolve(type, { includeDeprecated }) {
              if ((0, _definition.isEnumType)(type)) {
                const values = type.getValues();
                return includeDeprecated ? values : values.filter((field) => field.deprecationReason == null);
              }
            }
          },
          inputFields: {
            type: new _definition.GraphQLList(
              new _definition.GraphQLNonNull(__InputValue)
            ),
            args: {
              includeDeprecated: {
                type: _scalars.GraphQLBoolean,
                defaultValue: false
              }
            },
            resolve(type, { includeDeprecated }) {
              if ((0, _definition.isInputObjectType)(type)) {
                const values = Object.values(type.getFields());
                return includeDeprecated ? values : values.filter((field) => field.deprecationReason == null);
              }
            }
          },
          ofType: {
            type: __Type,
            resolve: (type) => "ofType" in type ? type.ofType : void 0
          }
        })
      });
      exports.__Type = __Type;
      var __Field = new _definition.GraphQLObjectType({
        name: "__Field",
        description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
        fields: () => ({
          name: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
            resolve: (field) => field.name
          },
          description: {
            type: _scalars.GraphQLString,
            resolve: (field) => field.description
          },
          args: {
            type: new _definition.GraphQLNonNull(
              new _definition.GraphQLList(
                new _definition.GraphQLNonNull(__InputValue)
              )
            ),
            args: {
              includeDeprecated: {
                type: _scalars.GraphQLBoolean,
                defaultValue: false
              }
            },
            resolve(field, { includeDeprecated }) {
              return includeDeprecated ? field.args : field.args.filter((arg) => arg.deprecationReason == null);
            }
          },
          type: {
            type: new _definition.GraphQLNonNull(__Type),
            resolve: (field) => field.type
          },
          isDeprecated: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
            resolve: (field) => field.deprecationReason != null
          },
          deprecationReason: {
            type: _scalars.GraphQLString,
            resolve: (field) => field.deprecationReason
          }
        })
      });
      exports.__Field = __Field;
      var __InputValue = new _definition.GraphQLObjectType({
        name: "__InputValue",
        description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
        fields: () => ({
          name: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
            resolve: (inputValue) => inputValue.name
          },
          description: {
            type: _scalars.GraphQLString,
            resolve: (inputValue) => inputValue.description
          },
          type: {
            type: new _definition.GraphQLNonNull(__Type),
            resolve: (inputValue) => inputValue.type
          },
          defaultValue: {
            type: _scalars.GraphQLString,
            description: "A GraphQL-formatted string representing the default value for this input value.",
            resolve(inputValue) {
              const { type, defaultValue } = inputValue;
              const valueAST = (0, _astFromValue.astFromValue)(defaultValue, type);
              return valueAST ? (0, _printer.print)(valueAST) : null;
            }
          },
          isDeprecated: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
            resolve: (field) => field.deprecationReason != null
          },
          deprecationReason: {
            type: _scalars.GraphQLString,
            resolve: (obj) => obj.deprecationReason
          }
        })
      });
      exports.__InputValue = __InputValue;
      var __EnumValue = new _definition.GraphQLObjectType({
        name: "__EnumValue",
        description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
        fields: () => ({
          name: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
            resolve: (enumValue) => enumValue.name
          },
          description: {
            type: _scalars.GraphQLString,
            resolve: (enumValue) => enumValue.description
          },
          isDeprecated: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
            resolve: (enumValue) => enumValue.deprecationReason != null
          },
          deprecationReason: {
            type: _scalars.GraphQLString,
            resolve: (enumValue) => enumValue.deprecationReason
          }
        })
      });
      exports.__EnumValue = __EnumValue;
      var TypeKind;
      exports.TypeKind = TypeKind;
      (function(TypeKind2) {
        TypeKind2["SCALAR"] = "SCALAR";
        TypeKind2["OBJECT"] = "OBJECT";
        TypeKind2["INTERFACE"] = "INTERFACE";
        TypeKind2["UNION"] = "UNION";
        TypeKind2["ENUM"] = "ENUM";
        TypeKind2["INPUT_OBJECT"] = "INPUT_OBJECT";
        TypeKind2["LIST"] = "LIST";
        TypeKind2["NON_NULL"] = "NON_NULL";
      })(TypeKind || (exports.TypeKind = TypeKind = {}));
      var __TypeKind = new _definition.GraphQLEnumType({
        name: "__TypeKind",
        description: "An enum describing what kind of type a given `__Type` is.",
        values: {
          SCALAR: {
            value: TypeKind.SCALAR,
            description: "Indicates this type is a scalar."
          },
          OBJECT: {
            value: TypeKind.OBJECT,
            description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
          },
          INTERFACE: {
            value: TypeKind.INTERFACE,
            description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
          },
          UNION: {
            value: TypeKind.UNION,
            description: "Indicates this type is a union. `possibleTypes` is a valid field."
          },
          ENUM: {
            value: TypeKind.ENUM,
            description: "Indicates this type is an enum. `enumValues` is a valid field."
          },
          INPUT_OBJECT: {
            value: TypeKind.INPUT_OBJECT,
            description: "Indicates this type is an input object. `inputFields` is a valid field."
          },
          LIST: {
            value: TypeKind.LIST,
            description: "Indicates this type is a list. `ofType` is a valid field."
          },
          NON_NULL: {
            value: TypeKind.NON_NULL,
            description: "Indicates this type is a non-null. `ofType` is a valid field."
          }
        }
      });
      exports.__TypeKind = __TypeKind;
      var SchemaMetaFieldDef = {
        name: "__schema",
        type: new _definition.GraphQLNonNull(__Schema),
        description: "Access the current type schema of this server.",
        args: [],
        resolve: (_source, _args, _context, { schema }) => schema,
        deprecationReason: void 0,
        extensions: /* @__PURE__ */ Object.create(null),
        astNode: void 0
      };
      exports.SchemaMetaFieldDef = SchemaMetaFieldDef;
      var TypeMetaFieldDef = {
        name: "__type",
        type: __Type,
        description: "Request the type information of a single type.",
        args: [
          {
            name: "name",
            description: void 0,
            type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
            defaultValue: void 0,
            deprecationReason: void 0,
            extensions: /* @__PURE__ */ Object.create(null),
            astNode: void 0
          }
        ],
        resolve: (_source, { name }, _context, { schema }) => schema.getType(name),
        deprecationReason: void 0,
        extensions: /* @__PURE__ */ Object.create(null),
        astNode: void 0
      };
      exports.TypeMetaFieldDef = TypeMetaFieldDef;
      var TypeNameMetaFieldDef = {
        name: "__typename",
        type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
        description: "The name of the current Object type at runtime.",
        args: [],
        resolve: (_source, _args, _context, { parentType }) => parentType.name,
        deprecationReason: void 0,
        extensions: /* @__PURE__ */ Object.create(null),
        astNode: void 0
      };
      exports.TypeNameMetaFieldDef = TypeNameMetaFieldDef;
      var introspectionTypes = Object.freeze([
        __Schema,
        __Directive,
        __DirectiveLocation,
        __Type,
        __Field,
        __InputValue,
        __EnumValue,
        __TypeKind
      ]);
      exports.introspectionTypes = introspectionTypes;
      function isIntrospectionType(type) {
        return introspectionTypes.some(({ name }) => type.name === name);
      }
    }
  });

  // ../../node_modules/graphql/type/schema.js
  var require_schema = __commonJS({
    "../../node_modules/graphql/type/schema.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GraphQLSchema = void 0;
      exports.assertSchema = assertSchema;
      exports.isSchema = isSchema;
      var _devAssert = require_devAssert();
      var _inspect = require_inspect();
      var _instanceOf = require_instanceOf();
      var _isObjectLike = require_isObjectLike();
      var _toObjMap = require_toObjMap();
      var _ast = require_ast();
      var _definition = require_definition();
      var _directives = require_directives();
      var _introspection = require_introspection();
      function isSchema(schema) {
        return (0, _instanceOf.instanceOf)(schema, GraphQLSchema);
      }
      function assertSchema(schema) {
        if (!isSchema(schema)) {
          throw new Error(
            `Expected ${(0, _inspect.inspect)(schema)} to be a GraphQL schema.`
          );
        }
        return schema;
      }
      var GraphQLSchema = class {
        constructor(config) {
          var _config$extensionASTN, _config$directives;
          this.__validationErrors = config.assumeValid === true ? [] : void 0;
          (0, _isObjectLike.isObjectLike)(config) || (0, _devAssert.devAssert)(false, "Must provide configuration object.");
          !config.types || Array.isArray(config.types) || (0, _devAssert.devAssert)(
            false,
            `"types" must be Array if provided but got: ${(0, _inspect.inspect)(
              config.types
            )}.`
          );
          !config.directives || Array.isArray(config.directives) || (0, _devAssert.devAssert)(
            false,
            `"directives" must be Array if provided but got: ${(0, _inspect.inspect)(config.directives)}.`
          );
          this.description = config.description;
          this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
          this.astNode = config.astNode;
          this.extensionASTNodes = (_config$extensionASTN = config.extensionASTNodes) !== null && _config$extensionASTN !== void 0 ? _config$extensionASTN : [];
          this._queryType = config.query;
          this._mutationType = config.mutation;
          this._subscriptionType = config.subscription;
          this._directives = (_config$directives = config.directives) !== null && _config$directives !== void 0 ? _config$directives : _directives.specifiedDirectives;
          const allReferencedTypes = new Set(config.types);
          if (config.types != null) {
            for (const type of config.types) {
              allReferencedTypes.delete(type);
              collectReferencedTypes(type, allReferencedTypes);
            }
          }
          if (this._queryType != null) {
            collectReferencedTypes(this._queryType, allReferencedTypes);
          }
          if (this._mutationType != null) {
            collectReferencedTypes(this._mutationType, allReferencedTypes);
          }
          if (this._subscriptionType != null) {
            collectReferencedTypes(this._subscriptionType, allReferencedTypes);
          }
          for (const directive of this._directives) {
            if ((0, _directives.isDirective)(directive)) {
              for (const arg of directive.args) {
                collectReferencedTypes(arg.type, allReferencedTypes);
              }
            }
          }
          collectReferencedTypes(_introspection.__Schema, allReferencedTypes);
          this._typeMap = /* @__PURE__ */ Object.create(null);
          this._subTypeMap = /* @__PURE__ */ Object.create(null);
          this._implementationsMap = /* @__PURE__ */ Object.create(null);
          for (const namedType of allReferencedTypes) {
            if (namedType == null) {
              continue;
            }
            const typeName = namedType.name;
            typeName || (0, _devAssert.devAssert)(
              false,
              "One of the provided types for building the Schema is missing a name."
            );
            if (this._typeMap[typeName] !== void 0) {
              throw new Error(
                `Schema must contain uniquely named types but contains multiple types named "${typeName}".`
              );
            }
            this._typeMap[typeName] = namedType;
            if ((0, _definition.isInterfaceType)(namedType)) {
              for (const iface of namedType.getInterfaces()) {
                if ((0, _definition.isInterfaceType)(iface)) {
                  let implementations = this._implementationsMap[iface.name];
                  if (implementations === void 0) {
                    implementations = this._implementationsMap[iface.name] = {
                      objects: [],
                      interfaces: []
                    };
                  }
                  implementations.interfaces.push(namedType);
                }
              }
            } else if ((0, _definition.isObjectType)(namedType)) {
              for (const iface of namedType.getInterfaces()) {
                if ((0, _definition.isInterfaceType)(iface)) {
                  let implementations = this._implementationsMap[iface.name];
                  if (implementations === void 0) {
                    implementations = this._implementationsMap[iface.name] = {
                      objects: [],
                      interfaces: []
                    };
                  }
                  implementations.objects.push(namedType);
                }
              }
            }
          }
        }
        get [Symbol.toStringTag]() {
          return "GraphQLSchema";
        }
        getQueryType() {
          return this._queryType;
        }
        getMutationType() {
          return this._mutationType;
        }
        getSubscriptionType() {
          return this._subscriptionType;
        }
        getRootType(operation) {
          switch (operation) {
            case _ast.OperationTypeNode.QUERY:
              return this.getQueryType();
            case _ast.OperationTypeNode.MUTATION:
              return this.getMutationType();
            case _ast.OperationTypeNode.SUBSCRIPTION:
              return this.getSubscriptionType();
          }
        }
        getTypeMap() {
          return this._typeMap;
        }
        getType(name) {
          return this.getTypeMap()[name];
        }
        getPossibleTypes(abstractType) {
          return (0, _definition.isUnionType)(abstractType) ? abstractType.getTypes() : this.getImplementations(abstractType).objects;
        }
        getImplementations(interfaceType) {
          const implementations = this._implementationsMap[interfaceType.name];
          return implementations !== null && implementations !== void 0 ? implementations : {
            objects: [],
            interfaces: []
          };
        }
        isSubType(abstractType, maybeSubType) {
          let map = this._subTypeMap[abstractType.name];
          if (map === void 0) {
            map = /* @__PURE__ */ Object.create(null);
            if ((0, _definition.isUnionType)(abstractType)) {
              for (const type of abstractType.getTypes()) {
                map[type.name] = true;
              }
            } else {
              const implementations = this.getImplementations(abstractType);
              for (const type of implementations.objects) {
                map[type.name] = true;
              }
              for (const type of implementations.interfaces) {
                map[type.name] = true;
              }
            }
            this._subTypeMap[abstractType.name] = map;
          }
          return map[maybeSubType.name] !== void 0;
        }
        getDirectives() {
          return this._directives;
        }
        getDirective(name) {
          return this.getDirectives().find((directive) => directive.name === name);
        }
        toConfig() {
          return {
            description: this.description,
            query: this.getQueryType(),
            mutation: this.getMutationType(),
            subscription: this.getSubscriptionType(),
            types: Object.values(this.getTypeMap()),
            directives: this.getDirectives(),
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
            assumeValid: this.__validationErrors !== void 0
          };
        }
      };
      exports.GraphQLSchema = GraphQLSchema;
      function collectReferencedTypes(type, typeSet) {
        const namedType = (0, _definition.getNamedType)(type);
        if (!typeSet.has(namedType)) {
          typeSet.add(namedType);
          if ((0, _definition.isUnionType)(namedType)) {
            for (const memberType of namedType.getTypes()) {
              collectReferencedTypes(memberType, typeSet);
            }
          } else if ((0, _definition.isObjectType)(namedType) || (0, _definition.isInterfaceType)(namedType)) {
            for (const interfaceType of namedType.getInterfaces()) {
              collectReferencedTypes(interfaceType, typeSet);
            }
            for (const field of Object.values(namedType.getFields())) {
              collectReferencedTypes(field.type, typeSet);
              for (const arg of field.args) {
                collectReferencedTypes(arg.type, typeSet);
              }
            }
          } else if ((0, _definition.isInputObjectType)(namedType)) {
            for (const field of Object.values(namedType.getFields())) {
              collectReferencedTypes(field.type, typeSet);
            }
          }
        }
        return typeSet;
      }
    }
  });

  // ../../node_modules/graphql/type/validate.js
  var require_validate = __commonJS({
    "../../node_modules/graphql/type/validate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.assertValidSchema = assertValidSchema;
      exports.validateSchema = validateSchema;
      var _inspect = require_inspect();
      var _GraphQLError = require_GraphQLError();
      var _ast = require_ast();
      var _typeComparators = require_typeComparators();
      var _definition = require_definition();
      var _directives = require_directives();
      var _introspection = require_introspection();
      var _schema = require_schema();
      function validateSchema(schema) {
        (0, _schema.assertSchema)(schema);
        if (schema.__validationErrors) {
          return schema.__validationErrors;
        }
        const context = new SchemaValidationContext(schema);
        validateRootTypes(context);
        validateDirectives(context);
        validateTypes(context);
        const errors = context.getErrors();
        schema.__validationErrors = errors;
        return errors;
      }
      function assertValidSchema(schema) {
        const errors = validateSchema(schema);
        if (errors.length !== 0) {
          throw new Error(errors.map((error) => error.message).join("\n\n"));
        }
      }
      var SchemaValidationContext = class {
        constructor(schema) {
          this._errors = [];
          this.schema = schema;
        }
        reportError(message, nodes) {
          const _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;
          this._errors.push(
            new _GraphQLError.GraphQLError(message, {
              nodes: _nodes
            })
          );
        }
        getErrors() {
          return this._errors;
        }
      };
      function validateRootTypes(context) {
        const schema = context.schema;
        const queryType = schema.getQueryType();
        if (!queryType) {
          context.reportError("Query root type must be provided.", schema.astNode);
        } else if (!(0, _definition.isObjectType)(queryType)) {
          var _getOperationTypeNode;
          context.reportError(
            `Query root type must be Object type, it cannot be ${(0, _inspect.inspect)(queryType)}.`,
            (_getOperationTypeNode = getOperationTypeNode(
              schema,
              _ast.OperationTypeNode.QUERY
            )) !== null && _getOperationTypeNode !== void 0 ? _getOperationTypeNode : queryType.astNode
          );
        }
        const mutationType = schema.getMutationType();
        if (mutationType && !(0, _definition.isObjectType)(mutationType)) {
          var _getOperationTypeNode2;
          context.reportError(
            `Mutation root type must be Object type if provided, it cannot be ${(0, _inspect.inspect)(mutationType)}.`,
            (_getOperationTypeNode2 = getOperationTypeNode(
              schema,
              _ast.OperationTypeNode.MUTATION
            )) !== null && _getOperationTypeNode2 !== void 0 ? _getOperationTypeNode2 : mutationType.astNode
          );
        }
        const subscriptionType = schema.getSubscriptionType();
        if (subscriptionType && !(0, _definition.isObjectType)(subscriptionType)) {
          var _getOperationTypeNode3;
          context.reportError(
            `Subscription root type must be Object type if provided, it cannot be ${(0, _inspect.inspect)(subscriptionType)}.`,
            (_getOperationTypeNode3 = getOperationTypeNode(
              schema,
              _ast.OperationTypeNode.SUBSCRIPTION
            )) !== null && _getOperationTypeNode3 !== void 0 ? _getOperationTypeNode3 : subscriptionType.astNode
          );
        }
      }
      function getOperationTypeNode(schema, operation) {
        var _flatMap$find;
        return (_flatMap$find = [schema.astNode, ...schema.extensionASTNodes].flatMap(
          (schemaNode) => {
            var _schemaNode$operation;
            return (_schemaNode$operation = schemaNode === null || schemaNode === void 0 ? void 0 : schemaNode.operationTypes) !== null && _schemaNode$operation !== void 0 ? _schemaNode$operation : [];
          }
        ).find((operationNode) => operationNode.operation === operation)) === null || _flatMap$find === void 0 ? void 0 : _flatMap$find.type;
      }
      function validateDirectives(context) {
        for (const directive of context.schema.getDirectives()) {
          if (!(0, _directives.isDirective)(directive)) {
            context.reportError(
              `Expected directive but got: ${(0, _inspect.inspect)(directive)}.`,
              directive === null || directive === void 0 ? void 0 : directive.astNode
            );
            continue;
          }
          validateName(context, directive);
          for (const arg of directive.args) {
            validateName(context, arg);
            if (!(0, _definition.isInputType)(arg.type)) {
              context.reportError(
                `The type of @${directive.name}(${arg.name}:) must be Input Type but got: ${(0, _inspect.inspect)(arg.type)}.`,
                arg.astNode
              );
            }
            if ((0, _definition.isRequiredArgument)(arg) && arg.deprecationReason != null) {
              var _arg$astNode;
              context.reportError(
                `Required argument @${directive.name}(${arg.name}:) cannot be deprecated.`,
                [
                  getDeprecatedDirectiveNode(arg.astNode),
                  (_arg$astNode = arg.astNode) === null || _arg$astNode === void 0 ? void 0 : _arg$astNode.type
                ]
              );
            }
          }
        }
      }
      function validateName(context, node) {
        if (node.name.startsWith("__")) {
          context.reportError(
            `Name "${node.name}" must not begin with "__", which is reserved by GraphQL introspection.`,
            node.astNode
          );
        }
      }
      function validateTypes(context) {
        const validateInputObjectCircularRefs = createInputObjectCircularRefsValidator(context);
        const typeMap = context.schema.getTypeMap();
        for (const type of Object.values(typeMap)) {
          if (!(0, _definition.isNamedType)(type)) {
            context.reportError(
              `Expected GraphQL named type but got: ${(0, _inspect.inspect)(type)}.`,
              type.astNode
            );
            continue;
          }
          if (!(0, _introspection.isIntrospectionType)(type)) {
            validateName(context, type);
          }
          if ((0, _definition.isObjectType)(type)) {
            validateFields(context, type);
            validateInterfaces(context, type);
          } else if ((0, _definition.isInterfaceType)(type)) {
            validateFields(context, type);
            validateInterfaces(context, type);
          } else if ((0, _definition.isUnionType)(type)) {
            validateUnionMembers(context, type);
          } else if ((0, _definition.isEnumType)(type)) {
            validateEnumValues(context, type);
          } else if ((0, _definition.isInputObjectType)(type)) {
            validateInputFields(context, type);
            validateInputObjectCircularRefs(type);
          }
        }
      }
      function validateFields(context, type) {
        const fields = Object.values(type.getFields());
        if (fields.length === 0) {
          context.reportError(`Type ${type.name} must define one or more fields.`, [
            type.astNode,
            ...type.extensionASTNodes
          ]);
        }
        for (const field of fields) {
          validateName(context, field);
          if (!(0, _definition.isOutputType)(field.type)) {
            var _field$astNode;
            context.reportError(
              `The type of ${type.name}.${field.name} must be Output Type but got: ${(0, _inspect.inspect)(field.type)}.`,
              (_field$astNode = field.astNode) === null || _field$astNode === void 0 ? void 0 : _field$astNode.type
            );
          }
          for (const arg of field.args) {
            const argName = arg.name;
            validateName(context, arg);
            if (!(0, _definition.isInputType)(arg.type)) {
              var _arg$astNode2;
              context.reportError(
                `The type of ${type.name}.${field.name}(${argName}:) must be Input Type but got: ${(0, _inspect.inspect)(arg.type)}.`,
                (_arg$astNode2 = arg.astNode) === null || _arg$astNode2 === void 0 ? void 0 : _arg$astNode2.type
              );
            }
            if ((0, _definition.isRequiredArgument)(arg) && arg.deprecationReason != null) {
              var _arg$astNode3;
              context.reportError(
                `Required argument ${type.name}.${field.name}(${argName}:) cannot be deprecated.`,
                [
                  getDeprecatedDirectiveNode(arg.astNode),
                  (_arg$astNode3 = arg.astNode) === null || _arg$astNode3 === void 0 ? void 0 : _arg$astNode3.type
                ]
              );
            }
          }
        }
      }
      function validateInterfaces(context, type) {
        const ifaceTypeNames = /* @__PURE__ */ Object.create(null);
        for (const iface of type.getInterfaces()) {
          if (!(0, _definition.isInterfaceType)(iface)) {
            context.reportError(
              `Type ${(0, _inspect.inspect)(
                type
              )} must only implement Interface types, it cannot implement ${(0, _inspect.inspect)(iface)}.`,
              getAllImplementsInterfaceNodes(type, iface)
            );
            continue;
          }
          if (type === iface) {
            context.reportError(
              `Type ${type.name} cannot implement itself because it would create a circular reference.`,
              getAllImplementsInterfaceNodes(type, iface)
            );
            continue;
          }
          if (ifaceTypeNames[iface.name]) {
            context.reportError(
              `Type ${type.name} can only implement ${iface.name} once.`,
              getAllImplementsInterfaceNodes(type, iface)
            );
            continue;
          }
          ifaceTypeNames[iface.name] = true;
          validateTypeImplementsAncestors(context, type, iface);
          validateTypeImplementsInterface(context, type, iface);
        }
      }
      function validateTypeImplementsInterface(context, type, iface) {
        const typeFieldMap = type.getFields();
        for (const ifaceField of Object.values(iface.getFields())) {
          const fieldName = ifaceField.name;
          const typeField = typeFieldMap[fieldName];
          if (!typeField) {
            context.reportError(
              `Interface field ${iface.name}.${fieldName} expected but ${type.name} does not provide it.`,
              [ifaceField.astNode, type.astNode, ...type.extensionASTNodes]
            );
            continue;
          }
          if (!(0, _typeComparators.isTypeSubTypeOf)(
            context.schema,
            typeField.type,
            ifaceField.type
          )) {
            var _ifaceField$astNode, _typeField$astNode;
            context.reportError(
              `Interface field ${iface.name}.${fieldName} expects type ${(0, _inspect.inspect)(ifaceField.type)} but ${type.name}.${fieldName} is type ${(0, _inspect.inspect)(typeField.type)}.`,
              [
                (_ifaceField$astNode = ifaceField.astNode) === null || _ifaceField$astNode === void 0 ? void 0 : _ifaceField$astNode.type,
                (_typeField$astNode = typeField.astNode) === null || _typeField$astNode === void 0 ? void 0 : _typeField$astNode.type
              ]
            );
          }
          for (const ifaceArg of ifaceField.args) {
            const argName = ifaceArg.name;
            const typeArg = typeField.args.find((arg) => arg.name === argName);
            if (!typeArg) {
              context.reportError(
                `Interface field argument ${iface.name}.${fieldName}(${argName}:) expected but ${type.name}.${fieldName} does not provide it.`,
                [ifaceArg.astNode, typeField.astNode]
              );
              continue;
            }
            if (!(0, _typeComparators.isEqualType)(ifaceArg.type, typeArg.type)) {
              var _ifaceArg$astNode, _typeArg$astNode;
              context.reportError(
                `Interface field argument ${iface.name}.${fieldName}(${argName}:) expects type ${(0, _inspect.inspect)(ifaceArg.type)} but ${type.name}.${fieldName}(${argName}:) is type ${(0, _inspect.inspect)(typeArg.type)}.`,
                [
                  (_ifaceArg$astNode = ifaceArg.astNode) === null || _ifaceArg$astNode === void 0 ? void 0 : _ifaceArg$astNode.type,
                  (_typeArg$astNode = typeArg.astNode) === null || _typeArg$astNode === void 0 ? void 0 : _typeArg$astNode.type
                ]
              );
            }
          }
          for (const typeArg of typeField.args) {
            const argName = typeArg.name;
            const ifaceArg = ifaceField.args.find((arg) => arg.name === argName);
            if (!ifaceArg && (0, _definition.isRequiredArgument)(typeArg)) {
              context.reportError(
                `Object field ${type.name}.${fieldName} includes required argument ${argName} that is missing from the Interface field ${iface.name}.${fieldName}.`,
                [typeArg.astNode, ifaceField.astNode]
              );
            }
          }
        }
      }
      function validateTypeImplementsAncestors(context, type, iface) {
        const ifaceInterfaces = type.getInterfaces();
        for (const transitive of iface.getInterfaces()) {
          if (!ifaceInterfaces.includes(transitive)) {
            context.reportError(
              transitive === type ? `Type ${type.name} cannot implement ${iface.name} because it would create a circular reference.` : `Type ${type.name} must implement ${transitive.name} because it is implemented by ${iface.name}.`,
              [
                ...getAllImplementsInterfaceNodes(iface, transitive),
                ...getAllImplementsInterfaceNodes(type, iface)
              ]
            );
          }
        }
      }
      function validateUnionMembers(context, union) {
        const memberTypes = union.getTypes();
        if (memberTypes.length === 0) {
          context.reportError(
            `Union type ${union.name} must define one or more member types.`,
            [union.astNode, ...union.extensionASTNodes]
          );
        }
        const includedTypeNames = /* @__PURE__ */ Object.create(null);
        for (const memberType of memberTypes) {
          if (includedTypeNames[memberType.name]) {
            context.reportError(
              `Union type ${union.name} can only include type ${memberType.name} once.`,
              getUnionMemberTypeNodes(union, memberType.name)
            );
            continue;
          }
          includedTypeNames[memberType.name] = true;
          if (!(0, _definition.isObjectType)(memberType)) {
            context.reportError(
              `Union type ${union.name} can only include Object types, it cannot include ${(0, _inspect.inspect)(memberType)}.`,
              getUnionMemberTypeNodes(union, String(memberType))
            );
          }
        }
      }
      function validateEnumValues(context, enumType) {
        const enumValues = enumType.getValues();
        if (enumValues.length === 0) {
          context.reportError(
            `Enum type ${enumType.name} must define one or more values.`,
            [enumType.astNode, ...enumType.extensionASTNodes]
          );
        }
        for (const enumValue of enumValues) {
          validateName(context, enumValue);
        }
      }
      function validateInputFields(context, inputObj) {
        const fields = Object.values(inputObj.getFields());
        if (fields.length === 0) {
          context.reportError(
            `Input Object type ${inputObj.name} must define one or more fields.`,
            [inputObj.astNode, ...inputObj.extensionASTNodes]
          );
        }
        for (const field of fields) {
          validateName(context, field);
          if (!(0, _definition.isInputType)(field.type)) {
            var _field$astNode2;
            context.reportError(
              `The type of ${inputObj.name}.${field.name} must be Input Type but got: ${(0, _inspect.inspect)(field.type)}.`,
              (_field$astNode2 = field.astNode) === null || _field$astNode2 === void 0 ? void 0 : _field$astNode2.type
            );
          }
          if ((0, _definition.isRequiredInputField)(field) && field.deprecationReason != null) {
            var _field$astNode3;
            context.reportError(
              `Required input field ${inputObj.name}.${field.name} cannot be deprecated.`,
              [
                getDeprecatedDirectiveNode(field.astNode),
                (_field$astNode3 = field.astNode) === null || _field$astNode3 === void 0 ? void 0 : _field$astNode3.type
              ]
            );
          }
        }
      }
      function createInputObjectCircularRefsValidator(context) {
        const visitedTypes = /* @__PURE__ */ Object.create(null);
        const fieldPath = [];
        const fieldPathIndexByTypeName = /* @__PURE__ */ Object.create(null);
        return detectCycleRecursive;
        function detectCycleRecursive(inputObj) {
          if (visitedTypes[inputObj.name]) {
            return;
          }
          visitedTypes[inputObj.name] = true;
          fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
          const fields = Object.values(inputObj.getFields());
          for (const field of fields) {
            if ((0, _definition.isNonNullType)(field.type) && (0, _definition.isInputObjectType)(field.type.ofType)) {
              const fieldType = field.type.ofType;
              const cycleIndex = fieldPathIndexByTypeName[fieldType.name];
              fieldPath.push(field);
              if (cycleIndex === void 0) {
                detectCycleRecursive(fieldType);
              } else {
                const cyclePath = fieldPath.slice(cycleIndex);
                const pathStr = cyclePath.map((fieldObj) => fieldObj.name).join(".");
                context.reportError(
                  `Cannot reference Input Object "${fieldType.name}" within itself through a series of non-null fields: "${pathStr}".`,
                  cyclePath.map((fieldObj) => fieldObj.astNode)
                );
              }
              fieldPath.pop();
            }
          }
          fieldPathIndexByTypeName[inputObj.name] = void 0;
        }
      }
      function getAllImplementsInterfaceNodes(type, iface) {
        const { astNode, extensionASTNodes } = type;
        const nodes = astNode != null ? [astNode, ...extensionASTNodes] : extensionASTNodes;
        return nodes.flatMap((typeNode) => {
          var _typeNode$interfaces;
          return (_typeNode$interfaces = typeNode.interfaces) !== null && _typeNode$interfaces !== void 0 ? _typeNode$interfaces : [];
        }).filter((ifaceNode) => ifaceNode.name.value === iface.name);
      }
      function getUnionMemberTypeNodes(union, typeName) {
        const { astNode, extensionASTNodes } = union;
        const nodes = astNode != null ? [astNode, ...extensionASTNodes] : extensionASTNodes;
        return nodes.flatMap((unionNode) => {
          var _unionNode$types;
          return (_unionNode$types = unionNode.types) !== null && _unionNode$types !== void 0 ? _unionNode$types : [];
        }).filter((typeNode) => typeNode.name.value === typeName);
      }
      function getDeprecatedDirectiveNode(definitionNode) {
        var _definitionNode$direc;
        return definitionNode === null || definitionNode === void 0 ? void 0 : (_definitionNode$direc = definitionNode.directives) === null || _definitionNode$direc === void 0 ? void 0 : _definitionNode$direc.find(
          (node) => node.name.value === _directives.GraphQLDeprecatedDirective.name
        );
      }
    }
  });

  // ../../node_modules/graphql/utilities/typeFromAST.js
  var require_typeFromAST = __commonJS({
    "../../node_modules/graphql/utilities/typeFromAST.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.typeFromAST = typeFromAST;
      var _kinds = require_kinds();
      var _definition = require_definition();
      function typeFromAST(schema, typeNode) {
        switch (typeNode.kind) {
          case _kinds.Kind.LIST_TYPE: {
            const innerType = typeFromAST(schema, typeNode.type);
            return innerType && new _definition.GraphQLList(innerType);
          }
          case _kinds.Kind.NON_NULL_TYPE: {
            const innerType = typeFromAST(schema, typeNode.type);
            return innerType && new _definition.GraphQLNonNull(innerType);
          }
          case _kinds.Kind.NAMED_TYPE:
            return schema.getType(typeNode.name.value);
        }
      }
    }
  });

  // ../../node_modules/graphql/utilities/TypeInfo.js
  var require_TypeInfo = __commonJS({
    "../../node_modules/graphql/utilities/TypeInfo.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TypeInfo = void 0;
      exports.visitWithTypeInfo = visitWithTypeInfo;
      var _ast = require_ast();
      var _kinds = require_kinds();
      var _visitor = require_visitor();
      var _definition = require_definition();
      var _introspection = require_introspection();
      var _typeFromAST = require_typeFromAST();
      var TypeInfo = class {
        constructor(schema, initialType, getFieldDefFn) {
          this._schema = schema;
          this._typeStack = [];
          this._parentTypeStack = [];
          this._inputTypeStack = [];
          this._fieldDefStack = [];
          this._defaultValueStack = [];
          this._directive = null;
          this._argument = null;
          this._enumValue = null;
          this._getFieldDef = getFieldDefFn !== null && getFieldDefFn !== void 0 ? getFieldDefFn : getFieldDef;
          if (initialType) {
            if ((0, _definition.isInputType)(initialType)) {
              this._inputTypeStack.push(initialType);
            }
            if ((0, _definition.isCompositeType)(initialType)) {
              this._parentTypeStack.push(initialType);
            }
            if ((0, _definition.isOutputType)(initialType)) {
              this._typeStack.push(initialType);
            }
          }
        }
        get [Symbol.toStringTag]() {
          return "TypeInfo";
        }
        getType() {
          if (this._typeStack.length > 0) {
            return this._typeStack[this._typeStack.length - 1];
          }
        }
        getParentType() {
          if (this._parentTypeStack.length > 0) {
            return this._parentTypeStack[this._parentTypeStack.length - 1];
          }
        }
        getInputType() {
          if (this._inputTypeStack.length > 0) {
            return this._inputTypeStack[this._inputTypeStack.length - 1];
          }
        }
        getParentInputType() {
          if (this._inputTypeStack.length > 1) {
            return this._inputTypeStack[this._inputTypeStack.length - 2];
          }
        }
        getFieldDef() {
          if (this._fieldDefStack.length > 0) {
            return this._fieldDefStack[this._fieldDefStack.length - 1];
          }
        }
        getDefaultValue() {
          if (this._defaultValueStack.length > 0) {
            return this._defaultValueStack[this._defaultValueStack.length - 1];
          }
        }
        getDirective() {
          return this._directive;
        }
        getArgument() {
          return this._argument;
        }
        getEnumValue() {
          return this._enumValue;
        }
        enter(node) {
          const schema = this._schema;
          switch (node.kind) {
            case _kinds.Kind.SELECTION_SET: {
              const namedType = (0, _definition.getNamedType)(this.getType());
              this._parentTypeStack.push(
                (0, _definition.isCompositeType)(namedType) ? namedType : void 0
              );
              break;
            }
            case _kinds.Kind.FIELD: {
              const parentType = this.getParentType();
              let fieldDef;
              let fieldType;
              if (parentType) {
                fieldDef = this._getFieldDef(schema, parentType, node);
                if (fieldDef) {
                  fieldType = fieldDef.type;
                }
              }
              this._fieldDefStack.push(fieldDef);
              this._typeStack.push(
                (0, _definition.isOutputType)(fieldType) ? fieldType : void 0
              );
              break;
            }
            case _kinds.Kind.DIRECTIVE:
              this._directive = schema.getDirective(node.name.value);
              break;
            case _kinds.Kind.OPERATION_DEFINITION: {
              const rootType = schema.getRootType(node.operation);
              this._typeStack.push(
                (0, _definition.isObjectType)(rootType) ? rootType : void 0
              );
              break;
            }
            case _kinds.Kind.INLINE_FRAGMENT:
            case _kinds.Kind.FRAGMENT_DEFINITION: {
              const typeConditionAST = node.typeCondition;
              const outputType = typeConditionAST ? (0, _typeFromAST.typeFromAST)(schema, typeConditionAST) : (0, _definition.getNamedType)(this.getType());
              this._typeStack.push(
                (0, _definition.isOutputType)(outputType) ? outputType : void 0
              );
              break;
            }
            case _kinds.Kind.VARIABLE_DEFINITION: {
              const inputType = (0, _typeFromAST.typeFromAST)(schema, node.type);
              this._inputTypeStack.push(
                (0, _definition.isInputType)(inputType) ? inputType : void 0
              );
              break;
            }
            case _kinds.Kind.ARGUMENT: {
              var _this$getDirective;
              let argDef;
              let argType;
              const fieldOrDirective = (_this$getDirective = this.getDirective()) !== null && _this$getDirective !== void 0 ? _this$getDirective : this.getFieldDef();
              if (fieldOrDirective) {
                argDef = fieldOrDirective.args.find(
                  (arg) => arg.name === node.name.value
                );
                if (argDef) {
                  argType = argDef.type;
                }
              }
              this._argument = argDef;
              this._defaultValueStack.push(argDef ? argDef.defaultValue : void 0);
              this._inputTypeStack.push(
                (0, _definition.isInputType)(argType) ? argType : void 0
              );
              break;
            }
            case _kinds.Kind.LIST: {
              const listType = (0, _definition.getNullableType)(this.getInputType());
              const itemType = (0, _definition.isListType)(listType) ? listType.ofType : listType;
              this._defaultValueStack.push(void 0);
              this._inputTypeStack.push(
                (0, _definition.isInputType)(itemType) ? itemType : void 0
              );
              break;
            }
            case _kinds.Kind.OBJECT_FIELD: {
              const objectType = (0, _definition.getNamedType)(this.getInputType());
              let inputFieldType;
              let inputField;
              if ((0, _definition.isInputObjectType)(objectType)) {
                inputField = objectType.getFields()[node.name.value];
                if (inputField) {
                  inputFieldType = inputField.type;
                }
              }
              this._defaultValueStack.push(
                inputField ? inputField.defaultValue : void 0
              );
              this._inputTypeStack.push(
                (0, _definition.isInputType)(inputFieldType) ? inputFieldType : void 0
              );
              break;
            }
            case _kinds.Kind.ENUM: {
              const enumType = (0, _definition.getNamedType)(this.getInputType());
              let enumValue;
              if ((0, _definition.isEnumType)(enumType)) {
                enumValue = enumType.getValue(node.value);
              }
              this._enumValue = enumValue;
              break;
            }
            default:
          }
        }
        leave(node) {
          switch (node.kind) {
            case _kinds.Kind.SELECTION_SET:
              this._parentTypeStack.pop();
              break;
            case _kinds.Kind.FIELD:
              this._fieldDefStack.pop();
              this._typeStack.pop();
              break;
            case _kinds.Kind.DIRECTIVE:
              this._directive = null;
              break;
            case _kinds.Kind.OPERATION_DEFINITION:
            case _kinds.Kind.INLINE_FRAGMENT:
            case _kinds.Kind.FRAGMENT_DEFINITION:
              this._typeStack.pop();
              break;
            case _kinds.Kind.VARIABLE_DEFINITION:
              this._inputTypeStack.pop();
              break;
            case _kinds.Kind.ARGUMENT:
              this._argument = null;
              this._defaultValueStack.pop();
              this._inputTypeStack.pop();
              break;
            case _kinds.Kind.LIST:
            case _kinds.Kind.OBJECT_FIELD:
              this._defaultValueStack.pop();
              this._inputTypeStack.pop();
              break;
            case _kinds.Kind.ENUM:
              this._enumValue = null;
              break;
            default:
          }
        }
      };
      exports.TypeInfo = TypeInfo;
      function getFieldDef(schema, parentType, fieldNode) {
        const name = fieldNode.name.value;
        if (name === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
          return _introspection.SchemaMetaFieldDef;
        }
        if (name === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
          return _introspection.TypeMetaFieldDef;
        }
        if (name === _introspection.TypeNameMetaFieldDef.name && (0, _definition.isCompositeType)(parentType)) {
          return _introspection.TypeNameMetaFieldDef;
        }
        if ((0, _definition.isObjectType)(parentType) || (0, _definition.isInterfaceType)(parentType)) {
          return parentType.getFields()[name];
        }
      }
      function visitWithTypeInfo(typeInfo, visitor) {
        return {
          enter(...args) {
            const node = args[0];
            typeInfo.enter(node);
            const fn = (0, _visitor.getEnterLeaveForKind)(visitor, node.kind).enter;
            if (fn) {
              const result = fn.apply(visitor, args);
              if (result !== void 0) {
                typeInfo.leave(node);
                if ((0, _ast.isNode)(result)) {
                  typeInfo.enter(result);
                }
              }
              return result;
            }
          },
          leave(...args) {
            const node = args[0];
            const fn = (0, _visitor.getEnterLeaveForKind)(visitor, node.kind).leave;
            let result;
            if (fn) {
              result = fn.apply(visitor, args);
            }
            typeInfo.leave(node);
            return result;
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/language/predicates.js
  var require_predicates = __commonJS({
    "../../node_modules/graphql/language/predicates.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isConstValueNode = isConstValueNode;
      exports.isDefinitionNode = isDefinitionNode;
      exports.isExecutableDefinitionNode = isExecutableDefinitionNode;
      exports.isSelectionNode = isSelectionNode;
      exports.isTypeDefinitionNode = isTypeDefinitionNode;
      exports.isTypeExtensionNode = isTypeExtensionNode;
      exports.isTypeNode = isTypeNode;
      exports.isTypeSystemDefinitionNode = isTypeSystemDefinitionNode;
      exports.isTypeSystemExtensionNode = isTypeSystemExtensionNode;
      exports.isValueNode = isValueNode;
      var _kinds = require_kinds();
      function isDefinitionNode(node) {
        return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
      }
      function isExecutableDefinitionNode(node) {
        return node.kind === _kinds.Kind.OPERATION_DEFINITION || node.kind === _kinds.Kind.FRAGMENT_DEFINITION;
      }
      function isSelectionNode(node) {
        return node.kind === _kinds.Kind.FIELD || node.kind === _kinds.Kind.FRAGMENT_SPREAD || node.kind === _kinds.Kind.INLINE_FRAGMENT;
      }
      function isValueNode(node) {
        return node.kind === _kinds.Kind.VARIABLE || node.kind === _kinds.Kind.INT || node.kind === _kinds.Kind.FLOAT || node.kind === _kinds.Kind.STRING || node.kind === _kinds.Kind.BOOLEAN || node.kind === _kinds.Kind.NULL || node.kind === _kinds.Kind.ENUM || node.kind === _kinds.Kind.LIST || node.kind === _kinds.Kind.OBJECT;
      }
      function isConstValueNode(node) {
        return isValueNode(node) && (node.kind === _kinds.Kind.LIST ? node.values.some(isConstValueNode) : node.kind === _kinds.Kind.OBJECT ? node.fields.some((field) => isConstValueNode(field.value)) : node.kind !== _kinds.Kind.VARIABLE);
      }
      function isTypeNode(node) {
        return node.kind === _kinds.Kind.NAMED_TYPE || node.kind === _kinds.Kind.LIST_TYPE || node.kind === _kinds.Kind.NON_NULL_TYPE;
      }
      function isTypeSystemDefinitionNode(node) {
        return node.kind === _kinds.Kind.SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === _kinds.Kind.DIRECTIVE_DEFINITION;
      }
      function isTypeDefinitionNode(node) {
        return node.kind === _kinds.Kind.SCALAR_TYPE_DEFINITION || node.kind === _kinds.Kind.OBJECT_TYPE_DEFINITION || node.kind === _kinds.Kind.INTERFACE_TYPE_DEFINITION || node.kind === _kinds.Kind.UNION_TYPE_DEFINITION || node.kind === _kinds.Kind.ENUM_TYPE_DEFINITION || node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION;
      }
      function isTypeSystemExtensionNode(node) {
        return node.kind === _kinds.Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node);
      }
      function isTypeExtensionNode(node) {
        return node.kind === _kinds.Kind.SCALAR_TYPE_EXTENSION || node.kind === _kinds.Kind.OBJECT_TYPE_EXTENSION || node.kind === _kinds.Kind.INTERFACE_TYPE_EXTENSION || node.kind === _kinds.Kind.UNION_TYPE_EXTENSION || node.kind === _kinds.Kind.ENUM_TYPE_EXTENSION || node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION;
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/ExecutableDefinitionsRule.js
  var require_ExecutableDefinitionsRule = __commonJS({
    "../../node_modules/graphql/validation/rules/ExecutableDefinitionsRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ExecutableDefinitionsRule = ExecutableDefinitionsRule;
      var _GraphQLError = require_GraphQLError();
      var _kinds = require_kinds();
      var _predicates = require_predicates();
      function ExecutableDefinitionsRule(context) {
        return {
          Document(node) {
            for (const definition of node.definitions) {
              if (!(0, _predicates.isExecutableDefinitionNode)(definition)) {
                const defName = definition.kind === _kinds.Kind.SCHEMA_DEFINITION || definition.kind === _kinds.Kind.SCHEMA_EXTENSION ? "schema" : '"' + definition.name.value + '"';
                context.reportError(
                  new _GraphQLError.GraphQLError(
                    `The ${defName} definition is not executable.`,
                    {
                      nodes: definition
                    }
                  )
                );
              }
            }
            return false;
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.js
  var require_FieldsOnCorrectTypeRule = __commonJS({
    "../../node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.FieldsOnCorrectTypeRule = FieldsOnCorrectTypeRule;
      var _didYouMean = require_didYouMean();
      var _naturalCompare = require_naturalCompare();
      var _suggestionList = require_suggestionList();
      var _GraphQLError = require_GraphQLError();
      var _definition = require_definition();
      function FieldsOnCorrectTypeRule(context) {
        return {
          Field(node) {
            const type = context.getParentType();
            if (type) {
              const fieldDef = context.getFieldDef();
              if (!fieldDef) {
                const schema = context.getSchema();
                const fieldName = node.name.value;
                let suggestion = (0, _didYouMean.didYouMean)(
                  "to use an inline fragment on",
                  getSuggestedTypeNames(schema, type, fieldName)
                );
                if (suggestion === "") {
                  suggestion = (0, _didYouMean.didYouMean)(
                    getSuggestedFieldNames(type, fieldName)
                  );
                }
                context.reportError(
                  new _GraphQLError.GraphQLError(
                    `Cannot query field "${fieldName}" on type "${type.name}".` + suggestion,
                    {
                      nodes: node
                    }
                  )
                );
              }
            }
          }
        };
      }
      function getSuggestedTypeNames(schema, type, fieldName) {
        if (!(0, _definition.isAbstractType)(type)) {
          return [];
        }
        const suggestedTypes = /* @__PURE__ */ new Set();
        const usageCount = /* @__PURE__ */ Object.create(null);
        for (const possibleType of schema.getPossibleTypes(type)) {
          if (!possibleType.getFields()[fieldName]) {
            continue;
          }
          suggestedTypes.add(possibleType);
          usageCount[possibleType.name] = 1;
          for (const possibleInterface of possibleType.getInterfaces()) {
            var _usageCount$possibleI;
            if (!possibleInterface.getFields()[fieldName]) {
              continue;
            }
            suggestedTypes.add(possibleInterface);
            usageCount[possibleInterface.name] = ((_usageCount$possibleI = usageCount[possibleInterface.name]) !== null && _usageCount$possibleI !== void 0 ? _usageCount$possibleI : 0) + 1;
          }
        }
        return [...suggestedTypes].sort((typeA, typeB) => {
          const usageCountDiff = usageCount[typeB.name] - usageCount[typeA.name];
          if (usageCountDiff !== 0) {
            return usageCountDiff;
          }
          if ((0, _definition.isInterfaceType)(typeA) && schema.isSubType(typeA, typeB)) {
            return -1;
          }
          if ((0, _definition.isInterfaceType)(typeB) && schema.isSubType(typeB, typeA)) {
            return 1;
          }
          return (0, _naturalCompare.naturalCompare)(typeA.name, typeB.name);
        }).map((x) => x.name);
      }
      function getSuggestedFieldNames(type, fieldName) {
        if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
          const possibleFieldNames = Object.keys(type.getFields());
          return (0, _suggestionList.suggestionList)(fieldName, possibleFieldNames);
        }
        return [];
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.js
  var require_FragmentsOnCompositeTypesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.FragmentsOnCompositeTypesRule = FragmentsOnCompositeTypesRule;
      var _GraphQLError = require_GraphQLError();
      var _printer = require_printer();
      var _definition = require_definition();
      var _typeFromAST = require_typeFromAST();
      function FragmentsOnCompositeTypesRule(context) {
        return {
          InlineFragment(node) {
            const typeCondition = node.typeCondition;
            if (typeCondition) {
              const type = (0, _typeFromAST.typeFromAST)(
                context.getSchema(),
                typeCondition
              );
              if (type && !(0, _definition.isCompositeType)(type)) {
                const typeStr = (0, _printer.print)(typeCondition);
                context.reportError(
                  new _GraphQLError.GraphQLError(
                    `Fragment cannot condition on non composite type "${typeStr}".`,
                    {
                      nodes: typeCondition
                    }
                  )
                );
              }
            }
          },
          FragmentDefinition(node) {
            const type = (0, _typeFromAST.typeFromAST)(
              context.getSchema(),
              node.typeCondition
            );
            if (type && !(0, _definition.isCompositeType)(type)) {
              const typeStr = (0, _printer.print)(node.typeCondition);
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Fragment "${node.name.value}" cannot condition on non composite type "${typeStr}".`,
                  {
                    nodes: node.typeCondition
                  }
                )
              );
            }
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/KnownArgumentNamesRule.js
  var require_KnownArgumentNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/KnownArgumentNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.KnownArgumentNamesOnDirectivesRule = KnownArgumentNamesOnDirectivesRule;
      exports.KnownArgumentNamesRule = KnownArgumentNamesRule;
      var _didYouMean = require_didYouMean();
      var _suggestionList = require_suggestionList();
      var _GraphQLError = require_GraphQLError();
      var _kinds = require_kinds();
      var _directives = require_directives();
      function KnownArgumentNamesRule(context) {
        return {
          ...KnownArgumentNamesOnDirectivesRule(context),
          Argument(argNode) {
            const argDef = context.getArgument();
            const fieldDef = context.getFieldDef();
            const parentType = context.getParentType();
            if (!argDef && fieldDef && parentType) {
              const argName = argNode.name.value;
              const knownArgsNames = fieldDef.args.map((arg) => arg.name);
              const suggestions = (0, _suggestionList.suggestionList)(
                argName,
                knownArgsNames
              );
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Unknown argument "${argName}" on field "${parentType.name}.${fieldDef.name}".` + (0, _didYouMean.didYouMean)(suggestions),
                  {
                    nodes: argNode
                  }
                )
              );
            }
          }
        };
      }
      function KnownArgumentNamesOnDirectivesRule(context) {
        const directiveArgs = /* @__PURE__ */ Object.create(null);
        const schema = context.getSchema();
        const definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
        for (const directive of definedDirectives) {
          directiveArgs[directive.name] = directive.args.map((arg) => arg.name);
        }
        const astDefinitions = context.getDocument().definitions;
        for (const def of astDefinitions) {
          if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
            var _def$arguments;
            const argsNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
            directiveArgs[def.name.value] = argsNodes.map((arg) => arg.name.value);
          }
        }
        return {
          Directive(directiveNode) {
            const directiveName = directiveNode.name.value;
            const knownArgs = directiveArgs[directiveName];
            if (directiveNode.arguments && knownArgs) {
              for (const argNode of directiveNode.arguments) {
                const argName = argNode.name.value;
                if (!knownArgs.includes(argName)) {
                  const suggestions = (0, _suggestionList.suggestionList)(
                    argName,
                    knownArgs
                  );
                  context.reportError(
                    new _GraphQLError.GraphQLError(
                      `Unknown argument "${argName}" on directive "@${directiveName}".` + (0, _didYouMean.didYouMean)(suggestions),
                      {
                        nodes: argNode
                      }
                    )
                  );
                }
              }
            }
            return false;
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/KnownDirectivesRule.js
  var require_KnownDirectivesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/KnownDirectivesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.KnownDirectivesRule = KnownDirectivesRule;
      var _inspect = require_inspect();
      var _invariant = require_invariant();
      var _GraphQLError = require_GraphQLError();
      var _ast = require_ast();
      var _directiveLocation = require_directiveLocation();
      var _kinds = require_kinds();
      var _directives = require_directives();
      function KnownDirectivesRule(context) {
        const locationsMap = /* @__PURE__ */ Object.create(null);
        const schema = context.getSchema();
        const definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
        for (const directive of definedDirectives) {
          locationsMap[directive.name] = directive.locations;
        }
        const astDefinitions = context.getDocument().definitions;
        for (const def of astDefinitions) {
          if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
            locationsMap[def.name.value] = def.locations.map((name) => name.value);
          }
        }
        return {
          Directive(node, _key, _parent, _path, ancestors) {
            const name = node.name.value;
            const locations = locationsMap[name];
            if (!locations) {
              context.reportError(
                new _GraphQLError.GraphQLError(`Unknown directive "@${name}".`, {
                  nodes: node
                })
              );
              return;
            }
            const candidateLocation = getDirectiveLocationForASTPath(ancestors);
            if (candidateLocation && !locations.includes(candidateLocation)) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Directive "@${name}" may not be used on ${candidateLocation}.`,
                  {
                    nodes: node
                  }
                )
              );
            }
          }
        };
      }
      function getDirectiveLocationForASTPath(ancestors) {
        const appliedTo = ancestors[ancestors.length - 1];
        "kind" in appliedTo || (0, _invariant.invariant)(false);
        switch (appliedTo.kind) {
          case _kinds.Kind.OPERATION_DEFINITION:
            return getDirectiveLocationForOperation(appliedTo.operation);
          case _kinds.Kind.FIELD:
            return _directiveLocation.DirectiveLocation.FIELD;
          case _kinds.Kind.FRAGMENT_SPREAD:
            return _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD;
          case _kinds.Kind.INLINE_FRAGMENT:
            return _directiveLocation.DirectiveLocation.INLINE_FRAGMENT;
          case _kinds.Kind.FRAGMENT_DEFINITION:
            return _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION;
          case _kinds.Kind.VARIABLE_DEFINITION:
            return _directiveLocation.DirectiveLocation.VARIABLE_DEFINITION;
          case _kinds.Kind.SCHEMA_DEFINITION:
          case _kinds.Kind.SCHEMA_EXTENSION:
            return _directiveLocation.DirectiveLocation.SCHEMA;
          case _kinds.Kind.SCALAR_TYPE_DEFINITION:
          case _kinds.Kind.SCALAR_TYPE_EXTENSION:
            return _directiveLocation.DirectiveLocation.SCALAR;
          case _kinds.Kind.OBJECT_TYPE_DEFINITION:
          case _kinds.Kind.OBJECT_TYPE_EXTENSION:
            return _directiveLocation.DirectiveLocation.OBJECT;
          case _kinds.Kind.FIELD_DEFINITION:
            return _directiveLocation.DirectiveLocation.FIELD_DEFINITION;
          case _kinds.Kind.INTERFACE_TYPE_DEFINITION:
          case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
            return _directiveLocation.DirectiveLocation.INTERFACE;
          case _kinds.Kind.UNION_TYPE_DEFINITION:
          case _kinds.Kind.UNION_TYPE_EXTENSION:
            return _directiveLocation.DirectiveLocation.UNION;
          case _kinds.Kind.ENUM_TYPE_DEFINITION:
          case _kinds.Kind.ENUM_TYPE_EXTENSION:
            return _directiveLocation.DirectiveLocation.ENUM;
          case _kinds.Kind.ENUM_VALUE_DEFINITION:
            return _directiveLocation.DirectiveLocation.ENUM_VALUE;
          case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
          case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
            return _directiveLocation.DirectiveLocation.INPUT_OBJECT;
          case _kinds.Kind.INPUT_VALUE_DEFINITION: {
            const parentNode = ancestors[ancestors.length - 3];
            "kind" in parentNode || (0, _invariant.invariant)(false);
            return parentNode.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION ? _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION : _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION;
          }
          default:
            (0, _invariant.invariant)(
              false,
              "Unexpected kind: " + (0, _inspect.inspect)(appliedTo.kind)
            );
        }
      }
      function getDirectiveLocationForOperation(operation) {
        switch (operation) {
          case _ast.OperationTypeNode.QUERY:
            return _directiveLocation.DirectiveLocation.QUERY;
          case _ast.OperationTypeNode.MUTATION:
            return _directiveLocation.DirectiveLocation.MUTATION;
          case _ast.OperationTypeNode.SUBSCRIPTION:
            return _directiveLocation.DirectiveLocation.SUBSCRIPTION;
        }
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/KnownFragmentNamesRule.js
  var require_KnownFragmentNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/KnownFragmentNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.KnownFragmentNamesRule = KnownFragmentNamesRule;
      var _GraphQLError = require_GraphQLError();
      function KnownFragmentNamesRule(context) {
        return {
          FragmentSpread(node) {
            const fragmentName = node.name.value;
            const fragment = context.getFragment(fragmentName);
            if (!fragment) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Unknown fragment "${fragmentName}".`,
                  {
                    nodes: node.name
                  }
                )
              );
            }
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/KnownTypeNamesRule.js
  var require_KnownTypeNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/KnownTypeNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.KnownTypeNamesRule = KnownTypeNamesRule;
      var _didYouMean = require_didYouMean();
      var _suggestionList = require_suggestionList();
      var _GraphQLError = require_GraphQLError();
      var _predicates = require_predicates();
      var _introspection = require_introspection();
      var _scalars = require_scalars();
      function KnownTypeNamesRule(context) {
        const schema = context.getSchema();
        const existingTypesMap = schema ? schema.getTypeMap() : /* @__PURE__ */ Object.create(null);
        const definedTypes = /* @__PURE__ */ Object.create(null);
        for (const def of context.getDocument().definitions) {
          if ((0, _predicates.isTypeDefinitionNode)(def)) {
            definedTypes[def.name.value] = true;
          }
        }
        const typeNames = [
          ...Object.keys(existingTypesMap),
          ...Object.keys(definedTypes)
        ];
        return {
          NamedType(node, _1, parent, _2, ancestors) {
            const typeName = node.name.value;
            if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
              var _ancestors$;
              const definitionNode = (_ancestors$ = ancestors[2]) !== null && _ancestors$ !== void 0 ? _ancestors$ : parent;
              const isSDL = definitionNode != null && isSDLNode(definitionNode);
              if (isSDL && standardTypeNames.includes(typeName)) {
                return;
              }
              const suggestedTypes = (0, _suggestionList.suggestionList)(
                typeName,
                isSDL ? standardTypeNames.concat(typeNames) : typeNames
              );
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Unknown type "${typeName}".` + (0, _didYouMean.didYouMean)(suggestedTypes),
                  {
                    nodes: node
                  }
                )
              );
            }
          }
        };
      }
      var standardTypeNames = [
        ..._scalars.specifiedScalarTypes,
        ..._introspection.introspectionTypes
      ].map((type) => type.name);
      function isSDLNode(value) {
        return "kind" in value && ((0, _predicates.isTypeSystemDefinitionNode)(value) || (0, _predicates.isTypeSystemExtensionNode)(value));
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/LoneAnonymousOperationRule.js
  var require_LoneAnonymousOperationRule = __commonJS({
    "../../node_modules/graphql/validation/rules/LoneAnonymousOperationRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LoneAnonymousOperationRule = LoneAnonymousOperationRule;
      var _GraphQLError = require_GraphQLError();
      var _kinds = require_kinds();
      function LoneAnonymousOperationRule(context) {
        let operationCount = 0;
        return {
          Document(node) {
            operationCount = node.definitions.filter(
              (definition) => definition.kind === _kinds.Kind.OPERATION_DEFINITION
            ).length;
          },
          OperationDefinition(node) {
            if (!node.name && operationCount > 1) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  "This anonymous operation must be the only defined operation.",
                  {
                    nodes: node
                  }
                )
              );
            }
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.js
  var require_LoneSchemaDefinitionRule = __commonJS({
    "../../node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LoneSchemaDefinitionRule = LoneSchemaDefinitionRule;
      var _GraphQLError = require_GraphQLError();
      function LoneSchemaDefinitionRule(context) {
        var _ref, _ref2, _oldSchema$astNode;
        const oldSchema = context.getSchema();
        const alreadyDefined = (_ref = (_ref2 = (_oldSchema$astNode = oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.astNode) !== null && _oldSchema$astNode !== void 0 ? _oldSchema$astNode : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getQueryType()) !== null && _ref2 !== void 0 ? _ref2 : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getMutationType()) !== null && _ref !== void 0 ? _ref : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getSubscriptionType();
        let schemaDefinitionsCount = 0;
        return {
          SchemaDefinition(node) {
            if (alreadyDefined) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  "Cannot define a new schema within a schema extension.",
                  {
                    nodes: node
                  }
                )
              );
              return;
            }
            if (schemaDefinitionsCount > 0) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  "Must provide only one schema definition.",
                  {
                    nodes: node
                  }
                )
              );
            }
            ++schemaDefinitionsCount;
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/NoFragmentCyclesRule.js
  var require_NoFragmentCyclesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/NoFragmentCyclesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NoFragmentCyclesRule = NoFragmentCyclesRule;
      var _GraphQLError = require_GraphQLError();
      function NoFragmentCyclesRule(context) {
        const visitedFrags = /* @__PURE__ */ Object.create(null);
        const spreadPath = [];
        const spreadPathIndexByName = /* @__PURE__ */ Object.create(null);
        return {
          OperationDefinition: () => false,
          FragmentDefinition(node) {
            detectCycleRecursive(node);
            return false;
          }
        };
        function detectCycleRecursive(fragment) {
          if (visitedFrags[fragment.name.value]) {
            return;
          }
          const fragmentName = fragment.name.value;
          visitedFrags[fragmentName] = true;
          const spreadNodes = context.getFragmentSpreads(fragment.selectionSet);
          if (spreadNodes.length === 0) {
            return;
          }
          spreadPathIndexByName[fragmentName] = spreadPath.length;
          for (const spreadNode of spreadNodes) {
            const spreadName = spreadNode.name.value;
            const cycleIndex = spreadPathIndexByName[spreadName];
            spreadPath.push(spreadNode);
            if (cycleIndex === void 0) {
              const spreadFragment = context.getFragment(spreadName);
              if (spreadFragment) {
                detectCycleRecursive(spreadFragment);
              }
            } else {
              const cyclePath = spreadPath.slice(cycleIndex);
              const viaPath = cyclePath.slice(0, -1).map((s) => '"' + s.name.value + '"').join(", ");
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Cannot spread fragment "${spreadName}" within itself` + (viaPath !== "" ? ` via ${viaPath}.` : "."),
                  {
                    nodes: cyclePath
                  }
                )
              );
            }
            spreadPath.pop();
          }
          spreadPathIndexByName[fragmentName] = void 0;
        }
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/NoUndefinedVariablesRule.js
  var require_NoUndefinedVariablesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/NoUndefinedVariablesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NoUndefinedVariablesRule = NoUndefinedVariablesRule;
      var _GraphQLError = require_GraphQLError();
      function NoUndefinedVariablesRule(context) {
        let variableNameDefined = /* @__PURE__ */ Object.create(null);
        return {
          OperationDefinition: {
            enter() {
              variableNameDefined = /* @__PURE__ */ Object.create(null);
            },
            leave(operation) {
              const usages = context.getRecursiveVariableUsages(operation);
              for (const { node } of usages) {
                const varName = node.name.value;
                if (variableNameDefined[varName] !== true) {
                  context.reportError(
                    new _GraphQLError.GraphQLError(
                      operation.name ? `Variable "$${varName}" is not defined by operation "${operation.name.value}".` : `Variable "$${varName}" is not defined.`,
                      {
                        nodes: [node, operation]
                      }
                    )
                  );
                }
              }
            }
          },
          VariableDefinition(node) {
            variableNameDefined[node.variable.name.value] = true;
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/NoUnusedFragmentsRule.js
  var require_NoUnusedFragmentsRule = __commonJS({
    "../../node_modules/graphql/validation/rules/NoUnusedFragmentsRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NoUnusedFragmentsRule = NoUnusedFragmentsRule;
      var _GraphQLError = require_GraphQLError();
      function NoUnusedFragmentsRule(context) {
        const operationDefs = [];
        const fragmentDefs = [];
        return {
          OperationDefinition(node) {
            operationDefs.push(node);
            return false;
          },
          FragmentDefinition(node) {
            fragmentDefs.push(node);
            return false;
          },
          Document: {
            leave() {
              const fragmentNameUsed = /* @__PURE__ */ Object.create(null);
              for (const operation of operationDefs) {
                for (const fragment of context.getRecursivelyReferencedFragments(
                  operation
                )) {
                  fragmentNameUsed[fragment.name.value] = true;
                }
              }
              for (const fragmentDef of fragmentDefs) {
                const fragName = fragmentDef.name.value;
                if (fragmentNameUsed[fragName] !== true) {
                  context.reportError(
                    new _GraphQLError.GraphQLError(
                      `Fragment "${fragName}" is never used.`,
                      {
                        nodes: fragmentDef
                      }
                    )
                  );
                }
              }
            }
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/NoUnusedVariablesRule.js
  var require_NoUnusedVariablesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/NoUnusedVariablesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NoUnusedVariablesRule = NoUnusedVariablesRule;
      var _GraphQLError = require_GraphQLError();
      function NoUnusedVariablesRule(context) {
        let variableDefs = [];
        return {
          OperationDefinition: {
            enter() {
              variableDefs = [];
            },
            leave(operation) {
              const variableNameUsed = /* @__PURE__ */ Object.create(null);
              const usages = context.getRecursiveVariableUsages(operation);
              for (const { node } of usages) {
                variableNameUsed[node.name.value] = true;
              }
              for (const variableDef of variableDefs) {
                const variableName = variableDef.variable.name.value;
                if (variableNameUsed[variableName] !== true) {
                  context.reportError(
                    new _GraphQLError.GraphQLError(
                      operation.name ? `Variable "$${variableName}" is never used in operation "${operation.name.value}".` : `Variable "$${variableName}" is never used.`,
                      {
                        nodes: variableDef
                      }
                    )
                  );
                }
              }
            }
          },
          VariableDefinition(def) {
            variableDefs.push(def);
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/utilities/sortValueNode.js
  var require_sortValueNode = __commonJS({
    "../../node_modules/graphql/utilities/sortValueNode.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sortValueNode = sortValueNode;
      var _naturalCompare = require_naturalCompare();
      var _kinds = require_kinds();
      function sortValueNode(valueNode) {
        switch (valueNode.kind) {
          case _kinds.Kind.OBJECT:
            return { ...valueNode, fields: sortFields(valueNode.fields) };
          case _kinds.Kind.LIST:
            return { ...valueNode, values: valueNode.values.map(sortValueNode) };
          case _kinds.Kind.INT:
          case _kinds.Kind.FLOAT:
          case _kinds.Kind.STRING:
          case _kinds.Kind.BOOLEAN:
          case _kinds.Kind.NULL:
          case _kinds.Kind.ENUM:
          case _kinds.Kind.VARIABLE:
            return valueNode;
        }
      }
      function sortFields(fields) {
        return fields.map((fieldNode) => ({
          ...fieldNode,
          value: sortValueNode(fieldNode.value)
        })).sort(
          (fieldA, fieldB) => (0, _naturalCompare.naturalCompare)(fieldA.name.value, fieldB.name.value)
        );
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.js
  var require_OverlappingFieldsCanBeMergedRule = __commonJS({
    "../../node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.OverlappingFieldsCanBeMergedRule = OverlappingFieldsCanBeMergedRule;
      var _inspect = require_inspect();
      var _GraphQLError = require_GraphQLError();
      var _kinds = require_kinds();
      var _printer = require_printer();
      var _definition = require_definition();
      var _sortValueNode = require_sortValueNode();
      var _typeFromAST = require_typeFromAST();
      function reasonMessage(reason) {
        if (Array.isArray(reason)) {
          return reason.map(
            ([responseName, subReason]) => `subfields "${responseName}" conflict because ` + reasonMessage(subReason)
          ).join(" and ");
        }
        return reason;
      }
      function OverlappingFieldsCanBeMergedRule(context) {
        const comparedFragmentPairs = new PairSet();
        const cachedFieldsAndFragmentNames = /* @__PURE__ */ new Map();
        return {
          SelectionSet(selectionSet) {
            const conflicts = findConflictsWithinSelectionSet(
              context,
              cachedFieldsAndFragmentNames,
              comparedFragmentPairs,
              context.getParentType(),
              selectionSet
            );
            for (const [[responseName, reason], fields1, fields2] of conflicts) {
              const reasonMsg = reasonMessage(reason);
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Fields "${responseName}" conflict because ${reasonMsg}. Use different aliases on the fields to fetch both if this was intentional.`,
                  {
                    nodes: fields1.concat(fields2)
                  }
                )
              );
            }
          }
        };
      }
      function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
        const conflicts = [];
        const [fieldMap, fragmentNames] = getFieldsAndFragmentNames(
          context,
          cachedFieldsAndFragmentNames,
          parentType,
          selectionSet
        );
        collectConflictsWithin(
          context,
          conflicts,
          cachedFieldsAndFragmentNames,
          comparedFragmentPairs,
          fieldMap
        );
        if (fragmentNames.length !== 0) {
          for (let i = 0; i < fragmentNames.length; i++) {
            collectConflictsBetweenFieldsAndFragment(
              context,
              conflicts,
              cachedFieldsAndFragmentNames,
              comparedFragmentPairs,
              false,
              fieldMap,
              fragmentNames[i]
            );
            for (let j = i + 1; j < fragmentNames.length; j++) {
              collectConflictsBetweenFragments(
                context,
                conflicts,
                cachedFieldsAndFragmentNames,
                comparedFragmentPairs,
                false,
                fragmentNames[i],
                fragmentNames[j]
              );
            }
          }
        }
        return conflicts;
      }
      function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
        const fragment = context.getFragment(fragmentName);
        if (!fragment) {
          return;
        }
        const [fieldMap2, referencedFragmentNames] = getReferencedFieldsAndFragmentNames(
          context,
          cachedFieldsAndFragmentNames,
          fragment
        );
        if (fieldMap === fieldMap2) {
          return;
        }
        collectConflictsBetween(
          context,
          conflicts,
          cachedFieldsAndFragmentNames,
          comparedFragmentPairs,
          areMutuallyExclusive,
          fieldMap,
          fieldMap2
        );
        for (const referencedFragmentName of referencedFragmentNames) {
          if (comparedFragmentPairs.has(
            referencedFragmentName,
            fragmentName,
            areMutuallyExclusive
          )) {
            continue;
          }
          comparedFragmentPairs.add(
            referencedFragmentName,
            fragmentName,
            areMutuallyExclusive
          );
          collectConflictsBetweenFieldsAndFragment(
            context,
            conflicts,
            cachedFieldsAndFragmentNames,
            comparedFragmentPairs,
            areMutuallyExclusive,
            fieldMap,
            referencedFragmentName
          );
        }
      }
      function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
        if (fragmentName1 === fragmentName2) {
          return;
        }
        if (comparedFragmentPairs.has(
          fragmentName1,
          fragmentName2,
          areMutuallyExclusive
        )) {
          return;
        }
        comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
        const fragment1 = context.getFragment(fragmentName1);
        const fragment2 = context.getFragment(fragmentName2);
        if (!fragment1 || !fragment2) {
          return;
        }
        const [fieldMap1, referencedFragmentNames1] = getReferencedFieldsAndFragmentNames(
          context,
          cachedFieldsAndFragmentNames,
          fragment1
        );
        const [fieldMap2, referencedFragmentNames2] = getReferencedFieldsAndFragmentNames(
          context,
          cachedFieldsAndFragmentNames,
          fragment2
        );
        collectConflictsBetween(
          context,
          conflicts,
          cachedFieldsAndFragmentNames,
          comparedFragmentPairs,
          areMutuallyExclusive,
          fieldMap1,
          fieldMap2
        );
        for (const referencedFragmentName2 of referencedFragmentNames2) {
          collectConflictsBetweenFragments(
            context,
            conflicts,
            cachedFieldsAndFragmentNames,
            comparedFragmentPairs,
            areMutuallyExclusive,
            fragmentName1,
            referencedFragmentName2
          );
        }
        for (const referencedFragmentName1 of referencedFragmentNames1) {
          collectConflictsBetweenFragments(
            context,
            conflicts,
            cachedFieldsAndFragmentNames,
            comparedFragmentPairs,
            areMutuallyExclusive,
            referencedFragmentName1,
            fragmentName2
          );
        }
      }
      function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
        const conflicts = [];
        const [fieldMap1, fragmentNames1] = getFieldsAndFragmentNames(
          context,
          cachedFieldsAndFragmentNames,
          parentType1,
          selectionSet1
        );
        const [fieldMap2, fragmentNames2] = getFieldsAndFragmentNames(
          context,
          cachedFieldsAndFragmentNames,
          parentType2,
          selectionSet2
        );
        collectConflictsBetween(
          context,
          conflicts,
          cachedFieldsAndFragmentNames,
          comparedFragmentPairs,
          areMutuallyExclusive,
          fieldMap1,
          fieldMap2
        );
        for (const fragmentName2 of fragmentNames2) {
          collectConflictsBetweenFieldsAndFragment(
            context,
            conflicts,
            cachedFieldsAndFragmentNames,
            comparedFragmentPairs,
            areMutuallyExclusive,
            fieldMap1,
            fragmentName2
          );
        }
        for (const fragmentName1 of fragmentNames1) {
          collectConflictsBetweenFieldsAndFragment(
            context,
            conflicts,
            cachedFieldsAndFragmentNames,
            comparedFragmentPairs,
            areMutuallyExclusive,
            fieldMap2,
            fragmentName1
          );
        }
        for (const fragmentName1 of fragmentNames1) {
          for (const fragmentName2 of fragmentNames2) {
            collectConflictsBetweenFragments(
              context,
              conflicts,
              cachedFieldsAndFragmentNames,
              comparedFragmentPairs,
              areMutuallyExclusive,
              fragmentName1,
              fragmentName2
            );
          }
        }
        return conflicts;
      }
      function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
        for (const [responseName, fields] of Object.entries(fieldMap)) {
          if (fields.length > 1) {
            for (let i = 0; i < fields.length; i++) {
              for (let j = i + 1; j < fields.length; j++) {
                const conflict = findConflict(
                  context,
                  cachedFieldsAndFragmentNames,
                  comparedFragmentPairs,
                  false,
                  responseName,
                  fields[i],
                  fields[j]
                );
                if (conflict) {
                  conflicts.push(conflict);
                }
              }
            }
          }
        }
      }
      function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
        for (const [responseName, fields1] of Object.entries(fieldMap1)) {
          const fields2 = fieldMap2[responseName];
          if (fields2) {
            for (const field1 of fields1) {
              for (const field2 of fields2) {
                const conflict = findConflict(
                  context,
                  cachedFieldsAndFragmentNames,
                  comparedFragmentPairs,
                  parentFieldsAreMutuallyExclusive,
                  responseName,
                  field1,
                  field2
                );
                if (conflict) {
                  conflicts.push(conflict);
                }
              }
            }
          }
        }
      }
      function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
        const [parentType1, node1, def1] = field1;
        const [parentType2, node2, def2] = field2;
        const areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && (0, _definition.isObjectType)(parentType1) && (0, _definition.isObjectType)(parentType2);
        if (!areMutuallyExclusive) {
          const name1 = node1.name.value;
          const name2 = node2.name.value;
          if (name1 !== name2) {
            return [
              [responseName, `"${name1}" and "${name2}" are different fields`],
              [node1],
              [node2]
            ];
          }
          if (stringifyArguments(node1) !== stringifyArguments(node2)) {
            return [
              [responseName, "they have differing arguments"],
              [node1],
              [node2]
            ];
          }
        }
        const type1 = def1 === null || def1 === void 0 ? void 0 : def1.type;
        const type2 = def2 === null || def2 === void 0 ? void 0 : def2.type;
        if (type1 && type2 && doTypesConflict(type1, type2)) {
          return [
            [
              responseName,
              `they return conflicting types "${(0, _inspect.inspect)(
                type1
              )}" and "${(0, _inspect.inspect)(type2)}"`
            ],
            [node1],
            [node2]
          ];
        }
        const selectionSet1 = node1.selectionSet;
        const selectionSet2 = node2.selectionSet;
        if (selectionSet1 && selectionSet2) {
          const conflicts = findConflictsBetweenSubSelectionSets(
            context,
            cachedFieldsAndFragmentNames,
            comparedFragmentPairs,
            areMutuallyExclusive,
            (0, _definition.getNamedType)(type1),
            selectionSet1,
            (0, _definition.getNamedType)(type2),
            selectionSet2
          );
          return subfieldConflicts(conflicts, responseName, node1, node2);
        }
      }
      function stringifyArguments(fieldNode) {
        var _fieldNode$arguments;
        const args = (_fieldNode$arguments = fieldNode.arguments) !== null && _fieldNode$arguments !== void 0 ? _fieldNode$arguments : [];
        const inputObjectWithArgs = {
          kind: _kinds.Kind.OBJECT,
          fields: args.map((argNode) => ({
            kind: _kinds.Kind.OBJECT_FIELD,
            name: argNode.name,
            value: argNode.value
          }))
        };
        return (0, _printer.print)(
          (0, _sortValueNode.sortValueNode)(inputObjectWithArgs)
        );
      }
      function doTypesConflict(type1, type2) {
        if ((0, _definition.isListType)(type1)) {
          return (0, _definition.isListType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
        }
        if ((0, _definition.isListType)(type2)) {
          return true;
        }
        if ((0, _definition.isNonNullType)(type1)) {
          return (0, _definition.isNonNullType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
        }
        if ((0, _definition.isNonNullType)(type2)) {
          return true;
        }
        if ((0, _definition.isLeafType)(type1) || (0, _definition.isLeafType)(type2)) {
          return type1 !== type2;
        }
        return false;
      }
      function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
        const cached = cachedFieldsAndFragmentNames.get(selectionSet);
        if (cached) {
          return cached;
        }
        const nodeAndDefs = /* @__PURE__ */ Object.create(null);
        const fragmentNames = /* @__PURE__ */ Object.create(null);
        _collectFieldsAndFragmentNames(
          context,
          parentType,
          selectionSet,
          nodeAndDefs,
          fragmentNames
        );
        const result = [nodeAndDefs, Object.keys(fragmentNames)];
        cachedFieldsAndFragmentNames.set(selectionSet, result);
        return result;
      }
      function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
        const cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);
        if (cached) {
          return cached;
        }
        const fragmentType = (0, _typeFromAST.typeFromAST)(
          context.getSchema(),
          fragment.typeCondition
        );
        return getFieldsAndFragmentNames(
          context,
          cachedFieldsAndFragmentNames,
          fragmentType,
          fragment.selectionSet
        );
      }
      function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
        for (const selection of selectionSet.selections) {
          switch (selection.kind) {
            case _kinds.Kind.FIELD: {
              const fieldName = selection.name.value;
              let fieldDef;
              if ((0, _definition.isObjectType)(parentType) || (0, _definition.isInterfaceType)(parentType)) {
                fieldDef = parentType.getFields()[fieldName];
              }
              const responseName = selection.alias ? selection.alias.value : fieldName;
              if (!nodeAndDefs[responseName]) {
                nodeAndDefs[responseName] = [];
              }
              nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
              break;
            }
            case _kinds.Kind.FRAGMENT_SPREAD:
              fragmentNames[selection.name.value] = true;
              break;
            case _kinds.Kind.INLINE_FRAGMENT: {
              const typeCondition = selection.typeCondition;
              const inlineFragmentType = typeCondition ? (0, _typeFromAST.typeFromAST)(context.getSchema(), typeCondition) : parentType;
              _collectFieldsAndFragmentNames(
                context,
                inlineFragmentType,
                selection.selectionSet,
                nodeAndDefs,
                fragmentNames
              );
              break;
            }
          }
        }
      }
      function subfieldConflicts(conflicts, responseName, node1, node2) {
        if (conflicts.length > 0) {
          return [
            [responseName, conflicts.map(([reason]) => reason)],
            [node1, ...conflicts.map(([, fields1]) => fields1).flat()],
            [node2, ...conflicts.map(([, , fields2]) => fields2).flat()]
          ];
        }
      }
      var PairSet = class {
        constructor() {
          this._data = /* @__PURE__ */ new Map();
        }
        has(a, b, areMutuallyExclusive) {
          var _this$_data$get;
          const [key1, key2] = a < b ? [a, b] : [b, a];
          const result = (_this$_data$get = this._data.get(key1)) === null || _this$_data$get === void 0 ? void 0 : _this$_data$get.get(key2);
          if (result === void 0) {
            return false;
          }
          return areMutuallyExclusive ? true : areMutuallyExclusive === result;
        }
        add(a, b, areMutuallyExclusive) {
          const [key1, key2] = a < b ? [a, b] : [b, a];
          const map = this._data.get(key1);
          if (map === void 0) {
            this._data.set(key1, /* @__PURE__ */ new Map([[key2, areMutuallyExclusive]]));
          } else {
            map.set(key2, areMutuallyExclusive);
          }
        }
      };
    }
  });

  // ../../node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.js
  var require_PossibleFragmentSpreadsRule = __commonJS({
    "../../node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PossibleFragmentSpreadsRule = PossibleFragmentSpreadsRule;
      var _inspect = require_inspect();
      var _GraphQLError = require_GraphQLError();
      var _definition = require_definition();
      var _typeComparators = require_typeComparators();
      var _typeFromAST = require_typeFromAST();
      function PossibleFragmentSpreadsRule(context) {
        return {
          InlineFragment(node) {
            const fragType = context.getType();
            const parentType = context.getParentType();
            if ((0, _definition.isCompositeType)(fragType) && (0, _definition.isCompositeType)(parentType) && !(0, _typeComparators.doTypesOverlap)(
              context.getSchema(),
              fragType,
              parentType
            )) {
              const parentTypeStr = (0, _inspect.inspect)(parentType);
              const fragTypeStr = (0, _inspect.inspect)(fragType);
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Fragment cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`,
                  {
                    nodes: node
                  }
                )
              );
            }
          },
          FragmentSpread(node) {
            const fragName = node.name.value;
            const fragType = getFragmentType(context, fragName);
            const parentType = context.getParentType();
            if (fragType && parentType && !(0, _typeComparators.doTypesOverlap)(
              context.getSchema(),
              fragType,
              parentType
            )) {
              const parentTypeStr = (0, _inspect.inspect)(parentType);
              const fragTypeStr = (0, _inspect.inspect)(fragType);
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Fragment "${fragName}" cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`,
                  {
                    nodes: node
                  }
                )
              );
            }
          }
        };
      }
      function getFragmentType(context, name) {
        const frag = context.getFragment(name);
        if (frag) {
          const type = (0, _typeFromAST.typeFromAST)(
            context.getSchema(),
            frag.typeCondition
          );
          if ((0, _definition.isCompositeType)(type)) {
            return type;
          }
        }
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.js
  var require_PossibleTypeExtensionsRule = __commonJS({
    "../../node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PossibleTypeExtensionsRule = PossibleTypeExtensionsRule;
      var _didYouMean = require_didYouMean();
      var _inspect = require_inspect();
      var _invariant = require_invariant();
      var _suggestionList = require_suggestionList();
      var _GraphQLError = require_GraphQLError();
      var _kinds = require_kinds();
      var _predicates = require_predicates();
      var _definition = require_definition();
      function PossibleTypeExtensionsRule(context) {
        const schema = context.getSchema();
        const definedTypes = /* @__PURE__ */ Object.create(null);
        for (const def of context.getDocument().definitions) {
          if ((0, _predicates.isTypeDefinitionNode)(def)) {
            definedTypes[def.name.value] = def;
          }
        }
        return {
          ScalarTypeExtension: checkExtension,
          ObjectTypeExtension: checkExtension,
          InterfaceTypeExtension: checkExtension,
          UnionTypeExtension: checkExtension,
          EnumTypeExtension: checkExtension,
          InputObjectTypeExtension: checkExtension
        };
        function checkExtension(node) {
          const typeName = node.name.value;
          const defNode = definedTypes[typeName];
          const existingType = schema === null || schema === void 0 ? void 0 : schema.getType(typeName);
          let expectedKind;
          if (defNode) {
            expectedKind = defKindToExtKind[defNode.kind];
          } else if (existingType) {
            expectedKind = typeToExtKind(existingType);
          }
          if (expectedKind) {
            if (expectedKind !== node.kind) {
              const kindStr = extensionKindToTypeName(node.kind);
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Cannot extend non-${kindStr} type "${typeName}".`,
                  {
                    nodes: defNode ? [defNode, node] : node
                  }
                )
              );
            }
          } else {
            const allTypeNames = Object.keys({
              ...definedTypes,
              ...schema === null || schema === void 0 ? void 0 : schema.getTypeMap()
            });
            const suggestedTypes = (0, _suggestionList.suggestionList)(
              typeName,
              allTypeNames
            );
            context.reportError(
              new _GraphQLError.GraphQLError(
                `Cannot extend type "${typeName}" because it is not defined.` + (0, _didYouMean.didYouMean)(suggestedTypes),
                {
                  nodes: node.name
                }
              )
            );
          }
        }
      }
      var defKindToExtKind = {
        [_kinds.Kind.SCALAR_TYPE_DEFINITION]: _kinds.Kind.SCALAR_TYPE_EXTENSION,
        [_kinds.Kind.OBJECT_TYPE_DEFINITION]: _kinds.Kind.OBJECT_TYPE_EXTENSION,
        [_kinds.Kind.INTERFACE_TYPE_DEFINITION]: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
        [_kinds.Kind.UNION_TYPE_DEFINITION]: _kinds.Kind.UNION_TYPE_EXTENSION,
        [_kinds.Kind.ENUM_TYPE_DEFINITION]: _kinds.Kind.ENUM_TYPE_EXTENSION,
        [_kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION]: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION
      };
      function typeToExtKind(type) {
        if ((0, _definition.isScalarType)(type)) {
          return _kinds.Kind.SCALAR_TYPE_EXTENSION;
        }
        if ((0, _definition.isObjectType)(type)) {
          return _kinds.Kind.OBJECT_TYPE_EXTENSION;
        }
        if ((0, _definition.isInterfaceType)(type)) {
          return _kinds.Kind.INTERFACE_TYPE_EXTENSION;
        }
        if ((0, _definition.isUnionType)(type)) {
          return _kinds.Kind.UNION_TYPE_EXTENSION;
        }
        if ((0, _definition.isEnumType)(type)) {
          return _kinds.Kind.ENUM_TYPE_EXTENSION;
        }
        if ((0, _definition.isInputObjectType)(type)) {
          return _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION;
        }
        (0, _invariant.invariant)(
          false,
          "Unexpected type: " + (0, _inspect.inspect)(type)
        );
      }
      function extensionKindToTypeName(kind) {
        switch (kind) {
          case _kinds.Kind.SCALAR_TYPE_EXTENSION:
            return "scalar";
          case _kinds.Kind.OBJECT_TYPE_EXTENSION:
            return "object";
          case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
            return "interface";
          case _kinds.Kind.UNION_TYPE_EXTENSION:
            return "union";
          case _kinds.Kind.ENUM_TYPE_EXTENSION:
            return "enum";
          case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
            return "input object";
          default:
            (0, _invariant.invariant)(
              false,
              "Unexpected kind: " + (0, _inspect.inspect)(kind)
            );
        }
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.js
  var require_ProvidedRequiredArgumentsRule = __commonJS({
    "../../node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProvidedRequiredArgumentsOnDirectivesRule = ProvidedRequiredArgumentsOnDirectivesRule;
      exports.ProvidedRequiredArgumentsRule = ProvidedRequiredArgumentsRule;
      var _inspect = require_inspect();
      var _keyMap = require_keyMap();
      var _GraphQLError = require_GraphQLError();
      var _kinds = require_kinds();
      var _printer = require_printer();
      var _definition = require_definition();
      var _directives = require_directives();
      function ProvidedRequiredArgumentsRule(context) {
        return {
          ...ProvidedRequiredArgumentsOnDirectivesRule(context),
          Field: {
            leave(fieldNode) {
              var _fieldNode$arguments;
              const fieldDef = context.getFieldDef();
              if (!fieldDef) {
                return false;
              }
              const providedArgs = new Set(
                (_fieldNode$arguments = fieldNode.arguments) === null || _fieldNode$arguments === void 0 ? void 0 : _fieldNode$arguments.map((arg) => arg.name.value)
              );
              for (const argDef of fieldDef.args) {
                if (!providedArgs.has(argDef.name) && (0, _definition.isRequiredArgument)(argDef)) {
                  const argTypeStr = (0, _inspect.inspect)(argDef.type);
                  context.reportError(
                    new _GraphQLError.GraphQLError(
                      `Field "${fieldDef.name}" argument "${argDef.name}" of type "${argTypeStr}" is required, but it was not provided.`,
                      {
                        nodes: fieldNode
                      }
                    )
                  );
                }
              }
            }
          }
        };
      }
      function ProvidedRequiredArgumentsOnDirectivesRule(context) {
        var _schema$getDirectives;
        const requiredArgsMap = /* @__PURE__ */ Object.create(null);
        const schema = context.getSchema();
        const definedDirectives = (_schema$getDirectives = schema === null || schema === void 0 ? void 0 : schema.getDirectives()) !== null && _schema$getDirectives !== void 0 ? _schema$getDirectives : _directives.specifiedDirectives;
        for (const directive of definedDirectives) {
          requiredArgsMap[directive.name] = (0, _keyMap.keyMap)(
            directive.args.filter(_definition.isRequiredArgument),
            (arg) => arg.name
          );
        }
        const astDefinitions = context.getDocument().definitions;
        for (const def of astDefinitions) {
          if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
            var _def$arguments;
            const argNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
            requiredArgsMap[def.name.value] = (0, _keyMap.keyMap)(
              argNodes.filter(isRequiredArgumentNode),
              (arg) => arg.name.value
            );
          }
        }
        return {
          Directive: {
            leave(directiveNode) {
              const directiveName = directiveNode.name.value;
              const requiredArgs = requiredArgsMap[directiveName];
              if (requiredArgs) {
                var _directiveNode$argume;
                const argNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];
                const argNodeMap = new Set(argNodes.map((arg) => arg.name.value));
                for (const [argName, argDef] of Object.entries(requiredArgs)) {
                  if (!argNodeMap.has(argName)) {
                    const argType = (0, _definition.isType)(argDef.type) ? (0, _inspect.inspect)(argDef.type) : (0, _printer.print)(argDef.type);
                    context.reportError(
                      new _GraphQLError.GraphQLError(
                        `Directive "@${directiveName}" argument "${argName}" of type "${argType}" is required, but it was not provided.`,
                        {
                          nodes: directiveNode
                        }
                      )
                    );
                  }
                }
              }
            }
          }
        };
      }
      function isRequiredArgumentNode(arg) {
        return arg.type.kind === _kinds.Kind.NON_NULL_TYPE && arg.defaultValue == null;
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/ScalarLeafsRule.js
  var require_ScalarLeafsRule = __commonJS({
    "../../node_modules/graphql/validation/rules/ScalarLeafsRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ScalarLeafsRule = ScalarLeafsRule;
      var _inspect = require_inspect();
      var _GraphQLError = require_GraphQLError();
      var _definition = require_definition();
      function ScalarLeafsRule(context) {
        return {
          Field(node) {
            const type = context.getType();
            const selectionSet = node.selectionSet;
            if (type) {
              if ((0, _definition.isLeafType)((0, _definition.getNamedType)(type))) {
                if (selectionSet) {
                  const fieldName = node.name.value;
                  const typeStr = (0, _inspect.inspect)(type);
                  context.reportError(
                    new _GraphQLError.GraphQLError(
                      `Field "${fieldName}" must not have a selection since type "${typeStr}" has no subfields.`,
                      {
                        nodes: selectionSet
                      }
                    )
                  );
                }
              } else if (!selectionSet) {
                const fieldName = node.name.value;
                const typeStr = (0, _inspect.inspect)(type);
                context.reportError(
                  new _GraphQLError.GraphQLError(
                    `Field "${fieldName}" of type "${typeStr}" must have a selection of subfields. Did you mean "${fieldName} { ... }"?`,
                    {
                      nodes: node
                    }
                  )
                );
              }
            }
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/jsutils/printPathArray.js
  var require_printPathArray = __commonJS({
    "../../node_modules/graphql/jsutils/printPathArray.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.printPathArray = printPathArray;
      function printPathArray(path) {
        return path.map(
          (key) => typeof key === "number" ? "[" + key.toString() + "]" : "." + key
        ).join("");
      }
    }
  });

  // ../../node_modules/graphql/jsutils/Path.js
  var require_Path = __commonJS({
    "../../node_modules/graphql/jsutils/Path.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.addPath = addPath;
      exports.pathToArray = pathToArray;
      function addPath(prev, key, typename) {
        return {
          prev,
          key,
          typename
        };
      }
      function pathToArray(path) {
        const flattened = [];
        let curr = path;
        while (curr) {
          flattened.push(curr.key);
          curr = curr.prev;
        }
        return flattened.reverse();
      }
    }
  });

  // ../../node_modules/graphql/utilities/coerceInputValue.js
  var require_coerceInputValue = __commonJS({
    "../../node_modules/graphql/utilities/coerceInputValue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.coerceInputValue = coerceInputValue;
      var _didYouMean = require_didYouMean();
      var _inspect = require_inspect();
      var _invariant = require_invariant();
      var _isIterableObject = require_isIterableObject();
      var _isObjectLike = require_isObjectLike();
      var _Path = require_Path();
      var _printPathArray = require_printPathArray();
      var _suggestionList = require_suggestionList();
      var _GraphQLError = require_GraphQLError();
      var _definition = require_definition();
      function coerceInputValue(inputValue, type, onError = defaultOnError) {
        return coerceInputValueImpl(inputValue, type, onError, void 0);
      }
      function defaultOnError(path, invalidValue, error) {
        let errorPrefix = "Invalid value " + (0, _inspect.inspect)(invalidValue);
        if (path.length > 0) {
          errorPrefix += ` at "value${(0, _printPathArray.printPathArray)(path)}"`;
        }
        error.message = errorPrefix + ": " + error.message;
        throw error;
      }
      function coerceInputValueImpl(inputValue, type, onError, path) {
        if ((0, _definition.isNonNullType)(type)) {
          if (inputValue != null) {
            return coerceInputValueImpl(inputValue, type.ofType, onError, path);
          }
          onError(
            (0, _Path.pathToArray)(path),
            inputValue,
            new _GraphQLError.GraphQLError(
              `Expected non-nullable type "${(0, _inspect.inspect)(
                type
              )}" not to be null.`
            )
          );
          return;
        }
        if (inputValue == null) {
          return null;
        }
        if ((0, _definition.isListType)(type)) {
          const itemType = type.ofType;
          if ((0, _isIterableObject.isIterableObject)(inputValue)) {
            return Array.from(inputValue, (itemValue, index) => {
              const itemPath = (0, _Path.addPath)(path, index, void 0);
              return coerceInputValueImpl(itemValue, itemType, onError, itemPath);
            });
          }
          return [coerceInputValueImpl(inputValue, itemType, onError, path)];
        }
        if ((0, _definition.isInputObjectType)(type)) {
          if (!(0, _isObjectLike.isObjectLike)(inputValue)) {
            onError(
              (0, _Path.pathToArray)(path),
              inputValue,
              new _GraphQLError.GraphQLError(
                `Expected type "${type.name}" to be an object.`
              )
            );
            return;
          }
          const coercedValue = {};
          const fieldDefs = type.getFields();
          for (const field of Object.values(fieldDefs)) {
            const fieldValue = inputValue[field.name];
            if (fieldValue === void 0) {
              if (field.defaultValue !== void 0) {
                coercedValue[field.name] = field.defaultValue;
              } else if ((0, _definition.isNonNullType)(field.type)) {
                const typeStr = (0, _inspect.inspect)(field.type);
                onError(
                  (0, _Path.pathToArray)(path),
                  inputValue,
                  new _GraphQLError.GraphQLError(
                    `Field "${field.name}" of required type "${typeStr}" was not provided.`
                  )
                );
              }
              continue;
            }
            coercedValue[field.name] = coerceInputValueImpl(
              fieldValue,
              field.type,
              onError,
              (0, _Path.addPath)(path, field.name, type.name)
            );
          }
          for (const fieldName of Object.keys(inputValue)) {
            if (!fieldDefs[fieldName]) {
              const suggestions = (0, _suggestionList.suggestionList)(
                fieldName,
                Object.keys(type.getFields())
              );
              onError(
                (0, _Path.pathToArray)(path),
                inputValue,
                new _GraphQLError.GraphQLError(
                  `Field "${fieldName}" is not defined by type "${type.name}".` + (0, _didYouMean.didYouMean)(suggestions)
                )
              );
            }
          }
          return coercedValue;
        }
        if ((0, _definition.isLeafType)(type)) {
          let parseResult;
          try {
            parseResult = type.parseValue(inputValue);
          } catch (error) {
            if (error instanceof _GraphQLError.GraphQLError) {
              onError((0, _Path.pathToArray)(path), inputValue, error);
            } else {
              onError(
                (0, _Path.pathToArray)(path),
                inputValue,
                new _GraphQLError.GraphQLError(
                  `Expected type "${type.name}". ` + error.message,
                  {
                    originalError: error
                  }
                )
              );
            }
            return;
          }
          if (parseResult === void 0) {
            onError(
              (0, _Path.pathToArray)(path),
              inputValue,
              new _GraphQLError.GraphQLError(`Expected type "${type.name}".`)
            );
          }
          return parseResult;
        }
        (0, _invariant.invariant)(
          false,
          "Unexpected input type: " + (0, _inspect.inspect)(type)
        );
      }
    }
  });

  // ../../node_modules/graphql/utilities/valueFromAST.js
  var require_valueFromAST = __commonJS({
    "../../node_modules/graphql/utilities/valueFromAST.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.valueFromAST = valueFromAST;
      var _inspect = require_inspect();
      var _invariant = require_invariant();
      var _keyMap = require_keyMap();
      var _kinds = require_kinds();
      var _definition = require_definition();
      function valueFromAST(valueNode, type, variables) {
        if (!valueNode) {
          return;
        }
        if (valueNode.kind === _kinds.Kind.VARIABLE) {
          const variableName = valueNode.name.value;
          if (variables == null || variables[variableName] === void 0) {
            return;
          }
          const variableValue = variables[variableName];
          if (variableValue === null && (0, _definition.isNonNullType)(type)) {
            return;
          }
          return variableValue;
        }
        if ((0, _definition.isNonNullType)(type)) {
          if (valueNode.kind === _kinds.Kind.NULL) {
            return;
          }
          return valueFromAST(valueNode, type.ofType, variables);
        }
        if (valueNode.kind === _kinds.Kind.NULL) {
          return null;
        }
        if ((0, _definition.isListType)(type)) {
          const itemType = type.ofType;
          if (valueNode.kind === _kinds.Kind.LIST) {
            const coercedValues = [];
            for (const itemNode of valueNode.values) {
              if (isMissingVariable(itemNode, variables)) {
                if ((0, _definition.isNonNullType)(itemType)) {
                  return;
                }
                coercedValues.push(null);
              } else {
                const itemValue = valueFromAST(itemNode, itemType, variables);
                if (itemValue === void 0) {
                  return;
                }
                coercedValues.push(itemValue);
              }
            }
            return coercedValues;
          }
          const coercedValue = valueFromAST(valueNode, itemType, variables);
          if (coercedValue === void 0) {
            return;
          }
          return [coercedValue];
        }
        if ((0, _definition.isInputObjectType)(type)) {
          if (valueNode.kind !== _kinds.Kind.OBJECT) {
            return;
          }
          const coercedObj = /* @__PURE__ */ Object.create(null);
          const fieldNodes = (0, _keyMap.keyMap)(
            valueNode.fields,
            (field) => field.name.value
          );
          for (const field of Object.values(type.getFields())) {
            const fieldNode = fieldNodes[field.name];
            if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
              if (field.defaultValue !== void 0) {
                coercedObj[field.name] = field.defaultValue;
              } else if ((0, _definition.isNonNullType)(field.type)) {
                return;
              }
              continue;
            }
            const fieldValue = valueFromAST(fieldNode.value, field.type, variables);
            if (fieldValue === void 0) {
              return;
            }
            coercedObj[field.name] = fieldValue;
          }
          return coercedObj;
        }
        if ((0, _definition.isLeafType)(type)) {
          let result;
          try {
            result = type.parseLiteral(valueNode, variables);
          } catch (_error) {
            return;
          }
          if (result === void 0) {
            return;
          }
          return result;
        }
        (0, _invariant.invariant)(
          false,
          "Unexpected input type: " + (0, _inspect.inspect)(type)
        );
      }
      function isMissingVariable(valueNode, variables) {
        return valueNode.kind === _kinds.Kind.VARIABLE && (variables == null || variables[valueNode.name.value] === void 0);
      }
    }
  });

  // ../../node_modules/graphql/execution/values.js
  var require_values = __commonJS({
    "../../node_modules/graphql/execution/values.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getArgumentValues = getArgumentValues;
      exports.getDirectiveValues = getDirectiveValues;
      exports.getVariableValues = getVariableValues;
      var _inspect = require_inspect();
      var _keyMap = require_keyMap();
      var _printPathArray = require_printPathArray();
      var _GraphQLError = require_GraphQLError();
      var _kinds = require_kinds();
      var _printer = require_printer();
      var _definition = require_definition();
      var _coerceInputValue = require_coerceInputValue();
      var _typeFromAST = require_typeFromAST();
      var _valueFromAST = require_valueFromAST();
      function getVariableValues(schema, varDefNodes, inputs, options) {
        const errors = [];
        const maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors;
        try {
          const coerced = coerceVariableValues(
            schema,
            varDefNodes,
            inputs,
            (error) => {
              if (maxErrors != null && errors.length >= maxErrors) {
                throw new _GraphQLError.GraphQLError(
                  "Too many errors processing variables, error limit reached. Execution aborted."
                );
              }
              errors.push(error);
            }
          );
          if (errors.length === 0) {
            return {
              coerced
            };
          }
        } catch (error) {
          errors.push(error);
        }
        return {
          errors
        };
      }
      function coerceVariableValues(schema, varDefNodes, inputs, onError) {
        const coercedValues = {};
        for (const varDefNode of varDefNodes) {
          const varName = varDefNode.variable.name.value;
          const varType = (0, _typeFromAST.typeFromAST)(schema, varDefNode.type);
          if (!(0, _definition.isInputType)(varType)) {
            const varTypeStr = (0, _printer.print)(varDefNode.type);
            onError(
              new _GraphQLError.GraphQLError(
                `Variable "$${varName}" expected value of type "${varTypeStr}" which cannot be used as an input type.`,
                {
                  nodes: varDefNode.type
                }
              )
            );
            continue;
          }
          if (!hasOwnProperty(inputs, varName)) {
            if (varDefNode.defaultValue) {
              coercedValues[varName] = (0, _valueFromAST.valueFromAST)(
                varDefNode.defaultValue,
                varType
              );
            } else if ((0, _definition.isNonNullType)(varType)) {
              const varTypeStr = (0, _inspect.inspect)(varType);
              onError(
                new _GraphQLError.GraphQLError(
                  `Variable "$${varName}" of required type "${varTypeStr}" was not provided.`,
                  {
                    nodes: varDefNode
                  }
                )
              );
            }
            continue;
          }
          const value = inputs[varName];
          if (value === null && (0, _definition.isNonNullType)(varType)) {
            const varTypeStr = (0, _inspect.inspect)(varType);
            onError(
              new _GraphQLError.GraphQLError(
                `Variable "$${varName}" of non-null type "${varTypeStr}" must not be null.`,
                {
                  nodes: varDefNode
                }
              )
            );
            continue;
          }
          coercedValues[varName] = (0, _coerceInputValue.coerceInputValue)(
            value,
            varType,
            (path, invalidValue, error) => {
              let prefix = `Variable "$${varName}" got invalid value ` + (0, _inspect.inspect)(invalidValue);
              if (path.length > 0) {
                prefix += ` at "${varName}${(0, _printPathArray.printPathArray)(
                  path
                )}"`;
              }
              onError(
                new _GraphQLError.GraphQLError(prefix + "; " + error.message, {
                  nodes: varDefNode,
                  originalError: error.originalError
                })
              );
            }
          );
        }
        return coercedValues;
      }
      function getArgumentValues(def, node, variableValues) {
        var _node$arguments;
        const coercedValues = {};
        const argumentNodes = (_node$arguments = node.arguments) !== null && _node$arguments !== void 0 ? _node$arguments : [];
        const argNodeMap = (0, _keyMap.keyMap)(
          argumentNodes,
          (arg) => arg.name.value
        );
        for (const argDef of def.args) {
          const name = argDef.name;
          const argType = argDef.type;
          const argumentNode = argNodeMap[name];
          if (!argumentNode) {
            if (argDef.defaultValue !== void 0) {
              coercedValues[name] = argDef.defaultValue;
            } else if ((0, _definition.isNonNullType)(argType)) {
              throw new _GraphQLError.GraphQLError(
                `Argument "${name}" of required type "${(0, _inspect.inspect)(
                  argType
                )}" was not provided.`,
                {
                  nodes: node
                }
              );
            }
            continue;
          }
          const valueNode = argumentNode.value;
          let isNull = valueNode.kind === _kinds.Kind.NULL;
          if (valueNode.kind === _kinds.Kind.VARIABLE) {
            const variableName = valueNode.name.value;
            if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
              if (argDef.defaultValue !== void 0) {
                coercedValues[name] = argDef.defaultValue;
              } else if ((0, _definition.isNonNullType)(argType)) {
                throw new _GraphQLError.GraphQLError(
                  `Argument "${name}" of required type "${(0, _inspect.inspect)(
                    argType
                  )}" was provided the variable "$${variableName}" which was not provided a runtime value.`,
                  {
                    nodes: valueNode
                  }
                );
              }
              continue;
            }
            isNull = variableValues[variableName] == null;
          }
          if (isNull && (0, _definition.isNonNullType)(argType)) {
            throw new _GraphQLError.GraphQLError(
              `Argument "${name}" of non-null type "${(0, _inspect.inspect)(
                argType
              )}" must not be null.`,
              {
                nodes: valueNode
              }
            );
          }
          const coercedValue = (0, _valueFromAST.valueFromAST)(
            valueNode,
            argType,
            variableValues
          );
          if (coercedValue === void 0) {
            throw new _GraphQLError.GraphQLError(
              `Argument "${name}" has invalid value ${(0, _printer.print)(
                valueNode
              )}.`,
              {
                nodes: valueNode
              }
            );
          }
          coercedValues[name] = coercedValue;
        }
        return coercedValues;
      }
      function getDirectiveValues(directiveDef, node, variableValues) {
        var _node$directives;
        const directiveNode = (_node$directives = node.directives) === null || _node$directives === void 0 ? void 0 : _node$directives.find(
          (directive) => directive.name.value === directiveDef.name
        );
        if (directiveNode) {
          return getArgumentValues(directiveDef, directiveNode, variableValues);
        }
      }
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
    }
  });

  // ../../node_modules/graphql/execution/collectFields.js
  var require_collectFields = __commonJS({
    "../../node_modules/graphql/execution/collectFields.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.collectFields = collectFields;
      exports.collectSubfields = collectSubfields;
      var _kinds = require_kinds();
      var _definition = require_definition();
      var _directives = require_directives();
      var _typeFromAST = require_typeFromAST();
      var _values = require_values();
      function collectFields(schema, fragments, variableValues, runtimeType, selectionSet) {
        const fields = /* @__PURE__ */ new Map();
        collectFieldsImpl(
          schema,
          fragments,
          variableValues,
          runtimeType,
          selectionSet,
          fields,
          /* @__PURE__ */ new Set()
        );
        return fields;
      }
      function collectSubfields(schema, fragments, variableValues, returnType, fieldNodes) {
        const subFieldNodes = /* @__PURE__ */ new Map();
        const visitedFragmentNames = /* @__PURE__ */ new Set();
        for (const node of fieldNodes) {
          if (node.selectionSet) {
            collectFieldsImpl(
              schema,
              fragments,
              variableValues,
              returnType,
              node.selectionSet,
              subFieldNodes,
              visitedFragmentNames
            );
          }
        }
        return subFieldNodes;
      }
      function collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, visitedFragmentNames) {
        for (const selection of selectionSet.selections) {
          switch (selection.kind) {
            case _kinds.Kind.FIELD: {
              if (!shouldIncludeNode(variableValues, selection)) {
                continue;
              }
              const name = getFieldEntryKey(selection);
              const fieldList = fields.get(name);
              if (fieldList !== void 0) {
                fieldList.push(selection);
              } else {
                fields.set(name, [selection]);
              }
              break;
            }
            case _kinds.Kind.INLINE_FRAGMENT: {
              if (!shouldIncludeNode(variableValues, selection) || !doesFragmentConditionMatch(schema, selection, runtimeType)) {
                continue;
              }
              collectFieldsImpl(
                schema,
                fragments,
                variableValues,
                runtimeType,
                selection.selectionSet,
                fields,
                visitedFragmentNames
              );
              break;
            }
            case _kinds.Kind.FRAGMENT_SPREAD: {
              const fragName = selection.name.value;
              if (visitedFragmentNames.has(fragName) || !shouldIncludeNode(variableValues, selection)) {
                continue;
              }
              visitedFragmentNames.add(fragName);
              const fragment = fragments[fragName];
              if (!fragment || !doesFragmentConditionMatch(schema, fragment, runtimeType)) {
                continue;
              }
              collectFieldsImpl(
                schema,
                fragments,
                variableValues,
                runtimeType,
                fragment.selectionSet,
                fields,
                visitedFragmentNames
              );
              break;
            }
          }
        }
      }
      function shouldIncludeNode(variableValues, node) {
        const skip = (0, _values.getDirectiveValues)(
          _directives.GraphQLSkipDirective,
          node,
          variableValues
        );
        if ((skip === null || skip === void 0 ? void 0 : skip.if) === true) {
          return false;
        }
        const include = (0, _values.getDirectiveValues)(
          _directives.GraphQLIncludeDirective,
          node,
          variableValues
        );
        if ((include === null || include === void 0 ? void 0 : include.if) === false) {
          return false;
        }
        return true;
      }
      function doesFragmentConditionMatch(schema, fragment, type) {
        const typeConditionNode = fragment.typeCondition;
        if (!typeConditionNode) {
          return true;
        }
        const conditionalType = (0, _typeFromAST.typeFromAST)(
          schema,
          typeConditionNode
        );
        if (conditionalType === type) {
          return true;
        }
        if ((0, _definition.isAbstractType)(conditionalType)) {
          return schema.isSubType(conditionalType, type);
        }
        return false;
      }
      function getFieldEntryKey(node) {
        return node.alias ? node.alias.value : node.name.value;
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.js
  var require_SingleFieldSubscriptionsRule = __commonJS({
    "../../node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SingleFieldSubscriptionsRule = SingleFieldSubscriptionsRule;
      var _GraphQLError = require_GraphQLError();
      var _kinds = require_kinds();
      var _collectFields = require_collectFields();
      function SingleFieldSubscriptionsRule(context) {
        return {
          OperationDefinition(node) {
            if (node.operation === "subscription") {
              const schema = context.getSchema();
              const subscriptionType = schema.getSubscriptionType();
              if (subscriptionType) {
                const operationName = node.name ? node.name.value : null;
                const variableValues = /* @__PURE__ */ Object.create(null);
                const document2 = context.getDocument();
                const fragments = /* @__PURE__ */ Object.create(null);
                for (const definition of document2.definitions) {
                  if (definition.kind === _kinds.Kind.FRAGMENT_DEFINITION) {
                    fragments[definition.name.value] = definition;
                  }
                }
                const fields = (0, _collectFields.collectFields)(
                  schema,
                  fragments,
                  variableValues,
                  subscriptionType,
                  node.selectionSet
                );
                if (fields.size > 1) {
                  const fieldSelectionLists = [...fields.values()];
                  const extraFieldSelectionLists = fieldSelectionLists.slice(1);
                  const extraFieldSelections = extraFieldSelectionLists.flat();
                  context.reportError(
                    new _GraphQLError.GraphQLError(
                      operationName != null ? `Subscription "${operationName}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.",
                      {
                        nodes: extraFieldSelections
                      }
                    )
                  );
                }
                for (const fieldNodes of fields.values()) {
                  const field = fieldNodes[0];
                  const fieldName = field.name.value;
                  if (fieldName.startsWith("__")) {
                    context.reportError(
                      new _GraphQLError.GraphQLError(
                        operationName != null ? `Subscription "${operationName}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.",
                        {
                          nodes: fieldNodes
                        }
                      )
                    );
                  }
                }
              }
            }
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/jsutils/groupBy.js
  var require_groupBy = __commonJS({
    "../../node_modules/graphql/jsutils/groupBy.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.groupBy = groupBy;
      function groupBy(list, keyFn) {
        const result = /* @__PURE__ */ new Map();
        for (const item of list) {
          const key = keyFn(item);
          const group = result.get(key);
          if (group === void 0) {
            result.set(key, [item]);
          } else {
            group.push(item);
          }
        }
        return result;
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/UniqueArgumentDefinitionNamesRule.js
  var require_UniqueArgumentDefinitionNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/UniqueArgumentDefinitionNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UniqueArgumentDefinitionNamesRule = UniqueArgumentDefinitionNamesRule;
      var _groupBy = require_groupBy();
      var _GraphQLError = require_GraphQLError();
      function UniqueArgumentDefinitionNamesRule(context) {
        return {
          DirectiveDefinition(directiveNode) {
            var _directiveNode$argume;
            const argumentNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];
            return checkArgUniqueness(`@${directiveNode.name.value}`, argumentNodes);
          },
          InterfaceTypeDefinition: checkArgUniquenessPerField,
          InterfaceTypeExtension: checkArgUniquenessPerField,
          ObjectTypeDefinition: checkArgUniquenessPerField,
          ObjectTypeExtension: checkArgUniquenessPerField
        };
        function checkArgUniquenessPerField(typeNode) {
          var _typeNode$fields;
          const typeName = typeNode.name.value;
          const fieldNodes = (_typeNode$fields = typeNode.fields) !== null && _typeNode$fields !== void 0 ? _typeNode$fields : [];
          for (const fieldDef of fieldNodes) {
            var _fieldDef$arguments;
            const fieldName = fieldDef.name.value;
            const argumentNodes = (_fieldDef$arguments = fieldDef.arguments) !== null && _fieldDef$arguments !== void 0 ? _fieldDef$arguments : [];
            checkArgUniqueness(`${typeName}.${fieldName}`, argumentNodes);
          }
          return false;
        }
        function checkArgUniqueness(parentName, argumentNodes) {
          const seenArgs = (0, _groupBy.groupBy)(
            argumentNodes,
            (arg) => arg.name.value
          );
          for (const [argName, argNodes] of seenArgs) {
            if (argNodes.length > 1) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Argument "${parentName}(${argName}:)" can only be defined once.`,
                  {
                    nodes: argNodes.map((node) => node.name)
                  }
                )
              );
            }
          }
          return false;
        }
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/UniqueArgumentNamesRule.js
  var require_UniqueArgumentNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/UniqueArgumentNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UniqueArgumentNamesRule = UniqueArgumentNamesRule;
      var _groupBy = require_groupBy();
      var _GraphQLError = require_GraphQLError();
      function UniqueArgumentNamesRule(context) {
        return {
          Field: checkArgUniqueness,
          Directive: checkArgUniqueness
        };
        function checkArgUniqueness(parentNode) {
          var _parentNode$arguments;
          const argumentNodes = (_parentNode$arguments = parentNode.arguments) !== null && _parentNode$arguments !== void 0 ? _parentNode$arguments : [];
          const seenArgs = (0, _groupBy.groupBy)(
            argumentNodes,
            (arg) => arg.name.value
          );
          for (const [argName, argNodes] of seenArgs) {
            if (argNodes.length > 1) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `There can be only one argument named "${argName}".`,
                  {
                    nodes: argNodes.map((node) => node.name)
                  }
                )
              );
            }
          }
        }
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.js
  var require_UniqueDirectiveNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UniqueDirectiveNamesRule = UniqueDirectiveNamesRule;
      var _GraphQLError = require_GraphQLError();
      function UniqueDirectiveNamesRule(context) {
        const knownDirectiveNames = /* @__PURE__ */ Object.create(null);
        const schema = context.getSchema();
        return {
          DirectiveDefinition(node) {
            const directiveName = node.name.value;
            if (schema !== null && schema !== void 0 && schema.getDirective(directiveName)) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Directive "@${directiveName}" already exists in the schema. It cannot be redefined.`,
                  {
                    nodes: node.name
                  }
                )
              );
              return;
            }
            if (knownDirectiveNames[directiveName]) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `There can be only one directive named "@${directiveName}".`,
                  {
                    nodes: [knownDirectiveNames[directiveName], node.name]
                  }
                )
              );
            } else {
              knownDirectiveNames[directiveName] = node.name;
            }
            return false;
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.js
  var require_UniqueDirectivesPerLocationRule = __commonJS({
    "../../node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UniqueDirectivesPerLocationRule = UniqueDirectivesPerLocationRule;
      var _GraphQLError = require_GraphQLError();
      var _kinds = require_kinds();
      var _predicates = require_predicates();
      var _directives = require_directives();
      function UniqueDirectivesPerLocationRule(context) {
        const uniqueDirectiveMap = /* @__PURE__ */ Object.create(null);
        const schema = context.getSchema();
        const definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
        for (const directive of definedDirectives) {
          uniqueDirectiveMap[directive.name] = !directive.isRepeatable;
        }
        const astDefinitions = context.getDocument().definitions;
        for (const def of astDefinitions) {
          if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
            uniqueDirectiveMap[def.name.value] = !def.repeatable;
          }
        }
        const schemaDirectives = /* @__PURE__ */ Object.create(null);
        const typeDirectivesMap = /* @__PURE__ */ Object.create(null);
        return {
          enter(node) {
            if (!("directives" in node) || !node.directives) {
              return;
            }
            let seenDirectives;
            if (node.kind === _kinds.Kind.SCHEMA_DEFINITION || node.kind === _kinds.Kind.SCHEMA_EXTENSION) {
              seenDirectives = schemaDirectives;
            } else if ((0, _predicates.isTypeDefinitionNode)(node) || (0, _predicates.isTypeExtensionNode)(node)) {
              const typeName = node.name.value;
              seenDirectives = typeDirectivesMap[typeName];
              if (seenDirectives === void 0) {
                typeDirectivesMap[typeName] = seenDirectives = /* @__PURE__ */ Object.create(null);
              }
            } else {
              seenDirectives = /* @__PURE__ */ Object.create(null);
            }
            for (const directive of node.directives) {
              const directiveName = directive.name.value;
              if (uniqueDirectiveMap[directiveName]) {
                if (seenDirectives[directiveName]) {
                  context.reportError(
                    new _GraphQLError.GraphQLError(
                      `The directive "@${directiveName}" can only be used once at this location.`,
                      {
                        nodes: [seenDirectives[directiveName], directive]
                      }
                    )
                  );
                } else {
                  seenDirectives[directiveName] = directive;
                }
              }
            }
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.js
  var require_UniqueEnumValueNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UniqueEnumValueNamesRule = UniqueEnumValueNamesRule;
      var _GraphQLError = require_GraphQLError();
      var _definition = require_definition();
      function UniqueEnumValueNamesRule(context) {
        const schema = context.getSchema();
        const existingTypeMap = schema ? schema.getTypeMap() : /* @__PURE__ */ Object.create(null);
        const knownValueNames = /* @__PURE__ */ Object.create(null);
        return {
          EnumTypeDefinition: checkValueUniqueness,
          EnumTypeExtension: checkValueUniqueness
        };
        function checkValueUniqueness(node) {
          var _node$values;
          const typeName = node.name.value;
          if (!knownValueNames[typeName]) {
            knownValueNames[typeName] = /* @__PURE__ */ Object.create(null);
          }
          const valueNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
          const valueNames = knownValueNames[typeName];
          for (const valueDef of valueNodes) {
            const valueName = valueDef.name.value;
            const existingType = existingTypeMap[typeName];
            if ((0, _definition.isEnumType)(existingType) && existingType.getValue(valueName)) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Enum value "${typeName}.${valueName}" already exists in the schema. It cannot also be defined in this type extension.`,
                  {
                    nodes: valueDef.name
                  }
                )
              );
            } else if (valueNames[valueName]) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Enum value "${typeName}.${valueName}" can only be defined once.`,
                  {
                    nodes: [valueNames[valueName], valueDef.name]
                  }
                )
              );
            } else {
              valueNames[valueName] = valueDef.name;
            }
          }
          return false;
        }
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.js
  var require_UniqueFieldDefinitionNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UniqueFieldDefinitionNamesRule = UniqueFieldDefinitionNamesRule;
      var _GraphQLError = require_GraphQLError();
      var _definition = require_definition();
      function UniqueFieldDefinitionNamesRule(context) {
        const schema = context.getSchema();
        const existingTypeMap = schema ? schema.getTypeMap() : /* @__PURE__ */ Object.create(null);
        const knownFieldNames = /* @__PURE__ */ Object.create(null);
        return {
          InputObjectTypeDefinition: checkFieldUniqueness,
          InputObjectTypeExtension: checkFieldUniqueness,
          InterfaceTypeDefinition: checkFieldUniqueness,
          InterfaceTypeExtension: checkFieldUniqueness,
          ObjectTypeDefinition: checkFieldUniqueness,
          ObjectTypeExtension: checkFieldUniqueness
        };
        function checkFieldUniqueness(node) {
          var _node$fields;
          const typeName = node.name.value;
          if (!knownFieldNames[typeName]) {
            knownFieldNames[typeName] = /* @__PURE__ */ Object.create(null);
          }
          const fieldNodes = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
          const fieldNames = knownFieldNames[typeName];
          for (const fieldDef of fieldNodes) {
            const fieldName = fieldDef.name.value;
            if (hasField(existingTypeMap[typeName], fieldName)) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Field "${typeName}.${fieldName}" already exists in the schema. It cannot also be defined in this type extension.`,
                  {
                    nodes: fieldDef.name
                  }
                )
              );
            } else if (fieldNames[fieldName]) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Field "${typeName}.${fieldName}" can only be defined once.`,
                  {
                    nodes: [fieldNames[fieldName], fieldDef.name]
                  }
                )
              );
            } else {
              fieldNames[fieldName] = fieldDef.name;
            }
          }
          return false;
        }
      }
      function hasField(type, fieldName) {
        if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type) || (0, _definition.isInputObjectType)(type)) {
          return type.getFields()[fieldName] != null;
        }
        return false;
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/UniqueFragmentNamesRule.js
  var require_UniqueFragmentNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/UniqueFragmentNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UniqueFragmentNamesRule = UniqueFragmentNamesRule;
      var _GraphQLError = require_GraphQLError();
      function UniqueFragmentNamesRule(context) {
        const knownFragmentNames = /* @__PURE__ */ Object.create(null);
        return {
          OperationDefinition: () => false,
          FragmentDefinition(node) {
            const fragmentName = node.name.value;
            if (knownFragmentNames[fragmentName]) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `There can be only one fragment named "${fragmentName}".`,
                  {
                    nodes: [knownFragmentNames[fragmentName], node.name]
                  }
                )
              );
            } else {
              knownFragmentNames[fragmentName] = node.name;
            }
            return false;
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.js
  var require_UniqueInputFieldNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UniqueInputFieldNamesRule = UniqueInputFieldNamesRule;
      var _invariant = require_invariant();
      var _GraphQLError = require_GraphQLError();
      function UniqueInputFieldNamesRule(context) {
        const knownNameStack = [];
        let knownNames = /* @__PURE__ */ Object.create(null);
        return {
          ObjectValue: {
            enter() {
              knownNameStack.push(knownNames);
              knownNames = /* @__PURE__ */ Object.create(null);
            },
            leave() {
              const prevKnownNames = knownNameStack.pop();
              prevKnownNames || (0, _invariant.invariant)(false);
              knownNames = prevKnownNames;
            }
          },
          ObjectField(node) {
            const fieldName = node.name.value;
            if (knownNames[fieldName]) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `There can be only one input field named "${fieldName}".`,
                  {
                    nodes: [knownNames[fieldName], node.name]
                  }
                )
              );
            } else {
              knownNames[fieldName] = node.name;
            }
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/UniqueOperationNamesRule.js
  var require_UniqueOperationNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/UniqueOperationNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UniqueOperationNamesRule = UniqueOperationNamesRule;
      var _GraphQLError = require_GraphQLError();
      function UniqueOperationNamesRule(context) {
        const knownOperationNames = /* @__PURE__ */ Object.create(null);
        return {
          OperationDefinition(node) {
            const operationName = node.name;
            if (operationName) {
              if (knownOperationNames[operationName.value]) {
                context.reportError(
                  new _GraphQLError.GraphQLError(
                    `There can be only one operation named "${operationName.value}".`,
                    {
                      nodes: [
                        knownOperationNames[operationName.value],
                        operationName
                      ]
                    }
                  )
                );
              } else {
                knownOperationNames[operationName.value] = operationName;
              }
            }
            return false;
          },
          FragmentDefinition: () => false
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/UniqueOperationTypesRule.js
  var require_UniqueOperationTypesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/UniqueOperationTypesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UniqueOperationTypesRule = UniqueOperationTypesRule;
      var _GraphQLError = require_GraphQLError();
      function UniqueOperationTypesRule(context) {
        const schema = context.getSchema();
        const definedOperationTypes = /* @__PURE__ */ Object.create(null);
        const existingOperationTypes = schema ? {
          query: schema.getQueryType(),
          mutation: schema.getMutationType(),
          subscription: schema.getSubscriptionType()
        } : {};
        return {
          SchemaDefinition: checkOperationTypes,
          SchemaExtension: checkOperationTypes
        };
        function checkOperationTypes(node) {
          var _node$operationTypes;
          const operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];
          for (const operationType of operationTypesNodes) {
            const operation = operationType.operation;
            const alreadyDefinedOperationType = definedOperationTypes[operation];
            if (existingOperationTypes[operation]) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Type for ${operation} already defined in the schema. It cannot be redefined.`,
                  {
                    nodes: operationType
                  }
                )
              );
            } else if (alreadyDefinedOperationType) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `There can be only one ${operation} type in schema.`,
                  {
                    nodes: [alreadyDefinedOperationType, operationType]
                  }
                )
              );
            } else {
              definedOperationTypes[operation] = operationType;
            }
          }
          return false;
        }
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/UniqueTypeNamesRule.js
  var require_UniqueTypeNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/UniqueTypeNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UniqueTypeNamesRule = UniqueTypeNamesRule;
      var _GraphQLError = require_GraphQLError();
      function UniqueTypeNamesRule(context) {
        const knownTypeNames = /* @__PURE__ */ Object.create(null);
        const schema = context.getSchema();
        return {
          ScalarTypeDefinition: checkTypeName,
          ObjectTypeDefinition: checkTypeName,
          InterfaceTypeDefinition: checkTypeName,
          UnionTypeDefinition: checkTypeName,
          EnumTypeDefinition: checkTypeName,
          InputObjectTypeDefinition: checkTypeName
        };
        function checkTypeName(node) {
          const typeName = node.name.value;
          if (schema !== null && schema !== void 0 && schema.getType(typeName)) {
            context.reportError(
              new _GraphQLError.GraphQLError(
                `Type "${typeName}" already exists in the schema. It cannot also be defined in this type definition.`,
                {
                  nodes: node.name
                }
              )
            );
            return;
          }
          if (knownTypeNames[typeName]) {
            context.reportError(
              new _GraphQLError.GraphQLError(
                `There can be only one type named "${typeName}".`,
                {
                  nodes: [knownTypeNames[typeName], node.name]
                }
              )
            );
          } else {
            knownTypeNames[typeName] = node.name;
          }
          return false;
        }
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/UniqueVariableNamesRule.js
  var require_UniqueVariableNamesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/UniqueVariableNamesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UniqueVariableNamesRule = UniqueVariableNamesRule;
      var _groupBy = require_groupBy();
      var _GraphQLError = require_GraphQLError();
      function UniqueVariableNamesRule(context) {
        return {
          OperationDefinition(operationNode) {
            var _operationNode$variab;
            const variableDefinitions = (_operationNode$variab = operationNode.variableDefinitions) !== null && _operationNode$variab !== void 0 ? _operationNode$variab : [];
            const seenVariableDefinitions = (0, _groupBy.groupBy)(
              variableDefinitions,
              (node) => node.variable.name.value
            );
            for (const [variableName, variableNodes] of seenVariableDefinitions) {
              if (variableNodes.length > 1) {
                context.reportError(
                  new _GraphQLError.GraphQLError(
                    `There can be only one variable named "$${variableName}".`,
                    {
                      nodes: variableNodes.map((node) => node.variable.name)
                    }
                  )
                );
              }
            }
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.js
  var require_ValuesOfCorrectTypeRule = __commonJS({
    "../../node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ValuesOfCorrectTypeRule = ValuesOfCorrectTypeRule;
      var _didYouMean = require_didYouMean();
      var _inspect = require_inspect();
      var _keyMap = require_keyMap();
      var _suggestionList = require_suggestionList();
      var _GraphQLError = require_GraphQLError();
      var _printer = require_printer();
      var _definition = require_definition();
      function ValuesOfCorrectTypeRule(context) {
        return {
          ListValue(node) {
            const type = (0, _definition.getNullableType)(
              context.getParentInputType()
            );
            if (!(0, _definition.isListType)(type)) {
              isValidValueNode(context, node);
              return false;
            }
          },
          ObjectValue(node) {
            const type = (0, _definition.getNamedType)(context.getInputType());
            if (!(0, _definition.isInputObjectType)(type)) {
              isValidValueNode(context, node);
              return false;
            }
            const fieldNodeMap = (0, _keyMap.keyMap)(
              node.fields,
              (field) => field.name.value
            );
            for (const fieldDef of Object.values(type.getFields())) {
              const fieldNode = fieldNodeMap[fieldDef.name];
              if (!fieldNode && (0, _definition.isRequiredInputField)(fieldDef)) {
                const typeStr = (0, _inspect.inspect)(fieldDef.type);
                context.reportError(
                  new _GraphQLError.GraphQLError(
                    `Field "${type.name}.${fieldDef.name}" of required type "${typeStr}" was not provided.`,
                    {
                      nodes: node
                    }
                  )
                );
              }
            }
          },
          ObjectField(node) {
            const parentType = (0, _definition.getNamedType)(
              context.getParentInputType()
            );
            const fieldType = context.getInputType();
            if (!fieldType && (0, _definition.isInputObjectType)(parentType)) {
              const suggestions = (0, _suggestionList.suggestionList)(
                node.name.value,
                Object.keys(parentType.getFields())
              );
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Field "${node.name.value}" is not defined by type "${parentType.name}".` + (0, _didYouMean.didYouMean)(suggestions),
                  {
                    nodes: node
                  }
                )
              );
            }
          },
          NullValue(node) {
            const type = context.getInputType();
            if ((0, _definition.isNonNullType)(type)) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Expected value of type "${(0, _inspect.inspect)(
                    type
                  )}", found ${(0, _printer.print)(node)}.`,
                  {
                    nodes: node
                  }
                )
              );
            }
          },
          EnumValue: (node) => isValidValueNode(context, node),
          IntValue: (node) => isValidValueNode(context, node),
          FloatValue: (node) => isValidValueNode(context, node),
          StringValue: (node) => isValidValueNode(context, node),
          BooleanValue: (node) => isValidValueNode(context, node)
        };
      }
      function isValidValueNode(context, node) {
        const locationType = context.getInputType();
        if (!locationType) {
          return;
        }
        const type = (0, _definition.getNamedType)(locationType);
        if (!(0, _definition.isLeafType)(type)) {
          const typeStr = (0, _inspect.inspect)(locationType);
          context.reportError(
            new _GraphQLError.GraphQLError(
              `Expected value of type "${typeStr}", found ${(0, _printer.print)(
                node
              )}.`,
              {
                nodes: node
              }
            )
          );
          return;
        }
        try {
          const parseResult = type.parseLiteral(
            node,
            void 0
          );
          if (parseResult === void 0) {
            const typeStr = (0, _inspect.inspect)(locationType);
            context.reportError(
              new _GraphQLError.GraphQLError(
                `Expected value of type "${typeStr}", found ${(0, _printer.print)(
                  node
                )}.`,
                {
                  nodes: node
                }
              )
            );
          }
        } catch (error) {
          const typeStr = (0, _inspect.inspect)(locationType);
          if (error instanceof _GraphQLError.GraphQLError) {
            context.reportError(error);
          } else {
            context.reportError(
              new _GraphQLError.GraphQLError(
                `Expected value of type "${typeStr}", found ${(0, _printer.print)(
                  node
                )}; ` + error.message,
                {
                  nodes: node,
                  originalError: error
                }
              )
            );
          }
        }
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/VariablesAreInputTypesRule.js
  var require_VariablesAreInputTypesRule = __commonJS({
    "../../node_modules/graphql/validation/rules/VariablesAreInputTypesRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.VariablesAreInputTypesRule = VariablesAreInputTypesRule;
      var _GraphQLError = require_GraphQLError();
      var _printer = require_printer();
      var _definition = require_definition();
      var _typeFromAST = require_typeFromAST();
      function VariablesAreInputTypesRule(context) {
        return {
          VariableDefinition(node) {
            const type = (0, _typeFromAST.typeFromAST)(
              context.getSchema(),
              node.type
            );
            if (type !== void 0 && !(0, _definition.isInputType)(type)) {
              const variableName = node.variable.name.value;
              const typeName = (0, _printer.print)(node.type);
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `Variable "$${variableName}" cannot be non-input type "${typeName}".`,
                  {
                    nodes: node.type
                  }
                )
              );
            }
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.js
  var require_VariablesInAllowedPositionRule = __commonJS({
    "../../node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.VariablesInAllowedPositionRule = VariablesInAllowedPositionRule;
      var _inspect = require_inspect();
      var _GraphQLError = require_GraphQLError();
      var _kinds = require_kinds();
      var _definition = require_definition();
      var _typeComparators = require_typeComparators();
      var _typeFromAST = require_typeFromAST();
      function VariablesInAllowedPositionRule(context) {
        let varDefMap = /* @__PURE__ */ Object.create(null);
        return {
          OperationDefinition: {
            enter() {
              varDefMap = /* @__PURE__ */ Object.create(null);
            },
            leave(operation) {
              const usages = context.getRecursiveVariableUsages(operation);
              for (const { node, type, defaultValue } of usages) {
                const varName = node.name.value;
                const varDef = varDefMap[varName];
                if (varDef && type) {
                  const schema = context.getSchema();
                  const varType = (0, _typeFromAST.typeFromAST)(schema, varDef.type);
                  if (varType && !allowedVariableUsage(
                    schema,
                    varType,
                    varDef.defaultValue,
                    type,
                    defaultValue
                  )) {
                    const varTypeStr = (0, _inspect.inspect)(varType);
                    const typeStr = (0, _inspect.inspect)(type);
                    context.reportError(
                      new _GraphQLError.GraphQLError(
                        `Variable "$${varName}" of type "${varTypeStr}" used in position expecting type "${typeStr}".`,
                        {
                          nodes: [varDef, node]
                        }
                      )
                    );
                  }
                }
              }
            }
          },
          VariableDefinition(node) {
            varDefMap[node.variable.name.value] = node;
          }
        };
      }
      function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
        if ((0, _definition.isNonNullType)(locationType) && !(0, _definition.isNonNullType)(varType)) {
          const hasNonNullVariableDefaultValue = varDefaultValue != null && varDefaultValue.kind !== _kinds.Kind.NULL;
          const hasLocationDefaultValue = locationDefaultValue !== void 0;
          if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
            return false;
          }
          const nullableLocationType = locationType.ofType;
          return (0, _typeComparators.isTypeSubTypeOf)(
            schema,
            varType,
            nullableLocationType
          );
        }
        return (0, _typeComparators.isTypeSubTypeOf)(schema, varType, locationType);
      }
    }
  });

  // ../../node_modules/graphql/validation/specifiedRules.js
  var require_specifiedRules = __commonJS({
    "../../node_modules/graphql/validation/specifiedRules.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.specifiedSDLRules = exports.specifiedRules = void 0;
      var _ExecutableDefinitionsRule = require_ExecutableDefinitionsRule();
      var _FieldsOnCorrectTypeRule = require_FieldsOnCorrectTypeRule();
      var _FragmentsOnCompositeTypesRule = require_FragmentsOnCompositeTypesRule();
      var _KnownArgumentNamesRule = require_KnownArgumentNamesRule();
      var _KnownDirectivesRule = require_KnownDirectivesRule();
      var _KnownFragmentNamesRule = require_KnownFragmentNamesRule();
      var _KnownTypeNamesRule = require_KnownTypeNamesRule();
      var _LoneAnonymousOperationRule = require_LoneAnonymousOperationRule();
      var _LoneSchemaDefinitionRule = require_LoneSchemaDefinitionRule();
      var _NoFragmentCyclesRule = require_NoFragmentCyclesRule();
      var _NoUndefinedVariablesRule = require_NoUndefinedVariablesRule();
      var _NoUnusedFragmentsRule = require_NoUnusedFragmentsRule();
      var _NoUnusedVariablesRule = require_NoUnusedVariablesRule();
      var _OverlappingFieldsCanBeMergedRule = require_OverlappingFieldsCanBeMergedRule();
      var _PossibleFragmentSpreadsRule = require_PossibleFragmentSpreadsRule();
      var _PossibleTypeExtensionsRule = require_PossibleTypeExtensionsRule();
      var _ProvidedRequiredArgumentsRule = require_ProvidedRequiredArgumentsRule();
      var _ScalarLeafsRule = require_ScalarLeafsRule();
      var _SingleFieldSubscriptionsRule = require_SingleFieldSubscriptionsRule();
      var _UniqueArgumentDefinitionNamesRule = require_UniqueArgumentDefinitionNamesRule();
      var _UniqueArgumentNamesRule = require_UniqueArgumentNamesRule();
      var _UniqueDirectiveNamesRule = require_UniqueDirectiveNamesRule();
      var _UniqueDirectivesPerLocationRule = require_UniqueDirectivesPerLocationRule();
      var _UniqueEnumValueNamesRule = require_UniqueEnumValueNamesRule();
      var _UniqueFieldDefinitionNamesRule = require_UniqueFieldDefinitionNamesRule();
      var _UniqueFragmentNamesRule = require_UniqueFragmentNamesRule();
      var _UniqueInputFieldNamesRule = require_UniqueInputFieldNamesRule();
      var _UniqueOperationNamesRule = require_UniqueOperationNamesRule();
      var _UniqueOperationTypesRule = require_UniqueOperationTypesRule();
      var _UniqueTypeNamesRule = require_UniqueTypeNamesRule();
      var _UniqueVariableNamesRule = require_UniqueVariableNamesRule();
      var _ValuesOfCorrectTypeRule = require_ValuesOfCorrectTypeRule();
      var _VariablesAreInputTypesRule = require_VariablesAreInputTypesRule();
      var _VariablesInAllowedPositionRule = require_VariablesInAllowedPositionRule();
      var specifiedRules = Object.freeze([
        _ExecutableDefinitionsRule.ExecutableDefinitionsRule,
        _UniqueOperationNamesRule.UniqueOperationNamesRule,
        _LoneAnonymousOperationRule.LoneAnonymousOperationRule,
        _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule,
        _KnownTypeNamesRule.KnownTypeNamesRule,
        _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule,
        _VariablesAreInputTypesRule.VariablesAreInputTypesRule,
        _ScalarLeafsRule.ScalarLeafsRule,
        _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule,
        _UniqueFragmentNamesRule.UniqueFragmentNamesRule,
        _KnownFragmentNamesRule.KnownFragmentNamesRule,
        _NoUnusedFragmentsRule.NoUnusedFragmentsRule,
        _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule,
        _NoFragmentCyclesRule.NoFragmentCyclesRule,
        _UniqueVariableNamesRule.UniqueVariableNamesRule,
        _NoUndefinedVariablesRule.NoUndefinedVariablesRule,
        _NoUnusedVariablesRule.NoUnusedVariablesRule,
        _KnownDirectivesRule.KnownDirectivesRule,
        _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule,
        _KnownArgumentNamesRule.KnownArgumentNamesRule,
        _UniqueArgumentNamesRule.UniqueArgumentNamesRule,
        _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule,
        _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule,
        _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule,
        _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule,
        _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule
      ]);
      exports.specifiedRules = specifiedRules;
      var specifiedSDLRules = Object.freeze([
        _LoneSchemaDefinitionRule.LoneSchemaDefinitionRule,
        _UniqueOperationTypesRule.UniqueOperationTypesRule,
        _UniqueTypeNamesRule.UniqueTypeNamesRule,
        _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule,
        _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule,
        _UniqueArgumentDefinitionNamesRule.UniqueArgumentDefinitionNamesRule,
        _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule,
        _KnownTypeNamesRule.KnownTypeNamesRule,
        _KnownDirectivesRule.KnownDirectivesRule,
        _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule,
        _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule,
        _KnownArgumentNamesRule.KnownArgumentNamesOnDirectivesRule,
        _UniqueArgumentNamesRule.UniqueArgumentNamesRule,
        _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule,
        _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsOnDirectivesRule
      ]);
      exports.specifiedSDLRules = specifiedSDLRules;
    }
  });

  // ../../node_modules/graphql/validation/ValidationContext.js
  var require_ValidationContext = __commonJS({
    "../../node_modules/graphql/validation/ValidationContext.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ValidationContext = exports.SDLValidationContext = exports.ASTValidationContext = void 0;
      var _kinds = require_kinds();
      var _visitor = require_visitor();
      var _TypeInfo = require_TypeInfo();
      var ASTValidationContext = class {
        constructor(ast, onError) {
          this._ast = ast;
          this._fragments = void 0;
          this._fragmentSpreads = /* @__PURE__ */ new Map();
          this._recursivelyReferencedFragments = /* @__PURE__ */ new Map();
          this._onError = onError;
        }
        get [Symbol.toStringTag]() {
          return "ASTValidationContext";
        }
        reportError(error) {
          this._onError(error);
        }
        getDocument() {
          return this._ast;
        }
        getFragment(name) {
          let fragments;
          if (this._fragments) {
            fragments = this._fragments;
          } else {
            fragments = /* @__PURE__ */ Object.create(null);
            for (const defNode of this.getDocument().definitions) {
              if (defNode.kind === _kinds.Kind.FRAGMENT_DEFINITION) {
                fragments[defNode.name.value] = defNode;
              }
            }
            this._fragments = fragments;
          }
          return fragments[name];
        }
        getFragmentSpreads(node) {
          let spreads = this._fragmentSpreads.get(node);
          if (!spreads) {
            spreads = [];
            const setsToVisit = [node];
            let set;
            while (set = setsToVisit.pop()) {
              for (const selection of set.selections) {
                if (selection.kind === _kinds.Kind.FRAGMENT_SPREAD) {
                  spreads.push(selection);
                } else if (selection.selectionSet) {
                  setsToVisit.push(selection.selectionSet);
                }
              }
            }
            this._fragmentSpreads.set(node, spreads);
          }
          return spreads;
        }
        getRecursivelyReferencedFragments(operation) {
          let fragments = this._recursivelyReferencedFragments.get(operation);
          if (!fragments) {
            fragments = [];
            const collectedNames = /* @__PURE__ */ Object.create(null);
            const nodesToVisit = [operation.selectionSet];
            let node;
            while (node = nodesToVisit.pop()) {
              for (const spread of this.getFragmentSpreads(node)) {
                const fragName = spread.name.value;
                if (collectedNames[fragName] !== true) {
                  collectedNames[fragName] = true;
                  const fragment = this.getFragment(fragName);
                  if (fragment) {
                    fragments.push(fragment);
                    nodesToVisit.push(fragment.selectionSet);
                  }
                }
              }
            }
            this._recursivelyReferencedFragments.set(operation, fragments);
          }
          return fragments;
        }
      };
      exports.ASTValidationContext = ASTValidationContext;
      var SDLValidationContext = class extends ASTValidationContext {
        constructor(ast, schema, onError) {
          super(ast, onError);
          this._schema = schema;
        }
        get [Symbol.toStringTag]() {
          return "SDLValidationContext";
        }
        getSchema() {
          return this._schema;
        }
      };
      exports.SDLValidationContext = SDLValidationContext;
      var ValidationContext = class extends ASTValidationContext {
        constructor(schema, ast, typeInfo, onError) {
          super(ast, onError);
          this._schema = schema;
          this._typeInfo = typeInfo;
          this._variableUsages = /* @__PURE__ */ new Map();
          this._recursiveVariableUsages = /* @__PURE__ */ new Map();
        }
        get [Symbol.toStringTag]() {
          return "ValidationContext";
        }
        getSchema() {
          return this._schema;
        }
        getVariableUsages(node) {
          let usages = this._variableUsages.get(node);
          if (!usages) {
            const newUsages = [];
            const typeInfo = new _TypeInfo.TypeInfo(this._schema);
            (0, _visitor.visit)(
              node,
              (0, _TypeInfo.visitWithTypeInfo)(typeInfo, {
                VariableDefinition: () => false,
                Variable(variable) {
                  newUsages.push({
                    node: variable,
                    type: typeInfo.getInputType(),
                    defaultValue: typeInfo.getDefaultValue()
                  });
                }
              })
            );
            usages = newUsages;
            this._variableUsages.set(node, usages);
          }
          return usages;
        }
        getRecursiveVariableUsages(operation) {
          let usages = this._recursiveVariableUsages.get(operation);
          if (!usages) {
            usages = this.getVariableUsages(operation);
            for (const frag of this.getRecursivelyReferencedFragments(operation)) {
              usages = usages.concat(this.getVariableUsages(frag));
            }
            this._recursiveVariableUsages.set(operation, usages);
          }
          return usages;
        }
        getType() {
          return this._typeInfo.getType();
        }
        getParentType() {
          return this._typeInfo.getParentType();
        }
        getInputType() {
          return this._typeInfo.getInputType();
        }
        getParentInputType() {
          return this._typeInfo.getParentInputType();
        }
        getFieldDef() {
          return this._typeInfo.getFieldDef();
        }
        getDirective() {
          return this._typeInfo.getDirective();
        }
        getArgument() {
          return this._typeInfo.getArgument();
        }
        getEnumValue() {
          return this._typeInfo.getEnumValue();
        }
      };
      exports.ValidationContext = ValidationContext;
    }
  });

  // ../../node_modules/graphql/validation/validate.js
  var require_validate2 = __commonJS({
    "../../node_modules/graphql/validation/validate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.assertValidSDL = assertValidSDL;
      exports.assertValidSDLExtension = assertValidSDLExtension;
      exports.validate = validate;
      exports.validateSDL = validateSDL;
      var _devAssert = require_devAssert();
      var _GraphQLError = require_GraphQLError();
      var _visitor = require_visitor();
      var _validate = require_validate();
      var _TypeInfo = require_TypeInfo();
      var _specifiedRules = require_specifiedRules();
      var _ValidationContext = require_ValidationContext();
      function validate(schema, documentAST, rules = _specifiedRules.specifiedRules, options, typeInfo = new _TypeInfo.TypeInfo(schema)) {
        var _options$maxErrors;
        const maxErrors = (_options$maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors) !== null && _options$maxErrors !== void 0 ? _options$maxErrors : 100;
        documentAST || (0, _devAssert.devAssert)(false, "Must provide document.");
        (0, _validate.assertValidSchema)(schema);
        const abortObj = Object.freeze({});
        const errors = [];
        const context = new _ValidationContext.ValidationContext(
          schema,
          documentAST,
          typeInfo,
          (error) => {
            if (errors.length >= maxErrors) {
              errors.push(
                new _GraphQLError.GraphQLError(
                  "Too many validation errors, error limit reached. Validation aborted."
                )
              );
              throw abortObj;
            }
            errors.push(error);
          }
        );
        const visitor = (0, _visitor.visitInParallel)(
          rules.map((rule) => rule(context))
        );
        try {
          (0, _visitor.visit)(
            documentAST,
            (0, _TypeInfo.visitWithTypeInfo)(typeInfo, visitor)
          );
        } catch (e) {
          if (e !== abortObj) {
            throw e;
          }
        }
        return errors;
      }
      function validateSDL(documentAST, schemaToExtend, rules = _specifiedRules.specifiedSDLRules) {
        const errors = [];
        const context = new _ValidationContext.SDLValidationContext(
          documentAST,
          schemaToExtend,
          (error) => {
            errors.push(error);
          }
        );
        const visitors = rules.map((rule) => rule(context));
        (0, _visitor.visit)(documentAST, (0, _visitor.visitInParallel)(visitors));
        return errors;
      }
      function assertValidSDL(documentAST) {
        const errors = validateSDL(documentAST);
        if (errors.length !== 0) {
          throw new Error(errors.map((error) => error.message).join("\n\n"));
        }
      }
      function assertValidSDLExtension(documentAST, schema) {
        const errors = validateSDL(documentAST, schema);
        if (errors.length !== 0) {
          throw new Error(errors.map((error) => error.message).join("\n\n"));
        }
      }
    }
  });

  // ../../node_modules/graphql/jsutils/memoize3.js
  var require_memoize3 = __commonJS({
    "../../node_modules/graphql/jsutils/memoize3.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.memoize3 = memoize3;
      function memoize3(fn) {
        let cache0;
        return function memoized(a1, a2, a3) {
          if (cache0 === void 0) {
            cache0 = /* @__PURE__ */ new WeakMap();
          }
          let cache1 = cache0.get(a1);
          if (cache1 === void 0) {
            cache1 = /* @__PURE__ */ new WeakMap();
            cache0.set(a1, cache1);
          }
          let cache2 = cache1.get(a2);
          if (cache2 === void 0) {
            cache2 = /* @__PURE__ */ new WeakMap();
            cache1.set(a2, cache2);
          }
          let fnResult = cache2.get(a3);
          if (fnResult === void 0) {
            fnResult = fn(a1, a2, a3);
            cache2.set(a3, fnResult);
          }
          return fnResult;
        };
      }
    }
  });

  // ../../node_modules/graphql/jsutils/promiseForObject.js
  var require_promiseForObject = __commonJS({
    "../../node_modules/graphql/jsutils/promiseForObject.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.promiseForObject = promiseForObject;
      function promiseForObject(object) {
        return Promise.all(Object.values(object)).then((resolvedValues) => {
          const resolvedObject = /* @__PURE__ */ Object.create(null);
          for (const [i, key] of Object.keys(object).entries()) {
            resolvedObject[key] = resolvedValues[i];
          }
          return resolvedObject;
        });
      }
    }
  });

  // ../../node_modules/graphql/jsutils/promiseReduce.js
  var require_promiseReduce = __commonJS({
    "../../node_modules/graphql/jsutils/promiseReduce.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.promiseReduce = promiseReduce;
      var _isPromise = require_isPromise();
      function promiseReduce(values, callbackFn, initialValue) {
        let accumulator = initialValue;
        for (const value of values) {
          accumulator = (0, _isPromise.isPromise)(accumulator) ? accumulator.then((resolved) => callbackFn(resolved, value)) : callbackFn(accumulator, value);
        }
        return accumulator;
      }
    }
  });

  // ../../node_modules/graphql/jsutils/toError.js
  var require_toError = __commonJS({
    "../../node_modules/graphql/jsutils/toError.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.toError = toError;
      var _inspect = require_inspect();
      function toError(thrownValue) {
        return thrownValue instanceof Error ? thrownValue : new NonErrorThrown(thrownValue);
      }
      var NonErrorThrown = class extends Error {
        constructor(thrownValue) {
          super("Unexpected error value: " + (0, _inspect.inspect)(thrownValue));
          this.name = "NonErrorThrown";
          this.thrownValue = thrownValue;
        }
      };
    }
  });

  // ../../node_modules/graphql/error/locatedError.js
  var require_locatedError = __commonJS({
    "../../node_modules/graphql/error/locatedError.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.locatedError = locatedError;
      var _toError = require_toError();
      var _GraphQLError = require_GraphQLError();
      function locatedError(rawOriginalError, nodes, path) {
        var _nodes;
        const originalError = (0, _toError.toError)(rawOriginalError);
        if (isLocatedGraphQLError(originalError)) {
          return originalError;
        }
        return new _GraphQLError.GraphQLError(originalError.message, {
          nodes: (_nodes = originalError.nodes) !== null && _nodes !== void 0 ? _nodes : nodes,
          source: originalError.source,
          positions: originalError.positions,
          path,
          originalError
        });
      }
      function isLocatedGraphQLError(error) {
        return Array.isArray(error.path);
      }
    }
  });

  // ../../node_modules/graphql/execution/execute.js
  var require_execute = __commonJS({
    "../../node_modules/graphql/execution/execute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.assertValidExecutionArguments = assertValidExecutionArguments;
      exports.buildExecutionContext = buildExecutionContext;
      exports.buildResolveInfo = buildResolveInfo;
      exports.defaultTypeResolver = exports.defaultFieldResolver = void 0;
      exports.execute = execute;
      exports.executeSync = executeSync;
      exports.getFieldDef = getFieldDef;
      var _devAssert = require_devAssert();
      var _inspect = require_inspect();
      var _invariant = require_invariant();
      var _isIterableObject = require_isIterableObject();
      var _isObjectLike = require_isObjectLike();
      var _isPromise = require_isPromise();
      var _memoize = require_memoize3();
      var _Path = require_Path();
      var _promiseForObject = require_promiseForObject();
      var _promiseReduce = require_promiseReduce();
      var _GraphQLError = require_GraphQLError();
      var _locatedError = require_locatedError();
      var _ast = require_ast();
      var _kinds = require_kinds();
      var _definition = require_definition();
      var _introspection = require_introspection();
      var _validate = require_validate();
      var _collectFields = require_collectFields();
      var _values = require_values();
      var collectSubfields = (0, _memoize.memoize3)(
        (exeContext, returnType, fieldNodes) => (0, _collectFields.collectSubfields)(
          exeContext.schema,
          exeContext.fragments,
          exeContext.variableValues,
          returnType,
          fieldNodes
        )
      );
      function execute(args) {
        arguments.length < 2 || (0, _devAssert.devAssert)(
          false,
          "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead."
        );
        const { schema, document: document2, variableValues, rootValue } = args;
        assertValidExecutionArguments(schema, document2, variableValues);
        const exeContext = buildExecutionContext(args);
        if (!("schema" in exeContext)) {
          return {
            errors: exeContext
          };
        }
        try {
          const { operation } = exeContext;
          const result = executeOperation(exeContext, operation, rootValue);
          if ((0, _isPromise.isPromise)(result)) {
            return result.then(
              (data) => buildResponse(data, exeContext.errors),
              (error) => {
                exeContext.errors.push(error);
                return buildResponse(null, exeContext.errors);
              }
            );
          }
          return buildResponse(result, exeContext.errors);
        } catch (error) {
          exeContext.errors.push(error);
          return buildResponse(null, exeContext.errors);
        }
      }
      function executeSync(args) {
        const result = execute(args);
        if ((0, _isPromise.isPromise)(result)) {
          throw new Error("GraphQL execution failed to complete synchronously.");
        }
        return result;
      }
      function buildResponse(data, errors) {
        return errors.length === 0 ? {
          data
        } : {
          errors,
          data
        };
      }
      function assertValidExecutionArguments(schema, document2, rawVariableValues) {
        document2 || (0, _devAssert.devAssert)(false, "Must provide document.");
        (0, _validate.assertValidSchema)(schema);
        rawVariableValues == null || (0, _isObjectLike.isObjectLike)(rawVariableValues) || (0, _devAssert.devAssert)(
          false,
          "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided."
        );
      }
      function buildExecutionContext(args) {
        var _definition$name, _operation$variableDe;
        const {
          schema,
          document: document2,
          rootValue,
          contextValue,
          variableValues: rawVariableValues,
          operationName,
          fieldResolver,
          typeResolver,
          subscribeFieldResolver
        } = args;
        let operation;
        const fragments = /* @__PURE__ */ Object.create(null);
        for (const definition of document2.definitions) {
          switch (definition.kind) {
            case _kinds.Kind.OPERATION_DEFINITION:
              if (operationName == null) {
                if (operation !== void 0) {
                  return [
                    new _GraphQLError.GraphQLError(
                      "Must provide operation name if query contains multiple operations."
                    )
                  ];
                }
                operation = definition;
              } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
                operation = definition;
              }
              break;
            case _kinds.Kind.FRAGMENT_DEFINITION:
              fragments[definition.name.value] = definition;
              break;
            default:
          }
        }
        if (!operation) {
          if (operationName != null) {
            return [
              new _GraphQLError.GraphQLError(
                `Unknown operation named "${operationName}".`
              )
            ];
          }
          return [new _GraphQLError.GraphQLError("Must provide an operation.")];
        }
        const variableDefinitions = (_operation$variableDe = operation.variableDefinitions) !== null && _operation$variableDe !== void 0 ? _operation$variableDe : [];
        const coercedVariableValues = (0, _values.getVariableValues)(
          schema,
          variableDefinitions,
          rawVariableValues !== null && rawVariableValues !== void 0 ? rawVariableValues : {},
          {
            maxErrors: 50
          }
        );
        if (coercedVariableValues.errors) {
          return coercedVariableValues.errors;
        }
        return {
          schema,
          fragments,
          rootValue,
          contextValue,
          operation,
          variableValues: coercedVariableValues.coerced,
          fieldResolver: fieldResolver !== null && fieldResolver !== void 0 ? fieldResolver : defaultFieldResolver,
          typeResolver: typeResolver !== null && typeResolver !== void 0 ? typeResolver : defaultTypeResolver,
          subscribeFieldResolver: subscribeFieldResolver !== null && subscribeFieldResolver !== void 0 ? subscribeFieldResolver : defaultFieldResolver,
          errors: []
        };
      }
      function executeOperation(exeContext, operation, rootValue) {
        const rootType = exeContext.schema.getRootType(operation.operation);
        if (rootType == null) {
          throw new _GraphQLError.GraphQLError(
            `Schema is not configured to execute ${operation.operation} operation.`,
            {
              nodes: operation
            }
          );
        }
        const rootFields = (0, _collectFields.collectFields)(
          exeContext.schema,
          exeContext.fragments,
          exeContext.variableValues,
          rootType,
          operation.selectionSet
        );
        const path = void 0;
        switch (operation.operation) {
          case _ast.OperationTypeNode.QUERY:
            return executeFields(exeContext, rootType, rootValue, path, rootFields);
          case _ast.OperationTypeNode.MUTATION:
            return executeFieldsSerially(
              exeContext,
              rootType,
              rootValue,
              path,
              rootFields
            );
          case _ast.OperationTypeNode.SUBSCRIPTION:
            return executeFields(exeContext, rootType, rootValue, path, rootFields);
        }
      }
      function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
        return (0, _promiseReduce.promiseReduce)(
          fields.entries(),
          (results, [responseName, fieldNodes]) => {
            const fieldPath = (0, _Path.addPath)(path, responseName, parentType.name);
            const result = executeField(
              exeContext,
              parentType,
              sourceValue,
              fieldNodes,
              fieldPath
            );
            if (result === void 0) {
              return results;
            }
            if ((0, _isPromise.isPromise)(result)) {
              return result.then((resolvedResult) => {
                results[responseName] = resolvedResult;
                return results;
              });
            }
            results[responseName] = result;
            return results;
          },
          /* @__PURE__ */ Object.create(null)
        );
      }
      function executeFields(exeContext, parentType, sourceValue, path, fields) {
        const results = /* @__PURE__ */ Object.create(null);
        let containsPromise = false;
        for (const [responseName, fieldNodes] of fields.entries()) {
          const fieldPath = (0, _Path.addPath)(path, responseName, parentType.name);
          const result = executeField(
            exeContext,
            parentType,
            sourceValue,
            fieldNodes,
            fieldPath
          );
          if (result !== void 0) {
            results[responseName] = result;
            if ((0, _isPromise.isPromise)(result)) {
              containsPromise = true;
            }
          }
        }
        if (!containsPromise) {
          return results;
        }
        return (0, _promiseForObject.promiseForObject)(results);
      }
      function executeField(exeContext, parentType, source, fieldNodes, path) {
        var _fieldDef$resolve;
        const fieldDef = getFieldDef(exeContext.schema, parentType, fieldNodes[0]);
        if (!fieldDef) {
          return;
        }
        const returnType = fieldDef.type;
        const resolveFn = (_fieldDef$resolve = fieldDef.resolve) !== null && _fieldDef$resolve !== void 0 ? _fieldDef$resolve : exeContext.fieldResolver;
        const info = buildResolveInfo(
          exeContext,
          fieldDef,
          fieldNodes,
          parentType,
          path
        );
        try {
          const args = (0, _values.getArgumentValues)(
            fieldDef,
            fieldNodes[0],
            exeContext.variableValues
          );
          const contextValue = exeContext.contextValue;
          const result = resolveFn(source, args, contextValue, info);
          let completed;
          if ((0, _isPromise.isPromise)(result)) {
            completed = result.then(
              (resolved) => completeValue(exeContext, returnType, fieldNodes, info, path, resolved)
            );
          } else {
            completed = completeValue(
              exeContext,
              returnType,
              fieldNodes,
              info,
              path,
              result
            );
          }
          if ((0, _isPromise.isPromise)(completed)) {
            return completed.then(void 0, (rawError) => {
              const error = (0, _locatedError.locatedError)(
                rawError,
                fieldNodes,
                (0, _Path.pathToArray)(path)
              );
              return handleFieldError(error, returnType, exeContext);
            });
          }
          return completed;
        } catch (rawError) {
          const error = (0, _locatedError.locatedError)(
            rawError,
            fieldNodes,
            (0, _Path.pathToArray)(path)
          );
          return handleFieldError(error, returnType, exeContext);
        }
      }
      function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
        return {
          fieldName: fieldDef.name,
          fieldNodes,
          returnType: fieldDef.type,
          parentType,
          path,
          schema: exeContext.schema,
          fragments: exeContext.fragments,
          rootValue: exeContext.rootValue,
          operation: exeContext.operation,
          variableValues: exeContext.variableValues
        };
      }
      function handleFieldError(error, returnType, exeContext) {
        if ((0, _definition.isNonNullType)(returnType)) {
          throw error;
        }
        exeContext.errors.push(error);
        return null;
      }
      function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
        if (result instanceof Error) {
          throw result;
        }
        if ((0, _definition.isNonNullType)(returnType)) {
          const completed = completeValue(
            exeContext,
            returnType.ofType,
            fieldNodes,
            info,
            path,
            result
          );
          if (completed === null) {
            throw new Error(
              `Cannot return null for non-nullable field ${info.parentType.name}.${info.fieldName}.`
            );
          }
          return completed;
        }
        if (result == null) {
          return null;
        }
        if ((0, _definition.isListType)(returnType)) {
          return completeListValue(
            exeContext,
            returnType,
            fieldNodes,
            info,
            path,
            result
          );
        }
        if ((0, _definition.isLeafType)(returnType)) {
          return completeLeafValue(returnType, result);
        }
        if ((0, _definition.isAbstractType)(returnType)) {
          return completeAbstractValue(
            exeContext,
            returnType,
            fieldNodes,
            info,
            path,
            result
          );
        }
        if ((0, _definition.isObjectType)(returnType)) {
          return completeObjectValue(
            exeContext,
            returnType,
            fieldNodes,
            info,
            path,
            result
          );
        }
        (0, _invariant.invariant)(
          false,
          "Cannot complete value of unexpected output type: " + (0, _inspect.inspect)(returnType)
        );
      }
      function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
        if (!(0, _isIterableObject.isIterableObject)(result)) {
          throw new _GraphQLError.GraphQLError(
            `Expected Iterable, but did not find one for field "${info.parentType.name}.${info.fieldName}".`
          );
        }
        const itemType = returnType.ofType;
        let containsPromise = false;
        const completedResults = Array.from(result, (item, index) => {
          const itemPath = (0, _Path.addPath)(path, index, void 0);
          try {
            let completedItem;
            if ((0, _isPromise.isPromise)(item)) {
              completedItem = item.then(
                (resolved) => completeValue(
                  exeContext,
                  itemType,
                  fieldNodes,
                  info,
                  itemPath,
                  resolved
                )
              );
            } else {
              completedItem = completeValue(
                exeContext,
                itemType,
                fieldNodes,
                info,
                itemPath,
                item
              );
            }
            if ((0, _isPromise.isPromise)(completedItem)) {
              containsPromise = true;
              return completedItem.then(void 0, (rawError) => {
                const error = (0, _locatedError.locatedError)(
                  rawError,
                  fieldNodes,
                  (0, _Path.pathToArray)(itemPath)
                );
                return handleFieldError(error, itemType, exeContext);
              });
            }
            return completedItem;
          } catch (rawError) {
            const error = (0, _locatedError.locatedError)(
              rawError,
              fieldNodes,
              (0, _Path.pathToArray)(itemPath)
            );
            return handleFieldError(error, itemType, exeContext);
          }
        });
        return containsPromise ? Promise.all(completedResults) : completedResults;
      }
      function completeLeafValue(returnType, result) {
        const serializedResult = returnType.serialize(result);
        if (serializedResult == null) {
          throw new Error(
            `Expected \`${(0, _inspect.inspect)(returnType)}.serialize(${(0, _inspect.inspect)(result)})\` to return non-nullable value, returned: ${(0, _inspect.inspect)(
              serializedResult
            )}`
          );
        }
        return serializedResult;
      }
      function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
        var _returnType$resolveTy;
        const resolveTypeFn = (_returnType$resolveTy = returnType.resolveType) !== null && _returnType$resolveTy !== void 0 ? _returnType$resolveTy : exeContext.typeResolver;
        const contextValue = exeContext.contextValue;
        const runtimeType = resolveTypeFn(result, contextValue, info, returnType);
        if ((0, _isPromise.isPromise)(runtimeType)) {
          return runtimeType.then(
            (resolvedRuntimeType) => completeObjectValue(
              exeContext,
              ensureValidRuntimeType(
                resolvedRuntimeType,
                exeContext,
                returnType,
                fieldNodes,
                info,
                result
              ),
              fieldNodes,
              info,
              path,
              result
            )
          );
        }
        return completeObjectValue(
          exeContext,
          ensureValidRuntimeType(
            runtimeType,
            exeContext,
            returnType,
            fieldNodes,
            info,
            result
          ),
          fieldNodes,
          info,
          path,
          result
        );
      }
      function ensureValidRuntimeType(runtimeTypeName, exeContext, returnType, fieldNodes, info, result) {
        if (runtimeTypeName == null) {
          throw new _GraphQLError.GraphQLError(
            `Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}". Either the "${returnType.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`,
            fieldNodes
          );
        }
        if ((0, _definition.isObjectType)(runtimeTypeName)) {
          throw new _GraphQLError.GraphQLError(
            "Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead."
          );
        }
        if (typeof runtimeTypeName !== "string") {
          throw new _GraphQLError.GraphQLError(
            `Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}" with value ${(0, _inspect.inspect)(result)}, received "${(0, _inspect.inspect)(runtimeTypeName)}".`
          );
        }
        const runtimeType = exeContext.schema.getType(runtimeTypeName);
        if (runtimeType == null) {
          throw new _GraphQLError.GraphQLError(
            `Abstract type "${returnType.name}" was resolved to a type "${runtimeTypeName}" that does not exist inside the schema.`,
            {
              nodes: fieldNodes
            }
          );
        }
        if (!(0, _definition.isObjectType)(runtimeType)) {
          throw new _GraphQLError.GraphQLError(
            `Abstract type "${returnType.name}" was resolved to a non-object type "${runtimeTypeName}".`,
            {
              nodes: fieldNodes
            }
          );
        }
        if (!exeContext.schema.isSubType(returnType, runtimeType)) {
          throw new _GraphQLError.GraphQLError(
            `Runtime Object type "${runtimeType.name}" is not a possible type for "${returnType.name}".`,
            {
              nodes: fieldNodes
            }
          );
        }
        return runtimeType;
      }
      function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
        const subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
        if (returnType.isTypeOf) {
          const isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);
          if ((0, _isPromise.isPromise)(isTypeOf)) {
            return isTypeOf.then((resolvedIsTypeOf) => {
              if (!resolvedIsTypeOf) {
                throw invalidReturnTypeError(returnType, result, fieldNodes);
              }
              return executeFields(
                exeContext,
                returnType,
                result,
                path,
                subFieldNodes
              );
            });
          }
          if (!isTypeOf) {
            throw invalidReturnTypeError(returnType, result, fieldNodes);
          }
        }
        return executeFields(exeContext, returnType, result, path, subFieldNodes);
      }
      function invalidReturnTypeError(returnType, result, fieldNodes) {
        return new _GraphQLError.GraphQLError(
          `Expected value of type "${returnType.name}" but got: ${(0, _inspect.inspect)(result)}.`,
          {
            nodes: fieldNodes
          }
        );
      }
      var defaultTypeResolver = function(value, contextValue, info, abstractType) {
        if ((0, _isObjectLike.isObjectLike)(value) && typeof value.__typename === "string") {
          return value.__typename;
        }
        const possibleTypes = info.schema.getPossibleTypes(abstractType);
        const promisedIsTypeOfResults = [];
        for (let i = 0; i < possibleTypes.length; i++) {
          const type = possibleTypes[i];
          if (type.isTypeOf) {
            const isTypeOfResult = type.isTypeOf(value, contextValue, info);
            if ((0, _isPromise.isPromise)(isTypeOfResult)) {
              promisedIsTypeOfResults[i] = isTypeOfResult;
            } else if (isTypeOfResult) {
              return type.name;
            }
          }
        }
        if (promisedIsTypeOfResults.length) {
          return Promise.all(promisedIsTypeOfResults).then((isTypeOfResults) => {
            for (let i = 0; i < isTypeOfResults.length; i++) {
              if (isTypeOfResults[i]) {
                return possibleTypes[i].name;
              }
            }
          });
        }
      };
      exports.defaultTypeResolver = defaultTypeResolver;
      var defaultFieldResolver = function(source, args, contextValue, info) {
        if ((0, _isObjectLike.isObjectLike)(source) || typeof source === "function") {
          const property = source[info.fieldName];
          if (typeof property === "function") {
            return source[info.fieldName](args, contextValue, info);
          }
          return property;
        }
      };
      exports.defaultFieldResolver = defaultFieldResolver;
      function getFieldDef(schema, parentType, fieldNode) {
        const fieldName = fieldNode.name.value;
        if (fieldName === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
          return _introspection.SchemaMetaFieldDef;
        } else if (fieldName === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
          return _introspection.TypeMetaFieldDef;
        } else if (fieldName === _introspection.TypeNameMetaFieldDef.name) {
          return _introspection.TypeNameMetaFieldDef;
        }
        return parentType.getFields()[fieldName];
      }
    }
  });

  // ../../node_modules/graphql/graphql.js
  var require_graphql = __commonJS({
    "../../node_modules/graphql/graphql.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.graphql = graphql;
      exports.graphqlSync = graphqlSync;
      var _devAssert = require_devAssert();
      var _isPromise = require_isPromise();
      var _parser = require_parser();
      var _validate = require_validate();
      var _validate2 = require_validate2();
      var _execute = require_execute();
      function graphql(args) {
        return new Promise((resolve) => resolve(graphqlImpl(args)));
      }
      function graphqlSync(args) {
        const result = graphqlImpl(args);
        if ((0, _isPromise.isPromise)(result)) {
          throw new Error("GraphQL execution failed to complete synchronously.");
        }
        return result;
      }
      function graphqlImpl(args) {
        arguments.length < 2 || (0, _devAssert.devAssert)(
          false,
          "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead."
        );
        const {
          schema,
          source,
          rootValue,
          contextValue,
          variableValues,
          operationName,
          fieldResolver,
          typeResolver
        } = args;
        const schemaValidationErrors = (0, _validate.validateSchema)(schema);
        if (schemaValidationErrors.length > 0) {
          return {
            errors: schemaValidationErrors
          };
        }
        let document2;
        try {
          document2 = (0, _parser.parse)(source);
        } catch (syntaxError) {
          return {
            errors: [syntaxError]
          };
        }
        const validationErrors = (0, _validate2.validate)(schema, document2);
        if (validationErrors.length > 0) {
          return {
            errors: validationErrors
          };
        }
        return (0, _execute.execute)({
          schema,
          document: document2,
          rootValue,
          contextValue,
          variableValues,
          operationName,
          fieldResolver,
          typeResolver
        });
      }
    }
  });

  // ../../node_modules/graphql/type/index.js
  var require_type = __commonJS({
    "../../node_modules/graphql/type/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "DEFAULT_DEPRECATION_REASON", {
        enumerable: true,
        get: function() {
          return _directives.DEFAULT_DEPRECATION_REASON;
        }
      });
      Object.defineProperty(exports, "GRAPHQL_MAX_INT", {
        enumerable: true,
        get: function() {
          return _scalars.GRAPHQL_MAX_INT;
        }
      });
      Object.defineProperty(exports, "GRAPHQL_MIN_INT", {
        enumerable: true,
        get: function() {
          return _scalars.GRAPHQL_MIN_INT;
        }
      });
      Object.defineProperty(exports, "GraphQLBoolean", {
        enumerable: true,
        get: function() {
          return _scalars.GraphQLBoolean;
        }
      });
      Object.defineProperty(exports, "GraphQLDeprecatedDirective", {
        enumerable: true,
        get: function() {
          return _directives.GraphQLDeprecatedDirective;
        }
      });
      Object.defineProperty(exports, "GraphQLDirective", {
        enumerable: true,
        get: function() {
          return _directives.GraphQLDirective;
        }
      });
      Object.defineProperty(exports, "GraphQLEnumType", {
        enumerable: true,
        get: function() {
          return _definition.GraphQLEnumType;
        }
      });
      Object.defineProperty(exports, "GraphQLFloat", {
        enumerable: true,
        get: function() {
          return _scalars.GraphQLFloat;
        }
      });
      Object.defineProperty(exports, "GraphQLID", {
        enumerable: true,
        get: function() {
          return _scalars.GraphQLID;
        }
      });
      Object.defineProperty(exports, "GraphQLIncludeDirective", {
        enumerable: true,
        get: function() {
          return _directives.GraphQLIncludeDirective;
        }
      });
      Object.defineProperty(exports, "GraphQLInputObjectType", {
        enumerable: true,
        get: function() {
          return _definition.GraphQLInputObjectType;
        }
      });
      Object.defineProperty(exports, "GraphQLInt", {
        enumerable: true,
        get: function() {
          return _scalars.GraphQLInt;
        }
      });
      Object.defineProperty(exports, "GraphQLInterfaceType", {
        enumerable: true,
        get: function() {
          return _definition.GraphQLInterfaceType;
        }
      });
      Object.defineProperty(exports, "GraphQLList", {
        enumerable: true,
        get: function() {
          return _definition.GraphQLList;
        }
      });
      Object.defineProperty(exports, "GraphQLNonNull", {
        enumerable: true,
        get: function() {
          return _definition.GraphQLNonNull;
        }
      });
      Object.defineProperty(exports, "GraphQLObjectType", {
        enumerable: true,
        get: function() {
          return _definition.GraphQLObjectType;
        }
      });
      Object.defineProperty(exports, "GraphQLScalarType", {
        enumerable: true,
        get: function() {
          return _definition.GraphQLScalarType;
        }
      });
      Object.defineProperty(exports, "GraphQLSchema", {
        enumerable: true,
        get: function() {
          return _schema.GraphQLSchema;
        }
      });
      Object.defineProperty(exports, "GraphQLSkipDirective", {
        enumerable: true,
        get: function() {
          return _directives.GraphQLSkipDirective;
        }
      });
      Object.defineProperty(exports, "GraphQLSpecifiedByDirective", {
        enumerable: true,
        get: function() {
          return _directives.GraphQLSpecifiedByDirective;
        }
      });
      Object.defineProperty(exports, "GraphQLString", {
        enumerable: true,
        get: function() {
          return _scalars.GraphQLString;
        }
      });
      Object.defineProperty(exports, "GraphQLUnionType", {
        enumerable: true,
        get: function() {
          return _definition.GraphQLUnionType;
        }
      });
      Object.defineProperty(exports, "SchemaMetaFieldDef", {
        enumerable: true,
        get: function() {
          return _introspection.SchemaMetaFieldDef;
        }
      });
      Object.defineProperty(exports, "TypeKind", {
        enumerable: true,
        get: function() {
          return _introspection.TypeKind;
        }
      });
      Object.defineProperty(exports, "TypeMetaFieldDef", {
        enumerable: true,
        get: function() {
          return _introspection.TypeMetaFieldDef;
        }
      });
      Object.defineProperty(exports, "TypeNameMetaFieldDef", {
        enumerable: true,
        get: function() {
          return _introspection.TypeNameMetaFieldDef;
        }
      });
      Object.defineProperty(exports, "__Directive", {
        enumerable: true,
        get: function() {
          return _introspection.__Directive;
        }
      });
      Object.defineProperty(exports, "__DirectiveLocation", {
        enumerable: true,
        get: function() {
          return _introspection.__DirectiveLocation;
        }
      });
      Object.defineProperty(exports, "__EnumValue", {
        enumerable: true,
        get: function() {
          return _introspection.__EnumValue;
        }
      });
      Object.defineProperty(exports, "__Field", {
        enumerable: true,
        get: function() {
          return _introspection.__Field;
        }
      });
      Object.defineProperty(exports, "__InputValue", {
        enumerable: true,
        get: function() {
          return _introspection.__InputValue;
        }
      });
      Object.defineProperty(exports, "__Schema", {
        enumerable: true,
        get: function() {
          return _introspection.__Schema;
        }
      });
      Object.defineProperty(exports, "__Type", {
        enumerable: true,
        get: function() {
          return _introspection.__Type;
        }
      });
      Object.defineProperty(exports, "__TypeKind", {
        enumerable: true,
        get: function() {
          return _introspection.__TypeKind;
        }
      });
      Object.defineProperty(exports, "assertAbstractType", {
        enumerable: true,
        get: function() {
          return _definition.assertAbstractType;
        }
      });
      Object.defineProperty(exports, "assertCompositeType", {
        enumerable: true,
        get: function() {
          return _definition.assertCompositeType;
        }
      });
      Object.defineProperty(exports, "assertDirective", {
        enumerable: true,
        get: function() {
          return _directives.assertDirective;
        }
      });
      Object.defineProperty(exports, "assertEnumType", {
        enumerable: true,
        get: function() {
          return _definition.assertEnumType;
        }
      });
      Object.defineProperty(exports, "assertEnumValueName", {
        enumerable: true,
        get: function() {
          return _assertName.assertEnumValueName;
        }
      });
      Object.defineProperty(exports, "assertInputObjectType", {
        enumerable: true,
        get: function() {
          return _definition.assertInputObjectType;
        }
      });
      Object.defineProperty(exports, "assertInputType", {
        enumerable: true,
        get: function() {
          return _definition.assertInputType;
        }
      });
      Object.defineProperty(exports, "assertInterfaceType", {
        enumerable: true,
        get: function() {
          return _definition.assertInterfaceType;
        }
      });
      Object.defineProperty(exports, "assertLeafType", {
        enumerable: true,
        get: function() {
          return _definition.assertLeafType;
        }
      });
      Object.defineProperty(exports, "assertListType", {
        enumerable: true,
        get: function() {
          return _definition.assertListType;
        }
      });
      Object.defineProperty(exports, "assertName", {
        enumerable: true,
        get: function() {
          return _assertName.assertName;
        }
      });
      Object.defineProperty(exports, "assertNamedType", {
        enumerable: true,
        get: function() {
          return _definition.assertNamedType;
        }
      });
      Object.defineProperty(exports, "assertNonNullType", {
        enumerable: true,
        get: function() {
          return _definition.assertNonNullType;
        }
      });
      Object.defineProperty(exports, "assertNullableType", {
        enumerable: true,
        get: function() {
          return _definition.assertNullableType;
        }
      });
      Object.defineProperty(exports, "assertObjectType", {
        enumerable: true,
        get: function() {
          return _definition.assertObjectType;
        }
      });
      Object.defineProperty(exports, "assertOutputType", {
        enumerable: true,
        get: function() {
          return _definition.assertOutputType;
        }
      });
      Object.defineProperty(exports, "assertScalarType", {
        enumerable: true,
        get: function() {
          return _definition.assertScalarType;
        }
      });
      Object.defineProperty(exports, "assertSchema", {
        enumerable: true,
        get: function() {
          return _schema.assertSchema;
        }
      });
      Object.defineProperty(exports, "assertType", {
        enumerable: true,
        get: function() {
          return _definition.assertType;
        }
      });
      Object.defineProperty(exports, "assertUnionType", {
        enumerable: true,
        get: function() {
          return _definition.assertUnionType;
        }
      });
      Object.defineProperty(exports, "assertValidSchema", {
        enumerable: true,
        get: function() {
          return _validate.assertValidSchema;
        }
      });
      Object.defineProperty(exports, "assertWrappingType", {
        enumerable: true,
        get: function() {
          return _definition.assertWrappingType;
        }
      });
      Object.defineProperty(exports, "getNamedType", {
        enumerable: true,
        get: function() {
          return _definition.getNamedType;
        }
      });
      Object.defineProperty(exports, "getNullableType", {
        enumerable: true,
        get: function() {
          return _definition.getNullableType;
        }
      });
      Object.defineProperty(exports, "introspectionTypes", {
        enumerable: true,
        get: function() {
          return _introspection.introspectionTypes;
        }
      });
      Object.defineProperty(exports, "isAbstractType", {
        enumerable: true,
        get: function() {
          return _definition.isAbstractType;
        }
      });
      Object.defineProperty(exports, "isCompositeType", {
        enumerable: true,
        get: function() {
          return _definition.isCompositeType;
        }
      });
      Object.defineProperty(exports, "isDirective", {
        enumerable: true,
        get: function() {
          return _directives.isDirective;
        }
      });
      Object.defineProperty(exports, "isEnumType", {
        enumerable: true,
        get: function() {
          return _definition.isEnumType;
        }
      });
      Object.defineProperty(exports, "isInputObjectType", {
        enumerable: true,
        get: function() {
          return _definition.isInputObjectType;
        }
      });
      Object.defineProperty(exports, "isInputType", {
        enumerable: true,
        get: function() {
          return _definition.isInputType;
        }
      });
      Object.defineProperty(exports, "isInterfaceType", {
        enumerable: true,
        get: function() {
          return _definition.isInterfaceType;
        }
      });
      Object.defineProperty(exports, "isIntrospectionType", {
        enumerable: true,
        get: function() {
          return _introspection.isIntrospectionType;
        }
      });
      Object.defineProperty(exports, "isLeafType", {
        enumerable: true,
        get: function() {
          return _definition.isLeafType;
        }
      });
      Object.defineProperty(exports, "isListType", {
        enumerable: true,
        get: function() {
          return _definition.isListType;
        }
      });
      Object.defineProperty(exports, "isNamedType", {
        enumerable: true,
        get: function() {
          return _definition.isNamedType;
        }
      });
      Object.defineProperty(exports, "isNonNullType", {
        enumerable: true,
        get: function() {
          return _definition.isNonNullType;
        }
      });
      Object.defineProperty(exports, "isNullableType", {
        enumerable: true,
        get: function() {
          return _definition.isNullableType;
        }
      });
      Object.defineProperty(exports, "isObjectType", {
        enumerable: true,
        get: function() {
          return _definition.isObjectType;
        }
      });
      Object.defineProperty(exports, "isOutputType", {
        enumerable: true,
        get: function() {
          return _definition.isOutputType;
        }
      });
      Object.defineProperty(exports, "isRequiredArgument", {
        enumerable: true,
        get: function() {
          return _definition.isRequiredArgument;
        }
      });
      Object.defineProperty(exports, "isRequiredInputField", {
        enumerable: true,
        get: function() {
          return _definition.isRequiredInputField;
        }
      });
      Object.defineProperty(exports, "isScalarType", {
        enumerable: true,
        get: function() {
          return _definition.isScalarType;
        }
      });
      Object.defineProperty(exports, "isSchema", {
        enumerable: true,
        get: function() {
          return _schema.isSchema;
        }
      });
      Object.defineProperty(exports, "isSpecifiedDirective", {
        enumerable: true,
        get: function() {
          return _directives.isSpecifiedDirective;
        }
      });
      Object.defineProperty(exports, "isSpecifiedScalarType", {
        enumerable: true,
        get: function() {
          return _scalars.isSpecifiedScalarType;
        }
      });
      Object.defineProperty(exports, "isType", {
        enumerable: true,
        get: function() {
          return _definition.isType;
        }
      });
      Object.defineProperty(exports, "isUnionType", {
        enumerable: true,
        get: function() {
          return _definition.isUnionType;
        }
      });
      Object.defineProperty(exports, "isWrappingType", {
        enumerable: true,
        get: function() {
          return _definition.isWrappingType;
        }
      });
      Object.defineProperty(exports, "resolveObjMapThunk", {
        enumerable: true,
        get: function() {
          return _definition.resolveObjMapThunk;
        }
      });
      Object.defineProperty(exports, "resolveReadonlyArrayThunk", {
        enumerable: true,
        get: function() {
          return _definition.resolveReadonlyArrayThunk;
        }
      });
      Object.defineProperty(exports, "specifiedDirectives", {
        enumerable: true,
        get: function() {
          return _directives.specifiedDirectives;
        }
      });
      Object.defineProperty(exports, "specifiedScalarTypes", {
        enumerable: true,
        get: function() {
          return _scalars.specifiedScalarTypes;
        }
      });
      Object.defineProperty(exports, "validateSchema", {
        enumerable: true,
        get: function() {
          return _validate.validateSchema;
        }
      });
      var _schema = require_schema();
      var _definition = require_definition();
      var _directives = require_directives();
      var _scalars = require_scalars();
      var _introspection = require_introspection();
      var _validate = require_validate();
      var _assertName = require_assertName();
    }
  });

  // ../../node_modules/graphql/language/index.js
  var require_language = __commonJS({
    "../../node_modules/graphql/language/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "BREAK", {
        enumerable: true,
        get: function() {
          return _visitor.BREAK;
        }
      });
      Object.defineProperty(exports, "DirectiveLocation", {
        enumerable: true,
        get: function() {
          return _directiveLocation.DirectiveLocation;
        }
      });
      Object.defineProperty(exports, "Kind", {
        enumerable: true,
        get: function() {
          return _kinds.Kind;
        }
      });
      Object.defineProperty(exports, "Lexer", {
        enumerable: true,
        get: function() {
          return _lexer.Lexer;
        }
      });
      Object.defineProperty(exports, "Location", {
        enumerable: true,
        get: function() {
          return _ast.Location;
        }
      });
      Object.defineProperty(exports, "OperationTypeNode", {
        enumerable: true,
        get: function() {
          return _ast.OperationTypeNode;
        }
      });
      Object.defineProperty(exports, "Source", {
        enumerable: true,
        get: function() {
          return _source.Source;
        }
      });
      Object.defineProperty(exports, "Token", {
        enumerable: true,
        get: function() {
          return _ast.Token;
        }
      });
      Object.defineProperty(exports, "TokenKind", {
        enumerable: true,
        get: function() {
          return _tokenKind.TokenKind;
        }
      });
      Object.defineProperty(exports, "getEnterLeaveForKind", {
        enumerable: true,
        get: function() {
          return _visitor.getEnterLeaveForKind;
        }
      });
      Object.defineProperty(exports, "getLocation", {
        enumerable: true,
        get: function() {
          return _location.getLocation;
        }
      });
      Object.defineProperty(exports, "getVisitFn", {
        enumerable: true,
        get: function() {
          return _visitor.getVisitFn;
        }
      });
      Object.defineProperty(exports, "isConstValueNode", {
        enumerable: true,
        get: function() {
          return _predicates.isConstValueNode;
        }
      });
      Object.defineProperty(exports, "isDefinitionNode", {
        enumerable: true,
        get: function() {
          return _predicates.isDefinitionNode;
        }
      });
      Object.defineProperty(exports, "isExecutableDefinitionNode", {
        enumerable: true,
        get: function() {
          return _predicates.isExecutableDefinitionNode;
        }
      });
      Object.defineProperty(exports, "isSelectionNode", {
        enumerable: true,
        get: function() {
          return _predicates.isSelectionNode;
        }
      });
      Object.defineProperty(exports, "isTypeDefinitionNode", {
        enumerable: true,
        get: function() {
          return _predicates.isTypeDefinitionNode;
        }
      });
      Object.defineProperty(exports, "isTypeExtensionNode", {
        enumerable: true,
        get: function() {
          return _predicates.isTypeExtensionNode;
        }
      });
      Object.defineProperty(exports, "isTypeNode", {
        enumerable: true,
        get: function() {
          return _predicates.isTypeNode;
        }
      });
      Object.defineProperty(exports, "isTypeSystemDefinitionNode", {
        enumerable: true,
        get: function() {
          return _predicates.isTypeSystemDefinitionNode;
        }
      });
      Object.defineProperty(exports, "isTypeSystemExtensionNode", {
        enumerable: true,
        get: function() {
          return _predicates.isTypeSystemExtensionNode;
        }
      });
      Object.defineProperty(exports, "isValueNode", {
        enumerable: true,
        get: function() {
          return _predicates.isValueNode;
        }
      });
      Object.defineProperty(exports, "parse", {
        enumerable: true,
        get: function() {
          return _parser.parse;
        }
      });
      Object.defineProperty(exports, "parseConstValue", {
        enumerable: true,
        get: function() {
          return _parser.parseConstValue;
        }
      });
      Object.defineProperty(exports, "parseType", {
        enumerable: true,
        get: function() {
          return _parser.parseType;
        }
      });
      Object.defineProperty(exports, "parseValue", {
        enumerable: true,
        get: function() {
          return _parser.parseValue;
        }
      });
      Object.defineProperty(exports, "print", {
        enumerable: true,
        get: function() {
          return _printer.print;
        }
      });
      Object.defineProperty(exports, "printLocation", {
        enumerable: true,
        get: function() {
          return _printLocation.printLocation;
        }
      });
      Object.defineProperty(exports, "printSourceLocation", {
        enumerable: true,
        get: function() {
          return _printLocation.printSourceLocation;
        }
      });
      Object.defineProperty(exports, "visit", {
        enumerable: true,
        get: function() {
          return _visitor.visit;
        }
      });
      Object.defineProperty(exports, "visitInParallel", {
        enumerable: true,
        get: function() {
          return _visitor.visitInParallel;
        }
      });
      var _source = require_source();
      var _location = require_location();
      var _printLocation = require_printLocation();
      var _kinds = require_kinds();
      var _tokenKind = require_tokenKind();
      var _lexer = require_lexer();
      var _parser = require_parser();
      var _printer = require_printer();
      var _visitor = require_visitor();
      var _ast = require_ast();
      var _predicates = require_predicates();
      var _directiveLocation = require_directiveLocation();
    }
  });

  // ../../node_modules/graphql/jsutils/isAsyncIterable.js
  var require_isAsyncIterable = __commonJS({
    "../../node_modules/graphql/jsutils/isAsyncIterable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isAsyncIterable = isAsyncIterable;
      function isAsyncIterable(maybeAsyncIterable) {
        return typeof (maybeAsyncIterable === null || maybeAsyncIterable === void 0 ? void 0 : maybeAsyncIterable[Symbol.asyncIterator]) === "function";
      }
    }
  });

  // ../../node_modules/graphql/execution/mapAsyncIterator.js
  var require_mapAsyncIterator = __commonJS({
    "../../node_modules/graphql/execution/mapAsyncIterator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.mapAsyncIterator = mapAsyncIterator;
      function mapAsyncIterator(iterable, callback) {
        const iterator = iterable[Symbol.asyncIterator]();
        async function mapResult(result) {
          if (result.done) {
            return result;
          }
          try {
            return {
              value: await callback(result.value),
              done: false
            };
          } catch (error) {
            if (typeof iterator.return === "function") {
              try {
                await iterator.return();
              } catch (_e) {
              }
            }
            throw error;
          }
        }
        return {
          async next() {
            return mapResult(await iterator.next());
          },
          async return() {
            return typeof iterator.return === "function" ? mapResult(await iterator.return()) : {
              value: void 0,
              done: true
            };
          },
          async throw(error) {
            if (typeof iterator.throw === "function") {
              return mapResult(await iterator.throw(error));
            }
            throw error;
          },
          [Symbol.asyncIterator]() {
            return this;
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/execution/subscribe.js
  var require_subscribe = __commonJS({
    "../../node_modules/graphql/execution/subscribe.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createSourceEventStream = createSourceEventStream;
      exports.subscribe = subscribe;
      var _devAssert = require_devAssert();
      var _inspect = require_inspect();
      var _isAsyncIterable = require_isAsyncIterable();
      var _Path = require_Path();
      var _GraphQLError = require_GraphQLError();
      var _locatedError = require_locatedError();
      var _collectFields = require_collectFields();
      var _execute = require_execute();
      var _mapAsyncIterator = require_mapAsyncIterator();
      var _values = require_values();
      async function subscribe(args) {
        arguments.length < 2 || (0, _devAssert.devAssert)(
          false,
          "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead."
        );
        const resultOrStream = await createSourceEventStream(args);
        if (!(0, _isAsyncIterable.isAsyncIterable)(resultOrStream)) {
          return resultOrStream;
        }
        const mapSourceToResponse = (payload) => (0, _execute.execute)({ ...args, rootValue: payload });
        return (0, _mapAsyncIterator.mapAsyncIterator)(
          resultOrStream,
          mapSourceToResponse
        );
      }
      function toNormalizedArgs(args) {
        const firstArg = args[0];
        if (firstArg && "document" in firstArg) {
          return firstArg;
        }
        return {
          schema: firstArg,
          document: args[1],
          rootValue: args[2],
          contextValue: args[3],
          variableValues: args[4],
          operationName: args[5],
          subscribeFieldResolver: args[6]
        };
      }
      async function createSourceEventStream(...rawArgs) {
        const args = toNormalizedArgs(rawArgs);
        const { schema, document: document2, variableValues } = args;
        (0, _execute.assertValidExecutionArguments)(schema, document2, variableValues);
        const exeContext = (0, _execute.buildExecutionContext)(args);
        if (!("schema" in exeContext)) {
          return {
            errors: exeContext
          };
        }
        try {
          const eventStream = await executeSubscription(exeContext);
          if (!(0, _isAsyncIterable.isAsyncIterable)(eventStream)) {
            throw new Error(
              `Subscription field must return Async Iterable. Received: ${(0, _inspect.inspect)(eventStream)}.`
            );
          }
          return eventStream;
        } catch (error) {
          if (error instanceof _GraphQLError.GraphQLError) {
            return {
              errors: [error]
            };
          }
          throw error;
        }
      }
      async function executeSubscription(exeContext) {
        const { schema, fragments, operation, variableValues, rootValue } = exeContext;
        const rootType = schema.getSubscriptionType();
        if (rootType == null) {
          throw new _GraphQLError.GraphQLError(
            "Schema is not configured to execute subscription operation.",
            {
              nodes: operation
            }
          );
        }
        const rootFields = (0, _collectFields.collectFields)(
          schema,
          fragments,
          variableValues,
          rootType,
          operation.selectionSet
        );
        const [responseName, fieldNodes] = [...rootFields.entries()][0];
        const fieldDef = (0, _execute.getFieldDef)(schema, rootType, fieldNodes[0]);
        if (!fieldDef) {
          const fieldName = fieldNodes[0].name.value;
          throw new _GraphQLError.GraphQLError(
            `The subscription field "${fieldName}" is not defined.`,
            {
              nodes: fieldNodes
            }
          );
        }
        const path = (0, _Path.addPath)(void 0, responseName, rootType.name);
        const info = (0, _execute.buildResolveInfo)(
          exeContext,
          fieldDef,
          fieldNodes,
          rootType,
          path
        );
        try {
          var _fieldDef$subscribe;
          const args = (0, _values.getArgumentValues)(
            fieldDef,
            fieldNodes[0],
            variableValues
          );
          const contextValue = exeContext.contextValue;
          const resolveFn = (_fieldDef$subscribe = fieldDef.subscribe) !== null && _fieldDef$subscribe !== void 0 ? _fieldDef$subscribe : exeContext.subscribeFieldResolver;
          const eventStream = await resolveFn(rootValue, args, contextValue, info);
          if (eventStream instanceof Error) {
            throw eventStream;
          }
          return eventStream;
        } catch (error) {
          throw (0, _locatedError.locatedError)(
            error,
            fieldNodes,
            (0, _Path.pathToArray)(path)
          );
        }
      }
    }
  });

  // ../../node_modules/graphql/execution/index.js
  var require_execution = __commonJS({
    "../../node_modules/graphql/execution/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "createSourceEventStream", {
        enumerable: true,
        get: function() {
          return _subscribe.createSourceEventStream;
        }
      });
      Object.defineProperty(exports, "defaultFieldResolver", {
        enumerable: true,
        get: function() {
          return _execute.defaultFieldResolver;
        }
      });
      Object.defineProperty(exports, "defaultTypeResolver", {
        enumerable: true,
        get: function() {
          return _execute.defaultTypeResolver;
        }
      });
      Object.defineProperty(exports, "execute", {
        enumerable: true,
        get: function() {
          return _execute.execute;
        }
      });
      Object.defineProperty(exports, "executeSync", {
        enumerable: true,
        get: function() {
          return _execute.executeSync;
        }
      });
      Object.defineProperty(exports, "getArgumentValues", {
        enumerable: true,
        get: function() {
          return _values.getArgumentValues;
        }
      });
      Object.defineProperty(exports, "getDirectiveValues", {
        enumerable: true,
        get: function() {
          return _values.getDirectiveValues;
        }
      });
      Object.defineProperty(exports, "getVariableValues", {
        enumerable: true,
        get: function() {
          return _values.getVariableValues;
        }
      });
      Object.defineProperty(exports, "responsePathAsArray", {
        enumerable: true,
        get: function() {
          return _Path.pathToArray;
        }
      });
      Object.defineProperty(exports, "subscribe", {
        enumerable: true,
        get: function() {
          return _subscribe.subscribe;
        }
      });
      var _Path = require_Path();
      var _execute = require_execute();
      var _subscribe = require_subscribe();
      var _values = require_values();
    }
  });

  // ../../node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.js
  var require_NoDeprecatedCustomRule = __commonJS({
    "../../node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NoDeprecatedCustomRule = NoDeprecatedCustomRule;
      var _invariant = require_invariant();
      var _GraphQLError = require_GraphQLError();
      var _definition = require_definition();
      function NoDeprecatedCustomRule(context) {
        return {
          Field(node) {
            const fieldDef = context.getFieldDef();
            const deprecationReason = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.deprecationReason;
            if (fieldDef && deprecationReason != null) {
              const parentType = context.getParentType();
              parentType != null || (0, _invariant.invariant)(false);
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `The field ${parentType.name}.${fieldDef.name} is deprecated. ${deprecationReason}`,
                  {
                    nodes: node
                  }
                )
              );
            }
          },
          Argument(node) {
            const argDef = context.getArgument();
            const deprecationReason = argDef === null || argDef === void 0 ? void 0 : argDef.deprecationReason;
            if (argDef && deprecationReason != null) {
              const directiveDef = context.getDirective();
              if (directiveDef != null) {
                context.reportError(
                  new _GraphQLError.GraphQLError(
                    `Directive "@${directiveDef.name}" argument "${argDef.name}" is deprecated. ${deprecationReason}`,
                    {
                      nodes: node
                    }
                  )
                );
              } else {
                const parentType = context.getParentType();
                const fieldDef = context.getFieldDef();
                parentType != null && fieldDef != null || (0, _invariant.invariant)(false);
                context.reportError(
                  new _GraphQLError.GraphQLError(
                    `Field "${parentType.name}.${fieldDef.name}" argument "${argDef.name}" is deprecated. ${deprecationReason}`,
                    {
                      nodes: node
                    }
                  )
                );
              }
            }
          },
          ObjectField(node) {
            const inputObjectDef = (0, _definition.getNamedType)(
              context.getParentInputType()
            );
            if ((0, _definition.isInputObjectType)(inputObjectDef)) {
              const inputFieldDef = inputObjectDef.getFields()[node.name.value];
              const deprecationReason = inputFieldDef === null || inputFieldDef === void 0 ? void 0 : inputFieldDef.deprecationReason;
              if (deprecationReason != null) {
                context.reportError(
                  new _GraphQLError.GraphQLError(
                    `The input field ${inputObjectDef.name}.${inputFieldDef.name} is deprecated. ${deprecationReason}`,
                    {
                      nodes: node
                    }
                  )
                );
              }
            }
          },
          EnumValue(node) {
            const enumValueDef = context.getEnumValue();
            const deprecationReason = enumValueDef === null || enumValueDef === void 0 ? void 0 : enumValueDef.deprecationReason;
            if (enumValueDef && deprecationReason != null) {
              const enumTypeDef = (0, _definition.getNamedType)(
                context.getInputType()
              );
              enumTypeDef != null || (0, _invariant.invariant)(false);
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `The enum value "${enumTypeDef.name}.${enumValueDef.name}" is deprecated. ${deprecationReason}`,
                  {
                    nodes: node
                  }
                )
              );
            }
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.js
  var require_NoSchemaIntrospectionCustomRule = __commonJS({
    "../../node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NoSchemaIntrospectionCustomRule = NoSchemaIntrospectionCustomRule;
      var _GraphQLError = require_GraphQLError();
      var _definition = require_definition();
      var _introspection = require_introspection();
      function NoSchemaIntrospectionCustomRule(context) {
        return {
          Field(node) {
            const type = (0, _definition.getNamedType)(context.getType());
            if (type && (0, _introspection.isIntrospectionType)(type)) {
              context.reportError(
                new _GraphQLError.GraphQLError(
                  `GraphQL introspection has been disabled, but the requested query contained the field "${node.name.value}".`,
                  {
                    nodes: node
                  }
                )
              );
            }
          }
        };
      }
    }
  });

  // ../../node_modules/graphql/validation/index.js
  var require_validation = __commonJS({
    "../../node_modules/graphql/validation/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "ExecutableDefinitionsRule", {
        enumerable: true,
        get: function() {
          return _ExecutableDefinitionsRule.ExecutableDefinitionsRule;
        }
      });
      Object.defineProperty(exports, "FieldsOnCorrectTypeRule", {
        enumerable: true,
        get: function() {
          return _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule;
        }
      });
      Object.defineProperty(exports, "FragmentsOnCompositeTypesRule", {
        enumerable: true,
        get: function() {
          return _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule;
        }
      });
      Object.defineProperty(exports, "KnownArgumentNamesRule", {
        enumerable: true,
        get: function() {
          return _KnownArgumentNamesRule.KnownArgumentNamesRule;
        }
      });
      Object.defineProperty(exports, "KnownDirectivesRule", {
        enumerable: true,
        get: function() {
          return _KnownDirectivesRule.KnownDirectivesRule;
        }
      });
      Object.defineProperty(exports, "KnownFragmentNamesRule", {
        enumerable: true,
        get: function() {
          return _KnownFragmentNamesRule.KnownFragmentNamesRule;
        }
      });
      Object.defineProperty(exports, "KnownTypeNamesRule", {
        enumerable: true,
        get: function() {
          return _KnownTypeNamesRule.KnownTypeNamesRule;
        }
      });
      Object.defineProperty(exports, "LoneAnonymousOperationRule", {
        enumerable: true,
        get: function() {
          return _LoneAnonymousOperationRule.LoneAnonymousOperationRule;
        }
      });
      Object.defineProperty(exports, "LoneSchemaDefinitionRule", {
        enumerable: true,
        get: function() {
          return _LoneSchemaDefinitionRule.LoneSchemaDefinitionRule;
        }
      });
      Object.defineProperty(exports, "NoDeprecatedCustomRule", {
        enumerable: true,
        get: function() {
          return _NoDeprecatedCustomRule.NoDeprecatedCustomRule;
        }
      });
      Object.defineProperty(exports, "NoFragmentCyclesRule", {
        enumerable: true,
        get: function() {
          return _NoFragmentCyclesRule.NoFragmentCyclesRule;
        }
      });
      Object.defineProperty(exports, "NoSchemaIntrospectionCustomRule", {
        enumerable: true,
        get: function() {
          return _NoSchemaIntrospectionCustomRule.NoSchemaIntrospectionCustomRule;
        }
      });
      Object.defineProperty(exports, "NoUndefinedVariablesRule", {
        enumerable: true,
        get: function() {
          return _NoUndefinedVariablesRule.NoUndefinedVariablesRule;
        }
      });
      Object.defineProperty(exports, "NoUnusedFragmentsRule", {
        enumerable: true,
        get: function() {
          return _NoUnusedFragmentsRule.NoUnusedFragmentsRule;
        }
      });
      Object.defineProperty(exports, "NoUnusedVariablesRule", {
        enumerable: true,
        get: function() {
          return _NoUnusedVariablesRule.NoUnusedVariablesRule;
        }
      });
      Object.defineProperty(exports, "OverlappingFieldsCanBeMergedRule", {
        enumerable: true,
        get: function() {
          return _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule;
        }
      });
      Object.defineProperty(exports, "PossibleFragmentSpreadsRule", {
        enumerable: true,
        get: function() {
          return _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule;
        }
      });
      Object.defineProperty(exports, "PossibleTypeExtensionsRule", {
        enumerable: true,
        get: function() {
          return _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule;
        }
      });
      Object.defineProperty(exports, "ProvidedRequiredArgumentsRule", {
        enumerable: true,
        get: function() {
          return _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule;
        }
      });
      Object.defineProperty(exports, "ScalarLeafsRule", {
        enumerable: true,
        get: function() {
          return _ScalarLeafsRule.ScalarLeafsRule;
        }
      });
      Object.defineProperty(exports, "SingleFieldSubscriptionsRule", {
        enumerable: true,
        get: function() {
          return _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule;
        }
      });
      Object.defineProperty(exports, "UniqueArgumentDefinitionNamesRule", {
        enumerable: true,
        get: function() {
          return _UniqueArgumentDefinitionNamesRule.UniqueArgumentDefinitionNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueArgumentNamesRule", {
        enumerable: true,
        get: function() {
          return _UniqueArgumentNamesRule.UniqueArgumentNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueDirectiveNamesRule", {
        enumerable: true,
        get: function() {
          return _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueDirectivesPerLocationRule", {
        enumerable: true,
        get: function() {
          return _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule;
        }
      });
      Object.defineProperty(exports, "UniqueEnumValueNamesRule", {
        enumerable: true,
        get: function() {
          return _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueFieldDefinitionNamesRule", {
        enumerable: true,
        get: function() {
          return _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueFragmentNamesRule", {
        enumerable: true,
        get: function() {
          return _UniqueFragmentNamesRule.UniqueFragmentNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueInputFieldNamesRule", {
        enumerable: true,
        get: function() {
          return _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueOperationNamesRule", {
        enumerable: true,
        get: function() {
          return _UniqueOperationNamesRule.UniqueOperationNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueOperationTypesRule", {
        enumerable: true,
        get: function() {
          return _UniqueOperationTypesRule.UniqueOperationTypesRule;
        }
      });
      Object.defineProperty(exports, "UniqueTypeNamesRule", {
        enumerable: true,
        get: function() {
          return _UniqueTypeNamesRule.UniqueTypeNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueVariableNamesRule", {
        enumerable: true,
        get: function() {
          return _UniqueVariableNamesRule.UniqueVariableNamesRule;
        }
      });
      Object.defineProperty(exports, "ValidationContext", {
        enumerable: true,
        get: function() {
          return _ValidationContext.ValidationContext;
        }
      });
      Object.defineProperty(exports, "ValuesOfCorrectTypeRule", {
        enumerable: true,
        get: function() {
          return _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule;
        }
      });
      Object.defineProperty(exports, "VariablesAreInputTypesRule", {
        enumerable: true,
        get: function() {
          return _VariablesAreInputTypesRule.VariablesAreInputTypesRule;
        }
      });
      Object.defineProperty(exports, "VariablesInAllowedPositionRule", {
        enumerable: true,
        get: function() {
          return _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule;
        }
      });
      Object.defineProperty(exports, "specifiedRules", {
        enumerable: true,
        get: function() {
          return _specifiedRules.specifiedRules;
        }
      });
      Object.defineProperty(exports, "validate", {
        enumerable: true,
        get: function() {
          return _validate.validate;
        }
      });
      var _validate = require_validate2();
      var _ValidationContext = require_ValidationContext();
      var _specifiedRules = require_specifiedRules();
      var _ExecutableDefinitionsRule = require_ExecutableDefinitionsRule();
      var _FieldsOnCorrectTypeRule = require_FieldsOnCorrectTypeRule();
      var _FragmentsOnCompositeTypesRule = require_FragmentsOnCompositeTypesRule();
      var _KnownArgumentNamesRule = require_KnownArgumentNamesRule();
      var _KnownDirectivesRule = require_KnownDirectivesRule();
      var _KnownFragmentNamesRule = require_KnownFragmentNamesRule();
      var _KnownTypeNamesRule = require_KnownTypeNamesRule();
      var _LoneAnonymousOperationRule = require_LoneAnonymousOperationRule();
      var _NoFragmentCyclesRule = require_NoFragmentCyclesRule();
      var _NoUndefinedVariablesRule = require_NoUndefinedVariablesRule();
      var _NoUnusedFragmentsRule = require_NoUnusedFragmentsRule();
      var _NoUnusedVariablesRule = require_NoUnusedVariablesRule();
      var _OverlappingFieldsCanBeMergedRule = require_OverlappingFieldsCanBeMergedRule();
      var _PossibleFragmentSpreadsRule = require_PossibleFragmentSpreadsRule();
      var _ProvidedRequiredArgumentsRule = require_ProvidedRequiredArgumentsRule();
      var _ScalarLeafsRule = require_ScalarLeafsRule();
      var _SingleFieldSubscriptionsRule = require_SingleFieldSubscriptionsRule();
      var _UniqueArgumentNamesRule = require_UniqueArgumentNamesRule();
      var _UniqueDirectivesPerLocationRule = require_UniqueDirectivesPerLocationRule();
      var _UniqueFragmentNamesRule = require_UniqueFragmentNamesRule();
      var _UniqueInputFieldNamesRule = require_UniqueInputFieldNamesRule();
      var _UniqueOperationNamesRule = require_UniqueOperationNamesRule();
      var _UniqueVariableNamesRule = require_UniqueVariableNamesRule();
      var _ValuesOfCorrectTypeRule = require_ValuesOfCorrectTypeRule();
      var _VariablesAreInputTypesRule = require_VariablesAreInputTypesRule();
      var _VariablesInAllowedPositionRule = require_VariablesInAllowedPositionRule();
      var _LoneSchemaDefinitionRule = require_LoneSchemaDefinitionRule();
      var _UniqueOperationTypesRule = require_UniqueOperationTypesRule();
      var _UniqueTypeNamesRule = require_UniqueTypeNamesRule();
      var _UniqueEnumValueNamesRule = require_UniqueEnumValueNamesRule();
      var _UniqueFieldDefinitionNamesRule = require_UniqueFieldDefinitionNamesRule();
      var _UniqueArgumentDefinitionNamesRule = require_UniqueArgumentDefinitionNamesRule();
      var _UniqueDirectiveNamesRule = require_UniqueDirectiveNamesRule();
      var _PossibleTypeExtensionsRule = require_PossibleTypeExtensionsRule();
      var _NoDeprecatedCustomRule = require_NoDeprecatedCustomRule();
      var _NoSchemaIntrospectionCustomRule = require_NoSchemaIntrospectionCustomRule();
    }
  });

  // ../../node_modules/graphql/error/index.js
  var require_error = __commonJS({
    "../../node_modules/graphql/error/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "GraphQLError", {
        enumerable: true,
        get: function() {
          return _GraphQLError.GraphQLError;
        }
      });
      Object.defineProperty(exports, "formatError", {
        enumerable: true,
        get: function() {
          return _GraphQLError.formatError;
        }
      });
      Object.defineProperty(exports, "locatedError", {
        enumerable: true,
        get: function() {
          return _locatedError.locatedError;
        }
      });
      Object.defineProperty(exports, "printError", {
        enumerable: true,
        get: function() {
          return _GraphQLError.printError;
        }
      });
      Object.defineProperty(exports, "syntaxError", {
        enumerable: true,
        get: function() {
          return _syntaxError.syntaxError;
        }
      });
      var _GraphQLError = require_GraphQLError();
      var _syntaxError = require_syntaxError();
      var _locatedError = require_locatedError();
    }
  });

  // ../../node_modules/graphql/utilities/getIntrospectionQuery.js
  var require_getIntrospectionQuery = __commonJS({
    "../../node_modules/graphql/utilities/getIntrospectionQuery.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getIntrospectionQuery = getIntrospectionQuery;
      function getIntrospectionQuery(options) {
        const optionsWithDefault = {
          descriptions: true,
          specifiedByUrl: false,
          directiveIsRepeatable: false,
          schemaDescription: false,
          inputValueDeprecation: false,
          ...options
        };
        const descriptions = optionsWithDefault.descriptions ? "description" : "";
        const specifiedByUrl = optionsWithDefault.specifiedByUrl ? "specifiedByURL" : "";
        const directiveIsRepeatable = optionsWithDefault.directiveIsRepeatable ? "isRepeatable" : "";
        const schemaDescription = optionsWithDefault.schemaDescription ? descriptions : "";
        function inputDeprecation(str) {
          return optionsWithDefault.inputValueDeprecation ? str : "";
        }
        return `
    query IntrospectionQuery {
      __schema {
        ${schemaDescription}
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          ${descriptions}
          ${directiveIsRepeatable}
          locations
          args${inputDeprecation("(includeDeprecated: true)")} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${descriptions}
      ${specifiedByUrl}
      fields(includeDeprecated: true) {
        name
        ${descriptions}
        args${inputDeprecation("(includeDeprecated: true)")} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${inputDeprecation("(includeDeprecated: true)")} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${descriptions}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${descriptions}
      type { ...TypeRef }
      defaultValue
      ${inputDeprecation("isDeprecated")}
      ${inputDeprecation("deprecationReason")}
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
      }
    }
  });

  // ../../node_modules/graphql/utilities/getOperationAST.js
  var require_getOperationAST = __commonJS({
    "../../node_modules/graphql/utilities/getOperationAST.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getOperationAST = getOperationAST;
      var _kinds = require_kinds();
      function getOperationAST(documentAST, operationName) {
        let operation = null;
        for (const definition of documentAST.definitions) {
          if (definition.kind === _kinds.Kind.OPERATION_DEFINITION) {
            var _definition$name;
            if (operationName == null) {
              if (operation) {
                return null;
              }
              operation = definition;
            } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
              return definition;
            }
          }
        }
        return operation;
      }
    }
  });

  // ../../node_modules/graphql/utilities/getOperationRootType.js
  var require_getOperationRootType = __commonJS({
    "../../node_modules/graphql/utilities/getOperationRootType.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getOperationRootType = getOperationRootType;
      var _GraphQLError = require_GraphQLError();
      function getOperationRootType(schema, operation) {
        if (operation.operation === "query") {
          const queryType = schema.getQueryType();
          if (!queryType) {
            throw new _GraphQLError.GraphQLError(
              "Schema does not define the required query root type.",
              {
                nodes: operation
              }
            );
          }
          return queryType;
        }
        if (operation.operation === "mutation") {
          const mutationType = schema.getMutationType();
          if (!mutationType) {
            throw new _GraphQLError.GraphQLError(
              "Schema is not configured for mutations.",
              {
                nodes: operation
              }
            );
          }
          return mutationType;
        }
        if (operation.operation === "subscription") {
          const subscriptionType = schema.getSubscriptionType();
          if (!subscriptionType) {
            throw new _GraphQLError.GraphQLError(
              "Schema is not configured for subscriptions.",
              {
                nodes: operation
              }
            );
          }
          return subscriptionType;
        }
        throw new _GraphQLError.GraphQLError(
          "Can only have query, mutation and subscription operations.",
          {
            nodes: operation
          }
        );
      }
    }
  });

  // ../../node_modules/graphql/utilities/introspectionFromSchema.js
  var require_introspectionFromSchema = __commonJS({
    "../../node_modules/graphql/utilities/introspectionFromSchema.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.introspectionFromSchema = introspectionFromSchema;
      var _invariant = require_invariant();
      var _parser = require_parser();
      var _execute = require_execute();
      var _getIntrospectionQuery = require_getIntrospectionQuery();
      function introspectionFromSchema(schema, options) {
        const optionsWithDefaults = {
          specifiedByUrl: true,
          directiveIsRepeatable: true,
          schemaDescription: true,
          inputValueDeprecation: true,
          ...options
        };
        const document2 = (0, _parser.parse)(
          (0, _getIntrospectionQuery.getIntrospectionQuery)(optionsWithDefaults)
        );
        const result = (0, _execute.executeSync)({
          schema,
          document: document2
        });
        !result.errors && result.data || (0, _invariant.invariant)(false);
        return result.data;
      }
    }
  });

  // ../../node_modules/graphql/utilities/buildClientSchema.js
  var require_buildClientSchema = __commonJS({
    "../../node_modules/graphql/utilities/buildClientSchema.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.buildClientSchema = buildClientSchema;
      var _devAssert = require_devAssert();
      var _inspect = require_inspect();
      var _isObjectLike = require_isObjectLike();
      var _keyValMap = require_keyValMap();
      var _parser = require_parser();
      var _definition = require_definition();
      var _directives = require_directives();
      var _introspection = require_introspection();
      var _scalars = require_scalars();
      var _schema = require_schema();
      var _valueFromAST = require_valueFromAST();
      function buildClientSchema(introspection, options) {
        (0, _isObjectLike.isObjectLike)(introspection) && (0, _isObjectLike.isObjectLike)(introspection.__schema) || (0, _devAssert.devAssert)(
          false,
          `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${(0, _inspect.inspect)(introspection)}.`
        );
        const schemaIntrospection = introspection.__schema;
        const typeMap = (0, _keyValMap.keyValMap)(
          schemaIntrospection.types,
          (typeIntrospection) => typeIntrospection.name,
          (typeIntrospection) => buildType(typeIntrospection)
        );
        for (const stdType of [
          ..._scalars.specifiedScalarTypes,
          ..._introspection.introspectionTypes
        ]) {
          if (typeMap[stdType.name]) {
            typeMap[stdType.name] = stdType;
          }
        }
        const queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
        const mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
        const subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null;
        const directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : [];
        return new _schema.GraphQLSchema({
          description: schemaIntrospection.description,
          query: queryType,
          mutation: mutationType,
          subscription: subscriptionType,
          types: Object.values(typeMap),
          directives,
          assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
        });
        function getType(typeRef) {
          if (typeRef.kind === _introspection.TypeKind.LIST) {
            const itemRef = typeRef.ofType;
            if (!itemRef) {
              throw new Error("Decorated type deeper than introspection query.");
            }
            return new _definition.GraphQLList(getType(itemRef));
          }
          if (typeRef.kind === _introspection.TypeKind.NON_NULL) {
            const nullableRef = typeRef.ofType;
            if (!nullableRef) {
              throw new Error("Decorated type deeper than introspection query.");
            }
            const nullableType = getType(nullableRef);
            return new _definition.GraphQLNonNull(
              (0, _definition.assertNullableType)(nullableType)
            );
          }
          return getNamedType(typeRef);
        }
        function getNamedType(typeRef) {
          const typeName = typeRef.name;
          if (!typeName) {
            throw new Error(
              `Unknown type reference: ${(0, _inspect.inspect)(typeRef)}.`
            );
          }
          const type = typeMap[typeName];
          if (!type) {
            throw new Error(
              `Invalid or incomplete schema, unknown type: ${typeName}. Ensure that a full introspection query is used in order to build a client schema.`
            );
          }
          return type;
        }
        function getObjectType(typeRef) {
          return (0, _definition.assertObjectType)(getNamedType(typeRef));
        }
        function getInterfaceType(typeRef) {
          return (0, _definition.assertInterfaceType)(getNamedType(typeRef));
        }
        function buildType(type) {
          if (type != null && type.name != null && type.kind != null) {
            switch (type.kind) {
              case _introspection.TypeKind.SCALAR:
                return buildScalarDef(type);
              case _introspection.TypeKind.OBJECT:
                return buildObjectDef(type);
              case _introspection.TypeKind.INTERFACE:
                return buildInterfaceDef(type);
              case _introspection.TypeKind.UNION:
                return buildUnionDef(type);
              case _introspection.TypeKind.ENUM:
                return buildEnumDef(type);
              case _introspection.TypeKind.INPUT_OBJECT:
                return buildInputObjectDef(type);
            }
          }
          const typeStr = (0, _inspect.inspect)(type);
          throw new Error(
            `Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${typeStr}.`
          );
        }
        function buildScalarDef(scalarIntrospection) {
          return new _definition.GraphQLScalarType({
            name: scalarIntrospection.name,
            description: scalarIntrospection.description,
            specifiedByURL: scalarIntrospection.specifiedByURL
          });
        }
        function buildImplementationsList(implementingIntrospection) {
          if (implementingIntrospection.interfaces === null && implementingIntrospection.kind === _introspection.TypeKind.INTERFACE) {
            return [];
          }
          if (!implementingIntrospection.interfaces) {
            const implementingIntrospectionStr = (0, _inspect.inspect)(
              implementingIntrospection
            );
            throw new Error(
              `Introspection result missing interfaces: ${implementingIntrospectionStr}.`
            );
          }
          return implementingIntrospection.interfaces.map(getInterfaceType);
        }
        function buildObjectDef(objectIntrospection) {
          return new _definition.GraphQLObjectType({
            name: objectIntrospection.name,
            description: objectIntrospection.description,
            interfaces: () => buildImplementationsList(objectIntrospection),
            fields: () => buildFieldDefMap(objectIntrospection)
          });
        }
        function buildInterfaceDef(interfaceIntrospection) {
          return new _definition.GraphQLInterfaceType({
            name: interfaceIntrospection.name,
            description: interfaceIntrospection.description,
            interfaces: () => buildImplementationsList(interfaceIntrospection),
            fields: () => buildFieldDefMap(interfaceIntrospection)
          });
        }
        function buildUnionDef(unionIntrospection) {
          if (!unionIntrospection.possibleTypes) {
            const unionIntrospectionStr = (0, _inspect.inspect)(unionIntrospection);
            throw new Error(
              `Introspection result missing possibleTypes: ${unionIntrospectionStr}.`
            );
          }
          return new _definition.GraphQLUnionType({
            name: unionIntrospection.name,
            description: unionIntrospection.description,
            types: () => unionIntrospection.possibleTypes.map(getObjectType)
          });
        }
        function buildEnumDef(enumIntrospection) {
          if (!enumIntrospection.enumValues) {
            const enumIntrospectionStr = (0, _inspect.inspect)(enumIntrospection);
            throw new Error(
              `Introspection result missing enumValues: ${enumIntrospectionStr}.`
            );
          }
          return new _definition.GraphQLEnumType({
            name: enumIntrospection.name,
            description: enumIntrospection.description,
            values: (0, _keyValMap.keyValMap)(
              enumIntrospection.enumValues,
              (valueIntrospection) => valueIntrospection.name,
              (valueIntrospection) => ({
                description: valueIntrospection.description,
                deprecationReason: valueIntrospection.deprecationReason
              })
            )
          });
        }
        function buildInputObjectDef(inputObjectIntrospection) {
          if (!inputObjectIntrospection.inputFields) {
            const inputObjectIntrospectionStr = (0, _inspect.inspect)(
              inputObjectIntrospection
            );
            throw new Error(
              `Introspection result missing inputFields: ${inputObjectIntrospectionStr}.`
            );
          }
          return new _definition.GraphQLInputObjectType({
            name: inputObjectIntrospection.name,
            description: inputObjectIntrospection.description,
            fields: () => buildInputValueDefMap(inputObjectIntrospection.inputFields)
          });
        }
        function buildFieldDefMap(typeIntrospection) {
          if (!typeIntrospection.fields) {
            throw new Error(
              `Introspection result missing fields: ${(0, _inspect.inspect)(
                typeIntrospection
              )}.`
            );
          }
          return (0, _keyValMap.keyValMap)(
            typeIntrospection.fields,
            (fieldIntrospection) => fieldIntrospection.name,
            buildField
          );
        }
        function buildField(fieldIntrospection) {
          const type = getType(fieldIntrospection.type);
          if (!(0, _definition.isOutputType)(type)) {
            const typeStr = (0, _inspect.inspect)(type);
            throw new Error(
              `Introspection must provide output type for fields, but received: ${typeStr}.`
            );
          }
          if (!fieldIntrospection.args) {
            const fieldIntrospectionStr = (0, _inspect.inspect)(fieldIntrospection);
            throw new Error(
              `Introspection result missing field args: ${fieldIntrospectionStr}.`
            );
          }
          return {
            description: fieldIntrospection.description,
            deprecationReason: fieldIntrospection.deprecationReason,
            type,
            args: buildInputValueDefMap(fieldIntrospection.args)
          };
        }
        function buildInputValueDefMap(inputValueIntrospections) {
          return (0, _keyValMap.keyValMap)(
            inputValueIntrospections,
            (inputValue) => inputValue.name,
            buildInputValue
          );
        }
        function buildInputValue(inputValueIntrospection) {
          const type = getType(inputValueIntrospection.type);
          if (!(0, _definition.isInputType)(type)) {
            const typeStr = (0, _inspect.inspect)(type);
            throw new Error(
              `Introspection must provide input type for arguments, but received: ${typeStr}.`
            );
          }
          const defaultValue = inputValueIntrospection.defaultValue != null ? (0, _valueFromAST.valueFromAST)(
            (0, _parser.parseValue)(inputValueIntrospection.defaultValue),
            type
          ) : void 0;
          return {
            description: inputValueIntrospection.description,
            type,
            defaultValue,
            deprecationReason: inputValueIntrospection.deprecationReason
          };
        }
        function buildDirective(directiveIntrospection) {
          if (!directiveIntrospection.args) {
            const directiveIntrospectionStr = (0, _inspect.inspect)(
              directiveIntrospection
            );
            throw new Error(
              `Introspection result missing directive args: ${directiveIntrospectionStr}.`
            );
          }
          if (!directiveIntrospection.locations) {
            const directiveIntrospectionStr = (0, _inspect.inspect)(
              directiveIntrospection
            );
            throw new Error(
              `Introspection result missing directive locations: ${directiveIntrospectionStr}.`
            );
          }
          return new _directives.GraphQLDirective({
            name: directiveIntrospection.name,
            description: directiveIntrospection.description,
            isRepeatable: directiveIntrospection.isRepeatable,
            locations: directiveIntrospection.locations.slice(),
            args: buildInputValueDefMap(directiveIntrospection.args)
          });
        }
      }
    }
  });

  // ../../node_modules/graphql/utilities/extendSchema.js
  var require_extendSchema = __commonJS({
    "../../node_modules/graphql/utilities/extendSchema.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.extendSchema = extendSchema;
      exports.extendSchemaImpl = extendSchemaImpl;
      var _devAssert = require_devAssert();
      var _inspect = require_inspect();
      var _invariant = require_invariant();
      var _keyMap = require_keyMap();
      var _mapValue = require_mapValue();
      var _kinds = require_kinds();
      var _predicates = require_predicates();
      var _definition = require_definition();
      var _directives = require_directives();
      var _introspection = require_introspection();
      var _scalars = require_scalars();
      var _schema = require_schema();
      var _validate = require_validate2();
      var _values = require_values();
      var _valueFromAST = require_valueFromAST();
      function extendSchema(schema, documentAST, options) {
        (0, _schema.assertSchema)(schema);
        documentAST != null && documentAST.kind === _kinds.Kind.DOCUMENT || (0, _devAssert.devAssert)(false, "Must provide valid Document AST.");
        if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
          (0, _validate.assertValidSDLExtension)(documentAST, schema);
        }
        const schemaConfig = schema.toConfig();
        const extendedConfig = extendSchemaImpl(schemaConfig, documentAST, options);
        return schemaConfig === extendedConfig ? schema : new _schema.GraphQLSchema(extendedConfig);
      }
      function extendSchemaImpl(schemaConfig, documentAST, options) {
        var _schemaDef, _schemaDef$descriptio, _schemaDef2, _options$assumeValid;
        const typeDefs = [];
        const typeExtensionsMap = /* @__PURE__ */ Object.create(null);
        const directiveDefs = [];
        let schemaDef;
        const schemaExtensions = [];
        for (const def of documentAST.definitions) {
          if (def.kind === _kinds.Kind.SCHEMA_DEFINITION) {
            schemaDef = def;
          } else if (def.kind === _kinds.Kind.SCHEMA_EXTENSION) {
            schemaExtensions.push(def);
          } else if ((0, _predicates.isTypeDefinitionNode)(def)) {
            typeDefs.push(def);
          } else if ((0, _predicates.isTypeExtensionNode)(def)) {
            const extendedTypeName = def.name.value;
            const existingTypeExtensions = typeExtensionsMap[extendedTypeName];
            typeExtensionsMap[extendedTypeName] = existingTypeExtensions ? existingTypeExtensions.concat([def]) : [def];
          } else if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
            directiveDefs.push(def);
          }
        }
        if (Object.keys(typeExtensionsMap).length === 0 && typeDefs.length === 0 && directiveDefs.length === 0 && schemaExtensions.length === 0 && schemaDef == null) {
          return schemaConfig;
        }
        const typeMap = /* @__PURE__ */ Object.create(null);
        for (const existingType of schemaConfig.types) {
          typeMap[existingType.name] = extendNamedType(existingType);
        }
        for (const typeNode of typeDefs) {
          var _stdTypeMap$name;
          const name = typeNode.name.value;
          typeMap[name] = (_stdTypeMap$name = stdTypeMap[name]) !== null && _stdTypeMap$name !== void 0 ? _stdTypeMap$name : buildType(typeNode);
        }
        const operationTypes = {
          query: schemaConfig.query && replaceNamedType(schemaConfig.query),
          mutation: schemaConfig.mutation && replaceNamedType(schemaConfig.mutation),
          subscription: schemaConfig.subscription && replaceNamedType(schemaConfig.subscription),
          ...schemaDef && getOperationTypes([schemaDef]),
          ...getOperationTypes(schemaExtensions)
        };
        return {
          description: (_schemaDef = schemaDef) === null || _schemaDef === void 0 ? void 0 : (_schemaDef$descriptio = _schemaDef.description) === null || _schemaDef$descriptio === void 0 ? void 0 : _schemaDef$descriptio.value,
          ...operationTypes,
          types: Object.values(typeMap),
          directives: [
            ...schemaConfig.directives.map(replaceDirective),
            ...directiveDefs.map(buildDirective)
          ],
          extensions: /* @__PURE__ */ Object.create(null),
          astNode: (_schemaDef2 = schemaDef) !== null && _schemaDef2 !== void 0 ? _schemaDef2 : schemaConfig.astNode,
          extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExtensions),
          assumeValid: (_options$assumeValid = options === null || options === void 0 ? void 0 : options.assumeValid) !== null && _options$assumeValid !== void 0 ? _options$assumeValid : false
        };
        function replaceType(type) {
          if ((0, _definition.isListType)(type)) {
            return new _definition.GraphQLList(replaceType(type.ofType));
          }
          if ((0, _definition.isNonNullType)(type)) {
            return new _definition.GraphQLNonNull(replaceType(type.ofType));
          }
          return replaceNamedType(type);
        }
        function replaceNamedType(type) {
          return typeMap[type.name];
        }
        function replaceDirective(directive) {
          const config = directive.toConfig();
          return new _directives.GraphQLDirective({
            ...config,
            args: (0, _mapValue.mapValue)(config.args, extendArg)
          });
        }
        function extendNamedType(type) {
          if ((0, _introspection.isIntrospectionType)(type) || (0, _scalars.isSpecifiedScalarType)(type)) {
            return type;
          }
          if ((0, _definition.isScalarType)(type)) {
            return extendScalarType(type);
          }
          if ((0, _definition.isObjectType)(type)) {
            return extendObjectType(type);
          }
          if ((0, _definition.isInterfaceType)(type)) {
            return extendInterfaceType(type);
          }
          if ((0, _definition.isUnionType)(type)) {
            return extendUnionType(type);
          }
          if ((0, _definition.isEnumType)(type)) {
            return extendEnumType(type);
          }
          if ((0, _definition.isInputObjectType)(type)) {
            return extendInputObjectType(type);
          }
          (0, _invariant.invariant)(
            false,
            "Unexpected type: " + (0, _inspect.inspect)(type)
          );
        }
        function extendInputObjectType(type) {
          var _typeExtensionsMap$co;
          const config = type.toConfig();
          const extensions = (_typeExtensionsMap$co = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co !== void 0 ? _typeExtensionsMap$co : [];
          return new _definition.GraphQLInputObjectType({
            ...config,
            fields: () => ({
              ...(0, _mapValue.mapValue)(config.fields, (field) => ({
                ...field,
                type: replaceType(field.type)
              })),
              ...buildInputFieldMap(extensions)
            }),
            extensionASTNodes: config.extensionASTNodes.concat(extensions)
          });
        }
        function extendEnumType(type) {
          var _typeExtensionsMap$ty;
          const config = type.toConfig();
          const extensions = (_typeExtensionsMap$ty = typeExtensionsMap[type.name]) !== null && _typeExtensionsMap$ty !== void 0 ? _typeExtensionsMap$ty : [];
          return new _definition.GraphQLEnumType({
            ...config,
            values: { ...config.values, ...buildEnumValueMap(extensions) },
            extensionASTNodes: config.extensionASTNodes.concat(extensions)
          });
        }
        function extendScalarType(type) {
          var _typeExtensionsMap$co2;
          const config = type.toConfig();
          const extensions = (_typeExtensionsMap$co2 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co2 !== void 0 ? _typeExtensionsMap$co2 : [];
          let specifiedByURL = config.specifiedByURL;
          for (const extensionNode of extensions) {
            var _getSpecifiedByURL;
            specifiedByURL = (_getSpecifiedByURL = getSpecifiedByURL(extensionNode)) !== null && _getSpecifiedByURL !== void 0 ? _getSpecifiedByURL : specifiedByURL;
          }
          return new _definition.GraphQLScalarType({
            ...config,
            specifiedByURL,
            extensionASTNodes: config.extensionASTNodes.concat(extensions)
          });
        }
        function extendObjectType(type) {
          var _typeExtensionsMap$co3;
          const config = type.toConfig();
          const extensions = (_typeExtensionsMap$co3 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co3 !== void 0 ? _typeExtensionsMap$co3 : [];
          return new _definition.GraphQLObjectType({
            ...config,
            interfaces: () => [
              ...type.getInterfaces().map(replaceNamedType),
              ...buildInterfaces(extensions)
            ],
            fields: () => ({
              ...(0, _mapValue.mapValue)(config.fields, extendField),
              ...buildFieldMap(extensions)
            }),
            extensionASTNodes: config.extensionASTNodes.concat(extensions)
          });
        }
        function extendInterfaceType(type) {
          var _typeExtensionsMap$co4;
          const config = type.toConfig();
          const extensions = (_typeExtensionsMap$co4 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co4 !== void 0 ? _typeExtensionsMap$co4 : [];
          return new _definition.GraphQLInterfaceType({
            ...config,
            interfaces: () => [
              ...type.getInterfaces().map(replaceNamedType),
              ...buildInterfaces(extensions)
            ],
            fields: () => ({
              ...(0, _mapValue.mapValue)(config.fields, extendField),
              ...buildFieldMap(extensions)
            }),
            extensionASTNodes: config.extensionASTNodes.concat(extensions)
          });
        }
        function extendUnionType(type) {
          var _typeExtensionsMap$co5;
          const config = type.toConfig();
          const extensions = (_typeExtensionsMap$co5 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co5 !== void 0 ? _typeExtensionsMap$co5 : [];
          return new _definition.GraphQLUnionType({
            ...config,
            types: () => [
              ...type.getTypes().map(replaceNamedType),
              ...buildUnionTypes(extensions)
            ],
            extensionASTNodes: config.extensionASTNodes.concat(extensions)
          });
        }
        function extendField(field) {
          return {
            ...field,
            type: replaceType(field.type),
            args: field.args && (0, _mapValue.mapValue)(field.args, extendArg)
          };
        }
        function extendArg(arg) {
          return { ...arg, type: replaceType(arg.type) };
        }
        function getOperationTypes(nodes) {
          const opTypes = {};
          for (const node of nodes) {
            var _node$operationTypes;
            const operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];
            for (const operationType of operationTypesNodes) {
              opTypes[operationType.operation] = getNamedType(operationType.type);
            }
          }
          return opTypes;
        }
        function getNamedType(node) {
          var _stdTypeMap$name2;
          const name = node.name.value;
          const type = (_stdTypeMap$name2 = stdTypeMap[name]) !== null && _stdTypeMap$name2 !== void 0 ? _stdTypeMap$name2 : typeMap[name];
          if (type === void 0) {
            throw new Error(`Unknown type: "${name}".`);
          }
          return type;
        }
        function getWrappedType(node) {
          if (node.kind === _kinds.Kind.LIST_TYPE) {
            return new _definition.GraphQLList(getWrappedType(node.type));
          }
          if (node.kind === _kinds.Kind.NON_NULL_TYPE) {
            return new _definition.GraphQLNonNull(getWrappedType(node.type));
          }
          return getNamedType(node);
        }
        function buildDirective(node) {
          var _node$description;
          return new _directives.GraphQLDirective({
            name: node.name.value,
            description: (_node$description = node.description) === null || _node$description === void 0 ? void 0 : _node$description.value,
            locations: node.locations.map(({ value }) => value),
            isRepeatable: node.repeatable,
            args: buildArgumentMap(node.arguments),
            astNode: node
          });
        }
        function buildFieldMap(nodes) {
          const fieldConfigMap = /* @__PURE__ */ Object.create(null);
          for (const node of nodes) {
            var _node$fields;
            const nodeFields = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
            for (const field of nodeFields) {
              var _field$description;
              fieldConfigMap[field.name.value] = {
                type: getWrappedType(field.type),
                description: (_field$description = field.description) === null || _field$description === void 0 ? void 0 : _field$description.value,
                args: buildArgumentMap(field.arguments),
                deprecationReason: getDeprecationReason(field),
                astNode: field
              };
            }
          }
          return fieldConfigMap;
        }
        function buildArgumentMap(args) {
          const argsNodes = args !== null && args !== void 0 ? args : [];
          const argConfigMap = /* @__PURE__ */ Object.create(null);
          for (const arg of argsNodes) {
            var _arg$description;
            const type = getWrappedType(arg.type);
            argConfigMap[arg.name.value] = {
              type,
              description: (_arg$description = arg.description) === null || _arg$description === void 0 ? void 0 : _arg$description.value,
              defaultValue: (0, _valueFromAST.valueFromAST)(arg.defaultValue, type),
              deprecationReason: getDeprecationReason(arg),
              astNode: arg
            };
          }
          return argConfigMap;
        }
        function buildInputFieldMap(nodes) {
          const inputFieldMap = /* @__PURE__ */ Object.create(null);
          for (const node of nodes) {
            var _node$fields2;
            const fieldsNodes = (_node$fields2 = node.fields) !== null && _node$fields2 !== void 0 ? _node$fields2 : [];
            for (const field of fieldsNodes) {
              var _field$description2;
              const type = getWrappedType(field.type);
              inputFieldMap[field.name.value] = {
                type,
                description: (_field$description2 = field.description) === null || _field$description2 === void 0 ? void 0 : _field$description2.value,
                defaultValue: (0, _valueFromAST.valueFromAST)(
                  field.defaultValue,
                  type
                ),
                deprecationReason: getDeprecationReason(field),
                astNode: field
              };
            }
          }
          return inputFieldMap;
        }
        function buildEnumValueMap(nodes) {
          const enumValueMap = /* @__PURE__ */ Object.create(null);
          for (const node of nodes) {
            var _node$values;
            const valuesNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
            for (const value of valuesNodes) {
              var _value$description;
              enumValueMap[value.name.value] = {
                description: (_value$description = value.description) === null || _value$description === void 0 ? void 0 : _value$description.value,
                deprecationReason: getDeprecationReason(value),
                astNode: value
              };
            }
          }
          return enumValueMap;
        }
        function buildInterfaces(nodes) {
          return nodes.flatMap(
            (node) => {
              var _node$interfaces$map, _node$interfaces;
              return (_node$interfaces$map = (_node$interfaces = node.interfaces) === null || _node$interfaces === void 0 ? void 0 : _node$interfaces.map(getNamedType)) !== null && _node$interfaces$map !== void 0 ? _node$interfaces$map : [];
            }
          );
        }
        function buildUnionTypes(nodes) {
          return nodes.flatMap(
            (node) => {
              var _node$types$map, _node$types;
              return (_node$types$map = (_node$types = node.types) === null || _node$types === void 0 ? void 0 : _node$types.map(getNamedType)) !== null && _node$types$map !== void 0 ? _node$types$map : [];
            }
          );
        }
        function buildType(astNode) {
          var _typeExtensionsMap$na;
          const name = astNode.name.value;
          const extensionASTNodes = (_typeExtensionsMap$na = typeExtensionsMap[name]) !== null && _typeExtensionsMap$na !== void 0 ? _typeExtensionsMap$na : [];
          switch (astNode.kind) {
            case _kinds.Kind.OBJECT_TYPE_DEFINITION: {
              var _astNode$description;
              const allNodes = [astNode, ...extensionASTNodes];
              return new _definition.GraphQLObjectType({
                name,
                description: (_astNode$description = astNode.description) === null || _astNode$description === void 0 ? void 0 : _astNode$description.value,
                interfaces: () => buildInterfaces(allNodes),
                fields: () => buildFieldMap(allNodes),
                astNode,
                extensionASTNodes
              });
            }
            case _kinds.Kind.INTERFACE_TYPE_DEFINITION: {
              var _astNode$description2;
              const allNodes = [astNode, ...extensionASTNodes];
              return new _definition.GraphQLInterfaceType({
                name,
                description: (_astNode$description2 = astNode.description) === null || _astNode$description2 === void 0 ? void 0 : _astNode$description2.value,
                interfaces: () => buildInterfaces(allNodes),
                fields: () => buildFieldMap(allNodes),
                astNode,
                extensionASTNodes
              });
            }
            case _kinds.Kind.ENUM_TYPE_DEFINITION: {
              var _astNode$description3;
              const allNodes = [astNode, ...extensionASTNodes];
              return new _definition.GraphQLEnumType({
                name,
                description: (_astNode$description3 = astNode.description) === null || _astNode$description3 === void 0 ? void 0 : _astNode$description3.value,
                values: buildEnumValueMap(allNodes),
                astNode,
                extensionASTNodes
              });
            }
            case _kinds.Kind.UNION_TYPE_DEFINITION: {
              var _astNode$description4;
              const allNodes = [astNode, ...extensionASTNodes];
              return new _definition.GraphQLUnionType({
                name,
                description: (_astNode$description4 = astNode.description) === null || _astNode$description4 === void 0 ? void 0 : _astNode$description4.value,
                types: () => buildUnionTypes(allNodes),
                astNode,
                extensionASTNodes
              });
            }
            case _kinds.Kind.SCALAR_TYPE_DEFINITION: {
              var _astNode$description5;
              return new _definition.GraphQLScalarType({
                name,
                description: (_astNode$description5 = astNode.description) === null || _astNode$description5 === void 0 ? void 0 : _astNode$description5.value,
                specifiedByURL: getSpecifiedByURL(astNode),
                astNode,
                extensionASTNodes
              });
            }
            case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION: {
              var _astNode$description6;
              const allNodes = [astNode, ...extensionASTNodes];
              return new _definition.GraphQLInputObjectType({
                name,
                description: (_astNode$description6 = astNode.description) === null || _astNode$description6 === void 0 ? void 0 : _astNode$description6.value,
                fields: () => buildInputFieldMap(allNodes),
                astNode,
                extensionASTNodes
              });
            }
          }
        }
      }
      var stdTypeMap = (0, _keyMap.keyMap)(
        [..._scalars.specifiedScalarTypes, ..._introspection.introspectionTypes],
        (type) => type.name
      );
      function getDeprecationReason(node) {
        const deprecated = (0, _values.getDirectiveValues)(
          _directives.GraphQLDeprecatedDirective,
          node
        );
        return deprecated === null || deprecated === void 0 ? void 0 : deprecated.reason;
      }
      function getSpecifiedByURL(node) {
        const specifiedBy = (0, _values.getDirectiveValues)(
          _directives.GraphQLSpecifiedByDirective,
          node
        );
        return specifiedBy === null || specifiedBy === void 0 ? void 0 : specifiedBy.url;
      }
    }
  });

  // ../../node_modules/graphql/utilities/buildASTSchema.js
  var require_buildASTSchema = __commonJS({
    "../../node_modules/graphql/utilities/buildASTSchema.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.buildASTSchema = buildASTSchema;
      exports.buildSchema = buildSchema;
      var _devAssert = require_devAssert();
      var _kinds = require_kinds();
      var _parser = require_parser();
      var _directives = require_directives();
      var _schema = require_schema();
      var _validate = require_validate2();
      var _extendSchema = require_extendSchema();
      function buildASTSchema(documentAST, options) {
        documentAST != null && documentAST.kind === _kinds.Kind.DOCUMENT || (0, _devAssert.devAssert)(false, "Must provide valid Document AST.");
        if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
          (0, _validate.assertValidSDL)(documentAST);
        }
        const emptySchemaConfig = {
          description: void 0,
          types: [],
          directives: [],
          extensions: /* @__PURE__ */ Object.create(null),
          extensionASTNodes: [],
          assumeValid: false
        };
        const config = (0, _extendSchema.extendSchemaImpl)(
          emptySchemaConfig,
          documentAST,
          options
        );
        if (config.astNode == null) {
          for (const type of config.types) {
            switch (type.name) {
              case "Query":
                config.query = type;
                break;
              case "Mutation":
                config.mutation = type;
                break;
              case "Subscription":
                config.subscription = type;
                break;
            }
          }
        }
        const directives = [
          ...config.directives,
          ..._directives.specifiedDirectives.filter(
            (stdDirective) => config.directives.every(
              (directive) => directive.name !== stdDirective.name
            )
          )
        ];
        return new _schema.GraphQLSchema({ ...config, directives });
      }
      function buildSchema(source, options) {
        const document2 = (0, _parser.parse)(source, {
          noLocation: options === null || options === void 0 ? void 0 : options.noLocation,
          allowLegacyFragmentVariables: options === null || options === void 0 ? void 0 : options.allowLegacyFragmentVariables
        });
        return buildASTSchema(document2, {
          assumeValidSDL: options === null || options === void 0 ? void 0 : options.assumeValidSDL,
          assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
        });
      }
    }
  });

  // ../../node_modules/graphql/utilities/lexicographicSortSchema.js
  var require_lexicographicSortSchema = __commonJS({
    "../../node_modules/graphql/utilities/lexicographicSortSchema.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.lexicographicSortSchema = lexicographicSortSchema;
      var _inspect = require_inspect();
      var _invariant = require_invariant();
      var _keyValMap = require_keyValMap();
      var _naturalCompare = require_naturalCompare();
      var _definition = require_definition();
      var _directives = require_directives();
      var _introspection = require_introspection();
      var _schema = require_schema();
      function lexicographicSortSchema(schema) {
        const schemaConfig = schema.toConfig();
        const typeMap = (0, _keyValMap.keyValMap)(
          sortByName(schemaConfig.types),
          (type) => type.name,
          sortNamedType
        );
        return new _schema.GraphQLSchema({
          ...schemaConfig,
          types: Object.values(typeMap),
          directives: sortByName(schemaConfig.directives).map(sortDirective),
          query: replaceMaybeType(schemaConfig.query),
          mutation: replaceMaybeType(schemaConfig.mutation),
          subscription: replaceMaybeType(schemaConfig.subscription)
        });
        function replaceType(type) {
          if ((0, _definition.isListType)(type)) {
            return new _definition.GraphQLList(replaceType(type.ofType));
          } else if ((0, _definition.isNonNullType)(type)) {
            return new _definition.GraphQLNonNull(replaceType(type.ofType));
          }
          return replaceNamedType(type);
        }
        function replaceNamedType(type) {
          return typeMap[type.name];
        }
        function replaceMaybeType(maybeType) {
          return maybeType && replaceNamedType(maybeType);
        }
        function sortDirective(directive) {
          const config = directive.toConfig();
          return new _directives.GraphQLDirective({
            ...config,
            locations: sortBy(config.locations, (x) => x),
            args: sortArgs(config.args)
          });
        }
        function sortArgs(args) {
          return sortObjMap(args, (arg) => ({ ...arg, type: replaceType(arg.type) }));
        }
        function sortFields(fieldsMap) {
          return sortObjMap(fieldsMap, (field) => ({
            ...field,
            type: replaceType(field.type),
            args: field.args && sortArgs(field.args)
          }));
        }
        function sortInputFields(fieldsMap) {
          return sortObjMap(fieldsMap, (field) => ({
            ...field,
            type: replaceType(field.type)
          }));
        }
        function sortTypes(array) {
          return sortByName(array).map(replaceNamedType);
        }
        function sortNamedType(type) {
          if ((0, _definition.isScalarType)(type) || (0, _introspection.isIntrospectionType)(type)) {
            return type;
          }
          if ((0, _definition.isObjectType)(type)) {
            const config = type.toConfig();
            return new _definition.GraphQLObjectType({
              ...config,
              interfaces: () => sortTypes(config.interfaces),
              fields: () => sortFields(config.fields)
            });
          }
          if ((0, _definition.isInterfaceType)(type)) {
            const config = type.toConfig();
            return new _definition.GraphQLInterfaceType({
              ...config,
              interfaces: () => sortTypes(config.interfaces),
              fields: () => sortFields(config.fields)
            });
          }
          if ((0, _definition.isUnionType)(type)) {
            const config = type.toConfig();
            return new _definition.GraphQLUnionType({
              ...config,
              types: () => sortTypes(config.types)
            });
          }
          if ((0, _definition.isEnumType)(type)) {
            const config = type.toConfig();
            return new _definition.GraphQLEnumType({
              ...config,
              values: sortObjMap(config.values, (value) => value)
            });
          }
          if ((0, _definition.isInputObjectType)(type)) {
            const config = type.toConfig();
            return new _definition.GraphQLInputObjectType({
              ...config,
              fields: () => sortInputFields(config.fields)
            });
          }
          (0, _invariant.invariant)(
            false,
            "Unexpected type: " + (0, _inspect.inspect)(type)
          );
        }
      }
      function sortObjMap(map, sortValueFn) {
        const sortedMap = /* @__PURE__ */ Object.create(null);
        for (const key of Object.keys(map).sort(_naturalCompare.naturalCompare)) {
          sortedMap[key] = sortValueFn(map[key]);
        }
        return sortedMap;
      }
      function sortByName(array) {
        return sortBy(array, (obj) => obj.name);
      }
      function sortBy(array, mapToKey) {
        return array.slice().sort((obj1, obj2) => {
          const key1 = mapToKey(obj1);
          const key2 = mapToKey(obj2);
          return (0, _naturalCompare.naturalCompare)(key1, key2);
        });
      }
    }
  });

  // ../../node_modules/graphql/utilities/printSchema.js
  var require_printSchema = __commonJS({
    "../../node_modules/graphql/utilities/printSchema.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.printIntrospectionSchema = printIntrospectionSchema;
      exports.printSchema = printSchema;
      exports.printType = printType;
      var _inspect = require_inspect();
      var _invariant = require_invariant();
      var _blockString = require_blockString();
      var _kinds = require_kinds();
      var _printer = require_printer();
      var _definition = require_definition();
      var _directives = require_directives();
      var _introspection = require_introspection();
      var _scalars = require_scalars();
      var _astFromValue = require_astFromValue();
      function printSchema(schema) {
        return printFilteredSchema(
          schema,
          (n) => !(0, _directives.isSpecifiedDirective)(n),
          isDefinedType
        );
      }
      function printIntrospectionSchema(schema) {
        return printFilteredSchema(
          schema,
          _directives.isSpecifiedDirective,
          _introspection.isIntrospectionType
        );
      }
      function isDefinedType(type) {
        return !(0, _scalars.isSpecifiedScalarType)(type) && !(0, _introspection.isIntrospectionType)(type);
      }
      function printFilteredSchema(schema, directiveFilter, typeFilter) {
        const directives = schema.getDirectives().filter(directiveFilter);
        const types = Object.values(schema.getTypeMap()).filter(typeFilter);
        return [
          printSchemaDefinition(schema),
          ...directives.map((directive) => printDirective(directive)),
          ...types.map((type) => printType(type))
        ].filter(Boolean).join("\n\n");
      }
      function printSchemaDefinition(schema) {
        if (schema.description == null && isSchemaOfCommonNames(schema)) {
          return;
        }
        const operationTypes = [];
        const queryType = schema.getQueryType();
        if (queryType) {
          operationTypes.push(`  query: ${queryType.name}`);
        }
        const mutationType = schema.getMutationType();
        if (mutationType) {
          operationTypes.push(`  mutation: ${mutationType.name}`);
        }
        const subscriptionType = schema.getSubscriptionType();
        if (subscriptionType) {
          operationTypes.push(`  subscription: ${subscriptionType.name}`);
        }
        return printDescription(schema) + `schema {
${operationTypes.join("\n")}
}`;
      }
      function isSchemaOfCommonNames(schema) {
        const queryType = schema.getQueryType();
        if (queryType && queryType.name !== "Query") {
          return false;
        }
        const mutationType = schema.getMutationType();
        if (mutationType && mutationType.name !== "Mutation") {
          return false;
        }
        const subscriptionType = schema.getSubscriptionType();
        if (subscriptionType && subscriptionType.name !== "Subscription") {
          return false;
        }
        return true;
      }
      function printType(type) {
        if ((0, _definition.isScalarType)(type)) {
          return printScalar(type);
        }
        if ((0, _definition.isObjectType)(type)) {
          return printObject(type);
        }
        if ((0, _definition.isInterfaceType)(type)) {
          return printInterface(type);
        }
        if ((0, _definition.isUnionType)(type)) {
          return printUnion(type);
        }
        if ((0, _definition.isEnumType)(type)) {
          return printEnum(type);
        }
        if ((0, _definition.isInputObjectType)(type)) {
          return printInputObject(type);
        }
        (0, _invariant.invariant)(
          false,
          "Unexpected type: " + (0, _inspect.inspect)(type)
        );
      }
      function printScalar(type) {
        return printDescription(type) + `scalar ${type.name}` + printSpecifiedByURL(type);
      }
      function printImplementedInterfaces(type) {
        const interfaces = type.getInterfaces();
        return interfaces.length ? " implements " + interfaces.map((i) => i.name).join(" & ") : "";
      }
      function printObject(type) {
        return printDescription(type) + `type ${type.name}` + printImplementedInterfaces(type) + printFields(type);
      }
      function printInterface(type) {
        return printDescription(type) + `interface ${type.name}` + printImplementedInterfaces(type) + printFields(type);
      }
      function printUnion(type) {
        const types = type.getTypes();
        const possibleTypes = types.length ? " = " + types.join(" | ") : "";
        return printDescription(type) + "union " + type.name + possibleTypes;
      }
      function printEnum(type) {
        const values = type.getValues().map(
          (value, i) => printDescription(value, "  ", !i) + "  " + value.name + printDeprecated(value.deprecationReason)
        );
        return printDescription(type) + `enum ${type.name}` + printBlock(values);
      }
      function printInputObject(type) {
        const fields = Object.values(type.getFields()).map(
          (f, i) => printDescription(f, "  ", !i) + "  " + printInputValue(f)
        );
        return printDescription(type) + `input ${type.name}` + printBlock(fields);
      }
      function printFields(type) {
        const fields = Object.values(type.getFields()).map(
          (f, i) => printDescription(f, "  ", !i) + "  " + f.name + printArgs(f.args, "  ") + ": " + String(f.type) + printDeprecated(f.deprecationReason)
        );
        return printBlock(fields);
      }
      function printBlock(items) {
        return items.length !== 0 ? " {\n" + items.join("\n") + "\n}" : "";
      }
      function printArgs(args, indentation = "") {
        if (args.length === 0) {
          return "";
        }
        if (args.every((arg) => !arg.description)) {
          return "(" + args.map(printInputValue).join(", ") + ")";
        }
        return "(\n" + args.map(
          (arg, i) => printDescription(arg, "  " + indentation, !i) + "  " + indentation + printInputValue(arg)
        ).join("\n") + "\n" + indentation + ")";
      }
      function printInputValue(arg) {
        const defaultAST = (0, _astFromValue.astFromValue)(
          arg.defaultValue,
          arg.type
        );
        let argDecl = arg.name + ": " + String(arg.type);
        if (defaultAST) {
          argDecl += ` = ${(0, _printer.print)(defaultAST)}`;
        }
        return argDecl + printDeprecated(arg.deprecationReason);
      }
      function printDirective(directive) {
        return printDescription(directive) + "directive @" + directive.name + printArgs(directive.args) + (directive.isRepeatable ? " repeatable" : "") + " on " + directive.locations.join(" | ");
      }
      function printDeprecated(reason) {
        if (reason == null) {
          return "";
        }
        if (reason !== _directives.DEFAULT_DEPRECATION_REASON) {
          const astValue = (0, _printer.print)({
            kind: _kinds.Kind.STRING,
            value: reason
          });
          return ` @deprecated(reason: ${astValue})`;
        }
        return " @deprecated";
      }
      function printSpecifiedByURL(scalar) {
        if (scalar.specifiedByURL == null) {
          return "";
        }
        const astValue = (0, _printer.print)({
          kind: _kinds.Kind.STRING,
          value: scalar.specifiedByURL
        });
        return ` @specifiedBy(url: ${astValue})`;
      }
      function printDescription(def, indentation = "", firstInBlock = true) {
        const { description } = def;
        if (description == null) {
          return "";
        }
        const blockString = (0, _printer.print)({
          kind: _kinds.Kind.STRING,
          value: description,
          block: (0, _blockString.isPrintableAsBlockString)(description)
        });
        const prefix = indentation && !firstInBlock ? "\n" + indentation : indentation;
        return prefix + blockString.replace(/\n/g, "\n" + indentation) + "\n";
      }
    }
  });

  // ../../node_modules/graphql/utilities/concatAST.js
  var require_concatAST = __commonJS({
    "../../node_modules/graphql/utilities/concatAST.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.concatAST = concatAST;
      var _kinds = require_kinds();
      function concatAST(documents) {
        const definitions = [];
        for (const doc of documents) {
          definitions.push(...doc.definitions);
        }
        return {
          kind: _kinds.Kind.DOCUMENT,
          definitions
        };
      }
    }
  });

  // ../../node_modules/graphql/utilities/separateOperations.js
  var require_separateOperations = __commonJS({
    "../../node_modules/graphql/utilities/separateOperations.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.separateOperations = separateOperations;
      var _kinds = require_kinds();
      var _visitor = require_visitor();
      function separateOperations(documentAST) {
        const operations = [];
        const depGraph = /* @__PURE__ */ Object.create(null);
        for (const definitionNode of documentAST.definitions) {
          switch (definitionNode.kind) {
            case _kinds.Kind.OPERATION_DEFINITION:
              operations.push(definitionNode);
              break;
            case _kinds.Kind.FRAGMENT_DEFINITION:
              depGraph[definitionNode.name.value] = collectDependencies(
                definitionNode.selectionSet
              );
              break;
            default:
          }
        }
        const separatedDocumentASTs = /* @__PURE__ */ Object.create(null);
        for (const operation of operations) {
          const dependencies = /* @__PURE__ */ new Set();
          for (const fragmentName of collectDependencies(operation.selectionSet)) {
            collectTransitiveDependencies(dependencies, depGraph, fragmentName);
          }
          const operationName = operation.name ? operation.name.value : "";
          separatedDocumentASTs[operationName] = {
            kind: _kinds.Kind.DOCUMENT,
            definitions: documentAST.definitions.filter(
              (node) => node === operation || node.kind === _kinds.Kind.FRAGMENT_DEFINITION && dependencies.has(node.name.value)
            )
          };
        }
        return separatedDocumentASTs;
      }
      function collectTransitiveDependencies(collected, depGraph, fromName) {
        if (!collected.has(fromName)) {
          collected.add(fromName);
          const immediateDeps = depGraph[fromName];
          if (immediateDeps !== void 0) {
            for (const toName of immediateDeps) {
              collectTransitiveDependencies(collected, depGraph, toName);
            }
          }
        }
      }
      function collectDependencies(selectionSet) {
        const dependencies = [];
        (0, _visitor.visit)(selectionSet, {
          FragmentSpread(node) {
            dependencies.push(node.name.value);
          }
        });
        return dependencies;
      }
    }
  });

  // ../../node_modules/graphql/utilities/stripIgnoredCharacters.js
  var require_stripIgnoredCharacters = __commonJS({
    "../../node_modules/graphql/utilities/stripIgnoredCharacters.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.stripIgnoredCharacters = stripIgnoredCharacters;
      var _blockString = require_blockString();
      var _lexer = require_lexer();
      var _source = require_source();
      var _tokenKind = require_tokenKind();
      function stripIgnoredCharacters(source) {
        const sourceObj = (0, _source.isSource)(source) ? source : new _source.Source(source);
        const body = sourceObj.body;
        const lexer = new _lexer.Lexer(sourceObj);
        let strippedBody = "";
        let wasLastAddedTokenNonPunctuator = false;
        while (lexer.advance().kind !== _tokenKind.TokenKind.EOF) {
          const currentToken = lexer.token;
          const tokenKind = currentToken.kind;
          const isNonPunctuator = !(0, _lexer.isPunctuatorTokenKind)(
            currentToken.kind
          );
          if (wasLastAddedTokenNonPunctuator) {
            if (isNonPunctuator || currentToken.kind === _tokenKind.TokenKind.SPREAD) {
              strippedBody += " ";
            }
          }
          const tokenBody = body.slice(currentToken.start, currentToken.end);
          if (tokenKind === _tokenKind.TokenKind.BLOCK_STRING) {
            strippedBody += (0, _blockString.printBlockString)(currentToken.value, {
              minimize: true
            });
          } else {
            strippedBody += tokenBody;
          }
          wasLastAddedTokenNonPunctuator = isNonPunctuator;
        }
        return strippedBody;
      }
    }
  });

  // ../../node_modules/graphql/utilities/assertValidName.js
  var require_assertValidName = __commonJS({
    "../../node_modules/graphql/utilities/assertValidName.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.assertValidName = assertValidName;
      exports.isValidNameError = isValidNameError;
      var _devAssert = require_devAssert();
      var _GraphQLError = require_GraphQLError();
      var _assertName = require_assertName();
      function assertValidName(name) {
        const error = isValidNameError(name);
        if (error) {
          throw error;
        }
        return name;
      }
      function isValidNameError(name) {
        typeof name === "string" || (0, _devAssert.devAssert)(false, "Expected name to be a string.");
        if (name.startsWith("__")) {
          return new _GraphQLError.GraphQLError(
            `Name "${name}" must not begin with "__", which is reserved by GraphQL introspection.`
          );
        }
        try {
          (0, _assertName.assertName)(name);
        } catch (error) {
          return error;
        }
      }
    }
  });

  // ../../node_modules/graphql/utilities/findBreakingChanges.js
  var require_findBreakingChanges = __commonJS({
    "../../node_modules/graphql/utilities/findBreakingChanges.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DangerousChangeType = exports.BreakingChangeType = void 0;
      exports.findBreakingChanges = findBreakingChanges;
      exports.findDangerousChanges = findDangerousChanges;
      var _inspect = require_inspect();
      var _invariant = require_invariant();
      var _keyMap = require_keyMap();
      var _printer = require_printer();
      var _definition = require_definition();
      var _scalars = require_scalars();
      var _astFromValue = require_astFromValue();
      var _sortValueNode = require_sortValueNode();
      var BreakingChangeType;
      exports.BreakingChangeType = BreakingChangeType;
      (function(BreakingChangeType2) {
        BreakingChangeType2["TYPE_REMOVED"] = "TYPE_REMOVED";
        BreakingChangeType2["TYPE_CHANGED_KIND"] = "TYPE_CHANGED_KIND";
        BreakingChangeType2["TYPE_REMOVED_FROM_UNION"] = "TYPE_REMOVED_FROM_UNION";
        BreakingChangeType2["VALUE_REMOVED_FROM_ENUM"] = "VALUE_REMOVED_FROM_ENUM";
        BreakingChangeType2["REQUIRED_INPUT_FIELD_ADDED"] = "REQUIRED_INPUT_FIELD_ADDED";
        BreakingChangeType2["IMPLEMENTED_INTERFACE_REMOVED"] = "IMPLEMENTED_INTERFACE_REMOVED";
        BreakingChangeType2["FIELD_REMOVED"] = "FIELD_REMOVED";
        BreakingChangeType2["FIELD_CHANGED_KIND"] = "FIELD_CHANGED_KIND";
        BreakingChangeType2["REQUIRED_ARG_ADDED"] = "REQUIRED_ARG_ADDED";
        BreakingChangeType2["ARG_REMOVED"] = "ARG_REMOVED";
        BreakingChangeType2["ARG_CHANGED_KIND"] = "ARG_CHANGED_KIND";
        BreakingChangeType2["DIRECTIVE_REMOVED"] = "DIRECTIVE_REMOVED";
        BreakingChangeType2["DIRECTIVE_ARG_REMOVED"] = "DIRECTIVE_ARG_REMOVED";
        BreakingChangeType2["REQUIRED_DIRECTIVE_ARG_ADDED"] = "REQUIRED_DIRECTIVE_ARG_ADDED";
        BreakingChangeType2["DIRECTIVE_REPEATABLE_REMOVED"] = "DIRECTIVE_REPEATABLE_REMOVED";
        BreakingChangeType2["DIRECTIVE_LOCATION_REMOVED"] = "DIRECTIVE_LOCATION_REMOVED";
      })(
        BreakingChangeType || (exports.BreakingChangeType = BreakingChangeType = {})
      );
      var DangerousChangeType;
      exports.DangerousChangeType = DangerousChangeType;
      (function(DangerousChangeType2) {
        DangerousChangeType2["VALUE_ADDED_TO_ENUM"] = "VALUE_ADDED_TO_ENUM";
        DangerousChangeType2["TYPE_ADDED_TO_UNION"] = "TYPE_ADDED_TO_UNION";
        DangerousChangeType2["OPTIONAL_INPUT_FIELD_ADDED"] = "OPTIONAL_INPUT_FIELD_ADDED";
        DangerousChangeType2["OPTIONAL_ARG_ADDED"] = "OPTIONAL_ARG_ADDED";
        DangerousChangeType2["IMPLEMENTED_INTERFACE_ADDED"] = "IMPLEMENTED_INTERFACE_ADDED";
        DangerousChangeType2["ARG_DEFAULT_VALUE_CHANGE"] = "ARG_DEFAULT_VALUE_CHANGE";
      })(
        DangerousChangeType || (exports.DangerousChangeType = DangerousChangeType = {})
      );
      function findBreakingChanges(oldSchema, newSchema) {
        return findSchemaChanges(oldSchema, newSchema).filter(
          (change) => change.type in BreakingChangeType
        );
      }
      function findDangerousChanges(oldSchema, newSchema) {
        return findSchemaChanges(oldSchema, newSchema).filter(
          (change) => change.type in DangerousChangeType
        );
      }
      function findSchemaChanges(oldSchema, newSchema) {
        return [
          ...findTypeChanges(oldSchema, newSchema),
          ...findDirectiveChanges(oldSchema, newSchema)
        ];
      }
      function findDirectiveChanges(oldSchema, newSchema) {
        const schemaChanges = [];
        const directivesDiff = diff(
          oldSchema.getDirectives(),
          newSchema.getDirectives()
        );
        for (const oldDirective of directivesDiff.removed) {
          schemaChanges.push({
            type: BreakingChangeType.DIRECTIVE_REMOVED,
            description: `${oldDirective.name} was removed.`
          });
        }
        for (const [oldDirective, newDirective] of directivesDiff.persisted) {
          const argsDiff = diff(oldDirective.args, newDirective.args);
          for (const newArg of argsDiff.added) {
            if ((0, _definition.isRequiredArgument)(newArg)) {
              schemaChanges.push({
                type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
                description: `A required arg ${newArg.name} on directive ${oldDirective.name} was added.`
              });
            }
          }
          for (const oldArg of argsDiff.removed) {
            schemaChanges.push({
              type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
              description: `${oldArg.name} was removed from ${oldDirective.name}.`
            });
          }
          if (oldDirective.isRepeatable && !newDirective.isRepeatable) {
            schemaChanges.push({
              type: BreakingChangeType.DIRECTIVE_REPEATABLE_REMOVED,
              description: `Repeatable flag was removed from ${oldDirective.name}.`
            });
          }
          for (const location of oldDirective.locations) {
            if (!newDirective.locations.includes(location)) {
              schemaChanges.push({
                type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
                description: `${location} was removed from ${oldDirective.name}.`
              });
            }
          }
        }
        return schemaChanges;
      }
      function findTypeChanges(oldSchema, newSchema) {
        const schemaChanges = [];
        const typesDiff = diff(
          Object.values(oldSchema.getTypeMap()),
          Object.values(newSchema.getTypeMap())
        );
        for (const oldType of typesDiff.removed) {
          schemaChanges.push({
            type: BreakingChangeType.TYPE_REMOVED,
            description: (0, _scalars.isSpecifiedScalarType)(oldType) ? `Standard scalar ${oldType.name} was removed because it is not referenced anymore.` : `${oldType.name} was removed.`
          });
        }
        for (const [oldType, newType] of typesDiff.persisted) {
          if ((0, _definition.isEnumType)(oldType) && (0, _definition.isEnumType)(newType)) {
            schemaChanges.push(...findEnumTypeChanges(oldType, newType));
          } else if ((0, _definition.isUnionType)(oldType) && (0, _definition.isUnionType)(newType)) {
            schemaChanges.push(...findUnionTypeChanges(oldType, newType));
          } else if ((0, _definition.isInputObjectType)(oldType) && (0, _definition.isInputObjectType)(newType)) {
            schemaChanges.push(...findInputObjectTypeChanges(oldType, newType));
          } else if ((0, _definition.isObjectType)(oldType) && (0, _definition.isObjectType)(newType)) {
            schemaChanges.push(
              ...findFieldChanges(oldType, newType),
              ...findImplementedInterfacesChanges(oldType, newType)
            );
          } else if ((0, _definition.isInterfaceType)(oldType) && (0, _definition.isInterfaceType)(newType)) {
            schemaChanges.push(
              ...findFieldChanges(oldType, newType),
              ...findImplementedInterfacesChanges(oldType, newType)
            );
          } else if (oldType.constructor !== newType.constructor) {
            schemaChanges.push({
              type: BreakingChangeType.TYPE_CHANGED_KIND,
              description: `${oldType.name} changed from ${typeKindName(oldType)} to ${typeKindName(newType)}.`
            });
          }
        }
        return schemaChanges;
      }
      function findInputObjectTypeChanges(oldType, newType) {
        const schemaChanges = [];
        const fieldsDiff = diff(
          Object.values(oldType.getFields()),
          Object.values(newType.getFields())
        );
        for (const newField of fieldsDiff.added) {
          if ((0, _definition.isRequiredInputField)(newField)) {
            schemaChanges.push({
              type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
              description: `A required field ${newField.name} on input type ${oldType.name} was added.`
            });
          } else {
            schemaChanges.push({
              type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
              description: `An optional field ${newField.name} on input type ${oldType.name} was added.`
            });
          }
        }
        for (const oldField of fieldsDiff.removed) {
          schemaChanges.push({
            type: BreakingChangeType.FIELD_REMOVED,
            description: `${oldType.name}.${oldField.name} was removed.`
          });
        }
        for (const [oldField, newField] of fieldsDiff.persisted) {
          const isSafe = isChangeSafeForInputObjectFieldOrFieldArg(
            oldField.type,
            newField.type
          );
          if (!isSafe) {
            schemaChanges.push({
              type: BreakingChangeType.FIELD_CHANGED_KIND,
              description: `${oldType.name}.${oldField.name} changed type from ${String(oldField.type)} to ${String(newField.type)}.`
            });
          }
        }
        return schemaChanges;
      }
      function findUnionTypeChanges(oldType, newType) {
        const schemaChanges = [];
        const possibleTypesDiff = diff(oldType.getTypes(), newType.getTypes());
        for (const newPossibleType of possibleTypesDiff.added) {
          schemaChanges.push({
            type: DangerousChangeType.TYPE_ADDED_TO_UNION,
            description: `${newPossibleType.name} was added to union type ${oldType.name}.`
          });
        }
        for (const oldPossibleType of possibleTypesDiff.removed) {
          schemaChanges.push({
            type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
            description: `${oldPossibleType.name} was removed from union type ${oldType.name}.`
          });
        }
        return schemaChanges;
      }
      function findEnumTypeChanges(oldType, newType) {
        const schemaChanges = [];
        const valuesDiff = diff(oldType.getValues(), newType.getValues());
        for (const newValue of valuesDiff.added) {
          schemaChanges.push({
            type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
            description: `${newValue.name} was added to enum type ${oldType.name}.`
          });
        }
        for (const oldValue of valuesDiff.removed) {
          schemaChanges.push({
            type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
            description: `${oldValue.name} was removed from enum type ${oldType.name}.`
          });
        }
        return schemaChanges;
      }
      function findImplementedInterfacesChanges(oldType, newType) {
        const schemaChanges = [];
        const interfacesDiff = diff(oldType.getInterfaces(), newType.getInterfaces());
        for (const newInterface of interfacesDiff.added) {
          schemaChanges.push({
            type: DangerousChangeType.IMPLEMENTED_INTERFACE_ADDED,
            description: `${newInterface.name} added to interfaces implemented by ${oldType.name}.`
          });
        }
        for (const oldInterface of interfacesDiff.removed) {
          schemaChanges.push({
            type: BreakingChangeType.IMPLEMENTED_INTERFACE_REMOVED,
            description: `${oldType.name} no longer implements interface ${oldInterface.name}.`
          });
        }
        return schemaChanges;
      }
      function findFieldChanges(oldType, newType) {
        const schemaChanges = [];
        const fieldsDiff = diff(
          Object.values(oldType.getFields()),
          Object.values(newType.getFields())
        );
        for (const oldField of fieldsDiff.removed) {
          schemaChanges.push({
            type: BreakingChangeType.FIELD_REMOVED,
            description: `${oldType.name}.${oldField.name} was removed.`
          });
        }
        for (const [oldField, newField] of fieldsDiff.persisted) {
          schemaChanges.push(...findArgChanges(oldType, oldField, newField));
          const isSafe = isChangeSafeForObjectOrInterfaceField(
            oldField.type,
            newField.type
          );
          if (!isSafe) {
            schemaChanges.push({
              type: BreakingChangeType.FIELD_CHANGED_KIND,
              description: `${oldType.name}.${oldField.name} changed type from ${String(oldField.type)} to ${String(newField.type)}.`
            });
          }
        }
        return schemaChanges;
      }
      function findArgChanges(oldType, oldField, newField) {
        const schemaChanges = [];
        const argsDiff = diff(oldField.args, newField.args);
        for (const oldArg of argsDiff.removed) {
          schemaChanges.push({
            type: BreakingChangeType.ARG_REMOVED,
            description: `${oldType.name}.${oldField.name} arg ${oldArg.name} was removed.`
          });
        }
        for (const [oldArg, newArg] of argsDiff.persisted) {
          const isSafe = isChangeSafeForInputObjectFieldOrFieldArg(
            oldArg.type,
            newArg.type
          );
          if (!isSafe) {
            schemaChanges.push({
              type: BreakingChangeType.ARG_CHANGED_KIND,
              description: `${oldType.name}.${oldField.name} arg ${oldArg.name} has changed type from ${String(oldArg.type)} to ${String(newArg.type)}.`
            });
          } else if (oldArg.defaultValue !== void 0) {
            if (newArg.defaultValue === void 0) {
              schemaChanges.push({
                type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
                description: `${oldType.name}.${oldField.name} arg ${oldArg.name} defaultValue was removed.`
              });
            } else {
              const oldValueStr = stringifyValue(oldArg.defaultValue, oldArg.type);
              const newValueStr = stringifyValue(newArg.defaultValue, newArg.type);
              if (oldValueStr !== newValueStr) {
                schemaChanges.push({
                  type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
                  description: `${oldType.name}.${oldField.name} arg ${oldArg.name} has changed defaultValue from ${oldValueStr} to ${newValueStr}.`
                });
              }
            }
          }
        }
        for (const newArg of argsDiff.added) {
          if ((0, _definition.isRequiredArgument)(newArg)) {
            schemaChanges.push({
              type: BreakingChangeType.REQUIRED_ARG_ADDED,
              description: `A required arg ${newArg.name} on ${oldType.name}.${oldField.name} was added.`
            });
          } else {
            schemaChanges.push({
              type: DangerousChangeType.OPTIONAL_ARG_ADDED,
              description: `An optional arg ${newArg.name} on ${oldType.name}.${oldField.name} was added.`
            });
          }
        }
        return schemaChanges;
      }
      function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
        if ((0, _definition.isListType)(oldType)) {
          return (0, _definition.isListType)(newType) && isChangeSafeForObjectOrInterfaceField(
            oldType.ofType,
            newType.ofType
          ) || (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType);
        }
        if ((0, _definition.isNonNullType)(oldType)) {
          return (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
        }
        return (0, _definition.isNamedType)(newType) && oldType.name === newType.name || (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType);
      }
      function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
        if ((0, _definition.isListType)(oldType)) {
          return (0, _definition.isListType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
        }
        if ((0, _definition.isNonNullType)(oldType)) {
          return (0, _definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(
            oldType.ofType,
            newType.ofType
          ) || !(0, _definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType);
        }
        return (0, _definition.isNamedType)(newType) && oldType.name === newType.name;
      }
      function typeKindName(type) {
        if ((0, _definition.isScalarType)(type)) {
          return "a Scalar type";
        }
        if ((0, _definition.isObjectType)(type)) {
          return "an Object type";
        }
        if ((0, _definition.isInterfaceType)(type)) {
          return "an Interface type";
        }
        if ((0, _definition.isUnionType)(type)) {
          return "a Union type";
        }
        if ((0, _definition.isEnumType)(type)) {
          return "an Enum type";
        }
        if ((0, _definition.isInputObjectType)(type)) {
          return "an Input type";
        }
        (0, _invariant.invariant)(
          false,
          "Unexpected type: " + (0, _inspect.inspect)(type)
        );
      }
      function stringifyValue(value, type) {
        const ast = (0, _astFromValue.astFromValue)(value, type);
        ast != null || (0, _invariant.invariant)(false);
        return (0, _printer.print)((0, _sortValueNode.sortValueNode)(ast));
      }
      function diff(oldArray, newArray) {
        const added = [];
        const removed = [];
        const persisted = [];
        const oldMap = (0, _keyMap.keyMap)(oldArray, ({ name }) => name);
        const newMap = (0, _keyMap.keyMap)(newArray, ({ name }) => name);
        for (const oldItem of oldArray) {
          const newItem = newMap[oldItem.name];
          if (newItem === void 0) {
            removed.push(oldItem);
          } else {
            persisted.push([oldItem, newItem]);
          }
        }
        for (const newItem of newArray) {
          if (oldMap[newItem.name] === void 0) {
            added.push(newItem);
          }
        }
        return {
          added,
          persisted,
          removed
        };
      }
    }
  });

  // ../../node_modules/graphql/utilities/index.js
  var require_utilities = __commonJS({
    "../../node_modules/graphql/utilities/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "BreakingChangeType", {
        enumerable: true,
        get: function() {
          return _findBreakingChanges.BreakingChangeType;
        }
      });
      Object.defineProperty(exports, "DangerousChangeType", {
        enumerable: true,
        get: function() {
          return _findBreakingChanges.DangerousChangeType;
        }
      });
      Object.defineProperty(exports, "TypeInfo", {
        enumerable: true,
        get: function() {
          return _TypeInfo.TypeInfo;
        }
      });
      Object.defineProperty(exports, "assertValidName", {
        enumerable: true,
        get: function() {
          return _assertValidName.assertValidName;
        }
      });
      Object.defineProperty(exports, "astFromValue", {
        enumerable: true,
        get: function() {
          return _astFromValue.astFromValue;
        }
      });
      Object.defineProperty(exports, "buildASTSchema", {
        enumerable: true,
        get: function() {
          return _buildASTSchema.buildASTSchema;
        }
      });
      Object.defineProperty(exports, "buildClientSchema", {
        enumerable: true,
        get: function() {
          return _buildClientSchema.buildClientSchema;
        }
      });
      Object.defineProperty(exports, "buildSchema", {
        enumerable: true,
        get: function() {
          return _buildASTSchema.buildSchema;
        }
      });
      Object.defineProperty(exports, "coerceInputValue", {
        enumerable: true,
        get: function() {
          return _coerceInputValue.coerceInputValue;
        }
      });
      Object.defineProperty(exports, "concatAST", {
        enumerable: true,
        get: function() {
          return _concatAST.concatAST;
        }
      });
      Object.defineProperty(exports, "doTypesOverlap", {
        enumerable: true,
        get: function() {
          return _typeComparators.doTypesOverlap;
        }
      });
      Object.defineProperty(exports, "extendSchema", {
        enumerable: true,
        get: function() {
          return _extendSchema.extendSchema;
        }
      });
      Object.defineProperty(exports, "findBreakingChanges", {
        enumerable: true,
        get: function() {
          return _findBreakingChanges.findBreakingChanges;
        }
      });
      Object.defineProperty(exports, "findDangerousChanges", {
        enumerable: true,
        get: function() {
          return _findBreakingChanges.findDangerousChanges;
        }
      });
      Object.defineProperty(exports, "getIntrospectionQuery", {
        enumerable: true,
        get: function() {
          return _getIntrospectionQuery.getIntrospectionQuery;
        }
      });
      Object.defineProperty(exports, "getOperationAST", {
        enumerable: true,
        get: function() {
          return _getOperationAST.getOperationAST;
        }
      });
      Object.defineProperty(exports, "getOperationRootType", {
        enumerable: true,
        get: function() {
          return _getOperationRootType.getOperationRootType;
        }
      });
      Object.defineProperty(exports, "introspectionFromSchema", {
        enumerable: true,
        get: function() {
          return _introspectionFromSchema.introspectionFromSchema;
        }
      });
      Object.defineProperty(exports, "isEqualType", {
        enumerable: true,
        get: function() {
          return _typeComparators.isEqualType;
        }
      });
      Object.defineProperty(exports, "isTypeSubTypeOf", {
        enumerable: true,
        get: function() {
          return _typeComparators.isTypeSubTypeOf;
        }
      });
      Object.defineProperty(exports, "isValidNameError", {
        enumerable: true,
        get: function() {
          return _assertValidName.isValidNameError;
        }
      });
      Object.defineProperty(exports, "lexicographicSortSchema", {
        enumerable: true,
        get: function() {
          return _lexicographicSortSchema.lexicographicSortSchema;
        }
      });
      Object.defineProperty(exports, "printIntrospectionSchema", {
        enumerable: true,
        get: function() {
          return _printSchema.printIntrospectionSchema;
        }
      });
      Object.defineProperty(exports, "printSchema", {
        enumerable: true,
        get: function() {
          return _printSchema.printSchema;
        }
      });
      Object.defineProperty(exports, "printType", {
        enumerable: true,
        get: function() {
          return _printSchema.printType;
        }
      });
      Object.defineProperty(exports, "separateOperations", {
        enumerable: true,
        get: function() {
          return _separateOperations.separateOperations;
        }
      });
      Object.defineProperty(exports, "stripIgnoredCharacters", {
        enumerable: true,
        get: function() {
          return _stripIgnoredCharacters.stripIgnoredCharacters;
        }
      });
      Object.defineProperty(exports, "typeFromAST", {
        enumerable: true,
        get: function() {
          return _typeFromAST.typeFromAST;
        }
      });
      Object.defineProperty(exports, "valueFromAST", {
        enumerable: true,
        get: function() {
          return _valueFromAST.valueFromAST;
        }
      });
      Object.defineProperty(exports, "valueFromASTUntyped", {
        enumerable: true,
        get: function() {
          return _valueFromASTUntyped.valueFromASTUntyped;
        }
      });
      Object.defineProperty(exports, "visitWithTypeInfo", {
        enumerable: true,
        get: function() {
          return _TypeInfo.visitWithTypeInfo;
        }
      });
      var _getIntrospectionQuery = require_getIntrospectionQuery();
      var _getOperationAST = require_getOperationAST();
      var _getOperationRootType = require_getOperationRootType();
      var _introspectionFromSchema = require_introspectionFromSchema();
      var _buildClientSchema = require_buildClientSchema();
      var _buildASTSchema = require_buildASTSchema();
      var _extendSchema = require_extendSchema();
      var _lexicographicSortSchema = require_lexicographicSortSchema();
      var _printSchema = require_printSchema();
      var _typeFromAST = require_typeFromAST();
      var _valueFromAST = require_valueFromAST();
      var _valueFromASTUntyped = require_valueFromASTUntyped();
      var _astFromValue = require_astFromValue();
      var _TypeInfo = require_TypeInfo();
      var _coerceInputValue = require_coerceInputValue();
      var _concatAST = require_concatAST();
      var _separateOperations = require_separateOperations();
      var _stripIgnoredCharacters = require_stripIgnoredCharacters();
      var _typeComparators = require_typeComparators();
      var _assertValidName = require_assertValidName();
      var _findBreakingChanges = require_findBreakingChanges();
    }
  });

  // ../../node_modules/graphql/index.js
  var require_graphql2 = __commonJS({
    "../../node_modules/graphql/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "BREAK", {
        enumerable: true,
        get: function() {
          return _index2.BREAK;
        }
      });
      Object.defineProperty(exports, "BreakingChangeType", {
        enumerable: true,
        get: function() {
          return _index6.BreakingChangeType;
        }
      });
      Object.defineProperty(exports, "DEFAULT_DEPRECATION_REASON", {
        enumerable: true,
        get: function() {
          return _index.DEFAULT_DEPRECATION_REASON;
        }
      });
      Object.defineProperty(exports, "DangerousChangeType", {
        enumerable: true,
        get: function() {
          return _index6.DangerousChangeType;
        }
      });
      Object.defineProperty(exports, "DirectiveLocation", {
        enumerable: true,
        get: function() {
          return _index2.DirectiveLocation;
        }
      });
      Object.defineProperty(exports, "ExecutableDefinitionsRule", {
        enumerable: true,
        get: function() {
          return _index4.ExecutableDefinitionsRule;
        }
      });
      Object.defineProperty(exports, "FieldsOnCorrectTypeRule", {
        enumerable: true,
        get: function() {
          return _index4.FieldsOnCorrectTypeRule;
        }
      });
      Object.defineProperty(exports, "FragmentsOnCompositeTypesRule", {
        enumerable: true,
        get: function() {
          return _index4.FragmentsOnCompositeTypesRule;
        }
      });
      Object.defineProperty(exports, "GRAPHQL_MAX_INT", {
        enumerable: true,
        get: function() {
          return _index.GRAPHQL_MAX_INT;
        }
      });
      Object.defineProperty(exports, "GRAPHQL_MIN_INT", {
        enumerable: true,
        get: function() {
          return _index.GRAPHQL_MIN_INT;
        }
      });
      Object.defineProperty(exports, "GraphQLBoolean", {
        enumerable: true,
        get: function() {
          return _index.GraphQLBoolean;
        }
      });
      Object.defineProperty(exports, "GraphQLDeprecatedDirective", {
        enumerable: true,
        get: function() {
          return _index.GraphQLDeprecatedDirective;
        }
      });
      Object.defineProperty(exports, "GraphQLDirective", {
        enumerable: true,
        get: function() {
          return _index.GraphQLDirective;
        }
      });
      Object.defineProperty(exports, "GraphQLEnumType", {
        enumerable: true,
        get: function() {
          return _index.GraphQLEnumType;
        }
      });
      Object.defineProperty(exports, "GraphQLError", {
        enumerable: true,
        get: function() {
          return _index5.GraphQLError;
        }
      });
      Object.defineProperty(exports, "GraphQLFloat", {
        enumerable: true,
        get: function() {
          return _index.GraphQLFloat;
        }
      });
      Object.defineProperty(exports, "GraphQLID", {
        enumerable: true,
        get: function() {
          return _index.GraphQLID;
        }
      });
      Object.defineProperty(exports, "GraphQLIncludeDirective", {
        enumerable: true,
        get: function() {
          return _index.GraphQLIncludeDirective;
        }
      });
      Object.defineProperty(exports, "GraphQLInputObjectType", {
        enumerable: true,
        get: function() {
          return _index.GraphQLInputObjectType;
        }
      });
      Object.defineProperty(exports, "GraphQLInt", {
        enumerable: true,
        get: function() {
          return _index.GraphQLInt;
        }
      });
      Object.defineProperty(exports, "GraphQLInterfaceType", {
        enumerable: true,
        get: function() {
          return _index.GraphQLInterfaceType;
        }
      });
      Object.defineProperty(exports, "GraphQLList", {
        enumerable: true,
        get: function() {
          return _index.GraphQLList;
        }
      });
      Object.defineProperty(exports, "GraphQLNonNull", {
        enumerable: true,
        get: function() {
          return _index.GraphQLNonNull;
        }
      });
      Object.defineProperty(exports, "GraphQLObjectType", {
        enumerable: true,
        get: function() {
          return _index.GraphQLObjectType;
        }
      });
      Object.defineProperty(exports, "GraphQLScalarType", {
        enumerable: true,
        get: function() {
          return _index.GraphQLScalarType;
        }
      });
      Object.defineProperty(exports, "GraphQLSchema", {
        enumerable: true,
        get: function() {
          return _index.GraphQLSchema;
        }
      });
      Object.defineProperty(exports, "GraphQLSkipDirective", {
        enumerable: true,
        get: function() {
          return _index.GraphQLSkipDirective;
        }
      });
      Object.defineProperty(exports, "GraphQLSpecifiedByDirective", {
        enumerable: true,
        get: function() {
          return _index.GraphQLSpecifiedByDirective;
        }
      });
      Object.defineProperty(exports, "GraphQLString", {
        enumerable: true,
        get: function() {
          return _index.GraphQLString;
        }
      });
      Object.defineProperty(exports, "GraphQLUnionType", {
        enumerable: true,
        get: function() {
          return _index.GraphQLUnionType;
        }
      });
      Object.defineProperty(exports, "Kind", {
        enumerable: true,
        get: function() {
          return _index2.Kind;
        }
      });
      Object.defineProperty(exports, "KnownArgumentNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.KnownArgumentNamesRule;
        }
      });
      Object.defineProperty(exports, "KnownDirectivesRule", {
        enumerable: true,
        get: function() {
          return _index4.KnownDirectivesRule;
        }
      });
      Object.defineProperty(exports, "KnownFragmentNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.KnownFragmentNamesRule;
        }
      });
      Object.defineProperty(exports, "KnownTypeNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.KnownTypeNamesRule;
        }
      });
      Object.defineProperty(exports, "Lexer", {
        enumerable: true,
        get: function() {
          return _index2.Lexer;
        }
      });
      Object.defineProperty(exports, "Location", {
        enumerable: true,
        get: function() {
          return _index2.Location;
        }
      });
      Object.defineProperty(exports, "LoneAnonymousOperationRule", {
        enumerable: true,
        get: function() {
          return _index4.LoneAnonymousOperationRule;
        }
      });
      Object.defineProperty(exports, "LoneSchemaDefinitionRule", {
        enumerable: true,
        get: function() {
          return _index4.LoneSchemaDefinitionRule;
        }
      });
      Object.defineProperty(exports, "NoDeprecatedCustomRule", {
        enumerable: true,
        get: function() {
          return _index4.NoDeprecatedCustomRule;
        }
      });
      Object.defineProperty(exports, "NoFragmentCyclesRule", {
        enumerable: true,
        get: function() {
          return _index4.NoFragmentCyclesRule;
        }
      });
      Object.defineProperty(exports, "NoSchemaIntrospectionCustomRule", {
        enumerable: true,
        get: function() {
          return _index4.NoSchemaIntrospectionCustomRule;
        }
      });
      Object.defineProperty(exports, "NoUndefinedVariablesRule", {
        enumerable: true,
        get: function() {
          return _index4.NoUndefinedVariablesRule;
        }
      });
      Object.defineProperty(exports, "NoUnusedFragmentsRule", {
        enumerable: true,
        get: function() {
          return _index4.NoUnusedFragmentsRule;
        }
      });
      Object.defineProperty(exports, "NoUnusedVariablesRule", {
        enumerable: true,
        get: function() {
          return _index4.NoUnusedVariablesRule;
        }
      });
      Object.defineProperty(exports, "OperationTypeNode", {
        enumerable: true,
        get: function() {
          return _index2.OperationTypeNode;
        }
      });
      Object.defineProperty(exports, "OverlappingFieldsCanBeMergedRule", {
        enumerable: true,
        get: function() {
          return _index4.OverlappingFieldsCanBeMergedRule;
        }
      });
      Object.defineProperty(exports, "PossibleFragmentSpreadsRule", {
        enumerable: true,
        get: function() {
          return _index4.PossibleFragmentSpreadsRule;
        }
      });
      Object.defineProperty(exports, "PossibleTypeExtensionsRule", {
        enumerable: true,
        get: function() {
          return _index4.PossibleTypeExtensionsRule;
        }
      });
      Object.defineProperty(exports, "ProvidedRequiredArgumentsRule", {
        enumerable: true,
        get: function() {
          return _index4.ProvidedRequiredArgumentsRule;
        }
      });
      Object.defineProperty(exports, "ScalarLeafsRule", {
        enumerable: true,
        get: function() {
          return _index4.ScalarLeafsRule;
        }
      });
      Object.defineProperty(exports, "SchemaMetaFieldDef", {
        enumerable: true,
        get: function() {
          return _index.SchemaMetaFieldDef;
        }
      });
      Object.defineProperty(exports, "SingleFieldSubscriptionsRule", {
        enumerable: true,
        get: function() {
          return _index4.SingleFieldSubscriptionsRule;
        }
      });
      Object.defineProperty(exports, "Source", {
        enumerable: true,
        get: function() {
          return _index2.Source;
        }
      });
      Object.defineProperty(exports, "Token", {
        enumerable: true,
        get: function() {
          return _index2.Token;
        }
      });
      Object.defineProperty(exports, "TokenKind", {
        enumerable: true,
        get: function() {
          return _index2.TokenKind;
        }
      });
      Object.defineProperty(exports, "TypeInfo", {
        enumerable: true,
        get: function() {
          return _index6.TypeInfo;
        }
      });
      Object.defineProperty(exports, "TypeKind", {
        enumerable: true,
        get: function() {
          return _index.TypeKind;
        }
      });
      Object.defineProperty(exports, "TypeMetaFieldDef", {
        enumerable: true,
        get: function() {
          return _index.TypeMetaFieldDef;
        }
      });
      Object.defineProperty(exports, "TypeNameMetaFieldDef", {
        enumerable: true,
        get: function() {
          return _index.TypeNameMetaFieldDef;
        }
      });
      Object.defineProperty(exports, "UniqueArgumentDefinitionNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.UniqueArgumentDefinitionNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueArgumentNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.UniqueArgumentNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueDirectiveNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.UniqueDirectiveNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueDirectivesPerLocationRule", {
        enumerable: true,
        get: function() {
          return _index4.UniqueDirectivesPerLocationRule;
        }
      });
      Object.defineProperty(exports, "UniqueEnumValueNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.UniqueEnumValueNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueFieldDefinitionNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.UniqueFieldDefinitionNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueFragmentNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.UniqueFragmentNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueInputFieldNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.UniqueInputFieldNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueOperationNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.UniqueOperationNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueOperationTypesRule", {
        enumerable: true,
        get: function() {
          return _index4.UniqueOperationTypesRule;
        }
      });
      Object.defineProperty(exports, "UniqueTypeNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.UniqueTypeNamesRule;
        }
      });
      Object.defineProperty(exports, "UniqueVariableNamesRule", {
        enumerable: true,
        get: function() {
          return _index4.UniqueVariableNamesRule;
        }
      });
      Object.defineProperty(exports, "ValidationContext", {
        enumerable: true,
        get: function() {
          return _index4.ValidationContext;
        }
      });
      Object.defineProperty(exports, "ValuesOfCorrectTypeRule", {
        enumerable: true,
        get: function() {
          return _index4.ValuesOfCorrectTypeRule;
        }
      });
      Object.defineProperty(exports, "VariablesAreInputTypesRule", {
        enumerable: true,
        get: function() {
          return _index4.VariablesAreInputTypesRule;
        }
      });
      Object.defineProperty(exports, "VariablesInAllowedPositionRule", {
        enumerable: true,
        get: function() {
          return _index4.VariablesInAllowedPositionRule;
        }
      });
      Object.defineProperty(exports, "__Directive", {
        enumerable: true,
        get: function() {
          return _index.__Directive;
        }
      });
      Object.defineProperty(exports, "__DirectiveLocation", {
        enumerable: true,
        get: function() {
          return _index.__DirectiveLocation;
        }
      });
      Object.defineProperty(exports, "__EnumValue", {
        enumerable: true,
        get: function() {
          return _index.__EnumValue;
        }
      });
      Object.defineProperty(exports, "__Field", {
        enumerable: true,
        get: function() {
          return _index.__Field;
        }
      });
      Object.defineProperty(exports, "__InputValue", {
        enumerable: true,
        get: function() {
          return _index.__InputValue;
        }
      });
      Object.defineProperty(exports, "__Schema", {
        enumerable: true,
        get: function() {
          return _index.__Schema;
        }
      });
      Object.defineProperty(exports, "__Type", {
        enumerable: true,
        get: function() {
          return _index.__Type;
        }
      });
      Object.defineProperty(exports, "__TypeKind", {
        enumerable: true,
        get: function() {
          return _index.__TypeKind;
        }
      });
      Object.defineProperty(exports, "assertAbstractType", {
        enumerable: true,
        get: function() {
          return _index.assertAbstractType;
        }
      });
      Object.defineProperty(exports, "assertCompositeType", {
        enumerable: true,
        get: function() {
          return _index.assertCompositeType;
        }
      });
      Object.defineProperty(exports, "assertDirective", {
        enumerable: true,
        get: function() {
          return _index.assertDirective;
        }
      });
      Object.defineProperty(exports, "assertEnumType", {
        enumerable: true,
        get: function() {
          return _index.assertEnumType;
        }
      });
      Object.defineProperty(exports, "assertEnumValueName", {
        enumerable: true,
        get: function() {
          return _index.assertEnumValueName;
        }
      });
      Object.defineProperty(exports, "assertInputObjectType", {
        enumerable: true,
        get: function() {
          return _index.assertInputObjectType;
        }
      });
      Object.defineProperty(exports, "assertInputType", {
        enumerable: true,
        get: function() {
          return _index.assertInputType;
        }
      });
      Object.defineProperty(exports, "assertInterfaceType", {
        enumerable: true,
        get: function() {
          return _index.assertInterfaceType;
        }
      });
      Object.defineProperty(exports, "assertLeafType", {
        enumerable: true,
        get: function() {
          return _index.assertLeafType;
        }
      });
      Object.defineProperty(exports, "assertListType", {
        enumerable: true,
        get: function() {
          return _index.assertListType;
        }
      });
      Object.defineProperty(exports, "assertName", {
        enumerable: true,
        get: function() {
          return _index.assertName;
        }
      });
      Object.defineProperty(exports, "assertNamedType", {
        enumerable: true,
        get: function() {
          return _index.assertNamedType;
        }
      });
      Object.defineProperty(exports, "assertNonNullType", {
        enumerable: true,
        get: function() {
          return _index.assertNonNullType;
        }
      });
      Object.defineProperty(exports, "assertNullableType", {
        enumerable: true,
        get: function() {
          return _index.assertNullableType;
        }
      });
      Object.defineProperty(exports, "assertObjectType", {
        enumerable: true,
        get: function() {
          return _index.assertObjectType;
        }
      });
      Object.defineProperty(exports, "assertOutputType", {
        enumerable: true,
        get: function() {
          return _index.assertOutputType;
        }
      });
      Object.defineProperty(exports, "assertScalarType", {
        enumerable: true,
        get: function() {
          return _index.assertScalarType;
        }
      });
      Object.defineProperty(exports, "assertSchema", {
        enumerable: true,
        get: function() {
          return _index.assertSchema;
        }
      });
      Object.defineProperty(exports, "assertType", {
        enumerable: true,
        get: function() {
          return _index.assertType;
        }
      });
      Object.defineProperty(exports, "assertUnionType", {
        enumerable: true,
        get: function() {
          return _index.assertUnionType;
        }
      });
      Object.defineProperty(exports, "assertValidName", {
        enumerable: true,
        get: function() {
          return _index6.assertValidName;
        }
      });
      Object.defineProperty(exports, "assertValidSchema", {
        enumerable: true,
        get: function() {
          return _index.assertValidSchema;
        }
      });
      Object.defineProperty(exports, "assertWrappingType", {
        enumerable: true,
        get: function() {
          return _index.assertWrappingType;
        }
      });
      Object.defineProperty(exports, "astFromValue", {
        enumerable: true,
        get: function() {
          return _index6.astFromValue;
        }
      });
      Object.defineProperty(exports, "buildASTSchema", {
        enumerable: true,
        get: function() {
          return _index6.buildASTSchema;
        }
      });
      Object.defineProperty(exports, "buildClientSchema", {
        enumerable: true,
        get: function() {
          return _index6.buildClientSchema;
        }
      });
      Object.defineProperty(exports, "buildSchema", {
        enumerable: true,
        get: function() {
          return _index6.buildSchema;
        }
      });
      Object.defineProperty(exports, "coerceInputValue", {
        enumerable: true,
        get: function() {
          return _index6.coerceInputValue;
        }
      });
      Object.defineProperty(exports, "concatAST", {
        enumerable: true,
        get: function() {
          return _index6.concatAST;
        }
      });
      Object.defineProperty(exports, "createSourceEventStream", {
        enumerable: true,
        get: function() {
          return _index3.createSourceEventStream;
        }
      });
      Object.defineProperty(exports, "defaultFieldResolver", {
        enumerable: true,
        get: function() {
          return _index3.defaultFieldResolver;
        }
      });
      Object.defineProperty(exports, "defaultTypeResolver", {
        enumerable: true,
        get: function() {
          return _index3.defaultTypeResolver;
        }
      });
      Object.defineProperty(exports, "doTypesOverlap", {
        enumerable: true,
        get: function() {
          return _index6.doTypesOverlap;
        }
      });
      Object.defineProperty(exports, "execute", {
        enumerable: true,
        get: function() {
          return _index3.execute;
        }
      });
      Object.defineProperty(exports, "executeSync", {
        enumerable: true,
        get: function() {
          return _index3.executeSync;
        }
      });
      Object.defineProperty(exports, "extendSchema", {
        enumerable: true,
        get: function() {
          return _index6.extendSchema;
        }
      });
      Object.defineProperty(exports, "findBreakingChanges", {
        enumerable: true,
        get: function() {
          return _index6.findBreakingChanges;
        }
      });
      Object.defineProperty(exports, "findDangerousChanges", {
        enumerable: true,
        get: function() {
          return _index6.findDangerousChanges;
        }
      });
      Object.defineProperty(exports, "formatError", {
        enumerable: true,
        get: function() {
          return _index5.formatError;
        }
      });
      Object.defineProperty(exports, "getArgumentValues", {
        enumerable: true,
        get: function() {
          return _index3.getArgumentValues;
        }
      });
      Object.defineProperty(exports, "getDirectiveValues", {
        enumerable: true,
        get: function() {
          return _index3.getDirectiveValues;
        }
      });
      Object.defineProperty(exports, "getEnterLeaveForKind", {
        enumerable: true,
        get: function() {
          return _index2.getEnterLeaveForKind;
        }
      });
      Object.defineProperty(exports, "getIntrospectionQuery", {
        enumerable: true,
        get: function() {
          return _index6.getIntrospectionQuery;
        }
      });
      Object.defineProperty(exports, "getLocation", {
        enumerable: true,
        get: function() {
          return _index2.getLocation;
        }
      });
      Object.defineProperty(exports, "getNamedType", {
        enumerable: true,
        get: function() {
          return _index.getNamedType;
        }
      });
      Object.defineProperty(exports, "getNullableType", {
        enumerable: true,
        get: function() {
          return _index.getNullableType;
        }
      });
      Object.defineProperty(exports, "getOperationAST", {
        enumerable: true,
        get: function() {
          return _index6.getOperationAST;
        }
      });
      Object.defineProperty(exports, "getOperationRootType", {
        enumerable: true,
        get: function() {
          return _index6.getOperationRootType;
        }
      });
      Object.defineProperty(exports, "getVariableValues", {
        enumerable: true,
        get: function() {
          return _index3.getVariableValues;
        }
      });
      Object.defineProperty(exports, "getVisitFn", {
        enumerable: true,
        get: function() {
          return _index2.getVisitFn;
        }
      });
      Object.defineProperty(exports, "graphql", {
        enumerable: true,
        get: function() {
          return _graphql.graphql;
        }
      });
      Object.defineProperty(exports, "graphqlSync", {
        enumerable: true,
        get: function() {
          return _graphql.graphqlSync;
        }
      });
      Object.defineProperty(exports, "introspectionFromSchema", {
        enumerable: true,
        get: function() {
          return _index6.introspectionFromSchema;
        }
      });
      Object.defineProperty(exports, "introspectionTypes", {
        enumerable: true,
        get: function() {
          return _index.introspectionTypes;
        }
      });
      Object.defineProperty(exports, "isAbstractType", {
        enumerable: true,
        get: function() {
          return _index.isAbstractType;
        }
      });
      Object.defineProperty(exports, "isCompositeType", {
        enumerable: true,
        get: function() {
          return _index.isCompositeType;
        }
      });
      Object.defineProperty(exports, "isConstValueNode", {
        enumerable: true,
        get: function() {
          return _index2.isConstValueNode;
        }
      });
      Object.defineProperty(exports, "isDefinitionNode", {
        enumerable: true,
        get: function() {
          return _index2.isDefinitionNode;
        }
      });
      Object.defineProperty(exports, "isDirective", {
        enumerable: true,
        get: function() {
          return _index.isDirective;
        }
      });
      Object.defineProperty(exports, "isEnumType", {
        enumerable: true,
        get: function() {
          return _index.isEnumType;
        }
      });
      Object.defineProperty(exports, "isEqualType", {
        enumerable: true,
        get: function() {
          return _index6.isEqualType;
        }
      });
      Object.defineProperty(exports, "isExecutableDefinitionNode", {
        enumerable: true,
        get: function() {
          return _index2.isExecutableDefinitionNode;
        }
      });
      Object.defineProperty(exports, "isInputObjectType", {
        enumerable: true,
        get: function() {
          return _index.isInputObjectType;
        }
      });
      Object.defineProperty(exports, "isInputType", {
        enumerable: true,
        get: function() {
          return _index.isInputType;
        }
      });
      Object.defineProperty(exports, "isInterfaceType", {
        enumerable: true,
        get: function() {
          return _index.isInterfaceType;
        }
      });
      Object.defineProperty(exports, "isIntrospectionType", {
        enumerable: true,
        get: function() {
          return _index.isIntrospectionType;
        }
      });
      Object.defineProperty(exports, "isLeafType", {
        enumerable: true,
        get: function() {
          return _index.isLeafType;
        }
      });
      Object.defineProperty(exports, "isListType", {
        enumerable: true,
        get: function() {
          return _index.isListType;
        }
      });
      Object.defineProperty(exports, "isNamedType", {
        enumerable: true,
        get: function() {
          return _index.isNamedType;
        }
      });
      Object.defineProperty(exports, "isNonNullType", {
        enumerable: true,
        get: function() {
          return _index.isNonNullType;
        }
      });
      Object.defineProperty(exports, "isNullableType", {
        enumerable: true,
        get: function() {
          return _index.isNullableType;
        }
      });
      Object.defineProperty(exports, "isObjectType", {
        enumerable: true,
        get: function() {
          return _index.isObjectType;
        }
      });
      Object.defineProperty(exports, "isOutputType", {
        enumerable: true,
        get: function() {
          return _index.isOutputType;
        }
      });
      Object.defineProperty(exports, "isRequiredArgument", {
        enumerable: true,
        get: function() {
          return _index.isRequiredArgument;
        }
      });
      Object.defineProperty(exports, "isRequiredInputField", {
        enumerable: true,
        get: function() {
          return _index.isRequiredInputField;
        }
      });
      Object.defineProperty(exports, "isScalarType", {
        enumerable: true,
        get: function() {
          return _index.isScalarType;
        }
      });
      Object.defineProperty(exports, "isSchema", {
        enumerable: true,
        get: function() {
          return _index.isSchema;
        }
      });
      Object.defineProperty(exports, "isSelectionNode", {
        enumerable: true,
        get: function() {
          return _index2.isSelectionNode;
        }
      });
      Object.defineProperty(exports, "isSpecifiedDirective", {
        enumerable: true,
        get: function() {
          return _index.isSpecifiedDirective;
        }
      });
      Object.defineProperty(exports, "isSpecifiedScalarType", {
        enumerable: true,
        get: function() {
          return _index.isSpecifiedScalarType;
        }
      });
      Object.defineProperty(exports, "isType", {
        enumerable: true,
        get: function() {
          return _index.isType;
        }
      });
      Object.defineProperty(exports, "isTypeDefinitionNode", {
        enumerable: true,
        get: function() {
          return _index2.isTypeDefinitionNode;
        }
      });
      Object.defineProperty(exports, "isTypeExtensionNode", {
        enumerable: true,
        get: function() {
          return _index2.isTypeExtensionNode;
        }
      });
      Object.defineProperty(exports, "isTypeNode", {
        enumerable: true,
        get: function() {
          return _index2.isTypeNode;
        }
      });
      Object.defineProperty(exports, "isTypeSubTypeOf", {
        enumerable: true,
        get: function() {
          return _index6.isTypeSubTypeOf;
        }
      });
      Object.defineProperty(exports, "isTypeSystemDefinitionNode", {
        enumerable: true,
        get: function() {
          return _index2.isTypeSystemDefinitionNode;
        }
      });
      Object.defineProperty(exports, "isTypeSystemExtensionNode", {
        enumerable: true,
        get: function() {
          return _index2.isTypeSystemExtensionNode;
        }
      });
      Object.defineProperty(exports, "isUnionType", {
        enumerable: true,
        get: function() {
          return _index.isUnionType;
        }
      });
      Object.defineProperty(exports, "isValidNameError", {
        enumerable: true,
        get: function() {
          return _index6.isValidNameError;
        }
      });
      Object.defineProperty(exports, "isValueNode", {
        enumerable: true,
        get: function() {
          return _index2.isValueNode;
        }
      });
      Object.defineProperty(exports, "isWrappingType", {
        enumerable: true,
        get: function() {
          return _index.isWrappingType;
        }
      });
      Object.defineProperty(exports, "lexicographicSortSchema", {
        enumerable: true,
        get: function() {
          return _index6.lexicographicSortSchema;
        }
      });
      Object.defineProperty(exports, "locatedError", {
        enumerable: true,
        get: function() {
          return _index5.locatedError;
        }
      });
      Object.defineProperty(exports, "parse", {
        enumerable: true,
        get: function() {
          return _index2.parse;
        }
      });
      Object.defineProperty(exports, "parseConstValue", {
        enumerable: true,
        get: function() {
          return _index2.parseConstValue;
        }
      });
      Object.defineProperty(exports, "parseType", {
        enumerable: true,
        get: function() {
          return _index2.parseType;
        }
      });
      Object.defineProperty(exports, "parseValue", {
        enumerable: true,
        get: function() {
          return _index2.parseValue;
        }
      });
      Object.defineProperty(exports, "print", {
        enumerable: true,
        get: function() {
          return _index2.print;
        }
      });
      Object.defineProperty(exports, "printError", {
        enumerable: true,
        get: function() {
          return _index5.printError;
        }
      });
      Object.defineProperty(exports, "printIntrospectionSchema", {
        enumerable: true,
        get: function() {
          return _index6.printIntrospectionSchema;
        }
      });
      Object.defineProperty(exports, "printLocation", {
        enumerable: true,
        get: function() {
          return _index2.printLocation;
        }
      });
      Object.defineProperty(exports, "printSchema", {
        enumerable: true,
        get: function() {
          return _index6.printSchema;
        }
      });
      Object.defineProperty(exports, "printSourceLocation", {
        enumerable: true,
        get: function() {
          return _index2.printSourceLocation;
        }
      });
      Object.defineProperty(exports, "printType", {
        enumerable: true,
        get: function() {
          return _index6.printType;
        }
      });
      Object.defineProperty(exports, "resolveObjMapThunk", {
        enumerable: true,
        get: function() {
          return _index.resolveObjMapThunk;
        }
      });
      Object.defineProperty(exports, "resolveReadonlyArrayThunk", {
        enumerable: true,
        get: function() {
          return _index.resolveReadonlyArrayThunk;
        }
      });
      Object.defineProperty(exports, "responsePathAsArray", {
        enumerable: true,
        get: function() {
          return _index3.responsePathAsArray;
        }
      });
      Object.defineProperty(exports, "separateOperations", {
        enumerable: true,
        get: function() {
          return _index6.separateOperations;
        }
      });
      Object.defineProperty(exports, "specifiedDirectives", {
        enumerable: true,
        get: function() {
          return _index.specifiedDirectives;
        }
      });
      Object.defineProperty(exports, "specifiedRules", {
        enumerable: true,
        get: function() {
          return _index4.specifiedRules;
        }
      });
      Object.defineProperty(exports, "specifiedScalarTypes", {
        enumerable: true,
        get: function() {
          return _index.specifiedScalarTypes;
        }
      });
      Object.defineProperty(exports, "stripIgnoredCharacters", {
        enumerable: true,
        get: function() {
          return _index6.stripIgnoredCharacters;
        }
      });
      Object.defineProperty(exports, "subscribe", {
        enumerable: true,
        get: function() {
          return _index3.subscribe;
        }
      });
      Object.defineProperty(exports, "syntaxError", {
        enumerable: true,
        get: function() {
          return _index5.syntaxError;
        }
      });
      Object.defineProperty(exports, "typeFromAST", {
        enumerable: true,
        get: function() {
          return _index6.typeFromAST;
        }
      });
      Object.defineProperty(exports, "validate", {
        enumerable: true,
        get: function() {
          return _index4.validate;
        }
      });
      Object.defineProperty(exports, "validateSchema", {
        enumerable: true,
        get: function() {
          return _index.validateSchema;
        }
      });
      Object.defineProperty(exports, "valueFromAST", {
        enumerable: true,
        get: function() {
          return _index6.valueFromAST;
        }
      });
      Object.defineProperty(exports, "valueFromASTUntyped", {
        enumerable: true,
        get: function() {
          return _index6.valueFromASTUntyped;
        }
      });
      Object.defineProperty(exports, "version", {
        enumerable: true,
        get: function() {
          return _version.version;
        }
      });
      Object.defineProperty(exports, "versionInfo", {
        enumerable: true,
        get: function() {
          return _version.versionInfo;
        }
      });
      Object.defineProperty(exports, "visit", {
        enumerable: true,
        get: function() {
          return _index2.visit;
        }
      });
      Object.defineProperty(exports, "visitInParallel", {
        enumerable: true,
        get: function() {
          return _index2.visitInParallel;
        }
      });
      Object.defineProperty(exports, "visitWithTypeInfo", {
        enumerable: true,
        get: function() {
          return _index6.visitWithTypeInfo;
        }
      });
      var _version = require_version();
      var _graphql = require_graphql();
      var _index = require_type();
      var _index2 = require_language();
      var _index3 = require_execution();
      var _index4 = require_validation();
      var _index5 = require_error();
      var _index6 = require_utilities();
    }
  });

  // ../../node_modules/graphql-request/dist/resolveRequestDocument.js
  var require_resolveRequestDocument = __commonJS({
    "../../node_modules/graphql-request/dist/resolveRequestDocument.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.resolveRequestDocument = void 0;
      var graphql_1 = require_graphql2();
      function extractOperationName(document2) {
        var _a;
        var operationName = void 0;
        var operationDefinitions = document2.definitions.filter(function(definition) {
          return definition.kind === "OperationDefinition";
        });
        if (operationDefinitions.length === 1) {
          operationName = (_a = operationDefinitions[0].name) === null || _a === void 0 ? void 0 : _a.value;
        }
        return operationName;
      }
      function resolveRequestDocument(document2) {
        if (typeof document2 === "string") {
          var operationName_1 = void 0;
          try {
            var parsedDocument = (0, graphql_1.parse)(document2);
            operationName_1 = extractOperationName(parsedDocument);
          } catch (err) {
          }
          return { query: document2, operationName: operationName_1 };
        }
        var operationName = extractOperationName(document2);
        return { query: (0, graphql_1.print)(document2), operationName };
      }
      exports.resolveRequestDocument = resolveRequestDocument;
    }
  });

  // ../../node_modules/graphql-request/dist/graphql-ws.js
  var require_graphql_ws = __commonJS({
    "../../node_modules/graphql-request/dist/graphql-ws.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.GraphQLWebSocketClient = void 0;
      var types_1 = require_types();
      var resolveRequestDocument_1 = require_resolveRequestDocument();
      var CONNECTION_INIT = "connection_init";
      var CONNECTION_ACK = "connection_ack";
      var PING = "ping";
      var PONG = "pong";
      var SUBSCRIBE = "subscribe";
      var NEXT = "next";
      var ERROR = "error";
      var COMPLETE = "complete";
      var GraphQLWebSocketMessage = function() {
        function GraphQLWebSocketMessage2(type, payload, id) {
          this._type = type;
          this._payload = payload;
          this._id = id;
        }
        Object.defineProperty(GraphQLWebSocketMessage2.prototype, "type", {
          get: function() {
            return this._type;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(GraphQLWebSocketMessage2.prototype, "id", {
          get: function() {
            return this._id;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(GraphQLWebSocketMessage2.prototype, "payload", {
          get: function() {
            return this._payload;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(GraphQLWebSocketMessage2.prototype, "text", {
          get: function() {
            var result = { type: this.type };
            if (this.id != null && this.id != void 0)
              result.id = this.id;
            if (this.payload != null && this.payload != void 0)
              result.payload = this.payload;
            return JSON.stringify(result);
          },
          enumerable: false,
          configurable: true
        });
        GraphQLWebSocketMessage2.parse = function(data, f) {
          var _a = JSON.parse(data), type = _a.type, payload = _a.payload, id = _a.id;
          return new GraphQLWebSocketMessage2(type, f(payload), id);
        };
        return GraphQLWebSocketMessage2;
      }();
      var GraphQLWebSocketClient = function() {
        function GraphQLWebSocketClient2(socket, _a) {
          var onInit = _a.onInit, onAcknowledged = _a.onAcknowledged, onPing = _a.onPing, onPong = _a.onPong;
          var _this = this;
          this.socketState = { acknowledged: false, lastRequestId: 0, subscriptions: {} };
          this.socket = socket;
          socket.onopen = function(e) {
            return __awaiter(_this, void 0, void 0, function() {
              var _a2, _b, _c, _d;
              return __generator(this, function(_e) {
                switch (_e.label) {
                  case 0:
                    this.socketState.acknowledged = false;
                    this.socketState.subscriptions = {};
                    _b = (_a2 = socket).send;
                    _c = ConnectionInit;
                    if (!onInit)
                      return [3, 2];
                    return [4, onInit()];
                  case 1:
                    _d = _e.sent();
                    return [3, 3];
                  case 2:
                    _d = null;
                    _e.label = 3;
                  case 3:
                    _b.apply(_a2, [_c.apply(void 0, [_d]).text]);
                    return [2];
                }
              });
            });
          };
          socket.onclose = function(e) {
            _this.socketState.acknowledged = false;
            _this.socketState.subscriptions = {};
          };
          socket.onerror = function(e) {
            console.error(e);
          };
          socket.onmessage = function(e) {
            try {
              var message = parseMessage(e.data);
              switch (message.type) {
                case CONNECTION_ACK: {
                  if (_this.socketState.acknowledged) {
                    console.warn("Duplicate CONNECTION_ACK message ignored");
                  } else {
                    _this.socketState.acknowledged = true;
                    if (onAcknowledged)
                      onAcknowledged(message.payload);
                  }
                  return;
                }
                case PING: {
                  if (onPing)
                    onPing(message.payload).then(function(r) {
                      return socket.send(Pong(r).text);
                    });
                  else
                    socket.send(Pong(null).text);
                  return;
                }
                case PONG: {
                  if (onPong)
                    onPong(message.payload);
                  return;
                }
              }
              if (!_this.socketState.acknowledged) {
                return;
              }
              if (message.id === void 0 || message.id === null || !_this.socketState.subscriptions[message.id]) {
                return;
              }
              var _a2 = _this.socketState.subscriptions[message.id], query = _a2.query, variables = _a2.variables, subscriber = _a2.subscriber;
              switch (message.type) {
                case NEXT: {
                  if (!message.payload.errors && message.payload.data) {
                    subscriber.next && subscriber.next(message.payload.data);
                  }
                  if (message.payload.errors) {
                    subscriber.error && subscriber.error(new types_1.ClientError(__assign(__assign({}, message.payload), { status: 200 }), { query, variables }));
                  } else {
                  }
                  return;
                }
                case ERROR: {
                  subscriber.error && subscriber.error(new types_1.ClientError({ errors: message.payload, status: 200 }, { query, variables }));
                  return;
                }
                case COMPLETE: {
                  subscriber.complete && subscriber.complete();
                  delete _this.socketState.subscriptions[message.id];
                  return;
                }
              }
            } catch (e2) {
              console.error(e2);
              socket.close(1006);
            }
            socket.close(4400, "Unknown graphql-ws message.");
          };
        }
        GraphQLWebSocketClient2.prototype.makeSubscribe = function(query, operationName, subscriber, variables) {
          var _this = this;
          var subscriptionId = (this.socketState.lastRequestId++).toString();
          this.socketState.subscriptions[subscriptionId] = { query, variables, subscriber };
          this.socket.send(Subscribe(subscriptionId, { query, operationName, variables }).text);
          return function() {
            _this.socket.send(Complete(subscriptionId).text);
            delete _this.socketState.subscriptions[subscriptionId];
          };
        };
        GraphQLWebSocketClient2.prototype.rawRequest = function(query, variables) {
          var _this = this;
          return new Promise(function(resolve, reject) {
            var result;
            _this.rawSubscribe(query, {
              next: function(data, extensions) {
                return result = { data, extensions };
              },
              error: reject,
              complete: function() {
                return resolve(result);
              }
            }, variables);
          });
        };
        GraphQLWebSocketClient2.prototype.request = function(document2, variables) {
          var _this = this;
          return new Promise(function(resolve, reject) {
            var result;
            _this.subscribe(document2, {
              next: function(data) {
                return result = data;
              },
              error: reject,
              complete: function() {
                return resolve(result);
              }
            }, variables);
          });
        };
        GraphQLWebSocketClient2.prototype.subscribe = function(document2, subscriber, variables) {
          var _a = (0, resolveRequestDocument_1.resolveRequestDocument)(document2), query = _a.query, operationName = _a.operationName;
          return this.makeSubscribe(query, operationName, subscriber, variables);
        };
        GraphQLWebSocketClient2.prototype.rawSubscribe = function(query, subscriber, variables) {
          return this.makeSubscribe(query, void 0, subscriber, variables);
        };
        GraphQLWebSocketClient2.prototype.ping = function(payload) {
          this.socket.send(Ping(payload).text);
        };
        GraphQLWebSocketClient2.prototype.close = function() {
          this.socket.close(1e3);
        };
        GraphQLWebSocketClient2.PROTOCOL = "graphql-transport-ws";
        return GraphQLWebSocketClient2;
      }();
      exports.GraphQLWebSocketClient = GraphQLWebSocketClient;
      function parseMessage(data, f) {
        if (f === void 0) {
          f = function(a) {
            return a;
          };
        }
        var m = GraphQLWebSocketMessage.parse(data, f);
        return m;
      }
      function ConnectionInit(payload) {
        return new GraphQLWebSocketMessage(CONNECTION_INIT, payload);
      }
      function Ping(payload) {
        return new GraphQLWebSocketMessage(PING, payload, void 0);
      }
      function Pong(payload) {
        return new GraphQLWebSocketMessage(PONG, payload, void 0);
      }
      function Subscribe(id, payload) {
        return new GraphQLWebSocketMessage(SUBSCRIBE, payload, id);
      }
      function Complete(id) {
        return new GraphQLWebSocketMessage(COMPLETE, void 0, id);
      }
    }
  });

  // ../../node_modules/graphql-request/dist/index.js
  var require_dist = __commonJS({
    "../../node_modules/graphql-request/dist/index.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __rest = exports && exports.__rest || function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.resolveRequestDocument = exports.GraphQLWebSocketClient = exports.gql = exports.batchRequests = exports.request = exports.rawRequest = exports.GraphQLClient = exports.ClientError = void 0;
      var cross_fetch_1 = __importStar(require_browser_ponyfill());
      var CrossFetch = cross_fetch_1;
      var createRequestBody_1 = __importDefault(require_createRequestBody());
      var defaultJsonSerializer_1 = require_defaultJsonSerializer();
      var parseArgs_1 = require_parseArgs();
      var types_1 = require_types();
      Object.defineProperty(exports, "ClientError", { enumerable: true, get: function() {
        return types_1.ClientError;
      } });
      var resolveRequestDocument_1 = require_resolveRequestDocument();
      var resolveHeaders = function(headers) {
        var oHeaders = {};
        if (headers) {
          if (typeof Headers !== "undefined" && headers instanceof Headers || CrossFetch && CrossFetch.Headers && headers instanceof CrossFetch.Headers) {
            oHeaders = HeadersInstanceToPlainObject(headers);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(_a) {
              var name = _a[0], value = _a[1];
              oHeaders[name] = value;
            });
          } else {
            oHeaders = headers;
          }
        }
        return oHeaders;
      };
      var queryCleanner = function(str) {
        return str.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim();
      };
      var buildGetQueryParams = function(_a) {
        var query = _a.query, variables = _a.variables, operationName = _a.operationName, jsonSerializer = _a.jsonSerializer;
        if (!Array.isArray(query)) {
          var search = ["query=".concat(encodeURIComponent(queryCleanner(query)))];
          if (variables) {
            search.push("variables=".concat(encodeURIComponent(jsonSerializer.stringify(variables))));
          }
          if (operationName) {
            search.push("operationName=".concat(encodeURIComponent(operationName)));
          }
          return search.join("&");
        }
        if (typeof variables !== "undefined" && !Array.isArray(variables)) {
          throw new Error("Cannot create query with given variable type, array expected");
        }
        var payload = query.reduce(function(accu, currentQuery, index) {
          accu.push({
            query: queryCleanner(currentQuery),
            variables: variables ? jsonSerializer.stringify(variables[index]) : void 0
          });
          return accu;
        }, []);
        return "query=".concat(encodeURIComponent(jsonSerializer.stringify(payload)));
      };
      var post = function(_a) {
        var url = _a.url, query = _a.query, variables = _a.variables, operationName = _a.operationName, headers = _a.headers, fetch2 = _a.fetch, fetchOptions = _a.fetchOptions, middleware = _a.middleware;
        return __awaiter(void 0, void 0, void 0, function() {
          var body, init;
          var _b;
          return __generator(this, function(_c) {
            switch (_c.label) {
              case 0:
                body = (0, createRequestBody_1.default)(query, variables, operationName, fetchOptions.jsonSerializer);
                init = __assign({ method: "POST", headers: __assign(__assign({}, typeof body === "string" ? { "Content-Type": "application/json" } : {}), headers), body }, fetchOptions);
                if (!middleware)
                  return [3, 2];
                ;
                return [4, Promise.resolve(middleware(__assign(__assign({}, init), { url, operationName, variables })))];
              case 1:
                _b = _c.sent(), url = _b.url, init = __rest(_b, ["url"]);
                _c.label = 2;
              case 2:
                return [4, fetch2(url, init)];
              case 3:
                return [2, _c.sent()];
            }
          });
        });
      };
      var get = function(_a) {
        var url = _a.url, query = _a.query, variables = _a.variables, operationName = _a.operationName, headers = _a.headers, fetch2 = _a.fetch, fetchOptions = _a.fetchOptions, middleware = _a.middleware;
        return __awaiter(void 0, void 0, void 0, function() {
          var queryParams, init;
          var _b;
          return __generator(this, function(_c) {
            switch (_c.label) {
              case 0:
                queryParams = buildGetQueryParams({
                  query,
                  variables,
                  operationName,
                  jsonSerializer: fetchOptions.jsonSerializer
                });
                init = __assign({ method: "GET", headers }, fetchOptions);
                if (!middleware)
                  return [3, 2];
                ;
                return [4, Promise.resolve(middleware(__assign(__assign({}, init), { url, operationName, variables })))];
              case 1:
                _b = _c.sent(), url = _b.url, init = __rest(_b, ["url"]);
                _c.label = 2;
              case 2:
                return [4, fetch2("".concat(url, "?").concat(queryParams), init)];
              case 3:
                return [2, _c.sent()];
            }
          });
        });
      };
      var GraphQLClient2 = function() {
        function GraphQLClient3(url, options) {
          if (options === void 0) {
            options = {};
          }
          this.url = url;
          this.options = options;
        }
        GraphQLClient3.prototype.rawRequest = function(queryOrOptions, variables, requestHeaders) {
          return __awaiter(this, void 0, void 0, function() {
            var rawRequestOptions, _a, headers, _b, fetch2, _c, method, requestMiddleware, responseMiddleware, fetchOptions, url, operationName;
            return __generator(this, function(_d) {
              rawRequestOptions = (0, parseArgs_1.parseRawRequestArgs)(queryOrOptions, variables, requestHeaders);
              _a = this.options, headers = _a.headers, _b = _a.fetch, fetch2 = _b === void 0 ? cross_fetch_1.default : _b, _c = _a.method, method = _c === void 0 ? "POST" : _c, requestMiddleware = _a.requestMiddleware, responseMiddleware = _a.responseMiddleware, fetchOptions = __rest(_a, ["headers", "fetch", "method", "requestMiddleware", "responseMiddleware"]);
              url = this.url;
              if (rawRequestOptions.signal !== void 0) {
                fetchOptions.signal = rawRequestOptions.signal;
              }
              operationName = (0, resolveRequestDocument_1.resolveRequestDocument)(rawRequestOptions.query).operationName;
              return [2, makeRequest({
                url,
                query: rawRequestOptions.query,
                variables: rawRequestOptions.variables,
                headers: __assign(__assign({}, resolveHeaders(callOrIdentity(headers))), resolveHeaders(rawRequestOptions.requestHeaders)),
                operationName,
                fetch: fetch2,
                method,
                fetchOptions,
                middleware: requestMiddleware
              }).then(function(response) {
                if (responseMiddleware) {
                  responseMiddleware(response);
                }
                return response;
              }).catch(function(error) {
                if (responseMiddleware) {
                  responseMiddleware(error);
                }
                throw error;
              })];
            });
          });
        };
        GraphQLClient3.prototype.request = function(documentOrOptions) {
          var variablesAndRequestHeaders = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            variablesAndRequestHeaders[_i - 1] = arguments[_i];
          }
          return __awaiter(this, void 0, void 0, function() {
            var variables, requestHeaders, requestOptions, _a, headers, _b, fetch2, _c, method, requestMiddleware, responseMiddleware, fetchOptions, url, _d, query, operationName;
            return __generator(this, function(_e) {
              variables = variablesAndRequestHeaders[0], requestHeaders = variablesAndRequestHeaders[1];
              requestOptions = (0, parseArgs_1.parseRequestArgs)(documentOrOptions, variables, requestHeaders);
              _a = this.options, headers = _a.headers, _b = _a.fetch, fetch2 = _b === void 0 ? cross_fetch_1.default : _b, _c = _a.method, method = _c === void 0 ? "POST" : _c, requestMiddleware = _a.requestMiddleware, responseMiddleware = _a.responseMiddleware, fetchOptions = __rest(_a, ["headers", "fetch", "method", "requestMiddleware", "responseMiddleware"]);
              url = this.url;
              if (requestOptions.signal !== void 0) {
                fetchOptions.signal = requestOptions.signal;
              }
              _d = (0, resolveRequestDocument_1.resolveRequestDocument)(requestOptions.document), query = _d.query, operationName = _d.operationName;
              return [2, makeRequest({
                url,
                query,
                variables: requestOptions.variables,
                headers: __assign(__assign({}, resolveHeaders(callOrIdentity(headers))), resolveHeaders(requestOptions.requestHeaders)),
                operationName,
                fetch: fetch2,
                method,
                fetchOptions,
                middleware: requestMiddleware
              }).then(function(response) {
                if (responseMiddleware) {
                  responseMiddleware(response);
                }
                return response.data;
              }).catch(function(error) {
                if (responseMiddleware) {
                  responseMiddleware(error);
                }
                throw error;
              })];
            });
          });
        };
        GraphQLClient3.prototype.batchRequests = function(documentsOrOptions, requestHeaders) {
          var batchRequestOptions = (0, parseArgs_1.parseBatchRequestArgs)(documentsOrOptions, requestHeaders);
          var _a = this.options, headers = _a.headers, _b = _a.fetch, fetch2 = _b === void 0 ? cross_fetch_1.default : _b, _c = _a.method, method = _c === void 0 ? "POST" : _c, requestMiddleware = _a.requestMiddleware, responseMiddleware = _a.responseMiddleware, fetchOptions = __rest(_a, ["headers", "fetch", "method", "requestMiddleware", "responseMiddleware"]);
          var url = this.url;
          if (batchRequestOptions.signal !== void 0) {
            fetchOptions.signal = batchRequestOptions.signal;
          }
          var queries = batchRequestOptions.documents.map(function(_a2) {
            var document2 = _a2.document;
            return (0, resolveRequestDocument_1.resolveRequestDocument)(document2).query;
          });
          var variables = batchRequestOptions.documents.map(function(_a2) {
            var variables2 = _a2.variables;
            return variables2;
          });
          return makeRequest({
            url,
            query: queries,
            variables,
            headers: __assign(__assign({}, resolveHeaders(callOrIdentity(headers))), resolveHeaders(batchRequestOptions.requestHeaders)),
            operationName: void 0,
            fetch: fetch2,
            method,
            fetchOptions,
            middleware: requestMiddleware
          }).then(function(response) {
            if (responseMiddleware) {
              responseMiddleware(response);
            }
            return response.data;
          }).catch(function(error) {
            if (responseMiddleware) {
              responseMiddleware(error);
            }
            throw error;
          });
        };
        GraphQLClient3.prototype.setHeaders = function(headers) {
          this.options.headers = headers;
          return this;
        };
        GraphQLClient3.prototype.setHeader = function(key, value) {
          var _a;
          var headers = this.options.headers;
          if (headers) {
            headers[key] = value;
          } else {
            this.options.headers = (_a = {}, _a[key] = value, _a);
          }
          return this;
        };
        GraphQLClient3.prototype.setEndpoint = function(value) {
          this.url = value;
          return this;
        };
        return GraphQLClient3;
      }();
      exports.GraphQLClient = GraphQLClient2;
      function makeRequest(_a) {
        var url = _a.url, query = _a.query, variables = _a.variables, headers = _a.headers, operationName = _a.operationName, fetch2 = _a.fetch, _b = _a.method, method = _b === void 0 ? "POST" : _b, fetchOptions = _a.fetchOptions, middleware = _a.middleware;
        return __awaiter(this, void 0, void 0, function() {
          var fetcher, isBathchingQuery, response, result, successfullyReceivedData, successfullyPassedErrorPolicy, headers_1, status_1, errors, rest, data, errorResult;
          return __generator(this, function(_c) {
            switch (_c.label) {
              case 0:
                fetcher = method.toUpperCase() === "POST" ? post : get;
                isBathchingQuery = Array.isArray(query);
                return [4, fetcher({
                  url,
                  query,
                  variables,
                  operationName,
                  headers,
                  fetch: fetch2,
                  fetchOptions,
                  middleware
                })];
              case 1:
                response = _c.sent();
                return [4, getResult(response, fetchOptions.jsonSerializer)];
              case 2:
                result = _c.sent();
                successfullyReceivedData = isBathchingQuery && Array.isArray(result) ? !result.some(function(_a2) {
                  var data2 = _a2.data;
                  return !data2;
                }) : !!result.data;
                successfullyPassedErrorPolicy = !result.errors || fetchOptions.errorPolicy === "all" || fetchOptions.errorPolicy === "ignore";
                if (response.ok && successfullyPassedErrorPolicy && successfullyReceivedData) {
                  headers_1 = response.headers, status_1 = response.status;
                  errors = result.errors, rest = __rest(result, ["errors"]);
                  data = fetchOptions.errorPolicy === "ignore" ? rest : result;
                  return [2, __assign(__assign({}, isBathchingQuery ? { data } : data), { headers: headers_1, status: status_1 })];
                } else {
                  errorResult = typeof result === "string" ? { error: result } : result;
                  throw new types_1.ClientError(__assign(__assign({}, errorResult), { status: response.status, headers: response.headers }), { query, variables });
                }
                return [2];
            }
          });
        });
      }
      function rawRequest(urlOrOptions, query) {
        var variablesAndRequestHeaders = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          variablesAndRequestHeaders[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function() {
          var requestOptions, client;
          return __generator(this, function(_a) {
            requestOptions = parseArgs_1.parseRawRequestExtendedArgs.apply(void 0, __spreadArray([urlOrOptions, query], variablesAndRequestHeaders, false));
            client = new GraphQLClient2(requestOptions.url);
            return [2, client.rawRequest(__assign({}, requestOptions))];
          });
        });
      }
      exports.rawRequest = rawRequest;
      function request(urlOrOptions, document2) {
        var variablesAndRequestHeaders = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          variablesAndRequestHeaders[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function() {
          var requestOptions, client;
          return __generator(this, function(_a) {
            requestOptions = parseArgs_1.parseRequestExtendedArgs.apply(void 0, __spreadArray([urlOrOptions, document2], variablesAndRequestHeaders, false));
            client = new GraphQLClient2(requestOptions.url);
            return [2, client.request(__assign({}, requestOptions))];
          });
        });
      }
      exports.request = request;
      function batchRequests(urlOrOptions, documents, requestHeaders) {
        return __awaiter(this, void 0, void 0, function() {
          var requestOptions, client;
          return __generator(this, function(_a) {
            requestOptions = (0, parseArgs_1.parseBatchRequestsExtendedArgs)(urlOrOptions, documents, requestHeaders);
            client = new GraphQLClient2(requestOptions.url);
            return [2, client.batchRequests(__assign({}, requestOptions))];
          });
        });
      }
      exports.batchRequests = batchRequests;
      exports.default = request;
      function getResult(response, jsonSerializer) {
        if (jsonSerializer === void 0) {
          jsonSerializer = defaultJsonSerializer_1.defaultJsonSerializer;
        }
        return __awaiter(this, void 0, void 0, function() {
          var contentType, _a, _b;
          return __generator(this, function(_c) {
            switch (_c.label) {
              case 0:
                response.headers.forEach(function(value, key) {
                  if (key.toLowerCase() === "content-type") {
                    contentType = value;
                  }
                });
                if (!(contentType && (contentType.toLowerCase().startsWith("application/json") || contentType.toLowerCase().startsWith("application/graphql+json") || contentType.toLowerCase().startsWith("application/graphql-response+json"))))
                  return [3, 2];
                _b = (_a = jsonSerializer).parse;
                return [4, response.text()];
              case 1:
                return [2, _b.apply(_a, [_c.sent()])];
              case 2:
                return [2, response.text()];
            }
          });
        });
      }
      function callOrIdentity(value) {
        return typeof value === "function" ? value() : value;
      }
      function gql6(chunks) {
        var variables = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          variables[_i - 1] = arguments[_i];
        }
        return chunks.reduce(function(accumulator, chunk, index) {
          return "".concat(accumulator).concat(chunk).concat(index in variables ? variables[index] : "");
        }, "");
      }
      exports.gql = gql6;
      function HeadersInstanceToPlainObject(headers) {
        var o = {};
        headers.forEach(function(v, k) {
          o[k] = v;
        });
        return o;
      }
      var graphql_ws_1 = require_graphql_ws();
      Object.defineProperty(exports, "GraphQLWebSocketClient", { enumerable: true, get: function() {
        return graphql_ws_1.GraphQLWebSocketClient;
      } });
      var resolveRequestDocument_2 = require_resolveRequestDocument();
      Object.defineProperty(exports, "resolveRequestDocument", { enumerable: true, get: function() {
        return resolveRequestDocument_2.resolveRequestDocument;
      } });
    }
  });

  // ../cross-origin-channel/src/DefaultCrossWindowChannel.ts
  var import_lodash = __toESM(require_lodash());

  // ../cross-origin-channel/src/constants.ts
  var WAIT_FOR_MESSAGE_TIMEOUT = 3e4;

  // ../cross-origin-channel/src/DefaultPortChannel.ts
  var DefaultPortChannel = class {
    messagePort;
    name;
    constructor({ name, messagePort }) {
      this.messagePort = messagePort;
      this.name = name;
    }
    dispose() {
      this.messagePort.close();
    }
    start() {
      this.messagePort.start();
    }
    addMessagesListener(callback) {
      const port = this.messagePort;
      const listener = (event) => {
        const message = event.data;
        callback(message);
      };
      port.addEventListener("message", listener);
      return {
        dispose() {
          port.removeEventListener("message", listener);
        }
      };
    }
    addMessageListener(messageKey, callback) {
      return this.addMessagesListener((message) => {
        if (message.key === messageKey) {
          callback(message);
        }
      });
    }
    postMessage(message) {
      this.messagePort.postMessage(message);
    }
    waitForMessage(messageKey) {
      return new Promise((resolve, reject) => {
        const disposable = this.addMessageListener(messageKey, (message) => {
          resolve(message);
          disposable.dispose();
        });
        setTimeout(() => {
          disposable.dispose();
          reject(new Error(`Channel timed out while waiting for message ${messageKey}`));
        }, WAIT_FOR_MESSAGE_TIMEOUT);
      });
    }
  };

  // ../cross-origin-channel/src/DefaultCrossWindowChannel.ts
  var DefaultCrossWindowChannel = class {
    #localWindow;
    #remoteWindow;
    #remoteWindowOrigin;
    #messageChannels;
    #disposables;
    constructor({ localWindow, remoteWindow, remoteWindowOrigin }) {
      this.#localWindow = localWindow;
      this.#remoteWindow = remoteWindow;
      this.#remoteWindowOrigin = remoteWindowOrigin;
      this.#messageChannels = /* @__PURE__ */ new Map();
      this.#disposables = [];
      this.#disposables.push(
        this.addMessageListener("port-channel-request", (event) => {
          const { name } = event.params;
          const channel = this.#messageChannels.get(name);
          if (channel) {
            this.postMessage({ key: "port-channel-response", params: { name, port: channel.port2 } });
          } else {
            this.postMessage({
              key: "port-channel-response-error",
              params: { name, error: `Could not find a port with name ${name}` }
            });
          }
        })
      );
    }
    dispose() {
      this.#disposables.forEach((disposable) => {
        disposable.dispose();
      });
    }
    postMessage(message) {
      if (message.key === "port-channel-response") {
        this.#remoteWindow.postMessage(
          { key: message.key, params: { ...(0, import_lodash.omit)(message.params, "port") } },
          this.#remoteWindowOrigin,
          [message.params.port]
        );
      } else {
        this.#remoteWindow.postMessage(message, this.#remoteWindowOrigin);
      }
    }
    addMessagesListener(callback) {
      const localWindow = this.#localWindow;
      const remoteWindowOrigin = this.#remoteWindowOrigin;
      const listener = (event) => {
        const message = event.data;
        if (event.source !== this.#remoteWindow && event.origin !== remoteWindowOrigin) {
          return;
        }
        if (message.key === "port-channel-response") {
          callback({
            key: "port-channel-response",
            params: { name: message.params.name, port: event.ports[0] }
          });
        } else {
          callback(message);
        }
      };
      localWindow.addEventListener("message", listener);
      return {
        dispose() {
          localWindow.removeEventListener("message", listener);
        }
      };
    }
    addMessageListener(targetMessageKey, callback) {
      return this.addMessagesListener((message) => {
        if (message.key === targetMessageKey) {
          callback(message);
        }
      });
    }
    waitForMessage(targetMessageKey) {
      return new Promise((resolve, reject) => {
        const disposable = this.addMessageListener(targetMessageKey, (message) => {
          resolve(message);
          disposable.dispose();
        });
        setTimeout(() => {
          disposable.dispose();
          reject(new Error(`Channel timed out while waiting for message ${targetMessageKey}`));
        }, WAIT_FOR_MESSAGE_TIMEOUT);
      });
    }
    async requestRemotePortChannel(name) {
      this.postMessage({ key: "port-channel-request", params: { name } });
      const message = await this.waitForMessage("port-channel-response");
      return new DefaultPortChannel({ name, messagePort: message.params.port });
    }
    createLocalPortChannel(name) {
      let channel = this.#messageChannels.get(name);
      if (!channel) {
        channel = new MessageChannel();
        this.#messageChannels.set(name, channel);
      }
      return new DefaultPortChannel({ name, messagePort: channel.port1 });
    }
  };

  // ../utils-escape/src/escapeCssQuotedValue.ts
  var escapeCssQuotedValue = (val) => val.replace('"', "%22").replace("'", "%27");

  // ../utils-path/src/constants.ts
  var PATH_SEPARATOR = "/";
  var PATH_SEPARATOR_ENDING_REGEX = new RegExp(`${PATH_SEPARATOR}+$`);
  var PATH_SEPARATOR_LEADING_REGEX = new RegExp(`^${PATH_SEPARATOR}+`);

  // ../utils-path/src/cleanEndingSeparator.ts
  function cleanEndingSeparator(path) {
    return path.replace(PATH_SEPARATOR_ENDING_REGEX, "");
  }

  // ../utils-path/src/cleanLeadingSeparator.ts
  function cleanLeadingSeparator(path) {
    return path.replace(PATH_SEPARATOR_LEADING_REGEX, "");
  }

  // ../utils-path/src/joinPaths.ts
  function joinPaths(...paths) {
    return paths.reduce((acc, path) => {
      if (!path) {
        return acc;
      }
      if (!acc) {
        return path;
      }
      return [cleanEndingSeparator(acc), PATH_SEPARATOR, cleanLeadingSeparator(path)].join("");
    }, "");
  }

  // ../gitlab-api-client/src/graphql/createProjectBranch.mutation.ts
  var import_graphql_request = __toESM(require_dist());
  var createProjectBranchMutation = import_graphql_request.gql`
  mutation createProjectBranch($projectPath: ID!, $name: String!, $ref: String!) {
    createBranch(input: { projectPath: $projectPath, name: $name, ref: $ref }) {
      errors
      branch {
        name
      }
    }
  }
`;

  // ../gitlab-api-client/src/graphql/getMergeRequestDiffStats.query.ts
  var import_graphql_request2 = __toESM(require_dist());
  var getMergeRequestDiffStatsQuery = import_graphql_request2.gql`
  query getMergeRequestDiffStats($gid: MergeRequestID!) {
    mergeRequest(id: $gid) {
      diffStats {
        path
        additions
        deletions
      }
    }
  }
`;

  // ../gitlab-api-client/src/graphql/getProjectUserPermissions.query.ts
  var import_graphql_request3 = __toESM(require_dist());
  var getProjectUserPermissionsQuery = import_graphql_request3.gql`
  query getProjectUserPermissions($projectPath: ID!) {
    project(fullPath: $projectPath) {
      userPermissions {
        createMergeRequestIn
        readMergeRequest
        pushCode
      }
    }
  }
`;

  // ../gitlab-api-client/src/graphql/getRefMetadata.query.ts
  var import_graphql_request4 = __toESM(require_dist());
  var getRefMetadataQuery = import_graphql_request4.gql`
  query getRefMetadata($ref: String!, $projectPath: ID!) {
    project(fullPath: $projectPath) {
      repository {
        tree(ref: $ref) {
          lastCommit {
            sha
          }
        }
      }
    }
  }
`;

  // ../gitlab-api-client/src/graphql/searchProjectBranches.query.ts
  var import_graphql_request5 = __toESM(require_dist());
  var searchProjectBranchesQuery = import_graphql_request5.gql`
  query searchProjectBranches(
    $projectPath: ID!
    $searchPattern: String!
    $limit: Int!
    $offset: Int!
  ) {
    project(fullPath: $projectPath) {
      repository {
        branchNames(searchPattern: $searchPattern, limit: $limit, offset: $offset)
      }
    }
  }
`;

  // ../gitlab-api-client/src/createGraphQLRequest.ts
  var createGraphQLRequest = (query, variables) => ({
    type: "graphql",
    query,
    variables
  });

  // ../gitlab-api-client/src/gitlabApi.ts
  var gitlabApi_exports = {};
  __export(gitlabApi_exports, {
    getMergeRequest: () => getMergeRequest,
    getProject: () => getProject,
    getProjectBranch: () => getProjectBranch,
    getProjectPushRules: () => getProjectPushRules,
    getProjectRepositoryTree: () => getProjectRepositoryTree,
    getRawFile: () => getRawFile,
    postProjectCommit: () => postProjectCommit
  });

  // ../gitlab-api-client/src/endpoints/resolvePathParams.ts
  var VAR_OPTION_SKIP_ENCODE = "skipEncode";
  var getQueryParams = (params, keys) => {
    if (keys.size === 0) {
      return "";
    }
    const urlSearchParams = new URLSearchParams();
    keys.forEach((key) => {
      urlSearchParams.append(key, params[key]);
    });
    return `?${urlSearchParams.toString()}`;
  };
  var parsePathVariableOptions = (pathVarOptionsStr) => {
    if (pathVarOptionsStr) {
      return pathVarOptionsStr.substring(1, pathVarOptionsStr.length - 1).split(",");
    }
    return [];
  };
  var resolvePathParams = (path, params = {}) => {
    const remainingKeys = new Set(Object.keys(params));
    const pathWithParams = path.replace(
      /:(\(.+?\))?([\w_]+)/g,
      (substring, pathVarOptionsStr, pathVar) => {
        if (pathVar in params) {
          remainingKeys.delete(pathVar);
          const value = params[pathVar];
          const pathVarOptions = parsePathVariableOptions(pathVarOptionsStr);
          const shouldEncode = !pathVarOptions.includes(VAR_OPTION_SKIP_ENCODE);
          return shouldEncode ? encodeURIComponent(value) : value;
        }
        return substring;
      }
    );
    const query = getQueryParams(params, remainingKeys);
    return `${pathWithParams}${query}`;
  };

  // ../gitlab-api-client/src/endpoints/declareEndpoint.ts
  var BaseEndpointBuilder = class {
    path;
    constructor(path) {
      this.path = path;
    }
  };
  var PostEndpointBuilder = class extends BaseEndpointBuilder {
    withReturnType() {
      return this;
    }
    withPathParams() {
      return this;
    }
    withBodyType() {
      return this;
    }
    build() {
      const { path } = this;
      return {
        createRequest(params, body, headers) {
          return {
            type: "rest",
            method: "POST",
            path: resolvePathParams(path, params),
            body,
            ...headers && { headers }
          };
        }
      };
    }
  };
  var GetBufferEndpointBuilder = class extends BaseEndpointBuilder {
    withPathParams() {
      return this;
    }
    build() {
      const { path } = this;
      return {
        createRequest(params) {
          return {
            type: "rest-buffer",
            method: "GET",
            path: resolvePathParams(path, params)
          };
        }
      };
    }
  };
  var GetEndpointBuilder = class extends BaseEndpointBuilder {
    withReturnType() {
      return this;
    }
    withBufferReturnType() {
      return new GetBufferEndpointBuilder(this.path);
    }
    withPathParams() {
      return this;
    }
    build() {
      const { path } = this;
      return {
        createRequest(params) {
          return {
            type: "rest",
            method: "GET",
            path: resolvePathParams(path, params)
          };
        }
      };
    }
  };
  function declareEndpoint(method, path) {
    if (method === "GET") {
      return new GetEndpointBuilder(path);
    }
    if (method === "POST") {
      return new PostEndpointBuilder(path);
    }
    throw new Error(`Unexpected method found! ${method}`);
  }

  // ../gitlab-api-client/src/gitlabApi.ts
  var getProject = declareEndpoint("GET", "projects/:projectId").withPathParams().withReturnType().build();
  var getProjectPushRules = declareEndpoint("GET", "projects/:projectId/push_rule").withPathParams().withReturnType().build();
  var getMergeRequest = declareEndpoint("GET", "projects/:projectId/merge_requests/:mrId").withPathParams().withReturnType().build();
  var getProjectBranch = declareEndpoint(
    "GET",
    "projects/:projectId/repository/branches/:branchName"
  ).withPathParams().withReturnType().build();
  var getProjectRepositoryTree = declareEndpoint(
    "GET",
    "projects/:projectId/repository/tree"
  ).withPathParams().withReturnType().build();
  var postProjectCommit = declareEndpoint("POST", "projects/:projectId/repository/commits").withPathParams().withBodyType().withReturnType().build();
  var getRawFile = declareEndpoint("GET", "projects/:projectId/repository/files/:path/raw").withPathParams().withBufferReturnType().build();

  // ../gitlab-api-client/src/DeprecatedGitLabClient.ts
  var DeprecatedGitLabClient = class {
    #client;
    constructor(client) {
      this.#client = client;
    }
    get defaultClient() {
      return this.#client;
    }
    async fetchRefMetadata(params) {
      const request = createGraphQLRequest(
        getRefMetadataQuery,
        params
      );
      const result = await this.#client.fetchFromApi(request);
      return result.project.repository;
    }
    async fetchProjectUserPermissions(projectPath) {
      const request = createGraphQLRequest(getProjectUserPermissionsQuery, {
        projectPath
      });
      const result = await this.#client.fetchFromApi(request);
      return result.project.userPermissions;
    }
    async fetchProjectBranches(params) {
      const request = createGraphQLRequest(searchProjectBranchesQuery, params);
      const result = await this.#client.fetchFromApi(request);
      return result.project.repository.branchNames || [];
    }
    async createProjectBranch(params) {
      const request = createGraphQLRequest(
        createProjectBranchMutation,
        params
      );
      const result = await this.#client.fetchFromApi(request);
      return result.createBranch;
    }
    async fetchMergeRequestDiffStats({ mergeRequestId }) {
      const gid = `gid://gitlab/MergeRequest/${mergeRequestId}`;
      const request = createGraphQLRequest(getMergeRequestDiffStatsQuery, { gid });
      const result = await this.#client.fetchFromApi(request);
      return result.mergeRequest.diffStats;
    }
    fetchProject(projectId) {
      const request = getProject.createRequest({
        projectId
      });
      return this.#client.fetchFromApi(request);
    }
    fetchMergeRequest(projectId, mrId) {
      const request = getMergeRequest.createRequest({
        projectId,
        mrId
      });
      return this.#client.fetchFromApi(request);
    }
    fetchProjectBranch(projectId, branchName) {
      const request = getProjectBranch.createRequest({
        projectId,
        branchName
      });
      return this.#client.fetchFromApi(request);
    }
    fetchTree(projectId, ref) {
      const request = getProjectRepositoryTree.createRequest({
        projectId,
        ref,
        recursive: "true",
        pagination: "none"
      });
      return this.#client.fetchFromApi(request);
    }
    commit(projectId, payload) {
      const request = postProjectCommit.createRequest(
        {
          projectId
        },
        payload
      );
      return this.#client.fetchFromApi(request);
    }
    async fetchFileRaw(projectId, ref, path) {
      const request = getRawFile.createRequest({
        projectId,
        ref,
        path
      });
      return this.#client.fetchBufferFromApi(request);
    }
  };

  // ../gitlab-api-client/src/DefaultGitLabClient.ts
  var import_graphql_request6 = __toESM(require_dist());

  // ../gitlab-api-client/src/createHeadersProvider.ts
  var createHeadersProvider = (headers) => ({
    getHeaders: () => Promise.resolve(headers)
  });
  var NOOP_AUTH_HEADERS_PROVIDER = createHeadersProvider({});

  // ../gitlab-api-client/src/types/error.ts
  var FetchError = class extends Error {
    status;
    constructor(response, body) {
      const { status } = response;
      const message = JSON.stringify({ status, body });
      super(message);
      this.status = response.status;
    }
  };

  // ../gitlab-api-client/src/createResponseError.ts
  async function getResponseBody(response) {
    try {
      if (response.headers.get("Content-Type") === "application/json") {
        return await response.json();
      }
      return await response.text();
    } catch (e) {
      console.error(`Failed to parse response body of ${response.url}`, e);
      return "";
    }
  }
  async function createResponseError(response) {
    const body = await getResponseBody(response);
    return new FetchError(response, body);
  }

  // ../gitlab-api-client/src/DefaultGitLabClient.ts
  var withParams = (baseUrl, params) => {
    const paramEntries = Object.entries(params);
    if (!paramEntries.length) {
      return baseUrl;
    }
    const url = new URL(baseUrl);
    paramEntries.forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    return url.toString();
  };
  var DefaultGitLabClient = class {
    #baseUrl;
    #httpHeaders;
    #auth;
    #graphqlClient;
    constructor(config) {
      this.#baseUrl = config.baseUrl;
      this.#httpHeaders = config.httpHeaders || {};
      this.#auth = config.auth || NOOP_AUTH_HEADERS_PROVIDER;
      const graphqlUrl = joinPaths(this.#baseUrl, "api", "graphql");
      this.#graphqlClient = new import_graphql_request6.GraphQLClient(graphqlUrl);
    }
    async fetchBufferFromApi(request) {
      return this.#makeGetBufferRequest(request);
    }
    async fetchFromApi(request) {
      if (request.type === "rest" && request.method === "GET") {
        return this.#makeGetRequest(request);
      }
      if (request.type === "rest" && request.method === "POST") {
        return this.#makePostRequest(request);
      }
      if (request.type === "graphql") {
        return this.#makeGraphQLRequest(request);
      }
      throw new Error(`Unknown request type: ${request.type}`);
    }
    async #makePostRequest(request) {
      const url = this.#appendPathToBaseApiUrl(request.path);
      return this.#fetchPostJson(url, request.body, request.headers);
    }
    async #makeGetRequest(request) {
      const url = this.#appendPathToBaseApiUrl(request.path);
      return this.#fetchGetJson(url, request.searchParams, request.headers);
    }
    async #makeGetBufferRequest(request) {
      const url = this.#appendPathToBaseApiUrl(request.path);
      return this.#fetchGetBuffer(url, request.searchParams, request.headers);
    }
    #appendPathToBaseApiUrl(path) {
      return joinPaths(this.#baseUrl, "api", "v4", path);
    }
    async #fetchPostJson(url, body, headers) {
      const commonHeaders = await this.#getCommonHeaders();
      const response = await fetch(url, {
        method: "POST",
        body: body ? JSON.stringify(body) : void 0,
        headers: {
          ...commonHeaders,
          ...headers,
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw await createResponseError(response);
      }
      return response.json();
    }
    async #fetchGetJson(url, params = {}, headers = {}) {
      const response = await this.#fetchGetResponse(url, params, headers);
      return await response.json();
    }
    async #fetchGetBuffer(url, params = {}, headers = {}) {
      const response = await this.#fetchGetResponse(url, params, headers);
      return response.arrayBuffer();
    }
    async #fetchGetResponse(url, params = {}, headers = {}) {
      const commonHeaders = await this.#getCommonHeaders();
      const response = await fetch(withParams(url, params), {
        method: "GET",
        headers: {
          ...commonHeaders,
          ...headers
        }
      });
      if (!response.ok) {
        throw await createResponseError(response);
      }
      return response;
    }
    async #makeGraphQLRequest(request) {
      const commonHeaders = await this.#getCommonHeaders();
      return this.#graphqlClient.request(request.query, request.variables, commonHeaders);
    }
    async #getCommonHeaders() {
      const authHeaders = await this.#auth.getHeaders();
      return {
        ...this.#httpHeaders,
        ...authHeaders
      };
    }
  };

  // ../gitlab-api-client/src/DefaultAuthProvider.ts
  var DefaultAuthProvider = class {
    #token;
    constructor(token) {
      this.#token = token;
    }
    getToken() {
      return Promise.resolve(this.#token);
    }
  };
  var NOOP_AUTH_PROVIDER = new DefaultAuthProvider("");

  // ../gitlab-api-client/src/is404Error.ts
  var isRecord = (err) => Boolean(err && typeof err === "object");
  var is404Error = (err) => {
    if (!isRecord(err)) {
      return false;
    }
    if ("status" in err) {
      return String(err.status) === "404";
    }
    if ("message" in err) {
      return /404/.test(String(err.message));
    }
    return false;
  };

  // ../vscode-mediator-commands/src/constants.ts
  var PREFIX = "gitlab-web-ide.mediator";
  var MESSAGE_READY = `${PREFIX}.ready`;
  var MESSAGE_OPEN_URI = `${PREFIX}.open-uri`;
  var MESSAGE_PREVENT_UNLOAD = `${PREFIX}.prevent-unload`;
  var MESSAGE_SET_HREF = `${PREFIX}.set-href`;
  var MESSAGE_TRACK_EVENT = `${PREFIX}.track-event`;
  var MESSAGE_UPDATE_WEB_IDE_CONTEXT = `${PREFIX}.update-web-ide-context`;
  var COMMAND_START = `${PREFIX}.start`;
  var COMMAND_FETCH_FILE_RAW = `${PREFIX}.fetch-file-raw`;
  var COMMAND_FETCH_MERGE_REQUEST_DIFF_STATS = `${PREFIX}.fetch-merge-request-diff-stats`;
  var COMMAND_FETCH_PROJECT_BRANCHES = `${PREFIX}.fetch-project-branches`;
  var COMMAND_CREATE_PROJECT_BRANCH = `${PREFIX}.create-project-branch`;
  var COMMAND_COMMIT = `${PREFIX}.commit`;

  // ../vscode-mediator-commands/src/messages/MediatorMessageController.ts
  var createMediatorMessageController = (windowChannel) => ({
    [MESSAGE_READY]() {
      windowChannel.postMessage({ key: "ready" });
    },
    [MESSAGE_PREVENT_UNLOAD](params) {
      windowChannel.postMessage({ key: "prevent-unload", params });
    },
    [MESSAGE_OPEN_URI]({ key }) {
      windowChannel.postMessage({
        key: "open-uri",
        params: {
          uriKey: key
        }
      });
    },
    [MESSAGE_TRACK_EVENT](params) {
      windowChannel.postMessage({ key: "web-ide-tracking", params });
    },
    [MESSAGE_SET_HREF](href) {
      windowChannel.postMessage({ key: "set-href", params: { href } });
    },
    [MESSAGE_UPDATE_WEB_IDE_CONTEXT](params) {
      windowChannel.postMessage({ key: "update-web-ide-context", params });
    }
  });
  var MEDIATOR_MESSAGE_KEYS = {
    [MESSAGE_OPEN_URI]: true,
    [MESSAGE_PREVENT_UNLOAD]: true,
    [MESSAGE_READY]: true,
    [MESSAGE_SET_HREF]: true,
    [MESSAGE_TRACK_EVENT]: true,
    [MESSAGE_UPDATE_WEB_IDE_CONTEXT]: true
  };

  // ../vscode-mediator-commands/src/messages/handleMediatorMessages.ts
  var isMessageEventData = (data) => {
    if (!data || typeof data !== "object") {
      return false;
    }
    const { key } = data;
    return key in MEDIATOR_MESSAGE_KEYS;
  };
  var handleMediatorMessages = (messagePort, windowChannel) => {
    const controller = createMediatorMessageController(windowChannel);
    messagePort.start();
    messagePort.addEventListener("message", (event) => {
      if (!isMessageEventData(event.data)) {
        return;
      }
      const { key, params } = event.data;
      controller[key](...params);
    });
  };

  // ../gitlab-api-client-factory/src/DefaultAuthHeadersProvider.ts
  var oauthTokenAsHeaders = (token) => ({
    Authorization: `Bearer ${token}`
  });
  var accessTokenAsHeaders = (token) => ({
    "PRIVATE-TOKEN": token
  });
  var DefaultAuthHeadersProvider = class {
    #asHeaders;
    #authProvider;
    constructor(authProvider, asHeaders) {
      this.#asHeaders = asHeaders;
      this.#authProvider = authProvider;
    }
    async getHeaders() {
      const token = await this.#authProvider.getToken();
      return this.#asHeaders(token);
    }
  };
  var createOAuthHeadersProvider = (authProvider) => new DefaultAuthHeadersProvider(authProvider, oauthTokenAsHeaders);
  var createPrivateTokenHeadersProvider = (authProvider) => new DefaultAuthHeadersProvider(authProvider, accessTokenAsHeaders);

  // ../gitlab-api-client-factory/src/getAuthHeadersProvider.ts
  function assertNever(x) {
    throw new Error(`assertNever - Unexpected object: ${x}`);
  }
  var getAuthHeadersProvider = (authType, auth) => {
    if (!auth || !authType) {
      return void 0;
    }
    switch (authType) {
      case "oauth":
        return createOAuthHeadersProvider(auth);
      case "token":
        return createPrivateTokenHeadersProvider(auth);
      default:
        return assertNever(authType);
    }
  };

  // ../gitlab-api-client-factory/src/createGitLabClient.ts
  var createGitLabClient = (config, auth) => new DefaultGitLabClient({
    baseUrl: config.gitlabUrl,
    auth: getAuthHeadersProvider(config.auth?.type, auth),
    httpHeaders: config.httpHeaders
  });

  // ../oauth-client/src/asOAuthProvider.ts
  var ApiClientOAuthProvider = class {
    #client;
    constructor(client) {
      this.#client = client;
    }
    async getToken() {
      const tokenState = await this.#client.getToken();
      return tokenState.accessToken;
    }
  };
  var asOAuthProvider = (client) => new ApiClientOAuthProvider(client);

  // ../logger/src/constants.ts
  var LOG_LEVEL_NAMES = {
    [1 /* Trace */]: "trace",
    [2 /* Debug */]: "debug",
    [3 /* Info */]: "info",
    [4 /* Warn */]: "warn",
    [5 /* Error */]: "error"
  };

  // ../logger/src/Logger.ts
  var Logger = class {
    #minLevel;
    #writer;
    constructor(options) {
      this.#minLevel = options.minLevel === void 0 ? 2 /* Debug */ : options.minLevel;
      this.#writer = options.writer;
    }
    trace(...message) {
      this.#writeLog(1 /* Trace */, message);
    }
    debug(...message) {
      this.#writeLog(2 /* Debug */, message);
    }
    info(...message) {
      this.#writeLog(3 /* Info */, message);
    }
    warn(...message) {
      this.#writeLog(4 /* Warn */, message);
    }
    error(...message) {
      this.#writeLog(5 /* Error */, message);
    }
    #writeLog(level, message) {
      if (level < this.#minLevel) {
        return;
      }
      this.#writer.log(level, ...message);
    }
  };

  // ../logger/src/ConsoleLogWriter.ts
  var ConsoleLogWriter = class {
    log(level, ...message) {
      switch (level) {
        case 1 /* Trace */:
          console.trace(...message);
          break;
        case 2 /* Debug */:
          console.debug(...message);
          break;
        case 3 /* Info */:
          console.info(...message);
          break;
        case 4 /* Warn */:
          console.warn(...message);
          break;
        case 5 /* Error */:
          console.error(...message);
          break;
        default:
          console.log(...message);
          break;
      }
    }
  };

  // ../logger/src/factory.ts
  var createConsoleLogger = (options = {}) => new Logger({
    ...options,
    writer: new ConsoleLogWriter()
  });

  // ../oauth-client/src/DefaultOAuthStateBroadcaster.ts
  var CHANNEL_NAME = "gitlab_web_ide_oauth";
  var TOKEN_CHANGE_MESSAGE = "token change";
  var DefaultOAuthStateBroadcaster = class {
    #bc;
    constructor() {
      this.#bc = new BroadcastChannel(CHANNEL_NAME);
    }
    notifyTokenChange() {
      this.#bc.postMessage(TOKEN_CHANGE_MESSAGE);
    }
    onTokenChange(callback) {
      const handler = (event) => {
        if (event.data === TOKEN_CHANGE_MESSAGE) {
          callback();
        }
      };
      this.#bc.addEventListener("message", handler);
      return () => this.#bc.removeEventListener("message", handler);
    }
    dispose() {
      this.#bc.close();
    }
  };

  // ../oauth-client/src/utils/base64.ts
  var encodeBase64 = (content) => {
    const bytes = new TextEncoder().encode(content);
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
  };
  var decodeBase64 = (encoded) => {
    const binString = atob(encoded);
    const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0) || 0);
    const content = new TextDecoder().decode(bytes);
    return content;
  };

  // ../../node_modules/nanoid/async/index.browser.js
  var customAlphabet = (alphabet, defaultSize = 21) => {
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return async (size = defaultSize) => {
      let id = "";
      while (true) {
        let bytes = crypto.getRandomValues(new Uint8Array(step));
        let i = step;
        while (i--) {
          id += alphabet[bytes[i] & mask] || "";
          if (id.length === size)
            return id;
        }
      }
    };
  };
  var nanoid = async (size = 21) => {
    let id = "";
    let bytes = crypto.getRandomValues(new Uint8Array(size));
    while (size--) {
      let byte = bytes[size] & 63;
      if (byte < 36) {
        id += byte.toString(36);
      } else if (byte < 62) {
        id += (byte - 26).toString(36).toUpperCase();
      } else if (byte < 63) {
        id += "_";
      } else {
        id += "-";
      }
    }
    return id;
  };

  // ../utils-crypto/src/sha256.ts
  var K = [
    1116352408 | 0,
    1899447441 | 0,
    3049323471 | 0,
    3921009573 | 0,
    961987163 | 0,
    1508970993 | 0,
    2453635748 | 0,
    2870763221 | 0,
    3624381080 | 0,
    310598401 | 0,
    607225278 | 0,
    1426881987 | 0,
    1925078388 | 0,
    2162078206 | 0,
    2614888103 | 0,
    3248222580 | 0,
    3835390401 | 0,
    4022224774 | 0,
    264347078 | 0,
    604807628 | 0,
    770255983 | 0,
    1249150122 | 0,
    1555081692 | 0,
    1996064986 | 0,
    2554220882 | 0,
    2821834349 | 0,
    2952996808 | 0,
    3210313671 | 0,
    3336571891 | 0,
    3584528711 | 0,
    113926993 | 0,
    338241895 | 0,
    666307205 | 0,
    773529912 | 0,
    1294757372 | 0,
    1396182291 | 0,
    1695183700 | 0,
    1986661051 | 0,
    2177026350 | 0,
    2456956037 | 0,
    2730485921 | 0,
    2820302411 | 0,
    3259730800 | 0,
    3345764771 | 0,
    3516065817 | 0,
    3600352804 | 0,
    4094571909 | 0,
    275423344 | 0,
    430227734 | 0,
    506948616 | 0,
    659060556 | 0,
    883997877 | 0,
    958139571 | 0,
    1322822218 | 0,
    1537002063 | 0,
    1747873779 | 0,
    1955562222 | 0,
    2024104815 | 0,
    2227730452 | 0,
    2361852424 | 0,
    2428436474 | 0,
    2756734187 | 0,
    3204031479 | 0,
    3329325298 | 0
  ];
  var Hash = class {
    A = 1779033703 | 0;
    B = 3144134277 | 0;
    C = 1013904242 | 0;
    D = 2773480762 | 0;
    E = 1359893119 | 0;
    F = 2600822924 | 0;
    G = 528734635 | 0;
    H = 1541459225 | 0;
    _byte;
    _word;
    _size = 0;
    _W;
    _sharedBuffer;
    constructor() {
      this._W = new Int32Array(64 /* workWords */);
      this._sharedBuffer = new ArrayBuffer(80 /* allocTotal */);
      this._byte = new Uint8Array(this._sharedBuffer, 0, 80 /* allocBytes */);
      this._word = new Int32Array(this._sharedBuffer, 0, 20 /* allocWords */);
    }
    update(data) {
      if (data == null) {
        throw new TypeError("Invalid type: " + typeof data);
      }
      const byteOffset = data.byteOffset;
      const length = data.byteLength;
      let blocks = length / 64 /* inputBytes */ | 0;
      let offset = 0;
      if (blocks && !(byteOffset & 3) && !(this._size % 64 /* inputBytes */)) {
        const block = new Int32Array(data.buffer, byteOffset, blocks * 16 /* inputWords */);
        while (blocks--) {
          this._int32(block, offset >> 2);
          offset += 64 /* inputBytes */;
        }
        this._size += offset;
      }
      const BYTES_PER_ELEMENT = data.BYTES_PER_ELEMENT;
      if (BYTES_PER_ELEMENT !== 1 && data.buffer) {
        const rest = new Uint8Array(data.buffer, byteOffset + offset, length - offset);
        return this._uint8(rest);
      }
      if (offset === length)
        return this;
      return this._uint8(data, offset);
    }
    _uint8(data, offset) {
      const { _byte, _word } = this;
      const length = data.length;
      offset = offset | 0;
      while (offset < length) {
        const start2 = this._size % 64 /* inputBytes */;
        let index = start2;
        while (offset < length && index < 64 /* inputBytes */) {
          _byte[index++] = data[offset++];
        }
        if (index >= 64 /* inputBytes */) {
          this._int32(_word);
        }
        this._size += index - start2;
      }
      return this;
    }
    _int32(data, offset) {
      let { A, B, C, D, E, F, G, H, _W: W } = this;
      let i = 0;
      offset = offset | 0;
      while (i < 16 /* inputWords */) {
        W[i++] = swap32(data[offset++]);
      }
      for (i = 16 /* inputWords */; i < 64 /* workWords */; i++) {
        W[i] = gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16] | 0;
      }
      for (i = 0; i < 64 /* workWords */; i++) {
        const T1 = H + sigma1(E) + ch(E, F, G) + K[i] + W[i] | 0;
        const T2 = sigma0(A) + maj(A, B, C) | 0;
        H = G;
        G = F;
        F = E;
        E = D + T1 | 0;
        D = C;
        C = B;
        B = A;
        A = T1 + T2 | 0;
      }
      this.A = A + this.A | 0;
      this.B = B + this.B | 0;
      this.C = C + this.C | 0;
      this.D = D + this.D | 0;
      this.E = E + this.E | 0;
      this.F = F + this.F | 0;
      this.G = G + this.G | 0;
      this.H = H + this.H | 0;
    }
    digest() {
      const { _byte, _word } = this;
      let i = this._size % 64 /* inputBytes */ | 0;
      _byte[i++] = 128;
      while (i & 3) {
        _byte[i++] = 0;
      }
      i >>= 2;
      if (i > 14 /* highIndex */) {
        while (i < 16 /* inputWords */) {
          _word[i++] = 0;
        }
        i = 0;
        this._int32(_word);
      }
      while (i < 16 /* inputWords */) {
        _word[i++] = 0;
      }
      const bits64 = this._size * 8;
      const low32 = (bits64 & 4294967295) >>> 0;
      const high32 = (bits64 - low32) / 4294967296;
      if (high32)
        _word[14 /* highIndex */] = swap32(high32);
      if (low32)
        _word[15 /* lowIndex */] = swap32(low32);
      this._int32(_word);
      return this._bin();
    }
    _bin() {
      const { A, B, C, D, E, F, G, H, _byte, _word } = this;
      _word[0] = swap32(A);
      _word[1] = swap32(B);
      _word[2] = swap32(C);
      _word[3] = swap32(D);
      _word[4] = swap32(E);
      _word[5] = swap32(F);
      _word[6] = swap32(G);
      _word[7] = swap32(H);
      return _byte.slice(0, 32);
    }
  };
  var swapLE = (c) => c << 24 & 4278190080 | c << 8 & 16711680 | c >> 8 & 65280 | c >> 24 & 255;
  var swapBE = (c) => c;
  var swap32 = isBE() ? swapBE : swapLE;
  var ch = (x, y, z) => z ^ x & (y ^ z);
  var maj = (x, y, z) => x & y | z & (x | y);
  var sigma0 = (x) => (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
  var sigma1 = (x) => (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
  var gamma0 = (x) => (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
  var gamma1 = (x) => (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
  function isBE() {
    const buf = new Uint8Array(new Uint16Array([65279]).buffer);
    return buf[0] === 254;
  }
  var sha256 = function sha2562(data) {
    return new Hash().update(data).digest();
  };

  // ../utils-crypto/src/urlSafeBase64.ts
  var urlSafeBase64 = (arr) => {
    const arrAsString = String.fromCharCode(...arr);
    const base64 = btoa(arrAsString);
    return base64.replace(/\+/g, "-").replace(/\//g, "_");
  };

  // ../oauth-client/src/utils/sha256ForUrl.ts
  var sha256ForUrl = (str) => {
    const input = new TextEncoder().encode(str);
    const hashed = sha256(input);
    return urlSafeBase64(hashed).replace(/=/g, "");
  };

  // ../oauth-client/src/utils/generateAuthorizeUrl.ts
  var nanoid2 = customAlphabet("0123456789abcdef", 10);
  var generateAuthorizeUrl = async (app) => {
    const authorizeUrl = new URL(app.authorizeUrl);
    const state = await nanoid2(32);
    const codeVerifier = await nanoid2(32);
    const codeChallenge = sha256ForUrl(codeVerifier);
    const originalUrl = document.location.href;
    authorizeUrl.searchParams.set("client_id", app.clientId);
    authorizeUrl.searchParams.set("redirect_uri", app.callbackUrl);
    authorizeUrl.searchParams.set("response_type", "code");
    authorizeUrl.searchParams.set("scope", "api");
    authorizeUrl.searchParams.set("state", state);
    authorizeUrl.searchParams.set("code_challenge", codeChallenge);
    authorizeUrl.searchParams.set("code_challenge_method", "S256");
    return {
      url: authorizeUrl.href,
      handshakeState: {
        state,
        codeVerifier,
        originalUrl
      }
    };
  };

  // ../oauth-client/src/utils/getGrantFromCallbackUrl.ts
  var getGrantFromCallbackUrl = (callbackUrl, handshakeState) => {
    const stateParam = callbackUrl.searchParams.get("state");
    const code = callbackUrl.searchParams.get("code");
    if (handshakeState.state !== stateParam) {
      throw new Error("handshake state does not match received state");
    }
    if (!code) {
      throw new Error("code not found");
    }
    return {
      grant_type: "authorization_code",
      code,
      code_verifier: handshakeState.codeVerifier
    };
  };

  // ../oauth-client/src/utils/getGrantFromRefreshToken.ts
  var getGrantFromRefreshToken = (refreshToken) => ({
    grant_type: "refresh_token",
    refresh_token: refreshToken
  });

  // ../oauth-client/src/utils/waitForMessage.ts
  var waitForMessage = (predicate) => new Promise((resolve) => {
    const handler = (event) => {
      if (predicate(event.data)) {
        window.removeEventListener("message", handler);
        resolve();
      }
    };
    window.addEventListener("message", handler);
  });

  // ../oauth-client/src/utils/iframeAuth.ts
  var MSG_WEB_IDE_OAUTH_HANDSHAKE_READY = "web-ide-oauth-handshake-ready";
  var isCallbackFromIframe = () => window !== window.parent;
  var notifyParentFromIframe = () => {
    window.parent.postMessage(MSG_WEB_IDE_OAUTH_HANDSHAKE_READY, window.location.origin);
  };
  var authorizeGrantWithIframe = async (app) => {
    const { url: authorizeUrl, handshakeState } = await generateAuthorizeUrl(app);
    const readyAsync = waitForMessage((data) => data === MSG_WEB_IDE_OAUTH_HANDSHAKE_READY);
    const authorizeIframe = document.createElement("iframe");
    authorizeIframe.src = authorizeUrl;
    authorizeIframe.style.width = "0";
    authorizeIframe.style.height = "0";
    authorizeIframe.style.border = "none";
    authorizeIframe.style.position = "absolute";
    document.body.appendChild(authorizeIframe);
    await readyAsync;
    const callbackHref = authorizeIframe.contentWindow?.location.href;
    if (!callbackHref) {
      throw new Error("Could not read callback href");
    }
    const callbackUrl = new URL(callbackHref);
    return getGrantFromCallbackUrl(callbackUrl, handshakeState);
  };

  // ../oauth-client/src/utils/token.ts
  var BUFFER_MIN = 5;
  var BUFFER_MS = 1e3 * 60 * BUFFER_MIN;
  var isExpiredToken = (state) => state.expiresAt - BUFFER_MS < Date.now();
  var hasNonEmptyValues = (state) => Boolean(state.accessToken && state.expiresAt);
  var isOwnedBy = (state, owner) => owner === (state.owner || "");
  var isValidToken = (state, owner) => hasNonEmptyValues(state) && !isExpiredToken(state) && isOwnedBy(state, owner);

  // ../oauth-client/src/Mutex.ts
  var Mutex = class {
    #locking;
    constructor() {
      this.#locking = Promise.resolve();
    }
    lock() {
      let unlockNext;
      const nextLock = new Promise((resolve) => {
        unlockNext = () => resolve(void 0);
      });
      const waitForPastLocks = this.#locking.then(() => unlockNext);
      this.#locking = this.#locking.then(() => nextLock);
      return waitForPastLocks;
    }
  };

  // ../oauth-client/src/DefaultStorageValueCache.ts
  var DefaultStorageValueCache = class {
    #storage;
    #key;
    #mutex;
    #cachedValue;
    constructor(storage, key) {
      this.#storage = storage;
      this.#key = key;
      this.#mutex = new Mutex();
      this.#cachedValue = void 0;
    }
    async getValue(force = false) {
      const unlock = await this.#mutex.lock();
      try {
        if (this.#cachedValue !== void 0 && !force) {
          return this.#cachedValue;
        }
        return await this.#refreshCache();
      } finally {
        unlock();
      }
    }
    async setValue(value) {
      const unlock = await this.#mutex.lock();
      try {
        await this.#storage.set(this.#key, value);
        this.#cachedValue = value;
      } finally {
        unlock();
      }
    }
    async #refreshCache() {
      const value = await this.#storage.get(this.#key);
      this.#cachedValue = value === null ? void 0 : value;
      return this.#cachedValue;
    }
  };

  // ../oauth-client/src/StorageValueCacheBroadcaster.ts
  var StorageValueCacheBroadcaster = class {
    static decorator(broadcaster) {
      return (base) => new StorageValueCacheBroadcaster(base, broadcaster);
    }
    #base;
    #broadcaster;
    constructor(cache, broadcaster) {
      this.#base = cache;
      this.#broadcaster = broadcaster;
      this.#broadcaster.onTokenChange(() => {
        this.#base.getValue(true);
      });
    }
    async getValue(force = false) {
      return this.#base.getValue(force);
    }
    async setValue(value) {
      await this.#base.setValue(value);
      this.#broadcaster.notifyTokenChange();
    }
  };

  // ../oauth-client/src/StorageValueCacheEventEmitter.ts
  var StorageValueCacheEventEmitter = class {
    #base;
    #eventTarget;
    #event;
    constructor(base, eventTarget, event) {
      this.#base = base;
      this.#eventTarget = eventTarget;
      this.#event = event;
    }
    async getValue(force) {
      const value = await this.#base.getValue(force);
      if (force) {
        this.#dispatchEvent();
      }
      return value;
    }
    async setValue(value) {
      await this.#base.setValue(value);
      this.#dispatchEvent();
    }
    #dispatchEvent() {
      this.#eventTarget.dispatchEvent(new Event(this.#event));
    }
  };

  // ../oauth-client/src/StorageValueCacheBuilder.ts
  var StorageValueCacheBuilder = class {
    #result;
    constructor(storage, key) {
      this.#result = new DefaultStorageValueCache(storage, key);
    }
    withBroadcasting(broadcaster) {
      this.#result = new StorageValueCacheBroadcaster(this.#result, broadcaster);
      return this;
    }
    withEventEmitter(emitter, event) {
      this.#result = new StorageValueCacheEventEmitter(this.#result, emitter, event);
      return this;
    }
    build() {
      return this.#result;
    }
  };

  // ../oauth-client/src/OAuthClient.ts
  var STORAGE_KEY_PREFIX = "gitlab/web-ide/oauth";
  var EVENT_TYPE = "oauth_change";
  var DefaultOAuthClient = class {
    #app;
    #storage;
    #eventTarget;
    #tokenCache;
    #owner;
    #tokenLifetime;
    constructor(options) {
      this.#app = options.app;
      this.#storage = options.storage;
      this.#eventTarget = new EventTarget();
      this.#tokenCache = new StorageValueCacheBuilder(
        this.#storage,
        this.#tokenStorageKey()
      ).withEventEmitter(this.#eventTarget, EVENT_TYPE).withBroadcasting(options.broadcaster).build();
      this.#owner = options.owner || "";
      this.#tokenLifetime = options.tokenLifetime;
    }
    async getToken() {
      const token = await this.#tokenCache.getValue();
      if (!token) {
        throw new Error("No token found! We need to do OAuth handshake again...");
      }
      if (!isValidToken(token, this.#owner)) {
        return this.#refreshToken(token);
      }
      return token;
    }
    async checkForValidToken() {
      const state = await this.#tokenCache.getValue(true);
      if (!state) {
        return false;
      }
      return isValidToken(state, this.#owner);
    }
    async redirectToAuthorize() {
      const { url, handshakeState } = await generateAuthorizeUrl(this.#app);
      await this.#setHandshakeState(handshakeState);
      window.location.href = url;
    }
    async handleCallback() {
      if (isCallbackFromIframe()) {
        notifyParentFromIframe();
        return;
      }
      const url = new URL(window.location.href);
      const handshakeState = await this.#getHandshakeState();
      if (!handshakeState) {
        throw new Error("handshake state not found");
      }
      const grant = getGrantFromCallbackUrl(url, handshakeState);
      await this.#requestAndStoreToken(grant);
      await this.#deleteHandshakeState();
      window.location.href = handshakeState.originalUrl;
    }
    onTokenChange(callback) {
      this.#eventTarget.addEventListener(EVENT_TYPE, callback);
      return () => {
        this.#eventTarget.removeEventListener(EVENT_TYPE, callback);
      };
    }
    async #refreshToken(token) {
      const grant = await this.#getGrantFromToken(token);
      return this.#requestAndStoreToken(grant);
    }
    async #getGrantFromToken(token) {
      if (token.refreshToken) {
        return getGrantFromRefreshToken(token.refreshToken);
      }
      return authorizeGrantWithIframe(this.#app);
    }
    async #requestAndStoreToken(params) {
      const response = await fetch(this.#app.tokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          client_id: this.#app.clientId,
          redirect_uri: this.#app.callbackUrl,
          ...params
        }).toString()
      });
      if (!response.ok) {
        const errorResponse = await response.json().catch(() => ({}));
        throw new Error(
          `Something bad happened while getting OAuth token: ${JSON.stringify(errorResponse)}`
        );
      }
      const responseJson = await response.json();
      const expiresIn = this.#tokenLifetime === void 0 ? responseJson.expires_in : this.#tokenLifetime;
      const value = {
        accessToken: responseJson.access_token,
        expiresAt: (responseJson.created_at + expiresIn) * 1e3,
        refreshToken: responseJson.refresh_token,
        owner: this.#owner || void 0
      };
      if (isExpiredToken(value)) {
        throw new Error(`[OAuth] Access token lifetime cannot be less than ${BUFFER_MIN} minutes.`);
      }
      await this.#tokenCache.setValue(value);
      return value;
    }
    #getHandshakeState() {
      return this.#storage.get(this.#handshakeStorageKey());
    }
    #setHandshakeState(state) {
      return this.#storage.set(this.#handshakeStorageKey(), state);
    }
    #deleteHandshakeState() {
      return this.#storage.remove(this.#handshakeStorageKey());
    }
    #tokenStorageKey() {
      return `${STORAGE_KEY_PREFIX}/${this.#app.clientId}/token`;
    }
    #handshakeStorageKey() {
      return `${STORAGE_KEY_PREFIX}/${this.#app.clientId}/handshake`;
    }
  };

  // ../oauth-client/src/OAuthLocalStorage.ts
  var OAuthLocalStorage = class {
    #excludeKeys;
    #logger;
    constructor({ excludeKeys, logger } = {}) {
      this.#excludeKeys = new Set(excludeKeys || []);
      this.#logger = logger;
    }
    async get(key) {
      const valueAsStr = window.localStorage.getItem(key);
      if (valueAsStr === null) {
        return null;
      }
      try {
        return JSON.parse(decodeBase64(valueAsStr));
      } catch (e) {
        this.#logger?.error("Failed to parse value for given key as JSON from localStorage", e);
        return null;
      }
    }
    async set(key, value) {
      const cleanValue = this.#cleanValue(value);
      const valueAsStr = encodeBase64(JSON.stringify(cleanValue));
      window.localStorage.setItem(key, valueAsStr);
    }
    async remove(key) {
      window.localStorage.removeItem(key);
    }
    #cleanValue(value) {
      if (this.#excludeKeys.size === 0) {
        return value;
      }
      if (!value || typeof value !== "object") {
        return value;
      }
      const entries = Object.entries(value).filter(([key]) => !this.#excludeKeys.has(key));
      return Object.fromEntries(entries);
    }
  };

  // ../oauth-client/src/createOAuthClient.ts
  var createOAuthClient = ({
    oauthConfig,
    gitlabUrl,
    owner,
    logger = createConsoleLogger()
  }) => {
    const excludeKeys = [];
    if (oauthConfig.protectRefreshToken) {
      excludeKeys.push("refreshToken");
    }
    const storage = new OAuthLocalStorage({ excludeKeys, logger });
    const broadcaster = new DefaultOAuthStateBroadcaster();
    return new DefaultOAuthClient({
      app: {
        clientId: oauthConfig.clientId,
        callbackUrl: oauthConfig.callbackUrl,
        authorizeUrl: joinPaths(gitlabUrl, "oauth/authorize"),
        tokenUrl: joinPaths(gitlabUrl, "oauth/token")
      },
      storage,
      broadcaster,
      owner,
      tokenLifetime: oauthConfig.tokenLifetime
    });
  };

  // ../oauth-client/src/setupAutoRefresh.ts
  var REFRESH_DELAY_BUFFER_MS = BUFFER_MS - 60 * 1e3;
  var setupAutoRefresh = (oauthClient) => {
    let refreshTimeout;
    const setupRefreshForCurrentToken = async () => {
      clearTimeout(refreshTimeout);
      refreshTimeout = void 0;
      const token = await oauthClient.getToken();
      if (token.expiresAt) {
        const delay = token.expiresAt - Date.now() - REFRESH_DELAY_BUFFER_MS;
        refreshTimeout = setTimeout(() => {
          oauthClient.getToken();
        }, delay);
      }
    };
    const disposeTokenChangeListener = oauthClient.onTokenChange(setupRefreshForCurrentToken);
    setupRefreshForCurrentToken();
    return () => {
      disposeTokenChangeListener();
      clearTimeout(refreshTimeout);
    };
  };

  // ../gitlab-api-client-factory/src/PortChannelAuthProvider.ts
  var PortChannelAuthProvider = class {
    #portChannel;
    #onTokenChange;
    #disposable;
    constructor({ portChannel, onTokenChange }) {
      this.#portChannel = portChannel;
      this.#onTokenChange = onTokenChange;
      this.#disposable = this.#portChannel.addMessageListener("authentication-token-changed", () => {
        this.#onTokenChange?.();
      });
      this.#portChannel.start();
    }
    dispose() {
      this.#disposable.dispose();
    }
    async getToken() {
      this.#portChannel.postMessage({ key: "authentication-token-request" });
      const message = await this.#portChannel.waitForMessage(
        "authentication-token-response"
      );
      return message.params.token;
    }
  };

  // ../gitlab-api-client-factory/src/getAuthProvider.ts
  var getAuthProvider = async ({
    config,
    windowChannel,
    onTokenChange
  }) => {
    if (config.auth?.type === "token") {
      return new DefaultAuthProvider(config.auth.token);
    }
    if (config.auth?.type === "oauth") {
      if (windowChannel) {
        const portChannel = await windowChannel.requestRemotePortChannel("auth-port");
        return new PortChannelAuthProvider({
          portChannel,
          onTokenChange
        });
      }
      const client = createOAuthClient({
        oauthConfig: config.auth,
        gitlabUrl: config.gitlabUrl,
        owner: config.username
      });
      setupAutoRefresh(client);
      if (onTokenChange) {
        client.onTokenChange(onTokenChange);
      }
      return asOAuthProvider(client);
    }
    return void 0;
  };

  // ../web-ide-interop/src/index.ts
  var WEB_IDE_EXTENSION_ID = "gitlab.gitlab-web-ide";
  var COMMAND_FETCH_FROM_API = `gitlab-web-ide.mediator.fetch-from-api`;
  var COMMAND_FETCH_BUFFER_FROM_API = `gitlab-web-ide.mediator.fetch-buffer-from-api`;
  var COMMAND_MEDIATOR_TOKEN = `gitlab-web-ide.mediator.mediator-token`;

  // ../vscode-mediator-commands/src/commands/utils/fetchRef.ts
  var isCommittish = (ref, fullSha) => fullSha.startsWith(ref);
  var fetchRef = async (projectPath, ref, client) => {
    const branch = await client.fetchProjectBranch(projectPath, ref).catch((e) => {
      if (is404Error(e)) {
        return null;
      }
      throw e;
    });
    if (branch) {
      return {
        type: "branch",
        branch,
        sha: branch.commit.id
      };
    }
    const metadata = await client.fetchRefMetadata({ projectPath, ref });
    const fullSha = metadata.tree.lastCommit?.sha;
    if (!fullSha) {
      throw new Error(`[gitlab-web-ide] ref not found in repository: ${ref}`);
    }
    if (isCommittish(ref, fullSha)) {
      return {
        type: "commit",
        sha: fullSha
      };
    }
    return {
      type: "tag",
      name: ref,
      sha: fullSha
    };
  };

  // ../vscode-mediator-commands/src/commands/fetchProject.ts
  var fetchProject = async (config, client) => {
    const project = await client.fetchFromApi(
      gitlabApi_exports.getProject.createRequest({
        projectId: config.projectPath
      })
    );
    if (config.featureFlags?.projectPushRules) {
      const pushRules = await client.fetchFromApi(
        gitlabApi_exports.getProjectPushRules.createRequest({
          projectId: config.projectPath
        })
      );
      project.push_rules = pushRules;
    }
    return project;
  };

  // ../vscode-mediator-commands/src/commands/start.ts
  var fetchMergeRequestFromConfig = async (config, client) => {
    if (!config.mrId) {
      return void 0;
    }
    const mrProjectPath = config.mrTargetProject || config.projectPath;
    return client.fetchMergeRequest(mrProjectPath, config.mrId);
  };
  var resolveRefName = (ref, project, mergeRequest) => {
    if (ref) {
      return ref;
    }
    if (mergeRequest) {
      return mergeRequest.source_branch;
    }
    return project.default_branch;
  };
  var createEmptyBranch = (name) => ({
    type: "branch",
    branch: {
      commit: {
        created_at: "",
        id: "",
        message: "",
        short_id: "",
        title: "",
        web_url: ""
      },
      web_url: "",
      name,
      protected: false,
      can_push: true,
      default: false
    },
    sha: ""
  });
  var getMergeRequestContext = ({
    mergeRequest,
    branchName
  }) => {
    if (!mergeRequest) {
      return void 0;
    }
    return {
      id: String(mergeRequest.id),
      baseSha: mergeRequest.diff_refs.base_sha,
      isMergeRequestBranch: branchName === mergeRequest.source_branch,
      mergeRequestUrl: mergeRequest.web_url
    };
  };
  var commandFactory = (config, client) => async (options = {}) => {
    const [userPermissions, project, mergeRequest] = await Promise.all([
      client.fetchProjectUserPermissions(config.projectPath),
      fetchProject(config, client.defaultClient),
      fetchMergeRequestFromConfig(config, client)
    ]);
    const refName = resolveRefName(options.ref || config.ref, project, mergeRequest);
    if (project.empty_repo) {
      return {
        gitlabUrl: config.gitlabUrl,
        ref: createEmptyBranch(refName),
        files: [],
        repoRoot: config.repoRoot,
        project,
        userPermissions,
        forkInfo: config.forkInfo
      };
    }
    const ref = await fetchRef(config.projectPath, refName, client);
    const tree = await client.fetchTree(config.projectPath, ref.sha);
    const blobs = tree.filter((item) => item.type === "blob");
    return {
      gitlabUrl: config.gitlabUrl,
      ref,
      files: blobs,
      repoRoot: config.repoRoot,
      project,
      userPermissions,
      mergeRequest: getMergeRequestContext({ mergeRequest, branchName: refName }),
      forkInfo: config.forkInfo
    };
  };

  // ../vscode-mediator-commands/src/commands/fetchFromApi.ts
  var commandFactory2 = (client) => (request) => client.fetchFromApi(request);

  // ../vscode-mediator-commands/src/commands/fetchBufferFromApi.ts
  var commandFactory3 = (client, bufferWrapper) => async (request) => {
    const buffer = await client.fetchBufferFromApi(request);
    const byteArray = new Uint8Array(buffer);
    return bufferWrapper(byteArray);
  };

  // ../vscode-mediator-commands/src/commands/fetchFileRaw.ts
  var commandFactory4 = (config, client, bufferWrapper) => async (ref, path) => {
    const buffer = await client.fetchFileRaw(config.projectPath, ref, path);
    const byteArr = new Uint8Array(buffer);
    return bufferWrapper(byteArr);
  };

  // ../vscode-mediator-commands/src/commands/commit.ts
  var commandFactory5 = (config, client) => async (payload) => {
    await client.commit(config.projectPath, payload);
  };

  // ../vscode-mediator-commands/src/commands/utils/generateUniqueToken.ts
  var generateUniqueToken = () => nanoid(32);

  // ../vscode-mediator-commands/src/commands/utils/protectWithToken.ts
  var protectWithToken = (secretToken, fn) => (tokenArg, ...args) => {
    if (tokenArg === secretToken) {
      return fn(...args);
    }
    return Promise.reject(new Error(`Token invalid`));
  };

  // ../vscode-mediator-commands/src/commands/index.ts
  var createCommands = async ({
    config,
    bufferWrapper,
    auth,
    skipProtection = false
  }) => {
    const defaultClient = createGitLabClient(config, auth);
    const client = new DeprecatedGitLabClient(defaultClient);
    const unprotectedCommands = [
      {
        id: COMMAND_START,
        handler: commandFactory(config, client)
      },
      {
        id: COMMAND_FETCH_FILE_RAW,
        handler: commandFactory4(config, client, bufferWrapper)
      },
      {
        id: COMMAND_FETCH_FROM_API,
        handler: commandFactory2(defaultClient)
      },
      {
        id: COMMAND_FETCH_BUFFER_FROM_API,
        handler: commandFactory3(defaultClient, bufferWrapper)
      },
      {
        id: COMMAND_FETCH_PROJECT_BRANCHES,
        handler: (params) => client.fetchProjectBranches(params)
      },
      {
        id: COMMAND_FETCH_MERGE_REQUEST_DIFF_STATS,
        handler: (params) => client.fetchMergeRequestDiffStats(params)
      },
      {
        id: COMMAND_CREATE_PROJECT_BRANCH,
        handler: (params) => client.createProjectBranch(params)
      },
      {
        id: COMMAND_COMMIT,
        handler: commandFactory5(config, client)
      }
    ];
    if (skipProtection) {
      return unprotectedCommands;
    }
    const secretToken = await generateUniqueToken();
    const protectedCommands = unprotectedCommands.map(({ id, handler }) => ({
      id,
      handler: protectWithToken(secretToken, handler)
    }));
    const tokenCommand = {
      id: COMMAND_MEDIATOR_TOKEN,
      handler: () => secretToken
    };
    return [tokenCommand].concat(protectedCommands);
  };

  // src/utils/createBufferWrapper.ts
  var createBufferWrapper = (bufferModule) => (actual) => bufferModule.VSBuffer.wrap(actual);

  // src/constant.ts
  var DEFAULT_SESSION_ID = "current-user";
  var DEFAULT_DOCUMENTATION_URL = "https://docs.gitlab.com/ee/user/web_ide";

  // src/vscode/secrets/InMemorySecretStorageProvider.ts
  var InMemorySecretStorageProvider = class {
    #map;
    constructor() {
      this.#map = /* @__PURE__ */ new Map();
    }
    type = "in-memory";
    async get(key) {
      if (this.#map.has(key)) {
        return this.#map.get(key);
      }
      return void 0;
    }
    async set(key, value) {
      this.#map.set(key, value);
    }
    async delete(key) {
      this.#map.delete(key);
    }
  };

  // src/vscode/secrets/OverlaySecretStorageProvider.ts
  var OverlaySecretStorageProvider = class {
    #readonlyProvider;
    #writable;
    constructor(readonlyProvider, writable) {
      this.#readonlyProvider = readonlyProvider;
      this.#writable = writable;
    }
    get type() {
      return this.#writable.type;
    }
    async get(key) {
      const writableResult = await this.#writable.get(key);
      if (writableResult !== void 0) {
        return writableResult;
      }
      return this.#readonlyProvider.get(key);
    }
    set(key, value) {
      return this.#writable.set(key, value);
    }
    delete(key) {
      return this.#writable.delete(key);
    }
  };

  // src/vscode/secrets/ReadonlySecretStorageProvider.ts
  var ReadonlySecretStorageProvider = class {
    #values;
    constructor(values) {
      this.#values = values;
    }
    type = "in-memory";
    async get(key) {
      const valueProvider = this.#values.find(([predicate]) => predicate(key))?.[1];
      if (!valueProvider) {
        return void 0;
      }
      return valueProvider();
    }
    set(key, value) {
      return Promise.resolve();
    }
    delete(key) {
      return Promise.resolve();
    }
  };

  // src/vscode/secrets/factory.ts
  var createExtensionSecretKey = (extensionId, key) => JSON.stringify({ extensionId, key });
  var EXPECTED_LOGIN_ACCOUNT_KEY = "gitlab-web-ide.loginAccount";
  var EXPECTED_AUTH_TOKEN_KEY = createExtensionSecretKey(WEB_IDE_EXTENSION_ID, "auth_token");
  var EXPECTED_CONFIG_KEY = createExtensionSecretKey(WEB_IDE_EXTENSION_ID, "config");
  var isLoginAccountKey = (key) => key === EXPECTED_LOGIN_ACCOUNT_KEY;
  var isAuthTokenKey = (key) => key === EXPECTED_AUTH_TOKEN_KEY;
  var isConfigKey = (key) => key === EXPECTED_CONFIG_KEY;
  var createLoginAccount = (accessToken) => ({
    id: DEFAULT_SESSION_ID,
    accessToken,
    providerId: "gitlab-web-ide",
    canSignOut: false
  });
  var createDefaultSecretStorageProvider = ({
    config,
    authProvider
  }) => {
    const configAsJson = Promise.resolve(JSON.stringify(config));
    const secretStorageValues = [[isConfigKey, () => configAsJson]];
    if (authProvider) {
      const getAuthToken = () => authProvider.getToken();
      const getLoginAccount = async () => {
        const token = await authProvider.getToken();
        return JSON.stringify(createLoginAccount(token));
      };
      secretStorageValues.push([isAuthTokenKey, getAuthToken], [isLoginAccountKey, getLoginAccount]);
    }
    const readonlyProvider = new ReadonlySecretStorageProvider(secretStorageValues);
    const writableProvider = new InMemorySecretStorageProvider();
    return new OverlaySecretStorageProvider(readonlyProvider, writableProvider);
  };

  // src/vscode/types.ts
  var MODULE_WORKBENCH_MAIN = "vs/workbench/workbench.web.main";
  var MODULE_COMMON_BUFFER = "vs/base/common/buffer";

  // src/utils/MessagePortsController.ts
  var MessagePortsController = class {
    #webIdeChannel;
    #messagePorts;
    constructor(options) {
      const webIdeChannel = new MessageChannel();
      const messagePorts = /* @__PURE__ */ new Map();
      messagePorts.set(WEB_IDE_EXTENSION_ID, webIdeChannel.port2);
      handleMediatorMessages(webIdeChannel.port1, options.windowChannel);
      this.#messagePorts = messagePorts;
      this.#webIdeChannel = webIdeChannel;
    }
    get messagePorts() {
      return this.#messagePorts;
    }
    onTokenChange() {
      this.#webIdeChannel.port1.postMessage("webide_auth_change");
    }
  };

  // src/utils/storageAvailable.ts
  function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") && storage && storage.length !== 0;
    }
  }

  // src/utils/vsCodeWebExtensionsStore.ts
  var VSCODE_WEB_DB_NAME = "vscode-web-db";
  var VSCODE_GLOBAL_STATE_DB_NAME = "vscode-web-state-db-global";
  var VSCODE_USER_DATA_STORE = "vscode-userdata-store";
  var VSCODE_STATE_DATA_STORE = "ItemTable";
  var VSCODE_EXTENSIONS_KEY = "/User/extensions.json";
  var VSCODE_EXTENSIONS_LAST_SYNCED_KEY = "extensions.lastSyncUserData";
  var openDb = async (dbName) => new Promise((resolve, reject) => {
    const vscodeWebDb = indexedDB.open(dbName);
    vscodeWebDb.onsuccess = () => {
      resolve(vscodeWebDb.result);
    };
    vscodeWebDb.onerror = () => {
      reject(vscodeWebDb.error);
    };
  });
  var remove = async ({
    dbName,
    dbStoreName,
    key
  }) => {
    const db = await openDb(dbName);
    return new Promise((resolve, reject) => {
      const storeExists = db.objectStoreNames.contains(dbStoreName);
      if (!storeExists) {
        db.close();
        resolve(true);
        return;
      }
      const request = db.transaction(dbStoreName, "readwrite").objectStore(dbStoreName).delete(key);
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        reject(request.error);
      };
      db.close();
    });
  };
  var vsCodeWebExtensionsStore = {
    removeExtensions: async () => remove({
      dbName: VSCODE_WEB_DB_NAME,
      dbStoreName: VSCODE_USER_DATA_STORE,
      key: VSCODE_EXTENSIONS_KEY
    }),
    removeLastSyncedExtensionsData: async () => remove({
      dbName: VSCODE_GLOBAL_STATE_DB_NAME,
      dbStoreName: VSCODE_STATE_DATA_STORE,
      key: VSCODE_EXTENSIONS_LAST_SYNCED_KEY
    })
  };

  // src/cleanExtensions.ts
  var VSCODE_EXTENSION_MARKETPLACE_STORAGE_KEY = "web_ide_extension_marketplace";
  var EXTENSION_MARKETPLACE_SETTINGS_CONTEXT_HASH_KEY = "web_ide_last_extensions_marketplace_settings_context_hash";
  function setToLocalStorage(key, value) {
    const canUseLocalStorage = storageAvailable("localStorage");
    if (!canUseLocalStorage)
      return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error occurred trying to save ${key}=${value} in localStorage`, e);
    }
  }
  var getFromLocalStorage = (key) => {
    const value = window.localStorage.getItem(key);
    if (!value)
      return void 0;
    return JSON.parse(value);
  };
  function shouldClearExtensionsBySettingsContext(config) {
    const isMarketplaceEnabled = config.extensionMarketplaceSettings?.enabled;
    if (!isMarketplaceEnabled)
      return false;
    const { settingsContextHash } = config;
    const lastSettingsContextHash = getFromLocalStorage(
      EXTENSION_MARKETPLACE_SETTINGS_CONTEXT_HASH_KEY
    );
    return settingsContextHash && lastSettingsContextHash && lastSettingsContextHash !== settingsContextHash;
  }
  function shouldClearExtensionsByMarketplaceEnablement(config) {
    const isMarketplaceEnabled = config.extensionMarketplaceSettings?.enabled;
    const isMarketplaceLastEnabled = getFromLocalStorage(VSCODE_EXTENSION_MARKETPLACE_STORAGE_KEY);
    return !isMarketplaceEnabled && isMarketplaceLastEnabled;
  }
  function shouldClearWebIdeExtensions(config) {
    const canUseLocalStorage = storageAvailable("localStorage");
    if (!canUseLocalStorage)
      return true;
    if (shouldClearExtensionsByMarketplaceEnablement(config))
      return true;
    if (shouldClearExtensionsBySettingsContext(config))
      return true;
    return false;
  }
  function saveConfigStateInLocalStorage(config) {
    const { settingsContextHash, extensionMarketplaceSettings } = config;
    const isMarketplaceEnabled = extensionMarketplaceSettings?.enabled;
    setToLocalStorage(VSCODE_EXTENSION_MARKETPLACE_STORAGE_KEY, isMarketplaceEnabled || false);
    setToLocalStorage(EXTENSION_MARKETPLACE_SETTINGS_CONTEXT_HASH_KEY, settingsContextHash || "");
  }
  var cleanWebIdeExtensions = async (config) => {
    const shouldUseCrossOriginExtensionHost = config.featureFlags?.crossOriginExtensionHost;
    const shouldClearExtensions = shouldClearWebIdeExtensions(config);
    if (shouldClearExtensions) {
      try {
        await Promise.all([
          vsCodeWebExtensionsStore.removeExtensions(),
          vsCodeWebExtensionsStore.removeLastSyncedExtensionsData()
        ]);
      } catch (e) {
        console.error("Error occurred trying to clear possibly installed marketplace extensions", e);
        if (!shouldUseCrossOriginExtensionHost) {
          throw e;
        }
      }
    }
    saveConfigStateInLocalStorage(config);
  };

  // src/start.ts
  var getDomainFromFullUrl = (urlStr) => {
    const url = new URL(urlStr);
    return url.host;
  };
  var amdModuleName = (funcName) => `gitlab-web-ide/${funcName}`;
  var SETTINGS_SYNC_OPTIONS = {
    enabled: true,
    extensionsSyncStateVersion: "1.0.0",
    authenticationProvider: {
      id: "gitlab-web-ide",
      signIn() {
        return Promise.resolve(DEFAULT_SESSION_ID);
      }
    }
  };
  var BASE_OPTIONS = {
    homeIndicator: {
      href: "https://gitlab.com",
      icon: "code",
      title: "GitLab"
    },
    windowIndicator: {
      label: "$(gitlab-tanuki) GitLab",
      command: "gitlab-web-ide.open-remote-window"
    },
    defaultLayout: {
      views: [],
      editors: [],
      force: true
    },
    additionalTrustedDomains: ["gitlab.com", "about.gitlab.com", "docs.gitlab.com"],
    productConfiguration: {
      nameShort: "GitLab Web IDE",
      nameLong: "GitLab Web IDE",
      applicationName: "gitlab-web-ide",
      urlProtocol: "gitlab-web-ide",
      enableTelemetry: false,
      extensionsGallery: void 0,
      licenseName: "MIT License",
      licenseUrl: "https://gitlab.com/gitlab-org/gitlab-web-ide/-/blob/main/LICENSE",
      licenseFileName: "LICENSE",
      twitterUrl: "https://twitter.com/gitlab",
      sendASmile: {
        reportIssueUrl: "https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Bug",
        requestFeatureUrl: "https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Feature%20Proposal%20%2D%20basic"
      },
      reportIssueUrl: "https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Bug",
      requestFeatureUrl: "https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Feature%20Proposal%20%2D%20basic",
      downloadUrl: "",
      updateUrl: "",
      releaseNotesUrl: "https://about.gitlab.com/releases/categories/releases/",
      crashReporter: {
        companyName: "GitLab",
        productName: "Web IDE"
      },
      keyboardShortcutsUrlMac: "",
      keyboardShortcutsUrlLinux: "",
      keyboardShortcutsUrlWin: "",
      introductoryVideosUrl: "",
      tipsAndTricksUrl: "",
      newsletterSignupUrl: "",
      reportMarketplaceIssueUrl: "https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Bug",
      privacyStatementUrl: "",
      showTelemetryOptOut: false,
      commit: "0de6851582dc72f965981b3a738fa151199a1300",
      quality: "stable",
      trustedExtensionAuthAccess: ["gitlab.gitlab-workflow", WEB_IDE_EXTENSION_ID]
    }
  };
  var getConfigurationSyncStoreProperties = (config) => {
    const settingsContextHash = config.settingsContextHash || "";
    const settingsSyncUrl = joinPaths(
      config.gitlabUrl,
      "api/v4/vscode/settings_sync",
      settingsContextHash
    );
    return {
      url: settingsSyncUrl,
      insidersUrl: settingsSyncUrl,
      stableUrl: settingsSyncUrl,
      canSwitch: false,
      authenticationProviders: {
        "gitlab-web-ide": {
          scopes: ["api"]
        }
      }
    };
  };
  var startWorkbench = ({ create, logger }, windowChannel, config, additionalOptions) => {
    try {
      const additionalTrustedDomains = [
        ...BASE_OPTIONS.additionalTrustedDomains || [],
        ...additionalOptions.additionalTrustedDomains || [],
        getDomainFromFullUrl(config.embedderOriginUrl),
        getDomainFromFullUrl(config.workbenchBaseUrl)
      ];
      const documentationUrl = config.links?.documentation || DEFAULT_DOCUMENTATION_URL;
      const webviewContentExternalBaseUrlTemplate = `${config.extensionsHostBaseUrl}/out/vs/workbench/contrib/webview/browser/pre/`;
      const webEndpointUrlTemplate = config.extensionsHostBaseUrl;
      const shouldUseCrossOriginExtensionHost = config.extensionMarketplaceSettings?.enabled || config?.featureFlags?.crossOriginExtensionHost;
      const options = {
        ...BASE_OPTIONS,
        ...additionalOptions,
        productConfiguration: {
          ...BASE_OPTIONS.productConfiguration,
          ...additionalOptions.productConfiguration,
          extensionsGallery: config.extensionMarketplaceSettings?.enabled ? config.extensionMarketplaceSettings.vscodeSettings : void 0,
          webviewContentExternalBaseUrlTemplate,
          webEndpointUrlTemplate: shouldUseCrossOriginExtensionHost ? webEndpointUrlTemplate : void 0,
          serverDocumentationUrl: documentationUrl,
          documentationUrl
        },
        developmentOptions: {
          logLevel: config.vscodeLogLevel || 2 /* Info */
        },
        additionalTrustedDomains
      };
      create(document.body, options);
    } catch (e) {
      logger.log(4 /* Error */, String(e));
      windowChannel.postMessage({
        key: "error",
        params: {
          errorType: 0 /* START_WORKBENCH_FAILED */
        }
      });
    }
  };
  var getConfigurationDefaultFontFamily = (editorFont) => {
    if (!editorFont)
      return "monospace";
    const uniqueFamilies = new Set(editorFont.fontFaces.map(({ family }) => family));
    const fontFaceFamilies = Array.from(
      uniqueFamilies,
      (family) => `'${escapeCssQuotedValue(family)}'`
    );
    return `${fontFaceFamilies.join(", ")}, ${editorFont.fallbackFontFamily}`;
  };
  var getConfigurationDefaults = (config) => ({
    "workbench.colorTheme": "GitLab Dark",
    "gitlab.duoCodeSuggestions.enabled": config.codeSuggestionsEnabled,
    "gitlab.featureFlags.languageServerWebIDE": config.featureFlags?.languageServerWebIDE,
    "editor.fontFamily": getConfigurationDefaultFontFamily(config.editorFont),
    "window.commandCenter": false,
    "workbench.layoutControl.enabled": false
  });
  var start = (config) => {
    define(
      amdModuleName("start"),
      [MODULE_WORKBENCH_MAIN, MODULE_COMMON_BUFFER],
      async (workbenchModule, bufferModule) => {
        const windowChannel = new DefaultCrossWindowChannel({
          localWindow: window,
          remoteWindow: window.parent,
          remoteWindowOrigin: new URL(config.embedderOriginUrl).origin
        });
        const messagePortsController = new MessagePortsController({ windowChannel });
        const authProvider = await getAuthProvider({
          config,
          windowChannel: config.featureFlags?.dedicatedWebIDEOrigin ? windowChannel : void 0,
          onTokenChange: () => messagePortsController.onTokenChange()
        });
        await cleanWebIdeExtensions(config);
        startWorkbench(workbenchModule, windowChannel, config, {
          additionalTrustedDomains: [getDomainFromFullUrl(config.gitlabUrl)],
          enabledExtensions: [WEB_IDE_EXTENSION_ID],
          welcomeBanner: void 0,
          commands: authProvider ? void 0 : await createCommands({
            config,
            bufferWrapper: createBufferWrapper(bufferModule)
          }),
          configurationDefaults: getConfigurationDefaults(config),
          secretStorageProvider: createDefaultSecretStorageProvider({
            config,
            authProvider
          }),
          workspaceProvider: {
            workspace: {
              folderUri: workbenchModule.URI.parse(`gitlab-web-ide:///${config.repoRoot}`)
            },
            trusted: true,
            async open() {
              return false;
            }
          },
          productConfiguration: {
            "configurationSync.store": authProvider ? getConfigurationSyncStoreProperties(config) : void 0
          },
          messagePorts: messagePortsController.messagePorts,
          settingsSyncOptions: authProvider ? SETTINGS_SYNC_OPTIONS : void 0
        });
        window.addEventListener("beforeunload", (e) => {
          e.stopImmediatePropagation();
        });
      }
    );
  };

  // src/utils/insertScript.ts
  var insertScript = async (src, nonce = "") => {
    const script = document.createElement("script");
    script.src = src;
    script.nonce = nonce;
    return new Promise((resolve, reject) => {
      script.onerror = reject;
      script.onload = () => resolve(script);
      document.head.appendChild(script);
    });
  };

  // src/utils/insertMeta.ts
  var insertMeta = (id, jsonSetting) => {
    const meta = document.createElement("meta");
    meta.id = id;
    meta.setAttribute("data-settings", JSON.stringify(jsonSetting));
    document.head.appendChild(meta);
    return meta;
  };

  // src/utils/getRepoRoot.ts
  var getRepoRoot = (projectPath) => {
    const slashIdx = projectPath.lastIndexOf("/");
    if (slashIdx < 0) {
      return projectPath;
    }
    return projectPath.slice(slashIdx + 1);
  };

  // src/utils/kebabCase.ts
  var pascalOrCamelCaseBoundary = /\B([A-Z])/g;
  var kebabCase = (str) => str.replace(pascalOrCamelCaseBoundary, "-$1").toLowerCase();

  // src/utils/loadGitLabFonts.ts
  var getFontPreloadElements = (fontFace) => fontFace.src.map((src) => {
    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "preload");
    linkElement.setAttribute("as", "font");
    linkElement.setAttribute("type", `font/${src.format}`);
    linkElement.setAttribute("crossorigin", "");
    linkElement.setAttribute("href", src.url);
    return linkElement;
  });
  var getFontFaceDefinition = (fontFace) => {
    const keys = Object.keys(fontFace);
    const fontFaceBody = keys.filter((key) => fontFace[key] && key !== "src").map((key) => {
      switch (key) {
        case "display":
        case "family":
        case "featureSettings":
        case "stretch":
        case "style":
        case "weight": {
          const value = key === "family" ? `'${escapeCssQuotedValue(fontFace[key])}'` : fontFace[key];
          return `font-${kebabCase(key)}: ${value};`;
        }
        default:
          return `${kebabCase(key)}: ${fontFace[key]};`;
      }
    });
    const srcDeclarations = fontFace.src.map((src, idx) => {
      const url = escapeCssQuotedValue(src.url);
      const format = escapeCssQuotedValue(src.format);
      const prefix = idx > 0 ? "  " : "";
      return `${prefix}url('${url}') format('${format}')`;
    }).join(",\n");
    fontFaceBody.push(`src: ${srcDeclarations};`);
    return `@font-face {
${fontFaceBody.join("\n")}
}`;
  };
  var generateFontFaceStyleElement = (fontFaces) => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = fontFaces.map(getFontFaceDefinition).join("\n");
    return styleElement;
  };
  var loadGitLabFonts = (fontFaces) => {
    if (!fontFaces || fontFaces.length === 0)
      return;
    fontFaces.flatMap(getFontPreloadElements).forEach((element) => {
      document.head.appendChild(element);
    });
    document.head.appendChild(generateFontFaceStyleElement(fontFaces));
  };

  // src/main.ts
  var SCRIPT_VSCODE_LOADER = "vscode/out/vs/loader.js";
  var SCRIPT_VSCODE_WEB_PACKAGE_PATHS = "vscode/out/vs/webPackagePaths.js";
  var SCRIPT_VSCODE_WORKBENCH_NLS = "vscode/out/nls.messages.js";
  var SCRIPT_VSCODE_WORKBENCH = "vscode/out/vs/workbench/workbench.web.main.js";
  var getExtensionConfig = async (config, extensionPath) => {
    const extensionPackageJSONUrl = `${config.workbenchBaseUrl}/vscode/extensions/${extensionPath}/package.json`;
    const rawJson = await fetch(extensionPackageJSONUrl).then((x) => x.text());
    const packageJSON = JSON.parse(rawJson);
    return {
      extensionPath,
      packageJSON
    };
  };
  var getBuiltInExtensions = async (config) => Promise.all([
    getExtensionConfig(config, "gitlab-web-ide"),
    getExtensionConfig(config, "gitlab-language-support-vue"),
    getExtensionConfig(config, "gitlab-vscode-extension"),
    getExtensionConfig(config, "gitlab-vscode-theme")
  ]);
  var setupNavigatorKeyboard = () => {
    if (navigator.keyboard) {
      Object.assign(navigator.keyboard, {
        getLayoutMap: () => Promise.resolve(/* @__PURE__ */ new Map())
      });
    }
  };
  var setupAMDRequire = (config) => {
    const vscodeUrl = `${config.workbenchBaseUrl}/vscode`;
    Object.keys(self.webPackagePaths).map(function(key) {
      self.webPackagePaths[key] = `${vscodeUrl}/node_modules/${key}/${self.webPackagePaths[key]}`;
    });
    __require.config({
      baseUrl: `${vscodeUrl}/out`,
      recordStats: true,
      trustedTypesPolicy: window.trustedTypes?.createPolicy("amdLoader", {
        createScriptURL(value) {
          if (value.startsWith(vscodeUrl)) {
            return value;
          }
          throw new Error(`Invalid script url: ${value}`);
        }
      }),
      paths: self.webPackagePaths
    });
  };
  var main = async () => {
    const windowChannel = new DefaultCrossWindowChannel({
      localWindow: window,
      remoteWindow: window.parent,
      remoteWindowOrigin: "*"
    });
    windowChannel.postMessage({ key: "web-ide-config-request" });
    const initWorkbenchMessage = await windowChannel.waitForMessage("web-ide-config-response");
    const config = JSON.parse(initWorkbenchMessage.params.config);
    loadGitLabFonts(config.editorFont?.fontFaces);
    const extensionList = await getBuiltInExtensions(config);
    insertMeta("gitlab-builtin-vscode-extensions", extensionList);
    setupNavigatorKeyboard();
    await Promise.all([
      insertScript(`${config.workbenchBaseUrl}/${SCRIPT_VSCODE_LOADER}`, config.nonce),
      insertScript(`${config.workbenchBaseUrl}/${SCRIPT_VSCODE_WEB_PACKAGE_PATHS}`, config.nonce)
    ]);
    setupAMDRequire(config);
    await Promise.all([
      insertScript(`${config.workbenchBaseUrl}/${SCRIPT_VSCODE_WORKBENCH_NLS}`, config.nonce),
      insertScript(`${config.workbenchBaseUrl}/${SCRIPT_VSCODE_WORKBENCH}`, config.nonce)
    ]);
    if (config) {
      start({
        ...config,
        repoRoot: getRepoRoot(config.projectPath)
      });
    } else {
      throw new Error(`Unexpected config (${config}) when trying to start VSCode.`);
    }
  };
  main().catch((e) => {
    console.error(e);
    alert("An unexpected error occurred! Please open the developer console for details.");
  });
})();
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
/**
 * Ported from mustache: https://github.com/janl/mustache.js/blob/v4.2.0/mustache.js#L60-L75
 * @license https://github.com/janl/mustache.js/blob/v4.2.0/LICENSE
 */
//# sourceMappingURL=main.js.map
