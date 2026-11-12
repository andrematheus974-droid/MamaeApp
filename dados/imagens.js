/* Mãe Presente — fotos dentro das lições.
   Chave: 'modulo/lição/tela' (começando do zero). img = uma foto no topo da tela. imgs = duas fotos (antes e depois) nas telas de comparação.
   Pra trocar uma foto, mude o nome do arquivo aqui. Pra uma tela sem foto, salve o arquivo em imagens/licoes/<modulo>-<lição>-<tela>.webp (contando a partir de 1) e ela aparece sozinha. */
(function (MP) {
const F = {
  'rotina-encaixada/0/1': 'capa-2-mae-cansada.webp',
  'rotina-encaixada/0/2': ['comparativo-antes.webp', 'comparativo-depois.webp'],
  'rotina-encaixada/0/7': 'capa-1-bagunca.webp',
  'rotina-encaixada/1/1': 'idade-3-6.webp',
  'rotina-encaixada/1/7': 'vitoria-descanso.webp',
  'rotina-encaixada/2/1': 'dia-30.webp',
  'rotina-encaixada/3/1': 'primeiro-passo.webp',
  'rotina-encaixada/4/1': 'carga-mental.webp',
  'rotina-encaixada/4/3': ['dia-1.webp', 'dia-30.webp'],
  'faxina-crianca/0/1': 'vitoria-casa.webp',
  'faxina-crianca/1/5': 'vitoria-ajudando.webp',
  'faxina-crianca/2/3': 'idade-0-2.webp',
  'faxina-crianca/3/1': 'perfil-interrompida.webp',
  'brinquedos/0/1': 'capa-1-bagunca.webp',
  'brinquedos/0/3': ['oferta-antes.webp', 'oferta-depois.webp'],
  'brinquedos/2/1': 'capa-4-sala-arrumada.webp',
  'brinquedos/3/1': 'vitoria-brincar.webp',
  'tarefas-idade/0/1': 'vitoria-ajudando.webp',
  'tarefas-idade/0/2': 'idade-mistas.webp',
  'tarefas-idade/1/2': 'idade-7-12.webp',
  'tarefas-idade/2/1': 'capa-3-mae-brincando.webp',
  'tarefas-idade/3/1': 'idade-3-6.webp',
  'tarefas-idade/4/3': 'culpa-x-presenca.webp',
  'cozinha-mae/1/1': 'bonus-02-cardapio-lancheira.webp',
  'cozinha-mae/2/1': 'idade-3-6.webp',
  'cozinha-mae/4/4': 'vitoria-casa.webp'
};
Object.keys(F).forEach(k => {
  const p = k.split('/'), m = MP.MODULOS.find(x => x.id === p[0]), s = m && m.licoes && m.licoes[+p[1]] && m.licoes[+p[1]].telas[+p[2]];
  if (!s) return; if (Array.isArray(F[k])) s.imgs = F[k]; else s.img = F[k];
});
})(window.MP);
