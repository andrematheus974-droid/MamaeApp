/* Mãe Presente — aba Mais: ferramentas do dia a dia */
(function (MP) {
'use strict';
const { V, A, IN, CH, U, I, esc, md, uid, dkey, D3, DIAS, save, render, go, top, modal, closeModal, toast } = MP;
const $ = s => document.querySelector(s);
const fmt = n => Math.floor(n / 60) + ':' + String(n % 60).padStart(2, '0');

V.mais = () => {
  const S = MP.S, pend = S.compras.filter(c => !c.ok).length;
  const row = (h, ic, t, d, cls, im) => `<a class="frow" href="#/mais/${h}">${im ? `<i class="th" data-imgbox>${ic}${MP.pic('app/' + h + '.webp', im)}</i>` : `<i class="${cls || ''}">${ic}</i>`}<span><b>${t}</b><small>${d}</small></span>${I.chev}</a>`;
  return `${top('Mais', 'Ferramentas pra usar no meio da correria.')}
  <p class="sec-t">Casa e crianças</p>
  ${row('15min', I.clock, 'Casa pronta em 15 minutos', 'Cronômetro e passo a passo por cômodo.', '', 'mod-08-casa-pronta-15min.webp')}
  ${row('brincar', I.dice, 'Brincadeiras de 15 minutos', MP.BRINCADEIRAS.length + ' ideias por idade, tempo e lugar.', 'sage', 'bonus-03-50-brincadeiras.webp')}
  ${row('mochila', I.bag, 'Checklist da mochila e da lancheira', 'Pra deixar tudo pronto na véspera.', 'sage', 'idade-7-12.webp')}
  ${row('plano30', I.flag, 'Plano de 30 dias', S.plano30.length + ' de 30 missões concluídas.', 'gold', 'primeiro-passo.webp')}
  <p class="sec-t">Cozinha</p>
  ${row('receitas', I.pan, 'Receitas', MP.RECEITAS.length + ' receitas do dia a dia. Funciona sem internet.', '', 'mod-05-cozinha-de-mae.webp')}
  ${row('cardapio', I.cal, 'Cardápio da semana', 'Monte a semana e gere a lista de compras.', '', 'bonus-02-cardapio-lancheira.webp')}
  ${row('compras', I.cart, 'Lista de compras da família', pend + (pend === 1 ? ' item pendente.' : ' itens pendentes.'))}
  ${row('pedido', I.chat, 'Monte seu pedido de receita', 'Texto pronto pra colar no ChatGPT.', 'gold', 'bonus-01-assistente-ia.webp')}
  <p class="sec-t">Você</p>
  ${row('perfil', I.user, 'Meu perfil', 'Seu nome, filhos e horários.')}
  ${row('backup', I.down, 'Cópia de segurança', 'Guarde ou recupere os seus dados.')}
  <a class="frow" href="instalar.html"><i>${I.phone}</i><span><b>Instalar no celular</b><small>Coloque a casinha laranja na tela inicial.</small></span>${I.chev}</a>`;
};

/* ---------- Casa pronta em 15 minutos ---------- */
let tmIv = null;
V['mais/15min'] = () => {
  const c = U.rc || 'sala', R = MP.RAPIDA[c], S = MP.S, tm = U.tm || (U.tm = { left: 900, run: false }), kk = 'rap/' + dkey() + '/' + c;
  return `${top('Casa pronta em 15 minutos', 'Escolha o cômodo, aperte começar e siga a ordem.', 'mais', ['app/15min.webp', 'mod-08-casa-pronta-15min.webp'])}
  <div class="chips">${Object.keys(MP.RAPIDA).map(k => `<button class="chip ${k === c ? 'on' : ''}" data-a="rc" data-k="${k}">${MP.RAPIDA[k].n}</button>`).join('')}</div>
  <div class="card coral timer"><b id="tm">${fmt(tm.left)}</b><div><button class="btn white" data-a="tm">${tm.run ? 'Pausar' : tm.left === 900 ? 'Começar' : tm.left === 0 ? 'De novo' : 'Continuar'}</button>${tm.left !== 900 ? `<button class="lk w" data-a="tm-r">Zerar</button>` : ''}</div></div>
  ${R.passos.map((p, i) => { const on = S.checks[kk + '/' + i]; return `<button class="trow ${on ? 'ok' : ''}" data-a="lchk2" data-k="${kk}/${i}"><span class="chk">${on ? I.check : ''}</span><span class="tt"><span>${esc(p[0])}</span></span><i class="badge g">${p[1]} min</i></button>`; }).join('')}
  <div class="card sage tip"><b>Enquanto isso, a criança pode:</b><p>${esc(R.kid)}</p></div>
  <p class="mini c">Acabou o tempo? Pare. O que ficou, fica pro próximo bloco.</p>`;
};
A.rc = el => { U.rc = el.dataset.k; render(); };
A.lchk2 = el => { const k = el.dataset.k, S = MP.S; if (S.checks[k]) delete S.checks[k]; else S.checks[k] = 1; save(); render(); };
A.tm = () => {
  const tm = U.tm; clearInterval(tmIv);
  if (tm.run) { tm.run = false; render(); return; }
  if (tm.left === 0) tm.left = 900; tm.run = true; render();
  tmIv = setInterval(() => { tm.left--; const e = $('#tm'); if (e) e.textContent = fmt(tm.left); if (tm.left <= 0) { clearInterval(tmIv); tm.run = false; if (e) render(); toast('15 minutos! Pode parar.'); } }, 1000);
};
A['tm-r'] = () => { clearInterval(tmIv); U.tm = { left: 900, run: false }; render(); };

/* ---------- Brincadeiras ---------- */
const FX = [['', 'Todas'], ['0', 'Bebê'], ['2', '2 a 3'], ['4', '4 a 5'], ['6', '6 a 8'], ['9', '9 a 12']];
function brincLista() {
  const f = U.bf || (U.bf = { i: '', t: '', l: '' });
  return MP.BRINCADEIRAS.filter(b => {
    if (f.i !== '') { const a = +f.i, z = a === 0 ? 1 : a === 2 ? 3 : a === 4 ? 5 : a === 6 ? 8 : 12; if (b[2] < a || b[1] > z) return false; }
    if (f.t && b[3] > +f.t) return false;
    if (f.l && b[4] !== f.l && b[4] !== 'q') return false;
    return true;
  });
}
V['mais/brincar'] = () => {
  const f = U.bf || (U.bf = { i: '', t: '', l: '' }), l = brincLista(), S = MP.S;
  const chip = (k, v, t) => `<button class="chip ${f[k] === v ? 'on' : ''}" data-a="bf" data-k="${k}" data-v="${v}">${t}</button>`;
  return `${top('Brincadeiras de 15 minutos', 'Pra brincar de verdade, mesmo com pouco tempo.', 'mais', ['app/brincar.webp', 'bonus-03-50-brincadeiras.webp'])}
  <button class="btn pri" data-a="b-sorte">${I.dice} Sortear uma agora</button>
  <p class="sec-t">Idade</p><div class="chips">${FX.map(x => chip('i', x[0], x[1])).join('')}</div>
  <p class="sec-t">Tempo</p><div class="chips">${chip('t', '', 'Tanto faz')}${chip('t', '5', '5 min')}${chip('t', '10', '10 min')}${chip('t', '15', '15 min')}</div>
  <p class="sec-t">Lugar</p><div class="chips">${chip('l', '', 'Tanto faz')}${chip('l', 'd', 'Dentro de casa')}${chip('l', 'f', 'Ao ar livre')}</div>
  <p class="mini">${l.length} ${l.length === 1 ? 'brincadeira' : 'brincadeiras'}</p>
  ${l.map(b => `<button class="brow" data-a="brinc-ver" data-n="${esc(b[0])}"><i data-imgbox>${b[4] === 'f' ? '🌳' : b[4] === 'd' ? '🏠' : '🎈'}${MP.pic('brincadeiras/' + MP.slug(b[0]) + '.webp', 'brincadeiras/' + (b[4] === 'f' ? 'fora' : 'dentro') + '.webp')}</i><span><b>${esc(b[0])}${S.brincFeitas.includes(b[0]) ? ' <i class="feito">✓ já brincamos</i>' : ''}</b><small>${b[1] === b[2] ? b[1] : b[1] + ' a ' + b[2]} anos · ${b[3]} min · ${b[4] === 'f' ? 'ao ar livre' : b[4] === 'd' ? 'dentro de casa' : 'qualquer lugar'}</small></span>${I.chev}</button>`).join('') || '<p class="empty">Nenhuma com esses filtros. Tente “Tanto faz”.</p>'}`;
};
A.bf = el => { U.bf[el.dataset.k] = el.dataset.v; render(); };
A['b-sorte'] = () => { const l = brincLista(); if (!l.length) { toast('Nenhuma com esses filtros'); return; } MP.verBrinc(l[Math.floor(Math.random() * l.length)][0]); };
MP.verBrinc = n => {
  const b = MP.BRINCADEIRAS.find(x => x[0] === n); if (!b) return;
  const feita = MP.S.brincFeitas.includes(b[0]);
  modal(`${MP.banner('brincadeiras/' + MP.slug(b[0]) + '.webp', 'brincadeiras/' + (b[4] === 'f' ? 'fora' : 'dentro') + '.webp')}<div class="chips"><span class="chip st">${b[1] === b[2] ? b[1] : b[1] + ' a ' + b[2]} anos</span><span class="chip st">${b[3]} min</span><span class="chip st">${b[4] === 'f' ? 'Ao ar livre' : b[4] === 'd' ? 'Dentro de casa' : 'Qualquer lugar'}</span></div>
  <h2 class="h2">${esc(b[0])}</h2>
  <p class="lbl">Você precisa de</p><p class="sub">${esc(b[5])}</p>
  <p class="lbl">Como brincar</p><p class="sub">${esc(b[6])}</p>
  ${b[7] ? `<p class="lbl">Pra variar</p><p class="sub">${esc(b[7])}</p>` : ''}
  <button class="btn pri" data-a="brinc-ok" data-n="${esc(b[0])}">${feita ? 'Brincamos de novo! 💛' : 'Brincamos! 💛'}</button>
  <button class="btn ghost" data-a="brinc-outra">Ver outra ideia</button>`);
};
A['brinc-ok'] = el => { const S = MP.S; if (!S.brincFeitas.includes(el.dataset.n)) S.brincFeitas.push(el.dataset.n); save(); closeModal(); render(); toast('Momento registrado. É isso que eles guardam. 💛'); };
A['brinc-outra'] = () => { if (MP.route()[0] === 'hoje') { MP.S.brincPulo = (MP.S.brincPulo || 0) + 1; save(); closeModal(); render(); toast('Trocamos a brincadeira de hoje'); } else A['b-sorte'](); };

/* ---------- Checklist da mochila ---------- */
V['mais/mochila'] = () => {
  const S = MP.S, kk = 'moch/' + dkey();
  return `${top('Mochila e lancheira', 'Faça na véspera, junto com a criança. A manhã fica leve.', 'mais', ['app/mochila.webp', 'idade-7-12.webp'])}
  ${['mochila', 'lancheira'].map(g => `<p class="sec-t">${g === 'mochila' ? 'Mochila' : 'Lancheira'}</p>${MP.MOCHILA[g].map((t, i) => { const k = kk + '/' + g + i, on = S.checks[k]; return `<button class="trow ${on ? 'ok' : ''}" data-a="lchk2" data-k="${k}"><span class="chk">${on ? I.check : ''}</span><span class="tt"><span>${esc(t)}</span></span></button>`; }).join('')}`).join('')}
  <p class="mini c">A lista zera sozinha todo dia.</p>
  <div class="card sage tip"><b>A partir dos 6 anos</b><p>Deixe a criança conferir a lista sozinha e você só dá a olhada final. Ela ganha autonomia e você ganha 10 minutos.</p></div>`;
};

/* ---------- Plano de 30 dias ---------- */
V['mais/plano30'] = () => {
  const S = MP.S, d = S.plano30, atual = MP.PLANO30.findIndex((x, i) => !d.includes(i));
  return `${top('Plano de 30 dias', 'Uma missão curta por dia pra Rotina Encaixada virar hábito.', 'mais', ['app/plano30.webp', 'primeiro-passo.webp'])}
  <div class="prog"><div><i style="width:${Math.round(d.length / 30 * 100)}%"></i></div><span>${d.length} de 30</span></div>
  ${MP.PLANO30.map((x, i) => { const ok = d.includes(i), ab = i === atual || U.p30 === i; return `<div class="p30 ${ok ? 'ok' : ''} ${i === atual ? 'at' : ''}"><button class="p30h" data-a="p30-ab" data-i="${i}"><span class="ln">${ok ? I.check : i + 1}</span><b>${esc(x[0])}</b>${i === atual ? '<i class="badge">Hoje</i>' : ''}</button>${ab ? `<div class="p30b"><p>${md(x[1])}</p><button class="btn ${ok ? 'ghost' : 'pri'} sm" data-a="p30-ok" data-i="${i}">${ok ? 'Desmarcar' : 'Missão cumprida ✓'}</button></div>` : ''}</div>`; }).join('')}`;
};
A['p30-ab'] = el => { U.p30 = U.p30 === +el.dataset.i ? -1 : +el.dataset.i; render(); };
A['p30-ok'] = el => { const d = MP.S.plano30, i = +el.dataset.i, p = d.indexOf(i); if (p < 0) { d.push(i); toast('Missão cumprida! 🎉'); } else d.splice(p, 1); U.p30 = -1; save(); render(); };

/* ---------- Receitas ---------- */
const TAGS = { rapida: 'Rápida', panela: 'Uma panela só', congela: 'Congela bem', lancheira: 'Lancheira', ajuda: 'Criança ajuda', base: 'Preparo-base' };
function recLista() {
  const f = U.rf || (U.rf = { q: '', c: '', casa: false, fav: false }), S = MP.S, q = f.q.toLowerCase();
  let l = MP.RECEITAS.map((r, i) => ({ r, i, falta: r.base.filter(b => !S.despensa.includes(b)) }));
  if (q) l = l.filter(x => (x.r.n + ' ' + x.r.base.join(' ') + ' ' + x.r.cat).toLowerCase().includes(q));
  if (f.c) l = l.filter(x => x.r.cat === f.c || x.r.tags.includes(f.c));
  if (f.fav) l = l.filter(x => S.favoritas.includes(x.r.n));
  if (f.casa) l = l.filter(x => x.falta.length <= 1).sort((a, b) => a.falta.length - b.falta.length);
  return l;
}
function recItens() {
  const f = U.rf, l = recLista();
  return `<p class="mini">${l.length} ${l.length === 1 ? 'receita' : 'receitas'}</p>` + (l.map(x => `<a class="rrow" href="#/mais/receita/${x.i}"><i data-imgbox>${MP.CAT_E[x.r.cat] || '🍽️'}${MP.pic('receitas/' + MP.slug(x.r.n) + '.webp', 'receitas/cat-' + MP.slug(x.r.cat) + '.webp')}</i><span><b>${esc(x.r.n)}</b><small>${x.r.t} min · ${x.r.p} porções${f.casa ? (x.falta.length ? ` · <em>falta: ${esc(x.falta[0])}</em>` : ' · <em class="ok">você tem tudo</em>') : ''}</small></span>${I.chev}</a>`).join('') || `<p class="empty">${f.casa ? 'Marque mais ingredientes pra ver receitas.' : 'Nenhuma receita encontrada.'}</p>`);
}
V['mais/receitas'] = () => {
  const f = U.rf || (U.rf = { q: '', c: '', casa: false, fav: false }), S = MP.S;
  const cats = MP.RECEITAS.map(r => r.cat).filter((c, i, a) => a.indexOf(c) === i);
  return `${top('Receitas', 'Comida de verdade, do dia a dia. Funciona sem internet.', 'mais', ['app/receitas.webp', 'mod-05-cozinha-de-mae.webp'])}
  <label class="search">${I.search}<input data-i="rq" value="${esc(f.q)}" placeholder="Buscar: frango, arroz, sopa..."></label>
  <div class="seg"><button class="${!f.casa && !f.fav ? 'on' : ''}" data-a="rmodo" data-m="">Todas</button><button class="${f.casa ? 'on' : ''}" data-a="rmodo" data-m="casa">O que tenho em casa</button><button class="${f.fav ? 'on' : ''}" data-a="rmodo" data-m="fav">Favoritas</button></div>
  ${f.casa ? `<div class="card peach"><b class="ct">Marque o que você tem</b><p class="mini">Sal, óleo, alho e cebola a gente já conta que tem.</p>${MP.ING.map(g => `<p class="lbl">${g[0]}</p><div class="chips wrap">${g[1].map(x => `<button class="chip ${S.despensa.includes(x) ? 'on' : ''}" data-a="desp" data-x="${esc(x)}">${esc(x)}</button>`).join('')}</div>`).join('')}</div>`
    : `<div class="chips">${[''].concat(cats).map(c => `<button class="chip ${f.c === c ? 'on' : ''}" data-a="rcat" data-c="${esc(c)}">${c || 'Tudo'}</button>`).join('')}${Object.keys(TAGS).map(t => `<button class="chip ${f.c === t ? 'on' : ''}" data-a="rcat" data-c="${t}">${TAGS[t]}</button>`).join('')}</div>`}
  <div id="rlist">${recItens()}</div>`;
};
IN.rq = el => { U.rf.q = el.value; $('#rlist').innerHTML = recItens(); };
A.rmodo = el => { U.rf.casa = el.dataset.m === 'casa'; U.rf.fav = el.dataset.m === 'fav'; render(); };
A.rcat = el => { U.rf.c = el.dataset.c; render(); };
A.desp = el => { const d = MP.S.despensa, x = el.dataset.x, i = d.indexOf(x); if (i < 0) d.push(x); else d.splice(i, 1); save(); el.classList.toggle('on'); $('#rlist').innerHTML = recItens(); };
V['mais/receita'] = r => {
  const i = +r[2], x = MP.RECEITAS[i]; if (!x) return V['mais/receitas']();
  const S = MP.S, fav = S.favoritas.includes(x.n), kk = 'rec/' + i;
  return `<header class="top"><a class="bk" href="#/mais/receitas" aria-label="Voltar">${I.back}</a><div><p class="sub">${esc(x.cat)}</p><h1 class="h1">${esc(x.n)}</h1></div><button class="icb fav ${fav ? 'on' : ''}" data-a="rfav" data-n="${esc(x.n)}" aria-label="Favoritar">${I.heart}</button></header>
  ${MP.banner('receitas/' + MP.slug(x.n) + '.webp', 'receitas/cat-' + MP.slug(x.cat) + '.webp', 'alta')}
  <div class="l-num rec"><div><b>${x.t} min</b><span>tempo</span></div><div><b>${x.p}</b><span>porções</span></div><div><b>${['', 'Fácil', 'Média', 'Capricho'][x.d]}</b><span>dificuldade</span></div></div>
  ${x.tags.length ? `<div class="chips wrap">${x.tags.map(t => `<span class="chip st">${TAGS[t] || t}</span>`).join('')}</div>` : ''}
  <p class="sec-t">Ingredientes</p>
  ${x.ing.map((t, k) => { const on = S.checks[kk + '/i' + k]; return `<button class="trow ${on ? 'ok' : ''}" data-a="lchk2" data-k="${kk}/i${k}"><span class="chk">${on ? I.check : ''}</span><span class="tt"><span>${esc(t)}</span></span></button>`; }).join('')}
  <button class="btn sec" data-a="rcompras" data-i="${i}">${I.cart} Colocar ingredientes na lista de compras</button>
  <p class="sec-t">Modo de preparo</p>
  <ol class="l-fluxo">${x.prep.map((t, k) => `<li><span>${k + 1}</span><div><p>${md(t)}</p></div></li>`).join('')}</ol>
  ${x.dica ? `<div class="card sage tip"><b>Dica de mãe</b><p>${md(x.dica)}</p></div>` : ''}
  <button class="btn pri" data-a="rcard" data-i="${i}">${I.cal} Colocar no cardápio da semana</button>
  <p class="mini c">Adapte ao gosto e às restrições da sua família. Confira alergias antes de servir.</p>`;
};
A.rfav = el => { const f = MP.S.favoritas, n = el.dataset.n, i = f.indexOf(n); if (i < 0) f.push(n); else f.splice(i, 1); save(); render(); };
function ingParaCompras(x) { const S = MP.S; let n = 0; x.ing.forEach(t => { if (/^sal\b|a gosto|água/i.test(t)) return; if (!S.compras.some(c => c.t === t)) { S.compras.push({ id: uid(), t, cat: 'Receitas', ok: false }); n++; } }); return n; }
A.rcompras = el => { const n = ingParaCompras(MP.RECEITAS[+el.dataset.i]); save(); toast(n ? n + ' itens na lista de compras' : 'Já estava tudo na lista'); };
A.rcard = el => { U.cs = { r: +el.dataset.i }; modal(`<h2 class="h2">Em que dia?</h2><div class="cgrid">${[1, 2, 3, 4, 5, 6, 0].map(d => `<div><b>${D3[d]}</b><button class="btn sm" data-a="rcard-ok" data-d="${d}" data-m="a">Almoço</button><button class="btn sm" data-a="rcard-ok" data-d="${d}" data-m="j">Jantar</button></div>`).join('')}</div>`); };
A['rcard-ok'] = el => { const S = MP.S, d = el.dataset.d; S.cardapio[d] = S.cardapio[d] || {}; S.cardapio[d][el.dataset.m] = MP.RECEITAS[U.cs.r].n; save(); closeModal(); toast('Receita no cardápio de ' + DIAS[d].toLowerCase()); };

/* ---------- Cardápio da semana ---------- */
V['mais/cardapio'] = () => {
  const S = MP.S, hoje = new Date().getDay();
  const slot = (d, m) => { const v = (S.cardapio[d] || {})[m]; return `<button class="cslot ${v ? 'on' : ''}" data-a="cslot" data-d="${d}" data-m="${m}"><small>${m === 'a' ? 'Almoço' : 'Jantar'}</small>${v ? esc(v) : '<em>Toque pra escolher</em>'}</button>`; };
  return `${top('Cardápio da semana', 'Decida uma vez só. Durante a semana, é só seguir.', 'mais', ['app/cardapio.webp', 'bonus-02-cardapio-lancheira.webp'])}
  ${[1, 2, 3, 4, 5, 6, 0].map(d => `<div class="cday ${d === hoje ? 'hj' : ''}"><b>${DIAS[d]}${d === hoje ? ' · hoje' : ''}</b><div>${slot(d, 'a')}${slot(d, 'j')}</div></div>`).join('')}
  <button class="btn pri" data-a="card-compras">${I.cart} Gerar a lista de compras</button>
  <button class="btn ghost" data-a="card-auto">${I.dice} Sugerir uma semana pra mim</button>
  <button class="btn ghost red" data-a="card-limpa">Limpar o cardápio</button>
  <div class="card sage tip"><b>Truque que salva a semana</b><p>Repita o preparo-base: o frango desfiado de segunda vira torta na quarta. O feijão de domingo dura até quinta.</p></div>`;
};
A.cslot = el => {
  const d = el.dataset.d, m = el.dataset.m, v = (MP.S.cardapio[d] || {})[m] || ''; U.cs = { d, m };
  modal(`<h2 class="h2">${DIAS[d]} · ${m === 'a' ? 'Almoço' : 'Jantar'}</h2>
  <label class="search">${I.search}<input id="cs-q" data-i="csq" value="${esc(v)}" placeholder="Escreva ou escolha uma receita"></label>
  <button class="btn pri" data-a="cs-ok">Salvar o que escrevi</button>${v ? `<button class="btn ghost red" data-a="cs-del">Tirar do cardápio</button>` : ''}
  <div id="cs-l">${csLista('')}</div>`);
};
function csLista(q) { q = q.toLowerCase(); return MP.RECEITAS.filter(r => !q || r.n.toLowerCase().includes(q)).slice(0, 40).map(r => `<button class="mrow" data-a="cs-pick" data-n="${esc(r.n)}"><span><b>${esc(r.n)}</b><small>${r.t} min · ${esc(r.cat)}</small></span></button>`).join(''); }
IN.csq = el => { $('#cs-l').innerHTML = csLista(el.value); };
function csSet(v) { const S = MP.S, c = U.cs; S.cardapio[c.d] = S.cardapio[c.d] || {}; if (v) S.cardapio[c.d][c.m] = v; else delete S.cardapio[c.d][c.m]; save(); closeModal(); render(); }
A['cs-ok'] = () => csSet($('#cs-q').value.trim());
A['cs-pick'] = el => csSet(el.dataset.n);
A['cs-del'] = () => csSet('');
A['card-compras'] = () => { const S = MP.S; let n = 0, tem = false; Object.keys(S.cardapio).forEach(d => ['a', 'j'].forEach(m => { const v = S.cardapio[d][m]; if (!v) return; tem = true; const r = MP.RECEITAS.find(x => x.n === v); if (r) n += ingParaCompras(r); })); save(); toast(!tem ? 'Monte o cardápio primeiro' : n ? n + ' itens novos na lista de compras' : 'A lista já tem tudo do cardápio'); if (n) go('mais/compras'); };
A['card-auto'] = () => {
  const S = MP.S, pri = MP.RECEITAS.filter(r => ['Frango', 'Carne', 'Porco', 'Ovos', 'Massas', 'Sopas e caldos'].includes(r.cat)).map(r => r.n).sort(() => Math.random() - .5);
  let k = 0; [1, 2, 3, 4, 5, 6, 0].forEach(d => { S.cardapio[d] = S.cardapio[d] || {}; ['a', 'j'].forEach(m => { if (!S.cardapio[d][m]) S.cardapio[d][m] = pri[k++ % pri.length]; }); });
  save(); render(); toast('Semana sugerida. Troque o que quiser.');
};
A['card-limpa'] = () => { MP.S.cardapio = {}; save(); render(); };

/* ---------- Lista de compras ---------- */
V['mais/compras'] = () => {
  const S = MP.S, cats = MP.CATS.filter(c => S.compras.some(x => x.cat === c)), ok = S.compras.filter(c => c.ok).length;
  return `${top('Lista de compras', 'Da família inteira, num lugar só.', 'mais', ['app/compras.webp', ''])}
  <div class="addrow"><input class="inp" id="cp-t" placeholder="O que falta?" maxlength="50"><select class="inp" id="cp-c">${MP.CATS.map(c => `<option>${c}</option>`).join('')}</select><button class="btn pri sm" data-a="cp-add" aria-label="Adicionar">${I.plus}</button></div>
  ${S.compras.length ? cats.map(c => `<p class="sec-t">${c}</p>${S.compras.filter(x => x.cat === c).map(x => `<button class="trow ${x.ok ? 'ok' : ''}" data-a="cp-ok" data-id="${x.id}"><span class="chk">${x.ok ? I.check : ''}</span><span class="tt"><span>${esc(x.t)}</span></span></button>`).join('')}`).join('') : `<p class="empty">Sua lista está vazia. Adicione itens aqui em cima ou gere a lista pelo cardápio da semana.</p>`}
  ${ok ? `<button class="btn ghost" data-a="cp-limpa">Tirar os ${ok} já comprados</button>` : ''}
  ${S.compras.length ? `<button class="btn ghost" data-a="cp-copia">Copiar a lista (pra mandar no WhatsApp)</button>` : ''}`;
};
A['cp-add'] = () => { const t = $('#cp-t').value.trim(); if (!t) return; MP.S.compras.push({ id: uid(), t, cat: $('#cp-c').value, ok: false }); const c = $('#cp-c').value; save(); render(); $('#cp-c').value = c; $('#cp-t').focus(); };
document.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.id === 'cp-t') A['cp-add'](); });
A['cp-ok'] = el => { const x = MP.S.compras.find(c => c.id === el.dataset.id); x.ok = !x.ok; save(); render(); };
A['cp-limpa'] = () => { MP.S.compras = MP.S.compras.filter(c => !c.ok); save(); render(); };
function copiar(txt, ok) { const done = () => toast(ok); try { navigator.clipboard.writeText(txt).then(done, () => fallback()); } catch (e) { fallback(); } function fallback() { const t = document.createElement('textarea'); t.value = txt; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } catch (e) { toast('Não deu pra copiar. Selecione o texto e copie.'); } t.remove(); } }
A['cp-copia'] = () => { const S = MP.S; copiar('Lista de compras\n' + MP.CATS.filter(c => S.compras.some(x => x.cat === c && !x.ok)).map(c => '\n' + c + ':\n' + S.compras.filter(x => x.cat === c && !x.ok).map(x => '- ' + x.t).join('\n')).join('\n'), 'Lista copiada'); };

/* ---------- Monte seu pedido de receita ---------- */
function pedidoTxt() {
  const p = U.pd, S = MP.S, kids = S.perfil.filhos.filter(f => f.idade >= 0).map(f => MP.idadeTxt(f.idade)).join(', ');
  return `Sou mãe e preciso de ideias de receita simples pro dia a dia.\n\nIngredientes que tenho em casa: ${p.ing || '(escreva aqui)'}.\nVou cozinhar para ${p.pes} pessoas${kids ? ', incluindo criança(s) de ' + kids : ''}.\nTenho ${p.tempo} minutos.\nPosso usar: ${p.eq.length ? p.eq.join(', ') : 'fogão'}.\n${p.rest ? 'Restrições e alergias: ' + p.rest + '.\n' : ''}\nMe dê 3 opções de receita usando principalmente esses ingredientes. Para cada uma, escreva: nome, tempo total, lista de ingredientes com quantidades, modo de preparo em passos curtos e uma substituição possível. Use linguagem simples e medidas caseiras (xícara, colher).`;
}
V['mais/pedido'] = () => {
  const p = U.pd || (U.pd = { ing: MP.S.despensa.join(', '), pes: 4, tempo: 30, eq: ['fogão'], rest: '' });
  const EQ = ['fogão', 'forno', 'panela de pressão', 'air fryer', 'micro-ondas', 'liquidificador'];
  return `${top('Monte seu pedido de receita', 'Preencha, copie e cole no ChatGPT. Ele responde com receitas feitas pro que você tem.', 'mais', ['app/pedido.webp', 'bonus-01-assistente-ia.webp'])}
  <label class="field">O que você tem em casa<textarea class="inp" rows="3" data-i="pd" data-k="ing" placeholder="Ex.: frango, batata, cenoura, arroz">${esc(p.ing)}</textarea></label>
  <div class="two"><label class="field">Pessoas<select class="inp" data-c="pd" data-k="pes">${[2, 3, 4, 5, 6, 8].map(n => `<option ${p.pes == n ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
  <label class="field">Tempo (min)<select class="inp" data-c="pd" data-k="tempo">${[15, 20, 30, 45, 60].map(n => `<option ${p.tempo == n ? 'selected' : ''}>${n}</option>`).join('')}</select></label></div>
  <div class="field">O que você pode usar<div class="chips wrap">${EQ.map(e => `<button class="chip ${p.eq.includes(e) ? 'on' : ''}" data-a="pd-eq" data-e="${e}">${e}</button>`).join('')}</div></div>
  <label class="field">Alergias ou o que a família não come<input class="inp" data-i="pd" data-k="rest" value="${esc(p.rest)}" placeholder="Ex.: sem leite, sem pimenta"></label>
  <p class="sec-t">Seu pedido pronto</p><pre class="pedido" id="pd-out">${esc(pedidoTxt())}</pre>
  <button class="btn pri" data-a="pd-copia">Copiar o pedido</button>
  <a class="btn sec" href="https://chatgpt.com/" target="_blank" rel="noopener">Abrir o ChatGPT</a>
  <div class="card warn"><b>Antes de cozinhar</b><p>Respostas de inteligência artificial podem errar medidas, tempos e pontos de cozimento. Confira se a receita faz sentido, garanta que carnes e ovos fiquem bem cozidos e respeite as alergias da sua família.</p></div>`;
};
const pdUp = () => { const o = $('#pd-out'); if (o) o.textContent = pedidoTxt(); };
IN.pd = el => { U.pd[el.dataset.k] = el.value; pdUp(); };
CH.pd = el => { U.pd[el.dataset.k] = el.value; pdUp(); };
A['pd-eq'] = el => { const e = U.pd.eq, x = el.dataset.e, i = e.indexOf(x); if (i < 0) e.push(x); else e.splice(i, 1); el.classList.toggle('on'); pdUp(); };
A['pd-copia'] = () => copiar(pedidoTxt(), 'Pedido copiado. Agora é só colar no ChatGPT.');

/* ---------- Meu perfil ---------- */
V['mais/perfil'] = () => {
  const S = MP.S, p = S.perfil, pf = MP.PERFIS[p.tipo] || MP.PERFIS.apaga, bs = MP.blocos();
  return `${top('Meu perfil', 'Mude quando a rotina da família mudar.', 'mais')}
  <div class="card peach pfc"><img src="imagens/${pf.img}" alt=""><div><small>Seu perfil</small><b>${pf.n}</b><p>${pf.d}</p></div></div>
  <label class="field">Seu nome<input class="inp" data-i="pf-nome" value="${esc(p.nome)}" maxlength="24"></label>
  <p class="sec-t">Seus filhos</p>
  ${p.filhos.map((f, i) => `<div class="kidrow"><input class="inp" data-i="pf-fn" data-k="${i}" value="${esc(f.nome)}" maxlength="20"><select class="inp" data-c="pf-fi" data-k="${i}">${[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(a => `<option value="${a}" ${f.idade === a ? 'selected' : ''}>${a < 0 ? 'Ainda vai nascer' : a === 0 ? 'Menos de 1 ano' : a === 1 ? '1 ano' : a + ' anos'}</option>`).join('')}</select>${p.filhos.length > 1 ? `<button class="icb" data-a="pf-rm" data-k="${i}" aria-label="Remover">${I.x}</button>` : ''}</div>`).join('')}
  <button class="btn ghost" data-a="pf-add">${I.plus} Adicionar filho</button>
  <label class="field">Além da casa e dos filhos<select class="inp" data-c="pf-carga">${[['trabalha_fora', 'Trabalho fora'], ['trabalha_em_casa', 'Trabalho de casa'], ['em_casa', 'Fico em casa com eles'], ['mae_solo', 'Sou mãe solo']].map(x => `<option value="${x[0]}" ${p.carga === x[0] ? 'selected' : ''}>${x[1]}</option>`).join('')}</select></label>
  <label class="field">Hora em que a casa mais desanda<select class="inp" data-c="pf-hor">${bs.map(b => `<option value="${b.k}" ${p.horario === b.k ? 'selected' : ''}>${b.n}</option>`).join('')}</select></label>
  <p class="mini c">Tudo é salvo sozinho neste aparelho.</p>`;
};
const pfUp = () => { const S = MP.S; S.perfil.tipo = MP.calcPerfil(S.perfil); save(); };
IN['pf-nome'] = el => { MP.S.perfil.nome = el.value.trim() || MP.S.perfil.nome; save(); };
IN['pf-fn'] = el => { const f = MP.S.perfil.filhos[+el.dataset.k]; if (el.value.trim()) f.nome = el.value.trim(); save(); };
CH['pf-fi'] = el => { MP.S.perfil.filhos[+el.dataset.k].idade = +el.value; delete MP.S.kids[MP.S.perfil.filhos[+el.dataset.k].id]; pfUp(); render(); };
CH['pf-carga'] = el => { MP.S.perfil.carga = el.value; pfUp(); render(); toast('Horários do dia atualizados'); };
CH['pf-hor'] = el => { MP.S.perfil.horario = +el.value; save(); };
A['pf-add'] = () => { MP.S.perfil.filhos.push({ id: uid(), nome: 'Novo filho', idade: 3 }); pfUp(); render(); };
A['pf-rm'] = el => { MP.S.perfil.filhos.splice(+el.dataset.k, 1); pfUp(); render(); };

/* ---------- Cópia de segurança ---------- */
V['mais/backup'] = () => `${top('Cópia de segurança', 'Seus dados ficam só neste aparelho. Guarde uma cópia se for trocar de celular.', 'mais')}
  <button class="btn pri" data-a="bk-exp">${I.down} Salvar uma cópia</button>
  <label class="btn sec">Recuperar de uma cópia<input type="file" accept="application/json,.json" data-c="bk-imp" hidden></label>
  <p class="mini c">A cópia é um arquivo pequeno. Você pode mandar pra você mesma no WhatsApp ou por e-mail e abrir no celular novo.</p>
  <button class="btn ghost red" data-a="bk-zera">Apagar tudo e começar do zero</button>`;
A['bk-exp'] = () => { const b = new Blob([JSON.stringify(MP.S)], { type: 'application/json' }), a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'mae-presente-copia-' + dkey() + '.json'; document.body.appendChild(a); a.click(); a.remove(); toast('Cópia salva nos seus arquivos'); };
CH['bk-imp'] = el => { const f = el.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { try { const d = JSON.parse(r.result); if (!d || d.v !== 1 || !d.perfil) throw 0; MP.S = Object.assign(MP.novo(), d); save(); toast('Dados recuperados'); go('hoje'); } catch (e) { toast('Esse arquivo não é uma cópia do Mãe Presente'); } }; r.readAsText(f); };
A['bk-zera'] = () => modal(`<h2 class="h2">Apagar tudo?</h2><p class="sub">Seu perfil, tarefas, estrelas e listas serão apagados deste aparelho. Isso não pode ser desfeito.</p><button class="btn pri red" data-a="bk-zera-ok">Sim, apagar tudo</button><button class="btn ghost" data-a="fechar" data-f="1">Cancelar</button>`);
A['bk-zera-ok'] = () => { MP.S = MP.novo(); save(); closeModal(); location.hash = ''; MP.U.ob = { step: 0, nome: '', filhos: [{ nome: '', idade: 3 }], carga: '', horario: '' }; render(); };
})(window.MP);
