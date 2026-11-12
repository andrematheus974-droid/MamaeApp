/* Mãe Presente — Crianças, Módulos e o leitor de lições */
(function (MP) {
'use strict';
const { V, A, IN, CH, U, I, esc, md, uid, dkey, addDays, D3, save, render, go, top, pic, banner, slug, modal, closeModal, toast } = MP;
const $ = s => document.querySelector(s);

/* ================= CRIANÇAS ================= */
const CORES = ['#F2785C', '#8FB59B', '#E9B44C', '#7FA6C9', '#C58BB5'];
const faixaDe = i => i < 2 ? 'bebe' : i <= 3 ? '2-3' : i <= 5 ? '4-5' : i <= 8 ? '6-8' : '9-12';
const semana = () => { const d = new Date(), s = addDays(d, -((d.getDay() + 6) % 7)); return dkey(s); };
function kid(id) {
  const f = MP.S.perfil.filhos.find(x => x.id === id); if (!f) return null;
  const S = MP.S; if (!S.kids[id]) {
    const fx = MP.TAREFAS_IDADE.find(x => x.k === faixaDe(f.idade));
    S.kids[id] = { t: fx.k === 'bebe' ? [] : fx.t.slice(0, 3), meta: 10, premio: '', lanche: [0, 1, 2, 3, 4].map(i => (i * 3 + f.nome.length) % MP.LANCHEIRA.length) };
  }
  return f;
}
V.criancas = () => {
  const fs = MP.S.perfil.filhos;
  return `${top('Crianças', 'Tarefas da idade, estrelas, rotina e lancheira de cada um.', '', ['app/criancas.webp', 'vitoria-ajudando.webp'])}
  ${fs.map((f, i) => { kid(f.id); const k = MP.S.kids[f.id], st = estrelasSemana(f.id); return `<a class="kcard" href="#/criancas/${f.id}"><span class="kav" style="background:${CORES[i % 5]}">${esc(f.nome.charAt(0).toUpperCase())}</span><span class="kinfo"><b>${esc(f.nome)}</b><small>${MP.idadeTxt(f.idade)}</small>${f.idade >= 2 ? `<span class="kst">${I.star} ${st} de ${k.meta} estrelas na semana</span>` : ''}</span>${I.chev}</a>`; }).join('')}
  <a class="btn ghost" href="#/mais/perfil">${I.plus} Adicionar ou editar filhos</a>
  <div class="card sage tip"><b>Por que isso funciona</b><p>Criança que tem uma tarefa do tamanho dela se sente parte da casa. Não é sobre ficar perfeito: é sobre participar.</p></div>`;
};
function estrelasSemana(id) { const w = (MP.S.estrelas[id] || {})[semana()] || {}; return Object.keys(w).reduce((a, k) => a + w[k].length, 0); }
V.kid = r => {
  const f = kid(r[1]); if (!f) return V.criancas();
  const S = MP.S, k = S.kids[f.id], tab = U.kt || (f.idade < 2 ? 'tarefas' : 'estrelas'), idx = S.perfil.filhos.indexOf(f);
  const fxk = U.kfx && U.kfxId === f.id ? U.kfx : faixaDe(f.idade), fx = MP.TAREFAS_IDADE.find(x => x.k === fxk);
  const tabs = [['estrelas', 'Estrelas'], ['tarefas', 'Tarefas'], ['rotina', 'Rotina'], ['lanche', 'Lancheira']];
  let h = '';
  if (tab === 'estrelas') {
    const w = ((S.estrelas[f.id] || {})[semana()]) || {}, tot = estrelasSemana(f.id), hoje = (new Date().getDay() + 6) % 7;
    h = !k.t.length ? `<p class="empty">Escolha as tarefas de ${esc(f.nome)} na aba Tarefas pra montar o quadro.</p>` :
      `<div class="card peach"><div class="dia-h"><b class="ct">Quadro da semana</b><span class="seq">${I.star} ${tot} de ${k.meta}</span></div>
      <div class="prog"><div><i style="width:${Math.min(100, Math.round(tot / k.meta * 100))}%"></i></div></div>
      <div class="quadro"><div class="qh"><span></span>${['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((d, i) => `<b class="${i === hoje ? 'hj' : ''}">${d}</b>`).join('')}</div>
      ${k.t.map((t, ti) => `<div class="ql"><span>${esc(t)}</span>${[0, 1, 2, 3, 4, 5, 6].map(d => `<button class="st ${(w[t] || []).includes(d) ? 'on' : ''}" data-a="estrela" data-k="${f.id}" data-t="${ti}" data-d="${d}" aria-label="Estrela">${I.star}</button>`).join('')}</div>`).join('')}</div>
      <p class="mini c">Deixe ${esc(f.nome)} tocar na estrela. É a parte mais divertida.</p></div>
      <div class="card"><b class="ct">Combinado da semana</b>
      <label class="field">Meta de estrelas<select class="inp" data-c="kmeta" data-k="${f.id}">${[5, 7, 10, 14, 21].map(n => `<option ${k.meta === n ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
      <label class="field">O que acontece quando chegar lá<input class="inp" data-i="kpremio" data-k="${f.id}" value="${esc(k.premio)}" placeholder="Ex.: escolher o filme de sábado" maxlength="60"></label>
      <p class="mini">Prefira tempo junto ou uma escolha especial em vez de presente ou doce.</p></div>${tot >= k.meta ? `<div class="card sage tip"><b>Meta batida! 🎉</b><p>${esc(f.nome)} chegou em ${tot} estrelas. Hora de cumprir o combinado.</p></div>` : ''}`;
  }
  if (tab === 'tarefas') h = `${banner('app/idade-' + fxk + '.webp', ({ bebe: 'idade-0-2.webp', '2-3': 'idade-3-6.webp', '4-5': 'idade-3-6.webp', '6-8': 'idade-7-12.webp', '9-12': 'idade-7-12.webp' })[fxk])}<div class="chips">${MP.TAREFAS_IDADE.map(x => `<button class="chip ${x.k === fxk ? 'on' : ''}" data-a="kfx" data-k="${f.id}" data-f="${x.k}">${x.n}</button>`).join('')}</div>
    ${fx.k === 'bebe' ? `<div class="card peach"><b class="ct">Ainda é cedo pra tarefas. O que ajuda agora:</b><ul class="ul">${fx.t.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div>`
      : `<p class="mini">Toque nas tarefas que vão pro quadro de estrelas de ${esc(f.nome)}. Comece com 2 ou 3.</p>
      ${fx.t.map(t => `<button class="trow ${k.t.includes(t) ? 'ok' : ''}" data-a="ktarefa" data-k="${f.id}" data-t="${esc(t)}"><span class="chk">${k.t.includes(t) ? I.check : ''}</span><span class="tt"><span>${esc(t)}</span></span></button>`).join('')}`}
    <div class="card warn"><b>Segurança primeiro</b><p>${esc(fx.seg)}</p></div>`;
  if (tab === 'rotina') h = `<p class="mini">Cartões grandes pra ${esc(f.nome)} seguir sozinho(a). Abra, entregue o celular ou deixe apoiado, e ele(a) toca em “Feito!” a cada passo.</p>
    ${['manha', 'noite'].map(p => `<button class="card rot ${p}" data-a="rotina" data-k="${f.id}" data-p="${p}"><span class="re">${p === 'manha' ? '🌞' : '🌙'}</span><span><b>Rotina da ${p === 'manha' ? 'manhã' : 'noite'}</b><small>${MP.CARTOES[p].length} passos · ${MP.CARTOES[p].map(c => c[0]).join(' ')}</small></span>${I.play}</button>`).join('')}
    <div class="card sage tip"><b>Como usar</b><p>Nos primeiros dias, faça junto e comemore cada passo. Em uma ou duas semanas a criança passa a seguir sozinha, e você ganha esses minutos.</p></div>`;
  if (tab === 'lanche') h = `<p class="mini">Uma ideia por dia, com o que costuma ter em casa. Toque em “Trocar” pra ver outra.</p>
    ${['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map((d, i) => { const l = MP.LANCHEIRA[k.lanche[i] % MP.LANCHEIRA.length]; return `<div class="lrow"><b>${d}</b><span>${esc(l[0])}<small>${esc(l[1])} · ${esc(l[2])}</small></span><button class="btn sm" data-a="lanche" data-k="${f.id}" data-d="${i}">Trocar</button></div>`; }).join('')}
    <button class="btn sec" data-a="lanche-compras" data-k="${f.id}">${I.cart} Colocar na lista de compras</button>
    <div class="card warn"><b>Atenção</b><p>Confira alergias e as regras da escola. Pra crianças pequenas, corte uva, tomatinho e salsicha no comprimento e evite alimentos duros e redondos inteiros.</p></div>`;
  return `<header class="top"><a class="bk" href="#/criancas" aria-label="Voltar">${I.back}</a><span class="kav" style="background:${CORES[idx % 5]}">${esc(f.nome.charAt(0).toUpperCase())}</span><div><h1 class="h1">${esc(f.nome)}</h1><p class="sub">${MP.idadeTxt(f.idade)}</p></div></header>
  <div class="seg">${tabs.map(t => `<button class="${tab === t[0] ? 'on' : ''}" data-a="ktab" data-t="${t[0]}">${t[1]}</button>`).join('')}</div>${h}`;
};
A.ktab = el => { U.kt = el.dataset.t; render(); };
A.kfx = el => { U.kfx = el.dataset.f; U.kfxId = el.dataset.k; render(); };
A.ktarefa = el => { const k = MP.S.kids[el.dataset.k], t = el.dataset.t, i = k.t.indexOf(t); if (i < 0) { if (k.t.length >= 6) { toast('Até 6 tarefas no quadro. Menos é mais.'); return; } k.t.push(t); } else k.t.splice(i, 1); save(); render(); };
A.estrela = el => {
  const S = MP.S, id = el.dataset.k, k = S.kids[id], t = k.t[+el.dataset.t], d = +el.dataset.d, w = semana();
  S.estrelas[id] = S.estrelas[id] || {}; S.estrelas[id][w] = S.estrelas[id][w] || {};
  const a = S.estrelas[id][w][t] = S.estrelas[id][w][t] || [], i = a.indexOf(d);
  if (i < 0) a.push(d); else a.splice(i, 1); save(); render();
};
CH.kmeta = el => { MP.S.kids[el.dataset.k].meta = +el.value; save(); render(); };
IN.kpremio = el => { MP.S.kids[el.dataset.k].premio = el.value; save(); };
A.lanche = el => { const k = MP.S.kids[el.dataset.k], d = +el.dataset.d; k.lanche[d] = (k.lanche[d] + 1 + Math.floor(Math.random() * 5)) % MP.LANCHEIRA.length; save(); render(); };
A['lanche-compras'] = el => { const S = MP.S, k = S.kids[el.dataset.k]; let n = 0; k.lanche.forEach(i => { const l = MP.LANCHEIRA[i % MP.LANCHEIRA.length]; [l[0], l[1]].forEach(t => { if (!S.compras.some(c => c.t === t)) { S.compras.push({ id: uid(), t, cat: 'Crianças', ok: false }); n++; } }); }); save(); toast(n ? n + ' itens na lista de compras' : 'Já estava tudo na lista'); };
A.rotina = el => { U.rot = { k: el.dataset.k, p: el.dataset.p, i: 0 }; rotinaTela(); };
function rotinaTela() {
  const r = U.rot, f = MP.S.perfil.filhos.find(x => x.id === r.k), cs = MP.CARTOES[r.p], fim = r.i >= cs.length;
  modal(fim ? `<div class="rc"><div class="rc-e">🎉</div><h2>Parabéns, ${esc(f.nome)}!</h2><p>Você fez a rotina da ${r.p === 'manha' ? 'manhã' : 'noite'} inteira.</p><div class="rc-s">${I.star}${I.star}${I.star}</div><button class="btn pri" data-a="fechar" data-f="1">Fechar</button></div>`
    : `<div class="rc"><button class="icb rc-x" data-a="fechar" data-f="1" aria-label="Fechar">${I.x}</button><div class="rc-d">${cs.map((c, i) => `<i class="${i <= r.i ? 'on' : ''}"></i>`).join('')}</div><div class="rc-e">${cs[r.i][0]}</div><h2>${esc(cs[r.i][1])}</h2><button class="btn pri big" data-a="rotina-ok">Feito! ✓</button></div>`, 'full ' + r.p);
}
A['rotina-ok'] = () => { U.rot.i++; rotinaTela(); };

/* ================= MÓDULOS ================= */
const minDe = m => m.licoes.reduce((a, l) => a + l.min, 0);
const feitasDe = m => m.licoes.filter((l, i) => MP.S.licoes[m.id + '/' + i]).length;
V.modulos = () => {
  const t = U.mt, q = (U.mq || '').toLowerCase();
  let l = MP.MODULOS.filter(m => (m.tipo || 'modulo') === t);
  if (q) l = MP.MODULOS.filter(m => (m.n + ' ' + m.d + ' ' + (m.licoes || []).map(x => x.t).join(' ')).toLowerCase().includes(q));
  const card = m => {
    if (m.tipo === 'presente') return `<a class="prow" href="#/${m.link}"><span class="pe">${m.e}</span><span><b>${esc(m.n)}</b><small>${esc(m.d)}</small></span>${I.chev}</a>`;
    const tem = !!m.licoes, f = tem ? feitasDe(m) : 0;
    return `<a class="mcard ${!tem && !m.link ? 'breve' : ''}" href="#/${m.link ? m.link : tem ? 'modulos/' + m.id : 'modulos'}"><span class="mimg"><img src="imagens/${m.img}" alt="" loading="lazy">${m.tag ? `<i class="mtag ${m.tipo === 'bonus' ? 'gold' : ''}">${esc(m.tag)}</i>` : ''}</span>
      <span class="mtx"><b>${esc(m.n)}</b><small>${tem ? `${m.licoes.length} lições · ${minDe(m)} min` : m.link ? 'Ferramenta' : 'Chega na próxima atualização'}</small>${tem ? `<span class="pbar"><i style="width:${Math.round(f / m.licoes.length * 100)}%"></i></span>` : ''}</span></a>`;
  };
  return `${top('Módulos', 'Lições curtas, pra ver e fazer. De 5 a 10 minutos cada.')}
  <label class="search">${I.search}<input data-i="mq" value="${esc(U.mq || '')}" placeholder="Buscar módulo ou lição"></label>
  ${q ? '' : `<div class="seg">${[['modulo', 'Módulos'], ['bonus', 'Bônus'], ['presente', 'Presentes']].map(x => `<button class="${t === x[0] ? 'on' : ''}" data-a="mt" data-t="${x[0]}">${x[1]}</button>`).join('')}</div>`}
  <div class="${t === 'presente' && !q ? '' : 'mgrid'}" id="mlist">${l.map(card).join('') || '<p class="empty">Nada encontrado.</p>'}</div>`;
};
A.mt = el => { U.mt = el.dataset.t; render(); };
IN.mq = el => { U.mq = el.value; render(); const i = document.querySelector('[data-i="mq"]'); i.focus(); i.setSelectionRange(i.value.length, i.value.length); };
V.modulo = r => {
  const m = MP.MODULOS.find(x => x.id === r[1]); if (!m || !m.licoes) return V.modulos();
  const f = feitasDe(m), prox = m.licoes.findIndex((l, i) => !MP.S.licoes[m.id + '/' + i]);
  return `<div class="mhero"><img src="imagens/${m.img}" alt=""><a class="bk" href="#/modulos" aria-label="Voltar">${I.back}</a></div>
  <h1 class="h1">${esc(m.n)}</h1><p class="sub">${esc(m.d)}</p>
  <div class="prog"><div><i style="width:${Math.round(f / m.licoes.length * 100)}%"></i></div><span>${f} de ${m.licoes.length} lições</span></div>
  ${prox >= 0 ? `<a class="btn pri" href="#/licao/${m.id}/${prox}">${I.play} ${f ? 'Continuar' : 'Começar'}: lição ${prox + 1}</a>` : `<div class="card sage tip"><b>Módulo concluído! 🎉</b><p>Você pode rever qualquer lição quando quiser.</p></div>`}
  <div class="llist">${m.licoes.map((l, i) => { const ok = MP.S.licoes[m.id + '/' + i]; return `<a class="lrow2 ${ok ? 'ok' : ''}" href="#/licao/${m.id}/${i}"><span class="ln">${ok ? I.check : i + 1}</span><span><b>${esc(l.t)}</b><small>${l.min} min · ${l.telas.length} telas</small></span>${I.chev}</a>`; }).join('')}</div>`;
};

/* ================= LEITOR DE LIÇÕES ================= */
const h2 = s => s.h ? `<h2 class="l-h2">${md(s.h)}</h2>` : '';
const pp = s => s.p ? (Array.isArray(s.p) ? s.p : [s.p]).map(p => `<p class="l-p">${md(p)}</p>`).join('') : '';
const T = {
  abre: (s, L) => `<div class="l-hero"><img src="imagens/licoes/${L.m.id}-${L.li + 1}.webp" data-fb="imagens/${L.m.img}" alt=""><i>${esc(L.m.n)} · Lição ${L.li + 1}</i></div><h1 class="l-h1">${esc(L.l.t)}</h1><p class="l-lead">${md(s.p)}</p><div class="l-min">${I.clock} ${L.l.min} minutos · ${L.l.telas.length} telas</div>`,
  txt: s => h2(s) + pp(s) + (s.dica ? `<div class="l-dica"><b>Dica</b><p>${md(s.dica)}</p></div>` : ''),
  fluxo: s => h2(s) + pp(s) + `<ol class="l-fluxo">${s.itens.map((x, i) => `<li><span>${i + 1}</span><div><b>${md(x[0])}</b>${x[1] ? `<p>${md(x[1])}</p>` : ''}</div></li>`).join('')}</ol>`,
  linha: s => h2(s) + pp(s) + `<div class="l-linha">${s.itens.map(x => `<div class="${x[2] || ''}"><time>${esc(x[0])}</time><i></i><p>${md(x[1])}</p></div>`).join('')}</div>${s.leg ? `<p class="l-leg"><i class="c"></i> criança ocupada <i class="m"></i> sua tarefa encaixada</p>` : ''}`,
  compara: s => h2(s) + pp(s) + `<div class="l-comp"><div class="no">${s.imgs ? `<img src="imagens/${s.imgs[0]}" alt="">` : ''}<b>${esc(s.a[0])}</b>${s.a[1].map(x => `<p><i>✕</i>${md(x)}</p>`).join('')}</div><div class="yes">${s.imgs ? `<img src="imagens/${s.imgs[1]}" alt="">` : ''}<b>${esc(s.b[0])}</b>${s.b[1].map(x => `<p><i>✓</i>${md(x)}</p>`).join('')}</div></div>`,
  num: s => h2(s) + pp(s) + `<div class="l-num">${s.itens.map(x => `<div><b>${esc(x[0])}</b><span>${md(x[1])}</span></div>`).join('')}</div>`,
  barras: s => h2(s) + pp(s) + `<div class="l-bar">${s.itens.map(x => `<div><span>${md(x[0])}</span><div><i style="width:${x[1]}%" class="${x[3] || ''}"></i></div><b>${esc(x[2])}</b></div>`).join('')}</div>${s.nota ? `<p class="l-leg">${md(s.nota)}</p>` : ''}`,
  tabela: s => h2(s) + pp(s) + `<div class="l-tab">${s.itens.map(x => `<div><b>${md(x[0])}</b><span>${md(x[1])}</span></div>`).join('')}</div>`,
  check: (s, L, key) => h2(s) + pp(s) + `<div class="l-chk">${s.itens.map((x, i) => { const on = MP.S.checks[key + '/' + i]; return `<button class="trow ${on ? 'ok' : ''}" data-a="lchk" data-k="${key}/${i}"><span class="chk">${on ? I.check : ''}</span><span class="tt"><span>${md(x)}</span></span></button>`; }).join('')}</div>`,
  faca: (s, L, key) => `<div class="l-faca"><i>Faça hoje</i>${h2({ h: s.h || 'Três passos pequenos' })}${s.itens.map((x, i) => { const on = MP.S.checks[key + '/' + i]; return `<button class="trow ${on ? 'ok' : ''}" data-a="lchk" data-k="${key}/${i}"><span class="chk">${on ? I.check : ''}</span><span class="tt"><span>${md(x)}</span></span></button>`; }).join('')}</div>`,
  cartoes: (s, L, key, st) => h2(s) + `<p class="l-p mut">Toque em cada cartão pra virar.</p><div class="l-cards">${s.itens.map((x, i) => `<button class="${st['f' + i] ? 'vir' : ''}" data-a="lflip" data-i="${i}"><span class="fr">${md(x[0])}</span><span class="ve">${md(x[1])}</span></button>`).join('')}</div>`,
  escolha: (s, L, key, st) => h2(s) + pp(s) + `<div class="l-esc">${s.ops.map((x, i) => `<button class="${st.e === i ? 'on' : ''}" data-a="lesc" data-i="${i}">${md(x[0])}</button>${st.e === i ? `<div class="l-resp">${md(x[1])}</div>` : ''}`).join('')}</div>`,
  quiz: (s, L, key, st) => `<div class="l-quiz"><i>Teste rápido</i><h2 class="l-h2">${md(s.q)}</h2>${s.ops.map((x, i) => `<button class="${st.q == null ? '' : i === s.c ? 'certa' : st.q === i ? 'errada' : 'off'}" data-a="lquiz" data-i="${i}" ${st.q != null ? 'disabled' : ''}>${md(x)}</button>`).join('')}${st.q != null ? `<div class="l-resp ${st.q === s.c ? 'ok' : ''}"><b>${st.q === s.c ? 'Isso mesmo!' : 'Quase.'}</b> ${md(s.exp)}</div>` : ''}</div>`,
  ordena: (s, L, key, st) => {
    if (!st.sh) { st.sh = s.itens.map((x, i) => i).sort(() => Math.random() - .5); if (st.sh.every((v, i) => v === i)) st.sh.reverse(); st.o = []; }
    const fim = st.o.length === s.itens.length, certo = fim && st.o.every((v, i) => v === i);
    return h2(s) + pp(s) + `<p class="l-p mut">Toque na ordem que você faria: primeiro, segundo, terceiro...</p><div class="l-ord">${st.sh.map(ix => { const pos = st.o.indexOf(ix); return `<button class="${pos >= 0 ? 'on' : ''}" data-a="lord" data-i="${ix}"><span>${pos >= 0 ? pos + 1 : ''}</span>${md(s.itens[ix])}</button>`; }).join('')}</div>
    ${fim ? `<div class="l-resp ${certo ? 'ok' : ''}"><b>${certo ? 'Ordem perfeita!' : 'A ordem que mais rende é:'}</b>${certo ? '' : `<ol>${s.itens.map(x => `<li>${md(x)}</li>`).join('')}</ol>`}${s.exp ? ` ${md(s.exp)}` : ''}<br><button class="lk" data-a="lord-r">Tentar de novo</button></div>` : ''}`;
  },
  monta: (s, L, key, st) => {
    const bs = MP.blocos(); st.m = st.m || {};
    return h2(s) + pp(s) + `<div class="l-monta">${s.itens.map((x, i) => `<div><span><b>${md(x[0])}</b><small>${x[1]} min</small></span><div>${bs.map(b => `<button class="${st.m[i] === b.k ? 'on' : ''}" data-a="lmonta" data-i="${i}" data-b="${b.k}" title="${b.n}">${b.e}</button>`).join('')}</div></div>`).join('')}</div>
    <p class="l-leg">${bs.map(b => `${b.e} ${b.n}`).join(' · ')}</p>
    <button class="btn sec" data-a="lmonta-ok">Colocar no Meu Dia</button>`;
  },
  timer: (s, L, key, st) => h2(s) + pp(s) + `<div class="l-timer"><b id="ltm">${fmt(st.left == null ? s.seg : st.left)}</b><button class="btn pri" data-a="ltimer" data-s="${s.seg}">${st.run ? 'Pausar' : st.left === 0 ? 'De novo' : 'Começar'}</button></div>`,
  erro: s => `<div class="l-erro"><i>Erro comum</i><h2 class="l-h2">${md(s.e)}</h2><div><b>Como evitar</b><p>${md(s.c)}</p></div></div>`,
  resumo: s => `<div class="l-res"><i>Pra guardar</i><h2 class="l-h2">${md(s.h || 'O resumo em 3 linhas')}</h2>${s.itens.map((x, i) => `<p><span>${i + 1}</span>${md(x)}</p>`).join('')}</div>`
};
/* ---- telas mais ricas: lista ilustrada, exemplo, falas, dúvidas, raio-x, planejador da semana e guia do aplicativo ---- */
const dicaH = s => s.dica ? `<div class="l-dica"><b>Dica</b><p>${md(s.dica)}</p></div>` : '';
const MOCK = {
  dia: `<div class="card peach"><b class="ct">Seu dia encaixado</b><div class="prog"><div><i style="width:50%"></i></div><span>2 de 4 feitos</span></div><div class="trow ok"><span class="chk">${I.check}</span><span class="tt"><b>Manhã</b><span>Cozinha pronta depois do café · 10 min</span></span></div><div class="trow ok"><span class="chk">${I.check}</span><span class="tt"><b>Almoço</b><span>Louça e bancada · 15 min</span></span></div><div class="trow now"><span class="chk"></span><span class="tt"><b>Tarde</b><span>Uma máquina de roupa · 15 min</span></span><i class="badge">Agora</i></div><div class="trow"><span class="chk"></span><span class="tt"><b>Noite</b><span>Sala zerada com as crianças · 10 min</span></span></div></div>`,
  semana: `<div class="daytabs">${['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((d, i) => `<button class="${i === 2 ? 'on' : ''}">${d}</button>`).join('')}</div><div class="bloc"><div class="bloc-h"><span>☀️</span><b>Manhã</b></div><div class="titem"><span><b>Cozinha pronta depois do café</b><small>10 min · todos os dias</small></span></div></div><div class="bloc"><div class="bloc-h"><span>🌤️</span><b>Tarde</b></div><div class="titem"><span><b>Banheiro rápido</b><small>15 min · Qua</small></span></div></div>`,
  planob: `<div class="card warn"><b class="ct">Plano B ativado</b><div class="trow ok"><span class="chk">${I.check}</span><span class="tt"><span>Todo mundo alimentado</span></span></div><div class="trow"><span class="chk"></span><span class="tt"><span>Pia sem louça suja de comida</span></span></div><div class="trow"><span class="chk"></span><span class="tt"><span>Roupa de amanhã separada</span></span></div></div>`,
  estrelas: `<div class="quadro"><div class="qh"><span></span>${'STQQSSD'.split('').map(d => `<b>${d}</b>`).join('')}</div>${['Guardar os brinquedos', 'Levar o prato na pia'].map((t, r) => `<div class="ql"><span>${t}</span>${[0, 1, 2, 3, 4, 5, 6].map(i => `<span class="st ${i < 3 - r ? 'on' : ''}">${I.star}</span>`).join('')}</div>`).join('')}</div>`,
  timer: `<div class="card coral timer"><b>15:00</b><span class="btn white">Começar</span></div>`,
  cardapio: `<div class="cday hj"><b>Segunda</b><div><span class="cslot on"><small>Almoço</small>Frango desfiado com arroz</span><span class="cslot on"><small>Jantar</small>Sopa de legumes</span></div></div><div class="cday"><b>Terça</b><div><span class="cslot on"><small>Almoço</small>Escondidinho de frango</span><span class="cslot"><small>Jantar</small><em>Toque pra escolher</em></span></div></div>`
};
Object.assign(T, {
  num: s => h2(s) + pp(s) + (s.itens[0].length > 2 ? `<div class="l-numv">${s.itens.map(x => `<div><b>${esc(x[0])}</b><span><strong>${md(x[1])}</strong>${md(x[2])}</span></div>`).join('')}</div>` : `<div class="l-num">${s.itens.map(x => `<div><b>${esc(x[0])}</b><span>${md(x[1])}</span></div>`).join('')}</div>`) + dicaH(s),
  lista: s => h2(s) + pp(s) + `<div class="l-lista">${s.itens.map(x => `<div><i>${x[0]}</i><span><b>${md(x[1])}</b>${x[2] ? md(x[2]) : ''}</span></div>`).join('')}</div>` + dicaH(s),
  caso: s => `<div class="l-caso"><i>Exemplo na prática</i>${h2(s)}<p class="l-p">${md(s.quem)}</p><div class="l-linha">${s.itens.map(x => `<div class="${x[2] || ''}"><time>${esc(x[0])}</time><i></i><p>${md(x[1])}</p></div>`).join('')}</div>${s.fim ? `<p class="l-p"><b>O que mudou:</b> ${md(s.fim)}</p>` : ''}</div>`,
  aviso: s => `<div class="l-aviso"><b>⚠️ ${md(s.h || 'Atenção')}</b>${s.itens.map(x => `<p>${md(x)}</p>`).join('')}</div>`,
  falas: s => h2(s) + pp(s) + `<div class="l-falas">${s.itens.map(x => `<div><small>${md(x[0])}</small><p>${md(x[1])}</p></div>`).join('')}</div>` + dicaH(s),
  duvidas: s => h2(s) + pp(s) + `<div class="l-duv">${s.itens.map(x => `<details><summary>${md(x[0])}</summary><p>${md(x[1])}</p></details>`).join('')}</div>`,
  raiox: (s, L, key, st) => {
    st.r = st.r || {}; const n = Object.keys(st.r).length, fx = s.faixas.find(f => n <= f[0]) || s.faixas[s.faixas.length - 1];
    return h2(s) + pp(s) + `<div class="l-chk">${s.itens.map((x, i) => `<button class="trow ${st.r[i] ? 'ok' : ''}" data-a="lrx" data-i="${i}"><span class="chk">${st.r[i] ? I.check : ''}</span><span class="tt"><span>${md(x)}</span></span></button>`).join('')}</div><div class="l-resp ok"><b>Você marcou ${n} de ${s.itens.length}.</b> ${md(fx[1])}</div>`;
  },
  semana: (s, L, key, st) => {
    if (!st.w) { st.w = {}; s.itens.forEach((x, i) => { const t = MP.S.tarefas.find(t => t.t === x[0]); st.w[i] = t && t.dias ? t.dias.slice() : []; }); }
    return h2(s) + pp(s) + `<div class="l-sem">${s.itens.map((x, i) => `<div><span><b>${md(x[0])}</b><small>${x[1]} min</small></span><div class="dsel">${[1, 2, 3, 4, 5, 6, 0].map(d => `<button class="${st.w[i].includes(d) ? 'on' : ''}" data-a="lsem" data-i="${i}" data-d="${d}">${D3[d]}</button>`).join('')}</div></div>`).join('')}</div><button class="btn sec" data-a="lsem-ok">Salvar na minha semana</button>`;
  },
  guia: s => h2(s) + pp(s) + (s.mock ? `<div class="l-mock"><i>É assim no seu aplicativo</i>${MOCK[s.mock]}</div>` : '') + `<ol class="l-fluxo">${s.itens.map((x, i) => `<li><span>${i + 1}</span><div><b>${md(x[0])}</b>${x[1] ? `<p>${md(x[1])}</p>` : ''}</div></li>`).join('')}</ol>` + (s.ir ? `<a class="btn sec" href="#/${s.ir[0]}">${esc(s.ir[1])}</a><p class="l-p mut c">Depois é só voltar em Módulos pra continuar a lição.</p>` : '')
});
A.lrx = el => { const st = U.L.st[U.L.t], i = el.dataset.i; if (st.r[i]) delete st.r[i]; else st.r[i] = 1; render(); };
A.lsem = el => { const w = U.L.st[U.L.t].w[+el.dataset.i], d = +el.dataset.d, p = w.indexOf(d); if (p >= 0) w.splice(p, 1); else w.push(d); el.classList.toggle('on'); };
A['lsem-ok'] = () => {
  const L = U.L, st = L.st[L.t], s = L.l.telas[L.t]; let n = 0;
  s.itens.forEach((x, i) => { const d = st.w[i]; if (!d.length) return; const dias = d.length === 7 ? null : d.slice(), t = MP.S.tarefas.find(t => t.t === x[0]); if (t) t.dias = dias; else MP.S.tarefas.push({ id: uid(), t: x[0], b: x[2] == null ? 2 : x[2], min: x[1], dias }); n++; });
  save(); toast(n ? n + (n === 1 ? ' tarefa salva' : ' tarefas salvas') + ' no Meu Dia' : 'Escolha pelo menos um dia');
};
const fmt = n => Math.floor(n / 60) + ':' + String(n % 60).padStart(2, '0');
let ltIv = null;
V.licao = r => {
  const m = MP.MODULOS.find(x => x.id === r[1]), li = +r[2]; if (!m || !m.licoes || !m.licoes[li]) { go('modulos'); return ''; }
  if (!U.L || U.L.mid !== m.id || U.L.li !== li) { clearInterval(ltIv); U.L = { mid: m.id, li, t: 0, st: {} }; }
  const L = U.L; L.m = m; L.l = m.licoes[li];
  const n = L.l.telas.length, key = m.id + '/' + li + '/' + L.t;
  const barra = `<div class="l-top"><a class="icb" href="#/modulos/${m.id}" aria-label="Fechar">${I.x}</a><div class="l-seg">${L.l.telas.map((x, i) => `<i class="${i < L.t ? 'ok' : i === L.t ? 'on' : ''}"></i>`).join('')}</div><span>${Math.min(L.t + 1, n)}/${n}</span></div>`;
  if (L.t >= n) {
    const prox = m.licoes[li + 1];
    return `<div class="lic"><div class="l-fim">${banner('app/licao-concluida.webp', 'vitoria-descanso.webp', 'alta')}<h1 class="l-h1">Lição concluída!</h1><p class="l-lead">${esc(L.l.t)}</p>
    <div class="prog"><div><i style="width:${Math.round(feitasDe(m) / m.licoes.length * 100)}%"></i></div><span>${feitasDe(m)} de ${m.licoes.length} lições do módulo</span></div>
    ${prox ? `<a class="btn pri" href="#/licao/${m.id}/${li + 1}">Próxima: ${esc(prox.t)}</a>` : `<p class="l-p c">Você terminou o módulo <b>${esc(m.n)}</b>.</p>`}
    <a class="btn ghost" href="#/modulos/${m.id}">Voltar ao módulo</a><a class="btn ghost" href="#/hoje">Ir pro meu dia</a></div></div>`;
  }
  const s = L.l.telas[L.t], st = L.st[L.t] = L.st[L.t] || {};
  /* toda tela pode ter foto: a que estiver em dados/imagens.js, ou o arquivo imagens/licoes/<modulo>-<lição>-<tela>.webp */
  const foto = s.k === 'abre' ? '' : s.img ? `<div class="l-img" data-imgbox><img src="imagens/${s.img}" alt=""></div>` : `<div class="l-img" data-imgbox><img src="imagens/licoes/${m.id}-${li + 1}-${L.t + 1}.webp" alt=""></div>`;
  return `<div class="lic">${barra}<div class="l-body k-${s.k}">${foto}${T[s.k](s, L, key, st)}</div>
  <div class="l-nav">${L.t > 0 ? `<button class="btn ghost" data-a="lprev">${I.back}</button>` : ''}<button class="btn pri" data-a="lnext">${L.t === n - 1 ? 'Concluir lição ✓' : 'Continuar'}</button></div></div>`;
};
A.lnext = () => { const L = U.L; clearInterval(ltIv); if (L.st[L.t]) L.st[L.t].run = false; L.t++; if (L.t >= L.l.telas.length) { MP.S.licoes[L.mid + '/' + L.li] = true; save(); } render(); window.scrollTo(0, 0); };
A.lprev = () => { clearInterval(ltIv); U.L.t--; render(); window.scrollTo(0, 0); };
A.lchk = el => { const k = el.dataset.k; if (MP.S.checks[k]) delete MP.S.checks[k]; else MP.S.checks[k] = 1; save(); render(); };
A.lflip = el => { const st = U.L.st[U.L.t]; st['f' + el.dataset.i] = !st['f' + el.dataset.i]; el.classList.toggle('vir'); };
A.lesc = el => { const st = U.L.st[U.L.t]; st.e = +el.dataset.i; render(); };
A.lquiz = el => { U.L.st[U.L.t].q = +el.dataset.i; render(); };
A.lord = el => { const st = U.L.st[U.L.t], i = +el.dataset.i, p = st.o.indexOf(i); if (p >= 0) st.o.splice(p); else st.o.push(i); render(); };
A['lord-r'] = () => { const st = U.L.st[U.L.t]; st.o = []; render(); };
A.lmonta = el => { const st = U.L.st[U.L.t]; st.m[+el.dataset.i] = +el.dataset.b; render(); };
A['lmonta-ok'] = () => {
  const L = U.L, st = L.st[L.t], s = L.l.telas[L.t]; let n = 0;
  Object.keys(st.m || {}).forEach(i => { const x = s.itens[+i]; if (!MP.S.tarefas.some(t => t.t === x[0])) { MP.S.tarefas.push({ id: uid(), t: x[0], b: st.m[i], min: x[1], dias: null }); n++; } });
  if (!Object.keys(st.m || {}).length) { toast('Escolha um horário pra pelo menos uma tarefa'); return; }
  save(); toast(n ? n + (n === 1 ? ' tarefa entrou' : ' tarefas entraram') + ' no Meu Dia' : 'Essas tarefas já estão no Meu Dia');
};
A.ltimer = el => {
  const st = U.L.st[U.L.t], seg = +el.dataset.s; clearInterval(ltIv);
  if (st.run) { st.run = false; render(); return; }
  if (st.left == null || st.left === 0) st.left = seg; st.run = true; render();
  ltIv = setInterval(() => { st.left--; const e = $('#ltm'); if (e) e.textContent = fmt(st.left); if (st.left <= 0) { clearInterval(ltIv); st.run = false; render(); toast('Tempo! Olha quanto dá pra fazer.'); } }, 1000);
};
})(window.MP);
