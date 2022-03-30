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
  default: () => Card
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b4c21547 = require("../../chunks/index-b4c21547.js");
const css = {
  code: ".overlay-text-description.svelte-1kpu861.svelte-1kpu861{font-size:65%;line-height:1.5}.overlay_underline.svelte-1kpu861.svelte-1kpu861{display:block;border-radius:10%;width:75px;border:2px solid;margin-top:10px;margin-bottom:15px}#card_projects.svelte-1kpu861.svelte-1kpu861{position:relative}img.svelte-1kpu861.svelte-1kpu861{display:block;width:100%;height:auto}.overlay.svelte-1kpu861.svelte-1kpu861{position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;transition:.5s ease;background-color:#ffffff52}.text-overlay.svelte-1kpu861.svelte-1kpu861{color:#000000;font-size:20px;position:absolute;top:13%;left:8%;max-width:100%;margin-right:12px}#card_projects.svelte-1kpu861:hover .overlay.svelte-1kpu861{opacity:0.9}",
  map: null
};
const Card = (0, import_index_b4c21547.c)(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { title } = $$props;
  let { text } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `<section id="${"card_projects"}" class="${"h-96 w-96 bg-gray-700 mb-9 svelte-1kpu861"}"><img class="${"block svelte-1kpu861"}"${(0, import_index_b4c21547.d)("src", src, 0)} alt="${""}">
    <div class="${"overlay svelte-1kpu861"}"><div class="${"text-overlay svelte-1kpu861"}"><h4>${(0, import_index_b4c21547.e)(title)}</h4>
            <div class="${"overlay_underline svelte-1kpu861"}"></div>
            <p class="${"overlay-text-description svelte-1kpu861"}">${(0, import_index_b4c21547.e)(text)}</p></div></div>
</section>`;
});
