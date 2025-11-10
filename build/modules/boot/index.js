var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// package-external:@wordpress/element
var require_element = __commonJS({
  "package-external:@wordpress/element"(exports, module) {
    module.exports = window.wp.element;
  }
});

// package-external:@wordpress/data
var require_data = __commonJS({
  "package-external:@wordpress/data"(exports, module) {
    module.exports = window.wp.data;
  }
});

// vendor-external:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "vendor-external:react/jsx-runtime"(exports, module) {
    module.exports = window.ReactJSXRuntime;
  }
});

// vendor-external:react
var require_react = __commonJS({
  "vendor-external:react"(exports, module) {
    module.exports = window.React;
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      function useSyncExternalStore$2(subscribe2, getSnapshot) {
        didWarnOld18Alpha || void 0 === React12.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState8({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect3(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe2, value, getSnapshot]
        );
        useEffect8(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe2(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe2]
        );
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe2, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React12 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState8 = React12.useState, useEffect8 = React12.useEffect, useLayoutEffect3 = React12.useLayoutEffect, useDebugValue = React12.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React12.useSyncExternalStore ? React12.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React12 = require_react(), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef8 = React12.useRef, useEffect8 = React12.useEffect, useMemo4 = React12.useMemo, useDebugValue = React12.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe2, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef8(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo4(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore(subscribe2, instRef[0], instRef[1]);
        useEffect8(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// vendor-external:react-dom
var require_react_dom = __commonJS({
  "vendor-external:react-dom"(exports, module) {
    module.exports = window.ReactDOM;
  }
});

// package-external:@wordpress/i18n
var require_i18n = __commonJS({
  "package-external:@wordpress/i18n"(exports, module) {
    module.exports = window.wp.i18n;
  }
});

// package-external:@wordpress/components
var require_components = __commonJS({
  "package-external:@wordpress/components"(exports, module) {
    module.exports = window.wp.components;
  }
});

// package-external:@wordpress/commands
var require_commands = __commonJS({
  "package-external:@wordpress/commands"(exports, module) {
    module.exports = window.wp.commands;
  }
});

// package-external:@wordpress/theme
var require_theme = __commonJS({
  "package-external:@wordpress/theme"(exports, module) {
    module.exports = window.wp.theme;
  }
});

// package-external:@wordpress/core-data
var require_core_data = __commonJS({
  "package-external:@wordpress/core-data"(exports, module) {
    module.exports = window.wp.coreData;
  }
});

// package-external:@wordpress/html-entities
var require_html_entities = __commonJS({
  "package-external:@wordpress/html-entities"(exports, module) {
    module.exports = window.wp.htmlEntities;
  }
});

// package-external:@wordpress/primitives
var require_primitives = __commonJS({
  "package-external:@wordpress/primitives"(exports, module) {
    module.exports = window.wp.primitives;
  }
});

// package-external:@wordpress/keycodes
var require_keycodes = __commonJS({
  "package-external:@wordpress/keycodes"(exports, module) {
    module.exports = window.wp.keycodes;
  }
});

// package-external:@wordpress/url
var require_url = __commonJS({
  "package-external:@wordpress/url"(exports, module) {
    module.exports = window.wp.url;
  }
});

// package-external:@wordpress/compose
var require_compose = __commonJS({
  "package-external:@wordpress/compose"(exports, module) {
    module.exports = window.wp.compose;
  }
});

// package-external:@wordpress/private-apis
var require_private_apis = __commonJS({
  "package-external:@wordpress/private-apis"(exports, module) {
    module.exports = window.wp.privateApis;
  }
});

// package-external:@wordpress/editor
var require_editor = __commonJS({
  "package-external:@wordpress/editor"(exports, module) {
    module.exports = window.wp.editor;
  }
});

// packages/boot/build-module/components/app/index.js
var import_element9 = __toESM(require_element());
var import_data7 = __toESM(require_data());

// node_modules/@tanstack/store/dist/esm/scheduler.js
var __storeToDerived = /* @__PURE__ */ new WeakMap();
var __derivedToStore = /* @__PURE__ */ new WeakMap();
var __depsThatHaveWrittenThisTick = {
  current: []
};
var __isFlushing = false;
var __batchDepth = 0;
var __pendingUpdates = /* @__PURE__ */ new Set();
var __initialBatchValues = /* @__PURE__ */ new Map();
function __flush_internals(relatedVals) {
  for (const derived of relatedVals) {
    if (__depsThatHaveWrittenThisTick.current.includes(derived)) {
      continue;
    }
    __depsThatHaveWrittenThisTick.current.push(derived);
    derived.recompute();
    const stores = __derivedToStore.get(derived);
    if (stores) {
      for (const store2 of stores) {
        const relatedLinkedDerivedVals = __storeToDerived.get(store2);
        if (!(relatedLinkedDerivedVals == null ? void 0 : relatedLinkedDerivedVals.length)) continue;
        __flush_internals(relatedLinkedDerivedVals);
      }
    }
  }
}
function __notifyListeners(store2) {
  const value = {
    prevVal: store2.prevState,
    currentVal: store2.state
  };
  for (const listener of store2.listeners) {
    listener(value);
  }
}
function __notifyDerivedListeners(derived) {
  const value = {
    prevVal: derived.prevState,
    currentVal: derived.state
  };
  for (const listener of derived.listeners) {
    listener(value);
  }
}
function __flush(store2) {
  if (__batchDepth > 0 && !__initialBatchValues.has(store2)) {
    __initialBatchValues.set(store2, store2.prevState);
  }
  __pendingUpdates.add(store2);
  if (__batchDepth > 0) return;
  if (__isFlushing) return;
  try {
    __isFlushing = true;
    while (__pendingUpdates.size > 0) {
      const stores = Array.from(__pendingUpdates);
      __pendingUpdates.clear();
      for (const store22 of stores) {
        const prevState = __initialBatchValues.get(store22) ?? store22.prevState;
        store22.prevState = prevState;
        __notifyListeners(store22);
      }
      for (const store22 of stores) {
        const derivedVals = __storeToDerived.get(store22);
        if (!derivedVals) continue;
        __depsThatHaveWrittenThisTick.current.push(store22);
        __flush_internals(derivedVals);
      }
      for (const store22 of stores) {
        const derivedVals = __storeToDerived.get(store22);
        if (!derivedVals) continue;
        for (const derived of derivedVals) {
          __notifyDerivedListeners(derived);
        }
      }
    }
  } finally {
    __isFlushing = false;
    __depsThatHaveWrittenThisTick.current = [];
    __initialBatchValues.clear();
  }
}
function batch(fn) {
  __batchDepth++;
  try {
    fn();
  } finally {
    __batchDepth--;
    if (__batchDepth === 0) {
      const pendingUpdateToFlush = __pendingUpdates.values().next().value;
      if (pendingUpdateToFlush) {
        __flush(pendingUpdateToFlush);
      }
    }
  }
}

// node_modules/@tanstack/store/dist/esm/types.js
function isUpdaterFunction(updater) {
  return typeof updater === "function";
}

// node_modules/@tanstack/store/dist/esm/store.js
var Store = class {
  constructor(initialState2, options) {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = (listener) => {
      var _a, _b;
      this.listeners.add(listener);
      const unsub = (_b = (_a = this.options) == null ? void 0 : _a.onSubscribe) == null ? void 0 : _b.call(_a, listener, this);
      return () => {
        this.listeners.delete(listener);
        unsub == null ? void 0 : unsub();
      };
    };
    this.prevState = initialState2;
    this.state = initialState2;
    this.options = options;
  }
  setState(updater) {
    var _a, _b, _c;
    this.prevState = this.state;
    if ((_a = this.options) == null ? void 0 : _a.updateFn) {
      this.state = this.options.updateFn(this.prevState)(updater);
    } else {
      if (isUpdaterFunction(updater)) {
        this.state = updater(this.prevState);
      } else {
        this.state = updater;
      }
    }
    (_c = (_b = this.options) == null ? void 0 : _b.onUpdate) == null ? void 0 : _c.call(_b);
    __flush(this);
  }
};

// node_modules/@tanstack/history/dist/esm/index.js
var stateIndexKey = "__TSR_index";
var popStateEvent = "popstate";
var beforeUnloadEvent = "beforeunload";
function createHistory(opts) {
  let location = opts.getLocation();
  const subscribers = /* @__PURE__ */ new Set();
  const notify = (action) => {
    location = opts.getLocation();
    subscribers.forEach((subscriber) => subscriber({ location, action }));
  };
  const handleIndexChange = (action) => {
    if (opts.notifyOnIndexChange ?? true) notify(action);
    else location = opts.getLocation();
  };
  const tryNavigation = async ({
    task,
    navigateOpts,
    ...actionInfo
  }) => {
    const ignoreBlocker = navigateOpts?.ignoreBlocker ?? false;
    if (ignoreBlocker) {
      task();
      return;
    }
    const blockers = opts.getBlockers?.() ?? [];
    const isPushOrReplace = actionInfo.type === "PUSH" || actionInfo.type === "REPLACE";
    if (typeof document !== "undefined" && blockers.length && isPushOrReplace) {
      for (const blocker of blockers) {
        const nextLocation = parseHref(actionInfo.path, actionInfo.state);
        const isBlocked = await blocker.blockerFn({
          currentLocation: location,
          nextLocation,
          action: actionInfo.type
        });
        if (isBlocked) {
          opts.onBlocked?.();
          return;
        }
      }
    }
    task();
  };
  return {
    get location() {
      return location;
    },
    get length() {
      return opts.getLength();
    },
    subscribers,
    subscribe: (cb) => {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },
    push: (path, state, navigateOpts) => {
      const currentIndex = location.state[stateIndexKey];
      state = assignKeyAndIndex(currentIndex + 1, state);
      tryNavigation({
        task: () => {
          opts.pushState(path, state);
          notify({ type: "PUSH" });
        },
        navigateOpts,
        type: "PUSH",
        path,
        state
      });
    },
    replace: (path, state, navigateOpts) => {
      const currentIndex = location.state[stateIndexKey];
      state = assignKeyAndIndex(currentIndex, state);
      tryNavigation({
        task: () => {
          opts.replaceState(path, state);
          notify({ type: "REPLACE" });
        },
        navigateOpts,
        type: "REPLACE",
        path,
        state
      });
    },
    go: (index, navigateOpts) => {
      tryNavigation({
        task: () => {
          opts.go(index);
          handleIndexChange({ type: "GO", index });
        },
        navigateOpts,
        type: "GO"
      });
    },
    back: (navigateOpts) => {
      tryNavigation({
        task: () => {
          opts.back(navigateOpts?.ignoreBlocker ?? false);
          handleIndexChange({ type: "BACK" });
        },
        navigateOpts,
        type: "BACK"
      });
    },
    forward: (navigateOpts) => {
      tryNavigation({
        task: () => {
          opts.forward(navigateOpts?.ignoreBlocker ?? false);
          handleIndexChange({ type: "FORWARD" });
        },
        navigateOpts,
        type: "FORWARD"
      });
    },
    canGoBack: () => location.state[stateIndexKey] !== 0,
    createHref: (str) => opts.createHref(str),
    block: (blocker) => {
      if (!opts.setBlockers) return () => {
      };
      const blockers = opts.getBlockers?.() ?? [];
      opts.setBlockers([...blockers, blocker]);
      return () => {
        const blockers2 = opts.getBlockers?.() ?? [];
        opts.setBlockers?.(blockers2.filter((b) => b !== blocker));
      };
    },
    flush: () => opts.flush?.(),
    destroy: () => opts.destroy?.(),
    notify
  };
}
function assignKeyAndIndex(index, state) {
  if (!state) {
    state = {};
  }
  const key = createRandomKey();
  return {
    ...state,
    key,
    // TODO: Remove in v2 - use __TSR_key instead
    __TSR_key: key,
    [stateIndexKey]: index
  };
}
function createBrowserHistory(opts) {
  const win = opts?.window ?? (typeof document !== "undefined" ? window : void 0);
  const originalPushState = win.history.pushState;
  const originalReplaceState = win.history.replaceState;
  let blockers = [];
  const _getBlockers = () => blockers;
  const _setBlockers = (newBlockers) => blockers = newBlockers;
  const createHref = opts?.createHref ?? ((path) => path);
  const parseLocation = opts?.parseLocation ?? (() => parseHref(
    `${win.location.pathname}${win.location.search}${win.location.hash}`,
    win.history.state
  ));
  if (!win.history.state?.__TSR_key && !win.history.state?.key) {
    const addedKey = createRandomKey();
    win.history.replaceState(
      {
        [stateIndexKey]: 0,
        key: addedKey,
        // TODO: Remove in v2 - use __TSR_key instead
        __TSR_key: addedKey
      },
      ""
    );
  }
  let currentLocation = parseLocation();
  let rollbackLocation;
  let nextPopIsGo = false;
  let ignoreNextPop = false;
  let skipBlockerNextPop = false;
  let ignoreNextBeforeUnload = false;
  const getLocation = () => currentLocation;
  let next;
  let scheduled;
  const flush = () => {
    if (!next) {
      return;
    }
    history._ignoreSubscribers = true;
    (next.isPush ? win.history.pushState : win.history.replaceState)(
      next.state,
      "",
      next.href
    );
    history._ignoreSubscribers = false;
    next = void 0;
    scheduled = void 0;
    rollbackLocation = void 0;
  };
  const queueHistoryAction = (type, destHref, state) => {
    const href = createHref(destHref);
    if (!scheduled) {
      rollbackLocation = currentLocation;
    }
    currentLocation = parseHref(destHref, state);
    next = {
      href,
      state,
      isPush: next?.isPush || type === "push"
    };
    if (!scheduled) {
      scheduled = Promise.resolve().then(() => flush());
    }
  };
  const onPushPop = (type) => {
    currentLocation = parseLocation();
    history.notify({ type });
  };
  const onPushPopEvent = async () => {
    if (ignoreNextPop) {
      ignoreNextPop = false;
      return;
    }
    const nextLocation = parseLocation();
    const delta = nextLocation.state[stateIndexKey] - currentLocation.state[stateIndexKey];
    const isForward = delta === 1;
    const isBack = delta === -1;
    const isGo = !isForward && !isBack || nextPopIsGo;
    nextPopIsGo = false;
    const action = isGo ? "GO" : isBack ? "BACK" : "FORWARD";
    const notify = isGo ? {
      type: "GO",
      index: delta
    } : {
      type: isBack ? "BACK" : "FORWARD"
    };
    if (skipBlockerNextPop) {
      skipBlockerNextPop = false;
    } else {
      const blockers2 = _getBlockers();
      if (typeof document !== "undefined" && blockers2.length) {
        for (const blocker of blockers2) {
          const isBlocked = await blocker.blockerFn({
            currentLocation,
            nextLocation,
            action
          });
          if (isBlocked) {
            ignoreNextPop = true;
            win.history.go(1);
            history.notify(notify);
            return;
          }
        }
      }
    }
    currentLocation = parseLocation();
    history.notify(notify);
  };
  const onBeforeUnload = (e) => {
    if (ignoreNextBeforeUnload) {
      ignoreNextBeforeUnload = false;
      return;
    }
    let shouldBlock = false;
    const blockers2 = _getBlockers();
    if (typeof document !== "undefined" && blockers2.length) {
      for (const blocker of blockers2) {
        const shouldHaveBeforeUnload = blocker.enableBeforeUnload ?? true;
        if (shouldHaveBeforeUnload === true) {
          shouldBlock = true;
          break;
        }
        if (typeof shouldHaveBeforeUnload === "function" && shouldHaveBeforeUnload() === true) {
          shouldBlock = true;
          break;
        }
      }
    }
    if (shouldBlock) {
      e.preventDefault();
      return e.returnValue = "";
    }
    return;
  };
  const history = createHistory({
    getLocation,
    getLength: () => win.history.length,
    pushState: (href, state) => queueHistoryAction("push", href, state),
    replaceState: (href, state) => queueHistoryAction("replace", href, state),
    back: (ignoreBlocker) => {
      if (ignoreBlocker) skipBlockerNextPop = true;
      ignoreNextBeforeUnload = true;
      return win.history.back();
    },
    forward: (ignoreBlocker) => {
      if (ignoreBlocker) skipBlockerNextPop = true;
      ignoreNextBeforeUnload = true;
      win.history.forward();
    },
    go: (n) => {
      nextPopIsGo = true;
      win.history.go(n);
    },
    createHref: (href) => createHref(href),
    flush,
    destroy: () => {
      win.history.pushState = originalPushState;
      win.history.replaceState = originalReplaceState;
      win.removeEventListener(beforeUnloadEvent, onBeforeUnload, {
        capture: true
      });
      win.removeEventListener(popStateEvent, onPushPopEvent);
    },
    onBlocked: () => {
      if (rollbackLocation && currentLocation !== rollbackLocation) {
        currentLocation = rollbackLocation;
      }
    },
    getBlockers: _getBlockers,
    setBlockers: _setBlockers,
    notifyOnIndexChange: false
  });
  win.addEventListener(beforeUnloadEvent, onBeforeUnload, { capture: true });
  win.addEventListener(popStateEvent, onPushPopEvent);
  win.history.pushState = function(...args) {
    const res = originalPushState.apply(win.history, args);
    if (!history._ignoreSubscribers) onPushPop("PUSH");
    return res;
  };
  win.history.replaceState = function(...args) {
    const res = originalReplaceState.apply(win.history, args);
    if (!history._ignoreSubscribers) onPushPop("REPLACE");
    return res;
  };
  return history;
}
function parseHref(href, state) {
  const hashIndex = href.indexOf("#");
  const searchIndex = href.indexOf("?");
  const addedKey = createRandomKey();
  return {
    href,
    pathname: href.substring(
      0,
      hashIndex > 0 ? searchIndex > 0 ? Math.min(hashIndex, searchIndex) : hashIndex : searchIndex > 0 ? searchIndex : href.length
    ),
    hash: hashIndex > -1 ? href.substring(hashIndex) : "",
    search: searchIndex > -1 ? href.slice(searchIndex, hashIndex === -1 ? void 0 : hashIndex) : "",
    state: state || { [stateIndexKey]: 0, key: addedKey, __TSR_key: addedKey }
  };
}
function createRandomKey() {
  return (Math.random() + 1).toString(36).substring(7);
}

// node_modules/@tanstack/router-core/dist/esm/utils.js
function last(arr) {
  return arr[arr.length - 1];
}
function isFunction(d) {
  return typeof d === "function";
}
function functionalUpdate(updater, previous) {
  if (isFunction(updater)) {
    return updater(previous);
  }
  return updater;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(prev, _next) {
  if (prev === _next) {
    return prev;
  }
  const next = _next;
  const array = isPlainArray(prev) && isPlainArray(next);
  if (!array && !(isPlainObject(prev) && isPlainObject(next))) return next;
  const prevItems = array ? prev : getEnumerableOwnKeys(prev);
  if (!prevItems) return next;
  const nextItems = array ? next : getEnumerableOwnKeys(next);
  if (!nextItems) return next;
  const prevSize = prevItems.length;
  const nextSize = nextItems.length;
  const copy = array ? new Array(nextSize) : {};
  let equalItems = 0;
  for (let i = 0; i < nextSize; i++) {
    const key = array ? i : nextItems[i];
    const p = prev[key];
    const n = next[key];
    if (p === n) {
      copy[key] = p;
      if (array ? i < prevSize : hasOwn.call(prev, key)) equalItems++;
      continue;
    }
    if (p === null || n === null || typeof p !== "object" || typeof n !== "object") {
      copy[key] = n;
      continue;
    }
    const v = replaceEqualDeep(p, n);
    copy[key] = v;
    if (v === p) equalItems++;
  }
  return prevSize === nextSize && equalItems === prevSize ? prev : copy;
}
function getEnumerableOwnKeys(o) {
  const keys = [];
  const names = Object.getOwnPropertyNames(o);
  for (const name of names) {
    if (!Object.prototype.propertyIsEnumerable.call(o, name)) return false;
    keys.push(name);
  }
  const symbols = Object.getOwnPropertySymbols(o);
  for (const symbol of symbols) {
    if (!Object.prototype.propertyIsEnumerable.call(o, symbol)) return false;
    keys.push(symbol);
  }
  return keys;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function deepEqual(a, b, opts) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0, l = a.length; i < l; i++) {
      if (!deepEqual(a[i], b[i], opts)) return false;
    }
    return true;
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const ignoreUndefined = opts?.ignoreUndefined ?? true;
    if (opts?.partial) {
      for (const k in b) {
        if (!ignoreUndefined || b[k] !== void 0) {
          if (!deepEqual(a[k], b[k], opts)) return false;
        }
      }
      return true;
    }
    let aCount = 0;
    if (!ignoreUndefined) {
      aCount = Object.keys(a).length;
    } else {
      for (const k in a) {
        if (a[k] !== void 0) aCount++;
      }
    }
    let bCount = 0;
    for (const k in b) {
      if (!ignoreUndefined || b[k] !== void 0) {
        bCount++;
        if (bCount > aCount || !deepEqual(a[k], b[k], opts)) return false;
      }
    }
    return aCount === bCount;
  }
  return false;
}
function createControlledPromise(onResolve) {
  let resolveLoadPromise;
  let rejectLoadPromise;
  const controlledPromise = new Promise((resolve, reject) => {
    resolveLoadPromise = resolve;
    rejectLoadPromise = reject;
  });
  controlledPromise.status = "pending";
  controlledPromise.resolve = (value) => {
    controlledPromise.status = "resolved";
    controlledPromise.value = value;
    resolveLoadPromise(value);
    onResolve?.(value);
  };
  controlledPromise.reject = (e) => {
    controlledPromise.status = "rejected";
    rejectLoadPromise(e);
  };
  return controlledPromise;
}
function isPromise(value) {
  return Boolean(
    value && typeof value === "object" && typeof value.then === "function"
  );
}
function findLast(array, predicate) {
  for (let i = array.length - 1; i >= 0; i--) {
    const item = array[i];
    if (predicate(item)) return item;
  }
  return void 0;
}
var DECODE_IGNORE_LIST = Array.from(
  (/* @__PURE__ */ new Map([
    ["%", "%25"],
    ["\\", "%5C"],
    ["/", "%2F"],
    [";", "%3B"],
    [":", "%3A"],
    ["@", "%40"],
    ["&", "%26"],
    ["=", "%3D"],
    ["+", "%2B"],
    ["$", "%24"],
    [",", "%2C"]
  ])).values()
);
function decodePathSegment(part, decodeIgnore = DECODE_IGNORE_LIST, startIndex = 0) {
  function decode2(part2) {
    try {
      return decodeURIComponent(part2);
    } catch {
      return part2.replaceAll(/%[0-9A-Fa-f]{2}/g, (match) => {
        try {
          return decodeURIComponent(match);
        } catch {
          return match;
        }
      });
    }
  }
  if (part === "" || !part.match(/%[0-9A-Fa-f]{2}/g)) return part;
  for (let i = startIndex; i < decodeIgnore.length; i++) {
    const char = decodeIgnore[i];
    if (char && part.includes(char)) {
      const partsToDecode = part.split(char);
      const partsToJoin = [];
      for (const partToDecode of partsToDecode) {
        partsToJoin.push(decodePathSegment(partToDecode, decodeIgnore, i + 1));
      }
      return partsToJoin.join(char);
    }
  }
  return decode2(part);
}

// node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// node_modules/@tanstack/router-core/dist/esm/path.js
var SEGMENT_TYPE_PATHNAME = 0;
var SEGMENT_TYPE_PARAM = 1;
var SEGMENT_TYPE_WILDCARD = 2;
var SEGMENT_TYPE_OPTIONAL_PARAM = 3;
function joinPaths(paths) {
  return cleanPath(
    paths.filter((val) => {
      return val !== void 0;
    }).join("/")
  );
}
function cleanPath(path) {
  return path.replace(/\/{2,}/g, "/");
}
function trimPathLeft(path) {
  return path === "/" ? path : path.replace(/^\/{1,}/, "");
}
function trimPathRight(path) {
  return path === "/" ? path : path.replace(/\/{1,}$/, "");
}
function trimPath(path) {
  return trimPathRight(trimPathLeft(path));
}
function removeTrailingSlash(value, basepath) {
  if (value?.endsWith("/") && value !== "/" && value !== `${basepath}/`) {
    return value.slice(0, -1);
  }
  return value;
}
function exactPathTest(pathName1, pathName2, basepath) {
  return removeTrailingSlash(pathName1, basepath) === removeTrailingSlash(pathName2, basepath);
}
function segmentToString(segment) {
  const { type, value } = segment;
  if (type === SEGMENT_TYPE_PATHNAME) {
    return value;
  }
  const { prefixSegment, suffixSegment } = segment;
  if (type === SEGMENT_TYPE_PARAM) {
    const param = value.substring(1);
    if (prefixSegment && suffixSegment) {
      return `${prefixSegment}{$${param}}${suffixSegment}`;
    } else if (prefixSegment) {
      return `${prefixSegment}{$${param}}`;
    } else if (suffixSegment) {
      return `{$${param}}${suffixSegment}`;
    }
  }
  if (type === SEGMENT_TYPE_OPTIONAL_PARAM) {
    const param = value.substring(1);
    if (prefixSegment && suffixSegment) {
      return `${prefixSegment}{-$${param}}${suffixSegment}`;
    } else if (prefixSegment) {
      return `${prefixSegment}{-$${param}}`;
    } else if (suffixSegment) {
      return `{-$${param}}${suffixSegment}`;
    }
    return `{-$${param}}`;
  }
  if (type === SEGMENT_TYPE_WILDCARD) {
    if (prefixSegment && suffixSegment) {
      return `${prefixSegment}{$}${suffixSegment}`;
    } else if (prefixSegment) {
      return `${prefixSegment}{$}`;
    } else if (suffixSegment) {
      return `{$}${suffixSegment}`;
    }
  }
  return value;
}
function resolvePath({
  base,
  to,
  trailingSlash = "never",
  parseCache
}) {
  let baseSegments = parsePathname(base, parseCache).slice();
  const toSegments = parsePathname(to, parseCache);
  if (baseSegments.length > 1 && last(baseSegments)?.value === "/") {
    baseSegments.pop();
  }
  for (let index = 0, length = toSegments.length; index < length; index++) {
    const toSegment = toSegments[index];
    const value = toSegment.value;
    if (value === "/") {
      if (!index) {
        baseSegments = [toSegment];
      } else if (index === length - 1) {
        baseSegments.push(toSegment);
      } else ;
    } else if (value === "..") {
      baseSegments.pop();
    } else if (value === ".") ;
    else {
      baseSegments.push(toSegment);
    }
  }
  if (baseSegments.length > 1) {
    if (last(baseSegments).value === "/") {
      if (trailingSlash === "never") {
        baseSegments.pop();
      }
    } else if (trailingSlash === "always") {
      baseSegments.push({ type: SEGMENT_TYPE_PATHNAME, value: "/" });
    }
  }
  const segmentValues = baseSegments.map(segmentToString);
  const joined = joinPaths(segmentValues);
  return joined;
}
var parsePathname = (pathname, cache) => {
  if (!pathname) return [];
  const cached = cache?.get(pathname);
  if (cached) return cached;
  const parsed = baseParsePathname(pathname);
  cache?.set(pathname, parsed);
  return parsed;
};
var PARAM_RE = /^\$.{1,}$/;
var PARAM_W_CURLY_BRACES_RE = /^(.*?)\{(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/;
var OPTIONAL_PARAM_W_CURLY_BRACES_RE = /^(.*?)\{-(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/;
var WILDCARD_RE = /^\$$/;
var WILDCARD_W_CURLY_BRACES_RE = /^(.*?)\{\$\}(.*)$/;
function baseParsePathname(pathname) {
  pathname = cleanPath(pathname);
  const segments = [];
  if (pathname.slice(0, 1) === "/") {
    pathname = pathname.substring(1);
    segments.push({
      type: SEGMENT_TYPE_PATHNAME,
      value: "/"
    });
  }
  if (!pathname) {
    return segments;
  }
  const split = pathname.split("/").filter(Boolean);
  segments.push(
    ...split.map((part) => {
      const wildcardBracesMatch = part.match(WILDCARD_W_CURLY_BRACES_RE);
      if (wildcardBracesMatch) {
        const prefix2 = wildcardBracesMatch[1];
        const suffix = wildcardBracesMatch[2];
        return {
          type: SEGMENT_TYPE_WILDCARD,
          value: "$",
          prefixSegment: prefix2 || void 0,
          suffixSegment: suffix || void 0
        };
      }
      const optionalParamBracesMatch = part.match(
        OPTIONAL_PARAM_W_CURLY_BRACES_RE
      );
      if (optionalParamBracesMatch) {
        const prefix2 = optionalParamBracesMatch[1];
        const paramName = optionalParamBracesMatch[2];
        const suffix = optionalParamBracesMatch[3];
        return {
          type: SEGMENT_TYPE_OPTIONAL_PARAM,
          value: paramName,
          // Now just $paramName (no prefix)
          prefixSegment: prefix2 || void 0,
          suffixSegment: suffix || void 0
        };
      }
      const paramBracesMatch = part.match(PARAM_W_CURLY_BRACES_RE);
      if (paramBracesMatch) {
        const prefix2 = paramBracesMatch[1];
        const paramName = paramBracesMatch[2];
        const suffix = paramBracesMatch[3];
        return {
          type: SEGMENT_TYPE_PARAM,
          value: "" + paramName,
          prefixSegment: prefix2 || void 0,
          suffixSegment: suffix || void 0
        };
      }
      if (PARAM_RE.test(part)) {
        const paramName = part.substring(1);
        return {
          type: SEGMENT_TYPE_PARAM,
          value: "$" + paramName,
          prefixSegment: void 0,
          suffixSegment: void 0
        };
      }
      if (WILDCARD_RE.test(part)) {
        return {
          type: SEGMENT_TYPE_WILDCARD,
          value: "$",
          prefixSegment: void 0,
          suffixSegment: void 0
        };
      }
      return {
        type: SEGMENT_TYPE_PATHNAME,
        value: decodePathSegment(part)
      };
    })
  );
  if (pathname.slice(-1) === "/") {
    pathname = pathname.substring(1);
    segments.push({
      type: SEGMENT_TYPE_PATHNAME,
      value: "/"
    });
  }
  return segments;
}
function interpolatePath({
  path,
  params,
  leaveWildcards,
  leaveParams,
  decodeCharMap,
  parseCache
}) {
  const interpolatedPathSegments = parsePathname(path, parseCache);
  function encodeParam(key) {
    const value = params[key];
    const isValueString = typeof value === "string";
    if (key === "*" || key === "_splat") {
      return isValueString ? encodeURI(value) : value;
    } else {
      return isValueString ? encodePathParam(value, decodeCharMap) : value;
    }
  }
  let isMissingParams = false;
  const usedParams = {};
  const interpolatedPath = joinPaths(
    interpolatedPathSegments.map((segment) => {
      if (segment.type === SEGMENT_TYPE_PATHNAME) {
        return segment.value;
      }
      if (segment.type === SEGMENT_TYPE_WILDCARD) {
        usedParams._splat = params._splat;
        usedParams["*"] = params._splat;
        const segmentPrefix = segment.prefixSegment || "";
        const segmentSuffix = segment.suffixSegment || "";
        if (!params._splat) {
          isMissingParams = true;
          if (leaveWildcards) {
            return `${segmentPrefix}${segment.value}${segmentSuffix}`;
          }
          if (segmentPrefix || segmentSuffix) {
            return `${segmentPrefix}${segmentSuffix}`;
          }
          return void 0;
        }
        const value = encodeParam("_splat");
        if (leaveWildcards) {
          return `${segmentPrefix}${segment.value}${value ?? ""}${segmentSuffix}`;
        }
        return `${segmentPrefix}${value}${segmentSuffix}`;
      }
      if (segment.type === SEGMENT_TYPE_PARAM) {
        const key = segment.value.substring(1);
        if (!isMissingParams && !(key in params)) {
          isMissingParams = true;
        }
        usedParams[key] = params[key];
        const segmentPrefix = segment.prefixSegment || "";
        const segmentSuffix = segment.suffixSegment || "";
        if (leaveParams) {
          const value = encodeParam(segment.value);
          return `${segmentPrefix}${segment.value}${value ?? ""}${segmentSuffix}`;
        }
        return `${segmentPrefix}${encodeParam(key) ?? "undefined"}${segmentSuffix}`;
      }
      if (segment.type === SEGMENT_TYPE_OPTIONAL_PARAM) {
        const key = segment.value.substring(1);
        const segmentPrefix = segment.prefixSegment || "";
        const segmentSuffix = segment.suffixSegment || "";
        if (!(key in params) || params[key] == null) {
          if (leaveWildcards) {
            return `${segmentPrefix}${key}${segmentSuffix}`;
          }
          if (segmentPrefix || segmentSuffix) {
            return `${segmentPrefix}${segmentSuffix}`;
          }
          return void 0;
        }
        usedParams[key] = params[key];
        if (leaveParams) {
          const value = encodeParam(segment.value);
          return `${segmentPrefix}${segment.value}${value ?? ""}${segmentSuffix}`;
        }
        if (leaveWildcards) {
          return `${segmentPrefix}${key}${encodeParam(key) ?? ""}${segmentSuffix}`;
        }
        return `${segmentPrefix}${encodeParam(key) ?? ""}${segmentSuffix}`;
      }
      return segment.value;
    })
  );
  return { usedParams, interpolatedPath, isMissingParams };
}
function encodePathParam(value, decodeCharMap) {
  let encoded = encodeURIComponent(value);
  if (decodeCharMap) {
    for (const [encodedChar, char] of decodeCharMap) {
      encoded = encoded.replaceAll(encodedChar, char);
    }
  }
  return encoded;
}
function matchPathname(currentPathname, matchLocation, parseCache) {
  const pathParams = matchByPath(currentPathname, matchLocation, parseCache);
  if (matchLocation.to && !pathParams) {
    return;
  }
  return pathParams ?? {};
}
function matchByPath(from, {
  to,
  fuzzy,
  caseSensitive
}, parseCache) {
  const stringTo = to;
  const baseSegments = parsePathname(
    from.startsWith("/") ? from : `/${from}`,
    parseCache
  );
  const routeSegments = parsePathname(
    stringTo.startsWith("/") ? stringTo : `/${stringTo}`,
    parseCache
  );
  const params = {};
  const result = isMatch(
    baseSegments,
    routeSegments,
    params,
    fuzzy,
    caseSensitive
  );
  return result ? params : void 0;
}
function isMatch(baseSegments, routeSegments, params, fuzzy, caseSensitive) {
  let baseIndex = 0;
  let routeIndex = 0;
  while (baseIndex < baseSegments.length || routeIndex < routeSegments.length) {
    const baseSegment = baseSegments[baseIndex];
    const routeSegment = routeSegments[routeIndex];
    if (routeSegment) {
      if (routeSegment.type === SEGMENT_TYPE_WILDCARD) {
        const remainingBaseSegments = baseSegments.slice(baseIndex);
        let _splat;
        if (routeSegment.prefixSegment || routeSegment.suffixSegment) {
          if (!baseSegment) return false;
          const prefix2 = routeSegment.prefixSegment || "";
          const suffix = routeSegment.suffixSegment || "";
          const baseValue = baseSegment.value;
          if ("prefixSegment" in routeSegment) {
            if (!baseValue.startsWith(prefix2)) {
              return false;
            }
          }
          if ("suffixSegment" in routeSegment) {
            if (!baseSegments[baseSegments.length - 1]?.value.endsWith(suffix)) {
              return false;
            }
          }
          let rejoinedSplat = decodeURI(
            joinPaths(remainingBaseSegments.map((d) => d.value))
          );
          if (prefix2 && rejoinedSplat.startsWith(prefix2)) {
            rejoinedSplat = rejoinedSplat.slice(prefix2.length);
          }
          if (suffix && rejoinedSplat.endsWith(suffix)) {
            rejoinedSplat = rejoinedSplat.slice(
              0,
              rejoinedSplat.length - suffix.length
            );
          }
          _splat = rejoinedSplat;
        } else {
          _splat = decodeURI(
            joinPaths(remainingBaseSegments.map((d) => d.value))
          );
        }
        params["*"] = _splat;
        params["_splat"] = _splat;
        return true;
      }
      if (routeSegment.type === SEGMENT_TYPE_PATHNAME) {
        if (routeSegment.value === "/" && !baseSegment?.value) {
          routeIndex++;
          continue;
        }
        if (baseSegment) {
          if (caseSensitive) {
            if (routeSegment.value !== baseSegment.value) {
              return false;
            }
          } else if (routeSegment.value.toLowerCase() !== baseSegment.value.toLowerCase()) {
            return false;
          }
          baseIndex++;
          routeIndex++;
          continue;
        } else {
          return false;
        }
      }
      if (routeSegment.type === SEGMENT_TYPE_PARAM) {
        if (!baseSegment) {
          return false;
        }
        if (baseSegment.value === "/") {
          return false;
        }
        let _paramValue = "";
        let matched = false;
        if (routeSegment.prefixSegment || routeSegment.suffixSegment) {
          const prefix2 = routeSegment.prefixSegment || "";
          const suffix = routeSegment.suffixSegment || "";
          const baseValue = baseSegment.value;
          if (prefix2 && !baseValue.startsWith(prefix2)) {
            return false;
          }
          if (suffix && !baseValue.endsWith(suffix)) {
            return false;
          }
          let paramValue = baseValue;
          if (prefix2 && paramValue.startsWith(prefix2)) {
            paramValue = paramValue.slice(prefix2.length);
          }
          if (suffix && paramValue.endsWith(suffix)) {
            paramValue = paramValue.slice(0, paramValue.length - suffix.length);
          }
          _paramValue = decodeURIComponent(paramValue);
          matched = true;
        } else {
          _paramValue = decodeURIComponent(baseSegment.value);
          matched = true;
        }
        if (matched) {
          params[routeSegment.value.substring(1)] = _paramValue;
          baseIndex++;
        }
        routeIndex++;
        continue;
      }
      if (routeSegment.type === SEGMENT_TYPE_OPTIONAL_PARAM) {
        if (!baseSegment) {
          routeIndex++;
          continue;
        }
        if (baseSegment.value === "/") {
          routeIndex++;
          continue;
        }
        let _paramValue = "";
        let matched = false;
        if (routeSegment.prefixSegment || routeSegment.suffixSegment) {
          const prefix2 = routeSegment.prefixSegment || "";
          const suffix = routeSegment.suffixSegment || "";
          const baseValue = baseSegment.value;
          if ((!prefix2 || baseValue.startsWith(prefix2)) && (!suffix || baseValue.endsWith(suffix))) {
            let paramValue = baseValue;
            if (prefix2 && paramValue.startsWith(prefix2)) {
              paramValue = paramValue.slice(prefix2.length);
            }
            if (suffix && paramValue.endsWith(suffix)) {
              paramValue = paramValue.slice(
                0,
                paramValue.length - suffix.length
              );
            }
            _paramValue = decodeURIComponent(paramValue);
            matched = true;
          }
        } else {
          let shouldMatchOptional = true;
          for (let lookAhead = routeIndex + 1; lookAhead < routeSegments.length; lookAhead++) {
            const futureRouteSegment = routeSegments[lookAhead];
            if (futureRouteSegment?.type === SEGMENT_TYPE_PATHNAME && futureRouteSegment.value === baseSegment.value) {
              shouldMatchOptional = false;
              break;
            }
            if (futureRouteSegment?.type === SEGMENT_TYPE_PARAM || futureRouteSegment?.type === SEGMENT_TYPE_WILDCARD) {
              if (baseSegments.length < routeSegments.length) {
                shouldMatchOptional = false;
              }
              break;
            }
          }
          if (shouldMatchOptional) {
            _paramValue = decodeURIComponent(baseSegment.value);
            matched = true;
          }
        }
        if (matched) {
          params[routeSegment.value.substring(1)] = _paramValue;
          baseIndex++;
        }
        routeIndex++;
        continue;
      }
    }
    if (baseIndex < baseSegments.length && routeIndex >= routeSegments.length) {
      params["**"] = joinPaths(
        baseSegments.slice(baseIndex).map((d) => d.value)
      );
      return !!fuzzy && routeSegments[routeSegments.length - 1]?.value !== "/";
    }
    if (routeIndex < routeSegments.length && baseIndex >= baseSegments.length) {
      for (let i = routeIndex; i < routeSegments.length; i++) {
        if (routeSegments[i]?.type !== SEGMENT_TYPE_OPTIONAL_PARAM) {
          return false;
        }
      }
      break;
    }
    break;
  }
  return true;
}

// node_modules/@tanstack/router-core/dist/esm/process-route-tree.js
var SLASH_SCORE = 0.75;
var STATIC_SEGMENT_SCORE = 1;
var REQUIRED_PARAM_BASE_SCORE = 0.5;
var OPTIONAL_PARAM_BASE_SCORE = 0.4;
var WILDCARD_PARAM_BASE_SCORE = 0.25;
var STATIC_AFTER_DYNAMIC_BONUS_SCORE = 0.2;
var BOTH_PRESENCE_BASE_SCORE = 0.05;
var PREFIX_PRESENCE_BASE_SCORE = 0.02;
var SUFFIX_PRESENCE_BASE_SCORE = 0.01;
var PREFIX_LENGTH_SCORE_MULTIPLIER = 2e-4;
var SUFFIX_LENGTH_SCORE_MULTIPLIER = 1e-4;
function handleParam(segment, baseScore) {
  if (segment.prefixSegment && segment.suffixSegment) {
    return baseScore + BOTH_PRESENCE_BASE_SCORE + PREFIX_LENGTH_SCORE_MULTIPLIER * segment.prefixSegment.length + SUFFIX_LENGTH_SCORE_MULTIPLIER * segment.suffixSegment.length;
  }
  if (segment.prefixSegment) {
    return baseScore + PREFIX_PRESENCE_BASE_SCORE + PREFIX_LENGTH_SCORE_MULTIPLIER * segment.prefixSegment.length;
  }
  if (segment.suffixSegment) {
    return baseScore + SUFFIX_PRESENCE_BASE_SCORE + SUFFIX_LENGTH_SCORE_MULTIPLIER * segment.suffixSegment.length;
  }
  return baseScore;
}
function sortRoutes(routes) {
  const scoredRoutes = [];
  routes.forEach((d, i) => {
    if (d.isRoot || !d.path) {
      return;
    }
    const trimmed = trimPathLeft(d.fullPath);
    let parsed = parsePathname(trimmed);
    let skip = 0;
    while (parsed.length > skip + 1 && parsed[skip]?.value === "/") {
      skip++;
    }
    if (skip > 0) parsed = parsed.slice(skip);
    let optionalParamCount = 0;
    let hasStaticAfter = false;
    const scores = parsed.map((segment, index) => {
      if (segment.value === "/") {
        return SLASH_SCORE;
      }
      if (segment.type === SEGMENT_TYPE_PATHNAME) {
        return STATIC_SEGMENT_SCORE;
      }
      let baseScore = void 0;
      if (segment.type === SEGMENT_TYPE_PARAM) {
        baseScore = REQUIRED_PARAM_BASE_SCORE;
      } else if (segment.type === SEGMENT_TYPE_OPTIONAL_PARAM) {
        baseScore = OPTIONAL_PARAM_BASE_SCORE;
        optionalParamCount++;
      } else {
        baseScore = WILDCARD_PARAM_BASE_SCORE;
      }
      for (let i2 = index + 1; i2 < parsed.length; i2++) {
        const nextSegment = parsed[i2];
        if (nextSegment.type === SEGMENT_TYPE_PATHNAME && nextSegment.value !== "/") {
          hasStaticAfter = true;
          return handleParam(
            segment,
            baseScore + STATIC_AFTER_DYNAMIC_BONUS_SCORE
          );
        }
      }
      return handleParam(segment, baseScore);
    });
    scoredRoutes.push({
      child: d,
      trimmed,
      parsed,
      index: i,
      scores,
      optionalParamCount,
      hasStaticAfter
    });
  });
  const flatRoutes = scoredRoutes.sort((a, b) => {
    const minLength = Math.min(a.scores.length, b.scores.length);
    for (let i = 0; i < minLength; i++) {
      if (a.scores[i] !== b.scores[i]) {
        return b.scores[i] - a.scores[i];
      }
    }
    if (a.scores.length !== b.scores.length) {
      if (a.optionalParamCount !== b.optionalParamCount) {
        if (a.hasStaticAfter === b.hasStaticAfter) {
          return a.optionalParamCount - b.optionalParamCount;
        } else if (a.hasStaticAfter && !b.hasStaticAfter) {
          return -1;
        } else if (!a.hasStaticAfter && b.hasStaticAfter) {
          return 1;
        }
      }
      return b.scores.length - a.scores.length;
    }
    for (let i = 0; i < minLength; i++) {
      if (a.parsed[i].value !== b.parsed[i].value) {
        return a.parsed[i].value > b.parsed[i].value ? 1 : -1;
      }
    }
    return a.index - b.index;
  }).map((d, i) => {
    d.child.rank = i;
    return d.child;
  });
  return flatRoutes;
}
function processRouteTree({
  routeTree,
  initRoute
}) {
  const routesById = {};
  const routesByPath = {};
  const recurseRoutes = (childRoutes) => {
    childRoutes.forEach((childRoute, i) => {
      initRoute?.(childRoute, i);
      const existingRoute = routesById[childRoute.id];
      invariant(
        !existingRoute,
        `Duplicate routes found with id: ${String(childRoute.id)}`
      );
      routesById[childRoute.id] = childRoute;
      if (!childRoute.isRoot && childRoute.path) {
        const trimmedFullPath = trimPathRight(childRoute.fullPath);
        if (!routesByPath[trimmedFullPath] || childRoute.fullPath.endsWith("/")) {
          routesByPath[trimmedFullPath] = childRoute;
        }
      }
      const children = childRoute.children;
      if (children?.length) {
        recurseRoutes(children);
      }
    });
  };
  recurseRoutes([routeTree]);
  const flatRoutes = sortRoutes(Object.values(routesById));
  return { routesById, routesByPath, flatRoutes };
}

// node_modules/@tanstack/router-core/dist/esm/not-found.js
function isNotFound(obj) {
  return !!obj?.isNotFound;
}

// node_modules/@tanstack/router-core/dist/esm/scroll-restoration.js
function getSafeSessionStorage() {
  try {
    if (typeof window !== "undefined" && typeof window.sessionStorage === "object") {
      return window.sessionStorage;
    }
  } catch {
  }
  return void 0;
}
var storageKey = "tsr-scroll-restoration-v1_3";
var throttle = (fn, wait) => {
  let timeout;
  return (...args) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn(...args);
        timeout = null;
      }, wait);
    }
  };
};
function createScrollRestorationCache() {
  const safeSessionStorage = getSafeSessionStorage();
  if (!safeSessionStorage) {
    return null;
  }
  const persistedState = safeSessionStorage.getItem(storageKey);
  let state = persistedState ? JSON.parse(persistedState) : {};
  return {
    state,
    // This setter is simply to make sure that we set the sessionStorage right
    // after the state is updated. It doesn't necessarily need to be a functional
    // update.
    set: (updater) => (state = functionalUpdate(updater, state) || state, safeSessionStorage.setItem(storageKey, JSON.stringify(state)))
  };
}
var scrollRestorationCache = createScrollRestorationCache();
var defaultGetScrollRestorationKey = (location) => {
  return location.state.__TSR_key || location.href;
};
function getCssSelector(el) {
  const path = [];
  let parent;
  while (parent = el.parentNode) {
    path.push(
      `${el.tagName}:nth-child(${Array.prototype.indexOf.call(parent.children, el) + 1})`
    );
    el = parent;
  }
  return `${path.reverse().join(" > ")}`.toLowerCase();
}
var ignoreScroll = false;
function restoreScroll({
  storageKey: storageKey2,
  key,
  behavior,
  shouldScrollRestoration,
  scrollToTopSelectors,
  location
}) {
  let byKey;
  try {
    byKey = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
  } catch (error) {
    console.error(error);
    return;
  }
  const resolvedKey = key || window.history.state?.__TSR_key;
  const elementEntries = byKey[resolvedKey];
  ignoreScroll = true;
  scroll: {
    if (shouldScrollRestoration && elementEntries && Object.keys(elementEntries).length > 0) {
      for (const elementSelector in elementEntries) {
        const entry = elementEntries[elementSelector];
        if (elementSelector === "window") {
          window.scrollTo({
            top: entry.scrollY,
            left: entry.scrollX,
            behavior
          });
        } else if (elementSelector) {
          const element = document.querySelector(elementSelector);
          if (element) {
            element.scrollLeft = entry.scrollX;
            element.scrollTop = entry.scrollY;
          }
        }
      }
      break scroll;
    }
    const hash = (location ?? window.location).hash.split("#", 2)[1];
    if (hash) {
      const hashScrollIntoViewOptions = window.history.state?.__hashScrollIntoViewOptions ?? true;
      if (hashScrollIntoViewOptions) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView(hashScrollIntoViewOptions);
        }
      }
      break scroll;
    }
    const scrollOptions = { top: 0, left: 0, behavior };
    window.scrollTo(scrollOptions);
    if (scrollToTopSelectors) {
      for (const selector of scrollToTopSelectors) {
        if (selector === "window") continue;
        const element = typeof selector === "function" ? selector() : document.querySelector(selector);
        if (element) element.scrollTo(scrollOptions);
      }
    }
  }
  ignoreScroll = false;
}
function setupScrollRestoration(router, force) {
  if (!scrollRestorationCache && !router.isServer) {
    return;
  }
  const shouldScrollRestoration = force ?? router.options.scrollRestoration ?? false;
  if (shouldScrollRestoration) {
    router.isScrollRestoring = true;
  }
  if (router.isServer || router.isScrollRestorationSetup || !scrollRestorationCache) {
    return;
  }
  router.isScrollRestorationSetup = true;
  ignoreScroll = false;
  const getKey = router.options.getScrollRestorationKey || defaultGetScrollRestorationKey;
  window.history.scrollRestoration = "manual";
  const onScroll = (event) => {
    if (ignoreScroll || !router.isScrollRestoring) {
      return;
    }
    let elementSelector = "";
    if (event.target === document || event.target === window) {
      elementSelector = "window";
    } else {
      const attrId = event.target.getAttribute(
        "data-scroll-restoration-id"
      );
      if (attrId) {
        elementSelector = `[data-scroll-restoration-id="${attrId}"]`;
      } else {
        elementSelector = getCssSelector(event.target);
      }
    }
    const restoreKey = getKey(router.state.location);
    scrollRestorationCache.set((state) => {
      const keyEntry = state[restoreKey] ||= {};
      const elementEntry = keyEntry[elementSelector] ||= {};
      if (elementSelector === "window") {
        elementEntry.scrollX = window.scrollX || 0;
        elementEntry.scrollY = window.scrollY || 0;
      } else if (elementSelector) {
        const element = document.querySelector(elementSelector);
        if (element) {
          elementEntry.scrollX = element.scrollLeft || 0;
          elementEntry.scrollY = element.scrollTop || 0;
        }
      }
      return state;
    });
  };
  if (typeof document !== "undefined") {
    document.addEventListener("scroll", throttle(onScroll, 100), true);
  }
  router.subscribe("onRendered", (event) => {
    const cacheKey = getKey(event.toLocation);
    if (!router.resetNextScroll) {
      router.resetNextScroll = true;
      return;
    }
    if (typeof router.options.scrollRestoration === "function") {
      const shouldRestore = router.options.scrollRestoration({
        location: router.latestLocation
      });
      if (!shouldRestore) {
        return;
      }
    }
    restoreScroll({
      storageKey,
      key: cacheKey,
      behavior: router.options.scrollRestorationBehavior,
      shouldScrollRestoration: router.isScrollRestoring,
      scrollToTopSelectors: router.options.scrollToTopSelectors,
      location: router.history.location
    });
    if (router.isScrollRestoring) {
      scrollRestorationCache.set((state) => {
        state[cacheKey] ||= {};
        return state;
      });
    }
  });
}
function handleHashScroll(router) {
  if (typeof document !== "undefined" && document.querySelector) {
    const hashScrollIntoViewOptions = router.state.location.state.__hashScrollIntoViewOptions ?? true;
    if (hashScrollIntoViewOptions && router.state.location.hash !== "") {
      const el = document.getElementById(router.state.location.hash);
      if (el) {
        el.scrollIntoView(hashScrollIntoViewOptions);
      }
    }
  }
}

// node_modules/@tanstack/router-core/dist/esm/qss.js
function encode(obj, stringify = String) {
  const result = new URLSearchParams();
  for (const key in obj) {
    const val = obj[key];
    if (val !== void 0) {
      result.set(key, stringify(val));
    }
  }
  return result.toString();
}
function toValue(str) {
  if (!str) return "";
  if (str === "false") return false;
  if (str === "true") return true;
  return +str * 0 === 0 && +str + "" === str ? +str : str;
}
function decode(str) {
  const searchParams = new URLSearchParams(str);
  const result = {};
  for (const [key, value] of searchParams.entries()) {
    const previousValue = result[key];
    if (previousValue == null) {
      result[key] = toValue(value);
    } else if (Array.isArray(previousValue)) {
      previousValue.push(toValue(value));
    } else {
      result[key] = [previousValue, toValue(value)];
    }
  }
  return result;
}

// node_modules/@tanstack/router-core/dist/esm/searchParams.js
var defaultParseSearch = parseSearchWith(JSON.parse);
var defaultStringifySearch = stringifySearchWith(
  JSON.stringify,
  JSON.parse
);
function parseSearchWith(parser) {
  return (searchStr) => {
    if (searchStr[0] === "?") {
      searchStr = searchStr.substring(1);
    }
    const query = decode(searchStr);
    for (const key in query) {
      const value = query[key];
      if (typeof value === "string") {
        try {
          query[key] = parser(value);
        } catch (_err) {
        }
      }
    }
    return query;
  };
}
function stringifySearchWith(stringify, parser) {
  const hasParser = typeof parser === "function";
  function stringifyValue(val) {
    if (typeof val === "object" && val !== null) {
      try {
        return stringify(val);
      } catch (_err) {
      }
    } else if (hasParser && typeof val === "string") {
      try {
        parser(val);
        return stringify(val);
      } catch (_err) {
      }
    }
    return val;
  }
  return (search) => {
    const searchStr = encode(search, stringifyValue);
    return searchStr ? `?${searchStr}` : "";
  };
}

// node_modules/@tanstack/router-core/dist/esm/root.js
var rootRouteId = "__root__";

// node_modules/@tanstack/router-core/dist/esm/redirect.js
function redirect(opts) {
  opts.statusCode = opts.statusCode || opts.code || 307;
  if (!opts.reloadDocument && typeof opts.href === "string") {
    try {
      new URL(opts.href);
      opts.reloadDocument = true;
    } catch {
    }
  }
  const headers = new Headers(opts.headers);
  if (opts.href && headers.get("Location") === null) {
    headers.set("Location", opts.href);
  }
  const response = new Response(null, {
    status: opts.statusCode,
    headers
  });
  response.options = opts;
  if (opts.throw) {
    throw response;
  }
  return response;
}
function isRedirect(obj) {
  return obj instanceof Response && !!obj.options;
}

// node_modules/@tanstack/router-core/dist/esm/lru-cache.js
function createLRUCache(max) {
  const cache = /* @__PURE__ */ new Map();
  let oldest;
  let newest;
  const touch = (entry) => {
    if (!entry.next) return;
    if (!entry.prev) {
      entry.next.prev = void 0;
      oldest = entry.next;
      entry.next = void 0;
      if (newest) {
        entry.prev = newest;
        newest.next = entry;
      }
    } else {
      entry.prev.next = entry.next;
      entry.next.prev = entry.prev;
      entry.next = void 0;
      if (newest) {
        newest.next = entry;
        entry.prev = newest;
      }
    }
    newest = entry;
  };
  return {
    get(key) {
      const entry = cache.get(key);
      if (!entry) return void 0;
      touch(entry);
      return entry.value;
    },
    set(key, value) {
      if (cache.size >= max && oldest) {
        const toDelete = oldest;
        cache.delete(toDelete.key);
        if (toDelete.next) {
          oldest = toDelete.next;
          toDelete.next.prev = void 0;
        }
        if (toDelete === newest) {
          newest = void 0;
        }
      }
      const existing = cache.get(key);
      if (existing) {
        existing.value = value;
        touch(existing);
      } else {
        const entry = { key, value, prev: newest };
        if (newest) newest.next = entry;
        newest = entry;
        if (!oldest) oldest = entry;
        cache.set(key, entry);
      }
    }
  };
}

// node_modules/@tanstack/router-core/dist/esm/load-matches.js
var triggerOnReady = (inner) => {
  if (!inner.rendered) {
    inner.rendered = true;
    return inner.onReady?.();
  }
};
var resolvePreload = (inner, matchId) => {
  return !!(inner.preload && !inner.router.state.matches.some((d) => d.id === matchId));
};
var _handleNotFound = (inner, err) => {
  const routeCursor = inner.router.routesById[err.routeId ?? ""] ?? inner.router.routeTree;
  if (!routeCursor.options.notFoundComponent && inner.router.options?.defaultNotFoundComponent) {
    routeCursor.options.notFoundComponent = inner.router.options.defaultNotFoundComponent;
  }
  invariant(
    routeCursor.options.notFoundComponent,
    "No notFoundComponent found. Please set a notFoundComponent on your route or provide a defaultNotFoundComponent to the router."
  );
  const matchForRoute = inner.matches.find((m) => m.routeId === routeCursor.id);
  invariant(matchForRoute, "Could not find match for route: " + routeCursor.id);
  inner.updateMatch(matchForRoute.id, (prev) => ({
    ...prev,
    status: "notFound",
    error: err,
    isFetching: false
  }));
  if (err.routerCode === "BEFORE_LOAD" && routeCursor.parentRoute) {
    err.routeId = routeCursor.parentRoute.id;
    _handleNotFound(inner, err);
  }
};
var handleRedirectAndNotFound = (inner, match, err) => {
  if (!isRedirect(err) && !isNotFound(err)) return;
  if (isRedirect(err) && err.redirectHandled && !err.options.reloadDocument) {
    throw err;
  }
  if (match) {
    match._nonReactive.beforeLoadPromise?.resolve();
    match._nonReactive.loaderPromise?.resolve();
    match._nonReactive.beforeLoadPromise = void 0;
    match._nonReactive.loaderPromise = void 0;
    const status = isRedirect(err) ? "redirected" : "notFound";
    inner.updateMatch(match.id, (prev) => ({
      ...prev,
      status,
      isFetching: false,
      error: err
    }));
    if (isNotFound(err) && !err.routeId) {
      err.routeId = match.routeId;
    }
    match._nonReactive.loadPromise?.resolve();
  }
  if (isRedirect(err)) {
    inner.rendered = true;
    err.options._fromLocation = inner.location;
    err.redirectHandled = true;
    err = inner.router.resolveRedirect(err);
    throw err;
  } else {
    _handleNotFound(inner, err);
    throw err;
  }
};
var shouldSkipLoader = (inner, matchId) => {
  const match = inner.router.getMatch(matchId);
  if (!inner.router.isServer && match._nonReactive.dehydrated) {
    return true;
  }
  if (inner.router.isServer && match.ssr === false) {
    return true;
  }
  return false;
};
var handleSerialError = (inner, index, err, routerCode) => {
  const { id: matchId, routeId } = inner.matches[index];
  const route = inner.router.looseRoutesById[routeId];
  if (err instanceof Promise) {
    throw err;
  }
  err.routerCode = routerCode;
  inner.firstBadMatchIndex ??= index;
  handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), err);
  try {
    route.options.onError?.(err);
  } catch (errorHandlerErr) {
    err = errorHandlerErr;
    handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), err);
  }
  inner.updateMatch(matchId, (prev) => {
    prev._nonReactive.beforeLoadPromise?.resolve();
    prev._nonReactive.beforeLoadPromise = void 0;
    prev._nonReactive.loadPromise?.resolve();
    return {
      ...prev,
      error: err,
      status: "error",
      isFetching: false,
      updatedAt: Date.now(),
      abortController: new AbortController()
    };
  });
};
var isBeforeLoadSsr = (inner, matchId, index, route) => {
  const existingMatch = inner.router.getMatch(matchId);
  const parentMatchId = inner.matches[index - 1]?.id;
  const parentMatch = parentMatchId ? inner.router.getMatch(parentMatchId) : void 0;
  if (inner.router.isShell()) {
    existingMatch.ssr = matchId === rootRouteId;
    return;
  }
  if (parentMatch?.ssr === false) {
    existingMatch.ssr = false;
    return;
  }
  const parentOverride = (tempSsr2) => {
    if (tempSsr2 === true && parentMatch?.ssr === "data-only") {
      return "data-only";
    }
    return tempSsr2;
  };
  const defaultSsr = inner.router.options.defaultSsr ?? true;
  if (route.options.ssr === void 0) {
    existingMatch.ssr = parentOverride(defaultSsr);
    return;
  }
  if (typeof route.options.ssr !== "function") {
    existingMatch.ssr = parentOverride(route.options.ssr);
    return;
  }
  const { search, params } = existingMatch;
  const ssrFnContext = {
    search: makeMaybe(search, existingMatch.searchError),
    params: makeMaybe(params, existingMatch.paramsError),
    location: inner.location,
    matches: inner.matches.map((match) => ({
      index: match.index,
      pathname: match.pathname,
      fullPath: match.fullPath,
      staticData: match.staticData,
      id: match.id,
      routeId: match.routeId,
      search: makeMaybe(match.search, match.searchError),
      params: makeMaybe(match.params, match.paramsError),
      ssr: match.ssr
    }))
  };
  const tempSsr = route.options.ssr(ssrFnContext);
  if (isPromise(tempSsr)) {
    return tempSsr.then((ssr) => {
      existingMatch.ssr = parentOverride(ssr ?? defaultSsr);
    });
  }
  existingMatch.ssr = parentOverride(tempSsr ?? defaultSsr);
  return;
};
var setupPendingTimeout = (inner, matchId, route, match) => {
  if (match._nonReactive.pendingTimeout !== void 0) return;
  const pendingMs = route.options.pendingMs ?? inner.router.options.defaultPendingMs;
  const shouldPending = !!(inner.onReady && !inner.router.isServer && !resolvePreload(inner, matchId) && (route.options.loader || route.options.beforeLoad || routeNeedsPreload(route)) && typeof pendingMs === "number" && pendingMs !== Infinity && (route.options.pendingComponent ?? inner.router.options?.defaultPendingComponent));
  if (shouldPending) {
    const pendingTimeout = setTimeout(() => {
      triggerOnReady(inner);
    }, pendingMs);
    match._nonReactive.pendingTimeout = pendingTimeout;
  }
};
var preBeforeLoadSetup = (inner, matchId, route) => {
  const existingMatch = inner.router.getMatch(matchId);
  if (!existingMatch._nonReactive.beforeLoadPromise && !existingMatch._nonReactive.loaderPromise)
    return;
  setupPendingTimeout(inner, matchId, route, existingMatch);
  const then = () => {
    const match = inner.router.getMatch(matchId);
    if (match.preload && (match.status === "redirected" || match.status === "notFound")) {
      handleRedirectAndNotFound(inner, match, match.error);
    }
  };
  return existingMatch._nonReactive.beforeLoadPromise ? existingMatch._nonReactive.beforeLoadPromise.then(then) : then();
};
var executeBeforeLoad = (inner, matchId, index, route) => {
  const match = inner.router.getMatch(matchId);
  const prevLoadPromise = match._nonReactive.loadPromise;
  match._nonReactive.loadPromise = createControlledPromise(() => {
    prevLoadPromise?.resolve();
  });
  const { paramsError, searchError } = match;
  if (paramsError) {
    handleSerialError(inner, index, paramsError, "PARSE_PARAMS");
  }
  if (searchError) {
    handleSerialError(inner, index, searchError, "VALIDATE_SEARCH");
  }
  setupPendingTimeout(inner, matchId, route, match);
  const abortController = new AbortController();
  const parentMatchId = inner.matches[index - 1]?.id;
  const parentMatch = parentMatchId ? inner.router.getMatch(parentMatchId) : void 0;
  const parentMatchContext = parentMatch?.context ?? inner.router.options.context ?? void 0;
  const context = { ...parentMatchContext, ...match.__routeContext };
  let isPending = false;
  const pending = () => {
    if (isPending) return;
    isPending = true;
    inner.updateMatch(matchId, (prev) => ({
      ...prev,
      isFetching: "beforeLoad",
      fetchCount: prev.fetchCount + 1,
      abortController,
      context
    }));
  };
  const resolve = () => {
    match._nonReactive.beforeLoadPromise?.resolve();
    match._nonReactive.beforeLoadPromise = void 0;
    inner.updateMatch(matchId, (prev) => ({
      ...prev,
      isFetching: false
    }));
  };
  if (!route.options.beforeLoad) {
    batch(() => {
      pending();
      resolve();
    });
    return;
  }
  match._nonReactive.beforeLoadPromise = createControlledPromise();
  const { search, params, cause } = match;
  const preload = resolvePreload(inner, matchId);
  const beforeLoadFnContext = {
    search,
    abortController,
    params,
    preload,
    context,
    location: inner.location,
    navigate: (opts) => inner.router.navigate({
      ...opts,
      _fromLocation: inner.location
    }),
    buildLocation: inner.router.buildLocation,
    cause: preload ? "preload" : cause,
    matches: inner.matches,
    ...inner.router.options.additionalContext
  };
  const updateContext = (beforeLoadContext2) => {
    if (beforeLoadContext2 === void 0) {
      batch(() => {
        pending();
        resolve();
      });
      return;
    }
    if (isRedirect(beforeLoadContext2) || isNotFound(beforeLoadContext2)) {
      pending();
      handleSerialError(inner, index, beforeLoadContext2, "BEFORE_LOAD");
    }
    batch(() => {
      pending();
      inner.updateMatch(matchId, (prev) => ({
        ...prev,
        __beforeLoadContext: beforeLoadContext2,
        context: {
          ...prev.context,
          ...beforeLoadContext2
        }
      }));
      resolve();
    });
  };
  let beforeLoadContext;
  try {
    beforeLoadContext = route.options.beforeLoad(beforeLoadFnContext);
    if (isPromise(beforeLoadContext)) {
      pending();
      return beforeLoadContext.catch((err) => {
        handleSerialError(inner, index, err, "BEFORE_LOAD");
      }).then(updateContext);
    }
  } catch (err) {
    pending();
    handleSerialError(inner, index, err, "BEFORE_LOAD");
  }
  updateContext(beforeLoadContext);
  return;
};
var handleBeforeLoad = (inner, index) => {
  const { id: matchId, routeId } = inner.matches[index];
  const route = inner.router.looseRoutesById[routeId];
  const serverSsr = () => {
    if (inner.router.isServer) {
      const maybePromise = isBeforeLoadSsr(inner, matchId, index, route);
      if (isPromise(maybePromise)) return maybePromise.then(queueExecution);
    }
    return queueExecution();
  };
  const execute = () => executeBeforeLoad(inner, matchId, index, route);
  const queueExecution = () => {
    if (shouldSkipLoader(inner, matchId)) return;
    const result = preBeforeLoadSetup(inner, matchId, route);
    return isPromise(result) ? result.then(execute) : execute();
  };
  return serverSsr();
};
var executeHead = (inner, matchId, route) => {
  const match = inner.router.getMatch(matchId);
  if (!match) {
    return;
  }
  if (!route.options.head && !route.options.scripts && !route.options.headers) {
    return;
  }
  const assetContext = {
    matches: inner.matches,
    match,
    params: match.params,
    loaderData: match.loaderData
  };
  return Promise.all([
    route.options.head?.(assetContext),
    route.options.scripts?.(assetContext),
    route.options.headers?.(assetContext)
  ]).then(([headFnContent, scripts, headers]) => {
    const meta = headFnContent?.meta;
    const links = headFnContent?.links;
    const headScripts = headFnContent?.scripts;
    const styles = headFnContent?.styles;
    return {
      meta,
      links,
      headScripts,
      headers,
      scripts,
      styles
    };
  });
};
var getLoaderContext = (inner, matchId, index, route) => {
  const parentMatchPromise = inner.matchPromises[index - 1];
  const { params, loaderDeps, abortController, context, cause } = inner.router.getMatch(matchId);
  const preload = resolvePreload(inner, matchId);
  return {
    params,
    deps: loaderDeps,
    preload: !!preload,
    parentMatchPromise,
    abortController,
    context,
    location: inner.location,
    navigate: (opts) => inner.router.navigate({
      ...opts,
      _fromLocation: inner.location
    }),
    cause: preload ? "preload" : cause,
    route,
    ...inner.router.options.additionalContext
  };
};
var runLoader = async (inner, matchId, index, route) => {
  try {
    const match = inner.router.getMatch(matchId);
    try {
      if (!inner.router.isServer || match.ssr === true) {
        loadRouteChunk(route);
      }
      const loaderResult = route.options.loader?.(
        getLoaderContext(inner, matchId, index, route)
      );
      const loaderResultIsPromise = route.options.loader && isPromise(loaderResult);
      const willLoadSomething = !!(loaderResultIsPromise || route._lazyPromise || route._componentsPromise || route.options.head || route.options.scripts || route.options.headers || match._nonReactive.minPendingPromise);
      if (willLoadSomething) {
        inner.updateMatch(matchId, (prev) => ({
          ...prev,
          isFetching: "loader"
        }));
      }
      if (route.options.loader) {
        const loaderData = loaderResultIsPromise ? await loaderResult : loaderResult;
        handleRedirectAndNotFound(
          inner,
          inner.router.getMatch(matchId),
          loaderData
        );
        if (loaderData !== void 0) {
          inner.updateMatch(matchId, (prev) => ({
            ...prev,
            loaderData
          }));
        }
      }
      if (route._lazyPromise) await route._lazyPromise;
      const headResult = executeHead(inner, matchId, route);
      const head = headResult ? await headResult : void 0;
      const pendingPromise = match._nonReactive.minPendingPromise;
      if (pendingPromise) await pendingPromise;
      if (route._componentsPromise) await route._componentsPromise;
      inner.updateMatch(matchId, (prev) => ({
        ...prev,
        error: void 0,
        status: "success",
        isFetching: false,
        updatedAt: Date.now(),
        ...head
      }));
    } catch (e) {
      let error = e;
      const pendingPromise = match._nonReactive.minPendingPromise;
      if (pendingPromise) await pendingPromise;
      if (isNotFound(e)) {
        await route.options.notFoundComponent?.preload?.();
      }
      handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), e);
      try {
        route.options.onError?.(e);
      } catch (onErrorError) {
        error = onErrorError;
        handleRedirectAndNotFound(
          inner,
          inner.router.getMatch(matchId),
          onErrorError
        );
      }
      const headResult = executeHead(inner, matchId, route);
      const head = headResult ? await headResult : void 0;
      inner.updateMatch(matchId, (prev) => ({
        ...prev,
        error,
        status: "error",
        isFetching: false,
        ...head
      }));
    }
  } catch (err) {
    const match = inner.router.getMatch(matchId);
    if (match) {
      const headResult = executeHead(inner, matchId, route);
      if (headResult) {
        const head = await headResult;
        inner.updateMatch(matchId, (prev) => ({
          ...prev,
          ...head
        }));
      }
      match._nonReactive.loaderPromise = void 0;
    }
    handleRedirectAndNotFound(inner, match, err);
  }
};
var loadRouteMatch = async (inner, index) => {
  const { id: matchId, routeId } = inner.matches[index];
  let loaderShouldRunAsync = false;
  let loaderIsRunningAsync = false;
  const route = inner.router.looseRoutesById[routeId];
  if (shouldSkipLoader(inner, matchId)) {
    if (inner.router.isServer) {
      const headResult = executeHead(inner, matchId, route);
      if (headResult) {
        const head = await headResult;
        inner.updateMatch(matchId, (prev) => ({
          ...prev,
          ...head
        }));
      }
      return inner.router.getMatch(matchId);
    }
  } else {
    const prevMatch = inner.router.getMatch(matchId);
    if (prevMatch._nonReactive.loaderPromise) {
      if (prevMatch.status === "success" && !inner.sync && !prevMatch.preload) {
        return prevMatch;
      }
      await prevMatch._nonReactive.loaderPromise;
      const match2 = inner.router.getMatch(matchId);
      if (match2.error) {
        handleRedirectAndNotFound(inner, match2, match2.error);
      }
    } else {
      const age = Date.now() - prevMatch.updatedAt;
      const preload = resolvePreload(inner, matchId);
      const staleAge = preload ? route.options.preloadStaleTime ?? inner.router.options.defaultPreloadStaleTime ?? 3e4 : route.options.staleTime ?? inner.router.options.defaultStaleTime ?? 0;
      const shouldReloadOption = route.options.shouldReload;
      const shouldReload = typeof shouldReloadOption === "function" ? shouldReloadOption(getLoaderContext(inner, matchId, index, route)) : shouldReloadOption;
      const nextPreload = !!preload && !inner.router.state.matches.some((d) => d.id === matchId);
      const match2 = inner.router.getMatch(matchId);
      match2._nonReactive.loaderPromise = createControlledPromise();
      if (nextPreload !== match2.preload) {
        inner.updateMatch(matchId, (prev) => ({
          ...prev,
          preload: nextPreload
        }));
      }
      const { status, invalid } = match2;
      loaderShouldRunAsync = status === "success" && (invalid || (shouldReload ?? age > staleAge));
      if (preload && route.options.preload === false) ;
      else if (loaderShouldRunAsync && !inner.sync) {
        loaderIsRunningAsync = true;
        (async () => {
          try {
            await runLoader(inner, matchId, index, route);
            const match3 = inner.router.getMatch(matchId);
            match3._nonReactive.loaderPromise?.resolve();
            match3._nonReactive.loadPromise?.resolve();
            match3._nonReactive.loaderPromise = void 0;
          } catch (err) {
            if (isRedirect(err)) {
              await inner.router.navigate(err.options);
            }
          }
        })();
      } else if (status !== "success" || loaderShouldRunAsync && inner.sync) {
        await runLoader(inner, matchId, index, route);
      } else {
        const headResult = executeHead(inner, matchId, route);
        if (headResult) {
          const head = await headResult;
          inner.updateMatch(matchId, (prev) => ({
            ...prev,
            ...head
          }));
        }
      }
    }
  }
  const match = inner.router.getMatch(matchId);
  if (!loaderIsRunningAsync) {
    match._nonReactive.loaderPromise?.resolve();
    match._nonReactive.loadPromise?.resolve();
  }
  clearTimeout(match._nonReactive.pendingTimeout);
  match._nonReactive.pendingTimeout = void 0;
  if (!loaderIsRunningAsync) match._nonReactive.loaderPromise = void 0;
  match._nonReactive.dehydrated = void 0;
  const nextIsFetching = loaderIsRunningAsync ? match.isFetching : false;
  if (nextIsFetching !== match.isFetching || match.invalid !== false) {
    inner.updateMatch(matchId, (prev) => ({
      ...prev,
      isFetching: nextIsFetching,
      invalid: false
    }));
    return inner.router.getMatch(matchId);
  } else {
    return match;
  }
};
async function loadMatches(arg) {
  const inner = Object.assign(arg, {
    matchPromises: []
  });
  if (!inner.router.isServer && inner.router.state.matches.some((d) => d._forcePending)) {
    triggerOnReady(inner);
  }
  try {
    for (let i = 0; i < inner.matches.length; i++) {
      const beforeLoad = handleBeforeLoad(inner, i);
      if (isPromise(beforeLoad)) await beforeLoad;
    }
    const max = inner.firstBadMatchIndex ?? inner.matches.length;
    for (let i = 0; i < max; i++) {
      inner.matchPromises.push(loadRouteMatch(inner, i));
    }
    await Promise.all(inner.matchPromises);
    const readyPromise = triggerOnReady(inner);
    if (isPromise(readyPromise)) await readyPromise;
  } catch (err) {
    if (isNotFound(err) && !inner.preload) {
      const readyPromise = triggerOnReady(inner);
      if (isPromise(readyPromise)) await readyPromise;
      throw err;
    }
    if (isRedirect(err)) {
      throw err;
    }
  }
  return inner.matches;
}
async function loadRouteChunk(route) {
  if (!route._lazyLoaded && route._lazyPromise === void 0) {
    if (route.lazyFn) {
      route._lazyPromise = route.lazyFn().then((lazyRoute) => {
        const { id: _id, ...options } = lazyRoute.options;
        Object.assign(route.options, options);
        route._lazyLoaded = true;
        route._lazyPromise = void 0;
      });
    } else {
      route._lazyLoaded = true;
    }
  }
  if (!route._componentsLoaded && route._componentsPromise === void 0) {
    const loadComponents = () => {
      const preloads = [];
      for (const type of componentTypes) {
        const preload = route.options[type]?.preload;
        if (preload) preloads.push(preload());
      }
      if (preloads.length)
        return Promise.all(preloads).then(() => {
          route._componentsLoaded = true;
          route._componentsPromise = void 0;
        });
      route._componentsLoaded = true;
      route._componentsPromise = void 0;
      return;
    };
    route._componentsPromise = route._lazyPromise ? route._lazyPromise.then(loadComponents) : loadComponents();
  }
  return route._componentsPromise;
}
function makeMaybe(value, error) {
  if (error) {
    return { status: "error", error };
  }
  return { status: "success", value };
}
function routeNeedsPreload(route) {
  for (const componentType of componentTypes) {
    if (route.options[componentType]?.preload) {
      return true;
    }
  }
  return false;
}
var componentTypes = [
  "component",
  "errorComponent",
  "pendingComponent",
  "notFoundComponent"
];

// node_modules/@tanstack/router-core/dist/esm/rewrite.js
function composeRewrites(rewrites) {
  return {
    input: ({ url }) => {
      for (const rewrite of rewrites) {
        url = executeRewriteInput(rewrite, url);
      }
      return url;
    },
    output: ({ url }) => {
      for (let i = rewrites.length - 1; i >= 0; i--) {
        url = executeRewriteOutput(rewrites[i], url);
      }
      return url;
    }
  };
}
function rewriteBasepath(opts) {
  const trimmedBasepath = trimPath(opts.basepath);
  const normalizedBasepath = `/${trimmedBasepath}`;
  const normalizedBasepathWithSlash = `${normalizedBasepath}/`;
  const checkBasepath = opts.caseSensitive ? normalizedBasepath : normalizedBasepath.toLowerCase();
  const checkBasepathWithSlash = opts.caseSensitive ? normalizedBasepathWithSlash : normalizedBasepathWithSlash.toLowerCase();
  return {
    input: ({ url }) => {
      const pathname = opts.caseSensitive ? url.pathname : url.pathname.toLowerCase();
      if (pathname === checkBasepath) {
        url.pathname = "/";
      } else if (pathname.startsWith(checkBasepathWithSlash)) {
        url.pathname = url.pathname.slice(normalizedBasepath.length);
      }
      return url;
    },
    output: ({ url }) => {
      url.pathname = joinPaths(["/", trimmedBasepath, url.pathname]);
      return url;
    }
  };
}
function executeRewriteInput(rewrite, url) {
  const res = rewrite?.input?.({ url });
  if (res) {
    if (typeof res === "string") {
      return new URL(res);
    } else if (res instanceof URL) {
      return res;
    }
  }
  return url;
}
function executeRewriteOutput(rewrite, url) {
  const res = rewrite?.output?.({ url });
  if (res) {
    if (typeof res === "string") {
      return new URL(res);
    } else if (res instanceof URL) {
      return res;
    }
  }
  return url;
}

// node_modules/@tanstack/router-core/dist/esm/router.js
function getLocationChangeInfo(routerState) {
  const fromLocation = routerState.resolvedLocation;
  const toLocation = routerState.location;
  const pathChanged = fromLocation?.pathname !== toLocation.pathname;
  const hrefChanged = fromLocation?.href !== toLocation.href;
  const hashChanged = fromLocation?.hash !== toLocation.hash;
  return { fromLocation, toLocation, pathChanged, hrefChanged, hashChanged };
}
var RouterCore = class {
  /**
   * @deprecated Use the `createRouter` function instead
   */
  constructor(options) {
    this.tempLocationKey = `${Math.round(
      Math.random() * 1e7
    )}`;
    this.resetNextScroll = true;
    this.shouldViewTransition = void 0;
    this.isViewTransitionTypesSupported = void 0;
    this.subscribers = /* @__PURE__ */ new Set();
    this.isScrollRestoring = false;
    this.isScrollRestorationSetup = false;
    this.startTransition = (fn) => fn();
    this.update = (newOptions) => {
      if (newOptions.notFoundRoute) {
        console.warn(
          "The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info."
        );
      }
      const prevOptions = this.options;
      const prevBasepath = this.basepath ?? prevOptions?.basepath ?? "/";
      const basepathWasUnset = this.basepath === void 0;
      const prevRewriteOption = prevOptions?.rewrite;
      this.options = {
        ...prevOptions,
        ...newOptions
      };
      this.isServer = this.options.isServer ?? typeof document === "undefined";
      this.pathParamsDecodeCharMap = this.options.pathParamsAllowedCharacters ? new Map(
        this.options.pathParamsAllowedCharacters.map((char) => [
          encodeURIComponent(char),
          char
        ])
      ) : void 0;
      if (!this.history || this.options.history && this.options.history !== this.history) {
        if (!this.options.history) {
          if (!this.isServer) {
            this.history = createBrowserHistory();
          }
        } else {
          this.history = this.options.history;
        }
      }
      this.origin = this.options.origin;
      if (!this.origin) {
        if (!this.isServer && window?.origin && window.origin !== "null") {
          this.origin = window.origin;
        } else {
          this.origin = "http://localhost";
        }
      }
      if (this.history) {
        this.updateLatestLocation();
      }
      if (this.options.routeTree !== this.routeTree) {
        this.routeTree = this.options.routeTree;
        this.buildRouteTree();
      }
      if (!this.__store && this.latestLocation) {
        this.__store = new Store(getInitialRouterState(this.latestLocation), {
          onUpdate: () => {
            this.__store.state = {
              ...this.state,
              cachedMatches: this.state.cachedMatches.filter(
                (d) => !["redirected"].includes(d.status)
              )
            };
          }
        });
        setupScrollRestoration(this);
      }
      let needsLocationUpdate = false;
      const nextBasepath = this.options.basepath ?? "/";
      const nextRewriteOption = this.options.rewrite;
      const basepathChanged = basepathWasUnset || prevBasepath !== nextBasepath;
      const rewriteChanged = prevRewriteOption !== nextRewriteOption;
      if (basepathChanged || rewriteChanged) {
        this.basepath = nextBasepath;
        const rewrites = [];
        if (trimPath(nextBasepath) !== "") {
          rewrites.push(
            rewriteBasepath({
              basepath: nextBasepath
            })
          );
        }
        if (nextRewriteOption) {
          rewrites.push(nextRewriteOption);
        }
        this.rewrite = rewrites.length === 0 ? void 0 : rewrites.length === 1 ? rewrites[0] : composeRewrites(rewrites);
        if (this.history) {
          this.updateLatestLocation();
        }
        needsLocationUpdate = true;
      }
      if (needsLocationUpdate && this.__store) {
        this.__store.state = {
          ...this.state,
          location: this.latestLocation
        };
      }
      if (typeof window !== "undefined" && "CSS" in window && typeof window.CSS?.supports === "function") {
        this.isViewTransitionTypesSupported = window.CSS.supports(
          "selector(:active-view-transition-type(a)"
        );
      }
    };
    this.updateLatestLocation = () => {
      this.latestLocation = this.parseLocation(
        this.history.location,
        this.latestLocation
      );
    };
    this.buildRouteTree = () => {
      const { routesById, routesByPath, flatRoutes } = processRouteTree({
        routeTree: this.routeTree,
        initRoute: (route, i) => {
          route.init({
            originalIndex: i
          });
        }
      });
      this.routesById = routesById;
      this.routesByPath = routesByPath;
      this.flatRoutes = flatRoutes;
      const notFoundRoute = this.options.notFoundRoute;
      if (notFoundRoute) {
        notFoundRoute.init({
          originalIndex: 99999999999
        });
        this.routesById[notFoundRoute.id] = notFoundRoute;
      }
    };
    this.subscribe = (eventType, fn) => {
      const listener = {
        eventType,
        fn
      };
      this.subscribers.add(listener);
      return () => {
        this.subscribers.delete(listener);
      };
    };
    this.emit = (routerEvent) => {
      this.subscribers.forEach((listener) => {
        if (listener.eventType === routerEvent.type) {
          listener.fn(routerEvent);
        }
      });
    };
    this.parseLocation = (locationToParse, previousLocation) => {
      const parse = ({
        href,
        state
      }) => {
        const fullUrl = new URL(href, this.origin);
        const url = executeRewriteInput(this.rewrite, fullUrl);
        const parsedSearch = this.options.parseSearch(url.search);
        const searchStr = this.options.stringifySearch(parsedSearch);
        url.search = searchStr;
        const fullPath = url.href.replace(url.origin, "");
        const { pathname, hash } = url;
        return {
          href: fullPath,
          publicHref: href,
          url: url.href,
          pathname,
          searchStr,
          search: replaceEqualDeep(previousLocation?.search, parsedSearch),
          hash: hash.split("#").reverse()[0] ?? "",
          state: replaceEqualDeep(previousLocation?.state, state)
        };
      };
      const location = parse(locationToParse);
      const { __tempLocation, __tempKey } = location.state;
      if (__tempLocation && (!__tempKey || __tempKey === this.tempLocationKey)) {
        const parsedTempLocation = parse(__tempLocation);
        parsedTempLocation.state.key = location.state.key;
        parsedTempLocation.state.__TSR_key = location.state.__TSR_key;
        delete parsedTempLocation.state.__tempLocation;
        return {
          ...parsedTempLocation,
          maskedLocation: location
        };
      }
      return location;
    };
    this.resolvePathWithBase = (from, path) => {
      const resolvedPath = resolvePath({
        base: from,
        to: cleanPath(path),
        trailingSlash: this.options.trailingSlash,
        parseCache: this.parsePathnameCache
      });
      return resolvedPath;
    };
    this.matchRoutes = (pathnameOrNext, locationSearchOrOpts, opts) => {
      if (typeof pathnameOrNext === "string") {
        return this.matchRoutesInternal(
          {
            pathname: pathnameOrNext,
            search: locationSearchOrOpts
          },
          opts
        );
      }
      return this.matchRoutesInternal(pathnameOrNext, locationSearchOrOpts);
    };
    this.parsePathnameCache = createLRUCache(1e3);
    this.getMatchedRoutes = (pathname, routePathname) => {
      return getMatchedRoutes({
        pathname,
        routePathname,
        caseSensitive: this.options.caseSensitive,
        routesByPath: this.routesByPath,
        routesById: this.routesById,
        flatRoutes: this.flatRoutes,
        parseCache: this.parsePathnameCache
      });
    };
    this.cancelMatch = (id) => {
      const match = this.getMatch(id);
      if (!match) return;
      match.abortController.abort();
      clearTimeout(match._nonReactive.pendingTimeout);
      match._nonReactive.pendingTimeout = void 0;
    };
    this.cancelMatches = () => {
      this.state.pendingMatches?.forEach((match) => {
        this.cancelMatch(match.id);
      });
    };
    this.buildLocation = (opts) => {
      const build = (dest = {}) => {
        const currentLocation = dest._fromLocation || this.latestLocation;
        const allCurrentLocationMatches = this.matchRoutes(currentLocation, {
          _buildLocation: true
        });
        const lastMatch = last(allCurrentLocationMatches);
        if (dest.from && true && dest._isNavigate) {
          const allFromMatches = this.getMatchedRoutes(
            dest.from,
            void 0
          ).matchedRoutes;
          const matchedFrom = findLast(allCurrentLocationMatches, (d) => {
            return comparePaths(d.fullPath, dest.from);
          });
          const matchedCurrent = findLast(allFromMatches, (d) => {
            return comparePaths(d.fullPath, lastMatch.fullPath);
          });
          if (!matchedFrom && !matchedCurrent) {
            console.warn(`Could not find match for from: ${dest.from}`);
          }
        }
        const defaultedFromPath = dest.unsafeRelative === "path" ? currentLocation.pathname : dest.from ?? lastMatch.fullPath;
        const fromPath = this.resolvePathWithBase(defaultedFromPath, ".");
        const fromSearch = lastMatch.search;
        const fromParams = { ...lastMatch.params };
        const nextTo = dest.to ? this.resolvePathWithBase(fromPath, `${dest.to}`) : this.resolvePathWithBase(fromPath, ".");
        const nextParams = dest.params === false || dest.params === null ? {} : (dest.params ?? true) === true ? fromParams : Object.assign(
          fromParams,
          functionalUpdate(dest.params, fromParams)
        );
        const interpolatedNextTo = interpolatePath({
          path: nextTo,
          params: nextParams,
          parseCache: this.parsePathnameCache
        }).interpolatedPath;
        const destRoutes = this.matchRoutes(interpolatedNextTo, void 0, {
          _buildLocation: true
        }).map((d) => this.looseRoutesById[d.routeId]);
        if (Object.keys(nextParams).length > 0) {
          for (const route of destRoutes) {
            const fn = route.options.params?.stringify ?? route.options.stringifyParams;
            if (fn) {
              Object.assign(nextParams, fn(nextParams));
            }
          }
        }
        const nextPathname = decodePathSegment(
          interpolatePath({
            // Use the original template path for interpolation
            // This preserves the original parameter syntax including optional parameters
            path: nextTo,
            params: nextParams,
            leaveWildcards: false,
            leaveParams: opts.leaveParams,
            decodeCharMap: this.pathParamsDecodeCharMap,
            parseCache: this.parsePathnameCache
          }).interpolatedPath
        );
        let nextSearch = fromSearch;
        if (opts._includeValidateSearch && this.options.search?.strict) {
          const validatedSearch = {};
          destRoutes.forEach((route) => {
            if (route.options.validateSearch) {
              try {
                Object.assign(
                  validatedSearch,
                  validateSearch(route.options.validateSearch, {
                    ...validatedSearch,
                    ...nextSearch
                  })
                );
              } catch {
              }
            }
          });
          nextSearch = validatedSearch;
        }
        nextSearch = applySearchMiddleware({
          search: nextSearch,
          dest,
          destRoutes,
          _includeValidateSearch: opts._includeValidateSearch
        });
        nextSearch = replaceEqualDeep(fromSearch, nextSearch);
        const searchStr = this.options.stringifySearch(nextSearch);
        const hash = dest.hash === true ? currentLocation.hash : dest.hash ? functionalUpdate(dest.hash, currentLocation.hash) : void 0;
        const hashStr = hash ? `#${hash}` : "";
        let nextState = dest.state === true ? currentLocation.state : dest.state ? functionalUpdate(dest.state, currentLocation.state) : {};
        nextState = replaceEqualDeep(currentLocation.state, nextState);
        const fullPath = `${nextPathname}${searchStr}${hashStr}`;
        const url = new URL(fullPath, this.origin);
        const rewrittenUrl = executeRewriteOutput(this.rewrite, url);
        return {
          publicHref: rewrittenUrl.pathname + rewrittenUrl.search + rewrittenUrl.hash,
          href: fullPath,
          url: rewrittenUrl.href,
          pathname: nextPathname,
          search: nextSearch,
          searchStr,
          state: nextState,
          hash: hash ?? "",
          unmaskOnReload: dest.unmaskOnReload
        };
      };
      const buildWithMatches = (dest = {}, maskedDest) => {
        const next = build(dest);
        let maskedNext = maskedDest ? build(maskedDest) : void 0;
        if (!maskedNext) {
          let params = {};
          const foundMask = this.options.routeMasks?.find((d) => {
            const match = matchPathname(
              next.pathname,
              {
                to: d.from,
                caseSensitive: false,
                fuzzy: false
              },
              this.parsePathnameCache
            );
            if (match) {
              params = match;
              return true;
            }
            return false;
          });
          if (foundMask) {
            const { from: _from, ...maskProps } = foundMask;
            maskedDest = {
              from: opts.from,
              ...maskProps,
              params
            };
            maskedNext = build(maskedDest);
          }
        }
        if (maskedNext) {
          next.maskedLocation = maskedNext;
        }
        return next;
      };
      if (opts.mask) {
        return buildWithMatches(opts, {
          from: opts.from,
          ...opts.mask
        });
      }
      return buildWithMatches(opts);
    };
    this.commitLocation = ({
      viewTransition,
      ignoreBlocker,
      ...next
    }) => {
      const isSameState = () => {
        const ignoredProps = [
          "key",
          // TODO: Remove in v2 - use __TSR_key instead
          "__TSR_key",
          "__TSR_index",
          "__hashScrollIntoViewOptions"
        ];
        ignoredProps.forEach((prop) => {
          next.state[prop] = this.latestLocation.state[prop];
        });
        const isEqual = deepEqual(next.state, this.latestLocation.state);
        ignoredProps.forEach((prop) => {
          delete next.state[prop];
        });
        return isEqual;
      };
      const isSameUrl = trimPathRight(this.latestLocation.href) === trimPathRight(next.href);
      const previousCommitPromise = this.commitLocationPromise;
      this.commitLocationPromise = createControlledPromise(() => {
        previousCommitPromise?.resolve();
      });
      if (isSameUrl && isSameState()) {
        this.load();
      } else {
        let { maskedLocation, hashScrollIntoView, ...nextHistory } = next;
        if (maskedLocation) {
          nextHistory = {
            ...maskedLocation,
            state: {
              ...maskedLocation.state,
              __tempKey: void 0,
              __tempLocation: {
                ...nextHistory,
                search: nextHistory.searchStr,
                state: {
                  ...nextHistory.state,
                  __tempKey: void 0,
                  __tempLocation: void 0,
                  __TSR_key: void 0,
                  key: void 0
                  // TODO: Remove in v2 - use __TSR_key instead
                }
              }
            }
          };
          if (nextHistory.unmaskOnReload ?? this.options.unmaskOnReload ?? false) {
            nextHistory.state.__tempKey = this.tempLocationKey;
          }
        }
        nextHistory.state.__hashScrollIntoViewOptions = hashScrollIntoView ?? this.options.defaultHashScrollIntoView ?? true;
        this.shouldViewTransition = viewTransition;
        this.history[next.replace ? "replace" : "push"](
          nextHistory.publicHref,
          nextHistory.state,
          { ignoreBlocker }
        );
      }
      this.resetNextScroll = next.resetScroll ?? true;
      if (!this.history.subscribers.size) {
        this.load();
      }
      return this.commitLocationPromise;
    };
    this.buildAndCommitLocation = ({
      replace,
      resetScroll,
      hashScrollIntoView,
      viewTransition,
      ignoreBlocker,
      href,
      ...rest
    } = {}) => {
      if (href) {
        const currentIndex = this.history.location.state.__TSR_index;
        const parsed = parseHref(href, {
          __TSR_index: replace ? currentIndex : currentIndex + 1
        });
        rest.to = parsed.pathname;
        rest.search = this.options.parseSearch(parsed.search);
        rest.hash = parsed.hash.slice(1);
      }
      const location = this.buildLocation({
        ...rest,
        _includeValidateSearch: true
      });
      return this.commitLocation({
        ...location,
        viewTransition,
        replace,
        resetScroll,
        hashScrollIntoView,
        ignoreBlocker
      });
    };
    this.navigate = ({ to, reloadDocument, href, ...rest }) => {
      if (!reloadDocument && href) {
        try {
          new URL(`${href}`);
          reloadDocument = true;
        } catch {
        }
      }
      if (reloadDocument) {
        if (!href) {
          const location = this.buildLocation({ to, ...rest });
          href = location.url;
        }
        if (rest.replace) {
          window.location.replace(href);
        } else {
          window.location.href = href;
        }
        return Promise.resolve();
      }
      return this.buildAndCommitLocation({
        ...rest,
        href,
        to,
        _isNavigate: true
      });
    };
    this.beforeLoad = () => {
      this.cancelMatches();
      this.updateLatestLocation();
      if (this.isServer) {
        const nextLocation = this.buildLocation({
          to: this.latestLocation.pathname,
          search: true,
          params: true,
          hash: true,
          state: true,
          _includeValidateSearch: true
        });
        const normalizeUrl = (url) => {
          try {
            return encodeURI(decodeURI(url));
          } catch {
            return url;
          }
        };
        if (trimPath(normalizeUrl(this.latestLocation.href)) !== trimPath(normalizeUrl(nextLocation.href))) {
          let href = nextLocation.url;
          if (this.origin && href.startsWith(this.origin)) {
            href = href.replace(this.origin, "") || "/";
          }
          throw redirect({ href });
        }
      }
      const pendingMatches = this.matchRoutes(this.latestLocation);
      this.__store.setState((s) => ({
        ...s,
        status: "pending",
        statusCode: 200,
        isLoading: true,
        location: this.latestLocation,
        pendingMatches,
        // If a cached moved to pendingMatches, remove it from cachedMatches
        cachedMatches: s.cachedMatches.filter(
          (d) => !pendingMatches.some((e) => e.id === d.id)
        )
      }));
    };
    this.load = async (opts) => {
      let redirect2;
      let notFound2;
      let loadPromise;
      loadPromise = new Promise((resolve) => {
        this.startTransition(async () => {
          try {
            this.beforeLoad();
            const next = this.latestLocation;
            const prevLocation = this.state.resolvedLocation;
            if (!this.state.redirect) {
              this.emit({
                type: "onBeforeNavigate",
                ...getLocationChangeInfo({
                  resolvedLocation: prevLocation,
                  location: next
                })
              });
            }
            this.emit({
              type: "onBeforeLoad",
              ...getLocationChangeInfo({
                resolvedLocation: prevLocation,
                location: next
              })
            });
            await loadMatches({
              router: this,
              sync: opts?.sync,
              matches: this.state.pendingMatches,
              location: next,
              updateMatch: this.updateMatch,
              // eslint-disable-next-line @typescript-eslint/require-await
              onReady: async () => {
                this.startViewTransition(async () => {
                  let exitingMatches;
                  let enteringMatches;
                  let stayingMatches;
                  batch(() => {
                    this.__store.setState((s) => {
                      const previousMatches = s.matches;
                      const newMatches = s.pendingMatches || s.matches;
                      exitingMatches = previousMatches.filter(
                        (match) => !newMatches.some((d) => d.id === match.id)
                      );
                      enteringMatches = newMatches.filter(
                        (match) => !previousMatches.some((d) => d.id === match.id)
                      );
                      stayingMatches = previousMatches.filter(
                        (match) => newMatches.some((d) => d.id === match.id)
                      );
                      return {
                        ...s,
                        isLoading: false,
                        loadedAt: Date.now(),
                        matches: newMatches,
                        pendingMatches: void 0,
                        cachedMatches: [
                          ...s.cachedMatches,
                          ...exitingMatches.filter((d) => d.status !== "error")
                        ]
                      };
                    });
                    this.clearExpiredCache();
                  });
                  [
                    [exitingMatches, "onLeave"],
                    [enteringMatches, "onEnter"],
                    [stayingMatches, "onStay"]
                  ].forEach(([matches, hook]) => {
                    matches.forEach((match) => {
                      this.looseRoutesById[match.routeId].options[hook]?.(match);
                    });
                  });
                });
              }
            });
          } catch (err) {
            if (isRedirect(err)) {
              redirect2 = err;
              if (!this.isServer) {
                this.navigate({
                  ...redirect2.options,
                  replace: true,
                  ignoreBlocker: true
                });
              }
            } else if (isNotFound(err)) {
              notFound2 = err;
            }
            this.__store.setState((s) => ({
              ...s,
              statusCode: redirect2 ? redirect2.status : notFound2 ? 404 : s.matches.some((d) => d.status === "error") ? 500 : 200,
              redirect: redirect2
            }));
          }
          if (this.latestLoadPromise === loadPromise) {
            this.commitLocationPromise?.resolve();
            this.latestLoadPromise = void 0;
            this.commitLocationPromise = void 0;
          }
          resolve();
        });
      });
      this.latestLoadPromise = loadPromise;
      await loadPromise;
      while (this.latestLoadPromise && loadPromise !== this.latestLoadPromise) {
        await this.latestLoadPromise;
      }
      let newStatusCode = void 0;
      if (this.hasNotFoundMatch()) {
        newStatusCode = 404;
      } else if (this.__store.state.matches.some((d) => d.status === "error")) {
        newStatusCode = 500;
      }
      if (newStatusCode !== void 0) {
        this.__store.setState((s) => ({
          ...s,
          statusCode: newStatusCode
        }));
      }
    };
    this.startViewTransition = (fn) => {
      const shouldViewTransition = this.shouldViewTransition ?? this.options.defaultViewTransition;
      delete this.shouldViewTransition;
      if (shouldViewTransition && typeof document !== "undefined" && "startViewTransition" in document && typeof document.startViewTransition === "function") {
        let startViewTransitionParams;
        if (typeof shouldViewTransition === "object" && this.isViewTransitionTypesSupported) {
          const next = this.latestLocation;
          const prevLocation = this.state.resolvedLocation;
          const resolvedViewTransitionTypes = typeof shouldViewTransition.types === "function" ? shouldViewTransition.types(
            getLocationChangeInfo({
              resolvedLocation: prevLocation,
              location: next
            })
          ) : shouldViewTransition.types;
          if (resolvedViewTransitionTypes === false) {
            fn();
            return;
          }
          startViewTransitionParams = {
            update: fn,
            types: resolvedViewTransitionTypes
          };
        } else {
          startViewTransitionParams = fn;
        }
        document.startViewTransition(startViewTransitionParams);
      } else {
        fn();
      }
    };
    this.updateMatch = (id, updater) => {
      const matchesKey = this.state.pendingMatches?.some((d) => d.id === id) ? "pendingMatches" : this.state.matches.some((d) => d.id === id) ? "matches" : this.state.cachedMatches.some((d) => d.id === id) ? "cachedMatches" : "";
      if (matchesKey) {
        this.__store.setState((s) => ({
          ...s,
          [matchesKey]: s[matchesKey]?.map((d) => d.id === id ? updater(d) : d)
        }));
      }
    };
    this.getMatch = (matchId) => {
      const findFn = (d) => d.id === matchId;
      return this.state.cachedMatches.find(findFn) ?? this.state.pendingMatches?.find(findFn) ?? this.state.matches.find(findFn);
    };
    this.invalidate = (opts) => {
      const invalidate = (d) => {
        if (opts?.filter?.(d) ?? true) {
          return {
            ...d,
            invalid: true,
            ...opts?.forcePending || d.status === "error" ? { status: "pending", error: void 0 } : void 0
          };
        }
        return d;
      };
      this.__store.setState((s) => ({
        ...s,
        matches: s.matches.map(invalidate),
        cachedMatches: s.cachedMatches.map(invalidate),
        pendingMatches: s.pendingMatches?.map(invalidate)
      }));
      this.shouldViewTransition = false;
      return this.load({ sync: opts?.sync });
    };
    this.resolveRedirect = (redirect2) => {
      if (!redirect2.options.href) {
        const location = this.buildLocation(redirect2.options);
        let href = location.url;
        if (this.origin && href.startsWith(this.origin)) {
          href = href.replace(this.origin, "") || "/";
        }
        redirect2.options.href = location.href;
        redirect2.headers.set("Location", href);
      }
      if (!redirect2.headers.get("Location")) {
        redirect2.headers.set("Location", redirect2.options.href);
      }
      return redirect2;
    };
    this.clearCache = (opts) => {
      const filter = opts?.filter;
      if (filter !== void 0) {
        this.__store.setState((s) => {
          return {
            ...s,
            cachedMatches: s.cachedMatches.filter(
              (m) => !filter(m)
            )
          };
        });
      } else {
        this.__store.setState((s) => {
          return {
            ...s,
            cachedMatches: []
          };
        });
      }
    };
    this.clearExpiredCache = () => {
      const filter = (d) => {
        const route = this.looseRoutesById[d.routeId];
        if (!route.options.loader) {
          return true;
        }
        const gcTime = (d.preload ? route.options.preloadGcTime ?? this.options.defaultPreloadGcTime : route.options.gcTime ?? this.options.defaultGcTime) ?? 5 * 60 * 1e3;
        const isError = d.status === "error";
        if (isError) return true;
        const gcEligible = Date.now() - d.updatedAt >= gcTime;
        return gcEligible;
      };
      this.clearCache({ filter });
    };
    this.loadRouteChunk = loadRouteChunk;
    this.preloadRoute = async (opts) => {
      const next = this.buildLocation(opts);
      let matches = this.matchRoutes(next, {
        throwOnError: true,
        preload: true,
        dest: opts
      });
      const activeMatchIds = new Set(
        [...this.state.matches, ...this.state.pendingMatches ?? []].map(
          (d) => d.id
        )
      );
      const loadedMatchIds = /* @__PURE__ */ new Set([
        ...activeMatchIds,
        ...this.state.cachedMatches.map((d) => d.id)
      ]);
      batch(() => {
        matches.forEach((match) => {
          if (!loadedMatchIds.has(match.id)) {
            this.__store.setState((s) => ({
              ...s,
              cachedMatches: [...s.cachedMatches, match]
            }));
          }
        });
      });
      try {
        matches = await loadMatches({
          router: this,
          matches,
          location: next,
          preload: true,
          updateMatch: (id, updater) => {
            if (activeMatchIds.has(id)) {
              matches = matches.map((d) => d.id === id ? updater(d) : d);
            } else {
              this.updateMatch(id, updater);
            }
          }
        });
        return matches;
      } catch (err) {
        if (isRedirect(err)) {
          if (err.options.reloadDocument) {
            return void 0;
          }
          return await this.preloadRoute({
            ...err.options,
            _fromLocation: next
          });
        }
        if (!isNotFound(err)) {
          console.error(err);
        }
        return void 0;
      }
    };
    this.matchRoute = (location, opts) => {
      const matchLocation = {
        ...location,
        to: location.to ? this.resolvePathWithBase(
          location.from || "",
          location.to
        ) : void 0,
        params: location.params || {},
        leaveParams: true
      };
      const next = this.buildLocation(matchLocation);
      if (opts?.pending && this.state.status !== "pending") {
        return false;
      }
      const pending = opts?.pending === void 0 ? !this.state.isLoading : opts.pending;
      const baseLocation = pending ? this.latestLocation : this.state.resolvedLocation || this.state.location;
      const match = matchPathname(
        baseLocation.pathname,
        {
          ...opts,
          to: next.pathname
        },
        this.parsePathnameCache
      );
      if (!match) {
        return false;
      }
      if (location.params) {
        if (!deepEqual(match, location.params, { partial: true })) {
          return false;
        }
      }
      if (match && (opts?.includeSearch ?? true)) {
        return deepEqual(baseLocation.search, next.search, { partial: true }) ? match : false;
      }
      return match;
    };
    this.hasNotFoundMatch = () => {
      return this.__store.state.matches.some(
        (d) => d.status === "notFound" || d.globalNotFound
      );
    };
    this.update({
      defaultPreloadDelay: 50,
      defaultPendingMs: 1e3,
      defaultPendingMinMs: 500,
      context: void 0,
      ...options,
      caseSensitive: options.caseSensitive ?? false,
      notFoundMode: options.notFoundMode ?? "fuzzy",
      stringifySearch: options.stringifySearch ?? defaultStringifySearch,
      parseSearch: options.parseSearch ?? defaultParseSearch
    });
    if (typeof document !== "undefined") {
      self.__TSR_ROUTER__ = this;
    }
  }
  isShell() {
    return !!this.options.isShell;
  }
  isPrerendering() {
    return !!this.options.isPrerendering;
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  matchRoutesInternal(next, opts) {
    const { foundRoute, matchedRoutes, routeParams } = this.getMatchedRoutes(
      next.pathname,
      opts?.dest?.to
    );
    let isGlobalNotFound = false;
    if (
      // If we found a route, and it's not an index route and we have left over path
      foundRoute ? foundRoute.path !== "/" && routeParams["**"] : (
        // Or if we didn't find a route and we have left over path
        trimPathRight(next.pathname)
      )
    ) {
      if (this.options.notFoundRoute) {
        matchedRoutes.push(this.options.notFoundRoute);
      } else {
        isGlobalNotFound = true;
      }
    }
    const globalNotFoundRouteId = (() => {
      if (!isGlobalNotFound) {
        return void 0;
      }
      if (this.options.notFoundMode !== "root") {
        for (let i = matchedRoutes.length - 1; i >= 0; i--) {
          const route = matchedRoutes[i];
          if (route.children) {
            return route.id;
          }
        }
      }
      return rootRouteId;
    })();
    const matches = [];
    const getParentContext = (parentMatch) => {
      const parentMatchId = parentMatch?.id;
      const parentContext = !parentMatchId ? this.options.context ?? void 0 : parentMatch.context ?? this.options.context ?? void 0;
      return parentContext;
    };
    matchedRoutes.forEach((route, index) => {
      const parentMatch = matches[index - 1];
      const [preMatchSearch, strictMatchSearch, searchError] = (() => {
        const parentSearch = parentMatch?.search ?? next.search;
        const parentStrictSearch = parentMatch?._strictSearch ?? void 0;
        try {
          const strictSearch = validateSearch(route.options.validateSearch, { ...parentSearch }) ?? void 0;
          return [
            {
              ...parentSearch,
              ...strictSearch
            },
            { ...parentStrictSearch, ...strictSearch },
            void 0
          ];
        } catch (err) {
          let searchParamError = err;
          if (!(err instanceof SearchParamError)) {
            searchParamError = new SearchParamError(err.message, {
              cause: err
            });
          }
          if (opts?.throwOnError) {
            throw searchParamError;
          }
          return [parentSearch, {}, searchParamError];
        }
      })();
      const loaderDeps = route.options.loaderDeps?.({
        search: preMatchSearch
      }) ?? "";
      const loaderDepsHash = loaderDeps ? JSON.stringify(loaderDeps) : "";
      const { interpolatedPath, usedParams } = interpolatePath({
        path: route.fullPath,
        params: routeParams,
        decodeCharMap: this.pathParamsDecodeCharMap
      });
      const matchId = interpolatePath({
        path: route.id,
        params: routeParams,
        leaveWildcards: true,
        decodeCharMap: this.pathParamsDecodeCharMap,
        parseCache: this.parsePathnameCache
      }).interpolatedPath + loaderDepsHash;
      const existingMatch = this.getMatch(matchId);
      const previousMatch = this.state.matches.find(
        (d) => d.routeId === route.id
      );
      const strictParams = existingMatch?._strictParams ?? usedParams;
      let paramsError = void 0;
      if (!existingMatch) {
        const strictParseParams = route.options.params?.parse ?? route.options.parseParams;
        if (strictParseParams) {
          try {
            Object.assign(
              strictParams,
              strictParseParams(strictParams)
            );
          } catch (err) {
            paramsError = new PathParamError(err.message, {
              cause: err
            });
            if (opts?.throwOnError) {
              throw paramsError;
            }
          }
        }
      }
      Object.assign(routeParams, strictParams);
      const cause = previousMatch ? "stay" : "enter";
      let match;
      if (existingMatch) {
        match = {
          ...existingMatch,
          cause,
          params: previousMatch ? replaceEqualDeep(previousMatch.params, routeParams) : routeParams,
          _strictParams: strictParams,
          search: previousMatch ? replaceEqualDeep(previousMatch.search, preMatchSearch) : replaceEqualDeep(existingMatch.search, preMatchSearch),
          _strictSearch: strictMatchSearch
        };
      } else {
        const status = route.options.loader || route.options.beforeLoad || route.lazyFn || routeNeedsPreload(route) ? "pending" : "success";
        match = {
          id: matchId,
          index,
          routeId: route.id,
          params: previousMatch ? replaceEqualDeep(previousMatch.params, routeParams) : routeParams,
          _strictParams: strictParams,
          pathname: interpolatedPath,
          updatedAt: Date.now(),
          search: previousMatch ? replaceEqualDeep(previousMatch.search, preMatchSearch) : preMatchSearch,
          _strictSearch: strictMatchSearch,
          searchError: void 0,
          status,
          isFetching: false,
          error: void 0,
          paramsError,
          __routeContext: void 0,
          _nonReactive: {
            loadPromise: createControlledPromise()
          },
          __beforeLoadContext: void 0,
          context: {},
          abortController: new AbortController(),
          fetchCount: 0,
          cause,
          loaderDeps: previousMatch ? replaceEqualDeep(previousMatch.loaderDeps, loaderDeps) : loaderDeps,
          invalid: false,
          preload: false,
          links: void 0,
          scripts: void 0,
          headScripts: void 0,
          meta: void 0,
          staticData: route.options.staticData || {},
          fullPath: route.fullPath
        };
      }
      if (!opts?.preload) {
        match.globalNotFound = globalNotFoundRouteId === route.id;
      }
      match.searchError = searchError;
      const parentContext = getParentContext(parentMatch);
      match.context = {
        ...parentContext,
        ...match.__routeContext,
        ...match.__beforeLoadContext
      };
      matches.push(match);
    });
    matches.forEach((match, index) => {
      const route = this.looseRoutesById[match.routeId];
      const existingMatch = this.getMatch(match.id);
      if (!existingMatch && opts?._buildLocation !== true) {
        const parentMatch = matches[index - 1];
        const parentContext = getParentContext(parentMatch);
        if (route.options.context) {
          const contextFnContext = {
            deps: match.loaderDeps,
            params: match.params,
            context: parentContext ?? {},
            location: next,
            navigate: (opts2) => this.navigate({ ...opts2, _fromLocation: next }),
            buildLocation: this.buildLocation,
            cause: match.cause,
            abortController: match.abortController,
            preload: !!match.preload,
            matches
          };
          match.__routeContext = route.options.context(contextFnContext) ?? void 0;
        }
        match.context = {
          ...parentContext,
          ...match.__routeContext,
          ...match.__beforeLoadContext
        };
      }
    });
    return matches;
  }
};
var SearchParamError = class extends Error {
};
var PathParamError = class extends Error {
};
var normalize = (str) => str.endsWith("/") && str.length > 1 ? str.slice(0, -1) : str;
function comparePaths(a, b) {
  return normalize(a) === normalize(b);
}
function getInitialRouterState(location) {
  return {
    loadedAt: 0,
    isLoading: false,
    isTransitioning: false,
    status: "idle",
    resolvedLocation: void 0,
    location,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200
  };
}
function validateSearch(validateSearch2, input) {
  if (validateSearch2 == null) return {};
  if ("~standard" in validateSearch2) {
    const result = validateSearch2["~standard"].validate(input);
    if (result instanceof Promise)
      throw new SearchParamError("Async validation not supported");
    if (result.issues)
      throw new SearchParamError(JSON.stringify(result.issues, void 0, 2), {
        cause: result
      });
    return result.value;
  }
  if ("parse" in validateSearch2) {
    return validateSearch2.parse(input);
  }
  if (typeof validateSearch2 === "function") {
    return validateSearch2(input);
  }
  return {};
}
function getMatchedRoutes({
  pathname,
  routePathname,
  caseSensitive,
  routesByPath,
  routesById,
  flatRoutes,
  parseCache
}) {
  let routeParams = {};
  const trimmedPath = trimPathRight(pathname);
  const getMatchedParams = (route) => {
    const result = matchPathname(
      trimmedPath,
      {
        to: route.fullPath,
        caseSensitive: route.options?.caseSensitive ?? caseSensitive,
        // we need fuzzy matching for `notFoundMode: 'fuzzy'`
        fuzzy: true
      },
      parseCache
    );
    return result;
  };
  let foundRoute = routePathname !== void 0 ? routesByPath[routePathname] : void 0;
  if (foundRoute) {
    routeParams = getMatchedParams(foundRoute);
  } else {
    let fuzzyMatch = void 0;
    for (const route of flatRoutes) {
      const matchedParams = getMatchedParams(route);
      if (matchedParams) {
        if (route.path !== "/" && matchedParams["**"]) {
          if (!fuzzyMatch) {
            fuzzyMatch = { foundRoute: route, routeParams: matchedParams };
          }
        } else {
          foundRoute = route;
          routeParams = matchedParams;
          break;
        }
      }
    }
    if (!foundRoute && fuzzyMatch) {
      foundRoute = fuzzyMatch.foundRoute;
      routeParams = fuzzyMatch.routeParams;
    }
  }
  let routeCursor = foundRoute || routesById[rootRouteId];
  const matchedRoutes = [routeCursor];
  while (routeCursor.parentRoute) {
    routeCursor = routeCursor.parentRoute;
    matchedRoutes.push(routeCursor);
  }
  matchedRoutes.reverse();
  return { matchedRoutes, routeParams, foundRoute };
}
function applySearchMiddleware({
  search,
  dest,
  destRoutes,
  _includeValidateSearch
}) {
  const allMiddlewares = destRoutes.reduce(
    (acc, route) => {
      const middlewares = [];
      if ("search" in route.options) {
        if (route.options.search?.middlewares) {
          middlewares.push(...route.options.search.middlewares);
        }
      } else if (route.options.preSearchFilters || route.options.postSearchFilters) {
        const legacyMiddleware = ({
          search: search2,
          next
        }) => {
          let nextSearch = search2;
          if ("preSearchFilters" in route.options && route.options.preSearchFilters) {
            nextSearch = route.options.preSearchFilters.reduce(
              (prev, next2) => next2(prev),
              search2
            );
          }
          const result = next(nextSearch);
          if ("postSearchFilters" in route.options && route.options.postSearchFilters) {
            return route.options.postSearchFilters.reduce(
              (prev, next2) => next2(prev),
              result
            );
          }
          return result;
        };
        middlewares.push(legacyMiddleware);
      }
      if (_includeValidateSearch && route.options.validateSearch) {
        const validate = ({ search: search2, next }) => {
          const result = next(search2);
          try {
            const validatedSearch = {
              ...result,
              ...validateSearch(route.options.validateSearch, result) ?? void 0
            };
            return validatedSearch;
          } catch {
            return result;
          }
        };
        middlewares.push(validate);
      }
      return acc.concat(middlewares);
    },
    []
  ) ?? [];
  const final = ({ search: search2 }) => {
    if (!dest.search) {
      return {};
    }
    if (dest.search === true) {
      return search2;
    }
    return functionalUpdate(dest.search, search2);
  };
  allMiddlewares.push(final);
  const applyNext = (index, currentSearch) => {
    if (index >= allMiddlewares.length) {
      return currentSearch;
    }
    const middleware = allMiddlewares[index];
    const next = (newSearch) => {
      return applyNext(index + 1, newSearch);
    };
    return middleware({ search: currentSearch, next });
  };
  return applyNext(0, search);
}

// node_modules/@tanstack/router-core/dist/esm/link.js
var preloadWarning = "Error preloading route! \u261D\uFE0F";

// node_modules/@tanstack/router-core/dist/esm/route.js
var BaseRoute = class {
  constructor(options) {
    this.init = (opts) => {
      this.originalIndex = opts.originalIndex;
      const options2 = this.options;
      const isRoot = !options2?.path && !options2?.id;
      this.parentRoute = this.options.getParentRoute?.();
      if (isRoot) {
        this._path = rootRouteId;
      } else if (!this.parentRoute) {
        invariant(
          false,
          `Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.`
        );
      }
      let path = isRoot ? rootRouteId : options2?.path;
      if (path && path !== "/") {
        path = trimPathLeft(path);
      }
      const customId = options2?.id || path;
      let id = isRoot ? rootRouteId : joinPaths([
        this.parentRoute.id === rootRouteId ? "" : this.parentRoute.id,
        customId
      ]);
      if (path === rootRouteId) {
        path = "/";
      }
      if (id !== rootRouteId) {
        id = joinPaths(["/", id]);
      }
      const fullPath = id === rootRouteId ? "/" : joinPaths([this.parentRoute.fullPath, path]);
      this._path = path;
      this._id = id;
      this._fullPath = fullPath;
      this._to = fullPath;
    };
    this.clone = (other) => {
      this._path = other._path;
      this._id = other._id;
      this._fullPath = other._fullPath;
      this._to = other._to;
      this.options.getParentRoute = other.options.getParentRoute;
      this.children = other.children;
    };
    this.addChildren = (children) => {
      return this._addFileChildren(children);
    };
    this._addFileChildren = (children) => {
      if (Array.isArray(children)) {
        this.children = children;
      }
      if (typeof children === "object" && children !== null) {
        this.children = Object.values(children);
      }
      return this;
    };
    this._addFileTypes = () => {
      return this;
    };
    this.updateLoader = (options2) => {
      Object.assign(this.options, options2);
      return this;
    };
    this.update = (options2) => {
      Object.assign(this.options, options2);
      return this;
    };
    this.lazy = (lazyFn2) => {
      this.lazyFn = lazyFn2;
      return this;
    };
    this.options = options || {};
    this.isRoot = !options?.getParentRoute;
    if (options?.id && options?.path) {
      throw new Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
};
var BaseRootRoute = class extends BaseRoute {
  constructor(options) {
    super(options);
  }
};

// node_modules/@tanstack/react-router/dist/esm/CatchBoundary.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var React = __toESM(require_react(), 1);
function CatchBoundary(props) {
  const errorComponent = props.errorComponent ?? ErrorComponent;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    CatchBoundaryImpl,
    {
      getResetKey: props.getResetKey,
      onCatch: props.onCatch,
      children: ({ error, reset }) => {
        if (error) {
          return React.createElement(errorComponent, {
            error,
            reset
          });
        }
        return props.children;
      }
    }
  );
}
var CatchBoundaryImpl = class extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { error: null };
  }
  static getDerivedStateFromProps(props) {
    return { resetKey: props.getResetKey() };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.error && prevState.resetKey !== this.state.resetKey) {
      this.reset();
    }
  }
  componentDidCatch(error, errorInfo) {
    if (this.props.onCatch) {
      this.props.onCatch(error, errorInfo);
    }
  }
  render() {
    return this.props.children({
      error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
      reset: () => {
        this.reset();
      }
    });
  }
};
function ErrorComponent({ error }) {
  const [show, setShow] = React.useState(true);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: ".5rem", maxWidth: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          style: {
            appearance: "none",
            fontSize: ".6em",
            border: "1px solid currentColor",
            padding: ".1rem .2rem",
            fontWeight: "bold",
            borderRadius: ".25rem"
          },
          onClick: () => setShow((d) => !d),
          children: show ? "Hide Error" : "Show Error"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: ".25rem" } }),
    show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "pre",
      {
        style: {
          fontSize: ".7em",
          border: "1px solid red",
          borderRadius: ".25rem",
          padding: ".3rem",
          color: "red",
          overflow: "auto"
        },
        children: error.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: error.message }) : null
      }
    ) }) : null
  ] });
}

// node_modules/@tanstack/react-router/dist/esm/ClientOnly.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
function ClientOnly({ children, fallback = null }) {
  return useHydrated() ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react.default.Fragment, { children }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react.default.Fragment, { children: fallback });
}
function useHydrated() {
  return import_react.default.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
function subscribe() {
  return () => {
  };
}

// node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction2 = false;
function warning(condition, message) {
  if (!isProduction2) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/@tanstack/react-router/dist/esm/route.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/useMatch.js
var React5 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-store/dist/esm/index.js
var import_with_selector = __toESM(require_with_selector(), 1);
function useStore(store2, selector = (d) => d, options = {}) {
  const equal = options.equal ?? shallow;
  const slice = (0, import_with_selector.useSyncExternalStoreWithSelector)(
    store2.subscribe,
    () => store2.state,
    () => store2.state,
    selector,
    equal
  );
  return slice;
}
function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;
    for (const [k, v] of objA) {
      if (!objB.has(k) || !Object.is(v, objB.get(k))) return false;
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size) return false;
    for (const v of objA) {
      if (!objB.has(v)) return false;
    }
    return true;
  }
  if (objA instanceof Date && objB instanceof Date) {
    if (objA.getTime() !== objB.getTime()) return false;
    return true;
  }
  const keysA = getOwnKeys(objA);
  if (keysA.length !== getOwnKeys(objB).length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}
function getOwnKeys(obj) {
  return Object.keys(obj).concat(
    Object.getOwnPropertySymbols(obj)
  );
}

// node_modules/@tanstack/react-router/dist/esm/useRouterState.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/useRouter.js
var React3 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/routerContext.js
var React2 = __toESM(require_react(), 1);
var routerContext = React2.createContext(null);
function getRouterContext() {
  if (typeof document === "undefined") {
    return routerContext;
  }
  if (window.__TSR_ROUTER_CONTEXT__) {
    return window.__TSR_ROUTER_CONTEXT__;
  }
  window.__TSR_ROUTER_CONTEXT__ = routerContext;
  return routerContext;
}

// node_modules/@tanstack/react-router/dist/esm/useRouter.js
function useRouter(opts) {
  const value = React3.useContext(getRouterContext());
  tiny_warning_esm_default(
    !((opts?.warn ?? true) && !value),
    "useRouter must be used inside a <RouterProvider> component!"
  );
  return value;
}

// node_modules/@tanstack/react-router/dist/esm/useRouterState.js
function useRouterState(opts) {
  const contextRouter = useRouter({
    warn: opts?.router === void 0
  });
  const router = opts?.router || contextRouter;
  const previousResult = (0, import_react2.useRef)(void 0);
  return useStore(router.__store, (state) => {
    if (opts?.select) {
      if (opts.structuralSharing ?? router.options.defaultStructuralSharing) {
        const newSlice = replaceEqualDeep(
          previousResult.current,
          opts.select(state)
        );
        previousResult.current = newSlice;
        return newSlice;
      }
      return opts.select(state);
    }
    return state;
  });
}

// node_modules/@tanstack/react-router/dist/esm/matchContext.js
var React4 = __toESM(require_react(), 1);
var matchContext = React4.createContext(void 0);
var dummyMatchContext = React4.createContext(
  void 0
);

// node_modules/@tanstack/react-router/dist/esm/useMatch.js
function useMatch(opts) {
  const nearestMatchId = React5.useContext(
    opts.from ? dummyMatchContext : matchContext
  );
  const matchSelection = useRouterState({
    select: (state) => {
      const match = state.matches.find(
        (d) => opts.from ? opts.from === d.routeId : d.id === nearestMatchId
      );
      invariant(
        !((opts.shouldThrow ?? true) && !match),
        `Could not find ${opts.from ? `an active match from "${opts.from}"` : "a nearest match!"}`
      );
      if (match === void 0) {
        return void 0;
      }
      return opts.select ? opts.select(match) : match;
    },
    structuralSharing: opts.structuralSharing
  });
  return matchSelection;
}

// node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
function useLoaderData(opts) {
  return useMatch({
    from: opts.from,
    strict: opts.strict,
    structuralSharing: opts.structuralSharing,
    select: (s) => {
      return opts.select ? opts.select(s.loaderData) : s.loaderData;
    }
  });
}

// node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
function useLoaderDeps(opts) {
  const { select, ...rest } = opts;
  return useMatch({
    ...rest,
    select: (s) => {
      return select ? select(s.loaderDeps) : s.loaderDeps;
    }
  });
}

// node_modules/@tanstack/react-router/dist/esm/useParams.js
function useParams(opts) {
  return useMatch({
    from: opts.from,
    shouldThrow: opts.shouldThrow,
    structuralSharing: opts.structuralSharing,
    strict: opts.strict,
    select: (match) => {
      const params = opts.strict === false ? match.params : match._strictParams;
      return opts.select ? opts.select(params) : params;
    }
  });
}

// node_modules/@tanstack/react-router/dist/esm/useSearch.js
function useSearch(opts) {
  return useMatch({
    from: opts.from,
    strict: opts.strict,
    shouldThrow: opts.shouldThrow,
    structuralSharing: opts.structuralSharing,
    select: (match) => {
      return opts.select ? opts.select(match.search) : match.search;
    }
  });
}

// node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var React6 = __toESM(require_react(), 1);
function useNavigate(_defaultOpts) {
  const router = useRouter();
  return React6.useCallback(
    (options) => {
      return router.navigate({
        ...options,
        from: options.from ?? _defaultOpts?.from
      });
    },
    [_defaultOpts?.from, router]
  );
}

// node_modules/@tanstack/react-router/dist/esm/link.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var React8 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@tanstack/react-router/dist/esm/utils.js
var React7 = __toESM(require_react(), 1);
var useLayoutEffect2 = typeof window !== "undefined" ? React7.useLayoutEffect : React7.useEffect;
function usePrevious(value) {
  const ref = React7.useRef({
    value,
    prev: null
  });
  const current = ref.current.value;
  if (value !== current) {
    ref.current = {
      value,
      prev: current
    };
  }
  return ref.current.prev;
}
function useIntersectionObserver(ref, callback, intersectionObserverOptions2 = {}, options = {}) {
  React7.useEffect(() => {
    if (!ref.current || options.disabled || typeof IntersectionObserver !== "function") {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      callback(entry);
    }, intersectionObserverOptions2);
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [callback, intersectionObserverOptions2, options.disabled, ref]);
}
function useForwardedRef(ref) {
  const innerRef = React7.useRef(null);
  React7.useImperativeHandle(ref, () => innerRef.current, []);
  return innerRef;
}

// node_modules/@tanstack/react-router/dist/esm/link.js
function useLinkProps(options, forwardedRef) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = React8.useState(false);
  const hasRenderFetched = React8.useRef(false);
  const innerRef = useForwardedRef(forwardedRef);
  const {
    // custom props
    activeProps,
    inactiveProps,
    activeOptions,
    to,
    preload: userPreload,
    preloadDelay: userPreloadDelay,
    hashScrollIntoView,
    replace,
    startTransition: startTransition2,
    resetScroll,
    viewTransition,
    // element props
    children,
    target,
    disabled,
    style,
    className,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onTouchStart,
    ignoreBlocker,
    // prevent these from being returned
    params: _params,
    search: _search,
    hash: _hash,
    state: _state,
    mask: _mask,
    reloadDocument: _reloadDocument,
    unsafeRelative: _unsafeRelative,
    from: _from,
    _fromLocation,
    ...propsSafeToSpread
  } = options;
  const currentSearch = useRouterState({
    select: (s) => s.location.search,
    structuralSharing: true
  });
  const from = options.from;
  const _options = React8.useMemo(
    () => {
      return { ...options, from };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      router,
      currentSearch,
      from,
      options._fromLocation,
      options.hash,
      options.to,
      options.search,
      options.params,
      options.state,
      options.mask,
      options.unsafeRelative
    ]
  );
  const next = React8.useMemo(
    () => router.buildLocation({ ..._options }),
    [router, _options]
  );
  const hrefOption = React8.useMemo(() => {
    if (disabled) {
      return void 0;
    }
    let href = next.maskedLocation ? next.maskedLocation.url : next.url;
    let external = false;
    if (router.origin) {
      if (href.startsWith(router.origin)) {
        href = router.history.createHref(href.replace(router.origin, "")) || "/";
      } else {
        external = true;
      }
    }
    return { href, external };
  }, [disabled, next.maskedLocation, next.url, router.origin, router.history]);
  const externalLink = React8.useMemo(() => {
    if (hrefOption?.external) {
      return hrefOption.href;
    }
    try {
      new URL(to);
      return to;
    } catch {
    }
    return void 0;
  }, [to, hrefOption]);
  const preload = options.reloadDocument || externalLink ? false : userPreload ?? router.options.defaultPreload;
  const preloadDelay = userPreloadDelay ?? router.options.defaultPreloadDelay ?? 0;
  const isActive = useRouterState({
    select: (s) => {
      if (externalLink) return false;
      if (activeOptions?.exact) {
        const testExact = exactPathTest(
          s.location.pathname,
          next.pathname,
          router.basepath
        );
        if (!testExact) {
          return false;
        }
      } else {
        const currentPathSplit = removeTrailingSlash(
          s.location.pathname,
          router.basepath
        );
        const nextPathSplit = removeTrailingSlash(
          next.pathname,
          router.basepath
        );
        const pathIsFuzzyEqual = currentPathSplit.startsWith(nextPathSplit) && (currentPathSplit.length === nextPathSplit.length || currentPathSplit[nextPathSplit.length] === "/");
        if (!pathIsFuzzyEqual) {
          return false;
        }
      }
      if (activeOptions?.includeSearch ?? true) {
        const searchTest = deepEqual(s.location.search, next.search, {
          partial: !activeOptions?.exact,
          ignoreUndefined: !activeOptions?.explicitUndefined
        });
        if (!searchTest) {
          return false;
        }
      }
      if (activeOptions?.includeHash) {
        return s.location.hash === next.hash;
      }
      return true;
    }
  });
  const doPreload = React8.useCallback(() => {
    router.preloadRoute({ ..._options }).catch((err) => {
      console.warn(err);
      console.warn(preloadWarning);
    });
  }, [router, _options]);
  const preloadViewportIoCallback = React8.useCallback(
    (entry) => {
      if (entry?.isIntersecting) {
        doPreload();
      }
    },
    [doPreload]
  );
  useIntersectionObserver(
    innerRef,
    preloadViewportIoCallback,
    intersectionObserverOptions,
    { disabled: !!disabled || !(preload === "viewport") }
  );
  React8.useEffect(() => {
    if (hasRenderFetched.current) {
      return;
    }
    if (!disabled && preload === "render") {
      doPreload();
      hasRenderFetched.current = true;
    }
  }, [disabled, doPreload, preload]);
  const handleClick = (e) => {
    const elementTarget = e.currentTarget.getAttribute("target");
    const effectiveTarget = target !== void 0 ? target : elementTarget;
    if (!disabled && !isCtrlEvent(e) && !e.defaultPrevented && (!effectiveTarget || effectiveTarget === "_self") && e.button === 0) {
      e.preventDefault();
      (0, import_react_dom.flushSync)(() => {
        setIsTransitioning(true);
      });
      const unsub = router.subscribe("onResolved", () => {
        unsub();
        setIsTransitioning(false);
      });
      router.navigate({
        ..._options,
        replace,
        resetScroll,
        hashScrollIntoView,
        startTransition: startTransition2,
        viewTransition,
        ignoreBlocker
      });
    }
  };
  if (externalLink) {
    return {
      ...propsSafeToSpread,
      ref: innerRef,
      href: externalLink,
      ...children && { children },
      ...target && { target },
      ...disabled && { disabled },
      ...style && { style },
      ...className && { className },
      ...onClick && { onClick },
      ...onFocus && { onFocus },
      ...onMouseEnter && { onMouseEnter },
      ...onMouseLeave && { onMouseLeave },
      ...onTouchStart && { onTouchStart }
    };
  }
  const handleFocus = (_) => {
    if (disabled) return;
    if (preload) {
      doPreload();
    }
  };
  const handleTouchStart = handleFocus;
  const handleEnter = (e) => {
    if (disabled || !preload) return;
    if (!preloadDelay) {
      doPreload();
    } else {
      const eventTarget = e.target;
      if (timeoutMap.has(eventTarget)) {
        return;
      }
      const id = setTimeout(() => {
        timeoutMap.delete(eventTarget);
        doPreload();
      }, preloadDelay);
      timeoutMap.set(eventTarget, id);
    }
  };
  const handleLeave = (e) => {
    if (disabled || !preload || !preloadDelay) return;
    const eventTarget = e.target;
    const id = timeoutMap.get(eventTarget);
    if (id) {
      clearTimeout(id);
      timeoutMap.delete(eventTarget);
    }
  };
  const resolvedActiveProps = isActive ? functionalUpdate(activeProps, {}) ?? STATIC_ACTIVE_OBJECT : STATIC_EMPTY_OBJECT;
  const resolvedInactiveProps = isActive ? STATIC_EMPTY_OBJECT : functionalUpdate(inactiveProps, {}) ?? STATIC_EMPTY_OBJECT;
  const resolvedClassName = [
    className,
    resolvedActiveProps.className,
    resolvedInactiveProps.className
  ].filter(Boolean).join(" ");
  const resolvedStyle = (style || resolvedActiveProps.style || resolvedInactiveProps.style) && {
    ...style,
    ...resolvedActiveProps.style,
    ...resolvedInactiveProps.style
  };
  return {
    ...propsSafeToSpread,
    ...resolvedActiveProps,
    ...resolvedInactiveProps,
    href: hrefOption?.href,
    ref: innerRef,
    onClick: composeHandlers([onClick, handleClick]),
    onFocus: composeHandlers([onFocus, handleFocus]),
    onMouseEnter: composeHandlers([onMouseEnter, handleEnter]),
    onMouseLeave: composeHandlers([onMouseLeave, handleLeave]),
    onTouchStart: composeHandlers([onTouchStart, handleTouchStart]),
    disabled: !!disabled,
    target,
    ...resolvedStyle && { style: resolvedStyle },
    ...resolvedClassName && { className: resolvedClassName },
    ...disabled && STATIC_DISABLED_PROPS,
    ...isActive && STATIC_ACTIVE_PROPS,
    ...isTransitioning && STATIC_TRANSITIONING_PROPS
  };
}
var STATIC_EMPTY_OBJECT = {};
var STATIC_ACTIVE_OBJECT = { className: "active" };
var STATIC_DISABLED_PROPS = { role: "link", "aria-disabled": true };
var STATIC_ACTIVE_PROPS = { "data-status": "active", "aria-current": "page" };
var STATIC_TRANSITIONING_PROPS = { "data-transitioning": "transitioning" };
var timeoutMap = /* @__PURE__ */ new WeakMap();
var intersectionObserverOptions = {
  rootMargin: "100px"
};
var composeHandlers = (handlers) => (e) => {
  for (const handler of handlers) {
    if (!handler) continue;
    if (e.defaultPrevented) return;
    handler(e);
  }
};
function createLink(Comp) {
  return React8.forwardRef(function CreatedLink(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Link, { ...props, _asChild: Comp, ref });
  });
}
var Link = React8.forwardRef(
  (props, ref) => {
    const { _asChild, ...rest } = props;
    const {
      type: _type,
      ref: innerRef,
      ...linkProps
    } = useLinkProps(rest, ref);
    const children = typeof rest.children === "function" ? rest.children({
      isActive: linkProps["data-status"] === "active"
    }) : rest.children;
    if (_asChild === void 0) {
      delete linkProps.disabled;
    }
    return React8.createElement(
      _asChild ? _asChild : "a",
      {
        ...linkProps,
        ref: innerRef
      },
      children
    );
  }
);
function isCtrlEvent(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}

// node_modules/@tanstack/react-router/dist/esm/route.js
var Route = class extends BaseRoute {
  /**
   * @deprecated Use the `createRoute` function instead.
   */
  constructor(options) {
    super(options);
    this.useMatch = (opts) => {
      return useMatch({
        select: opts?.select,
        from: this.id,
        structuralSharing: opts?.structuralSharing
      });
    };
    this.useRouteContext = (opts) => {
      return useMatch({
        ...opts,
        from: this.id,
        select: (d) => opts?.select ? opts.select(d.context) : d.context
      });
    };
    this.useSearch = (opts) => {
      return useSearch({
        select: opts?.select,
        structuralSharing: opts?.structuralSharing,
        from: this.id
      });
    };
    this.useParams = (opts) => {
      return useParams({
        select: opts?.select,
        structuralSharing: opts?.structuralSharing,
        from: this.id
      });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({ ...opts, from: this.id });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({ ...opts, from: this.id });
    };
    this.useNavigate = () => {
      return useNavigate({ from: this.fullPath });
    };
    this.Link = import_react3.default.forwardRef(
      (props, ref) => {
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Link, { ref, from: this.fullPath, ...props });
      }
    );
    this.$$typeof = Symbol.for("react.memo");
  }
};
function createRoute(options) {
  return new Route(
    // TODO: Help us TypeChris, you're our only hope!
    options
  );
}
var RootRoute = class extends BaseRootRoute {
  /**
   * @deprecated `RootRoute` is now an internal implementation detail. Use `createRootRoute()` instead.
   */
  constructor(options) {
    super(options);
    this.useMatch = (opts) => {
      return useMatch({
        select: opts?.select,
        from: this.id,
        structuralSharing: opts?.structuralSharing
      });
    };
    this.useRouteContext = (opts) => {
      return useMatch({
        ...opts,
        from: this.id,
        select: (d) => opts?.select ? opts.select(d.context) : d.context
      });
    };
    this.useSearch = (opts) => {
      return useSearch({
        select: opts?.select,
        structuralSharing: opts?.structuralSharing,
        from: this.id
      });
    };
    this.useParams = (opts) => {
      return useParams({
        select: opts?.select,
        structuralSharing: opts?.structuralSharing,
        from: this.id
      });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({ ...opts, from: this.id });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({ ...opts, from: this.id });
    };
    this.useNavigate = () => {
      return useNavigate({ from: this.fullPath });
    };
    this.Link = import_react3.default.forwardRef(
      (props, ref) => {
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Link, { ref, from: this.fullPath, ...props });
      }
    );
    this.$$typeof = Symbol.for("react.memo");
  }
};
function createRootRoute(options) {
  return new RootRoute(options);
}

// node_modules/@tanstack/react-router/dist/esm/fileRoute.js
function createFileRoute(path) {
  if (typeof path === "object") {
    return new FileRoute(path, {
      silent: true
    }).createRoute(path);
  }
  return new FileRoute(path, {
    silent: true
  }).createRoute;
}
var FileRoute = class {
  constructor(path, _opts) {
    this.path = path;
    this.createRoute = (options) => {
      tiny_warning_esm_default(
        this.silent,
        "FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead."
      );
      const route = createRoute(options);
      route.isRoot = false;
      return route;
    };
    this.silent = _opts?.silent;
  }
};
var LazyRoute = class {
  constructor(opts) {
    this.useMatch = (opts2) => {
      return useMatch({
        select: opts2?.select,
        from: this.options.id,
        structuralSharing: opts2?.structuralSharing
      });
    };
    this.useRouteContext = (opts2) => {
      return useMatch({
        from: this.options.id,
        select: (d) => opts2?.select ? opts2.select(d.context) : d.context
      });
    };
    this.useSearch = (opts2) => {
      return useSearch({
        select: opts2?.select,
        structuralSharing: opts2?.structuralSharing,
        from: this.options.id
      });
    };
    this.useParams = (opts2) => {
      return useParams({
        select: opts2?.select,
        structuralSharing: opts2?.structuralSharing,
        from: this.options.id
      });
    };
    this.useLoaderDeps = (opts2) => {
      return useLoaderDeps({ ...opts2, from: this.options.id });
    };
    this.useLoaderData = (opts2) => {
      return useLoaderData({ ...opts2, from: this.options.id });
    };
    this.useNavigate = () => {
      const router = useRouter();
      return useNavigate({ from: router.routesById[this.options.id].fullPath });
    };
    this.options = opts;
    this.$$typeof = Symbol.for("react.memo");
  }
};
function createLazyFileRoute(id) {
  if (typeof id === "object") {
    return new LazyRoute(id);
  }
  return (opts) => new LazyRoute({ id, ...opts });
}

// node_modules/@tanstack/react-router/dist/esm/Matches.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var React11 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/Transitioner.js
var React9 = __toESM(require_react(), 1);
function Transitioner() {
  const router = useRouter();
  const mountLoadForRouter = React9.useRef({ router, mounted: false });
  const [isTransitioning, setIsTransitioning] = React9.useState(false);
  const { hasPendingMatches, isLoading } = useRouterState({
    select: (s) => ({
      isLoading: s.isLoading,
      hasPendingMatches: s.matches.some((d) => d.status === "pending")
    }),
    structuralSharing: true
  });
  const previousIsLoading = usePrevious(isLoading);
  const isAnyPending = isLoading || isTransitioning || hasPendingMatches;
  const previousIsAnyPending = usePrevious(isAnyPending);
  const isPagePending = isLoading || hasPendingMatches;
  const previousIsPagePending = usePrevious(isPagePending);
  router.startTransition = (fn) => {
    setIsTransitioning(true);
    React9.startTransition(() => {
      fn();
      setIsTransitioning(false);
    });
  };
  React9.useEffect(() => {
    const unsub = router.history.subscribe(router.load);
    const nextLocation = router.buildLocation({
      to: router.latestLocation.pathname,
      search: true,
      params: true,
      hash: true,
      state: true,
      _includeValidateSearch: true
    });
    if (trimPathRight(router.latestLocation.href) !== trimPathRight(nextLocation.href)) {
      router.commitLocation({ ...nextLocation, replace: true });
    }
    return () => {
      unsub();
    };
  }, [router, router.history]);
  useLayoutEffect2(() => {
    if (
      // if we are hydrating from SSR, loading is triggered in ssr-client
      typeof window !== "undefined" && router.ssr || mountLoadForRouter.current.router === router && mountLoadForRouter.current.mounted
    ) {
      return;
    }
    mountLoadForRouter.current = { router, mounted: true };
    const tryLoad = async () => {
      try {
        await router.load();
      } catch (err) {
        console.error(err);
      }
    };
    tryLoad();
  }, [router]);
  useLayoutEffect2(() => {
    if (previousIsLoading && !isLoading) {
      router.emit({
        type: "onLoad",
        // When the new URL has committed, when the new matches have been loaded into state.matches
        ...getLocationChangeInfo(router.state)
      });
    }
  }, [previousIsLoading, router, isLoading]);
  useLayoutEffect2(() => {
    if (previousIsPagePending && !isPagePending) {
      router.emit({
        type: "onBeforeRouteMount",
        ...getLocationChangeInfo(router.state)
      });
    }
  }, [isPagePending, previousIsPagePending, router]);
  useLayoutEffect2(() => {
    if (previousIsAnyPending && !isAnyPending) {
      router.emit({
        type: "onResolved",
        ...getLocationChangeInfo(router.state)
      });
      router.__store.setState((s) => ({
        ...s,
        status: "idle",
        resolvedLocation: s.location
      }));
      handleHashScroll(router);
    }
  }, [isAnyPending, previousIsAnyPending, router]);
  return null;
}

// node_modules/@tanstack/react-router/dist/esm/Match.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var React10 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/not-found.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function CatchNotFound(props) {
  const resetKey = useRouterState({
    select: (s) => `not-found-${s.location.pathname}-${s.status}`
  });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    CatchBoundary,
    {
      getResetKey: () => resetKey,
      onCatch: (error, errorInfo) => {
        if (isNotFound(error)) {
          props.onCatch?.(error, errorInfo);
        } else {
          throw error;
        }
      },
      errorComponent: ({ error }) => {
        if (isNotFound(error)) {
          return props.fallback?.(error);
        } else {
          throw error;
        }
      },
      children: props.children
    }
  );
}
function DefaultGlobalNotFound() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Not Found" });
}

// node_modules/@tanstack/react-router/dist/esm/SafeFragment.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function SafeFragment(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: props.children });
}

// node_modules/@tanstack/react-router/dist/esm/renderRouteNotFound.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function renderRouteNotFound(router, route, data) {
  if (!route.options.notFoundComponent) {
    if (router.options.defaultNotFoundComponent) {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(router.options.defaultNotFoundComponent, { data });
    }
    if (true) {
      tiny_warning_esm_default(
        route.options.notFoundComponent,
        `A notFoundError was encountered on the route with ID "${route.id}", but a notFoundComponent option was not configured, nor was a router level defaultNotFoundComponent configured. Consider configuring at least one of these to avoid TanStack Router's overly generic defaultNotFoundComponent (<div>Not Found<div>)`
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DefaultGlobalNotFound, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(route.options.notFoundComponent, { data });
}

// node_modules/@tanstack/react-router/dist/esm/scroll-restoration.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);

// node_modules/@tanstack/react-router/dist/esm/ScriptOnce.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function ScriptOnce({ children }) {
  const router = useRouter();
  if (!router.isServer) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "script",
    {
      nonce: router.options.ssr?.nonce,
      className: "$tsr",
      dangerouslySetInnerHTML: {
        __html: [children].filter(Boolean).join("\n") + ";$_TSR.c()"
      }
    }
  );
}

// node_modules/@tanstack/react-router/dist/esm/scroll-restoration.js
function ScrollRestoration() {
  const router = useRouter();
  if (!router.isScrollRestoring || !router.isServer) {
    return null;
  }
  if (typeof router.options.scrollRestoration === "function") {
    const shouldRestore = router.options.scrollRestoration({
      location: router.latestLocation
    });
    if (!shouldRestore) {
      return null;
    }
  }
  const getKey = router.options.getScrollRestorationKey || defaultGetScrollRestorationKey;
  const userKey = getKey(router.latestLocation);
  const resolvedKey = userKey !== defaultGetScrollRestorationKey(router.latestLocation) ? userKey : void 0;
  const restoreScrollOptions = {
    storageKey,
    shouldScrollRestoration: true
  };
  if (resolvedKey) {
    restoreScrollOptions.key = resolvedKey;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    ScriptOnce,
    {
      children: `(${restoreScroll.toString()})(${JSON.stringify(restoreScrollOptions)})`
    }
  );
}

// node_modules/@tanstack/react-router/dist/esm/Match.js
var Match = React10.memo(function MatchImpl({
  matchId
}) {
  const router = useRouter();
  const matchState = useRouterState({
    select: (s) => {
      const match = s.matches.find((d) => d.id === matchId);
      invariant(
        match,
        `Could not find match for matchId "${matchId}". Please file an issue!`
      );
      return {
        routeId: match.routeId,
        ssr: match.ssr,
        _displayPending: match._displayPending
      };
    },
    structuralSharing: true
  });
  const route = router.routesById[matchState.routeId];
  const PendingComponent = route.options.pendingComponent ?? router.options.defaultPendingComponent;
  const pendingElement = PendingComponent ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(PendingComponent, {}) : null;
  const routeErrorComponent = route.options.errorComponent ?? router.options.defaultErrorComponent;
  const routeOnCatch = route.options.onCatch ?? router.options.defaultOnCatch;
  const routeNotFoundComponent = route.isRoot ? (
    // If it's the root route, use the globalNotFound option, with fallback to the notFoundRoute's component
    route.options.notFoundComponent ?? router.options.notFoundRoute?.options.component
  ) : route.options.notFoundComponent;
  const resolvedNoSsr = matchState.ssr === false || matchState.ssr === "data-only";
  const ResolvedSuspenseBoundary = (
    // If we're on the root route, allow forcefully wrapping in suspense
    (!route.isRoot || route.options.wrapInSuspense || resolvedNoSsr) && (route.options.wrapInSuspense ?? PendingComponent ?? (route.options.errorComponent?.preload || resolvedNoSsr)) ? React10.Suspense : SafeFragment
  );
  const ResolvedCatchBoundary = routeErrorComponent ? CatchBoundary : SafeFragment;
  const ResolvedNotFoundBoundary = routeNotFoundComponent ? CatchNotFound : SafeFragment;
  const resetKey = useRouterState({
    select: (s) => s.loadedAt
  });
  const parentRouteId = useRouterState({
    select: (s) => {
      const index = s.matches.findIndex((d) => d.id === matchId);
      return s.matches[index - 1]?.routeId;
    }
  });
  const ShellComponent = route.isRoot ? route.options.shellComponent ?? SafeFragment : SafeFragment;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(ShellComponent, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(matchContext.Provider, { value: matchId, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ResolvedSuspenseBoundary, { fallback: pendingElement, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      ResolvedCatchBoundary,
      {
        getResetKey: () => resetKey,
        errorComponent: routeErrorComponent || ErrorComponent,
        onCatch: (error, errorInfo) => {
          if (isNotFound(error)) throw error;
          tiny_warning_esm_default(false, `Error in route match: ${matchId}`);
          routeOnCatch?.(error, errorInfo);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          ResolvedNotFoundBoundary,
          {
            fallback: (error) => {
              if (!routeNotFoundComponent || error.routeId && error.routeId !== matchState.routeId || !error.routeId && !route.isRoot)
                throw error;
              return React10.createElement(routeNotFoundComponent, error);
            },
            children: resolvedNoSsr || matchState._displayPending ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ClientOnly, { fallback: pendingElement, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(MatchInner, { matchId }) }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(MatchInner, { matchId })
          }
        )
      }
    ) }) }),
    parentRouteId === rootRouteId && router.options.scrollRestoration ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(OnRendered, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ScrollRestoration, {})
    ] }) : null
  ] });
});
function OnRendered() {
  const router = useRouter();
  const prevLocationRef = React10.useRef(
    void 0
  );
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "script",
    {
      suppressHydrationWarning: true,
      ref: (el) => {
        if (el && (prevLocationRef.current === void 0 || prevLocationRef.current.href !== router.latestLocation.href)) {
          router.emit({
            type: "onRendered",
            ...getLocationChangeInfo(router.state)
          });
          prevLocationRef.current = router.latestLocation;
        }
      }
    },
    router.latestLocation.state.__TSR_key
  );
}
var MatchInner = React10.memo(function MatchInnerImpl({
  matchId
}) {
  const router = useRouter();
  const { match, key, routeId } = useRouterState({
    select: (s) => {
      const match2 = s.matches.find((d) => d.id === matchId);
      const routeId2 = match2.routeId;
      const remountFn = router.routesById[routeId2].options.remountDeps ?? router.options.defaultRemountDeps;
      const remountDeps = remountFn?.({
        routeId: routeId2,
        loaderDeps: match2.loaderDeps,
        params: match2._strictParams,
        search: match2._strictSearch
      });
      const key2 = remountDeps ? JSON.stringify(remountDeps) : void 0;
      return {
        key: key2,
        routeId: routeId2,
        match: {
          id: match2.id,
          status: match2.status,
          error: match2.error,
          _forcePending: match2._forcePending,
          _displayPending: match2._displayPending
        }
      };
    },
    structuralSharing: true
  });
  const route = router.routesById[routeId];
  const out = React10.useMemo(() => {
    const Comp = route.options.component ?? router.options.defaultComponent;
    if (Comp) {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Comp, {}, key);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Outlet, {});
  }, [key, route.options.component, router.options.defaultComponent]);
  if (match._displayPending) {
    throw router.getMatch(match.id)?._nonReactive.displayPendingPromise;
  }
  if (match._forcePending) {
    throw router.getMatch(match.id)?._nonReactive.minPendingPromise;
  }
  if (match.status === "pending") {
    const pendingMinMs = route.options.pendingMinMs ?? router.options.defaultPendingMinMs;
    if (pendingMinMs) {
      const routerMatch = router.getMatch(match.id);
      if (routerMatch && !routerMatch._nonReactive.minPendingPromise) {
        if (!router.isServer) {
          const minPendingPromise = createControlledPromise();
          routerMatch._nonReactive.minPendingPromise = minPendingPromise;
          setTimeout(() => {
            minPendingPromise.resolve();
            routerMatch._nonReactive.minPendingPromise = void 0;
          }, pendingMinMs);
        }
      }
    }
    throw router.getMatch(match.id)?._nonReactive.loadPromise;
  }
  if (match.status === "notFound") {
    invariant(isNotFound(match.error), "Expected a notFound error");
    return renderRouteNotFound(router, route, match.error);
  }
  if (match.status === "redirected") {
    invariant(isRedirect(match.error), "Expected a redirect error");
    throw router.getMatch(match.id)?._nonReactive.loadPromise;
  }
  if (match.status === "error") {
    if (router.isServer) {
      const RouteErrorComponent = (route.options.errorComponent ?? router.options.defaultErrorComponent) || ErrorComponent;
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        RouteErrorComponent,
        {
          error: match.error,
          reset: void 0,
          info: {
            componentStack: ""
          }
        }
      );
    }
    throw match.error;
  }
  return out;
});
var Outlet = React10.memo(function OutletImpl() {
  const router = useRouter();
  const matchId = React10.useContext(matchContext);
  const routeId = useRouterState({
    select: (s) => s.matches.find((d) => d.id === matchId)?.routeId
  });
  const route = router.routesById[routeId];
  const parentGlobalNotFound = useRouterState({
    select: (s) => {
      const matches = s.matches;
      const parentMatch = matches.find((d) => d.id === matchId);
      invariant(
        parentMatch,
        `Could not find parent match for matchId "${matchId}"`
      );
      return parentMatch.globalNotFound;
    }
  });
  const childMatchId = useRouterState({
    select: (s) => {
      const matches = s.matches;
      const index = matches.findIndex((d) => d.id === matchId);
      return matches[index + 1]?.id;
    }
  });
  const pendingElement = router.options.defaultPendingComponent ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(router.options.defaultPendingComponent, {}) : null;
  if (parentGlobalNotFound) {
    return renderRouteNotFound(router, route, void 0);
  }
  if (!childMatchId) {
    return null;
  }
  const nextMatch = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Match, { matchId: childMatchId });
  if (matchId === rootRouteId) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(React10.Suspense, { fallback: pendingElement, children: nextMatch });
  }
  return nextMatch;
});

// node_modules/@tanstack/react-router/dist/esm/Matches.js
function Matches() {
  const router = useRouter();
  const rootRoute = router.routesById[rootRouteId];
  const PendingComponent = rootRoute.options.pendingComponent ?? router.options.defaultPendingComponent;
  const pendingElement = PendingComponent ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PendingComponent, {}) : null;
  const ResolvedSuspense = router.isServer || typeof document !== "undefined" && router.ssr ? SafeFragment : React11.Suspense;
  const inner = /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(ResolvedSuspense, { fallback: pendingElement, children: [
    !router.isServer && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Transitioner, {}),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(MatchesInner, {})
  ] });
  return router.options.InnerWrap ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(router.options.InnerWrap, { children: inner }) : inner;
}
function MatchesInner() {
  const router = useRouter();
  const matchId = useRouterState({
    select: (s) => {
      return s.matches[0]?.id;
    }
  });
  const resetKey = useRouterState({
    select: (s) => s.loadedAt
  });
  const matchComponent = matchId ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Match, { matchId }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(matchContext.Provider, { value: matchId, children: router.options.disableGlobalCatchBoundary ? matchComponent : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    CatchBoundary,
    {
      getResetKey: () => resetKey,
      errorComponent: ErrorComponent,
      onCatch: (error) => {
        tiny_warning_esm_default(
          false,
          `The following error wasn't caught by any route! At the very least, consider setting an 'errorComponent' in your RootRoute!`
        );
        tiny_warning_esm_default(false, error.message || error.toString());
      },
      children: matchComponent
    }
  ) });
}
function useMatches(opts) {
  return useRouterState({
    select: (state) => {
      const matches = state.matches;
      return opts?.select ? opts.select(matches) : matches;
    },
    structuralSharing: opts?.structuralSharing
  });
}

// node_modules/@tanstack/react-router/dist/esm/router.js
var createRouter = (options) => {
  return new Router(options);
};
var Router = class extends RouterCore {
  constructor(options) {
    super(options);
  }
};
if (typeof globalThis !== "undefined") {
  globalThis.createFileRoute = createFileRoute;
  globalThis.createLazyFileRoute = createLazyFileRoute;
} else if (typeof window !== "undefined") {
  window.createFileRoute = createFileRoute;
  window.createLazyFileRoute = createLazyFileRoute;
}

// node_modules/@tanstack/react-router/dist/esm/RouterProvider.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function RouterContextProvider({
  router,
  children,
  ...rest
}) {
  if (Object.keys(rest).length > 0) {
    router.update({
      ...router.options,
      ...rest,
      context: {
        ...router.options.context,
        ...rest.context
      }
    });
  }
  const routerContext2 = getRouterContext();
  const provider = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(routerContext2.Provider, { value: router, children });
  if (router.options.Wrap) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(router.options.Wrap, { children: provider });
  }
  return provider;
}
function RouterProvider({ router, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(RouterContextProvider, { router, ...rest, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Matches, {}) });
}

// node_modules/@tanstack/react-router/dist/esm/useCanGoBack.js
function useCanGoBack() {
  return useRouterState({ select: (s) => s.location.state.__TSR_index !== 0 });
}

// packages/boot/build-module/components/app/router.js
var import_i18n6 = __toESM(require_i18n());
var import_element8 = __toESM(require_element());

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// packages/admin-ui/build-module/navigable-region/index.js
var import_element = __toESM(require_element());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var NavigableRegion = (0, import_element.forwardRef)(
  ({ children, className, ariaLabel, as: Tag = "div", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Tag,
      {
        ref,
        className: clsx_default("admin-ui-navigable-region", className),
        "aria-label": ariaLabel,
        role: "region",
        tabIndex: "-1",
        ...props,
        children
      }
    );
  }
);
NavigableRegion.displayName = "NavigableRegion";
var navigable_region_default = NavigableRegion;

// packages/admin-ui/build-module/page/header.js
var import_components = __toESM(require_components());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
function Header({
  breadcrumbs,
  badges,
  title,
  subTitle,
  actions
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_components.__experimentalVStack, { className: "admin-ui-page__header", as: "header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      import_components.__experimentalHStack,
      {
        className: "admin-ui-page__header-title",
        justify: "space-between",
        spacing: 2,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_components.__experimentalHStack, { spacing: 2, children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_components.__experimentalHeading, { as: "h2", level: 3, weight: 500, truncate: true, children: title }),
            breadcrumbs,
            badges
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            import_components.__experimentalHStack,
            {
              style: { width: "auto", flexShrink: 0 },
              spacing: 2,
              className: "admin-ui-page__header-actions",
              children: actions
            }
          )
        ]
      }
    ),
    subTitle && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "admin-ui-page__header-subtitle", children: subTitle })
  ] });
}

// packages/admin-ui/build-module/page/index.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
function Page({
  breadcrumbs,
  badges,
  title,
  subTitle,
  children,
  className,
  actions,
  hasPadding = false
}) {
  const classes = clsx_default("admin-ui-page", className);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(navigable_region_default, { className: classes, ariaLabel: title, children: [
    (title || breadcrumbs || badges) && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      Header,
      {
        breadcrumbs,
        badges,
        title,
        subTitle,
        actions
      }
    ),
    hasPadding ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "admin-ui-page__content has-padding", children }) : children
  ] });
}
var page_default = Page;

// packages/boot/build-module/components/root/index.js
var import_commands2 = __toESM(require_commands());
var import_theme = __toESM(require_theme());

// packages/boot/build-module/components/site-hub/index.js
var import_data2 = __toESM(require_data());
var import_components2 = __toESM(require_components());
var import_i18n2 = __toESM(require_i18n());
var import_core_data2 = __toESM(require_core_data());
var import_html_entities = __toESM(require_html_entities());

// packages/icons/build-module/icon/index.js
var import_element2 = __toESM(require_element());
var icon_default = (0, import_element2.forwardRef)(
  ({ icon, size = 24, ...props }, ref) => {
    return (0, import_element2.cloneElement)(icon, {
      width: size,
      height: size,
      ...props,
      ref
    });
  }
);

// packages/icons/build-module/library/arrow-up-left.js
var import_primitives = __toESM(require_primitives());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var arrow_up_left_default = /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_primitives.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_primitives.Path, { d: "M14 6H6v8h1.5V8.5L17 18l1-1-9.5-9.5H14V6Z" }) });

// packages/icons/build-module/library/chevron-down-small.js
var import_primitives2 = __toESM(require_primitives());
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var chevron_down_small_default = /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_primitives2.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_primitives2.Path, { d: "m15.99 10.889-3.988 3.418-3.988-3.418.976-1.14 3.012 2.582 3.012-2.581.976 1.139Z" }) });

// packages/icons/build-module/library/chevron-left-small.js
var import_primitives3 = __toESM(require_primitives());
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var chevron_left_small_default = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_primitives3.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_primitives3.Path, { d: "m13.1 16-3.4-4 3.4-4 1.1 1-2.6 3 2.6 3-1.1 1z" }) });

// packages/icons/build-module/library/chevron-left.js
var import_primitives4 = __toESM(require_primitives());
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var chevron_left_default = /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_primitives4.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_primitives4.Path, { d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z" }) });

// packages/icons/build-module/library/chevron-right-small.js
var import_primitives5 = __toESM(require_primitives());
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var chevron_right_small_default = /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_primitives5.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_primitives5.Path, { d: "M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z" }) });

// packages/icons/build-module/library/chevron-right.js
var import_primitives6 = __toESM(require_primitives());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var chevron_right_default = /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_primitives6.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_primitives6.Path, { d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z" }) });

// packages/icons/build-module/library/search.js
var import_primitives7 = __toESM(require_primitives());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var search_default = /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_primitives7.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_primitives7.Path, { d: "M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" }) });

// packages/icons/build-module/library/wordpress.js
var import_primitives8 = __toESM(require_primitives());
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var wordpress_default = /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_primitives8.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "-2 -2 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_primitives8.Path, { d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z" }) });

// packages/boot/build-module/components/site-hub/index.js
var import_keycodes = __toESM(require_keycodes());
var import_commands = __toESM(require_commands());
var import_url = __toESM(require_url());

// packages/boot/build-module/components/site-icon/index.js
var import_data = __toESM(require_data());
var import_i18n = __toESM(require_i18n());
var import_core_data = __toESM(require_core_data());
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var css = `/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
.boot-site-icon {
  display: flex;
}

.boot-site-icon__icon {
  width: 32px;
  height: 32px;
  color: var(--wpds-color-fg-content-neutral, #1e1e1e);
}

.boot-site-icon__image {
  width: 32px;
  height: 32px;
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: var(--wpds-border-radius-medium, 4px);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnL2d1dGVuYmVyZy9wYWNrYWdlcy9ib290L3NyYy9jb21wb25lbnRzL3NpdGUtaWNvbiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvYmFzZS1zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvYmFzZS1zdHlsZXMvX2NvbG9ycy5zY3NzIiwic3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQ0FBO0FBQUE7QUFBQTtBRFVBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQTZCQTtBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFnQkE7QUFBQTtBQUFBO0FBd0JBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQWVBO0FBQUE7QUFBQTtBQW1CQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBRWhLQTtFQUNDOzs7QUFHRDtFQUNDLE9Ga0RjO0VFakRkLFFGaURjO0VFaERkOzs7QUFHRDtFQUNDLE9GNENjO0VFM0NkLFFGMkNjO0VFMUNkO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU0NTUyBWYXJpYWJsZXMuXG4gKlxuICogUGxlYXNlIHVzZSB2YXJpYWJsZXMgZnJvbSB0aGlzIHNoZWV0IHRvIGVuc3VyZSBjb25zaXN0ZW5jeSBhY3Jvc3MgdGhlIFVJLlxuICogRG9uJ3QgYWRkIHRvIHRoaXMgc2hlZXQgdW5sZXNzIHlvdSdyZSBwcmV0dHkgc3VyZSB0aGUgdmFsdWUgd2lsbCBiZSByZXVzZWQgaW4gbWFueSBwbGFjZXMuXG4gKiBGb3IgZXhhbXBsZSwgZG9uJ3QgYWRkIHJ1bGVzIHRvIHRoaXMgc2hlZXQgdGhhdCBhZmZlY3QgYmxvY2sgdmlzdWFscy4gSXQncyBwdXJlbHkgZm9yIFVJLlxuICovXG5cbkB1c2UgXCIuL2NvbG9yc1wiO1xuXG4vKipcbiAqIEZvbnRzICYgYmFzaWMgdmFyaWFibGVzLlxuICovXG5cbiRkZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgLy8gVG9kbzogZGVwcmVjYXRlIGluIGZhdm9yIG9mICRmYW1pbHkgdmFyaWFibGVzXG4kZGVmYXVsdC1saW5lLWhlaWdodDogMS40OyAvLyBUb2RvOiBkZXByZWNhdGUgaW4gZmF2b3Igb2YgJGxpbmUtaGVpZ2h0IHRva2Vuc1xuXG4vKipcbiAqIFR5cG9ncmFwaHlcbiAqL1xuXG4vLyBTaXplc1xuJGZvbnQtc2l6ZS14LXNtYWxsOiAxMXB4O1xuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtbWVkaXVtOiAxM3B4O1xuJGZvbnQtc2l6ZS1sYXJnZTogMTVweDtcbiRmb250LXNpemUteC1sYXJnZTogMjBweDtcbiRmb250LXNpemUtMngtbGFyZ2U6IDMycHg7XG5cbi8vIExpbmUgaGVpZ2h0c1xuJGZvbnQtbGluZS1oZWlnaHQteC1zbWFsbDogMTZweDtcbiRmb250LWxpbmUtaGVpZ2h0LXNtYWxsOiAyMHB4O1xuJGZvbnQtbGluZS1oZWlnaHQtbWVkaXVtOiAyNHB4O1xuJGZvbnQtbGluZS1oZWlnaHQtbGFyZ2U6IDI4cHg7XG4kZm9udC1saW5lLWhlaWdodC14LWxhcmdlOiAzMnB4O1xuJGZvbnQtbGluZS1oZWlnaHQtMngtbGFyZ2U6IDQwcHg7XG5cbi8vIFdlaWdodHNcbiRmb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XG4kZm9udC13ZWlnaHQtbWVkaXVtOiA0OTk7IC8vIGVuc3VyZXMgZmFsbGJhY2sgdG8gNDAwIChpbnN0ZWFkIG9mIDYwMClcblxuLy8gRmFtaWxpZXNcbiRmb250LWZhbWlseS1oZWFkaW5nczogLWFwcGxlLXN5c3RlbSwgXCJzeXN0ZW0tdWlcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHk6IC1hcHBsZS1zeXN0ZW0sIFwic3lzdGVtLXVpXCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgQ29uc29sYXMsIG1vbmFjbywgbW9ub3NwYWNlO1xuXG4vKipcbiAqIEdyaWQgU3lzdGVtLlxuICogaHR0cHM6Ly9tYWtlLndvcmRwcmVzcy5vcmcvZGVzaWduLzIwMTkvMTAvMzEvcHJvcG9zYWwtYS1jb25zaXN0ZW50LXNwYWNpbmctc3lzdGVtLWZvci13b3JkcHJlc3MvXG4gKi9cblxuJGdyaWQtdW5pdDogOHB4O1xuJGdyaWQtdW5pdC0wNTogMC41ICogJGdyaWQtdW5pdDtcdC8vIDRweFxuJGdyaWQtdW5pdC0xMDogMSAqICRncmlkLXVuaXQ7XHRcdC8vIDhweFxuJGdyaWQtdW5pdC0xNTogMS41ICogJGdyaWQtdW5pdDtcdC8vIDEycHhcbiRncmlkLXVuaXQtMjA6IDIgKiAkZ3JpZC11bml0O1x0XHQvLyAxNnB4XG4kZ3JpZC11bml0LTMwOiAzICogJGdyaWQtdW5pdDtcdFx0Ly8gMjRweFxuJGdyaWQtdW5pdC00MDogNCAqICRncmlkLXVuaXQ7XHRcdC8vIDMycHhcbiRncmlkLXVuaXQtNTA6IDUgKiAkZ3JpZC11bml0O1x0XHQvLyA0MHB4XG4kZ3JpZC11bml0LTYwOiA2ICogJGdyaWQtdW5pdDtcdFx0Ly8gNDhweFxuJGdyaWQtdW5pdC03MDogNyAqICRncmlkLXVuaXQ7XHRcdC8vIDU2cHhcbiRncmlkLXVuaXQtODA6IDggKiAkZ3JpZC11bml0O1x0XHQvLyA2NHB4XG5cbi8qKlxuICogUmFkaXVzIHNjYWxlLlxuICovXG5cbiRyYWRpdXMteC1zbWFsbDogMXB4OyAgIC8vIEFwcGxpZWQgdG8gZWxlbWVudHMgbGlrZSBidXR0b25zIG5lc3RlZCB3aXRoaW4gcHJpbWl0aXZlcyBsaWtlIGlucHV0cy5cbiRyYWRpdXMtc21hbGw6IDJweDsgICAgIC8vIEFwcGxpZWQgdG8gbW9zdCBwcmltaXRpdmVzLlxuJHJhZGl1cy1tZWRpdW06IDRweDsgICAgLy8gQXBwbGllZCB0byBjb250YWluZXJzIHdpdGggc21hbGxlciBwYWRkaW5nLlxuJHJhZGl1cy1sYXJnZTogOHB4OyAgICAgLy8gQXBwbGllZCB0byBjb250YWluZXJzIHdpdGggbGFyZ2VyIHBhZGRpbmcuXG4kcmFkaXVzLWZ1bGw6IDk5OTlweDsgICAvLyBGb3IgcGlsbHMuXG4kcmFkaXVzLXJvdW5kOiA1MCU7ICAgICAvLyBGb3IgY2lyY2xlcyBhbmQgb3ZhbHMuXG5cbi8qKlxuICogRWxldmF0aW9uIHNjYWxlLlxuICovXG5cbi8vIEZvciBzZWN0aW9ucyBhbmQgY29udGFpbmVycyB0aGF0IGdyb3VwIHJlbGF0ZWQgY29udGVudCBhbmQgY29udHJvbHMsIHdoaWNoIG1heSBvdmVybGFwIG90aGVyIGNvbnRlbnQuIEV4YW1wbGU6IFByZXZpZXcgRnJhbWUuXG4kZWxldmF0aW9uLXgtc21hbGw6IDAgMXB4IDFweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDMpLCAwIDFweCAycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKSwgMCAzcHggM3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMiksIDAgNHB4IDRweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDEpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IHByb3ZpZGUgY29udGV4dHVhbCBmZWVkYmFjayB3aXRob3V0IGJlaW5nIGludHJ1c2l2ZS4gR2VuZXJhbGx5IG5vbi1pbnRlcnJ1cHRpdmUuIEV4YW1wbGU6IFRvb2x0aXBzLCBTbmFja2Jhci5cbiRlbGV2YXRpb24tc21hbGw6IDAgMXB4IDJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDUpLCAwIDJweCAzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCA2cHggNnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMyksIDAgOHB4IDhweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IG9mZmVyIGFkZGl0aW9uYWwgYWN0aW9ucy4gRXhhbXBsZTogTWVudXMsIENvbW1hbmQgUGFsZXR0ZVxuJGVsZXZhdGlvbi1tZWRpdW06IDAgMnB4IDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDUpLCAwIDRweCA1cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCAxMnB4IDEycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAzKSwgMCAxNnB4IDE2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLy8gRm9yIGNvbXBvbmVudHMgdGhhdCBjb25maXJtIGRlY2lzaW9ucyBvciBoYW5kbGUgbmVjZXNzYXJ5IGludGVycnVwdGlvbnMuIEV4YW1wbGU6IE1vZGFscy5cbiRlbGV2YXRpb24tbGFyZ2U6IDAgNXB4IDE1cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA4KSwgMCAxNXB4IDI3cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA3KSwgMCAzMHB4IDM2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCA1MHB4IDQzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLyoqXG4gKiBEaW1lbnNpb25zLlxuICovXG5cbiRpY29uLXNpemU6IDI0cHg7XG4kYnV0dG9uLXNpemU6IDM2cHg7XG4kYnV0dG9uLXNpemUtbmV4dC1kZWZhdWx0LTQwcHg6IDQwcHg7IC8vIHRyYW5zaXRpb25hcnkgdmFyaWFibGUgZm9yIG5leHQgZGVmYXVsdCBidXR0b24gc2l6ZVxuJGJ1dHRvbi1zaXplLXNtYWxsOiAyNHB4O1xuJGJ1dHRvbi1zaXplLWNvbXBhY3Q6IDMycHg7XG4kaGVhZGVyLWhlaWdodDogNjRweDtcbiRwYW5lbC1oZWFkZXItaGVpZ2h0OiAkZ3JpZC11bml0LTYwO1xuJG5hdi1zaWRlYmFyLXdpZHRoOiAzMDBweDtcbiRhZG1pbi1iYXItaGVpZ2h0OiAzMnB4O1xuJGFkbWluLWJhci1oZWlnaHQtYmlnOiA0NnB4O1xuJGFkbWluLXNpZGViYXItd2lkdGg6IDE2MHB4O1xuJGFkbWluLXNpZGViYXItd2lkdGgtYmlnOiAxOTBweDtcbiRhZG1pbi1zaWRlYmFyLXdpZHRoLWNvbGxhcHNlZDogMzZweDtcbiRtb2RhbC1taW4td2lkdGg6IDM1MHB4O1xuJG1vZGFsLXdpZHRoLXNtYWxsOiAzODRweDtcbiRtb2RhbC13aWR0aC1tZWRpdW06IDUxMnB4O1xuJG1vZGFsLXdpZHRoLWxhcmdlOiA4NDBweDtcbiRzcGlubmVyLXNpemU6IDE2cHg7XG4kY2FudmFzLXBhZGRpbmc6ICRncmlkLXVuaXQtMjA7XG5cbi8qKlxuICogTW9iaWxlIHNwZWNpZmljIHN0eWxlc1xuICovXG4kbW9iaWxlLXRleHQtbWluLWZvbnQtc2l6ZTogMTZweDsgLy8gQW55IGZvbnQgc2l6ZSBiZWxvdyAxNnB4IHdpbGwgY2F1c2UgTW9iaWxlIFNhZmFyaSB0byBcInpvb20gaW5cIi5cblxuLyoqXG4gKiBFZGl0b3Igc3R5bGVzLlxuICovXG5cbiRzaWRlYmFyLXdpZHRoOiAyODBweDtcbiRjb250ZW50LXdpZHRoOiA4NDBweDtcbiR3aWRlLWNvbnRlbnQtd2lkdGg6IDExMDBweDtcbiR3aWRnZXQtYXJlYS13aWR0aDogNzAwcHg7XG4kc2Vjb25kYXJ5LXNpZGViYXItd2lkdGg6IDM1MHB4O1xuJGVkaXRvci1mb250LXNpemU6IDE2cHg7XG4kZGVmYXVsdC1ibG9jay1tYXJnaW46IDI4cHg7IC8vIFRoaXMgdmFsdWUgcHJvdmlkZXMgYSBjb25zaXN0ZW50LCBjb250aWd1b3VzIHNwYWNpbmcgYmV0d2VlbiBibG9ja3MuXG4kdGV4dC1lZGl0b3ItZm9udC1zaXplOiAxNXB4O1xuJGVkaXRvci1saW5lLWhlaWdodDogMS44O1xuJGVkaXRvci1odG1sLWZvbnQ6ICRmb250LWZhbWlseS1tb25vO1xuXG4vKipcbiAqIEJsb2NrICYgRWRpdG9yIFVJLlxuICovXG5cbiRibG9jay10b29sYmFyLWhlaWdodDogJGdyaWQtdW5pdC02MDtcbiRib3JkZXItd2lkdGg6IDFweDtcbiRib3JkZXItd2lkdGgtZm9jdXMtZmFsbGJhY2s6IDJweDsgLy8gVGhpcyBleGlzdHMgYXMgYSBmYWxsYmFjaywgYW5kIGlzIGlkZWFsbHkgb3ZlcnJpZGRlbiBieSB2YXIoLS13cC1hZG1pbi1ib3JkZXItd2lkdGgtZm9jdXMpIHVubGVzcyBpbiBzb21lIFNBU1MgbWF0aCBjYXNlcy5cbiRib3JkZXItd2lkdGgtdGFiOiAxLjVweDtcbiRoZWxwdGV4dC1mb250LXNpemU6IDEycHg7XG4kcmFkaW8taW5wdXQtc2l6ZTogMTZweDtcbiRyYWRpby1pbnB1dC1zaXplLXNtOiAyNHB4OyAvLyBXaWR0aCAmIGhlaWdodCBmb3Igc21hbGwgdmlld3BvcnRzLlxuXG4vLyBEZXByZWNhdGVkLCBwbGVhc2UgYXZvaWQgdXNpbmcgdGhlc2UuXG4kYmxvY2stcGFkZGluZzogMTRweDsgLy8gVXNlZCB0byBkZWZpbmUgc3BhY2UgYmV0d2VlbiBibG9jayBmb290cHJpbnQgYW5kIHN1cnJvdW5kaW5nIGJvcmRlcnMuXG4kcmFkaXVzLWJsb2NrLXVpOiAkcmFkaXVzLXNtYWxsO1xuJHNoYWRvdy1wb3BvdmVyOiAkZWxldmF0aW9uLXgtc21hbGw7XG4kc2hhZG93LW1vZGFsOiAkZWxldmF0aW9uLWxhcmdlO1xuJGRlZmF1bHQtZm9udC1zaXplOiAkZm9udC1zaXplLW1lZGl1bTtcblxuLyoqXG4gKiBCbG9jayBwYWRkaW5ncy5cbiAqL1xuXG4vLyBQYWRkaW5nIGZvciBibG9ja3Mgd2l0aCBhIGJhY2tncm91bmQgY29sb3IgKGUuZy4gcGFyYWdyYXBoIG9yIGdyb3VwKS5cbiRibG9jay1iZy1wYWRkaW5nLS12OiAxLjI1ZW07XG4kYmxvY2stYmctcGFkZGluZy0taDogMi4zNzVlbTtcblxuXG4vKipcbiAqIFJlYWN0IE5hdGl2ZSBzcGVjaWZpYy5cbiAqIFRoZXNlIHZhcmlhYmxlcyBkbyBub3QgYXBwZWFyIHRvIGJlIHVzZWQgYW55d2hlcmUgZWxzZS5cbiAqL1xuXG4vLyBEaW1lbnNpb25zLlxuJG1vYmlsZS1oZWFkZXItdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kbW9iaWxlLWhlYWRlci10b29sYmFyLWV4cGFuZGVkLWhlaWdodDogNTJweDtcbiRtb2JpbGUtZmxvYXRpbmctdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kbW9iaWxlLWZsb2F0aW5nLXRvb2xiYXItbWFyZ2luOiA4cHg7XG4kbW9iaWxlLWNvbG9yLXN3YXRjaDogNDhweDtcblxuLy8gQmxvY2sgVUkuXG4kbW9iaWxlLWJsb2NrLXRvb2xiYXItaGVpZ2h0OiA0NHB4O1xuJGRpbW1lZC1vcGFjaXR5OiAxO1xuJGJsb2NrLWVkZ2UtdG8tY29udGVudDogMTZweDtcbiRzb2xpZC1ib3JkZXItc3BhY2U6IDEycHg7XG4kZGFzaGVkLWJvcmRlci1zcGFjZTogNnB4O1xuJGJsb2NrLXNlbGVjdGVkLW1hcmdpbjogM3B4O1xuJGJsb2NrLXNlbGVjdGVkLWJvcmRlci13aWR0aDogMXB4O1xuJGJsb2NrLXNlbGVjdGVkLXBhZGRpbmc6IDA7XG4kYmxvY2stc2VsZWN0ZWQtY2hpbGQtbWFyZ2luOiA1cHg7XG4kYmxvY2stc2VsZWN0ZWQtdG8tY29udGVudDogJGJsb2NrLWVkZ2UtdG8tY29udGVudCAtICRibG9jay1zZWxlY3RlZC1tYXJnaW4gLSAkYmxvY2stc2VsZWN0ZWQtYm9yZGVyLXdpZHRoO1xuIiwiLyoqXG4gKiBDb2xvcnNcbiAqL1xuXG4vLyBXb3JkUHJlc3MgZ3JheXMuXG4kYmxhY2s6ICMwMDA7XHRcdFx0Ly8gVXNlIG9ubHkgd2hlbiB5b3UgdHJ1bHkgbmVlZCBwdXJlIGJsYWNrLiBGb3IgVUksIHVzZSAkZ3JheS05MDAuXG4kZ3JheS05MDA6ICMxZTFlMWU7XG4kZ3JheS04MDA6ICMyZjJmMmY7XG4kZ3JheS03MDA6ICM3NTc1NzU7XHRcdC8vIE1lZXRzIDQuNjoxICg0LjU6MSBpcyBtaW5pbXVtKSB0ZXh0IGNvbnRyYXN0IGFnYWluc3Qgd2hpdGUuXG4kZ3JheS02MDA6ICM5NDk0OTQ7XHRcdC8vIE1lZXRzIDM6MSBVSSBvciBsYXJnZSB0ZXh0IGNvbnRyYXN0IGFnYWluc3Qgd2hpdGUuXG4kZ3JheS00MDA6ICNjY2M7XG4kZ3JheS0zMDA6ICNkZGQ7XHRcdC8vIFVzZWQgZm9yIG1vc3QgYm9yZGVycy5cbiRncmF5LTIwMDogI2UwZTBlMDtcdFx0Ly8gVXNlZCBzcGFyaW5nbHkgZm9yIGxpZ2h0IGJvcmRlcnMuXG4kZ3JheS0xMDA6ICNmMGYwZjA7XHRcdC8vIFVzZWQgZm9yIGxpZ2h0IGdyYXkgYmFja2dyb3VuZHMuXG4kd2hpdGU6ICNmZmY7XG5cbi8vIE9wYWNpdGllcyAmIGFkZGl0aW9uYWwgY29sb3JzLlxuJGRhcmstZ3JheS1wbGFjZWhvbGRlcjogcmdiYSgkZ3JheS05MDAsIDAuNjIpO1xuJG1lZGl1bS1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCRncmF5LTkwMCwgMC41NSk7XG4kbGlnaHQtZ3JheS1wbGFjZWhvbGRlcjogcmdiYSgkd2hpdGUsIDAuNjUpO1xuXG4vLyBBbGVydCBjb2xvcnMuXG4kYWxlcnQteWVsbG93OiAjZjBiODQ5O1xuJGFsZXJ0LXJlZDogI2NjMTgxODtcbiRhbGVydC1ncmVlbjogIzRhYjg2NjtcblxuLy8gRGVwcmVjYXRlZCwgcGxlYXNlIGF2b2lkIHVzaW5nIHRoZXNlLlxuJGRhcmstdGhlbWUtZm9jdXM6ICR3aGl0ZTtcdC8vIEZvY3VzIGNvbG9yIHdoZW4gdGhlIHRoZW1lIGlzIGRhcmsuXG4iLCJAdXNlIFwiQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy92YXJpYWJsZXNcIjtcblxuLmJvb3Qtc2l0ZS1pY29uIHtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuLmJvb3Qtc2l0ZS1pY29uX19pY29uIHtcblx0d2lkdGg6IHZhcmlhYmxlcy4kZ3JpZC11bml0LTQwO1xuXHRoZWlnaHQ6IHZhcmlhYmxlcy4kZ3JpZC11bml0LTQwO1xuXHRjb2xvcjogdmFyKC0td3Bkcy1jb2xvci1mZy1jb250ZW50LW5ldXRyYWwsICMxZTFlMWUpO1xufVxuXG4uYm9vdC1zaXRlLWljb25fX2ltYWdlIHtcblx0d2lkdGg6IHZhcmlhYmxlcy4kZ3JpZC11bml0LTQwO1xuXHRoZWlnaHQ6IHZhcmlhYmxlcy4kZ3JpZC11bml0LTQwO1xuXHRvYmplY3QtZml0OiBjb3Zlcjtcblx0YXNwZWN0LXJhdGlvOiAxIC8gMTtcblx0Ym9yZGVyLXJhZGl1czogdmFyKC0td3Bkcy1ib3JkZXItcmFkaXVzLW1lZGl1bSwgNHB4KTtcbn1cbiJdfQ== */`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css));
function SiteIcon({ className }) {
  const { isRequestingSite, siteIconUrl } = (0, import_data.useSelect)((select) => {
    const { getEntityRecord } = select(import_core_data.store);
    const siteData = getEntityRecord(
      "root",
      "__unstableBase",
      void 0
    );
    return {
      isRequestingSite: !siteData,
      siteIconUrl: siteData?.site_icon_url
    };
  }, []);
  let icon = null;
  if (isRequestingSite && !siteIconUrl) {
    icon = /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "boot-site-icon__image" });
  } else {
    icon = siteIconUrl ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "img",
      {
        className: "boot-site-icon__image",
        alt: (0, import_i18n.__)("Site Icon"),
        src: siteIconUrl
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      icon_default,
      {
        className: "boot-site-icon__icon",
        icon: wordpress_default,
        size: 48
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: clsx_default(className, "boot-site-icon"), children: icon });
}
var site_icon_default = SiteIcon;

// packages/boot/build-module/components/site-icon-link/index.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var css2 = `/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
.boot-site-icon-link {
  width: 64px;
  height: 64px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--wpds-color-bg-surface-neutral-weak, #f0f0f0);
  text-decoration: none;
}
@media not (prefers-reduced-motion) {
  .boot-site-icon-link {
    transition: outline 0.1s ease-out;
  }
}
.boot-site-icon-link:focus:not(:active) {
  outline: var(--wpds-border-width-focus, 2px) solid var(--wpds-color-stroke-focus-brand, #0073aa);
  outline-offset: calc(-1 * var(--wpds-border-width-focus, 2px));
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnL2d1dGVuYmVyZy9wYWNrYWdlcy9ib290L3NyYy9jb21wb25lbnRzL3NpdGUtaWNvbi1saW5rIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy9fY29sb3JzLnNjc3MiLCJzdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FDQUE7QUFBQTtBQUFBO0FEVUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBNkJBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQWdCQTtBQUFBO0FBQUE7QUF3QkE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBZUE7QUFBQTtBQUFBO0FBbUJBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FFOUpBO0VBQ0MsT0Y4RmU7RUU3RmYsUUY2RmU7RUU1RmY7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQVREO0lBVUU7OztBQUdEO0VBQ0MsU0FDQztFQUVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTQ1NTIFZhcmlhYmxlcy5cbiAqXG4gKiBQbGVhc2UgdXNlIHZhcmlhYmxlcyBmcm9tIHRoaXMgc2hlZXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGFjcm9zcyB0aGUgVUkuXG4gKiBEb24ndCBhZGQgdG8gdGhpcyBzaGVldCB1bmxlc3MgeW91J3JlIHByZXR0eSBzdXJlIHRoZSB2YWx1ZSB3aWxsIGJlIHJldXNlZCBpbiBtYW55IHBsYWNlcy5cbiAqIEZvciBleGFtcGxlLCBkb24ndCBhZGQgcnVsZXMgdG8gdGhpcyBzaGVldCB0aGF0IGFmZmVjdCBibG9jayB2aXN1YWxzLiBJdCdzIHB1cmVseSBmb3IgVUkuXG4gKi9cblxuQHVzZSBcIi4vY29sb3JzXCI7XG5cbi8qKlxuICogRm9udHMgJiBiYXNpYyB2YXJpYWJsZXMuXG4gKi9cblxuJGRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyAvLyBUb2RvOiBkZXByZWNhdGUgaW4gZmF2b3Igb2YgJGZhbWlseSB2YXJpYWJsZXNcbiRkZWZhdWx0LWxpbmUtaGVpZ2h0OiAxLjQ7IC8vIFRvZG86IGRlcHJlY2F0ZSBpbiBmYXZvciBvZiAkbGluZS1oZWlnaHQgdG9rZW5zXG5cbi8qKlxuICogVHlwb2dyYXBoeVxuICovXG5cbi8vIFNpemVzXG4kZm9udC1zaXplLXgtc21hbGw6IDExcHg7XG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xuJGZvbnQtc2l6ZS1tZWRpdW06IDEzcHg7XG4kZm9udC1zaXplLWxhcmdlOiAxNXB4O1xuJGZvbnQtc2l6ZS14LWxhcmdlOiAyMHB4O1xuJGZvbnQtc2l6ZS0yeC1sYXJnZTogMzJweDtcblxuLy8gTGluZSBoZWlnaHRzXG4kZm9udC1saW5lLWhlaWdodC14LXNtYWxsOiAxNnB4O1xuJGZvbnQtbGluZS1oZWlnaHQtc21hbGw6IDIwcHg7XG4kZm9udC1saW5lLWhlaWdodC1tZWRpdW06IDI0cHg7XG4kZm9udC1saW5lLWhlaWdodC1sYXJnZTogMjhweDtcbiRmb250LWxpbmUtaGVpZ2h0LXgtbGFyZ2U6IDMycHg7XG4kZm9udC1saW5lLWhlaWdodC0yeC1sYXJnZTogNDBweDtcblxuLy8gV2VpZ2h0c1xuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcbiRmb250LXdlaWdodC1tZWRpdW06IDQ5OTsgLy8gZW5zdXJlcyBmYWxsYmFjayB0byA0MDAgKGluc3RlYWQgb2YgNjAwKVxuXG4vLyBGYW1pbGllc1xuJGZvbnQtZmFtaWx5LWhlYWRpbmdzOiAtYXBwbGUtc3lzdGVtLCBcInN5c3RlbS11aVwiLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYm9keTogLWFwcGxlLXN5c3RlbSwgXCJzeXN0ZW0tdWlcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBDb25zb2xhcywgbW9uYWNvLCBtb25vc3BhY2U7XG5cbi8qKlxuICogR3JpZCBTeXN0ZW0uXG4gKiBodHRwczovL21ha2Uud29yZHByZXNzLm9yZy9kZXNpZ24vMjAxOS8xMC8zMS9wcm9wb3NhbC1hLWNvbnNpc3RlbnQtc3BhY2luZy1zeXN0ZW0tZm9yLXdvcmRwcmVzcy9cbiAqL1xuXG4kZ3JpZC11bml0OiA4cHg7XG4kZ3JpZC11bml0LTA1OiAwLjUgKiAkZ3JpZC11bml0O1x0Ly8gNHB4XG4kZ3JpZC11bml0LTEwOiAxICogJGdyaWQtdW5pdDtcdFx0Ly8gOHB4XG4kZ3JpZC11bml0LTE1OiAxLjUgKiAkZ3JpZC11bml0O1x0Ly8gMTJweFxuJGdyaWQtdW5pdC0yMDogMiAqICRncmlkLXVuaXQ7XHRcdC8vIDE2cHhcbiRncmlkLXVuaXQtMzA6IDMgKiAkZ3JpZC11bml0O1x0XHQvLyAyNHB4XG4kZ3JpZC11bml0LTQwOiA0ICogJGdyaWQtdW5pdDtcdFx0Ly8gMzJweFxuJGdyaWQtdW5pdC01MDogNSAqICRncmlkLXVuaXQ7XHRcdC8vIDQwcHhcbiRncmlkLXVuaXQtNjA6IDYgKiAkZ3JpZC11bml0O1x0XHQvLyA0OHB4XG4kZ3JpZC11bml0LTcwOiA3ICogJGdyaWQtdW5pdDtcdFx0Ly8gNTZweFxuJGdyaWQtdW5pdC04MDogOCAqICRncmlkLXVuaXQ7XHRcdC8vIDY0cHhcblxuLyoqXG4gKiBSYWRpdXMgc2NhbGUuXG4gKi9cblxuJHJhZGl1cy14LXNtYWxsOiAxcHg7ICAgLy8gQXBwbGllZCB0byBlbGVtZW50cyBsaWtlIGJ1dHRvbnMgbmVzdGVkIHdpdGhpbiBwcmltaXRpdmVzIGxpa2UgaW5wdXRzLlxuJHJhZGl1cy1zbWFsbDogMnB4OyAgICAgLy8gQXBwbGllZCB0byBtb3N0IHByaW1pdGl2ZXMuXG4kcmFkaXVzLW1lZGl1bTogNHB4OyAgICAvLyBBcHBsaWVkIHRvIGNvbnRhaW5lcnMgd2l0aCBzbWFsbGVyIHBhZGRpbmcuXG4kcmFkaXVzLWxhcmdlOiA4cHg7ICAgICAvLyBBcHBsaWVkIHRvIGNvbnRhaW5lcnMgd2l0aCBsYXJnZXIgcGFkZGluZy5cbiRyYWRpdXMtZnVsbDogOTk5OXB4OyAgIC8vIEZvciBwaWxscy5cbiRyYWRpdXMtcm91bmQ6IDUwJTsgICAgIC8vIEZvciBjaXJjbGVzIGFuZCBvdmFscy5cblxuLyoqXG4gKiBFbGV2YXRpb24gc2NhbGUuXG4gKi9cblxuLy8gRm9yIHNlY3Rpb25zIGFuZCBjb250YWluZXJzIHRoYXQgZ3JvdXAgcmVsYXRlZCBjb250ZW50IGFuZCBjb250cm9scywgd2hpY2ggbWF5IG92ZXJsYXAgb3RoZXIgY29udGVudC4gRXhhbXBsZTogUHJldmlldyBGcmFtZS5cbiRlbGV2YXRpb24teC1zbWFsbDogMCAxcHggMXB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMyksIDAgMXB4IDJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpLCAwIDNweCAzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKSwgMCA0cHggNHB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMSk7XG5cbi8vIEZvciBjb21wb25lbnRzIHRoYXQgcHJvdmlkZSBjb250ZXh0dWFsIGZlZWRiYWNrIHdpdGhvdXQgYmVpbmcgaW50cnVzaXZlLiBHZW5lcmFsbHkgbm9uLWludGVycnVwdGl2ZS4gRXhhbXBsZTogVG9vbHRpcHMsIFNuYWNrYmFyLlxuJGVsZXZhdGlvbi1zbWFsbDogMCAxcHggMnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNSksIDAgMnB4IDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDQpLCAwIDZweCA2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAzKSwgMCA4cHggOHB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMik7XG5cbi8vIEZvciBjb21wb25lbnRzIHRoYXQgb2ZmZXIgYWRkaXRpb25hbCBhY3Rpb25zLiBFeGFtcGxlOiBNZW51cywgQ29tbWFuZCBQYWxldHRlXG4kZWxldmF0aW9uLW1lZGl1bTogMCAycHggM3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNSksIDAgNHB4IDVweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDQpLCAwIDEycHggMTJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDMpLCAwIDE2cHggMTZweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IGNvbmZpcm0gZGVjaXNpb25zIG9yIGhhbmRsZSBuZWNlc3NhcnkgaW50ZXJydXB0aW9ucy4gRXhhbXBsZTogTW9kYWxzLlxuJGVsZXZhdGlvbi1sYXJnZTogMCA1cHggMTVweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDgpLCAwIDE1cHggMjdweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDcpLCAwIDMwcHggMzZweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDQpLCAwIDUwcHggNDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vKipcbiAqIERpbWVuc2lvbnMuXG4gKi9cblxuJGljb24tc2l6ZTogMjRweDtcbiRidXR0b24tc2l6ZTogMzZweDtcbiRidXR0b24tc2l6ZS1uZXh0LWRlZmF1bHQtNDBweDogNDBweDsgLy8gdHJhbnNpdGlvbmFyeSB2YXJpYWJsZSBmb3IgbmV4dCBkZWZhdWx0IGJ1dHRvbiBzaXplXG4kYnV0dG9uLXNpemUtc21hbGw6IDI0cHg7XG4kYnV0dG9uLXNpemUtY29tcGFjdDogMzJweDtcbiRoZWFkZXItaGVpZ2h0OiA2NHB4O1xuJHBhbmVsLWhlYWRlci1oZWlnaHQ6ICRncmlkLXVuaXQtNjA7XG4kbmF2LXNpZGViYXItd2lkdGg6IDMwMHB4O1xuJGFkbWluLWJhci1oZWlnaHQ6IDMycHg7XG4kYWRtaW4tYmFyLWhlaWdodC1iaWc6IDQ2cHg7XG4kYWRtaW4tc2lkZWJhci13aWR0aDogMTYwcHg7XG4kYWRtaW4tc2lkZWJhci13aWR0aC1iaWc6IDE5MHB4O1xuJGFkbWluLXNpZGViYXItd2lkdGgtY29sbGFwc2VkOiAzNnB4O1xuJG1vZGFsLW1pbi13aWR0aDogMzUwcHg7XG4kbW9kYWwtd2lkdGgtc21hbGw6IDM4NHB4O1xuJG1vZGFsLXdpZHRoLW1lZGl1bTogNTEycHg7XG4kbW9kYWwtd2lkdGgtbGFyZ2U6IDg0MHB4O1xuJHNwaW5uZXItc2l6ZTogMTZweDtcbiRjYW52YXMtcGFkZGluZzogJGdyaWQtdW5pdC0yMDtcblxuLyoqXG4gKiBNb2JpbGUgc3BlY2lmaWMgc3R5bGVzXG4gKi9cbiRtb2JpbGUtdGV4dC1taW4tZm9udC1zaXplOiAxNnB4OyAvLyBBbnkgZm9udCBzaXplIGJlbG93IDE2cHggd2lsbCBjYXVzZSBNb2JpbGUgU2FmYXJpIHRvIFwiem9vbSBpblwiLlxuXG4vKipcbiAqIEVkaXRvciBzdHlsZXMuXG4gKi9cblxuJHNpZGViYXItd2lkdGg6IDI4MHB4O1xuJGNvbnRlbnQtd2lkdGg6IDg0MHB4O1xuJHdpZGUtY29udGVudC13aWR0aDogMTEwMHB4O1xuJHdpZGdldC1hcmVhLXdpZHRoOiA3MDBweDtcbiRzZWNvbmRhcnktc2lkZWJhci13aWR0aDogMzUwcHg7XG4kZWRpdG9yLWZvbnQtc2l6ZTogMTZweDtcbiRkZWZhdWx0LWJsb2NrLW1hcmdpbjogMjhweDsgLy8gVGhpcyB2YWx1ZSBwcm92aWRlcyBhIGNvbnNpc3RlbnQsIGNvbnRpZ3VvdXMgc3BhY2luZyBiZXR3ZWVuIGJsb2Nrcy5cbiR0ZXh0LWVkaXRvci1mb250LXNpemU6IDE1cHg7XG4kZWRpdG9yLWxpbmUtaGVpZ2h0OiAxLjg7XG4kZWRpdG9yLWh0bWwtZm9udDogJGZvbnQtZmFtaWx5LW1vbm87XG5cbi8qKlxuICogQmxvY2sgJiBFZGl0b3IgVUkuXG4gKi9cblxuJGJsb2NrLXRvb2xiYXItaGVpZ2h0OiAkZ3JpZC11bml0LTYwO1xuJGJvcmRlci13aWR0aDogMXB4O1xuJGJvcmRlci13aWR0aC1mb2N1cy1mYWxsYmFjazogMnB4OyAvLyBUaGlzIGV4aXN0cyBhcyBhIGZhbGxiYWNrLCBhbmQgaXMgaWRlYWxseSBvdmVycmlkZGVuIGJ5IHZhcigtLXdwLWFkbWluLWJvcmRlci13aWR0aC1mb2N1cykgdW5sZXNzIGluIHNvbWUgU0FTUyBtYXRoIGNhc2VzLlxuJGJvcmRlci13aWR0aC10YWI6IDEuNXB4O1xuJGhlbHB0ZXh0LWZvbnQtc2l6ZTogMTJweDtcbiRyYWRpby1pbnB1dC1zaXplOiAxNnB4O1xuJHJhZGlvLWlucHV0LXNpemUtc206IDI0cHg7IC8vIFdpZHRoICYgaGVpZ2h0IGZvciBzbWFsbCB2aWV3cG9ydHMuXG5cbi8vIERlcHJlY2F0ZWQsIHBsZWFzZSBhdm9pZCB1c2luZyB0aGVzZS5cbiRibG9jay1wYWRkaW5nOiAxNHB4OyAvLyBVc2VkIHRvIGRlZmluZSBzcGFjZSBiZXR3ZWVuIGJsb2NrIGZvb3RwcmludCBhbmQgc3Vycm91bmRpbmcgYm9yZGVycy5cbiRyYWRpdXMtYmxvY2stdWk6ICRyYWRpdXMtc21hbGw7XG4kc2hhZG93LXBvcG92ZXI6ICRlbGV2YXRpb24teC1zbWFsbDtcbiRzaGFkb3ctbW9kYWw6ICRlbGV2YXRpb24tbGFyZ2U7XG4kZGVmYXVsdC1mb250LXNpemU6ICRmb250LXNpemUtbWVkaXVtO1xuXG4vKipcbiAqIEJsb2NrIHBhZGRpbmdzLlxuICovXG5cbi8vIFBhZGRpbmcgZm9yIGJsb2NrcyB3aXRoIGEgYmFja2dyb3VuZCBjb2xvciAoZS5nLiBwYXJhZ3JhcGggb3IgZ3JvdXApLlxuJGJsb2NrLWJnLXBhZGRpbmctLXY6IDEuMjVlbTtcbiRibG9jay1iZy1wYWRkaW5nLS1oOiAyLjM3NWVtO1xuXG5cbi8qKlxuICogUmVhY3QgTmF0aXZlIHNwZWNpZmljLlxuICogVGhlc2UgdmFyaWFibGVzIGRvIG5vdCBhcHBlYXIgdG8gYmUgdXNlZCBhbnl3aGVyZSBlbHNlLlxuICovXG5cbi8vIERpbWVuc2lvbnMuXG4kbW9iaWxlLWhlYWRlci10b29sYmFyLWhlaWdodDogNDRweDtcbiRtb2JpbGUtaGVhZGVyLXRvb2xiYXItZXhwYW5kZWQtaGVpZ2h0OiA1MnB4O1xuJG1vYmlsZS1mbG9hdGluZy10b29sYmFyLWhlaWdodDogNDRweDtcbiRtb2JpbGUtZmxvYXRpbmctdG9vbGJhci1tYXJnaW46IDhweDtcbiRtb2JpbGUtY29sb3Itc3dhdGNoOiA0OHB4O1xuXG4vLyBCbG9jayBVSS5cbiRtb2JpbGUtYmxvY2stdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kZGltbWVkLW9wYWNpdHk6IDE7XG4kYmxvY2stZWRnZS10by1jb250ZW50OiAxNnB4O1xuJHNvbGlkLWJvcmRlci1zcGFjZTogMTJweDtcbiRkYXNoZWQtYm9yZGVyLXNwYWNlOiA2cHg7XG4kYmxvY2stc2VsZWN0ZWQtbWFyZ2luOiAzcHg7XG4kYmxvY2stc2VsZWN0ZWQtYm9yZGVyLXdpZHRoOiAxcHg7XG4kYmxvY2stc2VsZWN0ZWQtcGFkZGluZzogMDtcbiRibG9jay1zZWxlY3RlZC1jaGlsZC1tYXJnaW46IDVweDtcbiRibG9jay1zZWxlY3RlZC10by1jb250ZW50OiAkYmxvY2stZWRnZS10by1jb250ZW50IC0gJGJsb2NrLXNlbGVjdGVkLW1hcmdpbiAtICRibG9jay1zZWxlY3RlZC1ib3JkZXItd2lkdGg7XG4iLCIvKipcbiAqIENvbG9yc1xuICovXG5cbi8vIFdvcmRQcmVzcyBncmF5cy5cbiRibGFjazogIzAwMDtcdFx0XHQvLyBVc2Ugb25seSB3aGVuIHlvdSB0cnVseSBuZWVkIHB1cmUgYmxhY2suIEZvciBVSSwgdXNlICRncmF5LTkwMC5cbiRncmF5LTkwMDogIzFlMWUxZTtcbiRncmF5LTgwMDogIzJmMmYyZjtcbiRncmF5LTcwMDogIzc1NzU3NTtcdFx0Ly8gTWVldHMgNC42OjEgKDQuNToxIGlzIG1pbmltdW0pIHRleHQgY29udHJhc3QgYWdhaW5zdCB3aGl0ZS5cbiRncmF5LTYwMDogIzk0OTQ5NDtcdFx0Ly8gTWVldHMgMzoxIFVJIG9yIGxhcmdlIHRleHQgY29udHJhc3QgYWdhaW5zdCB3aGl0ZS5cbiRncmF5LTQwMDogI2NjYztcbiRncmF5LTMwMDogI2RkZDtcdFx0Ly8gVXNlZCBmb3IgbW9zdCBib3JkZXJzLlxuJGdyYXktMjAwOiAjZTBlMGUwO1x0XHQvLyBVc2VkIHNwYXJpbmdseSBmb3IgbGlnaHQgYm9yZGVycy5cbiRncmF5LTEwMDogI2YwZjBmMDtcdFx0Ly8gVXNlZCBmb3IgbGlnaHQgZ3JheSBiYWNrZ3JvdW5kcy5cbiR3aGl0ZTogI2ZmZjtcblxuLy8gT3BhY2l0aWVzICYgYWRkaXRpb25hbCBjb2xvcnMuXG4kZGFyay1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCRncmF5LTkwMCwgMC42Mik7XG4kbWVkaXVtLWdyYXktcGxhY2Vob2xkZXI6IHJnYmEoJGdyYXktOTAwLCAwLjU1KTtcbiRsaWdodC1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCR3aGl0ZSwgMC42NSk7XG5cbi8vIEFsZXJ0IGNvbG9ycy5cbiRhbGVydC15ZWxsb3c6ICNmMGI4NDk7XG4kYWxlcnQtcmVkOiAjY2MxODE4O1xuJGFsZXJ0LWdyZWVuOiAjNGFiODY2O1xuXG4vLyBEZXByZWNhdGVkLCBwbGVhc2UgYXZvaWQgdXNpbmcgdGhlc2UuXG4kZGFyay10aGVtZS1mb2N1czogJHdoaXRlO1x0Ly8gRm9jdXMgY29sb3Igd2hlbiB0aGUgdGhlbWUgaXMgZGFyay5cbiIsIkB1c2UgXCJAd29yZHByZXNzL2Jhc2Utc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogdmFyaWFibGVzLiRoZWFkZXItaGVpZ2h0O1xuXG4uYm9vdC1zaXRlLWljb24tbGluayB7XG5cdHdpZHRoOiAkaGVhZGVyLWhlaWdodDtcblx0aGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS13cGRzLWNvbG9yLWJnLXN1cmZhY2UtbmV1dHJhbC13ZWFrLCAjZjBmMGYwKTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG5cdEBtZWRpYSBub3QgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pIHtcblx0XHR0cmFuc2l0aW9uOiBvdXRsaW5lIDAuMXMgZWFzZS1vdXQ7XG5cdH1cblxuXHQmOmZvY3VzOm5vdCg6YWN0aXZlKSB7XG5cdFx0b3V0bGluZTpcblx0XHRcdHZhcigtLXdwZHMtYm9yZGVyLXdpZHRoLWZvY3VzLCAycHgpIHNvbGlkXG5cdFx0XHR2YXIoLS13cGRzLWNvbG9yLXN0cm9rZS1mb2N1cy1icmFuZCwgIzAwNzNhYSk7XG5cdFx0b3V0bGluZS1vZmZzZXQ6IGNhbGMoLTEgKiB2YXIoLS13cGRzLWJvcmRlci13aWR0aC1mb2N1cywgMnB4KSk7XG5cdH1cbn1cbiJdfQ== */`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css2));
function SiteIconLink({
  to,
  isBackButton,
  ...props
}) {
  const router = useRouter();
  const canGoBack = useCanGoBack();
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    Link,
    {
      to,
      "aria-label": props["aria-label"],
      className: "boot-site-icon-link",
      onClick: (event) => {
        if (canGoBack && isBackButton) {
          event.preventDefault();
          router.history.back();
        }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(site_icon_default, {})
    }
  );
}
var site_icon_link_default = SiteIconLink;

// packages/boot/build-module/components/site-hub/index.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var css3 = `/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
.boot-site-hub {
  position: sticky;
  top: 0;
  background-color: var(--wpds-color-bg-surface-neutral-weak, #f0f0f0);
  z-index: 1;
  display: grid;
  grid-template-columns: 60px 1fr auto;
  align-items: center;
  padding-right: 16px;
  flex-shrink: 0;
}

.boot-site-hub__actions {
  flex-shrink: 0;
}

.boot-site-hub__title {
  color: var(--wpds-color-fg-content-neutral, #1e1e1e);
  font-size: 13px;
  font-weight: 499;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
}
.boot-site-hub__title .components-external-link__contents {
  text-decoration: none;
  margin-inline-start: 4px;
}
.boot-site-hub__title .components-external-link__icon {
  opacity: 0;
  transition: opacity 0.1s ease-out;
}
.boot-site-hub__title:hover .components-external-link__icon {
  opacity: 1;
}
@media not (prefers-reduced-motion) {
  .boot-site-hub__title {
    transition: outline 0.1s ease-out;
  }
}
.boot-site-hub__title:focus:not(:active) {
  outline: var(--wpds-border-width-focus, 2px) solid var(--wpds-color-stroke-focus-brand, #0073aa);
  outline-offset: calc(-1 * var(--wpds-border-width-focus, 2px));
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnL2d1dGVuYmVyZy9wYWNrYWdlcy9ib290L3NyYy9jb21wb25lbnRzL3NpdGUtaHViIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy9fY29sb3JzLnNjc3MiLCJzdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FDQUE7QUFBQTtBQUFBO0FEVUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBNkJBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQWdCQTtBQUFBO0FBQUE7QUF3QkE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBZUE7QUFBQTtBQUFBO0FBbUJBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FFaEtBO0VBQ0M7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxlRjZDYztFRTVDZDs7O0FBR0Q7RUFDQzs7O0FBR0Q7RUFDQztFQUNBLFdGSWtCO0VFSGxCLGFGa0JvQjtFRWpCcEI7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDQztFQUNBLHFCRnVCYTs7QUVuQmQ7RUFDQztFQUNBOztBQUdEO0VBQ0M7O0FBSUQ7RUF6QkQ7SUEwQkU7OztBQUdEO0VBQ0MsU0FDQztFQUVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTQ1NTIFZhcmlhYmxlcy5cbiAqXG4gKiBQbGVhc2UgdXNlIHZhcmlhYmxlcyBmcm9tIHRoaXMgc2hlZXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGFjcm9zcyB0aGUgVUkuXG4gKiBEb24ndCBhZGQgdG8gdGhpcyBzaGVldCB1bmxlc3MgeW91J3JlIHByZXR0eSBzdXJlIHRoZSB2YWx1ZSB3aWxsIGJlIHJldXNlZCBpbiBtYW55IHBsYWNlcy5cbiAqIEZvciBleGFtcGxlLCBkb24ndCBhZGQgcnVsZXMgdG8gdGhpcyBzaGVldCB0aGF0IGFmZmVjdCBibG9jayB2aXN1YWxzLiBJdCdzIHB1cmVseSBmb3IgVUkuXG4gKi9cblxuQHVzZSBcIi4vY29sb3JzXCI7XG5cbi8qKlxuICogRm9udHMgJiBiYXNpYyB2YXJpYWJsZXMuXG4gKi9cblxuJGRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyAvLyBUb2RvOiBkZXByZWNhdGUgaW4gZmF2b3Igb2YgJGZhbWlseSB2YXJpYWJsZXNcbiRkZWZhdWx0LWxpbmUtaGVpZ2h0OiAxLjQ7IC8vIFRvZG86IGRlcHJlY2F0ZSBpbiBmYXZvciBvZiAkbGluZS1oZWlnaHQgdG9rZW5zXG5cbi8qKlxuICogVHlwb2dyYXBoeVxuICovXG5cbi8vIFNpemVzXG4kZm9udC1zaXplLXgtc21hbGw6IDExcHg7XG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xuJGZvbnQtc2l6ZS1tZWRpdW06IDEzcHg7XG4kZm9udC1zaXplLWxhcmdlOiAxNXB4O1xuJGZvbnQtc2l6ZS14LWxhcmdlOiAyMHB4O1xuJGZvbnQtc2l6ZS0yeC1sYXJnZTogMzJweDtcblxuLy8gTGluZSBoZWlnaHRzXG4kZm9udC1saW5lLWhlaWdodC14LXNtYWxsOiAxNnB4O1xuJGZvbnQtbGluZS1oZWlnaHQtc21hbGw6IDIwcHg7XG4kZm9udC1saW5lLWhlaWdodC1tZWRpdW06IDI0cHg7XG4kZm9udC1saW5lLWhlaWdodC1sYXJnZTogMjhweDtcbiRmb250LWxpbmUtaGVpZ2h0LXgtbGFyZ2U6IDMycHg7XG4kZm9udC1saW5lLWhlaWdodC0yeC1sYXJnZTogNDBweDtcblxuLy8gV2VpZ2h0c1xuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcbiRmb250LXdlaWdodC1tZWRpdW06IDQ5OTsgLy8gZW5zdXJlcyBmYWxsYmFjayB0byA0MDAgKGluc3RlYWQgb2YgNjAwKVxuXG4vLyBGYW1pbGllc1xuJGZvbnQtZmFtaWx5LWhlYWRpbmdzOiAtYXBwbGUtc3lzdGVtLCBcInN5c3RlbS11aVwiLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYm9keTogLWFwcGxlLXN5c3RlbSwgXCJzeXN0ZW0tdWlcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBDb25zb2xhcywgbW9uYWNvLCBtb25vc3BhY2U7XG5cbi8qKlxuICogR3JpZCBTeXN0ZW0uXG4gKiBodHRwczovL21ha2Uud29yZHByZXNzLm9yZy9kZXNpZ24vMjAxOS8xMC8zMS9wcm9wb3NhbC1hLWNvbnNpc3RlbnQtc3BhY2luZy1zeXN0ZW0tZm9yLXdvcmRwcmVzcy9cbiAqL1xuXG4kZ3JpZC11bml0OiA4cHg7XG4kZ3JpZC11bml0LTA1OiAwLjUgKiAkZ3JpZC11bml0O1x0Ly8gNHB4XG4kZ3JpZC11bml0LTEwOiAxICogJGdyaWQtdW5pdDtcdFx0Ly8gOHB4XG4kZ3JpZC11bml0LTE1OiAxLjUgKiAkZ3JpZC11bml0O1x0Ly8gMTJweFxuJGdyaWQtdW5pdC0yMDogMiAqICRncmlkLXVuaXQ7XHRcdC8vIDE2cHhcbiRncmlkLXVuaXQtMzA6IDMgKiAkZ3JpZC11bml0O1x0XHQvLyAyNHB4XG4kZ3JpZC11bml0LTQwOiA0ICogJGdyaWQtdW5pdDtcdFx0Ly8gMzJweFxuJGdyaWQtdW5pdC01MDogNSAqICRncmlkLXVuaXQ7XHRcdC8vIDQwcHhcbiRncmlkLXVuaXQtNjA6IDYgKiAkZ3JpZC11bml0O1x0XHQvLyA0OHB4XG4kZ3JpZC11bml0LTcwOiA3ICogJGdyaWQtdW5pdDtcdFx0Ly8gNTZweFxuJGdyaWQtdW5pdC04MDogOCAqICRncmlkLXVuaXQ7XHRcdC8vIDY0cHhcblxuLyoqXG4gKiBSYWRpdXMgc2NhbGUuXG4gKi9cblxuJHJhZGl1cy14LXNtYWxsOiAxcHg7ICAgLy8gQXBwbGllZCB0byBlbGVtZW50cyBsaWtlIGJ1dHRvbnMgbmVzdGVkIHdpdGhpbiBwcmltaXRpdmVzIGxpa2UgaW5wdXRzLlxuJHJhZGl1cy1zbWFsbDogMnB4OyAgICAgLy8gQXBwbGllZCB0byBtb3N0IHByaW1pdGl2ZXMuXG4kcmFkaXVzLW1lZGl1bTogNHB4OyAgICAvLyBBcHBsaWVkIHRvIGNvbnRhaW5lcnMgd2l0aCBzbWFsbGVyIHBhZGRpbmcuXG4kcmFkaXVzLWxhcmdlOiA4cHg7ICAgICAvLyBBcHBsaWVkIHRvIGNvbnRhaW5lcnMgd2l0aCBsYXJnZXIgcGFkZGluZy5cbiRyYWRpdXMtZnVsbDogOTk5OXB4OyAgIC8vIEZvciBwaWxscy5cbiRyYWRpdXMtcm91bmQ6IDUwJTsgICAgIC8vIEZvciBjaXJjbGVzIGFuZCBvdmFscy5cblxuLyoqXG4gKiBFbGV2YXRpb24gc2NhbGUuXG4gKi9cblxuLy8gRm9yIHNlY3Rpb25zIGFuZCBjb250YWluZXJzIHRoYXQgZ3JvdXAgcmVsYXRlZCBjb250ZW50IGFuZCBjb250cm9scywgd2hpY2ggbWF5IG92ZXJsYXAgb3RoZXIgY29udGVudC4gRXhhbXBsZTogUHJldmlldyBGcmFtZS5cbiRlbGV2YXRpb24teC1zbWFsbDogMCAxcHggMXB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMyksIDAgMXB4IDJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpLCAwIDNweCAzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKSwgMCA0cHggNHB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMSk7XG5cbi8vIEZvciBjb21wb25lbnRzIHRoYXQgcHJvdmlkZSBjb250ZXh0dWFsIGZlZWRiYWNrIHdpdGhvdXQgYmVpbmcgaW50cnVzaXZlLiBHZW5lcmFsbHkgbm9uLWludGVycnVwdGl2ZS4gRXhhbXBsZTogVG9vbHRpcHMsIFNuYWNrYmFyLlxuJGVsZXZhdGlvbi1zbWFsbDogMCAxcHggMnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNSksIDAgMnB4IDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDQpLCAwIDZweCA2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAzKSwgMCA4cHggOHB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMik7XG5cbi8vIEZvciBjb21wb25lbnRzIHRoYXQgb2ZmZXIgYWRkaXRpb25hbCBhY3Rpb25zLiBFeGFtcGxlOiBNZW51cywgQ29tbWFuZCBQYWxldHRlXG4kZWxldmF0aW9uLW1lZGl1bTogMCAycHggM3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNSksIDAgNHB4IDVweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDQpLCAwIDEycHggMTJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDMpLCAwIDE2cHggMTZweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IGNvbmZpcm0gZGVjaXNpb25zIG9yIGhhbmRsZSBuZWNlc3NhcnkgaW50ZXJydXB0aW9ucy4gRXhhbXBsZTogTW9kYWxzLlxuJGVsZXZhdGlvbi1sYXJnZTogMCA1cHggMTVweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDgpLCAwIDE1cHggMjdweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDcpLCAwIDMwcHggMzZweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDQpLCAwIDUwcHggNDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vKipcbiAqIERpbWVuc2lvbnMuXG4gKi9cblxuJGljb24tc2l6ZTogMjRweDtcbiRidXR0b24tc2l6ZTogMzZweDtcbiRidXR0b24tc2l6ZS1uZXh0LWRlZmF1bHQtNDBweDogNDBweDsgLy8gdHJhbnNpdGlvbmFyeSB2YXJpYWJsZSBmb3IgbmV4dCBkZWZhdWx0IGJ1dHRvbiBzaXplXG4kYnV0dG9uLXNpemUtc21hbGw6IDI0cHg7XG4kYnV0dG9uLXNpemUtY29tcGFjdDogMzJweDtcbiRoZWFkZXItaGVpZ2h0OiA2NHB4O1xuJHBhbmVsLWhlYWRlci1oZWlnaHQ6ICRncmlkLXVuaXQtNjA7XG4kbmF2LXNpZGViYXItd2lkdGg6IDMwMHB4O1xuJGFkbWluLWJhci1oZWlnaHQ6IDMycHg7XG4kYWRtaW4tYmFyLWhlaWdodC1iaWc6IDQ2cHg7XG4kYWRtaW4tc2lkZWJhci13aWR0aDogMTYwcHg7XG4kYWRtaW4tc2lkZWJhci13aWR0aC1iaWc6IDE5MHB4O1xuJGFkbWluLXNpZGViYXItd2lkdGgtY29sbGFwc2VkOiAzNnB4O1xuJG1vZGFsLW1pbi13aWR0aDogMzUwcHg7XG4kbW9kYWwtd2lkdGgtc21hbGw6IDM4NHB4O1xuJG1vZGFsLXdpZHRoLW1lZGl1bTogNTEycHg7XG4kbW9kYWwtd2lkdGgtbGFyZ2U6IDg0MHB4O1xuJHNwaW5uZXItc2l6ZTogMTZweDtcbiRjYW52YXMtcGFkZGluZzogJGdyaWQtdW5pdC0yMDtcblxuLyoqXG4gKiBNb2JpbGUgc3BlY2lmaWMgc3R5bGVzXG4gKi9cbiRtb2JpbGUtdGV4dC1taW4tZm9udC1zaXplOiAxNnB4OyAvLyBBbnkgZm9udCBzaXplIGJlbG93IDE2cHggd2lsbCBjYXVzZSBNb2JpbGUgU2FmYXJpIHRvIFwiem9vbSBpblwiLlxuXG4vKipcbiAqIEVkaXRvciBzdHlsZXMuXG4gKi9cblxuJHNpZGViYXItd2lkdGg6IDI4MHB4O1xuJGNvbnRlbnQtd2lkdGg6IDg0MHB4O1xuJHdpZGUtY29udGVudC13aWR0aDogMTEwMHB4O1xuJHdpZGdldC1hcmVhLXdpZHRoOiA3MDBweDtcbiRzZWNvbmRhcnktc2lkZWJhci13aWR0aDogMzUwcHg7XG4kZWRpdG9yLWZvbnQtc2l6ZTogMTZweDtcbiRkZWZhdWx0LWJsb2NrLW1hcmdpbjogMjhweDsgLy8gVGhpcyB2YWx1ZSBwcm92aWRlcyBhIGNvbnNpc3RlbnQsIGNvbnRpZ3VvdXMgc3BhY2luZyBiZXR3ZWVuIGJsb2Nrcy5cbiR0ZXh0LWVkaXRvci1mb250LXNpemU6IDE1cHg7XG4kZWRpdG9yLWxpbmUtaGVpZ2h0OiAxLjg7XG4kZWRpdG9yLWh0bWwtZm9udDogJGZvbnQtZmFtaWx5LW1vbm87XG5cbi8qKlxuICogQmxvY2sgJiBFZGl0b3IgVUkuXG4gKi9cblxuJGJsb2NrLXRvb2xiYXItaGVpZ2h0OiAkZ3JpZC11bml0LTYwO1xuJGJvcmRlci13aWR0aDogMXB4O1xuJGJvcmRlci13aWR0aC1mb2N1cy1mYWxsYmFjazogMnB4OyAvLyBUaGlzIGV4aXN0cyBhcyBhIGZhbGxiYWNrLCBhbmQgaXMgaWRlYWxseSBvdmVycmlkZGVuIGJ5IHZhcigtLXdwLWFkbWluLWJvcmRlci13aWR0aC1mb2N1cykgdW5sZXNzIGluIHNvbWUgU0FTUyBtYXRoIGNhc2VzLlxuJGJvcmRlci13aWR0aC10YWI6IDEuNXB4O1xuJGhlbHB0ZXh0LWZvbnQtc2l6ZTogMTJweDtcbiRyYWRpby1pbnB1dC1zaXplOiAxNnB4O1xuJHJhZGlvLWlucHV0LXNpemUtc206IDI0cHg7IC8vIFdpZHRoICYgaGVpZ2h0IGZvciBzbWFsbCB2aWV3cG9ydHMuXG5cbi8vIERlcHJlY2F0ZWQsIHBsZWFzZSBhdm9pZCB1c2luZyB0aGVzZS5cbiRibG9jay1wYWRkaW5nOiAxNHB4OyAvLyBVc2VkIHRvIGRlZmluZSBzcGFjZSBiZXR3ZWVuIGJsb2NrIGZvb3RwcmludCBhbmQgc3Vycm91bmRpbmcgYm9yZGVycy5cbiRyYWRpdXMtYmxvY2stdWk6ICRyYWRpdXMtc21hbGw7XG4kc2hhZG93LXBvcG92ZXI6ICRlbGV2YXRpb24teC1zbWFsbDtcbiRzaGFkb3ctbW9kYWw6ICRlbGV2YXRpb24tbGFyZ2U7XG4kZGVmYXVsdC1mb250LXNpemU6ICRmb250LXNpemUtbWVkaXVtO1xuXG4vKipcbiAqIEJsb2NrIHBhZGRpbmdzLlxuICovXG5cbi8vIFBhZGRpbmcgZm9yIGJsb2NrcyB3aXRoIGEgYmFja2dyb3VuZCBjb2xvciAoZS5nLiBwYXJhZ3JhcGggb3IgZ3JvdXApLlxuJGJsb2NrLWJnLXBhZGRpbmctLXY6IDEuMjVlbTtcbiRibG9jay1iZy1wYWRkaW5nLS1oOiAyLjM3NWVtO1xuXG5cbi8qKlxuICogUmVhY3QgTmF0aXZlIHNwZWNpZmljLlxuICogVGhlc2UgdmFyaWFibGVzIGRvIG5vdCBhcHBlYXIgdG8gYmUgdXNlZCBhbnl3aGVyZSBlbHNlLlxuICovXG5cbi8vIERpbWVuc2lvbnMuXG4kbW9iaWxlLWhlYWRlci10b29sYmFyLWhlaWdodDogNDRweDtcbiRtb2JpbGUtaGVhZGVyLXRvb2xiYXItZXhwYW5kZWQtaGVpZ2h0OiA1MnB4O1xuJG1vYmlsZS1mbG9hdGluZy10b29sYmFyLWhlaWdodDogNDRweDtcbiRtb2JpbGUtZmxvYXRpbmctdG9vbGJhci1tYXJnaW46IDhweDtcbiRtb2JpbGUtY29sb3Itc3dhdGNoOiA0OHB4O1xuXG4vLyBCbG9jayBVSS5cbiRtb2JpbGUtYmxvY2stdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kZGltbWVkLW9wYWNpdHk6IDE7XG4kYmxvY2stZWRnZS10by1jb250ZW50OiAxNnB4O1xuJHNvbGlkLWJvcmRlci1zcGFjZTogMTJweDtcbiRkYXNoZWQtYm9yZGVyLXNwYWNlOiA2cHg7XG4kYmxvY2stc2VsZWN0ZWQtbWFyZ2luOiAzcHg7XG4kYmxvY2stc2VsZWN0ZWQtYm9yZGVyLXdpZHRoOiAxcHg7XG4kYmxvY2stc2VsZWN0ZWQtcGFkZGluZzogMDtcbiRibG9jay1zZWxlY3RlZC1jaGlsZC1tYXJnaW46IDVweDtcbiRibG9jay1zZWxlY3RlZC10by1jb250ZW50OiAkYmxvY2stZWRnZS10by1jb250ZW50IC0gJGJsb2NrLXNlbGVjdGVkLW1hcmdpbiAtICRibG9jay1zZWxlY3RlZC1ib3JkZXItd2lkdGg7XG4iLCIvKipcbiAqIENvbG9yc1xuICovXG5cbi8vIFdvcmRQcmVzcyBncmF5cy5cbiRibGFjazogIzAwMDtcdFx0XHQvLyBVc2Ugb25seSB3aGVuIHlvdSB0cnVseSBuZWVkIHB1cmUgYmxhY2suIEZvciBVSSwgdXNlICRncmF5LTkwMC5cbiRncmF5LTkwMDogIzFlMWUxZTtcbiRncmF5LTgwMDogIzJmMmYyZjtcbiRncmF5LTcwMDogIzc1NzU3NTtcdFx0Ly8gTWVldHMgNC42OjEgKDQuNToxIGlzIG1pbmltdW0pIHRleHQgY29udHJhc3QgYWdhaW5zdCB3aGl0ZS5cbiRncmF5LTYwMDogIzk0OTQ5NDtcdFx0Ly8gTWVldHMgMzoxIFVJIG9yIGxhcmdlIHRleHQgY29udHJhc3QgYWdhaW5zdCB3aGl0ZS5cbiRncmF5LTQwMDogI2NjYztcbiRncmF5LTMwMDogI2RkZDtcdFx0Ly8gVXNlZCBmb3IgbW9zdCBib3JkZXJzLlxuJGdyYXktMjAwOiAjZTBlMGUwO1x0XHQvLyBVc2VkIHNwYXJpbmdseSBmb3IgbGlnaHQgYm9yZGVycy5cbiRncmF5LTEwMDogI2YwZjBmMDtcdFx0Ly8gVXNlZCBmb3IgbGlnaHQgZ3JheSBiYWNrZ3JvdW5kcy5cbiR3aGl0ZTogI2ZmZjtcblxuLy8gT3BhY2l0aWVzICYgYWRkaXRpb25hbCBjb2xvcnMuXG4kZGFyay1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCRncmF5LTkwMCwgMC42Mik7XG4kbWVkaXVtLWdyYXktcGxhY2Vob2xkZXI6IHJnYmEoJGdyYXktOTAwLCAwLjU1KTtcbiRsaWdodC1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCR3aGl0ZSwgMC42NSk7XG5cbi8vIEFsZXJ0IGNvbG9ycy5cbiRhbGVydC15ZWxsb3c6ICNmMGI4NDk7XG4kYWxlcnQtcmVkOiAjY2MxODE4O1xuJGFsZXJ0LWdyZWVuOiAjNGFiODY2O1xuXG4vLyBEZXByZWNhdGVkLCBwbGVhc2UgYXZvaWQgdXNpbmcgdGhlc2UuXG4kZGFyay10aGVtZS1mb2N1czogJHdoaXRlO1x0Ly8gRm9jdXMgY29sb3Igd2hlbiB0aGUgdGhlbWUgaXMgZGFyay5cbiIsIkB1c2UgXCJAd29yZHByZXNzL2Jhc2Utc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uYm9vdC1zaXRlLWh1YiB7XG5cdHBvc2l0aW9uOiBzdGlja3k7XG5cdHRvcDogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3Bkcy1jb2xvci1iZy1zdXJmYWNlLW5ldXRyYWwtd2VhaywgI2YwZjBmMCk7XG5cdHotaW5kZXg6IDE7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnIgYXV0bztcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZy1yaWdodDogdmFyaWFibGVzLiRncmlkLXVuaXQtMjA7XG5cdGZsZXgtc2hyaW5rOiAwOyAvLyBQcmV2ZW50IGZsZXggcGFyZW50IGZyb20gc2hyaW5raW5nIHRoaXMgZWxlbWVudC5cbn1cblxuLmJvb3Qtc2l0ZS1odWJfX2FjdGlvbnMge1xuXHRmbGV4LXNocmluazogMDtcbn1cblxuLmJvb3Qtc2l0ZS1odWJfX3RpdGxlIHtcblx0Y29sb3I6IHZhcigtLXdwZHMtY29sb3ItZmctY29udGVudC1uZXV0cmFsLCAjMWUxZTFlKTtcblx0Zm9udC1zaXplOiB2YXJpYWJsZXMuJGZvbnQtc2l6ZS1tZWRpdW07XG5cdGZvbnQtd2VpZ2h0OiB2YXJpYWJsZXMuJGZvbnQtd2VpZ2h0LW1lZGl1bTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuXHQuY29tcG9uZW50cy1leHRlcm5hbC1saW5rX19jb250ZW50cyB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcmlhYmxlcy4kZ3JpZC11bml0LTA1O1xuXHR9XG5cblx0Ly8gU2hvdyBpY29uIG9uIGhvdmVyXG5cdC5jb21wb25lbnRzLWV4dGVybmFsLWxpbmtfX2ljb24ge1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2Utb3V0O1xuXHR9XG5cblx0Jjpob3ZlciAuY29tcG9uZW50cy1leHRlcm5hbC1saW5rX19pY29uIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0Ly8gRm9jdXMgc3R5bGVzXG5cdEBtZWRpYSBub3QgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pIHtcblx0XHR0cmFuc2l0aW9uOiBvdXRsaW5lIDAuMXMgZWFzZS1vdXQ7XG5cdH1cblxuXHQmOmZvY3VzOm5vdCg6YWN0aXZlKSB7XG5cdFx0b3V0bGluZTpcblx0XHRcdHZhcigtLXdwZHMtYm9yZGVyLXdpZHRoLWZvY3VzLCAycHgpIHNvbGlkXG5cdFx0XHR2YXIoLS13cGRzLWNvbG9yLXN0cm9rZS1mb2N1cy1icmFuZCwgIzAwNzNhYSk7XG5cdFx0b3V0bGluZS1vZmZzZXQ6IGNhbGMoLTEgKiB2YXIoLS13cGRzLWJvcmRlci13aWR0aC1mb2N1cywgMnB4KSk7XG5cdH1cbn1cbiJdfQ== */`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css3));
function SiteHub() {
  const { homeUrl, siteTitle } = (0, import_data2.useSelect)((select) => {
    const { getEntityRecord } = select(import_core_data2.store);
    const _base = getEntityRecord(
      "root",
      "__unstableBase"
    );
    return {
      homeUrl: _base?.home,
      siteTitle: !_base?.name && !!_base?.url ? (0, import_url.filterURLForDisplay)(_base?.url) : _base?.name
    };
  }, []);
  const { open: openCommandCenter } = (0, import_data2.useDispatch)(import_commands.store);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "boot-site-hub", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(site_icon_link_default, { to: "/", "aria-label": (0, import_i18n2.__)("Go to the Dashboard") }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      import_components2.ExternalLink,
      {
        href: homeUrl ?? "/",
        className: "boot-site-hub__title",
        children: siteTitle && (0, import_html_entities.decodeEntities)(siteTitle)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_components2.__experimentalHStack, { className: "boot-site-hub__actions", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      import_components2.Button,
      {
        variant: "tertiary",
        icon: search_default,
        onClick: () => openCommandCenter(),
        size: "compact",
        label: (0, import_i18n2.__)("Open command palette"),
        shortcut: import_keycodes.displayShortcut.primary("k")
      }
    ) })
  ] });
}
var site_hub_default = SiteHub;

// packages/boot/build-module/components/navigation/index.js
var import_element6 = __toESM(require_element());
var import_data6 = __toESM(require_data());

// packages/boot/build-module/store/index.js
var import_data3 = __toESM(require_data());

// packages/boot/build-module/store/reducer.js
var initialState = {
  menuItems: {},
  routes: []
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "REGISTER_MENU_ITEM":
      return {
        ...state,
        menuItems: {
          ...state.menuItems,
          [action.id]: action.menuItem
        }
      };
    case "REGISTER_ROUTE":
      return {
        ...state,
        routes: [...state.routes, action.route]
      };
  }
  return state;
}

// packages/boot/build-module/store/actions.js
var actions_exports = {};
__export(actions_exports, {
  registerMenuItem: () => registerMenuItem,
  registerRoute: () => registerRoute
});
function registerMenuItem(id, menuItem) {
  return {
    type: "REGISTER_MENU_ITEM",
    id,
    menuItem
  };
}
function registerRoute(route) {
  return {
    type: "REGISTER_ROUTE",
    route
  };
}

// packages/boot/build-module/store/selectors.js
var selectors_exports = {};
__export(selectors_exports, {
  getMenuItems: () => getMenuItems,
  getRoutes: () => getRoutes
});
function getMenuItems(state) {
  return Object.values(state.menuItems);
}
function getRoutes(state) {
  return state.routes;
}

// packages/boot/build-module/store/index.js
var STORE_NAME = "wordpress/boot";
var store = (0, import_data3.createReduxStore)(STORE_NAME, {
  reducer,
  actions: actions_exports,
  selectors: selectors_exports
});
(0, import_data3.register)(store);

// packages/boot/build-module/components/navigation/navigation-item/index.js
var import_components5 = __toESM(require_components());

// packages/boot/build-module/components/navigation/router-link-item.js
var import_element3 = __toESM(require_element());
var import_components3 = __toESM(require_components());
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
function AnchorOnlyItem(props, forwardedRef) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_components3.__experimentalItem, { as: "a", ref: forwardedRef, ...props });
}
var RouterLinkItem = createLink((0, import_element3.forwardRef)(AnchorOnlyItem));
var router_link_item_default = RouterLinkItem;

// packages/boot/build-module/components/navigation/items.js
var import_element4 = __toESM(require_element());
var import_components4 = __toESM(require_components());
var import_primitives9 = __toESM(require_primitives());
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
function isSvg(element) {
  return (0, import_element4.isValidElement)(element) && (element.type === import_primitives9.SVG || element.type === "svg");
}
function wrapIcon(icon, shouldShowPlaceholder = true) {
  if (isSvg(icon)) {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_components4.Icon, { icon });
  }
  if (typeof icon === "string" && icon.startsWith("dashicons-")) {
    const iconKey = icon.replace(
      /^dashicons-/,
      ""
    );
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      import_components4.Dashicon,
      {
        style: { padding: "2px" },
        icon: iconKey,
        "aria-hidden": "true"
      }
    );
  }
  if (typeof icon === "string" && icon.startsWith("data:")) {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "img",
      {
        src: icon,
        alt: "",
        "aria-hidden": "true",
        style: {
          width: "20px",
          height: "20px",
          display: "block",
          padding: "2px"
        }
      }
    );
  }
  if (icon) {
    return icon;
  }
  if (shouldShowPlaceholder) {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "div",
      {
        style: { width: "24px", height: "24px" },
        "aria-hidden": "true"
      }
    );
  }
  return null;
}

// packages/boot/build-module/components/navigation/navigation-item/index.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var css4 = `/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Typography
 */
/**
 * Breakpoints & Media Queries
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
.boot-navigation-item.components-item {
  color: var(--wpds-color-fg-interactive-neutral, #1e1e1e);
  padding-inline: 4px;
  padding-block: 0;
  margin-inline: 12px;
  margin-block-end: 4px;
  width: calc(100% - 24px);
  border: none;
  min-height: 32px;
  display: flex;
  align-items: center;
  font-family: -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
}
.boot-dropdown-item__children .boot-navigation-item.components-item {
  min-height: 24px;
}
.boot-navigation-item.components-item {
  border-radius: var(--wpds-border-radius-small, 2px);
}
.boot-navigation-item.components-item.active, .boot-navigation-item.components-item:hover, .boot-navigation-item.components-item:focus, .boot-navigation-item.components-item[aria-current=true] {
  color: var(--wpds-color-fg-interactive-brand-active, #0073aa);
}
.boot-navigation-item.components-item.active {
  font-weight: 499;
}
.boot-navigation-item.components-item svg:last-child {
  padding: 4px;
}
.boot-navigation-item.components-item[aria-current=true] {
  color: var(--wpds-color-fg-interactive-brand-active, #0073aa);
  font-weight: 499;
}
.boot-navigation-item.components-item:focus-visible {
  transform: translateZ(0);
}
.boot-navigation-item.components-item.with-suffix {
  padding-right: 16px;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnL2d1dGVuYmVyZy9wYWNrYWdlcy9ib290L3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi1pdGVtIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy9fY29sb3JzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy9fYnJlYWtwb2ludHMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL19mdW5jdGlvbnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL19sb25nLWNvbnRlbnQtZmFkZS5zY3NzIiwic3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQ0FBO0FBQUE7QUFBQTtBRFVBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQTZCQTtBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFnQkE7QUFBQTtBQUFBO0FBd0JBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQWVBO0FBQUE7QUFBQTtBQW1CQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBRWxLQTtBQUFBO0FBQUE7QUNBQTtBQUFBO0FBQUE7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUg0RUE7QUFBQTtBQUFBO0FBMERBO0FBQUE7QUFBQTtBQWdEQTtBQUFBO0FBQUE7QUFxQ0E7QUFBQTtBQUFBO0FBb0JBO0FBQUE7QUFBQTtBQXdMQTtBQUFBO0FBQUE7QUFBQTtBQWdEQTtBQUFBO0FBQUE7QUlwZEE7RUFDQztFQUNBLGdCTitDYztFTTlDZDtFQUNBLGVOK0NjO0VNOUNkLGtCTjRDYztFTTNDZDtFQUNBO0VBQ0EsWU44Q2M7RU03Q2Q7RUFDQTtFSktBLGFGeUJrQjtFRXhCbEIsYUZtQnFCO0VFc0JyQixXRnBDa0I7RUVxQ2xCLGFGOUJ3Qjs7QU1meEI7RUFDQyxZTnVDYTs7QU1yRGY7RUFrQkM7O0FBRUE7RUFJQzs7QUFHRDtFQUNDLGFOUW1COztBTUxwQjtFQUNDLFNOaUJhOztBTWRkO0VBQ0M7RUFDQSxhTkRtQjs7QU1LcEI7RUFDQzs7QUFHRDtFQUNDLGVOTWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNDU1MgVmFyaWFibGVzLlxuICpcbiAqIFBsZWFzZSB1c2UgdmFyaWFibGVzIGZyb20gdGhpcyBzaGVldCB0byBlbnN1cmUgY29uc2lzdGVuY3kgYWNyb3NzIHRoZSBVSS5cbiAqIERvbid0IGFkZCB0byB0aGlzIHNoZWV0IHVubGVzcyB5b3UncmUgcHJldHR5IHN1cmUgdGhlIHZhbHVlIHdpbGwgYmUgcmV1c2VkIGluIG1hbnkgcGxhY2VzLlxuICogRm9yIGV4YW1wbGUsIGRvbid0IGFkZCBydWxlcyB0byB0aGlzIHNoZWV0IHRoYXQgYWZmZWN0IGJsb2NrIHZpc3VhbHMuIEl0J3MgcHVyZWx5IGZvciBVSS5cbiAqL1xuXG5AdXNlIFwiLi9jb2xvcnNcIjtcblxuLyoqXG4gKiBGb250cyAmIGJhc2ljIHZhcmlhYmxlcy5cbiAqL1xuXG4kZGVmYXVsdC1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCxcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IC8vIFRvZG86IGRlcHJlY2F0ZSBpbiBmYXZvciBvZiAkZmFtaWx5IHZhcmlhYmxlc1xuJGRlZmF1bHQtbGluZS1oZWlnaHQ6IDEuNDsgLy8gVG9kbzogZGVwcmVjYXRlIGluIGZhdm9yIG9mICRsaW5lLWhlaWdodCB0b2tlbnNcblxuLyoqXG4gKiBUeXBvZ3JhcGh5XG4gKi9cblxuLy8gU2l6ZXNcbiRmb250LXNpemUteC1zbWFsbDogMTFweDtcbiRmb250LXNpemUtc21hbGw6IDEycHg7XG4kZm9udC1zaXplLW1lZGl1bTogMTNweDtcbiRmb250LXNpemUtbGFyZ2U6IDE1cHg7XG4kZm9udC1zaXplLXgtbGFyZ2U6IDIwcHg7XG4kZm9udC1zaXplLTJ4LWxhcmdlOiAzMnB4O1xuXG4vLyBMaW5lIGhlaWdodHNcbiRmb250LWxpbmUtaGVpZ2h0LXgtc21hbGw6IDE2cHg7XG4kZm9udC1saW5lLWhlaWdodC1zbWFsbDogMjBweDtcbiRmb250LWxpbmUtaGVpZ2h0LW1lZGl1bTogMjRweDtcbiRmb250LWxpbmUtaGVpZ2h0LWxhcmdlOiAyOHB4O1xuJGZvbnQtbGluZS1oZWlnaHQteC1sYXJnZTogMzJweDtcbiRmb250LWxpbmUtaGVpZ2h0LTJ4LWxhcmdlOiA0MHB4O1xuXG4vLyBXZWlnaHRzXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xuJGZvbnQtd2VpZ2h0LW1lZGl1bTogNDk5OyAvLyBlbnN1cmVzIGZhbGxiYWNrIHRvIDQwMCAoaW5zdGVhZCBvZiA2MDApXG5cbi8vIEZhbWlsaWVzXG4kZm9udC1mYW1pbHktaGVhZGluZ3M6IC1hcHBsZS1zeXN0ZW0sIFwic3lzdGVtLXVpXCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1ib2R5OiAtYXBwbGUtc3lzdGVtLCBcInN5c3RlbS11aVwiLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogTWVubG8sIENvbnNvbGFzLCBtb25hY28sIG1vbm9zcGFjZTtcblxuLyoqXG4gKiBHcmlkIFN5c3RlbS5cbiAqIGh0dHBzOi8vbWFrZS53b3JkcHJlc3Mub3JnL2Rlc2lnbi8yMDE5LzEwLzMxL3Byb3Bvc2FsLWEtY29uc2lzdGVudC1zcGFjaW5nLXN5c3RlbS1mb3Itd29yZHByZXNzL1xuICovXG5cbiRncmlkLXVuaXQ6IDhweDtcbiRncmlkLXVuaXQtMDU6IDAuNSAqICRncmlkLXVuaXQ7XHQvLyA0cHhcbiRncmlkLXVuaXQtMTA6IDEgKiAkZ3JpZC11bml0O1x0XHQvLyA4cHhcbiRncmlkLXVuaXQtMTU6IDEuNSAqICRncmlkLXVuaXQ7XHQvLyAxMnB4XG4kZ3JpZC11bml0LTIwOiAyICogJGdyaWQtdW5pdDtcdFx0Ly8gMTZweFxuJGdyaWQtdW5pdC0zMDogMyAqICRncmlkLXVuaXQ7XHRcdC8vIDI0cHhcbiRncmlkLXVuaXQtNDA6IDQgKiAkZ3JpZC11bml0O1x0XHQvLyAzMnB4XG4kZ3JpZC11bml0LTUwOiA1ICogJGdyaWQtdW5pdDtcdFx0Ly8gNDBweFxuJGdyaWQtdW5pdC02MDogNiAqICRncmlkLXVuaXQ7XHRcdC8vIDQ4cHhcbiRncmlkLXVuaXQtNzA6IDcgKiAkZ3JpZC11bml0O1x0XHQvLyA1NnB4XG4kZ3JpZC11bml0LTgwOiA4ICogJGdyaWQtdW5pdDtcdFx0Ly8gNjRweFxuXG4vKipcbiAqIFJhZGl1cyBzY2FsZS5cbiAqL1xuXG4kcmFkaXVzLXgtc21hbGw6IDFweDsgICAvLyBBcHBsaWVkIHRvIGVsZW1lbnRzIGxpa2UgYnV0dG9ucyBuZXN0ZWQgd2l0aGluIHByaW1pdGl2ZXMgbGlrZSBpbnB1dHMuXG4kcmFkaXVzLXNtYWxsOiAycHg7ICAgICAvLyBBcHBsaWVkIHRvIG1vc3QgcHJpbWl0aXZlcy5cbiRyYWRpdXMtbWVkaXVtOiA0cHg7ICAgIC8vIEFwcGxpZWQgdG8gY29udGFpbmVycyB3aXRoIHNtYWxsZXIgcGFkZGluZy5cbiRyYWRpdXMtbGFyZ2U6IDhweDsgICAgIC8vIEFwcGxpZWQgdG8gY29udGFpbmVycyB3aXRoIGxhcmdlciBwYWRkaW5nLlxuJHJhZGl1cy1mdWxsOiA5OTk5cHg7ICAgLy8gRm9yIHBpbGxzLlxuJHJhZGl1cy1yb3VuZDogNTAlOyAgICAgLy8gRm9yIGNpcmNsZXMgYW5kIG92YWxzLlxuXG4vKipcbiAqIEVsZXZhdGlvbiBzY2FsZS5cbiAqL1xuXG4vLyBGb3Igc2VjdGlvbnMgYW5kIGNvbnRhaW5lcnMgdGhhdCBncm91cCByZWxhdGVkIGNvbnRlbnQgYW5kIGNvbnRyb2xzLCB3aGljaCBtYXkgb3ZlcmxhcCBvdGhlciBjb250ZW50LiBFeGFtcGxlOiBQcmV2aWV3IEZyYW1lLlxuJGVsZXZhdGlvbi14LXNtYWxsOiAwIDFweCAxcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAzKSwgMCAxcHggMnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMiksIDAgM3B4IDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpLCAwIDRweCA0cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAxKTtcblxuLy8gRm9yIGNvbXBvbmVudHMgdGhhdCBwcm92aWRlIGNvbnRleHR1YWwgZmVlZGJhY2sgd2l0aG91dCBiZWluZyBpbnRydXNpdmUuIEdlbmVyYWxseSBub24taW50ZXJydXB0aXZlLiBFeGFtcGxlOiBUb29sdGlwcywgU25hY2tiYXIuXG4kZWxldmF0aW9uLXNtYWxsOiAwIDFweCAycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA1KSwgMCAycHggM3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNCksIDAgNnB4IDZweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDMpLCAwIDhweCA4cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLy8gRm9yIGNvbXBvbmVudHMgdGhhdCBvZmZlciBhZGRpdGlvbmFsIGFjdGlvbnMuIEV4YW1wbGU6IE1lbnVzLCBDb21tYW5kIFBhbGV0dGVcbiRlbGV2YXRpb24tbWVkaXVtOiAwIDJweCAzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA1KSwgMCA0cHggNXB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNCksIDAgMTJweCAxMnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMyksIDAgMTZweCAxNnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMik7XG5cbi8vIEZvciBjb21wb25lbnRzIHRoYXQgY29uZmlybSBkZWNpc2lvbnMgb3IgaGFuZGxlIG5lY2Vzc2FyeSBpbnRlcnJ1cHRpb25zLiBFeGFtcGxlOiBNb2RhbHMuXG4kZWxldmF0aW9uLWxhcmdlOiAwIDVweCAxNXB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wOCksIDAgMTVweCAyN3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNyksIDAgMzBweCAzNnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNCksIDAgNTBweCA0M3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMik7XG5cbi8qKlxuICogRGltZW5zaW9ucy5cbiAqL1xuXG4kaWNvbi1zaXplOiAyNHB4O1xuJGJ1dHRvbi1zaXplOiAzNnB4O1xuJGJ1dHRvbi1zaXplLW5leHQtZGVmYXVsdC00MHB4OiA0MHB4OyAvLyB0cmFuc2l0aW9uYXJ5IHZhcmlhYmxlIGZvciBuZXh0IGRlZmF1bHQgYnV0dG9uIHNpemVcbiRidXR0b24tc2l6ZS1zbWFsbDogMjRweDtcbiRidXR0b24tc2l6ZS1jb21wYWN0OiAzMnB4O1xuJGhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kcGFuZWwtaGVhZGVyLWhlaWdodDogJGdyaWQtdW5pdC02MDtcbiRuYXYtc2lkZWJhci13aWR0aDogMzAwcHg7XG4kYWRtaW4tYmFyLWhlaWdodDogMzJweDtcbiRhZG1pbi1iYXItaGVpZ2h0LWJpZzogNDZweDtcbiRhZG1pbi1zaWRlYmFyLXdpZHRoOiAxNjBweDtcbiRhZG1pbi1zaWRlYmFyLXdpZHRoLWJpZzogMTkwcHg7XG4kYWRtaW4tc2lkZWJhci13aWR0aC1jb2xsYXBzZWQ6IDM2cHg7XG4kbW9kYWwtbWluLXdpZHRoOiAzNTBweDtcbiRtb2RhbC13aWR0aC1zbWFsbDogMzg0cHg7XG4kbW9kYWwtd2lkdGgtbWVkaXVtOiA1MTJweDtcbiRtb2RhbC13aWR0aC1sYXJnZTogODQwcHg7XG4kc3Bpbm5lci1zaXplOiAxNnB4O1xuJGNhbnZhcy1wYWRkaW5nOiAkZ3JpZC11bml0LTIwO1xuXG4vKipcbiAqIE1vYmlsZSBzcGVjaWZpYyBzdHlsZXNcbiAqL1xuJG1vYmlsZS10ZXh0LW1pbi1mb250LXNpemU6IDE2cHg7IC8vIEFueSBmb250IHNpemUgYmVsb3cgMTZweCB3aWxsIGNhdXNlIE1vYmlsZSBTYWZhcmkgdG8gXCJ6b29tIGluXCIuXG5cbi8qKlxuICogRWRpdG9yIHN0eWxlcy5cbiAqL1xuXG4kc2lkZWJhci13aWR0aDogMjgwcHg7XG4kY29udGVudC13aWR0aDogODQwcHg7XG4kd2lkZS1jb250ZW50LXdpZHRoOiAxMTAwcHg7XG4kd2lkZ2V0LWFyZWEtd2lkdGg6IDcwMHB4O1xuJHNlY29uZGFyeS1zaWRlYmFyLXdpZHRoOiAzNTBweDtcbiRlZGl0b3ItZm9udC1zaXplOiAxNnB4O1xuJGRlZmF1bHQtYmxvY2stbWFyZ2luOiAyOHB4OyAvLyBUaGlzIHZhbHVlIHByb3ZpZGVzIGEgY29uc2lzdGVudCwgY29udGlndW91cyBzcGFjaW5nIGJldHdlZW4gYmxvY2tzLlxuJHRleHQtZWRpdG9yLWZvbnQtc2l6ZTogMTVweDtcbiRlZGl0b3ItbGluZS1oZWlnaHQ6IDEuODtcbiRlZGl0b3ItaHRtbC1mb250OiAkZm9udC1mYW1pbHktbW9ubztcblxuLyoqXG4gKiBCbG9jayAmIEVkaXRvciBVSS5cbiAqL1xuXG4kYmxvY2stdG9vbGJhci1oZWlnaHQ6ICRncmlkLXVuaXQtNjA7XG4kYm9yZGVyLXdpZHRoOiAxcHg7XG4kYm9yZGVyLXdpZHRoLWZvY3VzLWZhbGxiYWNrOiAycHg7IC8vIFRoaXMgZXhpc3RzIGFzIGEgZmFsbGJhY2ssIGFuZCBpcyBpZGVhbGx5IG92ZXJyaWRkZW4gYnkgdmFyKC0td3AtYWRtaW4tYm9yZGVyLXdpZHRoLWZvY3VzKSB1bmxlc3MgaW4gc29tZSBTQVNTIG1hdGggY2FzZXMuXG4kYm9yZGVyLXdpZHRoLXRhYjogMS41cHg7XG4kaGVscHRleHQtZm9udC1zaXplOiAxMnB4O1xuJHJhZGlvLWlucHV0LXNpemU6IDE2cHg7XG4kcmFkaW8taW5wdXQtc2l6ZS1zbTogMjRweDsgLy8gV2lkdGggJiBoZWlnaHQgZm9yIHNtYWxsIHZpZXdwb3J0cy5cblxuLy8gRGVwcmVjYXRlZCwgcGxlYXNlIGF2b2lkIHVzaW5nIHRoZXNlLlxuJGJsb2NrLXBhZGRpbmc6IDE0cHg7IC8vIFVzZWQgdG8gZGVmaW5lIHNwYWNlIGJldHdlZW4gYmxvY2sgZm9vdHByaW50IGFuZCBzdXJyb3VuZGluZyBib3JkZXJzLlxuJHJhZGl1cy1ibG9jay11aTogJHJhZGl1cy1zbWFsbDtcbiRzaGFkb3ctcG9wb3ZlcjogJGVsZXZhdGlvbi14LXNtYWxsO1xuJHNoYWRvdy1tb2RhbDogJGVsZXZhdGlvbi1sYXJnZTtcbiRkZWZhdWx0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZWRpdW07XG5cbi8qKlxuICogQmxvY2sgcGFkZGluZ3MuXG4gKi9cblxuLy8gUGFkZGluZyBmb3IgYmxvY2tzIHdpdGggYSBiYWNrZ3JvdW5kIGNvbG9yIChlLmcuIHBhcmFncmFwaCBvciBncm91cCkuXG4kYmxvY2stYmctcGFkZGluZy0tdjogMS4yNWVtO1xuJGJsb2NrLWJnLXBhZGRpbmctLWg6IDIuMzc1ZW07XG5cblxuLyoqXG4gKiBSZWFjdCBOYXRpdmUgc3BlY2lmaWMuXG4gKiBUaGVzZSB2YXJpYWJsZXMgZG8gbm90IGFwcGVhciB0byBiZSB1c2VkIGFueXdoZXJlIGVsc2UuXG4gKi9cblxuLy8gRGltZW5zaW9ucy5cbiRtb2JpbGUtaGVhZGVyLXRvb2xiYXItaGVpZ2h0OiA0NHB4O1xuJG1vYmlsZS1oZWFkZXItdG9vbGJhci1leHBhbmRlZC1oZWlnaHQ6IDUycHg7XG4kbW9iaWxlLWZsb2F0aW5nLXRvb2xiYXItaGVpZ2h0OiA0NHB4O1xuJG1vYmlsZS1mbG9hdGluZy10b29sYmFyLW1hcmdpbjogOHB4O1xuJG1vYmlsZS1jb2xvci1zd2F0Y2g6IDQ4cHg7XG5cbi8vIEJsb2NrIFVJLlxuJG1vYmlsZS1ibG9jay10b29sYmFyLWhlaWdodDogNDRweDtcbiRkaW1tZWQtb3BhY2l0eTogMTtcbiRibG9jay1lZGdlLXRvLWNvbnRlbnQ6IDE2cHg7XG4kc29saWQtYm9yZGVyLXNwYWNlOiAxMnB4O1xuJGRhc2hlZC1ib3JkZXItc3BhY2U6IDZweDtcbiRibG9jay1zZWxlY3RlZC1tYXJnaW46IDNweDtcbiRibG9jay1zZWxlY3RlZC1ib3JkZXItd2lkdGg6IDFweDtcbiRibG9jay1zZWxlY3RlZC1wYWRkaW5nOiAwO1xuJGJsb2NrLXNlbGVjdGVkLWNoaWxkLW1hcmdpbjogNXB4O1xuJGJsb2NrLXNlbGVjdGVkLXRvLWNvbnRlbnQ6ICRibG9jay1lZGdlLXRvLWNvbnRlbnQgLSAkYmxvY2stc2VsZWN0ZWQtbWFyZ2luIC0gJGJsb2NrLXNlbGVjdGVkLWJvcmRlci13aWR0aDtcbiIsIi8qKlxuICogQ29sb3JzXG4gKi9cblxuLy8gV29yZFByZXNzIGdyYXlzLlxuJGJsYWNrOiAjMDAwO1x0XHRcdC8vIFVzZSBvbmx5IHdoZW4geW91IHRydWx5IG5lZWQgcHVyZSBibGFjay4gRm9yIFVJLCB1c2UgJGdyYXktOTAwLlxuJGdyYXktOTAwOiAjMWUxZTFlO1xuJGdyYXktODAwOiAjMmYyZjJmO1xuJGdyYXktNzAwOiAjNzU3NTc1O1x0XHQvLyBNZWV0cyA0LjY6MSAoNC41OjEgaXMgbWluaW11bSkgdGV4dCBjb250cmFzdCBhZ2FpbnN0IHdoaXRlLlxuJGdyYXktNjAwOiAjOTQ5NDk0O1x0XHQvLyBNZWV0cyAzOjEgVUkgb3IgbGFyZ2UgdGV4dCBjb250cmFzdCBhZ2FpbnN0IHdoaXRlLlxuJGdyYXktNDAwOiAjY2NjO1xuJGdyYXktMzAwOiAjZGRkO1x0XHQvLyBVc2VkIGZvciBtb3N0IGJvcmRlcnMuXG4kZ3JheS0yMDA6ICNlMGUwZTA7XHRcdC8vIFVzZWQgc3BhcmluZ2x5IGZvciBsaWdodCBib3JkZXJzLlxuJGdyYXktMTAwOiAjZjBmMGYwO1x0XHQvLyBVc2VkIGZvciBsaWdodCBncmF5IGJhY2tncm91bmRzLlxuJHdoaXRlOiAjZmZmO1xuXG4vLyBPcGFjaXRpZXMgJiBhZGRpdGlvbmFsIGNvbG9ycy5cbiRkYXJrLWdyYXktcGxhY2Vob2xkZXI6IHJnYmEoJGdyYXktOTAwLCAwLjYyKTtcbiRtZWRpdW0tZ3JheS1wbGFjZWhvbGRlcjogcmdiYSgkZ3JheS05MDAsIDAuNTUpO1xuJGxpZ2h0LWdyYXktcGxhY2Vob2xkZXI6IHJnYmEoJHdoaXRlLCAwLjY1KTtcblxuLy8gQWxlcnQgY29sb3JzLlxuJGFsZXJ0LXllbGxvdzogI2YwYjg0OTtcbiRhbGVydC1yZWQ6ICNjYzE4MTg7XG4kYWxlcnQtZ3JlZW46ICM0YWI4NjY7XG5cbi8vIERlcHJlY2F0ZWQsIHBsZWFzZSBhdm9pZCB1c2luZyB0aGVzZS5cbiRkYXJrLXRoZW1lLWZvY3VzOiAkd2hpdGU7XHQvLyBGb2N1cyBjb2xvciB3aGVuIHRoZSB0aGVtZSBpcyBkYXJrLlxuIiwiLyoqXG4gKiBUeXBvZ3JhcGh5XG4gKi9cblxuQHVzZSBcInNhc3M6Y29sb3JcIjtcbkB1c2UgXCJzYXNzOm1hdGhcIjtcbkB1c2UgXCIuL3ZhcmlhYmxlc1wiO1xuQHVzZSBcIi4vY29sb3JzXCI7XG5AdXNlIFwiLi9icmVha3BvaW50c1wiO1xuQHVzZSBcIi4vZnVuY3Rpb25zXCI7XG5AdXNlIFwiLi9sb25nLWNvbnRlbnQtZmFkZVwiO1xuXG5AbWl4aW4gX3RleHQtaGVhZGluZygpIHtcblx0Zm9udC1mYW1pbHk6IHZhcmlhYmxlcy4kZm9udC1mYW1pbHktaGVhZGluZ3M7XG5cdGZvbnQtd2VpZ2h0OiB2YXJpYWJsZXMuJGZvbnQtd2VpZ2h0LW1lZGl1bTtcbn1cblxuQG1peGluIF90ZXh0LWJvZHkoKSB7XG5cdGZvbnQtZmFtaWx5OiB2YXJpYWJsZXMuJGZvbnQtZmFtaWx5LWJvZHk7XG5cdGZvbnQtd2VpZ2h0OiB2YXJpYWJsZXMuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG59XG5cbkBtaXhpbiBoZWFkaW5nLXNtYWxsKCkge1xuXHRAaW5jbHVkZSBfdGV4dC1oZWFkaW5nKCk7XG5cdGZvbnQtc2l6ZTogdmFyaWFibGVzLiRmb250LXNpemUteC1zbWFsbDtcblx0bGluZS1oZWlnaHQ6IHZhcmlhYmxlcy4kZm9udC1saW5lLWhlaWdodC14LXNtYWxsO1xufVxuXG5AbWl4aW4gaGVhZGluZy1tZWRpdW0oKSB7XG5cdEBpbmNsdWRlIF90ZXh0LWhlYWRpbmcoKTtcblx0Zm9udC1zaXplOiB2YXJpYWJsZXMuJGZvbnQtc2l6ZS1tZWRpdW07XG5cdGxpbmUtaGVpZ2h0OiB2YXJpYWJsZXMuJGZvbnQtbGluZS1oZWlnaHQtc21hbGw7XG59XG5cbkBtaXhpbiBoZWFkaW5nLWxhcmdlKCkge1xuXHRAaW5jbHVkZSBfdGV4dC1oZWFkaW5nKCk7XG5cdGZvbnQtc2l6ZTogdmFyaWFibGVzLiRmb250LXNpemUtbGFyZ2U7XG5cdGxpbmUtaGVpZ2h0OiB2YXJpYWJsZXMuJGZvbnQtbGluZS1oZWlnaHQtc21hbGw7XG59XG5cbkBtaXhpbiBoZWFkaW5nLXgtbGFyZ2UoKSB7XG5cdEBpbmNsdWRlIF90ZXh0LWhlYWRpbmcoKTtcblx0Zm9udC1zaXplOiB2YXJpYWJsZXMuJGZvbnQtc2l6ZS14LWxhcmdlO1xuXHRsaW5lLWhlaWdodDogdmFyaWFibGVzLiRmb250LWxpbmUtaGVpZ2h0LW1lZGl1bTtcbn1cblxuQG1peGluIGhlYWRpbmctMngtbGFyZ2UoKSB7XG5cdEBpbmNsdWRlIF90ZXh0LWhlYWRpbmcoKTtcblx0Zm9udC1zaXplOiB2YXJpYWJsZXMuJGZvbnQtc2l6ZS0yeC1sYXJnZTtcblx0bGluZS1oZWlnaHQ6IHZhcmlhYmxlcy4kZm9udC1saW5lLWhlaWdodC0yeC1sYXJnZTtcbn1cblxuQG1peGluIGJvZHktc21hbGwoKSB7XG5cdEBpbmNsdWRlIF90ZXh0LWJvZHkoKTtcblx0Zm9udC1zaXplOiB2YXJpYWJsZXMuJGZvbnQtc2l6ZS1zbWFsbDtcblx0bGluZS1oZWlnaHQ6IHZhcmlhYmxlcy4kZm9udC1saW5lLWhlaWdodC14LXNtYWxsO1xufVxuXG5AbWl4aW4gYm9keS1tZWRpdW0oKSB7XG5cdEBpbmNsdWRlIF90ZXh0LWJvZHkoKTtcblx0Zm9udC1zaXplOiB2YXJpYWJsZXMuJGZvbnQtc2l6ZS1tZWRpdW07XG5cdGxpbmUtaGVpZ2h0OiB2YXJpYWJsZXMuJGZvbnQtbGluZS1oZWlnaHQtc21hbGw7XG59XG5cbkBtaXhpbiBib2R5LWxhcmdlKCkge1xuXHRAaW5jbHVkZSBfdGV4dC1ib2R5KCk7XG5cdGZvbnQtc2l6ZTogdmFyaWFibGVzLiRmb250LXNpemUtbGFyZ2U7XG5cdGxpbmUtaGVpZ2h0OiB2YXJpYWJsZXMuJGZvbnQtbGluZS1oZWlnaHQtbWVkaXVtO1xufVxuXG5AbWl4aW4gYm9keS14LWxhcmdlKCkge1xuXHRAaW5jbHVkZSBfdGV4dC1ib2R5KCk7XG5cdGZvbnQtc2l6ZTogdmFyaWFibGVzLiRmb250LXNpemUteC1sYXJnZTtcblx0bGluZS1oZWlnaHQ6IHZhcmlhYmxlcy4kZm9udC1saW5lLWhlaWdodC14LWxhcmdlO1xufVxuXG4vKipcbiAqIEJyZWFrcG9pbnQgbWl4aW5zXG4gKi9cblxuQG1peGluIGJyZWFrLXhodWdlKCkge1xuXHRAbWVkaWEgKG1pbi13aWR0aDogI3sgKGJyZWFrcG9pbnRzLiRicmVhay14aHVnZSkgfSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBicmVhay1odWdlKCkge1xuXHRAbWVkaWEgKG1pbi13aWR0aDogI3sgKGJyZWFrcG9pbnRzLiRicmVhay1odWdlKSB9KSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGJyZWFrLXdpZGUoKSB7XG5cdEBtZWRpYSAobWluLXdpZHRoOiAjeyAoYnJlYWtwb2ludHMuJGJyZWFrLXdpZGUpIH0pIHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gYnJlYWsteGxhcmdlKCkge1xuXHRAbWVkaWEgKG1pbi13aWR0aDogI3sgKGJyZWFrcG9pbnRzLiRicmVhay14bGFyZ2UpIH0pIHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gYnJlYWstbGFyZ2UoKSB7XG5cdEBtZWRpYSAobWluLXdpZHRoOiAjeyAoYnJlYWtwb2ludHMuJGJyZWFrLWxhcmdlKSB9KSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGJyZWFrLW1lZGl1bSgpIHtcblx0QG1lZGlhIChtaW4td2lkdGg6ICN7IChicmVha3BvaW50cy4kYnJlYWstbWVkaXVtKSB9KSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGJyZWFrLXNtYWxsKCkge1xuXHRAbWVkaWEgKG1pbi13aWR0aDogI3sgKGJyZWFrcG9pbnRzLiRicmVhay1zbWFsbCkgfSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBicmVhay1tb2JpbGUoKSB7XG5cdEBtZWRpYSAobWluLXdpZHRoOiAjeyAoYnJlYWtwb2ludHMuJGJyZWFrLW1vYmlsZSkgfSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBicmVhay16b29tZWQtaW4oKSB7XG5cdEBtZWRpYSAobWluLXdpZHRoOiAjeyAoYnJlYWtwb2ludHMuJGJyZWFrLXpvb21lZC1pbikgfSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbi8qKlxuICogRm9jdXMgc3R5bGVzLlxuICovXG5cbkBtaXhpbiBibG9jay10b29sYmFyLWJ1dHRvbi1zdHlsZV9fZm9jdXMoKSB7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIHZhcmlhYmxlcy4kYm9yZGVyLXdpZHRoIGNvbG9ycy4kd2hpdGUsIDAgMCAwIHZhcigtLXdwLWFkbWluLWJvcmRlci13aWR0aC1mb2N1cykgdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IpO1xuXG5cdC8vIFdpbmRvd3MgSGlnaCBDb250cmFzdCBtb2RlIHdpbGwgc2hvdyB0aGlzIG91dGxpbmUsIGJ1dCBub3QgdGhlIGJveC1zaGFkb3cuXG5cdG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLy8gVGFicywgSW5wdXRzLCBTcXVhcmUgYnV0dG9ucy5cbkBtaXhpbiBpbnB1dC1zdHlsZV9fbmV1dHJhbCgpIHtcblx0Ym94LXNoYWRvdzogMCAwIDAgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yYWRpdXM6IHZhcmlhYmxlcy4kcmFkaXVzLXNtYWxsO1xuXHRib3JkZXI6IHZhcmlhYmxlcy4kYm9yZGVyLXdpZHRoIHNvbGlkIGNvbG9ycy4kZ3JheS02MDA7XG5cblx0QG1lZGlhIG5vdCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbikge1xuXHRcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xcyBsaW5lYXI7XG5cdH1cbn1cblxuXG5AbWl4aW4gaW5wdXQtc3R5bGVfX2ZvY3VzKCRhY2NlbnQtY29sb3I6IHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKSkge1xuXHRib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3I7XG5cdC8vIEV4cGFuZCB0aGUgZGVmYXVsdCBib3JkZXIgZm9jdXMgc3R5bGUgYnkgLjVweCB0byBiZSBhIHRvdGFsIG9mIDEuNXB4LlxuXHRib3gtc2hhZG93OiAwIDAgMCAwLjVweCAkYWNjZW50LWNvbG9yO1xuXHQvLyBXaW5kb3dzIEhpZ2ggQ29udHJhc3QgbW9kZSB3aWxsIHNob3cgdGhpcyBvdXRsaW5lLCBidXQgbm90IHRoZSBib3gtc2hhZG93LlxuXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBidXR0b24tc3R5bGVfX2ZvY3VzKCkge1xuXHRib3gtc2hhZG93OiAwIDAgMCB2YXIoLS13cC1hZG1pbi1ib3JkZXItd2lkdGgtZm9jdXMpIHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKTtcblxuXHQvLyBXaW5kb3dzIEhpZ2ggQ29udHJhc3QgbW9kZSB3aWxsIHNob3cgdGhpcyBvdXRsaW5lLCBidXQgbm90IHRoZSBib3gtc2hhZG93LlxuXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cblxuQG1peGluIGJ1dHRvbi1zdHlsZS1vdXRzZXRfX2ZvY3VzKCRmb2N1cy1jb2xvcikge1xuXHRib3gtc2hhZG93OiAwIDAgMCB2YXIoLS13cC1hZG1pbi1ib3JkZXItd2lkdGgtZm9jdXMpIGNvbG9ycy4kd2hpdGUsIDAgMCAwIGNhbGMoMiAqIHZhcigtLXdwLWFkbWluLWJvcmRlci13aWR0aC1mb2N1cykpICRmb2N1cy1jb2xvcjtcblxuXHQvLyBXaW5kb3dzIEhpZ2ggQ29udHJhc3QgbW9kZSB3aWxsIHNob3cgdGhpcyBvdXRsaW5lLCBidXQgbm90IHRoZSBib3gtc2hhZG93LlxuXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cblxuLyoqXG4gKiBBcHBsaWVzIGVkaXRvciBsZWZ0IHBvc2l0aW9uIHRvIHRoZSBzZWxlY3RvciBwYXNzZWQgYXMgYXJndW1lbnRcbiAqL1xuXG5AbWl4aW4gZWRpdG9yLWxlZnQoJHNlbGVjdG9yKSB7XG5cdCN7JHNlbGVjdG9yfSB7IC8qIFNldCBsZWZ0IHBvc2l0aW9uIHdoZW4gYXV0by1mb2xkIGlzIG5vdCBvbiB0aGUgYm9keSBlbGVtZW50LiAqL1xuXHRcdGxlZnQ6IDA7XG5cblx0XHRAbWVkaWEgKG1pbi13aWR0aDogI3sgKGJyZWFrcG9pbnRzLiRicmVhay1tZWRpdW0gKyAxKSB9KSB7XG5cdFx0XHRsZWZ0OiB2YXJpYWJsZXMuJGFkbWluLXNpZGViYXItd2lkdGg7XG5cdFx0fVxuXHR9XG5cblx0LmF1dG8tZm9sZCAjeyRzZWxlY3Rvcn0geyAvKiBBdXRvIGZvbGQgaXMgd2hlbiBvbiBzbWFsbGVyIGJyZWFrcG9pbnRzLCBuYXYgbWVudSBhdXRvIGNvbGxhcHNlcy4gKi9cblx0XHRAbWVkaWEgKG1pbi13aWR0aDogI3sgKGJyZWFrcG9pbnRzLiRicmVhay1tZWRpdW0gKyAxKSB9KSB7XG5cdFx0XHRsZWZ0OiB2YXJpYWJsZXMuJGFkbWluLXNpZGViYXItd2lkdGgtY29sbGFwc2VkO1xuXHRcdH1cblxuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAjeyAoYnJlYWtwb2ludHMuJGJyZWFrLWxhcmdlICsgMSkgfSkge1xuXHRcdFx0bGVmdDogdmFyaWFibGVzLiRhZG1pbi1zaWRlYmFyLXdpZHRoO1xuXHRcdH1cblx0fVxuXG5cdC8qIFNpZGViYXIgbWFudWFsbHkgY29sbGFwc2VkLiAqL1xuXHQuZm9sZGVkICN7JHNlbGVjdG9yfSB7XG5cdFx0bGVmdDogMDtcblxuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAjeyAoYnJlYWtwb2ludHMuJGJyZWFrLW1lZGl1bSArIDEpIH0pIHtcblx0XHRcdGxlZnQ6IHZhcmlhYmxlcy4kYWRtaW4tc2lkZWJhci13aWR0aC1jb2xsYXBzZWQ7XG5cdFx0fVxuXHR9XG5cblx0Ym9keS5pcy1mdWxsc2NyZWVuLW1vZGUgI3skc2VsZWN0b3J9IHtcblx0XHRsZWZ0OiAwICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLyoqXG4gKiBTdHlsZXMgdGhhdCBhcmUgcmV1c2VkIHZlcmJhdGltIGluIGEgZmV3IHBsYWNlc1xuICovXG5cbi8vIFRoZXNlIGFyZSBhZGRpdGlvbmFsIHN0eWxlcyBmb3IgYWxsIGNhcHRpb25zLCB3aGVuIHRoZSB0aGVtZSBvcHRzIGluIHRvIGJsb2NrIHN0eWxlcy5cbkBtaXhpbiBjYXB0aW9uLXN0eWxlKCkge1xuXHRtYXJnaW4tdG9wOiAwLjVlbTtcblx0bWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG5AbWl4aW4gY2FwdGlvbi1zdHlsZS10aGVtZSgpIHtcblx0Y29sb3I6ICM1NTU7XG5cdGZvbnQtc2l6ZTogdmFyaWFibGVzLiRkZWZhdWx0LWZvbnQtc2l6ZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdC5pcy1kYXJrLXRoZW1lICYge1xuXHRcdGNvbG9yOiBjb2xvcnMuJGxpZ2h0LWdyYXktcGxhY2Vob2xkZXI7XG5cdH1cbn1cblxuLyoqXG4gKiBBbGxvd3MgdXNlcnMgdG8gb3B0LW91dCBvZiBhbmltYXRpb25zIHZpYSBPUy1sZXZlbCBwcmVmZXJlbmNlcy5cbiAqL1xuXG5AbWl4aW4gcmVkdWNlLW1vdGlvbigkcHJvcGVydHk6IFwiXCIpIHtcblxuXHRAaWYgJHByb3BlcnR5ID09IFwidHJhbnNpdGlvblwiIHtcblx0XHRAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuXHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XG5cdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAwcztcblx0XHR9XG5cdH0gQGVsc2UgaWYgJHByb3BlcnR5ID09IFwiYW5pbWF0aW9uXCIge1xuXHRcdEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG5cdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDFtcztcblx0XHRcdGFuaW1hdGlvbi1kZWxheTogMHM7XG5cdFx0fVxuXHR9IEBlbHNlIHtcblx0XHRAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuXHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XG5cdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAwcztcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogMW1zO1xuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAwcztcblx0XHR9XG5cdH1cbn1cblxuQG1peGluIGlucHV0LWNvbnRyb2woJGFjY2VudC1jb2xvcjogdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IpKSB7XG5cdGZvbnQtZmFtaWx5OiB2YXJpYWJsZXMuJGRlZmF1bHQtZm9udDtcblx0cGFkZGluZzogNnB4IDhweDtcblx0LyogRm9udHMgc21hbGxlciB0aGFuIDE2cHggY2F1c2VzIG1vYmlsZSBzYWZhcmkgdG8gem9vbS4gKi9cblx0Zm9udC1zaXplOiB2YXJpYWJsZXMuJG1vYmlsZS10ZXh0LW1pbi1mb250LXNpemU7XG5cdC8qIE92ZXJyaWRlIGNvcmUgbGluZS1oZWlnaHQuIFRvIGJlIHJldmlld2VkLiAqL1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xuXHRAaW5jbHVkZSBpbnB1dC1zdHlsZV9fbmV1dHJhbCgpO1xuXG5cdEBpbmNsdWRlIGJyZWFrLXNtYWxsIHtcblx0XHRmb250LXNpemU6IHZhcmlhYmxlcy4kZGVmYXVsdC1mb250LXNpemU7XG5cdFx0LyogT3ZlcnJpZGUgY29yZSBsaW5lLWhlaWdodC4gVG8gYmUgcmV2aWV3ZWQuICovXG5cdFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcblx0fVxuXG5cdCY6Zm9jdXMge1xuXHRcdEBpbmNsdWRlIGlucHV0LXN0eWxlX19mb2N1cygkYWNjZW50LWNvbG9yKTtcblx0fVxuXG5cdC8vIFVzZSBvcGFjaXR5IHRvIHdvcmsgaW4gdmFyaW91cyBlZGl0b3Igc3R5bGVzLlxuXHQmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogY29sb3JzLiRkYXJrLWdyYXktcGxhY2Vob2xkZXI7XG5cdH1cblxuXHQmOjotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogY29sb3JzLiRkYXJrLWdyYXktcGxhY2Vob2xkZXI7XG5cdH1cblxuXHQmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IGNvbG9ycy4kZGFyay1ncmF5LXBsYWNlaG9sZGVyO1xuXHR9XG59XG5cbkBtaXhpbiBjaGVja2JveC1jb250cm9sIHtcblx0Ym9yZGVyOiB2YXJpYWJsZXMuJGJvcmRlci13aWR0aCBzb2xpZCBjb2xvcnMuJGdyYXktOTAwO1xuXHRtYXJnaW4tcmlnaHQ6IHZhcmlhYmxlcy4kZ3JpZC11bml0LTE1O1xuXHR0cmFuc2l0aW9uOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiB2YXJpYWJsZXMuJHJhZGl1cy1zbWFsbDtcblx0QGluY2x1ZGUgaW5wdXQtY29udHJvbDtcblxuXHQmOmZvY3VzIHtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAodmFyaWFibGVzLiRib3JkZXItd2lkdGggKiAyKSBjb2xvcnMuJHdoaXRlLCAwIDAgMCAodmFyaWFibGVzLiRib3JkZXItd2lkdGggKiAyICsgdmFyaWFibGVzLiRib3JkZXItd2lkdGgtZm9jdXMtZmFsbGJhY2spIHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKTtcblxuXHRcdC8vIE9ubHkgdmlzaWJsZSBpbiBXaW5kb3dzIEhpZ2ggQ29udHJhc3QgbW9kZS5cblx0XHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdH1cblxuXHQmOmNoZWNrZWQge1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKTtcblx0XHRib3JkZXItY29sb3I6IHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKTtcblxuXHRcdC8vIEhpZGUgZGVmYXVsdCBjaGVja2JveCBzdHlsZXMgaW4gSUUuXG5cdFx0Jjo6LW1zLWNoZWNrIHtcblx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0fVxuXHR9XG5cblx0JjpjaGVja2VkOjpiZWZvcmUsXG5cdCZbYXJpYS1jaGVja2VkPVwibWl4ZWRcIl06OmJlZm9yZSB7XG5cdFx0bWFyZ2luOiAtM3B4IC01cHg7XG5cdFx0Y29sb3I6IGNvbG9ycy4kd2hpdGU7XG5cblx0XHRAaW5jbHVkZSBicmVhay1tZWRpdW0oKSB7XG5cdFx0XHRtYXJnaW46IC00cHggMCAwIC01cHg7XG5cdFx0fVxuXHR9XG5cblx0JlthcmlhLWNoZWNrZWQ9XCJtaXhlZFwiXSB7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IpO1xuXHRcdGJvcmRlci1jb2xvcjogdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IpO1xuXG5cdFx0Jjo6YmVmb3JlIHtcblx0XHRcdC8vIEluaGVyaXRlZCBmcm9tIGBmb3Jtcy5jc3NgLlxuXHRcdFx0Ly8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL3dvcmRwcmVzcy1kZXZlbG9wL3RyZWUvNS4xLjEvc3JjL3dwLWFkbWluL2Nzcy9mb3Jtcy5jc3MjTDEyMi1MMTMyXG5cdFx0XHRjb250ZW50OiBcIlxcZjQ2MFwiO1xuXHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0d2lkdGg6IDE2cHg7XG5cdFx0XHQvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZm9udC1mYW1pbHktbm8tbWlzc2luZy1nZW5lcmljLWZhbWlseS1rZXl3b3JkIC0tIGRhc2hpY29ucyBkb24ndCBuZWVkIGEgZ2VuZXJpYyBmYW1pbHkga2V5d29yZC4gKi9cblx0XHRcdGZvbnQ6IG5vcm1hbCAzMHB4LzEgZGFzaGljb25zO1xuXHRcdFx0c3BlYWs6IG5vbmU7XG5cdFx0XHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0XHRcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cblx0XHRcdEBpbmNsdWRlIGJyZWFrLW1lZGl1bSgpIHtcblx0XHRcdFx0ZmxvYXQ6IG5vbmU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjFweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQmW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdLFxuXHQmOmRpc2FibGVkIHtcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMuJGdyYXktMTAwO1xuXHRcdGJvcmRlci1jb2xvcjogY29sb3JzLiRncmF5LTMwMDtcblx0XHRjdXJzb3I6IGRlZmF1bHQ7XG5cblx0XHQvLyBPdmVycmlkZSBzdHlsZSBpbmhlcml0ZWQgZnJvbSB3cC1hZG1pbi4gUmVxdWlyZWQgdG8gYXZvaWQgZGVncmFkZWQgYXBwZWFyYW5jZSBvbiBkaWZmZXJlbnQgYmFja2dyb3VuZHMuXG5cdFx0b3BhY2l0eTogMTtcblx0fVxufVxuXG5AbWl4aW4gcmFkaW8tY29udHJvbCB7XG5cdGJvcmRlcjogdmFyaWFibGVzLiRib3JkZXItd2lkdGggc29saWQgY29sb3JzLiRncmF5LTkwMDtcblx0bWFyZ2luLXJpZ2h0OiB2YXJpYWJsZXMuJGdyaWQtdW5pdC0xNTtcblx0dHJhbnNpdGlvbjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogdmFyaWFibGVzLiRyYWRpdXMtcm91bmQ7XG5cdHdpZHRoOiB2YXJpYWJsZXMuJHJhZGlvLWlucHV0LXNpemUtc207XG5cdGhlaWdodDogdmFyaWFibGVzLiRyYWRpby1pbnB1dC1zaXplLXNtO1xuXHRtaW4td2lkdGg6IHZhcmlhYmxlcy4kcmFkaW8taW5wdXQtc2l6ZS1zbTtcblx0bWF4LXdpZHRoOiB2YXJpYWJsZXMuJHJhZGlvLWlucHV0LXNpemUtc207XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRAbWVkaWEgbm90IChwcmVmZXJzLXJlZHVjZWQtbW90aW9uKSB7XG5cdFx0dHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGxpbmVhcjtcblx0fVxuXG5cdEBpbmNsdWRlIGJyZWFrLXNtYWxsKCkge1xuXHRcdGhlaWdodDogdmFyaWFibGVzLiRyYWRpby1pbnB1dC1zaXplO1xuXHRcdHdpZHRoOiB2YXJpYWJsZXMuJHJhZGlvLWlucHV0LXNpemU7XG5cdFx0bWluLXdpZHRoOiB2YXJpYWJsZXMuJHJhZGlvLWlucHV0LXNpemU7XG5cdFx0bWF4LXdpZHRoOiB2YXJpYWJsZXMuJHJhZGlvLWlucHV0LXNpemU7XG5cdH1cblxuXHQmOmNoZWNrZWQ6OmJlZm9yZSB7XG5cdFx0Ym94LXNpemluZzogaW5oZXJpdDtcblx0XHR3aWR0aDogbWF0aC5kaXYodmFyaWFibGVzLiRyYWRpby1pbnB1dC1zaXplLXNtLCAyKTtcblx0XHRoZWlnaHQ6IG1hdGguZGl2KHZhcmlhYmxlcy4kcmFkaW8taW5wdXQtc2l6ZS1zbSwgMik7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogNTAlO1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0XHRtYXJnaW46IDA7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogY29sb3JzLiR3aGl0ZTtcblxuXHRcdC8vIFRoaXMgYm9yZGVyIHNlcnZlcyBhcyBhIGJhY2tncm91bmQgY29sb3IgaW4gV2luZG93cyBIaWdoIENvbnRyYXN0IG1vZGUuXG5cdFx0Ym9yZGVyOiA0cHggc29saWQgY29sb3JzLiR3aGl0ZTtcblxuXHRcdEBpbmNsdWRlIGJyZWFrLXNtYWxsKCkge1xuXHRcdFx0d2lkdGg6IG1hdGguZGl2KHZhcmlhYmxlcy4kcmFkaW8taW5wdXQtc2l6ZSwgMik7XG5cdFx0XHRoZWlnaHQ6IG1hdGguZGl2KHZhcmlhYmxlcy4kcmFkaW8taW5wdXQtc2l6ZSwgMik7XG5cdFx0fVxuXHR9XG5cblx0Jjpmb2N1cyB7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDAgKHZhcmlhYmxlcy4kYm9yZGVyLXdpZHRoICogMikgY29sb3JzLiR3aGl0ZSwgMCAwIDAgKHZhcmlhYmxlcy4kYm9yZGVyLXdpZHRoICogMiArIHZhcmlhYmxlcy4kYm9yZGVyLXdpZHRoLWZvY3VzLWZhbGxiYWNrKSB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvcik7XG5cblx0XHQvLyBPbmx5IHZpc2libGUgaW4gV2luZG93cyBIaWdoIENvbnRyYXN0IG1vZGUuXG5cdFx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHR9XG5cblx0JjpjaGVja2VkIHtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvcik7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHR9XG59XG5cbi8qKlxuICogUmVzZXQgZGVmYXVsdCBzdHlsZXMgZm9yIEphdmFTY3JpcHQgVUkgYmFzZWQgcGFnZXMuXG4gKiBUaGlzIGlzIGEgV1AtYWRtaW4gYWdub3N0aWMgcmVzZXRcbiAqL1xuXG5AbWl4aW4gcmVzZXQge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG5cdCosXG5cdCo6OmJlZm9yZSxcblx0Kjo6YWZ0ZXIge1xuXHRcdGJveC1zaXppbmc6IGluaGVyaXQ7XG5cdH1cbn1cblxuQG1peGluIGxpbmstcmVzZXQge1xuXHQmOmZvY3VzIHtcblx0XHRjb2xvcjogdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3ItLXJnYik7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDAgdmFyKC0td3AtYWRtaW4tYm9yZGVyLXdpZHRoLWZvY3VzKSB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvciwgIzAwN2NiYSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyaWFibGVzLiRyYWRpdXMtc21hbGw7XG5cdH1cbn1cblxuLy8gVGhlIGVkaXRvciBpbnB1dCByZXNldCB3aXRoIGluY3JlYXNlZCBzcGVjaWZpY2l0eSB0byBhdm9pZCB0aGVtZSBzdHlsZXMgYmxlZWRpbmcgaW4uXG5AbWl4aW4gZWRpdG9yLWlucHV0LXJlc2V0KCkge1xuXHRmb250LWZhbWlseTogdmFyaWFibGVzLiRlZGl0b3ItaHRtbC1mb250ICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiBjb2xvcnMuJGdyYXktOTAwICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQ6IGNvbG9ycy4kd2hpdGUgIWltcG9ydGFudDtcblx0cGFkZGluZzogdmFyaWFibGVzLiRncmlkLXVuaXQtMTUgIWltcG9ydGFudDtcblx0Ym9yZGVyOiB2YXJpYWJsZXMuJGJvcmRlci13aWR0aCBzb2xpZCBjb2xvcnMuJGdyYXktOTAwICFpbXBvcnRhbnQ7XG5cdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogdmFyaWFibGVzLiRyYWRpdXMtc21hbGwgIWltcG9ydGFudDtcblxuXHQvLyBGb250cyBzbWFsbGVyIHRoYW4gMTZweCBjYXVzZXMgbW9iaWxlIHNhZmFyaSB0byB6b29tLlxuXHRmb250LXNpemU6IHZhcmlhYmxlcy4kbW9iaWxlLXRleHQtbWluLWZvbnQtc2l6ZSAhaW1wb3J0YW50O1xuXHRAaW5jbHVkZSBicmVhay1zbWFsbCB7XG5cdFx0Zm9udC1zaXplOiB2YXJpYWJsZXMuJGRlZmF1bHQtZm9udC1zaXplICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQmOmZvY3VzIHtcblx0XHRib3JkZXItY29sb3I6IHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKSAhaW1wb3J0YW50O1xuXHRcdGJveC1zaGFkb3c6IDAgMCAwICh2YXJpYWJsZXMuJGJvcmRlci13aWR0aC1mb2N1cy1mYWxsYmFjayAtIHZhcmlhYmxlcy4kYm9yZGVyLXdpZHRoKSB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvcikgIWltcG9ydGFudDtcblxuXHRcdC8vIFdpbmRvd3MgSGlnaCBDb250cmFzdCBtb2RlIHdpbGwgc2hvdyB0aGlzIG91dGxpbmUsIGJ1dCBub3QgdGhlIGJveC1zaGFkb3cuXG5cdFx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXNldCB0aGUgV1AgQWRtaW4gcGFnZSBzdHlsZXMgZm9yIEd1dGVuYmVyZy1saWtlIHBhZ2VzLlxuICovXG5cbkBtaXhpbiB3cC1hZG1pbi1yZXNldCggJGNvbnRlbnQtY29udGFpbmVyICkge1xuXHRiYWNrZ3JvdW5kOiBjb2xvcnMuJHdoaXRlO1xuXG5cdCN3cGNvbnRlbnQge1xuXHRcdHBhZGRpbmctbGVmdDogMDtcblx0fVxuXG5cdCN3cGJvZHktY29udGVudCB7XG5cdFx0cGFkZGluZy1ib3R0b206IDA7XG5cdH1cblxuXHQvKiBXZSBoaWRlIGxlZ2FjeSBub3RpY2VzIGluIEd1dGVuYmVyZyBCYXNlZCBQYWdlcywgYmVjYXVzZSB0aGV5IHdlcmUgbm90IGRlc2lnbmVkIGluIGEgd2F5IHRoYXQgc2NhbGVkIHdlbGwuXG5cdCAgIFBsdWdpbnMgY2FuIHVzZSBHdXRlbmJlcmcgbm90aWNlcyBpZiB0aGV5IG5lZWQgdG8gcGFzcyBvbiBpbmZvcm1hdGlvbiB0byB0aGUgdXNlciB3aGVuIHRoZXkgYXJlIGVkaXRpbmcuICovXG5cdCN3cGJvZHktY29udGVudCA+IGRpdjpub3QoI3sgJGNvbnRlbnQtY29udGFpbmVyIH0pOm5vdCgjc2NyZWVuLW1ldGEpIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0I3dwZm9vdGVyIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0LmExMXktc3BlYWstcmVnaW9uIHtcblx0XHRsZWZ0OiAtMXB4O1xuXHRcdHRvcDogLTFweDtcblx0fVxuXG5cdHVsI2FkbWlubWVudSBhLndwLWhhcy1jdXJyZW50LXN1Ym1lbnU6OmFmdGVyLFxuXHR1bCNhZG1pbm1lbnUgPiBsaS5jdXJyZW50ID4gYS5jdXJyZW50OjphZnRlciB7XG5cdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiBjb2xvcnMuJHdoaXRlO1xuXHR9XG5cblx0Lm1lZGlhLWZyYW1lIHNlbGVjdC5hdHRhY2htZW50LWZpbHRlcnM6bGFzdC1vZi10eXBlIHtcblx0XHR3aWR0aDogYXV0bztcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdH1cbn1cblxuQG1peGluIGFkbWluLXNjaGVtZSgkY29sb3ItcHJpbWFyeSkge1xuXHQvLyBEZWZpbmUgUkdCIGVxdWl2YWxlbnRzIGZvciB1c2UgaW4gcmdiYSBmdW5jdGlvbi5cblx0Ly8gSGV4YWRlY2ltYWwgY3NzIHZhcnMgZG8gbm90IHdvcmsgaW4gdGhlIHJnYmEgZnVuY3Rpb24uXG5cdC0td3AtYWRtaW4tdGhlbWUtY29sb3I6ICN7JGNvbG9yLXByaW1hcnl9O1xuXHQtLXdwLWFkbWluLXRoZW1lLWNvbG9yLS1yZ2I6ICN7ZnVuY3Rpb25zLmhleC10by1yZ2IoJGNvbG9yLXByaW1hcnkpfTtcblx0Ly8gRGFya2VyIHNoYWRlcy5cblx0LS13cC1hZG1pbi10aGVtZS1jb2xvci1kYXJrZXItMTA6ICN7Y29sb3IuYWRqdXN0KCRjb2xvci1wcmltYXJ5LCAkbGlnaHRuZXNzOiAtNSUpfTtcblx0LS13cC1hZG1pbi10aGVtZS1jb2xvci1kYXJrZXItMTAtLXJnYjogI3tmdW5jdGlvbnMuaGV4LXRvLXJnYihjb2xvci5hZGp1c3QoJGNvbG9yLXByaW1hcnksICRsaWdodG5lc3M6IC01JSkpfTtcblx0LS13cC1hZG1pbi10aGVtZS1jb2xvci1kYXJrZXItMjA6ICN7Y29sb3IuYWRqdXN0KCRjb2xvci1wcmltYXJ5LCAkbGlnaHRuZXNzOiAtMTAlKX07XG5cdC0td3AtYWRtaW4tdGhlbWUtY29sb3ItZGFya2VyLTIwLS1yZ2I6ICN7ZnVuY3Rpb25zLmhleC10by1yZ2IoY29sb3IuYWRqdXN0KCRjb2xvci1wcmltYXJ5LCAkbGlnaHRuZXNzOiAtMTAlKSl9O1xuXG5cdC8vIEZvY3VzIHN0eWxlIHdpZHRoLlxuXHQvLyBBdm9pZCByb3VuZGluZyBpc3N1ZXMgYnkgc2hvd2luZyBhIHdob2xlIDJweCBmb3IgMXggc2NyZWVucywgYW5kIDEuNXB4IG9uIGhpZ2ggcmVzb2x1dGlvbiBzY3JlZW5zLlxuXHQtLXdwLWFkbWluLWJvcmRlci13aWR0aC1mb2N1czogMnB4O1xuXHRAbWVkaWEgKCAtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSkge1xuXHRcdC0td3AtYWRtaW4tYm9yZGVyLXdpZHRoLWZvY3VzOiAxLjVweDtcblx0fVxufVxuXG5AbWl4aW4gd29yZHByZXNzLWFkbWluLXNjaGVtZXMoKSB7XG5cdGJvZHkuYWRtaW4tY29sb3ItbGlnaHQge1xuXHRcdEBpbmNsdWRlIGFkbWluLXNjaGVtZSgjMDA4NWJhKTtcblx0fVxuXG5cdGJvZHkuYWRtaW4tY29sb3ItbW9kZXJuIHtcblx0XHRAaW5jbHVkZSBhZG1pbi1zY2hlbWUoIzM4NThlOSk7XG5cdH1cblxuXHRib2R5LmFkbWluLWNvbG9yLWJsdWUge1xuXHRcdEBpbmNsdWRlIGFkbWluLXNjaGVtZSgjMDk2NDg0KTtcblx0fVxuXG5cdGJvZHkuYWRtaW4tY29sb3ItY29mZmVlIHtcblx0XHRAaW5jbHVkZSBhZG1pbi1zY2hlbWUoIzQ2NDAzYyk7XG5cdH1cblxuXHRib2R5LmFkbWluLWNvbG9yLWVjdG9wbGFzbSB7XG5cdFx0QGluY2x1ZGUgYWRtaW4tc2NoZW1lKCM1MjNmNmQpO1xuXHR9XG5cblx0Ym9keS5hZG1pbi1jb2xvci1taWRuaWdodCB7XG5cdFx0QGluY2x1ZGUgYWRtaW4tc2NoZW1lKCNlMTRkNDMpO1xuXHR9XG5cblx0Ym9keS5hZG1pbi1jb2xvci1vY2VhbiB7XG5cdFx0QGluY2x1ZGUgYWRtaW4tc2NoZW1lKCM2MjdjODMpO1xuXHR9XG5cblx0Ym9keS5hZG1pbi1jb2xvci1zdW5yaXNlIHtcblx0XHRAaW5jbHVkZSBhZG1pbi1zY2hlbWUoI2RkODIzYik7XG5cdH1cbn1cblxuLy8gRGVwcmVjYXRlZCBmcm9tIFVJLCBrZXB0IGZvciBiYWNrLWNvbXBhdC5cbkBtaXhpbiBiYWNrZ3JvdW5kLWNvbG9ycy1kZXByZWNhdGVkKCkge1xuXHQuaGFzLXZlcnktbGlnaHQtZ3JheS1iYWNrZ3JvdW5kLWNvbG9yIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuXHR9XG5cblx0Lmhhcy12ZXJ5LWRhcmstZ3JheS1iYWNrZ3JvdW5kLWNvbG9yIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMTMxO1xuXHR9XG59XG5cbi8vIERlcHJlY2F0ZWQgZnJvbSBVSSwga2VwdCBmb3IgYmFjay1jb21wYXQuXG5AbWl4aW4gZm9yZWdyb3VuZC1jb2xvcnMtZGVwcmVjYXRlZCgpIHtcblx0Lmhhcy12ZXJ5LWxpZ2h0LWdyYXktY29sb3Ige1xuXHRcdGNvbG9yOiAjZWVlO1xuXHR9XG5cblx0Lmhhcy12ZXJ5LWRhcmstZ3JheS1jb2xvciB7XG5cdFx0Y29sb3I6ICMzMTMxMzE7XG5cdH1cbn1cblxuLy8gRGVwcmVjYXRlZCBmcm9tIFVJLCBrZXB0IGZvciBiYWNrLWNvbXBhdC5cbkBtaXhpbiBncmFkaWVudC1jb2xvcnMtZGVwcmVjYXRlZCgpIHtcblx0Ly8gT3VyIGNsYXNzZXMgdXNlcyB0aGUgc2FtZSB2YWx1ZXMgd2Ugc2V0IGZvciBncmFkaWVudCB2YWx1ZSBhdHRyaWJ1dGVzLlxuXG5cdC8qIHN0eWxlbGludC1kaXNhYmxlIEBzdHlsaXN0aWMvZnVuY3Rpb24tY29tbWEtc3BhY2UtYWZ0ZXIgLS0gV2UgY2FuIG5vdCB1c2Ugc3BhY2luZyBiZWNhdXNlIG9mIFdQIG11bHRpIHNpdGUga3NlcyBydWxlLiAqL1xuXHQuaGFzLXZpdmlkLWdyZWVuLWN5YW4tdG8tdml2aWQtY3lhbi1ibHVlLWdyYWRpZW50LWJhY2tncm91bmQge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSgwLDIwOCwxMzIsMSkgMCUscmdiYSg2LDE0NywyMjcsMSkgMTAwJSk7XG5cdH1cblxuXHQuaGFzLXB1cnBsZS1jcnVzaC1ncmFkaWVudC1iYWNrZ3JvdW5kIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYig1MiwyMjYsMjI4KSAwJSxyZ2IoNzEsMzMsMjUxKSA1MCUscmdiKDE3MSwyOSwyNTQpIDEwMCUpO1xuXHR9XG5cblx0Lmhhcy1oYXp5LWRhd24tZ3JhZGllbnQtYmFja2dyb3VuZCB7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZyxyZ2IoMjUwLDE3MiwxNjgpIDAlLHJnYigyMTgsMjA4LDIzNikgMTAwJSk7XG5cdH1cblxuXHQuaGFzLXN1YmR1ZWQtb2xpdmUtZ3JhZGllbnQtYmFja2dyb3VuZCB7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZyxyZ2IoMjUwLDI1MCwyMjUpIDAlLHJnYigxMDMsMTY2LDExMykgMTAwJSk7XG5cdH1cblxuXHQuaGFzLWF0b21pYy1jcmVhbS1ncmFkaWVudC1iYWNrZ3JvdW5kIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYigyNTMsMjE1LDE1NCkgMCUscmdiKDAsNzQsODkpIDEwMCUpO1xuXHR9XG5cblx0Lmhhcy1uaWdodHNoYWRlLWdyYWRpZW50LWJhY2tncm91bmQge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiKDUxLDksMTA0KSAwJSxyZ2IoNDksMjA1LDIwNykgMTAwJSk7XG5cdH1cblxuXHQuaGFzLW1pZG5pZ2h0LWdyYWRpZW50LWJhY2tncm91bmQge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiKDIsMywxMjkpIDAlLHJnYig0MCwxMTYsMjUyKSAxMDAlKTtcblx0fVxuXHQvKiBzdHlsZWxpbnQtZW5hYmxlIEBzdHlsaXN0aWMvZnVuY3Rpb24tY29tbWEtc3BhY2UtYWZ0ZXIgKi9cbn1cblxuQG1peGluIGN1c3RvbS1zY3JvbGxiYXJzLW9uLWhvdmVyKCRoYW5kbGUtY29sb3IsICRoYW5kbGUtY29sb3ItaG92ZXIpIHtcblxuXHQvLyBXZWJLaXRcblx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuXHRcdHdpZHRoOiAxMnB4O1xuXHRcdGhlaWdodDogMTJweDtcblx0fVxuXHQmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cblx0Jjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRoYW5kbGUtY29sb3I7XG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG5cdH1cblx0Jjpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsIC8vIFRoaXMgbmVlZHMgc3BlY2lmaWNpdHkuXG5cdCY6Zm9jdXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxuXHQmOmZvY3VzLXdpdGhpbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRoYW5kbGUtY29sb3ItaG92ZXI7XG5cdH1cblxuXHQvLyBGaXJlZm94IDEwOSsgYW5kIENocm9tZSAxMTErXG5cdHNjcm9sbGJhci13aWR0aDogdGhpbjtcblx0c2Nyb2xsYmFyLWd1dHRlcjogc3RhYmxlIGJvdGgtZWRnZXM7XG5cdHNjcm9sbGJhci1jb2xvcjogJGhhbmRsZS1jb2xvciB0cmFuc3BhcmVudDsgLy8gU3ludGF4LCBcImRhcmtcIiwgXCJsaWdodFwiLCBvciBcIiNoYW5kbGUtY29sb3IgI3RyYWNrLWNvbG9yXCJcblxuXHQmOmhvdmVyLFxuXHQmOmZvY3VzLFxuXHQmOmZvY3VzLXdpdGhpbiB7XG5cdFx0c2Nyb2xsYmFyLWNvbG9yOiAkaGFuZGxlLWNvbG9yLWhvdmVyIHRyYW5zcGFyZW50O1xuXHR9XG5cblx0Ly8gTmVlZGVkIHRvIGZpeCBhIFNhZmFyaSByZW5kZXJpbmcgaXNzdWUuXG5cdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cblx0Ly8gQWx3YXlzIHNob3cgc2Nyb2xsYmFyIG9uIE1vYmlsZSBkZXZpY2VzLlxuXHRAbWVkaWEgKGhvdmVyOiBub25lKSB7XG5cdFx0JiB7XG5cdFx0XHRzY3JvbGxiYXItY29sb3I6ICRoYW5kbGUtY29sb3ItaG92ZXIgdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1ibG9jay1vdXRsaW5lKCR3aWR0aFJhdGlvOiAxKSB7XG5cdG91dGxpbmUtY29sb3I6IHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKTtcblx0b3V0bGluZS1zdHlsZTogc29saWQ7XG5cdG91dGxpbmUtd2lkdGg6IGNhbGMoI3skd2lkdGhSYXRpb30gKiAodmFyKC0td3AtYWRtaW4tYm9yZGVyLXdpZHRoLWZvY3VzKSAvIHZhcigtLXdwLWJsb2NrLWVkaXRvci1pZnJhbWUtem9vbS1vdXQtc2NhbGUsIDEpKSk7XG5cdG91dGxpbmUtb2Zmc2V0OiBjYWxjKCN7JHdpZHRoUmF0aW99ICogKCgtMSAqIHZhcigtLXdwLWFkbWluLWJvcmRlci13aWR0aC1mb2N1cykgKSAvIHZhcigtLXdwLWJsb2NrLWVkaXRvci1pZnJhbWUtem9vbS1vdXQtc2NhbGUsIDEpKSk7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1ibG9jay1mb2N1cygkd2lkdGhSYXRpbzogMSkge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdEBpbmNsdWRlIHNlbGVjdGVkLWJsb2NrLW91dGxpbmUoJHdpZHRoUmF0aW8pO1xufVxuIiwiLyoqXG4gKiBCcmVha3BvaW50cyAmIE1lZGlhIFF1ZXJpZXNcbiAqL1xuXG4vLyBNb3N0IHVzZWQgYnJlYWtwb2ludHNcbiRicmVhay14aHVnZTogMTkyMHB4O1xuJGJyZWFrLWh1Z2U6IDE0NDBweDtcbiRicmVhay13aWRlOiAxMjgwcHg7XG4kYnJlYWsteGxhcmdlOiAxMDgwcHg7XG4kYnJlYWstbGFyZ2U6IDk2MHB4O1x0Ly8gYWRtaW4gc2lkZWJhciBhdXRvIGZvbGRzXG4kYnJlYWstbWVkaXVtOiA3ODJweDtcdC8vIGFkbWluYmFyIGdvZXMgYmlnXG4kYnJlYWstc21hbGw6IDYwMHB4O1xuJGJyZWFrLW1vYmlsZTogNDgwcHg7XG4kYnJlYWstem9vbWVkLWluOiAyODBweDtcblxuLy8gQWxsIG1lZGlhIHF1ZXJpZXMgY3VycmVudGx5IGluIFdvcmRQcmVzczpcbi8vXG4vLyBtaW4td2lkdGg6IDIwMDBweFxuLy8gbWluLXdpZHRoOiAxNjgwcHhcbi8vIG1pbi13aWR0aDogMTI1MHB4XG4vLyBtYXgtd2lkdGg6IDExMjBweCAqXG4vLyBtYXgtd2lkdGg6IDEwMDBweFxuLy8gbWluLXdpZHRoOiA3NjlweCBhbmQgbWF4LXdpZHRoOiAxMDAwcHhcbi8vIG1heC13aWR0aDogOTYwcHggKlxuLy8gbWF4LXdpZHRoOiA5MDBweFxuLy8gbWF4LXdpZHRoOiA4NTBweFxuLy8gbWluLXdpZHRoOiA4MDBweCBhbmQgbWF4LXdpZHRoOiAxNDk5cHhcbi8vIG1heC13aWR0aDogODAwcHhcbi8vIG1heC13aWR0aDogNzk5cHhcbi8vIG1heC13aWR0aDogNzgycHggKlxuLy8gbWF4LXdpZHRoOiA3NjhweFxuLy8gbWF4LXdpZHRoOiA2NDBweCAqXG4vLyBtYXgtd2lkdGg6IDYwMHB4ICpcbi8vIG1heC13aWR0aDogNTIwcHhcbi8vIG1heC13aWR0aDogNTAwcHhcbi8vIG1heC13aWR0aDogNDgwcHggKlxuLy8gbWF4LXdpZHRoOiA0MDBweCAqXG4vLyBtYXgtd2lkdGg6IDM4MHB4XG4vLyBtYXgtd2lkdGg6IDMyMHB4ICpcbi8vXG4vLyBUaG9zZSBtYXJrZWQgKiBzZWVtIHRvIGJlIG1vcmUgY29tbW9ubHkgdXNlZCB0aGFuIHRoZSBvdGhlcnMuXG4vLyBMZXQncyB0cnkgYW5kIHVzZSBhcyBmZXcgb2YgdGhlc2UgYXMgcG9zc2libGUsIGFuZCBiZSBtaW5kZnVsIGFib3V0IGFkZGluZyBuZXcgb25lcywgc28gd2UgZG9uJ3QgbWFrZSB0aGUgc2l0dWF0aW9uIHdvcnNlXG4iLCIvKipcbiogIENvbnZlcnRzIGEgaGV4IHZhbHVlIGludG8gdGhlIHJnYiBlcXVpdmFsZW50LlxuKlxuKiBAcGFyYW0ge3N0cmluZ30gaGV4IC0gdGhlIGhleGFkZWNpbWFsIHZhbHVlIHRvIGNvbnZlcnRcbiogQHJldHVybiB7c3RyaW5nfSBjb21tYSBzZXBhcmF0ZWQgcmdiIHZhbHVlc1xuKi9cblxuQHVzZSBcInNhc3M6Y29sb3JcIjtcbkB1c2UgXCJzYXNzOm1ldGFcIjtcblxuQGZ1bmN0aW9uIGhleC10by1yZ2IoJGhleCkge1xuXHQvKlxuXHQgKiBUT0RPOiBgY29sb3Iue3JlZHxncmVlbnxibHVlfWAgd2lsbCB0cmlnZ2VyIGEgZGVwcmVjYXRpb24gd2FybmluZyBpbiBEYXJ0IFNhc3MsXG5cdCAqIGJ1dCB0aGUgU2FzcyB1c2VkIGJ5IHRoZSBHdXRlbmJlcmcgcHJvamVjdCBkb2Vzbid0IHN1cHBvcnQgYGNvbG9yLmNoYW5uZWwoKWAgeWV0LFxuXHQgKiBzbyB3ZSBjYW4ndCBtaWdyYXRlIHRvIGl0IGF0IHRoaXMgdGltZS5cblx0ICogSW4gdGhlIGZ1dHVyZSwgYWZ0ZXIgdGhlIEd1dGVuYmVyZyBwcm9qZWN0IGhhcyBiZWVuIGZ1bGx5IG1pZ3JhdGVkIHRvIERhcnQgU2Fzcyxcblx0ICogUmVtb3ZlIHRoaXMgY29uZGl0aW9uYWwgc3RhdGVtZW50IGFuZCB1c2Ugb25seSBgY29sb3IuY2hhbm5lbCgpYC5cblx0ICovXG5cdEBpZiBtZXRhLmZ1bmN0aW9uLWV4aXN0cyhcImNoYW5uZWxcIiwgXCJjb2xvclwiKSB7XG5cdFx0QHJldHVybiBjb2xvci5jaGFubmVsKCRoZXgsIFwicmVkXCIpLCBjb2xvci5jaGFubmVsKCRoZXgsIFwiZ3JlZW5cIiksIGNvbG9yLmNoYW5uZWwoJGhleCwgXCJibHVlXCIpO1xuXHR9IEBlbHNlIHtcblx0XHRAcmV0dXJuIGNvbG9yLnJlZCgkaGV4KSwgY29sb3IuZ3JlZW4oJGhleCksIGNvbG9yLmJsdWUoJGhleCk7XG5cdH1cbn1cbiIsIi8qKlxuICogTG9uZyBjb250ZW50IGZhZGUgbWl4aW5cbiAqXG4gKiBDcmVhdGVzIGEgZmFkaW5nIG92ZXJsYXkgdG8gc2lnbmlmeSB0aGF0IHRoZSBjb250ZW50IGlzIGxvbmdlclxuICogdGhhbiB0aGUgc3BhY2UgYWxsb3dzLlxuICovXG5cbkBtaXhpbiBsb25nLWNvbnRlbnQtZmFkZSgkZGlyZWN0aW9uOiByaWdodCwgJHNpemU6IDIwJSwgJGNvbG9yOiAjZmZmLCAkZWRnZTogMCwgJHotaW5kZXg6IGZhbHNlKSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblxuXHRAaWYgJHotaW5kZXgge1xuXHRcdHotaW5kZXg6ICR6LWluZGV4O1xuXHR9XG5cblx0QGlmICRkaXJlY3Rpb24gPT0gXCJib3R0b21cIiB7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQsICRjb2xvciA5MCUpO1xuXHRcdGxlZnQ6ICRlZGdlO1xuXHRcdHJpZ2h0OiAkZWRnZTtcblx0XHR0b3A6ICRlZGdlO1xuXHRcdGJvdHRvbTogY2FsYygxMDAlIC0gJHNpemUpO1xuXHRcdHdpZHRoOiBhdXRvO1xuXHR9XG5cblx0QGlmICRkaXJlY3Rpb24gPT0gXCJ0b3BcIiB7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsICRjb2xvciA5MCUpO1xuXHRcdHRvcDogY2FsYygxMDAlIC0gJHNpemUpO1xuXHRcdGxlZnQ6ICRlZGdlO1xuXHRcdHJpZ2h0OiAkZWRnZTtcblx0XHRib3R0b206ICRlZGdlO1xuXHRcdHdpZHRoOiBhdXRvO1xuXHR9XG5cblx0QGlmICRkaXJlY3Rpb24gPT0gXCJsZWZ0XCIge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB0cmFuc3BhcmVudCwgJGNvbG9yIDkwJSk7XG5cdFx0dG9wOiAkZWRnZTtcblx0XHRsZWZ0OiAkZWRnZTtcblx0XHRib3R0b206ICRlZGdlO1xuXHRcdHJpZ2h0OiBhdXRvO1xuXHRcdHdpZHRoOiAkc2l6ZTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdH1cblxuXHRAaWYgJGRpcmVjdGlvbiA9PSBcInJpZ2h0XCIge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQsICRjb2xvciA5MCUpO1xuXHRcdHRvcDogJGVkZ2U7XG5cdFx0Ym90dG9tOiAkZWRnZTtcblx0XHRyaWdodDogJGVkZ2U7XG5cdFx0bGVmdDogYXV0bztcblx0XHR3aWR0aDogJHNpemU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG59XG4iLCJAdXNlIFwiQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy92YXJpYWJsZXNcIjtcbkB1c2UgXCJAd29yZHByZXNzL2Jhc2Utc3R5bGVzL21peGluc1wiO1xuXG4uYm9vdC1uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50cy1pdGVtIHtcblx0Y29sb3I6IHZhcigtLXdwZHMtY29sb3ItZmctaW50ZXJhY3RpdmUtbmV1dHJhbCwgIzFlMWUxZSk7XG5cdHBhZGRpbmctaW5saW5lOiB2YXJpYWJsZXMuJGdyaWQtdW5pdC0wNTtcblx0cGFkZGluZy1ibG9jazogMDtcblx0bWFyZ2luLWlubGluZTogdmFyaWFibGVzLiRncmlkLXVuaXQtMTU7XG5cdG1hcmdpbi1ibG9jay1lbmQ6IHZhcmlhYmxlcy4kZ3JpZC11bml0LTA1O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gdmFyaWFibGVzLiRncmlkLXVuaXQtMTUgKiAyKTtcblx0Ym9yZGVyOiBub25lO1xuXHRtaW4taGVpZ2h0OiB2YXJpYWJsZXMuJGdyaWQtdW5pdC00MDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0QGluY2x1ZGUgbWl4aW5zLmJvZHktbWVkaXVtKCk7XG5cblx0LmJvb3QtZHJvcGRvd24taXRlbV9fY2hpbGRyZW4gJiB7XG5cdFx0bWluLWhlaWdodDogdmFyaWFibGVzLiRncmlkLXVuaXQtMzA7XG5cdH1cblxuXHQvLyBSb3VuZGVkIGZvY3VzIHJpbmdcblx0Ym9yZGVyLXJhZGl1czogdmFyKC0td3Bkcy1ib3JkZXItcmFkaXVzLXNtYWxsLCAycHgpO1xuXG5cdCYuYWN0aXZlLFxuXHQmOmhvdmVyLFxuXHQmOmZvY3VzLFxuXHQmW2FyaWEtY3VycmVudD1cInRydWVcIl0ge1xuXHRcdGNvbG9yOiB2YXIoLS13cGRzLWNvbG9yLWZnLWludGVyYWN0aXZlLWJyYW5kLWFjdGl2ZSwgIzAwNzNhYSk7XG5cdH1cblxuXHQmLmFjdGl2ZSB7XG5cdFx0Zm9udC13ZWlnaHQ6IHZhcmlhYmxlcy4kZm9udC13ZWlnaHQtbWVkaXVtO1xuXHR9XG5cblx0c3ZnOmxhc3QtY2hpbGQge1xuXHRcdHBhZGRpbmc6IHZhcmlhYmxlcy4kZ3JpZC11bml0LTA1O1xuXHR9XG5cblx0JlthcmlhLWN1cnJlbnQ9XCJ0cnVlXCJdIHtcblx0XHRjb2xvcjogdmFyKC0td3Bkcy1jb2xvci1mZy1pbnRlcmFjdGl2ZS1icmFuZC1hY3RpdmUsICMwMDczYWEpO1xuXHRcdGZvbnQtd2VpZ2h0OiB2YXJpYWJsZXMuJGZvbnQtd2VpZ2h0LW1lZGl1bTtcblx0fVxuXG5cdC8vIE1ha2Ugc3VyZSB0aGUgZm9jdXMgc3R5bGUgaXMgZHJhd24gb24gdG9wIG9mIHRoZSBjdXJyZW50IGl0ZW0gYmFja2dyb3VuZC5cblx0Jjpmb2N1cy12aXNpYmxlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG5cdH1cblxuXHQmLndpdGgtc3VmZml4IHtcblx0XHRwYWRkaW5nLXJpZ2h0OiB2YXJpYWJsZXMuJGdyaWQtdW5pdC0yMDtcblx0fVxufVxuIl19 */`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css4));
function NavigationItem({
  className,
  icon,
  shouldShowPlaceholder = true,
  children,
  to
}) {
  const isExternal = !String(
    new URL(to, window.location.origin)
  ).startsWith(window.location.origin);
  const content = /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_components5.__experimentalHStack, { justify: "flex-start", spacing: 2, style: { flexGrow: "1" }, children: [
    wrapIcon(icon, shouldShowPlaceholder),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_components5.FlexBlock, { children })
  ] });
  if (isExternal) {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      import_components5.__experimentalItem,
      {
        as: "a",
        href: to,
        className: clsx_default("boot-navigation-item", className),
        children: content
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    router_link_item_default,
    {
      to,
      className: clsx_default("boot-navigation-item", className),
      children: content
    }
  );
}

// packages/boot/build-module/components/navigation/drilldown-item/index.js
var import_components6 = __toESM(require_components());
var import_i18n3 = __toESM(require_i18n());
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
function DrilldownItem({
  className,
  id,
  icon,
  shouldShowPlaceholder = true,
  children,
  onNavigate
}) {
  const handleClick = (e) => {
    e.preventDefault();
    onNavigate({ id, direction: "forward" });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    import_components6.__experimentalItem,
    {
      className: clsx_default("boot-navigation-item", className),
      onClick: handleClick,
      children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
        import_components6.__experimentalHStack,
        {
          justify: "flex-start",
          spacing: 2,
          style: { flexGrow: "1" },
          children: [
            wrapIcon(icon, shouldShowPlaceholder),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_components6.FlexBlock, { children }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_components6.Icon, { icon: (0, import_i18n3.isRTL)() ? chevron_left_small_default : chevron_right_small_default })
          ]
        }
      )
    }
  );
}

// packages/boot/build-module/components/navigation/dropdown-item/index.js
var import_components7 = __toESM(require_components());
var import_compose = __toESM(require_compose());
var import_data4 = __toESM(require_data());
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var css5 = `/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
.boot-dropdown-item__children {
  display: flex;
  flex-direction: column;
  padding: 2px;
  margin-block-start: -2px;
  margin-block-end: 2px;
  margin-inline-start: 30px;
  overflow: hidden;
}

.boot-dropdown-item__chevron.is-up {
  transform: rotate(180deg);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnL2d1dGVuYmVyZy9wYWNrYWdlcy9ib290L3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24taXRlbSIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvYmFzZS1zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvYmFzZS1zdHlsZXMvX2NvbG9ycy5zY3NzIiwic3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQ0FBO0FBQUE7QUFBQTtBRFVBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQTZCQTtBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFnQkE7QUFBQTtBQUFBO0FBd0JBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQWVBO0FBQUE7QUFBQTtBQW1CQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBRWhLQTtFQUNDO0VBQ0E7RUFPQSxTQURzQztFQUV0QztFQUNBLGtCQUhzQztFQUl0QyxxQkFDQztFQUVEOzs7QUFHRDtFQUNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTQ1NTIFZhcmlhYmxlcy5cbiAqXG4gKiBQbGVhc2UgdXNlIHZhcmlhYmxlcyBmcm9tIHRoaXMgc2hlZXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGFjcm9zcyB0aGUgVUkuXG4gKiBEb24ndCBhZGQgdG8gdGhpcyBzaGVldCB1bmxlc3MgeW91J3JlIHByZXR0eSBzdXJlIHRoZSB2YWx1ZSB3aWxsIGJlIHJldXNlZCBpbiBtYW55IHBsYWNlcy5cbiAqIEZvciBleGFtcGxlLCBkb24ndCBhZGQgcnVsZXMgdG8gdGhpcyBzaGVldCB0aGF0IGFmZmVjdCBibG9jayB2aXN1YWxzLiBJdCdzIHB1cmVseSBmb3IgVUkuXG4gKi9cblxuQHVzZSBcIi4vY29sb3JzXCI7XG5cbi8qKlxuICogRm9udHMgJiBiYXNpYyB2YXJpYWJsZXMuXG4gKi9cblxuJGRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyAvLyBUb2RvOiBkZXByZWNhdGUgaW4gZmF2b3Igb2YgJGZhbWlseSB2YXJpYWJsZXNcbiRkZWZhdWx0LWxpbmUtaGVpZ2h0OiAxLjQ7IC8vIFRvZG86IGRlcHJlY2F0ZSBpbiBmYXZvciBvZiAkbGluZS1oZWlnaHQgdG9rZW5zXG5cbi8qKlxuICogVHlwb2dyYXBoeVxuICovXG5cbi8vIFNpemVzXG4kZm9udC1zaXplLXgtc21hbGw6IDExcHg7XG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xuJGZvbnQtc2l6ZS1tZWRpdW06IDEzcHg7XG4kZm9udC1zaXplLWxhcmdlOiAxNXB4O1xuJGZvbnQtc2l6ZS14LWxhcmdlOiAyMHB4O1xuJGZvbnQtc2l6ZS0yeC1sYXJnZTogMzJweDtcblxuLy8gTGluZSBoZWlnaHRzXG4kZm9udC1saW5lLWhlaWdodC14LXNtYWxsOiAxNnB4O1xuJGZvbnQtbGluZS1oZWlnaHQtc21hbGw6IDIwcHg7XG4kZm9udC1saW5lLWhlaWdodC1tZWRpdW06IDI0cHg7XG4kZm9udC1saW5lLWhlaWdodC1sYXJnZTogMjhweDtcbiRmb250LWxpbmUtaGVpZ2h0LXgtbGFyZ2U6IDMycHg7XG4kZm9udC1saW5lLWhlaWdodC0yeC1sYXJnZTogNDBweDtcblxuLy8gV2VpZ2h0c1xuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcbiRmb250LXdlaWdodC1tZWRpdW06IDQ5OTsgLy8gZW5zdXJlcyBmYWxsYmFjayB0byA0MDAgKGluc3RlYWQgb2YgNjAwKVxuXG4vLyBGYW1pbGllc1xuJGZvbnQtZmFtaWx5LWhlYWRpbmdzOiAtYXBwbGUtc3lzdGVtLCBcInN5c3RlbS11aVwiLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYm9keTogLWFwcGxlLXN5c3RlbSwgXCJzeXN0ZW0tdWlcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBDb25zb2xhcywgbW9uYWNvLCBtb25vc3BhY2U7XG5cbi8qKlxuICogR3JpZCBTeXN0ZW0uXG4gKiBodHRwczovL21ha2Uud29yZHByZXNzLm9yZy9kZXNpZ24vMjAxOS8xMC8zMS9wcm9wb3NhbC1hLWNvbnNpc3RlbnQtc3BhY2luZy1zeXN0ZW0tZm9yLXdvcmRwcmVzcy9cbiAqL1xuXG4kZ3JpZC11bml0OiA4cHg7XG4kZ3JpZC11bml0LTA1OiAwLjUgKiAkZ3JpZC11bml0O1x0Ly8gNHB4XG4kZ3JpZC11bml0LTEwOiAxICogJGdyaWQtdW5pdDtcdFx0Ly8gOHB4XG4kZ3JpZC11bml0LTE1OiAxLjUgKiAkZ3JpZC11bml0O1x0Ly8gMTJweFxuJGdyaWQtdW5pdC0yMDogMiAqICRncmlkLXVuaXQ7XHRcdC8vIDE2cHhcbiRncmlkLXVuaXQtMzA6IDMgKiAkZ3JpZC11bml0O1x0XHQvLyAyNHB4XG4kZ3JpZC11bml0LTQwOiA0ICogJGdyaWQtdW5pdDtcdFx0Ly8gMzJweFxuJGdyaWQtdW5pdC01MDogNSAqICRncmlkLXVuaXQ7XHRcdC8vIDQwcHhcbiRncmlkLXVuaXQtNjA6IDYgKiAkZ3JpZC11bml0O1x0XHQvLyA0OHB4XG4kZ3JpZC11bml0LTcwOiA3ICogJGdyaWQtdW5pdDtcdFx0Ly8gNTZweFxuJGdyaWQtdW5pdC04MDogOCAqICRncmlkLXVuaXQ7XHRcdC8vIDY0cHhcblxuLyoqXG4gKiBSYWRpdXMgc2NhbGUuXG4gKi9cblxuJHJhZGl1cy14LXNtYWxsOiAxcHg7ICAgLy8gQXBwbGllZCB0byBlbGVtZW50cyBsaWtlIGJ1dHRvbnMgbmVzdGVkIHdpdGhpbiBwcmltaXRpdmVzIGxpa2UgaW5wdXRzLlxuJHJhZGl1cy1zbWFsbDogMnB4OyAgICAgLy8gQXBwbGllZCB0byBtb3N0IHByaW1pdGl2ZXMuXG4kcmFkaXVzLW1lZGl1bTogNHB4OyAgICAvLyBBcHBsaWVkIHRvIGNvbnRhaW5lcnMgd2l0aCBzbWFsbGVyIHBhZGRpbmcuXG4kcmFkaXVzLWxhcmdlOiA4cHg7ICAgICAvLyBBcHBsaWVkIHRvIGNvbnRhaW5lcnMgd2l0aCBsYXJnZXIgcGFkZGluZy5cbiRyYWRpdXMtZnVsbDogOTk5OXB4OyAgIC8vIEZvciBwaWxscy5cbiRyYWRpdXMtcm91bmQ6IDUwJTsgICAgIC8vIEZvciBjaXJjbGVzIGFuZCBvdmFscy5cblxuLyoqXG4gKiBFbGV2YXRpb24gc2NhbGUuXG4gKi9cblxuLy8gRm9yIHNlY3Rpb25zIGFuZCBjb250YWluZXJzIHRoYXQgZ3JvdXAgcmVsYXRlZCBjb250ZW50IGFuZCBjb250cm9scywgd2hpY2ggbWF5IG92ZXJsYXAgb3RoZXIgY29udGVudC4gRXhhbXBsZTogUHJldmlldyBGcmFtZS5cbiRlbGV2YXRpb24teC1zbWFsbDogMCAxcHggMXB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMyksIDAgMXB4IDJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpLCAwIDNweCAzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKSwgMCA0cHggNHB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMSk7XG5cbi8vIEZvciBjb21wb25lbnRzIHRoYXQgcHJvdmlkZSBjb250ZXh0dWFsIGZlZWRiYWNrIHdpdGhvdXQgYmVpbmcgaW50cnVzaXZlLiBHZW5lcmFsbHkgbm9uLWludGVycnVwdGl2ZS4gRXhhbXBsZTogVG9vbHRpcHMsIFNuYWNrYmFyLlxuJGVsZXZhdGlvbi1zbWFsbDogMCAxcHggMnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNSksIDAgMnB4IDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDQpLCAwIDZweCA2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAzKSwgMCA4cHggOHB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMik7XG5cbi8vIEZvciBjb21wb25lbnRzIHRoYXQgb2ZmZXIgYWRkaXRpb25hbCBhY3Rpb25zLiBFeGFtcGxlOiBNZW51cywgQ29tbWFuZCBQYWxldHRlXG4kZWxldmF0aW9uLW1lZGl1bTogMCAycHggM3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNSksIDAgNHB4IDVweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDQpLCAwIDEycHggMTJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDMpLCAwIDE2cHggMTZweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IGNvbmZpcm0gZGVjaXNpb25zIG9yIGhhbmRsZSBuZWNlc3NhcnkgaW50ZXJydXB0aW9ucy4gRXhhbXBsZTogTW9kYWxzLlxuJGVsZXZhdGlvbi1sYXJnZTogMCA1cHggMTVweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDgpLCAwIDE1cHggMjdweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDcpLCAwIDMwcHggMzZweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDQpLCAwIDUwcHggNDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vKipcbiAqIERpbWVuc2lvbnMuXG4gKi9cblxuJGljb24tc2l6ZTogMjRweDtcbiRidXR0b24tc2l6ZTogMzZweDtcbiRidXR0b24tc2l6ZS1uZXh0LWRlZmF1bHQtNDBweDogNDBweDsgLy8gdHJhbnNpdGlvbmFyeSB2YXJpYWJsZSBmb3IgbmV4dCBkZWZhdWx0IGJ1dHRvbiBzaXplXG4kYnV0dG9uLXNpemUtc21hbGw6IDI0cHg7XG4kYnV0dG9uLXNpemUtY29tcGFjdDogMzJweDtcbiRoZWFkZXItaGVpZ2h0OiA2NHB4O1xuJHBhbmVsLWhlYWRlci1oZWlnaHQ6ICRncmlkLXVuaXQtNjA7XG4kbmF2LXNpZGViYXItd2lkdGg6IDMwMHB4O1xuJGFkbWluLWJhci1oZWlnaHQ6IDMycHg7XG4kYWRtaW4tYmFyLWhlaWdodC1iaWc6IDQ2cHg7XG4kYWRtaW4tc2lkZWJhci13aWR0aDogMTYwcHg7XG4kYWRtaW4tc2lkZWJhci13aWR0aC1iaWc6IDE5MHB4O1xuJGFkbWluLXNpZGViYXItd2lkdGgtY29sbGFwc2VkOiAzNnB4O1xuJG1vZGFsLW1pbi13aWR0aDogMzUwcHg7XG4kbW9kYWwtd2lkdGgtc21hbGw6IDM4NHB4O1xuJG1vZGFsLXdpZHRoLW1lZGl1bTogNTEycHg7XG4kbW9kYWwtd2lkdGgtbGFyZ2U6IDg0MHB4O1xuJHNwaW5uZXItc2l6ZTogMTZweDtcbiRjYW52YXMtcGFkZGluZzogJGdyaWQtdW5pdC0yMDtcblxuLyoqXG4gKiBNb2JpbGUgc3BlY2lmaWMgc3R5bGVzXG4gKi9cbiRtb2JpbGUtdGV4dC1taW4tZm9udC1zaXplOiAxNnB4OyAvLyBBbnkgZm9udCBzaXplIGJlbG93IDE2cHggd2lsbCBjYXVzZSBNb2JpbGUgU2FmYXJpIHRvIFwiem9vbSBpblwiLlxuXG4vKipcbiAqIEVkaXRvciBzdHlsZXMuXG4gKi9cblxuJHNpZGViYXItd2lkdGg6IDI4MHB4O1xuJGNvbnRlbnQtd2lkdGg6IDg0MHB4O1xuJHdpZGUtY29udGVudC13aWR0aDogMTEwMHB4O1xuJHdpZGdldC1hcmVhLXdpZHRoOiA3MDBweDtcbiRzZWNvbmRhcnktc2lkZWJhci13aWR0aDogMzUwcHg7XG4kZWRpdG9yLWZvbnQtc2l6ZTogMTZweDtcbiRkZWZhdWx0LWJsb2NrLW1hcmdpbjogMjhweDsgLy8gVGhpcyB2YWx1ZSBwcm92aWRlcyBhIGNvbnNpc3RlbnQsIGNvbnRpZ3VvdXMgc3BhY2luZyBiZXR3ZWVuIGJsb2Nrcy5cbiR0ZXh0LWVkaXRvci1mb250LXNpemU6IDE1cHg7XG4kZWRpdG9yLWxpbmUtaGVpZ2h0OiAxLjg7XG4kZWRpdG9yLWh0bWwtZm9udDogJGZvbnQtZmFtaWx5LW1vbm87XG5cbi8qKlxuICogQmxvY2sgJiBFZGl0b3IgVUkuXG4gKi9cblxuJGJsb2NrLXRvb2xiYXItaGVpZ2h0OiAkZ3JpZC11bml0LTYwO1xuJGJvcmRlci13aWR0aDogMXB4O1xuJGJvcmRlci13aWR0aC1mb2N1cy1mYWxsYmFjazogMnB4OyAvLyBUaGlzIGV4aXN0cyBhcyBhIGZhbGxiYWNrLCBhbmQgaXMgaWRlYWxseSBvdmVycmlkZGVuIGJ5IHZhcigtLXdwLWFkbWluLWJvcmRlci13aWR0aC1mb2N1cykgdW5sZXNzIGluIHNvbWUgU0FTUyBtYXRoIGNhc2VzLlxuJGJvcmRlci13aWR0aC10YWI6IDEuNXB4O1xuJGhlbHB0ZXh0LWZvbnQtc2l6ZTogMTJweDtcbiRyYWRpby1pbnB1dC1zaXplOiAxNnB4O1xuJHJhZGlvLWlucHV0LXNpemUtc206IDI0cHg7IC8vIFdpZHRoICYgaGVpZ2h0IGZvciBzbWFsbCB2aWV3cG9ydHMuXG5cbi8vIERlcHJlY2F0ZWQsIHBsZWFzZSBhdm9pZCB1c2luZyB0aGVzZS5cbiRibG9jay1wYWRkaW5nOiAxNHB4OyAvLyBVc2VkIHRvIGRlZmluZSBzcGFjZSBiZXR3ZWVuIGJsb2NrIGZvb3RwcmludCBhbmQgc3Vycm91bmRpbmcgYm9yZGVycy5cbiRyYWRpdXMtYmxvY2stdWk6ICRyYWRpdXMtc21hbGw7XG4kc2hhZG93LXBvcG92ZXI6ICRlbGV2YXRpb24teC1zbWFsbDtcbiRzaGFkb3ctbW9kYWw6ICRlbGV2YXRpb24tbGFyZ2U7XG4kZGVmYXVsdC1mb250LXNpemU6ICRmb250LXNpemUtbWVkaXVtO1xuXG4vKipcbiAqIEJsb2NrIHBhZGRpbmdzLlxuICovXG5cbi8vIFBhZGRpbmcgZm9yIGJsb2NrcyB3aXRoIGEgYmFja2dyb3VuZCBjb2xvciAoZS5nLiBwYXJhZ3JhcGggb3IgZ3JvdXApLlxuJGJsb2NrLWJnLXBhZGRpbmctLXY6IDEuMjVlbTtcbiRibG9jay1iZy1wYWRkaW5nLS1oOiAyLjM3NWVtO1xuXG5cbi8qKlxuICogUmVhY3QgTmF0aXZlIHNwZWNpZmljLlxuICogVGhlc2UgdmFyaWFibGVzIGRvIG5vdCBhcHBlYXIgdG8gYmUgdXNlZCBhbnl3aGVyZSBlbHNlLlxuICovXG5cbi8vIERpbWVuc2lvbnMuXG4kbW9iaWxlLWhlYWRlci10b29sYmFyLWhlaWdodDogNDRweDtcbiRtb2JpbGUtaGVhZGVyLXRvb2xiYXItZXhwYW5kZWQtaGVpZ2h0OiA1MnB4O1xuJG1vYmlsZS1mbG9hdGluZy10b29sYmFyLWhlaWdodDogNDRweDtcbiRtb2JpbGUtZmxvYXRpbmctdG9vbGJhci1tYXJnaW46IDhweDtcbiRtb2JpbGUtY29sb3Itc3dhdGNoOiA0OHB4O1xuXG4vLyBCbG9jayBVSS5cbiRtb2JpbGUtYmxvY2stdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kZGltbWVkLW9wYWNpdHk6IDE7XG4kYmxvY2stZWRnZS10by1jb250ZW50OiAxNnB4O1xuJHNvbGlkLWJvcmRlci1zcGFjZTogMTJweDtcbiRkYXNoZWQtYm9yZGVyLXNwYWNlOiA2cHg7XG4kYmxvY2stc2VsZWN0ZWQtbWFyZ2luOiAzcHg7XG4kYmxvY2stc2VsZWN0ZWQtYm9yZGVyLXdpZHRoOiAxcHg7XG4kYmxvY2stc2VsZWN0ZWQtcGFkZGluZzogMDtcbiRibG9jay1zZWxlY3RlZC1jaGlsZC1tYXJnaW46IDVweDtcbiRibG9jay1zZWxlY3RlZC10by1jb250ZW50OiAkYmxvY2stZWRnZS10by1jb250ZW50IC0gJGJsb2NrLXNlbGVjdGVkLW1hcmdpbiAtICRibG9jay1zZWxlY3RlZC1ib3JkZXItd2lkdGg7XG4iLCIvKipcbiAqIENvbG9yc1xuICovXG5cbi8vIFdvcmRQcmVzcyBncmF5cy5cbiRibGFjazogIzAwMDtcdFx0XHQvLyBVc2Ugb25seSB3aGVuIHlvdSB0cnVseSBuZWVkIHB1cmUgYmxhY2suIEZvciBVSSwgdXNlICRncmF5LTkwMC5cbiRncmF5LTkwMDogIzFlMWUxZTtcbiRncmF5LTgwMDogIzJmMmYyZjtcbiRncmF5LTcwMDogIzc1NzU3NTtcdFx0Ly8gTWVldHMgNC42OjEgKDQuNToxIGlzIG1pbmltdW0pIHRleHQgY29udHJhc3QgYWdhaW5zdCB3aGl0ZS5cbiRncmF5LTYwMDogIzk0OTQ5NDtcdFx0Ly8gTWVldHMgMzoxIFVJIG9yIGxhcmdlIHRleHQgY29udHJhc3QgYWdhaW5zdCB3aGl0ZS5cbiRncmF5LTQwMDogI2NjYztcbiRncmF5LTMwMDogI2RkZDtcdFx0Ly8gVXNlZCBmb3IgbW9zdCBib3JkZXJzLlxuJGdyYXktMjAwOiAjZTBlMGUwO1x0XHQvLyBVc2VkIHNwYXJpbmdseSBmb3IgbGlnaHQgYm9yZGVycy5cbiRncmF5LTEwMDogI2YwZjBmMDtcdFx0Ly8gVXNlZCBmb3IgbGlnaHQgZ3JheSBiYWNrZ3JvdW5kcy5cbiR3aGl0ZTogI2ZmZjtcblxuLy8gT3BhY2l0aWVzICYgYWRkaXRpb25hbCBjb2xvcnMuXG4kZGFyay1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCRncmF5LTkwMCwgMC42Mik7XG4kbWVkaXVtLWdyYXktcGxhY2Vob2xkZXI6IHJnYmEoJGdyYXktOTAwLCAwLjU1KTtcbiRsaWdodC1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCR3aGl0ZSwgMC42NSk7XG5cbi8vIEFsZXJ0IGNvbG9ycy5cbiRhbGVydC15ZWxsb3c6ICNmMGI4NDk7XG4kYWxlcnQtcmVkOiAjY2MxODE4O1xuJGFsZXJ0LWdyZWVuOiAjNGFiODY2O1xuXG4vLyBEZXByZWNhdGVkLCBwbGVhc2UgYXZvaWQgdXNpbmcgdGhlc2UuXG4kZGFyay10aGVtZS1mb2N1czogJHdoaXRlO1x0Ly8gRm9jdXMgY29sb3Igd2hlbiB0aGUgdGhlbWUgaXMgZGFyay5cbiIsIkB1c2UgXCJAd29yZHByZXNzL2Jhc2Utc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uYm9vdC1kcm9wZG93bi1pdGVtX19jaGlsZHJlbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0Ly8gSW4gb3JkZXIgdG8gYXZvaWQgdGhlIGZvY3VzIHJpbmcgb2YgZWFjaCBsaXN0IGl0ZW0gZnJvbSBiZWluZyBjdXQgb2ZmLFxuXHQvLyB3ZSBhZGQgcGFkZGluZyBhcm91bmQgdGhlIG1lbnUgaXRlbXMuXG5cdC8vIEF0IHRoZSBzYW1lIHRpbWUsIHdlIHVzZSB0aGUgc2FtZSB2YWx1ZSB0byB0d2VhayBtYXJnaW5zIHNvIHRoYXRcblx0Ly8gdGhlIGl0ZW1zIHN0aWxsIHJldGFpbiB0aGUgc2FtZSBwb3NpdGlvbiBhbmQgZm9vdHByaW50LlxuXHQkcGFkZGluZy10by1hdm9pZC1jdXR0aW5nLWZvY3VzLXJpbmc6IDJweDtcblx0cGFkZGluZzogJHBhZGRpbmctdG8tYXZvaWQtY3V0dGluZy1mb2N1cy1yaW5nO1xuXHRtYXJnaW4tYmxvY2stc3RhcnQ6IC0kcGFkZGluZy10by1hdm9pZC1jdXR0aW5nLWZvY3VzLXJpbmc7XG5cdG1hcmdpbi1ibG9jay1lbmQ6ICRwYWRkaW5nLXRvLWF2b2lkLWN1dHRpbmctZm9jdXMtcmluZztcblx0bWFyZ2luLWlubGluZS1zdGFydDpcblx0XHR2YXJpYWJsZXMuJGdyaWQtdW5pdC00MCAtXG5cdFx0JHBhZGRpbmctdG8tYXZvaWQtY3V0dGluZy1mb2N1cy1yaW5nO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9vdC1kcm9wZG93bi1pdGVtX19jaGV2cm9uLmlzLXVwIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbiJdfQ== */`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css5));
var ANIMATION_DURATION = 0.2;
function DropdownItem({
  className,
  id,
  icon,
  children,
  isExpanded,
  onToggle
}) {
  const menuItems = (0, import_data4.useSelect)(
    (select) => (
      // @ts-ignore
      select(STORE_NAME).getMenuItems()
    ),
    []
  );
  const items = menuItems.filter((item) => item.parent === id);
  const disableMotion = (0, import_compose.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "boot-dropdown-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      import_components7.__experimentalItem,
      {
        className: clsx_default("boot-navigation-item", className),
        onClick: (e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggle();
        },
        onMouseDown: (e) => e.preventDefault(),
        children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
          import_components7.__experimentalHStack,
          {
            justify: "flex-start",
            spacing: 2,
            style: { flexGrow: "1" },
            children: [
              wrapIcon(icon, false),
              /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_components7.FlexBlock, { children }),
              /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
                import_components7.Icon,
                {
                  icon: chevron_down_small_default,
                  className: clsx_default("boot-dropdown-item__chevron", {
                    "is-up": isExpanded
                  })
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_components7.__unstableAnimatePresence, { initial: false, children: isExpanded && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      import_components7.__unstableMotion.div,
      {
        initial: { height: 0 },
        animate: { height: "auto" },
        exit: { height: 0 },
        transition: {
          type: "tween",
          duration: disableMotion ? 0 : ANIMATION_DURATION,
          ease: "easeOut"
        },
        className: "boot-dropdown-item__children",
        children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          NavigationItem,
          {
            to: item.to,
            shouldShowPlaceholder: false,
            children: item.label
          },
          index
        ))
      }
    ) })
  ] });
}

// packages/boot/build-module/components/navigation/navigation-screen/index.js
var import_components8 = __toESM(require_components());
var import_i18n4 = __toESM(require_i18n());
var import_compose2 = __toESM(require_compose());
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var css6 = `/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
.boot-navigation-screen {
  padding-block-end: 4px;
}

.boot-navigation-screen .components-text {
  color: var(--wpds-color-fg-content-neutral, #1e1e1e);
}

.boot-navigation-screen__title-icon {
  position: sticky;
  top: 0;
  padding: 12px 16px 8px 16px;
}

.boot-navigation-screen__title {
  flex-grow: 1;
  overflow-wrap: break-word;
}
.boot-navigation-screen__title.boot-navigation-screen__title, .boot-navigation-screen__title.boot-navigation-screen__title .boot-navigation-screen__title {
  line-height: 32px;
  color: var(--wpds-color-fg-content-neutral, #1e1e1e);
}

.boot-navigation-screen__actions {
  display: flex;
  flex-shrink: 0;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnL2d1dGVuYmVyZy9wYWNrYWdlcy9ib290L3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi1zY3JlZW4iLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL19jb2xvcnMuc2NzcyIsInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUNBQTtBQUFBO0FBQUE7QURVQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUE2QkE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQXdCQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBQUE7QUFtQkE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUVoS0E7RUFFQyxtQkZnRGM7OztBRTdDZjtFQUNDOzs7QUFHRDtFQUNDO0VBQ0E7RUFDQSxTQUNDOzs7QUFJRjtFQUNDO0VBQ0E7O0FBRUE7RUFFQyxhRlN5QjtFRVJ6Qjs7O0FBSUY7RUFDQztFQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTQ1NTIFZhcmlhYmxlcy5cbiAqXG4gKiBQbGVhc2UgdXNlIHZhcmlhYmxlcyBmcm9tIHRoaXMgc2hlZXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGFjcm9zcyB0aGUgVUkuXG4gKiBEb24ndCBhZGQgdG8gdGhpcyBzaGVldCB1bmxlc3MgeW91J3JlIHByZXR0eSBzdXJlIHRoZSB2YWx1ZSB3aWxsIGJlIHJldXNlZCBpbiBtYW55IHBsYWNlcy5cbiAqIEZvciBleGFtcGxlLCBkb24ndCBhZGQgcnVsZXMgdG8gdGhpcyBzaGVldCB0aGF0IGFmZmVjdCBibG9jayB2aXN1YWxzLiBJdCdzIHB1cmVseSBmb3IgVUkuXG4gKi9cblxuQHVzZSBcIi4vY29sb3JzXCI7XG5cbi8qKlxuICogRm9udHMgJiBiYXNpYyB2YXJpYWJsZXMuXG4gKi9cblxuJGRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyAvLyBUb2RvOiBkZXByZWNhdGUgaW4gZmF2b3Igb2YgJGZhbWlseSB2YXJpYWJsZXNcbiRkZWZhdWx0LWxpbmUtaGVpZ2h0OiAxLjQ7IC8vIFRvZG86IGRlcHJlY2F0ZSBpbiBmYXZvciBvZiAkbGluZS1oZWlnaHQgdG9rZW5zXG5cbi8qKlxuICogVHlwb2dyYXBoeVxuICovXG5cbi8vIFNpemVzXG4kZm9udC1zaXplLXgtc21hbGw6IDExcHg7XG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xuJGZvbnQtc2l6ZS1tZWRpdW06IDEzcHg7XG4kZm9udC1zaXplLWxhcmdlOiAxNXB4O1xuJGZvbnQtc2l6ZS14LWxhcmdlOiAyMHB4O1xuJGZvbnQtc2l6ZS0yeC1sYXJnZTogMzJweDtcblxuLy8gTGluZSBoZWlnaHRzXG4kZm9udC1saW5lLWhlaWdodC14LXNtYWxsOiAxNnB4O1xuJGZvbnQtbGluZS1oZWlnaHQtc21hbGw6IDIwcHg7XG4kZm9udC1saW5lLWhlaWdodC1tZWRpdW06IDI0cHg7XG4kZm9udC1saW5lLWhlaWdodC1sYXJnZTogMjhweDtcbiRmb250LWxpbmUtaGVpZ2h0LXgtbGFyZ2U6IDMycHg7XG4kZm9udC1saW5lLWhlaWdodC0yeC1sYXJnZTogNDBweDtcblxuLy8gV2VpZ2h0c1xuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcbiRmb250LXdlaWdodC1tZWRpdW06IDQ5OTsgLy8gZW5zdXJlcyBmYWxsYmFjayB0byA0MDAgKGluc3RlYWQgb2YgNjAwKVxuXG4vLyBGYW1pbGllc1xuJGZvbnQtZmFtaWx5LWhlYWRpbmdzOiAtYXBwbGUtc3lzdGVtLCBcInN5c3RlbS11aVwiLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYm9keTogLWFwcGxlLXN5c3RlbSwgXCJzeXN0ZW0tdWlcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBDb25zb2xhcywgbW9uYWNvLCBtb25vc3BhY2U7XG5cbi8qKlxuICogR3JpZCBTeXN0ZW0uXG4gKiBodHRwczovL21ha2Uud29yZHByZXNzLm9yZy9kZXNpZ24vMjAxOS8xMC8zMS9wcm9wb3NhbC1hLWNvbnNpc3RlbnQtc3BhY2luZy1zeXN0ZW0tZm9yLXdvcmRwcmVzcy9cbiAqL1xuXG4kZ3JpZC11bml0OiA4cHg7XG4kZ3JpZC11bml0LTA1OiAwLjUgKiAkZ3JpZC11bml0O1x0Ly8gNHB4XG4kZ3JpZC11bml0LTEwOiAxICogJGdyaWQtdW5pdDtcdFx0Ly8gOHB4XG4kZ3JpZC11bml0LTE1OiAxLjUgKiAkZ3JpZC11bml0O1x0Ly8gMTJweFxuJGdyaWQtdW5pdC0yMDogMiAqICRncmlkLXVuaXQ7XHRcdC8vIDE2cHhcbiRncmlkLXVuaXQtMzA6IDMgKiAkZ3JpZC11bml0O1x0XHQvLyAyNHB4XG4kZ3JpZC11bml0LTQwOiA0ICogJGdyaWQtdW5pdDtcdFx0Ly8gMzJweFxuJGdyaWQtdW5pdC01MDogNSAqICRncmlkLXVuaXQ7XHRcdC8vIDQwcHhcbiRncmlkLXVuaXQtNjA6IDYgKiAkZ3JpZC11bml0O1x0XHQvLyA0OHB4XG4kZ3JpZC11bml0LTcwOiA3ICogJGdyaWQtdW5pdDtcdFx0Ly8gNTZweFxuJGdyaWQtdW5pdC04MDogOCAqICRncmlkLXVuaXQ7XHRcdC8vIDY0cHhcblxuLyoqXG4gKiBSYWRpdXMgc2NhbGUuXG4gKi9cblxuJHJhZGl1cy14LXNtYWxsOiAxcHg7ICAgLy8gQXBwbGllZCB0byBlbGVtZW50cyBsaWtlIGJ1dHRvbnMgbmVzdGVkIHdpdGhpbiBwcmltaXRpdmVzIGxpa2UgaW5wdXRzLlxuJHJhZGl1cy1zbWFsbDogMnB4OyAgICAgLy8gQXBwbGllZCB0byBtb3N0IHByaW1pdGl2ZXMuXG4kcmFkaXVzLW1lZGl1bTogNHB4OyAgICAvLyBBcHBsaWVkIHRvIGNvbnRhaW5lcnMgd2l0aCBzbWFsbGVyIHBhZGRpbmcuXG4kcmFkaXVzLWxhcmdlOiA4cHg7ICAgICAvLyBBcHBsaWVkIHRvIGNvbnRhaW5lcnMgd2l0aCBsYXJnZXIgcGFkZGluZy5cbiRyYWRpdXMtZnVsbDogOTk5OXB4OyAgIC8vIEZvciBwaWxscy5cbiRyYWRpdXMtcm91bmQ6IDUwJTsgICAgIC8vIEZvciBjaXJjbGVzIGFuZCBvdmFscy5cblxuLyoqXG4gKiBFbGV2YXRpb24gc2NhbGUuXG4gKi9cblxuLy8gRm9yIHNlY3Rpb25zIGFuZCBjb250YWluZXJzIHRoYXQgZ3JvdXAgcmVsYXRlZCBjb250ZW50IGFuZCBjb250cm9scywgd2hpY2ggbWF5IG92ZXJsYXAgb3RoZXIgY29udGVudC4gRXhhbXBsZTogUHJldmlldyBGcmFtZS5cbiRlbGV2YXRpb24teC1zbWFsbDogMCAxcHggMXB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMyksIDAgMXB4IDJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpLCAwIDNweCAzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKSwgMCA0cHggNHB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMSk7XG5cbi8vIEZvciBjb21wb25lbnRzIHRoYXQgcHJvdmlkZSBjb250ZXh0dWFsIGZlZWRiYWNrIHdpdGhvdXQgYmVpbmcgaW50cnVzaXZlLiBHZW5lcmFsbHkgbm9uLWludGVycnVwdGl2ZS4gRXhhbXBsZTogVG9vbHRpcHMsIFNuYWNrYmFyLlxuJGVsZXZhdGlvbi1zbWFsbDogMCAxcHggMnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNSksIDAgMnB4IDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDQpLCAwIDZweCA2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAzKSwgMCA4cHggOHB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMik7XG5cbi8vIEZvciBjb21wb25lbnRzIHRoYXQgb2ZmZXIgYWRkaXRpb25hbCBhY3Rpb25zLiBFeGFtcGxlOiBNZW51cywgQ29tbWFuZCBQYWxldHRlXG4kZWxldmF0aW9uLW1lZGl1bTogMCAycHggM3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNSksIDAgNHB4IDVweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDQpLCAwIDEycHggMTJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDMpLCAwIDE2cHggMTZweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IGNvbmZpcm0gZGVjaXNpb25zIG9yIGhhbmRsZSBuZWNlc3NhcnkgaW50ZXJydXB0aW9ucy4gRXhhbXBsZTogTW9kYWxzLlxuJGVsZXZhdGlvbi1sYXJnZTogMCA1cHggMTVweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDgpLCAwIDE1cHggMjdweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDcpLCAwIDMwcHggMzZweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDQpLCAwIDUwcHggNDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vKipcbiAqIERpbWVuc2lvbnMuXG4gKi9cblxuJGljb24tc2l6ZTogMjRweDtcbiRidXR0b24tc2l6ZTogMzZweDtcbiRidXR0b24tc2l6ZS1uZXh0LWRlZmF1bHQtNDBweDogNDBweDsgLy8gdHJhbnNpdGlvbmFyeSB2YXJpYWJsZSBmb3IgbmV4dCBkZWZhdWx0IGJ1dHRvbiBzaXplXG4kYnV0dG9uLXNpemUtc21hbGw6IDI0cHg7XG4kYnV0dG9uLXNpemUtY29tcGFjdDogMzJweDtcbiRoZWFkZXItaGVpZ2h0OiA2NHB4O1xuJHBhbmVsLWhlYWRlci1oZWlnaHQ6ICRncmlkLXVuaXQtNjA7XG4kbmF2LXNpZGViYXItd2lkdGg6IDMwMHB4O1xuJGFkbWluLWJhci1oZWlnaHQ6IDMycHg7XG4kYWRtaW4tYmFyLWhlaWdodC1iaWc6IDQ2cHg7XG4kYWRtaW4tc2lkZWJhci13aWR0aDogMTYwcHg7XG4kYWRtaW4tc2lkZWJhci13aWR0aC1iaWc6IDE5MHB4O1xuJGFkbWluLXNpZGViYXItd2lkdGgtY29sbGFwc2VkOiAzNnB4O1xuJG1vZGFsLW1pbi13aWR0aDogMzUwcHg7XG4kbW9kYWwtd2lkdGgtc21hbGw6IDM4NHB4O1xuJG1vZGFsLXdpZHRoLW1lZGl1bTogNTEycHg7XG4kbW9kYWwtd2lkdGgtbGFyZ2U6IDg0MHB4O1xuJHNwaW5uZXItc2l6ZTogMTZweDtcbiRjYW52YXMtcGFkZGluZzogJGdyaWQtdW5pdC0yMDtcblxuLyoqXG4gKiBNb2JpbGUgc3BlY2lmaWMgc3R5bGVzXG4gKi9cbiRtb2JpbGUtdGV4dC1taW4tZm9udC1zaXplOiAxNnB4OyAvLyBBbnkgZm9udCBzaXplIGJlbG93IDE2cHggd2lsbCBjYXVzZSBNb2JpbGUgU2FmYXJpIHRvIFwiem9vbSBpblwiLlxuXG4vKipcbiAqIEVkaXRvciBzdHlsZXMuXG4gKi9cblxuJHNpZGViYXItd2lkdGg6IDI4MHB4O1xuJGNvbnRlbnQtd2lkdGg6IDg0MHB4O1xuJHdpZGUtY29udGVudC13aWR0aDogMTEwMHB4O1xuJHdpZGdldC1hcmVhLXdpZHRoOiA3MDBweDtcbiRzZWNvbmRhcnktc2lkZWJhci13aWR0aDogMzUwcHg7XG4kZWRpdG9yLWZvbnQtc2l6ZTogMTZweDtcbiRkZWZhdWx0LWJsb2NrLW1hcmdpbjogMjhweDsgLy8gVGhpcyB2YWx1ZSBwcm92aWRlcyBhIGNvbnNpc3RlbnQsIGNvbnRpZ3VvdXMgc3BhY2luZyBiZXR3ZWVuIGJsb2Nrcy5cbiR0ZXh0LWVkaXRvci1mb250LXNpemU6IDE1cHg7XG4kZWRpdG9yLWxpbmUtaGVpZ2h0OiAxLjg7XG4kZWRpdG9yLWh0bWwtZm9udDogJGZvbnQtZmFtaWx5LW1vbm87XG5cbi8qKlxuICogQmxvY2sgJiBFZGl0b3IgVUkuXG4gKi9cblxuJGJsb2NrLXRvb2xiYXItaGVpZ2h0OiAkZ3JpZC11bml0LTYwO1xuJGJvcmRlci13aWR0aDogMXB4O1xuJGJvcmRlci13aWR0aC1mb2N1cy1mYWxsYmFjazogMnB4OyAvLyBUaGlzIGV4aXN0cyBhcyBhIGZhbGxiYWNrLCBhbmQgaXMgaWRlYWxseSBvdmVycmlkZGVuIGJ5IHZhcigtLXdwLWFkbWluLWJvcmRlci13aWR0aC1mb2N1cykgdW5sZXNzIGluIHNvbWUgU0FTUyBtYXRoIGNhc2VzLlxuJGJvcmRlci13aWR0aC10YWI6IDEuNXB4O1xuJGhlbHB0ZXh0LWZvbnQtc2l6ZTogMTJweDtcbiRyYWRpby1pbnB1dC1zaXplOiAxNnB4O1xuJHJhZGlvLWlucHV0LXNpemUtc206IDI0cHg7IC8vIFdpZHRoICYgaGVpZ2h0IGZvciBzbWFsbCB2aWV3cG9ydHMuXG5cbi8vIERlcHJlY2F0ZWQsIHBsZWFzZSBhdm9pZCB1c2luZyB0aGVzZS5cbiRibG9jay1wYWRkaW5nOiAxNHB4OyAvLyBVc2VkIHRvIGRlZmluZSBzcGFjZSBiZXR3ZWVuIGJsb2NrIGZvb3RwcmludCBhbmQgc3Vycm91bmRpbmcgYm9yZGVycy5cbiRyYWRpdXMtYmxvY2stdWk6ICRyYWRpdXMtc21hbGw7XG4kc2hhZG93LXBvcG92ZXI6ICRlbGV2YXRpb24teC1zbWFsbDtcbiRzaGFkb3ctbW9kYWw6ICRlbGV2YXRpb24tbGFyZ2U7XG4kZGVmYXVsdC1mb250LXNpemU6ICRmb250LXNpemUtbWVkaXVtO1xuXG4vKipcbiAqIEJsb2NrIHBhZGRpbmdzLlxuICovXG5cbi8vIFBhZGRpbmcgZm9yIGJsb2NrcyB3aXRoIGEgYmFja2dyb3VuZCBjb2xvciAoZS5nLiBwYXJhZ3JhcGggb3IgZ3JvdXApLlxuJGJsb2NrLWJnLXBhZGRpbmctLXY6IDEuMjVlbTtcbiRibG9jay1iZy1wYWRkaW5nLS1oOiAyLjM3NWVtO1xuXG5cbi8qKlxuICogUmVhY3QgTmF0aXZlIHNwZWNpZmljLlxuICogVGhlc2UgdmFyaWFibGVzIGRvIG5vdCBhcHBlYXIgdG8gYmUgdXNlZCBhbnl3aGVyZSBlbHNlLlxuICovXG5cbi8vIERpbWVuc2lvbnMuXG4kbW9iaWxlLWhlYWRlci10b29sYmFyLWhlaWdodDogNDRweDtcbiRtb2JpbGUtaGVhZGVyLXRvb2xiYXItZXhwYW5kZWQtaGVpZ2h0OiA1MnB4O1xuJG1vYmlsZS1mbG9hdGluZy10b29sYmFyLWhlaWdodDogNDRweDtcbiRtb2JpbGUtZmxvYXRpbmctdG9vbGJhci1tYXJnaW46IDhweDtcbiRtb2JpbGUtY29sb3Itc3dhdGNoOiA0OHB4O1xuXG4vLyBCbG9jayBVSS5cbiRtb2JpbGUtYmxvY2stdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kZGltbWVkLW9wYWNpdHk6IDE7XG4kYmxvY2stZWRnZS10by1jb250ZW50OiAxNnB4O1xuJHNvbGlkLWJvcmRlci1zcGFjZTogMTJweDtcbiRkYXNoZWQtYm9yZGVyLXNwYWNlOiA2cHg7XG4kYmxvY2stc2VsZWN0ZWQtbWFyZ2luOiAzcHg7XG4kYmxvY2stc2VsZWN0ZWQtYm9yZGVyLXdpZHRoOiAxcHg7XG4kYmxvY2stc2VsZWN0ZWQtcGFkZGluZzogMDtcbiRibG9jay1zZWxlY3RlZC1jaGlsZC1tYXJnaW46IDVweDtcbiRibG9jay1zZWxlY3RlZC10by1jb250ZW50OiAkYmxvY2stZWRnZS10by1jb250ZW50IC0gJGJsb2NrLXNlbGVjdGVkLW1hcmdpbiAtICRibG9jay1zZWxlY3RlZC1ib3JkZXItd2lkdGg7XG4iLCIvKipcbiAqIENvbG9yc1xuICovXG5cbi8vIFdvcmRQcmVzcyBncmF5cy5cbiRibGFjazogIzAwMDtcdFx0XHQvLyBVc2Ugb25seSB3aGVuIHlvdSB0cnVseSBuZWVkIHB1cmUgYmxhY2suIEZvciBVSSwgdXNlICRncmF5LTkwMC5cbiRncmF5LTkwMDogIzFlMWUxZTtcbiRncmF5LTgwMDogIzJmMmYyZjtcbiRncmF5LTcwMDogIzc1NzU3NTtcdFx0Ly8gTWVldHMgNC42OjEgKDQuNToxIGlzIG1pbmltdW0pIHRleHQgY29udHJhc3QgYWdhaW5zdCB3aGl0ZS5cbiRncmF5LTYwMDogIzk0OTQ5NDtcdFx0Ly8gTWVldHMgMzoxIFVJIG9yIGxhcmdlIHRleHQgY29udHJhc3QgYWdhaW5zdCB3aGl0ZS5cbiRncmF5LTQwMDogI2NjYztcbiRncmF5LTMwMDogI2RkZDtcdFx0Ly8gVXNlZCBmb3IgbW9zdCBib3JkZXJzLlxuJGdyYXktMjAwOiAjZTBlMGUwO1x0XHQvLyBVc2VkIHNwYXJpbmdseSBmb3IgbGlnaHQgYm9yZGVycy5cbiRncmF5LTEwMDogI2YwZjBmMDtcdFx0Ly8gVXNlZCBmb3IgbGlnaHQgZ3JheSBiYWNrZ3JvdW5kcy5cbiR3aGl0ZTogI2ZmZjtcblxuLy8gT3BhY2l0aWVzICYgYWRkaXRpb25hbCBjb2xvcnMuXG4kZGFyay1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCRncmF5LTkwMCwgMC42Mik7XG4kbWVkaXVtLWdyYXktcGxhY2Vob2xkZXI6IHJnYmEoJGdyYXktOTAwLCAwLjU1KTtcbiRsaWdodC1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCR3aGl0ZSwgMC42NSk7XG5cbi8vIEFsZXJ0IGNvbG9ycy5cbiRhbGVydC15ZWxsb3c6ICNmMGI4NDk7XG4kYWxlcnQtcmVkOiAjY2MxODE4O1xuJGFsZXJ0LWdyZWVuOiAjNGFiODY2O1xuXG4vLyBEZXByZWNhdGVkLCBwbGVhc2UgYXZvaWQgdXNpbmcgdGhlc2UuXG4kZGFyay10aGVtZS1mb2N1czogJHdoaXRlO1x0Ly8gRm9jdXMgY29sb3Igd2hlbiB0aGUgdGhlbWUgaXMgZGFyay5cbiIsIkB1c2UgXCJAd29yZHByZXNzL2Jhc2Utc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uYm9vdC1uYXZpZ2F0aW9uLXNjcmVlbiB7XG5cdC8vIEF2b2lkIGN1dHRpbmcgb2ZmIGZvY3VzIHJpbmcgb2YgdGhlIGxhc3QgbWVudSBpdGVtXG5cdHBhZGRpbmctYmxvY2stZW5kOiB2YXJpYWJsZXMuJGdyaWQtdW5pdC0wNTtcbn1cblxuLmJvb3QtbmF2aWdhdGlvbi1zY3JlZW4gLmNvbXBvbmVudHMtdGV4dCB7XG5cdGNvbG9yOiB2YXIoLS13cGRzLWNvbG9yLWZnLWNvbnRlbnQtbmV1dHJhbCwgIzFlMWUxZSk7XG59XG5cbi5ib290LW5hdmlnYXRpb24tc2NyZWVuX190aXRsZS1pY29uIHtcblx0cG9zaXRpb246IHN0aWNreTtcblx0dG9wOiAwO1xuXHRwYWRkaW5nOlxuXHRcdHZhcmlhYmxlcy4kZ3JpZC11bml0LTE1IHZhcmlhYmxlcy4kZ3JpZC11bml0LTIwXG5cdFx0dmFyaWFibGVzLiRncmlkLXVuaXQtMTAgdmFyaWFibGVzLiRncmlkLXVuaXQtMjA7XG59XG5cbi5ib290LW5hdmlnYXRpb24tc2NyZWVuX190aXRsZSB7XG5cdGZsZXgtZ3JvdzogMTtcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblxuXHQmI3smfSxcblx0JiN7Jn0gLmJvb3QtbmF2aWdhdGlvbi1zY3JlZW5fX3RpdGxlIHtcblx0XHRsaW5lLWhlaWdodDogdmFyaWFibGVzLiRmb250LWxpbmUtaGVpZ2h0LXgtbGFyZ2U7XG5cdFx0Y29sb3I6IHZhcigtLXdwZHMtY29sb3ItZmctY29udGVudC1uZXV0cmFsLCAjMWUxZTFlKTtcblx0fVxufVxuXG4uYm9vdC1uYXZpZ2F0aW9uLXNjcmVlbl9fYWN0aW9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtc2hyaW5rOiAwO1xufVxuIl19 */`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css6));
var ANIMATION_DURATION2 = 0.3;
var slideVariants = {
  initial: (direction) => ({
    x: direction === "forward" ? 100 : -100,
    opacity: 0
  }),
  animate: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction === "forward" ? 100 : -100,
    opacity: 0
  })
};
function NavigationScreen({
  isRoot,
  title,
  actions,
  content,
  description,
  animationDirection,
  backMenuItem,
  backButtonRef,
  navigationKey,
  onNavigate
}) {
  const icon = (0, import_i18n4.isRTL)() ? chevron_right_default : chevron_left_default;
  const disableMotion = (0, import_compose2.useReducedMotion)();
  const handleBackClick = (e) => {
    e.preventDefault();
    onNavigate({ id: backMenuItem, direction: "backward" });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "div",
    {
      className: "boot-navigation-screen",
      style: {
        overflow: "hidden",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_components8.__unstableAnimatePresence, { initial: false, children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
        import_components8.__unstableMotion.div,
        {
          custom: animationDirection,
          variants: slideVariants,
          initial: "initial",
          animate: "animate",
          exit: "exit",
          transition: {
            type: "tween",
            duration: disableMotion ? 0 : ANIMATION_DURATION2,
            ease: [0.33, 0, 0, 1]
          },
          style: {
            width: "100%",
            gridColumn: "1",
            gridRow: "1"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
              import_components8.__experimentalHStack,
              {
                spacing: 2,
                className: "boot-navigation-screen__title-icon",
                children: [
                  !isRoot && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
                    import_components8.Button,
                    {
                      ref: backButtonRef,
                      icon,
                      onClick: handleBackClick,
                      label: (0, import_i18n4.__)("Back"),
                      size: "small",
                      variant: "tertiary"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
                    import_components8.__experimentalHeading,
                    {
                      className: "boot-navigation-screen__title",
                      level: 1,
                      size: "15px",
                      children: title
                    }
                  ),
                  actions && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "boot-navigation-screen__actions", children: actions })
                ]
              }
            ),
            description && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "boot-navigation-screen__description", children: description }),
            content
          ]
        },
        navigationKey
      ) })
    }
  );
}

// packages/boot/build-module/components/navigation/use-sidebar-parent.js
var import_element5 = __toESM(require_element());
var import_data5 = __toESM(require_data());

// packages/boot/build-module/components/navigation/path-matching.js
var isValidParentPath = (currentPath, menuPath) => {
  if (!menuPath || menuPath === currentPath) {
    return false;
  }
  const normalizePath = (path) => {
    const normalized = path.startsWith("/") ? path : "/" + path;
    return normalized.endsWith("/") && normalized.length > 1 ? normalized.slice(0, -1) : normalized;
  };
  const normalizedCurrent = normalizePath(currentPath);
  const normalizedMenu = normalizePath(menuPath);
  return normalizedCurrent.startsWith(normalizedMenu) && (normalizedCurrent[normalizedMenu.length] === "/" || normalizedMenu === "/");
};
var findClosestMenuItem = (currentPath, menuItems) => {
  const exactMatch = menuItems.find((item) => item.to === currentPath);
  if (exactMatch) {
    return exactMatch;
  }
  let bestMatch = null;
  let bestPathLength = 0;
  for (const item of menuItems) {
    if (!item.to) {
      continue;
    }
    if (isValidParentPath(currentPath, item.to)) {
      if (item.to.length > bestPathLength) {
        bestMatch = item;
        bestPathLength = item.to.length;
      }
    }
  }
  return bestMatch;
};
var findDrilldownParent = (id, menuItems) => {
  if (!id) {
    return void 0;
  }
  const currentItem = menuItems.find((item) => item.id === id);
  if (!currentItem) {
    return void 0;
  }
  if (currentItem.parent) {
    const parentItem = menuItems.find(
      (item) => item.id === currentItem.parent
    );
    if (parentItem?.parent_type === "drilldown") {
      return parentItem.id;
    }
    if (parentItem) {
      return findDrilldownParent(parentItem.id, menuItems);
    }
  }
  return void 0;
};
var findDropdownParent = (id, menuItems) => {
  if (!id) {
    return void 0;
  }
  const currentItem = menuItems.find((item) => item.id === id);
  if (!currentItem) {
    return void 0;
  }
  if (currentItem.parent) {
    const parentItem = menuItems.find(
      (item) => item.id === currentItem.parent
    );
    if (parentItem?.parent_type === "dropdown") {
      return parentItem.id;
    }
  }
  return void 0;
};

// packages/boot/build-module/components/navigation/use-sidebar-parent.js
function useSidebarParent() {
  const matches = useMatches();
  const router = useRouter();
  const menuItems = (0, import_data5.useSelect)(
    (select) => (
      // @ts-ignore
      select(STORE_NAME).getMenuItems()
    ),
    []
  );
  const currentPath = matches[matches.length - 1].pathname.slice(
    router.options.basepath?.length ?? 0
  );
  const currentMenuItem = findClosestMenuItem(currentPath, menuItems);
  const [parentId, setParentId] = (0, import_element5.useState)(
    findDrilldownParent(currentMenuItem?.id, menuItems)
  );
  const [parentDropdownId, setParentDropdownId] = (0, import_element5.useState)(findDropdownParent(currentMenuItem?.id, menuItems));
  (0, import_element5.useEffect)(() => {
    const matchedMenuItem = findClosestMenuItem(currentPath, menuItems);
    const updatedParentId = findDrilldownParent(
      matchedMenuItem?.id,
      menuItems
    );
    const updatedDropdownParent = findDropdownParent(
      matchedMenuItem?.id,
      menuItems
    );
    setParentId(updatedParentId);
    setParentDropdownId(updatedDropdownParent);
  }, [currentPath, menuItems]);
  return [
    parentId,
    setParentId,
    parentDropdownId,
    setParentDropdownId
  ];
}

// packages/boot/build-module/components/navigation/index.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
function Navigation() {
  const backButtonRef = (0, import_element6.useRef)(null);
  const [animationDirection, setAnimationDirection] = (0, import_element6.useState)(null);
  const [parentId, setParentId, parentDropdownId, setParentDropdownId] = useSidebarParent();
  const menuItems = (0, import_data6.useSelect)(
    (select) => (
      // @ts-ignore
      select(STORE_NAME).getMenuItems()
    ),
    []
  );
  const parent = (0, import_element6.useMemo)(
    () => menuItems.find((item) => item.id === parentId),
    [menuItems, parentId]
  );
  const navigationKey = parent ? `drilldown-${parent.id}` : "root";
  const handleNavigate = ({
    id,
    direction
  }) => {
    setAnimationDirection(direction);
    setParentId(id);
  };
  const handleDropdownToggle = (dropdownId) => {
    setParentDropdownId(
      parentDropdownId === dropdownId ? void 0 : dropdownId
    );
  };
  const items = (0, import_element6.useMemo)(
    () => menuItems.filter((item) => item.parent === parentId),
    [menuItems, parentId]
  );
  const hasRealIcons = items.some((item) => !!item.icon);
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    NavigationScreen,
    {
      isRoot: !parent,
      title: parent ? parent.label : "",
      backMenuItem: parent?.parent,
      backButtonRef,
      animationDirection: animationDirection || void 0,
      navigationKey,
      onNavigate: handleNavigate,
      content: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_jsx_runtime33.Fragment, { children: items.map((item) => {
        if (item.parent_type === "dropdown") {
          return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            DropdownItem,
            {
              id: item.id,
              className: "boot-navigation-item",
              icon: item.icon,
              shouldShowPlaceholder: hasRealIcons,
              isExpanded: parentDropdownId === item.id,
              onToggle: () => handleDropdownToggle(item.id),
              children: item.label
            },
            item.id
          );
        }
        if (item.parent_type === "drilldown") {
          return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            DrilldownItem,
            {
              id: item.id,
              icon: item.icon,
              shouldShowPlaceholder: hasRealIcons,
              onNavigate: handleNavigate,
              children: item.label
            },
            item.id
          );
        }
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          NavigationItem,
          {
            to: item.to,
            icon: item.icon,
            shouldShowPlaceholder: hasRealIcons,
            children: item.label
          },
          item.id
        );
      }) })
    }
  );
}
var navigation_default = Navigation;

// packages/boot/build-module/components/sidebar/index.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var css7 = `/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
.boot-sidebar__scrollable {
  overflow: auto;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.boot-sidebar__content {
  flex-grow: 1;
  contain: content;
  position: relative;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnL2d1dGVuYmVyZy9wYWNrYWdlcy9ib290L3NyYy9jb21wb25lbnRzL3NpZGViYXIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL19jb2xvcnMuc2NzcyIsInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUNBQTtBQUFBO0FBQUE7QURVQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUE2QkE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQXdCQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBQUE7QUFtQkE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUVoS0E7RUFDQztFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHRDtFQUNDO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU0NTUyBWYXJpYWJsZXMuXG4gKlxuICogUGxlYXNlIHVzZSB2YXJpYWJsZXMgZnJvbSB0aGlzIHNoZWV0IHRvIGVuc3VyZSBjb25zaXN0ZW5jeSBhY3Jvc3MgdGhlIFVJLlxuICogRG9uJ3QgYWRkIHRvIHRoaXMgc2hlZXQgdW5sZXNzIHlvdSdyZSBwcmV0dHkgc3VyZSB0aGUgdmFsdWUgd2lsbCBiZSByZXVzZWQgaW4gbWFueSBwbGFjZXMuXG4gKiBGb3IgZXhhbXBsZSwgZG9uJ3QgYWRkIHJ1bGVzIHRvIHRoaXMgc2hlZXQgdGhhdCBhZmZlY3QgYmxvY2sgdmlzdWFscy4gSXQncyBwdXJlbHkgZm9yIFVJLlxuICovXG5cbkB1c2UgXCIuL2NvbG9yc1wiO1xuXG4vKipcbiAqIEZvbnRzICYgYmFzaWMgdmFyaWFibGVzLlxuICovXG5cbiRkZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgLy8gVG9kbzogZGVwcmVjYXRlIGluIGZhdm9yIG9mICRmYW1pbHkgdmFyaWFibGVzXG4kZGVmYXVsdC1saW5lLWhlaWdodDogMS40OyAvLyBUb2RvOiBkZXByZWNhdGUgaW4gZmF2b3Igb2YgJGxpbmUtaGVpZ2h0IHRva2Vuc1xuXG4vKipcbiAqIFR5cG9ncmFwaHlcbiAqL1xuXG4vLyBTaXplc1xuJGZvbnQtc2l6ZS14LXNtYWxsOiAxMXB4O1xuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtbWVkaXVtOiAxM3B4O1xuJGZvbnQtc2l6ZS1sYXJnZTogMTVweDtcbiRmb250LXNpemUteC1sYXJnZTogMjBweDtcbiRmb250LXNpemUtMngtbGFyZ2U6IDMycHg7XG5cbi8vIExpbmUgaGVpZ2h0c1xuJGZvbnQtbGluZS1oZWlnaHQteC1zbWFsbDogMTZweDtcbiRmb250LWxpbmUtaGVpZ2h0LXNtYWxsOiAyMHB4O1xuJGZvbnQtbGluZS1oZWlnaHQtbWVkaXVtOiAyNHB4O1xuJGZvbnQtbGluZS1oZWlnaHQtbGFyZ2U6IDI4cHg7XG4kZm9udC1saW5lLWhlaWdodC14LWxhcmdlOiAzMnB4O1xuJGZvbnQtbGluZS1oZWlnaHQtMngtbGFyZ2U6IDQwcHg7XG5cbi8vIFdlaWdodHNcbiRmb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XG4kZm9udC13ZWlnaHQtbWVkaXVtOiA0OTk7IC8vIGVuc3VyZXMgZmFsbGJhY2sgdG8gNDAwIChpbnN0ZWFkIG9mIDYwMClcblxuLy8gRmFtaWxpZXNcbiRmb250LWZhbWlseS1oZWFkaW5nczogLWFwcGxlLXN5c3RlbSwgXCJzeXN0ZW0tdWlcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHk6IC1hcHBsZS1zeXN0ZW0sIFwic3lzdGVtLXVpXCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgQ29uc29sYXMsIG1vbmFjbywgbW9ub3NwYWNlO1xuXG4vKipcbiAqIEdyaWQgU3lzdGVtLlxuICogaHR0cHM6Ly9tYWtlLndvcmRwcmVzcy5vcmcvZGVzaWduLzIwMTkvMTAvMzEvcHJvcG9zYWwtYS1jb25zaXN0ZW50LXNwYWNpbmctc3lzdGVtLWZvci13b3JkcHJlc3MvXG4gKi9cblxuJGdyaWQtdW5pdDogOHB4O1xuJGdyaWQtdW5pdC0wNTogMC41ICogJGdyaWQtdW5pdDtcdC8vIDRweFxuJGdyaWQtdW5pdC0xMDogMSAqICRncmlkLXVuaXQ7XHRcdC8vIDhweFxuJGdyaWQtdW5pdC0xNTogMS41ICogJGdyaWQtdW5pdDtcdC8vIDEycHhcbiRncmlkLXVuaXQtMjA6IDIgKiAkZ3JpZC11bml0O1x0XHQvLyAxNnB4XG4kZ3JpZC11bml0LTMwOiAzICogJGdyaWQtdW5pdDtcdFx0Ly8gMjRweFxuJGdyaWQtdW5pdC00MDogNCAqICRncmlkLXVuaXQ7XHRcdC8vIDMycHhcbiRncmlkLXVuaXQtNTA6IDUgKiAkZ3JpZC11bml0O1x0XHQvLyA0MHB4XG4kZ3JpZC11bml0LTYwOiA2ICogJGdyaWQtdW5pdDtcdFx0Ly8gNDhweFxuJGdyaWQtdW5pdC03MDogNyAqICRncmlkLXVuaXQ7XHRcdC8vIDU2cHhcbiRncmlkLXVuaXQtODA6IDggKiAkZ3JpZC11bml0O1x0XHQvLyA2NHB4XG5cbi8qKlxuICogUmFkaXVzIHNjYWxlLlxuICovXG5cbiRyYWRpdXMteC1zbWFsbDogMXB4OyAgIC8vIEFwcGxpZWQgdG8gZWxlbWVudHMgbGlrZSBidXR0b25zIG5lc3RlZCB3aXRoaW4gcHJpbWl0aXZlcyBsaWtlIGlucHV0cy5cbiRyYWRpdXMtc21hbGw6IDJweDsgICAgIC8vIEFwcGxpZWQgdG8gbW9zdCBwcmltaXRpdmVzLlxuJHJhZGl1cy1tZWRpdW06IDRweDsgICAgLy8gQXBwbGllZCB0byBjb250YWluZXJzIHdpdGggc21hbGxlciBwYWRkaW5nLlxuJHJhZGl1cy1sYXJnZTogOHB4OyAgICAgLy8gQXBwbGllZCB0byBjb250YWluZXJzIHdpdGggbGFyZ2VyIHBhZGRpbmcuXG4kcmFkaXVzLWZ1bGw6IDk5OTlweDsgICAvLyBGb3IgcGlsbHMuXG4kcmFkaXVzLXJvdW5kOiA1MCU7ICAgICAvLyBGb3IgY2lyY2xlcyBhbmQgb3ZhbHMuXG5cbi8qKlxuICogRWxldmF0aW9uIHNjYWxlLlxuICovXG5cbi8vIEZvciBzZWN0aW9ucyBhbmQgY29udGFpbmVycyB0aGF0IGdyb3VwIHJlbGF0ZWQgY29udGVudCBhbmQgY29udHJvbHMsIHdoaWNoIG1heSBvdmVybGFwIG90aGVyIGNvbnRlbnQuIEV4YW1wbGU6IFByZXZpZXcgRnJhbWUuXG4kZWxldmF0aW9uLXgtc21hbGw6IDAgMXB4IDFweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDMpLCAwIDFweCAycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKSwgMCAzcHggM3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMiksIDAgNHB4IDRweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDEpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IHByb3ZpZGUgY29udGV4dHVhbCBmZWVkYmFjayB3aXRob3V0IGJlaW5nIGludHJ1c2l2ZS4gR2VuZXJhbGx5IG5vbi1pbnRlcnJ1cHRpdmUuIEV4YW1wbGU6IFRvb2x0aXBzLCBTbmFja2Jhci5cbiRlbGV2YXRpb24tc21hbGw6IDAgMXB4IDJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDUpLCAwIDJweCAzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCA2cHggNnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMyksIDAgOHB4IDhweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IG9mZmVyIGFkZGl0aW9uYWwgYWN0aW9ucy4gRXhhbXBsZTogTWVudXMsIENvbW1hbmQgUGFsZXR0ZVxuJGVsZXZhdGlvbi1tZWRpdW06IDAgMnB4IDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDUpLCAwIDRweCA1cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCAxMnB4IDEycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAzKSwgMCAxNnB4IDE2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLy8gRm9yIGNvbXBvbmVudHMgdGhhdCBjb25maXJtIGRlY2lzaW9ucyBvciBoYW5kbGUgbmVjZXNzYXJ5IGludGVycnVwdGlvbnMuIEV4YW1wbGU6IE1vZGFscy5cbiRlbGV2YXRpb24tbGFyZ2U6IDAgNXB4IDE1cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA4KSwgMCAxNXB4IDI3cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA3KSwgMCAzMHB4IDM2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCA1MHB4IDQzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLyoqXG4gKiBEaW1lbnNpb25zLlxuICovXG5cbiRpY29uLXNpemU6IDI0cHg7XG4kYnV0dG9uLXNpemU6IDM2cHg7XG4kYnV0dG9uLXNpemUtbmV4dC1kZWZhdWx0LTQwcHg6IDQwcHg7IC8vIHRyYW5zaXRpb25hcnkgdmFyaWFibGUgZm9yIG5leHQgZGVmYXVsdCBidXR0b24gc2l6ZVxuJGJ1dHRvbi1zaXplLXNtYWxsOiAyNHB4O1xuJGJ1dHRvbi1zaXplLWNvbXBhY3Q6IDMycHg7XG4kaGVhZGVyLWhlaWdodDogNjRweDtcbiRwYW5lbC1oZWFkZXItaGVpZ2h0OiAkZ3JpZC11bml0LTYwO1xuJG5hdi1zaWRlYmFyLXdpZHRoOiAzMDBweDtcbiRhZG1pbi1iYXItaGVpZ2h0OiAzMnB4O1xuJGFkbWluLWJhci1oZWlnaHQtYmlnOiA0NnB4O1xuJGFkbWluLXNpZGViYXItd2lkdGg6IDE2MHB4O1xuJGFkbWluLXNpZGViYXItd2lkdGgtYmlnOiAxOTBweDtcbiRhZG1pbi1zaWRlYmFyLXdpZHRoLWNvbGxhcHNlZDogMzZweDtcbiRtb2RhbC1taW4td2lkdGg6IDM1MHB4O1xuJG1vZGFsLXdpZHRoLXNtYWxsOiAzODRweDtcbiRtb2RhbC13aWR0aC1tZWRpdW06IDUxMnB4O1xuJG1vZGFsLXdpZHRoLWxhcmdlOiA4NDBweDtcbiRzcGlubmVyLXNpemU6IDE2cHg7XG4kY2FudmFzLXBhZGRpbmc6ICRncmlkLXVuaXQtMjA7XG5cbi8qKlxuICogTW9iaWxlIHNwZWNpZmljIHN0eWxlc1xuICovXG4kbW9iaWxlLXRleHQtbWluLWZvbnQtc2l6ZTogMTZweDsgLy8gQW55IGZvbnQgc2l6ZSBiZWxvdyAxNnB4IHdpbGwgY2F1c2UgTW9iaWxlIFNhZmFyaSB0byBcInpvb20gaW5cIi5cblxuLyoqXG4gKiBFZGl0b3Igc3R5bGVzLlxuICovXG5cbiRzaWRlYmFyLXdpZHRoOiAyODBweDtcbiRjb250ZW50LXdpZHRoOiA4NDBweDtcbiR3aWRlLWNvbnRlbnQtd2lkdGg6IDExMDBweDtcbiR3aWRnZXQtYXJlYS13aWR0aDogNzAwcHg7XG4kc2Vjb25kYXJ5LXNpZGViYXItd2lkdGg6IDM1MHB4O1xuJGVkaXRvci1mb250LXNpemU6IDE2cHg7XG4kZGVmYXVsdC1ibG9jay1tYXJnaW46IDI4cHg7IC8vIFRoaXMgdmFsdWUgcHJvdmlkZXMgYSBjb25zaXN0ZW50LCBjb250aWd1b3VzIHNwYWNpbmcgYmV0d2VlbiBibG9ja3MuXG4kdGV4dC1lZGl0b3ItZm9udC1zaXplOiAxNXB4O1xuJGVkaXRvci1saW5lLWhlaWdodDogMS44O1xuJGVkaXRvci1odG1sLWZvbnQ6ICRmb250LWZhbWlseS1tb25vO1xuXG4vKipcbiAqIEJsb2NrICYgRWRpdG9yIFVJLlxuICovXG5cbiRibG9jay10b29sYmFyLWhlaWdodDogJGdyaWQtdW5pdC02MDtcbiRib3JkZXItd2lkdGg6IDFweDtcbiRib3JkZXItd2lkdGgtZm9jdXMtZmFsbGJhY2s6IDJweDsgLy8gVGhpcyBleGlzdHMgYXMgYSBmYWxsYmFjaywgYW5kIGlzIGlkZWFsbHkgb3ZlcnJpZGRlbiBieSB2YXIoLS13cC1hZG1pbi1ib3JkZXItd2lkdGgtZm9jdXMpIHVubGVzcyBpbiBzb21lIFNBU1MgbWF0aCBjYXNlcy5cbiRib3JkZXItd2lkdGgtdGFiOiAxLjVweDtcbiRoZWxwdGV4dC1mb250LXNpemU6IDEycHg7XG4kcmFkaW8taW5wdXQtc2l6ZTogMTZweDtcbiRyYWRpby1pbnB1dC1zaXplLXNtOiAyNHB4OyAvLyBXaWR0aCAmIGhlaWdodCBmb3Igc21hbGwgdmlld3BvcnRzLlxuXG4vLyBEZXByZWNhdGVkLCBwbGVhc2UgYXZvaWQgdXNpbmcgdGhlc2UuXG4kYmxvY2stcGFkZGluZzogMTRweDsgLy8gVXNlZCB0byBkZWZpbmUgc3BhY2UgYmV0d2VlbiBibG9jayBmb290cHJpbnQgYW5kIHN1cnJvdW5kaW5nIGJvcmRlcnMuXG4kcmFkaXVzLWJsb2NrLXVpOiAkcmFkaXVzLXNtYWxsO1xuJHNoYWRvdy1wb3BvdmVyOiAkZWxldmF0aW9uLXgtc21hbGw7XG4kc2hhZG93LW1vZGFsOiAkZWxldmF0aW9uLWxhcmdlO1xuJGRlZmF1bHQtZm9udC1zaXplOiAkZm9udC1zaXplLW1lZGl1bTtcblxuLyoqXG4gKiBCbG9jayBwYWRkaW5ncy5cbiAqL1xuXG4vLyBQYWRkaW5nIGZvciBibG9ja3Mgd2l0aCBhIGJhY2tncm91bmQgY29sb3IgKGUuZy4gcGFyYWdyYXBoIG9yIGdyb3VwKS5cbiRibG9jay1iZy1wYWRkaW5nLS12OiAxLjI1ZW07XG4kYmxvY2stYmctcGFkZGluZy0taDogMi4zNzVlbTtcblxuXG4vKipcbiAqIFJlYWN0IE5hdGl2ZSBzcGVjaWZpYy5cbiAqIFRoZXNlIHZhcmlhYmxlcyBkbyBub3QgYXBwZWFyIHRvIGJlIHVzZWQgYW55d2hlcmUgZWxzZS5cbiAqL1xuXG4vLyBEaW1lbnNpb25zLlxuJG1vYmlsZS1oZWFkZXItdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kbW9iaWxlLWhlYWRlci10b29sYmFyLWV4cGFuZGVkLWhlaWdodDogNTJweDtcbiRtb2JpbGUtZmxvYXRpbmctdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kbW9iaWxlLWZsb2F0aW5nLXRvb2xiYXItbWFyZ2luOiA4cHg7XG4kbW9iaWxlLWNvbG9yLXN3YXRjaDogNDhweDtcblxuLy8gQmxvY2sgVUkuXG4kbW9iaWxlLWJsb2NrLXRvb2xiYXItaGVpZ2h0OiA0NHB4O1xuJGRpbW1lZC1vcGFjaXR5OiAxO1xuJGJsb2NrLWVkZ2UtdG8tY29udGVudDogMTZweDtcbiRzb2xpZC1ib3JkZXItc3BhY2U6IDEycHg7XG4kZGFzaGVkLWJvcmRlci1zcGFjZTogNnB4O1xuJGJsb2NrLXNlbGVjdGVkLW1hcmdpbjogM3B4O1xuJGJsb2NrLXNlbGVjdGVkLWJvcmRlci13aWR0aDogMXB4O1xuJGJsb2NrLXNlbGVjdGVkLXBhZGRpbmc6IDA7XG4kYmxvY2stc2VsZWN0ZWQtY2hpbGQtbWFyZ2luOiA1cHg7XG4kYmxvY2stc2VsZWN0ZWQtdG8tY29udGVudDogJGJsb2NrLWVkZ2UtdG8tY29udGVudCAtICRibG9jay1zZWxlY3RlZC1tYXJnaW4gLSAkYmxvY2stc2VsZWN0ZWQtYm9yZGVyLXdpZHRoO1xuIiwiLyoqXG4gKiBDb2xvcnNcbiAqL1xuXG4vLyBXb3JkUHJlc3MgZ3JheXMuXG4kYmxhY2s6ICMwMDA7XHRcdFx0Ly8gVXNlIG9ubHkgd2hlbiB5b3UgdHJ1bHkgbmVlZCBwdXJlIGJsYWNrLiBGb3IgVUksIHVzZSAkZ3JheS05MDAuXG4kZ3JheS05MDA6ICMxZTFlMWU7XG4kZ3JheS04MDA6ICMyZjJmMmY7XG4kZ3JheS03MDA6ICM3NTc1NzU7XHRcdC8vIE1lZXRzIDQuNjoxICg0LjU6MSBpcyBtaW5pbXVtKSB0ZXh0IGNvbnRyYXN0IGFnYWluc3Qgd2hpdGUuXG4kZ3JheS02MDA6ICM5NDk0OTQ7XHRcdC8vIE1lZXRzIDM6MSBVSSBvciBsYXJnZSB0ZXh0IGNvbnRyYXN0IGFnYWluc3Qgd2hpdGUuXG4kZ3JheS00MDA6ICNjY2M7XG4kZ3JheS0zMDA6ICNkZGQ7XHRcdC8vIFVzZWQgZm9yIG1vc3QgYm9yZGVycy5cbiRncmF5LTIwMDogI2UwZTBlMDtcdFx0Ly8gVXNlZCBzcGFyaW5nbHkgZm9yIGxpZ2h0IGJvcmRlcnMuXG4kZ3JheS0xMDA6ICNmMGYwZjA7XHRcdC8vIFVzZWQgZm9yIGxpZ2h0IGdyYXkgYmFja2dyb3VuZHMuXG4kd2hpdGU6ICNmZmY7XG5cbi8vIE9wYWNpdGllcyAmIGFkZGl0aW9uYWwgY29sb3JzLlxuJGRhcmstZ3JheS1wbGFjZWhvbGRlcjogcmdiYSgkZ3JheS05MDAsIDAuNjIpO1xuJG1lZGl1bS1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCRncmF5LTkwMCwgMC41NSk7XG4kbGlnaHQtZ3JheS1wbGFjZWhvbGRlcjogcmdiYSgkd2hpdGUsIDAuNjUpO1xuXG4vLyBBbGVydCBjb2xvcnMuXG4kYWxlcnQteWVsbG93OiAjZjBiODQ5O1xuJGFsZXJ0LXJlZDogI2NjMTgxODtcbiRhbGVydC1ncmVlbjogIzRhYjg2NjtcblxuLy8gRGVwcmVjYXRlZCwgcGxlYXNlIGF2b2lkIHVzaW5nIHRoZXNlLlxuJGRhcmstdGhlbWUtZm9jdXM6ICR3aGl0ZTtcdC8vIEZvY3VzIGNvbG9yIHdoZW4gdGhlIHRoZW1lIGlzIGRhcmsuXG4iLCJAdXNlIFwiQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy92YXJpYWJsZXNcIjtcblxuLmJvb3Qtc2lkZWJhcl9fc2Nyb2xsYWJsZSB7XG5cdG92ZXJmbG93OiBhdXRvO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJvb3Qtc2lkZWJhcl9fY29udGVudCB7XG5cdGZsZXgtZ3JvdzogMTtcblx0Y29udGFpbjogY29udGVudDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css7));
function Sidebar() {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "boot-sidebar__scrollable", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(site_hub_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "boot-sidebar__content", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(navigation_default, {}) })
  ] });
}

// packages/boot/build-module/components/canvas/index.js
var import_element7 = __toESM(require_element());
var import_components10 = __toESM(require_components());

// packages/boot/build-module/components/canvas/back-button.js
var import_components9 = __toESM(require_components());
var import_compose3 = __toESM(require_compose());
var import_i18n5 = __toESM(require_i18n());
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var css8 = `/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
.boot-canvas-back-button {
  position: absolute;
  top: 0;
  left: 0;
  height: 64px;
  width: 64px;
  z-index: 100;
}

.boot-canvas-back-button__container {
  position: relative;
  width: 100%;
  height: 100%;
}

.boot-canvas-back-button__link.components-button {
  width: 64px;
  height: 64px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--wpds-color-bg-surface-neutral-weak);
  text-decoration: none;
  padding: 0;
  border-radius: 0;
}
@media not (prefers-reduced-motion) {
  .boot-canvas-back-button__link.components-button {
    transition: outline 0.1s ease-out;
  }
}
.boot-canvas-back-button__link.components-button:focus:not(:active) {
  outline: var(--wpds-border-width-focus) solid var(--wpds-color-stroke-focus-brand);
  outline-offset: calc(-1 * var(--wpds-border-width-focus));
}

.boot-canvas-back-button__icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(0, 0%, 80%);
  pointer-events: none;
}
.boot-canvas-back-button__icon svg {
  fill: currentColor;
}
.boot-canvas-back-button__icon.has-site-icon {
  background-color: hsla(0, 0%, 100%, 0.6);
  -webkit-backdrop-filter: saturate(180%) blur(15px);
  backdrop-filter: saturate(180%) blur(15px);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnL2d1dGVuYmVyZy9wYWNrYWdlcy9ib290L3NyYy9jb21wb25lbnRzL2NhbnZhcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvYmFzZS1zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvYmFzZS1zdHlsZXMvX2NvbG9ycy5zY3NzIiwiYmFjay1idXR0b24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQ0FBO0FBQUE7QUFBQTtBRFVBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQTZCQTtBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFnQkE7QUFBQTtBQUFBO0FBd0JBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQWVBO0FBQUE7QUFBQTtBQW1CQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBRWhLQTtFQUNDO0VBQ0E7RUFDQTtFQUNBLFFGNkZlO0VFNUZmLE9GNEZlO0VFM0ZmOzs7QUFHRDtFQUNDO0VBQ0E7RUFDQTs7O0FBR0Q7RUFDQyxPRmlGZTtFRWhGZixRRmdGZTtFRS9FZjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQVhEO0lBWUU7OztBQUdEO0VBQ0MsU0FDQztFQUVEOzs7QUFJRjtFQUNDO0VBQ0E7RUFDQTtFQUNBLE9GdURlO0VFdERmLFFGc0RlO0VFckRmO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDQzs7QUFHRDtFQUNDO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU0NTUyBWYXJpYWJsZXMuXG4gKlxuICogUGxlYXNlIHVzZSB2YXJpYWJsZXMgZnJvbSB0aGlzIHNoZWV0IHRvIGVuc3VyZSBjb25zaXN0ZW5jeSBhY3Jvc3MgdGhlIFVJLlxuICogRG9uJ3QgYWRkIHRvIHRoaXMgc2hlZXQgdW5sZXNzIHlvdSdyZSBwcmV0dHkgc3VyZSB0aGUgdmFsdWUgd2lsbCBiZSByZXVzZWQgaW4gbWFueSBwbGFjZXMuXG4gKiBGb3IgZXhhbXBsZSwgZG9uJ3QgYWRkIHJ1bGVzIHRvIHRoaXMgc2hlZXQgdGhhdCBhZmZlY3QgYmxvY2sgdmlzdWFscy4gSXQncyBwdXJlbHkgZm9yIFVJLlxuICovXG5cbkB1c2UgXCIuL2NvbG9yc1wiO1xuXG4vKipcbiAqIEZvbnRzICYgYmFzaWMgdmFyaWFibGVzLlxuICovXG5cbiRkZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgLy8gVG9kbzogZGVwcmVjYXRlIGluIGZhdm9yIG9mICRmYW1pbHkgdmFyaWFibGVzXG4kZGVmYXVsdC1saW5lLWhlaWdodDogMS40OyAvLyBUb2RvOiBkZXByZWNhdGUgaW4gZmF2b3Igb2YgJGxpbmUtaGVpZ2h0IHRva2Vuc1xuXG4vKipcbiAqIFR5cG9ncmFwaHlcbiAqL1xuXG4vLyBTaXplc1xuJGZvbnQtc2l6ZS14LXNtYWxsOiAxMXB4O1xuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtbWVkaXVtOiAxM3B4O1xuJGZvbnQtc2l6ZS1sYXJnZTogMTVweDtcbiRmb250LXNpemUteC1sYXJnZTogMjBweDtcbiRmb250LXNpemUtMngtbGFyZ2U6IDMycHg7XG5cbi8vIExpbmUgaGVpZ2h0c1xuJGZvbnQtbGluZS1oZWlnaHQteC1zbWFsbDogMTZweDtcbiRmb250LWxpbmUtaGVpZ2h0LXNtYWxsOiAyMHB4O1xuJGZvbnQtbGluZS1oZWlnaHQtbWVkaXVtOiAyNHB4O1xuJGZvbnQtbGluZS1oZWlnaHQtbGFyZ2U6IDI4cHg7XG4kZm9udC1saW5lLWhlaWdodC14LWxhcmdlOiAzMnB4O1xuJGZvbnQtbGluZS1oZWlnaHQtMngtbGFyZ2U6IDQwcHg7XG5cbi8vIFdlaWdodHNcbiRmb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XG4kZm9udC13ZWlnaHQtbWVkaXVtOiA0OTk7IC8vIGVuc3VyZXMgZmFsbGJhY2sgdG8gNDAwIChpbnN0ZWFkIG9mIDYwMClcblxuLy8gRmFtaWxpZXNcbiRmb250LWZhbWlseS1oZWFkaW5nczogLWFwcGxlLXN5c3RlbSwgXCJzeXN0ZW0tdWlcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHk6IC1hcHBsZS1zeXN0ZW0sIFwic3lzdGVtLXVpXCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgQ29uc29sYXMsIG1vbmFjbywgbW9ub3NwYWNlO1xuXG4vKipcbiAqIEdyaWQgU3lzdGVtLlxuICogaHR0cHM6Ly9tYWtlLndvcmRwcmVzcy5vcmcvZGVzaWduLzIwMTkvMTAvMzEvcHJvcG9zYWwtYS1jb25zaXN0ZW50LXNwYWNpbmctc3lzdGVtLWZvci13b3JkcHJlc3MvXG4gKi9cblxuJGdyaWQtdW5pdDogOHB4O1xuJGdyaWQtdW5pdC0wNTogMC41ICogJGdyaWQtdW5pdDtcdC8vIDRweFxuJGdyaWQtdW5pdC0xMDogMSAqICRncmlkLXVuaXQ7XHRcdC8vIDhweFxuJGdyaWQtdW5pdC0xNTogMS41ICogJGdyaWQtdW5pdDtcdC8vIDEycHhcbiRncmlkLXVuaXQtMjA6IDIgKiAkZ3JpZC11bml0O1x0XHQvLyAxNnB4XG4kZ3JpZC11bml0LTMwOiAzICogJGdyaWQtdW5pdDtcdFx0Ly8gMjRweFxuJGdyaWQtdW5pdC00MDogNCAqICRncmlkLXVuaXQ7XHRcdC8vIDMycHhcbiRncmlkLXVuaXQtNTA6IDUgKiAkZ3JpZC11bml0O1x0XHQvLyA0MHB4XG4kZ3JpZC11bml0LTYwOiA2ICogJGdyaWQtdW5pdDtcdFx0Ly8gNDhweFxuJGdyaWQtdW5pdC03MDogNyAqICRncmlkLXVuaXQ7XHRcdC8vIDU2cHhcbiRncmlkLXVuaXQtODA6IDggKiAkZ3JpZC11bml0O1x0XHQvLyA2NHB4XG5cbi8qKlxuICogUmFkaXVzIHNjYWxlLlxuICovXG5cbiRyYWRpdXMteC1zbWFsbDogMXB4OyAgIC8vIEFwcGxpZWQgdG8gZWxlbWVudHMgbGlrZSBidXR0b25zIG5lc3RlZCB3aXRoaW4gcHJpbWl0aXZlcyBsaWtlIGlucHV0cy5cbiRyYWRpdXMtc21hbGw6IDJweDsgICAgIC8vIEFwcGxpZWQgdG8gbW9zdCBwcmltaXRpdmVzLlxuJHJhZGl1cy1tZWRpdW06IDRweDsgICAgLy8gQXBwbGllZCB0byBjb250YWluZXJzIHdpdGggc21hbGxlciBwYWRkaW5nLlxuJHJhZGl1cy1sYXJnZTogOHB4OyAgICAgLy8gQXBwbGllZCB0byBjb250YWluZXJzIHdpdGggbGFyZ2VyIHBhZGRpbmcuXG4kcmFkaXVzLWZ1bGw6IDk5OTlweDsgICAvLyBGb3IgcGlsbHMuXG4kcmFkaXVzLXJvdW5kOiA1MCU7ICAgICAvLyBGb3IgY2lyY2xlcyBhbmQgb3ZhbHMuXG5cbi8qKlxuICogRWxldmF0aW9uIHNjYWxlLlxuICovXG5cbi8vIEZvciBzZWN0aW9ucyBhbmQgY29udGFpbmVycyB0aGF0IGdyb3VwIHJlbGF0ZWQgY29udGVudCBhbmQgY29udHJvbHMsIHdoaWNoIG1heSBvdmVybGFwIG90aGVyIGNvbnRlbnQuIEV4YW1wbGU6IFByZXZpZXcgRnJhbWUuXG4kZWxldmF0aW9uLXgtc21hbGw6IDAgMXB4IDFweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDMpLCAwIDFweCAycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKSwgMCAzcHggM3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMiksIDAgNHB4IDRweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDEpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IHByb3ZpZGUgY29udGV4dHVhbCBmZWVkYmFjayB3aXRob3V0IGJlaW5nIGludHJ1c2l2ZS4gR2VuZXJhbGx5IG5vbi1pbnRlcnJ1cHRpdmUuIEV4YW1wbGU6IFRvb2x0aXBzLCBTbmFja2Jhci5cbiRlbGV2YXRpb24tc21hbGw6IDAgMXB4IDJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDUpLCAwIDJweCAzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCA2cHggNnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMyksIDAgOHB4IDhweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IG9mZmVyIGFkZGl0aW9uYWwgYWN0aW9ucy4gRXhhbXBsZTogTWVudXMsIENvbW1hbmQgUGFsZXR0ZVxuJGVsZXZhdGlvbi1tZWRpdW06IDAgMnB4IDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDUpLCAwIDRweCA1cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCAxMnB4IDEycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAzKSwgMCAxNnB4IDE2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLy8gRm9yIGNvbXBvbmVudHMgdGhhdCBjb25maXJtIGRlY2lzaW9ucyBvciBoYW5kbGUgbmVjZXNzYXJ5IGludGVycnVwdGlvbnMuIEV4YW1wbGU6IE1vZGFscy5cbiRlbGV2YXRpb24tbGFyZ2U6IDAgNXB4IDE1cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA4KSwgMCAxNXB4IDI3cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA3KSwgMCAzMHB4IDM2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCA1MHB4IDQzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLyoqXG4gKiBEaW1lbnNpb25zLlxuICovXG5cbiRpY29uLXNpemU6IDI0cHg7XG4kYnV0dG9uLXNpemU6IDM2cHg7XG4kYnV0dG9uLXNpemUtbmV4dC1kZWZhdWx0LTQwcHg6IDQwcHg7IC8vIHRyYW5zaXRpb25hcnkgdmFyaWFibGUgZm9yIG5leHQgZGVmYXVsdCBidXR0b24gc2l6ZVxuJGJ1dHRvbi1zaXplLXNtYWxsOiAyNHB4O1xuJGJ1dHRvbi1zaXplLWNvbXBhY3Q6IDMycHg7XG4kaGVhZGVyLWhlaWdodDogNjRweDtcbiRwYW5lbC1oZWFkZXItaGVpZ2h0OiAkZ3JpZC11bml0LTYwO1xuJG5hdi1zaWRlYmFyLXdpZHRoOiAzMDBweDtcbiRhZG1pbi1iYXItaGVpZ2h0OiAzMnB4O1xuJGFkbWluLWJhci1oZWlnaHQtYmlnOiA0NnB4O1xuJGFkbWluLXNpZGViYXItd2lkdGg6IDE2MHB4O1xuJGFkbWluLXNpZGViYXItd2lkdGgtYmlnOiAxOTBweDtcbiRhZG1pbi1zaWRlYmFyLXdpZHRoLWNvbGxhcHNlZDogMzZweDtcbiRtb2RhbC1taW4td2lkdGg6IDM1MHB4O1xuJG1vZGFsLXdpZHRoLXNtYWxsOiAzODRweDtcbiRtb2RhbC13aWR0aC1tZWRpdW06IDUxMnB4O1xuJG1vZGFsLXdpZHRoLWxhcmdlOiA4NDBweDtcbiRzcGlubmVyLXNpemU6IDE2cHg7XG4kY2FudmFzLXBhZGRpbmc6ICRncmlkLXVuaXQtMjA7XG5cbi8qKlxuICogTW9iaWxlIHNwZWNpZmljIHN0eWxlc1xuICovXG4kbW9iaWxlLXRleHQtbWluLWZvbnQtc2l6ZTogMTZweDsgLy8gQW55IGZvbnQgc2l6ZSBiZWxvdyAxNnB4IHdpbGwgY2F1c2UgTW9iaWxlIFNhZmFyaSB0byBcInpvb20gaW5cIi5cblxuLyoqXG4gKiBFZGl0b3Igc3R5bGVzLlxuICovXG5cbiRzaWRlYmFyLXdpZHRoOiAyODBweDtcbiRjb250ZW50LXdpZHRoOiA4NDBweDtcbiR3aWRlLWNvbnRlbnQtd2lkdGg6IDExMDBweDtcbiR3aWRnZXQtYXJlYS13aWR0aDogNzAwcHg7XG4kc2Vjb25kYXJ5LXNpZGViYXItd2lkdGg6IDM1MHB4O1xuJGVkaXRvci1mb250LXNpemU6IDE2cHg7XG4kZGVmYXVsdC1ibG9jay1tYXJnaW46IDI4cHg7IC8vIFRoaXMgdmFsdWUgcHJvdmlkZXMgYSBjb25zaXN0ZW50LCBjb250aWd1b3VzIHNwYWNpbmcgYmV0d2VlbiBibG9ja3MuXG4kdGV4dC1lZGl0b3ItZm9udC1zaXplOiAxNXB4O1xuJGVkaXRvci1saW5lLWhlaWdodDogMS44O1xuJGVkaXRvci1odG1sLWZvbnQ6ICRmb250LWZhbWlseS1tb25vO1xuXG4vKipcbiAqIEJsb2NrICYgRWRpdG9yIFVJLlxuICovXG5cbiRibG9jay10b29sYmFyLWhlaWdodDogJGdyaWQtdW5pdC02MDtcbiRib3JkZXItd2lkdGg6IDFweDtcbiRib3JkZXItd2lkdGgtZm9jdXMtZmFsbGJhY2s6IDJweDsgLy8gVGhpcyBleGlzdHMgYXMgYSBmYWxsYmFjaywgYW5kIGlzIGlkZWFsbHkgb3ZlcnJpZGRlbiBieSB2YXIoLS13cC1hZG1pbi1ib3JkZXItd2lkdGgtZm9jdXMpIHVubGVzcyBpbiBzb21lIFNBU1MgbWF0aCBjYXNlcy5cbiRib3JkZXItd2lkdGgtdGFiOiAxLjVweDtcbiRoZWxwdGV4dC1mb250LXNpemU6IDEycHg7XG4kcmFkaW8taW5wdXQtc2l6ZTogMTZweDtcbiRyYWRpby1pbnB1dC1zaXplLXNtOiAyNHB4OyAvLyBXaWR0aCAmIGhlaWdodCBmb3Igc21hbGwgdmlld3BvcnRzLlxuXG4vLyBEZXByZWNhdGVkLCBwbGVhc2UgYXZvaWQgdXNpbmcgdGhlc2UuXG4kYmxvY2stcGFkZGluZzogMTRweDsgLy8gVXNlZCB0byBkZWZpbmUgc3BhY2UgYmV0d2VlbiBibG9jayBmb290cHJpbnQgYW5kIHN1cnJvdW5kaW5nIGJvcmRlcnMuXG4kcmFkaXVzLWJsb2NrLXVpOiAkcmFkaXVzLXNtYWxsO1xuJHNoYWRvdy1wb3BvdmVyOiAkZWxldmF0aW9uLXgtc21hbGw7XG4kc2hhZG93LW1vZGFsOiAkZWxldmF0aW9uLWxhcmdlO1xuJGRlZmF1bHQtZm9udC1zaXplOiAkZm9udC1zaXplLW1lZGl1bTtcblxuLyoqXG4gKiBCbG9jayBwYWRkaW5ncy5cbiAqL1xuXG4vLyBQYWRkaW5nIGZvciBibG9ja3Mgd2l0aCBhIGJhY2tncm91bmQgY29sb3IgKGUuZy4gcGFyYWdyYXBoIG9yIGdyb3VwKS5cbiRibG9jay1iZy1wYWRkaW5nLS12OiAxLjI1ZW07XG4kYmxvY2stYmctcGFkZGluZy0taDogMi4zNzVlbTtcblxuXG4vKipcbiAqIFJlYWN0IE5hdGl2ZSBzcGVjaWZpYy5cbiAqIFRoZXNlIHZhcmlhYmxlcyBkbyBub3QgYXBwZWFyIHRvIGJlIHVzZWQgYW55d2hlcmUgZWxzZS5cbiAqL1xuXG4vLyBEaW1lbnNpb25zLlxuJG1vYmlsZS1oZWFkZXItdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kbW9iaWxlLWhlYWRlci10b29sYmFyLWV4cGFuZGVkLWhlaWdodDogNTJweDtcbiRtb2JpbGUtZmxvYXRpbmctdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kbW9iaWxlLWZsb2F0aW5nLXRvb2xiYXItbWFyZ2luOiA4cHg7XG4kbW9iaWxlLWNvbG9yLXN3YXRjaDogNDhweDtcblxuLy8gQmxvY2sgVUkuXG4kbW9iaWxlLWJsb2NrLXRvb2xiYXItaGVpZ2h0OiA0NHB4O1xuJGRpbW1lZC1vcGFjaXR5OiAxO1xuJGJsb2NrLWVkZ2UtdG8tY29udGVudDogMTZweDtcbiRzb2xpZC1ib3JkZXItc3BhY2U6IDEycHg7XG4kZGFzaGVkLWJvcmRlci1zcGFjZTogNnB4O1xuJGJsb2NrLXNlbGVjdGVkLW1hcmdpbjogM3B4O1xuJGJsb2NrLXNlbGVjdGVkLWJvcmRlci13aWR0aDogMXB4O1xuJGJsb2NrLXNlbGVjdGVkLXBhZGRpbmc6IDA7XG4kYmxvY2stc2VsZWN0ZWQtY2hpbGQtbWFyZ2luOiA1cHg7XG4kYmxvY2stc2VsZWN0ZWQtdG8tY29udGVudDogJGJsb2NrLWVkZ2UtdG8tY29udGVudCAtICRibG9jay1zZWxlY3RlZC1tYXJnaW4gLSAkYmxvY2stc2VsZWN0ZWQtYm9yZGVyLXdpZHRoO1xuIiwiLyoqXG4gKiBDb2xvcnNcbiAqL1xuXG4vLyBXb3JkUHJlc3MgZ3JheXMuXG4kYmxhY2s6ICMwMDA7XHRcdFx0Ly8gVXNlIG9ubHkgd2hlbiB5b3UgdHJ1bHkgbmVlZCBwdXJlIGJsYWNrLiBGb3IgVUksIHVzZSAkZ3JheS05MDAuXG4kZ3JheS05MDA6ICMxZTFlMWU7XG4kZ3JheS04MDA6ICMyZjJmMmY7XG4kZ3JheS03MDA6ICM3NTc1NzU7XHRcdC8vIE1lZXRzIDQuNjoxICg0LjU6MSBpcyBtaW5pbXVtKSB0ZXh0IGNvbnRyYXN0IGFnYWluc3Qgd2hpdGUuXG4kZ3JheS02MDA6ICM5NDk0OTQ7XHRcdC8vIE1lZXRzIDM6MSBVSSBvciBsYXJnZSB0ZXh0IGNvbnRyYXN0IGFnYWluc3Qgd2hpdGUuXG4kZ3JheS00MDA6ICNjY2M7XG4kZ3JheS0zMDA6ICNkZGQ7XHRcdC8vIFVzZWQgZm9yIG1vc3QgYm9yZGVycy5cbiRncmF5LTIwMDogI2UwZTBlMDtcdFx0Ly8gVXNlZCBzcGFyaW5nbHkgZm9yIGxpZ2h0IGJvcmRlcnMuXG4kZ3JheS0xMDA6ICNmMGYwZjA7XHRcdC8vIFVzZWQgZm9yIGxpZ2h0IGdyYXkgYmFja2dyb3VuZHMuXG4kd2hpdGU6ICNmZmY7XG5cbi8vIE9wYWNpdGllcyAmIGFkZGl0aW9uYWwgY29sb3JzLlxuJGRhcmstZ3JheS1wbGFjZWhvbGRlcjogcmdiYSgkZ3JheS05MDAsIDAuNjIpO1xuJG1lZGl1bS1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCRncmF5LTkwMCwgMC41NSk7XG4kbGlnaHQtZ3JheS1wbGFjZWhvbGRlcjogcmdiYSgkd2hpdGUsIDAuNjUpO1xuXG4vLyBBbGVydCBjb2xvcnMuXG4kYWxlcnQteWVsbG93OiAjZjBiODQ5O1xuJGFsZXJ0LXJlZDogI2NjMTgxODtcbiRhbGVydC1ncmVlbjogIzRhYjg2NjtcblxuLy8gRGVwcmVjYXRlZCwgcGxlYXNlIGF2b2lkIHVzaW5nIHRoZXNlLlxuJGRhcmstdGhlbWUtZm9jdXM6ICR3aGl0ZTtcdC8vIEZvY3VzIGNvbG9yIHdoZW4gdGhlIHRoZW1lIGlzIGRhcmsuXG4iLCJAdXNlIFwiQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy92YXJpYWJsZXNcIjtcblxuLmJvb3QtY2FudmFzLWJhY2stYnV0dG9uIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdGhlaWdodDogdmFyaWFibGVzLiRoZWFkZXItaGVpZ2h0O1xuXHR3aWR0aDogdmFyaWFibGVzLiRoZWFkZXItaGVpZ2h0O1xuXHR6LWluZGV4OiAxMDA7XG59XG5cbi5ib290LWNhbnZhcy1iYWNrLWJ1dHRvbl9fY29udGFpbmVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4uYm9vdC1jYW52YXMtYmFjay1idXR0b25fX2xpbmsuY29tcG9uZW50cy1idXR0b24ge1xuXHR3aWR0aDogdmFyaWFibGVzLiRoZWFkZXItaGVpZ2h0O1xuXHRoZWlnaHQ6IHZhcmlhYmxlcy4kaGVhZGVyLWhlaWdodDtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS13cGRzLWNvbG9yLWJnLXN1cmZhY2UtbmV1dHJhbC13ZWFrKTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXG5cdEBtZWRpYSBub3QgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pIHtcblx0XHR0cmFuc2l0aW9uOiBvdXRsaW5lIDAuMXMgZWFzZS1vdXQ7XG5cdH1cblxuXHQmOmZvY3VzOm5vdCg6YWN0aXZlKSB7XG5cdFx0b3V0bGluZTpcblx0XHRcdHZhcigtLXdwZHMtYm9yZGVyLXdpZHRoLWZvY3VzKSBzb2xpZFxuXHRcdFx0dmFyKC0td3Bkcy1jb2xvci1zdHJva2UtZm9jdXMtYnJhbmQpO1xuXHRcdG91dGxpbmUtb2Zmc2V0OiBjYWxjKC0xICogdmFyKC0td3Bkcy1ib3JkZXItd2lkdGgtZm9jdXMpKTtcblx0fVxufVxuXG4uYm9vdC1jYW52YXMtYmFjay1idXR0b25fX2ljb24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0d2lkdGg6IHZhcmlhYmxlcy4kaGVhZGVyLWhlaWdodDtcblx0aGVpZ2h0OiB2YXJpYWJsZXMuJGhlYWRlci1oZWlnaHQ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCA4MCUpO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblxuXHRzdmcge1xuXHRcdGZpbGw6IGN1cnJlbnRDb2xvcjtcblx0fVxuXG5cdCYuaGFzLXNpdGUtaWNvbiB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC42KTtcblx0XHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigxNXB4KTtcblx0XHRiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMTVweCk7XG5cdH1cbn1cbiJdfQ== */`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css8));
var toggleHomeIconVariants = {
  edit: {
    opacity: 0,
    scale: 0.2
  },
  hover: {
    opacity: 1,
    scale: 1,
    clipPath: "inset( 22% round 2px )"
  }
};
function BootBackButton({ length }) {
  const disableMotion = (0, import_compose3.useReducedMotion)();
  const handleBack = () => {
    window.history.back();
  };
  if (length > 1) {
    return null;
  }
  const transition = {
    duration: disableMotion ? 0 : 0.3
  };
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
    import_components9.__unstableMotion.div,
    {
      className: "boot-canvas-back-button",
      animate: "edit",
      initial: "edit",
      whileHover: "hover",
      whileTap: "tap",
      transition,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          import_components9.Button,
          {
            className: "boot-canvas-back-button__link",
            onClick: handleBack,
            "aria-label": (0, import_i18n5.__)("Go back"),
            __next40pxDefaultSize: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(site_icon_default, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          import_components9.__unstableMotion.div,
          {
            className: "boot-canvas-back-button__icon",
            variants: toggleHomeIconVariants,
            children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_components9.Icon, { icon: arrow_up_left_default })
          }
        )
      ]
    }
  );
}

// packages/boot/build-module/components/canvas/index.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
function Canvas({ canvas }) {
  const [Editor, setEditor] = (0, import_element7.useState)(null);
  (0, import_element7.useEffect)(() => {
    import("@wordpress/lazy-editor").then((module) => {
      setEditor(() => module.Editor);
    }).catch((error) => {
      console.error("Failed to load lazy editor:", error);
    });
  }, []);
  if (!Editor) {
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "2rem"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_components10.Spinner, {})
      }
    );
  }
  const backButton = !canvas.isPreview ? ({ length }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(BootBackButton, { length }) : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "div",
    {
      style: { height: "100%" },
      inert: canvas.isPreview ? "true" : void 0,
      children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        Editor,
        {
          postType: canvas.postType,
          postId: canvas.postId,
          settings: { isPreviewMode: canvas.isPreview },
          backButton
        }
      )
    }
  );
}

// packages/boot/build-module/lock-unlock.js
var import_private_apis = __toESM(require_private_apis());
var { lock, unlock } = (0, import_private_apis.__dangerousOptInToUnstableAPIsOnlyForCoreModules)(
  "I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.",
  "@wordpress/boot"
);

// packages/boot/build-module/components/root/index.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var css9 = `/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
.boot-layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: var(--wpds-color-fg-content-neutral, #1e1e1e);
  isolation: isolate;
  background: var(--wpds-color-bg-surface-neutral-weak, #f0f0f0);
}

.boot-layout__sidebar {
  height: 100%;
  flex-shrink: 0;
  width: 240px;
  position: relative;
  overflow: hidden;
}

.boot-layout__surfaces {
  display: flex;
  flex-grow: 1;
  margin: 8px;
  gap: 8px;
}

.boot-layout__stage,
.boot-layout__inspector,
.boot-layout__canvas {
  flex: 1;
  overflow-y: auto;
  background: var(--wpds-color-bg-surface-neutral, #fff);
  color: var(--wpds-color-fg-content-neutral, #1e1e1e);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--wpds-color-stroke-surface-neutral-weak, #ddd);
  position: relative;
}

.boot-layout.has-canvas .boot-layout__stage,
.boot-layout__inspector {
  max-width: 400px;
}

.boot-layout__canvas .interface-interface-skeleton {
  position: relative;
  height: 100%;
  top: 0 !important;
  left: 0 !important;
}

.boot-layout.has-full-canvas .boot-layout__surfaces {
  margin: 0;
  gap: 0;
}

.boot-layout.has-full-canvas .boot-layout__stage,
.boot-layout.has-full-canvas .boot-layout__inspector {
  display: none;
}

.boot-layout.has-full-canvas .boot-layout__canvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: none;
  margin: 0;
  border-radius: 0;
  border: none;
  box-shadow: none;
  overflow: hidden;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnL2d1dGVuYmVyZy9wYWNrYWdlcy9ib290L3NyYy9jb21wb25lbnRzL3Jvb3QiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL19jb2xvcnMuc2NzcyIsInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUNBQTtBQUFBO0FBQUE7QURVQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUE2QkE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQXdCQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBQUE7QUFtQkE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUVoS0E7RUFDQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Q7RUFDQztFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHRDtFQUNDO0VBQ0E7RUFDQSxRRjhCYztFRTdCZCxLRjZCYzs7O0FFMUJmO0FBQUE7QUFBQTtFQUdDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUdEO0FBQUE7RUFFQzs7O0FBR0Q7RUFDQztFQUNBO0VBQ0E7RUFDQTs7O0FBSUQ7RUFDQztFQUNBOzs7QUFHRDtBQUFBO0VBRUM7OztBQUdEO0VBQ0M7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU0NTUyBWYXJpYWJsZXMuXG4gKlxuICogUGxlYXNlIHVzZSB2YXJpYWJsZXMgZnJvbSB0aGlzIHNoZWV0IHRvIGVuc3VyZSBjb25zaXN0ZW5jeSBhY3Jvc3MgdGhlIFVJLlxuICogRG9uJ3QgYWRkIHRvIHRoaXMgc2hlZXQgdW5sZXNzIHlvdSdyZSBwcmV0dHkgc3VyZSB0aGUgdmFsdWUgd2lsbCBiZSByZXVzZWQgaW4gbWFueSBwbGFjZXMuXG4gKiBGb3IgZXhhbXBsZSwgZG9uJ3QgYWRkIHJ1bGVzIHRvIHRoaXMgc2hlZXQgdGhhdCBhZmZlY3QgYmxvY2sgdmlzdWFscy4gSXQncyBwdXJlbHkgZm9yIFVJLlxuICovXG5cbkB1c2UgXCIuL2NvbG9yc1wiO1xuXG4vKipcbiAqIEZvbnRzICYgYmFzaWMgdmFyaWFibGVzLlxuICovXG5cbiRkZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgLy8gVG9kbzogZGVwcmVjYXRlIGluIGZhdm9yIG9mICRmYW1pbHkgdmFyaWFibGVzXG4kZGVmYXVsdC1saW5lLWhlaWdodDogMS40OyAvLyBUb2RvOiBkZXByZWNhdGUgaW4gZmF2b3Igb2YgJGxpbmUtaGVpZ2h0IHRva2Vuc1xuXG4vKipcbiAqIFR5cG9ncmFwaHlcbiAqL1xuXG4vLyBTaXplc1xuJGZvbnQtc2l6ZS14LXNtYWxsOiAxMXB4O1xuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtbWVkaXVtOiAxM3B4O1xuJGZvbnQtc2l6ZS1sYXJnZTogMTVweDtcbiRmb250LXNpemUteC1sYXJnZTogMjBweDtcbiRmb250LXNpemUtMngtbGFyZ2U6IDMycHg7XG5cbi8vIExpbmUgaGVpZ2h0c1xuJGZvbnQtbGluZS1oZWlnaHQteC1zbWFsbDogMTZweDtcbiRmb250LWxpbmUtaGVpZ2h0LXNtYWxsOiAyMHB4O1xuJGZvbnQtbGluZS1oZWlnaHQtbWVkaXVtOiAyNHB4O1xuJGZvbnQtbGluZS1oZWlnaHQtbGFyZ2U6IDI4cHg7XG4kZm9udC1saW5lLWhlaWdodC14LWxhcmdlOiAzMnB4O1xuJGZvbnQtbGluZS1oZWlnaHQtMngtbGFyZ2U6IDQwcHg7XG5cbi8vIFdlaWdodHNcbiRmb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XG4kZm9udC13ZWlnaHQtbWVkaXVtOiA0OTk7IC8vIGVuc3VyZXMgZmFsbGJhY2sgdG8gNDAwIChpbnN0ZWFkIG9mIDYwMClcblxuLy8gRmFtaWxpZXNcbiRmb250LWZhbWlseS1oZWFkaW5nczogLWFwcGxlLXN5c3RlbSwgXCJzeXN0ZW0tdWlcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHk6IC1hcHBsZS1zeXN0ZW0sIFwic3lzdGVtLXVpXCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgQ29uc29sYXMsIG1vbmFjbywgbW9ub3NwYWNlO1xuXG4vKipcbiAqIEdyaWQgU3lzdGVtLlxuICogaHR0cHM6Ly9tYWtlLndvcmRwcmVzcy5vcmcvZGVzaWduLzIwMTkvMTAvMzEvcHJvcG9zYWwtYS1jb25zaXN0ZW50LXNwYWNpbmctc3lzdGVtLWZvci13b3JkcHJlc3MvXG4gKi9cblxuJGdyaWQtdW5pdDogOHB4O1xuJGdyaWQtdW5pdC0wNTogMC41ICogJGdyaWQtdW5pdDtcdC8vIDRweFxuJGdyaWQtdW5pdC0xMDogMSAqICRncmlkLXVuaXQ7XHRcdC8vIDhweFxuJGdyaWQtdW5pdC0xNTogMS41ICogJGdyaWQtdW5pdDtcdC8vIDEycHhcbiRncmlkLXVuaXQtMjA6IDIgKiAkZ3JpZC11bml0O1x0XHQvLyAxNnB4XG4kZ3JpZC11bml0LTMwOiAzICogJGdyaWQtdW5pdDtcdFx0Ly8gMjRweFxuJGdyaWQtdW5pdC00MDogNCAqICRncmlkLXVuaXQ7XHRcdC8vIDMycHhcbiRncmlkLXVuaXQtNTA6IDUgKiAkZ3JpZC11bml0O1x0XHQvLyA0MHB4XG4kZ3JpZC11bml0LTYwOiA2ICogJGdyaWQtdW5pdDtcdFx0Ly8gNDhweFxuJGdyaWQtdW5pdC03MDogNyAqICRncmlkLXVuaXQ7XHRcdC8vIDU2cHhcbiRncmlkLXVuaXQtODA6IDggKiAkZ3JpZC11bml0O1x0XHQvLyA2NHB4XG5cbi8qKlxuICogUmFkaXVzIHNjYWxlLlxuICovXG5cbiRyYWRpdXMteC1zbWFsbDogMXB4OyAgIC8vIEFwcGxpZWQgdG8gZWxlbWVudHMgbGlrZSBidXR0b25zIG5lc3RlZCB3aXRoaW4gcHJpbWl0aXZlcyBsaWtlIGlucHV0cy5cbiRyYWRpdXMtc21hbGw6IDJweDsgICAgIC8vIEFwcGxpZWQgdG8gbW9zdCBwcmltaXRpdmVzLlxuJHJhZGl1cy1tZWRpdW06IDRweDsgICAgLy8gQXBwbGllZCB0byBjb250YWluZXJzIHdpdGggc21hbGxlciBwYWRkaW5nLlxuJHJhZGl1cy1sYXJnZTogOHB4OyAgICAgLy8gQXBwbGllZCB0byBjb250YWluZXJzIHdpdGggbGFyZ2VyIHBhZGRpbmcuXG4kcmFkaXVzLWZ1bGw6IDk5OTlweDsgICAvLyBGb3IgcGlsbHMuXG4kcmFkaXVzLXJvdW5kOiA1MCU7ICAgICAvLyBGb3IgY2lyY2xlcyBhbmQgb3ZhbHMuXG5cbi8qKlxuICogRWxldmF0aW9uIHNjYWxlLlxuICovXG5cbi8vIEZvciBzZWN0aW9ucyBhbmQgY29udGFpbmVycyB0aGF0IGdyb3VwIHJlbGF0ZWQgY29udGVudCBhbmQgY29udHJvbHMsIHdoaWNoIG1heSBvdmVybGFwIG90aGVyIGNvbnRlbnQuIEV4YW1wbGU6IFByZXZpZXcgRnJhbWUuXG4kZWxldmF0aW9uLXgtc21hbGw6IDAgMXB4IDFweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDMpLCAwIDFweCAycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKSwgMCAzcHggM3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMiksIDAgNHB4IDRweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDEpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IHByb3ZpZGUgY29udGV4dHVhbCBmZWVkYmFjayB3aXRob3V0IGJlaW5nIGludHJ1c2l2ZS4gR2VuZXJhbGx5IG5vbi1pbnRlcnJ1cHRpdmUuIEV4YW1wbGU6IFRvb2x0aXBzLCBTbmFja2Jhci5cbiRlbGV2YXRpb24tc21hbGw6IDAgMXB4IDJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDUpLCAwIDJweCAzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCA2cHggNnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMyksIDAgOHB4IDhweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IG9mZmVyIGFkZGl0aW9uYWwgYWN0aW9ucy4gRXhhbXBsZTogTWVudXMsIENvbW1hbmQgUGFsZXR0ZVxuJGVsZXZhdGlvbi1tZWRpdW06IDAgMnB4IDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDUpLCAwIDRweCA1cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCAxMnB4IDEycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAzKSwgMCAxNnB4IDE2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLy8gRm9yIGNvbXBvbmVudHMgdGhhdCBjb25maXJtIGRlY2lzaW9ucyBvciBoYW5kbGUgbmVjZXNzYXJ5IGludGVycnVwdGlvbnMuIEV4YW1wbGU6IE1vZGFscy5cbiRlbGV2YXRpb24tbGFyZ2U6IDAgNXB4IDE1cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA4KSwgMCAxNXB4IDI3cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA3KSwgMCAzMHB4IDM2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCA1MHB4IDQzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLyoqXG4gKiBEaW1lbnNpb25zLlxuICovXG5cbiRpY29uLXNpemU6IDI0cHg7XG4kYnV0dG9uLXNpemU6IDM2cHg7XG4kYnV0dG9uLXNpemUtbmV4dC1kZWZhdWx0LTQwcHg6IDQwcHg7IC8vIHRyYW5zaXRpb25hcnkgdmFyaWFibGUgZm9yIG5leHQgZGVmYXVsdCBidXR0b24gc2l6ZVxuJGJ1dHRvbi1zaXplLXNtYWxsOiAyNHB4O1xuJGJ1dHRvbi1zaXplLWNvbXBhY3Q6IDMycHg7XG4kaGVhZGVyLWhlaWdodDogNjRweDtcbiRwYW5lbC1oZWFkZXItaGVpZ2h0OiAkZ3JpZC11bml0LTYwO1xuJG5hdi1zaWRlYmFyLXdpZHRoOiAzMDBweDtcbiRhZG1pbi1iYXItaGVpZ2h0OiAzMnB4O1xuJGFkbWluLWJhci1oZWlnaHQtYmlnOiA0NnB4O1xuJGFkbWluLXNpZGViYXItd2lkdGg6IDE2MHB4O1xuJGFkbWluLXNpZGViYXItd2lkdGgtYmlnOiAxOTBweDtcbiRhZG1pbi1zaWRlYmFyLXdpZHRoLWNvbGxhcHNlZDogMzZweDtcbiRtb2RhbC1taW4td2lkdGg6IDM1MHB4O1xuJG1vZGFsLXdpZHRoLXNtYWxsOiAzODRweDtcbiRtb2RhbC13aWR0aC1tZWRpdW06IDUxMnB4O1xuJG1vZGFsLXdpZHRoLWxhcmdlOiA4NDBweDtcbiRzcGlubmVyLXNpemU6IDE2cHg7XG4kY2FudmFzLXBhZGRpbmc6ICRncmlkLXVuaXQtMjA7XG5cbi8qKlxuICogTW9iaWxlIHNwZWNpZmljIHN0eWxlc1xuICovXG4kbW9iaWxlLXRleHQtbWluLWZvbnQtc2l6ZTogMTZweDsgLy8gQW55IGZvbnQgc2l6ZSBiZWxvdyAxNnB4IHdpbGwgY2F1c2UgTW9iaWxlIFNhZmFyaSB0byBcInpvb20gaW5cIi5cblxuLyoqXG4gKiBFZGl0b3Igc3R5bGVzLlxuICovXG5cbiRzaWRlYmFyLXdpZHRoOiAyODBweDtcbiRjb250ZW50LXdpZHRoOiA4NDBweDtcbiR3aWRlLWNvbnRlbnQtd2lkdGg6IDExMDBweDtcbiR3aWRnZXQtYXJlYS13aWR0aDogNzAwcHg7XG4kc2Vjb25kYXJ5LXNpZGViYXItd2lkdGg6IDM1MHB4O1xuJGVkaXRvci1mb250LXNpemU6IDE2cHg7XG4kZGVmYXVsdC1ibG9jay1tYXJnaW46IDI4cHg7IC8vIFRoaXMgdmFsdWUgcHJvdmlkZXMgYSBjb25zaXN0ZW50LCBjb250aWd1b3VzIHNwYWNpbmcgYmV0d2VlbiBibG9ja3MuXG4kdGV4dC1lZGl0b3ItZm9udC1zaXplOiAxNXB4O1xuJGVkaXRvci1saW5lLWhlaWdodDogMS44O1xuJGVkaXRvci1odG1sLWZvbnQ6ICRmb250LWZhbWlseS1tb25vO1xuXG4vKipcbiAqIEJsb2NrICYgRWRpdG9yIFVJLlxuICovXG5cbiRibG9jay10b29sYmFyLWhlaWdodDogJGdyaWQtdW5pdC02MDtcbiRib3JkZXItd2lkdGg6IDFweDtcbiRib3JkZXItd2lkdGgtZm9jdXMtZmFsbGJhY2s6IDJweDsgLy8gVGhpcyBleGlzdHMgYXMgYSBmYWxsYmFjaywgYW5kIGlzIGlkZWFsbHkgb3ZlcnJpZGRlbiBieSB2YXIoLS13cC1hZG1pbi1ib3JkZXItd2lkdGgtZm9jdXMpIHVubGVzcyBpbiBzb21lIFNBU1MgbWF0aCBjYXNlcy5cbiRib3JkZXItd2lkdGgtdGFiOiAxLjVweDtcbiRoZWxwdGV4dC1mb250LXNpemU6IDEycHg7XG4kcmFkaW8taW5wdXQtc2l6ZTogMTZweDtcbiRyYWRpby1pbnB1dC1zaXplLXNtOiAyNHB4OyAvLyBXaWR0aCAmIGhlaWdodCBmb3Igc21hbGwgdmlld3BvcnRzLlxuXG4vLyBEZXByZWNhdGVkLCBwbGVhc2UgYXZvaWQgdXNpbmcgdGhlc2UuXG4kYmxvY2stcGFkZGluZzogMTRweDsgLy8gVXNlZCB0byBkZWZpbmUgc3BhY2UgYmV0d2VlbiBibG9jayBmb290cHJpbnQgYW5kIHN1cnJvdW5kaW5nIGJvcmRlcnMuXG4kcmFkaXVzLWJsb2NrLXVpOiAkcmFkaXVzLXNtYWxsO1xuJHNoYWRvdy1wb3BvdmVyOiAkZWxldmF0aW9uLXgtc21hbGw7XG4kc2hhZG93LW1vZGFsOiAkZWxldmF0aW9uLWxhcmdlO1xuJGRlZmF1bHQtZm9udC1zaXplOiAkZm9udC1zaXplLW1lZGl1bTtcblxuLyoqXG4gKiBCbG9jayBwYWRkaW5ncy5cbiAqL1xuXG4vLyBQYWRkaW5nIGZvciBibG9ja3Mgd2l0aCBhIGJhY2tncm91bmQgY29sb3IgKGUuZy4gcGFyYWdyYXBoIG9yIGdyb3VwKS5cbiRibG9jay1iZy1wYWRkaW5nLS12OiAxLjI1ZW07XG4kYmxvY2stYmctcGFkZGluZy0taDogMi4zNzVlbTtcblxuXG4vKipcbiAqIFJlYWN0IE5hdGl2ZSBzcGVjaWZpYy5cbiAqIFRoZXNlIHZhcmlhYmxlcyBkbyBub3QgYXBwZWFyIHRvIGJlIHVzZWQgYW55d2hlcmUgZWxzZS5cbiAqL1xuXG4vLyBEaW1lbnNpb25zLlxuJG1vYmlsZS1oZWFkZXItdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kbW9iaWxlLWhlYWRlci10b29sYmFyLWV4cGFuZGVkLWhlaWdodDogNTJweDtcbiRtb2JpbGUtZmxvYXRpbmctdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kbW9iaWxlLWZsb2F0aW5nLXRvb2xiYXItbWFyZ2luOiA4cHg7XG4kbW9iaWxlLWNvbG9yLXN3YXRjaDogNDhweDtcblxuLy8gQmxvY2sgVUkuXG4kbW9iaWxlLWJsb2NrLXRvb2xiYXItaGVpZ2h0OiA0NHB4O1xuJGRpbW1lZC1vcGFjaXR5OiAxO1xuJGJsb2NrLWVkZ2UtdG8tY29udGVudDogMTZweDtcbiRzb2xpZC1ib3JkZXItc3BhY2U6IDEycHg7XG4kZGFzaGVkLWJvcmRlci1zcGFjZTogNnB4O1xuJGJsb2NrLXNlbGVjdGVkLW1hcmdpbjogM3B4O1xuJGJsb2NrLXNlbGVjdGVkLWJvcmRlci13aWR0aDogMXB4O1xuJGJsb2NrLXNlbGVjdGVkLXBhZGRpbmc6IDA7XG4kYmxvY2stc2VsZWN0ZWQtY2hpbGQtbWFyZ2luOiA1cHg7XG4kYmxvY2stc2VsZWN0ZWQtdG8tY29udGVudDogJGJsb2NrLWVkZ2UtdG8tY29udGVudCAtICRibG9jay1zZWxlY3RlZC1tYXJnaW4gLSAkYmxvY2stc2VsZWN0ZWQtYm9yZGVyLXdpZHRoO1xuIiwiLyoqXG4gKiBDb2xvcnNcbiAqL1xuXG4vLyBXb3JkUHJlc3MgZ3JheXMuXG4kYmxhY2s6ICMwMDA7XHRcdFx0Ly8gVXNlIG9ubHkgd2hlbiB5b3UgdHJ1bHkgbmVlZCBwdXJlIGJsYWNrLiBGb3IgVUksIHVzZSAkZ3JheS05MDAuXG4kZ3JheS05MDA6ICMxZTFlMWU7XG4kZ3JheS04MDA6ICMyZjJmMmY7XG4kZ3JheS03MDA6ICM3NTc1NzU7XHRcdC8vIE1lZXRzIDQuNjoxICg0LjU6MSBpcyBtaW5pbXVtKSB0ZXh0IGNvbnRyYXN0IGFnYWluc3Qgd2hpdGUuXG4kZ3JheS02MDA6ICM5NDk0OTQ7XHRcdC8vIE1lZXRzIDM6MSBVSSBvciBsYXJnZSB0ZXh0IGNvbnRyYXN0IGFnYWluc3Qgd2hpdGUuXG4kZ3JheS00MDA6ICNjY2M7XG4kZ3JheS0zMDA6ICNkZGQ7XHRcdC8vIFVzZWQgZm9yIG1vc3QgYm9yZGVycy5cbiRncmF5LTIwMDogI2UwZTBlMDtcdFx0Ly8gVXNlZCBzcGFyaW5nbHkgZm9yIGxpZ2h0IGJvcmRlcnMuXG4kZ3JheS0xMDA6ICNmMGYwZjA7XHRcdC8vIFVzZWQgZm9yIGxpZ2h0IGdyYXkgYmFja2dyb3VuZHMuXG4kd2hpdGU6ICNmZmY7XG5cbi8vIE9wYWNpdGllcyAmIGFkZGl0aW9uYWwgY29sb3JzLlxuJGRhcmstZ3JheS1wbGFjZWhvbGRlcjogcmdiYSgkZ3JheS05MDAsIDAuNjIpO1xuJG1lZGl1bS1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCRncmF5LTkwMCwgMC41NSk7XG4kbGlnaHQtZ3JheS1wbGFjZWhvbGRlcjogcmdiYSgkd2hpdGUsIDAuNjUpO1xuXG4vLyBBbGVydCBjb2xvcnMuXG4kYWxlcnQteWVsbG93OiAjZjBiODQ5O1xuJGFsZXJ0LXJlZDogI2NjMTgxODtcbiRhbGVydC1ncmVlbjogIzRhYjg2NjtcblxuLy8gRGVwcmVjYXRlZCwgcGxlYXNlIGF2b2lkIHVzaW5nIHRoZXNlLlxuJGRhcmstdGhlbWUtZm9jdXM6ICR3aGl0ZTtcdC8vIEZvY3VzIGNvbG9yIHdoZW4gdGhlIHRoZW1lIGlzIGRhcmsuXG4iLCJAdXNlIFwiQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy92YXJpYWJsZXNcIjtcblxuLmJvb3QtbGF5b3V0IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0Y29sb3I6IHZhcigtLXdwZHMtY29sb3ItZmctY29udGVudC1uZXV0cmFsLCAjMWUxZTFlKTtcblx0aXNvbGF0aW9uOiBpc29sYXRlO1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS13cGRzLWNvbG9yLWJnLXN1cmZhY2UtbmV1dHJhbC13ZWFrLCAjZjBmMGYwKTtcbn1cblxuLmJvb3QtbGF5b3V0X19zaWRlYmFyIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRmbGV4LXNocmluazogMDtcblx0d2lkdGg6IDI0MHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib290LWxheW91dF9fc3VyZmFjZXMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWdyb3c6IDE7XG5cdG1hcmdpbjogdmFyaWFibGVzLiRncmlkLXVuaXQtMTA7XG5cdGdhcDogdmFyaWFibGVzLiRncmlkLXVuaXQtMTA7XG59XG5cbi5ib290LWxheW91dF9fc3RhZ2UsXG4uYm9vdC1sYXlvdXRfX2luc3BlY3Rvcixcbi5ib290LWxheW91dF9fY2FudmFzIHtcblx0ZmxleDogMTtcblx0b3ZlcmZsb3cteTogYXV0bztcblx0YmFja2dyb3VuZDogdmFyKC0td3Bkcy1jb2xvci1iZy1zdXJmYWNlLW5ldXRyYWwsICNmZmYpO1xuXHRjb2xvcjogdmFyKC0td3Bkcy1jb2xvci1mZy1jb250ZW50LW5ldXRyYWwsICMxZTFlMWUpO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdwZHMtY29sb3Itc3Ryb2tlLXN1cmZhY2UtbmV1dHJhbC13ZWFrLCAjZGRkKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9vdC1sYXlvdXQuaGFzLWNhbnZhcyAuYm9vdC1sYXlvdXRfX3N0YWdlLFxuLmJvb3QtbGF5b3V0X19pbnNwZWN0b3Ige1xuXHRtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uYm9vdC1sYXlvdXRfX2NhbnZhcyAuaW50ZXJmYWNlLWludGVyZmFjZS1za2VsZXRvbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR0b3A6IDAgIWltcG9ydGFudDtcblx0bGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4vLyBGdWxsLXNjcmVlbiBjYW52YXMgbW9kZVxuLmJvb3QtbGF5b3V0Lmhhcy1mdWxsLWNhbnZhcyAuYm9vdC1sYXlvdXRfX3N1cmZhY2VzIHtcblx0bWFyZ2luOiAwO1xuXHRnYXA6IDA7XG59XG5cbi5ib290LWxheW91dC5oYXMtZnVsbC1jYW52YXMgLmJvb3QtbGF5b3V0X19zdGFnZSxcbi5ib290LWxheW91dC5oYXMtZnVsbC1jYW52YXMgLmJvb3QtbGF5b3V0X19pbnNwZWN0b3Ige1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4uYm9vdC1sYXlvdXQuaGFzLWZ1bGwtY2FudmFzIC5ib290LWxheW91dF9fY2FudmFzIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdG1heC13aWR0aDogbm9uZTtcblx0bWFyZ2luOiAwO1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css9));
var { ThemeProvider } = unlock(import_theme.privateApis);
function Root() {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
  const canvas = currentMatch?.loaderData?.canvas;
  const isFullScreen = canvas && !canvas.isPreview;
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ThemeProvider, { isRoot: true, color: { bg: "#f8f8f8", primary: "#3858e9" }, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ThemeProvider, { color: { bg: "#1e1e1e", primary: "#3858e9" }, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
    "div",
    {
      className: clsx_default("boot-layout", {
        "has-canvas": !!canvas,
        "has-full-canvas": isFullScreen
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_commands2.CommandMenu, {}),
        !isFullScreen && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "boot-layout__sidebar", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Sidebar, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "boot-layout__surfaces", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
          ThemeProvider,
          {
            color: { bg: "#ffffff", primary: "#3858e9" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Outlet, {}),
              canvas && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "boot-layout__canvas", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Canvas, { canvas }) })
            ]
          }
        ) })
      ]
    }
  ) }) });
}

// packages/boot/build-module/components/app/router.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
function NotFoundComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "boot-layout__stage", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(page_default, { title: (0, import_i18n6.__)("Route not found"), hasPadding: true, children: (0, import_i18n6.__)("The page you're looking for does not exist") }) });
}
function RouteComponent({
  stage: Stage,
  inspector: Inspector
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
    Stage && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "boot-layout__stage", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Stage, {}) }),
    Inspector && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "boot-layout__inspector", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Inspector, {}) })
  ] });
}
async function createRouteFromDefinition(route, parentRoute) {
  const SurfacesModule = route.content_module ? (0, import_element8.lazy)(async () => {
    const module = await import(route.content_module);
    return {
      default: () => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        RouteComponent,
        {
          stage: module.stage,
          inspector: module.inspector
        }
      )
    };
  }) : () => null;
  let routeConfig = {};
  if (route.route_module) {
    const module = await import(route.route_module);
    routeConfig = module.route || {};
  }
  return createRoute({
    getParentRoute: () => parentRoute,
    path: route.path,
    beforeLoad: routeConfig.beforeLoad ? (opts) => routeConfig.beforeLoad({
      params: opts.params || {},
      search: opts.search || {},
      redirect
    }) : void 0,
    loader: async (opts) => {
      const context = {
        params: opts.params || {},
        search: opts.deps || {}
      };
      const [loaderData, canvasData] = await Promise.all([
        routeConfig.loader ? routeConfig.loader(context) : Promise.resolve(void 0),
        routeConfig.canvas ? routeConfig.canvas(context) : Promise.resolve(void 0)
      ]);
      return {
        ...loaderData,
        canvas: canvasData
      };
    },
    loaderDeps: (opts) => opts.search,
    component: SurfacesModule
  });
}
async function createRouteTree(routes, rootComponent = Root) {
  const rootRoute = createRootRoute({
    component: rootComponent,
    context: () => ({})
  });
  const dynamicRoutes = await Promise.all(
    routes.map((route) => createRouteFromDefinition(route, rootRoute))
  );
  return rootRoute.addChildren(dynamicRoutes);
}
function createPathHistory() {
  return createBrowserHistory({
    parseLocation: () => {
      const url = new URL(window.location.href);
      const path = url.searchParams.get("p") || "/";
      const pathHref = `${path}${url.hash}`;
      return parseHref(pathHref, window.history.state);
    },
    createHref: (href) => {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("p", href);
      return `${window.location.pathname}?${searchParams}`;
    }
  });
}
function Router2({
  routes,
  rootComponent = Root
}) {
  const [router, setRouter] = (0, import_element8.useState)(null);
  (0, import_element8.useEffect)(() => {
    let cancelled = false;
    async function initializeRouter() {
      const history = createPathHistory();
      const routeTree = await createRouteTree(routes, rootComponent);
      if (!cancelled) {
        const newRouter = createRouter({
          history,
          routeTree,
          defaultNotFoundComponent: NotFoundComponent
        });
        setRouter(newRouter);
      }
    }
    initializeRouter();
    return () => {
      cancelled = true;
    };
  }, [routes, rootComponent]);
  if (!router) {
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { children: "Loading routes..." });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(RouterProvider, { router });
}

// packages/boot/build-module/components/root/single-page.js
var import_commands3 = __toESM(require_commands());
var import_theme2 = __toESM(require_theme());
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var css10 = `/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
.boot-layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: var(--wpds-color-fg-content-neutral, #1e1e1e);
  isolation: isolate;
  background: var(--wpds-color-bg-surface-neutral-weak, #f0f0f0);
}

.boot-layout__sidebar {
  height: 100%;
  flex-shrink: 0;
  width: 240px;
  position: relative;
  overflow: hidden;
}

.boot-layout__surfaces {
  display: flex;
  flex-grow: 1;
  margin: 8px;
  gap: 8px;
}

.boot-layout__stage,
.boot-layout__inspector,
.boot-layout__canvas {
  flex: 1;
  overflow-y: auto;
  background: var(--wpds-color-bg-surface-neutral, #fff);
  color: var(--wpds-color-fg-content-neutral, #1e1e1e);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--wpds-color-stroke-surface-neutral-weak, #ddd);
  position: relative;
}

.boot-layout.has-canvas .boot-layout__stage,
.boot-layout__inspector {
  max-width: 400px;
}

.boot-layout__canvas .interface-interface-skeleton {
  position: relative;
  height: 100%;
  top: 0 !important;
  left: 0 !important;
}

.boot-layout.has-full-canvas .boot-layout__surfaces {
  margin: 0;
  gap: 0;
}

.boot-layout.has-full-canvas .boot-layout__stage,
.boot-layout.has-full-canvas .boot-layout__inspector {
  display: none;
}

.boot-layout.has-full-canvas .boot-layout__canvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: none;
  margin: 0;
  border-radius: 0;
  border: none;
  box-shadow: none;
  overflow: hidden;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnL2d1dGVuYmVyZy9wYWNrYWdlcy9ib290L3NyYy9jb21wb25lbnRzL3Jvb3QiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL19jb2xvcnMuc2NzcyIsInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUNBQTtBQUFBO0FBQUE7QURVQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUE2QkE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQXdCQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBQUE7QUFtQkE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUVoS0E7RUFDQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Q7RUFDQztFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHRDtFQUNDO0VBQ0E7RUFDQSxRRjhCYztFRTdCZCxLRjZCYzs7O0FFMUJmO0FBQUE7QUFBQTtFQUdDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUdEO0FBQUE7RUFFQzs7O0FBR0Q7RUFDQztFQUNBO0VBQ0E7RUFDQTs7O0FBSUQ7RUFDQztFQUNBOzs7QUFHRDtBQUFBO0VBRUM7OztBQUdEO0VBQ0M7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU0NTUyBWYXJpYWJsZXMuXG4gKlxuICogUGxlYXNlIHVzZSB2YXJpYWJsZXMgZnJvbSB0aGlzIHNoZWV0IHRvIGVuc3VyZSBjb25zaXN0ZW5jeSBhY3Jvc3MgdGhlIFVJLlxuICogRG9uJ3QgYWRkIHRvIHRoaXMgc2hlZXQgdW5sZXNzIHlvdSdyZSBwcmV0dHkgc3VyZSB0aGUgdmFsdWUgd2lsbCBiZSByZXVzZWQgaW4gbWFueSBwbGFjZXMuXG4gKiBGb3IgZXhhbXBsZSwgZG9uJ3QgYWRkIHJ1bGVzIHRvIHRoaXMgc2hlZXQgdGhhdCBhZmZlY3QgYmxvY2sgdmlzdWFscy4gSXQncyBwdXJlbHkgZm9yIFVJLlxuICovXG5cbkB1c2UgXCIuL2NvbG9yc1wiO1xuXG4vKipcbiAqIEZvbnRzICYgYmFzaWMgdmFyaWFibGVzLlxuICovXG5cbiRkZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgLy8gVG9kbzogZGVwcmVjYXRlIGluIGZhdm9yIG9mICRmYW1pbHkgdmFyaWFibGVzXG4kZGVmYXVsdC1saW5lLWhlaWdodDogMS40OyAvLyBUb2RvOiBkZXByZWNhdGUgaW4gZmF2b3Igb2YgJGxpbmUtaGVpZ2h0IHRva2Vuc1xuXG4vKipcbiAqIFR5cG9ncmFwaHlcbiAqL1xuXG4vLyBTaXplc1xuJGZvbnQtc2l6ZS14LXNtYWxsOiAxMXB4O1xuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtbWVkaXVtOiAxM3B4O1xuJGZvbnQtc2l6ZS1sYXJnZTogMTVweDtcbiRmb250LXNpemUteC1sYXJnZTogMjBweDtcbiRmb250LXNpemUtMngtbGFyZ2U6IDMycHg7XG5cbi8vIExpbmUgaGVpZ2h0c1xuJGZvbnQtbGluZS1oZWlnaHQteC1zbWFsbDogMTZweDtcbiRmb250LWxpbmUtaGVpZ2h0LXNtYWxsOiAyMHB4O1xuJGZvbnQtbGluZS1oZWlnaHQtbWVkaXVtOiAyNHB4O1xuJGZvbnQtbGluZS1oZWlnaHQtbGFyZ2U6IDI4cHg7XG4kZm9udC1saW5lLWhlaWdodC14LWxhcmdlOiAzMnB4O1xuJGZvbnQtbGluZS1oZWlnaHQtMngtbGFyZ2U6IDQwcHg7XG5cbi8vIFdlaWdodHNcbiRmb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XG4kZm9udC13ZWlnaHQtbWVkaXVtOiA0OTk7IC8vIGVuc3VyZXMgZmFsbGJhY2sgdG8gNDAwIChpbnN0ZWFkIG9mIDYwMClcblxuLy8gRmFtaWxpZXNcbiRmb250LWZhbWlseS1oZWFkaW5nczogLWFwcGxlLXN5c3RlbSwgXCJzeXN0ZW0tdWlcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHk6IC1hcHBsZS1zeXN0ZW0sIFwic3lzdGVtLXVpXCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgQ29uc29sYXMsIG1vbmFjbywgbW9ub3NwYWNlO1xuXG4vKipcbiAqIEdyaWQgU3lzdGVtLlxuICogaHR0cHM6Ly9tYWtlLndvcmRwcmVzcy5vcmcvZGVzaWduLzIwMTkvMTAvMzEvcHJvcG9zYWwtYS1jb25zaXN0ZW50LXNwYWNpbmctc3lzdGVtLWZvci13b3JkcHJlc3MvXG4gKi9cblxuJGdyaWQtdW5pdDogOHB4O1xuJGdyaWQtdW5pdC0wNTogMC41ICogJGdyaWQtdW5pdDtcdC8vIDRweFxuJGdyaWQtdW5pdC0xMDogMSAqICRncmlkLXVuaXQ7XHRcdC8vIDhweFxuJGdyaWQtdW5pdC0xNTogMS41ICogJGdyaWQtdW5pdDtcdC8vIDEycHhcbiRncmlkLXVuaXQtMjA6IDIgKiAkZ3JpZC11bml0O1x0XHQvLyAxNnB4XG4kZ3JpZC11bml0LTMwOiAzICogJGdyaWQtdW5pdDtcdFx0Ly8gMjRweFxuJGdyaWQtdW5pdC00MDogNCAqICRncmlkLXVuaXQ7XHRcdC8vIDMycHhcbiRncmlkLXVuaXQtNTA6IDUgKiAkZ3JpZC11bml0O1x0XHQvLyA0MHB4XG4kZ3JpZC11bml0LTYwOiA2ICogJGdyaWQtdW5pdDtcdFx0Ly8gNDhweFxuJGdyaWQtdW5pdC03MDogNyAqICRncmlkLXVuaXQ7XHRcdC8vIDU2cHhcbiRncmlkLXVuaXQtODA6IDggKiAkZ3JpZC11bml0O1x0XHQvLyA2NHB4XG5cbi8qKlxuICogUmFkaXVzIHNjYWxlLlxuICovXG5cbiRyYWRpdXMteC1zbWFsbDogMXB4OyAgIC8vIEFwcGxpZWQgdG8gZWxlbWVudHMgbGlrZSBidXR0b25zIG5lc3RlZCB3aXRoaW4gcHJpbWl0aXZlcyBsaWtlIGlucHV0cy5cbiRyYWRpdXMtc21hbGw6IDJweDsgICAgIC8vIEFwcGxpZWQgdG8gbW9zdCBwcmltaXRpdmVzLlxuJHJhZGl1cy1tZWRpdW06IDRweDsgICAgLy8gQXBwbGllZCB0byBjb250YWluZXJzIHdpdGggc21hbGxlciBwYWRkaW5nLlxuJHJhZGl1cy1sYXJnZTogOHB4OyAgICAgLy8gQXBwbGllZCB0byBjb250YWluZXJzIHdpdGggbGFyZ2VyIHBhZGRpbmcuXG4kcmFkaXVzLWZ1bGw6IDk5OTlweDsgICAvLyBGb3IgcGlsbHMuXG4kcmFkaXVzLXJvdW5kOiA1MCU7ICAgICAvLyBGb3IgY2lyY2xlcyBhbmQgb3ZhbHMuXG5cbi8qKlxuICogRWxldmF0aW9uIHNjYWxlLlxuICovXG5cbi8vIEZvciBzZWN0aW9ucyBhbmQgY29udGFpbmVycyB0aGF0IGdyb3VwIHJlbGF0ZWQgY29udGVudCBhbmQgY29udHJvbHMsIHdoaWNoIG1heSBvdmVybGFwIG90aGVyIGNvbnRlbnQuIEV4YW1wbGU6IFByZXZpZXcgRnJhbWUuXG4kZWxldmF0aW9uLXgtc21hbGw6IDAgMXB4IDFweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDMpLCAwIDFweCAycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKSwgMCAzcHggM3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMiksIDAgNHB4IDRweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDEpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IHByb3ZpZGUgY29udGV4dHVhbCBmZWVkYmFjayB3aXRob3V0IGJlaW5nIGludHJ1c2l2ZS4gR2VuZXJhbGx5IG5vbi1pbnRlcnJ1cHRpdmUuIEV4YW1wbGU6IFRvb2x0aXBzLCBTbmFja2Jhci5cbiRlbGV2YXRpb24tc21hbGw6IDAgMXB4IDJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDUpLCAwIDJweCAzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCA2cHggNnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMyksIDAgOHB4IDhweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IG9mZmVyIGFkZGl0aW9uYWwgYWN0aW9ucy4gRXhhbXBsZTogTWVudXMsIENvbW1hbmQgUGFsZXR0ZVxuJGVsZXZhdGlvbi1tZWRpdW06IDAgMnB4IDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDUpLCAwIDRweCA1cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCAxMnB4IDEycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAzKSwgMCAxNnB4IDE2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLy8gRm9yIGNvbXBvbmVudHMgdGhhdCBjb25maXJtIGRlY2lzaW9ucyBvciBoYW5kbGUgbmVjZXNzYXJ5IGludGVycnVwdGlvbnMuIEV4YW1wbGU6IE1vZGFscy5cbiRlbGV2YXRpb24tbGFyZ2U6IDAgNXB4IDE1cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA4KSwgMCAxNXB4IDI3cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA3KSwgMCAzMHB4IDM2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCA1MHB4IDQzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLyoqXG4gKiBEaW1lbnNpb25zLlxuICovXG5cbiRpY29uLXNpemU6IDI0cHg7XG4kYnV0dG9uLXNpemU6IDM2cHg7XG4kYnV0dG9uLXNpemUtbmV4dC1kZWZhdWx0LTQwcHg6IDQwcHg7IC8vIHRyYW5zaXRpb25hcnkgdmFyaWFibGUgZm9yIG5leHQgZGVmYXVsdCBidXR0b24gc2l6ZVxuJGJ1dHRvbi1zaXplLXNtYWxsOiAyNHB4O1xuJGJ1dHRvbi1zaXplLWNvbXBhY3Q6IDMycHg7XG4kaGVhZGVyLWhlaWdodDogNjRweDtcbiRwYW5lbC1oZWFkZXItaGVpZ2h0OiAkZ3JpZC11bml0LTYwO1xuJG5hdi1zaWRlYmFyLXdpZHRoOiAzMDBweDtcbiRhZG1pbi1iYXItaGVpZ2h0OiAzMnB4O1xuJGFkbWluLWJhci1oZWlnaHQtYmlnOiA0NnB4O1xuJGFkbWluLXNpZGViYXItd2lkdGg6IDE2MHB4O1xuJGFkbWluLXNpZGViYXItd2lkdGgtYmlnOiAxOTBweDtcbiRhZG1pbi1zaWRlYmFyLXdpZHRoLWNvbGxhcHNlZDogMzZweDtcbiRtb2RhbC1taW4td2lkdGg6IDM1MHB4O1xuJG1vZGFsLXdpZHRoLXNtYWxsOiAzODRweDtcbiRtb2RhbC13aWR0aC1tZWRpdW06IDUxMnB4O1xuJG1vZGFsLXdpZHRoLWxhcmdlOiA4NDBweDtcbiRzcGlubmVyLXNpemU6IDE2cHg7XG4kY2FudmFzLXBhZGRpbmc6ICRncmlkLXVuaXQtMjA7XG5cbi8qKlxuICogTW9iaWxlIHNwZWNpZmljIHN0eWxlc1xuICovXG4kbW9iaWxlLXRleHQtbWluLWZvbnQtc2l6ZTogMTZweDsgLy8gQW55IGZvbnQgc2l6ZSBiZWxvdyAxNnB4IHdpbGwgY2F1c2UgTW9iaWxlIFNhZmFyaSB0byBcInpvb20gaW5cIi5cblxuLyoqXG4gKiBFZGl0b3Igc3R5bGVzLlxuICovXG5cbiRzaWRlYmFyLXdpZHRoOiAyODBweDtcbiRjb250ZW50LXdpZHRoOiA4NDBweDtcbiR3aWRlLWNvbnRlbnQtd2lkdGg6IDExMDBweDtcbiR3aWRnZXQtYXJlYS13aWR0aDogNzAwcHg7XG4kc2Vjb25kYXJ5LXNpZGViYXItd2lkdGg6IDM1MHB4O1xuJGVkaXRvci1mb250LXNpemU6IDE2cHg7XG4kZGVmYXVsdC1ibG9jay1tYXJnaW46IDI4cHg7IC8vIFRoaXMgdmFsdWUgcHJvdmlkZXMgYSBjb25zaXN0ZW50LCBjb250aWd1b3VzIHNwYWNpbmcgYmV0d2VlbiBibG9ja3MuXG4kdGV4dC1lZGl0b3ItZm9udC1zaXplOiAxNXB4O1xuJGVkaXRvci1saW5lLWhlaWdodDogMS44O1xuJGVkaXRvci1odG1sLWZvbnQ6ICRmb250LWZhbWlseS1tb25vO1xuXG4vKipcbiAqIEJsb2NrICYgRWRpdG9yIFVJLlxuICovXG5cbiRibG9jay10b29sYmFyLWhlaWdodDogJGdyaWQtdW5pdC02MDtcbiRib3JkZXItd2lkdGg6IDFweDtcbiRib3JkZXItd2lkdGgtZm9jdXMtZmFsbGJhY2s6IDJweDsgLy8gVGhpcyBleGlzdHMgYXMgYSBmYWxsYmFjaywgYW5kIGlzIGlkZWFsbHkgb3ZlcnJpZGRlbiBieSB2YXIoLS13cC1hZG1pbi1ib3JkZXItd2lkdGgtZm9jdXMpIHVubGVzcyBpbiBzb21lIFNBU1MgbWF0aCBjYXNlcy5cbiRib3JkZXItd2lkdGgtdGFiOiAxLjVweDtcbiRoZWxwdGV4dC1mb250LXNpemU6IDEycHg7XG4kcmFkaW8taW5wdXQtc2l6ZTogMTZweDtcbiRyYWRpby1pbnB1dC1zaXplLXNtOiAyNHB4OyAvLyBXaWR0aCAmIGhlaWdodCBmb3Igc21hbGwgdmlld3BvcnRzLlxuXG4vLyBEZXByZWNhdGVkLCBwbGVhc2UgYXZvaWQgdXNpbmcgdGhlc2UuXG4kYmxvY2stcGFkZGluZzogMTRweDsgLy8gVXNlZCB0byBkZWZpbmUgc3BhY2UgYmV0d2VlbiBibG9jayBmb290cHJpbnQgYW5kIHN1cnJvdW5kaW5nIGJvcmRlcnMuXG4kcmFkaXVzLWJsb2NrLXVpOiAkcmFkaXVzLXNtYWxsO1xuJHNoYWRvdy1wb3BvdmVyOiAkZWxldmF0aW9uLXgtc21hbGw7XG4kc2hhZG93LW1vZGFsOiAkZWxldmF0aW9uLWxhcmdlO1xuJGRlZmF1bHQtZm9udC1zaXplOiAkZm9udC1zaXplLW1lZGl1bTtcblxuLyoqXG4gKiBCbG9jayBwYWRkaW5ncy5cbiAqL1xuXG4vLyBQYWRkaW5nIGZvciBibG9ja3Mgd2l0aCBhIGJhY2tncm91bmQgY29sb3IgKGUuZy4gcGFyYWdyYXBoIG9yIGdyb3VwKS5cbiRibG9jay1iZy1wYWRkaW5nLS12OiAxLjI1ZW07XG4kYmxvY2stYmctcGFkZGluZy0taDogMi4zNzVlbTtcblxuXG4vKipcbiAqIFJlYWN0IE5hdGl2ZSBzcGVjaWZpYy5cbiAqIFRoZXNlIHZhcmlhYmxlcyBkbyBub3QgYXBwZWFyIHRvIGJlIHVzZWQgYW55d2hlcmUgZWxzZS5cbiAqL1xuXG4vLyBEaW1lbnNpb25zLlxuJG1vYmlsZS1oZWFkZXItdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kbW9iaWxlLWhlYWRlci10b29sYmFyLWV4cGFuZGVkLWhlaWdodDogNTJweDtcbiRtb2JpbGUtZmxvYXRpbmctdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kbW9iaWxlLWZsb2F0aW5nLXRvb2xiYXItbWFyZ2luOiA4cHg7XG4kbW9iaWxlLWNvbG9yLXN3YXRjaDogNDhweDtcblxuLy8gQmxvY2sgVUkuXG4kbW9iaWxlLWJsb2NrLXRvb2xiYXItaGVpZ2h0OiA0NHB4O1xuJGRpbW1lZC1vcGFjaXR5OiAxO1xuJGJsb2NrLWVkZ2UtdG8tY29udGVudDogMTZweDtcbiRzb2xpZC1ib3JkZXItc3BhY2U6IDEycHg7XG4kZGFzaGVkLWJvcmRlci1zcGFjZTogNnB4O1xuJGJsb2NrLXNlbGVjdGVkLW1hcmdpbjogM3B4O1xuJGJsb2NrLXNlbGVjdGVkLWJvcmRlci13aWR0aDogMXB4O1xuJGJsb2NrLXNlbGVjdGVkLXBhZGRpbmc6IDA7XG4kYmxvY2stc2VsZWN0ZWQtY2hpbGQtbWFyZ2luOiA1cHg7XG4kYmxvY2stc2VsZWN0ZWQtdG8tY29udGVudDogJGJsb2NrLWVkZ2UtdG8tY29udGVudCAtICRibG9jay1zZWxlY3RlZC1tYXJnaW4gLSAkYmxvY2stc2VsZWN0ZWQtYm9yZGVyLXdpZHRoO1xuIiwiLyoqXG4gKiBDb2xvcnNcbiAqL1xuXG4vLyBXb3JkUHJlc3MgZ3JheXMuXG4kYmxhY2s6ICMwMDA7XHRcdFx0Ly8gVXNlIG9ubHkgd2hlbiB5b3UgdHJ1bHkgbmVlZCBwdXJlIGJsYWNrLiBGb3IgVUksIHVzZSAkZ3JheS05MDAuXG4kZ3JheS05MDA6ICMxZTFlMWU7XG4kZ3JheS04MDA6ICMyZjJmMmY7XG4kZ3JheS03MDA6ICM3NTc1NzU7XHRcdC8vIE1lZXRzIDQuNjoxICg0LjU6MSBpcyBtaW5pbXVtKSB0ZXh0IGNvbnRyYXN0IGFnYWluc3Qgd2hpdGUuXG4kZ3JheS02MDA6ICM5NDk0OTQ7XHRcdC8vIE1lZXRzIDM6MSBVSSBvciBsYXJnZSB0ZXh0IGNvbnRyYXN0IGFnYWluc3Qgd2hpdGUuXG4kZ3JheS00MDA6ICNjY2M7XG4kZ3JheS0zMDA6ICNkZGQ7XHRcdC8vIFVzZWQgZm9yIG1vc3QgYm9yZGVycy5cbiRncmF5LTIwMDogI2UwZTBlMDtcdFx0Ly8gVXNlZCBzcGFyaW5nbHkgZm9yIGxpZ2h0IGJvcmRlcnMuXG4kZ3JheS0xMDA6ICNmMGYwZjA7XHRcdC8vIFVzZWQgZm9yIGxpZ2h0IGdyYXkgYmFja2dyb3VuZHMuXG4kd2hpdGU6ICNmZmY7XG5cbi8vIE9wYWNpdGllcyAmIGFkZGl0aW9uYWwgY29sb3JzLlxuJGRhcmstZ3JheS1wbGFjZWhvbGRlcjogcmdiYSgkZ3JheS05MDAsIDAuNjIpO1xuJG1lZGl1bS1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCRncmF5LTkwMCwgMC41NSk7XG4kbGlnaHQtZ3JheS1wbGFjZWhvbGRlcjogcmdiYSgkd2hpdGUsIDAuNjUpO1xuXG4vLyBBbGVydCBjb2xvcnMuXG4kYWxlcnQteWVsbG93OiAjZjBiODQ5O1xuJGFsZXJ0LXJlZDogI2NjMTgxODtcbiRhbGVydC1ncmVlbjogIzRhYjg2NjtcblxuLy8gRGVwcmVjYXRlZCwgcGxlYXNlIGF2b2lkIHVzaW5nIHRoZXNlLlxuJGRhcmstdGhlbWUtZm9jdXM6ICR3aGl0ZTtcdC8vIEZvY3VzIGNvbG9yIHdoZW4gdGhlIHRoZW1lIGlzIGRhcmsuXG4iLCJAdXNlIFwiQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy92YXJpYWJsZXNcIjtcblxuLmJvb3QtbGF5b3V0IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0Y29sb3I6IHZhcigtLXdwZHMtY29sb3ItZmctY29udGVudC1uZXV0cmFsLCAjMWUxZTFlKTtcblx0aXNvbGF0aW9uOiBpc29sYXRlO1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS13cGRzLWNvbG9yLWJnLXN1cmZhY2UtbmV1dHJhbC13ZWFrLCAjZjBmMGYwKTtcbn1cblxuLmJvb3QtbGF5b3V0X19zaWRlYmFyIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRmbGV4LXNocmluazogMDtcblx0d2lkdGg6IDI0MHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib290LWxheW91dF9fc3VyZmFjZXMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWdyb3c6IDE7XG5cdG1hcmdpbjogdmFyaWFibGVzLiRncmlkLXVuaXQtMTA7XG5cdGdhcDogdmFyaWFibGVzLiRncmlkLXVuaXQtMTA7XG59XG5cbi5ib290LWxheW91dF9fc3RhZ2UsXG4uYm9vdC1sYXlvdXRfX2luc3BlY3Rvcixcbi5ib290LWxheW91dF9fY2FudmFzIHtcblx0ZmxleDogMTtcblx0b3ZlcmZsb3cteTogYXV0bztcblx0YmFja2dyb3VuZDogdmFyKC0td3Bkcy1jb2xvci1iZy1zdXJmYWNlLW5ldXRyYWwsICNmZmYpO1xuXHRjb2xvcjogdmFyKC0td3Bkcy1jb2xvci1mZy1jb250ZW50LW5ldXRyYWwsICMxZTFlMWUpO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdwZHMtY29sb3Itc3Ryb2tlLXN1cmZhY2UtbmV1dHJhbC13ZWFrLCAjZGRkKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9vdC1sYXlvdXQuaGFzLWNhbnZhcyAuYm9vdC1sYXlvdXRfX3N0YWdlLFxuLmJvb3QtbGF5b3V0X19pbnNwZWN0b3Ige1xuXHRtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uYm9vdC1sYXlvdXRfX2NhbnZhcyAuaW50ZXJmYWNlLWludGVyZmFjZS1za2VsZXRvbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR0b3A6IDAgIWltcG9ydGFudDtcblx0bGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4vLyBGdWxsLXNjcmVlbiBjYW52YXMgbW9kZVxuLmJvb3QtbGF5b3V0Lmhhcy1mdWxsLWNhbnZhcyAuYm9vdC1sYXlvdXRfX3N1cmZhY2VzIHtcblx0bWFyZ2luOiAwO1xuXHRnYXA6IDA7XG59XG5cbi5ib290LWxheW91dC5oYXMtZnVsbC1jYW52YXMgLmJvb3QtbGF5b3V0X19zdGFnZSxcbi5ib290LWxheW91dC5oYXMtZnVsbC1jYW52YXMgLmJvb3QtbGF5b3V0X19pbnNwZWN0b3Ige1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4uYm9vdC1sYXlvdXQuaGFzLWZ1bGwtY2FudmFzIC5ib290LWxheW91dF9fY2FudmFzIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdG1heC13aWR0aDogbm9uZTtcblx0bWFyZ2luOiAwO1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css10));
var { ThemeProvider: ThemeProvider2 } = unlock(import_theme2.privateApis);
function RootSinglePage() {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
  const canvas = currentMatch?.loaderData?.canvas;
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ThemeProvider2, { isRoot: true, color: { bg: "#f8f8f8", primary: "#3858e9" }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ThemeProvider2, { color: { bg: "#1d2327", primary: "#3858e9" }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    "div",
    {
      className: clsx_default("boot-layout boot-layout--single-page", {
        "has-canvas": !!canvas
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_commands3.CommandMenu, {}),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "boot-layout__surfaces", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
          ThemeProvider2,
          {
            color: { bg: "#ffffff", primary: "#3858e9" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Outlet, {}),
              canvas && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "boot-layout__canvas", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Canvas, { canvas }) })
            ]
          }
        ) })
      ]
    }
  ) }) });
}

// packages/boot/build-module/components/app/index.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
function App({ rootComponent }) {
  const routes = (0, import_data7.useSelect)((select) => select(store).getRoutes(), []);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Router2, { routes, rootComponent });
}
async function init({
  mountId,
  menuItems,
  routes
}) {
  (menuItems ?? []).forEach((menuItem) => {
    (0, import_data7.dispatch)(store).registerMenuItem(menuItem.id, menuItem);
  });
  (routes ?? []).forEach((route) => {
    (0, import_data7.dispatch)(store).registerRoute(route);
  });
  const rootElement = document.getElementById(mountId);
  if (rootElement) {
    const root = (0, import_element9.createRoot)(rootElement);
    root.render(
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_element9.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(App, {}) })
    );
  }
}
async function initSinglePage({
  mountId,
  routes
}) {
  (routes ?? []).forEach((route) => {
    (0, import_data7.dispatch)(store).registerRoute(route);
  });
  const rootElement = document.getElementById(mountId);
  if (rootElement) {
    const root = (0, import_element9.createRoot)(rootElement);
    root.render(
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_element9.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(App, { rootComponent: RootSinglePage }) })
    );
  }
}

// packages/boot/build-module/index.js
var import_editor = __toESM(require_editor());
var css11 = `@charset "UTF-8";
/* -------------------------------------------
 *  Autogenerated by \u26CB Terrazzo. DO NOT EDIT!
 * ------------------------------------------- */
:root {
  --wpds-border-radius-large: 8px; /* Large radius */
  --wpds-border-radius-medium: 4px; /* Medium radius */
  --wpds-border-radius-small: 2px; /* Small radius */
  --wpds-border-radius-x-small: 1px; /* Extra small radius */
  --wpds-border-width-focus: 2px; /* Border width for focus ring */
  --wpds-color-bg-interactive-brand: #00000000; /* Background color for interactive elements with brand tone and normal emphasis. */
  --wpds-color-bg-interactive-brand-active: var(
  	--wpds-color-private-primary-surface2
  ); /* Background color for interactive elements with brand tone and normal emphasis that are hovered, focused, or active. */
  --wpds-color-bg-interactive-brand-disabled: var(
  	--wpds-color-private-bg-surface5
  ); /* Background color for interactive elements with brand tone and normal emphasis, in their disabled state. */
  --wpds-color-bg-interactive-brand-strong: var(
  	--wpds-color-private-primary-bg-fill1
  ); /* Background color for interactive elements with brand tone and strong emphasis. */
  --wpds-color-bg-interactive-brand-strong-active: var(
  	--wpds-color-private-primary-bg-fill2
  ); /* Background color for interactive elements with brand tone and strong emphasis that are hovered, focused, or active. */
  --wpds-color-bg-interactive-brand-strong-disabled: var(
  	--wpds-color-private-bg-surface6
  ); /* Background color for interactive elements with brand tone and strong emphasis, in their disabled state. */
  --wpds-color-bg-interactive-brand-weak: #00000000; /* Background color for interactive elements with brand tone and weak emphasis. */
  --wpds-color-bg-interactive-brand-weak-active: var(
  	--wpds-color-private-primary-surface4
  ); /* Background color for interactive elements with brand tone and weak emphasis that are hovered, focused, or active. */
  --wpds-color-bg-interactive-brand-weak-disabled: var(
  	--wpds-color-private-bg-surface5
  ); /* Background color for interactive elements with brand tone and weak emphasis, in their disabled state. */
  --wpds-color-bg-interactive-neutral: #00000000; /* Background color for interactive elements with neutral tone and normal emphasis. */
  --wpds-color-bg-interactive-neutral-active: var(
  	--wpds-color-private-bg-surface4
  ); /* Background color for interactive elements with neutral tone and normal emphasis that are hovered, focused, or active. */
  --wpds-color-bg-interactive-neutral-disabled: var(
  	--wpds-color-private-bg-surface5
  ); /* Background color for interactive elements with neutral tone and normal emphasis, in their disabled state. */
  --wpds-color-bg-interactive-neutral-strong: var(
  	--wpds-color-private-bg-bg-fill-inverted1
  ); /* Background color for interactive elements with neutral tone and strong emphasis. */
  --wpds-color-bg-interactive-neutral-strong-active: var(
  	--wpds-color-private-bg-bg-fill-inverted2
  ); /* Background color for interactive elements with neutral tone and strong emphasis that are hovered, focused, or active. */
  --wpds-color-bg-interactive-neutral-strong-disabled: var(
  	--wpds-color-private-bg-surface6
  ); /* Background color for interactive elements with neutral tone and strong emphasis, in their disabled state. */
  --wpds-color-bg-interactive-neutral-weak: #00000000; /* Background color for interactive elements with neutral tone and weak emphasis. */
  --wpds-color-bg-interactive-neutral-weak-active: var(
  	--wpds-color-private-bg-surface4
  ); /* Background color for interactive elements with neutral tone and weak emphasis that are hovered, focused, or active. */
  --wpds-color-bg-interactive-neutral-weak-disabled: var(
  	--wpds-color-private-bg-surface5
  ); /* Background color for interactive elements with neutral tone and weak emphasis, in their disabled state. */
  --wpds-color-bg-surface-brand: var(
  	--wpds-color-private-primary-surface1
  ); /* Background color for surfaces with brand tone and normal emphasis. */
  --wpds-color-bg-surface-caution: var(
  	--wpds-color-private-caution-surface4
  ); /* Background color for surfaces with caution tone and normal emphasis. */
  --wpds-color-bg-surface-caution-weak: var(
  	--wpds-color-private-caution-surface2
  ); /* Background color for surfaces with caution tone and weak emphasis. */
  --wpds-color-bg-surface-error: var(
  	--wpds-color-private-error-surface4
  ); /* Background color for surfaces with error tone and normal emphasis. */
  --wpds-color-bg-surface-error-weak: var(
  	--wpds-color-private-error-surface2
  ); /* Background color for surfaces with error tone and weak emphasis. */
  --wpds-color-bg-surface-info: var(
  	--wpds-color-private-info-surface4
  ); /* Background color for surfaces with info tone and normal emphasis. */
  --wpds-color-bg-surface-info-weak: var(
  	--wpds-color-private-info-surface2
  ); /* Background color for surfaces with info tone and weak emphasis. */
  --wpds-color-bg-surface-neutral: var(
  	--wpds-color-private-bg-surface2
  ); /* Background color for surfaces with normal emphasis. */
  --wpds-color-bg-surface-neutral-strong: var(
  	--wpds-color-private-bg-surface3
  ); /* Background color for surfaces with strong emphasis. */
  --wpds-color-bg-surface-neutral-weak: var(
  	--wpds-color-private-bg-surface1
  ); /* Background color for surfaces with weak emphasis. */
  --wpds-color-bg-surface-success: var(
  	--wpds-color-private-success-surface4
  ); /* Background color for surfaces with success tone and normal emphasis. */
  --wpds-color-bg-surface-success-weak: var(
  	--wpds-color-private-success-surface2
  ); /* Background color for surfaces with success tone and weak emphasis. */
  --wpds-color-bg-surface-warning: var(
  	--wpds-color-private-warning-surface4
  ); /* Background color for surfaces with warning tone and normal emphasis. */
  --wpds-color-bg-surface-warning-weak: var(
  	--wpds-color-private-warning-surface2
  ); /* Background color for surfaces with warning tone and weak emphasis. */
  --wpds-color-bg-thumb-brand: var(
  	--wpds-color-private-primary-stroke3
  ); /* Background color for thumbs with a brand tone and normal emphasis (eg. slider thumb and filled track). */
  --wpds-color-bg-thumb-brand-active: var(
  	--wpds-color-private-primary-stroke3
  ); /* Background color for thumbs with a brand tone and normal emphasis (eg. slider thumb and filled track) that are hovered, focused, or active. */
  --wpds-color-bg-thumb-brand-disabled: var(
  	--wpds-color-private-bg-stroke2
  ); /* Background color for thumbs with a brand tone and normal emphasis (eg. slider thumb and filled track), in their disabled state. */
  --wpds-color-bg-thumb-neutral-weak: var(
  	--wpds-color-private-bg-stroke3
  ); /* Background color for thumbs with a neutral tone and weak emphasis (eg. scrollbar thumb). */
  --wpds-color-bg-thumb-neutral-weak-active: var(
  	--wpds-color-private-bg-stroke4
  ); /* Background color for thumbs with a neutral tone and weak emphasis (eg. scrollbar thumb) that are hovered, focused, or active. */
  --wpds-color-bg-track-neutral: var(
  	--wpds-color-private-bg-stroke2
  ); /* Background color for tracks with a neutral tone and normal emphasis (eg. slider or progressbar track). */
  --wpds-color-bg-track-neutral-weak: var(
  	--wpds-color-private-bg-stroke1
  ); /* Background color for tracks with a neutral tone and weak emphasis (eg. scrollbar track). */
  --wpds-color-fg-content-caution: var(
  	--wpds-color-private-caution-fg-surface4
  ); /* Foreground color for content like text with caution tone and normal emphasis. */
  --wpds-color-fg-content-caution-weak: var(
  	--wpds-color-private-caution-fg-surface3
  ); /* Foreground color for content like text with caution tone and weak emphasis. */
  --wpds-color-fg-content-error: var(
  	--wpds-color-private-error-fg-surface4
  ); /* Foreground color for content like text with error tone and normal emphasis. */
  --wpds-color-fg-content-error-weak: var(
  	--wpds-color-private-error-fg-surface3
  ); /* Foreground color for content like text with error tone and weak emphasis. */
  --wpds-color-fg-content-info: var(
  	--wpds-color-private-info-fg-surface4
  ); /* Foreground color for content like text with info tone and normal emphasis. */
  --wpds-color-fg-content-info-weak: var(
  	--wpds-color-private-info-fg-surface3
  ); /* Foreground color for content like text with info tone and weak emphasis. */
  --wpds-color-fg-content-neutral: var(
  	--wpds-color-private-bg-fg-surface4
  ); /* Foreground color for content like text with normal emphasis. */
  --wpds-color-fg-content-neutral-weak: var(
  	--wpds-color-private-bg-fg-surface3
  ); /* Foreground color for content like text with weak emphasis. */
  --wpds-color-fg-content-success: var(
  	--wpds-color-private-success-fg-surface4
  ); /* Foreground color for content like text with success tone and normal emphasis. */
  --wpds-color-fg-content-success-weak: var(
  	--wpds-color-private-success-fg-surface3
  ); /* Foreground color for content like text with success tone and weak emphasis. */
  --wpds-color-fg-content-warning: var(
  	--wpds-color-private-warning-fg-surface4
  ); /* Foreground color for content like text with warning tone and normal emphasis. */
  --wpds-color-fg-content-warning-weak: var(
  	--wpds-color-private-warning-fg-surface3
  ); /* Foreground color for content like text with warning tone and weak emphasis. */
  --wpds-color-fg-interactive-brand: var(
  	--wpds-color-private-primary-fg-surface3
  ); /* Foreground color for interactive elements with brand tone and normal emphasis. */
  --wpds-color-fg-interactive-brand-active: var(
  	--wpds-color-private-primary-fg-surface3
  ); /* Foreground color for interactive elements with brand tone and normal emphasis that are hovered, focused, or active. */
  --wpds-color-fg-interactive-brand-disabled: var(
  	--wpds-color-private-bg-fg-surface2
  ); /* Foreground color for interactive elements with brand tone and normal emphasis, in their disabled state. */
  --wpds-color-fg-interactive-brand-strong: var(
  	--wpds-color-private-primary-fg-fill
  ); /* Foreground color for interactive elements with brand tone and strong emphasis. */
  --wpds-color-fg-interactive-brand-strong-active: var(
  	--wpds-color-private-primary-fg-fill
  ); /* Foreground color for interactive elements with brand tone and strong emphasis that are hovered, focused, or active. */
  --wpds-color-fg-interactive-brand-strong-disabled: var(
  	--wpds-color-private-bg-fg-surface3
  ); /* Foreground color for interactive elements with brand tone and strong emphasis, in their disabled state. */
  --wpds-color-fg-interactive-neutral: var(
  	--wpds-color-private-bg-fg-surface4
  ); /* Foreground color for interactive elements with neutral tone and normal emphasis. */
  --wpds-color-fg-interactive-neutral-active: var(
  	--wpds-color-private-bg-fg-surface4
  ); /* Foreground color for interactive elements with neutral tone and normal emphasis that are hovered, focused, or active. */
  --wpds-color-fg-interactive-neutral-disabled: var(
  	--wpds-color-private-bg-fg-surface2
  ); /* Foreground color for interactive elements with neutral tone and normal emphasis, in their disabled state. */
  --wpds-color-fg-interactive-neutral-strong: var(
  	--wpds-color-private-bg-fg-fill-inverted
  ); /* Foreground color for interactive elements with neutral tone and strong emphasis. */
  --wpds-color-fg-interactive-neutral-strong-active: var(
  	--wpds-color-private-bg-fg-fill-inverted
  ); /* Foreground color for interactive elements with neutral tone and strong emphasis that are hovered, focused, or active. */
  --wpds-color-fg-interactive-neutral-strong-disabled: var(
  	--wpds-color-private-bg-fg-surface3
  ); /* Foreground color for interactive elements with neutral tone and strong emphasis, in their disabled state. */
  --wpds-color-fg-interactive-neutral-weak: var(
  	--wpds-color-private-bg-fg-surface3
  ); /* Foreground color for interactive elements with neutral tone and weak emphasis. */
  --wpds-color-fg-interactive-neutral-weak-disabled: var(
  	--wpds-color-private-bg-fg-surface2
  ); /* Foreground color for interactive elements with neutral tone and weak emphasis, in their disabled state. */
  --wpds-color-private-bg-bg-fill-dark: #1e1e1e;
  --wpds-color-private-bg-bg-fill-inverted1: #2f2f2f;
  --wpds-color-private-bg-bg-fill-inverted2: #1e1e1e;
  --wpds-color-private-bg-bg-fill1: #555555;
  --wpds-color-private-bg-bg-fill2: #474747;
  --wpds-color-private-bg-fg-fill: #f0f0f0;
  --wpds-color-private-bg-fg-fill-dark: #f0f0f0;
  --wpds-color-private-bg-fg-fill-inverted: #f0f0f0;
  --wpds-color-private-bg-fg-surface1: #aaaaaa;
  --wpds-color-private-bg-fg-surface2: #8a8a8a;
  --wpds-color-private-bg-fg-surface3: #6d6d6d;
  --wpds-color-private-bg-fg-surface4: #1e1e1e;
  --wpds-color-private-bg-stroke1: #d0d0d0;
  --wpds-color-private-bg-stroke2: #aeaeae;
  --wpds-color-private-bg-stroke3: #8a8a8a;
  --wpds-color-private-bg-stroke4: #6b6b6b;
  --wpds-color-private-bg-surface1: #f1f1f1;
  --wpds-color-private-bg-surface2: #f8f8f8;
  --wpds-color-private-bg-surface3: #ffffff;
  --wpds-color-private-bg-surface4: #ebebeb;
  --wpds-color-private-bg-surface5: #e0e0e0;
  --wpds-color-private-bg-surface6: #d0d0d0;
  --wpds-color-private-caution-bg-fill-dark: #1f1e1b;
  --wpds-color-private-caution-bg-fill-inverted1: #3d2d00;
  --wpds-color-private-caution-bg-fill-inverted2: #1f1e1b;
  --wpds-color-private-caution-bg-fill1: #f0d149;
  --wpds-color-private-caution-bg-fill2: #dabb2b;
  --wpds-color-private-caution-fg-fill: #1f1e1b;
  --wpds-color-private-caution-fg-fill-dark: #f6f1da;
  --wpds-color-private-caution-fg-fill-inverted: #f6f1da;
  --wpds-color-private-caution-fg-surface1: #c7a800;
  --wpds-color-private-caution-fg-surface2: #a68800;
  --wpds-color-private-caution-fg-surface3: #876a00;
  --wpds-color-private-caution-fg-surface4: #291d00;
  --wpds-color-private-caution-stroke1: #b9ac76;
  --wpds-color-private-caution-stroke2: #998e61;
  --wpds-color-private-caution-stroke3: #876a00;
  --wpds-color-private-caution-stroke4: #654e00;
  --wpds-color-private-caution-surface1: #faf1cd;
  --wpds-color-private-caution-surface2: #fdf9e7;
  --wpds-color-private-caution-surface3: #ffffff;
  --wpds-color-private-caution-surface4: #f8ebb6;
  --wpds-color-private-caution-surface5: #f4e08c;
  --wpds-color-private-caution-surface6: #e7d071;
  --wpds-color-private-error-bg-fill-dark: #231c1b;
  --wpds-color-private-error-bg-fill-inverted1: #6d0000;
  --wpds-color-private-error-bg-fill-inverted2: #231c1b;
  --wpds-color-private-error-bg-fill1: #cc1818;
  --wpds-color-private-error-bg-fill2: #b90000;
  --wpds-color-private-error-fg-fill: #f2efef;
  --wpds-color-private-error-fg-fill-dark: #f2efef;
  --wpds-color-private-error-fg-fill-inverted: #f2efef;
  --wpds-color-private-error-fg-surface1: #ff8171;
  --wpds-color-private-error-fg-surface2: #f74c40;
  --wpds-color-private-error-fg-surface3: #cc1818;
  --wpds-color-private-error-fg-surface4: #4a0000;
  --wpds-color-private-error-stroke1: #dc9085;
  --wpds-color-private-error-stroke2: #cd695d;
  --wpds-color-private-error-stroke3: #cc1818;
  --wpds-color-private-error-stroke4: #a40000;
  --wpds-color-private-error-surface1: #fcedeb;
  --wpds-color-private-error-surface2: #fdf6f5;
  --wpds-color-private-error-surface3: #ffffff;
  --wpds-color-private-error-surface4: #fae5e2;
  --wpds-color-private-error-surface5: #f8d8d3;
  --wpds-color-private-error-surface6: #f5c5be;
  --wpds-color-private-info-bg-fill-dark: #1b1e23;
  --wpds-color-private-info-bg-fill-inverted1: #00297a;
  --wpds-color-private-info-bg-fill-inverted2: #1b1e23;
  --wpds-color-private-info-bg-fill1: #0090ff;
  --wpds-color-private-info-bg-fill2: #007eec;
  --wpds-color-private-info-fg-fill: #1b1e23;
  --wpds-color-private-info-fg-fill-dark: #eff0f2;
  --wpds-color-private-info-fg-fill-inverted: #eff0f2;
  --wpds-color-private-info-fg-surface1: #4fb0ff;
  --wpds-color-private-info-fg-surface2: #008bfa;
  --wpds-color-private-info-fg-surface3: #006dd9;
  --wpds-color-private-info-fg-surface4: #001758;
  --wpds-color-private-info-stroke1: #8baed6;
  --wpds-color-private-info-stroke2: #5d90c8;
  --wpds-color-private-info-stroke3: #006dd9;
  --wpds-color-private-info-stroke4: #004bb5;
  --wpds-color-private-info-surface1: #eaf2fa;
  --wpds-color-private-info-surface2: #f5f9fd;
  --wpds-color-private-info-surface3: #ffffff;
  --wpds-color-private-info-surface4: #e1ecf8;
  --wpds-color-private-info-surface5: #d1e1f5;
  --wpds-color-private-info-surface6: #bad3f0;
  --wpds-color-private-primary-bg-fill-dark: #1b1e26;
  --wpds-color-private-primary-bg-fill-inverted1: #1401a5;
  --wpds-color-private-primary-bg-fill-inverted2: #1b1e26;
  --wpds-color-private-primary-bg-fill1: #3858e9;
  --wpds-color-private-primary-bg-fill2: #2c47d7;
  --wpds-color-private-primary-fg-fill: #eff0f2;
  --wpds-color-private-primary-fg-fill-dark: #eff0f2;
  --wpds-color-private-primary-fg-fill-inverted: #eff0f2;
  --wpds-color-private-primary-fg-surface1: #82a7ff;
  --wpds-color-private-primary-fg-surface2: #5780ff;
  --wpds-color-private-primary-fg-surface3: #3858e9;
  --wpds-color-private-primary-fg-surface4: #080071;
  --wpds-color-private-primary-stroke1: #92a4d0;
  --wpds-color-private-primary-stroke2: #6f85c0;
  --wpds-color-private-primary-stroke3: #3858e9;
  --wpds-color-private-primary-stroke4: #2236c7;
  --wpds-color-private-primary-surface1: #edf1fa;
  --wpds-color-private-primary-surface2: #f6f8fc;
  --wpds-color-private-primary-surface3: #ffffff;
  --wpds-color-private-primary-surface4: #e6ebf7;
  --wpds-color-private-primary-surface5: #d8e0f3;
  --wpds-color-private-primary-surface6: #c4d0ee;
  --wpds-color-private-success-bg-fill-dark: #1b1f1c;
  --wpds-color-private-success-bg-fill-inverted1: #003a00;
  --wpds-color-private-success-bg-fill-inverted2: #1b1f1c;
  --wpds-color-private-success-bg-fill1: #4ab866;
  --wpds-color-private-success-bg-fill2: #34a554;
  --wpds-color-private-success-fg-fill: #1b1f1c;
  --wpds-color-private-success-fg-fill-dark: #edf2ed;
  --wpds-color-private-success-fg-fill-inverted: #edf2ed;
  --wpds-color-private-success-fg-surface1: #52c06d;
  --wpds-color-private-success-fg-surface2: #2b9e4e;
  --wpds-color-private-success-fg-surface3: #008031;
  --wpds-color-private-success-fg-surface4: #002b00;
  --wpds-color-private-success-stroke1: #78bb84;
  --wpds-color-private-success-stroke2: #629a6c;
  --wpds-color-private-success-stroke3: #008031;
  --wpds-color-private-success-stroke4: #006113;
  --wpds-color-private-success-surface1: #def8e1;
  --wpds-color-private-success-surface2: #f0fcf2;
  --wpds-color-private-success-surface3: #ffffff;
  --wpds-color-private-success-surface4: #cef5d3;
  --wpds-color-private-success-surface5: #adf0b8;
  --wpds-color-private-success-surface6: #7be792;
  --wpds-color-private-warning-bg-fill-dark: #1f1e1b;
  --wpds-color-private-warning-bg-fill-inverted1: #462800;
  --wpds-color-private-warning-bg-fill-inverted2: #1f1e1b;
  --wpds-color-private-warning-bg-fill1: #f0b849;
  --wpds-color-private-warning-bg-fill2: #dba430;
  --wpds-color-private-warning-fg-fill: #1f1e1b;
  --wpds-color-private-warning-fg-fill-dark: #f3f0e9;
  --wpds-color-private-warning-fg-fill-inverted: #f3f0e9;
  --wpds-color-private-warning-fg-surface1: #d8a12b;
  --wpds-color-private-warning-fg-surface2: #b68000;
  --wpds-color-private-warning-fg-surface3: #976300;
  --wpds-color-private-warning-fg-surface4: #2f1800;
  --wpds-color-private-warning-stroke1: #c3a877;
  --wpds-color-private-warning-stroke2: #a18a61;
  --wpds-color-private-warning-stroke3: #976300;
  --wpds-color-private-warning-stroke4: #734700;
  --wpds-color-private-warning-surface1: #faefdd;
  --wpds-color-private-warning-surface2: #fdf7ee;
  --wpds-color-private-warning-surface3: #ffffff;
  --wpds-color-private-warning-surface4: #f8e9ce;
  --wpds-color-private-warning-surface5: #f5ddb2;
  --wpds-color-private-warning-surface6: #f0cb89;
  --wpds-color-stroke-focus-brand: var(
  	--wpds-color-private-primary-stroke3
  ); /* Accessible stroke color applied to focus rings. */
  --wpds-color-stroke-interactive-brand: var(
  	--wpds-color-private-primary-stroke3
  ); /* Accessible stroke color used for interactive brand-toned elements with normal emphasis. */
  --wpds-color-stroke-interactive-brand-active: var(
  	--wpds-color-private-primary-stroke4
  ); /* Accessible stroke color used for interactive brand-toned elements with normal emphasis that are hovered, focused, or active. */
  --wpds-color-stroke-interactive-brand-disabled: var(
  	--wpds-color-private-bg-stroke2
  ); /* Accessible stroke color used for interactive brand-toned elements with normal emphasis, in their disabled state. */
  --wpds-color-stroke-interactive-error-strong: var(
  	--wpds-color-private-error-stroke3
  ); /* Accessible stroke color used for interactive error-toned elements with strong emphasis. */
  --wpds-color-stroke-interactive-neutral: var(
  	--wpds-color-private-bg-stroke3
  ); /* Accessible stroke color used for interactive neutrally-toned elements with normal emphasis. */
  --wpds-color-stroke-interactive-neutral-active: var(
  	--wpds-color-private-bg-stroke4
  ); /* Accessible stroke color used for interactive neutrally-toned elements with normal emphasis that are hovered, focused, or active. */
  --wpds-color-stroke-interactive-neutral-disabled: var(
  	--wpds-color-private-bg-stroke2
  ); /* Accessible stroke color used for interactive neutrally-toned elements with normal emphasis, in their disabled state. */
  --wpds-color-stroke-interactive-neutral-strong: var(
  	--wpds-color-private-bg-stroke4
  ); /* Accessible stroke color used for interactive neutrally-toned elements with strong emphasis. */
  --wpds-color-stroke-surface-brand: var(
  	--wpds-color-private-primary-stroke1
  ); /* Decorative stroke color used to define brand-toned surface boundaries with normal emphasis. */
  --wpds-color-stroke-surface-brand-strong: var(
  	--wpds-color-private-primary-stroke3
  ); /* Decorative stroke color used to define neutrally-toned surface boundaries with strong emphasis. */
  --wpds-color-stroke-surface-error: var(
  	--wpds-color-private-error-stroke1
  ); /* Decorative stroke color used to define error-toned surface boundaries with normal emphasis. */
  --wpds-color-stroke-surface-error-strong: var(
  	--wpds-color-private-error-stroke3
  ); /* Decorative stroke color used to define error-toned surface boundaries with strong emphasis. */
  --wpds-color-stroke-surface-info: var(
  	--wpds-color-private-info-stroke1
  ); /* Decorative stroke color used to define info-toned surface boundaries with normal emphasis. */
  --wpds-color-stroke-surface-info-strong: var(
  	--wpds-color-private-info-stroke3
  ); /* Decorative stroke color used to define info-toned surface boundaries with strong emphasis. */
  --wpds-color-stroke-surface-neutral: var(
  	--wpds-color-private-bg-stroke2
  ); /* Decorative stroke color used to define neutrally-toned surface boundaries with normal emphasis. */
  --wpds-color-stroke-surface-neutral-strong: var(
  	--wpds-color-private-bg-stroke3
  ); /* Decorative stroke color used to define neutrally-toned surface boundaries with strong emphasis. */
  --wpds-color-stroke-surface-neutral-weak: var(
  	--wpds-color-private-bg-stroke1
  ); /* Decorative stroke color used to define neutrally-toned surface boundaries with weak emphasis. */
  --wpds-color-stroke-surface-success: var(
  	--wpds-color-private-success-stroke1
  ); /* Decorative stroke color used to define success-toned surface boundaries with normal emphasis. */
  --wpds-color-stroke-surface-success-strong: var(
  	--wpds-color-private-success-stroke3
  ); /* Decorative stroke color used to define success-toned surface boundaries with strong emphasis. */
  --wpds-color-stroke-surface-warning: var(
  	--wpds-color-private-warning-stroke1
  ); /* Decorative stroke color used to define warning-toned surface boundaries with normal emphasis. */
  --wpds-color-stroke-surface-warning-strong: var(
  	--wpds-color-private-warning-stroke3
  ); /* Decorative stroke color used to define warning-toned surface boundaries with strong emphasis. */
  --wpds-dimension-base: var(
  	--wpds-dimension-private-space-10
  ); /* Base dimension unit */
  --wpds-dimension-padding-surface-large: var(
  	--wpds-dimension-private-space-60
  ); /* Large spacing for surfaces */
  --wpds-dimension-padding-surface-medium: var(
  	--wpds-dimension-private-space-40
  ); /* Medium spacing for surfaces */
  --wpds-dimension-padding-surface-small: var(
  	--wpds-dimension-private-space-30
  ); /* Small spacing for surfaces */
  --wpds-dimension-padding-surface-x-small: var(
  	--wpds-dimension-private-space-20
  ); /* Extra small spacing for surfaces */
  --wpds-dimension-private-space-0: 0; /* Empty space */
  --wpds-dimension-private-space-10: 4px; /* 1x base spacing */
  --wpds-dimension-private-space-20: 8px; /* 2x base spacing */
  --wpds-dimension-private-space-30: 12px; /* 3x base spacing */
  --wpds-dimension-private-space-40: 16px; /* 4x base spacing */
  --wpds-dimension-private-space-50: 20px; /* 5x base spacing */
  --wpds-dimension-private-space-60: 24px; /* 6x base spacing */
  --wpds-dimension-private-space-70: 32px; /* 8x base spacing */
  --wpds-dimension-private-space-80: 40px; /* 10x base spacing */
  --wpds-dimension-private-space-90: 48px; /* 12x base spacing */
  --wpds-elevation-large: 0 5px 15px 0 #00000014, 0 15px 27px 0 #00000012,
  	0 30px 36px 0 #0000000a, 0 50px 43px 0 #00000005; /* For components that confirm decisions or handle necessary interruptions. Example: Modals. */
  --wpds-elevation-medium: 0 2px 3px 0 #0000000d, 0 4px 5px 0 #0000000a,
  	0 12px 12px 0 #00000008, 0 16px 16px 0 #00000005; /* For components that offer additional actions. Example: Menus, Command Palette */
  --wpds-elevation-small: 0 1px 2px 0 #0000000d, 0 2px 3px 0 #0000000a,
  	0 6px 6px 0 #00000008, 0 8px 8px 0 #00000005; /* For components that provide contextual feedback without being intrusive. Generally non-interruptive. Example: Tooltips, Snackbar. */
  --wpds-elevation-x-small: 0 1px 1px 0 #00000008, 0 1px 2px 0 #00000005,
  	0 3px 3px 0 #00000005, 0 4px 4px 0 #00000003; /* For sections and containers that group related content and controls, which may overlap other content. Example: Preview Frame. */
  --wpds-font-family-body: -apple-system, system-ui, "Segoe UI", "Roboto",
  	"Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", sans-serif; /* Body font family */
  --wpds-font-family-heading: -apple-system, system-ui, "Segoe UI", "Roboto",
  	"Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", sans-serif; /* Headings font family */
  --wpds-font-family-mono: "Menlo", "Consolas", monaco, monospace; /* Monospace font family */
  --wpds-font-line-height-2x-large: 40px; /* 2X large line height */
  --wpds-font-line-height-large: 28px; /* Large line height */
  --wpds-font-line-height-medium: 24px; /* Medium line height */
  --wpds-font-line-height-small: 20px; /* Small line height */
  --wpds-font-line-height-x-large: 32px; /* Extra large line height */
  --wpds-font-line-height-x-small: 16px; /* Extra small line height */
  --wpds-font-size-2x-large: 32px; /* 2X large font size */
  --wpds-font-size-large: 15px; /* Large font size */
  --wpds-font-size-medium: 13px; /* Medium font size */
  --wpds-font-size-small: 12px; /* Small font size */
  --wpds-font-size-x-large: 20px; /* Extra large font size */
  --wpds-font-size-x-small: 11px; /* Extra small font size */
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  :root {
    --wpds-border-width-focus: 1.5px; /* Border width for focus ring */
  }
}
/**
 * Colors
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
 * Typography
 */
/**
 * Breakpoints & Media Queries
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
.admin-ui-page {
  display: flex;
  height: 100%;
  background-color: #fff;
  color: #2f2f2f;
  position: relative;
  z-index: 1;
  flex-flow: column;
  container: admin-ui-page/inline-size;
}

@media not (prefers-reduced-motion) {
  .admin-ui-page {
    transition: width ease-out 0.2s;
  }
}
.admin-ui-page__header {
  padding: 16px 48px;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
  position: sticky;
  top: 0;
}

@container (max-width: 430px) {
  .admin-ui-page__header {
    padding: 16px 24px;
  }
}
.admin-ui-page__header-subtitle {
  padding-block-end: 8px;
  color: #757575;
  font-family: -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  margin: 0;
}

.admin-ui-page__content {
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.admin-ui-page__content.has-padding {
  padding: 16px 20px;
}

@container (max-width: 430px) {
  .admin-ui-page__content.has-padding {
    padding: 16px 24px;
  }
}
.show-icon-labels .admin-ui-page__header-actions .components-button.has-icon {
  width: auto;
  padding: 0 8px;
}

.show-icon-labels .admin-ui-page__header-actions .components-button.has-icon svg {
  display: none;
}

.show-icon-labels .admin-ui-page__header-actions .components-button.has-icon::after {
  content: attr(aria-label);
  font-size: 12px;
}

/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
.boot-layout-container .boot-layout {
  height: calc(100vh - 32px);
}

body:has(.boot-layout-container) {
  background: #1d2327;
  overflow: hidden;
}

#wpcontent {
  padding-left: 0;
}

#wpbody-content {
  padding-bottom: 0;
}

#wpfooter {
  display: none;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnL2d1dGVuYmVyZy9wYWNrYWdlcy9ib290L3NyYyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvdGhlbWUvc3JjL3ByZWJ1aWx0L2Nzcy9kZXNpZ24tdG9rZW5zLmNzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2FkbWluLXVpL2J1aWxkLXN0eWxlL3N0eWxlLmNzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL19jb2xvcnMuc2NzcyIsInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQUE7QUFBQTtBQUlBO0VBQ0M7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0VBQ0E7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0VBQ0E7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0VBQ0E7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0FBQUE7QUFBQSxLQUVHO0VBQ0g7QUFBQTtBQUFBLEtBRUc7RUFDSDtBQUFBO0FBQUEsS0FFRztFQUNIO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFBQSxxREFDbUQ7RUFDbkQ7QUFBQSxxREFDbUQ7RUFDbkQ7QUFBQSxpREFDK0M7RUFDL0M7QUFBQSxpREFDK0M7RUFDL0M7QUFBQSx1RUFDcUU7RUFDckU7QUFBQSx1RUFDcUU7RUFDckU7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUdEO0VBQ0M7SUFDQzs7O0FDdmRGO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBR0E7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFFRjtFQUNFO0lBQ0U7OztBQUlKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBRUY7RUFDRTtJQUNFOzs7QUFJSjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOzs7QUFFRjtFQUNFOzs7QUFFRjtFQUNFO0lBQ0U7OztBQUlKO0VBQ0U7RUFDQTs7O0FBRUY7RUFDRTs7O0FBRUY7RUFDRTtFQUNBOzs7QUNwSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUNBQTtBQUFBO0FBQUE7QURVQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUE2QkE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQXdCQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBQUE7QUFtQkE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUU3SkE7RUFDQzs7O0FBR0Q7RUFDQztFQUNBOzs7QUFHRDtFQUNDOzs7QUFHRDtFQUNDOzs7QUFHRDtFQUNDIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIEF1dG9nZW5lcmF0ZWQgYnkg4puLIFRlcnJhenpvLiBETyBOT1QgRURJVCFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuOnJvb3Qge1xuXHQtLXdwZHMtYm9yZGVyLXJhZGl1cy1sYXJnZTogOHB4OyAvKiBMYXJnZSByYWRpdXMgKi9cblx0LS13cGRzLWJvcmRlci1yYWRpdXMtbWVkaXVtOiA0cHg7IC8qIE1lZGl1bSByYWRpdXMgKi9cblx0LS13cGRzLWJvcmRlci1yYWRpdXMtc21hbGw6IDJweDsgLyogU21hbGwgcmFkaXVzICovXG5cdC0td3Bkcy1ib3JkZXItcmFkaXVzLXgtc21hbGw6IDFweDsgLyogRXh0cmEgc21hbGwgcmFkaXVzICovXG5cdC0td3Bkcy1ib3JkZXItd2lkdGgtZm9jdXM6IDJweDsgLyogQm9yZGVyIHdpZHRoIGZvciBmb2N1cyByaW5nICovXG5cdC0td3Bkcy1jb2xvci1iZy1pbnRlcmFjdGl2ZS1icmFuZDogIzAwMDAwMDAwOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIGJyYW5kIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWJnLWludGVyYWN0aXZlLWJyYW5kLWFjdGl2ZTogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktc3VyZmFjZTJcblx0KTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBicmFuZCB0b25lIGFuZCBub3JtYWwgZW1waGFzaXMgdGhhdCBhcmUgaG92ZXJlZCwgZm9jdXNlZCwgb3IgYWN0aXZlLiAqL1xuXHQtLXdwZHMtY29sb3ItYmctaW50ZXJhY3RpdmUtYnJhbmQtZGlzYWJsZWQ6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdXJmYWNlNVxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIGJyYW5kIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcywgaW4gdGhlaXIgZGlzYWJsZWQgc3RhdGUuICovXG5cdC0td3Bkcy1jb2xvci1iZy1pbnRlcmFjdGl2ZS1icmFuZC1zdHJvbmc6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1wcmltYXJ5LWJnLWZpbGwxXG5cdCk7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIGludGVyYWN0aXZlIGVsZW1lbnRzIHdpdGggYnJhbmQgdG9uZSBhbmQgc3Ryb25nIGVtcGhhc2lzLiAqL1xuXHQtLXdwZHMtY29sb3ItYmctaW50ZXJhY3RpdmUtYnJhbmQtc3Ryb25nLWFjdGl2ZTogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktYmctZmlsbDJcblx0KTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBicmFuZCB0b25lIGFuZCBzdHJvbmcgZW1waGFzaXMgdGhhdCBhcmUgaG92ZXJlZCwgZm9jdXNlZCwgb3IgYWN0aXZlLiAqL1xuXHQtLXdwZHMtY29sb3ItYmctaW50ZXJhY3RpdmUtYnJhbmQtc3Ryb25nLWRpc2FibGVkOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctc3VyZmFjZTZcblx0KTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBicmFuZCB0b25lIGFuZCBzdHJvbmcgZW1waGFzaXMsIGluIHRoZWlyIGRpc2FibGVkIHN0YXRlLiAqL1xuXHQtLXdwZHMtY29sb3ItYmctaW50ZXJhY3RpdmUtYnJhbmQtd2VhazogIzAwMDAwMDAwOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIGJyYW5kIHRvbmUgYW5kIHdlYWsgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1iZy1pbnRlcmFjdGl2ZS1icmFuZC13ZWFrLWFjdGl2ZTogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktc3VyZmFjZTRcblx0KTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBicmFuZCB0b25lIGFuZCB3ZWFrIGVtcGhhc2lzIHRoYXQgYXJlIGhvdmVyZWQsIGZvY3VzZWQsIG9yIGFjdGl2ZS4gKi9cblx0LS13cGRzLWNvbG9yLWJnLWludGVyYWN0aXZlLWJyYW5kLXdlYWstZGlzYWJsZWQ6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdXJmYWNlNVxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIGJyYW5kIHRvbmUgYW5kIHdlYWsgZW1waGFzaXMsIGluIHRoZWlyIGRpc2FibGVkIHN0YXRlLiAqL1xuXHQtLXdwZHMtY29sb3ItYmctaW50ZXJhY3RpdmUtbmV1dHJhbDogIzAwMDAwMDAwOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIG5ldXRyYWwgdG9uZSBhbmQgbm9ybWFsIGVtcGhhc2lzLiAqL1xuXHQtLXdwZHMtY29sb3ItYmctaW50ZXJhY3RpdmUtbmV1dHJhbC1hY3RpdmU6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdXJmYWNlNFxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIG5ldXRyYWwgdG9uZSBhbmQgbm9ybWFsIGVtcGhhc2lzIHRoYXQgYXJlIGhvdmVyZWQsIGZvY3VzZWQsIG9yIGFjdGl2ZS4gKi9cblx0LS13cGRzLWNvbG9yLWJnLWludGVyYWN0aXZlLW5ldXRyYWwtZGlzYWJsZWQ6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdXJmYWNlNVxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIG5ldXRyYWwgdG9uZSBhbmQgbm9ybWFsIGVtcGhhc2lzLCBpbiB0aGVpciBkaXNhYmxlZCBzdGF0ZS4gKi9cblx0LS13cGRzLWNvbG9yLWJnLWludGVyYWN0aXZlLW5ldXRyYWwtc3Ryb25nOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctYmctZmlsbC1pbnZlcnRlZDFcblx0KTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBuZXV0cmFsIHRvbmUgYW5kIHN0cm9uZyBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWJnLWludGVyYWN0aXZlLW5ldXRyYWwtc3Ryb25nLWFjdGl2ZTogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLWJnLWZpbGwtaW52ZXJ0ZWQyXG5cdCk7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIGludGVyYWN0aXZlIGVsZW1lbnRzIHdpdGggbmV1dHJhbCB0b25lIGFuZCBzdHJvbmcgZW1waGFzaXMgdGhhdCBhcmUgaG92ZXJlZCwgZm9jdXNlZCwgb3IgYWN0aXZlLiAqL1xuXHQtLXdwZHMtY29sb3ItYmctaW50ZXJhY3RpdmUtbmV1dHJhbC1zdHJvbmctZGlzYWJsZWQ6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdXJmYWNlNlxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIG5ldXRyYWwgdG9uZSBhbmQgc3Ryb25nIGVtcGhhc2lzLCBpbiB0aGVpciBkaXNhYmxlZCBzdGF0ZS4gKi9cblx0LS13cGRzLWNvbG9yLWJnLWludGVyYWN0aXZlLW5ldXRyYWwtd2VhazogIzAwMDAwMDAwOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIG5ldXRyYWwgdG9uZSBhbmQgd2VhayBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWJnLWludGVyYWN0aXZlLW5ldXRyYWwtd2Vhay1hY3RpdmU6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdXJmYWNlNFxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIG5ldXRyYWwgdG9uZSBhbmQgd2VhayBlbXBoYXNpcyB0aGF0IGFyZSBob3ZlcmVkLCBmb2N1c2VkLCBvciBhY3RpdmUuICovXG5cdC0td3Bkcy1jb2xvci1iZy1pbnRlcmFjdGl2ZS1uZXV0cmFsLXdlYWstZGlzYWJsZWQ6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdXJmYWNlNVxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIG5ldXRyYWwgdG9uZSBhbmQgd2VhayBlbXBoYXNpcywgaW4gdGhlaXIgZGlzYWJsZWQgc3RhdGUuICovXG5cdC0td3Bkcy1jb2xvci1iZy1zdXJmYWNlLWJyYW5kOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtcHJpbWFyeS1zdXJmYWNlMVxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBzdXJmYWNlcyB3aXRoIGJyYW5kIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWJnLXN1cmZhY2UtY2F1dGlvbjogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWNhdXRpb24tc3VyZmFjZTRcblx0KTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3Igc3VyZmFjZXMgd2l0aCBjYXV0aW9uIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWJnLXN1cmZhY2UtY2F1dGlvbi13ZWFrOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtY2F1dGlvbi1zdXJmYWNlMlxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBzdXJmYWNlcyB3aXRoIGNhdXRpb24gdG9uZSBhbmQgd2VhayBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWJnLXN1cmZhY2UtZXJyb3I6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1lcnJvci1zdXJmYWNlNFxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBzdXJmYWNlcyB3aXRoIGVycm9yIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWJnLXN1cmZhY2UtZXJyb3Itd2VhazogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWVycm9yLXN1cmZhY2UyXG5cdCk7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIHN1cmZhY2VzIHdpdGggZXJyb3IgdG9uZSBhbmQgd2VhayBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWJnLXN1cmZhY2UtaW5mbzogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWluZm8tc3VyZmFjZTRcblx0KTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3Igc3VyZmFjZXMgd2l0aCBpbmZvIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWJnLXN1cmZhY2UtaW5mby13ZWFrOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtaW5mby1zdXJmYWNlMlxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBzdXJmYWNlcyB3aXRoIGluZm8gdG9uZSBhbmQgd2VhayBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWJnLXN1cmZhY2UtbmV1dHJhbDogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN1cmZhY2UyXG5cdCk7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIHN1cmZhY2VzIHdpdGggbm9ybWFsIGVtcGhhc2lzLiAqL1xuXHQtLXdwZHMtY29sb3ItYmctc3VyZmFjZS1uZXV0cmFsLXN0cm9uZzogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN1cmZhY2UzXG5cdCk7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIHN1cmZhY2VzIHdpdGggc3Ryb25nIGVtcGhhc2lzLiAqL1xuXHQtLXdwZHMtY29sb3ItYmctc3VyZmFjZS1uZXV0cmFsLXdlYWs6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdXJmYWNlMVxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBzdXJmYWNlcyB3aXRoIHdlYWsgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1iZy1zdXJmYWNlLXN1Y2Nlc3M6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1zdWNjZXNzLXN1cmZhY2U0XG5cdCk7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIHN1cmZhY2VzIHdpdGggc3VjY2VzcyB0b25lIGFuZCBub3JtYWwgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1iZy1zdXJmYWNlLXN1Y2Nlc3Mtd2VhazogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXN1Y2Nlc3Mtc3VyZmFjZTJcblx0KTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3Igc3VyZmFjZXMgd2l0aCBzdWNjZXNzIHRvbmUgYW5kIHdlYWsgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1iZy1zdXJmYWNlLXdhcm5pbmc6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS13YXJuaW5nLXN1cmZhY2U0XG5cdCk7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIHN1cmZhY2VzIHdpdGggd2FybmluZyB0b25lIGFuZCBub3JtYWwgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1iZy1zdXJmYWNlLXdhcm5pbmctd2VhazogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXdhcm5pbmctc3VyZmFjZTJcblx0KTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3Igc3VyZmFjZXMgd2l0aCB3YXJuaW5nIHRvbmUgYW5kIHdlYWsgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1iZy10aHVtYi1icmFuZDogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktc3Ryb2tlM1xuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciB0aHVtYnMgd2l0aCBhIGJyYW5kIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcyAoZWcuIHNsaWRlciB0aHVtYiBhbmQgZmlsbGVkIHRyYWNrKS4gKi9cblx0LS13cGRzLWNvbG9yLWJnLXRodW1iLWJyYW5kLWFjdGl2ZTogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktc3Ryb2tlM1xuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciB0aHVtYnMgd2l0aCBhIGJyYW5kIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcyAoZWcuIHNsaWRlciB0aHVtYiBhbmQgZmlsbGVkIHRyYWNrKSB0aGF0IGFyZSBob3ZlcmVkLCBmb2N1c2VkLCBvciBhY3RpdmUuICovXG5cdC0td3Bkcy1jb2xvci1iZy10aHVtYi1icmFuZC1kaXNhYmxlZDogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN0cm9rZTJcblx0KTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3IgdGh1bWJzIHdpdGggYSBicmFuZCB0b25lIGFuZCBub3JtYWwgZW1waGFzaXMgKGVnLiBzbGlkZXIgdGh1bWIgYW5kIGZpbGxlZCB0cmFjayksIGluIHRoZWlyIGRpc2FibGVkIHN0YXRlLiAqL1xuXHQtLXdwZHMtY29sb3ItYmctdGh1bWItbmV1dHJhbC13ZWFrOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctc3Ryb2tlM1xuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciB0aHVtYnMgd2l0aCBhIG5ldXRyYWwgdG9uZSBhbmQgd2VhayBlbXBoYXNpcyAoZWcuIHNjcm9sbGJhciB0aHVtYikuICovXG5cdC0td3Bkcy1jb2xvci1iZy10aHVtYi1uZXV0cmFsLXdlYWstYWN0aXZlOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctc3Ryb2tlNFxuXHQpOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciB0aHVtYnMgd2l0aCBhIG5ldXRyYWwgdG9uZSBhbmQgd2VhayBlbXBoYXNpcyAoZWcuIHNjcm9sbGJhciB0aHVtYikgdGhhdCBhcmUgaG92ZXJlZCwgZm9jdXNlZCwgb3IgYWN0aXZlLiAqL1xuXHQtLXdwZHMtY29sb3ItYmctdHJhY2stbmV1dHJhbDogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN0cm9rZTJcblx0KTsgLyogQmFja2dyb3VuZCBjb2xvciBmb3IgdHJhY2tzIHdpdGggYSBuZXV0cmFsIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcyAoZWcuIHNsaWRlciBvciBwcm9ncmVzc2JhciB0cmFjaykuICovXG5cdC0td3Bkcy1jb2xvci1iZy10cmFjay1uZXV0cmFsLXdlYWs6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdHJva2UxXG5cdCk7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIHRyYWNrcyB3aXRoIGEgbmV1dHJhbCB0b25lIGFuZCB3ZWFrIGVtcGhhc2lzIChlZy4gc2Nyb2xsYmFyIHRyYWNrKS4gKi9cblx0LS13cGRzLWNvbG9yLWZnLWNvbnRlbnQtY2F1dGlvbjogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWNhdXRpb24tZmctc3VyZmFjZTRcblx0KTsgLyogRm9yZWdyb3VuZCBjb2xvciBmb3IgY29udGVudCBsaWtlIHRleHQgd2l0aCBjYXV0aW9uIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWZnLWNvbnRlbnQtY2F1dGlvbi13ZWFrOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtY2F1dGlvbi1mZy1zdXJmYWNlM1xuXHQpOyAvKiBGb3JlZ3JvdW5kIGNvbG9yIGZvciBjb250ZW50IGxpa2UgdGV4dCB3aXRoIGNhdXRpb24gdG9uZSBhbmQgd2VhayBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWZnLWNvbnRlbnQtZXJyb3I6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1lcnJvci1mZy1zdXJmYWNlNFxuXHQpOyAvKiBGb3JlZ3JvdW5kIGNvbG9yIGZvciBjb250ZW50IGxpa2UgdGV4dCB3aXRoIGVycm9yIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWZnLWNvbnRlbnQtZXJyb3Itd2VhazogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWVycm9yLWZnLXN1cmZhY2UzXG5cdCk7IC8qIEZvcmVncm91bmQgY29sb3IgZm9yIGNvbnRlbnQgbGlrZSB0ZXh0IHdpdGggZXJyb3IgdG9uZSBhbmQgd2VhayBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWZnLWNvbnRlbnQtaW5mbzogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWluZm8tZmctc3VyZmFjZTRcblx0KTsgLyogRm9yZWdyb3VuZCBjb2xvciBmb3IgY29udGVudCBsaWtlIHRleHQgd2l0aCBpbmZvIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWZnLWNvbnRlbnQtaW5mby13ZWFrOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtaW5mby1mZy1zdXJmYWNlM1xuXHQpOyAvKiBGb3JlZ3JvdW5kIGNvbG9yIGZvciBjb250ZW50IGxpa2UgdGV4dCB3aXRoIGluZm8gdG9uZSBhbmQgd2VhayBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWZnLWNvbnRlbnQtbmV1dHJhbDogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLWZnLXN1cmZhY2U0XG5cdCk7IC8qIEZvcmVncm91bmQgY29sb3IgZm9yIGNvbnRlbnQgbGlrZSB0ZXh0IHdpdGggbm9ybWFsIGVtcGhhc2lzLiAqL1xuXHQtLXdwZHMtY29sb3ItZmctY29udGVudC1uZXV0cmFsLXdlYWs6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1mZy1zdXJmYWNlM1xuXHQpOyAvKiBGb3JlZ3JvdW5kIGNvbG9yIGZvciBjb250ZW50IGxpa2UgdGV4dCB3aXRoIHdlYWsgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1mZy1jb250ZW50LXN1Y2Nlc3M6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1zdWNjZXNzLWZnLXN1cmZhY2U0XG5cdCk7IC8qIEZvcmVncm91bmQgY29sb3IgZm9yIGNvbnRlbnQgbGlrZSB0ZXh0IHdpdGggc3VjY2VzcyB0b25lIGFuZCBub3JtYWwgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1mZy1jb250ZW50LXN1Y2Nlc3Mtd2VhazogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXN1Y2Nlc3MtZmctc3VyZmFjZTNcblx0KTsgLyogRm9yZWdyb3VuZCBjb2xvciBmb3IgY29udGVudCBsaWtlIHRleHQgd2l0aCBzdWNjZXNzIHRvbmUgYW5kIHdlYWsgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1mZy1jb250ZW50LXdhcm5pbmc6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS13YXJuaW5nLWZnLXN1cmZhY2U0XG5cdCk7IC8qIEZvcmVncm91bmQgY29sb3IgZm9yIGNvbnRlbnQgbGlrZSB0ZXh0IHdpdGggd2FybmluZyB0b25lIGFuZCBub3JtYWwgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1mZy1jb250ZW50LXdhcm5pbmctd2VhazogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXdhcm5pbmctZmctc3VyZmFjZTNcblx0KTsgLyogRm9yZWdyb3VuZCBjb2xvciBmb3IgY29udGVudCBsaWtlIHRleHQgd2l0aCB3YXJuaW5nIHRvbmUgYW5kIHdlYWsgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1mZy1pbnRlcmFjdGl2ZS1icmFuZDogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktZmctc3VyZmFjZTNcblx0KTsgLyogRm9yZWdyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBicmFuZCB0b25lIGFuZCBub3JtYWwgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1mZy1pbnRlcmFjdGl2ZS1icmFuZC1hY3RpdmU6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1wcmltYXJ5LWZnLXN1cmZhY2UzXG5cdCk7IC8qIEZvcmVncm91bmQgY29sb3IgZm9yIGludGVyYWN0aXZlIGVsZW1lbnRzIHdpdGggYnJhbmQgdG9uZSBhbmQgbm9ybWFsIGVtcGhhc2lzIHRoYXQgYXJlIGhvdmVyZWQsIGZvY3VzZWQsIG9yIGFjdGl2ZS4gKi9cblx0LS13cGRzLWNvbG9yLWZnLWludGVyYWN0aXZlLWJyYW5kLWRpc2FibGVkOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctZmctc3VyZmFjZTJcblx0KTsgLyogRm9yZWdyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBicmFuZCB0b25lIGFuZCBub3JtYWwgZW1waGFzaXMsIGluIHRoZWlyIGRpc2FibGVkIHN0YXRlLiAqL1xuXHQtLXdwZHMtY29sb3ItZmctaW50ZXJhY3RpdmUtYnJhbmQtc3Ryb25nOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtcHJpbWFyeS1mZy1maWxsXG5cdCk7IC8qIEZvcmVncm91bmQgY29sb3IgZm9yIGludGVyYWN0aXZlIGVsZW1lbnRzIHdpdGggYnJhbmQgdG9uZSBhbmQgc3Ryb25nIGVtcGhhc2lzLiAqL1xuXHQtLXdwZHMtY29sb3ItZmctaW50ZXJhY3RpdmUtYnJhbmQtc3Ryb25nLWFjdGl2ZTogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktZmctZmlsbFxuXHQpOyAvKiBGb3JlZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIGJyYW5kIHRvbmUgYW5kIHN0cm9uZyBlbXBoYXNpcyB0aGF0IGFyZSBob3ZlcmVkLCBmb2N1c2VkLCBvciBhY3RpdmUuICovXG5cdC0td3Bkcy1jb2xvci1mZy1pbnRlcmFjdGl2ZS1icmFuZC1zdHJvbmctZGlzYWJsZWQ6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1mZy1zdXJmYWNlM1xuXHQpOyAvKiBGb3JlZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIGJyYW5kIHRvbmUgYW5kIHN0cm9uZyBlbXBoYXNpcywgaW4gdGhlaXIgZGlzYWJsZWQgc3RhdGUuICovXG5cdC0td3Bkcy1jb2xvci1mZy1pbnRlcmFjdGl2ZS1uZXV0cmFsOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctZmctc3VyZmFjZTRcblx0KTsgLyogRm9yZWdyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBuZXV0cmFsIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWZnLWludGVyYWN0aXZlLW5ldXRyYWwtYWN0aXZlOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctZmctc3VyZmFjZTRcblx0KTsgLyogRm9yZWdyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBuZXV0cmFsIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcyB0aGF0IGFyZSBob3ZlcmVkLCBmb2N1c2VkLCBvciBhY3RpdmUuICovXG5cdC0td3Bkcy1jb2xvci1mZy1pbnRlcmFjdGl2ZS1uZXV0cmFsLWRpc2FibGVkOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctZmctc3VyZmFjZTJcblx0KTsgLyogRm9yZWdyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBuZXV0cmFsIHRvbmUgYW5kIG5vcm1hbCBlbXBoYXNpcywgaW4gdGhlaXIgZGlzYWJsZWQgc3RhdGUuICovXG5cdC0td3Bkcy1jb2xvci1mZy1pbnRlcmFjdGl2ZS1uZXV0cmFsLXN0cm9uZzogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLWZnLWZpbGwtaW52ZXJ0ZWRcblx0KTsgLyogRm9yZWdyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBuZXV0cmFsIHRvbmUgYW5kIHN0cm9uZyBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLWZnLWludGVyYWN0aXZlLW5ldXRyYWwtc3Ryb25nLWFjdGl2ZTogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLWZnLWZpbGwtaW52ZXJ0ZWRcblx0KTsgLyogRm9yZWdyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBuZXV0cmFsIHRvbmUgYW5kIHN0cm9uZyBlbXBoYXNpcyB0aGF0IGFyZSBob3ZlcmVkLCBmb2N1c2VkLCBvciBhY3RpdmUuICovXG5cdC0td3Bkcy1jb2xvci1mZy1pbnRlcmFjdGl2ZS1uZXV0cmFsLXN0cm9uZy1kaXNhYmxlZDogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLWZnLXN1cmZhY2UzXG5cdCk7IC8qIEZvcmVncm91bmQgY29sb3IgZm9yIGludGVyYWN0aXZlIGVsZW1lbnRzIHdpdGggbmV1dHJhbCB0b25lIGFuZCBzdHJvbmcgZW1waGFzaXMsIGluIHRoZWlyIGRpc2FibGVkIHN0YXRlLiAqL1xuXHQtLXdwZHMtY29sb3ItZmctaW50ZXJhY3RpdmUtbmV1dHJhbC13ZWFrOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctZmctc3VyZmFjZTNcblx0KTsgLyogRm9yZWdyb3VuZCBjb2xvciBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHMgd2l0aCBuZXV0cmFsIHRvbmUgYW5kIHdlYWsgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1mZy1pbnRlcmFjdGl2ZS1uZXV0cmFsLXdlYWstZGlzYWJsZWQ6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1mZy1zdXJmYWNlMlxuXHQpOyAvKiBGb3JlZ3JvdW5kIGNvbG9yIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyB3aXRoIG5ldXRyYWwgdG9uZSBhbmQgd2VhayBlbXBoYXNpcywgaW4gdGhlaXIgZGlzYWJsZWQgc3RhdGUuICovXG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLWJnLWZpbGwtZGFyazogIzFlMWUxZTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctYmctZmlsbC1pbnZlcnRlZDE6ICMyZjJmMmY7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLWJnLWZpbGwtaW52ZXJ0ZWQyOiAjMWUxZTFlO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1iZy1maWxsMTogIzU1NTU1NTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctYmctZmlsbDI6ICM0NzQ3NDc7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLWZnLWZpbGw6ICNmMGYwZjA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLWZnLWZpbGwtZGFyazogI2YwZjBmMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctZmctZmlsbC1pbnZlcnRlZDogI2YwZjBmMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctZmctc3VyZmFjZTE6ICNhYWFhYWE7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLWZnLXN1cmZhY2UyOiAjOGE4YThhO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1mZy1zdXJmYWNlMzogIzZkNmQ2ZDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctZmctc3VyZmFjZTQ6ICMxZTFlMWU7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN0cm9rZTE6ICNkMGQwZDA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN0cm9rZTI6ICNhZWFlYWU7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN0cm9rZTM6ICM4YThhOGE7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN0cm9rZTQ6ICM2YjZiNmI7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN1cmZhY2UxOiAjZjFmMWYxO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdXJmYWNlMjogI2Y4ZjhmODtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctc3VyZmFjZTM6ICNmZmZmZmY7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN1cmZhY2U0OiAjZWJlYmViO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdXJmYWNlNTogI2UwZTBlMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctc3VyZmFjZTY6ICNkMGQwZDA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWNhdXRpb24tYmctZmlsbC1kYXJrOiAjMWYxZTFiO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1jYXV0aW9uLWJnLWZpbGwtaW52ZXJ0ZWQxOiAjM2QyZDAwO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1jYXV0aW9uLWJnLWZpbGwtaW52ZXJ0ZWQyOiAjMWYxZTFiO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1jYXV0aW9uLWJnLWZpbGwxOiAjZjBkMTQ5O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1jYXV0aW9uLWJnLWZpbGwyOiAjZGFiYjJiO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1jYXV0aW9uLWZnLWZpbGw6ICMxZjFlMWI7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWNhdXRpb24tZmctZmlsbC1kYXJrOiAjZjZmMWRhO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1jYXV0aW9uLWZnLWZpbGwtaW52ZXJ0ZWQ6ICNmNmYxZGE7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWNhdXRpb24tZmctc3VyZmFjZTE6ICNjN2E4MDA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWNhdXRpb24tZmctc3VyZmFjZTI6ICNhNjg4MDA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWNhdXRpb24tZmctc3VyZmFjZTM6ICM4NzZhMDA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWNhdXRpb24tZmctc3VyZmFjZTQ6ICMyOTFkMDA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWNhdXRpb24tc3Ryb2tlMTogI2I5YWM3Njtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtY2F1dGlvbi1zdHJva2UyOiAjOTk4ZTYxO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1jYXV0aW9uLXN0cm9rZTM6ICM4NzZhMDA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWNhdXRpb24tc3Ryb2tlNDogIzY1NGUwMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtY2F1dGlvbi1zdXJmYWNlMTogI2ZhZjFjZDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtY2F1dGlvbi1zdXJmYWNlMjogI2ZkZjllNztcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtY2F1dGlvbi1zdXJmYWNlMzogI2ZmZmZmZjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtY2F1dGlvbi1zdXJmYWNlNDogI2Y4ZWJiNjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtY2F1dGlvbi1zdXJmYWNlNTogI2Y0ZTA4Yztcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtY2F1dGlvbi1zdXJmYWNlNjogI2U3ZDA3MTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtZXJyb3ItYmctZmlsbC1kYXJrOiAjMjMxYzFiO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1lcnJvci1iZy1maWxsLWludmVydGVkMTogIzZkMDAwMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtZXJyb3ItYmctZmlsbC1pbnZlcnRlZDI6ICMyMzFjMWI7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWVycm9yLWJnLWZpbGwxOiAjY2MxODE4O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1lcnJvci1iZy1maWxsMjogI2I5MDAwMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtZXJyb3ItZmctZmlsbDogI2YyZWZlZjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtZXJyb3ItZmctZmlsbC1kYXJrOiAjZjJlZmVmO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1lcnJvci1mZy1maWxsLWludmVydGVkOiAjZjJlZmVmO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1lcnJvci1mZy1zdXJmYWNlMTogI2ZmODE3MTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtZXJyb3ItZmctc3VyZmFjZTI6ICNmNzRjNDA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWVycm9yLWZnLXN1cmZhY2UzOiAjY2MxODE4O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1lcnJvci1mZy1zdXJmYWNlNDogIzRhMDAwMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtZXJyb3Itc3Ryb2tlMTogI2RjOTA4NTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtZXJyb3Itc3Ryb2tlMjogI2NkNjk1ZDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtZXJyb3Itc3Ryb2tlMzogI2NjMTgxODtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtZXJyb3Itc3Ryb2tlNDogI2E0MDAwMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtZXJyb3Itc3VyZmFjZTE6ICNmY2VkZWI7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWVycm9yLXN1cmZhY2UyOiAjZmRmNmY1O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1lcnJvci1zdXJmYWNlMzogI2ZmZmZmZjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtZXJyb3Itc3VyZmFjZTQ6ICNmYWU1ZTI7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWVycm9yLXN1cmZhY2U1OiAjZjhkOGQzO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1lcnJvci1zdXJmYWNlNjogI2Y1YzViZTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtaW5mby1iZy1maWxsLWRhcms6ICMxYjFlMjM7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWluZm8tYmctZmlsbC1pbnZlcnRlZDE6ICMwMDI5N2E7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWluZm8tYmctZmlsbC1pbnZlcnRlZDI6ICMxYjFlMjM7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWluZm8tYmctZmlsbDE6ICMwMDkwZmY7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWluZm8tYmctZmlsbDI6ICMwMDdlZWM7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWluZm8tZmctZmlsbDogIzFiMWUyMztcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtaW5mby1mZy1maWxsLWRhcms6ICNlZmYwZjI7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWluZm8tZmctZmlsbC1pbnZlcnRlZDogI2VmZjBmMjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtaW5mby1mZy1zdXJmYWNlMTogIzRmYjBmZjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtaW5mby1mZy1zdXJmYWNlMjogIzAwOGJmYTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtaW5mby1mZy1zdXJmYWNlMzogIzAwNmRkOTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtaW5mby1mZy1zdXJmYWNlNDogIzAwMTc1ODtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtaW5mby1zdHJva2UxOiAjOGJhZWQ2O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1pbmZvLXN0cm9rZTI6ICM1ZDkwYzg7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLWluZm8tc3Ryb2tlMzogIzAwNmRkOTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtaW5mby1zdHJva2U0OiAjMDA0YmI1O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1pbmZvLXN1cmZhY2UxOiAjZWFmMmZhO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1pbmZvLXN1cmZhY2UyOiAjZjVmOWZkO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1pbmZvLXN1cmZhY2UzOiAjZmZmZmZmO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1pbmZvLXN1cmZhY2U0OiAjZTFlY2Y4O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1pbmZvLXN1cmZhY2U1OiAjZDFlMWY1O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1pbmZvLXN1cmZhY2U2OiAjYmFkM2YwO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1wcmltYXJ5LWJnLWZpbGwtZGFyazogIzFiMWUyNjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtcHJpbWFyeS1iZy1maWxsLWludmVydGVkMTogIzE0MDFhNTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtcHJpbWFyeS1iZy1maWxsLWludmVydGVkMjogIzFiMWUyNjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtcHJpbWFyeS1iZy1maWxsMTogIzM4NThlOTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtcHJpbWFyeS1iZy1maWxsMjogIzJjNDdkNztcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtcHJpbWFyeS1mZy1maWxsOiAjZWZmMGYyO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1wcmltYXJ5LWZnLWZpbGwtZGFyazogI2VmZjBmMjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtcHJpbWFyeS1mZy1maWxsLWludmVydGVkOiAjZWZmMGYyO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1wcmltYXJ5LWZnLXN1cmZhY2UxOiAjODJhN2ZmO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1wcmltYXJ5LWZnLXN1cmZhY2UyOiAjNTc4MGZmO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1wcmltYXJ5LWZnLXN1cmZhY2UzOiAjMzg1OGU5O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1wcmltYXJ5LWZnLXN1cmZhY2U0OiAjMDgwMDcxO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1wcmltYXJ5LXN0cm9rZTE6ICM5MmE0ZDA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktc3Ryb2tlMjogIzZmODVjMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtcHJpbWFyeS1zdHJva2UzOiAjMzg1OGU5O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1wcmltYXJ5LXN0cm9rZTQ6ICMyMjM2Yzc7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktc3VyZmFjZTE6ICNlZGYxZmE7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktc3VyZmFjZTI6ICNmNmY4ZmM7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktc3VyZmFjZTM6ICNmZmZmZmY7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktc3VyZmFjZTQ6ICNlNmViZjc7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktc3VyZmFjZTU6ICNkOGUwZjM7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktc3VyZmFjZTY6ICNjNGQwZWU7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXN1Y2Nlc3MtYmctZmlsbC1kYXJrOiAjMWIxZjFjO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1zdWNjZXNzLWJnLWZpbGwtaW52ZXJ0ZWQxOiAjMDAzYTAwO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1zdWNjZXNzLWJnLWZpbGwtaW52ZXJ0ZWQyOiAjMWIxZjFjO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1zdWNjZXNzLWJnLWZpbGwxOiAjNGFiODY2O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1zdWNjZXNzLWJnLWZpbGwyOiAjMzRhNTU0O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1zdWNjZXNzLWZnLWZpbGw6ICMxYjFmMWM7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXN1Y2Nlc3MtZmctZmlsbC1kYXJrOiAjZWRmMmVkO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1zdWNjZXNzLWZnLWZpbGwtaW52ZXJ0ZWQ6ICNlZGYyZWQ7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXN1Y2Nlc3MtZmctc3VyZmFjZTE6ICM1MmMwNmQ7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXN1Y2Nlc3MtZmctc3VyZmFjZTI6ICMyYjllNGU7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXN1Y2Nlc3MtZmctc3VyZmFjZTM6ICMwMDgwMzE7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXN1Y2Nlc3MtZmctc3VyZmFjZTQ6ICMwMDJiMDA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXN1Y2Nlc3Mtc3Ryb2tlMTogIzc4YmI4NDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtc3VjY2Vzcy1zdHJva2UyOiAjNjI5YTZjO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1zdWNjZXNzLXN0cm9rZTM6ICMwMDgwMzE7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXN1Y2Nlc3Mtc3Ryb2tlNDogIzAwNjExMztcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtc3VjY2Vzcy1zdXJmYWNlMTogI2RlZjhlMTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtc3VjY2Vzcy1zdXJmYWNlMjogI2YwZmNmMjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtc3VjY2Vzcy1zdXJmYWNlMzogI2ZmZmZmZjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtc3VjY2Vzcy1zdXJmYWNlNDogI2NlZjVkMztcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtc3VjY2Vzcy1zdXJmYWNlNTogI2FkZjBiODtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtc3VjY2Vzcy1zdXJmYWNlNjogIzdiZTc5Mjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtd2FybmluZy1iZy1maWxsLWRhcms6ICMxZjFlMWI7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXdhcm5pbmctYmctZmlsbC1pbnZlcnRlZDE6ICM0NjI4MDA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXdhcm5pbmctYmctZmlsbC1pbnZlcnRlZDI6ICMxZjFlMWI7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXdhcm5pbmctYmctZmlsbDE6ICNmMGI4NDk7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXdhcm5pbmctYmctZmlsbDI6ICNkYmE0MzA7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXdhcm5pbmctZmctZmlsbDogIzFmMWUxYjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtd2FybmluZy1mZy1maWxsLWRhcms6ICNmM2YwZTk7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXdhcm5pbmctZmctZmlsbC1pbnZlcnRlZDogI2YzZjBlOTtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtd2FybmluZy1mZy1zdXJmYWNlMTogI2Q4YTEyYjtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtd2FybmluZy1mZy1zdXJmYWNlMjogI2I2ODAwMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtd2FybmluZy1mZy1zdXJmYWNlMzogIzk3NjMwMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtd2FybmluZy1mZy1zdXJmYWNlNDogIzJmMTgwMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtd2FybmluZy1zdHJva2UxOiAjYzNhODc3O1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS13YXJuaW5nLXN0cm9rZTI6ICNhMThhNjE7XG5cdC0td3Bkcy1jb2xvci1wcml2YXRlLXdhcm5pbmctc3Ryb2tlMzogIzk3NjMwMDtcblx0LS13cGRzLWNvbG9yLXByaXZhdGUtd2FybmluZy1zdHJva2U0OiAjNzM0NzAwO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS13YXJuaW5nLXN1cmZhY2UxOiAjZmFlZmRkO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS13YXJuaW5nLXN1cmZhY2UyOiAjZmRmN2VlO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS13YXJuaW5nLXN1cmZhY2UzOiAjZmZmZmZmO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS13YXJuaW5nLXN1cmZhY2U0OiAjZjhlOWNlO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS13YXJuaW5nLXN1cmZhY2U1OiAjZjVkZGIyO1xuXHQtLXdwZHMtY29sb3ItcHJpdmF0ZS13YXJuaW5nLXN1cmZhY2U2OiAjZjBjYjg5O1xuXHQtLXdwZHMtY29sb3Itc3Ryb2tlLWZvY3VzLWJyYW5kOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtcHJpbWFyeS1zdHJva2UzXG5cdCk7IC8qIEFjY2Vzc2libGUgc3Ryb2tlIGNvbG9yIGFwcGxpZWQgdG8gZm9jdXMgcmluZ3MuICovXG5cdC0td3Bkcy1jb2xvci1zdHJva2UtaW50ZXJhY3RpdmUtYnJhbmQ6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1wcmltYXJ5LXN0cm9rZTNcblx0KTsgLyogQWNjZXNzaWJsZSBzdHJva2UgY29sb3IgdXNlZCBmb3IgaW50ZXJhY3RpdmUgYnJhbmQtdG9uZWQgZWxlbWVudHMgd2l0aCBub3JtYWwgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1zdHJva2UtaW50ZXJhY3RpdmUtYnJhbmQtYWN0aXZlOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtcHJpbWFyeS1zdHJva2U0XG5cdCk7IC8qIEFjY2Vzc2libGUgc3Ryb2tlIGNvbG9yIHVzZWQgZm9yIGludGVyYWN0aXZlIGJyYW5kLXRvbmVkIGVsZW1lbnRzIHdpdGggbm9ybWFsIGVtcGhhc2lzIHRoYXQgYXJlIGhvdmVyZWQsIGZvY3VzZWQsIG9yIGFjdGl2ZS4gKi9cblx0LS13cGRzLWNvbG9yLXN0cm9rZS1pbnRlcmFjdGl2ZS1icmFuZC1kaXNhYmxlZDogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN0cm9rZTJcblx0KTsgLyogQWNjZXNzaWJsZSBzdHJva2UgY29sb3IgdXNlZCBmb3IgaW50ZXJhY3RpdmUgYnJhbmQtdG9uZWQgZWxlbWVudHMgd2l0aCBub3JtYWwgZW1waGFzaXMsIGluIHRoZWlyIGRpc2FibGVkIHN0YXRlLiAqL1xuXHQtLXdwZHMtY29sb3Itc3Ryb2tlLWludGVyYWN0aXZlLWVycm9yLXN0cm9uZzogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWVycm9yLXN0cm9rZTNcblx0KTsgLyogQWNjZXNzaWJsZSBzdHJva2UgY29sb3IgdXNlZCBmb3IgaW50ZXJhY3RpdmUgZXJyb3ItdG9uZWQgZWxlbWVudHMgd2l0aCBzdHJvbmcgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1zdHJva2UtaW50ZXJhY3RpdmUtbmV1dHJhbDogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN0cm9rZTNcblx0KTsgLyogQWNjZXNzaWJsZSBzdHJva2UgY29sb3IgdXNlZCBmb3IgaW50ZXJhY3RpdmUgbmV1dHJhbGx5LXRvbmVkIGVsZW1lbnRzIHdpdGggbm9ybWFsIGVtcGhhc2lzLiAqL1xuXHQtLXdwZHMtY29sb3Itc3Ryb2tlLWludGVyYWN0aXZlLW5ldXRyYWwtYWN0aXZlOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctc3Ryb2tlNFxuXHQpOyAvKiBBY2Nlc3NpYmxlIHN0cm9rZSBjb2xvciB1c2VkIGZvciBpbnRlcmFjdGl2ZSBuZXV0cmFsbHktdG9uZWQgZWxlbWVudHMgd2l0aCBub3JtYWwgZW1waGFzaXMgdGhhdCBhcmUgaG92ZXJlZCwgZm9jdXNlZCwgb3IgYWN0aXZlLiAqL1xuXHQtLXdwZHMtY29sb3Itc3Ryb2tlLWludGVyYWN0aXZlLW5ldXRyYWwtZGlzYWJsZWQ6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdHJva2UyXG5cdCk7IC8qIEFjY2Vzc2libGUgc3Ryb2tlIGNvbG9yIHVzZWQgZm9yIGludGVyYWN0aXZlIG5ldXRyYWxseS10b25lZCBlbGVtZW50cyB3aXRoIG5vcm1hbCBlbXBoYXNpcywgaW4gdGhlaXIgZGlzYWJsZWQgc3RhdGUuICovXG5cdC0td3Bkcy1jb2xvci1zdHJva2UtaW50ZXJhY3RpdmUtbmV1dHJhbC1zdHJvbmc6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1iZy1zdHJva2U0XG5cdCk7IC8qIEFjY2Vzc2libGUgc3Ryb2tlIGNvbG9yIHVzZWQgZm9yIGludGVyYWN0aXZlIG5ldXRyYWxseS10b25lZCBlbGVtZW50cyB3aXRoIHN0cm9uZyBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLXN0cm9rZS1zdXJmYWNlLWJyYW5kOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtcHJpbWFyeS1zdHJva2UxXG5cdCk7IC8qIERlY29yYXRpdmUgc3Ryb2tlIGNvbG9yIHVzZWQgdG8gZGVmaW5lIGJyYW5kLXRvbmVkIHN1cmZhY2UgYm91bmRhcmllcyB3aXRoIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLXN0cm9rZS1zdXJmYWNlLWJyYW5kLXN0cm9uZzogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXByaW1hcnktc3Ryb2tlM1xuXHQpOyAvKiBEZWNvcmF0aXZlIHN0cm9rZSBjb2xvciB1c2VkIHRvIGRlZmluZSBuZXV0cmFsbHktdG9uZWQgc3VyZmFjZSBib3VuZGFyaWVzIHdpdGggc3Ryb25nIGVtcGhhc2lzLiAqL1xuXHQtLXdwZHMtY29sb3Itc3Ryb2tlLXN1cmZhY2UtZXJyb3I6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1lcnJvci1zdHJva2UxXG5cdCk7IC8qIERlY29yYXRpdmUgc3Ryb2tlIGNvbG9yIHVzZWQgdG8gZGVmaW5lIGVycm9yLXRvbmVkIHN1cmZhY2UgYm91bmRhcmllcyB3aXRoIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLXN0cm9rZS1zdXJmYWNlLWVycm9yLXN0cm9uZzogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWVycm9yLXN0cm9rZTNcblx0KTsgLyogRGVjb3JhdGl2ZSBzdHJva2UgY29sb3IgdXNlZCB0byBkZWZpbmUgZXJyb3ItdG9uZWQgc3VyZmFjZSBib3VuZGFyaWVzIHdpdGggc3Ryb25nIGVtcGhhc2lzLiAqL1xuXHQtLXdwZHMtY29sb3Itc3Ryb2tlLXN1cmZhY2UtaW5mbzogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWluZm8tc3Ryb2tlMVxuXHQpOyAvKiBEZWNvcmF0aXZlIHN0cm9rZSBjb2xvciB1c2VkIHRvIGRlZmluZSBpbmZvLXRvbmVkIHN1cmZhY2UgYm91bmRhcmllcyB3aXRoIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLXN0cm9rZS1zdXJmYWNlLWluZm8tc3Ryb25nOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtaW5mby1zdHJva2UzXG5cdCk7IC8qIERlY29yYXRpdmUgc3Ryb2tlIGNvbG9yIHVzZWQgdG8gZGVmaW5lIGluZm8tdG9uZWQgc3VyZmFjZSBib3VuZGFyaWVzIHdpdGggc3Ryb25nIGVtcGhhc2lzLiAqL1xuXHQtLXdwZHMtY29sb3Itc3Ryb2tlLXN1cmZhY2UtbmV1dHJhbDogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLWJnLXN0cm9rZTJcblx0KTsgLyogRGVjb3JhdGl2ZSBzdHJva2UgY29sb3IgdXNlZCB0byBkZWZpbmUgbmV1dHJhbGx5LXRvbmVkIHN1cmZhY2UgYm91bmRhcmllcyB3aXRoIG5vcm1hbCBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLXN0cm9rZS1zdXJmYWNlLW5ldXRyYWwtc3Ryb25nOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctc3Ryb2tlM1xuXHQpOyAvKiBEZWNvcmF0aXZlIHN0cm9rZSBjb2xvciB1c2VkIHRvIGRlZmluZSBuZXV0cmFsbHktdG9uZWQgc3VyZmFjZSBib3VuZGFyaWVzIHdpdGggc3Ryb25nIGVtcGhhc2lzLiAqL1xuXHQtLXdwZHMtY29sb3Itc3Ryb2tlLXN1cmZhY2UtbmV1dHJhbC13ZWFrOiB2YXIoXG5cdFx0LS13cGRzLWNvbG9yLXByaXZhdGUtYmctc3Ryb2tlMVxuXHQpOyAvKiBEZWNvcmF0aXZlIHN0cm9rZSBjb2xvciB1c2VkIHRvIGRlZmluZSBuZXV0cmFsbHktdG9uZWQgc3VyZmFjZSBib3VuZGFyaWVzIHdpdGggd2VhayBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLXN0cm9rZS1zdXJmYWNlLXN1Y2Nlc3M6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS1zdWNjZXNzLXN0cm9rZTFcblx0KTsgLyogRGVjb3JhdGl2ZSBzdHJva2UgY29sb3IgdXNlZCB0byBkZWZpbmUgc3VjY2Vzcy10b25lZCBzdXJmYWNlIGJvdW5kYXJpZXMgd2l0aCBub3JtYWwgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1zdHJva2Utc3VyZmFjZS1zdWNjZXNzLXN0cm9uZzogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXN1Y2Nlc3Mtc3Ryb2tlM1xuXHQpOyAvKiBEZWNvcmF0aXZlIHN0cm9rZSBjb2xvciB1c2VkIHRvIGRlZmluZSBzdWNjZXNzLXRvbmVkIHN1cmZhY2UgYm91bmRhcmllcyB3aXRoIHN0cm9uZyBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWNvbG9yLXN0cm9rZS1zdXJmYWNlLXdhcm5pbmc6IHZhcihcblx0XHQtLXdwZHMtY29sb3ItcHJpdmF0ZS13YXJuaW5nLXN0cm9rZTFcblx0KTsgLyogRGVjb3JhdGl2ZSBzdHJva2UgY29sb3IgdXNlZCB0byBkZWZpbmUgd2FybmluZy10b25lZCBzdXJmYWNlIGJvdW5kYXJpZXMgd2l0aCBub3JtYWwgZW1waGFzaXMuICovXG5cdC0td3Bkcy1jb2xvci1zdHJva2Utc3VyZmFjZS13YXJuaW5nLXN0cm9uZzogdmFyKFxuXHRcdC0td3Bkcy1jb2xvci1wcml2YXRlLXdhcm5pbmctc3Ryb2tlM1xuXHQpOyAvKiBEZWNvcmF0aXZlIHN0cm9rZSBjb2xvciB1c2VkIHRvIGRlZmluZSB3YXJuaW5nLXRvbmVkIHN1cmZhY2UgYm91bmRhcmllcyB3aXRoIHN0cm9uZyBlbXBoYXNpcy4gKi9cblx0LS13cGRzLWRpbWVuc2lvbi1iYXNlOiB2YXIoXG5cdFx0LS13cGRzLWRpbWVuc2lvbi1wcml2YXRlLXNwYWNlLTEwXG5cdCk7IC8qIEJhc2UgZGltZW5zaW9uIHVuaXQgKi9cblx0LS13cGRzLWRpbWVuc2lvbi1wYWRkaW5nLXN1cmZhY2UtbGFyZ2U6IHZhcihcblx0XHQtLXdwZHMtZGltZW5zaW9uLXByaXZhdGUtc3BhY2UtNjBcblx0KTsgLyogTGFyZ2Ugc3BhY2luZyBmb3Igc3VyZmFjZXMgKi9cblx0LS13cGRzLWRpbWVuc2lvbi1wYWRkaW5nLXN1cmZhY2UtbWVkaXVtOiB2YXIoXG5cdFx0LS13cGRzLWRpbWVuc2lvbi1wcml2YXRlLXNwYWNlLTQwXG5cdCk7IC8qIE1lZGl1bSBzcGFjaW5nIGZvciBzdXJmYWNlcyAqL1xuXHQtLXdwZHMtZGltZW5zaW9uLXBhZGRpbmctc3VyZmFjZS1zbWFsbDogdmFyKFxuXHRcdC0td3Bkcy1kaW1lbnNpb24tcHJpdmF0ZS1zcGFjZS0zMFxuXHQpOyAvKiBTbWFsbCBzcGFjaW5nIGZvciBzdXJmYWNlcyAqL1xuXHQtLXdwZHMtZGltZW5zaW9uLXBhZGRpbmctc3VyZmFjZS14LXNtYWxsOiB2YXIoXG5cdFx0LS13cGRzLWRpbWVuc2lvbi1wcml2YXRlLXNwYWNlLTIwXG5cdCk7IC8qIEV4dHJhIHNtYWxsIHNwYWNpbmcgZm9yIHN1cmZhY2VzICovXG5cdC0td3Bkcy1kaW1lbnNpb24tcHJpdmF0ZS1zcGFjZS0wOiAwOyAvKiBFbXB0eSBzcGFjZSAqL1xuXHQtLXdwZHMtZGltZW5zaW9uLXByaXZhdGUtc3BhY2UtMTA6IDRweDsgLyogMXggYmFzZSBzcGFjaW5nICovXG5cdC0td3Bkcy1kaW1lbnNpb24tcHJpdmF0ZS1zcGFjZS0yMDogOHB4OyAvKiAyeCBiYXNlIHNwYWNpbmcgKi9cblx0LS13cGRzLWRpbWVuc2lvbi1wcml2YXRlLXNwYWNlLTMwOiAxMnB4OyAvKiAzeCBiYXNlIHNwYWNpbmcgKi9cblx0LS13cGRzLWRpbWVuc2lvbi1wcml2YXRlLXNwYWNlLTQwOiAxNnB4OyAvKiA0eCBiYXNlIHNwYWNpbmcgKi9cblx0LS13cGRzLWRpbWVuc2lvbi1wcml2YXRlLXNwYWNlLTUwOiAyMHB4OyAvKiA1eCBiYXNlIHNwYWNpbmcgKi9cblx0LS13cGRzLWRpbWVuc2lvbi1wcml2YXRlLXNwYWNlLTYwOiAyNHB4OyAvKiA2eCBiYXNlIHNwYWNpbmcgKi9cblx0LS13cGRzLWRpbWVuc2lvbi1wcml2YXRlLXNwYWNlLTcwOiAzMnB4OyAvKiA4eCBiYXNlIHNwYWNpbmcgKi9cblx0LS13cGRzLWRpbWVuc2lvbi1wcml2YXRlLXNwYWNlLTgwOiA0MHB4OyAvKiAxMHggYmFzZSBzcGFjaW5nICovXG5cdC0td3Bkcy1kaW1lbnNpb24tcHJpdmF0ZS1zcGFjZS05MDogNDhweDsgLyogMTJ4IGJhc2Ugc3BhY2luZyAqL1xuXHQtLXdwZHMtZWxldmF0aW9uLWxhcmdlOiAwIDVweCAxNXB4IDAgIzAwMDAwMDE0LCAwIDE1cHggMjdweCAwICMwMDAwMDAxMixcblx0XHQwIDMwcHggMzZweCAwICMwMDAwMDAwYSwgMCA1MHB4IDQzcHggMCAjMDAwMDAwMDU7IC8qIEZvciBjb21wb25lbnRzIHRoYXQgY29uZmlybSBkZWNpc2lvbnMgb3IgaGFuZGxlIG5lY2Vzc2FyeSBpbnRlcnJ1cHRpb25zLiBFeGFtcGxlOiBNb2RhbHMuICovXG5cdC0td3Bkcy1lbGV2YXRpb24tbWVkaXVtOiAwIDJweCAzcHggMCAjMDAwMDAwMGQsIDAgNHB4IDVweCAwICMwMDAwMDAwYSxcblx0XHQwIDEycHggMTJweCAwICMwMDAwMDAwOCwgMCAxNnB4IDE2cHggMCAjMDAwMDAwMDU7IC8qIEZvciBjb21wb25lbnRzIHRoYXQgb2ZmZXIgYWRkaXRpb25hbCBhY3Rpb25zLiBFeGFtcGxlOiBNZW51cywgQ29tbWFuZCBQYWxldHRlICovXG5cdC0td3Bkcy1lbGV2YXRpb24tc21hbGw6IDAgMXB4IDJweCAwICMwMDAwMDAwZCwgMCAycHggM3B4IDAgIzAwMDAwMDBhLFxuXHRcdDAgNnB4IDZweCAwICMwMDAwMDAwOCwgMCA4cHggOHB4IDAgIzAwMDAwMDA1OyAvKiBGb3IgY29tcG9uZW50cyB0aGF0IHByb3ZpZGUgY29udGV4dHVhbCBmZWVkYmFjayB3aXRob3V0IGJlaW5nIGludHJ1c2l2ZS4gR2VuZXJhbGx5IG5vbi1pbnRlcnJ1cHRpdmUuIEV4YW1wbGU6IFRvb2x0aXBzLCBTbmFja2Jhci4gKi9cblx0LS13cGRzLWVsZXZhdGlvbi14LXNtYWxsOiAwIDFweCAxcHggMCAjMDAwMDAwMDgsIDAgMXB4IDJweCAwICMwMDAwMDAwNSxcblx0XHQwIDNweCAzcHggMCAjMDAwMDAwMDUsIDAgNHB4IDRweCAwICMwMDAwMDAwMzsgLyogRm9yIHNlY3Rpb25zIGFuZCBjb250YWluZXJzIHRoYXQgZ3JvdXAgcmVsYXRlZCBjb250ZW50IGFuZCBjb250cm9scywgd2hpY2ggbWF5IG92ZXJsYXAgb3RoZXIgY29udGVudC4gRXhhbXBsZTogUHJldmlldyBGcmFtZS4gKi9cblx0LS13cGRzLWZvbnQtZmFtaWx5LWJvZHk6IC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgJ1NlZ29lIFVJJywgJ1JvYm90bycsXG5cdFx0J094eWdlbi1TYW5zJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmOyAvKiBCb2R5IGZvbnQgZmFtaWx5ICovXG5cdC0td3Bkcy1mb250LWZhbWlseS1oZWFkaW5nOiAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksICdTZWdvZSBVSScsICdSb2JvdG8nLFxuXHRcdCdPeHlnZW4tU2FucycsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjsgLyogSGVhZGluZ3MgZm9udCBmYW1pbHkgKi9cblx0LS13cGRzLWZvbnQtZmFtaWx5LW1vbm86ICdNZW5sbycsICdDb25zb2xhcycsIG1vbmFjbywgbW9ub3NwYWNlOyAvKiBNb25vc3BhY2UgZm9udCBmYW1pbHkgKi9cblx0LS13cGRzLWZvbnQtbGluZS1oZWlnaHQtMngtbGFyZ2U6IDQwcHg7IC8qIDJYIGxhcmdlIGxpbmUgaGVpZ2h0ICovXG5cdC0td3Bkcy1mb250LWxpbmUtaGVpZ2h0LWxhcmdlOiAyOHB4OyAvKiBMYXJnZSBsaW5lIGhlaWdodCAqL1xuXHQtLXdwZHMtZm9udC1saW5lLWhlaWdodC1tZWRpdW06IDI0cHg7IC8qIE1lZGl1bSBsaW5lIGhlaWdodCAqL1xuXHQtLXdwZHMtZm9udC1saW5lLWhlaWdodC1zbWFsbDogMjBweDsgLyogU21hbGwgbGluZSBoZWlnaHQgKi9cblx0LS13cGRzLWZvbnQtbGluZS1oZWlnaHQteC1sYXJnZTogMzJweDsgLyogRXh0cmEgbGFyZ2UgbGluZSBoZWlnaHQgKi9cblx0LS13cGRzLWZvbnQtbGluZS1oZWlnaHQteC1zbWFsbDogMTZweDsgLyogRXh0cmEgc21hbGwgbGluZSBoZWlnaHQgKi9cblx0LS13cGRzLWZvbnQtc2l6ZS0yeC1sYXJnZTogMzJweDsgLyogMlggbGFyZ2UgZm9udCBzaXplICovXG5cdC0td3Bkcy1mb250LXNpemUtbGFyZ2U6IDE1cHg7IC8qIExhcmdlIGZvbnQgc2l6ZSAqL1xuXHQtLXdwZHMtZm9udC1zaXplLW1lZGl1bTogMTNweDsgLyogTWVkaXVtIGZvbnQgc2l6ZSAqL1xuXHQtLXdwZHMtZm9udC1zaXplLXNtYWxsOiAxMnB4OyAvKiBTbWFsbCBmb250IHNpemUgKi9cblx0LS13cGRzLWZvbnQtc2l6ZS14LWxhcmdlOiAyMHB4OyAvKiBFeHRyYSBsYXJnZSBmb250IHNpemUgKi9cblx0LS13cGRzLWZvbnQtc2l6ZS14LXNtYWxsOiAxMXB4OyAvKiBFeHRyYSBzbWFsbCBmb250IHNpemUgKi9cbn1cblxuQG1lZGlhICggLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyICksICggbWluLXJlc29sdXRpb246IDE5MmRwaSApIHtcblx0OnJvb3Qge1xuXHRcdC0td3Bkcy1ib3JkZXItd2lkdGgtZm9jdXM6IDEuNXB4OyAvKiBCb3JkZXIgd2lkdGggZm9yIGZvY3VzIHJpbmcgKi9cblx0fVxufVxuIiwiLyoqXG4gKiBDb2xvcnNcbiAqL1xuLyoqXG4gKiBTQ1NTIFZhcmlhYmxlcy5cbiAqXG4gKiBQbGVhc2UgdXNlIHZhcmlhYmxlcyBmcm9tIHRoaXMgc2hlZXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGFjcm9zcyB0aGUgVUkuXG4gKiBEb24ndCBhZGQgdG8gdGhpcyBzaGVldCB1bmxlc3MgeW91J3JlIHByZXR0eSBzdXJlIHRoZSB2YWx1ZSB3aWxsIGJlIHJldXNlZCBpbiBtYW55IHBsYWNlcy5cbiAqIEZvciBleGFtcGxlLCBkb24ndCBhZGQgcnVsZXMgdG8gdGhpcyBzaGVldCB0aGF0IGFmZmVjdCBibG9jayB2aXN1YWxzLiBJdCdzIHB1cmVseSBmb3IgVUkuXG4gKi9cbi8qKlxuICogRm9udHMgJiBiYXNpYyB2YXJpYWJsZXMuXG4gKi9cbi8qKlxuICogVHlwb2dyYXBoeVxuICovXG4vKipcbiAqIEdyaWQgU3lzdGVtLlxuICogaHR0cHM6Ly9tYWtlLndvcmRwcmVzcy5vcmcvZGVzaWduLzIwMTkvMTAvMzEvcHJvcG9zYWwtYS1jb25zaXN0ZW50LXNwYWNpbmctc3lzdGVtLWZvci13b3JkcHJlc3MvXG4gKi9cbi8qKlxuICogUmFkaXVzIHNjYWxlLlxuICovXG4vKipcbiAqIEVsZXZhdGlvbiBzY2FsZS5cbiAqL1xuLyoqXG4gKiBEaW1lbnNpb25zLlxuICovXG4vKipcbiAqIE1vYmlsZSBzcGVjaWZpYyBzdHlsZXNcbiAqL1xuLyoqXG4gKiBFZGl0b3Igc3R5bGVzLlxuICovXG4vKipcbiAqIEJsb2NrICYgRWRpdG9yIFVJLlxuICovXG4vKipcbiAqIEJsb2NrIHBhZGRpbmdzLlxuICovXG4vKipcbiAqIFJlYWN0IE5hdGl2ZSBzcGVjaWZpYy5cbiAqIFRoZXNlIHZhcmlhYmxlcyBkbyBub3QgYXBwZWFyIHRvIGJlIHVzZWQgYW55d2hlcmUgZWxzZS5cbiAqL1xuLyoqXG4gKiBUeXBvZ3JhcGh5XG4gKi9cbi8qKlxuICogQnJlYWtwb2ludHMgJiBNZWRpYSBRdWVyaWVzXG4gKi9cbi8qKlxuKiAgQ29udmVydHMgYSBoZXggdmFsdWUgaW50byB0aGUgcmdiIGVxdWl2YWxlbnQuXG4qXG4qIEBwYXJhbSB7c3RyaW5nfSBoZXggLSB0aGUgaGV4YWRlY2ltYWwgdmFsdWUgdG8gY29udmVydFxuKiBAcmV0dXJuIHtzdHJpbmd9IGNvbW1hIHNlcGFyYXRlZCByZ2IgdmFsdWVzXG4qL1xuLyoqXG4gKiBMb25nIGNvbnRlbnQgZmFkZSBtaXhpblxuICpcbiAqIENyZWF0ZXMgYSBmYWRpbmcgb3ZlcmxheSB0byBzaWduaWZ5IHRoYXQgdGhlIGNvbnRlbnQgaXMgbG9uZ2VyXG4gKiB0aGFuIHRoZSBzcGFjZSBhbGxvd3MuXG4gKi9cbi8qKlxuICogQnJlYWtwb2ludCBtaXhpbnNcbiAqL1xuLyoqXG4gKiBGb2N1cyBzdHlsZXMuXG4gKi9cbi8qKlxuICogQXBwbGllcyBlZGl0b3IgbGVmdCBwb3NpdGlvbiB0byB0aGUgc2VsZWN0b3IgcGFzc2VkIGFzIGFyZ3VtZW50XG4gKi9cbi8qKlxuICogU3R5bGVzIHRoYXQgYXJlIHJldXNlZCB2ZXJiYXRpbSBpbiBhIGZldyBwbGFjZXNcbiAqL1xuLyoqXG4gKiBBbGxvd3MgdXNlcnMgdG8gb3B0LW91dCBvZiBhbmltYXRpb25zIHZpYSBPUy1sZXZlbCBwcmVmZXJlbmNlcy5cbiAqL1xuLyoqXG4gKiBSZXNldCBkZWZhdWx0IHN0eWxlcyBmb3IgSmF2YVNjcmlwdCBVSSBiYXNlZCBwYWdlcy5cbiAqIFRoaXMgaXMgYSBXUC1hZG1pbiBhZ25vc3RpYyByZXNldFxuICovXG4vKipcbiAqIFJlc2V0IHRoZSBXUCBBZG1pbiBwYWdlIHN0eWxlcyBmb3IgR3V0ZW5iZXJnLWxpa2UgcGFnZXMuXG4gKi9cbi5hZG1pbi11aS1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzJmMmYyZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgY29udGFpbmVyOiBhZG1pbi11aS1wYWdlL2lubGluZS1zaXplO1xufVxuQG1lZGlhIG5vdCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbikge1xuICAuYWRtaW4tdWktcGFnZSB7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggZWFzZS1vdXQgMC4ycztcbiAgfVxufVxuXG4uYWRtaW4tdWktcGFnZV9faGVhZGVyIHtcbiAgcGFkZGluZzogMTZweCA0OHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuQGNvbnRhaW5lciAobWF4LXdpZHRoOiA0MzBweCkge1xuICAuYWRtaW4tdWktcGFnZV9faGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIH1cbn1cblxuLmFkbWluLXVpLXBhZ2VfX2hlYWRlci1zdWJ0aXRsZSB7XG4gIHBhZGRpbmctYmxvY2stZW5kOiA4cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgXCJzeXN0ZW0tdWlcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5hZG1pbi11aS1wYWdlX19jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hZG1pbi11aS1wYWdlX19jb250ZW50Lmhhcy1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xufVxuQGNvbnRhaW5lciAobWF4LXdpZHRoOiA0MzBweCkge1xuICAuYWRtaW4tdWktcGFnZV9fY29udGVudC5oYXMtcGFkZGluZyB7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICB9XG59XG5cbi5zaG93LWljb24tbGFiZWxzIC5hZG1pbi11aS1wYWdlX19oZWFkZXItYWN0aW9ucyAuY29tcG9uZW50cy1idXR0b24uaGFzLWljb24ge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMCA4cHg7XG59XG4uc2hvdy1pY29uLWxhYmVscyAuYWRtaW4tdWktcGFnZV9faGVhZGVyLWFjdGlvbnMgLmNvbXBvbmVudHMtYnV0dG9uLmhhcy1pY29uIHN2ZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2hvdy1pY29uLWxhYmVscyAuYWRtaW4tdWktcGFnZV9faGVhZGVyLWFjdGlvbnMgLmNvbXBvbmVudHMtYnV0dG9uLmhhcy1pY29uOjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iLCIvKipcbiAqIFNDU1MgVmFyaWFibGVzLlxuICpcbiAqIFBsZWFzZSB1c2UgdmFyaWFibGVzIGZyb20gdGhpcyBzaGVldCB0byBlbnN1cmUgY29uc2lzdGVuY3kgYWNyb3NzIHRoZSBVSS5cbiAqIERvbid0IGFkZCB0byB0aGlzIHNoZWV0IHVubGVzcyB5b3UncmUgcHJldHR5IHN1cmUgdGhlIHZhbHVlIHdpbGwgYmUgcmV1c2VkIGluIG1hbnkgcGxhY2VzLlxuICogRm9yIGV4YW1wbGUsIGRvbid0IGFkZCBydWxlcyB0byB0aGlzIHNoZWV0IHRoYXQgYWZmZWN0IGJsb2NrIHZpc3VhbHMuIEl0J3MgcHVyZWx5IGZvciBVSS5cbiAqL1xuXG5AdXNlIFwiLi9jb2xvcnNcIjtcblxuLyoqXG4gKiBGb250cyAmIGJhc2ljIHZhcmlhYmxlcy5cbiAqL1xuXG4kZGVmYXVsdC1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCxcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IC8vIFRvZG86IGRlcHJlY2F0ZSBpbiBmYXZvciBvZiAkZmFtaWx5IHZhcmlhYmxlc1xuJGRlZmF1bHQtbGluZS1oZWlnaHQ6IDEuNDsgLy8gVG9kbzogZGVwcmVjYXRlIGluIGZhdm9yIG9mICRsaW5lLWhlaWdodCB0b2tlbnNcblxuLyoqXG4gKiBUeXBvZ3JhcGh5XG4gKi9cblxuLy8gU2l6ZXNcbiRmb250LXNpemUteC1zbWFsbDogMTFweDtcbiRmb250LXNpemUtc21hbGw6IDEycHg7XG4kZm9udC1zaXplLW1lZGl1bTogMTNweDtcbiRmb250LXNpemUtbGFyZ2U6IDE1cHg7XG4kZm9udC1zaXplLXgtbGFyZ2U6IDIwcHg7XG4kZm9udC1zaXplLTJ4LWxhcmdlOiAzMnB4O1xuXG4vLyBMaW5lIGhlaWdodHNcbiRmb250LWxpbmUtaGVpZ2h0LXgtc21hbGw6IDE2cHg7XG4kZm9udC1saW5lLWhlaWdodC1zbWFsbDogMjBweDtcbiRmb250LWxpbmUtaGVpZ2h0LW1lZGl1bTogMjRweDtcbiRmb250LWxpbmUtaGVpZ2h0LWxhcmdlOiAyOHB4O1xuJGZvbnQtbGluZS1oZWlnaHQteC1sYXJnZTogMzJweDtcbiRmb250LWxpbmUtaGVpZ2h0LTJ4LWxhcmdlOiA0MHB4O1xuXG4vLyBXZWlnaHRzXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xuJGZvbnQtd2VpZ2h0LW1lZGl1bTogNDk5OyAvLyBlbnN1cmVzIGZhbGxiYWNrIHRvIDQwMCAoaW5zdGVhZCBvZiA2MDApXG5cbi8vIEZhbWlsaWVzXG4kZm9udC1mYW1pbHktaGVhZGluZ3M6IC1hcHBsZS1zeXN0ZW0sIFwic3lzdGVtLXVpXCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1ib2R5OiAtYXBwbGUtc3lzdGVtLCBcInN5c3RlbS11aVwiLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogTWVubG8sIENvbnNvbGFzLCBtb25hY28sIG1vbm9zcGFjZTtcblxuLyoqXG4gKiBHcmlkIFN5c3RlbS5cbiAqIGh0dHBzOi8vbWFrZS53b3JkcHJlc3Mub3JnL2Rlc2lnbi8yMDE5LzEwLzMxL3Byb3Bvc2FsLWEtY29uc2lzdGVudC1zcGFjaW5nLXN5c3RlbS1mb3Itd29yZHByZXNzL1xuICovXG5cbiRncmlkLXVuaXQ6IDhweDtcbiRncmlkLXVuaXQtMDU6IDAuNSAqICRncmlkLXVuaXQ7XHQvLyA0cHhcbiRncmlkLXVuaXQtMTA6IDEgKiAkZ3JpZC11bml0O1x0XHQvLyA4cHhcbiRncmlkLXVuaXQtMTU6IDEuNSAqICRncmlkLXVuaXQ7XHQvLyAxMnB4XG4kZ3JpZC11bml0LTIwOiAyICogJGdyaWQtdW5pdDtcdFx0Ly8gMTZweFxuJGdyaWQtdW5pdC0zMDogMyAqICRncmlkLXVuaXQ7XHRcdC8vIDI0cHhcbiRncmlkLXVuaXQtNDA6IDQgKiAkZ3JpZC11bml0O1x0XHQvLyAzMnB4XG4kZ3JpZC11bml0LTUwOiA1ICogJGdyaWQtdW5pdDtcdFx0Ly8gNDBweFxuJGdyaWQtdW5pdC02MDogNiAqICRncmlkLXVuaXQ7XHRcdC8vIDQ4cHhcbiRncmlkLXVuaXQtNzA6IDcgKiAkZ3JpZC11bml0O1x0XHQvLyA1NnB4XG4kZ3JpZC11bml0LTgwOiA4ICogJGdyaWQtdW5pdDtcdFx0Ly8gNjRweFxuXG4vKipcbiAqIFJhZGl1cyBzY2FsZS5cbiAqL1xuXG4kcmFkaXVzLXgtc21hbGw6IDFweDsgICAvLyBBcHBsaWVkIHRvIGVsZW1lbnRzIGxpa2UgYnV0dG9ucyBuZXN0ZWQgd2l0aGluIHByaW1pdGl2ZXMgbGlrZSBpbnB1dHMuXG4kcmFkaXVzLXNtYWxsOiAycHg7ICAgICAvLyBBcHBsaWVkIHRvIG1vc3QgcHJpbWl0aXZlcy5cbiRyYWRpdXMtbWVkaXVtOiA0cHg7ICAgIC8vIEFwcGxpZWQgdG8gY29udGFpbmVycyB3aXRoIHNtYWxsZXIgcGFkZGluZy5cbiRyYWRpdXMtbGFyZ2U6IDhweDsgICAgIC8vIEFwcGxpZWQgdG8gY29udGFpbmVycyB3aXRoIGxhcmdlciBwYWRkaW5nLlxuJHJhZGl1cy1mdWxsOiA5OTk5cHg7ICAgLy8gRm9yIHBpbGxzLlxuJHJhZGl1cy1yb3VuZDogNTAlOyAgICAgLy8gRm9yIGNpcmNsZXMgYW5kIG92YWxzLlxuXG4vKipcbiAqIEVsZXZhdGlvbiBzY2FsZS5cbiAqL1xuXG4vLyBGb3Igc2VjdGlvbnMgYW5kIGNvbnRhaW5lcnMgdGhhdCBncm91cCByZWxhdGVkIGNvbnRlbnQgYW5kIGNvbnRyb2xzLCB3aGljaCBtYXkgb3ZlcmxhcCBvdGhlciBjb250ZW50LiBFeGFtcGxlOiBQcmV2aWV3IEZyYW1lLlxuJGVsZXZhdGlvbi14LXNtYWxsOiAwIDFweCAxcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAzKSwgMCAxcHggMnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMiksIDAgM3B4IDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpLCAwIDRweCA0cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAxKTtcblxuLy8gRm9yIGNvbXBvbmVudHMgdGhhdCBwcm92aWRlIGNvbnRleHR1YWwgZmVlZGJhY2sgd2l0aG91dCBiZWluZyBpbnRydXNpdmUuIEdlbmVyYWxseSBub24taW50ZXJydXB0aXZlLiBFeGFtcGxlOiBUb29sdGlwcywgU25hY2tiYXIuXG4kZWxldmF0aW9uLXNtYWxsOiAwIDFweCAycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA1KSwgMCAycHggM3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNCksIDAgNnB4IDZweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDMpLCAwIDhweCA4cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLy8gRm9yIGNvbXBvbmVudHMgdGhhdCBvZmZlciBhZGRpdGlvbmFsIGFjdGlvbnMuIEV4YW1wbGU6IE1lbnVzLCBDb21tYW5kIFBhbGV0dGVcbiRlbGV2YXRpb24tbWVkaXVtOiAwIDJweCAzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA1KSwgMCA0cHggNXB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNCksIDAgMTJweCAxMnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMyksIDAgMTZweCAxNnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMik7XG5cbi8vIEZvciBjb21wb25lbnRzIHRoYXQgY29uZmlybSBkZWNpc2lvbnMgb3IgaGFuZGxlIG5lY2Vzc2FyeSBpbnRlcnJ1cHRpb25zLiBFeGFtcGxlOiBNb2RhbHMuXG4kZWxldmF0aW9uLWxhcmdlOiAwIDVweCAxNXB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wOCksIDAgMTVweCAyN3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNyksIDAgMzBweCAzNnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wNCksIDAgNTBweCA0M3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMik7XG5cbi8qKlxuICogRGltZW5zaW9ucy5cbiAqL1xuXG4kaWNvbi1zaXplOiAyNHB4O1xuJGJ1dHRvbi1zaXplOiAzNnB4O1xuJGJ1dHRvbi1zaXplLW5leHQtZGVmYXVsdC00MHB4OiA0MHB4OyAvLyB0cmFuc2l0aW9uYXJ5IHZhcmlhYmxlIGZvciBuZXh0IGRlZmF1bHQgYnV0dG9uIHNpemVcbiRidXR0b24tc2l6ZS1zbWFsbDogMjRweDtcbiRidXR0b24tc2l6ZS1jb21wYWN0OiAzMnB4O1xuJGhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kcGFuZWwtaGVhZGVyLWhlaWdodDogJGdyaWQtdW5pdC02MDtcbiRuYXYtc2lkZWJhci13aWR0aDogMzAwcHg7XG4kYWRtaW4tYmFyLWhlaWdodDogMzJweDtcbiRhZG1pbi1iYXItaGVpZ2h0LWJpZzogNDZweDtcbiRhZG1pbi1zaWRlYmFyLXdpZHRoOiAxNjBweDtcbiRhZG1pbi1zaWRlYmFyLXdpZHRoLWJpZzogMTkwcHg7XG4kYWRtaW4tc2lkZWJhci13aWR0aC1jb2xsYXBzZWQ6IDM2cHg7XG4kbW9kYWwtbWluLXdpZHRoOiAzNTBweDtcbiRtb2RhbC13aWR0aC1zbWFsbDogMzg0cHg7XG4kbW9kYWwtd2lkdGgtbWVkaXVtOiA1MTJweDtcbiRtb2RhbC13aWR0aC1sYXJnZTogODQwcHg7XG4kc3Bpbm5lci1zaXplOiAxNnB4O1xuJGNhbnZhcy1wYWRkaW5nOiAkZ3JpZC11bml0LTIwO1xuXG4vKipcbiAqIE1vYmlsZSBzcGVjaWZpYyBzdHlsZXNcbiAqL1xuJG1vYmlsZS10ZXh0LW1pbi1mb250LXNpemU6IDE2cHg7IC8vIEFueSBmb250IHNpemUgYmVsb3cgMTZweCB3aWxsIGNhdXNlIE1vYmlsZSBTYWZhcmkgdG8gXCJ6b29tIGluXCIuXG5cbi8qKlxuICogRWRpdG9yIHN0eWxlcy5cbiAqL1xuXG4kc2lkZWJhci13aWR0aDogMjgwcHg7XG4kY29udGVudC13aWR0aDogODQwcHg7XG4kd2lkZS1jb250ZW50LXdpZHRoOiAxMTAwcHg7XG4kd2lkZ2V0LWFyZWEtd2lkdGg6IDcwMHB4O1xuJHNlY29uZGFyeS1zaWRlYmFyLXdpZHRoOiAzNTBweDtcbiRlZGl0b3ItZm9udC1zaXplOiAxNnB4O1xuJGRlZmF1bHQtYmxvY2stbWFyZ2luOiAyOHB4OyAvLyBUaGlzIHZhbHVlIHByb3ZpZGVzIGEgY29uc2lzdGVudCwgY29udGlndW91cyBzcGFjaW5nIGJldHdlZW4gYmxvY2tzLlxuJHRleHQtZWRpdG9yLWZvbnQtc2l6ZTogMTVweDtcbiRlZGl0b3ItbGluZS1oZWlnaHQ6IDEuODtcbiRlZGl0b3ItaHRtbC1mb250OiAkZm9udC1mYW1pbHktbW9ubztcblxuLyoqXG4gKiBCbG9jayAmIEVkaXRvciBVSS5cbiAqL1xuXG4kYmxvY2stdG9vbGJhci1oZWlnaHQ6ICRncmlkLXVuaXQtNjA7XG4kYm9yZGVyLXdpZHRoOiAxcHg7XG4kYm9yZGVyLXdpZHRoLWZvY3VzLWZhbGxiYWNrOiAycHg7IC8vIFRoaXMgZXhpc3RzIGFzIGEgZmFsbGJhY2ssIGFuZCBpcyBpZGVhbGx5IG92ZXJyaWRkZW4gYnkgdmFyKC0td3AtYWRtaW4tYm9yZGVyLXdpZHRoLWZvY3VzKSB1bmxlc3MgaW4gc29tZSBTQVNTIG1hdGggY2FzZXMuXG4kYm9yZGVyLXdpZHRoLXRhYjogMS41cHg7XG4kaGVscHRleHQtZm9udC1zaXplOiAxMnB4O1xuJHJhZGlvLWlucHV0LXNpemU6IDE2cHg7XG4kcmFkaW8taW5wdXQtc2l6ZS1zbTogMjRweDsgLy8gV2lkdGggJiBoZWlnaHQgZm9yIHNtYWxsIHZpZXdwb3J0cy5cblxuLy8gRGVwcmVjYXRlZCwgcGxlYXNlIGF2b2lkIHVzaW5nIHRoZXNlLlxuJGJsb2NrLXBhZGRpbmc6IDE0cHg7IC8vIFVzZWQgdG8gZGVmaW5lIHNwYWNlIGJldHdlZW4gYmxvY2sgZm9vdHByaW50IGFuZCBzdXJyb3VuZGluZyBib3JkZXJzLlxuJHJhZGl1cy1ibG9jay11aTogJHJhZGl1cy1zbWFsbDtcbiRzaGFkb3ctcG9wb3ZlcjogJGVsZXZhdGlvbi14LXNtYWxsO1xuJHNoYWRvdy1tb2RhbDogJGVsZXZhdGlvbi1sYXJnZTtcbiRkZWZhdWx0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZWRpdW07XG5cbi8qKlxuICogQmxvY2sgcGFkZGluZ3MuXG4gKi9cblxuLy8gUGFkZGluZyBmb3IgYmxvY2tzIHdpdGggYSBiYWNrZ3JvdW5kIGNvbG9yIChlLmcuIHBhcmFncmFwaCBvciBncm91cCkuXG4kYmxvY2stYmctcGFkZGluZy0tdjogMS4yNWVtO1xuJGJsb2NrLWJnLXBhZGRpbmctLWg6IDIuMzc1ZW07XG5cblxuLyoqXG4gKiBSZWFjdCBOYXRpdmUgc3BlY2lmaWMuXG4gKiBUaGVzZSB2YXJpYWJsZXMgZG8gbm90IGFwcGVhciB0byBiZSB1c2VkIGFueXdoZXJlIGVsc2UuXG4gKi9cblxuLy8gRGltZW5zaW9ucy5cbiRtb2JpbGUtaGVhZGVyLXRvb2xiYXItaGVpZ2h0OiA0NHB4O1xuJG1vYmlsZS1oZWFkZXItdG9vbGJhci1leHBhbmRlZC1oZWlnaHQ6IDUycHg7XG4kbW9iaWxlLWZsb2F0aW5nLXRvb2xiYXItaGVpZ2h0OiA0NHB4O1xuJG1vYmlsZS1mbG9hdGluZy10b29sYmFyLW1hcmdpbjogOHB4O1xuJG1vYmlsZS1jb2xvci1zd2F0Y2g6IDQ4cHg7XG5cbi8vIEJsb2NrIFVJLlxuJG1vYmlsZS1ibG9jay10b29sYmFyLWhlaWdodDogNDRweDtcbiRkaW1tZWQtb3BhY2l0eTogMTtcbiRibG9jay1lZGdlLXRvLWNvbnRlbnQ6IDE2cHg7XG4kc29saWQtYm9yZGVyLXNwYWNlOiAxMnB4O1xuJGRhc2hlZC1ib3JkZXItc3BhY2U6IDZweDtcbiRibG9jay1zZWxlY3RlZC1tYXJnaW46IDNweDtcbiRibG9jay1zZWxlY3RlZC1ib3JkZXItd2lkdGg6IDFweDtcbiRibG9jay1zZWxlY3RlZC1wYWRkaW5nOiAwO1xuJGJsb2NrLXNlbGVjdGVkLWNoaWxkLW1hcmdpbjogNXB4O1xuJGJsb2NrLXNlbGVjdGVkLXRvLWNvbnRlbnQ6ICRibG9jay1lZGdlLXRvLWNvbnRlbnQgLSAkYmxvY2stc2VsZWN0ZWQtbWFyZ2luIC0gJGJsb2NrLXNlbGVjdGVkLWJvcmRlci13aWR0aDtcbiIsIi8qKlxuICogQ29sb3JzXG4gKi9cblxuLy8gV29yZFByZXNzIGdyYXlzLlxuJGJsYWNrOiAjMDAwO1x0XHRcdC8vIFVzZSBvbmx5IHdoZW4geW91IHRydWx5IG5lZWQgcHVyZSBibGFjay4gRm9yIFVJLCB1c2UgJGdyYXktOTAwLlxuJGdyYXktOTAwOiAjMWUxZTFlO1xuJGdyYXktODAwOiAjMmYyZjJmO1xuJGdyYXktNzAwOiAjNzU3NTc1O1x0XHQvLyBNZWV0cyA0LjY6MSAoNC41OjEgaXMgbWluaW11bSkgdGV4dCBjb250cmFzdCBhZ2FpbnN0IHdoaXRlLlxuJGdyYXktNjAwOiAjOTQ5NDk0O1x0XHQvLyBNZWV0cyAzOjEgVUkgb3IgbGFyZ2UgdGV4dCBjb250cmFzdCBhZ2FpbnN0IHdoaXRlLlxuJGdyYXktNDAwOiAjY2NjO1xuJGdyYXktMzAwOiAjZGRkO1x0XHQvLyBVc2VkIGZvciBtb3N0IGJvcmRlcnMuXG4kZ3JheS0yMDA6ICNlMGUwZTA7XHRcdC8vIFVzZWQgc3BhcmluZ2x5IGZvciBsaWdodCBib3JkZXJzLlxuJGdyYXktMTAwOiAjZjBmMGYwO1x0XHQvLyBVc2VkIGZvciBsaWdodCBncmF5IGJhY2tncm91bmRzLlxuJHdoaXRlOiAjZmZmO1xuXG4vLyBPcGFjaXRpZXMgJiBhZGRpdGlvbmFsIGNvbG9ycy5cbiRkYXJrLWdyYXktcGxhY2Vob2xkZXI6IHJnYmEoJGdyYXktOTAwLCAwLjYyKTtcbiRtZWRpdW0tZ3JheS1wbGFjZWhvbGRlcjogcmdiYSgkZ3JheS05MDAsIDAuNTUpO1xuJGxpZ2h0LWdyYXktcGxhY2Vob2xkZXI6IHJnYmEoJHdoaXRlLCAwLjY1KTtcblxuLy8gQWxlcnQgY29sb3JzLlxuJGFsZXJ0LXllbGxvdzogI2YwYjg0OTtcbiRhbGVydC1yZWQ6ICNjYzE4MTg7XG4kYWxlcnQtZ3JlZW46ICM0YWI4NjY7XG5cbi8vIERlcHJlY2F0ZWQsIHBsZWFzZSBhdm9pZCB1c2luZyB0aGVzZS5cbiRkYXJrLXRoZW1lLWZvY3VzOiAkd2hpdGU7XHQvLyBGb2N1cyBjb2xvciB3aGVuIHRoZSB0aGVtZSBpcyBkYXJrLlxuIiwiQHVzZSBcIkB3b3JkcHJlc3MvdGhlbWUvc3JjL3ByZWJ1aWx0L2Nzcy9kZXNpZ24tdG9rZW5zLmNzc1wiIGFzICo7XG5AdXNlIFwiQHdvcmRwcmVzcy9hZG1pbi11aS9idWlsZC1zdHlsZS9zdHlsZS5jc3NcIiBhcyAqO1xuQHVzZSBcIkB3b3JkcHJlc3MvYmFzZS1zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi8vIFJlc2V0IHdwLWFkbWluIGxheW91dCBzdHlsZXMgd2hlbiBsb2FkZWQgaW5zaWRlIHdwLWFkbWluLlxuLmJvb3QtbGF5b3V0LWNvbnRhaW5lciAuYm9vdC1sYXlvdXQge1xuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSAje3ZhcmlhYmxlcy4kYWRtaW4tYmFyLWhlaWdodH0pO1xufVxuXG5ib2R5OmhhcyguYm9vdC1sYXlvdXQtY29udGFpbmVyKSB7XG5cdGJhY2tncm91bmQ6ICMxZDIzMjc7IC8vIFNhbWUgYXMgV1AtQWRtaW4gc2lkZWJhclxuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jd3Bjb250ZW50IHtcblx0cGFkZGluZy1sZWZ0OiAwO1xufVxuXG4jd3Bib2R5LWNvbnRlbnQge1xuXHRwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuI3dwZm9vdGVyIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css11));
export {
  init,
  initSinglePage
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.js.map
