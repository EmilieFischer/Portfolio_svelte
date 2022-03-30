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
  default: () => Footer
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b4c21547 = require("../../chunks/index-b4c21547.js");
const css = {
  code: "footer.svelte-4fk9gi{background:var(--footer-background);color:var(--primary-font-color);padding:1rem}li.svelte-4fk9gi{list-style:none;padding-top:0.5rem}ul.svelte-4fk9gi{padding:0}h3.svelte-4fk9gi{color:var( --h3-footer-color)}@media(min-width: 600px){footer.svelte-4fk9gi{display:grid;grid-template-columns:repeat(3, 1fr)}section.svelte-4fk9gi{justify-self:center}}",
  map: null
};
const Footer = (0, import_index_b4c21547.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-4fk9gi"}"><section class="${"svelte-4fk9gi"}"><h3 class="${"svelte-4fk9gi"}">KONTAKT</h3>
      <ul class="${"svelte-4fk9gi"}"><li class="${"svelte-4fk9gi"}">TLF. + 45 2851 3171</li>
        <li class="${"svelte-4fk9gi"}">PRIVAT EMAIL <a href="${"mailto:emiliefdhansen@hotmail.com"}">emiliefdhansen@hotmail.com</a></li>
        <li class="${"svelte-4fk9gi"}">SKOLE EMAIL <a href="${"mailto:emil609u@stud.kea.dk"}">emil609u@stud.kea.com</a></li></ul></section>
    <section class="${"svelte-4fk9gi"}"><h3 class="${"svelte-4fk9gi"}">SOCIAL</h3>
      <ul class="${"svelte-4fk9gi"}"><li class="${"svelte-4fk9gi"}">LinkedIn</li></ul></section>
    <section class="${"svelte-4fk9gi"}"><h3 class="${"svelte-4fk9gi"}">PORTFOLIO</h3>
      <ul class="${"svelte-4fk9gi"}"><li class="${"svelte-4fk9gi"}">Lavet af Emilie Fischer</li>
        <li class="${"svelte-4fk9gi"}">Bygget i Tailwind CSS og SvelteKit</li></ul></section>
  </footer>`;
});
