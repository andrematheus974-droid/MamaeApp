/* Mãe Presente — núcleo do aplicativo: estado, navegação, primeira abertura, Hoje e Meu Dia */
window.MP = window.MP || {};
(function (MP) {
'use strict';
const KEY = 'mp_estado_v1';
const $ = (s, r) => (r || document).querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
const uid = () => Math.random().toString(36).slice(2, 9);
const pad = n => String(n).padStart(2, '0');
const dkey = d => { d = d || new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const DIAS = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
const D3 = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

/* ---------- estado ---------- */
function novo() {
  return { v: 1, onboard: false, perfil: { nome: '', filhos: [], carga: '', horario: '', tipo: '' },
    tarefas: [], feitos: {}, planoB: {}, licoes: {}, checks: {}, estrelas: {}, kids: {},
    compras: [], cardapio: {}, plano30: [], despensa: [], favoritas: [], brincFeitas: [], brincPulo: 0, mochila: {} };
}
function load() {
  try { const r = JSON.parse(localStorage.getItem(KEY)); if (r && r.v === 1) return Object.assign(novo(), r); } catch (e) {}
  return novo();
}
let S = load();
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
const U = { ob: { step: 0, nome: '', filhos: [{ nome: '', idade: 3 }], carga: '', horario: '' }, dia: new Date().getDay(), mt: 'modulo' };

/* ---------- ícones ---------- */
const ic = d => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const I = {
  home: ic('<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/>'),
  cal: ic('<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'),
  kids: ic('<circle cx="8.5" cy="8" r="3"/><circle cx="17" cy="9.2" r="2.3"/><path d="M3 19c.5-3.5 2.7-5.5 5.5-5.5s5 2 5.5 5.5M15 14.2c2.7-.5 5 1 6 4.8"/>'),
  book: ic('<path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5c-3.5-.5-6.5 0-8.5 1.5Z"/><path d="M12 6.5v13"/>'),
  dots: ic('<circle cx="5" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="19" cy="12" r="1.4" fill="currentColor"/>'),
  chev: ic('<path d="m9 6 6 6-6 6"/>'), back: ic('<path d="m15 6-6 6 6 6"/>'),
  plus: ic('<path d="M12 5v14M5 12h14"/>'), x: ic('<path d="M6 6l12 12M18 6 6 18"/>'),
  check: ic('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
  clock: ic('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  cart: ic('<path d="M3 4h2.5l2.2 10.5h10L20 7H7"/><circle cx="9" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>'),
  star: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 3 2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 16.9 6.6 19.8l1.1-6.1L3.2 9.4l6.1-.8Z"/></svg>',
  play: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5.5v13l11-6.5Z"/></svg>',
  edit: ic('<path d="M4 20h4L19 9l-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/>'),
  search: ic('<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>'),
  pan: ic('<path d="M4 11h16v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-3Z"/><path d="M2.5 11h19M9 7c-1-1.5 1-2 0-3.5M14 7c-1-1.5 1-2 0-3.5"/>'),
  dice: ic('<rect x="4" y="4" width="16" height="16" rx="3.5"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="15" r="1" fill="currentColor"/><circle cx="15" cy="9" r="1" fill="currentColor"/><circle cx="9" cy="15" r="1" fill="currentColor"/>'),
  heart: ic('<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z"/>'),
  user: ic('<circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c.8-4 3.7-6 7.5-6s6.700 2 7.5 6"/>'),
  down: ic('<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>'),
  list: ic('<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.500" cy="6" r="1" fill="currentColor"/><circle cx="4.500" cy="12" r="1" fill="currentColor"/><circle cx="4.500" cy="18" r="1" fill="currentColor"/>'),
  bag: ic('<path d="M6 8h12l1 12H5L6 8Z"/><path d="M9 8V6.500a3 3 0 0 1 6 0V8"/>'),
  flag: ic('<path d="M5 21V4M5 5h11l-2 3.500 2 3.500H5"/>'),
  chat: ic('<path d="M4 5h16v11H9l-5 4V5Z"/>'),
  phone: ic('<rect x="7" y="2.500" width="10" height="19" rx="2.500"/><path d="M11 18.500h2"/>')
};
const LOGO = '<svg viewBox="0 0 24 24" class="logo-i" aria-hidden="true"><path d="M12 3.200 2.600 11a1 1 0 0 0 1.300 1.500l.900-.800V20a1 1 0 0 0 1 1h4.400v-5.200h3.600V21h4.400a1 1 0 0 0 1-1v-8.300l.900.800a1 1 0 0 0 1.300-1.500Z" fill="#F2785C"/></svg>';

/* ---------- blocos do dia ---------- */
function blocos() {
  return S.perfil.carga === 'trabalha_fora'
    ? [{ k: 0, n: 'Antes de sair', e: '☀️', de: 5, ate: 9 }, { k: 1, n: 'Quando você chega', e: '🚪', de: 17, ate: 19 }, { k: 2, n: 'Jantar', e: '🍲', de: 19, ate: 20.5 }, { k: 3, n: 'Hora de dormir', e: '🌙', de: 20.5, ate: 29 }]
    : [{ k: 0, n: 'Manhã', e: '☀️', de: 5, ate: 11 }, { k: 1, n: 'Almoço', e: '🍽️', de: 11, ate: 14 }, { k: 2, n: 'Tarde', e: '🌤️', de: 14, ate: 18 }, { k: 3, n: 'Noite', e: '🌙', de: 18, ate: 29 }];
}
function blocoAgora() {
  const n = new Date(); let h = n.getHours() + n.getMinutes() / 60; if (h < 5) h += 24;
  const bs = blocos(); const b = bs.find(b => h >= b.de && h < b.ate) || bs.find(b => b.de > h) || bs[0];
  return b.k;
}
function tarefasDoDia(dow) { return S.tarefas.filter(t => !t.dias || t.dias.includes(dow)).sort((a, b) => a.b - b.b); }
function usarModelo(id) {
  const m = MP.MODELOS.find(x => x.id === id) || MP.MODELOS[0];
  S.tarefas = m.t.map(t => ({ id: uid(), t: t[0], b: t[1], min: t[2], dias: t[3] || null }));
}
function calcPerfil(p) {
  const id = p.filhos.map(x => +x.idade), nasc = id.filter(i => i >= 0);
  if (id.length && !nasc.length) return 'ninho';
  if (p.carga === 'mae_solo') return 'sozinha';
  if (nasc.length && Math.min.apply(null, nasc) <= 2) return 'interrompida';
  if (p.carga === 'trabalha_fora' || id.length > 1) return 'malabarista';
  return 'apaga';
}
function modeloDoPerfil(p) {
  if (p.carga === 'trabalha_fora') return 'fora';
  return { ninho: 'ninho', sozinha: 'sozinha', interrompida: 'interrompida', malabarista: 'muitos', apaga: 'padrao' }[p.tipo] || 'padrao';
}
const idadeTxt = i => i < 0 ? 'ainda vai nascer' : i === 0 ? 'menos de 1 ano' : i === 1 ? '1 ano' : i + ' anos';
function sequencia() {
  let n = 0, d = new Date();
  if (!(S.feitos[dkey(d)] || []).length) d = addDays(d, -1);
  while ((S.feitos[dkey(d)] || []).length) { n++; d = addDays(d, -1); }
  return n;
}

/* ---------- interface base ---------- */
function toast(t) { const el = $('#toast'); el.textContent = t; el.className = 'on'; clearTimeout(toast.t); toast.t = setTimeout(() => el.className = '', 2200); }
function modal(html, cls) { $('#modal').innerHTML = `<div class="ov" data-a="fechar"><div class="sheet ${cls || ''}">${html}</div></div>`; document.body.classList.add('lock'); }
function closeModal() { $('#modal').innerHTML = ''; document.body.classList.remove('lock'); }
function route() { return (location.hash.replace(/^#\/?/, '') || 'hoje').split('/'); }
function go(h) { if (location.hash === '#/' + h) render(); else location.hash = '#/' + h; }
/* imagens: tenta o arquivo novo; se não existir, usa o reserva; se também não existir, some sem quebrar a tela */
const slug = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pic = (novo, reserva) => `<img src="imagens/${novo}" ${reserva ? `data-fb="imagens/${reserva}"` : ''} alt="" loading="lazy">`;
const banner = (novo, reserva, cls) => `<div class="banner ${cls || ''}" data-imgbox>${pic(novo, reserva)}</div>`;
document.addEventListener('error', e => {
  const t = e.target; if (!t || t.tagName !== 'IMG') return;
  if (t.dataset.fb) { const f = t.dataset.fb; delete t.dataset.fb; t.src = f; return; }
  const box = t.closest('[data-imgbox]'); if (box) box.classList.add('noimg'); else t.style.display = 'none';
}, true);
function top(t, sub, back, img) {
  return `<header class="top">${back ? `<a class="bk" href="#/${back}" aria-label="Voltar">${I.back}</a>` : ''}<div><h1 class="h1">${esc(t)}</h1>${sub ? `<p class="sub">${esc(sub)}</p>` : ''}</div></header>${img ? banner(img[0], img[1]) : ''}`;
}
const TABS = [['hoje', 'Hoje', I.home], ['meu-dia', 'Meu Dia', I.cal], ['criancas', 'Crianças', I.kids], ['modulos', 'Módulos', I.book], ['mais', 'Mais', I.dots]];
function shell(view, cur) {
  const ini = esc((S.perfil.nome || 'M').trim().charAt(0).toUpperCase());
  const link = t => `<a href="#/${t[0]}" class="${cur === t[0] ? 'on' : ''}">${t[2]}<span>${t[1]}</span></a>`;
  return `<div class="app"><aside class="side"><div class="logo">${LOGO}<b>MÃE<br>PRESENTE</b></div><nav>${TABS.map(link).join('')}</nav><a class="side-me" href="#/mais/perfil"><span class="avatar">${ini}</span><span>${esc(S.perfil.nome)}</span></a></aside>
  <main class="main"><header class="appbar"><a class="logo" href="#/hoje">${LOGO}<b>MÃE<br>PRESENTE</b></a><a class="me" href="#/mais/perfil" aria-label="Meu perfil"><span>${esc(S.perfil.nome)}</span><span class="avatar">${ini}</span></a></header>${view}</main><nav class="tab">${TABS.map(link).join('')}</nav></div>`;
}

const V = {}, A = {}, IN = {}, CH = {};
function render() {
  const app = $('#app');
  if (!S.onboard) { app.innerHTML = V.onboard(); return; }
  const r = route(); let v = V[r[0]];
  if (r[0] === 'mais' && r[1]) v = V['mais/' + r[1]];
  if (r[0] === 'criancas' && r[1]) v = V.kid;
  if (r[0] === 'modulos' && r[1]) v = V.modulo;
  if (!v) { v = V.hoje; r[0] = 'hoje'; }
  const html = v(r);
  app.innerHTML = r[0] === 'licao' ? html : shell(html, r[0]);
}
window.addEventListener('hashchange', () => { closeModal(); window.scrollTo(0, 0); render(); });
document.addEventListener('click', e => {
  const el = e.target.closest('[data-a]'); if (!el) return;
  const f = A[el.dataset.a]; if (f) f(el, e);
});
document.addEventListener('input', e => { const k = e.target.dataset && e.target.dataset.i; if (k && IN[k]) IN[k](e.target); });
document.addEventListener('change', e => { const k = e.target.dataset && e.target.dataset.c; if (k && CH[k]) CH[k](e.target); });
A.fechar = (el, e) => { if (e.target === el || el.dataset.f) closeModal(); };
A.ir = el => go(el.dataset.h);

/* ---------- primeira abertura ---------- */
V.onboard = () => {
  const o = U.ob, n = esc(o.nome.trim());
  const dots = `<div class="ob-dots">${[0, 1, 2, 3, 4].map(i => `<i class="${i <= o.step ? 'on' : ''}"></i>`).join('')}</div>`;
  const opt = (k, v, e, t) => `<button class="opt ${o[k] === v ? 'sel' : ''}" data-a="ob-set" data-k="${k}" data-v="${v}"><span class="e">${e}</span><span>${t}</span></button>`;
  let h = '';
  if (o.step === 0) h = `<div class="ob-hero"><img src="imagens/capa-3-mae-brincando.webp" alt=""></div>
    <div class="logo center">${LOGO}<b>MÃE PRESENTE</b></div>
    <h1 class="h1 c">Bem-vinda! Vamos montar o seu dia em 1 minuto.</h1>
    <p class="sub c">São 4 perguntas rápidas. Com elas, o aplicativo encaixa a casa nos horários das suas crianças.</p>
    <label class="field">Como você se chama?<input class="inp" id="ob-nome" data-i="ob-nome" value="${n}" placeholder="Seu primeiro nome" autocomplete="given-name" maxlength="24"></label>
    <button class="btn pri" data-a="ob-next">Começar</button>`;
  if (o.step === 1) h = `<h1 class="h1 c">${n}, como se chamam seus filhos?</h1><p class="sub c">O aplicativo vai falar deles pelo nome e sugerir tarefas e brincadeiras pra idade de cada um.</p>
    <div class="kidlist">${o.filhos.map((f, i) => `<div class="kidrow"><input class="inp" data-i="ob-fn" data-k="${i}" value="${esc(f.nome)}" placeholder="Nome" maxlength="20">
      <select class="inp" data-c="ob-fi" data-k="${i}">${[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(a => `<option value="${a}" ${+f.idade === a ? 'selected' : ''}>${a < 0 ? 'Ainda vai nascer' : a === 0 ? 'Menos de 1 ano' : a === 1 ? '1 ano' : a + ' anos'}</option>`).join('')}</select>
      ${o.filhos.length > 1 ? `<button class="icb" data-a="ob-rm" data-k="${i}" aria-label="Remover">${I.x}</button>` : ''}</div>`).join('')}</div>
    <button class="btn ghost" data-a="ob-add">${I.plus} Adicionar outro filho</button>
    <button class="btn pri" data-a="ob-next">Continuar</button>`;
  if (o.step === 2) h = `<h1 class="h1 c">Além da casa e dos filhos, o que mais você segura?</h1><p class="sub c">Isso muda os horários do seu dia.</p>
    <div class="opts">${opt('carga', 'trabalha_fora', '💼', 'Trabalho fora')}${opt('carga', 'trabalha_em_casa', '🏠', 'Trabalho de casa')}${opt('carga', 'em_casa', '🙋‍♀️', 'Fico em casa com eles o dia todo')}${opt('carga', 'mae_solo', '🤱', 'Sou mãe solo, é tudo comigo')}</div>`;
  if (o.step === 3) h = `<h1 class="h1 c">Em que hora do dia a casa mais desanda?</h1><p class="sub c">É por aí que o seu plano começa.</p>
    <div class="opts">${opt('horario', 0, '☀️', 'Manhã: café, uniforme, sair correndo')}${opt('horario', 1, '🍽️', 'Almoço: comida, louça, criança chegando')}${opt('horario', 2, '🌤️', 'Tarde: brinquedo pra todo lado')}${opt('horario', 3, '🌙', 'Noite: banho, jantar, cama')}</div>`;
  if (o.step === 4) {
    const p = { nome: o.nome, filhos: o.filhos, carga: o.carga, horario: o.horario }; p.tipo = calcPerfil(p);
    const pf = MP.PERFIS[p.tipo], m = MP.MODELOS.find(x => x.id === modeloDoPerfil(p)), dow = new Date().getDay();
    const prevCarga = S.perfil.carga; S.perfil.carga = o.carga; const bs = blocos(); S.perfil.carga = prevCarga;
    const ts = m.t.filter(t => !t[3] || t[3].includes(dow));
    h = `<p class="sub c">Pronto, ${n}! Seu perfil é</p><h1 class="h1 c hl">${pf.n}</h1>
      <div class="ob-hero sm"><img src="imagens/${pf.img}" alt=""></div><p class="sub c">${pf.d}</p>
      <div class="card peach"><b class="ct">Seu dia encaixado de hoje</b>${bs.map(b => { const t = ts.find(x => x[1] === b.k); return `<div class="pv ${+o.horario === b.k ? 'hot' : ''}"><span>${b.e}</span><div><b>${b.n}</b>${t ? `${esc(t[0])} · ${t[2]} min` : 'Livre'}</div></div>`; }).join('')}</div>
      <p class="sub c">${pf.dica}</p><button class="btn pri" data-a="ob-fim">Entrar no meu aplicativo</button>`;
  }
  return `<div class="ob">${o.step > 0 ? `<button class="bk" data-a="ob-back" aria-label="Voltar">${I.back}</button>` : ''}${dots}${h}</div>`;
};
IN['ob-nome'] = el => U.ob.nome = el.value;
IN['ob-fn'] = el => U.ob.filhos[+el.dataset.k].nome = el.value;
CH['ob-fi'] = el => U.ob.filhos[+el.dataset.k].idade = +el.value;
A['ob-add'] = () => { U.ob.filhos.push({ nome: '', idade: 3 }); render(); };
A['ob-rm'] = el => { U.ob.filhos.splice(+el.dataset.k, 1); render(); };
A['ob-back'] = () => { U.ob.step--; render(); };
A['ob-set'] = el => { U.ob[el.dataset.k] = isNaN(+el.dataset.v) ? el.dataset.v : +el.dataset.v; U.ob.step++; render(); window.scrollTo(0, 0); };
A['ob-next'] = () => {
  const o = U.ob;
  if (o.step === 0 && !o.nome.trim()) { toast('Escreva o seu nome pra continuar'); return; }
  if (o.step === 1) { o.filhos = o.filhos.filter(f => f.nome.trim()); if (!o.filhos.length) { o.filhos = [{ nome: '', idade: 3 }]; toast('Escreva o nome de pelo menos um filho'); render(); return; } }
  o.step++; render(); window.scrollTo(0, 0);
};
A['ob-fim'] = () => {
  const o = U.ob;
  S.perfil = { nome: o.nome.trim(), filhos: o.filhos.map(f => ({ id: uid(), nome: f.nome.trim(), idade: +f.idade })), carga: o.carga, horario: +o.horario };
  S.perfil.tipo = calcPerfil(S.perfil);
  if (!S.tarefas.length) usarModelo(modeloDoPerfil(S.perfil));
  S.onboard = true; save(); location.hash = '#/hoje'; render(); window.scrollTo(0, 0);
};

/* ---------- HOJE ---------- */
function proximaLicao() {
  for (const m of MP.MODULOS) if (m.licoes) for (let i = 0; i < m.licoes.length; i++) if (!S.licoes[m.id + '/' + i]) return { m, i };
  return null;
}
function brincDoDia() {
  const ids = S.perfil.filhos.map(f => f.idade).filter(i => i >= 0);
  let pool = MP.BRINCADEIRAS.filter(b => !ids.length || ids.some(i => i >= b[1] && i <= b[2]));
  if (!pool.length) pool = MP.BRINCADEIRAS;
  const d = new Date(), seed = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate() + (S.brincPulo || 0);
  return pool[seed % pool.length];
}
function nomesFilhos() {
  const n = S.perfil.filhos.filter(f => f.idade >= 0).map(f => f.nome);
  if (!n.length) return 'eles';
  return n.length === 1 ? n[0] : n.slice(0, -1).join(', ') + ' e ' + n[n.length - 1];
}
V.hoje = () => {
  const d = new Date(), dk = dkey(d), fe = S.feitos[dk] || [], bs = blocos(), ag = blocoAgora(), pb = S.planoB[dk];
  const ts = pb ? MP.PLANO_B.map((t, i) => ({ id: 'pb' + i, t: t[0], min: t[1], b: -1 })) : tarefasDoDia(d.getDay());
  const done = ts.filter(t => fe.includes(t.id)).length, hr = d.getHours();
  const oi = hr < 5 ? 'Boa noite' : hr < 12 ? 'Bom dia' : hr < 18 ? 'Boa tarde' : 'Boa noite';
  const seq = sequencia(), nx = proximaLicao(), br = brincDoDia();
  const ini = esc((S.perfil.nome || 'M').charAt(0).toUpperCase());
  const row = t => { const ok = fe.includes(t.id), b = bs[t.b]; return `<button class="trow ${ok ? 'ok' : ''} ${!pb && t.b === ag && !ok ? 'now' : ''}" data-a="feito" data-id="${t.id}"><span class="chk">${ok ? I.check : ''}</span><span class="tt"><b>${b ? b.n : 'Essencial'}</b><span>${esc(t.t)} · ${t.min} min</span></span>${!pb && t.b === ag && !ok ? '<i class="badge">Agora</i>' : ''}</button>`; };
  return `  <h1 class="oi">${oi}, ${esc(S.perfil.nome)}! ${hr >= 5 && hr < 18 ? '☀️' : '🌙'}</h1>
  <section class="card peach dia"><div class="dia-h"><b class="ct">${pb ? 'Plano B: só o essencial' : 'Seu dia encaixado'}</b>${seq > 1 ? `<span class="seq">🔥 ${seq} dias seguidos</span>` : ''}</div>
    <div class="prog"><div><i style="width:${ts.length ? Math.round(done / ts.length * 100) : 0}%"></i></div><span>${done} de ${ts.length} feitos</span></div>
    ${ts.length ? ts.map(row).join('') : `<p class="empty">Nenhuma tarefa pra hoje. <a href="#/meu-dia">Montar o meu dia</a></p>`}
    ${pb ? `<p class="mini c">O resto fica pra amanhã, sem culpa. <button class="lk" data-a="planob-off">Voltar ao dia normal</button></p>` : (ts.length && done === ts.length ? `<p class="mini c ok">Dia encaixado! Agora é com ${esc(nomesFilhos())}. 💛</p>` : '')}
  </section>
  <button class="card sage momento" data-a="brinc-ver" data-n="${esc(br[0])}"><span class="mi" data-imgbox>${I.kids}${pic('brincadeiras/' + slug(br[0]) + '.webp', 'vitoria-brincar.webp')}</span><span><b>Momento com ${esc(nomesFilhos())}:</b>${esc(br[0])} · ${br[3]} min</span>${I.chev}</button>
  <div class="short">
    <a href="#/mais/15min"><i>${I.clock}</i>15 minutos</a><a href="#/mais/brincar"><i>${I.dice}</i>Brincar</a><a href="#/mais/receitas"><i>${I.pan}</i>Receitas</a><a href="#/mais/compras"><i>${I.cart}</i>Compras</a>
  </div>
  ${nx ? `<a class="card coral cont" href="#/licao/${nx.m.id}/${nx.i}"><img src="imagens/${nx.m.img}" alt=""><span><small>Continue de onde parou</small><b>${esc(nx.m.licoes[nx.i].t)}</b><em>${esc(nx.m.n)} · ${nx.m.licoes[nx.i].min} min</em></span><i>${I.play}</i></a>` : ''}
  ${!pb ? `<button class="btn ghost" data-a="planob-on">Meu dia desandou</button>` : ''}`;
};
A.feito = el => {
  const dk = dkey(), id = el.dataset.id; const a = S.feitos[dk] = S.feitos[dk] || [];
  const i = a.indexOf(id); if (i < 0) a.push(id); else a.splice(i, 1);
  save(); render();
};
A['planob-on'] = () => modal(`<h2 class="h2">Tudo bem. Hoje é dia de Plano B.</h2><p class="sub">Dia difícil acontece em toda casa com criança. Hoje você faz só 3 coisas pequenas e o resto espera, sem culpa.</p>
  <ul class="ul">${MP.PLANO_B.map(t => `<li>${esc(t[0])} <small>${t[1]} min</small></li>`).join('')}</ul>
  <button class="btn pri" data-a="planob-ok">Ativar o Plano B de hoje</button><button class="btn ghost" data-a="fechar" data-f="1">Agora não</button>`);
A['planob-ok'] = () => { S.planoB[dkey()] = true; save(); closeModal(); render(); toast('Plano B ativado. Só o essencial hoje.'); };
A['planob-off'] = () => { delete S.planoB[dkey()]; save(); render(); };
A['brinc-ver'] = el => MP.verBrinc(el.dataset.n);

/* ---------- MEU DIA ---------- */
V['meu-dia'] = () => {
  const bs = blocos(), dow = U.dia, hoje = new Date().getDay(), ts = tarefasDoDia(dow);
  const tot = ts.reduce((a, t) => a + t.min, 0);
  return `${top('Meu Dia', 'A sua semana, encaixada nos horários das crianças.', '', ['app/meu-dia.webp', 'dia-30.webp'])}
  <div class="daytabs">${[1, 2, 3, 4, 5, 6, 0].map(i => `<button class="${i === dow ? 'on' : ''} ${i === hoje ? 'hj' : ''}" data-a="dia" data-d="${i}">${D3[i]}</button>`).join('')}</div>
  <p class="mini">${DIAS[dow]}${dow === hoje ? ' (hoje)' : ''}: ${ts.length} ${ts.length === 1 ? 'tarefa' : 'tarefas'}, ${tot} minutos no total.</p>
  ${bs.map(b => { const l = ts.filter(t => t.b === b.k); return `<section class="bloc"><div class="bloc-h"><span>${b.e}</span><b>${b.n}</b><button class="icb add" data-a="tarefa-nova" data-b="${b.k}" aria-label="Adicionar tarefa">${I.plus}</button></div>
    ${l.length ? l.map(t => `<button class="titem" data-a="tarefa-ed" data-id="${t.id}"><span><b>${esc(t.t)}</b><small>${t.min} min · ${t.dias ? t.dias.slice().sort().map(d => D3[d]).join(', ') : 'todos os dias'}</small></span>${I.edit}</button>`).join('') : `<p class="empty">Livre. Toque no + pra encaixar uma tarefa.</p>`}</section>`; }).join('')}
  <button class="btn sec" data-a="modelos">${I.list} Usar um modelo pronto</button>
  <p class="mini c">Dica: uma tarefa curta por bloco já mantém a casa andando. Mais que isso é bônus.</p>`;
};
A.dia = el => { U.dia = +el.dataset.d; render(); };
function tarefaForm(t) {
  const bs = blocos();
  modal(`<h2 class="h2">${t.id ? 'Editar tarefa' : 'Nova tarefa'}</h2>
  <label class="field">O que fazer<input class="inp" id="tf-t" value="${esc(t.t)}" placeholder="Ex.: Brinquedos no cesto com música" maxlength="70"></label>
  <label class="field">Em que bloco do dia<select class="inp" id="tf-b">${bs.map(b => `<option value="${b.k}" ${t.b === b.k ? 'selected' : ''}>${b.n}</option>`).join('')}</select></label>
  <label class="field">Quanto tempo<select class="inp" id="tf-m">${[5, 10, 15, 20, 30].map(m => `<option ${t.min === m ? 'selected' : ''}>${m}</option>`).join('')}</select></label>
  <div class="field">Em quais dias<div class="dsel" id="tf-d">${[1, 2, 3, 4, 5, 6, 0].map(i => `<button type="button" class="${!t.dias || t.dias.includes(i) ? 'on' : ''}" data-a="tf-dia" data-d="${i}">${D3[i]}</button>`).join('')}</div></div>
  <button class="btn pri" data-a="tarefa-ok" data-id="${t.id || ''}">Salvar</button>
  ${t.id ? `<button class="btn ghost red" data-a="tarefa-del" data-id="${t.id}">Excluir tarefa</button>` : ''}`);
}
A['tarefa-nova'] = el => tarefaForm({ t: '', b: +el.dataset.b, min: 10, dias: [U.dia] });
A['tarefa-ed'] = el => tarefaForm(S.tarefas.find(t => t.id === el.dataset.id));
A['tf-dia'] = el => el.classList.toggle('on');
A['tarefa-ok'] = el => {
  const t = $('#tf-t').value.trim(); if (!t) { toast('Escreva a tarefa'); return; }
  const dias = Array.from(document.querySelectorAll('#tf-d .on')).map(b => +b.dataset.d);
  if (!dias.length) { toast('Escolha pelo menos um dia'); return; }
  const o = { t, b: +$('#tf-b').value, min: +$('#tf-m').value, dias: dias.length === 7 ? null : dias };
  if (el.dataset.id) Object.assign(S.tarefas.find(x => x.id === el.dataset.id), o); else S.tarefas.push(Object.assign({ id: uid() }, o));
  save(); closeModal(); render(); toast('Tarefa salva');
};
A['tarefa-del'] = el => { S.tarefas = S.tarefas.filter(t => t.id !== el.dataset.id); save(); closeModal(); render(); };
A.modelos = () => modal(`<h2 class="h2">Modelos prontos</h2><p class="sub">Escolha um modelo e depois ajuste do seu jeito. O modelo substitui as tarefas que estão no Meu Dia.</p>
  ${MP.MODELOS.map(m => `<button class="mrow" data-a="modelo-ok" data-id="${m.id}"><span><b>${esc(m.nome)}</b><small>${esc(m.desc)}</small></span>${I.chev}</button>`).join('')}`);
A['modelo-ok'] = el => { usarModelo(el.dataset.id); save(); closeModal(); render(); toast('Modelo aplicado. Ajuste como quiser.'); };

/* ---------- exporta pro resto do app ---------- */
Object.assign(MP, { V, A, IN, CH, U, I, LOGO, esc, md, uid, dkey, addDays, DIAS, D3, save, render, go, route, top, pic, banner, slug, modal, closeModal, toast, blocos, idadeTxt, calcPerfil, modeloDoPerfil, usarModelo, nomesFilhos, novo });
Object.defineProperty(MP, 'S', { get() { return S; }, set(v) { S = v; } });
MP.start = () => { render(); if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('service-worker.js').catch(() => {}); };
})(window.MP);
