export const $ = selector => document.querySelector(selector);
export const uid = () => crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export const pageName = () => location.pathname.split('/').pop() || 'index.html';
export function toNumber(value) {
  const number = Number(String(value).replace(/[^0-9.-]/g, ''));
  return Number.isFinite(number) ? number : 0;
}
