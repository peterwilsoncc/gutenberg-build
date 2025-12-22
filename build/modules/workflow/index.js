var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// package-external:@wordpress/data
var require_data = __commonJS({
  "package-external:@wordpress/data"(exports, module) {
    module.exports = window.wp.data;
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

// package-external:@wordpress/keyboard-shortcuts
var require_keyboard_shortcuts = __commonJS({
  "package-external:@wordpress/keyboard-shortcuts"(exports, module) {
    module.exports = window.wp.keyboardShortcuts;
  }
});

// package-external:@wordpress/primitives
var require_primitives = __commonJS({
  "package-external:@wordpress/primitives"(exports, module) {
    module.exports = window.wp.primitives;
  }
});

// package-external:@wordpress/private-apis
var require_private_apis = __commonJS({
  "package-external:@wordpress/private-apis"(exports, module) {
    module.exports = window.wp.privateApis;
  }
});

// packages/workflow/build-module/index.js
var import_element3 = __toESM(require_element(), 1);

// node_modules/cmdk/dist/chunk-NZJY6EH4.mjs
var U = 1;
var Y = 0.9;
var H = 0.8;
var J = 0.17;
var p = 0.1;
var u = 0.999;
var $ = 0.9999;
var k = 0.99;
var m = /[\\\/_+.#"@\[\(\{&]/;
var B = /[\\\/_+.#"@\[\(\{&]/g;
var K = /[\s-]/;
var X = /[\s-]/g;
function G(_, C, h, P2, A, f, O) {
  if (f === C.length) return A === _.length ? U : k;
  var T2 = `${A},${f}`;
  if (O[T2] !== void 0) return O[T2];
  for (var L2 = P2.charAt(f), c = h.indexOf(L2, A), S = 0, E, N2, R, M; c >= 0; ) E = G(_, C, h, P2, c + 1, f + 1, O), E > S && (c === A ? E *= U : m.test(_.charAt(c - 1)) ? (E *= H, R = _.slice(A, c - 1).match(B), R && A > 0 && (E *= Math.pow(u, R.length))) : K.test(_.charAt(c - 1)) ? (E *= Y, M = _.slice(A, c - 1).match(X), M && A > 0 && (E *= Math.pow(u, M.length))) : (E *= J, A > 0 && (E *= Math.pow(u, c - A))), _.charAt(c) !== C.charAt(f) && (E *= $)), (E < p && h.charAt(c - 1) === P2.charAt(f + 1) || P2.charAt(f + 1) === P2.charAt(f) && h.charAt(c - 1) !== P2.charAt(f)) && (N2 = G(_, C, h, P2, c + 1, f + 2, O), N2 * p > E && (E = N2 * p)), E > S && (S = E), c = h.indexOf(L2, c + 1);
  return O[T2] = S, S;
}
function D(_) {
  return _.toLowerCase().replace(X, " ");
}
function W(_, C, h) {
  return _ = h && h.length > 0 ? `${_ + " " + h.join(" ")}` : _, G(_, C, D(_), D(C), 0, 0, {});
}

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var React37 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/primitive/dist/index.mjs
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React = __toESM(require_react(), 1);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-context/dist/index.mjs
var React2 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function createContext2(rootComponentName, defaultContext) {
  const Context = React2.createContext(defaultContext);
  const Provider = (props) => {
    const { children, ...context } = props;
    const value = React2.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, { value, children });
  };
  Provider.displayName = rootComponentName + "Provider";
  function useContext22(consumerName) {
    const context = React2.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider, useContext22];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React2.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React2.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React2.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React2.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React2.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React2.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-id/dist/index.mjs
var React4 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React3 = __toESM(require_react(), 1);
var useLayoutEffect2 = globalThis?.document ? React3.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-id/dist/index.mjs
var useReactId = React4[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React4.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React5 = __toESM(require_react(), 1);
var React22 = __toESM(require_react(), 1);
var useInsertionEffect = React5[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  },
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  if (true) {
    const isControlledRef = React5.useRef(prop !== void 0);
    React5.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React5.useCallback(
    (nextValue) => {
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          onChangeRef.current?.(value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React5.useState(defaultProp);
  const prevValueRef = React5.useRef(value);
  const onChangeRef = React5.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React5.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var React11 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/primitive/dist/index.mjs
var canUseDOM2 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers2(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React8 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-slot/dist/index.mjs
var React7 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React6 = __toESM(require_react(), 1);
function setRef2(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs2(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef2(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef2(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs2(...refs) {
  return React6.useCallback(composeRefs2(...refs), refs);
}

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-slot/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = React7.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React7.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React7.Children.count(newElement) > 1) return React7.Children.only(null);
          return React7.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React7.isValidElement(newElement) ? React7.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = React7.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React7.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React7.Fragment) {
        props2.ref = forwardedRef ? composeRefs2(forwardedRef, childrenRef) : childrenRef;
      }
      return React7.cloneElement(children, props2);
    }
    return React7.Children.count(children) > 1 ? React7.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(child) {
  return React7.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot2 = createSlot(`Primitive.${node}`);
  const Node2 = React8.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var React9 = __toESM(require_react(), 1);
function useCallbackRef(callback) {
  const callbackRef = React9.useRef(callback);
  React9.useEffect(() => {
    callbackRef.current = callback;
  });
  return React9.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

// node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var React10 = __toESM(require_react(), 1);
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  React10.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React11.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = React11.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = React11.useContext(DismissableLayerContext);
    const [node, setNode] = React11.useState(null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = React11.useState({});
    const composedRefs = useComposedRefs2(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    React11.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    React11.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    React11.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers2(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers2(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers2(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = React11.forwardRef((props, forwardedRef) => {
  const context = React11.useContext(DismissableLayerContext);
  const ref = React11.useRef(null);
  const composedRefs = useComposedRefs2(forwardedRef, ref);
  React11.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React11.useRef(false);
  const handleClickRef = React11.useRef(() => {
  });
  React11.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React11.useRef(false);
  React11.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}

// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var React16 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React12 = __toESM(require_react(), 1);
function setRef3(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs3(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef3(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef3(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs3(...refs) {
  return React12.useCallback(composeRefs3(...refs), refs);
}

// node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React14 = __toESM(require_react(), 1);
var ReactDOM2 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-slot/dist/index.mjs
var React13 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
// @__NO_SIDE_EFFECTS__
function createSlot2(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone2(ownerName);
  const Slot2 = React13.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React13.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable2);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React13.Children.count(newElement) > 1) return React13.Children.only(null);
          return React13.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React13.isValidElement(newElement) ? React13.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone2(ownerName) {
  const SlotClone = React13.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React13.isValidElement(children)) {
      const childrenRef = getElementRef2(children);
      const props2 = mergeProps2(slotProps, children.props);
      if (children.type !== React13.Fragment) {
        props2.ref = forwardedRef ? composeRefs3(forwardedRef, childrenRef) : childrenRef;
      }
      return React13.cloneElement(children, props2);
    }
    return React13.Children.count(children) > 1 ? React13.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER2 = Symbol("radix.slottable");
function isSlottable2(child) {
  return React13.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER2;
}
function mergeProps2(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef2(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var NODES2 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive2 = NODES2.reduce((primitive, node) => {
  const Slot2 = createSlot2(`Primitive.${node}`);
  const Node2 = React14.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});

// node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var React15 = __toESM(require_react(), 1);
function useCallbackRef2(callback) {
  const callbackRef = React15.useRef(callback);
  React15.useEffect(() => {
    callbackRef.current = callback;
  });
  return React15.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = React16.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = React16.useState(null);
  const onMountAutoFocus = useCallbackRef2(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef2(onUnmountAutoFocusProp);
  const lastFocusedElementRef = React16.useRef(null);
  const composedRefs = useComposedRefs3(forwardedRef, (node) => setContainer(node));
  const focusScope = React16.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  React16.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body) return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0) focus(container);
        }
      };
      var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container) mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  React16.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = React16.useCallback(
    (event) => {
      if (!loop && !trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2) event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop) focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop) focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Primitive2.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container })) return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) {
    updatedArray.splice(index, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}

// node_modules/@radix-ui/react-portal/dist/index.mjs
var React21 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React19 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-slot/dist/index.mjs
var React18 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React17 = __toESM(require_react(), 1);
function setRef4(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs4(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef4(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef4(refs[i], null);
          }
        }
      };
    }
  };
}

// node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-slot/dist/index.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
// @__NO_SIDE_EFFECTS__
function createSlot3(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone3(ownerName);
  const Slot2 = React18.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React18.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable3);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React18.Children.count(newElement) > 1) return React18.Children.only(null);
          return React18.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React18.isValidElement(newElement) ? React18.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone3(ownerName) {
  const SlotClone = React18.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React18.isValidElement(children)) {
      const childrenRef = getElementRef3(children);
      const props2 = mergeProps3(slotProps, children.props);
      if (children.type !== React18.Fragment) {
        props2.ref = forwardedRef ? composeRefs4(forwardedRef, childrenRef) : childrenRef;
      }
      return React18.cloneElement(children, props2);
    }
    return React18.Children.count(children) > 1 ? React18.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER3 = Symbol("radix.slottable");
function isSlottable3(child) {
  return React18.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER3;
}
function mergeProps3(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef3(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var NODES3 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive3 = NODES3.reduce((primitive, node) => {
  const Slot2 = createSlot3(`Primitive.${node}`);
  const Node2 = React19.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});

// node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React20 = __toESM(require_react(), 1);
var useLayoutEffect22 = globalThis?.document ? React20.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-portal/dist/index.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var PORTAL_NAME = "Portal";
var Portal = React21.forwardRef((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React21.useState(false);
  useLayoutEffect22(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? import_react_dom.default.createPortal(/* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Primitive3.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;

// node_modules/@radix-ui/react-presence/dist/index.mjs
var React25 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-presence/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React23 = __toESM(require_react(), 1);
function setRef5(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs5(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef5(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef5(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs4(...refs) {
  return React23.useCallback(composeRefs5(...refs), refs);
}

// node_modules/@radix-ui/react-presence/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React24 = __toESM(require_react(), 1);
var useLayoutEffect23 = globalThis?.document ? React24.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-presence/dist/index.mjs
var React26 = __toESM(require_react(), 1);
function useStateMachine(initialState, machine) {
  return React26.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React25.Children.only(children);
  const ref = useComposedRefs4(presence.ref, getElementRef4(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React25.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React25.useState();
  const stylesRef = React25.useRef(null);
  const prevPresentRef = React25.useRef(present);
  const prevAnimationNameRef = React25.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React25.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect23(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect23(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React25.useCallback((node2) => {
      stylesRef.current = node2 ? getComputedStyle(node2) : null;
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef4(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React28 = __toESM(require_react(), 1);
var ReactDOM5 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-slot/dist/index.mjs
var React27 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
// @__NO_SIDE_EFFECTS__
function createSlot4(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone4(ownerName);
  const Slot2 = React27.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React27.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable4);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React27.Children.count(newElement) > 1) return React27.Children.only(null);
          return React27.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React27.isValidElement(newElement) ? React27.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone4(ownerName) {
  const SlotClone = React27.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React27.isValidElement(children)) {
      const childrenRef = getElementRef5(children);
      const props2 = mergeProps4(slotProps, children.props);
      if (children.type !== React27.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React27.cloneElement(children, props2);
    }
    return React27.Children.count(children) > 1 ? React27.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER4 = Symbol("radix.slottable");
function isSlottable4(child) {
  return React27.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER4;
}
function mergeProps4(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef5(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var NODES4 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive4 = NODES4.reduce((primitive, node) => {
  const Slot2 = createSlot4(`Primitive.${node}`);
  const Node2 = React28.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var React29 = __toESM(require_react(), 1);
var count2 = 0;
function useFocusGuards() {
  React29.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count2++;
    return () => {
      if (count2 === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count2--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}

// node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2)) t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t2 = {};
  for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
    t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/@radix-ui/react-dialog/node_modules/react-remove-scroll/dist/es2015/Combination.js
var React36 = __toESM(require_react());

// node_modules/@radix-ui/react-dialog/node_modules/react-remove-scroll/dist/es2015/UI.js
var React32 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react = __toESM(require_react());
function useCallbackRef3(initialValue, callback) {
  var ref = (0, import_react.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React30 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React30.useLayoutEffect : React30.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef3(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/exports.js
var React31 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React31.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/@radix-ui/react-dialog/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/@radix-ui/react-dialog/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React32.forwardRef(function(props, parentRef) {
  var ref = React32.useRef(null);
  var _a = React32.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React32.createElement(
    React32.Fragment,
    null,
    enabled && React32.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noRelative, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React32.cloneElement(React32.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React32.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/@radix-ui/react-dialog/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React35 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React34 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React33 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css2) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css2;
  } else {
    tag.appendChild(document.createTextNode(css2));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React33.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React34.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React34.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React34.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/@radix-ui/react-dialog/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/@radix-ui/react-dialog/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    if (!target) {
      break;
    }
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    var parent_1 = target.parentNode;
    target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/@radix-ui/react-dialog/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React35.useRef([]);
  var touchStartRef = React35.useRef([0, 0]);
  var activeAxis = React35.useRef();
  var id = React35.useState(idCounter++)[0];
  var Style2 = React35.useState(styleSingleton)[0];
  var lastProps = React35.useRef(props);
  React35.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React35.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React35.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React35.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React35.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React35.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React35.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React35.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React35.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React35.createElement(
    React35.Fragment,
    null,
    inert ? React35.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React35.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// node_modules/@radix-ui/react-dialog/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/@radix-ui/react-dialog/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React36.forwardRef(function(props, ref) {
  return React36.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = React37.useRef(null);
  const contentRef = React37.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React37.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = React37.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Primitive4.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME2 = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME2, {
  forceMount: void 0
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME2, __scopeDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PortalProvider, { scope: __scopeDialog, forceMount, children: React37.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Portal, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME2;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = React37.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var Slot = createSlot4("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = React37.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Combination_default, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        Primitive4.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContent = React37.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = React37.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = React37.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    React37.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = React37.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = React37.useRef(false);
    const hasPointerDownOutsideRef = React37.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var DialogContentImpl = React37.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = React37.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            DismissableLayer,
            {
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = React37.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Primitive4.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React37.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Primitive4.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = React37.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Primitive4.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  React37.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle) console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  React37.useEffect(() => {
    const describedById = contentRef.current?.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription) console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root = Dialog;
var Portal2 = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;

// node_modules/cmdk/dist/index.mjs
var t = __toESM(require_react(), 1);

// node_modules/cmdk/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React40 = __toESM(require_react(), 1);
var ReactDOM6 = __toESM(require_react_dom(), 1);

// node_modules/cmdk/node_modules/@radix-ui/react-slot/dist/index.mjs
var React39 = __toESM(require_react(), 1);

// node_modules/cmdk/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React38 = __toESM(require_react(), 1);
function setRef6(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs6(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef6(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef6(refs[i], null);
          }
        }
      };
    }
  };
}

// node_modules/cmdk/node_modules/@radix-ui/react-slot/dist/index.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var use = React39[" use ".trim().toString()];
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot5(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone5(ownerName);
  const Slot2 = React39.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    const childrenArray = React39.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable5);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React39.Children.count(newElement) > 1) return React39.Children.only(null);
          return React39.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React39.isValidElement(newElement) ? React39.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone5(ownerName) {
  const SlotClone = React39.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    if (React39.isValidElement(children)) {
      const childrenRef = getElementRef6(children);
      const props2 = mergeProps5(slotProps, children.props);
      if (children.type !== React39.Fragment) {
        props2.ref = forwardedRef ? composeRefs6(forwardedRef, childrenRef) : childrenRef;
      }
      return React39.cloneElement(children, props2);
    }
    return React39.Children.count(children) > 1 ? React39.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER5 = Symbol("radix.slottable");
function isSlottable5(child) {
  return React39.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER5;
}
function mergeProps5(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef6(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/cmdk/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var NODES5 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive5 = NODES5.reduce((primitive, node) => {
  const Slot2 = createSlot5(`Primitive.${node}`);
  const Node2 = React40.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});

// node_modules/cmdk/node_modules/@radix-ui/react-id/dist/index.mjs
var React42 = __toESM(require_react(), 1);

// node_modules/cmdk/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React41 = __toESM(require_react(), 1);
var useLayoutEffect24 = globalThis?.document ? React41.useLayoutEffect : () => {
};

// node_modules/cmdk/node_modules/@radix-ui/react-id/dist/index.mjs
var useReactId2 = React42[" useId ".trim().toString()] || (() => void 0);
var count3 = 0;
function useId2(deterministicId) {
  const [id, setId] = React42.useState(useReactId2());
  useLayoutEffect24(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count3++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/cmdk/dist/index.mjs
var N = '[cmdk-group=""]';
var Y2 = '[cmdk-group-items=""]';
var be = '[cmdk-group-heading=""]';
var le = '[cmdk-item=""]';
var ce = `${le}:not([aria-disabled="true"])`;
var Z = "cmdk-item-select";
var T = "data-value";
var Re = (r, o, n) => W(r, o, n);
var ue = t.createContext(void 0);
var K2 = () => t.useContext(ue);
var de = t.createContext(void 0);
var ee = () => t.useContext(de);
var fe = t.createContext(void 0);
var me = t.forwardRef((r, o) => {
  let n = L(() => {
    var e, a;
    return { search: "", value: (a = (e = r.value) != null ? e : r.defaultValue) != null ? a : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), u2 = L(() => /* @__PURE__ */ new Set()), c = L(() => /* @__PURE__ */ new Map()), d = L(() => /* @__PURE__ */ new Map()), f = L(() => /* @__PURE__ */ new Set()), p2 = pe(r), { label: b, children: m2, value: R, onValueChange: x, filter: C, shouldFilter: S, loop: A, disablePointerSelection: ge = false, vimBindings: j = true, ...O } = r, $2 = useId2(), q = useId2(), _ = useId2(), I = t.useRef(null), v = ke();
  k2(() => {
    if (R !== void 0) {
      let e = R.trim();
      n.current.value = e, E.emit();
    }
  }, [R]), k2(() => {
    v(6, ne);
  }, []);
  let E = t.useMemo(() => ({ subscribe: (e) => (f.current.add(e), () => f.current.delete(e)), snapshot: () => n.current, setState: (e, a, s) => {
    var i, l, g, y;
    if (!Object.is(n.current[e], a)) {
      if (n.current[e] = a, e === "search") J2(), z(), v(1, W2);
      else if (e === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let h = document.getElementById(_);
          h ? h.focus() : (i = document.getElementById($2)) == null || i.focus();
        }
        if (v(7, () => {
          var h;
          n.current.selectedItemId = (h = M()) == null ? void 0 : h.id, E.emit();
        }), s || v(5, ne), ((l = p2.current) == null ? void 0 : l.value) !== void 0) {
          let h = a != null ? a : "";
          (y = (g = p2.current).onValueChange) == null || y.call(g, h);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    f.current.forEach((e) => e());
  } }), []), U2 = t.useMemo(() => ({ value: (e, a, s) => {
    var i;
    a !== ((i = d.current.get(e)) == null ? void 0 : i.value) && (d.current.set(e, { value: a, keywords: s }), n.current.filtered.items.set(e, te(a, s)), v(2, () => {
      z(), E.emit();
    }));
  }, item: (e, a) => (u2.current.add(e), a && (c.current.has(a) ? c.current.get(a).add(e) : c.current.set(a, /* @__PURE__ */ new Set([e]))), v(3, () => {
    J2(), z(), n.current.value || W2(), E.emit();
  }), () => {
    d.current.delete(e), u2.current.delete(e), n.current.filtered.items.delete(e);
    let s = M();
    v(4, () => {
      J2(), (s == null ? void 0 : s.getAttribute("id")) === e && W2(), E.emit();
    });
  }), group: (e) => (c.current.has(e) || c.current.set(e, /* @__PURE__ */ new Set()), () => {
    d.current.delete(e), c.current.delete(e);
  }), filter: () => p2.current.shouldFilter, label: b || r["aria-label"], getDisablePointerSelection: () => p2.current.disablePointerSelection, listId: $2, inputId: _, labelId: q, listInnerRef: I }), []);
  function te(e, a) {
    var i, l;
    let s = (l = (i = p2.current) == null ? void 0 : i.filter) != null ? l : Re;
    return e ? s(e, n.current.search, a) : 0;
  }
  function z() {
    if (!n.current.search || p2.current.shouldFilter === false) return;
    let e = n.current.filtered.items, a = [];
    n.current.filtered.groups.forEach((i) => {
      let l = c.current.get(i), g = 0;
      l.forEach((y) => {
        let h = e.get(y);
        g = Math.max(h, g);
      }), a.push([i, g]);
    });
    let s = I.current;
    V().sort((i, l) => {
      var h, F;
      let g = i.getAttribute("id"), y = l.getAttribute("id");
      return ((h = e.get(y)) != null ? h : 0) - ((F = e.get(g)) != null ? F : 0);
    }).forEach((i) => {
      let l = i.closest(Y2);
      l ? l.appendChild(i.parentElement === l ? i : i.closest(`${Y2} > *`)) : s.appendChild(i.parentElement === s ? i : i.closest(`${Y2} > *`));
    }), a.sort((i, l) => l[1] - i[1]).forEach((i) => {
      var g;
      let l = (g = I.current) == null ? void 0 : g.querySelector(`${N}[${T}="${encodeURIComponent(i[0])}"]`);
      l == null || l.parentElement.appendChild(l);
    });
  }
  function W2() {
    let e = V().find((s) => s.getAttribute("aria-disabled") !== "true"), a = e == null ? void 0 : e.getAttribute(T);
    E.setState("value", a || void 0);
  }
  function J2() {
    var a, s, i, l;
    if (!n.current.search || p2.current.shouldFilter === false) {
      n.current.filtered.count = u2.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let e = 0;
    for (let g of u2.current) {
      let y = (s = (a = d.current.get(g)) == null ? void 0 : a.value) != null ? s : "", h = (l = (i = d.current.get(g)) == null ? void 0 : i.keywords) != null ? l : [], F = te(y, h);
      n.current.filtered.items.set(g, F), F > 0 && e++;
    }
    for (let [g, y] of c.current) for (let h of y) if (n.current.filtered.items.get(h) > 0) {
      n.current.filtered.groups.add(g);
      break;
    }
    n.current.filtered.count = e;
  }
  function ne() {
    var a, s, i;
    let e = M();
    e && (((a = e.parentElement) == null ? void 0 : a.firstChild) === e && ((i = (s = e.closest(N)) == null ? void 0 : s.querySelector(be)) == null || i.scrollIntoView({ block: "nearest" })), e.scrollIntoView({ block: "nearest" }));
  }
  function M() {
    var e;
    return (e = I.current) == null ? void 0 : e.querySelector(`${le}[aria-selected="true"]`);
  }
  function V() {
    var e;
    return Array.from(((e = I.current) == null ? void 0 : e.querySelectorAll(ce)) || []);
  }
  function X2(e) {
    let s = V()[e];
    s && E.setState("value", s.getAttribute(T));
  }
  function Q(e) {
    var g;
    let a = M(), s = V(), i = s.findIndex((y) => y === a), l = s[i + e];
    (g = p2.current) != null && g.loop && (l = i + e < 0 ? s[s.length - 1] : i + e === s.length ? s[0] : s[i + e]), l && E.setState("value", l.getAttribute(T));
  }
  function re(e) {
    let a = M(), s = a == null ? void 0 : a.closest(N), i;
    for (; s && !i; ) s = e > 0 ? we(s, N) : De(s, N), i = s == null ? void 0 : s.querySelector(ce);
    i ? E.setState("value", i.getAttribute(T)) : Q(e);
  }
  let oe = () => X2(V().length - 1), ie = (e) => {
    e.preventDefault(), e.metaKey ? oe() : e.altKey ? re(1) : Q(1);
  }, se = (e) => {
    e.preventDefault(), e.metaKey ? X2(0) : e.altKey ? re(-1) : Q(-1);
  };
  return t.createElement(Primitive5.div, { ref: o, tabIndex: -1, ...O, "cmdk-root": "", onKeyDown: (e) => {
    var s;
    (s = O.onKeyDown) == null || s.call(O, e);
    let a = e.nativeEvent.isComposing || e.keyCode === 229;
    if (!(e.defaultPrevented || a)) switch (e.key) {
      case "n":
      case "j": {
        j && e.ctrlKey && ie(e);
        break;
      }
      case "ArrowDown": {
        ie(e);
        break;
      }
      case "p":
      case "k": {
        j && e.ctrlKey && se(e);
        break;
      }
      case "ArrowUp": {
        se(e);
        break;
      }
      case "Home": {
        e.preventDefault(), X2(0);
        break;
      }
      case "End": {
        e.preventDefault(), oe();
        break;
      }
      case "Enter": {
        e.preventDefault();
        let i = M();
        if (i) {
          let l = new Event(Z);
          i.dispatchEvent(l);
        }
      }
    }
  } }, t.createElement("label", { "cmdk-label": "", htmlFor: U2.inputId, id: U2.labelId, style: Te }, b), B2(r, (e) => t.createElement(de.Provider, { value: E }, t.createElement(ue.Provider, { value: U2 }, e))));
});
var he = t.forwardRef((r, o) => {
  var _, I;
  let n = useId2(), u2 = t.useRef(null), c = t.useContext(fe), d = K2(), f = pe(r), p2 = (I = (_ = f.current) == null ? void 0 : _.forceMount) != null ? I : c == null ? void 0 : c.forceMount;
  k2(() => {
    if (!p2) return d.item(n, c == null ? void 0 : c.id);
  }, [p2]);
  let b = ve(n, u2, [r.value, r.children, u2], r.keywords), m2 = ee(), R = P((v) => v.value && v.value === b.current), x = P((v) => p2 || d.filter() === false ? true : v.search ? v.filtered.items.get(n) > 0 : true);
  t.useEffect(() => {
    let v = u2.current;
    if (!(!v || r.disabled)) return v.addEventListener(Z, C), () => v.removeEventListener(Z, C);
  }, [x, r.onSelect, r.disabled]);
  function C() {
    var v, E;
    S(), (E = (v = f.current).onSelect) == null || E.call(v, b.current);
  }
  function S() {
    m2.setState("value", b.current, true);
  }
  if (!x) return null;
  let { disabled: A, value: ge, onSelect: j, forceMount: O, keywords: $2, ...q } = r;
  return t.createElement(Primitive5.div, { ref: composeRefs6(u2, o), ...q, id: n, "cmdk-item": "", role: "option", "aria-disabled": !!A, "aria-selected": !!R, "data-disabled": !!A, "data-selected": !!R, onPointerMove: A || d.getDisablePointerSelection() ? void 0 : S, onClick: A ? void 0 : C }, r.children);
});
var Ee = t.forwardRef((r, o) => {
  let { heading: n, children: u2, forceMount: c, ...d } = r, f = useId2(), p2 = t.useRef(null), b = t.useRef(null), m2 = useId2(), R = K2(), x = P((S) => c || R.filter() === false ? true : S.search ? S.filtered.groups.has(f) : true);
  k2(() => R.group(f), []), ve(f, p2, [r.value, r.heading, b]);
  let C = t.useMemo(() => ({ id: f, forceMount: c }), [c]);
  return t.createElement(Primitive5.div, { ref: composeRefs6(p2, o), ...d, "cmdk-group": "", role: "presentation", hidden: x ? void 0 : true }, n && t.createElement("div", { ref: b, "cmdk-group-heading": "", "aria-hidden": true, id: m2 }, n), B2(r, (S) => t.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? m2 : void 0 }, t.createElement(fe.Provider, { value: C }, S))));
});
var ye = t.forwardRef((r, o) => {
  let { alwaysRender: n, ...u2 } = r, c = t.useRef(null), d = P((f) => !f.search);
  return !n && !d ? null : t.createElement(Primitive5.div, { ref: composeRefs6(c, o), ...u2, "cmdk-separator": "", role: "separator" });
});
var Se = t.forwardRef((r, o) => {
  let { onValueChange: n, ...u2 } = r, c = r.value != null, d = ee(), f = P((m2) => m2.search), p2 = P((m2) => m2.selectedItemId), b = K2();
  return t.useEffect(() => {
    r.value != null && d.setState("search", r.value);
  }, [r.value]), t.createElement(Primitive5.input, { ref: o, ...u2, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": b.listId, "aria-labelledby": b.labelId, "aria-activedescendant": p2, id: b.inputId, type: "text", value: c ? r.value : f, onChange: (m2) => {
    c || d.setState("search", m2.target.value), n == null || n(m2.target.value);
  } });
});
var Ce = t.forwardRef((r, o) => {
  let { children: n, label: u2 = "Suggestions", ...c } = r, d = t.useRef(null), f = t.useRef(null), p2 = P((m2) => m2.selectedItemId), b = K2();
  return t.useEffect(() => {
    if (f.current && d.current) {
      let m2 = f.current, R = d.current, x, C = new ResizeObserver(() => {
        x = requestAnimationFrame(() => {
          let S = m2.offsetHeight;
          R.style.setProperty("--cmdk-list-height", S.toFixed(1) + "px");
        });
      });
      return C.observe(m2), () => {
        cancelAnimationFrame(x), C.unobserve(m2);
      };
    }
  }, []), t.createElement(Primitive5.div, { ref: composeRefs6(d, o), ...c, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": p2, "aria-label": u2, id: b.listId }, B2(r, (m2) => t.createElement("div", { ref: composeRefs6(f, b.listInnerRef), "cmdk-list-sizer": "" }, m2)));
});
var xe = t.forwardRef((r, o) => {
  let { open: n, onOpenChange: u2, overlayClassName: c, contentClassName: d, container: f, ...p2 } = r;
  return t.createElement(Root, { open: n, onOpenChange: u2 }, t.createElement(Portal2, { container: f }, t.createElement(Overlay, { "cmdk-overlay": "", className: c }), t.createElement(Content, { "aria-label": r.label, "cmdk-dialog": "", className: d }, t.createElement(me, { ref: o, ...p2 }))));
});
var Ie = t.forwardRef((r, o) => P((u2) => u2.filtered.count === 0) ? t.createElement(Primitive5.div, { ref: o, ...r, "cmdk-empty": "", role: "presentation" }) : null);
var Pe = t.forwardRef((r, o) => {
  let { progress: n, children: u2, label: c = "Loading...", ...d } = r;
  return t.createElement(Primitive5.div, { ref: o, ...d, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": c }, B2(r, (f) => t.createElement("div", { "aria-hidden": true }, f)));
});
var _e = Object.assign(me, { List: Ce, Item: he, Input: Se, Group: Ee, Separator: ye, Dialog: xe, Empty: Ie, Loading: Pe });
function we(r, o) {
  let n = r.nextElementSibling;
  for (; n; ) {
    if (n.matches(o)) return n;
    n = n.nextElementSibling;
  }
}
function De(r, o) {
  let n = r.previousElementSibling;
  for (; n; ) {
    if (n.matches(o)) return n;
    n = n.previousElementSibling;
  }
}
function pe(r) {
  let o = t.useRef(r);
  return k2(() => {
    o.current = r;
  }), o;
}
var k2 = typeof window == "undefined" ? t.useEffect : t.useLayoutEffect;
function L(r) {
  let o = t.useRef();
  return o.current === void 0 && (o.current = r()), o;
}
function P(r) {
  let o = ee(), n = () => r(o.snapshot());
  return t.useSyncExternalStore(o.subscribe, n, n);
}
function ve(r, o, n, u2 = []) {
  let c = t.useRef(), d = K2();
  return k2(() => {
    var b;
    let f = (() => {
      var m2;
      for (let R of n) {
        if (typeof R == "string") return R.trim();
        if (typeof R == "object" && "current" in R) return R.current ? (m2 = R.current.textContent) == null ? void 0 : m2.trim() : c.current;
      }
    })(), p2 = u2.map((m2) => m2.trim());
    d.value(r, f, p2), (b = o.current) == null || b.setAttribute(T, f), c.current = f;
  }), c;
}
var ke = () => {
  let [r, o] = t.useState(), n = L(() => /* @__PURE__ */ new Map());
  return k2(() => {
    n.current.forEach((u2) => u2()), n.current = /* @__PURE__ */ new Map();
  }, [r]), (u2, c) => {
    n.current.set(u2, c), o({});
  };
};
function Me(r) {
  let o = r.type;
  return typeof o == "function" ? o(r.props) : "render" in o ? o.render(r.props) : r;
}
function B2({ asChild: r, children: o }, n) {
  return r && t.isValidElement(o) ? t.cloneElement(Me(o), { ref: o.ref }, n(o.props.children)) : n(o);
}
var Te = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };

// packages/workflow/build-module/components/workflow-menu.js
var import_data = __toESM(require_data(), 1);
var import_element2 = __toESM(require_element(), 1);
var import_i18n = __toESM(require_i18n(), 1);
var import_components = __toESM(require_components(), 1);
var import_keyboard_shortcuts = __toESM(require_keyboard_shortcuts(), 1);

// packages/icons/build-module/icon/index.js
var import_element = __toESM(require_element(), 1);
var icon_default = (0, import_element.forwardRef)(
  ({ icon, size = 24, ...props }, ref) => {
    return (0, import_element.cloneElement)(icon, {
      width: size,
      height: size,
      ...props,
      ref
    });
  }
);

// packages/icons/build-module/library/search.js
var import_primitives = __toESM(require_primitives(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var search_default = /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_primitives.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_primitives.Path, { d: "M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" }) });

// packages/workflow/build-module/components/workflow-menu.js
import { executeAbility, store as abilitiesStore } from "@wordpress/abilities";

// packages/workflow/build-module/lock-unlock.js
var import_private_apis = __toESM(require_private_apis(), 1);
var { lock, unlock } = (0, import_private_apis.__dangerousOptInToUnstableAPIsOnlyForCoreModules)(
  "I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.",
  "@wordpress/workflows"
);

// packages/workflow/build-module/components/workflow-menu.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var css = `/**
 * Typography
 */
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
/**
 * Creates a checkerboard pattern background to indicate transparency.
 * @param {String} $size - The size of the squares in the checkerboard pattern. Default is 12px.
 */
:root {
  --wp-block-synced-color: #7a00df;
  --wp-block-synced-color--rgb: 122, 0, 223;
  --wp-bound-block-color: var(--wp-block-synced-color);
  --wp-editor-canvas-background: #ddd;
  --wp-admin-theme-color: #007cba;
  --wp-admin-theme-color--rgb: 0, 124, 186;
  --wp-admin-theme-color-darker-10: rgb(0, 107, 160.5);
  --wp-admin-theme-color-darker-10--rgb: 0, 107, 160.5;
  --wp-admin-theme-color-darker-20: #005a87;
  --wp-admin-theme-color-darker-20--rgb: 0, 90, 135;
  --wp-admin-border-width-focus: 2px;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  :root {
    --wp-admin-border-width-focus: 1.5px;
  }
}

.workflows-workflow-menu {
  border-radius: 4px;
  width: calc(100% - 32px);
  margin: auto;
  max-width: 400px;
  position: relative;
  top: calc(5% + 64px);
}
@media (min-width: 600px) {
  .workflows-workflow-menu {
    top: calc(10% + 64px);
  }
}
.workflows-workflow-menu .components-modal__content {
  margin: 0;
  padding: 0;
}

.workflows-workflow-menu__overlay {
  display: block;
  align-items: start;
}

.workflows-workflow-menu__header {
  padding: 0 16px;
}

.workflows-workflow-menu__header-search-icon:dir(ltr) {
  transform: scaleX(-1);
}

.workflows-workflow-menu__container {
  will-change: transform;
}
.workflows-workflow-menu__container:focus {
  outline: none;
}
.workflows-workflow-menu__container [cmdk-input] {
  border: none;
  width: 100%;
  padding: 16px 4px;
  outline: none;
  color: #1e1e1e;
  margin: 0;
  font-size: 15px;
  line-height: 28px;
  border-radius: 0;
}
.workflows-workflow-menu__container [cmdk-input]::placeholder {
  color: #757575;
}
.workflows-workflow-menu__container [cmdk-input]:focus {
  box-shadow: none;
  outline: none;
}
.workflows-workflow-menu__container [cmdk-item] {
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #1e1e1e;
  font-size: 13px;
}
.workflows-workflow-menu__container [cmdk-item][aria-selected=true], .workflows-workflow-menu__container [cmdk-item]:active {
  background: var(--wp-admin-theme-color);
  color: #fff;
}
.workflows-workflow-menu__container [cmdk-item][aria-disabled=true] {
  color: #949494;
  cursor: not-allowed;
}
.workflows-workflow-menu__container [cmdk-item] > div {
  min-height: 40px;
  padding: 4px;
  padding-left: 16px;
}
.workflows-workflow-menu__container [cmdk-root] > [cmdk-list] {
  max-height: 368px;
  overflow: auto;
}
.workflows-workflow-menu__container [cmdk-root] > [cmdk-list] [cmdk-list-sizer] > [cmdk-group]:last-child [cmdk-group-items]:not(:empty) {
  padding-bottom: 8px;
}
.workflows-workflow-menu__container [cmdk-root] > [cmdk-list] [cmdk-list-sizer] > [cmdk-group] > [cmdk-group-items]:not(:empty) {
  padding: 0 8px;
}
.workflows-workflow-menu__container [cmdk-empty] {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  color: #1e1e1e;
  padding: 8px 0 32px;
}
.workflows-workflow-menu__container [cmdk-loading] {
  padding: 16px;
}
.workflows-workflow-menu__container [cmdk-list-sizer] {
  position: relative;
}

.workflows-workflow-menu__item span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.workflows-workflow-menu__item mark {
  color: inherit;
  background: unset;
  font-weight: 600;
}

.workflows-workflow-menu__output {
  padding: 16px;
}

.workflows-workflow-menu__output-header {
  margin-bottom: 16px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}
.workflows-workflow-menu__output-header h3 {
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 600;
  color: #1e1e1e;
}

.workflows-workflow-menu__output-hint {
  margin: 0;
  font-size: 12px;
  color: #757575;
}

.workflows-workflow-menu__output-content {
  max-height: 400px;
  overflow: auto;
}
.workflows-workflow-menu__output-content pre {
  margin: 0;
  padding: 12px;
  background: #f0f0f0;
  border-radius: 2px;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  color: #1e1e1e;
}

.workflows-workflow-menu__output-error {
  padding: 12px;
  background: #e0e0e0;
  border: 1px solid rgb(158.3684210526, 18.6315789474, 18.6315789474);
  border-radius: 2px;
  color: #cc1818;
}
.workflows-workflow-menu__output-error p {
  margin: 0;
  font-size: 13px;
}

.workflows-workflow-menu__executing {
  padding: 24px 16px;
  color: #757575;
  font-size: 14px;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnL2d1dGVuYmVyZy9wYWNrYWdlcy93b3JrZmxvdy9zcmMvY29tcG9uZW50cyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvYmFzZS1zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvYmFzZS1zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvYmFzZS1zdHlsZXMvX2NvbG9ycy5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvYmFzZS1zdHlsZXMvX2JyZWFrcG9pbnRzLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy9fZnVuY3Rpb25zLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy9fbG9uZy1jb250ZW50LWZhZGUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2Jhc2Utc3R5bGVzL19kZWZhdWx0LWN1c3RvbS1wcm9wZXJ0aWVzLnNjc3MiLCJ3b3JrZmxvdy1tZW51LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUNBQTtBQUFBO0FBQUE7QURVQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUE2QkE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQXlCQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBQUE7QUFtQkE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUVuS0E7QUFBQTtBQUFBO0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FMNEVBO0FBQUE7QUFBQTtBQTBEQTtBQUFBO0FBQUE7QUFnREE7QUFBQTtBQUFBO0FBcUNBO0FBQUE7QUFBQTtBQW9CQTtBQUFBO0FBQUE7QUF3TEE7QUFBQTtBQUFBO0FBQUE7QUFnREE7QUFBQTtBQUFBO0FBcU5BO0FBQUE7QUFBQTtBQUFBO0FNcnFCQTtFQUNDO0VBQ0E7RUFHQTtFQUNBO0VOc2ZBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUlBOztBQUNBO0VNdmdCRDtJTndnQkU7Ozs7QU94Z0JGO0VBQ0MsZU40Q2M7RU0zQ2Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QVB3R0E7RU85R0Q7SUFTRTs7O0FBR0Q7RUFDQztFQUNBOzs7QUFJRjtFQUNDO0VBQ0E7OztBQUdEO0VBQ0M7OztBQUlBO0VBQ0M7OztBQUlGO0VBRUM7O0FBRUE7RUFDQzs7QUFHRDtFQUNDO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsT0wvQ1M7RUtnRFQ7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDQyxPTHBEUTs7QUt1RFQ7RUFDQztFQUNBOztBQUlGO0VBQ0MsZU5GYTtFTUdiO0VBQ0E7RUFDQTtFQUNBLE9McEVTO0VLcUVULFdObkRpQjs7QU1xRGpCO0VBRUM7RUFDQSxPTGxFSzs7QUtxRU47RUFDQyxPTDNFUTtFSzRFUjs7QUFHRDtFQUNDLFlOTzZCO0VNTjdCLFNOdENZO0VNdUNaLGNOcENZOztBTXdDZDtFQUNDLFlOaUJtQjtFTWhCbkI7O0FBR0E7RUFHQyxnQk5sRFk7O0FNcURiO0VBQ0M7O0FBSUY7RUFDQztFQUNBO0VBQ0E7RUFDQTtFQUNBLE9MOUdTO0VLK0dUOztBQUdEO0VBQ0MsU05sRWE7O0FNcUVkO0VBQ0M7OztBQUlGO0VBRUM7RUFDQTtFQUNBO0VBQ0E7OztBQUdEO0VBQ0M7RUFDQTtFQUNBOzs7QUFHRDtFQUNDLFNOekZjOzs7QU00RmY7RUFDQyxlTjdGYztFTThGZDtFQUNBLGdCTmpHYzs7QU1tR2Q7RUFDQztFQUNBO0VBQ0E7RUFDQSxPTHRKUzs7O0FLMEpYO0VBQ0M7RUFDQTtFQUNBLE9MM0pVOzs7QUs4Slg7RUFDQztFQUNBOztBQUVBO0VBQ0M7RUFDQSxTTnRIYTtFTXVIYixZTGhLUztFS2lLVCxlTjFHYTtFTTJHYjtFQUNBO0VBQ0E7RUFDQTtFQUNBLE9MN0tTOzs7QUtpTFg7RUFDQyxTTmxJYztFTW1JZCxZTDdLVTtFSzhLVjtFQUNBLGVOdkhjO0VNd0hkLE9McktXOztBS3VLWDtFQUNDO0VBQ0E7OztBQUlGO0VBQ0M7RUFDQSxPTDlMVTtFSytMViIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVHlwb2dyYXBoeVxuICovXG5cbkB1c2UgXCJzYXNzOmNvbG9yXCI7XG5AdXNlIFwic2FzczptYXRoXCI7XG5AdXNlIFwiLi92YXJpYWJsZXNcIjtcbkB1c2UgXCIuL2NvbG9yc1wiO1xuQHVzZSBcIi4vYnJlYWtwb2ludHNcIjtcbkB1c2UgXCIuL2Z1bmN0aW9uc1wiO1xuQHVzZSBcIi4vbG9uZy1jb250ZW50LWZhZGVcIjtcblxuQG1peGluIF90ZXh0LWhlYWRpbmcoKSB7XG5cdGZvbnQtZmFtaWx5OiB2YXJpYWJsZXMuJGZvbnQtZmFtaWx5LWhlYWRpbmdzO1xuXHRmb250LXdlaWdodDogdmFyaWFibGVzLiRmb250LXdlaWdodC1tZWRpdW07XG59XG5cbkBtaXhpbiBfdGV4dC1ib2R5KCkge1xuXHRmb250LWZhbWlseTogdmFyaWFibGVzLiRmb250LWZhbWlseS1ib2R5O1xuXHRmb250LXdlaWdodDogdmFyaWFibGVzLiRmb250LXdlaWdodC1yZWd1bGFyO1xufVxuXG5AbWl4aW4gaGVhZGluZy1zbWFsbCgpIHtcblx0QGluY2x1ZGUgX3RleHQtaGVhZGluZygpO1xuXHRmb250LXNpemU6IHZhcmlhYmxlcy4kZm9udC1zaXplLXgtc21hbGw7XG5cdGxpbmUtaGVpZ2h0OiB2YXJpYWJsZXMuJGZvbnQtbGluZS1oZWlnaHQteC1zbWFsbDtcbn1cblxuQG1peGluIGhlYWRpbmctbWVkaXVtKCkge1xuXHRAaW5jbHVkZSBfdGV4dC1oZWFkaW5nKCk7XG5cdGZvbnQtc2l6ZTogdmFyaWFibGVzLiRmb250LXNpemUtbWVkaXVtO1xuXHRsaW5lLWhlaWdodDogdmFyaWFibGVzLiRmb250LWxpbmUtaGVpZ2h0LXNtYWxsO1xufVxuXG5AbWl4aW4gaGVhZGluZy1sYXJnZSgpIHtcblx0QGluY2x1ZGUgX3RleHQtaGVhZGluZygpO1xuXHRmb250LXNpemU6IHZhcmlhYmxlcy4kZm9udC1zaXplLWxhcmdlO1xuXHRsaW5lLWhlaWdodDogdmFyaWFibGVzLiRmb250LWxpbmUtaGVpZ2h0LXNtYWxsO1xufVxuXG5AbWl4aW4gaGVhZGluZy14LWxhcmdlKCkge1xuXHRAaW5jbHVkZSBfdGV4dC1oZWFkaW5nKCk7XG5cdGZvbnQtc2l6ZTogdmFyaWFibGVzLiRmb250LXNpemUteC1sYXJnZTtcblx0bGluZS1oZWlnaHQ6IHZhcmlhYmxlcy4kZm9udC1saW5lLWhlaWdodC1tZWRpdW07XG59XG5cbkBtaXhpbiBoZWFkaW5nLTJ4LWxhcmdlKCkge1xuXHRAaW5jbHVkZSBfdGV4dC1oZWFkaW5nKCk7XG5cdGZvbnQtc2l6ZTogdmFyaWFibGVzLiRmb250LXNpemUtMngtbGFyZ2U7XG5cdGxpbmUtaGVpZ2h0OiB2YXJpYWJsZXMuJGZvbnQtbGluZS1oZWlnaHQtMngtbGFyZ2U7XG59XG5cbkBtaXhpbiBib2R5LXNtYWxsKCkge1xuXHRAaW5jbHVkZSBfdGV4dC1ib2R5KCk7XG5cdGZvbnQtc2l6ZTogdmFyaWFibGVzLiRmb250LXNpemUtc21hbGw7XG5cdGxpbmUtaGVpZ2h0OiB2YXJpYWJsZXMuJGZvbnQtbGluZS1oZWlnaHQteC1zbWFsbDtcbn1cblxuQG1peGluIGJvZHktbWVkaXVtKCkge1xuXHRAaW5jbHVkZSBfdGV4dC1ib2R5KCk7XG5cdGZvbnQtc2l6ZTogdmFyaWFibGVzLiRmb250LXNpemUtbWVkaXVtO1xuXHRsaW5lLWhlaWdodDogdmFyaWFibGVzLiRmb250LWxpbmUtaGVpZ2h0LXNtYWxsO1xufVxuXG5AbWl4aW4gYm9keS1sYXJnZSgpIHtcblx0QGluY2x1ZGUgX3RleHQtYm9keSgpO1xuXHRmb250LXNpemU6IHZhcmlhYmxlcy4kZm9udC1zaXplLWxhcmdlO1xuXHRsaW5lLWhlaWdodDogdmFyaWFibGVzLiRmb250LWxpbmUtaGVpZ2h0LW1lZGl1bTtcbn1cblxuQG1peGluIGJvZHkteC1sYXJnZSgpIHtcblx0QGluY2x1ZGUgX3RleHQtYm9keSgpO1xuXHRmb250LXNpemU6IHZhcmlhYmxlcy4kZm9udC1zaXplLXgtbGFyZ2U7XG5cdGxpbmUtaGVpZ2h0OiB2YXJpYWJsZXMuJGZvbnQtbGluZS1oZWlnaHQteC1sYXJnZTtcbn1cblxuLyoqXG4gKiBCcmVha3BvaW50IG1peGluc1xuICovXG5cbkBtaXhpbiBicmVhay14aHVnZSgpIHtcblx0QG1lZGlhIChtaW4td2lkdGg6ICN7IChicmVha3BvaW50cy4kYnJlYWsteGh1Z2UpIH0pIHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gYnJlYWstaHVnZSgpIHtcblx0QG1lZGlhIChtaW4td2lkdGg6ICN7IChicmVha3BvaW50cy4kYnJlYWstaHVnZSkgfSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBicmVhay13aWRlKCkge1xuXHRAbWVkaWEgKG1pbi13aWR0aDogI3sgKGJyZWFrcG9pbnRzLiRicmVhay13aWRlKSB9KSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGJyZWFrLXhsYXJnZSgpIHtcblx0QG1lZGlhIChtaW4td2lkdGg6ICN7IChicmVha3BvaW50cy4kYnJlYWsteGxhcmdlKSB9KSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGJyZWFrLWxhcmdlKCkge1xuXHRAbWVkaWEgKG1pbi13aWR0aDogI3sgKGJyZWFrcG9pbnRzLiRicmVhay1sYXJnZSkgfSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBicmVhay1tZWRpdW0oKSB7XG5cdEBtZWRpYSAobWluLXdpZHRoOiAjeyAoYnJlYWtwb2ludHMuJGJyZWFrLW1lZGl1bSkgfSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBicmVhay1zbWFsbCgpIHtcblx0QG1lZGlhIChtaW4td2lkdGg6ICN7IChicmVha3BvaW50cy4kYnJlYWstc21hbGwpIH0pIHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gYnJlYWstbW9iaWxlKCkge1xuXHRAbWVkaWEgKG1pbi13aWR0aDogI3sgKGJyZWFrcG9pbnRzLiRicmVhay1tb2JpbGUpIH0pIHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gYnJlYWstem9vbWVkLWluKCkge1xuXHRAbWVkaWEgKG1pbi13aWR0aDogI3sgKGJyZWFrcG9pbnRzLiRicmVhay16b29tZWQtaW4pIH0pIHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG4vKipcbiAqIEZvY3VzIHN0eWxlcy5cbiAqL1xuXG5AbWl4aW4gYmxvY2stdG9vbGJhci1idXR0b24tc3R5bGVfX2ZvY3VzKCkge1xuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCB2YXJpYWJsZXMuJGJvcmRlci13aWR0aCBjb2xvcnMuJHdoaXRlLCAwIDAgMCB2YXIoLS13cC1hZG1pbi1ib3JkZXItd2lkdGgtZm9jdXMpIHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKTtcblxuXHQvLyBXaW5kb3dzIEhpZ2ggQ29udHJhc3QgbW9kZSB3aWxsIHNob3cgdGhpcyBvdXRsaW5lLCBidXQgbm90IHRoZSBib3gtc2hhZG93LlxuXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi8vIFRhYnMsIElucHV0cywgU3F1YXJlIGJ1dHRvbnMuXG5AbWl4aW4gaW5wdXQtc3R5bGVfX25ldXRyYWwoKSB7XG5cdGJveC1zaGFkb3c6IDAgMCAwIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmFkaXVzOiB2YXJpYWJsZXMuJHJhZGl1cy1zbWFsbDtcblx0Ym9yZGVyOiB2YXJpYWJsZXMuJGJvcmRlci13aWR0aCBzb2xpZCBjb2xvcnMuJGdyYXktNjAwO1xuXG5cdEBtZWRpYSBub3QgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pIHtcblx0XHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgbGluZWFyO1xuXHR9XG59XG5cblxuQG1peGluIGlucHV0LXN0eWxlX19mb2N1cygkYWNjZW50LWNvbG9yOiB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvcikpIHtcblx0Ym9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xuXHQvLyBFeHBhbmQgdGhlIGRlZmF1bHQgYm9yZGVyIGZvY3VzIHN0eWxlIGJ5IC41cHggdG8gYmUgYSB0b3RhbCBvZiAxLjVweC5cblx0Ym94LXNoYWRvdzogMCAwIDAgMC41cHggJGFjY2VudC1jb2xvcjtcblx0Ly8gV2luZG93cyBIaWdoIENvbnRyYXN0IG1vZGUgd2lsbCBzaG93IHRoaXMgb3V0bGluZSwgYnV0IG5vdCB0aGUgYm94LXNoYWRvdy5cblx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gYnV0dG9uLXN0eWxlX19mb2N1cygpIHtcblx0Ym94LXNoYWRvdzogMCAwIDAgdmFyKC0td3AtYWRtaW4tYm9yZGVyLXdpZHRoLWZvY3VzKSB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvcik7XG5cblx0Ly8gV2luZG93cyBIaWdoIENvbnRyYXN0IG1vZGUgd2lsbCBzaG93IHRoaXMgb3V0bGluZSwgYnV0IG5vdCB0aGUgYm94LXNoYWRvdy5cblx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG5cbkBtaXhpbiBidXR0b24tc3R5bGUtb3V0c2V0X19mb2N1cygkZm9jdXMtY29sb3IpIHtcblx0Ym94LXNoYWRvdzogMCAwIDAgdmFyKC0td3AtYWRtaW4tYm9yZGVyLXdpZHRoLWZvY3VzKSBjb2xvcnMuJHdoaXRlLCAwIDAgMCBjYWxjKDIgKiB2YXIoLS13cC1hZG1pbi1ib3JkZXItd2lkdGgtZm9jdXMpKSAkZm9jdXMtY29sb3I7XG5cblx0Ly8gV2luZG93cyBIaWdoIENvbnRyYXN0IG1vZGUgd2lsbCBzaG93IHRoaXMgb3V0bGluZSwgYnV0IG5vdCB0aGUgYm94LXNoYWRvdy5cblx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG5cbi8qKlxuICogQXBwbGllcyBlZGl0b3IgbGVmdCBwb3NpdGlvbiB0byB0aGUgc2VsZWN0b3IgcGFzc2VkIGFzIGFyZ3VtZW50XG4gKi9cblxuQG1peGluIGVkaXRvci1sZWZ0KCRzZWxlY3Rvcikge1xuXHQjeyRzZWxlY3Rvcn0geyAvKiBTZXQgbGVmdCBwb3NpdGlvbiB3aGVuIGF1dG8tZm9sZCBpcyBub3Qgb24gdGhlIGJvZHkgZWxlbWVudC4gKi9cblx0XHRsZWZ0OiAwO1xuXG5cdFx0QG1lZGlhIChtaW4td2lkdGg6ICN7IChicmVha3BvaW50cy4kYnJlYWstbWVkaXVtICsgMSkgfSkge1xuXHRcdFx0bGVmdDogdmFyaWFibGVzLiRhZG1pbi1zaWRlYmFyLXdpZHRoO1xuXHRcdH1cblx0fVxuXG5cdC5hdXRvLWZvbGQgI3skc2VsZWN0b3J9IHsgLyogQXV0byBmb2xkIGlzIHdoZW4gb24gc21hbGxlciBicmVha3BvaW50cywgbmF2IG1lbnUgYXV0byBjb2xsYXBzZXMuICovXG5cdFx0QG1lZGlhIChtaW4td2lkdGg6ICN7IChicmVha3BvaW50cy4kYnJlYWstbWVkaXVtICsgMSkgfSkge1xuXHRcdFx0bGVmdDogdmFyaWFibGVzLiRhZG1pbi1zaWRlYmFyLXdpZHRoLWNvbGxhcHNlZDtcblx0XHR9XG5cblx0XHRAbWVkaWEgKG1pbi13aWR0aDogI3sgKGJyZWFrcG9pbnRzLiRicmVhay1sYXJnZSArIDEpIH0pIHtcblx0XHRcdGxlZnQ6IHZhcmlhYmxlcy4kYWRtaW4tc2lkZWJhci13aWR0aDtcblx0XHR9XG5cdH1cblxuXHQvKiBTaWRlYmFyIG1hbnVhbGx5IGNvbGxhcHNlZC4gKi9cblx0LmZvbGRlZCAjeyRzZWxlY3Rvcn0ge1xuXHRcdGxlZnQ6IDA7XG5cblx0XHRAbWVkaWEgKG1pbi13aWR0aDogI3sgKGJyZWFrcG9pbnRzLiRicmVhay1tZWRpdW0gKyAxKSB9KSB7XG5cdFx0XHRsZWZ0OiB2YXJpYWJsZXMuJGFkbWluLXNpZGViYXItd2lkdGgtY29sbGFwc2VkO1xuXHRcdH1cblx0fVxuXG5cdGJvZHkuaXMtZnVsbHNjcmVlbi1tb2RlICN7JHNlbGVjdG9yfSB7XG5cdFx0bGVmdDogMCAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi8qKlxuICogU3R5bGVzIHRoYXQgYXJlIHJldXNlZCB2ZXJiYXRpbSBpbiBhIGZldyBwbGFjZXNcbiAqL1xuXG4vLyBUaGVzZSBhcmUgYWRkaXRpb25hbCBzdHlsZXMgZm9yIGFsbCBjYXB0aW9ucywgd2hlbiB0aGUgdGhlbWUgb3B0cyBpbiB0byBibG9jayBzdHlsZXMuXG5AbWl4aW4gY2FwdGlvbi1zdHlsZSgpIHtcblx0bWFyZ2luLXRvcDogMC41ZW07XG5cdG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuQG1peGluIGNhcHRpb24tc3R5bGUtdGhlbWUoKSB7XG5cdGNvbG9yOiAjNTU1O1xuXHRmb250LXNpemU6IHZhcmlhYmxlcy4kZGVmYXVsdC1mb250LXNpemU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHQuaXMtZGFyay10aGVtZSAmIHtcblx0XHRjb2xvcjogY29sb3JzLiRsaWdodC1ncmF5LXBsYWNlaG9sZGVyO1xuXHR9XG59XG5cbi8qKlxuICogQWxsb3dzIHVzZXJzIHRvIG9wdC1vdXQgb2YgYW5pbWF0aW9ucyB2aWEgT1MtbGV2ZWwgcHJlZmVyZW5jZXMuXG4gKi9cblxuQG1peGluIHJlZHVjZS1tb3Rpb24oJHByb3BlcnR5OiBcIlwiKSB7XG5cblx0QGlmICRwcm9wZXJ0eSA9PSBcInRyYW5zaXRpb25cIiB7XG5cdFx0QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcblx0XHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xuXHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMHM7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRwcm9wZXJ0eSA9PSBcImFuaW1hdGlvblwiIHtcblx0XHRAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuXHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxbXM7XG5cdFx0XHRhbmltYXRpb24tZGVsYXk6IDBzO1xuXHRcdH1cblx0fSBAZWxzZSB7XG5cdFx0QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcblx0XHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xuXHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMHM7XG5cdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDFtcztcblx0XHRcdGFuaW1hdGlvbi1kZWxheTogMHM7XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBpbnB1dC1jb250cm9sKCRhY2NlbnQtY29sb3I6IHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKSkge1xuXHRmb250LWZhbWlseTogdmFyaWFibGVzLiRkZWZhdWx0LWZvbnQ7XG5cdHBhZGRpbmc6IDZweCA4cHg7XG5cdC8qIEZvbnRzIHNtYWxsZXIgdGhhbiAxNnB4IGNhdXNlcyBtb2JpbGUgc2FmYXJpIHRvIHpvb20uICovXG5cdGZvbnQtc2l6ZTogdmFyaWFibGVzLiRtb2JpbGUtdGV4dC1taW4tZm9udC1zaXplO1xuXHQvKiBPdmVycmlkZSBjb3JlIGxpbmUtaGVpZ2h0LiBUbyBiZSByZXZpZXdlZC4gKi9cblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcblx0QGluY2x1ZGUgaW5wdXQtc3R5bGVfX25ldXRyYWwoKTtcblxuXHRAaW5jbHVkZSBicmVhay1zbWFsbCB7XG5cdFx0Zm9udC1zaXplOiB2YXJpYWJsZXMuJGRlZmF1bHQtZm9udC1zaXplO1xuXHRcdC8qIE92ZXJyaWRlIGNvcmUgbGluZS1oZWlnaHQuIFRvIGJlIHJldmlld2VkLiAqL1xuXHRcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XG5cdH1cblxuXHQmOmZvY3VzIHtcblx0XHRAaW5jbHVkZSBpbnB1dC1zdHlsZV9fZm9jdXMoJGFjY2VudC1jb2xvcik7XG5cdH1cblxuXHQvLyBVc2Ugb3BhY2l0eSB0byB3b3JrIGluIHZhcmlvdXMgZWRpdG9yIHN0eWxlcy5cblx0Jjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IGNvbG9ycy4kZGFyay1ncmF5LXBsYWNlaG9sZGVyO1xuXHR9XG5cblx0Jjo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6IGNvbG9ycy4kZGFyay1ncmF5LXBsYWNlaG9sZGVyO1xuXHR9XG5cblx0JjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiBjb2xvcnMuJGRhcmstZ3JheS1wbGFjZWhvbGRlcjtcblx0fVxufVxuXG5AbWl4aW4gY2hlY2tib3gtY29udHJvbCB7XG5cdGJvcmRlcjogdmFyaWFibGVzLiRib3JkZXItd2lkdGggc29saWQgY29sb3JzLiRncmF5LTkwMDtcblx0bWFyZ2luLXJpZ2h0OiB2YXJpYWJsZXMuJGdyaWQtdW5pdC0xNTtcblx0dHJhbnNpdGlvbjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogdmFyaWFibGVzLiRyYWRpdXMtc21hbGw7XG5cdEBpbmNsdWRlIGlucHV0LWNvbnRyb2w7XG5cblx0Jjpmb2N1cyB7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDAgKHZhcmlhYmxlcy4kYm9yZGVyLXdpZHRoICogMikgY29sb3JzLiR3aGl0ZSwgMCAwIDAgKHZhcmlhYmxlcy4kYm9yZGVyLXdpZHRoICogMiArIHZhcmlhYmxlcy4kYm9yZGVyLXdpZHRoLWZvY3VzLWZhbGxiYWNrKSB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvcik7XG5cblx0XHQvLyBPbmx5IHZpc2libGUgaW4gV2luZG93cyBIaWdoIENvbnRyYXN0IG1vZGUuXG5cdFx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHR9XG5cblx0JjpjaGVja2VkIHtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvcik7XG5cdFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvcik7XG5cblx0XHQvLyBIaWRlIGRlZmF1bHQgY2hlY2tib3ggc3R5bGVzIGluIElFLlxuXHRcdCY6Oi1tcy1jaGVjayB7XG5cdFx0XHRvcGFjaXR5OiAwO1xuXHRcdH1cblx0fVxuXG5cdCY6Y2hlY2tlZDo6YmVmb3JlLFxuXHQmW2FyaWEtY2hlY2tlZD1cIm1peGVkXCJdOjpiZWZvcmUge1xuXHRcdG1hcmdpbjogLTNweCAtNXB4O1xuXHRcdGNvbG9yOiBjb2xvcnMuJHdoaXRlO1xuXG5cdFx0QGluY2x1ZGUgYnJlYWstbWVkaXVtKCkge1xuXHRcdFx0bWFyZ2luOiAtNHB4IDAgMCAtNXB4O1xuXHRcdH1cblx0fVxuXG5cdCZbYXJpYS1jaGVja2VkPVwibWl4ZWRcIl0ge1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKTtcblx0XHRib3JkZXItY29sb3I6IHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKTtcblxuXHRcdCY6OmJlZm9yZSB7XG5cdFx0XHQvLyBJbmhlcml0ZWQgZnJvbSBgZm9ybXMuY3NzYC5cblx0XHRcdC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy93b3JkcHJlc3MtZGV2ZWxvcC90cmVlLzUuMS4xL3NyYy93cC1hZG1pbi9jc3MvZm9ybXMuY3NzI0wxMjItTDEzMlxuXHRcdFx0Y29udGVudDogXCJcXGY0NjBcIjtcblx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHRcdHdpZHRoOiAxNnB4O1xuXHRcdFx0Lyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGZvbnQtZmFtaWx5LW5vLW1pc3NpbmctZ2VuZXJpYy1mYW1pbHkta2V5d29yZCAtLSBkYXNoaWNvbnMgZG9uJ3QgbmVlZCBhIGdlbmVyaWMgZmFtaWx5IGtleXdvcmQuICovXG5cdFx0XHRmb250OiBub3JtYWwgMzBweC8xIGRhc2hpY29ucztcblx0XHRcdHNwZWFrOiBub25lO1xuXHRcdFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdFx0XHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXG5cdFx0XHRAaW5jbHVkZSBicmVhay1tZWRpdW0oKSB7XG5cdFx0XHRcdGZsb2F0OiBub25lO1xuXHRcdFx0XHRmb250LXNpemU6IDIxcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0JlthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSxcblx0JjpkaXNhYmxlZCB7XG5cdFx0YmFja2dyb3VuZDogY29sb3JzLiRncmF5LTEwMDtcblx0XHRib3JkZXItY29sb3I6IGNvbG9ycy4kZ3JheS0zMDA7XG5cdFx0Y3Vyc29yOiBkZWZhdWx0O1xuXG5cdFx0Ly8gT3ZlcnJpZGUgc3R5bGUgaW5oZXJpdGVkIGZyb20gd3AtYWRtaW4uIFJlcXVpcmVkIHRvIGF2b2lkIGRlZ3JhZGVkIGFwcGVhcmFuY2Ugb24gZGlmZmVyZW50IGJhY2tncm91bmRzLlxuXHRcdG9wYWNpdHk6IDE7XG5cdH1cbn1cblxuQG1peGluIHJhZGlvLWNvbnRyb2wge1xuXHRib3JkZXI6IHZhcmlhYmxlcy4kYm9yZGVyLXdpZHRoIHNvbGlkIGNvbG9ycy4kZ3JheS05MDA7XG5cdG1hcmdpbi1yaWdodDogdmFyaWFibGVzLiRncmlkLXVuaXQtMTU7XG5cdHRyYW5zaXRpb246IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IHZhcmlhYmxlcy4kcmFkaXVzLXJvdW5kO1xuXHR3aWR0aDogdmFyaWFibGVzLiRyYWRpby1pbnB1dC1zaXplLXNtO1xuXHRoZWlnaHQ6IHZhcmlhYmxlcy4kcmFkaW8taW5wdXQtc2l6ZS1zbTtcblx0bWluLXdpZHRoOiB2YXJpYWJsZXMuJHJhZGlvLWlucHV0LXNpemUtc207XG5cdG1heC13aWR0aDogdmFyaWFibGVzLiRyYWRpby1pbnB1dC1zaXplLXNtO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0QG1lZGlhIG5vdCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbikge1xuXHRcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xcyBsaW5lYXI7XG5cdH1cblxuXHRAaW5jbHVkZSBicmVhay1zbWFsbCgpIHtcblx0XHRoZWlnaHQ6IHZhcmlhYmxlcy4kcmFkaW8taW5wdXQtc2l6ZTtcblx0XHR3aWR0aDogdmFyaWFibGVzLiRyYWRpby1pbnB1dC1zaXplO1xuXHRcdG1pbi13aWR0aDogdmFyaWFibGVzLiRyYWRpby1pbnB1dC1zaXplO1xuXHRcdG1heC13aWR0aDogdmFyaWFibGVzLiRyYWRpby1pbnB1dC1zaXplO1xuXHR9XG5cblx0JjpjaGVja2VkOjpiZWZvcmUge1xuXHRcdGJveC1zaXppbmc6IGluaGVyaXQ7XG5cdFx0d2lkdGg6IG1hdGguZGl2KHZhcmlhYmxlcy4kcmFkaW8taW5wdXQtc2l6ZS1zbSwgMik7XG5cdFx0aGVpZ2h0OiBtYXRoLmRpdih2YXJpYWJsZXMuJHJhZGlvLWlucHV0LXNpemUtc20sIDIpO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDUwJTtcblx0XHRsZWZ0OiA1MCU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGNvbG9ycy4kd2hpdGU7XG5cblx0XHQvLyBUaGlzIGJvcmRlciBzZXJ2ZXMgYXMgYSBiYWNrZ3JvdW5kIGNvbG9yIGluIFdpbmRvd3MgSGlnaCBDb250cmFzdCBtb2RlLlxuXHRcdGJvcmRlcjogNHB4IHNvbGlkIGNvbG9ycy4kd2hpdGU7XG5cblx0XHRAaW5jbHVkZSBicmVhay1zbWFsbCgpIHtcblx0XHRcdHdpZHRoOiBtYXRoLmRpdih2YXJpYWJsZXMuJHJhZGlvLWlucHV0LXNpemUsIDIpO1xuXHRcdFx0aGVpZ2h0OiBtYXRoLmRpdih2YXJpYWJsZXMuJHJhZGlvLWlucHV0LXNpemUsIDIpO1xuXHRcdH1cblx0fVxuXG5cdCY6Zm9jdXMge1xuXHRcdGJveC1zaGFkb3c6IDAgMCAwICh2YXJpYWJsZXMuJGJvcmRlci13aWR0aCAqIDIpIGNvbG9ycy4kd2hpdGUsIDAgMCAwICh2YXJpYWJsZXMuJGJvcmRlci13aWR0aCAqIDIgKyB2YXJpYWJsZXMuJGJvcmRlci13aWR0aC1mb2N1cy1mYWxsYmFjaykgdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IpO1xuXG5cdFx0Ly8gT25seSB2aXNpYmxlIGluIFdpbmRvd3MgSGlnaCBDb250cmFzdCBtb2RlLlxuXHRcdG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0fVxuXG5cdCY6Y2hlY2tlZCB7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IpO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0fVxufVxuXG4vKipcbiAqIFJlc2V0IGRlZmF1bHQgc3R5bGVzIGZvciBKYXZhU2NyaXB0IFVJIGJhc2VkIHBhZ2VzLlxuICogVGhpcyBpcyBhIFdQLWFkbWluIGFnbm9zdGljIHJlc2V0XG4gKi9cblxuQG1peGluIHJlc2V0IHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblxuXHQqLFxuXHQqOjpiZWZvcmUsXG5cdCo6OmFmdGVyIHtcblx0XHRib3gtc2l6aW5nOiBpbmhlcml0O1xuXHR9XG59XG5cbkBtaXhpbiBsaW5rLXJlc2V0IHtcblx0Jjpmb2N1cyB7XG5cdFx0Y29sb3I6IHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yLS1yZ2IpO1xuXHRcdGJveC1zaGFkb3c6IDAgMCAwIHZhcigtLXdwLWFkbWluLWJvcmRlci13aWR0aC1mb2N1cykgdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IsICMwMDdjYmEpO1xuXHRcdGJvcmRlci1yYWRpdXM6IHZhcmlhYmxlcy4kcmFkaXVzLXNtYWxsO1xuXHR9XG59XG5cbi8vIFRoZSBlZGl0b3IgaW5wdXQgcmVzZXQgd2l0aCBpbmNyZWFzZWQgc3BlY2lmaWNpdHkgdG8gYXZvaWQgdGhlbWUgc3R5bGVzIGJsZWVkaW5nIGluLlxuQG1peGluIGVkaXRvci1pbnB1dC1yZXNldCgpIHtcblx0Zm9udC1mYW1pbHk6IHZhcmlhYmxlcy4kZWRpdG9yLWh0bWwtZm9udCAhaW1wb3J0YW50O1xuXHRjb2xvcjogY29sb3JzLiRncmF5LTkwMCAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kOiBjb2xvcnMuJHdoaXRlICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IHZhcmlhYmxlcy4kZ3JpZC11bml0LTE1ICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogdmFyaWFibGVzLiRib3JkZXItd2lkdGggc29saWQgY29sb3JzLiRncmF5LTkwMCAhaW1wb3J0YW50O1xuXHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IHZhcmlhYmxlcy4kcmFkaXVzLXNtYWxsICFpbXBvcnRhbnQ7XG5cblx0Ly8gRm9udHMgc21hbGxlciB0aGFuIDE2cHggY2F1c2VzIG1vYmlsZSBzYWZhcmkgdG8gem9vbS5cblx0Zm9udC1zaXplOiB2YXJpYWJsZXMuJG1vYmlsZS10ZXh0LW1pbi1mb250LXNpemUgIWltcG9ydGFudDtcblx0QGluY2x1ZGUgYnJlYWstc21hbGwge1xuXHRcdGZvbnQtc2l6ZTogdmFyaWFibGVzLiRkZWZhdWx0LWZvbnQtc2l6ZSAhaW1wb3J0YW50O1xuXHR9XG5cblx0Jjpmb2N1cyB7XG5cdFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvcikgIWltcG9ydGFudDtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAodmFyaWFibGVzLiRib3JkZXItd2lkdGgtZm9jdXMtZmFsbGJhY2sgLSB2YXJpYWJsZXMuJGJvcmRlci13aWR0aCkgdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IpICFpbXBvcnRhbnQ7XG5cblx0XHQvLyBXaW5kb3dzIEhpZ2ggQ29udHJhc3QgbW9kZSB3aWxsIHNob3cgdGhpcyBvdXRsaW5lLCBidXQgbm90IHRoZSBib3gtc2hhZG93LlxuXHRcdG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi8qKlxuICogUmVzZXQgdGhlIFdQIEFkbWluIHBhZ2Ugc3R5bGVzIGZvciBHdXRlbmJlcmctbGlrZSBwYWdlcy5cbiAqL1xuXG5AbWl4aW4gd3AtYWRtaW4tcmVzZXQoICRjb250ZW50LWNvbnRhaW5lciApIHtcblx0YmFja2dyb3VuZDogY29sb3JzLiR3aGl0ZTtcblxuXHQjd3Bjb250ZW50IHtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdH1cblxuXHQjd3Bib2R5LWNvbnRlbnQge1xuXHRcdHBhZGRpbmctYm90dG9tOiAwO1xuXHR9XG5cblx0LyogV2UgaGlkZSBsZWdhY3kgbm90aWNlcyBpbiBHdXRlbmJlcmcgQmFzZWQgUGFnZXMsIGJlY2F1c2UgdGhleSB3ZXJlIG5vdCBkZXNpZ25lZCBpbiBhIHdheSB0aGF0IHNjYWxlZCB3ZWxsLlxuXHQgICBQbHVnaW5zIGNhbiB1c2UgR3V0ZW5iZXJnIG5vdGljZXMgaWYgdGhleSBuZWVkIHRvIHBhc3Mgb24gaW5mb3JtYXRpb24gdG8gdGhlIHVzZXIgd2hlbiB0aGV5IGFyZSBlZGl0aW5nLiAqL1xuXHQjd3Bib2R5LWNvbnRlbnQgPiBkaXY6bm90KCN7ICRjb250ZW50LWNvbnRhaW5lciB9KTpub3QoI3NjcmVlbi1tZXRhKSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdCN3cGZvb3RlciB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdC5hMTF5LXNwZWFrLXJlZ2lvbiB7XG5cdFx0bGVmdDogLTFweDtcblx0XHR0b3A6IC0xcHg7XG5cdH1cblxuXHR1bCNhZG1pbm1lbnUgYS53cC1oYXMtY3VycmVudC1zdWJtZW51OjphZnRlcixcblx0dWwjYWRtaW5tZW51ID4gbGkuY3VycmVudCA+IGEuY3VycmVudDo6YWZ0ZXIge1xuXHRcdGJvcmRlci1yaWdodC1jb2xvcjogY29sb3JzLiR3aGl0ZTtcblx0fVxuXG5cdC5tZWRpYS1mcmFtZSBzZWxlY3QuYXR0YWNobWVudC1maWx0ZXJzOmxhc3Qtb2YtdHlwZSB7XG5cdFx0d2lkdGg6IGF1dG87XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHR9XG59XG5cbkBtaXhpbiBhZG1pbi1zY2hlbWUoJGNvbG9yLXByaW1hcnkpIHtcblx0Ly8gRGVmaW5lIFJHQiBlcXVpdmFsZW50cyBmb3IgdXNlIGluIHJnYmEgZnVuY3Rpb24uXG5cdC8vIEhleGFkZWNpbWFsIGNzcyB2YXJzIGRvIG5vdCB3b3JrIGluIHRoZSByZ2JhIGZ1bmN0aW9uLlxuXHQtLXdwLWFkbWluLXRoZW1lLWNvbG9yOiAjeyRjb2xvci1wcmltYXJ5fTtcblx0LS13cC1hZG1pbi10aGVtZS1jb2xvci0tcmdiOiAje2Z1bmN0aW9ucy5oZXgtdG8tcmdiKCRjb2xvci1wcmltYXJ5KX07XG5cdC8vIERhcmtlciBzaGFkZXMuXG5cdC0td3AtYWRtaW4tdGhlbWUtY29sb3ItZGFya2VyLTEwOiAje2NvbG9yLmFkanVzdCgkY29sb3ItcHJpbWFyeSwgJGxpZ2h0bmVzczogLTUlKX07XG5cdC0td3AtYWRtaW4tdGhlbWUtY29sb3ItZGFya2VyLTEwLS1yZ2I6ICN7ZnVuY3Rpb25zLmhleC10by1yZ2IoY29sb3IuYWRqdXN0KCRjb2xvci1wcmltYXJ5LCAkbGlnaHRuZXNzOiAtNSUpKX07XG5cdC0td3AtYWRtaW4tdGhlbWUtY29sb3ItZGFya2VyLTIwOiAje2NvbG9yLmFkanVzdCgkY29sb3ItcHJpbWFyeSwgJGxpZ2h0bmVzczogLTEwJSl9O1xuXHQtLXdwLWFkbWluLXRoZW1lLWNvbG9yLWRhcmtlci0yMC0tcmdiOiAje2Z1bmN0aW9ucy5oZXgtdG8tcmdiKGNvbG9yLmFkanVzdCgkY29sb3ItcHJpbWFyeSwgJGxpZ2h0bmVzczogLTEwJSkpfTtcblxuXHQvLyBGb2N1cyBzdHlsZSB3aWR0aC5cblx0Ly8gQXZvaWQgcm91bmRpbmcgaXNzdWVzIGJ5IHNob3dpbmcgYSB3aG9sZSAycHggZm9yIDF4IHNjcmVlbnMsIGFuZCAxLjVweCBvbiBoaWdoIHJlc29sdXRpb24gc2NyZWVucy5cblx0LS13cC1hZG1pbi1ib3JkZXItd2lkdGgtZm9jdXM6IDJweDtcblx0QG1lZGlhICggLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpIHtcblx0XHQtLXdwLWFkbWluLWJvcmRlci13aWR0aC1mb2N1czogMS41cHg7XG5cdH1cbn1cblxuQG1peGluIHdvcmRwcmVzcy1hZG1pbi1zY2hlbWVzKCkge1xuXHRib2R5LmFkbWluLWNvbG9yLWxpZ2h0IHtcblx0XHRAaW5jbHVkZSBhZG1pbi1zY2hlbWUoIzAwODViYSk7XG5cdH1cblxuXHRib2R5LmFkbWluLWNvbG9yLW1vZGVybiB7XG5cdFx0QGluY2x1ZGUgYWRtaW4tc2NoZW1lKCMzODU4ZTkpO1xuXHR9XG5cblx0Ym9keS5hZG1pbi1jb2xvci1ibHVlIHtcblx0XHRAaW5jbHVkZSBhZG1pbi1zY2hlbWUoIzA5NjQ4NCk7XG5cdH1cblxuXHRib2R5LmFkbWluLWNvbG9yLWNvZmZlZSB7XG5cdFx0QGluY2x1ZGUgYWRtaW4tc2NoZW1lKCM0NjQwM2MpO1xuXHR9XG5cblx0Ym9keS5hZG1pbi1jb2xvci1lY3RvcGxhc20ge1xuXHRcdEBpbmNsdWRlIGFkbWluLXNjaGVtZSgjNTIzZjZkKTtcblx0fVxuXG5cdGJvZHkuYWRtaW4tY29sb3ItbWlkbmlnaHQge1xuXHRcdEBpbmNsdWRlIGFkbWluLXNjaGVtZSgjZTE0ZDQzKTtcblx0fVxuXG5cdGJvZHkuYWRtaW4tY29sb3Itb2NlYW4ge1xuXHRcdEBpbmNsdWRlIGFkbWluLXNjaGVtZSgjNjI3YzgzKTtcblx0fVxuXG5cdGJvZHkuYWRtaW4tY29sb3Itc3VucmlzZSB7XG5cdFx0QGluY2x1ZGUgYWRtaW4tc2NoZW1lKCNkZDgyM2IpO1xuXHR9XG59XG5cbi8vIERlcHJlY2F0ZWQgZnJvbSBVSSwga2VwdCBmb3IgYmFjay1jb21wYXQuXG5AbWl4aW4gYmFja2dyb3VuZC1jb2xvcnMtZGVwcmVjYXRlZCgpIHtcblx0Lmhhcy12ZXJ5LWxpZ2h0LWdyYXktYmFja2dyb3VuZC1jb2xvciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0fVxuXG5cdC5oYXMtdmVyeS1kYXJrLWdyYXktYmFja2dyb3VuZC1jb2xvciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMxMzEzMTtcblx0fVxufVxuXG4vLyBEZXByZWNhdGVkIGZyb20gVUksIGtlcHQgZm9yIGJhY2stY29tcGF0LlxuQG1peGluIGZvcmVncm91bmQtY29sb3JzLWRlcHJlY2F0ZWQoKSB7XG5cdC5oYXMtdmVyeS1saWdodC1ncmF5LWNvbG9yIHtcblx0XHRjb2xvcjogI2VlZTtcblx0fVxuXG5cdC5oYXMtdmVyeS1kYXJrLWdyYXktY29sb3Ige1xuXHRcdGNvbG9yOiAjMzEzMTMxO1xuXHR9XG59XG5cbi8vIERlcHJlY2F0ZWQgZnJvbSBVSSwga2VwdCBmb3IgYmFjay1jb21wYXQuXG5AbWl4aW4gZ3JhZGllbnQtY29sb3JzLWRlcHJlY2F0ZWQoKSB7XG5cdC8vIE91ciBjbGFzc2VzIHVzZXMgdGhlIHNhbWUgdmFsdWVzIHdlIHNldCBmb3IgZ3JhZGllbnQgdmFsdWUgYXR0cmlidXRlcy5cblxuXHQvKiBzdHlsZWxpbnQtZGlzYWJsZSBAc3R5bGlzdGljL2Z1bmN0aW9uLWNvbW1hLXNwYWNlLWFmdGVyIC0tIFdlIGNhbiBub3QgdXNlIHNwYWNpbmcgYmVjYXVzZSBvZiBXUCBtdWx0aSBzaXRlIGtzZXMgcnVsZS4gKi9cblx0Lmhhcy12aXZpZC1ncmVlbi1jeWFuLXRvLXZpdmlkLWN5YW4tYmx1ZS1ncmFkaWVudC1iYWNrZ3JvdW5kIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMCwyMDgsMTMyLDEpIDAlLHJnYmEoNiwxNDcsMjI3LDEpIDEwMCUpO1xuXHR9XG5cblx0Lmhhcy1wdXJwbGUtY3J1c2gtZ3JhZGllbnQtYmFja2dyb3VuZCB7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZyxyZ2IoNTIsMjI2LDIyOCkgMCUscmdiKDcxLDMzLDI1MSkgNTAlLHJnYigxNzEsMjksMjU0KSAxMDAlKTtcblx0fVxuXG5cdC5oYXMtaGF6eS1kYXduLWdyYWRpZW50LWJhY2tncm91bmQge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiKDI1MCwxNzIsMTY4KSAwJSxyZ2IoMjE4LDIwOCwyMzYpIDEwMCUpO1xuXHR9XG5cblx0Lmhhcy1zdWJkdWVkLW9saXZlLWdyYWRpZW50LWJhY2tncm91bmQge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiKDI1MCwyNTAsMjI1KSAwJSxyZ2IoMTAzLDE2NiwxMTMpIDEwMCUpO1xuXHR9XG5cblx0Lmhhcy1hdG9taWMtY3JlYW0tZ3JhZGllbnQtYmFja2dyb3VuZCB7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZyxyZ2IoMjUzLDIxNSwxNTQpIDAlLHJnYigwLDc0LDg5KSAxMDAlKTtcblx0fVxuXG5cdC5oYXMtbmlnaHRzaGFkZS1ncmFkaWVudC1iYWNrZ3JvdW5kIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYig1MSw5LDEwNCkgMCUscmdiKDQ5LDIwNSwyMDcpIDEwMCUpO1xuXHR9XG5cblx0Lmhhcy1taWRuaWdodC1ncmFkaWVudC1iYWNrZ3JvdW5kIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYigyLDMsMTI5KSAwJSxyZ2IoNDAsMTE2LDI1MikgMTAwJSk7XG5cdH1cblx0Lyogc3R5bGVsaW50LWVuYWJsZSBAc3R5bGlzdGljL2Z1bmN0aW9uLWNvbW1hLXNwYWNlLWFmdGVyICovXG59XG5cbkBtaXhpbiBjdXN0b20tc2Nyb2xsYmFycy1vbi1ob3ZlcigkaGFuZGxlLWNvbG9yLCAkaGFuZGxlLWNvbG9yLWhvdmVyKSB7XG5cblx0Ly8gV2ViS2l0XG5cdCY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcblx0XHR3aWR0aDogMTJweDtcblx0XHRoZWlnaHQ6IDEycHg7XG5cdH1cblx0Jjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cdCY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkaGFuZGxlLWNvbG9yO1xuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuXHR9XG5cdCY6aG92ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLCAvLyBUaGlzIG5lZWRzIHNwZWNpZmljaXR5LlxuXHQmOmZvY3VzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYixcblx0Jjpmb2N1cy13aXRoaW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkaGFuZGxlLWNvbG9yLWhvdmVyO1xuXHR9XG5cblx0Ly8gRmlyZWZveCAxMDkrIGFuZCBDaHJvbWUgMTExK1xuXHRzY3JvbGxiYXItd2lkdGg6IHRoaW47XG5cdHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZSBib3RoLWVkZ2VzO1xuXHRzY3JvbGxiYXItY29sb3I6ICRoYW5kbGUtY29sb3IgdHJhbnNwYXJlbnQ7IC8vIFN5bnRheCwgXCJkYXJrXCIsIFwibGlnaHRcIiwgb3IgXCIjaGFuZGxlLWNvbG9yICN0cmFjay1jb2xvclwiXG5cblx0Jjpob3Zlcixcblx0Jjpmb2N1cyxcblx0Jjpmb2N1cy13aXRoaW4ge1xuXHRcdHNjcm9sbGJhci1jb2xvcjogJGhhbmRsZS1jb2xvci1ob3ZlciB0cmFuc3BhcmVudDtcblx0fVxuXG5cdC8vIE5lZWRlZCB0byBmaXggYSBTYWZhcmkgcmVuZGVyaW5nIGlzc3VlLlxuXHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXG5cdC8vIEFsd2F5cyBzaG93IHNjcm9sbGJhciBvbiBNb2JpbGUgZGV2aWNlcy5cblx0QG1lZGlhIChob3Zlcjogbm9uZSkge1xuXHRcdCYge1xuXHRcdFx0c2Nyb2xsYmFyLWNvbG9yOiAkaGFuZGxlLWNvbG9yLWhvdmVyIHRyYW5zcGFyZW50O1xuXHRcdH1cblx0fVxufVxuXG5AbWl4aW4gc2VsZWN0ZWQtYmxvY2stb3V0bGluZSgkd2lkdGhSYXRpbzogMSkge1xuXHRvdXRsaW5lLWNvbG9yOiB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvcik7XG5cdG91dGxpbmUtc3R5bGU6IHNvbGlkO1xuXHRvdXRsaW5lLXdpZHRoOiBjYWxjKCN7JHdpZHRoUmF0aW99ICogKHZhcigtLXdwLWFkbWluLWJvcmRlci13aWR0aC1mb2N1cykgLyB2YXIoLS13cC1ibG9jay1lZGl0b3ItaWZyYW1lLXpvb20tb3V0LXNjYWxlLCAxKSkpO1xuXHRvdXRsaW5lLW9mZnNldDogY2FsYygjeyR3aWR0aFJhdGlvfSAqICgoLTEgKiB2YXIoLS13cC1hZG1pbi1ib3JkZXItd2lkdGgtZm9jdXMpICkgLyB2YXIoLS13cC1ibG9jay1lZGl0b3ItaWZyYW1lLXpvb20tb3V0LXNjYWxlLCAxKSkpO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtYmxvY2stZm9jdXMoJHdpZHRoUmF0aW86IDEpIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0dG9wOiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHRAaW5jbHVkZSBzZWxlY3RlZC1ibG9jay1vdXRsaW5lKCR3aWR0aFJhdGlvKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2hlY2tlcmJvYXJkIHBhdHRlcm4gYmFja2dyb3VuZCB0byBpbmRpY2F0ZSB0cmFuc3BhcmVuY3kuXG4gKiBAcGFyYW0ge1N0cmluZ30gJHNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgc3F1YXJlcyBpbiB0aGUgY2hlY2tlcmJvYXJkIHBhdHRlcm4uIERlZmF1bHQgaXMgMTJweC5cbiAqL1xuQG1peGluIGNoZWNrZXJib2FyZC1iYWNrZ3JvdW5kKCRzaXplOiAxMnB4KSB7XG5cdC8vIFRoZSBiYWNrZ3JvdW5kIGltYWdlIGNyZWF0ZXMgYSBjaGVja2VyYm9hcmQgcGF0dGVybi4gSWdub3JlIHJ0bGNzcyB0b1xuXHQvLyBtYWtlIGl0IHdvcmsgYm90aCBpbiBMVFIgYW5kIFJUTC5cblx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL3B1bGwvNDI1MTBcblx0LypydGw6YmVnaW46aWdub3JlKi9cblx0YmFja2dyb3VuZC1pbWFnZTpcblx0XHRyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBjb2xvcnMuJGdyYXktMjAwIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsIGNvbG9ycy4kZ3JheS0yMDAgNzUlLCBjb2xvcnMuJGdyYXktMjAwKSxcblx0XHRyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBjb2xvcnMuJGdyYXktMjAwIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsIGNvbG9ycy4kZ3JheS0yMDAgNzUlLCBjb2xvcnMuJGdyYXktMjAwKTtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAkc2l6ZSAkc2l6ZTtcblx0LypydGw6ZW5kOmlnbm9yZSovXG5cdGJhY2tncm91bmQtc2l6ZTogY2FsYygyICogJHNpemUpIGNhbGMoMiAqICRzaXplKTtcbn1cbiIsIi8qKlxuICogU0NTUyBWYXJpYWJsZXMuXG4gKlxuICogUGxlYXNlIHVzZSB2YXJpYWJsZXMgZnJvbSB0aGlzIHNoZWV0IHRvIGVuc3VyZSBjb25zaXN0ZW5jeSBhY3Jvc3MgdGhlIFVJLlxuICogRG9uJ3QgYWRkIHRvIHRoaXMgc2hlZXQgdW5sZXNzIHlvdSdyZSBwcmV0dHkgc3VyZSB0aGUgdmFsdWUgd2lsbCBiZSByZXVzZWQgaW4gbWFueSBwbGFjZXMuXG4gKiBGb3IgZXhhbXBsZSwgZG9uJ3QgYWRkIHJ1bGVzIHRvIHRoaXMgc2hlZXQgdGhhdCBhZmZlY3QgYmxvY2sgdmlzdWFscy4gSXQncyBwdXJlbHkgZm9yIFVJLlxuICovXG5cbkB1c2UgXCIuL2NvbG9yc1wiO1xuXG4vKipcbiAqIEZvbnRzICYgYmFzaWMgdmFyaWFibGVzLlxuICovXG5cbiRkZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgLy8gVG9kbzogZGVwcmVjYXRlIGluIGZhdm9yIG9mICRmYW1pbHkgdmFyaWFibGVzXG4kZGVmYXVsdC1saW5lLWhlaWdodDogMS40OyAvLyBUb2RvOiBkZXByZWNhdGUgaW4gZmF2b3Igb2YgJGxpbmUtaGVpZ2h0IHRva2Vuc1xuXG4vKipcbiAqIFR5cG9ncmFwaHlcbiAqL1xuXG4vLyBTaXplc1xuJGZvbnQtc2l6ZS14LXNtYWxsOiAxMXB4O1xuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtbWVkaXVtOiAxM3B4O1xuJGZvbnQtc2l6ZS1sYXJnZTogMTVweDtcbiRmb250LXNpemUteC1sYXJnZTogMjBweDtcbiRmb250LXNpemUtMngtbGFyZ2U6IDMycHg7XG5cbi8vIExpbmUgaGVpZ2h0c1xuJGZvbnQtbGluZS1oZWlnaHQteC1zbWFsbDogMTZweDtcbiRmb250LWxpbmUtaGVpZ2h0LXNtYWxsOiAyMHB4O1xuJGZvbnQtbGluZS1oZWlnaHQtbWVkaXVtOiAyNHB4O1xuJGZvbnQtbGluZS1oZWlnaHQtbGFyZ2U6IDI4cHg7XG4kZm9udC1saW5lLWhlaWdodC14LWxhcmdlOiAzMnB4O1xuJGZvbnQtbGluZS1oZWlnaHQtMngtbGFyZ2U6IDQwcHg7XG5cbi8vIFdlaWdodHNcbiRmb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XG4kZm9udC13ZWlnaHQtbWVkaXVtOiA0OTk7IC8vIGVuc3VyZXMgZmFsbGJhY2sgdG8gNDAwIChpbnN0ZWFkIG9mIDYwMClcblxuLy8gRmFtaWxpZXNcbiRmb250LWZhbWlseS1oZWFkaW5nczogLWFwcGxlLXN5c3RlbSwgXCJzeXN0ZW0tdWlcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHk6IC1hcHBsZS1zeXN0ZW0sIFwic3lzdGVtLXVpXCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgQ29uc29sYXMsIG1vbmFjbywgbW9ub3NwYWNlO1xuXG4vKipcbiAqIEdyaWQgU3lzdGVtLlxuICogaHR0cHM6Ly9tYWtlLndvcmRwcmVzcy5vcmcvZGVzaWduLzIwMTkvMTAvMzEvcHJvcG9zYWwtYS1jb25zaXN0ZW50LXNwYWNpbmctc3lzdGVtLWZvci13b3JkcHJlc3MvXG4gKi9cblxuJGdyaWQtdW5pdDogOHB4O1xuJGdyaWQtdW5pdC0wNTogMC41ICogJGdyaWQtdW5pdDtcdC8vIDRweFxuJGdyaWQtdW5pdC0xMDogMSAqICRncmlkLXVuaXQ7XHRcdC8vIDhweFxuJGdyaWQtdW5pdC0xNTogMS41ICogJGdyaWQtdW5pdDtcdC8vIDEycHhcbiRncmlkLXVuaXQtMjA6IDIgKiAkZ3JpZC11bml0O1x0XHQvLyAxNnB4XG4kZ3JpZC11bml0LTMwOiAzICogJGdyaWQtdW5pdDtcdFx0Ly8gMjRweFxuJGdyaWQtdW5pdC00MDogNCAqICRncmlkLXVuaXQ7XHRcdC8vIDMycHhcbiRncmlkLXVuaXQtNTA6IDUgKiAkZ3JpZC11bml0O1x0XHQvLyA0MHB4XG4kZ3JpZC11bml0LTYwOiA2ICogJGdyaWQtdW5pdDtcdFx0Ly8gNDhweFxuJGdyaWQtdW5pdC03MDogNyAqICRncmlkLXVuaXQ7XHRcdC8vIDU2cHhcbiRncmlkLXVuaXQtODA6IDggKiAkZ3JpZC11bml0O1x0XHQvLyA2NHB4XG5cbi8qKlxuICogUmFkaXVzIHNjYWxlLlxuICovXG5cbiRyYWRpdXMteC1zbWFsbDogMXB4OyAgIC8vIEFwcGxpZWQgdG8gZWxlbWVudHMgbGlrZSBidXR0b25zIG5lc3RlZCB3aXRoaW4gcHJpbWl0aXZlcyBsaWtlIGlucHV0cy5cbiRyYWRpdXMtc21hbGw6IDJweDsgICAgIC8vIEFwcGxpZWQgdG8gbW9zdCBwcmltaXRpdmVzLlxuJHJhZGl1cy1tZWRpdW06IDRweDsgICAgLy8gQXBwbGllZCB0byBjb250YWluZXJzIHdpdGggc21hbGxlciBwYWRkaW5nLlxuJHJhZGl1cy1sYXJnZTogOHB4OyAgICAgLy8gQXBwbGllZCB0byBjb250YWluZXJzIHdpdGggbGFyZ2VyIHBhZGRpbmcuXG4kcmFkaXVzLWZ1bGw6IDk5OTlweDsgICAvLyBGb3IgcGlsbHMuXG4kcmFkaXVzLXJvdW5kOiA1MCU7ICAgICAvLyBGb3IgY2lyY2xlcyBhbmQgb3ZhbHMuXG5cbi8qKlxuICogRWxldmF0aW9uIHNjYWxlLlxuICovXG5cbi8vIEZvciBzZWN0aW9ucyBhbmQgY29udGFpbmVycyB0aGF0IGdyb3VwIHJlbGF0ZWQgY29udGVudCBhbmQgY29udHJvbHMsIHdoaWNoIG1heSBvdmVybGFwIG90aGVyIGNvbnRlbnQuIEV4YW1wbGU6IFByZXZpZXcgRnJhbWUuXG4kZWxldmF0aW9uLXgtc21hbGw6IDAgMXB4IDFweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDMpLCAwIDFweCAycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKSwgMCAzcHggM3B4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMiksIDAgNHB4IDRweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDEpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IHByb3ZpZGUgY29udGV4dHVhbCBmZWVkYmFjayB3aXRob3V0IGJlaW5nIGludHJ1c2l2ZS4gR2VuZXJhbGx5IG5vbi1pbnRlcnJ1cHRpdmUuIEV4YW1wbGU6IFRvb2x0aXBzLCBTbmFja2Jhci5cbiRlbGV2YXRpb24tc21hbGw6IDAgMXB4IDJweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDUpLCAwIDJweCAzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCA2cHggNnB4IHJnYmEoY29sb3JzLiRibGFjaywgMC4wMyksIDAgOHB4IDhweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDIpO1xuXG4vLyBGb3IgY29tcG9uZW50cyB0aGF0IG9mZmVyIGFkZGl0aW9uYWwgYWN0aW9ucy4gRXhhbXBsZTogTWVudXMsIENvbW1hbmQgUGFsZXR0ZVxuJGVsZXZhdGlvbi1tZWRpdW06IDAgMnB4IDNweCByZ2JhKGNvbG9ycy4kYmxhY2ssIDAuMDUpLCAwIDRweCA1cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCAxMnB4IDEycHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAzKSwgMCAxNnB4IDE2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLy8gRm9yIGNvbXBvbmVudHMgdGhhdCBjb25maXJtIGRlY2lzaW9ucyBvciBoYW5kbGUgbmVjZXNzYXJ5IGludGVycnVwdGlvbnMuIEV4YW1wbGU6IE1vZGFscy5cbiRlbGV2YXRpb24tbGFyZ2U6IDAgNXB4IDE1cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA4KSwgMCAxNXB4IDI3cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA3KSwgMCAzMHB4IDM2cHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjA0KSwgMCA1MHB4IDQzcHggcmdiYShjb2xvcnMuJGJsYWNrLCAwLjAyKTtcblxuLyoqXG4gKiBEaW1lbnNpb25zLlxuICovXG5cbiRpY29uLXNpemU6IDI0cHg7XG4kYnV0dG9uLXNpemU6IDM2cHg7XG4kYnV0dG9uLXNpemUtbmV4dC1kZWZhdWx0LTQwcHg6IDQwcHg7IC8vIHRyYW5zaXRpb25hcnkgdmFyaWFibGUgZm9yIG5leHQgZGVmYXVsdCBidXR0b24gc2l6ZVxuJGJ1dHRvbi1zaXplLXNtYWxsOiAyNHB4O1xuJGJ1dHRvbi1zaXplLWNvbXBhY3Q6IDMycHg7XG4kaGVhZGVyLWhlaWdodDogNjRweDtcbiRwYW5lbC1oZWFkZXItaGVpZ2h0OiAkZ3JpZC11bml0LTYwO1xuJG5hdi1zaWRlYmFyLXdpZHRoOiAzMDBweDtcbiRhZG1pbi1iYXItaGVpZ2h0OiAzMnB4O1xuJGFkbWluLWJhci1oZWlnaHQtYmlnOiA0NnB4O1xuJGFkbWluLXNpZGViYXItd2lkdGg6IDE2MHB4O1xuJGFkbWluLXNpZGViYXItd2lkdGgtYmlnOiAxOTBweDtcbiRhZG1pbi1zaWRlYmFyLXdpZHRoLWNvbGxhcHNlZDogMzZweDtcbiRtb2RhbC1taW4td2lkdGg6IDM1MHB4O1xuJG1vZGFsLXdpZHRoLXNtYWxsOiAzODRweDtcbiRtb2RhbC13aWR0aC1tZWRpdW06IDUxMnB4O1xuJG1vZGFsLXdpZHRoLWxhcmdlOiA4NDBweDtcbiRzcGlubmVyLXNpemU6IDE2cHg7XG4kY2FudmFzLXBhZGRpbmc6ICRncmlkLXVuaXQtMjA7XG4kcGFsZXR0ZS1tYXgtaGVpZ2h0OiAzNjhweDtcblxuLyoqXG4gKiBNb2JpbGUgc3BlY2lmaWMgc3R5bGVzXG4gKi9cbiRtb2JpbGUtdGV4dC1taW4tZm9udC1zaXplOiAxNnB4OyAvLyBBbnkgZm9udCBzaXplIGJlbG93IDE2cHggd2lsbCBjYXVzZSBNb2JpbGUgU2FmYXJpIHRvIFwiem9vbSBpblwiLlxuXG4vKipcbiAqIEVkaXRvciBzdHlsZXMuXG4gKi9cblxuJHNpZGViYXItd2lkdGg6IDI4MHB4O1xuJGNvbnRlbnQtd2lkdGg6IDg0MHB4O1xuJHdpZGUtY29udGVudC13aWR0aDogMTEwMHB4O1xuJHdpZGdldC1hcmVhLXdpZHRoOiA3MDBweDtcbiRzZWNvbmRhcnktc2lkZWJhci13aWR0aDogMzUwcHg7XG4kZWRpdG9yLWZvbnQtc2l6ZTogMTZweDtcbiRkZWZhdWx0LWJsb2NrLW1hcmdpbjogMjhweDsgLy8gVGhpcyB2YWx1ZSBwcm92aWRlcyBhIGNvbnNpc3RlbnQsIGNvbnRpZ3VvdXMgc3BhY2luZyBiZXR3ZWVuIGJsb2Nrcy5cbiR0ZXh0LWVkaXRvci1mb250LXNpemU6IDE1cHg7XG4kZWRpdG9yLWxpbmUtaGVpZ2h0OiAxLjg7XG4kZWRpdG9yLWh0bWwtZm9udDogJGZvbnQtZmFtaWx5LW1vbm87XG5cbi8qKlxuICogQmxvY2sgJiBFZGl0b3IgVUkuXG4gKi9cblxuJGJsb2NrLXRvb2xiYXItaGVpZ2h0OiAkZ3JpZC11bml0LTYwO1xuJGJvcmRlci13aWR0aDogMXB4O1xuJGJvcmRlci13aWR0aC1mb2N1cy1mYWxsYmFjazogMnB4OyAvLyBUaGlzIGV4aXN0cyBhcyBhIGZhbGxiYWNrLCBhbmQgaXMgaWRlYWxseSBvdmVycmlkZGVuIGJ5IHZhcigtLXdwLWFkbWluLWJvcmRlci13aWR0aC1mb2N1cykgdW5sZXNzIGluIHNvbWUgU0FTUyBtYXRoIGNhc2VzLlxuJGJvcmRlci13aWR0aC10YWI6IDEuNXB4O1xuJGhlbHB0ZXh0LWZvbnQtc2l6ZTogMTJweDtcbiRyYWRpby1pbnB1dC1zaXplOiAxNnB4O1xuJHJhZGlvLWlucHV0LXNpemUtc206IDI0cHg7IC8vIFdpZHRoICYgaGVpZ2h0IGZvciBzbWFsbCB2aWV3cG9ydHMuXG5cbi8vIERlcHJlY2F0ZWQsIHBsZWFzZSBhdm9pZCB1c2luZyB0aGVzZS5cbiRibG9jay1wYWRkaW5nOiAxNHB4OyAvLyBVc2VkIHRvIGRlZmluZSBzcGFjZSBiZXR3ZWVuIGJsb2NrIGZvb3RwcmludCBhbmQgc3Vycm91bmRpbmcgYm9yZGVycy5cbiRyYWRpdXMtYmxvY2stdWk6ICRyYWRpdXMtc21hbGw7XG4kc2hhZG93LXBvcG92ZXI6ICRlbGV2YXRpb24teC1zbWFsbDtcbiRzaGFkb3ctbW9kYWw6ICRlbGV2YXRpb24tbGFyZ2U7XG4kZGVmYXVsdC1mb250LXNpemU6ICRmb250LXNpemUtbWVkaXVtO1xuXG4vKipcbiAqIEJsb2NrIHBhZGRpbmdzLlxuICovXG5cbi8vIFBhZGRpbmcgZm9yIGJsb2NrcyB3aXRoIGEgYmFja2dyb3VuZCBjb2xvciAoZS5nLiBwYXJhZ3JhcGggb3IgZ3JvdXApLlxuJGJsb2NrLWJnLXBhZGRpbmctLXY6IDEuMjVlbTtcbiRibG9jay1iZy1wYWRkaW5nLS1oOiAyLjM3NWVtO1xuXG5cbi8qKlxuICogUmVhY3QgTmF0aXZlIHNwZWNpZmljLlxuICogVGhlc2UgdmFyaWFibGVzIGRvIG5vdCBhcHBlYXIgdG8gYmUgdXNlZCBhbnl3aGVyZSBlbHNlLlxuICovXG5cbi8vIERpbWVuc2lvbnMuXG4kbW9iaWxlLWhlYWRlci10b29sYmFyLWhlaWdodDogNDRweDtcbiRtb2JpbGUtaGVhZGVyLXRvb2xiYXItZXhwYW5kZWQtaGVpZ2h0OiA1MnB4O1xuJG1vYmlsZS1mbG9hdGluZy10b29sYmFyLWhlaWdodDogNDRweDtcbiRtb2JpbGUtZmxvYXRpbmctdG9vbGJhci1tYXJnaW46IDhweDtcbiRtb2JpbGUtY29sb3Itc3dhdGNoOiA0OHB4O1xuXG4vLyBCbG9jayBVSS5cbiRtb2JpbGUtYmxvY2stdG9vbGJhci1oZWlnaHQ6IDQ0cHg7XG4kZGltbWVkLW9wYWNpdHk6IDE7XG4kYmxvY2stZWRnZS10by1jb250ZW50OiAxNnB4O1xuJHNvbGlkLWJvcmRlci1zcGFjZTogMTJweDtcbiRkYXNoZWQtYm9yZGVyLXNwYWNlOiA2cHg7XG4kYmxvY2stc2VsZWN0ZWQtbWFyZ2luOiAzcHg7XG4kYmxvY2stc2VsZWN0ZWQtYm9yZGVyLXdpZHRoOiAxcHg7XG4kYmxvY2stc2VsZWN0ZWQtcGFkZGluZzogMDtcbiRibG9jay1zZWxlY3RlZC1jaGlsZC1tYXJnaW46IDVweDtcbiRibG9jay1zZWxlY3RlZC10by1jb250ZW50OiAkYmxvY2stZWRnZS10by1jb250ZW50IC0gJGJsb2NrLXNlbGVjdGVkLW1hcmdpbiAtICRibG9jay1zZWxlY3RlZC1ib3JkZXItd2lkdGg7XG4iLCIvKipcbiAqIENvbG9yc1xuICovXG5cbi8vIFdvcmRQcmVzcyBncmF5cy5cbiRibGFjazogIzAwMDtcdFx0XHQvLyBVc2Ugb25seSB3aGVuIHlvdSB0cnVseSBuZWVkIHB1cmUgYmxhY2suIEZvciBVSSwgdXNlICRncmF5LTkwMC5cbiRncmF5LTkwMDogIzFlMWUxZTtcbiRncmF5LTgwMDogIzJmMmYyZjtcbiRncmF5LTcwMDogIzc1NzU3NTtcdFx0Ly8gTWVldHMgNC42OjEgKDQuNToxIGlzIG1pbmltdW0pIHRleHQgY29udHJhc3QgYWdhaW5zdCB3aGl0ZS5cbiRncmF5LTYwMDogIzk0OTQ5NDtcdFx0Ly8gTWVldHMgMzoxIFVJIG9yIGxhcmdlIHRleHQgY29udHJhc3QgYWdhaW5zdCB3aGl0ZS5cbiRncmF5LTQwMDogI2NjYztcbiRncmF5LTMwMDogI2RkZDtcdFx0Ly8gVXNlZCBmb3IgbW9zdCBib3JkZXJzLlxuJGdyYXktMjAwOiAjZTBlMGUwO1x0XHQvLyBVc2VkIHNwYXJpbmdseSBmb3IgbGlnaHQgYm9yZGVycy5cbiRncmF5LTEwMDogI2YwZjBmMDtcdFx0Ly8gVXNlZCBmb3IgbGlnaHQgZ3JheSBiYWNrZ3JvdW5kcy5cbiR3aGl0ZTogI2ZmZjtcblxuLy8gT3BhY2l0aWVzICYgYWRkaXRpb25hbCBjb2xvcnMuXG4kZGFyay1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCRncmF5LTkwMCwgMC42Mik7XG4kbWVkaXVtLWdyYXktcGxhY2Vob2xkZXI6IHJnYmEoJGdyYXktOTAwLCAwLjU1KTtcbiRsaWdodC1ncmF5LXBsYWNlaG9sZGVyOiByZ2JhKCR3aGl0ZSwgMC42NSk7XG5cbi8vIEFsZXJ0IGNvbG9ycy5cbiRhbGVydC15ZWxsb3c6ICNmMGI4NDk7XG4kYWxlcnQtcmVkOiAjY2MxODE4O1xuJGFsZXJ0LWdyZWVuOiAjNGFiODY2O1xuXG4vLyBEZXByZWNhdGVkLCBwbGVhc2UgYXZvaWQgdXNpbmcgdGhlc2UuXG4kZGFyay10aGVtZS1mb2N1czogJHdoaXRlO1x0Ly8gRm9jdXMgY29sb3Igd2hlbiB0aGUgdGhlbWUgaXMgZGFyay5cbiIsIi8qKlxuICogQnJlYWtwb2ludHMgJiBNZWRpYSBRdWVyaWVzXG4gKi9cblxuLy8gTW9zdCB1c2VkIGJyZWFrcG9pbnRzXG4kYnJlYWsteGh1Z2U6IDE5MjBweDtcbiRicmVhay1odWdlOiAxNDQwcHg7XG4kYnJlYWstd2lkZTogMTI4MHB4O1xuJGJyZWFrLXhsYXJnZTogMTA4MHB4O1xuJGJyZWFrLWxhcmdlOiA5NjBweDtcdC8vIGFkbWluIHNpZGViYXIgYXV0byBmb2xkc1xuJGJyZWFrLW1lZGl1bTogNzgycHg7XHQvLyBhZG1pbmJhciBnb2VzIGJpZ1xuJGJyZWFrLXNtYWxsOiA2MDBweDtcbiRicmVhay1tb2JpbGU6IDQ4MHB4O1xuJGJyZWFrLXpvb21lZC1pbjogMjgwcHg7XG5cbi8vIEFsbCBtZWRpYSBxdWVyaWVzIGN1cnJlbnRseSBpbiBXb3JkUHJlc3M6XG4vL1xuLy8gbWluLXdpZHRoOiAyMDAwcHhcbi8vIG1pbi13aWR0aDogMTY4MHB4XG4vLyBtaW4td2lkdGg6IDEyNTBweFxuLy8gbWF4LXdpZHRoOiAxMTIwcHggKlxuLy8gbWF4LXdpZHRoOiAxMDAwcHhcbi8vIG1pbi13aWR0aDogNzY5cHggYW5kIG1heC13aWR0aDogMTAwMHB4XG4vLyBtYXgtd2lkdGg6IDk2MHB4ICpcbi8vIG1heC13aWR0aDogOTAwcHhcbi8vIG1heC13aWR0aDogODUwcHhcbi8vIG1pbi13aWR0aDogODAwcHggYW5kIG1heC13aWR0aDogMTQ5OXB4XG4vLyBtYXgtd2lkdGg6IDgwMHB4XG4vLyBtYXgtd2lkdGg6IDc5OXB4XG4vLyBtYXgtd2lkdGg6IDc4MnB4ICpcbi8vIG1heC13aWR0aDogNzY4cHhcbi8vIG1heC13aWR0aDogNjQwcHggKlxuLy8gbWF4LXdpZHRoOiA2MDBweCAqXG4vLyBtYXgtd2lkdGg6IDUyMHB4XG4vLyBtYXgtd2lkdGg6IDUwMHB4XG4vLyBtYXgtd2lkdGg6IDQ4MHB4ICpcbi8vIG1heC13aWR0aDogNDAwcHggKlxuLy8gbWF4LXdpZHRoOiAzODBweFxuLy8gbWF4LXdpZHRoOiAzMjBweCAqXG4vL1xuLy8gVGhvc2UgbWFya2VkICogc2VlbSB0byBiZSBtb3JlIGNvbW1vbmx5IHVzZWQgdGhhbiB0aGUgb3RoZXJzLlxuLy8gTGV0J3MgdHJ5IGFuZCB1c2UgYXMgZmV3IG9mIHRoZXNlIGFzIHBvc3NpYmxlLCBhbmQgYmUgbWluZGZ1bCBhYm91dCBhZGRpbmcgbmV3IG9uZXMsIHNvIHdlIGRvbid0IG1ha2UgdGhlIHNpdHVhdGlvbiB3b3JzZVxuIiwiLyoqXG4qICBDb252ZXJ0cyBhIGhleCB2YWx1ZSBpbnRvIHRoZSByZ2IgZXF1aXZhbGVudC5cbipcbiogQHBhcmFtIHtzdHJpbmd9IGhleCAtIHRoZSBoZXhhZGVjaW1hbCB2YWx1ZSB0byBjb252ZXJ0XG4qIEByZXR1cm4ge3N0cmluZ30gY29tbWEgc2VwYXJhdGVkIHJnYiB2YWx1ZXNcbiovXG5cbkB1c2UgXCJzYXNzOmNvbG9yXCI7XG5AdXNlIFwic2FzczptZXRhXCI7XG5cbkBmdW5jdGlvbiBoZXgtdG8tcmdiKCRoZXgpIHtcblx0Lypcblx0ICogVE9ETzogYGNvbG9yLntyZWR8Z3JlZW58Ymx1ZX1gIHdpbGwgdHJpZ2dlciBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgaW4gRGFydCBTYXNzLFxuXHQgKiBidXQgdGhlIFNhc3MgdXNlZCBieSB0aGUgR3V0ZW5iZXJnIHByb2plY3QgZG9lc24ndCBzdXBwb3J0IGBjb2xvci5jaGFubmVsKClgIHlldCxcblx0ICogc28gd2UgY2FuJ3QgbWlncmF0ZSB0byBpdCBhdCB0aGlzIHRpbWUuXG5cdCAqIEluIHRoZSBmdXR1cmUsIGFmdGVyIHRoZSBHdXRlbmJlcmcgcHJvamVjdCBoYXMgYmVlbiBmdWxseSBtaWdyYXRlZCB0byBEYXJ0IFNhc3MsXG5cdCAqIFJlbW92ZSB0aGlzIGNvbmRpdGlvbmFsIHN0YXRlbWVudCBhbmQgdXNlIG9ubHkgYGNvbG9yLmNoYW5uZWwoKWAuXG5cdCAqL1xuXHRAaWYgbWV0YS5mdW5jdGlvbi1leGlzdHMoXCJjaGFubmVsXCIsIFwiY29sb3JcIikge1xuXHRcdEByZXR1cm4gY29sb3IuY2hhbm5lbCgkaGV4LCBcInJlZFwiKSwgY29sb3IuY2hhbm5lbCgkaGV4LCBcImdyZWVuXCIpLCBjb2xvci5jaGFubmVsKCRoZXgsIFwiYmx1ZVwiKTtcblx0fSBAZWxzZSB7XG5cdFx0QHJldHVybiBjb2xvci5yZWQoJGhleCksIGNvbG9yLmdyZWVuKCRoZXgpLCBjb2xvci5ibHVlKCRoZXgpO1xuXHR9XG59XG4iLCIvKipcbiAqIExvbmcgY29udGVudCBmYWRlIG1peGluXG4gKlxuICogQ3JlYXRlcyBhIGZhZGluZyBvdmVybGF5IHRvIHNpZ25pZnkgdGhhdCB0aGUgY29udGVudCBpcyBsb25nZXJcbiAqIHRoYW4gdGhlIHNwYWNlIGFsbG93cy5cbiAqL1xuXG5AbWl4aW4gbG9uZy1jb250ZW50LWZhZGUoJGRpcmVjdGlvbjogcmlnaHQsICRzaXplOiAyMCUsICRjb2xvcjogI2ZmZiwgJGVkZ2U6IDAsICR6LWluZGV4OiBmYWxzZSkge1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cblx0QGlmICR6LWluZGV4IHtcblx0XHR6LWluZGV4OiAkei1pbmRleDtcblx0fVxuXG5cdEBpZiAkZGlyZWN0aW9uID09IFwiYm90dG9tXCIge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50LCAkY29sb3IgOTAlKTtcblx0XHRsZWZ0OiAkZWRnZTtcblx0XHRyaWdodDogJGVkZ2U7XG5cdFx0dG9wOiAkZWRnZTtcblx0XHRib3R0b206IGNhbGMoMTAwJSAtICRzaXplKTtcblx0XHR3aWR0aDogYXV0bztcblx0fVxuXG5cdEBpZiAkZGlyZWN0aW9uID09IFwidG9wXCIge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCAkY29sb3IgOTAlKTtcblx0XHR0b3A6IGNhbGMoMTAwJSAtICRzaXplKTtcblx0XHRsZWZ0OiAkZWRnZTtcblx0XHRyaWdodDogJGVkZ2U7XG5cdFx0Ym90dG9tOiAkZWRnZTtcblx0XHR3aWR0aDogYXV0bztcblx0fVxuXG5cdEBpZiAkZGlyZWN0aW9uID09IFwibGVmdFwiIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdHJhbnNwYXJlbnQsICRjb2xvciA5MCUpO1xuXHRcdHRvcDogJGVkZ2U7XG5cdFx0bGVmdDogJGVkZ2U7XG5cdFx0Ym90dG9tOiAkZWRnZTtcblx0XHRyaWdodDogYXV0bztcblx0XHR3aWR0aDogJHNpemU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG5cblx0QGlmICRkaXJlY3Rpb24gPT0gXCJyaWdodFwiIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCAkY29sb3IgOTAlKTtcblx0XHR0b3A6ICRlZGdlO1xuXHRcdGJvdHRvbTogJGVkZ2U7XG5cdFx0cmlnaHQ6ICRlZGdlO1xuXHRcdGxlZnQ6IGF1dG87XG5cdFx0d2lkdGg6ICRzaXplO1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxufVxuIiwiQHVzZSBcIi4vbWl4aW5zXCI7XG5AdXNlIFwiLi9mdW5jdGlvbnNcIjtcbkB1c2UgXCIuL2NvbG9yc1wiO1xuXG4vLyBJdCBpcyBpbXBvcnRhbnQgdG8gaW5jbHVkZSB0aGVzZSBzdHlsZXMgaW4gYWxsIGJ1aWx0IHN0eWxlc2hlZXRzLlxuLy8gVGhpcyBhbGxvd3MgdG8gQ1NTIHZhcmlhYmxlcyBwb3N0IENTUyBwbHVnaW4gdG8gZ2VuZXJhdGUgZmFsbGJhY2tzLlxuLy8gSXQgYWxzbyBwcm92aWRlcyBkZWZhdWx0IENTUyB2YXJpYWJsZXMgZm9yIG5wbSBwYWNrYWdlIGNvbnN1bWVycy5cbjpyb290IHtcblx0LS13cC1ibG9jay1zeW5jZWQtY29sb3I6ICM3YTAwZGY7XG5cdC0td3AtYmxvY2stc3luY2VkLWNvbG9yLS1yZ2I6ICN7ZnVuY3Rpb25zLmhleC10by1yZ2IoIzdhMDBkZil9O1xuXHQvLyBUaGlzIENTUyB2YXJpYWJsZSBpcyBub3QgdXNlZCBpbiBHdXRlbmJlcmcgcHJvamVjdCxcblx0Ly8gYnV0IGlzIG1haW50YWluZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHQtLXdwLWJvdW5kLWJsb2NrLWNvbG9yOiB2YXIoLS13cC1ibG9jay1zeW5jZWQtY29sb3IpO1xuXHQtLXdwLWVkaXRvci1jYW52YXMtYmFja2dyb3VuZDogI3tjb2xvcnMuJGdyYXktMzAwfTtcblx0QGluY2x1ZGUgbWl4aW5zLmFkbWluLXNjaGVtZSgjMDA3Y2JhKTtcbn1cbiIsIkB1c2UgXCJzYXNzOmNvbG9yXCI7XG5AdXNlIFwiQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy9taXhpbnNcIiBhcyAqO1xuQHVzZSBcIkB3b3JkcHJlc3MvYmFzZS1zdHlsZXMvdmFyaWFibGVzXCIgYXMgKjtcbkB1c2UgXCJAd29yZHByZXNzL2Jhc2Utc3R5bGVzL2NvbG9yc1wiIGFzICo7XG5AdXNlIFwiQHdvcmRwcmVzcy9iYXNlLXN0eWxlcy9kZWZhdWx0LWN1c3RvbS1wcm9wZXJ0aWVzXCIgYXMgKjtcblxuLy8gSGVyZSB3ZSBleHRlbmQgdGhlIG1vZGFsIHN0eWxlcyB0byBiZSB0aWdodGVyLCBhbmQgdG8gdGhlIGNlbnRlci4gQmVjYXVzZSB0aGUgcGFsZXR0ZSB1c2VzIHRoZSBtb2RhbCBhcyBhIGNvbnRhaW5lci5cbi53b3JrZmxvd3Mtd29ya2Zsb3ctbWVudSB7XG5cdGJvcmRlci1yYWRpdXM6ICRncmlkLXVuaXQtMDU7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXVuaXQtNDB9KTtcblx0bWFyZ2luOiBhdXRvO1xuXHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogY2FsYyg1JSArICN7JGhlYWRlci1oZWlnaHR9KTtcblxuXHRAaW5jbHVkZSBicmVhay1zbWFsbCgpIHtcblx0XHR0b3A6IGNhbGMoMTAlICsgI3skaGVhZGVyLWhlaWdodH0pO1xuXHR9XG5cblx0LmNvbXBvbmVudHMtbW9kYWxfX2NvbnRlbnQge1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG59XG5cbi53b3JrZmxvd3Mtd29ya2Zsb3ctbWVudV9fb3ZlcmxheSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi53b3JrZmxvd3Mtd29ya2Zsb3ctbWVudV9faGVhZGVyIHtcblx0cGFkZGluZzogMCAkZ3JpZC11bml0LTIwO1xufVxuXG4ud29ya2Zsb3dzLXdvcmtmbG93LW1lbnVfX2hlYWRlci1zZWFyY2gtaWNvbiB7XG5cdCY6ZGlyKGx0cikge1xuXHRcdHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcblx0fVxufVxuXG4ud29ya2Zsb3dzLXdvcmtmbG93LW1lbnVfX2NvbnRhaW5lciB7XG5cdC8vIHRoZSBzdHlsZSBoZXJlIGlzIGEgaGFjayB0byBmb3JjZSBzYWZhcmkgdG8gcmVwYWludCB0byBhdm9pZCBhIHN0eWxlIGdsaXRjaFxuXHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXG5cdCY6Zm9jdXMge1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdH1cblxuXHRbY21kay1pbnB1dF0ge1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwYWRkaW5nOiAkZ3JpZC11bml0LTIwICRncmlkLXVuaXQtMDU7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0XHRjb2xvcjogJGdyYXktOTAwO1xuXHRcdG1hcmdpbjogMDtcblx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDI4cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMDtcblxuXHRcdCY6OnBsYWNlaG9sZGVyIHtcblx0XHRcdGNvbG9yOiAkZ3JheS03MDA7XG5cdFx0fVxuXG5cdFx0Jjpmb2N1cyB7XG5cdFx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHR9XG5cdH1cblxuXHRbY21kay1pdGVtXSB7XG5cdFx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cy1zbWFsbDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGNvbG9yOiAkZ3JheS05MDA7XG5cdFx0Zm9udC1zaXplOiAkZGVmYXVsdC1mb250LXNpemU7XG5cblx0XHQmW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdLFxuXHRcdCY6YWN0aXZlIHtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKTtcblx0XHRcdGNvbG9yOiAkd2hpdGU7XG5cdFx0fVxuXG5cdFx0JlthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSB7XG5cdFx0XHRjb2xvcjogJGdyYXktNjAwO1xuXHRcdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcblx0XHR9XG5cblx0XHQ+IGRpdiB7XG5cdFx0XHRtaW4taGVpZ2h0OiAkYnV0dG9uLXNpemUtbmV4dC1kZWZhdWx0LTQwcHg7XG5cdFx0XHRwYWRkaW5nOiAkZ3JpZC11bml0LTA1O1xuXHRcdFx0cGFkZGluZy1sZWZ0OiAkZ3JpZC11bml0LTIwO1xuXHRcdH1cblx0fVxuXG5cdFtjbWRrLXJvb3RdID4gW2NtZGstbGlzdF0ge1xuXHRcdG1heC1oZWlnaHQ6ICRwYWxldHRlLW1heC1oZWlnaHQ7IC8vIFNwZWNpZmljIHRvIG5vdCBoYXZlIHdvcmtmbG93cyBvdmVyZmxvdyBvZGRseS5cblx0XHRvdmVyZmxvdzogYXV0bztcblxuXHRcdC8vIEVuc3VyZXMgdGhlcmUgaXMgYWx3YXlzIHBhZGRpbmcgYm90dG9tIG9uIHRoZSBsYXN0IGdyb3VwLCB3aGVuIHRoZXJlIGFyZSB3b3JrZmxvd3MuXG5cdFx0JlxuXHRcdFtjbWRrLWxpc3Qtc2l6ZXJdID4gW2NtZGstZ3JvdXBdOmxhc3QtY2hpbGRcblx0XHRbY21kay1ncm91cC1pdGVtc106bm90KDplbXB0eSkge1xuXHRcdFx0cGFkZGluZy1ib3R0b206ICRncmlkLXVuaXQtMTA7XG5cdFx0fVxuXG5cdFx0JiBbY21kay1saXN0LXNpemVyXSA+IFtjbWRrLWdyb3VwXSA+IFtjbWRrLWdyb3VwLWl0ZW1zXTpub3QoOmVtcHR5KSB7XG5cdFx0XHRwYWRkaW5nOiAwICRncmlkLXVuaXQtMTA7XG5cdFx0fVxuXHR9XG5cblx0W2NtZGstZW1wdHldIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xuXHRcdGNvbG9yOiAkZ3JheS05MDA7XG5cdFx0cGFkZGluZzogJGdyaWQtdW5pdC0xMCAwICRncmlkLXVuaXQtNDA7XG5cdH1cblxuXHRbY21kay1sb2FkaW5nXSB7XG5cdFx0cGFkZGluZzogJGdyaWQtdW5pdC0yMDtcblx0fVxuXG5cdFtjbWRrLWxpc3Qtc2l6ZXJdIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdH1cbn1cblxuLndvcmtmbG93cy13b3JrZmxvdy1tZW51X19pdGVtIHNwYW4ge1xuXHQvLyBFbnN1cmUgd29ya2Zsb3dzIGRvIG5vdCBydW4gb2ZmIHRoZSBlZGdlIChncmVhdCBmb3IgcG9zdCB0aXRsZXMpLlxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ud29ya2Zsb3dzLXdvcmtmbG93LW1lbnVfX2l0ZW0gbWFyayB7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRiYWNrZ3JvdW5kOiB1bnNldDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLndvcmtmbG93cy13b3JrZmxvdy1tZW51X19vdXRwdXQge1xuXHRwYWRkaW5nOiAkZ3JpZC11bml0LTIwO1xufVxuXG4ud29ya2Zsb3dzLXdvcmtmbG93LW1lbnVfX291dHB1dC1oZWFkZXIge1xuXHRtYXJnaW4tYm90dG9tOiAkZ3JpZC11bml0LTIwO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXktMzAwO1xuXHRwYWRkaW5nLWJvdHRvbTogJGdyaWQtdW5pdC0xMDtcblxuXHRoMyB7XG5cdFx0bWFyZ2luOiAwIDAgJGdyaWQtdW5pdC0wNTtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRjb2xvcjogJGdyYXktOTAwO1xuXHR9XG59XG5cbi53b3JrZmxvd3Mtd29ya2Zsb3ctbWVudV9fb3V0cHV0LWhpbnQge1xuXHRtYXJnaW46IDA7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Y29sb3I6ICRncmF5LTcwMDtcbn1cblxuLndvcmtmbG93cy13b3JrZmxvdy1tZW51X19vdXRwdXQtY29udGVudCB7XG5cdG1heC1oZWlnaHQ6IDQwMHB4O1xuXHRvdmVyZmxvdzogYXV0bztcblxuXHRwcmUge1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAkZ3JpZC11bml0LTE1O1xuXHRcdGJhY2tncm91bmQ6ICRncmF5LTEwMDtcblx0XHRib3JkZXItcmFkaXVzOiAkcmFkaXVzLXNtYWxsO1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcblx0XHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXHRcdGNvbG9yOiAkZ3JheS05MDA7XG5cdH1cbn1cblxuLndvcmtmbG93cy13b3JrZmxvdy1tZW51X19vdXRwdXQtZXJyb3Ige1xuXHRwYWRkaW5nOiAkZ3JpZC11bml0LTE1O1xuXHRiYWNrZ3JvdW5kOiAkZ3JheS0yMDA7XG5cdGJvcmRlcjogMXB4IHNvbGlkICN7Y29sb3IuYWRqdXN0KCAkYWxlcnQtcmVkLCAkbGlnaHRuZXNzOiAtMTAlICl9O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzLXNtYWxsO1xuXHRjb2xvcjogJGFsZXJ0LXJlZDtcblxuXHRwIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHR9XG59XG5cbi53b3JrZmxvd3Mtd29ya2Zsb3ctbWVudV9fZXhlY3V0aW5nIHtcblx0cGFkZGluZzogJGdyaWQtdW5pdC0zMCAkZ3JpZC11bml0LTIwO1xuXHRjb2xvcjogJGdyYXktNzAwO1xuXHRmb250LXNpemU6IDE0cHg7XG59XG4iXX0= */`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css));
var { withIgnoreIMEEvents } = unlock(import_components.privateApis);
var EMPTY_ARRAY = [];
var inputLabel = (0, import_i18n.__)("Run abilities and workflows");
function WorkflowInput({ isOpen, search, setSearch, abilities }) {
  const workflowMenuInput = (0, import_element2.useRef)();
  const _value = P((state) => state.value);
  const selectedItemId = (0, import_element2.useMemo)(() => {
    const ability = abilities.find((a) => a.label === _value);
    return ability?.name;
  }, [_value, abilities]);
  (0, import_element2.useEffect)(() => {
    if (isOpen) {
      workflowMenuInput.current.focus();
    }
  }, [isOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    _e.Input,
    {
      ref: workflowMenuInput,
      value: search,
      onValueChange: setSearch,
      placeholder: inputLabel,
      "aria-activedescendant": selectedItemId
    }
  );
}
function WorkflowMenu() {
  const { registerShortcut } = (0, import_data.useDispatch)(import_keyboard_shortcuts.store);
  const [search, setSearch] = (0, import_element2.useState)("");
  const [isOpen, setIsOpen] = (0, import_element2.useState)(false);
  const [abilityOutput, setAbilityOutput] = (0, import_element2.useState)(null);
  const [isExecuting, setIsExecuting] = (0, import_element2.useState)(false);
  const containerRef = (0, import_element2.useRef)();
  const abilities = (0, import_data.useSelect)((select) => {
    const allAbilities = select(abilitiesStore).getAbilities();
    return allAbilities || EMPTY_ARRAY;
  }, []);
  const filteredAbilities = (0, import_element2.useMemo)(() => {
    if (!search) {
      return abilities;
    }
    const searchLower = search.toLowerCase();
    return abilities.filter(
      (ability) => ability.label?.toLowerCase().includes(searchLower) || ability.name?.toLowerCase().includes(searchLower)
    );
  }, [abilities, search]);
  (0, import_element2.useEffect)(() => {
    if (abilityOutput && containerRef.current) {
      containerRef.current.focus();
    }
  }, [abilityOutput]);
  (0, import_element2.useEffect)(() => {
    registerShortcut({
      name: "core/workflows",
      category: "global",
      description: (0, import_i18n.__)("Open the workflow palette."),
      keyCombination: {
        modifier: "primary",
        character: "j"
      }
    });
  }, [registerShortcut]);
  (0, import_keyboard_shortcuts.useShortcut)(
    "core/workflows",
    /** @type {import('react').KeyboardEventHandler} */
    withIgnoreIMEEvents((event) => {
      if (event.defaultPrevented) {
        return;
      }
      event.preventDefault();
      setIsOpen(!isOpen);
    }),
    {
      bindGlobal: true
    }
  );
  const closeAndReset = () => {
    setSearch("");
    setIsOpen(false);
    setAbilityOutput(null);
    setIsExecuting(false);
  };
  const goBack = () => {
    setAbilityOutput(null);
    setIsExecuting(false);
    setSearch("");
  };
  const handleExecuteAbility = async (ability) => {
    setIsExecuting(true);
    try {
      const result = await executeAbility(ability.name);
      setAbilityOutput({
        name: ability.name,
        label: ability?.label || ability.name,
        description: ability?.description || "",
        success: true,
        data: result
      });
    } catch (error) {
      setAbilityOutput({
        name: ability.name,
        label: ability?.label || ability.name,
        description: ability?.description || "",
        success: false,
        error: error.message || String(error)
      });
    } finally {
      setIsExecuting(false);
    }
  };
  const onContainerKeyDown = (event) => {
    if (abilityOutput && (event.key === "Escape" || event.key === "Backspace" || event.key === "Delete")) {
      event.preventDefault();
      event.stopPropagation();
      goBack();
    }
  };
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    import_components.Modal,
    {
      className: "workflows-workflow-menu",
      overlayClassName: "workflows-workflow-menu__overlay",
      onRequestClose: abilityOutput ? goBack : closeAndReset,
      __experimentalHideHeader: true,
      contentLabel: (0, import_i18n.__)("Workflow palette"),
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "div",
        {
          className: "workflows-workflow-menu__container",
          onKeyDown: withIgnoreIMEEvents(onContainerKeyDown),
          ref: containerRef,
          tabIndex: -1,
          role: "presentation",
          children: abilityOutput ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "workflows-workflow-menu__output", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "workflows-workflow-menu__output-header", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { children: abilityOutput.label }),
              abilityOutput.description && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "workflows-workflow-menu__output-hint", children: abilityOutput.description })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "workflows-workflow-menu__output-content", children: abilityOutput.success ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("pre", { children: JSON.stringify(
              abilityOutput.data,
              null,
              2
            ) }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "workflows-workflow-menu__output-error", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { children: abilityOutput.error }) }) })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(_e, { label: inputLabel, shouldFilter: false, children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_components.__experimentalHStack, { className: "workflows-workflow-menu__header", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                icon_default,
                {
                  className: "workflows-workflow-menu__header-search-icon",
                  icon: search_default
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                WorkflowInput,
                {
                  search,
                  setSearch,
                  isOpen,
                  abilities
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(_e.List, { label: (0, import_i18n.__)("Workflow suggestions"), children: [
              isExecuting && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                import_components.__experimentalHStack,
                {
                  className: "workflows-workflow-menu__executing",
                  align: "center",
                  children: (0, import_i18n.__)("Executing ability\u2026")
                }
              ),
              !isExecuting && search && filteredAbilities.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(_e.Empty, { children: (0, import_i18n.__)("No results found.") }),
              !isExecuting && filteredAbilities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(_e.Group, { children: filteredAbilities.map((ability) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                _e.Item,
                {
                  value: ability.label,
                  className: "workflows-workflow-menu__item",
                  onSelect: () => handleExecuteAbility(ability),
                  id: ability.name,
                  children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_components.__experimentalHStack, { alignment: "left", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                    import_components.TextHighlight,
                    {
                      text: ability.label,
                      highlight: search
                    }
                  ) }) })
                },
                ability.name
              )) })
            ] })
          ] })
        }
      )
    }
  );
}

// packages/workflow/build-module/index.js
var root = document.createElement("div");
document.body.appendChild(root);
(0, import_element3.createRoot)(root).render((0, import_element3.createElement)(WorkflowMenu));
//# sourceMappingURL=index.js.map
