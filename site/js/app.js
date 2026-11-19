const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  cart: '<path d="M2 3h3l2.5 12h11l2.5-9H6"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  sofa: '<path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3"/><path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2z"/><path d="M5 18v2M19 18v2"/>',
  fridge: '<rect x="6" y="2" width="12" height="20" rx="1.5"/><path d="M6 10h12M9 5v2M9 13v3"/>',
  tv: '<rect x="2" y="4" width="20" height="13" rx="1.5"/><path d="M8 21h8M12 17v4"/>',
  stove: '<rect x="3" y="3" width="18" height="18" rx="1.5"/><path d="M3 8h18"/><circle cx="7" cy="5.5" r=".8"/><circle cx="12" cy="5.5" r=".8"/><circle cx="17" cy="5.5" r=".8"/><rect x="6" y="11" width="12" height="7" rx="1"/>',
  washer: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M4 7h16"/><circle cx="12" cy="14" r="4.5"/><circle cx="8" cy="4.5" r=".6"/>',
  microwave: '<rect x="2" y="5" width="20" height="14" rx="2"/><rect x="5" y="8" width="10" height="8" rx="1"/><path d="M18 8v.01M18 11v.01M18 14v2"/>',
  fan: '<circle cx="12" cy="9" r="7"/><circle cx="12" cy="9" r="1.5"/><path d="M12 7.5c0-3 2-4 3.5-3.5M13.4 9.6c2.6 1.5 2.7 3.7 1.6 4.8M10.6 9.6c-2.6 1.5-4.6.4-4.9-1.2M12 16v5M8 21h8"/>',
  bed: '<path d="M2 20v-9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9M2 16h20M5 9V5h14v4"/>',
  wardrobe: '<rect x="3" y="2" width="18" height="18" rx="1"/><path d="M12 2v18M10 10v2M14 10v2M5 20v2M19 20v2"/>',
  table: '<path d="M2 8h20M5 8v12M19 8v12M5 13h14"/>',
  chair: '<path d="M7 3h10v9H7zM5 12h14M7 12v9M17 12v9"/>',
  headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><rect x="2" y="14" width="5" height="7" rx="1.5"/><rect x="17" y="14" width="5" height="7" rx="1.5"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  laptop: '<rect x="4" y="4" width="16" height="11" rx="1"/><path d="M2 19h20l-2-4H4z"/>',
  tablet: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M11 18h2"/>',
  pin: '<path d="M12 22s7-7.2 7-13a7 7 0 0 0-14 0c0 5.8 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="14" width="4" height="6" rx="1.5"/><rect x="18" y="14" width="4" height="6" rx="1.5"/><path d="M20 20a4 4 0 0 1-4 3h-2"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  chevronUp: '<path d="m6 15 6-6 6 6"/>',
  chevronRight: '<path d="m9 6 6 6-6 6"/>',
  chevronLeft: '<path d="m15 6-6 6 6 6"/>',
  truck: '<path d="M2 6h12v10H2zM14 9h4l4 4v3h-8z"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  store: '<path d="M3 9 5 3h14l2 6"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v9h14v-9M10 21v-6h4v6"/>',
  pix: '<path d="m12 2 4 4-4 4-4-4zM12 14l4 4-4 4-4-4zM2 12l4-4 4 4-4 4zM14 12l4-4 4 4-4 4z"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  doc: '<rect x="5" y="2" width="14" height="20" rx="1.5"/><path d="M9 7h6M9 11h6M9 15h6"/>',
  carne: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 8h18M7 12h10M7 16h6"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7.5v.5"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-3.2 3.9M6.6 6.6C3.8 8.4 2 12 2 12s4 7 10 7a10 10 0 0 0 4.4-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  box: '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.6-4.5L3 9"/><path d="M3 3v6h6"/><path d="M4 13a8 8 0 0 0 14.6 4.5L21 15"/><path d="M21 21v-6h-6"/>',
  home: '<path d="M3 11 12 3l9 8"/><path d="M5 9.5V21h5v-6h4v6h5V9.5"/>',
  logout: '<path d="M14 3H5v18h9"/><path d="M10 12h11M17 8l4 4-4 4"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m7.5 12 3 3 6-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
  chat: '<path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.2-4.5A9 9 0 1 1 21 12z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/>',
  bot: '<rect x="4" y="8" width="16" height="12" rx="4"/><path d="M12 4v4M9 13v1M15 13v1M9.5 17h5"/><circle cx="12" cy="3.5" r="1"/>',
  heart: '<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',
  star: '<path d="m12 2 3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21.1l1.4-7L2 9.3l7-.8z"/>',
  tag: '<path d="M2 12V3h9l11 11-9 9z"/><circle cx="7" cy="8" r="1.5"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/>',
  copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/>',
  shield: '<path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/>',
};

const SUB_ICONS = {
  Geladeiras: 'fridge', Fogões: 'stove', Lavadoras: 'washer', 'Micro-ondas': 'microwave', 'Ar e ventilação': 'fan',
  Sofás: 'sofa', Camas: 'bed', Colchões: 'bed', 'Guarda-roupas': 'wardrobe', Mesas: 'table', Cadeiras: 'chair', Racks: 'tv',
  'Smart TVs': 'tv', Áudio: 'headphones', Celulares: 'phone', Notebooks: 'laptop', Tablets: 'tablet',
};

function icon(name, cls = 'icon') {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;
}

const brl = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const priceHtml = (v) => `<small>R$</small>&nbsp;${v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const param = (name) => new URLSearchParams(location.search).get(name);
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const productById = (id) => PRODUCTS.find((p) => p.id === id);
const discountPct = (p) => (p.de ? Math.round((1 - p.preco / p.de) * 100) : 0);
const unitPrice = (p, cor) => p.preco + (p.cores.find((c) => c.nome === cor)?.delta ?? 0);
const plural = (n, s, pl) => `${n} ${n === 1 ? s : pl}`;

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage indisponível */ }
}

function fillIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((el) => { el.outerHTML = icon(el.dataset.icon, `icon ${el.dataset.cls || ''}`.trim()); });
}

// Imagens: produto sem foto em img/p/ cai num placeholder desenhado.
function placeholder(p) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="g" x2="0" y2="1"><stop offset="0" stop-color="#f6f9fd"/><stop offset="1" stop-color="#e2ecf8"/></linearGradient></defs><rect width="400" height="400" fill="url(#g)"/><g transform="translate(128 70) scale(6)" fill="none" stroke="#6f93c4" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">${ICONS[SUB_ICONS[p.sub] || 'box']}</g><text x="200" y="320" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="#4d6f9f">${escapeHtml(p.sub)}</text><text x="200" y="350" text-anchor="middle" font-family="Arial,sans-serif" font-size="15" fill="#8aa0c0">Imagem ilustrativa</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
// Ordem: foto .webp → .png → .jpg → ilustração .svg → placeholder.
const IMG_EXTS = ['webp', 'png', 'jpg', 'svg'];
function nextImgSrc(src) {
  const m = src.match(/\.(webp|png|jpg)$/);
  return m ? src.slice(0, -m[1].length) + IMG_EXTS[IMG_EXTS.indexOf(m[1]) + 1] : null;
}
function imgFallback(img) {
  const next = nextImgSrc(img.src);
  if (next) { img.src = next; return; }
  img.onerror = null;
  img.src = placeholder(productById(img.dataset.pid));
}
// Fotos extras (2 a 4) não têm ilustração: se nenhum formato existir, some da galeria.
function extraFallback(img) {
  const next = nextImgSrc(img.src);
  if (next && !next.endsWith('.svg')) img.src = next;
  else img.closest('button').remove();
}
const photo = (p, n = 1) => (n === 1 ? `img/p/${p.id}.webp` : `img/p/${p.id}-${n}.webp`);
const productImg = (p, n = 1, alt = '', extra = '') =>
  `<img src="${photo(p, n)}" alt="${escapeHtml(alt)}" data-pid="${p.id}" onerror="imgFallback(this)" onload="this.closest('.thumb')?.classList.add('loaded')" ${extra}>`;

// Avaliações: base fixa por produto + avaliações feitas no navegador.
const BASE_REVIEWS = [
  { nome: 'Mariana S.', nota: 5, texto: 'Chegou antes do prazo e funciona muito bem. Recomendo!' },
  { nome: 'Carlos A.', nota: 4, texto: 'Bom custo-benefício. A montagem/instalação foi tranquila.' },
  { nome: 'Juliana R.', nota: 5, texto: 'Comprei no carnê e foi bem fácil. Produto de ótima qualidade.' },
  { nome: 'Pedro H.', nota: 4, texto: 'Atendeu às expectativas. Retirei na loja no dia seguinte.' },
  { nome: 'Ana P.', nota: 3, texto: 'Produto bom, mas a entrega demorou um pouco mais que o previsto.' },
];
function hash(s) { return [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7); }
const Reviews = {
  user(id) { return load('cem-reviews', {})[id] || []; },
  add(id, r) { const all = load('cem-reviews', {}); (all[id] ||= []).unshift(r); save('cem-reviews', all); },
  list(id) {
    const h = hash(id);
    const base = [0, 1, 2].map((i) => BASE_REVIEWS[(h + i * 2) % BASE_REVIEWS.length]);
    return [...this.user(id), ...base];
  },
  summary(id) {
    const h = hash(id);
    const baseCount = 12 + (h % 180);
    const baseAvg = 4 + (h % 9) / 10;
    const u = this.user(id);
    const count = baseCount + u.length;
    const avg = (baseAvg * baseCount + u.reduce((s, r) => s + r.nota, 0)) / count;
    return { avg, count };
  },
};
function stars(avg, cls = '') {
  const full = Math.round(avg);
  return `<span class="stars ${cls}" role="img" aria-label="Nota ${avg.toFixed(1).replace('.', ',')} de 5">${
    [1, 2, 3, 4, 5].map((i) => icon('star', `icon${i <= full ? ' filled' : ''}`)).join('')}</span>`;
}

// Estoque simulado: estoque do catálogo menos o que já foi vendido neste navegador.
const Sold = {
  get() { return load('cem-sold', {}); },
  add(id, n) { const s = this.get(); s[id] = Math.max(0, (s[id] || 0) + n); save('cem-sold', s); },
};
const stockOf = (p) => Math.max(0, p.estoque - (Sold.get()[p.id] || 0));

// Carrinho: cada linha é produto + cor + voltagem.
const Cart = {
  items() { return load('cem-cart-v2', [{ key: 'geladeira|Inox|127 V', id: 'geladeira', cor: 'Inox', volt: '127 V', qty: 1 }]); },
  set(items) { save('cem-cart-v2', items); renderCartBadge(); },
  qtyOf(id, exceptKey) { return this.items().filter((i) => i.id === id && i.key !== exceptKey).reduce((n, i) => n + i.qty, 0); },
  // Devolve quantas unidades entraram (limitado ao estoque, somando todas as variações).
  add(id, cor, volt, qty = 1) {
    const n = Math.min(qty, stockOf(productById(id)) - this.qtyOf(id));
    if (n <= 0) return 0;
    const key = `${id}|${cor}|${volt ?? ''}`;
    const items = this.items();
    const found = items.find((i) => i.key === key);
    if (found) found.qty += n; else items.push({ key, id, cor, volt, qty: n });
    this.set(items);
    return n;
  },
  count() { return this.items().reduce((n, i) => n + i.qty, 0); },
  subtotal() { return this.items().reduce((s, i) => s + unitPrice(productById(i.id), i.cor) * i.qty, 0); },
};

const Favs = {
  ids() { return load('cem-favs', []); },
  has(id) { return this.ids().includes(id); },
  toggle(id) {
    const ids = this.ids();
    const on = !ids.includes(id);
    save('cem-favs', on ? [...ids, id] : ids.filter((x) => x !== id));
    renderFavBadge();
    return on;
  },
};

const Prefs = {
  get() { return load('cem-prefs', { entrega: 'casa', pagamento: 'carne', loja: null, cep: null, cupom: null }); },
  set(patch) { save('cem-prefs', { ...this.get(), ...patch }); },
};

function regiaoFrete(cep) {
  const d = Number(String(cep).replace(/\D/g, '')[0]);
  return FRETE_REGIOES.find((r) => d >= r.ini && d <= r.fim);
}

function consultarCep(value) {
  const cep = value.replace(/\D/g, '');
  if (cep.length !== 8) return null;
  const r = regiaoFrete(cep);
  return { cep: `${cep.slice(0, 5)}-${cep.slice(5)}`, valor: r.valor, prazo: r.prazo, regiao: r.nome };
}

const FRETE_PADRAO = 49.9;
const PIX_DESCONTO = 0.05;

function cupomInfo(code, sub) {
  const c = COUPONS[code];
  if (!c) return { erro: 'Cupom inválido.' };
  if (c.min && sub < c.min) return { erro: `Este cupom vale para compras acima de ${brl(c.min)}.` };
  return { code, ...c };
}

function totals() {
  const p = Prefs.get();
  const sub = Cart.subtotal();
  const cupom = p.cupom ? cupomInfo(p.cupom, sub) : null;
  const cupomOk = cupom && !cupom.erro;
  const desconto = cupomOk ? cupom.calc(sub) : 0;
  let frete = 0;
  if (p.entrega === 'casa' && Cart.count()) frete = p.cep ? regiaoFrete(p.cep).valor : FRETE_PADRAO;
  if (cupomOk && cupom.frete) frete = 0;
  const pix = p.pagamento === 'pix' ? (sub - desconto) * PIX_DESCONTO : 0;
  const cupomErro = cupom?.erro ? `Cupom ${p.cupom} não aplicado: ${cupom.erro}` : null;
  return { sub, desconto, cupom: cupomOk ? cupom : null, cupomErro, frete, pix, total: sub - desconto - pix + frete };
}

const User = {
  get() { return load('cem-user', null); },
  // Contas ficam só neste navegador; senha nunca é salva.
  set(u) {
    save('cem-user', u);
    const acc = load('cem-accounts', {});
    acc[u.email.toLowerCase()] = u;
    save('cem-accounts', acc);
  },
  find(email) { return load('cem-accounts', {})[email.toLowerCase()] ?? null; },
  update(patch) { this.set({ ...this.get(), ...patch }); },
  logout() { localStorage.removeItem('cem-user'); },
};

// Pedidos simulados: o status avança com o tempo desde a compra.
const ORDER_STEPS = {
  casa: ['Pedido realizado', 'Pagamento aprovado', 'Em separação', 'Enviado', 'Entregue'],
  loja: ['Pedido realizado', 'Pagamento aprovado', 'Em separação', 'Pronto para retirada', 'Retirado'],
};
const Orders = {
  all() { return load('cem-orders', []); },
  get(id) { return this.all().find((o) => o.id === id); },
  save(order) {
    const all = this.all().filter((o) => o.id !== order.id);
    save('cem-orders', [order, ...all]);
  },
  step(o) {
    if (o.cancelado) return -1;
    if (!o.pago) return 0;
    if (o.retiradoEm) return 4;
    const min = (Date.now() - new Date(o.pagoEm).getTime()) / 60000;
    return Math.min(1 + Math.floor(min / 2), o.entrega.modo === 'loja' ? 3 : 4);
  },
  status(o) { return o.cancelado ? 'Cancelado' : ORDER_STEPS[o.entrega.modo][this.step(o)]; },
  // Pode cancelar até antes de "Enviado" / "Pronto para retirada".
  podeCancelar(o) { return !o.cancelado && this.step(o) < 3; },
  create(order) {
    order.itens.forEach((i) => Sold.add(i.id, i.qty));
    this.save(order);
  },
  cancel(o) {
    o.itens.forEach((i) => Sold.add(i.id, -i.qty));
    this.save({ ...o, cancelado: true, canceladoEm: new Date().toISOString() });
  },
};

function cardBrand(num) {
  const d = num.replace(/\D/g, '');
  if (/^(4011|4312|4389|4514|4576|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(d)) return 'Elo';
  if (/^(606282|3841)/.test(d)) return 'Hipercard';
  if (/^3[47]/.test(d)) return 'American Express';
  if (/^(5[1-5]|2(2[2-9]|[3-6]\d|7[01]|720))/.test(d)) return 'Mastercard';
  if (/^4/.test(d)) return 'Visa';
  return null;
}

function newOrderId() {
  return `CEM-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1e6)).padStart(6, '0')}`;
}

// UI global
function toast(msg) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.append(el);
  }
  el.innerHTML = `${icon('checkCircle')}<span></span>`;
  el.querySelector('span').textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2800);
}

function renderCartBadge() {
  const el = document.querySelector('[data-cart-count]');
  if (!el) return;
  const n = Cart.count();
  el.textContent = n;
  el.hidden = n === 0;
  document.querySelector('[data-cart-label]').textContent = `Carrinho (${n})`;
}
function renderFavBadge() {
  const el = document.querySelector('[data-fav-count]');
  if (!el) return;
  const n = Favs.ids().length;
  el.textContent = n;
  el.hidden = n === 0;
}

function renderHeader() {
  const page = document.body.dataset.page;
  const cur = (p) => (p === page ? ' aria-current="page"' : '');
  const user = User.get();
  const first = user ? escapeHtml(user.nome.split(' ')[0]) : null;
  const deptMenu = Object.entries(DEPARTMENTS).map(([k, d]) => `
    <div class="mega-col">
      <a class="mega-title" href="categoria.html?c=${k}">${icon(d.icon)} ${d.nome}</a>
      ${d.subs.map((s) => `<a href="categoria.html?c=${k}&sub=${encodeURIComponent(s)}">${s}</a>`).join('')}
    </div>`).join('');

  document.getElementById('site-header').innerHTML = `
    <a class="skip" href="#conteudo">Pular para o conteúdo</a>
    <div class="topbar">
      <div class="container">
        <a class="logo" href="index.html"><img src="img/logo.png" alt="Lojas CEM - página inicial" width="202" height="56"></a>
        <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mobile-nav">${icon('menu')}<span class="sr-only">Abrir menu</span></button>
        <nav aria-label="Institucional" class="topnav">
          <a href="categoria.html?c=ofertas">Ofertas</a>
          <a href="institucional.html#pagamentos">Pagamentos</a>
          <a href="institucional.html#sobre">Conheça as Lojas CEM</a>
          <a href="lojas.html">Encontre a Loja mais Próxima</a>
          <a href="institucional.html#trabalhe">Trabalhe Conosco</a>
          <a href="institucional.html#contato">Contato</a>
        </nav>
      </div>
    </div>
    <div class="searchbar">
      <div class="container">
        <form class="search" role="search" action="categoria.html">
          <label for="q">${icon('search')}<span class="sr-only">Buscar produtos</span></label>
          <input id="q" name="q" type="search" placeholder="O que você procura?" list="sugestoes" autocomplete="off" value="${escapeHtml(param('q') ?? '')}">
          <datalist id="sugestoes">${PRODUCTS.map((p) => `<option value="${escapeHtml(p.nome)}">`).join('')}</datalist>
          <button type="submit" aria-label="Buscar">${icon('search')}</button>
        </form>
        <div class="header-actions">
          <details class="dropdown account-menu">
            <summary class="header-link"${cur('conta')}>${icon('user')} <span>${first ? `Olá, ${first}` : 'Minha conta'}</span> ${icon('chevronDown', 'icon sm')}</summary>
            <div class="dropdown-panel">
              ${user ? `
                <a href="minha-conta.html#visao">${icon('home')} Visão geral</a>
                <a href="minha-conta.html#pedidos">${icon('box')} Meus pedidos</a>
                <a href="minha-conta.html#carne">${icon('doc')} Carnê digital</a>
                <a href="minha-conta.html#dados">${icon('user')} Meus dados</a>
                <button type="button" data-logout>${icon('logout')} Sair</button>`
              : `
                <a class="btn btn-primary btn-block" href="conta.html">Entrar</a>
                <a class="btn btn-outline btn-block" href="conta.html#cadastro">Criar conta</a>
                <a href="minha-conta.html#pedidos">${icon('box')} Meus pedidos</a>`}
            </div>
          </details>
          <a class="header-link icon-only" href="favoritos.html"${cur('favoritos')}>${icon('heart')}<span class="sr-only">Favoritos</span><span class="badge" data-fav-count></span></a>
          <a class="header-link" href="carrinho.html"${cur('carrinho')}>${icon('cart')} <span data-cart-label>Carrinho</span><span class="badge" data-cart-count></span></a>
        </div>
      </div>
    </div>
    <nav class="catnav" aria-label="Departamentos" id="mobile-nav">
      <ul class="container">
        <li class="has-mega">
          <details class="dropdown mega">
            <summary${cur('todos')}>${icon('menu')} Todos os departamentos ${icon('chevronDown', 'icon sm')}</summary>
            <div class="dropdown-panel mega-panel">${deptMenu}</div>
          </details>
        </li>
        <li><a href="categoria.html?c=moveis"${cur('moveis')}>${icon('sofa')} Móveis</a></li>
        <li><a href="categoria.html?c=eletro"${cur('eletro')}>${icon('fridge')} Eletrodomésticos</a></li>
        <li><a href="categoria.html?c=tv"${cur('tv')}>${icon('tv')} TV e Áudio</a></li>
        <li><a href="lojas.html"${cur('lojas')}>${icon('pin')} Nossas lojas</a></li>
        <li><a href="atendimento.html"${cur('atendimento')}>${icon('headset')} Atendimento</a></li>
        <li class="mobile-only"><a href="categoria.html?c=ofertas">${icon('tag')} Ofertas</a></li>
        <li class="mobile-only"><a href="institucional.html#sobre">${icon('info')} Institucional</a></li>
      </ul>
    </nav>`;

  const toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelector('[data-logout]')?.addEventListener('click', () => {
    User.logout();
    location.href = 'index.html';
  });
  // Busca: nome exato vai direto para o produto.
  document.querySelector('.search').addEventListener('submit', (e) => {
    const q = document.getElementById('q').value.trim();
    const p = PRODUCTS.find((x) => x.nome.toLowerCase() === q.toLowerCase());
    if (p) { e.preventDefault(); location.href = `produto.html?id=${p.id}`; }
  });
  renderCartBadge();
  renderFavBadge();
}

// Fecha dropdowns ao clicar fora ou apertar Esc.
document.addEventListener('click', (e) => {
  document.querySelectorAll('details.dropdown[open]').forEach((d) => { if (!d.contains(e.target)) d.open = false; });
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('details.dropdown[open]').forEach((d) => { d.open = false; d.querySelector('summary').focus(); });
});

function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <div class="footer-main">
      <div class="container footer-grid">
        <div>
          <h2>Institucional</h2>
          <a href="institucional.html#sobre">Conheça as Lojas CEM</a>
          <a href="lojas.html">Nossas lojas</a>
          <a href="institucional.html#trabalhe">Trabalhe conosco</a>
          <a href="institucional.html#contato">Contato</a>
        </div>
        <div>
          <h2>Ajuda</h2>
          <a href="atendimento.html">Central de atendimento</a>
          <a href="institucional.html#pagamentos">Formas de pagamento</a>
          <a href="institucional.html#trocas">Trocas e devoluções</a>
          <a href="institucional.html#entrega">Entrega e retirada</a>
        </div>
        <div>
          <h2>Minha conta</h2>
          <a href="minha-conta.html#pedidos">Meus pedidos</a>
          <a href="minha-conta.html#carne">Carnê digital</a>
          <a href="favoritos.html">Favoritos</a>
          <a href="carrinho.html">Carrinho</a>
        </div>
        <div>
          <h2>Formas de pagamento</h2>
          <p class="pay-list"><span>${icon('pix')} Pix</span><span>${icon('card')} Cartão</span><span>${icon('carne')} Carnê digital</span></p>
          <h2>Segurança</h2>
          <p class="pay-list"><span>${icon('shield')} Site seguro (ilustrativo)</span></p>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <a href="institucional.html#termos">Termos de uso</a> • <a href="institucional.html#privacidade">Política de privacidade</a><br>
      Protótipo acadêmico não oficial • Dados, preços e condições ilustrativos
    </div>`;
}

function favButton(p, cls = '') {
  const on = Favs.has(p.id);
  return `<button type="button" class="fav ${cls}" data-fav="${p.id}" aria-pressed="${on}" aria-label="${on ? 'Remover dos' : 'Adicionar aos'} favoritos: ${escapeHtml(p.nome)}">${icon('heart', `icon${on ? ' filled' : ''}`)}</button>`;
}

document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-fav]');
  if (!b) return;
  const p = productById(b.dataset.fav);
  const on = Favs.toggle(p.id);
  document.querySelectorAll(`[data-fav="${p.id}"]`).forEach((x) => { x.outerHTML = favButton(p, x.className.replace('fav', '').trim()); });
  toast(on ? 'Adicionado aos favoritos' : 'Removido dos favoritos');
  document.dispatchEvent(new CustomEvent('favs-changed'));
});

function productCard(p) {
  const r = Reviews.summary(p.id);
  const off = discountPct(p);
  const stock = stockOf(p);
  return `
    <article class="card product-card${stock ? '' : ' soldout'}">
      <div class="thumb">
        <a href="produto.html?id=${p.id}" tabindex="-1">${productImg(p, 1, p.nome, 'loading="lazy"')}</a>
        ${off ? `<span class="off">-${off}%</span>` : ''}
        ${stock ? '' : '<span class="off soldout-tag">Esgotado</span>'}
        ${favButton(p)}
      </div>
      <div class="info">
        <h3><a href="produto.html?id=${p.id}">${p.nome}</a></h3>
        <p class="meta">${p.detalhe}<br>Cód. ${p.cod}</p>
        <div class="rating">${stars(r.avg)} <span>(${r.count})</span></div>
        ${p.de ? `<div class="old-price">de ${brl(p.de)}</div>` : ''}
        <div class="price">${priceHtml(p.preco)}</div>
        <div class="installments">10x de ${brl(p.preco / 10)}</div>
        <a class="btn btn-primary" href="produto.html?id=${p.id}">Ver produto ${icon('chevronRight')}</a>
      </div>
    </article>`;
}

function openMiniCart(added) {
  let dlg = document.getElementById('minicart');
  if (!dlg) {
    dlg = document.createElement('dialog');
    dlg.id = 'minicart';
    dlg.className = 'drawer';
    dlg.setAttribute('aria-labelledby', 'mc-title');
    document.body.append(dlg);
    dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target.closest('[data-close]')) dlg.close(); });
  }
  const t = totals();
  dlg.innerHTML = `
    <div class="drawer-head">
      <h2 id="mc-title">${added ? `${icon('checkCircle')} Adicionado ao carrinho` : 'Seu carrinho'}</h2>
      <button type="button" class="icon-btn" data-close aria-label="Fechar">${icon('x')}</button>
    </div>
    <div class="drawer-body">
      ${Cart.items().map((i) => {
        const p = productById(i.id);
        return `<div class="mc-item">${productImg(p, 1, '')}<div><strong>${p.nome}</strong>
          <span class="muted">${[i.cor, i.volt].filter(Boolean).join(' • ')} • ${i.qty} un.</span>
          <span class="mc-price">${brl(unitPrice(p, i.cor) * i.qty)}</span></div></div>`;
      }).join('')}
    </div>
    <div class="drawer-foot">
      <div class="sum-line"><span>Subtotal (${plural(Cart.count(), 'item', 'itens')})</span><strong>${brl(t.sub)}</strong></div>
      <a class="btn btn-primary btn-lg btn-block" href="carrinho.html">Ir para o carrinho</a>
      <button type="button" class="btn btn-outline btn-block" data-close>Continuar comprando</button>
    </div>`;
  dlg.showModal();
}

function mask(input, fn) {
  input.addEventListener('input', () => { input.value = fn(input.value.replace(/\D/g, '')); });
}
const fmtCep = (d) => { d = d.slice(0, 8); return d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d; };
const fmtPhone = (d) => { d = d.slice(0, 11); return d.length > 7 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}` : d.length > 2 ? `(${d.slice(0, 2)}) ${d.slice(2)}` : d; };
const fmtCard = (d) => d.slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
const fmtExp = (d) => { d = d.slice(0, 4); return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d; };
const maskCep = (input) => mask(input, fmtCep);

function luhn(num) {
  const d = num.replace(/\D/g, '');
  if (d.length < 13) return false;
  let s = 0;
  [...d].reverse().forEach((c, i) => { let n = +c; if (i % 2) { n *= 2; if (n > 9) n -= 9; } s += n; });
  return s % 10 === 0;
}

// ViaCEP: API pública; se falhar, o usuário preenche à mão.
async function buscarEndereco(cep) {
  try {
    const r = await fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`);
    const j = await r.json();
    return j.erro ? null : j;
  } catch { return null; }
}

function addressFields(a = {}) {
  const v = (k) => escapeHtml(a[k] ?? '');
  return `
    <div class="form-grid">
      <div class="field span-2"><label for="a-cep">CEP</label>
        <div class="cep-row"><input class="input" id="a-cep" name="cep" inputmode="numeric" autocomplete="postal-code" required value="${v('cep')}">
        <span class="hint" data-cep-status aria-live="polite">Preenchemos o endereço pelo CEP.</span></div></div>
      <div class="field span-3"><label for="a-rua">Rua</label><input class="input" id="a-rua" name="rua" autocomplete="address-line1" required value="${v('rua')}"></div>
      <div class="field"><label for="a-num">Número</label><input class="input" id="a-num" name="numero" required value="${v('numero')}"></div>
      <div class="field span-2"><label for="a-comp">Complemento</label><input class="input" id="a-comp" name="complemento" value="${v('complemento')}"></div>
      <div class="field span-2"><label for="a-bairro">Bairro</label><input class="input" id="a-bairro" name="bairro" required value="${v('bairro')}"></div>
      <div class="field span-3"><label for="a-cidade">Cidade</label><input class="input" id="a-cidade" name="cidade" autocomplete="address-level2" required value="${v('cidade')}"></div>
      <div class="field"><label for="a-uf">UF</label><input class="input" id="a-uf" name="uf" maxlength="2" autocomplete="address-level1" required value="${v('uf')}"></div>
    </div>`;
}

function bindAddress(form) {
  const cep = form.querySelector('[name=cep]');
  const status = form.querySelector('[data-cep-status]');
  maskCep(cep);
  cep.addEventListener('input', async () => {
    if (cep.value.replace(/\D/g, '').length !== 8) return;
    status.textContent = 'Buscando endereço...';
    const r = await buscarEndereco(cep.value);
    if (!r) { status.textContent = 'CEP não encontrado. Preencha o endereço manualmente.'; return; }
    form.querySelector('[name=rua]').value = r.logradouro;
    form.querySelector('[name=bairro]').value = r.bairro;
    form.querySelector('[name=cidade]').value = r.localidade;
    form.querySelector('[name=uf]').value = r.uf;
    status.textContent = 'Endereço encontrado.';
    form.querySelector('[name=numero]').focus();
  });
}

function readAddress(form) {
  const f = new FormData(form);
  const a = Object.fromEntries(['cep', 'rua', 'numero', 'complemento', 'bairro', 'cidade', 'uf'].map((k) => [k, String(f.get(k) ?? '').trim()]));
  a.uf = a.uf.toUpperCase();
  const faltando = ['rua', 'numero', 'bairro', 'cidade', 'uf'].filter((k) => !a[k]);
  if (a.cep.replace(/\D/g, '').length !== 8) return { erro: 'Informe um CEP válido.' };
  if (faltando.length) return { erro: 'Preencha todos os campos obrigatórios do endereço.' };
  return a;
}
const addrLine = (a) => `${a.rua}, ${a.numero}${a.complemento ? ` - ${a.complemento}` : ''} • ${a.bairro}`;
const addrCity = (a) => `${a.cidade} / ${a.uf} • CEP ${a.cep}`;

renderHeader();
renderFooter();
