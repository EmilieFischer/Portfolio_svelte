var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Contact
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b4c21547 = require("../../chunks/index-b4c21547.js");
var import_Footer_svelte = __toESM(require("./Footer.svelte.js"));
var import_Header_svelte = __toESM(require("./Header.svelte.js"));
var import_Header_svelte_svelte_type_style_lang_ff930419 = require("../../chunks/Header.svelte_svelte_type_style_lang-ff930419.js");
const Contact = (0, import_index_b4c21547.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_b4c21547.v)(import_Header_svelte.default, "Header").$$render($$result, {}, {}, {})}
<main><section><img src="${"src/img/bg_image.jpg"}" alt="${""}"></section></main>

${(0, import_index_b4c21547.v)(import_Footer_svelte.default, "Footer").$$render($$result, {}, {}, {})}`;
});
