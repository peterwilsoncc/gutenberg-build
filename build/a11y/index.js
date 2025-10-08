"use strict";
var wp;
(wp ||= {}).a11y = (() => {
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

  // packages/a11y/build-module/index.js
  var build_module_exports = {};
  __export(build_module_exports, {
    setup: () => setup,
    speak: () => speak
  });

  // packages/dom-ready/build-module/index.js
  function domReady(callback) {
    if (typeof document === "undefined") {
      return;
    }
    if (document.readyState === "complete" || // DOMContentLoaded + Images/Styles/etc loaded, so we call directly.
    document.readyState === "interactive") {
      return void callback();
    }
    document.addEventListener("DOMContentLoaded", callback);
  }

  // packages/a11y/build-module/script/add-container.js
  function addContainer(ariaLive = "polite") {
    const container = document.createElement("div");
    container.id = `a11y-speak-${ariaLive}`;
    container.className = "a11y-speak-region";
    container.setAttribute(
      "style",
      "position:absolute;margin:-1px;padding:0;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);border:0;word-wrap:normal !important;"
    );
    container.setAttribute("aria-live", ariaLive);
    container.setAttribute("aria-relevant", "additions text");
    container.setAttribute("aria-atomic", "true");
    const { body } = document;
    if (body) {
      body.appendChild(container);
    }
    return container;
  }

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

  // packages/a11y/build-module/script/add-intro-text.js
  function addIntroText() {
    const introText = document.createElement("p");
    introText.id = "a11y-speak-intro-text";
    introText.className = "a11y-speak-intro-text";
    introText.textContent = __("Notifications");
    introText.setAttribute(
      "style",
      "position:absolute;margin:-1px;padding:0;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);border:0;word-wrap:normal !important;"
    );
    introText.setAttribute("hidden", "");
    const { body } = document;
    if (body) {
      body.appendChild(introText);
    }
    return introText;
  }

  // packages/a11y/build-module/shared/clear.js
  function clear() {
    const regions = document.getElementsByClassName("a11y-speak-region");
    const introText = document.getElementById("a11y-speak-intro-text");
    for (let i = 0; i < regions.length; i++) {
      regions[i].textContent = "";
    }
    if (introText) {
      introText.setAttribute("hidden", "hidden");
    }
  }

  // packages/a11y/build-module/shared/filter-message.js
  var previousMessage = "";
  function filterMessage(message) {
    message = message.replace(/<[^<>]+>/g, " ");
    if (previousMessage === message) {
      message += "\xA0";
    }
    previousMessage = message;
    return message;
  }

  // packages/a11y/build-module/shared/index.js
  function speak(message, ariaLive) {
    clear();
    message = filterMessage(message);
    const introText = document.getElementById("a11y-speak-intro-text");
    const containerAssertive = document.getElementById(
      "a11y-speak-assertive"
    );
    const containerPolite = document.getElementById("a11y-speak-polite");
    if (containerAssertive && ariaLive === "assertive") {
      containerAssertive.textContent = message;
    } else if (containerPolite) {
      containerPolite.textContent = message;
    }
    if (introText) {
      introText.removeAttribute("hidden");
    }
  }

  // packages/a11y/build-module/index.js
  function setup() {
    const introText = document.getElementById("a11y-speak-intro-text");
    const containerAssertive = document.getElementById(
      "a11y-speak-assertive"
    );
    const containerPolite = document.getElementById("a11y-speak-polite");
    if (introText === null) {
      addIntroText();
    }
    if (containerAssertive === null) {
      addContainer("assertive");
    }
    if (containerPolite === null) {
      addContainer("polite");
    }
  }
  domReady(setup);
  return __toCommonJS(build_module_exports);
})();
//# sourceMappingURL=index.js.map
