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
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Header
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b4c21547 = require("../../chunks/index-b4c21547.js");
var import_Header_svelte_svelte_type_style_lang_ff930419 = require("../../chunks/Header.svelte_svelte_type_style_lang-ff930419.js");
const css = {
  code: "#navigation.svelte-1v18k4d.svelte-1v18k4d{padding:1.25rem;background-color:#F6F5F5;height:5rem;display:flex}#brand.svelte-1v18k4d.svelte-1v18k4d{display:flex;align-items:center}ul.svelte-1v18k4d.svelte-1v18k4d{list-style:none;height:100%;display:flex;align-items:center;gap:4rem;margin-right:8rem}ul.svelte-1v18k4d li.svelte-1v18k4d:hover{transform:scale(1.1);transition:0.3s}.mobile-menu.svelte-1v18k4d.svelte-1v18k4d{display:none;position:absolute;top:0;left:0;height:100vh;width:100%}.mobile-menu.svelte-1v18k4d li.svelte-1v18k4d{margin-bottom:0.625rem}#hamburger-icon.svelte-1v18k4d.svelte-1v18k4d{margin:auto 0;display:none;cursor:pointer}#hamburger-icon.svelte-1v18k4d div.svelte-1v18k4d{width:2.188rem;height:0.188rem;background-color:#000000;margin:0.375rem 0;transition:0.4s}.bar.svelte-1v18k4d.svelte-1v18k4d{position:relative;z-index:10}.open.svelte-1v18k4d .bar1.svelte-1v18k4d{transform:rotate(-45deg) translate(-6px, 6px)}.open.svelte-1v18k4d .bar2.svelte-1v18k4d{opacity:0}.open.svelte-1v18k4d .bar3.svelte-1v18k4d{transform:rotate(45deg) translate(-6px, -8px)}.open.svelte-1v18k4d .mobile-menu.svelte-1v18k4d{display:flex;flex-direction:column;align-items:center;background-color:pink}a.svelte-1v18k4d.svelte-1v18k4d{font-family:'BiauKai'}@keyframes svelte-1v18k4d-slide-in-right{0%{transform:translateX(-100%);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes svelte-1v18k4d-slide-down-opacity{0%{transform:translateY(-1000px)}100%{transform:translateX(0)}}@keyframes svelte-1v18k4d-typing{to{width:var(--w)}}@keyframes svelte-1v18k4d-blink{50%{border-color:transparent}}@keyframes svelte-1v18k4d-caret{50%{border-color:transparent}}@keyframes svelte-1v18k4d-tracking-in-expand-fwd{0%{letter-spacing:-0.5em;transform:translateZ(-700px);opacity:0}40%{opacity:0.6}100%{transform:translateZ(0);opacity:1}}@media only screen and (max-width: 600px){header.svelte-1v18k4d nav.svelte-1v18k4d{display:none}#hamburger-icon.svelte-1v18k4d.svelte-1v18k4d{display:block}}@keyframes svelte-1v18k4d-slide-in-right{0%{transform:translateX(-100%);opacity:0}100%{transform:translateX(0);opacity:1}}",
  map: null
};
const Header = (0, import_index_b4c21547.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_b4c21547.a)(import_Header_svelte_svelte_type_style_lang_ff930419.p, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `

  <header class="${"svelte-1v18k4d"}"><section id="${"hero-section"}" class="${"bg-red-200 h-screen grid"}"><div class="${[
    "grid place-items-center relative",
    $page.url.pathname === "/projects" ? "active" : ""
  ].join(" ").trim()}"><a class="${"absolute inset-x-auto bottom-6 pulsate-bck svelte-1v18k4d"}" sveltekit:prefetch href="${"/projects"}"><img class="${"h-16 "}" src="${"src/img/scroll_down.png"}" alt="${""}"></a></div></section>
    <section id="${"navigation"}" class="${"justify-between absolute top-0 w-full svelte-1v18k4d"}"><div id="${"brand"}" class="${["svelte-1v18k4d", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1v18k4d"}"><img class="${"h-16"}" src="${"src/img/logo.svg"}" alt="${"logo"}"></a></div>
    <nav class="${"svelte-1v18k4d"}"><ul class="${"svelte-1v18k4d"}"><li class="${["svelte-1v18k4d", $page.url.pathname === "/projects" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/projects"}" class="${"hover:underline text-black svelte-1v18k4d"}">Portfolio</a></li>
          <li class="${["svelte-1v18k4d", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/about"}" class="${"hover:underline text-black svelte-1v18k4d"}">About</a></li>
           
          <li class="${["svelte-1v18k4d", $page.url.pathname === "/contact" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/contact"}" class="${"hover:underline text-black svelte-1v18k4d"}">Contact</a></li></ul></nav>
    <div id="${"hamburger-icon"}" class="${["svelte-1v18k4d", ""].join(" ").trim()}"><div class="${"bar1 bar svelte-1v18k4d"}"></div>
      <div class="${"bar2 bar svelte-1v18k4d"}"></div>
      <div class="${"bar3 bar svelte-1v18k4d"}"></div>
      <ul class="${"mobile-menu svelte-1v18k4d"}"><li class="${"svelte-1v18k4d"}"><a href="${"/home"}" class="${"svelte-1v18k4d"}">Home</a></li>
        <li class="${"svelte-1v18k4d"}"><a href="${"/products"}" class="${"svelte-1v18k4d"}">Products</a></li>
        <li class="${"svelte-1v18k4d"}"><a href="${"/about"}" class="${"svelte-1v18k4d"}">About</a></li></ul></div></section>
 </header>`;
});
