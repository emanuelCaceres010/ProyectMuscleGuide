// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fm8Gy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _router = require("./router");
function main() {
    const root = document.querySelector(".root");
    (0, _router.initRouter)(root);
}
main();

},{"./router":"4QFWt"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _pageSignUp = require("./pages/pageSignUp");
var _pageMain = require("./pages/pageMain");
var _pageRutinas = require("./pages/pageRutinas");
var _pageLogin = require("./pages/pageLogin");
var _pageMonitor = require("./pages/pageMonitor");
const routes = [
    {
        path: /\/signup/,
        component: (0, _pageSignUp.initPageSignUp)
    },
    {
        path: /\/main/,
        component: (0, _pageMain.initPageMain)
    },
    {
        path: /\/rutinas/,
        component: (0, _pageRutinas.initPageRutinas)
    },
    {
        path: /\/login/,
        component: (0, _pageLogin.initPageLogin)
    },
    {
        path: /\/muscle-monitor/,
        component: (0, _pageMonitor.initPageMonitor)
    }
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("el handleRoute recibi\xf3 una nueva ruta:" + route);
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
        //container.appendChild(el as any);
        }
    }
    handleRoute(location.pathname);
}

},{"./pages/pageSignUp":"cbIFk","./pages/pageMain":"5PZ0G","./pages/pageRutinas":"1GJn5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/pageLogin":"74YDL","./pages/pageMonitor":"7JMhK"}],"cbIFk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageSignUp", ()=>initPageSignUp);
var _state = require("../../state");
function initPageSignUp(params) {
    function addStyleSheet(href) {
        const existingLinks = document.head.querySelectorAll('link[rel="stylesheet"]');
        existingLinks.forEach((link)=>{
            link.parentNode.removeChild(link);
        });
        const newLink = document.createElement("link");
        newLink.rel = "stylesheet";
        newLink.href = href;
        document.head.appendChild(newLink);
    }
    addStyleSheet("index.e6c466dd.css");
    const container = document.querySelector(".root");
    container.innerHTML = `
    <div class="container-principal">
        <header class="header">
            <div class="contenedor-logo">
                <div class="img-logo"></div>
            </div>
            <div class="contenedor-menu">
                <button class="boton-menu"></button>
            </div>
        </header>
        <section class="inicio">
            <form class="contenedor-login">
                <div class="contenedor-saludo">
                    <div class="estrellas-1"></div>
                    Bienvenidx
                    <div class="estrellas-2" ></div>
                </div>
                <div class="contenedor-indicaciones">Por favor, crea tu usuario para comenzar.</div>
                <div class="contenedor-email">Email</div>  
                <div class="contenedor-input-email">
                    <input name="input-email" type="text" class="input-email">
                </div>
                <div class="contenedor-nombre">Nombre de usuario</div>
                <div class="contenedor-input-nombre-de-usuario">
                    <input name="input-nombre" type="text" class="input-nombre-de-usuario">
                </div>
                <div class="contenedor-contrase\xf1a">Contrase\xf1a</div>  
                <div class="contenedor-input-contase\xf1a">
                    <input name="input-contrase\xf1a" type="password" class="input-contrase\xf1a">
                </div>
                <div class="contenedor-boton-crear">
                    <button class="crear">Crear</button>
                </div>
            </form>
        </section>
        <div class="contenedor-pregunta-login">
            <div class="contenedor-secundario-login">   
                \xbfYa tienes una cuenta?
                <button class="boton-login">Haz click aqu\xed</button>
            </div>    
        </div>
    </div>
    `;
    const form = container.querySelector(".contenedor-login");
    form?.addEventListener("submit", async (e)=>{
        e.preventDefault();
        const inputNombre = form.querySelector(".input-nombre-de-usuario");
        const inputPassword = form.querySelector(".input-contrase\xf1a");
        const inputEmail = form.querySelector(".input-email");
        try {
            await (0, _state.state).crearUsuarios(inputEmail.value, inputNombre.value, inputPassword.value);
            console.log((0, _state.state).data.usuarios);
            params.goTo("/main");
        } catch (error) {
            console.error("Error al iniciar sesi\xf3n:", error);
        }
    });
    const botonLogin = document.querySelector(".boton-login");
    botonLogin?.addEventListener("click", (e)=>{
        e.preventDefault();
        params.goTo("/login");
    });
    return container;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "User", ()=>User);
parcelHelpers.export(exports, "state", ()=>state);
class User {
    constructor(nombre, password){
        this.nombre = nombre;
        this.password = password;
    }
}
const state = {
    data: {
        usuarios: []
    },
    listeners: [],
    init () {
        const localData = localStorage.getItem("saved-state");
        this.setState(JSON.parse(localData));
    },
    getState () {
        return this.data;
    },
    getUser () {
        const data = this.getState();
        return data;
    },
    crearUsuarios (email, nombre, password) {
        const cs = this.getState();
        cs.usuarios.push({
            nombre: nombre,
            password: password
        });
        this.setState(cs);
        const dataToPost = {
            email: email,
            nombre: nombre,
            password: password
        };
        return fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToPost)
        }).then((response)=>response.json()).then((data)=>{
            console.log(data);
            localStorage.setItem("saved-id", JSON.stringify(data.id));
            localStorage.setItem("saved-state", JSON.stringify(data));
        }).catch((error)=>console.error("Error:", error));
    },
    logIn (email, password) {
        return fetch(`http://localhost:3000/users?email=${email}&password=${password}`).then((response)=>{
            if (response.ok) return response.json();
            else throw new Error("Error al obtener los datos del usuario");
        }).then((data)=>{
            // Guardar los datos del usuario en el estado y en el localStorage
            this.setState(data);
            localStorage.setItem("saved-id", JSON.stringify(data.id));
            localStorage.setItem("saved-state", JSON.stringify(data));
            return data;
        }).catch((error)=>{
            console.error("Error:", error);
            throw error; // Re-lanzar el error para que pueda ser manejado externamente
        });
    },
    async getDate () {
        try {
            await state.setDate();
            let userId = localStorage.getItem("saved-id");
            userId = userId.replace(/^"|"$/g, "");
            const response = await fetch("http://localhost:3000/users/" + userId + "/dates");
            if (!response.ok) throw new Error("Failed to fetch date from user's dates array");
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            // Maneja cualquier error ocurrido durante las llamadas a los endpoints
            console.error("Error:", error);
            throw error; // Lanza el error para que pueda ser manejado externamente
        }
    },
    async setDate () {
        let userId = localStorage.getItem("saved-id");
        userId = userId.replace(/^"|"$/g, "");
        try {
            const response = await fetch(`http://localhost:3000/users/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) throw new Error("Failed to fetch date from user's dates array");
            // Espera a que se complete la solicitud y devuelve los datos
            return response.json();
        } catch (error) {
            // Maneja cualquier error ocurrido durante las llamadas a los endpoints
            console.error("Error:", error);
            throw error; // Lanza el error para que pueda ser manejado externamente
        }
    },
    getExcercises () {
        return fetch(`http://localhost:3000/ejercicios/hQTmFcZCqFBBkrvyvERG`).then((response)=>{
            if (response.ok) return response.json();
            else throw new Error("Error al obtener los datos");
        }).then((data)=>{
            // Guardar los datos del usuario en el estado y en el localStorage
            localStorage.setItem("saved-excercises", JSON.stringify(data));
            return data;
        }).catch((error)=>{
            console.error("Error:", error);
            throw error; // Re-lanzar el error para que pueda ser manejado externamente
        });
    },
    async guardarDatosEnBD () {
        let userId = localStorage.getItem("saved-id");
        userId = userId.replace(/^"|"$/g, "");
        const data = localStorage.getItem("ejercicios-hechos");
        try {
            const response = await fetch("http://localhost:3000/users/" + userId + "/dates", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: data
            });
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Error al agregar ejercicio: ${errorMessage}`);
            }
            const responseData = await response.json();
            console.log(responseData.message);
        } catch (error) {
            console.error("Error al realizar la petici\xf3n:", error);
        }
    },
    addTasks (id, title) {
        const currentState = state.getState();
        currentState.tasks.push({
            id,
            title,
            completed: false
        });
        this.setState(currentState);
    },
    changeItemState (id, value) {
        const currentState = state.getState();
        currentState.tasks.find((t)=>t.id == id).completed = value;
        this.setState(currentState);
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb(newState);
        localStorage.setItem("saved-state", JSON.stringify(newState));
    },
    suscribe (callback) {
        this.listeners.push(callback);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5PZ0G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageMain", ()=>initPageMain);
var _state = require("../../state");
function initPageMain(params) {
    //const data=state.getState();
    //const Nombre=data.usuarios[0].name;
    const data = JSON.parse(localStorage.getItem("saved-state"));
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const nombreDeUsuario = capitalizeFirstLetter(data.userData.nombre);
    console.log(nombreDeUsuario);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "index.da4dfa51.css";
    document.head.appendChild(link);
    const container = document.querySelector(".root");
    container.innerHTML = `
    <section class="main">
        <header class="header">
            <div class="contenedor-logo">
                <div class="img-logo"></div>
            </div>
            <div class="contenedor-menu">
                <button class="boton-menu"></button>
            </div>
        </header>
        <div class="main-content">
            <div class="contenedor-saludo-inicial">Hola ${nombreDeUsuario} \u{1F590}\u{FE0F}</div>
            <div class="contenedor-primario-indicaciones">
                <div class="contenedor-indicaciones">Puedes empezar a crear tu rutina haciendo click en el bot\xf3n aqu\xed abajo</div>
            </div>
            <div class="contenedor-boton">
                <button class="boton">Crear rutina</button>
            </div>
        </div>
    </section>
    `;
    //console.log(Nombre);
    const buttonCrearRutina = container.querySelector(".boton");
    buttonCrearRutina?.addEventListener("click", (e)=>{
        e.preventDefault();
        (0, _state.state).setDate();
        (0, _state.state).getExcercises();
        params.goTo("/rutinas");
    });
    return container;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju"}],"1GJn5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageRutinas", ()=>initPageRutinas);
var _state = require("../../state");
var _pageMonitor = require("../pageMonitor");
var _muscleDamageChanger = require("./components/muscleDamageChanger");
var _showTime = require("./components/showTime");
async function initPageRutinas(params) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "index.da4dfa51.css";
    document.head.appendChild(link);
    async function renderMainPage() {
        try {
            const container = document.querySelector(".root");
            container.innerHTML = `
                <section class="main">
                    <header class="header">
                        <div class="contenedor-logo">
                            <div class="img-logo"></div>
                        </div>
                        <div class="contenedor-menu">
                            <button class="boton-menu"></button>
                        </div>
                    </header>
                    <section class="main-data">
                        <div class="contenedor-fecha">
                            <div class="fecha"></div>
                        </div>
                        <div class="contenedor-buscador">
                            <div class="contenedor-primario">
                                <div class="contenedor-secundario">
                                    <div class="label-buscador"></div>
                                    <input type="search" class="input-buscador" placeholder="Buscar..."/>
                                </div>   
                            </div>  
                            <div class="searchResults">
                            
                            </div>  
                        </div>
                        <div class="contenedor-ejercicios-main"></div>
                        <div class="contenedor-agregar-ejercicio-indicaciones">
                            <div class="indicaciones-agregar-ejercicio">Aqui puedes agregar tus ejercicios del d\xeda</div>
                        </div>
                        
                        
                    </section>
                    <div class="separador-de-base"></div>
                    <div class="contenedor-botones">
                        <button class="boton-home"></button>
                        <button class="boton-estadisticas"></button>
                        <button class="boton-tiempo-recuperacion"></button>
                    </div>
                    <section class="main-data-monitor"></section>
                </section>
            `;
            if (sessionStorage.getItem("saved-date")) {
                const fecha = sessionStorage.getItem("saved-date");
                const dateElement = document.querySelector(".fecha");
                dateElement.innerHTML = fecha;
            //console.log("tengo fecha");
            } else {
                const fecha = await (0, _state.state).getDate();
                const fechaTipada = fecha.lastDate.charAt(0).toUpperCase() + fecha.lastDate.slice(1);
                sessionStorage.setItem("saved-date", fechaTipada);
                //console.log("se guardó la fecha");
                const dateElement = document.querySelector(".fecha");
                dateElement.innerHTML = fechaTipada;
            }
        } catch (error) {
            console.error("Error al renderizar la p\xe1gina principal:", error);
        }
    }
    // Llama a la función para renderizar la página principal
    await renderMainPage();
    async function setupSearch() {
        const searchInput = document.querySelector(".input-buscador");
        const searchResults = document.querySelector(".searchResults");
        searchInput.addEventListener("input", (e)=>{
            const res = e.target.value.toLowerCase(); // Obtener el valor del input en minúsculas
            console.log(res);
            searchResults.innerHTML = ""; // Limpiar los resultados anteriores
            // Verificar si la búsqueda está vacía
            if (res.trim() === "") return; // Si la búsqueda está vacía, salir de la función sin mostrar resultados
            // Realizar la búsqueda y mostrar los resultados
            const results = Search(res);
            const imgs = [
                {
                    id: 26,
                    path: "press-banca.svg"
                },
                {
                    id: 27,
                    path: "none"
                },
                {
                    id: 28,
                    path: "none"
                },
                {
                    id: 29,
                    path: "none"
                },
                {
                    id: 30,
                    path: "none"
                },
                {
                    id: 31,
                    path: "none"
                },
                {
                    id: 32,
                    path: "none"
                }
            ];
            results.forEach((result)=>{
                const resultButton = document.createElement("div"); // Crear un elemento de botón
                resultButton.innerHTML = `
                    <div class="result-image">
                        <div class="excercise-image"></div>
                    </div>
                    <div class="result-data">
                        <div class="result-title">${result.nombre}</div>
                        <div class="result-description">m\xfasculos que afecta</div>
                    </div>
                `;
                let imgEl = resultButton.firstChild.nextElementSibling.firstChild.nextSibling;
                for (const img of imgs)if (img.id == result.id) imgEl.style.backgroundImage = `url(${img.path})`;
                resultButton.classList.add("result"); // Agregar la clase 'result' al botón
                searchResults.appendChild(resultButton); // Agregar el botón al contenedor de resultados
                const containerIndicaciones = document.querySelector(".contenedor-agregar-ejercicio-indicaciones");
                const mainTextEl = document.querySelector(".indicaciones-agregar-ejercicio");
                const mainExcercises = document.querySelector(".contenedor-ejercicios-main");
                // Agregar un event listener al botón
                resultButton.addEventListener("click", (e)=>{
                    e.stopPropagation(); // Evitar la propagación del evento al contenedor principal para que no colapse el buscador
                    // Aquí puedes ejecutar la lógica deseada cuando se haga clic en el botón
                    console.log(`Se hizo clic en el ejercicio: ${result}`);
                    containerIndicaciones.style.display = "none";
                    mainExcercises.style.display = "flex";
                    const newExcerciseContainer = document.createElement("div");
                    newExcerciseContainer.classList.add("ejercicios-main-container");
                    const newExcercise = document.createElement("button");
                    newExcercise.classList.add("ejercicios-main");
                    newExcercise.innerHTML = result.nombre;
                    newExcerciseContainer.appendChild(newExcercise);
                    mainExcercises.appendChild(newExcerciseContainer);
                    newExcercise.addEventListener("click", ()=>{
                        const exerciseExpandable = document.createElement("div");
                        const series = [
                            "1ra Serie",
                            "2da Serie",
                            "3ra Serie",
                            "4ta Serie",
                            "5ta Serie",
                            "6ta Serie",
                            "7ma Serie",
                            "8va Serie"
                        ];
                        exerciseExpandable.classList.add("ejercicio-expandable");
                        exerciseExpandable.innerHTML = `
                            <div class="contenedor-serie">${series[0]}</div>
                            <div class="contenedor-datos-de-serie">
                                <div class="contenedor-input-repeticiones">
                                    <div class="repeticiones-texto">Repeticiones</div>
                                    <input type="number" class="input-repeticiones" placeholder="Repeticiones"/>
                                </div>
                                <div class="contenedor-input-peso">
                                    <div class="peso-texto">Peso</div>
                                    <input type="number" class="input-peso" placeholder="Peso"/>
                                </div>
                            </div>
                            <div class="contenedor-boton-siguiente-serie">
                                <button class="boton-siguiente-serie">Siguiente serie</button>
                            </div>
                            <div class="contenedor-boton-ejercicio-terminado">
                                <button class="boton-ejercicio-terminado">Terminar ejercicio</button>
                            </div>
                        `;
                        if (!newExcerciseContainer.children[1]) newExcerciseContainer.appendChild(exerciseExpandable);
                        function cambiarSerie(series) {
                            let index = 1;
                            return function() {
                                if (index < series.length) return series[index++];
                                else return null; // Si ya se han devuelto todos los elementos del array
                            };
                        }
                        //guardar las repeticiones y pesos en el localStorage
                        const nombreDelEjercicio = result;
                        const numeroDeSerie = newExcerciseContainer.querySelector(".contenedor-serie")?.textContent;
                        const inputRepes = newExcerciseContainer.querySelector(".input-repeticiones");
                        const inputPeso = newExcerciseContainer.querySelector(".input-peso");
                        function guardarDataEjercicios(nombreDelEjercicio, numeroDeSerie, inputRepes, inputPeso) {
                            let newDate = new Date();
                            const newData = {
                                nombreDelEjercicio: nombreDelEjercicio,
                                serie: numeroDeSerie,
                                repeticiones: inputRepes.value,
                                peso: inputPeso.value,
                                date: newDate.getTime()
                            };
                            let dataToSet = JSON.parse(localStorage.getItem("ejercicios-hechos")) || [];
                            dataToSet.push(newData);
                            localStorage.setItem("ejercicios-hechos", JSON.stringify(dataToSet));
                            inputRepes.value = "";
                            inputPeso.value = "";
                        }
                        const getNextSerie = cambiarSerie(series);
                        const buttonNextSerie = newExcerciseContainer.querySelector(".boton-siguiente-serie");
                        buttonNextSerie?.addEventListener("click", ()=>{
                            //mostrar siguiente serie
                            const siguienteSerie = getNextSerie();
                            const textoSeries = newExcerciseContainer.querySelector(".contenedor-serie");
                            if (siguienteSerie !== null) {
                                textoSeries.textContent = siguienteSerie;
                                if (textoSeries.textContent == series[3]) {
                                    buttonNextSerie.textContent = "Agregar serie extra";
                                    buttonNextSerie.style.backgroundColor = "white";
                                }
                            }
                            guardarDataEjercicios(nombreDelEjercicio, numeroDeSerie, inputRepes, inputPeso);
                        });
                        const buttonExcerciseFinished = newExcerciseContainer.querySelector(".boton-ejercicio-terminado");
                        buttonExcerciseFinished?.addEventListener("click", ()=>{
                            exerciseExpandable.style.display = "none";
                            newExcercise.style.backgroundColor = "rgb(107, 247, 107)";
                            newExcercise.style.borderBottomColor = "green";
                            newExcercise.style.borderLeftColor = "green";
                            guardarDataEjercicios(nombreDelEjercicio, numeroDeSerie, inputRepes, inputPeso);
                            (0, _state.state).guardarDatosEnBD();
                        });
                    });
                });
            });
        });
        // Función de búsqueda
        function Search(query) {
            const data = localStorage.getItem("saved-excercises");
            const exercises = JSON.parse(data); // Parsear la cadena JSON a objeto JavaScript
            let exerciseList = [];
            // Iterar sobre los nombres de los ejercicios y verificar si coinciden con la consulta
            for(const exercise in exercises.gymData)if (exercise.toLowerCase().includes(query)) {
                const id = exercises.gymData[exercise].id;
                const exerciseObj = {
                    nombre: exercise.charAt(0).toUpperCase() + exercise.slice(1),
                    id: id
                };
                exerciseList.push(exerciseObj);
            }
            console.log(exerciseList);
            return exerciseList;
        }
        const divBuscador = document.querySelector(".contenedor-buscador");
        // Event listener para cerrar el buscador al hacer clic fuera de él
        document.addEventListener("click", (e)=>{
            // Verificar si el clic ocurrió fuera del área del input de búsqueda y los resultados de búsqueda
            if (e.target != divBuscador) {
                // Cerrar el buscador aquí
                searchResults.innerHTML = ""; // Limpiar los resultados de búsqueda
                searchInput.value = ""; // Limpiar el valor del input de búsqueda
            }
        });
    }
    await setupSearch();
    async function watchDateChange() {
        try {
            // Función para obtener la hora actual en formato de 24 horas (HH:MM)
            function getCurrentTime() {
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, "0");
                const minutes = now.getMinutes().toString().padStart(2, "0");
                return `${hours}:${minutes}`;
            }
            // Función para verificar si es medianoche (00:00)
            function isMidnight() {
                return getCurrentTime() === "00:00";
            }
            // Función para actualizar el contenido del elemento
            async function updateContent() {
                const contenedorFecha = document.querySelector(".fecha");
                const containerIndicaciones = document.querySelector(".contenedor-agregar-ejercicio-indicaciones");
                const mainExcercises = document.querySelector(".contenedor-ejercicios-main");
                const children = mainExcercises.children; // Obtén todos los hijos del contenedor
                // Itera sobre cada hijo
                for(let i = 0; i < children.length; i++){
                    const child = children[i];
                    const computedStyle = window.getComputedStyle(child); // Obtiene los estilos computados del hijo
                    // Verifica si el color de fondo ha sido cambiado 
                    if (computedStyle.backgroundColor !== "rgb(246, 244, 244)") mainExcercises.removeChild(child); // Remueve el hijo del contenedor
                }
                //si no hay ejercicios pendientes en main, devuelve las indicaciones básicas
                if (mainExcercises.chilren == null) {
                    //colapsa el div contenedor de ejercicios
                    mainExcercises.style.display = "none";
                    //cambia el display "none" a flex del contenedor de indicaciones básicas
                    containerIndicaciones.style.display = "flex";
                }
                //actualiza la fecha
                const fecha = await (0, _state.state).getDate();
                const fechaTipada = fecha.lastDate.charAt(0).toUpperCase() + fecha.lastDate.slice(1);
                sessionStorage.setItem("saved-date", fechaTipada);
                contenedorFecha.textContent = fechaTipada;
            }
            // Función para comprobar y actualizar el contenido si es medianoche
            function checkAndUpdateContent() {
                if (isMidnight()) updateContent();
            }
            // Verificar y actualizar el contenido cada minuto
            setInterval(checkAndUpdateContent, 1000);
        //console.log("se ha cambiado la fecha correctamente")
        } catch (error) {
            console.error("Error al cambiar la fecha:", error);
        }
    }
    await watchDateChange();
    // Función para manejar el clic en el botón de monitoreo de músculos
    function handleMonitorMusculosClick() {
        const containerMainDataMonitor = document.querySelector(".main-data-monitor");
        const containerMainDataRutina = document.querySelector(".main-data");
        // Ocultar la página de rutinas y mostrar la página de monitoreo de músculos
        containerMainDataRutina.style.display = "none";
        containerMainDataMonitor.style.display = "block";
        (0, _pageMonitor.initPageMonitor)(containerMainDataMonitor);
        setInterval((0, _muscleDamageChanger.muscleDamageChanger), 1000);
        (0, _showTime.showTime)();
    }
    // Función para manejar el clic en el botón de volver a la página de rutinas
    function handleHomeClick() {
        const containerMainDataMonitor = document.querySelector(".main-data-monitor");
        const containerMainDataRutina = document.querySelector(".main-data");
        // Ocultar la página de monitoreo de músculos y mostrar la página de rutinas
        containerMainDataMonitor.innerHTML = "";
        containerMainDataMonitor.style.display = "none";
        containerMainDataRutina.style.display = "block";
    }
    //boton para ir a la page de monitoreo de los músculos
    const botonMonitorMusculos = document.querySelector(".boton-tiempo-recuperacion");
    botonMonitorMusculos?.addEventListener("click", (e)=>{
        e.preventDefault();
        handleMonitorMusculosClick();
    });
    //boton para volver a la page rutinas
    const botonHome = document.querySelector(".boton-home");
    botonHome?.addEventListener("click", (e)=>{
        e.preventDefault();
        handleHomeClick();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju","../pageMonitor":"7JMhK","./components/muscleDamageChanger":"41UmI","./components/showTime":"amMxc"}],"7JMhK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageMonitor", ()=>initPageMonitor);
function initPageMonitor(container) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "index.da4dfa51.css";
    document.head.appendChild(link);
    container.innerHTML = `
    <section class="main-monitor">
        <div class="main-content">
            <div class="contenedor-para-flex">
                <div class="contenedor-principal">
                    <svg class="svg-pectoral" width="1463" height="692" viewBox="0 0 1463 692" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="borde-pectoral" d="M452.927 4.09065C466.224 2.61802 477.258 1.14538 477.541 0.81813C477.824 0.327252 504.136 0 535.964 0C567.651 0 596.65 0.654504 600.469 1.47263C604.147 2.29076 614.474 3.92703 623.386 4.90878C633.995 6.38142 643.756 8.67218 651.678 11.9447C658.326 14.5627 667.521 18.9806 672.189 21.7623C676.857 24.3803 683.93 29.4527 687.75 32.7252C691.711 36.1614 697.793 42.5428 701.33 46.7971C704.866 51.215 710.1 59.2326 712.929 64.6323C715.759 70.032 720.002 81.1585 722.407 89.1762C724.812 97.1939 727.924 110.12 731.743 131.719L733.441 119.447C734.431 112.738 737.402 99.4846 740.09 89.9943C743.202 79.6859 747.587 68.5593 751.265 62.1779C754.66 56.2874 762.157 46.4698 767.957 40.0884C774.04 33.3797 782.81 26.0165 789.034 22.2531C794.834 18.6534 803.888 14.0718 809.405 11.9447C814.922 9.81756 825.672 7.03592 833.453 5.72691C841.233 4.58153 853.681 2.61802 861.037 1.63626C870.091 0.327252 893.431 -0.163626 933.181 0.327252C965.434 0.81813 997.545 1.96351 1004.62 2.94527C1011.69 4.09065 1024 5.56329 1032.2 6.54504C1040.41 7.5268 1057.24 10.1448 1069.69 12.4356C1082.14 14.7263 1103.78 19.9624 1117.79 24.053C1131.79 27.9801 1151.45 34.5251 1161.64 38.4521C1171.82 42.3791 1188.23 49.7423 1198.42 54.8147C1208.6 59.8871 1222.89 67.7412 1230.25 72.3227C1237.6 76.9042 1249.77 84.9219 1257.12 90.3216C1264.48 95.7212 1275.94 104.557 1282.59 110.12C1289.23 115.684 1302.25 127.628 1311.58 136.791C1320.92 145.954 1337.47 164.281 1348.36 177.698C1359.26 191.279 1372.98 209.114 1378.92 217.623C1384.86 226.131 1393.77 240.203 1398.87 248.712C1403.82 257.22 1412.3 273.419 1417.68 284.709C1423.05 296 1427.86 305.49 1428.43 305.981C1428.85 306.472 1431.68 312.362 1434.65 319.071C1437.63 325.779 1444.56 343.778 1450.22 359.159C1455.87 374.54 1461.25 390.085 1462.1 394.012C1462.95 397.775 1463.23 402.52 1462.8 404.647C1462.38 406.611 1459.41 414.138 1456.3 421.337C1453.19 428.537 1447.95 439.5 1444.84 445.881C1441.73 452.262 1435.08 465.025 1429.99 474.516C1424.89 484.006 1416.97 497.914 1412.3 505.604C1407.49 513.295 1398.44 526.876 1392.08 535.875C1385.71 544.875 1375.52 557.801 1369.3 564.674C1363.22 571.546 1353.46 581.527 1347.66 586.927C1341.86 592.49 1331.96 601.162 1325.73 606.234C1319.51 611.307 1311.58 617.197 1308.05 619.325C1304.51 621.288 1299.14 625.052 1296.02 627.506C1292.91 629.96 1281.88 636.669 1271.69 642.396C1261.37 648.123 1245.38 655.813 1236.33 659.577C1227.13 663.176 1212.28 668.576 1203.37 671.685C1194.46 674.63 1182.57 678.23 1177.2 679.703C1171.82 681.012 1162.49 682.975 1156.69 683.957C1150.89 684.939 1138.44 686.739 1129.1 688.048C1119.77 689.193 1101.94 690.666 1089.49 691.156C1077.05 691.811 1059.79 691.484 1051.3 690.502C1042.81 689.684 1023.29 687.884 1008.15 686.411C993.019 685.102 975.478 682.812 969.254 681.503C963.029 680.193 952.279 676.921 945.206 674.303C938.133 671.685 921.016 665.794 907.012 661.213C893.007 656.631 868.535 649.595 852.55 645.505C836.565 641.414 818.741 636.505 812.941 634.869C807.141 633.069 796.249 628.979 788.893 625.87C781.537 622.597 772.342 617.688 768.523 614.743C764.703 611.798 758.055 605.089 753.953 599.689C749.709 594.29 744.758 586.599 742.777 582.509C740.797 578.418 737.543 570.237 735.421 564.183C733.3 557.965 731.178 553.547 730.612 554.365C730.187 555.02 728.207 559.928 726.227 565.328C724.246 570.728 720.851 578.909 718.729 583.327C716.607 587.908 710.666 596.417 705.574 602.307C699.349 609.343 693.125 614.743 687.042 618.179C681.95 620.961 671.765 625.542 664.409 628.324C657.053 631.269 635.41 637.651 616.313 642.396C597.216 647.305 571.47 654.668 559.022 658.758C546.573 662.849 529.315 668.74 520.828 671.685C512.34 674.794 500.175 678.394 493.95 679.866C487.726 681.175 469.902 683.63 454.342 685.102C438.781 686.575 409.782 688.048 389.978 688.375C359.706 689.029 349.662 688.538 327.736 685.593C313.307 683.63 295.483 680.684 288.127 678.884C280.771 677.085 270.303 673.976 264.786 672.176C259.411 670.376 245.972 665.631 235.08 661.54C224.188 657.449 206.647 649.432 196.179 644.032C185.711 638.469 172.696 630.451 167.18 626.197C161.804 622.106 156.853 618.506 156.287 618.506C155.58 618.506 150.912 615.234 145.678 611.307C140.302 607.38 129.41 598.217 121.205 590.854C113.001 583.49 99.7035 569.91 91.6403 560.747C83.5772 551.583 71.836 536.693 65.6118 527.694C59.3876 518.695 51.7488 506.914 48.4953 501.514C45.3831 496.114 39.3004 485.478 35.0566 477.788L34.4647 476.678C30.3384 468.944 24.127 457.302 20.4863 449.972C16.5255 442.281 10.7256 429.846 7.33061 422.155C3.93558 414.465 0.682021 406.447 0.257643 404.156C-0.308194 401.866 0.116183 396.793 0.964939 392.703C1.81369 388.612 3.93558 382.067 5.49164 377.976C7.04769 373.886 9.16958 368.322 10.1598 365.704C11.15 363.086 13.4134 356.705 15.1109 351.796C16.9498 346.887 21.3351 335.433 24.8716 326.434C28.5495 317.435 37.1785 298.618 43.9686 284.709C50.9001 270.801 60.0949 253.457 64.3387 246.257C68.5825 239.058 78.3432 224.331 85.699 213.696C93.1964 202.896 105.928 186.043 114.132 176.225C122.337 166.244 138.605 148.9 150.346 137.61C162.087 126.319 180.194 110.284 190.662 102.103C201.13 93.9214 215.417 83.4493 222.349 78.8678C229.422 74.2862 241.304 67.2503 248.943 63.1597C256.44 59.069 271.435 51.7058 282.186 46.7971C292.795 41.8883 305.102 36.8159 309.346 35.5069C313.59 34.1978 321.512 31.5798 327.029 29.7799C332.545 27.8164 348.389 23.3985 362.393 19.7988C376.398 16.3626 397.051 11.9447 408.368 9.98119C419.684 8.1813 439.63 5.56329 452.927 4.09065Z" fill="black"/>
                        <path class="pectoral" NAME="pectoral" d="M463.537 18.8172C476.41 17.5082 491.687 16.0355 497.487 15.7083C503.287 15.381 526.486 15.381 549.12 15.5446C581.231 16.0355 595.235 16.8536 613.484 19.6353C626.356 21.5988 641.634 24.8713 647.434 27.1621C653.234 29.2892 663.702 34.8525 670.633 39.5977C677.706 44.5065 686.335 52.1969 690.437 57.2693C694.398 62.1781 699.632 70.3594 702.179 75.2682C704.583 80.1769 708.12 90.1581 710.1 97.3577C711.939 104.557 714.203 114.048 715.051 118.629C715.9 123.047 717.315 133.846 718.022 142.355C718.871 150.863 720.144 222.368 721.134 301.072C722.124 379.776 722.407 464.044 721.983 488.424C721.417 518.858 720.427 535.385 719.012 541.602C717.88 546.511 713.92 557.638 710.1 566.146C706.281 574.982 700.622 584.963 696.945 589.218C693.408 593.308 687.467 599.035 683.506 601.98C679.687 604.762 671.623 608.853 665.823 611.143C660.024 613.434 637.107 619.979 614.898 625.87C592.689 631.76 570.48 637.978 565.387 639.778C560.295 641.414 547.846 645.832 537.803 649.432C527.759 652.868 515.877 656.959 511.633 658.431C507.389 659.74 498.477 662.031 491.829 663.504C485.18 664.813 468.063 667.267 453.635 668.576C438.498 670.049 410.772 671.031 387.856 671.194C366.071 671.194 340.892 670.376 331.98 669.394C323.068 668.249 308.073 665.958 298.737 664.158C289.4 662.358 275.396 659.086 267.616 656.795C259.835 654.504 245.548 649.268 235.787 645.178C226.027 641.087 207.637 631.924 194.764 624.724C181.891 617.689 165.058 606.889 157.277 600.835C149.497 594.781 136.766 584.145 128.986 577.109C121.205 569.91 107.484 555.511 98.4304 545.039C89.5184 534.566 76.6456 517.549 69.997 507.241C63.4899 496.932 54.8609 482.861 50.9 476.152C47.0806 469.443 39.4418 455.044 33.9249 444.245C28.5495 433.446 22.0423 420.192 19.4961 414.792C17.0913 409.393 15.1108 403.175 15.1108 400.884C15.1108 398.593 15.9596 393.521 16.9498 389.43C17.94 385.34 24.1642 368.486 30.8128 351.796C37.3199 335.106 46.6563 312.69 51.6073 301.89C56.6999 291.091 66.1776 273.092 72.8262 261.802C79.4748 250.512 89.6599 234.313 95.6012 225.804C101.401 217.296 112.01 203.224 119.083 194.552C126.015 186.043 137.615 172.789 144.546 165.262C151.478 157.736 163.077 146.282 170.009 139.9C176.94 133.519 187.125 124.683 192.642 120.102C198.159 115.52 207.637 108.321 213.861 103.903C220.085 99.4848 236.636 89.1764 250.641 80.9951C264.645 72.8138 284.732 62.6689 295.2 58.251C305.668 53.9968 322.219 48.1062 331.98 45.161C341.74 42.2157 358.857 37.4705 370.174 34.6889C381.49 31.9072 394.505 28.962 399.173 27.9802C403.841 26.9985 415.016 25.035 423.928 23.7259C432.84 22.4169 450.664 20.2898 463.537 18.8172Z" fill="white"/>
                        <path class="pectoral" NAME="pectoral" d="M837.697 21.4352C847.74 19.4717 863.725 17.3445 873.061 16.5264C882.398 15.8719 902.485 15.0538 917.621 14.8901C932.757 14.8901 956.947 15.5446 971.376 16.3628C985.804 17.3445 1008.72 19.6353 1022.3 21.4352C1035.88 23.2351 1055.4 26.1803 1065.45 27.9802C1075.49 29.7801 1090.48 33.0526 1098.69 35.1798C1106.89 37.4705 1119.62 41.2339 1126.98 43.5247C1134.34 45.8155 1145.51 49.5789 1151.74 51.8696C1157.96 54.1604 1170.41 59.3964 1179.32 63.3234C1188.23 67.4141 1201.25 73.9591 1208.32 78.0498C1215.39 82.1404 1230.25 91.6308 1241.56 99.1576C1252.88 106.848 1271.69 121.247 1283.29 131.228C1299 144.809 1311.3 157.408 1330.82 179.825C1345.25 196.515 1361.38 216.477 1366.61 224.168C1371.85 231.858 1382.6 249.039 1390.38 262.62C1400.28 279.801 1409.33 298.618 1420.51 324.798C1429.28 345.415 1438.76 368.65 1441.44 376.34C1444.27 384.03 1446.96 393.521 1447.53 397.611C1448.38 404.32 1447.81 406.284 1441.02 420.519C1436.92 429.028 1427.44 447.517 1420.08 461.426C1412.73 475.334 1404.67 490.06 1402.4 494.151C1400 498.241 1392.64 509.204 1385.99 518.695C1379.34 528.185 1368.17 542.421 1361.1 550.602C1354.16 558.783 1342.28 570.891 1334.93 577.764C1327.57 584.472 1314.41 595.272 1305.93 601.653C1297.44 608.035 1282.73 617.689 1273.39 623.088C1264.05 628.488 1253.3 634.542 1249.34 636.505C1245.52 638.633 1235.2 643.051 1226.71 646.65C1218.22 650.086 1204.08 655.159 1195.59 657.777C1187.1 660.395 1172.67 663.995 1163.76 665.795C1154.85 667.594 1139.85 669.885 1130.52 671.031C1121.18 672.012 1096 672.831 1074.64 672.831C1053.14 672.831 1024.14 671.521 1009.57 670.212C995.141 668.903 977.034 666.285 969.254 664.486C961.473 662.686 944.64 657.613 931.767 653.032C918.894 648.287 901.353 642.396 892.866 639.778C884.378 637.16 864.291 631.597 848.306 627.506C832.321 623.415 814.497 618.507 808.697 616.543C802.898 614.743 792.995 610.489 786.771 607.216C778.567 602.799 773.05 598.381 766.684 591.017C759.894 583.327 756.216 577.273 751.548 565.655C748.011 557.474 744.616 547.329 743.768 543.239C742.919 539.148 741.504 520.004 740.656 500.696C739.665 479.097 739.382 442.936 739.948 406.611C740.373 374.213 741.363 304.345 742.211 251.166C742.919 197.988 744.192 147.591 745.041 139.082C745.889 130.574 747.163 120.265 747.87 116.175C748.719 112.084 749.992 105.866 750.841 102.266C751.689 98.6667 753.387 92.7761 754.66 89.1764C755.933 85.5766 759.611 77.8862 762.865 71.9956C765.977 66.1051 771.211 58.5783 774.181 54.9785C777.152 51.5424 783.235 45.9791 787.478 42.5429C791.722 39.2704 797.522 35.1798 800.21 33.5435C802.898 31.9072 808.273 29.2892 812.234 27.8166C816.053 26.1803 827.653 23.3987 837.697 21.4352Z" fill="white"/>
                    </svg>
                    <svg class="svg-hombros" width="3069" height="885" viewBox="0 0 3069 885" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M647.038 14.5851C657.978 11.9806 682.463 7.81342 702.26 5.20895H701.739C721.535 2.60447 750.188 0.520895 765.817 0C781.446 0 815.309 2.60447 841.357 6.77163C866.884 10.4179 892.933 16.1477 898.663 18.7522C904.394 21.8776 920.544 27.0865 935.131 30.2119C949.197 33.8582 964.826 39.588 968.993 43.2343C973.161 47.4014 985.664 51.5686 996.083 53.6522C1007.02 55.2148 1023.17 62.5074 1031.51 69.7999C1039.84 77.0924 1047.14 84.3849 1047.14 86.9894C1047.14 89.073 1039.32 94.2819 1030.47 98.97C1021.09 103.658 1001.29 110.951 987.227 115.639C972.64 120.327 957.532 124.494 953.365 124.494C949.197 124.494 930.963 131.786 912.729 140.121C895.016 148.976 878.867 155.747 876.262 155.747C874.178 155.747 868.968 158.873 864.801 163.04C860.633 166.686 848.651 172.937 838.752 176.583C828.854 180.23 815.83 187.522 810.099 192.21C804.369 197.419 791.345 205.753 781.446 210.962C771.548 215.65 750.188 233.361 734.56 248.988C718.931 265.135 692.361 293.264 675.691 312.016C659.541 330.768 636.618 356.292 625.157 369.314C613.696 382.337 604.318 394.838 604.318 397.964C604.318 401.089 599.63 407.861 593.899 413.59C588.169 419.32 582.959 428.175 583.48 433.384C583.48 438.072 576.707 448.49 568.372 456.825C560.557 464.638 552.222 475.577 550.659 481.307C548.575 487.037 533.467 532.875 516.796 582.881C494.395 650.077 483.976 674.559 477.724 675.6C473.035 676.121 457.928 666.224 443.861 653.202C430.316 640.7 412.604 628.72 403.747 627.157C394.891 625.594 376.136 624.553 362.07 624.553C342.794 624.032 326.124 628.72 297.992 642.784C277.674 652.681 256.835 661.015 252.668 661.015C248.5 661.015 243.811 662.578 242.769 665.182C241.727 667.266 234.955 670.391 227.14 672.996C219.847 675.079 202.655 684.456 188.589 693.311C175.044 702.687 148.996 725.606 130.241 744.358C111.486 763.111 78.6656 799.573 57.3061 825.097C35.9465 850.621 16.1499 873.54 13.0241 875.624C10.4193 877.708 6.25157 879.791 3.64675 879.791C1.56289 879.791 0 870.415 0 858.955C0 847.496 4.68868 816.242 10.9402 790.197C16.6709 763.632 23.9644 737.066 26.0482 731.336C28.653 725.606 33.3417 711.542 36.9885 700.082C40.6352 688.623 45.3239 677.163 47.4077 674.038C49.4916 670.912 52.6174 658.411 54.7012 645.388C56.7851 632.366 62.5157 617.26 67.2044 611.53C72.414 605.801 81.2704 587.048 87.522 569.859C93.7736 552.669 98.9832 534.438 98.9832 529.75C98.9832 524.541 101.067 515.686 104.193 509.956C106.798 504.226 111.486 494.85 114.612 489.12C117.217 483.39 119.822 474.535 119.822 469.847C119.822 464.638 123.469 453.178 128.157 444.844C132.325 436.51 137.535 418.799 139.618 406.298C141.702 393.796 145.349 381.816 148.475 379.732C151.08 377.649 159.415 362.022 166.188 345.353C173.481 328.164 184.421 308.37 191.194 300.556C197.966 292.222 203.176 282.325 203.176 278.158C203.176 273.991 213.595 256.801 226.098 240.653C238.602 223.985 260.482 200.544 274.027 188.564C288.093 176.062 306.327 160.956 315.183 154.185C323.519 147.413 345.92 132.828 364.675 121.889C383.43 110.43 402.184 98.97 406.352 95.3237C410.52 92.1983 419.897 88.0312 427.191 86.4685C434.484 84.9058 449.592 77.0924 461.053 69.279C472.515 61.9865 494.916 52.0895 510.545 47.9223C526.174 43.7551 541.282 38.5462 543.887 35.4208C547.012 32.8164 557.432 30.7328 567.33 30.7328C577.749 30.7328 595.462 28.1283 606.923 25.0029C618.385 22.3985 636.618 17.7104 647.038 14.5851Z" fill="#060606"/>
                        <path d="M2152.1 22.3985C2167.73 17.7104 2198.47 10.4179 2219.83 6.77163C2243.79 2.60447 2281.3 1.04179 2316.21 2.60447C2347.46 3.64626 2388.62 8.85521 2407.38 13.0224C2426.13 17.7104 2457.39 23.9612 2477.71 27.0865C2497.5 30.7328 2516.78 34.8999 2519.38 36.9835C2521.99 38.5462 2540.74 44.7969 2561.06 50.5268C2580.86 56.2566 2603.26 63.5492 2610.55 66.6745C2617.85 69.7999 2632.95 78.1342 2644.41 85.4267C2655.88 92.7192 2681.4 107.304 2701.72 118.764C2721.52 130.224 2742.88 144.288 2748.61 150.539C2754.34 156.268 2761.63 160.956 2764.24 160.956C2766.84 160.956 2788.2 180.23 2811.12 203.67C2834.05 227.631 2856.97 255.238 2861.66 265.135C2866.34 275.032 2873.64 291.701 2878.33 301.598C2883.02 311.495 2890.31 325.559 2894.48 332.852C2898.64 340.144 2904.9 347.958 2907.5 351.083C2910.63 354.208 2912.71 362.543 2912.71 370.877C2912.71 378.69 2915.84 385.983 2918.96 387.546C2922.61 389.108 2927.3 399.005 2929.38 409.423C2931.47 420.362 2936.68 436.51 2940.84 444.844C2945.53 453.178 2949.18 464.117 2949.18 468.284C2949.18 472.451 2953.87 485.995 2959.6 498.496C2965.33 510.477 2970.02 523.499 2970.02 527.145C2970.02 530.271 2979.92 561.524 2992.42 595.904C3004.92 630.283 3018.47 667.787 3021.59 679.247C3025.24 690.706 3030.45 705.812 3033.57 713.105C3036.7 720.397 3040.87 730.294 3043.47 735.503C3046.08 740.191 3048.16 748.526 3048.16 753.735C3048.16 758.423 3052.85 781.342 3058.58 804.261C3064.31 827.181 3069 854.788 3069 865.727C3069 879.27 3066.92 885 3061.19 885C3057.02 885 3039.83 867.81 3023.68 847.496C3007.01 826.66 2970.54 786.551 2942.93 758.944C2914.79 730.815 2886.66 705.291 2879.89 702.687C2873.64 699.562 2859.05 691.748 2847.59 684.456C2836.13 677.684 2805.91 661.015 2779.86 647.993C2734.02 624.032 2731.94 623.511 2692.86 625.594C2652.75 627.157 2652.75 627.157 2627.74 651.639C2614.2 665.182 2599.09 676.642 2594.92 676.642C2590.23 676.642 2582.94 665.703 2575.65 646.951C2569.4 630.284 2555.85 589.661 2544.91 556.846L2544.91 556.836C2534.49 524.02 2523.55 494.85 2520.95 491.725C2518.86 488.599 2516.78 482.869 2516.78 478.702C2516.78 474.535 2511.05 465.159 2503.23 457.866C2495.94 450.574 2487.6 440.156 2484.48 434.426C2481.87 428.696 2475.1 415.674 2469.37 405.777C2464.16 395.88 2449.57 376.086 2437.07 362.022C2425.09 347.958 2391.75 310.453 2363.09 279.2C2329.23 242.216 2302.66 217.734 2287.55 210.441C2274.53 204.191 2260.46 194.815 2256.3 190.127C2252.13 185.439 2246.92 181.271 2244.31 181.792C2242.23 181.792 2229.73 176.583 2215.66 170.853C2202.12 164.603 2183.88 156.789 2175.55 153.143C2166.69 149.497 2156.27 142.725 2152.1 138.037C2147.94 133.349 2135.95 128.14 2126.05 126.577C2116.16 125.015 2093.76 118.764 2076.56 113.034C2059.37 107.304 2040.62 100.012 2034.89 97.4073C2029.16 94.2819 2023.42 91.1566 2021.86 90.1148C2020.3 89.073 2027.07 80.7387 2036.45 72.4044C2045.83 63.5491 2056.25 56.7775 2059.89 56.7775C2063.54 56.7775 2079.17 51.0477 2094.8 44.276C2110.43 37.5044 2136.47 27.6074 2152.1 22.3985Z" fill="#060606"/>
                        <path d="M2697.55 116.68C2679.32 107.304 2660.04 95.3236 2654.31 90.6355C2643.89 82.3012 2644.41 82.3012 2656.92 85.4266C2664.21 87.5102 2675.67 93.24 2682.97 98.9699C2690.26 104.179 2704.85 113.555 2715.27 119.285C2726.21 125.015 2734.02 130.744 2732.46 132.307C2730.89 133.87 2715.27 126.577 2697.55 116.68Z" fill="#626262" fill-opacity="0.7"/>
                        <path d="M355.298 123.452C354.777 122.41 365.196 114.076 378.741 105.221C392.286 95.8445 404.789 88.0311 406.873 88.0311C408.957 88.0311 409.999 89.5938 408.957 92.1982C408.436 94.2818 396.454 102.095 382.388 110.43C368.322 118.243 356.34 123.973 355.298 123.452Z" fill="#626262" fill-opacity="0.7"/>
                        <path d="M877.825 155.747C886.681 152.622 901.789 145.85 911.687 140.641C921.586 134.912 932.005 130.224 935.131 130.224C937.736 129.703 936.694 132.828 932.526 136.474C928.358 140.641 912.208 148.976 897.621 154.706C882.513 160.956 868.447 165.123 866.363 163.561C863.759 161.998 869.489 158.352 877.825 155.747Z" fill="#626262" fill-opacity="0.7"/>
                        <path d="M2763.72 160.956C2761.11 161.477 2754.86 157.831 2750.69 153.143C2743.92 146.371 2744.44 145.329 2754.86 145.329C2762.15 145.329 2781.95 159.915 2808.52 185.438C2831.96 207.837 2855.4 235.444 2860.61 246.904C2865.82 258.364 2869.47 268.261 2867.91 269.302C2866.35 269.823 2860.09 262.531 2853.84 253.676C2848.11 244.299 2826.23 219.297 2805.91 198.461C2785.6 177.625 2766.32 160.956 2763.72 160.956Z" fill="#626262" fill-opacity="0.7"/>
                        <path d="M3009.09 637.575C3004.4 629.241 3001.27 618.823 3000.75 615.697C3000.75 612.051 3003.36 608.926 3005.96 608.926C3008.57 608.926 3011.17 613.093 3011.17 618.302C3011.17 622.99 3012.74 632.887 3013.78 640.179C3016.38 651.639 3015.34 651.118 3009.09 637.575Z" fill="#626262" fill-opacity="0.7"/>
                        <path class="hombros" NAME="hombros" d="M638.181 45.8386C641.307 43.755 662.145 39.5879 685.068 36.9834C707.99 34.3789 741.853 31.7745 760.608 31.2536C779.362 31.2536 802.806 32.8162 812.704 35.4207C822.602 38.0252 850.735 44.2759 875.22 48.964C899.705 54.1729 923.149 59.3819 927.316 60.9446C931.484 62.5072 944.508 66.1535 955.448 69.2789C966.91 72.4042 976.808 77.0923 977.85 80.2177C978.892 83.343 968.472 88.552 954.927 92.1982C940.861 95.8445 919.502 104.179 906.478 110.95C893.454 117.722 877.304 124.494 870.01 126.056C862.717 127.619 837.189 140.641 812.704 154.706C788.219 168.77 755.398 188.564 739.769 198.461C724.14 208.879 700.697 228.673 687.673 242.216C674.649 256.28 653.289 280.762 640.786 296.389C627.762 312.016 608.486 334.414 597.546 345.874C586.606 357.334 577.749 368.793 578.27 371.919C578.27 375.044 573.582 380.253 567.851 383.899C562.12 387.025 553.785 398.484 549.617 408.381C545.449 418.278 539.719 426.613 536.593 426.613C533.467 426.613 532.425 429.738 533.988 433.384C535.551 436.51 531.383 447.969 525.132 457.866C518.88 467.763 514.192 480.786 515.234 486.516C515.755 492.245 512.629 500.58 507.94 504.747C503.251 508.914 499.605 516.727 500.126 521.936C500.126 526.624 496.479 531.833 492.311 533.396C488.143 534.959 485.539 538.084 487.101 541.209C488.664 544.335 487.622 551.627 484.497 558.399C481.892 564.65 477.203 579.756 474.077 592.257C469.389 611.53 467.305 614.135 454.802 614.135C446.466 614.135 436.568 610.488 432.4 606.321C427.712 601.633 409.999 596.945 390.723 595.383C368.843 593.82 344.357 595.383 321.956 600.591C302.159 605.279 270.901 617.26 251.626 627.678C231.829 638.096 212.553 649.556 208.386 652.681C204.218 656.327 194.32 662.057 186.505 665.182C178.17 668.829 157.331 682.372 139.618 696.436C121.906 709.979 95.3364 734.982 80.7494 752.172C66.1624 769.361 51.5754 788.114 48.4496 793.843C45.3238 799.573 41.1561 803.219 39.5932 801.657C38.0303 800.094 44.2819 779.258 53.1383 754.776C61.9947 730.294 81.2704 674.038 96.3783 629.762C111.486 585.485 126.073 544.335 129.199 538.605C132.325 532.875 137.014 520.895 140.139 512.56C142.744 504.226 151.08 480.786 158.373 460.471C165.667 440.156 187.547 387.025 242.248 258.885L291.74 211.483C318.83 184.917 351.651 158.352 364.675 151.58C377.699 144.809 409.478 128.14 435.005 114.076C460.532 100.012 504.293 81.2595 531.383 72.9251C558.474 64.0699 592.336 55.7356 606.923 53.652C620.989 52.0893 635.055 48.4431 638.181 45.8386Z" fill="#FCFCFC"/>
                        <path class="hombros" NAME="hombros" d="M2201.07 46.3595C2232.33 40.1088 2259.42 34.3789 2260.46 32.8162C2261.51 31.7745 2275.05 30.7327 2290.68 30.7327C2305.79 30.7327 2341.21 33.3371 2369.35 36.4625C2396.96 39.5879 2422.48 43.755 2425.09 46.3595C2427.69 48.4431 2444.36 52.0893 2461.56 54.1729C2478.75 56.2565 2512.61 64.5908 2537.1 72.4042C2561.58 80.7386 2594.4 93.24 2610.03 100.533C2625.66 108.346 2648.06 119.806 2659.52 127.098C2670.98 133.87 2687.65 142.725 2695.99 146.371C2704.32 150.538 2721 160.435 2732.46 169.291C2743.92 177.625 2768.92 200.023 2788.72 219.817C2811.99 243.084 2828.66 265.656 2838.73 287.534C2847.07 305.244 2864.26 343.269 2877.29 371.919C2890.31 400.568 2904.38 435.989 2908.54 450.053C2913.23 464.638 2922.61 491.204 2929.38 509.956C2936.68 528.708 2949.18 562.566 2957.51 585.485C2965.85 608.405 2977.31 644.867 2982.52 666.224C2987.73 687.581 2997.11 715.709 3003.36 728.732C3009.61 741.754 3017.95 763.111 3022.11 776.654C3026.28 790.197 3027.84 802.699 3025.76 804.261C3023.16 805.824 3018.47 800.615 3014.3 792.802C3010.65 784.467 2992.42 763.111 2974.18 744.879C2955.95 726.648 2922.61 698.52 2899.69 682.372C2877.29 666.224 2849.67 646.951 2838.73 639.138C2827.27 630.803 2818.42 625.594 2818.42 627.157C2818.42 628.72 2810.6 625.073 2801.75 619.865C2792.37 614.135 2768.4 605.8 2748.09 601.112C2728.29 596.424 2698.59 593.299 2682.97 593.82C2666.82 594.862 2648.06 599.55 2640.25 604.759C2631.91 609.968 2620.45 614.135 2614.2 614.135C2603.78 614.135 2600.65 608.405 2590.23 576.63C2583.98 555.794 2572.52 527.666 2565.75 514.123C2558.46 500.059 2552.72 485.474 2552.72 481.307C2552.72 477.139 2547.51 463.596 2541.78 451.616C2535.53 439.114 2526.68 421.404 2521.99 411.507C2517.3 401.61 2504.8 383.899 2493.86 372.44C2482.92 360.459 2473.02 346.916 2471.45 342.228C2470.41 337.019 2465.2 331.81 2460.51 330.247C2455.3 329.205 2446.97 321.392 2442.28 313.578C2437.59 305.244 2417.79 281.804 2398 260.447C2378.72 239.091 2351.11 213.046 2336.52 202.628C2322.46 192.21 2289.64 172.416 2263.59 158.352C2237.54 144.288 2203.68 127.098 2188.05 120.327C2172.42 113.555 2146.37 103.658 2130.74 97.9281C2115.11 92.7191 2098.44 86.4684 2094.28 84.9057C2088.02 82.8221 2089.59 80.2177 2099.49 75.0087C2106.78 70.8416 2117.2 67.7162 2122.93 67.1953C2129.18 67.1953 2135.95 65.1117 2138.56 62.5072C2141.68 59.9028 2169.82 53.1311 2201.07 46.3595Z" fill="#FCFCFC"/>
                    </svg> 
                    <svg class="svg-trapecios" width="3445" height="723" viewBox="0 0 3445 723" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2382.42 507.626V254.106V0L2473.41 0.586851L2540.92 54.5771C2577.91 84.5065 2619 116.783 2631.92 126.173C2644.83 136.149 2660.68 146.713 2667.14 150.821C2673.6 154.342 2713.52 174.295 2755.2 195.421C2796.88 215.961 2862.63 245.304 2900.2 260.562C2938.36 275.233 2972.41 287.557 2975.34 287.557C2978.28 287.557 2992.37 292.838 3005.87 298.707C3019.96 305.162 3052.25 318.073 3078.08 328.05C3103.91 337.439 3147.35 359.153 3174.94 375.584C3202.53 392.603 3242.45 418.425 3264.17 433.683C3285.31 448.354 3319.94 473.588 3339.9 490.02C3359.86 505.865 3392.15 534.034 3410.94 551.64C3429.72 569.245 3445.57 588.611 3444.98 593.893C3444.98 599.761 3442.05 605.63 3439.11 607.39C3436.18 609.151 3382.17 612.672 3320.53 616.193C3258.3 619.127 3177.88 624.996 3142.65 628.517C3107.43 632.038 3036.98 644.362 2987.08 655.512C2937.18 666.662 2877.89 680.747 2855 687.202C2822.71 696.592 2796.88 698.939 2734.65 698.352C2691.21 698.352 2634.26 695.418 2608.43 692.484C2582.6 688.963 2550.9 684.855 2537.99 683.094C2524.49 680.747 2505.7 671.944 2493.96 661.968C2482.8 651.991 2461.08 629.691 2445.23 611.498C2429.97 592.719 2409.42 562.203 2382.42 507.626Z" fill="#010101"/>
                        <path d="M779.766 164.318C800.899 151.994 851.973 113.849 894.241 79.8117L970.558 18.1924L1061.55 17.6055L1058.62 537.555L1031.02 581.569C1015.76 605.63 993.453 636.146 981.124 649.057C961.752 669.597 952.359 674.291 911.852 683.094C886.022 688.963 846.102 698.939 823.794 705.394C800.899 711.263 756.283 718.305 723.995 721.239C691.708 723.587 655.897 723.587 644.743 721.239C633.589 718.892 573.71 703.634 512.656 687.789C444.558 670.183 370.003 654.925 321.864 649.057C278.423 643.775 188.603 637.907 1.92077 630.864L0.15961 613.259C-1.0145 598.588 3.68192 591.545 34.7957 563.377C54.7555 545.771 87.6304 518.189 107.003 502.344C126.963 486.499 168.057 457.743 198.583 437.791C229.11 417.838 269.03 392.603 286.641 382.04C304.253 371.476 340.063 355.045 365.893 345.655C391.724 336.265 424.012 323.355 437.514 316.899C451.603 310.444 465.105 305.162 468.628 305.162C471.563 305.162 505.612 293.425 543.183 278.167C581.342 263.496 641.221 236.501 677.031 218.895C712.254 201.29 758.632 176.642 779.766 164.318Z" fill="#010101"/>
                        <path d="M3365.73 511.147C3362.8 511.147 3353.4 504.105 3345.19 495.889C3336.97 487.673 3333.44 480.631 3336.38 480.631C3339.31 480.631 3348.71 487.673 3356.93 495.889C3365.15 504.105 3368.67 511.147 3365.73 511.147Z" fill="#5E5E5E" fill-opacity="0.8"/>
                        <path class="trapecio" NAME="trapecio" d="M2454.04 510.56C2445.82 492.954 2444.65 461.851 2443.47 282.275C2443.47 132.628 2444.65 75.7036 2449.34 80.3984C2452.87 83.3327 2478.11 103.286 2505.7 123.825C2533.29 144.365 2566.17 168.426 2579.08 176.642C2592 184.858 2628.98 204.224 2661.27 219.482C2693.56 235.327 2721.15 249.411 2722.91 251.759C2724.67 253.519 2737.59 261.148 2752.26 267.604C2766.94 274.646 2798.64 289.904 2822.71 301.641C2846.78 313.378 2885.52 328.049 2907.83 333.918C2930.73 340.373 2962.43 349.763 2978.28 355.631C2994.71 360.913 3011.74 369.129 3016.44 373.237C3021.13 377.932 3030.52 381.453 3036.98 381.453C3043.44 381.453 3054.01 384.974 3060.46 389.082C3066.92 393.777 3085.12 402.579 3100.38 408.448C3115.65 414.316 3128.56 421.359 3127.98 423.706C3127.98 426.64 3132.09 428.401 3136.78 428.401C3141.48 428.401 3159.09 438.964 3174.94 451.875C3191.38 464.786 3206.05 475.349 3208.99 475.349C3211.34 475.349 3226.6 485.912 3242.45 497.649C3258.89 509.973 3280.61 525.231 3291.18 531.687C3301.74 537.555 3309.96 544.597 3309.96 546.945C3309.96 549.879 3272.98 551.639 3227.77 551.639C3176.7 551.639 3145.59 553.987 3145.59 557.508C3145.59 560.442 3132.67 563.377 3116.23 563.377C3100.38 563.377 3066.34 566.311 3041.68 569.245C3016.44 572.766 2991.78 576.874 2987.08 579.221C2982.39 580.982 2967.71 583.329 2954.8 585.09C2941.88 586.264 2928.38 589.785 2925.44 592.719C2922.51 595.653 2905.48 600.348 2888.46 602.695C2871.43 605.63 2857.93 609.151 2857.93 611.498C2857.93 614.432 2851.47 616.193 2843.26 616.193C2835.04 616.193 2823.88 618.54 2818.6 621.475C2812.73 624.409 2784.55 633.799 2755.2 642.601C2725.84 651.404 2695.32 662.554 2686.51 666.662C2677.12 671.357 2663.62 674.878 2655.4 674.878C2647.18 674.878 2630.16 669.596 2617.24 663.141C2604.32 656.686 2578.49 639.667 2560.3 625.583C2541.51 612.085 2512.16 584.503 2495.13 565.724C2477.52 546.945 2459.32 521.71 2454.04 510.56Z" fill="#FCFCFC"/>
                        <path class="trapecio" NAME="trapecio" d="M928.29 146.713C938.27 137.323 956.468 123.239 967.622 115.023C978.776 107.394 989.93 100.351 992.866 100.351C995.214 99.7645 996.975 188.966 996.388 297.533C996.388 469.48 995.214 499.41 986.408 521.123C981.124 534.621 959.404 565.724 938.27 589.785C917.136 613.259 897.763 633.212 894.241 633.212C891.305 633.799 878.977 641.428 867.823 650.817C856.669 659.62 836.122 673.118 822.62 680.16C808.531 686.615 792.094 692.484 785.636 692.484C779.178 692.484 765.089 688.963 755.109 684.268C744.542 679.573 718.712 670.183 697.578 663.141C676.444 656.686 644.743 646.709 627.132 642.014C609.52 637.32 590.734 632.038 586.038 629.691C581.342 627.93 556.098 620.888 530.268 615.019C504.438 609.151 470.389 601.522 453.951 598.588C438.101 595.066 401.117 589.785 371.764 586.851C342.998 583.329 307.775 578.048 294.273 575.114C280.184 571.592 237.916 569.245 131.072 569.245L145.749 555.161C153.967 547.532 196.235 517.602 239.677 488.26C283.119 458.917 329.496 430.748 342.411 425.467C355.326 420.185 374.112 412.556 383.505 408.448C393.485 403.753 412.858 394.95 427.534 387.908C442.21 381.453 458.061 375.584 463.344 375.584C468.04 375.584 474.498 373.237 478.02 370.303C480.956 367.368 503.264 359.152 527.333 352.11C551.402 345.068 579.581 336.852 588.973 333.918C598.953 330.397 633.589 314.552 666.464 297.533C699.339 280.514 751 254.106 780.94 238.261C810.879 222.416 850.799 199.529 869.584 187.205C887.783 174.295 904.221 164.318 905.982 164.318C907.743 164.318 917.723 156.689 928.29 146.713Z" fill="#FCFCFC"/>
                        <path d="M3253.6 555.747C3247.15 556.921 3233.65 556.921 3224.25 555.747C3214.86 554.574 3220.14 553.4 3236.58 553.4C3253.02 553.4 3260.65 554.574 3253.6 555.747Z" fill="#5E5E5E" fill-opacity="0.8"/>
                    </svg>
                    <svg class="svg-biceps" width="804" height="305" viewBox="0 0 804 305" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M803.758 149.055C803.533 151.192 803.308 149.167 803.308 144.555C803.308 139.944 803.533 138.144 803.758 140.619C803.983 143.093 803.983 146.918 803.758 149.055Z" fill="#F8F8F8"/>
                        <path d="M802.97 164.24C802.408 163.003 801.958 160.078 801.958 157.829V157.716C801.845 155.466 802.408 153.554 802.97 153.554C803.645 153.554 804.095 156.366 803.983 159.966C803.983 164.69 803.645 165.815 802.97 164.24Z" fill="#F8F8F8"/>
                        <path d="M681.236 7.21301C685.062 4.85085 691.137 2.03876 694.737 1.1389C698.563 0.126544 703.625 -0.210907 707.338 0.126544C710.714 0.463995 714.089 1.1389 714.651 1.58883C715.326 2.03876 718.364 3.38857 721.402 4.5134C724.552 5.63824 731.19 8.56281 736.14 11.1499C741.766 13.962 750.991 20.3736 760.105 27.7975C768.205 34.5465 774.843 40.3957 774.843 41.0706C774.843 41.7455 777.431 45.12 780.581 48.607C783.844 52.2064 787.894 57.3807 789.694 60.1928C791.494 63.0049 793.969 68.0666 795.207 71.4411C796.445 74.8156 798.245 81.6771 799.032 86.6264C799.932 91.5757 801.17 104.736 801.845 115.872C802.52 127.008 802.858 145.005 802.52 155.804C802.183 167.952 801.057 180.663 799.595 188.986C798.357 196.41 795.995 207.546 794.42 213.733C792.732 219.919 791.044 227.006 790.594 229.481C790.032 231.955 787.894 239.042 785.756 245.228C783.619 251.415 780.243 259.739 778.218 263.788C776.193 267.837 771.918 274.924 768.655 279.536C765.392 284.148 761.23 289.322 759.43 290.897C757.742 292.471 753.804 295.171 750.654 296.633C747.616 298.208 742.778 300.458 739.966 301.583C736.14 303.157 731.978 303.72 723.539 303.72C712.289 303.72 712.064 303.607 702.163 298.658C696.312 295.733 689.674 291.347 686.187 287.972C682.924 284.935 680.224 281.673 680.336 280.886C680.336 280.211 678.874 277.848 677.186 275.824C675.386 273.912 672.461 269.412 670.548 266.038C668.635 262.663 666.273 257.264 665.26 254.227C664.135 251.077 662.785 244.553 662.223 239.604C661.66 234.655 660.647 226.781 660.085 222.169C659.635 217.557 658.622 209.458 657.947 204.172C657.272 198.885 655.472 188.537 653.897 181.113C652.322 173.689 650.747 166.377 650.409 164.802C649.959 163.228 646.696 151.642 642.984 138.931C639.271 126.221 635.783 114.972 635.221 113.847C634.658 112.835 634.208 105.299 634.208 97.3123C634.208 84.6017 634.546 81.5647 637.133 74.0283C638.708 69.1915 643.209 58.9555 647.034 51.1941C650.859 43.4327 656.26 33.8716 658.96 29.8222C661.66 25.7728 666.16 20.0361 669.086 17.1116C671.898 14.0745 677.299 9.68765 681.236 7.21301Z" fill="#030303"/>
                        <path class="bicep" NAME="bicep" d="M678.086 21.0484C680.224 18.9113 685.062 15.7617 688.774 13.962C693.612 11.5998 697.213 10.7 701.488 10.7C704.638 10.7 711.051 11.7123 715.551 12.9496C719.939 14.1869 726.69 16.6616 730.402 18.4613C734.115 20.2611 740.978 24.6479 745.591 28.2474C750.204 31.8469 756.279 36.9086 758.979 39.3833C761.68 41.8579 767.98 48.9444 773.043 55.131C778.218 61.3176 783.619 68.404 785.194 70.8787C786.769 73.3533 788.907 77.8526 789.807 81.0022C790.707 84.0392 792.169 89.6634 792.844 93.3754C793.632 97.0873 794.532 109.011 794.757 119.809C795.095 130.607 794.757 146.355 794.082 154.679C793.294 163.003 792.394 174.476 791.832 179.988C791.269 185.499 790.257 192.136 789.694 194.611C789.019 197.085 788.119 202.035 787.557 205.746C787.106 209.346 786.319 212.495 785.869 212.72C785.306 212.945 784.969 214.52 784.969 216.207C784.969 218.007 784.519 220.932 783.844 222.731C783.281 224.531 781.706 229.593 780.356 233.98C779.006 238.367 776.868 244.103 775.631 246.915C774.393 249.728 773.155 253.327 772.93 255.014C772.818 256.814 770.68 261.201 768.43 264.913C766.067 268.737 763.592 272.674 763.03 273.687C762.355 274.699 759.88 278.298 757.404 281.673C753.917 286.285 751.329 288.422 746.154 290.784C742.441 292.471 737.153 294.384 734.34 295.058C731.527 295.733 726.015 296.296 721.964 296.296C716.564 296.296 713.189 295.621 708.801 293.596C705.538 292.021 702.275 290.784 701.713 290.784C701.15 290.784 697.438 287.634 693.5 283.698C689.674 279.873 685.062 274.136 683.374 271.099C681.686 267.95 680.336 264.8 680.336 264.013C680.336 263.338 679.999 262.663 679.436 262.663C678.986 262.663 677.524 260.526 676.174 257.939C674.823 255.239 672.911 250.852 672.011 248.04C671.223 245.228 670.211 241.741 669.873 240.166C669.423 238.592 668.41 230.718 667.398 222.731C666.385 214.745 665.035 204.059 664.473 199.11C663.798 194.161 662.898 189.661 662.448 188.986C661.885 188.312 661.435 185.049 661.322 181.675C661.21 178.3 660.647 175.038 660.085 174.364C659.41 173.689 659.185 173.014 659.522 172.676C659.86 172.339 659.522 169.527 658.847 166.49C658.172 163.34 657.385 159.628 657.16 158.053C656.822 156.479 655.81 152.204 654.909 148.492C653.897 144.78 651.197 135.894 648.721 128.808C646.359 121.721 643.546 112.048 642.534 107.436C641.409 102.149 640.958 96.9749 641.409 93.3754C641.746 90.2258 643.096 83.7018 644.334 78.7525C645.684 73.8032 649.509 63.9047 652.997 56.8182C656.485 49.7318 661.322 41.0705 663.798 37.696C666.385 34.3215 669.761 30.0471 671.336 28.2474C672.911 26.3352 675.948 23.1856 678.086 21.0484Z" fill="#F8F8F8"/>
                        <path d="M170.675 104.061C169.887 105.186 169.662 103.161 169.662 97.3123C169.775 91.3507 170 89.6634 170.675 91.6881C171.125 93.2629 171.575 96.2999 171.687 98.4371C171.687 100.574 171.237 103.161 170.675 104.061Z" fill="#F8F8F8"/>
                        <path d="M0.450032 164.24C0.225016 166.715 0 165.252 0 160.866C0 156.479 0.225016 154.566 0.450032 156.366C0.675048 158.166 0.675048 161.765 0.450032 164.24Z" fill="#F8F8F8"/>
                        <path d="M143.898 220.707C143.448 220.257 143.898 215.533 144.798 210.358C145.698 205.184 146.598 201.135 146.823 201.36C147.048 201.585 146.598 206.309 145.923 211.708C145.248 217.107 144.348 221.157 143.898 220.707Z" fill="#F8F8F8"/>
                        <path d="M82.3559 5.076C84.8311 4.28862 87.8688 2.93882 89.1064 2.03895C90.344 1.25156 94.1693 0.57666 97.882 0.57666C101.37 0.57666 106.995 1.47653 110.258 2.48888C113.408 3.50123 119.371 6.42581 123.309 8.90044C127.359 11.4876 132.872 15.9869 135.572 19.1364C138.385 22.1735 142.66 27.7977 145.135 31.5096C147.723 35.2216 153.124 45.3451 157.286 54.0064C161.449 62.6676 165.837 73.2411 167.187 77.6279C168.987 83.5895 169.55 88.6513 169.55 98.0999C169.55 107.886 168.987 112.61 167.187 118.347C165.949 122.621 164.374 127.121 163.812 128.47C163.249 129.933 162.799 132.295 162.799 133.87C162.799 135.444 162.124 138.032 161.224 139.719C160.324 141.519 158.974 145.118 158.299 147.93C157.511 150.742 156.274 154.679 155.374 156.591C154.474 158.616 153.799 161.428 153.799 162.778C153.799 164.24 153.011 167.39 152.111 169.864C151.211 172.339 150.536 176.501 150.423 179.088C150.423 181.788 150.086 184.15 149.523 184.375C149.073 184.6 148.061 188.987 147.273 194.161C146.486 199.335 145.36 206.422 144.798 209.796C144.235 213.171 142.998 223.294 141.985 232.293C141.085 241.292 139.398 251.415 138.272 254.79C137.147 258.164 135.235 263.001 133.885 265.475C132.647 267.95 129.722 272.337 127.472 275.262C125.221 278.299 123.421 281.111 123.421 281.786C123.421 282.46 121.284 285.048 118.584 287.747C115.996 290.447 109.583 294.946 104.295 297.871C98.4446 301.02 92.1441 303.607 87.9813 304.395C83.3685 305.182 78.6432 305.182 73.3553 304.507C68.5174 303.832 61.992 301.808 56.4791 299.333C51.5287 296.971 46.2408 294.046 44.7782 292.697C43.3156 291.347 39.0403 286.172 35.3275 281.223C31.6148 276.274 26.6644 268.175 24.4143 263.226C22.1641 258.277 19.1264 250.965 17.6638 246.916C16.3137 242.866 13.726 233.755 11.8133 226.669C10.0132 219.582 7.31303 207.884 5.85042 200.797C4.38782 193.711 2.58769 182.013 1.80013 174.926C1.01257 167.84 0.337524 152.317 0.337524 140.619C0.337524 127.796 1.12508 113.173 2.25016 104.062C3.26273 95.7378 4.61283 86.0642 5.28788 82.6897C5.96293 79.3152 7.98807 73.0161 9.90071 68.6292C12.1509 63.1175 16.2012 57.1559 23.1767 48.9446C28.9146 42.0831 38.1402 32.8594 45.3408 27.0103C52.9913 20.5987 61.4294 14.8621 67.7299 11.6001C73.2428 8.78796 79.8807 5.86339 82.3559 5.076Z" fill="#030303"/>
                        <path class="bicep" NAME="bicep" d="M72.7927 19.3613C76.1679 17.674 82.2433 15.3119 86.2936 14.0745C91.5815 12.4998 96.0818 11.9373 102.607 12.1623C109.92 12.4998 112.508 13.0622 116.671 15.5368C119.484 17.2241 123.534 20.2611 125.671 22.2858C127.809 24.423 131.634 28.5849 134.222 31.622C136.81 34.659 140.635 40.0582 142.885 43.6577C145.248 47.1447 147.498 51.1941 148.061 52.6564C148.623 54.0062 150.873 58.9555 153.011 63.5673C155.149 68.1791 158.074 76.1655 159.311 81.3397C160.661 86.4015 161.674 93.9379 161.674 98.2122C161.562 102.374 160.886 108.561 160.099 111.935C159.199 115.31 156.499 124.421 153.911 132.182C151.323 139.944 148.848 147.03 148.511 147.93C148.173 148.83 147.723 150.067 147.611 150.742C147.498 151.417 147.273 152.317 147.048 152.992C146.935 153.667 146.71 154.567 146.598 155.241C146.485 155.916 145.923 158.841 145.36 161.878C144.685 164.803 143.898 167.502 143.335 167.727C142.885 167.952 142.773 168.627 143.11 169.302C143.448 169.977 143.223 173.126 142.66 176.276C142.098 179.538 141.085 186.849 140.298 192.361C139.622 197.873 138.385 206.759 137.485 212.046C136.697 217.332 135.347 225.881 134.672 231.168C133.885 236.455 132.872 242.754 132.309 245.228C131.634 247.703 130.734 250.74 130.284 251.977L130.171 252.227C129.531 253.636 128.058 256.879 126.684 259.626C125.221 262.551 123.646 264.913 123.196 264.913C122.634 264.913 122.521 265.25 122.746 265.813C122.971 266.263 122.184 268.4 120.834 270.65C119.484 272.899 116.896 276.611 114.983 278.861C113.071 281.223 110.595 284.148 109.358 285.497C108.12 286.847 106.095 288.534 104.857 289.322C103.62 290.109 99.7946 292.021 96.4194 293.596C93.0441 295.171 87.9812 296.746 85.1685 297.083C82.3559 297.421 76.8429 297.083 72.7927 296.408C68.7424 295.621 62.6669 294.046 59.2917 292.696C55.9165 291.347 51.6411 288.759 49.7285 286.847C47.8159 284.935 43.5406 279.086 40.0528 273.912C36.4526 268.512 32.2898 260.414 30.4896 255.352C28.802 250.403 27.1144 245.903 26.6644 245.228C26.2143 244.553 24.8642 240.841 23.6266 236.792C22.2765 232.743 20.8139 227.456 20.1389 224.981C19.4638 222.507 18.4513 218.457 17.7762 215.983C17.1012 213.508 16.0886 207.996 15.4135 203.609C14.851 199.223 14.0634 194.498 13.7259 192.923C13.3884 191.349 12.6008 185.837 12.0383 180.55C11.4758 175.264 10.5757 168.514 9.90065 165.365C9.33811 162.328 8.55055 150.63 8.21303 139.494C7.8755 128.358 8.10052 113.735 8.66306 106.873C9.33811 99.8995 10.3507 94.0504 11.1382 93.4879C11.9258 92.813 12.3758 90.4509 12.2633 88.0887C12.1508 85.7266 12.4883 82.9145 13.0509 81.9021C13.6134 80.7773 15.1885 77.6278 16.5386 74.8157C17.8887 72.0036 23.7391 63.9048 29.4771 56.8183C35.1025 49.7318 41.8529 42.0829 44.3281 39.9458C46.8033 37.8086 49.7285 35.2214 50.9661 34.3216C52.0912 33.4217 56.1415 30.2722 59.8542 27.5726C63.567 24.7605 69.4174 21.0485 72.7927 19.3613Z" fill="#F8F8F8"/>
                    </svg>
                    <svg class="svg-antebrazo-anterior" width="848" height="413" viewBox="0 0 848 413" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M847.828 152.091C847.598 156.124 847.483 153.099 847.483 145.368C847.483 137.636 847.598 134.387 847.828 138.084C848.057 141.782 848.057 148.057 847.828 152.091Z" fill="#FEFEFE"/>
                        <path d="M67.463 325.769C67.348 332.828 67.1182 327.337 67.1182 313.443C67.1182 299.549 67.348 293.722 67.463 300.557C67.6928 307.393 67.6928 318.71 67.463 325.769Z" fill="#FEFEFE"/>
                        <path d="M777.721 401.403C777.491 405.1 777.376 402.523 777.376 395.8C777.376 389.077 777.491 385.94 777.721 389.077C777.951 392.103 777.951 397.705 777.721 401.403Z" fill="#FEFEFE"/>
                        <path d="M64.9345 412.832C62.4061 413.056 58.8433 413.056 56.8895 412.832C54.9358 412.608 57.1194 412.384 61.4867 412.384C65.854 412.384 67.463 412.608 64.9345 412.832Z" fill="#FEFEFE"/>
                        <path d="M820.59 4.18402C821.164 4.18402 822.084 3.17557 822.428 1.83096C822.888 0.598409 823.808 -0.185944 824.497 0.0381566C825.187 0.262257 825.876 3.62377 826.106 7.65759C826.221 11.5794 827.37 23.1205 828.635 33.3171C829.899 43.5137 831.738 56.3995 832.657 61.89C833.462 67.3805 836.565 81.835 839.323 93.8244C842.196 105.814 845.069 119.148 845.874 123.518C846.908 129.232 847.138 142.678 846.678 172.26C846.334 194.782 845.529 218.649 844.725 225.484C844.035 232.319 843.001 241.619 842.311 246.213C841.737 250.807 840.128 261.228 838.978 269.183C837.714 277.139 836.22 285.991 835.53 288.792C834.956 291.593 833.921 299.885 833.232 307.28C832.542 314.676 831.508 325.881 830.933 332.156C830.244 338.542 829.324 348.851 828.635 355.126C828.06 361.513 827.026 372.718 826.336 380.113C825.187 393.223 825.072 393.671 821.394 396.697C819.325 398.377 815.648 401.179 813.119 402.971C810.591 404.764 805.419 407.229 801.626 408.574C796.455 410.479 792.777 410.927 778.641 410.367L779.1 388.517C779.33 376.528 779.56 343.473 779.675 315.124C779.675 286.775 779.33 255.289 778.871 245.092C778.411 234.896 777.262 218.536 776.227 208.676C775.308 198.816 774.044 184.921 773.354 177.862C772.779 170.803 771.745 161.167 771.17 156.573C770.596 151.979 769.561 142.678 768.872 135.843C768.182 129.008 766.918 117.467 765.884 110.072C764.964 102.676 763.815 93.8244 763.24 90.4629C762.666 86.9893 762.666 83.4037 763.24 82.2832C763.815 81.2747 767.263 78.1373 770.826 75.4481C774.503 72.8709 780.02 67.8287 783.238 64.5792C786.341 61.2177 791.857 54.1585 795.42 49.0042C798.868 43.7378 803.925 35.4461 806.453 30.5159C808.982 25.5857 813.004 17.6301 815.303 12.8119C817.602 8.10579 820.015 4.18402 820.59 4.18402Z" fill="black"/>
                        <path d="M21.0319 14.1565C21.2618 8.89014 21.8364 3.95992 22.4111 3.17557C22.8708 2.50327 23.9051 2.05506 24.5947 2.27917C25.2843 2.50327 30.8008 11.9155 36.7771 23.3446C42.7534 34.6617 50.3387 47.7716 53.5567 52.3657C56.8896 57.1839 64.9346 65.9238 85.6217 84.9724L82.4037 107.607C80.6798 120.044 78.4962 136.291 77.5768 143.687C76.6573 151.082 75.3931 162.063 74.7035 168.002C74.1289 174.052 73.5543 183.017 73.5543 187.947C73.5543 192.877 73.0945 198.031 72.405 199.376C71.8303 200.833 70.4512 217.528 69.4168 236.689C68.3825 255.737 67.2332 285.319 67.0033 302.238C66.6585 319.158 67.0033 342.912 67.6929 354.902C68.4974 366.891 69.4168 383.363 69.7616 391.318C70.1064 399.274 70.1064 407.229 69.7616 408.91C68.9571 411.936 68.7273 412.048 61.7166 412.048C56.7747 411.936 52.1775 411.039 46.5461 408.91C42.0638 407.229 35.8577 403.98 32.7546 401.739C29.5366 399.498 26.0888 396.809 25.0544 395.688C23.7902 394.232 22.7558 390.086 21.9513 383.475C21.3767 377.872 20.2274 367.339 19.5378 359.944C18.8483 352.549 17.4691 339.439 16.5497 330.811C15.6303 322.183 14.3661 310.082 13.7914 303.919C13.1019 297.756 12.0675 289.689 11.4929 285.991C10.8474 282.53 9.49717 273.67 8.2903 265.75L8.045 264.141C6.66585 255.849 4.94193 242.963 4.0225 235.568C3.10307 228.173 1.83886 210.469 1.14929 196.351C0.574643 182.232 0 162.735 0 153.211C0 142.902 0.689571 131.585 1.72393 125.198C2.75828 119.372 5.05685 107.719 7.01064 99.4269C8.8495 91.1352 11.3779 80.0422 12.6421 74.7758C13.9064 69.5094 15.6303 60.9936 16.5497 55.7272C17.4691 50.4608 18.7333 41.1607 19.4229 34.9979C20.1125 28.8351 20.8021 19.4229 21.0319 14.1565Z" fill="black"/>
                        <path class="antebrazo-anterior" NAME="antebrazo-anterior" d="M799.558 62.4504C801.397 59.6491 806.568 50.461 810.936 42.0572V41.9451C815.188 33.5414 819.211 26.5942 819.67 26.5942C820.13 26.5942 820.82 30.7401 821.279 35.7824C821.624 40.9367 822.888 49.5646 824.038 55.1671C825.187 60.6576 828.635 75.7844 831.853 88.7822C835.186 102.34 838.174 117.579 838.863 124.638C839.553 131.361 840.128 151.867 840.128 170.019C840.128 191.757 839.438 208.228 838.289 218.2C837.369 226.492 836.105 236.353 835.53 240.05C834.956 243.748 833.806 252.264 832.772 259.099C831.853 265.822 830.474 276.467 829.784 282.629L829.669 283.659C828.983 289.789 828.023 298.378 827.37 303.359C826.681 308.625 825.532 318.374 824.612 325.209C823.693 331.932 822.429 343.585 821.739 350.98C820.935 358.376 819.67 368.684 818.866 373.951C818.061 379.217 816.797 384.819 816.107 386.5C815.418 388.293 812.085 391.543 808.752 394.008C805.534 396.361 801.167 399.05 799.328 400.058C797.489 400.955 794.156 401.963 792.087 402.411C789.636 402.86 788.218 402.598 787.835 401.627C787.605 400.955 787.146 362.185 786.801 315.684C786.571 254.617 785.881 223.467 784.617 203.634C783.583 188.507 782.204 169.346 781.514 161.055C780.939 152.763 780.135 144.695 779.79 143.127C779.445 141.558 778.181 130.017 776.802 117.355C775.423 104.693 774.388 93.1522 774.388 91.5835C774.273 89.5666 777.147 85.981 785.192 78.1374C791.168 72.3108 797.604 65.2516 799.558 62.4504Z" fill="#FEFEFE"/>
                        <path class="antebrazo-anterior" NAME="antebrazo-anterior" d="M25.2844 47.4356C25.859 43.0657 26.4336 37.127 26.5486 34.2137C26.6635 30.6281 27.1232 28.9473 28.0426 29.1714C28.7322 29.5075 32.6398 36.0065 36.7772 43.738C40.9146 51.4694 46.4312 61.1058 49.0746 65.0275C51.7179 68.8373 58.2688 76.3446 63.7854 81.611C72.52 90.0148 73.6693 91.5835 73.6693 95.0571C73.5543 97.186 73.0946 101.444 72.52 104.581C71.9453 107.607 70.796 115.45 70.1065 121.949C69.4169 128.448 68.3825 139.205 67.693 146.04C67.0034 152.763 66.3138 160.831 65.969 163.968C65.6243 166.993 64.9347 177.638 64.2451 187.499C63.6705 197.359 62.9809 207.892 62.866 211.029C62.6361 214.055 62.0615 217.416 61.4868 218.313C61.0271 219.209 60.6823 258.539 60.9122 305.712C61.0271 352.885 61.257 393.896 61.4868 402.636L56.8897 402.411C54.3613 402.299 51.0283 401.515 49.4193 400.731C47.8103 399.834 44.4774 397.929 41.949 396.361C39.4206 394.792 35.6279 391.206 33.4443 388.517C29.7666 383.923 29.3069 382.578 27.9277 370.701C27.1232 363.642 25.859 352.213 25.2844 345.49C24.5948 338.767 23.5604 329.13 22.9858 324.2C22.4111 319.27 21.1469 308.177 20.2275 299.549C19.3081 290.921 17.9289 279.604 17.2394 274.338C16.5498 269.071 15.4005 261.788 14.7109 258.09C14.0214 254.393 12.987 246.773 12.4124 241.283C11.8377 235.68 11.1481 227.949 10.8034 223.915C10.5735 219.881 9.769 210.357 9.19436 202.625C8.61972 194.894 8.04507 175.509 8.04507 159.486C7.93014 139.205 8.50479 126.655 9.65407 118.027C10.6884 111.192 13.4467 97.6342 16.0901 87.7738C18.6185 77.9133 21.4917 66.5962 22.4111 62.5624C23.3306 58.5286 24.7097 51.8056 25.2844 47.4356Z" fill="#FEFEFE"/>
                    </svg>
                    <svg class="svg-antebrazo-posterior" width="804" height="407" viewBox="0 0 804 407" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M803.778 336.7C803.481 339.956 803.185 338.032 803.185 332.26C803.185 326.488 803.481 323.972 803.778 326.34C804.074 328.708 804.074 333.444 803.778 336.7Z" fill="white"/>
                        <path d="M704.22 115.44C703.776 92.204 703.035 56.832 702.59 36.704V36.556C702.146 16.428 702.294 0 702.887 0C703.479 0 705.85 3.108 708.072 6.956C710.294 10.952 718.443 19.684 725.998 26.64C734.887 34.632 742.147 39.812 745.851 40.996C748.962 42.032 759.036 43.512 767.925 44.4C777.11 45.436 784.666 46.768 785.259 47.804C785.851 48.84 786.444 54.908 786.444 61.42C786.444 67.932 787.037 75.628 787.925 78.44C788.666 81.252 790 94.276 790.74 107.3C791.481 120.324 792.814 137.936 793.703 146.52C794.592 155.104 795.926 169.312 796.666 178.34C797.407 187.368 799.185 204.536 800.518 216.82C802.741 235.32 803.037 252.34 802.889 319.68C802.741 388.648 802.444 400.784 800.518 403.596C798.592 406.556 796.963 407 789.851 407C784.666 407 778.888 405.816 775.333 404.188C772.073 402.708 768.221 400.192 766.74 398.712C764.962 396.788 763.629 391.756 762.592 382.58C761.851 375.18 760.518 364.968 759.629 359.64C758.74 354.312 757.11 346.616 755.777 342.62C754.443 338.476 752.962 334.48 752.369 333.74C751.777 332.852 749.406 327.672 747.184 321.9C745.11 316.128 741.554 307.544 739.628 302.66C737.554 297.776 735.184 292.152 734.295 290.08C733.554 288.008 731.924 284.604 730.739 282.236C729.554 280.016 728.665 277.056 728.665 275.576C728.665 274.244 728.072 272.32 727.332 271.58C726.443 270.692 725.258 267.436 724.369 264.18C723.48 260.924 721.257 251.896 719.183 244.2C717.257 236.504 713.85 222.444 711.776 213.12C709.702 203.796 707.331 187.368 706.591 176.86C705.702 166.352 704.665 138.676 704.22 115.44Z" fill="black"/>
                        <path class="antebrazo-posterior"  NAME="antebrazo-posterior" d="M713.85 148.74C713.109 130.092 712.22 95.6081 711.924 72.0761C711.776 48.6921 712.072 29.6001 712.665 29.6001C713.406 29.6001 717.406 32.8561 721.554 36.8521C725.85 40.7001 731.776 45.1401 734.591 46.3241C737.406 47.6561 743.036 49.7281 747.184 51.0601C751.184 52.2441 758.74 53.2801 763.777 53.2801C770.147 53.2801 773.851 54.0201 775.333 55.5001C776.814 56.9801 777.555 60.8281 777.555 67.7841C777.555 73.2601 778.888 88.9481 780.518 102.86L780.766 105.187C782.253 119.148 784.442 139.7 785.703 152.44C786.888 165.908 787.926 181.448 787.926 187.22C787.926 192.992 788.963 206.608 790.148 217.56C791.777 232.508 792.37 257.816 792.37 318.644C792.37 394.716 792.222 399.6 789.703 399.6C788.37 399.6 784.37 397.824 780.814 395.9C777.407 393.828 773.555 390.128 772.37 387.76C771.184 385.244 769.555 375.92 768.814 366.744C768.073 357.568 766.295 347.06 764.962 343.36C763.629 339.66 760.073 330.78 757.258 323.38C754.443 316.128 751.184 307.692 750.147 304.88C749.069 302.322 746.765 296.335 744.685 290.93L744.073 289.34C741.851 283.568 738.888 275.28 737.258 270.84C735.628 266.4 733.406 259.444 732.221 255.3C731.036 251.304 728.813 243.312 727.184 237.54C725.702 231.768 723.035 221.852 721.406 215.34C719.776 208.828 717.85 198.912 716.961 193.14C716.072 187.368 714.739 167.388 713.85 148.74Z" fill="white"/>
                        <path d="M98.5787 91.0201C98.4306 97.5321 98.1343 92.5001 98.1343 79.9201C98.1343 67.3401 98.4306 62.0121 98.5787 68.0801C98.875 74.1481 98.875 84.5081 98.5787 91.0201Z" fill="white"/>
                        <path d="M78.5784 21.164C86.5786 12.728 93.0972 5.32796 93.0972 4.43996C93.0972 3.55196 93.838 2.95996 94.7269 2.95996C95.6158 2.95996 96.6528 5.47596 97.0973 8.43596C97.5417 11.544 97.838 39.368 97.6899 70.3C97.6899 101.232 96.801 142.524 96.0602 162.06C94.875 188.404 93.838 200.244 91.6157 207.94C90.1342 213.712 87.7638 223.628 86.4304 230.14C85.0971 236.652 83.0229 244.644 81.8377 247.9C80.8007 251.156 79.7636 255.3 79.7636 257.224C79.7636 259 79.171 261.664 78.2821 263.144C77.5414 264.476 74.8746 270.692 72.3561 276.76C69.8375 282.828 67.1708 289.192 66.43 290.82C65.6893 292.448 63.6152 297.48 61.9855 301.92C60.3558 306.36 57.9854 312.132 56.8002 314.5C55.7631 316.868 53.3927 322.936 51.6149 327.82C49.8371 332.704 47.4667 339.068 46.2815 341.88C45.2444 344.692 43.3185 354.016 41.9851 362.6C40.7999 371.184 39.7628 381.1 39.7628 384.8C39.911 389.24 39.0221 392.2 37.2443 393.976C35.7628 395.308 31.6145 397.824 27.9108 399.304C24.207 400.932 17.5402 402.56 13.0956 402.856C7.61406 403.3 4.35473 402.856 3.16953 401.524C2.13247 400.488 0.94726 396.788 0.354655 393.384C-0.0897978 389.832 -0.0897978 351.648 0.206504 308.58C0.502806 249.824 1.39171 224.22 3.16953 206.46C4.50288 193.436 5.53994 177.452 5.68809 170.94C5.68809 164.428 7.02145 145.78 8.65111 129.5C10.2808 113.22 12.6512 91.612 13.8364 81.4C15.0216 71.188 16.0587 59.348 16.0587 55.204C16.0587 50.912 16.6513 47.36 17.5402 47.36C18.4291 47.36 25.6885 46.324 33.8368 45.14C41.9851 43.956 49.8371 42.328 51.3186 41.588C52.652 40.848 56.0595 39.368 58.8743 38.184C61.8373 37.148 70.1338 29.896 78.5784 21.164Z" fill="black"/>
                        <path class="antebrazo-posterior" NAME="antebrazo-posterior" d="M65.6895 45.1401C71.3192 42.4761 78.7267 37.4441 81.9861 34.1881C85.0972 30.7841 88.3566 28.1201 89.0973 28.1201C89.9862 28.1201 90.1344 52.6881 89.5418 92.7961C88.9492 128.464 87.6158 167.24 86.5788 179.08C85.3935 190.92 83.1713 205.572 81.5416 211.64C79.912 217.708 77.0971 228.068 75.3193 234.58C73.5415 241.092 71.4673 248.344 71.0229 250.86C70.4303 253.228 68.6525 258.556 67.171 262.7C65.6895 266.696 63.0227 274.096 61.2449 278.98C59.319 283.864 54.7263 295.852 50.8743 305.62C47.1706 315.388 43.1705 325.304 42.1334 327.82C41.0964 330.188 39.1704 335.96 37.8371 340.4C36.5037 344.84 34.4296 356.532 33.0962 366.3C31.911 376.068 29.8369 385.54 28.6517 387.316C27.4665 389.24 23.1701 392.348 19.0219 394.42C12.7995 397.528 11.4662 397.824 10.8736 395.9C10.4291 394.716 10.1328 358.16 10.1328 314.796C10.1328 257.52 10.7254 228.216 12.3551 207.2C13.6884 191.364 15.9107 162.948 17.6885 144.3C19.3182 125.652 21.2441 105.228 21.9849 99.1601C22.8738 93.0921 23.9109 81.6961 24.3553 74.0001C24.9479 66.3041 25.8368 58.9041 26.5776 57.7201C27.3183 56.3881 32.9481 54.4641 41.5408 52.8361C49.6891 51.3561 59.4671 48.2481 65.6895 45.1401Z" fill="white"/>
                    </svg>
                    <svg class="svg-oblicuos" width="804" height="667" viewBox="0 0 804 667" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5502 44.1617C22.5502 33.279 21.9194 18.9265 21.2886 12.3022V12.1445C20.6578 5.52022 20.5001 0 21.1309 0C21.604 0 24.4425 1.57721 27.281 3.46985C29.9618 5.3625 34.2195 8.83235 36.7426 11.3559C39.108 13.7217 41.0003 16.2452 41.0003 16.8761C41.158 17.6647 48.0965 24.9198 56.6119 33.1213C65.1274 41.3228 75.8505 51.2592 80.4237 55.2022C84.9968 59.1452 99.0315 72.236 111.647 84.3805C124.262 96.5249 142.555 114.032 152.016 123.495C161.636 132.801 169.836 140.371 170.309 140.371C170.782 140.371 182.609 151.885 196.801 166.08C210.836 180.117 222.348 192.577 222.348 193.523C222.348 194.627 223.136 195.731 224.082 195.889C225.186 196.204 226.132 202.513 226.763 212.134C227.079 220.966 226.605 233.742 225.659 241.312C224.555 248.725 222.979 257.873 222.19 261.816C221.402 265.759 219.982 282.004 219.036 298.092C218.09 314.179 216.671 327.901 215.882 328.847C215.094 329.794 213.675 335.787 212.728 342.254C211.94 348.72 210.363 361.811 209.417 371.432C208.471 381.053 207.84 398.717 208.155 410.862C208.313 423.006 208.471 455.339 208.471 482.625C208.628 509.91 208.155 536.881 207.367 542.559C206.736 548.236 205.159 554.23 204.055 555.965C202.794 557.7 201.848 561.958 201.848 565.428C201.848 568.898 201.059 576.311 200.271 581.989C199.324 587.667 197.748 595.237 196.644 599.022C195.698 602.65 194.278 605.647 193.49 605.647C192.859 605.647 192.386 607.382 192.386 609.59C192.386 612.429 188.759 617.318 180.244 626.15C173.463 633.248 167.313 638.768 166.367 638.768C165.42 638.61 163.686 639.714 162.424 641.134C161.163 642.553 153.278 647.758 145.078 652.49C136.878 657.379 126.943 662.111 123.001 662.899C119.059 663.688 105.655 664.634 93.0391 664.95C72.8544 665.581 69.8582 665.265 67.3351 662.899C65.2851 660.849 64.6543 658.956 65.4428 656.117C66.0735 653.909 67.1774 642.238 67.9659 630.093C68.5966 617.949 69.7005 604.858 70.3313 600.915C70.8044 596.972 72.0659 592.871 73.1698 591.61C74.1159 590.348 75.3775 580.411 76.0082 569.529C76.4813 558.646 77.5852 543.347 78.3736 535.619C79.0044 528.048 80.1083 521.424 80.8967 521.109C81.5275 520.793 82.0006 516.062 82.0006 510.541C82.0006 505.179 82.789 499.974 83.7352 499.185C84.8391 498.081 85.6275 479.313 86.2583 443.983C87.2045 395.721 87.0468 389.885 84.5237 384.838C83.1044 381.841 82.0006 378.371 82.0006 377.267C82.0006 376.321 81.3698 374.113 80.5813 372.536C79.7929 371.116 78.3736 367.016 77.2698 363.546C76.3236 360.076 71.2774 348.562 66.0735 337.837C61.0274 327.27 56.7696 317.649 56.7696 316.545C56.7696 315.599 54.8773 311.025 52.8273 306.766C50.6196 302.35 48.885 297.776 49.0427 296.515C49.0427 295.253 47.9388 293.045 46.5196 291.783C45.1003 290.521 43.9965 288.786 43.9965 287.84C44.1542 286.894 40.3695 278.534 35.6387 268.913C30.9079 259.293 25.8617 248.725 24.4425 245.255C22.8655 241.786 18.4501 231.849 14.5078 223.175C10.4078 214.5 5.51927 204.721 3.62695 201.409C0.630774 196.52 0 193.365 0 181.694C0 173.808 0.946161 165.291 2.3654 161.664C3.62695 158.194 4.57311 150.939 4.7308 145.418C4.7308 138.479 5.67696 134.22 7.88467 130.435C9.6193 127.754 11.0385 122.864 11.0385 119.868C11.0385 116.871 12.1424 112.928 13.4039 111.193C14.8232 109.458 15.7693 106.777 15.7693 105.2C15.7693 103.78 16.7155 100.941 17.9771 98.8908C19.2386 96.9981 20.6578 88.3235 21.2886 79.6489C22.0771 70.9742 22.5502 55.0445 22.5502 44.1617Z" fill="black"/>
                        <path d="M716.717 61.0378C729.648 48.8934 748.728 30.1246 759.294 19.5573C769.702 8.99007 779.163 0.315441 780.267 0.315441C781.686 0.157721 782.002 2.52353 781.529 9.14779C781.213 14.1948 779.952 25.0776 778.848 33.279C777.113 46.5275 777.271 50.9437 780.109 72.7092C781.844 86.1154 784.209 99.6794 785.313 102.676C786.417 105.673 787.836 109.616 788.625 111.351C789.256 113.086 790.675 117.659 791.621 121.603C792.725 125.546 794.144 132.643 794.933 137.375C795.563 142.106 796.825 149.677 797.456 154.251C798.086 158.667 799.663 163.398 800.767 164.502C802.029 165.764 802.66 171.284 802.66 180.275C802.66 188.003 802.186 194.469 801.556 194.785C800.767 195.1 797.929 199.674 795.248 205.037C792.409 210.241 790.044 215.604 790.044 216.55C790.044 217.654 787.836 223.175 785.313 228.852C782.633 234.53 779.794 240.208 779.006 241.47C778.375 242.732 773.013 253.299 767.336 264.655C761.659 276.169 756.928 286.894 756.928 288.313C756.928 289.89 755.825 292.572 754.563 294.306C753.144 296.041 752.198 298.407 752.198 299.354C752.198 300.458 749.359 307.24 745.89 314.337C742.421 321.592 739.582 328.059 739.582 329.005C739.582 329.951 736.113 337.837 731.698 346.67C727.44 355.66 723.813 364.019 723.813 365.281C723.813 366.542 722.709 369.224 721.447 371.116C720.186 373.167 718.294 379.002 717.347 384.207C716.559 389.412 715.455 402.976 714.982 414.174C714.509 425.372 714.982 448.873 715.771 466.222C716.717 483.571 717.978 502.655 718.767 508.806C719.397 514.957 720.659 520.951 721.447 522.213C722.236 523.474 723.497 530.887 724.128 538.773C724.759 546.659 726.021 559.119 726.967 566.69C727.755 574.418 728.859 581.042 729.174 581.673C729.648 582.462 730.121 591.452 730.121 601.861C730.278 614.006 731.067 621.892 732.486 623.942C733.59 625.677 734.851 631.671 735.324 637.349C735.798 643.026 736.744 650.124 737.375 653.121C738.005 656.59 737.532 659.903 736.113 662.268C734.063 665.738 733.274 665.896 711.986 665.896C695.27 665.896 688.805 665.265 685.178 663.372C682.655 662.111 678.239 661.007 675.716 661.007C672.878 661.164 669.724 659.745 667.832 657.852C666.097 656.117 661.682 653.436 658.055 651.859C654.27 650.439 651.274 648.704 651.274 647.916C651.274 647.285 650.17 646.812 648.909 646.812C647.647 646.812 646.543 646.339 646.543 645.55C646.543 644.919 644.178 643.5 641.497 642.238C638.658 640.976 632.193 635.929 626.989 631.198C621.943 626.308 616.108 619.842 614.216 616.845C612.324 613.848 609.17 606.751 607.435 601.073C605.543 595.395 603.02 587.036 601.6 582.462C600.339 578.046 599.235 570.002 599.235 564.797C599.235 559.592 598.762 555.018 598.131 554.703C597.343 554.388 596.239 549.656 595.293 544.136C594.504 538.616 594.031 510.541 594.189 481.994C594.347 453.446 594.662 421.745 594.662 411.808C594.82 401.872 594.189 382.63 593.085 369.224C592.139 355.817 590.562 343.358 589.773 341.623C588.985 339.888 588.039 334.841 587.566 330.582C587.093 326.166 585.989 317.018 585.043 310.079C584.096 303.139 582.835 290.994 582.046 283.266C581.258 275.538 579.839 262.289 578.735 254.088C577.789 245.886 576.212 235.477 575.266 231.218C574.319 226.802 574.004 219.389 574.32 214.658C574.793 209.926 576.527 202.355 578.419 198.097C581.258 191.63 590.247 182.009 626.674 146.049C651.274 121.76 676.189 97.7867 682.182 92.5819C688.174 87.5349 703.628 73.34 716.717 61.0378Z" fill="black"/>
                        <path class="oblicuos"  NAME="oblicuos" d="M30.1195 80.4374C30.9079 74.7594 32.0118 61.1955 32.4849 50.155V49.9973C32.958 38.9569 34.0618 29.9668 34.8503 29.9668C35.6388 29.9668 44.3119 38.0105 54.2466 47.6315C64.0236 57.4102 77.2698 70.0278 83.7352 75.7057C90.043 81.3837 103.447 94.159 113.697 104.095C123.789 114.032 138.297 127.911 145.866 134.851C153.436 141.791 165.578 153.304 172.832 160.402C180.086 167.657 186.551 173.492 187.34 173.492C187.971 173.492 189.39 175.07 190.336 176.962C191.44 179.013 194.121 181.694 196.328 182.956C198.536 184.217 200.271 185.637 200.271 186.11C200.271 186.583 202.478 189.422 205.159 192.419C207.682 195.416 210.994 200.463 212.413 203.459C214.621 208.033 214.936 214.027 214.778 239.735C214.621 258.031 213.832 271.121 212.886 272.068C211.94 272.856 211.309 277.903 211.309 283.108C211.309 288.313 210.678 294.78 209.732 297.303C208.944 299.827 207.525 308.028 206.578 315.441C205.632 322.854 204.213 334.21 203.425 340.676L203.301 341.686C202.539 347.943 201.657 355.183 201.059 358.025C200.586 361.022 199.009 370.328 197.748 378.529C195.54 391.462 195.54 402.503 197.117 461.332C198.378 508.491 198.378 532.464 197.275 540.193C196.328 546.344 195.225 554.072 194.751 557.542C194.278 561.012 193.332 567.794 192.544 572.525C191.755 577.257 190.021 585.143 188.601 589.875C187.024 594.606 185.605 600.126 185.132 602.019C184.817 604.069 183.871 605.647 182.924 605.647C181.978 605.647 181.347 607.066 181.347 608.801C181.347 610.694 176.301 617.003 169.52 623.784C163.055 630.251 157.22 635.614 156.59 635.614C155.801 635.456 154.54 636.402 153.593 637.506C152.49 638.61 148.39 641.292 144.447 643.5C140.347 645.708 137.193 647.916 137.193 648.547C137.193 649.335 136.247 649.808 134.986 649.808C133.724 649.808 131.674 650.755 130.57 651.859C129.466 653.12 125.997 654.54 123.001 655.171C120.005 655.959 108.493 656.748 77.2698 657.694L77.4275 644.604C77.4275 637.506 78.216 628.043 79.0044 623.784C79.9506 619.368 81.3698 608.012 82.1583 598.549C83.1045 589.086 84.366 572.683 85.1545 562.273C85.7853 551.864 87.2045 538.458 88.3084 532.307C89.2545 526.156 90.6738 519.058 91.4622 516.535C92.4084 514.011 93.0392 508.964 93.0392 505.494C93.0392 502.024 93.6699 498.397 94.4584 497.608C95.4046 496.662 96.193 473.161 96.5084 440.513C96.8238 397.298 96.5084 384.522 94.9315 382.945C93.8276 381.841 93.0392 379.318 93.0392 377.267C93.0392 375.375 91.3045 370.485 89.0968 366.227C86.8891 362.126 85.1545 357.237 85.1545 355.186C85.1545 353.294 84.5237 351.717 83.5776 351.717C82.6314 351.717 82.0006 350.455 82.0006 348.878C82.0006 347.458 80.1083 341.623 77.7429 335.945C75.3775 330.267 72.8544 325.535 72.2236 325.22C71.4352 325.062 70.9621 323.485 70.9621 321.75C70.9621 320.015 69.2275 315.441 67.0197 311.498C64.812 307.555 63.0774 303.296 63.0774 302.035C63.0774 300.773 62.4466 299.669 61.5005 299.669C60.5543 299.669 59.9235 298.092 59.9235 296.041C59.9235 294.149 58.8197 291.152 57.5581 289.417C56.1389 287.682 55.1927 285.001 55.1927 283.424C55.1927 282.004 54.562 280.742 53.6158 280.742C52.6696 280.742 52.0389 279.007 52.0389 276.799C52.0389 274.591 51.4081 272.856 50.4619 272.856C49.5158 272.856 48.885 271.595 48.885 270.017C48.885 268.598 47.7811 265.917 46.5196 264.182C45.1004 262.447 44.1542 259.766 44.1542 258.188C44.1542 256.769 43.6811 255.349 43.0503 255.034C42.2619 254.876 39.8965 250.776 37.5311 246.044C35.008 241.312 33.1157 236.423 33.1157 235.319C33.1157 234.373 32.4849 233.426 31.5387 233.426C30.5926 233.426 29.9618 231.691 29.9618 229.483C29.9618 227.275 29.331 225.54 28.3849 225.54C27.4387 225.54 26.8079 224.594 26.8079 223.49C26.8079 222.544 25.0733 217.97 23.0233 213.711C20.9733 209.295 17.3463 201.724 15.1386 196.677C11.827 189.58 11.0386 185.321 11.0386 176.174C11.1963 170.023 12.6155 157.405 14.3501 148.257C16.0848 139.109 17.8194 129.331 18.2925 126.492C18.6079 123.811 19.554 121.129 20.5002 120.656C21.4463 120.183 22.0771 118.29 22.0771 116.24C22.0771 114.347 22.7079 112.139 23.4964 111.193C24.4425 110.247 25.8618 105.357 26.8079 100.152C27.7541 94.9476 29.331 86.1153 30.1195 80.4374Z" fill="white"/>
                        <path class="oblicuos" NAME="oblicuos" d="M721.132 74.2863C721.763 74.2863 732.013 64.3499 743.998 52.3631C755.825 40.2186 766.39 30.2822 767.494 30.2822C768.913 30.1245 769.702 35.9602 770.175 50.9436C770.648 62.4572 771.279 76.6521 771.909 82.4877C772.382 88.4811 773.486 93.2127 774.275 93.2127C775.063 93.2127 775.852 95.894 775.852 99.0484C776.009 102.361 777.113 108.669 778.69 113.086C780.109 117.659 782.002 121.918 782.633 122.549C783.263 123.337 783.736 126.176 783.736 128.7C783.736 131.223 784.367 134.062 784.998 135.009C785.786 135.955 787.363 142.895 788.467 150.781C789.571 158.509 790.517 170.338 790.517 176.805C790.675 186.11 789.886 190.369 787.048 196.52C784.998 200.778 781.844 207.876 779.794 212.292C777.902 216.55 774.906 223.017 773.486 226.487C771.909 229.956 768.598 237.054 766.075 242.259C763.709 247.463 761.659 252.668 761.659 253.614C761.659 254.719 760.871 255.665 760.082 255.665C759.294 255.665 758.19 257.873 757.717 260.396C757.244 262.92 756.14 265.444 755.352 265.917C754.563 266.39 753.775 268.125 753.775 269.86C753.775 271.595 752.986 273.014 752.198 273.014C751.409 273.014 750.621 274.749 750.621 276.957C750.621 279.165 749.99 281.058 749.359 281.216C748.728 281.531 746.048 286.578 743.525 292.729C741.001 298.88 737.217 306.924 735.325 310.867C733.274 314.81 731.698 318.595 731.698 319.542C731.698 320.33 729.963 324.904 727.755 329.32C725.548 333.894 723.813 338.31 723.813 339.257C723.813 340.045 723.024 340.834 722.236 340.834C721.448 340.834 720.659 342.253 720.659 343.988C720.659 345.723 719.871 347.143 719.082 347.143C718.294 347.143 717.505 348.878 717.505 351.086C717.505 353.294 716.717 355.029 715.928 355.029C715.14 355.029 714.036 357.552 713.563 360.549C713.09 363.546 711.986 366.069 711.197 366.069C710.409 366.069 709.62 368.593 709.62 371.589C709.62 374.586 709.147 377.11 708.517 377.11C707.728 377.11 706.309 381.841 705.205 387.677C703.628 395.563 703.313 405.973 703.944 426.003C704.574 441.144 705.205 463.698 705.678 476C706.151 489.564 707.097 498.554 708.044 498.554C708.832 498.554 709.62 502.024 709.62 506.44C709.62 510.699 710.251 517.639 711.197 521.739C711.986 525.998 713.563 533.568 714.509 538.773C715.613 543.978 717.032 557.069 717.663 567.951C718.294 578.834 719.555 595.079 720.344 604.227C721.29 613.375 722.709 624.258 723.655 628.674C724.759 632.932 725.39 641.134 724.601 657.064L709.62 657.537C701.263 657.852 689.909 657.221 683.917 655.959C678.082 654.855 673.351 653.436 673.351 652.647C673.351 652.016 671.616 651.228 669.409 650.755C667.201 650.282 665.466 649.177 665.466 648.389C665.466 647.6 664.362 646.812 663.101 646.812C661.839 646.812 660.736 646.023 660.736 645.234C660.736 644.446 659.316 643.657 657.582 643.657C655.847 643.657 654.428 642.869 654.428 642.08C654.428 641.292 652.851 640.03 650.958 639.399C648.909 638.768 641.497 632.617 634.243 625.677C627.147 618.58 621.312 612.113 621.312 611.325C621.312 610.536 619.578 606.12 617.37 601.861C615.32 597.445 613.427 591.609 613.427 588.771C613.427 586.089 612.639 583.724 611.851 583.724C611.062 583.724 609.958 579.938 609.643 575.364C609.327 570.948 607.75 559.75 606.174 550.602C603.651 536.25 603.335 527.575 603.966 484.36C604.439 457.074 604.754 422.218 604.597 407.077C604.597 391.935 603.651 374.113 602.547 367.646C601.6 361.18 600.181 350.139 599.393 343.2C598.762 336.26 597.658 329.478 597.027 328.216C596.554 326.955 595.293 320.173 594.504 313.233C593.558 306.293 592.139 295.253 591.35 288.786C590.404 282.32 588.985 265.601 588.039 251.722C587.093 237.842 586.777 221.282 587.25 214.973C587.723 208.822 588.985 203.617 589.773 203.617C590.562 203.617 591.35 202.355 591.35 200.778C591.193 199.359 597.343 191.946 604.754 184.217C612.166 176.647 618.474 170.496 618.947 170.496C619.42 170.496 627.147 163.241 636.135 154.251C645.124 145.418 657.266 133.905 662.943 128.7C668.778 123.495 683.916 109.142 696.69 96.6826C709.463 84.2226 720.344 74.1285 721.132 74.2863Z" fill="white"/>
                    </svg>
                    <svg class="svg-abs" width="458" height="756" viewBox="0 0 458 756" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M162.16 3.64044C166.986 3.15756 172.133 2.03084 173.419 1.22604C174.867 0.260279 197.064 -0.2226 229.715 0.0993195C263.814 0.421239 287.137 1.387 293.249 2.67468C298.557 3.8014 310.781 6.05484 320.592 7.8254C330.404 9.435 344.88 12.8152 352.762 15.0686C360.643 17.322 374.154 21.668 382.518 24.8872C390.882 27.9454 402.784 33.0961 409.057 36.3153C416.778 40.3393 424.498 46.2948 433.184 55.1476C441.548 63.5175 447.66 71.2436 450.555 77.3601C452.968 82.3498 454.898 87.9835 454.898 89.754C454.898 91.5246 455.702 93.4561 456.828 94.2609C458.115 95.0657 458.276 98.9287 457.632 106.655C457.15 112.771 454.416 125.487 451.52 134.823C448.786 144.158 444.765 158.323 442.674 166.21C440.422 174.258 438.009 189.71 437.205 200.816C436.401 211.923 435.758 237.193 435.597 257.152C435.597 277.111 434.792 308.981 433.988 327.975C433.023 346.968 431.254 379.965 429.806 401.212C428.519 422.458 427.072 453.684 426.589 470.424C426.107 487.164 424.981 509.699 424.177 520.322C423.372 530.945 422.247 553.48 421.925 570.219C421.442 586.959 420.638 604.826 419.995 609.655C419.351 614.483 419.03 620.278 419.19 622.531C419.512 624.785 418.547 637.823 417.099 651.504C415.652 665.186 413.883 677.58 413.239 678.867C412.435 680.155 410.987 684.984 410.022 689.33C408.896 693.837 405.519 701.08 402.623 705.426C399.728 709.933 394.099 716.371 390.238 719.912C386.378 723.453 379.301 729.409 374.476 733.272C367.881 738.423 361.125 741.642 348.74 745.666C339.411 748.563 326.061 752.265 318.984 753.714C307.886 755.967 295.179 756.289 224.89 755.806C155.083 755.323 142.055 754.841 132.404 752.426C126.131 750.977 114.55 747.597 106.669 744.861C96.6963 741.642 89.4583 737.94 83.3462 733.111C78.5208 729.409 71.7653 723.775 68.2267 720.717C64.849 717.659 59.3803 711.059 56.0025 706.231C52.6248 701.402 48.7645 693.032 47.156 687.72C45.7084 682.409 43.9391 672.59 43.4566 665.991C42.8132 659.391 41.8482 652.953 41.2048 651.987C40.4005 650.86 39.5963 642.49 39.1138 633.477C38.7921 624.302 37.9879 611.103 37.5053 604.021C37.0228 596.939 36.2186 579.555 35.8969 565.391C35.5752 551.226 34.6101 530.14 33.6451 518.712C32.68 507.284 31.5541 484.75 31.0715 468.815C30.7498 452.88 29.6239 426.804 28.6589 410.869C27.6938 394.934 25.9245 361.937 24.6377 337.632C23.1901 313.327 22.2251 271.639 22.2251 245.08C22.2251 199.368 22.0642 195.827 18.2039 178.282C15.9521 168.142 13.0569 156.552 11.7701 152.528C10.4834 148.504 7.90986 140.617 6.14057 134.823C4.37127 129.028 2.11944 120.336 1.15437 115.508C0.189301 110.679 -0.293234 104.079 0.189301 101.021C0.671836 97.963 1.79775 92.4903 2.76282 88.9492C3.72789 85.4081 6.78395 78.4868 9.67916 73.658C12.5744 68.8292 20.1341 59.8155 26.2462 53.538C34.771 45.1681 41.2048 40.5003 51.1772 35.5105C58.7369 31.9694 70.6394 26.6577 77.7166 24.0824C84.7938 21.346 97.1788 17.322 105.06 15.0686C112.942 12.8152 127.096 9.59596 136.425 7.8254C145.754 6.05484 157.335 4.28428 162.16 3.64044Z" fill="black"/>
                        <path class="abs" NAME="abs" d="M124.362 22.1513C135.782 19.254 148.81 16.3567 153.314 15.7129C157.817 14.9081 170.363 14.4252 181.462 14.5862C199.959 14.9081 202.05 15.23 208.001 19.0931C211.54 21.3465 215.882 25.0486 217.652 27.1411C219.421 29.3945 222.316 35.6719 224.086 41.1446C225.855 46.6172 227.946 51.1241 228.911 51.1241C229.876 51.1241 232.289 45.9734 234.54 39.6959C237.114 32.1308 240.17 26.6582 243.387 23.7609C245.96 21.5075 251.912 18.2883 256.255 16.5177C263.171 13.9423 267.192 13.6204 285.207 14.4252C301.774 15.23 311.103 16.5177 330.243 21.3465C343.593 24.7267 359.034 29.3945 364.825 31.9699C370.615 34.5452 376.245 36.6377 377.371 36.6377C378.336 36.6377 383.805 38.8911 389.434 41.6275C394.903 44.5247 404.071 49.6754 409.701 53.3775C415.491 57.0796 422.89 63.1961 426.428 67.2201C429.967 71.2441 434.471 78.4873 436.723 83.3161C438.974 88.3058 441.065 96.6758 441.548 102.631C442.191 111.323 441.387 117.279 435.918 138.847C432.38 153.012 428.52 166.693 427.554 169.43C426.589 172.166 424.659 181.502 423.533 190.354C421.764 202.265 421.121 224.8 421.121 275.985C421.121 318.961 420.477 346.808 419.512 348.417C418.708 350.027 417.1 376.585 416.295 407.65C415.33 438.555 414.365 474.127 414.043 486.521C413.561 498.915 412.596 525.795 411.792 546.076C410.987 567.484 409.54 584.706 408.414 586.638C407.449 588.73 406.645 597.422 406.484 605.953C406.484 614.645 405.84 630.097 405.036 640.237C404.393 650.378 402.945 663.094 401.819 668.405C400.854 673.717 398.924 679.995 397.637 682.409C396.35 684.984 395.385 688.043 395.385 689.33C395.385 690.618 393.777 693.515 391.847 695.769C389.756 698.022 383.161 704.782 377.049 710.738L377.045 710.742C370.934 716.696 364.825 722.649 363.377 723.937C361.93 725.224 355.978 728.604 350.349 731.502C344.558 734.399 333.299 738.584 325.418 740.998C317.536 743.252 308.047 745.988 304.508 746.793C300.969 747.759 287.78 748.564 252.555 748.885L247.408 744.057C244.674 741.481 241.618 737.94 240.813 736.331C240.009 734.882 237.597 721.522 235.345 706.553C233.093 691.745 231.324 677.258 231.324 674.361C231.324 670.82 230.519 669.21 228.911 669.21C227.142 669.21 226.498 670.981 226.498 675.166C226.498 678.546 225.372 689.33 224.086 698.988C222.638 708.645 220.869 720.717 219.904 725.546C219.099 730.375 216.848 736.813 214.757 739.55C212.826 742.447 208.644 745.988 205.588 747.437C200.763 749.69 196.742 750.012 178.245 748.885C160.873 747.92 152.67 746.632 137.229 742.286C126.613 739.228 113.263 734.399 107.473 731.502C101.843 728.765 95.8921 725.224 94.4445 723.937C92.9969 722.649 86.8848 716.693 80.7727 710.738C74.6605 704.782 68.0659 698.022 66.1358 695.769C64.0448 693.515 62.4363 690.457 62.4363 688.847C62.4363 687.399 61.7929 685.306 60.9887 684.501C60.1845 683.697 57.9327 675.971 56.1634 667.601C54.0724 657.299 52.6248 642.008 51.8205 620.922C51.1772 603.7 50.0513 587.765 49.0862 585.511C48.282 583.258 46.9952 565.23 46.191 545.271C45.3867 525.312 44.5825 502.456 44.5825 494.569C44.4217 486.682 43.4566 458.031 42.1699 430.99C40.8831 403.948 39.918 374.493 39.918 365.479C39.918 355.982 39.2746 348.578 38.3096 348.095C37.3445 347.612 36.7011 321.859 36.7011 276.146C36.7011 223.673 36.0577 200.978 34.4493 190.354C33.1625 182.467 30.4282 169.269 28.1763 161.382C25.9245 153.495 22.0642 139.008 19.8124 129.19C16.2738 115.186 15.6304 109.392 16.4347 101.344C16.9172 95.871 18.3648 89.7545 19.6516 87.823C20.7775 85.7305 22.2251 82.3503 22.8685 80.0969C23.351 77.8434 26.8896 72.5318 30.589 68.1858C34.4493 63.8399 42.1699 57.2406 47.9603 53.5385C53.7507 49.9974 62.758 44.6857 68.0659 41.9494C73.3738 39.0521 79.0033 36.7987 80.6118 36.6377C82.0594 36.6377 87.8498 34.5452 93.3186 32.1308C98.9481 29.5555 112.942 25.0486 124.362 22.1513Z" fill="white"/>
                        <path d="M220.708 144.319C224.568 136.11 225.694 131.12 226.177 120.014V119.853C226.659 109.713 227.463 105.85 229.072 105.85C230.519 105.85 231.324 109.552 231.806 119.853C232.289 131.281 233.254 135.949 237.114 144.319C239.688 149.953 243.548 156.069 245.8 158.001C249.177 160.898 255.129 162.025 282.794 165.083C300.969 167.175 321.879 170.395 329.439 172.165C336.999 173.936 349.705 177.799 357.587 180.696C365.468 183.593 376.084 187.778 380.909 189.871C385.735 192.124 389.112 194.378 388.147 194.86C387.182 195.343 379.944 195.182 372.063 194.378C364.182 193.573 355.818 192.768 353.566 192.768C351.314 192.768 348.419 193.573 347.132 194.378C345.041 195.826 345.041 196.148 347.132 197.597C348.419 198.563 350.671 199.85 351.957 200.655C353.244 201.46 353.887 202.747 353.083 203.874C352.279 205.162 349.866 205.001 344.237 203.23C340.055 201.943 330.565 199.689 323.005 198.402C315.445 196.953 299.844 195.343 288.424 194.86C269.926 194.056 266.388 194.378 257.863 197.436C251.268 199.689 246.443 202.747 242.583 206.932C239.527 210.474 235.506 216.59 233.736 220.614C231.967 224.799 229.876 228.179 228.911 228.179C227.946 228.179 226.016 225.443 224.568 222.063C222.96 218.843 221.673 215.463 221.834 214.498C221.834 213.532 218.778 209.991 214.917 206.45C210.307 202.05 204.784 198.884 198.35 196.953C190.147 194.378 185.644 194.056 168.594 194.86C157.496 195.343 142.376 196.953 134.817 198.402C127.257 199.689 117.767 201.943 113.424 203.23C107.473 205.162 105.704 205.162 105.221 203.552C104.739 202.587 106.186 200.494 108.438 199.206C110.529 197.919 112.298 196.309 112.298 195.504C112.298 194.86 110.69 193.895 108.599 193.412C106.669 192.929 99.5915 192.929 92.9969 193.573C86.4022 194.217 78.0383 195.021 68.0659 196.148L72.2479 193.09C74.6606 191.48 82.8637 187.617 90.7451 184.398C98.6265 181.34 108.599 177.638 113.103 176.189C117.445 174.74 126.131 172.648 132.404 171.199C138.677 169.912 158.139 167.175 175.832 165.083C202.693 162.025 208.644 160.898 212.022 158.001C214.274 156.069 218.134 149.953 220.708 144.319Z" fill="black"/>
                        <path d="M224.246 321.697C225.533 317.673 226.498 309.625 226.498 303.508C226.498 294.978 226.981 292.724 228.911 292.724C230.841 292.724 231.324 294.978 231.324 302.704C231.324 308.337 232.289 316.385 233.575 320.892C234.701 325.238 236.792 331.194 238.24 333.769C239.527 336.344 242.744 340.529 245.317 342.944C248.051 345.68 252.877 347.933 257.863 348.899C262.206 349.704 272.822 350.831 281.186 351.475C289.549 351.957 304.83 353.889 314.963 355.499C325.096 357.269 340.376 360.971 348.74 363.707C357.104 366.444 370.133 371.755 377.693 375.297C387.504 379.803 390.399 381.896 388.147 382.379C386.378 382.862 381.874 382.379 378.014 381.413C374.315 380.447 365.468 379.642 358.391 379.642C348.097 379.642 345.523 380.125 345.523 382.057C345.523 383.345 346.489 384.471 347.454 384.471C348.58 384.31 350.671 385.437 351.957 386.886C353.244 388.173 354.048 389.783 353.566 390.105C353.083 390.588 347.775 389.783 341.502 388.495C335.229 387.047 322.362 384.793 312.55 383.345C302.739 381.896 288.745 380.608 281.186 380.608C272.661 380.608 263.975 381.735 257.863 383.506C251.751 385.437 246.443 388.334 243.387 391.554C240.813 394.29 236.953 399.762 234.862 403.465C232.932 407.167 231.324 411.352 231.324 412.639C231.324 413.927 230.198 415.054 228.911 415.054C227.624 415.054 226.498 413.927 226.498 412.639C226.498 411.352 224.89 407.167 222.799 403.465C220.869 399.762 217.008 394.29 214.435 391.554C211.379 388.334 206.071 385.437 199.959 383.506C193.847 381.735 185.161 380.608 176.636 380.608C169.077 380.608 155.083 381.735 145.272 383.184C135.46 384.632 125.005 386.564 121.949 387.369C118.893 388.334 113.585 389.461 110.207 389.944C104.739 390.91 104.417 390.749 105.864 387.69C106.83 385.92 108.599 384.471 109.886 384.471C111.172 384.471 112.298 383.345 112.298 382.057C112.298 379.964 109.725 379.803 95.7313 380.286C86.7239 380.769 76.9124 381.413 74.0172 381.896C71.2828 382.54 68.8701 382.379 68.8701 381.574C68.7093 380.93 74.0172 378.033 80.451 374.975C86.8848 372.077 99.4307 367.088 108.277 364.029C117.124 361.132 132.726 357.269 142.859 355.499C152.992 353.889 168.272 351.957 176.636 351.475C185 350.831 195.455 349.704 199.959 348.899C204.945 347.933 209.77 345.68 212.505 342.944C215.078 340.529 218.295 336.344 219.582 333.769C221.029 331.194 223.12 325.721 224.246 321.697Z" fill="black"/>
                        <path d="M224.246 510.02C225.533 505.996 226.498 497.948 226.498 491.832C226.498 483.301 226.981 481.047 228.911 481.047C230.841 481.047 231.324 483.301 231.324 491.832C231.324 497.948 232.289 505.996 233.575 510.02C234.701 514.044 236.792 519.517 238.24 522.092C239.527 524.667 242.583 528.852 244.835 531.267C248.212 534.969 251.268 536.096 260.597 537.383C267.031 538.349 277.164 539.798 283.116 540.602C289.228 541.568 297.27 542.212 301.291 542.212C305.312 542.212 315.285 543.661 323.327 545.431C331.53 547.363 343.272 550.582 349.545 552.674C355.818 554.767 367.238 559.274 375.119 562.654C383 566.034 389.917 569.414 390.399 570.219C391.043 571.185 388.791 571.346 384.931 570.541C381.392 570.058 371.098 569.092 361.93 568.77C349.545 568.127 345.523 568.448 345.523 569.897C345.523 571.024 347.936 573.438 350.831 575.048C355.335 577.784 355.496 578.267 352.762 578.911C350.992 579.233 344.88 578.428 339.09 576.979C333.299 575.692 323.649 573.76 317.376 572.794C311.103 571.829 301.774 570.219 296.466 569.253C291.158 568.288 282.472 567.966 277.164 568.448C271.857 568.931 263.171 570.702 257.863 572.312C251.429 574.243 246.443 576.979 243.387 580.36C240.653 583.096 236.792 589.534 234.54 594.363C232.289 599.353 229.554 603.377 228.428 603.377C227.463 603.377 226.498 602.411 226.498 601.284C226.498 600.319 225.051 596.456 223.281 592.914C221.673 589.373 218.134 584.223 215.722 581.325C212.826 578.106 207.679 574.887 201.567 572.794C196.259 571.024 187.252 569.092 181.462 568.448C175.671 567.966 166.664 568.288 161.356 569.253C156.048 570.219 146.719 571.829 140.446 572.794C134.173 573.76 124.362 575.853 118.41 577.301C109.886 579.394 107.151 579.555 105.543 578.106C103.934 576.496 104.417 575.692 107.955 574.082C110.368 572.955 112.298 571.024 112.298 569.897C112.298 568.609 108.599 567.966 99.4307 567.966C92.3535 567.966 83.0245 568.931 78.5208 569.897C74.178 571.024 69.9961 571.346 69.3527 570.702C68.7093 570.058 69.1918 568.77 70.4786 567.966C71.7654 567.161 80.1293 563.62 88.9758 560.079C97.8222 556.537 108.277 552.513 112.298 551.226C116.319 549.938 126.292 547.363 134.334 545.592C142.537 543.661 152.67 542.212 156.852 542.051C161.195 542.051 174.384 540.763 186.448 539.315C203.497 537.222 209.288 535.935 212.022 533.359C213.952 531.589 217.008 527.243 218.778 523.702C220.708 520.161 223.12 514.044 224.246 510.02Z" fill="black"/>
                    </svg>
                    <svg class="svg-pu\xf1os" width="804" height="179" viewBox="0 0 804 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M802.36 48.8953C802.644 42.6594 803.07 29.904 803.212 20.5501L803.496 3.54297L803.921 21.2587C804.205 31.0378 803.779 43.7932 801.651 60.2334L802.36 48.8953Z" fill="white"/>
                        <path d="M801.083 77.9491C800.799 80.6419 800.516 78.0909 800.516 72.2801C800.516 66.4693 800.799 64.2017 801.083 67.3197C801.509 70.4377 801.509 75.2563 801.083 77.9491Z" fill="white"/>
                        <path d="M799.806 109.129C799.522 114.231 799.239 110.688 799.239 101.334C799.239 91.98 799.522 87.87 799.806 92.1217C799.948 96.3735 799.948 104.027 799.806 109.129Z" fill="white"/>
                        <path d="M3.72484 112.672C3.44103 117.349 3.15723 113.806 3.15723 104.877C3.15723 95.9483 3.44103 92.1217 3.72484 96.3735C4.00865 100.625 4.00865 107.995 3.72484 112.672Z" fill="white"/>
                        <path d="M5.00198 136.057C4.71817 138.75 4.43436 136.907 4.43436 131.805C4.43436 126.703 4.71817 124.577 5.00198 126.845C5.42769 129.112 5.42769 133.364 5.00198 136.057Z" fill="white"/>
                        <path d="M764.614 175.315C761.066 175.598 754.681 175.598 750.424 175.315C746.166 175.031 749.004 174.89 756.809 174.89C764.614 174.89 768.161 175.031 764.614 175.315Z" fill="white"/>
                        <path d="M702.176 36.1401C705.724 31.4632 714.522 21.5424 721.901 13.8892C729.138 6.23595 735.808 0 736.801 0C737.652 0 741.626 2.12589 745.457 4.96041C749.43 7.65321 755.816 10.9129 759.647 12.1884C765.324 14.0309 767.878 14.1726 772.844 12.8971C776.108 12.0467 783.487 9.07047 789.163 6.5194C797.252 2.55107 799.806 1.98416 801.225 3.2597C802.502 4.53523 803.07 9.92082 802.928 22.6762C802.928 32.4553 802.219 46.2027 801.509 53.1473C800.8 60.0918 799.522 82.4846 798.671 102.751C797.82 123.018 796.826 141.726 796.542 144.135C796.117 146.686 794.272 152.214 792.427 156.182C790.583 160.292 787.886 164.827 786.467 166.103C785.048 167.378 780.649 169.93 776.676 171.63C770.148 174.465 768.02 174.606 751.843 173.898C739.923 173.473 731.125 172.197 724.881 170.213C719.772 168.654 713.387 165.961 710.691 164.119C707.994 162.276 703.737 157.458 701.467 153.489C699.196 149.379 696.216 146.12 695.081 146.12C693.946 146.12 691.392 146.97 689.405 148.104C687.418 149.238 683.587 150.23 680.891 150.23C677.769 150.23 673.512 148.671 662.443 141.726L662.869 134.215C663.153 129.112 664.997 123.869 668.545 116.924C671.525 111.397 677.627 99.35 682.168 89.996C686.993 80.2169 691.108 69.304 692.101 64.4854C692.953 59.8084 694.088 53.4307 694.655 50.3127C695.365 46.7696 698.345 41.1006 702.176 36.1401Z" fill="black"/>
                        <path d="M40.9038 16.4402C43.6 16.015 50.4114 12.7553 55.8037 9.21219C61.1961 5.81077 66.1627 2.83452 66.8722 2.83452C67.4399 2.83452 74.3932 9.63737 82.3398 17.9992C90.1445 26.5028 99.0844 36.4236 102.064 40.3919C106.463 46.061 107.882 49.7458 109.727 58.8163C110.862 65.0523 112.282 72.422 112.991 75.1148C113.701 77.8076 116.681 85.4608 119.661 92.1219C122.782 98.7831 127.181 107.287 129.594 111.255C132.148 115.082 135.554 121.459 137.257 125.428C138.959 129.538 140.379 135.49 140.379 146.686L123.208 155.899L115.261 152.639C107.457 149.663 107.173 149.663 105.612 152.214C104.761 153.631 102.206 157.741 99.794 161.284C96.2464 166.67 93.834 168.512 85.8874 171.772C80.6369 173.898 72.6903 176.449 68.2913 177.299C63.7504 178.291 54.9523 179 48.7085 179C42.4648 179 34.8019 178.433 31.6801 177.724C28.5582 176.874 23.7334 175.032 21.0373 173.473C17.7735 171.63 14.7935 168.229 12.0973 162.985C9.96875 158.733 7.55639 151.363 6.84687 146.686C5.99544 142.009 4.29259 117.774 3.15736 92.8306C1.88023 67.8868 0.603092 39.5416 0.319284 29.7625C-0.106428 19.9834 -0.106428 10.6295 0.319284 8.78701C0.8869 7.0863 2.16404 5.66904 3.29927 5.66904C4.4345 5.66904 9.68495 7.65321 14.9354 10.0625C20.3277 12.3302 27.1391 15.023 30.261 15.8733C33.3829 16.5819 38.2076 17.0071 40.9038 16.4402Z" fill="black"/>
                        <path d="M704.873 42.093C707.143 38.8333 714.806 29.9045 721.901 22.3931L734.956 8.50391L762.486 22.8182L771.709 21.2593C776.818 20.4089 784.197 18.1413 788.028 16.2988C792.002 14.4564 795.691 13.3226 796.401 13.8895C797.11 14.4564 797.394 21.6844 796.826 31.1801C796.259 40.1088 795.266 53.2893 794.556 60.2339C793.846 67.1785 793.137 85.8863 793.137 101.618C792.995 125.57 792.569 132.372 790.015 142.718C788.454 149.663 785.9 157.175 784.481 159.442C783.062 161.71 779.514 164.828 776.534 166.103C772.987 167.521 766.601 168.513 758.938 168.654C752.269 168.796 742.619 168.229 737.369 167.379C731.976 166.528 723.746 164.119 719.063 161.851C711.542 158.592 709.839 157.033 707.001 151.222C705.156 147.537 703.596 142.577 703.596 140.309C703.596 138.042 704.305 135.774 705.015 135.349C705.724 134.924 707.995 131.664 709.839 127.837C711.684 124.152 715.374 118.767 718.07 115.649C721.759 111.397 723.462 110.405 726.016 111.114C727.719 111.539 730.415 113.381 731.976 115.082C733.537 116.924 734.814 119.475 734.814 120.751C734.814 122.168 733.537 125.57 731.976 128.262C730.415 130.955 729.138 133.506 729.138 133.931C729.138 134.357 730.557 134.498 732.26 134.215C733.963 134.073 736.233 132.372 737.227 130.388C738.22 128.404 739.072 123.869 739.072 120.042C739.072 116.357 738.362 112.106 737.652 110.547C736.943 108.988 734.247 106.72 731.976 105.586C729.706 104.452 725.733 103.46 723.462 103.46C720.198 103.46 718.212 104.736 715.232 108.704C712.961 111.68 709.555 116.924 707.569 120.467C705.582 124.011 702.177 128.262 699.906 130.105C697.494 131.947 693.946 133.365 691.25 133.223C687.702 133.223 685.29 131.947 681.6 127.837C678.762 125.003 676.634 121.176 676.634 119.334C676.634 117.633 679.614 109.98 683.161 102.327C686.851 94.8151 690.824 86.3115 692.101 83.6187C693.52 80.9259 695.365 75.1152 696.358 70.8634C697.352 66.6116 698.771 60.8008 699.48 58.108C700.19 55.4152 700.757 52.0138 700.757 50.5965C700.757 49.321 702.602 45.4944 704.873 42.093Z" fill="white"/>
                        <path d="M35.7954 24.6607C45.1611 24.8024 46.4382 24.3772 55.662 18.8499C61.1963 15.5902 66.3048 12.8974 67.0143 12.8974C67.8657 12.8974 69.4267 13.7478 70.5619 14.7399C71.8391 15.5902 78.2247 22.3931 84.8942 29.9045C91.5637 37.2743 98.3751 45.211 99.936 47.6203C101.923 50.3131 103.342 55.4152 104.051 61.7929C104.619 67.1785 106.038 74.2648 107.173 77.3828C108.308 80.5007 109.727 84.3273 110.437 85.8863C111.005 87.4453 114.836 95.382 118.667 103.602C122.499 111.68 126.188 120.184 126.898 122.31C127.891 125.711 127.324 126.845 121.647 132.089C115.829 137.475 114.836 137.9 109.586 137.049C106.464 136.624 102.774 135.065 101.355 133.648C99.936 132.372 97.3818 128.262 95.6789 124.861C93.9761 121.318 90.7123 116.074 88.2999 113.098C84.8942 108.846 83.1914 107.854 79.0762 107.854C75.6705 107.854 72.5486 109.129 69.1429 111.964C64.46 115.791 64.1762 116.499 64.1762 124.719C64.1762 132.798 64.6019 133.931 68.4334 137.191C70.8457 139.175 72.9743 140.309 73.1162 139.601C73.4 138.892 72.5486 135.774 71.4133 132.656C70.1362 129.538 69.1429 125.853 69.1429 124.436C69.1429 123.16 70.9876 120.326 73.1162 118.342C75.2447 116.357 77.9409 114.798 79.0762 114.798C80.3533 114.798 82.6237 116.216 84.1847 118.058C85.8875 119.759 90.0028 125.995 93.2665 131.947C96.6722 137.758 99.3684 144.136 99.2265 146.12C99.0846 147.962 97.8075 152.498 96.2465 156.041C93.9761 161.568 92.4151 162.844 85.3199 166.103C80.779 168.087 71.8391 170.78 65.5953 172.056C57.2229 173.756 50.9792 174.04 41.4716 173.19C31.964 172.481 27.565 171.347 24.1593 169.08C21.605 167.379 18.6251 163.977 17.3479 161.71C16.2127 159.3 14.3679 152.781 13.2327 147.112C11.9556 141.301 10.5365 120.042 9.68511 97.2244C8.83369 75.3986 7.69845 48.4707 7.13084 37.2743C6.27941 21.5427 6.42132 17.1492 7.84036 17.1492C8.83369 17.1492 13.2327 18.7082 17.7736 20.8341C23.8755 23.5269 28.4164 24.5189 35.7954 24.6607Z" fill="white"/>
                        <path d="M666.842 136.057C666.984 134.498 667.978 130.955 668.971 128.262C669.964 125.57 671.241 123.444 671.809 123.444C672.519 123.302 674.079 125.57 675.499 128.404C677.343 131.947 679.898 134.215 685.148 136.483C688.979 138.325 692.243 140.026 692.243 140.451C692.243 140.734 690.257 142.293 687.986 143.569C685.574 144.986 682.31 146.12 680.749 146.12C679.188 146.12 675.357 144.419 672.235 142.577C668.403 140.167 666.701 138.042 666.842 136.057Z" fill="white"/>
                        <path d="M124.06 138.042C125.763 136.624 127.891 133.648 128.743 131.38C129.736 129.255 131.155 127.696 132.148 127.979C133 128.262 134.419 131.664 135.128 135.349C136.547 142.01 136.547 142.152 131.581 146.12C128.601 148.671 124.911 150.23 122.357 150.372C120.086 150.372 116.681 149.38 114.978 148.246C113.275 147.112 111.714 145.411 111.714 144.703C111.714 143.852 113.843 142.577 116.397 141.868C118.951 141.159 122.357 139.317 124.06 138.042Z" fill="white"/>
                    </svg>
                    <svg class="tren-inferior-frontal" width="396" height="756" viewBox="0 0 396 756" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M195.494 172.357C195.494 170.654 195.995 167.449 196.497 165.446V165.346C197.098 163.343 198 161.641 198.502 161.641C199.103 161.641 199.504 164.745 199.504 168.651C199.504 174.96 199.304 175.661 197.499 175.661C195.895 175.661 195.494 174.96 195.494 172.357Z" fill="#ADADAD" fill-opacity="0.9"/>
                        <path d="M340.861 621.925C340.26 621.624 339.859 619.721 339.859 617.718V617.618C339.859 614.914 340.159 614.313 340.861 615.415C341.362 616.216 341.864 618.119 341.864 619.621C341.864 621.224 341.463 622.225 340.861 621.925Z" fill="#ADADAD" fill-opacity="0.9"/>
                        <path d="M83.4106 3.60536C84.1124 2.40357 85.4157 1.00149 86.318 0.600893C87.3205 0.200298 137.648 0 198.201 0C258.753 0.100149 309.081 0.300446 310.083 0.500744C311.086 0.701042 312.289 1.60238 312.69 2.40357C313.191 3.20476 314.294 8.6128 315.096 14.4214C315.998 20.2301 317.001 27.1403 317.301 29.9445C317.702 32.6485 319.507 43.765 321.412 54.481C323.316 65.1969 327.327 85.2267 330.334 99.0472C333.342 112.768 336.45 128.191 337.252 133.098C338.154 138.005 339.758 149.522 340.961 158.636C342.866 172.657 343.167 181.069 343.467 213.718C343.668 241.058 343.367 256.181 342.365 265.795C341.663 273.206 340.56 283.121 339.858 287.828C339.257 292.535 337.853 301.047 336.75 306.856C335.648 312.665 333.943 320.276 332.841 323.881C331.738 327.487 330.434 333.295 329.833 336.901C329.231 341.207 329.231 346.715 329.933 353.425C330.434 358.933 331.838 369.048 332.941 375.959C334.044 382.869 336.049 393.184 337.452 398.993C338.755 404.802 340.76 412.012 341.863 415.017C342.866 418.021 344.871 427.035 346.274 435.047C347.678 443.058 349.583 455.477 350.485 462.587C351.788 472.903 352.089 480.113 351.588 497.139C351.287 508.956 350.285 525.18 349.483 533.192C348.58 541.204 346.575 557.629 344.871 569.747C343.167 581.865 341.362 598.289 340.861 606.301C340.159 615.815 340.159 621.123 340.861 621.824C341.362 622.325 341.763 627.332 341.763 632.841C341.663 639.35 342.064 642.956 342.766 643.056C343.367 643.256 343.868 645.059 343.969 647.062C343.969 649.165 344.771 652.77 345.673 654.973C346.575 657.277 350.786 665.088 354.896 672.299C360.109 681.513 364.42 687.622 368.932 692.229C372.441 695.934 374.646 698.438 373.844 697.937C373.042 697.437 373.243 697.637 374.245 698.438C375.348 699.239 379.358 702.845 383.067 706.45C386.877 710.055 390.085 713.661 390.185 714.462C390.386 715.263 391.388 716.665 392.491 717.466C393.594 718.267 394.797 718.868 395.298 718.668C395.699 718.568 396 719.169 396 719.97C396 720.771 395.699 721.472 395.298 721.472C394.797 721.472 394.496 724.777 394.296 735.994L389.885 740C387.378 742.203 381.965 745.708 377.854 747.711C373.744 749.714 368.631 751.517 366.425 751.817C364.22 752.018 360.811 752.919 358.906 753.72C357.002 754.621 354.595 755.623 353.693 755.923C352.691 756.224 349.783 755.623 347.177 754.421C344.47 753.32 339.457 749.514 335.948 746.209C332.44 742.804 327.026 736.895 323.918 732.989C320.71 729.084 317.702 724.377 317.001 722.474C316.299 720.17 313.592 716.966 309.081 713.06C305.371 709.855 301.562 706.65 300.759 706.049C299.957 705.448 298.554 704.046 297.752 703.045C296.649 701.643 295.947 696.034 295.145 680.511C294.544 669.195 293.241 656.075 292.338 651.368C291.135 645.459 290.734 640.752 291.235 635.845C291.636 631.939 291.837 624.528 291.837 619.32C291.737 614.113 290.935 604.599 290.133 598.289C289.23 591.98 287.426 583.167 286.123 578.76C284.719 574.354 282.614 566.041 281.411 560.233C280.107 554.424 277.902 546.312 276.498 542.206C274.994 538.1 271.987 528.586 269.781 521.175C267.475 513.764 265.17 503.849 264.668 499.142C264.067 494.435 263.666 484.119 263.666 476.108C263.666 468.096 264.167 458.682 264.668 455.076C265.27 451.471 265.972 441.556 266.874 417.52L263.265 411.011C261.26 407.405 256.147 397.691 252.036 389.479C246.021 377.461 244.417 373.355 244.116 368.648C243.816 365.543 242.913 361.237 242.111 359.134C241.309 357.131 240.407 352.524 240.106 348.919C239.906 345.313 239.104 336.5 238.302 329.389C237.5 322.279 236.597 315.669 236.297 314.868C235.896 314.067 234.492 307.056 233.089 299.345C231.785 291.633 230.181 283.321 229.58 280.817C228.978 278.314 228.176 274.909 227.875 273.306C227.575 271.704 225.67 265.595 223.565 259.786C221.459 253.977 217.75 243.862 215.444 237.253C213.138 230.643 210.231 221.129 208.928 216.221C207.624 211.314 205.82 204.304 204.917 200.698C204.115 197.093 202.511 189.281 201.509 183.172C200.406 177.063 199.504 169.752 199.504 166.848C199.504 164.044 199.103 161.64 198.501 161.64C197.9 161.64 197.098 163.343 196.496 165.346C195.995 167.449 195.494 170.253 195.494 171.655C195.494 173.057 194.792 178.265 193.99 183.172C193.188 188.079 190.18 199.897 187.473 209.211C184.666 218.525 180.656 230.943 178.35 236.752C176.145 242.56 172.335 253.377 169.829 260.788C167.423 268.299 164.315 280.717 162.911 288.829C161.508 296.841 159.503 307.858 158.4 313.366C157.297 318.874 155.693 330.591 154.891 339.404C153.989 348.217 152.585 358.333 151.783 361.938C150.981 365.543 148.675 372.253 146.67 376.96C144.766 381.667 140.755 389.779 137.748 394.987C134.74 400.195 131.833 405.202 131.231 406.003C130.73 406.805 129.828 408.607 129.226 410.009C128.525 411.612 128.324 416.819 128.725 425.032C129.026 431.942 129.728 442.057 130.329 447.565C130.83 453.073 131.231 466.393 131.231 477.109C131.332 490.629 130.83 498.441 129.828 502.647C129.126 505.952 125.918 516.067 122.91 525.18C119.803 534.294 116.394 544.81 115.291 548.715C114.088 552.621 112.083 559.732 110.679 564.739C109.276 569.747 107.171 578.259 106.068 583.768C104.464 591.579 103.862 599.892 103.261 621.323C102.659 641.453 102.058 650.867 100.754 656.375C99.4511 662.084 99.1504 666.591 99.5514 674.903C99.8522 681.413 99.6516 688.724 98.9499 692.83C97.7468 699.54 97.5463 699.94 92.7342 703.445C90.0273 705.448 85.7165 709.154 83.2101 711.658C80.7038 714.161 77.3954 718.868 75.6911 722.073C74.0871 725.278 69.3752 731.587 65.3651 735.994C61.2547 740.4 56.0415 745.408 53.7357 747.11C51.5301 748.813 48.4223 750.515 46.9185 750.916C45.3144 751.216 42.2066 750.916 39.9008 750.115C37.4947 749.314 33.0835 748.312 30.0759 747.911C27.0684 747.511 21.6547 745.808 18.0456 744.006C14.4365 742.203 9.52405 739.098 7.01772 736.995C4.51139 734.992 2.00506 732.288 1.30329 731.086C0.601519 729.985 0.100253 727.081 0 724.777C0 722.374 0.902278 718.768 1.90481 716.765C3.0076 714.662 9.82481 706.65 17.2435 698.939C24.562 691.227 32.1813 682.715 34.1863 679.91C36.1914 677.206 40.001 671.097 42.8081 666.39C45.5149 661.683 48.5225 655.975 49.4248 653.671C50.3271 651.268 51.7306 644.758 52.5327 639.15C53.3347 633.441 54.237 622.926 54.638 615.815C54.9387 607.403 54.638 597.388 53.7357 587.773C52.9337 579.561 50.9286 562.636 49.2243 550.218C47.6203 537.799 45.7154 521.976 45.2142 514.965C44.6127 507.855 44.1114 494.335 44.1114 484.921C44.1114 475.006 44.8132 463.088 45.6152 457.079C46.5175 451.271 48.2218 440.655 49.6253 433.544C51.0289 426.434 53.2344 416.719 54.638 412.012C56.0415 407.305 58.0466 398.793 59.2496 392.984C60.3524 387.175 61.9565 377.962 62.7585 372.453C63.5605 366.945 64.4628 355.228 64.8638 346.415C65.3651 331.793 65.2648 329.69 63.2597 322.379C62.0567 317.973 60.1519 310.061 59.0491 304.853C57.9463 299.645 56.242 288.128 55.1392 279.315C54.0365 270.502 52.7332 253.377 52.1316 241.259C51.4299 226.236 51.4299 211.715 52.2319 195.691C52.7332 182.772 54.1367 165.145 55.2395 156.633C56.3423 148.12 58.1468 136.403 59.1494 130.594C60.2522 124.785 62.2572 114.27 63.6608 107.059C65.0643 99.8484 67.3701 89.3328 68.6734 83.5241C70.077 77.7155 73.6861 57.886 76.6937 39.4586C79.8015 21.0313 82.8091 4.90729 83.4106 3.60536Z" fill="#0B0B0B"/>
                        <path fill="black d="M99.1506 3.90591C99.8524 3.40516 104.765 2.60397 110.078 2.30353C115.392 2.00308 157.197 1.90293 203.013 2.10323C248.829 2.30353 288.629 2.70412 291.536 2.90442C294.344 3.20487 296.95 3.90591 297.251 4.40665C297.552 5.00755 293.341 7.71156 288.028 10.4156C282.614 13.2198 276.097 17.0254 273.491 18.9282C270.784 20.8311 265.17 26.4394 260.959 31.3467C256.648 36.254 251.235 43.5648 248.929 47.671C246.523 51.6769 241.209 64.3958 237.099 76.0131C232.888 87.6303 228.377 99.2476 227.074 102.052C225.77 104.756 223.866 109.262 222.763 112.067C221.66 114.771 219.454 119.778 217.85 123.083C216.146 126.388 213.539 130.594 211.935 132.497C210.331 134.3 207.925 136.403 206.522 137.104C205.118 137.805 202.311 138.606 200.306 139.007C198.201 139.307 194.692 139.207 192.486 138.606C189.98 138.005 187.173 136.203 184.967 133.899C182.962 131.796 178.451 124.285 174.942 117.074C171.433 109.863 166.42 97.7454 163.814 90.0339C161.308 82.3224 157.398 71.5064 155.192 65.9982C152.987 60.49 150.28 54.1806 149.177 51.9773C147.974 49.7741 145.367 45.4677 143.362 42.4632C141.257 39.4587 137.147 34.251 134.339 30.9461C131.432 27.6412 126.219 22.7339 122.911 20.0299C119.502 17.426 114.088 13.7205 110.78 11.8177C107.472 10.015 103.963 8.41261 103.06 8.41261C102.058 8.41261 101.256 8.01201 101.256 7.41112C101.256 6.81023 100.855 6.60993 100.253 6.91037C99.7521 7.21082 98.9501 6.81023 98.6493 6.20933C98.3486 5.50829 98.5491 4.40665 99.1506 3.90591Z" fill="white"/>
                        <path d="M85.1152 19.7294C85.7167 15.1226 86.7192 10.5157 87.3207 9.31395C88.223 7.81171 89.1253 7.41112 90.8296 7.81171C92.1329 8.11216 99.4514 11.4171 106.97 15.1226C118.299 20.7309 121.808 23.0343 126.82 27.9416C130.129 31.3467 135.041 37.1553 137.848 40.961C140.555 44.8668 144.465 51.7771 146.47 56.484C148.475 61.191 152.285 70.8053 154.791 78.016L154.792 78.0175C157.398 85.2282 161.308 96.0432 163.613 102.052C165.819 108.061 168.225 113.369 168.827 113.769C169.428 114.27 169.528 114.57 168.927 114.57C168.258 114.57 168.258 114.837 168.927 115.372C169.528 115.772 172.235 120.78 175.143 126.588C179.153 134.901 181.057 137.605 184.165 139.708C186.271 141.11 188.777 142.512 189.779 142.912C191.283 143.513 191.484 145.116 191.484 156.433C191.484 163.443 190.782 173.658 189.98 179.166C189.178 184.675 187.073 193.888 185.469 199.697C183.865 205.506 180.656 215.42 178.451 221.73C176.145 228.039 172.636 238.655 170.431 245.265C168.325 251.874 165.618 260.187 164.415 263.792C163.212 267.397 161.207 274.809 159.904 280.317C158.5 285.825 156.094 297.743 154.39 306.856C152.686 315.97 150.681 326.285 149.879 329.89C149.077 333.496 147.473 338.804 146.37 341.708C145.267 344.512 144.365 348.017 144.365 349.419C144.365 350.821 143.663 352.624 142.861 353.425C142.059 354.227 141.558 355.128 141.858 355.428C142.159 355.729 141.457 357.732 140.355 359.935C139.252 362.138 137.648 364.141 136.846 364.442C136.044 364.742 135.542 365.343 135.843 365.944C136.144 366.545 134.44 368.247 132.134 369.95C128.224 372.654 127.221 372.854 120.805 372.554C116.394 372.353 110.279 371.152 104.264 369.149C99.0504 367.446 92.8347 364.642 90.5288 362.939C88.1228 361.337 84.7141 357.531 82.9096 354.727C81.0048 351.823 77.4959 344.913 74.9896 339.405C72.4833 333.896 69.0747 324.883 67.4706 319.375C65.7663 313.867 63.9617 306.456 63.26 302.85C62.6585 299.245 61.7562 294.137 61.2549 291.333C60.7536 288.629 59.7511 281.118 59.1496 274.809C58.5481 268.499 57.5455 253.377 57.0443 241.259C56.4428 226.837 56.4428 211.615 57.1445 197.193C57.6458 185.075 58.5481 171.755 59.0493 167.649C59.6509 163.543 60.3526 156.733 60.6534 152.627C60.9542 148.521 61.9567 141.711 62.859 137.605C63.661 133.499 64.9643 127.189 65.6661 123.584C66.3678 119.978 67.2701 114.57 67.5709 111.566C67.9719 108.561 69.5759 98.847 71.18 90.0339C72.8843 81.2208 74.6888 73.2089 75.1901 72.3076C75.7916 71.3061 75.8919 69.7037 75.4909 68.8024C75.1901 67.7007 75.2904 67.3001 75.7916 67.8009C76.2929 68.3016 77.3957 65.4974 78.3982 61.2912C79.4007 57.2852 80.6038 48.9729 81.2053 42.964C81.8068 36.955 82.6088 31.0462 83.1101 29.9446C83.6114 28.843 84.5136 24.2361 85.1152 19.7294Z" fill="white"/>
                        <path d="M269.481 27.3407C274.293 22.7339 278.905 19.9297 290.033 14.4215C297.852 10.6159 305.071 7.51127 306.073 7.41112C307.076 7.41112 308.379 8.8132 309.382 11.2168C310.284 13.2198 311.186 18.3273 311.487 22.4334C311.788 26.5395 312.389 30.4454 312.79 30.9461C313.191 31.4468 313.793 36.254 314.194 41.4617C314.595 46.9699 317.201 61.0909 320.409 75.0116C323.417 88.2312 325.923 99.7483 326.023 100.55C326.023 101.351 326.525 102.653 326.926 103.354C327.427 103.955 327.628 105.257 327.327 106.058C327.026 106.859 327.327 107.76 327.828 108.061C328.43 108.361 328.63 109.262 328.329 110.064C328.029 110.865 328.329 114.37 328.931 117.875C329.532 121.28 330.435 124.585 330.936 125.086C331.337 125.587 331.738 126.989 331.838 128.09C331.838 129.192 332.039 131.596 332.139 133.398C332.239 135.101 332.841 136.603 333.342 136.603C333.944 136.603 334.044 137.705 333.643 139.608C333.141 141.41 333.242 142.612 333.843 142.612C334.445 142.612 334.746 143.814 334.746 145.416C334.645 146.918 334.846 148.821 335.147 149.622C335.447 150.424 335.748 152.226 335.748 153.628C335.748 155.031 336.049 157.735 336.249 159.637C336.45 161.54 337.252 172.356 337.853 183.673C338.555 196.192 338.856 217.123 338.455 237.253C338.154 258.785 337.452 274.107 336.45 281.318C335.548 287.427 333.944 296.841 332.841 302.349C331.638 307.858 330.034 315.068 329.131 318.373C328.329 321.678 327.227 325.284 326.826 326.385C326.425 327.487 326.023 328.789 326.023 329.39C326.023 329.991 325.622 330.591 325.021 330.892C324.52 331.192 322.114 335.999 319.708 341.708C317.301 347.316 314.996 351.923 314.595 351.923C314.093 351.923 313.993 352.324 314.294 352.925C314.595 353.525 313.893 354.827 312.79 355.929C311.687 357.031 310.986 358.032 311.286 358.232C311.587 358.333 310.184 359.935 308.078 361.838C305.973 363.741 302.665 365.944 300.76 366.745C298.855 367.546 296.349 368.348 295.246 368.448C294.143 368.548 289.832 369.649 285.722 370.851C281.611 372.053 276.398 372.954 274.193 372.954C271.787 372.854 268.278 371.853 265.37 370.15C262.162 368.448 259.255 365.643 257.15 362.439C255.345 359.735 252.237 352.324 250.232 346.215C248.227 340.005 244.818 325.284 242.613 313.666C240.508 301.949 236.197 282.921 233.189 271.303C229.981 258.985 224.467 241.759 219.956 229.742C215.745 218.425 211.234 204.905 209.83 199.697C208.527 194.489 206.923 186.277 206.221 181.37C205.519 176.562 204.717 172.657 204.316 172.657C203.815 172.657 203.514 166.447 203.514 158.836C203.514 151.325 203.915 144.615 204.316 144.014C204.717 143.513 206.421 142.512 208.026 141.811C209.73 141.21 212.437 139.207 214.241 137.404C215.946 135.602 218.953 131.195 220.858 127.59C222.863 123.984 226.071 116.573 228.176 111.065C230.181 105.557 232.287 99.9486 232.788 98.5466C233.289 97.1445 233.69 95.8425 233.59 95.5421C233.49 95.2416 233.791 94.841 234.392 94.5406C234.893 94.2402 237.199 88.6318 239.605 82.022C241.911 75.4122 245.119 66.6992 246.723 62.7934C248.327 58.7875 250.834 53.5797 252.237 51.2763C253.741 48.8727 254.944 46.4692 255.044 45.8683C255.145 45.2674 256.949 42.1628 259.155 38.958C261.36 35.7532 265.972 30.5455 269.481 27.3407Z" fill="white"/>
                        <path d="M67.2701 369.95C68.4731 360.336 69.8767 351.823 70.4782 351.122C71.0797 350.421 71.982 350.02 72.5835 350.221C73.185 350.421 74.7891 352.624 76.1926 355.128C77.5962 357.732 80.5035 361.638 82.7091 363.941C84.9147 366.144 90.1278 369.75 94.2382 371.853C99.4514 374.557 104.163 376.059 109.777 376.96C114.189 377.561 120.104 377.862 122.81 377.561C125.617 377.161 129.628 375.859 131.733 374.657C133.938 373.455 137.748 369.95 140.254 366.945C142.66 363.941 145.367 361.337 146.069 361.137C146.971 361.037 147.172 361.638 146.771 363.14C146.37 364.442 144.866 369.449 143.262 374.457C141.658 379.564 138.149 387.176 135.242 391.983C132.435 396.69 129.728 400.595 129.227 400.696C128.725 400.896 126.921 403.099 125.216 405.703C123.612 408.407 120.304 412.113 117.998 414.015C115.692 415.918 111.682 418.322 109.076 419.223C106.369 420.225 102.459 421.026 100.253 421.026C98.0478 421.026 94.539 420.325 92.5339 419.524C89.8271 418.522 87.421 416.319 84.3131 411.812C81.9071 408.307 78.4985 404.001 76.7942 402.198C75.0899 400.295 71.7815 397.491 69.4757 395.888C66.1673 393.685 65.1648 392.383 65.1648 390.18C65.1648 388.678 66.1673 379.564 67.2701 369.95Z" fill="white"/>
                        <path d="M321.312 353.125C321.312 352.724 321.713 351.823 322.114 351.122C322.515 350.521 323.417 349.92 323.918 349.92C324.52 349.92 325.221 352.023 325.522 354.627C325.823 357.331 326.525 361.237 327.026 363.44C327.628 365.643 328.229 370.35 328.53 373.956C328.73 377.561 329.332 381.367 329.933 382.469C330.535 383.57 330.836 386.474 330.635 388.978C330.334 393.084 330.034 393.685 326.324 395.488C323.818 396.79 320.209 400.295 316.7 405.102C313.492 409.108 311.186 412.814 311.387 413.214C311.587 413.715 310.384 415.117 308.78 416.519C307.176 417.921 303.868 419.524 301.562 420.124C298.454 420.826 295.847 420.826 292.539 420.124C289.832 419.524 285.621 417.921 283.015 416.619C280.308 415.317 276.398 412.513 274.193 410.31C271.987 408.207 268.077 403.299 265.571 399.394C263.065 395.588 258.653 387.576 255.846 381.467C253.039 375.358 250.132 368.348 249.43 365.744C248.728 363.14 248.528 360.736 249.029 360.235C249.43 359.835 250.633 360.536 251.535 361.938C252.438 363.34 254.944 366.445 257.15 368.748C259.355 371.152 262.764 374.156 264.669 375.258C267.676 377.06 269.581 377.361 277.2 377.261C283.817 377.161 288.328 376.46 294.243 374.557C298.654 373.155 304.67 370.651 307.577 368.948C311.086 366.845 314.093 364.041 317.101 359.835C319.407 356.53 321.312 353.425 321.312 353.125Z" fill="white"/>
                        <path d="M60.489 409.593C62.1365 404.558 63.5688 400.181 63.8615 399.694C64.062 399.294 65.0645 398.993 65.9668 398.993C66.8691 398.993 68.8742 400.195 70.2777 401.697C71.7815 403.299 75.3906 407.806 78.298 411.912C81.3055 416.018 85.7167 420.725 88.223 422.428C91.7319 424.831 94.0377 425.532 98.7496 425.833C103.261 426.133 106.168 425.633 110.279 424.03C113.286 422.828 116.996 421.026 118.6 419.924C120.104 418.923 121.607 418.021 122.109 418.021C122.51 418.021 123.412 423.73 124.114 430.74C124.815 437.851 125.918 448.467 126.52 454.576C127.121 460.685 127.623 471.901 127.623 479.613C127.522 491.33 127.121 495.136 125.016 503.148C123.612 508.356 121.307 515.767 119.803 519.672C118.399 523.578 116.093 529.787 114.69 533.693C113.387 537.599 110.88 546.312 109.176 553.222C107.472 560.133 104.765 572.251 103.06 580.262C101.356 588.274 99.4514 600.693 98.8498 607.803C98.1481 614.914 97.1455 621.724 96.544 622.826C95.9425 623.927 93.0352 626.431 90.1278 628.334C85.3157 631.539 84.1126 631.839 78.1977 631.739C74.5886 631.639 69.7764 631.038 67.4706 630.437C64.9643 629.836 62.7587 628.534 62.1572 627.332C61.6559 626.231 60.4529 616.016 59.6509 604.498C58.7486 593.081 57.345 578.36 56.543 571.75C55.741 565.14 53.7359 548.716 52.1319 535.195C50.5278 521.675 48.7233 506.152 48.222 500.644C47.5202 494.134 47.5202 486.223 48.222 478.111C48.7233 471.2 49.8261 460.384 50.6281 454.075C51.4301 447.766 53.2347 437.35 54.7385 431.041C56.142 424.731 58.6483 415.217 60.3526 410.009L60.489 409.593Z" fill="white"/>
                        <path d="M322.715 405.102C324.62 402.699 327.126 400.395 328.229 399.894C329.432 399.494 330.836 399.093 331.337 399.093C331.938 398.993 332.339 399.394 332.139 399.995C331.938 400.495 332.339 400.996 332.841 400.996C333.442 400.996 334.445 403.4 335.046 406.204C335.748 409.108 336.249 412.213 336.149 413.014C336.049 413.815 337.352 419.924 338.956 426.534C340.66 433.144 342.866 444.461 343.969 451.571C344.971 458.682 345.874 466.293 345.874 468.296C345.874 471 346.174 471.901 347.077 471.301C347.979 470.8 348.079 475.006 347.478 489.628C347.077 500.043 346.375 513.163 345.874 518.671C345.372 524.179 344.47 533.894 343.869 540.203C343.367 546.512 341.964 556.727 340.861 562.736C339.758 568.745 338.455 578.46 337.954 584.268C337.352 590.077 336.65 599.491 336.249 605.3C335.949 611.108 335.046 619.421 334.244 623.827C333.442 628.234 332.239 632.44 331.537 633.041C330.836 633.742 327.227 634.743 323.317 635.144C318.605 635.745 314.695 635.645 311.286 634.844C308.579 634.243 304.77 632.941 303.066 632.039C301.261 631.138 299.356 629.536 298.855 628.534C298.454 627.633 297.752 621.824 297.351 615.815C296.95 609.806 295.747 600.392 294.644 594.984C293.642 589.676 292.739 583.868 292.739 582.265C292.739 580.663 292.038 576.457 291.236 572.952C290.434 569.547 285.02 552.121 279.205 534.194C268.679 502.146 268.478 501.445 267.877 489.628C267.576 483.018 267.275 476.008 267.275 474.105C267.275 472.202 267.877 467.194 268.478 463.088C269.08 458.982 270.283 447.465 271.285 437.55C272.188 427.636 273.09 419.223 273.29 418.722C273.491 418.322 276.097 419.323 279.005 420.926C281.812 422.528 286.724 424.631 289.732 425.533C294.243 426.834 296.048 426.935 299.757 425.933C302.264 425.332 306.474 423.229 309.181 421.126C311.988 419.123 315.296 415.718 316.7 413.515C318.204 411.311 320.81 407.506 322.715 405.102Z" fill="white"/>
                        <path d="M78.1977 635.745C85.4159 635.745 87.5212 635.244 91.7319 633.041C94.539 631.639 97.0453 630.437 97.5466 630.337C97.9476 630.337 98.5491 631.138 98.9501 632.039C99.2509 633.041 98.5491 640.151 97.2458 647.863C95.341 659.881 95.0402 663.987 95.6417 676.105C96.2433 690.226 96.2433 690.426 93.7369 693.931C92.3334 695.834 90.9298 697.236 90.5288 696.936C90.0276 696.736 88.7243 697.837 87.5212 699.44C86.2179 701.142 84.9147 702.244 84.5136 701.943C84.0124 701.743 82.2078 703.045 80.5035 704.948C78.699 706.851 77.1952 708.653 77.1952 708.954C77.1952 709.254 76.0924 711.858 74.6888 714.662C73.0848 718.268 68.3729 724.076 60.1521 732.489C53.5354 739.399 48.1217 744.707 48.1217 744.206C48.1217 743.805 47.2195 744.406 46.1167 745.508C44.4124 747.211 43.7106 747.311 40.9035 746.409C39.099 745.808 34.5876 744.406 30.8782 743.405C27.0686 742.403 21.8554 740.4 19.0483 738.998C16.3415 737.596 12.4316 734.792 10.5268 732.689C8.52175 730.686 7.01795 728.683 7.01795 728.182C7.01795 727.782 6.31618 726.78 5.51415 725.979C4.31111 724.777 4.21086 723.776 4.91263 721.172C5.51415 719.169 10.8276 712.759 19.2488 703.846C28.0711 694.632 35.8909 685.018 42.2068 675.804C47.5202 668.193 52.6331 660.281 53.6357 658.379C54.6382 656.476 56.142 651.268 57.1445 646.861C58.0468 642.455 59.3501 637.848 59.9516 636.546C61.0544 634.543 61.6559 634.443 65.4655 635.044C67.7714 635.545 73.4858 635.845 78.1977 635.745Z" fill="white"/>
                        <path d="M296.649 644.358C296.048 639.45 296.048 636.446 296.649 635.645C297.451 634.844 298.755 635.144 301.963 636.847C305.873 639.05 307.477 639.25 320.309 639.25C330.735 639.25 334.545 639.651 334.946 640.552C335.347 641.253 336.55 645.359 337.753 649.565C338.856 653.872 341.062 659.781 342.465 662.585C343.969 665.489 347.377 671.498 350.185 675.905C352.891 680.311 355.799 684.618 356.5 685.419C357.303 686.22 359.709 689.124 361.814 691.928C363.919 694.632 370.335 701.943 375.95 707.952C381.664 713.961 387.378 720.671 388.682 722.674C389.885 724.777 390.988 727.581 390.988 728.983C390.988 730.686 389.384 732.989 386.276 735.994C383.569 738.498 378.757 741.903 375.448 743.505C372.14 745.107 367.428 746.71 364.922 747.11C362.415 747.411 359.408 748.412 358.205 749.113C356.901 749.915 354.395 750.515 352.691 750.515C349.784 750.515 347.778 748.813 336.851 737.696C329.933 730.686 323.617 723.575 322.815 721.973C322.013 720.271 319.708 716.465 317.703 713.46C315.697 710.456 311.888 706.049 309.181 703.646C306.474 701.342 303.968 699.339 303.567 699.44C303.066 699.44 302.364 697.937 301.863 696.135C301.361 694.432 300.659 685.018 300.459 675.404C300.158 665.489 299.456 656.576 298.855 654.873C298.153 653.171 297.251 648.464 296.649 644.358Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    `;
    return container;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"41UmI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "muscleDamageChanger", ()=>muscleDamageChanger);
function muscleDamageChanger() {
    const muscleList = [
        {
            id: 1,
            reference: "abs"
        },
        {
            id: 2,
            reference: "abs"
        },
        {
            id: 3,
            reference: "pectoral"
        },
        {
            id: 4,
            reference: "pectoral"
        },
        {
            id: 5,
            reference: "antebrazo-anterior"
        },
        {
            id: 6,
            reference: "bicep"
        },
        {
            id: 7,
            reference: "bicep"
        },
        {
            id: 8,
            reference: "bicep"
        },
        {
            id: 9,
            reference: "antebrazo-anterior"
        },
        {
            id: 10,
            reference: "none"
        },
        {
            id: 11,
            reference: "bicep"
        },
        {
            id: 12,
            reference: "abs"
        },
        {
            id: 13,
            reference: "hombros"
        },
        {
            id: 14,
            reference: "hombros"
        },
        {
            id: 15,
            reference: "hombros"
        },
        {
            id: 16,
            reference: "trapecio"
        },
        {
            id: 17,
            reference: "none"
        },
        {
            id: 18,
            reference: "pectoral"
        },
        {
            id: 19,
            reference: "none"
        },
        {
            id: 20,
            reference: "none"
        },
        {
            id: 21,
            reference: "none"
        },
        {
            id: 22,
            reference: "none"
        },
        {
            id: 23,
            reference: "pectoral"
        },
        {
            id: 24,
            reference: "none"
        },
        {
            id: 25,
            reference: "none"
        },
        {
            id: 26,
            reference: "pectoral"
        },
        {
            id: 27,
            reference: "pectoral"
        },
        {
            id: 28,
            reference: "pectoral"
        },
        {
            id: 29,
            reference: "hombros"
        },
        {
            id: 30,
            reference: "none"
        },
        {
            id: 31,
            reference: "hombros"
        },
        {
            id: 32,
            reference: "pectoral"
        },
        {
            id: 33,
            reference: "none"
        },
        {
            id: 34,
            reference: "bicep"
        },
        {
            id: 35,
            reference: "bicep"
        },
        {
            id: 36,
            reference: "bicep"
        },
        {
            id: 37,
            reference: "bicep"
        },
        {
            id: 38,
            reference: "none"
        }
    ];
    const excercisesFinished = localStorage.getItem("ejercicios-hechos");
    for (const muscle of muscleList)if (excercisesFinished) JSON.parse(excercisesFinished).forEach((change)=>{
        if (change.nombreDelEjercicio.id == muscle.id) {
            let muscleContainer = document.getElementsByName(muscle.reference);
            let now = new Date().getTime();
            let firstTime = change.date + 10000;
            let midTime = change.date + 10000;
            let thirdTime = change.date + 20000;
            if (now < firstTime) muscleContainer.forEach((muscle)=>{
                muscle.style.fill = "rgb(248, 87, 87)";
            });
            else if (now >= firstTime && now < thirdTime) muscleContainer.forEach((muscle)=>{
                muscle.style.fill = "rgb(253, 248, 105)";
            });
            else if (now >= thirdTime && now < thirdTime + 10000) muscleContainer.forEach((muscle)=>{
                muscle.style.fill = "rgb(108, 253, 105)";
            });
            else muscleContainer.forEach((muscle)=>{
                muscle.style.fill = "rgb(251, 251, 251)";
            });
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"amMxc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showTime", ()=>showTime);
function showTime() {
    const muscleList = [
        {
            id: 1,
            reference: "abs"
        },
        {
            id: 2,
            reference: "abs"
        },
        {
            id: 3,
            reference: "pectoral"
        },
        {
            id: 4,
            reference: "pectoral"
        },
        {
            id: 5,
            reference: "antebrazo-anterior"
        },
        {
            id: 6,
            reference: "bicep"
        },
        {
            id: 7,
            reference: "bicep"
        },
        {
            id: 8,
            reference: "bicep"
        },
        {
            id: 9,
            reference: "antebrazo-anterior"
        },
        {
            id: 10,
            reference: "none"
        },
        {
            id: 11,
            reference: "bicep"
        },
        {
            id: 12,
            reference: "abs"
        },
        {
            id: 13,
            reference: "hombros"
        },
        {
            id: 14,
            reference: "hombros"
        },
        {
            id: 15,
            reference: "hombros"
        },
        {
            id: 16,
            reference: "trapecio"
        },
        {
            id: 17,
            reference: "none"
        },
        {
            id: 18,
            reference: "pectoral"
        },
        {
            id: 19,
            reference: "none"
        },
        {
            id: 20,
            reference: "none"
        },
        {
            id: 21,
            reference: "none"
        },
        {
            id: 22,
            reference: "none"
        },
        {
            id: 23,
            reference: "pectoral"
        },
        {
            id: 24,
            reference: "none"
        },
        {
            id: 25,
            reference: "none"
        },
        {
            id: 26,
            reference: "pectoral"
        },
        {
            id: 27,
            reference: "pectoral"
        },
        {
            id: 28,
            reference: "pectoral"
        },
        {
            id: 29,
            reference: "hombros"
        },
        {
            id: 30,
            reference: "none"
        },
        {
            id: 31,
            reference: "hombros"
        },
        {
            id: 32,
            reference: "pectoral"
        },
        {
            id: 33,
            reference: "none"
        },
        {
            id: 34,
            reference: "bicep"
        },
        {
            id: 35,
            reference: "bicep"
        },
        {
            id: 36,
            reference: "bicep"
        },
        {
            id: 37,
            reference: "bicep"
        },
        {
            id: 38,
            reference: "none"
        }
    ];
    let excercisesFinished = localStorage.getItem("ejercicios-hechos");
    for (const muscleItem of muscleList)if (excercisesFinished) JSON.parse(excercisesFinished).forEach((change)=>{
        if (change.nombreDelEjercicio.id == muscleItem.id) {
            let muscleContainer = document.getElementsByName(muscleItem.reference);
            const contenedorSVG = document.querySelector(".main-data-monitor");
            const dataCard = document.createElement("div");
            dataCard.classList.add("data-card");
            dataCard.style.position = "fixed";
            muscleContainer.forEach((muscle)=>{
                muscle.addEventListener("click", (e)=>{
                    e.preventDefault();
                    dataCard.innerHTML = `
                                <div class="contenedor-boton-cerrar-card">
                                    <button class="boton-cerrar-card">\u{2716}</button>
                                </div>
                                <div class="contenedor-tiempo-restante-texto">
                                    <div class="tiempo-restante-texto">Tiempo Restante</div>
                                </div>
                                <div class="contenedor-tiempo-restante">
                                    <div class="tiempo-restante"></div>
                                </div>
                            `;
                    const dataCardButton = dataCard.querySelector(".boton-cerrar-card");
                    if (dataCardButton) dataCardButton.addEventListener("click", (e)=>{
                        e.preventDefault();
                        contenedorSVG.removeChild(dataCard);
                    });
                    const timeElReference = contenedorSVG.querySelector(".tiempo-restante");
                    if (!timeElReference) {
                        contenedorSVG.appendChild(dataCard);
                        dataCard.style.display = "none";
                    } else if (dataCard && (dataCard.style.display = "none")) dataCard.style.display = "block";
                    function formatTime(milliseconds) {
                        const seconds = Math.floor(milliseconds / 1000);
                        // Calcular horas, minutos y segundos
                        const hours = Math.floor(seconds / 3600);
                        const minutes = Math.floor(seconds % 3600 / 60);
                        const remainingSeconds = seconds % 60;
                        // Crear la cadena de tiempo formateada
                        let formattedTime = "";
                        if (hours > 0) formattedTime += `${hours}h `;
                        if (minutes > 0) formattedTime += `${minutes}m `;
                        formattedTime += `${remainingSeconds}s`;
                        return formattedTime;
                    }
                    function updateCountdown(showTimeEl) {
                        let thirdTime = change.date + 30000;
                        let now = new Date().getTime();
                        let timeLeft = thirdTime - now;
                        if (timeLeft > 0) showTimeEl.innerHTML = `${formatTime(timeLeft).toString()}`; // Asignar el tiempo formateado al elemento .tiempo-restante
                        else {
                            clearInterval(intervalId); // Detener el contador cuando alcanza cero
                            showTimeEl.innerHTML = `M\xfasculo recuperado!`;
                        }
                    }
                    const intervalId = setInterval(()=>updateCountdown(timeElReference), 1000); // Ejecutar cada segundo
                    updateCountdown(timeElReference); // Actualizar inmediatamente al mostrar el tiempo restante
                });
            });
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74YDL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageLogin", ()=>initPageLogin);
var _state = require("../../state");
function initPageLogin(params) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "index.4d8db93c.css";
    document.head.appendChild(link);
    const container = document.querySelector(".root");
    container.innerHTML = `
    <div class="container-principal">
        <header class="header">
            <div class="contenedor-logo">
                <div class="img-logo"></div>
            </div>
            <div class="contenedor-menu">
                <button class="boton-menu"></button>
            </div>
        </header>
        <section class="inicio">
            <form class="contenedor-login">
                <div class="contenedor-saludo">
                    <div class="estrellas-1"></div>
                    Bienvenid@
                    <div class="estrellas-2" ></div>
                </div>
                <div class="contenedor-indicaciones">Por favor, completa los campos para iniciar sesi\xf3n.</div>
                <div class="contenedor-email">Email</div>  
                <div class="contenedor-input-email">
                    <input name="input-email" type="email" class="input-email">
                </div>
                <div class="contenedor-contrase\xf1a">Contrase\xf1a</div>  
                <div class="contenedor-input-contase\xf1a">
                    <input name="input-contrase\xf1a" type="password" class="input-contrase\xf1a">
                </div>
                <div class="contenedor-boton-crear">
                    <button class="crear">Iniciar sesi\xf3n</button>
                </div>
            </form>
        </section>
        <div class="contenedor-pregunta-signup">
            <div class="contenedor-secundario-signup">   
                \xbfA\xfan no tienes una cuenta?
                <button class="boton-signup">Haz click aqu\xed</button>
            </div>    
        </div>
    </div>
    `;
    const form = container.querySelector(".contenedor-login");
    form?.addEventListener("submit", async (e)=>{
        e.preventDefault();
        const inputPassword = form.querySelector(".input-contrase\xf1a");
        const inputEmail = form.querySelector(".input-email");
        try {
            // Esperar a que la promesa se resuelva
            await (0, _state.state).logIn(inputEmail.value, inputPassword.value);
            // Una vez que se ha iniciado sesión correctamente, redirigir a la página principal
            params.goTo("/main");
        } catch (error) {
            console.error("Error al iniciar sesi\xf3n:", error);
        }
    });
    const botonLogin = document.querySelector(".boton-signup");
    botonLogin?.addEventListener("click", (e)=>{
        e.preventDefault();
        params.goTo("/signup");
    });
    return container;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fm8Gy","h7u1C"], "h7u1C", "parcelRequire07df")

//# sourceMappingURL=index.b71e74eb.js.map
