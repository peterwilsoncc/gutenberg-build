// routes/post/node_modules/@tanstack/router-core/dist/esm/redirect.js
function redirect(opts) {
  opts.isRedirect = true;
  opts.statusCode = opts.statusCode || opts.code || 307;
  opts.headers = opts.headers || {};
  if (!opts.reloadDocument) {
    opts.reloadDocument = false;
    try {
      new URL(`${opts.href}`);
      opts.reloadDocument = true;
    } catch {
    }
  }
  if (opts.throw) {
    throw opts;
  }
  return opts;
}

// routes/post/route.ts
var route = {
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/types/$type/list/$slug",
      params: {
        type: params.type,
        slug: "all"
      }
    });
  }
};
export {
  route
};
