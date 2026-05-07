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
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
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

// package-external:@wordpress/i18n
var require_i18n = __commonJS({
  "package-external:@wordpress/i18n"(exports, module) {
    module.exports = window.wp.i18n;
  }
});

// package-external:@wordpress/element
var require_element = __commonJS({
  "package-external:@wordpress/element"(exports, module) {
    module.exports = window.wp.element;
  }
});

// vendor-external:react
var require_react = __commonJS({
  "vendor-external:react"(exports, module) {
    module.exports = window.React;
  }
});

// vendor-external:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "vendor-external:react/jsx-runtime"(exports, module) {
    module.exports = window.ReactJSXRuntime;
  }
});

// vendor-external:react-dom
var require_react_dom = __commonJS({
  "vendor-external:react-dom"(exports, module) {
    module.exports = window.ReactDOM;
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
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React55.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState19({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect7(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect19(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue2(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error2) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React55 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState19 = React55.useState, useEffect19 = React55.useEffect, useLayoutEffect7 = React55.useLayoutEffect, useDebugValue2 = React55.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React55.useSyncExternalStore ? React55.useSyncExternalStore : shim;
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
      var React55 = require_react(), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore2 = shim.useSyncExternalStore, useRef25 = React55.useRef, useEffect19 = React55.useEffect, useMemo24 = React55.useMemo, useDebugValue2 = React55.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef25(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo24(
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
        var value = useSyncExternalStore2(subscribe, instRef[0], instRef[1]);
        useEffect19(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue2(value);
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

// package-external:@wordpress/primitives
var require_primitives = __commonJS({
  "package-external:@wordpress/primitives"(exports, module) {
    module.exports = window.wp.primitives;
  }
});

// package-external:@wordpress/compose
var require_compose = __commonJS({
  "package-external:@wordpress/compose"(exports, module) {
    module.exports = window.wp.compose;
  }
});

// package-external:@wordpress/theme
var require_theme = __commonJS({
  "package-external:@wordpress/theme"(exports, module) {
    module.exports = window.wp.theme;
  }
});

// package-external:@wordpress/private-apis
var require_private_apis = __commonJS({
  "package-external:@wordpress/private-apis"(exports, module) {
    module.exports = window.wp.privateApis;
  }
});

// package-external:@wordpress/components
var require_components = __commonJS({
  "package-external:@wordpress/components"(exports, module) {
    module.exports = window.wp.components;
  }
});

// package-external:@wordpress/data
var require_data = __commonJS({
  "package-external:@wordpress/data"(exports, module) {
    module.exports = window.wp.data;
  }
});

// package-external:@wordpress/preferences
var require_preferences = __commonJS({
  "package-external:@wordpress/preferences"(exports, module) {
    module.exports = window.wp.preferences;
  }
});

// package-external:@wordpress/core-data
var require_core_data = __commonJS({
  "package-external:@wordpress/core-data"(exports, module) {
    module.exports = window.wp.coreData;
  }
});

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

// node_modules/@base-ui/utils/esm/error.js
var set;
if (true) {
  set = /* @__PURE__ */ new Set();
}
function error(...messages) {
  if (true) {
    const messageKey = messages.join(" ");
    if (!set.has(messageKey)) {
      set.add(messageKey);
      console.error(`Base UI: ${messageKey}`);
    }
  }
}

// node_modules/@base-ui/utils/esm/useStableCallback.js
var React2 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/esm/useRefWithInit.js
var React = __toESM(require_react(), 1);
var UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
  const ref = React.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

// node_modules/@base-ui/utils/esm/useStableCallback.js
var useInsertionEffect = React2[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)];
var useSafeInsertionEffect = (
  // React 17 doesn't have useInsertionEffect.
  useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
  useInsertionEffect !== React2.useLayoutEffect ? useInsertionEffect : (fn) => fn()
);
function useStableCallback(callback) {
  const stable = useRefWithInit(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: void 0,
    callback: assertNotCalled,
    trampoline: (...args) => stable.callback?.(...args),
    effect: () => {
      stable.callback = stable.next;
    }
  };
  return stable;
}
function assertNotCalled() {
  if (true) {
    throw (
      /* minify-error-disabled */
      new Error("Base UI: Cannot call an event handler while rendering.")
    );
  }
}

// node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js
var React3 = __toESM(require_react(), 1);
var noop = () => {
};
var useIsoLayoutEffect = typeof document !== "undefined" ? React3.useLayoutEffect : noop;

// node_modules/@base-ui/utils/esm/warn.js
var set2;
if (true) {
  set2 = /* @__PURE__ */ new Set();
}
function warn(...messages) {
  if (true) {
    const messageKey = messages.join(" ");
    if (!set2.has(messageKey)) {
      set2.add(messageKey);
      console.warn(`Base UI: ${messageKey}`);
    }
  }
}

// node_modules/@base-ui/react/esm/internals/direction-context/DirectionContext.js
var React4 = __toESM(require_react(), 1);
var DirectionContext = /* @__PURE__ */ React4.createContext(void 0);
if (true) DirectionContext.displayName = "DirectionContext";
function useDirection() {
  const context = React4.useContext(DirectionContext);
  return context?.direction ?? "ltr";
}

// node_modules/@base-ui/react/esm/internals/useRenderElement.js
var React7 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/esm/useMergedRefs.js
function useMergedRefs(a, b, c, d) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChange(forkRef, a, b, c, d)) {
    update(forkRef, [a, b, c, d]);
  }
  return forkRef.callback;
}
function useMergedRefsN(refs) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChangeN(forkRef, refs)) {
    update(forkRef, refs);
  }
  return forkRef.callback;
}
function createForkRef() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function didChange(forkRef, a, b, c, d) {
  return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c || forkRef.refs[3] !== d;
}
function didChangeN(forkRef, newRefs) {
  return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index2) => ref !== newRefs[index2]);
}
function update(forkRef, refs) {
  forkRef.refs = refs;
  if (refs.every((ref) => ref == null)) {
    forkRef.callback = null;
    return;
  }
  forkRef.callback = (instance) => {
    if (forkRef.cleanup) {
      forkRef.cleanup();
      forkRef.cleanup = null;
    }
    if (instance != null) {
      const cleanupCallbacks = Array(refs.length).fill(null);
      for (let i = 0; i < refs.length; i += 1) {
        const ref = refs[i];
        if (ref == null) {
          continue;
        }
        switch (typeof ref) {
          case "function": {
            const refCleanup = ref(instance);
            if (typeof refCleanup === "function") {
              cleanupCallbacks[i] = refCleanup;
            }
            break;
          }
          case "object": {
            ref.current = instance;
            break;
          }
          default:
        }
      }
      forkRef.cleanup = () => {
        for (let i = 0; i < refs.length; i += 1) {
          const ref = refs[i];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case "function": {
              const cleanupCallback = cleanupCallbacks[i];
              if (typeof cleanupCallback === "function") {
                cleanupCallback();
              } else {
                ref(null);
              }
              break;
            }
            case "object": {
              ref.current = null;
              break;
            }
            default:
          }
        }
      };
    }
  };
}

// node_modules/@base-ui/utils/esm/getReactElementRef.js
var React6 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/esm/reactVersion.js
var React5 = __toESM(require_react(), 1);
var majorVersion = parseInt(React5.version, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}

// node_modules/@base-ui/utils/esm/getReactElementRef.js
function getReactElementRef(element) {
  if (!/* @__PURE__ */ React6.isValidElement(element)) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}

// node_modules/@base-ui/utils/esm/mergeObjects.js
function mergeObjects(a, b) {
  if (a && !b) {
    return a;
  }
  if (!a && b) {
    return b;
  }
  if (a || b) {
    return {
      ...a,
      ...b
    };
  }
  return void 0;
}

// node_modules/@base-ui/utils/esm/empty.js
function NOOP() {
}
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// node_modules/@base-ui/react/esm/internals/getStateAttributesProps.js
function getStateAttributesProps(state, customMapping) {
  const props = {};
  for (const key2 in state) {
    const value = state[key2];
    if (customMapping?.hasOwnProperty(key2)) {
      const customProps = customMapping[key2](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key2.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key2.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}

// node_modules/@base-ui/react/esm/utils/resolveClassName.js
function resolveClassName(className, state) {
  return typeof className === "function" ? className(state) : className;
}

// node_modules/@base-ui/react/esm/utils/resolveStyle.js
function resolveStyle(style, state) {
  return typeof style === "function" ? style(state) : style;
}

// node_modules/@base-ui/react/esm/merge-props/mergeProps.js
var EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
  if (!c && !d && !e && !a) {
    return createInitialMergedProps(b);
  }
  let merged = createInitialMergedProps(a);
  if (b) {
    merged = mergeInto(merged, b);
  }
  if (c) {
    merged = mergeInto(merged, c);
  }
  if (d) {
    merged = mergeInto(merged, d);
  }
  if (e) {
    merged = mergeInto(merged, e);
  }
  return merged;
}
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return createInitialMergedProps(props[0]);
  }
  let merged = createInitialMergedProps(props[0]);
  for (let i = 1; i < props.length; i += 1) {
    merged = mergeInto(merged, props[i]);
  }
  return merged;
}
function createInitialMergedProps(inputProps) {
  if (isPropsGetter(inputProps)) {
    return {
      ...resolvePropsGetter(inputProps, EMPTY_PROPS)
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return resolvePropsGetter(inputProps, merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
  const copiedProps = {
    ...inputProps
  };
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler(propValue);
    }
  }
  return copiedProps;
}
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
        break;
      }
      default: {
        if (isEventHandler(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler(key2, value) {
  const code0 = key2.charCodeAt(0);
  const code1 = key2.charCodeAt(1);
  const code2 = key2.charCodeAt(2);
  return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter(inputProps) {
  return typeof inputProps === "function";
}
function resolvePropsGetter(inputProps, previousProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result2 = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(...args);
      }
      return result2;
    }
    const result = theirHandler(...args);
    ourHandler?.(...args);
    return result;
  };
}
function wrapEventHandler(handler) {
  if (!handler) {
    return handler;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      makeEventPreventable(event);
    }
    return handler(...args);
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}

// node_modules/@base-ui/react/esm/internals/useRenderElement.js
var import_react = __toESM(require_react(), 1);
function useRenderElement(element, componentProps, params = {}) {
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}
function useRenderElementProps(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
  } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping: stateAttributesMapping3,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName(classNameProp, state) : void 0;
  const style = enabled ? resolveStyle(styleProp, state) : void 0;
  const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping3) : EMPTY_OBJECT;
  const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : void 0;
  const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== void 0) {
    outProps.className = mergeClassNames(outProps.className, className);
  }
  if (style !== void 0) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps(props) {
  if (Array.isArray(props)) {
    return mergePropsN(props);
  }
  return mergeProps(void 0, props);
}
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
var COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
var LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
function evaluateRenderProp(element, render, props, state) {
  if (render) {
    if (typeof render === "function") {
      if (true) {
        warnIfRenderPropLooksLikeComponent(render);
      }
      return render(props, state);
    }
    const mergedProps = mergeProps(props, render.props);
    mergedProps.ref = props.ref;
    let newElement = render;
    if (newElement?.$$typeof === REACT_LAZY_TYPE) {
      const children = React7.Children.toArray(render);
      newElement = children[0];
    }
    if (true) {
      if (!/* @__PURE__ */ React7.isValidElement(newElement)) {
        throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join("\n"));
      }
    }
    return /* @__PURE__ */ React7.cloneElement(newElement, mergedProps);
  }
  if (element) {
    if (typeof element === "string") {
      return renderTag(element, props);
    }
  }
  throw new Error(true ? "Base UI: Render element or function are not defined." : formatErrorMessage_default(8));
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
  const functionName = renderFn.name;
  if (functionName.length === 0) {
    return;
  }
  if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
    return;
  }
  if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
    return;
  }
  warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function renderTag(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ (0, import_react.createElement)("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ (0, import_react.createElement)("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ React7.createElement(Tag, props);
}

// node_modules/@base-ui/react/esm/internals/reason-parts.js
var reason_parts_exports = {};
__export(reason_parts_exports, {
  cancelOpen: () => cancelOpen,
  chipRemovePress: () => chipRemovePress,
  clearPress: () => clearPress,
  closePress: () => closePress,
  closeWatcher: () => closeWatcher,
  decrementPress: () => decrementPress,
  disabled: () => disabled,
  drag: () => drag,
  escapeKey: () => escapeKey,
  focusOut: () => focusOut,
  imperativeAction: () => imperativeAction,
  incrementPress: () => incrementPress,
  inputBlur: () => inputBlur,
  inputChange: () => inputChange,
  inputClear: () => inputClear,
  inputPaste: () => inputPaste,
  inputPress: () => inputPress,
  itemPress: () => itemPress,
  keyboard: () => keyboard,
  linkPress: () => linkPress,
  listNavigation: () => listNavigation,
  none: () => none,
  outsidePress: () => outsidePress,
  pointer: () => pointer,
  scrub: () => scrub,
  siblingOpen: () => siblingOpen,
  swipe: () => swipe,
  trackPress: () => trackPress,
  triggerFocus: () => triggerFocus,
  triggerHover: () => triggerHover,
  triggerPress: () => triggerPress,
  wheel: () => wheel,
  windowResize: () => windowResize
});
var none = "none";
var triggerPress = "trigger-press";
var triggerHover = "trigger-hover";
var triggerFocus = "trigger-focus";
var outsidePress = "outside-press";
var itemPress = "item-press";
var closePress = "close-press";
var linkPress = "link-press";
var clearPress = "clear-press";
var chipRemovePress = "chip-remove-press";
var trackPress = "track-press";
var incrementPress = "increment-press";
var decrementPress = "decrement-press";
var inputChange = "input-change";
var inputClear = "input-clear";
var inputBlur = "input-blur";
var inputPaste = "input-paste";
var inputPress = "input-press";
var focusOut = "focus-out";
var escapeKey = "escape-key";
var closeWatcher = "close-watcher";
var listNavigation = "list-navigation";
var keyboard = "keyboard";
var pointer = "pointer";
var drag = "drag";
var wheel = "wheel";
var scrub = "scrub";
var cancelOpen = "cancel-open";
var siblingOpen = "sibling-open";
var disabled = "disabled";
var imperativeAction = "imperative-action";
var swipe = "swipe";
var windowResize = "window-resize";

// node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = customProperties ?? EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}

// node_modules/@base-ui/utils/esm/useId.js
var React9 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/esm/safeReact.js
var React8 = __toESM(require_react(), 1);
var SafeReact = {
  ...React8
};

// node_modules/@base-ui/utils/esm/useId.js
var globalId = 0;
function useGlobalId(idOverride, prefix = "mui") {
  const [defaultId, setDefaultId] = React9.useState(idOverride);
  const id = idOverride || defaultId;
  React9.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`${prefix}-${globalId}`);
    }
  }, [defaultId, prefix]);
  return id;
}
var maybeReactUseId = SafeReact.useId;
function useId(idOverride, prefix) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
  }
  return useGlobalId(idOverride, prefix);
}

// node_modules/@base-ui/react/esm/internals/useBaseUiId.js
function useBaseUiId(idOverride) {
  return useId(idOverride, "base-ui");
}

// node_modules/@base-ui/react/esm/internals/useAnimationsFinished.js
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/utils/esm/useOnMount.js
var React10 = __toESM(require_react(), 1);
var EMPTY = [];
function useOnMount(fn) {
  React10.useEffect(fn, EMPTY);
}

// node_modules/@base-ui/utils/esm/useAnimationFrame.js
var EMPTY2 = null;
var LAST_RAF = globalThis.requestAnimationFrame;
var Scheduler = class {
  /* This implementation uses an array as a backing data-structure for frame callbacks.
   * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
   * never calls the native `cancelAnimationFrame` if there are no frames left. This can
   * be much more efficient if there is a call pattern that alterns as
   * "request-cancel-request-cancel-…".
   * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
   * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = false;
  tick = (timestamp) => {
    this.isScheduled = false;
    const currentCallbacks = this.callbacks;
    const currentCallbacksCount = this.callbacksCount;
    this.callbacks = [];
    this.callbacksCount = 0;
    this.startId = this.nextId;
    if (currentCallbacksCount > 0) {
      for (let i = 0; i < currentCallbacks.length; i += 1) {
        currentCallbacks[i]?.(timestamp);
      }
    }
  };
  request(fn) {
    const id = this.nextId;
    this.nextId += 1;
    this.callbacks.push(fn);
    this.callbacksCount += 1;
    const didRAFChange = LAST_RAF !== requestAnimationFrame && (LAST_RAF = requestAnimationFrame, true);
    if (!this.isScheduled || didRAFChange) {
      requestAnimationFrame(this.tick);
      this.isScheduled = true;
    }
    return id;
  }
  cancel(id) {
    const index2 = id - this.startId;
    if (index2 < 0 || index2 >= this.callbacks.length) {
      return;
    }
    this.callbacks[index2] = null;
    this.callbacksCount -= 1;
  }
};
var scheduler = new Scheduler();
var AnimationFrame = class _AnimationFrame {
  static create() {
    return new _AnimationFrame();
  }
  static request(fn) {
    return scheduler.request(fn);
  }
  static cancel(id) {
    return scheduler.cancel(id);
  }
  currentId = EMPTY2;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  request(fn) {
    this.cancel();
    this.currentId = scheduler.request(() => {
      this.currentId = EMPTY2;
      fn();
    });
  }
  cancel = () => {
    if (this.currentId !== EMPTY2) {
      scheduler.cancel(this.currentId);
      this.currentId = EMPTY2;
    }
  };
  disposeEffect = () => {
    return this.cancel;
  };
};
function useAnimationFrame() {
  const timeout = useRefWithInit(AnimationFrame.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// node_modules/@base-ui/react/esm/utils/resolveRef.js
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return "current" in maybeRef ? maybeRef.current : maybeRef;
}

// node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js
var TransitionStatusDataAttributes = /* @__PURE__ */ (function(TransitionStatusDataAttributes2) {
  TransitionStatusDataAttributes2["startingStyle"] = "data-starting-style";
  TransitionStatusDataAttributes2["endingStyle"] = "data-ending-style";
  return TransitionStatusDataAttributes2;
})({});
var STARTING_HOOK = {
  [TransitionStatusDataAttributes.startingStyle]: ""
};
var ENDING_HOOK = {
  [TransitionStatusDataAttributes.endingStyle]: ""
};
var transitionStatusMapping = {
  transitionStatus(value) {
    if (value === "starting") {
      return STARTING_HOOK;
    }
    if (value === "ending") {
      return ENDING_HOOK;
    }
    return null;
  }
};

// node_modules/@base-ui/react/esm/internals/useAnimationsFinished.js
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
  const frame = useAnimationFrame();
  return useStableCallback((fnToExecute, signal = null) => {
    frame.cancel();
    const element = resolveRef(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      ReactDOM.flushSync(fnToExecute);
    };
    if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(resolvedElement.getAnimations().map((animation) => animation.finished)).then(() => {
        if (!signal?.aborted) {
          done();
        }
      }).catch(() => {
        if (treatAbortedAsFinished) {
          if (!signal?.aborted) {
            done();
          }
          return;
        }
        const currentAnimations = resolvedElement.getAnimations();
        if (!signal?.aborted && currentAnimations.length > 0 && currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) {
          exec();
        }
      });
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = TransitionStatusDataAttributes.startingStyle;
      if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
        frame.request(exec);
        return;
      }
      const attributeObserver = new MutationObserver(() => {
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          attributeObserver.disconnect();
          exec();
        }
      });
      attributeObserver.observe(resolvedElement, {
        attributes: true,
        attributeFilter: [startingStyleAttribute]
      });
      signal?.addEventListener("abort", () => attributeObserver.disconnect(), {
        once: true
      });
      return;
    }
    frame.request(exec);
  });
}

// node_modules/@base-ui/react/esm/internals/useTransitionStatus.js
var React11 = __toESM(require_react(), 1);
function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
  const [transitionStatus, setTransitionStatus] = React11.useState(open && enableIdleState ? "idle" : void 0);
  const [mounted, setMounted] = React11.useState(open);
  if (open && !mounted) {
    setMounted(true);
    setTransitionStatus("starting");
  }
  if (!open && mounted && transitionStatus !== "ending" && !deferEndingState) {
    setTransitionStatus("ending");
  }
  if (!open && !mounted && transitionStatus === "ending") {
    setTransitionStatus(void 0);
  }
  useIsoLayoutEffect(() => {
    if (!open && mounted && transitionStatus !== "ending" && deferEndingState) {
      const frame = AnimationFrame.request(() => {
        setTransitionStatus("ending");
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }
    return void 0;
  }, [open, mounted, transitionStatus, deferEndingState]);
  useIsoLayoutEffect(() => {
    if (!open || enableIdleState) {
      return void 0;
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus(void 0);
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open]);
  useIsoLayoutEffect(() => {
    if (!open || !enableIdleState) {
      return void 0;
    }
    if (open && mounted && transitionStatus !== "idle") {
      setTransitionStatus("starting");
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus("idle");
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open, mounted, transitionStatus]);
  return {
    mounted,
    setMounted,
    transitionStatus
  };
}

// node_modules/@base-ui/react/esm/internals/use-button/useButton.js
var React14 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e) {
  }
  try {
    return element.matches(":modal");
  } catch (_e) {
    return false;
  }
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@base-ui/react/esm/internals/composite/root/CompositeRootContext.js
var React12 = __toESM(require_react(), 1);
var CompositeRootContext = /* @__PURE__ */ React12.createContext(void 0);
if (true) CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
  const context = React12.useContext(CompositeRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : formatErrorMessage_default(16));
  }
  return context;
}

// node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js
var React13 = __toESM(require_react(), 1);
function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled: disabled2,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;
  const props = React13.useMemo(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled2 && focusableWhenDisabled && event.key !== "Tab") {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled2) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled2) {
      additionalProps["aria-disabled"] = disabled2;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled2;
    }
    return additionalProps;
  }, [composite, disabled2, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
}

// node_modules/@base-ui/react/esm/internals/use-button/useButton.js
function useButton(parameters = {}) {
  const {
    disabled: disabled2 = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp
  } = parameters;
  const elementRef = React14.useRef(null);
  const compositeRootContext = useCompositeRootContext(true);
  const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled({
    focusableWhenDisabled,
    disabled: disabled2,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  if (true) {
    React14.useEffect(() => {
      if (!elementRef.current) {
        return;
      }
      const isButtonTag = isButtonElement(elementRef.current);
      if (isNativeButton) {
        if (!isButtonTag) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          const message = "A component that acts as a button expected a native <button> because the `nativeButton` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the `render` prop, or set `nativeButton` to `false`.";
          error(`${message}${ownerStackMessage}`);
        }
      } else if (isButtonTag) {
        const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
        const message = "A component that acts as a button expected a non-<button> because the `nativeButton` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set `nativeButton` to `true`.";
        error(`${message}${ownerStackMessage}`);
      }
    }, [isNativeButton]);
  }
  const updateDisabled = React14.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled2 && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
      element.disabled = false;
    }
  }, [disabled2, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = React14.useCallback((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    const type = isNativeButton ? "button" : void 0;
    return mergeProps({
      type,
      onClick(event) {
        if (disabled2) {
          event.preventDefault();
          return;
        }
        externalOnClick?.(event);
      },
      onMouseDown(event) {
        if (!disabled2) {
          externalOnMouseDown?.(event);
        }
      },
      onKeyDown(event) {
        if (disabled2) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyDown?.(event);
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const isCurrentTarget = event.target === event.currentTarget;
        const currentTarget = event.currentTarget;
        const isButton = isButtonElement(currentTarget);
        const isLink = !isNativeButton && isValidLinkElement(currentTarget);
        const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
        const isEnterKey = event.key === "Enter";
        const isSpaceKey = event.key === " ";
        const role = currentTarget.getAttribute("role");
        const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
        if (isCurrentTarget && isCompositeItem && isSpaceKey) {
          if (event.defaultPrevented && isTextNavigationRole) {
            return;
          }
          event.preventDefault();
          if (isLink || isNativeButton && isButton) {
            currentTarget.click();
            event.preventBaseUIHandler();
          } else if (shouldClick) {
            externalOnClick?.(event);
            event.preventBaseUIHandler();
          }
          return;
        }
        if (shouldClick) {
          if (!isNativeButton && (isSpaceKey || isEnterKey)) {
            event.preventDefault();
          }
          if (!isNativeButton && isEnterKey) {
            externalOnClick?.(event);
          }
        }
      },
      onKeyUp(event) {
        if (disabled2) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyUp?.(event);
        if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
          event.preventDefault();
          return;
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === " ") {
          externalOnClick?.(event);
        }
      },
      onPointerDown(event) {
        if (disabled2) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown?.(event);
      }
    }, !isNativeButton ? {
      role: "button"
    } : void 0, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled2, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
  const buttonRef = useStableCallback((element) => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement(elem) {
  return Boolean(elem?.tagName === "A" && elem?.href);
}

// node_modules/@base-ui/utils/esm/detectBrowser.js
var hasNavigator = typeof navigator !== "undefined";
var nav = getNavigatorData();
var platform = getPlatform();
var userAgent = getUserAgent();
var isWebKit2 = typeof CSS === "undefined" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter:none");
var isIOS = (
  // iPads can claim to be MacIntel
  nav.platform === "MacIntel" && nav.maxTouchPoints > 1 ? true : /iP(hone|ad|od)|iOS/.test(nav.platform)
);
var isFirefox = hasNavigator && /firefox/i.test(userAgent);
var isSafari = hasNavigator && /apple/i.test(navigator.vendor);
var isEdge = hasNavigator && /Edg/i.test(userAgent);
var isAndroid = hasNavigator && /android/i.test(platform) || /android/i.test(userAgent);
var isMac = hasNavigator && platform.toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
var isJSDOM = userAgent.includes("jsdom/");
function getNavigatorData() {
  if (!hasNavigator) {
    return {
      platform: "",
      maxTouchPoints: -1
    };
  }
  const uaData = navigator.userAgentData;
  if (uaData?.platform) {
    return {
      platform: uaData.platform,
      maxTouchPoints: navigator.maxTouchPoints
    };
  }
  return {
    platform: navigator.platform ?? "",
    maxTouchPoints: navigator.maxTouchPoints ?? -1
  };
}
function getUserAgent() {
  if (!hasNavigator) {
    return "";
  }
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map(({
      brand,
      version: version2
    }) => `${brand}/${version2}`).join(" ");
  }
  return navigator.userAgent;
}
function getPlatform() {
  if (!hasNavigator) {
    return "";
  }
  const uaData = navigator.userAgentData;
  if (uaData?.platform) {
    return uaData.platform;
  }
  return navigator.platform ?? "";
}

// node_modules/@base-ui/react/esm/floating-ui-react/utils/constants.js
var FOCUSABLE_ATTRIBUTE = "data-base-ui-focusable";
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";

// node_modules/@base-ui/react/esm/internals/shadowDom.js
function activeElement(doc) {
  let element = doc.activeElement;
  while (element?.shadowRoot?.activeElement != null) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode?.();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}

// node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js
function isTargetInsideEnabledTrigger(target, triggerElements) {
  if (!isElement(target)) {
    return false;
  }
  const targetElement = target;
  if (triggerElements.hasElement(targetElement)) {
    return !targetElement.hasAttribute("data-trigger-disabled");
  }
  for (const [, trigger] of triggerElements.entries()) {
    if (contains(trigger, targetElement)) {
      return !trigger.hasAttribute("data-trigger-disabled");
    }
  }
  return false;
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const eventAgain = event;
  return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
  return element.matches("html,body");
}
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function isInteractiveElement(element) {
  return element?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${TYPEABLE_SELECTOR}`) != null;
}
function matchesFocusVisible(element) {
  if (!element || isJSDOM) {
    return true;
  }
  try {
    return element.matches(":focus-visible");
  } catch (_e) {
    return true;
  }
}

// node_modules/@base-ui/react/esm/floating-ui-react/utils/nodes.js
function getNodeChildren(nodes, id, onlyOpenChildren = true) {
  const directChildren = nodes.filter((node) => node.parentId === id);
  return directChildren.flatMap((child) => [...!onlyOpenChildren || child.context?.open ? [child] : [], ...getNodeChildren(nodes, child.id, onlyOpenChildren)]);
}

// node_modules/@base-ui/react/esm/floating-ui-react/utils/event.js
function isReactEvent(event) {
  return "nativeEvent" in event;
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
function isClickLikeEvent(event) {
  const type = event.type;
  return type === "click" || type === "mousedown" || type === "keydown" || type === "keyup";
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/@base-ui/react/esm/floating-ui-react/utils/composite.js
function isHiddenByStyles(styles) {
  return styles.visibility === "hidden" || styles.visibility === "collapse";
}
function isElementVisible(element, styles = element ? getComputedStyle2(element) : null) {
  if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
    return false;
  }
  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility();
  }
  return styles.display !== "none" && styles.display !== "contents";
}

// node_modules/@base-ui/utils/esm/owner.js
function ownerDocument(node) {
  return node?.ownerDocument || document;
}

// node_modules/@base-ui/react/esm/floating-ui-react/utils/tabbable.js
var CANDIDATE_SELECTOR = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function getParentElement(element) {
  const assignedSlot = element.assignedSlot;
  if (assignedSlot) {
    return assignedSlot;
  }
  if (element.parentElement) {
    return element.parentElement;
  }
  const rootNode = element.getRootNode();
  return isShadowRoot(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
  for (const child of Array.from(details.children)) {
    if (getNodeName(child) === "summary") {
      return child;
    }
  }
  return null;
}
function isWithinOpenDetailsSummary(element, details) {
  const summary = getDetailsSummary(details);
  return !!summary && (element === summary || contains(summary, element));
}
function isFocusableCandidate(element) {
  const nodeName = element ? getNodeName(element) : "";
  return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== "summary" || element.parentElement != null && getNodeName(element.parentElement) === "details" && getDetailsSummary(element.parentElement) === element) && (nodeName !== "details" || getDetailsSummary(element) == null) && (nodeName !== "input" || element.type !== "hidden");
}
function isFocusableElement(element) {
  if (!isFocusableCandidate(element) || !element.isConnected || element.matches(":disabled")) {
    return false;
  }
  for (let current = element; current; current = getParentElement(current)) {
    const isAncestor = current !== element;
    const isSlot = getNodeName(current) === "slot";
    if (current.hasAttribute("inert")) {
      return false;
    }
    if (isAncestor && getNodeName(current) === "details" && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute("hidden") || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) {
      return false;
    }
  }
  return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
  const styles = getComputedStyle2(element);
  if (!isAncestor) {
    return isElementVisible(element, styles);
  }
  return styles.display !== "none";
}
function getTabIndex(element) {
  const tabIndex = element.tabIndex;
  if (tabIndex < 0) {
    const nodeName = getNodeName(element);
    if (nodeName === "details" || nodeName === "audio" || nodeName === "video" || isHTMLElement(element) && element.isContentEditable) {
      return 0;
    }
  }
  return tabIndex;
}
function getNamedRadioInput(element) {
  if (getNodeName(element) !== "input") {
    return null;
  }
  const input = element;
  return input.type === "radio" && input.name !== "" ? input : null;
}
function isTabbableRadio(element, candidates) {
  const input = getNamedRadioInput(element);
  if (!input) {
    return true;
  }
  const checkedRadio = candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form && radio.checked;
  });
  if (checkedRadio) {
    return checkedRadio === input;
  }
  return candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form;
  }) === input;
}
function getComposedChildren(container) {
  if (isHTMLElement(container) && getNodeName(container) === "slot") {
    const assignedElements = container.assignedElements({
      flatten: true
    });
    if (assignedElements.length > 0) {
      return assignedElements;
    }
  }
  if (isHTMLElement(container) && container.shadowRoot) {
    return Array.from(container.shadowRoot.children);
  }
  return Array.from(container.children);
}
function appendCandidates(container, list) {
  getComposedChildren(container).forEach((child) => {
    if (isFocusableCandidate(child)) {
      list.push(child);
    }
    appendCandidates(child, list);
  });
}
function appendMatchingElements(container, selector, list) {
  getComposedChildren(container).forEach((child) => {
    if (isHTMLElement(child) && child.matches(selector)) {
      list.push(child);
    }
    appendMatchingElements(child, selector, list);
  });
}
function focusable(container) {
  const candidates = [];
  appendCandidates(container, candidates);
  return candidates.filter(isFocusableElement);
}
function tabbable(container) {
  const candidates = focusable(container);
  return candidates.filter((element) => getTabIndex(element) >= 0 && isTabbableRadio(element, candidates));
}
function getTabbableIn(container, dir) {
  const list = tabbable(container);
  const len = list.length;
  if (len === 0) {
    return void 0;
  }
  const active = activeElement(ownerDocument(container));
  const index2 = list.indexOf(active);
  const nextIndex = index2 === -1 ? dir === 1 ? 0 : len - 1 : index2 + dir;
  return list[nextIndex];
}
function getNextTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement;
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container);
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = [];
  appendMatchingElements(container, "[data-tabindex]", elements);
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}

// node_modules/@base-ui/utils/esm/addEventListener.js
function addEventListener(target, type, listener, options) {
  target.addEventListener(type, listener, options);
  return () => {
    target.removeEventListener(type, listener, options);
  };
}

// node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js
var React15 = __toESM(require_react(), 1);
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open,
    ref,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = useStableCallback(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished(ref, open, false);
  React15.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open, onComplete, runOnceAnimationsFinish]);
}

// node_modules/@base-ui/utils/esm/useOnFirstRender.js
var React16 = __toESM(require_react(), 1);
function useOnFirstRender(fn) {
  const ref = React16.useRef(true);
  if (ref.current) {
    ref.current = false;
    fn();
  }
}

// node_modules/@base-ui/utils/esm/useTimeout.js
var EMPTY3 = 0;
var Timeout = class _Timeout {
  static create() {
    return new _Timeout();
  }
  currentId = EMPTY3;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = EMPTY3;
      fn();
    }, delay);
  }
  isStarted() {
    return this.currentId !== EMPTY3;
  }
  clear = () => {
    if (this.currentId !== EMPTY3) {
      clearTimeout(this.currentId);
      this.currentId = EMPTY3;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
};
function useTimeout() {
  const timeout = useRefWithInit(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingDelayGroup.js
var React17 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverShared.js
function resolveValue(value, pointerType) {
  if (pointerType != null && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "function") {
    return value();
  }
  return value;
}
function getDelay(value, prop, pointerType) {
  const result = resolveValue(value, pointerType);
  if (typeof result === "number") {
    return result;
  }
  return result?.[prop];
}
function getRestMs(value) {
  if (typeof value === "function") {
    return value();
  }
  return value;
}
function isClickLikeOpenEvent(openEventType, interactedInside) {
  return interactedInside || openEventType === "click" || openEventType === "mousedown";
}

// node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingDelayGroup.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var FloatingDelayGroupContext = /* @__PURE__ */ React17.createContext({
  hasProvider: false,
  timeoutMs: 0,
  delayRef: {
    current: 0
  },
  initialDelayRef: {
    current: 0
  },
  timeout: new Timeout(),
  currentIdRef: {
    current: null
  },
  currentContextRef: {
    current: null
  }
});
if (true) FloatingDelayGroupContext.displayName = "FloatingDelayGroupContext";
function FloatingDelayGroup(props) {
  const {
    children,
    delay,
    timeoutMs = 0
  } = props;
  const delayRef = React17.useRef(delay);
  const initialDelayRef = React17.useRef(delay);
  const currentIdRef = React17.useRef(null);
  const currentContextRef = React17.useRef(null);
  const timeout = useTimeout();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDelayGroupContext.Provider, {
    value: React17.useMemo(() => ({
      hasProvider: true,
      delayRef,
      initialDelayRef,
      currentIdRef,
      timeoutMs,
      currentContextRef,
      timeout
    }), [timeoutMs, timeout]),
    children
  });
}
function useDelayGroup(context, options = {
  open: false
}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const floatingId = store.useState("floatingId");
  const {
    open
  } = options;
  const groupContext = React17.useContext(FloatingDelayGroupContext);
  const {
    currentIdRef,
    delayRef,
    timeoutMs,
    initialDelayRef,
    currentContextRef,
    hasProvider,
    timeout
  } = groupContext;
  const [isInstantPhase, setIsInstantPhase] = React17.useState(false);
  useIsoLayoutEffect(() => {
    function unset() {
      setIsInstantPhase(false);
      currentContextRef.current?.setIsInstantPhase(false);
      currentIdRef.current = null;
      currentContextRef.current = null;
      delayRef.current = initialDelayRef.current;
    }
    if (!currentIdRef.current) {
      return void 0;
    }
    if (!open && currentIdRef.current === floatingId) {
      setIsInstantPhase(false);
      if (timeoutMs) {
        const closingId = floatingId;
        timeout.start(timeoutMs, () => {
          if (store.select("open") || currentIdRef.current && currentIdRef.current !== closingId) {
            return;
          }
          unset();
        });
        return () => {
          timeout.clear();
        };
      }
      unset();
    }
    return void 0;
  }, [open, floatingId, currentIdRef, delayRef, timeoutMs, initialDelayRef, currentContextRef, timeout, store]);
  useIsoLayoutEffect(() => {
    if (!open) {
      return;
    }
    const prevContext = currentContextRef.current;
    const prevId = currentIdRef.current;
    timeout.clear();
    currentContextRef.current = {
      onOpenChange: store.setOpen,
      setIsInstantPhase
    };
    currentIdRef.current = floatingId;
    delayRef.current = {
      open: 0,
      close: getDelay(initialDelayRef.current, "close")
    };
    if (prevId !== null && prevId !== floatingId) {
      setIsInstantPhase(true);
      prevContext?.setIsInstantPhase(true);
      prevContext?.onOpenChange(false, createChangeEventDetails(reason_parts_exports.none));
    } else {
      setIsInstantPhase(false);
      prevContext?.setIsInstantPhase(false);
    }
  }, [open, floatingId, store, currentIdRef, delayRef, timeoutMs, initialDelayRef, currentContextRef, timeout]);
  useIsoLayoutEffect(() => {
    return () => {
      currentContextRef.current = null;
    };
  }, [currentContextRef]);
  return React17.useMemo(() => ({
    hasProvider,
    delayRef,
    isInstantPhase
  }), [hasProvider, delayRef, isInstantPhase]);
}

// node_modules/@base-ui/utils/esm/mergeCleanups.js
function mergeCleanups(...cleanups) {
  return () => {
    for (let i = 0; i < cleanups.length; i += 1) {
      const cleanup = cleanups[i];
      if (cleanup) {
        cleanup();
      }
    }
  };
}

// node_modules/@base-ui/utils/esm/useValueAsRef.js
function useValueAsRef(value) {
  const latest = useRefWithInit(createLatestRef, value).current;
  latest.next = value;
  useIsoLayoutEffect(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
}

// node_modules/@base-ui/react/esm/utils/FocusGuard.js
var React18 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/esm/visuallyHidden.js
var visuallyHiddenBase = {
  clipPath: "inset(50%)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  border: 0,
  padding: 0,
  width: 1,
  height: 1,
  margin: -1
};
var visuallyHidden = {
  ...visuallyHiddenBase,
  position: "fixed",
  top: 0,
  left: 0
};
var visuallyHiddenInput = {
  ...visuallyHiddenBase,
  position: "absolute"
};

// node_modules/@base-ui/react/esm/utils/FocusGuard.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var FocusGuard = /* @__PURE__ */ React18.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React18.useState();
  useIsoLayoutEffect(() => {
    if (isSafari) {
      setRole("button");
    }
  }, []);
  const restProps = {
    tabIndex: 0,
    // Role is only for VoiceOver
    role
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
    ...props,
    ref,
    style: visuallyHidden,
    "aria-hidden": role ? void 0 : true,
    ...restProps,
    "data-base-ui-focus-guard": ""
  });
});
if (true) FocusGuard.displayName = "FocusGuard";

// node_modules/@base-ui/react/esm/floating-ui-react/utils/createAttribute.js
function createAttribute(name) {
  return `data-base-ui-${name}`;
}

// node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js
var React19 = __toESM(require_react(), 1);
var ReactDOM2 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/esm/internals/constants.js
var DISABLED_TRANSITIONS_STYLE = {
  style: {
    transition: "none"
  }
};
var BASE_UI_SWIPE_IGNORE_ATTRIBUTE = "data-base-ui-swipe-ignore";
var LEGACY_SWIPE_IGNORE_ATTRIBUTE = "data-swipe-ignore";
var BASE_UI_SWIPE_IGNORE_SELECTOR = `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}]`;
var LEGACY_SWIPE_IGNORE_SELECTOR = `[${LEGACY_SWIPE_IGNORE_ATTRIBUTE}]`;
var POPUP_COLLISION_AVOIDANCE = {
  fallbackAxisSide: "end"
};
var ownerVisuallyHidden = {
  clipPath: "inset(50%)",
  position: "fixed",
  top: 0,
  left: 0
};

// node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var PortalContext = /* @__PURE__ */ React19.createContext(null);
if (true) PortalContext.displayName = "PortalContext";
var usePortalContext = () => React19.useContext(PortalContext);
var attr = createAttribute("portal");
function useFloatingPortalNode(props = {}) {
  const {
    ref,
    container: containerProp,
    componentProps = EMPTY_OBJECT,
    elementProps
  } = props;
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const parentPortalNode = portalContext?.portalNode;
  const [containerElement, setContainerElement] = React19.useState(null);
  const [portalNode, setPortalNode] = React19.useState(null);
  const setPortalNodeRef = useStableCallback((node) => {
    if (node !== null) {
      setPortalNode(node);
    }
  });
  const containerRef = React19.useRef(null);
  useIsoLayoutEffect(() => {
    if (containerProp === null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (uniqueId == null) {
      return;
    }
    const resolvedContainer = (containerProp && (isNode(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
    if (resolvedContainer == null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (containerRef.current !== resolvedContainer) {
      containerRef.current = resolvedContainer;
      setPortalNode(null);
      setContainerElement(resolvedContainer);
    }
  }, [containerProp, parentPortalNode, uniqueId]);
  const portalElement = useRenderElement("div", componentProps, {
    ref: [ref, setPortalNodeRef],
    props: [{
      id: uniqueId,
      [attr]: ""
    }, elementProps]
  });
  const portalSubtree = containerElement && portalElement ? /* @__PURE__ */ ReactDOM2.createPortal(portalElement, containerElement) : null;
  return {
    portalNode,
    portalSubtree
  };
}
var FloatingPortal = /* @__PURE__ */ React19.forwardRef(function FloatingPortal2(componentProps, forwardedRef) {
  const {
    children,
    container,
    className,
    render,
    renderGuards,
    style,
    ...elementProps
  } = componentProps;
  const {
    portalNode,
    portalSubtree
  } = useFloatingPortalNode({
    container,
    ref: forwardedRef,
    componentProps,
    elementProps
  });
  const beforeOutsideRef = React19.useRef(null);
  const afterOutsideRef = React19.useRef(null);
  const beforeInsideRef = React19.useRef(null);
  const afterInsideRef = React19.useRef(null);
  const [focusManagerState, setFocusManagerState] = React19.useState(null);
  const focusInsideDisabledRef = React19.useRef(false);
  const modal = focusManagerState?.modal;
  const open = focusManagerState?.open;
  const shouldRenderGuards = typeof renderGuards === "boolean" ? renderGuards : !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
  React19.useEffect(() => {
    if (!portalNode || modal) {
      return void 0;
    }
    function onFocus(event) {
      if (portalNode && event.relatedTarget && isOutsideEvent(event)) {
        if (event.type === "focusin") {
          if (focusInsideDisabledRef.current) {
            enableFocusInside(portalNode);
            focusInsideDisabledRef.current = false;
          }
        } else {
          disableFocusInside(portalNode);
          focusInsideDisabledRef.current = true;
        }
      }
    }
    return mergeCleanups(addEventListener(portalNode, "focusin", onFocus, true), addEventListener(portalNode, "focusout", onFocus, true));
  }, [portalNode, modal]);
  React19.useEffect(() => {
    if (!portalNode || open !== false) {
      return;
    }
    enableFocusInside(portalNode);
    focusInsideDisabledRef.current = false;
  }, [open, portalNode]);
  const portalContextValue = React19.useMemo(() => ({
    beforeOutsideRef,
    afterOutsideRef,
    beforeInsideRef,
    afterInsideRef,
    portalNode,
    setFocusManagerState
  }), [portalNode]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(React19.Fragment, {
    children: [portalSubtree, /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(PortalContext.Provider, {
      value: portalContextValue,
      children: [shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FocusGuard, {
        "data-type": "outside",
        ref: beforeOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            beforeInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const prevTabbable = getPreviousTabbable(domReference);
            prevTabbable?.focus();
          }
        }
      }), shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
        "aria-owns": portalNode.id,
        style: ownerVisuallyHidden
      }), portalNode && /* @__PURE__ */ ReactDOM2.createPortal(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FocusGuard, {
        "data-type": "outside",
        ref: afterOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            afterInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const nextTabbable = getNextTabbable(domReference);
            nextTabbable?.focus();
            if (focusManagerState?.closeOnFocusOut) {
              focusManagerState?.onOpenChange(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent));
            }
          }
        }
      })]
    })]
  });
});
if (true) FloatingPortal.displayName = "FloatingPortal";

// node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTree.js
var React20 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/floating-ui-react/utils/createEventEmitter.js
function createEventEmitter() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      map.get(event)?.forEach((listener) => listener(data));
    },
    on(event, listener) {
      if (!map.has(event)) {
        map.set(event, /* @__PURE__ */ new Set());
      }
      map.get(event).add(listener);
    },
    off(event, listener) {
      map.get(event)?.delete(listener);
    }
  };
}

// node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTree.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var FloatingNodeContext = /* @__PURE__ */ React20.createContext(null);
if (true) FloatingNodeContext.displayName = "FloatingNodeContext";
var FloatingTreeContext = /* @__PURE__ */ React20.createContext(null);
if (true) FloatingTreeContext.displayName = "FloatingTreeContext";
var useFloatingParentNodeId = () => React20.useContext(FloatingNodeContext)?.id || null;
var useFloatingTree = (externalTree) => {
  const contextTree = React20.useContext(FloatingTreeContext);
  return externalTree ?? contextTree;
};

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useClientPoint.js
var React21 = __toESM(require_react(), 1);
function createVirtualElement(domElement, data) {
  let offsetX = null;
  let offsetY = null;
  let isAutoUpdateEvent = false;
  return {
    contextElement: domElement || void 0,
    getBoundingClientRect() {
      const domRect = domElement?.getBoundingClientRect() || {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      };
      const isXAxis = data.axis === "x" || data.axis === "both";
      const isYAxis = data.axis === "y" || data.axis === "both";
      const canTrackCursorOnAutoUpdate = ["mouseenter", "mousemove"].includes(data.dataRef.current.openEvent?.type || "") && data.pointerType !== "touch";
      let width = domRect.width;
      let height = domRect.height;
      let x = domRect.x;
      let y = domRect.y;
      if (offsetX == null && data.x && isXAxis) {
        offsetX = domRect.x - data.x;
      }
      if (offsetY == null && data.y && isYAxis) {
        offsetY = domRect.y - data.y;
      }
      x -= offsetX || 0;
      y -= offsetY || 0;
      width = 0;
      height = 0;
      if (!isAutoUpdateEvent || canTrackCursorOnAutoUpdate) {
        width = data.axis === "y" ? domRect.width : 0;
        height = data.axis === "x" ? domRect.height : 0;
        x = isXAxis && data.x != null ? data.x : x;
        y = isYAxis && data.y != null ? data.y : y;
      } else if (isAutoUpdateEvent && !canTrackCursorOnAutoUpdate) {
        height = data.axis === "x" ? domRect.height : height;
        width = data.axis === "y" ? domRect.width : width;
      }
      isAutoUpdateEvent = true;
      return {
        width,
        height,
        x,
        y,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x
      };
    }
  };
}
function isMouseBasedEvent(event) {
  return event != null && event.clientX != null;
}
function useClientPoint(context, props = {}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const floating = store.useState("floatingElement");
  const domReference = store.useState("domReferenceElement");
  const dataRef = store.context.dataRef;
  const {
    enabled = true,
    axis = "both"
  } = props;
  const initialRef = React21.useRef(false);
  const cleanupListenerRef = React21.useRef(null);
  const [pointerType, setPointerType] = React21.useState();
  const [reactive, setReactive] = React21.useState([]);
  const setReference = useStableCallback((newX, newY, referenceElement) => {
    if (initialRef.current) {
      return;
    }
    if (dataRef.current.openEvent && !isMouseBasedEvent(dataRef.current.openEvent)) {
      return;
    }
    store.set("positionReference", createVirtualElement(referenceElement ?? domReference, {
      x: newX,
      y: newY,
      axis,
      dataRef,
      pointerType
    }));
  });
  const handleReferenceEnterOrMove = useStableCallback((event) => {
    if (!open) {
      setReference(event.clientX, event.clientY, event.currentTarget);
    } else if (!cleanupListenerRef.current) {
      setReactive([]);
    }
  });
  const openCheck = isMouseLikePointerType(pointerType) ? floating : open;
  const addListener = React21.useCallback(() => {
    if (!openCheck || !enabled) {
      return void 0;
    }
    const win = getWindow(floating);
    function handleMouseMove(event) {
      const target = getTarget(event);
      if (!contains(floating, target)) {
        setReference(event.clientX, event.clientY);
      } else {
        cleanupListenerRef.current?.();
        cleanupListenerRef.current = null;
      }
    }
    if (!dataRef.current.openEvent || isMouseBasedEvent(dataRef.current.openEvent)) {
      const cleanup = () => {
        cleanupListenerRef.current?.();
        cleanupListenerRef.current = null;
      };
      cleanupListenerRef.current = addEventListener(win, "mousemove", handleMouseMove);
      return cleanup;
    }
    store.set("positionReference", domReference);
    return void 0;
  }, [openCheck, enabled, floating, dataRef, domReference, store, setReference]);
  React21.useEffect(() => {
    return addListener();
  }, [addListener, reactive]);
  React21.useEffect(() => {
    if (enabled && !floating) {
      initialRef.current = false;
    }
  }, [enabled, floating]);
  React21.useEffect(() => {
    if (!enabled && open) {
      initialRef.current = true;
    }
  }, [enabled, open]);
  const reference = React21.useMemo(() => {
    function setPointerTypeRef(event) {
      setPointerType(event.pointerType);
    }
    return {
      onPointerDown: setPointerTypeRef,
      onPointerEnter: setPointerTypeRef,
      onMouseMove: handleReferenceEnterOrMove,
      onMouseEnter: handleReferenceEnterOrMove
    };
  }, [handleReferenceEnterOrMove]);
  return React21.useMemo(() => enabled ? {
    reference,
    trigger: reference
  } : {}, [enabled, reference]);
}

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useDismiss.js
var React22 = __toESM(require_react(), 1);
var bubbleHandlerKeys = {
  intentional: "onClick",
  sloppy: "onPointerDown"
};
function alwaysFalse() {
  return false;
}
function normalizeProp(normalizable) {
  return {
    escapeKey: typeof normalizable === "boolean" ? normalizable : normalizable?.escapeKey ?? false,
    outsidePress: typeof normalizable === "boolean" ? normalizable : normalizable?.outsidePress ?? true
  };
}
function useDismiss(context, props = {}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const {
    dataRef
  } = store.context;
  const {
    enabled = true,
    escapeKey: escapeKey2 = true,
    outsidePress: outsidePressProp = true,
    outsidePressEvent = "sloppy",
    referencePress = alwaysFalse,
    referencePressEvent = "sloppy",
    bubbles,
    externalTree
  } = props;
  const tree = useFloatingTree(externalTree);
  const outsidePressFn = useStableCallback(typeof outsidePressProp === "function" ? outsidePressProp : () => false);
  const outsidePress2 = typeof outsidePressProp === "function" ? outsidePressFn : outsidePressProp;
  const outsidePressEnabled = outsidePress2 !== false;
  const getOutsidePressEventProp = useStableCallback(() => outsidePressEvent);
  const pressStartedInsideRef = React22.useRef(false);
  const pressStartPreventedRef = React22.useRef(false);
  const suppressNextOutsideClickRef = React22.useRef(false);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const touchStateRef = React22.useRef(null);
  const cancelDismissOnEndTimeout = useTimeout();
  const clearInsideReactTreeTimeout = useTimeout();
  const clearInsideReactTree = useStableCallback(() => {
    clearInsideReactTreeTimeout.clear();
    dataRef.current.insideReactTree = false;
  });
  const isComposingRef = React22.useRef(false);
  const currentPointerTypeRef = React22.useRef("");
  const isReferencePressEnabled = useStableCallback(referencePress);
  const closeOnEscapeKeyDown = useStableCallback((event) => {
    if (!open || !enabled || !escapeKey2 || event.key !== "Escape") {
      return;
    }
    if (isComposingRef.current) {
      return;
    }
    const nodeId = dataRef.current.floatingContext?.nodeId;
    const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
    if (!escapeKeyBubbles) {
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          if (child.context?.open && !child.context.dataRef.current.__escapeKeyBubbles) {
            shouldDismiss = false;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
    }
    const native = isReactEvent(event) ? event.nativeEvent : event;
    const eventDetails = createChangeEventDetails(reason_parts_exports.escapeKey, native);
    store.setOpen(false, eventDetails);
    if (!escapeKeyBubbles && !eventDetails.isPropagationAllowed) {
      event.stopPropagation();
    }
  });
  const markInsideReactTree = useStableCallback(() => {
    dataRef.current.insideReactTree = true;
    clearInsideReactTreeTimeout.start(0, clearInsideReactTree);
  });
  React22.useEffect(() => {
    if (!open || !enabled) {
      return void 0;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    const compositionTimeout = new Timeout();
    const preventedPressSuppressionTimeout = new Timeout();
    function handleCompositionStart() {
      compositionTimeout.clear();
      isComposingRef.current = true;
    }
    function handleCompositionEnd() {
      compositionTimeout.start(
        // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
        // Only apply to WebKit for the test to remain 0ms.
        isWebKit() ? 5 : 0,
        () => {
          isComposingRef.current = false;
        }
      );
    }
    function suppressImmediateOutsideClickAfterPreventedStart() {
      suppressNextOutsideClickRef.current = true;
      preventedPressSuppressionTimeout.start(0, () => {
        suppressNextOutsideClickRef.current = false;
      });
    }
    function resetPressStartState() {
      pressStartedInsideRef.current = false;
      pressStartPreventedRef.current = false;
    }
    function getOutsidePressEvent() {
      const type = currentPointerTypeRef.current;
      const computedType = type === "pen" || !type ? "mouse" : type;
      const outsidePressEventValue = getOutsidePressEventProp();
      const resolved = typeof outsidePressEventValue === "function" ? outsidePressEventValue() : outsidePressEventValue;
      if (typeof resolved === "string") {
        return resolved;
      }
      return resolved[computedType];
    }
    function shouldIgnoreEvent(event) {
      const computedOutsidePressEvent = getOutsidePressEvent();
      return computedOutsidePressEvent === "intentional" && event.type !== "click" || computedOutsidePressEvent === "sloppy" && event.type === "click";
    }
    function isEventWithinFloatingTree(event) {
      const nodeId = dataRef.current.floatingContext?.nodeId;
      const targetIsInsideChildren = tree && getNodeChildren(tree.nodesRef.current, nodeId).some((node) => isEventTargetWithin(event, node.context?.elements.floating));
      return isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement")) || targetIsInsideChildren;
    }
    function closeOnPressOutside(event) {
      if (shouldIgnoreEvent(event)) {
        clearInsideReactTree();
        return;
      }
      if (dataRef.current.insideReactTree) {
        clearInsideReactTree();
        return;
      }
      const target = getTarget(event);
      const inertSelector = `[${createAttribute("inert")}]`;
      const targetRoot = isElement(target) ? target.getRootNode() : null;
      const markers = Array.from((isShadowRoot(targetRoot) ? targetRoot : ownerDocument(store.select("floatingElement"))).querySelectorAll(inertSelector));
      const triggers = store.context.triggerElements;
      if (target && (triggers.hasElement(target) || triggers.hasMatchingElement((trigger) => contains(trigger, target)))) {
        return;
      }
      let targetRootAncestor = isElement(target) ? target : null;
      while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
        const nextParent = getParentNode(targetRootAncestor);
        if (isLastTraversableNode(nextParent) || !isElement(nextParent)) {
          break;
        }
        targetRootAncestor = nextParent;
      }
      if (markers.length && isElement(target) && !isRootElement(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
      !contains(target, store.select("floatingElement")) && // If the target root element contains none of the markers, then the
      // element was injected after the floating element rendered.
      markers.every((marker) => !contains(targetRootAncestor, marker))) {
        return;
      }
      if (isHTMLElement(target) && !("touches" in event)) {
        const lastTraversableNode = isLastTraversableNode(target);
        const style = getComputedStyle2(target);
        const scrollRe = /auto|scroll/;
        const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
        const isScrollableY = lastTraversableNode || scrollRe.test(style.overflowY);
        const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
        const canScrollY = isScrollableY && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
        const isRTL2 = style.direction === "rtl";
        const pressedVerticalScrollbar = canScrollY && (isRTL2 ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
        const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
        if (pressedVerticalScrollbar || pressedHorizontalScrollbar) {
          return;
        }
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }
      if (getOutsidePressEvent() === "intentional" && suppressNextOutsideClickRef.current) {
        preventedPressSuppressionTimeout.clear();
        suppressNextOutsideClickRef.current = false;
        return;
      }
      if (typeof outsidePress2 === "function" && !outsidePress2(event)) {
        return;
      }
      const nodeId = dataRef.current.floatingContext?.nodeId;
      const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          if (child.context?.open && !child.context.dataRef.current.__outsidePressBubbles) {
            shouldDismiss = false;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.outsidePress, event));
      clearInsideReactTree();
    }
    function handlePointerDown(event) {
      if (getOutsidePressEvent() !== "sloppy" || event.pointerType === "touch" || !store.select("open") || !enabled || isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"))) {
        return;
      }
      closeOnPressOutside(event);
    }
    function handleTouchStart(event) {
      if (getOutsidePressEvent() !== "sloppy" || !store.select("open") || !enabled || isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"))) {
        return;
      }
      const touch = event.touches[0];
      if (touch) {
        touchStateRef.current = {
          startTime: Date.now(),
          startX: touch.clientX,
          startY: touch.clientY,
          dismissOnTouchEnd: false,
          dismissOnMouseDown: true
        };
        cancelDismissOnEndTimeout.start(1e3, () => {
          if (touchStateRef.current) {
            touchStateRef.current.dismissOnTouchEnd = false;
            touchStateRef.current.dismissOnMouseDown = false;
          }
        });
      }
    }
    function addTargetEventListenerOnce(event, listener) {
      const target = getTarget(event);
      if (!target) {
        return;
      }
      const unsubscribe2 = addEventListener(target, event.type, () => {
        listener(event);
        unsubscribe2();
      });
    }
    function handleTouchStartCapture(event) {
      currentPointerTypeRef.current = "touch";
      addTargetEventListenerOnce(event, handleTouchStart);
    }
    function closeOnPressOutsideCapture(event) {
      cancelDismissOnEndTimeout.clear();
      if (event.type === "pointerdown") {
        currentPointerTypeRef.current = event.pointerType;
      }
      if (event.type === "mousedown" && touchStateRef.current && !touchStateRef.current.dismissOnMouseDown) {
        return;
      }
      addTargetEventListenerOnce(event, (targetEvent) => {
        if (targetEvent.type === "pointerdown") {
          handlePointerDown(targetEvent);
        } else {
          closeOnPressOutside(targetEvent);
        }
      });
    }
    function handlePressEndCapture(event) {
      if (!pressStartedInsideRef.current) {
        return;
      }
      const pressStartedInsideDefaultPrevented = pressStartPreventedRef.current;
      resetPressStartState();
      if (getOutsidePressEvent() !== "intentional") {
        return;
      }
      if (event.type === "pointercancel") {
        if (pressStartedInsideDefaultPrevented) {
          suppressImmediateOutsideClickAfterPreventedStart();
        }
        return;
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }
      if (pressStartedInsideDefaultPrevented) {
        suppressImmediateOutsideClickAfterPreventedStart();
        return;
      }
      if (typeof outsidePress2 === "function" && !outsidePress2(event)) {
        return;
      }
      preventedPressSuppressionTimeout.clear();
      suppressNextOutsideClickRef.current = true;
      clearInsideReactTree();
    }
    function handleTouchMove(event) {
      if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"))) {
        return;
      }
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
      const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (distance > 5) {
        touchStateRef.current.dismissOnTouchEnd = true;
      }
      if (distance > 10) {
        closeOnPressOutside(event);
        cancelDismissOnEndTimeout.clear();
        touchStateRef.current = null;
      }
    }
    function handleTouchMoveCapture(event) {
      addTargetEventListenerOnce(event, handleTouchMove);
    }
    function handleTouchEnd(event) {
      if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"))) {
        return;
      }
      if (touchStateRef.current.dismissOnTouchEnd) {
        closeOnPressOutside(event);
      }
      cancelDismissOnEndTimeout.clear();
      touchStateRef.current = null;
    }
    function handleTouchEndCapture(event) {
      addTargetEventListenerOnce(event, handleTouchEnd);
    }
    const doc = ownerDocument(floatingElement);
    const unsubscribe = mergeCleanups(escapeKey2 && mergeCleanups(addEventListener(doc, "keydown", closeOnEscapeKeyDown), addEventListener(doc, "compositionstart", handleCompositionStart), addEventListener(doc, "compositionend", handleCompositionEnd)), outsidePressEnabled && mergeCleanups(addEventListener(doc, "click", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerdown", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerup", handlePressEndCapture, true), addEventListener(doc, "pointercancel", handlePressEndCapture, true), addEventListener(doc, "mousedown", closeOnPressOutsideCapture, true), addEventListener(doc, "mouseup", handlePressEndCapture, true), addEventListener(doc, "touchstart", handleTouchStartCapture, true), addEventListener(doc, "touchmove", handleTouchMoveCapture, true), addEventListener(doc, "touchend", handleTouchEndCapture, true)));
    return () => {
      unsubscribe();
      compositionTimeout.clear();
      preventedPressSuppressionTimeout.clear();
      resetPressStartState();
      suppressNextOutsideClickRef.current = false;
    };
  }, [dataRef, floatingElement, escapeKey2, outsidePressEnabled, outsidePress2, open, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, clearInsideReactTree, getOutsidePressEventProp, tree, store, cancelDismissOnEndTimeout]);
  React22.useEffect(clearInsideReactTree, [outsidePress2, clearInsideReactTree]);
  const reference = React22.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    [bubbleHandlerKeys[referencePressEvent]]: (event) => {
      if (!isReferencePressEnabled()) {
        return;
      }
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerPress, event.nativeEvent));
    },
    ...referencePressEvent !== "intentional" && {
      onClick(event) {
        if (!isReferencePressEnabled()) {
          return;
        }
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerPress, event.nativeEvent));
      }
    }
  }), [closeOnEscapeKeyDown, store, referencePressEvent, isReferencePressEnabled]);
  const markPressStartedInsideReactTree = useStableCallback((event) => {
    if (!open || !enabled || event.button !== 0) {
      return;
    }
    const target = getTarget(event.nativeEvent);
    if (!contains(store.select("floatingElement"), target)) {
      return;
    }
    if (!pressStartedInsideRef.current) {
      pressStartedInsideRef.current = true;
      pressStartPreventedRef.current = false;
    }
  });
  const markInsidePressStartPrevented = useStableCallback((event) => {
    if (!open || !enabled) {
      return;
    }
    if (!(event.defaultPrevented || event.nativeEvent.defaultPrevented)) {
      return;
    }
    if (pressStartedInsideRef.current) {
      pressStartPreventedRef.current = true;
    }
  });
  const floating = React22.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    // `onMouseDown` may be blocked if `event.preventDefault()` is called in
    // `onPointerDown`, such as with <NumberField.ScrubArea>.
    // See https://github.com/mui/base-ui/pull/3379
    onPointerDown: markInsidePressStartPrevented,
    onMouseDown: markInsidePressStartPrevented,
    onClickCapture: markInsideReactTree,
    onMouseDownCapture(event) {
      markInsideReactTree();
      markPressStartedInsideReactTree(event);
    },
    onPointerDownCapture(event) {
      markInsideReactTree();
      markPressStartedInsideReactTree(event);
    },
    onMouseUpCapture: markInsideReactTree,
    onTouchEndCapture: markInsideReactTree,
    onTouchMoveCapture: markInsideReactTree
  }), [closeOnEscapeKeyDown, markInsideReactTree, markPressStartedInsideReactTree, markInsidePressStartPrevented]);
  return React22.useMemo(() => enabled ? {
    reference,
    floating,
    trigger: reference
  } : {}, [enabled, reference, floating]);
}

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFloating.js
var React28 = __toESM(require_react(), 1);

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform3,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform3.getClippingRect({
    element: ((_await$platform$isEle = await (platform3.isElement == null ? void 0 : platform3.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform3.getDocumentElement == null ? void 0 : platform3.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform3.getOffsetParent == null ? void 0 : platform3.getOffsetParent(elements.floating));
  const offsetScale = await (platform3.isElement == null ? void 0 : platform3.isElement(offsetParent)) ? await (platform3.getScale == null ? void 0 : platform3.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform3.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform3.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var MAX_RESET_COUNT = 50;
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform3
  } = config;
  const platformWithDetectOverflow = platform3.detectOverflow ? platform3 : {
    ...platform3,
    detectOverflow
  };
  const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(floating));
  let rects = await platform3.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const currentMiddleware = middleware[i];
    if (!currentMiddleware) {
      continue;
    }
    const {
      name,
      fn
    } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data
    };
    if (reset && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform3.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform3,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects,
        platform: platform3
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await platform3.detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await platform3.detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform3,
    elements
  } = state;
  const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        platform: platform3
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform3,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform3.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed2, floatingOffsetParent) {
  if (isFixed2 === void 0) {
    isFixed2 = false;
  }
  if (!floatingOffsetParent || isFixed2 && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed2;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed2 = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed2) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed2) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed2 ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === "absolute" || currentContainingBlockComputedStyle.position === "fixed") || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i = 1; i < clippingAncestors.length; i++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
    top = max(rect.top, top);
    right = min(rect.right, right);
    bottom = min(rect.bottom, bottom);
    left = max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed2 = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed2, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed2) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed2, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed2 && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed2 ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update2, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update2, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update2);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update2();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update2();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update2();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update2);
      ancestorResize && ancestor.removeEventListener("resize", update2);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform: platform2,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@base-ui/react/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React23 = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);
var isClient = typeof document !== "undefined";
var noop2 = function noop3() {
};
var index = isClient ? import_react2.useLayoutEffect : noop2;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key2 = keys[i];
      if (key2 === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key2], b[key2])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React23.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform3,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React23.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React23.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React23.useState(null);
  const [_floating, _setFloating] = React23.useState(null);
  const setReference = React23.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React23.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React23.useRef(null);
  const floatingRef = React23.useRef(null);
  const dataRef = React23.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform3);
  const openRef = useLatestRef(open);
  const update2 = React23.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM3.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React23.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update2);
      }
      update2();
    }
  }, [referenceEl, floatingEl, update2, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React23.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React23.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React23.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React23.useMemo(() => ({
    ...data,
    update: update2,
    refs,
    elements,
    floatingStyles
  }), [data, update2, refs, elements, floatingStyles]);
}
var offset3 = (options, deps) => {
  const result = offset2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var shift3 = (options, deps) => {
  const result = shift2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var limitShift3 = (options, deps) => {
  const result = limitShift2(options);
  return {
    fn: result.fn,
    options: [options, deps]
  };
};
var flip3 = (options, deps) => {
  const result = flip2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var size3 = (options, deps) => {
  const result = size2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var hide3 = (options, deps) => {
  const result = hide2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};

// node_modules/@base-ui/utils/esm/store/createSelector.js
var createSelector = (a, b, c, d, e, f, ...other) => {
  if (other.length > 0) {
    throw new Error(true ? "Unsupported number of selectors" : formatErrorMessage_default(1));
  }
  let selector;
  if (a && b && c && d && e && f) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      const vd = d(state, a1, a2, a3);
      const ve = e(state, a1, a2, a3);
      return f(va, vb, vc, vd, ve, a1, a2, a3);
    };
  } else if (a && b && c && d && e) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      const vd = d(state, a1, a2, a3);
      return e(va, vb, vc, vd, a1, a2, a3);
    };
  } else if (a && b && c && d) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      return d(va, vb, vc, a1, a2, a3);
    };
  } else if (a && b && c) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      return c(va, vb, a1, a2, a3);
    };
  } else if (a && b) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      return b(va, a1, a2, a3);
    };
  } else if (a) {
    selector = a;
  } else {
    throw (
      /* minify-error-disabled */
      new Error("Missing arguments")
    );
  }
  return selector;
};

// node_modules/@base-ui/utils/esm/store/useStore.js
var React25 = __toESM(require_react(), 1);
var import_shim = __toESM(require_shim(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);

// node_modules/@base-ui/utils/esm/fastHooks.js
var React24 = __toESM(require_react(), 1);
var hooks = [];
var currentInstance = void 0;
function getInstance() {
  return currentInstance;
}
function register(hook) {
  hooks.push(hook);
}
function fastComponent(fn) {
  const FastComponent = (props, forwardedRef) => {
    const instance = useRefWithInit(createInstance).current;
    let result;
    try {
      currentInstance = instance;
      for (const hook of hooks) {
        hook.before(instance);
      }
      result = fn(props, forwardedRef);
      for (const hook of hooks) {
        hook.after(instance);
      }
      instance.didInitialize = true;
    } finally {
      currentInstance = void 0;
    }
    return result;
  };
  FastComponent.displayName = fn.displayName || fn.name;
  return FastComponent;
}
function fastComponentRef(fn) {
  return /* @__PURE__ */ React24.forwardRef(fastComponent(fn));
}
function createInstance() {
  return {
    didInitialize: false
  };
}

// node_modules/@base-ui/utils/esm/store/useStore.js
var canUseRawUseSyncExternalStore = isReactVersionAtLeast(19);
var useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreFast : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
  return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
  const getSelection = React25.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [store, selector, a1, a2, a3]);
  return (0, import_shim.useSyncExternalStore)(store.subscribe, getSelection, getSelection);
}
register({
  before(instance) {
    instance.syncIndex = 0;
    if (!instance.didInitialize) {
      instance.syncTick = 1;
      instance.syncHooks = [];
      instance.didChangeStore = true;
      instance.getSnapshot = () => {
        let didChange2 = false;
        for (let i = 0; i < instance.syncHooks.length; i += 1) {
          const hook = instance.syncHooks[i];
          const value = hook.selector(hook.store.state, hook.a1, hook.a2, hook.a3);
          if (hook.didChange || !Object.is(hook.value, value)) {
            didChange2 = true;
            hook.value = value;
            hook.didChange = false;
          }
        }
        if (didChange2) {
          instance.syncTick += 1;
        }
        return instance.syncTick;
      };
    }
  },
  after(instance) {
    if (instance.syncHooks.length > 0) {
      if (instance.didChangeStore) {
        instance.didChangeStore = false;
        instance.subscribe = (onStoreChange) => {
          const stores = /* @__PURE__ */ new Set();
          for (const hook of instance.syncHooks) {
            stores.add(hook.store);
          }
          const unsubscribes = [];
          for (const store of stores) {
            unsubscribes.push(store.subscribe(onStoreChange));
          }
          return () => {
            for (const unsubscribe of unsubscribes) {
              unsubscribe();
            }
          };
        };
      }
      (0, import_shim.useSyncExternalStore)(instance.subscribe, instance.getSnapshot, instance.getSnapshot);
    }
  }
});
function useStoreFast(store, selector, a1, a2, a3) {
  const instance = getInstance();
  if (!instance) {
    return useStoreR19(store, selector, a1, a2, a3);
  }
  const index2 = instance.syncIndex;
  instance.syncIndex += 1;
  let hook;
  if (!instance.didInitialize) {
    hook = {
      store,
      selector,
      a1,
      a2,
      a3,
      value: selector(store.getSnapshot(), a1, a2, a3),
      didChange: false
    };
    instance.syncHooks.push(hook);
  } else {
    hook = instance.syncHooks[index2];
    if (hook.store !== store || hook.selector !== selector || !Object.is(hook.a1, a1) || !Object.is(hook.a2, a2) || !Object.is(hook.a3, a3)) {
      if (hook.store !== store) {
        instance.didChangeStore = true;
      }
      hook.store = store;
      hook.selector = selector;
      hook.a1 = a1;
      hook.a2 = a2;
      hook.a3 = a3;
      hook.didChange = true;
    }
  }
  return hook.value;
}
function useStoreLegacy(store, selector, a1, a2, a3) {
  return (0, import_with_selector.useSyncExternalStoreWithSelector)(store.subscribe, store.getSnapshot, store.getSnapshot, (state) => selector(state, a1, a2, a3));
}

// node_modules/@base-ui/utils/esm/store/Store.js
var Store = class {
  /**
   * The current state of the store.
   * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
   * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
   * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
   *
   * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
   */
  // Internal state to handle recursive `setState()` calls
  constructor(state) {
    this.state = state;
    this.listeners = /* @__PURE__ */ new Set();
    this.updateTick = 0;
  }
  /**
   * Registers a listener that will be called whenever the store's state changes.
   *
   * @param fn The listener function to be called on state changes.
   * @returns A function to unsubscribe the listener.
   */
  subscribe = (fn) => {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  };
  /**
   * Returns the current state of the store.
   */
  getSnapshot = () => {
    return this.state;
  };
  /**
   * Updates the entire store's state and notifies all registered listeners.
   *
   * @param newState The new state to set for the store.
   */
  setState(newState) {
    if (this.state === newState) {
      return;
    }
    this.state = newState;
    this.updateTick += 1;
    const currentTick = this.updateTick;
    for (const listener of this.listeners) {
      if (currentTick !== this.updateTick) {
        return;
      }
      listener(newState);
    }
  }
  /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   *
   * @param changes An object containing the changes to apply to the current state.
   */
  update(changes) {
    for (const key2 in changes) {
      if (!Object.is(this.state[key2], changes[key2])) {
        this.setState({
          ...this.state,
          ...changes
        });
        return;
      }
    }
  }
  /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   *
   * @param key The key in the store's state to update.
   * @param value The new value to set for the specified key.
   */
  set(key2, value) {
    if (!Object.is(this.state[key2], value)) {
      this.setState({
        ...this.state,
        [key2]: value
      });
    }
  }
  /**
   * Gives the state a new reference and updates all registered listeners.
   */
  notifyAll() {
    const newState = {
      ...this.state
    };
    this.setState(newState);
  }
  use(selector, a1, a2, a3) {
    return useStore(this, selector, a1, a2, a3);
  }
};

// node_modules/@base-ui/utils/esm/store/ReactStore.js
var React26 = __toESM(require_react(), 1);
var ReactStore = class extends Store {
  /**
   * Creates a new ReactStore instance.
   *
   * @param state Initial state of the store.
   * @param context Non-reactive context values.
   * @param selectors Optional selectors for use with `useState`.
   */
  constructor(state, context = {}, selectors3) {
    super(state);
    this.context = context;
    this.selectors = selectors3;
  }
  /**
   * Non-reactive values such as refs, callbacks, etc.
   */
  /**
   * Synchronizes a single external value into the store.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValue(key2, value) {
    React26.useDebugValue(key2);
    useIsoLayoutEffect(() => {
      if (this.state[key2] !== value) {
        this.set(key2, value);
      }
    }, [key2, value]);
  }
  /**
   * Synchronizes a single external value into the store and
   * cleans it up (sets to `undefined`) on unmount.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValueWithCleanup(key2, value) {
    const store = this;
    useIsoLayoutEffect(() => {
      if (store.state[key2] !== value) {
        store.set(key2, value);
      }
      return () => {
        store.set(key2, void 0);
      };
    }, [store, key2, value]);
  }
  /**
   * Synchronizes multiple external values into the store.
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   */
  useSyncedValues(statePart) {
    const store = this;
    if (true) {
      React26.useDebugValue(statePart, (p) => Object.keys(p));
      const keys = React26.useRef(Object.keys(statePart)).current;
      const nextKeys = Object.keys(statePart);
      if (keys.length !== nextKeys.length || keys.some((key2, index2) => key2 !== nextKeys[index2])) {
        console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
      }
    }
    const dependencies = Object.values(statePart);
    useIsoLayoutEffect(() => {
      store.update(statePart);
    }, [store, ...dependencies]);
  }
  /**
   * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
   * is non-undefined, the store's state at `key` is updated to match `controlled`.
   */
  useControlledProp(key2, controlled) {
    React26.useDebugValue(key2);
    const isControlled = controlled !== void 0;
    useIsoLayoutEffect(() => {
      if (isControlled && !Object.is(this.state[key2], controlled)) {
        super.setState({
          ...this.state,
          [key2]: controlled
        });
      }
    }, [key2, controlled, isControlled]);
    if (true) {
      const cache = this.controlledValues ??= /* @__PURE__ */ new Map();
      if (!cache.has(key2)) {
        cache.set(key2, isControlled);
      }
      const previouslyControlled = cache.get(key2);
      if (previouslyControlled !== void 0 && previouslyControlled !== isControlled) {
        console.error(`A component is changing the ${isControlled ? "" : "un"}controlled state of ${key2.toString()} to be ${isControlled ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
      }
    }
  }
  /** Gets the current value from the store using a selector with the provided key.
   *
   * @param key Key of the selector to use.
   */
  select(key2, a1, a2, a3) {
    const selector = this.selectors[key2];
    return selector(this.state, a1, a2, a3);
  }
  /**
   * Returns a value from the store's state using a selector function.
   * Used to subscribe to specific parts of the state.
   * This methods causes a rerender whenever the selected state changes.
   *
   * @param key Key of the selector to use.
   */
  useState(key2, a1, a2, a3) {
    React26.useDebugValue(key2);
    return useStore(this, this.selectors[key2], a1, a2, a3);
  }
  /**
   * Wraps a function with `useStableCallback` to ensure it has a stable reference
   * and assigns it to the context.
   *
   * @param key Key of the event callback. Must be a function in the context.
   * @param fn Function to assign.
   */
  useContextCallback(key2, fn) {
    React26.useDebugValue(key2);
    const stableFunction = useStableCallback(fn ?? NOOP);
    this.context[key2] = stableFunction;
  }
  /**
   * Returns a stable setter function for a specific key in the store's state.
   * It's commonly used to pass as a ref callback to React elements.
   *
   * @param key Key of the state to set.
   */
  useStateSetter(key2) {
    const ref = React26.useRef(void 0);
    if (ref.current === void 0) {
      ref.current = (value) => {
        this.set(key2, value);
      };
    }
    return ref.current;
  }
  /**
   * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
   *
   * @param key Key of the selector to observe.
   * @param listener Listener function called when the selector result changes.
   */
  observe(selector, listener) {
    let selectFn;
    if (typeof selector === "function") {
      selectFn = selector;
    } else {
      selectFn = this.selectors[selector];
    }
    let prevValue = selectFn(this.state);
    listener(prevValue, prevValue, this);
    return this.subscribe((nextState) => {
      const nextValue = selectFn(nextState);
      if (!Object.is(prevValue, nextValue)) {
        const oldValue = prevValue;
        prevValue = nextValue;
        listener(nextValue, oldValue, this);
      }
    });
  }
};

// node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingRootStore.js
var selectors = {
  open: createSelector((state) => state.open),
  transitionStatus: createSelector((state) => state.transitionStatus),
  domReferenceElement: createSelector((state) => state.domReferenceElement),
  referenceElement: createSelector((state) => state.positionReference ?? state.referenceElement),
  floatingElement: createSelector((state) => state.floatingElement),
  floatingId: createSelector((state) => state.floatingId)
};
var FloatingRootStore = class extends ReactStore {
  constructor(options) {
    const {
      syncOnly,
      nested,
      onOpenChange,
      triggerElements,
      ...initialState
    } = options;
    super({
      ...initialState,
      positionReference: initialState.referenceElement,
      domReferenceElement: initialState.referenceElement
    }, {
      onOpenChange,
      dataRef: {
        current: {}
      },
      events: createEventEmitter(),
      nested,
      triggerElements
    }, selectors);
    this.syncOnly = syncOnly;
  }
  /**
   * Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
   */
  syncOpenEvent = (newOpen, event) => {
    if (!newOpen || !this.state.open || // Prevent a pending hover-open from overwriting a click-open event, while allowing
    // click events to upgrade a hover-open.
    event != null && isClickLikeEvent(event)) {
      this.context.dataRef.current.openEvent = newOpen ? event : void 0;
    }
  };
  /**
   * Runs the root-owned side effects for an open state change.
   */
  dispatchOpenChange = (newOpen, eventDetails) => {
    this.syncOpenEvent(newOpen, eventDetails.event);
    const details = {
      open: newOpen,
      reason: eventDetails.reason,
      nativeEvent: eventDetails.event,
      nested: this.context.nested,
      triggerElement: eventDetails.trigger
    };
    this.context.events.emit("openchange", details);
  };
  /**
   * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
   *
   * @param newOpen The new open state.
   * @param eventDetails Details about the event that triggered the open state change.
   */
  setOpen = (newOpen, eventDetails) => {
    if (this.syncOnly) {
      this.context.onOpenChange?.(newOpen, eventDetails);
      return;
    }
    this.dispatchOpenChange(newOpen, eventDetails);
    this.context.onOpenChange?.(newOpen, eventDetails);
  };
};

// node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js
var React27 = __toESM(require_react(), 1);
function useTriggerRegistration(id, store) {
  const registeredElementIdRef = React27.useRef(null);
  const registeredElementRef = React27.useRef(null);
  return React27.useCallback((element) => {
    if (id === void 0) {
      return;
    }
    if (registeredElementIdRef.current !== null) {
      const registeredId = registeredElementIdRef.current;
      const registeredElement = registeredElementRef.current;
      const currentElement = store.context.triggerElements.getById(registeredId);
      if (registeredElement && currentElement === registeredElement) {
        store.context.triggerElements.delete(registeredId);
      }
      registeredElementIdRef.current = null;
      registeredElementRef.current = null;
    }
    if (element !== null) {
      registeredElementIdRef.current = id;
      registeredElementRef.current = element;
      store.context.triggerElements.add(id, element);
    }
  }, [store, id]);
}
function useTriggerDataForwarding(triggerId, triggerElementRef, store, stateUpdates) {
  const isMountedByThisTrigger = store.useState("isMountedByTrigger", triggerId);
  const baseRegisterTrigger = useTriggerRegistration(triggerId, store);
  const registerTrigger = useStableCallback((element) => {
    baseRegisterTrigger(element);
    if (!element || !store.select("open")) {
      return;
    }
    const activeTriggerId = store.select("activeTriggerId");
    if (activeTriggerId === triggerId) {
      store.update({
        activeTriggerElement: element,
        ...stateUpdates
      });
      return;
    }
    if (activeTriggerId == null) {
      store.update({
        activeTriggerId: triggerId,
        activeTriggerElement: element,
        ...stateUpdates
      });
    }
  });
  useIsoLayoutEffect(() => {
    if (isMountedByThisTrigger) {
      store.update({
        activeTriggerElement: triggerElementRef.current,
        ...stateUpdates
      });
    }
  }, [isMountedByThisTrigger, store, triggerElementRef, ...Object.values(stateUpdates)]);
  return {
    registerTrigger,
    isMountedByThisTrigger
  };
}
function useImplicitActiveTrigger(store) {
  const open = store.useState("open");
  useIsoLayoutEffect(() => {
    if (open && !store.select("activeTriggerId") && store.context.triggerElements.size === 1) {
      const iteratorResult = store.context.triggerElements.entries().next();
      if (!iteratorResult.done) {
        const [implicitTriggerId, implicitTriggerElement] = iteratorResult.value;
        store.update({
          activeTriggerId: implicitTriggerId,
          activeTriggerElement: implicitTriggerElement
        });
      }
    }
  }, [open, store]);
}
function useOpenStateTransitions(open, store, onUnmount) {
  const {
    mounted,
    setMounted,
    transitionStatus
  } = useTransitionStatus(open);
  store.useSyncedValues({
    mounted,
    transitionStatus
  });
  const forceUnmount = useStableCallback(() => {
    setMounted(false);
    store.update({
      activeTriggerId: null,
      activeTriggerElement: null,
      mounted: false
    });
    onUnmount?.();
    store.context.onOpenChangeComplete?.(false);
  });
  const preventUnmountingOnClose = store.useState("preventUnmountingOnClose");
  useOpenChangeComplete({
    enabled: !preventUnmountingOnClose,
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (!open) {
        forceUnmount();
      }
    }
  });
  return {
    forceUnmount,
    transitionStatus
  };
}

// node_modules/@base-ui/react/esm/utils/popups/popupTriggerMap.js
var PopupTriggerMap = class {
  constructor() {
    this.elementsSet = /* @__PURE__ */ new Set();
    this.idMap = /* @__PURE__ */ new Map();
  }
  /**
   * Adds a trigger element with the given ID.
   *
   * Note: The provided element is assumed to not be registered under multiple IDs.
   */
  add(id, element) {
    const existingElement = this.idMap.get(id);
    if (existingElement === element) {
      return;
    }
    if (existingElement !== void 0) {
      this.elementsSet.delete(existingElement);
    }
    this.elementsSet.add(element);
    this.idMap.set(id, element);
    if (true) {
      if (this.elementsSet.size !== this.idMap.size) {
        throw new Error("Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.");
      }
    }
  }
  /**
   * Removes the trigger element with the given ID.
   */
  delete(id) {
    const element = this.idMap.get(id);
    if (element) {
      this.elementsSet.delete(element);
      this.idMap.delete(id);
    }
  }
  /**
   * Whether the given element is registered as a trigger.
   */
  hasElement(element) {
    return this.elementsSet.has(element);
  }
  /**
   * Whether there is a registered trigger element matching the given predicate.
   */
  hasMatchingElement(predicate) {
    for (const element of this.elementsSet) {
      if (predicate(element)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns the trigger element associated with the given ID, or undefined if no such element exists.
   */
  getById(id) {
    return this.idMap.get(id);
  }
  /**
   * Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
   */
  entries() {
    return this.idMap.entries();
  }
  /**
   * Returns an iterable of all registered trigger elements.
   */
  elements() {
    return this.elementsSet.values();
  }
  /**
   * Returns the number of registered trigger elements.
   */
  get size() {
    return this.idMap.size;
  }
};

// node_modules/@base-ui/react/esm/floating-ui-react/utils/getEmptyRootContext.js
function getEmptyRootContext() {
  return new FloatingRootStore({
    open: false,
    transitionStatus: void 0,
    floatingElement: null,
    referenceElement: null,
    triggerElements: new PopupTriggerMap(),
    floatingId: "",
    syncOnly: false,
    nested: false,
    onOpenChange: void 0
  });
}

// node_modules/@base-ui/react/esm/utils/popups/store.js
function createInitialPopupStoreState() {
  return {
    open: false,
    openProp: void 0,
    mounted: false,
    transitionStatus: void 0,
    floatingRootContext: getEmptyRootContext(),
    preventUnmountingOnClose: false,
    payload: void 0,
    activeTriggerId: null,
    activeTriggerElement: null,
    triggerIdProp: void 0,
    popupElement: null,
    positionerElement: null,
    activeTriggerProps: EMPTY_OBJECT,
    inactiveTriggerProps: EMPTY_OBJECT,
    popupProps: EMPTY_OBJECT
  };
}
var activeTriggerIdSelector = createSelector((state) => state.triggerIdProp ?? state.activeTriggerId);
var popupStoreSelectors = {
  open: createSelector((state) => state.openProp ?? state.open),
  mounted: createSelector((state) => state.mounted),
  transitionStatus: createSelector((state) => state.transitionStatus),
  floatingRootContext: createSelector((state) => state.floatingRootContext),
  preventUnmountingOnClose: createSelector((state) => state.preventUnmountingOnClose),
  payload: createSelector((state) => state.payload),
  activeTriggerId: activeTriggerIdSelector,
  activeTriggerElement: createSelector((state) => state.mounted ? state.activeTriggerElement : null),
  /**
   * Whether the trigger with the given ID was used to open the popup.
   */
  isTriggerActive: createSelector((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId),
  /**
   * Whether the popup is open and was activated by a trigger with the given ID.
   */
  isOpenedByTrigger: createSelector((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId && state.open),
  /**
   * Whether the popup is mounted and was activated by a trigger with the given ID.
   */
  isMountedByTrigger: createSelector((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId && state.mounted),
  triggerProps: createSelector((state, isActive) => isActive ? state.activeTriggerProps : state.inactiveTriggerProps),
  popupProps: createSelector((state) => state.popupProps),
  popupElement: createSelector((state) => state.popupElement),
  positionerElement: createSelector((state) => state.positionerElement)
};

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFloatingRootContext.js
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange,
    elements = {}
  } = options;
  const floatingId = useId();
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elements.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      console.error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `context.setPositionReference()`", "instead.");
    }
  }
  const store = useRefWithInit(() => new FloatingRootStore({
    open,
    transitionStatus: void 0,
    onOpenChange,
    referenceElement: elements.reference ?? null,
    floatingElement: elements.floating ?? null,
    triggerElements: new PopupTriggerMap(),
    floatingId,
    syncOnly: false,
    nested
  })).current;
  useIsoLayoutEffect(() => {
    const valuesToSync = {
      open,
      floatingId
    };
    if (elements.reference !== void 0) {
      valuesToSync.referenceElement = elements.reference;
      valuesToSync.domReferenceElement = isElement(elements.reference) ? elements.reference : null;
    }
    if (elements.floating !== void 0) {
      valuesToSync.floatingElement = elements.floating;
    }
    store.update(valuesToSync);
  }, [open, floatingId, elements.reference, elements.floating, store]);
  store.context.onOpenChange = onOpenChange;
  store.context.nested = nested;
  return store;
}

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFloating.js
function useFloating2(options = {}) {
  const {
    nodeId,
    externalTree
  } = options;
  const internalRootStore = useFloatingRootContext(options);
  const rootContext = options.rootContext || internalRootStore;
  const rootContextElements = {
    reference: rootContext.useState("referenceElement"),
    floating: rootContext.useState("floatingElement"),
    domReference: rootContext.useState("domReferenceElement")
  };
  const [positionReference, setPositionReferenceRaw] = React28.useState(null);
  const domReferenceRef = React28.useRef(null);
  const tree = useFloatingTree(externalTree);
  useIsoLayoutEffect(() => {
    if (rootContextElements.domReference) {
      domReferenceRef.current = rootContextElements.domReference;
    }
  }, [rootContextElements.domReference]);
  const position = useFloating({
    ...options,
    elements: {
      ...rootContextElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React28.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      getClientRects: () => node.getClientRects(),
      contextElement: node
    } : node;
    setPositionReferenceRaw(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const [localDomReference, setLocalDomReference] = React28.useState(void 0);
  const [localFloatingElement, setLocalFloatingElement] = React28.useState(null);
  rootContext.useSyncedValue("referenceElement", localDomReference ?? null);
  const localDomReferenceElement = isElement(localDomReference) ? localDomReference : null;
  rootContext.useSyncedValue("domReferenceElement", localDomReference === void 0 ? rootContextElements.domReference : localDomReferenceElement);
  rootContext.useSyncedValue("floatingElement", localFloatingElement);
  const setReference = React28.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setLocalDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs, setLocalDomReference]);
  const setFloating = React28.useCallback((node) => {
    setLocalFloatingElement(node);
    position.refs.setFloating(node);
  }, [position.refs]);
  const refs = React28.useMemo(() => ({
    ...position.refs,
    setReference,
    setFloating,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setFloating, setPositionReference]);
  const elements = React28.useMemo(() => ({
    ...position.elements,
    domReference: rootContextElements.domReference
  }), [position.elements, rootContextElements.domReference]);
  const open = rootContext.useState("open");
  const floatingId = rootContext.useState("floatingId");
  const context = React28.useMemo(() => ({
    ...position,
    dataRef: rootContext.context.dataRef,
    open,
    onOpenChange: rootContext.setOpen,
    events: rootContext.context.events,
    floatingId,
    refs,
    elements,
    nodeId,
    rootStore: rootContext
  }), [position, refs, elements, nodeId, rootContext, open, floatingId]);
  useIsoLayoutEffect(() => {
    rootContext.context.dataRef.current.floatingContext = context;
    const node = tree?.nodesRef.current.find((n) => n.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React28.useMemo(() => ({
    ...position,
    context,
    refs,
    elements,
    rootStore: rootContext
  }), [position, refs, elements, context, rootContext]);
}

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useSyncedFloatingRootContext.js
function useSyncedFloatingRootContext(options) {
  const {
    popupStore,
    treatPopupAsFloatingElement = false,
    onOpenChange
  } = options;
  const floatingId = useId();
  const nested = useFloatingParentNodeId() != null;
  const open = popupStore.useState("open");
  const referenceElement = popupStore.useState("activeTriggerElement");
  const floatingElement = popupStore.useState(treatPopupAsFloatingElement ? "popupElement" : "positionerElement");
  const triggerElements = popupStore.context.triggerElements;
  const store = useRefWithInit(() => new FloatingRootStore({
    open,
    transitionStatus: void 0,
    referenceElement,
    floatingElement,
    triggerElements,
    onOpenChange,
    floatingId,
    syncOnly: true,
    nested
  })).current;
  useIsoLayoutEffect(() => {
    const valuesToSync = {
      open,
      floatingId,
      referenceElement,
      floatingElement
    };
    if (isElement(referenceElement)) {
      valuesToSync.domReferenceElement = referenceElement;
    }
    if (store.state.positionReference === store.state.referenceElement) {
      valuesToSync.positionReference = referenceElement;
    }
    store.update(valuesToSync);
  }, [open, floatingId, referenceElement, floatingElement, store]);
  store.context.onOpenChange = onOpenChange;
  store.context.nested = nested;
  return store;
}

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFocus.js
var React29 = __toESM(require_react(), 1);
var isMacSafari = isMac && isSafari;
function useFocus(context, props = {}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const {
    events: events2,
    dataRef
  } = store.context;
  const {
    enabled = true,
    delay
  } = props;
  const blockFocusRef = React29.useRef(false);
  const blockedReferenceRef = React29.useRef(null);
  const timeout = useTimeout();
  const keyboardModalityRef = React29.useRef(true);
  React29.useEffect(() => {
    const domReference = store.select("domReferenceElement");
    if (!enabled) {
      return void 0;
    }
    const win = getWindow(domReference);
    function onBlur() {
      const currentDomReference = store.select("domReferenceElement");
      if (!store.select("open") && isHTMLElement(currentDomReference) && currentDomReference === activeElement(ownerDocument(currentDomReference))) {
        blockFocusRef.current = true;
      }
    }
    function onKeyDown() {
      keyboardModalityRef.current = true;
    }
    function onPointerDown() {
      keyboardModalityRef.current = false;
    }
    return mergeCleanups(addEventListener(win, "blur", onBlur), isMacSafari && addEventListener(win, "keydown", onKeyDown, true), isMacSafari && addEventListener(win, "pointerdown", onPointerDown, true));
  }, [store, enabled]);
  React29.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    function onOpenChangeLocal(details) {
      if (details.reason === reason_parts_exports.triggerPress || details.reason === reason_parts_exports.escapeKey) {
        const referenceElement = store.select("domReferenceElement");
        if (isElement(referenceElement)) {
          blockedReferenceRef.current = referenceElement;
          blockFocusRef.current = true;
        }
      }
    }
    events2.on("openchange", onOpenChangeLocal);
    return () => {
      events2.off("openchange", onOpenChangeLocal);
    };
  }, [events2, enabled, store]);
  const reference = React29.useMemo(() => ({
    onMouseLeave() {
      blockFocusRef.current = false;
      blockedReferenceRef.current = null;
    },
    onFocus(event) {
      const focusTarget = event.currentTarget;
      if (blockFocusRef.current) {
        if (blockedReferenceRef.current === focusTarget) {
          return;
        }
        blockFocusRef.current = false;
        blockedReferenceRef.current = null;
      }
      const target = getTarget(event.nativeEvent);
      if (isElement(target)) {
        if (isMacSafari && !event.relatedTarget) {
          if (!keyboardModalityRef.current && !isTypeableElement(target)) {
            return;
          }
        } else if (!matchesFocusVisible(target)) {
          return;
        }
      }
      const movedFromOtherEnabledTrigger = isTargetInsideEnabledTrigger(event.relatedTarget, store.context.triggerElements);
      const {
        nativeEvent,
        currentTarget
      } = event;
      const delayValue = typeof delay === "function" ? delay() : delay;
      if (store.select("open") && movedFromOtherEnabledTrigger || delayValue === 0 || delayValue === void 0) {
        store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerFocus, nativeEvent, currentTarget));
        return;
      }
      timeout.start(delayValue, () => {
        if (blockFocusRef.current) {
          return;
        }
        store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerFocus, nativeEvent, currentTarget));
      });
    },
    onBlur(event) {
      blockFocusRef.current = false;
      blockedReferenceRef.current = null;
      const relatedTarget = event.relatedTarget;
      const nativeEvent = event.nativeEvent;
      const movedToFocusGuard = isElement(relatedTarget) && relatedTarget.hasAttribute(createAttribute("focus-guard")) && relatedTarget.getAttribute("data-type") === "outside";
      timeout.start(0, () => {
        const domReference = store.select("domReferenceElement");
        const activeEl = activeElement(ownerDocument(domReference));
        if (!relatedTarget && activeEl === domReference) {
          return;
        }
        if (contains(dataRef.current.floatingContext?.refs.floating.current, activeEl) || contains(domReference, activeEl) || movedToFocusGuard) {
          return;
        }
        const nextFocusedElement = relatedTarget ?? activeEl;
        if (isTargetInsideEnabledTrigger(nextFocusedElement, store.context.triggerElements)) {
          return;
        }
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerFocus, nativeEvent));
      });
    }
  }), [dataRef, store, timeout, delay]);
  return React29.useMemo(() => enabled ? {
    reference,
    trigger: reference
  } : {}, [enabled, reference]);
}

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverFloatingInteraction.js
var React30 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverInteractionSharedState.js
var HoverInteraction = class _HoverInteraction {
  constructor() {
    this.pointerType = void 0;
    this.interactedInside = false;
    this.handler = void 0;
    this.blockMouseMove = true;
    this.performedPointerEventsMutation = false;
    this.pointerEventsScopeElement = null;
    this.pointerEventsReferenceElement = null;
    this.pointerEventsFloatingElement = null;
    this.restTimeoutPending = false;
    this.openChangeTimeout = new Timeout();
    this.restTimeout = new Timeout();
    this.handleCloseOptions = void 0;
  }
  static create() {
    return new _HoverInteraction();
  }
  dispose = () => {
    this.openChangeTimeout.clear();
    this.restTimeout.clear();
  };
  disposeEffect = () => {
    return this.dispose;
  };
};
var pointerEventsMutationOwnerByScopeElement = /* @__PURE__ */ new WeakMap();
function clearSafePolygonPointerEventsMutation(instance) {
  if (!instance.performedPointerEventsMutation) {
    return;
  }
  const scopeElement = instance.pointerEventsScopeElement;
  if (scopeElement && pointerEventsMutationOwnerByScopeElement.get(scopeElement) === instance) {
    instance.pointerEventsScopeElement?.style.removeProperty("pointer-events");
    instance.pointerEventsReferenceElement?.style.removeProperty("pointer-events");
    instance.pointerEventsFloatingElement?.style.removeProperty("pointer-events");
    pointerEventsMutationOwnerByScopeElement.delete(scopeElement);
  }
  instance.performedPointerEventsMutation = false;
  instance.pointerEventsScopeElement = null;
  instance.pointerEventsReferenceElement = null;
  instance.pointerEventsFloatingElement = null;
}
function applySafePolygonPointerEventsMutation(instance, options) {
  const {
    scopeElement,
    referenceElement,
    floatingElement
  } = options;
  const existingOwner = pointerEventsMutationOwnerByScopeElement.get(scopeElement);
  if (existingOwner && existingOwner !== instance) {
    clearSafePolygonPointerEventsMutation(existingOwner);
  }
  clearSafePolygonPointerEventsMutation(instance);
  instance.performedPointerEventsMutation = true;
  instance.pointerEventsScopeElement = scopeElement;
  instance.pointerEventsReferenceElement = referenceElement;
  instance.pointerEventsFloatingElement = floatingElement;
  pointerEventsMutationOwnerByScopeElement.set(scopeElement, instance);
  scopeElement.style.pointerEvents = "none";
  referenceElement.style.pointerEvents = "auto";
  floatingElement.style.pointerEvents = "auto";
}
function useHoverInteractionSharedState(store) {
  const instance = useRefWithInit(HoverInteraction.create).current;
  const data = store.context.dataRef.current;
  if (!data.hoverInteractionState) {
    data.hoverInteractionState = instance;
  }
  useOnMount(data.hoverInteractionState.disposeEffect);
  return data.hoverInteractionState;
}

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverFloatingInteraction.js
function useHoverFloatingInteraction(context, parameters = {}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const {
    dataRef
  } = store.context;
  const {
    enabled = true,
    closeDelay: closeDelayProp = 0,
    nodeId: nodeIdProp
  } = parameters;
  const instance = useHoverInteractionSharedState(store);
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const isClickLikeOpenEvent2 = useStableCallback(() => {
    return isClickLikeOpenEvent(dataRef.current.openEvent?.type, instance.interactedInside);
  });
  const isHoverOpen = useStableCallback(() => {
    const type = dataRef.current.openEvent?.type;
    return type?.includes("mouse") && type !== "mousedown";
  });
  const isRelatedTargetInsideEnabledTrigger = useStableCallback((target) => {
    return isTargetInsideEnabledTrigger(target, store.context.triggerElements);
  });
  const closeWithDelay = React30.useCallback((event) => {
    const closeDelay = getDelay(closeDelayProp, "close", instance.pointerType);
    const close = () => {
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
      tree?.events.emit("floating.closed", event);
    };
    if (closeDelay) {
      instance.openChangeTimeout.start(closeDelay, close);
    } else {
      instance.openChangeTimeout.clear();
      close();
    }
  }, [closeDelayProp, store, instance, tree]);
  const clearPointerEvents = useStableCallback(() => {
    clearSafePolygonPointerEventsMutation(instance);
  });
  const handleInteractInside = useStableCallback((event) => {
    const target = getTarget(event);
    if (!isInteractiveElement(target)) {
      instance.interactedInside = false;
      return;
    }
    instance.interactedInside = target?.closest("[aria-haspopup]") != null;
  });
  useIsoLayoutEffect(() => {
    if (!open) {
      instance.pointerType = void 0;
      instance.restTimeoutPending = false;
      instance.interactedInside = false;
      clearPointerEvents();
    }
  }, [open, instance, clearPointerEvents]);
  React30.useEffect(() => {
    return clearPointerEvents;
  }, [clearPointerEvents]);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return void 0;
    }
    if (open && instance.handleCloseOptions?.blockPointerEvents && isHoverOpen() && isElement(domReferenceElement) && floatingElement) {
      const ref = domReferenceElement;
      const floatingEl = floatingElement;
      const doc = ownerDocument(floatingElement);
      const parentFloating = tree?.nodesRef.current.find((node) => node.id === parentId)?.context?.elements.floating;
      if (parentFloating) {
        parentFloating.style.pointerEvents = "";
      }
      const scopeElement = instance.handleCloseOptions?.getScope?.() ?? instance.pointerEventsScopeElement ?? parentFloating ?? ref.closest("[data-rootownerid]") ?? doc.body;
      applySafePolygonPointerEventsMutation(instance, {
        scopeElement,
        referenceElement: ref,
        floatingElement: floatingEl
      });
      return () => {
        clearPointerEvents();
      };
    }
    return void 0;
  }, [enabled, open, domReferenceElement, floatingElement, instance, isHoverOpen, tree, parentId, clearPointerEvents]);
  const childClosedTimeout = useTimeout();
  React30.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    function onFloatingMouseEnter() {
      instance.openChangeTimeout.clear();
      childClosedTimeout.clear();
      tree?.events.off("floating.closed", onNodeClosed);
      clearPointerEvents();
    }
    function onFloatingMouseLeave(event) {
      if (tree && parentId && getNodeChildren(tree.nodesRef.current, parentId).length > 0) {
        tree.events.on("floating.closed", onNodeClosed);
        return;
      }
      if (isRelatedTargetInsideEnabledTrigger(event.relatedTarget)) {
        return;
      }
      const currentNodeId = dataRef.current.floatingContext?.nodeId ?? nodeIdProp;
      const relatedTarget = event.relatedTarget;
      const isMovingIntoDescendantFloating = tree && currentNodeId && isElement(relatedTarget) && getNodeChildren(tree.nodesRef.current, currentNodeId, false).some((node) => contains(node.context?.elements.floating, relatedTarget));
      if (isMovingIntoDescendantFloating) {
        return;
      }
      if (instance.handler) {
        instance.handler(event);
        return;
      }
      clearPointerEvents();
      if (!isClickLikeOpenEvent2()) {
        closeWithDelay(event);
      }
    }
    function onNodeClosed(event) {
      if (!tree || !parentId || getNodeChildren(tree.nodesRef.current, parentId).length > 0) {
        return;
      }
      childClosedTimeout.start(0, () => {
        tree.events.off("floating.closed", onNodeClosed);
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
        tree.events.emit("floating.closed", event);
      });
    }
    const floating = floatingElement;
    return mergeCleanups(floating && addEventListener(floating, "mouseenter", onFloatingMouseEnter), floating && addEventListener(floating, "mouseleave", onFloatingMouseLeave), floating && addEventListener(floating, "pointerdown", handleInteractInside, true), () => {
      tree?.events.off("floating.closed", onNodeClosed);
    });
  }, [enabled, floatingElement, store, dataRef, nodeIdProp, isClickLikeOpenEvent2, isRelatedTargetInsideEnabledTrigger, closeWithDelay, clearPointerEvents, handleInteractInside, instance, tree, parentId, childClosedTimeout]);
}

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverReferenceInteraction.js
var React31 = __toESM(require_react(), 1);
var ReactDOM4 = __toESM(require_react_dom(), 1);
var EMPTY_REF = {
  current: null
};
function useHoverReferenceInteraction(context, props = {}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const {
    dataRef,
    events: events2
  } = store.context;
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true,
    triggerElementRef = EMPTY_REF,
    externalTree,
    isActiveTrigger = true,
    getHandleCloseContext,
    isClosing
  } = props;
  const tree = useFloatingTree(externalTree);
  const instance = useHoverInteractionSharedState(store);
  const isHoverCloseActiveRef = React31.useRef(false);
  const handleCloseRef = useValueAsRef(handleClose);
  const delayRef = useValueAsRef(delay);
  const restMsRef = useValueAsRef(restMs);
  const enabledRef = useValueAsRef(enabled);
  const isClosingRef = useValueAsRef(isClosing);
  if (isActiveTrigger) {
    instance.handleCloseOptions = handleCloseRef.current?.__options;
  }
  const isClickLikeOpenEvent2 = useStableCallback(() => {
    return isClickLikeOpenEvent(dataRef.current.openEvent?.type, instance.interactedInside);
  });
  const isRelatedTargetInsideEnabledTrigger = useStableCallback((target) => {
    return isTargetInsideEnabledTrigger(target, store.context.triggerElements);
  });
  const isOverInactiveTrigger = useStableCallback((currentDomReference, currentTarget, target) => {
    const allTriggers = store.context.triggerElements;
    if (allTriggers.hasElement(currentTarget)) {
      return !currentDomReference || !contains(currentDomReference, currentTarget);
    }
    if (!isElement(target)) {
      return false;
    }
    const targetElement = target;
    return allTriggers.hasMatchingElement((trigger) => contains(trigger, targetElement)) && (!currentDomReference || !contains(currentDomReference, targetElement));
  });
  const closeWithDelay = useStableCallback((event, runElseBranch = true) => {
    const closeDelay = getDelay(delayRef.current, "close", instance.pointerType);
    if (closeDelay) {
      instance.openChangeTimeout.start(closeDelay, () => {
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
        tree?.events.emit("floating.closed", event);
      });
    } else if (runElseBranch) {
      instance.openChangeTimeout.clear();
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
      tree?.events.emit("floating.closed", event);
    }
  });
  const cleanupMouseMoveHandler = useStableCallback(() => {
    if (!instance.handler) {
      return;
    }
    const doc = ownerDocument(store.select("domReferenceElement"));
    doc.removeEventListener("mousemove", instance.handler);
    instance.handler = void 0;
  });
  const clearPointerEvents = useStableCallback(() => {
    clearSafePolygonPointerEventsMutation(instance);
  });
  React31.useEffect(() => cleanupMouseMoveHandler, [cleanupMouseMoveHandler]);
  React31.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    function onOpenChangeLocal(details) {
      if (!details.open) {
        isHoverCloseActiveRef.current = details.reason === reason_parts_exports.triggerHover;
        cleanupMouseMoveHandler();
        instance.openChangeTimeout.clear();
        instance.restTimeout.clear();
        instance.blockMouseMove = true;
        instance.restTimeoutPending = false;
      } else {
        isHoverCloseActiveRef.current = false;
      }
    }
    events2.on("openchange", onOpenChangeLocal);
    return () => {
      events2.off("openchange", onOpenChangeLocal);
    };
  }, [enabled, events2, instance, cleanupMouseMoveHandler]);
  React31.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    const trigger = triggerElementRef.current ?? (isActiveTrigger ? store.select("domReferenceElement") : null);
    if (!isElement(trigger)) {
      return void 0;
    }
    function onMouseEnter(event) {
      instance.openChangeTimeout.clear();
      instance.blockMouseMove = false;
      if (mouseOnly && !isMouseLikePointerType(instance.pointerType)) {
        return;
      }
      const restMsValue = getRestMs(restMsRef.current);
      const openDelay = getDelay(delayRef.current, "open", instance.pointerType);
      const eventTarget = getTarget(event);
      const currentTarget = event.currentTarget ?? null;
      const currentDomReference = store.select("domReferenceElement");
      let triggerNode = currentTarget;
      if (isElement(eventTarget) && !store.context.triggerElements.hasElement(eventTarget)) {
        for (const triggerElement of store.context.triggerElements.elements()) {
          if (contains(triggerElement, eventTarget)) {
            triggerNode = triggerElement;
            break;
          }
        }
      }
      if (isElement(currentTarget) && isElement(currentDomReference) && !store.context.triggerElements.hasElement(currentTarget) && contains(currentTarget, currentDomReference)) {
        triggerNode = currentDomReference;
      }
      const isOverInactive = triggerNode == null ? false : isOverInactiveTrigger(currentDomReference, triggerNode, eventTarget);
      const isOpen = store.select("open");
      const isInClosingTransition = isClosingRef.current?.() ?? store.select("transitionStatus") === "ending";
      const isHoverCloseTransition = !isOpen && isInClosingTransition && isHoverCloseActiveRef.current;
      const isReenteringSameTriggerDuringCloseTransition = !isOverInactive && isElement(triggerNode) && isElement(currentDomReference) && contains(currentDomReference, triggerNode) && isHoverCloseTransition;
      const isRestOnlyDelay = restMsValue > 0 && !openDelay;
      const shouldOpenImmediately = isOverInactive && (isOpen || isHoverCloseTransition) || isReenteringSameTriggerDuringCloseTransition;
      const shouldOpen = !isOpen || isOverInactive;
      if (shouldOpenImmediately) {
        store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, event, triggerNode));
        return;
      }
      if (isRestOnlyDelay) {
        return;
      }
      if (openDelay) {
        instance.openChangeTimeout.start(openDelay, () => {
          if (shouldOpen) {
            store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, event, triggerNode));
          }
        });
      } else if (shouldOpen) {
        store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, event, triggerNode));
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent2()) {
        clearPointerEvents();
        return;
      }
      cleanupMouseMoveHandler();
      const domReferenceElement = store.select("domReferenceElement");
      const doc = ownerDocument(domReferenceElement);
      instance.restTimeout.clear();
      instance.restTimeoutPending = false;
      const handleCloseContextBase = dataRef.current.floatingContext ?? getHandleCloseContext?.();
      const ignoreRelatedTargetTrigger = isRelatedTargetInsideEnabledTrigger(event.relatedTarget);
      if (ignoreRelatedTargetTrigger) {
        return;
      }
      if (handleCloseRef.current && handleCloseContextBase) {
        if (!store.select("open")) {
          instance.openChangeTimeout.clear();
        }
        const currentTrigger = triggerElementRef.current;
        instance.handler = handleCloseRef.current({
          ...handleCloseContextBase,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            if (enabledRef.current && !isClickLikeOpenEvent2() && currentTrigger === store.select("domReferenceElement")) {
              closeWithDelay(event, true);
            }
          }
        });
        doc.addEventListener("mousemove", instance.handler);
        instance.handler(event);
        return;
      }
      const shouldClose = instance.pointerType === "touch" ? !contains(store.select("floatingElement"), event.relatedTarget) : true;
      if (shouldClose) {
        closeWithDelay(event);
      }
    }
    if (move) {
      return mergeCleanups(addEventListener(trigger, "mousemove", onMouseEnter, {
        once: true
      }), addEventListener(trigger, "mouseenter", onMouseEnter), addEventListener(trigger, "mouseleave", onMouseLeave));
    }
    return mergeCleanups(addEventListener(trigger, "mouseenter", onMouseEnter), addEventListener(trigger, "mouseleave", onMouseLeave));
  }, [cleanupMouseMoveHandler, clearPointerEvents, dataRef, delayRef, closeWithDelay, store, enabled, handleCloseRef, instance, isActiveTrigger, isOverInactiveTrigger, isClickLikeOpenEvent2, isRelatedTargetInsideEnabledTrigger, mouseOnly, move, restMsRef, triggerElementRef, tree, enabledRef, getHandleCloseContext, isClosingRef]);
  return React31.useMemo(() => {
    if (!enabled) {
      return void 0;
    }
    function setPointerRef(event) {
      instance.pointerType = event.pointerType;
    }
    return {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,
      onMouseMove(event) {
        const {
          nativeEvent
        } = event;
        const trigger = event.currentTarget;
        const currentDomReference = store.select("domReferenceElement");
        const currentOpen = store.select("open");
        const isOverInactive = isOverInactiveTrigger(currentDomReference, trigger, event.target);
        if (mouseOnly && !isMouseLikePointerType(instance.pointerType)) {
          return;
        }
        if (currentOpen && isOverInactive && instance.handleCloseOptions?.blockPointerEvents) {
          const floatingElement = store.select("floatingElement");
          if (floatingElement) {
            const scopeElement = instance.handleCloseOptions?.getScope?.() ?? trigger.ownerDocument.body;
            applySafePolygonPointerEventsMutation(instance, {
              scopeElement,
              referenceElement: trigger,
              floatingElement
            });
          }
        }
        const restMsValue = getRestMs(restMsRef.current);
        if (currentOpen && !isOverInactive || restMsValue === 0) {
          return;
        }
        if (!isOverInactive && instance.restTimeoutPending && event.movementX ** 2 + event.movementY ** 2 < 2) {
          return;
        }
        instance.restTimeout.clear();
        function handleMouseMove() {
          instance.restTimeoutPending = false;
          if (isClickLikeOpenEvent2()) {
            return;
          }
          const latestOpen = store.select("open");
          if (!instance.blockMouseMove && (!latestOpen || isOverInactive)) {
            store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, nativeEvent, trigger));
          }
        }
        if (instance.pointerType === "touch") {
          ReactDOM4.flushSync(() => {
            handleMouseMove();
          });
        } else if (isOverInactive && currentOpen) {
          handleMouseMove();
        } else {
          instance.restTimeoutPending = true;
          instance.restTimeout.start(restMsValue, handleMouseMove);
        }
      }
    };
  }, [enabled, instance, isClickLikeOpenEvent2, isOverInactiveTrigger, mouseOnly, store, restMsRef]);
}

// node_modules/@base-ui/react/esm/floating-ui-react/hooks/useInteractions.js
var React32 = __toESM(require_react(), 1);
function useInteractions(propsList = []) {
  const referenceDeps = propsList.map((key2) => key2?.reference);
  const floatingDeps = propsList.map((key2) => key2?.floating);
  const itemDeps = propsList.map((key2) => key2?.item);
  const triggerDeps = propsList.map((key2) => key2?.trigger);
  const getReferenceProps = React32.useCallback(
    (userProps) => mergeProps2(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps
  );
  const getFloatingProps = React32.useCallback(
    (userProps) => mergeProps2(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps
  );
  const getItemProps = React32.useCallback(
    (userProps) => mergeProps2(userProps, propsList, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps
  );
  const getTriggerProps = React32.useCallback(
    (userProps) => mergeProps2(userProps, propsList, "trigger"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    triggerDeps
  );
  return React32.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    getTriggerProps
  }), [getReferenceProps, getFloatingProps, getItemProps, getTriggerProps]);
}
function mergeProps2(userProps, propsList, elementKey) {
  const eventHandlers = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  const outputProps = {};
  if (elementKey === "floating") {
    outputProps.tabIndex = -1;
    outputProps[FOCUSABLE_ATTRIBUTE] = "";
  }
  for (const key2 in userProps) {
    if (isItem && userProps) {
      if (key2 === ACTIVE_KEY || key2 === SELECTED_KEY) {
        continue;
      }
    }
    outputProps[key2] = userProps[key2];
  }
  for (let i = 0; i < propsList.length; i += 1) {
    let props;
    const propsOrGetProps = propsList[i]?.[elementKey];
    if (typeof propsOrGetProps === "function") {
      props = userProps ? propsOrGetProps(userProps) : null;
    } else {
      props = propsOrGetProps;
    }
    if (!props) {
      continue;
    }
    mutablyMergeProps(outputProps, props, isItem, eventHandlers);
  }
  mutablyMergeProps(outputProps, userProps, isItem, eventHandlers);
  return outputProps;
}
function mutablyMergeProps(outputProps, props, isItem, eventHandlers) {
  for (const key2 in props) {
    const value = props[key2];
    if (isItem && (key2 === ACTIVE_KEY || key2 === SELECTED_KEY)) {
      continue;
    }
    if (!key2.startsWith("on")) {
      outputProps[key2] = value;
    } else {
      if (!eventHandlers.has(key2)) {
        eventHandlers.set(key2, []);
      }
      if (typeof value === "function") {
        eventHandlers.get(key2)?.push(value);
        outputProps[key2] = (...args) => {
          return eventHandlers.get(key2)?.map((fn) => fn(...args)).find((val) => val !== void 0);
        };
      }
    }
  }
}

// node_modules/@base-ui/react/esm/floating-ui-react/safePolygon.js
var CURSOR_SPEED_THRESHOLD = 0.1;
var CURSOR_SPEED_THRESHOLD_SQUARED = CURSOR_SPEED_THRESHOLD * CURSOR_SPEED_THRESHOLD;
var POLYGON_BUFFER = 0.5;
function hasIntersectingEdge(pointX, pointY, xi, yi, xj, yj) {
  return yi >= pointY !== yj >= pointY && pointX <= (xj - xi) * (pointY - yi) / (yj - yi) + xi;
}
function isPointInQuadrilateral(pointX, pointY, x1, y1, x2, y2, x3, y3, x4, y4) {
  let isInsideValue = false;
  if (hasIntersectingEdge(pointX, pointY, x1, y1, x2, y2)) {
    isInsideValue = !isInsideValue;
  }
  if (hasIntersectingEdge(pointX, pointY, x2, y2, x3, y3)) {
    isInsideValue = !isInsideValue;
  }
  if (hasIntersectingEdge(pointX, pointY, x3, y3, x4, y4)) {
    isInsideValue = !isInsideValue;
  }
  if (hasIntersectingEdge(pointX, pointY, x4, y4, x1, y1)) {
    isInsideValue = !isInsideValue;
  }
  return isInsideValue;
}
function isInsideRect(pointX, pointY, rect) {
  return pointX >= rect.x && pointX <= rect.x + rect.width && pointY >= rect.y && pointY <= rect.y + rect.height;
}
function isInsideAxisAlignedRect(pointX, pointY, x1, y1, x2, y2) {
  const minX = Math.min(x1, x2);
  const maxX = Math.max(x1, x2);
  const minY = Math.min(y1, y2);
  const maxY = Math.max(y1, y2);
  return pointX >= minX && pointX <= maxX && pointY >= minY && pointY <= maxY;
}
function safePolygon(options = {}) {
  const {
    blockPointerEvents = false
  } = options;
  const timeout = new Timeout();
  const fn = ({
    x,
    y,
    placement,
    elements,
    onClose,
    nodeId,
    tree
  }) => {
    const side = placement?.split("-")[0];
    let hasLanded = false;
    let lastX = null;
    let lastY = null;
    let lastCursorTime = typeof performance !== "undefined" ? performance.now() : 0;
    function isCursorMovingSlowly(nextX, nextY) {
      const currentTime = performance.now();
      const elapsedTime = currentTime - lastCursorTime;
      if (lastX === null || lastY === null || elapsedTime === 0) {
        lastX = nextX;
        lastY = nextY;
        lastCursorTime = currentTime;
        return false;
      }
      const deltaX = nextX - lastX;
      const deltaY = nextY - lastY;
      const distanceSquared = deltaX * deltaX + deltaY * deltaY;
      const thresholdSquared = elapsedTime * elapsedTime * CURSOR_SPEED_THRESHOLD_SQUARED;
      lastX = nextX;
      lastY = nextY;
      lastCursorTime = currentTime;
      return distanceSquared < thresholdSquared;
    }
    function close() {
      timeout.clear();
      onClose();
    }
    return function onMouseMove(event) {
      timeout.clear();
      const domReference = elements.domReference;
      const floating = elements.floating;
      if (!domReference || !floating || side == null || x == null || y == null) {
        return void 0;
      }
      const {
        clientX,
        clientY
      } = event;
      const target = getTarget(event);
      const isLeave = event.type === "mouseleave";
      const isOverFloatingEl = contains(floating, target);
      const isOverReferenceEl = contains(domReference, target);
      if (isOverFloatingEl) {
        hasLanded = true;
        if (!isLeave) {
          return void 0;
        }
      }
      if (isOverReferenceEl) {
        hasLanded = false;
        if (!isLeave) {
          hasLanded = true;
          return void 0;
        }
      }
      if (isLeave && isElement(event.relatedTarget) && contains(floating, event.relatedTarget)) {
        return void 0;
      }
      function hasOpenChildNode() {
        return Boolean(tree && getNodeChildren(tree.nodesRef.current, nodeId).length > 0);
      }
      function closeIfNoOpenChild() {
        if (!hasOpenChildNode()) {
          close();
        }
      }
      if (hasOpenChildNode()) {
        return void 0;
      }
      const refRect = domReference.getBoundingClientRect();
      const rect = floating.getBoundingClientRect();
      const cursorLeaveFromRight = x > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
      const isFloatingWider = rect.width > refRect.width;
      const isFloatingTaller = rect.height > refRect.height;
      const left = (isFloatingWider ? refRect : rect).left;
      const right = (isFloatingWider ? refRect : rect).right;
      const top = (isFloatingTaller ? refRect : rect).top;
      const bottom = (isFloatingTaller ? refRect : rect).bottom;
      if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) {
        closeIfNoOpenChild();
        return void 0;
      }
      let isInsideTroughRect = false;
      switch (side) {
        case "top":
          isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, left, refRect.top + 1, right, rect.bottom - 1);
          break;
        case "bottom":
          isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, left, rect.top + 1, right, refRect.bottom - 1);
          break;
        case "left":
          isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, rect.right - 1, bottom, refRect.left + 1, top);
          break;
        case "right":
          isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, refRect.right - 1, bottom, rect.left + 1, top);
          break;
        default:
      }
      if (isInsideTroughRect) {
        return void 0;
      }
      if (hasLanded && !isInsideRect(clientX, clientY, refRect)) {
        closeIfNoOpenChild();
        return void 0;
      }
      if (!isLeave && isCursorMovingSlowly(clientX, clientY)) {
        closeIfNoOpenChild();
        return void 0;
      }
      let isInsidePolygon = false;
      switch (side) {
        case "top": {
          const cursorXOffset = isFloatingWider ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
          const cursorPointOneX = isFloatingWider ? x + cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
          const cursorPointTwoX = isFloatingWider ? x - cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
          const cursorPointY = y + POLYGON_BUFFER + 1;
          const commonYLeft = cursorLeaveFromRight ? rect.bottom - POLYGON_BUFFER : isFloatingWider ? rect.bottom - POLYGON_BUFFER : rect.top;
          const commonYRight = cursorLeaveFromRight ? isFloatingWider ? rect.bottom - POLYGON_BUFFER : rect.top : rect.bottom - POLYGON_BUFFER;
          isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointOneX, cursorPointY, cursorPointTwoX, cursorPointY, rect.left, commonYLeft, rect.right, commonYRight);
          break;
        }
        case "bottom": {
          const cursorXOffset = isFloatingWider ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
          const cursorPointOneX = isFloatingWider ? x + cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
          const cursorPointTwoX = isFloatingWider ? x - cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
          const cursorPointY = y - POLYGON_BUFFER;
          const commonYLeft = cursorLeaveFromRight ? rect.top + POLYGON_BUFFER : isFloatingWider ? rect.top + POLYGON_BUFFER : rect.bottom;
          const commonYRight = cursorLeaveFromRight ? isFloatingWider ? rect.top + POLYGON_BUFFER : rect.bottom : rect.top + POLYGON_BUFFER;
          isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointOneX, cursorPointY, cursorPointTwoX, cursorPointY, rect.left, commonYLeft, rect.right, commonYRight);
          break;
        }
        case "left": {
          const cursorYOffset = isFloatingTaller ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
          const cursorPointOneY = isFloatingTaller ? y + cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
          const cursorPointTwoY = isFloatingTaller ? y - cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
          const cursorPointX = x + POLYGON_BUFFER + 1;
          const commonXTop = cursorLeaveFromBottom ? rect.right - POLYGON_BUFFER : isFloatingTaller ? rect.right - POLYGON_BUFFER : rect.left;
          const commonXBottom = cursorLeaveFromBottom ? isFloatingTaller ? rect.right - POLYGON_BUFFER : rect.left : rect.right - POLYGON_BUFFER;
          isInsidePolygon = isPointInQuadrilateral(clientX, clientY, commonXTop, rect.top, commonXBottom, rect.bottom, cursorPointX, cursorPointOneY, cursorPointX, cursorPointTwoY);
          break;
        }
        case "right": {
          const cursorYOffset = isFloatingTaller ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
          const cursorPointOneY = isFloatingTaller ? y + cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
          const cursorPointTwoY = isFloatingTaller ? y - cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
          const cursorPointX = x - POLYGON_BUFFER;
          const commonXTop = cursorLeaveFromBottom ? rect.left + POLYGON_BUFFER : isFloatingTaller ? rect.left + POLYGON_BUFFER : rect.right;
          const commonXBottom = cursorLeaveFromBottom ? isFloatingTaller ? rect.left + POLYGON_BUFFER : rect.right : rect.left + POLYGON_BUFFER;
          isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointX, cursorPointOneY, cursorPointX, cursorPointTwoY, commonXTop, rect.top, commonXBottom, rect.bottom);
          break;
        }
        default:
      }
      if (!isInsidePolygon) {
        closeIfNoOpenChild();
      } else if (!hasLanded) {
        timeout.start(40, closeIfNoOpenChild);
      }
      return void 0;
    };
  };
  fn.__options = {
    ...options,
    blockPointerEvents
  };
  return fn;
}

// node_modules/@base-ui/react/esm/utils/popupStateMapping.js
var CommonPopupDataAttributes = (function(CommonPopupDataAttributes2) {
  CommonPopupDataAttributes2["open"] = "data-open";
  CommonPopupDataAttributes2["closed"] = "data-closed";
  CommonPopupDataAttributes2[CommonPopupDataAttributes2["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
  CommonPopupDataAttributes2[CommonPopupDataAttributes2["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
  CommonPopupDataAttributes2["anchorHidden"] = "data-anchor-hidden";
  CommonPopupDataAttributes2["side"] = "data-side";
  CommonPopupDataAttributes2["align"] = "data-align";
  return CommonPopupDataAttributes2;
})({});
var CommonTriggerDataAttributes = /* @__PURE__ */ (function(CommonTriggerDataAttributes2) {
  CommonTriggerDataAttributes2["popupOpen"] = "data-popup-open";
  CommonTriggerDataAttributes2["pressed"] = "data-pressed";
  return CommonTriggerDataAttributes2;
})({});
var TRIGGER_HOOK = {
  [CommonTriggerDataAttributes.popupOpen]: ""
};
var PRESSABLE_TRIGGER_HOOK = {
  [CommonTriggerDataAttributes.popupOpen]: "",
  [CommonTriggerDataAttributes.pressed]: ""
};
var POPUP_OPEN_HOOK = {
  [CommonPopupDataAttributes.open]: ""
};
var POPUP_CLOSED_HOOK = {
  [CommonPopupDataAttributes.closed]: ""
};
var ANCHOR_HIDDEN_HOOK = {
  [CommonPopupDataAttributes.anchorHidden]: ""
};
var triggerOpenStateMapping = {
  open(value) {
    if (value) {
      return TRIGGER_HOOK;
    }
    return null;
  }
};
var popupStateMapping = {
  open(value) {
    if (value) {
      return POPUP_OPEN_HOOK;
    }
    return POPUP_CLOSED_HOOK;
  },
  anchorHidden(value) {
    if (value) {
      return ANCHOR_HIDDEN_HOOK;
    }
    return null;
  }
};

// node_modules/@base-ui/utils/esm/inertValue.js
function inertValue(value) {
  if (isReactVersionAtLeast(19)) {
    return value;
  }
  return value ? "true" : void 0;
}

// node_modules/@base-ui/react/esm/utils/useAnchorPositioning.js
var React33 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/floating-ui-react/middleware/arrow.js
var baseArrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform3,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0,
      offsetParent = "real"
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform3.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = offsetParent === "real" ? await platform3.getOffsetParent?.(element) : elements.floating;
    let clientSize = elements.floating[clientProp] || rects.floating[length];
    if (!clientSize || !await platform3.isElement?.(arrowOffsetParent)) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
    const min2 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(min2, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min2 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min2 ? center - min2 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var arrow4 = (options, deps) => ({
  ...baseArrow(options),
  options: [options, deps]
});

// node_modules/@base-ui/react/esm/utils/hideMiddleware.js
var hide4 = {
  name: "hide",
  async fn(state) {
    const {
      width,
      height,
      x,
      y
    } = state.rects.reference;
    const anchorHidden = width === 0 && height === 0 && x === 0 && y === 0;
    const nativeHideResult = await hide3().fn(state);
    return {
      data: {
        referenceHidden: nativeHideResult.data?.referenceHidden || anchorHidden
      }
    };
  }
};

// node_modules/@base-ui/react/esm/utils/adaptiveOriginMiddleware.js
var DEFAULT_SIDES = {
  sideX: "left",
  sideY: "top"
};
var adaptiveOrigin = {
  name: "adaptiveOrigin",
  async fn(state) {
    const {
      x: rawX,
      y: rawY,
      rects: {
        floating: floatRect
      },
      elements: {
        floating
      },
      platform: platform3,
      strategy,
      placement
    } = state;
    const win = getWindow(floating);
    const styles = win.getComputedStyle(floating);
    const hasTransition = styles.transitionDuration !== "0s" && styles.transitionDuration !== "";
    if (!hasTransition) {
      return {
        x: rawX,
        y: rawY,
        data: DEFAULT_SIDES
      };
    }
    const offsetParent = await platform3.getOffsetParent?.(floating);
    let offsetDimensions = {
      width: 0,
      height: 0
    };
    if (strategy === "fixed" && win?.visualViewport) {
      offsetDimensions = {
        width: win.visualViewport.width,
        height: win.visualViewport.height
      };
    } else if (offsetParent === win) {
      const doc = ownerDocument(floating);
      offsetDimensions = {
        width: doc.documentElement.clientWidth,
        height: doc.documentElement.clientHeight
      };
    } else if (await platform3.isElement?.(offsetParent)) {
      offsetDimensions = await platform3.getDimensions(offsetParent);
    }
    const currentSide = getSide(placement);
    let x = rawX;
    let y = rawY;
    if (currentSide === "left") {
      x = offsetDimensions.width - (rawX + floatRect.width);
    }
    if (currentSide === "top") {
      y = offsetDimensions.height - (rawY + floatRect.height);
    }
    const sideX = currentSide === "left" ? "right" : DEFAULT_SIDES.sideX;
    const sideY = currentSide === "top" ? "bottom" : DEFAULT_SIDES.sideY;
    return {
      x,
      y,
      data: {
        sideX,
        sideY
      }
    };
  }
};

// node_modules/@base-ui/react/esm/utils/useAnchorPositioning.js
function getLogicalSide(sideParam, renderedSide, isRtl) {
  const isLogicalSideParam = sideParam === "inline-start" || sideParam === "inline-end";
  const logicalRight = isRtl ? "inline-start" : "inline-end";
  const logicalLeft = isRtl ? "inline-end" : "inline-start";
  return {
    top: "top",
    right: isLogicalSideParam ? logicalRight : "right",
    bottom: "bottom",
    left: isLogicalSideParam ? logicalLeft : "left"
  }[renderedSide];
}
function getOffsetData(state, sideParam, isRtl) {
  const {
    rects,
    placement
  } = state;
  const data = {
    side: getLogicalSide(sideParam, getSide(placement), isRtl),
    align: getAlignment(placement) || "center",
    anchor: {
      width: rects.reference.width,
      height: rects.reference.height
    },
    positioner: {
      width: rects.floating.width,
      height: rects.floating.height
    }
  };
  return data;
}
function useAnchorPositioning(params) {
  const {
    // Public parameters
    anchor,
    positionMethod = "absolute",
    side: sideParam = "bottom",
    sideOffset = 0,
    align = "center",
    alignOffset = 0,
    collisionBoundary,
    collisionPadding: collisionPaddingParam = 5,
    sticky = false,
    arrowPadding = 5,
    disableAnchorTracking = false,
    // Private parameters
    keepMounted = false,
    floatingRootContext,
    mounted,
    collisionAvoidance,
    shiftCrossAxis = false,
    nodeId,
    adaptiveOrigin: adaptiveOrigin2,
    lazyFlip = false,
    externalTree
  } = params;
  const [mountSide, setMountSide] = React33.useState(null);
  if (!mounted && mountSide !== null) {
    setMountSide(null);
  }
  const collisionAvoidanceSide = collisionAvoidance.side || "flip";
  const collisionAvoidanceAlign = collisionAvoidance.align || "flip";
  const collisionAvoidanceFallbackAxisSide = collisionAvoidance.fallbackAxisSide || "end";
  const anchorFn = typeof anchor === "function" ? anchor : void 0;
  const anchorFnCallback = useStableCallback(anchorFn);
  const anchorDep = anchorFn ? anchorFnCallback : anchor;
  const anchorValueRef = useValueAsRef(anchor);
  const mountedRef = useValueAsRef(mounted);
  const direction = useDirection();
  const isRtl = direction === "rtl";
  const side = mountSide || {
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
    "inline-end": isRtl ? "left" : "right",
    "inline-start": isRtl ? "right" : "left"
  }[sideParam];
  const placement = align === "center" ? side : `${side}-${align}`;
  let collisionPadding = collisionPaddingParam;
  const bias = 1;
  const biasTop = sideParam === "bottom" ? bias : 0;
  const biasBottom = sideParam === "top" ? bias : 0;
  const biasLeft = sideParam === "right" ? bias : 0;
  const biasRight = sideParam === "left" ? bias : 0;
  if (typeof collisionPadding === "number") {
    collisionPadding = {
      top: collisionPadding + biasTop,
      right: collisionPadding + biasRight,
      bottom: collisionPadding + biasBottom,
      left: collisionPadding + biasLeft
    };
  } else if (collisionPadding) {
    collisionPadding = {
      top: (collisionPadding.top || 0) + biasTop,
      right: (collisionPadding.right || 0) + biasRight,
      bottom: (collisionPadding.bottom || 0) + biasBottom,
      left: (collisionPadding.left || 0) + biasLeft
    };
  }
  const commonCollisionProps = {
    boundary: collisionBoundary === "clipping-ancestors" ? "clippingAncestors" : collisionBoundary,
    padding: collisionPadding
  };
  const arrowRef = React33.useRef(null);
  const sideOffsetRef = useValueAsRef(sideOffset);
  const alignOffsetRef = useValueAsRef(alignOffset);
  const sideOffsetDep = typeof sideOffset !== "function" ? sideOffset : 0;
  const alignOffsetDep = typeof alignOffset !== "function" ? alignOffset : 0;
  const middleware = [offset3((state) => {
    const data = getOffsetData(state, sideParam, isRtl);
    const sideAxis = typeof sideOffsetRef.current === "function" ? sideOffsetRef.current(data) : sideOffsetRef.current;
    const alignAxis = typeof alignOffsetRef.current === "function" ? alignOffsetRef.current(data) : alignOffsetRef.current;
    return {
      mainAxis: sideAxis,
      crossAxis: alignAxis,
      alignmentAxis: alignAxis
    };
  }, [sideOffsetDep, alignOffsetDep, isRtl, sideParam])];
  const shiftDisabled = collisionAvoidanceAlign === "none" && collisionAvoidanceSide !== "shift";
  const crossAxisShiftEnabled = !shiftDisabled && (sticky || shiftCrossAxis || collisionAvoidanceSide === "shift");
  const flipMiddleware = collisionAvoidanceSide === "none" ? null : flip3({
    ...commonCollisionProps,
    // Ensure the popup flips if it's been limited by its --available-height and it resizes.
    // Since the size() padding is smaller than the flip() padding, flip() will take precedence.
    padding: {
      top: collisionPadding.top + bias,
      right: collisionPadding.right + bias,
      bottom: collisionPadding.bottom + bias,
      left: collisionPadding.left + bias
    },
    mainAxis: !shiftCrossAxis && collisionAvoidanceSide === "flip",
    crossAxis: collisionAvoidanceAlign === "flip" ? "alignment" : false,
    fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide
  });
  const shiftMiddleware = shiftDisabled ? null : shift3((data) => {
    const html = ownerDocument(data.elements.floating).documentElement;
    return {
      ...commonCollisionProps,
      // Use the Layout Viewport to avoid shifting around when pinch-zooming
      // for context menus.
      rootBoundary: shiftCrossAxis ? {
        x: 0,
        y: 0,
        width: html.clientWidth,
        height: html.clientHeight
      } : void 0,
      mainAxis: collisionAvoidanceAlign !== "none",
      crossAxis: crossAxisShiftEnabled,
      limiter: sticky || shiftCrossAxis ? void 0 : limitShift3((limitData) => {
        if (!arrowRef.current) {
          return {};
        }
        const {
          width,
          height
        } = arrowRef.current.getBoundingClientRect();
        const sideAxis = getSideAxis(getSide(limitData.placement));
        const arrowSize = sideAxis === "y" ? width : height;
        const offsetAmount = sideAxis === "y" ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
        return {
          offset: arrowSize / 2 + offsetAmount / 2
        };
      })
    };
  }, [commonCollisionProps, sticky, shiftCrossAxis, collisionPadding, collisionAvoidanceAlign]);
  if (collisionAvoidanceSide === "shift" || collisionAvoidanceAlign === "shift" || align === "center") {
    middleware.push(shiftMiddleware, flipMiddleware);
  } else {
    middleware.push(flipMiddleware, shiftMiddleware);
  }
  middleware.push(size3({
    ...commonCollisionProps,
    apply({
      elements: {
        floating
      },
      availableWidth,
      availableHeight,
      rects
    }) {
      if (!mountedRef.current) {
        return;
      }
      const floatingStyle = floating.style;
      floatingStyle.setProperty("--available-width", `${availableWidth}px`);
      floatingStyle.setProperty("--available-height", `${availableHeight}px`);
      const dpr = getWindow(floating).devicePixelRatio || 1;
      const {
        x: x2,
        y: y2,
        width,
        height
      } = rects.reference;
      const anchorWidth = (Math.round((x2 + width) * dpr) - Math.round(x2 * dpr)) / dpr;
      const anchorHeight = (Math.round((y2 + height) * dpr) - Math.round(y2 * dpr)) / dpr;
      floatingStyle.setProperty("--anchor-width", `${anchorWidth}px`);
      floatingStyle.setProperty("--anchor-height", `${anchorHeight}px`);
    }
  }), arrow4(() => ({
    // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
    // we'll create a fake element.
    element: arrowRef.current || ownerDocument(arrowRef.current).createElement("div"),
    padding: arrowPadding,
    offsetParent: "floating"
  }), [arrowPadding]), {
    name: "transformOrigin",
    fn(state) {
      const {
        elements: elements2,
        middlewareData: middlewareData2,
        placement: renderedPlacement2,
        rects,
        y: y2
      } = state;
      const currentRenderedSide = getSide(renderedPlacement2);
      const currentRenderedAxis = getSideAxis(currentRenderedSide);
      const arrowEl = arrowRef.current;
      const arrowX = middlewareData2.arrow?.x || 0;
      const arrowY = middlewareData2.arrow?.y || 0;
      const arrowWidth = arrowEl?.clientWidth || 0;
      const arrowHeight = arrowEl?.clientHeight || 0;
      const transformX = arrowX + arrowWidth / 2;
      const transformY = arrowY + arrowHeight / 2;
      const shiftY = Math.abs(middlewareData2.shift?.y || 0);
      const halfAnchorHeight = rects.reference.height / 2;
      const sideOffsetValue = typeof sideOffset === "function" ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
      const isOverlappingAnchor = shiftY > sideOffsetValue;
      const adjacentTransformOrigin = {
        top: `${transformX}px calc(100% + ${sideOffsetValue}px)`,
        bottom: `${transformX}px ${-sideOffsetValue}px`,
        left: `calc(100% + ${sideOffsetValue}px) ${transformY}px`,
        right: `${-sideOffsetValue}px ${transformY}px`
      }[currentRenderedSide];
      const overlapTransformOrigin = `${transformX}px ${rects.reference.y + halfAnchorHeight - y2}px`;
      elements2.floating.style.setProperty("--transform-origin", crossAxisShiftEnabled && currentRenderedAxis === "y" && isOverlappingAnchor ? overlapTransformOrigin : adjacentTransformOrigin);
      return {};
    }
  }, hide4, adaptiveOrigin2);
  useIsoLayoutEffect(() => {
    if (!mounted && floatingRootContext) {
      floatingRootContext.update({
        referenceElement: null,
        floatingElement: null,
        domReferenceElement: null,
        positionReference: null
      });
    }
  }, [mounted, floatingRootContext]);
  const autoUpdateOptions = React33.useMemo(() => ({
    elementResize: !disableAnchorTracking && typeof ResizeObserver !== "undefined",
    layoutShift: !disableAnchorTracking && typeof IntersectionObserver !== "undefined"
  }), [disableAnchorTracking]);
  const {
    refs,
    elements,
    x,
    y,
    middlewareData,
    update: update2,
    placement: renderedPlacement,
    context,
    isPositioned,
    floatingStyles: originalFloatingStyles
  } = useFloating2({
    rootContext: floatingRootContext,
    open: keepMounted ? mounted : void 0,
    placement,
    middleware,
    strategy: positionMethod,
    whileElementsMounted: keepMounted ? void 0 : (...args) => autoUpdate(...args, autoUpdateOptions),
    nodeId,
    externalTree
  });
  const {
    sideX,
    sideY
  } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;
  const resolvedPosition = isPositioned ? positionMethod : "fixed";
  const floatingStyles = React33.useMemo(() => {
    const base = adaptiveOrigin2 ? {
      position: resolvedPosition,
      [sideX]: x,
      [sideY]: y
    } : {
      position: resolvedPosition,
      ...originalFloatingStyles
    };
    if (!isPositioned) {
      base.opacity = 0;
    }
    return base;
  }, [adaptiveOrigin2, resolvedPosition, sideX, x, sideY, y, originalFloatingStyles, isPositioned]);
  const registeredPositionReferenceRef = React33.useRef(null);
  useIsoLayoutEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    const resolvedAnchor = typeof anchorValue === "function" ? anchorValue() : anchorValue;
    const unwrappedElement = (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
    const finalAnchor = unwrappedElement || null;
    if (finalAnchor !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(finalAnchor);
      registeredPositionReferenceRef.current = finalAnchor;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  React33.useEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    if (typeof anchorValue === "function") {
      return;
    }
    if (isRef(anchorValue) && anchorValue.current !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(anchorValue.current);
      registeredPositionReferenceRef.current = anchorValue.current;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  React33.useEffect(() => {
    if (keepMounted && mounted && elements.domReference && elements.floating) {
      return autoUpdate(elements.domReference, elements.floating, update2, autoUpdateOptions);
    }
    return void 0;
  }, [keepMounted, mounted, elements, update2, autoUpdateOptions]);
  const renderedSide = getSide(renderedPlacement);
  const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
  const renderedAlign = getAlignment(renderedPlacement) || "center";
  const anchorHidden = Boolean(middlewareData.hide?.referenceHidden);
  useIsoLayoutEffect(() => {
    if (lazyFlip && mounted && isPositioned) {
      setMountSide(renderedSide);
    }
  }, [lazyFlip, mounted, isPositioned, renderedSide]);
  const arrowStyles = React33.useMemo(() => ({
    position: "absolute",
    top: middlewareData.arrow?.y,
    left: middlewareData.arrow?.x
  }), [middlewareData.arrow]);
  const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
  return React33.useMemo(() => ({
    positionerStyles: floatingStyles,
    arrowStyles,
    arrowRef,
    arrowUncentered,
    side: logicalRenderedSide,
    align: renderedAlign,
    physicalSide: renderedSide,
    anchorHidden,
    refs,
    context,
    isPositioned,
    update: update2
  }), [floatingStyles, arrowStyles, arrowRef, arrowUncentered, logicalRenderedSide, renderedAlign, renderedSide, anchorHidden, refs, context, isPositioned, update2]);
}
function isRef(param) {
  return param != null && "current" in param;
}

// node_modules/@base-ui/react/esm/utils/getDisabledMountTransitionStyles.js
function getDisabledMountTransitionStyles(transitionStatus) {
  return transitionStatus === "starting" ? DISABLED_TRANSITIONS_STYLE : EMPTY_OBJECT;
}

// node_modules/@base-ui/react/esm/utils/usePositioner.js
function usePositioner(componentProps, state, {
  styles,
  transitionStatus,
  props,
  refs,
  hidden,
  inert = false
}) {
  const style = {
    ...styles
  };
  if (inert) {
    style.pointerEvents = "none";
  }
  return useRenderElement("div", componentProps, {
    state,
    ref: refs,
    props: [{
      role: "presentation",
      hidden,
      style
    }, getDisabledMountTransitionStyles(transitionStatus), props],
    stateAttributesMapping: popupStateMapping
  });
}

// node_modules/@base-ui/react/esm/button/Button.js
var React34 = __toESM(require_react(), 1);
var Button = /* @__PURE__ */ React34.forwardRef(function Button2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabled2 = false,
    focusableWhenDisabled = false,
    nativeButton = true,
    style,
    ...elementProps
  } = componentProps;
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled: disabled2,
    focusableWhenDisabled,
    native: nativeButton
  });
  const state = {
    disabled: disabled2
  };
  return useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef],
    props: [elementProps, getButtonProps]
  });
});
if (true) Button.displayName = "Button";

// node_modules/@base-ui/react/esm/utils/usePopupViewport.js
var React37 = __toESM(require_react(), 1);
var ReactDOM5 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/utils/esm/usePreviousValue.js
var React35 = __toESM(require_react(), 1);
function usePreviousValue(value) {
  const [state, setState] = React35.useState({
    current: value,
    previous: null
  });
  if (value !== state.current) {
    setState({
      current: value,
      previous: state.current
    });
  }
  return state.previous;
}

// node_modules/@base-ui/react/esm/utils/usePopupAutoResize.js
var React36 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/utils/getCssDimensions.js
function getCssDimensions2(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height
  };
}

// node_modules/@base-ui/react/esm/utils/usePopupAutoResize.js
var DEFAULT_ENABLED = () => true;
function usePopupAutoResize(parameters) {
  const {
    popupElement,
    positionerElement,
    content,
    mounted,
    enabled = DEFAULT_ENABLED,
    onMeasureLayout: onMeasureLayoutParam,
    onMeasureLayoutComplete: onMeasureLayoutCompleteParam,
    side,
    direction
  } = parameters;
  const runOnceAnimationsFinish = useAnimationsFinished(popupElement, true, false);
  const animationFrame = useAnimationFrame();
  const committedDimensionsRef = React36.useRef(null);
  const liveDimensionsRef = React36.useRef(null);
  const isInitialRenderRef = React36.useRef(true);
  const restoreAnchoringStylesRef = React36.useRef(NOOP);
  const onMeasureLayout = useStableCallback(onMeasureLayoutParam);
  const onMeasureLayoutComplete = useStableCallback(onMeasureLayoutCompleteParam);
  const anchoringStyles = React36.useMemo(() => {
    let isOriginSide = side === "top";
    let isPhysicalLeft = side === "left";
    if (direction === "rtl") {
      isOriginSide = isOriginSide || side === "inline-end";
      isPhysicalLeft = isPhysicalLeft || side === "inline-end";
    } else {
      isOriginSide = isOriginSide || side === "inline-start";
      isPhysicalLeft = isPhysicalLeft || side === "inline-start";
    }
    return isOriginSide ? {
      position: "absolute",
      [side === "top" ? "bottom" : "top"]: "0",
      [isPhysicalLeft ? "right" : "left"]: "0"
    } : EMPTY_OBJECT;
  }, [side, direction]);
  useIsoLayoutEffect(() => {
    if (!mounted || !enabled() || typeof ResizeObserver !== "function") {
      restoreAnchoringStylesRef.current = NOOP;
      isInitialRenderRef.current = true;
      committedDimensionsRef.current = null;
      liveDimensionsRef.current = null;
      return void 0;
    }
    if (!popupElement || !positionerElement) {
      return void 0;
    }
    restoreAnchoringStylesRef.current = applyElementStyles(popupElement, anchoringStyles);
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        liveDimensionsRef.current = {
          width: Math.ceil(entry.borderBoxSize[0].inlineSize),
          height: Math.ceil(entry.borderBoxSize[0].blockSize)
        };
      }
    });
    observer.observe(popupElement);
    setPopupCssSize(popupElement, "auto");
    const restorePopupPosition = overrideElementStyle(popupElement, "position", "static");
    const restorePopupTransform = overrideElementStyle(popupElement, "transform", "none");
    const restorePopupScale = overrideElementStyle(popupElement, "scale", "1");
    const restorePositionerAvailableSize = applyElementStyles(positionerElement, {
      "--available-width": "max-content",
      "--available-height": "max-content"
    });
    function restoreMeasurementOverrides() {
      restorePopupPosition();
      restorePopupTransform();
      restorePositionerAvailableSize();
    }
    function restoreMeasurementOverridesIncludingScale() {
      restoreMeasurementOverrides();
      restorePopupScale();
    }
    onMeasureLayout?.();
    if (isInitialRenderRef.current || committedDimensionsRef.current === null) {
      setPositionerCssSize(positionerElement, "max-content");
      const dimensions = getCssDimensions2(popupElement);
      committedDimensionsRef.current = dimensions;
      setPositionerCssSize(positionerElement, dimensions);
      restoreMeasurementOverridesIncludingScale();
      onMeasureLayoutComplete?.(null, dimensions);
      isInitialRenderRef.current = false;
      return () => {
        observer.disconnect();
        restoreAnchoringStylesRef.current();
        restoreAnchoringStylesRef.current = NOOP;
      };
    }
    setPopupCssSize(popupElement, "auto");
    setPositionerCssSize(positionerElement, "max-content");
    const previousDimensions = committedDimensionsRef.current ?? liveDimensionsRef.current;
    const newDimensions = getCssDimensions2(popupElement);
    committedDimensionsRef.current = newDimensions;
    if (!previousDimensions) {
      setPositionerCssSize(positionerElement, newDimensions);
      restoreMeasurementOverridesIncludingScale();
      onMeasureLayoutComplete?.(null, newDimensions);
      return () => {
        observer.disconnect();
        animationFrame.cancel();
        restoreAnchoringStylesRef.current();
        restoreAnchoringStylesRef.current = NOOP;
      };
    }
    setPopupCssSize(popupElement, previousDimensions);
    restoreMeasurementOverridesIncludingScale();
    onMeasureLayoutComplete?.(previousDimensions, newDimensions);
    setPositionerCssSize(positionerElement, newDimensions);
    const abortController = new AbortController();
    animationFrame.request(() => {
      setPopupCssSize(popupElement, newDimensions);
      runOnceAnimationsFinish(() => {
        popupElement.style.setProperty("--popup-width", "auto");
        popupElement.style.setProperty("--popup-height", "auto");
      }, abortController.signal);
    });
    return () => {
      observer.disconnect();
      abortController.abort();
      animationFrame.cancel();
      restoreAnchoringStylesRef.current();
      restoreAnchoringStylesRef.current = NOOP;
    };
  }, [content, popupElement, positionerElement, runOnceAnimationsFinish, animationFrame, enabled, mounted, onMeasureLayout, onMeasureLayoutComplete, anchoringStyles]);
}
function overrideElementStyle(element, property, value) {
  const originalValue = element.style.getPropertyValue(property);
  element.style.setProperty(property, value);
  return () => {
    element.style.setProperty(property, originalValue);
  };
}
function applyElementStyles(element, styles) {
  const restorers = [];
  for (const [key2, value] of Object.entries(styles)) {
    restorers.push(overrideElementStyle(element, key2, value));
  }
  return restorers.length ? () => {
    restorers.forEach((restore) => restore());
  } : NOOP;
}
function setPopupCssSize(popupElement, size4) {
  const width = size4 === "auto" ? "auto" : `${size4.width}px`;
  const height = size4 === "auto" ? "auto" : `${size4.height}px`;
  popupElement.style.setProperty("--popup-width", width);
  popupElement.style.setProperty("--popup-height", height);
}
function setPositionerCssSize(positionerElement, size4) {
  const width = size4 === "max-content" ? "max-content" : `${size4.width}px`;
  const height = size4 === "max-content" ? "max-content" : `${size4.height}px`;
  positionerElement.style.setProperty("--positioner-width", width);
  positionerElement.style.setProperty("--positioner-height", height);
}

// node_modules/@base-ui/react/esm/utils/usePopupViewport.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function usePopupViewport(parameters) {
  const {
    store,
    side,
    cssVars,
    children
  } = parameters;
  const direction = useDirection();
  const activeTrigger = store.useState("activeTriggerElement");
  const activeTriggerId = store.useState("activeTriggerId");
  const open = store.useState("open");
  const payload = store.useState("payload");
  const mounted = store.useState("mounted");
  const popupElement = store.useState("popupElement");
  const positionerElement = store.useState("positionerElement");
  const previousActiveTrigger = usePreviousValue(open ? activeTrigger : null);
  const currentContentKey = usePopupContentKey(activeTriggerId, payload);
  const capturedNodeRef = React37.useRef(null);
  const [previousContentNode, setPreviousContentNode] = React37.useState(null);
  const [newTriggerOffset, setNewTriggerOffset] = React37.useState(null);
  const currentContainerRef = React37.useRef(null);
  const previousContainerRef = React37.useRef(null);
  const onAnimationsFinished = useAnimationsFinished(currentContainerRef, true, false);
  const cleanupFrame = useAnimationFrame();
  const [previousContentDimensions, setPreviousContentDimensions] = React37.useState(null);
  const [showStartingStyleAttribute, setShowStartingStyleAttribute] = React37.useState(false);
  useIsoLayoutEffect(() => {
    store.set("hasViewport", true);
    return () => {
      store.set("hasViewport", false);
    };
  }, [store]);
  const handleMeasureLayout = useStableCallback(() => {
    currentContainerRef.current?.style.setProperty("animation", "none");
    currentContainerRef.current?.style.setProperty("transition", "none");
    previousContainerRef.current?.style.setProperty("display", "none");
  });
  const handleMeasureLayoutComplete = useStableCallback((previousDimensions) => {
    currentContainerRef.current?.style.removeProperty("animation");
    currentContainerRef.current?.style.removeProperty("transition");
    previousContainerRef.current?.style.removeProperty("display");
    if (previousDimensions) {
      setPreviousContentDimensions(previousDimensions);
    }
  });
  const lastHandledTriggerRef = React37.useRef(null);
  useIsoLayoutEffect(() => {
    if (activeTrigger && previousActiveTrigger && activeTrigger !== previousActiveTrigger && lastHandledTriggerRef.current !== activeTrigger && capturedNodeRef.current) {
      setPreviousContentNode(capturedNodeRef.current);
      setShowStartingStyleAttribute(true);
      const offset4 = calculateRelativePosition(previousActiveTrigger, activeTrigger);
      setNewTriggerOffset(offset4);
      cleanupFrame.request(() => {
        ReactDOM5.flushSync(() => {
          setShowStartingStyleAttribute(false);
        });
        onAnimationsFinished(() => {
          setPreviousContentNode(null);
          setPreviousContentDimensions(null);
          capturedNodeRef.current = null;
        });
      });
      lastHandledTriggerRef.current = activeTrigger;
    }
  }, [activeTrigger, previousActiveTrigger, previousContentNode, onAnimationsFinished, cleanupFrame]);
  useIsoLayoutEffect(() => {
    const source = currentContainerRef.current;
    if (!source) {
      return;
    }
    const wrapper = ownerDocument(source).createElement("div");
    for (const child of Array.from(source.childNodes)) {
      wrapper.appendChild(child.cloneNode(true));
    }
    capturedNodeRef.current = wrapper;
  });
  const isTransitioning = previousContentNode != null;
  let childrenToRender;
  if (!isTransitioning) {
    childrenToRender = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
      "data-current": true,
      ref: currentContainerRef,
      children
    }, currentContentKey);
  } else {
    childrenToRender = /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(React37.Fragment, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
        "data-previous": true,
        inert: inertValue(true),
        ref: previousContainerRef,
        style: {
          ...previousContentDimensions ? {
            [cssVars.popupWidth]: `${previousContentDimensions.width}px`,
            [cssVars.popupHeight]: `${previousContentDimensions.height}px`
          } : null,
          position: "absolute"
        },
        "data-ending-style": showStartingStyleAttribute ? void 0 : ""
      }, "previous"), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
        "data-current": true,
        ref: currentContainerRef,
        "data-starting-style": showStartingStyleAttribute ? "" : void 0,
        children
      }, currentContentKey)]
    });
  }
  useIsoLayoutEffect(() => {
    const container = previousContainerRef.current;
    if (!container || !previousContentNode) {
      return;
    }
    container.replaceChildren(...Array.from(previousContentNode.childNodes));
  }, [previousContentNode]);
  usePopupAutoResize({
    popupElement,
    positionerElement,
    mounted,
    content: payload,
    onMeasureLayout: handleMeasureLayout,
    onMeasureLayoutComplete: handleMeasureLayoutComplete,
    side,
    direction
  });
  const state = {
    activationDirection: getActivationDirection(newTriggerOffset),
    transitioning: isTransitioning
  };
  return {
    children: childrenToRender,
    state
  };
}
function getActivationDirection(offset4) {
  if (!offset4) {
    return void 0;
  }
  return `${getValueWithTolerance(offset4.horizontal, 5, "right", "left")} ${getValueWithTolerance(offset4.vertical, 5, "down", "up")}`;
}
function getValueWithTolerance(value, tolerance, positiveLabel, negativeLabel) {
  if (value > tolerance) {
    return positiveLabel;
  }
  if (value < -tolerance) {
    return negativeLabel;
  }
  return "";
}
function calculateRelativePosition(from, to) {
  const fromRect = from.getBoundingClientRect();
  const toRect = to.getBoundingClientRect();
  const fromCenter = {
    x: fromRect.left + fromRect.width / 2,
    y: fromRect.top + fromRect.height / 2
  };
  const toCenter = {
    x: toRect.left + toRect.width / 2,
    y: toRect.top + toRect.height / 2
  };
  return {
    horizontal: toCenter.x - fromCenter.x,
    vertical: toCenter.y - fromCenter.y
  };
}
function usePopupContentKey(activeTriggerId, payload) {
  const [contentKey, setContentKey] = React37.useState(0);
  const previousActiveTriggerIdRef = React37.useRef(activeTriggerId);
  const previousPayloadRef = React37.useRef(payload);
  const pendingPayloadUpdateRef = React37.useRef(false);
  useIsoLayoutEffect(() => {
    const previousActiveTriggerId = previousActiveTriggerIdRef.current;
    const previousPayload = previousPayloadRef.current;
    const triggerIdChanged = activeTriggerId !== previousActiveTriggerId;
    const payloadChanged = payload !== previousPayload;
    if (triggerIdChanged) {
      setContentKey((value) => value + 1);
      pendingPayloadUpdateRef.current = !payloadChanged;
    } else if (pendingPayloadUpdateRef.current && payloadChanged) {
      setContentKey((value) => value + 1);
      pendingPayloadUpdateRef.current = false;
    }
    previousActiveTriggerIdRef.current = activeTriggerId;
    previousPayloadRef.current = payload;
  }, [activeTriggerId, payload]);
  return `${activeTriggerId ?? "current"}-${contentKey}`;
}

// node_modules/@base-ui/react/esm/utils/FloatingPortalLite.js
var React38 = __toESM(require_react(), 1);
var ReactDOM6 = __toESM(require_react_dom(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var FloatingPortalLite = /* @__PURE__ */ React38.forwardRef(function FloatingPortalLite2(componentProps, forwardedRef) {
  const {
    children,
    container,
    className,
    render,
    style,
    ...elementProps
  } = componentProps;
  const {
    portalNode,
    portalSubtree
  } = useFloatingPortalNode({
    container,
    ref: forwardedRef,
    componentProps,
    elementProps
  });
  if (!portalSubtree && !portalNode) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(React38.Fragment, {
    children: [portalSubtree, portalNode && /* @__PURE__ */ ReactDOM6.createPortal(children, portalNode)]
  });
});
if (true) FloatingPortalLite.displayName = "FloatingPortalLite";

// node_modules/@base-ui/react/esm/tooltip/index.parts.js
var index_parts_exports = {};
__export(index_parts_exports, {
  Arrow: () => TooltipArrow,
  Handle: () => TooltipHandle,
  Popup: () => TooltipPopup,
  Portal: () => TooltipPortal,
  Positioner: () => TooltipPositioner,
  Provider: () => TooltipProvider,
  Root: () => TooltipRoot,
  Trigger: () => TooltipTrigger,
  Viewport: () => TooltipViewport,
  createHandle: () => createTooltipHandle
});

// node_modules/@base-ui/react/esm/tooltip/root/TooltipRoot.js
var React41 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/tooltip/root/TooltipRootContext.js
var React39 = __toESM(require_react(), 1);
var TooltipRootContext = /* @__PURE__ */ React39.createContext(void 0);
if (true) TooltipRootContext.displayName = "TooltipRootContext";
function useTooltipRootContext(optional) {
  const context = React39.useContext(TooltipRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>." : formatErrorMessage_default(72));
  }
  return context;
}

// node_modules/@base-ui/react/esm/tooltip/store/TooltipStore.js
var React40 = __toESM(require_react(), 1);
var ReactDOM7 = __toESM(require_react_dom(), 1);
var selectors2 = {
  ...popupStoreSelectors,
  disabled: createSelector((state) => state.disabled),
  instantType: createSelector((state) => state.instantType),
  isInstantPhase: createSelector((state) => state.isInstantPhase),
  trackCursorAxis: createSelector((state) => state.trackCursorAxis),
  disableHoverablePopup: createSelector((state) => state.disableHoverablePopup),
  lastOpenChangeReason: createSelector((state) => state.openChangeReason),
  closeOnClick: createSelector((state) => state.closeOnClick),
  closeDelay: createSelector((state) => state.closeDelay),
  hasViewport: createSelector((state) => state.hasViewport)
};
var TooltipStore = class _TooltipStore extends ReactStore {
  constructor(initialState) {
    super({
      ...createInitialState(),
      ...initialState
    }, {
      popupRef: /* @__PURE__ */ React40.createRef(),
      onOpenChange: void 0,
      onOpenChangeComplete: void 0,
      triggerElements: new PopupTriggerMap()
    }, selectors2);
  }
  setOpen = (nextOpen, eventDetails) => {
    const reason = eventDetails.reason;
    const isHover = reason === reason_parts_exports.triggerHover;
    const isFocusOpen = nextOpen && reason === reason_parts_exports.triggerFocus;
    const isDismissClose = !nextOpen && (reason === reason_parts_exports.triggerPress || reason === reason_parts_exports.escapeKey);
    eventDetails.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", true);
    };
    this.context.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
    const changeState = () => {
      const updatedState = {
        open: nextOpen,
        openChangeReason: reason
      };
      if (isFocusOpen) {
        updatedState.instantType = "focus";
      } else if (isDismissClose) {
        updatedState.instantType = "dismiss";
      } else if (reason === reason_parts_exports.triggerHover) {
        updatedState.instantType = void 0;
      }
      const newTriggerId = eventDetails.trigger?.id ?? null;
      if (newTriggerId || nextOpen) {
        updatedState.activeTriggerId = newTriggerId;
        updatedState.activeTriggerElement = eventDetails.trigger ?? null;
      }
      this.update(updatedState);
    };
    if (isHover) {
      ReactDOM7.flushSync(changeState);
    } else {
      changeState();
    }
  };
  static useStore(externalStore, initialState) {
    const internalStore = useRefWithInit(() => {
      return new _TooltipStore(initialState);
    }).current;
    const store = externalStore ?? internalStore;
    const floatingRootContext = useSyncedFloatingRootContext({
      popupStore: store,
      onOpenChange: store.setOpen
    });
    store.state.floatingRootContext = floatingRootContext;
    return store;
  }
};
function createInitialState() {
  return {
    ...createInitialPopupStoreState(),
    disabled: false,
    instantType: void 0,
    isInstantPhase: false,
    trackCursorAxis: "none",
    disableHoverablePopup: false,
    openChangeReason: null,
    closeOnClick: true,
    closeDelay: 0,
    hasViewport: false
  };
}

// node_modules/@base-ui/react/esm/tooltip/root/TooltipRoot.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var TooltipRoot = fastComponent(function TooltipRoot2(props) {
  const {
    disabled: disabled2 = false,
    defaultOpen = false,
    open: openProp,
    disableHoverablePopup = false,
    trackCursorAxis = "none",
    actionsRef,
    onOpenChange,
    onOpenChangeComplete,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null,
    children
  } = props;
  const store = TooltipStore.useStore(handle?.store, {
    open: defaultOpen,
    openProp,
    activeTriggerId: defaultTriggerIdProp,
    triggerIdProp
  });
  useOnFirstRender(() => {
    if (openProp === void 0 && store.state.open === false && defaultOpen === true) {
      store.update({
        open: true,
        activeTriggerId: defaultTriggerIdProp
      });
    }
  });
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  store.useContextCallback("onOpenChange", onOpenChange);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  const openState = store.useState("open");
  const open = !disabled2 && openState;
  const activeTriggerId = store.useState("activeTriggerId");
  const payload = store.useState("payload");
  store.useSyncedValues({
    trackCursorAxis,
    disableHoverablePopup
  });
  useIsoLayoutEffect(() => {
    if (openState && disabled2) {
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.disabled));
    }
  }, [openState, disabled2, store]);
  store.useSyncedValue("disabled", disabled2);
  useImplicitActiveTrigger(store);
  const {
    forceUnmount,
    transitionStatus
  } = useOpenStateTransitions(open, store);
  const floatingRootContext = store.select("floatingRootContext");
  const isInstantPhase = store.useState("isInstantPhase");
  const instantType = store.useState("instantType");
  const lastOpenChangeReason = store.useState("lastOpenChangeReason");
  const previousInstantTypeRef = React41.useRef(null);
  useIsoLayoutEffect(() => {
    if (transitionStatus === "ending" && lastOpenChangeReason === reason_parts_exports.none || transitionStatus !== "ending" && isInstantPhase) {
      if (instantType !== "delay") {
        previousInstantTypeRef.current = instantType;
      }
      store.set("instantType", "delay");
    } else if (previousInstantTypeRef.current !== null) {
      store.set("instantType", previousInstantTypeRef.current);
      previousInstantTypeRef.current = null;
    }
  }, [transitionStatus, isInstantPhase, lastOpenChangeReason, instantType, store]);
  useIsoLayoutEffect(() => {
    if (open) {
      if (activeTriggerId == null) {
        store.set("payload", void 0);
      }
    }
  }, [store, activeTriggerId, open]);
  const handleImperativeClose = React41.useCallback(() => {
    store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction));
  }, [store]);
  React41.useImperativeHandle(actionsRef, () => ({
    unmount: forceUnmount,
    close: handleImperativeClose
  }), [forceUnmount, handleImperativeClose]);
  const dismiss = useDismiss(floatingRootContext, {
    enabled: !disabled2,
    referencePress: () => store.select("closeOnClick")
  });
  const clientPoint = useClientPoint(floatingRootContext, {
    enabled: !disabled2 && trackCursorAxis !== "none",
    axis: trackCursorAxis === "none" ? void 0 : trackCursorAxis
  });
  const {
    getReferenceProps,
    getFloatingProps,
    getTriggerProps
  } = useInteractions([dismiss, clientPoint]);
  const activeTriggerProps = React41.useMemo(() => getReferenceProps(), [getReferenceProps]);
  const inactiveTriggerProps = React41.useMemo(() => getTriggerProps(), [getTriggerProps]);
  const popupProps = React41.useMemo(() => getFloatingProps(), [getFloatingProps]);
  store.useSyncedValues({
    activeTriggerProps,
    inactiveTriggerProps,
    popupProps
  });
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TooltipRootContext.Provider, {
    value: store,
    children: typeof children === "function" ? children({
      payload
    }) : children
  });
});
if (true) TooltipRoot.displayName = "TooltipRoot";

// node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTrigger.js
var React43 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/tooltip/provider/TooltipProviderContext.js
var React42 = __toESM(require_react(), 1);
var TooltipProviderContext = /* @__PURE__ */ React42.createContext(void 0);
if (true) TooltipProviderContext.displayName = "TooltipProviderContext";
function useTooltipProviderContext() {
  return React42.useContext(TooltipProviderContext);
}

// node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTriggerDataAttributes.js
var TooltipTriggerDataAttributes = (function(TooltipTriggerDataAttributes2) {
  TooltipTriggerDataAttributes2[TooltipTriggerDataAttributes2["popupOpen"] = CommonTriggerDataAttributes.popupOpen] = "popupOpen";
  TooltipTriggerDataAttributes2["triggerDisabled"] = "data-trigger-disabled";
  return TooltipTriggerDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/tooltip/utils/constants.js
var OPEN_DELAY = 600;

// node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTrigger.js
var TooltipTrigger = fastComponentRef(function TooltipTrigger2(componentProps, forwardedRef) {
  const {
    className,
    render,
    handle,
    payload,
    disabled: disabledProp,
    delay,
    closeOnClick = true,
    closeDelay,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;
  const rootContext = useTooltipRootContext(true);
  const store = handle?.store ?? rootContext;
  if (!store) {
    throw new Error(true ? "Base UI: <Tooltip.Trigger> must be either used within a <Tooltip.Root> component or provided with a handle." : formatErrorMessage_default(82));
  }
  const thisTriggerId = useBaseUiId(idProp);
  const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
  const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
  const floatingRootContext = store.useState("floatingRootContext");
  const triggerElementRef = React43.useRef(null);
  const delayWithDefault = delay ?? OPEN_DELAY;
  const closeDelayWithDefault = closeDelay ?? 0;
  const {
    registerTrigger,
    isMountedByThisTrigger
  } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
    payload,
    closeOnClick,
    closeDelay: closeDelayWithDefault
  });
  const providerContext = useTooltipProviderContext();
  const {
    delayRef,
    isInstantPhase,
    hasProvider
  } = useDelayGroup(floatingRootContext, {
    open: isOpenedByThisTrigger
  });
  store.useSyncedValue("isInstantPhase", isInstantPhase);
  const rootDisabled = store.useState("disabled");
  const disabled2 = disabledProp ?? rootDisabled;
  const trackCursorAxis = store.useState("trackCursorAxis");
  const disableHoverablePopup = store.useState("disableHoverablePopup");
  const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
    enabled: !disabled2,
    mouseOnly: true,
    move: false,
    handleClose: !disableHoverablePopup && trackCursorAxis !== "both" ? safePolygon() : null,
    restMs() {
      const providerDelay = providerContext?.delay;
      const groupOpenValue = typeof delayRef.current === "object" ? delayRef.current.open : void 0;
      let computedRestMs = delayWithDefault;
      if (hasProvider) {
        if (groupOpenValue !== 0) {
          computedRestMs = delay ?? providerDelay ?? delayWithDefault;
        } else {
          computedRestMs = 0;
        }
      }
      return computedRestMs;
    },
    delay() {
      const closeValue = typeof delayRef.current === "object" ? delayRef.current.close : void 0;
      let computedCloseDelay = closeDelayWithDefault;
      if (closeDelay == null && hasProvider) {
        computedCloseDelay = closeValue;
      }
      return {
        close: computedCloseDelay
      };
    },
    triggerElementRef,
    isActiveTrigger: isTriggerActive,
    isClosing: () => store.select("transitionStatus") === "ending"
  });
  const focusProps = useFocus(floatingRootContext, {
    enabled: !disabled2
  }).reference;
  const state = {
    open: isOpenedByThisTrigger
  };
  const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
  const element = useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, registerTrigger, triggerElementRef],
    props: [hoverProps, focusProps, rootTriggerProps, {
      onPointerDown() {
        store.set("closeOnClick", closeOnClick);
      },
      id: thisTriggerId,
      [TooltipTriggerDataAttributes.triggerDisabled]: disabled2 ? "" : void 0
    }, elementProps],
    stateAttributesMapping: triggerOpenStateMapping
  });
  return element;
});
if (true) TooltipTrigger.displayName = "TooltipTrigger";

// node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortal.js
var React45 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortalContext.js
var React44 = __toESM(require_react(), 1);
var TooltipPortalContext = /* @__PURE__ */ React44.createContext(void 0);
if (true) TooltipPortalContext.displayName = "TooltipPortalContext";
function useTooltipPortalContext() {
  const value = React44.useContext(TooltipPortalContext);
  if (value === void 0) {
    throw new Error(true ? "Base UI: <Tooltip.Portal> is missing." : formatErrorMessage_default(70));
  }
  return value;
}

// node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortal.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var TooltipPortal = /* @__PURE__ */ React45.forwardRef(function TooltipPortal2(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const store = useTooltipRootContext();
  const mounted = store.useState("mounted");
  const shouldRender = mounted || keepMounted;
  if (!shouldRender) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TooltipPortalContext.Provider, {
    value: keepMounted,
    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FloatingPortalLite, {
      ref: forwardedRef,
      ...portalProps
    })
  });
});
if (true) TooltipPortal.displayName = "TooltipPortal";

// node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositioner.js
var React47 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositionerContext.js
var React46 = __toESM(require_react(), 1);
var TooltipPositionerContext = /* @__PURE__ */ React46.createContext(void 0);
if (true) TooltipPositionerContext.displayName = "TooltipPositionerContext";
function useTooltipPositionerContext() {
  const context = React46.useContext(TooltipPositionerContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>." : formatErrorMessage_default(71));
  }
  return context;
}

// node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositioner.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var TooltipPositioner = /* @__PURE__ */ React47.forwardRef(function TooltipPositioner2(componentProps, forwardedRef) {
  const {
    render,
    className,
    anchor,
    positionMethod = "absolute",
    side = "top",
    align = "center",
    sideOffset = 0,
    alignOffset = 0,
    collisionBoundary = "clipping-ancestors",
    collisionPadding = 5,
    arrowPadding = 5,
    sticky = false,
    disableAnchorTracking = false,
    collisionAvoidance = POPUP_COLLISION_AVOIDANCE,
    style,
    ...elementProps
  } = componentProps;
  const store = useTooltipRootContext();
  const keepMounted = useTooltipPortalContext();
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const trackCursorAxis = store.useState("trackCursorAxis");
  const disableHoverablePopup = store.useState("disableHoverablePopup");
  const floatingRootContext = store.useState("floatingRootContext");
  const instantType = store.useState("instantType");
  const transitionStatus = store.useState("transitionStatus");
  const hasViewport = store.useState("hasViewport");
  const positioning = useAnchorPositioning({
    anchor,
    positionMethod,
    floatingRootContext,
    mounted,
    side,
    sideOffset,
    align,
    alignOffset,
    collisionBoundary,
    collisionPadding,
    sticky,
    arrowPadding,
    disableAnchorTracking,
    keepMounted,
    collisionAvoidance,
    adaptiveOrigin: hasViewport ? adaptiveOrigin : void 0
  });
  const state = React47.useMemo(() => ({
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    instant: trackCursorAxis !== "none" ? "tracking-cursor" : instantType
  }), [open, positioning.side, positioning.align, positioning.anchorHidden, trackCursorAxis, instantType]);
  const element = usePositioner(componentProps, state, {
    styles: positioning.positionerStyles,
    transitionStatus,
    props: elementProps,
    refs: [forwardedRef, store.useStateSetter("positionerElement")],
    hidden: !mounted,
    inert: !open || trackCursorAxis === "both" || disableHoverablePopup
  });
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TooltipPositionerContext.Provider, {
    value: positioning,
    children: element
  });
});
if (true) TooltipPositioner.displayName = "TooltipPositioner";

// node_modules/@base-ui/react/esm/tooltip/popup/TooltipPopup.js
var React48 = __toESM(require_react(), 1);
var stateAttributesMapping = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var TooltipPopup = /* @__PURE__ */ React48.forwardRef(function TooltipPopup2(componentProps, forwardedRef) {
  const {
    className,
    render,
    style,
    ...elementProps
  } = componentProps;
  const store = useTooltipRootContext();
  const {
    side,
    align
  } = useTooltipPositionerContext();
  const open = store.useState("open");
  const instantType = store.useState("instantType");
  const transitionStatus = store.useState("transitionStatus");
  const popupProps = store.useState("popupProps");
  const floatingContext = store.useState("floatingRootContext");
  useOpenChangeComplete({
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (open) {
        store.context.onOpenChangeComplete?.(true);
      }
    }
  });
  const disabled2 = store.useState("disabled");
  const closeDelay = store.useState("closeDelay");
  useHoverFloatingInteraction(floatingContext, {
    enabled: !disabled2,
    closeDelay
  });
  const state = {
    open,
    side,
    align,
    instant: instantType,
    transitionStatus
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, store.context.popupRef, store.useStateSetter("popupElement")],
    props: [popupProps, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    stateAttributesMapping
  });
  return element;
});
if (true) TooltipPopup.displayName = "TooltipPopup";

// node_modules/@base-ui/react/esm/tooltip/arrow/TooltipArrow.js
var React49 = __toESM(require_react(), 1);
var TooltipArrow = /* @__PURE__ */ React49.forwardRef(function TooltipArrow2(componentProps, forwardedRef) {
  const {
    className,
    render,
    style,
    ...elementProps
  } = componentProps;
  const store = useTooltipRootContext();
  const open = store.useState("open");
  const instantType = store.useState("instantType");
  const {
    arrowRef,
    side,
    align,
    arrowUncentered,
    arrowStyles
  } = useTooltipPositionerContext();
  const state = {
    open,
    side,
    align,
    uncentered: arrowUncentered,
    instant: instantType
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, arrowRef],
    props: [{
      style: arrowStyles,
      "aria-hidden": true
    }, elementProps],
    stateAttributesMapping: popupStateMapping
  });
  return element;
});
if (true) TooltipArrow.displayName = "TooltipArrow";

// node_modules/@base-ui/react/esm/tooltip/provider/TooltipProvider.js
var React50 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var TooltipProvider = function TooltipProvider2(props) {
  const {
    delay,
    closeDelay,
    timeout = 400
  } = props;
  const contextValue = React50.useMemo(() => ({
    delay,
    closeDelay
  }), [delay, closeDelay]);
  const delayValue = React50.useMemo(() => ({
    open: delay,
    close: closeDelay
  }), [delay, closeDelay]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TooltipProviderContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FloatingDelayGroup, {
      delay: delayValue,
      timeoutMs: timeout,
      children: props.children
    })
  });
};
if (true) TooltipProvider.displayName = "TooltipProvider";

// node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewport.js
var React51 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewportCssVars.js
var TooltipViewportCssVars = /* @__PURE__ */ (function(TooltipViewportCssVars2) {
  TooltipViewportCssVars2["popupWidth"] = "--popup-width";
  TooltipViewportCssVars2["popupHeight"] = "--popup-height";
  return TooltipViewportCssVars2;
})({});

// node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewport.js
var stateAttributesMapping2 = {
  activationDirection: (value) => value ? {
    "data-activation-direction": value
  } : null
};
var TooltipViewport = /* @__PURE__ */ React51.forwardRef(function TooltipViewport2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    children,
    ...elementProps
  } = componentProps;
  const store = useTooltipRootContext();
  const positioner = useTooltipPositionerContext();
  const instantType = store.useState("instantType");
  const {
    children: childrenToRender,
    state: viewportState
  } = usePopupViewport({
    store,
    side: positioner.side,
    cssVars: TooltipViewportCssVars,
    children
  });
  const state = {
    activationDirection: viewportState.activationDirection,
    transitioning: viewportState.transitioning,
    instant: instantType
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [elementProps, {
      children: childrenToRender
    }],
    stateAttributesMapping: stateAttributesMapping2
  });
});
if (true) TooltipViewport.displayName = "TooltipViewport";

// node_modules/@base-ui/react/esm/tooltip/store/TooltipHandle.js
var TooltipHandle = class {
  /**
   * Internal store holding the tooltip state.
   * @internal
   */
  constructor() {
    this.store = new TooltipStore();
  }
  /**
   * Opens the tooltip and associates it with the trigger with the given ID.
   * The trigger must be a Tooltip.Trigger component with this handle passed as a prop.
   *
   * This method should only be called in an event handler or an effect (not during rendering).
   *
   * @param triggerId ID of the trigger to associate with the tooltip.
   */
  open(triggerId) {
    const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : void 0;
    if (triggerId && !triggerElement) {
      throw new Error(true ? `Base UI: TooltipHandle.open: No trigger found with id "${triggerId}".` : formatErrorMessage_default(81, triggerId));
    }
    this.store.setOpen(true, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, triggerElement));
  }
  /**
   * Closes the tooltip.
   */
  close() {
    this.store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, void 0));
  }
  /**
   * Indicates whether the tooltip is currently open.
   */
  get isOpen() {
    return this.store.state.open;
  }
};
function createTooltipHandle() {
  return new TooltipHandle();
}

// node_modules/@base-ui/react/esm/use-render/useRender.js
function useRender(params) {
  return useRenderElement(params.defaultTagName ?? "div", params, params);
}

// packages/ui/build-module/text/text.mjs
var import_element8 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='4130d64bea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "4130d64bea");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._83ed8a8da5dd50ea__text{margin:0}._14437cfb77831647__heading-2xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-2xl,32px);font-size:var(--wpds-typography-font-size-2xl,32px);line-height:var(--wpds-typography-line-height-2xl,40px)}._14437cfb77831647__heading-2xl,._3c78b7fa9b4072dd__heading-xl{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-medium,499)}._3c78b7fa9b4072dd__heading-xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-xl,20px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-md,24px)}.aa58f227716bcde2__heading-lg{--_gcd-heading-font-size:var(--wpds-typography-font-size-lg,15px);font-size:var(--wpds-typography-font-size-lg,15px)}.aa58f227716bcde2__heading-lg,.fc4da56d8dfe52c4__heading-md{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-medium,499);line-height:var(--wpds-typography-line-height-sm,20px)}.fc4da56d8dfe52c4__heading-md{--_gcd-heading-font-size:var(--wpds-typography-font-size-md,13px);font-size:var(--wpds-typography-font-size-md,13px)}.a9b78c7c82e8dff7__heading-sm{--_gcd-heading-font-size:var(--wpds-typography-font-size-xs,11px);font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-medium,499);line-height:var(--wpds-typography-line-height-xs,16px);text-transform:uppercase}._305ff559e52180d5__body-xl{--_gcd-p-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-p-line-height:var(--wpds-typography-line-height-xl,32px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-xl,32px)}._305ff559e52180d5__body-xl,.ca1aa3fc2029e958__body-lg{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-regular,400)}.ca1aa3fc2029e958__body-lg{--_gcd-p-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-p-line-height:var(--wpds-typography-line-height-md,24px);font-size:var(--wpds-typography-font-size-lg,15px);line-height:var(--wpds-typography-line-height-md,24px)}._131101940be12424__body-md{--_gcd-p-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px)}._0e8d87a42c1f75fa__body-sm,._131101940be12424__body-md{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-regular,400)}._0e8d87a42c1f75fa__body-sm{--_gcd-p-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);font-size:var(--wpds-typography-font-size-sm,12px);line-height:var(--wpds-typography-line-height-xs,16px)}}'));
  document.head.appendChild(style);
}
var style_default = { "text": "_83ed8a8da5dd50ea__text", "heading-2xl": "_14437cfb77831647__heading-2xl", "heading-xl": "_3c78b7fa9b4072dd__heading-xl", "heading-lg": "aa58f227716bcde2__heading-lg", "heading-md": "fc4da56d8dfe52c4__heading-md", "heading-sm": "a9b78c7c82e8dff7__heading-sm", "body-xl": "_305ff559e52180d5__body-xl", "body-lg": "ca1aa3fc2029e958__body-lg", "body-md": "_131101940be12424__body-md", "body-sm": "_0e8d87a42c1f75fa__body-sm" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='1fb29d3a3c']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "1fb29d3a3c");
  style.appendChild(document.createTextNode("._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,#0000);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 #0000);color:var(--_gcd-input-color,var(--wpds-color-fg-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,#0000);border-color:var(--_gcd-input-border-color-disabled,#0000);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid #0000)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-fg-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-medium,499));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid #0000);transition:var(--_gcd-a-transition,none)}"));
  document.head.appendChild(style);
}
var global_css_defense_default = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a" };
var Text = (0, import_element8.forwardRef)(function Text2({ variant = "body-md", render, className, ...props }, ref) {
  const element = useRender({
    render,
    defaultTagName: "span",
    ref,
    props: mergeProps(props, {
      className: clsx_default(
        style_default.text,
        global_css_defense_default.heading,
        global_css_defense_default.p,
        style_default[variant],
        className
      )
    })
  });
  return element;
});

// packages/ui/build-module/button/button.mjs
var import_element9 = __toESM(require_element(), 1);
var import_i18n = __toESM(require_i18n(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
import { speak } from "@wordpress/a11y";
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='26d90ece4e']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "26d90ece4e");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._97b0fc33c028be1a__button,.abbb272e2ce49bd6__is-unstyled{appearance:none;padding:0}._97b0fc33c028be1a__button{--wp-ui-button-font-weight:499;--wp-ui-button-background-color:var(--wpds-color-bg-interactive-brand-strong,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-brand-strong-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 93%,#000));--wp-ui-button-background-color-disabled:var(--wpds-color-bg-interactive-neutral-strong-disabled,#e6e6e6);--wp-ui-button-foreground-color:var(--wpds-color-fg-interactive-brand-strong,#fff);--wp-ui-button-foreground-color-active:var(--wpds-color-fg-interactive-brand-strong-active,#fff);--wp-ui-button-foreground-color-disabled:var(--wpds-color-fg-interactive-neutral-strong-disabled,#8d8d8d);--wp-ui-button-padding-inline:var(--wpds-dimension-padding-md,12px);--wp-ui-button-height:40px;--wp-ui-button-aspect-ratio:auto;--wp-ui-button-font-size:var(--wpds-typography-font-size-md,13px);--wp-ui-button-min-width:calc(4ch + var(--wp-ui-button-padding-inline)*2);--wp-ui-button-border-color:var(--wp-ui-button-background-color);--wp-ui-button-border-color-active:var(--wp-ui-button-background-color-active);--wp-ui-button-border-color-disabled:var(--wp-ui-button-background-color-disabled);--_gcd-button-font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);--_gcd-button-font-size:var(--wp-ui-button-font-size);--_gcd-button-font-weight:var(--wp-ui-button-font-weight);align-items:center;aspect-ratio:var(--wp-ui-button-aspect-ratio);background-clip:padding-box;background-color:var(--wp-ui-button-background-color);border-color:var(--wp-ui-button-border-color);border-radius:var(--wpds-border-radius-sm,2px);border-style:solid;border-width:1px;color:var(--wp-ui-button-foreground-color);cursor:var(--wpds-cursor-control,pointer);display:inline-flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wp-ui-button-font-size);font-weight:var(--wp-ui-button-font-weight);gap:var(--wpds-dimension-gap-sm,8px);height:var(--wp-ui-button-height);justify-content:center;line-height:var(--wpds-typography-line-height-sm,20px);min-width:var(--wp-ui-button-min-width);padding-inline:var(--wp-ui-button-padding-inline);position:relative;text-decoration:none;@media not (prefers-reduced-motion){transition:color .1s ease-out;*{transition:opacity .1s ease-out}}&[href]{cursor:pointer}[href]{color:inherit;text-decoration:inherit}&:not([data-disabled]):is(:hover,:active,:focus){background-color:var(--wp-ui-button-background-color-active);border-color:var(--wp-ui-button-border-color-active);color:var(--wp-ui-button-foreground-color-active)}&[data-disabled]:not(._914b42f315c0e580__is-loading){background-color:var(--wp-ui-button-background-color-disabled);border-color:var(--wp-ui-button-border-color-disabled);color:var(--wp-ui-button-foreground-color-disabled);@media (forced-colors:active){border-bottom-color:GrayText;border-left-color:GrayText;border-right-color:GrayText;border-top-color:GrayText;color:GrayText}}&:before{aspect-ratio:1;border:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid;border-block-end-color:#0000;border-block-start-color:var(--wp-ui-button-foreground-color);border-inline-end-color:var(--wp-ui-button-foreground-color);border-inline-start-color:#0000;border-radius:50%;box-sizing:border-box;content:"";display:block;height:var(--wp-ui-button-font-size);inset-inline-start:50%;opacity:0;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);@media not (prefers-reduced-motion){transition:opacity .1s ease-out}}}._908205475f9f2a92__is-small{--wp-ui-button-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-button-height:24px}.dd460c965226cc77__is-brand{&._62d5a778b7b258ee__is-outline,&.ad0619a3217c6a5b__is-minimal{--wp-ui-button-foreground-color:var(--wpds-color-fg-interactive-brand,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-foreground-color-active:var(--wpds-color-fg-interactive-brand-active,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-foreground-color-disabled:var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d)}&._62d5a778b7b258ee__is-outline{--wp-ui-button-background-color:var(--wpds-color-bg-interactive-brand-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));--wp-ui-button-background-color-disabled:var(--wpds-color-bg-interactive-neutral-weak-disabled,#0000);--wp-ui-button-border-color:var(--wpds-color-stroke-interactive-brand,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-border-color-active:var(--wpds-color-stroke-interactive-brand-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 85%,#000));--wp-ui-button-border-color-disabled:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}&.ad0619a3217c6a5b__is-minimal{--wp-ui-button-background-color:var(--wpds-color-bg-interactive-brand-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));--wp-ui-button-background-color-disabled:var(--wpds-color-bg-interactive-neutral-weak-disabled,#0000)}}.e722a8f96726aa99__is-neutral{&.b50b3358c5fb4d0b__is-solid{--wp-ui-button-background-color:var(--wpds-color-bg-interactive-neutral-strong,#2d2d2d);--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-neutral-strong-active,#1e1e1e);--wp-ui-button-background-color-disabled:var(--wpds-color-bg-interactive-neutral-strong-disabled,#e6e6e6);--wp-ui-button-foreground-color:var(--wpds-color-fg-interactive-neutral-strong,#f0f0f0);--wp-ui-button-foreground-color-active:var(--wpds-color-fg-interactive-neutral-strong-active,#f0f0f0);--wp-ui-button-foreground-color-disabled:var(--wpds-color-fg-interactive-neutral-strong-disabled,#8d8d8d)}&._62d5a778b7b258ee__is-outline,&.ad0619a3217c6a5b__is-minimal{--wp-ui-button-foreground-color:var(--wpds-color-fg-interactive-neutral,#1e1e1e);--wp-ui-button-foreground-color-active:var(--wpds-color-fg-interactive-neutral-active,#1e1e1e);--wp-ui-button-foreground-color-disabled:var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d)}&._62d5a778b7b258ee__is-outline{--wp-ui-button-background-color:var(--wpds-color-bg-interactive-neutral-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-neutral-weak-active,#ededed);--wp-ui-button-background-color-disabled:var(--wpds-color-bg-interactive-neutral-weak-disabled,#0000);--wp-ui-button-border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d);--wp-ui-button-border-color-active:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e);--wp-ui-button-border-color-disabled:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}&.ad0619a3217c6a5b__is-minimal{--wp-ui-button-background-color:var(--wpds-color-bg-interactive-neutral-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-neutral-weak-active,#ededed);--wp-ui-button-background-color-disabled:var(--wpds-color-bg-interactive-neutral-weak-disabled,#0000)}}.abbb272e2ce49bd6__is-unstyled{background:none;border:none;min-width:unset}.cf59cf1b69629838__is-compact{--wp-ui-button-height:32px}._914b42f315c0e580__is-loading{color:#0000;&:not([data-disabled]):is(:hover,:active,:focus){color:#0000}*{opacity:0}&:before{opacity:1;transition-delay:.05s;@media not (prefers-reduced-motion){animation:_5a1d53da6f830c8d__loading-animation 1s linear infinite}}}[aria-pressed=true].ad0619a3217c6a5b__is-minimal.e722a8f96726aa99__is-neutral{--wp-ui-button-background-color:var(--wpds-color-bg-interactive-neutral-strong,#2d2d2d);--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-neutral-strong,#2d2d2d);--wp-ui-button-foreground-color:var(--wpds-color-fg-interactive-neutral-strong,#f0f0f0);--wp-ui-button-foreground-color-active:var(--wpds-color-fg-interactive-neutral-strong,#f0f0f0)}}@keyframes _5a1d53da6f830c8d__loading-animation{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}'));
  document.head.appendChild(style);
}
var style_default2 = { "button": "_97b0fc33c028be1a__button", "is-unstyled": "abbb272e2ce49bd6__is-unstyled", "is-loading": "_914b42f315c0e580__is-loading", "is-small": "_908205475f9f2a92__is-small", "is-brand": "dd460c965226cc77__is-brand", "is-outline": "_62d5a778b7b258ee__is-outline", "is-minimal": "ad0619a3217c6a5b__is-minimal", "is-neutral": "e722a8f96726aa99__is-neutral", "is-solid": "b50b3358c5fb4d0b__is-solid", "is-compact": "cf59cf1b69629838__is-compact", "loading-animation": "_5a1d53da6f830c8d__loading-animation" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='2a5ab8f3a7']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "2a5ab8f3a7");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._08e8a2e44959f892__outset-ring--focus,._970d04df7376df67__outset-ring--focus-within-except-active,.c5cb3ee4bddaa8e4__outset-ring--focus-within-visible,.cd83dfc2126a0846__outset-ring--focus-within,.d0541bc9dd9dc7b6__outset-ring--focus-visible,.e25b2bdd7aa21721__outset-ring--focus-except-active,.ecadb9e080e2dfa5__outset-ring--focus-parent-visible{@media not (prefers-reduced-motion){--_gcd-a-transition:outline 0.1s ease-out;transition:outline .1s ease-out}outline:0 solid #0000;outline-offset:1px}._08e8a2e44959f892__outset-ring--focus:focus,._970d04df7376df67__outset-ring--focus-within-except-active:focus-within:not(:has(:active)),.c5cb3ee4bddaa8e4__outset-ring--focus-within-visible:focus-within:has(:focus-visible),.cd83dfc2126a0846__outset-ring--focus-within:focus-within,.d0541bc9dd9dc7b6__outset-ring--focus-visible:focus-visible,.e25b2bdd7aa21721__outset-ring--focus-except-active:focus:not(:active),:focus-visible .ecadb9e080e2dfa5__outset-ring--focus-parent-visible{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9))}}"));
  document.head.appendChild(style);
}
var focus_default = { "outset-ring--focus": "_08e8a2e44959f892__outset-ring--focus", "outset-ring--focus-except-active": "e25b2bdd7aa21721__outset-ring--focus-except-active", "outset-ring--focus-visible": "d0541bc9dd9dc7b6__outset-ring--focus-visible", "outset-ring--focus-within": "cd83dfc2126a0846__outset-ring--focus-within", "outset-ring--focus-within-except-active": "_970d04df7376df67__outset-ring--focus-within-except-active", "outset-ring--focus-within-visible": "c5cb3ee4bddaa8e4__outset-ring--focus-within-visible", "outset-ring--focus-parent-visible": "ecadb9e080e2dfa5__outset-ring--focus-parent-visible" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='1fb29d3a3c']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "1fb29d3a3c");
  style.appendChild(document.createTextNode("._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,#0000);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 #0000);color:var(--_gcd-input-color,var(--wpds-color-fg-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,#0000);border-color:var(--_gcd-input-border-color-disabled,#0000);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid #0000)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-fg-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-medium,499));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid #0000);transition:var(--_gcd-a-transition,none)}"));
  document.head.appendChild(style);
}
var global_css_defense_default2 = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a" };
var Button3 = (0, import_element9.forwardRef)(
  function Button22({
    tone = "brand",
    variant = "solid",
    size: size4 = "default",
    className,
    focusableWhenDisabled = true,
    disabled: disabled2,
    loading,
    loadingAnnouncement = (0, import_i18n.__)("Loading"),
    children,
    ...props
  }, ref) {
    const mergedClassName = clsx_default(
      global_css_defense_default2.button,
      resets_default["box-sizing"],
      focus_default["outset-ring--focus-except-active"],
      variant !== "unstyled" && style_default2.button,
      style_default2[`is-${tone}`],
      style_default2[`is-${variant}`],
      style_default2[`is-${size4}`],
      loading && style_default2["is-loading"],
      className
    );
    (0, import_element9.useEffect)(() => {
      if (loading && loadingAnnouncement) {
        speak(loadingAnnouncement);
      }
    }, [loading, loadingAnnouncement]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Button,
      {
        ref,
        className: mergedClassName,
        focusableWhenDisabled,
        disabled: disabled2 ?? loading,
        ...props,
        children
      }
    );
  }
);

// packages/ui/build-module/button/icon.mjs
var import_element11 = __toESM(require_element(), 1);

// packages/ui/build-module/icon/icon.mjs
var import_element10 = __toESM(require_element(), 1);
var import_primitives = __toESM(require_primitives(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var Icon = (0, import_element10.forwardRef)(function Icon2({ icon, size: size4 = 24, ...restProps }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_primitives.SVG,
    {
      ref,
      fill: "currentColor",
      ...icon.props,
      ...restProps,
      width: size4,
      height: size4
    }
  );
});

// packages/ui/build-module/button/icon.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var ButtonIcon = (0, import_element11.forwardRef)(
  function ButtonIcon2({ icon, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Icon,
      {
        ref,
        icon,
        viewBox: "4 4 16 16",
        size: 16,
        ...props
      }
    );
  }
);

// packages/ui/build-module/button/index.mjs
var Button4 = Object.assign(Button3, {
  /**
   * An icon component specifically designed to work well when rendered inside
   * a `Button` component.
   */
  Icon: ButtonIcon
});

// packages/ui/build-module/card/index.mjs
var card_exports = {};
__export(card_exports, {
  Content: () => Content,
  FullBleed: () => FullBleed,
  Header: () => Header,
  Root: () => Root,
  Title: () => Title
});

// packages/ui/build-module/card/root.mjs
var import_element12 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default2 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='14f5e9ddeb']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "14f5e9ddeb");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}"));
  document.head.appendChild(style);
}
var style_default3 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var Root = (0, import_element12.forwardRef)(function Card({ render, ...restProps }, ref) {
  const mergedClassName = clsx_default(style_default3.root, resets_default2["box-sizing"]);
  const element = useRender({
    defaultTagName: "div",
    render,
    ref,
    props: mergeProps({ className: mergedClassName }, restProps)
  });
  return element;
});

// packages/ui/build-module/card/header.mjs
var import_element13 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='14f5e9ddeb']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "14f5e9ddeb");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}"));
  document.head.appendChild(style);
}
var style_default4 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var Header = (0, import_element13.forwardRef)(
  function CardHeader({ render, ...props }, ref) {
    const element = useRender({
      defaultTagName: "div",
      render,
      ref,
      props: mergeProps({ className: style_default4.header }, props)
    });
    return element;
  }
);

// packages/ui/build-module/card/content.mjs
var import_element14 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='14f5e9ddeb']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "14f5e9ddeb");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}"));
  document.head.appendChild(style);
}
var style_default5 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var Content = (0, import_element14.forwardRef)(
  function CardContent({ render, ...props }, ref) {
    const element = useRender({
      defaultTagName: "div",
      render,
      ref,
      props: mergeProps({ className: style_default5.content }, props)
    });
    return element;
  }
);

// packages/ui/build-module/card/full-bleed.mjs
var import_element15 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='14f5e9ddeb']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "14f5e9ddeb");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}"));
  document.head.appendChild(style);
}
var style_default6 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var FullBleed = (0, import_element15.forwardRef)(
  function CardFullBleed({ render, ...props }, ref) {
    const element = useRender({
      defaultTagName: "div",
      render,
      ref,
      props: mergeProps(
        { className: style_default6.fullbleed },
        props
      )
    });
    return element;
  }
);

// packages/ui/build-module/card/title.mjs
var import_element16 = __toESM(require_element(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var DEFAULT_TAG = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", {});
var Title = (0, import_element16.forwardRef)(
  function CardTitle({ render = DEFAULT_TAG, children, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      Text,
      {
        ref,
        variant: "heading-lg",
        render,
        ...props,
        children
      }
    );
  }
);

// packages/icons/build-module/library/caution.mjs
var import_primitives2 = __toESM(require_primitives(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var caution_default = /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_primitives2.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_primitives2.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M5.5 12a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-.75 12v-1.5h1.5V16h-1.5Zm0-8v5h1.5V8h-1.5Z" }) });

// packages/icons/build-module/library/close-small.mjs
var import_primitives3 = __toESM(require_primitives(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var close_small_default = /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_primitives3.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_primitives3.Path, { d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z" }) });

// packages/icons/build-module/library/error.mjs
var import_primitives4 = __toESM(require_primitives(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var error_default = /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_primitives4.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_primitives4.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12.218 5.377a.25.25 0 0 0-.436 0l-7.29 12.96a.25.25 0 0 0 .218.373h14.58a.25.25 0 0 0 .218-.372l-7.29-12.96Zm-1.743-.735c.669-1.19 2.381-1.19 3.05 0l7.29 12.96a1.75 1.75 0 0 1-1.525 2.608H4.71a1.75 1.75 0 0 1-1.525-2.608l7.29-12.96ZM12.75 17.46h-1.5v-1.5h1.5v1.5Zm-1.5-3h1.5v-5h-1.5v5Z" }) });

// packages/icons/build-module/library/home.mjs
var import_primitives5 = __toESM(require_primitives(), 1);
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var home_default = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_primitives5.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_primitives5.Path, { d: "M12 4L4 7.9V20h16V7.9L12 4zm6.5 14.5H14V13h-4v5.5H5.5V8.8L12 5.7l6.5 3.1v9.7z" }) });

// packages/icons/build-module/library/info.mjs
var import_primitives6 = __toESM(require_primitives(), 1);
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var info_default = /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_primitives6.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_primitives6.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M5.5 12a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 4v1.5h-1.5V8h1.5Zm0 8v-5h-1.5v5h1.5Z" }) });

// packages/icons/build-module/library/published.mjs
var import_primitives7 = __toESM(require_primitives(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var published_default = /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_primitives7.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_primitives7.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm11.53-1.47-1.06-1.06L11 12.94l-1.47-1.47-1.06 1.06L11 15.06l4.53-4.53Z" }) });

// packages/ui/build-module/utils/render-portal-with-children.mjs
var import_element17 = __toESM(require_element(), 1);
function renderPortalWithChildren(portal, defaultPortal, children) {
  const rootPortal = portal ?? defaultPortal;
  return (0, import_element17.cloneElement)(rootPortal, {
    children
  });
}

// packages/ui/build-module/lock-unlock.mjs
var import_private_apis = __toESM(require_private_apis(), 1);
var { lock, unlock } = (0, import_private_apis.__dangerousOptInToUnstableAPIsOnlyForCoreModules)(
  "I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.",
  "@wordpress/ui"
);

// packages/ui/build-module/stack/stack.mjs
var import_element18 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='b51ff41489']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "b51ff41489");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._19ce0419607e1896__stack{display:flex}}"));
  document.head.appendChild(style);
}
var style_default7 = { "stack": "_19ce0419607e1896__stack" };
var gapTokens = {
  xs: "var(--wpds-dimension-gap-xs, 4px)",
  sm: "var(--wpds-dimension-gap-sm, 8px)",
  md: "var(--wpds-dimension-gap-md, 12px)",
  lg: "var(--wpds-dimension-gap-lg, 16px)",
  xl: "var(--wpds-dimension-gap-xl, 24px)",
  "2xl": "var(--wpds-dimension-gap-2xl, 32px)",
  "3xl": "var(--wpds-dimension-gap-3xl, 40px)"
};
var Stack = (0, import_element18.forwardRef)(function Stack2({ direction, gap, align, justify, wrap, render, ...props }, ref) {
  const style = {
    gap: gap && gapTokens[gap],
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    flexWrap: wrap
  };
  const element = useRender({
    render,
    ref,
    props: mergeProps(props, { style, className: style_default7.stack })
  });
  return element;
});

// packages/ui/build-module/icon-button/icon-button.mjs
var import_element22 = __toESM(require_element(), 1);

// packages/ui/build-module/tooltip/popup.mjs
var import_element20 = __toESM(require_element(), 1);
var import_theme = __toESM(require_theme(), 1);

// packages/ui/build-module/tooltip/portal.mjs
var import_element19 = __toESM(require_element(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var Portal = (0, import_element19.forwardRef)(
  function TooltipPortal3(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(index_parts_exports.Portal, { ref, ...props });
  }
);

// packages/ui/build-module/tooltip/popup.mjs
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default3 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='8293efbb49']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "8293efbb49");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._480b748dd3510e64__positioner{z-index:var(--wp-ui-tooltip-z-index,initial)}._50096b232db7709d__popup{background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border-radius:var(--wpds-border-radius-sm,2px);box-shadow:var(--wpds-elevation-sm,0 1px 2px 0 #0000000d,0 2px 3px 0 #0000000a,0 6px 6px 0 #00000008,0 8px 8px 0 #00000005);color:var(--wpds-color-fg-content-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-sm,12px);line-height:1.4;padding:var(--wpds-dimension-padding-xs,4px) var(--wpds-dimension-padding-sm,8px);@media (forced-colors:active){border-bottom-color:CanvasText;border-bottom-style:solid;border-bottom-width:1px;border-left-color:CanvasText;border-left-style:solid;border-left-width:1px;border-right-color:CanvasText;border-right-style:solid;border-right-width:1px;border-top-color:CanvasText;border-top-style:solid;border-top-width:1px}}}'));
  document.head.appendChild(style);
}
var style_default8 = { "positioner": "_480b748dd3510e64__positioner", "popup": "_50096b232db7709d__popup" };
var ThemeProvider = unlock(import_theme.privateApis).ThemeProvider;
var Popup = (0, import_element20.forwardRef)(function TooltipPopup3({
  align = "center",
  portal,
  side = "top",
  sideOffset = 4,
  children,
  className,
  ...props
}, ref) {
  const portalChildren = /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    index_parts_exports.Positioner,
    {
      align,
      side,
      sideOffset,
      className: clsx_default(resets_default3["box-sizing"], style_default8.positioner),
      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ThemeProvider, { color: { bg: "#1e1e1e" }, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        index_parts_exports.Popup,
        {
          ref,
          className: clsx_default(style_default8.popup, className),
          ...props,
          children
        }
      ) })
    }
  );
  return renderPortalWithChildren(portal, /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Portal, {}), portalChildren);
});

// packages/ui/build-module/tooltip/trigger.mjs
var import_element21 = __toESM(require_element(), 1);
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var Trigger = (0, import_element21.forwardRef)(
  function TooltipTrigger3(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(index_parts_exports.Trigger, { ref, ...props });
  }
);

// packages/ui/build-module/tooltip/root.mjs
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
function Root2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(index_parts_exports.Root, { ...props });
}

// packages/ui/build-module/tooltip/provider.mjs
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
function Provider({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(index_parts_exports.Provider, { ...props });
}

// packages/ui/build-module/icon-button/icon-button.mjs
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='358a2a646a']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "358a2a646a");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-compositions{._28cfdc260e755391__icon-button{--wp-ui-button-aspect-ratio:1;--wp-ui-button-padding-inline:0;--wp-ui-button-min-width:unset}.f1c70d719989a85a__icon{margin:-1px}}"));
  document.head.appendChild(style);
}
var style_default9 = { "icon-button": "_28cfdc260e755391__icon-button", "icon": "f1c70d719989a85a__icon" };
var IconButton = (0, import_element22.forwardRef)(
  function IconButton2({
    label,
    className,
    // Prevent accidental forwarding of `children`
    children: _children,
    disabled: disabled2,
    focusableWhenDisabled,
    icon,
    size: size4,
    shortcut,
    ...restProps
  }, ref) {
    const classes = clsx_default(style_default9["icon-button"], className);
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Provider, { delay: 0, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Root2, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        Trigger,
        {
          ref,
          disabled: disabled2 && !focusableWhenDisabled,
          render: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            Button4,
            {
              ...restProps,
              size: size4,
              "aria-label": label,
              "aria-keyshortcuts": shortcut?.ariaKeyShortcut,
              disabled: disabled2,
              focusableWhenDisabled
            }
          ),
          className: classes,
          children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            Icon,
            {
              icon,
              size: 24,
              className: style_default9.icon
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Popup, { children: [
        label,
        shortcut && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { "aria-hidden": "true", children: shortcut.displayShortcut })
        ] })
      ] })
    ] }) });
  }
);

// packages/ui/build-module/empty-state/index.mjs
var empty_state_exports = {};
__export(empty_state_exports, {
  Actions: () => Actions,
  Description: () => Description,
  Icon: () => Icon3,
  Root: () => Root3,
  Title: () => Title2,
  Visual: () => Visual
});

// packages/ui/build-module/empty-state/root.mjs
var import_element23 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='6d6361d221']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "6d6361d221");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{.a23e08e65c8e62e5__root{text-wrap:balance;align-items:center;color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);gap:var(--wpds-dimension-gap-xs,4px);max-width:var(--wpds-dimension-surface-width-sm,320px);text-align:center}._01303b3680eaa216__visual{align-items:center;color:var(--wpds-color-fg-content-neutral-weak,#707070);display:flex;justify-content:center;line-height:1;margin-block-end:var(--wpds-dimension-gap-xs,4px)}._58c8e351db225608__icon{background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:50%;padding:var(--wpds-dimension-padding-xs,4px)}.b8b96f70820333a1__title{margin:0}._70f1dd22bad55b18__description{color:var(--wpds-color-fg-content-neutral-weak,#707070);margin:0}._89ac025fd8e2bc52__actions{align-items:center;display:flex;flex-direction:column;gap:var(--wpds-dimension-gap-xs,4px);margin-block-start:var(--wpds-dimension-gap-md,12px);@media (min-width:480px){flex-direction:row;justify-content:center}}}'));
  document.head.appendChild(style);
}
var style_default10 = { "root": "a23e08e65c8e62e5__root", "visual": "_01303b3680eaa216__visual", "icon": "_58c8e351db225608__icon", "title": "b8b96f70820333a1__title", "description": "_70f1dd22bad55b18__description", "actions": "_89ac025fd8e2bc52__actions" };
var Root3 = (0, import_element23.forwardRef)(
  function EmptyStateRoot({ render, ...props }, ref) {
    const className = clsx_default(style_default10.root);
    const element = useRender({
      defaultTagName: "div",
      render,
      ref,
      props: mergeProps({ className }, props)
    });
    return element;
  }
);

// packages/ui/build-module/empty-state/visual.mjs
var import_element24 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='6d6361d221']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "6d6361d221");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{.a23e08e65c8e62e5__root{text-wrap:balance;align-items:center;color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);gap:var(--wpds-dimension-gap-xs,4px);max-width:var(--wpds-dimension-surface-width-sm,320px);text-align:center}._01303b3680eaa216__visual{align-items:center;color:var(--wpds-color-fg-content-neutral-weak,#707070);display:flex;justify-content:center;line-height:1;margin-block-end:var(--wpds-dimension-gap-xs,4px)}._58c8e351db225608__icon{background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:50%;padding:var(--wpds-dimension-padding-xs,4px)}.b8b96f70820333a1__title{margin:0}._70f1dd22bad55b18__description{color:var(--wpds-color-fg-content-neutral-weak,#707070);margin:0}._89ac025fd8e2bc52__actions{align-items:center;display:flex;flex-direction:column;gap:var(--wpds-dimension-gap-xs,4px);margin-block-start:var(--wpds-dimension-gap-md,12px);@media (min-width:480px){flex-direction:row;justify-content:center}}}'));
  document.head.appendChild(style);
}
var style_default11 = { "root": "a23e08e65c8e62e5__root", "visual": "_01303b3680eaa216__visual", "icon": "_58c8e351db225608__icon", "title": "b8b96f70820333a1__title", "description": "_70f1dd22bad55b18__description", "actions": "_89ac025fd8e2bc52__actions" };
var Visual = (0, import_element24.forwardRef)(
  function EmptyStateVisual({ render, ...props }, ref) {
    const className = clsx_default(style_default11.visual);
    const element = useRender({
      defaultTagName: "div",
      render,
      ref,
      props: mergeProps({ className }, props)
    });
    return element;
  }
);

// packages/ui/build-module/empty-state/icon.mjs
var import_element25 = __toESM(require_element(), 1);
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='6d6361d221']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "6d6361d221");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{.a23e08e65c8e62e5__root{text-wrap:balance;align-items:center;color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);gap:var(--wpds-dimension-gap-xs,4px);max-width:var(--wpds-dimension-surface-width-sm,320px);text-align:center}._01303b3680eaa216__visual{align-items:center;color:var(--wpds-color-fg-content-neutral-weak,#707070);display:flex;justify-content:center;line-height:1;margin-block-end:var(--wpds-dimension-gap-xs,4px)}._58c8e351db225608__icon{background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:50%;padding:var(--wpds-dimension-padding-xs,4px)}.b8b96f70820333a1__title{margin:0}._70f1dd22bad55b18__description{color:var(--wpds-color-fg-content-neutral-weak,#707070);margin:0}._89ac025fd8e2bc52__actions{align-items:center;display:flex;flex-direction:column;gap:var(--wpds-dimension-gap-xs,4px);margin-block-start:var(--wpds-dimension-gap-md,12px);@media (min-width:480px){flex-direction:row;justify-content:center}}}'));
  document.head.appendChild(style);
}
var style_default12 = { "root": "a23e08e65c8e62e5__root", "visual": "_01303b3680eaa216__visual", "icon": "_58c8e351db225608__icon", "title": "b8b96f70820333a1__title", "description": "_70f1dd22bad55b18__description", "actions": "_89ac025fd8e2bc52__actions" };
var Icon3 = (0, import_element25.forwardRef)(
  function EmptyStateIcon({ icon, className, ...restProps }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      Visual,
      {
        ref,
        className: clsx_default(style_default12.icon, className),
        ...restProps,
        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Icon, { icon })
      }
    );
  }
);

// packages/ui/build-module/empty-state/title.mjs
var import_element26 = __toESM(require_element(), 1);
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='6d6361d221']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "6d6361d221");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{.a23e08e65c8e62e5__root{text-wrap:balance;align-items:center;color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);gap:var(--wpds-dimension-gap-xs,4px);max-width:var(--wpds-dimension-surface-width-sm,320px);text-align:center}._01303b3680eaa216__visual{align-items:center;color:var(--wpds-color-fg-content-neutral-weak,#707070);display:flex;justify-content:center;line-height:1;margin-block-end:var(--wpds-dimension-gap-xs,4px)}._58c8e351db225608__icon{background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:50%;padding:var(--wpds-dimension-padding-xs,4px)}.b8b96f70820333a1__title{margin:0}._70f1dd22bad55b18__description{color:var(--wpds-color-fg-content-neutral-weak,#707070);margin:0}._89ac025fd8e2bc52__actions{align-items:center;display:flex;flex-direction:column;gap:var(--wpds-dimension-gap-xs,4px);margin-block-start:var(--wpds-dimension-gap-md,12px);@media (min-width:480px){flex-direction:row;justify-content:center}}}'));
  document.head.appendChild(style);
}
var style_default13 = { "root": "a23e08e65c8e62e5__root", "visual": "_01303b3680eaa216__visual", "icon": "_58c8e351db225608__icon", "title": "b8b96f70820333a1__title", "description": "_70f1dd22bad55b18__description", "actions": "_89ac025fd8e2bc52__actions" };
var DEFAULT_TAG2 = /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("h2", {});
var Title2 = (0, import_element26.forwardRef)(
  function EmptyStateTitle({ render = DEFAULT_TAG2, className, children, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      Text,
      {
        ref,
        variant: "heading-lg",
        render,
        className: clsx_default(style_default13.title, className),
        ...props,
        children
      }
    );
  }
);

// packages/ui/build-module/empty-state/description.mjs
var import_element27 = __toESM(require_element(), 1);
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='6d6361d221']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "6d6361d221");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{.a23e08e65c8e62e5__root{text-wrap:balance;align-items:center;color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);gap:var(--wpds-dimension-gap-xs,4px);max-width:var(--wpds-dimension-surface-width-sm,320px);text-align:center}._01303b3680eaa216__visual{align-items:center;color:var(--wpds-color-fg-content-neutral-weak,#707070);display:flex;justify-content:center;line-height:1;margin-block-end:var(--wpds-dimension-gap-xs,4px)}._58c8e351db225608__icon{background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:50%;padding:var(--wpds-dimension-padding-xs,4px)}.b8b96f70820333a1__title{margin:0}._70f1dd22bad55b18__description{color:var(--wpds-color-fg-content-neutral-weak,#707070);margin:0}._89ac025fd8e2bc52__actions{align-items:center;display:flex;flex-direction:column;gap:var(--wpds-dimension-gap-xs,4px);margin-block-start:var(--wpds-dimension-gap-md,12px);@media (min-width:480px){flex-direction:row;justify-content:center}}}'));
  document.head.appendChild(style);
}
var style_default14 = { "root": "a23e08e65c8e62e5__root", "visual": "_01303b3680eaa216__visual", "icon": "_58c8e351db225608__icon", "title": "b8b96f70820333a1__title", "description": "_70f1dd22bad55b18__description", "actions": "_89ac025fd8e2bc52__actions" };
var DEFAULT_TAG3 = /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", {});
var Description = (0, import_element27.forwardRef)(function EmptyStateDescription({ render = DEFAULT_TAG3, className, children, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    Text,
    {
      ref,
      variant: "body-md",
      render,
      className: clsx_default(style_default14.description, className),
      ...props,
      children
    }
  );
});

// packages/ui/build-module/empty-state/actions.mjs
var import_element28 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='6d6361d221']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "6d6361d221");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{.a23e08e65c8e62e5__root{text-wrap:balance;align-items:center;color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);gap:var(--wpds-dimension-gap-xs,4px);max-width:var(--wpds-dimension-surface-width-sm,320px);text-align:center}._01303b3680eaa216__visual{align-items:center;color:var(--wpds-color-fg-content-neutral-weak,#707070);display:flex;justify-content:center;line-height:1;margin-block-end:var(--wpds-dimension-gap-xs,4px)}._58c8e351db225608__icon{background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:50%;padding:var(--wpds-dimension-padding-xs,4px)}.b8b96f70820333a1__title{margin:0}._70f1dd22bad55b18__description{color:var(--wpds-color-fg-content-neutral-weak,#707070);margin:0}._89ac025fd8e2bc52__actions{align-items:center;display:flex;flex-direction:column;gap:var(--wpds-dimension-gap-xs,4px);margin-block-start:var(--wpds-dimension-gap-md,12px);@media (min-width:480px){flex-direction:row;justify-content:center}}}'));
  document.head.appendChild(style);
}
var style_default15 = { "root": "a23e08e65c8e62e5__root", "visual": "_01303b3680eaa216__visual", "icon": "_58c8e351db225608__icon", "title": "b8b96f70820333a1__title", "description": "_70f1dd22bad55b18__description", "actions": "_89ac025fd8e2bc52__actions" };
var Actions = (0, import_element28.forwardRef)(
  function EmptyStateActions({ render, ...props }, ref) {
    const className = clsx_default(style_default15.actions);
    const element = useRender({
      defaultTagName: "div",
      render,
      ref,
      props: mergeProps({ className }, props)
    });
    return element;
  }
);

// packages/ui/build-module/link/link.mjs
var import_element29 = __toESM(require_element(), 1);
var import_i18n2 = __toESM(require_i18n(), 1);
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default4 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='2a5ab8f3a7']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "2a5ab8f3a7");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._08e8a2e44959f892__outset-ring--focus,._970d04df7376df67__outset-ring--focus-within-except-active,.c5cb3ee4bddaa8e4__outset-ring--focus-within-visible,.cd83dfc2126a0846__outset-ring--focus-within,.d0541bc9dd9dc7b6__outset-ring--focus-visible,.e25b2bdd7aa21721__outset-ring--focus-except-active,.ecadb9e080e2dfa5__outset-ring--focus-parent-visible{@media not (prefers-reduced-motion){--_gcd-a-transition:outline 0.1s ease-out;transition:outline .1s ease-out}outline:0 solid #0000;outline-offset:1px}._08e8a2e44959f892__outset-ring--focus:focus,._970d04df7376df67__outset-ring--focus-within-except-active:focus-within:not(:has(:active)),.c5cb3ee4bddaa8e4__outset-ring--focus-within-visible:focus-within:has(:focus-visible),.cd83dfc2126a0846__outset-ring--focus-within:focus-within,.d0541bc9dd9dc7b6__outset-ring--focus-visible:focus-visible,.e25b2bdd7aa21721__outset-ring--focus-except-active:focus:not(:active),:focus-visible .ecadb9e080e2dfa5__outset-ring--focus-parent-visible{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9))}}"));
  document.head.appendChild(style);
}
var focus_default2 = { "outset-ring--focus": "_08e8a2e44959f892__outset-ring--focus", "outset-ring--focus-except-active": "e25b2bdd7aa21721__outset-ring--focus-except-active", "outset-ring--focus-visible": "d0541bc9dd9dc7b6__outset-ring--focus-visible", "outset-ring--focus-within": "cd83dfc2126a0846__outset-ring--focus-within", "outset-ring--focus-within-except-active": "_970d04df7376df67__outset-ring--focus-within-except-active", "outset-ring--focus-within-visible": "c5cb3ee4bddaa8e4__outset-ring--focus-within-visible", "outset-ring--focus-parent-visible": "ecadb9e080e2dfa5__outset-ring--focus-parent-visible" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='90a23568f8']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "90a23568f8");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{.d4250949359b05ce__link{text-decoration-thickness:from-font;text-underline-offset:.2em}.c6055659b8e2cd2c__is-brand,.c6055659b8e2cd2c__is-brand:visited{--_gcd-a-color:var(--wpds-color-fg-interactive-brand,var(--wp-admin-theme-color,#3858e9));color:var(--wpds-color-fg-interactive-brand,var(--wp-admin-theme-color,#3858e9))}.c6055659b8e2cd2c__is-brand:active,.c6055659b8e2cd2c__is-brand:hover{--_gcd-a-color:var(--wpds-color-fg-interactive-brand-active,var(--wp-admin-theme-color,#3858e9));color:var(--wpds-color-fg-interactive-brand-active,var(--wp-admin-theme-color,#3858e9))}._92e0dfcaeee15b88__is-neutral,._92e0dfcaeee15b88__is-neutral:visited{--_gcd-a-color:var(--wpds-color-fg-interactive-neutral,#1e1e1e);color:var(--wpds-color-fg-interactive-neutral,#1e1e1e);text-decoration-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d)}._92e0dfcaeee15b88__is-neutral:active,._92e0dfcaeee15b88__is-neutral:hover{--_gcd-a-color:var(--wpds-color-fg-interactive-neutral-active,#1e1e1e);color:var(--wpds-color-fg-interactive-neutral-active,#1e1e1e)}.cf122a9bf1035d42__is-unstyled{--_gcd-a-color:inherit;color:inherit;text-decoration:none}._0cb411afac4c86c7__link-icon{display:inline-block;font-weight:var(--wpds-typography-font-weight-regular,400);line-height:1;margin-inline-start:var(--wpds-dimension-padding-xs,4px);text-decoration:none}._0cb411afac4c86c7__link-icon:after{content:"\\2197"}._0cb411afac4c86c7__link-icon:dir(rtl):after{content:"\\2196"}}'));
  document.head.appendChild(style);
}
var style_default16 = { "link": "d4250949359b05ce__link", "is-brand": "c6055659b8e2cd2c__is-brand", "is-neutral": "_92e0dfcaeee15b88__is-neutral", "is-unstyled": "cf122a9bf1035d42__is-unstyled", "link-icon": "_0cb411afac4c86c7__link-icon" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='1fb29d3a3c']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "1fb29d3a3c");
  style.appendChild(document.createTextNode("._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,#0000);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 #0000);color:var(--_gcd-input-color,var(--wpds-color-fg-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,#0000);border-color:var(--_gcd-input-border-color-disabled,#0000);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid #0000)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-fg-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-medium,499));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid #0000);transition:var(--_gcd-a-transition,none)}"));
  document.head.appendChild(style);
}
var global_css_defense_default3 = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a" };
var Link = (0, import_element29.forwardRef)(function Link2({
  children,
  variant = "default",
  tone = "brand",
  openInNewTab = false,
  render,
  className,
  ...props
}, ref) {
  const element = useRender({
    render,
    defaultTagName: "a",
    ref,
    props: mergeProps(props, {
      className: clsx_default(
        global_css_defense_default3.a,
        resets_default4["box-sizing"],
        focus_default2["outset-ring--focus"],
        variant !== "unstyled" && style_default16.link,
        variant !== "unstyled" && style_default16[`is-${tone}`],
        variant === "unstyled" && style_default16["is-unstyled"],
        className
      ),
      target: openInNewTab ? "_blank" : void 0,
      children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
        children,
        openInNewTab && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          "span",
          {
            className: style_default16["link-icon"],
            role: "img",
            "aria-label": (
              /* translators: accessibility text appended to link text */
              (0, import_i18n2.__)("(opens in a new tab)")
            )
          }
        )
      ] })
    })
  });
  return element;
});

// packages/ui/build-module/notice/index.mjs
var notice_exports = {};
__export(notice_exports, {
  ActionButton: () => ActionButton,
  ActionLink: () => ActionLink,
  Actions: () => Actions2,
  CloseIcon: () => CloseIcon,
  Description: () => Description2,
  Root: () => Root4,
  Title: () => Title3
});

// packages/ui/build-module/notice/root.mjs
var import_element30 = __toESM(require_element(), 1);
import { speak as speak2 } from "@wordpress/a11y";
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default5 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default17 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var icons = {
  neutral: null,
  info: info_default,
  warning: caution_default,
  success: published_default,
  error: error_default
};
function getDefaultPoliteness(intent) {
  return intent === "error" ? "assertive" : "polite";
}
function safeRenderToString(message) {
  if (!message) {
    return void 0;
  }
  if (typeof message === "string") {
    return message;
  }
  try {
    return (0, import_element30.renderToString)(message);
  } catch {
    return void 0;
  }
}
function useSpokenMessage(message, politeness) {
  const spokenMessage = safeRenderToString(message);
  (0, import_element30.useEffect)(() => {
    if (spokenMessage) {
      speak2(spokenMessage, politeness);
    }
  }, [spokenMessage, politeness]);
}
var Root4 = (0, import_element30.forwardRef)(function Notice({
  intent = "neutral",
  children,
  icon,
  spokenMessage = children,
  politeness = getDefaultPoliteness(intent),
  render,
  ...restProps
}, ref) {
  useSpokenMessage(spokenMessage, politeness);
  const iconElement = icon === null ? null : icon ?? icons[intent];
  const mergedClassName = clsx_default(
    style_default17.notice,
    style_default17[`is-${intent}`],
    resets_default5["box-sizing"]
  );
  const element = useRender({
    defaultTagName: "div",
    render,
    ref,
    props: mergeProps(
      {
        className: mergedClassName,
        children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
          children,
          iconElement && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            Icon,
            {
              className: style_default17.icon,
              icon: iconElement
            }
          )
        ] })
      },
      restProps
    )
  });
  return element;
});

// packages/ui/build-module/notice/title.mjs
var import_element31 = __toESM(require_element(), 1);
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default18 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var Title3 = (0, import_element31.forwardRef)(
  function NoticeTitle({ className, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      Text,
      {
        ref,
        variant: "heading-md",
        className: clsx_default(style_default18.title, className),
        ...props
      }
    );
  }
);

// packages/ui/build-module/notice/description.mjs
var import_element32 = __toESM(require_element(), 1);
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default19 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var Description2 = (0, import_element32.forwardRef)(
  function NoticeDescription({ className, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      Text,
      {
        ref,
        variant: "body-md",
        className: clsx_default(style_default19.description, className),
        ...props
      }
    );
  }
);

// packages/ui/build-module/notice/actions.mjs
var import_element33 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default20 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var Actions2 = (0, import_element33.forwardRef)(
  function NoticeActions({ render, ...props }, ref) {
    const element = useRender({
      defaultTagName: "div",
      render,
      ref,
      props: mergeProps(
        {
          className: style_default20.actions
        },
        props
      )
    });
    return element;
  }
);

// packages/ui/build-module/notice/close-icon.mjs
var import_element34 = __toESM(require_element(), 1);
var import_i18n3 = __toESM(require_i18n(), 1);
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default21 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var CloseIcon = (0, import_element34.forwardRef)(
  function NoticeCloseIcon({ className, icon = close_small_default, label = (0, import_i18n3.__)("Dismiss"), ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      IconButton,
      {
        ...props,
        ref,
        className: clsx_default(style_default21["close-icon"], className),
        variant: "minimal",
        size: "small",
        tone: "neutral",
        icon,
        label
      }
    );
  }
);

// packages/ui/build-module/notice/action-button.mjs
var import_element35 = __toESM(require_element(), 1);
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default22 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var ActionButton = (0, import_element35.forwardRef)(
  function NoticeActionButton({ className, loading, loadingAnnouncement, variant, ...props }, ref) {
    const loadingProps = loading !== void 0 ? { loading, loadingAnnouncement: loadingAnnouncement ?? "" } : {};
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      Button4,
      {
        ...props,
        ...loadingProps,
        ref,
        size: "compact",
        tone: "neutral",
        variant,
        className: clsx_default(
          style_default22["action-button"],
          style_default22[`is-action-button-${variant}`],
          className
        )
      }
    );
  }
);

// packages/ui/build-module/notice/action-link.mjs
var import_element36 = __toESM(require_element(), 1);
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default23 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var ActionLink = (0, import_element36.forwardRef)(
  function NoticeActionLink({ className, render, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      Text,
      {
        ref,
        className: clsx_default(style_default23["action-link"], className),
        ...props,
        variant: "body-md",
        render: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Link, { tone: "neutral", variant: "default", render })
      }
    );
  }
);

// packages/admin-ui/build-module/navigable-region/index.mjs
var import_element37 = __toESM(require_element(), 1);
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var NavigableRegion = (0, import_element37.forwardRef)(
  ({ children, className, ariaLabel, as: Tag = "div", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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

// packages/admin-ui/build-module/page/sidebar-toggle-slot.mjs
var import_components = __toESM(require_components(), 1);
var { Fill: SidebarToggleFill, Slot: SidebarToggleSlot } = (0, import_components.createSlotFill)("SidebarToggle");

// packages/admin-ui/build-module/page/header.mjs
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='aa9c241ccc']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "aa9c241ccc");
  style.appendChild(document.createTextNode("._956b6df0898efed0__page{text-wrap:pretty;background-color:var(--wpds-color-bg-surface-neutral,#fcfcfc);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-flow:column;height:100%;position:relative;z-index:1}._0625b55e82a0d93d__header{background:var(--wpds-color-bg-surface-neutral-strong,#fff);border-block-end:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);inset-block-start:0;padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px);position:sticky;z-index:1}.a43c44d5ae28b2e8__header-content{min-height:calc(var(--wpds-dimension-base, 4px)*8)}.b7cb5b9daf3a3b25__header-actions{flex-shrink:0}._8113be94e7caf73c__header-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._9a776c7f70996f61__header-visual{display:grid;flex-shrink:0;grid-template-columns:1fr;grid-template-rows:1fr;height:calc(var(--wpds-dimension-base, 4px)*6);width:calc(var(--wpds-dimension-base, 4px)*6);>*{grid-column:1/-1;grid-row:1/-1;max-height:100%;max-width:100%}}.d5e0920cd15d35bc__sidebar-toggle-slot:empty{display:none}._60fea2f6bf5319cd__header-subtitle{color:var(--wpds-color-fg-content-neutral-weak,#707070);padding-block-end:var(--wpds-dimension-padding-xs,4px)}.be5e57d029ec4036__content{display:flex;flex-direction:column;flex-grow:1;overflow:auto;&._128806d0b26e3a50__has-padding{padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px)}}"));
  document.head.appendChild(style);
}
var style_default24 = { "page": "_956b6df0898efed0__page", "header": "_0625b55e82a0d93d__header", "header-content": "a43c44d5ae28b2e8__header-content", "header-actions": "b7cb5b9daf3a3b25__header-actions", "header-title": "_8113be94e7caf73c__header-title", "header-visual": "_9a776c7f70996f61__header-visual", "sidebar-toggle-slot": "d5e0920cd15d35bc__sidebar-toggle-slot", "header-subtitle": "_60fea2f6bf5319cd__header-subtitle", "content": "be5e57d029ec4036__content", "has-padding": "_128806d0b26e3a50__has-padding" };
function Header2({
  headingLevel = 1,
  breadcrumbs,
  badges,
  visual,
  title,
  subTitle,
  actions,
  showSidebarToggle = true
}) {
  const HeadingTag = `h${headingLevel}`;
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    Stack,
    {
      direction: "column",
      className: style_default24.header,
      render: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("header", {}),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
          Stack,
          {
            className: style_default24["header-content"],
            direction: "row",
            gap: "sm",
            justify: "space-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(Stack, { direction: "row", gap: "sm", align: "center", justify: "start", children: [
                showSidebarToggle && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  SidebarToggleSlot,
                  {
                    bubblesVirtually: true,
                    className: style_default24["sidebar-toggle-slot"]
                  }
                ),
                visual && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  "div",
                  {
                    className: style_default24["header-visual"],
                    "aria-hidden": "true",
                    children: visual
                  }
                ),
                title && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  Text,
                  {
                    className: style_default24["header-title"],
                    render: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(HeadingTag, {}),
                    variant: "heading-lg",
                    children: title
                  }
                ),
                breadcrumbs,
                badges
              ] }),
              actions && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                Stack,
                {
                  align: "center",
                  className: style_default24["header-actions"],
                  direction: "row",
                  gap: "sm",
                  children: actions
                }
              )
            ]
          }
        ),
        subTitle && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          Text,
          {
            render: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", {}),
            variant: "body-md",
            className: style_default24["header-subtitle"],
            children: subTitle
          }
        )
      ]
    }
  );
}

// packages/admin-ui/build-module/page/index.mjs
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='aa9c241ccc']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "aa9c241ccc");
  style.appendChild(document.createTextNode("._956b6df0898efed0__page{text-wrap:pretty;background-color:var(--wpds-color-bg-surface-neutral,#fcfcfc);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-flow:column;height:100%;position:relative;z-index:1}._0625b55e82a0d93d__header{background:var(--wpds-color-bg-surface-neutral-strong,#fff);border-block-end:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);inset-block-start:0;padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px);position:sticky;z-index:1}.a43c44d5ae28b2e8__header-content{min-height:calc(var(--wpds-dimension-base, 4px)*8)}.b7cb5b9daf3a3b25__header-actions{flex-shrink:0}._8113be94e7caf73c__header-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._9a776c7f70996f61__header-visual{display:grid;flex-shrink:0;grid-template-columns:1fr;grid-template-rows:1fr;height:calc(var(--wpds-dimension-base, 4px)*6);width:calc(var(--wpds-dimension-base, 4px)*6);>*{grid-column:1/-1;grid-row:1/-1;max-height:100%;max-width:100%}}.d5e0920cd15d35bc__sidebar-toggle-slot:empty{display:none}._60fea2f6bf5319cd__header-subtitle{color:var(--wpds-color-fg-content-neutral-weak,#707070);padding-block-end:var(--wpds-dimension-padding-xs,4px)}.be5e57d029ec4036__content{display:flex;flex-direction:column;flex-grow:1;overflow:auto;&._128806d0b26e3a50__has-padding{padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px)}}"));
  document.head.appendChild(style);
}
var style_default25 = { "page": "_956b6df0898efed0__page", "header": "_0625b55e82a0d93d__header", "header-content": "a43c44d5ae28b2e8__header-content", "header-actions": "b7cb5b9daf3a3b25__header-actions", "header-title": "_8113be94e7caf73c__header-title", "header-visual": "_9a776c7f70996f61__header-visual", "sidebar-toggle-slot": "d5e0920cd15d35bc__sidebar-toggle-slot", "header-subtitle": "_60fea2f6bf5319cd__header-subtitle", "content": "be5e57d029ec4036__content", "has-padding": "_128806d0b26e3a50__has-padding" };
function Page({
  headingLevel,
  breadcrumbs,
  badges,
  visual,
  title,
  subTitle,
  children,
  className,
  actions,
  ariaLabel,
  hasPadding = false,
  showSidebarToggle = true
}) {
  const classes = clsx_default(style_default25.page, className);
  const effectiveAriaLabel = ariaLabel ?? (typeof title === "string" ? title : "");
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(navigable_region_default, { className: classes, ariaLabel: effectiveAriaLabel, children: [
    (title || breadcrumbs || badges || actions || visual) && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      Header2,
      {
        headingLevel,
        breadcrumbs,
        badges,
        visual,
        title,
        subTitle,
        actions,
        showSidebarToggle
      }
    ),
    hasPadding ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      "div",
      {
        className: clsx_default(
          style_default25.content,
          style_default25["has-padding"]
        ),
        children
      }
    ) : children
  ] });
}
Page.SidebarToggleFill = SidebarToggleFill;
var page_default = Page;

// routes/dashboard/stage.tsx
var import_element49 = __toESM(require_element());
var import_i18n8 = __toESM(require_i18n());

// routes/dashboard/hooks/use-dashboard-layout/use-dashboard-layout.ts
var import_data = __toESM(require_data());
var import_preferences = __toESM(require_preferences());
var SCOPE = "core/dashboard";
var KEY = "dashboardLayout";
function useDashboardLayout() {
  const layout = (0, import_data.useSelect)(
    (select) => select(import_preferences.store).get(SCOPE, KEY) ?? [],
    []
  );
  const { set: set3 } = (0, import_data.useDispatch)(import_preferences.store);
  function setLayout(newLayout) {
    void set3(SCOPE, KEY, newLayout);
  }
  function resetLayout() {
    void set3(SCOPE, KEY, []);
  }
  return [layout, setLayout, resetLayout];
}
var use_dashboard_layout_default = useDashboardLayout;

// routes/dashboard/widget-dashboard/context/dashboard-context.tsx
var import_element38 = __toESM(require_element());
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var DEFAULT_GRID = {
  minColumnWidth: 350,
  rowHeight: 200,
  spacing: 4
};
var DEFAULT_RESOLVE_WIDGET_MODULE = (moduleId) => import(
  /* webpackIgnore: true */
  moduleId
);
var Context = (0, import_element38.createContext)(null);
function useDashboardInternalContext() {
  const ctx = (0, import_element38.useContext)(Context);
  if (!ctx) {
    throw new Error(
      "Dashboard compound used outside a WidgetDashboard subtree."
    );
  }
  return ctx;
}
function WidgetDashboardProvider({
  widgetTypes,
  layout,
  onLayoutChange,
  editMode = false,
  onEditChange,
  resolveWidgetModule = DEFAULT_RESOLVE_WIDGET_MODULE,
  gridSettings = DEFAULT_GRID,
  children
}) {
  const value = (0, import_element38.useMemo)(
    () => ({
      widgetTypes,
      layout,
      onLayoutChange,
      editMode,
      onEditChange,
      resolveWidgetModule,
      gridSettings
    }),
    [
      widgetTypes,
      layout,
      onLayoutChange,
      editMode,
      onEditChange,
      resolveWidgetModule,
      gridSettings
    ]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Context.Provider, { value, children });
}

// routes/dashboard/widget-dashboard/components/actions/actions.tsx
var import_element39 = __toESM(require_element());
var import_i18n4 = __toESM(require_i18n());
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
function Actions3() {
  const { editMode, onEditChange } = useDashboardInternalContext();
  const handleEditMode = (0, import_element39.useCallback)(() => {
    onEditChange?.(!editMode);
  }, [editMode, onEditChange]);
  const handleInsertWidget = (0, import_element39.useCallback)(() => {
    console.log("insert widget");
  }, []);
  const handleCancel = (0, import_element39.useCallback)(() => {
    console.log("cancel");
    onEditChange?.(false);
  }, [onEditChange]);
  const handleDone = (0, import_element39.useCallback)(() => {
    console.log("done");
    onEditChange?.(false);
  }, [onEditChange]);
  if (!onEditChange) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Stack, { direction: "row", gap: "sm", children: editMode ? /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_jsx_runtime41.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      Button4,
      {
        variant: "minimal",
        tone: "brand",
        size: "compact",
        onClick: handleInsertWidget,
        children: (0, import_i18n4.__)("Add widgets")
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      Button4,
      {
        variant: "minimal",
        tone: "brand",
        size: "compact",
        onClick: handleCancel,
        children: (0, import_i18n4.__)("Cancel")
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      Button4,
      {
        variant: "solid",
        tone: "brand",
        size: "compact",
        onClick: handleDone,
        children: (0, import_i18n4.__)("Done")
      }
    )
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    Button4,
    {
      variant: "outline",
      tone: "brand",
      size: "compact",
      onClick: handleEditMode,
      children: (0, import_i18n4.__)("Customize")
    }
  ) });
}

// routes/dashboard/widget-dashboard/components/widget-chrome/widget-chrome.tsx
var import_components2 = __toESM(require_components());
var import_element43 = __toESM(require_element());
var import_i18n5 = __toESM(require_i18n());

// routes/dashboard/widget-dashboard/context/widget-context.tsx
var import_element40 = __toESM(require_element());
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var WidgetContext = (0, import_element40.createContext)(null);
function WidgetContextProvider({
  value,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(WidgetContext.Provider, { value, children });
}

// routes/dashboard/widget-dashboard/components/widget-render/widget-render.tsx
var import_element42 = __toESM(require_element());

// routes/dashboard/widget-dashboard/utils/get-lazy-widget-component/get-lazy-widget-component.ts
var import_element41 = __toESM(require_element());
function isValidWidgetModule(module) {
  return typeof module === "object" && module !== null && "default" in module && typeof module.default === "function";
}
var componentCache = /* @__PURE__ */ new Map();
function getLazyWidgetComponent(renderModule, resolveWidgetModule) {
  const cached = componentCache.get(renderModule);
  if (cached) {
    return cached;
  }
  const lazyComponent = (0, import_element41.lazy)(async () => {
    const module = await resolveWidgetModule(renderModule);
    if (!isValidWidgetModule(module)) {
      throw new Error(`Invalid widget module: ${renderModule}`);
    }
    return module;
  });
  componentCache.set(renderModule, lazyComponent);
  return lazyComponent;
}

// routes/dashboard/widget-dashboard/components/widget-render/widget-render.tsx
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
function WidgetRenderImpl({ widget, widgetType }) {
  const { layout, onLayoutChange, resolveWidgetModule } = useDashboardInternalContext();
  const WidgetComponent = getLazyWidgetComponent(
    widgetType.renderModule,
    resolveWidgetModule
  );
  const setAttributes = (0, import_element42.useCallback)(
    (next) => {
      onLayoutChange(
        layout.map(
          (w) => w.uuid === widget.uuid ? {
            ...w,
            attributes: {
              ...w.attributes,
              ...next
            }
          } : w
        )
      );
    },
    [widget.uuid, layout, onLayoutChange]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_jsx_runtime43.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    WidgetComponent,
    {
      attributes: widget.attributes,
      setAttributes
    }
  ) });
}
var WidgetRender = WidgetRenderImpl;

// routes/dashboard/widget-dashboard/components/widget-chrome/widget-chrome.module.css
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='a89e624f79']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "a89e624f79");
  style.appendChild(document.createTextNode("._22b961782d58cf14__widgetChrome{height:100%}._2e38cde45383ef41__widgetChromeHeaderIcon{color:var(--wpds-color-fg-content-neutral-weak,#707070);display:inline-flex}._65ccc0ffeadb15bf__widgetChromeContent{flex:1}.d86427717f1c6168__loading{height:100%}"));
  document.head.appendChild(style);
}
var widget_chrome_default = { "widgetChrome": "_22b961782d58cf14__widgetChrome", "widgetChromeHeaderIcon": "_2e38cde45383ef41__widgetChromeHeaderIcon", "widgetChromeContent": "_65ccc0ffeadb15bf__widgetChromeContent", "loading": "d86427717f1c6168__loading" };

// routes/dashboard/widget-dashboard/components/widget-chrome/widget-chrome.tsx
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var WidgetErrorBoundary = class extends import_element43.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(notice_exports.Root, { intent: "error", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(notice_exports.Description, { children: (0, import_i18n5.__)("This widget encountered an error.") }) });
    }
    return this.props.children;
  }
};
function LoadingOverlay() {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Stack, { justify: "center", align: "center", className: widget_chrome_default.loading, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_components2.Spinner, {}) });
}
function Header3({ titleId, widgetType }) {
  if (!widgetType.title) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(card_exports.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(Stack, { direction: "row", align: "center", gap: "sm", children: [
    widgetType.icon && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      "span",
      {
        className: widget_chrome_default.widgetChromeHeaderIcon,
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_components2.Icon, { icon: widgetType.icon })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(card_exports.Title, { id: titleId, render: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h3", {}), children: widgetType.title })
  ] }) });
}
var WidgetChrome = (0, import_element43.forwardRef)(
  function WidgetChrome2({ widget, index: index2 }, ref) {
    const { widgetTypes, editMode } = useDashboardInternalContext();
    const widgetType = widgetTypes.find((t) => t.name === widget.type);
    const titleId = (0, import_element43.useId)();
    const contextValue = (0, import_element43.useMemo)(
      () => ({
        uuid: widget.uuid,
        name: widget.type,
        index: index2
      }),
      [widget.uuid, widget.type, index2]
    );
    if (!widgetType) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(WidgetContextProvider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
      card_exports.Root,
      {
        render: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("section", {}),
        ref,
        className: widget_chrome_default.widgetChrome,
        "aria-labelledby": widgetType.title ? titleId : void 0,
        ...editMode ? { inert: "" } : {},
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Header3, { titleId, widgetType }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(card_exports.Content, { className: widget_chrome_default.widgetChromeContent, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(WidgetErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_element43.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(LoadingOverlay, {}), children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            WidgetRender,
            {
              widget,
              widgetType
            }
          ) }) }) })
        ]
      }
    ) });
  }
);

// routes/dashboard/widget-dashboard/components/widgets/widgets.tsx
var import_element47 = __toESM(require_element());

// node_modules/@dnd-kit/core/dist/core.esm.js
var import_react17 = __toESM(require_react());
var import_react_dom4 = __toESM(require_react_dom());

// node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var import_react15 = __toESM(require_react());
function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return (0, import_react15.useMemo)(
    () => (node) => {
      refs.forEach((ref) => ref(node));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );
}
var canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function isWindow(element) {
  const elementString = Object.prototype.toString.call(element);
  return elementString === "[object Window]" || // In Electron context the Window object serializes to [object global]
  elementString === "[object global]";
}
function isNode2(node) {
  return "nodeType" in node;
}
function getWindow2(target) {
  var _target$ownerDocument, _target$ownerDocument2;
  if (!target) {
    return window;
  }
  if (isWindow(target)) {
    return target;
  }
  if (!isNode2(target)) {
    return window;
  }
  return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}
function isDocument(node) {
  const {
    Document
  } = getWindow2(node);
  return node instanceof Document;
}
function isHTMLElement2(node) {
  if (isWindow(node)) {
    return false;
  }
  return node instanceof getWindow2(node).HTMLElement;
}
function isSVGElement(node) {
  return node instanceof getWindow2(node).SVGElement;
}
function getOwnerDocument(target) {
  if (!target) {
    return document;
  }
  if (isWindow(target)) {
    return target.document;
  }
  if (!isNode2(target)) {
    return document;
  }
  if (isDocument(target)) {
    return target;
  }
  if (isHTMLElement2(target) || isSVGElement(target)) {
    return target.ownerDocument;
  }
  return document;
}
var useIsomorphicLayoutEffect = canUseDOM ? import_react15.useLayoutEffect : import_react15.useEffect;
function useEvent(handler) {
  const handlerRef = (0, import_react15.useRef)(handler);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });
  return (0, import_react15.useCallback)(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return handlerRef.current == null ? void 0 : handlerRef.current(...args);
  }, []);
}
function useInterval() {
  const intervalRef = (0, import_react15.useRef)(null);
  const set3 = (0, import_react15.useCallback)((listener, duration) => {
    intervalRef.current = setInterval(listener, duration);
  }, []);
  const clear = (0, import_react15.useCallback)(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  return [set3, clear];
}
function useLatestValue(value, dependencies) {
  if (dependencies === void 0) {
    dependencies = [value];
  }
  const valueRef = (0, import_react15.useRef)(value);
  useIsomorphicLayoutEffect(() => {
    if (valueRef.current !== value) {
      valueRef.current = value;
    }
  }, dependencies);
  return valueRef;
}
function useLazyMemo(callback, dependencies) {
  const valueRef = (0, import_react15.useRef)();
  return (0, import_react15.useMemo)(
    () => {
      const newValue = callback(valueRef.current);
      valueRef.current = newValue;
      return newValue;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...dependencies]
  );
}
function useNodeRef(onChange) {
  const onChangeHandler = useEvent(onChange);
  const node = (0, import_react15.useRef)(null);
  const setNodeRef = (0, import_react15.useCallback)(
    (element) => {
      if (element !== node.current) {
        onChangeHandler == null ? void 0 : onChangeHandler(element, node.current);
      }
      node.current = element;
    },
    //eslint-disable-next-line
    []
  );
  return [node, setNodeRef];
}
function usePrevious(value) {
  const ref = (0, import_react15.useRef)();
  (0, import_react15.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
var ids = {};
function useUniqueId(prefix, value) {
  return (0, import_react15.useMemo)(() => {
    if (value) {
      return value;
    }
    const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
    ids[prefix] = id;
    return prefix + "-" + id;
  }, [prefix, value]);
}
function createAdjustmentFn(modifier) {
  return function(object) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }
    return adjustments.reduce((accumulator, adjustment) => {
      const entries = Object.entries(adjustment);
      for (const [key2, valueAdjustment] of entries) {
        const value = accumulator[key2];
        if (value != null) {
          accumulator[key2] = value + modifier * valueAdjustment;
        }
      }
      return accumulator;
    }, {
      ...object
    });
  };
}
var add = /* @__PURE__ */ createAdjustmentFn(1);
var subtract = /* @__PURE__ */ createAdjustmentFn(-1);
function hasViewportRelativeCoordinates(event) {
  return "clientX" in event && "clientY" in event;
}
function isKeyboardEvent(event) {
  if (!event) {
    return false;
  }
  const {
    KeyboardEvent
  } = getWindow2(event.target);
  return KeyboardEvent && event instanceof KeyboardEvent;
}
function isTouchEvent(event) {
  if (!event) {
    return false;
  }
  const {
    TouchEvent
  } = getWindow2(event.target);
  return TouchEvent && event instanceof TouchEvent;
}
function getEventCoordinates(event) {
  if (isTouchEvent(event)) {
    if (event.touches && event.touches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.touches[0];
      return {
        x,
        y
      };
    } else if (event.changedTouches && event.changedTouches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.changedTouches[0];
      return {
        x,
        y
      };
    }
  }
  if (hasViewportRelativeCoordinates(event)) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }
  return null;
}
var CSS2 = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }
      const {
        x,
        y
      } = transform;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }
      const {
        scaleX,
        scaleY
      } = transform;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }
  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }
      return [CSS2.Translate.toString(transform), CSS2.Scale.toString(transform)].join(" ");
    }
  },
  Transition: {
    toString(_ref) {
      let {
        property,
        duration,
        easing
      } = _ref;
      return property + " " + duration + "ms " + easing;
    }
  }
});
var SELECTOR = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function findFirstFocusableNode(element) {
  if (element.matches(SELECTOR)) {
    return element;
  }
  return element.querySelector(SELECTOR);
}

// node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var import_react16 = __toESM(require_react());
var hiddenStyles = {
  display: "none"
};
function HiddenText(_ref) {
  let {
    id,
    value
  } = _ref;
  return import_react16.default.createElement("div", {
    id,
    style: hiddenStyles
  }, value);
}
function LiveRegion(_ref) {
  let {
    id,
    announcement,
    ariaLiveType = "assertive"
  } = _ref;
  const visuallyHidden2 = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return import_react16.default.createElement("div", {
    id,
    style: visuallyHidden2,
    role: "status",
    "aria-live": ariaLiveType,
    "aria-atomic": true
  }, announcement);
}
function useAnnouncement() {
  const [announcement, setAnnouncement] = (0, import_react16.useState)("");
  const announce = (0, import_react16.useCallback)((value) => {
    if (value != null) {
      setAnnouncement(value);
    }
  }, []);
  return {
    announce,
    announcement
  };
}

// node_modules/@dnd-kit/core/dist/core.esm.js
var DndMonitorContext = /* @__PURE__ */ (0, import_react17.createContext)(null);
function useDndMonitor(listener) {
  const registerListener = (0, import_react17.useContext)(DndMonitorContext);
  (0, import_react17.useEffect)(() => {
    if (!registerListener) {
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    }
    const unsubscribe = registerListener(listener);
    return unsubscribe;
  }, [listener, registerListener]);
}
function useDndMonitorProvider() {
  const [listeners] = (0, import_react17.useState)(() => /* @__PURE__ */ new Set());
  const registerListener = (0, import_react17.useCallback)((listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, [listeners]);
  const dispatch2 = (0, import_react17.useCallback)((_ref) => {
    let {
      type,
      event
    } = _ref;
    listeners.forEach((listener) => {
      var _listener$type;
      return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
    });
  }, [listeners]);
  return [dispatch2, registerListener];
}
var defaultScreenReaderInstructions = {
  draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
};
var defaultAnnouncements = {
  onDragStart(_ref) {
    let {
      active
    } = _ref;
    return "Picked up draggable item " + active.id + ".";
  },
  onDragOver(_ref2) {
    let {
      active,
      over
    } = _ref2;
    if (over) {
      return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
    }
    return "Draggable item " + active.id + " is no longer over a droppable area.";
  },
  onDragEnd(_ref3) {
    let {
      active,
      over
    } = _ref3;
    if (over) {
      return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
    }
    return "Draggable item " + active.id + " was dropped.";
  },
  onDragCancel(_ref4) {
    let {
      active
    } = _ref4;
    return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
  }
};
function Accessibility(_ref) {
  let {
    announcements = defaultAnnouncements,
    container,
    hiddenTextDescribedById,
    screenReaderInstructions = defaultScreenReaderInstructions
  } = _ref;
  const {
    announce,
    announcement
  } = useAnnouncement();
  const liveRegionId = useUniqueId("DndLiveRegion");
  const [mounted, setMounted] = (0, import_react17.useState)(false);
  (0, import_react17.useEffect)(() => {
    setMounted(true);
  }, []);
  useDndMonitor((0, import_react17.useMemo)(() => ({
    onDragStart(_ref2) {
      let {
        active
      } = _ref2;
      announce(announcements.onDragStart({
        active
      }));
    },
    onDragMove(_ref3) {
      let {
        active,
        over
      } = _ref3;
      if (announcements.onDragMove) {
        announce(announcements.onDragMove({
          active,
          over
        }));
      }
    },
    onDragOver(_ref4) {
      let {
        active,
        over
      } = _ref4;
      announce(announcements.onDragOver({
        active,
        over
      }));
    },
    onDragEnd(_ref5) {
      let {
        active,
        over
      } = _ref5;
      announce(announcements.onDragEnd({
        active,
        over
      }));
    },
    onDragCancel(_ref6) {
      let {
        active,
        over
      } = _ref6;
      announce(announcements.onDragCancel({
        active,
        over
      }));
    }
  }), [announce, announcements]));
  if (!mounted) {
    return null;
  }
  const markup = import_react17.default.createElement(import_react17.default.Fragment, null, import_react17.default.createElement(HiddenText, {
    id: hiddenTextDescribedById,
    value: screenReaderInstructions.draggable
  }), import_react17.default.createElement(LiveRegion, {
    id: liveRegionId,
    announcement
  }));
  return container ? (0, import_react_dom4.createPortal)(markup, container) : markup;
}
var Action;
(function(Action2) {
  Action2["DragStart"] = "dragStart";
  Action2["DragMove"] = "dragMove";
  Action2["DragEnd"] = "dragEnd";
  Action2["DragCancel"] = "dragCancel";
  Action2["DragOver"] = "dragOver";
  Action2["RegisterDroppable"] = "registerDroppable";
  Action2["SetDroppableDisabled"] = "setDroppableDisabled";
  Action2["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));
function noop4() {
}
function useSensor(sensor, options) {
  return (0, import_react17.useMemo)(
    () => ({
      sensor,
      options: options != null ? options : {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sensor, options]
  );
}
function useSensors() {
  for (var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++) {
    sensors[_key] = arguments[_key];
  }
  return (0, import_react17.useMemo)(
    () => [...sensors].filter((sensor) => sensor != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...sensors]
  );
}
var defaultCoordinates = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function distanceBetween(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
function getRelativeTransformOrigin(event, rect) {
  const eventCoordinates = getEventCoordinates(event);
  if (!eventCoordinates) {
    return "0 0";
  }
  const transformOrigin = {
    x: (eventCoordinates.x - rect.left) / rect.width * 100,
    y: (eventCoordinates.y - rect.top) / rect.height * 100
  };
  return transformOrigin.x + "% " + transformOrigin.y + "%";
}
function sortCollisionsAsc(_ref, _ref2) {
  let {
    data: {
      value: a
    }
  } = _ref;
  let {
    data: {
      value: b
    }
  } = _ref2;
  return a - b;
}
function sortCollisionsDesc(_ref3, _ref4) {
  let {
    data: {
      value: a
    }
  } = _ref3;
  let {
    data: {
      value: b
    }
  } = _ref4;
  return b - a;
}
function cornersOfRectangle(_ref5) {
  let {
    left,
    top,
    height,
    width
  } = _ref5;
  return [{
    x: left,
    y: top
  }, {
    x: left + width,
    y: top
  }, {
    x: left,
    y: top + height
  }, {
    x: left + width,
    y: top + height
  }];
}
function getFirstCollision(collisions, property) {
  if (!collisions || collisions.length === 0) {
    return null;
  }
  const [firstCollision] = collisions;
  return property ? firstCollision[property] : firstCollision;
}
var closestCorners = (_ref) => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const corners = cornersOfRectangle(collisionRect);
  const collisions = [];
  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);
    if (rect) {
      const rectCorners = cornersOfRectangle(rect);
      const distances = corners.reduce((accumulator, corner, index2) => {
        return accumulator + distanceBetween(rectCorners[index2], corner);
      }, 0);
      const effectiveDistance = Number((distances / 4).toFixed(4));
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: effectiveDistance
        }
      });
    }
  }
  return collisions.sort(sortCollisionsAsc);
};
function getIntersectionRatio(entry, target) {
  const top = Math.max(target.top, entry.top);
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.left + target.width, entry.left + entry.width);
  const bottom = Math.min(target.top + target.height, entry.top + entry.height);
  const width = right - left;
  const height = bottom - top;
  if (left < right && top < bottom) {
    const targetArea = target.width * target.height;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  }
  return 0;
}
var rectIntersection = (_ref) => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const collisions = [];
  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);
    if (rect) {
      const intersectionRatio = getIntersectionRatio(rect, collisionRect);
      if (intersectionRatio > 0) {
        collisions.push({
          id,
          data: {
            droppableContainer,
            value: intersectionRatio
          }
        });
      }
    }
  }
  return collisions.sort(sortCollisionsDesc);
};
function adjustScale(transform, rect1, rect2) {
  return {
    ...transform,
    scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
    scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
  };
}
function getRectDelta(rect1, rect2) {
  return rect1 && rect2 ? {
    x: rect1.left - rect2.left,
    y: rect1.top - rect2.top
  } : defaultCoordinates;
}
function createRectAdjustmentFn(modifier) {
  return function adjustClientRect(rect) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }
    return adjustments.reduce((acc, adjustment) => ({
      ...acc,
      top: acc.top + modifier * adjustment.y,
      bottom: acc.bottom + modifier * adjustment.y,
      left: acc.left + modifier * adjustment.x,
      right: acc.right + modifier * adjustment.x
    }), {
      ...rect
    });
  };
}
var getAdjustedRect = /* @__PURE__ */ createRectAdjustmentFn(1);
function parseTransform(transform) {
  if (transform.startsWith("matrix3d(")) {
    const transformArray = transform.slice(9, -1).split(/, /);
    return {
      x: +transformArray[12],
      y: +transformArray[13],
      scaleX: +transformArray[0],
      scaleY: +transformArray[5]
    };
  } else if (transform.startsWith("matrix(")) {
    const transformArray = transform.slice(7, -1).split(/, /);
    return {
      x: +transformArray[4],
      y: +transformArray[5],
      scaleX: +transformArray[0],
      scaleY: +transformArray[3]
    };
  }
  return null;
}
function inverseTransform(rect, transform, transformOrigin) {
  const parsedTransform = parseTransform(transform);
  if (!parsedTransform) {
    return rect;
  }
  const {
    scaleX,
    scaleY,
    x: translateX,
    y: translateY
  } = parsedTransform;
  const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
  const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
  const w = scaleX ? rect.width / scaleX : rect.width;
  const h = scaleY ? rect.height / scaleY : rect.height;
  return {
    width: w,
    height: h,
    top: y,
    right: x + w,
    bottom: y + h,
    left: x
  };
}
var defaultOptions = {
  ignoreTransform: false
};
function getClientRect(element, options) {
  if (options === void 0) {
    options = defaultOptions;
  }
  let rect = element.getBoundingClientRect();
  if (options.ignoreTransform) {
    const {
      transform,
      transformOrigin
    } = getWindow2(element).getComputedStyle(element);
    if (transform) {
      rect = inverseTransform(rect, transform, transformOrigin);
    }
  }
  const {
    top,
    left,
    width,
    height,
    bottom,
    right
  } = rect;
  return {
    top,
    left,
    width,
    height,
    bottom,
    right
  };
}
function getTransformAgnosticClientRect(element) {
  return getClientRect(element, {
    ignoreTransform: true
  });
}
function getWindowClientRect(element) {
  const width = element.innerWidth;
  const height = element.innerHeight;
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  };
}
function isFixed(node, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = getWindow2(node).getComputedStyle(node);
  }
  return computedStyle.position === "fixed";
}
function isScrollable(element, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = getWindow2(element).getComputedStyle(element);
  }
  const overflowRegex = /(auto|scroll|overlay)/;
  const properties2 = ["overflow", "overflowX", "overflowY"];
  return properties2.some((property) => {
    const value = computedStyle[property];
    return typeof value === "string" ? overflowRegex.test(value) : false;
  });
}
function getScrollableAncestors(element, limit) {
  const scrollParents = [];
  function findScrollableAncestors(node) {
    if (limit != null && scrollParents.length >= limit) {
      return scrollParents;
    }
    if (!node) {
      return scrollParents;
    }
    if (isDocument(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
      scrollParents.push(node.scrollingElement);
      return scrollParents;
    }
    if (!isHTMLElement2(node) || isSVGElement(node)) {
      return scrollParents;
    }
    if (scrollParents.includes(node)) {
      return scrollParents;
    }
    const computedStyle = getWindow2(element).getComputedStyle(node);
    if (node !== element) {
      if (isScrollable(node, computedStyle)) {
        scrollParents.push(node);
      }
    }
    if (isFixed(node, computedStyle)) {
      return scrollParents;
    }
    return findScrollableAncestors(node.parentNode);
  }
  if (!element) {
    return scrollParents;
  }
  return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
  const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
  return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}
function getScrollableElement(element) {
  if (!canUseDOM || !element) {
    return null;
  }
  if (isWindow(element)) {
    return element;
  }
  if (!isNode2(element)) {
    return null;
  }
  if (isDocument(element) || element === getOwnerDocument(element).scrollingElement) {
    return window;
  }
  if (isHTMLElement2(element)) {
    return element;
  }
  return null;
}
function getScrollXCoordinate(element) {
  if (isWindow(element)) {
    return element.scrollX;
  }
  return element.scrollLeft;
}
function getScrollYCoordinate(element) {
  if (isWindow(element)) {
    return element.scrollY;
  }
  return element.scrollTop;
}
function getScrollCoordinates(element) {
  return {
    x: getScrollXCoordinate(element),
    y: getScrollYCoordinate(element)
  };
}
var Direction;
(function(Direction2) {
  Direction2[Direction2["Forward"] = 1] = "Forward";
  Direction2[Direction2["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));
function isDocumentScrollingElement(element) {
  if (!canUseDOM || !element) {
    return false;
  }
  return element === document.scrollingElement;
}
function getScrollPosition(scrollingContainer) {
  const minScroll = {
    x: 0,
    y: 0
  };
  const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: scrollingContainer.clientHeight,
    width: scrollingContainer.clientWidth
  };
  const maxScroll = {
    x: scrollingContainer.scrollWidth - dimensions.width,
    y: scrollingContainer.scrollHeight - dimensions.height
  };
  const isTop = scrollingContainer.scrollTop <= minScroll.y;
  const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
  const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
  const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
  return {
    isTop,
    isLeft,
    isBottom,
    isRight,
    maxScroll,
    minScroll
  };
}
var defaultThreshold = {
  x: 0.2,
  y: 0.2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
  let {
    top,
    left,
    right,
    bottom
  } = _ref;
  if (acceleration === void 0) {
    acceleration = 10;
  }
  if (thresholdPercentage === void 0) {
    thresholdPercentage = defaultThreshold;
  }
  const {
    isTop,
    isBottom,
    isLeft,
    isRight
  } = getScrollPosition(scrollContainer);
  const direction = {
    x: 0,
    y: 0
  };
  const speed = {
    x: 0,
    y: 0
  };
  const threshold = {
    height: scrollContainerRect.height * thresholdPercentage.y,
    width: scrollContainerRect.width * thresholdPercentage.x
  };
  if (!isTop && top <= scrollContainerRect.top + threshold.height) {
    direction.y = Direction.Backward;
    speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
  } else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
    direction.y = Direction.Forward;
    speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
  }
  if (!isRight && right >= scrollContainerRect.right - threshold.width) {
    direction.x = Direction.Forward;
    speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
  } else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
    direction.x = Direction.Backward;
    speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
  }
  return {
    direction,
    speed
  };
}
function getScrollElementRect(element) {
  if (element === document.scrollingElement) {
    const {
      innerWidth,
      innerHeight
    } = window;
    return {
      top: 0,
      left: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight
    };
  }
  const {
    top,
    left,
    right,
    bottom
  } = element.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width: element.clientWidth,
    height: element.clientHeight
  };
}
function getScrollOffsets(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return add(acc, getScrollCoordinates(node));
  }, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollXCoordinate(node);
  }, 0);
}
function getScrollYOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollYCoordinate(node);
  }, 0);
}
function scrollIntoViewIfNeeded(element, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }
  if (!element) {
    return;
  }
  const {
    top,
    left,
    bottom,
    right
  } = measure(element);
  const firstScrollableAncestor = getFirstScrollableAncestor(element);
  if (!firstScrollableAncestor) {
    return;
  }
  if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) {
    element.scrollIntoView({
      block: "center",
      inline: "center"
    });
  }
}
var properties = [["x", ["left", "right"], getScrollXOffset], ["y", ["top", "bottom"], getScrollYOffset]];
var Rect = class {
  constructor(rect, element) {
    this.rect = void 0;
    this.width = void 0;
    this.height = void 0;
    this.top = void 0;
    this.bottom = void 0;
    this.right = void 0;
    this.left = void 0;
    const scrollableAncestors = getScrollableAncestors(element);
    const scrollOffsets = getScrollOffsets(scrollableAncestors);
    this.rect = {
      ...rect
    };
    this.width = rect.width;
    this.height = rect.height;
    for (const [axis, keys, getScrollOffset] of properties) {
      for (const key2 of keys) {
        Object.defineProperty(this, key2, {
          get: () => {
            const currentOffsets = getScrollOffset(scrollableAncestors);
            const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
            return this.rect[key2] + scrollOffsetsDeltla;
          },
          enumerable: true
        });
      }
    }
    Object.defineProperty(this, "rect", {
      enumerable: false
    });
  }
};
var Listeners = class {
  constructor(target) {
    this.target = void 0;
    this.listeners = [];
    this.removeAll = () => {
      this.listeners.forEach((listener) => {
        var _this$target;
        return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
      });
    };
    this.target = target;
  }
  add(eventName, handler, options) {
    var _this$target2;
    (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
    this.listeners.push([eventName, handler, options]);
  }
};
function getEventListenerTarget(target) {
  const {
    EventTarget
  } = getWindow2(target);
  return target instanceof EventTarget ? target : getOwnerDocument(target);
}
function hasExceededDistance(delta, measurement) {
  const dx = Math.abs(delta.x);
  const dy = Math.abs(delta.y);
  if (typeof measurement === "number") {
    return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
  }
  if ("x" in measurement && "y" in measurement) {
    return dx > measurement.x && dy > measurement.y;
  }
  if ("x" in measurement) {
    return dx > measurement.x;
  }
  if ("y" in measurement) {
    return dy > measurement.y;
  }
  return false;
}
var EventName;
(function(EventName2) {
  EventName2["Click"] = "click";
  EventName2["DragStart"] = "dragstart";
  EventName2["Keydown"] = "keydown";
  EventName2["ContextMenu"] = "contextmenu";
  EventName2["Resize"] = "resize";
  EventName2["SelectionChange"] = "selectionchange";
  EventName2["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));
function preventDefault(event) {
  event.preventDefault();
}
function stopPropagation(event) {
  event.stopPropagation();
}
var KeyboardCode;
(function(KeyboardCode2) {
  KeyboardCode2["Space"] = "Space";
  KeyboardCode2["Down"] = "ArrowDown";
  KeyboardCode2["Right"] = "ArrowRight";
  KeyboardCode2["Left"] = "ArrowLeft";
  KeyboardCode2["Up"] = "ArrowUp";
  KeyboardCode2["Esc"] = "Escape";
  KeyboardCode2["Enter"] = "Enter";
  KeyboardCode2["Tab"] = "Tab";
})(KeyboardCode || (KeyboardCode = {}));
var defaultKeyboardCodes = {
  start: [KeyboardCode.Space, KeyboardCode.Enter],
  cancel: [KeyboardCode.Esc],
  end: [KeyboardCode.Space, KeyboardCode.Enter, KeyboardCode.Tab]
};
var defaultKeyboardCoordinateGetter = (event, _ref) => {
  let {
    currentCoordinates
  } = _ref;
  switch (event.code) {
    case KeyboardCode.Right:
      return {
        ...currentCoordinates,
        x: currentCoordinates.x + 25
      };
    case KeyboardCode.Left:
      return {
        ...currentCoordinates,
        x: currentCoordinates.x - 25
      };
    case KeyboardCode.Down:
      return {
        ...currentCoordinates,
        y: currentCoordinates.y + 25
      };
    case KeyboardCode.Up:
      return {
        ...currentCoordinates,
        y: currentCoordinates.y - 25
      };
  }
  return void 0;
};
var KeyboardSensor = class {
  constructor(props) {
    this.props = void 0;
    this.autoScrollEnabled = false;
    this.referenceCoordinates = void 0;
    this.listeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    const {
      event: {
        target
      }
    } = props;
    this.props = props;
    this.listeners = new Listeners(getOwnerDocument(target));
    this.windowListeners = new Listeners(getWindow2(target));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.attach();
  }
  attach() {
    this.handleStart();
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode,
      onStart
    } = this.props;
    const node = activeNode.node.current;
    if (node) {
      scrollIntoViewIfNeeded(node);
    }
    onStart(defaultCoordinates);
  }
  handleKeyDown(event) {
    if (isKeyboardEvent(event)) {
      const {
        active,
        context,
        options
      } = this.props;
      const {
        keyboardCodes = defaultKeyboardCodes,
        coordinateGetter = defaultKeyboardCoordinateGetter,
        scrollBehavior = "smooth"
      } = options;
      const {
        code
      } = event;
      if (keyboardCodes.end.includes(code)) {
        this.handleEnd(event);
        return;
      }
      if (keyboardCodes.cancel.includes(code)) {
        this.handleCancel(event);
        return;
      }
      const {
        collisionRect
      } = context.current;
      const currentCoordinates = collisionRect ? {
        x: collisionRect.left,
        y: collisionRect.top
      } : defaultCoordinates;
      if (!this.referenceCoordinates) {
        this.referenceCoordinates = currentCoordinates;
      }
      const newCoordinates = coordinateGetter(event, {
        active,
        context: context.current,
        currentCoordinates
      });
      if (newCoordinates) {
        const coordinatesDelta = subtract(newCoordinates, currentCoordinates);
        const scrollDelta = {
          x: 0,
          y: 0
        };
        const {
          scrollableAncestors
        } = context.current;
        for (const scrollContainer of scrollableAncestors) {
          const direction = event.code;
          const {
            isTop,
            isRight,
            isLeft,
            isBottom,
            maxScroll,
            minScroll
          } = getScrollPosition(scrollContainer);
          const scrollElementRect = getScrollElementRect(scrollContainer);
          const clampedCoordinates = {
            x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
            y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
          };
          const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
          const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;
          if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
            const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
            const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;
            if (canScrollToNewCoordinates && !coordinatesDelta.y) {
              scrollContainer.scrollTo({
                left: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }
            if (canScrollToNewCoordinates) {
              scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
            } else {
              scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
            }
            if (scrollDelta.x) {
              scrollContainer.scrollBy({
                left: -scrollDelta.x,
                behavior: scrollBehavior
              });
            }
            break;
          } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
            const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
            const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;
            if (canScrollToNewCoordinates && !coordinatesDelta.x) {
              scrollContainer.scrollTo({
                top: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }
            if (canScrollToNewCoordinates) {
              scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
            } else {
              scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
            }
            if (scrollDelta.y) {
              scrollContainer.scrollBy({
                top: -scrollDelta.y,
                behavior: scrollBehavior
              });
            }
            break;
          }
        }
        this.handleMove(event, add(subtract(newCoordinates, this.referenceCoordinates), scrollDelta));
      }
    }
  }
  handleMove(event, coordinates) {
    const {
      onMove
    } = this.props;
    event.preventDefault();
    onMove(coordinates);
  }
  handleEnd(event) {
    const {
      onEnd
    } = this.props;
    event.preventDefault();
    this.detach();
    onEnd();
  }
  handleCancel(event) {
    const {
      onCancel
    } = this.props;
    event.preventDefault();
    this.detach();
    onCancel();
  }
  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
  }
};
KeyboardSensor.activators = [{
  eventName: "onKeyDown",
  handler: (event, _ref, _ref2) => {
    let {
      keyboardCodes = defaultKeyboardCodes,
      onActivation
    } = _ref;
    let {
      active
    } = _ref2;
    const {
      code
    } = event.nativeEvent;
    if (keyboardCodes.start.includes(code)) {
      const activator = active.activatorNode.current;
      if (activator && event.target !== activator) {
        return false;
      }
      event.preventDefault();
      onActivation == null ? void 0 : onActivation({
        event: event.nativeEvent
      });
      return true;
    }
    return false;
  }
}];
function isDistanceConstraint(constraint) {
  return Boolean(constraint && "distance" in constraint);
}
function isDelayConstraint(constraint) {
  return Boolean(constraint && "delay" in constraint);
}
var AbstractPointerSensor = class {
  constructor(props, events2, listenerTarget) {
    var _getEventCoordinates;
    if (listenerTarget === void 0) {
      listenerTarget = getEventListenerTarget(props.event.target);
    }
    this.props = void 0;
    this.events = void 0;
    this.autoScrollEnabled = true;
    this.document = void 0;
    this.activated = false;
    this.initialCoordinates = void 0;
    this.timeoutId = null;
    this.listeners = void 0;
    this.documentListeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    this.events = events2;
    const {
      event
    } = props;
    const {
      target
    } = event;
    this.props = props;
    this.events = events2;
    this.document = getOwnerDocument(target);
    this.documentListeners = new Listeners(this.document);
    this.listeners = new Listeners(listenerTarget);
    this.windowListeners = new Listeners(getWindow2(target));
    this.initialCoordinates = (_getEventCoordinates = getEventCoordinates(event)) != null ? _getEventCoordinates : defaultCoordinates;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }
  attach() {
    const {
      events: events2,
      props: {
        options: {
          activationConstraint,
          bypassActivationConstraint
        }
      }
    } = this;
    this.listeners.add(events2.move.name, this.handleMove, {
      passive: false
    });
    this.listeners.add(events2.end.name, this.handleEnd);
    if (events2.cancel) {
      this.listeners.add(events2.cancel.name, this.handleCancel);
    }
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.DragStart, preventDefault);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    this.windowListeners.add(EventName.ContextMenu, preventDefault);
    this.documentListeners.add(EventName.Keydown, this.handleKeydown);
    if (activationConstraint) {
      if (bypassActivationConstraint != null && bypassActivationConstraint({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      })) {
        return this.handleStart();
      }
      if (isDelayConstraint(activationConstraint)) {
        this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
        this.handlePending(activationConstraint);
        return;
      }
      if (isDistanceConstraint(activationConstraint)) {
        this.handlePending(activationConstraint);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
    setTimeout(this.documentListeners.removeAll, 50);
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
  handlePending(constraint, offset4) {
    const {
      active,
      onPending
    } = this.props;
    onPending(active, constraint, this.initialCoordinates, offset4);
  }
  handleStart() {
    const {
      initialCoordinates
    } = this;
    const {
      onStart
    } = this.props;
    if (initialCoordinates) {
      this.activated = true;
      this.documentListeners.add(EventName.Click, stopPropagation, {
        capture: true
      });
      this.removeTextSelection();
      this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
      onStart(initialCoordinates);
    }
  }
  handleMove(event) {
    var _getEventCoordinates2;
    const {
      activated,
      initialCoordinates,
      props
    } = this;
    const {
      onMove,
      options: {
        activationConstraint
      }
    } = props;
    if (!initialCoordinates) {
      return;
    }
    const coordinates = (_getEventCoordinates2 = getEventCoordinates(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
    const delta = subtract(initialCoordinates, coordinates);
    if (!activated && activationConstraint) {
      if (isDistanceConstraint(activationConstraint)) {
        if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }
        if (hasExceededDistance(delta, activationConstraint.distance)) {
          return this.handleStart();
        }
      }
      if (isDelayConstraint(activationConstraint)) {
        if (hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }
      }
      this.handlePending(activationConstraint, delta);
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    onMove(coordinates);
  }
  handleEnd() {
    const {
      onAbort,
      onEnd
    } = this.props;
    this.detach();
    if (!this.activated) {
      onAbort(this.props.active);
    }
    onEnd();
  }
  handleCancel() {
    const {
      onAbort,
      onCancel
    } = this.props;
    this.detach();
    if (!this.activated) {
      onAbort(this.props.active);
    }
    onCancel();
  }
  handleKeydown(event) {
    if (event.code === KeyboardCode.Esc) {
      this.handleCancel();
    }
  }
  removeTextSelection() {
    var _this$document$getSel;
    (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
  }
};
var events = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
var PointerSensor = class extends AbstractPointerSensor {
  constructor(props) {
    const {
      event
    } = props;
    const listenerTarget = getOwnerDocument(event.target);
    super(props, events, listenerTarget);
  }
};
PointerSensor.activators = [{
  eventName: "onPointerDown",
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    if (!event.isPrimary || event.button !== 0) {
      return false;
    }
    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];
var events$1 = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var MouseButton;
(function(MouseButton2) {
  MouseButton2[MouseButton2["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));
var MouseSensor = class extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$1, getOwnerDocument(props.event.target));
  }
};
MouseSensor.activators = [{
  eventName: "onMouseDown",
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    if (event.button === MouseButton.RightClick) {
      return false;
    }
    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];
var events$2 = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
var TouchSensor = class extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$2);
  }
  static setup() {
    window.addEventListener(events$2.move.name, noop5, {
      capture: false,
      passive: false
    });
    return function teardown() {
      window.removeEventListener(events$2.move.name, noop5);
    };
    function noop5() {
    }
  }
};
TouchSensor.activators = [{
  eventName: "onTouchStart",
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    const {
      touches
    } = event;
    if (touches.length > 1) {
      return false;
    }
    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];
var AutoScrollActivator;
(function(AutoScrollActivator2) {
  AutoScrollActivator2[AutoScrollActivator2["Pointer"] = 0] = "Pointer";
  AutoScrollActivator2[AutoScrollActivator2["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));
var TraversalOrder;
(function(TraversalOrder2) {
  TraversalOrder2[TraversalOrder2["TreeOrder"] = 0] = "TreeOrder";
  TraversalOrder2[TraversalOrder2["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));
function useAutoScroller(_ref) {
  let {
    acceleration,
    activator = AutoScrollActivator.Pointer,
    canScroll,
    draggingRect,
    enabled,
    interval = 5,
    order = TraversalOrder.TreeOrder,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects,
    delta,
    threshold
  } = _ref;
  const scrollIntent = useScrollIntent({
    delta,
    disabled: !enabled
  });
  const [setAutoScrollInterval, clearAutoScrollInterval] = useInterval();
  const scrollSpeed = (0, import_react17.useRef)({
    x: 0,
    y: 0
  });
  const scrollDirection = (0, import_react17.useRef)({
    x: 0,
    y: 0
  });
  const rect = (0, import_react17.useMemo)(() => {
    switch (activator) {
      case AutoScrollActivator.Pointer:
        return pointerCoordinates ? {
          top: pointerCoordinates.y,
          bottom: pointerCoordinates.y,
          left: pointerCoordinates.x,
          right: pointerCoordinates.x
        } : null;
      case AutoScrollActivator.DraggableRect:
        return draggingRect;
    }
  }, [activator, draggingRect, pointerCoordinates]);
  const scrollContainerRef = (0, import_react17.useRef)(null);
  const autoScroll = (0, import_react17.useCallback)(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      return;
    }
    const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
    const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
    scrollContainer.scrollBy(scrollLeft, scrollTop);
  }, []);
  const sortedScrollableAncestors = (0, import_react17.useMemo)(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
  (0, import_react17.useEffect)(
    () => {
      if (!enabled || !scrollableAncestors.length || !rect) {
        clearAutoScrollInterval();
        return;
      }
      for (const scrollContainer of sortedScrollableAncestors) {
        if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
          continue;
        }
        const index2 = scrollableAncestors.indexOf(scrollContainer);
        const scrollContainerRect = scrollableAncestorRects[index2];
        if (!scrollContainerRect) {
          continue;
        }
        const {
          direction,
          speed
        } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);
        for (const axis of ["x", "y"]) {
          if (!scrollIntent[axis][direction[axis]]) {
            speed[axis] = 0;
            direction[axis] = 0;
          }
        }
        if (speed.x > 0 || speed.y > 0) {
          clearAutoScrollInterval();
          scrollContainerRef.current = scrollContainer;
          setAutoScrollInterval(autoScroll, interval);
          scrollSpeed.current = speed;
          scrollDirection.current = direction;
          return;
        }
      }
      scrollSpeed.current = {
        x: 0,
        y: 0
      };
      scrollDirection.current = {
        x: 0,
        y: 0
      };
      clearAutoScrollInterval();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      acceleration,
      autoScroll,
      canScroll,
      clearAutoScrollInterval,
      enabled,
      interval,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(rect),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(scrollIntent),
      setAutoScrollInterval,
      scrollableAncestors,
      sortedScrollableAncestors,
      scrollableAncestorRects,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(threshold)
    ]
  );
}
var defaultScrollIntent = {
  x: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  },
  y: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  }
};
function useScrollIntent(_ref2) {
  let {
    delta,
    disabled: disabled2
  } = _ref2;
  const previousDelta = usePrevious(delta);
  return useLazyMemo((previousIntent) => {
    if (disabled2 || !previousDelta || !previousIntent) {
      return defaultScrollIntent;
    }
    const direction = {
      x: Math.sign(delta.x - previousDelta.x),
      y: Math.sign(delta.y - previousDelta.y)
    };
    return {
      x: {
        [Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
        [Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
      },
      y: {
        [Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
        [Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
      }
    };
  }, [disabled2, delta, previousDelta]);
}
function useCachedNode(draggableNodes, id) {
  const draggableNode = id != null ? draggableNodes.get(id) : void 0;
  const node = draggableNode ? draggableNode.node.current : null;
  return useLazyMemo((cachedNode) => {
    var _ref;
    if (id == null) {
      return null;
    }
    return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
  }, [node, id]);
}
function useCombineActivators(sensors, getSyntheticHandler) {
  return (0, import_react17.useMemo)(() => sensors.reduce((accumulator, sensor) => {
    const {
      sensor: Sensor
    } = sensor;
    const sensorActivators = Sensor.activators.map((activator) => ({
      eventName: activator.eventName,
      handler: getSyntheticHandler(activator.handler, sensor)
    }));
    return [...accumulator, ...sensorActivators];
  }, []), [sensors, getSyntheticHandler]);
}
var MeasuringStrategy;
(function(MeasuringStrategy2) {
  MeasuringStrategy2[MeasuringStrategy2["Always"] = 0] = "Always";
  MeasuringStrategy2[MeasuringStrategy2["BeforeDragging"] = 1] = "BeforeDragging";
  MeasuringStrategy2[MeasuringStrategy2["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));
var MeasuringFrequency;
(function(MeasuringFrequency2) {
  MeasuringFrequency2["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));
var defaultValue = /* @__PURE__ */ new Map();
function useDroppableMeasuring(containers, _ref) {
  let {
    dragging,
    dependencies,
    config
  } = _ref;
  const [queue, setQueue] = (0, import_react17.useState)(null);
  const {
    frequency,
    measure,
    strategy
  } = config;
  const containersRef = (0, import_react17.useRef)(containers);
  const disabled2 = isDisabled();
  const disabledRef = useLatestValue(disabled2);
  const measureDroppableContainers = (0, import_react17.useCallback)(function(ids2) {
    if (ids2 === void 0) {
      ids2 = [];
    }
    if (disabledRef.current) {
      return;
    }
    setQueue((value) => {
      if (value === null) {
        return ids2;
      }
      return value.concat(ids2.filter((id) => !value.includes(id)));
    });
  }, [disabledRef]);
  const timeoutId = (0, import_react17.useRef)(null);
  const droppableRects = useLazyMemo((previousValue) => {
    if (disabled2 && !dragging) {
      return defaultValue;
    }
    if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
      const map = /* @__PURE__ */ new Map();
      for (let container of containers) {
        if (!container) {
          continue;
        }
        if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
          map.set(container.id, container.rect.current);
          continue;
        }
        const node = container.node.current;
        const rect = node ? new Rect(measure(node), node) : null;
        container.rect.current = rect;
        if (rect) {
          map.set(container.id, rect);
        }
      }
      return map;
    }
    return previousValue;
  }, [containers, queue, dragging, disabled2, measure]);
  (0, import_react17.useEffect)(() => {
    containersRef.current = containers;
  }, [containers]);
  (0, import_react17.useEffect)(
    () => {
      if (disabled2) {
        return;
      }
      measureDroppableContainers();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dragging, disabled2]
  );
  (0, import_react17.useEffect)(
    () => {
      if (queue && queue.length > 0) {
        setQueue(null);
      }
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(queue)]
  );
  (0, import_react17.useEffect)(
    () => {
      if (disabled2 || typeof frequency !== "number" || timeoutId.current !== null) {
        return;
      }
      timeoutId.current = setTimeout(() => {
        measureDroppableContainers();
        timeoutId.current = null;
      }, frequency);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [frequency, disabled2, measureDroppableContainers, ...dependencies]
  );
  return {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled: queue != null
  };
  function isDisabled() {
    switch (strategy) {
      case MeasuringStrategy.Always:
        return false;
      case MeasuringStrategy.BeforeDragging:
        return dragging;
      default:
        return !dragging;
    }
  }
}
function useInitialValue(value, computeFn) {
  return useLazyMemo((previousValue) => {
    if (!value) {
      return null;
    }
    if (previousValue) {
      return previousValue;
    }
    return typeof computeFn === "function" ? computeFn(value) : value;
  }, [computeFn, value]);
}
function useInitialRect(node, measure) {
  return useInitialValue(node, measure);
}
function useMutationObserver(_ref) {
  let {
    callback,
    disabled: disabled2
  } = _ref;
  const handleMutations = useEvent(callback);
  const mutationObserver = (0, import_react17.useMemo)(() => {
    if (disabled2 || typeof window === "undefined" || typeof window.MutationObserver === "undefined") {
      return void 0;
    }
    const {
      MutationObserver: MutationObserver2
    } = window;
    return new MutationObserver2(handleMutations);
  }, [handleMutations, disabled2]);
  (0, import_react17.useEffect)(() => {
    return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
  }, [mutationObserver]);
  return mutationObserver;
}
function useResizeObserver(_ref) {
  let {
    callback,
    disabled: disabled2
  } = _ref;
  const handleResize = useEvent(callback);
  const resizeObserver = (0, import_react17.useMemo)(
    () => {
      if (disabled2 || typeof window === "undefined" || typeof window.ResizeObserver === "undefined") {
        return void 0;
      }
      const {
        ResizeObserver: ResizeObserver2
      } = window;
      return new ResizeObserver2(handleResize);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled2]
  );
  (0, import_react17.useEffect)(() => {
    return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
  }, [resizeObserver]);
  return resizeObserver;
}
function defaultMeasure(element) {
  return new Rect(getClientRect(element), element);
}
function useRect(element, measure, fallbackRect) {
  if (measure === void 0) {
    measure = defaultMeasure;
  }
  const [rect, setRect] = (0, import_react17.useState)(null);
  function measureRect() {
    setRect((currentRect) => {
      if (!element) {
        return null;
      }
      if (element.isConnected === false) {
        var _ref;
        return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
      }
      const newRect = measure(element);
      if (JSON.stringify(currentRect) === JSON.stringify(newRect)) {
        return currentRect;
      }
      return newRect;
    });
  }
  const mutationObserver = useMutationObserver({
    callback(records) {
      if (!element) {
        return;
      }
      for (const record of records) {
        const {
          type,
          target
        } = record;
        if (type === "childList" && target instanceof HTMLElement && target.contains(element)) {
          measureRect();
          break;
        }
      }
    }
  });
  const resizeObserver = useResizeObserver({
    callback: measureRect
  });
  useIsomorphicLayoutEffect(() => {
    measureRect();
    if (element) {
      resizeObserver == null ? void 0 : resizeObserver.observe(element);
      mutationObserver == null ? void 0 : mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    } else {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      mutationObserver == null ? void 0 : mutationObserver.disconnect();
    }
  }, [element]);
  return rect;
}
function useRectDelta(rect) {
  const initialRect = useInitialValue(rect);
  return getRectDelta(rect, initialRect);
}
var defaultValue$1 = [];
function useScrollableAncestors(node) {
  const previousNode = (0, import_react17.useRef)(node);
  const ancestors = useLazyMemo((previousValue) => {
    if (!node) {
      return defaultValue$1;
    }
    if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
      return previousValue;
    }
    return getScrollableAncestors(node);
  }, [node]);
  (0, import_react17.useEffect)(() => {
    previousNode.current = node;
  }, [node]);
  return ancestors;
}
function useScrollOffsets(elements) {
  const [scrollCoordinates, setScrollCoordinates] = (0, import_react17.useState)(null);
  const prevElements = (0, import_react17.useRef)(elements);
  const handleScroll = (0, import_react17.useCallback)((event) => {
    const scrollingElement = getScrollableElement(event.target);
    if (!scrollingElement) {
      return;
    }
    setScrollCoordinates((scrollCoordinates2) => {
      if (!scrollCoordinates2) {
        return null;
      }
      scrollCoordinates2.set(scrollingElement, getScrollCoordinates(scrollingElement));
      return new Map(scrollCoordinates2);
    });
  }, []);
  (0, import_react17.useEffect)(() => {
    const previousElements = prevElements.current;
    if (elements !== previousElements) {
      cleanup(previousElements);
      const entries = elements.map((element) => {
        const scrollableElement = getScrollableElement(element);
        if (scrollableElement) {
          scrollableElement.addEventListener("scroll", handleScroll, {
            passive: true
          });
          return [scrollableElement, getScrollCoordinates(scrollableElement)];
        }
        return null;
      }).filter((entry) => entry != null);
      setScrollCoordinates(entries.length ? new Map(entries) : null);
      prevElements.current = elements;
    }
    return () => {
      cleanup(elements);
      cleanup(previousElements);
    };
    function cleanup(elements2) {
      elements2.forEach((element) => {
        const scrollableElement = getScrollableElement(element);
        scrollableElement == null ? void 0 : scrollableElement.removeEventListener("scroll", handleScroll);
      });
    }
  }, [handleScroll, elements]);
  return (0, import_react17.useMemo)(() => {
    if (elements.length) {
      return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => add(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
    }
    return defaultCoordinates;
  }, [elements, scrollCoordinates]);
}
function useScrollOffsetsDelta(scrollOffsets, dependencies) {
  if (dependencies === void 0) {
    dependencies = [];
  }
  const initialScrollOffsets = (0, import_react17.useRef)(null);
  (0, import_react17.useEffect)(
    () => {
      initialScrollOffsets.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );
  (0, import_react17.useEffect)(() => {
    const hasScrollOffsets = scrollOffsets !== defaultCoordinates;
    if (hasScrollOffsets && !initialScrollOffsets.current) {
      initialScrollOffsets.current = scrollOffsets;
    }
    if (!hasScrollOffsets && initialScrollOffsets.current) {
      initialScrollOffsets.current = null;
    }
  }, [scrollOffsets]);
  return initialScrollOffsets.current ? subtract(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}
function useSensorSetup(sensors) {
  (0, import_react17.useEffect)(
    () => {
      if (!canUseDOM) {
        return;
      }
      const teardownFns = sensors.map((_ref) => {
        let {
          sensor
        } = _ref;
        return sensor.setup == null ? void 0 : sensor.setup();
      });
      return () => {
        for (const teardown of teardownFns) {
          teardown == null ? void 0 : teardown();
        }
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sensors.map((_ref2) => {
      let {
        sensor
      } = _ref2;
      return sensor;
    })
  );
}
function useSyntheticListeners(listeners, id) {
  return (0, import_react17.useMemo)(() => {
    return listeners.reduce((acc, _ref) => {
      let {
        eventName,
        handler
      } = _ref;
      acc[eventName] = (event) => {
        handler(event, id);
      };
      return acc;
    }, {});
  }, [listeners, id]);
}
function useWindowRect(element) {
  return (0, import_react17.useMemo)(() => element ? getWindowClientRect(element) : null, [element]);
}
var defaultValue$2 = [];
function useRects(elements, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }
  const [firstElement] = elements;
  const windowRect = useWindowRect(firstElement ? getWindow2(firstElement) : null);
  const [rects, setRects] = (0, import_react17.useState)(defaultValue$2);
  function measureRects() {
    setRects(() => {
      if (!elements.length) {
        return defaultValue$2;
      }
      return elements.map((element) => isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
    });
  }
  const resizeObserver = useResizeObserver({
    callback: measureRects
  });
  useIsomorphicLayoutEffect(() => {
    resizeObserver == null ? void 0 : resizeObserver.disconnect();
    measureRects();
    elements.forEach((element) => resizeObserver == null ? void 0 : resizeObserver.observe(element));
  }, [elements]);
  return rects;
}
function getMeasurableNode(node) {
  if (!node) {
    return null;
  }
  if (node.children.length > 1) {
    return node;
  }
  const firstChild = node.children[0];
  return isHTMLElement2(firstChild) ? firstChild : node;
}
function useDragOverlayMeasuring(_ref) {
  let {
    measure
  } = _ref;
  const [rect, setRect] = (0, import_react17.useState)(null);
  const handleResize = (0, import_react17.useCallback)((entries) => {
    for (const {
      target
    } of entries) {
      if (isHTMLElement2(target)) {
        setRect((rect2) => {
          const newRect = measure(target);
          return rect2 ? {
            ...rect2,
            width: newRect.width,
            height: newRect.height
          } : newRect;
        });
        break;
      }
    }
  }, [measure]);
  const resizeObserver = useResizeObserver({
    callback: handleResize
  });
  const handleNodeChange = (0, import_react17.useCallback)((element) => {
    const node = getMeasurableNode(element);
    resizeObserver == null ? void 0 : resizeObserver.disconnect();
    if (node) {
      resizeObserver == null ? void 0 : resizeObserver.observe(node);
    }
    setRect(node ? measure(node) : null);
  }, [measure, resizeObserver]);
  const [nodeRef, setRef] = useNodeRef(handleNodeChange);
  return (0, import_react17.useMemo)(() => ({
    nodeRef,
    rect,
    setRef
  }), [rect, nodeRef, setRef]);
}
var defaultSensors = [{
  sensor: PointerSensor,
  options: {}
}, {
  sensor: KeyboardSensor,
  options: {}
}];
var defaultData = {
  current: {}
};
var defaultMeasuringConfiguration = {
  draggable: {
    measure: getTransformAgnosticClientRect
  },
  droppable: {
    measure: getTransformAgnosticClientRect,
    strategy: MeasuringStrategy.WhileDragging,
    frequency: MeasuringFrequency.Optimized
  },
  dragOverlay: {
    measure: getClientRect
  }
};
var DroppableContainersMap = class extends Map {
  get(id) {
    var _super$get;
    return id != null ? (_super$get = super.get(id)) != null ? _super$get : void 0 : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((_ref) => {
      let {
        disabled: disabled2
      } = _ref;
      return !disabled2;
    });
  }
  getNodeFor(id) {
    var _this$get$node$curren, _this$get;
    return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : void 0;
  }
};
var defaultPublicContext = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new DroppableContainersMap(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: noop4
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: defaultMeasuringConfiguration,
  measureDroppableContainers: noop4,
  windowRect: null,
  measuringScheduled: false
};
var defaultInternalContext = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: noop4,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: noop4
};
var InternalContext = /* @__PURE__ */ (0, import_react17.createContext)(defaultInternalContext);
var PublicContext = /* @__PURE__ */ (0, import_react17.createContext)(defaultPublicContext);
function getInitialState() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new DroppableContainersMap()
    }
  };
}
function reducer(state, action) {
  switch (action.type) {
    case Action.DragStart:
      return {
        ...state,
        draggable: {
          ...state.draggable,
          initialCoordinates: action.initialCoordinates,
          active: action.active
        }
      };
    case Action.DragMove:
      if (state.draggable.active == null) {
        return state;
      }
      return {
        ...state,
        draggable: {
          ...state.draggable,
          translate: {
            x: action.coordinates.x - state.draggable.initialCoordinates.x,
            y: action.coordinates.y - state.draggable.initialCoordinates.y
          }
        }
      };
    case Action.DragEnd:
    case Action.DragCancel:
      return {
        ...state,
        draggable: {
          ...state.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case Action.RegisterDroppable: {
      const {
        element
      } = action;
      const {
        id
      } = element;
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.set(id, element);
      return {
        ...state,
        droppable: {
          ...state.droppable,
          containers
        }
      };
    }
    case Action.SetDroppableDisabled: {
      const {
        id,
        key: key2,
        disabled: disabled2
      } = action;
      const element = state.droppable.containers.get(id);
      if (!element || key2 !== element.key) {
        return state;
      }
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.set(id, {
        ...element,
        disabled: disabled2
      });
      return {
        ...state,
        droppable: {
          ...state.droppable,
          containers
        }
      };
    }
    case Action.UnregisterDroppable: {
      const {
        id,
        key: key2
      } = action;
      const element = state.droppable.containers.get(id);
      if (!element || key2 !== element.key) {
        return state;
      }
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.delete(id);
      return {
        ...state,
        droppable: {
          ...state.droppable,
          containers
        }
      };
    }
    default: {
      return state;
    }
  }
}
function RestoreFocus(_ref) {
  let {
    disabled: disabled2
  } = _ref;
  const {
    active,
    activatorEvent,
    draggableNodes
  } = (0, import_react17.useContext)(InternalContext);
  const previousActivatorEvent = usePrevious(activatorEvent);
  const previousActiveId = usePrevious(active == null ? void 0 : active.id);
  (0, import_react17.useEffect)(() => {
    if (disabled2) {
      return;
    }
    if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
      if (!isKeyboardEvent(previousActivatorEvent)) {
        return;
      }
      if (document.activeElement === previousActivatorEvent.target) {
        return;
      }
      const draggableNode = draggableNodes.get(previousActiveId);
      if (!draggableNode) {
        return;
      }
      const {
        activatorNode,
        node
      } = draggableNode;
      if (!activatorNode.current && !node.current) {
        return;
      }
      requestAnimationFrame(() => {
        for (const element of [activatorNode.current, node.current]) {
          if (!element) {
            continue;
          }
          const focusableNode = findFirstFocusableNode(element);
          if (focusableNode) {
            focusableNode.focus();
            break;
          }
        }
      });
    }
  }, [activatorEvent, disabled2, draggableNodes, previousActiveId, previousActivatorEvent]);
  return null;
}
function applyModifiers(modifiers, _ref) {
  let {
    transform,
    ...args
  } = _ref;
  return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
    return modifier({
      transform: accumulator,
      ...args
    });
  }, transform) : transform;
}
function useMeasuringConfiguration(config) {
  return (0, import_react17.useMemo)(
    () => ({
      draggable: {
        ...defaultMeasuringConfiguration.draggable,
        ...config == null ? void 0 : config.draggable
      },
      droppable: {
        ...defaultMeasuringConfiguration.droppable,
        ...config == null ? void 0 : config.droppable
      },
      dragOverlay: {
        ...defaultMeasuringConfiguration.dragOverlay,
        ...config == null ? void 0 : config.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [config == null ? void 0 : config.draggable, config == null ? void 0 : config.droppable, config == null ? void 0 : config.dragOverlay]
  );
}
function useLayoutShiftScrollCompensation(_ref) {
  let {
    activeNode,
    measure,
    initialRect,
    config = true
  } = _ref;
  const initialized = (0, import_react17.useRef)(false);
  const {
    x,
    y
  } = typeof config === "boolean" ? {
    x: config,
    y: config
  } : config;
  useIsomorphicLayoutEffect(() => {
    const disabled2 = !x && !y;
    if (disabled2 || !activeNode) {
      initialized.current = false;
      return;
    }
    if (initialized.current || !initialRect) {
      return;
    }
    const node = activeNode == null ? void 0 : activeNode.node.current;
    if (!node || node.isConnected === false) {
      return;
    }
    const rect = measure(node);
    const rectDelta = getRectDelta(rect, initialRect);
    if (!x) {
      rectDelta.x = 0;
    }
    if (!y) {
      rectDelta.y = 0;
    }
    initialized.current = true;
    if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
      const firstScrollableAncestor = getFirstScrollableAncestor(node);
      if (firstScrollableAncestor) {
        firstScrollableAncestor.scrollBy({
          top: rectDelta.y,
          left: rectDelta.x
        });
      }
    }
  }, [activeNode, x, y, initialRect, measure]);
}
var ActiveDraggableContext = /* @__PURE__ */ (0, import_react17.createContext)({
  ...defaultCoordinates,
  scaleX: 1,
  scaleY: 1
});
var Status;
(function(Status2) {
  Status2[Status2["Uninitialized"] = 0] = "Uninitialized";
  Status2[Status2["Initializing"] = 1] = "Initializing";
  Status2[Status2["Initialized"] = 2] = "Initialized";
})(Status || (Status = {}));
var DndContext = /* @__PURE__ */ (0, import_react17.memo)(function DndContext2(_ref) {
  var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;
  let {
    id,
    accessibility,
    autoScroll = true,
    children,
    sensors = defaultSensors,
    collisionDetection = rectIntersection,
    measuring,
    modifiers,
    ...props
  } = _ref;
  const store = (0, import_react17.useReducer)(reducer, void 0, getInitialState);
  const [state, dispatch2] = store;
  const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
  const [status, setStatus] = (0, import_react17.useState)(Status.Uninitialized);
  const isInitialized = status === Status.Initialized;
  const {
    draggable: {
      active: activeId,
      nodes: draggableNodes,
      translate
    },
    droppable: {
      containers: droppableContainers
    }
  } = state;
  const node = activeId != null ? draggableNodes.get(activeId) : null;
  const activeRects = (0, import_react17.useRef)({
    initial: null,
    translated: null
  });
  const active = (0, import_react17.useMemo)(() => {
    var _node$data;
    return activeId != null ? {
      id: activeId,
      // It's possible for the active node to unmount while dragging
      data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
      rect: activeRects
    } : null;
  }, [activeId, node]);
  const activeRef = (0, import_react17.useRef)(null);
  const [activeSensor, setActiveSensor] = (0, import_react17.useState)(null);
  const [activatorEvent, setActivatorEvent] = (0, import_react17.useState)(null);
  const latestProps = useLatestValue(props, Object.values(props));
  const draggableDescribedById = useUniqueId("DndDescribedBy", id);
  const enabledDroppableContainers = (0, import_react17.useMemo)(() => droppableContainers.getEnabled(), [droppableContainers]);
  const measuringConfiguration = useMeasuringConfiguration(measuring);
  const {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled
  } = useDroppableMeasuring(enabledDroppableContainers, {
    dragging: isInitialized,
    dependencies: [translate.x, translate.y],
    config: measuringConfiguration.droppable
  });
  const activeNode = useCachedNode(draggableNodes, activeId);
  const activationCoordinates = (0, import_react17.useMemo)(() => activatorEvent ? getEventCoordinates(activatorEvent) : null, [activatorEvent]);
  const autoScrollOptions = getAutoScrollerOptions();
  const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
  useLayoutShiftScrollCompensation({
    activeNode: activeId != null ? draggableNodes.get(activeId) : null,
    config: autoScrollOptions.layoutShiftCompensation,
    initialRect: initialActiveNodeRect,
    measure: measuringConfiguration.draggable.measure
  });
  const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
  const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
  const sensorContext = (0, import_react17.useRef)({
    activatorEvent: null,
    active: null,
    activeNode,
    collisionRect: null,
    collisions: null,
    droppableRects,
    draggableNodes,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  });
  const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
  const dragOverlay = useDragOverlayMeasuring({
    measure: measuringConfiguration.dragOverlay.measure
  });
  const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
  const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
  const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect);
  const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect);
  const windowRect = useWindowRect(draggingNode ? getWindow2(draggingNode) : null);
  const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
  const scrollableAncestorRects = useRects(scrollableAncestors);
  const modifiedTranslate = applyModifiers(modifiers, {
    transform: {
      x: translate.x - nodeRectDelta.x,
      y: translate.y - nodeRectDelta.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect,
    over: sensorContext.current.over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  });
  const pointerCoordinates = activationCoordinates ? add(activationCoordinates, translate) : null;
  const scrollOffsets = useScrollOffsets(scrollableAncestors);
  const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets);
  const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
  const scrollAdjustedTranslate = add(modifiedTranslate, scrollAdjustment);
  const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
  const collisions = active && collisionRect ? collisionDetection({
    active,
    collisionRect,
    droppableRects,
    droppableContainers: enabledDroppableContainers,
    pointerCoordinates
  }) : null;
  const overId = getFirstCollision(collisions, "id");
  const [over, setOver] = (0, import_react17.useState)(null);
  const appliedTranslate = usesDragOverlay ? modifiedTranslate : add(modifiedTranslate, activeNodeScrollDelta);
  const transform = adjustScale(appliedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
  const activeSensorRef = (0, import_react17.useRef)(null);
  const instantiateSensor = (0, import_react17.useCallback)(
    (event, _ref2) => {
      let {
        sensor: Sensor,
        options
      } = _ref2;
      if (activeRef.current == null) {
        return;
      }
      const activeNode2 = draggableNodes.get(activeRef.current);
      if (!activeNode2) {
        return;
      }
      const activatorEvent2 = event.nativeEvent;
      const sensorInstance = new Sensor({
        active: activeRef.current,
        activeNode: activeNode2,
        event: activatorEvent2,
        options,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: sensorContext,
        onAbort(id2) {
          const draggableNode = draggableNodes.get(id2);
          if (!draggableNode) {
            return;
          }
          const {
            onDragAbort
          } = latestProps.current;
          const event2 = {
            id: id2
          };
          onDragAbort == null ? void 0 : onDragAbort(event2);
          dispatchMonitorEvent({
            type: "onDragAbort",
            event: event2
          });
        },
        onPending(id2, constraint, initialCoordinates, offset4) {
          const draggableNode = draggableNodes.get(id2);
          if (!draggableNode) {
            return;
          }
          const {
            onDragPending
          } = latestProps.current;
          const event2 = {
            id: id2,
            constraint,
            initialCoordinates,
            offset: offset4
          };
          onDragPending == null ? void 0 : onDragPending(event2);
          dispatchMonitorEvent({
            type: "onDragPending",
            event: event2
          });
        },
        onStart(initialCoordinates) {
          const id2 = activeRef.current;
          if (id2 == null) {
            return;
          }
          const draggableNode = draggableNodes.get(id2);
          if (!draggableNode) {
            return;
          }
          const {
            onDragStart
          } = latestProps.current;
          const event2 = {
            activatorEvent: activatorEvent2,
            active: {
              id: id2,
              data: draggableNode.data,
              rect: activeRects
            }
          };
          (0, import_react_dom4.unstable_batchedUpdates)(() => {
            onDragStart == null ? void 0 : onDragStart(event2);
            setStatus(Status.Initializing);
            dispatch2({
              type: Action.DragStart,
              initialCoordinates,
              active: id2
            });
            dispatchMonitorEvent({
              type: "onDragStart",
              event: event2
            });
            setActiveSensor(activeSensorRef.current);
            setActivatorEvent(activatorEvent2);
          });
        },
        onMove(coordinates) {
          dispatch2({
            type: Action.DragMove,
            coordinates
          });
        },
        onEnd: createHandler(Action.DragEnd),
        onCancel: createHandler(Action.DragCancel)
      });
      activeSensorRef.current = sensorInstance;
      function createHandler(type) {
        return async function handler() {
          const {
            active: active2,
            collisions: collisions2,
            over: over2,
            scrollAdjustedTranslate: scrollAdjustedTranslate2
          } = sensorContext.current;
          let event2 = null;
          if (active2 && scrollAdjustedTranslate2) {
            const {
              cancelDrop
            } = latestProps.current;
            event2 = {
              activatorEvent: activatorEvent2,
              active: active2,
              collisions: collisions2,
              delta: scrollAdjustedTranslate2,
              over: over2
            };
            if (type === Action.DragEnd && typeof cancelDrop === "function") {
              const shouldCancel = await Promise.resolve(cancelDrop(event2));
              if (shouldCancel) {
                type = Action.DragCancel;
              }
            }
          }
          activeRef.current = null;
          (0, import_react_dom4.unstable_batchedUpdates)(() => {
            dispatch2({
              type
            });
            setStatus(Status.Uninitialized);
            setOver(null);
            setActiveSensor(null);
            setActivatorEvent(null);
            activeSensorRef.current = null;
            const eventName = type === Action.DragEnd ? "onDragEnd" : "onDragCancel";
            if (event2) {
              const handler2 = latestProps.current[eventName];
              handler2 == null ? void 0 : handler2(event2);
              dispatchMonitorEvent({
                type: eventName,
                event: event2
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [draggableNodes]
  );
  const bindActivatorToSensorInstantiator = (0, import_react17.useCallback)((handler, sensor) => {
    return (event, active2) => {
      const nativeEvent = event.nativeEvent;
      const activeDraggableNode = draggableNodes.get(active2);
      if (
        // Another sensor is already instantiating
        activeRef.current !== null || // No active draggable
        !activeDraggableNode || // Event has already been captured
        nativeEvent.dndKit || nativeEvent.defaultPrevented
      ) {
        return;
      }
      const activationContext = {
        active: activeDraggableNode
      };
      const shouldActivate = handler(event, sensor.options, activationContext);
      if (shouldActivate === true) {
        nativeEvent.dndKit = {
          capturedBy: sensor.sensor
        };
        activeRef.current = active2;
        instantiateSensor(event, sensor);
      }
    };
  }, [draggableNodes, instantiateSensor]);
  const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
  useSensorSetup(sensors);
  useIsomorphicLayoutEffect(() => {
    if (activeNodeRect && status === Status.Initializing) {
      setStatus(Status.Initialized);
    }
  }, [activeNodeRect, status]);
  (0, import_react17.useEffect)(
    () => {
      const {
        onDragMove
      } = latestProps.current;
      const {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        over: over2
      } = sensorContext.current;
      if (!active2 || !activatorEvent2) {
        return;
      }
      const event = {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        delta: {
          x: scrollAdjustedTranslate.x,
          y: scrollAdjustedTranslate.y
        },
        over: over2
      };
      (0, import_react_dom4.unstable_batchedUpdates)(() => {
        onDragMove == null ? void 0 : onDragMove(event);
        dispatchMonitorEvent({
          type: "onDragMove",
          event
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]
  );
  (0, import_react17.useEffect)(
    () => {
      const {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        droppableContainers: droppableContainers2,
        scrollAdjustedTranslate: scrollAdjustedTranslate2
      } = sensorContext.current;
      if (!active2 || activeRef.current == null || !activatorEvent2 || !scrollAdjustedTranslate2) {
        return;
      }
      const {
        onDragOver
      } = latestProps.current;
      const overContainer = droppableContainers2.get(overId);
      const over2 = overContainer && overContainer.rect.current ? {
        id: overContainer.id,
        rect: overContainer.rect.current,
        data: overContainer.data,
        disabled: overContainer.disabled
      } : null;
      const event = {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        delta: {
          x: scrollAdjustedTranslate2.x,
          y: scrollAdjustedTranslate2.y
        },
        over: over2
      };
      (0, import_react_dom4.unstable_batchedUpdates)(() => {
        setOver(over2);
        onDragOver == null ? void 0 : onDragOver(event);
        dispatchMonitorEvent({
          type: "onDragOver",
          event
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [overId]
  );
  useIsomorphicLayoutEffect(() => {
    sensorContext.current = {
      activatorEvent,
      active,
      activeNode,
      collisionRect,
      collisions,
      droppableRects,
      draggableNodes,
      draggingNode,
      draggingNodeRect,
      droppableContainers,
      over,
      scrollableAncestors,
      scrollAdjustedTranslate
    };
    activeRects.current = {
      initial: draggingNodeRect,
      translated: collisionRect
    };
  }, [active, activeNode, collisions, collisionRect, draggableNodes, draggingNode, draggingNodeRect, droppableRects, droppableContainers, over, scrollableAncestors, scrollAdjustedTranslate]);
  useAutoScroller({
    ...autoScrollOptions,
    delta: translate,
    draggingRect: collisionRect,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects
  });
  const publicContext = (0, import_react17.useMemo)(() => {
    const context = {
      active,
      activeNode,
      activeNodeRect,
      activatorEvent,
      collisions,
      containerNodeRect,
      dragOverlay,
      draggableNodes,
      droppableContainers,
      droppableRects,
      over,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      measuringConfiguration,
      measuringScheduled,
      windowRect
    };
    return context;
  }, [active, activeNode, activeNodeRect, activatorEvent, collisions, containerNodeRect, dragOverlay, draggableNodes, droppableContainers, droppableRects, over, measureDroppableContainers, scrollableAncestors, scrollableAncestorRects, measuringConfiguration, measuringScheduled, windowRect]);
  const internalContext = (0, import_react17.useMemo)(() => {
    const context = {
      activatorEvent,
      activators,
      active,
      activeNodeRect,
      ariaDescribedById: {
        draggable: draggableDescribedById
      },
      dispatch: dispatch2,
      draggableNodes,
      over,
      measureDroppableContainers
    };
    return context;
  }, [activatorEvent, activators, active, activeNodeRect, dispatch2, draggableDescribedById, draggableNodes, over, measureDroppableContainers]);
  return import_react17.default.createElement(DndMonitorContext.Provider, {
    value: registerMonitorListener
  }, import_react17.default.createElement(InternalContext.Provider, {
    value: internalContext
  }, import_react17.default.createElement(PublicContext.Provider, {
    value: publicContext
  }, import_react17.default.createElement(ActiveDraggableContext.Provider, {
    value: transform
  }, children)), import_react17.default.createElement(RestoreFocus, {
    disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false
  })), import_react17.default.createElement(Accessibility, {
    ...accessibility,
    hiddenTextDescribedById: draggableDescribedById
  }));
  function getAutoScrollerOptions() {
    const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
    const autoScrollGloballyDisabled = typeof autoScroll === "object" ? autoScroll.enabled === false : autoScroll === false;
    const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;
    if (typeof autoScroll === "object") {
      return {
        ...autoScroll,
        enabled
      };
    }
    return {
      enabled
    };
  }
});
var NullContext = /* @__PURE__ */ (0, import_react17.createContext)(null);
var defaultRole = "button";
var ID_PREFIX = "Draggable";
function useDraggable(_ref) {
  let {
    id,
    data,
    disabled: disabled2 = false,
    attributes
  } = _ref;
  const key2 = useUniqueId(ID_PREFIX);
  const {
    activators,
    activatorEvent,
    active,
    activeNodeRect,
    ariaDescribedById,
    draggableNodes,
    over
  } = (0, import_react17.useContext)(InternalContext);
  const {
    role = defaultRole,
    roleDescription = "draggable",
    tabIndex = 0
  } = attributes != null ? attributes : {};
  const isDragging = (active == null ? void 0 : active.id) === id;
  const transform = (0, import_react17.useContext)(isDragging ? ActiveDraggableContext : NullContext);
  const [node, setNodeRef] = useNodeRef();
  const [activatorNode, setActivatorNodeRef] = useNodeRef();
  const listeners = useSyntheticListeners(activators, id);
  const dataRef = useLatestValue(data);
  useIsomorphicLayoutEffect(
    () => {
      draggableNodes.set(id, {
        id,
        key: key2,
        node,
        activatorNode,
        data: dataRef
      });
      return () => {
        const node2 = draggableNodes.get(id);
        if (node2 && node2.key === key2) {
          draggableNodes.delete(id);
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [draggableNodes, id]
  );
  const memoizedAttributes = (0, import_react17.useMemo)(() => ({
    role,
    tabIndex,
    "aria-disabled": disabled2,
    "aria-pressed": isDragging && role === defaultRole ? true : void 0,
    "aria-roledescription": roleDescription,
    "aria-describedby": ariaDescribedById.draggable
  }), [disabled2, role, tabIndex, isDragging, roleDescription, ariaDescribedById.draggable]);
  return {
    active,
    activatorEvent,
    activeNodeRect,
    attributes: memoizedAttributes,
    isDragging,
    listeners: disabled2 ? void 0 : listeners,
    node,
    over,
    setNodeRef,
    setActivatorNodeRef,
    transform
  };
}
function useDndContext() {
  return (0, import_react17.useContext)(PublicContext);
}
var ID_PREFIX$1 = "Droppable";
var defaultResizeObserverConfig = {
  timeout: 25
};
function useDroppable(_ref) {
  let {
    data,
    disabled: disabled2 = false,
    id,
    resizeObserverConfig
  } = _ref;
  const key2 = useUniqueId(ID_PREFIX$1);
  const {
    active,
    dispatch: dispatch2,
    over,
    measureDroppableContainers
  } = (0, import_react17.useContext)(InternalContext);
  const previous = (0, import_react17.useRef)({
    disabled: disabled2
  });
  const resizeObserverConnected = (0, import_react17.useRef)(false);
  const rect = (0, import_react17.useRef)(null);
  const callbackId = (0, import_react17.useRef)(null);
  const {
    disabled: resizeObserverDisabled,
    updateMeasurementsFor,
    timeout: resizeObserverTimeout
  } = {
    ...defaultResizeObserverConfig,
    ...resizeObserverConfig
  };
  const ids2 = useLatestValue(updateMeasurementsFor != null ? updateMeasurementsFor : id);
  const handleResize = (0, import_react17.useCallback)(
    () => {
      if (!resizeObserverConnected.current) {
        resizeObserverConnected.current = true;
        return;
      }
      if (callbackId.current != null) {
        clearTimeout(callbackId.current);
      }
      callbackId.current = setTimeout(() => {
        measureDroppableContainers(Array.isArray(ids2.current) ? ids2.current : [ids2.current]);
        callbackId.current = null;
      }, resizeObserverTimeout);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [resizeObserverTimeout]
  );
  const resizeObserver = useResizeObserver({
    callback: handleResize,
    disabled: resizeObserverDisabled || !active
  });
  const handleNodeChange = (0, import_react17.useCallback)((newElement, previousElement) => {
    if (!resizeObserver) {
      return;
    }
    if (previousElement) {
      resizeObserver.unobserve(previousElement);
      resizeObserverConnected.current = false;
    }
    if (newElement) {
      resizeObserver.observe(newElement);
    }
  }, [resizeObserver]);
  const [nodeRef, setNodeRef] = useNodeRef(handleNodeChange);
  const dataRef = useLatestValue(data);
  (0, import_react17.useEffect)(() => {
    if (!resizeObserver || !nodeRef.current) {
      return;
    }
    resizeObserver.disconnect();
    resizeObserverConnected.current = false;
    resizeObserver.observe(nodeRef.current);
  }, [nodeRef, resizeObserver]);
  (0, import_react17.useEffect)(
    () => {
      dispatch2({
        type: Action.RegisterDroppable,
        element: {
          id,
          key: key2,
          disabled: disabled2,
          node: nodeRef,
          rect,
          data: dataRef
        }
      });
      return () => dispatch2({
        type: Action.UnregisterDroppable,
        key: key2,
        id
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );
  (0, import_react17.useEffect)(() => {
    if (disabled2 !== previous.current.disabled) {
      dispatch2({
        type: Action.SetDroppableDisabled,
        id,
        key: key2,
        disabled: disabled2
      });
      previous.current.disabled = disabled2;
    }
  }, [id, key2, disabled2, dispatch2]);
  return {
    active,
    rect,
    isOver: (over == null ? void 0 : over.id) === id,
    node: nodeRef,
    over,
    setNodeRef
  };
}
function AnimationManager(_ref) {
  let {
    animation,
    children
  } = _ref;
  const [clonedChildren, setClonedChildren] = (0, import_react17.useState)(null);
  const [element, setElement] = (0, import_react17.useState)(null);
  const previousChildren = usePrevious(children);
  if (!children && !clonedChildren && previousChildren) {
    setClonedChildren(previousChildren);
  }
  useIsomorphicLayoutEffect(() => {
    if (!element) {
      return;
    }
    const key2 = clonedChildren == null ? void 0 : clonedChildren.key;
    const id = clonedChildren == null ? void 0 : clonedChildren.props.id;
    if (key2 == null || id == null) {
      setClonedChildren(null);
      return;
    }
    Promise.resolve(animation(id, element)).then(() => {
      setClonedChildren(null);
    });
  }, [animation, clonedChildren, element]);
  return import_react17.default.createElement(import_react17.default.Fragment, null, children, clonedChildren ? (0, import_react17.cloneElement)(clonedChildren, {
    ref: setElement
  }) : null);
}
var defaultTransform = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function NullifiedContextProvider(_ref) {
  let {
    children
  } = _ref;
  return import_react17.default.createElement(InternalContext.Provider, {
    value: defaultInternalContext
  }, import_react17.default.createElement(ActiveDraggableContext.Provider, {
    value: defaultTransform
  }, children));
}
var baseStyles = {
  position: "fixed",
  touchAction: "none"
};
var defaultTransition = (activatorEvent) => {
  const isKeyboardActivator = isKeyboardEvent(activatorEvent);
  return isKeyboardActivator ? "transform 250ms ease" : void 0;
};
var PositionedOverlay = /* @__PURE__ */ (0, import_react17.forwardRef)((_ref, ref) => {
  let {
    as,
    activatorEvent,
    adjustScale: adjustScale2,
    children,
    className,
    rect,
    style,
    transform,
    transition = defaultTransition
  } = _ref;
  if (!rect) {
    return null;
  }
  const scaleAdjustedTransform = adjustScale2 ? transform : {
    ...transform,
    scaleX: 1,
    scaleY: 1
  };
  const styles = {
    ...baseStyles,
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    transform: CSS2.Transform.toString(scaleAdjustedTransform),
    transformOrigin: adjustScale2 && activatorEvent ? getRelativeTransformOrigin(activatorEvent, rect) : void 0,
    transition: typeof transition === "function" ? transition(activatorEvent) : transition,
    ...style
  };
  return import_react17.default.createElement(as, {
    className,
    style: styles,
    ref
  }, children);
});
var defaultDropAnimationSideEffects = (options) => (_ref) => {
  let {
    active,
    dragOverlay
  } = _ref;
  const originalStyles = {};
  const {
    styles,
    className
  } = options;
  if (styles != null && styles.active) {
    for (const [key2, value] of Object.entries(styles.active)) {
      if (value === void 0) {
        continue;
      }
      originalStyles[key2] = active.node.style.getPropertyValue(key2);
      active.node.style.setProperty(key2, value);
    }
  }
  if (styles != null && styles.dragOverlay) {
    for (const [key2, value] of Object.entries(styles.dragOverlay)) {
      if (value === void 0) {
        continue;
      }
      dragOverlay.node.style.setProperty(key2, value);
    }
  }
  if (className != null && className.active) {
    active.node.classList.add(className.active);
  }
  if (className != null && className.dragOverlay) {
    dragOverlay.node.classList.add(className.dragOverlay);
  }
  return function cleanup() {
    for (const [key2, value] of Object.entries(originalStyles)) {
      active.node.style.setProperty(key2, value);
    }
    if (className != null && className.active) {
      active.node.classList.remove(className.active);
    }
  };
};
var defaultKeyframeResolver = (_ref2) => {
  let {
    transform: {
      initial,
      final
    }
  } = _ref2;
  return [{
    transform: CSS2.Transform.toString(initial)
  }, {
    transform: CSS2.Transform.toString(final)
  }];
};
var defaultDropAnimationConfiguration = {
  duration: 250,
  easing: "ease",
  keyframes: defaultKeyframeResolver,
  sideEffects: /* @__PURE__ */ defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function useDropAnimation(_ref3) {
  let {
    config,
    draggableNodes,
    droppableContainers,
    measuringConfiguration
  } = _ref3;
  return useEvent((id, node) => {
    if (config === null) {
      return;
    }
    const activeDraggable = draggableNodes.get(id);
    if (!activeDraggable) {
      return;
    }
    const activeNode = activeDraggable.node.current;
    if (!activeNode) {
      return;
    }
    const measurableNode = getMeasurableNode(node);
    if (!measurableNode) {
      return;
    }
    const {
      transform
    } = getWindow2(node).getComputedStyle(node);
    const parsedTransform = parseTransform(transform);
    if (!parsedTransform) {
      return;
    }
    const animation = typeof config === "function" ? config : createDefaultDropAnimation(config);
    scrollIntoViewIfNeeded(activeNode, measuringConfiguration.draggable.measure);
    return animation({
      active: {
        id,
        data: activeDraggable.data,
        node: activeNode,
        rect: measuringConfiguration.draggable.measure(activeNode)
      },
      draggableNodes,
      dragOverlay: {
        node,
        rect: measuringConfiguration.dragOverlay.measure(measurableNode)
      },
      droppableContainers,
      measuringConfiguration,
      transform: parsedTransform
    });
  });
}
function createDefaultDropAnimation(options) {
  const {
    duration,
    easing,
    sideEffects,
    keyframes
  } = {
    ...defaultDropAnimationConfiguration,
    ...options
  };
  return (_ref4) => {
    let {
      active,
      dragOverlay,
      transform,
      ...rest
    } = _ref4;
    if (!duration) {
      return;
    }
    const delta = {
      x: dragOverlay.rect.left - active.rect.left,
      y: dragOverlay.rect.top - active.rect.top
    };
    const scale = {
      scaleX: transform.scaleX !== 1 ? active.rect.width * transform.scaleX / dragOverlay.rect.width : 1,
      scaleY: transform.scaleY !== 1 ? active.rect.height * transform.scaleY / dragOverlay.rect.height : 1
    };
    const finalTransform = {
      x: transform.x - delta.x,
      y: transform.y - delta.y,
      ...scale
    };
    const animationKeyframes = keyframes({
      ...rest,
      active,
      dragOverlay,
      transform: {
        initial: transform,
        final: finalTransform
      }
    });
    const [firstKeyframe] = animationKeyframes;
    const lastKeyframe = animationKeyframes[animationKeyframes.length - 1];
    if (JSON.stringify(firstKeyframe) === JSON.stringify(lastKeyframe)) {
      return;
    }
    const cleanup = sideEffects == null ? void 0 : sideEffects({
      active,
      dragOverlay,
      ...rest
    });
    const animation = dragOverlay.node.animate(animationKeyframes, {
      duration,
      easing,
      fill: "forwards"
    });
    return new Promise((resolve) => {
      animation.onfinish = () => {
        cleanup == null ? void 0 : cleanup();
        resolve();
      };
    });
  };
}
var key = 0;
function useKey(id) {
  return (0, import_react17.useMemo)(() => {
    if (id == null) {
      return;
    }
    key++;
    return key;
  }, [id]);
}
var DragOverlay = /* @__PURE__ */ import_react17.default.memo((_ref) => {
  let {
    adjustScale: adjustScale2 = false,
    children,
    dropAnimation: dropAnimationConfig,
    style,
    transition,
    modifiers,
    wrapperElement = "div",
    className,
    zIndex = 999
  } = _ref;
  const {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggableNodes,
    droppableContainers,
    dragOverlay,
    over,
    measuringConfiguration,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  } = useDndContext();
  const transform = (0, import_react17.useContext)(ActiveDraggableContext);
  const key2 = useKey(active == null ? void 0 : active.id);
  const modifiedTransform = applyModifiers(modifiers, {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect: dragOverlay.rect,
    over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    transform,
    windowRect
  });
  const initialRect = useInitialValue(activeNodeRect);
  const dropAnimation = useDropAnimation({
    config: dropAnimationConfig,
    draggableNodes,
    droppableContainers,
    measuringConfiguration
  });
  const ref = initialRect ? dragOverlay.setRef : void 0;
  return import_react17.default.createElement(NullifiedContextProvider, null, import_react17.default.createElement(AnimationManager, {
    animation: dropAnimation
  }, active && key2 ? import_react17.default.createElement(PositionedOverlay, {
    key: key2,
    id: active.id,
    ref,
    as: wrapperElement,
    activatorEvent,
    adjustScale: adjustScale2,
    className,
    transition,
    rect: initialRect,
    style: {
      zIndex,
      ...style
    },
    transform: modifiedTransform
  }, children) : null));
});

// node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var import_react18 = __toESM(require_react());
function arrayMove(array, from, to) {
  const newArray = array.slice();
  newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
  return newArray;
}
function getSortedRects(items, rects) {
  return items.reduce((accumulator, id, index2) => {
    const rect = rects.get(id);
    if (rect) {
      accumulator[index2] = rect;
    }
    return accumulator;
  }, Array(items.length));
}
function isValidIndex(index2) {
  return index2 !== null && index2 >= 0;
}
function itemsEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
function normalizeDisabled(disabled2) {
  if (typeof disabled2 === "boolean") {
    return {
      draggable: disabled2,
      droppable: disabled2
    };
  }
  return disabled2;
}
var rectSortingStrategy = (_ref) => {
  let {
    rects,
    activeIndex,
    overIndex,
    index: index2
  } = _ref;
  const newRects = arrayMove(rects, overIndex, activeIndex);
  const oldRect = rects[index2];
  const newRect = newRects[index2];
  if (!newRect || !oldRect) {
    return null;
  }
  return {
    x: newRect.left - oldRect.left,
    y: newRect.top - oldRect.top,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};
var ID_PREFIX2 = "Sortable";
var Context2 = /* @__PURE__ */ import_react18.default.createContext({
  activeIndex: -1,
  containerId: ID_PREFIX2,
  disableTransforms: false,
  items: [],
  overIndex: -1,
  useDragOverlay: false,
  sortedRects: [],
  strategy: rectSortingStrategy,
  disabled: {
    draggable: false,
    droppable: false
  }
});
function SortableContext(_ref) {
  let {
    children,
    id,
    items: userDefinedItems,
    strategy = rectSortingStrategy,
    disabled: disabledProp = false
  } = _ref;
  const {
    active,
    dragOverlay,
    droppableRects,
    over,
    measureDroppableContainers
  } = useDndContext();
  const containerId = useUniqueId(ID_PREFIX2, id);
  const useDragOverlay = Boolean(dragOverlay.rect !== null);
  const items = (0, import_react18.useMemo)(() => userDefinedItems.map((item) => typeof item === "object" && "id" in item ? item.id : item), [userDefinedItems]);
  const isDragging = active != null;
  const activeIndex = active ? items.indexOf(active.id) : -1;
  const overIndex = over ? items.indexOf(over.id) : -1;
  const previousItemsRef = (0, import_react18.useRef)(items);
  const itemsHaveChanged = !itemsEqual(items, previousItemsRef.current);
  const disableTransforms = overIndex !== -1 && activeIndex === -1 || itemsHaveChanged;
  const disabled2 = normalizeDisabled(disabledProp);
  useIsomorphicLayoutEffect(() => {
    if (itemsHaveChanged && isDragging) {
      measureDroppableContainers(items);
    }
  }, [itemsHaveChanged, items, isDragging, measureDroppableContainers]);
  (0, import_react18.useEffect)(() => {
    previousItemsRef.current = items;
  }, [items]);
  const contextValue = (0, import_react18.useMemo)(
    () => ({
      activeIndex,
      containerId,
      disabled: disabled2,
      disableTransforms,
      items,
      overIndex,
      useDragOverlay,
      sortedRects: getSortedRects(items, droppableRects),
      strategy
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeIndex, containerId, disabled2.draggable, disabled2.droppable, disableTransforms, items, overIndex, droppableRects, useDragOverlay, strategy]
  );
  return import_react18.default.createElement(Context2.Provider, {
    value: contextValue
  }, children);
}
var defaultNewIndexGetter = (_ref) => {
  let {
    id,
    items,
    activeIndex,
    overIndex
  } = _ref;
  return arrayMove(items, activeIndex, overIndex).indexOf(id);
};
var defaultAnimateLayoutChanges = (_ref2) => {
  let {
    containerId,
    isSorting,
    wasDragging,
    index: index2,
    items,
    newIndex,
    previousItems,
    previousContainerId,
    transition
  } = _ref2;
  if (!transition || !wasDragging) {
    return false;
  }
  if (previousItems !== items && index2 === newIndex) {
    return false;
  }
  if (isSorting) {
    return true;
  }
  return newIndex !== index2 && containerId === previousContainerId;
};
var defaultTransition2 = {
  duration: 200,
  easing: "ease"
};
var transitionProperty = "transform";
var disabledTransition = /* @__PURE__ */ CSS2.Transition.toString({
  property: transitionProperty,
  duration: 0,
  easing: "linear"
});
var defaultAttributes = {
  roleDescription: "sortable"
};
function useDerivedTransform(_ref) {
  let {
    disabled: disabled2,
    index: index2,
    node,
    rect
  } = _ref;
  const [derivedTransform, setDerivedtransform] = (0, import_react18.useState)(null);
  const previousIndex = (0, import_react18.useRef)(index2);
  useIsomorphicLayoutEffect(() => {
    if (!disabled2 && index2 !== previousIndex.current && node.current) {
      const initial = rect.current;
      if (initial) {
        const current = getClientRect(node.current, {
          ignoreTransform: true
        });
        const delta = {
          x: initial.left - current.left,
          y: initial.top - current.top,
          scaleX: initial.width / current.width,
          scaleY: initial.height / current.height
        };
        if (delta.x || delta.y) {
          setDerivedtransform(delta);
        }
      }
    }
    if (index2 !== previousIndex.current) {
      previousIndex.current = index2;
    }
  }, [disabled2, index2, node, rect]);
  (0, import_react18.useEffect)(() => {
    if (derivedTransform) {
      setDerivedtransform(null);
    }
  }, [derivedTransform]);
  return derivedTransform;
}
function useSortable(_ref) {
  let {
    animateLayoutChanges = defaultAnimateLayoutChanges,
    attributes: userDefinedAttributes,
    disabled: localDisabled,
    data: customData,
    getNewIndex = defaultNewIndexGetter,
    id,
    strategy: localStrategy,
    resizeObserverConfig,
    transition = defaultTransition2
  } = _ref;
  const {
    items,
    containerId,
    activeIndex,
    disabled: globalDisabled,
    disableTransforms,
    sortedRects,
    overIndex,
    useDragOverlay,
    strategy: globalStrategy
  } = (0, import_react18.useContext)(Context2);
  const disabled2 = normalizeLocalDisabled(localDisabled, globalDisabled);
  const index2 = items.indexOf(id);
  const data = (0, import_react18.useMemo)(() => ({
    sortable: {
      containerId,
      index: index2,
      items
    },
    ...customData
  }), [containerId, customData, index2, items]);
  const itemsAfterCurrentSortable = (0, import_react18.useMemo)(() => items.slice(items.indexOf(id)), [items, id]);
  const {
    rect,
    node,
    isOver,
    setNodeRef: setDroppableNodeRef
  } = useDroppable({
    id,
    data,
    disabled: disabled2.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: itemsAfterCurrentSortable,
      ...resizeObserverConfig
    }
  });
  const {
    active,
    activatorEvent,
    activeNodeRect,
    attributes,
    setNodeRef: setDraggableNodeRef,
    listeners,
    isDragging,
    over,
    setActivatorNodeRef,
    transform
  } = useDraggable({
    id,
    data,
    attributes: {
      ...defaultAttributes,
      ...userDefinedAttributes
    },
    disabled: disabled2.draggable
  });
  const setNodeRef = useCombinedRefs(setDroppableNodeRef, setDraggableNodeRef);
  const isSorting = Boolean(active);
  const displaceItem = isSorting && !disableTransforms && isValidIndex(activeIndex) && isValidIndex(overIndex);
  const shouldDisplaceDragSource = !useDragOverlay && isDragging;
  const dragSourceDisplacement = shouldDisplaceDragSource && displaceItem ? transform : null;
  const strategy = localStrategy != null ? localStrategy : globalStrategy;
  const finalTransform = displaceItem ? dragSourceDisplacement != null ? dragSourceDisplacement : strategy({
    rects: sortedRects,
    activeNodeRect,
    activeIndex,
    overIndex,
    index: index2
  }) : null;
  const newIndex = isValidIndex(activeIndex) && isValidIndex(overIndex) ? getNewIndex({
    id,
    items,
    activeIndex,
    overIndex
  }) : index2;
  const activeId = active == null ? void 0 : active.id;
  const previous = (0, import_react18.useRef)({
    activeId,
    items,
    newIndex,
    containerId
  });
  const itemsHaveChanged = items !== previous.current.items;
  const shouldAnimateLayoutChanges = animateLayoutChanges({
    active,
    containerId,
    isDragging,
    isSorting,
    id,
    index: index2,
    items,
    newIndex: previous.current.newIndex,
    previousItems: previous.current.items,
    previousContainerId: previous.current.containerId,
    transition,
    wasDragging: previous.current.activeId != null
  });
  const derivedTransform = useDerivedTransform({
    disabled: !shouldAnimateLayoutChanges,
    index: index2,
    node,
    rect
  });
  (0, import_react18.useEffect)(() => {
    if (isSorting && previous.current.newIndex !== newIndex) {
      previous.current.newIndex = newIndex;
    }
    if (containerId !== previous.current.containerId) {
      previous.current.containerId = containerId;
    }
    if (items !== previous.current.items) {
      previous.current.items = items;
    }
  }, [isSorting, newIndex, containerId, items]);
  (0, import_react18.useEffect)(() => {
    if (activeId === previous.current.activeId) {
      return;
    }
    if (activeId != null && previous.current.activeId == null) {
      previous.current.activeId = activeId;
      return;
    }
    const timeoutId = setTimeout(() => {
      previous.current.activeId = activeId;
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [activeId]);
  return {
    active,
    activeIndex,
    attributes,
    data,
    rect,
    index: index2,
    newIndex,
    items,
    isOver,
    isSorting,
    isDragging,
    listeners,
    node,
    overIndex,
    over,
    setNodeRef,
    setActivatorNodeRef,
    setDroppableNodeRef,
    setDraggableNodeRef,
    transform: derivedTransform != null ? derivedTransform : finalTransform,
    transition: getTransition()
  };
  function getTransition() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      derivedTransform || // Or to prevent items jumping to back to their "new" position when items change
      itemsHaveChanged && previous.current.newIndex === index2
    ) {
      return disabledTransition;
    }
    if (shouldDisplaceDragSource && !isKeyboardEvent(activatorEvent) || !transition) {
      return void 0;
    }
    if (isSorting || shouldAnimateLayoutChanges) {
      return CSS2.Transition.toString({
        ...transition,
        property: transitionProperty
      });
    }
    return void 0;
  }
}
function normalizeLocalDisabled(localDisabled, globalDisabled) {
  var _localDisabled$dragga, _localDisabled$droppa;
  if (typeof localDisabled === "boolean") {
    return {
      draggable: localDisabled,
      // Backwards compatibility
      droppable: false
    };
  }
  return {
    draggable: (_localDisabled$dragga = localDisabled == null ? void 0 : localDisabled.draggable) != null ? _localDisabled$dragga : globalDisabled.draggable,
    droppable: (_localDisabled$droppa = localDisabled == null ? void 0 : localDisabled.droppable) != null ? _localDisabled$droppa : globalDisabled.droppable
  };
}
function hasSortableData(entry) {
  if (!entry) {
    return false;
  }
  const data = entry.data.current;
  if (data && "sortable" in data && typeof data.sortable === "object" && "containerId" in data.sortable && "items" in data.sortable && "index" in data.sortable) {
    return true;
  }
  return false;
}
var directions = [KeyboardCode.Down, KeyboardCode.Right, KeyboardCode.Up, KeyboardCode.Left];
var sortableKeyboardCoordinates = (event, _ref) => {
  let {
    context: {
      active,
      collisionRect,
      droppableRects,
      droppableContainers,
      over,
      scrollableAncestors
    }
  } = _ref;
  if (directions.includes(event.code)) {
    event.preventDefault();
    if (!active || !collisionRect) {
      return;
    }
    const filteredContainers = [];
    droppableContainers.getEnabled().forEach((entry) => {
      if (!entry || entry != null && entry.disabled) {
        return;
      }
      const rect = droppableRects.get(entry.id);
      if (!rect) {
        return;
      }
      switch (event.code) {
        case KeyboardCode.Down:
          if (collisionRect.top < rect.top) {
            filteredContainers.push(entry);
          }
          break;
        case KeyboardCode.Up:
          if (collisionRect.top > rect.top) {
            filteredContainers.push(entry);
          }
          break;
        case KeyboardCode.Left:
          if (collisionRect.left > rect.left) {
            filteredContainers.push(entry);
          }
          break;
        case KeyboardCode.Right:
          if (collisionRect.left < rect.left) {
            filteredContainers.push(entry);
          }
          break;
      }
    });
    const collisions = closestCorners({
      active,
      collisionRect,
      droppableRects,
      droppableContainers: filteredContainers,
      pointerCoordinates: null
    });
    let closestId = getFirstCollision(collisions, "id");
    if (closestId === (over == null ? void 0 : over.id) && collisions.length > 1) {
      closestId = collisions[1].id;
    }
    if (closestId != null) {
      const activeDroppable = droppableContainers.get(active.id);
      const newDroppable = droppableContainers.get(closestId);
      const newRect = newDroppable ? droppableRects.get(newDroppable.id) : null;
      const newNode = newDroppable == null ? void 0 : newDroppable.node.current;
      if (newNode && newRect && activeDroppable && newDroppable) {
        const newScrollAncestors = getScrollableAncestors(newNode);
        const hasDifferentScrollAncestors = newScrollAncestors.some((element, index2) => scrollableAncestors[index2] !== element);
        const hasSameContainer = isSameContainer(activeDroppable, newDroppable);
        const isAfterActive = isAfter(activeDroppable, newDroppable);
        const offset4 = hasDifferentScrollAncestors || !hasSameContainer ? {
          x: 0,
          y: 0
        } : {
          x: isAfterActive ? collisionRect.width - newRect.width : 0,
          y: isAfterActive ? collisionRect.height - newRect.height : 0
        };
        const rectCoordinates = {
          x: newRect.left,
          y: newRect.top
        };
        const newCoordinates = offset4.x && offset4.y ? rectCoordinates : subtract(rectCoordinates, offset4);
        return newCoordinates;
      }
    }
  }
  return void 0;
};
function isSameContainer(a, b) {
  if (!hasSortableData(a) || !hasSortableData(b)) {
    return false;
  }
  return a.data.current.sortable.containerId === b.data.current.sortable.containerId;
}
function isAfter(a, b) {
  if (!hasSortableData(a) || !hasSortableData(b)) {
    return false;
  }
  if (!isSameContainer(a, b)) {
    return false;
  }
  return a.data.current.sortable.index < b.data.current.sortable.index;
}

// packages/grid/build-module/grid.mjs
var import_compose3 = __toESM(require_compose(), 1);
var import_element46 = __toESM(require_element(), 1);

// packages/grid/build-module/grid-item.mjs
var import_element45 = __toESM(require_element(), 1);
var import_compose2 = __toESM(require_compose(), 1);

// packages/grid/build-module/resize-handle.mjs
var import_element44 = __toESM(require_element(), 1);
var import_compose = __toESM(require_compose(), 1);
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='b9f1dbb396']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "b9f1dbb396");
  style.appendChild(document.createTextNode(".dab8841807890506__resize-handle{border-block-end-width:12px;border-inline-start-width:12px;border:0 solid #0000;border-block-end-color:var(--wpds-color-fg-interactive-brand,var(--wp-admin-theme-color,#3858e9));bottom:0;cursor:nwse-resize;height:0;inset-inline-end:0;position:absolute;width:0;z-index:1}.c49c86a5ad590300__is-horizontal-only{cursor:ew-resize}"));
  document.head.appendChild(style);
}
var resize_handle_default = { "resize-handle": "dab8841807890506__resize-handle", "is-horizontal-only": "c49c86a5ad590300__is-horizontal-only" };
function ResizeHandle({
  itemId,
  verticalResizable = true,
  renderResizeHandle
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: "draggable",
    data: { itemId }
  });
  const nodeRef = (0, import_element44.useRef)(null);
  const mergedRef = (0, import_compose.useMergeRefs)([nodeRef, setNodeRef]);
  (0, import_element44.useEffect)(() => {
    if (!isDragging) {
      return;
    }
    const cursor = verticalResizable ? "nwse-resize" : "ew-resize";
    const root = (nodeRef.current?.ownerDocument ?? document).documentElement;
    const previous = root.style.cursor;
    root.style.cursor = cursor;
    return () => {
      root.style.cursor = previous;
    };
  }, [isDragging, verticalResizable]);
  if (renderResizeHandle) {
    const RenderResizeHandle = renderResizeHandle;
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      RenderResizeHandle,
      {
        ref: mergedRef,
        listeners,
        attributes,
        verticalResizable,
        isResizing: isDragging,
        itemId
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    "div",
    {
      ref: mergedRef,
      className: clsx_default(
        resize_handle_default["resize-handle"],
        !verticalResizable && resize_handle_default["is-horizontal-only"]
      ),
      ...listeners,
      ...attributes
    }
  );
}
function ResizeHandleWrapper(props) {
  const throttleDelay = 16;
  const throttledResize = (0, import_compose.useThrottle)((delta) => {
    if (props.onResize) {
      props.onResize(delta);
    }
  }, throttleDelay);
  const handleDragMove = (event) => {
    if (event.active.id !== "draggable") {
      return;
    }
    throttledResize({
      width: event.delta.x,
      height: event.delta.y
    });
  };
  const handleDragEnd = () => {
    if (props.onResizeEnd) {
      props.onResizeEnd();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    DndContext,
    {
      autoScroll: {
        threshold: { x: 5e-3, y: 5e-3 },
        acceleration: 1
      },
      onDragMove: handleDragMove,
      onDragEnd: handleDragEnd,
      children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(ResizeHandle, { ...props })
    }
  );
}

// packages/grid/build-module/grid-item.mjs
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e8b7abbbd3']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e8b7abbbd3");
  style.appendChild(document.createTextNode("._45ffcda9542501c7__item{position:relative}._69bf831f970b0e8f__item-content{height:100%;position:relative}._5dcf9498c8489dc2__is-dragging{opacity:.4;outline:var(--wpds-border-width-sm,2px) dashed var(--wpds-color-stroke-interactive-brand,var(--wp-admin-theme-color,#3858e9));pointer-events:none}@media (forced-colors:active){._5dcf9498c8489dc2__is-dragging{outline-color:Highlight}}._328dc2560eba860d__preview-overlay{background:#0000;border:var(--wpds-border-width-sm,2px) dashed var(--wpds-color-stroke-interactive-brand,var(--wp-admin-theme-color,#3858e9));inset-inline-start:0;pointer-events:none;position:absolute;top:0;z-index:1}@media (forced-colors:active){._328dc2560eba860d__preview-overlay{border-color:Highlight}}"));
  document.head.appendChild(style);
}
var grid_item_default = { "item": "_45ffcda9542501c7__item", "item-content": "_69bf831f970b0e8f__item-content", "is-dragging": "_5dcf9498c8489dc2__is-dragging", "preview-overlay": "_328dc2560eba860d__preview-overlay" };
function getItemCursor(disabled2, interacting) {
  if (disabled2) {
    return "default";
  }
  if (interacting) {
    return void 0;
  }
  return "grab";
}
function GridItem({
  item,
  maxColumns,
  disabled: disabled2 = false,
  verticalResizable = true,
  interacting = false,
  children,
  actionableArea = null,
  onResize,
  onResizeEnd,
  renderResizeHandle
}) {
  const [previewDelta, setPreviewDelta] = (0, import_element45.useState)(
    null
  );
  const itemRef = (0, import_element45.useRef)(null);
  const initialResizeRectRef = (0, import_element45.useRef)(null);
  const initialResizeScrollRef = (0, import_element45.useRef)(null);
  const lastResizeDeltaRef = (0, import_element45.useRef)(null);
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id: item.key,
    disabled: disabled2
  });
  const mergedRef = (0, import_compose2.useMergeRefs)([itemRef, setNodeRef]);
  const style = {
    gridColumnEnd: `span ${item.width === "full" ? maxColumns : Math.min(
      typeof item.width === "number" ? item.width : 1,
      maxColumns
    )}`,
    gridRowEnd: `span ${item.height || 1}`,
    // Suppress the grab hint while any gesture is active so the
    // inline `cursor` on the tile doesn't override the gesture's
    // document-level cursor (e.g. the resize lock). Setting
    // `undefined` leaves the property off the DOM.
    cursor: getItemCursor(disabled2, interacting)
  };
  const itemClassName = clsx_default(
    grid_item_default.item,
    isDragging && grid_item_default["is-dragging"]
  );
  const handleResize = (delta) => {
    const clamped = {
      width: delta.width,
      height: verticalResizable ? delta.height : 0
    };
    const node = itemRef.current;
    if (node && !initialResizeRectRef.current) {
      initialResizeRectRef.current = node.getBoundingClientRect();
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      initialResizeScrollRef.current = {
        x: ownerWindow.scrollX,
        y: ownerWindow.scrollY
      };
    }
    lastResizeDeltaRef.current = clamped;
    onResize(item.key, clamped);
    if (node && initialResizeRectRef.current && initialResizeScrollRef.current) {
      const currentRect = node.getBoundingClientRect();
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const scrollDelta = {
        x: ownerWindow.scrollX - initialResizeScrollRef.current.x,
        y: ownerWindow.scrollY - initialResizeScrollRef.current.y
      };
      const offsetX = currentRect.right - initialResizeRectRef.current.right;
      const offsetY = currentRect.bottom - initialResizeRectRef.current.bottom;
      setPreviewDelta({
        width: clamped.width - offsetX - scrollDelta.x,
        height: verticalResizable ? clamped.height - offsetY - scrollDelta.y : 0
      });
    }
  };
  (0, import_element45.useLayoutEffect)(() => {
    const lastDelta = lastResizeDeltaRef.current;
    const initialRect = initialResizeRectRef.current;
    const initialScroll = initialResizeScrollRef.current;
    const node = itemRef.current;
    if (!lastDelta || !initialRect || !initialScroll || !node) {
      return;
    }
    const currentRect = node.getBoundingClientRect();
    const ownerWindow = node.ownerDocument.defaultView ?? window;
    const scrollDelta = {
      x: ownerWindow.scrollX - initialScroll.x,
      y: ownerWindow.scrollY - initialScroll.y
    };
    const offsetX = currentRect.right - initialRect.right;
    const offsetY = currentRect.bottom - initialRect.bottom;
    const next = {
      width: lastDelta.width - offsetX - scrollDelta.x,
      height: verticalResizable ? lastDelta.height - offsetY - scrollDelta.y : 0
    };
    setPreviewDelta(
      (prev) => next.width === prev?.width && next.height === prev?.height ? prev : next
    );
  }, [item.width, item.height, verticalResizable]);
  const handleResizeEnd = () => {
    setPreviewDelta(null);
    initialResizeRectRef.current = null;
    initialResizeScrollRef.current = null;
    lastResizeDeltaRef.current = null;
    onResizeEnd();
  };
  const previewOverlay = previewDelta ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    "div",
    {
      className: grid_item_default["preview-overlay"],
      style: {
        insetInlineEnd: -previewDelta.width,
        bottom: -previewDelta.height
      }
    }
  ) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
    "div",
    {
      ref: mergedRef,
      className: itemClassName,
      style,
      ...attributes,
      children: [
        actionableArea ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          "div",
          {
            style: { display: "contents" },
            ...interacting ? { inert: "" } : {},
            children: actionableArea
          }
        ) : null,
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { ...listeners, style: { height: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: grid_item_default["item-content"], children: [
            children,
            !disabled2 && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              ResizeHandleWrapper,
              {
                itemId: item.key,
                verticalResizable,
                onResize: handleResize,
                onResizeEnd: handleResizeEnd,
                renderResizeHandle
              }
            )
          ] }),
          previewOverlay
        ] })
      ]
    }
  );
}

// packages/grid/build-module/resolve-fill-widths.mjs
function resolveFillWidths(sortedKeys, layoutMap, maxColumns) {
  const resolved = /* @__PURE__ */ new Map();
  const n = sortedKeys.length;
  const items = new Array(n);
  const widths = new Array(n);
  const heights = new Array(n);
  let hasFill = false;
  let hasMultiRow = false;
  let totalRows = 0;
  for (let i = 0; i < n; i++) {
    const item = layoutMap.get(sortedKeys[i]);
    items[i] = item;
    widths[i] = item && typeof item.width === "number" ? Math.min(item.width, maxColumns) : 1;
    const h = Math.max(1, Math.floor(item?.height ?? 1));
    heights[i] = h;
    if (item?.width === "fill") {
      hasFill = true;
    }
    if (h > 1) {
      hasMultiRow = true;
    }
    totalRows += h;
  }
  if (!hasFill) {
    return resolved;
  }
  if (!hasMultiRow) {
    let currentCol = 0;
    for (let i = 0; i < n; i++) {
      const item = items[i];
      if (!item) {
        continue;
      }
      if (item.width === "full") {
        currentCol = 0;
        continue;
      }
      if (item.width === "fill") {
        let reserved = 0;
        for (let j = i + 1; j < n; j++) {
          const next = items[j];
          if (!next || next.width === "full" || next.width === "fill") {
            break;
          }
          const nextW = widths[j];
          if (currentCol + 1 + reserved + nextW <= maxColumns) {
            reserved += nextW;
          } else {
            break;
          }
        }
        const fillCols = Math.max(
          1,
          maxColumns - currentCol - reserved
        );
        resolved.set(item.key, fillCols);
        currentCol += fillCols;
      } else {
        const w = widths[i];
        if (currentCol + w > maxColumns) {
          currentCol = 0;
        }
        currentCol += w;
      }
      if (currentCol >= maxColumns) {
        currentCol = 0;
      }
    }
    return resolved;
  }
  const rowOccupancy = new Array(maxColumns).fill(0);
  let cursorRow = 0;
  let cursorCol = 0;
  for (let i = 0; i < n; i++) {
    const item = items[i];
    if (!item) {
      continue;
    }
    const h = heights[i];
    if (item.width === "full") {
      let r22 = cursorRow;
      for (let c2 = 0; c2 < maxColumns; c2++) {
        if (rowOccupancy[c2] > r22) {
          r22 = rowOccupancy[c2];
        }
      }
      for (let c2 = 0; c2 < maxColumns; c2++) {
        rowOccupancy[c2] = r22 + h;
      }
      cursorRow = r22 + h;
      cursorCol = 0;
      continue;
    }
    if (item.width === "fill") {
      let r22 = cursorRow;
      let c2 = cursorCol;
      scan: for (; r22 <= totalRows; r22++) {
        const start = r22 === cursorRow ? cursorCol : 0;
        for (c2 = start; c2 < maxColumns; c2++) {
          if (rowOccupancy[c2] <= r22) {
            break scan;
          }
        }
      }
      const fillStartRow = r22;
      const fillStartCol = c2;
      let runLength = 0;
      while (fillStartCol + runLength < maxColumns && rowOccupancy[fillStartCol + runLength] <= fillStartRow) {
        runLength++;
      }
      let reserved = 0;
      for (let j = i + 1; j < n; j++) {
        const next = items[j];
        if (!next || next.width === "full" || next.width === "fill") {
          break;
        }
        const nextW = widths[j];
        if (1 + reserved + nextW <= runLength) {
          reserved += nextW;
        } else {
          break;
        }
      }
      const fillCols = Math.max(1, runLength - reserved);
      resolved.set(item.key, fillCols);
      for (let k = 0; k < fillCols; k++) {
        rowOccupancy[fillStartCol + k] = fillStartRow + h;
      }
      cursorRow = fillStartRow;
      cursorCol = fillStartCol + fillCols;
      continue;
    }
    const w = widths[i];
    let r2 = cursorRow;
    let c = cursorCol;
    place: for (; r2 <= totalRows; r2++) {
      c = r2 === cursorRow ? cursorCol : 0;
      while (c + w <= maxColumns) {
        let blocked = -1;
        for (let k = 0; k < w; k++) {
          if (rowOccupancy[c + k] > r2) {
            blocked = c + k;
            break;
          }
        }
        if (blocked === -1) {
          break place;
        }
        c = blocked + 1;
      }
    }
    for (let k = 0; k < w; k++) {
      rowOccupancy[c + k] = r2 + h;
    }
    cursorRow = r2;
    cursorCol = c + w;
  }
  return resolved;
}

// packages/grid/build-module/grid.mjs
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='6fffc883b9']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "6fffc883b9");
  style.appendChild(document.createTextNode("._40a7c261e568c69f__grid{display:grid}._1c1b25f895d429f8__drag-preview{box-shadow:0 5px 10px #00000026;cursor:grabbing;height:100%;transform:scale(1.05)}@media (prefers-reduced-motion:reduce){._1c1b25f895d429f8__drag-preview{transform:none}}"));
  document.head.appendChild(style);
}
var grid_default = { "grid": "_40a7c261e568c69f__grid", "drag-preview": "_1c1b25f895d429f8__drag-preview" };
var NO_SORT_STRATEGY = () => null;
var DashboardGrid = (0, import_element46.forwardRef)(
  function DashboardGrid2(props, ref) {
    const {
      layout,
      columns = 6,
      children,
      className,
      style,
      spacing = 2,
      rowHeight = "auto",
      minColumnWidth,
      editMode = false,
      onChangeLayout,
      onPreviewLayout,
      renderResizeHandle,
      ...divProps
    } = props;
    const [temporaryLayout, setTemporaryLayout] = (0, import_element46.useState)();
    const [activeId, setActiveId] = (0, import_element46.useState)(null);
    const [isResizing, setIsResizing] = (0, import_element46.useState)(false);
    const latestLayoutRef = (0, import_element46.useRef)();
    const lastReorderCursorRef = (0, import_element46.useRef)(null);
    const resizeBaselineRef = (0, import_element46.useRef)(null);
    const activeLayout = temporaryLayout ?? layout;
    const rootRef = (0, import_element46.useRef)(null);
    const [containerWidth, setContainerWidth] = (0, import_element46.useState)(0);
    const resizeObserverRef = (0, import_compose3.useResizeObserver)(
      ([{ contentRect }]) => {
        setContainerWidth(contentRect.width);
      }
    );
    const mergedGridRef = (0, import_compose3.useMergeRefs)([
      rootRef,
      resizeObserverRef,
      ref
    ]);
    (0, import_element46.useLayoutEffect)(() => {
      if (rootRef.current) {
        const { width } = rootRef.current.getBoundingClientRect();
        if (width > 0) {
          setContainerWidth(width);
        }
      }
    }, []);
    const gapPx = spacing * 4;
    const effectiveColumns = (0, import_element46.useMemo)(() => {
      if (!minColumnWidth) {
        return columns;
      }
      const totalWidthPerColumn = minColumnWidth + gapPx;
      const maxColumns = Math.floor(
        (containerWidth + gapPx) / totalWidthPerColumn
      );
      return Math.max(1, maxColumns);
    }, [minColumnWidth, gapPx, containerWidth, columns]);
    const columnWidth = (containerWidth - (effectiveColumns - 1) * gapPx) / effectiveColumns;
    const layoutMap = (0, import_element46.useMemo)(() => {
      const map = /* @__PURE__ */ new Map();
      activeLayout.forEach((item) => map.set(item.key, item));
      return map;
    }, [activeLayout]);
    const layoutKeysSig = layout.map((item) => item.key).join("\0");
    const layoutKeysRef = (0, import_element46.useRef)(null);
    if (layoutKeysRef.current?.sig !== layoutKeysSig) {
      layoutKeysRef.current = {
        sig: layoutKeysSig,
        set: new Set(layout.map((item) => item.key))
      };
    }
    const layoutKeys = layoutKeysRef.current.set;
    const sortedItems = activeLayout.map((item, index2) => ({ item, index: index2 })).sort(
      (a, b) => (a.item.order ?? a.index) - (b.item.order ?? b.index)
    ).map(({ item }) => item.key);
    const itemsSig = sortedItems.join("\0");
    const itemsRef = (0, import_element46.useRef)(null);
    if (itemsRef.current?.sig !== itemsSig) {
      itemsRef.current = { sig: itemsSig, arr: sortedItems };
    }
    const items = itemsRef.current.arr;
    const resolvedItemMap = (0, import_element46.useMemo)(() => {
      const fillWidths = resolveFillWidths(
        items,
        layoutMap,
        effectiveColumns
      );
      if (fillWidths.size === 0) {
        return layoutMap;
      }
      const map = /* @__PURE__ */ new Map();
      for (const [key2, item] of layoutMap) {
        const fillW = fillWidths.get(key2);
        map.set(
          key2,
          fillW !== void 0 ? { ...item, width: fillW } : item
        );
      }
      return map;
    }, [items, layoutMap, effectiveColumns]);
    const [childrenMap, actionableAreaMap, remaining] = (0, import_element46.useMemo)(() => {
      const childMap = /* @__PURE__ */ new Map();
      const actionableMap = /* @__PURE__ */ new Map();
      const rest = [];
      import_element46.Children.forEach(children, (child) => {
        if (!(0, import_element46.isValidElement)(child)) {
          rest.push(child);
          return;
        }
        const key2 = child.key?.toString();
        if (key2 && layoutKeys.has(key2)) {
          const { actionableArea } = child.props;
          if (actionableArea !== void 0) {
            actionableMap.set(key2, actionableArea);
            childMap.set(
              key2,
              (0, import_element46.cloneElement)(child, { actionableArea: void 0 })
            );
          } else {
            childMap.set(key2, child);
          }
        } else {
          rest.push(child);
        }
      });
      return [childMap, actionableMap, rest];
    }, [children, layoutKeys]);
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
      })
    );
    const handleDragStart = (0, import_compose3.useEvent)((event) => {
      setActiveId(String(event.active.id));
      lastReorderCursorRef.current = null;
    });
    const handleDragCancel = (0, import_compose3.useEvent)(() => {
      setActiveId(null);
      latestLayoutRef.current = void 0;
      lastReorderCursorRef.current = null;
      resizeBaselineRef.current = null;
      setIsResizing(false);
      setTemporaryLayout(void 0);
    });
    const handleDragMove = (0, import_compose3.useEvent)((event) => {
      const { active, over } = event;
      if (!over || active.id === over.id) {
        return;
      }
      const activeRect = active.rect.current.translated;
      if (!activeRect) {
        return;
      }
      const activeCenterX = activeRect.left + activeRect.width / 2;
      const activeCenterY = activeRect.top + activeRect.height / 2;
      const lastCursor = lastReorderCursorRef.current;
      if (lastCursor) {
        const dx = activeCenterX - lastCursor.x;
        const dy = activeCenterY - lastCursor.y;
        if (dx * dx + dy * dy < 100) {
          return;
        }
      }
      const overCenterX = over.rect.left + over.rect.width / 2;
      const insertAfter = activeCenterX > overCenterX;
      const currentIndex = items.indexOf(String(active.id));
      const overIndex = items.indexOf(String(over.id));
      let newIndex;
      if (insertAfter) {
        newIndex = currentIndex > overIndex ? overIndex + 1 : overIndex;
      } else {
        newIndex = currentIndex > overIndex ? overIndex : overIndex - 1;
      }
      newIndex = Math.max(0, Math.min(newIndex, items.length - 1));
      if (newIndex === currentIndex) {
        return;
      }
      const updatedItems = arrayMove(items, currentIndex, newIndex);
      const updatedLayout = activeLayout.map((item) => ({
        ...item,
        order: updatedItems.indexOf(item.key)
      }));
      lastReorderCursorRef.current = {
        x: activeCenterX,
        y: activeCenterY
      };
      latestLayoutRef.current = updatedLayout;
      setTemporaryLayout(updatedLayout);
      onPreviewLayout?.(updatedLayout);
    });
    const persistTemporaryLayout = (0, import_compose3.useEvent)(() => {
      const latest = latestLayoutRef.current;
      latestLayoutRef.current = void 0;
      resizeBaselineRef.current = null;
      setIsResizing(false);
      if (!onChangeLayout || !latest) {
        return;
      }
      onChangeLayout(latest);
      setTemporaryLayout(void 0);
    });
    const handleResize = (0, import_compose3.useEvent)((id, delta) => {
      if (!editMode) {
        return;
      }
      if (!isResizing) {
        setIsResizing(true);
      }
      const relativeDelta = {
        width: Math.round(delta.width / (columnWidth + gapPx)),
        height: rowHeight === "auto" ? 0 : Math.round(delta.height / (rowHeight + gapPx))
      };
      if (!resizeBaselineRef.current) {
        const baseItem = activeLayout.find(
          (item) => item.key === id
        );
        const resolvedItem = resolvedItemMap.get(id);
        let baseWidth;
        if (baseItem?.width === "full") {
          baseWidth = effectiveColumns;
        } else if (baseItem?.width === "fill") {
          baseWidth = typeof resolvedItem?.width === "number" ? resolvedItem.width : 1;
        } else {
          baseWidth = baseItem?.width ?? 1;
        }
        resizeBaselineRef.current = {
          width: baseWidth,
          height: baseItem?.height ?? 1
        };
      }
      const baseline = resizeBaselineRef.current;
      const newWidth = Math.max(
        1,
        Math.min(
          baseline.width + relativeDelta.width,
          effectiveColumns
        )
      );
      const newHeight = Math.max(
        1,
        baseline.height + relativeDelta.height
      );
      const currentItem = activeLayout.find(
        (item) => item.key === id
      );
      if (currentItem && currentItem.width === newWidth && (currentItem.height ?? 1) === newHeight) {
        return;
      }
      const updatedLayout = activeLayout.map(
        (item) => item.key === id ? { ...item, width: newWidth, height: newHeight } : item
      );
      latestLayoutRef.current = updatedLayout;
      setTemporaryLayout(updatedLayout);
      onPreviewLayout?.(updatedLayout);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
      DndContext,
      {
        sensors,
        onDragStart: handleDragStart,
        onDragCancel: handleDragCancel,
        onDragMove: handleDragMove,
        onDragEnd: () => {
          persistTemporaryLayout();
          setActiveId(null);
          lastReorderCursorRef.current = null;
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(SortableContext, { items, strategy: NO_SORT_STRATEGY, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
            "div",
            {
              ...divProps,
              ref: mergedGridRef,
              className: clsx_default(grid_default.grid, className),
              style: {
                ...style,
                gridTemplateColumns: `repeat(${effectiveColumns}, minmax(0, 1fr))`,
                gridAutoRows: rowHeight,
                gap: gapPx
              },
              children: [
                items.map((id) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                  GridItem,
                  {
                    item: resolvedItemMap.get(
                      id
                    ),
                    maxColumns: effectiveColumns,
                    disabled: !editMode,
                    verticalResizable: rowHeight !== "auto",
                    interacting: activeId !== null || isResizing,
                    onResize: handleResize,
                    onResizeEnd: persistTemporaryLayout,
                    actionableArea: actionableAreaMap.get(id),
                    renderResizeHandle,
                    children: childrenMap.get(id)
                  },
                  id
                )),
                remaining
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(DragOverlay, { children: activeId && childrenMap.get(activeId) ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: grid_default["drag-preview"], children: childrenMap.get(activeId) }) : null })
        ]
      }
    );
  }
);

// routes/dashboard/widget-dashboard/components/widgets/widgets.module.css
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='587e07838a']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "587e07838a");
  style.appendChild(document.createTextNode("._561eb2c5c7cbcb6b__grid{width:100%}"));
  document.head.appendChild(style);
}
var widgets_default = { "grid": "_561eb2c5c7cbcb6b__grid" };

// routes/dashboard/widget-dashboard/components/widgets/widgets.tsx
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
function toGridLayout(widgets) {
  return widgets.map((w) => ({
    key: w.uuid,
    ...w.placement
  }));
}
function applyGridChange(widgets, gridLayout) {
  return gridLayout.map(({ key: key2, ...placement }) => {
    const existing = widgets.find((w) => w.uuid === key2);
    if (!existing) {
      return {
        uuid: key2,
        type: "",
        placement
      };
    }
    return {
      ...existing,
      placement
    };
  });
}
var Widgets = (0, import_element47.forwardRef)(
  function Widgets2({ className }, ref) {
    const { layout, onLayoutChange, editMode, gridSettings } = useDashboardInternalContext();
    const gridLayout = (0, import_element47.useMemo)(() => toGridLayout(layout), [layout]);
    const handleLayoutChange = (0, import_element47.useCallback)(
      (newGridLayout) => {
        onLayoutChange(applyGridChange(layout, newGridLayout));
      },
      [layout, onLayoutChange]
    );
    const children = layout.map((widget, index2) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      WidgetChrome,
      {
        widget,
        index: index2
      },
      widget.uuid
    ));
    const sharedProps = {
      layout: gridLayout,
      spacing: gridSettings.spacing,
      rowHeight: gridSettings.rowHeight,
      editMode,
      onChangeLayout: handleLayoutChange
    };
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { ref, className: clsx_default(widgets_default.grid, className), children: gridSettings.columns !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      DashboardGrid,
      {
        ...sharedProps,
        columns: gridSettings.columns,
        children
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      DashboardGrid,
      {
        ...sharedProps,
        minColumnWidth: gridSettings.minColumnWidth,
        children
      }
    ) });
  }
);

// routes/dashboard/widget-dashboard/components/no-widgets-state/no-widgets-state.tsx
var import_i18n6 = __toESM(require_i18n());

// routes/dashboard/widget-dashboard/components/no-widgets-state/no-widgets-state.module.css
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='4dec2ea292']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "4dec2ea292");
  style.appendChild(document.createTextNode("._43aa5df1b0907556__root{padding-block-start:calc(var(--wpds-dimension-padding-3xl, 32px)*3.5)}"));
  document.head.appendChild(style);
}
var no_widgets_state_default = { "root": "_43aa5df1b0907556__root" };

// routes/dashboard/widget-dashboard/components/no-widgets-state/no-widgets-state.tsx
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
function NoWidgetsStateImpl({ children }) {
  const { layout } = useDashboardInternalContext();
  if (layout.length > 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Stack, { justify: "center", align: "center", className: no_widgets_state_default.root, children: children ?? /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(empty_state_exports.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(empty_state_exports.Icon, { icon: home_default }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(empty_state_exports.Title, { children: (0, import_i18n6.__)("Your dashboard is empty") }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(empty_state_exports.Description, { children: (0, import_i18n6.__)(
      "Add widgets to start customizing your dashboard."
    ) })
  ] }) });
}
var NoWidgetsState = NoWidgetsStateImpl;

// routes/dashboard/widget-dashboard/widget-dashboard.tsx
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var WidgetDashboard = Object.assign(
  function WidgetDashboard2({
    layout,
    onLayoutChange,
    widgetTypes,
    editMode,
    onEditChange,
    resolveWidgetModule,
    gridSettings,
    children
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      WidgetDashboardProvider,
      {
        layout,
        onLayoutChange,
        widgetTypes,
        editMode,
        onEditChange,
        resolveWidgetModule,
        gridSettings,
        children: children ?? /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_jsx_runtime50.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(NoWidgetsState, {}),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Actions3, {}),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Widgets, {})
        ] })
      }
    );
  },
  { Actions: Actions3, Widgets, WidgetChrome, NoWidgetsState }
);

// routes/dashboard/widget-types/hooks/use-widget-types.ts
var import_data2 = __toESM(require_data());
var import_core_data = __toESM(require_core_data());
var import_element48 = __toESM(require_element());
var import_i18n7 = __toESM(require_i18n());
(0, import_data2.dispatch)(import_core_data.store).addEntities([
  {
    name: "widgetModule",
    kind: "root",
    key: "name",
    baseURL: "/wp/v2/widget-modules",
    plural: "widgetModules",
    label: (0, import_i18n7.__)("Widget modules"),
    supportsPagination: false
  }
]);
function useWidgetTypes() {
  const records = (0, import_data2.useSelect)(
    (select) => select(import_core_data.store).getEntityRecords("root", "widgetModule"),
    []
  );
  const [widgetTypes, setWidgetTypes] = (0, import_element48.useState)([]);
  (0, import_element48.useEffect)(() => {
    if (!records) {
      return;
    }
    let cancelled = false;
    Promise.all(
      records.map(async (record) => {
        if (!record.widget_module) {
          return null;
        }
        try {
          const module = await import(
            /* webpackIgnore: true */
            record.widget_module
          );
          if (!module?.default) {
            return null;
          }
          return {
            ...module.default,
            name: record.name,
            renderModule: record.render_module ?? ""
          };
        } catch {
          return null;
        }
      })
    ).then((results) => {
      if (cancelled) {
        return;
      }
      setWidgetTypes(
        results.filter((t) => t !== null)
      );
    });
    return () => {
      cancelled = true;
    };
  }, [records]);
  return widgetTypes;
}

// routes/dashboard/stage.module.css
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='5a63b052df']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "5a63b052df");
  style.appendChild(document.createTextNode("._2381d7918cf57baa__dashboard-widgets-container{margin:var(--wpds-dimension-padding-md,12px)}"));
  document.head.appendChild(style);
}
var stage_default = { "dashboard-widgets-container": "_2381d7918cf57baa__dashboard-widgets-container" };

// routes/dashboard/stage.tsx
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
function Dashboard() {
  const [layout, setLayout] = use_dashboard_layout_default();
  const widgetTypes = useWidgetTypes();
  const [editMode, setEditMode] = (0, import_element49.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    WidgetDashboard,
    {
      layout,
      onLayoutChange: setLayout,
      widgetTypes,
      editMode,
      onEditChange: setEditMode,
      children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
        page_default,
        {
          title: (0, import_i18n8.__)("Dashboard"),
          actions: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(WidgetDashboard.Actions, {}),
          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: stage_default["dashboard-widgets-container"], children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(WidgetDashboard.Widgets, {}) })
        }
      )
    }
  );
}
var stage = Dashboard;
export {
  stage
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
