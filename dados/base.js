/* Mãe Presente — dados de base: perfis, modelos de rotina, tarefas por idade, cartões, lancheira, plano de 30 dias */
window.MP = window.MP || {};
MP.MODULOS = []; MP.RECEITAS = []; MP.BRINCADEIRAS = [];

MP.PERFIS = {
  ninho: { n: "Mãe Preparando o Ninho", img: "perfil-ninho.webp", d: "Você quer chegar no dia do parto com a casa e a rotina prontas.", dica: "Seu plano começa leve: uma tarefa de preparo por dia, sem pressa e com descanso garantido." },
  sozinha: { n: "Mãe no Comando Sozinha", img: "perfil-sozinha.webp", d: "Tudo passa por você, e ninguém divide o peso.", dica: "Seu plano tem só o essencial. Menos tarefas, bem escolhidas, pra sobrar você no fim do dia." },
  interrompida: { n: "Mãe Interrompida", img: "perfil-interrompida.webp", d: "Você começa mil coisas e é chamada antes de terminar qualquer uma.", dica: "Seu plano usa blocos de 10 minutos, que podem ser pausados e retomados sem perder o fio." },
  malabarista: { n: "Mãe Malabarista", img: "perfil-malabarista.webp", d: "Trabalho, casa e crianças, tudo ao mesmo tempo, sem pausa.", dica: "Seu plano encaixa a casa nas pontas do dia e coloca as crianças pra ajudar." },
  apaga: { n: "Mãe Apaga-Incêndio", img: "perfil-apaga-incendio.webp", d: "Você vive correndo atrás da bagunça que acabou de arrumar.", dica: "Seu plano troca a correria por uma tarefa curta em cada momento do dia." }
};

/* tarefa: [texto, bloco (0 a 3), minutos, dias da semana (0=dom) ou nada pra todo dia] */
MP.MODELOS = [
  { id: "padrao", nome: "Casa com criança", desc: "Uma tarefa curta por bloco, com um cômodo por tarde.", t: [
    ["Cozinha pronta depois do café", 0, 10], ["Louça e bancada, eles levam os pratos", 1, 15],
    ["Banheiro: pia, vaso e espelho", 2, 15, [1]], ["Roupa: uma máquina e dobrar junto", 2, 15, [2]], ["Quartos: cama feita e chão livre", 2, 15, [3]],
    ["Chão da sala e da cozinha", 2, 15, [4]], ["Geladeira e lista de compras", 2, 15, [5]], ["Brinquedos: rodízio e cestos", 2, 15, [6]], ["Preparar a semana: roupas e mochilas", 2, 15, [0]],
    ["Sala zerada depois do banho", 3, 10]] },
  { id: "interrompida", nome: "Blocos de 10 minutos", desc: "Pra quem tem bebê ou criança pequena e é interrompida o tempo todo.", t: [
    ["Pia vazia enquanto eles tomam café", 0, 10], ["Louça do almoço, em duas partes se precisar", 1, 10],
    ["Banheiro: só pia e vaso", 2, 10, [1]], ["Uma máquina de roupa", 2, 10, [2]], ["Chão da sala", 2, 10, [3]], ["Quarto das crianças: chão livre", 2, 10, [4]],
    ["Geladeira: o que vence primeiro", 2, 10, [5]], ["Dobrar roupa com eles por perto", 2, 10, [6]], ["Roupas e bolsa da semana", 2, 10, [0]],
    ["Brinquedos no cesto com música", 3, 10]] },
  { id: "sozinha", nome: "Só o essencial", desc: "Pra quem faz tudo sozinha. Poucas tarefas, bem escolhidas.", t: [
    ["Pia vazia e lixo pra fora", 0, 10], ["Louça do almoço", 1, 10],
    ["Banheiro rápido", 2, 10, [1, 4]], ["Uma máquina de roupa", 2, 10, [2, 5]], ["Chão da sala e da cozinha", 2, 10, [3]], ["Comida-base da semana", 2, 20, [6]],
    ["Sala zerada: 10 minutos e parou", 3, 10]] },
  { id: "ninho", nome: "Preparando o ninho", desc: "Pra gestantes: uma tarefa de preparo por dia, sem esforço pesado.", t: [
    ["Cozinha pronta depois do café", 0, 10], ["Louça e bancada", 1, 10],
    ["Separar roupinhas por tamanho", 2, 15, [1]], ["Lavar uma leva de roupas do bebê", 2, 15, [2]], ["Organizar o cantinho de troca", 2, 15, [3]],
    ["Congelar uma comida pra depois do parto", 2, 20, [4]], ["Revisar a mala da maternidade", 2, 10, [5]], ["Organizar uma gaveta ou prateleira", 2, 15, [6]], ["Descansar com os pés pra cima", 2, 15, [0]],
    ["Sala em ordem antes de dormir", 3, 10]] },
  { id: "fora", nome: "Pra quem trabalha fora", desc: "A casa encaixada nas pontas do dia, com reforço no fim de semana.", t: [
    ["Cozinha pronta enquanto eles tomam café", 0, 10], ["Mochilas e sapatos no lugar, com eles ajudando", 1, 10],
    ["Louça e bancada logo depois de comer", 2, 15], ["Sala zerada depois do banho", 3, 10],
    ["Banheiro e uma máquina de roupa", 1, 20, [6]], ["Preparar a semana: roupas, lancheiras e cardápio", 1, 20, [0]]] },
  { id: "muitos", nome: "Casa cheia", desc: "Pra quem tem mais de um filho. Os maiores entram nas tarefas.", t: [
    ["Cozinha pronta, cada um leva a sua louça", 0, 10], ["Louça e bancada, os maiores secam", 1, 15],
    ["Banheiro: pia, vaso e espelho", 2, 15, [1]], ["Roupa: máquina e cada um guarda a sua", 2, 15, [2]], ["Quartos: cada um arruma a sua cama", 2, 15, [3]],
    ["Chão da sala e da cozinha", 2, 15, [4]], ["Geladeira e lista de compras", 2, 15, [5]], ["Brinquedos: rodízio com todos ajudando", 2, 15, [6]], ["Preparar a semana juntos", 2, 15, [0]],
    ["Sala zerada: 10 minutos, todo mundo junto", 3, 10]] }
];
MP.PLANO_B = [["Pia vazia (ou louça empilhada de molho)", 10], ["Lixo pra fora e mesa livre", 5], ["Um abraço demorado em cada filho", 2]];

MP.TAREFAS_IDADE = [
  { k: "bebe", n: "Bebê", seg: "Bebê nunca fica sozinho no trocador, na cama ou no banho, nem por um segundo. Objetos pequenos, sacos plásticos e fios ficam fora do alcance.", t: [
    "Deixe o bebê num lugar seguro onde ele te veja enquanto você faz uma tarefa de 10 minutos.", "Narre o que você está fazendo: bebê adora ouvir a sua voz.", "Use a soneca pra UMA tarefa e depois descanse também.", "Monte um cesto de 'tesouros' seguros (colher de pau, potes, tecidos) pra ele explorar perto de você."] },
  { k: "2-3", n: "2 a 3 anos", seg: "Sempre com você por perto. Longe do alcance: produtos de limpeza, remédios, facas, fogão, ferro e tomadas.", t: [
    "Guardar os brinquedos no cesto", "Colocar a roupa suja no cesto", "Levar o prato de plástico até a pia", "Jogar papel no lixo", "Secar o que derramou com um paninho", "Colocar os sapatos no lugar", "Ajudar a dar comida pro bichinho"] },
  { k: "4-5", n: "4 a 5 anos", seg: "Nada de facas, fogão, ferro ou produtos de limpeza. Pra tirar pó, só pano seco ou úmido com água.", t: [
    "Arrumar a cama do jeito dele", "Pôr a mesa: talheres e guardanapos", "Regar uma planta", "Separar as meias por par", "Guardar a própria roupa na gaveta", "Tirar o pó dos móveis baixos", "Guardar as compras leves", "Escolher a roupa do dia seguinte"] },
  { k: "6-8", n: "6 a 8 anos", seg: "Facas, fogão e ferro continuam com o adulto. Louça de vidro e produtos de limpeza também.", t: [
    "Arrumar a cama todo dia", "Pôr e tirar a mesa", "Varrer um cômodo pequeno", "Dobrar e guardar a própria roupa", "Arrumar a mochila com o checklist", "Guardar a louça seca (plásticos e talheres sem ponta)", "Dar comida e água pro bichinho", "Montar o próprio lanche simples"] },
  { k: "9-12", n: "9 a 12 anos", seg: "Fogão e faca só com um adulto ensinando e por perto. Água sanitária e produtos fortes continuam com você.", t: [
    "Lavar a louça do lanche", "Colocar roupa na máquina com a sua orientação", "Passar pano no chão", "Levar o lixo pra fora", "Limpar a pia do banheiro com sabão", "Preparar um lanche ou sanduíche", "Ajudar o irmão menor numa tarefa", "Organizar o próprio quarto uma vez por semana"] }
];

MP.CARTOES = {
  manha: [["🌞", "Acordar e dar bom dia"], ["🚽", "Ir ao banheiro"], ["👕", "Vestir a roupa"], ["🥣", "Tomar o café"], ["🦷", "Escovar os dentes"], ["🎒", "Pegar a mochila"], ["👟", "Calçar os sapatos"]],
  noite: [["🧸", "Guardar os brinquedos"], ["🛁", "Tomar banho"], ["👚", "Vestir o pijama"], ["🍽️", "Jantar"], ["🦷", "Escovar os dentes"], ["📖", "Ouvir uma história"], ["🌙", "Apagar a luz e dormir"]]
};

/* [lanche principal, fruta, bebida ou extra] */
MP.LANCHEIRA = [
  ["Sanduíche de queijo no pão de forma", "Banana", "Água"], ["Pão com frango desfiado", "Maçã em fatias", "Água"], ["Bolo de cenoura simples", "Mexerica", "Leite ou água"],
  ["Panqueca de banana e aveia enrolada", "Uva cortada ao meio", "Água"], ["Pão de queijo", "Melancia em cubos", "Água"], ["Tapioca com queijo", "Mamão em cubos", "Água"],
  ["Biscoito de aveia e banana", "Pera", "Iogurte natural"], ["Sanduíche de ovo mexido", "Morango", "Água"], ["Cuscuz com queijo", "Banana", "Água de coco"],
  ["Muffin salgado de legumes", "Maçã", "Água"], ["Torrada com requeijão", "Kiwi em rodelas", "Água"], ["Bolinho de arroz de forno", "Laranja em gomos", "Água"],
  ["Pão com pasta de atum", "Manga em cubos", "Água"], ["Queijo em cubos e torradinhas", "Uva cortada ao meio", "Água"], ["Crepioca de queijo", "Banana", "Suco natural"],
  ["Bolo de banana sem cobertura", "Melão em cubos", "Leite ou água"], ["Wrap de frango e cenoura ralada", "Mexerica", "Água"], ["Pipoca de panela (sem bala e sem corante)", "Maçã", "Água"],
  ["Sanduíche de requeijão com cenoura ralada", "Goiaba em fatias", "Água"], ["Ovo cozido e palitos de cenoura cozida", "Banana", "Água"]
];

MP.MOCHILA = {
  mochila: ["Agenda ou caderno de recados conferido", "Lição de casa feita e guardada", "Estojo completo", "Garrafa de água cheia", "Uniforme e sapato separados", "Casaco ou muda de roupa", "Bilhetes e autorizações assinados"],
  lancheira: ["Lanche principal", "Uma fruta", "Bebida", "Guardanapo e talher, se precisar", "Lancheira e potes lavados na volta"]
};

MP.RAPIDA = {
  sala: { n: "Sala", kid: "Recolher os brinquedos pro cesto enquanto toca uma música. Quando a música acabar, acabou.", passos: [["Recolha lixo, copos e pratos", 2], ["Tudo que não é da sala vai pra um cesto só", 3], ["Arrume almofadas e mantas", 2], ["Passe um pano na mesa de centro e no rack", 3], ["Varra ou aspire o meio da sala", 5]] },
  cozinha: { n: "Cozinha", kid: "Guardar os potes de plástico e os talheres sem ponta que já estão secos.", passos: [["Guarde os alimentos e jogue fora os restos", 2], ["Louça: lave ou empilhe de molho", 6], ["Limpe a bancada e o fogão frio", 4], ["Varra o chão e tire o lixo", 3]] },
  banheiro: { n: "Banheiro", kid: "Juntar as toalhas e a roupa suja e levar pro cesto.", passos: [["Tire lixo, roupas e toalhas usadas", 2], ["Limpe a pia e o espelho", 4], ["Limpe o vaso por fora e por dentro", 4], ["Enxágue o box e seque o chão", 5]] },
  quarto: { n: "Quarto das crianças", kid: "Arrumar a cama do jeito dele e escolher 3 brinquedos pra ficar na prateleira.", passos: [["Abra a janela", 1], ["Arrume as camas", 3], ["Roupa suja no cesto, roupa limpa na gaveta", 4], ["Brinquedos nos cestos", 4], ["Varra o chão", 3]] },
  tudo: { n: "Visita chegando", kid: "Guardar os sapatos da entrada e esconder os brinquedos no cesto.", passos: [["Entrada e sala: recolha tudo num cesto", 4], ["Banheiro: pia, vaso e toalha limpa", 4], ["Cozinha: louça de molho e bancada limpa", 4], ["Lixos pra fora e janelas abertas", 3]] }
};

MP.PLANO30 = [
  ["Só observe", "Hoje não mude nada. Repare em **3 momentos** em que as crianças ficam ocupadas por 10 minutos e anote."],
  ["A primeira tarefa encaixada", "Escolha **um** desses momentos e faça uma tarefa de 10 minutos nele. Só uma."],
  ["Pia vazia antes de dormir", "Termine o dia com a pia vazia ou a louça de molho. Amanhã você começa leve."],
  ["Um cesto na sala", "Coloque um cesto ou caixa na sala. Brinquedo espalhado agora tem pra onde ir."],
  ["Música de guardar", "Escolha uma música e guarde os brinquedos com as crianças até ela acabar."],
  ["Roupa do dia seguinte", "Separe hoje à noite a roupa de amanhã de todo mundo. A manhã agradece."],
  ["Descanso de verdade", "Hoje a missão é descansar 15 minutos sem celular e sem culpa. Faz parte do plano."],
  ["Monte os 4 blocos", "Abra o **Meu Dia** e confira se cada bloco tem uma tarefa curta. Ajuste o que não cabe."],
  ["A primeira tarefa da criança", "Na aba **Crianças**, escolha 2 tarefas da idade e mostre o quadro de estrelas."],
  ["Ensine em 4 passos", "Pegue uma tarefa e ensine assim: você faz, vocês fazem juntos, ela faz com você olhando, ela faz sozinha."],
  ["15 minutos de sala", "Use a ferramenta **Casa pronta em 15 minutos** na sala. Parou o cronômetro, parou você."],
  ["Brincadeira sem celular", "Faça a brincadeira do dia com o celular longe. Dez minutos inteiros valem ouro."],
  ["Cardápio de 3 dias", "Monte o cardápio só dos próximos 3 dias. Pequeno assim, já tira um peso da cabeça."],
  ["Revisão da semana", "O que funcionou? O que não coube? Tire uma tarefa que pesou e mantenha as que deram certo."],
  ["Uma máquina por dia", "Em vez de juntar a montanha, lave uma leva pequena hoje e guarde hoje."],
  ["Rodízio de brinquedos", "Guarde metade dos brinquedos numa caixa fechada. Daqui a duas semanas, troque."],
  ["Rotina da noite", "Teste os cartões da **rotina da noite** com a criança. Comemore cada passo."],
  ["Mochila na véspera", "Use o checklist da mochila hoje à noite. A meta é uma manhã sem correria."],
  ["Plano B de propósito", "Ative o **Plano B** num dia difícil desta semana. Sentir que 'só o essencial' basta é libertador."],
  ["Comida-base", "Cozinhe um preparo-base (frango desfiado ou carne moída) pra usar em duas refeições."],
  ["Descanso de verdade (de novo)", "15 minutos seus. Chá, banho demorado, pés pra cima. Sem culpa."],
  ["Divida uma tarefa", "Peça a alguém de casa pra assumir **uma** tarefa fixa. Diga qual, quando e deixe fazer do jeito dele."],
  ["Lista da casa na geladeira", "Escreva num papel as tarefas da semana e quem faz cada uma. O que está visível deixa de morar só na sua cabeça."],
  ["Rotina da manhã", "Teste os cartões da **rotina da manhã**. Acorde 10 minutos antes só neste primeiro dia."],
  ["Banheiro em 10", "Pia, vaso e espelho. Dez minutos. O resto do banheiro fica pro dia dele."],
  ["Um ritual só de vocês", "Crie um ritual curto com cada filho: história, conversa no caminho, música no banho."],
  ["Geladeira em ordem", "Passe o que vence primeiro pra frente e anote o que falta direto na lista de compras."],
  ["Revisão das estrelas", "Conte as estrelas da semana com as crianças e cumpra o combinado."],
  ["A semana inteira encaixada", "Confira o **Meu Dia** de segunda a domingo. Está leve? Está possível? Ajuste até ficar."],
  ["Comemore", "Trinta dias! Escolha um jeito de comemorar com eles. Você encaixou a casa na vida, e não o contrário."]
];

MP.CATS = ["Hortifruti", "Açougue", "Mercearia", "Laticínios e frios", "Padaria", "Limpeza", "Higiene", "Crianças", "Receitas", "Outros"];
MP.CAT_E = { "Arroz e feijão": "🍚", "Frango": "🍗", "Carne": "🥩", "Porco": "🍖", "Ovos": "🍳", "Legumes": "🥕", "Massas": "🍝", "Sopas e caldos": "🍲", "Lanches": "🥪" };
MP.ING = [
  ["Básicos", ["arroz", "feijão", "macarrão", "farinha de trigo", "fubá", "ovos", "leite", "queijo", "pão", "aveia", "molho de tomate", "creme de leite", "requeijão", "tapioca"]],
  ["Carnes", ["frango", "carne moída", "carne bovina", "linguiça", "porco", "atum"]],
  ["Legumes e verduras", ["batata", "cenoura", "abobrinha", "chuchu", "abóbora", "tomate", "couve", "repolho", "brócolis", "milho", "mandioca", "batata-doce", "vagem"]],
  ["Frutas", ["banana", "maçã", "limão"]]
];
