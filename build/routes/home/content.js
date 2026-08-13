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

// package-external:@wordpress/i18n
var require_i18n = __commonJS({
  "package-external:@wordpress/i18n"(exports, module) {
    module.exports = window.wp.i18n;
  }
});

// package-external:@wordpress/data
var require_data = __commonJS({
  "package-external:@wordpress/data"(exports, module) {
    module.exports = window.wp.data;
  }
});

// package-external:@wordpress/core-data
var require_core_data = __commonJS({
  "package-external:@wordpress/core-data"(exports, module) {
    module.exports = window.wp.coreData;
  }
});

// package-external:@wordpress/dom
var require_dom = __commonJS({
  "package-external:@wordpress/dom"(exports, module) {
    module.exports = window.wp.dom;
  }
});

// package-external:@wordpress/url
var require_url = __commonJS({
  "package-external:@wordpress/url"(exports, module) {
    module.exports = window.wp.url;
  }
});

// routes/home/canvas.tsx
var import_i18n = __toESM(require_i18n());
var import_data = __toESM(require_data());
var import_core_data = __toESM(require_core_data());
var import_dom = __toESM(require_dom());
var import_url = __toESM(require_url());
function SitePreview() {
  const siteUrl = (0, import_data.useSelect)((select) => {
    const siteData = select(import_core_data.store).getEntityRecord(
      "root",
      "__unstableBase"
    );
    return siteData?.home;
  }, []);
  if (typeof siteUrl !== "string" || !siteUrl) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(
    "iframe",
    {
      src: (0, import_url.addQueryArgs)(siteUrl, {
        // Parameter for hiding the admin bar.
        wp_site_preview: 1
      }),
      title: (0, import_i18n.__)("Site Preview"),
      style: {
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff"
      },
      onLoad: (event) => {
        const iframeDocument = event.target.contentDocument;
        if (!iframeDocument) {
          return;
        }
        import_dom.focus.focusable.find(iframeDocument.documentElement).forEach((element) => {
          element.style.pointerEvents = "none";
          element.tabIndex = -1;
          element.setAttribute("aria-hidden", "true");
        });
      }
    }
  );
}
var canvas = SitePreview;
export {
  canvas
};
