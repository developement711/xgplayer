window["FlvPlayer"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/events/events.js":
/*!*****************************************************************************************!*\
  !*** /Users/leonardo/Documents/front-end/player/xgplayer/node_modules/events/events.js ***!
  \*****************************************************************************************/
/*! no static exports found */
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



var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};

var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {

  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = type === 'error';

  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = this._events;
  if (events === undefined) return this;

  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }

    if (list.length === 1) events[type] = list[0];

    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;

  events = this._events;
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined) return [];

  var evlistener = events[type];
  if (evlistener === undefined) return [];

  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i) copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

/***/ }),

/***/ "../xgplayer-buffer/index.js":
/*!***********************************!*\
  !*** ../xgplayer-buffer/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Track: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").default,
  Tracks: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").Tracks,
  AudioTrack: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").AudioTrack,
  VideoTrack: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").VideoTrack,

  XgBuffer: __webpack_require__(/*! ./src/buffer */ "../xgplayer-buffer/src/buffer.js").XgBuffer,
  RemuxBuffer: __webpack_require__(/*! ./src/buffer */ "../xgplayer-buffer/src/buffer.js").RemuxBuffer,

  PreSource: __webpack_require__(/*! ./src/presouce */ "../xgplayer-buffer/src/presouce.js").default
};

/***/ }),

/***/ "../xgplayer-buffer/src/buffer.js":
/*!****************************************!*\
  !*** ../xgplayer-buffer/src/buffer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class XgBuffer {
  /**
   * A buffer to store loaded data.
   *
   * @class LoaderBuffer
   * @param {number} length - Optional the buffer size
   */
  constructor(length) {
    this.length = length || 0;
    this.historyLen = length || 0;
    this.array = [];
    this.offset = 0;
  }

  /**
   * The function to push data.
   *
   * @param {number} data - The data to push into the buffer
   */
  push(data) {
    this.array.push(data);
    this.length += data.byteLength;
    this.historyLen += data.byteLength;
  }

  /**
   * The function to shift data.
   *
   * @param {number} length - The size of shift.
   */
  shift(length) {
    if (this.array.length < 1) {
      return new Uint8Array(0);
    }

    if (length === undefined) {
      return this._shiftBuffer();
    }
    if (this.offset + length === this.array[0].length) {
      let ret = this.array[0].slice(this.offset, this.offset + length);
      this.offset = 0;
      this.array.shift();
      this.length -= length;
      return ret;
    }

    if (this.offset + length < this.array[0].length) {
      let ret = this.array[0].slice(this.offset, this.offset + length);
      this.offset += length;
      this.length -= length;
      return ret;
    }

    let ret = new Uint8Array(length);
    let tmpoff = 0;
    while (this.array.length > 0 && length > 0) {
      if (this.offset + length < this.array[0].length) {
        let tmp = this.array[0].slice(this.offset, this.offset + length);
        ret.set(tmp, tmpoff);
        this.offset += length;
        this.length -= length;
        length = 0;
        break;
      } else {
        let templength = this.array[0].length - this.offset;
        ret.set(this.array[0].slice(this.offset, this.array[0].length), tmpoff);
        this.array.shift();
        this.offset = 0;
        tmpoff += templength;
        this.length -= templength;
        length -= templength;
      }
    }
    return ret;
  }

  /**
   * Function to clear the buffer.
   */
  clear() {
    this.array = [];
    this.length = 0;
    this.offset = 0;
  }

  destroy() {
    this.clear();
    this.historyLen = 0;
  }

  /**
   * Function to shift one unit8Array.
   */
  _shiftBuffer() {
    this.length -= this.array[0].length;
    this.offset = 0;
    return this.array.shift();
  }

  /**
   * Convert uint8 data to number.
   *
   * @param {number} start - the start postion.
   * @param {number} length - the length of data.
   */
  toInt(start, length) {
    let retInt = 0;
    let i = this.offset + start;
    while (i < this.offset + length + start) {
      if (i < this.array[0].length) {
        retInt = retInt * 256 + this.array[0][i];
      } else if (this.array[1]) {
        retInt = retInt * 256 + this.array[1][i - this.array[0].length];
      }

      i++;
    }
    return retInt;
  }
}

exports.XgBuffer = XgBuffer;
class RemuxBuffer {
  constructor() {
    this.video = [];
    this.audio = [];
  }

  destroy() {
    this.video = [];
    this.audio = [];
  }
}
exports.RemuxBuffer = RemuxBuffer;

/***/ }),

/***/ "../xgplayer-buffer/src/presouce.js":
/*!******************************************!*\
  !*** ../xgplayer-buffer/src/presouce.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Source {
  constructor() {
    this.mimetype = '';
    this.init = null;
    this.data = [];
  }
}

class PreSource {
  constructor() {
    this.sources = {};
  }

  getSource(source) {
    return this.sources[source];
  }

  createSource(name) {
    this.sources[name] = new Source();
    return this.sources[name];
  }

  clear() {
    this.sources = {};
  }

  destroy() {
    this.sources = {};
  }
}

exports.default = PreSource;

/***/ }),

/***/ "../xgplayer-buffer/src/track.js":
/*!***************************************!*\
  !*** ../xgplayer-buffer/src/track.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Track {
  /**
   * The constructor.
   */
  constructor() {
    this.id = -1;
    this.sequenceNumber = 0;
    this.samples = [];
    this.droppedSamples = [];
    this.length = 0;
  }

  /**
   * Reset the track.
   */
  reset() {
    this.sequenceNumber = 0;
    this.samples = [];
    this.length = 0;
  }
  /**
   * destroy the track.
   */
  distroy() {
    this.reset();
    this.id = -1;
  }
}

exports.default = Track;
class AudioTrack extends Track {
  /**
   * The constructor for audio track.
   */
  constructor() {
    super();
    this.TAG = 'AudioTrack';
    this.type = 'audio';
  }
}

exports.AudioTrack = AudioTrack;
class VideoTrack extends Track {
  /**
   * The constructor for video track.
   */
  constructor() {
    super();
    this.TAG = 'VideoTrack';
    this.type = 'video';
    this.dropped = 0;
  }
  /**
   * reset the video track.
   */
  reset() {
    this.sequenceNumber = 0;
    this.samples = [];
    this.length = 0;
    this.dropped = 0;
  }
}

exports.VideoTrack = VideoTrack;
class Tracks {
  constructor() {
    this.audioTrack = null;
    this.videoTrack = null;
  }

  destroy() {
    this.audioTrack = null;
    this.videoTrack = null;
  }
}
exports.Tracks = Tracks;

/***/ }),

/***/ "../xgplayer-codec/index.js":
/*!**********************************!*\
  !*** ../xgplayer-codec/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Nalunit: __webpack_require__(/*! ./src/h264/nalunit */ "../xgplayer-codec/src/h264/nalunit/index.js").default,
  SpsParser: __webpack_require__(/*! ./src/h264/nalunit/sps */ "../xgplayer-codec/src/h264/nalunit/sps.js").default,

  Compatibility: __webpack_require__(/*! ./src/compatibility */ "../xgplayer-codec/src/compatibility.js").default
};

/***/ }),

/***/ "../xgplayer-codec/src/aac/aac-helper.js":
/*!***********************************************!*\
  !*** ../xgplayer-codec/src/aac/aac-helper.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class AAC {

  static getSilentFrame(codec, channelCount) {
    if (codec === 'mp4a.40.2') {
      // handle LC-AAC
      if (channelCount === 1) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
      } else if (channelCount === 2) {
        return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
      } else if (channelCount === 3) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
      } else if (channelCount === 4) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
      } else if (channelCount === 5) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
      } else if (channelCount === 6) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
      }
    } else {
      // handle HE-AAC (mp4a.40.5 / mp4a.40.29)
      if (channelCount === 1) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0:d=0.05" -c:a libfdk_aac -profile:a aac_he -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x4e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x1c, 0x6, 0xf1, 0xc1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      } else if (channelCount === 2) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      } else if (channelCount === 3) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0|0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      }
    }
    return null;
  }

}

exports.default = AAC;

/***/ }),

/***/ "../xgplayer-codec/src/compatibility.js":
/*!**********************************************!*\
  !*** ../xgplayer-codec/src/compatibility.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _aacHelper = __webpack_require__(/*! ./aac/aac-helper */ "../xgplayer-codec/src/aac/aac-helper.js");

var _aacHelper2 = _interopRequireDefault(_aacHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { REMUX_EVENTS, DEMUX_EVENTS } = _xgplayerUtils.EVENTS;

class Compatibility {
  constructor() {
    this.nextAudioDts = 0; // 模拟下一段音频数据的dts
    this.nextVideoDts = 0; // 模拟下一段视频数据的dts

    this.lastAudioSamplesLen = 0; // 上一段音频数据的长度
    this.lastVideoSamplesLen = 0; // 上一段视频数据的长度

    this.lastVideoDts = undefined; // 上一段音频数据的长度
    this.lastAudioDts = undefined; // 上一段视频数据的长度

    this.allAudioSamplesCount = 0; // 音频总数据量(原始帧)
    this.allVideoSamplesCount = 0; // 视频总数据量(原始帧)

    this._firstAudioSample = null;
    this._firstVideoSample = null;

    this.filledAudioSamples = []; // 补充音频帧（）
    this.filledVideoSamples = []; // 补充视频帧（）

    this._videoLargeGap = 0;
    this._audioLargeGap = 0;
  }

  init() {
    this.before(REMUX_EVENTS.REMUX_MEDIA, this.doFix.bind(this));
  }

  reset() {
    this.nextAudioDts = null; // 估算下一段音频数据的dts
    this.nextVideoDts = null; // 估算下一段视频数据的dts

    this.lastAudioSamplesLen = 0; // 上一段音频数据的长度
    this.lastVideoSamplesLen = 0; // 上一段视频数据的长度

    this.lastVideoDts = undefined; // 上一段音频数据的长度
    this.lastAudioDts = undefined; // 上一段视频数据的长度

    // this.allAudioSamplesCount = 0 // 音频总数据量(原始帧)
    // this.allVideoSamplesCount = 0 // 视频总数据量(原始帧)

    // this._firstAudioSample = null
    // this._firstVideoSample = null

    this.filledAudioSamples = []; // 补充音频帧（）
    this.filledVideoSamples = []; // 补充视频帧（）
  }

  doFix() {
    const { isFirstAudioSamples, isFirstVideoSamples } = this.getFirstSample();

    // this.removeInvalidSamples()

    this.recordSamplesCount();

    if (this._firstVideoSample) {
      this.fixRefSampleDuration(this.videoTrack.meta, this.videoTrack.samples);
    }
    if (this._firstAudioSample) {
      this.fixRefSampleDuration(this.audioTrack.meta, this.audioTrack.samples);
    }

    const { changed: videoChanged, changedIdx: videoChangedIdx } = Compatibility.detactChangeStream(this.videoTrack.samples);
    if (videoChanged && !isFirstAudioSamples) {
      this.fixChangeStreamVideo(videoChangedIdx);
    } else {
      this.doFixVideo(isFirstVideoSamples);
    }

    const { changed: audioChanged, changedIdx: audioChangedIdx } = Compatibility.detactChangeStream(this.audioTrack.samples);
    if (audioChanged) {
      this.fixChangeStreamAudio(audioChangedIdx);
    } else {
      this.doFixAudio(isFirstAudioSamples);
    }

    // this.removeInvalidSamples()
  }

  doFixVideo(first, streamChangeStart) {
    let { samples: videoSamples, meta } = this.videoTrack;

    if (meta.frameRate && meta.frameRate.fixed === false) {
      return;
    }

    if (!videoSamples || !videoSamples.length || !this._firstVideoSample) {
      return;
    }

    // console.log(`video lastSample, ${videoSamples[videoSamples.length - 1].dts}`)

    const firstSample = videoSamples[0];

    const samplesLen = videoSamples.length;

    // step0.修复hls流出现巨大gap，需要强制重定位的问题
    if (this._videoLargeGap > 0) {
      Compatibility.doFixLargeGap(videoSamples, this._videoLargeGap);
    }

    if (firstSample.dts !== this._firstVideoSample.dts && (streamChangeStart || Compatibility.detectLargeGap(this.nextVideoDts, firstSample))) {
      if (streamChangeStart) {
        this.nextVideoDts = streamChangeStart; // FIX: Hls中途切codec，在如果直接seek到后面的点会导致largeGap计算失败
      }

      this._videoLargeGap = this.nextVideoDts - firstSample.dts;
      Compatibility.doFixLargeGap(videoSamples, this._videoLargeGap);
    }

    const firstDts = firstSample.dts;

    // step1. 修复与audio首帧差距太大的问题
    if (first && this._firstAudioSample) {
      const videoFirstDts = this._firstVideoSample.dts;
      const audioFirstDts = this._firstAudioSample.dts;
      const gap = videoFirstDts - audioFirstDts;
      if (gap > 2 * meta.refSampleDuration) {
        const fillCount = Math.floor(gap / meta.refSampleDuration);

        for (let i = 0; i < fillCount; i++) {
          const clonedFirstSample = Object.assign({}, firstSample); // 视频头部帧缺失需要复制第一帧
          // 重新计算sample的dts和pts
          clonedFirstSample.dts = videoFirstDts - (i + 1) * meta.refSampleDuration;
          clonedFirstSample.pts = clonedFirstSample.dts + clonedFirstSample.cts;

          videoSamples.unshift(clonedFirstSample);

          this.filledVideoSamples.push({
            dts: clonedFirstSample.dts,
            size: clonedFirstSample.data.byteLength
          });
        }
      }
    }

    let gap;
    // step2. 修复samples段之间的间距问题、
    if (this.nextVideoDts) {
      // step1. 处理samples段之间的丢帧情况
      // 当发现duration差距大于2帧时进行补帧
      gap = firstDts - this.nextVideoDts;
      const absGap = Math.abs(gap);
      if (gap > 2 * meta.refSampleDuration) {
        const fillFrameCount = Math.floor(gap / meta.refSampleDuration);

        for (let i = 0; i < fillFrameCount; i++) {
          const clonedSample = Object.assign({}, videoSamples[0]);
          const computed = firstDts - (i + 1) * meta.refSampleDuration;

          clonedSample.dts = computed > this.nextVideoDts ? computed : this.nextVideoDts; // 补的第一帧一定要是nextVideoDts
          clonedSample.pts = clonedSample.dts + clonedSample.cts;

          this.videoTrack.samples.unshift(clonedSample);

          this.filledVideoSamples.push({
            dts: clonedSample.dts,
            size: clonedSample.data.byteLength
          });
        }
      } else if (absGap <= meta.refSampleDuration && absGap > 0) {
        // 当差距在+-一帧之间时将第一帧的dts强行定位到期望位置
        // console.log('重定位视频帧dts', videoSamples[0].dts, this.nextVideoDts)
        videoSamples[0].dts = this.nextVideoDts;
        videoSamples[0].originDts = videoSamples[0].dts;
        videoSamples[0].cts = videoSamples[0].cts !== undefined ? videoSamples[0].cts : videoSamples[0].pts - videoSamples[0].dts;
        videoSamples[0].pts = videoSamples[0].dts + videoSamples[0].cts;
      } else if (gap < 0) {
        // 出现大的gap
        Compatibility.doFixLargeGap(videoSamples, -1 * gap);
      }
    }
    const lastDts = videoSamples[videoSamples.length - 1].dts;

    const lastSampleDuration = videoSamples.length >= 2 ? lastDts - videoSamples[videoSamples.length - 2].dts : meta.refSampleDuration;

    this.lastVideoSamplesLen = samplesLen;
    this.nextVideoDts = lastDts + lastSampleDuration;
    this.lastVideoDts = lastDts;

    // step2. 修复sample段之内的间距问题
    // step3. 修复samples段内部的dts异常问题
    for (let i = 0, len = videoSamples.length; i < len; i++) {
      const current = videoSamples[i];
      const next = videoSamples[i + 1];

      if (!next) {
        break;
      }

      const duration = next.dts - current.dts;

      if (duration > 2 * meta.refSampleDuration) {
        // 两帧之间间隔太大，需要补空白帧
        let fillFrameCount = Math.floor(duration / meta.refSampleDuration);

        let fillFrameIdx = 0;
        while (fillFrameIdx < fillFrameCount) {
          const fillFrame = Object.assign({}, next);
          fillFrame.dts = current.dts + (fillFrameIdx + 1) * meta.refSampleDuration;
          fillFrame.pts = fillFrame.dts + fillFrame.cts;
          if (fillFrame < next.dts) {
            videoSamples.splice(i, 0, fillFrame);

            this.filledVideoSamples.push({
              dts: fillFrame.dts,
              size: fillFrame.data.byteLength
            });
          }

          fillFrameIdx++;
          i++;
        }
      }
    }

    this.videoTrack.samples = videoSamples;
  }

  doFixAudio(first, streamChangeStart) {
    let { samples: audioSamples, meta } = this.audioTrack;

    if (!audioSamples || !audioSamples.length) {
      return;
    }
    // console.log(`audio lastSample, ${audioSamples[audioSamples.length - 1].dts}`)

    const samplesLen = audioSamples.length;
    const silentFrame = _aacHelper2.default.getSilentFrame(meta.codec, meta.channelCount);

    const firstSample = this._firstAudioSample;

    const _firstSample = audioSamples[0];
    // 对audioSamples按照dts做排序
    // audioSamples = Compatibility.sortAudioSamples(audioSamples)
    if (this._audioLargeGap > 0) {
      Compatibility.doFixLargeGap(audioSamples, this._audioLargeGap);
    }

    if (_firstSample.dts !== this._firstAudioSample.dts && (streamChangeStart || Compatibility.detectLargeGap(this.nextAudioDts, _firstSample))) {
      if (streamChangeStart) {
        this.nextAudioDts = streamChangeStart; // FIX: Hls中途切codec，在如果直接seek到后面的点会导致largeGap计算失败
      }
      this._audioLargeGap = this.nextAudioDts - _firstSample.dts;
      Compatibility.doFixLargeGap(audioSamples, this._audioLargeGap);
    }
    // step0. 首帧与video首帧间距大的问题
    if (this._firstVideoSample && first) {
      const videoFirstPts = this._firstVideoSample.pts ? this._firstVideoSample.pts : this._firstVideoSample.dts + this._firstVideoSample.cts;

      if (firstSample.dts - videoFirstPts > meta.refSampleDuration) {
        const silentSampleCount = Math.floor((firstSample.dts - videoFirstPts) / meta.refSampleDuration);

        for (let i = 0; i < silentSampleCount; i++) {
          const silentSample = {
            data: silentFrame,
            datasize: silentFrame.byteLength,
            dts: firstSample.dts - (i + 1) * meta.refSampleDuration,
            filtered: 0
          };

          audioSamples.unshift(silentSample);

          this.filledAudioSamples.push({
            dts: silentSample.dts,
            size: silentSample.data.byteLength
          });
        }
      }
    }

    let gap;
    const firstDts = audioSamples[0].dts;

    if (this.nextAudioDts) {
      // step1. 处理samples段之间的丢帧情况
      // 当发现duration差距大于1帧时进行补帧
      gap = firstDts - this.nextAudioDts;
      const absGap = Math.abs(gap);

      if (absGap > meta.refSampleDuration && samplesLen === 1 && this.lastAudioSamplesLen === 1) {
        meta.refSampleDurationFixed = undefined;
      }

      if (gap > 2 * meta.refSampleDuration) {
        if (samplesLen === 1 && this.lastAudioSamplesLen === 1) {
          // 如果sample的length一直是1，而且一直不符合refSampleDuration，需要动态修改refSampleDuration
          meta.refSampleDurationFixed = meta.refSampleDurationFixed !== undefined ? meta.refSampleDurationFixed + gap : meta.refSampleDuration + gap;
        } else {
          const silentFrameCount = Math.floor(gap / meta.refSampleDuration);

          for (let i = 0; i < silentFrameCount; i++) {
            const computed = firstDts - (i + 1) * meta.refSampleDuration;
            const silentSample = Object.assign({}, audioSamples[0], {
              dts: computed > this.nextAudioDts ? computed : this.nextAudioDts
            });

            this.filledAudioSamples.push({
              dts: silentSample.dts,
              size: silentSample.data.byteLength
            });
            this.audioTrack.samples.unshift(silentSample);
          }
        }
      } else if (absGap <= meta.refSampleDuration && absGap > 0) {
        // 当差距比较小的时候将音频帧重定位
        // console.log('重定位音频帧dts', audioSamples[0].dts, this.nextAudioDts)
        audioSamples[0].dts = this.nextAudioDts;
        audioSamples[0].pts = this.nextAudioDts;
      } else if (gap < 0) {
        Compatibility.doFixLargeGap(audioSamples, -1 * gap);
      }
    }
    const lastDts = audioSamples[audioSamples.length - 1].dts;
    const lastSampleDuration = audioSamples.length >= 2 ? lastDts - audioSamples[audioSamples.length - 2].dts : meta.refSampleDuration;

    this.lastAudioSamplesLen = samplesLen;
    this.nextAudioDts = meta.refSampleDurationFixed ? lastDts + meta.refSampleDurationFixed : lastDts + lastSampleDuration;
    this.lastAudioDts = lastDts;

    // step3. 修复samples段内部的dts异常问题
    for (let i = 0, len = audioSamples.length; i < len; i++) {
      const current = audioSamples[i];
      const next = audioSamples[i + 1];

      if (!next) {
        break;
      }

      const duration = next.dts - current.dts;
      audioSamples[i].duration = duration;
      /*
      if (duration > (2 * meta.refSampleDuration)) {
        // 两帧之间间隔太大，需要补空白帧
        /**
        let silentFrameCount = Math.floor(duration / meta.refSampleDuration)
        let frameIdx = 0
         while (frameIdx < silentFrameCount) {
          const silentSample = {
            data: silentFrame,
            datasize: silentFrame.byteLength,
            dts: current.dts + (frameIdx + 1) * meta.refSampleDuration,
            filtered: 0,
            isSilent: true
          }
           audioSamples.splice(i, 0, silentSample)
           this.filledAudioSamples.push({
            dts: silentSample.dts,
            size: silentSample.data.byteLength
          })
           frameIdx++
          i++ // 不对静音帧做比较
        }
      } */
    }

    this.audioTrack.samples = Compatibility.sortAudioSamples(audioSamples);
  }

  fixChangeStreamVideo(changeIdx) {
    const { samples, meta } = this.videoTrack;
    const prevDts = changeIdx === 0 ? this.getStreamChangeStart(samples[0]) : samples[changeIdx - 1].dts;
    const curDts = samples[changeIdx].dts;
    const isContinue = Math.abs(prevDts - curDts) <= 2 * meta.refSampleDuration;

    if (isContinue) {
      if (!samples[changeIdx].options) {
        samples[changeIdx].options = {
          isContinue: true
        };
      } else {
        samples[changeIdx].options.isContinue = true;
      }
      return this.doFixVideo(false);
    }

    const firstPartSamples = samples.slice(0, changeIdx);
    const secondPartSamples = samples.slice(changeIdx);
    const firstSample = samples[0];

    const changeSample = secondPartSamples[0];
    const firstPartDuration = changeSample.dts - firstSample.dts;
    const streamChangeStart = firstSample.options && firstSample.options.start + firstPartDuration ? firstSample.options.start : null;

    this.videoTrack.samples = samples.slice(0, changeIdx);

    this.doFixVideo(false);

    this.videoTrack.samples = samples.slice(changeIdx);

    this.doFixVideo(false, streamChangeStart);

    this.videoTrack.samples = firstPartSamples.concat(secondPartSamples);
  }

  fixChangeStreamAudio(changeIdx) {
    const { samples, meta } = this.audioTrack;

    const prevDts = changeIdx === 0 ? this.getStreamChangeStart(samples[0]) : samples[changeIdx - 1].dts;
    const curDts = samples[changeIdx].dts;
    const isContinue = Math.abs(prevDts - curDts) <= 2 * meta.refSampleDuration;

    if (isContinue) {
      if (!samples[changeIdx].options) {
        samples[changeIdx].options = {
          isContinue: true
        };
      } else {
        samples[changeIdx].options.isContinue = true;
      }
      return this.doFixAudio(false);
    }

    const firstPartSamples = samples.slice(0, changeIdx);
    const secondPartSamples = samples.slice(changeIdx);
    const firstSample = samples[0];

    const changeSample = secondPartSamples[0];
    const firstPartDuration = changeSample.dts - firstSample.dts;
    const streamChangeStart = firstSample.options && firstSample.options.start + firstPartDuration ? firstSample.options.start : null;

    this.audioTrack.samples = firstPartSamples;

    this.doFixAudio(false);

    this.audioTrack.samples = secondPartSamples;

    this.doFixAudio(false, streamChangeStart);

    this.audioTrack.samples = firstPartSamples.concat(secondPartSamples);
  }

  getFirstSample() {
    // 获取video和audio的首帧数据
    let { samples: videoSamples } = this.videoTrack;
    let { samples: audioSamples } = this.audioTrack;

    let isFirstVideoSamples = false;
    let isFirstAudioSamples = false;

    if (!this._firstVideoSample && videoSamples.length) {
      this._firstVideoSample = Compatibility.findFirstVideoSample(videoSamples);
      isFirstVideoSamples = true;
    }

    if (!this._firstAudioSample && audioSamples.length) {
      this._firstAudioSample = Compatibility.findFirstAudioSample(audioSamples); // 寻找dts最小的帧作为首个音频帧
      isFirstAudioSamples = true;
    }

    return {
      isFirstVideoSamples,
      isFirstAudioSamples
    };
  }

  /**
   * 在没有refSampleDuration的问题流中，
   */
  fixRefSampleDuration(meta, samples) {
    const isVideo = meta.type === 'video';
    const allSamplesCount = isVideo ? this.allVideoSamplesCount : this.allAudioSamplesCount;
    const firstDts = isVideo ? this._firstVideoSample.dts : this._firstAudioSample.dts;
    const filledSamplesCount = isVideo ? this.filledVideoSamples.length : this.filledAudioSamples.length;

    if (!meta.refSampleDuration || meta.refSampleDuration <= 0 || Number.isNaN(meta.refSampleDuration)) {
      if (samples.length >= 1) {
        const lastDts = samples[samples.length - 1].dts;

        meta.refSampleDuration = Math.floor((lastDts - firstDts) / (allSamplesCount + filledSamplesCount - 1)); // 将refSampleDuration重置为计算后的平均值
      }
    } else if (meta.refSampleDuration) {
      if (samples.length >= 5) {
        const lastDts = samples[samples.length - 1].dts;
        const firstDts = samples[0].dts;
        const durationAvg = (lastDts - firstDts) / (samples.length - 1);

        meta.refSampleDuration = Math.floor(Math.abs(meta.refSampleDuration - durationAvg) <= 5 ? meta.refSampleDuration : durationAvg); // 将refSampleDuration重置为计算后的平均值
      }
    }
  }

  /**
   * 记录截止目前一共播放了多少帧
   */
  recordSamplesCount() {
    const { audioTrack, videoTrack } = this;

    this.allAudioSamplesCount += audioTrack.samples.length;
    this.allVideoSamplesCount += videoTrack.samples.length;
  }

  /**
   * 去除不合法的帧（倒退、重复帧）
   */
  removeInvalidSamples() {
    const { _firstVideoSample, _firstAudioSample } = this;

    this.audioTrack.samples = this.audioTrack.samples.filter(sample => {
      return sample.dts >= _firstAudioSample.dts && (this.lastAudioDts === undefined || sample.dts > this.lastAudioDts);
    });

    this.videoTrack.samples = this.videoTrack.samples.filter(sample => {
      return sample.dts >= _firstVideoSample.dts && (this.lastVideoDts === undefined || sample.dts > this.lastVideoDts);
    });
  }

  getStreamChangeStart(sample) {
    if (sample.options && sample.options.start) {
      return sample.options.start - this.dtsBase;
    }
    return Infinity;
  }

  static sortAudioSamples(samples) {
    if (samples.length === 1) {
      return samples;
    }

    return samples.sort((a, b) => {
      return a.dts - b.dts;
    });
  }

  /**
   * 寻找dts最小的sample
   * @param samples
   */
  static findFirstAudioSample(samples) {
    if (!samples || samples.length === 0) {
      return null;
    }

    return Compatibility.sortAudioSamples(samples)[0];
  }

  static findFirstVideoSample(samples) {
    if (!samples.length) {
      return null;
    }

    const sorted = samples.sort((a, b) => {
      return a.dts - b.dts;
    });

    for (let i = 0, len = sorted.length; i < len; i++) {
      if (sorted[i].isKeyframe) {
        return sorted[i];
      }
    }
  }

  static detectLargeGap(nextDts, firstSample) {
    if (nextDts === null) {
      return;
    }
    const curDts = firstSample.dts || 0;
    const cond1 = nextDts - curDts >= 1000 || curDts - nextDts >= 1000; // fix hls流出现大量流dts间距问题
    const cond2 = firstSample.options && firstSample.options.discontinue;

    return cond1 || cond2;
  }

  static doFixLargeGap(samples, gap) {
    for (let i = 0, len = samples.length; i < len; i++) {
      const sample = samples[i];
      sample.dts += gap;
      if (sample.pts) {
        sample.pts += gap;
      }
    }
  }

  /**
   * 中途换流
   */
  static detactChangeStream(samples) {
    let changed = false;
    let changedIdx = -1;
    for (let i = 0, len = samples.length; i < len; i++) {
      if (samples[i].options && samples[i].options.meta) {
        changed = true;
        changedIdx = i;
        break;
      }
    }

    return {
      changed,
      changedIdx
    };
  }

  get tracks() {
    return this._context.getInstance('TRACKS');
  }

  get audioTrack() {
    if (this.tracks) {
      return this.tracks.audioTrack;
    }
    return null;
  }

  get videoTrack() {
    if (this.tracks) {
      return this.tracks.videoTrack;
    }
    return null;
  }

  get dtsBase() {
    const remuxer = this._context.getInstance('MP4_REMUXER');
    if (remuxer) {
      return remuxer._dtsBase;
    }
    return 0;
  }
}
exports.default = Compatibility;

/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/golomb.js":
/*!****************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/golomb.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Golomb {
  constructor(uint8array) {
    this.TAG = 'Golomb';
    this._buffer = uint8array;
    this._bufferIndex = 0;
    this._totalBytes = uint8array.byteLength;
    this._totalBits = uint8array.byteLength * 8;
    this._currentWord = 0;
    this._currentWordBitsLeft = 0;
  }

  destroy() {
    this._buffer = null;
  }

  _fillCurrentWord() {
    let bufferBytesLeft = this._totalBytes - this._bufferIndex;
    if (bufferBytesLeft <= 0) {
      // TODO 异常处理
    }

    let bytesRead = Math.min(4, bufferBytesLeft);
    let word = new Uint8Array(4);
    word.set(this._buffer.subarray(this._bufferIndex, this._bufferIndex + bytesRead));
    this._currentWord = new DataView(word.buffer).getUint32(0);

    this._bufferIndex += bytesRead;
    this._currentWordBitsLeft = bytesRead * 8;
  }

  readBits(size) {
    let bits = Math.min(this._currentWordBitsLeft, size); // :uint
    let valu = this._currentWord >>> 32 - bits;
    if (size > 32) {
      throw new Error('Cannot read more than 32 bits at a time');
    }
    this._currentWordBitsLeft -= bits;
    if (this._currentWordBitsLeft > 0) {
      this._currentWord <<= bits;
    } else if (this._totalBytes - this._bufferIndex > 0) {
      this._fillCurrentWord();
    }

    bits = size - bits;
    if (bits > 0 && this._currentWordBitsLeft) {
      return valu << bits | this.readBits(bits);
    } else {
      return valu;
    }
  }

  readBool() {
    return this.readBits(1) === 1;
  }

  readByte() {
    return this.readBits(8);
  }

  _skipLeadingZero() {
    let zeroCount;
    for (zeroCount = 0; zeroCount < this._currentWordBitsLeft; zeroCount++) {
      if ((this._currentWord & 0x80000000 >>> zeroCount) !== 0) {
        this._currentWord <<= zeroCount;
        this._currentWordBitsLeft -= zeroCount;
        return zeroCount;
      }
    }
    this._fillCurrentWord();
    return zeroCount + this._skipLeadingZero();
  }

  readUEG() {
    // unsigned exponential golomb
    let leadingZeros = this._skipLeadingZero();
    return this.readBits(leadingZeros + 1) - 1;
  }

  readSEG() {
    // signed exponential golomb
    let value = this.readUEG();
    if (value & 0x01) {
      return value + 1 >>> 1;
    } else {
      return -1 * (value >>> 1);
    }
  }
}

exports.default = Golomb;

/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/index.js":
/*!***************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sps = __webpack_require__(/*! ./sps */ "../xgplayer-codec/src/h264/nalunit/sps.js");

var _sps2 = _interopRequireDefault(_sps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Nalunit {
  static getNalunits(buffer) {
    if (buffer.length - buffer.position < 4) {
      return [];
    }

    let buf = buffer.dataview;
    let position = buffer.position;
    if (buf.getInt32(position) === 1 || buf.getInt16(position) === 0 && buf.getInt8(position + 2) === 1) {
      return Nalunit.getAnnexbNals(buffer);
    } else {
      return Nalunit.getAvccNals(buffer);
    }
  }

  static getAnnexbNals(buffer) {
    let nals = [];
    let position = Nalunit.getHeaderPositionAnnexB(buffer);
    let start = position.pos;
    let end = start;
    while (start < buffer.length - 4) {
      let header = buffer.buffer.slice(start, start + position.headerLength);
      if (position.pos === buffer.position) {
        buffer.skip(position.headerLength);
      }
      position = Nalunit.getHeaderPositionAnnexB(buffer);
      end = position.pos;
      let body = new Uint8Array(buffer.buffer.slice(start + header.byteLength, end));
      let unit = { header, body };
      Nalunit.analyseNal(unit);
      nals.push(unit);
      buffer.skip(end - buffer.position);
      start = end;
    }
    return nals;
  }

  static getAvccNals(buffer) {
    let nals = [];
    while (buffer.position < buffer.length - 4) {
      let length = buffer.dataview.getInt32(buffer.position);
      if (buffer.length - buffer.position >= length) {
        let header = buffer.buffer.slice(buffer.position, buffer.position + 4);
        buffer.skip(4);
        let body = buffer.buffer.slice(buffer.position, buffer.position + length);
        buffer.skip(length);
        let unit = { header, body };
        Nalunit.analyseNal(unit);
        nals.push(unit);
      } else {
        break;
      }
    }
    return nals;
  }

  static analyseNal(unit) {
    let type = unit.body[0] & 0x1f;
    switch (type) {
      case 1:
        // NDR
        unit.ndr = true;
        break;
      case 5:
        // IDR
        unit.idr = true;
        break;
      case 6:
        // SEI
        break;
      case 7:
        // SPS
        unit.sps = _sps2.default.parseSPS(unit.body);
        break;
      case 8:
        // PPS
        unit.pps = true;
        break;
      case 9:
        // AUD
        break;
      default:
        break;
    }
  }

  static getHeaderPositionAnnexB(buffer) {
    // seperate
    let pos = buffer.position;
    let headerLength = 0;
    while (headerLength !== 3 && headerLength !== 4 && pos < buffer.length - 4) {
      if (buffer.dataview.getInt16(pos) === 0) {
        if (buffer.dataview.getInt16(pos + 2) === 1) {
          // 0x000001
          headerLength = 4;
        } else if (buffer.dataview.getInt8(pos + 2) === 1) {
          headerLength = 3;
        } else {
          pos++;
        }
      } else {
        pos++;
      }
    }

    if (pos === buffer.length - 4) {
      if (buffer.dataview.getInt16(pos) === 0) {
        if (buffer.dataview.getInt16(pos + 2) === 1) {
          // 0x000001
          headerLength = 4;
        }
      } else {
        pos++;
        if (buffer.dataview.getInt16(pos) === 0 && buffer.dataview.getInt8(pos) === 1) {
          // 0x0000001
          headerLength = 3;
        } else {
          pos = buffer.length;
        }
      }
    }
    return { pos, headerLength };
  }

  static getAvcc(sps, pps) {
    let ret = new Uint8Array(sps.byteLength + pps.byteLength + 11);
    ret[0] = 0x01;
    ret[1] = sps[1];
    ret[2] = sps[2];
    ret[3] = sps[3];
    ret[4] = 255;
    ret[5] = 225;

    let offset = 6;

    ret.set(new Uint8Array([sps.byteLength >>> 8 & 0xff, sps.byteLength & 0xff]), offset);
    offset += 2;
    ret.set(sps, offset);
    offset += sps.byteLength;

    ret[offset] = 1;
    offset++;

    ret.set(new Uint8Array([pps.byteLength >>> 8 & 0xff, pps.byteLength & 0xff]), offset);
    offset += 2;
    ret.set(pps, offset);
    return ret;
  }
}

exports.default = Nalunit;

/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/sps.js":
/*!*************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/sps.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _golomb = __webpack_require__(/*! ./golomb */ "../xgplayer-codec/src/h264/nalunit/golomb.js");

var _golomb2 = _interopRequireDefault(_golomb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SPSParser {
  static _ebsp2rbsp(uint8array) {
    let src = uint8array;
    let srcLength = src.byteLength;
    let dst = new Uint8Array(srcLength);
    let dstIdx = 0;

    for (let i = 0; i < srcLength; i++) {
      if (i >= 2) {
        if (src[i] === 0x03 && src[i - 1] === 0x00 && src[i - 2] === 0x00) {
          continue;
        }
      }
      dst[dstIdx] = src[i];
      dstIdx++;
    }

    return new Uint8Array(dst.buffer, 0, dstIdx);
  }

  static parseSPS(uint8array) {
    let rbsp = SPSParser._ebsp2rbsp(uint8array);
    let gb = new _golomb2.default(rbsp);

    gb.readByte();
    let profileIdc = gb.readByte();
    gb.readByte();
    let levelIdc = gb.readByte();
    gb.readUEG();

    let profile_string = SPSParser.getProfileString(profileIdc);
    let level_string = SPSParser.getLevelString(levelIdc);
    let chroma_format_idc = 1;
    let chroma_format = 420;
    let chroma_format_table = [0, 420, 422, 444];
    let bit_depth = 8;

    if (profileIdc === 100 || profileIdc === 110 || profileIdc === 122 || profileIdc === 244 || profileIdc === 44 || profileIdc === 83 || profileIdc === 86 || profileIdc === 118 || profileIdc === 128 || profileIdc === 138 || profileIdc === 144) {
      chroma_format_idc = gb.readUEG();
      if (chroma_format_idc === 3) {
        gb.readBits(1);
      }
      if (chroma_format_idc <= 3) {
        chroma_format = chroma_format_table[chroma_format_idc];
      }

      bit_depth = gb.readUEG() + 8;
      gb.readUEG();
      gb.readBits(1);
      if (gb.readBool()) {
        let scaling_list_count = chroma_format_idc !== 3 ? 8 : 12;
        for (let i = 0; i < scaling_list_count; i++) {
          if (gb.readBool()) {
            if (i < 6) {
              SPSParser._skipScalingList(gb, 16);
            } else {
              SPSParser._skipScalingList(gb, 64);
            }
          }
        }
      }
    }
    gb.readUEG();
    let pic_order_cnt_type = gb.readUEG();
    if (pic_order_cnt_type === 0) {
      gb.readUEG();
    } else if (pic_order_cnt_type === 1) {
      gb.readBits(1);
      gb.readSEG();
      gb.readSEG();
      let num_ref_frames_in_pic_order_cnt_cycle = gb.readUEG();
      for (let i = 0; i < num_ref_frames_in_pic_order_cnt_cycle; i++) {
        gb.readSEG();
      }
    }
    gb.readUEG();
    gb.readBits(1);

    let pic_width_in_mbs_minus1 = gb.readUEG();
    let pic_height_in_map_units_minus1 = gb.readUEG();

    let frame_mbs_only_flag = gb.readBits(1);
    if (frame_mbs_only_flag === 0) {
      gb.readBits(1);
    }
    gb.readBits(1);

    let frame_crop_left_offset = 0;
    let frame_crop_right_offset = 0;
    let frame_crop_top_offset = 0;
    let frame_crop_bottom_offset = 0;

    let frame_cropping_flag = gb.readBool();
    if (frame_cropping_flag) {
      frame_crop_left_offset = gb.readUEG();
      frame_crop_right_offset = gb.readUEG();
      frame_crop_top_offset = gb.readUEG();
      frame_crop_bottom_offset = gb.readUEG();
    }

    let par_width = 1,
        par_height = 1;
    let fps = 0,
        fps_fixed = true,
        fps_num = 0,
        fps_den = 0;

    let vui_parameters_present_flag = gb.readBool();
    if (vui_parameters_present_flag) {
      if (gb.readBool()) {
        // aspect_ratio_info_present_flag
        let aspect_ratio_idc = gb.readByte();
        let par_w_table = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2];
        let par_h_table = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];

        if (aspect_ratio_idc > 0 && aspect_ratio_idc < 16) {
          par_width = par_w_table[aspect_ratio_idc - 1];
          par_height = par_h_table[aspect_ratio_idc - 1];
        } else if (aspect_ratio_idc === 255) {
          par_width = gb.readByte() << 8 | gb.readByte();
          par_height = gb.readByte() << 8 | gb.readByte();
        }
      }

      if (gb.readBool()) {
        gb.readBool();
      }
      if (gb.readBool()) {
        gb.readBits(4);
        if (gb.readBool()) {
          gb.readBits(24);
        }
      }
      if (gb.readBool()) {
        gb.readUEG();
        gb.readUEG();
      }
      if (gb.readBool()) {
        let num_units_in_tick = gb.readBits(32);
        let time_scale = gb.readBits(32);
        fps_fixed = gb.readBool();

        fps_num = time_scale;
        fps_den = num_units_in_tick * 2;
        fps = fps_num / fps_den;
      }
    }

    let parScale = 1;
    if (par_width !== 1 || par_height !== 1) {
      parScale = par_width / par_height;
    }

    let crop_unit_x = 0,
        crop_unit_y = 0;
    if (chroma_format_idc === 0) {
      crop_unit_x = 1;
      crop_unit_y = 2 - frame_mbs_only_flag;
    } else {
      let sub_wc = chroma_format_idc === 3 ? 1 : 2;
      let sub_hc = chroma_format_idc === 1 ? 2 : 1;
      crop_unit_x = sub_wc;
      crop_unit_y = sub_hc * (2 - frame_mbs_only_flag);
    }

    let codec_width = (pic_width_in_mbs_minus1 + 1) * 16;
    let codec_height = (2 - frame_mbs_only_flag) * ((pic_height_in_map_units_minus1 + 1) * 16);

    codec_width -= (frame_crop_left_offset + frame_crop_right_offset) * crop_unit_x;
    codec_height -= (frame_crop_top_offset + frame_crop_bottom_offset) * crop_unit_y;

    let present_width = Math.ceil(codec_width * parScale);

    gb.destroy();
    gb = null;

    return {
      profile_string: profile_string,
      level_string: level_string,
      bit_depth: bit_depth,
      chroma_format: chroma_format,
      chroma_format_string: SPSParser.getChromaFormatString(chroma_format),

      frame_rate: {
        fixed: fps_fixed,
        fps: fps,
        fps_den: fps_den,
        fps_num: fps_num
      },

      par_ratio: {
        width: par_width,
        height: par_height
      },

      codec_size: {
        width: codec_width,
        height: codec_height
      },

      present_size: {
        width: present_width,
        height: codec_height
      }
    };
  }

  static _skipScalingList(gb, count) {
    let last_scale = 8,
        next_scale = 8;
    let delta_scale = 0;
    for (let i = 0; i < count; i++) {
      if (next_scale !== 0) {
        delta_scale = gb.readSEG();
        next_scale = (last_scale + delta_scale + 256) % 256;
      }
      last_scale = next_scale === 0 ? last_scale : next_scale;
    }
  }

  static getProfileString(profileIdc) {
    switch (profileIdc) {
      case 66:
        return 'Baseline';
      case 77:
        return 'Main';
      case 88:
        return 'Extended';
      case 100:
        return 'High';
      case 110:
        return 'High10';
      case 122:
        return 'High422';
      case 244:
        return 'High444';
      default:
        return 'Unknown';
    }
  }

  static getLevelString(levelIdc) {
    return (levelIdc / 10).toFixed(1);
  }

  static getChromaFormatString(chroma) {
    switch (chroma) {
      case 420:
        return '4:2:0';
      case 422:
        return '4:2:2';
      case 444:
        return '4:4:4';
      default:
        return 'Unknown';
    }
  }

  static toVideoMeta(spsConfig) {
    let meta = {};
    if (spsConfig && spsConfig.codec_size) {
      meta.codecWidth = spsConfig.codec_size.width;
      meta.codecHeight = spsConfig.codec_size.height;
      meta.presentWidth = spsConfig.present_size.width;
      meta.presentHeight = spsConfig.present_size.height;
    }

    meta.profile = spsConfig.profile_string;
    meta.level = spsConfig.level_string;
    meta.bitDepth = spsConfig.bit_depth;
    meta.chromaFormat = spsConfig.chroma_format;

    meta.parRatio = {
      width: spsConfig.par_ratio.width,
      height: spsConfig.par_ratio.height
    };

    meta.frameRate = spsConfig.frame_rate;

    let fpsDen = meta.frameRate.fps_den;
    let fpsNum = meta.frameRate.fps_num;
    meta.refSampleDuration = Math.floor(meta.timescale * (fpsDen / fpsNum));
    return meta;
  }
} /* eslint-disable camelcase  */
/* eslint-disable one-var  */
exports.default = SPSParser;

/***/ }),

/***/ "../xgplayer-demux/index.js":
/*!**********************************!*\
  !*** ../xgplayer-demux/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  // HLS
  M3U8Parser: __webpack_require__(/*! ./src/hls/demuxer/m3u8parser */ "../xgplayer-demux/src/hls/demuxer/m3u8parser.js").default,
  TsDemuxer: __webpack_require__(/*! ./src/hls/demuxer/ts */ "../xgplayer-demux/src/hls/demuxer/ts.js").default,
  Playlist: __webpack_require__(/*! ./src/hls/playlist */ "../xgplayer-demux/src/hls/playlist.js").default,
  FlvDemuxer: __webpack_require__(/*! ./src/flv/index */ "../xgplayer-demux/src/flv/index.js").default
};

/***/ }),

/***/ "../xgplayer-demux/src/flv/amf-parser.js":
/*!***********************************************!*\
  !*** ../xgplayer-demux/src/flv/amf-parser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

const DATA_TYPES = {
  NUMBER: 0,
  BOOLEAN: 1,
  STRING: 2,
  OBJECT: 3,
  MIX_ARRAY: 8,
  OBJECT_END: 9,
  STRICT_ARRAY: 10,
  DATE: 11,
  LONE_STRING: 12

  /**
   * meta信息解析
   */
};class AMFParser {
  constructor() {
    this.offset = 0;
    this.readOffset = this.offset;
  }

  resolve(meta, size) {
    if (size < 3) {
      throw new Error('not enough data for metainfo');
    }
    const metaData = {};
    const name = this.parseValue(meta);
    const value = this.parseValue(meta, size - name.bodySize);
    metaData[name.data] = value.data;

    this.resetStatus();
    return metaData;
  }

  resetStatus() {
    this.offset = 0;
    this.readOffset = this.offset;
  }

  parseString(buffer) {
    const dv = new DataView(buffer, this.readOffset);
    const strLen = dv.getUint16(0, !_xgplayerUtils.isLe);
    let str = '';
    if (strLen > 0) {
      str = _xgplayerUtils.UTF8.decode(new Uint8Array(buffer, this.readOffset + 2, strLen));
    } else {
      str = '';
    }
    let size = strLen + 2;
    this.readOffset += size;
    return {
      data: str,
      bodySize: strLen + 2
    };
  }

  parseDate(buffer, size) {
    const dv = new DataView(buffer, this.readOffset, size);
    let ts = dv.getFloat64(0, !_xgplayerUtils.isLe);
    const timeOffset = dv.getInt16(8, !_xgplayerUtils.isLe);
    ts += timeOffset * 60 * 1000;

    this.readOffset += 10;
    return {
      data: new Date(ts),
      bodySize: 10
    };
  }

  parseObject(buffer, size) {
    const name = this.parseString(buffer, size);
    const value = this.parseValue(buffer, size - name.bodySize);
    return {
      data: {
        name: name.data,
        value: value.data
      },
      bodySize: name.bodySize + value.bodySize,
      isObjEnd: value.isObjEnd
    };
  }

  parseLongString(buffer) {
    const dv = new DataView(buffer, this.readOffset);
    const strLen = dv.getUint32(0, !_xgplayerUtils.isLe);
    let str = '';
    if (strLen > 0) {
      str = _xgplayerUtils.UTF8.decode(new Uint8Array(buffer, this.readOffset + 2, strLen));
    } else {
      str = '';
    }
    // const size = strLen + 4;
    this.readOffset += strLen + 4;
    return {
      data: str,
      bodySize: strLen + 4
    };
  }

  /**
   * 解析meta中的变量
   */
  parseValue(data, size) {
    let buffer = new ArrayBuffer();
    if (data instanceof ArrayBuffer) {
      buffer = data;
    } else {
      buffer = data.buffer;
    }
    const {
      NUMBER,
      BOOLEAN,
      STRING,
      OBJECT,
      MIX_ARRAY,
      OBJECT_END,
      STRICT_ARRAY,
      DATE,
      LONE_STRING
    } = DATA_TYPES;
    const dataView = new DataView(buffer, this.readOffset, size);
    let isObjEnd = false;
    const type = dataView.getUint8(0);
    let offset = 1;
    this.readOffset += 1;
    let value = null;

    switch (type) {
      case NUMBER:
        {
          value = dataView.getFloat64(1, !_xgplayerUtils.isLe);
          this.readOffset += 8;
          offset += 8;
          break;
        }
      case BOOLEAN:
        {
          const boolNum = dataView.getUint8(1);
          value = !!boolNum;
          this.readOffset += 1;
          offset += 1;
          break;
        }
      case STRING:
        {
          const str = this.parseString(buffer);
          value = str.data;
          offset += str.bodySize;
          break;
        }
      case OBJECT:
        {
          value = {};
          let objEndSize = 0;
          if (dataView.getUint32(size - 4, !_xgplayerUtils.isLe) & 0x00FFFFFF) {
            objEndSize = 3;
          }
          // this.readOffset += offset - 1;
          while (offset < size - 4) {
            const amfObj = this.parseObject(buffer, size - offset - objEndSize);
            if (amfObj.isObjectEnd) {
              break;
            }
            value[amfObj.data.name] = amfObj.data.value;
            offset += amfObj.bodySize;
          }
          if (offset <= size - 3) {
            const mark = dataView.getUint32(offset - 1, !_xgplayerUtils.isLe) & 0x00FFFFFF;
            if (mark === 9) {
              this.readOffset += 3;
              offset += 3;
            }
          }
          break;
        }
      case MIX_ARRAY:
        {
          value = {};
          offset += 4;
          this.readOffset += 4;
          let objEndSize = 0;
          if ((dataView.getUint32(size - 4, !_xgplayerUtils.isLe) & 0x00FFFFFF) === 9) {
            objEndSize = 3;
          }

          while (offset < size - 8) {
            const amfVar = this.parseObject(buffer, size - offset - objEndSize);
            if (amfVar.isObjectEnd) {
              break;
            }
            value[amfVar.data.name] = amfVar.data.value;
            offset += amfVar.bodySize;
          }
          if (offset <= size - 3) {
            const marker = dataView.getUint32(offset - 1, !_xgplayerUtils.isLe) & 0x00FFFFFF;
            if (marker === 9) {
              offset += 3;
              this.readOffset += 3;
            }
          }
          break;
        }

      case OBJECT_END:
        {
          value = null;
          isObjEnd = true;
          break;
        }

      case STRICT_ARRAY:
        {
          value = [];
          const arrLength = dataView.getUint32(1, !_xgplayerUtils.isLe);
          offset += 4;
          this.readOffset += 4;
          for (let i = 0; i < arrLength; i++) {
            const script = this.parseValue(buffer, size - offset);
            value.push(script.data);
            offset += script.bodySize;
          }
          break;
        }

      case DATE:
        {
          const date = this.parseDate(buffer, size - 1);
          value = date.data;
          offset += date.bodySize;
          break;
        }

      case LONE_STRING:
        {
          const longStr = this.parseLongString(buffer, size - 1);
          value = longStr.data;
          offset += longStr.bodySize;
          break;
        }

      default:
        {
          offset = size;
        }
    }

    return {
      data: value,
      bodySize: offset,
      isObjEnd: isObjEnd
    };
  }
}
exports.default = AMFParser;

/***/ }),

/***/ "../xgplayer-demux/src/flv/index.js":
/*!******************************************!*\
  !*** ../xgplayer-demux/src/flv/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _xgplayerCodec = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");

var _xgplayerBuffer = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");

var _amfParser = __webpack_require__(/*! ./amf-parser */ "../xgplayer-demux/src/flv/amf-parser.js");

var _amfParser2 = _interopRequireDefault(_amfParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEMUX_EVENTS = _xgplayerUtils.EVENTS.DEMUX_EVENTS;

class FlvDemuxer {
  constructor() {
    this._firstFragmentLoaded = false;
    this._trackNum = 0;
    this._hasScript = false;
  }

  init() {
    this.on(DEMUX_EVENTS.DEMUX_START, this.doParseFlv.bind(this));
  }

  /**
   * if the flv head is valid
   * @param data
   * @returns {boolean}
   */
  static isFlvFile(data) {
    return !(data[0] !== 0x46 || data[1] !== 0x4C || data[2] !== 0x56 || data[3] !== 0x01);
  }

  /**
   * If the stream has audio or video.
   * @param {number} streamFlag - Data from the stream which is define whether the audio / video track is exist.
   */
  static getPlayType(streamFlag) {
    const result = {
      hasVideo: false,
      hasAudio: false
    };

    if (streamFlag & 0x01 > 0) {
      result.hasVideo = true;
    }

    if (streamFlag & 0x04 > 0) {
      result.hasAudio = true;
    }

    return result;
  }

  doParseFlv() {
    if (!this._firstFragmentLoaded) {
      if (this.loaderBuffer.length < 13) {
        return;
      }
      const header = this.loaderBuffer.shift(13);
      this.parseFlvHeader(header);
      this.doParseFlv(); // 递归调用，继续解析flv流
    } else {
      if (this.loaderBuffer.length < 11) {
        return;
      }
      let chunk;

      let loopMax = 100000; // 防止死循环产生
      do {
        chunk = this._parseFlvTag();
      } while (chunk && loopMax-- > 0);

      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE);
    }
  }

  parseFlvHeader(header) {
    if (!FlvDemuxer.isFlvFile(header)) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('invalid flv file'));
      this.doParseFlv();
    } else {
      this._firstFragmentLoaded = true;
      const playType = FlvDemuxer.getPlayType(header[4]);

      if (playType.hasVideo) {
        this.initVideoTrack();
      }

      if (playType.hasAudio) {
        this.initAudioTrack();
      }
    }
    this.doParseFlv();
  }

  /**
   * init default video track configs
   */
  initVideoTrack() {
    this._trackNum++;
    let videoTrack = new _xgplayerBuffer.VideoTrack();
    videoTrack.meta = new _xgplayerUtils.VideoTrackMeta();
    videoTrack.id = videoTrack.meta.id = this._trackNum;

    this.tracks.videoTrack = videoTrack;
  }

  /**
   * init default audio track configs
   */
  initAudioTrack() {
    this._trackNum++;
    let audioTrack = new _xgplayerBuffer.AudioTrack();
    audioTrack.meta = new _xgplayerUtils.AudioTrackMeta();
    audioTrack.id = audioTrack.meta.id = this._trackNum;

    this.tracks.audioTrack = audioTrack;
  }

  /**
   * Package the data as the following data structure
   * {
   *    data: Uint8Array. the Stream data.
   *    info: The first byte info of the Tag.
   *    tagType: 8、9、18
   *    timeStamp: the timestemp
   * }
   */
  _parseFlvTag() {
    if (this.loaderBuffer.length < 11) {
      return null;
    }
    let chunk = this._parseFlvTagHeader();
    if (chunk) {
      this._processChunk(chunk);
    }
    return chunk;
  }

  /**
   * Parse the 11 byte tag Header
   */
  _parseFlvTagHeader() {
    let offset = 0;
    let chunk = {};

    let tagType = this.loaderBuffer.toInt(offset, 1);
    offset += 1;

    // 2 bit FMS reserved, 1 bit filtered, 5 bit tag type
    chunk.filtered = (tagType & 32) >>> 5;
    chunk.tagType = tagType & 31;

    // 3 Byte datasize
    chunk.datasize = this.loaderBuffer.toInt(offset, 3);
    offset += 3;

    if (chunk.tagType !== 8 && chunk.tagType !== 9 && chunk.tagType !== 11 && chunk.tagType !== 18 || this.loaderBuffer.toInt(8, 3) !== 0) {
      if (this.loaderBuffer && this.loaderBuffer.length > 0) {
        this.loaderBuffer.shift(1);
      }
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error('tagType ' + chunk.tagType), false);
      return null;
    }

    if (this.loaderBuffer.length < chunk.datasize + 15) {
      return null;
    }

    // read the data.
    this.loaderBuffer.shift(4);

    // 3 Byte timestamp
    let timestamp = this.loaderBuffer.toInt(0, 3);
    this.loaderBuffer.shift(3);

    // 1 Byte timestampExt
    let timestampExt = this.loaderBuffer.shift(1)[0];
    if (timestampExt > 0) {
      timestamp += timestampExt * 0x1000000;
    }

    chunk.dts = timestamp;

    // streamId
    this.loaderBuffer.shift(3);
    return chunk;
  }

  _processChunk(chunk) {
    switch (chunk.tagType) {
      case 18:
        this._parseScriptData(chunk);
        break;
      case 8:
        this._parseAACData(chunk);
        break;
      case 9:
        this._parseHevcData(chunk);
        break;
      case 11:
        // for some CDN that did not process the currect RTMP messages
        this.loaderBuffer.shift(3);
        break;
      default:
        this.loaderBuffer.shift(1);
    }
  }

  /**
   * parse flv script data
   * @param chunk
   * @private
   */
  _parseScriptData(chunk) {
    let audioTrack = this.tracks.audioTrack;
    let videoTrack = this.tracks.videoTrack;

    let data = this.loaderBuffer.shift(chunk.datasize);

    const info = new _amfParser2.default().resolve(data, data.length);

    const onMetaData = this._context.onMetaData = info ? info.onMetaData : undefined;

    // fill mediaInfo
    this._context.mediaInfo.duration = onMetaData.duration;
    this._context.mediaInfo.hasVideo = onMetaData.hasVideo;
    this._context.mediaInfo.hsaAudio = onMetaData.hasAudio;

    let validate = this._datasizeValidator(chunk.datasize);
    if (validate) {
      this.emit(DEMUX_EVENTS.MEDIA_INFO);
      this._hasScript = true;
    }

    // Edit default meta.
    if (audioTrack && !audioTrack.hasSpecificConfig) {
      let meta = audioTrack.meta;
      if (onMetaData.audiosamplerate) {
        meta.sampleRate = onMetaData.audiosamplerate;
      }

      if (onMetaData.audiochannels) {
        meta.channelCount = onMetaData.audiochannels;
      }

      switch (onMetaData.audiosamplerate) {
        case 44100:
          meta.sampleRateIndex = 4;
          break;
        case 22050:
          meta.sampleRateIndex = 7;
          break;
        case 11025:
          meta.sampleRateIndex = 10;
          break;
      }
    }
    if (videoTrack && !videoTrack.hasSpecificConfig) {
      let meta = videoTrack.meta;
      if (typeof onMetaData.framerate === 'number') {
        let fpsNum = Math.floor(onMetaData.framerate * 1000);
        if (fpsNum > 0) {
          let fps = fpsNum / 1000;
          if (!meta.frameRate) {
            meta.frameRate = {};
          }
          meta.frameRate.fixed = true;
          meta.frameRate.fps = fps;
          meta.frameRate.fps_num = fpsNum;
          meta.frameRate.fps_den = 1000;
        }
      }
    }
  }

  _aacSequenceHeaderParser(data) {
    let ret = {};
    ret.hasSpecificConfig = true;
    ret.objectType = data[1] >>> 3;
    ret.sampleRateIndex = (data[1] & 7) << 1 | data[2] >>> 7;
    ret.audiosamplerate = this._switchAudioSampleRate(ret.sampleRateIndex);
    ret.channelCount = (data[2] & 120) >>> 3;
    ret.frameLength = (data[2] & 4) >>> 2;
    ret.dependsOnCoreCoder = (data[2] & 2) >>> 1;
    ret.extensionFlagIndex = data[2] & 1;

    ret.codec = `mp4a.40.${ret.objectType}`;
    let userAgent = window.navigator.userAgent.toLowerCase();
    let extensionSamplingIndex;

    let config;
    let samplingIndex = ret.sampleRateIndex;

    if (userAgent.indexOf('firefox') !== -1) {
      // firefox: use SBR (HE-AAC) if freq less than 24kHz
      if (ret.sampleRateIndex >= 6) {
        ret.objectType = 5;
        config = new Array(4);
        extensionSamplingIndex = samplingIndex - 3;
      } else {
        // use LC-AAC
        ret.objectType = 2;
        config = new Array(2);
        extensionSamplingIndex = samplingIndex;
      }
    } else if (userAgent.indexOf('android') !== -1) {
      // android: always use LC-AAC
      ret.objectType = 2;
      config = new Array(2);
      extensionSamplingIndex = samplingIndex;
    } else {
      // for other browsers, e.g. chrome...
      // Always use HE-AAC to make it easier to switch aac codec profile
      ret.objectType = 5;
      extensionSamplingIndex = ret.sampleRateIndex;
      config = new Array(4);

      if (ret.sampleRateIndex >= 6) {
        extensionSamplingIndex = ret.sampleRateIndex - 3;
      } else if (ret.channelCount === 1) {
        // Mono channel
        ret.objectType = 2;
        config = new Array(2);
        extensionSamplingIndex = ret.sampleRateIndex;
      }
    }

    config[0] = ret.objectType << 3;
    config[0] |= (ret.sampleRateIndex & 0x0F) >>> 1;
    config[1] = (ret.sampleRateIndex & 0x0F) << 7;
    config[1] |= (ret.channelCount & 0x0F) << 3;
    if (ret.objectType === 5) {
      config[1] |= (extensionSamplingIndex & 0x0F) >>> 1;
      config[2] = (extensionSamplingIndex & 0x01) << 7;
      // extended audio object type: force to 2 (LC-AAC)
      config[2] |= 2 << 2;
      config[3] = 0;
    }
    ret.config = config;
    return ret;
  }

  _parseAACData(chunk) {
    let track = this.tracks.audioTrack;
    if (!track) {
      return;
    }

    let meta = track.meta;

    if (!meta) {
      track.meta = new _xgplayerUtils.AudioTrackMeta();
      meta = track.meta;
    }

    let info = this.loaderBuffer.shift(1)[0];

    chunk.data = this.loaderBuffer.shift(chunk.datasize - 1);

    let format = (info & 240) >>> 4;

    track.format = format;

    if (format !== 10) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error(`invalid audio format: ${format}`));
    }

    if (format === 10 && !this._hasAudioSequence) {
      meta.sampleRate = this._switchAudioSamplingFrequency(info);
      meta.sampleRateIndex = (info & 12) >>> 2;
      meta.frameLenth = (info & 2) >>> 1;
      meta.channelCount = info & 1;
      meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale);
    }

    let audioSampleRate = meta.audioSampleRate;
    let audioSampleRateIndex = meta.sampleRateIndex;
    let refSampleDuration = meta.refSampleDuration;

    delete chunk.tagType;
    let validate = this._datasizeValidator(chunk.datasize);

    if (chunk.data[0] === 0) {
      // AAC Sequence Header
      let aacHeader = this._aacSequenceHeaderParser(chunk.data);
      audioSampleRate = aacHeader.audiosamplerate || meta.audioSampleRate;
      audioSampleRateIndex = aacHeader.sampleRateIndex || meta.sampleRateIndex;
      refSampleDuration = Math.floor(1024 / audioSampleRate * meta.timescale);

      meta.channelCount = aacHeader.channelCount;
      meta.sampleRate = audioSampleRate;
      meta.sampleRateIndex = audioSampleRateIndex;
      meta.refSampleDuration = refSampleDuration;
      meta.duration = this._context.mediaInfo.duration * meta.timescale;
      meta.config = aacHeader.config;
      meta.objectType = aacHeader.objectType;

      const audioMedia = this._context.mediaInfo.audio;

      // fill audio media info
      audioMedia.codec = aacHeader.codec;
      audioMedia.channelCount = aacHeader.channelCount;
      audioMedia.sampleRate = audioSampleRate;
      audioMedia.sampleRateIndex = aacHeader.audioSampleRateIndex;

      if (this._hasScript && !this._hasAudioSequence) {
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
      } else if (this._hasScript && this._hasAudioSequence) {
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
        this.emit(DEMUX_EVENTS.AUDIO_METADATA_CHANGE);
        // this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio')
      }
      this._hasAudioSequence = true;

      this._metaChange = true;
    } else {
      if (this._metaChange) {
        chunk.options = {
          meta: track.meta
        };
        this._metaChange = false;
      }

      chunk.data = chunk.data.slice(1, chunk.data.length);
      track.samples.push(chunk);
    }
    if (!validate) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error('TAG length error at ' + chunk.datasize), false);
      // this.logger.warn(this.TAG, error.message)
    }
  }

  /**
   * parse hevc/avc video data
   * @param chunk
   * @private
   */
  _parseHevcData(chunk) {
    // header
    let info = this.loaderBuffer.shift(1)[0];
    chunk.frameType = (info & 0xf0) >>> 4;
    chunk.isKeyframe = chunk.frameType === 1;
    // let tempCodecID = this.tracks.videoTrack.codecID
    let codecID = info & 0x0f;
    this.tracks.videoTrack.codecID = codecID;

    // hevc和avc的header解析方式一样
    chunk.avcPacketType = this.loaderBuffer.shift(1)[0];
    chunk.cts = this.loaderBuffer.toInt(0, 3);
    this.loaderBuffer.shift(3);

    // 12 for hevc, 7 for avc
    if (codecID === 12) {
      const data = this.loaderBuffer.shift(chunk.datasize - 5);
      chunk.data = data;

      if (Number.parseInt(chunk.avcPacketType) !== 0) {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
        }
        let nalu = {};
        let r = 0;
        nalu.cts = chunk.cts;
        nalu.dts = chunk.dts;
        while (chunk.data.length > r) {
          let sizes = chunk.data.slice(Number.parseInt(r), 4 + r);
          nalu.size = sizes[3];
          nalu.size += sizes[2] * 256;
          nalu.size += sizes[1] * 256 * 256;
          nalu.size += sizes[0] * 256 * 256 * 256;
          r += 4;
          nalu.data = chunk.data.slice(Number.parseInt(r), nalu.size + r);
          r += nalu.size;
          this.tracks.videoTrack.samples.push(nalu);
          this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
        }
      } else if (Number.parseInt(chunk.avcPacketType) === 0) {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
        } else {
          this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
        }
      }
    } else if (codecID === 7) {
      let data = this.loaderBuffer.shift(chunk.datasize - 5);
      if (data[4] === 0 && data[5] === 0 && data[6] === 0 && data[7] === 1) {
        let avcclength = 0;
        for (let i = 0; i < 4; i++) {
          avcclength = avcclength * 256 + data[i];
        }
        avcclength -= 4;
        data = data.slice(4, data.length);
        data[3] = avcclength % 256;
        avcclength = (avcclength - data[3]) / 256;
        data[2] = avcclength % 256;
        avcclength = (avcclength - data[2]) / 256;
        data[1] = avcclength % 256;
        data[0] = (avcclength - data[1]) / 256;
      }

      chunk.data = data;
      // If it is AVC sequece Header.
      if (chunk.avcPacketType === 0) {
        this._avcSequenceHeaderParser(chunk.data);
        let validate = this._datasizeValidator(chunk.datasize);
        if (validate) {
          if (this._hasScript && !this._hasVideoSequence) {
            this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
          } else if (this._hasScript && this._hasVideoSequence) {
            this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
            this.emit(DEMUX_EVENTS.VIDEO_METADATA_CHANGE);
            // this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video')
          }
          this._hasVideoSequence = true;
        }
        this._metaChange = true;
      } else {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
          return;
        }
        if (this._metaChange) {
          chunk.options = {
            meta: Object.assign({}, this.tracks.videoTrack.meta)
          };
          this._metaChange = false;
        }
        this.tracks.videoTrack.samples.push(chunk);
        // this.emit(DEMUX_EVENTS.DEMUX_COMPLETE)
      }
    } else {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`video codeid is ${codecID}`), false);
      chunk.data = this.loaderBuffer.shift(chunk.datasize - 1);
      if (!this._datasizeValidator(chunk.datasize)) {
        this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
      }
      this.tracks.videoTrack.samples.push(chunk);
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE);
    }
    delete chunk.tagType;
  }

  /**
   * parse avc metadata
   * @param data
   * @private
   */
  _avcSequenceHeaderParser(data) {
    let track = this.tracks.videoTrack;

    if (!track) {
      return;
    }

    let offset = 0;

    if (!track.meta) {
      track.meta = new _xgplayerUtils.VideoTrackMeta();
    }
    let meta = track.meta;

    meta.configurationVersion = data[0];
    meta.avcProfileIndication = data[1];
    meta.profileCompatibility = data[2];
    meta.avcLevelIndication = data[3] / 10;
    meta.nalUnitLength = (data[4] & 0x03) + 1;

    let numOfSps = data[5] & 0x1f;
    offset = 6;
    let config = {};

    // parse SPS
    for (let i = 0; i < numOfSps; i++) {
      let size = data[offset] * 255 + data[offset + 1];
      offset += 2;

      let sps = new Uint8Array(size);
      for (let j = 0; j < size; j++) {
        sps[j] = data[offset + j];
      }

      // codec string
      let codecString = 'avc1.';
      for (let j = 1; j < 4; j++) {
        let h = sps[j].toString(16);
        if (h.length < 2) {
          h = '0' + h;
        }
        codecString += h;
      }

      meta.codec = codecString;

      offset += size;
      this.tracks.videoTrack.meta.sps = sps;
      config = _xgplayerCodec.SpsParser.parseSPS(sps);
    }

    let numOfPps = data[offset];

    offset++;

    for (let i = 0; i < numOfPps; i++) {
      let size = data[offset] * 255 + data[offset + 1];
      offset += 2;
      let pps = new Uint8Array(size);
      for (let j = 0; j < size; j++) {
        pps[j] = data[offset + j];
      }
      offset += size;
      this.tracks.videoTrack.meta.pps = pps;
    }

    Object.assign(meta, _xgplayerCodec.SpsParser.toVideoMeta(config));

    // fill video media info
    const videoMedia = this._context.mediaInfo.video;

    videoMedia.codec = meta.codec;
    videoMedia.profile = meta.profile;
    videoMedia.level = meta.level;
    videoMedia.chromaFormat = meta.chromaFormat;
    videoMedia.frameRate = meta.frameRate;
    videoMedia.parRatio = meta.parRatio;
    videoMedia.width = videoMedia.width === meta.presentWidth ? videoMedia.width : meta.presentWidth;
    videoMedia.height = videoMedia.height === meta.presentHeight ? videoMedia.width : meta.presentHeight;

    meta.duration = this._context.mediaInfo.duration * meta.timescale;
    meta.avcc = new Uint8Array(data.length);
    meta.avcc.set(data);
    track.meta = meta;
  }

  /**
   * choose audio sample rate
   * @param samplingFrequencyIndex
   * @returns {number}
   * @private
   */
  _switchAudioSampleRate(samplingFrequencyIndex) {
    let samplingFrequencyList = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
    return samplingFrequencyList[samplingFrequencyIndex];
  }

  /**
   * choose audio sampling frequence
   * @param info
   * @returns {number}
   * @private
   */
  _switchAudioSamplingFrequency(info) {
    let samplingFrequencyIndex = (info & 12) >>> 2;
    let samplingFrequencyList = [5500, 11025, 22050, 44100, 48000];
    return samplingFrequencyList[samplingFrequencyIndex];
  }

  /**
   * choose audio channel count
   * @param info
   * @returns {number}
   * @private
   */
  _switchAudioChannel(info) {
    let sampleTrackNumIndex = info & 1;
    let sampleTrackNumList = [1, 2];
    return sampleTrackNumList[sampleTrackNumIndex];
  }

  /**
   * check datasize is valid use 4 Byte after current tag
   * @param datasize
   * @returns {boolean}
   * @private
   */
  _datasizeValidator(datasize) {
    let datasizeConfirm = this.loaderBuffer.toInt(0, 4);
    this.loaderBuffer.shift(4);
    return datasizeConfirm === datasize + 11;
  }

  get loaderBuffer() {
    const buffer = this._context.getInstance('LOADER_BUFFER');
    if (buffer) {
      return buffer;
    } else {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('找不到 loaderBuffer 实例'));
    }
  }

  get tracks() {
    return this._context.getInstance('TRACKS');
  }

  get logger() {
    return this._context.getInstance('LOGGER');
  }
}

exports.default = FlvDemuxer;

/***/ }),

/***/ "../xgplayer-demux/src/hls/demuxer/m3u8parser.js":
/*!*******************************************************!*\
  !*** ../xgplayer-demux/src/hls/demuxer/m3u8parser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Reference: https://tools.ietf.org/html/rfc8216#section-4.3
 */
class M3U8Parser {
  static parse(text, baseurl = '') {
    let ret = {
      duration: 0
    };
    if (!text || !text.split) {
      return;
    }
    let refs = text.split(/\r|\n/);
    refs = refs.filter(ref => {
      return ref;
    });
    let ref = refs.shift();
    if (!ref.match('#EXTM3U')) {
      throw new Error(`Invalid m3u8 file: not "#EXTM3U"`);
      return null;
    }
    ref = refs.shift();
    while (ref) {
      let refm = ref.match(/#(.[A-Z|-]*):(.*)/);
      let refd = ref.match(/#(.[A-Z|-]*)/);
      if (refd && refm && refm.length > 2) {
        switch (refm[1]) {
          case 'EXT-X-VERSION':
            ret.version = parseInt(refm[2]);
            break;
          case 'EXT-X-MEDIA-SEQUENCE':
            ret.sequence = parseInt(refm[2]);
            break;
          case 'EXT-X-TARGETDURATION':
            ret.targetduration = parseFloat(refm[2]);
            break;
          case 'EXTINF':
            M3U8Parser.parseFrag(refm, refs, ret, baseurl);
            break;
          case 'EXT-X-KEY':
            M3U8Parser.parseDecrypt(refm[2], ret);
            break;
          default:
            break;
        }
      }if (refd && refd.length > 1) {
        switch (refd[1]) {
          case 'EXT-X-DISCONTINUITY':
            ref = refs.shift();
            let refm = ref.match(/#(.[A-Z|-]*):(.*)/);
            if (refm.length > 2 && refm[1] === 'EXTINF') {
              M3U8Parser.parseFrag(refm, refs, ret, baseurl, true);
            }
            break;
          default:
            break;
        }
      }
      ref = refs.shift();
    }
    return ret;
  }

  static parseFrag(refm, refs, ret, baseurl, discontinue) {
    if (!ret.frags) {
      ret.frags = [];
    }

    let freg = {
      start: ret.duration,
      duration: parseFloat(refm[2]) * 1000
    };

    ret.duration += freg.duration;
    let nextline = refs.shift();
    if (nextline.match(/#(.*):(.*)/)) {
      nextline = refs.shift();
    }
    if (nextline.length > 0 && nextline.charAt(0) === '/' && baseurl.match(/.*\/\/.*\.\w+/g)) {
      baseurl = baseurl.match(/.*\/\/.*\.\w+/g)[0];
    }
    if (nextline.match(/.*:\/\/.*/)) {
      freg.url = nextline;
    } else {
      freg.url = baseurl + nextline;
    }
    freg.discontinue = discontinue;
    ret.frags.push(freg);
  }

  static parseURL(url) {
    let baseurl = '';
    let urls = url.match(/(.*\/).*\.m3u8/);
    if (urls && urls.length > 0) {
      for (let i = 0; i < urls.length; i++) {
        if (urls[i].match(/.*\/$/g) && urls[i].length > baseurl.length) {
          baseurl = urls[i];
        }
      }
    }
    return baseurl;
  }

  static parseDecrypt(refm, ret) {
    ret.encrypt = {};
    let refs = refm.split(',');
    for (let i in refs) {
      let cmd = refs[i];
      if (cmd.match(/METHOD=(.*)/)) {
        ret.encrypt.method = cmd.match(/METHOD=(.*)/)[1];
      }
      if (cmd.match(/URI="(.*)"/)) {
        ret.encrypt.uri = cmd.match(/URI="(.*)"/)[1];
      }

      if (cmd.match(/IV=0x(.*)/)) {
        let iv = cmd.match(/IV=0x(.*)/)[1];
        let length = Math.ceil(iv.length / 2);
        ret.encrypt.ivb = new Uint8Array(length);
        for (let i = length - 1; i >= 0; i--) {
          let im = parseInt(iv.substr(i * 2, 2), 16);
          ret.encrypt.ivb[i] = im;
        }
        ret.encrypt.iv = iv;
      }
    };
  }
}

exports.default = M3U8Parser;

/***/ }),

/***/ "../xgplayer-demux/src/hls/demuxer/ts.js":
/*!***********************************************!*\
  !*** ../xgplayer-demux/src/hls/demuxer/ts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerCodec = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");

var _xgplayerBuffer = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

const DEMUX_EVENTS = _xgplayerUtils.EVENTS.DEMUX_EVENTS;
const StreamType = {
  0x01: ['video', 'MPEG-1'],
  0x02: ['video', 'MPEG-2'],
  0x1b: ['video', 'AVC.H264'],
  0xea: ['video', 'VC-1'],
  0x03: ['audio', 'MPEG-1'],
  0x04: ['audio', 'MPEG-2'],
  0x0f: ['audio', 'MPEG-2.AAC'],
  0x11: ['audio', 'MPEG-4.AAC'],
  0x80: ['audio', 'LPCM'],
  0x81: ['audio', 'AC3'],
  0x06: ['audio', 'AC3'],
  0x82: ['audio', 'DTS'],
  0x83: ['audio', 'Dolby TrueHD'],
  0x84: ['audio', 'AC3-Plus'],
  0x85: ['audio', 'DTS-HD'],
  0x86: ['audio', 'DTS-MA'],
  0xa1: ['audio', 'AC3-Plus-SEC'],
  0xa2: ['audio', 'DTS-HD-SEC']
};

class TsDemuxer {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.demuxing = false;
    this.pat = [];
    this.pmt = [];
    this._hasVideoMeta = false;
    this._hasAudioMeta = false;
  }

  init() {
    this.on(DEMUX_EVENTS.DEMUX_START, this.demux.bind(this));
  }

  demux(frag) {
    if (this.demuxing) {
      return;
    }

    let buffer = this.inputBuffer;
    let frags = { pat: [], pmt: [] };
    let peses = {};

    // Read TS segment
    while (buffer.length >= 188) {
      if (buffer.length >= 1 && buffer.array[0][buffer.offset] !== 71) {
        this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`Untrust sync code: ${buffer.array[0][buffer.offset]}, try to recover;`), false);
      }
      while (buffer.length >= 1 && buffer.array[0][buffer.offset] !== 71) {
        buffer.shift(1);
      }
      let buf = buffer.shift(188);
      // console.log(buf);
      let tsStream = new _xgplayerUtils.Stream(buf.buffer);
      let ts = {};
      TsDemuxer.read(tsStream, ts, frags);
      if (ts.pes) {
        if (!peses[ts.header.pid]) {
          peses[ts.header.pid] = [];
        }
        peses[ts.header.pid].push(ts.pes);
        ts.pes.ES.buffer = [ts.pes.ES.buffer];
      } else if (peses[ts.header.pid]) {
        peses[ts.header.pid][peses[ts.header.pid].length - 1].ES.buffer.push(ts.payload.stream);
      }
    }

    let AudioOptions = frag;
    let VideoOptions = frag;

    // Get Frames data
    for (let i = 0; i < Object.keys(peses).length; i++) {
      let epeses = peses[Object.keys(peses)[i]];
      for (let j = 0; j < epeses.length; j++) {
        epeses[j].id = Object.keys(peses)[i];
        epeses[j].ES.buffer = TsDemuxer.Merge(epeses[j].ES.buffer);
        if (epeses[j].type === 'audio') {
          this.pushAudioSample(epeses[j], AudioOptions);
          AudioOptions = {};
        } else if (epeses[j].type === 'video') {
          this.pushVideoSample(epeses[j], VideoOptions);
          VideoOptions = {};
        }
      }
    }

    if (this._hasAudioMeta) {
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE, 'audio');
    }
    if (this._hasVideoMeta) {
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE, 'video');
    }
  }

  pushAudioSample(pes, options) {
    let track;
    if (!this._tracks.audioTrack) {
      this._tracks.audioTrack = new _xgplayerBuffer.AudioTrack();
      track = this._tracks.audioTrack;
    } else {
      track = this._tracks.audioTrack;
    }
    let meta = new _xgplayerUtils.AudioTrackMeta({
      audioSampleRate: pes.ES.frequence,
      sampleRate: pes.ES.frequence,
      channelCount: pes.ES.channel,
      codec: 'mp4a.40.' + pes.ES.audioObjectType,
      config: pes.ES.audioConfig,
      id: 2,
      sampleRateIndex: pes.ES.frequencyIndex
    });
    meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale);

    let metaEqual = TsDemuxer.compaireMeta(track.meta, meta, true);

    if (!this._hasAudioMeta || !metaEqual) {
      track.meta = meta;
      this._hasAudioMeta = true;
      this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
    }

    let data = new Uint8Array(pes.ES.buffer.buffer.slice(pes.ES.buffer.position, pes.ES.buffer.length));
    let dts = parseInt(pes.pts / 90);
    let pts = parseInt(pes.pts / 90);
    let sample = new _xgplayerUtils.AudioTrackSample({ dts, pts, data, options });
    track.samples.push(sample);
  }

  pushVideoSample(pes, options) {
    let nals = _xgplayerCodec.Nalunit.getNalunits(pes.ES.buffer);
    let track;
    let meta = new _xgplayerUtils.VideoTrackMeta();
    if (!this._tracks.videoTrack) {
      this._tracks.videoTrack = new _xgplayerBuffer.VideoTrack();
      track = this._tracks.videoTrack;
    } else {
      track = this._tracks.videoTrack;
    }
    let sampleLength = 0;
    let sps = false;
    let pps = false;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      if (nal.sps) {
        sps = nal;
        track.sps = nal.body;
        meta.chromaFormat = sps.sps.chroma_format;
        meta.codec = 'avc1.';
        for (var j = 1; j < 4; j++) {
          var h = sps.body[j].toString(16);
          if (h.length < 2) {
            h = '0' + h;
          }
          meta.codec += h;
        }
        meta.codecHeight = sps.sps.codec_size.height;
        meta.codecWidth = sps.sps.codec_size.width;
        meta.frameRate = sps.sps.frame_rate;
        meta.id = 1;
        meta.level = sps.sps.level_string;
        meta.presentHeight = sps.sps.present_size.height;
        meta.presentWidth = sps.sps.present_size.width;
        meta.profile = sps.sps.profile_string;
        meta.refSampleDuration = Math.floor(meta.timescale * (sps.sps.frame_rate.fps_den / sps.sps.frame_rate.fps_num));
        meta.sarRatio = sps.sps.sar_ratio ? sps.sps.sar_ratio : sps.sps.par_ratio;
      } else if (nal.pps) {
        track.pps = nal.body;
        pps = nal;
      } else {
        sampleLength += 4 + nal.body.byteLength;
      }
    }

    if (sps && pps) {
      meta.avcc = _xgplayerCodec.Nalunit.getAvcc(sps.body, pps.body);
      let metaEqual = TsDemuxer.compaireMeta(track.meta, meta, true);
      if (!this._hasVideoMeta || !metaEqual) {
        if (options) {
          options.meta = Object.assign({}, meta);
        } else {
          options = {
            meta: Object.assign({}, meta)
          };
        }
        track.meta = meta;
        this._hasVideoMeta = true;
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
      }
    }

    let data = new Uint8Array(sampleLength);
    let offset = 0;
    let isKeyframe = false;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      let length = nal.body.byteLength;
      if (nal.idr) {
        isKeyframe = true;
      }
      if (!nal.pps && !nal.sps) {
        data.set(new Uint8Array([length >>> 24 & 0xff, length >>> 16 & 0xff, length >>> 8 & 0xff, length & 0xff]), offset);
        offset += 4;
        data.set(nal.body, offset);
        offset += length;
      }
    }
    let sample = new _xgplayerUtils.VideoTrackSample({
      dts: parseInt(pes.dts / 90),
      pts: parseInt(pes.pts / 90),
      cts: (pes.pts - pes.dts) / 90,
      originDts: pes.dts,
      isKeyframe,
      data,
      options
    });
    track.samples.push(sample);
  }

  destory() {
    this.off(DEMUX_EVENTS.DEMUX_START, this.demux);
    this.configs = {};
    this.demuxing = false;
    this.pat = [];
    this.pmt = [];
    this._hasVideoMeta = false;
    this._hasAudioMeta = false;
  }

  static compaireArray(a, b, type) {
    let al = 0;
    let bl = 0;
    if (type === 'Uint8Array') {
      al = a.byteLength;
      bl = b.byteLength;
    } else if (type === 'Array') {
      al = a.length;
      bl = b.length;
    }
    if (al !== bl) {
      return false;
    }

    for (let i = 0; i < al; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  static compaireMeta(a, b, ignoreDuration) {
    if (!a || !b) {
      return false;
    }

    for (let i = 0, k = Object.keys(a).length; i < k; i++) {
      let itema = a[Object.keys(a)[i]];
      let itemb = b[Object.keys(a)[i]];
      if (typeof itema !== 'object') {
        if (ignoreDuration && Object.keys(a)[i] !== 'duration' && Object.keys(a)[i] !== 'refSampleDuration' && Object.keys(a)[i] !== 'refSampleDurationFixed' && itema !== itemb) {
          return false;
        }
      } else if (itema.byteLength !== undefined) {
        if (itemb.byteLength === undefined) {
          return false;
        }
        if (!TsDemuxer.compaireArray(itema, itemb, 'Uint8Array')) {
          return false;
        }
      } else if (itema.length !== undefined) {
        if (itemb.length === undefined) {
          return false;
        }
        if (!TsDemuxer.compaireArray(itema, itemb, 'Array')) {
          return false;
        }
      } else {
        if (!TsDemuxer.compaireMeta(itema, itemb)) {
          return false;
        }
      }
    }
    return true;
  }

  static Merge(buffers) {
    let data;
    let length = 0;
    let offset = 0;
    for (let i = 0; i < buffers.length; i++) {
      length += buffers[i].length - buffers[i].position;
    }

    data = new Uint8Array(length);
    for (let i = 0; i < buffers.length; i++) {
      let buffer = buffers[i];
      data.set(new Uint8Array(buffer.buffer, buffer.position), offset);
      offset += buffer.length - buffer.position;
    }
    return new _xgplayerUtils.Stream(data.buffer);
  }

  static read(stream, ts, frags) {
    TsDemuxer.readHeader(stream, ts);
    TsDemuxer.readPayload(stream, ts, frags);
    if (ts.header.packet === 'MEDIA' && ts.header.payload === 1 && !ts.unknownPIDs) {
      ts.pes = TsDemuxer.PES(ts);
    }
  }

  static readPayload(stream, ts, frags) {
    let header = ts.header;
    let pid = header.pid;
    switch (pid) {
      case 0:
        TsDemuxer.PAT(stream, ts, frags);
        break;
      case 1:
        TsDemuxer.CAT(stream, ts, frags);
        break;
      case 2:
        TsDemuxer.TSDT(stream, ts, frags);
        break;
      case 0x1fff:
        break;
      default:
        // TODO: some的写法不太好，得改
        if (frags.pat.some(item => {
          return item.pid === pid;
        })) {
          TsDemuxer.PMT(stream, ts, frags);
        } else {
          let sts = frags.pmt ? frags.pmt.filter(item => item.pid === pid) : [];
          if (sts.length > 0) {
            TsDemuxer.Media(stream, ts, StreamType[sts[0].streamType][0]);
          } else {
            ts.unknownPIDs = true;
          };
        }
    }
  }

  static readHeader(stream, ts) {
    let header = {};
    header.sync = stream.readUint8();
    let next = stream.readUint16();
    header.error = next >>> 15;
    header.payload = next >>> 14 & 1;
    header.priority = next >>> 13 & 1;
    header.pid = next & 0x1fff;

    next = stream.readUint8();

    header.scrambling = next >> 6 & 0x3; // 是否加密，00表示不加密

    /**
     * 00 ISO/IEC未来使用保留
     * 01 没有调整字段，仅含有184B有效净荷
     * 02 没有有效净荷，仅含有183B调整字段
     * 03 0~182B调整字段后为有效净荷
     */
    header.adaptation = next >> 4 & 0x3;
    header.continuity = next & 15;
    header.packet = header.pid === 0 ? 'PAT' : 'MEDIA';
    ts.header = header;
  }

  static PAT(stream, ts, frags) {
    let ret = {};
    let next = stream.readUint8();
    stream.skip(next);
    next = stream.readUint8();
    ret.tabelID = next;
    next = stream.readUint16();
    ret.error = next >>> 7;
    ret.zero = next >>> 6 & 1;
    ret.sectionLength = next & 0xfff;
    ret.streamID = stream.readUint16();
    ret.current = stream.readUint8() & 1;
    ret.sectionNumber = stream.readUint8();
    ret.lastSectionNumber = stream.readUint8();
    let N = (ret.sectionLength - 9) / 4;
    let list = [];
    for (let i = 0; i < N; i++) {
      let programNumber = stream.readUint16();
      let pid = stream.readUint16() & 0x1fff;
      list.push({
        program: programNumber,
        pid,
        type: programNumber === 0 ? 'network' : 'mapPID'
      });
    }
    if (list.length > 0) {
      frags.pat = frags.pat.concat(list);
    }
    ret.list = list;
    ret.program = stream.readUint16();
    ret.pid = stream.readUint16() & 0x1fff;
    ts.payload = ret;
    // TODO CRC
  }

  static PMT(stream, ts, frags) {
    let ret = {};
    let header = ts.header;
    header.packet = 'PMT';
    let next = stream.readUint8();
    stream.skip(next);
    next = stream.readUint8();
    ret.tableID = next;
    next = stream.readUint16();
    ret.sectionLength = next & 0xfff;
    ret.program = stream.readUint16();
    ret.current = stream.readUint8() & 1;
    ret.order = stream.readUint8();
    ret.lastOrder = stream.readUint8();
    ret.PCR_PID = stream.readUint16() & 0x1fff;
    ret.programLength = stream.readUint16() & 0xfff;
    let N = (ret.sectionLength - 13) / 5;
    let list = [];
    for (let i = 0; i < N; i++) {
      list.push({
        streamType: stream.readUint8(),
        pid: stream.readUint16() & 0x1fff, // 0x07e5 视频，0x07e6
        es: stream.readUint16() & 0xfff
      });
    }
    ret.list = list;
    if (!this.pmt) {
      this.pmt = [];
    }
    frags.pmt = this.pmt.concat(list.map(item => {
      return {
        pid: item.pid,
        es: item.es,
        streamType: item.streamType,
        program: ret.program
      };
    }));
    ts.payload = ret;
  }

  static Media(stream, ts, type) {
    let header = ts.header;
    let payload = {};
    header.type = type;
    if (header.adaptation === 0x03) {
      payload.adaptationLength = stream.readUint8();
      if (payload.adaptationLength > 0) {
        let next = stream.readUint8();
        payload.discontinue = next >>> 7;
        payload.access = next >>> 6 & 0x01;
        payload.priority = next >>> 5 & 0x01;
        payload.PCR = next >>> 4 & 0x01;
        payload.OPCR = next >>> 3 & 0x01;
        payload.splicePoint = next >>> 2 & 0x01;
        payload.transportPrivate = next >>> 1 & 0x01;
        payload.adaptationField = next & 0x01;
        let _start = stream.position;
        if (payload.PCR === 1) {
          payload.programClockBase = stream.readUint32() << 1;
          next = stream.readUint16();
          payload.programClockBase |= next >>> 15;
          payload.programClockExtension = next & 0x1ff;
        }
        if (payload.OPCR === 1) {
          payload.originProgramClockBase = stream.readUint32() << 1;
          next = stream.readUint16();
          payload.originProgramClockBase += next >>> 15;
          payload.originProgramClockExtension = next & 0x1ff;
        }
        if (payload.splicePoint === 1) {
          payload.spliceCountdown = stream.readUint8();
        }
        if (payload.transportPrivate === 1) {
          let length = stream.readUint8();
          let transportPrivateData = [];
          for (let i = 0; i < length; i++) {
            transportPrivateData.push(stream.readUint8());
          }
        }
        if (payload.adaptationField === 1) {
          let length = stream.readUint8();
          let next = stream.readUint8();
          let start = stream.position;
          let ltw = next >>> 7;
          let piecewise = next >>> 6 & 0x1;
          let seamless = next >>> 5 & 0x1;
          if (ltw === 1) {
            next = stream.readUint16();
            payload.ltwValid = next >>> 15;
            payload.ltwOffset = next & 0xefff;
          }
          if (piecewise === 1) {
            next = stream.readUint24();
            payload.piecewiseRate = next & 0x3fffff;
          }
          if (seamless === 1) {
            next = stream.readInt8();
            payload.spliceType = next >>> 4;
            payload.dtsNextAU1 = next >>> 1 & 0x7;
            payload.marker1 = next & 0x1;
            next = stream.readUint16();
            payload.dtsNextAU2 = next >>> 1;
            payload.marker2 = next & 0x1;
            next = stream.readUint16();
            payload.dtsNextAU3 = next;
          }
          stream.skip(length - 1 - (stream.position - start));
        }
        let lastStuffing = payload.adaptationLength - 1 - (stream.position - _start);
        stream.skip(lastStuffing);
      }
    }
    payload.stream = new _xgplayerUtils.Stream(stream.buffer.slice(stream.position));
    ts.payload = payload;
  }

  static PES(ts) {
    let ret = {};
    let buffer = ts.payload.stream;

    let next = buffer.readUint24();
    if (next !== 1) {
      ret.ES = {};
      ret.ES.buffer = buffer;
    } else {
      let streamID = buffer.readUint8();
      if (streamID >= 0xe0 && streamID <= 0xef) {
        ret.type = 'video';
      }
      if (streamID >= 0xc0 && streamID <= 0xdf) {
        ret.type = 'audio';
      }
      let packetLength = buffer.readUint16();
      ret.packetLength = packetLength;
      if (ret.type === 'video' || ret.type === 'audio') {
        let next = buffer.readUint8();
        let first = next >>> 6;
        if (first !== 0x02) {
          throw new Error('error when parse pes header');
        }
        next = buffer.readUint8();
        ret.ptsDTSFlag = next >>> 6;
        ret.escrFlag = next >>> 5 & 0x01;
        ret.esRateFlag = next >>> 4 & 0x01;
        ret.dsmFlag = next >>> 3 & 0x01;
        ret.additionalFlag = next >>> 2 & 0x01;
        ret.crcFlag = next >>> 1 & 0x01;
        ret.extensionFlag = next & 0x01;
        ret.pesHeaderLength = buffer.readUint8();
        let N1 = ret.pesHeaderLength;

        if (ret.ptsDTSFlag === 2) {
          let pts = [];
          next = buffer.readUint8();
          pts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          ret.pts = pts[0] << 30 | pts[1] << 15 | pts[2];
          N1 -= 5;
          // 视频如果没有dts用pts
          if (ret.type === 'video') {
            ret.dts = ret.pts;
          }
        }
        if (ret.ptsDTSFlag === 3) {
          let pts = [];
          next = buffer.readUint8();
          pts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          ret.pts = pts[0] << 30 | pts[1] << 15 | pts[2];
          let dts = [];
          next = buffer.readUint8();
          dts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          dts.push(next >>> 1);
          next = buffer.readUint16();
          dts.push(next >>> 1);
          ret.dts = dts[0] << 30 | dts[1] << 15 | dts[2];
          N1 -= 10;
        }
        if (ret.escrFlag === 1) {
          let escr = [];
          let ex = [];
          next = buffer.readUint8();
          escr.push(next >>> 3 & 0x07);
          escr.push(next & 0x03);
          next = buffer.readUint16();
          escr.push(next >>> 13);
          escr.push(next & 0x03);
          next = buffer.readUint16();
          escr.push(next >>> 13);
          ex.push(next & 0x03);
          next = buffer.readUint8();
          ex.push(next >>> 1);
          ret.escr = (escr[0] << 30 | escr[1] << 28 | escr[2] << 15 | escr[3] << 13 | escr[4]) * 300 + (ex[0] << 7 | ex[1]);
          N1 -= 6;
        }
        if (ret.esRateFlag === 1) {
          next = buffer.readUint24();
          ret.esRate = next >>> 1 & 0x3fffff;
          N1 -= 3;
        }
        if (ret.dsmFlag === 1) {
          throw new Error('not support DSM_trick_mode');
        }
        if (ret.additionalFlag === 1) {
          next = buffer.readUint8();
          ret.additionalCopyInfo = next & 0x7f;
          N1 -= 1;
        }
        if (ret.crcFlag === 1) {
          ret.pesCRC = buffer.readUint16();
          N1 -= 2;
        }
        if (ret.extensionFlag === 1) {
          throw new Error('not support extension');
        }
        if (N1 > 0) {
          buffer.skip(N1);
        }
        ret.ES = TsDemuxer.ES(buffer, ret.type);
      } else {
        throw new Error('format is not supported');
      }
    }
    return ret;
  }

  static ES(buffer, type) {
    let next;
    let ret = {};
    if (type === 'video') {
      next = buffer.readUint32();
      if (next !== 1) {
        buffer.back(4);
        next = buffer.readUint24();
        if (next !== 1) {
          throw new Error('h264 nal header parse failed');
        }
      }
      buffer.skip(2); // 09 F0
      // TODO readnalu
      ret.buffer = buffer;
    } else if (type === 'audio') {
      next = buffer.readUint16();
      // adts的同步字节，12位
      if (next >>> 4 !== 0xfff) {
        throw new Error('aac ES parse Error');
      }
      const fq = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
      ret.id = (next >>> 3 & 0x01) === 0 ? 'MPEG-4' : 'MPEG-2';
      ret.layer = next >>> 1 & 0x03;
      ret.absent = next & 0x01;
      next = buffer.readUint16();
      ret.audioObjectType = (next >>> 14 & 0x03) + 1;
      ret.profile = ret.audioObjectType - 1;
      ret.frequencyIndex = next >>> 10 & 0x0f;
      ret.frequence = fq[ret.frequencyIndex];
      ret.channel = next >>> 6 & 0x07;
      ret.frameLength = (next & 0x03) << 11 | buffer.readUint16() >>> 5;
      TsDemuxer.getAudioConfig(ret);
      buffer.skip(1);
      ret.buffer = buffer;
    } else {
      throw new Error(`ES ${type} is not supported`);
    }

    return ret;
  }

  static TSDT(stream, ts, frags) {
    // TODO
    ts.payload = {};
  }

  static CAT(stream, ts, frags) {
    let ret = {};
    ret.tableID = stream.readUint8();
    let next = stream.readUint16();
    ret.sectionIndicator = next >>> 7;
    ret.sectionLength = next & 0x0fff;
    stream.skip(2);
    next = stream.readUint8();
    ret.version = next >>> 3;
    ret.currentNextIndicator = next & 0x01;
    ret.sectionNumber = stream.readUint8();
    ret.lastSectionNumber = stream.readUint8();
    let N = (this.sectionLength - 9) / 4;
    let list = [];
    for (let i = 0; i < N; i++) {
      list.push({});
    }
    ret.crc32 = stream.readUint32();
    ts.payload = ret;
  }

  static getAudioConfig(ret) {
    let userAgent = navigator.userAgent.toLowerCase();
    let config;
    let extensionSampleIndex;
    if (/firefox/i.test(userAgent)) {
      if (ret.frequencyIndex >= 6) {
        ret.audioObjectType = 5;
        config = new Array(4);
        extensionSampleIndex = ret.frequencyIndex - 3;
      } else {
        ret.audioObjectType = 2;
        config = new Array(2);
        extensionSampleIndex = ret.frequencyIndex;
      }
    } else if (userAgent.indexOf('android') !== -1) {
      ret.audioObjectType = 2;
      config = new Array(2);
      extensionSampleIndex = ret.frequencyIndex;
    } else {
      ret.audioObjectType = 5;
      config = new Array(4);
      if (ret.frequencyIndex >= 6) {
        extensionSampleIndex = ret.frequencyIndex - 3;
      } else {
        if (ret.channel === 1) {
          ret.audioObjectType = 2;
          config = new Array(2);
        }
        extensionSampleIndex = ret.frequencyIndex;
      }
    }

    config[0] = ret.audioObjectType << 3;
    config[0] |= (ret.frequencyIndex & 0x0e) >> 1;
    config[1] = (ret.frequencyIndex & 0x01) << 7;
    config[1] |= ret.channel << 3;
    if (ret.audioObjectType === 5) {
      config[1] |= (extensionSampleIndex & 0x0e) >> 1;
      config[2] = (extensionSampleIndex & 0x01) << 7;
      config[2] |= 2 << 2;
      config[3] = 0;
    }
    ret.audioConfig = config;
  }

  get inputBuffer() {
    return this._context.getInstance(this.configs.inputbuffer);
  }

  get _tracks() {
    return this._context.getInstance('TRACKS');
  }
}

exports.default = TsDemuxer;

/***/ }),

/***/ "../xgplayer-demux/src/hls/playlist.js":
/*!*********************************************!*\
  !*** ../xgplayer-demux/src/hls/playlist.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Playlist {
  constructor(configs) {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
    this.fragLength = 0;
    this._lastget = undefined;
    this._audoclear = configs.autoclear || false;
  }

  get list() {
    return this._list;
  }

  set baseURL(baseURL) {
    if (this.baseURL !== baseURL) {
      this.clear();
      this._baseURL = baseURL;
    }
  }

  get baseURL() {
    return this._baseURL;
  }

  push(ts, duration, discontinue) {
    if (!this._ts[ts]) {
      this._ts[ts] = { duration: duration,
        downloaded: false,
        downloading: false,
        start: this.duration,
        discontinue: discontinue ? true : false
      };
      this._list[this.duration] = ts;
      this.duration += duration;
      this.fragLength += 1;
    }
  }

  deleteFrag(url) {
    if (this._ts[url]) {
      if (this._ts[url].start > this._lastget.time) {
        this._lastget = {
          duration: this._ts[url].duration,
          time: this._ts[url].start,
          downloaded: false,
          downloading: false,
          url: url
        };
      }
      delete this._list[this._ts[url].start];
      delete this._ts[url];
      this.fragLength -= 1;
    }
  }

  pushM3U8(data, deletepre) {
    // 常规信息替换
    if (!data) {
      throw new Error(`No m3u8 data received.`);
      return;
    }
    this.version = data.version;
    this.targetduration = data.targetduration;
    if (data.encrypt && !this.encrypt) {
      this.encrypt = data.encrypt;
    }
    // 新分片信息
    if (data.sequence > this.sequence) {
      this.sequence = data.sequence;
      let newfraglist = [];
      for (let i = 0; i < data.frags.length; i++) {
        let frag = data.frags[i];
        if (!this._ts[frag.url]) {
          newfraglist.push(frag.url);
          this.push(frag.url, frag.duration, frag.discontinue);
        }
      }

      if (newfraglist.length < 1) {
        throw new Error(`Can not read ts file list.`);
      }

      if (deletepre) {
        let tslist = this.getTsList();
        for (let i = 0; i < tslist.length; i++) {
          if (newfraglist.indexOf(tslist[i]) < 0) {
            this.deleteFrag(tslist[i]);
          }
        }
      }
    } else {
      throw new Error(`Old m3u8 file received, ${data.sequence}`);
    }
  }

  getTsList() {
    return Object.keys(this._ts);
  }

  downloaded(tsname, isloaded) {
    let ts = this._ts[tsname];
    if (ts) {
      ts.downloaded = isloaded;
    }
  }

  downloading(tsname, loading) {
    let ts = this._ts[tsname];
    if (ts) {
      ts.downloading = loading;
    }
  }

  getTsByName(name) {
    return this._ts[name];
  }

  getTs(time) {
    let timelist = Object.keys(this._list);
    let ts;

    if (time === undefined) {
      if (this._lastget) {
        time = this._lastget.time + this._lastget.duration;
      } else {
        time = 0;
      }
    }

    if (timelist.length < 1 || time >= this.duration) {
      return undefined;
    }
    timelist.sort((a, b) => {
      return parseFloat(a) - parseFloat(b);
    });
    for (let i = 0; i < timelist.length; i++) {
      if (time >= parseInt(timelist[i])) {
        let url = this._list[timelist[i]];
        let downloaded = this._ts[url].downloaded;
        let downloading = this._ts[url].downloading;
        ts = { url, downloaded, downloading, time: parseInt(timelist[i]), duration: parseInt(this._ts[url].duration) };
        if (this.autoclear) {
          delete this._ts[this._lastget.url];
          delete this._list[this._lastget.time];
        }
        this._lastget = ts;
      } else {
        break;
      }
    }
    return ts;
  }

  clear() {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
  }

  clearDownloaded() {
    for (let i = 0, l = Object.keys(this._ts).length; i < l; i++) {
      let ts = this._ts[Object.keys(this._ts)[i]];
      ts.downloaded = false;
      ts.downloading = false;
    }
  }

  destroy() {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
    this.fragLength = 0;
    this._lastget = undefined;
    this._audoclear = false;
  }
}

exports.default = Playlist;

/***/ }),

/***/ "../xgplayer-loader/index.js":
/*!***********************************!*\
  !*** ../xgplayer-loader/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  FetchLoader: __webpack_require__(/*! ./src/fetch-loader */ "../xgplayer-loader/src/fetch-loader.js").default
};

/***/ }),

/***/ "../xgplayer-loader/src/fetch-loader.js":
/*!**********************************************!*\
  !*** ../xgplayer-loader/src/fetch-loader.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

const LOADER_EVENTS = _xgplayerUtils.EVENTS.LOADER_EVENTS;
const READ_STREAM = 0;
const READ_TEXT = 1;
const READ_JSON = 2;
const READ_BUFFER = 3;
class FetchLoader {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.url = null;
    this.status = 0;
    this.error = null;
    this._reader = null;
    this._canceled = false;
    this._destroyed = false;
    this.readtype = this.configs.readtype;
    this.buffer = this.configs.buffer || 'LOADER_BUFFER';
    this._loaderTaskNo = 0;
  }

  init() {
    this.on(LOADER_EVENTS.LADER_START, this.load.bind(this));
  }

  static get type() {
    return 'loader';
  }

  load(url, opts) {
    let _this = this;
    this.url = url;
    this._canceled = false;

    // TODO: Add Ranges
    let params = this.getParams(opts);
    _this.loading = true;
    return fetch(this.url, params).then(function (response) {
      if (response.ok) {
        _this.status = response.status;
        return _this._onFetchResponse(response);
      }
      _this.loading = false;
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this.TAG, new Error(`invalid response.`));
    }).catch(function (error) {
      _this.loading = false;
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this.TAG, error);
      throw new Error(error.message);
    });
  }

  _onFetchResponse(response) {
    let _this = this;
    let buffer = this._context.getInstance(this.buffer);
    this._loaderTaskNo++;
    let taskno = this._loaderTaskNo;
    if (response.ok === true) {
      switch (this.readtype) {
        case READ_JSON:
          response.json().then(data => {
            _this.loading = false;
            if (!_this._canceled && !_this._destroyed) {
              if (buffer) {
                buffer.push(data);
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_TEXT:
          response.text().then(data => {
            _this.loading = false;
            if (!_this._canceled && !_this._destroyed) {
              if (buffer) {
                buffer.push(data);
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_BUFFER:
          response.arrayBuffer().then(data => {
            _this.loading = false;
            if (!_this._canceled && !_this._destroyed) {
              if (buffer) {
                buffer.push(new Uint8Array(data));
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_STREAM:
        default:
          return this._onReader(response.body.getReader(), taskno);
      }
    }
  }

  _onReader(reader, taskno) {
    let buffer = this._context.getInstance(this.buffer);
    if (!buffer && this._reader || this._destroyed) {
      try {
        this._reader.cancel();
      } catch (e) {
        // DO NOTHING
      }
    }

    this._reader = reader;
    if (this.loading === false) {
      return;
    }

    let _this = this;
    // reader read function returns a Promise. get data when callback and has value.done when disconnected.
    // read方法返回一个Promise. 回调中可以获取到数据。当value.done存在时，说明链接断开。
    this._reader && this._reader.read().then(function (val) {
      if (val.done) {
        // TODO: 完成处理
        _this.loading = false;
        _this.status = 0;
        _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
        return;
      }

      if (_this._canceled || _this._destroyed) {
        if (_this._reader) {
          try {
            _this._reader.cancel();
          } catch (e) {
            // DO NOTHING
          }
        }

        return;
      }
      buffer.push(val.value);
      _this.emit(LOADER_EVENTS.LOADER_DATALOADED, buffer);
      return _this._onReader(reader, taskno);
    }).catch(error => {
      _this.loading = false;
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this.TAG, error);
    });
  }

  getParams(opts) {
    let options = Object.assign({}, opts);
    let headers = new Headers();

    let params = {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default'

      // add custmor headers
      // 添加自定义头
    };if (typeof this.configs.headers === 'object') {
      let configHeaders = this.configs.headers;
      for (let key in configHeaders) {
        if (configHeaders.hasOwnProperty(key)) {
          headers.append(key, configHeaders[key]);
        }
      }
    }

    if (typeof options.headers === 'object') {
      let optHeaders = options.headers;
      for (let key in optHeaders) {
        if (optHeaders.hasOwnProperty(key)) {
          headers.append(key, optHeaders[key]);
        }
      }
    }

    if (options.cors === false) {
      params.mode = 'same-origin';
    }

    // withCredentials is disabled by default
    // withCredentials 在默认情况下不被使用。
    if (options.withCredentials) {
      params.credentials = 'include';
    }

    // TODO: Add ranges;
    return params;
  }

  cancel() {
    if (this._reader) {
      try {
        this._reader.cancel();
      } catch (e) {
        // 防止failed: 200错误被打印到控制台上
      }
      this._reader = null;
      this.loading = false;
      this._canceled = true;
    }
  }

  destroy() {
    this._destroyed = true;
    this.cancel();
  }
}

exports.default = FetchLoader;

/***/ }),

/***/ "../xgplayer-remux/index.js":
/*!**********************************!*\
  !*** ../xgplayer-remux/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Mp4Remuxer: __webpack_require__(/*! ./src/mp4 */ "../xgplayer-remux/src/mp4/index.js").default
};

/***/ }),

/***/ "../xgplayer-remux/src/mp4/fmp4.js":
/*!*****************************************!*\
  !*** ../xgplayer-remux/src/mp4/fmp4.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

// const UINT32_MAX = Math.pow(2, 32) - 1;
class Fmp4 {
  static size(value) {
    return _xgplayerUtils.Buffer.writeUint32(value);
  }
  static initBox(size, name, ...content) {
    const buffer = new _xgplayerUtils.Buffer();
    buffer.write(Fmp4.size(size), Fmp4.type(name), ...content);
    return buffer.buffer;
  }
  static extension(version, flag) {
    return new Uint8Array([version, flag >> 16 & 0xff, flag >> 8 & 0xff, flag & 0xff]);
  }
  static ftyp() {
    return Fmp4.initBox(24, 'ftyp', new Uint8Array([0x69, 0x73, 0x6F, 0x6D, // isom,
    0x0, 0x0, 0x00, 0x01, // minor_version: 0x01
    0x69, 0x73, 0x6F, 0x6D, // isom
    0x61, 0x76, 0x63, 0x31 // avc1
    ]));
  }
  static moov({ type, meta }) {
    let size = 8;
    let mvhd = Fmp4.mvhd(meta.duration, meta.timescale);
    let trak;

    if (type === 'video') {
      trak = Fmp4.videoTrak(meta);
    } else {
      trak = Fmp4.audioTrak(meta);
    }

    let mvex = Fmp4.mvex(meta.duration, meta.timescale || 1000, meta.id);
    [mvhd, trak, mvex].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'moov', mvhd, trak, mvex);
  }
  static mvhd(duration, timescale = 1000) {
    // duration *= timescale;
    let bytes = new Uint8Array([0x00, 0x00, 0x00, 0x00, // version(0) + flags     1位的box版本+3位flags   box版本，0或1，一般为0。（以下字节数均按version=0）
    0x00, 0x00, 0x00, 0x00, // creation_time    创建时间  （相对于UTC时间1904-01-01零点的秒数）
    0x00, 0x00, 0x00, 0x00, // modification_time   修改时间

    /**
           * timescale: 4 bytes文件媒体在1秒时间内的刻度值，可以理解为1秒长度
           */
    timescale >>> 24 & 0xFF, timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF,

    /**
           * duration: 4 bytes该track的时间长度，用duration和time scale值可以计算track时长，比如audio track的time scale = 8000,
           * duration = 560128，时长为70.016，video track的time scale = 600, duration = 42000，时长为70
           */
    duration >>> 24 & 0xFF, duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x01, 0x00, 0x00, // Preferred rate: 1.0   推荐播放速率，高16位和低16位分别为小数点整数部分和小数部分，即[16.16] 格式，该值为1.0（0x00010000）表示正常前向播放
    /**
           * PreferredVolume(1.0, 2bytes) + reserved(2bytes)
           * 与rate类似，[8.8] 格式，1.0（0x0100）表示最大音量
           */
    0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //  reserved: 4 + 4 bytes保留位
    0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, // ----begin composition matrix----
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 视频变换矩阵   线性代数
    0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // ----end composition matrix----
    0x00, 0x00, 0x00, 0x00, // ----begin pre_defined 6 * 4 bytes----
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre-defined 保留位
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // ----end pre_defined 6 * 4 bytes----
    0xFF, 0xFF, 0xFF, 0xFF // next_track_ID 下一个track使用的id号
    ]);
    return Fmp4.initBox(8 + bytes.length, 'mvhd', new Uint8Array(bytes));
  }
  static videoTrak(data) {
    let size = 8;

    let tkhd = Fmp4.tkhd({
      id: 1,
      duration: data.duration,
      timescale: data.timescale || 1000,
      width: data.presentWidth,
      height: data.presentHeight,
      type: 'video'
    });
    let mdia = Fmp4.mdia({
      type: 'video',
      timescale: data.timescale || 1000,
      duration: data.duration,
      avcc: data.avcc,
      parRatio: data.parRatio,
      width: data.presentWidth,
      height: data.presentHeight
    });
    [tkhd, mdia].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'trak', tkhd, mdia);
  }
  static audioTrak(data) {
    let size = 8;
    let tkhd = Fmp4.tkhd({
      id: 2,
      duration: data.duration,
      timescale: data.timescale || 1000,
      width: 0,
      height: 0,
      type: 'audio'
    });
    let mdia = Fmp4.mdia({
      type: 'audio',
      timescale: data.timescale || 1000,
      duration: data.duration,
      channelCount: data.channelCount,
      samplerate: data.sampleRate,
      config: data.config
    });
    [tkhd, mdia].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'trak', tkhd, mdia);
  }
  static tkhd(data) {
    let id = data.id;
    let duration = data.duration;
    let width = data.width;
    let height = data.height;
    let content = new Uint8Array([0x00, 0x00, 0x00, 0x07, // version(0) + flags 1位版本 box版本，0或1，一般为0。（以下字节数均按version=0）按位或操作结果值，预定义如下：
    // 0x000001 track_enabled，否则该track不被播放；
    // 0x000002 track_in_movie，表示该track在播放中被引用；
    // 0x000004 track_in_preview，表示该track在预览时被引用。
    // 一般该值为7，1+2+4 如果一个媒体所有track均未设置track_in_movie和track_in_preview，将被理解为所有track均设置了这两项；对于hint track，该值为0
    // hint track 这个特殊的track并不包含媒体数据，而是包含了一些将其他数据track打包成流媒体的指示信息。
    0x00, 0x00, 0x00, 0x00, // creation_time创建时间（相对于UTC时间1904-01-01零点的秒数）
    0x00, 0x00, 0x00, 0x00, // modification time 修改时间
    id >>> 24 & 0xFF, // track_ID: 4 bytes id号，不能重复且不能为0
    id >>> 16 & 0xFF, id >>> 8 & 0xFF, id & 0xFF, 0x00, 0x00, 0x00, 0x00, // reserved: 4 bytes    保留位
    duration >>> 24 & 0xFF, // duration: 4 bytes track的时间长度
    duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x00, 0x00, 0x00, // reserved: 2 * 4 bytes    保留位
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // layer(2bytes) + alternate_group(2bytes)  视频层，默认为0，值小的在上层.track分组信息，默认为0表示该track未与其他track有群组关系
    0x00, 0x00, 0x00, 0x00, // volume(2bytes) + reserved(2bytes)    [8.8] 格式，如果为音频track，1.0（0x0100）表示最大音量；否则为0   +保留位
    0x00, 0x01, 0x00, 0x00, // ----begin composition matrix----
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, // 视频变换矩阵
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // ----end composition matrix----
    width >>> 8 & 0xFF, // //宽度
    width & 0xFF, 0x00, 0x00, height >>> 8 & 0xFF, // 高度
    height & 0xFF, 0x00, 0x00]);
    return Fmp4.initBox(8 + content.byteLength, 'tkhd', content);
  }
  static edts(data) {
    let buffer = new _xgplayerUtils.Buffer();
    let duration = data.duration;
    let mediaTime = data.mediaTime;
    buffer.write(Fmp4.size(36), Fmp4.type('edts'));
    // elst
    buffer.write(Fmp4.size(28), Fmp4.type('elst'));
    buffer.write(new Uint8Array([0x00, 0x00, 0x00, 0x01, // entry count
    duration >> 24 & 0xff, duration >> 16 & 0xff, duration >> 8 & 0xff, duration & 0xff, mediaTime >> 24 & 0xff, mediaTime >> 16 & 0xff, mediaTime >> 8 & 0xff, mediaTime & 0xff, 0x00, 0x00, 0x00, 0x01 // media rate
    ]));
    return buffer.buffer;
  }
  static mdia(data) {
    let size = 8;
    let mdhd = Fmp4.mdhd(data.timescale, data.duration);
    let hdlr = Fmp4.hdlr(data.type);
    let minf = Fmp4.minf(data);
    [mdhd, hdlr, minf].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'mdia', mdhd, hdlr, minf);
  }
  static mdhd(timescale = 1000, duration) {
    let content = new Uint8Array([0x00, 0x00, 0x00, 0x00, // creation_time    创建时间
    0x00, 0x00, 0x00, 0x00, // modification_time修改时间
    timescale >>> 24 & 0xFF, // timescale: 4 bytes    文件媒体在1秒时间内的刻度值，可以理解为1秒长度
    timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF, duration >>> 24 & 0xFF, // duration: 4 bytes  track的时间长度
    duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x55, 0xC4, // language: und (undetermined) 媒体语言码。最高位为0，后面15位为3个字符（见ISO 639-2/T标准中定义）
    0x00, 0x00 // pre_defined = 0
    ]);
    return Fmp4.initBox(12 + content.byteLength, 'mdhd', Fmp4.extension(0, 0), content);
  }
  static hdlr(type) {
    let value = [0x00, // version 0
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, // pre_defined
    0x76, 0x69, 0x64, 0x65, // handler_type: 'vide'
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x56, 0x69, 0x64, 0x65, 0x6f, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'VideoHandler'
    ];
    if (type === 'audio') {
      value.splice(8, 4, ...[0x73, 0x6f, 0x75, 0x6e]);
      value.splice(24, 13, ...[0x53, 0x6f, 0x75, 0x6e, 0x64, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00]);
    }
    return Fmp4.initBox(8 + value.length, 'hdlr', new Uint8Array(value));
  }
  static minf(data) {
    let size = 8;
    let vmhd = data.type === 'video' ? Fmp4.vmhd() : Fmp4.smhd();
    let dinf = Fmp4.dinf();
    let stbl = Fmp4.stbl(data);
    [vmhd, dinf, stbl].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'minf', vmhd, dinf, stbl);
  }
  static vmhd() {
    return Fmp4.initBox(20, 'vmhd', new Uint8Array([0x00, // version
    0x00, 0x00, 0x01, // flags
    0x00, 0x00, // graphicsmode
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // opcolor
    ]));
  }
  static smhd() {
    return Fmp4.initBox(16, 'smhd', new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, // balance
    0x00, 0x00 // reserved
    ]));
  }
  static dinf() {
    let buffer = new _xgplayerUtils.Buffer();
    let dref = [0x00, // version 0
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x01, // entry_count
    0x00, 0x00, 0x00, 0x0c, // entry_size
    0x75, 0x72, 0x6c, 0x20, // 'url' type
    0x00, // version 0
    0x00, 0x00, 0x01 // entry_flags
    ];
    buffer.write(Fmp4.size(36), Fmp4.type('dinf'), Fmp4.size(28), Fmp4.type('dref'), new Uint8Array(dref));
    return buffer.buffer;
  }
  static stbl(data) {
    let size = 8;
    let stsd = Fmp4.stsd(data);
    let stts = Fmp4.stts();
    let stsc = Fmp4.stsc();
    let stsz = Fmp4.stsz();
    let stco = Fmp4.stco();
    [stsd, stts, stsc, stsz, stco].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'stbl', stsd, stts, stsc, stsz, stco);
  }
  static stsd(data) {
    let content;
    if (data.type === 'audio') {
      // if (!data.isAAC && data.codec === 'mp4') {
      //     content = FMP4.mp3(data);
      // } else {
      //
      // }
      // 支持mp4a
      content = Fmp4.mp4a(data);
    } else {
      content = Fmp4.avc1(data);
    }
    return Fmp4.initBox(16 + content.byteLength, 'stsd', Fmp4.extension(0, 0), new Uint8Array([0x00, 0x00, 0x00, 0x01]), content);
  }
  static mp4a(data) {
    let content = new Uint8Array([0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // data_reference_index
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // reserved
    0x00, data.channelCount, // channelcount
    0x00, 0x10, // sampleSize:16bits
    0x00, 0x00, 0x00, 0x00, // reserved2
    data.samplerate >> 8 & 0xff, data.samplerate & 0xff, //
    0x00, 0x00]);
    let esds = Fmp4.esds(data.config);
    return Fmp4.initBox(8 + content.byteLength + esds.byteLength, 'mp4a', content, esds);
  }
  static esds(config = [43, 146, 8, 0]) {
    const configlen = config.length;
    let buffer = new _xgplayerUtils.Buffer();
    let content = new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags

    0x03, // descriptor_type
    0x17 + configlen, // length
    0x00, 0x01, // es_id
    0x00, // stream_priority

    0x04, // descriptor_type
    0x0f + configlen, // length
    0x40, // codec : mpeg4_audio
    0x15, // stream_type
    0x00, 0x00, 0x00, // buffer_size
    0x00, 0x00, 0x00, 0x00, // maxBitrate
    0x00, 0x00, 0x00, 0x00, // avgBitrate

    0x05 // descriptor_type
    ].concat([configlen]).concat(config).concat([0x06, 0x01, 0x02]));
    buffer.write(Fmp4.size(8 + content.byteLength), Fmp4.type('esds'), content);
    return buffer.buffer;
  }
  static avc1(data) {
    let buffer = new _xgplayerUtils.Buffer();
    let size = 40; // 8(avc1)+8(avcc)+8(btrt)+16(pasp)
    // let sps = data.sps
    // let pps = data.pps
    let width = data.width;
    let height = data.height;
    let hSpacing = data.parRatio.height;
    let vSpacing = data.parRatio.width;
    // let avccBuffer = new Buffer()
    // avccBuffer.write(new Uint8Array([
    //   0x01, // version
    //   sps[1], // profile
    //   sps[2], // profile compatible
    //   sps[3], // level
    //   0xfc | 3,
    //   0xE0 | 1 // 目前只处理一个sps
    // ].concat([sps.length >>> 8 & 0xff, sps.length & 0xff])))
    // avccBuffer.write(sps, new Uint8Array([1, pps.length >>> 8 & 0xff, pps.length & 0xff]), pps)

    let avcc = data.avcc;
    let avc1 = new Uint8Array([0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // data_reference_index
    0x00, 0x00, // pre_defined
    0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre_defined
    width >> 8 & 0xff, width & 0xff, // width
    height >> 8 & 0xff, height & 0xff, // height
    0x00, 0x48, 0x00, 0x00, // horizresolution
    0x00, 0x48, 0x00, 0x00, // vertresolution
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // frame_count
    0x12, 0x64, 0x61, 0x69, 0x6C, // dailymotion/hls.js
    0x79, 0x6D, 0x6F, 0x74, 0x69, 0x6F, 0x6E, 0x2F, 0x68, 0x6C, 0x73, 0x2E, 0x6A, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // compressorname
    0x00, 0x18, // depth = 24
    0x11, 0x11]); // pre_defined = -1
    let btrt = new Uint8Array([0x00, 0x1c, 0x9c, 0x80, // bufferSizeDB
    0x00, 0x2d, 0xc6, 0xc0, // maxBitrate
    0x00, 0x2d, 0xc6, 0xc0 // avgBitrate
    ]);
    let pasp = new Uint8Array([hSpacing >> 24, // hSpacing
    hSpacing >> 16 & 0xff, hSpacing >> 8 & 0xff, hSpacing & 0xff, vSpacing >> 24, // vSpacing
    vSpacing >> 16 & 0xff, vSpacing >> 8 & 0xff, vSpacing & 0xff]);

    buffer.write(Fmp4.size(size + avc1.byteLength + avcc.byteLength + btrt.byteLength), Fmp4.type('avc1'), avc1, Fmp4.size(8 + avcc.byteLength), Fmp4.type('avcC'), avcc, Fmp4.size(20), Fmp4.type('btrt'), btrt, Fmp4.size(16), Fmp4.type('pasp'), pasp);
    return buffer.buffer;
  }
  static stts() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);
    return Fmp4.initBox(16, 'stts', content);
  }
  static stsc() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);
    return Fmp4.initBox(16, 'stsc', content);
  }
  static stco() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);
    return Fmp4.initBox(16, 'stco', content);
  }
  static stsz() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, // sample_size
    0x00, 0x00, 0x00, 0x00 // sample_count
    ]);
    return Fmp4.initBox(20, 'stsz', content);
  }
  static mvex(duration, timescale = 1000, trackID) {
    let buffer = new _xgplayerUtils.Buffer();
    let mehd = _xgplayerUtils.Buffer.writeUint32(duration);
    buffer.write(Fmp4.size(56), Fmp4.type('mvex'), Fmp4.size(16), Fmp4.type('mehd'), Fmp4.extension(0, 0), mehd, Fmp4.trex(trackID));
    return buffer.buffer;
  }
  static trex(id) {
    let content = new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags
    id >> 24, id >> 16 & 0xff, id >> 8 & 0xff, id & 0xff, // track_ID
    0x00, 0x00, 0x00, 0x01, // default_sample_description_index
    0x00, 0x00, 0x00, 0x00, // default_sample_duration
    0x00, 0x00, 0x00, 0x00, // default_sample_size
    0x00, 0x01, 0x00, 0x01 // default_sample_flags
    ]);
    return Fmp4.initBox(8 + content.byteLength, 'trex', content);
  }
  static moof(data) {
    let size = 8;
    let mfhd = Fmp4.mfhd();
    let traf = Fmp4.traf(data);
    [mfhd, traf].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'moof', mfhd, traf);
  }
  static mfhd() {
    let content = _xgplayerUtils.Buffer.writeUint32(Fmp4.sequence);
    Fmp4.sequence += 1;
    return Fmp4.initBox(16, 'mfhd', Fmp4.extension(0, 0), content);
  }
  static traf(data) {
    let size = 8;
    let tfhd = Fmp4.tfhd(data.id);
    let tfdt = Fmp4.tfdt(data.time);
    let sdtp = Fmp4.sdtp(data);
    let trun = Fmp4.trun(data, sdtp.byteLength);

    [tfhd, tfdt, trun, sdtp].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'traf', tfhd, tfdt, trun, sdtp);
  }
  static tfhd(id) {
    let content = _xgplayerUtils.Buffer.writeUint32(id);
    return Fmp4.initBox(16, 'tfhd', Fmp4.extension(0, 0), content);
  }
  static tfdt(time) {
    // let upper = Math.floor(time / (UINT32_MAX + 1)),
    //     lower = Math.floor(time % (UINT32_MAX + 1));
    return Fmp4.initBox(16, 'tfdt', Fmp4.extension(0, 0), _xgplayerUtils.Buffer.writeUint32(time));
  }
  static trun(data, sdtpLength) {
    // let id = data.id;
    // let ceil = id === 1 ? 16 : 12;
    let buffer = new _xgplayerUtils.Buffer();
    let sampleCount = _xgplayerUtils.Buffer.writeUint32(data.samples.length);
    // mdat-header 8
    // moof-header 8
    // mfhd 16
    // traf-header 8
    // thhd 16
    // tfdt 20
    // trun-header 12
    // sampleCount 4
    // data-offset 4
    // samples.length
    let offset = _xgplayerUtils.Buffer.writeUint32(8 + 8 + 16 + 8 + 16 + 16 + 12 + 4 + 4 + 16 * data.samples.length + sdtpLength);
    buffer.write(Fmp4.size(20 + 16 * data.samples.length), Fmp4.type('trun'), new Uint8Array([0x00, 0x00, 0x0F, 0x01]), sampleCount, offset);

    // let size = buffer.buffer.byteLength
    // let writeOffset = 0
    // data.samples.forEach(() => {
    //   size += 16
    // })
    //
    // let trunBox = new Uint8Array(size)

    // trunBox.set(buffer.buffer, 0)

    data.samples.forEach(item => {
      const flags = item.flags;
      // console.log(item.type, item.dts, item.duration)

      buffer.write(new Uint8Array([item.duration >>> 24 & 0xFF, // sample_duration
      item.duration >>> 16 & 0xFF, item.duration >>> 8 & 0xFF, item.duration & 0xFF, item.size >>> 24 & 0xFF, // sample_size
      item.size >>> 16 & 0xFF, item.size >>> 8 & 0xFF, item.size & 0xFF, flags.isLeading << 2 | flags.dependsOn, // sample_flags
      flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.isNonSync, 0x00, 0x00, // sample_degradation_priority
      item.cts >>> 24 & 0xFF, // sample_composition_time_offset
      item.cts >>> 16 & 0xFF, item.cts >>> 8 & 0xFF, item.cts & 0xFF]));
      // writeOffset += 16
      // buffer.write(Buffer.writeUint32(0));
    });
    return buffer.buffer;
  }
  static sdtp(data) {
    let buffer = new _xgplayerUtils.Buffer();
    buffer.write(Fmp4.size(12 + data.samples.length), Fmp4.type('sdtp'), Fmp4.extension(0, 0));
    data.samples.forEach(item => {
      const flags = item.flags;
      const num = flags.isLeading << 6 | // is_leading: 2 (bit)
      flags.dependsOn << 4 | // sample_depends_on
      flags.isDependedOn << 2 | // sample_is_depended_on
      flags.hasRedundancy; // sample_has_redundancy

      buffer.write(new Uint8Array([num]));
    });
    return buffer.buffer;
  }
  static mdat(data) {
    let buffer = new _xgplayerUtils.Buffer();
    let size = 8;
    data.samples.forEach(item => {
      size += item.size;
    });
    buffer.write(Fmp4.size(size), Fmp4.type('mdat'));
    let mdatBox = new Uint8Array(size);
    let offset = 0;
    mdatBox.set(buffer.buffer, offset);
    offset += 8;
    data.samples.forEach(item => {
      item.buffer.forEach(unit => {
        mdatBox.set(unit, offset);
        offset += unit.byteLength;
        // buffer.write(unit.data);
      });
    });
    return mdatBox;
  }
}
Fmp4.type = name => {
  return new Uint8Array([name.charCodeAt(0), name.charCodeAt(1), name.charCodeAt(2), name.charCodeAt(3)]);
};
Fmp4.sequence = 1;

exports.default = Fmp4;

/***/ }),

/***/ "../xgplayer-remux/src/mp4/index.js":
/*!******************************************!*\
  !*** ../xgplayer-remux/src/mp4/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _fmp = __webpack_require__(/*! ./fmp4 */ "../xgplayer-remux/src/mp4/fmp4.js");

var _fmp2 = _interopRequireDefault(_fmp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const REMUX_EVENTS = _xgplayerUtils.EVENTS.REMUX_EVENTS;

class Mp4Remuxer {
  constructor() {
    this._dtsBase = 0;
    this._isDtsBaseInited = false;

    this.isFirstVideo = true;
    this.isFirstAudio = true;

    this.videoAllDuration = 0;
    this.audioAllDuration = 0;
  }

  init() {
    this.on(REMUX_EVENTS.REMUX_MEDIA, this.remux.bind(this));
    this.on(REMUX_EVENTS.REMUX_METADATA, this.onMetaDataReady.bind(this));
    this.on(REMUX_EVENTS.DETECT_CHANGE_STREAM, this.resetDtsBase.bind(this));
  }

  destroy() {
    this._dtsBase = -1;
    this._dtsBaseInited = false;
  }

  reset() {
    this._dtsBase = 0;
    this._isDtsBaseInited = false;
  }

  remux() {
    const { audioTrack, videoTrack } = this._context.getInstance('TRACKS');
    !this._isDtsBaseInited && this.calcDtsBase(audioTrack, videoTrack);

    this._remuxVideo(videoTrack);
    this._remuxAudio(audioTrack);
  }

  resetDtsBase() {
    // for hls 中途切换 meta后seek
    this._dtsBase = 0;
    this._dtsBaseInited = false;
  }

  seek() {}

  onMetaDataReady(type) {
    let track;

    if (type === 'audio') {
      const { audioTrack } = this._context.getInstance('TRACKS');
      track = audioTrack;
    } else {
      const { videoTrack } = this._context.getInstance('TRACKS');
      track = videoTrack;
    }

    let presourcebuffer = this._context.getInstance('PRE_SOURCE_BUFFER');
    let source = presourcebuffer.getSource(type);
    if (!source) {
      source = presourcebuffer.createSource(type);
    }

    source.mimetype = track.meta.codec;
    source.init = this.remuxInitSegment(type, track.meta);
    // source.inited = false;

    // this.resetDtsBase()
    this.emit(REMUX_EVENTS.INIT_SEGMENT, type);
  }

  remuxInitSegment(type, meta) {
    let initSegment = new _xgplayerUtils.Buffer();
    let ftyp = _fmp2.default.ftyp();
    let moov = _fmp2.default.moov({ type, meta: meta });

    initSegment.write(ftyp, moov);
    return initSegment;
  }

  calcDtsBase(audioTrack, videoTrack) {
    if (!audioTrack.samples.length && !videoTrack.samples.length) {
      return;
    }

    let audioBase = Infinity;
    let videoBase = Infinity;

    if (audioTrack.samples && audioTrack.samples.length) {
      audioBase = audioTrack.samples[0].dts;
    }
    if (videoTrack.samples && videoTrack.samples.length) {
      videoBase = videoTrack.samples[0].dts;
    }

    this._dtsBase = Math.min(audioBase, videoBase);
    this._isDtsBaseInited = true;
  }

  _remuxVideo(videoTrack) {
    const track = videoTrack;

    if (!videoTrack.samples || !videoTrack.samples.length) {
      return;
    }

    let { samples } = track;
    let firstDts = -1;

    let initSegment = null;
    const mp4Samples = [];
    const mdatBox = {
      samples: []
    };

    while (samples.length) {
      const avcSample = samples.shift();

      const { isKeyframe, options } = avcSample;
      if (!this.isFirstAudio && options && options.meta) {
        initSegment = this.remuxInitSegment('video', options.meta);
        options.meta = null;
        samples.unshift(avcSample);
        if (!options.isContinue) {
          this.resetDtsBase();
        }
        break;
      }

      let dts = avcSample.dts - this._dtsBase;

      if (firstDts === -1) {
        firstDts = dts;
      }

      let cts;
      let pts;
      if (avcSample.pts !== undefined) {
        pts = avcSample.pts - this._dtsBase;
        cts = pts - dts;
      }
      if (avcSample.cts !== undefined) {
        pts = avcSample.cts + dts;
        cts = avcSample.cts;
      }

      let mdatSample = {
        buffer: [],
        size: 0
      };
      mdatBox.samples.push(mdatSample);
      mdatSample.buffer.push(avcSample.data);
      mdatSample.size += avcSample.data.byteLength;

      let sampleDuration = 0;
      if (samples.length >= 1) {
        const nextDts = samples[0].dts - this._dtsBase;
        sampleDuration = nextDts - dts;
      } else {
        if (mp4Samples.length >= 1) {
          // lastest sample, use second last duration
          sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
        } else {
          // the only one sample, use reference duration
          sampleDuration = this.videoMeta.refSampleDuration;
        }
      }
      this.videoAllDuration += sampleDuration;
      // console.log(`dts ${dts}`, `pts ${pts}`, `cts: ${cts}`, `duration: ${sampleDuration}`, avcSample)
      mp4Samples.push({
        dts,
        cts,
        pts,
        data: avcSample.data,
        size: avcSample.data.byteLength,
        isKeyframe,
        duration: sampleDuration,
        flags: {
          isLeading: 0,
          dependsOn: isKeyframe ? 2 : 1,
          isDependedOn: isKeyframe ? 1 : 0,
          hasRedundancy: 0,
          isNonSync: isKeyframe ? 0 : 1
        },
        originDts: dts,
        type: 'video'
      });
    }

    let moofMdat = new _xgplayerUtils.Buffer();
    if (mp4Samples.length) {
      const moof = _fmp2.default.moof({
        id: track.meta.id,
        time: firstDts,
        samples: mp4Samples
      });
      const mdat = _fmp2.default.mdat(mdatBox);
      moofMdat.write(moof, mdat);

      this.writeToSource('video', moofMdat);
    }

    if (initSegment) {
      this.writeToSource('video', initSegment);

      if (samples.length) {
        // second part of stream change
        track.samples = samples;
        return this._remuxVideo(track);
      }
    }

    this.isFirstVideo = false;
    this.emit(REMUX_EVENTS.MEDIA_SEGMENT, 'video');

    const lastSample = mp4Samples[mp4Samples.length - 1];
    this._videoNextDts = lastSample.dts + lastSample.duration;
    track.samples = [];
    track.length = 0;
  }

  _remuxAudio(track) {
    const { samples } = track;
    let firstDts = -1;
    let mp4Samples = [];

    let initSegment = null;
    const mdatBox = {
      samples: []
    };
    if (!samples || !samples.length) {
      return;
    }
    let isFirstDtsInited = false;
    while (samples.length) {
      let sample = samples.shift();
      const { data, options } = sample;
      if (!this.isFirstAudio && options && options.meta) {
        initSegment = this.remuxInitSegment('audio', options.meta);
        options.meta = null;
        samples.unshift(sample);
        if (!options.isContinue) {
          this.resetDtsBase();
        }
        break;
      }

      let dts = sample.dts - this._dtsBase;
      const originDts = dts;
      if (!isFirstDtsInited) {
        firstDts = dts;
        isFirstDtsInited = true;
      }

      let sampleDuration = 0;

      if (this.audioMeta.refSampleDurationFixed) {
        sampleDuration = this.audioMeta.refSampleDurationFixed;
      } else if (samples.length >= 1) {
        const nextDts = samples[0].dts - this._dtsBase;
        sampleDuration = nextDts - dts;
      } else {
        if (mp4Samples.length >= 1) {
          // use second last sample duration
          sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
        } else {
          // the only one sample, use reference sample duration
          sampleDuration = this.audioMeta.refSampleDuration;
        }
      }

      // console.log('remux audio ', dts)
      this.audioAllDuration += sampleDuration;
      const mp4Sample = {
        dts,
        pts: dts,
        cts: 0,
        size: data.byteLength,
        duration: sample.duration ? sample.duration : sampleDuration,
        flags: {
          isLeading: 0,
          dependsOn: 2,
          isDependedOn: 1,
          hasRedundancy: 0,
          isNonSync: 0
        },
        isKeyframe: true,
        originDts,
        type: 'audio'
      };

      let mdatSample = {
        buffer: [],
        size: 0
      };
      mdatSample.buffer.push(data);
      mdatSample.size += data.byteLength;

      mdatBox.samples.push(mdatSample);

      mp4Samples.push(mp4Sample);
    }

    const moofMdat = new _xgplayerUtils.Buffer();

    if (mp4Samples.length) {
      const moof = _fmp2.default.moof({
        id: track.meta.id,
        time: firstDts,
        samples: mp4Samples
      });
      const mdat = _fmp2.default.mdat(mdatBox);
      moofMdat.write(moof, mdat);

      this.writeToSource('audio', moofMdat);
    }

    if (initSegment) {
      this.writeToSource('audio', initSegment);
      if (samples.length) {
        // second part of stream change
        track.samples = samples;
        return this._remuxAudio(track);
      }
    }

    this.isFirstAudio = false;
    this.emit(REMUX_EVENTS.MEDIA_SEGMENT, 'audio', moofMdat);

    const lastSample = mp4Samples[mp4Samples.length - 1];
    this._videoNextDts = lastSample.dts + lastSample.duration;
    track.samples = [];
    track.length = 0;
  }

  writeToSource(type, buffer) {
    let presourcebuffer = this._context.getInstance('PRE_SOURCE_BUFFER');
    let source = presourcebuffer.getSource(type);
    if (!source) {
      source = presourcebuffer.createSource(type);
    }

    source.data.push(buffer);
  }

  initSilentAudio(dts, duration) {
    const unit = Mp4Remuxer.getSilentFrame(this.audioMeta.channelCount);
    return {
      dts,
      pts: dts,
      cts: 0,
      duration,
      unit,
      size: unit.byteLength,
      originDts: dts,
      type: 'video'
    };
  }

  get videoMeta() {
    return this._context.getInstance('TRACKS').videoTrack.meta;
  }
  get audioMeta() {
    return this._context.getInstance('TRACKS').audioTrack.meta;
  }

  static getSilentFrame(channelCount) {
    if (channelCount === 1) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
    } else if (channelCount === 2) {
      return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
    } else if (channelCount === 3) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
    } else if (channelCount === 4) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
    } else if (channelCount === 5) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
    } else if (channelCount === 6) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
    }
    return null;
  }
}
exports.default = Mp4Remuxer;

/***/ }),

/***/ "../xgplayer-utils/index.js":
/*!**********************************!*\
  !*** ../xgplayer-utils/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Context: __webpack_require__(/*! ./src/context */ "../xgplayer-utils/src/context.js").default,

  // Modules from constants
  EVENTS: __webpack_require__(/*! ./src/constants/events */ "../xgplayer-utils/src/constants/events.js").default,
  WORKER_COMMANDS: __webpack_require__(/*! ./src/constants/worker-commands */ "../xgplayer-utils/src/constants/worker-commands.js").default,

  // Modules from env
  sniffer: __webpack_require__(/*! ./src/env/sniffer */ "../xgplayer-utils/src/env/sniffer.js").default,
  isLe: __webpack_require__(/*! ./src/env/isle */ "../xgplayer-utils/src/env/isle.js").default,
  UTF8: __webpack_require__(/*! ./src/env/utf8 */ "../xgplayer-utils/src/env/utf8.js").default,

  // Models
  MediaInfo: __webpack_require__(/*! ./src/models/media-info */ "../xgplayer-utils/src/models/media-info.js").default,
  MediaSample: __webpack_require__(/*! ./src/models/media-sample */ "../xgplayer-utils/src/models/media-sample.js").default,
  MediaSegment: __webpack_require__(/*! ./src/models/media-segment */ "../xgplayer-utils/src/models/media-segment.js").default,
  MediaSegmentList: __webpack_require__(/*! ./src/models/media-segment-list */ "../xgplayer-utils/src/models/media-segment-list.js").default,
  AudioTrackMeta: __webpack_require__(/*! ./src/models/track-meta */ "../xgplayer-utils/src/models/track-meta.js").AudioTrackMeta,
  VideoTrackMeta: __webpack_require__(/*! ./src/models/track-meta */ "../xgplayer-utils/src/models/track-meta.js").VideoTrackMeta,
  AudioTrackSample: __webpack_require__(/*! ./src/models/track-sample */ "../xgplayer-utils/src/models/track-sample.js").AudioTrackSample,
  VideoTrackSample: __webpack_require__(/*! ./src/models/track-sample */ "../xgplayer-utils/src/models/track-sample.js").VideoTrackSample,

  // Modules from mse
  Mse: __webpack_require__(/*! ./src/mse/index */ "../xgplayer-utils/src/mse/index.js").default,

  // Modules from write
  Stream: __webpack_require__(/*! ./src/write/stream */ "../xgplayer-utils/src/write/stream.js").default,
  Buffer: __webpack_require__(/*! ./src/write/buffer */ "../xgplayer-utils/src/write/buffer.js").default,

  MobileVideo: __webpack_require__(/*! ./src/mobile/mobile-video */ "../xgplayer-utils/src/mobile/mobile-video.js"),
  // Crypto
  Crypto: __webpack_require__(/*! ./src/crypto */ "../xgplayer-utils/src/crypto/index.js").default
};

/***/ }),

/***/ "../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js":
/*!***********************************************************************!*\
  !*** ../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ResultConstructor) {
  var totalLength = 0;

  for (var _len = arguments.length, arrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arr = _step.value;

      totalLength += arr.length;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var result = new ResultConstructor(totalLength);
  var offset = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arrays[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _arr = _step2.value;

      result.set(_arr, offset);
      offset += _arr.length;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
};

/***/ }),

/***/ "../xgplayer-utils/node_modules/concat-typed-array/lib/index.js":
/*!**********************************************************************!*\
  !*** ../xgplayer-utils/node_modules/concat-typed-array/lib/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _concat = __webpack_require__(/*! ./concat */ "../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js");

var _concat2 = _interopRequireDefault(_concat);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = _concat2.default;

/***/ }),

/***/ "../xgplayer-utils/node_modules/webworkify-webpack/index.js":
/*!******************************************************************!*\
  !*** ../xgplayer-utils/node_modules/webworkify-webpack/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function webpackBootstrapFunc(modules) {
  /******/ // The module cache
  /******/var installedModules = {};

  /******/ // The require function
  /******/function __webpack_require__(moduleId) {

    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId])
      /******/return installedModules[moduleId].exports;

    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };

    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    /******/ // Flag the module as loaded
    /******/module.l = true;

    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }

  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;

  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;

  /******/ // identity function for calling harmony imports with the correct context
  /******/__webpack_require__.i = function (value) {
    return value;
  };

  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };

  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };

  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };

  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "/";

  /******/ // on error function for async loading
  /******/__webpack_require__.oe = function (err) {
    console.error(err);throw err;
  };

  var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE);
  return f.default || f; // try to call default if defined to also support babel esmodule exports
}

var moduleNameReqExp = '[\\.|\\-|\\+|\\w|\/|@]+';
var dependencyRegExp = '\\(\\s*(\/\\*.*?\\*\/)?\\s*.*?(' + moduleNameReqExp + ').*?\\)'; // additional chars when output.pathinfo is true

// http://stackoverflow.com/a/2593661/130442
function quoteRegExp(str) {
  return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}

function isNumeric(n) {
  return !isNaN(1 * n); // 1 * n converts integers, integers as string ("123"), 1e3 and "1e3" to integers and strings to NaN
}

function getModuleDependencies(sources, module, queueName) {
  var retval = {};
  retval[queueName] = [];

  var fnString = module.toString();
  var wrapperSignature = fnString.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
  if (!wrapperSignature) return retval;
  var webpackRequireName = wrapperSignature[1];

  // main bundle deps
  var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + dependencyRegExp, 'g');
  var match;
  while (match = re.exec(fnString)) {
    if (match[3] === 'dll-reference') continue;
    retval[queueName].push(match[3]);
  }

  // dll deps
  re = new RegExp('\\(' + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, 'g');
  while (match = re.exec(fnString)) {
    if (!sources[match[2]]) {
      retval[queueName].push(match[1]);
      sources[match[2]] = __webpack_require__(match[1]).m;
    }
    retval[match[2]] = retval[match[2]] || [];
    retval[match[2]].push(match[4]);
  }

  // convert 1e3 back to 1000 - this can be important after uglify-js converted 1000 to 1e3
  var keys = Object.keys(retval);
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < retval[keys[i]].length; j++) {
      if (isNumeric(retval[keys[i]][j])) {
        retval[keys[i]][j] = 1 * retval[keys[i]][j];
      }
    }
  }

  return retval;
}

function hasValuesInQueues(queues) {
  var keys = Object.keys(queues);
  return keys.reduce(function (hasValues, key) {
    return hasValues || queues[key].length > 0;
  }, false);
}

function getRequiredModules(sources, moduleId) {
  var modulesQueue = {
    main: [moduleId]
  };
  var requiredModules = {
    main: []
  };
  var seenModules = {
    main: {}
  };

  while (hasValuesInQueues(modulesQueue)) {
    var queues = Object.keys(modulesQueue);
    for (var i = 0; i < queues.length; i++) {
      var queueName = queues[i];
      var queue = modulesQueue[queueName];
      var moduleToCheck = queue.pop();
      seenModules[queueName] = seenModules[queueName] || {};
      if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck]) continue;
      seenModules[queueName][moduleToCheck] = true;
      requiredModules[queueName] = requiredModules[queueName] || [];
      requiredModules[queueName].push(moduleToCheck);
      var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName);
      var newModulesKeys = Object.keys(newModules);
      for (var j = 0; j < newModulesKeys.length; j++) {
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || [];
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]]);
      }
    }
  }

  return requiredModules;
}

module.exports = function (moduleId, options) {
  options = options || {};
  var sources = {
    main: __webpack_require__.m
  };

  var requiredModules = options.all ? { main: Object.keys(sources.main) } : getRequiredModules(sources, moduleId);

  var src = '';

  Object.keys(requiredModules).filter(function (m) {
    return m !== 'main';
  }).forEach(function (module) {
    var entryModule = 0;
    while (requiredModules[module][entryModule]) {
      entryModule++;
    }
    requiredModules[module].push(entryModule);
    sources[module][entryModule] = '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })';
    src = src + 'var ' + module + ' = (' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(entryModule)) + ')({' + requiredModules[module].map(function (id) {
      return '' + JSON.stringify(id) + ': ' + sources[module][id].toString();
    }).join(',') + '});\n';
  });

  src = src + 'new ((' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.main.map(function (id) {
    return '' + JSON.stringify(id) + ': ' + sources.main[id].toString();
  }).join(',') + '}))(self);';

  var blob = new window.Blob([src], { type: 'text/javascript' });
  if (options.bare) {
    return blob;
  }

  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

  var workerUrl = URL.createObjectURL(blob);
  var worker = new window.Worker(workerUrl);
  worker.objectURL = workerUrl;

  return worker;
};

/***/ }),

/***/ "../xgplayer-utils/src/constants/events.js":
/*!*************************************************!*\
  !*** ../xgplayer-utils/src/constants/events.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const LOADER_EVENTS = {
  LADER_START: 'LOADER_START',
  LOADER_DATALOADED: 'LOADER_DATALOADED',
  LOADER_COMPLETE: 'LOADER_COMPLETE',
  LOADER_ERROR: 'LOADER_ERROR'
};

const DEMUX_EVENTS = {
  DEMUX_START: 'DEMUX_START',
  DEMUX_COMPLETE: 'DEMUX_COMPLETE',
  DEMUX_ERROR: 'DEMUX_ERROR',
  METADATA_PARSED: 'METADATA_PARSED',
  VIDEO_METADATA_CHANGE: 'VIDEO_METADATA_CHANGE',
  AUDIO_METADATA_CHANGE: 'AUDIO_METADATA_CHANGE',
  MEDIA_INFO: 'MEDIA_INFO'
};

const REMUX_EVENTS = {
  REMUX_METADATA: 'REMUX_METADATA',
  REMUX_MEDIA: 'REMUX_MEDIA',
  MEDIA_SEGMENT: 'MEDIA_SEGMENT',
  REMUX_ERROR: 'REMUX_ERROR',
  INIT_SEGMENT: 'INIT_SEGMENT',
  DETECT_CHANGE_STREAM: 'DETECT_CHANGE_STREAM'
};

const MSE_EVENTS = {
  SOURCE_UPDATE_END: 'SOURCE_UPDATE_END'

  // hls专有events
};const HLS_EVENTS = {
  RETRY_TIME_EXCEEDED: 'RETRY_TIME_EXCEEDED'
};

const CRYTO_EVENTS = {
  START_DECRYPT: 'START_DECRYPT',
  DECRYPTED: 'DECRYPTED'
};
const ALLEVENTS = Object.assign({}, LOADER_EVENTS, DEMUX_EVENTS, REMUX_EVENTS, MSE_EVENTS, HLS_EVENTS);

const FlvAllowedEvents = [];
const HlsAllowedEvents = [];

for (let key in ALLEVENTS) {
  if (ALLEVENTS.hasOwnProperty(key)) {
    FlvAllowedEvents.push(ALLEVENTS[key]);
  }
}

for (let key in ALLEVENTS) {
  if (ALLEVENTS.hasOwnProperty(key)) {
    HlsAllowedEvents.push(ALLEVENTS[key]);
  }
}

exports.default = {
  ALLEVENTS,
  HLS_EVENTS,
  REMUX_EVENTS,
  DEMUX_EVENTS,
  MSE_EVENTS,
  LOADER_EVENTS,
  FlvAllowedEvents,
  HlsAllowedEvents,
  CRYTO_EVENTS
};

/***/ }),

/***/ "../xgplayer-utils/src/constants/worker-commands.js":
/*!**********************************************************!*\
  !*** ../xgplayer-utils/src/constants/worker-commands.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const CONTEXT_COMOMANDS = exports.CONTEXT_COMOMANDS = {
  ON: 'on',
  ONCE: 'once',
  OFF: 'off',
  EMIT: 'emit',
  DESTROY: 'destroy'
};

/***/ }),

/***/ "../xgplayer-utils/src/context.js":
/*!****************************************!*\
  !*** ../xgplayer-utils/src/context.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mediaInfo = __webpack_require__(/*! ./models/media-info */ "../xgplayer-utils/src/models/media-info.js");

var _mediaInfo2 = _interopRequireDefault(_mediaInfo);

var _events = __webpack_require__(/*! events */ "../../node_modules/events/events.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DIRECT_EMIT_FLAG = '__TO__';

class Context {
  constructor(allowedEvents = []) {
    this._emitter = new _events.EventEmitter();
    this._instanceMap = {}; // 所有的解码流程实例
    this._clsMap = {}; // 构造函数的map
    this._inited = false;
    this.mediaInfo = new _mediaInfo2.default();
    this.allowedEvents = allowedEvents;
    this._hooks = {}; // 注册在事件前/后的钩子，例如 before('DEMUX_COMPLETE')
  }

  /**
   * 从上下文中获取解码流程实例，如果没有实例，构造一个
   * @param tag
   * @param args
   * @returns {*}
   */
  getInstance(tag) {
    const instance = this._instanceMap[tag];
    if (instance) {
      return instance;
    } else {
      // throw new Error(`${tag}实例尚未初始化`)
      return null;
    }
  }

  /**
   * 初始化具体实例
   * @param tag
   * @param args
   */
  initInstance(tag, ...args) {
    if (this._clsMap[tag]) {
      const newInstance = new this._clsMap[tag](...args);
      this._instanceMap[tag] = newInstance;
      if (newInstance.init) {
        newInstance.init(); // TODO: lifecircle
      }
      return newInstance;
    } else {
      throw new Error(`${tag}未在context中注册`);
    }
  }

  /**
   * 避免大量的initInstance调用，初始化所有的组件
   * @param config
   */
  init(config) {
    if (this._inited) {
      return;
    }
    for (let tag in this._clsMap) {
      // if not inited, init an instance
      if (this._clsMap.hasOwnProperty(tag) && !this._instanceMap[tag]) {
        this.initInstance(tag, config);
      }
    }
    this._inited = true;
  }

  /**
   * 注册一个上下文流程，提供安全的事件发送机制
   * @param tag
   * @param cls
   */
  registry(tag, cls) {
    const emitter = this._emitter;
    const checkMessageName = this._isMessageNameValid.bind(this);
    const self = this;
    const enhanced = class extends cls {
      constructor(...args) {
        super(...args);
        this.listeners = {};
        this.onceListeners = {};
        this.TAG = tag;
        this._context = self;
      }

      on(messageName, callback) {
        checkMessageName(messageName);

        if (this.listeners[messageName]) {
          this.listeners[messageName].push(callback);
        } else {
          this.listeners[messageName] = [callback];
        }

        emitter.on(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback); // 建立定向通信监听
        return emitter.on(messageName, callback);
      }

      /**
       * 在某个事件触发前执行
       * @param messageName
       * @param callback
       */
      before(messageName, callback) {
        checkMessageName(messageName);
        if (self._hooks[messageName]) {
          self._hooks[messageName].push(callback);
        } else {
          self._hooks[messageName] = [callback];
        }
      }

      once(messageName, callback) {
        checkMessageName(messageName);

        if (this.onceListeners[messageName]) {
          this.onceListeners[messageName].push(callback);
        } else {
          this.onceListeners[messageName] = [callback];
        }

        emitter.once(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback);
        return emitter.once(messageName, callback);
      }

      emit(messageName, ...args) {
        checkMessageName(messageName);

        const beforeList = self._hooks ? self._hooks[messageName] : null;

        if (beforeList) {
          for (let i = 0, len = beforeList.length; i < len; i++) {
            const callback = beforeList[i];
            callback();
          }
        }
        return emitter.emit(messageName, ...args);
      }

      /**
       * 定向发送给某个组件单例的消息
       * @param messageName
       * @param args
       */
      emitTo(tag, messageName, ...args) {
        checkMessageName(messageName);

        return emitter.emit(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, ...args);
      }

      off(messageName, callback) {
        checkMessageName(messageName);
        return emitter.off(messageName, callback);
      }

      removeListeners() {
        const hasOwn = Object.prototype.hasOwnProperty.bind(this.listeners);

        for (let messageName in this.listeners) {
          if (hasOwn(messageName)) {
            const callbacks = this.listeners[messageName] || [];
            for (let i = 0; i < callbacks.length; i++) {
              const callback = callbacks[i];
              emitter.off(messageName, callback);
              emitter.off(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback);
            }
          }
        }

        for (let messageName in this.onceListeners) {
          if (hasOwn(messageName)) {
            const callbacks = this.onceListeners[messageName] || [];
            for (let i = 0; i < callbacks.length; i++) {
              const callback = callbacks[i];
              emitter.off(messageName, callback);
              emitter.off(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback);
            }
          }
        }
      }

      /**
       * 在组件销毁时，默认将它注册的事件全部卸载，确保不会造成内存泄漏
       */
      destroy() {
        // step1 unlisten events
        this.removeListeners();
        this.listeners = {};

        // step2 release from context
        delete self._instanceMap[tag];
        if (super.destroy) {
          return super.destroy();
        }
      }
    };
    this._clsMap[tag] = enhanced;

    /**
     * get instance immediately
     * e.g const instance = context.registry(tag, Cls)(config)
     * */
    return (...args) => {
      return this.initInstance(tag, ...args);
    };
  }

  /**
   * 对存在的实例进行
   */
  destroyInstances() {
    Object.keys(this._instanceMap).forEach(tag => {
      if (this._instanceMap[tag].destroy) {
        this._instanceMap[tag].destroy();
      }
    });
  }

  /**
   * 编解码流程无需关注事件的解绑
   */
  destroy() {
    this._emitter = null;
    this.allowedEvents = [];
    this._clsMap = null;
    this._context = null;
    this._hooks = null;
    this.destroyInstances();
  }

  /**
   * 对信道进行收拢
   * @param messageName
   * @private
   */
  _isMessageNameValid(messageName) {
    if (!this.allowedEvents.indexOf(messageName) < 0) {
      throw new Error(`unregistered message name: ${messageName}`);
    }
  }
}

exports.default = Context;

/***/ }),

/***/ "../xgplayer-utils/src/crypto/index.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/crypto/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _events = __webpack_require__(/*! ../constants/events */ "../xgplayer-utils/src/constants/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CRYTO_EVENTS = _events2.default.CRYTO_EVENTS;
class Crypto {
    constructor(config) {
        this.inputBuffer = config.inputbuffer;
        this.outputBuffer = config.outputbuffer;
        this.key = config.key;
        this.iv = config.iv;
        this.method = config.method;

        this.crypto = window.crypto || window.msCrypto;
    }

    init() {
        this.on(CRYTO_EVENTS.START_DECRYPT, this.decript.bind(this));
    }

    decript() {
        if (!this.aeskey) {
            let sbkey = this.crypto.subtle.importKey('raw', this.key.buffer, { name: 'AES-CBC' }, false, ['encrypt', 'decrypt']);
            sbkey.then(key => {
                this.aeskey = key;
                this.decriptData();
            });
        } else {
            this.decriptData();
        }
    }

    decriptData() {
        let inputbuffer = this._context.getInstance(this.inputBuffer);
        let outputbuffer = this._context.getInstance(this.outputBuffer);
        let data = inputbuffer.shift();
        if (data) {
            this.crypto.subtle.decrypt({ name: 'AES-CBC', iv: this.iv.buffer }, this.aeskey, data).then(res => {
                outputbuffer.push(new Uint8Array(res));
                this.emit(CRYTO_EVENTS.DECRYPTED);
                this.decriptData(data);
            });
        }
    }
}
exports.default = Crypto;

/***/ }),

/***/ "../xgplayer-utils/src/env/isle.js":
/*!*****************************************!*\
  !*** ../xgplayer-utils/src/env/isle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const le = function () {
  const buf = new ArrayBuffer(2);
  new DataView(buf).setInt16(0, 256, true); // little-endian write
  return new Int16Array(buf)[0] === 256; // platform-spec read, if equal then LE
}();

exports.default = le;

/***/ }),

/***/ "../xgplayer-utils/src/env/sniffer.js":
/*!********************************************!*\
  !*** ../xgplayer-utils/src/env/sniffer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const le = function () {
  const buf = new ArrayBuffer(2);
  new DataView(buf).setInt16(0, 256, true); // little-endian write
  return new Int16Array(buf)[0] === 256; // platform-spec read, if equal then LE
}();

const sniffer = {
  get device() {
    let r = sniffer.os;
    return r.isPc ? 'pc' : r.isTablet ? 'tablet' : 'mobile';
  },
  get browser() {
    let ua = navigator.userAgent.toLowerCase();
    let reg = {
      ie: /rv:([\d.]+)\) like gecko/,
      firfox: /firefox\/([\d.]+)/,
      chrome: /chrome\/([\d.]+)/,
      opera: /opera.([\d.]+)/,
      safari: /version\/([\d.]+).*safari/
    };
    return [].concat(Object.keys(reg).filter(key => reg[key].test(ua)))[0];
  },
  get os() {
    let ua = navigator.userAgent;
    let isWindowsPhone = /(?:Windows Phone)/.test(ua);
    let isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
    let isAndroid = /(?:Android)/.test(ua);
    let isFireFox = /(?:Firefox)/.test(ua);
    let isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua);
    let isPhone = /(?:iPhone)/.test(ua) && !isTablet;
    let isPc = !isPhone && !isAndroid && !isSymbian;
    return {
      isTablet,
      isPhone,
      isAndroid,
      isPc,
      isSymbian,
      isWindowsPhone,
      isFireFox
    };
  },

  get isLe() {
    return le;
  }
};

exports.default = sniffer;

/***/ }),

/***/ "../xgplayer-utils/src/env/utf8.js":
/*!*****************************************!*\
  !*** ../xgplayer-utils/src/env/utf8.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class UTF8 {
  static decode(uint8array) {
    const out = [];
    const input = uint8array;
    let i = 0;
    const length = uint8array.length;

    while (i < length) {
      if (input[i] < 0x80) {
        out.push(String.fromCharCode(input[i]));
        ++i;
        continue;
      } else if (input[i] < 0xC0) {
        // fallthrough
      } else if (input[i] < 0xE0) {
        if (UTF8._checkContinuation(input, i, 1)) {
          const ucs4 = (input[i] & 0x1F) << 6 | input[i + 1] & 0x3F;
          if (ucs4 >= 0x80) {
            out.push(String.fromCharCode(ucs4 & 0xFFFF));
            i += 2;
            continue;
          }
        }
      } else if (input[i] < 0xF0) {
        if (UTF8._checkContinuation(input, i, 2)) {
          const ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
          if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
            out.push(String.fromCharCode(ucs4 & 0xFFFF));
            i += 3;
            continue;
          }
        }
      } else if (input[i] < 0xF8) {
        if (UTF8._checkContinuation(input, i, 3)) {
          let ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12 | (input[i + 2] & 0x3F) << 6 | input[i + 3] & 0x3F;
          if (ucs4 > 0x10000 && ucs4 < 0x110000) {
            ucs4 -= 0x10000;
            out.push(String.fromCharCode(ucs4 >>> 10 | 0xD800));
            out.push(String.fromCharCode(ucs4 & 0x3FF | 0xDC00));
            i += 4;
            continue;
          }
        }
      }
      out.push(String.fromCharCode(0xFFFD));
      ++i;
    }

    return out.join('');
  }

  static _checkContinuation(uint8array, start, checkLength) {
    let array = uint8array;
    if (start + checkLength < array.length) {
      while (checkLength--) {
        if ((array[++start] & 0xC0) !== 0x80) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
}

exports.default = UTF8;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/audio-context.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/audio-context.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! events */ "../../node_modules/events/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AudioCtx extends _events2.default {
  constructor(config) {
    super();
    this.config = Object.assign({}, config);
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = new AudioContext();
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.context.destination);
    this.meta = undefined;
    this.samples = [];
    this.preloadTime = this.config.preloadTime || 3;
    this.duration = 0;

    this._currentBuffer = undefined;
    this._nextBuffer = undefined;
    this._lastpts = undefined;
    this._preDecode = [];
    this._currentTime = 0;
    this._decoding = false;
    // 记录外部传输的状态
    this._played = false;
  }

  get currentTime() {
    return this._currentTime;
  }

  decodeAudio(audioTrack) {
    let { samples } = audioTrack;
    let data = samples;
    audioTrack.samples = [];
    this.setAudioData(data);
  }
  setAudioData(data) {
    for (let i = 0; i < data.length; i++) {
      data[i].pts = data[i].pts === undefined ? data[i].dts : data[i].pts;
      this._preDecode.push(data[i]);
    }
    if (this._preDecode.length > 0) {
      if (this._lastpts === undefined) {
        this._lastpts = this._preDecode[0].pts;
      }
      if ((this._preDecode[this._preDecode.length - 1].pts - this._lastpts) / 1000 > this.preloadTime) {
        this.decodeAAC();
      }
    }
  }

  decodeAAC() {
    if (this._decoding) {
      return;
    }
    this._decoding = true;
    let data = this._preDecode;
    let samples = [];
    let _this = this;
    let sample = data.shift();
    while (sample) {
      let sampleData = AudioCtx.getAACData(this.meta, sample);
      samples.push(sampleData);
      this._lastpts = sample.pts;
      sample = data.shift();
    }
    let buffer = AudioCtx.combileData(samples);
    try {
      this.context.decodeAudioData(buffer.buffer, function (buffer) {
        let audioSource = _this.context.createBufferSource();
        audioSource.buffer = buffer;
        audioSource.onended = _this.onSourceEnded.bind(_this);
        _this.samples.push({
          time: _this.duration,
          duration: buffer.duration,
          data: audioSource
        });

        _this.duration += buffer.duration;

        if (!_this._currentBuffer) {
          _this._currentBuffer = _this.getTimeBuffer(_this.currentTime);

          if (_this._played) {
            _this.play();
          }
        }

        if (!_this._nextBuffer && _this._currentBuffer) {
          _this._nextBuffer = _this.getTimeBuffer(_this.currentTime + _this._currentBuffer.duration);
        }
        _this._decoding = false;

        if ((_this._preDecode.length > 0 && _this._preDecode[_this._preDecode.length - 1].pts - _this._lastpts) / 1000 >= _this.preloadTime) {
          _this.decodeAAC();
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  onSourceEnded() {
    if (!this._nextBuffer || !this._played) {
      return;
    }
    let audioSource = this._nextBuffer.data;
    audioSource.start();
    audioSource.connect(this.gainNode);
    this._currentBuffer = this._nextBuffer;
    this._currentTime = this._currentBuffer.time;
    this._nextBuffer = this.getTimeBuffer(this.currentTime);
    if (this._currentBuffer) {
      this._nextBuffer = this.getTimeBuffer(this.currentTime + this._currentBuffer.duration);
    }
    this.emit('AUDIO_SOURCE_END');
  }

  play() {
    this._played = true;
    if (!this._currentBuffer) {
      return;
    }
    let audioSource = this._currentBuffer.data;
    audioSource.connect(this.gainNode);
    audioSource.start();
  }

  getTimeBuffer(time) {
    let ret;
    for (let i = 0; i < this.samples.length; i++) {
      let sample = this.samples[i];
      if (sample.time <= time && sample.time + sample.duration > time) {
        ret = sample;
        break;
      }
    }
    return ret;
  }

  setAudioMetaData(meta) {
    this.meta = meta;
  }

  static getAACData(meta, sample) {
    let buffer = new Uint8Array(sample.data.byteLength + 7);
    let adts = AudioCtx.getAdts(meta, sample.data);
    buffer.set(adts);
    buffer.set(sample.data, 7);
    return buffer;
  }

  static combileData(samples) {
    // get length
    let length = 0;
    for (let i = 0, k = samples.length; i < k; i++) {
      length += samples[i].byteLength;
    }

    let ret = new Uint8Array(length);
    let offset = 0;
    // combile data;
    for (let i = 0, k = samples.length; i < k; i++) {
      ret.set(samples[i], offset);
      offset += samples[i].byteLength;
    }
    return ret;
  }

  static getAdts(meta, data) {
    let adts = new Uint8Array(7);

    // 设置同步位 0xfff 12bit
    adts[0] = 0xff;
    adts[1] = 0xf0;

    // Object data (没什么人用MPEG-2了，HLS和FLV也全是MPEG-4，这里直接0)  1bit
    // Level always 00 2bit
    // CRC always 1 1bit
    adts[1] = adts[1] | 0x01;

    // profile 2bit
    adts[2] = 0xc0 & meta.objectType - 1 << 6;

    //sampleFrequencyIndex
    adts[2] = adts[2] | 0x3c & meta.sampleRateIndex << 2;

    //private bit 0 1bit
    // chanel configuration 3bit
    adts[2] = adts[2] | 0x01 & meta.channelCount >> 2;
    adts[3] = 0xc0 & meta.channelCount << 6;

    // original_copy: 0 1bit
    // home: 0 1bit

    // adts_variable_header()
    // copyrighted_id_bit 0 1bit
    // copyrighted_id_start 0 1bit

    // aac_frame_length 13bit;
    let aacframelength = data.byteLength + 7;

    adts[3] = adts[3] | 0x03 & aacframelength >> 11;
    adts[4] = 0xff & aacframelength >> 3;
    adts[5] = 0xe0 & aacframelength << 5;

    // adts_buffer_fullness 0x7ff 11bit
    adts[5] = adts[5] | 0x1f;
    adts[6] = 0xfc;

    // number_of_raw_data_blocks_in_frame 0 2bit;
    return adts;
  }
}

exports.default = AudioCtx;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/mobile-video.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/mobile-video.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _videoContext = __webpack_require__(/*! ./video-context */ "../xgplayer-utils/src/mobile/video-context.js");

var _videoContext2 = _interopRequireDefault(_videoContext);

var _audioContext = __webpack_require__(/*! ./audio-context */ "../xgplayer-utils/src/mobile/audio-context.js");

var _audioContext2 = _interopRequireDefault(_audioContext);

var _ticker = __webpack_require__(/*! ./ticker */ "../xgplayer-utils/src/mobile/ticker.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 音画同步调和器
 */
class AVReconciler {
  constructor(props) {
    this.aCtx = props.aCtx;
    this.vCtx = props.vCtx;
    this.video = props.video;
    this.timeoutId = null;
    this.start = null;
  }

  doReconcile() {
    const vCurTime = (this.video.currentTime || 0) * 1000;
    const aCurTime = (this.aCtx.currentTime || 0) * 1000;

    const gap = vCurTime - aCurTime;
    if (this.timeoutId) {
      return;
    }
    if (gap > 200) {
      // audio delayed for more than 100ms
      console.log(gap);
      this.video.start += gap;
      this.vCtx.pause();
      this.timeoutId = setTimeout(() => {
        this.vCtx.play();
        this.timeoutId = null;
      }, gap);
    } else if (gap < -120) {
      this.vCtx.currentTime = this.vCtx.currentTime + Math.abs(gap);
    }
  }

  destroy() {
    this.aCtx = null;
    this.vCtx = null;
  }
}

// eslint-disable-next-line no-undef
class MobileVideo extends HTMLElement {
  constructor(config) {
    super();
    let _this = this;
    this.vCtx = new _videoContext2.default();
    this.aCtx = new _audioContext2.default(config);
    this.ticker = new ((0, _ticker.getTicker)())();
    this.historyTime = 0;
    this.reconciler = new AVReconciler({
      vCtx: this.vCtx,
      aCtx: this.aCtx,
      video: this
    });
    this.handleAudioSourceEnd = this.handleAudioSourceEnd.bind(this);
    this.init();
  }

  init() {
    this.vCtx.oncanplay = () => {
      this.appendChild(this.vCtx.canvas);
      // eslint-disable-next-line no-undef
      this.dispatchEvent(new Event('canplay'));
    };

    this.ticker.start(() => {
      //
      if (!this.start) {
        this.start = Date.now();
      }
      this._currentTime = Date.now() - this.start;
      this.vCtx._onTimer(this._currentTime);
    });

    this.aCtx.on('AUDIO_SOURCE_END', this.handleAudioSourceEnd);
  }

  handleAudioSourceEnd() {
    console.log(this.aCtx.currentTime);
    this.reconciler.doReconcile();
  }

  _cleanBuffer() {
    this.vCtx.cleanBuffer();
  }

  destroy() {
    this.reconciler.destroy();
  }

  onDemuxComplete(videoTrack, audioTrack) {
    this.aCtx.decodeAudio(audioTrack);
    this.vCtx.decodeVideo(videoTrack);
  }

  setAudioMeta(meta) {
    this.aCtx.setAudioMetaData(meta);
  }

  setVideoMeta(meta) {
    this.vCtx.setVideoMetaData(meta);
  }

  get currentTime() {
    return this._currentTime / 1000;
  }

  play() {
    // if (!this.vCtx.)
    this.vCtx.play();
    this.aCtx.play();
  }
}
// eslint-disable-next-line no-undef
customElements.define('mobile-video', MobileVideo);

/***/ }),

/***/ "../xgplayer-utils/src/mobile/sourcebuffer.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/sourcebuffer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class SourceBuffer {
  constructor(config) {
    this.config = Object.assign({}, config);
    this.type = this.config.type;
    this.buffer = [];
    this.currentGop = undefined;
    this._lastGet = undefined;
  }

  push(frame) {
    if (this.type === 'video') {
      if (frame.isKeyframe) {
        let currentGop = {
          samples: [],
          start: frame.dts,
          end: frame.dts,
          nextGop: undefined
        };
        if (this.currentGop) {
          this.currentGop.nextGop = currentGop;
        }
        this.currentGop = currentGop;
        this.buffer.push(this.currentGop);
      }

      if (this.currentGop) {
        this.currentGop.samples.push(frame);

        if (frame.dts < this.currentGop.start) {
          this.currentGop.start = frame.dts;
        }

        if (frame.dts > this.currentGop.end) {
          this.currentGop.end = frame.dts;
        }
      }
    }
  }

  get(time) {
    if (this.type === 'video') {
      if (this.buffer.length < 1) {
        return;
      }

      if (time === undefined) {
        let sample = this._getNext();
        return sample;
      }
    }
  }

  _getNext() {
    if (!this._lastGet) {
      let gop = this.buffer[0];
      if (gop.samples.length < 1) {
        return;
      }

      this._lastGet = {
        gop,
        index: 0
      };
      return gop.samples[0];
    } else {
      let gop = this._lastGet.gop;
      let sample = gop.samples[this._lastGet.index + 1];
      if (sample) {
        this._lastGet.index = this._lastGet.index + 1;
        return sample;
      } else {
        gop = gop.nextGop;
        if (!gop || gop.samples.length < 1) {
          return;
        }
        sample = gop.samples[0];
        this._lastGet = {
          gop,
          index: 0
        };
        return sample;
      }
    }
  }

  remove(start, end) {
    if (this.buffer.length < 0) {
      return;
    }

    let i = 0;
    let gop = this.buffer[0];
    while (gop) {
      if (gop.end < end && gop.start >= start) {
        delete this.buffer[i];
        gop = this.buffer[i];
      } else {
        i += 1;
        gop = this.buffer[i];
      }
    }
  }
}

exports.default = SourceBuffer;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/ticker.js":
/*!**********************************************!*\
  !*** ../xgplayer-utils/src/mobile/ticker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author fuyuhao@bytedance.com
 */

class Ticker {
  constructor(options) {
    this.options = Object.assign({}, options || {}, {
      interval: 16
    });

    this.callbacks = [];
  }

  start(...callbacks) {
    this.callbacks = callbacks;
  }

  onTick() {
    for (let i = 0, len = this.callbacks.length; i < len; i++) {
      const callback = this.callbacks[i];
      callback();
    }
  }

  setInterval(interval) {
    this.options.interval = interval;
    return this;
  }
}

/**
 * ticker use requestAnimationFrame
 */
class RafTicker extends Ticker {
  constructor(props) {
    super(props);
    this.prev = null;
    this.timerId = null;
    this._subTimerId = null;

    this._tickFunc = RafTicker.getTickFunc();
    this.tick = this.tick.bind(this);
  }

  start(...callbacks) {
    super.start(...callbacks);
    this.tick();
  }

  tick(timestamp) {
    this.nextTick();
    this.onTick();
  }

  nextTick() {
    const { _tickFunc } = this;
    this.timerId = _tickFunc(this.tick);
  }

  stop() {
    if (this.timerId) {
      const cancelFunc = RafTicker.getCancelFunc();

      cancelFunc(this.timerId);
    }
  }

  static getTickFunc() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }

  static getCancelFunc() {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame;
  }

  static isSupported() {
    return RafTicker.getTickFunc() !== undefined;
  }
}

/**
 * use setTimeout for browsers without raf support
 */
class TimeoutTicker extends Ticker {
  constructor(config) {
    super(config);
    this.timeoutId = null;
  }

  start(...callbacks) {
    super.nextTick(...callbacks);
    this.timeoutId = window.setInterval(() => {
      this.onTick();
    }, this.options.interval || 16);
  }

  stop() {
    if (this.timeoutId) {
      window.clearInterval(this.timeoutId);
    }
  }

}

/**
 * 返回Ticker构造函数
 * @returns {Ticker}
 */
const getTicker = exports.getTicker = () => {
  if (RafTicker.isSupported()) {
    return RafTicker;
  } else {
    return TimeoutTicker;
  }
};

/***/ }),

/***/ "../xgplayer-utils/src/mobile/video-context.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/video-context.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webworkifyWebpack = __webpack_require__(/*! webworkify-webpack */ "../xgplayer-utils/node_modules/webworkify-webpack/index.js");

var _webworkifyWebpack2 = _interopRequireDefault(_webworkifyWebpack);

var _stream = __webpack_require__(/*! ../write/stream */ "../xgplayer-utils/src/write/stream.js");

var _stream2 = _interopRequireDefault(_stream);

var _nalunit = __webpack_require__(/*! ../../../xgplayer-codec/src/h264/nalunit */ "../xgplayer-codec/src/h264/nalunit/index.js");

var _nalunit2 = _interopRequireDefault(_nalunit);

var _yuvCanvas = __webpack_require__(/*! ./yuv-canvas */ "../xgplayer-utils/src/mobile/yuv-canvas.js");

var _yuvCanvas2 = _interopRequireDefault(_yuvCanvas);

var _sourcebuffer = __webpack_require__(/*! ./sourcebuffer */ "../xgplayer-utils/src/mobile/sourcebuffer.js");

var _sourcebuffer2 = _interopRequireDefault(_sourcebuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VideoCanvas {
  constructor(config) {
    this.config = Object.assign({}, config);
    this.canvas = this.config.canvas ? this.config.canvas : document.createElement('canvas');
    this.source = new _sourcebuffer2.default({ type: 'video' });
    this.preloadTime = this.config.preloadTime || 3;
    this.oncanplay = undefined;
    this.onFirstFrame = undefined;
    this.meta = undefined;
    this.readyStatus = 0;
    this.paused = true;
    this.count = 0;
    this.currentTime = 0;
    this.lastPlayed = 0;

    this._decoderInited = false;
    this._avccpushed = false;
    this._decodedFrames = {};
    this._lastSampleDts = undefined;
    this._baseDts = undefined;
    this._lastRenderTime = null;
  }

  pause() {
    this.paused = true;
  }

  initWasmWorker() {
    let _this = this;
    this.wasmworker = (0, _webworkifyWebpack2.default)(/*require.resolve*/(/*! ./worker.js */ "../xgplayer-utils/src/mobile/worker.js"));
    this.wasmworker.postMessage({
      msg: 'init',
      meta: this.meta
    });
    this.wasmworker.addEventListener('message', msg => {
      switch (msg.data.msg) {
        case 'DECODER_READY':
          _this._decoderInited = true;
          break;
        case 'DECODED':
          this._onDecoded(msg.data);
          break;
      }
    });
  }

  setVideoMetaData(meta) {
    this.meta = meta;
    if (!this._decoderInited) {
      this.initWasmWorker();
      return;
    }
    this._avccpushed = true;
    let data = new Uint8Array(meta.sps.byteLength + 4);
    data.set([0, 0, 0, 1]);
    data.set(meta.sps, 4);
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data
    });

    data = new Uint8Array(meta.pps.byteLength + 4);
    data.set([0, 0, 0, 1]);
    data.set(meta.pps, 4);
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data
    });

    if (!this.yuvCanvas) {
      let config = Object.assign({ meta, canvas: this.canvas }, this.config);
      this.yuvCanvas = new _yuvCanvas2.default(config);
    }
    this.readyStatus = 1;
  }

  decodeVideo(videoTrack) {
    if (!this._decoderInited) {
      return;
    }

    if (!this._avccpushed) {
      this.setVideoMetaData(this.meta);
    }
    let { samples } = videoTrack;
    let sample = samples.shift();

    while (sample) {
      if (!this._baseDts) {
        this._baseDts = sample.dts;
      }
      this.source.push(sample);
      sample = samples.shift();
    }

    this._preload();
  }

  _preload() {
    if (!this._lastSampleDts || this._lastSampleDts - this._baseDts < this.currentTime + this.preloadTime * 1000) {
      let sample = this.source.get();
      if (sample) {
        this._lastSampleDts = sample.dts;
        this._analyseNal(sample);
      }

      while (sample && this._lastSampleDts - this._baseDts < this.currentTime + this.preloadTime * 1000) {
        sample = this.source.get();
        if (sample) {
          this._analyseNal(sample);
          this._lastSampleDts = sample.dts;
        }
      }
    }
  }

  _analyseNal(sample) {
    let nals = _nalunit2.default.getAvccNals(new _stream2.default(sample.data.buffer));

    let length = 0;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      length += nal.body.byteLength + 4;
    }
    let offset = 0;
    let data = new Uint8Array(length);
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      data.set([0, 0, 0, 1], offset);
      offset += 4;
      data.set(new Uint8Array(nal.body), offset);
      offset += nal.body.byteLength;
    }
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data,
      info: {
        dts: sample.dts,
        pts: sample.pts ? sample.pts : sample.dts + sample.cts,
        key: sample.isKeyframe
      }
    });
  }

  _onDecoded(data) {
    let { dts } = data.info;
    this._decodedFrames[dts] = data;
  }

  play() {
    this.paused = false;
    this._onTimer();
  }

  _onTimer(currentTime) {
    if (this.paused) {
      return;
    }
    if (this.meta) {
      if (this.meta.frameRate && this.meta.frameRate.fixed && this.meta.frameRate.fps) {}
      let frameTimes = Object.keys(this._decodedFrames);
      if (frameTimes.length > 0) {
        this.currentTime = currentTime;
        let frameTime = -1;
        let currentIdx = 0;
        for (let i = 0; i < frameTimes.length && Number.parseInt(frameTimes[i]) - this._baseDts <= this.currentTime; i++) {
          frameTime = Number.parseInt(frameTimes[i - 1]);
          currentIdx = i;
        }

        let frame = this._decodedFrames[frameTime];
        if (frame) {
          if (this.oncanplay && this.readyStatus < 4) {
            this.oncanplay();
            this.readyStatus = 4;
          }
          this.yuvCanvas.render(frame.buffer, frame.width, frame.height);
          for (let i = 0; i < currentIdx; i++) {
            delete this._decodedFrames[i];
          }
        }
      }
    }
    this._lastRenderTime = Date.now();
  }

  cleanBuffer() {
    this.source.remove(0, this.currentTime);
  }
}
exports.default = VideoCanvas;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/worker.js":
/*!**********************************************!*\
  !*** ../xgplayer-utils/src/mobile/worker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const MAX_STREAM_BUFFER_LENGTH = 1024 * 1024;
var Decoder = function (self) {
  this.inited = false;
  this.self = self;
  this.meta = this.self.meta;
  this.infolist = {};
  self.par_broadwayOnBroadwayInited = this.broadwayOnBroadwayInited.bind(this);
  self.par_broadwayOnPictureDecoded = this.broadwayOnPictureDecoded.bind(this);
};

Decoder.prototype.toU8Array = function (ptr, length) {
  return this.self.HEAPU8.subarray(ptr, ptr + length);
};

Decoder.prototype.init = function () {
  Module._broadwayInit();
  this.streamBuffer = this.toU8Array(Module._broadwayCreateStream(MAX_STREAM_BUFFER_LENGTH), MAX_STREAM_BUFFER_LENGTH);
};

Decoder.prototype.broadwayOnPictureDecoded = function (offset, width, height, infoid) {
  let info = Object.assign({}, this.infolist[infoid]);
  let ref = 3;
  if (this.meta.chromaFormat === 420) {
    ref = 1.5;
  } else if (this.meta.chromaFormat === 422) {
    ref = 2;
  }
  let data = this.toU8Array(offset, width * height * ref);
  this.infolist[infoid] = null;
  let datetemp = new Uint8Array(data.length);
  datetemp.set(data);
  let buffer = datetemp.buffer;
  this.self.postMessage({
    msg: 'DECODED',
    width,
    height,
    info,
    buffer
  }, [buffer]);
};

Decoder.prototype.broadwayOnBroadwayInited = function () {
  this.inited = true;
  this.self.postMessage({ msg: 'DECODER_READY' });
};

Decoder.prototype.decode = function (data, info) {
  let time = parseInt(new Date().getTime());
  let infoid = time - Math.floor(time / 10e8) * 10e8;
  this.infolist[infoid] = info;
  this.streamBuffer.set(data);
  Module._broadwayPlayStream(data.length, infoid);
};

var decoder;

function onPostRun() {
  decoder = new Decoder(this);
  decoder.init();
}

function init(meta) {
  self.importScripts('https://sf6-vcloudcdn.pstatp.com/obj/ttfe/media/decoder/h264/decoder.js');
  addOnPostRun(onPostRun.bind(self));
}

module.exports = function (self) {
  self.addEventListener('message', function (e) {
    var data = e.data;
    if (!data.msg) {
      self.postMessage({
        msg: 'ERROR:invalid message'
      });
    } else {
      switch (data.msg) {
        case 'init':
          console.log(data);
          self.meta = data.meta;
          init();
          break;
        case 'decode':
          decoder.decode(data.data, data.info);
          break;
        default:
          break;
      }
    }
  }, false);
};

/***/ }),

/***/ "../xgplayer-utils/src/mobile/yuv-canvas.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/mobile/yuv-canvas.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class YUVCanvas {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.canvas = this.configs.canvas;
    this.meta = Object.assign({}, this.configs.meta);
    this.chroma = this.meta.chromaFormat;
    this.height = this.meta.presentHeight;
    this.width = this.meta.presentWidth;
    this.canvas.width = 1280;
    this.canvas.height = 720;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this._initContextGL();
    if (this.contextGL) {
      this._initProgram();
      this._initBuffers();
      this._initTextures();
    };
  }

  _initContextGL() {
    var canvas = this.canvas;
    var gl = null;

    var validContextNames = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d'];
    var nameIndex = 0;

    while (!gl && nameIndex < validContextNames.length) {
      var contextName = validContextNames[nameIndex];

      try {
        if (this.contextOptions) {
          gl = canvas.getContext(contextName, this.contextOptions);
        } else {
          gl = canvas.getContext(contextName);
        };
      } catch (e) {
        gl = null;
      }

      if (!gl || typeof gl.getParameter !== 'function') {
        gl = null;
      }

      ++nameIndex;
    };

    this.contextGL = gl;
  }

  _initProgram() {
    var gl = this.contextGL;

    // vertex shader is the same for all types
    var vertexShaderScript;
    var fragmentShaderScript;
    vertexShaderScript = ['attribute vec4 vertexPos;', 'attribute vec4 texturePos;', 'attribute vec4 uTexturePos;', 'attribute vec4 vTexturePos;', 'varying vec2 textureCoord;', 'varying vec2 uTextureCoord;', 'varying vec2 vTextureCoord;', 'void main()', '{', '  gl_Position = vertexPos;', '  textureCoord = texturePos.xy;', '  uTextureCoord = uTexturePos.xy;', '  vTextureCoord = vTexturePos.xy;', '}'].join('\n');

    fragmentShaderScript = ['precision highp float;', 'varying highp vec2 textureCoord;', 'varying highp vec2 uTextureCoord;', 'varying highp vec2 vTextureCoord;', 'uniform sampler2D ySampler;', 'uniform sampler2D uSampler;', 'uniform sampler2D vSampler;', 'uniform mat4 YUV2RGB;', 'void main(void) {', '  highp float y = texture2D(ySampler,  textureCoord).r;', '  highp float u = texture2D(uSampler,  uTextureCoord).r;', '  highp float v = texture2D(vSampler,  vTextureCoord).r;', '  gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;', '}'].join('\n');

    var YUV2RGB = [1.16438, 0.00000, 1.59603, -0.87079, 1.16438, -0.39176, -0.81297, 0.52959, 1.16438, 2.01723, 0.00000, -1.08139, 0, 0, 0, 1];
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderScript);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.log('Vertex shader failed to compile: ' + gl.getShaderInfoLog(vertexShader));
    }

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderScript);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.log('Fragment shader failed to compile: ' + gl.getShaderInfoLog(fragmentShader));
    }

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.log('Program failed to compile: ' + gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);

    var YUV2RGBRef = gl.getUniformLocation(program, 'YUV2RGB');
    gl.uniformMatrix4fv(YUV2RGBRef, false, YUV2RGB);

    this.shaderProgram = program;
  }

  _initBuffers() {
    var gl = this.contextGL;
    var program = this.shaderProgram;

    var vertexPosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), gl.STATIC_DRAW);

    var vertexPosRef = gl.getAttribLocation(program, 'vertexPos');
    gl.enableVertexAttribArray(vertexPosRef);
    gl.vertexAttribPointer(vertexPosRef, 2, gl.FLOAT, false, 0, 0);

    var texturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var texturePosRef = gl.getAttribLocation(program, 'texturePos');
    gl.enableVertexAttribArray(texturePosRef);
    gl.vertexAttribPointer(texturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.texturePosBuffer = texturePosBuffer;

    var uTexturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var uTexturePosRef = gl.getAttribLocation(program, 'uTexturePos');
    gl.enableVertexAttribArray(uTexturePosRef);
    gl.vertexAttribPointer(uTexturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.uTexturePosBuffer = uTexturePosBuffer;

    var vTexturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var vTexturePosRef = gl.getAttribLocation(program, 'vTexturePos');
    gl.enableVertexAttribArray(vTexturePosRef);
    gl.vertexAttribPointer(vTexturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.vTexturePosBuffer = vTexturePosBuffer;
  }

  _initTextures() {
    var gl = this.contextGL;
    var program = this.shaderProgram;
    var yTextureRef = this._initTexture();
    var ySamplerRef = gl.getUniformLocation(program, 'ySampler');
    gl.uniform1i(ySamplerRef, 0);
    this.yTextureRef = yTextureRef;

    var uTextureRef = this._initTexture();
    var uSamplerRef = gl.getUniformLocation(program, 'uSampler');
    gl.uniform1i(uSamplerRef, 1);
    this.uTextureRef = uTextureRef;

    var vTextureRef = this._initTexture();
    var vSamplerRef = gl.getUniformLocation(program, 'vSampler');
    gl.uniform1i(vSamplerRef, 2);
    this.vTextureRef = vTextureRef;
  }

  _initTexture() {
    var gl = this.contextGL;

    var textureRef = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, textureRef);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);

    return textureRef;
  }

  _drawPictureGL(data, width, height) {
    let nWidth = width;
    var ylen = width * height;
    var uvlen = ylen / 4;
    if (this.chroma === 422) {
      uvlen = ylen / 2;
    } else if (this.chroma === 444) {
      uvlen = ylen;
    }
    data = new Uint8Array(data);
    let renderData = {
      yData: data.subarray(0, ylen),
      uData: data.subarray(ylen, ylen + uvlen),
      vData: data.subarray(ylen + uvlen, ylen + uvlen + uvlen)
    };
    if (width % 4 > 0) {
      nWidth = width + 4 - width % 4;
      let yArray = new Uint8Array(nWidth * height);
      for (let i = 0; i < height; i++) {
        yArray.set(renderData.yData.subarray(i * width, (i + 1) * width), i * nWidth);
      }
      renderData.yData = yArray;
    }

    if (width / 2 % 4 > 0) {
      nWidth = width / 2 + 4 - width / 2 % 4;
      let uArray = new Uint8Array(nWidth * height / 2);
      let vArray = new Uint8Array(nWidth * height / 2);
      for (let i = 0; i < height / 2; i++) {
        uArray.set(renderData.uData.subarray(i * width / 2, (i + 1) * width / 2), i * nWidth);
        vArray.set(renderData.vData.subarray(i * width / 2, (i + 1) * width / 2), i * nWidth);
      }
      renderData.uData = uArray;
      renderData.vData = vArray;
    }
    this._drawPictureGL420(renderData, width, height);
  }

  _drawPictureGL420(data, width, height) {
    var gl = this.contextGL;
    var texturePosBuffer = this.texturePosBuffer;
    var uTexturePosBuffer = this.uTexturePosBuffer;
    var vTexturePosBuffer = this.vTexturePosBuffer;

    var yTextureRef = this.yTextureRef;
    var uTextureRef = this.uTextureRef;
    var vTextureRef = this.vTextureRef;

    var yData = data.yData;
    var uData = data.uData;
    var vData = data.vData;

    var yDataPerRow = width;
    var yRowCnt = height;

    var uDataPerRow = width / 2;
    var uRowCnt = height / 2;

    if (this.chroma === 422 || this.chroma === 444) {
      uRowCnt = height;
    }
    if (this.chroma === 444) {
      uDataPerRow = width;
    }
    var vDataPerRow = uDataPerRow;
    var vRowCnt = uRowCnt;

    let ratiow = this.canvas.width / this.width;
    let ratioh = this.canvas.height / this.height;
    let left = 0;
    let top = 0;
    let w = this.canvas.width;
    let h = this.canvas.height;
    if (ratiow < ratioh) {
      h = this.height * this.canvas.width / this.width;
      top = parseInt((this.canvas.height - this.height * this.canvas.width / this.width) / 2);
    } else {
      w = this.width * this.canvas.height / this.height;
      left = parseInt((this.canvas.width - this.width * this.canvas.height / this.height) / 2);
    }
    gl.viewport(left, top, w, h);

    var texturePosValues = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texturePosValues, gl.DYNAMIC_DRAW);

    var uTexturePosValues = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, uTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, uTexturePosValues, gl.DYNAMIC_DRAW);

    var vTexturePosValues = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, vTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vTexturePosValues, gl.DYNAMIC_DRAW);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, yTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, yDataPerRow, yRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, yData);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, uTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, uDataPerRow, uRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, uData);

    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, vTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, vDataPerRow, vRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, vData);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  _drawPictureRGB(data) {}

  render(data, width, height) {
    var gl = this.contextGL;
    if (gl) {
      this._drawPictureGL(data, width, height);
    } else {
      this._drawPictureRGB(data);
    }
  }
}

exports.default = YUVCanvas;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-info.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/media-info.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const isObjectFilled = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null) {
        return false;
      }
    }
  }
  return true;
};

class MediaInfo {
  constructor() {
    this.mimeType = null;
    this.duration = null;

    this.hasVideo = null;
    this.video = {
      codec: null,
      width: null,
      height: null,
      profile: null,
      level: null,
      frameRate: {
        fixed: true,
        fps: 25,
        fps_num: 25000,
        fps_den: 1000
      },
      chromaFormat: null,
      parRatio: {
        width: 1,
        height: 1
      }
    };

    this.hasAudio = null;

    this.audio = {
      codec: null,
      sampleRate: null,
      sampleRateIndex: null,
      channelCount: null
    };
  }

  isComplete() {
    return MediaInfo.isBaseInfoReady(this) && MediaInfo.isVideoReady(this) && MediaInfo.isAudioReady(this);
  }

  static isBaseInfoReady(mediaInfo) {
    return isObjectFilled(mediaInfo);
  }

  static isVideoReady(mediaInfo) {
    if (!mediaInfo.hasVideo) {
      return true;
    }

    return isObjectFilled(mediaInfo.video);
  }

  static isAudioReady(mediaInfo) {
    if (!mediaInfo.hasAudio) {
      return true;
    }

    return isObjectFilled(mediaInfo.video);
  }
}
exports.default = MediaInfo;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-sample.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/models/media-sample.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class MediaSample {
  constructor(info) {
    let _default = MediaSample.getDefaultInf();

    if (!info || Object.prototype.toString.call(info) !== '[object Object]') {
      return _default;
    }
    let sample = Object.assign({}, _default, info);

    Object.entries(sample).forEach(([k, v]) => {
      this[k] = v;
    });
  }

  static getDefaultInf() {
    return {
      dts: null,
      pts: null,
      duration: null,
      position: null,
      isRAP: false, // is Random access point
      originDts: null
    };
  }
}
exports.default = MediaSample;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-segment-list.js":
/*!**********************************************************!*\
  !*** ../xgplayer-utils/src/models/media-segment-list.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
class MediaSegmentList {

    constructor(type) {
        this._type = type;
        this._list = [];
        this._lastAppendLocation = -1; // cached last insert location
    }

    get type() {
        return this._type;
    }

    get length() {
        return this._list.length;
    }

    isEmpty() {
        return this._list.length === 0;
    }

    clear() {
        this._list = [];
        this._lastAppendLocation = -1;
    }

    _searchNearestSegmentBefore(beginDts) {
        let list = this._list;
        if (list.length === 0) {
            return -2;
        }
        let last = list.length - 1;
        let mid = 0;
        let lbound = 0;
        let ubound = last;

        let idx = 0;

        if (beginDts < list[0].originDts) {
            idx = -1;
            return idx;
        }

        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || beginDts > list[mid].lastSample.originDts && beginDts < list[mid + 1].originDts) {
                idx = mid;
                break;
            } else if (list[mid].originDts < beginDts) {
                lbound = mid + 1;
            } else {
                ubound = mid - 1;
            }
        }
        return idx;
    }

    _searchNearestSegmentAfter(beginDts) {
        return this._searchNearestSegmentBefore(beginDts) + 1;
    }

    append(segment) {
        let list = this._list;
        let lastAppendIdx = this._lastAppendLocation;
        let insertIdx = 0;

        if (lastAppendIdx !== -1 && lastAppendIdx < list.length && segment.originStartDts >= list[lastAppendIdx].lastSample.originDts && (lastAppendIdx === list.length - 1 || lastAppendIdx < list.length - 1 && segment.originStartDts < list[lastAppendIdx + 1].originStartDts)) {
            insertIdx = lastAppendIdx + 1; // use cached location idx
        } else {
            if (list.length > 0) {
                insertIdx = this._searchNearestSegmentBefore(segment.originStartDts) + 1;
            }
        }

        this._lastAppendLocation = insertIdx;
        this._list.splice(insertIdx, 0, segment);
    }

    getLastSegmentBefore(beginDts) {
        let idx = this._searchNearestSegmentBefore(beginDts);
        if (idx >= 0) {
            return this._list[idx];
        } else {
            // -1
            return null;
        }
    }

    getLastSampleBefore(beginDts) {
        let segment = this.getLastSegmentBefore(beginDts);
        if (segment !== null) {
            return segment.lastSample;
        } else {
            return null;
        }
    }

    getLastRAPBefore(beginDts) {
        let segmentIdx = this._searchNearestSegmentBefore(beginDts);
        let randomAccessPoints = this._list[segmentIdx].randomAccessPoints;
        while (randomAccessPoints.length === 0 && segmentIdx > 0) {
            segmentIdx--;
            randomAccessPoints = this._list[segmentIdx].randomAccessPoints;
        }
        if (randomAccessPoints.length > 0) {
            return randomAccessPoints[randomAccessPoints.length - 1];
        } else {
            return null;
        }
    }

}
exports.default = MediaSegmentList;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-segment.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/models/media-segment.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
class MediaSegment {
    constructor() {
        this.startDts = -1;
        this.endDts = -1;
        this.startPts = -1;
        this.endPts = -1;
        this.originStartDts = -1;
        this.originEndDts = -1;
        this.randomAccessPoints = [];
        this.firstSample = null;
        this.lastSample = null;
    }

    addRAP(sample) {
        sample.isRAP = true;
        this.randomAccessPoints.push(sample);
    }
}
exports.default = MediaSegment;

/***/ }),

/***/ "../xgplayer-utils/src/models/track-meta.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/track-meta.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class AudioTrackMeta {
  constructor(meta) {
    const _default = {
      sampleRate: 48000,
      channelCount: 2,
      codec: 'mp4a.40.2',
      config: [41, 401, 136, 0],
      duration: 0,
      id: 2,
      refSampleDuration: 21,
      sampleRateIndex: 3,
      timescale: 1000,
      type: 'audio'
    };
    if (meta) {
      return Object.assign({}, _default, meta);
    }
    return _default;
  }

  destroy() {
    this.init = null;
  }
}

exports.AudioTrackMeta = AudioTrackMeta;
class VideoTrackMeta {
  constructor(meta) {
    const _default = {
      avcc: null,
      sps: new Uint8Array(0),
      pps: new Uint8Array(0),
      chromaFormat: 420,
      codec: 'avc1.640020',
      codecHeight: 720,
      codecWidth: 1280,
      duration: 0,
      frameRate: {
        fixed: true,
        fps: 25,
        fps_num: 25000,
        fps_den: 1000
      },
      id: 1,
      level: '3.2',
      presentHeight: 720,
      presentWidth: 1280,
      profile: 'High',
      refSampleDuration: 40,
      parRatio: {
        height: 1,
        width: 1
      },
      timescale: 1000,
      type: 'video'
    };

    if (meta) {
      return Object.assign({}, _default, meta);
    }
    return _default;
  }

  destroy() {
    this.init = null;
    this.sps = null;
    this.pps = null;
  }
}
exports.VideoTrackMeta = VideoTrackMeta;

/***/ }),

/***/ "../xgplayer-utils/src/models/track-sample.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/models/track-sample.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class AudioTrackSample {
  constructor(info) {
    let _default = AudioTrackSample.getDefault();
    if (!info) {
      return _default;
    }
    let sample = Object.assign({}, _default, info);

    return sample;
  }

  static getDefault() {
    return {
      dts: null,
      pts: null,
      data: new Uint8Array()
    };
  }
}

exports.AudioTrackSample = AudioTrackSample;
class VideoTrackSample {
  constructor(info) {
    let _default = VideoTrackSample.getDefault();

    if (!info) {
      return _default;
    }
    let sample = Object.assign({}, _default, info);

    return sample;
  }

  static getDefault() {
    return {
      dts: null,
      pts: null,
      isKeyframe: false, // is Random access point
      originDts: null,
      data: new Uint8Array()
    };
  }
}
exports.VideoTrackSample = VideoTrackSample;

/***/ }),

/***/ "../xgplayer-utils/src/mse/index.js":
/*!******************************************!*\
  !*** ../xgplayer-utils/src/mse/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class MSE {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.container = this.configs.container;
    this.mediaSource = null;
    this.sourceBuffers = {};
    this.preloadTime = this.configs.preloadTime || 1;
    this.onSourceOpen = this.onSourceOpen.bind(this);
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.onUpdateEnd = this.onUpdateEnd.bind(this);
    this.onWaiting = this.onWaiting.bind(this);
  }

  init() {
    // eslint-disable-next-line no-undef
    this.mediaSource = new self.MediaSource();
    this.mediaSource.addEventListener('sourceopen', this.onSourceOpen);
    this.container.src = URL.createObjectURL(this.mediaSource);
    this.url = this.container.src;
    this.container.addEventListener('timeupdate', this.onTimeUpdate);
    this.container.addEventListener('waiting', this.onWaiting);
  }

  onTimeUpdate() {
    this.emit('TIME_UPDATE', this.container);
  }

  onWaiting() {
    this.emit('WAITING', this.container);
  }

  onSourceOpen() {
    this.addSourceBuffers();
  }

  onUpdateEnd() {
    this.emit('SOURCE_UPDATE_END');
    this.doAppend();
  }
  addSourceBuffers() {
    if (this.mediaSource.readyState !== 'open') {
      return;
    }
    let sources = this._context.getInstance('PRE_SOURCE_BUFFER');
    let tracks = this._context.getInstance('TRACKS');
    let track;

    sources = sources.sources;
    let add = false;
    for (let i = 0, k = Object.keys(sources).length; i < k; i++) {
      let type = Object.keys(sources)[i];
      if (type === 'audio') {
        track = tracks.audioTrack;
      } else if (type === 'video') {
        track = tracks.videoTrack;
        // return;
      }
      if (track) {
        let dur = type === 'audio' ? 21 : 40;
        if (track.meta && track.meta.refSampleDuration) dur = track.meta.refSampleDuration;
        if (sources[type].data.length >= this.preloadTime / dur) {
          add = true;
        }
      }
    }

    if (add) {
      if (Object.keys(this.sourceBuffers).length > 0) {
        return;
      }
      for (let i = 0, k = Object.keys(sources).length; i < k; i++) {
        let type = Object.keys(sources)[i];
        let source = sources[type];
        let mime = type === 'video' ? 'video/mp4;codecs=' + source.mimetype : 'audio/mp4;codecs=' + source.mimetype;
        let sourceBuffer = this.mediaSource.addSourceBuffer(mime);
        this.sourceBuffers[type] = sourceBuffer;
        sourceBuffer.addEventListener('updateend', this.onUpdateEnd);
        this.doAppend();
      }
    }
  }

  doAppend() {
    let sources = this._context.getInstance('PRE_SOURCE_BUFFER');
    if (sources) {
      for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        let type = Object.keys(this.sourceBuffers)[i];
        let sourceBuffer = this.sourceBuffers[type];
        if (!sourceBuffer.updating) {
          let source = sources.sources[type];
          if (source && !source.inited) {
            // console.log('append initial segment')
            sourceBuffer.appendBuffer(source.init.buffer.buffer);
            source.inited = true;
          } else if (source) {
            let data = source.data.shift();
            if (data) {
              sourceBuffer.appendBuffer(data.buffer.buffer);
            }
          }
        }
      }
    }
  }

  endOfStream() {
    const { readyState, activeSourceBuffers } = this.mediaSource;
    if (readyState === 'open' && activeSourceBuffers.length === 0) {
      try {
        this.mediaSource.endOfStream();
      } catch (e) {
        // log
      }
    }
  }

  remove(end, start = 0) {
    for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
      let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      if (!buffer.updating) {
        // console.log(start, end)
        buffer.remove(start, end);
      }
    }
  }
  removeBuffers() {
    const taskList = [];
    for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
      let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      buffer.removeEventListener('updateend', this.onUpdateEnd);

      let task;
      if (buffer.updating) {
        task = new Promise(resolve => {
          const doCleanBuffer = function () {
            let retryTime = 3;

            const clean = () => {
              if (!buffer.updating) {
                MSE.clearBuffer(buffer);
                resolve();
              } else if (retryTime > 0) {
                setTimeout(clean, 200);
                retryTime--;
              } else {
                resolve();
              }
            };

            setTimeout(clean, 200);
            buffer.removeEventListener('updateend', doCleanBuffer);
          };
          buffer.addEventListener('updateend', doCleanBuffer);
        });
      } else {
        MSE.clearBuffer(buffer);
        task = Promise.resolve();
      }

      taskList.push(task);
    }

    return Promise.all(taskList);
  }

  destroy() {
    return this.removeBuffers().then(() => {
      for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
        this.mediaSource.removeSourceBuffer(buffer);
        delete this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      }

      this.container.removeEventListener('timeupdate', this.onTimeUpdate);
      this.container.removeEventListener('waiting', this.onWaiting);
      this.mediaSource.removeEventListener('sourceopen', this.onSourceOpen);

      this.endOfStream();
      window.URL.revokeObjectURL(this.url);

      this.url = null;
      this.configs = {};
      this.container = null;
      this.mediaSource = null;
      this.sourceBuffers = {};
      this.preloadTime = 1;
    });
  }

  static clearBuffer(buffer) {
    const buffered = buffer.buffered;
    let bEnd = 0.1;
    for (let i = 0, len = buffered.length; i < len; i++) {
      bEnd = buffered.end(i);
    }
    try {
      buffer.remove(0, bEnd);
    } catch (e) {
      // DO NOTHING
    }
  }
}
exports.default = MSE;

/***/ }),

/***/ "../xgplayer-utils/src/write/buffer.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/write/buffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _concatTypedArray = __webpack_require__(/*! concat-typed-array */ "../xgplayer-utils/node_modules/concat-typed-array/lib/index.js");

var _concatTypedArray2 = _interopRequireDefault(_concatTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Buffer {
  constructor(buffer) {
    this.buffer = buffer || new Uint8Array(0);
  }

  write(...buffer) {
    buffer.forEach(item => {
      this.buffer = (0, _concatTypedArray2.default)(Uint8Array, this.buffer, item);
    });
  }

  static writeUint32(value) {
    return new Uint8Array([value >> 24, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff]);
  }

  static readAsInt(arr) {
    let temp = '';

    function padStart4Hex(hexNum) {
      let hexStr = hexNum.toString(16);
      return hexStr.padStart(2, '0');
    }

    arr.forEach(num => {
      temp += padStart4Hex(num);
    });
    return parseInt(temp, 16);
  }
}

exports.default = Buffer;

/***/ }),

/***/ "../xgplayer-utils/src/write/stream.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/write/stream.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Stream {
  constructor(buffer) {
    if (buffer instanceof ArrayBuffer) {
      this.buffer = buffer;
      this.dataview = new DataView(buffer);
      this.dataview.position = 0;
    } else {
      throw new Error('data is invalid');
    }
  }

  get length() {
    return this.buffer.byteLength;
  }

  set position(value) {
    this.dataview.position = value;
  }

  get position() {
    return this.dataview.position;
  }

  back(count) {
    this.position -= count;
  }

  skip(count) {
    let loop = Math.floor(count / 4);
    let last = count % 4;
    for (let i = 0; i < loop; i++) {
      Stream.readByte(this.dataview, 4);
    }
    if (last > 0) {
      Stream.readByte(this.dataview, last);
    }
  }

  /**
   * [readByte 从DataView中读取数据]
   * @param  {DataView} buffer [DataView实例]
   * @param  {Number} size   [读取字节数]
   * @return {Number}        [整数]
   */
  static readByte(buffer, size, sign) {
    let res;
    switch (size) {
      case 1:
        if (sign) {
          res = buffer.getInt8(buffer.position);
        } else {
          res = buffer.getUint8(buffer.position);
        }
        break;
      case 2:
        if (sign) {
          res = buffer.getInt16(buffer.position);
        } else {
          res = buffer.getUint16(buffer.position);
        }
        break;
      case 3:
        if (sign) {
          throw new Error('not supported for readByte 3');
        } else {
          res = buffer.getUint8(buffer.position) << 16;
          res |= buffer.getUint8(buffer.position + 1) << 8;
          res |= buffer.getUint8(buffer.position + 2);
        }
        break;
      case 4:
        if (sign) {
          res = buffer.getInt32(buffer.position);
        } else {
          res = buffer.getUint32(buffer.position);
        }
        break;
      case 8:
        if (sign) {
          throw new Error('not supported for readBody 8');
        } else {
          res = buffer.getUint32(buffer.position) << 32;
          res |= buffer.getUint32(buffer.position + 4);
        }
        break;
      default:
        res = '';
    }
    buffer.position += size;
    return res;
  }

  readUint8() {
    return Stream.readByte(this.dataview, 1);
  }

  readUint16() {
    return Stream.readByte(this.dataview, 2);
  }

  readUint24() {
    return Stream.readByte(this.dataview, 3);
  }

  readUint32() {
    return Stream.readByte(this.dataview, 4);
  }

  readUint64() {
    return Stream.readByte(this.dataview, 8);
  }

  readInt8() {
    return Stream.readByte(this.dataview, 1, true);
  }
  readInt16() {
    return Stream.readByte(this.dataview, 2, true);
  }

  readInt32() {
    return Stream.readByte(this.dataview, 4, true);
  }

  writeUint32(value) {
    return new Uint8Array([value >>> 24 & 0xff, value >>> 16 & 0xff, value >>> 8 & 0xff, value & 0xff]);
  }
}

exports.default = Stream;

/***/ }),

/***/ "./src/flv-live-mobile.js":
/*!********************************!*\
  !*** ./src/flv-live-mobile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerLoader = __webpack_require__(/*! xgplayer-loader */ "../xgplayer-loader/index.js");

var _xgplayerDemux = __webpack_require__(/*! xgplayer-demux */ "../xgplayer-demux/index.js");

var _xgplayerRemux = __webpack_require__(/*! xgplayer-remux */ "../xgplayer-remux/index.js");

var _xgplayerBuffer = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _xgplayerCodec = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");

var _xgplayer = __webpack_require__(/*! xgplayer */ "xgplayer");

var _xgplayer2 = _interopRequireDefault(_xgplayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEMUX_EVENTS = _xgplayerUtils.EVENTS.DEMUX_EVENTS;
const LOADER_EVENTS = _xgplayerUtils.EVENTS.LOADER_EVENTS;
const REMUX_EVENTS = _xgplayerUtils.EVENTS.REMUX_EVENTS;

const Tag = 'FLVController';

class Logger {
  warn() {}
}

class FlvController {
  constructor(player) {
    this.TAG = Tag;
    this._player = player;

    // TODO 临时挂的 需要处理到Player层
    // this.video = document.createElement('mobile-video');
    this._player.video = document.createElement('mobile-video');
    this.video = this._player.video;
    this.state = {
      initSegmentArrived: false
    };
  }

  init() {
    this._context.registry('FETCH_LOADER', _xgplayerLoader.FetchLoader);
    this._context.registry('LOADER_BUFFER', _xgplayerBuffer.XgBuffer);
    this._context.registry('PRE_SOURCE_BUFFER', _xgplayerBuffer.PreSource);

    this._context.registry('FLV_DEMUXER', _xgplayerDemux.FlvDemuxer);

    this._context.registry('MP4_REMUXER', _xgplayerRemux.Mp4Remuxer);
    this._context.registry('TRACKS', _xgplayerBuffer.Tracks);

    this._context.registry('COMPATIBILITY', _xgplayerCodec.Compatibility);

    this._context.registry('LOGGER', Logger);

    this.initListeners();
  }

  initListeners() {
    this.on(LOADER_EVENTS.LOADER_DATALOADED, this._handleLoaderDataLoaded.bind(this));
    this.on(LOADER_EVENTS.LOADER_ERROR, this._handleNetworkError.bind(this));

    this.on(DEMUX_EVENTS.MEDIA_INFO, this._handleMediaInfo.bind(this));
    this.on(DEMUX_EVENTS.METADATA_PARSED, this._handleMetadataParsed.bind(this));
    this.on(DEMUX_EVENTS.DEMUX_COMPLETE, this._handleDemuxComplete.bind(this));
    this.on(DEMUX_EVENTS.DEMUX_ERROR, this._handleDemuxError.bind(this));
  }

  _handleMediaInfo() {
    if (!this._context.mediaInfo) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('failed to get mediainfo'));
    }
  }

  _handleLoaderDataLoaded() {
    this.emitTo('FLV_DEMUXER', DEMUX_EVENTS.DEMUX_START);
  }

  _handleMetadataParsed(type) {
    if (type === 'audio') {
      // 将音频meta信息交给audioContext，不走remux封装
      const { audioTrack } = this._context.getInstance('TRACKS');
      if (audioTrack && audioTrack.meta) {
        this._setMetaToAudio(audioTrack.meta);
      }
    } else {
      const { videoTrack } = this._context.getInstance('TRACKS');
      if (videoTrack && videoTrack.meta) {
        this._setMetaToVideo(videoTrack.meta);
      }
    }
  }

  _handleDemuxComplete() {
    if (this._player.video) {
      const { videoTrack, audioTrack } = this._context.getInstance('TRACKS');
      this._player.video.onDemuxComplete(videoTrack, audioTrack);
    }
  }

  _handleAppendInitSegment() {
    this.state.initSegmentArrived = true;
    //  this.mse.addSourceBuffers()
  }

  _handleNetworkError() {
    this._player.emit('error', new _xgplayer2.default.Errors('network', this._player.config.url));
  }

  _handleDemuxError() {
    this._player.emit('error', new _xgplayer2.default.Errors('parse', this._player.config.url));
  }

  _setMetaToAudio(audioMeta) {
    if (this._player.video) {
      this._player.video.setAudioMeta(audioMeta);
    }
  }

  _setMetaToVideo(videoMeta) {
    if (this._player.video) {
      this._player.video.setVideoMeta(videoMeta);
    }
  }

  seek() {
    if (!this.state.initSegmentArrived) {
      this.loadData();
    }
  }

  loadData() {
    this.emit(LOADER_EVENTS.LADER_START, this._player.config.url);
  }

  pause() {
    const loader = this._context.getInstance('FETCH_LOADER');

    if (loader) {
      loader.cancel();
    }
  }

  /**
   * 保证当前播放的视频以gop为单位
   * @param videoTrack
   */
  static resolveVideoGOP(videoTrack) {
    const { samples } = videoTrack;
    if (!samples.length) {
      return;
    }

    let firstIframeIdx = null;
    let lastIframeIdx = null;

    if (videoTrack.tempSamples && videoTrack.tempSamples.length) {
      // 将缓存帧放置到队列的头部
      samples.unshift.apply(samples, videoTrack.tempSamples);
    }

    // 寻找第一个I帧
    for (let i = 0, len = samples.length; i < len; i++) {
      const current = samples[i];
      if (current.isKeyframe) {
        firstIframeIdx = i;
        break;
      }
    }

    // 寻找最后一个I帧
    for (let i = samples.length - 1; i > 0; i++) {
      const current = samples[i];

      if (current.isKeyframe) {
        lastIframeIdx = i;
        break;
      }
    }

    if (firstIframeIdx !== 0) {
      samples.splice(0, firstIframeIdx - 1);
    }

    videoTrack.samples = samples.slice(0, lastIframeIdx);
    const rest = samples.slice(lastIframeIdx);
    if (videoTrack.tempSamples) {
      videoTrack.tempSamples.push.apply(videoTrack.tempSamples, rest);
    } else {
      // 将剩下的帧缓存，等待一个完整的gop
      videoTrack.tempSamples = rest;
    }
  }
}
exports.default = FlvController;

/***/ }),

/***/ "./src/mobile.js":
/*!***********************!*\
  !*** ./src/mobile.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xgplayer = __webpack_require__(/*! xgplayer */ "xgplayer");

var _xgplayer2 = _interopRequireDefault(_xgplayer);

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _flvLiveMobile = __webpack_require__(/*! ./flv-live-mobile */ "./src/flv-live-mobile.js");

var _flvLiveMobile2 = _interopRequireDefault(_flvLiveMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const flvAllowedEvents = _xgplayerUtils.EVENTS.FlvAllowedEvents;

class FlvPlayer extends _xgplayer2.default {
  constructor(config) {
    super(config);
    this.context = new _xgplayerUtils.Context(flvAllowedEvents);
    this.initEvents();
  }

  start() {
    this.initFlv();
    this.context.init();
    this.flv.seek(0);
    super.start(this.config.url);
    this.play();
  }

  initFlvEvents(flv) {
    const player = this;
    flv.once(_xgplayerUtils.EVENTS.REMUX_EVENTS.INIT_SEGMENT, () => {
      _xgplayer2.default.util.addClass(player.root, 'xgplayer-is-live');
      if (!_xgplayer2.default.util.findDom(this.root, 'xg-live')) {
        const live = _xgplayer2.default.util.createDom('xg-live', '正在直播', {}, 'xgplayer-live');
        player.controls.appendChild(live);
      }
    });

    flv.once(_xgplayerUtils.EVENTS.LOADER_EVENTS.LOADER_COMPLETE, () => {
      // 直播完成，待播放器播完缓存后发送关闭事件
      if (!player.paused) {
        const timer = setInterval(() => {
          const end = player.getBufferedRange()[1];
          if (Math.abs(player.currentTime - end) < 0.5) {
            player.emit('ended');
            window.clearInterval(timer);
          }
        }, 200);
      }
    });
  }

  initEvents() {
    this.on('timeupdate', () => {
      this.loadData();
    });

    this.on('seeking', () => {
      const time = this.currentTime;
      const range = this.getBufferedRange();
      if (time > range[1] || time < range[0]) {
        this.flv.seek(this.currentTime);
      }
    });
  }

  initFlv() {
    const flv = this.context.registry('FLV_CONTROLLER', _flvLiveMobile2.default)(this);
    this.initFlvEvents(flv);
    this.flv = flv;
  }

  play() {
    console.log('play');
    if (this._hasStart) {
      this._destroy();
      this.context = new _xgplayerUtils.Context(flvAllowedEvents);
      const flv = this.context.registry('FLV_CONTROLLER', _flvLiveMobile2.default)(this);
      this.initFlvEvents(flv);
      this.flv = flv;
      this.context.init();
      super.start(flv.mse.url);
      super.play();
    } else {
      super.play();
    }
  }

  pause() {
    super.pause();
    if (this.flv) {
      this.flv.pause();
    }
  }

  loadData(time = this.currentTime) {
    if (this.flv) {
      this.flv.seek(time);
    }
  }
  destroy() {
    this._destroy();
    super.destroy();
  }

  _destroy() {
    this.context.destroy();
    this.flv = null;
    this.context = null;
  }

  get src() {
    return this.currentSrc;
  }

  set src(url) {
    this.player.config.url = url;
    if (!this.paused) {
      this.pause();
      this.once('pause', () => {
        this.start(url);
      });
      this.once('canplay', () => {
        this.play();
      });
    } else {
      this.start(url);
    }
    this.once('canplay', () => {
      this.currentTime = 0;
    });
  }
}

module.exports = FlvPlayer;

/***/ }),

/***/ 1:
/*!*****************************!*\
  !*** multi ./src/mobile.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/mobile.js */"./src/mobile.js");


/***/ }),

/***/ "xgplayer":
/*!*************************!*\
  !*** external "Player" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["Player"]; }());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GbHZQbGF5ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy9Vc2Vycy9sZW9uYXJkby9Eb2N1bWVudHMvZnJvbnQtZW5kL3BsYXllci94Z3BsYXllci9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1idWZmZXIvc3JjL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItYnVmZmVyL3NyYy9wcmVzb3VjZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItYnVmZmVyL3NyYy90cmFjay5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItY29kZWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWNvZGVjL3NyYy9hYWMvYWFjLWhlbHBlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItY29kZWMvc3JjL2NvbXBhdGliaWxpdHkuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWNvZGVjL3NyYy9oMjY0L25hbHVuaXQvZ29sb21iLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1jb2RlYy9zcmMvaDI2NC9uYWx1bml0L2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1jb2RlYy9zcmMvaDI2NC9uYWx1bml0L3Nwcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWRlbXV4L3NyYy9mbHYvYW1mLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvc3JjL2Zsdi9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvc3JjL2hscy9kZW11eGVyL20zdThwYXJzZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWRlbXV4L3NyYy9obHMvZGVtdXhlci90cy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvc3JjL2hscy9wbGF5bGlzdC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItbG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1sb2FkZXIvc3JjL2ZldGNoLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItcmVtdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXJlbXV4L3NyYy9tcDQvZm1wNC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItcmVtdXgvc3JjL21wNC9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL25vZGVfbW9kdWxlcy9jb25jYXQtdHlwZWQtYXJyYXkvbGliL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvbm9kZV9tb2R1bGVzL2NvbmNhdC10eXBlZC1hcnJheS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL25vZGVfbW9kdWxlcy93ZWJ3b3JraWZ5LXdlYnBhY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9jb25zdGFudHMvZXZlbnRzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvY29uc3RhbnRzL3dvcmtlci1jb21tYW5kcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9jcnlwdG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9lbnYvaXNsZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL2Vudi9zbmlmZmVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvZW52L3V0ZjguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2JpbGUvYXVkaW8tY29udGV4dC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vYmlsZS9tb2JpbGUtdmlkZW8uanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2JpbGUvc291cmNlYnVmZmVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9iaWxlL3RpY2tlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vYmlsZS92aWRlby1jb250ZXh0LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9iaWxlL3dvcmtlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vYmlsZS95dXYtY2FudmFzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9kZWxzL21lZGlhLWluZm8uanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2RlbHMvbWVkaWEtc2FtcGxlLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9kZWxzL21lZGlhLXNlZ21lbnQtbGlzdC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vZGVscy9tZWRpYS1zZWdtZW50LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9kZWxzL3RyYWNrLW1ldGEuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2RlbHMvdHJhY2stc2FtcGxlLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbXNlL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvd3JpdGUvYnVmZmVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvd3JpdGUvc3RyZWFtLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9mbHYtbGl2ZS1tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL21vYmlsZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvZXh0ZXJuYWwgXCJQbGF5ZXJcIiJdLCJuYW1lcyI6WyJSIiwiUmVmbGVjdCIsIlJlZmxlY3RBcHBseSIsImFwcGx5IiwidGFyZ2V0IiwicmVjZWl2ZXIiLCJhcmdzIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJjYWxsIiwiUmVmbGVjdE93bktleXMiLCJvd25LZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImNvbmNhdCIsIlByb2Nlc3NFbWl0V2FybmluZyIsIndhcm5pbmciLCJjb25zb2xlIiwid2FybiIsIk51bWJlcklzTmFOIiwiTnVtYmVyIiwiaXNOYU4iLCJ2YWx1ZSIsIkV2ZW50RW1pdHRlciIsImluaXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX2V2ZW50cyIsInVuZGVmaW5lZCIsIl9ldmVudHNDb3VudCIsIl9tYXhMaXN0ZW5lcnMiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwic2V0IiwiYXJnIiwiUmFuZ2VFcnJvciIsImdldFByb3RvdHlwZU9mIiwiY3JlYXRlIiwic2V0TWF4TGlzdGVuZXJzIiwibiIsIiRnZXRNYXhMaXN0ZW5lcnMiLCJ0aGF0IiwiZ2V0TWF4TGlzdGVuZXJzIiwiZW1pdCIsInR5cGUiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicHVzaCIsImRvRXJyb3IiLCJldmVudHMiLCJlcnJvciIsImVyIiwiRXJyb3IiLCJlcnIiLCJtZXNzYWdlIiwiY29udGV4dCIsImhhbmRsZXIiLCJsZW4iLCJsaXN0ZW5lcnMiLCJhcnJheUNsb25lIiwiX2FkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJwcmVwZW5kIiwibSIsImV4aXN0aW5nIiwiVHlwZUVycm9yIiwibmV3TGlzdGVuZXIiLCJ1bnNoaWZ0Iiwid2FybmVkIiwidyIsIlN0cmluZyIsIm5hbWUiLCJlbWl0dGVyIiwiY291bnQiLCJhZGRMaXN0ZW5lciIsIm9uIiwicHJlcGVuZExpc3RlbmVyIiwib25jZVdyYXBwZXIiLCJmaXJlZCIsInJlbW92ZUxpc3RlbmVyIiwid3JhcEZuIiwiX29uY2VXcmFwIiwic3RhdGUiLCJ3cmFwcGVkIiwiYmluZCIsIm9uY2UiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdCIsInBvc2l0aW9uIiwib3JpZ2luYWxMaXN0ZW5lciIsInNoaWZ0Iiwic3BsaWNlT25lIiwib2ZmIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwia2V5cyIsImtleSIsIl9saXN0ZW5lcnMiLCJ1bndyYXAiLCJldmxpc3RlbmVyIiwidW53cmFwTGlzdGVuZXJzIiwicmF3TGlzdGVuZXJzIiwibGlzdGVuZXJDb3VudCIsImV2ZW50TmFtZXMiLCJhcnIiLCJjb3B5IiwiQXJyYXkiLCJpbmRleCIsInBvcCIsInJldCIsIlRyYWNrIiwicmVxdWlyZSIsImRlZmF1bHQiLCJUcmFja3MiLCJBdWRpb1RyYWNrIiwiVmlkZW9UcmFjayIsIlhnQnVmZmVyIiwiUmVtdXhCdWZmZXIiLCJQcmVTb3VyY2UiLCJjb25zdHJ1Y3RvciIsImhpc3RvcnlMZW4iLCJhcnJheSIsIm9mZnNldCIsImRhdGEiLCJieXRlTGVuZ3RoIiwiVWludDhBcnJheSIsIl9zaGlmdEJ1ZmZlciIsInNsaWNlIiwidG1wb2ZmIiwidG1wIiwidGVtcGxlbmd0aCIsImNsZWFyIiwiZGVzdHJveSIsInRvSW50Iiwic3RhcnQiLCJyZXRJbnQiLCJ2aWRlbyIsImF1ZGlvIiwiU291cmNlIiwibWltZXR5cGUiLCJzb3VyY2VzIiwiZ2V0U291cmNlIiwic291cmNlIiwiY3JlYXRlU291cmNlIiwiaWQiLCJzZXF1ZW5jZU51bWJlciIsInNhbXBsZXMiLCJkcm9wcGVkU2FtcGxlcyIsInJlc2V0IiwiZGlzdHJveSIsIlRBRyIsImRyb3BwZWQiLCJhdWRpb1RyYWNrIiwidmlkZW9UcmFjayIsIk5hbHVuaXQiLCJTcHNQYXJzZXIiLCJDb21wYXRpYmlsaXR5IiwiQUFDIiwiZ2V0U2lsZW50RnJhbWUiLCJjb2RlYyIsImNoYW5uZWxDb3VudCIsIlJFTVVYX0VWRU5UUyIsIkRFTVVYX0VWRU5UUyIsIkVWRU5UUyIsIm5leHRBdWRpb0R0cyIsIm5leHRWaWRlb0R0cyIsImxhc3RBdWRpb1NhbXBsZXNMZW4iLCJsYXN0VmlkZW9TYW1wbGVzTGVuIiwibGFzdFZpZGVvRHRzIiwibGFzdEF1ZGlvRHRzIiwiYWxsQXVkaW9TYW1wbGVzQ291bnQiLCJhbGxWaWRlb1NhbXBsZXNDb3VudCIsIl9maXJzdEF1ZGlvU2FtcGxlIiwiX2ZpcnN0VmlkZW9TYW1wbGUiLCJmaWxsZWRBdWRpb1NhbXBsZXMiLCJmaWxsZWRWaWRlb1NhbXBsZXMiLCJfdmlkZW9MYXJnZUdhcCIsIl9hdWRpb0xhcmdlR2FwIiwiYmVmb3JlIiwiUkVNVVhfTUVESUEiLCJkb0ZpeCIsImlzRmlyc3RBdWRpb1NhbXBsZXMiLCJpc0ZpcnN0VmlkZW9TYW1wbGVzIiwiZ2V0Rmlyc3RTYW1wbGUiLCJyZWNvcmRTYW1wbGVzQ291bnQiLCJmaXhSZWZTYW1wbGVEdXJhdGlvbiIsIm1ldGEiLCJjaGFuZ2VkIiwidmlkZW9DaGFuZ2VkIiwiY2hhbmdlZElkeCIsInZpZGVvQ2hhbmdlZElkeCIsImRldGFjdENoYW5nZVN0cmVhbSIsImZpeENoYW5nZVN0cmVhbVZpZGVvIiwiZG9GaXhWaWRlbyIsImF1ZGlvQ2hhbmdlZCIsImF1ZGlvQ2hhbmdlZElkeCIsImZpeENoYW5nZVN0cmVhbUF1ZGlvIiwiZG9GaXhBdWRpbyIsImZpcnN0Iiwic3RyZWFtQ2hhbmdlU3RhcnQiLCJ2aWRlb1NhbXBsZXMiLCJmcmFtZVJhdGUiLCJmaXhlZCIsImZpcnN0U2FtcGxlIiwic2FtcGxlc0xlbiIsImRvRml4TGFyZ2VHYXAiLCJkdHMiLCJkZXRlY3RMYXJnZUdhcCIsImZpcnN0RHRzIiwidmlkZW9GaXJzdER0cyIsImF1ZGlvRmlyc3REdHMiLCJnYXAiLCJyZWZTYW1wbGVEdXJhdGlvbiIsImZpbGxDb3VudCIsIk1hdGgiLCJmbG9vciIsImNsb25lZEZpcnN0U2FtcGxlIiwiYXNzaWduIiwicHRzIiwiY3RzIiwic2l6ZSIsImFic0dhcCIsImFicyIsImZpbGxGcmFtZUNvdW50IiwiY2xvbmVkU2FtcGxlIiwiY29tcHV0ZWQiLCJvcmlnaW5EdHMiLCJsYXN0RHRzIiwibGFzdFNhbXBsZUR1cmF0aW9uIiwiY3VycmVudCIsIm5leHQiLCJkdXJhdGlvbiIsImZpbGxGcmFtZUlkeCIsImZpbGxGcmFtZSIsInNwbGljZSIsImF1ZGlvU2FtcGxlcyIsInNpbGVudEZyYW1lIiwiX2ZpcnN0U2FtcGxlIiwidmlkZW9GaXJzdFB0cyIsInNpbGVudFNhbXBsZUNvdW50Iiwic2lsZW50U2FtcGxlIiwiZGF0YXNpemUiLCJmaWx0ZXJlZCIsInJlZlNhbXBsZUR1cmF0aW9uRml4ZWQiLCJzaWxlbnRGcmFtZUNvdW50Iiwic29ydEF1ZGlvU2FtcGxlcyIsImNoYW5nZUlkeCIsInByZXZEdHMiLCJnZXRTdHJlYW1DaGFuZ2VTdGFydCIsImN1ckR0cyIsImlzQ29udGludWUiLCJvcHRpb25zIiwiZmlyc3RQYXJ0U2FtcGxlcyIsInNlY29uZFBhcnRTYW1wbGVzIiwiY2hhbmdlU2FtcGxlIiwiZmlyc3RQYXJ0RHVyYXRpb24iLCJmaW5kRmlyc3RWaWRlb1NhbXBsZSIsImZpbmRGaXJzdEF1ZGlvU2FtcGxlIiwiaXNWaWRlbyIsImFsbFNhbXBsZXNDb3VudCIsImZpbGxlZFNhbXBsZXNDb3VudCIsImR1cmF0aW9uQXZnIiwicmVtb3ZlSW52YWxpZFNhbXBsZXMiLCJmaWx0ZXIiLCJzYW1wbGUiLCJkdHNCYXNlIiwiSW5maW5pdHkiLCJzb3J0IiwiYSIsImIiLCJzb3J0ZWQiLCJpc0tleWZyYW1lIiwibmV4dER0cyIsImNvbmQxIiwiY29uZDIiLCJkaXNjb250aW51ZSIsInRyYWNrcyIsIl9jb250ZXh0IiwiZ2V0SW5zdGFuY2UiLCJyZW11eGVyIiwiX2R0c0Jhc2UiLCJHb2xvbWIiLCJ1aW50OGFycmF5IiwiX2J1ZmZlciIsIl9idWZmZXJJbmRleCIsIl90b3RhbEJ5dGVzIiwiX3RvdGFsQml0cyIsIl9jdXJyZW50V29yZCIsIl9jdXJyZW50V29yZEJpdHNMZWZ0IiwiX2ZpbGxDdXJyZW50V29yZCIsImJ1ZmZlckJ5dGVzTGVmdCIsImJ5dGVzUmVhZCIsIm1pbiIsIndvcmQiLCJzdWJhcnJheSIsIkRhdGFWaWV3IiwiYnVmZmVyIiwiZ2V0VWludDMyIiwicmVhZEJpdHMiLCJiaXRzIiwidmFsdSIsInJlYWRCb29sIiwicmVhZEJ5dGUiLCJfc2tpcExlYWRpbmdaZXJvIiwiemVyb0NvdW50IiwicmVhZFVFRyIsImxlYWRpbmdaZXJvcyIsInJlYWRTRUciLCJnZXROYWx1bml0cyIsImJ1ZiIsImRhdGF2aWV3IiwiZ2V0SW50MzIiLCJnZXRJbnQxNiIsImdldEludDgiLCJnZXRBbm5leGJOYWxzIiwiZ2V0QXZjY05hbHMiLCJuYWxzIiwiZ2V0SGVhZGVyUG9zaXRpb25Bbm5leEIiLCJwb3MiLCJlbmQiLCJoZWFkZXIiLCJoZWFkZXJMZW5ndGgiLCJza2lwIiwiYm9keSIsInVuaXQiLCJhbmFseXNlTmFsIiwibmRyIiwiaWRyIiwic3BzIiwicGFyc2VTUFMiLCJwcHMiLCJnZXRBdmNjIiwiU1BTUGFyc2VyIiwiX2Vic3AycmJzcCIsInNyYyIsInNyY0xlbmd0aCIsImRzdCIsImRzdElkeCIsInJic3AiLCJnYiIsInByb2ZpbGVJZGMiLCJsZXZlbElkYyIsInByb2ZpbGVfc3RyaW5nIiwiZ2V0UHJvZmlsZVN0cmluZyIsImxldmVsX3N0cmluZyIsImdldExldmVsU3RyaW5nIiwiY2hyb21hX2Zvcm1hdF9pZGMiLCJjaHJvbWFfZm9ybWF0IiwiY2hyb21hX2Zvcm1hdF90YWJsZSIsImJpdF9kZXB0aCIsInNjYWxpbmdfbGlzdF9jb3VudCIsIl9za2lwU2NhbGluZ0xpc3QiLCJwaWNfb3JkZXJfY250X3R5cGUiLCJudW1fcmVmX2ZyYW1lc19pbl9waWNfb3JkZXJfY250X2N5Y2xlIiwicGljX3dpZHRoX2luX21ic19taW51czEiLCJwaWNfaGVpZ2h0X2luX21hcF91bml0c19taW51czEiLCJmcmFtZV9tYnNfb25seV9mbGFnIiwiZnJhbWVfY3JvcF9sZWZ0X29mZnNldCIsImZyYW1lX2Nyb3BfcmlnaHRfb2Zmc2V0IiwiZnJhbWVfY3JvcF90b3Bfb2Zmc2V0IiwiZnJhbWVfY3JvcF9ib3R0b21fb2Zmc2V0IiwiZnJhbWVfY3JvcHBpbmdfZmxhZyIsInBhcl93aWR0aCIsInBhcl9oZWlnaHQiLCJmcHMiLCJmcHNfZml4ZWQiLCJmcHNfbnVtIiwiZnBzX2RlbiIsInZ1aV9wYXJhbWV0ZXJzX3ByZXNlbnRfZmxhZyIsImFzcGVjdF9yYXRpb19pZGMiLCJwYXJfd190YWJsZSIsInBhcl9oX3RhYmxlIiwibnVtX3VuaXRzX2luX3RpY2siLCJ0aW1lX3NjYWxlIiwicGFyU2NhbGUiLCJjcm9wX3VuaXRfeCIsImNyb3BfdW5pdF95Iiwic3ViX3djIiwic3ViX2hjIiwiY29kZWNfd2lkdGgiLCJjb2RlY19oZWlnaHQiLCJwcmVzZW50X3dpZHRoIiwiY2VpbCIsImNocm9tYV9mb3JtYXRfc3RyaW5nIiwiZ2V0Q2hyb21hRm9ybWF0U3RyaW5nIiwiZnJhbWVfcmF0ZSIsInBhcl9yYXRpbyIsIndpZHRoIiwiaGVpZ2h0IiwiY29kZWNfc2l6ZSIsInByZXNlbnRfc2l6ZSIsImxhc3Rfc2NhbGUiLCJuZXh0X3NjYWxlIiwiZGVsdGFfc2NhbGUiLCJ0b0ZpeGVkIiwiY2hyb21hIiwidG9WaWRlb01ldGEiLCJzcHNDb25maWciLCJjb2RlY1dpZHRoIiwiY29kZWNIZWlnaHQiLCJwcmVzZW50V2lkdGgiLCJwcmVzZW50SGVpZ2h0IiwicHJvZmlsZSIsImxldmVsIiwiYml0RGVwdGgiLCJjaHJvbWFGb3JtYXQiLCJwYXJSYXRpbyIsImZwc0RlbiIsImZwc051bSIsInRpbWVzY2FsZSIsIk0zVThQYXJzZXIiLCJUc0RlbXV4ZXIiLCJQbGF5bGlzdCIsIkZsdkRlbXV4ZXIiLCJEQVRBX1RZUEVTIiwiTlVNQkVSIiwiQk9PTEVBTiIsIlNUUklORyIsIk9CSkVDVCIsIk1JWF9BUlJBWSIsIk9CSkVDVF9FTkQiLCJTVFJJQ1RfQVJSQVkiLCJEQVRFIiwiTE9ORV9TVFJJTkciLCJBTUZQYXJzZXIiLCJyZWFkT2Zmc2V0IiwicmVzb2x2ZSIsIm1ldGFEYXRhIiwicGFyc2VWYWx1ZSIsImJvZHlTaXplIiwicmVzZXRTdGF0dXMiLCJwYXJzZVN0cmluZyIsImR2Iiwic3RyTGVuIiwiZ2V0VWludDE2IiwiaXNMZSIsInN0ciIsIlVURjgiLCJkZWNvZGUiLCJwYXJzZURhdGUiLCJ0cyIsImdldEZsb2F0NjQiLCJ0aW1lT2Zmc2V0IiwiRGF0ZSIsInBhcnNlT2JqZWN0IiwiaXNPYmpFbmQiLCJwYXJzZUxvbmdTdHJpbmciLCJBcnJheUJ1ZmZlciIsImRhdGFWaWV3IiwiZ2V0VWludDgiLCJib29sTnVtIiwib2JqRW5kU2l6ZSIsImFtZk9iaiIsImlzT2JqZWN0RW5kIiwibWFyayIsImFtZlZhciIsIm1hcmtlciIsImFyckxlbmd0aCIsInNjcmlwdCIsImRhdGUiLCJsb25nU3RyIiwiX2ZpcnN0RnJhZ21lbnRMb2FkZWQiLCJfdHJhY2tOdW0iLCJfaGFzU2NyaXB0IiwiREVNVVhfU1RBUlQiLCJkb1BhcnNlRmx2IiwiaXNGbHZGaWxlIiwiZ2V0UGxheVR5cGUiLCJzdHJlYW1GbGFnIiwicmVzdWx0IiwiaGFzVmlkZW8iLCJoYXNBdWRpbyIsImxvYWRlckJ1ZmZlciIsInBhcnNlRmx2SGVhZGVyIiwiY2h1bmsiLCJsb29wTWF4IiwiX3BhcnNlRmx2VGFnIiwiREVNVVhfQ09NUExFVEUiLCJERU1VWF9FUlJPUiIsInBsYXlUeXBlIiwiaW5pdFZpZGVvVHJhY2siLCJpbml0QXVkaW9UcmFjayIsIlZpZGVvVHJhY2tNZXRhIiwiQXVkaW9UcmFja01ldGEiLCJfcGFyc2VGbHZUYWdIZWFkZXIiLCJfcHJvY2Vzc0NodW5rIiwidGFnVHlwZSIsInRpbWVzdGFtcCIsInRpbWVzdGFtcEV4dCIsIl9wYXJzZVNjcmlwdERhdGEiLCJfcGFyc2VBQUNEYXRhIiwiX3BhcnNlSGV2Y0RhdGEiLCJpbmZvIiwib25NZXRhRGF0YSIsIm1lZGlhSW5mbyIsImhzYUF1ZGlvIiwidmFsaWRhdGUiLCJfZGF0YXNpemVWYWxpZGF0b3IiLCJNRURJQV9JTkZPIiwiaGFzU3BlY2lmaWNDb25maWciLCJhdWRpb3NhbXBsZXJhdGUiLCJzYW1wbGVSYXRlIiwiYXVkaW9jaGFubmVscyIsInNhbXBsZVJhdGVJbmRleCIsImZyYW1lcmF0ZSIsIl9hYWNTZXF1ZW5jZUhlYWRlclBhcnNlciIsIm9iamVjdFR5cGUiLCJfc3dpdGNoQXVkaW9TYW1wbGVSYXRlIiwiZnJhbWVMZW5ndGgiLCJkZXBlbmRzT25Db3JlQ29kZXIiLCJleHRlbnNpb25GbGFnSW5kZXgiLCJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ0b0xvd2VyQ2FzZSIsImV4dGVuc2lvblNhbXBsaW5nSW5kZXgiLCJjb25maWciLCJzYW1wbGluZ0luZGV4IiwiaW5kZXhPZiIsInRyYWNrIiwiZm9ybWF0IiwiX2hhc0F1ZGlvU2VxdWVuY2UiLCJfc3dpdGNoQXVkaW9TYW1wbGluZ0ZyZXF1ZW5jeSIsImZyYW1lTGVudGgiLCJhdWRpb1NhbXBsZVJhdGUiLCJhdWRpb1NhbXBsZVJhdGVJbmRleCIsImFhY0hlYWRlciIsImF1ZGlvTWVkaWEiLCJNRVRBREFUQV9QQVJTRUQiLCJBVURJT19NRVRBREFUQV9DSEFOR0UiLCJfbWV0YUNoYW5nZSIsImZyYW1lVHlwZSIsImNvZGVjSUQiLCJhdmNQYWNrZXRUeXBlIiwicGFyc2VJbnQiLCJuYWx1IiwiciIsInNpemVzIiwiYXZjY2xlbmd0aCIsIl9hdmNTZXF1ZW5jZUhlYWRlclBhcnNlciIsIl9oYXNWaWRlb1NlcXVlbmNlIiwiVklERU9fTUVUQURBVEFfQ0hBTkdFIiwiY29uZmlndXJhdGlvblZlcnNpb24iLCJhdmNQcm9maWxlSW5kaWNhdGlvbiIsInByb2ZpbGVDb21wYXRpYmlsaXR5IiwiYXZjTGV2ZWxJbmRpY2F0aW9uIiwibmFsVW5pdExlbmd0aCIsIm51bU9mU3BzIiwiaiIsImNvZGVjU3RyaW5nIiwiaCIsInRvU3RyaW5nIiwibnVtT2ZQcHMiLCJ2aWRlb01lZGlhIiwiYXZjYyIsInNhbXBsaW5nRnJlcXVlbmN5SW5kZXgiLCJzYW1wbGluZ0ZyZXF1ZW5jeUxpc3QiLCJfc3dpdGNoQXVkaW9DaGFubmVsIiwic2FtcGxlVHJhY2tOdW1JbmRleCIsInNhbXBsZVRyYWNrTnVtTGlzdCIsImRhdGFzaXplQ29uZmlybSIsImxvZ2dlciIsInBhcnNlIiwidGV4dCIsImJhc2V1cmwiLCJzcGxpdCIsInJlZnMiLCJyZWYiLCJtYXRjaCIsInJlZm0iLCJyZWZkIiwidmVyc2lvbiIsInNlcXVlbmNlIiwidGFyZ2V0ZHVyYXRpb24iLCJwYXJzZUZsb2F0IiwicGFyc2VGcmFnIiwicGFyc2VEZWNyeXB0IiwiZnJhZ3MiLCJmcmVnIiwibmV4dGxpbmUiLCJjaGFyQXQiLCJ1cmwiLCJwYXJzZVVSTCIsInVybHMiLCJlbmNyeXB0IiwiY21kIiwibWV0aG9kIiwidXJpIiwiaXYiLCJpdmIiLCJpbSIsInN1YnN0ciIsIlN0cmVhbVR5cGUiLCJjb25maWdzIiwiZGVtdXhpbmciLCJwYXQiLCJwbXQiLCJfaGFzVmlkZW9NZXRhIiwiX2hhc0F1ZGlvTWV0YSIsImRlbXV4IiwiZnJhZyIsImlucHV0QnVmZmVyIiwicGVzZXMiLCJ0c1N0cmVhbSIsIlN0cmVhbSIsInJlYWQiLCJwZXMiLCJwaWQiLCJFUyIsInBheWxvYWQiLCJzdHJlYW0iLCJBdWRpb09wdGlvbnMiLCJWaWRlb09wdGlvbnMiLCJlcGVzZXMiLCJNZXJnZSIsInB1c2hBdWRpb1NhbXBsZSIsInB1c2hWaWRlb1NhbXBsZSIsIl90cmFja3MiLCJmcmVxdWVuY2UiLCJjaGFubmVsIiwiYXVkaW9PYmplY3RUeXBlIiwiYXVkaW9Db25maWciLCJmcmVxdWVuY3lJbmRleCIsIm1ldGFFcXVhbCIsImNvbXBhaXJlTWV0YSIsIkF1ZGlvVHJhY2tTYW1wbGUiLCJzYW1wbGVMZW5ndGgiLCJuYWwiLCJzYXJSYXRpbyIsInNhcl9yYXRpbyIsIlZpZGVvVHJhY2tTYW1wbGUiLCJkZXN0b3J5IiwiY29tcGFpcmVBcnJheSIsImFsIiwiYmwiLCJpZ25vcmVEdXJhdGlvbiIsImsiLCJpdGVtYSIsIml0ZW1iIiwiYnVmZmVycyIsInJlYWRIZWFkZXIiLCJyZWFkUGF5bG9hZCIsInBhY2tldCIsInVua25vd25QSURzIiwiUEVTIiwiUEFUIiwiQ0FUIiwiVFNEVCIsInNvbWUiLCJpdGVtIiwiUE1UIiwic3RzIiwiTWVkaWEiLCJzdHJlYW1UeXBlIiwic3luYyIsInJlYWRVaW50OCIsInJlYWRVaW50MTYiLCJwcmlvcml0eSIsInNjcmFtYmxpbmciLCJhZGFwdGF0aW9uIiwiY29udGludWl0eSIsInRhYmVsSUQiLCJ6ZXJvIiwic2VjdGlvbkxlbmd0aCIsInN0cmVhbUlEIiwic2VjdGlvbk51bWJlciIsImxhc3RTZWN0aW9uTnVtYmVyIiwiTiIsInByb2dyYW1OdW1iZXIiLCJwcm9ncmFtIiwidGFibGVJRCIsIm9yZGVyIiwibGFzdE9yZGVyIiwiUENSX1BJRCIsInByb2dyYW1MZW5ndGgiLCJlcyIsIm1hcCIsImFkYXB0YXRpb25MZW5ndGgiLCJhY2Nlc3MiLCJQQ1IiLCJPUENSIiwic3BsaWNlUG9pbnQiLCJ0cmFuc3BvcnRQcml2YXRlIiwiYWRhcHRhdGlvbkZpZWxkIiwiX3N0YXJ0IiwicHJvZ3JhbUNsb2NrQmFzZSIsInJlYWRVaW50MzIiLCJwcm9ncmFtQ2xvY2tFeHRlbnNpb24iLCJvcmlnaW5Qcm9ncmFtQ2xvY2tCYXNlIiwib3JpZ2luUHJvZ3JhbUNsb2NrRXh0ZW5zaW9uIiwic3BsaWNlQ291bnRkb3duIiwidHJhbnNwb3J0UHJpdmF0ZURhdGEiLCJsdHciLCJwaWVjZXdpc2UiLCJzZWFtbGVzcyIsImx0d1ZhbGlkIiwibHR3T2Zmc2V0IiwicmVhZFVpbnQyNCIsInBpZWNld2lzZVJhdGUiLCJyZWFkSW50OCIsInNwbGljZVR5cGUiLCJkdHNOZXh0QVUxIiwibWFya2VyMSIsImR0c05leHRBVTIiLCJtYXJrZXIyIiwiZHRzTmV4dEFVMyIsImxhc3RTdHVmZmluZyIsInBhY2tldExlbmd0aCIsInB0c0RUU0ZsYWciLCJlc2NyRmxhZyIsImVzUmF0ZUZsYWciLCJkc21GbGFnIiwiYWRkaXRpb25hbEZsYWciLCJjcmNGbGFnIiwiZXh0ZW5zaW9uRmxhZyIsInBlc0hlYWRlckxlbmd0aCIsIk4xIiwiZXNjciIsImV4IiwiZXNSYXRlIiwiYWRkaXRpb25hbENvcHlJbmZvIiwicGVzQ1JDIiwiYmFjayIsImZxIiwibGF5ZXIiLCJhYnNlbnQiLCJnZXRBdWRpb0NvbmZpZyIsInNlY3Rpb25JbmRpY2F0b3IiLCJjdXJyZW50TmV4dEluZGljYXRvciIsImNyYzMyIiwiZXh0ZW5zaW9uU2FtcGxlSW5kZXgiLCJ0ZXN0IiwiaW5wdXRidWZmZXIiLCJfYmFzZVVSTCIsIl9saXN0IiwiX3RzIiwiZnJhZ0xlbmd0aCIsIl9sYXN0Z2V0IiwiX2F1ZG9jbGVhciIsImF1dG9jbGVhciIsImJhc2VVUkwiLCJkb3dubG9hZGVkIiwiZG93bmxvYWRpbmciLCJkZWxldGVGcmFnIiwidGltZSIsInB1c2hNM1U4IiwiZGVsZXRlcHJlIiwibmV3ZnJhZ2xpc3QiLCJ0c2xpc3QiLCJnZXRUc0xpc3QiLCJ0c25hbWUiLCJpc2xvYWRlZCIsImxvYWRpbmciLCJnZXRUc0J5TmFtZSIsImdldFRzIiwidGltZWxpc3QiLCJjbGVhckRvd25sb2FkZWQiLCJsIiwiRmV0Y2hMb2FkZXIiLCJMT0FERVJfRVZFTlRTIiwiUkVBRF9TVFJFQU0iLCJSRUFEX1RFWFQiLCJSRUFEX0pTT04iLCJSRUFEX0JVRkZFUiIsInN0YXR1cyIsIl9yZWFkZXIiLCJfY2FuY2VsZWQiLCJfZGVzdHJveWVkIiwicmVhZHR5cGUiLCJfbG9hZGVyVGFza05vIiwiTEFERVJfU1RBUlQiLCJsb2FkIiwib3B0cyIsIl90aGlzIiwicGFyYW1zIiwiZ2V0UGFyYW1zIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIl9vbkZldGNoUmVzcG9uc2UiLCJMT0FERVJfRVJST1IiLCJjYXRjaCIsInRhc2tubyIsImpzb24iLCJMT0FERVJfQ09NUExFVEUiLCJhcnJheUJ1ZmZlciIsIl9vblJlYWRlciIsImdldFJlYWRlciIsInJlYWRlciIsImNhbmNlbCIsImUiLCJ2YWwiLCJkb25lIiwiTE9BREVSX0RBVEFMT0FERUQiLCJoZWFkZXJzIiwiSGVhZGVycyIsIm1vZGUiLCJjYWNoZSIsImNvbmZpZ0hlYWRlcnMiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcGVuZCIsIm9wdEhlYWRlcnMiLCJjb3JzIiwid2l0aENyZWRlbnRpYWxzIiwiY3JlZGVudGlhbHMiLCJNcDRSZW11eGVyIiwiRm1wNCIsIkJ1ZmZlciIsIndyaXRlVWludDMyIiwiaW5pdEJveCIsImNvbnRlbnQiLCJ3cml0ZSIsImV4dGVuc2lvbiIsImZsYWciLCJmdHlwIiwibW9vdiIsIm12aGQiLCJ0cmFrIiwidmlkZW9UcmFrIiwiYXVkaW9UcmFrIiwibXZleCIsImZvckVhY2giLCJieXRlcyIsInRraGQiLCJtZGlhIiwic2FtcGxlcmF0ZSIsImVkdHMiLCJtZWRpYVRpbWUiLCJtZGhkIiwiaGRsciIsIm1pbmYiLCJ2bWhkIiwic21oZCIsImRpbmYiLCJzdGJsIiwiZHJlZiIsInN0c2QiLCJzdHRzIiwic3RzYyIsInN0c3oiLCJzdGNvIiwibXA0YSIsImF2YzEiLCJlc2RzIiwiY29uZmlnbGVuIiwiaFNwYWNpbmciLCJ2U3BhY2luZyIsImJ0cnQiLCJwYXNwIiwidHJhY2tJRCIsIm1laGQiLCJ0cmV4IiwibW9vZiIsIm1maGQiLCJ0cmFmIiwidGZoZCIsInRmZHQiLCJzZHRwIiwidHJ1biIsInNkdHBMZW5ndGgiLCJzYW1wbGVDb3VudCIsImZsYWdzIiwiaXNMZWFkaW5nIiwiZGVwZW5kc09uIiwiaXNEZXBlbmRlZE9uIiwiaGFzUmVkdW5kYW5jeSIsImlzTm9uU3luYyIsIm51bSIsIm1kYXQiLCJtZGF0Qm94IiwiY2hhckNvZGVBdCIsIl9pc0R0c0Jhc2VJbml0ZWQiLCJpc0ZpcnN0VmlkZW8iLCJpc0ZpcnN0QXVkaW8iLCJ2aWRlb0FsbER1cmF0aW9uIiwiYXVkaW9BbGxEdXJhdGlvbiIsInJlbXV4IiwiUkVNVVhfTUVUQURBVEEiLCJvbk1ldGFEYXRhUmVhZHkiLCJERVRFQ1RfQ0hBTkdFX1NUUkVBTSIsInJlc2V0RHRzQmFzZSIsIl9kdHNCYXNlSW5pdGVkIiwiY2FsY0R0c0Jhc2UiLCJfcmVtdXhWaWRlbyIsIl9yZW11eEF1ZGlvIiwic2VlayIsInByZXNvdXJjZWJ1ZmZlciIsInJlbXV4SW5pdFNlZ21lbnQiLCJJTklUX1NFR01FTlQiLCJpbml0U2VnbWVudCIsImF1ZGlvQmFzZSIsInZpZGVvQmFzZSIsIm1wNFNhbXBsZXMiLCJhdmNTYW1wbGUiLCJtZGF0U2FtcGxlIiwic2FtcGxlRHVyYXRpb24iLCJ2aWRlb01ldGEiLCJtb29mTWRhdCIsIndyaXRlVG9Tb3VyY2UiLCJNRURJQV9TRUdNRU5UIiwibGFzdFNhbXBsZSIsIl92aWRlb05leHREdHMiLCJpc0ZpcnN0RHRzSW5pdGVkIiwiYXVkaW9NZXRhIiwibXA0U2FtcGxlIiwiaW5pdFNpbGVudEF1ZGlvIiwiQ29udGV4dCIsIldPUktFUl9DT01NQU5EUyIsInNuaWZmZXIiLCJNZWRpYUluZm8iLCJNZWRpYVNhbXBsZSIsIk1lZGlhU2VnbWVudCIsIk1lZGlhU2VnbWVudExpc3QiLCJNc2UiLCJNb2JpbGVWaWRlbyIsIkNyeXB0byIsIlJlc3VsdENvbnN0cnVjdG9yIiwidG90YWxMZW5ndGgiLCJfbGVuIiwiYXJyYXlzIiwiX2tleSIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24iLCJfZGlkSXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfc3RlcCIsInJldHVybiIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yIiwiX2RpZEl0ZXJhdG9yRXJyb3IyIiwiX2l0ZXJhdG9yRXJyb3IyIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9hcnIiLCJfY29uY2F0IiwiX2NvbmNhdDIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwiX19lc01vZHVsZSIsIndlYnBhY2tCb290c3RyYXBGdW5jIiwibW9kdWxlcyIsImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjIiwiZCIsImdldHRlciIsIm8iLCJjb25maWd1cmFibGUiLCJnZXREZWZhdWx0IiwiZ2V0TW9kdWxlRXhwb3J0cyIsIm9iamVjdCIsInByb3BlcnR5IiwicCIsIm9lIiwiZiIsInMiLCJFTlRSWV9NT0RVTEUiLCJtb2R1bGVOYW1lUmVxRXhwIiwiZGVwZW5kZW5jeVJlZ0V4cCIsInF1b3RlUmVnRXhwIiwicmVwbGFjZSIsImlzTnVtZXJpYyIsImdldE1vZHVsZURlcGVuZGVuY2llcyIsInF1ZXVlTmFtZSIsInJldHZhbCIsImZuU3RyaW5nIiwid3JhcHBlclNpZ25hdHVyZSIsIndlYnBhY2tSZXF1aXJlTmFtZSIsInJlIiwiUmVnRXhwIiwiZXhlYyIsImhhc1ZhbHVlc0luUXVldWVzIiwicXVldWVzIiwicmVkdWNlIiwiaGFzVmFsdWVzIiwiZ2V0UmVxdWlyZWRNb2R1bGVzIiwibW9kdWxlc1F1ZXVlIiwibWFpbiIsInJlcXVpcmVkTW9kdWxlcyIsInNlZW5Nb2R1bGVzIiwicXVldWUiLCJtb2R1bGVUb0NoZWNrIiwibmV3TW9kdWxlcyIsIm5ld01vZHVsZXNLZXlzIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImFsbCIsImVudHJ5TW9kdWxlIiwiSlNPTiIsInN0cmluZ2lmeSIsImpvaW4iLCJibG9iIiwiQmxvYiIsImJhcmUiLCJVUkwiLCJ3ZWJraXRVUkwiLCJtb3pVUkwiLCJtc1VSTCIsIndvcmtlclVybCIsImNyZWF0ZU9iamVjdFVSTCIsIndvcmtlciIsIldvcmtlciIsIm9iamVjdFVSTCIsIlJFTVVYX0VSUk9SIiwiTVNFX0VWRU5UUyIsIlNPVVJDRV9VUERBVEVfRU5EIiwiSExTX0VWRU5UUyIsIlJFVFJZX1RJTUVfRVhDRUVERUQiLCJDUllUT19FVkVOVFMiLCJTVEFSVF9ERUNSWVBUIiwiREVDUllQVEVEIiwiQUxMRVZFTlRTIiwiRmx2QWxsb3dlZEV2ZW50cyIsIkhsc0FsbG93ZWRFdmVudHMiLCJDT05URVhUX0NPTU9NQU5EUyIsIk9OIiwiT05DRSIsIk9GRiIsIkVNSVQiLCJERVNUUk9ZIiwiRElSRUNUX0VNSVRfRkxBRyIsImFsbG93ZWRFdmVudHMiLCJfZW1pdHRlciIsIl9pbnN0YW5jZU1hcCIsIl9jbHNNYXAiLCJfaW5pdGVkIiwiX2hvb2tzIiwidGFnIiwiaW5zdGFuY2UiLCJpbml0SW5zdGFuY2UiLCJuZXdJbnN0YW5jZSIsInJlZ2lzdHJ5IiwiY2xzIiwiY2hlY2tNZXNzYWdlTmFtZSIsIl9pc01lc3NhZ2VOYW1lVmFsaWQiLCJzZWxmIiwiZW5oYW5jZWQiLCJvbmNlTGlzdGVuZXJzIiwibWVzc2FnZU5hbWUiLCJjYWxsYmFjayIsImJlZm9yZUxpc3QiLCJlbWl0VG8iLCJyZW1vdmVMaXN0ZW5lcnMiLCJoYXNPd24iLCJjYWxsYmFja3MiLCJkZXN0cm95SW5zdGFuY2VzIiwib3V0cHV0QnVmZmVyIiwib3V0cHV0YnVmZmVyIiwiY3J5cHRvIiwibXNDcnlwdG8iLCJkZWNyaXB0IiwiYWVza2V5Iiwic2JrZXkiLCJzdWJ0bGUiLCJpbXBvcnRLZXkiLCJkZWNyaXB0RGF0YSIsImRlY3J5cHQiLCJyZXMiLCJsZSIsInNldEludDE2IiwiSW50MTZBcnJheSIsImRldmljZSIsIm9zIiwiaXNQYyIsImlzVGFibGV0IiwiYnJvd3NlciIsInVhIiwicmVnIiwiaWUiLCJmaXJmb3giLCJjaHJvbWUiLCJvcGVyYSIsInNhZmFyaSIsImlzV2luZG93c1Bob25lIiwiaXNTeW1iaWFuIiwiaXNBbmRyb2lkIiwiaXNGaXJlRm94IiwiaXNQaG9uZSIsIm91dCIsImlucHV0IiwiZnJvbUNoYXJDb2RlIiwiX2NoZWNrQ29udGludWF0aW9uIiwidWNzNCIsImNoZWNrTGVuZ3RoIiwiQXVkaW9DdHgiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJwcmVsb2FkVGltZSIsIl9jdXJyZW50QnVmZmVyIiwiX25leHRCdWZmZXIiLCJfbGFzdHB0cyIsIl9wcmVEZWNvZGUiLCJfY3VycmVudFRpbWUiLCJfZGVjb2RpbmciLCJfcGxheWVkIiwiY3VycmVudFRpbWUiLCJkZWNvZGVBdWRpbyIsInNldEF1ZGlvRGF0YSIsImRlY29kZUFBQyIsInNhbXBsZURhdGEiLCJnZXRBQUNEYXRhIiwiY29tYmlsZURhdGEiLCJkZWNvZGVBdWRpb0RhdGEiLCJhdWRpb1NvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsIm9uZW5kZWQiLCJvblNvdXJjZUVuZGVkIiwiZ2V0VGltZUJ1ZmZlciIsInBsYXkiLCJzZXRBdWRpb01ldGFEYXRhIiwiYWR0cyIsImdldEFkdHMiLCJhYWNmcmFtZWxlbmd0aCIsIkFWUmVjb25jaWxlciIsInByb3BzIiwiYUN0eCIsInZDdHgiLCJ0aW1lb3V0SWQiLCJkb1JlY29uY2lsZSIsInZDdXJUaW1lIiwiYUN1clRpbWUiLCJsb2ciLCJwYXVzZSIsInNldFRpbWVvdXQiLCJIVE1MRWxlbWVudCIsIlZpZGVvQ3R4IiwidGlja2VyIiwiaGlzdG9yeVRpbWUiLCJyZWNvbmNpbGVyIiwiaGFuZGxlQXVkaW9Tb3VyY2VFbmQiLCJvbmNhbnBsYXkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIm5vdyIsIl9vblRpbWVyIiwiX2NsZWFuQnVmZmVyIiwiY2xlYW5CdWZmZXIiLCJvbkRlbXV4Q29tcGxldGUiLCJkZWNvZGVWaWRlbyIsInNldEF1ZGlvTWV0YSIsInNldFZpZGVvTWV0YSIsInNldFZpZGVvTWV0YURhdGEiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIlNvdXJjZUJ1ZmZlciIsImN1cnJlbnRHb3AiLCJfbGFzdEdldCIsImZyYW1lIiwibmV4dEdvcCIsIl9nZXROZXh0IiwiZ29wIiwicmVtb3ZlIiwiVGlja2VyIiwiaW50ZXJ2YWwiLCJvblRpY2siLCJzZXRJbnRlcnZhbCIsIlJhZlRpY2tlciIsInByZXYiLCJ0aW1lcklkIiwiX3N1YlRpbWVySWQiLCJfdGlja0Z1bmMiLCJnZXRUaWNrRnVuYyIsInRpY2siLCJuZXh0VGljayIsInN0b3AiLCJjYW5jZWxGdW5jIiwiZ2V0Q2FuY2VsRnVuYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpc1N1cHBvcnRlZCIsIlRpbWVvdXRUaWNrZXIiLCJjbGVhckludGVydmFsIiwiZ2V0VGlja2VyIiwiVmlkZW9DYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJvbkZpcnN0RnJhbWUiLCJyZWFkeVN0YXR1cyIsInBhdXNlZCIsImxhc3RQbGF5ZWQiLCJfZGVjb2RlckluaXRlZCIsIl9hdmNjcHVzaGVkIiwiX2RlY29kZWRGcmFtZXMiLCJfbGFzdFNhbXBsZUR0cyIsIl9iYXNlRHRzIiwiX2xhc3RSZW5kZXJUaW1lIiwiaW5pdFdhc21Xb3JrZXIiLCJ3YXNtd29ya2VyIiwicG9zdE1lc3NhZ2UiLCJtc2ciLCJhZGRFdmVudExpc3RlbmVyIiwiX29uRGVjb2RlZCIsInl1dkNhbnZhcyIsIllVVkNhbnZhcyIsIl9wcmVsb2FkIiwiX2FuYWx5c2VOYWwiLCJmcmFtZVRpbWVzIiwiZnJhbWVUaW1lIiwiY3VycmVudElkeCIsInJlbmRlciIsIk1BWF9TVFJFQU1fQlVGRkVSX0xFTkdUSCIsIkRlY29kZXIiLCJpbml0ZWQiLCJpbmZvbGlzdCIsInBhcl9icm9hZHdheU9uQnJvYWR3YXlJbml0ZWQiLCJicm9hZHdheU9uQnJvYWR3YXlJbml0ZWQiLCJwYXJfYnJvYWR3YXlPblBpY3R1cmVEZWNvZGVkIiwiYnJvYWR3YXlPblBpY3R1cmVEZWNvZGVkIiwidG9VOEFycmF5IiwicHRyIiwiSEVBUFU4IiwiTW9kdWxlIiwiX2Jyb2Fkd2F5SW5pdCIsInN0cmVhbUJ1ZmZlciIsIl9icm9hZHdheUNyZWF0ZVN0cmVhbSIsImluZm9pZCIsImRhdGV0ZW1wIiwiZ2V0VGltZSIsIl9icm9hZHdheVBsYXlTdHJlYW0iLCJkZWNvZGVyIiwib25Qb3N0UnVuIiwiaW1wb3J0U2NyaXB0cyIsImFkZE9uUG9zdFJ1biIsInN0eWxlIiwiX2luaXRDb250ZXh0R0wiLCJjb250ZXh0R0wiLCJfaW5pdFByb2dyYW0iLCJfaW5pdEJ1ZmZlcnMiLCJfaW5pdFRleHR1cmVzIiwiZ2wiLCJ2YWxpZENvbnRleHROYW1lcyIsIm5hbWVJbmRleCIsImNvbnRleHROYW1lIiwiY29udGV4dE9wdGlvbnMiLCJnZXRDb250ZXh0IiwiZ2V0UGFyYW1ldGVyIiwidmVydGV4U2hhZGVyU2NyaXB0IiwiZnJhZ21lbnRTaGFkZXJTY3JpcHQiLCJZVVYyUkdCIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwiVkVSVEVYX1NIQURFUiIsInNoYWRlclNvdXJjZSIsImNvbXBpbGVTaGFkZXIiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiLCJDT01QSUxFX1NUQVRVUyIsImdldFNoYWRlckluZm9Mb2ciLCJmcmFnbWVudFNoYWRlciIsIkZSQUdNRU5UX1NIQURFUiIsImNyZWF0ZVByb2dyYW0iLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImdldFByb2dyYW1QYXJhbWV0ZXIiLCJMSU5LX1NUQVRVUyIsImdldFByb2dyYW1JbmZvTG9nIiwidXNlUHJvZ3JhbSIsIllVVjJSR0JSZWYiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ1bmlmb3JtTWF0cml4NGZ2Iiwic2hhZGVyUHJvZ3JhbSIsInZlcnRleFBvc0J1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJidWZmZXJEYXRhIiwiRmxvYXQzMkFycmF5IiwiU1RBVElDX0RSQVciLCJ2ZXJ0ZXhQb3NSZWYiLCJnZXRBdHRyaWJMb2NhdGlvbiIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwidGV4dHVyZVBvc0J1ZmZlciIsInRleHR1cmVQb3NSZWYiLCJ1VGV4dHVyZVBvc0J1ZmZlciIsInVUZXh0dXJlUG9zUmVmIiwidlRleHR1cmVQb3NCdWZmZXIiLCJ2VGV4dHVyZVBvc1JlZiIsInlUZXh0dXJlUmVmIiwiX2luaXRUZXh0dXJlIiwieVNhbXBsZXJSZWYiLCJ1bmlmb3JtMWkiLCJ1VGV4dHVyZVJlZiIsInVTYW1wbGVyUmVmIiwidlRleHR1cmVSZWYiLCJ2U2FtcGxlclJlZiIsInRleHR1cmVSZWYiLCJjcmVhdGVUZXh0dXJlIiwiYmluZFRleHR1cmUiLCJURVhUVVJFXzJEIiwidGV4UGFyYW1ldGVyaSIsIlRFWFRVUkVfTUFHX0ZJTFRFUiIsIk5FQVJFU1QiLCJURVhUVVJFX01JTl9GSUxURVIiLCJURVhUVVJFX1dSQVBfUyIsIkNMQU1QX1RPX0VER0UiLCJURVhUVVJFX1dSQVBfVCIsIl9kcmF3UGljdHVyZUdMIiwibldpZHRoIiwieWxlbiIsInV2bGVuIiwicmVuZGVyRGF0YSIsInlEYXRhIiwidURhdGEiLCJ2RGF0YSIsInlBcnJheSIsInVBcnJheSIsInZBcnJheSIsIl9kcmF3UGljdHVyZUdMNDIwIiwieURhdGFQZXJSb3ciLCJ5Um93Q250IiwidURhdGFQZXJSb3ciLCJ1Um93Q250IiwidkRhdGFQZXJSb3ciLCJ2Um93Q250IiwicmF0aW93IiwicmF0aW9oIiwibGVmdCIsInRvcCIsInZpZXdwb3J0IiwidGV4dHVyZVBvc1ZhbHVlcyIsIkRZTkFNSUNfRFJBVyIsInVUZXh0dXJlUG9zVmFsdWVzIiwidlRleHR1cmVQb3NWYWx1ZXMiLCJhY3RpdmVUZXh0dXJlIiwiVEVYVFVSRTAiLCJ0ZXhJbWFnZTJEIiwiTFVNSU5BTkNFIiwiVU5TSUdORURfQllURSIsIlRFWFRVUkUxIiwiVEVYVFVSRTIiLCJkcmF3QXJyYXlzIiwiVFJJQU5HTEVfU1RSSVAiLCJfZHJhd1BpY3R1cmVSR0IiLCJpc09iamVjdEZpbGxlZCIsIm1pbWVUeXBlIiwiaXNDb21wbGV0ZSIsImlzQmFzZUluZm9SZWFkeSIsImlzVmlkZW9SZWFkeSIsImlzQXVkaW9SZWFkeSIsIl9kZWZhdWx0IiwiZ2V0RGVmYXVsdEluZiIsImVudHJpZXMiLCJ2IiwiaXNSQVAiLCJfdHlwZSIsIl9sYXN0QXBwZW5kTG9jYXRpb24iLCJpc0VtcHR5IiwiX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlIiwiYmVnaW5EdHMiLCJsYXN0IiwibWlkIiwibGJvdW5kIiwidWJvdW5kIiwiaWR4IiwiX3NlYXJjaE5lYXJlc3RTZWdtZW50QWZ0ZXIiLCJzZWdtZW50IiwibGFzdEFwcGVuZElkeCIsImluc2VydElkeCIsIm9yaWdpblN0YXJ0RHRzIiwiZ2V0TGFzdFNlZ21lbnRCZWZvcmUiLCJnZXRMYXN0U2FtcGxlQmVmb3JlIiwiZ2V0TGFzdFJBUEJlZm9yZSIsInNlZ21lbnRJZHgiLCJyYW5kb21BY2Nlc3NQb2ludHMiLCJzdGFydER0cyIsImVuZER0cyIsInN0YXJ0UHRzIiwiZW5kUHRzIiwib3JpZ2luRW5kRHRzIiwiYWRkUkFQIiwiTVNFIiwiY29udGFpbmVyIiwibWVkaWFTb3VyY2UiLCJzb3VyY2VCdWZmZXJzIiwib25Tb3VyY2VPcGVuIiwib25UaW1lVXBkYXRlIiwib25VcGRhdGVFbmQiLCJvbldhaXRpbmciLCJNZWRpYVNvdXJjZSIsImFkZFNvdXJjZUJ1ZmZlcnMiLCJkb0FwcGVuZCIsInJlYWR5U3RhdGUiLCJhZGQiLCJkdXIiLCJtaW1lIiwic291cmNlQnVmZmVyIiwiYWRkU291cmNlQnVmZmVyIiwidXBkYXRpbmciLCJhcHBlbmRCdWZmZXIiLCJlbmRPZlN0cmVhbSIsImFjdGl2ZVNvdXJjZUJ1ZmZlcnMiLCJyZW1vdmVCdWZmZXJzIiwidGFza0xpc3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFzayIsIlByb21pc2UiLCJkb0NsZWFuQnVmZmVyIiwicmV0cnlUaW1lIiwiY2xlYW4iLCJjbGVhckJ1ZmZlciIsInJlbW92ZVNvdXJjZUJ1ZmZlciIsInJldm9rZU9iamVjdFVSTCIsImJ1ZmZlcmVkIiwiYkVuZCIsInJlYWRBc0ludCIsInRlbXAiLCJwYWRTdGFydDRIZXgiLCJoZXhOdW0iLCJoZXhTdHIiLCJwYWRTdGFydCIsImxvb3AiLCJzaWduIiwicmVhZFVpbnQ2NCIsInJlYWRJbnQxNiIsInJlYWRJbnQzMiIsIlRhZyIsIkxvZ2dlciIsIkZsdkNvbnRyb2xsZXIiLCJwbGF5ZXIiLCJfcGxheWVyIiwiaW5pdFNlZ21lbnRBcnJpdmVkIiwiaW5pdExpc3RlbmVycyIsIl9oYW5kbGVMb2FkZXJEYXRhTG9hZGVkIiwiX2hhbmRsZU5ldHdvcmtFcnJvciIsIl9oYW5kbGVNZWRpYUluZm8iLCJfaGFuZGxlTWV0YWRhdGFQYXJzZWQiLCJfaGFuZGxlRGVtdXhDb21wbGV0ZSIsIl9oYW5kbGVEZW11eEVycm9yIiwiX3NldE1ldGFUb0F1ZGlvIiwiX3NldE1ldGFUb1ZpZGVvIiwiX2hhbmRsZUFwcGVuZEluaXRTZWdtZW50IiwiUGxheWVyIiwiRXJyb3JzIiwibG9hZERhdGEiLCJsb2FkZXIiLCJyZXNvbHZlVmlkZW9HT1AiLCJmaXJzdElmcmFtZUlkeCIsImxhc3RJZnJhbWVJZHgiLCJ0ZW1wU2FtcGxlcyIsInJlc3QiLCJmbHZBbGxvd2VkRXZlbnRzIiwiRmx2UGxheWVyIiwiaW5pdEV2ZW50cyIsImluaXRGbHYiLCJmbHYiLCJpbml0Rmx2RXZlbnRzIiwidXRpbCIsImFkZENsYXNzIiwicm9vdCIsImZpbmREb20iLCJsaXZlIiwiY3JlYXRlRG9tIiwiY29udHJvbHMiLCJ0aW1lciIsImdldEJ1ZmZlcmVkUmFuZ2UiLCJyYW5nZSIsIkZMViIsIl9oYXNTdGFydCIsIl9kZXN0cm95IiwibXNlIiwiY3VycmVudFNyYyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgVHJhY2s6IHJlcXVpcmUoJy4vc3JjL3RyYWNrJykuZGVmYXVsdCxcbiAgVHJhY2tzOiByZXF1aXJlKCcuL3NyYy90cmFjaycpLlRyYWNrcyxcbiAgQXVkaW9UcmFjazogcmVxdWlyZSgnLi9zcmMvdHJhY2snKS5BdWRpb1RyYWNrLFxuICBWaWRlb1RyYWNrOiByZXF1aXJlKCcuL3NyYy90cmFjaycpLlZpZGVvVHJhY2ssXG5cbiAgWGdCdWZmZXI6IHJlcXVpcmUoJy4vc3JjL2J1ZmZlcicpLlhnQnVmZmVyLFxuICBSZW11eEJ1ZmZlcjogcmVxdWlyZSgnLi9zcmMvYnVmZmVyJykuUmVtdXhCdWZmZXIsXG5cbiAgUHJlU291cmNlOiByZXF1aXJlKCcuL3NyYy9wcmVzb3VjZScpLmRlZmF1bHRcbn07XG4iLCJleHBvcnQgY2xhc3MgWGdCdWZmZXIge1xuICAvKipcbiAgICogQSBidWZmZXIgdG8gc3RvcmUgbG9hZGVkIGRhdGEuXG4gICAqXG4gICAqIEBjbGFzcyBMb2FkZXJCdWZmZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIE9wdGlvbmFsIHRoZSBidWZmZXIgc2l6ZVxuICAgKi9cbiAgY29uc3RydWN0b3IgKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoIHx8IDBcbiAgICB0aGlzLmhpc3RvcnlMZW4gPSBsZW5ndGggfHwgMFxuICAgIHRoaXMuYXJyYXkgPSBbXVxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmdW5jdGlvbiB0byBwdXNoIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhIC0gVGhlIGRhdGEgdG8gcHVzaCBpbnRvIHRoZSBidWZmZXJcbiAgICovXG4gIHB1c2ggKGRhdGEpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZGF0YSlcbiAgICB0aGlzLmxlbmd0aCArPSBkYXRhLmJ5dGVMZW5ndGhcbiAgICB0aGlzLmhpc3RvcnlMZW4gKz0gZGF0YS5ieXRlTGVuZ3RoXG4gIH1cblxuICAvKipcbiAgICogVGhlIGZ1bmN0aW9uIHRvIHNoaWZ0IGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSBUaGUgc2l6ZSBvZiBzaGlmdC5cbiAgICovXG4gIHNoaWZ0IChsZW5ndGgpIHtcbiAgICBpZiAodGhpcy5hcnJheS5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoMClcbiAgICB9XG5cbiAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaGlmdEJ1ZmZlcigpXG4gICAgfVxuICAgIGlmICgodGhpcy5vZmZzZXQgKyBsZW5ndGgpID09PSB0aGlzLmFycmF5WzBdLmxlbmd0aCkge1xuICAgICAgbGV0IHJldCA9IHRoaXMuYXJyYXlbMF0uc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICsgbGVuZ3RoKVxuICAgICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgICB0aGlzLmFycmF5LnNoaWZ0KClcbiAgICAgIHRoaXMubGVuZ3RoIC09IGxlbmd0aFxuICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIGlmICgodGhpcy5vZmZzZXQgKyBsZW5ndGgpIDwgdGhpcy5hcnJheVswXS5sZW5ndGgpIHtcbiAgICAgIGxldCByZXQgPSB0aGlzLmFycmF5WzBdLnNsaWNlKHRoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArIGxlbmd0aClcbiAgICAgIHRoaXMub2Zmc2V0ICs9IGxlbmd0aFxuICAgICAgdGhpcy5sZW5ndGggLT0gbGVuZ3RoXG4gICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgbGV0IHJldCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICBsZXQgdG1wb2ZmID0gMFxuICAgIHdoaWxlICh0aGlzLmFycmF5Lmxlbmd0aCA+IDAgJiYgbGVuZ3RoID4gMCkge1xuICAgICAgaWYgKCh0aGlzLm9mZnNldCArIGxlbmd0aCkgPCB0aGlzLmFycmF5WzBdLmxlbmd0aCkge1xuICAgICAgICBsZXQgdG1wID0gdGhpcy5hcnJheVswXS5zbGljZSh0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKyBsZW5ndGgpXG4gICAgICAgIHJldC5zZXQodG1wLCB0bXBvZmYpXG4gICAgICAgIHRoaXMub2Zmc2V0ICs9IGxlbmd0aFxuICAgICAgICB0aGlzLmxlbmd0aCAtPSBsZW5ndGhcbiAgICAgICAgbGVuZ3RoID0gMFxuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRlbXBsZW5ndGggPSB0aGlzLmFycmF5WzBdLmxlbmd0aCAtIHRoaXMub2Zmc2V0XG4gICAgICAgIHJldC5zZXQodGhpcy5hcnJheVswXS5zbGljZSh0aGlzLm9mZnNldCwgdGhpcy5hcnJheVswXS5sZW5ndGgpLCB0bXBvZmYpXG4gICAgICAgIHRoaXMuYXJyYXkuc2hpZnQoKVxuICAgICAgICB0aGlzLm9mZnNldCA9IDBcbiAgICAgICAgdG1wb2ZmICs9IHRlbXBsZW5ndGhcbiAgICAgICAgdGhpcy5sZW5ndGggLT0gdGVtcGxlbmd0aFxuICAgICAgICBsZW5ndGggLT0gdGVtcGxlbmd0aFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gY2xlYXIgdGhlIGJ1ZmZlci5cbiAgICovXG4gIGNsZWFyICgpIHtcbiAgICB0aGlzLmFycmF5ID0gW11cbiAgICB0aGlzLmxlbmd0aCA9IDBcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2xlYXIoKVxuICAgIHRoaXMuaGlzdG9yeUxlbiA9IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBzaGlmdCBvbmUgdW5pdDhBcnJheS5cbiAgICovXG4gIF9zaGlmdEJ1ZmZlciAoKSB7XG4gICAgdGhpcy5sZW5ndGggLT0gdGhpcy5hcnJheVswXS5sZW5ndGhcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zaGlmdCgpXG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB1aW50OCBkYXRhIHRvIG51bWJlci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IC0gdGhlIHN0YXJ0IHBvc3Rpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSB0aGUgbGVuZ3RoIG9mIGRhdGEuXG4gICAqL1xuICB0b0ludCAoc3RhcnQsIGxlbmd0aCkge1xuICAgIGxldCByZXRJbnQgPSAwXG4gICAgbGV0IGkgPSB0aGlzLm9mZnNldCArIHN0YXJ0XG4gICAgd2hpbGUgKGkgPCB0aGlzLm9mZnNldCArIGxlbmd0aCArIHN0YXJ0KSB7XG4gICAgICBpZiAoaSA8IHRoaXMuYXJyYXlbMF0ubGVuZ3RoKSB7XG4gICAgICAgIHJldEludCA9IHJldEludCAqIDI1NiArIHRoaXMuYXJyYXlbMF1baV1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hcnJheVsxXSkge1xuICAgICAgICByZXRJbnQgPSByZXRJbnQgKiAyNTYgKyB0aGlzLmFycmF5WzFdW2kgLSB0aGlzLmFycmF5WzBdLmxlbmd0aF1cbiAgICAgIH1cblxuICAgICAgaSsrXG4gICAgfVxuICAgIHJldHVybiByZXRJbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtdXhCdWZmZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52aWRlbyA9IFtdXG4gICAgdGhpcy5hdWRpbyA9IFtdXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnZpZGVvID0gW11cbiAgICB0aGlzLmF1ZGlvID0gW11cbiAgfVxufVxuIiwiY2xhc3MgU291cmNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubWltZXR5cGUgPSAnJztcbiAgICB0aGlzLmluaXQgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICB9XG59XG5cbmNsYXNzIFByZVNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnNvdXJjZXMgPSB7fTtcbiAgfVxuXG4gIGdldFNvdXJjZSAoc291cmNlKSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlc1tzb3VyY2VdO1xuICB9XG5cbiAgY3JlYXRlU291cmNlIChuYW1lKSB7XG4gICAgdGhpcy5zb3VyY2VzW25hbWVdID0gbmV3IFNvdXJjZSgpO1xuICAgIHJldHVybiB0aGlzLnNvdXJjZXNbbmFtZV07XG4gIH1cblxuICBjbGVhciAoKSB7XG4gICAgdGhpcy5zb3VyY2VzID0ge307XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnNvdXJjZXMgPSB7fTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVTb3VyY2U7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayB7XG4gIC8qKlxuICAgKiBUaGUgY29uc3RydWN0b3IuXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5pZCA9IC0xXG4gICAgdGhpcy5zZXF1ZW5jZU51bWJlciA9IDBcbiAgICB0aGlzLnNhbXBsZXMgPSBbXVxuICAgIHRoaXMuZHJvcHBlZFNhbXBsZXMgPSBbXVxuICAgIHRoaXMubGVuZ3RoID0gMFxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSB0cmFjay5cbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLnNlcXVlbmNlTnVtYmVyID0gMFxuICAgIHRoaXMuc2FtcGxlcyA9IFtdXG4gICAgdGhpcy5sZW5ndGggPSAwXG4gIH1cbiAgLyoqXG4gICAqIGRlc3Ryb3kgdGhlIHRyYWNrLlxuICAgKi9cbiAgZGlzdHJveSAoKSB7XG4gICAgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5pZCA9IC0xXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1ZGlvVHJhY2sgZXh0ZW5kcyBUcmFjayB7XG4gIC8qKlxuICAgKiBUaGUgY29uc3RydWN0b3IgZm9yIGF1ZGlvIHRyYWNrLlxuICAgKi9cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLlRBRyA9ICdBdWRpb1RyYWNrJ1xuICAgIHRoaXMudHlwZSA9ICdhdWRpbydcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9UcmFjayBleHRlbmRzIFRyYWNrIHtcbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBmb3IgdmlkZW8gdHJhY2suXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuVEFHID0gJ1ZpZGVvVHJhY2snXG4gICAgdGhpcy50eXBlID0gJ3ZpZGVvJ1xuICAgIHRoaXMuZHJvcHBlZCA9IDBcbiAgfVxuICAvKipcbiAgICogcmVzZXQgdGhlIHZpZGVvIHRyYWNrLlxuICAgKi9cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuc2VxdWVuY2VOdW1iZXIgPSAwXG4gICAgdGhpcy5zYW1wbGVzID0gW11cbiAgICB0aGlzLmxlbmd0aCA9IDBcbiAgICB0aGlzLmRyb3BwZWQgPSAwXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNrcyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmF1ZGlvVHJhY2sgPSBudWxsXG4gICAgdGhpcy52aWRlb1RyYWNrID0gbnVsbFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5hdWRpb1RyYWNrID0gbnVsbFxuICAgIHRoaXMudmlkZW9UcmFjayA9IG51bGxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIE5hbHVuaXQ6IHJlcXVpcmUoJy4vc3JjL2gyNjQvbmFsdW5pdCcpLmRlZmF1bHQsXG4gIFNwc1BhcnNlcjogcmVxdWlyZSgnLi9zcmMvaDI2NC9uYWx1bml0L3NwcycpLmRlZmF1bHQsXG5cbiAgQ29tcGF0aWJpbGl0eTogcmVxdWlyZSgnLi9zcmMvY29tcGF0aWJpbGl0eScpLmRlZmF1bHRcbn07XG4iLCJcbmNsYXNzIEFBQyB7XG5cbiAgc3RhdGljIGdldFNpbGVudEZyYW1lKGNvZGVjLCBjaGFubmVsQ291bnQpIHtcbiAgICBpZiAoY29kZWMgPT09ICdtcDRhLjQwLjInKSB7XG4gICAgICAvLyBoYW5kbGUgTEMtQUFDXG4gICAgICBpZiAoY2hhbm5lbENvdW50ID09PSAxKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMywgMHg4MF0pO1xuICAgICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDIxLCAweDAwLCAweDQ5LCAweDkwLCAweDAyLCAweDE5LCAweDAwLCAweDIzLCAweDgwXSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gMykge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4OGVdKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA0KSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MCwgMHgyYywgMHg4MCwgMHgwOCwgMHgwMiwgMHgzOF0pO1xuICAgICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDAwLCAweGM4LCAweDAwLCAweDgwLCAweDIwLCAweDg0LCAweDAxLCAweDI2LCAweDQwLCAweDA4LCAweDY0LCAweDAwLCAweDgyLCAweDMwLCAweDA0LCAweDk5LCAweDAwLCAweDIxLCAweDkwLCAweDAyLCAweDM4XSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gNikge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODIsIDB4MzAsIDB4MDQsIDB4OTksIDB4MDAsIDB4MjEsIDB4OTAsIDB4MDIsIDB4MDAsIDB4YjIsIDB4MDAsIDB4MjAsIDB4MDgsIDB4ZTBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFuZGxlIEhFLUFBQyAobXA0YS40MC41IC8gbXA0YS40MC4yOSlcbiAgICAgIGlmIChjaGFubmVsQ291bnQgPT09IDEpIHtcbiAgICAgICAgLy8gZmZtcGVnIC15IC1mIGxhdmZpIC1pIFwiYWV2YWxzcmM9MDpkPTAuMDVcIiAtYzphIGxpYmZka19hYWMgLXByb2ZpbGU6YSBhYWNfaGUgLWI6YSA0ayBvdXRwdXQuYWFjICYmIGhleGR1bXAgLXYgLWUgJzE2LzEgXCIweCV4LFwiIFwiXFxuXCInIC12IG91dHB1dC5hYWNcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDEsIDB4NDAsIDB4MjIsIDB4ODAsIDB4YTMsIDB4NGUsIDB4ZTYsIDB4ODAsIDB4YmEsIDB4OCwgMHgwLCAweDAsIDB4MCwgMHgxYywgMHg2LCAweGYxLCAweGMxLCAweGEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWVdKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAyKSB7XG4gICAgICAgIC8vIGZmbXBlZyAteSAtZiBsYXZmaSAtaSBcImFldmFsc3JjPTB8MDpkPTAuMDVcIiAtYzphIGxpYmZka19hYWMgLXByb2ZpbGU6YSBhYWNfaGVfdjIgLWI6YSA0ayBvdXRwdXQuYWFjICYmIGhleGR1bXAgLXYgLWUgJzE2LzEgXCIweCV4LFwiIFwiXFxuXCInIC12IG91dHB1dC5hYWNcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDEsIDB4NDAsIDB4MjIsIDB4ODAsIDB4YTMsIDB4NWUsIDB4ZTYsIDB4ODAsIDB4YmEsIDB4OCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDk1LCAweDAsIDB4NiwgMHhmMSwgMHhhMSwgMHhhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVlXSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gMykge1xuICAgICAgICAvLyBmZm1wZWcgLXkgLWYgbGF2ZmkgLWkgXCJhZXZhbHNyYz0wfDB8MDpkPTAuMDVcIiAtYzphIGxpYmZka19hYWMgLXByb2ZpbGU6YSBhYWNfaGVfdjIgLWI6YSA0ayBvdXRwdXQuYWFjICYmIGhleGR1bXAgLXYgLWUgJzE2LzEgXCIweCV4LFwiIFwiXFxuXCInIC12IG91dHB1dC5hYWNcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDEsIDB4NDAsIDB4MjIsIDB4ODAsIDB4YTMsIDB4NWUsIDB4ZTYsIDB4ODAsIDB4YmEsIDB4OCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDk1LCAweDAsIDB4NiwgMHhmMSwgMHhhMSwgMHhhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVlXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQUFDO1xuIiwiaW1wb3J0IHtFVkVOVFN9IGZyb20gJ3hncGxheWVyLXV0aWxzJ1xuaW1wb3J0IEFBQyBmcm9tICcuL2FhYy9hYWMtaGVscGVyJ1xuXG5jb25zdCB7UkVNVVhfRVZFTlRTLCBERU1VWF9FVkVOVFN9ID0gRVZFTlRTXG5cbmNsYXNzIENvbXBhdGliaWxpdHkge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5uZXh0QXVkaW9EdHMgPSAwIC8vIOaooeaLn+S4i+S4gOautemfs+mikeaVsOaNrueahGR0c1xuICAgIHRoaXMubmV4dFZpZGVvRHRzID0gMCAvLyDmqKHmi5/kuIvkuIDmrrXop4bpopHmlbDmja7nmoRkdHNcblxuICAgIHRoaXMubGFzdEF1ZGlvU2FtcGxlc0xlbiA9IDAgLy8g5LiK5LiA5q616Z+z6aKR5pWw5o2u55qE6ZW/5bqmXG4gICAgdGhpcy5sYXN0VmlkZW9TYW1wbGVzTGVuID0gMCAvLyDkuIrkuIDmrrXop4bpopHmlbDmja7nmoTplb/luqZcblxuICAgIHRoaXMubGFzdFZpZGVvRHRzID0gdW5kZWZpbmVkIC8vIOS4iuS4gOautemfs+mikeaVsOaNrueahOmVv+W6plxuICAgIHRoaXMubGFzdEF1ZGlvRHRzID0gdW5kZWZpbmVkIC8vIOS4iuS4gOauteinhumikeaVsOaNrueahOmVv+W6plxuXG4gICAgdGhpcy5hbGxBdWRpb1NhbXBsZXNDb3VudCA9IDAgLy8g6Z+z6aKR5oC75pWw5o2u6YePKOWOn+Wni+W4pylcbiAgICB0aGlzLmFsbFZpZGVvU2FtcGxlc0NvdW50ID0gMCAvLyDop4bpopHmgLvmlbDmja7ph48o5Y6f5aeL5binKVxuXG4gICAgdGhpcy5fZmlyc3RBdWRpb1NhbXBsZSA9IG51bGxcbiAgICB0aGlzLl9maXJzdFZpZGVvU2FtcGxlID0gbnVsbFxuXG4gICAgdGhpcy5maWxsZWRBdWRpb1NhbXBsZXMgPSBbXSAvLyDooaXlhYXpn7PpopHluKfvvIjvvIlcbiAgICB0aGlzLmZpbGxlZFZpZGVvU2FtcGxlcyA9IFtdIC8vIOihpeWFheinhumikeW4p++8iO+8iVxuXG4gICAgdGhpcy5fdmlkZW9MYXJnZUdhcCA9IDBcbiAgICB0aGlzLl9hdWRpb0xhcmdlR2FwID0gMFxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5iZWZvcmUoUkVNVVhfRVZFTlRTLlJFTVVYX01FRElBLCB0aGlzLmRvRml4LmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5uZXh0QXVkaW9EdHMgPSBudWxsIC8vIOS8sOeul+S4i+S4gOautemfs+mikeaVsOaNrueahGR0c1xuICAgIHRoaXMubmV4dFZpZGVvRHRzID0gbnVsbCAvLyDkvLDnrpfkuIvkuIDmrrXop4bpopHmlbDmja7nmoRkdHNcblxuICAgIHRoaXMubGFzdEF1ZGlvU2FtcGxlc0xlbiA9IDAgLy8g5LiK5LiA5q616Z+z6aKR5pWw5o2u55qE6ZW/5bqmXG4gICAgdGhpcy5sYXN0VmlkZW9TYW1wbGVzTGVuID0gMCAvLyDkuIrkuIDmrrXop4bpopHmlbDmja7nmoTplb/luqZcblxuICAgIHRoaXMubGFzdFZpZGVvRHRzID0gdW5kZWZpbmVkIC8vIOS4iuS4gOautemfs+mikeaVsOaNrueahOmVv+W6plxuICAgIHRoaXMubGFzdEF1ZGlvRHRzID0gdW5kZWZpbmVkIC8vIOS4iuS4gOauteinhumikeaVsOaNrueahOmVv+W6plxuXG4gICAgLy8gdGhpcy5hbGxBdWRpb1NhbXBsZXNDb3VudCA9IDAgLy8g6Z+z6aKR5oC75pWw5o2u6YePKOWOn+Wni+W4pylcbiAgICAvLyB0aGlzLmFsbFZpZGVvU2FtcGxlc0NvdW50ID0gMCAvLyDop4bpopHmgLvmlbDmja7ph48o5Y6f5aeL5binKVxuXG4gICAgLy8gdGhpcy5fZmlyc3RBdWRpb1NhbXBsZSA9IG51bGxcbiAgICAvLyB0aGlzLl9maXJzdFZpZGVvU2FtcGxlID0gbnVsbFxuXG4gICAgdGhpcy5maWxsZWRBdWRpb1NhbXBsZXMgPSBbXSAvLyDooaXlhYXpn7PpopHluKfvvIjvvIlcbiAgICB0aGlzLmZpbGxlZFZpZGVvU2FtcGxlcyA9IFtdIC8vIOihpeWFheinhumikeW4p++8iO+8iVxuICB9XG5cbiAgZG9GaXggKCkge1xuICAgIGNvbnN0IHsgaXNGaXJzdEF1ZGlvU2FtcGxlcywgaXNGaXJzdFZpZGVvU2FtcGxlcyB9ID0gdGhpcy5nZXRGaXJzdFNhbXBsZSgpXG5cbiAgICAvLyB0aGlzLnJlbW92ZUludmFsaWRTYW1wbGVzKClcblxuICAgIHRoaXMucmVjb3JkU2FtcGxlc0NvdW50KClcblxuICAgIGlmICh0aGlzLl9maXJzdFZpZGVvU2FtcGxlKSB7XG4gICAgICB0aGlzLmZpeFJlZlNhbXBsZUR1cmF0aW9uKHRoaXMudmlkZW9UcmFjay5tZXRhLCB0aGlzLnZpZGVvVHJhY2suc2FtcGxlcylcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUpIHtcbiAgICAgIHRoaXMuZml4UmVmU2FtcGxlRHVyYXRpb24odGhpcy5hdWRpb1RyYWNrLm1ldGEsIHRoaXMuYXVkaW9UcmFjay5zYW1wbGVzKVxuICAgIH1cblxuICAgIGNvbnN0IHsgY2hhbmdlZDogdmlkZW9DaGFuZ2VkLCBjaGFuZ2VkSWR4OiB2aWRlb0NoYW5nZWRJZHggfSA9IENvbXBhdGliaWxpdHkuZGV0YWN0Q2hhbmdlU3RyZWFtKHRoaXMudmlkZW9UcmFjay5zYW1wbGVzKVxuICAgIGlmICh2aWRlb0NoYW5nZWQgJiYgIWlzRmlyc3RBdWRpb1NhbXBsZXMpIHtcbiAgICAgIHRoaXMuZml4Q2hhbmdlU3RyZWFtVmlkZW8odmlkZW9DaGFuZ2VkSWR4KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvRml4VmlkZW8oaXNGaXJzdFZpZGVvU2FtcGxlcylcbiAgICB9XG5cbiAgICBjb25zdCB7IGNoYW5nZWQ6IGF1ZGlvQ2hhbmdlZCwgY2hhbmdlZElkeDogYXVkaW9DaGFuZ2VkSWR4IH0gPSBDb21wYXRpYmlsaXR5LmRldGFjdENoYW5nZVN0cmVhbSh0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcylcbiAgICBpZiAoYXVkaW9DaGFuZ2VkKSB7XG4gICAgICB0aGlzLmZpeENoYW5nZVN0cmVhbUF1ZGlvKGF1ZGlvQ2hhbmdlZElkeClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb0ZpeEF1ZGlvKGlzRmlyc3RBdWRpb1NhbXBsZXMpXG4gICAgfVxuXG4gICAgLy8gdGhpcy5yZW1vdmVJbnZhbGlkU2FtcGxlcygpXG4gIH1cblxuICBkb0ZpeFZpZGVvIChmaXJzdCwgc3RyZWFtQ2hhbmdlU3RhcnQpIHtcbiAgICBsZXQge3NhbXBsZXM6IHZpZGVvU2FtcGxlcywgbWV0YX0gPSB0aGlzLnZpZGVvVHJhY2tcblxuICAgIGlmIChtZXRhLmZyYW1lUmF0ZSAmJiBtZXRhLmZyYW1lUmF0ZS5maXhlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXZpZGVvU2FtcGxlcyB8fCAhdmlkZW9TYW1wbGVzLmxlbmd0aCB8fCAhdGhpcy5fZmlyc3RWaWRlb1NhbXBsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coYHZpZGVvIGxhc3RTYW1wbGUsICR7dmlkZW9TYW1wbGVzW3ZpZGVvU2FtcGxlcy5sZW5ndGggLSAxXS5kdHN9YClcblxuICAgIGNvbnN0IGZpcnN0U2FtcGxlID0gdmlkZW9TYW1wbGVzWzBdXG5cbiAgICBjb25zdCBzYW1wbGVzTGVuID0gdmlkZW9TYW1wbGVzLmxlbmd0aDtcblxuICAgIC8vIHN0ZXAwLuS/ruWkjWhsc+a1geWHuueOsOW3qOWkp2dhcO+8jOmcgOimgeW8uuWItumHjeWumuS9jeeahOmXrumimFxuICAgIGlmICh0aGlzLl92aWRlb0xhcmdlR2FwID4gMCkge1xuICAgICAgQ29tcGF0aWJpbGl0eS5kb0ZpeExhcmdlR2FwKHZpZGVvU2FtcGxlcywgdGhpcy5fdmlkZW9MYXJnZUdhcClcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RTYW1wbGUuZHRzICE9PSB0aGlzLl9maXJzdFZpZGVvU2FtcGxlLmR0cyAmJiAoc3RyZWFtQ2hhbmdlU3RhcnQgfHwgQ29tcGF0aWJpbGl0eS5kZXRlY3RMYXJnZUdhcCh0aGlzLm5leHRWaWRlb0R0cywgZmlyc3RTYW1wbGUpKSkge1xuICAgICAgaWYgKHN0cmVhbUNoYW5nZVN0YXJ0KSB7XG4gICAgICAgIHRoaXMubmV4dFZpZGVvRHRzID0gc3RyZWFtQ2hhbmdlU3RhcnQgLy8gRklYOiBIbHPkuK3pgJTliIdjb2RlY++8jOWcqOWmguaenOebtOaOpXNlZWvliLDlkI7pnaLnmoTngrnkvJrlr7zoh7RsYXJnZUdhcOiuoeeul+Wksei0pVxuICAgICAgfVxuXG4gICAgICB0aGlzLl92aWRlb0xhcmdlR2FwID0gdGhpcy5uZXh0VmlkZW9EdHMgLSBmaXJzdFNhbXBsZS5kdHNcbiAgICAgIENvbXBhdGliaWxpdHkuZG9GaXhMYXJnZUdhcCh2aWRlb1NhbXBsZXMsIHRoaXMuX3ZpZGVvTGFyZ2VHYXApXG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3REdHMgPSBmaXJzdFNhbXBsZS5kdHNcblxuICAgIC8vIHN0ZXAxLiDkv67lpI3kuI5hdWRpb+mmluW4p+W3rui3neWkquWkp+eahOmXrumimFxuICAgIGlmIChmaXJzdCAmJiB0aGlzLl9maXJzdEF1ZGlvU2FtcGxlKSB7XG4gICAgICBjb25zdCB2aWRlb0ZpcnN0RHRzID0gdGhpcy5fZmlyc3RWaWRlb1NhbXBsZS5kdHNcbiAgICAgIGNvbnN0IGF1ZGlvRmlyc3REdHMgPSB0aGlzLl9maXJzdEF1ZGlvU2FtcGxlLmR0c1xuICAgICAgY29uc3QgZ2FwID0gdmlkZW9GaXJzdER0cyAtIGF1ZGlvRmlyc3REdHNcbiAgICAgIGlmIChnYXAgPiAoMiAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pKSB7XG4gICAgICAgIGNvbnN0IGZpbGxDb3VudCA9IE1hdGguZmxvb3IoZ2FwIC8gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbilcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY2xvbmVkRmlyc3RTYW1wbGUgPSBPYmplY3QuYXNzaWduKHt9LCBmaXJzdFNhbXBsZSkgLy8g6KeG6aKR5aS06YOo5bin57y65aSx6ZyA6KaB5aSN5Yi256ys5LiA5binXG4gICAgICAgICAgLy8g6YeN5paw6K6h566Xc2FtcGxl55qEZHRz5ZKMcHRzXG4gICAgICAgICAgY2xvbmVkRmlyc3RTYW1wbGUuZHRzID0gdmlkZW9GaXJzdER0cyAtIChpICsgMSkgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICAgICAgY2xvbmVkRmlyc3RTYW1wbGUucHRzID0gY2xvbmVkRmlyc3RTYW1wbGUuZHRzICsgY2xvbmVkRmlyc3RTYW1wbGUuY3RzXG5cbiAgICAgICAgICB2aWRlb1NhbXBsZXMudW5zaGlmdChjbG9uZWRGaXJzdFNhbXBsZSlcblxuICAgICAgICAgIHRoaXMuZmlsbGVkVmlkZW9TYW1wbGVzLnB1c2goe1xuICAgICAgICAgICAgZHRzOiBjbG9uZWRGaXJzdFNhbXBsZS5kdHMsXG4gICAgICAgICAgICBzaXplOiBjbG9uZWRGaXJzdFNhbXBsZS5kYXRhLmJ5dGVMZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGdhcFxuICAgIC8vIHN0ZXAyLiDkv67lpI1zYW1wbGVz5q615LmL6Ze055qE6Ze06Led6Zeu6aKY44CBXG4gICAgaWYgKHRoaXMubmV4dFZpZGVvRHRzKSB7XG4gICAgICAvLyBzdGVwMS4g5aSE55CGc2FtcGxlc+auteS5i+mXtOeahOS4ouW4p+aDheWGtVxuICAgICAgLy8g5b2T5Y+R546wZHVyYXRpb27lt67ot53lpKfkuo4y5bin5pe26L+b6KGM6KGl5binXG4gICAgICBnYXAgPSBmaXJzdER0cyAtIHRoaXMubmV4dFZpZGVvRHRzXG4gICAgICBjb25zdCBhYnNHYXAgPSBNYXRoLmFicyhnYXApXG4gICAgICBpZiAoZ2FwID4gKDIgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKSkge1xuICAgICAgICBjb25zdCBmaWxsRnJhbWVDb3VudCA9IE1hdGguZmxvb3IoZ2FwIC8gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbilcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGxGcmFtZUNvdW50OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjbG9uZWRTYW1wbGUgPSBPYmplY3QuYXNzaWduKHt9LCB2aWRlb1NhbXBsZXNbMF0pXG4gICAgICAgICAgY29uc3QgY29tcHV0ZWQgPSBmaXJzdER0cyAtIChpICsgMSkgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG5cbiAgICAgICAgICBjbG9uZWRTYW1wbGUuZHRzID0gY29tcHV0ZWQgPiB0aGlzLm5leHRWaWRlb0R0cyA/IGNvbXB1dGVkIDogdGhpcy5uZXh0VmlkZW9EdHMgLy8g6KGl55qE56ys5LiA5bin5LiA5a6a6KaB5pivbmV4dFZpZGVvRHRzXG4gICAgICAgICAgY2xvbmVkU2FtcGxlLnB0cyA9IGNsb25lZFNhbXBsZS5kdHMgKyBjbG9uZWRTYW1wbGUuY3RzXG5cbiAgICAgICAgICB0aGlzLnZpZGVvVHJhY2suc2FtcGxlcy51bnNoaWZ0KGNsb25lZFNhbXBsZSlcblxuICAgICAgICAgIHRoaXMuZmlsbGVkVmlkZW9TYW1wbGVzLnB1c2goe1xuICAgICAgICAgICAgZHRzOiBjbG9uZWRTYW1wbGUuZHRzLFxuICAgICAgICAgICAgc2l6ZTogY2xvbmVkU2FtcGxlLmRhdGEuYnl0ZUxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYWJzR2FwIDw9IG1ldGEucmVmU2FtcGxlRHVyYXRpb24gJiYgYWJzR2FwID4gMCkge1xuICAgICAgICAvLyDlvZPlt67ot53lnKgrLeS4gOW4p+S5i+mXtOaXtuWwhuesrOS4gOW4p+eahGR0c+W8uuihjOWumuS9jeWIsOacn+acm+S9jee9rlxuICAgICAgICAvLyBjb25zb2xlLmxvZygn6YeN5a6a5L2N6KeG6aKR5binZHRzJywgdmlkZW9TYW1wbGVzWzBdLmR0cywgdGhpcy5uZXh0VmlkZW9EdHMpXG4gICAgICAgIHZpZGVvU2FtcGxlc1swXS5kdHMgPSB0aGlzLm5leHRWaWRlb0R0c1xuICAgICAgICB2aWRlb1NhbXBsZXNbMF0ub3JpZ2luRHRzID0gdmlkZW9TYW1wbGVzWzBdLmR0c1xuICAgICAgICB2aWRlb1NhbXBsZXNbMF0uY3RzID0gdmlkZW9TYW1wbGVzWzBdLmN0cyAhPT0gdW5kZWZpbmVkID8gdmlkZW9TYW1wbGVzWzBdLmN0cyA6IHZpZGVvU2FtcGxlc1swXS5wdHMgLSB2aWRlb1NhbXBsZXNbMF0uZHRzXG4gICAgICAgIHZpZGVvU2FtcGxlc1swXS5wdHMgPSB2aWRlb1NhbXBsZXNbMF0uZHRzICsgdmlkZW9TYW1wbGVzWzBdLmN0c1xuICAgICAgfSBlbHNlIGlmIChnYXAgPCAwKSB7XG4gICAgICAgIC8vIOWHuueOsOWkp+eahGdhcFxuICAgICAgICBDb21wYXRpYmlsaXR5LmRvRml4TGFyZ2VHYXAodmlkZW9TYW1wbGVzLCAoLTEgKiBnYXApKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBsYXN0RHRzID0gdmlkZW9TYW1wbGVzW3ZpZGVvU2FtcGxlcy5sZW5ndGggLSAxXS5kdHM7XG5cbiAgICBjb25zdCBsYXN0U2FtcGxlRHVyYXRpb24gPSB2aWRlb1NhbXBsZXMubGVuZ3RoID49IDIgPyBsYXN0RHRzIC0gdmlkZW9TYW1wbGVzW3ZpZGVvU2FtcGxlcy5sZW5ndGggLSAyXS5kdHMgOiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG5cbiAgICB0aGlzLmxhc3RWaWRlb1NhbXBsZXNMZW4gPSBzYW1wbGVzTGVuXG4gICAgdGhpcy5uZXh0VmlkZW9EdHMgPSBsYXN0RHRzICsgbGFzdFNhbXBsZUR1cmF0aW9uXG4gICAgdGhpcy5sYXN0VmlkZW9EdHMgPSBsYXN0RHRzXG5cbiAgICAvLyBzdGVwMi4g5L+u5aSNc2FtcGxl5q615LmL5YaF55qE6Ze06Led6Zeu6aKYXG4gICAgLy8gc3RlcDMuIOS/ruWkjXNhbXBsZXPmrrXlhoXpg6jnmoRkdHPlvILluLjpl67pophcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmlkZW9TYW1wbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gdmlkZW9TYW1wbGVzW2ldXG4gICAgICBjb25zdCBuZXh0ID0gdmlkZW9TYW1wbGVzW2kgKyAxXVxuXG4gICAgICBpZiAoIW5leHQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gbmV4dC5kdHMgLSBjdXJyZW50LmR0cztcblxuICAgICAgaWYgKGR1cmF0aW9uID4gKDIgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKSkge1xuICAgICAgICAvLyDkuKTluKfkuYvpl7Tpl7TpmpTlpKrlpKfvvIzpnIDopoHooaXnqbrnmb3luKdcbiAgICAgICAgbGV0IGZpbGxGcmFtZUNvdW50ID0gTWF0aC5mbG9vcihkdXJhdGlvbiAvIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pXG5cbiAgICAgICAgbGV0IGZpbGxGcmFtZUlkeCA9IDBcbiAgICAgICAgd2hpbGUgKGZpbGxGcmFtZUlkeCA8IGZpbGxGcmFtZUNvdW50KSB7XG4gICAgICAgICAgY29uc3QgZmlsbEZyYW1lID0gT2JqZWN0LmFzc2lnbih7fSwgbmV4dClcbiAgICAgICAgICBmaWxsRnJhbWUuZHRzID0gY3VycmVudC5kdHMgKyAoZmlsbEZyYW1lSWR4ICsgMSkgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICAgICAgZmlsbEZyYW1lLnB0cyA9IGZpbGxGcmFtZS5kdHMgKyBmaWxsRnJhbWUuY3RzXG4gICAgICAgICAgaWYgKGZpbGxGcmFtZSA8IG5leHQuZHRzKSB7XG4gICAgICAgICAgICB2aWRlb1NhbXBsZXMuc3BsaWNlKGksIDAsIGZpbGxGcmFtZSlcblxuICAgICAgICAgICAgdGhpcy5maWxsZWRWaWRlb1NhbXBsZXMucHVzaCh7XG4gICAgICAgICAgICAgIGR0czogZmlsbEZyYW1lLmR0cyxcbiAgICAgICAgICAgICAgc2l6ZTogZmlsbEZyYW1lLmRhdGEuYnl0ZUxlbmd0aFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWxsRnJhbWVJZHgrK1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudmlkZW9UcmFjay5zYW1wbGVzID0gdmlkZW9TYW1wbGVzO1xuICB9XG5cbiAgZG9GaXhBdWRpbyAoZmlyc3QsIHN0cmVhbUNoYW5nZVN0YXJ0KSB7XG4gICAgbGV0IHtzYW1wbGVzOiBhdWRpb1NhbXBsZXMsIG1ldGF9ID0gdGhpcy5hdWRpb1RyYWNrXG5cbiAgICBpZiAoIWF1ZGlvU2FtcGxlcyB8fCAhYXVkaW9TYW1wbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKGBhdWRpbyBsYXN0U2FtcGxlLCAke2F1ZGlvU2FtcGxlc1thdWRpb1NhbXBsZXMubGVuZ3RoIC0gMV0uZHRzfWApXG5cbiAgICBjb25zdCBzYW1wbGVzTGVuID0gYXVkaW9TYW1wbGVzLmxlbmd0aDtcbiAgICBjb25zdCBzaWxlbnRGcmFtZSA9IEFBQy5nZXRTaWxlbnRGcmFtZShtZXRhLmNvZGVjLCBtZXRhLmNoYW5uZWxDb3VudClcblxuICAgIGNvbnN0IGZpcnN0U2FtcGxlID0gdGhpcy5fZmlyc3RBdWRpb1NhbXBsZVxuXG4gICAgY29uc3QgX2ZpcnN0U2FtcGxlID0gYXVkaW9TYW1wbGVzWzBdXG4gICAgLy8g5a+5YXVkaW9TYW1wbGVz5oyJ54WnZHRz5YGa5o6S5bqPXG4gICAgLy8gYXVkaW9TYW1wbGVzID0gQ29tcGF0aWJpbGl0eS5zb3J0QXVkaW9TYW1wbGVzKGF1ZGlvU2FtcGxlcylcbiAgICBpZiAodGhpcy5fYXVkaW9MYXJnZUdhcCA+IDApIHtcbiAgICAgIENvbXBhdGliaWxpdHkuZG9GaXhMYXJnZUdhcChhdWRpb1NhbXBsZXMsIHRoaXMuX2F1ZGlvTGFyZ2VHYXApXG4gICAgfVxuXG4gICAgaWYgKF9maXJzdFNhbXBsZS5kdHMgIT09IHRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUuZHRzICYmIChzdHJlYW1DaGFuZ2VTdGFydCB8fCBDb21wYXRpYmlsaXR5LmRldGVjdExhcmdlR2FwKHRoaXMubmV4dEF1ZGlvRHRzLCBfZmlyc3RTYW1wbGUpKSkge1xuICAgICAgaWYgKHN0cmVhbUNoYW5nZVN0YXJ0KSB7XG4gICAgICAgIHRoaXMubmV4dEF1ZGlvRHRzID0gc3RyZWFtQ2hhbmdlU3RhcnQgLy8gRklYOiBIbHPkuK3pgJTliIdjb2RlY++8jOWcqOWmguaenOebtOaOpXNlZWvliLDlkI7pnaLnmoTngrnkvJrlr7zoh7RsYXJnZUdhcOiuoeeul+Wksei0pVxuICAgICAgfVxuICAgICAgdGhpcy5fYXVkaW9MYXJnZUdhcCA9IHRoaXMubmV4dEF1ZGlvRHRzIC0gX2ZpcnN0U2FtcGxlLmR0c1xuICAgICAgQ29tcGF0aWJpbGl0eS5kb0ZpeExhcmdlR2FwKGF1ZGlvU2FtcGxlcywgdGhpcy5fYXVkaW9MYXJnZUdhcClcbiAgICB9XG4gICAgLy8gc3RlcDAuIOmmluW4p+S4jnZpZGVv6aaW5bin6Ze06Led5aSn55qE6Zeu6aKYXG4gICAgaWYgKHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUgJiYgZmlyc3QpIHtcbiAgICAgIGNvbnN0IHZpZGVvRmlyc3RQdHMgPSB0aGlzLl9maXJzdFZpZGVvU2FtcGxlLnB0cyA/IHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUucHRzIDogdGhpcy5fZmlyc3RWaWRlb1NhbXBsZS5kdHMgKyB0aGlzLl9maXJzdFZpZGVvU2FtcGxlLmN0c1xuXG4gICAgICBpZiAoZmlyc3RTYW1wbGUuZHRzIC0gdmlkZW9GaXJzdFB0cyA+IG1ldGEucmVmU2FtcGxlRHVyYXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2lsZW50U2FtcGxlQ291bnQgPSBNYXRoLmZsb29yKChmaXJzdFNhbXBsZS5kdHMgLSB2aWRlb0ZpcnN0UHRzKSAvIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWxlbnRTYW1wbGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgc2lsZW50U2FtcGxlID0ge1xuICAgICAgICAgICAgZGF0YTogc2lsZW50RnJhbWUsXG4gICAgICAgICAgICBkYXRhc2l6ZTogc2lsZW50RnJhbWUuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIGR0czogZmlyc3RTYW1wbGUuZHRzIC0gKGkgKyAxKSAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJlZDogMFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGF1ZGlvU2FtcGxlcy51bnNoaWZ0KHNpbGVudFNhbXBsZSlcblxuICAgICAgICAgIHRoaXMuZmlsbGVkQXVkaW9TYW1wbGVzLnB1c2goe1xuICAgICAgICAgICAgZHRzOiBzaWxlbnRTYW1wbGUuZHRzLFxuICAgICAgICAgICAgc2l6ZTogc2lsZW50U2FtcGxlLmRhdGEuYnl0ZUxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZ2FwXG4gICAgY29uc3QgZmlyc3REdHMgPSBhdWRpb1NhbXBsZXNbMF0uZHRzXG5cbiAgICBpZiAodGhpcy5uZXh0QXVkaW9EdHMpIHtcbiAgICAgIC8vIHN0ZXAxLiDlpITnkIZzYW1wbGVz5q615LmL6Ze055qE5Lii5bin5oOF5Ya1XG4gICAgICAvLyDlvZPlj5HnjrBkdXJhdGlvbuW3rui3neWkp+S6jjHluKfml7bov5vooYzooaXluKdcbiAgICAgIGdhcCA9IGZpcnN0RHRzIC0gdGhpcy5uZXh0QXVkaW9EdHNcbiAgICAgIGNvbnN0IGFic0dhcCA9IE1hdGguYWJzKGdhcClcblxuICAgICAgaWYgKGFic0dhcCA+IG1ldGEucmVmU2FtcGxlRHVyYXRpb24gJiYgc2FtcGxlc0xlbiA9PT0gMSAmJiB0aGlzLmxhc3RBdWRpb1NhbXBsZXNMZW4gPT09IDEpIHtcbiAgICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbkZpeGVkID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChnYXAgPiAoMiAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pKSB7XG4gICAgICAgIGlmIChzYW1wbGVzTGVuID09PSAxICYmIHRoaXMubGFzdEF1ZGlvU2FtcGxlc0xlbiA9PT0gMSkge1xuICAgICAgICAgIC8vIOWmguaenHNhbXBsZeeahGxlbmd0aOS4gOebtOaYrzHvvIzogIzkuJTkuIDnm7TkuI3nrKblkIhyZWZTYW1wbGVEdXJhdGlvbu+8jOmcgOimgeWKqOaAgeS/ruaUuXJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbkZpeGVkID0gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbkZpeGVkICE9PSB1bmRlZmluZWQgPyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWQgKyBnYXAgOiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uICsgZ2FwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc2lsZW50RnJhbWVDb3VudCA9IE1hdGguZmxvb3IoZ2FwIC8gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbilcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lsZW50RnJhbWVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZCA9IGZpcnN0RHRzIC0gKGkgKyAxKSAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHNpbGVudFNhbXBsZSA9IE9iamVjdC5hc3NpZ24oe30sIGF1ZGlvU2FtcGxlc1swXSwge1xuICAgICAgICAgICAgICBkdHM6IGNvbXB1dGVkID4gdGhpcy5uZXh0QXVkaW9EdHMgPyBjb21wdXRlZCA6IHRoaXMubmV4dEF1ZGlvRHRzXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmZpbGxlZEF1ZGlvU2FtcGxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgZHRzOiBzaWxlbnRTYW1wbGUuZHRzLFxuICAgICAgICAgICAgICBzaXplOiBzaWxlbnRTYW1wbGUuZGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5hdWRpb1RyYWNrLnNhbXBsZXMudW5zaGlmdChzaWxlbnRTYW1wbGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFic0dhcCA8PSBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uICYmIGFic0dhcCA+IDApIHtcbiAgICAgICAgLy8g5b2T5beu6Led5q+U6L6D5bCP55qE5pe25YCZ5bCG6Z+z6aKR5bin6YeN5a6a5L2NXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfph43lrprkvY3pn7PpopHluKdkdHMnLCBhdWRpb1NhbXBsZXNbMF0uZHRzLCB0aGlzLm5leHRBdWRpb0R0cylcbiAgICAgICAgYXVkaW9TYW1wbGVzWzBdLmR0cyA9IHRoaXMubmV4dEF1ZGlvRHRzXG4gICAgICAgIGF1ZGlvU2FtcGxlc1swXS5wdHMgPSB0aGlzLm5leHRBdWRpb0R0c1xuICAgICAgfSBlbHNlIGlmIChnYXAgPCAwKSB7XG4gICAgICAgIENvbXBhdGliaWxpdHkuZG9GaXhMYXJnZUdhcChhdWRpb1NhbXBsZXMsICgtMSAqIGdhcCkpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGxhc3REdHMgPSBhdWRpb1NhbXBsZXNbYXVkaW9TYW1wbGVzLmxlbmd0aCAtIDFdLmR0cztcbiAgICBjb25zdCBsYXN0U2FtcGxlRHVyYXRpb24gPSBhdWRpb1NhbXBsZXMubGVuZ3RoID49IDIgPyBsYXN0RHRzIC0gYXVkaW9TYW1wbGVzW2F1ZGlvU2FtcGxlcy5sZW5ndGggLSAyXS5kdHMgOiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG5cbiAgICB0aGlzLmxhc3RBdWRpb1NhbXBsZXNMZW4gPSBzYW1wbGVzTGVuO1xuICAgIHRoaXMubmV4dEF1ZGlvRHRzID0gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbkZpeGVkID8gbGFzdER0cyArIG1ldGEucmVmU2FtcGxlRHVyYXRpb25GaXhlZCA6IGxhc3REdHMgKyBsYXN0U2FtcGxlRHVyYXRpb25cbiAgICB0aGlzLmxhc3RBdWRpb0R0cyA9IGxhc3REdHNcblxuICAgIC8vIHN0ZXAzLiDkv67lpI1zYW1wbGVz5q615YaF6YOo55qEZHRz5byC5bi46Zeu6aKYXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGF1ZGlvU2FtcGxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudCA9IGF1ZGlvU2FtcGxlc1tpXVxuICAgICAgY29uc3QgbmV4dCA9IGF1ZGlvU2FtcGxlc1tpICsgMV1cblxuICAgICAgaWYgKCFuZXh0KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IG5leHQuZHRzIC0gY3VycmVudC5kdHM7XG4gICAgICBhdWRpb1NhbXBsZXNbaV0uZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgIC8qXG4gICAgICBpZiAoZHVyYXRpb24gPiAoMiAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pKSB7XG4gICAgICAgIC8vIOS4pOW4p+S5i+mXtOmXtOmalOWkquWkp++8jOmcgOimgeihpeepuueZveW4p1xuICAgICAgICAvKipcbiAgICAgICAgbGV0IHNpbGVudEZyYW1lQ291bnQgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbilcbiAgICAgICAgbGV0IGZyYW1lSWR4ID0gMFxuXG4gICAgICAgIHdoaWxlIChmcmFtZUlkeCA8IHNpbGVudEZyYW1lQ291bnQpIHtcbiAgICAgICAgICBjb25zdCBzaWxlbnRTYW1wbGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBzaWxlbnRGcmFtZSxcbiAgICAgICAgICAgIGRhdGFzaXplOiBzaWxlbnRGcmFtZS5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgZHRzOiBjdXJyZW50LmR0cyArIChmcmFtZUlkeCArIDEpICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbixcbiAgICAgICAgICAgIGZpbHRlcmVkOiAwLFxuICAgICAgICAgICAgaXNTaWxlbnQ6IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhdWRpb1NhbXBsZXMuc3BsaWNlKGksIDAsIHNpbGVudFNhbXBsZSlcblxuICAgICAgICAgIHRoaXMuZmlsbGVkQXVkaW9TYW1wbGVzLnB1c2goe1xuICAgICAgICAgICAgZHRzOiBzaWxlbnRTYW1wbGUuZHRzLFxuICAgICAgICAgICAgc2l6ZTogc2lsZW50U2FtcGxlLmRhdGEuYnl0ZUxlbmd0aFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBmcmFtZUlkeCsrXG4gICAgICAgICAgaSsrIC8vIOS4jeWvuemdmemfs+W4p+WBmuavlOi+g1xuICAgICAgICB9XG4gICAgICB9ICovXG4gICAgfVxuXG4gICAgdGhpcy5hdWRpb1RyYWNrLnNhbXBsZXMgPSBDb21wYXRpYmlsaXR5LnNvcnRBdWRpb1NhbXBsZXMoYXVkaW9TYW1wbGVzKVxuICB9XG5cbiAgZml4Q2hhbmdlU3RyZWFtVmlkZW8gKGNoYW5nZUlkeCkge1xuICAgIGNvbnN0IHsgc2FtcGxlcywgbWV0YSB9ID0gdGhpcy52aWRlb1RyYWNrO1xuICAgIGNvbnN0IHByZXZEdHMgPSBjaGFuZ2VJZHggPT09IDAgPyB0aGlzLmdldFN0cmVhbUNoYW5nZVN0YXJ0KHNhbXBsZXNbMF0pIDogc2FtcGxlc1tjaGFuZ2VJZHggLSAxXS5kdHM7XG4gICAgY29uc3QgY3VyRHRzID0gc2FtcGxlc1tjaGFuZ2VJZHhdLmR0cztcbiAgICBjb25zdCBpc0NvbnRpbnVlID0gTWF0aC5hYnMocHJldkR0cyAtIGN1ckR0cykgPD0gMiAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb247XG5cbiAgICBpZiAoaXNDb250aW51ZSkge1xuICAgICAgaWYgKCFzYW1wbGVzW2NoYW5nZUlkeF0ub3B0aW9ucykge1xuICAgICAgICBzYW1wbGVzW2NoYW5nZUlkeF0ub3B0aW9ucyA9IHtcbiAgICAgICAgICBpc0NvbnRpbnVlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNhbXBsZXNbY2hhbmdlSWR4XS5vcHRpb25zLmlzQ29udGludWUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZG9GaXhWaWRlbyhmYWxzZSlcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdFBhcnRTYW1wbGVzID0gc2FtcGxlcy5zbGljZSgwLCBjaGFuZ2VJZHgpO1xuICAgIGNvbnN0IHNlY29uZFBhcnRTYW1wbGVzID0gc2FtcGxlcy5zbGljZShjaGFuZ2VJZHgpO1xuICAgIGNvbnN0IGZpcnN0U2FtcGxlID0gc2FtcGxlc1swXVxuXG4gICAgY29uc3QgY2hhbmdlU2FtcGxlID0gc2Vjb25kUGFydFNhbXBsZXNbMF1cbiAgICBjb25zdCBmaXJzdFBhcnREdXJhdGlvbiA9IGNoYW5nZVNhbXBsZS5kdHMgLSBmaXJzdFNhbXBsZS5kdHNcbiAgICBjb25zdCBzdHJlYW1DaGFuZ2VTdGFydCA9IGZpcnN0U2FtcGxlLm9wdGlvbnMgJiYgZmlyc3RTYW1wbGUub3B0aW9ucy5zdGFydCArIGZpcnN0UGFydER1cmF0aW9uID8gZmlyc3RTYW1wbGUub3B0aW9ucy5zdGFydCA6IG51bGxcblxuICAgIHRoaXMudmlkZW9UcmFjay5zYW1wbGVzID0gc2FtcGxlcy5zbGljZSgwLCBjaGFuZ2VJZHgpO1xuXG4gICAgdGhpcy5kb0ZpeFZpZGVvKGZhbHNlKTtcblxuICAgIHRoaXMudmlkZW9UcmFjay5zYW1wbGVzID0gc2FtcGxlcy5zbGljZShjaGFuZ2VJZHgpO1xuXG4gICAgdGhpcy5kb0ZpeFZpZGVvKGZhbHNlLCBzdHJlYW1DaGFuZ2VTdGFydCk7XG5cbiAgICB0aGlzLnZpZGVvVHJhY2suc2FtcGxlcyA9IGZpcnN0UGFydFNhbXBsZXMuY29uY2F0KHNlY29uZFBhcnRTYW1wbGVzKVxuICB9XG5cbiAgZml4Q2hhbmdlU3RyZWFtQXVkaW8gKGNoYW5nZUlkeCkge1xuICAgIGNvbnN0IHsgc2FtcGxlcywgbWV0YSB9ID0gdGhpcy5hdWRpb1RyYWNrO1xuXG4gICAgY29uc3QgcHJldkR0cyA9IGNoYW5nZUlkeCA9PT0gMCA/IHRoaXMuZ2V0U3RyZWFtQ2hhbmdlU3RhcnQoc2FtcGxlc1swXSkgOiBzYW1wbGVzW2NoYW5nZUlkeCAtIDFdLmR0cztcbiAgICBjb25zdCBjdXJEdHMgPSBzYW1wbGVzW2NoYW5nZUlkeF0uZHRzO1xuICAgIGNvbnN0IGlzQ29udGludWUgPSBNYXRoLmFicyhwcmV2RHRzIC0gY3VyRHRzKSA8PSAyICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbjtcblxuICAgIGlmIChpc0NvbnRpbnVlKSB7XG4gICAgICBpZiAoIXNhbXBsZXNbY2hhbmdlSWR4XS5vcHRpb25zKSB7XG4gICAgICAgIHNhbXBsZXNbY2hhbmdlSWR4XS5vcHRpb25zID0ge1xuICAgICAgICAgIGlzQ29udGludWU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2FtcGxlc1tjaGFuZ2VJZHhdLm9wdGlvbnMuaXNDb250aW51ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kb0ZpeEF1ZGlvKGZhbHNlKVxuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0UGFydFNhbXBsZXMgPSBzYW1wbGVzLnNsaWNlKDAsIGNoYW5nZUlkeCk7XG4gICAgY29uc3Qgc2Vjb25kUGFydFNhbXBsZXMgPSBzYW1wbGVzLnNsaWNlKGNoYW5nZUlkeCk7XG4gICAgY29uc3QgZmlyc3RTYW1wbGUgPSBzYW1wbGVzWzBdXG5cbiAgICBjb25zdCBjaGFuZ2VTYW1wbGUgPSBzZWNvbmRQYXJ0U2FtcGxlc1swXVxuICAgIGNvbnN0IGZpcnN0UGFydER1cmF0aW9uID0gY2hhbmdlU2FtcGxlLmR0cyAtIGZpcnN0U2FtcGxlLmR0c1xuICAgIGNvbnN0IHN0cmVhbUNoYW5nZVN0YXJ0ID0gZmlyc3RTYW1wbGUub3B0aW9ucyAmJiBmaXJzdFNhbXBsZS5vcHRpb25zLnN0YXJ0ICsgZmlyc3RQYXJ0RHVyYXRpb24gPyBmaXJzdFNhbXBsZS5vcHRpb25zLnN0YXJ0IDogbnVsbFxuXG4gICAgdGhpcy5hdWRpb1RyYWNrLnNhbXBsZXMgPSBmaXJzdFBhcnRTYW1wbGVzO1xuXG4gICAgdGhpcy5kb0ZpeEF1ZGlvKGZhbHNlKTtcblxuICAgIHRoaXMuYXVkaW9UcmFjay5zYW1wbGVzID0gc2Vjb25kUGFydFNhbXBsZXM7XG5cbiAgICB0aGlzLmRvRml4QXVkaW8oZmFsc2UsIHN0cmVhbUNoYW5nZVN0YXJ0KTtcblxuICAgIHRoaXMuYXVkaW9UcmFjay5zYW1wbGVzID0gZmlyc3RQYXJ0U2FtcGxlcy5jb25jYXQoc2Vjb25kUGFydFNhbXBsZXMpXG4gIH1cblxuICBnZXRGaXJzdFNhbXBsZSAoKSB7XG4gICAgLy8g6I635Y+WdmlkZW/lkoxhdWRpb+eahOmmluW4p+aVsOaNrlxuICAgIGxldCB7c2FtcGxlczogdmlkZW9TYW1wbGVzfSA9IHRoaXMudmlkZW9UcmFja1xuICAgIGxldCB7c2FtcGxlczogYXVkaW9TYW1wbGVzfSA9IHRoaXMuYXVkaW9UcmFja1xuXG4gICAgbGV0IGlzRmlyc3RWaWRlb1NhbXBsZXMgPSBmYWxzZTtcbiAgICBsZXQgaXNGaXJzdEF1ZGlvU2FtcGxlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLl9maXJzdFZpZGVvU2FtcGxlICYmIHZpZGVvU2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUgPSBDb21wYXRpYmlsaXR5LmZpbmRGaXJzdFZpZGVvU2FtcGxlKHZpZGVvU2FtcGxlcylcbiAgICAgIGlzRmlyc3RWaWRlb1NhbXBsZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9maXJzdEF1ZGlvU2FtcGxlICYmIGF1ZGlvU2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUgPSBDb21wYXRpYmlsaXR5LmZpbmRGaXJzdEF1ZGlvU2FtcGxlKGF1ZGlvU2FtcGxlcykgLy8g5a+75om+ZHRz5pyA5bCP55qE5bin5L2c5Li66aaW5Liq6Z+z6aKR5binXG4gICAgICBpc0ZpcnN0QXVkaW9TYW1wbGVzID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpc0ZpcnN0VmlkZW9TYW1wbGVzLFxuICAgICAgaXNGaXJzdEF1ZGlvU2FtcGxlc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlnKjmsqHmnIlyZWZTYW1wbGVEdXJhdGlvbueahOmXrumimOa1geS4re+8jFxuICAgKi9cbiAgZml4UmVmU2FtcGxlRHVyYXRpb24gKG1ldGEsIHNhbXBsZXMpIHtcbiAgICBjb25zdCBpc1ZpZGVvID0gbWV0YS50eXBlID09PSAndmlkZW8nXG4gICAgY29uc3QgYWxsU2FtcGxlc0NvdW50ID0gaXNWaWRlbyA/IHRoaXMuYWxsVmlkZW9TYW1wbGVzQ291bnQgOiB0aGlzLmFsbEF1ZGlvU2FtcGxlc0NvdW50XG4gICAgY29uc3QgZmlyc3REdHMgPSBpc1ZpZGVvID8gdGhpcy5fZmlyc3RWaWRlb1NhbXBsZS5kdHMgOiB0aGlzLl9maXJzdEF1ZGlvU2FtcGxlLmR0c1xuICAgIGNvbnN0IGZpbGxlZFNhbXBsZXNDb3VudCA9IGlzVmlkZW8gPyB0aGlzLmZpbGxlZFZpZGVvU2FtcGxlcy5sZW5ndGggOiB0aGlzLmZpbGxlZEF1ZGlvU2FtcGxlcy5sZW5ndGhcblxuICAgIGlmICghbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiB8fCBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uIDw9IDAgfHwgTnVtYmVyLmlzTmFOKG1ldGEucmVmU2FtcGxlRHVyYXRpb24pKSB7XG4gICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICBjb25zdCBsYXN0RHRzID0gc2FtcGxlc1tzYW1wbGVzLmxlbmd0aCAtIDFdLmR0c1xuXG4gICAgICAgIG1ldGEucmVmU2FtcGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKChsYXN0RHRzIC0gZmlyc3REdHMpIC8gKChhbGxTYW1wbGVzQ291bnQgKyBmaWxsZWRTYW1wbGVzQ291bnQpIC0gMSkpOyAvLyDlsIZyZWZTYW1wbGVEdXJhdGlvbumHjee9ruS4uuiuoeeul+WQjueahOW5s+Wdh+WAvFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWV0YS5yZWZTYW1wbGVEdXJhdGlvbikge1xuICAgICAgaWYgKHNhbXBsZXMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgY29uc3QgbGFzdER0cyA9IHNhbXBsZXNbc2FtcGxlcy5sZW5ndGggLSAxXS5kdHNcbiAgICAgICAgY29uc3QgZmlyc3REdHMgPSBzYW1wbGVzWzBdLmR0c1xuICAgICAgICBjb25zdCBkdXJhdGlvbkF2ZyA9IChsYXN0RHRzIC0gZmlyc3REdHMpIC8gKHNhbXBsZXMubGVuZ3RoIC0gMSlcblxuICAgICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLmFicyhtZXRhLnJlZlNhbXBsZUR1cmF0aW9uIC0gZHVyYXRpb25BdmcpIDw9IDUgPyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uIDogZHVyYXRpb25BdmcpOyAvLyDlsIZyZWZTYW1wbGVEdXJhdGlvbumHjee9ruS4uuiuoeeul+WQjueahOW5s+Wdh+WAvFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDorrDlvZXmiKrmraLnm67liY3kuIDlhbHmkq3mlL7kuoblpJrlsJHluKdcbiAgICovXG4gIHJlY29yZFNhbXBsZXNDb3VudCAoKSB7XG4gICAgY29uc3QgeyBhdWRpb1RyYWNrLCB2aWRlb1RyYWNrIH0gPSB0aGlzXG5cbiAgICB0aGlzLmFsbEF1ZGlvU2FtcGxlc0NvdW50ICs9IGF1ZGlvVHJhY2suc2FtcGxlcy5sZW5ndGhcbiAgICB0aGlzLmFsbFZpZGVvU2FtcGxlc0NvdW50ICs9IHZpZGVvVHJhY2suc2FtcGxlcy5sZW5ndGhcbiAgfVxuXG4gIC8qKlxuICAgKiDljrvpmaTkuI3lkIjms5XnmoTluKfvvIjlgJLpgIDjgIHph43lpI3luKfvvIlcbiAgICovXG4gIHJlbW92ZUludmFsaWRTYW1wbGVzICgpIHtcbiAgICBjb25zdCB7IF9maXJzdFZpZGVvU2FtcGxlLCBfZmlyc3RBdWRpb1NhbXBsZSB9ID0gdGhpc1xuXG4gICAgdGhpcy5hdWRpb1RyYWNrLnNhbXBsZXMgPSB0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcy5maWx0ZXIoKHNhbXBsZSkgPT4ge1xuICAgICAgcmV0dXJuIHNhbXBsZS5kdHMgPj0gX2ZpcnN0QXVkaW9TYW1wbGUuZHRzICYmICh0aGlzLmxhc3RBdWRpb0R0cyA9PT0gdW5kZWZpbmVkIHx8IHNhbXBsZS5kdHMgPiB0aGlzLmxhc3RBdWRpb0R0cylcbiAgICB9KVxuXG4gICAgdGhpcy52aWRlb1RyYWNrLnNhbXBsZXMgPSB0aGlzLnZpZGVvVHJhY2suc2FtcGxlcy5maWx0ZXIoKHNhbXBsZSkgPT4ge1xuICAgICAgcmV0dXJuIHNhbXBsZS5kdHMgPj0gX2ZpcnN0VmlkZW9TYW1wbGUuZHRzICYmICh0aGlzLmxhc3RWaWRlb0R0cyA9PT0gdW5kZWZpbmVkIHx8IHNhbXBsZS5kdHMgPiB0aGlzLmxhc3RWaWRlb0R0cylcbiAgICB9KVxuICB9XG5cbiAgZ2V0U3RyZWFtQ2hhbmdlU3RhcnQgKHNhbXBsZSkge1xuICAgIGlmIChzYW1wbGUub3B0aW9ucyAmJiBzYW1wbGUub3B0aW9ucy5zdGFydCkge1xuICAgICAgcmV0dXJuIHNhbXBsZS5vcHRpb25zLnN0YXJ0IC0gdGhpcy5kdHNCYXNlO1xuICAgIH1cbiAgICByZXR1cm4gSW5maW5pdHlcbiAgfVxuXG4gIHN0YXRpYyBzb3J0QXVkaW9TYW1wbGVzIChzYW1wbGVzKSB7XG4gICAgaWYgKHNhbXBsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gc2FtcGxlc1xuICAgIH1cblxuICAgIHJldHVybiBzYW1wbGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmR0cyAtIGIuZHRzXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiDlr7vmib5kdHPmnIDlsI/nmoRzYW1wbGVcbiAgICogQHBhcmFtIHNhbXBsZXNcbiAgICovXG4gIHN0YXRpYyBmaW5kRmlyc3RBdWRpb1NhbXBsZSAoc2FtcGxlcykge1xuICAgIGlmICghc2FtcGxlcyB8fCBzYW1wbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gQ29tcGF0aWJpbGl0eS5zb3J0QXVkaW9TYW1wbGVzKHNhbXBsZXMpWzBdXG4gIH1cblxuICBzdGF0aWMgZmluZEZpcnN0VmlkZW9TYW1wbGUgKHNhbXBsZXMpIHtcbiAgICBpZiAoIXNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHNvcnRlZCA9IHNhbXBsZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZHRzIC0gYi5kdHM7XG4gICAgfSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzb3J0ZWQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChzb3J0ZWRbaV0uaXNLZXlmcmFtZSkge1xuICAgICAgICByZXR1cm4gc29ydGVkW2ldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRldGVjdExhcmdlR2FwIChuZXh0RHRzLCBmaXJzdFNhbXBsZSkge1xuICAgIGlmIChuZXh0RHRzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGN1ckR0cyA9IGZpcnN0U2FtcGxlLmR0cyB8fCAwXG4gICAgY29uc3QgY29uZDEgPSBuZXh0RHRzIC0gY3VyRHRzID49IDEwMDAgfHwgY3VyRHRzIC0gbmV4dER0cyA+PSAxMDAwIC8vIGZpeCBobHPmtYHlh7rnjrDlpKfph4/mtYFkdHPpl7Tot53pl67pophcbiAgICBjb25zdCBjb25kMiA9IGZpcnN0U2FtcGxlLm9wdGlvbnMgJiYgZmlyc3RTYW1wbGUub3B0aW9ucy5kaXNjb250aW51ZVxuXG4gICAgcmV0dXJuIGNvbmQxIHx8IGNvbmQyXG4gIH1cblxuICBzdGF0aWMgZG9GaXhMYXJnZUdhcCAoc2FtcGxlcywgZ2FwKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNhbXBsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHNhbXBsZSA9IHNhbXBsZXNbaV07XG4gICAgICBzYW1wbGUuZHRzICs9IGdhcFxuICAgICAgaWYgKHNhbXBsZS5wdHMpIHtcbiAgICAgICAgc2FtcGxlLnB0cyArPSBnYXBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5Lit6YCU5o2i5rWBXG4gICAqL1xuICBzdGF0aWMgZGV0YWN0Q2hhbmdlU3RyZWFtIChzYW1wbGVzKSB7XG4gICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICBsZXQgY2hhbmdlZElkeCA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzYW1wbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoc2FtcGxlc1tpXS5vcHRpb25zICYmIHNhbXBsZXNbaV0ub3B0aW9ucy5tZXRhKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlXG4gICAgICAgIGNoYW5nZWRJZHggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2hhbmdlZCxcbiAgICAgIGNoYW5nZWRJZHhcbiAgICB9XG4gIH1cblxuICBnZXQgdHJhY2tzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJylcbiAgfVxuXG4gIGdldCBhdWRpb1RyYWNrICgpIHtcbiAgICBpZiAodGhpcy50cmFja3MpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYWNrcy5hdWRpb1RyYWNrXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBnZXQgdmlkZW9UcmFjayAoKSB7XG4gICAgaWYgKHRoaXMudHJhY2tzKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFja3MudmlkZW9UcmFja1xuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZ2V0IGR0c0Jhc2UgKCkge1xuICAgIGNvbnN0IHJlbXV4ZXIgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdNUDRfUkVNVVhFUicpO1xuICAgIGlmIChyZW11eGVyKSB7XG4gICAgICByZXR1cm4gcmVtdXhlci5fZHRzQmFzZVxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb21wYXRpYmlsaXR5O1xuIiwiY2xhc3MgR29sb21iIHtcbiAgY29uc3RydWN0b3IgKHVpbnQ4YXJyYXkpIHtcbiAgICB0aGlzLlRBRyA9ICdHb2xvbWInXG4gICAgdGhpcy5fYnVmZmVyID0gdWludDhhcnJheVxuICAgIHRoaXMuX2J1ZmZlckluZGV4ID0gMFxuICAgIHRoaXMuX3RvdGFsQnl0ZXMgPSB1aW50OGFycmF5LmJ5dGVMZW5ndGhcbiAgICB0aGlzLl90b3RhbEJpdHMgPSB1aW50OGFycmF5LmJ5dGVMZW5ndGggKiA4XG4gICAgdGhpcy5fY3VycmVudFdvcmQgPSAwXG4gICAgdGhpcy5fY3VycmVudFdvcmRCaXRzTGVmdCA9IDBcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2J1ZmZlciA9IG51bGxcbiAgfVxuXG4gIF9maWxsQ3VycmVudFdvcmQgKCkge1xuICAgIGxldCBidWZmZXJCeXRlc0xlZnQgPSB0aGlzLl90b3RhbEJ5dGVzIC0gdGhpcy5fYnVmZmVySW5kZXhcbiAgICBpZiAoYnVmZmVyQnl0ZXNMZWZ0IDw9IDApIHtcbiAgICAgIC8vIFRPRE8g5byC5bi45aSE55CGXG4gICAgfVxuXG4gICAgbGV0IGJ5dGVzUmVhZCA9IE1hdGgubWluKDQsIGJ1ZmZlckJ5dGVzTGVmdClcbiAgICBsZXQgd29yZCA9IG5ldyBVaW50OEFycmF5KDQpXG4gICAgd29yZC5zZXQodGhpcy5fYnVmZmVyLnN1YmFycmF5KHRoaXMuX2J1ZmZlckluZGV4LCB0aGlzLl9idWZmZXJJbmRleCArIGJ5dGVzUmVhZCkpXG4gICAgdGhpcy5fY3VycmVudFdvcmQgPSBuZXcgRGF0YVZpZXcod29yZC5idWZmZXIpLmdldFVpbnQzMigwKVxuXG4gICAgdGhpcy5fYnVmZmVySW5kZXggKz0gYnl0ZXNSZWFkXG4gICAgdGhpcy5fY3VycmVudFdvcmRCaXRzTGVmdCA9IGJ5dGVzUmVhZCAqIDhcbiAgfVxuXG4gIHJlYWRCaXRzIChzaXplKSB7XG4gICAgbGV0IGJpdHMgPSBNYXRoLm1pbih0aGlzLl9jdXJyZW50V29yZEJpdHNMZWZ0LCBzaXplKTsvLyA6dWludFxuICAgIGxldCB2YWx1ID0gdGhpcy5fY3VycmVudFdvcmQgPj4+ICgzMiAtIGJpdHMpO1xuICAgIGlmIChzaXplID4gMzIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlYWQgbW9yZSB0aGFuIDMyIGJpdHMgYXQgYSB0aW1lJyk7XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRXb3JkQml0c0xlZnQgLT0gYml0cztcbiAgICBpZiAodGhpcy5fY3VycmVudFdvcmRCaXRzTGVmdCA+IDApIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRXb3JkIDw8PSBiaXRzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdG90YWxCeXRlcyAtIHRoaXMuX2J1ZmZlckluZGV4ID4gMCkge1xuICAgICAgdGhpcy5fZmlsbEN1cnJlbnRXb3JkKCk7XG4gICAgfVxuXG4gICAgYml0cyA9IHNpemUgLSBiaXRzO1xuICAgIGlmIChiaXRzID4gMCAmJiB0aGlzLl9jdXJyZW50V29yZEJpdHNMZWZ0KSB7XG4gICAgICByZXR1cm4gdmFsdSA8PCBiaXRzIHwgdGhpcy5yZWFkQml0cyhiaXRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHU7XG4gICAgfVxuICB9XG5cbiAgcmVhZEJvb2wgKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWRCaXRzKDEpID09PSAxXG4gIH1cblxuICByZWFkQnl0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEJpdHMoOClcbiAgfVxuXG4gIF9za2lwTGVhZGluZ1plcm8gKCkge1xuICAgIGxldCB6ZXJvQ291bnRcbiAgICBmb3IgKHplcm9Db3VudCA9IDA7IHplcm9Db3VudCA8IHRoaXMuX2N1cnJlbnRXb3JkQml0c0xlZnQ7IHplcm9Db3VudCsrKSB7XG4gICAgICBpZiAoKHRoaXMuX2N1cnJlbnRXb3JkICYgKDB4ODAwMDAwMDAgPj4+IHplcm9Db3VudCkpICE9PSAwKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRXb3JkIDw8PSB6ZXJvQ291bnRcbiAgICAgICAgdGhpcy5fY3VycmVudFdvcmRCaXRzTGVmdCAtPSB6ZXJvQ291bnRcbiAgICAgICAgcmV0dXJuIHplcm9Db3VudFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9maWxsQ3VycmVudFdvcmQoKVxuICAgIHJldHVybiB6ZXJvQ291bnQgKyB0aGlzLl9za2lwTGVhZGluZ1plcm8oKVxuICB9XG5cbiAgcmVhZFVFRyAoKSB7IC8vIHVuc2lnbmVkIGV4cG9uZW50aWFsIGdvbG9tYlxuICAgIGxldCBsZWFkaW5nWmVyb3MgPSB0aGlzLl9za2lwTGVhZGluZ1plcm8oKVxuICAgIHJldHVybiB0aGlzLnJlYWRCaXRzKGxlYWRpbmdaZXJvcyArIDEpIC0gMVxuICB9XG5cbiAgcmVhZFNFRyAoKSB7IC8vIHNpZ25lZCBleHBvbmVudGlhbCBnb2xvbWJcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRVRUcoKVxuICAgIGlmICh2YWx1ZSAmIDB4MDEpIHtcbiAgICAgIHJldHVybiAodmFsdWUgKyAxKSA+Pj4gMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLTEgKiAodmFsdWUgPj4+IDEpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvbG9tYlxuIiwiaW1wb3J0IFNwc1BhcnNlciBmcm9tICcuL3Nwcyc7XG5jbGFzcyBOYWx1bml0IHtcbiAgc3RhdGljIGdldE5hbHVuaXRzIChidWZmZXIpIHtcbiAgICBpZiAoYnVmZmVyLmxlbmd0aCAtIGJ1ZmZlci5wb3NpdGlvbiA8IDQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgYnVmID0gYnVmZmVyLmRhdGF2aWV3O1xuICAgIGxldCBwb3NpdGlvbiA9IGJ1ZmZlci5wb3NpdGlvbjtcbiAgICBpZiAoYnVmLmdldEludDMyKHBvc2l0aW9uKSA9PT0gMSB8fFxuICAgIChidWYuZ2V0SW50MTYocG9zaXRpb24pID09PSAwICYmIGJ1Zi5nZXRJbnQ4KHBvc2l0aW9uICsgMikgPT09IDEpKSB7XG4gICAgICByZXR1cm4gTmFsdW5pdC5nZXRBbm5leGJOYWxzKGJ1ZmZlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOYWx1bml0LmdldEF2Y2NOYWxzKGJ1ZmZlcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEFubmV4Yk5hbHMgKGJ1ZmZlcikge1xuICAgIGxldCBuYWxzID0gW107XG4gICAgbGV0IHBvc2l0aW9uID0gTmFsdW5pdC5nZXRIZWFkZXJQb3NpdGlvbkFubmV4QihidWZmZXIpO1xuICAgIGxldCBzdGFydCA9IHBvc2l0aW9uLnBvcztcbiAgICBsZXQgZW5kID0gc3RhcnQ7XG4gICAgd2hpbGUgKHN0YXJ0IDwgYnVmZmVyLmxlbmd0aCAtIDQpIHtcbiAgICAgIGxldCBoZWFkZXIgPSBidWZmZXIuYnVmZmVyLnNsaWNlKHN0YXJ0LCBzdGFydCArIHBvc2l0aW9uLmhlYWRlckxlbmd0aCk7XG4gICAgICBpZiAocG9zaXRpb24ucG9zID09PSBidWZmZXIucG9zaXRpb24pIHtcbiAgICAgICAgYnVmZmVyLnNraXAocG9zaXRpb24uaGVhZGVyTGVuZ3RoKTtcbiAgICAgIH1cbiAgICAgIHBvc2l0aW9uID0gTmFsdW5pdC5nZXRIZWFkZXJQb3NpdGlvbkFubmV4QihidWZmZXIpO1xuICAgICAgZW5kID0gcG9zaXRpb24ucG9zO1xuICAgICAgbGV0IGJvZHkgPSBuZXcgVWludDhBcnJheShidWZmZXIuYnVmZmVyLnNsaWNlKHN0YXJ0ICsgaGVhZGVyLmJ5dGVMZW5ndGgsIGVuZCkpO1xuICAgICAgbGV0IHVuaXQgPSB7aGVhZGVyLCBib2R5fTtcbiAgICAgIE5hbHVuaXQuYW5hbHlzZU5hbCh1bml0KTtcbiAgICAgIG5hbHMucHVzaCh1bml0KTtcbiAgICAgIGJ1ZmZlci5za2lwKGVuZCAtIGJ1ZmZlci5wb3NpdGlvbik7XG4gICAgICBzdGFydCA9IGVuZDtcbiAgICB9XG4gICAgcmV0dXJuIG5hbHM7XG4gIH1cblxuICBzdGF0aWMgZ2V0QXZjY05hbHMgKGJ1ZmZlcikge1xuICAgIGxldCBuYWxzID0gW107XG4gICAgd2hpbGUgKGJ1ZmZlci5wb3NpdGlvbiA8IGJ1ZmZlci5sZW5ndGggLSA0KSB7XG4gICAgICBsZXQgbGVuZ3RoID0gYnVmZmVyLmRhdGF2aWV3LmdldEludDMyKGJ1ZmZlci5wb3NpdGlvbik7XG4gICAgICBpZiAoYnVmZmVyLmxlbmd0aCAtIGJ1ZmZlci5wb3NpdGlvbiA+PSBsZW5ndGgpIHtcbiAgICAgICAgbGV0IGhlYWRlciA9IGJ1ZmZlci5idWZmZXIuc2xpY2UoYnVmZmVyLnBvc2l0aW9uLCBidWZmZXIucG9zaXRpb24gKyA0KTtcbiAgICAgICAgYnVmZmVyLnNraXAoNClcbiAgICAgICAgbGV0IGJvZHkgPSBidWZmZXIuYnVmZmVyLnNsaWNlKGJ1ZmZlci5wb3NpdGlvbiwgYnVmZmVyLnBvc2l0aW9uICsgbGVuZ3RoKTtcbiAgICAgICAgYnVmZmVyLnNraXAobGVuZ3RoKTtcbiAgICAgICAgbGV0IHVuaXQgPSB7aGVhZGVyLCBib2R5fTtcbiAgICAgICAgTmFsdW5pdC5hbmFseXNlTmFsKHVuaXQpO1xuICAgICAgICBuYWxzLnB1c2godW5pdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5hbHM7XG4gIH1cblxuICBzdGF0aWMgYW5hbHlzZU5hbCAodW5pdCkge1xuICAgIGxldCB0eXBlID0gdW5pdC5ib2R5WzBdICYgMHgxZjtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgLy8gTkRSXG4gICAgICAgIHVuaXQubmRyID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIC8vIElEUlxuICAgICAgICB1bml0LmlkciA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICAvLyBTRUlcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIC8vIFNQU1xuICAgICAgICB1bml0LnNwcyA9IFNwc1BhcnNlci5wYXJzZVNQUyh1bml0LmJvZHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODpcbiAgICAgICAgLy8gUFBTXG4gICAgICAgIHVuaXQucHBzID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIC8vIEFVRFxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRIZWFkZXJQb3NpdGlvbkFubmV4QiAoYnVmZmVyKSB7XG4gICAgLy8gc2VwZXJhdGVcbiAgICBsZXQgcG9zID0gYnVmZmVyLnBvc2l0aW9uO1xuICAgIGxldCBoZWFkZXJMZW5ndGggPSAwO1xuICAgIHdoaWxlIChoZWFkZXJMZW5ndGggIT09IDMgJiYgaGVhZGVyTGVuZ3RoICE9PSA0ICYmIHBvcyA8IGJ1ZmZlci5sZW5ndGggLSA0KSB7XG4gICAgICBpZiAoYnVmZmVyLmRhdGF2aWV3LmdldEludDE2KHBvcykgPT09IDApIHtcbiAgICAgICAgaWYgKGJ1ZmZlci5kYXRhdmlldy5nZXRJbnQxNihwb3MgKyAyKSA9PT0gMSkge1xuICAgICAgICAgIC8vIDB4MDAwMDAxXG4gICAgICAgICAgaGVhZGVyTGVuZ3RoID0gNDtcbiAgICAgICAgfSBlbHNlIGlmIChidWZmZXIuZGF0YXZpZXcuZ2V0SW50OChwb3MgKyAyKSA9PT0gMSkge1xuICAgICAgICAgIGhlYWRlckxlbmd0aCA9IDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zKys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcysrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3MgPT09IGJ1ZmZlci5sZW5ndGggLSA0KSB7XG4gICAgICBpZiAoYnVmZmVyLmRhdGF2aWV3LmdldEludDE2KHBvcykgPT09IDApIHtcbiAgICAgICAgaWYgKGJ1ZmZlci5kYXRhdmlldy5nZXRJbnQxNihwb3MgKyAyKSA9PT0gMSkge1xuICAgICAgICAgIC8vIDB4MDAwMDAxXG4gICAgICAgICAgaGVhZGVyTGVuZ3RoID0gNDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zKys7XG4gICAgICAgIGlmIChidWZmZXIuZGF0YXZpZXcuZ2V0SW50MTYocG9zKSA9PT0gMCAmJiBidWZmZXIuZGF0YXZpZXcuZ2V0SW50OChwb3MpID09PSAxKSB7XG4gICAgICAgICAgLy8gMHgwMDAwMDAxXG4gICAgICAgICAgaGVhZGVyTGVuZ3RoID0gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb3MgPSBidWZmZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7cG9zLCBoZWFkZXJMZW5ndGh9O1xuICB9XG5cbiAgc3RhdGljIGdldEF2Y2MgKHNwcywgcHBzKSB7XG4gICAgbGV0IHJldCA9IG5ldyBVaW50OEFycmF5KHNwcy5ieXRlTGVuZ3RoICsgcHBzLmJ5dGVMZW5ndGggKyAxMSk7XG4gICAgcmV0WzBdID0gMHgwMTtcbiAgICByZXRbMV0gPSBzcHNbMV07XG4gICAgcmV0WzJdID0gc3BzWzJdO1xuICAgIHJldFszXSA9IHNwc1szXTtcbiAgICByZXRbNF0gPSAyNTU7XG4gICAgcmV0WzVdID0gMjI1O1xuXG4gICAgbGV0IG9mZnNldCA9IDY7XG5cbiAgICByZXQuc2V0KG5ldyBVaW50OEFycmF5KFsoc3BzLmJ5dGVMZW5ndGggPj4+IDgpICYgMHhmZiwgc3BzLmJ5dGVMZW5ndGggJiAweGZmXSksIG9mZnNldCk7XG4gICAgb2Zmc2V0ICs9IDI7XG4gICAgcmV0LnNldChzcHMsIG9mZnNldCk7XG4gICAgb2Zmc2V0ICs9IHNwcy5ieXRlTGVuZ3RoO1xuXG4gICAgcmV0W29mZnNldF0gPSAxO1xuICAgIG9mZnNldCsrO1xuXG4gICAgcmV0LnNldChuZXcgVWludDhBcnJheShbKHBwcy5ieXRlTGVuZ3RoID4+PiA4KSAmIDB4ZmYsIHBwcy5ieXRlTGVuZ3RoICYgMHhmZl0pLCBvZmZzZXQpO1xuICAgIG9mZnNldCArPSAyO1xuICAgIHJldC5zZXQocHBzLCBvZmZzZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmFsdW5pdDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAgKi9cbi8qIGVzbGludC1kaXNhYmxlIG9uZS12YXIgICovXG5pbXBvcnQgR29sb21iIGZyb20gJy4vZ29sb21iJ1xuXG5jbGFzcyBTUFNQYXJzZXIge1xuICBzdGF0aWMgX2Vic3AycmJzcCAodWludDhhcnJheSkge1xuICAgIGxldCBzcmMgPSB1aW50OGFycmF5XG4gICAgbGV0IHNyY0xlbmd0aCA9IHNyYy5ieXRlTGVuZ3RoXG4gICAgbGV0IGRzdCA9IG5ldyBVaW50OEFycmF5KHNyY0xlbmd0aClcbiAgICBsZXQgZHN0SWR4ID0gMFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPj0gMikge1xuICAgICAgICBpZiAoc3JjW2ldID09PSAweDAzICYmIHNyY1tpIC0gMV0gPT09IDB4MDAgJiYgc3JjW2kgLSAyXSA9PT0gMHgwMCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRzdFtkc3RJZHhdID0gc3JjW2ldXG4gICAgICBkc3RJZHgrK1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkc3QuYnVmZmVyLCAwLCBkc3RJZHgpXG4gIH1cblxuICBzdGF0aWMgcGFyc2VTUFMgKHVpbnQ4YXJyYXkpIHtcbiAgICBsZXQgcmJzcCA9IFNQU1BhcnNlci5fZWJzcDJyYnNwKHVpbnQ4YXJyYXkpXG4gICAgbGV0IGdiID0gbmV3IEdvbG9tYihyYnNwKVxuXG4gICAgZ2IucmVhZEJ5dGUoKVxuICAgIGxldCBwcm9maWxlSWRjID0gZ2IucmVhZEJ5dGUoKVxuICAgIGdiLnJlYWRCeXRlKClcbiAgICBsZXQgbGV2ZWxJZGMgPSBnYi5yZWFkQnl0ZSgpXG4gICAgZ2IucmVhZFVFRygpXG5cbiAgICBsZXQgcHJvZmlsZV9zdHJpbmcgPSBTUFNQYXJzZXIuZ2V0UHJvZmlsZVN0cmluZyhwcm9maWxlSWRjKVxuICAgIGxldCBsZXZlbF9zdHJpbmcgPSBTUFNQYXJzZXIuZ2V0TGV2ZWxTdHJpbmcobGV2ZWxJZGMpXG4gICAgbGV0IGNocm9tYV9mb3JtYXRfaWRjID0gMVxuICAgIGxldCBjaHJvbWFfZm9ybWF0ID0gNDIwXG4gICAgbGV0IGNocm9tYV9mb3JtYXRfdGFibGUgPSBbMCwgNDIwLCA0MjIsIDQ0NF1cbiAgICBsZXQgYml0X2RlcHRoID0gOFxuXG4gICAgaWYgKHByb2ZpbGVJZGMgPT09IDEwMCB8fCBwcm9maWxlSWRjID09PSAxMTAgfHwgcHJvZmlsZUlkYyA9PT0gMTIyIHx8XG4gICAgICBwcm9maWxlSWRjID09PSAyNDQgfHwgcHJvZmlsZUlkYyA9PT0gNDQgfHwgcHJvZmlsZUlkYyA9PT0gODMgfHxcbiAgICAgIHByb2ZpbGVJZGMgPT09IDg2IHx8IHByb2ZpbGVJZGMgPT09IDExOCB8fCBwcm9maWxlSWRjID09PSAxMjggfHxcbiAgICAgIHByb2ZpbGVJZGMgPT09IDEzOCB8fCBwcm9maWxlSWRjID09PSAxNDQpIHtcbiAgICAgIGNocm9tYV9mb3JtYXRfaWRjID0gZ2IucmVhZFVFRygpXG4gICAgICBpZiAoY2hyb21hX2Zvcm1hdF9pZGMgPT09IDMpIHtcbiAgICAgICAgZ2IucmVhZEJpdHMoMSlcbiAgICAgIH1cbiAgICAgIGlmIChjaHJvbWFfZm9ybWF0X2lkYyA8PSAzKSB7XG4gICAgICAgIGNocm9tYV9mb3JtYXQgPSBjaHJvbWFfZm9ybWF0X3RhYmxlW2Nocm9tYV9mb3JtYXRfaWRjXVxuICAgICAgfVxuXG4gICAgICBiaXRfZGVwdGggPSBnYi5yZWFkVUVHKCkgKyA4XG4gICAgICBnYi5yZWFkVUVHKClcbiAgICAgIGdiLnJlYWRCaXRzKDEpXG4gICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICBsZXQgc2NhbGluZ19saXN0X2NvdW50ID0gKGNocm9tYV9mb3JtYXRfaWRjICE9PSAzKSA/IDggOiAxMlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjYWxpbmdfbGlzdF9jb3VudDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGdiLnJlYWRCb29sKCkpIHtcbiAgICAgICAgICAgIGlmIChpIDwgNikge1xuICAgICAgICAgICAgICBTUFNQYXJzZXIuX3NraXBTY2FsaW5nTGlzdChnYiwgMTYpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBTUFNQYXJzZXIuX3NraXBTY2FsaW5nTGlzdChnYiwgNjQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGdiLnJlYWRVRUcoKVxuICAgIGxldCBwaWNfb3JkZXJfY250X3R5cGUgPSBnYi5yZWFkVUVHKClcbiAgICBpZiAocGljX29yZGVyX2NudF90eXBlID09PSAwKSB7XG4gICAgICBnYi5yZWFkVUVHKClcbiAgICB9IGVsc2UgaWYgKHBpY19vcmRlcl9jbnRfdHlwZSA9PT0gMSkge1xuICAgICAgZ2IucmVhZEJpdHMoMSlcbiAgICAgIGdiLnJlYWRTRUcoKVxuICAgICAgZ2IucmVhZFNFRygpXG4gICAgICBsZXQgbnVtX3JlZl9mcmFtZXNfaW5fcGljX29yZGVyX2NudF9jeWNsZSA9IGdiLnJlYWRVRUcoKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fcmVmX2ZyYW1lc19pbl9waWNfb3JkZXJfY250X2N5Y2xlOyBpKyspIHtcbiAgICAgICAgZ2IucmVhZFNFRygpXG4gICAgICB9XG4gICAgfVxuICAgIGdiLnJlYWRVRUcoKVxuICAgIGdiLnJlYWRCaXRzKDEpXG5cbiAgICBsZXQgcGljX3dpZHRoX2luX21ic19taW51czEgPSBnYi5yZWFkVUVHKClcbiAgICBsZXQgcGljX2hlaWdodF9pbl9tYXBfdW5pdHNfbWludXMxID0gZ2IucmVhZFVFRygpXG5cbiAgICBsZXQgZnJhbWVfbWJzX29ubHlfZmxhZyA9IGdiLnJlYWRCaXRzKDEpXG4gICAgaWYgKGZyYW1lX21ic19vbmx5X2ZsYWcgPT09IDApIHtcbiAgICAgIGdiLnJlYWRCaXRzKDEpXG4gICAgfVxuICAgIGdiLnJlYWRCaXRzKDEpXG5cbiAgICBsZXQgZnJhbWVfY3JvcF9sZWZ0X29mZnNldCA9IDBcbiAgICBsZXQgZnJhbWVfY3JvcF9yaWdodF9vZmZzZXQgPSAwXG4gICAgbGV0IGZyYW1lX2Nyb3BfdG9wX29mZnNldCA9IDBcbiAgICBsZXQgZnJhbWVfY3JvcF9ib3R0b21fb2Zmc2V0ID0gMFxuXG4gICAgbGV0IGZyYW1lX2Nyb3BwaW5nX2ZsYWcgPSBnYi5yZWFkQm9vbCgpXG4gICAgaWYgKGZyYW1lX2Nyb3BwaW5nX2ZsYWcpIHtcbiAgICAgIGZyYW1lX2Nyb3BfbGVmdF9vZmZzZXQgPSBnYi5yZWFkVUVHKClcbiAgICAgIGZyYW1lX2Nyb3BfcmlnaHRfb2Zmc2V0ID0gZ2IucmVhZFVFRygpXG4gICAgICBmcmFtZV9jcm9wX3RvcF9vZmZzZXQgPSBnYi5yZWFkVUVHKClcbiAgICAgIGZyYW1lX2Nyb3BfYm90dG9tX29mZnNldCA9IGdiLnJlYWRVRUcoKVxuICAgIH1cblxuICAgIGxldCBwYXJfd2lkdGggPSAxLCBwYXJfaGVpZ2h0ID0gMVxuICAgIGxldCBmcHMgPSAwLCBmcHNfZml4ZWQgPSB0cnVlLCBmcHNfbnVtID0gMCwgZnBzX2RlbiA9IDBcblxuICAgIGxldCB2dWlfcGFyYW1ldGVyc19wcmVzZW50X2ZsYWcgPSBnYi5yZWFkQm9vbCgpXG4gICAgaWYgKHZ1aV9wYXJhbWV0ZXJzX3ByZXNlbnRfZmxhZykge1xuICAgICAgaWYgKGdiLnJlYWRCb29sKCkpIHsgLy8gYXNwZWN0X3JhdGlvX2luZm9fcHJlc2VudF9mbGFnXG4gICAgICAgIGxldCBhc3BlY3RfcmF0aW9faWRjID0gZ2IucmVhZEJ5dGUoKVxuICAgICAgICBsZXQgcGFyX3dfdGFibGUgPSBbMSwgMTIsIDEwLCAxNiwgNDAsIDI0LCAyMCwgMzIsIDgwLCAxOCwgMTUsIDY0LCAxNjAsIDQsIDMsIDJdXG4gICAgICAgIGxldCBwYXJfaF90YWJsZSA9IFsxLCAxMSwgMTEsIDExLCAzMywgMTEsIDExLCAxMSwgMzMsIDExLCAxMSwgMzMsIDk5LCAzLCAyLCAxXVxuXG4gICAgICAgIGlmIChhc3BlY3RfcmF0aW9faWRjID4gMCAmJiBhc3BlY3RfcmF0aW9faWRjIDwgMTYpIHtcbiAgICAgICAgICBwYXJfd2lkdGggPSBwYXJfd190YWJsZVthc3BlY3RfcmF0aW9faWRjIC0gMV1cbiAgICAgICAgICBwYXJfaGVpZ2h0ID0gcGFyX2hfdGFibGVbYXNwZWN0X3JhdGlvX2lkYyAtIDFdXG4gICAgICAgIH0gZWxzZSBpZiAoYXNwZWN0X3JhdGlvX2lkYyA9PT0gMjU1KSB7XG4gICAgICAgICAgcGFyX3dpZHRoID0gZ2IucmVhZEJ5dGUoKSA8PCA4IHwgZ2IucmVhZEJ5dGUoKVxuICAgICAgICAgIHBhcl9oZWlnaHQgPSBnYi5yZWFkQnl0ZSgpIDw8IDggfCBnYi5yZWFkQnl0ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGdiLnJlYWRCb29sKCkpIHtcbiAgICAgICAgZ2IucmVhZEJvb2woKVxuICAgICAgfVxuICAgICAgaWYgKGdiLnJlYWRCb29sKCkpIHtcbiAgICAgICAgZ2IucmVhZEJpdHMoNClcbiAgICAgICAgaWYgKGdiLnJlYWRCb29sKCkpIHtcbiAgICAgICAgICBnYi5yZWFkQml0cygyNClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGdiLnJlYWRCb29sKCkpIHtcbiAgICAgICAgZ2IucmVhZFVFRygpXG4gICAgICAgIGdiLnJlYWRVRUcoKVxuICAgICAgfVxuICAgICAgaWYgKGdiLnJlYWRCb29sKCkpIHtcbiAgICAgICAgbGV0IG51bV91bml0c19pbl90aWNrID0gZ2IucmVhZEJpdHMoMzIpXG4gICAgICAgIGxldCB0aW1lX3NjYWxlID0gZ2IucmVhZEJpdHMoMzIpXG4gICAgICAgIGZwc19maXhlZCA9IGdiLnJlYWRCb29sKClcblxuICAgICAgICBmcHNfbnVtID0gdGltZV9zY2FsZVxuICAgICAgICBmcHNfZGVuID0gbnVtX3VuaXRzX2luX3RpY2sgKiAyXG4gICAgICAgIGZwcyA9IGZwc19udW0gLyBmcHNfZGVuXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHBhclNjYWxlID0gMVxuICAgIGlmIChwYXJfd2lkdGggIT09IDEgfHwgcGFyX2hlaWdodCAhPT0gMSkge1xuICAgICAgcGFyU2NhbGUgPSBwYXJfd2lkdGggLyBwYXJfaGVpZ2h0XG4gICAgfVxuXG4gICAgbGV0IGNyb3BfdW5pdF94ID0gMCwgY3JvcF91bml0X3kgPSAwXG4gICAgaWYgKGNocm9tYV9mb3JtYXRfaWRjID09PSAwKSB7XG4gICAgICBjcm9wX3VuaXRfeCA9IDFcbiAgICAgIGNyb3BfdW5pdF95ID0gMiAtIGZyYW1lX21ic19vbmx5X2ZsYWdcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN1Yl93YyA9IChjaHJvbWFfZm9ybWF0X2lkYyA9PT0gMykgPyAxIDogMlxuICAgICAgbGV0IHN1Yl9oYyA9IChjaHJvbWFfZm9ybWF0X2lkYyA9PT0gMSkgPyAyIDogMVxuICAgICAgY3JvcF91bml0X3ggPSBzdWJfd2NcbiAgICAgIGNyb3BfdW5pdF95ID0gc3ViX2hjICogKDIgLSBmcmFtZV9tYnNfb25seV9mbGFnKVxuICAgIH1cblxuICAgIGxldCBjb2RlY193aWR0aCA9IChwaWNfd2lkdGhfaW5fbWJzX21pbnVzMSArIDEpICogMTZcbiAgICBsZXQgY29kZWNfaGVpZ2h0ID0gKDIgLSBmcmFtZV9tYnNfb25seV9mbGFnKSAqICgocGljX2hlaWdodF9pbl9tYXBfdW5pdHNfbWludXMxICsgMSkgKiAxNilcblxuICAgIGNvZGVjX3dpZHRoIC09IChmcmFtZV9jcm9wX2xlZnRfb2Zmc2V0ICsgZnJhbWVfY3JvcF9yaWdodF9vZmZzZXQpICogY3JvcF91bml0X3hcbiAgICBjb2RlY19oZWlnaHQgLT0gKGZyYW1lX2Nyb3BfdG9wX29mZnNldCArIGZyYW1lX2Nyb3BfYm90dG9tX29mZnNldCkgKiBjcm9wX3VuaXRfeVxuXG4gICAgbGV0IHByZXNlbnRfd2lkdGggPSBNYXRoLmNlaWwoY29kZWNfd2lkdGggKiBwYXJTY2FsZSlcblxuICAgIGdiLmRlc3Ryb3koKVxuICAgIGdiID0gbnVsbFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2ZpbGVfc3RyaW5nOiBwcm9maWxlX3N0cmluZyxcbiAgICAgIGxldmVsX3N0cmluZzogbGV2ZWxfc3RyaW5nLFxuICAgICAgYml0X2RlcHRoOiBiaXRfZGVwdGgsXG4gICAgICBjaHJvbWFfZm9ybWF0OiBjaHJvbWFfZm9ybWF0LFxuICAgICAgY2hyb21hX2Zvcm1hdF9zdHJpbmc6IFNQU1BhcnNlci5nZXRDaHJvbWFGb3JtYXRTdHJpbmcoY2hyb21hX2Zvcm1hdCksXG5cbiAgICAgIGZyYW1lX3JhdGU6IHtcbiAgICAgICAgZml4ZWQ6IGZwc19maXhlZCxcbiAgICAgICAgZnBzOiBmcHMsXG4gICAgICAgIGZwc19kZW46IGZwc19kZW4sXG4gICAgICAgIGZwc19udW06IGZwc19udW1cbiAgICAgIH0sXG5cbiAgICAgIHBhcl9yYXRpbzoge1xuICAgICAgICB3aWR0aDogcGFyX3dpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBhcl9oZWlnaHRcbiAgICAgIH0sXG5cbiAgICAgIGNvZGVjX3NpemU6IHtcbiAgICAgICAgd2lkdGg6IGNvZGVjX3dpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvZGVjX2hlaWdodFxuICAgICAgfSxcblxuICAgICAgcHJlc2VudF9zaXplOiB7XG4gICAgICAgIHdpZHRoOiBwcmVzZW50X3dpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvZGVjX2hlaWdodFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfc2tpcFNjYWxpbmdMaXN0IChnYiwgY291bnQpIHtcbiAgICBsZXQgbGFzdF9zY2FsZSA9IDgsIG5leHRfc2NhbGUgPSA4XG4gICAgbGV0IGRlbHRhX3NjYWxlID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgaWYgKG5leHRfc2NhbGUgIT09IDApIHtcbiAgICAgICAgZGVsdGFfc2NhbGUgPSBnYi5yZWFkU0VHKClcbiAgICAgICAgbmV4dF9zY2FsZSA9IChsYXN0X3NjYWxlICsgZGVsdGFfc2NhbGUgKyAyNTYpICUgMjU2XG4gICAgICB9XG4gICAgICBsYXN0X3NjYWxlID0gKG5leHRfc2NhbGUgPT09IDApID8gbGFzdF9zY2FsZSA6IG5leHRfc2NhbGVcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0UHJvZmlsZVN0cmluZyAocHJvZmlsZUlkYykge1xuICAgIHN3aXRjaCAocHJvZmlsZUlkYykge1xuICAgICAgY2FzZSA2NjpcbiAgICAgICAgcmV0dXJuICdCYXNlbGluZSdcbiAgICAgIGNhc2UgNzc6XG4gICAgICAgIHJldHVybiAnTWFpbidcbiAgICAgIGNhc2UgODg6XG4gICAgICAgIHJldHVybiAnRXh0ZW5kZWQnXG4gICAgICBjYXNlIDEwMDpcbiAgICAgICAgcmV0dXJuICdIaWdoJ1xuICAgICAgY2FzZSAxMTA6XG4gICAgICAgIHJldHVybiAnSGlnaDEwJ1xuICAgICAgY2FzZSAxMjI6XG4gICAgICAgIHJldHVybiAnSGlnaDQyMidcbiAgICAgIGNhc2UgMjQ0OlxuICAgICAgICByZXR1cm4gJ0hpZ2g0NDQnXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ1Vua25vd24nXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldExldmVsU3RyaW5nIChsZXZlbElkYykge1xuICAgIHJldHVybiAobGV2ZWxJZGMgLyAxMCkudG9GaXhlZCgxKVxuICB9XG5cbiAgc3RhdGljIGdldENocm9tYUZvcm1hdFN0cmluZyAoY2hyb21hKSB7XG4gICAgc3dpdGNoIChjaHJvbWEpIHtcbiAgICAgIGNhc2UgNDIwOlxuICAgICAgICByZXR1cm4gJzQ6MjowJ1xuICAgICAgY2FzZSA0MjI6XG4gICAgICAgIHJldHVybiAnNDoyOjInXG4gICAgICBjYXNlIDQ0NDpcbiAgICAgICAgcmV0dXJuICc0OjQ6NCdcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnVW5rbm93bidcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdG9WaWRlb01ldGEgKHNwc0NvbmZpZykge1xuICAgIGxldCBtZXRhID0ge31cbiAgICBpZiAoc3BzQ29uZmlnICYmIHNwc0NvbmZpZy5jb2RlY19zaXplKSB7XG4gICAgICBtZXRhLmNvZGVjV2lkdGggPSBzcHNDb25maWcuY29kZWNfc2l6ZS53aWR0aFxuICAgICAgbWV0YS5jb2RlY0hlaWdodCA9IHNwc0NvbmZpZy5jb2RlY19zaXplLmhlaWdodFxuICAgICAgbWV0YS5wcmVzZW50V2lkdGggPSBzcHNDb25maWcucHJlc2VudF9zaXplLndpZHRoXG4gICAgICBtZXRhLnByZXNlbnRIZWlnaHQgPSBzcHNDb25maWcucHJlc2VudF9zaXplLmhlaWdodFxuICAgIH1cblxuICAgIG1ldGEucHJvZmlsZSA9IHNwc0NvbmZpZy5wcm9maWxlX3N0cmluZ1xuICAgIG1ldGEubGV2ZWwgPSBzcHNDb25maWcubGV2ZWxfc3RyaW5nXG4gICAgbWV0YS5iaXREZXB0aCA9IHNwc0NvbmZpZy5iaXRfZGVwdGhcbiAgICBtZXRhLmNocm9tYUZvcm1hdCA9IHNwc0NvbmZpZy5jaHJvbWFfZm9ybWF0XG5cbiAgICBtZXRhLnBhclJhdGlvID0ge1xuICAgICAgd2lkdGg6IHNwc0NvbmZpZy5wYXJfcmF0aW8ud2lkdGgsXG4gICAgICBoZWlnaHQ6IHNwc0NvbmZpZy5wYXJfcmF0aW8uaGVpZ2h0XG4gICAgfVxuXG4gICAgbWV0YS5mcmFtZVJhdGUgPSBzcHNDb25maWcuZnJhbWVfcmF0ZVxuXG4gICAgbGV0IGZwc0RlbiA9IG1ldGEuZnJhbWVSYXRlLmZwc19kZW5cbiAgICBsZXQgZnBzTnVtID0gbWV0YS5mcmFtZVJhdGUuZnBzX251bVxuICAgIG1ldGEucmVmU2FtcGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKG1ldGEudGltZXNjYWxlICogKGZwc0RlbiAvIGZwc051bSkpXG4gICAgcmV0dXJuIG1ldGE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU1BTUGFyc2VyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gSExTXG4gIE0zVThQYXJzZXI6IHJlcXVpcmUoJy4vc3JjL2hscy9kZW11eGVyL20zdThwYXJzZXInKS5kZWZhdWx0LFxuICBUc0RlbXV4ZXI6IHJlcXVpcmUoJy4vc3JjL2hscy9kZW11eGVyL3RzJykuZGVmYXVsdCxcbiAgUGxheWxpc3Q6IHJlcXVpcmUoJy4vc3JjL2hscy9wbGF5bGlzdCcpLmRlZmF1bHQsXG4gIEZsdkRlbXV4ZXI6IHJlcXVpcmUoJy4vc3JjL2Zsdi9pbmRleCcpLmRlZmF1bHRcbn07XG4iLCJpbXBvcnQgeyBpc0xlLCBVVEY4IH0gZnJvbSAneGdwbGF5ZXItdXRpbHMnXG5cbmNvbnN0IERBVEFfVFlQRVMgPSB7XG4gIE5VTUJFUjogMCxcbiAgQk9PTEVBTjogMSxcbiAgU1RSSU5HOiAyLFxuICBPQkpFQ1Q6IDMsXG4gIE1JWF9BUlJBWTogOCxcbiAgT0JKRUNUX0VORDogOSxcbiAgU1RSSUNUX0FSUkFZOiAxMCxcbiAgREFURTogMTEsXG4gIExPTkVfU1RSSU5HOiAxMlxufVxuXG4vKipcbiAqIG1ldGHkv6Hmga/op6PmnpBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQU1GUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHRoaXMucmVhZE9mZnNldCA9IHRoaXMub2Zmc2V0XG4gIH1cblxuICByZXNvbHZlIChtZXRhLCBzaXplKSB7XG4gICAgaWYgKHNpemUgPCAzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBlbm91Z2ggZGF0YSBmb3IgbWV0YWluZm8nKVxuICAgIH1cbiAgICBjb25zdCBtZXRhRGF0YSA9IHt9XG4gICAgY29uc3QgbmFtZSA9IHRoaXMucGFyc2VWYWx1ZShtZXRhKVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKG1ldGEsIHNpemUgLSBuYW1lLmJvZHlTaXplKVxuICAgIG1ldGFEYXRhW25hbWUuZGF0YV0gPSB2YWx1ZS5kYXRhXG5cbiAgICB0aGlzLnJlc2V0U3RhdHVzKClcbiAgICByZXR1cm4gbWV0YURhdGFcbiAgfVxuXG4gIHJlc2V0U3RhdHVzICgpIHtcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICB0aGlzLnJlYWRPZmZzZXQgPSB0aGlzLm9mZnNldFxuICB9XG5cbiAgcGFyc2VTdHJpbmcgKGJ1ZmZlcikge1xuICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0KVxuICAgIGNvbnN0IHN0ckxlbiA9IGR2LmdldFVpbnQxNigwLCAhaXNMZSlcbiAgICBsZXQgc3RyID0gJydcbiAgICBpZiAoc3RyTGVuID4gMCkge1xuICAgICAgc3RyID0gVVRGOC5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQgKyAyLCBzdHJMZW4pKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSAnJ1xuICAgIH1cbiAgICBsZXQgc2l6ZSA9IHN0ckxlbiArIDJcbiAgICB0aGlzLnJlYWRPZmZzZXQgKz0gc2l6ZVxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBzdHIsXG4gICAgICBib2R5U2l6ZTogc3RyTGVuICsgMlxuICAgIH1cbiAgfVxuXG4gIHBhcnNlRGF0ZSAoYnVmZmVyLCBzaXplKSB7XG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQsIHNpemUpXG4gICAgbGV0IHRzID0gZHYuZ2V0RmxvYXQ2NCgwLCAhaXNMZSlcbiAgICBjb25zdCB0aW1lT2Zmc2V0ID0gZHYuZ2V0SW50MTYoOCwgIWlzTGUpXG4gICAgdHMgKz0gdGltZU9mZnNldCAqIDYwICogMTAwMFxuXG4gICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDEwXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IG5ldyBEYXRlKHRzKSxcbiAgICAgIGJvZHlTaXplOiAxMFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlT2JqZWN0IChidWZmZXIsIHNpemUpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5wYXJzZVN0cmluZyhidWZmZXIsIHNpemUpXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBzaXplIC0gbmFtZS5ib2R5U2l6ZSlcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBuYW1lLmRhdGEsXG4gICAgICAgIHZhbHVlOiB2YWx1ZS5kYXRhXG4gICAgICB9LFxuICAgICAgYm9keVNpemU6IG5hbWUuYm9keVNpemUgKyB2YWx1ZS5ib2R5U2l6ZSxcbiAgICAgIGlzT2JqRW5kOiB2YWx1ZS5pc09iakVuZFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlTG9uZ1N0cmluZyAoYnVmZmVyKSB7XG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQpXG4gICAgY29uc3Qgc3RyTGVuID0gZHYuZ2V0VWludDMyKDAsICFpc0xlKVxuICAgIGxldCBzdHIgPSAnJ1xuICAgIGlmIChzdHJMZW4gPiAwKSB7XG4gICAgICBzdHIgPSBVVEY4LmRlY29kZShuZXcgVWludDhBcnJheShidWZmZXIsIHRoaXMucmVhZE9mZnNldCArIDIsIHN0ckxlbikpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9ICcnXG4gICAgfVxuICAgIC8vIGNvbnN0IHNpemUgPSBzdHJMZW4gKyA0O1xuICAgIHRoaXMucmVhZE9mZnNldCArPSBzdHJMZW4gKyA0XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHN0cixcbiAgICAgIGJvZHlTaXplOiBzdHJMZW4gKyA0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOino+aekG1ldGHkuK3nmoTlj5jph49cbiAgICovXG4gIHBhcnNlVmFsdWUgKGRhdGEsIHNpemUpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKClcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICBidWZmZXIgPSBkYXRhXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1ZmZlciA9IGRhdGEuYnVmZmVyXG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIE5VTUJFUixcbiAgICAgIEJPT0xFQU4sXG4gICAgICBTVFJJTkcsXG4gICAgICBPQkpFQ1QsXG4gICAgICBNSVhfQVJSQVksXG4gICAgICBPQkpFQ1RfRU5ELFxuICAgICAgU1RSSUNUX0FSUkFZLFxuICAgICAgREFURSxcbiAgICAgIExPTkVfU1RSSU5HXG4gICAgfSA9IERBVEFfVFlQRVNcbiAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldCwgc2l6ZSlcbiAgICBsZXQgaXNPYmpFbmQgPSBmYWxzZVxuICAgIGNvbnN0IHR5cGUgPSBkYXRhVmlldy5nZXRVaW50OCgwKVxuICAgIGxldCBvZmZzZXQgPSAxXG4gICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDFcbiAgICBsZXQgdmFsdWUgPSBudWxsXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgTlVNQkVSOiB7XG4gICAgICAgIHZhbHVlID0gZGF0YVZpZXcuZ2V0RmxvYXQ2NCgxLCAhaXNMZSlcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDhcbiAgICAgICAgb2Zmc2V0ICs9IDhcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgQk9PTEVBTjoge1xuICAgICAgICBjb25zdCBib29sTnVtID0gZGF0YVZpZXcuZ2V0VWludDgoMSlcbiAgICAgICAgdmFsdWUgPSAhIWJvb2xOdW1cbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDFcbiAgICAgICAgb2Zmc2V0ICs9IDFcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgU1RSSU5HOiB7XG4gICAgICAgIGNvbnN0IHN0ciA9IHRoaXMucGFyc2VTdHJpbmcoYnVmZmVyKVxuICAgICAgICB2YWx1ZSA9IHN0ci5kYXRhXG4gICAgICAgIG9mZnNldCArPSBzdHIuYm9keVNpemVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgT0JKRUNUOiB7XG4gICAgICAgIHZhbHVlID0ge31cbiAgICAgICAgbGV0IG9iakVuZFNpemUgPSAwXG4gICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50MzIoc2l6ZSAtIDQsICFpc0xlKSAmIDB4MDBGRkZGRkYpIHtcbiAgICAgICAgICBvYmpFbmRTaXplID0gM1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMucmVhZE9mZnNldCArPSBvZmZzZXQgLSAxO1xuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgc2l6ZSAtIDQpIHtcbiAgICAgICAgICBjb25zdCBhbWZPYmogPSB0aGlzLnBhcnNlT2JqZWN0KGJ1ZmZlciwgc2l6ZSAtIG9mZnNldCAtIG9iakVuZFNpemUpXG4gICAgICAgICAgaWYgKGFtZk9iai5pc09iamVjdEVuZCkgeyBicmVhayB9XG4gICAgICAgICAgdmFsdWVbYW1mT2JqLmRhdGEubmFtZV0gPSBhbWZPYmouZGF0YS52YWx1ZVxuICAgICAgICAgIG9mZnNldCArPSBhbWZPYmouYm9keVNpemVcbiAgICAgICAgfVxuICAgICAgICBpZiAob2Zmc2V0IDw9IHNpemUgLSAzKSB7XG4gICAgICAgICAgY29uc3QgbWFyayA9IGRhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQgLSAxLCAhaXNMZSkgJiAweDAwRkZGRkZGXG4gICAgICAgICAgaWYgKG1hcmsgPT09IDkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZE9mZnNldCArPSAzXG4gICAgICAgICAgICBvZmZzZXQgKz0gM1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSBNSVhfQVJSQVk6IHtcbiAgICAgICAgdmFsdWUgPSB7fVxuICAgICAgICBvZmZzZXQgKz0gNFxuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gNFxuICAgICAgICBsZXQgb2JqRW5kU2l6ZSA9IDBcbiAgICAgICAgaWYgKChkYXRhVmlldy5nZXRVaW50MzIoc2l6ZSAtIDQsICFpc0xlKSAmIDB4MDBGRkZGRkYpID09PSA5KSB7XG4gICAgICAgICAgb2JqRW5kU2l6ZSA9IDNcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCBzaXplIC0gOCkge1xuICAgICAgICAgIGNvbnN0IGFtZlZhciA9IHRoaXMucGFyc2VPYmplY3QoYnVmZmVyLCBzaXplIC0gb2Zmc2V0IC0gb2JqRW5kU2l6ZSlcbiAgICAgICAgICBpZiAoYW1mVmFyLmlzT2JqZWN0RW5kKSB7IGJyZWFrIH1cbiAgICAgICAgICB2YWx1ZVthbWZWYXIuZGF0YS5uYW1lXSA9IGFtZlZhci5kYXRhLnZhbHVlXG4gICAgICAgICAgb2Zmc2V0ICs9IGFtZlZhci5ib2R5U2l6ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChvZmZzZXQgPD0gc2l6ZSAtIDMpIHtcbiAgICAgICAgICBjb25zdCBtYXJrZXIgPSBkYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0IC0gMSwgIWlzTGUpICYgMHgwMEZGRkZGRlxuICAgICAgICAgIGlmIChtYXJrZXIgPT09IDkpIHtcbiAgICAgICAgICAgIG9mZnNldCArPSAzXG4gICAgICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gM1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9CSkVDVF9FTkQ6IHtcbiAgICAgICAgdmFsdWUgPSBudWxsXG4gICAgICAgIGlzT2JqRW5kID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNUUklDVF9BUlJBWToge1xuICAgICAgICB2YWx1ZSA9IFtdXG4gICAgICAgIGNvbnN0IGFyckxlbmd0aCA9IGRhdGFWaWV3LmdldFVpbnQzMigxLCAhaXNMZSlcbiAgICAgICAgb2Zmc2V0ICs9IDRcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMucGFyc2VWYWx1ZShidWZmZXIsIHNpemUgLSBvZmZzZXQpXG4gICAgICAgICAgdmFsdWUucHVzaChzY3JpcHQuZGF0YSlcbiAgICAgICAgICBvZmZzZXQgKz0gc2NyaXB0LmJvZHlTaXplXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSBEQVRFOiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLnBhcnNlRGF0ZShidWZmZXIsIHNpemUgLSAxKVxuICAgICAgICB2YWx1ZSA9IGRhdGUuZGF0YVxuICAgICAgICBvZmZzZXQgKz0gZGF0ZS5ib2R5U2l6ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlIExPTkVfU1RSSU5HOiB7XG4gICAgICAgIGNvbnN0IGxvbmdTdHIgPSB0aGlzLnBhcnNlTG9uZ1N0cmluZyhidWZmZXIsIHNpemUgLSAxKVxuICAgICAgICB2YWx1ZSA9IGxvbmdTdHIuZGF0YVxuICAgICAgICBvZmZzZXQgKz0gbG9uZ1N0ci5ib2R5U2l6ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIG9mZnNldCA9IHNpemVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogdmFsdWUsXG4gICAgICBib2R5U2l6ZTogb2Zmc2V0LFxuICAgICAgaXNPYmpFbmQ6IGlzT2JqRW5kXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBFVkVOVFMsIEF1ZGlvVHJhY2tNZXRhLCBWaWRlb1RyYWNrTWV0YSB9IGZyb20gJ3hncGxheWVyLXV0aWxzJztcbmltcG9ydCB7IFNwc1BhcnNlciB9IGZyb20gJ3hncGxheWVyLWNvZGVjJztcbmltcG9ydCB7IFZpZGVvVHJhY2ssIEF1ZGlvVHJhY2sgfSBmcm9tICd4Z3BsYXllci1idWZmZXInXG5cbmltcG9ydCBBTUZQYXJzZXIgZnJvbSAnLi9hbWYtcGFyc2VyJ1xuXG5jb25zdCBERU1VWF9FVkVOVFMgPSBFVkVOVFMuREVNVVhfRVZFTlRTO1xuXG5jbGFzcyBGbHZEZW11eGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX2ZpcnN0RnJhZ21lbnRMb2FkZWQgPSBmYWxzZVxuICAgIHRoaXMuX3RyYWNrTnVtID0gMFxuICAgIHRoaXMuX2hhc1NjcmlwdCA9IGZhbHNlXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLm9uKERFTVVYX0VWRU5UUy5ERU1VWF9TVEFSVCwgdGhpcy5kb1BhcnNlRmx2LmJpbmQodGhpcykpXG4gIH1cblxuICAvKipcbiAgICogaWYgdGhlIGZsdiBoZWFkIGlzIHZhbGlkXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzRmx2RmlsZSAoZGF0YSkge1xuICAgIHJldHVybiAhKGRhdGFbMF0gIT09IDB4NDYgfHwgZGF0YVsxXSAhPT0gMHg0QyB8fCBkYXRhWzJdICE9PSAweDU2IHx8IGRhdGFbM10gIT09IDB4MDEpXG4gIH1cblxuICAvKipcbiAgICogSWYgdGhlIHN0cmVhbSBoYXMgYXVkaW8gb3IgdmlkZW8uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJlYW1GbGFnIC0gRGF0YSBmcm9tIHRoZSBzdHJlYW0gd2hpY2ggaXMgZGVmaW5lIHdoZXRoZXIgdGhlIGF1ZGlvIC8gdmlkZW8gdHJhY2sgaXMgZXhpc3QuXG4gICAqL1xuICBzdGF0aWMgZ2V0UGxheVR5cGUgKHN0cmVhbUZsYWcpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBoYXNWaWRlbzogZmFsc2UsXG4gICAgICBoYXNBdWRpbzogZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoc3RyZWFtRmxhZyAmIDB4MDEgPiAwKSB7XG4gICAgICByZXN1bHQuaGFzVmlkZW8gPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHN0cmVhbUZsYWcgJiAweDA0ID4gMCkge1xuICAgICAgcmVzdWx0Lmhhc0F1ZGlvID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGRvUGFyc2VGbHYgKCkge1xuICAgIGlmICghdGhpcy5fZmlyc3RGcmFnbWVudExvYWRlZCkge1xuICAgICAgaWYgKHRoaXMubG9hZGVyQnVmZmVyLmxlbmd0aCA8IDEzKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMTMpXG4gICAgICB0aGlzLnBhcnNlRmx2SGVhZGVyKGhlYWRlcilcbiAgICAgIHRoaXMuZG9QYXJzZUZsdigpIC8vIOmAkuW9kuiwg+eUqO+8jOe7p+e7reino+aekGZsdua1gVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5sb2FkZXJCdWZmZXIubGVuZ3RoIDwgMTEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgY2h1bms7XG5cbiAgICAgIGxldCBsb29wTWF4ID0gMTAwMDAwIC8vIOmYsuatouatu+W+queOr+S6p+eUn1xuICAgICAgZG8ge1xuICAgICAgICBjaHVuayA9IHRoaXMuX3BhcnNlRmx2VGFnKClcbiAgICAgIH0gd2hpbGUgKGNodW5rICYmIGxvb3BNYXgtLSA+IDApXG5cbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfQ09NUExFVEUpXG4gICAgfVxuICB9XG5cbiAgcGFyc2VGbHZIZWFkZXIgKGhlYWRlcikge1xuICAgIGlmICghRmx2RGVtdXhlci5pc0ZsdkZpbGUoaGVhZGVyKSkge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgbmV3IEVycm9yKCdpbnZhbGlkIGZsdiBmaWxlJykpXG4gICAgICB0aGlzLmRvUGFyc2VGbHYoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maXJzdEZyYWdtZW50TG9hZGVkID0gdHJ1ZVxuICAgICAgY29uc3QgcGxheVR5cGUgPSBGbHZEZW11eGVyLmdldFBsYXlUeXBlKGhlYWRlcls0XSlcblxuICAgICAgaWYgKHBsYXlUeXBlLmhhc1ZpZGVvKSB7XG4gICAgICAgIHRoaXMuaW5pdFZpZGVvVHJhY2soKVxuICAgICAgfVxuXG4gICAgICBpZiAocGxheVR5cGUuaGFzQXVkaW8pIHtcbiAgICAgICAgdGhpcy5pbml0QXVkaW9UcmFjaygpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZG9QYXJzZUZsdigpXG4gIH1cblxuICAvKipcbiAgICogaW5pdCBkZWZhdWx0IHZpZGVvIHRyYWNrIGNvbmZpZ3NcbiAgICovXG4gIGluaXRWaWRlb1RyYWNrICgpIHtcbiAgICB0aGlzLl90cmFja051bSsrXG4gICAgbGV0IHZpZGVvVHJhY2sgPSBuZXcgVmlkZW9UcmFjaygpXG4gICAgdmlkZW9UcmFjay5tZXRhID0gbmV3IFZpZGVvVHJhY2tNZXRhKClcbiAgICB2aWRlb1RyYWNrLmlkID0gdmlkZW9UcmFjay5tZXRhLmlkID0gdGhpcy5fdHJhY2tOdW1cblxuICAgIHRoaXMudHJhY2tzLnZpZGVvVHJhY2sgPSB2aWRlb1RyYWNrXG4gIH1cblxuICAvKipcbiAgICogaW5pdCBkZWZhdWx0IGF1ZGlvIHRyYWNrIGNvbmZpZ3NcbiAgICovXG4gIGluaXRBdWRpb1RyYWNrICgpIHtcbiAgICB0aGlzLl90cmFja051bSsrXG4gICAgbGV0IGF1ZGlvVHJhY2sgPSBuZXcgQXVkaW9UcmFjaygpXG4gICAgYXVkaW9UcmFjay5tZXRhID0gbmV3IEF1ZGlvVHJhY2tNZXRhKClcbiAgICBhdWRpb1RyYWNrLmlkID0gYXVkaW9UcmFjay5tZXRhLmlkID0gdGhpcy5fdHJhY2tOdW1cblxuICAgIHRoaXMudHJhY2tzLmF1ZGlvVHJhY2sgPSBhdWRpb1RyYWNrXG4gIH1cblxuICAvKipcbiAgICogUGFja2FnZSB0aGUgZGF0YSBhcyB0aGUgZm9sbG93aW5nIGRhdGEgc3RydWN0dXJlXG4gICAqIHtcbiAgICogICAgZGF0YTogVWludDhBcnJheS4gdGhlIFN0cmVhbSBkYXRhLlxuICAgKiAgICBpbmZvOiBUaGUgZmlyc3QgYnl0ZSBpbmZvIG9mIHRoZSBUYWcuXG4gICAqICAgIHRhZ1R5cGU6IDjjgIE544CBMThcbiAgICogICAgdGltZVN0YW1wOiB0aGUgdGltZXN0ZW1wXG4gICAqIH1cbiAgICovXG4gIF9wYXJzZUZsdlRhZyAoKSB7XG4gICAgaWYgKHRoaXMubG9hZGVyQnVmZmVyLmxlbmd0aCA8IDExKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgY2h1bmsgPSB0aGlzLl9wYXJzZUZsdlRhZ0hlYWRlcigpXG4gICAgaWYgKGNodW5rKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzQ2h1bmsoY2h1bmspXG4gICAgfVxuICAgIHJldHVybiBjaHVua1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSAxMSBieXRlIHRhZyBIZWFkZXJcbiAgICovXG4gIF9wYXJzZUZsdlRhZ0hlYWRlciAoKSB7XG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBsZXQgY2h1bmsgPSB7fVxuXG4gICAgbGV0IHRhZ1R5cGUgPSB0aGlzLmxvYWRlckJ1ZmZlci50b0ludChvZmZzZXQsIDEpXG4gICAgb2Zmc2V0ICs9IDFcblxuICAgIC8vIDIgYml0IEZNUyByZXNlcnZlZCwgMSBiaXQgZmlsdGVyZWQsIDUgYml0IHRhZyB0eXBlXG4gICAgY2h1bmsuZmlsdGVyZWQgPSAodGFnVHlwZSAmIDMyKSA+Pj4gNVxuICAgIGNodW5rLnRhZ1R5cGUgPSB0YWdUeXBlICYgMzFcblxuICAgIC8vIDMgQnl0ZSBkYXRhc2l6ZVxuICAgIGNodW5rLmRhdGFzaXplID0gdGhpcy5sb2FkZXJCdWZmZXIudG9JbnQob2Zmc2V0LCAzKVxuICAgIG9mZnNldCArPSAzXG5cbiAgICBpZiAoKGNodW5rLnRhZ1R5cGUgIT09IDggJiYgY2h1bmsudGFnVHlwZSAhPT0gOSAmJiBjaHVuay50YWdUeXBlICE9PSAxMSAmJiBjaHVuay50YWdUeXBlICE9PSAxOCkgfHxcbiAgICAgIHRoaXMubG9hZGVyQnVmZmVyLnRvSW50KDgsIDMpICE9PSAwKSB7XG4gICAgICBpZiAodGhpcy5sb2FkZXJCdWZmZXIgJiYgdGhpcy5sb2FkZXJCdWZmZXIubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgxKVxuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcigndGFnVHlwZSAnICsgY2h1bmsudGFnVHlwZSksIGZhbHNlKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb2FkZXJCdWZmZXIubGVuZ3RoIDwgY2h1bmsuZGF0YXNpemUgKyAxNSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyByZWFkIHRoZSBkYXRhLlxuICAgIHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDQpXG5cbiAgICAvLyAzIEJ5dGUgdGltZXN0YW1wXG4gICAgbGV0IHRpbWVzdGFtcCA9IHRoaXMubG9hZGVyQnVmZmVyLnRvSW50KDAsIDMpXG4gICAgdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMylcblxuICAgIC8vIDEgQnl0ZSB0aW1lc3RhbXBFeHRcbiAgICBsZXQgdGltZXN0YW1wRXh0ID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMSlbMF1cbiAgICBpZiAodGltZXN0YW1wRXh0ID4gMCkge1xuICAgICAgdGltZXN0YW1wICs9IHRpbWVzdGFtcEV4dCAqIDB4MTAwMDAwMFxuICAgIH1cblxuICAgIGNodW5rLmR0cyA9IHRpbWVzdGFtcFxuXG4gICAgLy8gc3RyZWFtSWRcbiAgICB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgzKVxuICAgIHJldHVybiBjaHVua1xuICB9XG5cbiAgX3Byb2Nlc3NDaHVuayAoY2h1bmspIHtcbiAgICBzd2l0Y2ggKGNodW5rLnRhZ1R5cGUpIHtcbiAgICAgIGNhc2UgMTg6XG4gICAgICAgIHRoaXMuX3BhcnNlU2NyaXB0RGF0YShjaHVuaylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgdGhpcy5fcGFyc2VBQUNEYXRhKGNodW5rKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSA5OlxuICAgICAgICB0aGlzLl9wYXJzZUhldmNEYXRhKGNodW5rKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAxMTpcbiAgICAgICAgLy8gZm9yIHNvbWUgQ0ROIHRoYXQgZGlkIG5vdCBwcm9jZXNzIHRoZSBjdXJyZWN0IFJUTVAgbWVzc2FnZXNcbiAgICAgICAgdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMylcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHBhcnNlIGZsdiBzY3JpcHQgZGF0YVxuICAgKiBAcGFyYW0gY2h1bmtcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9wYXJzZVNjcmlwdERhdGEgKGNodW5rKSB7XG4gICAgbGV0IGF1ZGlvVHJhY2sgPSB0aGlzLnRyYWNrcy5hdWRpb1RyYWNrXG4gICAgbGV0IHZpZGVvVHJhY2sgPSB0aGlzLnRyYWNrcy52aWRlb1RyYWNrXG5cbiAgICBsZXQgZGF0YSA9IHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KGNodW5rLmRhdGFzaXplKVxuXG4gICAgY29uc3QgaW5mbyA9IG5ldyBBTUZQYXJzZXIoKS5yZXNvbHZlKGRhdGEsIGRhdGEubGVuZ3RoKVxuXG4gICAgY29uc3Qgb25NZXRhRGF0YSA9IHRoaXMuX2NvbnRleHQub25NZXRhRGF0YSA9IGluZm8gPyBpbmZvLm9uTWV0YURhdGEgOiB1bmRlZmluZWRcblxuICAgIC8vIGZpbGwgbWVkaWFJbmZvXG4gICAgdGhpcy5fY29udGV4dC5tZWRpYUluZm8uZHVyYXRpb24gPSBvbk1ldGFEYXRhLmR1cmF0aW9uXG4gICAgdGhpcy5fY29udGV4dC5tZWRpYUluZm8uaGFzVmlkZW8gPSBvbk1ldGFEYXRhLmhhc1ZpZGVvXG4gICAgdGhpcy5fY29udGV4dC5tZWRpYUluZm8uaHNhQXVkaW8gPSBvbk1ldGFEYXRhLmhhc0F1ZGlvXG5cbiAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLl9kYXRhc2l6ZVZhbGlkYXRvcihjaHVuay5kYXRhc2l6ZSlcbiAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVESUFfSU5GTylcbiAgICAgIHRoaXMuX2hhc1NjcmlwdCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBFZGl0IGRlZmF1bHQgbWV0YS5cbiAgICBpZiAoYXVkaW9UcmFjayAmJiAhYXVkaW9UcmFjay5oYXNTcGVjaWZpY0NvbmZpZykge1xuICAgICAgbGV0IG1ldGEgPSBhdWRpb1RyYWNrLm1ldGFcbiAgICAgIGlmIChvbk1ldGFEYXRhLmF1ZGlvc2FtcGxlcmF0ZSkge1xuICAgICAgICBtZXRhLnNhbXBsZVJhdGUgPSBvbk1ldGFEYXRhLmF1ZGlvc2FtcGxlcmF0ZVxuICAgICAgfVxuXG4gICAgICBpZiAob25NZXRhRGF0YS5hdWRpb2NoYW5uZWxzKSB7XG4gICAgICAgIG1ldGEuY2hhbm5lbENvdW50ID0gb25NZXRhRGF0YS5hdWRpb2NoYW5uZWxzXG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAob25NZXRhRGF0YS5hdWRpb3NhbXBsZXJhdGUpIHtcbiAgICAgICAgY2FzZSA0NDEwMDpcbiAgICAgICAgICBtZXRhLnNhbXBsZVJhdGVJbmRleCA9IDRcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDIyMDUwOlxuICAgICAgICAgIG1ldGEuc2FtcGxlUmF0ZUluZGV4ID0gN1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMTEwMjU6XG4gICAgICAgICAgbWV0YS5zYW1wbGVSYXRlSW5kZXggPSAxMFxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2aWRlb1RyYWNrICYmICF2aWRlb1RyYWNrLmhhc1NwZWNpZmljQ29uZmlnKSB7XG4gICAgICBsZXQgbWV0YSA9IHZpZGVvVHJhY2subWV0YVxuICAgICAgaWYgKHR5cGVvZiBvbk1ldGFEYXRhLmZyYW1lcmF0ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbGV0IGZwc051bSA9IE1hdGguZmxvb3Iob25NZXRhRGF0YS5mcmFtZXJhdGUgKiAxMDAwKVxuICAgICAgICBpZiAoZnBzTnVtID4gMCkge1xuICAgICAgICAgIGxldCBmcHMgPSBmcHNOdW0gLyAxMDAwXG4gICAgICAgICAgaWYgKCFtZXRhLmZyYW1lUmF0ZSkge1xuICAgICAgICAgICAgbWV0YS5mcmFtZVJhdGUgPSB7fVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZXRhLmZyYW1lUmF0ZS5maXhlZCA9IHRydWVcbiAgICAgICAgICBtZXRhLmZyYW1lUmF0ZS5mcHMgPSBmcHNcbiAgICAgICAgICBtZXRhLmZyYW1lUmF0ZS5mcHNfbnVtID0gZnBzTnVtXG4gICAgICAgICAgbWV0YS5mcmFtZVJhdGUuZnBzX2RlbiA9IDEwMDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hYWNTZXF1ZW5jZUhlYWRlclBhcnNlciAoZGF0YSkge1xuICAgIGxldCByZXQgPSB7fVxuICAgIHJldC5oYXNTcGVjaWZpY0NvbmZpZyA9IHRydWVcbiAgICByZXQub2JqZWN0VHlwZSA9IGRhdGFbMV0gPj4+IDNcbiAgICByZXQuc2FtcGxlUmF0ZUluZGV4ID0gKChkYXRhWzFdICYgNykgPDwgMSkgfCAoZGF0YVsyXSA+Pj4gNylcbiAgICByZXQuYXVkaW9zYW1wbGVyYXRlID0gdGhpcy5fc3dpdGNoQXVkaW9TYW1wbGVSYXRlKHJldC5zYW1wbGVSYXRlSW5kZXgpXG4gICAgcmV0LmNoYW5uZWxDb3VudCA9IChkYXRhWzJdICYgMTIwKSA+Pj4gM1xuICAgIHJldC5mcmFtZUxlbmd0aCA9IChkYXRhWzJdICYgNCkgPj4+IDJcbiAgICByZXQuZGVwZW5kc09uQ29yZUNvZGVyID0gKGRhdGFbMl0gJiAyKSA+Pj4gMVxuICAgIHJldC5leHRlbnNpb25GbGFnSW5kZXggPSBkYXRhWzJdICYgMVxuXG4gICAgcmV0LmNvZGVjID0gYG1wNGEuNDAuJHtyZXQub2JqZWN0VHlwZX1gXG4gICAgbGV0IHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGV4dGVuc2lvblNhbXBsaW5nSW5kZXg7XG5cbiAgICBsZXQgY29uZmlnO1xuICAgIGxldCBzYW1wbGluZ0luZGV4ID0gcmV0LnNhbXBsZVJhdGVJbmRleDtcblxuICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMSkge1xuICAgICAgLy8gZmlyZWZveDogdXNlIFNCUiAoSEUtQUFDKSBpZiBmcmVxIGxlc3MgdGhhbiAyNGtIelxuICAgICAgaWYgKHJldC5zYW1wbGVSYXRlSW5kZXggPj0gNikge1xuICAgICAgICByZXQub2JqZWN0VHlwZSA9IDU7XG4gICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSg0KTtcbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSW5kZXggLSAzO1xuICAgICAgfSBlbHNlIHsgLy8gdXNlIExDLUFBQ1xuICAgICAgICByZXQub2JqZWN0VHlwZSA9IDI7XG4gICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKTtcbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCA9IHNhbXBsaW5nSW5kZXg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICE9PSAtMSkge1xuICAgICAgLy8gYW5kcm9pZDogYWx3YXlzIHVzZSBMQy1BQUNcbiAgICAgIHJldC5vYmplY3RUeXBlID0gMjtcbiAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKTtcbiAgICAgIGV4dGVuc2lvblNhbXBsaW5nSW5kZXggPSBzYW1wbGluZ0luZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3Igb3RoZXIgYnJvd3NlcnMsIGUuZy4gY2hyb21lLi4uXG4gICAgICAvLyBBbHdheXMgdXNlIEhFLUFBQyB0byBtYWtlIGl0IGVhc2llciB0byBzd2l0Y2ggYWFjIGNvZGVjIHByb2ZpbGVcbiAgICAgIHJldC5vYmplY3RUeXBlID0gNTtcbiAgICAgIGV4dGVuc2lvblNhbXBsaW5nSW5kZXggPSByZXQuc2FtcGxlUmF0ZUluZGV4O1xuICAgICAgY29uZmlnID0gbmV3IEFycmF5KDQpO1xuXG4gICAgICBpZiAocmV0LnNhbXBsZVJhdGVJbmRleCA+PSA2KSB7XG4gICAgICAgIGV4dGVuc2lvblNhbXBsaW5nSW5kZXggPSByZXQuc2FtcGxlUmF0ZUluZGV4IC0gMztcbiAgICAgIH0gZWxzZSBpZiAocmV0LmNoYW5uZWxDb3VudCA9PT0gMSkgeyAvLyBNb25vIGNoYW5uZWxcbiAgICAgICAgcmV0Lm9iamVjdFR5cGUgPSAyO1xuICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoMik7XG4gICAgICAgIGV4dGVuc2lvblNhbXBsaW5nSW5kZXggPSByZXQuc2FtcGxlUmF0ZUluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZ1swXSA9IHJldC5vYmplY3RUeXBlIDw8IDM7XG4gICAgY29uZmlnWzBdIHw9IChyZXQuc2FtcGxlUmF0ZUluZGV4ICYgMHgwRikgPj4+IDE7XG4gICAgY29uZmlnWzFdID0gKHJldC5zYW1wbGVSYXRlSW5kZXggJiAweDBGKSA8PCA3O1xuICAgIGNvbmZpZ1sxXSB8PSAocmV0LmNoYW5uZWxDb3VudCAmIDB4MEYpIDw8IDM7XG4gICAgaWYgKHJldC5vYmplY3RUeXBlID09PSA1KSB7XG4gICAgICBjb25maWdbMV0gfD0gKChleHRlbnNpb25TYW1wbGluZ0luZGV4ICYgMHgwRikgPj4+IDEpO1xuICAgICAgY29uZmlnWzJdID0gKGV4dGVuc2lvblNhbXBsaW5nSW5kZXggJiAweDAxKSA8PCA3O1xuICAgICAgLy8gZXh0ZW5kZWQgYXVkaW8gb2JqZWN0IHR5cGU6IGZvcmNlIHRvIDIgKExDLUFBQylcbiAgICAgIGNvbmZpZ1syXSB8PSAoMiA8PCAyKTtcbiAgICAgIGNvbmZpZ1szXSA9IDA7XG4gICAgfVxuICAgIHJldC5jb25maWcgPSBjb25maWdcbiAgICByZXR1cm4gcmV0XG4gIH1cblxuICBfcGFyc2VBQUNEYXRhIChjaHVuaykge1xuICAgIGxldCB0cmFjayA9IHRoaXMudHJhY2tzLmF1ZGlvVHJhY2tcbiAgICBpZiAoIXRyYWNrKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgbWV0YSA9IHRyYWNrLm1ldGFcblxuICAgIGlmICghbWV0YSkge1xuICAgICAgdHJhY2subWV0YSA9IG5ldyBBdWRpb1RyYWNrTWV0YSgpXG4gICAgICBtZXRhID0gdHJhY2subWV0YTtcbiAgICB9XG5cbiAgICBsZXQgaW5mbyA9IHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDEpWzBdXG5cbiAgICBjaHVuay5kYXRhID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoY2h1bmsuZGF0YXNpemUgLSAxKVxuXG4gICAgbGV0IGZvcm1hdCA9IChpbmZvICYgMjQwKSA+Pj4gNFxuXG4gICAgdHJhY2suZm9ybWF0ID0gZm9ybWF0XG5cbiAgICBpZiAoZm9ybWF0ICE9PSAxMCkge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgbmV3IEVycm9yKGBpbnZhbGlkIGF1ZGlvIGZvcm1hdDogJHtmb3JtYXR9YCkpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gMTAgJiYgIXRoaXMuX2hhc0F1ZGlvU2VxdWVuY2UpIHtcbiAgICAgIG1ldGEuc2FtcGxlUmF0ZSA9IHRoaXMuX3N3aXRjaEF1ZGlvU2FtcGxpbmdGcmVxdWVuY3koaW5mbylcbiAgICAgIG1ldGEuc2FtcGxlUmF0ZUluZGV4ID0gKGluZm8gJiAxMikgPj4+IDJcbiAgICAgIG1ldGEuZnJhbWVMZW50aCA9IChpbmZvICYgMikgPj4+IDFcbiAgICAgIG1ldGEuY2hhbm5lbENvdW50ID0gaW5mbyAmIDFcbiAgICAgIG1ldGEucmVmU2FtcGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKDEwMjQgLyBtZXRhLmF1ZGlvU2FtcGxlUmF0ZSAqIG1ldGEudGltZXNjYWxlKVxuICAgIH1cblxuICAgIGxldCBhdWRpb1NhbXBsZVJhdGUgPSBtZXRhLmF1ZGlvU2FtcGxlUmF0ZVxuICAgIGxldCBhdWRpb1NhbXBsZVJhdGVJbmRleCA9IG1ldGEuc2FtcGxlUmF0ZUluZGV4XG4gICAgbGV0IHJlZlNhbXBsZUR1cmF0aW9uID0gbWV0YS5yZWZTYW1wbGVEdXJhdGlvblxuXG4gICAgZGVsZXRlIGNodW5rLnRhZ1R5cGVcbiAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLl9kYXRhc2l6ZVZhbGlkYXRvcihjaHVuay5kYXRhc2l6ZSlcblxuICAgIGlmIChjaHVuay5kYXRhWzBdID09PSAwKSB7IC8vIEFBQyBTZXF1ZW5jZSBIZWFkZXJcbiAgICAgIGxldCBhYWNIZWFkZXIgPSB0aGlzLl9hYWNTZXF1ZW5jZUhlYWRlclBhcnNlcihjaHVuay5kYXRhKVxuICAgICAgYXVkaW9TYW1wbGVSYXRlID0gYWFjSGVhZGVyLmF1ZGlvc2FtcGxlcmF0ZSB8fCBtZXRhLmF1ZGlvU2FtcGxlUmF0ZVxuICAgICAgYXVkaW9TYW1wbGVSYXRlSW5kZXggPSBhYWNIZWFkZXIuc2FtcGxlUmF0ZUluZGV4IHx8IG1ldGEuc2FtcGxlUmF0ZUluZGV4XG4gICAgICByZWZTYW1wbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoMTAyNCAvIGF1ZGlvU2FtcGxlUmF0ZSAqIG1ldGEudGltZXNjYWxlKVxuXG4gICAgICBtZXRhLmNoYW5uZWxDb3VudCA9IGFhY0hlYWRlci5jaGFubmVsQ291bnRcbiAgICAgIG1ldGEuc2FtcGxlUmF0ZSA9IGF1ZGlvU2FtcGxlUmF0ZVxuICAgICAgbWV0YS5zYW1wbGVSYXRlSW5kZXggPSBhdWRpb1NhbXBsZVJhdGVJbmRleFxuICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IHJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICBtZXRhLmR1cmF0aW9uID0gdGhpcy5fY29udGV4dC5tZWRpYUluZm8uZHVyYXRpb24gKiBtZXRhLnRpbWVzY2FsZVxuICAgICAgbWV0YS5jb25maWcgPSBhYWNIZWFkZXIuY29uZmlnXG4gICAgICBtZXRhLm9iamVjdFR5cGUgPSBhYWNIZWFkZXIub2JqZWN0VHlwZTtcblxuICAgICAgY29uc3QgYXVkaW9NZWRpYSA9IHRoaXMuX2NvbnRleHQubWVkaWFJbmZvLmF1ZGlvXG5cbiAgICAgIC8vIGZpbGwgYXVkaW8gbWVkaWEgaW5mb1xuICAgICAgYXVkaW9NZWRpYS5jb2RlYyA9IGFhY0hlYWRlci5jb2RlY1xuICAgICAgYXVkaW9NZWRpYS5jaGFubmVsQ291bnQgPSBhYWNIZWFkZXIuY2hhbm5lbENvdW50XG4gICAgICBhdWRpb01lZGlhLnNhbXBsZVJhdGUgPSBhdWRpb1NhbXBsZVJhdGVcbiAgICAgIGF1ZGlvTWVkaWEuc2FtcGxlUmF0ZUluZGV4ID0gYWFjSGVhZGVyLmF1ZGlvU2FtcGxlUmF0ZUluZGV4XG5cbiAgICAgIGlmICh0aGlzLl9oYXNTY3JpcHQgJiYgIXRoaXMuX2hhc0F1ZGlvU2VxdWVuY2UpIHtcbiAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICdhdWRpbycpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2hhc1NjcmlwdCAmJiB0aGlzLl9oYXNBdWRpb1NlcXVlbmNlKSB7XG4gICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAnYXVkaW8nKVxuICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkFVRElPX01FVEFEQVRBX0NIQU5HRSlcbiAgICAgICAgLy8gdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICdhdWRpbycpXG4gICAgICB9XG4gICAgICB0aGlzLl9oYXNBdWRpb1NlcXVlbmNlID0gdHJ1ZVxuXG4gICAgICB0aGlzLl9tZXRhQ2hhbmdlID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fbWV0YUNoYW5nZSkge1xuICAgICAgICBjaHVuay5vcHRpb25zID0ge1xuICAgICAgICAgIG1ldGE6IHRyYWNrLm1ldGFcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbWV0YUNoYW5nZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNodW5rLmRhdGEgPSBjaHVuay5kYXRhLnNsaWNlKDEsIGNodW5rLmRhdGEubGVuZ3RoKVxuICAgICAgdHJhY2suc2FtcGxlcy5wdXNoKGNodW5rKVxuICAgIH1cbiAgICBpZiAoIXZhbGlkYXRlKSB7XG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCB0aGlzLlRBRywgbmV3IEVycm9yKCdUQUcgbGVuZ3RoIGVycm9yIGF0ICcgKyBjaHVuay5kYXRhc2l6ZSksIGZhbHNlKVxuICAgICAgLy8gdGhpcy5sb2dnZXIud2Fybih0aGlzLlRBRywgZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcGFyc2UgaGV2Yy9hdmMgdmlkZW8gZGF0YVxuICAgKiBAcGFyYW0gY2h1bmtcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9wYXJzZUhldmNEYXRhIChjaHVuaykge1xuICAgIC8vIGhlYWRlclxuICAgIGxldCBpbmZvID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMSlbMF1cbiAgICBjaHVuay5mcmFtZVR5cGUgPSAoaW5mbyAmIDB4ZjApID4+PiA0XG4gICAgY2h1bmsuaXNLZXlmcmFtZSA9IGNodW5rLmZyYW1lVHlwZSA9PT0gMVxuICAgIC8vIGxldCB0ZW1wQ29kZWNJRCA9IHRoaXMudHJhY2tzLnZpZGVvVHJhY2suY29kZWNJRFxuICAgIGxldCBjb2RlY0lEID0gaW5mbyAmIDB4MGZcbiAgICB0aGlzLnRyYWNrcy52aWRlb1RyYWNrLmNvZGVjSUQgPSBjb2RlY0lEXG5cbiAgICAvLyBoZXZj5ZKMYXZj55qEaGVhZGVy6Kej5p6Q5pa55byP5LiA5qC3XG4gICAgY2h1bmsuYXZjUGFja2V0VHlwZSA9IHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDEpWzBdXG4gICAgY2h1bmsuY3RzID0gdGhpcy5sb2FkZXJCdWZmZXIudG9JbnQoMCwgMylcbiAgICB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgzKVxuXG4gICAgLy8gMTIgZm9yIGhldmMsIDcgZm9yIGF2Y1xuICAgIGlmIChjb2RlY0lEID09PSAxMikge1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KGNodW5rLmRhdGFzaXplIC0gNSlcbiAgICAgIGNodW5rLmRhdGEgPSBkYXRhXG5cbiAgICAgIGlmIChOdW1iZXIucGFyc2VJbnQoY2h1bmsuYXZjUGFja2V0VHlwZSkgIT09IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRhc2l6ZVZhbGlkYXRvcihjaHVuay5kYXRhc2l6ZSkpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCB0aGlzLlRBRywgbmV3IEVycm9yKGBpbnZhbGlkIHZpZGVvIHRhZyBkYXRhc2l6ZTogJHtjaHVuay5kYXRhc2l6ZX1gKSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5hbHUgPSB7fVxuICAgICAgICBsZXQgciA9IDBcbiAgICAgICAgbmFsdS5jdHMgPSBjaHVuay5jdHNcbiAgICAgICAgbmFsdS5kdHMgPSBjaHVuay5kdHNcbiAgICAgICAgd2hpbGUgKGNodW5rLmRhdGEubGVuZ3RoID4gcikge1xuICAgICAgICAgIGxldCBzaXplcyA9IGNodW5rLmRhdGEuc2xpY2UoTnVtYmVyLnBhcnNlSW50KHIpLCA0ICsgcilcbiAgICAgICAgICBuYWx1LnNpemUgPSBzaXplc1szXVxuICAgICAgICAgIG5hbHUuc2l6ZSArPSBzaXplc1syXSAqIDI1NlxuICAgICAgICAgIG5hbHUuc2l6ZSArPSBzaXplc1sxXSAqIDI1NiAqIDI1NlxuICAgICAgICAgIG5hbHUuc2l6ZSArPSBzaXplc1swXSAqIDI1NiAqIDI1NiAqIDI1NlxuICAgICAgICAgIHIgKz0gNFxuICAgICAgICAgIG5hbHUuZGF0YSA9IGNodW5rLmRhdGEuc2xpY2UoTnVtYmVyLnBhcnNlSW50KHIpLCBuYWx1LnNpemUgKyByKVxuICAgICAgICAgIHIgKz0gbmFsdS5zaXplXG4gICAgICAgICAgdGhpcy50cmFja3MudmlkZW9UcmFjay5zYW1wbGVzLnB1c2gobmFsdSlcbiAgICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ3ZpZGVvJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChOdW1iZXIucGFyc2VJbnQoY2h1bmsuYXZjUGFja2V0VHlwZSkgPT09IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRhc2l6ZVZhbGlkYXRvcihjaHVuay5kYXRhc2l6ZSkpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCB0aGlzLlRBRywgbmV3IEVycm9yKGBpbnZhbGlkIHZpZGVvIHRhZyBkYXRhc2l6ZTogJHtjaHVuay5kYXRhc2l6ZX1gKSwgZmFsc2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICd2aWRlbycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvZGVjSUQgPT09IDcpIHtcbiAgICAgIGxldCBkYXRhID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoY2h1bmsuZGF0YXNpemUgLSA1KVxuICAgICAgaWYgKGRhdGFbNF0gPT09IDAgJiYgZGF0YVs1XSA9PT0gMCAmJiBkYXRhWzZdID09PSAwICYmIGRhdGFbN10gPT09IDEpIHtcbiAgICAgICAgbGV0IGF2Y2NsZW5ndGggPSAwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgYXZjY2xlbmd0aCA9IGF2Y2NsZW5ndGggKiAyNTYgKyBkYXRhW2ldXG4gICAgICAgIH1cbiAgICAgICAgYXZjY2xlbmd0aCAtPSA0XG4gICAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKDQsIGRhdGEubGVuZ3RoKVxuICAgICAgICBkYXRhWzNdID0gYXZjY2xlbmd0aCAlIDI1NlxuICAgICAgICBhdmNjbGVuZ3RoID0gKGF2Y2NsZW5ndGggLSBkYXRhWzNdKSAvIDI1NlxuICAgICAgICBkYXRhWzJdID0gYXZjY2xlbmd0aCAlIDI1NlxuICAgICAgICBhdmNjbGVuZ3RoID0gKGF2Y2NsZW5ndGggLSBkYXRhWzJdKSAvIDI1NlxuICAgICAgICBkYXRhWzFdID0gYXZjY2xlbmd0aCAlIDI1NlxuICAgICAgICBkYXRhWzBdID0gKGF2Y2NsZW5ndGggLSBkYXRhWzFdKSAvIDI1NlxuICAgICAgfVxuXG4gICAgICBjaHVuay5kYXRhID0gZGF0YVxuICAgICAgLy8gSWYgaXQgaXMgQVZDIHNlcXVlY2UgSGVhZGVyLlxuICAgICAgaWYgKGNodW5rLmF2Y1BhY2tldFR5cGUgPT09IDApIHtcbiAgICAgICAgdGhpcy5fYXZjU2VxdWVuY2VIZWFkZXJQYXJzZXIoY2h1bmsuZGF0YSlcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5fZGF0YXNpemVWYWxpZGF0b3IoY2h1bmsuZGF0YXNpemUpXG4gICAgICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgICAgIGlmICh0aGlzLl9oYXNTY3JpcHQgJiYgIXRoaXMuX2hhc1ZpZGVvU2VxdWVuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAndmlkZW8nKVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5faGFzU2NyaXB0ICYmIHRoaXMuX2hhc1ZpZGVvU2VxdWVuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAnYXVkaW8nKVxuICAgICAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5WSURFT19NRVRBREFUQV9DSEFOR0UpXG4gICAgICAgICAgICAvLyB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ3ZpZGVvJylcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5faGFzVmlkZW9TZXF1ZW5jZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tZXRhQ2hhbmdlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRhc2l6ZVZhbGlkYXRvcihjaHVuay5kYXRhc2l6ZSkpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCB0aGlzLlRBRywgbmV3IEVycm9yKGBpbnZhbGlkIHZpZGVvIHRhZyBkYXRhc2l6ZTogJHtjaHVuay5kYXRhc2l6ZX1gKSwgZmFsc2UpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9tZXRhQ2hhbmdlKSB7XG4gICAgICAgICAgY2h1bmsub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGE6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudHJhY2tzLnZpZGVvVHJhY2subWV0YSlcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fbWV0YUNoYW5nZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFja3MudmlkZW9UcmFjay5zYW1wbGVzLnB1c2goY2h1bmspXG4gICAgICAgIC8vIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfQ09NUExFVEUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIHRoaXMuVEFHLCBuZXcgRXJyb3IoYHZpZGVvIGNvZGVpZCBpcyAke2NvZGVjSUR9YCksIGZhbHNlKVxuICAgICAgY2h1bmsuZGF0YSA9IHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KGNodW5rLmRhdGFzaXplIC0gMSlcbiAgICAgIGlmICghdGhpcy5fZGF0YXNpemVWYWxpZGF0b3IoY2h1bmsuZGF0YXNpemUpKSB7XG4gICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIHRoaXMuVEFHLCBuZXcgRXJyb3IoYGludmFsaWQgdmlkZW8gdGFnIGRhdGFzaXplOiAke2NodW5rLmRhdGFzaXplfWApLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhY2tzLnZpZGVvVHJhY2suc2FtcGxlcy5wdXNoKGNodW5rKVxuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9DT01QTEVURSlcbiAgICB9XG4gICAgZGVsZXRlIGNodW5rLnRhZ1R5cGVcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJzZSBhdmMgbWV0YWRhdGFcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hdmNTZXF1ZW5jZUhlYWRlclBhcnNlciAoZGF0YSkge1xuICAgIGxldCB0cmFjayA9IHRoaXMudHJhY2tzLnZpZGVvVHJhY2tcblxuICAgIGlmICghdHJhY2spIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBvZmZzZXQgPSAwXG5cbiAgICBpZiAoIXRyYWNrLm1ldGEpIHtcbiAgICAgIHRyYWNrLm1ldGEgPSBuZXcgVmlkZW9UcmFja01ldGEoKVxuICAgIH1cbiAgICBsZXQgbWV0YSA9IHRyYWNrLm1ldGFcblxuICAgIG1ldGEuY29uZmlndXJhdGlvblZlcnNpb24gPSBkYXRhWzBdXG4gICAgbWV0YS5hdmNQcm9maWxlSW5kaWNhdGlvbiA9IGRhdGFbMV1cbiAgICBtZXRhLnByb2ZpbGVDb21wYXRpYmlsaXR5ID0gZGF0YVsyXVxuICAgIG1ldGEuYXZjTGV2ZWxJbmRpY2F0aW9uID0gZGF0YVszXSAvIDEwXG4gICAgbWV0YS5uYWxVbml0TGVuZ3RoID0gKGRhdGFbNF0gJiAweDAzKSArIDFcblxuICAgIGxldCBudW1PZlNwcyA9IGRhdGFbNV0gJiAweDFmXG4gICAgb2Zmc2V0ID0gNlxuICAgIGxldCBjb25maWcgPSB7fVxuXG4gICAgLy8gcGFyc2UgU1BTXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZlNwczsgaSsrKSB7XG4gICAgICBsZXQgc2l6ZSA9IGRhdGFbb2Zmc2V0XSAqIDI1NSArIGRhdGFbb2Zmc2V0ICsgMV1cbiAgICAgIG9mZnNldCArPSAyXG5cbiAgICAgIGxldCBzcHMgPSBuZXcgVWludDhBcnJheShzaXplKVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgc3BzW2pdID0gZGF0YVtvZmZzZXQgKyBqXVxuICAgICAgfVxuXG4gICAgICAvLyBjb2RlYyBzdHJpbmdcbiAgICAgIGxldCBjb2RlY1N0cmluZyA9ICdhdmMxLidcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgNDsgaisrKSB7XG4gICAgICAgIGxldCBoID0gc3BzW2pdLnRvU3RyaW5nKDE2KVxuICAgICAgICBpZiAoaC5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgaCA9ICcwJyArIGhcbiAgICAgICAgfVxuICAgICAgICBjb2RlY1N0cmluZyArPSBoXG4gICAgICB9XG5cbiAgICAgIG1ldGEuY29kZWMgPSBjb2RlY1N0cmluZ1xuXG4gICAgICBvZmZzZXQgKz0gc2l6ZVxuICAgICAgdGhpcy50cmFja3MudmlkZW9UcmFjay5tZXRhLnNwcyA9IHNwc1xuICAgICAgY29uZmlnID0gU3BzUGFyc2VyLnBhcnNlU1BTKHNwcylcbiAgICB9XG5cbiAgICBsZXQgbnVtT2ZQcHMgPSBkYXRhW29mZnNldF1cblxuICAgIG9mZnNldCsrXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mUHBzOyBpKyspIHtcbiAgICAgIGxldCBzaXplID0gZGF0YVtvZmZzZXRdICogMjU1ICsgZGF0YVtvZmZzZXQgKyAxXVxuICAgICAgb2Zmc2V0ICs9IDJcbiAgICAgIGxldCBwcHMgPSBuZXcgVWludDhBcnJheShzaXplKVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgcHBzW2pdID0gZGF0YVtvZmZzZXQgKyBqXVxuICAgICAgfVxuICAgICAgb2Zmc2V0ICs9IHNpemVcbiAgICAgIHRoaXMudHJhY2tzLnZpZGVvVHJhY2subWV0YS5wcHMgPSBwcHNcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKG1ldGEsIFNwc1BhcnNlci50b1ZpZGVvTWV0YShjb25maWcpKVxuXG4gICAgLy8gZmlsbCB2aWRlbyBtZWRpYSBpbmZvXG4gICAgY29uc3QgdmlkZW9NZWRpYSA9IHRoaXMuX2NvbnRleHQubWVkaWFJbmZvLnZpZGVvXG5cbiAgICB2aWRlb01lZGlhLmNvZGVjID0gbWV0YS5jb2RlY1xuICAgIHZpZGVvTWVkaWEucHJvZmlsZSA9IG1ldGEucHJvZmlsZVxuICAgIHZpZGVvTWVkaWEubGV2ZWwgPSBtZXRhLmxldmVsXG4gICAgdmlkZW9NZWRpYS5jaHJvbWFGb3JtYXQgPSBtZXRhLmNocm9tYUZvcm1hdFxuICAgIHZpZGVvTWVkaWEuZnJhbWVSYXRlID0gbWV0YS5mcmFtZVJhdGVcbiAgICB2aWRlb01lZGlhLnBhclJhdGlvID0gbWV0YS5wYXJSYXRpb1xuICAgIHZpZGVvTWVkaWEud2lkdGggPSB2aWRlb01lZGlhLndpZHRoID09PSBtZXRhLnByZXNlbnRXaWR0aCA/IHZpZGVvTWVkaWEud2lkdGggOiBtZXRhLnByZXNlbnRXaWR0aFxuICAgIHZpZGVvTWVkaWEuaGVpZ2h0ID0gdmlkZW9NZWRpYS5oZWlnaHQgPT09IG1ldGEucHJlc2VudEhlaWdodCA/IHZpZGVvTWVkaWEud2lkdGggOiBtZXRhLnByZXNlbnRIZWlnaHRcblxuICAgIG1ldGEuZHVyYXRpb24gPSB0aGlzLl9jb250ZXh0Lm1lZGlhSW5mby5kdXJhdGlvbiAqIG1ldGEudGltZXNjYWxlXG4gICAgbWV0YS5hdmNjID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGgpXG4gICAgbWV0YS5hdmNjLnNldChkYXRhKVxuICAgIHRyYWNrLm1ldGEgPSBtZXRhXG4gIH1cblxuICAvKipcbiAgICogY2hvb3NlIGF1ZGlvIHNhbXBsZSByYXRlXG4gICAqIEBwYXJhbSBzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc3dpdGNoQXVkaW9TYW1wbGVSYXRlIChzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4KSB7XG4gICAgbGV0IHNhbXBsaW5nRnJlcXVlbmN5TGlzdCA9IFs5NjAwMCwgODgyMDAsIDY0MDAwLCA0ODAwMCwgNDQxMDAsIDMyMDAwLCAyNDAwMCwgMjIwNTAsIDE2MDAwLCAxMjAwMCwgMTEwMjUsIDgwMDAsIDczNTBdXG4gICAgcmV0dXJuIHNhbXBsaW5nRnJlcXVlbmN5TGlzdFtzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4XVxuICB9XG5cbiAgLyoqXG4gICAqIGNob29zZSBhdWRpbyBzYW1wbGluZyBmcmVxdWVuY2VcbiAgICogQHBhcmFtIGluZm9cbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zd2l0Y2hBdWRpb1NhbXBsaW5nRnJlcXVlbmN5IChpbmZvKSB7XG4gICAgbGV0IHNhbXBsaW5nRnJlcXVlbmN5SW5kZXggPSAoaW5mbyAmIDEyKSA+Pj4gMlxuICAgIGxldCBzYW1wbGluZ0ZyZXF1ZW5jeUxpc3QgPSBbNTUwMCwgMTEwMjUsIDIyMDUwLCA0NDEwMCwgNDgwMDBdXG4gICAgcmV0dXJuIHNhbXBsaW5nRnJlcXVlbmN5TGlzdFtzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4XVxuICB9XG5cbiAgLyoqXG4gICAqIGNob29zZSBhdWRpbyBjaGFubmVsIGNvdW50XG4gICAqIEBwYXJhbSBpbmZvXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc3dpdGNoQXVkaW9DaGFubmVsIChpbmZvKSB7XG4gICAgbGV0IHNhbXBsZVRyYWNrTnVtSW5kZXggPSBpbmZvICYgMVxuICAgIGxldCBzYW1wbGVUcmFja051bUxpc3QgPSBbMSwgMl1cbiAgICByZXR1cm4gc2FtcGxlVHJhY2tOdW1MaXN0W3NhbXBsZVRyYWNrTnVtSW5kZXhdXG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgZGF0YXNpemUgaXMgdmFsaWQgdXNlIDQgQnl0ZSBhZnRlciBjdXJyZW50IHRhZ1xuICAgKiBAcGFyYW0gZGF0YXNpemVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZGF0YXNpemVWYWxpZGF0b3IgKGRhdGFzaXplKSB7XG4gICAgbGV0IGRhdGFzaXplQ29uZmlybSA9IHRoaXMubG9hZGVyQnVmZmVyLnRvSW50KDAsIDQpXG4gICAgdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoNClcbiAgICByZXR1cm4gZGF0YXNpemVDb25maXJtID09PSBkYXRhc2l6ZSArIDExXG4gIH1cblxuICBnZXQgbG9hZGVyQnVmZmVyICgpIHtcbiAgICBjb25zdCBidWZmZXIgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdMT0FERVJfQlVGRkVSJylcbiAgICBpZiAoYnVmZmVyKSB7XG4gICAgICByZXR1cm4gYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIG5ldyBFcnJvcign5om+5LiN5YiwIGxvYWRlckJ1ZmZlciDlrp7kvosnKSlcbiAgICB9XG4gIH1cblxuICBnZXQgdHJhY2tzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJylcbiAgfVxuXG4gIGdldCBsb2dnZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdMT0dHRVInKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdkRlbXV4ZXJcbiIsIi8qKlxuICogUmVmZXJlbmNlOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjODIxNiNzZWN0aW9uLTQuM1xuICovXG5jbGFzcyBNM1U4UGFyc2VyIHtcbiAgc3RhdGljIHBhcnNlICh0ZXh0LCBiYXNldXJsID0gJycpIHtcbiAgICBsZXQgcmV0ID0ge1xuICAgICAgZHVyYXRpb246IDBcbiAgICB9O1xuICAgIGlmICghdGV4dCB8fCAhdGV4dC5zcGxpdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcmVmcyA9IHRleHQuc3BsaXQoL1xccnxcXG4vKTtcbiAgICByZWZzID0gcmVmcy5maWx0ZXIoKHJlZikgPT4ge1xuICAgICAgcmV0dXJuIHJlZjtcbiAgICB9KVxuICAgIGxldCByZWYgPSByZWZzLnNoaWZ0KClcbiAgICBpZiAoIXJlZi5tYXRjaCgnI0VYVE0zVScpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbTN1OCBmaWxlOiBub3QgXCIjRVhUTTNVXCJgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZWYgPSByZWZzLnNoaWZ0KClcbiAgICB3aGlsZSAocmVmKSB7XG4gICAgICBsZXQgcmVmbSA9IHJlZi5tYXRjaCgvIyguW0EtWnwtXSopOiguKikvKTtcbiAgICAgIGxldCByZWZkID0gcmVmLm1hdGNoKC8jKC5bQS1afC1dKikvKTtcbiAgICAgIGlmIChyZWZkICYmIHJlZm0gJiYgcmVmbS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHN3aXRjaCAocmVmbVsxXSkge1xuICAgICAgICAgIGNhc2UgJ0VYVC1YLVZFUlNJT04nOlxuICAgICAgICAgICAgcmV0LnZlcnNpb24gPSBwYXJzZUludChyZWZtWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0VYVC1YLU1FRElBLVNFUVVFTkNFJzpcbiAgICAgICAgICAgIHJldC5zZXF1ZW5jZSA9IHBhcnNlSW50KHJlZm1bMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnRVhULVgtVEFSR0VURFVSQVRJT04nOlxuICAgICAgICAgICAgcmV0LnRhcmdldGR1cmF0aW9uID0gcGFyc2VGbG9hdChyZWZtWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0VYVElORic6XG4gICAgICAgICAgICBNM1U4UGFyc2VyLnBhcnNlRnJhZyhyZWZtLCByZWZzLCByZXQsIGJhc2V1cmwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnRVhULVgtS0VZJzpcbiAgICAgICAgICAgIE0zVThQYXJzZXIucGFyc2VEZWNyeXB0KHJlZm1bMl0scmV0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBpZihyZWZkICYmIHJlZmQubGVuZ3RoID4gMSkge1xuICAgICAgICBzd2l0Y2gocmVmZFsxXSkge1xuICAgICAgICAgIGNhc2UgJ0VYVC1YLURJU0NPTlRJTlVJVFknOlxuICAgICAgICAgICAgcmVmID0gcmVmcy5zaGlmdCgpO1xuICAgICAgICAgICAgbGV0IHJlZm0gPSByZWYubWF0Y2goLyMoLltBLVp8LV0qKTooLiopLyk7XG4gICAgICAgICAgICBpZihyZWZtLmxlbmd0aCA+MiAmJiByZWZtWzFdID09PSAnRVhUSU5GJykge1xuICAgICAgICAgICAgICBNM1U4UGFyc2VyLnBhcnNlRnJhZyhyZWZtLCByZWZzLCByZXQsIGJhc2V1cmwsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZWYgPSByZWZzLnNoaWZ0KClcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZUZyYWcgKHJlZm0sIHJlZnMsIHJldCwgYmFzZXVybCwgZGlzY29udGludWUpIHtcbiAgICBpZiAoIXJldC5mcmFncykge1xuICAgICAgcmV0LmZyYWdzID0gW11cbiAgICB9XG5cbiAgICBsZXQgZnJlZyA9IHtcbiAgICAgIHN0YXJ0OiByZXQuZHVyYXRpb24sXG4gICAgICBkdXJhdGlvbjogcGFyc2VGbG9hdChyZWZtWzJdKSAqIDEwMDBcbiAgICB9XG5cbiAgICByZXQuZHVyYXRpb24gKz0gZnJlZy5kdXJhdGlvbjtcbiAgICBsZXQgbmV4dGxpbmUgPSByZWZzLnNoaWZ0KCk7XG4gICAgaWYgKG5leHRsaW5lLm1hdGNoKC8jKC4qKTooLiopLykpIHtcbiAgICAgIG5leHRsaW5lID0gcmVmcy5zaGlmdCgpO1xuICAgIH1cbiAgICBpZiAobmV4dGxpbmUubGVuZ3RoID4gMCAmJiBuZXh0bGluZS5jaGFyQXQoMCkgPT09ICcvJyAmJiBiYXNldXJsLm1hdGNoKC8uKlxcL1xcLy4qXFwuXFx3Ky9nKSkge1xuICAgICAgYmFzZXVybCA9IGJhc2V1cmwubWF0Y2goLy4qXFwvXFwvLipcXC5cXHcrL2cpWzBdO1xuICAgIH1cbiAgICBpZiAobmV4dGxpbmUubWF0Y2goLy4qOlxcL1xcLy4qLykpIHtcbiAgICAgIGZyZWcudXJsID0gbmV4dGxpbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyZWcudXJsID0gYmFzZXVybCArIG5leHRsaW5lO1xuICAgIH1cbiAgICBmcmVnLmRpc2NvbnRpbnVlID0gZGlzY29udGludWU7XG4gICAgcmV0LmZyYWdzLnB1c2goZnJlZyk7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VVUkwgKHVybCkge1xuICAgIGxldCBiYXNldXJsID0gJyc7XG4gICAgbGV0IHVybHMgPSB1cmwubWF0Y2goLyguKlxcLykuKlxcLm0zdTgvKTtcbiAgICBpZiAodXJscyAmJiB1cmxzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodXJsc1tpXS5tYXRjaCgvLipcXC8kL2cpICYmIHVybHNbaV0ubGVuZ3RoID4gYmFzZXVybC5sZW5ndGgpIHtcbiAgICAgICAgICBiYXNldXJsID0gdXJsc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmFzZXVybDtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZURlY3J5cHQocmVmbSwgcmV0KSB7XG4gICAgcmV0LmVuY3J5cHQgPSB7fTtcbiAgICBsZXQgcmVmcyA9IHJlZm0uc3BsaXQoJywnKTtcbiAgICBmb3IgKGxldCBpIGluIHJlZnMpIHsgXG4gICAgICBsZXQgY21kID0gcmVmc1tpXTtcbiAgICAgIGlmKGNtZC5tYXRjaCgvTUVUSE9EPSguKikvKSkge1xuICAgICAgICByZXQuZW5jcnlwdC5tZXRob2QgPSBjbWQubWF0Y2goL01FVEhPRD0oLiopLylbMV07XG4gICAgICB9XG4gICAgICBpZihjbWQubWF0Y2goL1VSST1cIiguKilcIi8pKSB7XG4gICAgICAgIHJldC5lbmNyeXB0LnVyaSA9IGNtZC5tYXRjaCgvVVJJPVwiKC4qKVwiLylbMV07XG4gICAgICB9XG5cbiAgICAgIGlmKGNtZC5tYXRjaCgvSVY9MHgoLiopLykpIHtcbiAgICAgICAgbGV0IGl2ID0gY21kLm1hdGNoKC9JVj0weCguKikvKVsxXTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IE1hdGguY2VpbChpdi5sZW5ndGggLyAyKTtcbiAgICAgICAgcmV0LmVuY3J5cHQuaXZiID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICAgICAgZm9yKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PTA7IGktLSkge1xuICAgICAgICAgIGxldCBpbSA9IHBhcnNlSW50KGl2LnN1YnN0cihpICogMiwgMiksIDE2KTtcbiAgICAgICAgICByZXQuZW5jcnlwdC5pdmJbaV0gPSBpbTtcbiAgICAgICAgfSBcbiAgICAgICAgcmV0LmVuY3J5cHQuaXYgPSBpdjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE0zVThQYXJzZXI7XG4iLCJpbXBvcnQgeyBOYWx1bml0IH0gZnJvbSAneGdwbGF5ZXItY29kZWMnO1xuaW1wb3J0IHsgQXVkaW9UcmFjaywgVmlkZW9UcmFjayB9IGZyb20gJ3hncGxheWVyLWJ1ZmZlcic7XG5pbXBvcnQge1xuICBBdWRpb1RyYWNrTWV0YSxcbiAgVmlkZW9UcmFja01ldGEsXG4gIEF1ZGlvVHJhY2tTYW1wbGUsXG4gIFZpZGVvVHJhY2tTYW1wbGUsXG4gIEVWRU5UUyxcbiAgU3RyZWFtXG59IGZyb20gJ3hncGxheWVyLXV0aWxzJztcblxuY29uc3QgREVNVVhfRVZFTlRTID0gRVZFTlRTLkRFTVVYX0VWRU5UUztcbmNvbnN0IFN0cmVhbVR5cGUgPSB7XG4gIDB4MDE6IFsndmlkZW8nLCAnTVBFRy0xJ10sXG4gIDB4MDI6IFsndmlkZW8nLCAnTVBFRy0yJ10sXG4gIDB4MWI6IFsndmlkZW8nLCAnQVZDLkgyNjQnXSxcbiAgMHhlYTogWyd2aWRlbycsICdWQy0xJ10sXG4gIDB4MDM6IFsnYXVkaW8nLCAnTVBFRy0xJ10sXG4gIDB4MDQ6IFsnYXVkaW8nLCAnTVBFRy0yJ10sXG4gIDB4MGY6IFsnYXVkaW8nLCAnTVBFRy0yLkFBQyddLFxuICAweDExOiBbJ2F1ZGlvJywgJ01QRUctNC5BQUMnXSxcbiAgMHg4MDogWydhdWRpbycsICdMUENNJ10sXG4gIDB4ODE6IFsnYXVkaW8nLCAnQUMzJ10sXG4gIDB4MDY6IFsnYXVkaW8nLCAnQUMzJ10sXG4gIDB4ODI6IFsnYXVkaW8nLCAnRFRTJ10sXG4gIDB4ODM6IFsnYXVkaW8nLCAnRG9sYnkgVHJ1ZUhEJ10sXG4gIDB4ODQ6IFsnYXVkaW8nLCAnQUMzLVBsdXMnXSxcbiAgMHg4NTogWydhdWRpbycsICdEVFMtSEQnXSxcbiAgMHg4NjogWydhdWRpbycsICdEVFMtTUEnXSxcbiAgMHhhMTogWydhdWRpbycsICdBQzMtUGx1cy1TRUMnXSxcbiAgMHhhMjogWydhdWRpbycsICdEVFMtSEQtU0VDJ11cbn07XG5cbmNsYXNzIFRzRGVtdXhlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWdzKSB7XG4gICAgdGhpcy5jb25maWdzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlncyk7XG4gICAgdGhpcy5kZW11eGluZyA9IGZhbHNlO1xuICAgIHRoaXMucGF0ID0gW107XG4gICAgdGhpcy5wbXQgPSBbXTtcbiAgICB0aGlzLl9oYXNWaWRlb01ldGEgPSBmYWxzZTtcbiAgICB0aGlzLl9oYXNBdWRpb01ldGEgPSBmYWxzZTtcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMub24oREVNVVhfRVZFTlRTLkRFTVVYX1NUQVJULCB0aGlzLmRlbXV4LmJpbmQodGhpcykpXG4gIH1cblxuICBkZW11eCAoZnJhZykge1xuICAgIGlmICh0aGlzLmRlbXV4aW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYnVmZmVyID0gdGhpcy5pbnB1dEJ1ZmZlcjtcbiAgICBsZXQgZnJhZ3MgPSB7IHBhdDogW10sIHBtdDogW10gfTtcbiAgICBsZXQgcGVzZXMgPSB7fTtcblxuICAgIC8vIFJlYWQgVFMgc2VnbWVudFxuICAgIHdoaWxlIChidWZmZXIubGVuZ3RoID49IDE4OCkge1xuICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPj0gMSAmJiBidWZmZXIuYXJyYXlbMF1bYnVmZmVyLm9mZnNldF0gIT09IDcxKSB7XG4gICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIHRoaXMuVEFHLCBuZXcgRXJyb3IoYFVudHJ1c3Qgc3luYyBjb2RlOiAke2J1ZmZlci5hcnJheVswXVtidWZmZXIub2Zmc2V0XX0sIHRyeSB0byByZWNvdmVyO2ApLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB3aGlsZSAoYnVmZmVyLmxlbmd0aCA+PSAxICYmIGJ1ZmZlci5hcnJheVswXVtidWZmZXIub2Zmc2V0XSAhPT0gNzEpIHtcbiAgICAgICAgYnVmZmVyLnNoaWZ0KDEpO1xuICAgICAgfVxuICAgICAgbGV0IGJ1ZiA9IGJ1ZmZlci5zaGlmdCgxODgpO1xuICAgICAgLy8gY29uc29sZS5sb2coYnVmKTtcbiAgICAgIGxldCB0c1N0cmVhbSA9IG5ldyBTdHJlYW0oYnVmLmJ1ZmZlcik7XG4gICAgICBsZXQgdHMgPSB7fTtcbiAgICAgIFRzRGVtdXhlci5yZWFkKHRzU3RyZWFtLCB0cywgZnJhZ3MpO1xuICAgICAgaWYgKHRzLnBlcykge1xuICAgICAgICBpZiAoIXBlc2VzW3RzLmhlYWRlci5waWRdKSB7XG4gICAgICAgICAgcGVzZXNbdHMuaGVhZGVyLnBpZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBwZXNlc1t0cy5oZWFkZXIucGlkXS5wdXNoKHRzLnBlcyk7XG4gICAgICAgIHRzLnBlcy5FUy5idWZmZXIgPSBbdHMucGVzLkVTLmJ1ZmZlcl07XG4gICAgICB9IGVsc2UgaWYgKHBlc2VzW3RzLmhlYWRlci5waWRdKSB7XG4gICAgICAgIHBlc2VzW3RzLmhlYWRlci5waWRdW3Blc2VzW3RzLmhlYWRlci5waWRdLmxlbmd0aCAtIDFdLkVTLmJ1ZmZlci5wdXNoKHRzLnBheWxvYWQuc3RyZWFtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgQXVkaW9PcHRpb25zID0gZnJhZztcbiAgICBsZXQgVmlkZW9PcHRpb25zID0gZnJhZztcblxuICAgIC8vIEdldCBGcmFtZXMgZGF0YVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMocGVzZXMpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZXBlc2VzID0gcGVzZXNbT2JqZWN0LmtleXMocGVzZXMpW2ldXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZXBlc2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGVwZXNlc1tqXS5pZCA9IE9iamVjdC5rZXlzKHBlc2VzKVtpXTtcbiAgICAgICAgZXBlc2VzW2pdLkVTLmJ1ZmZlciA9IFRzRGVtdXhlci5NZXJnZShlcGVzZXNbal0uRVMuYnVmZmVyKTtcbiAgICAgICAgaWYgKGVwZXNlc1tqXS50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgdGhpcy5wdXNoQXVkaW9TYW1wbGUoZXBlc2VzW2pdLCBBdWRpb09wdGlvbnMpO1xuICAgICAgICAgIEF1ZGlvT3B0aW9ucyA9IHt9O1xuICAgICAgICB9IGVsc2UgaWYgKGVwZXNlc1tqXS50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgdGhpcy5wdXNoVmlkZW9TYW1wbGUoZXBlc2VzW2pdLCBWaWRlb09wdGlvbnMpO1xuICAgICAgICAgIFZpZGVvT3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhc0F1ZGlvTWV0YSkge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9DT01QTEVURSwgJ2F1ZGlvJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9oYXNWaWRlb01ldGEpIHtcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfQ09NUExFVEUsICd2aWRlbycpO1xuICAgIH1cbiAgfVxuXG4gIHB1c2hBdWRpb1NhbXBsZSAocGVzLCBvcHRpb25zKSB7XG4gICAgbGV0IHRyYWNrO1xuICAgIGlmICghdGhpcy5fdHJhY2tzLmF1ZGlvVHJhY2spIHtcbiAgICAgIHRoaXMuX3RyYWNrcy5hdWRpb1RyYWNrID0gbmV3IEF1ZGlvVHJhY2soKTtcbiAgICAgIHRyYWNrID0gdGhpcy5fdHJhY2tzLmF1ZGlvVHJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYWNrID0gdGhpcy5fdHJhY2tzLmF1ZGlvVHJhY2s7XG4gICAgfVxuICAgIGxldCBtZXRhID0gbmV3IEF1ZGlvVHJhY2tNZXRhKHtcbiAgICAgIGF1ZGlvU2FtcGxlUmF0ZTogcGVzLkVTLmZyZXF1ZW5jZSxcbiAgICAgIHNhbXBsZVJhdGU6IHBlcy5FUy5mcmVxdWVuY2UsXG4gICAgICBjaGFubmVsQ291bnQ6IHBlcy5FUy5jaGFubmVsLFxuICAgICAgY29kZWM6ICdtcDRhLjQwLicgKyBwZXMuRVMuYXVkaW9PYmplY3RUeXBlLFxuICAgICAgY29uZmlnOiBwZXMuRVMuYXVkaW9Db25maWcsXG4gICAgICBpZDogMixcbiAgICAgIHNhbXBsZVJhdGVJbmRleDogcGVzLkVTLmZyZXF1ZW5jeUluZGV4XG4gICAgfSk7XG4gICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoMTAyNCAvIG1ldGEuYXVkaW9TYW1wbGVSYXRlICogbWV0YS50aW1lc2NhbGUpO1xuXG4gICAgbGV0IG1ldGFFcXVhbCA9IFRzRGVtdXhlci5jb21wYWlyZU1ldGEodHJhY2subWV0YSwgbWV0YSwgdHJ1ZSk7XG5cbiAgICBpZiAoIXRoaXMuX2hhc0F1ZGlvTWV0YSB8fCAhbWV0YUVxdWFsKSB7XG4gICAgICB0cmFjay5tZXRhID0gbWV0YTtcbiAgICAgIHRoaXMuX2hhc0F1ZGlvTWV0YSA9IHRydWVcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAnYXVkaW8nKTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KHBlcy5FUy5idWZmZXIuYnVmZmVyLnNsaWNlKHBlcy5FUy5idWZmZXIucG9zaXRpb24sIHBlcy5FUy5idWZmZXIubGVuZ3RoKSk7XG4gICAgbGV0IGR0cyA9IHBhcnNlSW50KHBlcy5wdHMgLyA5MCk7XG4gICAgbGV0IHB0cyA9IHBhcnNlSW50KHBlcy5wdHMgLyA5MCk7XG4gICAgbGV0IHNhbXBsZSA9IG5ldyBBdWRpb1RyYWNrU2FtcGxlKHtkdHMsIHB0cywgZGF0YSwgb3B0aW9uc30pO1xuICAgIHRyYWNrLnNhbXBsZXMucHVzaChzYW1wbGUpO1xuICB9XG5cbiAgcHVzaFZpZGVvU2FtcGxlIChwZXMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbmFscyA9IE5hbHVuaXQuZ2V0TmFsdW5pdHMocGVzLkVTLmJ1ZmZlcik7XG4gICAgbGV0IHRyYWNrO1xuICAgIGxldCBtZXRhID0gbmV3IFZpZGVvVHJhY2tNZXRhKCk7XG4gICAgaWYgKCF0aGlzLl90cmFja3MudmlkZW9UcmFjaykge1xuICAgICAgdGhpcy5fdHJhY2tzLnZpZGVvVHJhY2sgPSBuZXcgVmlkZW9UcmFjaygpO1xuICAgICAgdHJhY2sgPSB0aGlzLl90cmFja3MudmlkZW9UcmFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhY2sgPSB0aGlzLl90cmFja3MudmlkZW9UcmFjaztcbiAgICB9XG4gICAgbGV0IHNhbXBsZUxlbmd0aCA9IDA7XG4gICAgbGV0IHNwcyA9IGZhbHNlO1xuICAgIGxldCBwcHMgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBuYWwgPSBuYWxzW2ldO1xuICAgICAgaWYgKG5hbC5zcHMpIHtcbiAgICAgICAgc3BzID0gbmFsO1xuICAgICAgICB0cmFjay5zcHMgPSBuYWwuYm9keTtcbiAgICAgICAgbWV0YS5jaHJvbWFGb3JtYXQgPSBzcHMuc3BzLmNocm9tYV9mb3JtYXRcbiAgICAgICAgbWV0YS5jb2RlYyA9ICdhdmMxLic7XG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgdmFyIGggPSBzcHMuYm9keVtqXS50b1N0cmluZygxNik7XG4gICAgICAgICAgaWYgKGgubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgaCA9ICcwJyArIGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1ldGEuY29kZWMgKz0gaDtcbiAgICAgICAgfVxuICAgICAgICBtZXRhLmNvZGVjSGVpZ2h0ID0gc3BzLnNwcy5jb2RlY19zaXplLmhlaWdodDtcbiAgICAgICAgbWV0YS5jb2RlY1dpZHRoID0gc3BzLnNwcy5jb2RlY19zaXplLndpZHRoO1xuICAgICAgICBtZXRhLmZyYW1lUmF0ZSA9IHNwcy5zcHMuZnJhbWVfcmF0ZTtcbiAgICAgICAgbWV0YS5pZCA9IDE7XG4gICAgICAgIG1ldGEubGV2ZWwgPSBzcHMuc3BzLmxldmVsX3N0cmluZztcbiAgICAgICAgbWV0YS5wcmVzZW50SGVpZ2h0ID0gc3BzLnNwcy5wcmVzZW50X3NpemUuaGVpZ2h0O1xuICAgICAgICBtZXRhLnByZXNlbnRXaWR0aCA9IHNwcy5zcHMucHJlc2VudF9zaXplLndpZHRoO1xuICAgICAgICBtZXRhLnByb2ZpbGUgPSBzcHMuc3BzLnByb2ZpbGVfc3RyaW5nO1xuICAgICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gTWF0aC5mbG9vcihtZXRhLnRpbWVzY2FsZSAqIChzcHMuc3BzLmZyYW1lX3JhdGUuZnBzX2RlbiAvIHNwcy5zcHMuZnJhbWVfcmF0ZS5mcHNfbnVtKSk7XG4gICAgICAgIG1ldGEuc2FyUmF0aW8gPSBzcHMuc3BzLnNhcl9yYXRpbyA/IHNwcy5zcHMuc2FyX3JhdGlvIDogc3BzLnNwcy5wYXJfcmF0aW87XG4gICAgICB9IGVsc2UgaWYgKG5hbC5wcHMpIHtcbiAgICAgICAgdHJhY2sucHBzID0gbmFsLmJvZHk7XG4gICAgICAgIHBwcyA9IG5hbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNhbXBsZUxlbmd0aCArPSAoNCArIG5hbC5ib2R5LmJ5dGVMZW5ndGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzcHMgJiYgcHBzKSB7XG4gICAgICBtZXRhLmF2Y2MgPSBOYWx1bml0LmdldEF2Y2Moc3BzLmJvZHksIHBwcy5ib2R5KTtcbiAgICAgIGxldCBtZXRhRXF1YWwgPSBUc0RlbXV4ZXIuY29tcGFpcmVNZXRhKHRyYWNrLm1ldGEsIG1ldGEsIHRydWUpO1xuICAgICAgaWYgKCF0aGlzLl9oYXNWaWRlb01ldGEgfHwgIW1ldGFFcXVhbCkge1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIG9wdGlvbnMubWV0YSA9IE9iamVjdC5hc3NpZ24oe30sIG1ldGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRhOiBPYmplY3QuYXNzaWduKHt9LCBtZXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cmFjay5tZXRhID0gbWV0YTtcbiAgICAgICAgdGhpcy5faGFzVmlkZW9NZXRhID0gdHJ1ZVxuICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ3ZpZGVvJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheShzYW1wbGVMZW5ndGgpO1xuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGxldCBpc0tleWZyYW1lID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbmFsID0gbmFsc1tpXTtcbiAgICAgIGxldCBsZW5ndGggPSBuYWwuYm9keS5ieXRlTGVuZ3RoO1xuICAgICAgaWYgKG5hbC5pZHIpIHtcbiAgICAgICAgaXNLZXlmcmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIW5hbC5wcHMgJiYgIW5hbC5zcHMpIHtcbiAgICAgICAgZGF0YS5zZXQobmV3IFVpbnQ4QXJyYXkoW2xlbmd0aCA+Pj4gMjQgJiAweGZmLFxuICAgICAgICAgIGxlbmd0aCA+Pj4gMTYgJiAweGZmLFxuICAgICAgICAgIGxlbmd0aCA+Pj4gOCAmIDB4ZmYsXG4gICAgICAgICAgbGVuZ3RoICYgMHhmZlxuICAgICAgICBdKSwgb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICAgIGRhdGEuc2V0KG5hbC5ib2R5LCBvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgKz0gbGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc2FtcGxlID0gbmV3IFZpZGVvVHJhY2tTYW1wbGUoe1xuICAgICAgZHRzOiBwYXJzZUludChwZXMuZHRzIC8gOTApLFxuICAgICAgcHRzOiBwYXJzZUludChwZXMucHRzIC8gOTApLFxuICAgICAgY3RzOiAocGVzLnB0cyAtIHBlcy5kdHMpIC8gOTAsXG4gICAgICBvcmlnaW5EdHM6IHBlcy5kdHMsXG4gICAgICBpc0tleWZyYW1lLFxuICAgICAgZGF0YSxcbiAgICAgIG9wdGlvbnNcbiAgICB9KVxuICAgIHRyYWNrLnNhbXBsZXMucHVzaChzYW1wbGUpO1xuICB9XG5cbiAgZGVzdG9yeSAoKSB7XG4gICAgdGhpcy5vZmYoREVNVVhfRVZFTlRTLkRFTVVYX1NUQVJULCB0aGlzLmRlbXV4KTtcbiAgICB0aGlzLmNvbmZpZ3MgPSB7fTtcbiAgICB0aGlzLmRlbXV4aW5nID0gZmFsc2U7XG4gICAgdGhpcy5wYXQgPSBbXTtcbiAgICB0aGlzLnBtdCA9IFtdO1xuICAgIHRoaXMuX2hhc1ZpZGVvTWV0YSA9IGZhbHNlO1xuICAgIHRoaXMuX2hhc0F1ZGlvTWV0YSA9IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGNvbXBhaXJlQXJyYXkgKGEsIGIsIHR5cGUpIHtcbiAgICBsZXQgYWwgPSAwO1xuICAgIGxldCBibCA9IDA7XG4gICAgaWYgKHR5cGUgPT09ICdVaW50OEFycmF5Jykge1xuICAgICAgYWwgPSBhLmJ5dGVMZW5ndGg7XG4gICAgICBibCA9IGIuYnl0ZUxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdBcnJheScpIHtcbiAgICAgIGFsID0gYS5sZW5ndGg7XG4gICAgICBibCA9IGIubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoYWwgIT09IGJsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGNvbXBhaXJlTWV0YSAoYSwgYiwgaWdub3JlRHVyYXRpb24pIHtcbiAgICBpZiAoIWEgfHwgIWIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgayA9IE9iamVjdC5rZXlzKGEpLmxlbmd0aDsgaSA8IGs7IGkrKykge1xuICAgICAgbGV0IGl0ZW1hID0gYVtPYmplY3Qua2V5cyhhKVtpXV07XG4gICAgICBsZXQgaXRlbWIgPSBiW09iamVjdC5rZXlzKGEpW2ldXTtcbiAgICAgIGlmICh0eXBlb2YgaXRlbWEgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICgoaWdub3JlRHVyYXRpb24gJiYgT2JqZWN0LmtleXMoYSlbaV0gIT09ICdkdXJhdGlvbicgJiYgT2JqZWN0LmtleXMoYSlbaV0gIT09ICdyZWZTYW1wbGVEdXJhdGlvbicgJiYgT2JqZWN0LmtleXMoYSlbaV0gIT09ICdyZWZTYW1wbGVEdXJhdGlvbkZpeGVkJykgJiYgaXRlbWEgIT09IGl0ZW1iKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGl0ZW1hLmJ5dGVMZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXRlbWIuYnl0ZUxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVHNEZW11eGVyLmNvbXBhaXJlQXJyYXkoaXRlbWEsIGl0ZW1iLCAnVWludDhBcnJheScpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGl0ZW1hLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpdGVtYi5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVRzRGVtdXhlci5jb21wYWlyZUFycmF5KGl0ZW1hLCBpdGVtYiwgJ0FycmF5JykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghVHNEZW11eGVyLmNvbXBhaXJlTWV0YShpdGVtYSwgaXRlbWIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIE1lcmdlIChidWZmZXJzKSB7XG4gICAgbGV0IGRhdGE7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZmZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZW5ndGggKz0gKGJ1ZmZlcnNbaV0ubGVuZ3RoIC0gYnVmZmVyc1tpXS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgZGF0YSA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZmZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgYnVmZmVyID0gYnVmZmVyc1tpXTtcbiAgICAgIGRhdGEuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZmZlci5idWZmZXIsIGJ1ZmZlci5wb3NpdGlvbiksIG9mZnNldCk7XG4gICAgICBvZmZzZXQgKz0gYnVmZmVyLmxlbmd0aCAtIGJ1ZmZlci5wb3NpdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTdHJlYW0oZGF0YS5idWZmZXIpO1xuICB9XG5cbiAgc3RhdGljIHJlYWQgKHN0cmVhbSwgdHMsIGZyYWdzKSB7XG4gICAgVHNEZW11eGVyLnJlYWRIZWFkZXIoc3RyZWFtLCB0cyk7XG4gICAgVHNEZW11eGVyLnJlYWRQYXlsb2FkKHN0cmVhbSwgdHMsIGZyYWdzKTtcbiAgICBpZiAodHMuaGVhZGVyLnBhY2tldCA9PT0gJ01FRElBJyAmJiB0cy5oZWFkZXIucGF5bG9hZCA9PT0gMSAmJiAhdHMudW5rbm93blBJRHMpIHtcbiAgICAgIHRzLnBlcyA9IFRzRGVtdXhlci5QRVModHMpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZWFkUGF5bG9hZCAoc3RyZWFtLCB0cywgZnJhZ3MpIHtcbiAgICBsZXQgaGVhZGVyID0gdHMuaGVhZGVyXG4gICAgbGV0IHBpZCA9IGhlYWRlci5waWQ7XG4gICAgc3dpdGNoIChwaWQpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgVHNEZW11eGVyLlBBVChzdHJlYW0sIHRzLCBmcmFncyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBUc0RlbXV4ZXIuQ0FUKHN0cmVhbSwgdHMsIGZyYWdzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIFRzRGVtdXhlci5UU0RUKHN0cmVhbSwgdHMsIGZyYWdzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDB4MWZmZjpcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBUT0RPOiBzb21l55qE5YaZ5rOV5LiN5aSq5aW977yM5b6X5pS5XG4gICAgICAgIGlmIChmcmFncy5wYXQuc29tZSgoaXRlbSkgPT4geyByZXR1cm4gaXRlbS5waWQgPT09IHBpZDsgfSkpIHtcbiAgICAgICAgICBUc0RlbXV4ZXIuUE1UKHN0cmVhbSwgdHMsIGZyYWdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgc3RzID0gZnJhZ3MucG10ID8gZnJhZ3MucG10LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5waWQgPT09IHBpZCkgOiBbXTtcbiAgICAgICAgICBpZiAoc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIFRzRGVtdXhlci5NZWRpYShzdHJlYW0sIHRzLCBTdHJlYW1UeXBlW3N0c1swXS5zdHJlYW1UeXBlXVswXSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHMudW5rbm93blBJRHMgPSB0cnVlO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVhZEhlYWRlciAoc3RyZWFtLCB0cykge1xuICAgIGxldCBoZWFkZXIgPSB7fTtcbiAgICBoZWFkZXIuc3luYyA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICBsZXQgbmV4dCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgaGVhZGVyLmVycm9yID0gbmV4dCA+Pj4gMTU7XG4gICAgaGVhZGVyLnBheWxvYWQgPSBuZXh0ID4+PiAxNCAmIDE7XG4gICAgaGVhZGVyLnByaW9yaXR5ID0gbmV4dCA+Pj4gMTMgJiAxO1xuICAgIGhlYWRlci5waWQgPSBuZXh0ICYgMHgxZmZmO1xuXG4gICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDgoKTtcblxuICAgIGhlYWRlci5zY3JhbWJsaW5nID0gbmV4dCA+PiA2ICYgMHgzOyAvLyDmmK/lkKbliqDlr4bvvIwwMOihqOekuuS4jeWKoOWvhlxuXG4gICAgLyoqXG4gICAgICogMDAgSVNPL0lFQ+acquadpeS9v+eUqOS/neeVmVxuICAgICAqIDAxIOayoeacieiwg+aVtOWtl+aute+8jOS7heWQq+aciTE4NELmnInmlYjlh4DojbdcbiAgICAgKiAwMiDmsqHmnInmnInmlYjlh4DojbfvvIzku4XlkKvmnIkxODNC6LCD5pW05a2X5q61XG4gICAgICogMDMgMH4xODJC6LCD5pW05a2X5q615ZCO5Li65pyJ5pWI5YeA6I23XG4gICAgICovXG4gICAgaGVhZGVyLmFkYXB0YXRpb24gPSBuZXh0ID4+IDQgJiAweDM7XG4gICAgaGVhZGVyLmNvbnRpbnVpdHkgPSBuZXh0ICYgMTU7XG4gICAgaGVhZGVyLnBhY2tldCA9IGhlYWRlci5waWQgPT09IDAgPyAnUEFUJyA6ICdNRURJQSc7XG4gICAgdHMuaGVhZGVyID0gaGVhZGVyO1xuICB9XG5cbiAgc3RhdGljIFBBVCAoc3RyZWFtLCB0cywgZnJhZ3MpIHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgbGV0IG5leHQgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgc3RyZWFtLnNraXAobmV4dCk7XG4gICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICByZXQudGFiZWxJRCA9IG5leHQ7XG4gICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgcmV0LmVycm9yID0gbmV4dCA+Pj4gNztcbiAgICByZXQuemVybyA9IG5leHQgPj4+IDYgJiAxO1xuICAgIHJldC5zZWN0aW9uTGVuZ3RoID0gbmV4dCAmIDB4ZmZmO1xuICAgIHJldC5zdHJlYW1JRCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgcmV0LmN1cnJlbnQgPSBzdHJlYW0ucmVhZFVpbnQ4KCkgJiAxO1xuICAgIHJldC5zZWN0aW9uTnVtYmVyID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIHJldC5sYXN0U2VjdGlvbk51bWJlciA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICBsZXQgTiA9IChyZXQuc2VjdGlvbkxlbmd0aCAtIDkpIC8gNDtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICBsZXQgcHJvZ3JhbU51bWJlciA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgICBsZXQgcGlkID0gc3RyZWFtLnJlYWRVaW50MTYoKSAmIDB4MWZmZjtcbiAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgIHByb2dyYW06IHByb2dyYW1OdW1iZXIsXG4gICAgICAgIHBpZCxcbiAgICAgICAgdHlwZTogcHJvZ3JhbU51bWJlciA9PT0gMCA/ICduZXR3b3JrJyA6ICdtYXBQSUQnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgZnJhZ3MucGF0ID0gZnJhZ3MucGF0LmNvbmNhdChsaXN0KTtcbiAgICB9XG4gICAgcmV0Lmxpc3QgPSBsaXN0O1xuICAgIHJldC5wcm9ncmFtID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICByZXQucGlkID0gc3RyZWFtLnJlYWRVaW50MTYoKSAmIDB4MWZmZjtcbiAgICB0cy5wYXlsb2FkID0gcmV0O1xuICAgIC8vIFRPRE8gQ1JDXG4gIH1cblxuICBzdGF0aWMgUE1UIChzdHJlYW0sIHRzLCBmcmFncykge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBsZXQgaGVhZGVyID0gdHMuaGVhZGVyO1xuICAgIGhlYWRlci5wYWNrZXQgPSAnUE1UJztcbiAgICBsZXQgbmV4dCA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICBzdHJlYW0uc2tpcChuZXh0KTtcbiAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIHJldC50YWJsZUlEID0gbmV4dDtcbiAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICByZXQuc2VjdGlvbkxlbmd0aCA9IG5leHQgJiAweGZmZjtcbiAgICByZXQucHJvZ3JhbSA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgcmV0LmN1cnJlbnQgPSBzdHJlYW0ucmVhZFVpbnQ4KCkgJiAxO1xuICAgIHJldC5vcmRlciA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICByZXQubGFzdE9yZGVyID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIHJldC5QQ1JfUElEID0gc3RyZWFtLnJlYWRVaW50MTYoKSAmIDB4MWZmZjtcbiAgICByZXQucHJvZ3JhbUxlbmd0aCA9IHN0cmVhbS5yZWFkVWludDE2KCkgJiAweGZmZjtcbiAgICBsZXQgTiA9IChyZXQuc2VjdGlvbkxlbmd0aCAtIDEzKSAvIDU7XG4gICAgbGV0IGxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgc3RyZWFtVHlwZTogc3RyZWFtLnJlYWRVaW50OCgpLFxuICAgICAgICBwaWQ6IHN0cmVhbS5yZWFkVWludDE2KCkgJiAweDFmZmYsIC8vIDB4MDdlNSDop4bpopHvvIwweDA3ZTZcbiAgICAgICAgZXM6IHN0cmVhbS5yZWFkVWludDE2KCkgJiAweGZmZlxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldC5saXN0ID0gbGlzdDtcbiAgICBpZiAoIXRoaXMucG10KSB7XG4gICAgICB0aGlzLnBtdCA9IFtdO1xuICAgIH1cbiAgICBmcmFncy5wbXQgPSB0aGlzLnBtdC5jb25jYXQobGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBpZDogaXRlbS5waWQsXG4gICAgICAgIGVzOiBpdGVtLmVzLFxuICAgICAgICBzdHJlYW1UeXBlOiBpdGVtLnN0cmVhbVR5cGUsXG4gICAgICAgIHByb2dyYW06IHJldC5wcm9ncmFtXG4gICAgICB9O1xuICAgIH0pKTtcbiAgICB0cy5wYXlsb2FkID0gcmV0O1xuICB9XG5cbiAgc3RhdGljIE1lZGlhIChzdHJlYW0sIHRzLCB0eXBlKSB7XG4gICAgbGV0IGhlYWRlciA9IHRzLmhlYWRlcjtcbiAgICBsZXQgcGF5bG9hZCA9IHt9O1xuICAgIGhlYWRlci50eXBlID0gdHlwZTtcbiAgICBpZiAoaGVhZGVyLmFkYXB0YXRpb24gPT09IDB4MDMpIHtcbiAgICAgIHBheWxvYWQuYWRhcHRhdGlvbkxlbmd0aCA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICAgIGlmIChwYXlsb2FkLmFkYXB0YXRpb25MZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBuZXh0ID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgICBwYXlsb2FkLmRpc2NvbnRpbnVlID0gbmV4dCA+Pj4gNztcbiAgICAgICAgcGF5bG9hZC5hY2Nlc3MgPSBuZXh0ID4+PiA2ICYgMHgwMTtcbiAgICAgICAgcGF5bG9hZC5wcmlvcml0eSA9IG5leHQgPj4+IDUgJiAweDAxO1xuICAgICAgICBwYXlsb2FkLlBDUiA9IG5leHQgPj4+IDQgJiAweDAxO1xuICAgICAgICBwYXlsb2FkLk9QQ1IgPSBuZXh0ID4+PiAzICYgMHgwMTtcbiAgICAgICAgcGF5bG9hZC5zcGxpY2VQb2ludCA9IG5leHQgPj4+IDIgJiAweDAxO1xuICAgICAgICBwYXlsb2FkLnRyYW5zcG9ydFByaXZhdGUgPSBuZXh0ID4+PiAxICYgMHgwMTtcbiAgICAgICAgcGF5bG9hZC5hZGFwdGF0aW9uRmllbGQgPSBuZXh0ICYgMHgwMTtcbiAgICAgICAgbGV0IF9zdGFydCA9IHN0cmVhbS5wb3NpdGlvbjtcbiAgICAgICAgaWYgKHBheWxvYWQuUENSID09PSAxKSB7XG4gICAgICAgICAgcGF5bG9hZC5wcm9ncmFtQ2xvY2tCYXNlID0gc3RyZWFtLnJlYWRVaW50MzIoKSA8PCAxO1xuICAgICAgICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgICAgICAgIHBheWxvYWQucHJvZ3JhbUNsb2NrQmFzZSB8PSBuZXh0ID4+PiAxNTtcbiAgICAgICAgICBwYXlsb2FkLnByb2dyYW1DbG9ja0V4dGVuc2lvbiA9IG5leHQgJiAweDFmZjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF5bG9hZC5PUENSID09PSAxKSB7XG4gICAgICAgICAgcGF5bG9hZC5vcmlnaW5Qcm9ncmFtQ2xvY2tCYXNlID0gc3RyZWFtLnJlYWRVaW50MzIoKSA8PCAxO1xuICAgICAgICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgICAgICAgIHBheWxvYWQub3JpZ2luUHJvZ3JhbUNsb2NrQmFzZSArPSBuZXh0ID4+PiAxNTtcbiAgICAgICAgICBwYXlsb2FkLm9yaWdpblByb2dyYW1DbG9ja0V4dGVuc2lvbiA9IG5leHQgJiAweDFmZjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF5bG9hZC5zcGxpY2VQb2ludCA9PT0gMSkge1xuICAgICAgICAgIHBheWxvYWQuc3BsaWNlQ291bnRkb3duID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXlsb2FkLnRyYW5zcG9ydFByaXZhdGUgPT09IDEpIHtcbiAgICAgICAgICBsZXQgbGVuZ3RoID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgICAgIGxldCB0cmFuc3BvcnRQcml2YXRlRGF0YSA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRyYW5zcG9ydFByaXZhdGVEYXRhLnB1c2goc3RyZWFtLnJlYWRVaW50OCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBheWxvYWQuYWRhcHRhdGlvbkZpZWxkID09PSAxKSB7XG4gICAgICAgICAgbGV0IGxlbmd0aCA9IHN0cmVhbS5yZWFkVWludDgoKVxuICAgICAgICAgIGxldCBuZXh0ID0gc3RyZWFtLnJlYWRVaW50OCgpXG4gICAgICAgICAgbGV0IHN0YXJ0ID0gc3RyZWFtLnBvc2l0aW9uO1xuICAgICAgICAgIGxldCBsdHcgPSBuZXh0ID4+PiA3O1xuICAgICAgICAgIGxldCBwaWVjZXdpc2UgPSBuZXh0ID4+PiA2ICYgMHgxO1xuICAgICAgICAgIGxldCBzZWFtbGVzcyA9IG5leHQgPj4+IDUgJiAweDE7XG4gICAgICAgICAgaWYgKGx0dyA9PT0gMSkge1xuICAgICAgICAgICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgICAgICAgICBwYXlsb2FkLmx0d1ZhbGlkID0gbmV4dCA+Pj4gMTU7XG4gICAgICAgICAgICBwYXlsb2FkLmx0d09mZnNldCA9IG5leHQgJiAweGVmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwaWVjZXdpc2UgPT09IDEpIHtcbiAgICAgICAgICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQyNCgpO1xuICAgICAgICAgICAgcGF5bG9hZC5waWVjZXdpc2VSYXRlID0gbmV4dCAmIDB4M2ZmZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VhbWxlc3MgPT09IDEpIHtcbiAgICAgICAgICAgIG5leHQgPSBzdHJlYW0ucmVhZEludDgoKTtcbiAgICAgICAgICAgIHBheWxvYWQuc3BsaWNlVHlwZSA9IG5leHQgPj4+IDQ7XG4gICAgICAgICAgICBwYXlsb2FkLmR0c05leHRBVTEgPSBuZXh0ID4+PiAxICYgMHg3O1xuICAgICAgICAgICAgcGF5bG9hZC5tYXJrZXIxID0gbmV4dCAmIDB4MTtcbiAgICAgICAgICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgICAgICAgICAgcGF5bG9hZC5kdHNOZXh0QVUyID0gbmV4dCA+Pj4gMTtcbiAgICAgICAgICAgIHBheWxvYWQubWFya2VyMiA9IG5leHQgJiAweDE7XG4gICAgICAgICAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICAgIHBheWxvYWQuZHRzTmV4dEFVMyA9IG5leHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0cmVhbS5za2lwKGxlbmd0aCAtIDEgLSAoc3RyZWFtLnBvc2l0aW9uIC0gc3RhcnQpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFzdFN0dWZmaW5nID0gcGF5bG9hZC5hZGFwdGF0aW9uTGVuZ3RoIC0gMSAtIChzdHJlYW0ucG9zaXRpb24gLSBfc3RhcnQpO1xuICAgICAgICBzdHJlYW0uc2tpcChsYXN0U3R1ZmZpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgICBwYXlsb2FkLnN0cmVhbSA9IG5ldyBTdHJlYW0oc3RyZWFtLmJ1ZmZlci5zbGljZShzdHJlYW0ucG9zaXRpb24pKTtcbiAgICB0cy5wYXlsb2FkID0gcGF5bG9hZDtcbiAgfVxuXG4gIHN0YXRpYyBQRVMgKHRzKSB7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGxldCBidWZmZXIgPSB0cy5wYXlsb2FkLnN0cmVhbTtcblxuICAgIGxldCBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MjQoKTtcbiAgICBpZiAobmV4dCAhPT0gMSkge1xuICAgICAgcmV0LkVTID0ge307XG4gICAgICByZXQuRVMuYnVmZmVyID0gYnVmZmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3RyZWFtSUQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICBpZiAoc3RyZWFtSUQgPj0gMHhlMCAmJiBzdHJlYW1JRCA8PSAweGVmKSB7XG4gICAgICAgIHJldC50eXBlID0gJ3ZpZGVvJztcbiAgICAgIH1cbiAgICAgIGlmIChzdHJlYW1JRCA+PSAweGMwICYmIHN0cmVhbUlEIDw9IDB4ZGYpIHtcbiAgICAgICAgcmV0LnR5cGUgPSAnYXVkaW8nO1xuICAgICAgfVxuICAgICAgbGV0IHBhY2tldExlbmd0aCA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICByZXQucGFja2V0TGVuZ3RoID0gcGFja2V0TGVuZ3RoO1xuICAgICAgaWYgKHJldC50eXBlID09PSAndmlkZW8nIHx8IHJldC50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAgIGxldCBuZXh0ID0gYnVmZmVyLnJlYWRVaW50OCgpO1xuICAgICAgICBsZXQgZmlyc3QgPSBuZXh0ID4+PiA2O1xuICAgICAgICBpZiAoZmlyc3QgIT09IDB4MDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdoZW4gcGFyc2UgcGVzIGhlYWRlcicpO1xuICAgICAgICB9XG4gICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgIHJldC5wdHNEVFNGbGFnID0gbmV4dCA+Pj4gNjtcbiAgICAgICAgcmV0LmVzY3JGbGFnID0gbmV4dCA+Pj4gNSAmIDB4MDE7XG4gICAgICAgIHJldC5lc1JhdGVGbGFnID0gbmV4dCA+Pj4gNCAmIDB4MDE7XG4gICAgICAgIHJldC5kc21GbGFnID0gbmV4dCA+Pj4gMyAmIDB4MDE7XG4gICAgICAgIHJldC5hZGRpdGlvbmFsRmxhZyA9IG5leHQgPj4+IDIgJiAweDAxO1xuICAgICAgICByZXQuY3JjRmxhZyA9IG5leHQgPj4+IDEgJiAweDAxO1xuICAgICAgICByZXQuZXh0ZW5zaW9uRmxhZyA9IG5leHQgJiAweDAxO1xuICAgICAgICByZXQucGVzSGVhZGVyTGVuZ3RoID0gYnVmZmVyLnJlYWRVaW50OCgpO1xuICAgICAgICBsZXQgTjEgPSByZXQucGVzSGVhZGVyTGVuZ3RoO1xuXG4gICAgICAgIGlmIChyZXQucHRzRFRTRmxhZyA9PT0gMikge1xuICAgICAgICAgIGxldCBwdHMgPSBbXTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50OCgpO1xuICAgICAgICAgIHB0cy5wdXNoKG5leHQgPj4+IDEgJiAweDA3KTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBwdHMucHVzaChuZXh0ID4+PiAxKTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBwdHMucHVzaChuZXh0ID4+PiAxKTtcbiAgICAgICAgICByZXQucHRzID0gKHB0c1swXSA8PCAzMCB8IHB0c1sxXSA8PCAxNSB8IHB0c1syXSk7XG4gICAgICAgICAgTjEgLT0gNTtcbiAgICAgICAgICAvLyDop4bpopHlpoLmnpzmsqHmnIlkdHPnlKhwdHNcbiAgICAgICAgICBpZiAocmV0LnR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgIHJldC5kdHMgPSByZXQucHRzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmV0LnB0c0RUU0ZsYWcgPT09IDMpIHtcbiAgICAgICAgICBsZXQgcHRzID0gW107XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgICAgICBwdHMucHVzaChuZXh0ID4+PiAxICYgMHgwNyk7XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICAgICAgcHRzLnB1c2gobmV4dCA+Pj4gMSk7XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICAgICAgcHRzLnB1c2gobmV4dCA+Pj4gMSk7XG4gICAgICAgICAgcmV0LnB0cyA9IChwdHNbMF0gPDwgMzAgfCBwdHNbMV0gPDwgMTUgfCBwdHNbMl0pO1xuICAgICAgICAgIGxldCBkdHMgPSBbXTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50OCgpO1xuICAgICAgICAgIGR0cy5wdXNoKG5leHQgPj4+IDEgJiAweDA3KTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBkdHMucHVzaChuZXh0ID4+PiAxKTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBkdHMucHVzaChuZXh0ID4+PiAxKTtcbiAgICAgICAgICByZXQuZHRzID0gKGR0c1swXSA8PCAzMCB8IGR0c1sxXSA8PCAxNSB8IGR0c1syXSk7XG4gICAgICAgICAgTjEgLT0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldC5lc2NyRmxhZyA9PT0gMSkge1xuICAgICAgICAgIGxldCBlc2NyID0gW11cbiAgICAgICAgICBsZXQgZXggPSBbXTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50OCgpO1xuICAgICAgICAgIGVzY3IucHVzaChuZXh0ID4+PiAzICYgMHgwNyk7XG4gICAgICAgICAgZXNjci5wdXNoKG5leHQgJiAweDAzKTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBlc2NyLnB1c2gobmV4dCA+Pj4gMTMpO1xuICAgICAgICAgIGVzY3IucHVzaChuZXh0ICYgMHgwMyk7XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICAgICAgZXNjci5wdXNoKG5leHQgPj4+IDEzKTtcbiAgICAgICAgICBleC5wdXNoKG5leHQgJiAweDAzKTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50OCgpO1xuICAgICAgICAgIGV4LnB1c2gobmV4dCA+Pj4gMSk7XG4gICAgICAgICAgcmV0LmVzY3IgPSAoZXNjclswXSA8PCAzMCB8IGVzY3JbMV0gPDwgMjggfCBlc2NyWzJdIDw8IDE1IHwgZXNjclszXSA8PCAxMyB8IGVzY3JbNF0pICogMzAwICsgKGV4WzBdIDw8IDcgfCBleFsxXSk7XG4gICAgICAgICAgTjEgLT0gNjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmV0LmVzUmF0ZUZsYWcgPT09IDEpIHtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MjQoKTtcbiAgICAgICAgICByZXQuZXNSYXRlID0gbmV4dCA+Pj4gMSAmIDB4M2ZmZmZmO1xuICAgICAgICAgIE4xIC09IDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldC5kc21GbGFnID09PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3Qgc3VwcG9ydCBEU01fdHJpY2tfbW9kZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXQuYWRkaXRpb25hbEZsYWcgPT09IDEpIHtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50OCgpO1xuICAgICAgICAgIHJldC5hZGRpdGlvbmFsQ29weUluZm8gPSBuZXh0ICYgMHg3ZjtcbiAgICAgICAgICBOMSAtPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXQuY3JjRmxhZyA9PT0gMSkge1xuICAgICAgICAgIHJldC5wZXNDUkMgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIE4xIC09IDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldC5leHRlbnNpb25GbGFnID09PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3Qgc3VwcG9ydCBleHRlbnNpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTjEgPiAwKSB7XG4gICAgICAgICAgYnVmZmVyLnNraXAoTjEpO1xuICAgICAgICB9XG4gICAgICAgIHJldC5FUyA9IFRzRGVtdXhlci5FUyhidWZmZXIsIHJldC50eXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZm9ybWF0IGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHN0YXRpYyBFUyAoYnVmZmVyLCB0eXBlKSB7XG4gICAgbGV0IG5leHQ7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGlmICh0eXBlID09PSAndmlkZW8nKSB7XG4gICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MzIoKTtcbiAgICAgIGlmIChuZXh0ICE9PSAxKSB7XG4gICAgICAgIGJ1ZmZlci5iYWNrKDQpO1xuICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MjQoKTtcbiAgICAgICAgaWYgKG5leHQgIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2gyNjQgbmFsIGhlYWRlciBwYXJzZSBmYWlsZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnVmZmVyLnNraXAoMik7Ly8gMDkgRjBcbiAgICAgIC8vIFRPRE8gcmVhZG5hbHVcbiAgICAgIHJldC5idWZmZXIgPSBidWZmZXI7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgIC8vIGFkdHPnmoTlkIzmraXlrZfoioLvvIwxMuS9jVxuICAgICAgaWYgKG5leHQgPj4+IDQgIT09IDB4ZmZmKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYWFjIEVTIHBhcnNlIEVycm9yJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBmcSA9IFs5NjAwMCwgODgyMDAsIDY0MDAwLCA0ODAwMCwgNDQxMDAsIDMyMDAwLCAyNDAwMCwgMjIwNTAsIDE2MDAwLCAxMjAwMCwgMTEwMjUsIDgwMDAsIDczNTBdO1xuICAgICAgcmV0LmlkID0gKG5leHQgPj4+IDMgJiAweDAxKSA9PT0gMCA/ICdNUEVHLTQnIDogJ01QRUctMic7XG4gICAgICByZXQubGF5ZXIgPSBuZXh0ID4+PiAxICYgMHgwMztcbiAgICAgIHJldC5hYnNlbnQgPSBuZXh0ICYgMHgwMTtcbiAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgcmV0LmF1ZGlvT2JqZWN0VHlwZSA9IChuZXh0ID4+PiAxNCAmIDB4MDMpICsgMTtcbiAgICAgIHJldC5wcm9maWxlID0gcmV0LmF1ZGlvT2JqZWN0VHlwZSAtIDE7XG4gICAgICByZXQuZnJlcXVlbmN5SW5kZXggPSBuZXh0ID4+PiAxMCAmIDB4MGY7XG4gICAgICByZXQuZnJlcXVlbmNlID0gZnFbcmV0LmZyZXF1ZW5jeUluZGV4XTtcbiAgICAgIHJldC5jaGFubmVsID0gbmV4dCA+Pj4gNiAmIDB4MDc7XG4gICAgICByZXQuZnJhbWVMZW5ndGggPSAobmV4dCAmIDB4MDMpIDw8IDExIHwgKGJ1ZmZlci5yZWFkVWludDE2KCkgPj4+IDUpO1xuICAgICAgVHNEZW11eGVyLmdldEF1ZGlvQ29uZmlnKHJldCk7XG4gICAgICBidWZmZXIuc2tpcCgxKTtcbiAgICAgIHJldC5idWZmZXIgPSBidWZmZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRVMgJHt0eXBlfSBpcyBub3Qgc3VwcG9ydGVkYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHN0YXRpYyBUU0RUIChzdHJlYW0sIHRzLCBmcmFncykge1xuICAgIC8vIFRPRE9cbiAgICB0cy5wYXlsb2FkID0ge307XG4gIH1cblxuICBzdGF0aWMgQ0FUIChzdHJlYW0sIHRzLCBmcmFncykge1xuICAgIGxldCByZXQgPSB7fVxuICAgIHJldC50YWJsZUlEID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIGxldCBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICByZXQuc2VjdGlvbkluZGljYXRvciA9IG5leHQgPj4+IDc7XG4gICAgcmV0LnNlY3Rpb25MZW5ndGggPSBuZXh0ICYgMHgwZmZmO1xuICAgIHN0cmVhbS5za2lwKDIpO1xuICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgcmV0LnZlcnNpb24gPSBuZXh0ID4+PiAzO1xuICAgIHJldC5jdXJyZW50TmV4dEluZGljYXRvciA9IG5leHQgJiAweDAxO1xuICAgIHJldC5zZWN0aW9uTnVtYmVyID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIHJldC5sYXN0U2VjdGlvbk51bWJlciA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICBsZXQgTiA9ICh0aGlzLnNlY3Rpb25MZW5ndGggLSA5KSAvIDQ7XG4gICAgbGV0IGxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgbGlzdC5wdXNoKHt9KTtcbiAgICB9XG4gICAgcmV0LmNyYzMyID0gc3RyZWFtLnJlYWRVaW50MzIoKTtcbiAgICB0cy5wYXlsb2FkID0gcmV0O1xuICB9XG5cbiAgc3RhdGljIGdldEF1ZGlvQ29uZmlnIChyZXQpIHtcbiAgICBsZXQgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXG4gICAgbGV0IGNvbmZpZztcbiAgICBsZXQgZXh0ZW5zaW9uU2FtcGxlSW5kZXg7XG4gICAgaWYgKC9maXJlZm94L2kudGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICBpZiAocmV0LmZyZXF1ZW5jeUluZGV4ID49IDYpIHtcbiAgICAgICAgcmV0LmF1ZGlvT2JqZWN0VHlwZSA9IDU7XG4gICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSg0KTtcbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxlSW5kZXggPSByZXQuZnJlcXVlbmN5SW5kZXggLSAzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0LmF1ZGlvT2JqZWN0VHlwZSA9IDI7XG4gICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKTtcbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxlSW5kZXggPSByZXQuZnJlcXVlbmN5SW5kZXg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICE9PSAtMSkge1xuICAgICAgcmV0LmF1ZGlvT2JqZWN0VHlwZSA9IDI7XG4gICAgICBjb25maWcgPSBuZXcgQXJyYXkoMik7XG4gICAgICBleHRlbnNpb25TYW1wbGVJbmRleCA9IHJldC5mcmVxdWVuY3lJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0LmF1ZGlvT2JqZWN0VHlwZSA9IDU7XG4gICAgICBjb25maWcgPSBuZXcgQXJyYXkoNCk7XG4gICAgICBpZiAocmV0LmZyZXF1ZW5jeUluZGV4ID49IDYpIHtcbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxlSW5kZXggPSByZXQuZnJlcXVlbmN5SW5kZXggLSAzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJldC5jaGFubmVsID09PSAxKSB7XG4gICAgICAgICAgcmV0LmF1ZGlvT2JqZWN0VHlwZSA9IDI7XG4gICAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpO1xuICAgICAgICB9XG4gICAgICAgIGV4dGVuc2lvblNhbXBsZUluZGV4ID0gcmV0LmZyZXF1ZW5jeUluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZ1swXSA9IHJldC5hdWRpb09iamVjdFR5cGUgPDwgMztcbiAgICBjb25maWdbMF0gfD0gKHJldC5mcmVxdWVuY3lJbmRleCAmIDB4MGUpID4+IDE7XG4gICAgY29uZmlnWzFdID0gKHJldC5mcmVxdWVuY3lJbmRleCAmIDB4MDEpIDw8IDc7XG4gICAgY29uZmlnWzFdIHw9IHJldC5jaGFubmVsIDw8IDM7XG4gICAgaWYgKHJldC5hdWRpb09iamVjdFR5cGUgPT09IDUpIHtcbiAgICAgIGNvbmZpZ1sxXSB8PSAoZXh0ZW5zaW9uU2FtcGxlSW5kZXggJiAweDBlKSA+PiAxO1xuICAgICAgY29uZmlnWzJdID0gKGV4dGVuc2lvblNhbXBsZUluZGV4ICYgMHgwMSkgPDwgNztcbiAgICAgIGNvbmZpZ1syXSB8PSAyIDw8IDI7XG4gICAgICBjb25maWdbM10gPSAwO1xuICAgIH1cbiAgICByZXQuYXVkaW9Db25maWcgPSBjb25maWc7XG4gIH1cblxuICBnZXQgaW5wdXRCdWZmZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKHRoaXMuY29uZmlncy5pbnB1dGJ1ZmZlcik7XG4gIH1cblxuICBnZXQgX3RyYWNrcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRzRGVtdXhlcjtcbiIsImNsYXNzIFBsYXlsaXN0IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZ3MpIHtcbiAgICB0aGlzLl9iYXNlVVJMID0gJyc7XG4gICAgdGhpcy5fbGlzdCA9IHt9O1xuICAgIHRoaXMuX3RzID0ge307XG4gICAgdGhpcy52ZXJzaW9uID0gMDtcbiAgICB0aGlzLnNlcXVlbmNlID0gLTE7XG4gICAgdGhpcy50YXJnZXRkdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5mcmFnTGVuZ3RoID0gMDtcbiAgICB0aGlzLl9sYXN0Z2V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2F1ZG9jbGVhciA9IGNvbmZpZ3MuYXV0b2NsZWFyIHx8IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGxpc3QgKCkge1xuICAgIHJldHVybiB0aGlzLl9saXN0O1xuICB9XG5cbiAgc2V0IGJhc2VVUkwgKGJhc2VVUkwpIHtcbiAgICBpZiAodGhpcy5iYXNlVVJMICE9PSBiYXNlVVJMKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB0aGlzLl9iYXNlVVJMID0gYmFzZVVSTDtcbiAgICB9XG4gIH1cblxuICBnZXQgYmFzZVVSTCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VVUkw7XG4gIH1cblxuICBwdXNoICh0cywgZHVyYXRpb24sIGRpc2NvbnRpbnVlKSB7XG4gICAgaWYgKCF0aGlzLl90c1t0c10pIHtcbiAgICAgIHRoaXMuX3RzW3RzXSA9IHtkdXJhdGlvbjogZHVyYXRpb24sIFxuICAgICAgICBkb3dubG9hZGVkOiBmYWxzZSwgXG4gICAgICAgIGRvd25sb2FkaW5nOiBmYWxzZSwgXG4gICAgICAgIHN0YXJ0OiB0aGlzLmR1cmF0aW9uLCBcbiAgICAgICAgZGlzY29udGludWU6IGRpc2NvbnRpbnVlID8gdHJ1ZTogZmFsc2VcbiAgICAgIH07XG4gICAgICB0aGlzLl9saXN0W3RoaXMuZHVyYXRpb25dID0gdHM7XG4gICAgICB0aGlzLmR1cmF0aW9uICs9IGR1cmF0aW9uO1xuICAgICAgdGhpcy5mcmFnTGVuZ3RoICs9IDE7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlRnJhZyAodXJsKSB7XG4gICAgaWYgKHRoaXMuX3RzW3VybF0pIHtcbiAgICAgIGlmICh0aGlzLl90c1t1cmxdLnN0YXJ0ID4gdGhpcy5fbGFzdGdldC50aW1lKSB7XG4gICAgICAgIHRoaXMuX2xhc3RnZXQgPSB7XG4gICAgICAgICAgZHVyYXRpb246IHRoaXMuX3RzW3VybF0uZHVyYXRpb24sXG4gICAgICAgICAgdGltZTogdGhpcy5fdHNbdXJsXS5zdGFydCxcbiAgICAgICAgICBkb3dubG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICBkb3dubG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RbdGhpcy5fdHNbdXJsXS5zdGFydF07XG4gICAgICBkZWxldGUgdGhpcy5fdHNbdXJsXTtcbiAgICAgIHRoaXMuZnJhZ0xlbmd0aCAtPSAxO1xuICAgIH1cbiAgfVxuXG4gIHB1c2hNM1U4IChkYXRhLCBkZWxldGVwcmUpIHtcbiAgICAvLyDluLjop4Tkv6Hmga/mm7/mjaJcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbTN1OCBkYXRhIHJlY2VpdmVkLmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZlcnNpb24gPSBkYXRhLnZlcnNpb247XG4gICAgdGhpcy50YXJnZXRkdXJhdGlvbiA9IGRhdGEudGFyZ2V0ZHVyYXRpb247XG4gICAgaWYoZGF0YS5lbmNyeXB0ICYmICF0aGlzLmVuY3J5cHQpIHtcbiAgICAgIHRoaXMuZW5jcnlwdCA9IGRhdGEuZW5jcnlwdDtcbiAgICB9XG4gICAgLy8g5paw5YiG54mH5L+h5oGvXG4gICAgaWYgKGRhdGEuc2VxdWVuY2UgPiB0aGlzLnNlcXVlbmNlKSB7XG4gICAgICB0aGlzLnNlcXVlbmNlID0gZGF0YS5zZXF1ZW5jZTtcbiAgICAgIGxldCBuZXdmcmFnbGlzdCA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZnJhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZyYWcgPSBkYXRhLmZyYWdzW2ldO1xuICAgICAgICBpZiAoIXRoaXMuX3RzW2ZyYWcudXJsXSkge1xuICAgICAgICAgIG5ld2ZyYWdsaXN0LnB1c2goZnJhZy51cmwpXG4gICAgICAgICAgdGhpcy5wdXNoKGZyYWcudXJsLCBmcmFnLmR1cmF0aW9uLCBmcmFnLmRpc2NvbnRpbnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihuZXdmcmFnbGlzdC5sZW5ndGggPCAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuIG5vdCByZWFkIHRzIGZpbGUgbGlzdC5gKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGRlbGV0ZXByZSkge1xuICAgICAgICBsZXQgdHNsaXN0ID0gdGhpcy5nZXRUc0xpc3QoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0c2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobmV3ZnJhZ2xpc3QuaW5kZXhPZih0c2xpc3RbaV0pIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVGcmFnKHRzbGlzdFtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT2xkIG0zdTggZmlsZSByZWNlaXZlZCwgJHtkYXRhLnNlcXVlbmNlfWApO1xuICAgIH1cbiAgfVxuXG4gIGdldFRzTGlzdCAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3RzKTtcbiAgfVxuXG4gIGRvd25sb2FkZWQgKHRzbmFtZSwgaXNsb2FkZWQpIHtcbiAgICBsZXQgdHMgPSB0aGlzLl90c1t0c25hbWVdO1xuICAgIGlmICh0cykge1xuICAgICAgdHMuZG93bmxvYWRlZCA9IGlzbG9hZGVkXG4gICAgfVxuICB9XG5cbiAgZG93bmxvYWRpbmcgKHRzbmFtZSwgbG9hZGluZykge1xuICAgIGxldCB0cyA9IHRoaXMuX3RzW3RzbmFtZV07XG4gICAgaWYgKHRzKSB7XG4gICAgICB0cy5kb3dubG9hZGluZyA9IGxvYWRpbmdcbiAgICB9XG4gIH1cblxuICBnZXRUc0J5TmFtZSAobmFtZSkge1xuICAgIHJldHVybiB0aGlzLl90c1tuYW1lXTtcbiAgfVxuXG4gIGdldFRzICh0aW1lKSB7XG4gICAgbGV0IHRpbWVsaXN0ID0gT2JqZWN0LmtleXModGhpcy5fbGlzdCk7XG4gICAgbGV0IHRzO1xuXG4gICAgaWYgKHRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2xhc3RnZXQpIHtcbiAgICAgICAgdGltZSA9IHRoaXMuX2xhc3RnZXQudGltZSArIHRoaXMuX2xhc3RnZXQuZHVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGltZWxpc3QubGVuZ3RoIDwgMSB8fCB0aW1lID49IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRpbWVsaXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGEpIC0gcGFyc2VGbG9hdChiKVxuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZWxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aW1lID49IHBhcnNlSW50KHRpbWVsaXN0W2ldKSkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5fbGlzdFt0aW1lbGlzdFtpXV07XG4gICAgICAgIGxldCBkb3dubG9hZGVkID0gdGhpcy5fdHNbdXJsXS5kb3dubG9hZGVkO1xuICAgICAgICBsZXQgZG93bmxvYWRpbmcgPSB0aGlzLl90c1t1cmxdLmRvd25sb2FkaW5nO1xuICAgICAgICB0cyA9IHt1cmwsIGRvd25sb2FkZWQsIGRvd25sb2FkaW5nLCB0aW1lOiBwYXJzZUludCh0aW1lbGlzdFtpXSksIGR1cmF0aW9uOiBwYXJzZUludCh0aGlzLl90c1t1cmxdLmR1cmF0aW9uKX07XG4gICAgICAgIGlmICh0aGlzLmF1dG9jbGVhcikge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl90c1t0aGlzLl9sYXN0Z2V0LnVybF07XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2xpc3RbdGhpcy5fbGFzdGdldC50aW1lXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYXN0Z2V0ID0gdHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRzO1xuICB9XG5cbiAgY2xlYXIgKCkge1xuICAgIHRoaXMuX2Jhc2VVUkwgPSAnJztcbiAgICB0aGlzLl9saXN0ID0ge307XG4gICAgdGhpcy5fdHMgPSB7fTtcbiAgICB0aGlzLnZlcnNpb24gPSAwO1xuICAgIHRoaXMuc2VxdWVuY2UgPSAtMTtcbiAgICB0aGlzLnRhcmdldGR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgfVxuXG4gIGNsZWFyRG93bmxvYWRlZCAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBPYmplY3Qua2V5cyh0aGlzLl90cykubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdHMgPSB0aGlzLl90c1tPYmplY3Qua2V5cyh0aGlzLl90cylbaV1dO1xuICAgICAgdHMuZG93bmxvYWRlZCA9IGZhbHNlO1xuICAgICAgdHMuZG93bmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9iYXNlVVJMID0gJyc7XG4gICAgdGhpcy5fbGlzdCA9IHt9O1xuICAgIHRoaXMuX3RzID0ge307XG4gICAgdGhpcy52ZXJzaW9uID0gMDtcbiAgICB0aGlzLnNlcXVlbmNlID0gLTE7XG4gICAgdGhpcy50YXJnZXRkdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5mcmFnTGVuZ3RoID0gMDtcbiAgICB0aGlzLl9sYXN0Z2V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2F1ZG9jbGVhciA9IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXlsaXN0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIEZldGNoTG9hZGVyOiByZXF1aXJlKCcuL3NyYy9mZXRjaC1sb2FkZXInKS5kZWZhdWx0XG59O1xuIiwiaW1wb3J0IHsgRVZFTlRTIH0gZnJvbSAneGdwbGF5ZXItdXRpbHMnO1xuXG5jb25zdCBMT0FERVJfRVZFTlRTID0gRVZFTlRTLkxPQURFUl9FVkVOVFM7XG5jb25zdCBSRUFEX1NUUkVBTSA9IDA7XG5jb25zdCBSRUFEX1RFWFQgPSAxO1xuY29uc3QgUkVBRF9KU09OID0gMjtcbmNvbnN0IFJFQURfQlVGRkVSID0gMztcbmNsYXNzIEZldGNoTG9hZGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZ3MpIHtcbiAgICB0aGlzLmNvbmZpZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWdzKTtcbiAgICB0aGlzLnVybCA9IG51bGxcbiAgICB0aGlzLnN0YXR1cyA9IDBcbiAgICB0aGlzLmVycm9yID0gbnVsbFxuICAgIHRoaXMuX3JlYWRlciA9IG51bGw7XG4gICAgdGhpcy5fY2FuY2VsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlYWR0eXBlID0gdGhpcy5jb25maWdzLnJlYWR0eXBlO1xuICAgIHRoaXMuYnVmZmVyID0gdGhpcy5jb25maWdzLmJ1ZmZlciB8fCAnTE9BREVSX0JVRkZFUic7XG4gICAgdGhpcy5fbG9hZGVyVGFza05vID0gMDtcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMub24oTE9BREVSX0VWRU5UUy5MQURFUl9TVEFSVCwgdGhpcy5sb2FkLmJpbmQodGhpcykpXG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnbG9hZGVyJ1xuICB9XG5cbiAgbG9hZCAodXJsLCBvcHRzKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLl9jYW5jZWxlZCA9IGZhbHNlO1xuXG4gICAgLy8gVE9ETzogQWRkIFJhbmdlc1xuICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldFBhcmFtcyhvcHRzKVxuICAgIF90aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgcmV0dXJuIGZldGNoKHRoaXMudXJsLCBwYXJhbXMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgX3RoaXMuc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgIHJldHVybiBfdGhpcy5fb25GZXRjaFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfRVJST1IsIF90aGlzLlRBRywgbmV3IEVycm9yKGBpbnZhbGlkIHJlc3BvbnNlLmApKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpICB7XG4gICAgICBfdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0VSUk9SLCBfdGhpcy5UQUcsIGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICBfb25GZXRjaFJlc3BvbnNlIChyZXNwb25zZSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGJ1ZmZlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UodGhpcy5idWZmZXIpO1xuICAgIHRoaXMuX2xvYWRlclRhc2tObysrO1xuICAgIGxldCB0YXNrbm8gPSB0aGlzLl9sb2FkZXJUYXNrTm87XG4gICAgaWYgKHJlc3BvbnNlLm9rID09PSB0cnVlKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMucmVhZHR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUFEX0pTT046XG4gICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIF90aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKCFfdGhpcy5fY2FuY2VsZWQgJiYgIV90aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfQ09NUExFVEUsIGJ1ZmZlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9DT01QTEVURSwgZGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBSRUFEX1RFWFQ6XG4gICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIF90aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKCFfdGhpcy5fY2FuY2VsZWQgJiYgIV90aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfQ09NUExFVEUsIGJ1ZmZlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9DT01QTEVURSwgZGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBSRUFEX0JVRkZFUjpcbiAgICAgICAgICByZXNwb25zZS5hcnJheUJ1ZmZlcigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIF90aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKCFfdGhpcy5fY2FuY2VsZWQgJiYgIV90aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoKG5ldyBVaW50OEFycmF5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0NPTVBMRVRFLCBidWZmZXIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfQ09NUExFVEUsIGRhdGEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUkVBRF9TVFJFQU06XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uUmVhZGVyKHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCksIHRhc2tubyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX29uUmVhZGVyIChyZWFkZXIsIHRhc2tubykge1xuICAgIGxldCBidWZmZXIgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKHRoaXMuYnVmZmVyKTtcbiAgICBpZiAoKCFidWZmZXIgJiYgdGhpcy5fcmVhZGVyKSB8fCB0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3JlYWRlci5jYW5jZWwoKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBETyBOT1RISU5HXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcmVhZGVyID0gcmVhZGVyXG4gICAgaWYgKHRoaXMubG9hZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAvLyByZWFkZXIgcmVhZCBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZS4gZ2V0IGRhdGEgd2hlbiBjYWxsYmFjayBhbmQgaGFzIHZhbHVlLmRvbmUgd2hlbiBkaXNjb25uZWN0ZWQuXG4gICAgLy8gcmVhZOaWueazlei/lOWbnuS4gOS4qlByb21pc2UuIOWbnuiwg+S4reWPr+S7peiOt+WPluWIsOaVsOaNruOAguW9k3ZhbHVlLmRvbmXlrZjlnKjml7bvvIzor7TmmI7pk77mjqXmlq3lvIDjgIJcbiAgICB0aGlzLl9yZWFkZXIgJiYgdGhpcy5fcmVhZGVyLnJlYWQoKS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIGlmICh2YWwuZG9uZSkge1xuICAgICAgICAvLyBUT0RPOiDlrozmiJDlpITnkIZcbiAgICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIF90aGlzLnN0YXR1cyA9IDA7XG4gICAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfQ09NUExFVEUsIGJ1ZmZlcilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5fY2FuY2VsZWQgfHwgX3RoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICBpZiAgKF90aGlzLl9yZWFkZXIpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX3RoaXMuX3JlYWRlci5jYW5jZWwoKVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIERPIE5PVEhJTkdcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBidWZmZXIucHVzaCh2YWwudmFsdWUpXG4gICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0RBVEFMT0FERUQsIGJ1ZmZlcilcbiAgICAgIHJldHVybiBfdGhpcy5fb25SZWFkZXIocmVhZGVyLCB0YXNrbm8pXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBfdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0VSUk9SLCBfdGhpcy5UQUcsIGVycm9yKTtcbiAgICB9KVxuICB9XG5cbiAgZ2V0UGFyYW1zIChvcHRzKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzKVxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuXG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgY2FjaGU6ICdkZWZhdWx0J1xuICAgIH1cblxuICAgIC8vIGFkZCBjdXN0bW9yIGhlYWRlcnNcbiAgICAvLyDmt7vliqDoh6rlrprkuYnlpLRcbiAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlncy5oZWFkZXJzID09PSAnb2JqZWN0Jykge1xuICAgICAgbGV0IGNvbmZpZ0hlYWRlcnMgPSB0aGlzLmNvbmZpZ3MuaGVhZGVyc1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZ0hlYWRlcnMpIHtcbiAgICAgICAgaWYgKGNvbmZpZ0hlYWRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgY29uZmlnSGVhZGVyc1trZXldKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmhlYWRlcnMgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgb3B0SGVhZGVycyA9IG9wdGlvbnMuaGVhZGVyc1xuICAgICAgZm9yIChsZXQga2V5IGluIG9wdEhlYWRlcnMpIHtcbiAgICAgICAgaWYgKG9wdEhlYWRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgb3B0SGVhZGVyc1trZXldKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY29ycyA9PT0gZmFsc2UpIHtcbiAgICAgIHBhcmFtcy5tb2RlID0gJ3NhbWUtb3JpZ2luJ1xuICAgIH1cblxuICAgIC8vIHdpdGhDcmVkZW50aWFscyBpcyBkaXNhYmxlZCBieSBkZWZhdWx0XG4gICAgLy8gd2l0aENyZWRlbnRpYWxzIOWcqOm7mOiupOaDheWGteS4i+S4jeiiq+S9v+eUqOOAglxuICAgIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcGFyYW1zLmNyZWRlbnRpYWxzID0gJ2luY2x1ZGUnXG4gICAgfVxuXG4gICAgLy8gVE9ETzogQWRkIHJhbmdlcztcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgY2FuY2VsICgpIHtcbiAgICBpZiAodGhpcy5fcmVhZGVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9yZWFkZXIuY2FuY2VsKClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8g6Ziy5q2iZmFpbGVkOiAyMDDplJnor6/ooqvmiZPljbDliLDmjqfliLblj7DkuIpcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlYWRlciA9IG51bGxcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9jYW5jZWxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZVxuICAgIHRoaXMuY2FuY2VsKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmV0Y2hMb2FkZXJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBNcDRSZW11eGVyOiByZXF1aXJlKCcuL3NyYy9tcDQnKS5kZWZhdWx0XG59O1xuIiwiaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAneGdwbGF5ZXItdXRpbHMnO1xuXG4vLyBjb25zdCBVSU5UMzJfTUFYID0gTWF0aC5wb3coMiwgMzIpIC0gMTtcbmNsYXNzIEZtcDQge1xuICBzdGF0aWMgc2l6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQnVmZmVyLndyaXRlVWludDMyKHZhbHVlKVxuICB9XG4gIHN0YXRpYyBpbml0Qm94IChzaXplLCBuYW1lLCAuLi5jb250ZW50KSB7XG4gICAgY29uc3QgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZShzaXplKSwgRm1wNC50eXBlKG5hbWUpLCAuLi5jb250ZW50KVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIGV4dGVuc2lvbiAodmVyc2lvbiwgZmxhZykge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICB2ZXJzaW9uLFxuICAgICAgKGZsYWcgPj4gMTYpICYgMHhmZixcbiAgICAgIChmbGFnID4+IDgpICYgMHhmZixcbiAgICAgIGZsYWcgJiAweGZmXG4gICAgXSlcbiAgfVxuICBzdGF0aWMgZnR5cCAoKSB7XG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgyNCwgJ2Z0eXAnLCBuZXcgVWludDhBcnJheShbXG4gICAgICAweDY5LCAweDczLCAweDZGLCAweDZELCAvLyBpc29tLFxuICAgICAgMHgwLCAweDAsIDB4MDAsIDB4MDEsIC8vIG1pbm9yX3ZlcnNpb246IDB4MDFcbiAgICAgIDB4NjksIDB4NzMsIDB4NkYsIDB4NkQsIC8vIGlzb21cbiAgICAgIDB4NjEsIDB4NzYsIDB4NjMsIDB4MzEgLy8gYXZjMVxuICAgIF0pKVxuICB9XG4gIHN0YXRpYyBtb292ICh7IHR5cGUsIG1ldGEgfSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCBtdmhkID0gRm1wNC5tdmhkKG1ldGEuZHVyYXRpb24sIG1ldGEudGltZXNjYWxlKVxuICAgIGxldCB0cmFrXG5cbiAgICBpZiAodHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgdHJhayA9IEZtcDQudmlkZW9UcmFrKG1ldGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYWsgPSBGbXA0LmF1ZGlvVHJhayhtZXRhKVxuICAgIH1cblxuICAgIGxldCBtdmV4ID0gRm1wNC5tdmV4KG1ldGEuZHVyYXRpb24sIG1ldGEudGltZXNjYWxlIHx8IDEwMDAsIG1ldGEuaWQpO1xuICAgIFttdmhkLCB0cmFrLCBtdmV4XS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goc2l6ZSwgJ21vb3YnLCBtdmhkLCB0cmFrLCBtdmV4KVxuICB9XG4gIHN0YXRpYyBtdmhkIChkdXJhdGlvbiwgdGltZXNjYWxlID0gMTAwMCkge1xuICAgIC8vIGR1cmF0aW9uICo9IHRpbWVzY2FsZTtcbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyB2ZXJzaW9uKDApICsgZmxhZ3MgICAgIDHkvY3nmoRib3jniYjmnKwrM+S9jWZsYWdzICAgYm9454mI5pys77yMMOaIljHvvIzkuIDoiKzkuLow44CC77yI5Lul5LiL5a2X6IqC5pWw5Z2H5oyJdmVyc2lvbj0w77yJXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBjcmVhdGlvbl90aW1lICAgIOWIm+W7uuaXtumXtCAg77yI55u45a+55LqOVVRD5pe26Ze0MTkwNC0wMS0wMembtueCueeahOenkuaVsO+8iVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbW9kaWZpY2F0aW9uX3RpbWUgICDkv67mlLnml7bpl7RcblxuICAgICAgLyoqXG4gICAgICAgICAgICAgKiB0aW1lc2NhbGU6IDQgYnl0ZXPmlofku7blqpLkvZPlnKgx56eS5pe26Ze05YaF55qE5Yi75bqm5YC877yM5Y+v5Lul55CG6Kej5Li6MeenkumVv+W6plxuICAgICAgICAgICAgICovXG4gICAgICAodGltZXNjYWxlID4+PiAyNCkgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSA+Pj4gMTYpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUgPj4+IDgpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUpICYgMHhGRixcblxuICAgICAgLyoqXG4gICAgICAgICAgICAgKiBkdXJhdGlvbjogNCBieXRlc+ivpXRyYWNr55qE5pe26Ze06ZW/5bqm77yM55SoZHVyYXRpb27lkox0aW1lIHNjYWxl5YC85Y+v5Lul6K6h566XdHJhY2vml7bplb/vvIzmr5TlpoJhdWRpbyB0cmFja+eahHRpbWUgc2NhbGUgPSA4MDAwLFxuICAgICAgICAgICAgICogZHVyYXRpb24gPSA1NjAxMjjvvIzml7bplb/kuLo3MC4wMTbvvIx2aWRlbyB0cmFja+eahHRpbWUgc2NhbGUgPSA2MDAsIGR1cmF0aW9uID0gNDIwMDDvvIzml7bplb/kuLo3MFxuICAgICAgICAgICAgICovXG4gICAgICAoZHVyYXRpb24gPj4+IDI0KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24gPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24gPj4+IDgpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbikgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCwgLy8gUHJlZmVycmVkIHJhdGU6IDEuMCAgIOaOqOiNkOaSreaUvumAn+eOh++8jOmrmDE25L2N5ZKM5L2OMTbkvY3liIbliKvkuLrlsI/mlbDngrnmlbTmlbDpg6jliIblkozlsI/mlbDpg6jliIbvvIzljbNbMTYuMTZdIOagvOW8j++8jOivpeWAvOS4ujEuMO+8iDB4MDAwMTAwMDDvvInooajnpLrmraPluLjliY3lkJHmkq3mlL5cbiAgICAgIC8qKlxuICAgICAgICAgICAgICogUHJlZmVycmVkVm9sdW1lKDEuMCwgMmJ5dGVzKSArIHJlc2VydmVkKDJieXRlcylcbiAgICAgICAgICAgICAqIOS4jnJhdGXnsbvkvLzvvIxbOC44XSDmoLzlvI/vvIwxLjDvvIgweDAxMDDvvInooajnpLrmnIDlpKfpn7Pph49cbiAgICAgICAgICAgICAqL1xuICAgICAgMHgwMSwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vICByZXNlcnZlZDogNCArIDQgYnl0ZXPkv53nlZnkvY1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLCAvLyAtLS0tYmVnaW4gY29tcG9zaXRpb24gbWF0cml4LS0tLVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIOinhumikeWPmOaNouefqemYtSAgIOe6v+aAp+S7o+aVsFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDQwLCAweDAwLCAweDAwLCAweDAwLCAvLyAtLS0tZW5kIGNvbXBvc2l0aW9uIG1hdHJpeC0tLS1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIC0tLS1iZWdpbiBwcmVfZGVmaW5lZCA2ICogNCBieXRlcy0tLS1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBwcmUtZGVmaW5lZCDkv53nlZnkvY1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gLS0tLWVuZCBwcmVfZGVmaW5lZCA2ICogNCBieXRlcy0tLS1cbiAgICAgIDB4RkYsIDB4RkYsIDB4RkYsIDB4RkYgLy8gbmV4dF90cmFja19JRCDkuIvkuIDkuKp0cmFja+S9v+eUqOeahGlk5Y+3XG4gICAgXSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDggKyBieXRlcy5sZW5ndGgsICdtdmhkJywgbmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuICB9XG4gIHN0YXRpYyB2aWRlb1RyYWsgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcblxuICAgIGxldCB0a2hkID0gRm1wNC50a2hkKHtcbiAgICAgIGlkOiAxLFxuICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24sXG4gICAgICB0aW1lc2NhbGU6IGRhdGEudGltZXNjYWxlIHx8IDEwMDAsXG4gICAgICB3aWR0aDogZGF0YS5wcmVzZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IGRhdGEucHJlc2VudEhlaWdodCxcbiAgICAgIHR5cGU6ICd2aWRlbydcbiAgICB9KVxuICAgIGxldCBtZGlhID0gRm1wNC5tZGlhKHtcbiAgICAgIHR5cGU6ICd2aWRlbycsXG4gICAgICB0aW1lc2NhbGU6IGRhdGEudGltZXNjYWxlIHx8IDEwMDAsXG4gICAgICBkdXJhdGlvbjogZGF0YS5kdXJhdGlvbixcbiAgICAgIGF2Y2M6IGRhdGEuYXZjYyxcbiAgICAgIHBhclJhdGlvOiBkYXRhLnBhclJhdGlvLFxuICAgICAgd2lkdGg6IGRhdGEucHJlc2VudFdpZHRoLFxuICAgICAgaGVpZ2h0OiBkYXRhLnByZXNlbnRIZWlnaHRcbiAgICB9KTtcbiAgICBbdGtoZCwgbWRpYV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KHNpemUsICd0cmFrJywgdGtoZCwgbWRpYSlcbiAgfVxuICBzdGF0aWMgYXVkaW9UcmFrIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHRraGQgPSBGbXA0LnRraGQoe1xuICAgICAgaWQ6IDIsXG4gICAgICBkdXJhdGlvbjogZGF0YS5kdXJhdGlvbixcbiAgICAgIHRpbWVzY2FsZTogZGF0YS50aW1lc2NhbGUgfHwgMTAwMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgdHlwZTogJ2F1ZGlvJ1xuICAgIH0pXG4gICAgbGV0IG1kaWEgPSBGbXA0Lm1kaWEoe1xuICAgICAgdHlwZTogJ2F1ZGlvJyxcbiAgICAgIHRpbWVzY2FsZTogZGF0YS50aW1lc2NhbGUgfHwgMTAwMCxcbiAgICAgIGR1cmF0aW9uOiBkYXRhLmR1cmF0aW9uLFxuICAgICAgY2hhbm5lbENvdW50OiBkYXRhLmNoYW5uZWxDb3VudCxcbiAgICAgIHNhbXBsZXJhdGU6IGRhdGEuc2FtcGxlUmF0ZSxcbiAgICAgIGNvbmZpZzogZGF0YS5jb25maWdcbiAgICB9KTtcbiAgICBbdGtoZCwgbWRpYV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KHNpemUsICd0cmFrJywgdGtoZCwgbWRpYSlcbiAgfVxuICBzdGF0aWMgdGtoZCAoZGF0YSkge1xuICAgIGxldCBpZCA9IGRhdGEuaWRcbiAgICBsZXQgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uXG4gICAgbGV0IHdpZHRoID0gZGF0YS53aWR0aFxuICAgIGxldCBoZWlnaHQgPSBkYXRhLmhlaWdodFxuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwNywgLy8gdmVyc2lvbigwKSArIGZsYWdzIDHkvY3niYjmnKwgYm9454mI5pys77yMMOaIljHvvIzkuIDoiKzkuLow44CC77yI5Lul5LiL5a2X6IqC5pWw5Z2H5oyJdmVyc2lvbj0w77yJ5oyJ5L2N5oiW5pON5L2c57uT5p6c5YC877yM6aKE5a6a5LmJ5aaC5LiL77yaXG4gICAgICAvLyAweDAwMDAwMSB0cmFja19lbmFibGVk77yM5ZCm5YiZ6K+ldHJhY2vkuI3ooqvmkq3mlL7vvJtcbiAgICAgIC8vIDB4MDAwMDAyIHRyYWNrX2luX21vdmll77yM6KGo56S66K+ldHJhY2vlnKjmkq3mlL7kuK3ooqvlvJXnlKjvvJtcbiAgICAgIC8vIDB4MDAwMDA0IHRyYWNrX2luX3ByZXZpZXfvvIzooajnpLror6V0cmFja+WcqOmihOiniOaXtuiiq+W8leeUqOOAglxuICAgICAgLy8g5LiA6Iis6K+l5YC85Li6N++8jDErMis0IOWmguaenOS4gOS4quWqkuS9k+aJgOaciXRyYWNr5Z2H5pyq6K6+572udHJhY2tfaW5fbW92aWXlkox0cmFja19pbl9wcmV2aWV377yM5bCG6KKr55CG6Kej5Li65omA5pyJdHJhY2vlnYforr7nva7kuobov5nkuKTpobnvvJvlr7nkuo5oaW50IHRyYWNr77yM6K+l5YC85Li6MFxuICAgICAgLy8gaGludCB0cmFjayDov5nkuKrnibnmrornmoR0cmFja+W5tuS4jeWMheWQq+WqkuS9k+aVsOaNru+8jOiAjOaYr+WMheWQq+S6huS4gOS6m+WwhuWFtuS7luaVsOaNrnRyYWNr5omT5YyF5oiQ5rWB5aqS5L2T55qE5oyH56S65L+h5oGv44CCXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBjcmVhdGlvbl90aW1l5Yib5bu65pe26Ze077yI55u45a+55LqOVVRD5pe26Ze0MTkwNC0wMS0wMembtueCueeahOenkuaVsO+8iVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbW9kaWZpY2F0aW9uIHRpbWUg5L+u5pS55pe26Ze0XG4gICAgICAoaWQgPj4+IDI0KSAmIDB4RkYsIC8vIHRyYWNrX0lEOiA0IGJ5dGVzIGlk5Y+377yM5LiN6IO96YeN5aSN5LiU5LiN6IO95Li6MFxuICAgICAgKGlkID4+PiAxNikgJiAweEZGLFxuICAgICAgKGlkID4+PiA4KSAmIDB4RkYsXG4gICAgICAoaWQpICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkOiA0IGJ5dGVzICAgIOS/neeVmeS9jVxuICAgICAgKGR1cmF0aW9uID4+PiAyNCkgJiAweEZGLCAvLyBkdXJhdGlvbjogNCBieXRlcyB0cmFja+eahOaXtumXtOmVv+W6plxuICAgICAgKGR1cmF0aW9uID4+PiAxNikgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiA4KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24pICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkOiAyICogNCBieXRlcyAgICDkv53nlZnkvY1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBsYXllcigyYnl0ZXMpICsgYWx0ZXJuYXRlX2dyb3VwKDJieXRlcykgIOinhumikeWxgu+8jOm7mOiupOS4ujDvvIzlgLzlsI/nmoTlnKjkuIrlsYIudHJhY2vliIbnu4Tkv6Hmga/vvIzpu5jorqTkuLow6KGo56S66K+ldHJhY2vmnKrkuI7lhbbku5Z0cmFja+aciee+pOe7hOWFs+ezu1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gdm9sdW1lKDJieXRlcykgKyByZXNlcnZlZCgyYnl0ZXMpICAgIFs4LjhdIOagvOW8j++8jOWmguaenOS4uumfs+mikXRyYWNr77yMMS4w77yIMHgwMTAw77yJ6KGo56S65pyA5aSn6Z+z6YeP77yb5ZCm5YiZ5Li6MCAgICvkv53nlZnkvY1cbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIC0tLS1iZWdpbiBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLCAvLyDop4bpopHlj5jmjaLnn6npmLVcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4NDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIC0tLS1lbmQgY29tcG9zaXRpb24gbWF0cml4LS0tLVxuICAgICAgKHdpZHRoID4+PiA4KSAmIDB4RkYsIC8vIC8v5a695bqmXG4gICAgICAod2lkdGgpICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDAsXG4gICAgICAoaGVpZ2h0ID4+PiA4KSAmIDB4RkYsIC8vIOmrmOW6plxuICAgICAgKGhlaWdodCkgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMFxuICAgIF0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCg4ICsgY29udGVudC5ieXRlTGVuZ3RoLCAndGtoZCcsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIGVkdHMgKGRhdGEpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvblxuICAgIGxldCBtZWRpYVRpbWUgPSBkYXRhLm1lZGlhVGltZVxuICAgIGJ1ZmZlci53cml0ZShGbXA0LnNpemUoMzYpLCBGbXA0LnR5cGUoJ2VkdHMnKSlcbiAgICAvLyBlbHN0XG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZSgyOCksIEZtcDQudHlwZSgnZWxzdCcpKVxuICAgIGJ1ZmZlci53cml0ZShuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxLCAvLyBlbnRyeSBjb3VudFxuICAgICAgKGR1cmF0aW9uID4+IDI0KSAmIDB4ZmYsIChkdXJhdGlvbiA+PiAxNikgJiAweGZmLCAoZHVyYXRpb24gPj4gOCkgJiAweGZmLCBkdXJhdGlvbiAmIDB4ZmYsXG4gICAgICAobWVkaWFUaW1lID4+IDI0KSAmIDB4ZmYsIChtZWRpYVRpbWUgPj4gMTYpICYgMHhmZiwgKG1lZGlhVGltZSA+PiA4KSAmIDB4ZmYsIG1lZGlhVGltZSAmIDB4ZmYsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxIC8vIG1lZGlhIHJhdGVcbiAgICBdKSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBtZGlhIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IG1kaGQgPSBGbXA0Lm1kaGQoZGF0YS50aW1lc2NhbGUsIGRhdGEuZHVyYXRpb24pXG4gICAgbGV0IGhkbHIgPSBGbXA0LmhkbHIoZGF0YS50eXBlKVxuICAgIGxldCBtaW5mID0gRm1wNC5taW5mKGRhdGEpO1xuICAgIFttZGhkLCBoZGxyLCBtaW5mXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goc2l6ZSwgJ21kaWEnLCBtZGhkLCBoZGxyLCBtaW5mKVxuICB9XG4gIHN0YXRpYyBtZGhkICh0aW1lc2NhbGUgPSAxMDAwLCBkdXJhdGlvbikge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gY3JlYXRpb25fdGltZSAgICDliJvlu7rml7bpl7RcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIG1vZGlmaWNhdGlvbl90aW1l5L+u5pS55pe26Ze0XG4gICAgICAodGltZXNjYWxlID4+PiAyNCkgJiAweEZGLCAvLyB0aW1lc2NhbGU6IDQgYnl0ZXMgICAg5paH5Lu25aqS5L2T5ZyoMeenkuaXtumXtOWGheeahOWIu+W6puWAvO+8jOWPr+S7peeQhuino+S4ujHnp5Lplb/luqZcbiAgICAgICh0aW1lc2NhbGUgPj4+IDE2KSAmIDB4RkYsXG4gICAgICAodGltZXNjYWxlID4+PiA4KSAmIDB4RkYsXG4gICAgICAodGltZXNjYWxlKSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24gPj4+IDI0KSAmIDB4RkYsIC8vIGR1cmF0aW9uOiA0IGJ5dGVzICB0cmFja+eahOaXtumXtOmVv+W6plxuICAgICAgKGR1cmF0aW9uID4+PiAxNikgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiA4KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24pICYgMHhGRixcbiAgICAgIDB4NTUsIDB4QzQsIC8vIGxhbmd1YWdlOiB1bmQgKHVuZGV0ZXJtaW5lZCkg5aqS5L2T6K+t6KiA56CB44CC5pyA6auY5L2N5Li6MO+8jOWQjumdojE15L2N5Li6M+S4quWtl+espu+8iOingUlTTyA2MzktMi9U5qCH5YeG5Lit5a6a5LmJ77yJXG4gICAgICAweDAwLCAweDAwIC8vIHByZV9kZWZpbmVkID0gMFxuICAgIF0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgxMiArIGNvbnRlbnQuYnl0ZUxlbmd0aCwgJ21kaGQnLCBGbXA0LmV4dGVuc2lvbigwLCAwKSwgY29udGVudClcbiAgfVxuICBzdGF0aWMgaGRsciAodHlwZSkge1xuICAgIGxldCB2YWx1ZSA9IFsweDAwLCAvLyB2ZXJzaW9uIDBcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBwcmVfZGVmaW5lZFxuICAgICAgMHg3NiwgMHg2OSwgMHg2NCwgMHg2NSwgLy8gaGFuZGxlcl90eXBlOiAndmlkZSdcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4NTYsIDB4NjksIDB4NjQsIDB4NjUsXG4gICAgICAweDZmLCAweDQ4LCAweDYxLCAweDZlLFxuICAgICAgMHg2NCwgMHg2YywgMHg2NSwgMHg3MiwgMHgwMCAvLyBuYW1lOiAnVmlkZW9IYW5kbGVyJ1xuICAgIF1cbiAgICBpZiAodHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgdmFsdWUuc3BsaWNlKDgsIDQsIC4uLlsweDczLCAweDZmLCAweDc1LCAweDZlXSlcbiAgICAgIHZhbHVlLnNwbGljZSgyNCwgMTMsIC4uLlsweDUzLCAweDZmLCAweDc1LCAweDZlLFxuICAgICAgICAweDY0LCAweDQ4LCAweDYxLCAweDZlLFxuICAgICAgICAweDY0LCAweDZjLCAweDY1LCAweDcyLCAweDAwXSlcbiAgICB9XG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCg4ICsgdmFsdWUubGVuZ3RoLCAnaGRscicsIG5ldyBVaW50OEFycmF5KHZhbHVlKSlcbiAgfVxuICBzdGF0aWMgbWluZiAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCB2bWhkID0gZGF0YS50eXBlID09PSAndmlkZW8nID8gRm1wNC52bWhkKCkgOiBGbXA0LnNtaGQoKVxuICAgIGxldCBkaW5mID0gRm1wNC5kaW5mKClcbiAgICBsZXQgc3RibCA9IEZtcDQuc3RibChkYXRhKTtcbiAgICBbdm1oZCwgZGluZiwgc3RibF0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KHNpemUsICdtaW5mJywgdm1oZCwgZGluZiwgc3RibClcbiAgfVxuICBzdGF0aWMgdm1oZCAoKSB7XG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgyMCwgJ3ZtaGQnLCBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAxLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgLy8gZ3JhcGhpY3Ntb2RlXG4gICAgICAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAgLy8gb3Bjb2xvclxuICAgIF0pKVxuICB9XG4gIHN0YXRpYyBzbWhkICgpIHtcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDE2LCAnc21oZCcsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAvLyBiYWxhbmNlXG4gICAgICAweDAwLCAweDAwIC8vIHJlc2VydmVkXG4gICAgXSkpXG4gIH1cbiAgc3RhdGljIGRpbmYgKCkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgZHJlZiA9IFsweDAwLCAvLyB2ZXJzaW9uIDBcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxLCAvLyBlbnRyeV9jb3VudFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwYywgLy8gZW50cnlfc2l6ZVxuICAgICAgMHg3NSwgMHg3MiwgMHg2YywgMHgyMCwgLy8gJ3VybCcgdHlwZVxuICAgICAgMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAxIC8vIGVudHJ5X2ZsYWdzXG4gICAgXVxuICAgIGJ1ZmZlci53cml0ZShGbXA0LnNpemUoMzYpLCBGbXA0LnR5cGUoJ2RpbmYnKSwgRm1wNC5zaXplKDI4KSwgRm1wNC50eXBlKCdkcmVmJyksIG5ldyBVaW50OEFycmF5KGRyZWYpKVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIHN0YmwgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgc3RzZCA9IEZtcDQuc3RzZChkYXRhKVxuICAgIGxldCBzdHRzID0gRm1wNC5zdHRzKClcbiAgICBsZXQgc3RzYyA9IEZtcDQuc3RzYygpXG4gICAgbGV0IHN0c3ogPSBGbXA0LnN0c3ooKVxuICAgIGxldCBzdGNvID0gRm1wNC5zdGNvKCk7XG4gICAgW3N0c2QsIHN0dHMsIHN0c2MsIHN0c3osIHN0Y29dLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveChzaXplLCAnc3RibCcsIHN0c2QsIHN0dHMsIHN0c2MsIHN0c3osIHN0Y28pXG4gIH1cbiAgc3RhdGljIHN0c2QgKGRhdGEpIHtcbiAgICBsZXQgY29udGVudFxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgIC8vIGlmICghZGF0YS5pc0FBQyAmJiBkYXRhLmNvZGVjID09PSAnbXA0Jykge1xuICAgICAgLy8gICAgIGNvbnRlbnQgPSBGTVA0Lm1wMyhkYXRhKTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvL1xuICAgICAgLy8gfVxuICAgICAgLy8g5pSv5oyBbXA0YVxuICAgICAgY29udGVudCA9IEZtcDQubXA0YShkYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gRm1wNC5hdmMxKGRhdGEpXG4gICAgfVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goMTYgKyBjb250ZW50LmJ5dGVMZW5ndGgsICdzdHNkJywgRm1wNC5leHRlbnNpb24oMCwgMCksIG5ldyBVaW50OEFycmF5KFsweDAwLCAweDAwLCAweDAwLCAweDAxXSksIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIG1wNGEgKGRhdGEpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMSwgLy8gZGF0YV9yZWZlcmVuY2VfaW5kZXhcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgZGF0YS5jaGFubmVsQ291bnQsIC8vIGNoYW5uZWxjb3VudFxuICAgICAgMHgwMCwgMHgxMCwgLy8gc2FtcGxlU2l6ZToxNmJpdHNcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkMlxuICAgICAgKGRhdGEuc2FtcGxlcmF0ZSA+PiA4KSAmIDB4ZmYsXG4gICAgICBkYXRhLnNhbXBsZXJhdGUgJiAweGZmLCAvL1xuICAgICAgMHgwMCwgMHgwMFxuICAgIF0pXG4gICAgbGV0IGVzZHMgPSBGbXA0LmVzZHMoZGF0YS5jb25maWcpXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCg4ICsgY29udGVudC5ieXRlTGVuZ3RoICsgZXNkcy5ieXRlTGVuZ3RoLCAnbXA0YScsIGNvbnRlbnQsIGVzZHMpXG4gIH1cbiAgc3RhdGljIGVzZHMgKGNvbmZpZyA9IFs0MywgMTQ2LCA4LCAwXSkge1xuICAgIGNvbnN0IGNvbmZpZ2xlbiA9IGNvbmZpZy5sZW5ndGhcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uIDBcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG5cbiAgICAgIDB4MDMsIC8vIGRlc2NyaXB0b3JfdHlwZVxuICAgICAgMHgxNyArIGNvbmZpZ2xlbiwgLy8gbGVuZ3RoXG4gICAgICAweDAwLCAweDAxLCAvLyBlc19pZFxuICAgICAgMHgwMCwgLy8gc3RyZWFtX3ByaW9yaXR5XG5cbiAgICAgIDB4MDQsIC8vIGRlc2NyaXB0b3JfdHlwZVxuICAgICAgMHgwZiArIGNvbmZpZ2xlbiwgLy8gbGVuZ3RoXG4gICAgICAweDQwLCAvLyBjb2RlYyA6IG1wZWc0X2F1ZGlvXG4gICAgICAweDE1LCAvLyBzdHJlYW1fdHlwZVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gYnVmZmVyX3NpemVcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIG1heEJpdHJhdGVcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGF2Z0JpdHJhdGVcblxuICAgICAgMHgwNSAvLyBkZXNjcmlwdG9yX3R5cGVcbiAgICBdLmNvbmNhdChbY29uZmlnbGVuXSkuY29uY2F0KGNvbmZpZykuY29uY2F0KFsweDA2LCAweDAxLCAweDAyXSkpXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZSg4ICsgY29udGVudC5ieXRlTGVuZ3RoKSwgRm1wNC50eXBlKCdlc2RzJyksIGNvbnRlbnQpXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgYXZjMSAoZGF0YSkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgc2l6ZSA9IDQwLy8gOChhdmMxKSs4KGF2Y2MpKzgoYnRydCkrMTYocGFzcClcbiAgICAvLyBsZXQgc3BzID0gZGF0YS5zcHNcbiAgICAvLyBsZXQgcHBzID0gZGF0YS5wcHNcbiAgICBsZXQgd2lkdGggPSBkYXRhLndpZHRoXG4gICAgbGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0XG4gICAgbGV0IGhTcGFjaW5nID0gZGF0YS5wYXJSYXRpby5oZWlnaHRcbiAgICBsZXQgdlNwYWNpbmcgPSBkYXRhLnBhclJhdGlvLndpZHRoXG4gICAgLy8gbGV0IGF2Y2NCdWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICAvLyBhdmNjQnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KFtcbiAgICAvLyAgIDB4MDEsIC8vIHZlcnNpb25cbiAgICAvLyAgIHNwc1sxXSwgLy8gcHJvZmlsZVxuICAgIC8vICAgc3BzWzJdLCAvLyBwcm9maWxlIGNvbXBhdGlibGVcbiAgICAvLyAgIHNwc1szXSwgLy8gbGV2ZWxcbiAgICAvLyAgIDB4ZmMgfCAzLFxuICAgIC8vICAgMHhFMCB8IDEgLy8g55uu5YmN5Y+q5aSE55CG5LiA5Liqc3BzXG4gICAgLy8gXS5jb25jYXQoW3Nwcy5sZW5ndGggPj4+IDggJiAweGZmLCBzcHMubGVuZ3RoICYgMHhmZl0pKSlcbiAgICAvLyBhdmNjQnVmZmVyLndyaXRlKHNwcywgbmV3IFVpbnQ4QXJyYXkoWzEsIHBwcy5sZW5ndGggPj4+IDggJiAweGZmLCBwcHMubGVuZ3RoICYgMHhmZl0pLCBwcHMpXG5cbiAgICBsZXQgYXZjYyA9IGRhdGEuYXZjY1xuICAgIGxldCBhdmMxID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAxLCAvLyBkYXRhX3JlZmVyZW5jZV9pbmRleFxuICAgICAgMHgwMCwgMHgwMCwgLy8gcHJlX2RlZmluZWRcbiAgICAgIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHByZV9kZWZpbmVkXG4gICAgICAod2lkdGggPj4gOCkgJiAweGZmLFxuICAgICAgd2lkdGggJiAweGZmLCAvLyB3aWR0aFxuICAgICAgKGhlaWdodCA+PiA4KSAmIDB4ZmYsXG4gICAgICBoZWlnaHQgJiAweGZmLCAvLyBoZWlnaHRcbiAgICAgIDB4MDAsIDB4NDgsIDB4MDAsIDB4MDAsIC8vIGhvcml6cmVzb2x1dGlvblxuICAgICAgMHgwMCwgMHg0OCwgMHgwMCwgMHgwMCwgLy8gdmVydHJlc29sdXRpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAxLCAvLyBmcmFtZV9jb3VudFxuICAgICAgMHgxMixcbiAgICAgIDB4NjQsIDB4NjEsIDB4NjksIDB4NkMsIC8vIGRhaWx5bW90aW9uL2hscy5qc1xuICAgICAgMHg3OSwgMHg2RCwgMHg2RiwgMHg3NCxcbiAgICAgIDB4NjksIDB4NkYsIDB4NkUsIDB4MkYsXG4gICAgICAweDY4LCAweDZDLCAweDczLCAweDJFLFxuICAgICAgMHg2QSwgMHg3MywgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gY29tcHJlc3Nvcm5hbWVcbiAgICAgIDB4MDAsIDB4MTgsIC8vIGRlcHRoID0gMjRcbiAgICAgIDB4MTEsIDB4MTFdKSAvLyBwcmVfZGVmaW5lZCA9IC0xXG4gICAgbGV0IGJ0cnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDFjLCAweDljLCAweDgwLCAvLyBidWZmZXJTaXplREJcbiAgICAgIDB4MDAsIDB4MmQsIDB4YzYsIDB4YzAsIC8vIG1heEJpdHJhdGVcbiAgICAgIDB4MDAsIDB4MmQsIDB4YzYsIDB4YzAgLy8gYXZnQml0cmF0ZVxuICAgIF0pXG4gICAgbGV0IHBhc3AgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAoaFNwYWNpbmcgPj4gMjQpLCAvLyBoU3BhY2luZ1xuICAgICAgKGhTcGFjaW5nID4+IDE2KSAmIDB4ZmYsXG4gICAgICAoaFNwYWNpbmcgPj4gOCkgJiAweGZmLFxuICAgICAgaFNwYWNpbmcgJiAweGZmLFxuICAgICAgKHZTcGFjaW5nID4+IDI0KSwgLy8gdlNwYWNpbmdcbiAgICAgICh2U3BhY2luZyA+PiAxNikgJiAweGZmLFxuICAgICAgKHZTcGFjaW5nID4+IDgpICYgMHhmZixcbiAgICAgIHZTcGFjaW5nICYgMHhmZlxuICAgIF0pXG5cbiAgICBidWZmZXIud3JpdGUoXG4gICAgICBGbXA0LnNpemUoc2l6ZSArIGF2YzEuYnl0ZUxlbmd0aCArIGF2Y2MuYnl0ZUxlbmd0aCArIGJ0cnQuYnl0ZUxlbmd0aCksIEZtcDQudHlwZSgnYXZjMScpLCBhdmMxLFxuICAgICAgRm1wNC5zaXplKDggKyBhdmNjLmJ5dGVMZW5ndGgpLCBGbXA0LnR5cGUoJ2F2Y0MnKSwgYXZjYyxcbiAgICAgIEZtcDQuc2l6ZSgyMCksIEZtcDQudHlwZSgnYnRydCcpLCBidHJ0LFxuICAgICAgRm1wNC5zaXplKDE2KSwgRm1wNC50eXBlKCdwYXNwJyksIHBhc3BcbiAgICApXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgc3R0cyAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCAvLyBlbnRyeV9jb3VudFxuICAgIF0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgxNiwgJ3N0dHMnLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBzdHNjICgpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwIC8vIGVudHJ5X2NvdW50XG4gICAgXSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDE2LCAnc3RzYycsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIHN0Y28gKCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAgLy8gZW50cnlfY291bnRcbiAgICBdKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goMTYsICdzdGNvJywgY29udGVudClcbiAgfVxuICBzdGF0aWMgc3RzeiAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gc2FtcGxlX3NpemVcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAgLy8gc2FtcGxlX2NvdW50XG4gICAgXSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDIwLCAnc3RzeicsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIG12ZXggKGR1cmF0aW9uLCB0aW1lc2NhbGUgPSAxMDAwLCB0cmFja0lEKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBtZWhkID0gQnVmZmVyLndyaXRlVWludDMyKGR1cmF0aW9uKVxuICAgIGJ1ZmZlci53cml0ZShGbXA0LnNpemUoNTYpLCBGbXA0LnR5cGUoJ212ZXgnKSwgRm1wNC5zaXplKDE2KSwgRm1wNC50eXBlKCdtZWhkJyksIEZtcDQuZXh0ZW5zaW9uKDAsIDApLCBtZWhkLCBGbXA0LnRyZXgodHJhY2tJRCkpXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgdHJleCAoaWQpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIChpZCA+PiAyNCksXG4gICAgICAoaWQgPj4gMTYpICYgMHhmZixcbiAgICAgIChpZCA+PiA4KSAmIDB4ZmYsXG4gICAgICAoaWQgJiAweGZmKSwgLy8gdHJhY2tfSURcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGRlZmF1bHRfc2FtcGxlX2Rlc2NyaXB0aW9uX2luZGV4XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBkZWZhdWx0X3NhbXBsZV9kdXJhdGlvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZGVmYXVsdF9zYW1wbGVfc2l6ZVxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMSAvLyBkZWZhdWx0X3NhbXBsZV9mbGFnc1xuICAgIF0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCg4ICsgY29udGVudC5ieXRlTGVuZ3RoLCAndHJleCcsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIG1vb2YgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgbWZoZCA9IEZtcDQubWZoZCgpXG4gICAgbGV0IHRyYWYgPSBGbXA0LnRyYWYoZGF0YSk7XG4gICAgW21maGQsIHRyYWZdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveChzaXplLCAnbW9vZicsIG1maGQsIHRyYWYpXG4gIH1cbiAgc3RhdGljIG1maGQgKCkge1xuICAgIGxldCBjb250ZW50ID0gQnVmZmVyLndyaXRlVWludDMyKEZtcDQuc2VxdWVuY2UpXG4gICAgRm1wNC5zZXF1ZW5jZSArPSAxXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgxNiwgJ21maGQnLCBGbXA0LmV4dGVuc2lvbigwLCAwKSwgY29udGVudClcbiAgfVxuICBzdGF0aWMgdHJhZiAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCB0ZmhkID0gRm1wNC50ZmhkKGRhdGEuaWQpXG4gICAgbGV0IHRmZHQgPSBGbXA0LnRmZHQoZGF0YS50aW1lKVxuICAgIGxldCBzZHRwID0gRm1wNC5zZHRwKGRhdGEpXG4gICAgbGV0IHRydW4gPSBGbXA0LnRydW4oZGF0YSwgc2R0cC5ieXRlTGVuZ3RoKTtcblxuICAgIFt0ZmhkLCB0ZmR0LCB0cnVuLCBzZHRwXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goc2l6ZSwgJ3RyYWYnLCB0ZmhkLCB0ZmR0LCB0cnVuLCBzZHRwKVxuICB9XG4gIHN0YXRpYyB0ZmhkIChpZCkge1xuICAgIGxldCBjb250ZW50ID0gQnVmZmVyLndyaXRlVWludDMyKGlkKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goMTYsICd0ZmhkJywgRm1wNC5leHRlbnNpb24oMCwgMCksIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIHRmZHQgKHRpbWUpIHtcbiAgICAvLyBsZXQgdXBwZXIgPSBNYXRoLmZsb29yKHRpbWUgLyAoVUlOVDMyX01BWCArIDEpKSxcbiAgICAvLyAgICAgbG93ZXIgPSBNYXRoLmZsb29yKHRpbWUgJSAoVUlOVDMyX01BWCArIDEpKTtcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDE2LCAndGZkdCcsIEZtcDQuZXh0ZW5zaW9uKDAsIDApLCBCdWZmZXIud3JpdGVVaW50MzIodGltZSkpXG4gIH1cbiAgc3RhdGljIHRydW4gKGRhdGEsIHNkdHBMZW5ndGgpIHtcbiAgICAvLyBsZXQgaWQgPSBkYXRhLmlkO1xuICAgIC8vIGxldCBjZWlsID0gaWQgPT09IDEgPyAxNiA6IDEyO1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgc2FtcGxlQ291bnQgPSBCdWZmZXIud3JpdGVVaW50MzIoZGF0YS5zYW1wbGVzLmxlbmd0aClcbiAgICAvLyBtZGF0LWhlYWRlciA4XG4gICAgLy8gbW9vZi1oZWFkZXIgOFxuICAgIC8vIG1maGQgMTZcbiAgICAvLyB0cmFmLWhlYWRlciA4XG4gICAgLy8gdGhoZCAxNlxuICAgIC8vIHRmZHQgMjBcbiAgICAvLyB0cnVuLWhlYWRlciAxMlxuICAgIC8vIHNhbXBsZUNvdW50IDRcbiAgICAvLyBkYXRhLW9mZnNldCA0XG4gICAgLy8gc2FtcGxlcy5sZW5ndGhcbiAgICBsZXQgb2Zmc2V0ID0gQnVmZmVyLndyaXRlVWludDMyKDggKyA4ICsgMTYgKyA4ICsgMTYgKyAxNiArIDEyICsgNCArIDQgKyAxNiAqIGRhdGEuc2FtcGxlcy5sZW5ndGggKyBzZHRwTGVuZ3RoKVxuICAgIGJ1ZmZlci53cml0ZShGbXA0LnNpemUoMjAgKyAxNiAqIGRhdGEuc2FtcGxlcy5sZW5ndGgpLCBGbXA0LnR5cGUoJ3RydW4nKSwgbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4MDAsIDB4MEYsIDB4MDFdKSwgc2FtcGxlQ291bnQsIG9mZnNldClcblxuICAgIC8vIGxldCBzaXplID0gYnVmZmVyLmJ1ZmZlci5ieXRlTGVuZ3RoXG4gICAgLy8gbGV0IHdyaXRlT2Zmc2V0ID0gMFxuICAgIC8vIGRhdGEuc2FtcGxlcy5mb3JFYWNoKCgpID0+IHtcbiAgICAvLyAgIHNpemUgKz0gMTZcbiAgICAvLyB9KVxuICAgIC8vXG4gICAgLy8gbGV0IHRydW5Cb3ggPSBuZXcgVWludDhBcnJheShzaXplKVxuXG4gICAgLy8gdHJ1bkJveC5zZXQoYnVmZmVyLmJ1ZmZlciwgMClcblxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBmbGFncyA9IGl0ZW0uZmxhZ3NcbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0udHlwZSwgaXRlbS5kdHMsIGl0ZW0uZHVyYXRpb24pXG5cbiAgICAgIGJ1ZmZlci53cml0ZShuZXcgVWludDhBcnJheShbXG4gICAgICAgIChpdGVtLmR1cmF0aW9uID4+PiAyNCkgJiAweEZGLCAvLyBzYW1wbGVfZHVyYXRpb25cbiAgICAgICAgKGl0ZW0uZHVyYXRpb24gPj4+IDE2KSAmIDB4RkYsXG4gICAgICAgIChpdGVtLmR1cmF0aW9uID4+PiA4KSAmIDB4RkYsXG4gICAgICAgIChpdGVtLmR1cmF0aW9uKSAmIDB4RkYsXG4gICAgICAgIChpdGVtLnNpemUgPj4+IDI0KSAmIDB4RkYsIC8vIHNhbXBsZV9zaXplXG4gICAgICAgIChpdGVtLnNpemUgPj4+IDE2KSAmIDB4RkYsXG4gICAgICAgIChpdGVtLnNpemUgPj4+IDgpICYgMHhGRixcbiAgICAgICAgKGl0ZW0uc2l6ZSkgJiAweEZGLFxuICAgICAgICAoZmxhZ3MuaXNMZWFkaW5nIDw8IDIpIHwgZmxhZ3MuZGVwZW5kc09uLCAvLyBzYW1wbGVfZmxhZ3NcbiAgICAgICAgKGZsYWdzLmlzRGVwZW5kZWRPbiA8PCA2KSB8IChmbGFncy5oYXNSZWR1bmRhbmN5IDw8IDQpIHwgZmxhZ3MuaXNOb25TeW5jLFxuICAgICAgICAweDAwLCAweDAwLCAvLyBzYW1wbGVfZGVncmFkYXRpb25fcHJpb3JpdHlcbiAgICAgICAgKGl0ZW0uY3RzID4+PiAyNCkgJiAweEZGLCAvLyBzYW1wbGVfY29tcG9zaXRpb25fdGltZV9vZmZzZXRcbiAgICAgICAgKGl0ZW0uY3RzID4+PiAxNikgJiAweEZGLFxuICAgICAgICAoaXRlbS5jdHMgPj4+IDgpICYgMHhGRixcbiAgICAgICAgKGl0ZW0uY3RzKSAmIDB4RkZcbiAgICAgIF0pKVxuICAgICAgLy8gd3JpdGVPZmZzZXQgKz0gMTZcbiAgICAgIC8vIGJ1ZmZlci53cml0ZShCdWZmZXIud3JpdGVVaW50MzIoMCkpO1xuICAgIH0pXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgc2R0cCAoZGF0YSkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBidWZmZXIud3JpdGUoRm1wNC5zaXplKDEyICsgZGF0YS5zYW1wbGVzLmxlbmd0aCksIEZtcDQudHlwZSgnc2R0cCcpLCBGbXA0LmV4dGVuc2lvbigwLCAwKSlcbiAgICBkYXRhLnNhbXBsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IGZsYWdzID0gaXRlbS5mbGFnc1xuICAgICAgY29uc3QgbnVtID0gKGZsYWdzLmlzTGVhZGluZyA8PCA2KSB8IC8vIGlzX2xlYWRpbmc6IDIgKGJpdClcbiAgICAgICAgKGZsYWdzLmRlcGVuZHNPbiA8PCA0KSB8IC8vIHNhbXBsZV9kZXBlbmRzX29uXG4gICAgICAgIChmbGFncy5pc0RlcGVuZGVkT24gPDwgMikgfCAvLyBzYW1wbGVfaXNfZGVwZW5kZWRfb25cbiAgICAgICAgKGZsYWdzLmhhc1JlZHVuZGFuY3kpLy8gc2FtcGxlX2hhc19yZWR1bmRhbmN5XG5cbiAgICAgIGJ1ZmZlci53cml0ZShuZXcgVWludDhBcnJheShbbnVtXSkpXG4gICAgfSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBtZGF0IChkYXRhKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBzaXplID0gOFxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLnNpemVcbiAgICB9KVxuICAgIGJ1ZmZlci53cml0ZShGbXA0LnNpemUoc2l6ZSksIEZtcDQudHlwZSgnbWRhdCcpKVxuICAgIGxldCBtZGF0Qm94ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSlcbiAgICBsZXQgb2Zmc2V0ID0gMFxuICAgIG1kYXRCb3guc2V0KGJ1ZmZlci5idWZmZXIsIG9mZnNldClcbiAgICBvZmZzZXQgKz0gOFxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5idWZmZXIuZm9yRWFjaCgodW5pdCkgPT4ge1xuICAgICAgICBtZGF0Qm94LnNldCh1bml0LCBvZmZzZXQpXG4gICAgICAgIG9mZnNldCArPSB1bml0LmJ5dGVMZW5ndGhcbiAgICAgICAgLy8gYnVmZmVyLndyaXRlKHVuaXQuZGF0YSk7XG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIG1kYXRCb3hcbiAgfVxufVxuRm1wNC50eXBlID0gKG5hbWUpID0+IHtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtuYW1lLmNoYXJDb2RlQXQoMCksIG5hbWUuY2hhckNvZGVBdCgxKSwgbmFtZS5jaGFyQ29kZUF0KDIpLCBuYW1lLmNoYXJDb2RlQXQoMyldKVxufVxuRm1wNC5zZXF1ZW5jZSA9IDFcblxuZXhwb3J0IGRlZmF1bHQgRm1wNFxuIiwiaW1wb3J0IHtcbiAgRVZFTlRTLFxuICBzbmlmZmVyLFxuICBNZWRpYVNlZ21lbnRMaXN0LFxuICBCdWZmZXJcbn0gZnJvbSAneGdwbGF5ZXItdXRpbHMnO1xuaW1wb3J0IEZtcDQgZnJvbSAnLi9mbXA0J1xuXG5jb25zdCBSRU1VWF9FVkVOVFMgPSBFVkVOVFMuUkVNVVhfRVZFTlRTXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1wNFJlbXV4ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fZHRzQmFzZSA9IDBcbiAgICB0aGlzLl9pc0R0c0Jhc2VJbml0ZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5pc0ZpcnN0VmlkZW8gPSB0cnVlXG4gICAgdGhpcy5pc0ZpcnN0QXVkaW8gPSB0cnVlXG5cbiAgICB0aGlzLnZpZGVvQWxsRHVyYXRpb24gPSAwXG4gICAgdGhpcy5hdWRpb0FsbER1cmF0aW9uID0gMFxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5vbihSRU1VWF9FVkVOVFMuUkVNVVhfTUVESUEsIHRoaXMucmVtdXguYmluZCh0aGlzKSlcbiAgICB0aGlzLm9uKFJFTVVYX0VWRU5UUy5SRU1VWF9NRVRBREFUQSwgdGhpcy5vbk1ldGFEYXRhUmVhZHkuYmluZCh0aGlzKSlcbiAgICB0aGlzLm9uKFJFTVVYX0VWRU5UUy5ERVRFQ1RfQ0hBTkdFX1NUUkVBTSwgdGhpcy5yZXNldER0c0Jhc2UuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2R0c0Jhc2UgPSAtMVxuICAgIHRoaXMuX2R0c0Jhc2VJbml0ZWQgPSBmYWxzZVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX2R0c0Jhc2UgPSAwXG4gICAgdGhpcy5faXNEdHNCYXNlSW5pdGVkID0gZmFsc2VcbiAgfVxuXG4gIHJlbXV4ICgpIHtcbiAgICBjb25zdCB7IGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2sgfSA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpXG4gICAgIXRoaXMuX2lzRHRzQmFzZUluaXRlZCAmJiB0aGlzLmNhbGNEdHNCYXNlKGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2spXG5cbiAgICB0aGlzLl9yZW11eFZpZGVvKHZpZGVvVHJhY2spXG4gICAgdGhpcy5fcmVtdXhBdWRpbyhhdWRpb1RyYWNrKVxuICB9XG5cbiAgcmVzZXREdHNCYXNlICgpIHtcbiAgICAvLyBmb3IgaGxzIOS4remAlOWIh+aNoiBtZXRh5ZCOc2Vla1xuICAgIHRoaXMuX2R0c0Jhc2UgPSAwXG4gICAgdGhpcy5fZHRzQmFzZUluaXRlZCA9IGZhbHNlXG4gIH1cblxuICBzZWVrICgpIHtcblxuICB9XG5cbiAgb25NZXRhRGF0YVJlYWR5ICh0eXBlKSB7XG4gICAgbGV0IHRyYWNrXG5cbiAgICBpZiAodHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgY29uc3QgeyBhdWRpb1RyYWNrIH0gPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKVxuICAgICAgdHJhY2sgPSBhdWRpb1RyYWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IHZpZGVvVHJhY2sgfSA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpXG4gICAgICB0cmFjayA9IHZpZGVvVHJhY2s7XG4gICAgfVxuXG4gICAgbGV0IHByZXNvdXJjZWJ1ZmZlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1BSRV9TT1VSQ0VfQlVGRkVSJyk7XG4gICAgbGV0IHNvdXJjZSA9IHByZXNvdXJjZWJ1ZmZlci5nZXRTb3VyY2UodHlwZSk7XG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgIHNvdXJjZSA9IHByZXNvdXJjZWJ1ZmZlci5jcmVhdGVTb3VyY2UodHlwZSk7XG4gICAgfVxuXG4gICAgc291cmNlLm1pbWV0eXBlID0gdHJhY2subWV0YS5jb2RlYztcbiAgICBzb3VyY2UuaW5pdCA9IHRoaXMucmVtdXhJbml0U2VnbWVudCh0eXBlLCB0cmFjay5tZXRhKTtcbiAgICAvLyBzb3VyY2UuaW5pdGVkID0gZmFsc2U7XG5cbiAgICAvLyB0aGlzLnJlc2V0RHRzQmFzZSgpXG4gICAgdGhpcy5lbWl0KFJFTVVYX0VWRU5UUy5JTklUX1NFR01FTlQsIHR5cGUpXG4gIH1cblxuICByZW11eEluaXRTZWdtZW50ICh0eXBlLCBtZXRhKSB7XG4gICAgbGV0IGluaXRTZWdtZW50ID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IGZ0eXAgPSBGbXA0LmZ0eXAoKVxuICAgIGxldCBtb292ID0gRm1wNC5tb292KHsgdHlwZSwgbWV0YTogbWV0YSB9KVxuXG4gICAgaW5pdFNlZ21lbnQud3JpdGUoZnR5cCwgbW9vdilcbiAgICByZXR1cm4gaW5pdFNlZ21lbnQ7XG4gIH1cblxuICBjYWxjRHRzQmFzZSAoYXVkaW9UcmFjaywgdmlkZW9UcmFjaykge1xuICAgIGlmICghYXVkaW9UcmFjay5zYW1wbGVzLmxlbmd0aCAmJiAhdmlkZW9UcmFjay5zYW1wbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBhdWRpb0Jhc2UgPSBJbmZpbml0eVxuICAgIGxldCB2aWRlb0Jhc2UgPSBJbmZpbml0eVxuXG4gICAgaWYgKGF1ZGlvVHJhY2suc2FtcGxlcyAmJiBhdWRpb1RyYWNrLnNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICBhdWRpb0Jhc2UgPSBhdWRpb1RyYWNrLnNhbXBsZXNbMF0uZHRzXG4gICAgfVxuICAgIGlmICh2aWRlb1RyYWNrLnNhbXBsZXMgJiYgdmlkZW9UcmFjay5zYW1wbGVzLmxlbmd0aCkge1xuICAgICAgdmlkZW9CYXNlID0gdmlkZW9UcmFjay5zYW1wbGVzWzBdLmR0c1xuICAgIH1cblxuICAgIHRoaXMuX2R0c0Jhc2UgPSBNYXRoLm1pbihhdWRpb0Jhc2UsIHZpZGVvQmFzZSlcbiAgICB0aGlzLl9pc0R0c0Jhc2VJbml0ZWQgPSB0cnVlXG4gIH1cblxuICBfcmVtdXhWaWRlbyAodmlkZW9UcmFjaykge1xuICAgIGNvbnN0IHRyYWNrID0gdmlkZW9UcmFja1xuXG4gICAgaWYgKCF2aWRlb1RyYWNrLnNhbXBsZXMgfHwgIXZpZGVvVHJhY2suc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7c2FtcGxlc30gPSB0cmFja1xuICAgIGxldCBmaXJzdER0cyA9IC0xXG5cbiAgICBsZXQgaW5pdFNlZ21lbnQgPSBudWxsXG4gICAgY29uc3QgbXA0U2FtcGxlcyA9IFtdXG4gICAgY29uc3QgbWRhdEJveCA9IHtcbiAgICAgIHNhbXBsZXM6IFtdXG4gICAgfVxuXG4gICAgd2hpbGUgKHNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBhdmNTYW1wbGUgPSBzYW1wbGVzLnNoaWZ0KClcblxuICAgICAgY29uc3QgeyBpc0tleWZyYW1lLCBvcHRpb25zIH0gPSBhdmNTYW1wbGVcbiAgICAgIGlmICghdGhpcy5pc0ZpcnN0QXVkaW8gJiYgb3B0aW9ucyAmJiBvcHRpb25zLm1ldGEpIHtcbiAgICAgICAgaW5pdFNlZ21lbnQgPSB0aGlzLnJlbXV4SW5pdFNlZ21lbnQoJ3ZpZGVvJywgb3B0aW9ucy5tZXRhKVxuICAgICAgICBvcHRpb25zLm1ldGEgPSBudWxsXG4gICAgICAgIHNhbXBsZXMudW5zaGlmdChhdmNTYW1wbGUpXG4gICAgICAgIGlmICghb3B0aW9ucy5pc0NvbnRpbnVlKSB7XG4gICAgICAgICAgdGhpcy5yZXNldER0c0Jhc2UoKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZXQgZHRzID0gYXZjU2FtcGxlLmR0cyAtIHRoaXMuX2R0c0Jhc2VcblxuICAgICAgaWYgKGZpcnN0RHRzID09PSAtMSkge1xuICAgICAgICBmaXJzdER0cyA9IGR0c1xuICAgICAgfVxuXG4gICAgICBsZXQgY3RzXG4gICAgICBsZXQgcHRzXG4gICAgICBpZiAoYXZjU2FtcGxlLnB0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHB0cyA9IGF2Y1NhbXBsZS5wdHMgLSB0aGlzLl9kdHNCYXNlXG4gICAgICAgIGN0cyA9IHB0cyAtIGR0c1xuICAgICAgfVxuICAgICAgaWYgKGF2Y1NhbXBsZS5jdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwdHMgPSBhdmNTYW1wbGUuY3RzICsgZHRzXG4gICAgICAgIGN0cyA9IGF2Y1NhbXBsZS5jdHNcbiAgICAgIH1cblxuICAgICAgbGV0IG1kYXRTYW1wbGUgPSB7XG4gICAgICAgIGJ1ZmZlcjogW10sXG4gICAgICAgIHNpemU6IDBcbiAgICAgIH1cbiAgICAgIG1kYXRCb3guc2FtcGxlcy5wdXNoKG1kYXRTYW1wbGUpXG4gICAgICBtZGF0U2FtcGxlLmJ1ZmZlci5wdXNoKGF2Y1NhbXBsZS5kYXRhKVxuICAgICAgbWRhdFNhbXBsZS5zaXplICs9IGF2Y1NhbXBsZS5kYXRhLmJ5dGVMZW5ndGhcblxuICAgICAgbGV0IHNhbXBsZUR1cmF0aW9uID0gMFxuICAgICAgaWYgKHNhbXBsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgY29uc3QgbmV4dER0cyA9IHNhbXBsZXNbMF0uZHRzIC0gdGhpcy5fZHRzQmFzZVxuICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IG5leHREdHMgLSBkdHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtcDRTYW1wbGVzLmxlbmd0aCA+PSAxKSB7IC8vIGxhc3Rlc3Qgc2FtcGxlLCB1c2Ugc2Vjb25kIGxhc3QgZHVyYXRpb25cbiAgICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IG1wNFNhbXBsZXNbbXA0U2FtcGxlcy5sZW5ndGggLSAxXS5kdXJhdGlvblxuICAgICAgICB9IGVsc2UgeyAvLyB0aGUgb25seSBvbmUgc2FtcGxlLCB1c2UgcmVmZXJlbmNlIGR1cmF0aW9uXG4gICAgICAgICAgc2FtcGxlRHVyYXRpb24gPSB0aGlzLnZpZGVvTWV0YS5yZWZTYW1wbGVEdXJhdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnZpZGVvQWxsRHVyYXRpb24gKz0gc2FtcGxlRHVyYXRpb25cbiAgICAgIC8vIGNvbnNvbGUubG9nKGBkdHMgJHtkdHN9YCwgYHB0cyAke3B0c31gLCBgY3RzOiAke2N0c31gLCBgZHVyYXRpb246ICR7c2FtcGxlRHVyYXRpb259YCwgYXZjU2FtcGxlKVxuICAgICAgbXA0U2FtcGxlcy5wdXNoKHtcbiAgICAgICAgZHRzLFxuICAgICAgICBjdHMsXG4gICAgICAgIHB0cyxcbiAgICAgICAgZGF0YTogYXZjU2FtcGxlLmRhdGEsXG4gICAgICAgIHNpemU6IGF2Y1NhbXBsZS5kYXRhLmJ5dGVMZW5ndGgsXG4gICAgICAgIGlzS2V5ZnJhbWUsXG4gICAgICAgIGR1cmF0aW9uOiBzYW1wbGVEdXJhdGlvbixcbiAgICAgICAgZmxhZ3M6IHtcbiAgICAgICAgICBpc0xlYWRpbmc6IDAsXG4gICAgICAgICAgZGVwZW5kc09uOiBpc0tleWZyYW1lID8gMiA6IDEsXG4gICAgICAgICAgaXNEZXBlbmRlZE9uOiBpc0tleWZyYW1lID8gMSA6IDAsXG4gICAgICAgICAgaGFzUmVkdW5kYW5jeTogMCxcbiAgICAgICAgICBpc05vblN5bmM6IGlzS2V5ZnJhbWUgPyAwIDogMVxuICAgICAgICB9LFxuICAgICAgICBvcmlnaW5EdHM6IGR0cyxcbiAgICAgICAgdHlwZTogJ3ZpZGVvJ1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBsZXQgbW9vZk1kYXQgPSBuZXcgQnVmZmVyKClcbiAgICBpZiAobXA0U2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1vb2YgPSBGbXA0Lm1vb2Yoe1xuICAgICAgICBpZDogdHJhY2subWV0YS5pZCxcbiAgICAgICAgdGltZTogZmlyc3REdHMsXG4gICAgICAgIHNhbXBsZXM6IG1wNFNhbXBsZXNcbiAgICAgIH0pXG4gICAgICBjb25zdCBtZGF0ID0gRm1wNC5tZGF0KG1kYXRCb3gpXG4gICAgICBtb29mTWRhdC53cml0ZShtb29mLCBtZGF0KVxuXG4gICAgICB0aGlzLndyaXRlVG9Tb3VyY2UoJ3ZpZGVvJywgbW9vZk1kYXQpXG4gICAgfVxuXG4gICAgaWYgKGluaXRTZWdtZW50KSB7XG4gICAgICB0aGlzLndyaXRlVG9Tb3VyY2UoJ3ZpZGVvJywgaW5pdFNlZ21lbnQpXG5cbiAgICAgIGlmIChzYW1wbGVzLmxlbmd0aCkge1xuICAgICAgICAvLyBzZWNvbmQgcGFydCBvZiBzdHJlYW0gY2hhbmdlXG4gICAgICAgIHRyYWNrLnNhbXBsZXMgPSBzYW1wbGVzO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVtdXhWaWRlbyh0cmFjaylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlzRmlyc3RWaWRlbyA9IGZhbHNlXG4gICAgdGhpcy5lbWl0KFJFTVVYX0VWRU5UUy5NRURJQV9TRUdNRU5ULCAndmlkZW8nKVxuXG4gICAgY29uc3QgbGFzdFNhbXBsZSA9IG1wNFNhbXBsZXNbbXA0U2FtcGxlcy5sZW5ndGggLSAxXVxuICAgIHRoaXMuX3ZpZGVvTmV4dER0cyA9IGxhc3RTYW1wbGUuZHRzICsgbGFzdFNhbXBsZS5kdXJhdGlvbjtcbiAgICB0cmFjay5zYW1wbGVzID0gW11cbiAgICB0cmFjay5sZW5ndGggPSAwXG4gIH1cblxuICBfcmVtdXhBdWRpbyAodHJhY2spIHtcbiAgICBjb25zdCB7c2FtcGxlc30gPSB0cmFja1xuICAgIGxldCBmaXJzdER0cyA9IC0xXG4gICAgbGV0IG1wNFNhbXBsZXMgPSBbXVxuXG4gICAgbGV0IGluaXRTZWdtZW50ID0gbnVsbFxuICAgIGNvbnN0IG1kYXRCb3ggPSB7XG4gICAgICBzYW1wbGVzOiBbXVxuICAgIH1cbiAgICBpZiAoIXNhbXBsZXMgfHwgIXNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGlzRmlyc3REdHNJbml0ZWQgPSBmYWxzZVxuICAgIHdoaWxlIChzYW1wbGVzLmxlbmd0aCkge1xuICAgICAgbGV0IHNhbXBsZSA9IHNhbXBsZXMuc2hpZnQoKVxuICAgICAgY29uc3QgeyBkYXRhLCBvcHRpb25zIH0gPSBzYW1wbGVcbiAgICAgIGlmICghdGhpcy5pc0ZpcnN0QXVkaW8gJiYgb3B0aW9ucyAmJiBvcHRpb25zLm1ldGEpIHtcbiAgICAgICAgaW5pdFNlZ21lbnQgPSB0aGlzLnJlbXV4SW5pdFNlZ21lbnQoJ2F1ZGlvJywgb3B0aW9ucy5tZXRhKVxuICAgICAgICBvcHRpb25zLm1ldGEgPSBudWxsO1xuICAgICAgICBzYW1wbGVzLnVuc2hpZnQoc2FtcGxlKVxuICAgICAgICBpZiAoIW9wdGlvbnMuaXNDb250aW51ZSkge1xuICAgICAgICAgIHRoaXMucmVzZXREdHNCYXNlKClcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgbGV0IGR0cyA9IHNhbXBsZS5kdHMgLSB0aGlzLl9kdHNCYXNlXG4gICAgICBjb25zdCBvcmlnaW5EdHMgPSBkdHNcbiAgICAgIGlmICghaXNGaXJzdER0c0luaXRlZCkge1xuICAgICAgICBmaXJzdER0cyA9IGR0c1xuICAgICAgICBpc0ZpcnN0RHRzSW5pdGVkID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBsZXQgc2FtcGxlRHVyYXRpb24gPSAwXG5cbiAgICAgIGlmICh0aGlzLmF1ZGlvTWV0YS5yZWZTYW1wbGVEdXJhdGlvbkZpeGVkKSB7XG4gICAgICAgIHNhbXBsZUR1cmF0aW9uID0gdGhpcy5hdWRpb01ldGEucmVmU2FtcGxlRHVyYXRpb25GaXhlZFxuICAgICAgfSBlbHNlIGlmIChzYW1wbGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGNvbnN0IG5leHREdHMgPSBzYW1wbGVzWzBdLmR0cyAtIHRoaXMuX2R0c0Jhc2U7XG4gICAgICAgIHNhbXBsZUR1cmF0aW9uID0gbmV4dER0cyAtIGR0c1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1wNFNhbXBsZXMubGVuZ3RoID49IDEpIHsgLy8gdXNlIHNlY29uZCBsYXN0IHNhbXBsZSBkdXJhdGlvblxuICAgICAgICAgIHNhbXBsZUR1cmF0aW9uID0gbXA0U2FtcGxlc1ttcDRTYW1wbGVzLmxlbmd0aCAtIDFdLmR1cmF0aW9uXG4gICAgICAgIH0gZWxzZSB7IC8vIHRoZSBvbmx5IG9uZSBzYW1wbGUsIHVzZSByZWZlcmVuY2Ugc2FtcGxlIGR1cmF0aW9uXG4gICAgICAgICAgc2FtcGxlRHVyYXRpb24gPSB0aGlzLmF1ZGlvTWV0YS5yZWZTYW1wbGVEdXJhdGlvblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW11eCBhdWRpbyAnLCBkdHMpXG4gICAgICB0aGlzLmF1ZGlvQWxsRHVyYXRpb24gKz0gc2FtcGxlRHVyYXRpb25cbiAgICAgIGNvbnN0IG1wNFNhbXBsZSA9IHtcbiAgICAgICAgZHRzLFxuICAgICAgICBwdHM6IGR0cyxcbiAgICAgICAgY3RzOiAwLFxuICAgICAgICBzaXplOiBkYXRhLmJ5dGVMZW5ndGgsXG4gICAgICAgIGR1cmF0aW9uOiBzYW1wbGUuZHVyYXRpb24gPyBzYW1wbGUuZHVyYXRpb24gOiBzYW1wbGVEdXJhdGlvbixcbiAgICAgICAgZmxhZ3M6IHtcbiAgICAgICAgICBpc0xlYWRpbmc6IDAsXG4gICAgICAgICAgZGVwZW5kc09uOiAyLFxuICAgICAgICAgIGlzRGVwZW5kZWRPbjogMSxcbiAgICAgICAgICBoYXNSZWR1bmRhbmN5OiAwLFxuICAgICAgICAgIGlzTm9uU3luYzogMFxuICAgICAgICB9LFxuICAgICAgICBpc0tleWZyYW1lOiB0cnVlLFxuICAgICAgICBvcmlnaW5EdHMsXG4gICAgICAgIHR5cGU6ICdhdWRpbydcbiAgICAgIH1cblxuICAgICAgbGV0IG1kYXRTYW1wbGUgPSB7XG4gICAgICAgIGJ1ZmZlcjogW10sXG4gICAgICAgIHNpemU6IDBcbiAgICAgIH1cbiAgICAgIG1kYXRTYW1wbGUuYnVmZmVyLnB1c2goZGF0YSlcbiAgICAgIG1kYXRTYW1wbGUuc2l6ZSArPSBkYXRhLmJ5dGVMZW5ndGhcblxuICAgICAgbWRhdEJveC5zYW1wbGVzLnB1c2gobWRhdFNhbXBsZSlcblxuICAgICAgbXA0U2FtcGxlcy5wdXNoKG1wNFNhbXBsZSlcbiAgICB9XG5cbiAgICBjb25zdCBtb29mTWRhdCA9IG5ldyBCdWZmZXIoKVxuXG4gICAgaWYgKG1wNFNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBtb29mID0gRm1wNC5tb29mKHtcbiAgICAgICAgaWQ6IHRyYWNrLm1ldGEuaWQsXG4gICAgICAgIHRpbWU6IGZpcnN0RHRzLFxuICAgICAgICBzYW1wbGVzOiBtcDRTYW1wbGVzXG4gICAgICB9KVxuICAgICAgY29uc3QgbWRhdCA9IEZtcDQubWRhdChtZGF0Qm94KVxuICAgICAgbW9vZk1kYXQud3JpdGUobW9vZiwgbWRhdClcblxuICAgICAgdGhpcy53cml0ZVRvU291cmNlKCdhdWRpbycsIG1vb2ZNZGF0KVxuICAgIH1cblxuICAgIGlmIChpbml0U2VnbWVudCkge1xuICAgICAgdGhpcy53cml0ZVRvU291cmNlKCdhdWRpbycsIGluaXRTZWdtZW50KVxuICAgICAgaWYgKHNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIHNlY29uZCBwYXJ0IG9mIHN0cmVhbSBjaGFuZ2VcbiAgICAgICAgdHJhY2suc2FtcGxlcyA9IHNhbXBsZXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW11eEF1ZGlvKHRyYWNrKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaXNGaXJzdEF1ZGlvID0gZmFsc2VcbiAgICB0aGlzLmVtaXQoUkVNVVhfRVZFTlRTLk1FRElBX1NFR01FTlQsICdhdWRpbycsIG1vb2ZNZGF0KVxuXG4gICAgY29uc3QgbGFzdFNhbXBsZSA9IG1wNFNhbXBsZXNbbXA0U2FtcGxlcy5sZW5ndGggLSAxXVxuICAgIHRoaXMuX3ZpZGVvTmV4dER0cyA9IGxhc3RTYW1wbGUuZHRzICsgbGFzdFNhbXBsZS5kdXJhdGlvbjtcbiAgICB0cmFjay5zYW1wbGVzID0gW11cbiAgICB0cmFjay5sZW5ndGggPSAwXG4gIH1cblxuICB3cml0ZVRvU291cmNlICh0eXBlLCBidWZmZXIpIHtcbiAgICBsZXQgcHJlc291cmNlYnVmZmVyID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnUFJFX1NPVVJDRV9CVUZGRVInKTtcbiAgICBsZXQgc291cmNlID0gcHJlc291cmNlYnVmZmVyLmdldFNvdXJjZSh0eXBlKTtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgc291cmNlID0gcHJlc291cmNlYnVmZmVyLmNyZWF0ZVNvdXJjZSh0eXBlKTtcbiAgICB9XG5cbiAgICBzb3VyY2UuZGF0YS5wdXNoKGJ1ZmZlcilcbiAgfVxuXG4gIGluaXRTaWxlbnRBdWRpbyAoZHRzLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IHVuaXQgPSBNcDRSZW11eGVyLmdldFNpbGVudEZyYW1lKHRoaXMuYXVkaW9NZXRhLmNoYW5uZWxDb3VudClcbiAgICByZXR1cm4ge1xuICAgICAgZHRzLFxuICAgICAgcHRzOiBkdHMsXG4gICAgICBjdHM6IDAsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIHVuaXQsXG4gICAgICBzaXplOiB1bml0LmJ5dGVMZW5ndGgsXG4gICAgICBvcmlnaW5EdHM6IGR0cyxcbiAgICAgIHR5cGU6ICd2aWRlbydcbiAgICB9XG4gIH1cblxuICBnZXQgdmlkZW9NZXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJykudmlkZW9UcmFjay5tZXRhXG4gIH1cbiAgZ2V0IGF1ZGlvTWV0YSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpLmF1ZGlvVHJhY2subWV0YVxuICB9XG5cbiAgc3RhdGljIGdldFNpbGVudEZyYW1lIChjaGFubmVsQ291bnQpIHtcbiAgICBpZiAoY2hhbm5lbENvdW50ID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjMsIDB4ODBdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAyKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MjEsIDB4MDAsIDB4NDksIDB4OTAsIDB4MDIsIDB4MTksIDB4MDAsIDB4MjMsIDB4ODBdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4OGVdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA0KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODAsIDB4MmMsIDB4ODAsIDB4MDgsIDB4MDIsIDB4MzhdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA1KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODIsIDB4MzAsIDB4MDQsIDB4OTksIDB4MDAsIDB4MjEsIDB4OTAsIDB4MDIsIDB4MzhdKVxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA2KSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODIsIDB4MzAsIDB4MDQsIDB4OTksIDB4MDAsIDB4MjEsIDB4OTAsIDB4MDIsIDB4MDAsIDB4YjIsIDB4MDAsIDB4MjAsIDB4MDgsIDB4ZTBdKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ29udGV4dDogcmVxdWlyZSgnLi9zcmMvY29udGV4dCcpLmRlZmF1bHQsXG5cbiAgLy8gTW9kdWxlcyBmcm9tIGNvbnN0YW50c1xuICBFVkVOVFM6IHJlcXVpcmUoJy4vc3JjL2NvbnN0YW50cy9ldmVudHMnKS5kZWZhdWx0LFxuICBXT1JLRVJfQ09NTUFORFM6IHJlcXVpcmUoJy4vc3JjL2NvbnN0YW50cy93b3JrZXItY29tbWFuZHMnKS5kZWZhdWx0LFxuXG4gIC8vIE1vZHVsZXMgZnJvbSBlbnZcbiAgc25pZmZlcjogcmVxdWlyZSgnLi9zcmMvZW52L3NuaWZmZXInKS5kZWZhdWx0LFxuICBpc0xlOiByZXF1aXJlKCcuL3NyYy9lbnYvaXNsZScpLmRlZmF1bHQsXG4gIFVURjg6IHJlcXVpcmUoJy4vc3JjL2Vudi91dGY4JykuZGVmYXVsdCxcblxuICAvLyBNb2RlbHNcbiAgTWVkaWFJbmZvOiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvbWVkaWEtaW5mbycpLmRlZmF1bHQsXG4gIE1lZGlhU2FtcGxlOiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvbWVkaWEtc2FtcGxlJykuZGVmYXVsdCxcbiAgTWVkaWFTZWdtZW50OiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvbWVkaWEtc2VnbWVudCcpLmRlZmF1bHQsXG4gIE1lZGlhU2VnbWVudExpc3Q6IHJlcXVpcmUoJy4vc3JjL21vZGVscy9tZWRpYS1zZWdtZW50LWxpc3QnKS5kZWZhdWx0LFxuICBBdWRpb1RyYWNrTWV0YTogcmVxdWlyZSgnLi9zcmMvbW9kZWxzL3RyYWNrLW1ldGEnKS5BdWRpb1RyYWNrTWV0YSxcbiAgVmlkZW9UcmFja01ldGE6IHJlcXVpcmUoJy4vc3JjL21vZGVscy90cmFjay1tZXRhJykuVmlkZW9UcmFja01ldGEsXG4gIEF1ZGlvVHJhY2tTYW1wbGU6IHJlcXVpcmUoJy4vc3JjL21vZGVscy90cmFjay1zYW1wbGUnKS5BdWRpb1RyYWNrU2FtcGxlLFxuICBWaWRlb1RyYWNrU2FtcGxlOiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvdHJhY2stc2FtcGxlJykuVmlkZW9UcmFja1NhbXBsZSxcblxuICAvLyBNb2R1bGVzIGZyb20gbXNlXG4gIE1zZTogcmVxdWlyZSgnLi9zcmMvbXNlL2luZGV4JykuZGVmYXVsdCxcblxuICAvLyBNb2R1bGVzIGZyb20gd3JpdGVcbiAgU3RyZWFtOiByZXF1aXJlKCcuL3NyYy93cml0ZS9zdHJlYW0nKS5kZWZhdWx0LFxuICBCdWZmZXI6IHJlcXVpcmUoJy4vc3JjL3dyaXRlL2J1ZmZlcicpLmRlZmF1bHQsXG5cbiAgTW9iaWxlVmlkZW86IHJlcXVpcmUoJy4vc3JjL21vYmlsZS9tb2JpbGUtdmlkZW8nKSxcbiAgLy8gQ3J5cHRvXG4gIENyeXB0bzogcmVxdWlyZSgnLi9zcmMvY3J5cHRvJykuZGVmYXVsdFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoUmVzdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJyYXlzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFycmF5c1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBhcnJheXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgYXJyID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIHRvdGFsTGVuZ3RoICs9IGFyci5sZW5ndGg7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSBuZXcgUmVzdWx0Q29uc3RydWN0b3IodG90YWxMZW5ndGgpO1xuICB2YXIgb2Zmc2V0ID0gMDtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IGFycmF5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgdmFyIF9hcnIgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgIHJlc3VsdC5zZXQoX2Fyciwgb2Zmc2V0KTtcbiAgICAgIG9mZnNldCArPSBfYXJyLmxlbmd0aDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2NvbmNhdCcpO1xuXG52YXIgX2NvbmNhdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25jYXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25jYXQyLmRlZmF1bHQ7IiwiZnVuY3Rpb24gd2VicGFja0Jvb3RzdHJhcEZ1bmMgKG1vZHVsZXMpIHtcbi8qKioqKiovICAvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyAgdmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gIC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyAgICAvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovICAgIGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gICAgICByZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gICAgLy8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovICAgICAgaTogbW9kdWxlSWQsXG4vKioqKioqLyAgICAgIGw6IGZhbHNlLFxuLyoqKioqKi8gICAgICBleHBvcnRzOiB7fVxuLyoqKioqKi8gICAgfTtcblxuLyoqKioqKi8gICAgLy8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyAgICBtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gICAgLy8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gICAgbW9kdWxlLmwgPSB0cnVlO1xuXG4vKioqKioqLyAgICAvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gIH1cblxuLyoqKioqKi8gIC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gIC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gIC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbi8qKioqKiovICAvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovICAgIGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyAgICAgICAgZ2V0OiBnZXR0ZXJcbi8qKioqKiovICAgICAgfSk7XG4vKioqKioqLyAgICB9XG4vKioqKioqLyAgfTtcblxuLyoqKioqKi8gIC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gIH07XG5cbi8qKioqKiovICAvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gICAgdmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyAgICAgIGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyAgICAgIGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyAgICByZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gIH07XG5cbi8qKioqKiovICAvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbi8qKioqKiovICAvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4vKioqKioqLyAgLy8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gIHZhciBmID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBFTlRSWV9NT0RVTEUpXG4gIHJldHVybiBmLmRlZmF1bHQgfHwgZiAvLyB0cnkgdG8gY2FsbCBkZWZhdWx0IGlmIGRlZmluZWQgdG8gYWxzbyBzdXBwb3J0IGJhYmVsIGVzbW9kdWxlIGV4cG9ydHNcbn1cblxudmFyIG1vZHVsZU5hbWVSZXFFeHAgPSAnW1xcXFwufFxcXFwtfFxcXFwrfFxcXFx3fFxcL3xAXSsnXG52YXIgZGVwZW5kZW5jeVJlZ0V4cCA9ICdcXFxcKFxcXFxzKihcXC9cXFxcKi4qP1xcXFwqXFwvKT9cXFxccyouKj8oJyArIG1vZHVsZU5hbWVSZXFFeHAgKyAnKS4qP1xcXFwpJyAvLyBhZGRpdGlvbmFsIGNoYXJzIHdoZW4gb3V0cHV0LnBhdGhpbmZvIGlzIHRydWVcblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjU5MzY2MS8xMzA0NDJcbmZ1bmN0aW9uIHF1b3RlUmVnRXhwIChzdHIpIHtcbiAgcmV0dXJuIChzdHIgKyAnJykucmVwbGFjZSgvWy4/KiteJFtcXF1cXFxcKCl7fXwtXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuICFpc05hTigxICogbik7IC8vIDEgKiBuIGNvbnZlcnRzIGludGVnZXJzLCBpbnRlZ2VycyBhcyBzdHJpbmcgKFwiMTIzXCIpLCAxZTMgYW5kIFwiMWUzXCIgdG8gaW50ZWdlcnMgYW5kIHN0cmluZ3MgdG8gTmFOXG59XG5cbmZ1bmN0aW9uIGdldE1vZHVsZURlcGVuZGVuY2llcyAoc291cmNlcywgbW9kdWxlLCBxdWV1ZU5hbWUpIHtcbiAgdmFyIHJldHZhbCA9IHt9XG4gIHJldHZhbFtxdWV1ZU5hbWVdID0gW11cblxuICB2YXIgZm5TdHJpbmcgPSBtb2R1bGUudG9TdHJpbmcoKVxuICB2YXIgd3JhcHBlclNpZ25hdHVyZSA9IGZuU3RyaW5nLm1hdGNoKC9eZnVuY3Rpb25cXHM/XFx3KlxcKFxcdyssXFxzKlxcdyssXFxzKihcXHcrKVxcKS8pXG4gIGlmICghd3JhcHBlclNpZ25hdHVyZSkgcmV0dXJuIHJldHZhbFxuICB2YXIgd2VicGFja1JlcXVpcmVOYW1lID0gd3JhcHBlclNpZ25hdHVyZVsxXVxuXG4gIC8vIG1haW4gYnVuZGxlIGRlcHNcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnKFxcXFxcXFxcbnxcXFxcVyknICsgcXVvdGVSZWdFeHAod2VicGFja1JlcXVpcmVOYW1lKSArIGRlcGVuZGVuY3lSZWdFeHAsICdnJylcbiAgdmFyIG1hdGNoXG4gIHdoaWxlICgobWF0Y2ggPSByZS5leGVjKGZuU3RyaW5nKSkpIHtcbiAgICBpZiAobWF0Y2hbM10gPT09ICdkbGwtcmVmZXJlbmNlJykgY29udGludWVcbiAgICByZXR2YWxbcXVldWVOYW1lXS5wdXNoKG1hdGNoWzNdKVxuICB9XG5cbiAgLy8gZGxsIGRlcHNcbiAgcmUgPSBuZXcgUmVnRXhwKCdcXFxcKCcgKyBxdW90ZVJlZ0V4cCh3ZWJwYWNrUmVxdWlyZU5hbWUpICsgJ1xcXFwoXCIoZGxsLXJlZmVyZW5jZVxcXFxzKCcgKyBtb2R1bGVOYW1lUmVxRXhwICsgJykpXCJcXFxcKVxcXFwpJyArIGRlcGVuZGVuY3lSZWdFeHAsICdnJylcbiAgd2hpbGUgKChtYXRjaCA9IHJlLmV4ZWMoZm5TdHJpbmcpKSkge1xuICAgIGlmICghc291cmNlc1ttYXRjaFsyXV0pIHtcbiAgICAgIHJldHZhbFtxdWV1ZU5hbWVdLnB1c2gobWF0Y2hbMV0pXG4gICAgICBzb3VyY2VzW21hdGNoWzJdXSA9IF9fd2VicGFja19yZXF1aXJlX18obWF0Y2hbMV0pLm1cbiAgICB9XG4gICAgcmV0dmFsW21hdGNoWzJdXSA9IHJldHZhbFttYXRjaFsyXV0gfHwgW11cbiAgICByZXR2YWxbbWF0Y2hbMl1dLnB1c2gobWF0Y2hbNF0pXG4gIH1cblxuICAvLyBjb252ZXJ0IDFlMyBiYWNrIHRvIDEwMDAgLSB0aGlzIGNhbiBiZSBpbXBvcnRhbnQgYWZ0ZXIgdWdsaWZ5LWpzIGNvbnZlcnRlZCAxMDAwIHRvIDFlM1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJldHZhbCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmV0dmFsW2tleXNbaV1dLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoaXNOdW1lcmljKHJldHZhbFtrZXlzW2ldXVtqXSkpIHtcbiAgICAgICAgcmV0dmFsW2tleXNbaV1dW2pdID0gMSAqIHJldHZhbFtrZXlzW2ldXVtqXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0dmFsXG59XG5cbmZ1bmN0aW9uIGhhc1ZhbHVlc0luUXVldWVzIChxdWV1ZXMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhxdWV1ZXMpXG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzVmFsdWVzLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzVmFsdWVzIHx8IHF1ZXVlc1trZXldLmxlbmd0aCA+IDBcbiAgfSwgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGdldFJlcXVpcmVkTW9kdWxlcyAoc291cmNlcywgbW9kdWxlSWQpIHtcbiAgdmFyIG1vZHVsZXNRdWV1ZSA9IHtcbiAgICBtYWluOiBbbW9kdWxlSWRdXG4gIH1cbiAgdmFyIHJlcXVpcmVkTW9kdWxlcyA9IHtcbiAgICBtYWluOiBbXVxuICB9XG4gIHZhciBzZWVuTW9kdWxlcyA9IHtcbiAgICBtYWluOiB7fVxuICB9XG5cbiAgd2hpbGUgKGhhc1ZhbHVlc0luUXVldWVzKG1vZHVsZXNRdWV1ZSkpIHtcbiAgICB2YXIgcXVldWVzID0gT2JqZWN0LmtleXMobW9kdWxlc1F1ZXVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcXVldWVOYW1lID0gcXVldWVzW2ldXG4gICAgICB2YXIgcXVldWUgPSBtb2R1bGVzUXVldWVbcXVldWVOYW1lXVxuICAgICAgdmFyIG1vZHVsZVRvQ2hlY2sgPSBxdWV1ZS5wb3AoKVxuICAgICAgc2Vlbk1vZHVsZXNbcXVldWVOYW1lXSA9IHNlZW5Nb2R1bGVzW3F1ZXVlTmFtZV0gfHwge31cbiAgICAgIGlmIChzZWVuTW9kdWxlc1txdWV1ZU5hbWVdW21vZHVsZVRvQ2hlY2tdIHx8ICFzb3VyY2VzW3F1ZXVlTmFtZV1bbW9kdWxlVG9DaGVja10pIGNvbnRpbnVlXG4gICAgICBzZWVuTW9kdWxlc1txdWV1ZU5hbWVdW21vZHVsZVRvQ2hlY2tdID0gdHJ1ZVxuICAgICAgcmVxdWlyZWRNb2R1bGVzW3F1ZXVlTmFtZV0gPSByZXF1aXJlZE1vZHVsZXNbcXVldWVOYW1lXSB8fCBbXVxuICAgICAgcmVxdWlyZWRNb2R1bGVzW3F1ZXVlTmFtZV0ucHVzaChtb2R1bGVUb0NoZWNrKVxuICAgICAgdmFyIG5ld01vZHVsZXMgPSBnZXRNb2R1bGVEZXBlbmRlbmNpZXMoc291cmNlcywgc291cmNlc1txdWV1ZU5hbWVdW21vZHVsZVRvQ2hlY2tdLCBxdWV1ZU5hbWUpXG4gICAgICB2YXIgbmV3TW9kdWxlc0tleXMgPSBPYmplY3Qua2V5cyhuZXdNb2R1bGVzKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdNb2R1bGVzS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICBtb2R1bGVzUXVldWVbbmV3TW9kdWxlc0tleXNbal1dID0gbW9kdWxlc1F1ZXVlW25ld01vZHVsZXNLZXlzW2pdXSB8fCBbXVxuICAgICAgICBtb2R1bGVzUXVldWVbbmV3TW9kdWxlc0tleXNbal1dID0gbW9kdWxlc1F1ZXVlW25ld01vZHVsZXNLZXlzW2pdXS5jb25jYXQobmV3TW9kdWxlc1tuZXdNb2R1bGVzS2V5c1tqXV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcXVpcmVkTW9kdWxlc1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgc291cmNlcyA9IHtcbiAgICBtYWluOiBfX3dlYnBhY2tfbW9kdWxlc19fXG4gIH1cblxuICB2YXIgcmVxdWlyZWRNb2R1bGVzID0gb3B0aW9ucy5hbGwgPyB7IG1haW46IE9iamVjdC5rZXlzKHNvdXJjZXMubWFpbikgfSA6IGdldFJlcXVpcmVkTW9kdWxlcyhzb3VyY2VzLCBtb2R1bGVJZClcblxuICB2YXIgc3JjID0gJydcblxuICBPYmplY3Qua2V5cyhyZXF1aXJlZE1vZHVsZXMpLmZpbHRlcihmdW5jdGlvbiAobSkgeyByZXR1cm4gbSAhPT0gJ21haW4nIH0pLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgIHZhciBlbnRyeU1vZHVsZSA9IDBcbiAgICB3aGlsZSAocmVxdWlyZWRNb2R1bGVzW21vZHVsZV1bZW50cnlNb2R1bGVdKSB7XG4gICAgICBlbnRyeU1vZHVsZSsrXG4gICAgfVxuICAgIHJlcXVpcmVkTW9kdWxlc1ttb2R1bGVdLnB1c2goZW50cnlNb2R1bGUpXG4gICAgc291cmNlc1ttb2R1bGVdW2VudHJ5TW9kdWxlXSA9ICcoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXzsgfSknXG4gICAgc3JjID0gc3JjICsgJ3ZhciAnICsgbW9kdWxlICsgJyA9ICgnICsgd2VicGFja0Jvb3RzdHJhcEZ1bmMudG9TdHJpbmcoKS5yZXBsYWNlKCdFTlRSWV9NT0RVTEUnLCBKU09OLnN0cmluZ2lmeShlbnRyeU1vZHVsZSkpICsgJykoeycgKyByZXF1aXJlZE1vZHVsZXNbbW9kdWxlXS5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiAnJyArIEpTT04uc3RyaW5naWZ5KGlkKSArICc6ICcgKyBzb3VyY2VzW21vZHVsZV1baWRdLnRvU3RyaW5nKCkgfSkuam9pbignLCcpICsgJ30pO1xcbidcbiAgfSlcblxuICBzcmMgPSBzcmMgKyAnbmV3ICgoJyArIHdlYnBhY2tCb290c3RyYXBGdW5jLnRvU3RyaW5nKCkucmVwbGFjZSgnRU5UUllfTU9EVUxFJywgSlNPTi5zdHJpbmdpZnkobW9kdWxlSWQpKSArICcpKHsnICsgcmVxdWlyZWRNb2R1bGVzLm1haW4ubWFwKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gJycgKyBKU09OLnN0cmluZ2lmeShpZCkgKyAnOiAnICsgc291cmNlcy5tYWluW2lkXS50b1N0cmluZygpIH0pLmpvaW4oJywnKSArICd9KSkoc2VsZik7J1xuXG4gIHZhciBibG9iID0gbmV3IHdpbmRvdy5CbG9iKFtzcmNdLCB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pXG4gIGlmIChvcHRpb25zLmJhcmUpIHsgcmV0dXJuIGJsb2IgfVxuXG4gIHZhciBVUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93Lm1velVSTCB8fCB3aW5kb3cubXNVUkxcblxuICB2YXIgd29ya2VyVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICB2YXIgd29ya2VyID0gbmV3IHdpbmRvdy5Xb3JrZXIod29ya2VyVXJsKVxuICB3b3JrZXIub2JqZWN0VVJMID0gd29ya2VyVXJsXG5cbiAgcmV0dXJuIHdvcmtlclxufVxuIiwiY29uc3QgTE9BREVSX0VWRU5UUyA9IHtcbiAgTEFERVJfU1RBUlQ6ICdMT0FERVJfU1RBUlQnLFxuICBMT0FERVJfREFUQUxPQURFRDogJ0xPQURFUl9EQVRBTE9BREVEJyxcbiAgTE9BREVSX0NPTVBMRVRFOiAnTE9BREVSX0NPTVBMRVRFJyxcbiAgTE9BREVSX0VSUk9SOiAnTE9BREVSX0VSUk9SJ1xufVxuXG5jb25zdCBERU1VWF9FVkVOVFMgPSB7XG4gIERFTVVYX1NUQVJUOiAnREVNVVhfU1RBUlQnLFxuICBERU1VWF9DT01QTEVURTogJ0RFTVVYX0NPTVBMRVRFJyxcbiAgREVNVVhfRVJST1I6ICdERU1VWF9FUlJPUicsXG4gIE1FVEFEQVRBX1BBUlNFRDogJ01FVEFEQVRBX1BBUlNFRCcsXG4gIFZJREVPX01FVEFEQVRBX0NIQU5HRTogJ1ZJREVPX01FVEFEQVRBX0NIQU5HRScsXG4gIEFVRElPX01FVEFEQVRBX0NIQU5HRTogJ0FVRElPX01FVEFEQVRBX0NIQU5HRScsXG4gIE1FRElBX0lORk86ICdNRURJQV9JTkZPJ1xufVxuXG5jb25zdCBSRU1VWF9FVkVOVFMgPSB7XG4gIFJFTVVYX01FVEFEQVRBOiAnUkVNVVhfTUVUQURBVEEnLFxuICBSRU1VWF9NRURJQTogJ1JFTVVYX01FRElBJyxcbiAgTUVESUFfU0VHTUVOVDogJ01FRElBX1NFR01FTlQnLFxuICBSRU1VWF9FUlJPUjogJ1JFTVVYX0VSUk9SJyxcbiAgSU5JVF9TRUdNRU5UOiAnSU5JVF9TRUdNRU5UJyxcbiAgREVURUNUX0NIQU5HRV9TVFJFQU06ICdERVRFQ1RfQ0hBTkdFX1NUUkVBTSdcbn1cblxuY29uc3QgTVNFX0VWRU5UUyA9IHtcbiAgU09VUkNFX1VQREFURV9FTkQ6ICdTT1VSQ0VfVVBEQVRFX0VORCdcbn1cblxuLy8gaGxz5LiT5pyJZXZlbnRzXG5jb25zdCBITFNfRVZFTlRTID0ge1xuICBSRVRSWV9USU1FX0VYQ0VFREVEOiAnUkVUUllfVElNRV9FWENFRURFRCdcbn1cblxuY29uc3QgQ1JZVE9fRVZFTlRTID0ge1xuICBTVEFSVF9ERUNSWVBUOiAnU1RBUlRfREVDUllQVCcsXG4gIERFQ1JZUFRFRDogJ0RFQ1JZUFRFRCdcbn1cbmNvbnN0IEFMTEVWRU5UUyA9IE9iamVjdC5hc3NpZ24oe30sIExPQURFUl9FVkVOVFMsIERFTVVYX0VWRU5UUywgUkVNVVhfRVZFTlRTLCBNU0VfRVZFTlRTLCBITFNfRVZFTlRTKVxuXG5jb25zdCBGbHZBbGxvd2VkRXZlbnRzID0gW11cbmNvbnN0IEhsc0FsbG93ZWRFdmVudHMgPSBbXVxuXG5mb3IgKGxldCBrZXkgaW4gQUxMRVZFTlRTKSB7XG4gIGlmIChBTExFVkVOVFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIEZsdkFsbG93ZWRFdmVudHMucHVzaChBTExFVkVOVFNba2V5XSlcbiAgfVxufVxuXG5mb3IgKGxldCBrZXkgaW4gQUxMRVZFTlRTKSB7XG4gIGlmIChBTExFVkVOVFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIEhsc0FsbG93ZWRFdmVudHMucHVzaChBTExFVkVOVFNba2V5XSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEFMTEVWRU5UUyxcbiAgSExTX0VWRU5UUyxcbiAgUkVNVVhfRVZFTlRTLFxuICBERU1VWF9FVkVOVFMsXG4gIE1TRV9FVkVOVFMsXG4gIExPQURFUl9FVkVOVFMsXG4gIEZsdkFsbG93ZWRFdmVudHMsXG4gIEhsc0FsbG93ZWRFdmVudHMsXG4gIENSWVRPX0VWRU5UU1xufTtcbiIsImV4cG9ydCBjb25zdCBDT05URVhUX0NPTU9NQU5EUyA9IHtcbiAgT046ICdvbicsXG4gIE9OQ0U6ICdvbmNlJyxcbiAgT0ZGOiAnb2ZmJyxcbiAgRU1JVDogJ2VtaXQnLFxuICBERVNUUk9ZOiAnZGVzdHJveSdcbn1cbiIsImltcG9ydCBNZWRpYUluZm8gZnJvbSAnLi9tb2RlbHMvbWVkaWEtaW5mbydcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cydcblxuY29uc3QgRElSRUNUX0VNSVRfRkxBRyA9ICdfX1RPX18nXG5cbmNsYXNzIENvbnRleHQge1xuICBjb25zdHJ1Y3RvciAoYWxsb3dlZEV2ZW50cyA9IFtdKSB7XG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgIHRoaXMuX2luc3RhbmNlTWFwID0ge30gLy8g5omA5pyJ55qE6Kej56CB5rWB56iL5a6e5L6LXG4gICAgdGhpcy5fY2xzTWFwID0ge30gLy8g5p6E6YCg5Ye95pWw55qEbWFwXG4gICAgdGhpcy5faW5pdGVkID0gZmFsc2VcbiAgICB0aGlzLm1lZGlhSW5mbyA9IG5ldyBNZWRpYUluZm8oKVxuICAgIHRoaXMuYWxsb3dlZEV2ZW50cyA9IGFsbG93ZWRFdmVudHNcbiAgICB0aGlzLl9ob29rcyA9IHt9IC8vIOazqOWGjOWcqOS6i+S7tuWJjS/lkI7nmoTpkqnlrZDvvIzkvovlpoIgYmVmb3JlKCdERU1VWF9DT01QTEVURScpXG4gIH1cblxuICAvKipcbiAgICog5LuO5LiK5LiL5paH5Lit6I635Y+W6Kej56CB5rWB56iL5a6e5L6L77yM5aaC5p6c5rKh5pyJ5a6e5L6L77yM5p6E6YCg5LiA5LiqXG4gICAqIEBwYXJhbSB0YWdcbiAgICogQHBhcmFtIGFyZ3NcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAodGFnKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLl9pbnN0YW5jZU1hcFt0YWddXG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGAke3RhZ33lrp7kvovlsJrmnKrliJ3lp4vljJZgKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5Yid5aeL5YyW5YW35L2T5a6e5L6LXG4gICAqIEBwYXJhbSB0YWdcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIGluaXRJbnN0YW5jZSAodGFnLCAuLi5hcmdzKSB7XG4gICAgaWYgKHRoaXMuX2Nsc01hcFt0YWddKSB7XG4gICAgICBjb25zdCBuZXdJbnN0YW5jZSA9IG5ldyB0aGlzLl9jbHNNYXBbdGFnXSguLi5hcmdzKVxuICAgICAgdGhpcy5faW5zdGFuY2VNYXBbdGFnXSA9IG5ld0luc3RhbmNlXG4gICAgICBpZiAobmV3SW5zdGFuY2UuaW5pdCkge1xuICAgICAgICBuZXdJbnN0YW5jZS5pbml0KCkgLy8gVE9ETzogbGlmZWNpcmNsZVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0luc3RhbmNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0YWd95pyq5ZyoY29udGV4dOS4reazqOWGjGApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOmBv+WFjeWkp+mHj+eahGluaXRJbnN0YW5jZeiwg+eUqO+8jOWIneWni+WMluaJgOacieeahOe7hOS7tlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqL1xuICBpbml0IChjb25maWcpIHtcbiAgICBpZiAodGhpcy5faW5pdGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZm9yIChsZXQgdGFnIGluIHRoaXMuX2Nsc01hcCkge1xuICAgICAgLy8gaWYgbm90IGluaXRlZCwgaW5pdCBhbiBpbnN0YW5jZVxuICAgICAgaWYgKHRoaXMuX2Nsc01hcC5oYXNPd25Qcm9wZXJ0eSh0YWcpICYmICF0aGlzLl9pbnN0YW5jZU1hcFt0YWddKSB7XG4gICAgICAgIHRoaXMuaW5pdEluc3RhbmNlKHRhZywgY29uZmlnKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlXG4gIH1cblxuICAvKipcbiAgICog5rOo5YaM5LiA5Liq5LiK5LiL5paH5rWB56iL77yM5o+Q5L6b5a6J5YWo55qE5LqL5Lu25Y+R6YCB5py65Yi2XG4gICAqIEBwYXJhbSB0YWdcbiAgICogQHBhcmFtIGNsc1xuICAgKi9cbiAgcmVnaXN0cnkgKHRhZywgY2xzKSB7XG4gICAgY29uc3QgZW1pdHRlciA9IHRoaXMuX2VtaXR0ZXJcbiAgICBjb25zdCBjaGVja01lc3NhZ2VOYW1lID0gdGhpcy5faXNNZXNzYWdlTmFtZVZhbGlkLmJpbmQodGhpcylcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IGVuaGFuY2VkID0gY2xhc3MgZXh0ZW5kcyBjbHMge1xuICAgICAgY29uc3RydWN0b3IgKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncylcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7fVxuICAgICAgICB0aGlzLm9uY2VMaXN0ZW5lcnMgPSB7fVxuICAgICAgICB0aGlzLlRBRyA9IHRhZ1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gc2VsZlxuICAgICAgfVxuXG4gICAgICBvbiAobWVzc2FnZU5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNoZWNrTWVzc2FnZU5hbWUobWVzc2FnZU5hbWUpXG5cbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW21lc3NhZ2VOYW1lXSkge1xuICAgICAgICAgIHRoaXMubGlzdGVuZXJzW21lc3NhZ2VOYW1lXS5wdXNoKGNhbGxiYWNrKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGlzdGVuZXJzW21lc3NhZ2VOYW1lXSA9IFtjYWxsYmFja11cbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXR0ZXIub24oYCR7bWVzc2FnZU5hbWV9JHtESVJFQ1RfRU1JVF9GTEFHfSR7dGFnfWAsIGNhbGxiYWNrKSAvLyDlu7rnq4vlrprlkJHpgJrkv6Hnm5HlkKxcbiAgICAgICAgcmV0dXJuIGVtaXR0ZXIub24obWVzc2FnZU5hbWUsIGNhbGxiYWNrKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIOWcqOafkOS4quS6i+S7tuinpuWPkeWJjeaJp+ihjFxuICAgICAgICogQHBhcmFtIG1lc3NhZ2VOYW1lXG4gICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgICAqL1xuICAgICAgYmVmb3JlIChtZXNzYWdlTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY2hlY2tNZXNzYWdlTmFtZShtZXNzYWdlTmFtZSlcbiAgICAgICAgaWYgKHNlbGYuX2hvb2tzW21lc3NhZ2VOYW1lXSkge1xuICAgICAgICAgIHNlbGYuX2hvb2tzW21lc3NhZ2VOYW1lXS5wdXNoKGNhbGxiYWNrKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuX2hvb2tzW21lc3NhZ2VOYW1lXSA9IFtjYWxsYmFja11cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbmNlIChtZXNzYWdlTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY2hlY2tNZXNzYWdlTmFtZShtZXNzYWdlTmFtZSlcblxuICAgICAgICBpZiAodGhpcy5vbmNlTGlzdGVuZXJzW21lc3NhZ2VOYW1lXSkge1xuICAgICAgICAgIHRoaXMub25jZUxpc3RlbmVyc1ttZXNzYWdlTmFtZV0ucHVzaChjYWxsYmFjaylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9uY2VMaXN0ZW5lcnNbbWVzc2FnZU5hbWVdID0gW2NhbGxiYWNrXVxuICAgICAgICB9XG5cbiAgICAgICAgZW1pdHRlci5vbmNlKGAke21lc3NhZ2VOYW1lfSR7RElSRUNUX0VNSVRfRkxBR30ke3RhZ31gLCBjYWxsYmFjaylcbiAgICAgICAgcmV0dXJuIGVtaXR0ZXIub25jZShtZXNzYWdlTmFtZSwgY2FsbGJhY2spXG4gICAgICB9XG5cbiAgICAgIGVtaXQgKG1lc3NhZ2VOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIGNoZWNrTWVzc2FnZU5hbWUobWVzc2FnZU5hbWUpXG5cbiAgICAgICAgY29uc3QgYmVmb3JlTGlzdCA9IHNlbGYuX2hvb2tzID8gc2VsZi5faG9va3NbbWVzc2FnZU5hbWVdIDogbnVsbFxuXG4gICAgICAgIGlmIChiZWZvcmVMaXN0KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGJlZm9yZUxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gYmVmb3JlTGlzdFtpXVxuICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW1pdHRlci5lbWl0KG1lc3NhZ2VOYW1lLCAuLi5hcmdzKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIOWumuWQkeWPkemAgee7meafkOS4que7hOS7tuWNleS+i+eahOa2iOaBr1xuICAgICAgICogQHBhcmFtIG1lc3NhZ2VOYW1lXG4gICAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAgICovXG4gICAgICBlbWl0VG8gKHRhZywgbWVzc2FnZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgY2hlY2tNZXNzYWdlTmFtZShtZXNzYWdlTmFtZSlcblxuICAgICAgICByZXR1cm4gZW1pdHRlci5lbWl0KGAke21lc3NhZ2VOYW1lfSR7RElSRUNUX0VNSVRfRkxBR30ke3RhZ31gLCAuLi5hcmdzKVxuICAgICAgfVxuXG4gICAgICBvZmYgKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjaGVja01lc3NhZ2VOYW1lKG1lc3NhZ2VOYW1lKVxuICAgICAgICByZXR1cm4gZW1pdHRlci5vZmYobWVzc2FnZU5hbWUsIGNhbGxiYWNrKVxuICAgICAgfVxuXG4gICAgICByZW1vdmVMaXN0ZW5lcnMgKCkge1xuICAgICAgICBjb25zdCBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQodGhpcy5saXN0ZW5lcnMpXG5cbiAgICAgICAgZm9yIChsZXQgbWVzc2FnZU5hbWUgaW4gdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICBpZiAoaGFzT3duKG1lc3NhZ2VOYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5saXN0ZW5lcnNbbWVzc2FnZU5hbWVdIHx8IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXVxuICAgICAgICAgICAgICBlbWl0dGVyLm9mZihtZXNzYWdlTmFtZSwgY2FsbGJhY2spXG4gICAgICAgICAgICAgIGVtaXR0ZXIub2ZmKGAke21lc3NhZ2VOYW1lfSR7RElSRUNUX0VNSVRfRkxBR30ke3RhZ31gLCBjYWxsYmFjaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBtZXNzYWdlTmFtZSBpbiB0aGlzLm9uY2VMaXN0ZW5lcnMpIHtcbiAgICAgICAgICBpZiAoaGFzT3duKG1lc3NhZ2VOYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5vbmNlTGlzdGVuZXJzW21lc3NhZ2VOYW1lXSB8fCBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBjYWxsYmFja3NbaV1cbiAgICAgICAgICAgICAgZW1pdHRlci5vZmYobWVzc2FnZU5hbWUsIGNhbGxiYWNrKVxuICAgICAgICAgICAgICBlbWl0dGVyLm9mZihgJHttZXNzYWdlTmFtZX0ke0RJUkVDVF9FTUlUX0ZMQUd9JHt0YWd9YCwgY2FsbGJhY2spXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICog5Zyo57uE5Lu26ZSA5q+B5pe277yM6buY6K6k5bCG5a6D5rOo5YaM55qE5LqL5Lu25YWo6YOo5Y246L2977yM56Gu5L+d5LiN5Lya6YCg5oiQ5YaF5a2Y5rOE5ryPXG4gICAgICAgKi9cbiAgICAgIGRlc3Ryb3kgKCkge1xuICAgICAgICAvLyBzdGVwMSB1bmxpc3RlbiBldmVudHNcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKVxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IHt9XG5cbiAgICAgICAgLy8gc3RlcDIgcmVsZWFzZSBmcm9tIGNvbnRleHRcbiAgICAgICAgZGVsZXRlIHNlbGYuX2luc3RhbmNlTWFwW3RhZ11cbiAgICAgICAgaWYgKHN1cGVyLmRlc3Ryb3kpIHtcbiAgICAgICAgICByZXR1cm4gc3VwZXIuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY2xzTWFwW3RhZ10gPSBlbmhhbmNlZFxuXG4gICAgLyoqXG4gICAgICogZ2V0IGluc3RhbmNlIGltbWVkaWF0ZWx5XG4gICAgICogZS5nIGNvbnN0IGluc3RhbmNlID0gY29udGV4dC5yZWdpc3RyeSh0YWcsIENscykoY29uZmlnKVxuICAgICAqICovXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5pbml0SW5zdGFuY2UodGFnLCAuLi5hcmdzKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlr7nlrZjlnKjnmoTlrp7kvovov5vooYxcbiAgICovXG4gIGRlc3Ryb3lJbnN0YW5jZXMgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuX2luc3RhbmNlTWFwKS5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pbnN0YW5jZU1hcFt0YWddLmRlc3Ryb3kpIHtcbiAgICAgICAgdGhpcy5faW5zdGFuY2VNYXBbdGFnXS5kZXN0cm95KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIOe8luino+eggea1geeoi+aXoOmcgOWFs+azqOS6i+S7tueahOino+e7kVxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZW1pdHRlciA9IG51bGxcbiAgICB0aGlzLmFsbG93ZWRFdmVudHMgPSBbXVxuICAgIHRoaXMuX2Nsc01hcCA9IG51bGxcbiAgICB0aGlzLl9jb250ZXh0ID0gbnVsbFxuICAgIHRoaXMuX2hvb2tzID0gbnVsbFxuICAgIHRoaXMuZGVzdHJveUluc3RhbmNlcygpXG4gIH1cblxuICAvKipcbiAgICog5a+55L+h6YGT6L+b6KGM5pS25ouiXG4gICAqIEBwYXJhbSBtZXNzYWdlTmFtZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2lzTWVzc2FnZU5hbWVWYWxpZCAobWVzc2FnZU5hbWUpIHtcbiAgICBpZiAoIXRoaXMuYWxsb3dlZEV2ZW50cy5pbmRleE9mKG1lc3NhZ2VOYW1lKSA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdW5yZWdpc3RlcmVkIG1lc3NhZ2UgbmFtZTogJHttZXNzYWdlTmFtZX1gKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0XG4iLCJpbXBvcnQgRVZFTlRTIGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xuY29uc3QgQ1JZVE9fRVZFTlRTID0gRVZFTlRTLkNSWVRPX0VWRU5UU1xuY2xhc3MgQ3J5cHRvIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IGNvbmZpZy5pbnB1dGJ1ZmZlcjtcbiAgICAgICAgdGhpcy5vdXRwdXRCdWZmZXIgPSBjb25maWcub3V0cHV0YnVmZmVyO1xuICAgICAgICB0aGlzLmtleSA9IGNvbmZpZy5rZXk7XG4gICAgICAgIHRoaXMuaXYgPSBjb25maWcuaXY7XG4gICAgICAgIHRoaXMubWV0aG9kID0gY29uZmlnLm1ldGhvZDtcblxuICAgICAgICB0aGlzLmNyeXB0byA9ICB3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0b1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMub24oQ1JZVE9fRVZFTlRTLlNUQVJUX0RFQ1JZUFQsIHRoaXMuZGVjcmlwdC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgXG4gICAgZGVjcmlwdCgpIHtcbiAgICAgICAgaWYoIXRoaXMuYWVza2V5KSB7XG4gICAgICAgICAgICBsZXQgc2JrZXkgPSB0aGlzLmNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KCdyYXcnLCB0aGlzLmtleS5idWZmZXIsIHsgbmFtZTogJ0FFUy1DQkMnIH0sIGZhbHNlLCBbJ2VuY3J5cHQnLCAnZGVjcnlwdCddKTtcbiAgICAgICAgICAgIHNia2V5LnRoZW4oa2V5ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFlc2tleSA9IGtleTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlY3JpcHREYXRhKCk7XG4gICAgICAgICAgICB9KSBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVjcmlwdERhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY3JpcHREYXRhKCkge1xuICAgICAgICBsZXQgaW5wdXRidWZmZXIgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKHRoaXMuaW5wdXRCdWZmZXIpO1xuICAgICAgICBsZXQgb3V0cHV0YnVmZmVyID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSh0aGlzLm91dHB1dEJ1ZmZlcik7XG4gICAgICAgIGxldCBkYXRhID0gaW5wdXRidWZmZXIuc2hpZnQoKTtcbiAgICAgICAgaWYoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5jcnlwdG8uc3VidGxlLmRlY3J5cHQoeyBuYW1lOiAnQUVTLUNCQycsIGl2OiB0aGlzLml2LmJ1ZmZlciB9LCB0aGlzLmFlc2tleSwgZGF0YSkudGhlbihyZXM9PntcbiAgICAgICAgICAgICAgICBvdXRwdXRidWZmZXIucHVzaChuZXcgVWludDhBcnJheShyZXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoQ1JZVE9fRVZFTlRTLkRFQ1JZUFRFRCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWNyaXB0RGF0YShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ3J5cHRvOyIsImNvbnN0IGxlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnVmID0gbmV3IEFycmF5QnVmZmVyKDIpO1xuICAobmV3IERhdGFWaWV3KGJ1ZikpLnNldEludDE2KDAsIDI1NiwgdHJ1ZSkgLy8gbGl0dGxlLWVuZGlhbiB3cml0ZVxuICByZXR1cm4gKG5ldyBJbnQxNkFycmF5KGJ1ZikpWzBdID09PSAyNTYgLy8gcGxhdGZvcm0tc3BlYyByZWFkLCBpZiBlcXVhbCB0aGVuIExFXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGxlXG4iLCJjb25zdCBsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigyKTtcbiAgKG5ldyBEYXRhVmlldyhidWYpKS5zZXRJbnQxNigwLCAyNTYsIHRydWUpIC8vIGxpdHRsZS1lbmRpYW4gd3JpdGVcbiAgcmV0dXJuIChuZXcgSW50MTZBcnJheShidWYpKVswXSA9PT0gMjU2IC8vIHBsYXRmb3JtLXNwZWMgcmVhZCwgaWYgZXF1YWwgdGhlbiBMRVxufSkoKVxuXG5jb25zdCBzbmlmZmVyID0ge1xuICBnZXQgZGV2aWNlICgpIHtcbiAgICBsZXQgciA9IHNuaWZmZXIub3M7XG4gICAgcmV0dXJuIHIuaXNQYyA/ICdwYycgOiByLmlzVGFibGV0ID8gJ3RhYmxldCcgOiAnbW9iaWxlJztcbiAgfSxcbiAgZ2V0IGJyb3dzZXIgKCkge1xuICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgcmVnID0ge1xuICAgICAgaWU6IC9ydjooW1xcZC5dKylcXCkgbGlrZSBnZWNrby8sXG4gICAgICBmaXJmb3g6IC9maXJlZm94XFwvKFtcXGQuXSspLyxcbiAgICAgIGNocm9tZTogL2Nocm9tZVxcLyhbXFxkLl0rKS8sXG4gICAgICBvcGVyYTogL29wZXJhLihbXFxkLl0rKS8sXG4gICAgICBzYWZhcmk6IC92ZXJzaW9uXFwvKFtcXGQuXSspLipzYWZhcmkvXG4gICAgfTtcbiAgICByZXR1cm4gW10uY29uY2F0KE9iamVjdC5rZXlzKHJlZykuZmlsdGVyKGtleSA9PiByZWdba2V5XS50ZXN0KHVhKSkpWzBdO1xuICB9LFxuICBnZXQgb3MgKCkge1xuICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICBsZXQgaXNXaW5kb3dzUGhvbmUgPSAvKD86V2luZG93cyBQaG9uZSkvLnRlc3QodWEpXG4gICAgbGV0IGlzU3ltYmlhbiA9IC8oPzpTeW1iaWFuT1MpLy50ZXN0KHVhKSB8fCBpc1dpbmRvd3NQaG9uZTtcbiAgICBsZXQgaXNBbmRyb2lkID0gLyg/OkFuZHJvaWQpLy50ZXN0KHVhKTtcbiAgICBsZXQgaXNGaXJlRm94ID0gLyg/OkZpcmVmb3gpLy50ZXN0KHVhKTtcbiAgICBsZXQgaXNUYWJsZXQgPSAvKD86aVBhZHxQbGF5Qm9vaykvLnRlc3QodWEpIHx8IChpc0FuZHJvaWQgJiYgIS8oPzpNb2JpbGUpLy50ZXN0KHVhKSkgfHwgKGlzRmlyZUZveCAmJiAvKD86VGFibGV0KS8udGVzdCh1YSkpO1xuICAgIGxldCBpc1Bob25lID0gLyg/OmlQaG9uZSkvLnRlc3QodWEpICYmICFpc1RhYmxldDtcbiAgICBsZXQgaXNQYyA9ICFpc1Bob25lICYmICFpc0FuZHJvaWQgJiYgIWlzU3ltYmlhbjtcbiAgICByZXR1cm4ge1xuICAgICAgaXNUYWJsZXQsXG4gICAgICBpc1Bob25lLFxuICAgICAgaXNBbmRyb2lkLFxuICAgICAgaXNQYyxcbiAgICAgIGlzU3ltYmlhbixcbiAgICAgIGlzV2luZG93c1Bob25lLFxuICAgICAgaXNGaXJlRm94XG4gICAgfTtcbiAgfSxcblxuICBnZXQgaXNMZSAoKSB7XG4gICAgcmV0dXJuIGxlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNuaWZmZXI7XG4iLCJjbGFzcyBVVEY4IHtcbiAgc3RhdGljIGRlY29kZSAodWludDhhcnJheSkge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGNvbnN0IGlucHV0ID0gdWludDhhcnJheTtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbGVuZ3RoID0gdWludDhhcnJheS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgaWYgKGlucHV0W2ldIDwgMHg4MCkge1xuICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGlucHV0W2ldKSk7XG4gICAgICAgICsraTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGlucHV0W2ldIDwgMHhDMCkge1xuICAgICAgICAvLyBmYWxsdGhyb3VnaFxuICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4RTApIHtcbiAgICAgICAgaWYgKFVURjguX2NoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAxKSkge1xuICAgICAgICAgIGNvbnN0IHVjczQgPSAoaW5wdXRbaV0gJiAweDFGKSA8PCA2IHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpO1xuICAgICAgICAgIGlmICh1Y3M0ID49IDB4ODApIHtcbiAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUodWNzNCAmIDB4RkZGRikpO1xuICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlucHV0W2ldIDwgMHhGMCkge1xuICAgICAgICBpZiAoVVRGOC5fY2hlY2tDb250aW51YXRpb24oaW5wdXQsIGksIDIpKSB7XG4gICAgICAgICAgY29uc3QgdWNzNCA9IChpbnB1dFtpXSAmIDB4RikgPDwgMTIgfCAoaW5wdXRbaSArIDFdICYgMHgzRikgPDwgNiB8IGlucHV0W2kgKyAyXSAmIDB4M0Y7XG4gICAgICAgICAgaWYgKHVjczQgPj0gMHg4MDAgJiYgKHVjczQgJiAweEY4MDApICE9PSAweEQ4MDApIHtcbiAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUodWNzNCAmIDB4RkZGRikpO1xuICAgICAgICAgICAgaSArPSAzO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlucHV0W2ldIDwgMHhGOCkge1xuICAgICAgICBpZiAoVVRGOC5fY2hlY2tDb250aW51YXRpb24oaW5wdXQsIGksIDMpKSB7XG4gICAgICAgICAgbGV0IHVjczQgPSAoaW5wdXRbaV0gJiAweDcpIDw8IDE4IHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpIDw8IDEyIHxcbiAgICAgICAgICAgICAgICAgICAgKGlucHV0W2kgKyAyXSAmIDB4M0YpIDw8IDYgfCAoaW5wdXRbaSArIDNdICYgMHgzRik7XG4gICAgICAgICAgaWYgKHVjczQgPiAweDEwMDAwICYmIHVjczQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgdWNzNCAtPSAweDEwMDAwO1xuICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgodWNzNCA+Pj4gMTApIHwgMHhEODAwKSk7XG4gICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKCh1Y3M0ICYgMHgzRkYpIHwgMHhEQzAwKSk7XG4gICAgICAgICAgICBpICs9IDQ7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSk7XG4gICAgICArK2k7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dC5qb2luKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBfY2hlY2tDb250aW51YXRpb24gKHVpbnQ4YXJyYXksIHN0YXJ0LCBjaGVja0xlbmd0aCkge1xuICAgIGxldCBhcnJheSA9IHVpbnQ4YXJyYXk7XG4gICAgaWYgKHN0YXJ0ICsgY2hlY2tMZW5ndGggPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgIHdoaWxlIChjaGVja0xlbmd0aC0tKSB7XG4gICAgICAgIGlmICgoYXJyYXlbKytzdGFydF0gJiAweEMwKSAhPT0gMHg4MCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVVRGODtcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJ1xuY2xhc3MgQXVkaW9DdHggZXh0ZW5kcyBFdmVudEVtaXR0ZXJ7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcbiAgICBsZXQgQXVkaW9Db250ZXh0ID0gIHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICB0aGlzLmNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgdGhpcy5nYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy5tZXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2FtcGxlcyA9IFtdO1xuICAgIHRoaXMucHJlbG9hZFRpbWUgPSB0aGlzLmNvbmZpZy5wcmVsb2FkVGltZSB8fCAzO1xuICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuXG4gICAgdGhpcy5fY3VycmVudEJ1ZmZlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9uZXh0QnVmZmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2xhc3RwdHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcHJlRGVjb2RlID0gW107XG4gICAgdGhpcy5fY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMuX2RlY29kaW5nID0gZmFsc2U7XG4gICAgLy8g6K6w5b2V5aSW6YOo5Lyg6L6T55qE54q25oCBXG4gICAgdGhpcy5fcGxheWVkID0gZmFsc2U7XG4gIH1cblxuICBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUaW1lO1xuICB9XG5cbiAgZGVjb2RlQXVkaW8gKGF1ZGlvVHJhY2spIHtcbiAgICBsZXQge3NhbXBsZXN9ID0gYXVkaW9UcmFjaztcbiAgICBsZXQgZGF0YSA9IHNhbXBsZXM7XG4gICAgYXVkaW9UcmFjay5zYW1wbGVzID0gW107XG4gICAgdGhpcy5zZXRBdWRpb0RhdGEoZGF0YSk7XG4gIH1cbiAgc2V0QXVkaW9EYXRhIChkYXRhKSB7XG4gICAgZm9yKGxldCBpID0gMDtpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgZGF0YVtpXS5wdHMgPSAoZGF0YVtpXS5wdHMgPT09IHVuZGVmaW5lZCkgPyBkYXRhW2ldLmR0cyA6IGRhdGFbaV0ucHRzO1xuICAgICAgdGhpcy5fcHJlRGVjb2RlLnB1c2goZGF0YVtpXSk7XG4gICAgfVxuICAgIGlmKHRoaXMuX3ByZURlY29kZS5sZW5ndGggPiAwKSB7XG4gICAgICBpZih0aGlzLl9sYXN0cHRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fbGFzdHB0cyA9IHRoaXMuX3ByZURlY29kZVswXS5wdHM7XG4gICAgICB9XG4gICAgICBpZigodGhpcy5fcHJlRGVjb2RlW3RoaXMuX3ByZURlY29kZS5sZW5ndGggLSAxXS5wdHMgLSB0aGlzLl9sYXN0cHRzKSAvIDEwMDAgPiB0aGlzLnByZWxvYWRUaW1lKSB7XG4gICAgICAgIHRoaXMuZGVjb2RlQUFDKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVjb2RlQUFDKCkge1xuICAgIGlmKHRoaXMuX2RlY29kaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2RlY29kaW5nID0gdHJ1ZTtcbiAgICBsZXQgZGF0YSA9IHRoaXMuX3ByZURlY29kZTtcbiAgICBsZXQgc2FtcGxlcyA9IFtdO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHNhbXBsZSA9IGRhdGEuc2hpZnQoKTtcbiAgICB3aGlsZShzYW1wbGUpIHtcbiAgICAgIGxldCBzYW1wbGVEYXRhID0gQXVkaW9DdHguZ2V0QUFDRGF0YSh0aGlzLm1ldGEsIHNhbXBsZSlcbiAgICAgIHNhbXBsZXMucHVzaChzYW1wbGVEYXRhKTtcbiAgICAgIHRoaXMuX2xhc3RwdHMgPSBzYW1wbGUucHRzO1xuICAgICAgc2FtcGxlID0gZGF0YS5zaGlmdCgpXG4gICAgfVxuICAgIGxldCBidWZmZXIgPSBBdWRpb0N0eC5jb21iaWxlRGF0YShzYW1wbGVzKTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YShidWZmZXIuYnVmZmVyLCBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgICAgbGV0IGF1ZGlvU291cmNlID0gX3RoaXMuY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgYXVkaW9Tb3VyY2UuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICBhdWRpb1NvdXJjZS5vbmVuZGVkID0gX3RoaXMub25Tb3VyY2VFbmRlZC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuc2FtcGxlcy5wdXNoKHtcbiAgICAgICAgICB0aW1lOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICBkdXJhdGlvbjogYnVmZmVyLmR1cmF0aW9uLFxuICAgICAgICAgIGRhdGE6IGF1ZGlvU291cmNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgX3RoaXMuZHVyYXRpb24gKz0gYnVmZmVyLmR1cmF0aW9uO1xuXG4gICAgICAgIGlmKCFfdGhpcy5fY3VycmVudEJ1ZmZlcikge1xuICAgICAgICAgIF90aGlzLl9jdXJyZW50QnVmZmVyID0gX3RoaXMuZ2V0VGltZUJ1ZmZlcihfdGhpcy5jdXJyZW50VGltZSk7XG5cbiAgICAgICAgICBpZihfdGhpcy5fcGxheWVkKSB7XG4gICAgICAgICAgICBfdGhpcy5wbGF5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIV90aGlzLl9uZXh0QnVmZmVyICYmIF90aGlzLl9jdXJyZW50QnVmZmVyKSB7XG4gICAgICAgICAgX3RoaXMuX25leHRCdWZmZXIgPSBfdGhpcy5nZXRUaW1lQnVmZmVyKF90aGlzLmN1cnJlbnRUaW1lICsgX3RoaXMuX2N1cnJlbnRCdWZmZXIuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLl9kZWNvZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmKChfdGhpcy5fcHJlRGVjb2RlLmxlbmd0aCA+IDAgJiYgX3RoaXMuX3ByZURlY29kZVtfdGhpcy5fcHJlRGVjb2RlLmxlbmd0aCAtIDFdLnB0cyAtIF90aGlzLl9sYXN0cHRzKSAvIDEwMDAgPj0gX3RoaXMucHJlbG9hZFRpbWUpIHtcbiAgICAgICAgICBfdGhpcy5kZWNvZGVBQUMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIG9uU291cmNlRW5kZWQoKSB7XG4gICAgaWYgKCF0aGlzLl9uZXh0QnVmZmVyIHx8ICF0aGlzLl9wbGF5ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGF1ZGlvU291cmNlID0gdGhpcy5fbmV4dEJ1ZmZlci5kYXRhO1xuICAgIGF1ZGlvU291cmNlLnN0YXJ0KCk7XG4gICAgYXVkaW9Tb3VyY2UuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgICB0aGlzLl9jdXJyZW50QnVmZmVyID0gdGhpcy5fbmV4dEJ1ZmZlcjtcbiAgICB0aGlzLl9jdXJyZW50VGltZSA9IHRoaXMuX2N1cnJlbnRCdWZmZXIudGltZTtcbiAgICB0aGlzLl9uZXh0QnVmZmVyID0gdGhpcy5nZXRUaW1lQnVmZmVyKHRoaXMuY3VycmVudFRpbWUpO1xuICAgIGlmICh0aGlzLl9jdXJyZW50QnVmZmVyKSB7XG4gICAgICB0aGlzLl9uZXh0QnVmZmVyID0gdGhpcy5nZXRUaW1lQnVmZmVyKHRoaXMuY3VycmVudFRpbWUgKyB0aGlzLl9jdXJyZW50QnVmZmVyLmR1cmF0aW9uKTtcbiAgICB9XG4gICAgdGhpcy5lbWl0KCdBVURJT19TT1VSQ0VfRU5EJylcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5fcGxheWVkID0gdHJ1ZTtcbiAgICBpZighdGhpcy5fY3VycmVudEJ1ZmZlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLl9jdXJyZW50QnVmZmVyLmRhdGE7XG4gICAgYXVkaW9Tb3VyY2UuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgICBhdWRpb1NvdXJjZS5zdGFydCgpO1xuICB9XG5cbiAgZ2V0VGltZUJ1ZmZlcih0aW1lKSB7XG4gICAgbGV0IHJldDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zYW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2FtcGxlID0gdGhpcy5zYW1wbGVzW2ldXG4gICAgICBpZihzYW1wbGUudGltZSA8PSB0aW1lICYmIChzYW1wbGUudGltZSArIHNhbXBsZS5kdXJhdGlvbikgPiB0aW1lKSB7XG4gICAgICAgIHJldCA9IHNhbXBsZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzZXRBdWRpb01ldGFEYXRhKG1ldGEpIHtcbiAgICB0aGlzLm1ldGEgPSBtZXRhO1xuICB9XG5cbiAgc3RhdGljIGdldEFBQ0RhdGEobWV0YSwgc2FtcGxlKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHNhbXBsZS5kYXRhLmJ5dGVMZW5ndGggKyA3KTtcbiAgICBsZXQgYWR0cyA9IEF1ZGlvQ3R4LmdldEFkdHMobWV0YSwgc2FtcGxlLmRhdGEpO1xuICAgIGJ1ZmZlci5zZXQoYWR0cyk7XG4gICAgYnVmZmVyLnNldChzYW1wbGUuZGF0YSwgNyk7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfVxuXG4gIHN0YXRpYyBjb21iaWxlRGF0YShzYW1wbGVzKSB7XG4gICAgLy8gZ2V0IGxlbmd0aFxuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGZvcihsZXQgaSA9IDAsayA9IHNhbXBsZXMubGVuZ3RoOyBpIDwgazsgaSsrKSB7XG4gICAgICBsZW5ndGggKz0gc2FtcGxlc1tpXS5ieXRlTGVuZ3RoO1xuICAgIH1cblxuICAgIGxldCByZXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIC8vIGNvbWJpbGUgZGF0YTtcbiAgICBmb3IobGV0IGkgPSAwLGsgPSBzYW1wbGVzLmxlbmd0aDsgaSA8IGs7IGkrKykge1xuICAgICAgcmV0LnNldChzYW1wbGVzW2ldLCBvZmZzZXQpO1xuICAgICAgb2Zmc2V0ICs9IHNhbXBsZXNbaV0uYnl0ZUxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBZHRzKG1ldGEsIGRhdGEpIHtcbiAgICBsZXQgYWR0cyA9IG5ldyBVaW50OEFycmF5KDcpO1xuXG4gICAgLy8g6K6+572u5ZCM5q2l5L2NIDB4ZmZmIDEyYml0XG4gICAgYWR0c1swXSA9IDB4ZmY7XG4gICAgYWR0c1sxXSA9IDB4ZjA7XG5cbiAgICAvLyBPYmplY3QgZGF0YSAo5rKh5LuA5LmI5Lq655SoTVBFRy0y5LqG77yMSExT5ZKMRkxW5Lmf5YWo5pivTVBFRy0077yM6L+Z6YeM55u05o6lMCkgIDFiaXRcbiAgICAvLyBMZXZlbCBhbHdheXMgMDAgMmJpdFxuICAgIC8vIENSQyBhbHdheXMgMSAxYml0XG4gICAgYWR0c1sxXSA9IGFkdHNbMV0gfCAweDAxO1xuXG4gICAgLy8gcHJvZmlsZSAyYml0XG4gICAgYWR0c1syXSA9IDB4YzAgJiAoKG1ldGEub2JqZWN0VHlwZS0xKSA8PCA2KTtcblxuICAgIC8vc2FtcGxlRnJlcXVlbmN5SW5kZXhcbiAgICBhZHRzWzJdID0gYWR0c1syXSB8ICgweDNjICYgKG1ldGEuc2FtcGxlUmF0ZUluZGV4IDw8IDIpKVxuXG4gICAgLy9wcml2YXRlIGJpdCAwIDFiaXRcbiAgICAvLyBjaGFuZWwgY29uZmlndXJhdGlvbiAzYml0XG4gICAgYWR0c1syXSA9IGFkdHNbMl0gfCAoMHgwMSAmIG1ldGEuY2hhbm5lbENvdW50ID4+IDIpO1xuICAgIGFkdHNbM10gPSAweGMwICYgKG1ldGEuY2hhbm5lbENvdW50IDw8IDYpO1xuXG4gICAgLy8gb3JpZ2luYWxfY29weTogMCAxYml0XG4gICAgLy8gaG9tZTogMCAxYml0XG5cbiAgICAvLyBhZHRzX3ZhcmlhYmxlX2hlYWRlcigpXG4gICAgLy8gY29weXJpZ2h0ZWRfaWRfYml0IDAgMWJpdFxuICAgIC8vIGNvcHlyaWdodGVkX2lkX3N0YXJ0IDAgMWJpdFxuXG4gICAgLy8gYWFjX2ZyYW1lX2xlbmd0aCAxM2JpdDtcbiAgICBsZXQgYWFjZnJhbWVsZW5ndGggPSBkYXRhLmJ5dGVMZW5ndGggKyA3O1xuXG4gICAgYWR0c1szXSA9IGFkdHNbM10gfCAoMHgwMyAmIGFhY2ZyYW1lbGVuZ3RoID4+IDExKTtcbiAgICBhZHRzWzRdID0gMHhmZiAmIChhYWNmcmFtZWxlbmd0aCA+PiAzKTtcbiAgICBhZHRzWzVdID0gMHhlMCAmIChhYWNmcmFtZWxlbmd0aCA8PCA1KTtcblxuICAgIC8vIGFkdHNfYnVmZmVyX2Z1bGxuZXNzIDB4N2ZmIDExYml0XG4gICAgYWR0c1s1XSA9IGFkdHNbNV0gfCAweDFmXG4gICAgYWR0c1s2XSA9IDB4ZmM7XG5cbiAgICAvLyBudW1iZXJfb2ZfcmF3X2RhdGFfYmxvY2tzX2luX2ZyYW1lIDAgMmJpdDtcbiAgICByZXR1cm4gYWR0cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb0N0eDtcbiIsImltcG9ydCBWaWRlb0N0eCBmcm9tICcuL3ZpZGVvLWNvbnRleHQnO1xuaW1wb3J0IEF1ZGlvQ3R4IGZyb20gJy4vYXVkaW8tY29udGV4dCc7XG5pbXBvcnQgeyBnZXRUaWNrZXIgfSBmcm9tICcuL3RpY2tlcic7XG5cbi8qKlxuICog6Z+z55S75ZCM5q2l6LCD5ZKM5ZmoXG4gKi9cbmNsYXNzIEFWUmVjb25jaWxlciB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHRoaXMuYUN0eCA9IHByb3BzLmFDdHg7XG4gICAgdGhpcy52Q3R4ID0gcHJvcHMudkN0eDtcbiAgICB0aGlzLnZpZGVvID0gcHJvcHMudmlkZW9cbiAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGxcbiAgICB0aGlzLnN0YXJ0ID0gbnVsbFxuICB9XG5cbiAgZG9SZWNvbmNpbGUgKCkge1xuICAgIGNvbnN0IHZDdXJUaW1lID0gKHRoaXMudmlkZW8uY3VycmVudFRpbWUgfHwgMCkgKiAxMDAwO1xuICAgIGNvbnN0IGFDdXJUaW1lID0gKHRoaXMuYUN0eC5jdXJyZW50VGltZSB8fCAwKSAqIDEwMDA7XG5cbiAgICBjb25zdCBnYXAgPSB2Q3VyVGltZSAtIGFDdXJUaW1lO1xuICAgIGlmICh0aGlzLnRpbWVvdXRJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZ2FwID4gMjAwKSB7IC8vIGF1ZGlvIGRlbGF5ZWQgZm9yIG1vcmUgdGhhbiAxMDBtc1xuICAgICAgY29uc29sZS5sb2coZ2FwKVxuICAgICAgdGhpcy52aWRlby5zdGFydCArPSBnYXBcbiAgICAgIHRoaXMudkN0eC5wYXVzZSgpXG4gICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnZDdHgucGxheSgpXG4gICAgICAgIHRoaXMudGltZW91dElkID0gbnVsbFxuICAgICAgfSwgZ2FwKVxuICAgIH0gZWxzZSBpZiAoZ2FwIDwgLTEyMCkge1xuICAgICAgdGhpcy52Q3R4LmN1cnJlbnRUaW1lID0gdGhpcy52Q3R4LmN1cnJlbnRUaW1lICsgTWF0aC5hYnMoZ2FwKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmFDdHggPSBudWxsXG4gICAgdGhpcy52Q3R4ID0gbnVsbFxuICB9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuY2xhc3MgTW9iaWxlVmlkZW8gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy52Q3R4ID0gbmV3IFZpZGVvQ3R4KCk7XG4gICAgdGhpcy5hQ3R4ID0gbmV3IEF1ZGlvQ3R4KGNvbmZpZyk7XG4gICAgdGhpcy50aWNrZXIgPSBuZXcgKGdldFRpY2tlcigpKSgpXG4gICAgdGhpcy5oaXN0b3J5VGltZSA9IDA7XG4gICAgdGhpcy5yZWNvbmNpbGVyID0gbmV3IEFWUmVjb25jaWxlcih7XG4gICAgICB2Q3R4OiB0aGlzLnZDdHgsXG4gICAgICBhQ3R4OiB0aGlzLmFDdHgsXG4gICAgICB2aWRlbzogdGhpc1xuICAgIH0pXG4gICAgdGhpcy5oYW5kbGVBdWRpb1NvdXJjZUVuZCA9IHRoaXMuaGFuZGxlQXVkaW9Tb3VyY2VFbmQuYmluZCh0aGlzKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnZDdHgub25jYW5wbGF5ID0gKCkgPT4ge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLnZDdHguY2FudmFzKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2FucGxheScpKTtcbiAgICB9XG5cbiAgICB0aGlzLnRpY2tlci5zdGFydCgoKSA9PiB7XG4gICAgICAvL1xuICAgICAgaWYgKCF0aGlzLnN0YXJ0KSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgICB9XG4gICAgICB0aGlzLl9jdXJyZW50VGltZSA9IERhdGUubm93KCkgLSB0aGlzLnN0YXJ0XG4gICAgICB0aGlzLnZDdHguX29uVGltZXIodGhpcy5fY3VycmVudFRpbWUpXG4gICAgfSlcblxuICAgIHRoaXMuYUN0eC5vbignQVVESU9fU09VUkNFX0VORCcsIHRoaXMuaGFuZGxlQXVkaW9Tb3VyY2VFbmQpXG4gIH1cblxuICBoYW5kbGVBdWRpb1NvdXJjZUVuZCAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5hQ3R4LmN1cnJlbnRUaW1lKVxuICAgIHRoaXMucmVjb25jaWxlci5kb1JlY29uY2lsZSgpXG4gIH1cblxuICBfY2xlYW5CdWZmZXIgKCkge1xuICAgIHRoaXMudkN0eC5jbGVhbkJ1ZmZlcigpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJlY29uY2lsZXIuZGVzdHJveSgpXG4gIH1cblxuICBvbkRlbXV4Q29tcGxldGUgKHZpZGVvVHJhY2ssIGF1ZGlvVHJhY2spIHtcbiAgICB0aGlzLmFDdHguZGVjb2RlQXVkaW8oYXVkaW9UcmFjayk7XG4gICAgdGhpcy52Q3R4LmRlY29kZVZpZGVvKHZpZGVvVHJhY2spO1xuICB9XG5cbiAgc2V0QXVkaW9NZXRhIChtZXRhKSB7XG4gICAgdGhpcy5hQ3R4LnNldEF1ZGlvTWV0YURhdGEobWV0YSk7XG4gIH1cblxuICBzZXRWaWRlb01ldGEgKG1ldGEpIHtcbiAgICB0aGlzLnZDdHguc2V0VmlkZW9NZXRhRGF0YShtZXRhKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50VGltZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUaW1lIC8gMTAwMFxuICB9XG5cbiAgcGxheSAoKSB7XG4gICAgLy8gaWYgKCF0aGlzLnZDdHguKVxuICAgIHRoaXMudkN0eC5wbGF5KCk7XG4gICAgdGhpcy5hQ3R4LnBsYXkoKTtcbiAgfVxufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21vYmlsZS12aWRlbycsIE1vYmlsZVZpZGVvKTtcbiIsImNsYXNzIFNvdXJjZUJ1ZmZlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25maWcudHlwZTtcbiAgICB0aGlzLmJ1ZmZlciA9IFtdO1xuICAgIHRoaXMuY3VycmVudEdvcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9sYXN0R2V0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVzaCAoZnJhbWUpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICBpZiAoZnJhbWUuaXNLZXlmcmFtZSkge1xuICAgICAgICBsZXQgY3VycmVudEdvcCA9IHtcbiAgICAgICAgICBzYW1wbGVzOiBbXSxcbiAgICAgICAgICBzdGFydDogZnJhbWUuZHRzLFxuICAgICAgICAgIGVuZDogZnJhbWUuZHRzLFxuICAgICAgICAgIG5leHRHb3A6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50R29wKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50R29wLm5leHRHb3AgPSBjdXJyZW50R29wO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEdvcCA9IGN1cnJlbnRHb3A7XG4gICAgICAgIHRoaXMuYnVmZmVyLnB1c2godGhpcy5jdXJyZW50R29wKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3VycmVudEdvcCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRHb3Auc2FtcGxlcy5wdXNoKGZyYW1lKTtcblxuICAgICAgICBpZiAoZnJhbWUuZHRzIDwgdGhpcy5jdXJyZW50R29wLnN0YXJ0KSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50R29wLnN0YXJ0ID0gZnJhbWUuZHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyYW1lLmR0cyA+IHRoaXMuY3VycmVudEdvcC5lbmQpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRHb3AuZW5kID0gZnJhbWUuZHRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0ICh0aW1lKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgaWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBzYW1wbGUgPSB0aGlzLl9nZXROZXh0KCk7XG4gICAgICAgIHJldHVybiBzYW1wbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2dldE5leHQgKCkge1xuICAgIGlmICghdGhpcy5fbGFzdEdldCkge1xuICAgICAgbGV0IGdvcCA9IHRoaXMuYnVmZmVyWzBdO1xuICAgICAgaWYgKGdvcC5zYW1wbGVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xhc3RHZXQgPSB7XG4gICAgICAgIGdvcCxcbiAgICAgICAgaW5kZXg6IDBcbiAgICAgIH1cbiAgICAgIHJldHVybiBnb3Auc2FtcGxlc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGdvcCA9IHRoaXMuX2xhc3RHZXQuZ29wO1xuICAgICAgbGV0IHNhbXBsZSA9IGdvcC5zYW1wbGVzW3RoaXMuX2xhc3RHZXQuaW5kZXggKyAxXTtcbiAgICAgIGlmIChzYW1wbGUpIHtcbiAgICAgICAgdGhpcy5fbGFzdEdldC5pbmRleCA9IHRoaXMuX2xhc3RHZXQuaW5kZXggKyAxO1xuICAgICAgICByZXR1cm4gc2FtcGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ29wID0gZ29wLm5leHRHb3A7XG4gICAgICAgIGlmICghZ29wIHx8IGdvcC5zYW1wbGVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2FtcGxlID0gZ29wLnNhbXBsZXNbMF07XG4gICAgICAgIHRoaXMuX2xhc3RHZXQgPSB7XG4gICAgICAgICAgZ29wLFxuICAgICAgICAgIGluZGV4OiAwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNhbXBsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmUgKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAodGhpcy5idWZmZXIubGVuZ3RoIDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZ29wID0gdGhpcy5idWZmZXJbMF07XG4gICAgd2hpbGUgKGdvcCkge1xuICAgICAgaWYgKGdvcC5lbmQgPCBlbmQgJiYgZ29wLnN0YXJ0ID49IHN0YXJ0KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmJ1ZmZlcltpXTtcbiAgICAgICAgZ29wID0gdGhpcy5idWZmZXJbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIGdvcCA9IHRoaXMuYnVmZmVyW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3VyY2VCdWZmZXI7XG4iLCIvKipcbiAqIEBhdXRob3IgZnV5dWhhb0BieXRlZGFuY2UuY29tXG4gKi9cblxuY2xhc3MgVGlja2VyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zIHx8IHt9LCB7XG4gICAgICBpbnRlcnZhbDogMTZcbiAgICB9KVxuXG4gICAgdGhpcy5jYWxsYmFja3MgPSBbXVxuICB9XG5cbiAgc3RhcnQoLi4uY2FsbGJhY2tzKSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3NcbiAgfVxuXG4gIG9uVGljayAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuY2FsbGJhY2tzW2ldXG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgc2V0SW50ZXJ2YWwgKGludGVydmFsKSB7XG4gICAgdGhpcy5vcHRpb25zLmludGVydmFsID0gaW50ZXJ2YWxcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vKipcbiAqIHRpY2tlciB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gKi9cbmNsYXNzIFJhZlRpY2tlciBleHRlbmRzIFRpY2tlciB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMudGltZXJJZCA9IG51bGxcbiAgICB0aGlzLl9zdWJUaW1lcklkID0gbnVsbFxuXG4gICAgdGhpcy5fdGlja0Z1bmMgPSBSYWZUaWNrZXIuZ2V0VGlja0Z1bmMoKVxuICAgIHRoaXMudGljayA9IHRoaXMudGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGFydCAoLi4uY2FsbGJhY2tzKSB7XG4gICAgc3VwZXIuc3RhcnQoLi4uY2FsbGJhY2tzKVxuICAgIHRoaXMudGljaygpXG4gIH1cblxuICB0aWNrICh0aW1lc3RhbXApIHtcbiAgICB0aGlzLm5leHRUaWNrKCk7XG4gICAgdGhpcy5vblRpY2soKVxuICB9XG5cbiAgbmV4dFRpY2sgKCkge1xuICAgIGNvbnN0IHsgX3RpY2tGdW5jIH0gPSB0aGlzO1xuICAgIHRoaXMudGltZXJJZCA9IF90aWNrRnVuYyh0aGlzLnRpY2spXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICBpZiAodGhpcy50aW1lcklkKSB7XG4gICAgICBjb25zdCBjYW5jZWxGdW5jID0gUmFmVGlja2VyLmdldENhbmNlbEZ1bmMoKVxuXG4gICAgICBjYW5jZWxGdW5jKHRoaXMudGltZXJJZClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0VGlja0Z1bmMgKCkge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfVxuXG4gIHN0YXRpYyBnZXRDYW5jZWxGdW5jICgpIHtcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZVxuICB9XG5cbiAgc3RhdGljIGlzU3VwcG9ydGVkICgpIHtcbiAgICByZXR1cm4gUmFmVGlja2VyLmdldFRpY2tGdW5jKCkgIT09IHVuZGVmaW5lZFxuICB9XG59XG5cbi8qKlxuICogdXNlIHNldFRpbWVvdXQgZm9yIGJyb3dzZXJzIHdpdGhvdXQgcmFmIHN1cHBvcnRcbiAqL1xuY2xhc3MgVGltZW91dFRpY2tlciBleHRlbmRzIFRpY2tlciB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZylcbiAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGxcblxuICB9XG5cbiAgc3RhcnQgKC4uLmNhbGxiYWNrcykge1xuICAgIHN1cGVyLm5leHRUaWNrKC4uLmNhbGxiYWNrcylcbiAgICB0aGlzLnRpbWVvdXRJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLm9uVGljaygpO1xuICAgIH0sIHRoaXMub3B0aW9ucy5pbnRlcnZhbCB8fCAxNilcbiAgfVxuXG4gIHN0b3AgKCkge1xuICAgIGlmICh0aGlzLnRpbWVvdXRJZCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0SWQpXG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiDov5Tlm55UaWNrZXLmnoTpgKDlh73mlbBcbiAqIEByZXR1cm5zIHtUaWNrZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUaWNrZXIgPSAoKSA9PiB7XG4gIGlmIChSYWZUaWNrZXIuaXNTdXBwb3J0ZWQoKSkge1xuICAgIHJldHVybiBSYWZUaWNrZXJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gVGltZW91dFRpY2tlclxuICB9XG59XG4iLCJpbXBvcnQgV29ya2VyaWZ5IGZyb20gJ3dlYndvcmtpZnktd2VicGFjaydcbmltcG9ydCBTdHJlYW0gZnJvbSAnLi4vd3JpdGUvc3RyZWFtJztcbmltcG9ydCBOYWx1bml0IGZyb20gJy4uLy4uLy4uL3hncGxheWVyLWNvZGVjL3NyYy9oMjY0L25hbHVuaXQnO1xuaW1wb3J0IFlVVkNhbnZhcyBmcm9tICcuL3l1di1jYW52YXMnO1xuaW1wb3J0IFNvdXJjZUJ1ZmZlciBmcm9tICcuL3NvdXJjZWJ1ZmZlcic7XG5jbGFzcyBWaWRlb0NhbnZhcyB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNvbmZpZy5jYW52YXMgPyB0aGlzLmNvbmZpZy5jYW52YXMgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLnNvdXJjZSA9IG5ldyBTb3VyY2VCdWZmZXIoe3R5cGU6ICd2aWRlbyd9KTtcbiAgICB0aGlzLnByZWxvYWRUaW1lID0gdGhpcy5jb25maWcucHJlbG9hZFRpbWUgfHwgMztcbiAgICB0aGlzLm9uY2FucGxheSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9uRmlyc3RGcmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1ldGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkeVN0YXR1cyA9IDA7XG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMubGFzdFBsYXllZCA9IDA7XG5cbiAgICB0aGlzLl9kZWNvZGVySW5pdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fYXZjY3B1c2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2RlY29kZWRGcmFtZXMgPSB7fTtcbiAgICB0aGlzLl9sYXN0U2FtcGxlRHRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2Jhc2VEdHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbGFzdFJlbmRlclRpbWUgPSBudWxsXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICB9XG5cbiAgaW5pdFdhc21Xb3JrZXIgKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy53YXNtd29ya2VyID0gV29ya2VyaWZ5KHJlcXVpcmUucmVzb2x2ZSgnLi93b3JrZXIuanMnKSk7XG4gICAgdGhpcy53YXNtd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgIG1zZzogJ2luaXQnLFxuICAgICAgbWV0YTogdGhpcy5tZXRhXG4gICAgfSlcbiAgICB0aGlzLndhc213b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1zZyA9PiB7XG4gICAgICBzd2l0Y2ggKG1zZy5kYXRhLm1zZykge1xuICAgICAgICBjYXNlICdERUNPREVSX1JFQURZJzpcbiAgICAgICAgICBfdGhpcy5fZGVjb2RlckluaXRlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0RFQ09ERUQnOlxuICAgICAgICAgIHRoaXMuX29uRGVjb2RlZChtc2cuZGF0YSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRWaWRlb01ldGFEYXRhIChtZXRhKSB7XG4gICAgdGhpcy5tZXRhID0gbWV0YTtcbiAgICBpZiAoIXRoaXMuX2RlY29kZXJJbml0ZWQpIHtcbiAgICAgIHRoaXMuaW5pdFdhc21Xb3JrZXIoKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLl9hdmNjcHVzaGVkID0gdHJ1ZTtcbiAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KG1ldGEuc3BzLmJ5dGVMZW5ndGggKyA0KTtcbiAgICBkYXRhLnNldChbMCwgMCwgMCwgMV0pXG4gICAgZGF0YS5zZXQobWV0YS5zcHMsIDQpO1xuICAgIHRoaXMud2FzbXdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICBtc2c6ICdkZWNvZGUnLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pXG5cbiAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkobWV0YS5wcHMuYnl0ZUxlbmd0aCArIDQpO1xuICAgIGRhdGEuc2V0KFswLCAwLCAwLCAxXSlcbiAgICBkYXRhLnNldChtZXRhLnBwcywgNCk7XG4gICAgdGhpcy53YXNtd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgIG1zZzogJ2RlY29kZScsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcblxuICAgIGlmICghdGhpcy55dXZDYW52YXMpIHtcbiAgICAgIGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHttZXRhLCBjYW52YXM6IHRoaXMuY2FudmFzfSwgdGhpcy5jb25maWcpO1xuICAgICAgdGhpcy55dXZDYW52YXMgPSBuZXcgWVVWQ2FudmFzKGNvbmZpZyk7XG4gICAgfVxuICAgIHRoaXMucmVhZHlTdGF0dXMgPSAxO1xuICB9XG5cbiAgZGVjb2RlVmlkZW8gKHZpZGVvVHJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2RlY29kZXJJbml0ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghdGhpcy5fYXZjY3B1c2hlZCkge1xuICAgICAgdGhpcy5zZXRWaWRlb01ldGFEYXRhKHRoaXMubWV0YSk7XG4gICAgfVxuICAgIGxldCB7IHNhbXBsZXMgfSA9IHZpZGVvVHJhY2s7XG4gICAgbGV0IHNhbXBsZSA9IHNhbXBsZXMuc2hpZnQoKTtcblxuICAgIHdoaWxlIChzYW1wbGUpIHtcbiAgICAgIGlmICghdGhpcy5fYmFzZUR0cykge1xuICAgICAgICB0aGlzLl9iYXNlRHRzID0gc2FtcGxlLmR0cztcbiAgICAgIH1cbiAgICAgIHRoaXMuc291cmNlLnB1c2goc2FtcGxlKTtcbiAgICAgIHNhbXBsZSA9IHNhbXBsZXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wcmVsb2FkKCk7XG4gIH1cblxuICBfcHJlbG9hZCAoKSB7XG4gICAgaWYgKCF0aGlzLl9sYXN0U2FtcGxlRHRzIHx8IHRoaXMuX2xhc3RTYW1wbGVEdHMgLSB0aGlzLl9iYXNlRHRzIDwgdGhpcy5jdXJyZW50VGltZSArIHRoaXMucHJlbG9hZFRpbWUgKiAxMDAwKSB7XG4gICAgICBsZXQgc2FtcGxlID0gdGhpcy5zb3VyY2UuZ2V0KCk7XG4gICAgICBpZiAoc2FtcGxlKSB7XG4gICAgICAgIHRoaXMuX2xhc3RTYW1wbGVEdHMgPSBzYW1wbGUuZHRzO1xuICAgICAgICB0aGlzLl9hbmFseXNlTmFsKHNhbXBsZSk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChzYW1wbGUgJiYgdGhpcy5fbGFzdFNhbXBsZUR0cyAtIHRoaXMuX2Jhc2VEdHMgPCB0aGlzLmN1cnJlbnRUaW1lICsgdGhpcy5wcmVsb2FkVGltZSAqIDEwMDApIHtcbiAgICAgICAgc2FtcGxlID0gdGhpcy5zb3VyY2UuZ2V0KCk7XG4gICAgICAgIGlmIChzYW1wbGUpIHtcbiAgICAgICAgICB0aGlzLl9hbmFseXNlTmFsKHNhbXBsZSk7XG4gICAgICAgICAgdGhpcy5fbGFzdFNhbXBsZUR0cyA9IHNhbXBsZS5kdHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYW5hbHlzZU5hbCAoc2FtcGxlKSB7XG4gICAgbGV0IG5hbHMgPSBOYWx1bml0LmdldEF2Y2NOYWxzKG5ldyBTdHJlYW0oc2FtcGxlLmRhdGEuYnVmZmVyKSk7XG5cbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBuYWwgPSBuYWxzW2ldO1xuICAgICAgbGVuZ3RoICs9IG5hbC5ib2R5LmJ5dGVMZW5ndGggKyA0O1xuICAgIH1cbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbmFsID0gbmFsc1tpXTtcbiAgICAgIGRhdGEuc2V0KFswLCAwLCAwLCAxXSwgb2Zmc2V0KTtcbiAgICAgIG9mZnNldCArPSA0O1xuICAgICAgZGF0YS5zZXQobmV3IFVpbnQ4QXJyYXkobmFsLmJvZHkpLCBvZmZzZXQpO1xuICAgICAgb2Zmc2V0ICs9IG5hbC5ib2R5LmJ5dGVMZW5ndGg7XG4gICAgfVxuICAgIHRoaXMud2FzbXdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICBtc2c6ICdkZWNvZGUnLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGluZm86IHtcbiAgICAgICAgZHRzOiBzYW1wbGUuZHRzLFxuICAgICAgICBwdHM6IHNhbXBsZS5wdHMgPyBzYW1wbGUucHRzIDogc2FtcGxlLmR0cyArIHNhbXBsZS5jdHMsXG4gICAgICAgIGtleTogc2FtcGxlLmlzS2V5ZnJhbWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX29uRGVjb2RlZCAoZGF0YSkge1xuICAgIGxldCB7ZHRzfSA9IGRhdGEuaW5mb1xuICAgIHRoaXMuX2RlY29kZWRGcmFtZXNbZHRzXSA9IGRhdGE7XG4gIH1cblxuICBwbGF5ICgpIHtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX29uVGltZXIoKTtcbiAgfVxuXG4gIF9vblRpbWVyIChjdXJyZW50VGltZSkge1xuICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5tZXRhKSB7XG4gICAgICBpZiAodGhpcy5tZXRhLmZyYW1lUmF0ZSAmJiB0aGlzLm1ldGEuZnJhbWVSYXRlLmZpeGVkICYmIHRoaXMubWV0YS5mcmFtZVJhdGUuZnBzKSB7XG4gICAgICB9XG4gICAgICBsZXQgZnJhbWVUaW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuX2RlY29kZWRGcmFtZXMpO1xuICAgICAgaWYgKGZyYW1lVGltZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgIGxldCBmcmFtZVRpbWUgPSAtMTtcbiAgICAgICAgbGV0IGN1cnJlbnRJZHggPSAwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWVUaW1lcy5sZW5ndGggJiYgTnVtYmVyLnBhcnNlSW50KGZyYW1lVGltZXNbaV0pIC0gdGhpcy5fYmFzZUR0cyA8PSB0aGlzLmN1cnJlbnRUaW1lOyBpKyspIHtcbiAgICAgICAgICBmcmFtZVRpbWUgPSBOdW1iZXIucGFyc2VJbnQoZnJhbWVUaW1lc1tpIC0gMV0pO1xuICAgICAgICAgIGN1cnJlbnRJZHggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZyYW1lID0gdGhpcy5fZGVjb2RlZEZyYW1lc1tmcmFtZVRpbWVdO1xuICAgICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5vbmNhbnBsYXkgJiYgdGhpcy5yZWFkeVN0YXR1cyA8IDQpIHtcbiAgICAgICAgICAgIHRoaXMub25jYW5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLnJlYWR5U3RhdHVzID0gNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy55dXZDYW52YXMucmVuZGVyKGZyYW1lLmJ1ZmZlciwgZnJhbWUud2lkdGgsIGZyYW1lLmhlaWdodCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SWR4OyBpKyspIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9kZWNvZGVkRnJhbWVzW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9sYXN0UmVuZGVyVGltZSA9IERhdGUubm93KClcbiAgfVxuXG4gIGNsZWFuQnVmZmVyICgpIHtcbiAgICB0aGlzLnNvdXJjZS5yZW1vdmUoMCwgdGhpcy5jdXJyZW50VGltZSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFZpZGVvQ2FudmFzO1xuIiwiY29uc3QgTUFYX1NUUkVBTV9CVUZGRVJfTEVOR1RIID0gMTAyNCAqIDEwMjQ7XG52YXIgRGVjb2RlciA9IGZ1bmN0aW9uIChzZWxmKSB7XG4gIHRoaXMuaW5pdGVkID0gZmFsc2U7XG4gIHRoaXMuc2VsZiA9IHNlbGY7XG4gIHRoaXMubWV0YSA9IHRoaXMuc2VsZi5tZXRhO1xuICB0aGlzLmluZm9saXN0ID0ge307XG4gIHNlbGYucGFyX2Jyb2Fkd2F5T25Ccm9hZHdheUluaXRlZCA9IHRoaXMuYnJvYWR3YXlPbkJyb2Fkd2F5SW5pdGVkLmJpbmQodGhpcyk7XG4gIHNlbGYucGFyX2Jyb2Fkd2F5T25QaWN0dXJlRGVjb2RlZCA9IHRoaXMuYnJvYWR3YXlPblBpY3R1cmVEZWNvZGVkLmJpbmQodGhpcyk7XG59XG5cbkRlY29kZXIucHJvdG90eXBlLnRvVThBcnJheSA9IGZ1bmN0aW9uIChwdHIsIGxlbmd0aCkge1xuICByZXR1cm4gdGhpcy5zZWxmLkhFQVBVOC5zdWJhcnJheShwdHIsIHB0ciArIGxlbmd0aCk7XG59XG5cbkRlY29kZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIE1vZHVsZS5fYnJvYWR3YXlJbml0KCk7XG4gIHRoaXMuc3RyZWFtQnVmZmVyID0gdGhpcy50b1U4QXJyYXkoTW9kdWxlLl9icm9hZHdheUNyZWF0ZVN0cmVhbShNQVhfU1RSRUFNX0JVRkZFUl9MRU5HVEgpLCBNQVhfU1RSRUFNX0JVRkZFUl9MRU5HVEgpO1xufVxuXG5EZWNvZGVyLnByb3RvdHlwZS5icm9hZHdheU9uUGljdHVyZURlY29kZWQgPSBmdW5jdGlvbiAob2Zmc2V0LCB3aWR0aCwgaGVpZ2h0LCBpbmZvaWQpIHtcbiAgbGV0IGluZm8gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluZm9saXN0W2luZm9pZF0pO1xuICBsZXQgcmVmID0gMztcbiAgaWYgKHRoaXMubWV0YS5jaHJvbWFGb3JtYXQgPT09IDQyMCkge1xuICAgIHJlZiA9IDEuNTtcbiAgfSBlbHNlIGlmICh0aGlzLm1ldGEuY2hyb21hRm9ybWF0ID09PSA0MjIpIHtcbiAgICByZWYgPSAyO1xuICB9XG4gIGxldCBkYXRhID0gdGhpcy50b1U4QXJyYXkob2Zmc2V0LCB3aWR0aCAqIGhlaWdodCAqIHJlZik7XG4gIHRoaXMuaW5mb2xpc3RbaW5mb2lkXSA9IG51bGw7XG4gIGxldCBkYXRldGVtcCA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgZGF0ZXRlbXAuc2V0KGRhdGEpO1xuICBsZXQgYnVmZmVyID0gZGF0ZXRlbXAuYnVmZmVyO1xuICB0aGlzLnNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgIG1zZzogJ0RFQ09ERUQnLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBpbmZvLFxuICAgIGJ1ZmZlclxuICB9LCBbYnVmZmVyXSk7XG59XG5cbkRlY29kZXIucHJvdG90eXBlLmJyb2Fkd2F5T25Ccm9hZHdheUluaXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB0aGlzLnNlbGYucG9zdE1lc3NhZ2Uoe21zZzogJ0RFQ09ERVJfUkVBRFknfSk7XG59XG5cbkRlY29kZXIucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChkYXRhLCBpbmZvKSB7XG4gIGxldCB0aW1lID0gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICBsZXQgaW5mb2lkID0gdGltZSAtIChNYXRoLmZsb29yKHRpbWUgLyAxMGU4KSAqIDEwZTgpO1xuICB0aGlzLmluZm9saXN0W2luZm9pZF0gPSBpbmZvO1xuICB0aGlzLnN0cmVhbUJ1ZmZlci5zZXQoZGF0YSk7XG4gIE1vZHVsZS5fYnJvYWR3YXlQbGF5U3RyZWFtKGRhdGEubGVuZ3RoLCBpbmZvaWQpO1xufVxuXG52YXIgZGVjb2RlcjtcblxuZnVuY3Rpb24gb25Qb3N0UnVuICgpIHtcbiAgZGVjb2RlciA9IG5ldyBEZWNvZGVyKHRoaXMpO1xuICBkZWNvZGVyLmluaXQoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCAobWV0YSkge1xuICBzZWxmLmltcG9ydFNjcmlwdHMoJ2h0dHBzOi8vc2Y2LXZjbG91ZGNkbi5wc3RhdHAuY29tL29iai90dGZlL21lZGlhL2RlY29kZXIvaDI2NC9kZWNvZGVyLmpzJyk7XG4gIGFkZE9uUG9zdFJ1bihvblBvc3RSdW4uYmluZChzZWxmKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlbGYpIHtcbiAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZGF0YSA9IGUuZGF0YTtcbiAgICBpZiAoIWRhdGEubXNnKSB7XG4gICAgICBzZWxmLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgbXNnOiAnRVJST1I6aW52YWxpZCBtZXNzYWdlJ1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChkYXRhLm1zZykge1xuICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBzZWxmLm1ldGEgPSBkYXRhLm1ldGE7XG4gICAgICAgICAgaW5pdCgpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RlY29kZSc6XG4gICAgICAgICAgZGVjb2Rlci5kZWNvZGUoZGF0YS5kYXRhLCBkYXRhLmluZm8pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSwgZmFsc2UpO1xufVxuIiwiY2xhc3MgWVVWQ2FudmFzIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZ3MpIHtcbiAgICB0aGlzLmNvbmZpZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWdzKTtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY29uZmlncy5jYW52YXM7XG4gICAgdGhpcy5tZXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25maWdzLm1ldGEpO1xuICAgIHRoaXMuY2hyb21hID0gdGhpcy5tZXRhLmNocm9tYUZvcm1hdDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMubWV0YS5wcmVzZW50SGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB0aGlzLm1ldGEucHJlc2VudFdpZHRoO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTI4MDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA3MjA7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHRoaXMuX2luaXRDb250ZXh0R0woKTtcbiAgICBpZiAodGhpcy5jb250ZXh0R0wpIHtcbiAgICAgIHRoaXMuX2luaXRQcm9ncmFtKCk7XG4gICAgICB0aGlzLl9pbml0QnVmZmVycygpO1xuICAgICAgdGhpcy5faW5pdFRleHR1cmVzKCk7XG4gICAgfTtcbiAgfVxuXG4gIF9pbml0Q29udGV4dEdMICgpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgdmFyIGdsID0gbnVsbDtcblxuICAgIHZhciB2YWxpZENvbnRleHROYW1lcyA9IFsnd2ViZ2wnLCAnZXhwZXJpbWVudGFsLXdlYmdsJywgJ21vei13ZWJnbCcsICd3ZWJraXQtM2QnXTtcbiAgICB2YXIgbmFtZUluZGV4ID0gMDtcblxuICAgIHdoaWxlICghZ2wgJiYgbmFtZUluZGV4IDwgdmFsaWRDb250ZXh0TmFtZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgY29udGV4dE5hbWUgPSB2YWxpZENvbnRleHROYW1lc1tuYW1lSW5kZXhdO1xuXG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0T3B0aW9ucykge1xuICAgICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoY29udGV4dE5hbWUsIHRoaXMuY29udGV4dE9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoY29udGV4dE5hbWUpO1xuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBnbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICghZ2wgfHwgdHlwZW9mIGdsLmdldFBhcmFtZXRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBnbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgICsrbmFtZUluZGV4O1xuICAgIH07XG5cbiAgICB0aGlzLmNvbnRleHRHTCA9IGdsO1xuICB9O1xuXG4gIF9pbml0UHJvZ3JhbSAoKSB7XG4gICAgdmFyIGdsID0gdGhpcy5jb250ZXh0R0w7XG5cbiAgICAvLyB2ZXJ0ZXggc2hhZGVyIGlzIHRoZSBzYW1lIGZvciBhbGwgdHlwZXNcbiAgICB2YXIgdmVydGV4U2hhZGVyU2NyaXB0O1xuICAgIHZhciBmcmFnbWVudFNoYWRlclNjcmlwdDtcbiAgICB2ZXJ0ZXhTaGFkZXJTY3JpcHQgPSBbXG4gICAgICAnYXR0cmlidXRlIHZlYzQgdmVydGV4UG9zOycsXG4gICAgICAnYXR0cmlidXRlIHZlYzQgdGV4dHVyZVBvczsnLFxuICAgICAgJ2F0dHJpYnV0ZSB2ZWM0IHVUZXh0dXJlUG9zOycsXG4gICAgICAnYXR0cmlidXRlIHZlYzQgdlRleHR1cmVQb3M7JyxcbiAgICAgICd2YXJ5aW5nIHZlYzIgdGV4dHVyZUNvb3JkOycsXG4gICAgICAndmFyeWluZyB2ZWMyIHVUZXh0dXJlQ29vcmQ7JyxcbiAgICAgICd2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDsnLFxuXG4gICAgICAndm9pZCBtYWluKCknLFxuICAgICAgJ3snLFxuICAgICAgJyAgZ2xfUG9zaXRpb24gPSB2ZXJ0ZXhQb3M7JyxcbiAgICAgICcgIHRleHR1cmVDb29yZCA9IHRleHR1cmVQb3MueHk7JyxcbiAgICAgICcgIHVUZXh0dXJlQ29vcmQgPSB1VGV4dHVyZVBvcy54eTsnLFxuICAgICAgJyAgdlRleHR1cmVDb29yZCA9IHZUZXh0dXJlUG9zLnh5OycsXG4gICAgICAnfSdcbiAgICBdLmpvaW4oJ1xcbicpO1xuXG4gICAgZnJhZ21lbnRTaGFkZXJTY3JpcHQgPSBbXG4gICAgICAncHJlY2lzaW9uIGhpZ2hwIGZsb2F0OycsXG4gICAgICAndmFyeWluZyBoaWdocCB2ZWMyIHRleHR1cmVDb29yZDsnLFxuICAgICAgJ3ZhcnlpbmcgaGlnaHAgdmVjMiB1VGV4dHVyZUNvb3JkOycsXG4gICAgICAndmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmQ7JyxcbiAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB5U2FtcGxlcjsnLFxuICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyOycsXG4gICAgICAndW5pZm9ybSBzYW1wbGVyMkQgdlNhbXBsZXI7JyxcbiAgICAgICd1bmlmb3JtIG1hdDQgWVVWMlJHQjsnLFxuXG4gICAgICAndm9pZCBtYWluKHZvaWQpIHsnLFxuICAgICAgJyAgaGlnaHAgZmxvYXQgeSA9IHRleHR1cmUyRCh5U2FtcGxlciwgIHRleHR1cmVDb29yZCkucjsnLFxuICAgICAgJyAgaGlnaHAgZmxvYXQgdSA9IHRleHR1cmUyRCh1U2FtcGxlciwgIHVUZXh0dXJlQ29vcmQpLnI7JyxcbiAgICAgICcgIGhpZ2hwIGZsb2F0IHYgPSB0ZXh0dXJlMkQodlNhbXBsZXIsICB2VGV4dHVyZUNvb3JkKS5yOycsXG4gICAgICAnICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHksIHUsIHYsIDEpICogWVVWMlJHQjsnLFxuICAgICAgJ30nXG4gICAgXS5qb2luKCdcXG4nKTtcblxuICAgIHZhciBZVVYyUkdCID0gW1xuICAgICAgMS4xNjQzOCwgMC4wMDAwMCwgMS41OTYwMywgLTAuODcwNzksXG4gICAgICAxLjE2NDM4LCAtMC4zOTE3NiwgLTAuODEyOTcsIDAuNTI5NTksXG4gICAgICAxLjE2NDM4LCAyLjAxNzIzLCAwLjAwMDAwLCAtMS4wODEzOSxcbiAgICAgIDAsIDAsIDAsIDFcbiAgICBdO1xuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgZ2wuc2hhZGVyU291cmNlKHZlcnRleFNoYWRlciwgdmVydGV4U2hhZGVyU2NyaXB0KTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHZlcnRleFNoYWRlcik7XG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodmVydGV4U2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdWZXJ0ZXggc2hhZGVyIGZhaWxlZCB0byBjb21waWxlOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyh2ZXJ0ZXhTaGFkZXIpKTtcbiAgICB9XG5cbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgICBnbC5zaGFkZXJTb3VyY2UoZnJhZ21lbnRTaGFkZXIsIGZyYWdtZW50U2hhZGVyU2NyaXB0KTtcbiAgICBnbC5jb21waWxlU2hhZGVyKGZyYWdtZW50U2hhZGVyKTtcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihmcmFnbWVudFNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICBjb25zb2xlLmxvZygnRnJhZ21lbnQgc2hhZGVyIGZhaWxlZCB0byBjb21waWxlOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhmcmFnbWVudFNoYWRlcikpO1xuICAgIH1cblxuICAgIHZhciBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgICAgY29uc29sZS5sb2coJ1Byb2dyYW0gZmFpbGVkIHRvIGNvbXBpbGU6ICcgKyBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKSk7XG4gICAgfVxuXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHZhciBZVVYyUkdCUmVmID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdZVVYyUkdCJyk7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihZVVYyUkdCUmVmLCBmYWxzZSwgWVVWMlJHQik7XG5cbiAgICB0aGlzLnNoYWRlclByb2dyYW0gPSBwcm9ncmFtO1xuICB9XG5cbiAgX2luaXRCdWZmZXJzICgpIHtcbiAgICB2YXIgZ2wgPSB0aGlzLmNvbnRleHRHTDtcbiAgICB2YXIgcHJvZ3JhbSA9IHRoaXMuc2hhZGVyUHJvZ3JhbTtcblxuICAgIHZhciB2ZXJ0ZXhQb3NCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmVydGV4UG9zQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbMSwgMSwgLTEsIDEsIDEsIC0xLCAtMSwgLTFdKSwgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgdmFyIHZlcnRleFBvc1JlZiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICd2ZXJ0ZXhQb3MnKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh2ZXJ0ZXhQb3NSZWYpO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodmVydGV4UG9zUmVmLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgdmFyIHRleHR1cmVQb3NCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGV4dHVyZVBvc0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdKSwgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgdmFyIHRleHR1cmVQb3NSZWYgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAndGV4dHVyZVBvcycpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRleHR1cmVQb3NSZWYpO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGV4dHVyZVBvc1JlZiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgIHRoaXMudGV4dHVyZVBvc0J1ZmZlciA9IHRleHR1cmVQb3NCdWZmZXI7XG5cbiAgICB2YXIgdVRleHR1cmVQb3NCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdVRleHR1cmVQb3NCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSksIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIHZhciB1VGV4dHVyZVBvc1JlZiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICd1VGV4dHVyZVBvcycpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHVUZXh0dXJlUG9zUmVmKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHVUZXh0dXJlUG9zUmVmLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgdGhpcy51VGV4dHVyZVBvc0J1ZmZlciA9IHVUZXh0dXJlUG9zQnVmZmVyO1xuXG4gICAgdmFyIHZUZXh0dXJlUG9zQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZUZXh0dXJlUG9zQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0pLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICB2YXIgdlRleHR1cmVQb3NSZWYgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAndlRleHR1cmVQb3MnKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh2VGV4dHVyZVBvc1JlZik7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih2VGV4dHVyZVBvc1JlZiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgIHRoaXMudlRleHR1cmVQb3NCdWZmZXIgPSB2VGV4dHVyZVBvc0J1ZmZlcjtcbiAgfTtcblxuICBfaW5pdFRleHR1cmVzICgpIHtcbiAgICB2YXIgZ2wgPSB0aGlzLmNvbnRleHRHTDtcbiAgICB2YXIgcHJvZ3JhbSA9IHRoaXMuc2hhZGVyUHJvZ3JhbTtcbiAgICB2YXIgeVRleHR1cmVSZWYgPSB0aGlzLl9pbml0VGV4dHVyZSgpO1xuICAgIHZhciB5U2FtcGxlclJlZiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAneVNhbXBsZXInKTtcbiAgICBnbC51bmlmb3JtMWkoeVNhbXBsZXJSZWYsIDApO1xuICAgIHRoaXMueVRleHR1cmVSZWYgPSB5VGV4dHVyZVJlZjtcblxuICAgIHZhciB1VGV4dHVyZVJlZiA9IHRoaXMuX2luaXRUZXh0dXJlKCk7XG4gICAgdmFyIHVTYW1wbGVyUmVmID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1U2FtcGxlcicpO1xuICAgIGdsLnVuaWZvcm0xaSh1U2FtcGxlclJlZiwgMSk7XG4gICAgdGhpcy51VGV4dHVyZVJlZiA9IHVUZXh0dXJlUmVmO1xuXG4gICAgdmFyIHZUZXh0dXJlUmVmID0gdGhpcy5faW5pdFRleHR1cmUoKTtcbiAgICB2YXIgdlNhbXBsZXJSZWYgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3ZTYW1wbGVyJyk7XG4gICAgZ2wudW5pZm9ybTFpKHZTYW1wbGVyUmVmLCAyKTtcbiAgICB0aGlzLnZUZXh0dXJlUmVmID0gdlRleHR1cmVSZWY7XG4gIH1cblxuICBfaW5pdFRleHR1cmUgKCkge1xuICAgIHZhciBnbCA9IHRoaXMuY29udGV4dEdMO1xuXG4gICAgdmFyIHRleHR1cmVSZWYgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZVJlZik7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcblxuICAgIHJldHVybiB0ZXh0dXJlUmVmO1xuICB9XG5cbiAgX2RyYXdQaWN0dXJlR0wgKGRhdGEsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBsZXQgbldpZHRoID0gd2lkdGg7XG4gICAgdmFyIHlsZW4gPSB3aWR0aCAqIGhlaWdodDtcbiAgICB2YXIgdXZsZW4gPSB5bGVuIC8gNDtcbiAgICBpZiAodGhpcy5jaHJvbWEgPT09IDQyMikge1xuICAgICAgdXZsZW4gPSB5bGVuIC8gMlxuICAgIH0gZWxzZSBpZiAodGhpcy5jaHJvbWEgPT09IDQ0NCkge1xuICAgICAgdXZsZW4gPSB5bGVuO1xuICAgIH1cbiAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgbGV0IHJlbmRlckRhdGEgPSB7XG4gICAgICB5RGF0YTogZGF0YS5zdWJhcnJheSgwLCB5bGVuKSxcbiAgICAgIHVEYXRhOiBkYXRhLnN1YmFycmF5KHlsZW4sIHlsZW4gKyB1dmxlbiksXG4gICAgICB2RGF0YTogZGF0YS5zdWJhcnJheSh5bGVuICsgdXZsZW4sIHlsZW4gKyB1dmxlbiArIHV2bGVuKVxuICAgIH1cbiAgICBpZiAod2lkdGggJSA0ID4gMCkge1xuICAgICAgbldpZHRoID0gd2lkdGggKyA0IC0gKHdpZHRoICUgNCk7XG4gICAgICBsZXQgeUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobldpZHRoICogaGVpZ2h0KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgeUFycmF5LnNldChyZW5kZXJEYXRhLnlEYXRhLnN1YmFycmF5KGkgKiB3aWR0aCwgKGkgKyAxKSAqIHdpZHRoKSwgaSAqIG5XaWR0aCk7XG4gICAgICB9XG4gICAgICByZW5kZXJEYXRhLnlEYXRhID0geUFycmF5O1xuICAgIH1cblxuICAgIGlmICgod2lkdGggLyAyKSAlIDQgPiAwKSB7XG4gICAgICBuV2lkdGggPSAod2lkdGggLyAyKSArIDQgLSAoKHdpZHRoIC8gMikgJSA0KTtcbiAgICAgIGxldCB1QXJyYXkgPSBuZXcgVWludDhBcnJheShuV2lkdGggKiBoZWlnaHQgLyAyKTtcbiAgICAgIGxldCB2QXJyYXkgPSBuZXcgVWludDhBcnJheShuV2lkdGggKiBoZWlnaHQgLyAyKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0IC8gMjsgaSsrKSB7XG4gICAgICAgIHVBcnJheS5zZXQocmVuZGVyRGF0YS51RGF0YS5zdWJhcnJheShpICogd2lkdGggLyAyLCAoaSArIDEpICogd2lkdGggLyAyKSwgaSAqIG5XaWR0aCk7XG4gICAgICAgIHZBcnJheS5zZXQocmVuZGVyRGF0YS52RGF0YS5zdWJhcnJheShpICogd2lkdGggLyAyLCAoaSArIDEpICogd2lkdGggLyAyKSwgaSAqIG5XaWR0aCk7XG4gICAgICB9XG4gICAgICByZW5kZXJEYXRhLnVEYXRhID0gdUFycmF5O1xuICAgICAgcmVuZGVyRGF0YS52RGF0YSA9IHZBcnJheTtcbiAgICB9XG4gICAgdGhpcy5fZHJhd1BpY3R1cmVHTDQyMChyZW5kZXJEYXRhLCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIF9kcmF3UGljdHVyZUdMNDIwIChkYXRhLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdmFyIGdsID0gdGhpcy5jb250ZXh0R0w7XG4gICAgdmFyIHRleHR1cmVQb3NCdWZmZXIgPSB0aGlzLnRleHR1cmVQb3NCdWZmZXI7XG4gICAgdmFyIHVUZXh0dXJlUG9zQnVmZmVyID0gdGhpcy51VGV4dHVyZVBvc0J1ZmZlcjtcbiAgICB2YXIgdlRleHR1cmVQb3NCdWZmZXIgPSB0aGlzLnZUZXh0dXJlUG9zQnVmZmVyO1xuXG4gICAgdmFyIHlUZXh0dXJlUmVmID0gdGhpcy55VGV4dHVyZVJlZjtcbiAgICB2YXIgdVRleHR1cmVSZWYgPSB0aGlzLnVUZXh0dXJlUmVmO1xuICAgIHZhciB2VGV4dHVyZVJlZiA9IHRoaXMudlRleHR1cmVSZWY7XG5cbiAgICB2YXIgeURhdGEgPSBkYXRhLnlEYXRhO1xuICAgIHZhciB1RGF0YSA9IGRhdGEudURhdGE7XG4gICAgdmFyIHZEYXRhID0gZGF0YS52RGF0YTtcblxuICAgIHZhciB5RGF0YVBlclJvdyA9IHdpZHRoO1xuICAgIHZhciB5Um93Q250ID0gaGVpZ2h0O1xuXG4gICAgdmFyIHVEYXRhUGVyUm93ID0gd2lkdGggLyAyO1xuICAgIHZhciB1Um93Q250ID0gaGVpZ2h0IC8gMjtcblxuICAgIGlmICh0aGlzLmNocm9tYSA9PT0gNDIyIHx8IHRoaXMuY2hyb21hID09PSA0NDQpIHtcbiAgICAgIHVSb3dDbnQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmNocm9tYSA9PT0gNDQ0KSB7XG4gICAgICB1RGF0YVBlclJvdyA9IHdpZHRoO1xuICAgIH1cbiAgICB2YXIgdkRhdGFQZXJSb3cgPSB1RGF0YVBlclJvdztcbiAgICB2YXIgdlJvd0NudCA9IHVSb3dDbnQ7XG4gICAgXG4gICAgbGV0IHJhdGlvdyA9IHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy53aWR0aDtcbiAgICBsZXQgcmF0aW9oID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gdGhpcy5oZWlnaHQ7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCB0b3AgPSAwO1xuICAgIGxldCB3ID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgbGV0IGggPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgaWYgKHJhdGlvdyA8IHJhdGlvaCkge1xuICAgICAgaCA9ICh0aGlzLmhlaWdodCAqIHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy53aWR0aCk7XG4gICAgICB0b3AgPSBwYXJzZUludCgodGhpcy5jYW52YXMuaGVpZ2h0IC0gKHRoaXMuaGVpZ2h0ICogdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLndpZHRoKSkgLyAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdyA9ICh0aGlzLndpZHRoICogdGhpcy5jYW52YXMuaGVpZ2h0IC8gdGhpcy5oZWlnaHQpO1xuICAgICAgbGVmdCA9IHBhcnNlSW50KCh0aGlzLmNhbnZhcy53aWR0aCAtICh0aGlzLndpZHRoICogdGhpcy5jYW52YXMuaGVpZ2h0IC8gdGhpcy5oZWlnaHQpKSAvIDIpO1xuICAgIH1cbiAgICBnbC52aWV3cG9ydChsZWZ0LCB0b3AsIHcsIGgpO1xuXG4gICAgdmFyIHRleHR1cmVQb3NWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleHR1cmVQb3NCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0ZXh0dXJlUG9zVmFsdWVzLCBnbC5EWU5BTUlDX0RSQVcpO1xuXG4gICAgdmFyIHVUZXh0dXJlUG9zVmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0pO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB1VGV4dHVyZVBvc0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHVUZXh0dXJlUG9zVmFsdWVzLCBnbC5EWU5BTUlDX0RSQVcpO1xuXG4gICAgdmFyIHZUZXh0dXJlUG9zVmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0pO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2VGV4dHVyZVBvc0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHZUZXh0dXJlUG9zVmFsdWVzLCBnbC5EWU5BTUlDX0RSQVcpO1xuICAgIFxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHlUZXh0dXJlUmVmKTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLkxVTUlOQU5DRSwgeURhdGFQZXJSb3csIHlSb3dDbnQsIDAsIGdsLkxVTUlOQU5DRSwgZ2wuVU5TSUdORURfQllURSwgeURhdGEpO1xuXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMSk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdVRleHR1cmVSZWYpO1xuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuTFVNSU5BTkNFLCB1RGF0YVBlclJvdywgdVJvd0NudCwgMCwgZ2wuTFVNSU5BTkNFLCBnbC5VTlNJR05FRF9CWVRFLCB1RGF0YSk7XG5cbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUyKTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB2VGV4dHVyZVJlZik7XG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5MVU1JTkFOQ0UsIHZEYXRhUGVyUm93LCB2Um93Q250LCAwLCBnbC5MVU1JTkFOQ0UsIGdsLlVOU0lHTkVEX0JZVEUsIHZEYXRhKTtcblxuICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xuICB9XG5cbiAgX2RyYXdQaWN0dXJlUkdCIChkYXRhKSB7XG5cbiAgfVxuXG4gIHJlbmRlciAoZGF0YSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHZhciBnbCA9IHRoaXMuY29udGV4dEdMO1xuICAgIGlmIChnbCkge1xuICAgICAgdGhpcy5fZHJhd1BpY3R1cmVHTChkYXRhLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZHJhd1BpY3R1cmVSR0IoZGF0YSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFlVVkNhbnZhcztcbiIsImNvbnN0IGlzT2JqZWN0RmlsbGVkID0gKG9iaikgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAob2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhSW5mbyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLm1pbWVUeXBlID0gbnVsbFxuICAgIHRoaXMuZHVyYXRpb24gPSBudWxsXG5cbiAgICB0aGlzLmhhc1ZpZGVvID0gbnVsbFxuICAgIHRoaXMudmlkZW8gPSB7XG4gICAgICBjb2RlYzogbnVsbCxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgcHJvZmlsZTogbnVsbCxcbiAgICAgIGxldmVsOiBudWxsLFxuICAgICAgZnJhbWVSYXRlOiB7XG4gICAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgICBmcHM6IDI1LFxuICAgICAgICBmcHNfbnVtOiAyNTAwMCxcbiAgICAgICAgZnBzX2RlbjogMTAwMFxuICAgICAgfSxcbiAgICAgIGNocm9tYUZvcm1hdDogbnVsbCxcbiAgICAgIHBhclJhdGlvOiB7XG4gICAgICAgIHdpZHRoOiAxLFxuICAgICAgICBoZWlnaHQ6IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhhc0F1ZGlvID0gbnVsbFxuXG4gICAgdGhpcy5hdWRpbyA9IHtcbiAgICAgIGNvZGVjOiBudWxsLFxuICAgICAgc2FtcGxlUmF0ZTogbnVsbCxcbiAgICAgIHNhbXBsZVJhdGVJbmRleDogbnVsbCxcbiAgICAgIGNoYW5uZWxDb3VudDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGlzQ29tcGxldGUgKCkge1xuICAgIHJldHVybiBNZWRpYUluZm8uaXNCYXNlSW5mb1JlYWR5KHRoaXMpICYmIE1lZGlhSW5mby5pc1ZpZGVvUmVhZHkodGhpcykgJiYgTWVkaWFJbmZvLmlzQXVkaW9SZWFkeSh0aGlzKVxuICB9XG5cbiAgc3RhdGljIGlzQmFzZUluZm9SZWFkeSAobWVkaWFJbmZvKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0RmlsbGVkKG1lZGlhSW5mbylcbiAgfVxuXG4gIHN0YXRpYyBpc1ZpZGVvUmVhZHkgKG1lZGlhSW5mbykge1xuICAgIGlmICghbWVkaWFJbmZvLmhhc1ZpZGVvKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBpc09iamVjdEZpbGxlZChtZWRpYUluZm8udmlkZW8pXG4gIH1cblxuICBzdGF0aWMgaXNBdWRpb1JlYWR5IChtZWRpYUluZm8pIHtcbiAgICBpZiAoIW1lZGlhSW5mby5oYXNBdWRpbykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gaXNPYmplY3RGaWxsZWQobWVkaWFJbmZvLnZpZGVvKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNhbXBsZSB7XG4gIGNvbnN0cnVjdG9yIChpbmZvKSB7XG4gICAgbGV0IF9kZWZhdWx0ID0gTWVkaWFTYW1wbGUuZ2V0RGVmYXVsdEluZigpXG5cbiAgICBpZiAoIWluZm8gfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGluZm8pICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgcmV0dXJuIF9kZWZhdWx0XG4gICAgfVxuICAgIGxldCBzYW1wbGUgPSBPYmplY3QuYXNzaWduKHt9LCBfZGVmYXVsdCwgaW5mbylcblxuICAgIE9iamVjdC5lbnRyaWVzKHNhbXBsZSkuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XG4gICAgICB0aGlzW2tdID0gdlxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZ2V0RGVmYXVsdEluZiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGR0czogbnVsbCxcbiAgICAgIHB0czogbnVsbCxcbiAgICAgIGR1cmF0aW9uOiBudWxsLFxuICAgICAgcG9zaXRpb246IG51bGwsXG4gICAgICBpc1JBUDogZmFsc2UsIC8vIGlzIFJhbmRvbSBhY2Nlc3MgcG9pbnRcbiAgICAgIG9yaWdpbkR0czogbnVsbFxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTZWdtZW50TGlzdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAodHlwZSkge1xuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5fbGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9sYXN0QXBwZW5kTG9jYXRpb24gPSAtMTsgLy8gY2FjaGVkIGxhc3QgaW5zZXJ0IGxvY2F0aW9uXG4gICAgfVxuXG4gICAgZ2V0IHR5cGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG5cbiAgICBnZXQgbGVuZ3RoICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3QubGVuZ3RoO1xuICAgIH1cblxuICAgIGlzRW1wdHkgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdC5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgY2xlYXIgKCkge1xuICAgICAgICB0aGlzLl9saXN0ID0gW107XG4gICAgICAgIHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbiA9IC0xO1xuICAgIH1cblxuICAgIF9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZSAoYmVnaW5EdHMpIHtcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLl9saXN0O1xuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAtMjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFzdCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IG1pZCA9IDA7XG4gICAgICAgIGxldCBsYm91bmQgPSAwO1xuICAgICAgICBsZXQgdWJvdW5kID0gbGFzdDtcblxuICAgICAgICBsZXQgaWR4ID0gMDtcblxuICAgICAgICBpZiAoYmVnaW5EdHMgPCBsaXN0WzBdLm9yaWdpbkR0cykge1xuICAgICAgICAgICAgaWR4ID0gLTE7XG4gICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGxib3VuZCA8PSB1Ym91bmQpIHtcbiAgICAgICAgICAgIG1pZCA9IGxib3VuZCArIE1hdGguZmxvb3IoKHVib3VuZCAtIGxib3VuZCkgLyAyKTtcbiAgICAgICAgICAgIGlmIChtaWQgPT09IGxhc3QgfHwgKGJlZ2luRHRzID4gbGlzdFttaWRdLmxhc3RTYW1wbGUub3JpZ2luRHRzXG4gICAgICAgICAgICAgICAgICAgICYmIChiZWdpbkR0cyA8IGxpc3RbbWlkICsgMV0ub3JpZ2luRHRzKSkpIHtcbiAgICAgICAgICAgICAgICBpZHggPSBtaWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RbbWlkXS5vcmlnaW5EdHMgPCBiZWdpbkR0cykge1xuICAgICAgICAgICAgICAgIGxib3VuZCA9IG1pZCArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVib3VuZCA9IG1pZCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkeDtcbiAgICB9XG5cbiAgICBfc2VhcmNoTmVhcmVzdFNlZ21lbnRBZnRlciAoYmVnaW5EdHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlKGJlZ2luRHRzKSArIDE7XG4gICAgfVxuXG4gICAgYXBwZW5kIChzZWdtZW50KSB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5fbGlzdDtcbiAgICAgICAgbGV0IGxhc3RBcHBlbmRJZHggPSB0aGlzLl9sYXN0QXBwZW5kTG9jYXRpb247XG4gICAgICAgIGxldCBpbnNlcnRJZHggPSAwO1xuXG4gICAgICAgIGlmIChsYXN0QXBwZW5kSWR4ICE9PSAtMSAmJiBsYXN0QXBwZW5kSWR4IDwgbGlzdC5sZW5ndGhcbiAgICAgICAgICAgICYmIHNlZ21lbnQub3JpZ2luU3RhcnREdHMgPj0gbGlzdFtsYXN0QXBwZW5kSWR4XS5sYXN0U2FtcGxlLm9yaWdpbkR0c1xuICAgICAgICAgICAgJiYgKChsYXN0QXBwZW5kSWR4ID09PSBsaXN0Lmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgfHwgKGxhc3RBcHBlbmRJZHggPCBsaXN0Lmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgJiYgc2VnbWVudC5vcmlnaW5TdGFydER0cyA8IGxpc3RbbGFzdEFwcGVuZElkeCArIDFdLm9yaWdpblN0YXJ0RHRzKSkpIHtcbiAgICAgICAgICAgIGluc2VydElkeCA9IGxhc3RBcHBlbmRJZHggKyAxOyAvLyB1c2UgY2FjaGVkIGxvY2F0aW9uIGlkeFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGluc2VydElkeCA9IHRoaXMuX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlKHNlZ21lbnQub3JpZ2luU3RhcnREdHMpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbiA9IGluc2VydElkeDtcbiAgICAgICAgdGhpcy5fbGlzdC5zcGxpY2UoaW5zZXJ0SWR4LCAwLCBzZWdtZW50KTtcbiAgICB9XG5cbiAgICBnZXRMYXN0U2VnbWVudEJlZm9yZSAoYmVnaW5EdHMpIHtcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlKGJlZ2luRHRzKTtcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGlzdFtpZHhdO1xuICAgICAgICB9IGVsc2UgeyAvLyAtMVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMYXN0U2FtcGxlQmVmb3JlIChiZWdpbkR0cykge1xuICAgICAgICBsZXQgc2VnbWVudCA9IHRoaXMuZ2V0TGFzdFNlZ21lbnRCZWZvcmUoYmVnaW5EdHMpO1xuICAgICAgICBpZiAoc2VnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlZ21lbnQubGFzdFNhbXBsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGFzdFJBUEJlZm9yZSAoYmVnaW5EdHMpIHtcbiAgICAgICAgbGV0IHNlZ21lbnRJZHggPSB0aGlzLl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZShiZWdpbkR0cyk7XG4gICAgICAgIGxldCByYW5kb21BY2Nlc3NQb2ludHMgPSB0aGlzLl9saXN0W3NlZ21lbnRJZHhdLnJhbmRvbUFjY2Vzc1BvaW50cztcbiAgICAgICAgd2hpbGUgKHJhbmRvbUFjY2Vzc1BvaW50cy5sZW5ndGggPT09IDAgJiYgc2VnbWVudElkeCA+IDApIHtcbiAgICAgICAgICAgIHNlZ21lbnRJZHgtLTtcbiAgICAgICAgICAgIHJhbmRvbUFjY2Vzc1BvaW50cyA9IHRoaXMuX2xpc3Rbc2VnbWVudElkeF0ucmFuZG9tQWNjZXNzUG9pbnRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYW5kb21BY2Nlc3NQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbUFjY2Vzc1BvaW50c1tyYW5kb21BY2Nlc3NQb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2VnbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnN0YXJ0RHRzID0gLTE7XG4gICAgICAgIHRoaXMuZW5kRHRzID0gLTE7XG4gICAgICAgIHRoaXMuc3RhcnRQdHMgPSAtMTtcbiAgICAgICAgdGhpcy5lbmRQdHMgPSAtMTtcbiAgICAgICAgdGhpcy5vcmlnaW5TdGFydER0cyA9IC0xO1xuICAgICAgICB0aGlzLm9yaWdpbkVuZER0cyA9IC0xO1xuICAgICAgICB0aGlzLnJhbmRvbUFjY2Vzc1BvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLmZpcnN0U2FtcGxlID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0U2FtcGxlID0gbnVsbDtcbiAgICB9XG5cbiAgICBhZGRSQVAgKHNhbXBsZSkge1xuICAgICAgICBzYW1wbGUuaXNSQVAgPSB0cnVlO1xuICAgICAgICB0aGlzLnJhbmRvbUFjY2Vzc1BvaW50cy5wdXNoKHNhbXBsZSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBBdWRpb1RyYWNrTWV0YSB7XG4gIGNvbnN0cnVjdG9yIChtZXRhKSB7XG4gICAgY29uc3QgX2RlZmF1bHQgPSB7XG4gICAgICBzYW1wbGVSYXRlOiA0ODAwMCxcbiAgICAgIGNoYW5uZWxDb3VudDogMixcbiAgICAgIGNvZGVjOiAnbXA0YS40MC4yJyxcbiAgICAgIGNvbmZpZzogWzQxLCA0MDEsIDEzNiwgMF0sXG4gICAgICBkdXJhdGlvbjogMCxcbiAgICAgIGlkOiAyLFxuICAgICAgcmVmU2FtcGxlRHVyYXRpb246IDIxLFxuICAgICAgc2FtcGxlUmF0ZUluZGV4OiAzLFxuICAgICAgdGltZXNjYWxlOiAxMDAwLFxuICAgICAgdHlwZTogJ2F1ZGlvJ1xuICAgIH1cbiAgICBpZiAobWV0YSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIF9kZWZhdWx0LCBtZXRhKVxuICAgIH1cbiAgICByZXR1cm4gX2RlZmF1bHRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5pdCA9IG51bGxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9UcmFja01ldGEge1xuICBjb25zdHJ1Y3RvciAobWV0YSkge1xuICAgIGNvbnN0IF9kZWZhdWx0ID0ge1xuICAgICAgYXZjYzogbnVsbCxcbiAgICAgIHNwczogbmV3IFVpbnQ4QXJyYXkoMCksXG4gICAgICBwcHM6IG5ldyBVaW50OEFycmF5KDApLFxuICAgICAgY2hyb21hRm9ybWF0OiA0MjAsXG4gICAgICBjb2RlYzogJ2F2YzEuNjQwMDIwJyxcbiAgICAgIGNvZGVjSGVpZ2h0OiA3MjAsXG4gICAgICBjb2RlY1dpZHRoOiAxMjgwLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICBmcmFtZVJhdGU6IHtcbiAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgIGZwczogMjUsXG4gICAgICAgIGZwc19udW06IDI1MDAwLFxuICAgICAgICBmcHNfZGVuOiAxMDAwXG4gICAgICB9LFxuICAgICAgaWQ6IDEsXG4gICAgICBsZXZlbDogJzMuMicsXG4gICAgICBwcmVzZW50SGVpZ2h0OiA3MjAsXG4gICAgICBwcmVzZW50V2lkdGg6IDEyODAsXG4gICAgICBwcm9maWxlOiAnSGlnaCcsXG4gICAgICByZWZTYW1wbGVEdXJhdGlvbjogNDAsXG4gICAgICBwYXJSYXRpbzoge1xuICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgIHdpZHRoOiAxXG4gICAgICB9LFxuICAgICAgdGltZXNjYWxlOiAxMDAwLFxuICAgICAgdHlwZTogJ3ZpZGVvJ1xuICAgIH1cblxuICAgIGlmIChtZXRhKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX2RlZmF1bHQsIG1ldGEpXG4gICAgfVxuICAgIHJldHVybiBfZGVmYXVsdFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbml0ID0gbnVsbFxuICAgIHRoaXMuc3BzID0gbnVsbFxuICAgIHRoaXMucHBzID0gbnVsbFxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQXVkaW9UcmFja1NhbXBsZSB7XG4gIGNvbnN0cnVjdG9yIChpbmZvKSB7XG4gICAgbGV0IF9kZWZhdWx0ID0gQXVkaW9UcmFja1NhbXBsZS5nZXREZWZhdWx0KClcbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHJldHVybiBfZGVmYXVsdFxuICAgIH1cbiAgICBsZXQgc2FtcGxlID0gT2JqZWN0LmFzc2lnbih7fSwgX2RlZmF1bHQsIGluZm8pXG5cbiAgICByZXR1cm4gc2FtcGxlXG4gIH1cblxuICBzdGF0aWMgZ2V0RGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGR0czogbnVsbCxcbiAgICAgIHB0czogbnVsbCxcbiAgICAgIGRhdGE6IG5ldyBVaW50OEFycmF5KClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvVHJhY2tTYW1wbGUge1xuICBjb25zdHJ1Y3RvciAoaW5mbykge1xuICAgIGxldCBfZGVmYXVsdCA9IFZpZGVvVHJhY2tTYW1wbGUuZ2V0RGVmYXVsdCgpXG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHJldHVybiBfZGVmYXVsdFxuICAgIH1cbiAgICBsZXQgc2FtcGxlID0gT2JqZWN0LmFzc2lnbih7fSwgX2RlZmF1bHQsIGluZm8pXG5cbiAgICByZXR1cm4gc2FtcGxlXG4gIH1cblxuICBzdGF0aWMgZ2V0RGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGR0czogbnVsbCxcbiAgICAgIHB0czogbnVsbCxcbiAgICAgIGlzS2V5ZnJhbWU6IGZhbHNlLCAvLyBpcyBSYW5kb20gYWNjZXNzIHBvaW50XG4gICAgICBvcmlnaW5EdHM6IG51bGwsXG4gICAgICBkYXRhOiBuZXcgVWludDhBcnJheSgpXG4gICAgfVxuICB9XG59XG4iLCJjbGFzcyBNU0Uge1xuICBjb25zdHJ1Y3RvciAoY29uZmlncykge1xuICAgIHRoaXMuY29uZmlncyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ3MpO1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jb25maWdzLmNvbnRhaW5lcjtcbiAgICB0aGlzLm1lZGlhU291cmNlID0gbnVsbDtcbiAgICB0aGlzLnNvdXJjZUJ1ZmZlcnMgPSB7fTtcbiAgICB0aGlzLnByZWxvYWRUaW1lID0gdGhpcy5jb25maWdzLnByZWxvYWRUaW1lIHx8IDE7XG4gICAgdGhpcy5vblNvdXJjZU9wZW4gPSB0aGlzLm9uU291cmNlT3Blbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblRpbWVVcGRhdGUgPSB0aGlzLm9uVGltZVVwZGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblVwZGF0ZUVuZCA9IHRoaXMub25VcGRhdGVFbmQuYmluZCh0aGlzKVxuICAgIHRoaXMub25XYWl0aW5nID0gdGhpcy5vbldhaXRpbmcuYmluZCh0aGlzKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdGhpcy5tZWRpYVNvdXJjZSA9IG5ldyBzZWxmLk1lZGlhU291cmNlKCk7XG4gICAgdGhpcy5tZWRpYVNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdzb3VyY2VvcGVuJywgdGhpcy5vblNvdXJjZU9wZW4pO1xuICAgIHRoaXMuY29udGFpbmVyLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5tZWRpYVNvdXJjZSk7XG4gICAgdGhpcy51cmwgPSB0aGlzLmNvbnRhaW5lci5zcmM7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd3YWl0aW5nJywgdGhpcy5vbldhaXRpbmcpO1xuICB9XG5cbiAgb25UaW1lVXBkYXRlICgpIHtcbiAgICB0aGlzLmVtaXQoJ1RJTUVfVVBEQVRFJywgdGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgb25XYWl0aW5nICgpIHtcbiAgICB0aGlzLmVtaXQoJ1dBSVRJTkcnLCB0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICBvblNvdXJjZU9wZW4gKCkge1xuICAgIHRoaXMuYWRkU291cmNlQnVmZmVycygpO1xuICB9XG5cbiAgb25VcGRhdGVFbmQgKCkge1xuICAgIHRoaXMuZW1pdCgnU09VUkNFX1VQREFURV9FTkQnKTtcbiAgICB0aGlzLmRvQXBwZW5kKClcbiAgfVxuICBhZGRTb3VyY2VCdWZmZXJzICgpIHtcbiAgICBpZiAodGhpcy5tZWRpYVNvdXJjZS5yZWFkeVN0YXRlICE9PSAnb3BlbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNvdXJjZXMgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdQUkVfU09VUkNFX0JVRkZFUicpO1xuICAgIGxldCB0cmFja3MgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKTtcbiAgICBsZXQgdHJhY2s7XG5cbiAgICBzb3VyY2VzID0gc291cmNlcy5zb3VyY2VzO1xuICAgIGxldCBhZGQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMCwgayA9IE9iamVjdC5rZXlzKHNvdXJjZXMpLmxlbmd0aDsgaSA8IGs7IGkrKykge1xuICAgICAgbGV0IHR5cGUgPSBPYmplY3Qua2V5cyhzb3VyY2VzKVtpXTtcbiAgICAgIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAgIHRyYWNrID0gdHJhY2tzLmF1ZGlvVHJhY2s7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgdHJhY2sgPSB0cmFja3MudmlkZW9UcmFjaztcbiAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgIGxldCBkdXIgPSB0eXBlID09PSAnYXVkaW8nID8gMjEgOiA0MDtcbiAgICAgICAgaWYgKHRyYWNrLm1ldGEgJiYgdHJhY2subWV0YS5yZWZTYW1wbGVEdXJhdGlvbikgZHVyID0gdHJhY2subWV0YS5yZWZTYW1wbGVEdXJhdGlvbjtcbiAgICAgICAgaWYgKHNvdXJjZXNbdHlwZV0uZGF0YS5sZW5ndGggPj0gKHRoaXMucHJlbG9hZFRpbWUgLyBkdXIpKSB7XG4gICAgICAgICAgYWRkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhZGQpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBPYmplY3Qua2V5cyhzb3VyY2VzKS5sZW5ndGg7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgbGV0IHR5cGUgPSBPYmplY3Qua2V5cyhzb3VyY2VzKVtpXTtcbiAgICAgICAgbGV0IHNvdXJjZSA9IHNvdXJjZXNbdHlwZV1cbiAgICAgICAgbGV0IG1pbWUgPSAodHlwZSA9PT0gJ3ZpZGVvJykgPyAndmlkZW8vbXA0O2NvZGVjcz0nICsgc291cmNlLm1pbWV0eXBlIDogJ2F1ZGlvL21wNDtjb2RlY3M9JyArIHNvdXJjZS5taW1ldHlwZVxuICAgICAgICBsZXQgc291cmNlQnVmZmVyID0gdGhpcy5tZWRpYVNvdXJjZS5hZGRTb3VyY2VCdWZmZXIobWltZSk7XG4gICAgICAgIHRoaXMuc291cmNlQnVmZmVyc1t0eXBlXSA9IHNvdXJjZUJ1ZmZlcjtcbiAgICAgICAgc291cmNlQnVmZmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZWVuZCcsIHRoaXMub25VcGRhdGVFbmQpO1xuICAgICAgICB0aGlzLmRvQXBwZW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZG9BcHBlbmQgKCkge1xuICAgIGxldCBzb3VyY2VzID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnUFJFX1NPVVJDRV9CVUZGRVInKTtcbiAgICBpZiAoc291cmNlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0eXBlID0gT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKVtpXVxuICAgICAgICBsZXQgc291cmNlQnVmZmVyID0gdGhpcy5zb3VyY2VCdWZmZXJzW3R5cGVdO1xuICAgICAgICBpZiAoIXNvdXJjZUJ1ZmZlci51cGRhdGluZykge1xuICAgICAgICAgIGxldCBzb3VyY2UgPSBzb3VyY2VzLnNvdXJjZXNbdHlwZV07XG4gICAgICAgICAgaWYgKHNvdXJjZSAmJiAhc291cmNlLmluaXRlZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FwcGVuZCBpbml0aWFsIHNlZ21lbnQnKVxuICAgICAgICAgICAgc291cmNlQnVmZmVyLmFwcGVuZEJ1ZmZlcihzb3VyY2UuaW5pdC5idWZmZXIuYnVmZmVyKTtcbiAgICAgICAgICAgIHNvdXJjZS5pbml0ZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHNvdXJjZS5kYXRhLnNoaWZ0KClcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hcHBlbmRCdWZmZXIoZGF0YS5idWZmZXIuYnVmZmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbmRPZlN0cmVhbSAoKSB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBhY3RpdmVTb3VyY2VCdWZmZXJzIH0gPSB0aGlzLm1lZGlhU291cmNlO1xuICAgIGlmIChyZWFkeVN0YXRlID09PSAnb3BlbicgJiYgYWN0aXZlU291cmNlQnVmZmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubWVkaWFTb3VyY2UuZW5kT2ZTdHJlYW0oKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBsb2dcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmUgKGVuZCwgc3RhcnQgPSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgYnVmZmVyID0gdGhpcy5zb3VyY2VCdWZmZXJzW09iamVjdC5rZXlzKHRoaXMuc291cmNlQnVmZmVycylbaV1dO1xuICAgICAgaWYgKCFidWZmZXIudXBkYXRpbmcpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RhcnQsIGVuZClcbiAgICAgICAgYnVmZmVyLnJlbW92ZShzdGFydCwgZW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVtb3ZlQnVmZmVycyAoKSB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGJ1ZmZlciA9IHRoaXMuc291cmNlQnVmZmVyc1tPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpW2ldXTtcbiAgICAgIGJ1ZmZlci5yZW1vdmVFdmVudExpc3RlbmVyKCd1cGRhdGVlbmQnLCB0aGlzLm9uVXBkYXRlRW5kKTtcblxuICAgICAgbGV0IHRhc2s7XG4gICAgICBpZiAoYnVmZmVyLnVwZGF0aW5nKSB7XG4gICAgICAgIHRhc2sgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRvQ2xlYW5CdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgcmV0cnlUaW1lID0gM1xuXG4gICAgICAgICAgICBjb25zdCBjbGVhbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFidWZmZXIudXBkYXRpbmcpIHtcbiAgICAgICAgICAgICAgICBNU0UuY2xlYXJCdWZmZXIoYnVmZmVyKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJldHJ5VGltZSA+IDApe1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2xlYW4sIDIwMClcbiAgICAgICAgICAgICAgICByZXRyeVRpbWUtLVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoY2xlYW4sIDIwMClcbiAgICAgICAgICAgIGJ1ZmZlci5yZW1vdmVFdmVudExpc3RlbmVyKCd1cGRhdGVlbmQnLCBkb0NsZWFuQnVmZmVyKVxuICAgICAgICAgIH1cbiAgICAgICAgICBidWZmZXIuYWRkRXZlbnRMaXN0ZW5lcigndXBkYXRlZW5kJywgZG9DbGVhbkJ1ZmZlcilcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE1TRS5jbGVhckJ1ZmZlcihidWZmZXIpXG4gICAgICAgIHRhc2sgPSBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuXG4gICAgICB0YXNrTGlzdC5wdXNoKHRhc2spXG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHRhc2tMaXN0KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlQnVmZmVycygpLnRoZW4oKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBidWZmZXIgPSB0aGlzLnNvdXJjZUJ1ZmZlcnNbT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKVtpXV07XG4gICAgICAgIHRoaXMubWVkaWFTb3VyY2UucmVtb3ZlU291cmNlQnVmZmVyKGJ1ZmZlcik7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNvdXJjZUJ1ZmZlcnNbT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKVtpXV07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVGltZVVwZGF0ZSk7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd3YWl0aW5nJywgdGhpcy5vbldhaXRpbmcpO1xuICAgICAgdGhpcy5tZWRpYVNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdzb3VyY2VvcGVuJywgdGhpcy5vblNvdXJjZU9wZW4pO1xuXG4gICAgICB0aGlzLmVuZE9mU3RyZWFtKClcbiAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMudXJsKTtcblxuICAgICAgdGhpcy51cmwgPSBudWxsXG4gICAgICB0aGlzLmNvbmZpZ3MgPSB7fTtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICAgIHRoaXMubWVkaWFTb3VyY2UgPSBudWxsO1xuICAgICAgdGhpcy5zb3VyY2VCdWZmZXJzID0ge307XG4gICAgICB0aGlzLnByZWxvYWRUaW1lID0gMTtcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsZWFyQnVmZmVyIChidWZmZXIpIHtcbiAgICBjb25zdCBidWZmZXJlZCA9IGJ1ZmZlci5idWZmZXJlZDtcbiAgICBsZXQgYkVuZCA9IDAuMVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBidWZmZXJlZC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgYkVuZCA9IGJ1ZmZlcmVkLmVuZChpKVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgYnVmZmVyLnJlbW92ZSgwLCBiRW5kKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIERPIE5PVEhJTkdcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1TRTtcbiIsImltcG9ydCBDb25jYXQgZnJvbSAnY29uY2F0LXR5cGVkLWFycmF5J1xuXG5jbGFzcyBCdWZmZXIge1xuICBjb25zdHJ1Y3RvciAoYnVmZmVyKSB7XG4gICAgdGhpcy5idWZmZXIgPSBidWZmZXIgfHwgbmV3IFVpbnQ4QXJyYXkoMClcbiAgfVxuXG4gIHdyaXRlICguLi5idWZmZXIpIHtcbiAgICBidWZmZXIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuYnVmZmVyID0gQ29uY2F0KFVpbnQ4QXJyYXksIHRoaXMuYnVmZmVyLCBpdGVtKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgd3JpdGVVaW50MzIgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgIHZhbHVlID4+IDI0LFxuICAgICAgKHZhbHVlID4+IDE2KSAmIDB4ZmYsXG4gICAgICAodmFsdWUgPj4gOCkgJiAweGZmLFxuICAgICAgdmFsdWUgJiAweGZmXG4gICAgXSlcbiAgfVxuXG4gIHN0YXRpYyByZWFkQXNJbnQgKGFycikge1xuICAgIGxldCB0ZW1wID0gJydcblxuICAgIGZ1bmN0aW9uIHBhZFN0YXJ0NEhleCAoaGV4TnVtKSB7XG4gICAgICBsZXQgaGV4U3RyID0gaGV4TnVtLnRvU3RyaW5nKDE2KVxuICAgICAgcmV0dXJuIGhleFN0ci5wYWRTdGFydCgyLCAnMCcpXG4gICAgfVxuXG4gICAgYXJyLmZvckVhY2gobnVtID0+IHtcbiAgICAgIHRlbXAgKz0gcGFkU3RhcnQ0SGV4KG51bSlcbiAgICB9KVxuICAgIHJldHVybiBwYXJzZUludCh0ZW1wLCAxNilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWZmZXJcbiIsImNsYXNzIFN0cmVhbSB7XG4gIGNvbnN0cnVjdG9yIChidWZmZXIpIHtcbiAgICBpZiAoYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgdGhpcy5kYXRhdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICAgICAgdGhpcy5kYXRhdmlldy5wb3NpdGlvbiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZGF0YSBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGg7XG4gIH1cblxuICBzZXQgcG9zaXRpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhdmlldy5wb3NpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhdmlldy5wb3NpdGlvbjtcbiAgfVxuXG4gIGJhY2sgKGNvdW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiAtPSBjb3VudDtcbiAgfVxuXG4gIHNraXAgKGNvdW50KSB7XG4gICAgbGV0IGxvb3AgPSBNYXRoLmZsb29yKGNvdW50IC8gNCk7XG4gICAgbGV0IGxhc3QgPSBjb3VudCAlIDQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb29wOyBpKyspIHtcbiAgICAgIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCA0KTtcbiAgICB9XG4gICAgaWYgKGxhc3QgPiAwKSB7XG4gICAgICBTdHJlYW0ucmVhZEJ5dGUodGhpcy5kYXRhdmlldywgbGFzdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFtyZWFkQnl0ZSDku45EYXRhVmlld+S4reivu+WPluaVsOaNrl1cbiAgICogQHBhcmFtICB7RGF0YVZpZXd9IGJ1ZmZlciBbRGF0YVZpZXflrp7kvotdXG4gICAqIEBwYXJhbSAge051bWJlcn0gc2l6ZSAgIFvor7vlj5blrZfoioLmlbBdXG4gICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgIFvmlbTmlbBdXG4gICAqL1xuICBzdGF0aWMgcmVhZEJ5dGUgKGJ1ZmZlciwgc2l6ZSwgc2lnbikge1xuICAgIGxldCByZXM7XG4gICAgc3dpdGNoIChzaXplKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGlmIChzaWduKSB7XG4gICAgICAgICAgcmVzID0gYnVmZmVyLmdldEludDgoYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMgPSBidWZmZXIuZ2V0VWludDgoYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaWYgKHNpZ24pIHtcbiAgICAgICAgICByZXMgPSBidWZmZXIuZ2V0SW50MTYoYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMgPSBidWZmZXIuZ2V0VWludDE2KGJ1ZmZlci5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGlmIChzaWduKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3Qgc3VwcG9ydGVkIGZvciByZWFkQnl0ZSAzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzID0gYnVmZmVyLmdldFVpbnQ4KGJ1ZmZlci5wb3NpdGlvbikgPDwgMTY7XG4gICAgICAgICAgcmVzIHw9IGJ1ZmZlci5nZXRVaW50OChidWZmZXIucG9zaXRpb24gKyAxKSA8PCA4O1xuICAgICAgICAgIHJlcyB8PSBidWZmZXIuZ2V0VWludDgoYnVmZmVyLnBvc2l0aW9uICsgMik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGlmIChzaWduKSB7XG4gICAgICAgICAgcmVzID0gYnVmZmVyLmdldEludDMyKGJ1ZmZlci5wb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzID0gYnVmZmVyLmdldFVpbnQzMihidWZmZXIucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA4OlxuICAgICAgICBpZiAoc2lnbikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IHN1cHBvcnRlZCBmb3IgcmVhZEJvZHkgOCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyA9IGJ1ZmZlci5nZXRVaW50MzIoYnVmZmVyLnBvc2l0aW9uKSA8PCAzMjtcbiAgICAgICAgICByZXMgfD0gYnVmZmVyLmdldFVpbnQzMihidWZmZXIucG9zaXRpb24gKyA0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlcyA9ICcnO1xuICAgIH1cbiAgICBidWZmZXIucG9zaXRpb24gKz0gc2l6ZTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcmVhZFVpbnQ4ICgpIHtcbiAgICByZXR1cm4gU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIDEpO1xuICB9XG5cbiAgcmVhZFVpbnQxNiAoKSB7XG4gICAgcmV0dXJuIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCAyKTtcbiAgfVxuXG4gIHJlYWRVaW50MjQgKCkge1xuICAgIHJldHVybiBTdHJlYW0ucmVhZEJ5dGUodGhpcy5kYXRhdmlldywgMyk7XG4gIH1cblxuICByZWFkVWludDMyICgpIHtcbiAgICByZXR1cm4gU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIDQpO1xuICB9XG5cbiAgcmVhZFVpbnQ2NCAoKSB7XG4gICAgcmV0dXJuIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCA4KTtcbiAgfVxuXG4gIHJlYWRJbnQ4ICgpIHtcbiAgICByZXR1cm4gU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIDEsIHRydWUpO1xuICB9XG4gIHJlYWRJbnQxNiAoKSB7XG4gICAgcmV0dXJuIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCAyLCB0cnVlKTtcbiAgfVxuXG4gIHJlYWRJbnQzMiAoKSB7XG4gICAgcmV0dXJuIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCA0LCB0cnVlKTtcbiAgfVxuXG4gIHdyaXRlVWludDMyICh2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICB2YWx1ZSA+Pj4gMjQgJiAweGZmLFxuICAgICAgdmFsdWUgPj4+IDE2ICYgMHhmZixcbiAgICAgIHZhbHVlID4+PiA4ICYgMHhmZixcbiAgICAgIHZhbHVlICYgMHhmZlxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmVhbTtcbiIsImltcG9ydCB7IEZldGNoTG9hZGVyIH0gZnJvbSAneGdwbGF5ZXItbG9hZGVyJ1xuaW1wb3J0IHsgRmx2RGVtdXhlciB9IGZyb20gJ3hncGxheWVyLWRlbXV4J1xuaW1wb3J0IHsgTXA0UmVtdXhlciB9IGZyb20gJ3hncGxheWVyLXJlbXV4J1xuaW1wb3J0IHsgVHJhY2tzLCBYZ0J1ZmZlciwgUHJlU291cmNlIH0gZnJvbSAneGdwbGF5ZXItYnVmZmVyJ1xuaW1wb3J0IHsgRVZFTlRTLCBNb2JpbGVWaWRlbyB9IGZyb20gJ3hncGxheWVyLXV0aWxzJ1xuaW1wb3J0IHsgQ29tcGF0aWJpbGl0eSB9IGZyb20gJ3hncGxheWVyLWNvZGVjJ1xuaW1wb3J0IFBsYXllciBmcm9tICd4Z3BsYXllcidcblxuY29uc3QgREVNVVhfRVZFTlRTID0gRVZFTlRTLkRFTVVYX0VWRU5UUztcbmNvbnN0IExPQURFUl9FVkVOVFMgPSBFVkVOVFMuTE9BREVSX0VWRU5UU1xuY29uc3QgUkVNVVhfRVZFTlRTID0gRVZFTlRTLlJFTVVYX0VWRU5UU1xuXG5jb25zdCBUYWcgPSAnRkxWQ29udHJvbGxlcidcblxuY2xhc3MgTG9nZ2VyIHtcbiAgd2FybiAoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbHZDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKHBsYXllcikge1xuICAgIHRoaXMuVEFHID0gVGFnXG4gICAgdGhpcy5fcGxheWVyID0gcGxheWVyXG5cbiAgICAvLyBUT0RPIOS4tOaXtuaMgueahCDpnIDopoHlpITnkIbliLBQbGF5ZXLlsYJcbiAgICAvLyB0aGlzLnZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbW9iaWxlLXZpZGVvJyk7XG4gICAgdGhpcy5fcGxheWVyLnZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbW9iaWxlLXZpZGVvJyk7XG4gICAgdGhpcy52aWRlbyA9IHRoaXMuX3BsYXllci52aWRlbztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5pdFNlZ21lbnRBcnJpdmVkOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ0ZFVENIX0xPQURFUicsIEZldGNoTG9hZGVyKVxuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ0xPQURFUl9CVUZGRVInLCBYZ0J1ZmZlcilcbiAgICB0aGlzLl9jb250ZXh0LnJlZ2lzdHJ5KCdQUkVfU09VUkNFX0JVRkZFUicsIFByZVNvdXJjZSlcblxuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ0ZMVl9ERU1VWEVSJywgRmx2RGVtdXhlcilcblxuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ01QNF9SRU1VWEVSJywgTXA0UmVtdXhlcilcbiAgICB0aGlzLl9jb250ZXh0LnJlZ2lzdHJ5KCdUUkFDS1MnLCBUcmFja3MpXG5cbiAgICB0aGlzLl9jb250ZXh0LnJlZ2lzdHJ5KCdDT01QQVRJQklMSVRZJywgQ29tcGF0aWJpbGl0eSlcblxuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ0xPR0dFUicsIExvZ2dlcilcblxuICAgIHRoaXMuaW5pdExpc3RlbmVycygpXG4gIH1cblxuICBpbml0TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLm9uKExPQURFUl9FVkVOVFMuTE9BREVSX0RBVEFMT0FERUQsIHRoaXMuX2hhbmRsZUxvYWRlckRhdGFMb2FkZWQuYmluZCh0aGlzKSlcbiAgICB0aGlzLm9uKExPQURFUl9FVkVOVFMuTE9BREVSX0VSUk9SLCB0aGlzLl9oYW5kbGVOZXR3b3JrRXJyb3IuYmluZCh0aGlzKSlcblxuICAgIHRoaXMub24oREVNVVhfRVZFTlRTLk1FRElBX0lORk8sIHRoaXMuX2hhbmRsZU1lZGlhSW5mby5iaW5kKHRoaXMpKVxuICAgIHRoaXMub24oREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgdGhpcy5faGFuZGxlTWV0YWRhdGFQYXJzZWQuYmluZCh0aGlzKSlcbiAgICB0aGlzLm9uKERFTVVYX0VWRU5UUy5ERU1VWF9DT01QTEVURSwgdGhpcy5faGFuZGxlRGVtdXhDb21wbGV0ZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMub24oREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCB0aGlzLl9oYW5kbGVEZW11eEVycm9yLmJpbmQodGhpcykpXG5cbiAgfVxuXG4gIF9oYW5kbGVNZWRpYUluZm8gKCkge1xuICAgIGlmICghdGhpcy5fY29udGV4dC5tZWRpYUluZm8pIHtcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIG5ldyBFcnJvcignZmFpbGVkIHRvIGdldCBtZWRpYWluZm8nKSlcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlTG9hZGVyRGF0YUxvYWRlZCAoKSB7XG4gICAgdGhpcy5lbWl0VG8oJ0ZMVl9ERU1VWEVSJywgREVNVVhfRVZFTlRTLkRFTVVYX1NUQVJUKVxuICB9XG5cbiAgX2hhbmRsZU1ldGFkYXRhUGFyc2VkICh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgIC8vIOWwhumfs+mikW1ldGHkv6Hmga/kuqTnu5lhdWRpb0NvbnRleHTvvIzkuI3otbByZW11eOWwgeijhVxuICAgICAgY29uc3QgeyBhdWRpb1RyYWNrIH0gPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKVxuICAgICAgaWYgKGF1ZGlvVHJhY2sgJiYgYXVkaW9UcmFjay5tZXRhKSB7XG4gICAgICAgIHRoaXMuX3NldE1ldGFUb0F1ZGlvKGF1ZGlvVHJhY2subWV0YSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyB2aWRlb1RyYWNrIH0gPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKVxuICAgICAgaWYgKHZpZGVvVHJhY2sgJiYgdmlkZW9UcmFjay5tZXRhKSB7XG4gICAgICAgIHRoaXMuX3NldE1ldGFUb1ZpZGVvKHZpZGVvVHJhY2subWV0YSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaGFuZGxlRGVtdXhDb21wbGV0ZSAoKSB7XG4gICAgaWYodGhpcy5fcGxheWVyLnZpZGVvKSB7XG4gICAgICBjb25zdCB7IHZpZGVvVHJhY2ssIGF1ZGlvVHJhY2sgfSA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpO1xuICAgICAgdGhpcy5fcGxheWVyLnZpZGVvLm9uRGVtdXhDb21wbGV0ZSh2aWRlb1RyYWNrLCBhdWRpb1RyYWNrKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQXBwZW5kSW5pdFNlZ21lbnQgKCkge1xuICAgIHRoaXMuc3RhdGUuaW5pdFNlZ21lbnRBcnJpdmVkID0gdHJ1ZVxuICAvLyAgdGhpcy5tc2UuYWRkU291cmNlQnVmZmVycygpXG4gIH1cblxuXG4gIF9oYW5kbGVOZXR3b3JrRXJyb3IgKCkge1xuICAgIHRoaXMuX3BsYXllci5lbWl0KCdlcnJvcicsIG5ldyBQbGF5ZXIuRXJyb3JzKCduZXR3b3JrJywgdGhpcy5fcGxheWVyLmNvbmZpZy51cmwpKVxuICB9XG5cbiAgX2hhbmRsZURlbXV4RXJyb3IgKCkge1xuICAgIHRoaXMuX3BsYXllci5lbWl0KCdlcnJvcicsIG5ldyBQbGF5ZXIuRXJyb3JzKCdwYXJzZScsIHRoaXMuX3BsYXllci5jb25maWcudXJsKSlcbiAgfVxuXG4gXG4gIF9zZXRNZXRhVG9BdWRpbyAoYXVkaW9NZXRhKSB7XG4gICAgaWYgKHRoaXMuX3BsYXllci52aWRlbykge1xuICAgICAgdGhpcy5fcGxheWVyLnZpZGVvLnNldEF1ZGlvTWV0YShhdWRpb01ldGEpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRNZXRhVG9WaWRlbyAodmlkZW9NZXRhKSB7XG4gICAgaWYgKHRoaXMuX3BsYXllci52aWRlbykge1xuICAgICAgdGhpcy5fcGxheWVyLnZpZGVvLnNldFZpZGVvTWV0YSh2aWRlb01ldGEpO1xuICAgIH1cbiAgfVxuXG4gIHNlZWsgKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pbml0U2VnbWVudEFycml2ZWQpIHtcbiAgICAgIHRoaXMubG9hZERhdGEoKVxuICAgIH1cbiAgfVxuXG4gIGxvYWREYXRhICgpIHtcbiAgICB0aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MQURFUl9TVEFSVCwgdGhpcy5fcGxheWVyLmNvbmZpZy51cmwpXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnRkVUQ0hfTE9BREVSJylcblxuICAgIGlmIChsb2FkZXIpIHtcbiAgICAgIGxvYWRlci5jYW5jZWwoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDkv53or4HlvZPliY3mkq3mlL7nmoTop4bpopHku6Vnb3DkuLrljZXkvY1cbiAgICogQHBhcmFtIHZpZGVvVHJhY2tcbiAgICovXG4gIHN0YXRpYyByZXNvbHZlVmlkZW9HT1AgKHZpZGVvVHJhY2spIHtcbiAgICBjb25zdCB7IHNhbXBsZXMgfSA9IHZpZGVvVHJhY2s7XG4gICAgaWYgKCFzYW1wbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmaXJzdElmcmFtZUlkeCA9IG51bGxcbiAgICBsZXQgbGFzdElmcmFtZUlkeCA9IG51bGxcblxuICAgIGlmICh2aWRlb1RyYWNrLnRlbXBTYW1wbGVzICYmIHZpZGVvVHJhY2sudGVtcFNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICAvLyDlsIbnvJPlrZjluKfmlL7nva7liLDpmJ/liJfnmoTlpLTpg6hcbiAgICAgIHNhbXBsZXMudW5zaGlmdC5hcHBseShzYW1wbGVzLCB2aWRlb1RyYWNrLnRlbXBTYW1wbGVzKTtcbiAgICB9XG5cbiAgICAvLyDlr7vmib7nrKzkuIDkuKpJ5binXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNhbXBsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBzYW1wbGVzW2ldO1xuICAgICAgaWYgKGN1cnJlbnQuaXNLZXlmcmFtZSkge1xuICAgICAgICBmaXJzdElmcmFtZUlkeCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWvu+aJvuacgOWQjuS4gOS4qknluKdcbiAgICBmb3IgKGxldCBpID0gc2FtcGxlcy5sZW5ndGggLSAxOyBpID4gMDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gc2FtcGxlc1tpXVxuXG4gICAgICBpZiAoY3VycmVudC5pc0tleWZyYW1lKSB7XG4gICAgICAgIGxhc3RJZnJhbWVJZHggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmlyc3RJZnJhbWVJZHggIT09IDApIHtcbiAgICAgIHNhbXBsZXMuc3BsaWNlKDAsIGZpcnN0SWZyYW1lSWR4IC0gMSlcbiAgICB9XG5cbiAgICB2aWRlb1RyYWNrLnNhbXBsZXMgPSBzYW1wbGVzLnNsaWNlKDAsIGxhc3RJZnJhbWVJZHgpXG4gICAgY29uc3QgcmVzdCA9IHNhbXBsZXMuc2xpY2UobGFzdElmcmFtZUlkeClcbiAgICBpZiAodmlkZW9UcmFjay50ZW1wU2FtcGxlcykge1xuICAgICAgdmlkZW9UcmFjay50ZW1wU2FtcGxlcy5wdXNoLmFwcGx5KHZpZGVvVHJhY2sudGVtcFNhbXBsZXMsIHJlc3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWwhuWJqeS4i+eahOW4p+e8k+WtmO+8jOetieW+heS4gOS4quWujOaVtOeahGdvcFxuICAgICAgdmlkZW9UcmFjay50ZW1wU2FtcGxlcyA9IHJlc3RcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAneGdwbGF5ZXInXG5pbXBvcnQgeyBDb250ZXh0LCBFVkVOVFMgfSBmcm9tICd4Z3BsYXllci11dGlscyc7XG5pbXBvcnQgRkxWIGZyb20gJy4vZmx2LWxpdmUtbW9iaWxlJ1xuY29uc3QgZmx2QWxsb3dlZEV2ZW50cyA9IEVWRU5UUy5GbHZBbGxvd2VkRXZlbnRzO1xuXG5jbGFzcyBGbHZQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKVxuICAgIHRoaXMuY29udGV4dCA9IG5ldyBDb250ZXh0KGZsdkFsbG93ZWRFdmVudHMpXG4gICAgdGhpcy5pbml0RXZlbnRzKClcbiAgfVxuXG4gIHN0YXJ0ICgpIHtcbiAgICB0aGlzLmluaXRGbHYoKVxuICAgIHRoaXMuY29udGV4dC5pbml0KClcbiAgICB0aGlzLmZsdi5zZWVrKDApO1xuICAgIHN1cGVyLnN0YXJ0KHRoaXMuY29uZmlnLnVybCk7XG4gICAgdGhpcy5wbGF5KCk7XG4gIH1cblxuICBpbml0Rmx2RXZlbnRzIChmbHYpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzO1xuICAgIGZsdi5vbmNlKEVWRU5UUy5SRU1VWF9FVkVOVFMuSU5JVF9TRUdNRU5ULCAoKSA9PiB7XG4gICAgICBQbGF5ZXIudXRpbC5hZGRDbGFzcyhwbGF5ZXIucm9vdCwgJ3hncGxheWVyLWlzLWxpdmUnKVxuICAgICAgaWYgKCFQbGF5ZXIudXRpbC5maW5kRG9tKHRoaXMucm9vdCwgJ3hnLWxpdmUnKSkge1xuICAgICAgICBjb25zdCBsaXZlID0gUGxheWVyLnV0aWwuY3JlYXRlRG9tKCd4Zy1saXZlJywgJ+ato+WcqOebtOaSrScsIHt9LCAneGdwbGF5ZXItbGl2ZScpXG4gICAgICAgIHBsYXllci5jb250cm9scy5hcHBlbmRDaGlsZChsaXZlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmbHYub25jZShFVkVOVFMuTE9BREVSX0VWRU5UUy5MT0FERVJfQ09NUExFVEUsICgpID0+IHtcbiAgICAgIC8vIOebtOaSreWujOaIkO+8jOW+heaSreaUvuWZqOaSreWujOe8k+WtmOWQjuWPkemAgeWFs+mXreS6i+S7tlxuICAgICAgaWYgKCFwbGF5ZXIucGF1c2VkKSB7XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVuZCA9IHBsYXllci5nZXRCdWZmZXJlZFJhbmdlKClbMV1cbiAgICAgICAgICBpZiAoTWF0aC5hYnMocGxheWVyLmN1cnJlbnRUaW1lIC0gZW5kKSA8IDAuNSkge1xuICAgICAgICAgICAgcGxheWVyLmVtaXQoJ2VuZGVkJylcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbml0RXZlbnRzICgpIHtcbiAgICB0aGlzLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkRGF0YSgpXG4gICAgfSlcblxuICAgIHRoaXMub24oJ3NlZWtpbmcnLCAoKSA9PiB7XG4gICAgICBjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZVxuICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLmdldEJ1ZmZlcmVkUmFuZ2UoKVxuICAgICAgaWYgKHRpbWUgPiByYW5nZVsxXSB8fCB0aW1lIDwgcmFuZ2VbMF0pIHtcbiAgICAgICAgdGhpcy5mbHYuc2Vlayh0aGlzLmN1cnJlbnRUaW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbml0Rmx2ICgpIHtcbiAgICBjb25zdCBmbHYgPSB0aGlzLmNvbnRleHQucmVnaXN0cnkoJ0ZMVl9DT05UUk9MTEVSJywgRkxWKSh0aGlzKVxuICAgIHRoaXMuaW5pdEZsdkV2ZW50cyhmbHYpXG4gICAgdGhpcy5mbHYgPSBmbHZcbiAgfVxuXG4gIHBsYXkgKCkge1xuICAgIGNvbnNvbGUubG9nKCdwbGF5Jyk7XG4gICAgaWYgKHRoaXMuX2hhc1N0YXJ0KSB7XG4gICAgICB0aGlzLl9kZXN0cm95KClcbiAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBDb250ZXh0KGZsdkFsbG93ZWRFdmVudHMpXG4gICAgICBjb25zdCBmbHYgPSB0aGlzLmNvbnRleHQucmVnaXN0cnkoJ0ZMVl9DT05UUk9MTEVSJywgRkxWKSh0aGlzKVxuICAgICAgdGhpcy5pbml0Rmx2RXZlbnRzKGZsdilcbiAgICAgIHRoaXMuZmx2ID0gZmx2XG4gICAgICB0aGlzLmNvbnRleHQuaW5pdCgpXG4gICAgICBzdXBlci5zdGFydChmbHYubXNlLnVybClcbiAgICAgIHN1cGVyLnBsYXkoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdXBlci5wbGF5KClcbiAgICB9XG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgc3VwZXIucGF1c2UoKVxuICAgIGlmICh0aGlzLmZsdikge1xuICAgICAgdGhpcy5mbHYucGF1c2UoKVxuICAgIH1cbiAgfVxuXG4gIGxvYWREYXRhICh0aW1lID0gdGhpcy5jdXJyZW50VGltZSkge1xuICAgIGlmICh0aGlzLmZsdikge1xuICAgICAgdGhpcy5mbHYuc2Vlayh0aW1lKVxuICAgIH1cbiAgfVxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9kZXN0cm95KClcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxuICBfZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jb250ZXh0LmRlc3Ryb3koKVxuICAgIHRoaXMuZmx2ID0gbnVsbFxuICAgIHRoaXMuY29udGV4dCA9IG51bGxcbiAgfVxuXG4gIGdldCBzcmMgKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTcmNcbiAgfVxuXG4gIHNldCBzcmMgKHVybCkge1xuICAgIHRoaXMucGxheWVyLmNvbmZpZy51cmwgPSB1cmxcbiAgICBpZiAoIXRoaXMucGF1c2VkKSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIHRoaXMub25jZSgncGF1c2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhcnQodXJsKVxuICAgICAgfSlcbiAgICAgIHRoaXMub25jZSgnY2FucGxheScsICgpID0+IHtcbiAgICAgICAgdGhpcy5wbGF5KClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhcnQodXJsKVxuICAgIH1cbiAgICB0aGlzLm9uY2UoJ2NhbnBsYXknLCAoKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMFxuICAgIH0pXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbHZQbGF5ZXJcbiIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJQbGF5ZXJcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==