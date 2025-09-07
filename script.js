const y = document.getElementById('year'); y.textContent = new Date().getFullYear();

const modal = document.getElementById('modal');
const notifyBtn = document.getElementById('notify');
notifyBtn?.addEventListener('click', (e)=>{ e.preventDefault(); modal.showModal(); });

const t = (el, langAttr) => el?.setAttribute('dir', langAttr==='fa' ? 'rtl':'ltr');

const toggle = document.getElementById('lang-toggle');
const nodes = document.querySelectorAll('[data-en]');
let lang = 'en';
toggle?.addEventListener('click', ()=>{
  lang = lang === 'en' ? 'fa' : 'en';
  toggle.textContent = lang === 'en' ? 'FA' : 'EN';
  nodes.forEach(n => {
    n.textContent = n.getAttribute(`data-${lang}`);
  });
  document.body.style.fontFamily = lang==='fa'
    ? "'Vazirmatn', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial"
    : "Inter, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial";
  document.documentElement.setAttribute('lang', lang==='fa' ? 'fa':'en');
  t(document.querySelector('.hero'), lang==='fa' ? 'fa':'en');
});

