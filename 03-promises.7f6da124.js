function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},r.parcelRequired7c6=n);var i=n("eWCmQ");const u={form:document.querySelector(".form")};function l(e,r){return new Promise(((o,t)=>{setTimeout((()=>{Math.random()>.3?o(e,r):t(e,r)}),r)}))}u.form.addEventListener("submit",(function(r){r.preventDefault();let o=Number(u.form.delay.value),t=Number(u.form.step.value),n=Number(u.form.amount.value);for(let r=1;r<=n;r+=1)l(r,o).then(((r,o)=>{e(i).Notify.success(`✅ Fulfilled promise ${r} in ${o}ms`)})).catch(((r,o)=>{e(i).Notify.failure(`❌ Rejected promise ${r} in ${o}ms`)})),o+=t}));
//# sourceMappingURL=03-promises.7f6da124.js.map