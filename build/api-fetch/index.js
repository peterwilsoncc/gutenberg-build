"use strict";
var wp;
(wp ||= {}).apiFetch = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // packages/api-fetch/build-module/index.js
  var build_module_exports = {};
  __export(build_module_exports, {
    default: () => src_default
  });

  // node_modules/@tannin/postfix/index.js
  var PRECEDENCE;
  var OPENERS;
  var TERMINATORS;
  var PATTERN;
  PRECEDENCE = {
    "(": 9,
    "!": 8,
    "*": 7,
    "/": 7,
    "%": 7,
    "+": 6,
    "-": 6,
    "<": 5,
    "<=": 5,
    ">": 5,
    ">=": 5,
    "==": 4,
    "!=": 4,
    "&&": 3,
    "||": 2,
    "?": 1,
    "?:": 1
  };
  OPENERS = ["(", "?"];
  TERMINATORS = {
    ")": ["("],
    ":": ["?", "?:"]
  };
  PATTERN = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
  function postfix(expression) {
    var terms = [], stack = [], match, operator, term, element;
    while (match = expression.match(PATTERN)) {
      operator = match[0];
      term = expression.substr(0, match.index).trim();
      if (term) {
        terms.push(term);
      }
      while (element = stack.pop()) {
        if (TERMINATORS[operator]) {
          if (TERMINATORS[operator][0] === element) {
            operator = TERMINATORS[operator][1] || operator;
            break;
          }
        } else if (OPENERS.indexOf(element) >= 0 || PRECEDENCE[element] < PRECEDENCE[operator]) {
          stack.push(element);
          break;
        }
        terms.push(element);
      }
      if (!TERMINATORS[operator]) {
        stack.push(operator);
      }
      expression = expression.substr(match.index + operator.length);
    }
    expression = expression.trim();
    if (expression) {
      terms.push(expression);
    }
    return terms.concat(stack.reverse());
  }

  // node_modules/@tannin/evaluate/index.js
  var OPERATORS = {
    "!": function(a) {
      return !a;
    },
    "*": function(a, b) {
      return a * b;
    },
    "/": function(a, b) {
      return a / b;
    },
    "%": function(a, b) {
      return a % b;
    },
    "+": function(a, b) {
      return a + b;
    },
    "-": function(a, b) {
      return a - b;
    },
    "<": function(a, b) {
      return a < b;
    },
    "<=": function(a, b) {
      return a <= b;
    },
    ">": function(a, b) {
      return a > b;
    },
    ">=": function(a, b) {
      return a >= b;
    },
    "==": function(a, b) {
      return a === b;
    },
    "!=": function(a, b) {
      return a !== b;
    },
    "&&": function(a, b) {
      return a && b;
    },
    "||": function(a, b) {
      return a || b;
    },
    "?:": function(a, b, c) {
      if (a) {
        throw b;
      }
      return c;
    }
  };
  function evaluate(postfix2, variables) {
    var stack = [], i, j, args, getOperatorResult, term, value;
    for (i = 0; i < postfix2.length; i++) {
      term = postfix2[i];
      getOperatorResult = OPERATORS[term];
      if (getOperatorResult) {
        j = getOperatorResult.length;
        args = Array(j);
        while (j--) {
          args[j] = stack.pop();
        }
        try {
          value = getOperatorResult.apply(null, args);
        } catch (earlyReturn) {
          return earlyReturn;
        }
      } else if (variables.hasOwnProperty(term)) {
        value = variables[term];
      } else {
        value = +term;
      }
      stack.push(value);
    }
    return stack[0];
  }

  // node_modules/@tannin/compile/index.js
  function compile(expression) {
    var terms = postfix(expression);
    return function(variables) {
      return evaluate(terms, variables);
    };
  }

  // node_modules/@tannin/plural-forms/index.js
  function pluralForms(expression) {
    var evaluate2 = compile(expression);
    return function(n) {
      return +evaluate2({ n });
    };
  }

  // node_modules/tannin/index.js
  var DEFAULT_OPTIONS = {
    contextDelimiter: "",
    onMissingKey: null
  };
  function getPluralExpression(pf) {
    var parts, i, part;
    parts = pf.split(";");
    for (i = 0; i < parts.length; i++) {
      part = parts[i].trim();
      if (part.indexOf("plural=") === 0) {
        return part.substr(7);
      }
    }
  }
  function Tannin(data, options) {
    var key;
    this.data = data;
    this.pluralForms = {};
    this.options = {};
    for (key in DEFAULT_OPTIONS) {
      this.options[key] = options !== void 0 && key in options ? options[key] : DEFAULT_OPTIONS[key];
    }
  }
  Tannin.prototype.getPluralForm = function(domain, n) {
    var getPluralForm = this.pluralForms[domain], config, plural, pf;
    if (!getPluralForm) {
      config = this.data[domain][""];
      pf = config["Plural-Forms"] || config["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
      // string property on a key to guarantee this as metadata.
      // @ts-ignore
      config.plural_forms;
      if (typeof pf !== "function") {
        plural = getPluralExpression(
          config["Plural-Forms"] || config["plural-forms"] || // Ignore reason: As known, there's no way to document the empty
          // string property on a key to guarantee this as metadata.
          // @ts-ignore
          config.plural_forms
        );
        pf = pluralForms(plural);
      }
      getPluralForm = this.pluralForms[domain] = pf;
    }
    return getPluralForm(n);
  };
  Tannin.prototype.dcnpgettext = function(domain, context, singular, plural, n) {
    var index, key, entry;
    if (n === void 0) {
      index = 0;
    } else {
      index = this.getPluralForm(domain, n);
    }
    key = singular;
    if (context) {
      key = context + this.options.contextDelimiter + singular;
    }
    entry = this.data[domain][key];
    if (entry && entry[index]) {
      return entry[index];
    }
    if (this.options.onMissingKey) {
      this.options.onMissingKey(singular, domain);
    }
    return index === 0 ? singular : plural;
  };

  // packages/i18n/build-module/create-i18n.js
  var DEFAULT_LOCALE_DATA = {
    "": {
      plural_forms(n) {
        return n === 1 ? 0 : 1;
      }
    }
  };
  var I18N_HOOK_REGEXP = /^i18n\.(n?gettext|has_translation)(_|$)/;
  var createI18n = (initialData, initialDomain, hooks) => {
    const tannin = new Tannin({});
    const listeners = /* @__PURE__ */ new Set();
    const notifyListeners = () => {
      listeners.forEach((listener) => listener());
    };
    const subscribe2 = (callback) => {
      listeners.add(callback);
      return () => listeners.delete(callback);
    };
    const getLocaleData2 = (domain = "default") => tannin.data[domain];
    const doSetLocaleData = (data, domain = "default") => {
      tannin.data[domain] = {
        ...tannin.data[domain],
        ...data
      };
      tannin.data[domain][""] = {
        ...DEFAULT_LOCALE_DATA[""],
        ...tannin.data[domain]?.[""]
      };
      delete tannin.pluralForms[domain];
    };
    const setLocaleData2 = (data, domain) => {
      doSetLocaleData(data, domain);
      notifyListeners();
    };
    const addLocaleData = (data, domain = "default") => {
      tannin.data[domain] = {
        ...tannin.data[domain],
        ...data,
        // Populate default domain configuration (supported locale date which omits
        // a plural forms expression).
        "": {
          ...DEFAULT_LOCALE_DATA[""],
          ...tannin.data[domain]?.[""],
          ...data?.[""]
        }
      };
      delete tannin.pluralForms[domain];
      notifyListeners();
    };
    const resetLocaleData2 = (data, domain) => {
      tannin.data = {};
      tannin.pluralForms = {};
      setLocaleData2(data, domain);
    };
    const dcnpgettext = (domain = "default", context, single, plural, number) => {
      if (!tannin.data[domain]) {
        doSetLocaleData(void 0, domain);
      }
      return tannin.dcnpgettext(domain, context, single, plural, number);
    };
    const getFilterDomain = (domain) => domain || "default";
    const __2 = (text, domain) => {
      let translation = dcnpgettext(domain, void 0, text);
      if (!hooks) {
        return translation;
      }
      translation = hooks.applyFilters(
        "i18n.gettext",
        translation,
        text,
        domain
      );
      return hooks.applyFilters(
        "i18n.gettext_" + getFilterDomain(domain),
        translation,
        text,
        domain
      );
    };
    const _x2 = (text, context, domain) => {
      let translation = dcnpgettext(domain, context, text);
      if (!hooks) {
        return translation;
      }
      translation = hooks.applyFilters(
        "i18n.gettext_with_context",
        translation,
        text,
        context,
        domain
      );
      return hooks.applyFilters(
        "i18n.gettext_with_context_" + getFilterDomain(domain),
        translation,
        text,
        context,
        domain
      );
    };
    const _n2 = (single, plural, number, domain) => {
      let translation = dcnpgettext(
        domain,
        void 0,
        single,
        plural,
        number
      );
      if (!hooks) {
        return translation;
      }
      translation = hooks.applyFilters(
        "i18n.ngettext",
        translation,
        single,
        plural,
        number,
        domain
      );
      return hooks.applyFilters(
        "i18n.ngettext_" + getFilterDomain(domain),
        translation,
        single,
        plural,
        number,
        domain
      );
    };
    const _nx2 = (single, plural, number, context, domain) => {
      let translation = dcnpgettext(
        domain,
        context,
        single,
        plural,
        number
      );
      if (!hooks) {
        return translation;
      }
      translation = hooks.applyFilters(
        "i18n.ngettext_with_context",
        translation,
        single,
        plural,
        number,
        context,
        domain
      );
      return hooks.applyFilters(
        "i18n.ngettext_with_context_" + getFilterDomain(domain),
        translation,
        single,
        plural,
        number,
        context,
        domain
      );
    };
    const isRTL2 = () => {
      return "rtl" === _x2("ltr", "text direction");
    };
    const hasTranslation2 = (single, context, domain) => {
      const key = context ? context + "" + single : single;
      let result = !!tannin.data?.[domain ?? "default"]?.[key];
      if (hooks) {
        result = hooks.applyFilters(
          "i18n.has_translation",
          result,
          single,
          context,
          domain
        );
        result = hooks.applyFilters(
          "i18n.has_translation_" + getFilterDomain(domain),
          result,
          single,
          context,
          domain
        );
      }
      return result;
    };
    if (initialData) {
      setLocaleData2(initialData, initialDomain);
    }
    if (hooks) {
      const onHookAddedOrRemoved = (hookName) => {
        if (I18N_HOOK_REGEXP.test(hookName)) {
          notifyListeners();
        }
      };
      hooks.addAction("hookAdded", "core/i18n", onHookAddedOrRemoved);
      hooks.addAction("hookRemoved", "core/i18n", onHookAddedOrRemoved);
    }
    return {
      getLocaleData: getLocaleData2,
      setLocaleData: setLocaleData2,
      addLocaleData,
      resetLocaleData: resetLocaleData2,
      subscribe: subscribe2,
      __: __2,
      _x: _x2,
      _n: _n2,
      _nx: _nx2,
      isRTL: isRTL2,
      hasTranslation: hasTranslation2
    };
  };

  // packages/hooks/build-module/validateNamespace.js
  function validateNamespace(namespace) {
    if ("string" !== typeof namespace || "" === namespace) {
      console.error("The namespace must be a non-empty string.");
      return false;
    }
    if (!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(namespace)) {
      console.error(
        "The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."
      );
      return false;
    }
    return true;
  }
  var validateNamespace_default = validateNamespace;

  // packages/hooks/build-module/validateHookName.js
  function validateHookName(hookName) {
    if ("string" !== typeof hookName || "" === hookName) {
      console.error("The hook name must be a non-empty string.");
      return false;
    }
    if (/^__/.test(hookName)) {
      console.error("The hook name cannot begin with `__`.");
      return false;
    }
    if (!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(hookName)) {
      console.error(
        "The hook name can only contain numbers, letters, dashes, periods and underscores."
      );
      return false;
    }
    return true;
  }
  var validateHookName_default = validateHookName;

  // packages/hooks/build-module/createAddHook.js
  function createAddHook(hooks, storeKey) {
    return function addHook(hookName, namespace, callback, priority = 10) {
      const hooksStore = hooks[storeKey];
      if (!validateHookName_default(hookName)) {
        return;
      }
      if (!validateNamespace_default(namespace)) {
        return;
      }
      if ("function" !== typeof callback) {
        console.error("The hook callback must be a function.");
        return;
      }
      if ("number" !== typeof priority) {
        console.error(
          "If specified, the hook priority must be a number."
        );
        return;
      }
      const handler = { callback, priority, namespace };
      if (hooksStore[hookName]) {
        const handlers = hooksStore[hookName].handlers;
        let i;
        for (i = handlers.length; i > 0; i--) {
          if (priority >= handlers[i - 1].priority) {
            break;
          }
        }
        if (i === handlers.length) {
          handlers[i] = handler;
        } else {
          handlers.splice(i, 0, handler);
        }
        hooksStore.__current.forEach((hookInfo) => {
          if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
            hookInfo.currentIndex++;
          }
        });
      } else {
        hooksStore[hookName] = {
          handlers: [handler],
          runs: 0
        };
      }
      if (hookName !== "hookAdded") {
        hooks.doAction(
          "hookAdded",
          hookName,
          namespace,
          callback,
          priority
        );
      }
    };
  }
  var createAddHook_default = createAddHook;

  // packages/hooks/build-module/createRemoveHook.js
  function createRemoveHook(hooks, storeKey, removeAll = false) {
    return function removeHook(hookName, namespace) {
      const hooksStore = hooks[storeKey];
      if (!validateHookName_default(hookName)) {
        return;
      }
      if (!removeAll && !validateNamespace_default(namespace)) {
        return;
      }
      if (!hooksStore[hookName]) {
        return 0;
      }
      let handlersRemoved = 0;
      if (removeAll) {
        handlersRemoved = hooksStore[hookName].handlers.length;
        hooksStore[hookName] = {
          runs: hooksStore[hookName].runs,
          handlers: []
        };
      } else {
        const handlers = hooksStore[hookName].handlers;
        for (let i = handlers.length - 1; i >= 0; i--) {
          if (handlers[i].namespace === namespace) {
            handlers.splice(i, 1);
            handlersRemoved++;
            hooksStore.__current.forEach((hookInfo) => {
              if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
                hookInfo.currentIndex--;
              }
            });
          }
        }
      }
      if (hookName !== "hookRemoved") {
        hooks.doAction("hookRemoved", hookName, namespace);
      }
      return handlersRemoved;
    };
  }
  var createRemoveHook_default = createRemoveHook;

  // packages/hooks/build-module/createHasHook.js
  function createHasHook(hooks, storeKey) {
    return function hasHook(hookName, namespace) {
      const hooksStore = hooks[storeKey];
      if ("undefined" !== typeof namespace) {
        return hookName in hooksStore && hooksStore[hookName].handlers.some(
          (hook) => hook.namespace === namespace
        );
      }
      return hookName in hooksStore;
    };
  }
  var createHasHook_default = createHasHook;

  // packages/hooks/build-module/createRunHook.js
  function createRunHook(hooks, storeKey, returnFirstArg, async) {
    return function runHook(hookName, ...args) {
      const hooksStore = hooks[storeKey];
      if (!hooksStore[hookName]) {
        hooksStore[hookName] = {
          handlers: [],
          runs: 0
        };
      }
      hooksStore[hookName].runs++;
      const handlers = hooksStore[hookName].handlers;
      if (true) {
        if ("hookAdded" !== hookName && hooksStore.all) {
          handlers.push(...hooksStore.all.handlers);
        }
      }
      if (!handlers || !handlers.length) {
        return returnFirstArg ? args[0] : void 0;
      }
      const hookInfo = {
        name: hookName,
        currentIndex: 0
      };
      async function asyncRunner() {
        try {
          hooksStore.__current.add(hookInfo);
          let result = returnFirstArg ? args[0] : void 0;
          while (hookInfo.currentIndex < handlers.length) {
            const handler = handlers[hookInfo.currentIndex];
            result = await handler.callback.apply(null, args);
            if (returnFirstArg) {
              args[0] = result;
            }
            hookInfo.currentIndex++;
          }
          return returnFirstArg ? result : void 0;
        } finally {
          hooksStore.__current.delete(hookInfo);
        }
      }
      function syncRunner() {
        try {
          hooksStore.__current.add(hookInfo);
          let result = returnFirstArg ? args[0] : void 0;
          while (hookInfo.currentIndex < handlers.length) {
            const handler = handlers[hookInfo.currentIndex];
            result = handler.callback.apply(null, args);
            if (returnFirstArg) {
              args[0] = result;
            }
            hookInfo.currentIndex++;
          }
          return returnFirstArg ? result : void 0;
        } finally {
          hooksStore.__current.delete(hookInfo);
        }
      }
      return (async ? asyncRunner : syncRunner)();
    };
  }
  var createRunHook_default = createRunHook;

  // packages/hooks/build-module/createCurrentHook.js
  function createCurrentHook(hooks, storeKey) {
    return function currentHook() {
      const hooksStore = hooks[storeKey];
      const currentArray = Array.from(hooksStore.__current);
      return currentArray.at(-1)?.name ?? null;
    };
  }
  var createCurrentHook_default = createCurrentHook;

  // packages/hooks/build-module/createDoingHook.js
  function createDoingHook(hooks, storeKey) {
    return function doingHook(hookName) {
      const hooksStore = hooks[storeKey];
      if ("undefined" === typeof hookName) {
        return hooksStore.__current.size > 0;
      }
      return Array.from(hooksStore.__current).some(
        (hook) => hook.name === hookName
      );
    };
  }
  var createDoingHook_default = createDoingHook;

  // packages/hooks/build-module/createDidHook.js
  function createDidHook(hooks, storeKey) {
    return function didHook(hookName) {
      const hooksStore = hooks[storeKey];
      if (!validateHookName_default(hookName)) {
        return;
      }
      return hooksStore[hookName] && hooksStore[hookName].runs ? hooksStore[hookName].runs : 0;
    };
  }
  var createDidHook_default = createDidHook;

  // packages/hooks/build-module/createHooks.js
  var _Hooks = class {
    actions;
    filters;
    addAction;
    addFilter;
    removeAction;
    removeFilter;
    hasAction;
    hasFilter;
    removeAllActions;
    removeAllFilters;
    doAction;
    doActionAsync;
    applyFilters;
    applyFiltersAsync;
    currentAction;
    currentFilter;
    doingAction;
    doingFilter;
    didAction;
    didFilter;
    constructor() {
      this.actions = /* @__PURE__ */ Object.create(null);
      this.actions.__current = /* @__PURE__ */ new Set();
      this.filters = /* @__PURE__ */ Object.create(null);
      this.filters.__current = /* @__PURE__ */ new Set();
      this.addAction = createAddHook_default(this, "actions");
      this.addFilter = createAddHook_default(this, "filters");
      this.removeAction = createRemoveHook_default(this, "actions");
      this.removeFilter = createRemoveHook_default(this, "filters");
      this.hasAction = createHasHook_default(this, "actions");
      this.hasFilter = createHasHook_default(this, "filters");
      this.removeAllActions = createRemoveHook_default(this, "actions", true);
      this.removeAllFilters = createRemoveHook_default(this, "filters", true);
      this.doAction = createRunHook_default(this, "actions", false, false);
      this.doActionAsync = createRunHook_default(this, "actions", false, true);
      this.applyFilters = createRunHook_default(this, "filters", true, false);
      this.applyFiltersAsync = createRunHook_default(this, "filters", true, true);
      this.currentAction = createCurrentHook_default(this, "actions");
      this.currentFilter = createCurrentHook_default(this, "filters");
      this.doingAction = createDoingHook_default(this, "actions");
      this.doingFilter = createDoingHook_default(this, "filters");
      this.didAction = createDidHook_default(this, "actions");
      this.didFilter = createDidHook_default(this, "filters");
    }
  };
  function createHooks() {
    return new _Hooks();
  }
  var createHooks_default = createHooks;

  // packages/hooks/build-module/index.js
  var defaultHooks = createHooks_default();
  var {
    addAction,
    addFilter,
    removeAction,
    removeFilter,
    hasAction,
    hasFilter,
    removeAllActions,
    removeAllFilters,
    doAction,
    doActionAsync,
    applyFilters,
    applyFiltersAsync,
    currentAction,
    currentFilter,
    doingAction,
    doingFilter,
    didAction,
    didFilter,
    actions,
    filters
  } = defaultHooks;

  // packages/i18n/build-module/default-i18n.js
  var i18n = createI18n(void 0, void 0, defaultHooks);
  var getLocaleData = i18n.getLocaleData.bind(i18n);
  var setLocaleData = i18n.setLocaleData.bind(i18n);
  var resetLocaleData = i18n.resetLocaleData.bind(i18n);
  var subscribe = i18n.subscribe.bind(i18n);
  var __ = i18n.__.bind(i18n);
  var _x = i18n._x.bind(i18n);
  var _n = i18n._n.bind(i18n);
  var _nx = i18n._nx.bind(i18n);
  var isRTL = i18n.isRTL.bind(i18n);
  var hasTranslation = i18n.hasTranslation.bind(i18n);

  // packages/api-fetch/build-module/middlewares/nonce.js
  function createNonceMiddleware(nonce) {
    const middleware = (options, next) => {
      const { headers = {} } = options;
      for (const headerName in headers) {
        if (headerName.toLowerCase() === "x-wp-nonce" && headers[headerName] === middleware.nonce) {
          return next(options);
        }
      }
      return next({
        ...options,
        headers: {
          ...headers,
          "X-WP-Nonce": middleware.nonce
        }
      });
    };
    middleware.nonce = nonce;
    return middleware;
  }
  var nonce_default = createNonceMiddleware;

  // packages/api-fetch/build-module/middlewares/namespace-endpoint.js
  var namespaceAndEndpointMiddleware = (options, next) => {
    let path = options.path;
    let namespaceTrimmed, endpointTrimmed;
    if (typeof options.namespace === "string" && typeof options.endpoint === "string") {
      namespaceTrimmed = options.namespace.replace(/^\/|\/$/g, "");
      endpointTrimmed = options.endpoint.replace(/^\//, "");
      if (endpointTrimmed) {
        path = namespaceTrimmed + "/" + endpointTrimmed;
      } else {
        path = namespaceTrimmed;
      }
    }
    delete options.namespace;
    delete options.endpoint;
    return next({
      ...options,
      path
    });
  };
  var namespace_endpoint_default = namespaceAndEndpointMiddleware;

  // packages/api-fetch/build-module/middlewares/root-url.js
  var createRootURLMiddleware = (rootURL) => (options, next) => {
    return namespace_endpoint_default(options, (optionsWithPath) => {
      let url = optionsWithPath.url;
      let path = optionsWithPath.path;
      let apiRoot;
      if (typeof path === "string") {
        apiRoot = rootURL;
        if (-1 !== rootURL.indexOf("?")) {
          path = path.replace("?", "&");
        }
        path = path.replace(/^\//, "");
        if ("string" === typeof apiRoot && -1 !== apiRoot.indexOf("?")) {
          path = path.replace("?", "&");
        }
        url = apiRoot + path;
      }
      return next({
        ...optionsWithPath,
        url
      });
    });
  };
  var root_url_default = createRootURLMiddleware;

  // packages/url/build-module/get-query-string.js
  function getQueryString(url) {
    let query;
    try {
      query = new URL(url, "http://example.com").search.substring(1);
    } catch (error) {
    }
    if (query) {
      return query;
    }
  }

  // packages/url/build-module/build-query-string.js
  function buildQueryString(data) {
    let string = "";
    const stack = Object.entries(data);
    let pair;
    while (pair = stack.shift()) {
      let [key, value] = pair;
      const hasNestedData = Array.isArray(value) || value && value.constructor === Object;
      if (hasNestedData) {
        const valuePairs = Object.entries(value).reverse();
        for (const [member, memberValue] of valuePairs) {
          stack.unshift([`${key}[${member}]`, memberValue]);
        }
      } else if (value !== void 0) {
        if (value === null) {
          value = "";
        }
        string += "&" + [key, String(value)].map(encodeURIComponent).join("=");
      }
    }
    return string.substr(1);
  }

  // packages/url/build-module/get-fragment.js
  function getFragment(url) {
    const matches = /^\S+?(#[^\s\?]*)/.exec(url);
    if (matches) {
      return matches[1];
    }
  }

  // packages/url/build-module/safe-decode-uri-component.js
  function safeDecodeURIComponent(uriComponent) {
    try {
      return decodeURIComponent(uriComponent);
    } catch (uriComponentError) {
      return uriComponent;
    }
  }

  // packages/url/build-module/get-query-args.js
  function setPath(object, path, value) {
    const length = path.length;
    const lastIndex = length - 1;
    for (let i = 0; i < length; i++) {
      let key = path[i];
      if (!key && Array.isArray(object)) {
        key = object.length.toString();
      }
      key = ["__proto__", "constructor", "prototype"].includes(key) ? key.toUpperCase() : key;
      const isNextKeyArrayIndex = !isNaN(Number(path[i + 1]));
      object[key] = i === lastIndex ? (
        // If at end of path, assign the intended value.
        value
      ) : (
        // Otherwise, advance to the next object in the path, creating
        // it if it does not yet exist.
        object[key] || (isNextKeyArrayIndex ? [] : {})
      );
      if (Array.isArray(object[key]) && !isNextKeyArrayIndex) {
        object[key] = { ...object[key] };
      }
      object = object[key];
    }
  }
  function getQueryArgs(url) {
    return (getQueryString(url) || "").replace(/\+/g, "%20").split("&").reduce((accumulator, keyValue) => {
      const [key, value = ""] = keyValue.split("=").filter(Boolean).map(safeDecodeURIComponent);
      if (key) {
        const segments = key.replace(/\]/g, "").split("[");
        setPath(accumulator, segments, value);
      }
      return accumulator;
    }, /* @__PURE__ */ Object.create(null));
  }

  // packages/url/build-module/add-query-args.js
  function addQueryArgs(url = "", args) {
    if (!args || !Object.keys(args).length) {
      return url;
    }
    const fragment = getFragment(url) || "";
    let baseUrl = url.replace(fragment, "");
    const queryStringIndex = url.indexOf("?");
    if (queryStringIndex !== -1) {
      args = Object.assign(getQueryArgs(url), args);
      baseUrl = baseUrl.substr(0, queryStringIndex);
    }
    return baseUrl + "?" + buildQueryString(args) + fragment;
  }

  // packages/url/build-module/get-query-arg.js
  function getQueryArg(url, arg) {
    return getQueryArgs(url)[arg];
  }

  // packages/url/build-module/has-query-arg.js
  function hasQueryArg(url, arg) {
    return getQueryArg(url, arg) !== void 0;
  }

  // packages/url/build-module/remove-query-args.js
  function removeQueryArgs(url, ...args) {
    const fragment = url.replace(/^[^#]*/, "");
    url = url.replace(/#.*/, "");
    const queryStringIndex = url.indexOf("?");
    if (queryStringIndex === -1) {
      return url + fragment;
    }
    const query = getQueryArgs(url);
    const baseURL = url.substr(0, queryStringIndex);
    args.forEach((arg) => delete query[arg]);
    const queryString = buildQueryString(query);
    const updatedUrl = queryString ? baseURL + "?" + queryString : baseURL;
    return updatedUrl + fragment;
  }

  // packages/url/build-module/normalize-path.js
  function normalizePath(path) {
    const split = path.split("?");
    const query = split[1];
    const base = split[0];
    if (!query) {
      return base;
    }
    return base + "?" + query.split("&").map((entry) => entry.split("=")).map((pair) => pair.map(decodeURIComponent)).sort((a, b) => a[0].localeCompare(b[0])).map((pair) => pair.map(encodeURIComponent)).map((pair) => pair.join("=")).join("&");
  }

  // packages/api-fetch/build-module/middlewares/preloading.js
  function createPreloadingMiddleware(preloadedData) {
    const cache = Object.fromEntries(
      Object.entries(preloadedData).map(([path, data]) => [
        normalizePath(path),
        data
      ])
    );
    return (options, next) => {
      const { parse = true } = options;
      let rawPath = options.path;
      if (!rawPath && options.url) {
        const { rest_route: pathFromQuery, ...queryArgs } = getQueryArgs(
          options.url
        );
        if (typeof pathFromQuery === "string") {
          rawPath = addQueryArgs(pathFromQuery, queryArgs);
        }
      }
      if (typeof rawPath !== "string") {
        return next(options);
      }
      const method = options.method || "GET";
      const path = normalizePath(rawPath);
      if ("GET" === method && cache[path]) {
        const cacheData = cache[path];
        delete cache[path];
        return prepareResponse(cacheData, !!parse);
      } else if ("OPTIONS" === method && cache[method] && cache[method][path]) {
        const cacheData = cache[method][path];
        delete cache[method][path];
        return prepareResponse(cacheData, !!parse);
      }
      return next(options);
    };
  }
  function prepareResponse(responseData, parse) {
    if (parse) {
      return Promise.resolve(responseData.body);
    }
    try {
      return Promise.resolve(
        new window.Response(JSON.stringify(responseData.body), {
          status: 200,
          statusText: "OK",
          headers: responseData.headers
        })
      );
    } catch {
      Object.entries(
        responseData.headers
      ).forEach(([key, value]) => {
        if (key.toLowerCase() === "link") {
          responseData.headers[key] = value.replace(
            /<([^>]+)>/,
            (_, url) => `<${encodeURI(url)}>`
          );
        }
      });
      return Promise.resolve(
        parse ? responseData.body : new window.Response(JSON.stringify(responseData.body), {
          status: 200,
          statusText: "OK",
          headers: responseData.headers
        })
      );
    }
  }
  var preloading_default = createPreloadingMiddleware;

  // packages/api-fetch/build-module/middlewares/fetch-all-middleware.js
  var modifyQuery = ({ path, url, ...options }, queryArgs) => ({
    ...options,
    url: url && addQueryArgs(url, queryArgs),
    path: path && addQueryArgs(path, queryArgs)
  });
  var parseResponse = (response) => response.json ? response.json() : Promise.reject(response);
  var parseLinkHeader = (linkHeader) => {
    if (!linkHeader) {
      return {};
    }
    const match = linkHeader.match(/<([^>]+)>; rel="next"/);
    return match ? {
      next: match[1]
    } : {};
  };
  var getNextPageUrl = (response) => {
    const { next } = parseLinkHeader(response.headers.get("link"));
    return next;
  };
  var requestContainsUnboundedQuery = (options) => {
    const pathIsUnbounded = !!options.path && options.path.indexOf("per_page=-1") !== -1;
    const urlIsUnbounded = !!options.url && options.url.indexOf("per_page=-1") !== -1;
    return pathIsUnbounded || urlIsUnbounded;
  };
  var fetchAllMiddleware = async (options, next) => {
    if (options.parse === false) {
      return next(options);
    }
    if (!requestContainsUnboundedQuery(options)) {
      return next(options);
    }
    const response = await src_default({
      ...modifyQuery(options, {
        per_page: 100
      }),
      // Ensure headers are returned for page 1.
      parse: false
    });
    const results = await parseResponse(response);
    if (!Array.isArray(results)) {
      return results;
    }
    let nextPage = getNextPageUrl(response);
    if (!nextPage) {
      return results;
    }
    let mergedResults = [].concat(results);
    while (nextPage) {
      const nextResponse = await src_default({
        ...options,
        // Ensure the URL for the next page is used instead of any provided path.
        path: void 0,
        url: nextPage,
        // Ensure we still get headers so we can identify the next page.
        parse: false
      });
      const nextResults = await parseResponse(nextResponse);
      mergedResults = mergedResults.concat(nextResults);
      nextPage = getNextPageUrl(nextResponse);
    }
    return mergedResults;
  };
  var fetch_all_middleware_default = fetchAllMiddleware;

  // packages/api-fetch/build-module/middlewares/http-v1.js
  var OVERRIDE_METHODS = /* @__PURE__ */ new Set(["PATCH", "PUT", "DELETE"]);
  var DEFAULT_METHOD = "GET";
  var httpV1Middleware = (options, next) => {
    const { method = DEFAULT_METHOD } = options;
    if (OVERRIDE_METHODS.has(method.toUpperCase())) {
      options = {
        ...options,
        headers: {
          ...options.headers,
          "X-HTTP-Method-Override": method,
          "Content-Type": "application/json"
        },
        method: "POST"
      };
    }
    return next(options);
  };
  var http_v1_default = httpV1Middleware;

  // packages/api-fetch/build-module/middlewares/user-locale.js
  var userLocaleMiddleware = (options, next) => {
    if (typeof options.url === "string" && !hasQueryArg(options.url, "_locale")) {
      options.url = addQueryArgs(options.url, { _locale: "user" });
    }
    if (typeof options.path === "string" && !hasQueryArg(options.path, "_locale")) {
      options.path = addQueryArgs(options.path, { _locale: "user" });
    }
    return next(options);
  };
  var user_locale_default = userLocaleMiddleware;

  // packages/api-fetch/build-module/utils/response.js
  async function parseJsonAndNormalizeError(response) {
    try {
      return await response.json();
    } catch {
      throw {
        code: "invalid_json",
        message: __("The response is not a valid JSON response.")
      };
    }
  }
  async function parseResponseAndNormalizeError(response, shouldParseResponse = true) {
    if (!shouldParseResponse) {
      return response;
    }
    if (response.status === 204) {
      return null;
    }
    return await parseJsonAndNormalizeError(response);
  }
  async function parseAndThrowError(response, shouldParseResponse = true) {
    if (!shouldParseResponse) {
      throw response;
    }
    throw await parseJsonAndNormalizeError(response);
  }

  // packages/api-fetch/build-module/middlewares/media-upload.js
  function isMediaUploadRequest(options) {
    const isCreateMethod = !!options.method && options.method === "POST";
    const isMediaEndpoint = !!options.path && options.path.indexOf("/wp/v2/media") !== -1 || !!options.url && options.url.indexOf("/wp/v2/media") !== -1;
    return isMediaEndpoint && isCreateMethod;
  }
  var mediaUploadMiddleware = (options, next) => {
    if (!isMediaUploadRequest(options)) {
      return next(options);
    }
    let retries = 0;
    const maxRetries = 5;
    const postProcess = (attachmentId) => {
      retries++;
      return next({
        path: `/wp/v2/media/${attachmentId}/post-process`,
        method: "POST",
        data: { action: "create-image-subsizes" },
        parse: false
      }).catch(() => {
        if (retries < maxRetries) {
          return postProcess(attachmentId);
        }
        next({
          path: `/wp/v2/media/${attachmentId}?force=true`,
          method: "DELETE"
        });
        return Promise.reject();
      });
    };
    return next({ ...options, parse: false }).catch((response) => {
      if (!(response instanceof globalThis.Response)) {
        return Promise.reject(response);
      }
      const attachmentId = response.headers.get(
        "x-wp-upload-attachment-id"
      );
      if (response.status >= 500 && response.status < 600 && attachmentId) {
        return postProcess(attachmentId).catch(() => {
          if (options.parse !== false) {
            return Promise.reject({
              code: "post_process",
              message: __(
                "Media upload failed. If this is a photo or a large image, please scale it down and try again."
              )
            });
          }
          return Promise.reject(response);
        });
      }
      return parseAndThrowError(response, options.parse);
    }).then(
      (response) => parseResponseAndNormalizeError(response, options.parse)
    );
  };
  var media_upload_default = mediaUploadMiddleware;

  // packages/api-fetch/build-module/middlewares/theme-preview.js
  var createThemePreviewMiddleware = (themePath) => (options, next) => {
    if (typeof options.url === "string") {
      const wpThemePreview = getQueryArg(
        options.url,
        "wp_theme_preview"
      );
      if (wpThemePreview === void 0) {
        options.url = addQueryArgs(options.url, {
          wp_theme_preview: themePath
        });
      } else if (wpThemePreview === "") {
        options.url = removeQueryArgs(
          options.url,
          "wp_theme_preview"
        );
      }
    }
    if (typeof options.path === "string") {
      const wpThemePreview = getQueryArg(
        options.path,
        "wp_theme_preview"
      );
      if (wpThemePreview === void 0) {
        options.path = addQueryArgs(options.path, {
          wp_theme_preview: themePath
        });
      } else if (wpThemePreview === "") {
        options.path = removeQueryArgs(
          options.path,
          "wp_theme_preview"
        );
      }
    }
    return next(options);
  };
  var theme_preview_default = createThemePreviewMiddleware;

  // packages/api-fetch/build-module/index.js
  var DEFAULT_HEADERS = {
    // The backend uses the Accept header as a condition for considering an
    // incoming request as a REST request.
    //
    // See: https://core.trac.wordpress.org/ticket/44534
    Accept: "application/json, */*;q=0.1"
  };
  var DEFAULT_OPTIONS2 = {
    credentials: "include"
  };
  var middlewares = [
    user_locale_default,
    namespace_endpoint_default,
    http_v1_default,
    fetch_all_middleware_default
  ];
  function registerMiddleware(middleware) {
    middlewares.unshift(middleware);
  }
  var defaultFetchHandler = (nextOptions) => {
    const { url, path, data, parse = true, ...remainingOptions } = nextOptions;
    let { body, headers } = nextOptions;
    headers = { ...DEFAULT_HEADERS, ...headers };
    if (data) {
      body = JSON.stringify(data);
      headers["Content-Type"] = "application/json";
    }
    const responsePromise = globalThis.fetch(
      // Fall back to explicitly passing `window.location` which is the behavior if `undefined` is passed.
      url || path || window.location.href,
      {
        ...DEFAULT_OPTIONS2,
        ...remainingOptions,
        body,
        headers
      }
    );
    return responsePromise.then(
      (response) => {
        if (!response.ok) {
          return parseAndThrowError(response, parse);
        }
        return parseResponseAndNormalizeError(response, parse);
      },
      (err) => {
        if (err && err.name === "AbortError") {
          throw err;
        }
        if (!globalThis.navigator.onLine) {
          throw {
            code: "offline_error",
            message: __(
              "Unable to connect. Please check your Internet connection."
            )
          };
        }
        throw {
          code: "fetch_error",
          message: __(
            "Could not get a valid response from the server."
          )
        };
      }
    );
  };
  var fetchHandler = defaultFetchHandler;
  function setFetchHandler(newFetchHandler) {
    fetchHandler = newFetchHandler;
  }
  var apiFetch = (options) => {
    const enhancedHandler = middlewares.reduceRight(
      (next, middleware) => {
        return (workingOptions) => middleware(workingOptions, next);
      },
      fetchHandler
    );
    return enhancedHandler(options).catch((error) => {
      if (error.code !== "rest_cookie_invalid_nonce") {
        return Promise.reject(error);
      }
      return globalThis.fetch(apiFetch.nonceEndpoint).then((response) => {
        if (!response.ok) {
          return Promise.reject(error);
        }
        return response.text();
      }).then((text) => {
        apiFetch.nonceMiddleware.nonce = text;
        return apiFetch(options);
      });
    });
  };
  apiFetch.use = registerMiddleware;
  apiFetch.setFetchHandler = setFetchHandler;
  apiFetch.createNonceMiddleware = nonce_default;
  apiFetch.createPreloadingMiddleware = preloading_default;
  apiFetch.createRootURLMiddleware = root_url_default;
  apiFetch.fetchAllMiddleware = fetch_all_middleware_default;
  apiFetch.mediaUploadMiddleware = media_upload_default;
  apiFetch.createThemePreviewMiddleware = theme_preview_default;
  var src_default = apiFetch;
  return __toCommonJS(build_module_exports);
})();
if (typeof wp.apiFetch === 'object' && wp.apiFetch.default) { wp.apiFetch = wp.apiFetch.default; }
//# sourceMappingURL=index.js.map
